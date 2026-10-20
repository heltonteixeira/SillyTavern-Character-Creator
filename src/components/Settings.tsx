import React, { FC, useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { st_echo } from 'sillytavern-utils-lib/config';
import {
  PresetItem,
  SortableListItemData,
  STButton,
  STInput,
  STPresetSelect,
  STSelect,
  STSortableList,
  STTextarea,
} from 'sillytavern-utils-lib/components/react';
import {
  convertToVariableName,
  DEFAULT_PROMPT_CONTENTS,
  DEFAULT_SETTINGS,
  ExtensionSettings,
  MainContextPromptBlock,
  MainContextTemplatePreset,
  MessageRole,
  settingsManager,
  SYSTEM_PROMPT_KEYS,
  SystemPromptKey,
} from '../settings.js';
import {
  CHAT_HISTORY_PROMPT,
  insertPrompt,
  removePrompt,
  removePromptFromAll,
  uniquePromptId,
} from '../main-context-template.js';
import { useForceUpdate } from '../hooks/useForceUpdate.js';

const globalContext = SillyTavern.getContext();

const CHAT_HISTORY_LABEL = 'Chat History';

const ROLE_OPTIONS: { value: MessageRole; label: string }[] = [
  { value: 'system', label: 'System' },
  { value: 'user', label: 'User' },
  { value: 'assistant', label: 'Assistant' },
];

// Like ST's Prompt Manager, only the user and assistant roles get an icon
const ROLE_ICONS: Partial<Record<MessageRole, { icon: string; title: string }>> = {
  user: { icon: 'fa-user', title: 'Sent as User' },
  assistant: { icon: 'fa-robot', title: 'Sent as Assistant' },
};

const isSystemPrompt = (promptName: string) => SYSTEM_PROMPT_KEYS.includes(promptName as SystemPromptKey);

export const CharacterCreatorSettings: FC = () => {
  // --- State Management ---
  const forceUpdate = useForceUpdate();
  const settings = settingsManager.getSettings();
  // The prompt chosen in the dropdown under the template list
  const [libraryPromptName, setLibraryPromptName] = useState<string>(CHAT_HISTORY_PROMPT);
  // The prompt open in the editor, if any
  const [editingPromptName, setEditingPromptName] = useState<string | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  // Bring the editor into view when a prompt is opened
  useEffect(() => {
    if (editingPromptName) editorRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [editingPromptName]);

  const updateAndRefresh = useCallback(
    (updater: (currentSettings: ExtensionSettings) => void) => {
      const currentSettings = settingsManager.getSettings();
      updater(currentSettings);
      settingsManager.saveSettings();
      forceUpdate();
    },
    [forceUpdate],
  );

  const getPromptLabel = (promptName: string) =>
    promptName === CHAT_HISTORY_PROMPT ? CHAT_HISTORY_LABEL : (settings.prompts[promptName]?.label ?? promptName);

  const updateCurrentTemplate = (updater: (preset: MainContextTemplatePreset) => MainContextTemplatePreset) => {
    updateAndRefresh((s) => {
      const preset = s.mainContextTemplatePresets[s.mainContextTemplatePreset];
      if (!preset) return;
      s.mainContextTemplatePresets = {
        ...s.mainContextTemplatePresets,
        [s.mainContextTemplatePreset]: updater(preset),
      };
    });
  };

  // --- Derived Data for UI ---
  const mainContextPresetItems = useMemo(
    (): PresetItem[] => Object.keys(settings.mainContextTemplatePresets).map((key) => ({ value: key, label: key })),
    [settings.mainContextTemplatePresets],
  );

  const libraryItems = useMemo(
    (): PresetItem[] => [
      { value: CHAT_HISTORY_PROMPT, label: CHAT_HISTORY_LABEL },
      ...Object.entries(settings.prompts)
        .map(([key, prompt]) => ({ value: key, label: prompt.label || key }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    ],
    [settings.prompts],
  );
  const selectedLibraryPrompt = libraryItems.some((item) => item.value === libraryPromptName)
    ? libraryPromptName
    : CHAT_HISTORY_PROMPT;

  const currentTemplate = settings.mainContextTemplatePresets[settings.mainContextTemplatePreset];

  // --- Handlers for Main Context Template ---
  const handleMainContextPresetChange = (newValue?: string) => {
    updateAndRefresh((s) => {
      s.mainContextTemplatePreset = newValue ?? 'default';
    });
  };

  const handleMainContextPresetsChange = (newItems: PresetItem[]) => {
    updateAndRefresh((s) => {
      const newPresets: Record<string, MainContextTemplatePreset> = {};
      newItems.forEach((item) => {
        newPresets[item.value] =
          s.mainContextTemplatePresets[item.value] ??
          structuredClone(
            s.mainContextTemplatePresets[s.mainContextTemplatePreset] ?? s.mainContextTemplatePresets['default'],
          );
      });
      s.mainContextTemplatePresets = newPresets;
    });
  };

  // Reorder. On/off is set with each row's toggle, the role in the editor.
  const handleMainContextListChange = (newListItems: SortableListItemData[]) => {
    updateCurrentTemplate((preset) => ({
      ...preset,
      prompts: newListItems.map((item): MainContextPromptBlock => {
        const block = preset.prompts.find((p) => p.promptName === item.id);
        return { promptName: item.id, enabled: item.enabled, role: block?.role ?? 'system' };
      }),
    }));
  };

  const handleToggle = (promptName: string) => {
    updateCurrentTemplate((preset) => ({
      ...preset,
      prompts: preset.prompts.map((p) => (p.promptName === promptName ? { ...p, enabled: !p.enabled } : p)),
    }));
  };

  const handleRoleChange = (promptName: string, role: MessageRole) => {
    updateCurrentTemplate((preset) => ({
      ...preset,
      prompts: preset.prompts.map((p) => (p.promptName === promptName ? { ...p, role } : p)),
    }));
  };

  const handleRestoreMainContextDefault = async () => {
    const name = settings.mainContextTemplatePreset;
    const confirm = await globalContext.Popup.show.confirm(
      'Restore default',
      `Reset "${name}" to the default prompt list?`,
    );
    if (!confirm) return;
    updateCurrentTemplate(() => structuredClone(DEFAULT_SETTINGS.mainContextTemplatePresets['default']));
  };

  // --- Handlers for the prompt dropdown ---
  const handleInsertPrompt = () => {
    updateCurrentTemplate((preset) => insertPrompt(preset, selectedLibraryPrompt));
  };

  const handleDeletePrompt = async () => {
    const promptName = selectedLibraryPrompt;
    if (promptName === CHAT_HISTORY_PROMPT || isSystemPrompt(promptName)) return;
    const confirm = await globalContext.Popup.show.confirm(
      'Delete prompt',
      `Are you sure you want to delete "${getPromptLabel(promptName)}"?`,
    );
    if (!confirm) return;
    updateAndRefresh((s) => {
      const { [promptName]: _deleted, ...restPrompts } = s.prompts;
      // @ts-ignore
      s.prompts = restPrompts;
      s.mainContextTemplatePresets = removePromptFromAll(s.mainContextTemplatePresets, promptName);
    });
    if (editingPromptName === promptName) setEditingPromptName(null);
  };

  const handleNewPrompt = async () => {
    const input = await globalContext.Popup.show.input('New prompt', 'Enter a name for the new prompt:', '');
    const name = input?.trim();
    if (!name) return;
    if (Object.values(settings.prompts).some((p) => p.label.toLowerCase() === name.toLowerCase())) {
      st_echo('error', `A prompt named "${name}" already exists.`);
      return;
    }
    const promptName = uniquePromptId(convertToVariableName(name), Object.keys(settings.prompts));
    updateAndRefresh((s) => {
      s.prompts = { ...s.prompts, [promptName]: { label: name, content: '', isDefault: false } };
      const preset = s.mainContextTemplatePresets[s.mainContextTemplatePreset];
      if (preset) {
        s.mainContextTemplatePresets = {
          ...s.mainContextTemplatePresets,
          [s.mainContextTemplatePreset]: insertPrompt(preset, promptName),
        };
      }
    });
    setLibraryPromptName(promptName);
    setEditingPromptName(promptName);
  };

  // --- Handlers for the prompt editor ---
  const editingPrompt = editingPromptName ? settings.prompts[editingPromptName] : undefined;

  const handlePromptLabelChange = (label: string) => {
    if (!editingPromptName) return;
    updateAndRefresh((s) => {
      s.prompts = { ...s.prompts, [editingPromptName]: { ...s.prompts[editingPromptName], label } };
    });
  };

  const handlePromptLabelBlur = () => {
    // A prompt needs a name to be found in the lists
    if (editingPromptName && !editingPrompt?.label.trim()) handlePromptLabelChange(editingPromptName);
  };

  const handlePromptContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!editingPromptName) return;
    const newContent = e.target.value;
    updateAndRefresh((s) => {
      const prompt = s.prompts[editingPromptName];
      if (prompt) {
        s.prompts = {
          ...s.prompts,
          [editingPromptName]: {
            ...prompt,
            content: newContent,
            isDefault: isSystemPrompt(editingPromptName)
              ? DEFAULT_PROMPT_CONTENTS[editingPromptName as SystemPromptKey] === newContent
              : false,
          },
        };
      }
    });
  };

  const handleRestorePromptDefault = async () => {
    if (!editingPromptName || !editingPrompt || !isSystemPrompt(editingPromptName)) return;
    const confirm = await globalContext.Popup.show.confirm(
      'Restore Default',
      `Restore default for "${editingPrompt.label}"?`,
    );
    if (!confirm) return;
    updateAndRefresh((s) => {
      s.prompts = {
        ...s.prompts,
        [editingPromptName]: {
          ...s.prompts[editingPromptName],
          content: DEFAULT_PROMPT_CONTENTS[editingPromptName as SystemPromptKey],
          isDefault: true,
        },
      };
    });
  };

  // --- Other Settings & Reset ---
  const handleResetEverything = async () => {
    const confirm = await globalContext.Popup.show.confirm('Reset Everything', 'Are you sure? This cannot be undone.');
    if (confirm) {
      settingsManager.resetSettings();
      setEditingPromptName(null);
      forceUpdate();
      st_echo('success', 'Settings have been reset.');
    }
  };

  const canDeleteSelected = selectedLibraryPrompt !== CHAT_HISTORY_PROMPT && !isSystemPrompt(selectedLibraryPrompt);

  // `block` is the prompt's entry in the current template, whose role is set here, like in ST's prompt editor
  const renderEditor = (block?: MainContextPromptBlock) =>
    editingPromptName &&
    editingPrompt && (
      <div className="charCreator_promptEditor" ref={editorRef}>
        {!isSystemPrompt(editingPromptName) && (
          <>
            <label className="charCreator_settingsLabel">Name</label>
            <STInput
              type="text"
              value={editingPrompt.label}
              onChange={(e) => handlePromptLabelChange(e.target.value)}
              onBlur={handlePromptLabelBlur}
            />
          </>
        )}
        {block && (
          <>
            <label className="charCreator_settingsLabel">Role</label>
            <STSelect
              value={block.role}
              onChange={(e) => handleRoleChange(block.promptName, e.target.value as MessageRole)}
            >
              {ROLE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </STSelect>
          </>
        )}
        <div className="charCreator_promptEditorHeader">
          <label className="charCreator_settingsLabel">Prompt</label>
          {isSystemPrompt(editingPromptName) && (
            <STButton
              className="fa-solid fa-undo"
              title="Restore this prompt to default"
              onClick={handleRestorePromptDefault}
            />
          )}
          <STButton className="fa-solid fa-xmark" title="Close" onClick={() => setEditingPromptName(null)} />
        </div>
        <STTextarea
          value={editingPrompt.content}
          onChange={handlePromptContentChange}
          placeholder="Prompt text"
          rows={14}
          style={{ width: '100%' }}
        />
      </div>
    );

  // The editor opens under the prompt's row, or under the prompt bar if the template doesn't have the prompt
  const isEditingInList = !!currentTemplate?.prompts.some((p) => p.promptName === editingPromptName);

  const mainContextListItems = (currentTemplate?.prompts ?? []).map((block): SortableListItemData => {
    const isChatHistory = block.promptName === CHAT_HISTORY_PROMPT;
    const exists = isChatHistory || !!settings.prompts[block.promptName];
    const label = getPromptLabel(block.promptName);
    return {
      id: block.promptName,
      enabled: block.enabled,
      // The whole row is drawn here (toggle included), so the editor can open under it
      label: (
        <>
          <div className={`charCreator_promptRow${block.enabled ? '' : ' charCreator_promptRowOff'}`}>
            <span className="charCreator_promptName" title={label}>
              <span className="charCreator_promptNameText">{label}</span>
              {!isChatHistory && ROLE_ICONS[block.role] && (
                <span
                  className={`charCreator_promptRole fa-xs fa-solid ${ROLE_ICONS[block.role]!.icon}`}
                  title={ROLE_ICONS[block.role]!.title}
                />
              )}
            </span>
            <STButton
              overrideDefaults
              className="charCreator_promptAction caution fa-solid fa-chain-broken"
              title="Remove from this template"
              onClick={() => updateCurrentTemplate((preset) => removePrompt(preset, block.promptName))}
            />
            {exists && !isChatHistory ? (
              <STButton
                overrideDefaults
                className="charCreator_promptAction fa-solid fa-pencil"
                title="Edit prompt"
                onClick={() => setEditingPromptName(block.promptName)}
              />
            ) : (
              <span className="charCreator_promptAction" />
            )}
            <STButton
              overrideDefaults
              className={`charCreator_promptAction charCreator_promptToggle fa-solid ${block.enabled ? 'fa-toggle-on' : 'fa-toggle-off'}`}
              title={block.enabled ? 'Switch off' : 'Switch on'}
              onClick={() => handleToggle(block.promptName)}
            />
          </div>
          {editingPromptName === block.promptName && renderEditor(block)}
        </>
      ),
    };
  });

  return (
    <div className="charCreator_settings">
      <div style={{ marginTop: '10px' }}>
        <div className="title_restorable">
          <span>Main Context Template</span>
        </div>
        <label className="charCreator_settingsLabel">Template</label>
        <STPresetSelect
          label="Template"
          items={mainContextPresetItems}
          value={settings.mainContextTemplatePreset}
          readOnlyValues={['default']}
          onChange={handleMainContextPresetChange}
          onItemsChange={handleMainContextPresetsChange}
          enableCreate
          enableRename
          enableDelete
        />
        <label className="charCreator_settingsLabel">Prompts</label>
        <div className="charCreator_promptBar">
          <STSelect value={selectedLibraryPrompt} onChange={(e) => setLibraryPromptName(e.target.value)}>
            {libraryItems.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </STSelect>
          <STButton className="fa-solid fa-chain" title="Insert prompt" onClick={handleInsertPrompt} />
          <STButton
            className="fa-solid fa-pencil"
            title="Edit prompt"
            disabled={selectedLibraryPrompt === CHAT_HISTORY_PROMPT}
            onClick={() => setEditingPromptName(selectedLibraryPrompt)}
          />
          <STButton
            className="caution fa-solid fa-x"
            title="Delete prompt"
            disabled={!canDeleteSelected}
            onClick={handleDeletePrompt}
          />
          <STButton
            className="fa-solid fa-undo"
            title="Reset this template to the default prompt list"
            onClick={handleRestoreMainContextDefault}
          />
          <STButton className="fa-solid fa-plus-square" title="New prompt" onClick={handleNewPrompt} />
        </div>
        {!isEditingInList && renderEditor()}
        <div style={{ marginTop: '5px' }}>
          <STSortableList items={mainContextListItems} onItemsChange={handleMainContextListChange} />
        </div>
      </div>

      <hr style={{ margin: '15px 0' }} />

      <label className="checkbox_label" style={{ marginTop: '15px' }}>
        <input
          type="checkbox"
          checked={settings.showSaveAsWorldInfoEntry.show}
          onChange={(e) =>
            updateAndRefresh((s) => {
              s.showSaveAsWorldInfoEntry.show = e.target.checked;
            })
          }
        />
        Show "Save as World Info Entry" option in popup
      </label>

      <hr style={{ margin: '15px 0' }} />

      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <STButton className="danger_button" style={{ width: 'auto' }} onClick={handleResetEverything}>
          <i style={{ marginRight: '10px' }} className="fa-solid fa-triangle-exclamation" />I messed up, reset
          everything
        </STButton>
      </div>
    </div>
  );
};
