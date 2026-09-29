import { renderStoryString as Q2, persona_description_positions as av } from "../../../../power-user.js";
import { parseMesExamples as J2, baseChatReplace as K2, chat_metadata as Ls, getMaxContextSize as W2, name1 as _r, name2 as Qr, this_chid as Ht, extension_prompt_types as wa, depth_prompt_role_default as e_, depth_prompt_depth_default as t_ } from "../../../../../script.js";
import { createWorldInfoEntry as n_, world_info_include_names as r_, wi_anchor_position as a_, world_names as iv } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as i_, formatInstructModeSystemPrompt as s_ } from "../../../../instruct-mode.js";
import { appendFileContent as l_ } from "../../../../chats.js";
import { setOpenAIMessages as o_, setOpenAIMessageExamples as u_, formatWorldInfo as c_, getPromptPosition as f_, getPromptRole as d_, prepareOpenAIMessages as h_ } from "../../../../openai.js";
import { metadata_keys as Ps } from "../../../../authors-note.js";
import { getGroupDepthPrompts as p_, selected_group as Un } from "../../../../group-chats.js";
import { getRegexedString as m_, regex_placement as sv } from "../../../regex/engine.js";
import { removeFromArray as lv, runAfterAnimation as g_ } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as wi, fixToastrForDialogs as Xf } from "../../../../popup.js";
import ov from "../../../../../lib/dialog-polyfill.esm.js";
function l0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var $f = { exports: {} }, Is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uv;
function v_() {
  if (uv) return Is;
  uv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function a(s, o, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      u = {};
      for (var p in o)
        p !== "key" && (u[p] = o[p]);
    } else u = o;
    return o = u.ref, {
      $$typeof: t,
      type: s,
      key: f,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return Is.Fragment = r, Is.jsx = a, Is.jsxs = a, Is;
}
var cv;
function y_() {
  return cv || (cv = 1, $f.exports = v_()), $f.exports;
}
var T = y_(), Qf = { exports: {} }, je = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fv;
function b_() {
  if (fv) return je;
  fv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function b(j) {
    return j === null || typeof j != "object" ? null : (j = _ && j[_] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var v = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, d = Object.assign, S = {};
  function E(j, J, ae) {
    this.props = j, this.context = J, this.refs = S, this.updater = ae || v;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(j, J) {
    if (typeof j != "object" && typeof j != "function" && j != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, j, J, "setState");
  }, E.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function O() {
  }
  O.prototype = E.prototype;
  function w(j, J, ae) {
    this.props = j, this.context = J, this.refs = S, this.updater = ae || v;
  }
  var D = w.prototype = new O();
  D.constructor = w, d(D, E.prototype), D.isPureReactComponent = !0;
  var x = Array.isArray, A = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function k(j, J, ae, se, le, Ie) {
    return ae = Ie.ref, {
      $$typeof: t,
      type: j,
      key: J,
      ref: ae !== void 0 ? ae : null,
      props: Ie
    };
  }
  function P(j, J) {
    return k(
      j.type,
      J,
      void 0,
      void 0,
      void 0,
      j.props
    );
  }
  function X(j) {
    return typeof j == "object" && j !== null && j.$$typeof === t;
  }
  function U(j) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(ae) {
      return J[ae];
    });
  }
  var G = /\/+/g;
  function Q(j, J) {
    return typeof j == "object" && j !== null && j.key != null ? U("" + j.key) : J.toString(36);
  }
  function oe() {
  }
  function fe(j) {
    switch (j.status) {
      case "fulfilled":
        return j.value;
      case "rejected":
        throw j.reason;
      default:
        switch (typeof j.status == "string" ? j.then(oe, oe) : (j.status = "pending", j.then(
          function(J) {
            j.status === "pending" && (j.status = "fulfilled", j.value = J);
          },
          function(J) {
            j.status === "pending" && (j.status = "rejected", j.reason = J);
          }
        )), j.status) {
          case "fulfilled":
            return j.value;
          case "rejected":
            throw j.reason;
        }
    }
    throw j;
  }
  function Ee(j, J, ae, se, le) {
    var Ie = typeof j;
    (Ie === "undefined" || Ie === "boolean") && (j = null);
    var V = !1;
    if (j === null) V = !0;
    else
      switch (Ie) {
        case "bigint":
        case "string":
        case "number":
          V = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case t:
            case r:
              V = !0;
              break;
            case y:
              return V = j._init, Ee(
                V(j._payload),
                J,
                ae,
                se,
                le
              );
          }
      }
    if (V)
      return le = le(j), V = se === "" ? "." + Q(j, 0) : se, x(le) ? (ae = "", V != null && (ae = V.replace(G, "$&/") + "/"), Ee(le, J, ae, "", function(Ve) {
        return Ve;
      })) : le != null && (X(le) && (le = P(
        le,
        ae + (le.key == null || j && j.key === le.key ? "" : ("" + le.key).replace(
          G,
          "$&/"
        ) + "/") + V
      )), J.push(le)), 1;
    V = 0;
    var me = se === "" ? "." : se + ":";
    if (x(j))
      for (var ve = 0; ve < j.length; ve++)
        se = j[ve], Ie = me + Q(se, ve), V += Ee(
          se,
          J,
          ae,
          Ie,
          le
        );
    else if (ve = b(j), typeof ve == "function")
      for (j = ve.call(j), ve = 0; !(se = j.next()).done; )
        se = se.value, Ie = me + Q(se, ve++), V += Ee(
          se,
          J,
          ae,
          Ie,
          le
        );
    else if (Ie === "object") {
      if (typeof j.then == "function")
        return Ee(
          fe(j),
          J,
          ae,
          se,
          le
        );
      throw J = String(j), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return V;
  }
  function H(j, J, ae) {
    if (j == null) return j;
    var se = [], le = 0;
    return Ee(j, se, "", "", function(Ie) {
      return J.call(ae, Ie, le++);
    }), se;
  }
  function te(j) {
    if (j._status === -1) {
      var J = j._result;
      J = J(), J.then(
        function(ae) {
          (j._status === 0 || j._status === -1) && (j._status = 1, j._result = ae);
        },
        function(ae) {
          (j._status === 0 || j._status === -1) && (j._status = 2, j._result = ae);
        }
      ), j._status === -1 && (j._status = 0, j._result = J);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var ue = typeof reportError == "function" ? reportError : function(j) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var J = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j),
        error: j
      });
      if (!window.dispatchEvent(J)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", j);
      return;
    }
    console.error(j);
  };
  function Le() {
  }
  return je.Children = {
    map: H,
    forEach: function(j, J, ae) {
      H(
        j,
        function() {
          J.apply(this, arguments);
        },
        ae
      );
    },
    count: function(j) {
      var J = 0;
      return H(j, function() {
        J++;
      }), J;
    },
    toArray: function(j) {
      return H(j, function(J) {
        return J;
      }) || [];
    },
    only: function(j) {
      if (!X(j))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return j;
    }
  }, je.Component = E, je.Fragment = a, je.Profiler = o, je.PureComponent = w, je.StrictMode = s, je.Suspense = h, je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A, je.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(j) {
      return A.H.useMemoCache(j);
    }
  }, je.cache = function(j) {
    return function() {
      return j.apply(null, arguments);
    };
  }, je.cloneElement = function(j, J, ae) {
    if (j == null)
      throw Error(
        "The argument must be a React element, but you passed " + j + "."
      );
    var se = d({}, j.props), le = j.key, Ie = void 0;
    if (J != null)
      for (V in J.ref !== void 0 && (Ie = void 0), J.key !== void 0 && (le = "" + J.key), J)
        !M.call(J, V) || V === "key" || V === "__self" || V === "__source" || V === "ref" && J.ref === void 0 || (se[V] = J[V]);
    var V = arguments.length - 2;
    if (V === 1) se.children = ae;
    else if (1 < V) {
      for (var me = Array(V), ve = 0; ve < V; ve++)
        me[ve] = arguments[ve + 2];
      se.children = me;
    }
    return k(j.type, le, void 0, void 0, Ie, se);
  }, je.createContext = function(j) {
    return j = {
      $$typeof: f,
      _currentValue: j,
      _currentValue2: j,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, j.Provider = j, j.Consumer = {
      $$typeof: u,
      _context: j
    }, j;
  }, je.createElement = function(j, J, ae) {
    var se, le = {}, Ie = null;
    if (J != null)
      for (se in J.key !== void 0 && (Ie = "" + J.key), J)
        M.call(J, se) && se !== "key" && se !== "__self" && se !== "__source" && (le[se] = J[se]);
    var V = arguments.length - 2;
    if (V === 1) le.children = ae;
    else if (1 < V) {
      for (var me = Array(V), ve = 0; ve < V; ve++)
        me[ve] = arguments[ve + 2];
      le.children = me;
    }
    if (j && j.defaultProps)
      for (se in V = j.defaultProps, V)
        le[se] === void 0 && (le[se] = V[se]);
    return k(j, Ie, void 0, void 0, null, le);
  }, je.createRef = function() {
    return { current: null };
  }, je.forwardRef = function(j) {
    return { $$typeof: p, render: j };
  }, je.isValidElement = X, je.lazy = function(j) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: j },
      _init: te
    };
  }, je.memo = function(j, J) {
    return {
      $$typeof: g,
      type: j,
      compare: J === void 0 ? null : J
    };
  }, je.startTransition = function(j) {
    var J = A.T, ae = {};
    A.T = ae;
    try {
      var se = j(), le = A.S;
      le !== null && le(ae, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(Le, ue);
    } catch (Ie) {
      ue(Ie);
    } finally {
      A.T = J;
    }
  }, je.unstable_useCacheRefresh = function() {
    return A.H.useCacheRefresh();
  }, je.use = function(j) {
    return A.H.use(j);
  }, je.useActionState = function(j, J, ae) {
    return A.H.useActionState(j, J, ae);
  }, je.useCallback = function(j, J) {
    return A.H.useCallback(j, J);
  }, je.useContext = function(j) {
    return A.H.useContext(j);
  }, je.useDebugValue = function() {
  }, je.useDeferredValue = function(j, J) {
    return A.H.useDeferredValue(j, J);
  }, je.useEffect = function(j, J, ae) {
    var se = A.H;
    if (typeof ae == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return se.useEffect(j, J);
  }, je.useId = function() {
    return A.H.useId();
  }, je.useImperativeHandle = function(j, J, ae) {
    return A.H.useImperativeHandle(j, J, ae);
  }, je.useInsertionEffect = function(j, J) {
    return A.H.useInsertionEffect(j, J);
  }, je.useLayoutEffect = function(j, J) {
    return A.H.useLayoutEffect(j, J);
  }, je.useMemo = function(j, J) {
    return A.H.useMemo(j, J);
  }, je.useOptimistic = function(j, J) {
    return A.H.useOptimistic(j, J);
  }, je.useReducer = function(j, J, ae) {
    return A.H.useReducer(j, J, ae);
  }, je.useRef = function(j) {
    return A.H.useRef(j);
  }, je.useState = function(j) {
    return A.H.useState(j);
  }, je.useSyncExternalStore = function(j, J, ae) {
    return A.H.useSyncExternalStore(
      j,
      J,
      ae
    );
  }, je.useTransition = function() {
    return A.H.useTransition();
  }, je.version = "19.1.1", je;
}
var dv;
function Jd() {
  return dv || (dv = 1, Qf.exports = b_()), Qf.exports;
}
var ee = Jd();
const mu = /* @__PURE__ */ l0(ee);
var Jf = { exports: {} }, Bs = {}, Kf = { exports: {} }, Wf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hv;
function __() {
  return hv || (hv = 1, (function(t) {
    function r(H, te) {
      var ue = H.length;
      H.push(te);
      e: for (; 0 < ue; ) {
        var Le = ue - 1 >>> 1, j = H[Le];
        if (0 < o(j, te))
          H[Le] = te, H[ue] = j, ue = Le;
        else break e;
      }
    }
    function a(H) {
      return H.length === 0 ? null : H[0];
    }
    function s(H) {
      if (H.length === 0) return null;
      var te = H[0], ue = H.pop();
      if (ue !== te) {
        H[0] = ue;
        e: for (var Le = 0, j = H.length, J = j >>> 1; Le < J; ) {
          var ae = 2 * (Le + 1) - 1, se = H[ae], le = ae + 1, Ie = H[le];
          if (0 > o(se, ue))
            le < j && 0 > o(Ie, se) ? (H[Le] = Ie, H[le] = ue, Le = le) : (H[Le] = se, H[ae] = ue, Le = ae);
          else if (le < j && 0 > o(Ie, ue))
            H[Le] = Ie, H[le] = ue, Le = le;
          else break e;
        }
      }
      return te;
    }
    function o(H, te) {
      var ue = H.sortIndex - te.sortIndex;
      return ue !== 0 ? ue : H.id - te.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      t.unstable_now = function() {
        return u.now();
      };
    } else {
      var f = Date, p = f.now();
      t.unstable_now = function() {
        return f.now() - p;
      };
    }
    var h = [], g = [], y = 1, _ = null, b = 3, v = !1, d = !1, S = !1, E = !1, O = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function x(H) {
      for (var te = a(g); te !== null; ) {
        if (te.callback === null) s(g);
        else if (te.startTime <= H)
          s(g), te.sortIndex = te.expirationTime, r(h, te);
        else break;
        te = a(g);
      }
    }
    function A(H) {
      if (S = !1, x(H), !d)
        if (a(h) !== null)
          d = !0, M || (M = !0, Q());
        else {
          var te = a(g);
          te !== null && Ee(A, te.startTime - H);
        }
    }
    var M = !1, k = -1, P = 5, X = -1;
    function U() {
      return E ? !0 : !(t.unstable_now() - X < P);
    }
    function G() {
      if (E = !1, M) {
        var H = t.unstable_now();
        X = H;
        var te = !0;
        try {
          e: {
            d = !1, S && (S = !1, w(k), k = -1), v = !0;
            var ue = b;
            try {
              t: {
                for (x(H), _ = a(h); _ !== null && !(_.expirationTime > H && U()); ) {
                  var Le = _.callback;
                  if (typeof Le == "function") {
                    _.callback = null, b = _.priorityLevel;
                    var j = Le(
                      _.expirationTime <= H
                    );
                    if (H = t.unstable_now(), typeof j == "function") {
                      _.callback = j, x(H), te = !0;
                      break t;
                    }
                    _ === a(h) && s(h), x(H);
                  } else s(h);
                  _ = a(h);
                }
                if (_ !== null) te = !0;
                else {
                  var J = a(g);
                  J !== null && Ee(
                    A,
                    J.startTime - H
                  ), te = !1;
                }
              }
              break e;
            } finally {
              _ = null, b = ue, v = !1;
            }
            te = void 0;
          }
        } finally {
          te ? Q() : M = !1;
        }
      }
    }
    var Q;
    if (typeof D == "function")
      Q = function() {
        D(G);
      };
    else if (typeof MessageChannel < "u") {
      var oe = new MessageChannel(), fe = oe.port2;
      oe.port1.onmessage = G, Q = function() {
        fe.postMessage(null);
      };
    } else
      Q = function() {
        O(G, 0);
      };
    function Ee(H, te) {
      k = O(function() {
        H(t.unstable_now());
      }, te);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, t.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < H ? Math.floor(1e3 / H) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, t.unstable_next = function(H) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = b;
      }
      var ue = b;
      b = te;
      try {
        return H();
      } finally {
        b = ue;
      }
    }, t.unstable_requestPaint = function() {
      E = !0;
    }, t.unstable_runWithPriority = function(H, te) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var ue = b;
      b = H;
      try {
        return te();
      } finally {
        b = ue;
      }
    }, t.unstable_scheduleCallback = function(H, te, ue) {
      var Le = t.unstable_now();
      switch (typeof ue == "object" && ue !== null ? (ue = ue.delay, ue = typeof ue == "number" && 0 < ue ? Le + ue : Le) : ue = Le, H) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return j = ue + j, H = {
        id: y++,
        callback: te,
        priorityLevel: H,
        startTime: ue,
        expirationTime: j,
        sortIndex: -1
      }, ue > Le ? (H.sortIndex = ue, r(g, H), a(h) === null && H === a(g) && (S ? (w(k), k = -1) : S = !0, Ee(A, ue - Le))) : (H.sortIndex = j, r(h, H), d || v || (d = !0, M || (M = !0, Q()))), H;
    }, t.unstable_shouldYield = U, t.unstable_wrapCallback = function(H) {
      var te = b;
      return function() {
        var ue = b;
        b = te;
        try {
          return H.apply(this, arguments);
        } finally {
          b = ue;
        }
      };
    };
  })(Wf)), Wf;
}
var pv;
function S_() {
  return pv || (pv = 1, Kf.exports = __()), Kf.exports;
}
var ed = { exports: {} }, Bt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mv;
function x_() {
  if (mv) return Bt;
  mv = 1;
  var t = Jd();
  function r(h) {
    var g = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        g += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + h + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function a() {
  }
  var s = {
    d: {
      f: a,
      r: function() {
        throw Error(r(522));
      },
      D: a,
      C: a,
      L: a,
      m: a,
      X: a,
      S: a,
      M: a
    },
    p: 0,
    findDOMNode: null
  }, o = Symbol.for("react.portal");
  function u(h, g, y) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: _ == null ? null : "" + _,
      children: h,
      containerInfo: g,
      implementation: y
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(h, g) {
    if (h === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Bt.createPortal = function(h, g) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return u(h, g, null, y);
  }, Bt.flushSync = function(h) {
    var g = f.T, y = s.p;
    try {
      if (f.T = null, s.p = 2, h) return h();
    } finally {
      f.T = g, s.p = y, s.d.f();
    }
  }, Bt.preconnect = function(h, g) {
    typeof h == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(h, g));
  }, Bt.prefetchDNS = function(h) {
    typeof h == "string" && s.d.D(h);
  }, Bt.preinit = function(h, g) {
    if (typeof h == "string" && g && typeof g.as == "string") {
      var y = g.as, _ = p(y, g.crossOrigin), b = typeof g.integrity == "string" ? g.integrity : void 0, v = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      y === "style" ? s.d.S(
        h,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: _,
          integrity: b,
          fetchPriority: v
        }
      ) : y === "script" && s.d.X(h, {
        crossOrigin: _,
        integrity: b,
        fetchPriority: v,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Bt.preinitModule = function(h, g) {
    if (typeof h == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var y = p(
            g.as,
            g.crossOrigin
          );
          s.d.M(h, {
            crossOrigin: y,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && s.d.M(h);
  }, Bt.preload = function(h, g) {
    if (typeof h == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var y = g.as, _ = p(y, g.crossOrigin);
      s.d.L(h, y, {
        crossOrigin: _,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, Bt.preloadModule = function(h, g) {
    if (typeof h == "string")
      if (g) {
        var y = p(g.as, g.crossOrigin);
        s.d.m(h, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: y,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else s.d.m(h);
  }, Bt.requestFormReset = function(h) {
    s.d.r(h);
  }, Bt.unstable_batchedUpdates = function(h, g) {
    return h(g);
  }, Bt.useFormState = function(h, g, y) {
    return f.H.useFormState(h, g, y);
  }, Bt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Bt.version = "19.1.1", Bt;
}
var gv;
function o0() {
  if (gv) return ed.exports;
  gv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), ed.exports = x_(), ed.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vv;
function E_() {
  if (vv) return Bs;
  vv = 1;
  var t = S_(), r = Jd(), a = o0();
  function s(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        n += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function u(e) {
    var n = e, i = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (i = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? i : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (u(e) !== e)
      throw Error(s(188));
  }
  function h(e) {
    var n = e.alternate;
    if (!n) {
      if (n = u(e), n === null) throw Error(s(188));
      return n !== e ? null : e;
    }
    for (var i = e, l = n; ; ) {
      var c = i.return;
      if (c === null) break;
      var m = c.alternate;
      if (m === null) {
        if (l = c.return, l !== null) {
          i = l;
          continue;
        }
        break;
      }
      if (c.child === m.child) {
        for (m = c.child; m; ) {
          if (m === i) return p(c), e;
          if (m === l) return p(c), n;
          m = m.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== l.return) i = c, l = m;
      else {
        for (var C = !1, N = c.child; N; ) {
          if (N === i) {
            C = !0, i = c, l = m;
            break;
          }
          if (N === l) {
            C = !0, l = c, i = m;
            break;
          }
          N = N.sibling;
        }
        if (!C) {
          for (N = m.child; N; ) {
            if (N === i) {
              C = !0, i = m, l = c;
              break;
            }
            if (N === l) {
              C = !0, l = m, i = c;
              break;
            }
            N = N.sibling;
          }
          if (!C) throw Error(s(189));
        }
      }
      if (i.alternate !== l) throw Error(s(190));
    }
    if (i.tag !== 3) throw Error(s(188));
    return i.stateNode.current === i ? e : n;
  }
  function g(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = g(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, _ = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), D = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), U = Symbol.for("react.memo_cache_sentinel"), G = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object" ? null : (e = G && e[G] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var oe = Symbol.for("react.client.reference");
  function fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === oe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case d:
        return "Fragment";
      case E:
        return "Profiler";
      case S:
        return "StrictMode";
      case A:
        return "Suspense";
      case M:
        return "SuspenseList";
      case X:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case v:
          return "Portal";
        case D:
          return (e.displayName || "Context") + ".Provider";
        case w:
          return (e._context.displayName || "Context") + ".Consumer";
        case x:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return n = e.displayName || null, n !== null ? n : fe(e.type) || "Memo";
        case P:
          n = e._payload, e = e._init;
          try {
            return fe(e(n));
          } catch {
          }
      }
    return null;
  }
  var Ee = Array.isArray, H = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Le = [], j = -1;
  function J(e) {
    return { current: e };
  }
  function ae(e) {
    0 > j || (e.current = Le[j], Le[j] = null, j--);
  }
  function se(e, n) {
    j++, Le[j] = e.current, e.current = n;
  }
  var le = J(null), Ie = J(null), V = J(null), me = J(null);
  function ve(e, n) {
    switch (se(V, n), se(Ie, e), se(le, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? kg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = kg(n), e = Rg(n, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ae(le), se(le, e);
  }
  function Ve() {
    ae(le), ae(Ie), ae(V);
  }
  function at(e) {
    e.memoizedState !== null && se(me, e);
    var n = le.current, i = Rg(n, e.type);
    n !== i && (se(Ie, e), se(le, i));
  }
  function ze(e) {
    Ie.current === e && (ae(le), ae(Ie)), me.current === e && (ae(me), Ms._currentValue = ue);
  }
  var I = Object.prototype.hasOwnProperty, re = t.unstable_scheduleCallback, ne = t.unstable_cancelCallback, ye = t.unstable_shouldYield, Ce = t.unstable_requestPaint, ge = t.unstable_now, Me = t.unstable_getCurrentPriorityLevel, Xe = t.unstable_ImmediatePriority, de = t.unstable_UserBlockingPriority, he = t.unstable_NormalPriority, De = t.unstable_LowPriority, Re = t.unstable_IdlePriority, it = t.log, Ar = t.unstable_setDisableYieldValue, tr = null, mt = null;
  function Zn(e) {
    if (typeof it == "function" && Ar(e), mt && typeof mt.setStrictMode == "function")
      try {
        mt.setStrictMode(tr, e);
      } catch {
      }
  }
  var qt = Math.clz32 ? Math.clz32 : la, yn = Math.log, sa = Math.LN2;
  function la(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (yn(e) / sa | 0) | 0;
  }
  var nr = 256, Gn = 4194304;
  function bn(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ft(e, n, i) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0, m = e.suspendedLanes, C = e.pingedLanes;
    e = e.warmLanes;
    var N = l & 134217727;
    return N !== 0 ? (l = N & ~m, l !== 0 ? c = bn(l) : (C &= N, C !== 0 ? c = bn(C) : i || (i = N & ~e, i !== 0 && (c = bn(i))))) : (N = l & ~m, N !== 0 ? c = bn(N) : C !== 0 ? c = bn(C) : i || (i = l & ~e, i !== 0 && (c = bn(i)))), c === 0 ? 0 : n !== 0 && n !== c && (n & m) === 0 && (m = c & -c, i = n & -n, m >= i || m === 32 && (i & 4194048) !== 0) ? n : c;
  }
  function Xt(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function hl(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ba() {
    var e = nr;
    return nr <<= 1, (nr & 4194048) === 0 && (nr = 256), e;
  }
  function gh() {
    var e = Gn;
    return Gn <<= 1, (Gn & 62914560) === 0 && (Gn = 4194304), e;
  }
  function Lu(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function Hi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function I1(e, n, i, l, c, m) {
    var C = e.pendingLanes;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
    var N = e.entanglements, R = e.expirationTimes, q = e.hiddenUpdates;
    for (i = C & ~i; 0 < i; ) {
      var Y = 31 - qt(i), K = 1 << Y;
      N[Y] = 0, R[Y] = -1;
      var F = q[Y];
      if (F !== null)
        for (q[Y] = null, Y = 0; Y < F.length; Y++) {
          var Z = F[Y];
          Z !== null && (Z.lane &= -536870913);
        }
      i &= ~K;
    }
    l !== 0 && vh(e, l, 0), m !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= m & ~(C & ~n));
  }
  function vh(e, n, i) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var l = 31 - qt(n);
    e.entangledLanes |= n, e.entanglements[l] = e.entanglements[l] | 1073741824 | i & 4194090;
  }
  function yh(e, n) {
    var i = e.entangledLanes |= n;
    for (e = e.entanglements; i; ) {
      var l = 31 - qt(i), c = 1 << l;
      c & n | e[l] & n && (e[l] |= n), i &= ~c;
    }
  }
  function Pu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Iu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function bh() {
    var e = te.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Kg(e.type));
  }
  function B1(e, n) {
    var i = te.p;
    try {
      return te.p = e, n();
    } finally {
      te.p = i;
    }
  }
  var Tr = Math.random().toString(36).slice(2), Pt = "__reactFiber$" + Tr, $t = "__reactProps$" + Tr, Ua = "__reactContainer$" + Tr, Bu = "__reactEvents$" + Tr, U1 = "__reactListeners$" + Tr, H1 = "__reactHandles$" + Tr, _h = "__reactResources$" + Tr, qi = "__reactMarker$" + Tr;
  function Uu(e) {
    delete e[Pt], delete e[$t], delete e[Bu], delete e[U1], delete e[H1];
  }
  function Ha(e) {
    var n = e[Pt];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if (n = i[Ua] || i[Pt]) {
        if (i = n.alternate, n.child !== null || i !== null && i.child !== null)
          for (e = Pg(e); e !== null; ) {
            if (i = e[Pt]) return i;
            e = Pg(e);
          }
        return n;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function qa(e) {
    if (e = e[Pt] || e[Ua]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Fi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Fa(e) {
    var n = e[_h];
    return n || (n = e[_h] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Nt(e) {
    e[qi] = !0;
  }
  var Sh = /* @__PURE__ */ new Set(), xh = {};
  function oa(e, n) {
    Za(e, n), Za(e + "Capture", n);
  }
  function Za(e, n) {
    for (xh[e] = n, e = 0; e < n.length; e++)
      Sh.add(n[e]);
  }
  var q1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Eh = {}, Ch = {};
  function F1(e) {
    return I.call(Ch, e) ? !0 : I.call(Eh, e) ? !1 : q1.test(e) ? Ch[e] = !0 : (Eh[e] = !0, !1);
  }
  function pl(e, n, i) {
    if (F1(n))
      if (i === null) e.removeAttribute(n);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var l = n.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + i);
      }
  }
  function ml(e, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + i);
    }
  }
  function rr(e, n, i, l) {
    if (l === null) e.removeAttribute(i);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(n, i, "" + l);
    }
  }
  var Hu, wh;
  function Ga(e) {
    if (Hu === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        Hu = n && n[1] || "", wh = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Hu + e + wh;
  }
  var qu = !1;
  function Fu(e, n) {
    if (!e || qu) return "";
    qu = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var K = function() {
                throw Error();
              };
              if (Object.defineProperty(K.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(K, []);
                } catch (Z) {
                  var F = Z;
                }
                Reflect.construct(e, [], K);
              } else {
                try {
                  K.call();
                } catch (Z) {
                  F = Z;
                }
                e.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                F = Z;
              }
              (K = e()) && typeof K.catch == "function" && K.catch(function() {
              });
            }
          } catch (Z) {
            if (Z && F && typeof Z.stack == "string")
              return [Z.stack, F.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      c && c.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var m = l.DetermineComponentFrameRoot(), C = m[0], N = m[1];
      if (C && N) {
        var R = C.split(`
`), q = N.split(`
`);
        for (c = l = 0; l < R.length && !R[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; c < q.length && !q[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (l === R.length || c === q.length)
          for (l = R.length - 1, c = q.length - 1; 1 <= l && 0 <= c && R[l] !== q[c]; )
            c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (R[l] !== q[c]) {
            if (l !== 1 || c !== 1)
              do
                if (l--, c--, 0 > c || R[l] !== q[c]) {
                  var Y = `
` + R[l].replace(" at new ", " at ");
                  return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), Y;
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      qu = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? Ga(i) : "";
  }
  function Z1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ga(e.type);
      case 16:
        return Ga("Lazy");
      case 13:
        return Ga("Suspense");
      case 19:
        return Ga("SuspenseList");
      case 0:
      case 15:
        return Fu(e.type, !1);
      case 11:
        return Fu(e.type.render, !1);
      case 1:
        return Fu(e.type, !0);
      case 31:
        return Ga("Activity");
      default:
        return "";
    }
  }
  function Ah(e) {
    try {
      var n = "";
      do
        n += Z1(e), e = e.return;
      while (e);
      return n;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  function _n(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Th(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function G1(e) {
    var n = Th(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), l = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var c = i.get, m = i.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(C) {
          l = "" + C, m.call(this, C);
        }
      }), Object.defineProperty(e, n, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(C) {
          l = "" + C;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function gl(e) {
    e._valueTracker || (e._valueTracker = G1(e));
  }
  function Oh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(), l = "";
    return e && (l = Th(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== i ? (n.setValue(e), !0) : !1;
  }
  function vl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var V1 = /[\n"\\]/g;
  function Sn(e) {
    return e.replace(
      V1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Zu(e, n, i, l, c, m, C, N) {
    e.name = "", C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" ? e.type = C : e.removeAttribute("type"), n != null ? C === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + _n(n)) : e.value !== "" + _n(n) && (e.value = "" + _n(n)) : C !== "submit" && C !== "reset" || e.removeAttribute("value"), n != null ? Gu(e, C, _n(n)) : i != null ? Gu(e, C, _n(i)) : l != null && e.removeAttribute("value"), c == null && m != null && (e.defaultChecked = !!m), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" ? e.name = "" + _n(N) : e.removeAttribute("name");
  }
  function Nh(e, n, i, l, c, m, C, N) {
    if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.type = m), n != null || i != null) {
      if (!(m !== "submit" && m !== "reset" || n != null))
        return;
      i = i != null ? "" + _n(i) : "", n = n != null ? "" + _n(n) : i, N || n === e.value || (e.value = n), e.defaultValue = n;
    }
    l = l ?? c, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = N ? e.checked : !!l, e.defaultChecked = !!l, C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" && (e.name = C);
  }
  function Gu(e, n, i) {
    n === "number" && vl(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i);
  }
  function Va(e, n, i, l) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < i.length; c++)
        n["$" + i[c]] = !0;
      for (i = 0; i < e.length; i++)
        c = n.hasOwnProperty("$" + e[i].value), e[i].selected !== c && (e[i].selected = c), c && l && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + _n(i), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === i) {
          e[c].selected = !0, l && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Dh(e, n, i) {
    if (n != null && (n = "" + _n(n), n !== e.value && (e.value = n), i == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = i != null ? "" + _n(i) : "";
  }
  function Mh(e, n, i, l) {
    if (n == null) {
      if (l != null) {
        if (i != null) throw Error(s(92));
        if (Ee(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        i = l;
      }
      i == null && (i = ""), n = i;
    }
    i = _n(n), e.defaultValue = i, l = e.textContent, l === i && l !== "" && l !== null && (e.value = l);
  }
  function Ya(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Y1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function kh(e, n, i) {
    var l = n.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? l ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : l ? e.setProperty(n, i) : typeof i != "number" || i === 0 || Y1.has(n) ? n === "float" ? e.cssFloat = i : e[n] = ("" + i).trim() : e[n] = i + "px";
  }
  function Rh(e, n, i) {
    if (n != null && typeof n != "object")
      throw Error(s(62));
    if (e = e.style, i != null) {
      for (var l in i)
        !i.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var c in n)
        l = n[c], n.hasOwnProperty(c) && i[c] !== l && kh(e, c, l);
    } else
      for (var m in n)
        n.hasOwnProperty(m) && kh(e, m, n[m]);
  }
  function Vu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var X1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), $1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yl(e) {
    return $1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Yu = null;
  function Xu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xa = null, $a = null;
  function jh(e) {
    var n = qa(e);
    if (n && (e = n.stateNode)) {
      var i = e[$t] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Zu(
            e,
            i.value,
            i.defaultValue,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name
          ), n = i.name, i.type === "radio" && n != null) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll(
              'input[name="' + Sn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < i.length; n++) {
              var l = i[n];
              if (l !== e && l.form === e.form) {
                var c = l[$t] || null;
                if (!c) throw Error(s(90));
                Zu(
                  l,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (n = 0; n < i.length; n++)
              l = i[n], l.form === e.form && Oh(l);
          }
          break e;
        case "textarea":
          Dh(e, i.value, i.defaultValue);
          break e;
        case "select":
          n = i.value, n != null && Va(e, !!i.multiple, n, !1);
      }
    }
  }
  var $u = !1;
  function zh(e, n, i) {
    if ($u) return e(n, i);
    $u = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if ($u = !1, (Xa !== null || $a !== null) && (ro(), Xa && (n = Xa, e = $a, $a = Xa = null, jh(n), e)))
        for (n = 0; n < e.length; n++) jh(e[n]);
    }
  }
  function Zi(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var l = i[$t] || null;
    if (l === null) return null;
    i = l[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function")
      throw Error(
        s(231, n, typeof i)
      );
    return i;
  }
  var ar = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qu = !1;
  if (ar)
    try {
      var Gi = {};
      Object.defineProperty(Gi, "passive", {
        get: function() {
          Qu = !0;
        }
      }), window.addEventListener("test", Gi, Gi), window.removeEventListener("test", Gi, Gi);
    } catch {
      Qu = !1;
    }
  var Or = null, Ju = null, bl = null;
  function Lh() {
    if (bl) return bl;
    var e, n = Ju, i = n.length, l, c = "value" in Or ? Or.value : Or.textContent, m = c.length;
    for (e = 0; e < i && n[e] === c[e]; e++) ;
    var C = i - e;
    for (l = 1; l <= C && n[i - l] === c[m - l]; l++) ;
    return bl = c.slice(e, 1 < l ? 1 - l : void 0);
  }
  function _l(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Sl() {
    return !0;
  }
  function Ph() {
    return !1;
  }
  function Qt(e) {
    function n(i, l, c, m, C) {
      this._reactName = i, this._targetInst = c, this.type = l, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var N in e)
        e.hasOwnProperty(N) && (i = e[N], this[N] = i ? i(m) : m[N]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? Sl : Ph, this.isPropagationStopped = Ph, this;
    }
    return y(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Sl);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Sl);
      },
      persist: function() {
      },
      isPersistent: Sl
    }), n;
  }
  var ua = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, xl = Qt(ua), Vi = y({}, ua, { view: 0, detail: 0 }), Q1 = Qt(Vi), Ku, Wu, Yi, El = y({}, Vi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: tc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Yi && (Yi && e.type === "mousemove" ? (Ku = e.screenX - Yi.screenX, Wu = e.screenY - Yi.screenY) : Wu = Ku = 0, Yi = e), Ku);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Wu;
    }
  }), Ih = Qt(El), J1 = y({}, El, { dataTransfer: 0 }), K1 = Qt(J1), W1 = y({}, Vi, { relatedTarget: 0 }), ec = Qt(W1), eb = y({}, ua, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), tb = Qt(eb), nb = y({}, ua, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), rb = Qt(nb), ab = y({}, ua, { data: 0 }), Bh = Qt(ab), ib = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, sb = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, lb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ob(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = lb[e]) ? !!n[e] : !1;
  }
  function tc() {
    return ob;
  }
  var ub = y({}, Vi, {
    key: function(e) {
      if (e.key) {
        var n = ib[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = _l(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sb[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tc,
    charCode: function(e) {
      return e.type === "keypress" ? _l(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? _l(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), cb = Qt(ub), fb = y({}, El, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Uh = Qt(fb), db = y({}, Vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tc
  }), hb = Qt(db), pb = y({}, ua, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), mb = Qt(pb), gb = y({}, El, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vb = Qt(gb), yb = y({}, ua, {
    newState: 0,
    oldState: 0
  }), bb = Qt(yb), _b = [9, 13, 27, 32], nc = ar && "CompositionEvent" in window, Xi = null;
  ar && "documentMode" in document && (Xi = document.documentMode);
  var Sb = ar && "TextEvent" in window && !Xi, Hh = ar && (!nc || Xi && 8 < Xi && 11 >= Xi), qh = " ", Fh = !1;
  function Zh(e, n) {
    switch (e) {
      case "keyup":
        return _b.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Qa = !1;
  function xb(e, n) {
    switch (e) {
      case "compositionend":
        return Gh(n);
      case "keypress":
        return n.which !== 32 ? null : (Fh = !0, qh);
      case "textInput":
        return e = n.data, e === qh && Fh ? null : e;
      default:
        return null;
    }
  }
  function Eb(e, n) {
    if (Qa)
      return e === "compositionend" || !nc && Zh(e, n) ? (e = Lh(), bl = Ju = Or = null, Qa = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Hh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Cb = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Vh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Cb[e.type] : n === "textarea";
  }
  function Yh(e, n, i, l) {
    Xa ? $a ? $a.push(l) : $a = [l] : Xa = l, n = uo(n, "onChange"), 0 < n.length && (i = new xl(
      "onChange",
      "change",
      null,
      i,
      l
    ), e.push({ event: i, listeners: n }));
  }
  var $i = null, Qi = null;
  function wb(e) {
    Tg(e, 0);
  }
  function Cl(e) {
    var n = Fi(e);
    if (Oh(n)) return e;
  }
  function Xh(e, n) {
    if (e === "change") return n;
  }
  var $h = !1;
  if (ar) {
    var rc;
    if (ar) {
      var ac = "oninput" in document;
      if (!ac) {
        var Qh = document.createElement("div");
        Qh.setAttribute("oninput", "return;"), ac = typeof Qh.oninput == "function";
      }
      rc = ac;
    } else rc = !1;
    $h = rc && (!document.documentMode || 9 < document.documentMode);
  }
  function Jh() {
    $i && ($i.detachEvent("onpropertychange", Kh), Qi = $i = null);
  }
  function Kh(e) {
    if (e.propertyName === "value" && Cl(Qi)) {
      var n = [];
      Yh(
        n,
        Qi,
        e,
        Xu(e)
      ), zh(wb, n);
    }
  }
  function Ab(e, n, i) {
    e === "focusin" ? (Jh(), $i = n, Qi = i, $i.attachEvent("onpropertychange", Kh)) : e === "focusout" && Jh();
  }
  function Tb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Cl(Qi);
  }
  function Ob(e, n) {
    if (e === "click") return Cl(n);
  }
  function Nb(e, n) {
    if (e === "input" || e === "change")
      return Cl(n);
  }
  function Db(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var sn = typeof Object.is == "function" ? Object.is : Db;
  function Ji(e, n) {
    if (sn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var i = Object.keys(e), l = Object.keys(n);
    if (i.length !== l.length) return !1;
    for (l = 0; l < i.length; l++) {
      var c = i[l];
      if (!I.call(n, c) || !sn(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  function Wh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ep(e, n) {
    var i = Wh(e);
    e = 0;
    for (var l; i; ) {
      if (i.nodeType === 3) {
        if (l = e + i.textContent.length, e <= n && l >= n)
          return { node: i, offset: n - e };
        e = l;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Wh(i);
    }
  }
  function tp(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? tp(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function np(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = vl(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = vl(e.document);
    }
    return n;
  }
  function ic(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Mb = ar && "documentMode" in document && 11 >= document.documentMode, Ja = null, sc = null, Ki = null, lc = !1;
  function rp(e, n, i) {
    var l = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    lc || Ja == null || Ja !== vl(l) || (l = Ja, "selectionStart" in l && ic(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Ki && Ji(Ki, l) || (Ki = l, l = uo(sc, "onSelect"), 0 < l.length && (n = new xl(
      "onSelect",
      "select",
      null,
      n,
      i
    ), e.push({ event: n, listeners: l }), n.target = Ja)));
  }
  function ca(e, n) {
    var i = {};
    return i[e.toLowerCase()] = n.toLowerCase(), i["Webkit" + e] = "webkit" + n, i["Moz" + e] = "moz" + n, i;
  }
  var Ka = {
    animationend: ca("Animation", "AnimationEnd"),
    animationiteration: ca("Animation", "AnimationIteration"),
    animationstart: ca("Animation", "AnimationStart"),
    transitionrun: ca("Transition", "TransitionRun"),
    transitionstart: ca("Transition", "TransitionStart"),
    transitioncancel: ca("Transition", "TransitionCancel"),
    transitionend: ca("Transition", "TransitionEnd")
  }, oc = {}, ap = {};
  ar && (ap = document.createElement("div").style, "AnimationEvent" in window || (delete Ka.animationend.animation, delete Ka.animationiteration.animation, delete Ka.animationstart.animation), "TransitionEvent" in window || delete Ka.transitionend.transition);
  function fa(e) {
    if (oc[e]) return oc[e];
    if (!Ka[e]) return e;
    var n = Ka[e], i;
    for (i in n)
      if (n.hasOwnProperty(i) && i in ap)
        return oc[e] = n[i];
    return e;
  }
  var ip = fa("animationend"), sp = fa("animationiteration"), lp = fa("animationstart"), kb = fa("transitionrun"), Rb = fa("transitionstart"), jb = fa("transitioncancel"), op = fa("transitionend"), up = /* @__PURE__ */ new Map(), uc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  uc.push("scrollEnd");
  function jn(e, n) {
    up.set(e, n), oa(n, [e]);
  }
  var cp = /* @__PURE__ */ new WeakMap();
  function xn(e, n) {
    if (typeof e == "object" && e !== null) {
      var i = cp.get(e);
      return i !== void 0 ? i : (n = {
        value: e,
        source: n,
        stack: Ah(n)
      }, cp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Ah(n)
    };
  }
  var En = [], Wa = 0, cc = 0;
  function wl() {
    for (var e = Wa, n = cc = Wa = 0; n < e; ) {
      var i = En[n];
      En[n++] = null;
      var l = En[n];
      En[n++] = null;
      var c = En[n];
      En[n++] = null;
      var m = En[n];
      if (En[n++] = null, l !== null && c !== null) {
        var C = l.pending;
        C === null ? c.next = c : (c.next = C.next, C.next = c), l.pending = c;
      }
      m !== 0 && fp(i, c, m);
    }
  }
  function Al(e, n, i, l) {
    En[Wa++] = e, En[Wa++] = n, En[Wa++] = i, En[Wa++] = l, cc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function fc(e, n, i, l) {
    return Al(e, n, i, l), Tl(e);
  }
  function ei(e, n) {
    return Al(e, null, null, n), Tl(e);
  }
  function fp(e, n, i) {
    e.lanes |= i;
    var l = e.alternate;
    l !== null && (l.lanes |= i);
    for (var c = !1, m = e.return; m !== null; )
      m.childLanes |= i, l = m.alternate, l !== null && (l.childLanes |= i), m.tag === 22 && (e = m.stateNode, e === null || e._visibility & 1 || (c = !0)), e = m, m = m.return;
    return e.tag === 3 ? (m = e.stateNode, c && n !== null && (c = 31 - qt(i), e = m.hiddenUpdates, l = e[c], l === null ? e[c] = [n] : l.push(n), n.lane = i | 536870912), m) : null;
  }
  function Tl(e) {
    if (50 < Es)
      throw Es = 0, yf = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ti = {};
  function zb(e, n, i, l) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ln(e, n, i, l) {
    return new zb(e, n, i, l);
  }
  function dc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ir(e, n) {
    var i = e.alternate;
    return i === null ? (i = ln(
      e.tag,
      n,
      e.key,
      e.mode
    ), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = n, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, n = e.dependencies, i.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i;
  }
  function dp(e, n) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, n = i.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Ol(e, n, i, l, c, m) {
    var C = 0;
    if (l = e, typeof e == "function") dc(e) && (C = 1);
    else if (typeof e == "string")
      C = P2(
        e,
        i,
        le.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case X:
          return e = ln(31, i, n, c), e.elementType = X, e.lanes = m, e;
        case d:
          return da(i.children, c, m, n);
        case S:
          C = 8, c |= 24;
          break;
        case E:
          return e = ln(12, i, n, c | 2), e.elementType = E, e.lanes = m, e;
        case A:
          return e = ln(13, i, n, c), e.elementType = A, e.lanes = m, e;
        case M:
          return e = ln(19, i, n, c), e.elementType = M, e.lanes = m, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case O:
              case D:
                C = 10;
                break e;
              case w:
                C = 9;
                break e;
              case x:
                C = 11;
                break e;
              case k:
                C = 14;
                break e;
              case P:
                C = 16, l = null;
                break e;
            }
          C = 29, i = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return n = ln(C, i, n, c), n.elementType = e, n.type = l, n.lanes = m, n;
  }
  function da(e, n, i, l) {
    return e = ln(7, e, l, n), e.lanes = i, e;
  }
  function hc(e, n, i) {
    return e = ln(6, e, null, n), e.lanes = i, e;
  }
  function pc(e, n, i) {
    return n = ln(
      4,
      e.children !== null ? e.children : [],
      e.key,
      n
    ), n.lanes = i, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  var ni = [], ri = 0, Nl = null, Dl = 0, Cn = [], wn = 0, ha = null, sr = 1, lr = "";
  function pa(e, n) {
    ni[ri++] = Dl, ni[ri++] = Nl, Nl = e, Dl = n;
  }
  function hp(e, n, i) {
    Cn[wn++] = sr, Cn[wn++] = lr, Cn[wn++] = ha, ha = e;
    var l = sr;
    e = lr;
    var c = 32 - qt(l) - 1;
    l &= ~(1 << c), i += 1;
    var m = 32 - qt(n) + c;
    if (30 < m) {
      var C = c - c % 5;
      m = (l & (1 << C) - 1).toString(32), l >>= C, c -= C, sr = 1 << 32 - qt(n) + c | i << c | l, lr = m + e;
    } else
      sr = 1 << m | i << c | l, lr = e;
  }
  function mc(e) {
    e.return !== null && (pa(e, 1), hp(e, 1, 0));
  }
  function gc(e) {
    for (; e === Nl; )
      Nl = ni[--ri], ni[ri] = null, Dl = ni[--ri], ni[ri] = null;
    for (; e === ha; )
      ha = Cn[--wn], Cn[wn] = null, lr = Cn[--wn], Cn[wn] = null, sr = Cn[--wn], Cn[wn] = null;
  }
  var Zt = null, dt = null, Ye = !1, ma = null, Vn = !1, vc = Error(s(519));
  function ga(e) {
    var n = Error(s(418, ""));
    throw ts(xn(n, e)), vc;
  }
  function pp(e) {
    var n = e.stateNode, i = e.type, l = e.memoizedProps;
    switch (n[Pt] = e, n[$t] = l, i) {
      case "dialog":
        He("cancel", n), He("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        He("load", n);
        break;
      case "video":
      case "audio":
        for (i = 0; i < ws.length; i++)
          He(ws[i], n);
        break;
      case "source":
        He("error", n);
        break;
      case "img":
      case "image":
      case "link":
        He("error", n), He("load", n);
        break;
      case "details":
        He("toggle", n);
        break;
      case "input":
        He("invalid", n), Nh(
          n,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), gl(n);
        break;
      case "select":
        He("invalid", n);
        break;
      case "textarea":
        He("invalid", n), Mh(n, l.value, l.defaultValue, l.children), gl(n);
    }
    i = l.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || n.textContent === "" + i || l.suppressHydrationWarning === !0 || Mg(n.textContent, i) ? (l.popover != null && (He("beforetoggle", n), He("toggle", n)), l.onScroll != null && He("scroll", n), l.onScrollEnd != null && He("scrollend", n), l.onClick != null && (n.onclick = co), n = !0) : n = !1, n || ga(e);
  }
  function mp(e) {
    for (Zt = e.return; Zt; )
      switch (Zt.tag) {
        case 5:
        case 13:
          Vn = !1;
          return;
        case 27:
        case 3:
          Vn = !0;
          return;
        default:
          Zt = Zt.return;
      }
  }
  function Wi(e) {
    if (e !== Zt) return !1;
    if (!Ye) return mp(e), Ye = !0, !1;
    var n = e.tag, i;
    if ((i = n !== 3 && n !== 27) && ((i = n === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || jf(e.type, e.memoizedProps)), i = !i), i && dt && ga(e), mp(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (i = e.data, i === "/$") {
              if (n === 0) {
                dt = Ln(e.nextSibling);
                break e;
              }
              n--;
            } else
              i !== "$" && i !== "$!" && i !== "$?" || n++;
          e = e.nextSibling;
        }
        dt = null;
      }
    } else
      n === 27 ? (n = dt, Zr(e.type) ? (e = If, If = null, dt = e) : dt = n) : dt = Zt ? Ln(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    dt = Zt = null, Ye = !1;
  }
  function gp() {
    var e = ma;
    return e !== null && (Wt === null ? Wt = e : Wt.push.apply(
      Wt,
      e
    ), ma = null), e;
  }
  function ts(e) {
    ma === null ? ma = [e] : ma.push(e);
  }
  var yc = J(null), va = null, or = null;
  function Nr(e, n, i) {
    se(yc, n._currentValue), n._currentValue = i;
  }
  function ur(e) {
    e._currentValue = yc.current, ae(yc);
  }
  function bc(e, n, i) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === i) break;
      e = e.return;
    }
  }
  function _c(e, n, i, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var m = c.dependencies;
      if (m !== null) {
        var C = c.child;
        m = m.firstContext;
        e: for (; m !== null; ) {
          var N = m;
          m = c;
          for (var R = 0; R < n.length; R++)
            if (N.context === n[R]) {
              m.lanes |= i, N = m.alternate, N !== null && (N.lanes |= i), bc(
                m.return,
                i,
                e
              ), l || (C = null);
              break e;
            }
          m = N.next;
        }
      } else if (c.tag === 18) {
        if (C = c.return, C === null) throw Error(s(341));
        C.lanes |= i, m = C.alternate, m !== null && (m.lanes |= i), bc(C, i, e), C = null;
      } else C = c.child;
      if (C !== null) C.return = c;
      else
        for (C = c; C !== null; ) {
          if (C === e) {
            C = null;
            break;
          }
          if (c = C.sibling, c !== null) {
            c.return = C.return, C = c;
            break;
          }
          C = C.return;
        }
      c = C;
    }
  }
  function ns(e, n, i, l) {
    e = null;
    for (var c = n, m = !1; c !== null; ) {
      if (!m) {
        if ((c.flags & 524288) !== 0) m = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var C = c.alternate;
        if (C === null) throw Error(s(387));
        if (C = C.memoizedProps, C !== null) {
          var N = c.type;
          sn(c.pendingProps.value, C.value) || (e !== null ? e.push(N) : e = [N]);
        }
      } else if (c === me.current) {
        if (C = c.alternate, C === null) throw Error(s(387));
        C.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Ms) : e = [Ms]);
      }
      c = c.return;
    }
    e !== null && _c(
      n,
      e,
      i,
      l
    ), n.flags |= 262144;
  }
  function Ml(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!sn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ya(e) {
    va = e, or = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function It(e) {
    return vp(va, e);
  }
  function kl(e, n) {
    return va === null && ya(e), vp(e, n);
  }
  function vp(e, n) {
    var i = n._currentValue;
    if (n = { context: n, memoizedValue: i, next: null }, or === null) {
      if (e === null) throw Error(s(308));
      or = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else or = or.next = n;
    return i;
  }
  var Lb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(i, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(i) {
        return i();
      });
    };
  }, Pb = t.unstable_scheduleCallback, Ib = t.unstable_NormalPriority, Ct = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Sc() {
    return {
      controller: new Lb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function rs(e) {
    e.refCount--, e.refCount === 0 && Pb(Ib, function() {
      e.controller.abort();
    });
  }
  var as = null, xc = 0, ai = 0, ii = null;
  function Bb(e, n) {
    if (as === null) {
      var i = as = [];
      xc = 0, ai = wf(), ii = {
        status: "pending",
        value: void 0,
        then: function(l) {
          i.push(l);
        }
      };
    }
    return xc++, n.then(yp, yp), n;
  }
  function yp() {
    if (--xc === 0 && as !== null) {
      ii !== null && (ii.status = "fulfilled");
      var e = as;
      as = null, ai = 0, ii = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Ub(e, n) {
    var i = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        i.push(c);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = n;
        for (var c = 0; c < i.length; c++) (0, i[c])(n);
      },
      function(c) {
        for (l.status = "rejected", l.reason = c, c = 0; c < i.length; c++)
          (0, i[c])(void 0);
      }
    ), l;
  }
  var bp = H.S;
  H.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Bb(e, n), bp !== null && bp(e, n);
  };
  var ba = J(null);
  function Ec() {
    var e = ba.current;
    return e !== null ? e : nt.pooledCache;
  }
  function Rl(e, n) {
    n === null ? se(ba, ba.current) : se(ba, n.pool);
  }
  function _p() {
    var e = Ec();
    return e === null ? null : { parent: Ct._currentValue, pool: e };
  }
  var is = Error(s(460)), Sp = Error(s(474)), jl = Error(s(542)), Cc = { then: function() {
  } };
  function xp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function zl() {
  }
  function Ep(e, n, i) {
    switch (i = e[i], i === void 0 ? e.push(n) : i !== n && (n.then(zl, zl), n = i), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, wp(e), e;
      default:
        if (typeof n.status == "string") n.then(zl, zl);
        else {
          if (e = nt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = n, e.status = "pending", e.then(
            function(l) {
              if (n.status === "pending") {
                var c = n;
                c.status = "fulfilled", c.value = l;
              }
            },
            function(l) {
              if (n.status === "pending") {
                var c = n;
                c.status = "rejected", c.reason = l;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, wp(e), e;
        }
        throw ss = n, is;
    }
  }
  var ss = null;
  function Cp() {
    if (ss === null) throw Error(s(459));
    var e = ss;
    return ss = null, e;
  }
  function wp(e) {
    if (e === is || e === jl)
      throw Error(s(483));
  }
  var Dr = !1;
  function wc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ac(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Mr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function kr(e, n, i) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, ($e & 2) !== 0) {
      var c = l.pending;
      return c === null ? n.next = n : (n.next = c.next, c.next = n), l.pending = n, n = Tl(e), fp(e, null, i), n;
    }
    return Al(e, l, n, i), Tl(e);
  }
  function ls(e, n, i) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194048) !== 0)) {
      var l = n.lanes;
      l &= e.pendingLanes, i |= l, n.lanes = i, yh(e, i);
    }
  }
  function Tc(e, n) {
    var i = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, i === l)) {
      var c = null, m = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var C = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          m === null ? c = m = C : m = m.next = C, i = i.next;
        } while (i !== null);
        m === null ? c = m = n : m = m.next = n;
      } else c = m = n;
      i = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: m,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = n : e.next = n, i.lastBaseUpdate = n;
  }
  var Oc = !1;
  function os() {
    if (Oc) {
      var e = ii;
      if (e !== null) throw e;
    }
  }
  function us(e, n, i, l) {
    Oc = !1;
    var c = e.updateQueue;
    Dr = !1;
    var m = c.firstBaseUpdate, C = c.lastBaseUpdate, N = c.shared.pending;
    if (N !== null) {
      c.shared.pending = null;
      var R = N, q = R.next;
      R.next = null, C === null ? m = q : C.next = q, C = R;
      var Y = e.alternate;
      Y !== null && (Y = Y.updateQueue, N = Y.lastBaseUpdate, N !== C && (N === null ? Y.firstBaseUpdate = q : N.next = q, Y.lastBaseUpdate = R));
    }
    if (m !== null) {
      var K = c.baseState;
      C = 0, Y = q = R = null, N = m;
      do {
        var F = N.lane & -536870913, Z = F !== N.lane;
        if (Z ? (Ze & F) === F : (l & F) === F) {
          F !== 0 && F === ai && (Oc = !0), Y !== null && (Y = Y.next = {
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: null,
            next: null
          });
          e: {
            var Ae = e, Se = N;
            F = n;
            var We = i;
            switch (Se.tag) {
              case 1:
                if (Ae = Se.payload, typeof Ae == "function") {
                  K = Ae.call(We, K, F);
                  break e;
                }
                K = Ae;
                break e;
              case 3:
                Ae.flags = Ae.flags & -65537 | 128;
              case 0:
                if (Ae = Se.payload, F = typeof Ae == "function" ? Ae.call(We, K, F) : Ae, F == null) break e;
                K = y({}, K, F);
                break e;
              case 2:
                Dr = !0;
            }
          }
          F = N.callback, F !== null && (e.flags |= 64, Z && (e.flags |= 8192), Z = c.callbacks, Z === null ? c.callbacks = [F] : Z.push(F));
        } else
          Z = {
            lane: F,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          }, Y === null ? (q = Y = Z, R = K) : Y = Y.next = Z, C |= F;
        if (N = N.next, N === null) {
          if (N = c.shared.pending, N === null)
            break;
          Z = N, N = Z.next, Z.next = null, c.lastBaseUpdate = Z, c.shared.pending = null;
        }
      } while (!0);
      Y === null && (R = K), c.baseState = R, c.firstBaseUpdate = q, c.lastBaseUpdate = Y, m === null && (c.shared.lanes = 0), Ur |= C, e.lanes = C, e.memoizedState = K;
    }
  }
  function Ap(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function Tp(e, n) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        Ap(i[e], n);
  }
  var si = J(null), Ll = J(0);
  function Op(e, n) {
    e = gr, se(Ll, e), se(si, n), gr = e | n.baseLanes;
  }
  function Nc() {
    se(Ll, gr), se(si, si.current);
  }
  function Dc() {
    gr = Ll.current, ae(si), ae(Ll);
  }
  var Rr = 0, Pe = null, Je = null, bt = null, Pl = !1, li = !1, _a = !1, Il = 0, cs = 0, oi = null, Hb = 0;
  function gt() {
    throw Error(s(321));
  }
  function Mc(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!sn(e[i], n[i])) return !1;
    return !0;
  }
  function kc(e, n, i, l, c, m) {
    return Rr = m, Pe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, H.H = e === null || e.memoizedState === null ? fm : dm, _a = !1, m = i(l, c), _a = !1, li && (m = Dp(
      n,
      i,
      l,
      c
    )), Np(e), m;
  }
  function Np(e) {
    H.H = Zl;
    var n = Je !== null && Je.next !== null;
    if (Rr = 0, bt = Je = Pe = null, Pl = !1, cs = 0, oi = null, n) throw Error(s(300));
    e === null || Dt || (e = e.dependencies, e !== null && Ml(e) && (Dt = !0));
  }
  function Dp(e, n, i, l) {
    Pe = e;
    var c = 0;
    do {
      if (li && (oi = null), cs = 0, li = !1, 25 <= c) throw Error(s(301));
      if (c += 1, bt = Je = null, e.updateQueue != null) {
        var m = e.updateQueue;
        m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
      }
      H.H = Xb, m = n(i, l);
    } while (li);
    return m;
  }
  function qb() {
    var e = H.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? fs(n) : n, e = e.useState()[0], (Je !== null ? Je.memoizedState : null) !== e && (Pe.flags |= 1024), n;
  }
  function Rc() {
    var e = Il !== 0;
    return Il = 0, e;
  }
  function jc(e, n, i) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~i;
  }
  function zc(e) {
    if (Pl) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Pl = !1;
    }
    Rr = 0, bt = Je = Pe = null, li = !1, cs = Il = 0, oi = null;
  }
  function Jt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return bt === null ? Pe.memoizedState = bt = e : bt = bt.next = e, bt;
  }
  function _t() {
    if (Je === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var n = bt === null ? Pe.memoizedState : bt.next;
    if (n !== null)
      bt = n, Je = e;
    else {
      if (e === null)
        throw Pe.alternate === null ? Error(s(467)) : Error(s(310));
      Je = e, e = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null
      }, bt === null ? Pe.memoizedState = bt = e : bt = bt.next = e;
    }
    return bt;
  }
  function Lc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function fs(e) {
    var n = cs;
    return cs += 1, oi === null && (oi = []), e = Ep(oi, e, n), n = Pe, (bt === null ? n.memoizedState : bt.next) === null && (n = n.alternate, H.H = n === null || n.memoizedState === null ? fm : dm), e;
  }
  function Bl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return fs(e);
      if (e.$$typeof === D) return It(e);
    }
    throw Error(s(438, String(e)));
  }
  function Pc(e) {
    var n = null, i = Pe.updateQueue;
    if (i !== null && (n = i.memoCache), n == null) {
      var l = Pe.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
        data: l.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), i === null && (i = Lc(), Pe.updateQueue = i), i.memoCache = n, i = n.data[n.index], i === void 0)
      for (i = n.data[n.index] = Array(e), l = 0; l < e; l++)
        i[l] = U;
    return n.index++, i;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ul(e) {
    var n = _t();
    return Ic(n, Je, e);
  }
  function Ic(e, n, i) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = i;
    var c = e.baseQueue, m = l.pending;
    if (m !== null) {
      if (c !== null) {
        var C = c.next;
        c.next = m.next, m.next = C;
      }
      n.baseQueue = c = m, l.pending = null;
    }
    if (m = e.baseState, c === null) e.memoizedState = m;
    else {
      n = c.next;
      var N = C = null, R = null, q = n, Y = !1;
      do {
        var K = q.lane & -536870913;
        if (K !== q.lane ? (Ze & K) === K : (Rr & K) === K) {
          var F = q.revertLane;
          if (F === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), K === ai && (Y = !0);
          else if ((Rr & F) === F) {
            q = q.next, F === ai && (Y = !0);
            continue;
          } else
            K = {
              lane: 0,
              revertLane: q.revertLane,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, R === null ? (N = R = K, C = m) : R = R.next = K, Pe.lanes |= F, Ur |= F;
          K = q.action, _a && i(m, K), m = q.hasEagerState ? q.eagerState : i(m, K);
        } else
          F = {
            lane: K,
            revertLane: q.revertLane,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, R === null ? (N = R = F, C = m) : R = R.next = F, Pe.lanes |= K, Ur |= K;
        q = q.next;
      } while (q !== null && q !== n);
      if (R === null ? C = m : R.next = N, !sn(m, e.memoizedState) && (Dt = !0, Y && (i = ii, i !== null)))
        throw i;
      e.memoizedState = m, e.baseState = C, e.baseQueue = R, l.lastRenderedState = m;
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Bc(e) {
    var n = _t(), i = n.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var l = i.dispatch, c = i.pending, m = n.memoizedState;
    if (c !== null) {
      i.pending = null;
      var C = c = c.next;
      do
        m = e(m, C.action), C = C.next;
      while (C !== c);
      sn(m, n.memoizedState) || (Dt = !0), n.memoizedState = m, n.baseQueue === null && (n.baseState = m), i.lastRenderedState = m;
    }
    return [m, l];
  }
  function Mp(e, n, i) {
    var l = Pe, c = _t(), m = Ye;
    if (m) {
      if (i === void 0) throw Error(s(407));
      i = i();
    } else i = n();
    var C = !sn(
      (Je || c).memoizedState,
      i
    );
    C && (c.memoizedState = i, Dt = !0), c = c.queue;
    var N = jp.bind(null, l, c, e);
    if (ds(2048, 8, N, [e]), c.getSnapshot !== n || C || bt !== null && bt.memoizedState.tag & 1) {
      if (l.flags |= 2048, ui(
        9,
        Hl(),
        Rp.bind(
          null,
          l,
          c,
          i,
          n
        ),
        null
      ), nt === null) throw Error(s(349));
      m || (Rr & 124) !== 0 || kp(l, n, i);
    }
    return i;
  }
  function kp(e, n, i) {
    e.flags |= 16384, e = { getSnapshot: n, value: i }, n = Pe.updateQueue, n === null ? (n = Lc(), Pe.updateQueue = n, n.stores = [e]) : (i = n.stores, i === null ? n.stores = [e] : i.push(e));
  }
  function Rp(e, n, i, l) {
    n.value = i, n.getSnapshot = l, zp(n) && Lp(e);
  }
  function jp(e, n, i) {
    return i(function() {
      zp(n) && Lp(e);
    });
  }
  function zp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !sn(e, i);
    } catch {
      return !0;
    }
  }
  function Lp(e) {
    var n = ei(e, 2);
    n !== null && dn(n, e, 2);
  }
  function Uc(e) {
    var n = Jt();
    if (typeof e == "function") {
      var i = e;
      if (e = i(), _a) {
        Zn(!0);
        try {
          i();
        } finally {
          Zn(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e
    }, n;
  }
  function Pp(e, n, i, l) {
    return e.baseState = i, Ic(
      e,
      Je,
      typeof l == "function" ? l : cr
    );
  }
  function Fb(e, n, i, l, c) {
    if (Fl(e)) throw Error(s(485));
    if (e = n.action, e !== null) {
      var m = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(C) {
          m.listeners.push(C);
        }
      };
      H.T !== null ? i(!0) : m.isTransition = !1, l(m), i = n.pending, i === null ? (m.next = n.pending = m, Ip(n, m)) : (m.next = i.next, n.pending = i.next = m);
    }
  }
  function Ip(e, n) {
    var i = n.action, l = n.payload, c = e.state;
    if (n.isTransition) {
      var m = H.T, C = {};
      H.T = C;
      try {
        var N = i(c, l), R = H.S;
        R !== null && R(C, N), Bp(e, n, N);
      } catch (q) {
        Hc(e, n, q);
      } finally {
        H.T = m;
      }
    } else
      try {
        m = i(c, l), Bp(e, n, m);
      } catch (q) {
        Hc(e, n, q);
      }
  }
  function Bp(e, n, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(l) {
        Up(e, n, l);
      },
      function(l) {
        return Hc(e, n, l);
      }
    ) : Up(e, n, i);
  }
  function Up(e, n, i) {
    n.status = "fulfilled", n.value = i, Hp(n), e.state = i, n = e.pending, n !== null && (i = n.next, i === n ? e.pending = null : (i = i.next, n.next = i, Ip(e, i)));
  }
  function Hc(e, n, i) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        n.status = "rejected", n.reason = i, Hp(n), n = n.next;
      while (n !== l);
    }
    e.action = null;
  }
  function Hp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function qp(e, n) {
    return n;
  }
  function Fp(e, n) {
    if (Ye) {
      var i = nt.formState;
      if (i !== null) {
        e: {
          var l = Pe;
          if (Ye) {
            if (dt) {
              t: {
                for (var c = dt, m = Vn; c.nodeType !== 8; ) {
                  if (!m) {
                    c = null;
                    break t;
                  }
                  if (c = Ln(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                m = c.data, c = m === "F!" || m === "F" ? c : null;
              }
              if (c) {
                dt = Ln(
                  c.nextSibling
                ), l = c.data === "F!";
                break e;
              }
            }
            ga(l);
          }
          l = !1;
        }
        l && (n = i[0]);
      }
    }
    return i = Jt(), i.memoizedState = i.baseState = n, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qp,
      lastRenderedState: n
    }, i.queue = l, i = om.bind(
      null,
      Pe,
      l
    ), l.dispatch = i, l = Uc(!1), m = Vc.bind(
      null,
      Pe,
      !1,
      l.queue
    ), l = Jt(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = c, i = Fb.bind(
      null,
      Pe,
      c,
      m,
      i
    ), c.dispatch = i, l.memoizedState = e, [n, i, !1];
  }
  function Zp(e) {
    var n = _t();
    return Gp(n, Je, e);
  }
  function Gp(e, n, i) {
    if (n = Ic(
      e,
      n,
      qp
    )[0], e = Ul(cr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = fs(n);
      } catch (C) {
        throw C === is ? jl : C;
      }
    else l = n;
    n = _t();
    var c = n.queue, m = c.dispatch;
    return i !== n.memoizedState && (Pe.flags |= 2048, ui(
      9,
      Hl(),
      Zb.bind(null, c, i),
      null
    )), [l, m, e];
  }
  function Zb(e, n) {
    e.action = n;
  }
  function Vp(e) {
    var n = _t(), i = Je;
    if (i !== null)
      return Gp(n, i, e);
    _t(), n = n.memoizedState, i = _t();
    var l = i.queue.dispatch;
    return i.memoizedState = e, [n, l, !1];
  }
  function ui(e, n, i, l) {
    return e = { tag: e, create: i, deps: l, inst: n, next: null }, n = Pe.updateQueue, n === null && (n = Lc(), Pe.updateQueue = n), i = n.lastEffect, i === null ? n.lastEffect = e.next = e : (l = i.next, i.next = e, e.next = l, n.lastEffect = e), e;
  }
  function Hl() {
    return { destroy: void 0, resource: void 0 };
  }
  function Yp() {
    return _t().memoizedState;
  }
  function ql(e, n, i, l) {
    var c = Jt();
    l = l === void 0 ? null : l, Pe.flags |= e, c.memoizedState = ui(
      1 | n,
      Hl(),
      i,
      l
    );
  }
  function ds(e, n, i, l) {
    var c = _t();
    l = l === void 0 ? null : l;
    var m = c.memoizedState.inst;
    Je !== null && l !== null && Mc(l, Je.memoizedState.deps) ? c.memoizedState = ui(n, m, i, l) : (Pe.flags |= e, c.memoizedState = ui(
      1 | n,
      m,
      i,
      l
    ));
  }
  function Xp(e, n) {
    ql(8390656, 8, e, n);
  }
  function $p(e, n) {
    ds(2048, 8, e, n);
  }
  function Qp(e, n) {
    return ds(4, 2, e, n);
  }
  function Jp(e, n) {
    return ds(4, 4, e, n);
  }
  function Kp(e, n) {
    if (typeof n == "function") {
      e = e();
      var i = n(e);
      return function() {
        typeof i == "function" ? i() : n(null);
      };
    }
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Wp(e, n, i) {
    i = i != null ? i.concat([e]) : null, ds(4, 4, Kp.bind(null, n, e), i);
  }
  function qc() {
  }
  function em(e, n) {
    var i = _t();
    n = n === void 0 ? null : n;
    var l = i.memoizedState;
    return n !== null && Mc(n, l[1]) ? l[0] : (i.memoizedState = [e, n], e);
  }
  function tm(e, n) {
    var i = _t();
    n = n === void 0 ? null : n;
    var l = i.memoizedState;
    if (n !== null && Mc(n, l[1]))
      return l[0];
    if (l = e(), _a) {
      Zn(!0);
      try {
        e();
      } finally {
        Zn(!1);
      }
    }
    return i.memoizedState = [l, n], l;
  }
  function Fc(e, n, i) {
    return i === void 0 || (Rr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = i, e = ag(), Pe.lanes |= e, Ur |= e, i);
  }
  function nm(e, n, i, l) {
    return sn(i, n) ? i : si.current !== null ? (e = Fc(e, i, l), sn(e, n) || (Dt = !0), e) : (Rr & 42) === 0 ? (Dt = !0, e.memoizedState = i) : (e = ag(), Pe.lanes |= e, Ur |= e, n);
  }
  function rm(e, n, i, l, c) {
    var m = te.p;
    te.p = m !== 0 && 8 > m ? m : 8;
    var C = H.T, N = {};
    H.T = N, Vc(e, !1, n, i);
    try {
      var R = c(), q = H.S;
      if (q !== null && q(N, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var Y = Ub(
          R,
          l
        );
        hs(
          e,
          n,
          Y,
          fn(e)
        );
      } else
        hs(
          e,
          n,
          l,
          fn(e)
        );
    } catch (K) {
      hs(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: K },
        fn()
      );
    } finally {
      te.p = m, H.T = C;
    }
  }
  function Gb() {
  }
  function Zc(e, n, i, l) {
    if (e.tag !== 5) throw Error(s(476));
    var c = am(e).queue;
    rm(
      e,
      c,
      n,
      ue,
      i === null ? Gb : function() {
        return im(e), i(l);
      }
    );
  }
  function am(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ue,
      baseState: ue,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: ue
      },
      next: null
    };
    var i = {};
    return n.next = {
      memoizedState: i,
      baseState: i,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: i
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function im(e) {
    var n = am(e).next.queue;
    hs(e, n, {}, fn());
  }
  function Gc() {
    return It(Ms);
  }
  function sm() {
    return _t().memoizedState;
  }
  function lm() {
    return _t().memoizedState;
  }
  function Vb(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = fn();
          e = Mr(i);
          var l = kr(n, e, i);
          l !== null && (dn(l, n, i), ls(l, n, i)), n = { cache: Sc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Yb(e, n, i) {
    var l = fn();
    i = {
      lane: l,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fl(e) ? um(n, i) : (i = fc(e, n, i, l), i !== null && (dn(i, e, l), cm(i, n, l)));
  }
  function om(e, n, i) {
    var l = fn();
    hs(e, n, i, l);
  }
  function hs(e, n, i, l) {
    var c = {
      lane: l,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Fl(e)) um(n, c);
    else {
      var m = e.alternate;
      if (e.lanes === 0 && (m === null || m.lanes === 0) && (m = n.lastRenderedReducer, m !== null))
        try {
          var C = n.lastRenderedState, N = m(C, i);
          if (c.hasEagerState = !0, c.eagerState = N, sn(N, C))
            return Al(e, n, c, 0), nt === null && wl(), !1;
        } catch {
        } finally {
        }
      if (i = fc(e, n, c, l), i !== null)
        return dn(i, e, l), cm(i, n, l), !0;
    }
    return !1;
  }
  function Vc(e, n, i, l) {
    if (l = {
      lane: 2,
      revertLane: wf(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fl(e)) {
      if (n) throw Error(s(479));
    } else
      n = fc(
        e,
        i,
        l,
        2
      ), n !== null && dn(n, e, 2);
  }
  function Fl(e) {
    var n = e.alternate;
    return e === Pe || n !== null && n === Pe;
  }
  function um(e, n) {
    li = Pl = !0;
    var i = e.pending;
    i === null ? n.next = n : (n.next = i.next, i.next = n), e.pending = n;
  }
  function cm(e, n, i) {
    if ((i & 4194048) !== 0) {
      var l = n.lanes;
      l &= e.pendingLanes, i |= l, n.lanes = i, yh(e, i);
    }
  }
  var Zl = {
    readContext: It,
    use: Bl,
    useCallback: gt,
    useContext: gt,
    useEffect: gt,
    useImperativeHandle: gt,
    useLayoutEffect: gt,
    useInsertionEffect: gt,
    useMemo: gt,
    useReducer: gt,
    useRef: gt,
    useState: gt,
    useDebugValue: gt,
    useDeferredValue: gt,
    useTransition: gt,
    useSyncExternalStore: gt,
    useId: gt,
    useHostTransitionStatus: gt,
    useFormState: gt,
    useActionState: gt,
    useOptimistic: gt,
    useMemoCache: gt,
    useCacheRefresh: gt
  }, fm = {
    readContext: It,
    use: Bl,
    useCallback: function(e, n) {
      return Jt().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: It,
    useEffect: Xp,
    useImperativeHandle: function(e, n, i) {
      i = i != null ? i.concat([e]) : null, ql(
        4194308,
        4,
        Kp.bind(null, n, e),
        i
      );
    },
    useLayoutEffect: function(e, n) {
      return ql(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      ql(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var i = Jt();
      n = n === void 0 ? null : n;
      var l = e();
      if (_a) {
        Zn(!0);
        try {
          e();
        } finally {
          Zn(!1);
        }
      }
      return i.memoizedState = [l, n], l;
    },
    useReducer: function(e, n, i) {
      var l = Jt();
      if (i !== void 0) {
        var c = i(n);
        if (_a) {
          Zn(!0);
          try {
            i(n);
          } finally {
            Zn(!1);
          }
        }
      } else c = n;
      return l.memoizedState = l.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, l.queue = e, e = e.dispatch = Yb.bind(
        null,
        Pe,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var n = Jt();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Uc(e);
      var n = e.queue, i = om.bind(null, Pe, n);
      return n.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: qc,
    useDeferredValue: function(e, n) {
      var i = Jt();
      return Fc(i, e, n);
    },
    useTransition: function() {
      var e = Uc(!1);
      return e = rm.bind(
        null,
        Pe,
        e.queue,
        !0,
        !1
      ), Jt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, i) {
      var l = Pe, c = Jt();
      if (Ye) {
        if (i === void 0)
          throw Error(s(407));
        i = i();
      } else {
        if (i = n(), nt === null)
          throw Error(s(349));
        (Ze & 124) !== 0 || kp(l, n, i);
      }
      c.memoizedState = i;
      var m = { value: i, getSnapshot: n };
      return c.queue = m, Xp(jp.bind(null, l, m, e), [
        e
      ]), l.flags |= 2048, ui(
        9,
        Hl(),
        Rp.bind(
          null,
          l,
          m,
          i,
          n
        ),
        null
      ), i;
    },
    useId: function() {
      var e = Jt(), n = nt.identifierPrefix;
      if (Ye) {
        var i = lr, l = sr;
        i = (l & ~(1 << 32 - qt(l) - 1)).toString(32) + i, n = "«" + n + "R" + i, i = Il++, 0 < i && (n += "H" + i.toString(32)), n += "»";
      } else
        i = Hb++, n = "«" + n + "r" + i.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Gc,
    useFormState: Fp,
    useActionState: Fp,
    useOptimistic: function(e) {
      var n = Jt();
      n.memoizedState = n.baseState = e;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = i, n = Vc.bind(
        null,
        Pe,
        !0,
        i
      ), i.dispatch = n, [e, n];
    },
    useMemoCache: Pc,
    useCacheRefresh: function() {
      return Jt().memoizedState = Vb.bind(
        null,
        Pe
      );
    }
  }, dm = {
    readContext: It,
    use: Bl,
    useCallback: em,
    useContext: It,
    useEffect: $p,
    useImperativeHandle: Wp,
    useInsertionEffect: Qp,
    useLayoutEffect: Jp,
    useMemo: tm,
    useReducer: Ul,
    useRef: Yp,
    useState: function() {
      return Ul(cr);
    },
    useDebugValue: qc,
    useDeferredValue: function(e, n) {
      var i = _t();
      return nm(
        i,
        Je.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Ul(cr)[0], n = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : fs(e),
        n
      ];
    },
    useSyncExternalStore: Mp,
    useId: sm,
    useHostTransitionStatus: Gc,
    useFormState: Zp,
    useActionState: Zp,
    useOptimistic: function(e, n) {
      var i = _t();
      return Pp(i, Je, e, n);
    },
    useMemoCache: Pc,
    useCacheRefresh: lm
  }, Xb = {
    readContext: It,
    use: Bl,
    useCallback: em,
    useContext: It,
    useEffect: $p,
    useImperativeHandle: Wp,
    useInsertionEffect: Qp,
    useLayoutEffect: Jp,
    useMemo: tm,
    useReducer: Bc,
    useRef: Yp,
    useState: function() {
      return Bc(cr);
    },
    useDebugValue: qc,
    useDeferredValue: function(e, n) {
      var i = _t();
      return Je === null ? Fc(i, e, n) : nm(
        i,
        Je.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Bc(cr)[0], n = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : fs(e),
        n
      ];
    },
    useSyncExternalStore: Mp,
    useId: sm,
    useHostTransitionStatus: Gc,
    useFormState: Vp,
    useActionState: Vp,
    useOptimistic: function(e, n) {
      var i = _t();
      return Je !== null ? Pp(i, Je, e, n) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: Pc,
    useCacheRefresh: lm
  }, ci = null, ps = 0;
  function Gl(e) {
    var n = ps;
    return ps += 1, ci === null && (ci = []), Ep(ci, e, n);
  }
  function ms(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Vl(e, n) {
    throw n.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(n), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function hm(e) {
    var n = e._init;
    return n(e._payload);
  }
  function pm(e) {
    function n(L, z) {
      if (e) {
        var B = L.deletions;
        B === null ? (L.deletions = [z], L.flags |= 16) : B.push(z);
      }
    }
    function i(L, z) {
      if (!e) return null;
      for (; z !== null; )
        n(L, z), z = z.sibling;
      return null;
    }
    function l(L) {
      for (var z = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? z.set(L.key, L) : z.set(L.index, L), L = L.sibling;
      return z;
    }
    function c(L, z) {
      return L = ir(L, z), L.index = 0, L.sibling = null, L;
    }
    function m(L, z, B) {
      return L.index = B, e ? (B = L.alternate, B !== null ? (B = B.index, B < z ? (L.flags |= 67108866, z) : B) : (L.flags |= 67108866, z)) : (L.flags |= 1048576, z);
    }
    function C(L) {
      return e && L.alternate === null && (L.flags |= 67108866), L;
    }
    function N(L, z, B, $) {
      return z === null || z.tag !== 6 ? (z = hc(B, L.mode, $), z.return = L, z) : (z = c(z, B), z.return = L, z);
    }
    function R(L, z, B, $) {
      var ce = B.type;
      return ce === d ? Y(
        L,
        z,
        B.props.children,
        $,
        B.key
      ) : z !== null && (z.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === P && hm(ce) === z.type) ? (z = c(z, B.props), ms(z, B), z.return = L, z) : (z = Ol(
        B.type,
        B.key,
        B.props,
        null,
        L.mode,
        $
      ), ms(z, B), z.return = L, z);
    }
    function q(L, z, B, $) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== B.containerInfo || z.stateNode.implementation !== B.implementation ? (z = pc(B, L.mode, $), z.return = L, z) : (z = c(z, B.children || []), z.return = L, z);
    }
    function Y(L, z, B, $, ce) {
      return z === null || z.tag !== 7 ? (z = da(
        B,
        L.mode,
        $,
        ce
      ), z.return = L, z) : (z = c(z, B), z.return = L, z);
    }
    function K(L, z, B) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = hc(
          "" + z,
          L.mode,
          B
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case b:
            return B = Ol(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              B
            ), ms(B, z), B.return = L, B;
          case v:
            return z = pc(
              z,
              L.mode,
              B
            ), z.return = L, z;
          case P:
            var $ = z._init;
            return z = $(z._payload), K(L, z, B);
        }
        if (Ee(z) || Q(z))
          return z = da(
            z,
            L.mode,
            B,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return K(L, Gl(z), B);
        if (z.$$typeof === D)
          return K(
            L,
            kl(L, z),
            B
          );
        Vl(L, z);
      }
      return null;
    }
    function F(L, z, B, $) {
      var ce = z !== null ? z.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return ce !== null ? null : N(L, z, "" + B, $);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case b:
            return B.key === ce ? R(L, z, B, $) : null;
          case v:
            return B.key === ce ? q(L, z, B, $) : null;
          case P:
            return ce = B._init, B = ce(B._payload), F(L, z, B, $);
        }
        if (Ee(B) || Q(B))
          return ce !== null ? null : Y(L, z, B, $, null);
        if (typeof B.then == "function")
          return F(
            L,
            z,
            Gl(B),
            $
          );
        if (B.$$typeof === D)
          return F(
            L,
            z,
            kl(L, B),
            $
          );
        Vl(L, B);
      }
      return null;
    }
    function Z(L, z, B, $, ce) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint")
        return L = L.get(B) || null, N(z, L, "" + $, ce);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case b:
            return L = L.get(
              $.key === null ? B : $.key
            ) || null, R(z, L, $, ce);
          case v:
            return L = L.get(
              $.key === null ? B : $.key
            ) || null, q(z, L, $, ce);
          case P:
            var Be = $._init;
            return $ = Be($._payload), Z(
              L,
              z,
              B,
              $,
              ce
            );
        }
        if (Ee($) || Q($))
          return L = L.get(B) || null, Y(z, L, $, ce, null);
        if (typeof $.then == "function")
          return Z(
            L,
            z,
            B,
            Gl($),
            ce
          );
        if ($.$$typeof === D)
          return Z(
            L,
            z,
            B,
            kl(z, $),
            ce
          );
        Vl(z, $);
      }
      return null;
    }
    function Ae(L, z, B, $) {
      for (var ce = null, Be = null, pe = z, xe = z = 0, kt = null; pe !== null && xe < B.length; xe++) {
        pe.index > xe ? (kt = pe, pe = null) : kt = pe.sibling;
        var Ge = F(
          L,
          pe,
          B[xe],
          $
        );
        if (Ge === null) {
          pe === null && (pe = kt);
          break;
        }
        e && pe && Ge.alternate === null && n(L, pe), z = m(Ge, z, xe), Be === null ? ce = Ge : Be.sibling = Ge, Be = Ge, pe = kt;
      }
      if (xe === B.length)
        return i(L, pe), Ye && pa(L, xe), ce;
      if (pe === null) {
        for (; xe < B.length; xe++)
          pe = K(L, B[xe], $), pe !== null && (z = m(
            pe,
            z,
            xe
          ), Be === null ? ce = pe : Be.sibling = pe, Be = pe);
        return Ye && pa(L, xe), ce;
      }
      for (pe = l(pe); xe < B.length; xe++)
        kt = Z(
          pe,
          L,
          xe,
          B[xe],
          $
        ), kt !== null && (e && kt.alternate !== null && pe.delete(
          kt.key === null ? xe : kt.key
        ), z = m(
          kt,
          z,
          xe
        ), Be === null ? ce = kt : Be.sibling = kt, Be = kt);
      return e && pe.forEach(function($r) {
        return n(L, $r);
      }), Ye && pa(L, xe), ce;
    }
    function Se(L, z, B, $) {
      if (B == null) throw Error(s(151));
      for (var ce = null, Be = null, pe = z, xe = z = 0, kt = null, Ge = B.next(); pe !== null && !Ge.done; xe++, Ge = B.next()) {
        pe.index > xe ? (kt = pe, pe = null) : kt = pe.sibling;
        var $r = F(L, pe, Ge.value, $);
        if ($r === null) {
          pe === null && (pe = kt);
          break;
        }
        e && pe && $r.alternate === null && n(L, pe), z = m($r, z, xe), Be === null ? ce = $r : Be.sibling = $r, Be = $r, pe = kt;
      }
      if (Ge.done)
        return i(L, pe), Ye && pa(L, xe), ce;
      if (pe === null) {
        for (; !Ge.done; xe++, Ge = B.next())
          Ge = K(L, Ge.value, $), Ge !== null && (z = m(Ge, z, xe), Be === null ? ce = Ge : Be.sibling = Ge, Be = Ge);
        return Ye && pa(L, xe), ce;
      }
      for (pe = l(pe); !Ge.done; xe++, Ge = B.next())
        Ge = Z(pe, L, xe, Ge.value, $), Ge !== null && (e && Ge.alternate !== null && pe.delete(Ge.key === null ? xe : Ge.key), z = m(Ge, z, xe), Be === null ? ce = Ge : Be.sibling = Ge, Be = Ge);
      return e && pe.forEach(function($2) {
        return n(L, $2);
      }), Ye && pa(L, xe), ce;
    }
    function We(L, z, B, $) {
      if (typeof B == "object" && B !== null && B.type === d && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case b:
            e: {
              for (var ce = B.key; z !== null; ) {
                if (z.key === ce) {
                  if (ce = B.type, ce === d) {
                    if (z.tag === 7) {
                      i(
                        L,
                        z.sibling
                      ), $ = c(
                        z,
                        B.props.children
                      ), $.return = L, L = $;
                      break e;
                    }
                  } else if (z.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === P && hm(ce) === z.type) {
                    i(
                      L,
                      z.sibling
                    ), $ = c(z, B.props), ms($, B), $.return = L, L = $;
                    break e;
                  }
                  i(L, z);
                  break;
                } else n(L, z);
                z = z.sibling;
              }
              B.type === d ? ($ = da(
                B.props.children,
                L.mode,
                $,
                B.key
              ), $.return = L, L = $) : ($ = Ol(
                B.type,
                B.key,
                B.props,
                null,
                L.mode,
                $
              ), ms($, B), $.return = L, L = $);
            }
            return C(L);
          case v:
            e: {
              for (ce = B.key; z !== null; ) {
                if (z.key === ce)
                  if (z.tag === 4 && z.stateNode.containerInfo === B.containerInfo && z.stateNode.implementation === B.implementation) {
                    i(
                      L,
                      z.sibling
                    ), $ = c(z, B.children || []), $.return = L, L = $;
                    break e;
                  } else {
                    i(L, z);
                    break;
                  }
                else n(L, z);
                z = z.sibling;
              }
              $ = pc(B, L.mode, $), $.return = L, L = $;
            }
            return C(L);
          case P:
            return ce = B._init, B = ce(B._payload), We(
              L,
              z,
              B,
              $
            );
        }
        if (Ee(B))
          return Ae(
            L,
            z,
            B,
            $
          );
        if (Q(B)) {
          if (ce = Q(B), typeof ce != "function") throw Error(s(150));
          return B = ce.call(B), Se(
            L,
            z,
            B,
            $
          );
        }
        if (typeof B.then == "function")
          return We(
            L,
            z,
            Gl(B),
            $
          );
        if (B.$$typeof === D)
          return We(
            L,
            z,
            kl(L, B),
            $
          );
        Vl(L, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, z !== null && z.tag === 6 ? (i(L, z.sibling), $ = c(z, B), $.return = L, L = $) : (i(L, z), $ = hc(B, L.mode, $), $.return = L, L = $), C(L)) : i(L, z);
    }
    return function(L, z, B, $) {
      try {
        ps = 0;
        var ce = We(
          L,
          z,
          B,
          $
        );
        return ci = null, ce;
      } catch (pe) {
        if (pe === is || pe === jl) throw pe;
        var Be = ln(29, pe, null, L.mode);
        return Be.lanes = $, Be.return = L, Be;
      } finally {
      }
    };
  }
  var fi = pm(!0), mm = pm(!1), An = J(null), Yn = null;
  function jr(e) {
    var n = e.alternate;
    se(wt, wt.current & 1), se(An, e), Yn === null && (n === null || si.current !== null || n.memoizedState !== null) && (Yn = e);
  }
  function gm(e) {
    if (e.tag === 22) {
      if (se(wt, wt.current), se(An, e), Yn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Yn = e);
      }
    } else zr();
  }
  function zr() {
    se(wt, wt.current), se(An, An.current);
  }
  function fr(e) {
    ae(An), Yn === e && (Yn = null), ae(wt);
  }
  var wt = J(0);
  function Yl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || Pf(i)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function Yc(e, n, i, l) {
    n = e.memoizedState, i = i(l, n), i = i == null ? n : y({}, n, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Xc = {
    enqueueSetState: function(e, n, i) {
      e = e._reactInternals;
      var l = fn(), c = Mr(l);
      c.payload = n, i != null && (c.callback = i), n = kr(e, c, l), n !== null && (dn(n, e, l), ls(n, e, l));
    },
    enqueueReplaceState: function(e, n, i) {
      e = e._reactInternals;
      var l = fn(), c = Mr(l);
      c.tag = 1, c.payload = n, i != null && (c.callback = i), n = kr(e, c, l), n !== null && (dn(n, e, l), ls(n, e, l));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var i = fn(), l = Mr(i);
      l.tag = 2, n != null && (l.callback = n), n = kr(e, l, i), n !== null && (dn(n, e, i), ls(n, e, i));
    }
  };
  function vm(e, n, i, l, c, m, C) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, m, C) : n.prototype && n.prototype.isPureReactComponent ? !Ji(i, l) || !Ji(c, m) : !0;
  }
  function ym(e, n, i, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, l), n.state !== e && Xc.enqueueReplaceState(n, n.state, null);
  }
  function Sa(e, n) {
    var i = n;
    if ("ref" in n) {
      i = {};
      for (var l in n)
        l !== "ref" && (i[l] = n[l]);
    }
    if (e = e.defaultProps) {
      i === n && (i = y({}, i));
      for (var c in e)
        i[c] === void 0 && (i[c] = e[c]);
    }
    return i;
  }
  var Xl = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function bm(e) {
    Xl(e);
  }
  function _m(e) {
    console.error(e);
  }
  function Sm(e) {
    Xl(e);
  }
  function $l(e, n) {
    try {
      var i = e.onUncaughtError;
      i(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function xm(e, n, i) {
    try {
      var l = e.onCaughtError;
      l(i.value, {
        componentStack: i.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function $c(e, n, i) {
    return i = Mr(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      $l(e, n);
    }, i;
  }
  function Em(e) {
    return e = Mr(e), e.tag = 3, e;
  }
  function Cm(e, n, i, l) {
    var c = i.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var m = l.value;
      e.payload = function() {
        return c(m);
      }, e.callback = function() {
        xm(n, i, l);
      };
    }
    var C = i.stateNode;
    C !== null && typeof C.componentDidCatch == "function" && (e.callback = function() {
      xm(n, i, l), typeof c != "function" && (Hr === null ? Hr = /* @__PURE__ */ new Set([this]) : Hr.add(this));
      var N = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: N !== null ? N : ""
      });
    });
  }
  function $b(e, n, i, l, c) {
    if (i.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (n = i.alternate, n !== null && ns(
        n,
        i,
        c,
        !0
      ), i = An.current, i !== null) {
        switch (i.tag) {
          case 13:
            return Yn === null ? _f() : i.alternate === null && ht === 0 && (ht = 3), i.flags &= -257, i.flags |= 65536, i.lanes = c, l === Cc ? i.flags |= 16384 : (n = i.updateQueue, n === null ? i.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), xf(e, l, c)), !1;
          case 22:
            return i.flags |= 65536, l === Cc ? i.flags |= 16384 : (n = i.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, i.updateQueue = n) : (i = n.retryQueue, i === null ? n.retryQueue = /* @__PURE__ */ new Set([l]) : i.add(l)), xf(e, l, c)), !1;
        }
        throw Error(s(435, i.tag));
      }
      return xf(e, l, c), _f(), !1;
    }
    if (Ye)
      return n = An.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, l !== vc && (e = Error(s(422), { cause: l }), ts(xn(e, i)))) : (l !== vc && (n = Error(s(423), {
        cause: l
      }), ts(
        xn(n, i)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, l = xn(l, i), c = $c(
        e.stateNode,
        l,
        c
      ), Tc(e, c), ht !== 4 && (ht = 2)), !1;
    var m = Error(s(520), { cause: l });
    if (m = xn(m, i), xs === null ? xs = [m] : xs.push(m), ht !== 4 && (ht = 2), n === null) return !0;
    l = xn(l, i), i = n;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = c & -c, i.lanes |= e, e = $c(i.stateNode, l, e), Tc(i, e), !1;
        case 1:
          if (n = i.type, m = i.stateNode, (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Hr === null || !Hr.has(m))))
            return i.flags |= 65536, c &= -c, i.lanes |= c, c = Em(c), Cm(
              c,
              e,
              i,
              l
            ), Tc(i, c), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var wm = Error(s(461)), Dt = !1;
  function Rt(e, n, i, l) {
    n.child = e === null ? mm(n, null, i, l) : fi(
      n,
      e.child,
      i,
      l
    );
  }
  function Am(e, n, i, l, c) {
    i = i.render;
    var m = n.ref;
    if ("ref" in l) {
      var C = {};
      for (var N in l)
        N !== "ref" && (C[N] = l[N]);
    } else C = l;
    return ya(n), l = kc(
      e,
      n,
      i,
      C,
      m,
      c
    ), N = Rc(), e !== null && !Dt ? (jc(e, n, c), dr(e, n, c)) : (Ye && N && mc(n), n.flags |= 1, Rt(e, n, l, c), n.child);
  }
  function Tm(e, n, i, l, c) {
    if (e === null) {
      var m = i.type;
      return typeof m == "function" && !dc(m) && m.defaultProps === void 0 && i.compare === null ? (n.tag = 15, n.type = m, Om(
        e,
        n,
        m,
        l,
        c
      )) : (e = Ol(
        i.type,
        null,
        l,
        n,
        n.mode,
        c
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (m = e.child, !rf(e, c)) {
      var C = m.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Ji, i(C, l) && e.ref === n.ref)
        return dr(e, n, c);
    }
    return n.flags |= 1, e = ir(m, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Om(e, n, i, l, c) {
    if (e !== null) {
      var m = e.memoizedProps;
      if (Ji(m, l) && e.ref === n.ref)
        if (Dt = !1, n.pendingProps = l = m, rf(e, c))
          (e.flags & 131072) !== 0 && (Dt = !0);
        else
          return n.lanes = e.lanes, dr(e, n, c);
    }
    return Qc(
      e,
      n,
      i,
      l,
      c
    );
  }
  function Nm(e, n, i) {
    var l = n.pendingProps, c = l.children, m = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (l = m !== null ? m.baseLanes | i : i, e !== null) {
          for (c = n.child = e.child, m = 0; c !== null; )
            m = m | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = m & ~l;
        } else n.childLanes = 0, n.child = null;
        return Dm(
          e,
          n,
          l,
          i
        );
      }
      if ((i & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Rl(
          n,
          m !== null ? m.cachePool : null
        ), m !== null ? Op(n, m) : Nc(), gm(n);
      else
        return n.lanes = n.childLanes = 536870912, Dm(
          e,
          n,
          m !== null ? m.baseLanes | i : i,
          i
        );
    } else
      m !== null ? (Rl(n, m.cachePool), Op(n, m), zr(), n.memoizedState = null) : (e !== null && Rl(n, null), Nc(), zr());
    return Rt(e, n, c, i), n.child;
  }
  function Dm(e, n, i, l) {
    var c = Ec();
    return c = c === null ? null : { parent: Ct._currentValue, pool: c }, n.memoizedState = {
      baseLanes: i,
      cachePool: c
    }, e !== null && Rl(n, null), Nc(), gm(n), e !== null && ns(e, n, l, !0), null;
  }
  function Ql(e, n) {
    var i = n.ref;
    if (i === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object")
        throw Error(s(284));
      (e === null || e.ref !== i) && (n.flags |= 4194816);
    }
  }
  function Qc(e, n, i, l, c) {
    return ya(n), i = kc(
      e,
      n,
      i,
      l,
      void 0,
      c
    ), l = Rc(), e !== null && !Dt ? (jc(e, n, c), dr(e, n, c)) : (Ye && l && mc(n), n.flags |= 1, Rt(e, n, i, c), n.child);
  }
  function Mm(e, n, i, l, c, m) {
    return ya(n), n.updateQueue = null, i = Dp(
      n,
      l,
      i,
      c
    ), Np(e), l = Rc(), e !== null && !Dt ? (jc(e, n, m), dr(e, n, m)) : (Ye && l && mc(n), n.flags |= 1, Rt(e, n, i, m), n.child);
  }
  function km(e, n, i, l, c) {
    if (ya(n), n.stateNode === null) {
      var m = ti, C = i.contextType;
      typeof C == "object" && C !== null && (m = It(C)), m = new i(l, m), n.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = Xc, n.stateNode = m, m._reactInternals = n, m = n.stateNode, m.props = l, m.state = n.memoizedState, m.refs = {}, wc(n), C = i.contextType, m.context = typeof C == "object" && C !== null ? It(C) : ti, m.state = n.memoizedState, C = i.getDerivedStateFromProps, typeof C == "function" && (Yc(
        n,
        i,
        C,
        l
      ), m.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (C = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), C !== m.state && Xc.enqueueReplaceState(m, m.state, null), us(n, l, m, c), os(), m.state = n.memoizedState), typeof m.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (e === null) {
      m = n.stateNode;
      var N = n.memoizedProps, R = Sa(i, N);
      m.props = R;
      var q = m.context, Y = i.contextType;
      C = ti, typeof Y == "object" && Y !== null && (C = It(Y));
      var K = i.getDerivedStateFromProps;
      Y = typeof K == "function" || typeof m.getSnapshotBeforeUpdate == "function", N = n.pendingProps !== N, Y || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (N || q !== C) && ym(
        n,
        m,
        l,
        C
      ), Dr = !1;
      var F = n.memoizedState;
      m.state = F, us(n, l, m, c), os(), q = n.memoizedState, N || F !== q || Dr ? (typeof K == "function" && (Yc(
        n,
        i,
        K,
        l
      ), q = n.memoizedState), (R = Dr || vm(
        n,
        i,
        R,
        l,
        F,
        q,
        C
      )) ? (Y || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = q), m.props = l, m.state = q, m.context = C, l = R) : (typeof m.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      m = n.stateNode, Ac(e, n), C = n.memoizedProps, Y = Sa(i, C), m.props = Y, K = n.pendingProps, F = m.context, q = i.contextType, R = ti, typeof q == "object" && q !== null && (R = It(q)), N = i.getDerivedStateFromProps, (q = typeof N == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== K || F !== R) && ym(
        n,
        m,
        l,
        R
      ), Dr = !1, F = n.memoizedState, m.state = F, us(n, l, m, c), os();
      var Z = n.memoizedState;
      C !== K || F !== Z || Dr || e !== null && e.dependencies !== null && Ml(e.dependencies) ? (typeof N == "function" && (Yc(
        n,
        i,
        N,
        l
      ), Z = n.memoizedState), (Y = Dr || vm(
        n,
        i,
        Y,
        l,
        F,
        Z,
        R
      ) || e !== null && e.dependencies !== null && Ml(e.dependencies)) ? (q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(l, Z, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(
        l,
        Z,
        R
      )), typeof m.componentDidUpdate == "function" && (n.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = Z), m.props = l, m.state = Z, m.context = R, l = Y) : (typeof m.componentDidUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return m = l, Ql(e, n), l = (n.flags & 128) !== 0, m || l ? (m = n.stateNode, i = l && typeof i.getDerivedStateFromError != "function" ? null : m.render(), n.flags |= 1, e !== null && l ? (n.child = fi(
      n,
      e.child,
      null,
      c
    ), n.child = fi(
      n,
      null,
      i,
      c
    )) : Rt(e, n, i, c), n.memoizedState = m.state, e = n.child) : e = dr(
      e,
      n,
      c
    ), e;
  }
  function Rm(e, n, i, l) {
    return es(), n.flags |= 256, Rt(e, n, i, l), n.child;
  }
  var Jc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Kc(e) {
    return { baseLanes: e, cachePool: _p() };
  }
  function Wc(e, n, i) {
    return e = e !== null ? e.childLanes & ~i : 0, n && (e |= Tn), e;
  }
  function jm(e, n, i) {
    var l = n.pendingProps, c = !1, m = (n.flags & 128) !== 0, C;
    if ((C = m) || (C = e !== null && e.memoizedState === null ? !1 : (wt.current & 2) !== 0), C && (c = !0, n.flags &= -129), C = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Ye) {
        if (c ? jr(n) : zr(), Ye) {
          var N = dt, R;
          if (R = N) {
            e: {
              for (R = N, N = Vn; R.nodeType !== 8; ) {
                if (!N) {
                  N = null;
                  break e;
                }
                if (R = Ln(
                  R.nextSibling
                ), R === null) {
                  N = null;
                  break e;
                }
              }
              N = R;
            }
            N !== null ? (n.memoizedState = {
              dehydrated: N,
              treeContext: ha !== null ? { id: sr, overflow: lr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, R = ln(
              18,
              null,
              null,
              0
            ), R.stateNode = N, R.return = n, n.child = R, Zt = n, dt = null, R = !0) : R = !1;
          }
          R || ga(n);
        }
        if (N = n.memoizedState, N !== null && (N = N.dehydrated, N !== null))
          return Pf(N) ? n.lanes = 32 : n.lanes = 536870912, null;
        fr(n);
      }
      return N = l.children, l = l.fallback, c ? (zr(), c = n.mode, N = Jl(
        { mode: "hidden", children: N },
        c
      ), l = da(
        l,
        c,
        i,
        null
      ), N.return = n, l.return = n, N.sibling = l, n.child = N, c = n.child, c.memoizedState = Kc(i), c.childLanes = Wc(
        e,
        C,
        i
      ), n.memoizedState = Jc, l) : (jr(n), ef(n, N));
    }
    if (R = e.memoizedState, R !== null && (N = R.dehydrated, N !== null)) {
      if (m)
        n.flags & 256 ? (jr(n), n.flags &= -257, n = tf(
          e,
          n,
          i
        )) : n.memoizedState !== null ? (zr(), n.child = e.child, n.flags |= 128, n = null) : (zr(), c = l.fallback, N = n.mode, l = Jl(
          { mode: "visible", children: l.children },
          N
        ), c = da(
          c,
          N,
          i,
          null
        ), c.flags |= 2, l.return = n, c.return = n, l.sibling = c, n.child = l, fi(
          n,
          e.child,
          null,
          i
        ), l = n.child, l.memoizedState = Kc(i), l.childLanes = Wc(
          e,
          C,
          i
        ), n.memoizedState = Jc, n = c);
      else if (jr(n), Pf(N)) {
        if (C = N.nextSibling && N.nextSibling.dataset, C) var q = C.dgst;
        C = q, l = Error(s(419)), l.stack = "", l.digest = C, ts({ value: l, source: null, stack: null }), n = tf(
          e,
          n,
          i
        );
      } else if (Dt || ns(e, n, i, !1), C = (i & e.childLanes) !== 0, Dt || C) {
        if (C = nt, C !== null && (l = i & -i, l = (l & 42) !== 0 ? 1 : Pu(l), l = (l & (C.suspendedLanes | i)) !== 0 ? 0 : l, l !== 0 && l !== R.retryLane))
          throw R.retryLane = l, ei(e, l), dn(C, e, l), wm;
        N.data === "$?" || _f(), n = tf(
          e,
          n,
          i
        );
      } else
        N.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = R.treeContext, dt = Ln(
          N.nextSibling
        ), Zt = n, Ye = !0, ma = null, Vn = !1, e !== null && (Cn[wn++] = sr, Cn[wn++] = lr, Cn[wn++] = ha, sr = e.id, lr = e.overflow, ha = n), n = ef(
          n,
          l.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (zr(), c = l.fallback, N = n.mode, R = e.child, q = R.sibling, l = ir(R, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = R.subtreeFlags & 65011712, q !== null ? c = ir(q, c) : (c = da(
      c,
      N,
      i,
      null
    ), c.flags |= 2), c.return = n, l.return = n, l.sibling = c, n.child = l, l = c, c = n.child, N = e.child.memoizedState, N === null ? N = Kc(i) : (R = N.cachePool, R !== null ? (q = Ct._currentValue, R = R.parent !== q ? { parent: q, pool: q } : R) : R = _p(), N = {
      baseLanes: N.baseLanes | i,
      cachePool: R
    }), c.memoizedState = N, c.childLanes = Wc(
      e,
      C,
      i
    ), n.memoizedState = Jc, l) : (jr(n), i = e.child, e = i.sibling, i = ir(i, {
      mode: "visible",
      children: l.children
    }), i.return = n, i.sibling = null, e !== null && (C = n.deletions, C === null ? (n.deletions = [e], n.flags |= 16) : C.push(e)), n.child = i, n.memoizedState = null, i);
  }
  function ef(e, n) {
    return n = Jl(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Jl(e, n) {
    return e = ln(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function tf(e, n, i) {
    return fi(n, e.child, null, i), e = ef(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function zm(e, n, i) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), bc(e.return, n, i);
  }
  function nf(e, n, i, l, c) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: i,
      tailMode: c
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = l, m.tail = i, m.tailMode = c);
  }
  function Lm(e, n, i) {
    var l = n.pendingProps, c = l.revealOrder, m = l.tail;
    if (Rt(e, n, l.children, i), l = wt.current, (l & 2) !== 0)
      l = l & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && zm(e, i, n);
          else if (e.tag === 19)
            zm(e, i, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      l &= 1;
    }
    switch (se(wt, l), c) {
      case "forwards":
        for (i = n.child, c = null; i !== null; )
          e = i.alternate, e !== null && Yl(e) === null && (c = i), i = i.sibling;
        i = c, i === null ? (c = n.child, n.child = null) : (c = i.sibling, i.sibling = null), nf(
          n,
          !1,
          c,
          i,
          m
        );
        break;
      case "backwards":
        for (i = null, c = n.child, n.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Yl(e) === null) {
            n.child = c;
            break;
          }
          e = c.sibling, c.sibling = i, i = c, c = e;
        }
        nf(
          n,
          !0,
          i,
          null,
          m
        );
        break;
      case "together":
        nf(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function dr(e, n, i) {
    if (e !== null && (n.dependencies = e.dependencies), Ur |= n.lanes, (i & n.childLanes) === 0)
      if (e !== null) {
        if (ns(
          e,
          n,
          i,
          !1
        ), (i & n.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && n.child !== e.child)
      throw Error(s(153));
    if (n.child !== null) {
      for (e = n.child, i = ir(e, e.pendingProps), n.child = i, i.return = n; e.sibling !== null; )
        e = e.sibling, i = i.sibling = ir(e, e.pendingProps), i.return = n;
      i.sibling = null;
    }
    return n.child;
  }
  function rf(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ml(e)));
  }
  function Qb(e, n, i) {
    switch (n.tag) {
      case 3:
        ve(n, n.stateNode.containerInfo), Nr(n, Ct, e.memoizedState.cache), es();
        break;
      case 27:
      case 5:
        at(n);
        break;
      case 4:
        ve(n, n.stateNode.containerInfo);
        break;
      case 10:
        Nr(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (jr(n), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? jm(e, n, i) : (jr(n), e = dr(
            e,
            n,
            i
          ), e !== null ? e.sibling : null);
        jr(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (l = (i & n.childLanes) !== 0, l || (ns(
          e,
          n,
          i,
          !1
        ), l = (i & n.childLanes) !== 0), c) {
          if (l)
            return Lm(
              e,
              n,
              i
            );
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), se(wt, wt.current), l) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Nm(e, n, i);
      case 24:
        Nr(n, Ct, e.memoizedState.cache);
    }
    return dr(e, n, i);
  }
  function Pm(e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Dt = !0;
      else {
        if (!rf(e, i) && (n.flags & 128) === 0)
          return Dt = !1, Qb(
            e,
            n,
            i
          );
        Dt = (e.flags & 131072) !== 0;
      }
    else
      Dt = !1, Ye && (n.flags & 1048576) !== 0 && hp(n, Dl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var l = n.elementType, c = l._init;
          if (l = c(l._payload), n.type = l, typeof l == "function")
            dc(l) ? (e = Sa(l, e), n.tag = 1, n = km(
              null,
              n,
              l,
              e,
              i
            )) : (n.tag = 0, n = Qc(
              null,
              n,
              l,
              e,
              i
            ));
          else {
            if (l != null) {
              if (c = l.$$typeof, c === x) {
                n.tag = 11, n = Am(
                  null,
                  n,
                  l,
                  e,
                  i
                );
                break e;
              } else if (c === k) {
                n.tag = 14, n = Tm(
                  null,
                  n,
                  l,
                  e,
                  i
                );
                break e;
              }
            }
            throw n = fe(l) || l, Error(s(306, n, ""));
          }
        }
        return n;
      case 0:
        return Qc(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 1:
        return l = n.type, c = Sa(
          l,
          n.pendingProps
        ), km(
          e,
          n,
          l,
          c,
          i
        );
      case 3:
        e: {
          if (ve(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          l = n.pendingProps;
          var m = n.memoizedState;
          c = m.element, Ac(e, n), us(n, l, null, i);
          var C = n.memoizedState;
          if (l = C.cache, Nr(n, Ct, l), l !== m.cache && _c(
            n,
            [Ct],
            i,
            !0
          ), os(), l = C.element, m.isDehydrated)
            if (m = {
              element: l,
              isDehydrated: !1,
              cache: C.cache
            }, n.updateQueue.baseState = m, n.memoizedState = m, n.flags & 256) {
              n = Rm(
                e,
                n,
                l,
                i
              );
              break e;
            } else if (l !== c) {
              c = xn(
                Error(s(424)),
                n
              ), ts(c), n = Rm(
                e,
                n,
                l,
                i
              );
              break e;
            } else {
              switch (e = n.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (dt = Ln(e.firstChild), Zt = n, Ye = !0, ma = null, Vn = !0, i = mm(
                n,
                null,
                l,
                i
              ), n.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
            }
          else {
            if (es(), l === c) {
              n = dr(
                e,
                n,
                i
              );
              break e;
            }
            Rt(
              e,
              n,
              l,
              i
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return Ql(e, n), e === null ? (i = Hg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = i : Ye || (i = n.type, e = n.pendingProps, l = fo(
          V.current
        ).createElement(i), l[Pt] = n, l[$t] = e, zt(l, i, e), Nt(l), n.stateNode = l) : n.memoizedState = Hg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return at(n), e === null && Ye && (l = n.stateNode = Ig(
          n.type,
          n.pendingProps,
          V.current
        ), Zt = n, Vn = !0, c = dt, Zr(n.type) ? (If = c, dt = Ln(
          l.firstChild
        )) : dt = c), Rt(
          e,
          n,
          n.pendingProps.children,
          i
        ), Ql(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Ye && ((c = l = dt) && (l = C2(
          l,
          n.type,
          n.pendingProps,
          Vn
        ), l !== null ? (n.stateNode = l, Zt = n, dt = Ln(
          l.firstChild
        ), Vn = !1, c = !0) : c = !1), c || ga(n)), at(n), c = n.type, m = n.pendingProps, C = e !== null ? e.memoizedProps : null, l = m.children, jf(c, m) ? l = null : C !== null && jf(c, C) && (n.flags |= 32), n.memoizedState !== null && (c = kc(
          e,
          n,
          qb,
          null,
          null,
          i
        ), Ms._currentValue = c), Ql(e, n), Rt(e, n, l, i), n.child;
      case 6:
        return e === null && Ye && ((e = i = dt) && (i = w2(
          i,
          n.pendingProps,
          Vn
        ), i !== null ? (n.stateNode = i, Zt = n, dt = null, e = !0) : e = !1), e || ga(n)), null;
      case 13:
        return jm(e, n, i);
      case 4:
        return ve(
          n,
          n.stateNode.containerInfo
        ), l = n.pendingProps, e === null ? n.child = fi(
          n,
          null,
          l,
          i
        ) : Rt(
          e,
          n,
          l,
          i
        ), n.child;
      case 11:
        return Am(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 7:
        return Rt(
          e,
          n,
          n.pendingProps,
          i
        ), n.child;
      case 8:
        return Rt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 12:
        return Rt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 10:
        return l = n.pendingProps, Nr(n, n.type, l.value), Rt(
          e,
          n,
          l.children,
          i
        ), n.child;
      case 9:
        return c = n.type._context, l = n.pendingProps.children, ya(n), c = It(c), l = l(c), n.flags |= 1, Rt(e, n, l, i), n.child;
      case 14:
        return Tm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 15:
        return Om(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 19:
        return Lm(e, n, i);
      case 31:
        return l = n.pendingProps, i = n.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (i = Jl(
          l,
          i
        ), i.ref = n.ref, n.child = i, i.return = n, n = i) : (i = ir(e.child, l), i.ref = n.ref, n.child = i, i.return = n, n = i), n;
      case 22:
        return Nm(e, n, i);
      case 24:
        return ya(n), l = It(Ct), e === null ? (c = Ec(), c === null && (c = nt, m = Sc(), c.pooledCache = m, m.refCount++, m !== null && (c.pooledCacheLanes |= i), c = m), n.memoizedState = {
          parent: l,
          cache: c
        }, wc(n), Nr(n, Ct, c)) : ((e.lanes & i) !== 0 && (Ac(e, n), us(n, null, null, i), os()), c = e.memoizedState, m = n.memoizedState, c.parent !== l ? (c = { parent: l, cache: l }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Nr(n, Ct, l)) : (l = m.cache, Nr(n, Ct, l), l !== c.cache && _c(
          n,
          [Ct],
          i,
          !0
        ))), Rt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(s(156, n.tag));
  }
  function hr(e) {
    e.flags |= 4;
  }
  function Im(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Vg(n)) {
      if (n = An.current, n !== null && ((Ze & 4194048) === Ze ? Yn !== null : (Ze & 62914560) !== Ze && (Ze & 536870912) === 0 || n !== Yn))
        throw ss = Cc, Sp;
      e.flags |= 8192;
    }
  }
  function Kl(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? gh() : 536870912, e.lanes |= n, mi |= n);
  }
  function gs(e, n) {
    if (!Ye)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), n = n.sibling;
          i === null ? e.tail = null : i.sibling = null;
          break;
        case "collapsed":
          i = e.tail;
          for (var l = null; i !== null; )
            i.alternate !== null && (l = i), i = i.sibling;
          l === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function ut(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, i = 0, l = 0;
    if (n)
      for (var c = e.child; c !== null; )
        i |= c.lanes | c.childLanes, l |= c.subtreeFlags & 65011712, l |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        i |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= l, e.childLanes = i, n;
  }
  function Jb(e, n, i) {
    var l = n.pendingProps;
    switch (gc(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ut(n), null;
      case 1:
        return ut(n), null;
      case 3:
        return i = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), ur(Ct), Ve(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Wi(n) ? hr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, gp())), ut(n), null;
      case 26:
        return i = n.memoizedState, e === null ? (hr(n), i !== null ? (ut(n), Im(n, i)) : (ut(n), n.flags &= -16777217)) : i ? i !== e.memoizedState ? (hr(n), ut(n), Im(n, i)) : (ut(n), n.flags &= -16777217) : (e.memoizedProps !== l && hr(n), ut(n), n.flags &= -16777217), null;
      case 27:
        ze(n), i = V.current;
        var c = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== l && hr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ut(n), null;
          }
          e = le.current, Wi(n) ? pp(n) : (e = Ig(c, l, i), n.stateNode = e, hr(n));
        }
        return ut(n), null;
      case 5:
        if (ze(n), i = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && hr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ut(n), null;
          }
          if (e = le.current, Wi(n))
            pp(n);
          else {
            switch (c = fo(
              V.current
            ), e) {
              case 1:
                e = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  i
                );
                break;
              case 2:
                e = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  i
                );
                break;
              default:
                switch (i) {
                  case "svg":
                    e = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      i
                    );
                    break;
                  case "math":
                    e = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof l.is == "string" ? c.createElement("select", { is: l.is }) : c.createElement("select"), l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                    break;
                  default:
                    e = typeof l.is == "string" ? c.createElement(i, { is: l.is }) : c.createElement(i);
                }
            }
            e[Pt] = n, e[$t] = l;
            e: for (c = n.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === n) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === n)
                  break e;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            n.stateNode = e;
            e: switch (zt(e, i, l), i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && hr(n);
          }
        }
        return ut(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== l && hr(n);
        else {
          if (typeof l != "string" && n.stateNode === null)
            throw Error(s(166));
          if (e = V.current, Wi(n)) {
            if (e = n.stateNode, i = n.memoizedProps, l = null, c = Zt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            e[Pt] = n, e = !!(e.nodeValue === i || l !== null && l.suppressHydrationWarning === !0 || Mg(e.nodeValue, i)), e || ga(n);
          } else
            e = fo(e).createTextNode(
              l
            ), e[Pt] = n, n.stateNode = e;
        }
        return ut(n), null;
      case 13:
        if (l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Wi(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[Pt] = n;
            } else
              es(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ut(n), c = !1;
          } else
            c = gp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (fr(n), n) : (fr(n), null);
        }
        if (fr(n), (n.flags & 128) !== 0)
          return n.lanes = i, n;
        if (i = l !== null, e = e !== null && e.memoizedState !== null, i) {
          l = n.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool);
          var m = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (m = l.memoizedState.cachePool.pool), m !== c && (l.flags |= 2048);
        }
        return i !== e && i && (n.child.flags |= 8192), Kl(n, n.updateQueue), ut(n), null;
      case 4:
        return Ve(), e === null && Nf(n.stateNode.containerInfo), ut(n), null;
      case 10:
        return ur(n.type), ut(n), null;
      case 19:
        if (ae(wt), c = n.memoizedState, c === null) return ut(n), null;
        if (l = (n.flags & 128) !== 0, m = c.rendering, m === null)
          if (l) gs(c, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (m = Yl(e), m !== null) {
                  for (n.flags |= 128, gs(c, !1), e = m.updateQueue, n.updateQueue = e, Kl(n, e), n.subtreeFlags = 0, e = i, i = n.child; i !== null; )
                    dp(i, e), i = i.sibling;
                  return se(
                    wt,
                    wt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && ge() > to && (n.flags |= 128, l = !0, gs(c, !1), n.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Yl(m), e !== null) {
              if (n.flags |= 128, l = !0, e = e.updateQueue, n.updateQueue = e, Kl(n, e), gs(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !Ye)
                return ut(n), null;
            } else
              2 * ge() - c.renderingStartTime > to && i !== 536870912 && (n.flags |= 128, l = !0, gs(c, !1), n.lanes = 4194304);
          c.isBackwards ? (m.sibling = n.child, n.child = m) : (e = c.last, e !== null ? e.sibling = m : n.child = m, c.last = m);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = ge(), n.sibling = null, e = wt.current, se(wt, l ? e & 1 | 2 : e & 1), n) : (ut(n), null);
      case 22:
      case 23:
        return fr(n), Dc(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (ut(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ut(n), i = n.updateQueue, i !== null && Kl(n, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== i && (n.flags |= 2048), e !== null && ae(ba), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), ur(Ct), ut(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function Kb(e, n) {
    switch (gc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return ur(Ct), Ve(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ze(n), null;
      case 13:
        if (fr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(s(340));
          es();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ae(wt), null;
      case 4:
        return Ve(), null;
      case 10:
        return ur(n.type), null;
      case 22:
      case 23:
        return fr(n), Dc(), e !== null && ae(ba), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return ur(Ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Bm(e, n) {
    switch (gc(n), n.tag) {
      case 3:
        ur(Ct), Ve();
        break;
      case 26:
      case 27:
      case 5:
        ze(n);
        break;
      case 4:
        Ve();
        break;
      case 13:
        fr(n);
        break;
      case 19:
        ae(wt);
        break;
      case 10:
        ur(n.type);
        break;
      case 22:
      case 23:
        fr(n), Dc(), e !== null && ae(ba);
        break;
      case 24:
        ur(Ct);
    }
  }
  function vs(e, n) {
    try {
      var i = n.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        i = c;
        do {
          if ((i.tag & e) === e) {
            l = void 0;
            var m = i.create, C = i.inst;
            l = m(), C.destroy = l;
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (N) {
      tt(n, n.return, N);
    }
  }
  function Lr(e, n, i) {
    try {
      var l = n.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var m = c.next;
        l = m;
        do {
          if ((l.tag & e) === e) {
            var C = l.inst, N = C.destroy;
            if (N !== void 0) {
              C.destroy = void 0, c = n;
              var R = i, q = N;
              try {
                q();
              } catch (Y) {
                tt(
                  c,
                  R,
                  Y
                );
              }
            }
          }
          l = l.next;
        } while (l !== m);
      }
    } catch (Y) {
      tt(n, n.return, Y);
    }
  }
  function Um(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var i = e.stateNode;
      try {
        Tp(n, i);
      } catch (l) {
        tt(e, e.return, l);
      }
    }
  }
  function Hm(e, n, i) {
    i.props = Sa(
      e.type,
      e.memoizedProps
    ), i.state = e.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (l) {
      tt(e, n, l);
    }
  }
  function ys(e, n) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof i == "function" ? e.refCleanup = i(l) : i.current = l;
      }
    } catch (c) {
      tt(e, n, c);
    }
  }
  function Xn(e, n) {
    var i = e.ref, l = e.refCleanup;
    if (i !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          tt(e, n, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (c) {
          tt(e, n, c);
        }
      else i.current = null;
  }
  function qm(e) {
    var n = e.type, i = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && l.focus();
          break e;
        case "img":
          i.src ? l.src = i.src : i.srcSet && (l.srcset = i.srcSet);
      }
    } catch (c) {
      tt(e, e.return, c);
    }
  }
  function af(e, n, i) {
    try {
      var l = e.stateNode;
      b2(l, e.type, i, n), l[$t] = n;
    } catch (c) {
      tt(e, e.return, c);
    }
  }
  function Fm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zr(e.type) || e.tag === 4;
  }
  function sf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Zr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function lf(e, n, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, n) : (n = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, n.appendChild(e), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = co));
    else if (l !== 4 && (l === 27 && Zr(e.type) && (i = e.stateNode, n = null), e = e.child, e !== null))
      for (lf(e, n, i), e = e.sibling; e !== null; )
        lf(e, n, i), e = e.sibling;
  }
  function Wl(e, n, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? i.insertBefore(e, n) : i.appendChild(e);
    else if (l !== 4 && (l === 27 && Zr(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (Wl(e, n, i), e = e.sibling; e !== null; )
        Wl(e, n, i), e = e.sibling;
  }
  function Zm(e) {
    var n = e.stateNode, i = e.memoizedProps;
    try {
      for (var l = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      zt(n, l, i), n[Pt] = e, n[$t] = i;
    } catch (m) {
      tt(e, e.return, m);
    }
  }
  var pr = !1, vt = !1, of = !1, Gm = typeof WeakSet == "function" ? WeakSet : Set, Mt = null;
  function Wb(e, n) {
    if (e = e.containerInfo, kf = yo, e = np(e), ic(e)) {
      if ("selectionStart" in e)
        var i = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          i = (i = e.ownerDocument) && i.defaultView || window;
          var l = i.getSelection && i.getSelection();
          if (l && l.rangeCount !== 0) {
            i = l.anchorNode;
            var c = l.anchorOffset, m = l.focusNode;
            l = l.focusOffset;
            try {
              i.nodeType, m.nodeType;
            } catch {
              i = null;
              break e;
            }
            var C = 0, N = -1, R = -1, q = 0, Y = 0, K = e, F = null;
            t: for (; ; ) {
              for (var Z; K !== i || c !== 0 && K.nodeType !== 3 || (N = C + c), K !== m || l !== 0 && K.nodeType !== 3 || (R = C + l), K.nodeType === 3 && (C += K.nodeValue.length), (Z = K.firstChild) !== null; )
                F = K, K = Z;
              for (; ; ) {
                if (K === e) break t;
                if (F === i && ++q === c && (N = C), F === m && ++Y === l && (R = C), (Z = K.nextSibling) !== null) break;
                K = F, F = K.parentNode;
              }
              K = Z;
            }
            i = N === -1 || R === -1 ? null : { start: N, end: R };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Rf = { focusedElem: e, selectionRange: i }, yo = !1, Mt = n; Mt !== null; )
      if (n = Mt, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, Mt = e;
      else
        for (; Mt !== null; ) {
          switch (n = Mt, m = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && m !== null) {
                e = void 0, i = n, c = m.memoizedProps, m = m.memoizedState, l = i.stateNode;
                try {
                  var Ae = Sa(
                    i.type,
                    c,
                    i.elementType === i.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    Ae,
                    m
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Se) {
                  tt(
                    i,
                    i.return,
                    Se
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, i = e.nodeType, i === 9)
                  Lf(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Lf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, Mt = e;
            break;
          }
          Mt = n.return;
        }
  }
  function Vm(e, n, i) {
    var l = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Pr(e, i), l & 4 && vs(5, i);
        break;
      case 1:
        if (Pr(e, i), l & 4)
          if (e = i.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (C) {
              tt(i, i.return, C);
            }
          else {
            var c = Sa(
              i.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              e.componentDidUpdate(
                c,
                n,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (C) {
              tt(
                i,
                i.return,
                C
              );
            }
          }
        l & 64 && Um(i), l & 512 && ys(i, i.return);
        break;
      case 3:
        if (Pr(e, i), l & 64 && (e = i.updateQueue, e !== null)) {
          if (n = null, i.child !== null)
            switch (i.child.tag) {
              case 27:
              case 5:
                n = i.child.stateNode;
                break;
              case 1:
                n = i.child.stateNode;
            }
          try {
            Tp(e, n);
          } catch (C) {
            tt(i, i.return, C);
          }
        }
        break;
      case 27:
        n === null && l & 4 && Zm(i);
      case 26:
      case 5:
        Pr(e, i), n === null && l & 4 && qm(i), l & 512 && ys(i, i.return);
        break;
      case 12:
        Pr(e, i);
        break;
      case 13:
        Pr(e, i), l & 4 && $m(e, i), l & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = o2.bind(
          null,
          i
        ), A2(e, i))));
        break;
      case 22:
        if (l = i.memoizedState !== null || pr, !l) {
          n = n !== null && n.memoizedState !== null || vt, c = pr;
          var m = vt;
          pr = l, (vt = n) && !m ? Ir(
            e,
            i,
            (i.subtreeFlags & 8772) !== 0
          ) : Pr(e, i), pr = c, vt = m;
        }
        break;
      case 30:
        break;
      default:
        Pr(e, i);
    }
  }
  function Ym(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Ym(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Uu(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var st = null, Kt = !1;
  function mr(e, n, i) {
    for (i = i.child; i !== null; )
      Xm(e, n, i), i = i.sibling;
  }
  function Xm(e, n, i) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(tr, i);
      } catch {
      }
    switch (i.tag) {
      case 26:
        vt || Xn(i, n), mr(
          e,
          n,
          i
        ), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        vt || Xn(i, n);
        var l = st, c = Kt;
        Zr(i.type) && (st = i.stateNode, Kt = !1), mr(
          e,
          n,
          i
        ), Ts(i.stateNode), st = l, Kt = c;
        break;
      case 5:
        vt || Xn(i, n);
      case 6:
        if (l = st, c = Kt, st = null, mr(
          e,
          n,
          i
        ), st = l, Kt = c, st !== null)
          if (Kt)
            try {
              (st.nodeType === 9 ? st.body : st.nodeName === "HTML" ? st.ownerDocument.body : st).removeChild(i.stateNode);
            } catch (m) {
              tt(
                i,
                n,
                m
              );
            }
          else
            try {
              st.removeChild(i.stateNode);
            } catch (m) {
              tt(
                i,
                n,
                m
              );
            }
        break;
      case 18:
        st !== null && (Kt ? (e = st, Lg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), zs(e)) : Lg(st, i.stateNode));
        break;
      case 4:
        l = st, c = Kt, st = i.stateNode.containerInfo, Kt = !0, mr(
          e,
          n,
          i
        ), st = l, Kt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vt || Lr(2, i, n), vt || Lr(4, i, n), mr(
          e,
          n,
          i
        );
        break;
      case 1:
        vt || (Xn(i, n), l = i.stateNode, typeof l.componentWillUnmount == "function" && Hm(
          i,
          n,
          l
        )), mr(
          e,
          n,
          i
        );
        break;
      case 21:
        mr(
          e,
          n,
          i
        );
        break;
      case 22:
        vt = (l = vt) || i.memoizedState !== null, mr(
          e,
          n,
          i
        ), vt = l;
        break;
      default:
        mr(
          e,
          n,
          i
        );
    }
  }
  function $m(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        zs(e);
      } catch (i) {
        tt(n, n.return, i);
      }
  }
  function e2(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Gm()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Gm()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function uf(e, n) {
    var i = e2(e);
    n.forEach(function(l) {
      var c = u2.bind(null, e, l);
      i.has(l) || (i.add(l), l.then(c, c));
    });
  }
  function on(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var l = 0; l < i.length; l++) {
        var c = i[l], m = e, C = n, N = C;
        e: for (; N !== null; ) {
          switch (N.tag) {
            case 27:
              if (Zr(N.type)) {
                st = N.stateNode, Kt = !1;
                break e;
              }
              break;
            case 5:
              st = N.stateNode, Kt = !1;
              break e;
            case 3:
            case 4:
              st = N.stateNode.containerInfo, Kt = !0;
              break e;
          }
          N = N.return;
        }
        if (st === null) throw Error(s(160));
        Xm(m, C, c), st = null, Kt = !1, m = c.alternate, m !== null && (m.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Qm(n, e), n = n.sibling;
  }
  var zn = null;
  function Qm(e, n) {
    var i = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        on(n, e), un(e), l & 4 && (Lr(3, e, e.return), vs(3, e), Lr(5, e, e.return));
        break;
      case 1:
        on(n, e), un(e), l & 512 && (vt || i === null || Xn(i, i.return)), l & 64 && pr && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? l : i.concat(l))));
        break;
      case 26:
        var c = zn;
        if (on(n, e), un(e), l & 512 && (vt || i === null || Xn(i, i.return)), l & 4) {
          var m = i !== null ? i.memoizedState : null;
          if (l = e.memoizedState, i === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, i = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (l) {
                    case "title":
                      m = c.getElementsByTagName("title")[0], (!m || m[qi] || m[Pt] || m.namespaceURI === "http://www.w3.org/2000/svg" || m.hasAttribute("itemprop")) && (m = c.createElement(l), c.head.insertBefore(
                        m,
                        c.querySelector("head > title")
                      )), zt(m, l, i), m[Pt] = e, Nt(m), l = m;
                      break e;
                    case "link":
                      var C = Zg(
                        "link",
                        "href",
                        c
                      ).get(l + (i.href || ""));
                      if (C) {
                        for (var N = 0; N < C.length; N++)
                          if (m = C[N], m.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && m.getAttribute("rel") === (i.rel == null ? null : i.rel) && m.getAttribute("title") === (i.title == null ? null : i.title) && m.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                            C.splice(N, 1);
                            break t;
                          }
                      }
                      m = c.createElement(l), zt(m, l, i), c.head.appendChild(m);
                      break;
                    case "meta":
                      if (C = Zg(
                        "meta",
                        "content",
                        c
                      ).get(l + (i.content || ""))) {
                        for (N = 0; N < C.length; N++)
                          if (m = C[N], m.getAttribute("content") === (i.content == null ? null : "" + i.content) && m.getAttribute("name") === (i.name == null ? null : i.name) && m.getAttribute("property") === (i.property == null ? null : i.property) && m.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && m.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                            C.splice(N, 1);
                            break t;
                          }
                      }
                      m = c.createElement(l), zt(m, l, i), c.head.appendChild(m);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  m[Pt] = e, Nt(m), l = m;
                }
                e.stateNode = l;
              } else
                Gg(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Fg(
                c,
                l,
                e.memoizedProps
              );
          else
            m !== l ? (m === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : m.count--, l === null ? Gg(
              c,
              e.type,
              e.stateNode
            ) : Fg(
              c,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && af(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        on(n, e), un(e), l & 512 && (vt || i === null || Xn(i, i.return)), i !== null && l & 4 && af(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (on(n, e), un(e), l & 512 && (vt || i === null || Xn(i, i.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Ya(c, "");
          } catch (Z) {
            tt(e, e.return, Z);
          }
        }
        l & 4 && e.stateNode != null && (c = e.memoizedProps, af(
          e,
          c,
          i !== null ? i.memoizedProps : c
        )), l & 1024 && (of = !0);
        break;
      case 6:
        if (on(n, e), un(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          l = e.memoizedProps, i = e.stateNode;
          try {
            i.nodeValue = l;
          } catch (Z) {
            tt(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (mo = null, c = zn, zn = ho(n.containerInfo), on(n, e), zn = c, un(e), l & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            zs(n.containerInfo);
          } catch (Z) {
            tt(e, e.return, Z);
          }
        of && (of = !1, Jm(e));
        break;
      case 4:
        l = zn, zn = ho(
          e.stateNode.containerInfo
        ), on(n, e), un(e), zn = l;
        break;
      case 12:
        on(n, e), un(e);
        break;
      case 13:
        on(n, e), un(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (mf = ge()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, uf(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var R = i !== null && i.memoizedState !== null, q = pr, Y = vt;
        if (pr = q || c, vt = Y || R, on(n, e), vt = Y, pr = q, un(e), l & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (i === null || R || pr || vt || xa(e)), i = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (i === null) {
                R = i = n;
                try {
                  if (m = R.stateNode, c)
                    C = m.style, typeof C.setProperty == "function" ? C.setProperty("display", "none", "important") : C.display = "none";
                  else {
                    N = R.stateNode;
                    var K = R.memoizedProps.style, F = K != null && K.hasOwnProperty("display") ? K.display : null;
                    N.style.display = F == null || typeof F == "boolean" ? "" : ("" + F).trim();
                  }
                } catch (Z) {
                  tt(R, R.return, Z);
                }
              }
            } else if (n.tag === 6) {
              if (i === null) {
                R = n;
                try {
                  R.stateNode.nodeValue = c ? "" : R.memoizedProps;
                } catch (Z) {
                  tt(R, R.return, Z);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              i === n && (i = null), n = n.return;
            }
            i === n && (i = null), n.sibling.return = n.return, n = n.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (i = l.retryQueue, i !== null && (l.retryQueue = null, uf(e, i))));
        break;
      case 19:
        on(n, e), un(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, uf(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        on(n, e), un(e);
    }
  }
  function un(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var i, l = e.return; l !== null; ) {
          if (Fm(l)) {
            i = l;
            break;
          }
          l = l.return;
        }
        if (i == null) throw Error(s(160));
        switch (i.tag) {
          case 27:
            var c = i.stateNode, m = sf(e);
            Wl(e, m, c);
            break;
          case 5:
            var C = i.stateNode;
            i.flags & 32 && (Ya(C, ""), i.flags &= -33);
            var N = sf(e);
            Wl(e, N, C);
            break;
          case 3:
          case 4:
            var R = i.stateNode.containerInfo, q = sf(e);
            lf(
              e,
              q,
              R
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (Y) {
        tt(e, e.return, Y);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Jm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Jm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Pr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Vm(e, n.alternate, n), n = n.sibling;
  }
  function xa(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Lr(4, n, n.return), xa(n);
          break;
        case 1:
          Xn(n, n.return);
          var i = n.stateNode;
          typeof i.componentWillUnmount == "function" && Hm(
            n,
            n.return,
            i
          ), xa(n);
          break;
        case 27:
          Ts(n.stateNode);
        case 26:
        case 5:
          Xn(n, n.return), xa(n);
          break;
        case 22:
          n.memoizedState === null && xa(n);
          break;
        case 30:
          xa(n);
          break;
        default:
          xa(n);
      }
      e = e.sibling;
    }
  }
  function Ir(e, n, i) {
    for (i = i && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var l = n.alternate, c = e, m = n, C = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Ir(
            c,
            m,
            i
          ), vs(4, m);
          break;
        case 1:
          if (Ir(
            c,
            m,
            i
          ), l = m, c = l.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (q) {
              tt(l, l.return, q);
            }
          if (l = m, c = l.updateQueue, c !== null) {
            var N = l.stateNode;
            try {
              var R = c.shared.hiddenCallbacks;
              if (R !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < R.length; c++)
                  Ap(R[c], N);
            } catch (q) {
              tt(l, l.return, q);
            }
          }
          i && C & 64 && Um(m), ys(m, m.return);
          break;
        case 27:
          Zm(m);
        case 26:
        case 5:
          Ir(
            c,
            m,
            i
          ), i && l === null && C & 4 && qm(m), ys(m, m.return);
          break;
        case 12:
          Ir(
            c,
            m,
            i
          );
          break;
        case 13:
          Ir(
            c,
            m,
            i
          ), i && C & 4 && $m(c, m);
          break;
        case 22:
          m.memoizedState === null && Ir(
            c,
            m,
            i
          ), ys(m, m.return);
          break;
        case 30:
          break;
        default:
          Ir(
            c,
            m,
            i
          );
      }
      n = n.sibling;
    }
  }
  function cf(e, n) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && rs(i));
  }
  function ff(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && rs(e));
  }
  function $n(e, n, i, l) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Km(
          e,
          n,
          i,
          l
        ), n = n.sibling;
  }
  function Km(e, n, i, l) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        $n(
          e,
          n,
          i,
          l
        ), c & 2048 && vs(9, n);
        break;
      case 1:
        $n(
          e,
          n,
          i,
          l
        );
        break;
      case 3:
        $n(
          e,
          n,
          i,
          l
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && rs(e)));
        break;
      case 12:
        if (c & 2048) {
          $n(
            e,
            n,
            i,
            l
          ), e = n.stateNode;
          try {
            var m = n.memoizedProps, C = m.id, N = m.onPostCommit;
            typeof N == "function" && N(
              C,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (R) {
            tt(n, n.return, R);
          }
        } else
          $n(
            e,
            n,
            i,
            l
          );
        break;
      case 13:
        $n(
          e,
          n,
          i,
          l
        );
        break;
      case 23:
        break;
      case 22:
        m = n.stateNode, C = n.alternate, n.memoizedState !== null ? m._visibility & 2 ? $n(
          e,
          n,
          i,
          l
        ) : bs(e, n) : m._visibility & 2 ? $n(
          e,
          n,
          i,
          l
        ) : (m._visibility |= 2, di(
          e,
          n,
          i,
          l,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && cf(C, n);
        break;
      case 24:
        $n(
          e,
          n,
          i,
          l
        ), c & 2048 && ff(n.alternate, n);
        break;
      default:
        $n(
          e,
          n,
          i,
          l
        );
    }
  }
  function di(e, n, i, l, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var m = e, C = n, N = i, R = l, q = C.flags;
      switch (C.tag) {
        case 0:
        case 11:
        case 15:
          di(
            m,
            C,
            N,
            R,
            c
          ), vs(8, C);
          break;
        case 23:
          break;
        case 22:
          var Y = C.stateNode;
          C.memoizedState !== null ? Y._visibility & 2 ? di(
            m,
            C,
            N,
            R,
            c
          ) : bs(
            m,
            C
          ) : (Y._visibility |= 2, di(
            m,
            C,
            N,
            R,
            c
          )), c && q & 2048 && cf(
            C.alternate,
            C
          );
          break;
        case 24:
          di(
            m,
            C,
            N,
            R,
            c
          ), c && q & 2048 && ff(C.alternate, C);
          break;
        default:
          di(
            m,
            C,
            N,
            R,
            c
          );
      }
      n = n.sibling;
    }
  }
  function bs(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var i = e, l = n, c = l.flags;
        switch (l.tag) {
          case 22:
            bs(i, l), c & 2048 && cf(
              l.alternate,
              l
            );
            break;
          case 24:
            bs(i, l), c & 2048 && ff(l.alternate, l);
            break;
          default:
            bs(i, l);
        }
        n = n.sibling;
      }
  }
  var _s = 8192;
  function hi(e) {
    if (e.subtreeFlags & _s)
      for (e = e.child; e !== null; )
        Wm(e), e = e.sibling;
  }
  function Wm(e) {
    switch (e.tag) {
      case 26:
        hi(e), e.flags & _s && e.memoizedState !== null && B2(
          zn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        hi(e);
        break;
      case 3:
      case 4:
        var n = zn;
        zn = ho(e.stateNode.containerInfo), hi(e), zn = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = _s, _s = 16777216, hi(e), _s = n) : hi(e));
        break;
      default:
        hi(e);
    }
  }
  function eg(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function Ss(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var l = n[i];
          Mt = l, ng(
            l,
            e
          );
        }
      eg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        tg(e), e = e.sibling;
  }
  function tg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ss(e), e.flags & 2048 && Lr(9, e, e.return);
        break;
      case 3:
        Ss(e);
        break;
      case 12:
        Ss(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, eo(e)) : Ss(e);
        break;
      default:
        Ss(e);
    }
  }
  function eo(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var l = n[i];
          Mt = l, ng(
            l,
            e
          );
        }
      eg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Lr(8, n, n.return), eo(n);
          break;
        case 22:
          i = n.stateNode, i._visibility & 2 && (i._visibility &= -3, eo(n));
          break;
        default:
          eo(n);
      }
      e = e.sibling;
    }
  }
  function ng(e, n) {
    for (; Mt !== null; ) {
      var i = Mt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Lr(8, i, n);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var l = i.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          rs(i.memoizedState.cache);
      }
      if (l = i.child, l !== null) l.return = i, Mt = l;
      else
        e: for (i = e; Mt !== null; ) {
          l = Mt;
          var c = l.sibling, m = l.return;
          if (Ym(l), l === i) {
            Mt = null;
            break e;
          }
          if (c !== null) {
            c.return = m, Mt = c;
            break e;
          }
          Mt = m;
        }
    }
  }
  var t2 = {
    getCacheForType: function(e) {
      var n = It(Ct), i = n.data.get(e);
      return i === void 0 && (i = e(), n.data.set(e, i)), i;
    }
  }, n2 = typeof WeakMap == "function" ? WeakMap : Map, $e = 0, nt = null, Ue = null, Ze = 0, Qe = 0, cn = null, Br = !1, pi = !1, df = !1, gr = 0, ht = 0, Ur = 0, Ea = 0, hf = 0, Tn = 0, mi = 0, xs = null, Wt = null, pf = !1, mf = 0, to = 1 / 0, no = null, Hr = null, jt = 0, qr = null, gi = null, vi = 0, gf = 0, vf = null, rg = null, Es = 0, yf = null;
  function fn() {
    if (($e & 2) !== 0 && Ze !== 0)
      return Ze & -Ze;
    if (H.T !== null) {
      var e = ai;
      return e !== 0 ? e : wf();
    }
    return bh();
  }
  function ag() {
    Tn === 0 && (Tn = (Ze & 536870912) === 0 || Ye ? Ba() : 536870912);
    var e = An.current;
    return e !== null && (e.flags |= 32), Tn;
  }
  function dn(e, n, i) {
    (e === nt && (Qe === 2 || Qe === 9) || e.cancelPendingCommit !== null) && (yi(e, 0), Fr(
      e,
      Ze,
      Tn,
      !1
    )), Hi(e, i), (($e & 2) === 0 || e !== nt) && (e === nt && (($e & 2) === 0 && (Ea |= i), ht === 4 && Fr(
      e,
      Ze,
      Tn,
      !1
    )), Qn(e));
  }
  function ig(e, n, i) {
    if (($e & 6) !== 0) throw Error(s(327));
    var l = !i && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Xt(e, n), c = l ? i2(e, n) : Sf(e, n, !0), m = l;
    do {
      if (c === 0) {
        pi && !l && Fr(e, n, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, m && !r2(i)) {
          c = Sf(e, n, !1), m = !1;
          continue;
        }
        if (c === 2) {
          if (m = n, e.errorRecoveryDisabledLanes & m)
            var C = 0;
          else
            C = e.pendingLanes & -536870913, C = C !== 0 ? C : C & 536870912 ? 536870912 : 0;
          if (C !== 0) {
            n = C;
            e: {
              var N = e;
              c = xs;
              var R = N.current.memoizedState.isDehydrated;
              if (R && (yi(N, C).flags |= 256), C = Sf(
                N,
                C,
                !1
              ), C !== 2) {
                if (df && !R) {
                  N.errorRecoveryDisabledLanes |= m, Ea |= m, c = 4;
                  break e;
                }
                m = Wt, Wt = c, m !== null && (Wt === null ? Wt = m : Wt.push.apply(
                  Wt,
                  m
                ));
              }
              c = C;
            }
            if (m = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          yi(e, 0), Fr(e, n, 0, !0);
          break;
        }
        e: {
          switch (l = e, m = c, m) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Fr(
                l,
                n,
                Tn,
                !Br
              );
              break e;
            case 2:
              Wt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((n & 62914560) === n && (c = mf + 300 - ge(), 10 < c)) {
            if (Fr(
              l,
              n,
              Tn,
              !Br
            ), Ft(l, 0, !0) !== 0) break e;
            l.timeoutHandle = jg(
              sg.bind(
                null,
                l,
                i,
                Wt,
                no,
                pf,
                n,
                Tn,
                Ea,
                mi,
                Br,
                m,
                2,
                -0,
                0
              ),
              c
            );
            break e;
          }
          sg(
            l,
            i,
            Wt,
            no,
            pf,
            n,
            Tn,
            Ea,
            mi,
            Br,
            m,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Qn(e);
  }
  function sg(e, n, i, l, c, m, C, N, R, q, Y, K, F, Z) {
    if (e.timeoutHandle = -1, K = n.subtreeFlags, (K & 8192 || (K & 16785408) === 16785408) && (Ds = { stylesheets: null, count: 0, unsuspend: I2 }, Wm(n), K = U2(), K !== null)) {
      e.cancelPendingCommit = K(
        hg.bind(
          null,
          e,
          n,
          m,
          i,
          l,
          c,
          C,
          N,
          R,
          Y,
          1,
          F,
          Z
        )
      ), Fr(e, m, C, !q);
      return;
    }
    hg(
      e,
      n,
      m,
      i,
      l,
      c,
      C,
      N,
      R
    );
  }
  function r2(e) {
    for (var n = e; ; ) {
      var i = n.tag;
      if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var l = 0; l < i.length; l++) {
          var c = i[l], m = c.getSnapshot;
          c = c.value;
          try {
            if (!sn(m(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (i = n.child, n.subtreeFlags & 16384 && i !== null)
        i.return = n, n = i;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Fr(e, n, i, l) {
    n &= ~hf, n &= ~Ea, e.suspendedLanes |= n, e.pingedLanes &= ~n, l && (e.warmLanes |= n), l = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var m = 31 - qt(c), C = 1 << m;
      l[m] = -1, c &= ~C;
    }
    i !== 0 && vh(e, i, n);
  }
  function ro() {
    return ($e & 6) === 0 ? (Cs(0), !1) : !0;
  }
  function bf() {
    if (Ue !== null) {
      if (Qe === 0)
        var e = Ue.return;
      else
        e = Ue, or = va = null, zc(e), ci = null, ps = 0, e = Ue;
      for (; e !== null; )
        Bm(e.alternate, e), e = e.return;
      Ue = null;
    }
  }
  function yi(e, n) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, S2(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), bf(), nt = e, Ue = i = ir(e.current, null), Ze = n, Qe = 0, cn = null, Br = !1, pi = Xt(e, n), df = !1, mi = Tn = hf = Ea = Ur = ht = 0, Wt = xs = null, pf = !1, (n & 8) !== 0 && (n |= n & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= n; 0 < l; ) {
        var c = 31 - qt(l), m = 1 << c;
        n |= e[c], l &= ~m;
      }
    return gr = n, wl(), i;
  }
  function lg(e, n) {
    Pe = null, H.H = Zl, n === is || n === jl ? (n = Cp(), Qe = 3) : n === Sp ? (n = Cp(), Qe = 4) : Qe = n === wm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, cn = n, Ue === null && (ht = 1, $l(
      e,
      xn(n, e.current)
    ));
  }
  function og() {
    var e = H.H;
    return H.H = Zl, e === null ? Zl : e;
  }
  function ug() {
    var e = H.A;
    return H.A = t2, e;
  }
  function _f() {
    ht = 4, Br || (Ze & 4194048) !== Ze && An.current !== null || (pi = !0), (Ur & 134217727) === 0 && (Ea & 134217727) === 0 || nt === null || Fr(
      nt,
      Ze,
      Tn,
      !1
    );
  }
  function Sf(e, n, i) {
    var l = $e;
    $e |= 2;
    var c = og(), m = ug();
    (nt !== e || Ze !== n) && (no = null, yi(e, n)), n = !1;
    var C = ht;
    e: do
      try {
        if (Qe !== 0 && Ue !== null) {
          var N = Ue, R = cn;
          switch (Qe) {
            case 8:
              bf(), C = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              An.current === null && (n = !0);
              var q = Qe;
              if (Qe = 0, cn = null, bi(e, N, R, q), i && pi) {
                C = 0;
                break e;
              }
              break;
            default:
              q = Qe, Qe = 0, cn = null, bi(e, N, R, q);
          }
        }
        a2(), C = ht;
        break;
      } catch (Y) {
        lg(e, Y);
      }
    while (!0);
    return n && e.shellSuspendCounter++, or = va = null, $e = l, H.H = c, H.A = m, Ue === null && (nt = null, Ze = 0, wl()), C;
  }
  function a2() {
    for (; Ue !== null; ) cg(Ue);
  }
  function i2(e, n) {
    var i = $e;
    $e |= 2;
    var l = og(), c = ug();
    nt !== e || Ze !== n ? (no = null, to = ge() + 500, yi(e, n)) : pi = Xt(
      e,
      n
    );
    e: do
      try {
        if (Qe !== 0 && Ue !== null) {
          n = Ue;
          var m = cn;
          t: switch (Qe) {
            case 1:
              Qe = 0, cn = null, bi(e, n, m, 1);
              break;
            case 2:
            case 9:
              if (xp(m)) {
                Qe = 0, cn = null, fg(n);
                break;
              }
              n = function() {
                Qe !== 2 && Qe !== 9 || nt !== e || (Qe = 7), Qn(e);
              }, m.then(n, n);
              break e;
            case 3:
              Qe = 7;
              break e;
            case 4:
              Qe = 5;
              break e;
            case 7:
              xp(m) ? (Qe = 0, cn = null, fg(n)) : (Qe = 0, cn = null, bi(e, n, m, 7));
              break;
            case 5:
              var C = null;
              switch (Ue.tag) {
                case 26:
                  C = Ue.memoizedState;
                case 5:
                case 27:
                  var N = Ue;
                  if (!C || Vg(C)) {
                    Qe = 0, cn = null;
                    var R = N.sibling;
                    if (R !== null) Ue = R;
                    else {
                      var q = N.return;
                      q !== null ? (Ue = q, ao(q)) : Ue = null;
                    }
                    break t;
                  }
              }
              Qe = 0, cn = null, bi(e, n, m, 5);
              break;
            case 6:
              Qe = 0, cn = null, bi(e, n, m, 6);
              break;
            case 8:
              bf(), ht = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        s2();
        break;
      } catch (Y) {
        lg(e, Y);
      }
    while (!0);
    return or = va = null, H.H = l, H.A = c, $e = i, Ue !== null ? 0 : (nt = null, Ze = 0, wl(), ht);
  }
  function s2() {
    for (; Ue !== null && !ye(); )
      cg(Ue);
  }
  function cg(e) {
    var n = Pm(e.alternate, e, gr);
    e.memoizedProps = e.pendingProps, n === null ? ao(e) : Ue = n;
  }
  function fg(e) {
    var n = e, i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Mm(
          i,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ze
        );
        break;
      case 11:
        n = Mm(
          i,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ze
        );
        break;
      case 5:
        zc(n);
      default:
        Bm(i, n), n = Ue = dp(n, gr), n = Pm(i, n, gr);
    }
    e.memoizedProps = e.pendingProps, n === null ? ao(e) : Ue = n;
  }
  function bi(e, n, i, l) {
    or = va = null, zc(n), ci = null, ps = 0;
    var c = n.return;
    try {
      if ($b(
        e,
        c,
        n,
        i,
        Ze
      )) {
        ht = 1, $l(
          e,
          xn(i, e.current)
        ), Ue = null;
        return;
      }
    } catch (m) {
      if (c !== null) throw Ue = c, m;
      ht = 1, $l(
        e,
        xn(i, e.current)
      ), Ue = null;
      return;
    }
    n.flags & 32768 ? (Ye || l === 1 ? e = !0 : pi || (Ze & 536870912) !== 0 ? e = !1 : (Br = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = An.current, l !== null && l.tag === 13 && (l.flags |= 16384))), dg(n, e)) : ao(n);
  }
  function ao(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        dg(
          n,
          Br
        );
        return;
      }
      e = n.return;
      var i = Jb(
        n.alternate,
        n,
        gr
      );
      if (i !== null) {
        Ue = i;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ue = n;
        return;
      }
      Ue = n = e;
    } while (n !== null);
    ht === 0 && (ht = 5);
  }
  function dg(e, n) {
    do {
      var i = Kb(e.alternate, e);
      if (i !== null) {
        i.flags &= 32767, Ue = i;
        return;
      }
      if (i = e.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !n && (e = e.sibling, e !== null)) {
        Ue = e;
        return;
      }
      Ue = e = i;
    } while (e !== null);
    ht = 6, Ue = null;
  }
  function hg(e, n, i, l, c, m, C, N, R) {
    e.cancelPendingCommit = null;
    do
      io();
    while (jt !== 0);
    if (($e & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (m = n.lanes | n.childLanes, m |= cc, I1(
        e,
        i,
        m,
        C,
        N,
        R
      ), e === nt && (Ue = nt = null, Ze = 0), gi = n, qr = e, vi = i, gf = m, vf = c, rg = l, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, c2(he, function() {
        return yg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
        l = H.T, H.T = null, c = te.p, te.p = 2, C = $e, $e |= 4;
        try {
          Wb(e, n, i);
        } finally {
          $e = C, te.p = c, H.T = l;
        }
      }
      jt = 1, pg(), mg(), gg();
    }
  }
  function pg() {
    if (jt === 1) {
      jt = 0;
      var e = qr, n = gi, i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        i = H.T, H.T = null;
        var l = te.p;
        te.p = 2;
        var c = $e;
        $e |= 4;
        try {
          Qm(n, e);
          var m = Rf, C = np(e.containerInfo), N = m.focusedElem, R = m.selectionRange;
          if (C !== N && N && N.ownerDocument && tp(
            N.ownerDocument.documentElement,
            N
          )) {
            if (R !== null && ic(N)) {
              var q = R.start, Y = R.end;
              if (Y === void 0 && (Y = q), "selectionStart" in N)
                N.selectionStart = q, N.selectionEnd = Math.min(
                  Y,
                  N.value.length
                );
              else {
                var K = N.ownerDocument || document, F = K && K.defaultView || window;
                if (F.getSelection) {
                  var Z = F.getSelection(), Ae = N.textContent.length, Se = Math.min(R.start, Ae), We = R.end === void 0 ? Se : Math.min(R.end, Ae);
                  !Z.extend && Se > We && (C = We, We = Se, Se = C);
                  var L = ep(
                    N,
                    Se
                  ), z = ep(
                    N,
                    We
                  );
                  if (L && z && (Z.rangeCount !== 1 || Z.anchorNode !== L.node || Z.anchorOffset !== L.offset || Z.focusNode !== z.node || Z.focusOffset !== z.offset)) {
                    var B = K.createRange();
                    B.setStart(L.node, L.offset), Z.removeAllRanges(), Se > We ? (Z.addRange(B), Z.extend(z.node, z.offset)) : (B.setEnd(z.node, z.offset), Z.addRange(B));
                  }
                }
              }
            }
            for (K = [], Z = N; Z = Z.parentNode; )
              Z.nodeType === 1 && K.push({
                element: Z,
                left: Z.scrollLeft,
                top: Z.scrollTop
              });
            for (typeof N.focus == "function" && N.focus(), N = 0; N < K.length; N++) {
              var $ = K[N];
              $.element.scrollLeft = $.left, $.element.scrollTop = $.top;
            }
          }
          yo = !!kf, Rf = kf = null;
        } finally {
          $e = c, te.p = l, H.T = i;
        }
      }
      e.current = n, jt = 2;
    }
  }
  function mg() {
    if (jt === 2) {
      jt = 0;
      var e = qr, n = gi, i = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || i) {
        i = H.T, H.T = null;
        var l = te.p;
        te.p = 2;
        var c = $e;
        $e |= 4;
        try {
          Vm(e, n.alternate, n);
        } finally {
          $e = c, te.p = l, H.T = i;
        }
      }
      jt = 3;
    }
  }
  function gg() {
    if (jt === 4 || jt === 3) {
      jt = 0, Ce();
      var e = qr, n = gi, i = vi, l = rg;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? jt = 5 : (jt = 0, gi = qr = null, vg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Hr = null), Iu(i), n = n.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
        try {
          mt.onCommitFiberRoot(
            tr,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = H.T, c = te.p, te.p = 2, H.T = null;
        try {
          for (var m = e.onRecoverableError, C = 0; C < l.length; C++) {
            var N = l[C];
            m(N.value, {
              componentStack: N.stack
            });
          }
        } finally {
          H.T = n, te.p = c;
        }
      }
      (vi & 3) !== 0 && io(), Qn(e), c = e.pendingLanes, (i & 4194090) !== 0 && (c & 42) !== 0 ? e === yf ? Es++ : (Es = 0, yf = e) : Es = 0, Cs(0);
    }
  }
  function vg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, rs(n)));
  }
  function io(e) {
    return pg(), mg(), gg(), yg();
  }
  function yg() {
    if (jt !== 5) return !1;
    var e = qr, n = gf;
    gf = 0;
    var i = Iu(vi), l = H.T, c = te.p;
    try {
      te.p = 32 > i ? 32 : i, H.T = null, i = vf, vf = null;
      var m = qr, C = vi;
      if (jt = 0, gi = qr = null, vi = 0, ($e & 6) !== 0) throw Error(s(331));
      var N = $e;
      if ($e |= 4, tg(m.current), Km(
        m,
        m.current,
        C,
        i
      ), $e = N, Cs(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(tr, m);
        } catch {
        }
      return !0;
    } finally {
      te.p = c, H.T = l, vg(e, n);
    }
  }
  function bg(e, n, i) {
    n = xn(i, n), n = $c(e.stateNode, n, 2), e = kr(e, n, 2), e !== null && (Hi(e, 2), Qn(e));
  }
  function tt(e, n, i) {
    if (e.tag === 3)
      bg(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          bg(
            n,
            e,
            i
          );
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Hr === null || !Hr.has(l))) {
            e = xn(i, e), i = Em(2), l = kr(n, i, 2), l !== null && (Cm(
              i,
              l,
              n,
              e
            ), Hi(l, 2), Qn(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function xf(e, n, i) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new n2();
      var c = /* @__PURE__ */ new Set();
      l.set(n, c);
    } else
      c = l.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(n, c));
    c.has(i) || (df = !0, c.add(i), e = l2.bind(null, e, n, i), n.then(e, e));
  }
  function l2(e, n, i) {
    var l = e.pingCache;
    l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, nt === e && (Ze & i) === i && (ht === 4 || ht === 3 && (Ze & 62914560) === Ze && 300 > ge() - mf ? ($e & 2) === 0 && yi(e, 0) : hf |= i, mi === Ze && (mi = 0)), Qn(e);
  }
  function _g(e, n) {
    n === 0 && (n = gh()), e = ei(e, n), e !== null && (Hi(e, n), Qn(e));
  }
  function o2(e) {
    var n = e.memoizedState, i = 0;
    n !== null && (i = n.retryLane), _g(e, i);
  }
  function u2(e, n) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, c = e.memoizedState;
        c !== null && (i = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(n), _g(e, i);
  }
  function c2(e, n) {
    return re(e, n);
  }
  var so = null, _i = null, Ef = !1, lo = !1, Cf = !1, Ca = 0;
  function Qn(e) {
    e !== _i && e.next === null && (_i === null ? so = _i = e : _i = _i.next = e), lo = !0, Ef || (Ef = !0, d2());
  }
  function Cs(e, n) {
    if (!Cf && lo) {
      Cf = !0;
      do
        for (var i = !1, l = so; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var m = 0;
            else {
              var C = l.suspendedLanes, N = l.pingedLanes;
              m = (1 << 31 - qt(42 | e) + 1) - 1, m &= c & ~(C & ~N), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
            }
            m !== 0 && (i = !0, Cg(l, m));
          } else
            m = Ze, m = Ft(
              l,
              l === nt ? m : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (m & 3) === 0 || Xt(l, m) || (i = !0, Cg(l, m));
          l = l.next;
        }
      while (i);
      Cf = !1;
    }
  }
  function f2() {
    Sg();
  }
  function Sg() {
    lo = Ef = !1;
    var e = 0;
    Ca !== 0 && (_2() && (e = Ca), Ca = 0);
    for (var n = ge(), i = null, l = so; l !== null; ) {
      var c = l.next, m = xg(l, n);
      m === 0 ? (l.next = null, i === null ? so = c : i.next = c, c === null && (_i = i)) : (i = l, (e !== 0 || (m & 3) !== 0) && (lo = !0)), l = c;
    }
    Cs(e);
  }
  function xg(e, n) {
    for (var i = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, m = e.pendingLanes & -62914561; 0 < m; ) {
      var C = 31 - qt(m), N = 1 << C, R = c[C];
      R === -1 ? ((N & i) === 0 || (N & l) !== 0) && (c[C] = hl(N, n)) : R <= n && (e.expiredLanes |= N), m &= ~N;
    }
    if (n = nt, i = Ze, i = Ft(
      e,
      e === n ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, i === 0 || e === n && (Qe === 2 || Qe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && ne(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || Xt(e, i)) {
      if (n = i & -i, n === e.callbackPriority) return n;
      switch (l !== null && ne(l), Iu(i)) {
        case 2:
        case 8:
          i = de;
          break;
        case 32:
          i = he;
          break;
        case 268435456:
          i = Re;
          break;
        default:
          i = he;
      }
      return l = Eg.bind(null, e), i = re(i, l), e.callbackPriority = n, e.callbackNode = i, n;
    }
    return l !== null && l !== null && ne(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Eg(e, n) {
    if (jt !== 0 && jt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (io() && e.callbackNode !== i)
      return null;
    var l = Ze;
    return l = Ft(
      e,
      e === nt ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (ig(e, l, n), xg(e, ge()), e.callbackNode != null && e.callbackNode === i ? Eg.bind(null, e) : null);
  }
  function Cg(e, n) {
    if (io()) return null;
    ig(e, n, !0);
  }
  function d2() {
    x2(function() {
      ($e & 6) !== 0 ? re(
        Xe,
        f2
      ) : Sg();
    });
  }
  function wf() {
    return Ca === 0 && (Ca = Ba()), Ca;
  }
  function wg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yl("" + e);
  }
  function Ag(e, n) {
    var i = n.ownerDocument.createElement("input");
    return i.name = n.name, i.value = n.value, e.id && i.setAttribute("form", e.id), n.parentNode.insertBefore(i, n), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function h2(e, n, i, l, c) {
    if (n === "submit" && i && i.stateNode === c) {
      var m = wg(
        (c[$t] || null).action
      ), C = l.submitter;
      C && (n = (n = C[$t] || null) ? wg(n.formAction) : C.getAttribute("formAction"), n !== null && (m = n, C = null));
      var N = new xl(
        "action",
        "action",
        null,
        l,
        c
      );
      e.push({
        event: N,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Ca !== 0) {
                  var R = C ? Ag(c, C) : new FormData(c);
                  Zc(
                    i,
                    {
                      pending: !0,
                      data: R,
                      method: c.method,
                      action: m
                    },
                    null,
                    R
                  );
                }
              } else
                typeof m == "function" && (N.preventDefault(), R = C ? Ag(c, C) : new FormData(c), Zc(
                  i,
                  {
                    pending: !0,
                    data: R,
                    method: c.method,
                    action: m
                  },
                  m,
                  R
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var Af = 0; Af < uc.length; Af++) {
    var Tf = uc[Af], p2 = Tf.toLowerCase(), m2 = Tf[0].toUpperCase() + Tf.slice(1);
    jn(
      p2,
      "on" + m2
    );
  }
  jn(ip, "onAnimationEnd"), jn(sp, "onAnimationIteration"), jn(lp, "onAnimationStart"), jn("dblclick", "onDoubleClick"), jn("focusin", "onFocus"), jn("focusout", "onBlur"), jn(kb, "onTransitionRun"), jn(Rb, "onTransitionStart"), jn(jb, "onTransitionCancel"), jn(op, "onTransitionEnd"), Za("onMouseEnter", ["mouseout", "mouseover"]), Za("onMouseLeave", ["mouseout", "mouseover"]), Za("onPointerEnter", ["pointerout", "pointerover"]), Za("onPointerLeave", ["pointerout", "pointerover"]), oa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), oa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), oa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), oa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), oa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), oa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ws = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), g2 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ws)
  );
  function Tg(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var l = e[i], c = l.event;
      l = l.listeners;
      e: {
        var m = void 0;
        if (n)
          for (var C = l.length - 1; 0 <= C; C--) {
            var N = l[C], R = N.instance, q = N.currentTarget;
            if (N = N.listener, R !== m && c.isPropagationStopped())
              break e;
            m = N, c.currentTarget = q;
            try {
              m(c);
            } catch (Y) {
              Xl(Y);
            }
            c.currentTarget = null, m = R;
          }
        else
          for (C = 0; C < l.length; C++) {
            if (N = l[C], R = N.instance, q = N.currentTarget, N = N.listener, R !== m && c.isPropagationStopped())
              break e;
            m = N, c.currentTarget = q;
            try {
              m(c);
            } catch (Y) {
              Xl(Y);
            }
            c.currentTarget = null, m = R;
          }
      }
    }
  }
  function He(e, n) {
    var i = n[Bu];
    i === void 0 && (i = n[Bu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    i.has(l) || (Og(n, e, 2, !1), i.add(l));
  }
  function Of(e, n, i) {
    var l = 0;
    n && (l |= 4), Og(
      i,
      e,
      l,
      n
    );
  }
  var oo = "_reactListening" + Math.random().toString(36).slice(2);
  function Nf(e) {
    if (!e[oo]) {
      e[oo] = !0, Sh.forEach(function(i) {
        i !== "selectionchange" && (g2.has(i) || Of(i, !1, e), Of(i, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[oo] || (n[oo] = !0, Of("selectionchange", !1, n));
    }
  }
  function Og(e, n, i, l) {
    switch (Kg(n)) {
      case 2:
        var c = F2;
        break;
      case 8:
        c = Z2;
        break;
      default:
        c = Ff;
    }
    i = c.bind(
      null,
      n,
      i,
      e
    ), c = void 0, !Qu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), l ? c !== void 0 ? e.addEventListener(n, i, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, i, !0) : c !== void 0 ? e.addEventListener(n, i, {
      passive: c
    }) : e.addEventListener(n, i, !1);
  }
  function Df(e, n, i, l, c) {
    var m = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var C = l.tag;
        if (C === 3 || C === 4) {
          var N = l.stateNode.containerInfo;
          if (N === c) break;
          if (C === 4)
            for (C = l.return; C !== null; ) {
              var R = C.tag;
              if ((R === 3 || R === 4) && C.stateNode.containerInfo === c)
                return;
              C = C.return;
            }
          for (; N !== null; ) {
            if (C = Ha(N), C === null) return;
            if (R = C.tag, R === 5 || R === 6 || R === 26 || R === 27) {
              l = m = C;
              continue e;
            }
            N = N.parentNode;
          }
        }
        l = l.return;
      }
    zh(function() {
      var q = m, Y = Xu(i), K = [];
      e: {
        var F = up.get(e);
        if (F !== void 0) {
          var Z = xl, Ae = e;
          switch (e) {
            case "keypress":
              if (_l(i) === 0) break e;
            case "keydown":
            case "keyup":
              Z = cb;
              break;
            case "focusin":
              Ae = "focus", Z = ec;
              break;
            case "focusout":
              Ae = "blur", Z = ec;
              break;
            case "beforeblur":
            case "afterblur":
              Z = ec;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Z = Ih;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = K1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = hb;
              break;
            case ip:
            case sp:
            case lp:
              Z = tb;
              break;
            case op:
              Z = mb;
              break;
            case "scroll":
            case "scrollend":
              Z = Q1;
              break;
            case "wheel":
              Z = vb;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = rb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = Uh;
              break;
            case "toggle":
            case "beforetoggle":
              Z = bb;
          }
          var Se = (n & 4) !== 0, We = !Se && (e === "scroll" || e === "scrollend"), L = Se ? F !== null ? F + "Capture" : null : F;
          Se = [];
          for (var z = q, B; z !== null; ) {
            var $ = z;
            if (B = $.stateNode, $ = $.tag, $ !== 5 && $ !== 26 && $ !== 27 || B === null || L === null || ($ = Zi(z, L), $ != null && Se.push(
              As(z, $, B)
            )), We) break;
            z = z.return;
          }
          0 < Se.length && (F = new Z(
            F,
            Ae,
            null,
            i,
            Y
          ), K.push({ event: F, listeners: Se }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (F = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", F && i !== Yu && (Ae = i.relatedTarget || i.fromElement) && (Ha(Ae) || Ae[Ua]))
            break e;
          if ((Z || F) && (F = Y.window === Y ? Y : (F = Y.ownerDocument) ? F.defaultView || F.parentWindow : window, Z ? (Ae = i.relatedTarget || i.toElement, Z = q, Ae = Ae ? Ha(Ae) : null, Ae !== null && (We = u(Ae), Se = Ae.tag, Ae !== We || Se !== 5 && Se !== 27 && Se !== 6) && (Ae = null)) : (Z = null, Ae = q), Z !== Ae)) {
            if (Se = Ih, $ = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (Se = Uh, $ = "onPointerLeave", L = "onPointerEnter", z = "pointer"), We = Z == null ? F : Fi(Z), B = Ae == null ? F : Fi(Ae), F = new Se(
              $,
              z + "leave",
              Z,
              i,
              Y
            ), F.target = We, F.relatedTarget = B, $ = null, Ha(Y) === q && (Se = new Se(
              L,
              z + "enter",
              Ae,
              i,
              Y
            ), Se.target = B, Se.relatedTarget = We, $ = Se), We = $, Z && Ae)
              t: {
                for (Se = Z, L = Ae, z = 0, B = Se; B; B = Si(B))
                  z++;
                for (B = 0, $ = L; $; $ = Si($))
                  B++;
                for (; 0 < z - B; )
                  Se = Si(Se), z--;
                for (; 0 < B - z; )
                  L = Si(L), B--;
                for (; z--; ) {
                  if (Se === L || L !== null && Se === L.alternate)
                    break t;
                  Se = Si(Se), L = Si(L);
                }
                Se = null;
              }
            else Se = null;
            Z !== null && Ng(
              K,
              F,
              Z,
              Se,
              !1
            ), Ae !== null && We !== null && Ng(
              K,
              We,
              Ae,
              Se,
              !0
            );
          }
        }
        e: {
          if (F = q ? Fi(q) : window, Z = F.nodeName && F.nodeName.toLowerCase(), Z === "select" || Z === "input" && F.type === "file")
            var ce = Xh;
          else if (Vh(F))
            if ($h)
              ce = Nb;
            else {
              ce = Tb;
              var Be = Ab;
            }
          else
            Z = F.nodeName, !Z || Z.toLowerCase() !== "input" || F.type !== "checkbox" && F.type !== "radio" ? q && Vu(q.elementType) && (ce = Xh) : ce = Ob;
          if (ce && (ce = ce(e, q))) {
            Yh(
              K,
              ce,
              i,
              Y
            );
            break e;
          }
          Be && Be(e, F, q), e === "focusout" && q && F.type === "number" && q.memoizedProps.value != null && Gu(F, "number", F.value);
        }
        switch (Be = q ? Fi(q) : window, e) {
          case "focusin":
            (Vh(Be) || Be.contentEditable === "true") && (Ja = Be, sc = q, Ki = null);
            break;
          case "focusout":
            Ki = sc = Ja = null;
            break;
          case "mousedown":
            lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lc = !1, rp(K, i, Y);
            break;
          case "selectionchange":
            if (Mb) break;
          case "keydown":
          case "keyup":
            rp(K, i, Y);
        }
        var pe;
        if (nc)
          e: {
            switch (e) {
              case "compositionstart":
                var xe = "onCompositionStart";
                break e;
              case "compositionend":
                xe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                xe = "onCompositionUpdate";
                break e;
            }
            xe = void 0;
          }
        else
          Qa ? Zh(e, i) && (xe = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (xe = "onCompositionStart");
        xe && (Hh && i.locale !== "ko" && (Qa || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && Qa && (pe = Lh()) : (Or = Y, Ju = "value" in Or ? Or.value : Or.textContent, Qa = !0)), Be = uo(q, xe), 0 < Be.length && (xe = new Bh(
          xe,
          e,
          null,
          i,
          Y
        ), K.push({ event: xe, listeners: Be }), pe ? xe.data = pe : (pe = Gh(i), pe !== null && (xe.data = pe)))), (pe = Sb ? xb(e, i) : Eb(e, i)) && (xe = uo(q, "onBeforeInput"), 0 < xe.length && (Be = new Bh(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          Y
        ), K.push({
          event: Be,
          listeners: xe
        }), Be.data = pe)), h2(
          K,
          e,
          q,
          i,
          Y
        );
      }
      Tg(K, n);
    });
  }
  function As(e, n, i) {
    return {
      instance: e,
      listener: n,
      currentTarget: i
    };
  }
  function uo(e, n) {
    for (var i = n + "Capture", l = []; e !== null; ) {
      var c = e, m = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || m === null || (c = Zi(e, i), c != null && l.unshift(
        As(e, c, m)
      ), c = Zi(e, n), c != null && l.push(
        As(e, c, m)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Si(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Ng(e, n, i, l, c) {
    for (var m = n._reactName, C = []; i !== null && i !== l; ) {
      var N = i, R = N.alternate, q = N.stateNode;
      if (N = N.tag, R !== null && R === l) break;
      N !== 5 && N !== 26 && N !== 27 || q === null || (R = q, c ? (q = Zi(i, m), q != null && C.unshift(
        As(i, q, R)
      )) : c || (q = Zi(i, m), q != null && C.push(
        As(i, q, R)
      ))), i = i.return;
    }
    C.length !== 0 && e.push({ event: n, listeners: C });
  }
  var v2 = /\r\n?/g, y2 = /\u0000|\uFFFD/g;
  function Dg(e) {
    return (typeof e == "string" ? e : "" + e).replace(v2, `
`).replace(y2, "");
  }
  function Mg(e, n) {
    return n = Dg(n), Dg(e) === n;
  }
  function co() {
  }
  function Ke(e, n, i, l, c, m) {
    switch (i) {
      case "children":
        typeof l == "string" ? n === "body" || n === "textarea" && l === "" || Ya(e, l) : (typeof l == "number" || typeof l == "bigint") && n !== "body" && Ya(e, "" + l);
        break;
      case "className":
        ml(e, "class", l);
        break;
      case "tabIndex":
        ml(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ml(e, i, l);
        break;
      case "style":
        Rh(e, l, m);
        break;
      case "data":
        if (n !== "object") {
          ml(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (n !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(i);
          break;
        }
        l = yl("" + l), e.setAttribute(i, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof m == "function" && (i === "formAction" ? (n !== "input" && Ke(e, n, "name", c.name, c, null), Ke(
            e,
            n,
            "formEncType",
            c.formEncType,
            c,
            null
          ), Ke(
            e,
            n,
            "formMethod",
            c.formMethod,
            c,
            null
          ), Ke(
            e,
            n,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (Ke(e, n, "encType", c.encType, c, null), Ke(e, n, "method", c.method, c, null), Ke(e, n, "target", c.target, c, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(i);
          break;
        }
        l = yl("" + l), e.setAttribute(i, l);
        break;
      case "onClick":
        l != null && (e.onclick = co);
        break;
      case "onScroll":
        l != null && He("scroll", e);
        break;
      case "onScrollEnd":
        l != null && He("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (i = l.__html, i != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = i;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        i = yl("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          i
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(i, "" + l) : e.removeAttribute(i);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(i, "") : e.removeAttribute(i);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(i, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(i, l) : e.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(i, l) : e.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(i) : e.setAttribute(i, l);
        break;
      case "popover":
        He("beforetoggle", e), He("toggle", e), pl(e, "popover", l);
        break;
      case "xlinkActuate":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        pl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = X1.get(i) || i, pl(e, i, l));
    }
  }
  function Mf(e, n, i, l, c, m) {
    switch (i) {
      case "style":
        Rh(e, l, m);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (i = l.__html, i != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Ya(e, l) : (typeof l == "number" || typeof l == "bigint") && Ya(e, "" + l);
        break;
      case "onScroll":
        l != null && He("scroll", e);
        break;
      case "onScrollEnd":
        l != null && He("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = co);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!xh.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (c = i.endsWith("Capture"), n = i.slice(2, c ? i.length - 7 : void 0), m = e[$t] || null, m = m != null ? m[i] : null, typeof m == "function" && e.removeEventListener(n, m, c), typeof l == "function")) {
              typeof m != "function" && m !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(n, l, c);
              break e;
            }
            i in e ? e[i] = l : l === !0 ? e.setAttribute(i, "") : pl(e, i, l);
          }
    }
  }
  function zt(e, n, i) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        He("error", e), He("load", e);
        var l = !1, c = !1, m;
        for (m in i)
          if (i.hasOwnProperty(m)) {
            var C = i[m];
            if (C != null)
              switch (m) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, n));
                default:
                  Ke(e, n, m, C, i, null);
              }
          }
        c && Ke(e, n, "srcSet", i.srcSet, i, null), l && Ke(e, n, "src", i.src, i, null);
        return;
      case "input":
        He("invalid", e);
        var N = m = C = c = null, R = null, q = null;
        for (l in i)
          if (i.hasOwnProperty(l)) {
            var Y = i[l];
            if (Y != null)
              switch (l) {
                case "name":
                  c = Y;
                  break;
                case "type":
                  C = Y;
                  break;
                case "checked":
                  R = Y;
                  break;
                case "defaultChecked":
                  q = Y;
                  break;
                case "value":
                  m = Y;
                  break;
                case "defaultValue":
                  N = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null)
                    throw Error(s(137, n));
                  break;
                default:
                  Ke(e, n, l, Y, i, null);
              }
          }
        Nh(
          e,
          m,
          N,
          R,
          q,
          C,
          c,
          !1
        ), gl(e);
        return;
      case "select":
        He("invalid", e), l = C = m = null;
        for (c in i)
          if (i.hasOwnProperty(c) && (N = i[c], N != null))
            switch (c) {
              case "value":
                m = N;
                break;
              case "defaultValue":
                C = N;
                break;
              case "multiple":
                l = N;
              default:
                Ke(e, n, c, N, i, null);
            }
        n = m, i = C, e.multiple = !!l, n != null ? Va(e, !!l, n, !1) : i != null && Va(e, !!l, i, !0);
        return;
      case "textarea":
        He("invalid", e), m = c = l = null;
        for (C in i)
          if (i.hasOwnProperty(C) && (N = i[C], N != null))
            switch (C) {
              case "value":
                l = N;
                break;
              case "defaultValue":
                c = N;
                break;
              case "children":
                m = N;
                break;
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(s(91));
                break;
              default:
                Ke(e, n, C, N, i, null);
            }
        Mh(e, l, c, m), gl(e);
        return;
      case "option":
        for (R in i)
          if (i.hasOwnProperty(R) && (l = i[R], l != null))
            switch (R) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ke(e, n, R, l, i, null);
            }
        return;
      case "dialog":
        He("beforetoggle", e), He("toggle", e), He("cancel", e), He("close", e);
        break;
      case "iframe":
      case "object":
        He("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ws.length; l++)
          He(ws[l], e);
        break;
      case "image":
        He("error", e), He("load", e);
        break;
      case "details":
        He("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        He("error", e), He("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (q in i)
          if (i.hasOwnProperty(q) && (l = i[q], l != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                Ke(e, n, q, l, i, null);
            }
        return;
      default:
        if (Vu(n)) {
          for (Y in i)
            i.hasOwnProperty(Y) && (l = i[Y], l !== void 0 && Mf(
              e,
              n,
              Y,
              l,
              i,
              void 0
            ));
          return;
        }
    }
    for (N in i)
      i.hasOwnProperty(N) && (l = i[N], l != null && Ke(e, n, N, l, i, null));
  }
  function b2(e, n, i, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null, m = null, C = null, N = null, R = null, q = null, Y = null;
        for (Z in i) {
          var K = i[Z];
          if (i.hasOwnProperty(Z) && K != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = K;
              default:
                l.hasOwnProperty(Z) || Ke(e, n, Z, null, l, K);
            }
        }
        for (var F in l) {
          var Z = l[F];
          if (K = i[F], l.hasOwnProperty(F) && (Z != null || K != null))
            switch (F) {
              case "type":
                m = Z;
                break;
              case "name":
                c = Z;
                break;
              case "checked":
                q = Z;
                break;
              case "defaultChecked":
                Y = Z;
                break;
              case "value":
                C = Z;
                break;
              case "defaultValue":
                N = Z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(s(137, n));
                break;
              default:
                Z !== K && Ke(
                  e,
                  n,
                  F,
                  Z,
                  l,
                  K
                );
            }
        }
        Zu(
          e,
          C,
          N,
          R,
          q,
          Y,
          m,
          c
        );
        return;
      case "select":
        Z = C = N = F = null;
        for (m in i)
          if (R = i[m], i.hasOwnProperty(m) && R != null)
            switch (m) {
              case "value":
                break;
              case "multiple":
                Z = R;
              default:
                l.hasOwnProperty(m) || Ke(
                  e,
                  n,
                  m,
                  null,
                  l,
                  R
                );
            }
        for (c in l)
          if (m = l[c], R = i[c], l.hasOwnProperty(c) && (m != null || R != null))
            switch (c) {
              case "value":
                F = m;
                break;
              case "defaultValue":
                N = m;
                break;
              case "multiple":
                C = m;
              default:
                m !== R && Ke(
                  e,
                  n,
                  c,
                  m,
                  l,
                  R
                );
            }
        n = N, i = C, l = Z, F != null ? Va(e, !!i, F, !1) : !!l != !!i && (n != null ? Va(e, !!i, n, !0) : Va(e, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        Z = F = null;
        for (N in i)
          if (c = i[N], i.hasOwnProperty(N) && c != null && !l.hasOwnProperty(N))
            switch (N) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ke(e, n, N, null, l, c);
            }
        for (C in l)
          if (c = l[C], m = i[C], l.hasOwnProperty(C) && (c != null || m != null))
            switch (C) {
              case "value":
                F = c;
                break;
              case "defaultValue":
                Z = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                c !== m && Ke(e, n, C, c, l, m);
            }
        Dh(e, F, Z);
        return;
      case "option":
        for (var Ae in i)
          if (F = i[Ae], i.hasOwnProperty(Ae) && F != null && !l.hasOwnProperty(Ae))
            switch (Ae) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ke(
                  e,
                  n,
                  Ae,
                  null,
                  l,
                  F
                );
            }
        for (R in l)
          if (F = l[R], Z = i[R], l.hasOwnProperty(R) && F !== Z && (F != null || Z != null))
            switch (R) {
              case "selected":
                e.selected = F && typeof F != "function" && typeof F != "symbol";
                break;
              default:
                Ke(
                  e,
                  n,
                  R,
                  F,
                  l,
                  Z
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Se in i)
          F = i[Se], i.hasOwnProperty(Se) && F != null && !l.hasOwnProperty(Se) && Ke(e, n, Se, null, l, F);
        for (q in l)
          if (F = l[q], Z = i[q], l.hasOwnProperty(q) && F !== Z && (F != null || Z != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(s(137, n));
                break;
              default:
                Ke(
                  e,
                  n,
                  q,
                  F,
                  l,
                  Z
                );
            }
        return;
      default:
        if (Vu(n)) {
          for (var We in i)
            F = i[We], i.hasOwnProperty(We) && F !== void 0 && !l.hasOwnProperty(We) && Mf(
              e,
              n,
              We,
              void 0,
              l,
              F
            );
          for (Y in l)
            F = l[Y], Z = i[Y], !l.hasOwnProperty(Y) || F === Z || F === void 0 && Z === void 0 || Mf(
              e,
              n,
              Y,
              F,
              l,
              Z
            );
          return;
        }
    }
    for (var L in i)
      F = i[L], i.hasOwnProperty(L) && F != null && !l.hasOwnProperty(L) && Ke(e, n, L, null, l, F);
    for (K in l)
      F = l[K], Z = i[K], !l.hasOwnProperty(K) || F === Z || F == null && Z == null || Ke(e, n, K, F, l, Z);
  }
  var kf = null, Rf = null;
  function fo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function kg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Rg(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function jf(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var zf = null;
  function _2() {
    var e = window.event;
    return e && e.type === "popstate" ? e === zf ? !1 : (zf = e, !0) : (zf = null, !1);
  }
  var jg = typeof setTimeout == "function" ? setTimeout : void 0, S2 = typeof clearTimeout == "function" ? clearTimeout : void 0, zg = typeof Promise == "function" ? Promise : void 0, x2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof zg < "u" ? function(e) {
    return zg.resolve(null).then(e).catch(E2);
  } : jg;
  function E2(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Zr(e) {
    return e === "head";
  }
  function Lg(e, n) {
    var i = n, l = 0, c = 0;
    do {
      var m = i.nextSibling;
      if (e.removeChild(i), m && m.nodeType === 8)
        if (i = m.data, i === "/$") {
          if (0 < l && 8 > l) {
            i = l;
            var C = e.ownerDocument;
            if (i & 1 && Ts(C.documentElement), i & 2 && Ts(C.body), i & 4)
              for (i = C.head, Ts(i), C = i.firstChild; C; ) {
                var N = C.nextSibling, R = C.nodeName;
                C[qi] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && C.rel.toLowerCase() === "stylesheet" || i.removeChild(C), C = N;
              }
          }
          if (c === 0) {
            e.removeChild(m), zs(n);
            return;
          }
          c--;
        } else
          i === "$" || i === "$?" || i === "$!" ? c++ : l = i.charCodeAt(0) - 48;
      else l = 0;
      i = m;
    } while (i);
    zs(n);
  }
  function Lf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (n = n.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Lf(i), Uu(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(i);
    }
  }
  function C2(e, n, i, l) {
    for (; e.nodeType === 1; ) {
      var c = i;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[qi])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (m = e.getAttribute("rel"), m === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (m !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (m = e.getAttribute("src"), (m !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && m && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var m = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === m)
          return e;
      } else return e;
      if (e = Ln(e.nextSibling), e === null) break;
    }
    return null;
  }
  function w2(e, n, i) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = Ln(e.nextSibling), e === null)) return null;
    return e;
  }
  function Pf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function A2(e, n) {
    var i = e.ownerDocument;
    if (e.data !== "$?" || i.readyState === "complete")
      n();
    else {
      var l = function() {
        n(), i.removeEventListener("DOMContentLoaded", l);
      };
      i.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Ln(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  var If = null;
  function Pg(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (n === 0) return e;
          n--;
        } else i === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Ig(e, n, i) {
    switch (n = fo(i), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function Ts(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Uu(e);
  }
  var On = /* @__PURE__ */ new Map(), Bg = /* @__PURE__ */ new Set();
  function ho(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var vr = te.d;
  te.d = {
    f: T2,
    r: O2,
    D: N2,
    C: D2,
    L: M2,
    m: k2,
    X: j2,
    S: R2,
    M: z2
  };
  function T2() {
    var e = vr.f(), n = ro();
    return e || n;
  }
  function O2(e) {
    var n = qa(e);
    n !== null && n.tag === 5 && n.type === "form" ? im(n) : vr.r(e);
  }
  var xi = typeof document > "u" ? null : document;
  function Ug(e, n, i) {
    var l = xi;
    if (l && typeof n == "string" && n) {
      var c = Sn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof i == "string" && (c += '[crossorigin="' + i + '"]'), Bg.has(c) || (Bg.add(c), e = { rel: e, crossOrigin: i, href: n }, l.querySelector(c) === null && (n = l.createElement("link"), zt(n, "link", e), Nt(n), l.head.appendChild(n)));
    }
  }
  function N2(e) {
    vr.D(e), Ug("dns-prefetch", e, null);
  }
  function D2(e, n) {
    vr.C(e, n), Ug("preconnect", e, n);
  }
  function M2(e, n, i) {
    vr.L(e, n, i);
    var l = xi;
    if (l && e && n) {
      var c = 'link[rel="preload"][as="' + Sn(n) + '"]';
      n === "image" && i && i.imageSrcSet ? (c += '[imagesrcset="' + Sn(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (c += '[imagesizes="' + Sn(
        i.imageSizes
      ) + '"]')) : c += '[href="' + Sn(e) + '"]';
      var m = c;
      switch (n) {
        case "style":
          m = Ei(e);
          break;
        case "script":
          m = Ci(e);
      }
      On.has(m) || (e = y(
        {
          rel: "preload",
          href: n === "image" && i && i.imageSrcSet ? void 0 : e,
          as: n
        },
        i
      ), On.set(m, e), l.querySelector(c) !== null || n === "style" && l.querySelector(Os(m)) || n === "script" && l.querySelector(Ns(m)) || (n = l.createElement("link"), zt(n, "link", e), Nt(n), l.head.appendChild(n)));
    }
  }
  function k2(e, n) {
    vr.m(e, n);
    var i = xi;
    if (i && e) {
      var l = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + Sn(l) + '"][href="' + Sn(e) + '"]', m = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          m = Ci(e);
      }
      if (!On.has(m) && (e = y({ rel: "modulepreload", href: e }, n), On.set(m, e), i.querySelector(c) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(Ns(m)))
              return;
        }
        l = i.createElement("link"), zt(l, "link", e), Nt(l), i.head.appendChild(l);
      }
    }
  }
  function R2(e, n, i) {
    vr.S(e, n, i);
    var l = xi;
    if (l && e) {
      var c = Fa(l).hoistableStyles, m = Ei(e);
      n = n || "default";
      var C = c.get(m);
      if (!C) {
        var N = { loading: 0, preload: null };
        if (C = l.querySelector(
          Os(m)
        ))
          N.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": n },
            i
          ), (i = On.get(m)) && Bf(e, i);
          var R = C = l.createElement("link");
          Nt(R), zt(R, "link", e), R._p = new Promise(function(q, Y) {
            R.onload = q, R.onerror = Y;
          }), R.addEventListener("load", function() {
            N.loading |= 1;
          }), R.addEventListener("error", function() {
            N.loading |= 2;
          }), N.loading |= 4, po(C, n, l);
        }
        C = {
          type: "stylesheet",
          instance: C,
          count: 1,
          state: N
        }, c.set(m, C);
      }
    }
  }
  function j2(e, n) {
    vr.X(e, n);
    var i = xi;
    if (i && e) {
      var l = Fa(i).hoistableScripts, c = Ci(e), m = l.get(c);
      m || (m = i.querySelector(Ns(c)), m || (e = y({ src: e, async: !0 }, n), (n = On.get(c)) && Uf(e, n), m = i.createElement("script"), Nt(m), zt(m, "link", e), i.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, l.set(c, m));
    }
  }
  function z2(e, n) {
    vr.M(e, n);
    var i = xi;
    if (i && e) {
      var l = Fa(i).hoistableScripts, c = Ci(e), m = l.get(c);
      m || (m = i.querySelector(Ns(c)), m || (e = y({ src: e, async: !0, type: "module" }, n), (n = On.get(c)) && Uf(e, n), m = i.createElement("script"), Nt(m), zt(m, "link", e), i.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, l.set(c, m));
    }
  }
  function Hg(e, n, i, l) {
    var c = (c = V.current) ? ho(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (n = Ei(i.href), i = Fa(
          c
        ).hoistableStyles, l = i.get(n), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          e = Ei(i.href);
          var m = Fa(
            c
          ).hoistableStyles, C = m.get(e);
          if (C || (c = c.ownerDocument || c, C = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, m.set(e, C), (m = c.querySelector(
            Os(e)
          )) && !m._p && (C.instance = m, C.state.loading = 5), On.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, On.set(e, i), m || L2(
            c,
            e,
            i,
            C.state
          ))), n && l === null)
            throw Error(s(528, ""));
          return C;
        }
        if (n && l !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return n = i.async, i = i.src, typeof i == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ci(i), i = Fa(
          c
        ).hoistableScripts, l = i.get(n), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function Ei(e) {
    return 'href="' + Sn(e) + '"';
  }
  function Os(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function qg(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function L2(e, n, i, l) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? l.loading = 1 : (n = e.createElement("link"), l.preload = n, n.addEventListener("load", function() {
      return l.loading |= 1;
    }), n.addEventListener("error", function() {
      return l.loading |= 2;
    }), zt(n, "link", i), Nt(n), e.head.appendChild(n));
  }
  function Ci(e) {
    return '[src="' + Sn(e) + '"]';
  }
  function Ns(e) {
    return "script[async]" + e;
  }
  function Fg(e, n, i) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Sn(i.href) + '"]'
          );
          if (l)
            return n.instance = l, Nt(l), l;
          var c = y({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Nt(l), zt(l, "style", c), po(l, i.precedence, e), n.instance = l;
        case "stylesheet":
          c = Ei(i.href);
          var m = e.querySelector(
            Os(c)
          );
          if (m)
            return n.state.loading |= 4, n.instance = m, Nt(m), m;
          l = qg(i), (c = On.get(c)) && Bf(l, c), m = (e.ownerDocument || e).createElement("link"), Nt(m);
          var C = m;
          return C._p = new Promise(function(N, R) {
            C.onload = N, C.onerror = R;
          }), zt(m, "link", l), n.state.loading |= 4, po(m, i.precedence, e), n.instance = m;
        case "script":
          return m = Ci(i.src), (c = e.querySelector(
            Ns(m)
          )) ? (n.instance = c, Nt(c), c) : (l = i, (c = On.get(m)) && (l = y({}, i), Uf(l, c)), e = e.ownerDocument || e, c = e.createElement("script"), Nt(c), zt(c, "link", l), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance, n.state.loading |= 4, po(l, i.precedence, e));
    return n.instance;
  }
  function po(e, n, i) {
    for (var l = i.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = l.length ? l[l.length - 1] : null, m = c, C = 0; C < l.length; C++) {
      var N = l[C];
      if (N.dataset.precedence === n) m = N;
      else if (m !== c) break;
    }
    m ? m.parentNode.insertBefore(e, m.nextSibling) : (n = i.nodeType === 9 ? i.head : i, n.insertBefore(e, n.firstChild));
  }
  function Bf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Uf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var mo = null;
  function Zg(e, n, i) {
    if (mo === null) {
      var l = /* @__PURE__ */ new Map(), c = mo = /* @__PURE__ */ new Map();
      c.set(i, l);
    } else
      c = mo, l = c.get(i), l || (l = /* @__PURE__ */ new Map(), c.set(i, l));
    if (l.has(e)) return l;
    for (l.set(e, null), i = i.getElementsByTagName(e), c = 0; c < i.length; c++) {
      var m = i[c];
      if (!(m[qi] || m[Pt] || e === "link" && m.getAttribute("rel") === "stylesheet") && m.namespaceURI !== "http://www.w3.org/2000/svg") {
        var C = m.getAttribute(n) || "";
        C = e + C;
        var N = l.get(C);
        N ? N.push(m) : l.set(C, [m]);
      }
    }
    return l;
  }
  function Gg(e, n, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function P2(e, n, i) {
    if (i === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return e = n.disabled, typeof n.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Vg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ds = null;
  function I2() {
  }
  function B2(e, n, i) {
    if (Ds === null) throw Error(s(475));
    var l = Ds;
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = Ei(i.href), m = e.querySelector(
          Os(c)
        );
        if (m) {
          e = m._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = go.bind(l), e.then(l, l)), n.state.loading |= 4, n.instance = m, Nt(m);
          return;
        }
        m = e.ownerDocument || e, i = qg(i), (c = On.get(c)) && Bf(i, c), m = m.createElement("link"), Nt(m);
        var C = m;
        C._p = new Promise(function(N, R) {
          C.onload = N, C.onerror = R;
        }), zt(m, "link", i), n.instance = m;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (l.count++, n = go.bind(l), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function U2() {
    if (Ds === null) throw Error(s(475));
    var e = Ds;
    return e.stylesheets && e.count === 0 && Hf(e, e.stylesheets), 0 < e.count ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && Hf(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(i);
      };
    } : null;
  }
  function go() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Hf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var vo = null;
  function Hf(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, vo = /* @__PURE__ */ new Map(), n.forEach(H2, e), vo = null, go.call(e));
  }
  function H2(e, n) {
    if (!(n.state.loading & 4)) {
      var i = vo.get(e);
      if (i) var l = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), vo.set(e, i);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), m = 0; m < c.length; m++) {
          var C = c[m];
          (C.nodeName === "LINK" || C.getAttribute("media") !== "not all") && (i.set(C.dataset.precedence, C), l = C);
        }
        l && i.set(null, l);
      }
      c = n.instance, C = c.getAttribute("data-precedence"), m = i.get(C) || l, m === l && i.set(null, c), i.set(C, c), this.count++, l = go.bind(this), c.addEventListener("load", l), c.addEventListener("error", l), m ? m.parentNode.insertBefore(c, m.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Ms = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function q2(e, n, i, l, c, m, C, N) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Lu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Lu(0), this.hiddenUpdates = Lu(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = m, this.onRecoverableError = C, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Yg(e, n, i, l, c, m, C, N, R, q, Y, K) {
    return e = new q2(
      e,
      n,
      i,
      C,
      N,
      R,
      q,
      K
    ), n = 1, m === !0 && (n |= 24), m = ln(3, null, null, n), e.current = m, m.stateNode = e, n = Sc(), n.refCount++, e.pooledCache = n, n.refCount++, m.memoizedState = {
      element: l,
      isDehydrated: i,
      cache: n
    }, wc(m), e;
  }
  function Xg(e) {
    return e ? (e = ti, e) : ti;
  }
  function $g(e, n, i, l, c, m) {
    c = Xg(c), l.context === null ? l.context = c : l.pendingContext = c, l = Mr(n), l.payload = { element: i }, m = m === void 0 ? null : m, m !== null && (l.callback = m), i = kr(e, l, n), i !== null && (dn(i, e, n), ls(i, e, n));
  }
  function Qg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function qf(e, n) {
    Qg(e, n), (e = e.alternate) && Qg(e, n);
  }
  function Jg(e) {
    if (e.tag === 13) {
      var n = ei(e, 67108864);
      n !== null && dn(n, e, 67108864), qf(e, 67108864);
    }
  }
  var yo = !0;
  function F2(e, n, i, l) {
    var c = H.T;
    H.T = null;
    var m = te.p;
    try {
      te.p = 2, Ff(e, n, i, l);
    } finally {
      te.p = m, H.T = c;
    }
  }
  function Z2(e, n, i, l) {
    var c = H.T;
    H.T = null;
    var m = te.p;
    try {
      te.p = 8, Ff(e, n, i, l);
    } finally {
      te.p = m, H.T = c;
    }
  }
  function Ff(e, n, i, l) {
    if (yo) {
      var c = Zf(l);
      if (c === null)
        Df(
          e,
          n,
          l,
          bo,
          i
        ), Wg(e, l);
      else if (V2(
        c,
        e,
        n,
        i,
        l
      ))
        l.stopPropagation();
      else if (Wg(e, l), n & 4 && -1 < G2.indexOf(e)) {
        for (; c !== null; ) {
          var m = qa(c);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (m = m.stateNode, m.current.memoizedState.isDehydrated) {
                  var C = bn(m.pendingLanes);
                  if (C !== 0) {
                    var N = m;
                    for (N.pendingLanes |= 2, N.entangledLanes |= 2; C; ) {
                      var R = 1 << 31 - qt(C);
                      N.entanglements[1] |= R, C &= ~R;
                    }
                    Qn(m), ($e & 6) === 0 && (to = ge() + 500, Cs(0));
                  }
                }
                break;
              case 13:
                N = ei(m, 2), N !== null && dn(N, m, 2), ro(), qf(m, 2);
            }
          if (m = Zf(l), m === null && Df(
            e,
            n,
            l,
            bo,
            i
          ), m === c) break;
          c = m;
        }
        c !== null && l.stopPropagation();
      } else
        Df(
          e,
          n,
          l,
          null,
          i
        );
    }
  }
  function Zf(e) {
    return e = Xu(e), Gf(e);
  }
  var bo = null;
  function Gf(e) {
    if (bo = null, e = Ha(e), e !== null) {
      var n = u(e);
      if (n === null) e = null;
      else {
        var i = n.tag;
        if (i === 13) {
          if (e = f(n), e !== null) return e;
          e = null;
        } else if (i === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return bo = e, null;
  }
  function Kg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Me()) {
          case Xe:
            return 2;
          case de:
            return 8;
          case he:
          case De:
            return 32;
          case Re:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vf = !1, Gr = null, Vr = null, Yr = null, ks = /* @__PURE__ */ new Map(), Rs = /* @__PURE__ */ new Map(), Xr = [], G2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Wg(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Gr = null;
        break;
      case "dragenter":
      case "dragleave":
        Vr = null;
        break;
      case "mouseover":
      case "mouseout":
        Yr = null;
        break;
      case "pointerover":
      case "pointerout":
        ks.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rs.delete(n.pointerId);
    }
  }
  function js(e, n, i, l, c, m) {
    return e === null || e.nativeEvent !== m ? (e = {
      blockedOn: n,
      domEventName: i,
      eventSystemFlags: l,
      nativeEvent: m,
      targetContainers: [c]
    }, n !== null && (n = qa(n), n !== null && Jg(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function V2(e, n, i, l, c) {
    switch (n) {
      case "focusin":
        return Gr = js(
          Gr,
          e,
          n,
          i,
          l,
          c
        ), !0;
      case "dragenter":
        return Vr = js(
          Vr,
          e,
          n,
          i,
          l,
          c
        ), !0;
      case "mouseover":
        return Yr = js(
          Yr,
          e,
          n,
          i,
          l,
          c
        ), !0;
      case "pointerover":
        var m = c.pointerId;
        return ks.set(
          m,
          js(
            ks.get(m) || null,
            e,
            n,
            i,
            l,
            c
          )
        ), !0;
      case "gotpointercapture":
        return m = c.pointerId, Rs.set(
          m,
          js(
            Rs.get(m) || null,
            e,
            n,
            i,
            l,
            c
          )
        ), !0;
    }
    return !1;
  }
  function ev(e) {
    var n = Ha(e.target);
    if (n !== null) {
      var i = u(n);
      if (i !== null) {
        if (n = i.tag, n === 13) {
          if (n = f(i), n !== null) {
            e.blockedOn = n, B1(e.priority, function() {
              if (i.tag === 13) {
                var l = fn();
                l = Pu(l);
                var c = ei(i, l);
                c !== null && dn(c, i, l), qf(i, l);
              }
            });
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function _o(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = Zf(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var l = new i.constructor(
          i.type,
          i
        );
        Yu = l, i.target.dispatchEvent(l), Yu = null;
      } else
        return n = qa(i), n !== null && Jg(n), e.blockedOn = i, !1;
      n.shift();
    }
    return !0;
  }
  function tv(e, n, i) {
    _o(e) && i.delete(n);
  }
  function Y2() {
    Vf = !1, Gr !== null && _o(Gr) && (Gr = null), Vr !== null && _o(Vr) && (Vr = null), Yr !== null && _o(Yr) && (Yr = null), ks.forEach(tv), Rs.forEach(tv);
  }
  function So(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Vf || (Vf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      Y2
    )));
  }
  var xo = null;
  function nv(e) {
    xo !== e && (xo = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        xo === e && (xo = null);
        for (var n = 0; n < e.length; n += 3) {
          var i = e[n], l = e[n + 1], c = e[n + 2];
          if (typeof l != "function") {
            if (Gf(l || i) === null)
              continue;
            break;
          }
          var m = qa(i);
          m !== null && (e.splice(n, 3), n -= 3, Zc(
            m,
            {
              pending: !0,
              data: c,
              method: i.method,
              action: l
            },
            l,
            c
          ));
        }
      }
    ));
  }
  function zs(e) {
    function n(R) {
      return So(R, e);
    }
    Gr !== null && So(Gr, e), Vr !== null && So(Vr, e), Yr !== null && So(Yr, e), ks.forEach(n), Rs.forEach(n);
    for (var i = 0; i < Xr.length; i++) {
      var l = Xr[i];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Xr.length && (i = Xr[0], i.blockedOn === null); )
      ev(i), i.blockedOn === null && Xr.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (l = 0; l < i.length; l += 3) {
        var c = i[l], m = i[l + 1], C = c[$t] || null;
        if (typeof m == "function")
          C || nv(i);
        else if (C) {
          var N = null;
          if (m && m.hasAttribute("formAction")) {
            if (c = m, C = m[$t] || null)
              N = C.formAction;
            else if (Gf(c) !== null) continue;
          } else N = C.action;
          typeof N == "function" ? i[l + 1] = N : (i.splice(l, 3), l -= 3), nv(i);
        }
      }
  }
  function Yf(e) {
    this._internalRoot = e;
  }
  Eo.prototype.render = Yf.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var i = n.current, l = fn();
    $g(i, l, e, n, null, null);
  }, Eo.prototype.unmount = Yf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      $g(e.current, 2, null, e, null, null), ro(), n[Ua] = null;
    }
  };
  function Eo(e) {
    this._internalRoot = e;
  }
  Eo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = bh();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < Xr.length && n !== 0 && n < Xr[i].priority; i++) ;
      Xr.splice(i, 0, e), i === 0 && ev(e);
    }
  };
  var rv = r.version;
  if (rv !== "19.1.1")
    throw Error(
      s(
        527,
        rv,
        "19.1.1"
      )
    );
  te.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = h(n), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var X2 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Co = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Co.isDisabled && Co.supportsFiber)
      try {
        tr = Co.inject(
          X2
        ), mt = Co;
      } catch {
      }
  }
  return Bs.createRoot = function(e, n) {
    if (!o(e)) throw Error(s(299));
    var i = !1, l = "", c = bm, m = _m, C = Sm, N = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (C = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (N = n.unstable_transitionCallbacks)), n = Yg(
      e,
      1,
      !1,
      null,
      null,
      i,
      l,
      c,
      m,
      C,
      N,
      null
    ), e[Ua] = n.current, Nf(e), new Yf(n);
  }, Bs.hydrateRoot = function(e, n, i) {
    if (!o(e)) throw Error(s(299));
    var l = !1, c = "", m = bm, C = _m, N = Sm, R = null, q = null;
    return i != null && (i.unstable_strictMode === !0 && (l = !0), i.identifierPrefix !== void 0 && (c = i.identifierPrefix), i.onUncaughtError !== void 0 && (m = i.onUncaughtError), i.onCaughtError !== void 0 && (C = i.onCaughtError), i.onRecoverableError !== void 0 && (N = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (R = i.unstable_transitionCallbacks), i.formState !== void 0 && (q = i.formState)), n = Yg(
      e,
      1,
      !0,
      n,
      i ?? null,
      l,
      c,
      m,
      C,
      N,
      R,
      q
    ), n.context = Xg(null), i = n.current, l = fn(), l = Pu(l), c = Mr(l), c.callback = null, kr(i, c, l), i = l, n.current.lanes = i, Hi(n, i), Qn(n), e[Ua] = n.current, Nf(e), new Eo(n);
  }, Bs.version = "19.1.1", Bs;
}
var yv;
function C_() {
  if (yv) return Jf.exports;
  yv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Jf.exports = E_(), Jf.exports;
}
var w_ = C_();
const bv = /* @__PURE__ */ l0(w_);
var A_ = Object.defineProperty, T_ = (t, r, a) => r in t ? A_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, O_ = (t, r, a) => T_(t, r + "", a);
class u0 extends Error {
  constructor(r, a) {
    super(r), O_(this, "data"), this.data = a;
  }
  toString() {
    return this.message;
  }
}
async function N_(t, r) {
  const a = SillyTavern.getContext(), s = new FormData();
  s.append("avatar", new Blob([JSON.stringify(t)], { type: "application/json" }), "character.json"), s.append("file_type", "json");
  const o = a.getRequestHeaders();
  delete o["Content-Type"];
  const u = await fetch("/api/characters/import", {
    method: "POST",
    headers: o,
    body: s,
    cache: "no-cache"
  });
  if (!u.ok)
    throw new u0(u.statusText, u);
  await a.getCharacters();
}
async function D_(t, r) {
  var a;
  const s = SillyTavern.getContext();
  if (!t.avatar)
    throw new Error("`data.avatar` (character filename) is required to save character attributes.");
  t == null || delete t.json_data, (a = t?.data) == null || delete a.json_data;
  const o = s.getRequestHeaders(), u = await fetch("/api/characters/merge-attributes", {
    method: "POST",
    headers: o,
    body: JSON.stringify(t),
    cache: "no-cache"
  });
  if (!u.ok) {
    const f = await u.json().catch(() => ({ message: u.statusText }));
    throw new u0(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var M_ = Object.defineProperty, k_ = (t, r, a) => r in t ? M_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, _v = (t, r, a) => k_(t, typeof r != "symbol" ? r + "" : r, a);
class c0 {
  constructor(r, a) {
    _v(this, "settingsKey"), _v(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = a;
  }
  /**
   * If defaultSettings has "version" and "formatVersion" properties, they will be used to track version and format version changes.
   *
   * For example, if you want to show a notification when a new version is released, you can check "result.version.changed".
   *
   * @param [options={}]
   * @param [options.strategy='recursive'] - 'recursive' will migrate old settings with the default settings.
   *
   * For complex settings, you can specify a custom migration strategy. For example, if you change the field name from "old" to "new", you can use:
   * @example
   * [
   *   {
   *     from: 'FORMAT-0.1.0',
   *     to: 'FORMAT-0.1.1',
   *     action: (previous) => {
   *       const data = {
   *         ...previous,
   *         new: previous.old,
   *       };
   *       delete data.old;
   *       return data;
   *     },
   *   },
   * ]
   */
  async initializeSettings(r = {}) {
    const { strategy: a = "recursive" } = r, s = this.defaultSettings.version, o = this.defaultSettings.formatVersion, u = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
      version: {
        changed: !1,
        new: s ?? ""
      },
      formatVersion: {
        changed: !1,
        new: o ?? ""
      },
      oldSettings: null,
      newSettings: this.defaultSettings
    };
    if (!u)
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), f;
    const p = {
      ...f,
      oldSettings: structuredClone(u),
      version: {
        changed: !1,
        old: u.version,
        new: u.version
      },
      formatVersion: {
        changed: !1,
        old: u.formatVersion,
        new: u.formatVersion
      }
    };
    if (a === "recursive") {
      let h = function(g, y) {
        let _ = !1;
        for (const b of Object.keys(y))
          g[b] === void 0 ? (g[b] = y[b], _ = !0) : typeof y[b] == "object" && y[b] !== null && (g[b] = g[b] || {}, h(g[b], y[b]) && (_ = !0));
        return _;
      };
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), o && o !== "*" && u.formatVersion !== o && (p.formatVersion.changed = !0, p.formatVersion.new = o, u.formatVersion = o), (h(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(a)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), o && !u.formatVersion && (u.formatVersion = o, p.formatVersion.changed = !0, p.formatVersion.new = o);
      let h = structuredClone(u), g = u.formatVersion;
      try {
        let y;
        do {
          y = !1;
          let _ = a.find((b) => b.from === g);
          if (_ && _.to > g)
            h = await _.action(h), g = _.to, h.formatVersion = _.to, y = !0;
          else
            for (const b of a)
              if (b.from === "*" && b.to > g && g !== b.to) {
                h = await b.action(h), g = b.to, h.formatVersion = b.to, y = !0;
                break;
              }
        } while (y);
        if (g !== u.formatVersion) {
          p.formatVersion.changed = !0, p.formatVersion.new = g;
          const _ = this.defaultSettings.version;
          _ && (h.version = _);
        }
        if (p.formatVersion.changed) {
          for (const _ of Object.keys(u))
            delete u[_];
          Object.assign(u, h), this.saveSettings();
        }
      } catch (y) {
        throw console.error("Failed to apply version changes:", y), new Error(`Version migration failed: ${y instanceof Error ? y.message : y}`, {
          cause: y
        });
      }
    }
    return p.newSettings = u, p;
  }
  getSettings() {
    return SillyTavern.getContext().extensionSettings[this.settingsKey];
  }
  updateSetting(r, a) {
    SillyTavern.getContext().extensionSettings[this.settingsKey][r] = a, this.saveSettings();
  }
  saveSettings() {
    SillyTavern.getContext().saveSettingsDebounced();
  }
  resetSettings() {
    SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings();
  }
}
function Er(t) {
  return Array.isArray ? Array.isArray(t) : h0(t) === "[object Array]";
}
function R_(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function j_(t) {
  return t == null ? "" : R_(t);
}
function Kn(t) {
  return typeof t == "string";
}
function f0(t) {
  return typeof t == "number";
}
function z_(t) {
  return t === !0 || t === !1 || L_(t) && h0(t) == "[object Boolean]";
}
function d0(t) {
  return typeof t == "object";
}
function L_(t) {
  return d0(t) && t !== null;
}
function gn(t) {
  return t != null;
}
function td(t) {
  return !t.trim().length;
}
function h0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const P_ = "Incorrect 'index' type", I_ = (t) => `Invalid value for key ${t}`, B_ = (t) => `Pattern length exceeds max of ${t}.`, U_ = (t) => `Missing ${t} property in key`, H_ = (t) => `Property 'weight' in key '${t}' must be a positive integer`, Sv = Object.prototype.hasOwnProperty;
class q_ {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let a = 0;
    r.forEach((s) => {
      let o = p0(s);
      this._keys.push(o), this._keyMap[o.id] = o, a += o.weight;
    }), this._keys.forEach((s) => {
      s.weight /= a;
    });
  }
  get(r) {
    return this._keyMap[r];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function p0(t) {
  let r = null, a = null, s = null, o = 1, u = null;
  if (Kn(t) || Er(t))
    s = t, r = xv(t), a = wd(t);
  else {
    if (!Sv.call(t, "name"))
      throw new Error(U_("name"));
    const f = t.name;
    if (s = f, Sv.call(t, "weight") && (o = t.weight, o <= 0))
      throw new Error(H_(f));
    r = xv(f), a = wd(f), u = t.getFn;
  }
  return { path: r, id: a, weight: o, src: s, getFn: u };
}
function xv(t) {
  return Er(t) ? t : t.split(".");
}
function wd(t) {
  return Er(t) ? t.join(".") : t;
}
function F_(t, r) {
  let a = [], s = !1;
  const o = (u, f, p) => {
    if (gn(u))
      if (!f[p])
        a.push(u);
      else {
        let h = f[p];
        const g = u[h];
        if (!gn(g))
          return;
        if (p === f.length - 1 && (Kn(g) || f0(g) || z_(g)))
          a.push(j_(g));
        else if (Er(g)) {
          s = !0;
          for (let y = 0, _ = g.length; y < _; y += 1)
            o(g[y], f, p + 1);
        } else f.length && o(g, f, p + 1);
      }
  };
  return o(t, Kn(r) ? r.split(".") : r, 0), s ? a : a[0];
}
const Z_ = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, G_ = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (t, r) => t.score === r.score ? t.idx < r.idx ? -1 : 1 : t.score < r.score ? -1 : 1
}, V_ = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
}, Y_ = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: F_,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: !1,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: !1,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Ne = {
  ...G_,
  ...Z_,
  ...V_,
  ...Y_
};
const X_ = /[^ ]+/g;
function $_(t = 1, r = 3) {
  const a = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(o) {
      const u = o.match(X_).length;
      if (a.has(u))
        return a.get(u);
      const f = 1 / Math.pow(u, 0.5 * t), p = parseFloat(Math.round(f * s) / s);
      return a.set(u, p), p;
    },
    clear() {
      a.clear();
    }
  };
}
class Kd {
  constructor({
    getFn: r = Ne.getFn,
    fieldNormWeight: a = Ne.fieldNormWeight
  } = {}) {
    this.norm = $_(a, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(r = []) {
    this.docs = r;
  }
  setIndexRecords(r = []) {
    this.records = r;
  }
  setKeys(r = []) {
    this.keys = r, this._keysMap = {}, r.forEach((a, s) => {
      this._keysMap[a.id] = s;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, Kn(this.docs[0]) ? this.docs.forEach((r, a) => {
      this._addString(r, a);
    }) : this.docs.forEach((r, a) => {
      this._addObject(r, a);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const a = this.size();
    Kn(r) ? this._addString(r, a) : this._addObject(r, a);
  }
  // Removes the doc at the specified index of the index
  removeAt(r) {
    this.records.splice(r, 1);
    for (let a = r, s = this.size(); a < s; a += 1)
      this.records[a].i -= 1;
  }
  getValueForItemAtKeyId(r, a) {
    return r[this._keysMap[a]];
  }
  size() {
    return this.records.length;
  }
  _addString(r, a) {
    if (!gn(r) || td(r))
      return;
    let s = {
      v: r,
      i: a,
      n: this.norm.get(r)
    };
    this.records.push(s);
  }
  _addObject(r, a) {
    let s = { i: a, $: {} };
    this.keys.forEach((o, u) => {
      let f = o.getFn ? o.getFn(r) : this.getFn(r, o.path);
      if (gn(f)) {
        if (Er(f)) {
          let p = [];
          const h = [{ nestedArrIndex: -1, value: f }];
          for (; h.length; ) {
            const { nestedArrIndex: g, value: y } = h.pop();
            if (gn(y))
              if (Kn(y) && !td(y)) {
                let _ = {
                  v: y,
                  i: g,
                  n: this.norm.get(y)
                };
                p.push(_);
              } else Er(y) && y.forEach((_, b) => {
                h.push({
                  nestedArrIndex: b,
                  value: _
                });
              });
          }
          s.$[u] = p;
        } else if (Kn(f) && !td(f)) {
          let p = {
            v: f,
            n: this.norm.get(f)
          };
          s.$[u] = p;
        }
      }
    }), this.records.push(s);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function m0(t, r, { getFn: a = Ne.getFn, fieldNormWeight: s = Ne.fieldNormWeight } = {}) {
  const o = new Kd({ getFn: a, fieldNormWeight: s });
  return o.setKeys(t.map(p0)), o.setSources(r), o.create(), o;
}
function Q_(t, { getFn: r = Ne.getFn, fieldNormWeight: a = Ne.fieldNormWeight } = {}) {
  const { keys: s, records: o } = t, u = new Kd({ getFn: r, fieldNormWeight: a });
  return u.setKeys(s), u.setIndexRecords(o), u;
}
function wo(t, {
  errors: r = 0,
  currentLocation: a = 0,
  expectedLocation: s = 0,
  distance: o = Ne.distance,
  ignoreLocation: u = Ne.ignoreLocation
} = {}) {
  const f = r / t.length;
  if (u)
    return f;
  const p = Math.abs(s - a);
  return o ? f + p / o : p ? 1 : f;
}
function J_(t = [], r = Ne.minMatchCharLength) {
  let a = [], s = -1, o = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (o = u - 1, o - s + 1 >= r && a.push([s, o]), s = -1);
  }
  return t[u - 1] && u - s >= r && a.push([s, u - 1]), a;
}
const Ma = 32;
function K_(t, r, a, {
  location: s = Ne.location,
  distance: o = Ne.distance,
  threshold: u = Ne.threshold,
  findAllMatches: f = Ne.findAllMatches,
  minMatchCharLength: p = Ne.minMatchCharLength,
  includeMatches: h = Ne.includeMatches,
  ignoreLocation: g = Ne.ignoreLocation
} = {}) {
  if (r.length > Ma)
    throw new Error(B_(Ma));
  const y = r.length, _ = t.length, b = Math.max(0, Math.min(s, _));
  let v = u, d = b;
  const S = p > 1 || h, E = S ? Array(_) : [];
  let O;
  for (; (O = t.indexOf(r, d)) > -1; ) {
    let k = wo(r, {
      currentLocation: O,
      expectedLocation: b,
      distance: o,
      ignoreLocation: g
    });
    if (v = Math.min(k, v), d = O + y, S) {
      let P = 0;
      for (; P < y; )
        E[O + P] = 1, P += 1;
    }
  }
  d = -1;
  let w = [], D = 1, x = y + _;
  const A = 1 << y - 1;
  for (let k = 0; k < y; k += 1) {
    let P = 0, X = x;
    for (; P < X; )
      wo(r, {
        errors: k,
        currentLocation: b + X,
        expectedLocation: b,
        distance: o,
        ignoreLocation: g
      }) <= v ? P = X : x = X, X = Math.floor((x - P) / 2 + P);
    x = X;
    let U = Math.max(1, b - X + 1), G = f ? _ : Math.min(b + X, _) + y, Q = Array(G + 2);
    Q[G + 1] = (1 << k) - 1;
    for (let fe = G; fe >= U; fe -= 1) {
      let Ee = fe - 1, H = a[t.charAt(Ee)];
      if (S && (E[Ee] = +!!H), Q[fe] = (Q[fe + 1] << 1 | 1) & H, k && (Q[fe] |= (w[fe + 1] | w[fe]) << 1 | 1 | w[fe + 1]), Q[fe] & A && (D = wo(r, {
        errors: k,
        currentLocation: Ee,
        expectedLocation: b,
        distance: o,
        ignoreLocation: g
      }), D <= v)) {
        if (v = D, d = Ee, d <= b)
          break;
        U = Math.max(1, 2 * b - d);
      }
    }
    if (wo(r, {
      errors: k + 1,
      currentLocation: b,
      expectedLocation: b,
      distance: o,
      ignoreLocation: g
    }) > v)
      break;
    w = Q;
  }
  const M = {
    isMatch: d >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, D)
  };
  if (S) {
    const k = J_(E, p);
    k.length ? h && (M.indices = k) : M.isMatch = !1;
  }
  return M;
}
function W_(t) {
  let r = {};
  for (let a = 0, s = t.length; a < s; a += 1) {
    const o = t.charAt(a);
    r[o] = (r[o] || 0) | 1 << s - a - 1;
  }
  return r;
}
const gu = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class g0 {
  constructor(r, {
    location: a = Ne.location,
    threshold: s = Ne.threshold,
    distance: o = Ne.distance,
    includeMatches: u = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: p = Ne.minMatchCharLength,
    isCaseSensitive: h = Ne.isCaseSensitive,
    ignoreDiacritics: g = Ne.ignoreDiacritics,
    ignoreLocation: y = Ne.ignoreLocation
  } = {}) {
    if (this.options = {
      location: a,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: g,
      ignoreLocation: y
    }, r = h ? r : r.toLowerCase(), r = g ? gu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const _ = (v, d) => {
      this.chunks.push({
        pattern: v,
        alphabet: W_(v),
        startIndex: d
      });
    }, b = this.pattern.length;
    if (b > Ma) {
      let v = 0;
      const d = b % Ma, S = b - d;
      for (; v < S; )
        _(this.pattern.substr(v, Ma), v), v += Ma;
      if (d) {
        const E = b - Ma;
        _(this.pattern.substr(E), E);
      }
    } else
      _(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: a, ignoreDiacritics: s, includeMatches: o } = this.options;
    if (r = a ? r : r.toLowerCase(), r = s ? gu(r) : r, this.pattern === r) {
      let S = {
        isMatch: !0,
        score: 0
      };
      return o && (S.indices = [[0, r.length - 1]]), S;
    }
    const {
      location: u,
      distance: f,
      threshold: p,
      findAllMatches: h,
      minMatchCharLength: g,
      ignoreLocation: y
    } = this.options;
    let _ = [], b = 0, v = !1;
    this.chunks.forEach(({ pattern: S, alphabet: E, startIndex: O }) => {
      const { isMatch: w, score: D, indices: x } = K_(r, S, E, {
        location: u + O,
        distance: f,
        threshold: p,
        findAllMatches: h,
        minMatchCharLength: g,
        includeMatches: o,
        ignoreLocation: y
      });
      w && (v = !0), b += D, w && x && (_ = [..._, ...x]);
    });
    let d = {
      isMatch: v,
      score: v ? b / this.chunks.length : 1
    };
    return v && o && (d.indices = _), d;
  }
}
class ra {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return Ev(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return Ev(r, this.singleRegex);
  }
  search() {
  }
}
function Ev(t, r) {
  const a = t.match(r);
  return a ? a[1] : null;
}
class eS extends ra {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(r) {
    const a = r === this.pattern;
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class tS extends ra {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(r) {
    const s = r.indexOf(this.pattern) === -1;
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class nS extends ra {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(r) {
    const a = r.startsWith(this.pattern);
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class rS extends ra {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(r) {
    const a = !r.startsWith(this.pattern);
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class aS extends ra {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(r) {
    const a = r.endsWith(this.pattern);
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: [r.length - this.pattern.length, r.length - 1]
    };
  }
}
class iS extends ra {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(r) {
    const a = !r.endsWith(this.pattern);
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class v0 extends ra {
  constructor(r, {
    location: a = Ne.location,
    threshold: s = Ne.threshold,
    distance: o = Ne.distance,
    includeMatches: u = Ne.includeMatches,
    findAllMatches: f = Ne.findAllMatches,
    minMatchCharLength: p = Ne.minMatchCharLength,
    isCaseSensitive: h = Ne.isCaseSensitive,
    ignoreDiacritics: g = Ne.ignoreDiacritics,
    ignoreLocation: y = Ne.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new g0(r, {
      location: a,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: g,
      ignoreLocation: y
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(r) {
    return this._bitapSearch.searchIn(r);
  }
}
class y0 extends ra {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(r) {
    let a = 0, s;
    const o = [], u = this.pattern.length;
    for (; (s = r.indexOf(this.pattern, a)) > -1; )
      a = s + u, o.push([s, a - 1]);
    const f = !!o.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: o
    };
  }
}
const Ad = [
  eS,
  y0,
  nS,
  rS,
  iS,
  aS,
  tS,
  v0
], Cv = Ad.length, sS = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, lS = "|";
function oS(t, r = {}) {
  return t.split(lS).map((a) => {
    let s = a.trim().split(sS).filter((u) => u && !!u.trim()), o = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const p = s[u];
      let h = !1, g = -1;
      for (; !h && ++g < Cv; ) {
        const y = Ad[g];
        let _ = y.isMultiMatch(p);
        _ && (o.push(new y(_, r)), h = !0);
      }
      if (!h)
        for (g = -1; ++g < Cv; ) {
          const y = Ad[g];
          let _ = y.isSingleMatch(p);
          if (_) {
            o.push(new y(_, r));
            break;
          }
        }
    }
    return o;
  });
}
const uS = /* @__PURE__ */ new Set([v0.type, y0.type]);
class cS {
  constructor(r, {
    isCaseSensitive: a = Ne.isCaseSensitive,
    ignoreDiacritics: s = Ne.ignoreDiacritics,
    includeMatches: o = Ne.includeMatches,
    minMatchCharLength: u = Ne.minMatchCharLength,
    ignoreLocation: f = Ne.ignoreLocation,
    findAllMatches: p = Ne.findAllMatches,
    location: h = Ne.location,
    threshold: g = Ne.threshold,
    distance: y = Ne.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: a,
      ignoreDiacritics: s,
      includeMatches: o,
      minMatchCharLength: u,
      findAllMatches: p,
      ignoreLocation: f,
      location: h,
      threshold: g,
      distance: y
    }, r = a ? r : r.toLowerCase(), r = s ? gu(r) : r, this.pattern = r, this.query = oS(this.pattern, this.options);
  }
  static condition(r, a) {
    return a.useExtendedSearch;
  }
  searchIn(r) {
    const a = this.query;
    if (!a)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: s, isCaseSensitive: o, ignoreDiacritics: u } = this.options;
    r = o ? r : r.toLowerCase(), r = u ? gu(r) : r;
    let f = 0, p = [], h = 0;
    for (let g = 0, y = a.length; g < y; g += 1) {
      const _ = a[g];
      p.length = 0, f = 0;
      for (let b = 0, v = _.length; b < v; b += 1) {
        const d = _[b], { isMatch: S, indices: E, score: O } = d.search(r);
        if (S) {
          if (f += 1, h += O, s) {
            const w = d.constructor.type;
            uS.has(w) ? p = [...p, ...E] : p.push(E);
          }
        } else {
          h = 0, f = 0, p.length = 0;
          break;
        }
      }
      if (f) {
        let b = {
          isMatch: !0,
          score: h / f
        };
        return s && (b.indices = p), b;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Td = [];
function fS(...t) {
  Td.push(...t);
}
function Od(t, r) {
  for (let a = 0, s = Td.length; a < s; a += 1) {
    let o = Td[a];
    if (o.condition(t, r))
      return new o(t, r);
  }
  return new g0(t, r);
}
const vu = {
  AND: "$and",
  OR: "$or"
}, Nd = {
  PATH: "$path",
  PATTERN: "$val"
}, Dd = (t) => !!(t[vu.AND] || t[vu.OR]), dS = (t) => !!t[Nd.PATH], hS = (t) => !Er(t) && d0(t) && !Dd(t), wv = (t) => ({
  [vu.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function b0(t, r, { auto: a = !0 } = {}) {
  const s = (o) => {
    let u = Object.keys(o);
    const f = dS(o);
    if (!f && u.length > 1 && !Dd(o))
      return s(wv(o));
    if (hS(o)) {
      const h = f ? o[Nd.PATH] : u[0], g = f ? o[Nd.PATTERN] : o[h];
      if (!Kn(g))
        throw new Error(I_(h));
      const y = {
        keyId: wd(h),
        pattern: g
      };
      return a && (y.searcher = Od(g, r)), y;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((h) => {
      const g = o[h];
      Er(g) && g.forEach((y) => {
        p.children.push(s(y));
      });
    }), p;
  };
  return Dd(t) || (t = wv(t)), s(t);
}
function pS(t, { ignoreFieldNorm: r = Ne.ignoreFieldNorm }) {
  t.forEach((a) => {
    let s = 1;
    a.matches.forEach(({ key: o, norm: u, score: f }) => {
      const p = o ? o.weight : null;
      s *= Math.pow(
        f === 0 && p ? Number.EPSILON : f,
        (p || 1) * (r ? 1 : u)
      );
    }), a.score = s;
  });
}
function mS(t, r) {
  const a = t.matches;
  r.matches = [], gn(a) && a.forEach((s) => {
    if (!gn(s.indices) || !s.indices.length)
      return;
    const { indices: o, value: u } = s;
    let f = {
      indices: o,
      value: u
    };
    s.key && (f.key = s.key.src), s.idx > -1 && (f.refIndex = s.idx), r.matches.push(f);
  });
}
function gS(t, r) {
  r.score = t.score;
}
function vS(t, r, {
  includeMatches: a = Ne.includeMatches,
  includeScore: s = Ne.includeScore
} = {}) {
  const o = [];
  return a && o.push(mS), s && o.push(gS), t.map((u) => {
    const { idx: f } = u, p = {
      item: r[f],
      refIndex: f
    };
    return o.length && o.forEach((h) => {
      h(u, p);
    }), p;
  });
}
class Bi {
  constructor(r, a = {}, s) {
    this.options = { ...Ne, ...a }, this.options.useExtendedSearch, this._keyStore = new q_(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, a) {
    if (this._docs = r, a && !(a instanceof Kd))
      throw new Error(P_);
    this._myIndex = a || m0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    gn(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const a = [];
    for (let s = 0, o = this._docs.length; s < o; s += 1) {
      const u = this._docs[s];
      r(u, s) && (this.removeAt(s), s -= 1, o -= 1, a.push(u));
    }
    return a;
  }
  removeAt(r) {
    this._docs.splice(r, 1), this._myIndex.removeAt(r);
  }
  getIndex() {
    return this._myIndex;
  }
  search(r, { limit: a = -1 } = {}) {
    const {
      includeMatches: s,
      includeScore: o,
      shouldSort: u,
      sortFn: f,
      ignoreFieldNorm: p
    } = this.options;
    let h = Kn(r) ? Kn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return pS(h, { ignoreFieldNorm: p }), u && h.sort(f), f0(a) && a > -1 && (h = h.slice(0, a)), vS(h, this._docs, {
      includeMatches: s,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const a = Od(r, this.options), { records: s } = this._myIndex, o = [];
    return s.forEach(({ v: u, i: f, n: p }) => {
      if (!gn(u))
        return;
      const { isMatch: h, score: g, indices: y } = a.searchIn(u);
      h && o.push({
        item: u,
        idx: f,
        matches: [{ score: g, value: u, norm: p, indices: y }]
      });
    }), o;
  }
  _searchLogical(r) {
    const a = b0(r, this.options), s = (p, h, g) => {
      if (!p.children) {
        const { keyId: _, searcher: b } = p, v = this._findMatches({
          key: this._keyStore.get(_),
          value: this._myIndex.getValueForItemAtKeyId(h, _),
          searcher: b
        });
        return v && v.length ? [
          {
            idx: g,
            item: h,
            matches: v
          }
        ] : [];
      }
      const y = [];
      for (let _ = 0, b = p.children.length; _ < b; _ += 1) {
        const v = p.children[_], d = s(v, h, g);
        if (d.length)
          y.push(...d);
        else if (p.operator === vu.AND)
          return [];
      }
      return y;
    }, o = this._myIndex.records, u = {}, f = [];
    return o.forEach(({ $: p, i: h }) => {
      if (gn(p)) {
        let g = s(a, p, h);
        g.length && (u[h] || (u[h] = { idx: h, item: p, matches: [] }, f.push(u[h])), g.forEach(({ matches: y }) => {
          u[h].matches.push(...y);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const a = Od(r, this.options), { keys: s, records: o } = this._myIndex, u = [];
    return o.forEach(({ $: f, i: p }) => {
      if (!gn(f))
        return;
      let h = [];
      s.forEach((g, y) => {
        h.push(
          ...this._findMatches({
            key: g,
            value: f[y],
            searcher: a
          })
        );
      }), h.length && u.push({
        idx: p,
        item: f,
        matches: h
      });
    }), u;
  }
  _findMatches({ key: r, value: a, searcher: s }) {
    if (!gn(a))
      return [];
    let o = [];
    if (Er(a))
      a.forEach(({ v: u, i: f, n: p }) => {
        if (!gn(u))
          return;
        const { isMatch: h, score: g, indices: y } = s.searchIn(u);
        h && o.push({
          score: g,
          key: r,
          value: u,
          idx: f,
          norm: p,
          indices: y
        });
      });
    else {
      const { v: u, n: f } = a, { isMatch: p, score: h, indices: g } = s.searchIn(u);
      p && o.push({ score: h, key: r, value: u, norm: f, indices: g });
    }
    return o;
  }
}
Bi.version = "7.1.0";
Bi.createIndex = m0;
Bi.parseIndex = Q_;
Bi.config = Ne;
Bi.parseQuery = b0;
fS(cS);
var yS = Object.defineProperty, bS = (t, r, a) => r in t ? yS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, _S = (t, r, a) => bS(t, r + "", a);
let SS = class {
  constructor() {
    _S(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
  }
  async abortRequest(r) {
    var a;
    const s = this.requestMap.get(r);
    if (s) {
      if (s.abortController)
        try {
          s.abortController.abort();
        } catch {
        }
      (a = s.options) != null && a.onFinish && await s.options.onFinish(r), this.requestMap.delete(r);
    }
  }
  /**
   * @returns return value is not important because request would be finished anyway. So use "options".
   */
  async generateRequest(r, a) {
    var s;
    const o = SillyTavern.getContext(), u = o.uuidv4(), f = ((s = r?.custom) == null ? void 0 : s.stream) ?? !1;
    if (this.requestMap.set(u, {
      abortController: a?.abortController,
      isStream: f,
      options: a
    }), f)
      try {
        const p = await o.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        a != null && a.onStart && await a.onStart(u);
        let h;
        for await (const g of p())
          h = g, a != null && a.onEntry && await a.onEntry(u, g);
        a != null && a.onFinish && await a.onFinish(u, h);
      } catch (p) {
        a != null && a.onFinish && await a.onFinish(u, void 0, p);
      } finally {
        this.requestMap.delete(u);
      }
    else
      try {
        a != null && a.onStart && await a.onStart(u);
        const p = await o.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        this.requestMap.get(u) && (a != null && a.onEntry && await a.onEntry(u, p), a != null && a.onFinish && await a.onFinish(u, p));
      } catch (p) {
        a != null && a.onFinish && await a.onFinish(u, void 0, p);
      } finally {
        this.requestMap.delete(u);
      }
    return u;
  }
  getActiveRequest(r) {
    var a;
    return (a = this.requestMap.get(r)) == null ? void 0 : a.abortController;
  }
  getAllActiveRequests() {
    const r = /* @__PURE__ */ new Map();
    for (const [a, s] of this.requestMap)
      r.set(a, s.abortController);
    return r;
  }
};
async function xS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function we(t, r, { escapeHtml: a = !0 } = {}) {
  await xS("echo", { severity: t, escapeHtml: (!!a).toString() }, r);
}
function nd(t) {
  return W2(t);
}
function Av(t, r) {
  return J2(t, r);
}
function Ao(t, r, a) {
  return K2(t, r, a);
}
function ES(t, r, a) {
  return i_(t, r, a);
}
function CS(t, r) {
  return s_(t, r);
}
function wS(t, {
  customStoryString: r,
  customInstructSettings: a
} = {}) {
  return Q2(t, { customStoryString: r, customInstructSettings: a });
}
function Aa(t) {
  return d_(t);
}
function AS() {
  return {
    prompt: Ls[Ps.prompt],
    interval: Ls[Ps.interval],
    position: Ls[Ps.position],
    depth: Ls[Ps.depth],
    role: Ls[Ps.role]
  };
}
function TS(t, r) {
  return p_(t, r);
}
function OS({
  name2: t,
  charDescription: r,
  charPersonality: a,
  Scenario: s,
  worldInfoBefore: o,
  worldInfoAfter: u,
  bias: f,
  type: p,
  quietPrompt: h,
  quietImage: g,
  extensionPrompts: y,
  cyclePrompt: _,
  systemPromptOverride: b,
  jailbreakPromptOverride: v,
  personaDescription: d,
  messages: S,
  messageExamples: E
}, O) {
  return h_(
    {
      name2: t,
      charDescription: r,
      charPersonality: a,
      Scenario: s,
      worldInfoBefore: o,
      worldInfoAfter: u,
      bias: f,
      type: p,
      quietPrompt: h,
      quietImage: g,
      cyclePrompt: _,
      systemPromptOverride: b,
      jailbreakPromptOverride: v,
      personaDescription: d,
      extensionPrompts: y,
      messages: S,
      messageExamples: E
    },
    O
  );
}
function NS(t) {
  return o_(t);
}
function DS(t) {
  return u_(t);
}
function MS(t, r, {
  characterOverride: a,
  isMarkdown: s,
  isPrompt: o,
  isEdit: u,
  depth: f
}) {
  return m_(t, r, { characterOverride: a, isMarkdown: s, isPrompt: o, isEdit: u, depth: f });
}
async function kS(t, r) {
  return await l_(t, r);
}
function Tv(t, {
  wiFormat: r
} = {}) {
  return c_(t, { wiFormat: r });
}
function Us(t) {
  return f_(t);
}
function RS(t, r) {
  return n_(t, r);
}
class jS {
  /**
   * Encodes a string into a sequence of tokens using a simple heuristic.
   * This is a placeholder for a real tokenizer.
   */
  encode(r) {
    const a = Math.ceil(r.length / 4);
    return new Array(a).fill(" ");
  }
  /**
   * Decodes a sequence of tokens back into a string.
   * This is a placeholder and doesn't actually decode.
   */
  decode(r) {
    return r.join("");
  }
}
var zS = Object.defineProperty, LS = (t, r, a) => r in t ? zS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, To = (t, r, a) => LS(t, typeof r != "symbol" ? r + "" : r, a);
class PS {
  constructor(r) {
    To(this, "messages", []), To(this, "tokenizer"), To(this, "maxContext"), To(this, "currentTokenCount", 0), this.tokenizer = new jS(), this.maxContext = r;
  }
  getTokenCount(r) {
    var a, s;
    return r.content ? ((s = (a = r.source) == null ? void 0 : a.extra) == null ? void 0 : s.token_count) ?? this.tokenizer.encode(r.content).length : 0;
  }
  canFit(r) {
    return this.currentTokenCount + this.getTokenCount(r) <= this.maxContext;
  }
  add(r) {
    if (!r.content) return !0;
    const a = this.getTokenCount(r);
    return this.currentTokenCount + a > this.maxContext ? !1 : (this.messages.push(r), this.currentTokenCount += a, !0);
  }
  addFront(r) {
    if (!r.content) return !0;
    const a = this.getTokenCount(r);
    return this.currentTokenCount + a > this.maxContext ? !1 : (this.messages.unshift(r), this.currentTokenCount += a, !0);
  }
  addMany(r) {
    const a = r.filter((p) => p.content), s = a.map((p) => this.getTokenCount(p)), o = s.reduce((p, h) => p + h, 0);
    if (this.currentTokenCount + o <= this.maxContext)
      return this.messages.push(...a), this.currentTokenCount += o, !0;
    let u = 0;
    const f = [];
    for (let p = a.length - 1; p >= 0; p--) {
      const h = a[p], g = s[p];
      if (this.currentTokenCount + u + g <= this.maxContext)
        f.unshift(h), u += g;
      else
        break;
    }
    return f.length > 0 && (this.messages.push(...f), this.currentTokenCount += u), f.length === a.length;
  }
  insert(r, a) {
    if (!a.content) return !0;
    const s = this.getTokenCount(a);
    return this.currentTokenCount + s > this.maxContext ? !1 : (this.messages.splice(r, 0, a), this.currentTokenCount += s, !0);
  }
  getMessages() {
    return this.messages;
  }
}
async function _0(t, {
  targetCharacterId: r,
  presetName: a,
  instructName: s,
  contextName: o,
  syspromptName: u,
  maxContext: f,
  includeNames: p,
  ignoreCharacterFields: h,
  ignoreAuthorNote: g,
  ignoreWorldInfo: y,
  messageIndexesBetween: _
} = {}) {
  var b, v, d, S, E, O, w, D, x, A, M, k, P, X;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const U = SillyTavern.getContext();
  let { description: G, personality: Q, persona: oe, scenario: fe, mesExamples: Ee, system: H, jailbreak: te } = h ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : U.getCharacterCardFields({
    chid: r
  });
  const ue = t === "textgenerationwebui" ? (b = U.getPresetManager("instruct")) == null ? void 0 : b.getCompletionPresetByName(s) : void 0, Le = !!(ue != null && ue.enabled);
  let j = Av(Ee, Le);
  function J() {
    var de, he;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !a)
      return nd();
    if (typeof f == "number")
      return f;
    let De;
    if (t === "textgenerationwebui") {
      const Re = (de = U.getPresetManager("textgenerationwebui")) == null ? void 0 : de.getCompletionPresetByName(a);
      De = Re?.max_length;
    } else {
      const Re = (he = U.getPresetManager("openai")) == null ? void 0 : he.getCompletionPresetByName(a);
      De = Re?.openai_max_context;
    }
    return typeof De == "number" ? De : nd();
  }
  let ae = [];
  const se = J();
  if (se <= 0)
    return { result: [], warnings: ae };
  const le = new PS(se), Ie = U.ToolManager.isToolCallingSupported(), V = _?.start ?? 0, me = _ != null && _.end ? _.end + 1 : void 0;
  let ve = V === -1 && me === 0 ? [] : U.chat.slice(V, me).filter((de) => {
    var he;
    return !de.is_system || Ie && Array.isArray((he = de.extra) == null ? void 0 : he.tool_invocations);
  });
  ve = await Promise.all(
    ve.map(async (de, he) => {
      var De, Re;
      let it = de.mes, Ar = de.is_user ? sv.USER_INPUT : sv.AI_OUTPUT, tr = { isPrompt: !0, depth: ve.length - he - 1 }, mt = MS(it, Ar, tr);
      return mt = await kS(de, mt), (De = de?.extra) != null && De.append_title && (Re = de?.extra) != null && Re.title && (mt = `${mt}

${de.extra.title}`), {
        ...de,
        mes: mt,
        index: he
      };
    })
  );
  const Ve = ve.map((de) => r_ ? `${de.name}: ${de.mes}` : de.mes).reverse(), { worldInfoString: at, worldInfoBefore: ze, worldInfoAfter: I, worldInfoExamples: re, worldInfoDepth: ne, anBefore: ye, anAfter: Ce } = y ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await U.getWorldInfoPrompt(Ve, se, !1);
  for (const de of re) {
    const he = de.content;
    if (he.length === 0)
      continue;
    const De = Ao(he, _r, Qr), Re = Av(De, Le);
    de.position === a_.before ? j.unshift(...Re) : j.push(...Re);
  }
  function ge() {
    const de = [];
    for (let he = ve.length - 1; he >= 0; he--) {
      const De = ve[he], Re = De.name === "System" && !De.is_user ? "system" : De.is_user ? "user" : "assistant";
      de.unshift({
        role: Re,
        content: p && Re != "system" ? `${De.name}: ${De.mes}` : De.mes,
        source: De
      });
    }
    le.addMany(de);
  }
  if (t === "textgenerationwebui") {
    const de = [...j];
    j && (j = ES(j, _r, Qr));
    const he = (v = U.getPresetManager("sysprompt")) == null ? void 0 : v.getCompletionPresetByName(u);
    he && (H = U.powerUserSettings.prefer_character_prompt && H ? H : Ao(he.content, _r, Qr), H = Le ? CS(
      U.substituteParams(H, _r, Qr, he.content),
      ue
    ) : H);
    const De = {
      description: G,
      personality: Q,
      persona: U.powerUserSettings.persona_description_position == av.IN_PROMPT ? oe : "",
      scenario: fe,
      system: H,
      char: Qr,
      user: _r,
      wiBefore: ze,
      wiAfter: I,
      loreBefore: ze,
      loreAfter: I,
      mesExamples: j.join(""),
      mesExamplesRaw: de.join("")
    }, Re = (d = U.getPresetManager("context")) == null ? void 0 : d.getCompletionPresetByName(o);
    let it = wS(De, {
      customInstructSettings: ue,
      customStoryString: Re?.story_string
    });
    it && le.add({ role: "system", content: it, ignoreInstruct: !0 }), ge();
  } else {
    let de = function(Ft) {
      const Xt = yn.find((Ba) => Ba.identifier === Ft);
      if (Xt)
        return Xt;
      const hl = it.prompts.find((Ba) => Ba.identifier === Ft);
      if (hl)
        return hl;
    }, he = NS(ve), De = DS(j);
    async function Re() {
      let [Ft, Xt] = await OS(
        {
          name2: Qr,
          charDescription: G,
          charPersonality: Q,
          Scenario: fe,
          worldInfoBefore: ze,
          worldInfoAfter: I,
          extensionPrompts: U.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: H,
          jailbreakPromptOverride: te,
          personaDescription: oe,
          messages: he,
          messageExamples: De
        },
        !1
      );
      le.addMany(Ft);
    }
    if (!a)
      return ae.push("No preset name provided. Using default preset."), await Re(), { result: le.getMessages(), warnings: ae };
    const it = (S = U.getPresetManager("openai")) == null ? void 0 : S.getCompletionPresetByName(a);
    if (!it)
      return console.warn(`Preset not found: ${a}. Using current preset.`), ae.push(`Preset not found: ${a}. Using current preset.`), Re(), { result: le.getMessages(), warnings: ae };
    let Ar = (E = it.prompt_order) == null ? void 0 : E.find((Ft) => Ft.character_id === Ht);
    if (!Ar && it.prompt_order && it.prompt_order.length > 0 && (Ar = it.prompt_order[it.prompt_order.length - 1]), !Ar)
      return console.warn(`No prompt order found for preset: ${a}. Using current preset.`), ae.push(`No prompt order found for preset: ${a}. Using current preset.`), Re(), { result: le.getMessages(), warnings: ae };
    const tr = fe && it.scenario_format ? U.substituteParams(it.scenario_format) : "", mt = Q && it.personality_format ? U.substituteParams(it.personality_format) : "", Zn = U.substituteParams(it.group_nudge_prompt), qt = it.impersonation_prompt ? U.substituteParams(it.impersonation_prompt) : "", yn = [];
    y || yn.push(
      {
        role: "system",
        content: Tv(ze, { wiFormat: it.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: Tv(I, { wiFormat: it.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || yn.push(
      { role: "system", content: G, identifier: "charDescription" },
      { role: "system", content: mt, identifier: "charPersonality" },
      { role: "system", content: tr, identifier: "scenario" }
    ), yn.push(
      { role: "system", content: qt, identifier: "impersonate" },
      { role: "system", content: Zn, identifier: "groupNudge" }
    );
    const sa = U.extensionPrompts["1_memory"];
    sa && sa.value && yn.push({
      role: Aa(sa.role),
      content: sa.value,
      identifier: "summary",
      position: Us(sa.position)
    });
    const la = U.extensionPrompts["2_floating_prompt"];
    !g && la && la.value && yn.push({
      role: Aa(la.role),
      content: la.value,
      identifier: "authorsNote",
      position: Us(la.position)
    });
    const nr = U.extensionPrompts["3_vectors"];
    nr && nr.value && yn.push({
      role: "system",
      content: nr.value,
      identifier: "vectorsMemory",
      position: Us(nr.position)
    });
    const Gn = U.extensionPrompts["4_vectors_data_bank"];
    Gn && Gn.value && yn.push({
      role: Aa(Gn.role),
      content: Gn.value,
      identifier: "vectorsDataBank",
      position: Us(Gn.position)
    });
    const bn = U.extensionPrompts.chromadb;
    bn && bn.value && yn.push({
      role: "system",
      content: bn.value,
      identifier: "smartContext",
      position: Us(bn.position)
    }), !h && U.powerUserSettings.persona_description && U.powerUserSettings.persona_description_position === av.IN_PROMPT && yn.push({
      role: "system",
      content: U.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Ar.order.forEach((Ft) => {
      if (!Ft.enabled)
        return;
      const Xt = de(Ft.identifier);
      if (Xt && Xt.content) {
        le.add({
          role: Xt.role ?? "system",
          content: U.substituteParams(Xt.content)
        });
        return;
      }
      Ft.identifier === "chatHistory" && ge();
    });
  }
  const Me = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const de in U.extensionPrompts)
    if (Object.hasOwn(U.extensionPrompts, de)) {
      const he = U.extensionPrompts[de];
      if (Me.includes(de) || !U.extensionPrompts[de].value || ![wa.BEFORE_PROMPT, wa.IN_PROMPT].includes(he.position) || typeof he.filter == "function" && !await he.filter()) continue;
      const De = {
        role: Aa(he.role) ?? "system",
        content: he.value
      };
      if (he.position === wa.BEFORE_PROMPT)
        le.insert(he.depth, De);
      else if (he.position === wa.IN_PROMPT) {
        const Re = le.getMessages();
        le.insert(Re.length - he.depth, De);
      }
    }
  for (const de of ne) {
    const he = le.getMessages();
    le.insert(he.length - de.depth, {
      role: Aa(de.role),
      content: de.entries.join(`
`)
    });
  }
  if (!h) {
    const de = TS(Un, Number(Ht));
    if (Un && Array.isArray(de) && de.length > 0)
      de.filter((he) => he.text).forEach((he, De) => {
        const Re = le.getMessages();
        le.insert(Re.length - he.depth, { role: he.role, content: he.text });
      });
    else {
      const he = Ao(
        (A = (x = (D = (w = (O = U.characters[Ht]) == null ? void 0 : O.data) == null ? void 0 : w.extensions) == null ? void 0 : D.depth_prompt) == null ? void 0 : x.prompt) == null ? void 0 : A.trim(),
        _r,
        Qr
      ) || "";
      if (he) {
        const De = t_, Re = ((X = (P = (k = (M = U.characters[Ht]) == null ? void 0 : M.data) == null ? void 0 : k.extensions) == null ? void 0 : P.depth_prompt) == null ? void 0 : X.role) ?? e_, it = le.getMessages();
        le.insert(it.length - De, {
          role: Aa(Re),
          content: he
        });
      }
    }
  }
  let Xe = -1;
  if (!g) {
    const de = AS();
    if (de.prompt) {
      de.prompt = Ao(de.prompt, _r, Qr);
      const he = { role: Aa(de.role), content: de.prompt };
      switch (de.position) {
        case wa.IN_PROMPT:
          le.insert(1, he), Xe = 1;
          break;
        case wa.IN_CHAT:
          Xe = le.getMessages().length - de.depth, le.insert(Xe, he);
          break;
        case wa.BEFORE_PROMPT:
          le.addFront(he), Xe = 0;
          break;
      }
    }
  }
  return Xe >= 0 && (ye.length > 0 && (le.insert(Xe, { role: "system", content: ye.join(`
`) }), Xe++), Ce.length > 0 && le.insert(Xe + 1, { role: "system", content: Ce.join(`
`) })), { result: le.getMessages(), warnings: ae };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Ov(t, r) {
  var a = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    r && (s = s.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), a.push.apply(a, s);
  }
  return a;
}
function er(t) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ov(Object(a), !0).forEach(function(s) {
      IS(t, s, a[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Ov(Object(a)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(a, s));
    });
  }
  return t;
}
function cu(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? cu = function(r) {
    return typeof r;
  } : cu = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, cu(t);
}
function IS(t, r, a) {
  return r in t ? Object.defineProperty(t, r, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = a, t;
}
function Cr() {
  return Cr = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var s in a)
        Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s]);
    }
    return t;
  }, Cr.apply(this, arguments);
}
function BS(t, r) {
  if (t == null) return {};
  var a = {}, s = Object.keys(t), o, u;
  for (u = 0; u < s.length; u++)
    o = s[u], !(r.indexOf(o) >= 0) && (a[o] = t[o]);
  return a;
}
function US(t, r) {
  if (t == null) return {};
  var a = BS(t, r), s, o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (o = 0; o < u.length; o++)
      s = u[o], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (a[s] = t[s]);
  }
  return a;
}
var HS = "1.15.6";
function xr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var wr = xr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ol = xr(/Edge/i), Nv = xr(/firefox/i), el = xr(/safari/i) && !xr(/chrome/i) && !xr(/android/i), Wd = xr(/iP(ad|od|hone)/i), S0 = xr(/chrome/i) && xr(/android/i), x0 = {
  capture: !1,
  passive: !1
};
function Fe(t, r, a) {
  t.addEventListener(r, a, !wr && x0);
}
function qe(t, r, a) {
  t.removeEventListener(r, a, !wr && x0);
}
function yu(t, r) {
  if (r) {
    if (r[0] === ">" && (r = r.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(r);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(r);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(r);
      } catch {
        return !1;
      }
    return !1;
  }
}
function E0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Bn(t, r, a, s) {
  if (t) {
    a = a || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === a && yu(t, r) : yu(t, r)) || s && t === a)
        return t;
      if (t === a) break;
    } while (t = E0(t));
  }
  return null;
}
var Dv = /\s+/g;
function pn(t, r, a) {
  if (t && r)
    if (t.classList)
      t.classList[a ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(Dv, " ").replace(" " + r + " ", " ");
      t.className = (s + (a ? " " + r : "")).replace(Dv, " ");
    }
}
function Te(t, r, a) {
  var s = t && t.style;
  if (s) {
    if (a === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? a = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (a = t.currentStyle), r === void 0 ? a : a[r];
    !(r in s) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), s[r] = a + (typeof a == "string" ? "" : "px");
  }
}
function zi(t, r) {
  var a = "";
  if (typeof t == "string")
    a = t;
  else
    do {
      var s = Te(t, "transform");
      s && s !== "none" && (a = s + " " + a);
    } while (!r && (t = t.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(a);
}
function C0(t, r, a) {
  if (t) {
    var s = t.getElementsByTagName(r), o = 0, u = s.length;
    if (a)
      for (; o < u; o++)
        a(s[o], o);
    return s;
  }
  return [];
}
function Wn() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function xt(t, r, a, s, o) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, f, p, h, g, y, _;
    if (t !== window && t.parentNode && t !== Wn() ? (u = t.getBoundingClientRect(), f = u.top, p = u.left, h = u.bottom, g = u.right, y = u.height, _ = u.width) : (f = 0, p = 0, h = window.innerHeight, g = window.innerWidth, y = window.innerHeight, _ = window.innerWidth), (r || a) && t !== window && (o = o || t.parentNode, !wr))
      do
        if (o && o.getBoundingClientRect && (Te(o, "transform") !== "none" || a && Te(o, "position") !== "static")) {
          var b = o.getBoundingClientRect();
          f -= b.top + parseInt(Te(o, "border-top-width")), p -= b.left + parseInt(Te(o, "border-left-width")), h = f + u.height, g = p + u.width;
          break;
        }
      while (o = o.parentNode);
    if (s && t !== window) {
      var v = zi(o || t), d = v && v.a, S = v && v.d;
      v && (f /= S, p /= d, _ /= d, y /= S, h = f + y, g = p + _);
    }
    return {
      top: f,
      left: p,
      bottom: h,
      right: g,
      width: _,
      height: y
    };
  }
}
function Mv(t, r, a) {
  for (var s = ta(t, !0), o = xt(t)[r]; s; ) {
    var u = xt(s)[a], f = void 0;
    if (f = o >= u, !f) return s;
    if (s === Wn()) break;
    s = ta(s, !1);
  }
  return !1;
}
function Ii(t, r, a, s) {
  for (var o = 0, u = 0, f = t.children; u < f.length; ) {
    if (f[u].style.display !== "none" && f[u] !== Oe.ghost && (s || f[u] !== Oe.dragged) && Bn(f[u], a.draggable, t, !1)) {
      if (o === r)
        return f[u];
      o++;
    }
    u++;
  }
  return null;
}
function eh(t, r) {
  for (var a = t.lastElementChild; a && (a === Oe.ghost || Te(a, "display") === "none" || r && !yu(a, r)); )
    a = a.previousElementSibling;
  return a || null;
}
function Dn(t, r) {
  var a = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Oe.clone && (!r || yu(t, r)) && a++;
  return a;
}
function kv(t) {
  var r = 0, a = 0, s = Wn();
  if (t)
    do {
      var o = zi(t), u = o.a, f = o.d;
      r += t.scrollLeft * u, a += t.scrollTop * f;
    } while (t !== s && (t = t.parentNode));
  return [r, a];
}
function qS(t, r) {
  for (var a in t)
    if (t.hasOwnProperty(a)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === t[a][s]) return Number(a);
    }
  return -1;
}
function ta(t, r) {
  if (!t || !t.getBoundingClientRect) return Wn();
  var a = t, s = !1;
  do
    if (a.clientWidth < a.scrollWidth || a.clientHeight < a.scrollHeight) {
      var o = Te(a);
      if (a.clientWidth < a.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || a.clientHeight < a.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!a.getBoundingClientRect || a === document.body) return Wn();
        if (s || r) return a;
        s = !0;
      }
    }
  while (a = a.parentNode);
  return Wn();
}
function FS(t, r) {
  if (t && r)
    for (var a in r)
      r.hasOwnProperty(a) && (t[a] = r[a]);
  return t;
}
function rd(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var tl;
function w0(t, r) {
  return function() {
    if (!tl) {
      var a = arguments, s = this;
      a.length === 1 ? t.call(s, a[0]) : t.apply(s, a), tl = setTimeout(function() {
        tl = void 0;
      }, r);
    }
  };
}
function ZS() {
  clearTimeout(tl), tl = void 0;
}
function A0(t, r, a) {
  t.scrollLeft += r, t.scrollTop += a;
}
function T0(t) {
  var r = window.Polymer, a = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : a ? a(t).clone(!0)[0] : t.cloneNode(!0);
}
function O0(t, r, a) {
  var s = {};
  return Array.from(t.children).forEach(function(o) {
    var u, f, p, h;
    if (!(!Bn(o, r.draggable, t, !1) || o.animated || o === a)) {
      var g = xt(o);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, g.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, g.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, g.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, g.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var nn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function GS() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(o) {
          if (!(Te(o, "display") === "none" || o === Oe.ghost)) {
            t.push({
              target: o,
              rect: xt(o)
            });
            var u = er({}, t[t.length - 1].rect);
            if (o.thisAnimationDuration) {
              var f = zi(o, !0);
              f && (u.top -= f.f, u.left -= f.e);
            }
            o.fromRect = u;
          }
        });
      }
    },
    addAnimationState: function(s) {
      t.push(s);
    },
    removeAnimationState: function(s) {
      t.splice(qS(t, {
        target: s
      }), 1);
    },
    animateAll: function(s) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof s == "function" && s();
        return;
      }
      var u = !1, f = 0;
      t.forEach(function(p) {
        var h = 0, g = p.target, y = g.fromRect, _ = xt(g), b = g.prevFromRect, v = g.prevToRect, d = p.rect, S = zi(g, !0);
        S && (_.top -= S.f, _.left -= S.e), g.toRect = _, g.thisAnimationDuration && rd(b, _) && !rd(y, _) && // Make sure animatingRect is on line between toRect & fromRect
        (d.top - _.top) / (d.left - _.left) === (y.top - _.top) / (y.left - _.left) && (h = YS(d, b, v, o.options)), rd(_, y) || (g.prevFromRect = y, g.prevToRect = _, h || (h = o.options.animation), o.animate(g, d, _, h)), h && (u = !0, f = Math.max(f, h), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, h), g.thisAnimationDuration = h);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, o, u, f) {
      if (f) {
        Te(s, "transition", ""), Te(s, "transform", "");
        var p = zi(this.el), h = p && p.a, g = p && p.d, y = (o.left - u.left) / (h || 1), _ = (o.top - u.top) / (g || 1);
        s.animatingX = !!y, s.animatingY = !!_, Te(s, "transform", "translate3d(" + y + "px," + _ + "px,0)"), this.forRepaintDummy = VS(s), Te(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), Te(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          Te(s, "transition", ""), Te(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function VS(t) {
  return t.offsetWidth;
}
function YS(t, r, a, s) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - a.top, 2) + Math.pow(r.left - a.left, 2)) * s.animation;
}
var Ai = [], ad = {
  initializeByDefault: !0
}, ul = {
  mount: function(r) {
    for (var a in ad)
      ad.hasOwnProperty(a) && !(a in r) && (r[a] = ad[a]);
    Ai.forEach(function(s) {
      if (s.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), Ai.push(r);
  },
  pluginEvent: function(r, a, s) {
    var o = this;
    this.eventCanceled = !1, s.cancel = function() {
      o.eventCanceled = !0;
    };
    var u = r + "Global";
    Ai.forEach(function(f) {
      a[f.pluginName] && (a[f.pluginName][u] && a[f.pluginName][u](er({
        sortable: a
      }, s)), a.options[f.pluginName] && a[f.pluginName][r] && a[f.pluginName][r](er({
        sortable: a
      }, s)));
    });
  },
  initializePlugins: function(r, a, s, o) {
    Ai.forEach(function(p) {
      var h = p.pluginName;
      if (!(!r.options[h] && !p.initializeByDefault)) {
        var g = new p(r, a, r.options);
        g.sortable = r, g.options = r.options, r[h] = g, Cr(s, g.defaults);
      }
    });
    for (var u in r.options)
      if (r.options.hasOwnProperty(u)) {
        var f = this.modifyOption(r, u, r.options[u]);
        typeof f < "u" && (r.options[u] = f);
      }
  },
  getEventProperties: function(r, a) {
    var s = {};
    return Ai.forEach(function(o) {
      typeof o.eventProperties == "function" && Cr(s, o.eventProperties.call(a[o.pluginName], r));
    }), s;
  },
  modifyOption: function(r, a, s) {
    var o;
    return Ai.forEach(function(u) {
      r[u.pluginName] && u.optionListeners && typeof u.optionListeners[a] == "function" && (o = u.optionListeners[a].call(r[u.pluginName], s));
    }), o;
  }
};
function XS(t) {
  var r = t.sortable, a = t.rootEl, s = t.name, o = t.targetEl, u = t.cloneEl, f = t.toEl, p = t.fromEl, h = t.oldIndex, g = t.newIndex, y = t.oldDraggableIndex, _ = t.newDraggableIndex, b = t.originalEvent, v = t.putSortable, d = t.extraEventProperties;
  if (r = r || a && a[nn], !!r) {
    var S, E = r.options, O = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !wr && !ol ? S = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(s, !0, !0)), S.to = f || a, S.from = p || a, S.item = o || a, S.clone = u, S.oldIndex = h, S.newIndex = g, S.oldDraggableIndex = y, S.newDraggableIndex = _, S.originalEvent = b, S.pullMode = v ? v.lastPutMode : void 0;
    var w = er(er({}, d), ul.getEventProperties(s, r));
    for (var D in w)
      S[D] = w[D];
    a && a.dispatchEvent(S), E[O] && E[O].call(r, S);
  }
}
var $S = ["evt"], en = function(r, a) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = s.evt, u = US(s, $S);
  ul.pluginEvent.bind(Oe)(r, a, er({
    dragEl: ie,
    parentEl: pt,
    ghostEl: ke,
    rootEl: lt,
    nextEl: Na,
    lastDownEl: fu,
    cloneEl: ct,
    cloneHidden: ea,
    dragStarted: $s,
    putSortable: Lt,
    activeSortable: Oe.active,
    originalEvent: o,
    oldIndex: Ri,
    oldDraggableIndex: nl,
    newIndex: mn,
    newDraggableIndex: Wr,
    hideGhostForTarget: k0,
    unhideGhostForTarget: R0,
    cloneNowHidden: function() {
      ea = !0;
    },
    cloneNowShown: function() {
      ea = !1;
    },
    dispatchSortableEvent: function(p) {
      Gt({
        sortable: a,
        name: p,
        originalEvent: o
      });
    }
  }, u));
};
function Gt(t) {
  XS(er({
    putSortable: Lt,
    cloneEl: ct,
    targetEl: ie,
    rootEl: lt,
    oldIndex: Ri,
    oldDraggableIndex: nl,
    newIndex: mn,
    newDraggableIndex: Wr
  }, t));
}
var ie, pt, ke, lt, Na, fu, ct, ea, Ri, mn, nl, Wr, Oo, Lt, ki = !1, bu = !1, _u = [], Ta, Pn, id, sd, Rv, jv, $s, Ti, rl, al = !1, No = !1, du, Ut, ld = [], Md = !1, Su = [], Mu = typeof document < "u", Do = Wd, zv = ol || wr ? "cssFloat" : "float", QS = Mu && !S0 && !Wd && "draggable" in document.createElement("div"), N0 = (function() {
  if (Mu) {
    if (wr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), D0 = function(r, a) {
  var s = Te(r), o = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Ii(r, 0, a), f = Ii(r, 1, a), p = u && Te(u), h = f && Te(f), g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + xt(u).width, y = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + xt(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var _ = p.float === "left" ? "left" : "right";
    return f && (h.clear === "both" || h.clear === _) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || g >= o && s[zv] === "none" || f && s[zv] === "none" && g + y > o) ? "vertical" : "horizontal";
}, JS = function(r, a, s) {
  var o = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, p = s ? a.left : a.top, h = s ? a.right : a.bottom, g = s ? a.width : a.height;
  return o === p || u === h || o + f / 2 === p + g / 2;
}, KS = function(r, a) {
  var s;
  return _u.some(function(o) {
    var u = o[nn].options.emptyInsertThreshold;
    if (!(!u || eh(o))) {
      var f = xt(o), p = r >= f.left - u && r <= f.right + u, h = a >= f.top - u && a <= f.bottom + u;
      if (p && h)
        return s = o;
    }
  }), s;
}, M0 = function(r) {
  function a(u, f) {
    return function(p, h, g, y) {
      var _ = p.options.group.name && h.options.group.name && p.options.group.name === h.options.group.name;
      if (u == null && (f || _))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (f && u === "clone")
        return u;
      if (typeof u == "function")
        return a(u(p, h, g, y), f)(p, h, g, y);
      var b = (f ? p : h).options.group.name;
      return u === !0 || typeof u == "string" && u === b || u.join && u.indexOf(b) > -1;
    };
  }
  var s = {}, o = r.group;
  (!o || cu(o) != "object") && (o = {
    name: o
  }), s.name = o.name, s.checkPull = a(o.pull, !0), s.checkPut = a(o.put), s.revertClone = o.revertClone, r.group = s;
}, k0 = function() {
  !N0 && ke && Te(ke, "display", "none");
}, R0 = function() {
  !N0 && ke && Te(ke, "display", "");
};
Mu && !S0 && document.addEventListener("click", function(t) {
  if (bu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), bu = !1, !1;
}, !0);
var Oa = function(r) {
  if (ie) {
    r = r.touches ? r.touches[0] : r;
    var a = KS(r.clientX, r.clientY);
    if (a) {
      var s = {};
      for (var o in r)
        r.hasOwnProperty(o) && (s[o] = r[o]);
      s.target = s.rootEl = a, s.preventDefault = void 0, s.stopPropagation = void 0, a[nn]._onDragOver(s);
    }
  }
}, WS = function(r) {
  ie && ie.parentNode[nn]._isOutsideThisEl(r.target);
};
function Oe(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = Cr({}, r), t[nn] = this;
  var a = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return D0(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(f, p) {
      f.setData("Text", p.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: Oe.supportPointer !== !1 && "PointerEvent" in window && (!el || Wd),
    emptyInsertThreshold: 5
  };
  ul.initializePlugins(this, t, a);
  for (var s in a)
    !(s in r) && (r[s] = a[s]);
  M0(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : QS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Fe(t, "pointerdown", this._onTapStart) : (Fe(t, "mousedown", this._onTapStart), Fe(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Fe(t, "dragover", this), Fe(t, "dragenter", this)), _u.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Cr(this, GS());
}
Oe.prototype = /** @lends Sortable.prototype */
{
  constructor: Oe,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ti = null);
  },
  _getDirection: function(r, a) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, a, ie) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var a = this, s = this.el, o = this.options, u = o.preventOnFilter, f = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, h = (p || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || h, y = o.filter;
      if (lx(s), !ie && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || o.disabled) && !g.isContentEditable && !(!this.nativeDraggable && el && h && h.tagName.toUpperCase() === "SELECT") && (h = Bn(h, o.draggable, s, !1), !(h && h.animated) && fu !== h)) {
        if (Ri = Dn(h), nl = Dn(h, o.draggable), typeof y == "function") {
          if (y.call(this, r, h, this)) {
            Gt({
              sortable: a,
              rootEl: g,
              name: "filter",
              targetEl: h,
              toEl: s,
              fromEl: s
            }), en("filter", a, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (y && (y = y.split(",").some(function(_) {
          if (_ = Bn(g, _.trim(), s, !1), _)
            return Gt({
              sortable: a,
              rootEl: _,
              name: "filter",
              targetEl: h,
              fromEl: s,
              toEl: s
            }), en("filter", a, {
              evt: r
            }), !0;
        }), y)) {
          u && r.preventDefault();
          return;
        }
        o.handle && !Bn(g, o.handle, s, !1) || this._prepareDragStart(r, p, h);
      }
    }
  },
  _prepareDragStart: function(r, a, s) {
    var o = this, u = o.el, f = o.options, p = u.ownerDocument, h;
    if (s && !ie && s.parentNode === u) {
      var g = xt(s);
      if (lt = u, ie = s, pt = ie.parentNode, Na = ie.nextSibling, fu = s, Oo = f.group, Oe.dragged = ie, Ta = {
        target: ie,
        clientX: (a || r).clientX,
        clientY: (a || r).clientY
      }, Rv = Ta.clientX - g.left, jv = Ta.clientY - g.top, this._lastX = (a || r).clientX, this._lastY = (a || r).clientY, ie.style["will-change"] = "all", h = function() {
        if (en("delayEnded", o, {
          evt: r
        }), Oe.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !Nv && o.nativeDraggable && (ie.draggable = !0), o._triggerDragStart(r, a), Gt({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), pn(ie, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(y) {
        C0(ie, y.trim(), od);
      }), Fe(p, "dragover", Oa), Fe(p, "mousemove", Oa), Fe(p, "touchmove", Oa), f.supportPointer ? (Fe(p, "pointerup", o._onDrop), !this.nativeDraggable && Fe(p, "pointercancel", o._onDrop)) : (Fe(p, "mouseup", o._onDrop), Fe(p, "touchend", o._onDrop), Fe(p, "touchcancel", o._onDrop)), Nv && this.nativeDraggable && (this.options.touchStartThreshold = 4, ie.draggable = !0), en("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || a) && (!this.nativeDraggable || !(ol || wr))) {
        if (Oe.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (Fe(p, "pointerup", o._disableDelayedDrag), Fe(p, "pointercancel", o._disableDelayedDrag)) : (Fe(p, "mouseup", o._disableDelayedDrag), Fe(p, "touchend", o._disableDelayedDrag), Fe(p, "touchcancel", o._disableDelayedDrag)), Fe(p, "mousemove", o._delayedDragTouchMoveHandler), Fe(p, "touchmove", o._delayedDragTouchMoveHandler), f.supportPointer && Fe(p, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(h, f.delay);
      } else
        h();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var a = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ie && od(ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    qe(r, "mouseup", this._disableDelayedDrag), qe(r, "touchend", this._disableDelayedDrag), qe(r, "touchcancel", this._disableDelayedDrag), qe(r, "pointerup", this._disableDelayedDrag), qe(r, "pointercancel", this._disableDelayedDrag), qe(r, "mousemove", this._delayedDragTouchMoveHandler), qe(r, "touchmove", this._delayedDragTouchMoveHandler), qe(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, a) {
    a = a || r.pointerType == "touch" && r, !this.nativeDraggable || a ? this.options.supportPointer ? Fe(document, "pointermove", this._onTouchMove) : a ? Fe(document, "touchmove", this._onTouchMove) : Fe(document, "mousemove", this._onTouchMove) : (Fe(ie, "dragend", this), Fe(lt, "dragstart", this._onDragStart));
    try {
      document.selection ? hu(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, a) {
    if (ki = !1, lt && ie) {
      en("dragStarted", this, {
        evt: a
      }), this.nativeDraggable && Fe(document, "dragover", WS);
      var s = this.options;
      !r && pn(ie, s.dragClass, !1), pn(ie, s.ghostClass, !0), Oe.active = this, r && this._appendGhost(), Gt({
        sortable: this,
        name: "start",
        originalEvent: a
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Pn) {
      this._lastX = Pn.clientX, this._lastY = Pn.clientY, k0();
      for (var r = document.elementFromPoint(Pn.clientX, Pn.clientY), a = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Pn.clientX, Pn.clientY), r !== a); )
        a = r;
      if (ie.parentNode[nn]._isOutsideThisEl(r), a)
        do {
          if (a[nn]) {
            var s = void 0;
            if (s = a[nn]._onDragOver({
              clientX: Pn.clientX,
              clientY: Pn.clientY,
              target: r,
              rootEl: a
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = a;
        } while (a = E0(a));
      R0();
    }
  },
  _onTouchMove: function(r) {
    if (Ta) {
      var a = this.options, s = a.fallbackTolerance, o = a.fallbackOffset, u = r.touches ? r.touches[0] : r, f = ke && zi(ke, !0), p = ke && f && f.a, h = ke && f && f.d, g = Do && Ut && kv(Ut), y = (u.clientX - Ta.clientX + o.x) / (p || 1) + (g ? g[0] - ld[0] : 0) / (p || 1), _ = (u.clientY - Ta.clientY + o.y) / (h || 1) + (g ? g[1] - ld[1] : 0) / (h || 1);
      if (!Oe.active && !ki) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (ke) {
        f ? (f.e += y - (id || 0), f.f += _ - (sd || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: y,
          f: _
        };
        var b = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        Te(ke, "webkitTransform", b), Te(ke, "mozTransform", b), Te(ke, "msTransform", b), Te(ke, "transform", b), id = y, sd = _, Pn = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ke) {
      var r = this.options.fallbackOnBody ? document.body : lt, a = xt(ie, !0, Do, !0, r), s = this.options;
      if (Do) {
        for (Ut = r; Te(Ut, "position") === "static" && Te(Ut, "transform") === "none" && Ut !== document; )
          Ut = Ut.parentNode;
        Ut !== document.body && Ut !== document.documentElement ? (Ut === document && (Ut = Wn()), a.top += Ut.scrollTop, a.left += Ut.scrollLeft) : Ut = Wn(), ld = kv(Ut);
      }
      ke = ie.cloneNode(!0), pn(ke, s.ghostClass, !1), pn(ke, s.fallbackClass, !0), pn(ke, s.dragClass, !0), Te(ke, "transition", ""), Te(ke, "transform", ""), Te(ke, "box-sizing", "border-box"), Te(ke, "margin", 0), Te(ke, "top", a.top), Te(ke, "left", a.left), Te(ke, "width", a.width), Te(ke, "height", a.height), Te(ke, "opacity", "0.8"), Te(ke, "position", Do ? "absolute" : "fixed"), Te(ke, "zIndex", "100000"), Te(ke, "pointerEvents", "none"), Oe.ghost = ke, r.appendChild(ke), Te(ke, "transform-origin", Rv / parseInt(ke.style.width) * 100 + "% " + jv / parseInt(ke.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, a) {
    var s = this, o = r.dataTransfer, u = s.options;
    if (en("dragStart", this, {
      evt: r
    }), Oe.eventCanceled) {
      this._onDrop();
      return;
    }
    en("setupClone", this), Oe.eventCanceled || (ct = T0(ie), ct.removeAttribute("id"), ct.draggable = !1, ct.style["will-change"] = "", this._hideClone(), pn(ct, this.options.chosenClass, !1), Oe.clone = ct), s.cloneId = hu(function() {
      en("clone", s), !Oe.eventCanceled && (s.options.removeCloneOnHide || lt.insertBefore(ct, ie), s._hideClone(), Gt({
        sortable: s,
        name: "clone"
      }));
    }), !a && pn(ie, u.dragClass, !0), a ? (bu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (qe(document, "mouseup", s._onDrop), qe(document, "touchend", s._onDrop), qe(document, "touchcancel", s._onDrop), o && (o.effectAllowed = "move", u.setData && u.setData.call(s, o, ie)), Fe(document, "drop", s), Te(ie, "transform", "translateZ(0)")), ki = !0, s._dragStartId = hu(s._dragStarted.bind(s, a, r)), Fe(document, "selectstart", s), $s = !0, window.getSelection().removeAllRanges(), el && Te(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var a = this.el, s = r.target, o, u, f, p = this.options, h = p.group, g = Oe.active, y = Oo === h, _ = p.sort, b = Lt || g, v, d = this, S = !1;
    if (Md) return;
    function E(ue, Le) {
      en(ue, d, er({
        evt: r,
        isOwner: y,
        axis: v ? "vertical" : "horizontal",
        revert: f,
        dragRect: o,
        targetRect: u,
        canSort: _,
        fromSortable: b,
        target: s,
        completed: w,
        onMove: function(J, ae) {
          return Mo(lt, a, ie, o, J, xt(J), r, ae);
        },
        changed: D
      }, Le));
    }
    function O() {
      E("dragOverAnimationCapture"), d.captureAnimationState(), d !== b && b.captureAnimationState();
    }
    function w(ue) {
      return E("dragOverCompleted", {
        insertion: ue
      }), ue && (y ? g._hideClone() : g._showClone(d), d !== b && (pn(ie, Lt ? Lt.options.ghostClass : g.options.ghostClass, !1), pn(ie, p.ghostClass, !0)), Lt !== d && d !== Oe.active ? Lt = d : d === Oe.active && Lt && (Lt = null), b === d && (d._ignoreWhileAnimating = s), d.animateAll(function() {
        E("dragOverAnimationComplete"), d._ignoreWhileAnimating = null;
      }), d !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (s === ie && !ie.animated || s === a && !s.animated) && (Ti = null), !p.dragoverBubble && !r.rootEl && s !== document && (ie.parentNode[nn]._isOutsideThisEl(r.target), !ue && Oa(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), S = !0;
    }
    function D() {
      mn = Dn(ie), Wr = Dn(ie, p.draggable), Gt({
        sortable: d,
        name: "change",
        toEl: a,
        newIndex: mn,
        newDraggableIndex: Wr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Bn(s, p.draggable, a, !0), E("dragOver"), Oe.eventCanceled) return S;
    if (ie.contains(r.target) || s.animated && s.animatingX && s.animatingY || d._ignoreWhileAnimating === s)
      return w(!1);
    if (bu = !1, g && !p.disabled && (y ? _ || (f = pt !== lt) : Lt === this || (this.lastPutMode = Oo.checkPull(this, g, ie, r)) && h.checkPut(this, g, ie, r))) {
      if (v = this._getDirection(r, s) === "vertical", o = xt(ie), E("dragOverValid"), Oe.eventCanceled) return S;
      if (f)
        return pt = lt, O(), this._hideClone(), E("revert"), Oe.eventCanceled || (Na ? lt.insertBefore(ie, Na) : lt.appendChild(ie)), w(!0);
      var x = eh(a, p.draggable);
      if (!x || rx(r, v, this) && !x.animated) {
        if (x === ie)
          return w(!1);
        if (x && a === r.target && (s = x), s && (u = xt(s)), Mo(lt, a, ie, o, s, u, r, !!s) !== !1)
          return O(), x && x.nextSibling ? a.insertBefore(ie, x.nextSibling) : a.appendChild(ie), pt = a, D(), w(!0);
      } else if (x && nx(r, v, this)) {
        var A = Ii(a, 0, p, !0);
        if (A === ie)
          return w(!1);
        if (s = A, u = xt(s), Mo(lt, a, ie, o, s, u, r, !1) !== !1)
          return O(), a.insertBefore(ie, A), pt = a, D(), w(!0);
      } else if (s.parentNode === a) {
        u = xt(s);
        var M = 0, k, P = ie.parentNode !== a, X = !JS(ie.animated && ie.toRect || o, s.animated && s.toRect || u, v), U = v ? "top" : "left", G = Mv(s, "top", "top") || Mv(ie, "top", "top"), Q = G ? G.scrollTop : void 0;
        Ti !== s && (k = u[U], al = !1, No = !X && p.invertSwap || P), M = ax(r, s, u, v, X ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, No, Ti === s);
        var oe;
        if (M !== 0) {
          var fe = Dn(ie);
          do
            fe -= M, oe = pt.children[fe];
          while (oe && (Te(oe, "display") === "none" || oe === ke));
        }
        if (M === 0 || oe === s)
          return w(!1);
        Ti = s, rl = M;
        var Ee = s.nextElementSibling, H = !1;
        H = M === 1;
        var te = Mo(lt, a, ie, o, s, u, r, H);
        if (te !== !1)
          return (te === 1 || te === -1) && (H = te === 1), Md = !0, setTimeout(tx, 30), O(), H && !Ee ? a.appendChild(ie) : s.parentNode.insertBefore(ie, H ? Ee : s), G && A0(G, 0, Q - G.scrollTop), pt = ie.parentNode, k !== void 0 && !No && (du = Math.abs(k - xt(s)[U])), D(), w(!0);
      }
      if (a.contains(ie))
        return w(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    qe(document, "mousemove", this._onTouchMove), qe(document, "touchmove", this._onTouchMove), qe(document, "pointermove", this._onTouchMove), qe(document, "dragover", Oa), qe(document, "mousemove", Oa), qe(document, "touchmove", Oa);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    qe(r, "mouseup", this._onDrop), qe(r, "touchend", this._onDrop), qe(r, "pointerup", this._onDrop), qe(r, "pointercancel", this._onDrop), qe(r, "touchcancel", this._onDrop), qe(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var a = this.el, s = this.options;
    if (mn = Dn(ie), Wr = Dn(ie, s.draggable), en("drop", this, {
      evt: r
    }), pt = ie && ie.parentNode, mn = Dn(ie), Wr = Dn(ie, s.draggable), Oe.eventCanceled) {
      this._nulling();
      return;
    }
    ki = !1, No = !1, al = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), kd(this.cloneId), kd(this._dragStartId), this.nativeDraggable && (qe(document, "drop", this), qe(a, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), el && Te(document.body, "user-select", ""), Te(ie, "transform", ""), r && ($s && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), ke && ke.parentNode && ke.parentNode.removeChild(ke), (lt === pt || Lt && Lt.lastPutMode !== "clone") && ct && ct.parentNode && ct.parentNode.removeChild(ct), ie && (this.nativeDraggable && qe(ie, "dragend", this), od(ie), ie.style["will-change"] = "", $s && !ki && pn(ie, Lt ? Lt.options.ghostClass : this.options.ghostClass, !1), pn(ie, this.options.chosenClass, !1), Gt({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), lt !== pt ? (mn >= 0 && (Gt({
      rootEl: pt,
      name: "add",
      toEl: pt,
      fromEl: lt,
      originalEvent: r
    }), Gt({
      sortable: this,
      name: "remove",
      toEl: pt,
      originalEvent: r
    }), Gt({
      rootEl: pt,
      name: "sort",
      toEl: pt,
      fromEl: lt,
      originalEvent: r
    }), Gt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Lt && Lt.save()) : mn !== Ri && mn >= 0 && (Gt({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Gt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Oe.active && ((mn == null || mn === -1) && (mn = Ri, Wr = nl), Gt({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    en("nulling", this), lt = ie = pt = ke = Na = ct = fu = ea = Ta = Pn = $s = mn = Wr = Ri = nl = Ti = rl = Lt = Oo = Oe.dragged = Oe.ghost = Oe.clone = Oe.active = null, Su.forEach(function(r) {
      r.checked = !0;
    }), Su.length = id = sd = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        ie && (this._onDragOver(r), ex(r));
        break;
      case "selectstart":
        r.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var r = [], a, s = this.el.children, o = 0, u = s.length, f = this.options; o < u; o++)
      a = s[o], Bn(a, f.draggable, this.el, !1) && r.push(a.getAttribute(f.dataIdAttr) || sx(a));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, a) {
    var s = {}, o = this.el;
    this.toArray().forEach(function(u, f) {
      var p = o.children[f];
      Bn(p, this.options.draggable, o, !1) && (s[u] = p);
    }, this), a && this.captureAnimationState(), r.forEach(function(u) {
      s[u] && (o.removeChild(s[u]), o.appendChild(s[u]));
    }), a && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var r = this.options.store;
    r && r.set && r.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(r, a) {
    return Bn(r, a || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(r, a) {
    var s = this.options;
    if (a === void 0)
      return s[r];
    var o = ul.modifyOption(this, r, a);
    typeof o < "u" ? s[r] = o : s[r] = a, r === "group" && M0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    en("destroy", this);
    var r = this.el;
    r[nn] = null, qe(r, "mousedown", this._onTapStart), qe(r, "touchstart", this._onTapStart), qe(r, "pointerdown", this._onTapStart), this.nativeDraggable && (qe(r, "dragover", this), qe(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(a) {
      a.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), _u.splice(_u.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ea) {
      if (en("hideClone", this), Oe.eventCanceled) return;
      Te(ct, "display", "none"), this.options.removeCloneOnHide && ct.parentNode && ct.parentNode.removeChild(ct), ea = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ea) {
      if (en("showClone", this), Oe.eventCanceled) return;
      ie.parentNode == lt && !this.options.group.revertClone ? lt.insertBefore(ct, ie) : Na ? lt.insertBefore(ct, Na) : lt.appendChild(ct), this.options.group.revertClone && this.animate(ie, ct), Te(ct, "display", ""), ea = !1;
    }
  }
};
function ex(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Mo(t, r, a, s, o, u, f, p) {
  var h, g = t[nn], y = g.options.onMove, _;
  return window.CustomEvent && !wr && !ol ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = r, h.from = t, h.dragged = a, h.draggedRect = s, h.related = o || r, h.relatedRect = u || xt(r), h.willInsertAfter = p, h.originalEvent = f, t.dispatchEvent(h), y && (_ = y.call(g, h, f)), _;
}
function od(t) {
  t.draggable = !1;
}
function tx() {
  Md = !1;
}
function nx(t, r, a) {
  var s = xt(Ii(a.el, 0, a.options, !0)), o = O0(a.el, a.options, ke), u = 10;
  return r ? t.clientX < o.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < o.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function rx(t, r, a) {
  var s = xt(eh(a.el, a.options.draggable)), o = O0(a.el, a.options, ke), u = 10;
  return r ? t.clientX > o.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > o.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function ax(t, r, a, s, o, u, f, p) {
  var h = s ? t.clientY : t.clientX, g = s ? a.height : a.width, y = s ? a.top : a.left, _ = s ? a.bottom : a.right, b = !1;
  if (!f) {
    if (p && du < g * o) {
      if (!al && (rl === 1 ? h > y + g * u / 2 : h < _ - g * u / 2) && (al = !0), al)
        b = !0;
      else if (rl === 1 ? h < y + du : h > _ - du)
        return -rl;
    } else if (h > y + g * (1 - o) / 2 && h < _ - g * (1 - o) / 2)
      return ix(r);
  }
  return b = b || f, b && (h < y + g * u / 2 || h > _ - g * u / 2) ? h > y + g / 2 ? 1 : -1 : 0;
}
function ix(t) {
  return Dn(ie) < Dn(t) ? 1 : -1;
}
function sx(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, a = r.length, s = 0; a--; )
    s += r.charCodeAt(a);
  return s.toString(36);
}
function lx(t) {
  Su.length = 0;
  for (var r = t.getElementsByTagName("input"), a = r.length; a--; ) {
    var s = r[a];
    s.checked && Su.push(s);
  }
}
function hu(t) {
  return setTimeout(t, 0);
}
function kd(t) {
  return clearTimeout(t);
}
Mu && Fe(document, "touchmove", function(t) {
  (Oe.active || ki) && t.cancelable && t.preventDefault();
});
Oe.utils = {
  on: Fe,
  off: qe,
  css: Te,
  find: C0,
  is: function(r, a) {
    return !!Bn(r, a, r, !1);
  },
  extend: FS,
  throttle: w0,
  closest: Bn,
  toggleClass: pn,
  clone: T0,
  index: Dn,
  nextTick: hu,
  cancelNextTick: kd,
  detectDirection: D0,
  getChild: Ii,
  expando: nn
};
Oe.get = function(t) {
  return t[nn];
};
Oe.mount = function() {
  for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
    r[a] = arguments[a];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (Oe.utils = er(er({}, Oe.utils), s.utils)), ul.mount(s);
  });
};
Oe.create = function(t, r) {
  return new Oe(t, r);
};
Oe.version = HS;
var St = [], Qs, Rd, jd = !1, ud, cd, xu, Js;
function ox() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var r in this)
      r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  }
  return t.prototype = {
    dragStarted: function(a) {
      var s = a.originalEvent;
      this.sortable.nativeDraggable ? Fe(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Fe(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Fe(document, "touchmove", this._handleFallbackAutoScroll) : Fe(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(a) {
      var s = a.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? qe(document, "dragover", this._handleAutoScroll) : (qe(document, "pointermove", this._handleFallbackAutoScroll), qe(document, "touchmove", this._handleFallbackAutoScroll), qe(document, "mousemove", this._handleFallbackAutoScroll)), Lv(), pu(), ZS();
    },
    nulling: function() {
      xu = Rd = Qs = jd = Js = ud = cd = null, St.length = 0;
    },
    _handleFallbackAutoScroll: function(a) {
      this._handleAutoScroll(a, !0);
    },
    _handleAutoScroll: function(a, s) {
      var o = this, u = (a.touches ? a.touches[0] : a).clientX, f = (a.touches ? a.touches[0] : a).clientY, p = document.elementFromPoint(u, f);
      if (xu = a, s || this.options.forceAutoScrollFallback || ol || wr || el) {
        fd(a, this.options, p, s);
        var h = ta(p, !0);
        jd && (!Js || u !== ud || f !== cd) && (Js && Lv(), Js = setInterval(function() {
          var g = ta(document.elementFromPoint(u, f), !0);
          g !== h && (h = g, pu()), fd(a, o.options, g, s);
        }, 10), ud = u, cd = f);
      } else {
        if (!this.options.bubbleScroll || ta(p, !0) === Wn()) {
          pu();
          return;
        }
        fd(a, this.options, ta(p, !1), !1);
      }
    }
  }, Cr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function pu() {
  St.forEach(function(t) {
    clearInterval(t.pid);
  }), St = [];
}
function Lv() {
  clearInterval(Js);
}
var fd = w0(function(t, r, a, s) {
  if (r.scroll) {
    var o = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, p = r.scrollSpeed, h = Wn(), g = !1, y;
    Rd !== a && (Rd = a, pu(), Qs = r.scroll, y = r.scrollFn, Qs === !0 && (Qs = ta(a, !0)));
    var _ = 0, b = Qs;
    do {
      var v = b, d = xt(v), S = d.top, E = d.bottom, O = d.left, w = d.right, D = d.width, x = d.height, A = void 0, M = void 0, k = v.scrollWidth, P = v.scrollHeight, X = Te(v), U = v.scrollLeft, G = v.scrollTop;
      v === h ? (A = D < k && (X.overflowX === "auto" || X.overflowX === "scroll" || X.overflowX === "visible"), M = x < P && (X.overflowY === "auto" || X.overflowY === "scroll" || X.overflowY === "visible")) : (A = D < k && (X.overflowX === "auto" || X.overflowX === "scroll"), M = x < P && (X.overflowY === "auto" || X.overflowY === "scroll"));
      var Q = A && (Math.abs(w - o) <= f && U + D < k) - (Math.abs(O - o) <= f && !!U), oe = M && (Math.abs(E - u) <= f && G + x < P) - (Math.abs(S - u) <= f && !!G);
      if (!St[_])
        for (var fe = 0; fe <= _; fe++)
          St[fe] || (St[fe] = {});
      (St[_].vx != Q || St[_].vy != oe || St[_].el !== v) && (St[_].el = v, St[_].vx = Q, St[_].vy = oe, clearInterval(St[_].pid), (Q != 0 || oe != 0) && (g = !0, St[_].pid = setInterval((function() {
        s && this.layer === 0 && Oe.active._onTouchMove(xu);
        var Ee = St[this.layer].vy ? St[this.layer].vy * p : 0, H = St[this.layer].vx ? St[this.layer].vx * p : 0;
        typeof y == "function" && y.call(Oe.dragged.parentNode[nn], H, Ee, t, xu, St[this.layer].el) !== "continue" || A0(St[this.layer].el, H, Ee);
      }).bind({
        layer: _
      }), 24))), _++;
    } while (r.bubbleScroll && b !== h && (b = ta(b, !1)));
    jd = g;
  }
}, 30), j0 = function(r) {
  var a = r.originalEvent, s = r.putSortable, o = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, p = r.hideGhostForTarget, h = r.unhideGhostForTarget;
  if (a) {
    var g = s || u;
    p();
    var y = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, _ = document.elementFromPoint(y.clientX, y.clientY);
    h(), g && !g.el.contains(_) && (f("spill"), this.onSpill({
      dragEl: o,
      putSortable: s
    }));
  }
};
function th() {
}
th.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var a = r.oldDraggableIndex;
    this.startIndex = a;
  },
  onSpill: function(r) {
    var a = r.dragEl, s = r.putSortable;
    this.sortable.captureAnimationState(), s && s.captureAnimationState();
    var o = Ii(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(a, o) : this.sortable.el.appendChild(a), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: j0
};
Cr(th, {
  pluginName: "revertOnSpill"
});
function nh() {
}
nh.prototype = {
  onSpill: function(r) {
    var a = r.dragEl, s = r.putSortable, o = s || this.sortable;
    o.captureAnimationState(), a.parentNode && a.parentNode.removeChild(a), o.animateAll();
  },
  drop: j0
};
Cr(nh, {
  pluginName: "removeOnSpill"
});
Oe.mount(new ox());
Oe.mount(nh, th);
async function ux({
  entry: t,
  selectedWorldName: r,
  skipSave: a = !1,
  skipReload: s = !1,
  operation: o = "auto"
}) {
  const u = SillyTavern.getContext(), f = await u.loadWorldInfo(r);
  if (!f)
    throw new Error("Failed to load world info");
  const p = Object.values(f.entries), h = p.length > 0 ? p[p.length - 1] : void 0;
  let g;
  if (o === "update" || o === "auto") {
    const _ = Object.values(f.entries).find((b) => b.uid === t.uid);
    if (_)
      (o === "auto" || o === "update") && (g = _);
    else if (o === "update")
      throw new Error("Entry not found for update operation");
  }
  const y = g ? "update" : "add";
  if (!g) {
    if (g = RS(r, f), !g)
      throw new Error("Failed to create entry");
    if (h) {
      const _ = g.uid;
      Object.assign(g, h), g.uid = _;
    }
  }
  return g.key = t.key, g.content = t.content, g.comment = t.comment, a || await u.saveWorldInfo(r, f), s || u.reloadWorldInfoEditor(r, !0), {
    entry: g,
    operation: y
  };
}
const zd = `=======

A character card is the blueprint for your AI. Its purpose is to provide a clear, consistent, and compelling set of instructions that guide the AI's personality, behavior, and speech. A well-crafted card is the difference between a forgettable bot and an immersive, believable character.

This guide is structured into two parts:
1.  **Core Identity:** The essential fields that define who your character is.
2.  **Interaction & Context:** The fields that define how the user will interact with them.

---

### Part 1: Core Identity - Defining Who The Character Is

These fields build the foundation of your character's being.

#### 1. Name
The character's primary identifier. It sets the first impression.

*   **Purpose**: To give the AI and user a clear reference point.
*   **Best Practices**:
    *   **Be Evocative**: A name like "Sergeant Rex 'Ironclad' Jones" tells a story. "Bob" does not.
    *   **Prioritize Clarity**: Avoid names that are difficult to spell or pronounce, as the AI may misuse them.
*   **Example**:
    *   **Strong**: "Kaelen, the Whisperwood Scout"
    *   **Weak**: "Xy'zth'gor"

#### 2. Description (The "At-a-Glance" Summary)
This is a concise paragraph that gives the AI a holistic "mental image" of the character. It should blend their most critical physical and personality traits into a single snapshot.

*   **Purpose**: To provide a quick, high-level summary the AI can reference for appearance, demeanor, and key details.
*   **Structure**:
    1.  **Appearance**: Start with their most defining physical features.
    2.  **Demeanor**: Describe their general personality and how they carry themselves.
    3.  **A Key Quirk**: End with a unique detail that makes them memorable.
*   **Example**:
    > A tall, graceful woman with bronze hair and startling green eyes, carrying herself with the quiet dignity of a noble and the focused intensity of a warrior. A member of a secretive matriarchal order, she is a master of subtle influence and a formidable political strategist. Though her exterior is composed and serene, she is fiercely protective of those she loves.

#### 3. Personality (The "Rulebook" for Behavior)
While the **Description** is a summary, this field contains direct, explicit instructions for the AI. It defines the character's internal thoughts, motivations, and behavioral rules in detail.

*   **Purpose**: To eliminate ambiguity and give the AI a clear, actionable set of traits to follow.
*   **Best Practices**:
    *   Use clear, declarative sentences to define the character's core rules.
    *   Focus on core motivations, deep-seated fears, and moral alignment.
    *   Avoid contradictions (e.g., describing a character as both "Patient" and "Impulsive") to ensure the AI's behavior remains consistent.
*   **Example**:
    > A supreme pragmatist who believes a functioning society is more important than a moral one. Masterfully manipulative, he remains several steps ahead of allies and enemies alike, viewing people as pieces on a chessboard to be positioned for the city's greater good. He abhors chaos and inefficiency above all else, maintaining a calm, detached, and unnervingly still demeanor that forces others to fill the silence. He never raises his voice, preferring to convey threats with quiet, measured words.

---

### Part 2: Interaction & Context - Setting the Stage

These fields define the environment and the way your character communicates.

#### 4. Scenario (The "Where, When, and Why")
This sets the scene for the interaction, providing the context that frames the roleplay.

*   **Purpose**: To establish the setting, the timeline, and the initial relationship between the character and the user.
*   **What to Include**:
    *   **Location**: Where is the interaction taking place?
    *   **Context**: What is happening?
    *   **Relationship**: How do {{char}} and {{user}} know each other?
*   **Example**:
    > The setting is a grimy, unsupervised slum in a sprawling metropolis, a place where illegal commerce thrives. The sky is the color of a dead television channel. {{char}} is a "console cowboy," a disgraced data thief whose nervous system was damaged as punishment for stealing from an employer. {{user}} is a mysterious mercenary who has tracked {{char}} down to offer a cure in exchange for one last, impossible job.

#### 5. First Message (The Opening Hook)
This is the character's opening line. It's the single most important field for establishing tone, voice, and immediate engagement.

*   **Purpose**: To kick off the roleplay with a compelling hook that embodies the character's personality.
*   **Key Elements**:
    1.  **Action**: Start with a physical action to ground the scene.
    2.  **Dialogue**: Write a line that reveals their personality.
    3.  **A Hook**: End with something that prompts a response.
*   **Example**:
    > *{{char}} calmly watches the spinning ceiling fan, the smoke from his cigarette curling into the stagnant air. He doesn't meet {{user}}'s eyes, instead focusing on the condensation on his glass.* "They're just questions. It's a test, designed to provoke an emotional response. Shall we continue?"

#### 6. Example Dialogue (The Voice & Style Guide)
This is a "style guide" that teaches the AI *how* your character speaks, thinks, and formats their responses.

*   **Purpose**: To provide a clear template for the character's speech patterns, vocabulary, and interaction style.
*   **Structure**:
    *   Use {{user}} and {{char}} to create 2-3 short exchanges.
    *   Showcase a range of emotions.
    *   Mix dialogue with actions (in asterisks) to demonstrate their body language.
*   **Example**:
    \`\`\`
    {{user}}: "What makes you think your plan will work?"
    {{char}}: *A slow, confident smirk spreads across her face as she leans back in her chair, boots resting on the scarred metal desk.* "Because I accounted for every variable. Especially the human one—your greed."

    {{user}}: "I'm not sure I can do this."
    {{char}}: *Her expression softens for a brief moment. She places a reassuring hand on {{user}}'s shoulder, her calloused fingers a surprising comfort.* "Fear is just a signal. It tells you what you need to protect. Now, let's protect it together."
    \`\`\`

#### 7. Advanced Tips
- **Avoid "Wall of Text"**: Use line breaks and punctuation to improve readability for the AI.

=======`, Ld = `{{#if characters}}
## Selected Characters for Context
{{#each characters}}
### {{this.name}}
{{#if this.description}}
#### Description
{{this.description}}
{{/if}}
{{#if this.personality}}
#### Personality
{{this.personality}}
{{/if}}
{{#if this.scenario}}
#### Scenario
{{this.scenario}}
{{/if}}
{{#if this.first_mes}}
#### First Message
{{this.first_mes}}
{{/if}}
{{#if this.mes_example}}
#### Example Dialogue
{{this.mes_example}}
{{/if}}
{{#if this.data.alternate_greetings}}
#### Alternate Greetings
{{#each this.data.alternate_greetings}}
### {{add @index 1}}
{{this}}
{{/each}}
{{/if}}

{{/each}}
{{/if}}`, cx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, fx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, dx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, rh = "{{activeFormatInstructions}}", z0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, L0 = `### {{character.name}}
- **Description:** {{#if character.description}}{{character.description}}{{else}}*Not provided*{{/if}}
- **Personality:** {{#if character.personality}}{{character.personality}}{{else}}*Not provided*{{/if}}
- **Scenario:** {{#if character.scenario}}{{character.scenario}}{{else}}*Not provided*{{/if}}
- **First Message:** {{#if character.first_mes}}{{character.first_mes}}{{else}}*Not provided*{{/if}}
- **Example Dialogue:**
  {{#if character.mes_example}}{{character.mes_example}}{{else}}*Not provided*{{/if}}
- **Alternate Greetings:**
  {{#if character.alternate_greetings}}
  {{#each character.alternate_greetings}}
  **{{add @index 1}}:** {{this}}
  {{/each}}
  {{else}}*Not provided*{{/if}}`, il = `{{#is_not_empty fields}}
=== CURRENT CHARACTER FIELD VALUES ===
{{#is_not_empty fields.core}}
**Core Fields:**
{{#each fields.core as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}

{{#is_not_empty fields.alternate_greetings}}
**Alternate Greetings:**
{{#each fields.alternate_greetings as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}

{{#is_not_empty fields.draft}}
**Draft Fields:**
{{#each fields.draft as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}
{{/is_not_empty}}`, hx = `## User's Persona Description
name: {{user}}
{{persona}}`, ah = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, px = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", mx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", gx = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, P0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", vx = P0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", yx = "[" + P0 + "][" + vx + "]*", bx = new RegExp("^" + yx + "$");
function I0(t, r) {
  const a = [];
  let s = r.exec(t);
  for (; s; ) {
    const o = [];
    o.startIndex = r.lastIndex - s[0].length;
    const u = s.length;
    for (let f = 0; f < u; f++)
      o.push(s[f]);
    a.push(o), s = r.exec(t);
  }
  return a;
}
const ih = function(t) {
  const r = bx.exec(t);
  return !(r === null || typeof r > "u");
};
function _x(t) {
  return typeof t < "u";
}
const Sx = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function B0(t, r) {
  r = Object.assign({}, Sx, r);
  const a = [];
  let s = !1, o = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Iv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let f = u;
      if (u++, t[u] === "!") {
        u = Bv(t, u);
        continue;
      } else {
        let p = !1;
        t[u] === "/" && (p = !0, u++);
        let h = "";
        for (; u < t.length && t[u] !== ">" && t[u] !== " " && t[u] !== "	" && t[u] !== `
` && t[u] !== "\r"; u++)
          h += t[u];
        if (h = h.trim(), h[h.length - 1] === "/" && (h = h.substring(0, h.length - 1), u--), !Nx(h)) {
          let _;
          return h.trim().length === 0 ? _ = "Invalid space after '<'." : _ = "Tag '" + h + "' is an invalid name.", yt("InvalidTag", _, Vt(t, u));
        }
        const g = Cx(t, u);
        if (g === !1)
          return yt("InvalidAttr", "Attributes for '" + h + "' have open quote.", Vt(t, u));
        let y = g.value;
        if (u = g.index, y[y.length - 1] === "/") {
          const _ = u - y.length;
          y = y.substring(0, y.length - 1);
          const b = Uv(y, r);
          if (b === !0)
            s = !0;
          else
            return yt(b.err.code, b.err.msg, Vt(t, _ + b.err.line));
        } else if (p)
          if (g.tagClosed) {
            if (y.trim().length > 0)
              return yt("InvalidTag", "Closing tag '" + h + "' can't have attributes or invalid starting.", Vt(t, f));
            if (a.length === 0)
              return yt("InvalidTag", "Closing tag '" + h + "' has not been opened.", Vt(t, f));
            {
              const _ = a.pop();
              if (h !== _.tagName) {
                let b = Vt(t, _.tagStartPos);
                return yt(
                  "InvalidTag",
                  "Expected closing tag '" + _.tagName + "' (opened in line " + b.line + ", col " + b.col + ") instead of closing tag '" + h + "'.",
                  Vt(t, f)
                );
              }
              a.length == 0 && (o = !0);
            }
          } else return yt("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", Vt(t, u));
        else {
          const _ = Uv(y, r);
          if (_ !== !0)
            return yt(_.err.code, _.err.msg, Vt(t, u - y.length + _.err.line));
          if (o === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", Vt(t, u));
          r.unpairedTags.indexOf(h) !== -1 || a.push({ tagName: h, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = Bv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Iv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const _ = Tx(t, u);
            if (_ == -1)
              return yt("InvalidChar", "char '&' is not expected.", Vt(t, u));
            u = _;
          } else if (o === !0 && !Pv(t[u]))
            return yt("InvalidXml", "Extra text at the end", Vt(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (Pv(t[u]))
        continue;
      return yt("InvalidChar", "char '" + t[u] + "' is not expected.", Vt(t, u));
    }
  if (s) {
    if (a.length == 1)
      return yt("InvalidTag", "Unclosed tag '" + a[0].tagName + "'.", Vt(t, a[0].tagStartPos));
    if (a.length > 0)
      return yt("InvalidXml", "Invalid '" + JSON.stringify(a.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return yt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Pv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Iv(t, r) {
  const a = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(a, r - a);
      if (r > 5 && s === "xml")
        return yt("InvalidXml", "XML declaration allowed only at the start of the document.", Vt(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Bv(t, r) {
  if (t.length > r + 5 && t[r + 1] === "-" && t[r + 2] === "-") {
    for (r += 3; r < t.length; r++)
      if (t[r] === "-" && t[r + 1] === "-" && t[r + 2] === ">") {
        r += 2;
        break;
      }
  } else if (t.length > r + 8 && t[r + 1] === "D" && t[r + 2] === "O" && t[r + 3] === "C" && t[r + 4] === "T" && t[r + 5] === "Y" && t[r + 6] === "P" && t[r + 7] === "E") {
    let a = 1;
    for (r += 8; r < t.length; r++)
      if (t[r] === "<")
        a++;
      else if (t[r] === ">" && (a--, a === 0))
        break;
  } else if (t.length > r + 9 && t[r + 1] === "[" && t[r + 2] === "C" && t[r + 3] === "D" && t[r + 4] === "A" && t[r + 5] === "T" && t[r + 6] === "A" && t[r + 7] === "[") {
    for (r += 8; r < t.length; r++)
      if (t[r] === "]" && t[r + 1] === "]" && t[r + 2] === ">") {
        r += 2;
        break;
      }
  }
  return r;
}
const xx = '"', Ex = "'";
function Cx(t, r) {
  let a = "", s = "", o = !1;
  for (; r < t.length; r++) {
    if (t[r] === xx || t[r] === Ex)
      s === "" ? s = t[r] : s !== t[r] || (s = "");
    else if (t[r] === ">" && s === "") {
      o = !0;
      break;
    }
    a += t[r];
  }
  return s !== "" ? !1 : {
    value: a,
    index: r,
    tagClosed: o
  };
}
const wx = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Uv(t, r) {
  const a = I0(t, wx), s = {};
  for (let o = 0; o < a.length; o++) {
    if (a[o][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + a[o][2] + "' has no space in starting.", Hs(a[o]));
    if (a[o][3] !== void 0 && a[o][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + a[o][2] + "' is without value.", Hs(a[o]));
    if (a[o][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + a[o][2] + "' is not allowed.", Hs(a[o]));
    const u = a[o][2];
    if (!Ox(u))
      return yt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Hs(a[o]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + u + "' is repeated.", Hs(a[o]));
  }
  return !0;
}
function Ax(t, r) {
  let a = /\d/;
  for (t[r] === "x" && (r++, a = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(a))
      break;
  }
  return -1;
}
function Tx(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, Ax(t, r);
  let a = 0;
  for (; r < t.length; r++, a++)
    if (!(t[r].match(/\w/) && a < 20)) {
      if (t[r] === ";")
        break;
      return -1;
    }
  return r;
}
function yt(t, r, a) {
  return {
    err: {
      code: t,
      msg: r,
      line: a.line || a,
      col: a.col
    }
  };
}
function Ox(t) {
  return ih(t);
}
function Nx(t) {
  return ih(t);
}
function Vt(t, r) {
  const a = t.substring(0, r).split(/\r?\n/);
  return {
    line: a.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: a[a.length - 1].length + 1
  };
}
function Hs(t) {
  return t.startIndex + t[1].length;
}
const Dx = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: !1,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  //Trim string values of tag and attributes
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0
  },
  tagValueProcessor: function(t, r) {
    return r;
  },
  attributeValueProcessor: function(t, r) {
    return r;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function(t, r, a) {
    return t;
  }
  // skipEmptyListItem: false
}, Mx = function(t) {
  return Object.assign({}, Dx, t);
};
class qs {
  constructor(r) {
    this.tagname = r, this.child = [], this[":@"] = {};
  }
  add(r, a) {
    r === "__proto__" && (r = "#__proto__"), this.child.push({ [r]: a });
  }
  addChild(r) {
    r.tagname === "__proto__" && (r.tagname = "#__proto__"), r[":@"] && Object.keys(r[":@"]).length > 0 ? this.child.push({ [r.tagname]: r.child, ":@": r[":@"] }) : this.child.push({ [r.tagname]: r.child });
  }
}
function kx(t, r) {
  const a = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, o = !1, u = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (o && zx(t, r)) {
          r += 7;
          let p, h;
          [p, h, r] = Rx(t, r + 1), h.indexOf("&") === -1 && (a[Bx(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: h
          });
        } else if (o && Lx(t, r)) r += 8;
        else if (o && Px(t, r)) r += 8;
        else if (o && Ix(t, r)) r += 9;
        else if (jx) u = !0;
        else throw new Error("Invalid DOCTYPE");
        s++, f = "";
      } else if (t[r] === ">") {
        if (u ? t[r - 1] === "-" && t[r - 2] === "-" && (u = !1, s--) : s--, s === 0)
          break;
      } else t[r] === "[" ? o = !0 : f += t[r];
    if (s !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: a, i: r };
}
function Rx(t, r) {
  let a = "";
  for (; r < t.length && t[r] !== "'" && t[r] !== '"'; r++)
    a += t[r];
  if (a = a.trim(), a.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const s = t[r++];
  let o = "";
  for (; r < t.length && t[r] !== s; r++)
    o += t[r];
  return [a, o, r];
}
function jx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function zx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function Lx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function Px(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function Ix(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function Bx(t) {
  if (ih(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const Ux = /^[-+]?0x[a-fA-F0-9]+$/, Hx = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, qx = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function Fx(t, r = {}) {
  if (r = Object.assign({}, qx, r), !t || typeof t != "string") return t;
  let a = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(a)) return t;
  if (t === "0") return 0;
  if (r.hex && Ux.test(a))
    return Gx(a, 16);
  if (a.search(/[eE]/) !== -1) {
    const s = a.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (s) {
      if (r.leadingZeros)
        a = (s[1] || "") + s[3];
      else if (!(s[2] === "0" && s[3][0] === ".")) return t;
      return r.eNotation ? Number(a) : t;
    } else
      return t;
  } else {
    const s = Hx.exec(a);
    if (s) {
      const o = s[1], u = s[2];
      let f = Zx(s[3]);
      if (!r.leadingZeros && u.length > 0 && o && a[2] !== ".") return t;
      if (!r.leadingZeros && u.length > 0 && !o && a[1] !== ".") return t;
      if (r.leadingZeros && u === t) return 0;
      {
        const p = Number(a), h = "" + p;
        return h.search(/[eE]/) !== -1 ? r.eNotation ? p : t : a.indexOf(".") !== -1 ? h === "0" && f === "" || h === f || o && h === "-" + f ? p : t : u ? f === h || o + f === h ? p : t : a === h || a === o + h ? p : t;
      }
    } else
      return t;
  }
}
function Zx(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function Gx(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function Vx(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const a of t)
      if (typeof a == "string" && r === a || a instanceof RegExp && a.test(r))
        return !0;
  } : () => !1;
}
class Yx {
  constructor(r) {
    this.options = r, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
      apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
      gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
      lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
      quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
    }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
      space: { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      cent: { regex: /&(cent|#162);/g, val: "¢" },
      pound: { regex: /&(pound|#163);/g, val: "£" },
      yen: { regex: /&(yen|#165);/g, val: "¥" },
      euro: { regex: /&(euro|#8364);/g, val: "€" },
      copyright: { regex: /&(copy|#169);/g, val: "©" },
      reg: { regex: /&(reg|#174);/g, val: "®" },
      inr: { regex: /&(inr|#8377);/g, val: "₹" },
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (a, s) => String.fromCodePoint(Number.parseInt(s, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (a, s) => String.fromCodePoint(Number.parseInt(s, 16)) }
    }, this.addExternalEntities = Xx, this.parseXml = Wx, this.parseTextData = $x, this.resolveNameSpace = Qx, this.buildAttributesMap = Kx, this.isItStopNode = rE, this.replaceEntitiesValue = tE, this.readStopNodeData = iE, this.saveTextToParentTag = nE, this.addChild = eE, this.ignoreAttributesFn = Vx(this.options.ignoreAttributes);
  }
}
function Xx(t) {
  const r = Object.keys(t);
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function $x(t, r, a, s, o, u, f) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const p = this.options.tagValueProcessor(r, t, a, o, u);
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? Id(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Id(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function Qx(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), a = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = a + r[1]);
  }
  return t;
}
const Jx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function Kx(t, r, a) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = I0(t, Jx), o = s.length, u = {};
    for (let f = 0; f < o; f++) {
      const p = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let h = s[f][4], g = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (g = this.options.transformAttributeName(g)), g === "__proto__" && (g = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const y = this.options.attributeValueProcessor(p, h, r);
          y == null ? u[g] = h : typeof y != typeof h || y !== h ? u[g] = y : u[g] = Id(
            h,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (u[g] = !0);
    }
    if (!Object.keys(u).length)
      return;
    if (this.options.attributesGroupName) {
      const f = {};
      return f[this.options.attributesGroupName] = u, f;
    }
    return u;
  }
}
const Wx = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new qs("!xml");
  let a = r, s = "", o = "";
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<")
      if (t[u + 1] === "/") {
        const p = Ra(t, ">", u, "Closing Tag is not closed.");
        let h = t.substring(u + 2, p).trim();
        if (this.options.removeNSPrefix) {
          const _ = h.indexOf(":");
          _ !== -1 && (h = h.substr(_ + 1));
        }
        this.options.transformTagName && (h = this.options.transformTagName(h)), a && (s = this.saveTextToParentTag(s, a, o));
        const g = o.substring(o.lastIndexOf(".") + 1);
        if (h && this.options.unpairedTags.indexOf(h) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${h}>`);
        let y = 0;
        g && this.options.unpairedTags.indexOf(g) !== -1 ? (y = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : y = o.lastIndexOf("."), o = o.substring(0, y), a = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (t[u + 1] === "?") {
        let p = Pd(t, u, !1, "?>");
        if (!p) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, a, o), !(this.options.ignoreDeclaration && p.tagName === "?xml" || this.options.ignorePiTags)) {
          const h = new qs(p.tagName);
          h.add(this.options.textNodeName, ""), p.tagName !== p.tagExp && p.attrExpPresent && (h[":@"] = this.buildAttributesMap(p.tagExp, o, p.tagName)), this.addChild(a, h, o);
        }
        u = p.closeIndex + 1;
      } else if (t.substr(u + 1, 3) === "!--") {
        const p = Ra(t, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const h = t.substring(u + 4, p - 2);
          s = this.saveTextToParentTag(s, a, o), a.add(this.options.commentPropName, [{ [this.options.textNodeName]: h }]);
        }
        u = p;
      } else if (t.substr(u + 1, 2) === "!D") {
        const p = kx(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = Ra(t, "]]>", u, "CDATA is not closed.") - 2, h = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, a, o);
        let g = this.parseTextData(h, a.tagname, o, !0, !1, !0, !0);
        g == null && (g = ""), this.options.cdataPropName ? a.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : a.add(this.options.textNodeName, g), u = p + 2;
      } else {
        let p = Pd(t, u, this.options.removeNSPrefix), h = p.tagName;
        const g = p.rawTagName;
        let y = p.tagExp, _ = p.attrExpPresent, b = p.closeIndex;
        this.options.transformTagName && (h = this.options.transformTagName(h)), a && s && a.tagname !== "!xml" && (s = this.saveTextToParentTag(s, a, o, !1));
        const v = a;
        if (v && this.options.unpairedTags.indexOf(v.tagname) !== -1 && (a = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), h !== r.tagname && (o += o ? "." + h : h), this.isItStopNode(this.options.stopNodes, o, h)) {
          let d = "";
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1)
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), o = o.substr(0, o.length - 1), y = h) : y = y.substr(0, y.length - 1), u = p.closeIndex;
          else if (this.options.unpairedTags.indexOf(h) !== -1)
            u = p.closeIndex;
          else {
            const E = this.readStopNodeData(t, g, b + 1);
            if (!E) throw new Error(`Unexpected end of ${g}`);
            u = E.i, d = E.tagContent;
          }
          const S = new qs(h);
          h !== y && _ && (S[":@"] = this.buildAttributesMap(y, o, h)), d && (d = this.parseTextData(d, h, o, !0, _, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), S.add(this.options.textNodeName, d), this.addChild(a, S, o);
        } else {
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1) {
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), o = o.substr(0, o.length - 1), y = h) : y = y.substr(0, y.length - 1), this.options.transformTagName && (h = this.options.transformTagName(h));
            const d = new qs(h);
            h !== y && _ && (d[":@"] = this.buildAttributesMap(y, o, h)), this.addChild(a, d, o), o = o.substr(0, o.lastIndexOf("."));
          } else {
            const d = new qs(h);
            this.tagsNodeStack.push(a), h !== y && _ && (d[":@"] = this.buildAttributesMap(y, o, h)), this.addChild(a, d, o), a = d;
          }
          s = "", u = b;
        }
      }
    else
      s += t[u];
  return r.child;
};
function eE(t, r, a) {
  const s = this.options.updateTag(r.tagname, a, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const tE = function(t) {
  if (this.options.processEntities) {
    for (let r in this.docTypeEntities) {
      const a = this.docTypeEntities[r];
      t = t.replace(a.regx, a.val);
    }
    for (let r in this.lastEntities) {
      const a = this.lastEntities[r];
      t = t.replace(a.regex, a.val);
    }
    if (this.options.htmlEntities)
      for (let r in this.htmlEntities) {
        const a = this.htmlEntities[r];
        t = t.replace(a.regex, a.val);
      }
    t = t.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return t;
};
function nE(t, r, a, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    a,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function rE(t, r, a) {
  const s = "*." + a;
  for (const o in t) {
    const u = t[o];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function aE(t, r, a = ">") {
  let s, o = "";
  for (let u = r; u < t.length; u++) {
    let f = t[u];
    if (s)
      f === s && (s = "");
    else if (f === '"' || f === "'")
      s = f;
    else if (f === a[0])
      if (a[1]) {
        if (t[u + 1] === a[1])
          return {
            data: o,
            index: u
          };
      } else
        return {
          data: o,
          index: u
        };
    else f === "	" && (f = " ");
    o += f;
  }
}
function Ra(t, r, a, s) {
  const o = t.indexOf(r, a);
  if (o === -1)
    throw new Error(s);
  return o + r.length - 1;
}
function Pd(t, r, a, s = ">") {
  const o = aE(t, r + 1, s);
  if (!o) return;
  let u = o.data;
  const f = o.index, p = u.search(/\s/);
  let h = u, g = !0;
  p !== -1 && (h = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const y = h;
  if (a) {
    const _ = h.indexOf(":");
    _ !== -1 && (h = h.substr(_ + 1), g = h !== o.data.substr(_ + 1));
  }
  return {
    tagName: h,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: g,
    rawTagName: y
  };
}
function iE(t, r, a) {
  const s = a;
  let o = 1;
  for (; a < t.length; a++)
    if (t[a] === "<")
      if (t[a + 1] === "/") {
        const u = Ra(t, ">", a, `${r} is not closed`);
        if (t.substring(a + 2, u).trim() === r && (o--, o === 0))
          return {
            tagContent: t.substring(s, a),
            i: u
          };
        a = u;
      } else if (t[a + 1] === "?")
        a = Ra(t, "?>", a + 1, "StopNode is not closed.");
      else if (t.substr(a + 1, 3) === "!--")
        a = Ra(t, "-->", a + 3, "StopNode is not closed.");
      else if (t.substr(a + 1, 2) === "![")
        a = Ra(t, "]]>", a, "StopNode is not closed.") - 2;
      else {
        const u = Pd(t, a, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && o++, a = u.closeIndex);
      }
}
function Id(t, r, a) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : Fx(t, a);
  } else
    return _x(t) ? t : "";
}
function sE(t, r) {
  return U0(t, r);
}
function U0(t, r, a) {
  let s;
  const o = {};
  for (let u = 0; u < t.length; u++) {
    const f = t[u], p = lE(f);
    let h = "";
    if (a === void 0 ? h = p : h = a + "." + p, p === r.textNodeName)
      s === void 0 ? s = f[p] : s += "" + f[p];
    else {
      if (p === void 0)
        continue;
      if (f[p]) {
        let g = U0(f[p], r, h);
        const y = uE(g, r);
        f[":@"] ? oE(g, f[":@"], h, r) : Object.keys(g).length === 1 && g[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? g = g[r.textNodeName] : Object.keys(g).length === 0 && (r.alwaysCreateTextNode ? g[r.textNodeName] = "" : g = ""), o[p] !== void 0 && o.hasOwnProperty(p) ? (Array.isArray(o[p]) || (o[p] = [o[p]]), o[p].push(g)) : r.isArray(p, h, y) ? o[p] = [g] : o[p] = g;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (o[r.textNodeName] = s) : s !== void 0 && (o[r.textNodeName] = s), o;
}
function lE(t) {
  const r = Object.keys(t);
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (s !== ":@") return s;
  }
}
function oE(t, r, a, s) {
  if (r) {
    const o = Object.keys(r), u = o.length;
    for (let f = 0; f < u; f++) {
      const p = o[f];
      s.isArray(p, a + "." + p, !0, !0) ? t[p] = [r[p]] : t[p] = r[p];
    }
  }
}
function uE(t, r) {
  const { textNodeName: a } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[a] || typeof t[a] == "boolean" || t[a] === 0));
}
class H0 {
  constructor(r) {
    this.externalEntities = {}, this.options = Mx(r);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Buffer} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(r, a) {
    if (typeof r != "string") if (r.toString)
      r = r.toString();
    else
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (a) {
      a === !0 && (a = {});
      const u = B0(r, a);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new Yx(this.options);
    s.addExternalEntities(this.externalEntities);
    const o = s.parseXml(r);
    return this.options.preserveOrder || o === void 0 ? o : sE(o, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(r, a) {
    if (a.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (r.indexOf("&") !== -1 || r.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (a === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[r] = a;
  }
}
const cE = {
  validate: B0
}, fE = new H0({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
}), dE = new H0({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0,
  parseTagValue: !1
});
function Hv(t, r) {
  if (r?.type === "string" && typeof t != "string")
    return String(t);
  if ((r?.type === "integer" || r?.type === "number") && typeof t == "string" && t.trim() !== "") {
    const a = Number(t);
    return Number.isFinite(a) ? a : t;
  }
  return r?.type === "boolean" && (t === "true" || t === "false") ? t === "true" : t;
}
function Bd(t, r) {
  if (!(!r || !t || !r.properties))
    for (const a in r.properties) {
      if (!t.hasOwnProperty(a)) continue;
      const s = r.properties[a];
      let o = t[a];
      s.type === "array" && !Array.isArray(o) && (typeof o == "object" && o !== null && Object.keys(o).length === 1 && "item" in o && !s.items?.properties?.item && (o = o.item), o = Array.isArray(o) ? o : [o]), s.type === "array" && (o = o.filter((u) => u !== ""), t[a] = o), s.type === "object" && typeof o == "object" && o !== null ? Bd(o, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(o) && o.forEach((u) => Bd(u, s.items)), s.type === "array" ? t[a] = o.map((u) => Hv(u, s.items)) : t[a] = Hv(o, s);
    }
}
function hE(t) {
  return t.split(/(<!\[CDATA\[[\s\S]*?\]\]>)/).map((r, a) => a % 2 === 1 ? r : r.replace(/&(?!(?:[a-zA-Z]+|#\d+|#x[0-9a-fA-F]+);)/g, "&amp;")).join("");
}
const sh = /```(?:\w+\n|\n)?([\s\S]*?)```/g, Ks = /<response(?:\s[^>]*)?>/, pE = { "&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"', "&apos;": "'" };
function mE(t) {
  let r = null;
  for (const a of t.matchAll(sh))
    r = a[1].trim();
  return r;
}
function gE(t) {
  const r = t.match(/^```(?:\w+\n|\n)?([\s\S]*?)```$/);
  return r && !r[1].includes("```") ? r[1].trim() : t;
}
function vE(t) {
  const r = (o) => o.replace(/&(?:lt|gt|amp|quot|apos);/g, (u) => pE[u]);
  let a = t.trim().replace(/]]>$/, ""), s = "";
  for (; ; ) {
    const o = a.indexOf("<![CDATA[");
    if (o === -1)
      return s + r(a);
    s += r(a.slice(0, o)), a = a.slice(o + 9);
    const u = a.indexOf("]]>");
    if (u === -1)
      return s + a;
    s += a.slice(0, u), a = a.slice(u + 3);
  }
}
function qv(t) {
  let r = t.search(Ks);
  if (r === -1)
    return null;
  let a = !1, s = -1;
  for (const p of t.matchAll(sh))
    p.index < r && r < p.index + p[0].length && (a = !0), Ks.test(p[1]) && (s = p.index);
  a && s !== -1 && (r = s + t.slice(s).search(Ks));
  const o = r + t.slice(r).match(Ks)[0].length, u = t.lastIndexOf("</response>");
  let f;
  if (u >= o)
    f = t.slice(o, u);
  else {
    f = t.slice(o).trimEnd();
    const p = f.match(/<\/([\w:.-]+)\s*>$/);
    p && !f.includes(`<${p[1]}`) && (f = f.slice(0, p.index));
  }
  return vE(f).trim();
}
function yE(t) {
  let r = t.trimEnd();
  const a = r.match(/(\\*)"\s*}?\s*(?:```)?$/);
  a && a[1].length % 2 === 0 && (r = r.slice(0, a.index + a[1].length)), r = r.replace(/(^|[^\\])((?:\\\\)*)\\(?:u[0-9a-fA-F]{0,3})?$/, "$1$2");
  try {
    const s = r.replace(/[\u0000-\u001f]/g, (o) => JSON.stringify(o).slice(1, -1));
    return JSON.parse(`"${s}"`).trim();
  } catch {
    return r.trim();
  }
}
function na(t) {
  if (t == null)
    return "";
  if (typeof t != "object")
    return String(t).trim();
  if ("#text" in t)
    return na(t["#text"]);
  if ("response" in t)
    return na(t.response);
  if ("message" in t)
    return na(t.message);
  const r = Object.values(t)[0];
  return na(r);
}
function Eu(t, r, a = {}) {
  let o = mE(t) ?? t.trim();
  try {
    switch (r) {
      case "xml":
        if (!a.schema) {
          const p = qv(t);
          if (p !== null) return p;
        }
        if (a.schema) {
          o = hE(o);
          const p = cE.validate(o);
          if (p !== !0)
            throw new Error(`Model response is not valid XML: ${p.err.msg}`);
        }
        let u = (a.schema ? dE : fE).parse(o);
        if (u.root)
          u = u.root;
        else if (u.response)
          return na(u.response);
        return a.schema ? (Bd(u, a.schema), u) : na(u);
      case "json":
        if (!a.schema) {
          const p = t.trim(), h = p.indexOf("{"), g = p.lastIndexOf("}");
          if (h !== -1 && g > h)
            try {
              return na(JSON.parse(p.slice(h, g + 1)));
            } catch {
            }
        }
        const f = JSON.parse(o);
        return a.schema ? f : na(f);
      case "none":
        return gE(t.trim());
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (u) {
    if (r !== "none" && !a.schema) {
      const f = qv(t);
      if (f !== null) return f;
      const p = t.match(/[\s\S]*"response":\s*"([\s\S]*)/);
      if (p) return yE(p[1]);
    }
    throw console.error(`Error parsing response in format '${r}':`, u), console.error("Raw content received:", t), r === "xml" ? u.message.startsWith("Model response is not valid XML:") ? u : new Error(`Model response is not valid XML: ${u.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${u.message}`);
  }
}
function q0(t, r) {
  const a = t.trim();
  switch (r) {
    case "xml":
      return `<response><![CDATA[${a.replaceAll("]]>", "]]]]><![CDATA[>")}`;
    case "json":
      return `{
  "response": ${JSON.stringify(a).slice(0, -1)}`;
    case "none":
      return a;
    default:
      throw new Error(`Unsupported format specified: ${r}`);
  }
}
const Fv = /^\{\s*"response"\s*:/;
function bE(t, r, a) {
  switch (a) {
    case "xml":
      return Ks.test(t);
    case "json":
      return Fv.test(t.trim()) || Array.from(t.matchAll(sh)).some((s) => Fv.test(s[1].trim()));
    case "none":
      return t.trim().startsWith(r);
    default:
      return !1;
  }
}
function _E(t, r) {
  return !t || !r ? "" : /[.!?…"'”’»)\]*]$/.test(t) ? `

` : " ";
}
function SE(t, r, a) {
  const s = t.trim();
  if (!bE(r, s, a)) {
    const u = String(Eu(q0(t, a) + r, a));
    if (u.startsWith(s))
      return u;
  }
  const o = String(Eu(r, a));
  return o.startsWith(s) ? o : s + _E(s, o) + o;
}
var ko = { exports: {} }, Ro = { exports: {} }, In = {}, tn = {}, Zv;
function rn() {
  if (Zv) return tn;
  Zv = 1, tn.__esModule = !0, tn.extend = o, tn.indexOf = h, tn.escapeExpression = g, tn.isEmpty = y, tn.createFrame = _, tn.blockParams = b, tn.appendContextPath = v;
  var t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, a = /[&<>"'`=]/;
  function s(d) {
    return t[d];
  }
  function o(d) {
    for (var S = 1; S < arguments.length; S++)
      for (var E in arguments[S])
        Object.prototype.hasOwnProperty.call(arguments[S], E) && (d[E] = arguments[S][E]);
    return d;
  }
  var u = Object.prototype.toString;
  tn.toString = u;
  var f = function(S) {
    return typeof S == "function";
  };
  f(/x/) && (tn.isFunction = f = function(d) {
    return typeof d == "function" && u.call(d) === "[object Function]";
  }), tn.isFunction = f;
  var p = Array.isArray || function(d) {
    return d && typeof d == "object" ? u.call(d) === "[object Array]" : !1;
  };
  tn.isArray = p;
  function h(d, S) {
    for (var E = 0, O = d.length; E < O; E++)
      if (d[E] === S)
        return E;
    return -1;
  }
  function g(d) {
    if (typeof d != "string") {
      if (d && d.toHTML)
        return d.toHTML();
      if (d == null)
        return "";
      if (!d)
        return d + "";
      d = "" + d;
    }
    return a.test(d) ? d.replace(r, s) : d;
  }
  function y(d) {
    return !d && d !== 0 ? !0 : !!(p(d) && d.length === 0);
  }
  function _(d) {
    var S = o({}, d);
    return S._parent = d, S;
  }
  function b(d, S) {
    return d.path = S, d;
  }
  function v(d, S) {
    return (d ? d + "." : "") + S;
  }
  return tn;
}
var jo = { exports: {} }, Gv;
function Fn() {
  return Gv || (Gv = 1, (function(t, r) {
    r.__esModule = !0;
    var a = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(o, u) {
      var f = u && u.loc, p = void 0, h = void 0, g = void 0, y = void 0;
      f && (p = f.start.line, h = f.end.line, g = f.start.column, y = f.end.column, o += " - " + p + ":" + g);
      for (var _ = Error.prototype.constructor.call(this, o), b = 0; b < a.length; b++)
        this[a[b]] = _[a[b]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        f && (this.lineNumber = p, this.endLineNumber = h, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: g,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: y,
          enumerable: !0
        })) : (this.column = g, this.endColumn = y));
      } catch {
      }
    }
    s.prototype = new Error(), r.default = s, t.exports = r.default;
  })(jo, jo.exports)), jo.exports;
}
var Fs = {}, zo = { exports: {} }, Vv;
function xE() {
  return Vv || (Vv = 1, (function(t, r) {
    r.__esModule = !0;
    var a = rn();
    r.default = function(s) {
      s.registerHelper("blockHelperMissing", function(o, u) {
        var f = u.inverse, p = u.fn;
        if (o === !0)
          return p(this);
        if (o === !1 || o == null)
          return f(this);
        if (a.isArray(o))
          return o.length > 0 ? (u.ids && (u.ids = [u.name]), s.helpers.each(o, u)) : f(this);
        if (u.data && u.ids) {
          var h = a.createFrame(u.data);
          h.contextPath = a.appendContextPath(u.data.contextPath, u.name), u = { data: h };
        }
        return p(o, u);
      });
    }, t.exports = r.default;
  })(zo, zo.exports)), zo.exports;
}
var Lo = { exports: {} }, Yv;
function EE() {
  return Yv || (Yv = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = rn(), o = Fn(), u = a(o);
    r.default = function(f) {
      f.registerHelper("each", function(p, h) {
        if (!h)
          throw new u.default("Must pass iterator to #each");
        var g = h.fn, y = h.inverse, _ = 0, b = "", v = void 0, d = void 0;
        h.data && h.ids && (d = s.appendContextPath(h.data.contextPath, h.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), h.data && (v = s.createFrame(h.data));
        function S(x, A, M) {
          v && (v.key = x, v.index = A, v.first = A === 0, v.last = !!M, d && (v.contextPath = d + x)), b = b + g(p[x], {
            data: v,
            blockParams: s.blockParams([p[x], x], [d + x, null])
          });
        }
        if (p && typeof p == "object")
          if (s.isArray(p))
            for (var E = p.length; _ < E; _++)
              _ in p && S(_, _, _ === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var O = [], w = p[Symbol.iterator](), D = w.next(); !D.done; D = w.next())
              O.push(D.value);
            p = O;
            for (var E = p.length; _ < E; _++)
              S(_, _, _ === p.length - 1);
          } else
            (function() {
              var x = void 0;
              Object.keys(p).forEach(function(A) {
                x !== void 0 && S(x, _ - 1), x = A, _++;
              }), x !== void 0 && S(x, _ - 1, !0);
            })();
        return _ === 0 && (b = y(this)), b;
      });
    }, t.exports = r.default;
  })(Lo, Lo.exports)), Lo.exports;
}
var Po = { exports: {} }, Xv;
function CE() {
  return Xv || (Xv = 1, (function(t, r) {
    r.__esModule = !0;
    function a(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = Fn(), o = a(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(Po, Po.exports)), Po.exports;
}
var Io = { exports: {} }, $v;
function wE() {
  return $v || ($v = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = rn(), o = Fn(), u = a(o);
    r.default = function(f) {
      f.registerHelper("if", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#if requires exactly one argument");
        return s.isFunction(p) && (p = p.call(this)), !h.hash.includeZero && !p || s.isEmpty(p) ? h.inverse(this) : h.fn(this);
      }), f.registerHelper("unless", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#unless requires exactly one argument");
        return f.helpers.if.call(this, p, {
          fn: h.inverse,
          inverse: h.fn,
          hash: h.hash
        });
      });
    }, t.exports = r.default;
  })(Io, Io.exports)), Io.exports;
}
var Bo = { exports: {} }, Qv;
function AE() {
  return Qv || (Qv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(a) {
      a.registerHelper("log", function() {
        for (var s = [void 0], o = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var f = 1;
        o.hash.level != null ? f = o.hash.level : o.data && o.data.level != null && (f = o.data.level), s[0] = f, a.log.apply(a, s);
      });
    }, t.exports = r.default;
  })(Bo, Bo.exports)), Bo.exports;
}
var Uo = { exports: {} }, Jv;
function TE() {
  return Jv || (Jv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(a) {
      a.registerHelper("lookup", function(s, o, u) {
        return s && u.lookupProperty(s, o);
      });
    }, t.exports = r.default;
  })(Uo, Uo.exports)), Uo.exports;
}
var Ho = { exports: {} }, Kv;
function OE() {
  return Kv || (Kv = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = rn(), o = Fn(), u = a(o);
    r.default = function(f) {
      f.registerHelper("with", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(p) && (p = p.call(this));
        var g = h.fn;
        if (s.isEmpty(p))
          return h.inverse(this);
        var y = h.data;
        return h.data && h.ids && (y = s.createFrame(h.data), y.contextPath = s.appendContextPath(h.data.contextPath, h.ids[0])), g(p, {
          data: y,
          blockParams: s.blockParams([p], [y && y.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Ho, Ho.exports)), Ho.exports;
}
var Wv;
function F0() {
  if (Wv) return Fs;
  Wv = 1, Fs.__esModule = !0, Fs.registerDefaultHelpers = S, Fs.moveHelperToHooks = E;
  function t(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var r = xE(), a = t(r), s = EE(), o = t(s), u = CE(), f = t(u), p = wE(), h = t(p), g = AE(), y = t(g), _ = TE(), b = t(_), v = OE(), d = t(v);
  function S(O) {
    a.default(O), o.default(O), f.default(O), h.default(O), y.default(O), b.default(O), d.default(O);
  }
  function E(O, w, D) {
    O.helpers[w] && (O.hooks[w] = O.helpers[w], D || delete O.helpers[w]);
  }
  return Fs;
}
var qo = {}, Fo = { exports: {} }, ey;
function NE() {
  return ey || (ey = 1, (function(t, r) {
    r.__esModule = !0;
    var a = rn();
    r.default = function(s) {
      s.registerDecorator("inline", function(o, u, f, p) {
        var h = o;
        return u.partials || (u.partials = {}, h = function(g, y) {
          var _ = f.partials;
          f.partials = a.extend({}, _, u.partials);
          var b = o(g, y);
          return f.partials = _, b;
        }), u.partials[p.args[0]] = p.fn, h;
      });
    }, t.exports = r.default;
  })(Fo, Fo.exports)), Fo.exports;
}
var ty;
function DE() {
  if (ty) return qo;
  ty = 1, qo.__esModule = !0, qo.registerDefaultDecorators = s;
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = NE(), a = t(r);
  function s(o) {
    a.default(o);
  }
  return qo;
}
var Zo = { exports: {} }, ny;
function Z0() {
  return ny || (ny = 1, (function(t, r) {
    r.__esModule = !0;
    var a = rn(), s = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(u) {
        if (typeof u == "string") {
          var f = a.indexOf(s.methodMap, u.toLowerCase());
          f >= 0 ? u = f : u = parseInt(u, 10);
        }
        return u;
      },
      // Can be overridden in the host environment
      log: function(u) {
        if (u = s.lookupLevel(u), typeof console < "u" && s.lookupLevel(s.level) <= u) {
          var f = s.methodMap[u];
          console[f] || (f = "log");
          for (var p = arguments.length, h = Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++)
            h[g - 1] = arguments[g];
          console[f].apply(console, h);
        }
      }
    };
    r.default = s, t.exports = r.default;
  })(Zo, Zo.exports)), Zo.exports;
}
var Oi = {}, Go = {}, ry;
function ME() {
  if (ry) return Go;
  ry = 1, Go.__esModule = !0, Go.createNewLookupObject = r;
  var t = rn();
  function r() {
    for (var a = arguments.length, s = Array(a), o = 0; o < a; o++)
      s[o] = arguments[o];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Go;
}
var ay;
function G0() {
  if (ay) return Oi;
  ay = 1, Oi.__esModule = !0, Oi.createProtoAccessControl = u, Oi.resultIsAllowed = f, Oi.resetLoggedProperties = g;
  function t(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = ME(), a = Z0(), s = t(a), o = /* @__PURE__ */ Object.create(null);
  function u(y) {
    var _ = /* @__PURE__ */ Object.create(null);
    _.constructor = !1, _.__defineGetter__ = !1, _.__defineSetter__ = !1, _.__lookupGetter__ = !1;
    var b = /* @__PURE__ */ Object.create(null);
    return b.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(b, y.allowedProtoProperties),
        defaultValue: y.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(_, y.allowedProtoMethods),
        defaultValue: y.allowProtoMethodsByDefault
      }
    };
  }
  function f(y, _, b) {
    return p(typeof y == "function" ? _.methods : _.properties, b);
  }
  function p(y, _) {
    return y.whitelist[_] !== void 0 ? y.whitelist[_] === !0 : y.defaultValue !== void 0 ? y.defaultValue : (h(_), !1);
  }
  function h(y) {
    o[y] !== !0 && (o[y] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + y + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function g() {
    Object.keys(o).forEach(function(y) {
      delete o[y];
    });
  }
  return Oi;
}
var iy;
function lh() {
  if (iy) return In;
  iy = 1, In.__esModule = !0, In.HandlebarsEnvironment = d;
  function t(E) {
    return E && E.__esModule ? E : { default: E };
  }
  var r = rn(), a = Fn(), s = t(a), o = F0(), u = DE(), f = Z0(), p = t(f), h = G0(), g = "4.7.8";
  In.VERSION = g;
  var y = 8;
  In.COMPILER_REVISION = y;
  var _ = 7;
  In.LAST_COMPATIBLE_COMPILER_REVISION = _;
  var b = {
    1: "<= 1.0.rc.2",
    // 1.0.rc.2 is actually rev2 but doesn't report it
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
  };
  In.REVISION_CHANGES = b;
  var v = "[object Object]";
  function d(E, O, w) {
    this.helpers = E || {}, this.partials = O || {}, this.decorators = w || {}, o.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  d.prototype = {
    constructor: d,
    logger: p.default,
    log: p.default.log,
    registerHelper: function(O, w) {
      if (r.toString.call(O) === v) {
        if (w)
          throw new s.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, O);
      } else
        this.helpers[O] = w;
    },
    unregisterHelper: function(O) {
      delete this.helpers[O];
    },
    registerPartial: function(O, w) {
      if (r.toString.call(O) === v)
        r.extend(this.partials, O);
      else {
        if (typeof w > "u")
          throw new s.default('Attempting to register a partial called "' + O + '" as undefined');
        this.partials[O] = w;
      }
    },
    unregisterPartial: function(O) {
      delete this.partials[O];
    },
    registerDecorator: function(O, w) {
      if (r.toString.call(O) === v) {
        if (w)
          throw new s.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, O);
      } else
        this.decorators[O] = w;
    },
    unregisterDecorator: function(O) {
      delete this.decorators[O];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      h.resetLoggedProperties();
    }
  };
  var S = p.default.log;
  return In.log = S, In.createFrame = r.createFrame, In.logger = p.default, In;
}
var Vo = { exports: {} }, sy;
function kE() {
  return sy || (sy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(s) {
      this.string = s;
    }
    a.prototype.toString = a.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = a, t.exports = r.default;
  })(Vo, Vo.exports)), Vo.exports;
}
var yr = {}, Yo = {}, ly;
function RE() {
  if (ly) return Yo;
  ly = 1, Yo.__esModule = !0, Yo.wrapHelper = t;
  function t(r, a) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = a(u), r.apply(this, arguments);
    };
    return s;
  }
  return Yo;
}
var oy;
function jE() {
  if (oy) return yr;
  oy = 1, yr.__esModule = !0, yr.checkRevision = y, yr.template = _, yr.wrapProgram = b, yr.resolvePartial = v, yr.invokePartial = d, yr.noop = S;
  function t(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function r(x) {
    if (x && x.__esModule)
      return x;
    var A = {};
    if (x != null)
      for (var M in x)
        Object.prototype.hasOwnProperty.call(x, M) && (A[M] = x[M]);
    return A.default = x, A;
  }
  var a = rn(), s = r(a), o = Fn(), u = t(o), f = lh(), p = F0(), h = RE(), g = G0();
  function y(x) {
    var A = x && x[0] || 1, M = f.COMPILER_REVISION;
    if (!(A >= f.LAST_COMPATIBLE_COMPILER_REVISION && A <= f.COMPILER_REVISION))
      if (A < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[M], P = f.REVISION_CHANGES[A];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + P + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + x[1] + ").");
  }
  function _(x, A) {
    if (!A)
      throw new u.default("No environment passed to template");
    if (!x || !x.main)
      throw new u.default("Unknown template object: " + typeof x);
    x.main.decorator = x.main_d, A.VM.checkRevision(x.compiler);
    var M = x.compiler && x.compiler[0] === 7;
    function k(U, G, Q) {
      Q.hash && (G = s.extend({}, G, Q.hash), Q.ids && (Q.ids[0] = !0)), U = A.VM.resolvePartial.call(this, U, G, Q);
      var oe = s.extend({}, Q, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), fe = A.VM.invokePartial.call(this, U, G, oe);
      if (fe == null && A.compile && (Q.partials[Q.name] = A.compile(U, x.compilerOptions, A), fe = Q.partials[Q.name](G, oe)), fe != null) {
        if (Q.indent) {
          for (var Ee = fe.split(`
`), H = 0, te = Ee.length; H < te && !(!Ee[H] && H + 1 === te); H++)
            Ee[H] = Q.indent + Ee[H];
          fe = Ee.join(`
`);
        }
        return fe;
      } else
        throw new u.default("The partial " + Q.name + " could not be compiled when running in runtime-only mode");
    }
    var P = {
      strict: function(G, Q, oe) {
        if (!G || !(Q in G))
          throw new u.default('"' + Q + '" not defined in ' + G, {
            loc: oe
          });
        return P.lookupProperty(G, Q);
      },
      lookupProperty: function(G, Q) {
        var oe = G[Q];
        if (oe == null || Object.prototype.hasOwnProperty.call(G, Q) || g.resultIsAllowed(oe, P.protoAccessControl, Q))
          return oe;
      },
      lookup: function(G, Q) {
        for (var oe = G.length, fe = 0; fe < oe; fe++) {
          var Ee = G[fe] && P.lookupProperty(G[fe], Q);
          if (Ee != null)
            return G[fe][Q];
        }
      },
      lambda: function(G, Q) {
        return typeof G == "function" ? G.call(Q) : G;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: k,
      fn: function(G) {
        var Q = x[G];
        return Q.decorator = x[G + "_d"], Q;
      },
      programs: [],
      program: function(G, Q, oe, fe, Ee) {
        var H = this.programs[G], te = this.fn(G);
        return Q || Ee || fe || oe ? H = b(this, G, te, Q, oe, fe, Ee) : H || (H = this.programs[G] = b(this, G, te)), H;
      },
      data: function(G, Q) {
        for (; G && Q--; )
          G = G._parent;
        return G;
      },
      mergeIfNeeded: function(G, Q) {
        var oe = G || Q;
        return G && Q && G !== Q && (oe = s.extend({}, Q, G)), oe;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: A.VM.noop,
      compilerInfo: x.compiler
    };
    function X(U) {
      var G = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], Q = G.data;
      X._setup(G), !G.partial && x.useData && (Q = E(U, Q));
      var oe = void 0, fe = x.useBlockParams ? [] : void 0;
      x.useDepths && (G.depths ? oe = U != G.depths[0] ? [U].concat(G.depths) : G.depths : oe = [U]);
      function Ee(H) {
        return "" + x.main(P, H, P.helpers, P.partials, Q, fe, oe);
      }
      return Ee = O(x.main, Ee, P, G.depths || [], Q, fe), Ee(U, G);
    }
    return X.isTop = !0, X._setup = function(U) {
      if (U.partial)
        P.protoAccessControl = U.protoAccessControl, P.helpers = U.helpers, P.partials = U.partials, P.decorators = U.decorators, P.hooks = U.hooks;
      else {
        var G = s.extend({}, A.helpers, U.helpers);
        w(G, P), P.helpers = G, x.usePartial && (P.partials = P.mergeIfNeeded(U.partials, A.partials)), (x.usePartial || x.useDecorators) && (P.decorators = s.extend({}, A.decorators, U.decorators)), P.hooks = {}, P.protoAccessControl = g.createProtoAccessControl(U);
        var Q = U.allowCallsToHelperMissing || M;
        p.moveHelperToHooks(P, "helperMissing", Q), p.moveHelperToHooks(P, "blockHelperMissing", Q);
      }
    }, X._child = function(U, G, Q, oe) {
      if (x.useBlockParams && !Q)
        throw new u.default("must pass block params");
      if (x.useDepths && !oe)
        throw new u.default("must pass parent depths");
      return b(P, U, x[U], G, 0, Q, oe);
    }, X;
  }
  function b(x, A, M, k, P, X, U) {
    function G(Q) {
      var oe = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], fe = U;
      return U && Q != U[0] && !(Q === x.nullContext && U[0] === null) && (fe = [Q].concat(U)), M(x, Q, x.helpers, x.partials, oe.data || k, X && [oe.blockParams].concat(X), fe);
    }
    return G = O(M, G, x, U, k, X), G.program = A, G.depth = U ? U.length : 0, G.blockParams = P || 0, G;
  }
  function v(x, A, M) {
    return x ? !x.call && !M.name && (M.name = x, x = M.partials[x]) : M.name === "@partial-block" ? x = M.data["partial-block"] : x = M.partials[M.name], x;
  }
  function d(x, A, M) {
    var k = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var P = void 0;
    if (M.fn && M.fn !== S && (function() {
      M.data = f.createFrame(M.data);
      var X = M.fn;
      P = M.data["partial-block"] = function(G) {
        var Q = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return Q.data = f.createFrame(Q.data), Q.data["partial-block"] = k, X(G, Q);
      }, X.partials && (M.partials = s.extend({}, M.partials, X.partials));
    })(), x === void 0 && P && (x = P), x === void 0)
      throw new u.default("The partial " + M.name + " could not be found");
    if (x instanceof Function)
      return x(A, M);
  }
  function S() {
    return "";
  }
  function E(x, A) {
    return (!A || !("root" in A)) && (A = A ? f.createFrame(A) : {}, A.root = x), A;
  }
  function O(x, A, M, k, P, X) {
    if (x.decorator) {
      var U = {};
      A = x.decorator(A, U, M, k && k[0], P, X, k), s.extend(A, U);
    }
    return A;
  }
  function w(x, A) {
    Object.keys(x).forEach(function(M) {
      var k = x[M];
      x[M] = D(k, A);
    });
  }
  function D(x, A) {
    var M = A.lookupProperty;
    return h.wrapHelper(x, function(k) {
      return s.extend({ lookupProperty: M }, k);
    });
  }
  return yr;
}
var Xo = { exports: {} }, uy;
function V0() {
  return uy || (uy = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(a) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var s = globalThis.Handlebars;
      a.noConflict = function() {
        return globalThis.Handlebars === a && (globalThis.Handlebars = s), a;
      };
    }, t.exports = r.default;
  })(Xo, Xo.exports)), Xo.exports;
}
var cy;
function zE() {
  return cy || (cy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(w) {
      return w && w.__esModule ? w : { default: w };
    }
    function s(w) {
      if (w && w.__esModule)
        return w;
      var D = {};
      if (w != null)
        for (var x in w)
          Object.prototype.hasOwnProperty.call(w, x) && (D[x] = w[x]);
      return D.default = w, D;
    }
    var o = lh(), u = s(o), f = kE(), p = a(f), h = Fn(), g = a(h), y = rn(), _ = s(y), b = jE(), v = s(b), d = V0(), S = a(d);
    function E() {
      var w = new u.HandlebarsEnvironment();
      return _.extend(w, u), w.SafeString = p.default, w.Exception = g.default, w.Utils = _, w.escapeExpression = _.escapeExpression, w.VM = v, w.template = function(D) {
        return v.template(D, w);
      }, w;
    }
    var O = E();
    O.create = E, S.default(O), O.default = O, r.default = O, t.exports = r.default;
  })(Ro, Ro.exports)), Ro.exports;
}
var $o = { exports: {} }, fy;
function Y0() {
  return fy || (fy = 1, (function(t, r) {
    r.__esModule = !0;
    var a = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(o) {
          return o.type === "SubExpression" || (o.type === "MustacheStatement" || o.type === "BlockStatement") && !!(o.params && o.params.length || o.hash);
        },
        scopedId: function(o) {
          return /^\.|this\b/.test(o.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(o) {
          return o.parts.length === 1 && !a.helpers.scopedId(o) && !o.depth;
        }
      }
    };
    r.default = a, t.exports = r.default;
  })($o, $o.exports)), $o.exports;
}
var Ni = {}, Qo = { exports: {} }, dy;
function LE() {
  return dy || (dy = 1, (function(t, r) {
    r.__esModule = !0;
    var a = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(p, h, g, y, _, b, v) {
          var d = b.length - 1;
          switch (_) {
            case 1:
              return b[d - 1];
            case 2:
              this.$ = y.prepareProgram(b[d]);
              break;
            case 3:
              this.$ = b[d];
              break;
            case 4:
              this.$ = b[d];
              break;
            case 5:
              this.$ = b[d];
              break;
            case 6:
              this.$ = b[d];
              break;
            case 7:
              this.$ = b[d];
              break;
            case 8:
              this.$ = b[d];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: y.stripComment(b[d]),
                strip: y.stripFlags(b[d], b[d]),
                loc: y.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: b[d],
                value: b[d],
                loc: y.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = y.prepareRawBlock(b[d - 2], b[d - 1], b[d], this._$);
              break;
            case 12:
              this.$ = { path: b[d - 3], params: b[d - 2], hash: b[d - 1] };
              break;
            case 13:
              this.$ = y.prepareBlock(b[d - 3], b[d - 2], b[d - 1], b[d], !1, this._$);
              break;
            case 14:
              this.$ = y.prepareBlock(b[d - 3], b[d - 2], b[d - 1], b[d], !0, this._$);
              break;
            case 15:
              this.$ = { open: b[d - 5], path: b[d - 4], params: b[d - 3], hash: b[d - 2], blockParams: b[d - 1], strip: y.stripFlags(b[d - 5], b[d]) };
              break;
            case 16:
              this.$ = { path: b[d - 4], params: b[d - 3], hash: b[d - 2], blockParams: b[d - 1], strip: y.stripFlags(b[d - 5], b[d]) };
              break;
            case 17:
              this.$ = { path: b[d - 4], params: b[d - 3], hash: b[d - 2], blockParams: b[d - 1], strip: y.stripFlags(b[d - 5], b[d]) };
              break;
            case 18:
              this.$ = { strip: y.stripFlags(b[d - 1], b[d - 1]), program: b[d] };
              break;
            case 19:
              var S = y.prepareBlock(b[d - 2], b[d - 1], b[d], b[d], !1, this._$), E = y.prepareProgram([S], b[d - 1].loc);
              E.chained = !0, this.$ = { strip: b[d - 2].strip, program: E, chain: !0 };
              break;
            case 20:
              this.$ = b[d];
              break;
            case 21:
              this.$ = { path: b[d - 1], strip: y.stripFlags(b[d - 2], b[d]) };
              break;
            case 22:
              this.$ = y.prepareMustache(b[d - 3], b[d - 2], b[d - 1], b[d - 4], y.stripFlags(b[d - 4], b[d]), this._$);
              break;
            case 23:
              this.$ = y.prepareMustache(b[d - 3], b[d - 2], b[d - 1], b[d - 4], y.stripFlags(b[d - 4], b[d]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: b[d - 3],
                params: b[d - 2],
                hash: b[d - 1],
                indent: "",
                strip: y.stripFlags(b[d - 4], b[d]),
                loc: y.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = y.preparePartialBlock(b[d - 2], b[d - 1], b[d], this._$);
              break;
            case 26:
              this.$ = { path: b[d - 3], params: b[d - 2], hash: b[d - 1], strip: y.stripFlags(b[d - 4], b[d]) };
              break;
            case 27:
              this.$ = b[d];
              break;
            case 28:
              this.$ = b[d];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: b[d - 3],
                params: b[d - 2],
                hash: b[d - 1],
                loc: y.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: b[d], loc: y.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: y.id(b[d - 2]), value: b[d], loc: y.locInfo(this._$) };
              break;
            case 32:
              this.$ = y.id(b[d - 1]);
              break;
            case 33:
              this.$ = b[d];
              break;
            case 34:
              this.$ = b[d];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: b[d], original: b[d], loc: y.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(b[d]), original: Number(b[d]), loc: y.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: b[d] === "true", original: b[d] === "true", loc: y.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: y.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: y.locInfo(this._$) };
              break;
            case 40:
              this.$ = b[d];
              break;
            case 41:
              this.$ = b[d];
              break;
            case 42:
              this.$ = y.preparePath(!0, b[d], this._$);
              break;
            case 43:
              this.$ = y.preparePath(!1, b[d], this._$);
              break;
            case 44:
              b[d - 2].push({ part: y.id(b[d]), original: b[d], separator: b[d - 1] }), this.$ = b[d - 2];
              break;
            case 45:
              this.$ = [{ part: y.id(b[d]), original: b[d] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              b[d - 1].push(b[d]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              b[d - 1].push(b[d]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              b[d - 1].push(b[d]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              b[d - 1].push(b[d]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              b[d - 1].push(b[d]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              b[d - 1].push(b[d]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              b[d - 1].push(b[d]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              b[d - 1].push(b[d]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              b[d - 1].push(b[d]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              b[d - 1].push(b[d]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              b[d - 1].push(b[d]);
              break;
            case 98:
              this.$ = [b[d]];
              break;
            case 99:
              b[d - 1].push(b[d]);
              break;
            case 100:
              this.$ = [b[d]];
              break;
            case 101:
              b[d - 1].push(b[d]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(p, h) {
          throw new Error(p);
        },
        parse: function(p) {
          var h = this, g = [0], y = [null], _ = [], b = this.table, v = "", d = 0, S = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var E = this.lexer.yylloc;
          _.push(E);
          var O = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function w() {
            var oe;
            return oe = h.lexer.lex() || 1, typeof oe != "number" && (oe = h.symbols_[oe] || oe), oe;
          }
          for (var D, x, A, M, k = {}, P, X, U, G; ; ) {
            if (x = g[g.length - 1], this.defaultActions[x] ? A = this.defaultActions[x] : ((D === null || typeof D > "u") && (D = w()), A = b[x] && b[x][D]), typeof A > "u" || !A.length || !A[0]) {
              var Q = "";
              {
                G = [];
                for (P in b[x]) this.terminals_[P] && P > 2 && G.push("'" + this.terminals_[P] + "'");
                this.lexer.showPosition ? Q = "Parse error on line " + (d + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + G.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : Q = "Parse error on line " + (d + 1) + ": Unexpected " + (D == 1 ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError(Q, { text: this.lexer.match, token: this.terminals_[D] || D, line: this.lexer.yylineno, loc: E, expected: G });
              }
            }
            if (A[0] instanceof Array && A.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + x + ", token: " + D);
            switch (A[0]) {
              case 1:
                g.push(D), y.push(this.lexer.yytext), _.push(this.lexer.yylloc), g.push(A[1]), D = null, S = this.lexer.yyleng, v = this.lexer.yytext, d = this.lexer.yylineno, E = this.lexer.yylloc;
                break;
              case 2:
                if (X = this.productions_[A[1]][1], k.$ = y[y.length - X], k._$ = { first_line: _[_.length - (X || 1)].first_line, last_line: _[_.length - 1].last_line, first_column: _[_.length - (X || 1)].first_column, last_column: _[_.length - 1].last_column }, O && (k._$.range = [_[_.length - (X || 1)].range[0], _[_.length - 1].range[1]]), M = this.performAction.call(k, v, S, d, this.yy, A[1], y, _), typeof M < "u")
                  return M;
                X && (g = g.slice(0, -1 * X * 2), y = y.slice(0, -1 * X), _ = _.slice(0, -1 * X)), g.push(this.productions_[A[1]][0]), y.push(k.$), _.push(k._$), U = b[g[g.length - 2]][g[g.length - 1]], g.push(U);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, o = (function() {
        var f = {
          EOF: 1,
          parseError: function(h, g) {
            if (this.yy.parser)
              this.yy.parser.parseError(h, g);
            else
              throw new Error(h);
          },
          setInput: function(h) {
            return this._input = h, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var h = this._input[0];
            this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
            var g = h.match(/(?:\r\n?|\n).*/g);
            return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h;
          },
          unput: function(h) {
            var g = h.length, y = h.split(/(?:\r\n?|\n)/g);
            this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g - 1), this.offset -= g;
            var _ = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), y.length - 1 && (this.yylineno -= y.length - 1);
            var b = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: y ? (y.length === _.length ? this.yylloc.first_column : 0) + _[_.length - y.length].length - y[0].length : this.yylloc.first_column - g
            }, this.options.ranges && (this.yylloc.range = [b[0], b[0] + this.yyleng - g]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(h) {
            this.unput(this.match.slice(h));
          },
          pastInput: function() {
            var h = this.matched.substr(0, this.matched.length - this.match.length);
            return (h.length > 20 ? "..." : "") + h.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var h = this.match;
            return h.length < 20 && (h += this._input.substr(0, 20 - h.length)), (h.substr(0, 20) + (h.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var h = this.pastInput(), g = new Array(h.length + 1).join("-");
            return h + this.upcomingInput() + `
` + g + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var h, g, y, _, b;
            this._more || (this.yytext = "", this.match = "");
            for (var v = this._currentRules(), d = 0; d < v.length && (y = this._input.match(this.rules[v[d]]), !(y && (!g || y[0].length > g[0].length) && (g = y, _ = d, !this.options.flex))); d++)
              ;
            return g ? (b = g[0].match(/(?:\r\n?|\n).*/g), b && (this.yylineno += b.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: b ? b[b.length - 1].length - b[b.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
            }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], h = this.performAction.call(this, this.yy, this, v[_], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var h = this.next();
            return typeof h < "u" ? h : this.lex();
          },
          begin: function(h) {
            this.conditionStack.push(h);
          },
          popState: function() {
            return this.conditionStack.pop();
          },
          _currentRules: function() {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          },
          topState: function() {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function(h) {
            this.begin(h);
          }
        };
        return f.options = {}, f.performAction = function(h, g, y, _) {
          function b(v, d) {
            return g.yytext = g.yytext.substring(v, g.yyleng - d + v);
          }
          switch (y) {
            case 0:
              if (g.yytext.slice(-2) === "\\\\" ? (b(0, 1), this.begin("mu")) : g.yytext.slice(-1) === "\\" ? (b(0, 1), this.begin("emu")) : this.begin("mu"), g.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (b(5, 9), "END_RAW_BLOCK");
            case 5:
              return 15;
            case 6:
              return this.popState(), 14;
            case 7:
              return 65;
            case 8:
              return 68;
            case 9:
              return 19;
            case 10:
              return this.popState(), this.begin("raw"), 23;
            case 11:
              return 55;
            case 12:
              return 60;
            case 13:
              return 29;
            case 14:
              return 47;
            case 15:
              return this.popState(), 44;
            case 16:
              return this.popState(), 44;
            case 17:
              return 34;
            case 18:
              return 39;
            case 19:
              return 51;
            case 20:
              return 48;
            case 21:
              this.unput(g.yytext), this.popState(), this.begin("com");
              break;
            case 22:
              return this.popState(), 14;
            case 23:
              return 48;
            case 24:
              return 73;
            case 25:
              return 72;
            case 26:
              return 72;
            case 27:
              return 87;
            case 28:
              break;
            case 29:
              return this.popState(), 54;
            case 30:
              return this.popState(), 33;
            case 31:
              return g.yytext = b(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return g.yytext = b(1, 2).replace(/\\'/g, "'"), 80;
            case 33:
              return 85;
            case 34:
              return 82;
            case 35:
              return 82;
            case 36:
              return 83;
            case 37:
              return 84;
            case 38:
              return 81;
            case 39:
              return 75;
            case 40:
              return 77;
            case 41:
              return 72;
            case 42:
              return g.yytext = g.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, f.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], f.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, f;
      })();
      s.lexer = o;
      function u() {
        this.yy = {};
      }
      return u.prototype = s, s.Parser = u, new u();
    })();
    r.default = a, t.exports = r.default;
  })(Qo, Qo.exports)), Qo.exports;
}
var Jo = { exports: {} }, Ko = { exports: {} }, hy;
function X0() {
  return hy || (hy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = Fn(), o = a(s);
    function u() {
      this.parents = [];
    }
    u.prototype = {
      constructor: u,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(y, _) {
        var b = this.accept(y[_]);
        if (this.mutating) {
          if (b && !u.prototype[b.type])
            throw new o.default('Unexpected node type "' + b.type + '" found when accepting ' + _ + " on " + y.type);
          y[_] = b;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(y, _) {
        if (this.acceptKey(y, _), !y[_])
          throw new o.default(y.type + " requires " + _);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(y) {
        for (var _ = 0, b = y.length; _ < b; _++)
          this.acceptKey(y, _), y[_] || (y.splice(_, 1), _--, b--);
      },
      accept: function(y) {
        if (y) {
          if (!this[y.type])
            throw new o.default("Unknown type: " + y.type, y);
          this.current && this.parents.unshift(this.current), this.current = y;
          var _ = this[y.type](y);
          if (this.current = this.parents.shift(), !this.mutating || _)
            return _;
          if (_ !== !1)
            return y;
        }
      },
      Program: function(y) {
        this.acceptArray(y.body);
      },
      MustacheStatement: f,
      Decorator: f,
      BlockStatement: p,
      DecoratorBlock: p,
      PartialStatement: h,
      PartialBlockStatement: function(y) {
        h.call(this, y), this.acceptKey(y, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: f,
      PathExpression: function() {
      },
      StringLiteral: function() {
      },
      NumberLiteral: function() {
      },
      BooleanLiteral: function() {
      },
      UndefinedLiteral: function() {
      },
      NullLiteral: function() {
      },
      Hash: function(y) {
        this.acceptArray(y.pairs);
      },
      HashPair: function(y) {
        this.acceptRequired(y, "value");
      }
    };
    function f(g) {
      this.acceptRequired(g, "path"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    function p(g) {
      f.call(this, g), this.acceptKey(g, "program"), this.acceptKey(g, "inverse");
    }
    function h(g) {
      this.acceptRequired(g, "name"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    r.default = u, t.exports = r.default;
  })(Ko, Ko.exports)), Ko.exports;
}
var py;
function PE() {
  return py || (py = 1, (function(t, r) {
    r.__esModule = !0;
    function a(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = X0(), o = a(s);
    function u() {
      var y = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = y;
    }
    u.prototype = new o.default(), u.prototype.Program = function(y) {
      var _ = !this.options.ignoreStandalone, b = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var v = y.body, d = 0, S = v.length; d < S; d++) {
        var E = v[d], O = this.accept(E);
        if (O) {
          var w = f(v, d, b), D = p(v, d, b), x = O.openStandalone && w, A = O.closeStandalone && D, M = O.inlineStandalone && w && D;
          O.close && h(v, d, !0), O.open && g(v, d, !0), _ && M && (h(v, d), g(v, d) && E.type === "PartialStatement" && (E.indent = /([ \t]+$)/.exec(v[d - 1].original)[1])), _ && x && (h((E.program || E.inverse).body), g(v, d)), _ && A && (h(v, d), g((E.inverse || E.program).body));
        }
      }
      return y;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(y) {
      this.accept(y.program), this.accept(y.inverse);
      var _ = y.program || y.inverse, b = y.program && y.inverse, v = b, d = b;
      if (b && b.chained)
        for (v = b.body[0].program; d.chained; )
          d = d.body[d.body.length - 1].program;
      var S = {
        open: y.openStrip.open,
        close: y.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(_.body),
        closeStandalone: f((v || _).body)
      };
      if (y.openStrip.close && h(_.body, null, !0), b) {
        var E = y.inverseStrip;
        E.open && g(_.body, null, !0), E.close && h(v.body, null, !0), y.closeStrip.open && g(d.body, null, !0), !this.options.ignoreStandalone && f(_.body) && p(v.body) && (g(_.body), h(v.body));
      } else y.closeStrip.open && g(_.body, null, !0);
      return S;
    }, u.prototype.Decorator = u.prototype.MustacheStatement = function(y) {
      return y.strip;
    }, u.prototype.PartialStatement = u.prototype.CommentStatement = function(y) {
      var _ = y.strip || {};
      return {
        inlineStandalone: !0,
        open: _.open,
        close: _.close
      };
    };
    function f(y, _, b) {
      _ === void 0 && (_ = y.length);
      var v = y[_ - 1], d = y[_ - 2];
      if (!v)
        return b;
      if (v.type === "ContentStatement")
        return (d || !b ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(v.original);
    }
    function p(y, _, b) {
      _ === void 0 && (_ = -1);
      var v = y[_ + 1], d = y[_ + 2];
      if (!v)
        return b;
      if (v.type === "ContentStatement")
        return (d || !b ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(v.original);
    }
    function h(y, _, b) {
      var v = y[_ == null ? 0 : _ + 1];
      if (!(!v || v.type !== "ContentStatement" || !b && v.rightStripped)) {
        var d = v.value;
        v.value = v.value.replace(b ? /^\s+/ : /^[ \t]*\r?\n?/, ""), v.rightStripped = v.value !== d;
      }
    }
    function g(y, _, b) {
      var v = y[_ == null ? y.length - 1 : _ - 1];
      if (!(!v || v.type !== "ContentStatement" || !b && v.leftStripped)) {
        var d = v.value;
        return v.value = v.value.replace(b ? /\s+$/ : /[ \t]+$/, ""), v.leftStripped = v.value !== d, v.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })(Jo, Jo.exports)), Jo.exports;
}
var hn = {}, my;
function IE() {
  if (my) return hn;
  my = 1, hn.__esModule = !0, hn.SourceLocation = o, hn.id = u, hn.stripFlags = f, hn.stripComment = p, hn.preparePath = h, hn.prepareMustache = g, hn.prepareRawBlock = y, hn.prepareBlock = _, hn.prepareProgram = b, hn.preparePartialBlock = v;
  function t(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var r = Fn(), a = t(r);
  function s(d, S) {
    if (S = S.path ? S.path.original : S, d.path.original !== S) {
      var E = { loc: d.path.loc };
      throw new a.default(d.path.original + " doesn't match " + S, E);
    }
  }
  function o(d, S) {
    this.source = d, this.start = {
      line: S.first_line,
      column: S.first_column
    }, this.end = {
      line: S.last_line,
      column: S.last_column
    };
  }
  function u(d) {
    return /^\[.*\]$/.test(d) ? d.substring(1, d.length - 1) : d;
  }
  function f(d, S) {
    return {
      open: d.charAt(2) === "~",
      close: S.charAt(S.length - 3) === "~"
    };
  }
  function p(d) {
    return d.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function h(d, S, E) {
    E = this.locInfo(E);
    for (var O = d ? "@" : "", w = [], D = 0, x = 0, A = S.length; x < A; x++) {
      var M = S[x].part, k = S[x].original !== M;
      if (O += (S[x].separator || "") + M, !k && (M === ".." || M === "." || M === "this")) {
        if (w.length > 0)
          throw new a.default("Invalid path: " + O, { loc: E });
        M === ".." && D++;
      } else
        w.push(M);
    }
    return {
      type: "PathExpression",
      data: d,
      depth: D,
      parts: w,
      original: O,
      loc: E
    };
  }
  function g(d, S, E, O, w, D) {
    var x = O.charAt(3) || O.charAt(2), A = x !== "{" && x !== "&", M = /\*/.test(O);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: d,
      params: S,
      hash: E,
      escaped: A,
      strip: w,
      loc: this.locInfo(D)
    };
  }
  function y(d, S, E, O) {
    s(d, E), O = this.locInfo(O);
    var w = {
      type: "Program",
      body: S,
      strip: {},
      loc: O
    };
    return {
      type: "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: w,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: O
    };
  }
  function _(d, S, E, O, w, D) {
    O && O.path && s(d, O);
    var x = /\*/.test(d.open);
    S.blockParams = d.blockParams;
    var A = void 0, M = void 0;
    if (E) {
      if (x)
        throw new a.default("Unexpected inverse block on decorator", E);
      E.chain && (E.program.body[0].closeStrip = O.strip), M = E.strip, A = E.program;
    }
    return w && (w = A, A = S, S = w), {
      type: x ? "DecoratorBlock" : "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: S,
      inverse: A,
      openStrip: d.strip,
      inverseStrip: M,
      closeStrip: O && O.strip,
      loc: this.locInfo(D)
    };
  }
  function b(d, S) {
    if (!S && d.length) {
      var E = d[0].loc, O = d[d.length - 1].loc;
      E && O && (S = {
        source: E.source,
        start: {
          line: E.start.line,
          column: E.start.column
        },
        end: {
          line: O.end.line,
          column: O.end.column
        }
      });
    }
    return {
      type: "Program",
      body: d,
      strip: {},
      loc: S
    };
  }
  function v(d, S, E, O) {
    return s(d, E), {
      type: "PartialBlockStatement",
      name: d.path,
      params: d.params,
      hash: d.hash,
      program: S,
      openStrip: d.strip,
      closeStrip: E && E.strip,
      loc: this.locInfo(O)
    };
  }
  return hn;
}
var gy;
function BE() {
  if (gy) return Ni;
  gy = 1, Ni.__esModule = !0, Ni.parseWithoutProcessing = y, Ni.parse = _;
  function t(b) {
    if (b && b.__esModule)
      return b;
    var v = {};
    if (b != null)
      for (var d in b)
        Object.prototype.hasOwnProperty.call(b, d) && (v[d] = b[d]);
    return v.default = b, v;
  }
  function r(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var a = LE(), s = r(a), o = PE(), u = r(o), f = IE(), p = t(f), h = rn();
  Ni.parser = s.default;
  var g = {};
  h.extend(g, p);
  function y(b, v) {
    if (b.type === "Program")
      return b;
    s.default.yy = g, g.locInfo = function(S) {
      return new g.SourceLocation(v && v.srcName, S);
    };
    var d = s.default.parse(b);
    return d;
  }
  function _(b, v) {
    var d = y(b, v), S = new u.default(v);
    return S.accept(d);
  }
  return Ni;
}
var Di = {}, vy;
function UE() {
  if (vy) return Di;
  vy = 1, Di.__esModule = !0, Di.Compiler = p, Di.precompile = h, Di.compile = g;
  function t(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var r = Fn(), a = t(r), s = rn(), o = Y0(), u = t(o), f = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(v) {
      var d = this.opcodes.length;
      if (v.opcodes.length !== d)
        return !1;
      for (var S = 0; S < d; S++) {
        var E = this.opcodes[S], O = v.opcodes[S];
        if (E.opcode !== O.opcode || !y(E.args, O.args))
          return !1;
      }
      d = this.children.length;
      for (var S = 0; S < d; S++)
        if (!this.children[S].equals(v.children[S]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(v, d) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = d, this.stringParams = d.stringParams, this.trackIds = d.trackIds, d.blockParams = d.blockParams || [], d.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, d.knownHelpers), this.accept(v);
    },
    compileProgram: function(v) {
      var d = new this.compiler(), S = d.compile(v, this.options), E = this.guid++;
      return this.usePartial = this.usePartial || S.usePartial, this.children[E] = S, this.useDepths = this.useDepths || S.useDepths, E;
    },
    accept: function(v) {
      if (!this[v.type])
        throw new a.default("Unknown type: " + v.type, v);
      this.sourceNode.unshift(v);
      var d = this[v.type](v);
      return this.sourceNode.shift(), d;
    },
    Program: function(v) {
      this.options.blockParams.unshift(v.blockParams);
      for (var d = v.body, S = d.length, E = 0; E < S; E++)
        this.accept(d[E]);
      return this.options.blockParams.shift(), this.isSimple = S === 1, this.blockParams = v.blockParams ? v.blockParams.length : 0, this;
    },
    BlockStatement: function(v) {
      _(v);
      var d = v.program, S = v.inverse;
      d = d && this.compileProgram(d), S = S && this.compileProgram(S);
      var E = this.classifySexpr(v);
      E === "helper" ? this.helperSexpr(v, d, S) : E === "simple" ? (this.simpleSexpr(v), this.opcode("pushProgram", d), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("blockValue", v.path.original)) : (this.ambiguousSexpr(v, d, S), this.opcode("pushProgram", d), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(v) {
      var d = v.program && this.compileProgram(v.program), S = this.setupFullMustacheParams(v, d, void 0), E = v.path;
      this.useDecorators = !0, this.opcode("registerDecorator", S.length, E.original);
    },
    PartialStatement: function(v) {
      this.usePartial = !0;
      var d = v.program;
      d && (d = this.compileProgram(v.program));
      var S = v.params;
      if (S.length > 1)
        throw new a.default("Unsupported number of partial arguments: " + S.length, v);
      S.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : S.push({ type: "PathExpression", parts: [], depth: 0 }));
      var E = v.name.original, O = v.name.type === "SubExpression";
      O && this.accept(v.name), this.setupFullMustacheParams(v, d, void 0, !0);
      var w = v.indent || "";
      this.options.preventIndent && w && (this.opcode("appendContent", w), w = ""), this.opcode("invokePartial", O, E, w), this.opcode("append");
    },
    PartialBlockStatement: function(v) {
      this.PartialStatement(v);
    },
    MustacheStatement: function(v) {
      this.SubExpression(v), v.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(v) {
      this.DecoratorBlock(v);
    },
    ContentStatement: function(v) {
      v.value && this.opcode("appendContent", v.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(v) {
      _(v);
      var d = this.classifySexpr(v);
      d === "simple" ? this.simpleSexpr(v) : d === "helper" ? this.helperSexpr(v) : this.ambiguousSexpr(v);
    },
    ambiguousSexpr: function(v, d, S) {
      var E = v.path, O = E.parts[0], w = d != null || S != null;
      this.opcode("getContext", E.depth), this.opcode("pushProgram", d), this.opcode("pushProgram", S), E.strict = !0, this.accept(E), this.opcode("invokeAmbiguous", O, w);
    },
    simpleSexpr: function(v) {
      var d = v.path;
      d.strict = !0, this.accept(d), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(v, d, S) {
      var E = this.setupFullMustacheParams(v, d, S), O = v.path, w = O.parts[0];
      if (this.options.knownHelpers[w])
        this.opcode("invokeKnownHelper", E.length, w);
      else {
        if (this.options.knownHelpersOnly)
          throw new a.default("You specified knownHelpersOnly, but used the unknown helper " + w, v);
        O.strict = !0, O.falsy = !0, this.accept(O), this.opcode("invokeHelper", E.length, O.original, u.default.helpers.simpleId(O));
      }
    },
    PathExpression: function(v) {
      this.addDepth(v.depth), this.opcode("getContext", v.depth);
      var d = v.parts[0], S = u.default.helpers.scopedId(v), E = !v.depth && !S && this.blockParamIndex(d);
      E ? this.opcode("lookupBlockParam", E, v.parts) : d ? v.data ? (this.options.data = !0, this.opcode("lookupData", v.depth, v.parts, v.strict)) : this.opcode("lookupOnContext", v.parts, v.falsy, v.strict, S) : this.opcode("pushContext");
    },
    StringLiteral: function(v) {
      this.opcode("pushString", v.value);
    },
    NumberLiteral: function(v) {
      this.opcode("pushLiteral", v.value);
    },
    BooleanLiteral: function(v) {
      this.opcode("pushLiteral", v.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(v) {
      var d = v.pairs, S = 0, E = d.length;
      for (this.opcode("pushHash"); S < E; S++)
        this.pushParam(d[S].value);
      for (; S--; )
        this.opcode("assignToHash", d[S].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(v) {
      this.opcodes.push({
        opcode: v,
        args: f.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(v) {
      v && (this.useDepths = !0);
    },
    classifySexpr: function(v) {
      var d = u.default.helpers.simpleId(v.path), S = d && !!this.blockParamIndex(v.path.parts[0]), E = !S && u.default.helpers.helperExpression(v), O = !S && (E || d);
      if (O && !E) {
        var w = v.path.parts[0], D = this.options;
        D.knownHelpers[w] ? E = !0 : D.knownHelpersOnly && (O = !1);
      }
      return E ? "helper" : O ? "ambiguous" : "simple";
    },
    pushParams: function(v) {
      for (var d = 0, S = v.length; d < S; d++)
        this.pushParam(v[d]);
    },
    pushParam: function(v) {
      var d = v.value != null ? v.value : v.original || "";
      if (this.stringParams)
        d.replace && (d = d.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), v.depth && this.addDepth(v.depth), this.opcode("getContext", v.depth || 0), this.opcode("pushStringParam", d, v.type), v.type === "SubExpression" && this.accept(v);
      else {
        if (this.trackIds) {
          var S = void 0;
          if (v.parts && !u.default.helpers.scopedId(v) && !v.depth && (S = this.blockParamIndex(v.parts[0])), S) {
            var E = v.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", S, E);
          } else
            d = v.original || d, d.replace && (d = d.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", v.type, d);
        }
        this.accept(v);
      }
    },
    setupFullMustacheParams: function(v, d, S, E) {
      var O = v.params;
      return this.pushParams(O), this.opcode("pushProgram", d), this.opcode("pushProgram", S), v.hash ? this.accept(v.hash) : this.opcode("emptyHash", E), O;
    },
    blockParamIndex: function(v) {
      for (var d = 0, S = this.options.blockParams.length; d < S; d++) {
        var E = this.options.blockParams[d], O = E && s.indexOf(E, v);
        if (E && O >= 0)
          return [d, O];
      }
    }
  };
  function h(b, v, d) {
    if (b == null || typeof b != "string" && b.type !== "Program")
      throw new a.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + b);
    v = v || {}, "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var S = d.parse(b, v), E = new d.Compiler().compile(S, v);
    return new d.JavaScriptCompiler().compile(E, v);
  }
  function g(b, v, d) {
    if (v === void 0 && (v = {}), b == null || typeof b != "string" && b.type !== "Program")
      throw new a.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + b);
    v = s.extend({}, v), "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var S = void 0;
    function E() {
      var w = d.parse(b, v), D = new d.Compiler().compile(w, v), x = new d.JavaScriptCompiler().compile(D, v, void 0, !0);
      return d.template(x);
    }
    function O(w, D) {
      return S || (S = E()), S.call(this, w, D);
    }
    return O._setup = function(w) {
      return S || (S = E()), S._setup(w);
    }, O._child = function(w, D, x, A) {
      return S || (S = E()), S._child(w, D, x, A);
    }, O;
  }
  function y(b, v) {
    if (b === v)
      return !0;
    if (s.isArray(b) && s.isArray(v) && b.length === v.length) {
      for (var d = 0; d < b.length; d++)
        if (!y(b[d], v[d]))
          return !1;
      return !0;
    }
  }
  function _(b) {
    if (!b.path.parts) {
      var v = b.path;
      b.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [v.original + ""],
        original: v.original + "",
        loc: v.loc
      };
    }
  }
  return Di;
}
var Wo = { exports: {} }, eu = { exports: {} }, Zs = {}, dd = {}, tu = {}, nu = {}, yy;
function HE() {
  if (yy) return nu;
  yy = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return nu.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, nu.decode = function(r) {
    var a = 65, s = 90, o = 97, u = 122, f = 48, p = 57, h = 43, g = 47, y = 26, _ = 52;
    return a <= r && r <= s ? r - a : o <= r && r <= u ? r - o + y : f <= r && r <= p ? r - f + _ : r == h ? 62 : r == g ? 63 : -1;
  }, nu;
}
var by;
function $0() {
  if (by) return tu;
  by = 1;
  var t = HE(), r = 5, a = 1 << r, s = a - 1, o = a;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function f(p) {
    var h = (p & 1) === 1, g = p >> 1;
    return h ? -g : g;
  }
  return tu.encode = function(h) {
    var g = "", y, _ = u(h);
    do
      y = _ & s, _ >>>= r, _ > 0 && (y |= o), g += t.encode(y);
    while (_ > 0);
    return g;
  }, tu.decode = function(h, g, y) {
    var _ = h.length, b = 0, v = 0, d, S;
    do {
      if (g >= _)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (S = t.decode(h.charCodeAt(g++)), S === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(g - 1));
      d = !!(S & o), S &= s, b = b + (S << v), v += r;
    } while (d);
    y.value = f(b), y.rest = g;
  }, tu;
}
var hd = {}, _y;
function cl() {
  return _y || (_y = 1, (function(t) {
    function r(x, A, M) {
      if (A in x)
        return x[A];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + A + '" is a required argument.');
    }
    t.getArg = r;
    var a = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function o(x) {
      var A = x.match(a);
      return A ? {
        scheme: A[1],
        auth: A[2],
        host: A[3],
        port: A[4],
        path: A[5]
      } : null;
    }
    t.urlParse = o;
    function u(x) {
      var A = "";
      return x.scheme && (A += x.scheme + ":"), A += "//", x.auth && (A += x.auth + "@"), x.host && (A += x.host), x.port && (A += ":" + x.port), x.path && (A += x.path), A;
    }
    t.urlGenerate = u;
    function f(x) {
      var A = x, M = o(x);
      if (M) {
        if (!M.path)
          return x;
        A = M.path;
      }
      for (var k = t.isAbsolute(A), P = A.split(/\/+/), X, U = 0, G = P.length - 1; G >= 0; G--)
        X = P[G], X === "." ? P.splice(G, 1) : X === ".." ? U++ : U > 0 && (X === "" ? (P.splice(G + 1, U), U = 0) : (P.splice(G, 2), U--));
      return A = P.join("/"), A === "" && (A = k ? "/" : "."), M ? (M.path = A, u(M)) : A;
    }
    t.normalize = f;
    function p(x, A) {
      x === "" && (x = "."), A === "" && (A = ".");
      var M = o(A), k = o(x);
      if (k && (x = k.path || "/"), M && !M.scheme)
        return k && (M.scheme = k.scheme), u(M);
      if (M || A.match(s))
        return A;
      if (k && !k.host && !k.path)
        return k.host = A, u(k);
      var P = A.charAt(0) === "/" ? A : f(x.replace(/\/+$/, "") + "/" + A);
      return k ? (k.path = P, u(k)) : P;
    }
    t.join = p, t.isAbsolute = function(x) {
      return x.charAt(0) === "/" || a.test(x);
    };
    function h(x, A) {
      x === "" && (x = "."), x = x.replace(/\/$/, "");
      for (var M = 0; A.indexOf(x + "/") !== 0; ) {
        var k = x.lastIndexOf("/");
        if (k < 0 || (x = x.slice(0, k), x.match(/^([^\/]+:\/)?\/*$/)))
          return A;
        ++M;
      }
      return Array(M + 1).join("../") + A.substr(x.length + 1);
    }
    t.relative = h;
    var g = (function() {
      var x = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in x);
    })();
    function y(x) {
      return x;
    }
    function _(x) {
      return v(x) ? "$" + x : x;
    }
    t.toSetString = g ? y : _;
    function b(x) {
      return v(x) ? x.slice(1) : x;
    }
    t.fromSetString = g ? y : b;
    function v(x) {
      if (!x)
        return !1;
      var A = x.length;
      if (A < 9 || x.charCodeAt(A - 1) !== 95 || x.charCodeAt(A - 2) !== 95 || x.charCodeAt(A - 3) !== 111 || x.charCodeAt(A - 4) !== 116 || x.charCodeAt(A - 5) !== 111 || x.charCodeAt(A - 6) !== 114 || x.charCodeAt(A - 7) !== 112 || x.charCodeAt(A - 8) !== 95 || x.charCodeAt(A - 9) !== 95)
        return !1;
      for (var M = A - 10; M >= 0; M--)
        if (x.charCodeAt(M) !== 36)
          return !1;
      return !0;
    }
    function d(x, A, M) {
      var k = E(x.source, A.source);
      return k !== 0 || (k = x.originalLine - A.originalLine, k !== 0) || (k = x.originalColumn - A.originalColumn, k !== 0 || M) || (k = x.generatedColumn - A.generatedColumn, k !== 0) || (k = x.generatedLine - A.generatedLine, k !== 0) ? k : E(x.name, A.name);
    }
    t.compareByOriginalPositions = d;
    function S(x, A, M) {
      var k = x.generatedLine - A.generatedLine;
      return k !== 0 || (k = x.generatedColumn - A.generatedColumn, k !== 0 || M) || (k = E(x.source, A.source), k !== 0) || (k = x.originalLine - A.originalLine, k !== 0) || (k = x.originalColumn - A.originalColumn, k !== 0) ? k : E(x.name, A.name);
    }
    t.compareByGeneratedPositionsDeflated = S;
    function E(x, A) {
      return x === A ? 0 : x === null ? 1 : A === null ? -1 : x > A ? 1 : -1;
    }
    function O(x, A) {
      var M = x.generatedLine - A.generatedLine;
      return M !== 0 || (M = x.generatedColumn - A.generatedColumn, M !== 0) || (M = E(x.source, A.source), M !== 0) || (M = x.originalLine - A.originalLine, M !== 0) || (M = x.originalColumn - A.originalColumn, M !== 0) ? M : E(x.name, A.name);
    }
    t.compareByGeneratedPositionsInflated = O;
    function w(x) {
      return JSON.parse(x.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = w;
    function D(x, A, M) {
      if (A = A || "", x && (x[x.length - 1] !== "/" && A[0] !== "/" && (x += "/"), A = x + A), M) {
        var k = o(M);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var P = k.path.lastIndexOf("/");
          P >= 0 && (k.path = k.path.substring(0, P + 1));
        }
        A = p(u(k), A);
      }
      return f(A);
    }
    t.computeSourceURL = D;
  })(hd)), hd;
}
var pd = {}, Sy;
function Q0() {
  if (Sy) return pd;
  Sy = 1;
  var t = cl(), r = Object.prototype.hasOwnProperty, a = typeof Map < "u";
  function s() {
    this._array = [], this._set = a ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, f) {
    for (var p = new s(), h = 0, g = u.length; h < g; h++)
      p.add(u[h], f);
    return p;
  }, s.prototype.size = function() {
    return a ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, f) {
    var p = a ? u : t.toSetString(u), h = a ? this.has(u) : r.call(this._set, p), g = this._array.length;
    (!h || f) && this._array.push(u), h || (a ? this._set.set(u, g) : this._set[p] = g);
  }, s.prototype.has = function(u) {
    if (a)
      return this._set.has(u);
    var f = t.toSetString(u);
    return r.call(this._set, f);
  }, s.prototype.indexOf = function(u) {
    if (a) {
      var f = this._set.get(u);
      if (f >= 0)
        return f;
    } else {
      var p = t.toSetString(u);
      if (r.call(this._set, p))
        return this._set[p];
    }
    throw new Error('"' + u + '" is not in the set.');
  }, s.prototype.at = function(u) {
    if (u >= 0 && u < this._array.length)
      return this._array[u];
    throw new Error("No element indexed by " + u);
  }, s.prototype.toArray = function() {
    return this._array.slice();
  }, pd.ArraySet = s, pd;
}
var md = {}, xy;
function qE() {
  if (xy) return md;
  xy = 1;
  var t = cl();
  function r(s, o) {
    var u = s.generatedLine, f = o.generatedLine, p = s.generatedColumn, h = o.generatedColumn;
    return f > u || f == u && h >= p || t.compareByGeneratedPositionsInflated(s, o) <= 0;
  }
  function a() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return a.prototype.unsortedForEach = function(o, u) {
    this._array.forEach(o, u);
  }, a.prototype.add = function(o) {
    r(this._last, o) ? (this._last = o, this._array.push(o)) : (this._sorted = !1, this._array.push(o));
  }, a.prototype.toArray = function() {
    return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, md.MappingList = a, md;
}
var Ey;
function J0() {
  if (Ey) return dd;
  Ey = 1;
  var t = $0(), r = cl(), a = Q0().ArraySet, s = qE().MappingList;
  function o(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new a(), this._names = new a(), this._mappings = new s(), this._sourcesContents = null;
  }
  return o.prototype._version = 3, o.fromSourceMap = function(f) {
    var p = f.sourceRoot, h = new o({
      file: f.file,
      sourceRoot: p
    });
    return f.eachMapping(function(g) {
      var y = {
        generated: {
          line: g.generatedLine,
          column: g.generatedColumn
        }
      };
      g.source != null && (y.source = g.source, p != null && (y.source = r.relative(p, y.source)), y.original = {
        line: g.originalLine,
        column: g.originalColumn
      }, g.name != null && (y.name = g.name)), h.addMapping(y);
    }), f.sources.forEach(function(g) {
      var y = g;
      p !== null && (y = r.relative(p, g)), h._sources.has(y) || h._sources.add(y);
      var _ = f.sourceContentFor(g);
      _ != null && h.setSourceContent(g, _);
    }), h;
  }, o.prototype.addMapping = function(f) {
    var p = r.getArg(f, "generated"), h = r.getArg(f, "original", null), g = r.getArg(f, "source", null), y = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(p, h, g, y), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), y != null && (y = String(y), this._names.has(y) || this._names.add(y)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: g,
      name: y
    });
  }, o.prototype.setSourceContent = function(f, p) {
    var h = f;
    this._sourceRoot != null && (h = r.relative(this._sourceRoot, h)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(h)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(h)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, o.prototype.applySourceMap = function(f, p, h) {
    var g = p;
    if (p == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      g = f.file;
    }
    var y = this._sourceRoot;
    y != null && (g = r.relative(y, g));
    var _ = new a(), b = new a();
    this._mappings.unsortedForEach(function(v) {
      if (v.source === g && v.originalLine != null) {
        var d = f.originalPositionFor({
          line: v.originalLine,
          column: v.originalColumn
        });
        d.source != null && (v.source = d.source, h != null && (v.source = r.join(h, v.source)), y != null && (v.source = r.relative(y, v.source)), v.originalLine = d.line, v.originalColumn = d.column, d.name != null && (v.name = d.name));
      }
      var S = v.source;
      S != null && !_.has(S) && _.add(S);
      var E = v.name;
      E != null && !b.has(E) && b.add(E);
    }, this), this._sources = _, this._names = b, f.sources.forEach(function(v) {
      var d = f.sourceContentFor(v);
      d != null && (h != null && (v = r.join(h, v)), y != null && (v = r.relative(y, v)), this.setSourceContent(v, d));
    }, this);
  }, o.prototype._validateMapping = function(f, p, h, g) {
    if (p && typeof p.line != "number" && typeof p.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !p && !h && !g)) {
      if (f && "line" in f && "column" in f && p && "line" in p && "column" in p && f.line > 0 && f.column >= 0 && p.line > 0 && p.column >= 0 && h)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: h,
        original: p,
        name: g
      }));
    }
  }, o.prototype._serializeMappings = function() {
    for (var f = 0, p = 1, h = 0, g = 0, y = 0, _ = 0, b = "", v, d, S, E, O = this._mappings.toArray(), w = 0, D = O.length; w < D; w++) {
      if (d = O[w], v = "", d.generatedLine !== p)
        for (f = 0; d.generatedLine !== p; )
          v += ";", p++;
      else if (w > 0) {
        if (!r.compareByGeneratedPositionsInflated(d, O[w - 1]))
          continue;
        v += ",";
      }
      v += t.encode(d.generatedColumn - f), f = d.generatedColumn, d.source != null && (E = this._sources.indexOf(d.source), v += t.encode(E - _), _ = E, v += t.encode(d.originalLine - 1 - g), g = d.originalLine - 1, v += t.encode(d.originalColumn - h), h = d.originalColumn, d.name != null && (S = this._names.indexOf(d.name), v += t.encode(S - y), y = S)), b += v;
    }
    return b;
  }, o.prototype._generateSourcesContent = function(f, p) {
    return f.map(function(h) {
      if (!this._sourcesContents)
        return null;
      p != null && (h = r.relative(p, h));
      var g = r.toSetString(h);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, g) ? this._sourcesContents[g] : null;
    }, this);
  }, o.prototype.toJSON = function() {
    var f = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (f.file = this._file), this._sourceRoot != null && (f.sourceRoot = this._sourceRoot), this._sourcesContents && (f.sourcesContent = this._generateSourcesContent(f.sources, f.sourceRoot)), f;
  }, o.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, dd.SourceMapGenerator = o, dd;
}
var Gs = {}, gd = {}, Cy;
function FE() {
  return Cy || (Cy = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(a, s, o, u, f, p) {
      var h = Math.floor((s - a) / 2) + a, g = f(o, u[h], !0);
      return g === 0 ? h : g > 0 ? s - h > 1 ? r(h, s, o, u, f, p) : p == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : h : h - a > 1 ? r(a, h, o, u, f, p) : p == t.LEAST_UPPER_BOUND ? h : a < 0 ? -1 : a;
    }
    t.search = function(s, o, u, f) {
      if (o.length === 0)
        return -1;
      var p = r(
        -1,
        o.length,
        s,
        o,
        u,
        f || t.GREATEST_LOWER_BOUND
      );
      if (p < 0)
        return -1;
      for (; p - 1 >= 0 && u(o[p], o[p - 1], !0) === 0; )
        --p;
      return p;
    };
  })(gd)), gd;
}
var vd = {}, wy;
function ZE() {
  if (wy) return vd;
  wy = 1;
  function t(s, o, u) {
    var f = s[o];
    s[o] = s[u], s[u] = f;
  }
  function r(s, o) {
    return Math.round(s + Math.random() * (o - s));
  }
  function a(s, o, u, f) {
    if (u < f) {
      var p = r(u, f), h = u - 1;
      t(s, p, f);
      for (var g = s[f], y = u; y < f; y++)
        o(s[y], g) <= 0 && (h += 1, t(s, h, y));
      t(s, h + 1, y);
      var _ = h + 1;
      a(s, o, u, _ - 1), a(s, o, _ + 1, f);
    }
  }
  return vd.quickSort = function(s, o) {
    a(s, o, 0, s.length - 1);
  }, vd;
}
var Ay;
function GE() {
  if (Ay) return Gs;
  Ay = 1;
  var t = cl(), r = FE(), a = Q0().ArraySet, s = $0(), o = ZE().quickSort;
  function u(g, y) {
    var _ = g;
    return typeof g == "string" && (_ = t.parseSourceMapInput(g)), _.sections != null ? new h(_, y) : new f(_, y);
  }
  u.fromSourceMap = function(g, y) {
    return f.fromSourceMap(g, y);
  }, u.prototype._version = 3, u.prototype.__generatedMappings = null, Object.defineProperty(u.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), u.prototype.__originalMappings = null, Object.defineProperty(u.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), u.prototype._charIsMappingSeparator = function(y, _) {
    var b = y.charAt(_);
    return b === ";" || b === ",";
  }, u.prototype._parseMappings = function(y, _) {
    throw new Error("Subclasses must implement _parseMappings");
  }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(y, _, b) {
    var v = _ || null, d = b || u.GENERATED_ORDER, S;
    switch (d) {
      case u.GENERATED_ORDER:
        S = this._generatedMappings;
        break;
      case u.ORIGINAL_ORDER:
        S = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var E = this.sourceRoot;
    S.map(function(O) {
      var w = O.source === null ? null : this._sources.at(O.source);
      return w = t.computeSourceURL(E, w, this._sourceMapURL), {
        source: w,
        generatedLine: O.generatedLine,
        generatedColumn: O.generatedColumn,
        originalLine: O.originalLine,
        originalColumn: O.originalColumn,
        name: O.name === null ? null : this._names.at(O.name)
      };
    }, this).forEach(y, v);
  }, u.prototype.allGeneratedPositionsFor = function(y) {
    var _ = t.getArg(y, "line"), b = {
      source: t.getArg(y, "source"),
      originalLine: _,
      originalColumn: t.getArg(y, "column", 0)
    };
    if (b.source = this._findSourceIndex(b.source), b.source < 0)
      return [];
    var v = [], d = this._findMapping(
      b,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (d >= 0) {
      var S = this._originalMappings[d];
      if (y.column === void 0)
        for (var E = S.originalLine; S && S.originalLine === E; )
          v.push({
            line: t.getArg(S, "generatedLine", null),
            column: t.getArg(S, "generatedColumn", null),
            lastColumn: t.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++d];
      else
        for (var O = S.originalColumn; S && S.originalLine === _ && S.originalColumn == O; )
          v.push({
            line: t.getArg(S, "generatedLine", null),
            column: t.getArg(S, "generatedColumn", null),
            lastColumn: t.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++d];
    }
    return v;
  }, Gs.SourceMapConsumer = u;
  function f(g, y) {
    var _ = g;
    typeof g == "string" && (_ = t.parseSourceMapInput(g));
    var b = t.getArg(_, "version"), v = t.getArg(_, "sources"), d = t.getArg(_, "names", []), S = t.getArg(_, "sourceRoot", null), E = t.getArg(_, "sourcesContent", null), O = t.getArg(_, "mappings"), w = t.getArg(_, "file", null);
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    S && (S = t.normalize(S)), v = v.map(String).map(t.normalize).map(function(D) {
      return S && t.isAbsolute(S) && t.isAbsolute(D) ? t.relative(S, D) : D;
    }), this._names = a.fromArray(d.map(String), !0), this._sources = a.fromArray(v, !0), this._absoluteSources = this._sources.toArray().map(function(D) {
      return t.computeSourceURL(S, D, y);
    }), this.sourceRoot = S, this.sourcesContent = E, this._mappings = O, this._sourceMapURL = y, this.file = w;
  }
  f.prototype = Object.create(u.prototype), f.prototype.consumer = u, f.prototype._findSourceIndex = function(g) {
    var y = g;
    if (this.sourceRoot != null && (y = t.relative(this.sourceRoot, y)), this._sources.has(y))
      return this._sources.indexOf(y);
    var _;
    for (_ = 0; _ < this._absoluteSources.length; ++_)
      if (this._absoluteSources[_] == g)
        return _;
    return -1;
  }, f.fromSourceMap = function(y, _) {
    var b = Object.create(f.prototype), v = b._names = a.fromArray(y._names.toArray(), !0), d = b._sources = a.fromArray(y._sources.toArray(), !0);
    b.sourceRoot = y._sourceRoot, b.sourcesContent = y._generateSourcesContent(
      b._sources.toArray(),
      b.sourceRoot
    ), b.file = y._file, b._sourceMapURL = _, b._absoluteSources = b._sources.toArray().map(function(M) {
      return t.computeSourceURL(b.sourceRoot, M, _);
    });
    for (var S = y._mappings.toArray().slice(), E = b.__generatedMappings = [], O = b.__originalMappings = [], w = 0, D = S.length; w < D; w++) {
      var x = S[w], A = new p();
      A.generatedLine = x.generatedLine, A.generatedColumn = x.generatedColumn, x.source && (A.source = d.indexOf(x.source), A.originalLine = x.originalLine, A.originalColumn = x.originalColumn, x.name && (A.name = v.indexOf(x.name)), O.push(A)), E.push(A);
    }
    return o(b.__originalMappings, t.compareByOriginalPositions), b;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function p() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(y, _) {
    for (var b = 1, v = 0, d = 0, S = 0, E = 0, O = 0, w = y.length, D = 0, x = {}, A = {}, M = [], k = [], P, X, U, G, Q; D < w; )
      if (y.charAt(D) === ";")
        b++, D++, v = 0;
      else if (y.charAt(D) === ",")
        D++;
      else {
        for (P = new p(), P.generatedLine = b, G = D; G < w && !this._charIsMappingSeparator(y, G); G++)
          ;
        if (X = y.slice(D, G), U = x[X], U)
          D += X.length;
        else {
          for (U = []; D < G; )
            s.decode(y, D, A), Q = A.value, D = A.rest, U.push(Q);
          if (U.length === 2)
            throw new Error("Found a source, but no line and column");
          if (U.length === 3)
            throw new Error("Found a source and line, but no column");
          x[X] = U;
        }
        P.generatedColumn = v + U[0], v = P.generatedColumn, U.length > 1 && (P.source = E + U[1], E += U[1], P.originalLine = d + U[2], d = P.originalLine, P.originalLine += 1, P.originalColumn = S + U[3], S = P.originalColumn, U.length > 4 && (P.name = O + U[4], O += U[4])), k.push(P), typeof P.originalLine == "number" && M.push(P);
      }
    o(k, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, o(M, t.compareByOriginalPositions), this.__originalMappings = M;
  }, f.prototype._findMapping = function(y, _, b, v, d, S) {
    if (y[b] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + y[b]);
    if (y[v] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + y[v]);
    return r.search(y, _, d, S);
  }, f.prototype.computeColumnSpans = function() {
    for (var y = 0; y < this._generatedMappings.length; ++y) {
      var _ = this._generatedMappings[y];
      if (y + 1 < this._generatedMappings.length) {
        var b = this._generatedMappings[y + 1];
        if (_.generatedLine === b.generatedLine) {
          _.lastGeneratedColumn = b.generatedColumn - 1;
          continue;
        }
      }
      _.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(y) {
    var _ = {
      generatedLine: t.getArg(y, "line"),
      generatedColumn: t.getArg(y, "column")
    }, b = this._findMapping(
      _,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (b >= 0) {
      var v = this._generatedMappings[b];
      if (v.generatedLine === _.generatedLine) {
        var d = t.getArg(v, "source", null);
        d !== null && (d = this._sources.at(d), d = t.computeSourceURL(this.sourceRoot, d, this._sourceMapURL));
        var S = t.getArg(v, "name", null);
        return S !== null && (S = this._names.at(S)), {
          source: d,
          line: t.getArg(v, "originalLine", null),
          column: t.getArg(v, "originalColumn", null),
          name: S
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, f.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(y) {
      return y == null;
    }) : !1;
  }, f.prototype.sourceContentFor = function(y, _) {
    if (!this.sourcesContent)
      return null;
    var b = this._findSourceIndex(y);
    if (b >= 0)
      return this.sourcesContent[b];
    var v = y;
    this.sourceRoot != null && (v = t.relative(this.sourceRoot, v));
    var d;
    if (this.sourceRoot != null && (d = t.urlParse(this.sourceRoot))) {
      var S = v.replace(/^file:\/\//, "");
      if (d.scheme == "file" && this._sources.has(S))
        return this.sourcesContent[this._sources.indexOf(S)];
      if ((!d.path || d.path == "/") && this._sources.has("/" + v))
        return this.sourcesContent[this._sources.indexOf("/" + v)];
    }
    if (_)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(y) {
    var _ = t.getArg(y, "source");
    if (_ = this._findSourceIndex(_), _ < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var b = {
      source: _,
      originalLine: t.getArg(y, "line"),
      originalColumn: t.getArg(y, "column")
    }, v = this._findMapping(
      b,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (v >= 0) {
      var d = this._originalMappings[v];
      if (d.source === b.source)
        return {
          line: t.getArg(d, "generatedLine", null),
          column: t.getArg(d, "generatedColumn", null),
          lastColumn: t.getArg(d, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Gs.BasicSourceMapConsumer = f;
  function h(g, y) {
    var _ = g;
    typeof g == "string" && (_ = t.parseSourceMapInput(g));
    var b = t.getArg(_, "version"), v = t.getArg(_, "sections");
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    this._sources = new a(), this._names = new a();
    var d = {
      line: -1,
      column: 0
    };
    this._sections = v.map(function(S) {
      if (S.url)
        throw new Error("Support for url field in sections not implemented.");
      var E = t.getArg(S, "offset"), O = t.getArg(E, "line"), w = t.getArg(E, "column");
      if (O < d.line || O === d.line && w < d.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return d = E, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: O + 1,
          generatedColumn: w + 1
        },
        consumer: new u(t.getArg(S, "map"), y)
      };
    });
  }
  return h.prototype = Object.create(u.prototype), h.prototype.constructor = u, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      for (var g = [], y = 0; y < this._sections.length; y++)
        for (var _ = 0; _ < this._sections[y].consumer.sources.length; _++)
          g.push(this._sections[y].consumer.sources[_]);
      return g;
    }
  }), h.prototype.originalPositionFor = function(y) {
    var _ = {
      generatedLine: t.getArg(y, "line"),
      generatedColumn: t.getArg(y, "column")
    }, b = r.search(
      _,
      this._sections,
      function(d, S) {
        var E = d.generatedLine - S.generatedOffset.generatedLine;
        return E || d.generatedColumn - S.generatedOffset.generatedColumn;
      }
    ), v = this._sections[b];
    return v ? v.consumer.originalPositionFor({
      line: _.generatedLine - (v.generatedOffset.generatedLine - 1),
      column: _.generatedColumn - (v.generatedOffset.generatedLine === _.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
      bias: y.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, h.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(y) {
      return y.consumer.hasContentsOfAllSources();
    });
  }, h.prototype.sourceContentFor = function(y, _) {
    for (var b = 0; b < this._sections.length; b++) {
      var v = this._sections[b], d = v.consumer.sourceContentFor(y, !0);
      if (d)
        return d;
    }
    if (_)
      return null;
    throw new Error('"' + y + '" is not in the SourceMap.');
  }, h.prototype.generatedPositionFor = function(y) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var b = this._sections[_];
      if (b.consumer._findSourceIndex(t.getArg(y, "source")) !== -1) {
        var v = b.consumer.generatedPositionFor(y);
        if (v) {
          var d = {
            line: v.line + (b.generatedOffset.generatedLine - 1),
            column: v.column + (b.generatedOffset.generatedLine === v.line ? b.generatedOffset.generatedColumn - 1 : 0)
          };
          return d;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, h.prototype._parseMappings = function(y, _) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var b = 0; b < this._sections.length; b++)
      for (var v = this._sections[b], d = v.consumer._generatedMappings, S = 0; S < d.length; S++) {
        var E = d[S], O = v.consumer._sources.at(E.source);
        O = t.computeSourceURL(v.consumer.sourceRoot, O, this._sourceMapURL), this._sources.add(O), O = this._sources.indexOf(O);
        var w = null;
        E.name && (w = v.consumer._names.at(E.name), this._names.add(w), w = this._names.indexOf(w));
        var D = {
          source: O,
          generatedLine: E.generatedLine + (v.generatedOffset.generatedLine - 1),
          generatedColumn: E.generatedColumn + (v.generatedOffset.generatedLine === E.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
          originalLine: E.originalLine,
          originalColumn: E.originalColumn,
          name: w
        };
        this.__generatedMappings.push(D), typeof D.originalLine == "number" && this.__originalMappings.push(D);
      }
    o(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), o(this.__originalMappings, t.compareByOriginalPositions);
  }, Gs.IndexedSourceMapConsumer = h, Gs;
}
var yd = {}, Ty;
function VE() {
  if (Ty) return yd;
  Ty = 1;
  var t = J0().SourceMapGenerator, r = cl(), a = /(\r?\n)/, s = 10, o = "$$$isSourceNode$$$";
  function u(f, p, h, g, y) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = p ?? null, this.source = h ?? null, this.name = y ?? null, this[o] = !0, g != null && this.add(g);
  }
  return u.fromStringWithSourceMap = function(p, h, g) {
    var y = new u(), _ = p.split(a), b = 0, v = function() {
      var w = x(), D = x() || "";
      return w + D;
      function x() {
        return b < _.length ? _[b++] : void 0;
      }
    }, d = 1, S = 0, E = null;
    return h.eachMapping(function(w) {
      if (E !== null)
        if (d < w.generatedLine)
          O(E, v()), d++, S = 0;
        else {
          var D = _[b] || "", x = D.substr(0, w.generatedColumn - S);
          _[b] = D.substr(w.generatedColumn - S), S = w.generatedColumn, O(E, x), E = w;
          return;
        }
      for (; d < w.generatedLine; )
        y.add(v()), d++;
      if (S < w.generatedColumn) {
        var D = _[b] || "";
        y.add(D.substr(0, w.generatedColumn)), _[b] = D.substr(w.generatedColumn), S = w.generatedColumn;
      }
      E = w;
    }, this), b < _.length && (E && O(E, v()), y.add(_.splice(b).join(""))), h.sources.forEach(function(w) {
      var D = h.sourceContentFor(w);
      D != null && (g != null && (w = r.join(g, w)), y.setSourceContent(w, D));
    }), y;
    function O(w, D) {
      if (w === null || w.source === void 0)
        y.add(D);
      else {
        var x = g ? r.join(g, w.source) : w.source;
        y.add(new u(
          w.originalLine,
          w.originalColumn,
          x,
          D,
          w.name
        ));
      }
    }
  }, u.prototype.add = function(p) {
    if (Array.isArray(p))
      p.forEach(function(h) {
        this.add(h);
      }, this);
    else if (p[o] || typeof p == "string")
      p && this.children.push(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, u.prototype.prepend = function(p) {
    if (Array.isArray(p))
      for (var h = p.length - 1; h >= 0; h--)
        this.prepend(p[h]);
    else if (p[o] || typeof p == "string")
      this.children.unshift(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, u.prototype.walk = function(p) {
    for (var h, g = 0, y = this.children.length; g < y; g++)
      h = this.children[g], h[o] ? h.walk(p) : h !== "" && p(h, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(p) {
    var h, g, y = this.children.length;
    if (y > 0) {
      for (h = [], g = 0; g < y - 1; g++)
        h.push(this.children[g]), h.push(p);
      h.push(this.children[g]), this.children = h;
    }
    return this;
  }, u.prototype.replaceRight = function(p, h) {
    var g = this.children[this.children.length - 1];
    return g[o] ? g.replaceRight(p, h) : typeof g == "string" ? this.children[this.children.length - 1] = g.replace(p, h) : this.children.push("".replace(p, h)), this;
  }, u.prototype.setSourceContent = function(p, h) {
    this.sourceContents[r.toSetString(p)] = h;
  }, u.prototype.walkSourceContents = function(p) {
    for (var h = 0, g = this.children.length; h < g; h++)
      this.children[h][o] && this.children[h].walkSourceContents(p);
    for (var y = Object.keys(this.sourceContents), h = 0, g = y.length; h < g; h++)
      p(r.fromSetString(y[h]), this.sourceContents[y[h]]);
  }, u.prototype.toString = function() {
    var p = "";
    return this.walk(function(h) {
      p += h;
    }), p;
  }, u.prototype.toStringWithSourceMap = function(p) {
    var h = {
      code: "",
      line: 1,
      column: 0
    }, g = new t(p), y = !1, _ = null, b = null, v = null, d = null;
    return this.walk(function(S, E) {
      h.code += S, E.source !== null && E.line !== null && E.column !== null ? ((_ !== E.source || b !== E.line || v !== E.column || d !== E.name) && g.addMapping({
        source: E.source,
        original: {
          line: E.line,
          column: E.column
        },
        generated: {
          line: h.line,
          column: h.column
        },
        name: E.name
      }), _ = E.source, b = E.line, v = E.column, d = E.name, y = !0) : y && (g.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), _ = null, y = !1);
      for (var O = 0, w = S.length; O < w; O++)
        S.charCodeAt(O) === s ? (h.line++, h.column = 0, O + 1 === w ? (_ = null, y = !1) : y && g.addMapping({
          source: E.source,
          original: {
            line: E.line,
            column: E.column
          },
          generated: {
            line: h.line,
            column: h.column
          },
          name: E.name
        })) : h.column++;
    }), this.walkSourceContents(function(S, E) {
      g.setSourceContent(S, E);
    }), { code: h.code, map: g };
  }, yd.SourceNode = u, yd;
}
var Oy;
function YE() {
  return Oy || (Oy = 1, Zs.SourceMapGenerator = J0().SourceMapGenerator, Zs.SourceMapConsumer = GE().SourceMapConsumer, Zs.SourceNode = VE().SourceNode), Zs;
}
var Ny;
function XE() {
  return Ny || (Ny = 1, (function(t, r) {
    r.__esModule = !0;
    var a = rn(), s = void 0;
    try {
      var o = YE();
      s = o.SourceNode;
    } catch {
    }
    s || (s = function(p, h, g, y) {
      this.src = "", y && this.add(y);
    }, s.prototype = {
      add: function(h) {
        a.isArray(h) && (h = h.join("")), this.src += h;
      },
      prepend: function(h) {
        a.isArray(h) && (h = h.join("")), this.src = h + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function u(p, h, g) {
      if (a.isArray(p)) {
        for (var y = [], _ = 0, b = p.length; _ < b; _++)
          y.push(h.wrap(p[_], g));
        return y;
      } else if (typeof p == "boolean" || typeof p == "number")
        return p + "";
      return p;
    }
    function f(p) {
      this.srcFile = p, this.source = [];
    }
    f.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(h, g) {
        this.source.unshift(this.wrap(h, g));
      },
      push: function(h, g) {
        this.source.push(this.wrap(h, g));
      },
      merge: function() {
        var h = this.empty();
        return this.each(function(g) {
          h.add(["  ", g, `
`]);
        }), h;
      },
      each: function(h) {
        for (var g = 0, y = this.source.length; g < y; g++)
          h(this.source[g]);
      },
      empty: function() {
        var h = this.currentLocation || { start: {} };
        return new s(h.start.line, h.start.column, this.srcFile);
      },
      wrap: function(h) {
        var g = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return h instanceof s ? h : (h = u(h, this, g), new s(g.start.line, g.start.column, this.srcFile, h));
      },
      functionCall: function(h, g, y) {
        return y = this.generateList(y), this.wrap([h, g ? "." + g + "(" : "(", y, ")"]);
      },
      quotedString: function(h) {
        return '"' + (h + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(h) {
        var g = this, y = [];
        Object.keys(h).forEach(function(b) {
          var v = u(h[b], g);
          v !== "undefined" && y.push([g.quotedString(b), ":", v]);
        });
        var _ = this.generateList(y);
        return _.prepend("{"), _.add("}"), _;
      },
      generateList: function(h) {
        for (var g = this.empty(), y = 0, _ = h.length; y < _; y++)
          y && g.add(","), g.add(u(h[y], this));
        return g;
      },
      generateArray: function(h) {
        var g = this.generateList(h);
        return g.prepend("["), g.add("]"), g;
      }
    }, r.default = f, t.exports = r.default;
  })(eu, eu.exports)), eu.exports;
}
var Dy;
function $E() {
  return Dy || (Dy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = lh(), o = Fn(), u = a(o), f = rn(), p = XE(), h = a(p);
    function g(b) {
      this.value = b;
    }
    function y() {
    }
    y.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(v, d) {
        return this.internalNameLookup(v, d);
      },
      depthedLookup: function(v) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(v), ")"];
      },
      compilerInfo: function() {
        var v = s.COMPILER_REVISION, d = s.REVISION_CHANGES[v];
        return [v, d];
      },
      appendToBuffer: function(v, d, S) {
        return f.isArray(v) || (v = [v]), v = this.source.wrap(v, d), this.environment.isSimple ? ["return ", v, ";"] : S ? ["buffer += ", v, ";"] : (v.appendToBuffer = !0, v);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(v, d) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", v, ",", JSON.stringify(d), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(v, d, S, E) {
        this.environment = v, this.options = d, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !E, this.name = this.environment.name, this.isChild = !!S, this.context = S || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(v, d), this.useDepths = this.useDepths || v.useDepths || v.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || v.useBlockParams;
        var O = v.opcodes, w = void 0, D = void 0, x = void 0, A = void 0;
        for (x = 0, A = O.length; x < A; x++)
          w = O[x], this.source.currentLocation = w.loc, D = D || w.loc, this[w.opcode].apply(this, w.args);
        if (this.source.currentLocation = D, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), E ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var M = this.createFunctionContext(E);
        if (this.isChild)
          return M;
        var k = {
          compiler: this.compilerInfo(),
          main: M
        };
        this.decorators && (k.main_d = this.decorators, k.useDecorators = !0);
        var P = this.context, X = P.programs, U = P.decorators;
        for (x = 0, A = X.length; x < A; x++)
          X[x] && (k[x] = X[x], U[x] && (k[x + "_d"] = U[x], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), E ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), d.srcName ? (k = k.toStringWithSourceMap({ file: d.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new h.default(this.options.srcName), this.decorators = new h.default(this.options.srcName);
      },
      createFunctionContext: function(v) {
        var d = this, S = "", E = this.stackVars.concat(this.registers.list);
        E.length > 0 && (S += ", " + E.join(", "));
        var O = 0;
        Object.keys(this.aliases).forEach(function(x) {
          var A = d.aliases[x];
          A.children && A.referenceCount > 1 && (S += ", alias" + ++O + "=" + x, A.children[0] = "alias" + O);
        }), this.lookupPropertyFunctionIsUsed && (S += ", " + this.lookupPropertyFunctionVarDeclaration());
        var w = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && w.push("blockParams"), this.useDepths && w.push("depths");
        var D = this.mergeSource(S);
        return v ? (w.push(D), Function.apply(this, w)) : this.source.wrap(["function(", w.join(","), `) {
  `, D, "}"]);
      },
      mergeSource: function(v) {
        var d = this.environment.isSimple, S = !this.forceBuffer, E = void 0, O = void 0, w = void 0, D = void 0;
        return this.source.each(function(x) {
          x.appendToBuffer ? (w ? x.prepend("  + ") : w = x, D = x) : (w && (O ? w.prepend("buffer += ") : E = !0, D.add(";"), w = D = void 0), O = !0, d || (S = !1));
        }), S ? w ? (w.prepend("return "), D.add(";")) : O || this.source.push('return "";') : (v += ", buffer = " + (E ? "" : this.initializeBuffer()), w ? (w.prepend("return buffer + "), D.add(";")) : this.source.push("return buffer;")), v && this.source.prepend("var " + v.substring(2) + (E ? "" : `;
`)), this.source.merge();
      },
      lookupPropertyFunctionVarDeclaration: function() {
        return `
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim();
      },
      // [blockValue]
      //
      // On stack, before: hash, inverse, program, value
      // On stack, after: return value of blockHelperMissing
      //
      // The purpose of this opcode is to take a block of the form
      // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
      // replace it on the stack with the result of properly
      // invoking blockHelperMissing.
      blockValue: function(v) {
        var d = this.aliasable("container.hooks.blockHelperMissing"), S = [this.contextName(0)];
        this.setupHelperArgs(v, 0, S);
        var E = this.popStack();
        S.splice(1, 0, E), this.push(this.source.functionCall(d, "call", S));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var v = this.aliasable("container.hooks.blockHelperMissing"), d = [this.contextName(0)];
        this.setupHelperArgs("", 0, d, !0), this.flushInline();
        var S = this.topStack();
        d.splice(1, 0, S), this.pushSource(["if (!", this.lastHelper, ") { ", S, " = ", this.source.functionCall(v, "call", d), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(v) {
        this.pendingContent ? v = this.pendingContent + v : this.pendingLocation = this.source.currentLocation, this.pendingContent = v;
      },
      // [append]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Coerces `value` to a String and appends it to the current buffer.
      //
      // If `value` is truthy, or 0, it is coerced into a string and appended
      // Otherwise, the empty string is appended
      append: function() {
        if (this.isInline())
          this.replaceStack(function(d) {
            return [" != null ? ", d, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var v = this.popStack();
          this.pushSource(["if (", v, " != null) { ", this.appendToBuffer(v, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
        }
      },
      // [appendEscaped]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Escape `value` and append it to the buffer
      appendEscaped: function() {
        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
      },
      // [getContext]
      //
      // On stack, before: ...
      // On stack, after: ...
      // Compiler value, after: lastContext=depth
      //
      // Set the value of the `lastContext` compiler value to the depth
      getContext: function(v) {
        this.lastContext = v;
      },
      // [pushContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext, ...
      //
      // Pushes the value of the current context onto the stack.
      pushContext: function() {
        this.pushStackLiteral(this.contextName(this.lastContext));
      },
      // [lookupOnContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext[name], ...
      //
      // Looks up the value of `name` on the current context and pushes
      // it onto the stack.
      lookupOnContext: function(v, d, S, E) {
        var O = 0;
        !E && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(v[O++])) : this.pushContext(), this.resolvePath("context", v, O, d, S);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(v, d) {
        this.useBlockParams = !0, this.push(["blockParams[", v[0], "][", v[1], "]"]), this.resolvePath("context", d, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(v, d, S) {
        v ? this.pushStackLiteral("container.data(data, " + v + ")") : this.pushStackLiteral("data"), this.resolvePath("data", d, 0, !0, S);
      },
      resolvePath: function(v, d, S, E, O) {
        var w = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(_(this.options.strict && O, this, d, S, v));
          return;
        }
        for (var D = d.length; S < D; S++)
          this.replaceStack(function(x) {
            var A = w.nameLookup(x, d[S], v);
            return E ? [" && ", A] : [" != null ? ", A, " : ", x];
          });
      },
      // [resolvePossibleLambda]
      //
      // On stack, before: value, ...
      // On stack, after: resolved value, ...
      //
      // If the `value` is a lambda, replace it on the stack by
      // the return value of the lambda
      resolvePossibleLambda: function() {
        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
      },
      // [pushStringParam]
      //
      // On stack, before: ...
      // On stack, after: string, currentContext, ...
      //
      // This opcode is designed for use in string mode, which
      // provides the string value of a parameter along with its
      // depth rather than resolving it immediately.
      pushStringParam: function(v, d) {
        this.pushContext(), this.pushString(d), d !== "SubExpression" && (typeof v == "string" ? this.pushString(v) : this.pushStackLiteral(v));
      },
      emptyHash: function(v) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(v ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var v = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(v.ids)), this.stringParams && (this.push(this.objectLiteral(v.contexts)), this.push(this.objectLiteral(v.types))), this.push(this.objectLiteral(v.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(v) {
        this.pushStackLiteral(this.quotedString(v));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(v) {
        this.pushStackLiteral(v);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(v) {
        v != null ? this.pushStackLiteral(this.programExpression(v)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(v, d) {
        var S = this.nameLookup("decorators", d, "decorator"), E = this.setupHelperArgs(d, v);
        this.decorators.push(["fn = ", this.decorators.functionCall(S, "", ["fn", "props", "container", E]), " || fn;"]);
      },
      // [invokeHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // Pops off the helper's parameters, invokes the helper,
      // and pushes the helper's return value onto the stack.
      //
      // If the helper is not found, `helperMissing` is called.
      invokeHelper: function(v, d, S) {
        var E = this.popStack(), O = this.setupHelper(v, d), w = [];
        S && w.push(O.name), w.push(E), this.options.strict || w.push(this.aliasable("container.hooks.helperMissing"));
        var D = ["(", this.itemsSeparatedBy(w, "||"), ")"], x = this.source.functionCall(D, "call", O.callParams);
        this.push(x);
      },
      itemsSeparatedBy: function(v, d) {
        var S = [];
        S.push(v[0]);
        for (var E = 1; E < v.length; E++)
          S.push(d, v[E]);
        return S;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(v, d) {
        var S = this.setupHelper(v, d);
        this.push(this.source.functionCall(S.name, "call", S.callParams));
      },
      // [invokeAmbiguous]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of disambiguation
      //
      // This operation is used when an expression like `{{foo}}`
      // is provided, but we don't know at compile-time whether it
      // is a helper or a path.
      //
      // This operation emits more code than the other options,
      // and can be avoided by passing the `knownHelpers` and
      // `knownHelpersOnly` flags at compile-time.
      invokeAmbiguous: function(v, d) {
        this.useRegister("helper");
        var S = this.popStack();
        this.emptyHash();
        var E = this.setupHelper(0, v, d), O = this.lastHelper = this.nameLookup("helpers", v, "helper"), w = ["(", "(helper = ", O, " || ", S, ")"];
        this.options.strict || (w[0] = "(helper = ", w.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", w, E.paramsInit ? ["),(", E.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", E.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(v, d, S) {
        var E = [], O = this.setupParams(d, 1, E);
        v && (d = this.popStack(), delete O.name), S && (O.indent = JSON.stringify(S)), O.helpers = "helpers", O.partials = "partials", O.decorators = "container.decorators", v ? E.unshift(d) : E.unshift(this.nameLookup("partials", d, "partial")), this.options.compat && (O.depths = "depths"), O = this.objectLiteral(O), E.push(O), this.push(this.source.functionCall("container.invokePartial", "", E));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(v) {
        var d = this.popStack(), S = void 0, E = void 0, O = void 0;
        this.trackIds && (O = this.popStack()), this.stringParams && (E = this.popStack(), S = this.popStack());
        var w = this.hash;
        S && (w.contexts[v] = S), E && (w.types[v] = E), O && (w.ids[v] = O), w.values[v] = d;
      },
      pushId: function(v, d, S) {
        v === "BlockParam" ? this.pushStackLiteral("blockParams[" + d[0] + "].path[" + d[1] + "]" + (S ? " + " + JSON.stringify("." + S) : "")) : v === "PathExpression" ? this.pushString(d) : v === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: y,
      compileChildren: function(v, d) {
        for (var S = v.children, E = void 0, O = void 0, w = 0, D = S.length; w < D; w++) {
          E = S[w], O = new this.compiler();
          var x = this.matchExistingProgram(E);
          if (x == null) {
            this.context.programs.push("");
            var A = this.context.programs.length;
            E.index = A, E.name = "program" + A, this.context.programs[A] = O.compile(E, d, this.context, !this.precompile), this.context.decorators[A] = O.decorators, this.context.environments[A] = E, this.useDepths = this.useDepths || O.useDepths, this.useBlockParams = this.useBlockParams || O.useBlockParams, E.useDepths = this.useDepths, E.useBlockParams = this.useBlockParams;
          } else
            E.index = x.index, E.name = "program" + x.index, this.useDepths = this.useDepths || x.useDepths, this.useBlockParams = this.useBlockParams || x.useBlockParams;
        }
      },
      matchExistingProgram: function(v) {
        for (var d = 0, S = this.context.environments.length; d < S; d++) {
          var E = this.context.environments[d];
          if (E && E.equals(v))
            return E;
        }
      },
      programExpression: function(v) {
        var d = this.environment.children[v], S = [d.index, "data", d.blockParams];
        return (this.useBlockParams || this.useDepths) && S.push("blockParams"), this.useDepths && S.push("depths"), "container.program(" + S.join(", ") + ")";
      },
      useRegister: function(v) {
        this.registers[v] || (this.registers[v] = !0, this.registers.list.push(v));
      },
      push: function(v) {
        return v instanceof g || (v = this.source.wrap(v)), this.inlineStack.push(v), v;
      },
      pushStackLiteral: function(v) {
        this.push(new g(v));
      },
      pushSource: function(v) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), v && this.source.push(v);
      },
      replaceStack: function(v) {
        var d = ["("], S = void 0, E = void 0, O = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var w = this.popStack(!0);
        if (w instanceof g)
          S = [w.value], d = ["(", S], O = !0;
        else {
          E = !0;
          var D = this.incrStack();
          d = ["((", this.push(D), " = ", w, ")"], S = this.topStack();
        }
        var x = v.call(this, S);
        O || this.popStack(), E && this.stackSlot--, this.push(d.concat(x, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var v = this.inlineStack;
        this.inlineStack = [];
        for (var d = 0, S = v.length; d < S; d++) {
          var E = v[d];
          if (E instanceof g)
            this.compileStack.push(E);
          else {
            var O = this.incrStack();
            this.pushSource([O, " = ", E, ";"]), this.compileStack.push(O);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(v) {
        var d = this.isInline(), S = (d ? this.inlineStack : this.compileStack).pop();
        if (!v && S instanceof g)
          return S.value;
        if (!d) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return S;
      },
      topStack: function() {
        var v = this.isInline() ? this.inlineStack : this.compileStack, d = v[v.length - 1];
        return d instanceof g ? d.value : d;
      },
      contextName: function(v) {
        return this.useDepths && v ? "depths[" + v + "]" : "depth" + v;
      },
      quotedString: function(v) {
        return this.source.quotedString(v);
      },
      objectLiteral: function(v) {
        return this.source.objectLiteral(v);
      },
      aliasable: function(v) {
        var d = this.aliases[v];
        return d ? (d.referenceCount++, d) : (d = this.aliases[v] = this.source.wrap(v), d.aliasable = !0, d.referenceCount = 1, d);
      },
      setupHelper: function(v, d, S) {
        var E = [], O = this.setupHelperArgs(d, v, E, S), w = this.nameLookup("helpers", d, "helper"), D = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: E,
          paramsInit: O,
          name: w,
          callParams: [D].concat(E)
        };
      },
      setupParams: function(v, d, S) {
        var E = {}, O = [], w = [], D = [], x = !S, A = void 0;
        x && (S = []), E.name = this.quotedString(v), E.hash = this.popStack(), this.trackIds && (E.hashIds = this.popStack()), this.stringParams && (E.hashTypes = this.popStack(), E.hashContexts = this.popStack());
        var M = this.popStack(), k = this.popStack();
        (k || M) && (E.fn = k || "container.noop", E.inverse = M || "container.noop");
        for (var P = d; P--; )
          A = this.popStack(), S[P] = A, this.trackIds && (D[P] = this.popStack()), this.stringParams && (w[P] = this.popStack(), O[P] = this.popStack());
        return x && (E.args = this.source.generateArray(S)), this.trackIds && (E.ids = this.source.generateArray(D)), this.stringParams && (E.types = this.source.generateArray(w), E.contexts = this.source.generateArray(O)), this.options.data && (E.data = "data"), this.useBlockParams && (E.blockParams = "blockParams"), E;
      },
      setupHelperArgs: function(v, d, S, E) {
        var O = this.setupParams(v, d, S);
        return O.loc = JSON.stringify(this.source.currentLocation), O = this.objectLiteral(O), E ? (this.useRegister("options"), S.push("options"), ["options=", O]) : S ? (S.push(O), "") : O;
      }
    }, (function() {
      for (var b = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), v = y.RESERVED_WORDS = {}, d = 0, S = b.length; d < S; d++)
        v[b[d]] = !0;
    })(), y.isValidJavaScriptVariableName = function(b) {
      return !y.RESERVED_WORDS[b] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(b);
    };
    function _(b, v, d, S, E) {
      var O = v.popStack(), w = d.length;
      for (b && w--; S < w; S++)
        O = v.nameLookup(O, d[S], E);
      return b ? [v.aliasable("container.strict"), "(", O, ", ", v.quotedString(d[S]), ", ", JSON.stringify(v.source.currentLocation), " )"] : O;
    }
    r.default = y, t.exports = r.default;
  })(Wo, Wo.exports)), Wo.exports;
}
var My;
function QE() {
  return My || (My = 1, (function(t, r) {
    r.__esModule = !0;
    function a(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var s = zE(), o = a(s), u = Y0(), f = a(u), p = BE(), h = UE(), g = $E(), y = a(g), _ = X0(), b = a(_), v = V0(), d = a(v), S = o.default.create;
    function E() {
      var w = S();
      return w.compile = function(D, x) {
        return h.compile(D, x, w);
      }, w.precompile = function(D, x) {
        return h.precompile(D, x, w);
      }, w.AST = f.default, w.Compiler = h.Compiler, w.JavaScriptCompiler = y.default, w.Parser = p.parser, w.parse = p.parse, w.parseWithoutProcessing = p.parseWithoutProcessing, w;
    }
    var O = E();
    O.create = E, d.default(O), O.Visitor = b.default, O.default = O, r.default = O, t.exports = r.default;
  })(ko, ko.exports)), ko.exports;
}
var Yt = QE();
function Ui(t, r) {
  Yt.helpers[t] || Yt.registerHelper(t, r);
}
Ui("add", (t, r) => Number(t) + Number(r));
Ui("join", (t, r) => Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "");
Ui("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
Ui("indent", (t, r) => {
  const a = " ".repeat(Math.max(0, Number(t) || 0));
  return String(r ?? "").split(`
`).join(`
${a}`);
});
Ui("json", (t) => JSON.stringify(t));
Ui(
  "xmlEscape",
  (t) => String(t ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
);
const Hn = SillyTavern.getContext(), Jn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Sr = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
}, JE = "Continue the current text of the {{targetField}} field from exactly where it stops. Output only the new text that comes after it, in the required output format. Do not repeat, rewrite or summarize the existing text.";
new c0("dumb", {}).getSettings();
async function KE({
  profileId: t,
  userPrompt: r,
  buildPromptOptions: a,
  continueFrom: s,
  session: o,
  allCharacters: u,
  entriesGroupByWorldName: f,
  promptSettings: p,
  formatDescription: h,
  mainContextList: g,
  includeUserMacro: y,
  maxResponseToken: _,
  targetField: b,
  outputFormat: v
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const d = Hn.extensionSettings.connectionManager?.profiles?.find((A) => A.id === t);
  if (!d)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const S = d.api ? Hn.CONNECT_API_MAP[d.api].selected : void 0;
  if (!S)
    throw new Error(`Could not determine API for profile "${d.name}".`);
  const E = {};
  E.char = o.fields.name.value ?? "{{char}}", E.user = y && _r ? _r : "{{user}}", E.persona = "{{persona}}", E.targetField = b, E.userInstructions = Yt.compile(r.trim(), { noEscape: !0 })(E), E.fieldSpecificInstructions = Yt.compile(
    o.draftFields[b]?.prompt ?? o.fields[b]?.prompt,
    { noEscape: !0 }
  )({
    ...E,
    char: b === "mes_example" ? "{{char}}" : E.char,
    user: b === "mes_example" ? "{{user}}" : E.user
  }), E.activeFormatInstructions = Yt.compile(h.content, { noEscape: !0 })(
    E
  );
  {
    const A = [];
    o.selectedCharacterIndexes.forEach((M) => {
      const k = parseInt(M), P = u[k];
      P && A.push(P);
    }), E.characters = A;
  }
  {
    const A = {};
    Object.entries(f).filter(
      ([M, k]) => k.length > 0 && o.selectedWorldNames.includes(M) && k.some((P) => !P.disable)
    ).forEach(([M, k]) => {
      A[M] = k.filter((P) => !P.disable);
    }), E.lorebooks = A;
  }
  {
    const A = {}, M = {}, k = {}, P = b.startsWith("alternate_greetings_"), X = Tt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(o.fields).forEach(([G, Q]) => {
      let oe = !1;
      if (X) {
        const fe = G.startsWith("alternate_greetings_");
        P ? oe = fe && G !== b || G === "first_mes" : oe = fe;
      }
      if (!oe) {
        const fe = Yt.compile(Q.value, { noEscape: !0 })({
          ...E,
          char: G === "mes_example" ? "{{char}}" : E.char,
          user: G === "mes_example" ? "{{user}}" : E.user
        });
        Jn.includes(G) ? A[Q.label] = fe : G.startsWith("alternate_greetings_") && (M[G] = fe);
      }
    }), Object.entries(o.draftFields || {}).forEach(([G, Q]) => {
      k[Q.label] = Yt.compile(Q.value, { noEscape: !0 })(E);
    });
    const U = {};
    Object.keys(A).length > 0 && (U.core = A), Object.keys(M).length > 0 && (U.alternate_greetings = M), Object.keys(k).length > 0 && (U.draft = k), E.fields = U;
  }
  const O = [];
  {
    for (const A of g) {
      if (A.promptName === "chatHistory") {
        const X = await _0(S, a);
        if (X.warnings && X.warnings.length > 0)
          for (const U of X.warnings)
            we("warning", U);
        O.push(...X.result);
        continue;
      }
      let M = structuredClone(E);
      A.promptName === "stDescription" && (M.char = "{{char}}", M.user = "{{user}}");
      const k = p[A.promptName];
      if (!k)
        continue;
      const P = {
        role: A.role,
        content: Yt.compile(k.content, { noEscape: !0 })(M)
      };
      P.content = P.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), P.content = P.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), P.content = Hn.substituteParams(P.content), P.content = P.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), P.content = P.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), P.content && O.push(P);
    }
    s && (O.push({
      role: "user",
      content: Yt.compile(JE, { noEscape: !0 })(E)
    }), O.push({
      role: "assistant",
      content: q0(s, v)
    }));
  }
  const w = await Hn.ConnectionManagerRequestService.sendRequest(
    t,
    O,
    _
  );
  if (s) {
    const A = SE(s, w.content, v);
    return A.trim() === s.trim() ? (we("warning", "The model didn't add any text. Try again or use a different model."), s) : A;
  }
  const D = Eu(w.content, v);
  let x;
  if (typeof D == "string")
    x = D;
  else if (typeof D == "object" && D !== null)
    if ("response" in D && typeof D.response == "string")
      x = D.response;
    else {
      const A = Object.values(D)[0];
      x = A ? String(A) : "";
    }
  else
    x = "";
  return x;
}
function WE(t, r) {
  const a = t.match(/\d+/g)?.map(Number) ?? [], s = r.match(/\d+/g)?.map(Number) ?? [];
  for (let o = 0; o < Math.max(a.length, s.length); o++) {
    const u = (a[o] ?? 0) - (s[o] ?? 0);
    if (u !== 0) return u;
  }
  return 0;
}
async function eC(t, r) {
  let a, s = t.formatVersion;
  for (; ; ) {
    const o = (f) => WE(f.to, s) > 0, u = r.find((f) => f.from === s && o(f)) ?? r.find((f) => f.from === "*" && o(f));
    if (!u) return a;
    a = await u.action(a ?? structuredClone(t)), a.formatVersion = u.to, s = u.to;
  }
}
const ka = "SillyTavern-Character-Creator", oh = "0.3.0", tC = "F_1.10", K0 = {
  EXTENSION: "charCreator"
}, ru = [
  "stDescription",
  "charDefinitions",
  "lorebookDefinitions",
  "xmlFormat",
  "jsonFormat",
  "noneFormat",
  "worldInfoCharDefinition",
  "existingFieldDefinitions",
  "taskDescription",
  "outputFormatInstructions",
  "personaDescription",
  "reviseJsonPrompt",
  "reviseXmlPrompt",
  "reviseTaskDescription"
], et = {
  stDescription: zd,
  charDefinitions: Ld,
  lorebookDefinitions: z0,
  xmlFormat: cx,
  jsonFormat: fx,
  noneFormat: dx,
  worldInfoCharDefinition: L0,
  existingFieldDefinitions: il,
  taskDescription: ah,
  outputFormatInstructions: rh,
  personaDescription: hx,
  reviseJsonPrompt: px,
  reviseXmlPrompt: mx,
  reviseTaskDescription: gx
}, W0 = {
  version: oh,
  formatVersion: tC,
  profileId: "",
  maxContextType: "profile",
  maxContextValue: 16384,
  maxResponseToken: 1024,
  outputFormat: "xml",
  contextToSend: {
    stDescription: !0,
    messages: {
      type: "last",
      first: 10,
      last: 10,
      range: {
        start: 0,
        end: 10
      }
    },
    charCard: !0,
    existingFields: !0,
    worldInfo: !0,
    persona: !0,
    dontSendOtherGreetings: !1
  },
  defaultPromptEngineeringMode: "native",
  // Updated prompts structure
  prompts: {
    stDescription: {
      content: et.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: et.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: et.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: et.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: et.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: et.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: et.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: il,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: ah,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: rh,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: et.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: et.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: et.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: et.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
    }
  },
  // Generic Prompt Presets
  promptPreset: "default",
  promptPresets: {
    default: {
      content: "Generate the field content based on the chat history and existing character details. Be creative but consistent."
    }
  },
  mainContextTemplatePreset: "default",
  mainContextTemplatePresets: {
    default: {
      prompts: [
        {
          enabled: !0,
          promptName: "chatHistory",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "stDescription",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "charDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "lorebookDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "existingFieldDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "personaDescription",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "outputFormatInstructions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "taskDescription",
          role: "user"
        }
      ]
    }
  },
  // World Info
  showSaveAsWorldInfoEntry: {
    show: !1
  }
};
function Ud(t) {
  const a = t.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let s = !1;
  return a.map((o, u) => {
    const f = o.replace(/^\d+/, "");
    if (f) {
      const p = s ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return s || (s = !0), p;
    }
    return "";
  }).join("");
}
const Tt = new c0(K0.EXTENSION, W0);
async function nC() {
  return new Promise((t, r) => {
    Tt.initializeSettings({ strategy: [] }).then(
      () => eC(Tt.getSettings(), [
        {
          from: "*",
          to: "F_1.4",
          action(a) {
            return {
              profileId: a?.profileId ?? "",
              maxContextType: a?.maxContextType ?? "profile",
              maxContextValue: a?.maxContextValue ?? 16384,
              maxResponseToken: a?.maxResponseToken ?? 1024,
              outputFormat: a?.outputFormat ?? "xml",
              contextToSend: {
                ...a?.contextToSend,
                persona: !0
              },
              // Updated prompts structure
              prompts: {
                stDescription: {
                  content: et.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: et.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: et.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: et.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: et.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: et.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: et.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: il,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: ah,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: rh,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: et.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Generic Prompt Presets
              promptPreset: a?.promptPreset ?? "default",
              promptPresets: a?.promptPresets ?? {
                default: {
                  content: "Generate the field content based on the chat history and existing character details. Be creative but consistent."
                }
              },
              mainContextTemplatePreset: "default",
              mainContextTemplatePresets: {
                default: {
                  prompts: [
                    {
                      enabled: !0,
                      promptName: "chatHistory",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "stDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "charDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "lorebookDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "existingFieldDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "personaDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "outputFormatInstructions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "taskDescription",
                      role: "user"
                    }
                  ]
                }
              },
              // World Info
              showSaveAsWorldInfoEntry: a?.showSaveAsWorldInfoEntry ?? {
                show: a?.showSaveAsWorldInfoEntry.show ?? !1
              }
            };
          }
        },
        {
          from: "F_1.4",
          to: "F_1.5",
          action(a) {
            return {
              ...a,
              // Update persona
              prompts: {
                ...a?.prompts,
                personaDescription: {
                  content: et.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Reset default main context
              mainContextTemplatePresets: {
                ...a?.mainContextTemplatePresets,
                default: {
                  prompts: [
                    {
                      enabled: !0,
                      promptName: "chatHistory",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "stDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "charDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "lorebookDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "existingFieldDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "personaDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "outputFormatInstructions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "taskDescription",
                      role: "user"
                    }
                  ]
                }
              }
            };
          }
        },
        {
          from: "F_1.5",
          to: "F_1.6",
          async action(a) {
            return await we("info", `[${ka}] Added Alternate Greetings.`), {
              ...a,
              prompts: {
                ...a?.prompts,
                stDescription: {
                  content: et.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: et.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: et.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: il,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                }
              }
            };
          }
        },
        {
          from: "F_1.6",
          to: "F_1.7",
          async action(a) {
            const s = {
              ...a
            };
            return a.prompts.stDescription.isDefault && (s.prompts.stDescription.content = zd), s;
          }
        },
        {
          from: "F_1.7",
          to: "F_1.8",
          action(a) {
            const s = {
              ...a,
              defaultPromptEngineeringMode: "native"
            };
            return s.prompts || (s.prompts = {}), s.prompts.reviseJsonPrompt = {
              content: et.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: et.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: et.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, a.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Ld), a.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = z0), a.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = il), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(a) {
            const s = {
              ...a
            };
            return a.prompts.stDescription.isDefault && (s.prompts.stDescription.content = zd), s;
          }
        },
        {
          from: "F_1.9",
          to: "F_1.10",
          action(a) {
            const s = {
              ...a
            };
            return a.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Ld), a.prompts.worldInfoCharDefinition.isDefault && (s.prompts.worldInfoCharDefinition.content = L0), s;
          }
        }
      ])
    ).then((a) => {
      a && (Hn.extensionSettings[K0.EXTENSION] = { ...a, version: oh }, Tt.saveSettings()), t();
    }).catch((a) => {
      console.error(`[${ka}] Error initializing settings:`, a), we("error", `[${ka}] Failed to initialize settings: ${a.message}`), Hn.Popup.show.confirm(
        `[${ka}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (Tt.resetSettings(), we("success", `[${ka}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const _e = ({ children: t, className: r, overrideDefaults: a = !1, ...s }) => {
  const o = ee.useMemo(() => {
    const u = [];
    return a || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [a, r]);
  return /* @__PURE__ */ T.jsx("button", { className: o, ...s, children: t });
}, rC = ({ label: t, className: r, overrideDefaults: a = !1, type: s = "text", ...o }) => {
  const u = ee.useMemo(() => {
    const f = [];
    return a || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [a, r, s]);
  if (s === "checkbox") {
    const f = a ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ T.jsxs("label", { className: f, children: [
      /* @__PURE__ */ T.jsx("input", { type: "checkbox", ...o }),
      t && /* @__PURE__ */ T.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ T.jsx("input", { type: s, className: u, ...o });
}, Cu = ({ children: t, className: r, overrideDefaults: a = !1, ...s }) => {
  const o = ee.useMemo(() => {
    const u = [];
    return a || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [a, r]);
  return /* @__PURE__ */ T.jsx("select", { className: o, ...s, children: t });
}, kn = ({ children: t, className: r, overrideDefaults: a = !1, ...s }) => {
  const o = ee.useMemo(() => {
    const u = [];
    return a || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [a, r]);
  return /* @__PURE__ */ T.jsx("textarea", { className: o, ...s, children: t });
};
var aC = o0(), vn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(vn || {}), Kr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Kr || {});
const iC = SillyTavern.getContext(), Li = ({
  content: t,
  type: r,
  inputValue: a = "",
  options: s = {},
  preventEscape: o = !1,
  onComplete: u
}) => {
  var f;
  const p = ee.useRef(null), h = ee.useRef(null), [g, y] = ee.useState(!1), [_, b] = ee.useState(null), v = ee.useRef(iC.uuidv4()), d = ee.useRef({
    id: v.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  ee.useEffect(() => {
    const w = p.current;
    if (!w) return;
    const D = (x) => {
      x.preventDefault(), o || S(Kr.CANCELLED);
    };
    return w.addEventListener("cancel", D), d.current.dlg = w, d.current.mainInput = h.current, wi.util.popups.push(d.current), w.showModal || (w.classList.add("poly_dialog"), ov.registerDialog(w), new ResizeObserver((x) => {
      for (const A of x)
        ov.reposition(A.target);
    }).observe(w)), w.showModal(), Xf(), () => {
      lv(wi.util.popups, d.current), Xf(), w.removeEventListener("cancel", D);
    };
  }, []);
  const S = async (w) => {
    var D, x;
    let A = w;
    if (r === vn.INPUT && (w >= Kr.AFFIRMATIVE ? A = (D = h.current) == null ? void 0 : D.value : w === Kr.NEGATIVE ? A = !1 : w === Kr.CANCELLED ? A = null : A = !1), (x = s.customInputs) != null && x.length) {
      const k = new Map(
        s.customInputs.map((P) => {
          var X;
          const U = (X = p.current) == null ? void 0 : X.querySelector(`#${P.id}`);
          return [U.id, U.checked];
        })
      );
      d.current.inputResults = k;
    }
    if (d.current.result = w, d.current.value = A, s.onClosing && !await s.onClosing(d.current)) {
      y(!0), d.current.value = void 0, d.current.result = void 0, d.current.inputResults = void 0;
      return;
    }
    y(!1), wi.util.lastResult = {
      value: A,
      result: w,
      inputResults: d.current.inputResults
    };
    const M = p.current;
    M && (M.setAttribute("closing", ""), Xf(), g_(M, async () => {
      var k;
      if (M.close(), s.onClose && await s.onClose(d.current), lv(wi.util.popups, d.current), wi.util.popups.length > 0) {
        const P = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), X = P?.getAttribute("data-id"), U = wi.util.popups.find((G) => G.id === X);
        U && U.lastFocus && U.lastFocus.focus();
      }
      u(A);
    }));
  }, E = (w) => {
    w.target instanceof HTMLElement && w.target !== p.current && (b(w.target), d.current.lastFocus = w.target);
  }, O = async (w) => {
  };
  return aC.createPortal(
    /* @__PURE__ */ T.jsx(
      "dialog",
      {
        ref: p,
        className: (() => {
          const w = ["popup"];
          return s.wide && w.push("wide_dialogue_popup"), s.wider && w.push("wider_dialogue_popup"), s.large && w.push("large_dialogue_popup"), s.transparent && w.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && w.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && w.push("vertical_scrolling_dialogue_popup"), s.animation && w.push(`popup--animation-${s.animation}`), w.join(" ");
        })(),
        "data-id": v.current,
        onKeyDown: O,
        onFocus: E,
        children: /* @__PURE__ */ T.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ T.jsx("div", { className: "popup-content", children: t }),
          r === vn.INPUT && /* @__PURE__ */ T.jsx(
            "textarea",
            {
              ref: h,
              className: "popup-input text_pole result-control auto-select",
              rows: s.rows ?? 1,
              defaultValue: a,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          s.customInputs && /* @__PURE__ */ T.jsx("div", { className: "popup-inputs", children: s.customInputs.map((w) => /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: w.id, children: [
            /* @__PURE__ */ T.jsx("input", { type: "checkbox", id: w.id, defaultChecked: w.defaultState }),
            /* @__PURE__ */ T.jsx("span", { "data-i18n": w.label, children: w.label }),
            w.tooltip && /* @__PURE__ */ T.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: w.tooltip,
                "data-i18n": `[title]${w.tooltip}`
              }
            )
          ] }, w.id)) }),
          r !== vn.DISPLAY && /* @__PURE__ */ T.jsxs("div", { className: "popup-controls", children: [
            (f = s.customButtons) == null ? void 0 : f.map((w, D) => {
              const x = typeof w == "string" ? { text: w, result: D + 2 } : w;
              return /* @__PURE__ */ T.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${x.classes ?? ""}`,
                  "data-result": x.result,
                  onClick: () => {
                    var A;
                    (A = x.action) == null || A.call(x), S(x.result ?? D + 2);
                  },
                  "data-i18n": x.text,
                  children: x.text
                },
                D
              );
            }),
            r !== vn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ T.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => S(Kr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== vn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ T.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => S(Kr.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === vn.DISPLAY && /* @__PURE__ */ T.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => S(Kr.CANCELLED),
              "data-result": "0",
              title: "Close popup",
              "data-i18n": "[title]Close popup"
            }
          )
        ] })
      }
    ),
    document.body
  );
}, Vs = (t, r, a) => {
  if (!t || !t.api)
    return !1;
  const s = a[t.api];
  if (!s || !Object.hasOwn(r, s.selected))
    return !1;
  switch (s.selected) {
    case "openai":
      return !!s.source;
    case "textgenerationwebui":
      return !!s.type;
  }
  return !1;
}, br = SillyTavern.getContext(), e1 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: a = "Select a Connection Profile",
  onChange: s,
  onCreate: o,
  onUpdate: u,
  onDelete: f
}) => {
  const [p, h] = ee.useState(t ?? ""), [g, y] = ee.useState(Date.now()), { isEnabled: _, profiles: b, connectApiMap: v } = ee.useMemo(() => {
    var E, O;
    return (E = br.extensionSettings.disabledExtensions) != null && E.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((O = br.extensionSettings.connectionManager) == null ? void 0 : O.profiles) ?? [],
      connectApiMap: br.CONNECT_API_MAP
    };
  }, [g]);
  ee.useEffect(() => {
    if (!_) return;
    const E = (D) => {
      Vs(D, r, v) && (y(Date.now()), o?.(D));
    }, O = (D, x) => {
      const A = Vs(D, r, v), M = Vs(x, r, v);
      (A || M) && y(Date.now()), u?.(D, x), p === D.id && !M && (h(""), s?.(void 0));
    }, w = (D) => {
      Vs(D, r, v) && (y(Date.now()), f?.(D), p === D.id && (h(""), s?.(void 0)));
    };
    return br.eventSource.on("CONNECTION_PROFILE_CREATED", E), br.eventSource.on("CONNECTION_PROFILE_UPDATED", O), br.eventSource.on("CONNECTION_PROFILE_DELETED", w), () => {
      br.eventSource.removeListener("CONNECTION_PROFILE_CREATED", E), br.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), br.eventSource.removeListener("CONNECTION_PROFILE_DELETED", w);
    };
  }, [_, p, r, v, s, o, u, f]);
  const d = ee.useMemo(() => {
    if (!_) return [];
    const E = b.filter((w) => Vs(w, r, v)), O = {};
    for (const [w, D] of Object.entries(r))
      O[w] = { label: D, profiles: [] };
    for (const w of E) {
      const D = v[w.api];
      O[D.selected] && O[D.selected].profiles.push(w);
    }
    for (const w of Object.values(O))
      w.profiles.sort((D, x) => (D.name ?? "").localeCompare(x.name ?? ""));
    return Object.values(O).filter((w) => w.profiles.length > 0);
  }, [_, b, r, v]), S = ee.useCallback(
    (E) => {
      const O = E.target.value;
      h(O);
      const w = b.find((D) => D.id === O);
      s?.(w);
    },
    [b, s]
  );
  return _ ? /* @__PURE__ */ T.jsxs(Cu, { value: p, onChange: S, children: [
    /* @__PURE__ */ T.jsx("option", { value: "", children: a }),
    d.map((E) => /* @__PURE__ */ T.jsx("optgroup", { label: E.label, children: E.profiles.map((O) => /* @__PURE__ */ T.jsx("option", { value: O.id, children: O.name }, O.id)) }, E.label))
  ] }) : /* @__PURE__ */ T.jsx(Cu, { disabled: !0, value: "", children: /* @__PURE__ */ T.jsx("option", { children: "Connection Manager disabled" }) });
}, sC = mu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: a, showSelectInput: s, onToggle: o, onDelete: u, onSelectChange: f }) => {
    const {
      id: p,
      label: h,
      enabled: g,
      canDelete: y = !0,
      canToggle: _ = !0,
      showSelect: b = !0,
      canSelect: v = !0,
      selectOptions: d = [],
      selectValue: S
    } = t, E = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !g ? 0.6 : 1
    }, O = { cursor: "pointer", flexShrink: 0 }, w = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ T.jsxs("li", { className: "sortable-list-item", style: E, "data-id": p, children: [
      /* @__PURE__ */ T.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ T.jsx(
        "span",
        {
          className: "item-label",
          style: {
            flexGrow: 1,
            marginRight: "10px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: h
        }
      ),
      s && b && v && /* @__PURE__ */ T.jsx(
        Cu,
        {
          value: S,
          onChange: (D) => f(p, D.target.value),
          disabled: !g,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: d.length === 0 ? /* @__PURE__ */ T.jsx("option", { disabled: !0, children: "--" }) : d.map((D) => /* @__PURE__ */ T.jsx("option", { value: D.value, children: D.label }, D.value))
        }
      ),
      s && (!b || !v) && /* @__PURE__ */ T.jsx("span", { style: w }),
      r && _ && /* @__PURE__ */ T.jsx(
        _e,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${g ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...O,
            marginRight: "10px",
            fontSize: "1.2em",
            color: g ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => o(p)
        }
      ),
      r && !_ && /* @__PURE__ */ T.jsx("span", { style: w }),
      a && y && /* @__PURE__ */ T.jsx(
        _e,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...O,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(p)
        }
      ),
      a && !y && /* @__PURE__ */ T.jsx("span", { style: { ...w, marginRight: 0 } })
    ] });
  }
), lC = ({
  items: t,
  onItemsChange: r,
  showToggleButton: a = !1,
  showDeleteButton: s = !1,
  showSelectInput: o = !1,
  sortableJsOptions: u = {}
}) => {
  const f = ee.useRef(null), p = ee.useRef(null);
  ee.useEffect(() => (f.current && (p.current = Oe.create(f.current, {
    handle: ".drag-handle",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    filter: "select, button, .toggle-button, .delete-button",
    // Prevent drag on controls
    preventOnFilter: !1,
    ...u,
    onEnd: (_) => {
      const { oldIndex: b, newIndex: v } = _;
      if (b === void 0 || v === void 0 || b === v)
        return;
      const d = Array.from(t), [S] = d.splice(b, 1);
      d.splice(v, 0, S), r(d);
    }
  })), () => {
    var _;
    (_ = p.current) == null || _.destroy(), p.current = null;
  }), [t, r, u]);
  const h = (_) => {
    r(t.map((b) => b.id === _ ? { ...b, enabled: !b.enabled } : b));
  }, g = (_) => {
    r(t.filter((b) => b.id !== _));
  }, y = (_, b) => {
    r(t.map((v) => v.id === _ ? { ...v, selectValue: b } : v));
  };
  return /* @__PURE__ */ T.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((_) => /* @__PURE__ */ T.jsx(
    sC,
    {
      item: _,
      showToggleButton: a,
      showDeleteButton: s,
      showSelectInput: o,
      onToggle: h,
      onDelete: g,
      onSelectChange: y
    },
    _.id
  )) });
}, au = ({
  items: t,
  value: r,
  onChange: a,
  placeholder: s = "Select items...",
  closeOnSelect: o = !1,
  multiple: u = !0,
  disabled: f = !1,
  onBeforeSelection: p,
  enableSearch: h = !1,
  searchPlaceholder: g = "Search...",
  searchNoResultsText: y = "No results found",
  searchFuseOptions: _,
  inputClasses: b,
  containerClasses: v
}) => {
  const [d, S] = ee.useState(!1), [E, O] = ee.useState(""), w = ee.useRef(null);
  ee.useEffect(() => {
    const k = (P) => {
      w.current && !w.current.contains(P.target) && S(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), ee.useEffect(() => {
    d || O("");
  }, [d]);
  const D = ee.useMemo(() => {
    if (!h) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ..._
    };
    return new Bi(t, k);
  }, [t, h, _]), x = ee.useMemo(() => !h || !E.trim() || !D ? t : D.search(E.trim()).map((k) => k.item), [t, E, h, D]), A = async (k) => {
    let P;
    u ? P = r.includes(k) ? r.filter((X) => X !== k) : [...r, k] : P = r.includes(k) ? [] : [k], !(p && !await Promise.resolve(p(r, P))) && (a(P), o && S(!1));
  }, M = ee.useMemo(() => {
    var k;
    return r.length === 0 ? s : r.length === 1 ? ((k = t.find((P) => P.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ T.jsxs(
    "div",
    {
      ref: w,
      className: `fancy-dropdown-container ${v ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: f ? 0.6 : 1,
        pointerEvents: f ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ T.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !f && S(!d),
            style: {
              padding: "8px 12px",
              border: "1px solid var(--border-color)",
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ T.jsx("span", { className: "fancy-dropdown-trigger-text", children: M }),
              /* @__PURE__ */ T.jsx("i", { className: `fas ${d ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        d && /* @__PURE__ */ T.jsxs(
          "div",
          {
            className: "fancy-dropdown-list",
            style: {
              position: "absolute",
              top: "100%",
              left: "0",
              right: "0",
              maxHeight: "300px",
              zIndex: 1050,
              border: "1px solid var(--border-color)",
              borderTop: "none",
              backgroundColor: "var(--bg-color-popup, var(--bg-color-secondary, var(--greyCAIbg, var(--grey30))))",
              color: "var(--text-color)",
              borderRadius: "0 0 4px 4px",
              boxShadow: "0 4px 8px var(--black50a)",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column"
            },
            children: [
              h && /* @__PURE__ */ T.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ T.jsx(
                    rC,
                    {
                      type: "text",
                      placeholder: g,
                      value: E,
                      onChange: (k) => O(k.target.value),
                      autoFocus: !0,
                      className: b
                    }
                  )
                }
              ),
              /* @__PURE__ */ T.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: x.length > 0 ? x.map((k) => /* @__PURE__ */ T.jsx(
                oC,
                {
                  item: k,
                  isSelected: r.includes(k.value),
                  onClick: A
                },
                k.value
              )) : /* @__PURE__ */ T.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: y
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, oC = mu.memo(({ item: t, isSelected: r, onClick: a }) => {
  const [s, o] = ee.useState(!1);
  return /* @__PURE__ */ T.jsxs(
    "li",
    {
      onClick: () => a(t.value),
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      style: {
        padding: "8px 12px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: r ? "var(--accent-color-bg, var(--link-color))" : s ? "var(--hover-color, var(--white20a))" : "transparent"
      },
      children: [
        /* @__PURE__ */ T.jsx("span", { children: t.label }),
        r && /* @__PURE__ */ T.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), bd = SillyTavern.getContext(), wu = ({
  value: t,
  items: r,
  readOnlyValues: a = [],
  label: s,
  onChange: o,
  onItemsChange: u,
  enableCreate: f = !1,
  enableRename: p = !1,
  enableDelete: h = !1,
  onCreate: g,
  onRename: y,
  onDelete: _,
  buttons: b
}) => {
  const v = ee.useMemo(() => r.find((w) => w.value === t), [r, t]), d = ee.useCallback((w) => w ? a.includes(w) : !1, [a]), S = async () => {
    const w = await bd.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!w || w.trim() === "") return;
    const D = w.trim();
    if (r.some((A) => A.value === D)) {
      await we("warning", `A ${s} with this name already exists.`);
      return;
    }
    let x = { value: D, label: D };
    if (g) {
      const A = await Promise.resolve(g(D));
      if (!A.confirmed) return;
      A.value && (typeof A.value == "string" ? x = { value: A.value, label: A.value } : x = A.value);
    }
    u([...r, x]), o(x.value, t);
  }, E = async () => {
    if (!v) {
      await we("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (d(v.value)) {
      await we("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const w = await bd.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${v.label}":`,
      v.label
    );
    if (!w || w.trim() === "" || w.trim() === v.value) return;
    const D = w.trim();
    if (r.some((M) => M.value === D)) {
      await we("warning", `A ${s} with this name already exists.`);
      return;
    }
    let x = { value: D, label: D };
    if (y) {
      const M = await Promise.resolve(y(v.value, D));
      if (!M.confirmed) return;
      M.value && (typeof M.value == "string" ? x = { value: M.value, label: M.value } : x = M.value);
    }
    const A = r.map((M) => M.value === v.value ? x : M);
    u(A), o(x.value, t);
  }, O = async () => {
    var w;
    if (!v) {
      await we("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (d(v.value)) {
      await we("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await bd.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${v.label}"?`
    ) || _ && !await Promise.resolve(_(v.value)))
      return;
    const D = r.findIndex((M) => M.value === v.value), x = r.filter((M) => M.value !== v.value);
    u(x);
    let A;
    if (x.length > 0) {
      const M = Math.min(D, x.length - 1);
      A = (w = x[M]) == null ? void 0 : w.value;
    }
    o(A, t);
  };
  return /* @__PURE__ */ T.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ T.jsx(Cu, { value: t ?? "", onChange: (w) => o(w.target.value, t), children: r.map((w) => /* @__PURE__ */ T.jsx("option", { value: w.value, children: w.label }, w.value)) }),
    f && /* @__PURE__ */ T.jsx(
      _e,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: S,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ T.jsx(
      _e,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: E,
        disabled: !v,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ T.jsx(
      _e,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: O,
        disabled: !v,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    b?.map((w) => /* @__PURE__ */ T.jsx(
      _e,
      {
        className: w.icon,
        title: w.title,
        onClick: w.onClick,
        disabled: w.disabled,
        "data-i18n": w.i18n ? `[title]${w.i18n}` : void 0
      },
      w.key
    ))
  ] });
}, t1 = () => {
  const [, t] = ee.useState(0);
  return ee.useCallback(() => {
    t((a) => a + 1);
  }, []);
}, _d = SillyTavern.getContext(), uC = () => {
  const t = t1(), r = Tt.getSettings(), [a, s] = ee.useState(ru[0]), o = ee.useCallback(
    (x) => {
      const A = Tt.getSettings();
      x(A), Tt.saveSettings(), t();
    },
    [t]
  ), u = ee.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((x) => ({ value: x, label: x })),
    [r.mainContextTemplatePresets]
  ), f = ee.useMemo(
    () => Object.entries(r.prompts).map(([x, A]) => ({
      value: x,
      label: `${A.label} (${x})`
    })),
    [r.prompts]
  ), p = ee.useMemo(() => {
    const x = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return x ? x.prompts.map((A) => {
      const M = r.prompts[A.promptName], k = M ? `${M.label} (${A.promptName})` : A.promptName;
      return {
        id: A.promptName,
        label: k,
        enabled: A.enabled,
        selectValue: A.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), h = (x) => {
    o((A) => {
      A.mainContextTemplatePreset = x ?? "default";
    });
  }, g = (x) => {
    o((A) => {
      const M = {};
      x.forEach((k) => {
        M[k.value] = A.mainContextTemplatePresets[k.value] ?? structuredClone(
          A.mainContextTemplatePresets[A.mainContextTemplatePreset] ?? A.mainContextTemplatePresets.default
        );
      }), A.mainContextTemplatePresets = M;
    });
  }, y = (x) => {
    o((A) => {
      const M = x.map((X) => ({
        promptName: X.id,
        enabled: X.enabled,
        role: X.selectValue ?? "user"
      })), k = {
        ...A.mainContextTemplatePresets[A.mainContextTemplatePreset],
        prompts: M
      }, P = {
        ...A.mainContextTemplatePresets,
        [A.mainContextTemplatePreset]: k
      };
      A.mainContextTemplatePresets = P;
    });
  }, _ = async () => {
    await _d.Popup.show.confirm("Restore default", "Are you sure?") && o((A) => {
      A.mainContextTemplatePresets = {
        ...A.mainContextTemplatePresets,
        default: structuredClone(W0.mainContextTemplatePresets.default)
      }, A.mainContextTemplatePreset === "default" ? t() : A.mainContextTemplatePreset = "default";
    });
  }, b = (x) => {
    o((A) => {
      const M = x.map((U) => U.value);
      Object.keys(A.prompts).filter((U) => !M.includes(U)).forEach((U) => {
        Object.values(A.mainContextTemplatePresets).forEach((G) => {
          G.prompts = G.prompts.filter((Q) => Q.promptName !== U);
        });
      });
      const X = {};
      x.forEach((U) => {
        X[U.value] = A.prompts[U.value] ?? { content: "", isDefault: !1, label: U.label };
      }), A.prompts = X;
    });
  }, v = (x) => {
    const A = Ud(x);
    return A ? r.prompts[A] ? (we("error", `Prompt name already exists: ${A}`), { confirmed: !1 }) : (o((M) => {
      M.prompts = {
        ...M.prompts,
        [A]: { content: M.prompts[a]?.content ?? "", isDefault: !1, label: x }
      };
      const k = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([P, X]) => [
          P,
          {
            ...X,
            prompts: [...X.prompts, { enabled: !0, promptName: A, role: "user" }]
          }
        ])
      );
      M.mainContextTemplatePresets = k;
    }), s(A), { confirmed: !0, value: A }) : (we("error", `Invalid prompt name: ${x}`), { confirmed: !1 });
  }, d = (x, A) => {
    const M = Ud(A);
    return M ? r.prompts[M] ? (we("error", `Prompt name already exists: ${M}`), { confirmed: !1 }) : (o((k) => {
      const { [x]: P, ...X } = k.prompts;
      k.prompts = {
        ...X,
        [M]: { ...P, label: A }
      };
      const U = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([G, Q]) => [
          G,
          {
            ...Q,
            prompts: Q.prompts.map((oe) => oe.promptName === x ? { ...oe, promptName: M } : oe)
          }
        ])
      );
      k.mainContextTemplatePresets = U;
    }), s(M), { confirmed: !0, value: M }) : (we("error", `Invalid prompt name: ${A}`), { confirmed: !1 });
  }, S = (x) => {
    const A = x.target.value;
    o((M) => {
      const k = M.prompts[a];
      k && (M.prompts = {
        ...M.prompts,
        [a]: {
          ...k,
          // Copy existing properties
          content: A,
          isDefault: ru.includes(a) ? et[a] === A : !1
        }
      });
    });
  }, E = async () => {
    const x = r.prompts[a];
    if (!x) return we("warning", "No prompt selected.");
    await _d.Popup.show.confirm("Restore Default", `Restore default for "${x.label}"?`) && o((M) => {
      M.prompts = {
        ...M.prompts,
        [a]: {
          ...M.prompts[a],
          content: et[a]
        }
      };
    });
  }, O = async () => {
    await _d.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (Tt.resetSettings(), t(), we("success", "Settings have been reset."));
  }, w = r.prompts[a], D = ru.includes(a);
  return /* @__PURE__ */ T.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ T.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ T.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ T.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ T.jsx(
          _e,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: _
          }
        )
      ] }),
      /* @__PURE__ */ T.jsx(
        wu,
        {
          label: "Template",
          items: u,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: h,
          onItemsChange: g,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ T.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ T.jsx(
        lC,
        {
          items: p,
          onItemsChange: y,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ T.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ T.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ T.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ T.jsx("span", { children: "Prompt Templates" }),
        D && /* @__PURE__ */ T.jsx(
          _e,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: E
          }
        )
      ] }),
      /* @__PURE__ */ T.jsx(
        wu,
        {
          label: "Prompt",
          items: f,
          value: a,
          readOnlyValues: ru,
          onChange: (x) => s(x ?? ""),
          onItemsChange: b,
          onCreate: v,
          onRename: d,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ T.jsx(
        kn,
        {
          value: w?.content ?? "",
          onChange: S,
          placeholder: "Edit the selected prompt template here...",
          rows: 6,
          style: { marginTop: "5px", width: "100%" }
        }
      )
    ] }),
    /* @__PURE__ */ T.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", style: { marginTop: "15px" }, children: [
      /* @__PURE__ */ T.jsx(
        "input",
        {
          type: "checkbox",
          checked: r.showSaveAsWorldInfoEntry.show,
          onChange: (x) => o((A) => {
            A.showSaveAsWorldInfoEntry.show = x.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ T.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ T.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ T.jsxs(_e, { className: "danger_button", style: { width: "auto" }, onClick: O, children: [
      /* @__PURE__ */ T.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, ky = ({
  fieldId: t,
  label: r,
  value: a,
  prompt: s,
  large: o = !1,
  rows: u = 3,
  promptEnabled: f = !0,
  isDraft: p = !1,
  isGenerating: h = !1,
  onValueChange: g,
  onPromptChange: y,
  onGenerate: _,
  onContinue: b,
  onClear: v,
  onCompare: d,
  onDelete: S,
  onOpenReviseSessions: E
}) => /* @__PURE__ */ T.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ T.jsx("label", { children: r }),
  /* @__PURE__ */ T.jsxs("div", { className: `field-container ${o ? "large-field" : ""}`, children: [
    /* @__PURE__ */ T.jsx(kn, { value: a, onChange: (O) => g(t, O.target.value), rows: u }),
    /* @__PURE__ */ T.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ T.jsx(_e, { onClick: () => _(t), disabled: h, title: "Generate field content", children: h ? /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ T.jsx(_e, { onClick: () => b(t), disabled: h, title: "Continue from current content", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ T.jsx(_e, { onClick: () => v(t), title: "Clear field content", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-eraser" }) }),
      E && !p && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ T.jsx(_e, { onClick: () => E(t), title: "Revise with AI chat", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-comments" }) }),
      !p && d && /* @__PURE__ */ T.jsx(_e, { onClick: () => d(t), title: "Compare with loaded character", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      p && S && /* @__PURE__ */ T.jsx(_e, { onClick: () => S(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  f && /* @__PURE__ */ T.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ T.jsx(
    kn,
    {
      value: s,
      onChange: (O) => y(t, O.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), cC = SillyTavern.getContext(), fC = ({
  greetings: t,
  onGreetingsChange: r,
  onGenerate: a,
  onContinue: s,
  onCompare: o,
  isGenerating: u
}) => {
  const [f, p] = ee.useState(0);
  ee.useEffect(() => {
    f >= t.length && t.length > 0 ? p(t.length - 1) : t.length === 0 && p(0);
  }, [t, f]);
  const h = () => {
    const b = [...t, { value: "", prompt: "" }];
    r(b), p(b.length - 1);
  }, g = async () => {
    if (t.length === 0) return;
    if (await cC.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const v = t.filter((d, S) => S !== f);
      r(v);
    }
  }, y = (b, v, d) => {
    const S = [...t];
    S[b][v] = d, r(S);
  }, _ = t[f];
  return /* @__PURE__ */ T.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ T.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ T.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ T.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((b, v) => /* @__PURE__ */ T.jsxs(
            _e,
            {
              onClick: () => p(v),
              className: `menu_button ${v === f ? "active" : ""}`,
              children: [
                "Greeting ",
                v + 1
              ]
            },
            v
          ))
        }
      ),
      /* @__PURE__ */ T.jsxs(_e, { onClick: h, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ T.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ T.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ T.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ T.jsx(
          kn,
          {
            value: _?.value ?? "",
            onChange: (b) => y(f, "value", b.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ T.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ T.jsx(
          kn,
          {
            value: _?.prompt ?? "",
            onChange: (b) => y(f, "prompt", b.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ T.jsx(_e, { onClick: () => a(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ T.jsx(_e, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ T.jsx(
          _e,
          {
            onClick: () => y(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ T.jsx(_e, { onClick: () => o(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ T.jsx(
          _e,
          {
            onClick: g,
            disabled: u,
            title: "Delete greeting",
            className: "danger_button",
            children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        )
      ] })
    ] })
  ] });
};
var aa = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.diff = function(r, a, s) {
      s === void 0 && (s = {});
      var o;
      typeof s == "function" ? (o = s, s = {}) : "callback" in s && (o = s.callback);
      var u = this.castInput(r, s), f = this.castInput(a, s), p = this.removeEmpty(this.tokenize(u, s)), h = this.removeEmpty(this.tokenize(f, s));
      return this.diffWithOptionsObj(p, h, s, o);
    }, t.prototype.diffWithOptionsObj = function(r, a, s, o) {
      var u = this, f, p = function(x) {
        if (x = u.postProcess(x, s), o) {
          setTimeout(function() {
            o(x);
          }, 0);
          return;
        } else
          return x;
      }, h = a.length, g = r.length, y = 1, _ = h + g;
      s.maxEditLength != null && (_ = Math.min(_, s.maxEditLength));
      var b = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, v = Date.now() + b, d = [{ oldPos: -1, lastComponent: void 0 }], S = this.extractCommon(d[0], a, r, 0, s);
      if (d[0].oldPos + 1 >= g && S + 1 >= h)
        return p(this.buildValues(d[0].lastComponent, a, r));
      var E = -1 / 0, O = 1 / 0, w = function() {
        for (var x = Math.max(E, -y); x <= Math.min(O, y); x += 2) {
          var A = void 0, M = d[x - 1], k = d[x + 1];
          M && (d[x - 1] = void 0);
          var P = !1;
          if (k) {
            var X = k.oldPos - x;
            P = k && 0 <= X && X < h;
          }
          var U = M && M.oldPos + 1 < g;
          if (!P && !U) {
            d[x] = void 0;
            continue;
          }
          if (!U || P && M.oldPos < k.oldPos ? A = u.addToPath(k, !0, !1, 0, s) : A = u.addToPath(M, !1, !0, 1, s), S = u.extractCommon(A, a, r, x, s), A.oldPos + 1 >= g && S + 1 >= h)
            return p(u.buildValues(A.lastComponent, a, r)) || !0;
          d[x] = A, A.oldPos + 1 >= g && (O = Math.min(O, x - 1)), S + 1 >= h && (E = Math.max(E, x + 1));
        }
        y++;
      };
      if (o)
        (function x() {
          setTimeout(function() {
            if (y > _ || Date.now() > v)
              return o(void 0);
            w() || x();
          }, 0);
        })();
      else
        for (; y <= _ && Date.now() <= v; ) {
          var D = w();
          if (D)
            return D;
        }
    }, t.prototype.addToPath = function(r, a, s, o, u) {
      var f = r.lastComponent;
      return f && !u.oneChangePerToken && f.added === a && f.removed === s ? {
        oldPos: r.oldPos + o,
        lastComponent: { count: f.count + 1, added: a, removed: s, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + o,
        lastComponent: { count: 1, added: a, removed: s, previousComponent: f }
      };
    }, t.prototype.extractCommon = function(r, a, s, o, u) {
      for (var f = a.length, p = s.length, h = r.oldPos, g = h - o, y = 0; g + 1 < f && h + 1 < p && this.equals(s[h + 1], a[g + 1], u); )
        g++, h++, y++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return y && !u.oneChangePerToken && (r.lastComponent = { count: y, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = h, g;
    }, t.prototype.equals = function(r, a, s) {
      return s.comparator ? s.comparator(r, a) : r === a || !!s.ignoreCase && r.toLowerCase() === a.toLowerCase();
    }, t.prototype.removeEmpty = function(r) {
      for (var a = [], s = 0; s < r.length; s++)
        r[s] && a.push(r[s]);
      return a;
    }, t.prototype.castInput = function(r, a) {
      return r;
    }, t.prototype.tokenize = function(r, a) {
      return Array.from(r);
    }, t.prototype.join = function(r) {
      return r.join("");
    }, t.prototype.postProcess = function(r, a) {
      return r;
    }, Object.defineProperty(t.prototype, "useLongestToken", {
      get: function() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.buildValues = function(r, a, s) {
      for (var o = [], u; r; )
        o.push(r), u = r.previousComponent, delete r.previousComponent, r = u;
      o.reverse();
      for (var f = o.length, p = 0, h = 0, g = 0; p < f; p++) {
        var y = o[p];
        if (y.removed)
          y.value = this.join(s.slice(g, g + y.count)), g += y.count;
        else {
          if (!y.added && this.useLongestToken) {
            var _ = a.slice(h, h + y.count);
            _ = _.map(function(b, v) {
              var d = s[g + v];
              return d.length > b.length ? d : b;
            }), y.value = this.join(_);
          } else
            y.value = this.join(a.slice(h, h + y.count));
          h += y.count, y.added || (g += y.count);
        }
      }
      return o;
    }, t;
  })()
), dC = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, a);
  };
  return function(r, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(r, a);
    function s() {
      this.constructor = r;
    }
    r.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
})(), hC = (
  /** @class */
  (function(t) {
    dC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(aa)
);
new hC();
function Ry(t, r) {
  var a;
  for (a = 0; a < t.length && a < r.length; a++)
    if (t[a] != r[a])
      return t.slice(0, a);
  return t.slice(0, a);
}
function jy(t, r) {
  var a;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (a = 0; a < t.length && a < r.length; a++)
    if (t[t.length - (a + 1)] != r[r.length - (a + 1)])
      return t.slice(-a);
  return t.slice(-a);
}
function Hd(t, r, a) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return a + t.slice(r.length);
}
function qd(t, r, a) {
  if (!r)
    return t + a;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + a;
}
function Ys(t, r) {
  return Hd(t, r, "");
}
function iu(t, r) {
  return qd(t, r, "");
}
function zy(t, r) {
  return r.slice(0, pC(t, r));
}
function pC(t, r) {
  var a = 0;
  t.length > r.length && (a = t.length - r.length);
  var s = r.length;
  t.length < r.length && (s = t.length);
  var o = Array(s), u = 0;
  o[0] = 0;
  for (var f = 1; f < s; f++) {
    for (r[f] == r[u] ? o[f] = o[u] : o[f] = u; u > 0 && r[f] != r[u]; )
      u = o[u];
    r[f] == r[u] && u++;
  }
  u = 0;
  for (var p = a; p < t.length; p++) {
    for (; u > 0 && t[p] != r[u]; )
      u = o[u];
    t[p] == r[u] && u++;
  }
  return u;
}
function Xs(t) {
  var r;
  for (r = t.length - 1; r >= 0 && t[r].match(/\s/); r--)
    ;
  return t.substring(r + 1);
}
function Jr(t) {
  var r = t.match(/^\s*/);
  return r ? r[0] : "";
}
var n1 = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, a);
  };
  return function(r, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(r, a);
    function s() {
      this.constructor = r;
    }
    r.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
})(), Au = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", mC = new RegExp("[".concat(Au, "]+|\\s+|[^").concat(Au, "]"), "ug"), gC = (
  /** @class */
  (function(t) {
    n1(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(a, s, o) {
      return o.ignoreCase && (a = a.toLowerCase(), s = s.toLowerCase()), a.trim() === s.trim();
    }, r.prototype.tokenize = function(a, s) {
      s === void 0 && (s = {});
      var o;
      if (s.intlSegmenter) {
        var u = s.intlSegmenter;
        if (u.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        o = Array.from(u.segment(a), function(h) {
          return h.segment;
        });
      } else
        o = a.match(mC) || [];
      var f = [], p = null;
      return o.forEach(function(h) {
        /\s/.test(h) ? p == null ? f.push(h) : f.push(f.pop() + h) : p != null && /\s/.test(p) ? f[f.length - 1] == p ? f.push(f.pop() + h) : f.push(p + h) : f.push(h), p = h;
      }), f;
    }, r.prototype.join = function(a) {
      return a.map(function(s, o) {
        return o == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(a, s) {
      if (!a || s.oneChangePerToken)
        return a;
      var o = null, u = null, f = null;
      return a.forEach(function(p) {
        p.added ? u = p : p.removed ? f = p : ((u || f) && Ly(o, f, u, p), o = p, u = null, f = null);
      }), (u || f) && Ly(o, f, u, null), a;
    }, r;
  })(aa)
), vC = new gC();
function r1(t, r, a) {
  return vC.diff(t, r, a);
}
function Ly(t, r, a, s) {
  if (r && a) {
    var o = Jr(r.value), u = Xs(r.value), f = Jr(a.value), p = Xs(a.value);
    if (t) {
      var h = Ry(o, f);
      t.value = qd(t.value, f, h), r.value = Ys(r.value, h), a.value = Ys(a.value, h);
    }
    if (s) {
      var g = jy(u, p);
      s.value = Hd(s.value, p, g), r.value = iu(r.value, g), a.value = iu(a.value, g);
    }
  } else if (a) {
    if (t) {
      var y = Jr(a.value);
      a.value = a.value.substring(y.length);
    }
    if (s) {
      var y = Jr(s.value);
      s.value = s.value.substring(y.length);
    }
  } else if (t && s) {
    var _ = Jr(s.value), b = Jr(r.value), v = Xs(r.value), d = Ry(_, b);
    r.value = Ys(r.value, d);
    var S = jy(Ys(_, d), v);
    r.value = iu(r.value, S), s.value = Hd(s.value, _, S), t.value = qd(t.value, _, _.slice(0, _.length - S.length));
  } else if (s) {
    var E = Jr(s.value), O = Xs(r.value), w = zy(O, E);
    r.value = iu(r.value, w);
  } else if (t) {
    var D = Xs(t.value), x = Jr(r.value), w = zy(D, x);
    r.value = Ys(r.value, w);
  }
}
var yC = (
  /** @class */
  (function(t) {
    n1(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      var s = new RegExp("(\\r?\\n)|[".concat(Au, "]+|[^\\S\\n\\r]+|[^").concat(Au, "]"), "ug");
      return a.match(s) || [];
    }, r;
  })(aa)
);
new yC();
var bC = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, a);
  };
  return function(r, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(r, a);
    function s() {
      this.constructor = r;
    }
    r.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
})(), _C = (
  /** @class */
  (function(t) {
    bC(r, t);
    function r() {
      var a = t !== null && t.apply(this, arguments) || this;
      return a.tokenize = a1, a;
    }
    return r.prototype.equals = function(a, s, o) {
      return o.ignoreWhitespace ? ((!o.newlineIsToken || !a.includes(`
`)) && (a = a.trim()), (!o.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : o.ignoreNewlineAtEof && !o.newlineIsToken && (a.endsWith(`
`) && (a = a.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), t.prototype.equals.call(this, a, s, o);
    }, r;
  })(aa)
);
new _C();
function a1(t, r) {
  r.stripTrailingCr && (t = t.replace(/\r\n/g, `
`));
  var a = [], s = t.split(/(\n|\r\n)/);
  s[s.length - 1] || s.pop();
  for (var o = 0; o < s.length; o++) {
    var u = s[o];
    o % 2 && !r.newlineIsToken ? a[a.length - 1] += u : a.push(u);
  }
  return a;
}
var SC = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, a);
  };
  return function(r, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(r, a);
    function s() {
      this.constructor = r;
    }
    r.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
})(), xC = (
  /** @class */
  (function(t) {
    SC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      return a.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(aa)
);
new xC();
var EC = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, a);
  };
  return function(r, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(r, a);
    function s() {
      this.constructor = r;
    }
    r.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
})(), CC = (
  /** @class */
  (function(t) {
    EC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      return a.split(/([{}:;,]|\s+)/);
    }, r;
  })(aa)
);
new CC();
var wC = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, a);
  };
  return function(r, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(r, a);
    function s() {
      this.constructor = r;
    }
    r.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
})(), AC = (
  /** @class */
  (function(t) {
    wC(r, t);
    function r() {
      var a = t !== null && t.apply(this, arguments) || this;
      return a.tokenize = a1, a;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(a, s) {
      var o = s.undefinedReplacement, u = s.stringifyReplacer, f = u === void 0 ? function(p, h) {
        return typeof h > "u" ? o : h;
      } : u;
      return typeof a == "string" ? a : JSON.stringify(Fd(a, null, null, f), null, "  ");
    }, r.prototype.equals = function(a, s, o) {
      return t.prototype.equals.call(this, a.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), o);
    }, r;
  })(aa)
);
new AC();
function Fd(t, r, a, s, o) {
  r = r || [], a = a || [], s && (t = s(o === void 0 ? "" : o, t));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === t)
      return a[u];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), a.push(f), u = 0; u < t.length; u += 1)
      f[u] = Fd(t[u], r, a, s, String(u));
    return r.pop(), a.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, a.push(f);
    var p = [], h;
    for (h in t)
      Object.prototype.hasOwnProperty.call(t, h) && p.push(h);
    for (p.sort(), u = 0; u < p.length; u += 1)
      h = p[u], f[h] = Fd(t[h], r, a, s, h);
    r.pop(), a.pop();
  } else
    f = t;
  return f;
}
var TC = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, a);
  };
  return function(r, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(r, a);
    function s() {
      this.constructor = r;
    }
    r.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
})(), OC = (
  /** @class */
  (function(t) {
    TC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      return a.slice();
    }, r.prototype.join = function(a) {
      return a;
    }, r.prototype.removeEmpty = function(a) {
      return a;
    }, r;
  })(aa)
);
new OC();
const NC = ({ originalContent: t, newContent: r, fieldName: a }) => {
  const s = ee.useMemo(() => {
    const o = r1(t, r);
    let u = "", f = "";
    return o.forEach((p) => {
      const g = `<span style="${p.added ? "color: green; background-color: #e6ffed;" : p.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p.value}</span>`;
      p.added || (u += g), p.removed || (f += g);
    }), { originalHtml: u, newHtml: f };
  }, [t, r]);
  return /* @__PURE__ */ T.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ T.jsxs("h3", { children: [
      "Compare Changes for: ",
      a
    ] }),
    /* @__PURE__ */ T.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ T.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ T.jsx("h4", { children: "Loaded Character Content" }),
        /* @__PURE__ */ T.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ T.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ T.jsx("h4", { children: "Current Content" }),
        /* @__PURE__ */ T.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.newHtml }
          }
        )
      ] })
    ] })
  ] });
}, DC = (t) => Object.entries(t.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, a) => {
  const s = parseInt(r[0].split("_")[2]), o = parseInt(a[0].split("_")[2]);
  return s - o;
}).map(([, r]) => ({ value: r.value, prompt: r.prompt })), MC = (t, r, a, s) => {
  const o = structuredClone(t);
  if (a === "field" && s) {
    const u = r;
    return o.fields[s] && (o.fields[s].value = u.response), o;
  }
  if (a === "global") {
    const u = r;
    if (u.fields_to_change?.length)
      for (const h of u.fields_to_change)
        o.fields[h.field] ? o.fields[h.field].value = h.value : o.draftFields[h.field] && (o.draftFields[h.field].value = h.value);
    if (u.draft_fields_to_remove?.length)
      for (const h of u.draft_fields_to_remove)
        o.draftFields[h] && delete o.draftFields[h];
    let f = DC(o), p = !1;
    if (u.greetings_to_change?.length) {
      p = !0;
      for (const h of u.greetings_to_change)
        h.index > 0 && h.index <= f.length && (f[h.index - 1].value = h.value);
    }
    if (u.greetings_to_remove?.length) {
      p = !0;
      const h = new Set(u.greetings_to_remove.map((g) => g - 1));
      f = f.filter((g, y) => !h.has(y));
    }
    u.greetings_to_add?.length && (p = !0, f.push(...u.greetings_to_add.map((h) => ({ value: h, prompt: "" })))), p && (Object.keys(o.fields).forEach((h) => {
      h.startsWith("alternate_greetings_") && delete o.fields[h];
    }), f.forEach((h, g) => {
      const y = `alternate_greetings_${g + 1}`;
      o.fields[y] = {
        ...h,
        label: `Alternate Greeting ${g + 1}`
      };
    }));
  }
  return o;
}, kC = (t, r) => {
  const a = Object.fromEntries(
    Object.entries(t.fields).filter(([s]) => !s.startsWith("alternate_greetings_"))
  );
  return {
    ...t,
    fields: { ...a, ...r.fields },
    draftFields: { ...r.draftFields }
  };
};
function W(t, r, a) {
  function s(p, h) {
    var g;
    Object.defineProperty(p, "_zod", {
      value: p._zod ?? {},
      enumerable: !1
    }), (g = p._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), p._zod.traits.add(t), r(p, h);
    for (const y in f.prototype)
      y in p || Object.defineProperty(p, y, { value: f.prototype[y].bind(p) });
    p._zod.constr = f, p._zod.def = h;
  }
  const o = a?.Parent ?? Object;
  class u extends o {
  }
  Object.defineProperty(u, "name", { value: t });
  function f(p) {
    var h;
    const g = a?.Parent ? new u() : this;
    s(g, p), (h = g._zod).deferred ?? (h.deferred = []);
    for (const y of g._zod.deferred)
      y();
    return g;
  }
  return Object.defineProperty(f, "init", { value: s }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (p) => a?.Parent && p instanceof a.Parent ? !0 : p?._zod?.traits?.has(t)
  }), Object.defineProperty(f, "name", { value: t }), f;
}
class Pi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class i1 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const s1 = {};
function za(t) {
  return s1;
}
function l1(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, o]) => r.indexOf(+s) === -1).map(([s, o]) => o);
}
function Zd(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function uh(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function ch(t) {
  return t == null;
}
function fh(t) {
  const r = t.startsWith("^") ? 1 : 0, a = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, a);
}
function RC(t, r) {
  const a = (t.toString().split(".")[1] || "").length, s = r.toString();
  let o = (s.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(s)) {
    const h = s.match(/\d?e-(\d?)/);
    h?.[1] && (o = Number.parseInt(h[1]));
  }
  const u = a > o ? a : o, f = Number.parseInt(t.toFixed(u).replace(".", "")), p = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % p / 10 ** u;
}
const Py = Symbol("evaluating");
function rt(t, r, a) {
  let s;
  Object.defineProperty(t, r, {
    get() {
      if (s !== Py)
        return s === void 0 && (s = Py, s = a()), s;
    },
    set(o) {
      Object.defineProperty(t, r, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Pa(t, r, a) {
  Object.defineProperty(t, r, {
    value: a,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Ia(...t) {
  const r = {};
  for (const a of t) {
    const s = Object.getOwnPropertyDescriptors(a);
    Object.assign(r, s);
  }
  return Object.defineProperties({}, r);
}
function Iy(t) {
  return JSON.stringify(t);
}
const o1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Tu(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const jC = uh(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function sl(t) {
  if (Tu(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const a = r.prototype;
  return !(Tu(a) === !1 || Object.prototype.hasOwnProperty.call(a, "isPrototypeOf") === !1);
}
function u1(t) {
  return sl(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const zC = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ku(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ia(t, r, a) {
  const s = new t._zod.constr(r ?? t._zod.def);
  return (!r || a?.parent) && (s._zod.parent = t), s;
}
function be(t) {
  const r = t;
  if (!r)
    return {};
  if (typeof r == "string")
    return { error: () => r };
  if (r?.message !== void 0) {
    if (r?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    r.error = r.message;
  }
  return delete r.message, typeof r.error == "string" ? { ...r, error: () => r.error } : r;
}
function LC(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const PC = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function IC(t, r) {
  const a = t._zod.def, s = Ia(t._zod.def, {
    get shape() {
      const o = {};
      for (const u in r) {
        if (!(u in a.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && (o[u] = a.shape[u]);
      }
      return Pa(this, "shape", o), o;
    },
    checks: []
  });
  return ia(t, s);
}
function BC(t, r) {
  const a = t._zod.def, s = Ia(t._zod.def, {
    get shape() {
      const o = { ...t._zod.def.shape };
      for (const u in r) {
        if (!(u in a.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && delete o[u];
      }
      return Pa(this, "shape", o), o;
    },
    checks: []
  });
  return ia(t, s);
}
function UC(t, r) {
  if (!sl(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const a = t._zod.def.checks;
  if (a && a.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = Ia(t._zod.def, {
    get shape() {
      const u = { ...t._zod.def.shape, ...r };
      return Pa(this, "shape", u), u;
    },
    checks: []
  });
  return ia(t, o);
}
function HC(t, r) {
  if (!sl(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const a = {
    ...t._zod.def,
    get shape() {
      const s = { ...t._zod.def.shape, ...r };
      return Pa(this, "shape", s), s;
    },
    checks: t._zod.def.checks
  };
  return ia(t, a);
}
function qC(t, r) {
  const a = Ia(t._zod.def, {
    get shape() {
      const s = { ...t._zod.def.shape, ...r._zod.def.shape };
      return Pa(this, "shape", s), s;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ia(t, a);
}
function FC(t, r, a) {
  const s = Ia(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, u = { ...o };
      if (a)
        for (const f in a) {
          if (!(f in o))
            throw new Error(`Unrecognized key: "${f}"`);
          a[f] && (u[f] = t ? new t({
            type: "optional",
            innerType: o[f]
          }) : o[f]);
        }
      else
        for (const f in o)
          u[f] = t ? new t({
            type: "optional",
            innerType: o[f]
          }) : o[f];
      return Pa(this, "shape", u), u;
    },
    checks: []
  });
  return ia(r, s);
}
function ZC(t, r, a) {
  const s = Ia(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, u = { ...o };
      if (a)
        for (const f in a) {
          if (!(f in u))
            throw new Error(`Unrecognized key: "${f}"`);
          a[f] && (u[f] = new t({
            type: "nonoptional",
            innerType: o[f]
          }));
        }
      else
        for (const f in o)
          u[f] = new t({
            type: "nonoptional",
            innerType: o[f]
          });
      return Pa(this, "shape", u), u;
    },
    checks: []
  });
  return ia(r, s);
}
function ji(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let a = r; a < t.issues.length; a++)
    if (t.issues[a]?.continue !== !0)
      return !0;
  return !1;
}
function c1(t, r) {
  return r.map((a) => {
    var s;
    return (s = a).path ?? (s.path = []), a.path.unshift(t), a;
  });
}
function su(t) {
  return typeof t == "string" ? t : t?.message;
}
function La(t, r, a) {
  const s = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const o = su(t.inst?._zod.def?.error?.(t)) ?? su(r?.error?.(t)) ?? su(a.customError?.(t)) ?? su(a.localeError?.(t)) ?? "Invalid input";
    s.message = o;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function dh(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function ll(...t) {
  const [r, a, s] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: a,
    inst: s
  } : { ...r };
}
const f1 = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, Zd, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, d1 = W("$ZodError", f1), h1 = W("$ZodError", f1, { Parent: Error });
function GC(t, r = (a) => a.message) {
  const a = {}, s = [];
  for (const o of t.issues)
    o.path.length > 0 ? (a[o.path[0]] = a[o.path[0]] || [], a[o.path[0]].push(r(o))) : s.push(r(o));
  return { formErrors: s, fieldErrors: a };
}
function VC(t, r = (a) => a.message) {
  const a = { _errors: [] }, s = (o) => {
    for (const u of o.issues)
      if (u.code === "invalid_union" && u.errors.length)
        u.errors.map((f) => s({ issues: f }));
      else if (u.code === "invalid_key")
        s({ issues: u.issues });
      else if (u.code === "invalid_element")
        s({ issues: u.issues });
      else if (u.path.length === 0)
        a._errors.push(r(u));
      else {
        let f = a, p = 0;
        for (; p < u.path.length; ) {
          const h = u.path[p];
          p === u.path.length - 1 ? (f[h] = f[h] || { _errors: [] }, f[h]._errors.push(r(u))) : f[h] = f[h] || { _errors: [] }, f = f[h], p++;
        }
      }
  };
  return s(t), a;
}
const hh = (t) => (r, a, s, o) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: a, issues: [] }, u);
  if (f instanceof Promise)
    throw new Pi();
  if (f.issues.length) {
    const p = new (o?.Err ?? t)(f.issues.map((h) => La(h, u, za())));
    throw o1(p, o?.callee), p;
  }
  return f.value;
}, ph = (t) => async (r, a, s, o) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: a, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const p = new (o?.Err ?? t)(f.issues.map((h) => La(h, u, za())));
    throw o1(p, o?.callee), p;
  }
  return f.value;
}, Ru = (t) => (r, a, s) => {
  const o = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: a, issues: [] }, o);
  if (u instanceof Promise)
    throw new Pi();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? d1)(u.issues.map((f) => La(f, o, za())))
  } : { success: !0, data: u.value };
}, YC = /* @__PURE__ */ Ru(h1), ju = (t) => async (r, a, s) => {
  const o = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: a, issues: [] }, o);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((f) => La(f, o, za())))
  } : { success: !0, data: u.value };
}, XC = /* @__PURE__ */ ju(h1), $C = (t) => (r, a, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return hh(t)(r, a, o);
}, QC = (t) => (r, a, s) => hh(t)(r, a, s), JC = (t) => async (r, a, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return ph(t)(r, a, o);
}, KC = (t) => async (r, a, s) => ph(t)(r, a, s), WC = (t) => (r, a, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Ru(t)(r, a, o);
}, ew = (t) => (r, a, s) => Ru(t)(r, a, s), tw = (t) => async (r, a, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return ju(t)(r, a, o);
}, nw = (t) => async (r, a, s) => ju(t)(r, a, s), rw = /^[cC][^\s-]{8,}$/, aw = /^[0-9a-z]+$/, iw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, sw = /^[0-9a-vA-V]{20}$/, lw = /^[A-Za-z0-9]{27}$/, ow = /^[a-zA-Z0-9_-]{21}$/, uw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, cw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, By = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, fw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, dw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function hw() {
  return new RegExp(dw, "u");
}
const pw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, mw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, gw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, vw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, yw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, p1 = /^[A-Za-z0-9_-]*$/, bw = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, _w = /^\+(?:[0-9]){6,14}[0-9]$/, m1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Sw = /* @__PURE__ */ new RegExp(`^${m1}$`);
function g1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function xw(t) {
  return new RegExp(`^${g1(t)}$`);
}
function Ew(t) {
  const r = g1({ precision: t.precision }), a = ["Z"];
  t.local && a.push(""), t.offset && a.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${a.join("|")})`;
  return new RegExp(`^${m1}T(?:${s})$`);
}
const Cw = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, ww = /^-?\d+$/, Aw = /^-?\d+(?:\.\d+)?/, Tw = /^[^A-Z]*$/, Ow = /^[^a-z]*$/, an = /* @__PURE__ */ W("$ZodCheck", (t, r) => {
  var a;
  t._zod ?? (t._zod = {}), t._zod.def = r, (a = t._zod).onattach ?? (a.onattach = []);
}), v1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, y1 = /* @__PURE__ */ W("$ZodCheckLessThan", (t, r) => {
  an.init(t, r);
  const a = v1[typeof r.value];
  t._zod.onattach.push((s) => {
    const o = s._zod.bag, u = (r.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < u && (r.inclusive ? o.maximum = r.value : o.exclusiveMaximum = r.value);
  }), t._zod.check = (s) => {
    (r.inclusive ? s.value <= r.value : s.value < r.value) || s.issues.push({
      origin: a,
      code: "too_big",
      maximum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: t,
      continue: !r.abort
    });
  };
}), b1 = /* @__PURE__ */ W("$ZodCheckGreaterThan", (t, r) => {
  an.init(t, r);
  const a = v1[typeof r.value];
  t._zod.onattach.push((s) => {
    const o = s._zod.bag, u = (r.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > u && (r.inclusive ? o.minimum = r.value : o.exclusiveMinimum = r.value);
  }), t._zod.check = (s) => {
    (r.inclusive ? s.value >= r.value : s.value > r.value) || s.issues.push({
      origin: a,
      code: "too_small",
      minimum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: t,
      continue: !r.abort
    });
  };
}), Nw = /* @__PURE__ */ W("$ZodCheckMultipleOf", (t, r) => {
  an.init(t, r), t._zod.onattach.push((a) => {
    var s;
    (s = a._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (a) => {
    if (typeof a.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof a.value == "bigint" ? a.value % r.value === BigInt(0) : RC(a.value, r.value) === 0) || a.issues.push({
      origin: typeof a.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Dw = /* @__PURE__ */ W("$ZodCheckNumberFormat", (t, r) => {
  an.init(t, r), r.format = r.format || "float64";
  const a = r.format?.includes("int"), s = a ? "int" : "number", [o, u] = PC[r.format];
  t._zod.onattach.push((f) => {
    const p = f._zod.bag;
    p.format = r.format, p.minimum = o, p.maximum = u, a && (p.pattern = ww);
  }), t._zod.check = (f) => {
    const p = f.value;
    if (a) {
      if (!Number.isInteger(p)) {
        f.issues.push({
          expected: s,
          format: r.format,
          code: "invalid_type",
          continue: !1,
          input: p,
          inst: t
        });
        return;
      }
      if (!Number.isSafeInteger(p)) {
        p > 0 ? f.issues.push({
          input: p,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: s,
          continue: !r.abort
        }) : f.issues.push({
          input: p,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: s,
          continue: !r.abort
        });
        return;
      }
    }
    p < o && f.issues.push({
      origin: "number",
      input: p,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: t,
      continue: !r.abort
    }), p > u && f.issues.push({
      origin: "number",
      input: p,
      code: "too_big",
      maximum: u,
      inst: t
    });
  };
}), Mw = /* @__PURE__ */ W("$ZodCheckMaxLength", (t, r) => {
  var a;
  an.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
    const o = s.value;
    return !ch(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < o && (s._zod.bag.maximum = r.maximum);
  }), t._zod.check = (s) => {
    const o = s.value;
    if (o.length <= r.maximum)
      return;
    const f = dh(o);
    s.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: o,
      inst: t,
      continue: !r.abort
    });
  };
}), kw = /* @__PURE__ */ W("$ZodCheckMinLength", (t, r) => {
  var a;
  an.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
    const o = s.value;
    return !ch(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > o && (s._zod.bag.minimum = r.minimum);
  }), t._zod.check = (s) => {
    const o = s.value;
    if (o.length >= r.minimum)
      return;
    const f = dh(o);
    s.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: o,
      inst: t,
      continue: !r.abort
    });
  };
}), Rw = /* @__PURE__ */ W("$ZodCheckLengthEquals", (t, r) => {
  var a;
  an.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
    const o = s.value;
    return !ch(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.minimum = r.length, o.maximum = r.length, o.length = r.length;
  }), t._zod.check = (s) => {
    const o = s.value, u = o.length;
    if (u === r.length)
      return;
    const f = dh(o), p = u > r.length;
    s.issues.push({
      origin: f,
      ...p ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), zu = /* @__PURE__ */ W("$ZodCheckStringFormat", (t, r) => {
  var a, s;
  an.init(t, r), t._zod.onattach.push((o) => {
    const u = o._zod.bag;
    u.format = r.format, r.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r.pattern));
  }), r.pattern ? (a = t._zod).check ?? (a.check = (o) => {
    r.pattern.lastIndex = 0, !r.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: o.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: t,
      continue: !r.abort
    });
  }) : (s = t._zod).check ?? (s.check = () => {
  });
}), jw = /* @__PURE__ */ W("$ZodCheckRegex", (t, r) => {
  zu.init(t, r), t._zod.check = (a) => {
    r.pattern.lastIndex = 0, !r.pattern.test(a.value) && a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: a.value,
      pattern: r.pattern.toString(),
      inst: t,
      continue: !r.abort
    });
  };
}), zw = /* @__PURE__ */ W("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = Tw), zu.init(t, r);
}), Lw = /* @__PURE__ */ W("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = Ow), zu.init(t, r);
}), Pw = /* @__PURE__ */ W("$ZodCheckIncludes", (t, r) => {
  an.init(t, r);
  const a = ku(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${a}` : a);
  r.pattern = s, t._zod.onattach.push((o) => {
    const u = o._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), t._zod.check = (o) => {
    o.value.includes(r.includes, r.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: o.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Iw = /* @__PURE__ */ W("$ZodCheckStartsWith", (t, r) => {
  an.init(t, r);
  const a = new RegExp(`^${ku(r.prefix)}.*`);
  r.pattern ?? (r.pattern = a), t._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(a);
  }), t._zod.check = (s) => {
    s.value.startsWith(r.prefix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Bw = /* @__PURE__ */ W("$ZodCheckEndsWith", (t, r) => {
  an.init(t, r);
  const a = new RegExp(`.*${ku(r.suffix)}$`);
  r.pattern ?? (r.pattern = a), t._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(a);
  }), t._zod.check = (s) => {
    s.value.endsWith(r.suffix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Uw = /* @__PURE__ */ W("$ZodCheckOverwrite", (t, r) => {
  an.init(t, r), t._zod.check = (a) => {
    a.value = r.tx(a.value);
  };
});
class Hw {
  constructor(r = []) {
    this.content = [], this.indent = 0, this && (this.args = r);
  }
  indented(r) {
    this.indent += 1, r(this), this.indent -= 1;
  }
  write(r) {
    if (typeof r == "function") {
      r(this, { execution: "sync" }), r(this, { execution: "async" });
      return;
    }
    const s = r.split(`
`).filter((f) => f), o = Math.min(...s.map((f) => f.length - f.trimStart().length)), u = s.map((f) => f.slice(o)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of u)
      this.content.push(f);
  }
  compile() {
    const r = Function, a = this?.args, o = [...(this?.content ?? [""]).map((u) => `  ${u}`)];
    return new r(...a, o.join(`
`));
  }
}
const qw = {
  major: 4,
  minor: 1,
  patch: 12
}, Et = /* @__PURE__ */ W("$ZodType", (t, r) => {
  var a;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = qw;
  const s = [...t._zod.def.checks ?? []];
  t._zod.traits.has("$ZodCheck") && s.unshift(t);
  for (const o of s)
    for (const u of o._zod.onattach)
      u(t);
  if (s.length === 0)
    (a = t._zod).deferred ?? (a.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const o = (f, p, h) => {
      let g = ji(f), y;
      for (const _ of p) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(f))
            continue;
        } else if (g)
          continue;
        const b = f.issues.length, v = _._zod.check(f);
        if (v instanceof Promise && h?.async === !1)
          throw new Pi();
        if (y || v instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await v, f.issues.length !== b && (g || (g = ji(f, b)));
          });
        else {
          if (f.issues.length === b)
            continue;
          g || (g = ji(f, b));
        }
      }
      return y ? y.then(() => f) : f;
    }, u = (f, p, h) => {
      if (ji(f))
        return f.aborted = !0, f;
      const g = o(p, s, h);
      if (g instanceof Promise) {
        if (h.async === !1)
          throw new Pi();
        return g.then((y) => t._zod.parse(y, h));
      }
      return t._zod.parse(g, h);
    };
    t._zod.run = (f, p) => {
      if (p.skipChecks)
        return t._zod.parse(f, p);
      if (p.direction === "backward") {
        const g = t._zod.parse({ value: f.value, issues: [] }, { ...p, skipChecks: !0 });
        return g instanceof Promise ? g.then((y) => u(y, f, p)) : u(g, f, p);
      }
      const h = t._zod.parse(f, p);
      if (h instanceof Promise) {
        if (p.async === !1)
          throw new Pi();
        return h.then((g) => o(g, s, p));
      }
      return o(h, s, p);
    };
  }
  t["~standard"] = {
    validate: (o) => {
      try {
        const u = YC(t, o);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return XC(t, o).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), mh = /* @__PURE__ */ W("$ZodString", (t, r) => {
  Et.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? Cw(t._zod.bag), t._zod.parse = (a, s) => {
    if (r.coerce)
      try {
        a.value = String(a.value);
      } catch {
      }
    return typeof a.value == "string" || a.issues.push({
      expected: "string",
      code: "invalid_type",
      input: a.value,
      inst: t
    }), a;
  };
}), ot = /* @__PURE__ */ W("$ZodStringFormat", (t, r) => {
  zu.init(t, r), mh.init(t, r);
}), Fw = /* @__PURE__ */ W("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = cw), ot.init(t, r);
}), Zw = /* @__PURE__ */ W("$ZodUUID", (t, r) => {
  if (r.version) {
    const s = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[r.version];
    if (s === void 0)
      throw new Error(`Invalid UUID version: "${r.version}"`);
    r.pattern ?? (r.pattern = By(s));
  } else
    r.pattern ?? (r.pattern = By());
  ot.init(t, r);
}), Gw = /* @__PURE__ */ W("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = fw), ot.init(t, r);
}), Vw = /* @__PURE__ */ W("$ZodURL", (t, r) => {
  ot.init(t, r), t._zod.check = (a) => {
    try {
      const s = a.value.trim(), o = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(o.hostname) || a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: bw.source,
        input: a.value,
        inst: t,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: a.value,
        inst: t,
        continue: !r.abort
      })), r.normalize ? a.value = o.href : a.value = s;
      return;
    } catch {
      a.issues.push({
        code: "invalid_format",
        format: "url",
        input: a.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
}), Yw = /* @__PURE__ */ W("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = hw()), ot.init(t, r);
}), Xw = /* @__PURE__ */ W("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = ow), ot.init(t, r);
}), $w = /* @__PURE__ */ W("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = rw), ot.init(t, r);
}), Qw = /* @__PURE__ */ W("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = aw), ot.init(t, r);
}), Jw = /* @__PURE__ */ W("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = iw), ot.init(t, r);
}), Kw = /* @__PURE__ */ W("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = sw), ot.init(t, r);
}), Ww = /* @__PURE__ */ W("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = lw), ot.init(t, r);
}), e3 = /* @__PURE__ */ W("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = Ew(r)), ot.init(t, r);
}), t3 = /* @__PURE__ */ W("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = Sw), ot.init(t, r);
}), n3 = /* @__PURE__ */ W("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = xw(r)), ot.init(t, r);
}), r3 = /* @__PURE__ */ W("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = uw), ot.init(t, r);
}), a3 = /* @__PURE__ */ W("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = pw), ot.init(t, r), t._zod.onattach.push((a) => {
    const s = a._zod.bag;
    s.format = "ipv4";
  });
}), i3 = /* @__PURE__ */ W("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = mw), ot.init(t, r), t._zod.onattach.push((a) => {
    const s = a._zod.bag;
    s.format = "ipv6";
  }), t._zod.check = (a) => {
    try {
      new URL(`http://[${a.value}]`);
    } catch {
      a.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: a.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
}), s3 = /* @__PURE__ */ W("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = gw), ot.init(t, r);
}), l3 = /* @__PURE__ */ W("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = vw), ot.init(t, r), t._zod.check = (a) => {
    const s = a.value.split("/");
    try {
      if (s.length !== 2)
        throw new Error();
      const [o, u] = s;
      if (!u)
        throw new Error();
      const f = Number(u);
      if (`${f}` !== u)
        throw new Error();
      if (f < 0 || f > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      a.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: a.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
});
function _1(t) {
  if (t === "")
    return !0;
  if (t.length % 4 !== 0)
    return !1;
  try {
    return atob(t), !0;
  } catch {
    return !1;
  }
}
const o3 = /* @__PURE__ */ W("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = yw), ot.init(t, r), t._zod.onattach.push((a) => {
    a._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (a) => {
    _1(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function u3(t) {
  if (!p1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), a = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return _1(a);
}
const c3 = /* @__PURE__ */ W("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = p1), ot.init(t, r), t._zod.onattach.push((a) => {
    a._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (a) => {
    u3(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), f3 = /* @__PURE__ */ W("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = _w), ot.init(t, r);
});
function d3(t, r = null) {
  try {
    const a = t.split(".");
    if (a.length !== 3)
      return !1;
    const [s] = a;
    if (!s)
      return !1;
    const o = JSON.parse(atob(s));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || r && (!("alg" in o) || o.alg !== r));
  } catch {
    return !1;
  }
}
const h3 = /* @__PURE__ */ W("$ZodJWT", (t, r) => {
  ot.init(t, r), t._zod.check = (a) => {
    d3(a.value, r.alg) || a.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), S1 = /* @__PURE__ */ W("$ZodNumber", (t, r) => {
  Et.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? Aw, t._zod.parse = (a, s) => {
    if (r.coerce)
      try {
        a.value = Number(a.value);
      } catch {
      }
    const o = a.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return a;
    const u = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return a.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: t,
      ...u ? { received: u } : {}
    }), a;
  };
}), p3 = /* @__PURE__ */ W("$ZodNumber", (t, r) => {
  Dw.init(t, r), S1.init(t, r);
}), m3 = /* @__PURE__ */ W("$ZodUnknown", (t, r) => {
  Et.init(t, r), t._zod.parse = (a) => a;
}), g3 = /* @__PURE__ */ W("$ZodNever", (t, r) => {
  Et.init(t, r), t._zod.parse = (a, s) => (a.issues.push({
    expected: "never",
    code: "invalid_type",
    input: a.value,
    inst: t
  }), a);
});
function Uy(t, r, a) {
  t.issues.length && r.issues.push(...c1(a, t.issues)), r.value[a] = t.value;
}
const v3 = /* @__PURE__ */ W("$ZodArray", (t, r) => {
  Et.init(t, r), t._zod.parse = (a, s) => {
    const o = a.value;
    if (!Array.isArray(o))
      return a.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: t
      }), a;
    a.value = Array(o.length);
    const u = [];
    for (let f = 0; f < o.length; f++) {
      const p = o[f], h = r.element._zod.run({
        value: p,
        issues: []
      }, s);
      h instanceof Promise ? u.push(h.then((g) => Uy(g, a, f))) : Uy(h, a, f);
    }
    return u.length ? Promise.all(u).then(() => a) : a;
  };
});
function Ou(t, r, a, s) {
  t.issues.length && r.issues.push(...c1(a, t.issues)), t.value === void 0 ? a in s && (r.value[a] = void 0) : r.value[a] = t.value;
}
function x1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const a = LC(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(a)
  };
}
function E1(t, r, a, s, o, u) {
  const f = [], p = o.keySet, h = o.catchall._zod, g = h.def.type;
  for (const y of Object.keys(r)) {
    if (p.has(y))
      continue;
    if (g === "never") {
      f.push(y);
      continue;
    }
    const _ = h.run({ value: r[y], issues: [] }, s);
    _ instanceof Promise ? t.push(_.then((b) => Ou(b, a, y, r))) : Ou(_, a, y, r);
  }
  return f.length && a.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => a) : a;
}
const y3 = /* @__PURE__ */ W("$ZodObject", (t, r) => {
  if (Et.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const p = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const h = { ...p };
        return Object.defineProperty(r, "shape", {
          value: h
        }), h;
      }
    });
  }
  const s = uh(() => x1(r));
  rt(t._zod, "propValues", () => {
    const p = r.shape, h = {};
    for (const g in p) {
      const y = p[g]._zod;
      if (y.values) {
        h[g] ?? (h[g] = /* @__PURE__ */ new Set());
        for (const _ of y.values)
          h[g].add(_);
      }
    }
    return h;
  });
  const o = Tu, u = r.catchall;
  let f;
  t._zod.parse = (p, h) => {
    f ?? (f = s.value);
    const g = p.value;
    if (!o(g))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: g,
        inst: t
      }), p;
    p.value = {};
    const y = [], _ = f.shape;
    for (const b of f.keys) {
      const d = _[b]._zod.run({ value: g[b], issues: [] }, h);
      d instanceof Promise ? y.push(d.then((S) => Ou(S, p, b, g))) : Ou(d, p, b, g);
    }
    return u ? E1(y, g, p, h, s.value, t) : y.length ? Promise.all(y).then(() => p) : p;
  };
}), b3 = /* @__PURE__ */ W("$ZodObjectJIT", (t, r) => {
  y3.init(t, r);
  const a = t._zod.parse, s = uh(() => x1(r)), o = (b) => {
    const v = new Hw(["shape", "payload", "ctx"]), d = s.value, S = (D) => {
      const x = Iy(D);
      return `shape[${x}]._zod.run({ value: input[${x}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const E = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const D of d.keys)
      E[D] = `key_${O++}`;
    v.write("const newResult = {};");
    for (const D of d.keys) {
      const x = E[D], A = Iy(D);
      v.write(`const ${x} = ${S(D)};`), v.write(`
        if (${x}.issues.length) {
          payload.issues = payload.issues.concat(${x}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${A}, ...iss.path] : [${A}]
          })));
        }
        
        
        if (${x}.value === undefined) {
          if (${A} in input) {
            newResult[${A}] = undefined;
          }
        } else {
          newResult[${A}] = ${x}.value;
        }
        
      `);
    }
    v.write("payload.value = newResult;"), v.write("return payload;");
    const w = v.compile();
    return (D, x) => w(b, D, x);
  };
  let u;
  const f = Tu, p = !s1.jitless, g = p && jC.value, y = r.catchall;
  let _;
  t._zod.parse = (b, v) => {
    _ ?? (_ = s.value);
    const d = b.value;
    return f(d) ? p && g && v?.async === !1 && v.jitless !== !0 ? (u || (u = o(r.shape)), b = u(b, v), y ? E1([], d, b, v, _, t) : b) : a(b, v) : (b.issues.push({
      expected: "object",
      code: "invalid_type",
      input: d,
      inst: t
    }), b);
  };
});
function Hy(t, r, a, s) {
  for (const u of t)
    if (u.issues.length === 0)
      return r.value = u.value, r;
  const o = t.filter((u) => !ji(u));
  return o.length === 1 ? (r.value = o[0].value, o[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: a,
    errors: t.map((u) => u.issues.map((f) => La(f, s, za())))
  }), r);
}
const _3 = /* @__PURE__ */ W("$ZodUnion", (t, r) => {
  Et.init(t, r), rt(t._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), rt(t._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), rt(t._zod, "values", () => {
    if (r.options.every((o) => o._zod.values))
      return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), rt(t._zod, "pattern", () => {
    if (r.options.every((o) => o._zod.pattern)) {
      const o = r.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${o.map((u) => fh(u.source)).join("|")})$`);
    }
  });
  const a = r.options.length === 1, s = r.options[0]._zod.run;
  t._zod.parse = (o, u) => {
    if (a)
      return s(o, u);
    let f = !1;
    const p = [];
    for (const h of r.options) {
      const g = h._zod.run({
        value: o.value,
        issues: []
      }, u);
      if (g instanceof Promise)
        p.push(g), f = !0;
      else {
        if (g.issues.length === 0)
          return g;
        p.push(g);
      }
    }
    return f ? Promise.all(p).then((h) => Hy(h, o, t, u)) : Hy(p, o, t, u);
  };
}), S3 = /* @__PURE__ */ W("$ZodIntersection", (t, r) => {
  Et.init(t, r), t._zod.parse = (a, s) => {
    const o = a.value, u = r.left._zod.run({ value: o, issues: [] }, s), f = r.right._zod.run({ value: o, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([h, g]) => qy(a, h, g)) : qy(a, u, f);
  };
});
function Gd(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (sl(t) && sl(r)) {
    const a = Object.keys(r), s = Object.keys(t).filter((u) => a.indexOf(u) !== -1), o = { ...t, ...r };
    for (const u of s) {
      const f = Gd(t[u], r[u]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...f.mergeErrorPath]
        };
      o[u] = f.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(t) && Array.isArray(r)) {
    if (t.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const a = [];
    for (let s = 0; s < t.length; s++) {
      const o = t[s], u = r[s], f = Gd(o, u);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...f.mergeErrorPath]
        };
      a.push(f.data);
    }
    return { valid: !0, data: a };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function qy(t, r, a) {
  if (r.issues.length && t.issues.push(...r.issues), a.issues.length && t.issues.push(...a.issues), ji(t))
    return t;
  const s = Gd(r.value, a.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const x3 = /* @__PURE__ */ W("$ZodEnum", (t, r) => {
  Et.init(t, r);
  const a = l1(r.entries), s = new Set(a);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${a.filter((o) => zC.has(typeof o)).map((o) => typeof o == "string" ? ku(o) : o.toString()).join("|")})$`), t._zod.parse = (o, u) => {
    const f = o.value;
    return s.has(f) || o.issues.push({
      code: "invalid_value",
      values: a,
      input: f,
      inst: t
    }), o;
  };
}), E3 = /* @__PURE__ */ W("$ZodTransform", (t, r) => {
  Et.init(t, r), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      throw new i1(t.constructor.name);
    const o = r.transform(a.value, a);
    if (s.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((f) => (a.value = f, a));
    if (o instanceof Promise)
      throw new Pi();
    return a.value = o, a;
  };
});
function Fy(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const C3 = /* @__PURE__ */ W("$ZodOptional", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", rt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), rt(t._zod, "pattern", () => {
    const a = r.innerType._zod.pattern;
    return a ? new RegExp(`^(${fh(a.source)})?$`) : void 0;
  }), t._zod.parse = (a, s) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(a, s);
      return o instanceof Promise ? o.then((u) => Fy(u, a.value)) : Fy(o, a.value);
    }
    return a.value === void 0 ? a : r.innerType._zod.run(a, s);
  };
}), w3 = /* @__PURE__ */ W("$ZodNullable", (t, r) => {
  Et.init(t, r), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), rt(t._zod, "pattern", () => {
    const a = r.innerType._zod.pattern;
    return a ? new RegExp(`^(${fh(a.source)}|null)$`) : void 0;
  }), rt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (a, s) => a.value === null ? a : r.innerType._zod.run(a, s);
}), A3 = /* @__PURE__ */ W("$ZodDefault", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(a, s);
    if (a.value === void 0)
      return a.value = r.defaultValue, a;
    const o = r.innerType._zod.run(a, s);
    return o instanceof Promise ? o.then((u) => Zy(u, r)) : Zy(o, r);
  };
});
function Zy(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const T3 = /* @__PURE__ */ W("$ZodPrefault", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => (s.direction === "backward" || a.value === void 0 && (a.value = r.defaultValue), r.innerType._zod.run(a, s));
}), O3 = /* @__PURE__ */ W("$ZodNonOptional", (t, r) => {
  Et.init(t, r), rt(t._zod, "values", () => {
    const a = r.innerType._zod.values;
    return a ? new Set([...a].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (a, s) => {
    const o = r.innerType._zod.run(a, s);
    return o instanceof Promise ? o.then((u) => Gy(u, t)) : Gy(o, t);
  };
});
function Gy(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const N3 = /* @__PURE__ */ W("$ZodCatch", (t, r) => {
  Et.init(t, r), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(a, s);
    const o = r.innerType._zod.run(a, s);
    return o instanceof Promise ? o.then((u) => (a.value = u.value, u.issues.length && (a.value = r.catchValue({
      ...a,
      error: {
        issues: u.issues.map((f) => La(f, s, za()))
      },
      input: a.value
    }), a.issues = []), a)) : (a.value = o.value, o.issues.length && (a.value = r.catchValue({
      ...a,
      error: {
        issues: o.issues.map((u) => La(u, s, za()))
      },
      input: a.value
    }), a.issues = []), a);
  };
}), D3 = /* @__PURE__ */ W("$ZodPipe", (t, r) => {
  Et.init(t, r), rt(t._zod, "values", () => r.in._zod.values), rt(t._zod, "optin", () => r.in._zod.optin), rt(t._zod, "optout", () => r.out._zod.optout), rt(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (a, s) => {
    if (s.direction === "backward") {
      const u = r.out._zod.run(a, s);
      return u instanceof Promise ? u.then((f) => lu(f, r.in, s)) : lu(u, r.in, s);
    }
    const o = r.in._zod.run(a, s);
    return o instanceof Promise ? o.then((u) => lu(u, r.out, s)) : lu(o, r.out, s);
  };
});
function lu(t, r, a) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, a);
}
const M3 = /* @__PURE__ */ W("$ZodReadonly", (t, r) => {
  Et.init(t, r), rt(t._zod, "propValues", () => r.innerType._zod.propValues), rt(t._zod, "values", () => r.innerType._zod.values), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(a, s);
    const o = r.innerType._zod.run(a, s);
    return o instanceof Promise ? o.then(Vy) : Vy(o);
  };
});
function Vy(t) {
  return t.value = Object.freeze(t.value), t;
}
const k3 = /* @__PURE__ */ W("$ZodCustom", (t, r) => {
  an.init(t, r), Et.init(t, r), t._zod.parse = (a, s) => a, t._zod.check = (a) => {
    const s = a.value, o = r.fn(s);
    if (o instanceof Promise)
      return o.then((u) => Yy(u, a, s, t));
    Yy(o, a, s, t);
  };
});
function Yy(t, r, a, s) {
  if (!t) {
    const o = {
      code: "custom",
      input: a,
      inst: s,
      // incorporates params.error into issue reporting
      path: [...s._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !s._zod.def.abort
      // params: inst._zod.def.params,
    };
    s._zod.def.params && (o.params = s._zod.def.params), r.issues.push(ll(o));
  }
}
class C1 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(r, ...a) {
    const s = a[0];
    if (this._map.set(r, s), s && typeof s == "object" && "id" in s) {
      if (this._idmap.has(s.id))
        throw new Error(`ID ${s.id} already exists in the registry`);
      this._idmap.set(s.id, r);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(r) {
    const a = this._map.get(r);
    return a && typeof a == "object" && "id" in a && this._idmap.delete(a.id), this._map.delete(r), this;
  }
  get(r) {
    const a = r._zod.parent;
    if (a) {
      const s = { ...this.get(a) ?? {} };
      delete s.id;
      const o = { ...s, ...this._map.get(r) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function R3() {
  return new C1();
}
const Ws = /* @__PURE__ */ R3();
function j3(t, r) {
  return new t({
    type: "string",
    ...be(r)
  });
}
function z3(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function Xy(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function L3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function P3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...be(r)
  });
}
function I3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...be(r)
  });
}
function B3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...be(r)
  });
}
function U3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function H3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function q3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function F3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function Z3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function G3(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function V3(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function Y3(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function X3(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function $3(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function Q3(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function J3(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function K3(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function W3(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function e4(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function t4(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function n4(t, r) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...be(r)
  });
}
function r4(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...be(r)
  });
}
function a4(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...be(r)
  });
}
function i4(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...be(r)
  });
}
function s4(t, r) {
  return new t({
    type: "number",
    checks: [],
    ...be(r)
  });
}
function l4(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...be(r)
  });
}
function o4(t) {
  return new t({
    type: "unknown"
  });
}
function u4(t, r) {
  return new t({
    type: "never",
    ...be(r)
  });
}
function $y(t, r) {
  return new y1({
    check: "less_than",
    ...be(r),
    value: t,
    inclusive: !1
  });
}
function Sd(t, r) {
  return new y1({
    check: "less_than",
    ...be(r),
    value: t,
    inclusive: !0
  });
}
function Qy(t, r) {
  return new b1({
    check: "greater_than",
    ...be(r),
    value: t,
    inclusive: !1
  });
}
function xd(t, r) {
  return new b1({
    check: "greater_than",
    ...be(r),
    value: t,
    inclusive: !0
  });
}
function Jy(t, r) {
  return new Nw({
    check: "multiple_of",
    ...be(r),
    value: t
  });
}
function w1(t, r) {
  return new Mw({
    check: "max_length",
    ...be(r),
    maximum: t
  });
}
function Nu(t, r) {
  return new kw({
    check: "min_length",
    ...be(r),
    minimum: t
  });
}
function A1(t, r) {
  return new Rw({
    check: "length_equals",
    ...be(r),
    length: t
  });
}
function c4(t, r) {
  return new jw({
    check: "string_format",
    format: "regex",
    ...be(r),
    pattern: t
  });
}
function f4(t) {
  return new zw({
    check: "string_format",
    format: "lowercase",
    ...be(t)
  });
}
function d4(t) {
  return new Lw({
    check: "string_format",
    format: "uppercase",
    ...be(t)
  });
}
function h4(t, r) {
  return new Pw({
    check: "string_format",
    format: "includes",
    ...be(r),
    includes: t
  });
}
function p4(t, r) {
  return new Iw({
    check: "string_format",
    format: "starts_with",
    ...be(r),
    prefix: t
  });
}
function m4(t, r) {
  return new Bw({
    check: "string_format",
    format: "ends_with",
    ...be(r),
    suffix: t
  });
}
function fl(t) {
  return new Uw({
    check: "overwrite",
    tx: t
  });
}
function g4(t) {
  return fl((r) => r.normalize(t));
}
function v4() {
  return fl((t) => t.trim());
}
function y4() {
  return fl((t) => t.toLowerCase());
}
function b4() {
  return fl((t) => t.toUpperCase());
}
function _4(t, r, a) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...be(a)
  });
}
function S4(t, r, a) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ...be(a)
  });
}
function x4(t) {
  const r = E4((a) => (a.addIssue = (s) => {
    if (typeof s == "string")
      a.issues.push(ll(s, a.value, r._zod.def));
    else {
      const o = s;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = a.value), o.inst ?? (o.inst = r), o.continue ?? (o.continue = !r._zod.def.abort), a.issues.push(ll(o));
    }
  }, t(a.value, a)));
  return r;
}
function E4(t, r) {
  const a = new an({
    check: "custom",
    ...be(r)
  });
  return a._zod.check = t, a;
}
class Ky {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Ws, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, a = { path: [], schemaPath: [] }) {
    var s;
    const o = r._zod.def, u = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, f = this.seen.get(r);
    if (f)
      return f.count++, a.schemaPath.includes(r) && (f.cycle = a.path), f.schema;
    const p = { schema: {}, count: 1, cycle: void 0, path: a.path };
    this.seen.set(r, p);
    const h = r._zod.toJSONSchema?.();
    if (h)
      p.schema = h;
    else {
      const _ = {
        ...a,
        schemaPath: [...a.schemaPath, r],
        path: a.path
      }, b = r._zod.parent;
      if (b)
        p.ref = b, this.process(b, _), this.seen.get(b).isParent = !0;
      else {
        const v = p.schema;
        switch (o.type) {
          case "string": {
            const d = v;
            d.type = "string";
            const { minimum: S, maximum: E, format: O, patterns: w, contentEncoding: D } = r._zod.bag;
            if (typeof S == "number" && (d.minLength = S), typeof E == "number" && (d.maxLength = E), O && (d.format = u[O] ?? O, d.format === "" && delete d.format), D && (d.contentEncoding = D), w && w.size > 0) {
              const x = [...w];
              x.length === 1 ? d.pattern = x[0].source : x.length > 1 && (p.schema.allOf = [
                ...x.map((A) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: A.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const d = v, { minimum: S, maximum: E, format: O, multipleOf: w, exclusiveMaximum: D, exclusiveMinimum: x } = r._zod.bag;
            typeof O == "string" && O.includes("int") ? d.type = "integer" : d.type = "number", typeof x == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.minimum = x, d.exclusiveMinimum = !0) : d.exclusiveMinimum = x), typeof S == "number" && (d.minimum = S, typeof x == "number" && this.target !== "draft-4" && (x >= S ? delete d.minimum : delete d.exclusiveMinimum)), typeof D == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.maximum = D, d.exclusiveMaximum = !0) : d.exclusiveMaximum = D), typeof E == "number" && (d.maximum = E, typeof D == "number" && this.target !== "draft-4" && (D <= E ? delete d.maximum : delete d.exclusiveMaximum)), typeof w == "number" && (d.multipleOf = w);
            break;
          }
          case "boolean": {
            const d = v;
            d.type = "boolean";
            break;
          }
          case "bigint": {
            if (this.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          }
          case "symbol": {
            if (this.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          }
          case "null": {
            this.target === "openapi-3.0" ? (v.type = "string", v.nullable = !0, v.enum = [null]) : v.type = "null";
            break;
          }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined": {
            if (this.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          }
          case "void": {
            if (this.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
            break;
          }
          case "never": {
            v.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const d = v, { minimum: S, maximum: E } = r._zod.bag;
            typeof S == "number" && (d.minItems = S), typeof E == "number" && (d.maxItems = E), d.type = "array", d.items = this.process(o.element, { ..._, path: [..._.path, "items"] });
            break;
          }
          case "object": {
            const d = v;
            d.type = "object", d.properties = {};
            const S = o.shape;
            for (const w in S)
              d.properties[w] = this.process(S[w], {
                ..._,
                path: [..._.path, "properties", w]
              });
            const E = new Set(Object.keys(S)), O = new Set([...E].filter((w) => {
              const D = o.shape[w]._zod;
              return this.io === "input" ? D.optin === void 0 : D.optout === void 0;
            }));
            O.size > 0 && (d.required = Array.from(O)), o.catchall?._zod.def.type === "never" ? d.additionalProperties = !1 : o.catchall ? o.catchall && (d.additionalProperties = this.process(o.catchall, {
              ..._,
              path: [..._.path, "additionalProperties"]
            })) : this.io === "output" && (d.additionalProperties = !1);
            break;
          }
          case "union": {
            const d = v, S = o.options.map((E, O) => this.process(E, {
              ..._,
              path: [..._.path, "anyOf", O]
            }));
            d.anyOf = S;
            break;
          }
          case "intersection": {
            const d = v, S = this.process(o.left, {
              ..._,
              path: [..._.path, "allOf", 0]
            }), E = this.process(o.right, {
              ..._,
              path: [..._.path, "allOf", 1]
            }), O = (D) => "allOf" in D && Object.keys(D).length === 1, w = [
              ...O(S) ? S.allOf : [S],
              ...O(E) ? E.allOf : [E]
            ];
            d.allOf = w;
            break;
          }
          case "tuple": {
            const d = v;
            d.type = "array";
            const S = this.target === "draft-2020-12" ? "prefixItems" : "items", E = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", O = o.items.map((A, M) => this.process(A, {
              ..._,
              path: [..._.path, S, M]
            })), w = o.rest ? this.process(o.rest, {
              ..._,
              path: [..._.path, E, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (d.prefixItems = O, w && (d.items = w)) : this.target === "openapi-3.0" ? (d.items = {
              anyOf: O
            }, w && d.items.anyOf.push(w), d.minItems = O.length, w || (d.maxItems = O.length)) : (d.items = O, w && (d.additionalItems = w));
            const { minimum: D, maximum: x } = r._zod.bag;
            typeof D == "number" && (d.minItems = D), typeof x == "number" && (d.maxItems = x);
            break;
          }
          case "record": {
            const d = v;
            d.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (d.propertyNames = this.process(o.keyType, {
              ..._,
              path: [..._.path, "propertyNames"]
            })), d.additionalProperties = this.process(o.valueType, {
              ..._,
              path: [..._.path, "additionalProperties"]
            });
            break;
          }
          case "map": {
            if (this.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
            break;
          }
          case "set": {
            if (this.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
            break;
          }
          case "enum": {
            const d = v, S = l1(o.entries);
            S.every((E) => typeof E == "number") && (d.type = "number"), S.every((E) => typeof E == "string") && (d.type = "string"), d.enum = S;
            break;
          }
          case "literal": {
            const d = v, S = [];
            for (const E of o.values)
              if (E === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof E == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                S.push(Number(E));
              } else
                S.push(E);
            if (S.length !== 0) if (S.length === 1) {
              const E = S[0];
              d.type = E === null ? "null" : typeof E, this.target === "draft-4" || this.target === "openapi-3.0" ? d.enum = [E] : d.const = E;
            } else
              S.every((E) => typeof E == "number") && (d.type = "number"), S.every((E) => typeof E == "string") && (d.type = "string"), S.every((E) => typeof E == "boolean") && (d.type = "string"), S.every((E) => E === null) && (d.type = "null"), d.enum = S;
            break;
          }
          case "file": {
            const d = v, S = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: E, maximum: O, mime: w } = r._zod.bag;
            E !== void 0 && (S.minLength = E), O !== void 0 && (S.maxLength = O), w ? w.length === 1 ? (S.contentMediaType = w[0], Object.assign(d, S)) : d.anyOf = w.map((D) => ({ ...S, contentMediaType: D })) : Object.assign(d, S);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const d = this.process(o.innerType, _);
            this.target === "openapi-3.0" ? (p.ref = o.innerType, v.nullable = !0) : v.anyOf = [d, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, _), p.ref = o.innerType;
            break;
          }
          case "success": {
            const d = v;
            d.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, _), p.ref = o.innerType, v.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, _), p.ref = o.innerType, this.io === "input" && (v._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
            break;
          }
          case "catch": {
            this.process(o.innerType, _), p.ref = o.innerType;
            let d;
            try {
              d = o.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            v.default = d;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const d = v, S = r._zod.pattern;
            if (!S)
              throw new Error("Pattern not found in template literal");
            d.type = "string", d.pattern = S.source;
            break;
          }
          case "pipe": {
            const d = this.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
            this.process(d, _), p.ref = d;
            break;
          }
          case "readonly": {
            this.process(o.innerType, _), p.ref = o.innerType, v.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(o.innerType, _), p.ref = o.innerType;
            break;
          }
          case "optional": {
            this.process(o.innerType, _), p.ref = o.innerType;
            break;
          }
          case "lazy": {
            const d = r._zod.innerType;
            this.process(d, _), p.ref = d;
            break;
          }
          case "custom": {
            if (this.unrepresentable === "throw")
              throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          }
          case "function": {
            if (this.unrepresentable === "throw")
              throw new Error("Function types cannot be represented in JSON Schema");
            break;
          }
        }
      }
    }
    const g = this.metadataRegistry.get(r);
    return g && Object.assign(p.schema, g), this.io === "input" && At(r) && (delete p.schema.examples, delete p.schema.default), this.io === "input" && p.schema._prefault && ((s = p.schema).default ?? (s.default = p.schema._prefault)), delete p.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, a) {
    const s = {
      cycles: a?.cycles ?? "ref",
      reused: a?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: a?.external ?? void 0
    }, o = this.seen.get(r);
    if (!o)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const u = (y) => {
      const _ = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (s.external) {
        const S = s.external.registry.get(y[0])?.id, E = s.external.uri ?? ((w) => w);
        if (S)
          return { ref: E(S) };
        const O = y[1].defId ?? y[1].schema.id ?? `schema${this.counter++}`;
        return y[1].defId = O, { defId: O, ref: `${E("__shared")}#/${_}/${O}` };
      }
      if (y[1] === o)
        return { ref: "#" };
      const v = `#/${_}/`, d = y[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: d, ref: v + d };
    }, f = (y) => {
      if (y[1].schema.$ref)
        return;
      const _ = y[1], { ref: b, defId: v } = u(y);
      _.def = { ..._.schema }, v && (_.defId = v);
      const d = _.schema;
      for (const S in d)
        delete d[S];
      d.$ref = b;
    };
    if (s.cycles === "throw")
      for (const y of this.seen.entries()) {
        const _ = y[1];
        if (_.cycle)
          throw new Error(`Cycle detected: #/${_.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const y of this.seen.entries()) {
      const _ = y[1];
      if (r === y[0]) {
        f(y);
        continue;
      }
      if (s.external) {
        const v = s.external.registry.get(y[0])?.id;
        if (r !== y[0] && v) {
          f(y);
          continue;
        }
      }
      if (this.metadataRegistry.get(y[0])?.id) {
        f(y);
        continue;
      }
      if (_.cycle) {
        f(y);
        continue;
      }
      if (_.count > 1 && s.reused === "ref") {
        f(y);
        continue;
      }
    }
    const p = (y, _) => {
      const b = this.seen.get(y), v = b.def ?? b.schema, d = { ...v };
      if (b.ref === null)
        return;
      const S = b.ref;
      if (b.ref = null, S) {
        p(S, _);
        const E = this.seen.get(S).schema;
        E.$ref && (_.target === "draft-7" || _.target === "draft-4" || _.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(E)) : (Object.assign(v, E), Object.assign(v, d));
      }
      b.isParent || this.override({
        zodSchema: y,
        jsonSchema: v,
        path: b.path ?? []
      });
    };
    for (const y of [...this.seen.entries()].reverse())
      p(y[0], { target: this.target });
    const h = {};
    if (this.target === "draft-2020-12" ? h.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? h.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? h.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), s.external?.uri) {
      const y = s.external.registry.get(r)?.id;
      if (!y)
        throw new Error("Schema is missing an `id` property");
      h.$id = s.external.uri(y);
    }
    Object.assign(h, o.def);
    const g = s.external?.defs ?? {};
    for (const y of this.seen.entries()) {
      const _ = y[1];
      _.def && _.defId && (g[_.defId] = _.def);
    }
    s.external || Object.keys(g).length > 0 && (this.target === "draft-2020-12" ? h.$defs = g : h.definitions = g);
    try {
      return JSON.parse(JSON.stringify(h));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function C4(t, r) {
  if (t instanceof C1) {
    const s = new Ky(r), o = {};
    for (const p of t._idmap.entries()) {
      const [h, g] = p;
      s.process(g);
    }
    const u = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: o
    };
    for (const p of t._idmap.entries()) {
      const [h, g] = p;
      u[h] = s.emit(g, {
        ...r,
        external: f
      });
    }
    if (Object.keys(o).length > 0) {
      const p = s.target === "draft-2020-12" ? "$defs" : "definitions";
      u.__shared = {
        [p]: o
      };
    }
    return { schemas: u };
  }
  const a = new Ky(r);
  return a.process(t), a.emit(t, r);
}
function At(t, r) {
  const a = r ?? { seen: /* @__PURE__ */ new Set() };
  if (a.seen.has(t))
    return !1;
  a.seen.add(t);
  const o = t._zod.def;
  switch (o.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return At(o.element, a);
    case "object": {
      for (const u in o.shape)
        if (At(o.shape[u], a))
          return !0;
      return !1;
    }
    case "union": {
      for (const u of o.options)
        if (At(u, a))
          return !0;
      return !1;
    }
    case "intersection":
      return At(o.left, a) || At(o.right, a);
    case "tuple": {
      for (const u of o.items)
        if (At(u, a))
          return !0;
      return !!(o.rest && At(o.rest, a));
    }
    case "record":
      return At(o.keyType, a) || At(o.valueType, a);
    case "map":
      return At(o.keyType, a) || At(o.valueType, a);
    case "set":
      return At(o.valueType, a);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return At(o.innerType, a);
    case "lazy":
      return At(o.getter(), a);
    case "default":
      return At(o.innerType, a);
    case "prefault":
      return At(o.innerType, a);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return At(o.in, a) || At(o.out, a);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${o.type}`);
}
const w4 = /* @__PURE__ */ W("ZodISODateTime", (t, r) => {
  e3.init(t, r), ft.init(t, r);
});
function A4(t) {
  return n4(w4, t);
}
const T4 = /* @__PURE__ */ W("ZodISODate", (t, r) => {
  t3.init(t, r), ft.init(t, r);
});
function O4(t) {
  return r4(T4, t);
}
const N4 = /* @__PURE__ */ W("ZodISOTime", (t, r) => {
  n3.init(t, r), ft.init(t, r);
});
function D4(t) {
  return a4(N4, t);
}
const M4 = /* @__PURE__ */ W("ZodISODuration", (t, r) => {
  r3.init(t, r), ft.init(t, r);
});
function k4(t) {
  return i4(M4, t);
}
const R4 = (t, r) => {
  d1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (a) => VC(t, a)
      // enumerable: false,
    },
    flatten: {
      value: (a) => GC(t, a)
      // enumerable: false,
    },
    addIssue: {
      value: (a) => {
        t.issues.push(a), t.message = JSON.stringify(t.issues, Zd, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (a) => {
        t.issues.push(...a), t.message = JSON.stringify(t.issues, Zd, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return t.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Rn = W("ZodError", R4, {
  Parent: Error
}), j4 = /* @__PURE__ */ hh(Rn), z4 = /* @__PURE__ */ ph(Rn), L4 = /* @__PURE__ */ Ru(Rn), P4 = /* @__PURE__ */ ju(Rn), I4 = /* @__PURE__ */ $C(Rn), B4 = /* @__PURE__ */ QC(Rn), U4 = /* @__PURE__ */ JC(Rn), H4 = /* @__PURE__ */ KC(Rn), q4 = /* @__PURE__ */ WC(Rn), F4 = /* @__PURE__ */ ew(Rn), Z4 = /* @__PURE__ */ tw(Rn), G4 = /* @__PURE__ */ nw(Rn), Ot = /* @__PURE__ */ W("ZodType", (t, r) => (Et.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...a) => t.clone(Ia(r, {
  checks: [
    ...r.checks ?? [],
    ...a.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (a, s) => ia(t, a, s), t.brand = () => t, t.register = ((a, s) => (a.add(t, s), t)), t.parse = (a, s) => j4(t, a, s, { callee: t.parse }), t.safeParse = (a, s) => L4(t, a, s), t.parseAsync = async (a, s) => z4(t, a, s, { callee: t.parseAsync }), t.safeParseAsync = async (a, s) => P4(t, a, s), t.spa = t.safeParseAsync, t.encode = (a, s) => I4(t, a, s), t.decode = (a, s) => B4(t, a, s), t.encodeAsync = async (a, s) => U4(t, a, s), t.decodeAsync = async (a, s) => H4(t, a, s), t.safeEncode = (a, s) => q4(t, a, s), t.safeDecode = (a, s) => F4(t, a, s), t.safeEncodeAsync = async (a, s) => Z4(t, a, s), t.safeDecodeAsync = async (a, s) => G4(t, a, s), t.refine = (a, s) => t.check(jA(a, s)), t.superRefine = (a) => t.check(zA(a)), t.overwrite = (a) => t.check(fl(a)), t.optional = () => n0(t), t.nullable = () => r0(t), t.nullish = () => n0(r0(t)), t.nonoptional = (a) => TA(t, a), t.array = () => qn(t), t.or = (a) => vA([t, a]), t.and = (a) => bA(t, a), t.transform = (a) => a0(t, SA(a)), t.default = (a) => CA(t, a), t.prefault = (a) => AA(t, a), t.catch = (a) => NA(t, a), t.pipe = (a) => a0(t, a), t.readonly = () => kA(t), t.describe = (a) => {
  const s = t.clone();
  return Ws.add(s, { description: a }), s;
}, Object.defineProperty(t, "description", {
  get() {
    return Ws.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...a) => {
  if (a.length === 0)
    return Ws.get(t);
  const s = t.clone();
  return Ws.add(s, a[0]), s;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), T1 = /* @__PURE__ */ W("_ZodString", (t, r) => {
  mh.init(t, r), Ot.init(t, r);
  const a = t._zod.bag;
  t.format = a.format ?? null, t.minLength = a.minimum ?? null, t.maxLength = a.maximum ?? null, t.regex = (...s) => t.check(c4(...s)), t.includes = (...s) => t.check(h4(...s)), t.startsWith = (...s) => t.check(p4(...s)), t.endsWith = (...s) => t.check(m4(...s)), t.min = (...s) => t.check(Nu(...s)), t.max = (...s) => t.check(w1(...s)), t.length = (...s) => t.check(A1(...s)), t.nonempty = (...s) => t.check(Nu(1, ...s)), t.lowercase = (s) => t.check(f4(s)), t.uppercase = (s) => t.check(d4(s)), t.trim = () => t.check(v4()), t.normalize = (...s) => t.check(g4(...s)), t.toLowerCase = () => t.check(y4()), t.toUpperCase = () => t.check(b4());
}), V4 = /* @__PURE__ */ W("ZodString", (t, r) => {
  mh.init(t, r), T1.init(t, r), t.email = (a) => t.check(z3(Y4, a)), t.url = (a) => t.check(U3(X4, a)), t.jwt = (a) => t.check(t4(uA, a)), t.emoji = (a) => t.check(H3($4, a)), t.guid = (a) => t.check(Xy(Wy, a)), t.uuid = (a) => t.check(L3(ou, a)), t.uuidv4 = (a) => t.check(P3(ou, a)), t.uuidv6 = (a) => t.check(I3(ou, a)), t.uuidv7 = (a) => t.check(B3(ou, a)), t.nanoid = (a) => t.check(q3(Q4, a)), t.guid = (a) => t.check(Xy(Wy, a)), t.cuid = (a) => t.check(F3(J4, a)), t.cuid2 = (a) => t.check(Z3(K4, a)), t.ulid = (a) => t.check(G3(W4, a)), t.base64 = (a) => t.check(K3(sA, a)), t.base64url = (a) => t.check(W3(lA, a)), t.xid = (a) => t.check(V3(eA, a)), t.ksuid = (a) => t.check(Y3(tA, a)), t.ipv4 = (a) => t.check(X3(nA, a)), t.ipv6 = (a) => t.check($3(rA, a)), t.cidrv4 = (a) => t.check(Q3(aA, a)), t.cidrv6 = (a) => t.check(J3(iA, a)), t.e164 = (a) => t.check(e4(oA, a)), t.datetime = (a) => t.check(A4(a)), t.date = (a) => t.check(O4(a)), t.time = (a) => t.check(D4(a)), t.duration = (a) => t.check(k4(a));
});
function Mn(t) {
  return j3(V4, t);
}
const ft = /* @__PURE__ */ W("ZodStringFormat", (t, r) => {
  ot.init(t, r), T1.init(t, r);
}), Y4 = /* @__PURE__ */ W("ZodEmail", (t, r) => {
  Gw.init(t, r), ft.init(t, r);
}), Wy = /* @__PURE__ */ W("ZodGUID", (t, r) => {
  Fw.init(t, r), ft.init(t, r);
}), ou = /* @__PURE__ */ W("ZodUUID", (t, r) => {
  Zw.init(t, r), ft.init(t, r);
}), X4 = /* @__PURE__ */ W("ZodURL", (t, r) => {
  Vw.init(t, r), ft.init(t, r);
}), $4 = /* @__PURE__ */ W("ZodEmoji", (t, r) => {
  Yw.init(t, r), ft.init(t, r);
}), Q4 = /* @__PURE__ */ W("ZodNanoID", (t, r) => {
  Xw.init(t, r), ft.init(t, r);
}), J4 = /* @__PURE__ */ W("ZodCUID", (t, r) => {
  $w.init(t, r), ft.init(t, r);
}), K4 = /* @__PURE__ */ W("ZodCUID2", (t, r) => {
  Qw.init(t, r), ft.init(t, r);
}), W4 = /* @__PURE__ */ W("ZodULID", (t, r) => {
  Jw.init(t, r), ft.init(t, r);
}), eA = /* @__PURE__ */ W("ZodXID", (t, r) => {
  Kw.init(t, r), ft.init(t, r);
}), tA = /* @__PURE__ */ W("ZodKSUID", (t, r) => {
  Ww.init(t, r), ft.init(t, r);
}), nA = /* @__PURE__ */ W("ZodIPv4", (t, r) => {
  a3.init(t, r), ft.init(t, r);
}), rA = /* @__PURE__ */ W("ZodIPv6", (t, r) => {
  i3.init(t, r), ft.init(t, r);
}), aA = /* @__PURE__ */ W("ZodCIDRv4", (t, r) => {
  s3.init(t, r), ft.init(t, r);
}), iA = /* @__PURE__ */ W("ZodCIDRv6", (t, r) => {
  l3.init(t, r), ft.init(t, r);
}), sA = /* @__PURE__ */ W("ZodBase64", (t, r) => {
  o3.init(t, r), ft.init(t, r);
}), lA = /* @__PURE__ */ W("ZodBase64URL", (t, r) => {
  c3.init(t, r), ft.init(t, r);
}), oA = /* @__PURE__ */ W("ZodE164", (t, r) => {
  f3.init(t, r), ft.init(t, r);
}), uA = /* @__PURE__ */ W("ZodJWT", (t, r) => {
  h3.init(t, r), ft.init(t, r);
}), O1 = /* @__PURE__ */ W("ZodNumber", (t, r) => {
  S1.init(t, r), Ot.init(t, r), t.gt = (s, o) => t.check(Qy(s, o)), t.gte = (s, o) => t.check(xd(s, o)), t.min = (s, o) => t.check(xd(s, o)), t.lt = (s, o) => t.check($y(s, o)), t.lte = (s, o) => t.check(Sd(s, o)), t.max = (s, o) => t.check(Sd(s, o)), t.int = (s) => t.check(e0(s)), t.safe = (s) => t.check(e0(s)), t.positive = (s) => t.check(Qy(0, s)), t.nonnegative = (s) => t.check(xd(0, s)), t.negative = (s) => t.check($y(0, s)), t.nonpositive = (s) => t.check(Sd(0, s)), t.multipleOf = (s, o) => t.check(Jy(s, o)), t.step = (s, o) => t.check(Jy(s, o)), t.finite = () => t;
  const a = t._zod.bag;
  t.minValue = Math.max(a.minimum ?? Number.NEGATIVE_INFINITY, a.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(a.maximum ?? Number.POSITIVE_INFINITY, a.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (a.format ?? "").includes("int") || Number.isSafeInteger(a.multipleOf ?? 0.5), t.isFinite = !0, t.format = a.format ?? null;
});
function Du(t) {
  return s4(O1, t);
}
const cA = /* @__PURE__ */ W("ZodNumberFormat", (t, r) => {
  p3.init(t, r), O1.init(t, r);
});
function e0(t) {
  return l4(cA, t);
}
const fA = /* @__PURE__ */ W("ZodUnknown", (t, r) => {
  m3.init(t, r), Ot.init(t, r);
});
function t0() {
  return o4(fA);
}
const dA = /* @__PURE__ */ W("ZodNever", (t, r) => {
  g3.init(t, r), Ot.init(t, r);
});
function hA(t) {
  return u4(dA, t);
}
const pA = /* @__PURE__ */ W("ZodArray", (t, r) => {
  v3.init(t, r), Ot.init(t, r), t.element = r.element, t.min = (a, s) => t.check(Nu(a, s)), t.nonempty = (a) => t.check(Nu(1, a)), t.max = (a, s) => t.check(w1(a, s)), t.length = (a, s) => t.check(A1(a, s)), t.unwrap = () => t.element;
});
function qn(t, r) {
  return _4(pA, t, r);
}
const mA = /* @__PURE__ */ W("ZodObject", (t, r) => {
  b3.init(t, r), Ot.init(t, r), rt(t, "shape", () => r.shape), t.keyof = () => Yd(Object.keys(t._zod.def.shape)), t.catchall = (a) => t.clone({ ...t._zod.def, catchall: a }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: t0() }), t.loose = () => t.clone({ ...t._zod.def, catchall: t0() }), t.strict = () => t.clone({ ...t._zod.def, catchall: hA() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (a) => UC(t, a), t.safeExtend = (a) => HC(t, a), t.merge = (a) => qC(t, a), t.pick = (a) => IC(t, a), t.omit = (a) => BC(t, a), t.partial = (...a) => FC(N1, t, a[0]), t.required = (...a) => ZC(D1, t, a[0]);
});
function ja(t, r) {
  const a = {
    type: "object",
    shape: t ?? {},
    ...be(r)
  };
  return new mA(a);
}
const gA = /* @__PURE__ */ W("ZodUnion", (t, r) => {
  _3.init(t, r), Ot.init(t, r), t.options = r.options;
});
function vA(t, r) {
  return new gA({
    type: "union",
    options: t,
    ...be(r)
  });
}
const yA = /* @__PURE__ */ W("ZodIntersection", (t, r) => {
  S3.init(t, r), Ot.init(t, r);
});
function bA(t, r) {
  return new yA({
    type: "intersection",
    left: t,
    right: r
  });
}
const Vd = /* @__PURE__ */ W("ZodEnum", (t, r) => {
  x3.init(t, r), Ot.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const a = new Set(Object.keys(r.entries));
  t.extract = (s, o) => {
    const u = {};
    for (const f of s)
      if (a.has(f))
        u[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Vd({
      ...r,
      checks: [],
      ...be(o),
      entries: u
    });
  }, t.exclude = (s, o) => {
    const u = { ...r.entries };
    for (const f of s)
      if (a.has(f))
        delete u[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Vd({
      ...r,
      checks: [],
      ...be(o),
      entries: u
    });
  };
});
function Yd(t, r) {
  const a = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new Vd({
    type: "enum",
    entries: a,
    ...be(r)
  });
}
const _A = /* @__PURE__ */ W("ZodTransform", (t, r) => {
  E3.init(t, r), Ot.init(t, r), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      throw new i1(t.constructor.name);
    a.addIssue = (u) => {
      if (typeof u == "string")
        a.issues.push(ll(u, a.value, r));
      else {
        const f = u;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = a.value), f.inst ?? (f.inst = t), a.issues.push(ll(f));
      }
    };
    const o = r.transform(a.value, a);
    return o instanceof Promise ? o.then((u) => (a.value = u, a)) : (a.value = o, a);
  };
});
function SA(t) {
  return new _A({
    type: "transform",
    transform: t
  });
}
const N1 = /* @__PURE__ */ W("ZodOptional", (t, r) => {
  C3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function n0(t) {
  return new N1({
    type: "optional",
    innerType: t
  });
}
const xA = /* @__PURE__ */ W("ZodNullable", (t, r) => {
  w3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function r0(t) {
  return new xA({
    type: "nullable",
    innerType: t
  });
}
const EA = /* @__PURE__ */ W("ZodDefault", (t, r) => {
  A3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function CA(t, r) {
  return new EA({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : u1(r);
    }
  });
}
const wA = /* @__PURE__ */ W("ZodPrefault", (t, r) => {
  T3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function AA(t, r) {
  return new wA({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : u1(r);
    }
  });
}
const D1 = /* @__PURE__ */ W("ZodNonOptional", (t, r) => {
  O3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function TA(t, r) {
  return new D1({
    type: "nonoptional",
    innerType: t,
    ...be(r)
  });
}
const OA = /* @__PURE__ */ W("ZodCatch", (t, r) => {
  N3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function NA(t, r) {
  return new OA({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const DA = /* @__PURE__ */ W("ZodPipe", (t, r) => {
  D3.init(t, r), Ot.init(t, r), t.in = r.in, t.out = r.out;
});
function a0(t, r) {
  return new DA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const MA = /* @__PURE__ */ W("ZodReadonly", (t, r) => {
  M3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function kA(t) {
  return new MA({
    type: "readonly",
    innerType: t
  });
}
const RA = /* @__PURE__ */ W("ZodCustom", (t, r) => {
  k3.init(t, r), Ot.init(t, r);
});
function jA(t, r = {}) {
  return S4(RA, t, r);
}
function zA(t) {
  return x4(t);
}
const i0 = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Xd = "placeholder-chatHistory", LA = ja({
  justification: Mn().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: Mn().describe("The new, full content for the character field.")
}), PA = ja({
  field: Mn(),
  value: Mn()
}), IA = ja({
  index: Du().int().positive(),
  value: Mn()
});
ja({
  justification: Mn(),
  fields_to_change: qn(PA).optional(),
  draft_fields_to_remove: qn(Mn()).optional(),
  greetings_to_add: qn(Mn()).optional(),
  greetings_to_remove: qn(Du().int().positive()).optional(),
  greetings_to_change: qn(IA).optional()
});
const BA = (t, r) => {
  const a = ja({
    index: Du().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: Mn().describe("The new content for the alternate greeting.")
  }), s = {
    justification: Mn().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: qn(Mn()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: qn(Du().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: qn(a).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const o = ja({
      field: Yd(t).describe("The unique ID of the field to change (core or draft)."),
      value: Mn().describe("The new content for the field.")
    });
    s.fields_to_change = qn(o).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = qn(Yd(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), ja(s);
};
function Ed(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function $d(t, r = 0) {
  const a = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${a}<item>
${$d(s, r + 1)}${a}</item>
` : `${a}<item>${Ed(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const o of Object.keys(t)) {
      const u = t[o];
      u !== null && typeof u == "object" ? s += `${a}<${o}>
${$d(u, r + 1)}${a}</${o}>
` : s += `${a}<${o}>${Ed(u)}</${o}>
`;
    }
    return s;
  }
  return `${a}<value>${Ed(t)}</value>
`;
}
function UA(t, r) {
  const a = Da(t);
  return r === "xml" ? $d(a).trim() : JSON.stringify(a, null, 2);
}
function HA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function qA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function s0(t, r) {
  let a = 0;
  return typeof t.minimum == "number" && a < t.minimum && (a = r ? Math.ceil(t.minimum) : t.minimum), typeof t.exclusiveMinimum == "number" && a <= t.exclusiveMinimum && (a = r ? Math.floor(t.exclusiveMinimum) + 1 : t.exclusiveMinimum + 1), typeof t.maximum == "number" && a > t.maximum && (a = r ? Math.floor(t.maximum) : t.maximum), typeof t.exclusiveMaximum == "number" && a >= t.exclusiveMaximum && (a = r ? Math.ceil(t.exclusiveMaximum) - 1 : t.exclusiveMaximum - 1), a;
}
function Da(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, a = HA(t.example, r, t.default);
  if (a !== void 0) return a;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return Da(s);
  switch (qA(t.type)) {
    case "object": {
      const u = {}, f = t.properties || {};
      for (const p of Object.keys(f))
        u[p] = Da(f[p]);
      return t.additionalProperties && typeof t.additionalProperties == "object" && (u.additionalProperty = Da(t.additionalProperties)), u;
    }
    case "array": {
      const u = t.items ?? {};
      return [Da(u)];
    }
    case "string":
      switch (t.format) {
        case "date-time":
          return (/* @__PURE__ */ new Date(0)).toISOString();
        case "date":
          return "1970-01-01";
        case "time":
          return "00:00:00";
        case "email":
          return "user@example.com";
        case "uri":
        case "url":
          return "https://example.com";
        case "uuid":
          return "00000000-0000-0000-0000-000000000000";
        default:
          return t.title || t.description || "string";
      }
    case "integer":
      return s0(t, !0);
    case "number":
      return s0(t, !1);
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return t.properties || t.additionalProperties ? Da({ ...t, type: "object" }) : t.items ? Da({ ...t, type: "array" }) : null;
  }
}
const FA = new SS();
async function Qd(t, r, a, s, o, u) {
  const f = !s.json_schema && !1;
  return new Promise((p, h) => {
    const g = new AbortController(), y = u ?? g.signal;
    u && u.addEventListener("abort", () => g.abort(), { once: !0 }), FA.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: a,
        custom: { stream: f, signal: y },
        overridePayload: s
      },
      {
        abortController: g,
        onEntry: void 0,
        onFinish: (_, b, v) => y.aborted ? h(new DOMException("Request aborted by user", "AbortError")) : v ? h(v) : b === void 0 && v === void 0 ? h(new DOMException("Request aborted by user", "AbortError")) : (b || h(new Error("No data received from LLM")), v ? h(v) : p(b))
      }
    );
  });
}
async function ZA(t, r, a, s) {
  const o = await Qd(t, r, a, {}, void 0, s);
  if (!o?.content)
    throw new Error("Plain request failed to return content.");
  return o.content;
}
async function GA(t, r, a, s, o, u, f) {
  const p = Tt.getSettings();
  let h, g;
  const y = C4(a);
  if (o === "native") {
    if (h = await Qd(
      t,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: y }
      },
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = typeof h.content == "string" ? JSON.parse(h.content) : h.content;
  } else {
    const b = o, v = UA(y, b), d = JSON.stringify(y, null, 2), S = b === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", E = p.prompts[S]?.content;
    if (!E)
      throw new Error(`Prompt template for mode "${b}" not found.`);
    const O = {
      example_response: v,
      schema: d
    };
    let w;
    try {
      w = Yt.compile(E, { noEscape: !0, strict: !0 })(O);
    } catch (x) {
      const A = p.prompts[S]?.label ?? S;
      throw new Error(
        `Failed to render the "${A}" prompt template: ${x?.message ?? x}. Available variables: ${Object.keys(O).join(", ")}.`
      );
    }
    const D = { role: "system", content: w };
    if (h = await Qd(
      t,
      [...r, D],
      u,
      {},
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = Eu(h.content, b, { schema: y });
  }
  const _ = a.safeParse(g);
  if (!_.success) {
    const b = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", _.error.issues), console.error("Raw content parsed:", g), await we("error", b), new Error(b);
  }
  return _.data;
}
const M1 = ({ originalContent: t, newContent: r }) => {
  const a = ee.useMemo(() => {
    const s = r1(t, r);
    let o = "", u = "";
    return s.forEach((f) => {
      const p = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), g = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      f.added || (o += g), f.removed || (u += g);
    }), { originalHtml: o, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ T.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ T.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: a.originalHtml } }),
    /* @__PURE__ */ T.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: a.newHtml } })
  ] });
}, VA = ({ before: t, after: r }) => {
  const a = ee.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(t.fields), ...Object.keys(r.fields)])).forEach((u) => {
      const f = t.fields[u], p = r.fields[u], h = f?.value ?? "", g = p?.value ?? "";
      h !== g && s.push({
        label: p?.label ?? f?.label ?? u,
        before: h,
        after: g
      });
    }), s;
  }, [t, r]);
  return /* @__PURE__ */ T.jsxs("div", { className: "compare-state-popup", children: [
    /* @__PURE__ */ T.jsx("h3", { children: "Changes in this step" }),
    a.length === 0 ? /* @__PURE__ */ T.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ T.jsx("div", { className: "compare-state-list", children: a.map(({ label: s, before: o, after: u }) => /* @__PURE__ */ T.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ T.jsx("h4", { children: s }),
      /* @__PURE__ */ T.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ T.jsx("span", { children: "Before" }),
        /* @__PURE__ */ T.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ T.jsx(M1, { originalContent: o, newContent: u })
    ] }, s)) })
  ] });
}, YA = ({ currentState: t, initialState: r }) => {
  const [a, s] = ee.useState(!1), { coreFields: o, alternateGreetings: u } = ee.useMemo(() => {
    const p = [], h = [];
    return Jn.forEach((g) => {
      t.fields[g] && p.push({ label: t.fields[g].label, value: t.fields[g].value });
    }), Object.entries(t.fields).filter(([g]) => g.startsWith("alternate_greetings_")).sort((g, y) => parseInt(g[0].split("_")[2]) - parseInt(y[0].split("_")[2])).forEach(([, g]) => h.push(g.value)), { coreFields: p, alternateGreetings: h };
  }, [t]), f = ee.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((g) => {
      const y = r.fields[g], _ = t.fields[g], b = y?.value ?? "", v = _?.value ?? "";
      b !== v && p.push({
        label: _?.label ?? y?.label ?? g,
        before: b,
        after: v
      });
    }), p;
  }, [r, t]);
  return /* @__PURE__ */ T.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ T.jsx("h3", { children: a ? "Comparing with Original State" : "Current Character State" }),
      /* @__PURE__ */ T.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ T.jsx("input", { type: "checkbox", checked: a, onChange: (p) => s(p.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ T.jsx("div", { className: "current-state-content", children: a ? /* @__PURE__ */ T.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ T.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: p, before: h, after: g }) => /* @__PURE__ */ T.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ T.jsx("h4", { children: p }),
      /* @__PURE__ */ T.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ T.jsx("span", { children: "Original" }),
        /* @__PURE__ */ T.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ T.jsx(M1, { originalContent: h, newContent: g })
    ] }, p)) }) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
      /* @__PURE__ */ T.jsx("h4", { children: "Core Fields" }),
      o.map(({ label: p, value: h }) => /* @__PURE__ */ T.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ T.jsx("label", { children: p }),
        /* @__PURE__ */ T.jsx("div", { className: "state-value", children: h || /* @__PURE__ */ T.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, p)),
      u.length > 0 && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
        /* @__PURE__ */ T.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((p, h) => /* @__PURE__ */ T.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ T.jsxs("label", { children: [
            "Greeting ",
            h + 1
          ] }),
          /* @__PURE__ */ T.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ T.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, h))
      ] })
    ] }) })
  ] });
}, Mi = SillyTavern.getContext(), XA = ({ initialState: t, onSave: r, onClose: a }) => {
  const [s, o] = ee.useState(() => structuredClone(t)), u = (_, b, v) => {
    const d = structuredClone(s), S = v ? "draftFields" : "fields";
    d[S][_] && (d[S][_].value = b), o(d);
  }, f = (_, b) => {
    const v = structuredClone(s), d = `alternate_greetings_${_ + 1}`;
    v.fields[d] && (v.fields[d].value = b), o(v);
  }, { coreFields: p, alternateGreetings: h, draftFields: g } = ee.useMemo(() => {
    const _ = [], b = [], v = [];
    return Jn.forEach((d) => {
      s.fields[d] && _.push({ id: d, label: s.fields[d].label, value: s.fields[d].value });
    }), Object.entries(s.fields).filter(([d]) => d.startsWith("alternate_greetings_")).sort((d, S) => parseInt(d[0].split("_")[2]) - parseInt(S[0].split("_")[2])).forEach(([, d]) => b.push(d.value)), Object.entries(s.draftFields).forEach(([d, S]) => {
      v.push({ id: d, label: S.label, value: S.value });
    }), { coreFields: _, alternateGreetings: b, draftFields: v };
  }, [s]), y = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), a();
  };
  return /* @__PURE__ */ T.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ T.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ T.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ T.jsxs(_e, { onClick: y, children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ T.jsxs(_e, { onClick: a, className: "danger_button", children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ T.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: _, label: b, value: v }) => /* @__PURE__ */ T.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ T.jsx("label", { children: b }),
        /* @__PURE__ */ T.jsx(kn, { value: v, onChange: (d) => u(_, d.target.value, !1), rows: 4 })
      ] }, _)),
      g.length > 0 && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
        /* @__PURE__ */ T.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        g.map(({ id: _, label: b, value: v }) => /* @__PURE__ */ T.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ T.jsx("label", { children: b }),
          /* @__PURE__ */ T.jsx(kn, { value: v, onChange: (d) => u(_, d.target.value, !0), rows: 4 })
        ] }, _))
      ] }),
      h.length > 0 && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
        /* @__PURE__ */ T.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        h.map((_, b) => /* @__PURE__ */ T.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ T.jsxs("label", { children: [
            "Greeting ",
            b + 1
          ] }),
          /* @__PURE__ */ T.jsx(kn, { value: _, onChange: (v) => f(b, v.target.value), rows: 4 })
        ] }, b))
      ] })
    ] })
  ] });
}, $A = ({
  session: t,
  onBack: r,
  onApply: a,
  onSessionUpdate: s,
  initialState: o,
  chatContextOptions: u
}) => {
  const [f, p] = ee.useState(t.messages), [h, g] = ee.useState(""), [y, _] = ee.useState(!1), [b, v] = ee.useState(null), [d, S] = ee.useState(!1), [E, O] = ee.useState(!1), [w, D] = ee.useState(null), [x, A] = ee.useState(""), M = ee.useRef(null), k = ee.useRef(null);
  ee.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const P = ee.useCallback(
    (V, me, ve) => {
      if (JSON.stringify(ve) === JSON.stringify(me))
        return V;
      const at = Tt.getSettings().prompts.existingFieldDefinitions;
      if (!at) return V;
      const ze = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(ve.fields), ...Object.keys(me.fields)])).forEach((Ce) => {
        const ge = ve.fields[Ce]?.value ?? "", Me = me.fields[Ce]?.value ?? "";
        if (ge !== Me) {
          const Xe = me.fields[Ce];
          Xe && (Ce.startsWith("alternate_greetings_") ? ze.alternate_greetings[Xe.label] = Xe.value : Jn.includes(Ce) && (ze.core[Xe.label] = Xe.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(ve.draftFields), ...Object.keys(me.draftFields)])).forEach((Ce) => {
        const ge = ve.draftFields[Ce]?.value ?? "", Me = me.draftFields[Ce]?.value ?? "";
        if (ge !== Me && me.draftFields[Ce]) {
          const Xe = me.draftFields[Ce];
          ze.draft[Xe.label] = Xe.value;
        }
      }), Object.keys(ze.core).length === 0 && Object.keys(ze.alternate_greetings).length === 0 && Object.keys(ze.draft).length === 0)
        return V;
      const ne = { fields: ze };
      let ye = Yt.compile(at.content, { noEscape: !0 })(ne);
      if (ye = Mi.substituteParams(ye), ye.trim()) {
        const Ce = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: ye.trim(),
          isStateUpdate: !0
        };
        return [...V, Ce];
      }
      return V;
    },
    []
  ), X = ee.useCallback(
    async (V, me, ve, Ve) => {
      const at = Tt.getSettings();
      if (!t.profileId) {
        we("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), ve(), _(!0);
      try {
        const ze = [], I = Mi.extensionSettings.connectionManager?.profiles?.find(
          (Ce) => Ce.id === t.profileId
        ), re = I?.api ? Mi.CONNECT_API_MAP[I.api].selected : void 0;
        if (!re) {
          we("warning", "No API selected for this session.");
          return;
        }
        for (const Ce of V)
          if (Ce.id === Xd) {
            if (Ht === void 0 && !Un) continue;
            const ge = await _0(re, u);
            ge.warnings?.length && ge.warnings.forEach((Me) => we("warning", Me)), ze.push(...ge.result);
          } else
            ze.push(Ce);
        const ne = V.slice(0, V.length - (me ? 0 : 1)).reverse().find((Ce) => Ce.stateSnapshot)?.stateSnapshot ?? o, ye = at.prompts.existingFieldDefinitions;
        if (ye) {
          const Ce = {
            fields: {
              core: Object.fromEntries(
                Object.entries(ne.fields).filter(([Me]) => !Me.startsWith("alternate_greetings_")).map(([, Me]) => [Me.label, Me.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(ne.fields).filter(([Me]) => Me.startsWith("alternate_greetings_")).map(([, Me]) => [Me.label, Me.value])
              ),
              draft: Object.fromEntries(Object.entries(ne.draftFields).map(([, Me]) => [Me.label, Me.value]))
            }
          };
          let ge = Yt.compile(ye.content, { noEscape: !0 })(Ce);
          if (ge = Mi.substituteParams(ge), ge.trim()) {
            const Me = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: ge.trim()
            }, Xe = ze.pop();
            ze.push(Me), Xe && ze.push(Xe);
          }
        }
        if (t.isReadonly) {
          ze.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const Ce = await ZA(
            t.profileId,
            ze,
            at.maxResponseToken,
            k.current.signal
          ), ge = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Ce
          }, Me = [...V, ge];
          p(Me), s({ ...t, messages: Me });
        } else {
          const Ce = t.type === "field" ? LA : (() => {
            const De = [...Object.keys(ne.fields), ...Object.keys(ne.draftFields)], Re = Object.keys(ne.draftFields);
            return BA(De, Re);
          })(), Me = await GA(
            t.profileId,
            ze,
            Ce,
            t.type === "field" ? i0.FIELD : i0.GLOBAL,
            t.promptEngineeringMode,
            at.maxResponseToken,
            k.current.signal
          ), Xe = MC(ne, Me, t.type, t.targetFieldId), de = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Me.justification,
            stateSnapshot: Xe
          };
          let he = [...V, de];
          he = P(he, Xe, ne), p(he), s({ ...t, messages: he });
        }
      } catch (ze) {
        ze.name === "AbortError" ? we("info", "Request was cancelled.") : (console.error("Revise request failed:", ze), we("error", `Request failed: ${ze.message}`)), Ve();
      } finally {
        _(!1), k.current = null;
      }
    },
    [t, s, o, u, P]
  ), U = ee.useCallback(async () => {
    if (!h.trim() || y) return;
    const V = { id: `msg-${Date.now()}`, role: "user", content: h.trim() }, me = f;
    X(
      [...f, V],
      !1,
      () => {
        p([...f, V]), g("");
      },
      () => p(me)
    );
  }, [h, y, f, X]), G = ee.useCallback(async () => {
    if (y || f.length === 0) return;
    const V = f;
    let me = [...f];
    const ve = f.findLastIndex((Ve) => !Ve.isStateUpdate);
    ve > -1 && f[ve].role === "assistant" && (me = f.slice(0, ve)), await X(
      me,
      !0,
      () => p(me),
      () => p(V)
    );
  }, [y, f, X]), Q = () => {
    const V = f.slice().reverse().find((me) => me.stateSnapshot)?.stateSnapshot ?? o;
    a(V), r();
  }, oe = (V) => {
    const me = f.findIndex((at) => at.id === V);
    if (me === -1 || !f[me].stateSnapshot) return;
    const ve = f[me].stateSnapshot;
    let Ve = o;
    for (let at = me - 1; at >= 0; at--)
      if (f[at].stateSnapshot) {
        Ve = f[at].stateSnapshot;
        break;
      }
    v({ before: Ve, after: ve });
  }, fe = () => {
    S(!0);
  }, Ee = (V) => {
    D(V.id), A(V.content);
  }, H = () => {
    D(null), A("");
  }, te = async () => {
    if (!w) return;
    const V = f.findIndex((I) => I.id === w);
    if (V === -1 || !await Mi.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ve = f, Ve = f.slice(0, V), at = { ...f[V], content: x }, ze = [...Ve, at];
    H(), X(
      ze,
      !1,
      () => p(ze),
      () => p(ve)
    );
  }, ue = async (V) => {
    const me = f.findIndex((I) => I.id === V);
    if (me === -1) return;
    const Ve = !!f[me].isInitial;
    if (!await Mi.Popup.show.confirm(
      "Delete Message",
      Ve ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let ze;
    Ve ? ze = f.filter((I) => I.isInitial && I.id !== V) : ze = f.slice(0, me), p(ze), s({ ...t, messages: ze }), we("info", "Message history has been updated.");
  }, Le = f.filter((V) => !V.isStateUpdate), j = Le.filter((V) => V.isInitial), J = Le.filter((V) => !V.isInitial), ae = f.slice().reverse().find((V) => V.stateSnapshot)?.stateSnapshot ?? o, se = () => {
    O(!0);
  }, le = (V) => {
    const me = f.slice().reverse().find((at) => at.stateSnapshot)?.stateSnapshot ?? o, ve = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: V
    };
    let Ve = [...f, ve];
    Ve = P(Ve, V, me), p(Ve), s({ ...t, messages: Ve }), O(!1);
  }, Ie = () => {
    k.current?.abort();
  };
  return /* @__PURE__ */ T.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ T.jsx("h2", { children: t.name }),
      /* @__PURE__ */ T.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ T.jsx(
            "input",
            {
              type: "checkbox",
              checked: t.isReadonly ?? !1,
              onChange: (V) => s({ ...t, isReadonly: V.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ T.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ T.jsx(
          e1,
          {
            initialSelectedProfileId: t.profileId,
            onChange: (V) => s({ ...t, profileId: V?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ T.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: (V) => s({ ...t, promptEngineeringMode: V.target.value }),
            title: "Prompt Engineering Mode",
            disabled: t.isReadonly,
            style: { minWidth: "fit-content", width: "unset" },
            children: [
              /* @__PURE__ */ T.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ T.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ T.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ T.jsx(_e, { onClick: fe, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ T.jsx(_e, { onClick: se, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ T.jsx(_e, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ T.jsxs(_e, { onClick: Q, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "chat-messages", children: [
      j.length > 0 && /* @__PURE__ */ T.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ T.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ T.jsx("div", { className: "initial-messages-content", children: j.map(
          (V) => w === V.id ? /* @__PURE__ */ T.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ T.jsx(kn, { value: x, onChange: (me) => A(me.target.value), rows: 5 }),
            /* @__PURE__ */ T.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ T.jsxs(_e, { onClick: te, children: [
                /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ T.jsxs(_e, { onClick: H, children: [
                /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, V.id) : /* @__PURE__ */ T.jsxs("div", { className: `message-bubble-wrapper initial-context ${V.role}`, children: [
            /* @__PURE__ */ T.jsx("div", { className: `message-bubble ${V.role} initial`, children: /* @__PURE__ */ T.jsx("div", { className: "message-content", children: V.content }) }),
            !y && V.id !== Xd && /* @__PURE__ */ T.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ T.jsxs(
                _e,
                {
                  className: "message-action-button",
                  onClick: () => Ee(V),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ T.jsxs(
                _e,
                {
                  className: "message-action-button danger_button",
                  onClick: () => ue(V.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, V.id)
        ) })
      ] }),
      J.map(
        (V) => w === V.id ? /* @__PURE__ */ T.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ T.jsx(kn, { value: x, onChange: (me) => A(me.target.value), rows: 3 }),
          /* @__PURE__ */ T.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ T.jsxs(_e, { onClick: te, children: [
              /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ T.jsxs(_e, { onClick: H, children: [
              /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, V.id) : /* @__PURE__ */ T.jsxs("div", { className: `message-bubble-wrapper ${V.role}`, children: [
          /* @__PURE__ */ T.jsxs("div", { className: "message-actions", children: [
            V.role === "user" && !V.stateSnapshot && !y && /* @__PURE__ */ T.jsxs(
              _e,
              {
                className: "message-action-button",
                onClick: () => Ee(V),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            V.stateSnapshot && !y && /* @__PURE__ */ T.jsxs(
              _e,
              {
                className: "message-action-button",
                onClick: () => oe(V.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !y && /* @__PURE__ */ T.jsxs(
              _e,
              {
                className: "message-action-button danger_button",
                onClick: () => ue(V.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ T.jsx("div", { className: `message-bubble ${V.role}`, children: /* @__PURE__ */ T.jsx("div", { className: "message-content", children: V.content }) })
        ] }, V.id)
      ),
      J.length > 0 && !y && /* @__PURE__ */ T.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ T.jsxs(_e, { onClick: G, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      y && /* @__PURE__ */ T.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ T.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ T.jsx(_e, { onClick: Ie, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ T.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ T.jsx(
        kn,
        {
          value: h,
          onChange: (V) => g(V.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: y || !!w,
          onKeyDown: (V) => {
            V.key === "Enter" && !V.shiftKey && (V.preventDefault(), U());
          }
        }
      ),
      /* @__PURE__ */ T.jsxs(_e, { onClick: U, disabled: y || !h.trim() || !!w, children: [
        " ",
        /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    b && /* @__PURE__ */ T.jsx(
      Li,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ T.jsx(VA, { before: b.before, after: b.after }),
        onComplete: () => v(null),
        options: { wide: !0, large: !0 }
      }
    ),
    d && /* @__PURE__ */ T.jsx(
      Li,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ T.jsx(YA, { currentState: ae, initialState: o }),
        onComplete: () => S(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    E && /* @__PURE__ */ T.jsx(
      Li,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ T.jsx(
          XA,
          {
            initialState: ae,
            onSave: le,
            onClose: () => O(!1)
          }
        ),
        onComplete: () => O(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
function k1(t, r = {}) {
  const a = t?.entries;
  if (!a)
    return [];
  const s = Array.isArray(a) ? a : Object.values(a);
  return r.includeDisabled ? s : s.filter((o) => !o.disable);
}
async function QA(t, r, a, s, o) {
  const u = Tt.getSettings(), f = u.mainContextTemplatePresets[a];
  if (!f)
    throw new Error(`Main context template preset "${a}" not found.`);
  const p = [], g = {
    ...{
      user: Hn.name1 || "You",
      char: t.fields.name?.value || "Character",
      persona: Hn.powerUserSettings.persona_description
    },
    fields: {
      core: Object.fromEntries(
        Object.entries(t.fields).filter(([v]) => !v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(t.fields).filter(([v]) => v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      draft: Object.fromEntries(Object.entries(t.draftFields).map(([, v]) => [v.label, v.value]))
    }
  };
  if (s.charCard) {
    const v = [];
    o.selectedCharacterIndexes.forEach((d) => {
      const S = Hn.characters[parseInt(d)];
      S && v.push(S);
    }), g.characters = v;
  }
  if (s.worldInfo) {
    const v = {};
    await Promise.all(
      o.selectedWorldNames.map(async (d) => {
        const S = await Hn.loadWorldInfo(d);
        S && (v[d] = k1(S));
      })
    ), g.lorebooks = v;
  }
  for (const v of f.prompts) {
    if (!v.enabled || v.promptName === "stDescription" && !s.stDescription || v.promptName === "charDefinitions" && !s.charCard || v.promptName === "lorebookDefinitions" && !s.worldInfo || v.promptName === "existingFieldDefinitions" && !s.existingFields || v.promptName === "personaDescription" && !s.persona || v.promptName === "chatHistory" && s.messages.type === "none" || Ht === void 0 && !Un && v.promptName === "chatHistory") continue;
    if (v.promptName === "chatHistory") {
      p.push({
        id: Xd,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    if (["taskDescription", "existingFieldDefinitions"].includes(v.promptName))
      continue;
    const S = u.prompts[v.promptName];
    if (!S || S.content.includes("{{activeFormatInstructions}}"))
      continue;
    let E = "";
    E = Yt.compile(S.content, { noEscape: !0 })(g), E = Hn.substituteParams(E), E.trim() && p.push({
      id: `im-${p.length}`,
      role: v.role,
      content: E.trim(),
      isInitial: !0
    });
  }
  const y = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", _ = u.prompts.reviseTaskDescription.content, b = Yt.compile(_, { noEscape: !0 })({
    isFieldSession: !!r,
    targetLabel: y
  });
  return p.push({
    id: `im-${p.length}`,
    role: "system",
    content: b,
    isInitial: !0
  }), p;
}
const R1 = "charCreator", j1 = "charCreator_reviseSessions", dl = () => SillyTavern.libs.localforage, JA = (t) => {
  if (!t)
    return { value: null, recovered: !1 };
  try {
    return { value: JSON.parse(t), recovered: !1 };
  } catch (r) {
    return { value: null, recovered: !0, error: r };
  }
}, z1 = async (t, r, a) => {
  try {
    const s = await r.getItem(t);
    if (s !== null)
      return { value: s, migrated: !1, recovered: !1 };
    const o = JA(a.getItem(t));
    return o.value === null ? (o.recovered && a.removeItem(t), { value: null, migrated: !1, recovered: o.recovered, error: o.error }) : (await r.setItem(t, o.value), a.removeItem(t), { value: o.value, migrated: !0, recovered: o.recovered });
  } catch (s) {
    return { value: null, migrated: !1, recovered: !0, error: s };
  }
}, L1 = async (t, r, a = dl()) => {
  try {
    return await a.setItem(t, r), { persisted: !0 };
  } catch (s) {
    return { persisted: !1, error: s };
  }
}, KA = (t = dl(), r = localStorage) => z1(R1, t, r), WA = (t, r = dl()) => L1(R1, t, r), eT = (t = dl(), r = localStorage) => z1(j1, t, r), tT = (t, r = dl()) => L1(j1, t, r), uu = SillyTavern.getContext(), nT = ({
  target: t,
  onClose: r,
  onApply: a,
  initialState: s,
  contextToSend: o,
  sessionForContext: u
}) => {
  const [f, p] = ee.useState([]), [h, g] = ee.useState(null), [y, _] = ee.useState(!0);
  ee.useEffect(() => {
    let D = !0;
    return eT().then(({ value: x, recovered: A }) => {
      D && (p(Array.isArray(x) ? x : []), A && we("warning", "Some saved revise sessions were invalid and have been reset."));
    }).catch((x) => {
      console.error("Failed to load revise sessions:", x), we("warning", "Saved revise sessions could not be loaded.");
    }).finally(() => {
      D && _(!1);
    }), () => {
      D = !1;
    };
  }, []);
  const b = ee.useMemo(() => f.filter((D) => D.type === t.type && (D.type === "global" || D.targetFieldId === t.fieldId)).sort((D, x) => new Date(x.createdAt).getTime() - new Date(D.createdAt).getTime()), [f, t]), v = (D) => {
    p(D), tT(D).then((x) => {
      x.persisted || (console.warn("Failed to save revise sessions:", x.error), we("warning", "Revise session history could not be saved. Browser storage may be full."));
    });
  }, d = async () => {
    const D = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", x = await uu.Popup.show.input(
      "New Session Name",
      `Session for ${D} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (x)
      try {
        const A = Tt.getSettings();
        if (!A.profileId) {
          we("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const M = {
          id: `rs-${Date.now()}`,
          name: x,
          type: t.type,
          targetFieldId: t.fieldId,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: [],
          // Will be populated next
          context: {
            mainContextTemplatePreset: A.mainContextTemplatePreset
          },
          profileId: A.profileId,
          promptEngineeringMode: A.defaultPromptEngineeringMode,
          isReadonly: !1
        }, k = await QA(
          s,
          M.targetFieldId,
          M.context.mainContextTemplatePreset,
          o,
          u
        );
        M.messages = k, g(M);
      } catch (A) {
        console.error("Failed to create session:", A), we("error", `Failed to create session: ${A.message}`);
      }
  }, S = (D) => {
    g(D);
  }, E = async (D) => {
    if (await uu.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const A = f.filter((M) => M.id !== D);
      v(A);
    }
  }, O = (D) => {
    const x = f.findIndex((M) => M.id === D.id), A = [...f];
    x !== -1 ? A[x] = D : A.push(D), v(A), g(D);
  };
  if (h) {
    const D = uu.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === h.profileId
    ), x = {
      targetCharacterId: Ht,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Un,
      presetName: D?.preset,
      contextName: D?.context,
      instructName: D?.instruct
    }, A = o.messages;
    switch (A.type) {
      case "none":
        x.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        x.messageIndexesBetween = { start: 0, end: A.first ?? 10 };
        break;
      case "last":
        const M = uu.chat?.length ?? 0, k = A.last ?? 10;
        x.messageIndexesBetween = {
          end: Math.max(0, M - 1),
          start: Math.max(0, M - k)
        };
        break;
      case "range":
        x.messageIndexesBetween = {
          start: A.range?.start ?? 0,
          end: A.range?.end ?? 10
        };
        break;
    }
    return Ht === void 0 && !Un && (x.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ T.jsx(
      $A,
      {
        session: h,
        onBack: () => g(null),
        onApply: a,
        onSessionUpdate: O,
        initialState: s,
        chatContextOptions: x
      }
    );
  }
  const w = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global";
  return /* @__PURE__ */ T.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ T.jsx("div", { className: "popup_header", children: /* @__PURE__ */ T.jsxs("h2", { children: [
      'Revise Sessions for "',
      w,
      '"'
    ] }) }),
    /* @__PURE__ */ T.jsx("div", { className: "session-list", children: y ? /* @__PURE__ */ T.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : b.length === 0 ? /* @__PURE__ */ T.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : b.map((D) => /* @__PURE__ */ T.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "session-info", onClick: () => S(D), children: [
        /* @__PURE__ */ T.jsx("span", { className: "session-name", children: D.name }),
        /* @__PURE__ */ T.jsx("span", { className: "session-date", children: new Date(D.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ T.jsx(_e, { className: "danger_button", onClick: () => E(D.id), children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, D.id)) }),
    /* @__PURE__ */ T.jsx("div", { className: "session-actions", children: /* @__PURE__ */ T.jsxs(_e, { onClick: d, className: "menu_button", children: [
      /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
};
function rT(t, r) {
  return {
    name: t.name?.value ?? "",
    description: t.description?.value ?? "",
    personality: t.personality?.value ?? "",
    scenario: t.scenario?.value ?? "",
    first_mes: t.first_mes?.value ?? "",
    mes_example: t.mes_example?.value ?? "",
    alternate_greetings: r.map((a) => a.value).filter(Boolean)
  };
}
function aT(t, r = []) {
  const a = new Set(t), s = r.filter((o) => o && !a.has(o));
  return [
    ...t.map((o) => ({ value: o, label: o })),
    ...s.map((o) => ({ value: o, label: `${o} (missing)` }))
  ];
}
const Nn = SillyTavern.getContext(), Cd = () => ({
  selectedCharacterIndexes: Ht ? [String(Ht)] : [],
  selectedWorldNames: [],
  fields: Jn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: Sr[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), iT = {
  name: { label: Sr.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Sr.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Sr.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Sr.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Sr.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Sr.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, sT = () => {
  const t = t1(), r = Tt.getSettings(), [a, s] = ee.useState(Cd()), [o, u] = ee.useState([]), [f, p] = ee.useState(!0), [h, g] = ee.useState("core"), [y, _] = ee.useState([]), [b, v] = ee.useState([]), [d, S] = ee.useState(null), [E, O] = ee.useState(null), [w, D] = ee.useState(!1), [x, A] = ee.useState(null);
  ee.useEffect(() => {
    (async () => {
      p(!0), _(Nn.characters), v(iv);
      const re = (await KA()).value ?? {}, ne = Cd();
      if (re.fields && (ne.fields = { ...ne.fields, ...re.fields }), re.draftFields && (ne.draftFields = re.draftFields), re.selectedCharacterIndexes && (ne.selectedCharacterIndexes = re.selectedCharacterIndexes), re.selectedWorldNames && (ne.selectedWorldNames = re.selectedWorldNames), re.lastLoadedCharacterId) {
        ne.lastLoadedCharacterId = re.lastLoadedCharacterId;
        const ye = Nn.characters.find((Ce) => Ce.avatar === re.lastLoadedCharacterId);
        ye && S(ye);
      }
      s(ne), p(!1);
    })();
  }, []), ee.useEffect(() => {
    f || WA(a).then((I) => {
      I.persisted || (console.warn("Failed to save Character Creator session:", I.error), we("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [a, f]);
  const M = (I, re) => {
    Tt.getSettings()[I] = re, Tt.saveSettings(), t();
  }, k = (I, re) => {
    Tt.getSettings().contextToSend[I] = re, Tt.saveSettings(), t();
  }, P = ee.useCallback(
    (I, re, ne, ye) => {
      s((Ce) => {
        const ge = ye ? "draftFields" : "fields", Me = { ...Ce[ge] };
        return Me[I] || (Me[I] = { value: "", prompt: "", label: I }), Me[I][ne] = re, { ...Ce, [ge]: Me };
      });
    },
    []
  ), X = ee.useMemo(
    () => Object.keys(a.fields).filter((I) => I.startsWith("alternate_greetings_")).sort((I, re) => parseInt(I.split("_")[2]) - parseInt(re.split("_")[2])).map((I) => a.fields[I]),
    [a.fields]
  ), U = ee.useCallback((I) => {
    s((re) => {
      const ne = { ...re.fields };
      return Object.keys(ne).forEach((ye) => {
        ye.startsWith("alternate_greetings_") && delete ne[ye];
      }), I.forEach((ye, Ce) => {
        const ge = `alternate_greetings_${Ce + 1}`;
        ne[ge] = { ...ye, label: `Alternate Greeting ${Ce + 1}` };
      }), { ...re, fields: ne };
    });
  }, []), G = ee.useCallback(
    (I, re) => {
      P(I, "", "value", re);
    },
    [P]
  ), Q = ee.useCallback(
    async (I) => {
      await Nn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${a.draftFields[I].label}"?`
      ) && s((ne) => {
        const ye = { ...ne.draftFields };
        return delete ye[I], { ...ne, draftFields: ye };
      });
    },
    [a.draftFields]
  ), oe = ee.useCallback(async () => {
    const I = await Nn.Popup.show.input("Enter Draft Field Name", "");
    if (!I?.trim()) return;
    const re = Ud(I.trim());
    if (!re) return we("error", "Invalid field name.");
    if (a.draftFields[re] || Jn.includes(re))
      return we("warning", "Field name already exists.");
    s((ne) => ({
      ...ne,
      draftFields: { ...ne.draftFields, [re]: { value: "", prompt: "", label: I } }
    })), g("draft");
  }, [a.draftFields]), fe = (I) => {
    A({ type: "field", fieldId: I }), D(!0);
  }, Ee = () => {
    A({ type: "global" }), D(!0);
  }, H = (I) => {
    s((re) => kC(re, I)), we("success", "Changes from revise session applied."), D(!1);
  }, te = ee.useCallback(
    async (I, re) => {
      if (!r.profileId) return we("warning", "Please select a connection profile.");
      u((ne) => [...ne, I]);
      try {
        const ne = Nn.extensionSettings.connectionManager?.profiles?.find(
          (De) => De.id === r.profileId
        );
        if (!ne) throw new Error("Connection profile not found.");
        const ye = {
          presetName: ne?.preset,
          contextName: ne?.context,
          instructName: ne?.instruct,
          targetCharacterId: Ht,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Un
        }, Ce = r.contextToSend.messages;
        switch (Ce.type) {
          case "none":
            ye.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            ye.messageIndexesBetween = { start: 0, end: Ce.first ?? 10 };
            break;
          case "last":
            const De = Nn.chat?.length ?? 0, Re = Ce.last ?? 10;
            ye.messageIndexesBetween = {
              end: Math.max(0, De - 1),
              start: Math.max(0, De - Re)
            };
            break;
          case "range":
            ye.messageIndexesBetween = {
              start: Ce.range?.start ?? 0,
              end: Ce.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        Ht === void 0 && !Un && (ye.messageIndexesBetween = { start: -1, end: -1 });
        const ge = {};
        await Promise.all(
          iv.filter((De) => !ge[De]).map(async (De) => {
            const Re = await Nn.loadWorldInfo(De);
            Re && (ge[De] = k1(Re, { includeDisabled: !0 }));
          })
        );
        const Me = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete Me.stDescription, (!r.contextToSend.charCard || a.selectedCharacterIndexes.length === 0) && delete Me.charDefinitions, (!r.contextToSend.worldInfo || a.selectedWorldNames.length === 0) && delete Me.lorebookDefinitions, r.contextToSend.existingFields || delete Me.existingFieldDefinitions, r.contextToSend.persona || delete Me.personaDescription, delete Me.worldInfoCharDefinition;
        const Xe = await KE({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: ye,
          continueFrom: re,
          session: a,
          allCharacters: y,
          entriesGroupByWorldName: ge,
          promptSettings: Me,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`].content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (De) => De.enabled
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: I,
          outputFormat: r.outputFormat
        }), de = I.startsWith("alternate_greetings_"), he = !de && !Jn.includes(I);
        if (de) {
          const De = parseInt(I.split("_")[2]) - 1, Re = [...X];
          Re[De] && (Re[De].value = Xe), U(Re);
        } else
          P(I, Xe, "value", he);
      } catch (ne) {
        console.error(ne), we("error", ne.message || String(ne));
      } finally {
        u((ne) => ne.filter((ye) => ye !== I));
      }
    },
    [a, r, y, X, P, U]
  ), ue = ee.useCallback(async () => {
    await Nn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(Cd()), S(null));
  }, []), Le = ee.useCallback(
    (I) => {
      if (!d) return we("warning", "Please load a character to compare against.");
      let re, ne, ye;
      typeof I == "number" ? (re = X[I]?.value ?? "", ne = d.data?.alternate_greetings?.[I] ?? "", ye = `Alternate Greeting ${I + 1}`) : (re = a.fields[I]?.value ?? "", ne = d[I] ?? d.data?.[I] ?? "", ye = Sr[I]), O({ original: ne, current: re, fieldName: ye });
    },
    [d, a.fields, X]
  ), j = ee.useCallback(
    async (I) => {
      const re = y[parseInt(I)];
      if (!re || Jn.some((ge) => a.fields[ge].value.trim() !== "") && !await Nn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const ye = { ...a.fields };
      Jn.forEach((ge) => {
        ye[ge] = { value: re[ge] ?? re.data?.[ge] ?? "", prompt: "", label: Sr[ge] };
      });
      const Ce = (re.data?.alternate_greetings ?? []).map((ge) => ({ value: ge, prompt: "" }));
      S(re), s((ge) => ({ ...ge, fields: ye, lastLoadedCharacterId: re.avatar })), U(Ce);
    },
    [y, a.fields, U]
  ), J = ee.useCallback(async () => {
    if (Un) {
      we("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (Ht === void 0) {
      we("warning", "No character chat is currently open.");
      return;
    }
    await j(String(Ht));
  }, [j]), ae = () => X.map((I) => I.value).filter((I) => I.trim() !== ""), se = async () => {
    if (!a.fields.name.value) return we("warning", "Please provide a character name.");
    if (!await Nn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const re = {
      name: a.fields.name.value,
      description: a.fields.description.value,
      personality: a.fields.personality.value,
      scenario: a.fields.scenario.value,
      first_mes: a.fields.first_mes.value,
      mes_example: a.fields.mes_example.value,
      data: {
        alternate_greetings: ae(),
        tags: [],
        avatar: "none",
        name: a.fields.name.value,
        description: a.fields.description.value,
        first_mes: a.fields.first_mes.value,
        mes_example: a.fields.mes_example.value,
        personality: a.fields.personality.value,
        scenario: a.fields.scenario.value
      },
      avatar: "none",
      tags: [],
      spec: "chara_card_v3",
      spec_version: "3.0"
    };
    try {
      await N_(re, !0);
    } catch (ne) {
      we("error", `Failed to create character: ${ne.message}`);
    }
  }, le = async () => {
    if (!d) return we("warning", "Please load a character to override.");
    if (!await Nn.Popup.show.confirm(
      "Override Character",
      `Override "${d.name}"? This cannot be undone.`
    )) return;
    const re = {
      ...d,
      name: a.fields.name.value,
      description: a.fields.description.value,
      personality: a.fields.personality.value,
      scenario: a.fields.scenario.value,
      first_mes: a.fields.first_mes.value,
      mes_example: a.fields.mes_example.value,
      data: {
        alternate_greetings: ae(),
        name: a.fields.name.value,
        description: a.fields.description.value,
        first_mes: a.fields.first_mes.value,
        mes_example: a.fields.mes_example.value,
        personality: a.fields.personality.value,
        scenario: a.fields.scenario.value
      }
    };
    try {
      await D_(re, !0), we("success", `Character "${re.name}" updated!`);
    } catch (ne) {
      we("error", `Failed to override character: ${ne.message}`);
    }
  }, Ie = () => {
    const I = JSON.stringify({ draftFields: a.draftFields, version: oh }, null, 2), re = new Blob([I], { type: "application/json" }), ne = document.createElement("a");
    ne.href = URL.createObjectURL(re), ne.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, ne.click(), URL.revokeObjectURL(ne.href);
  }, V = () => {
    const I = document.createElement("input");
    I.type = "file", I.accept = ".json", I.onchange = async () => {
      const re = I.files?.[0];
      if (re)
        try {
          const ne = await re.text(), ye = JSON.parse(ne);
          if (!ye.draftFields) throw new Error("Invalid file format.");
          (Object.keys(a.draftFields).length > 0 ? await Nn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((ge) => ({ ...ge, draftFields: ye.draftFields })), we("success", "Draft fields imported."));
        } catch (ne) {
          we("error", `Import failed: ${ne.message}`);
        }
    }, I.click();
  }, me = ee.useMemo(
    () => y.map((I, re) => ({ value: String(re), label: I.name })),
    [y]
  ), ve = ee.useMemo(
    () => b.map((I) => ({ value: I, label: I })),
    [b]
  ), Ve = ee.useMemo(
    () => aT(b, a.selectedWorldNames),
    [b, a.selectedWorldNames]
  ), at = ee.useMemo(
    () => Object.keys(r.promptPresets).map((I) => ({ value: I, label: I })),
    [r.promptPresets]
  ), ze = ee.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((I) => ({ value: I, label: I })),
    [r.mainContextTemplatePresets]
  );
  return f ? /* @__PURE__ */ T.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ T.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ T.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ T.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ T.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ T.jsx(
            e1,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (I) => M("profileId", I?.id ?? "")
            }
          )
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ T.jsx("h3", { children: "Context to Send" }),
          /* @__PURE__ */ T.jsxs("div", { className: "context-options", children: [
            /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.stDescription,
                  onChange: (I) => k("stDescription", I.target.checked)
                }
              ),
              " ",
              "Description of SillyTavern & Char Card"
            ] }),
            /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.persona,
                  onChange: (I) => k("persona", I.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (Ht !== void 0 || Un) && /* @__PURE__ */ T.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ T.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ T.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (I) => k("messages", {
                    ...r.contextToSend.messages,
                    type: I.target.value
                  }),
                  children: [
                    /* @__PURE__ */ T.jsx("option", { value: "none", children: "None" }),
                    /* @__PURE__ */ T.jsx("option", { value: "all", children: "All Messages" }),
                    /* @__PURE__ */ T.jsx("option", { value: "first", children: "First X Messages" }),
                    /* @__PURE__ */ T.jsx("option", { value: "last", children: "Last X Messages" }),
                    /* @__PURE__ */ T.jsx("option", { value: "range", children: "Range" })
                  ]
                }
              ),
              r.contextToSend.messages.type === "first" && /* @__PURE__ */ T.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ T.jsxs("label", { children: [
                "First",
                " ",
                /* @__PURE__ */ T.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.first ?? 10,
                    onChange: (I) => k("messages", {
                      ...r.contextToSend.messages,
                      first: parseInt(I.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "last" && /* @__PURE__ */ T.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ T.jsxs("label", { children: [
                "Last",
                " ",
                /* @__PURE__ */ T.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.last ?? 10,
                    onChange: (I) => k("messages", {
                      ...r.contextToSend.messages,
                      last: parseInt(I.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "range" && /* @__PURE__ */ T.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ T.jsxs("label", { children: [
                "Range:",
                " ",
                /* @__PURE__ */ T.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "0",
                    placeholder: "Start",
                    value: r.contextToSend.messages.range?.start ?? 0,
                    onChange: (I) => k("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: parseInt(I.target.value) || 0
                      }
                    })
                  }
                ),
                " ",
                "to",
                " ",
                /* @__PURE__ */ T.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    placeholder: "End",
                    value: r.contextToSend.messages.range?.end ?? 10,
                    onChange: (I) => k("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: parseInt(I.target.value) || 10 }
                    })
                  }
                )
              ] }) })
            ] }),
            /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.charCard,
                  onChange: (I) => k("charCard", I.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ T.jsx(
              au,
              {
                items: me,
                value: a.selectedCharacterIndexes,
                onChange: (I) => s((re) => ({ ...re, selectedCharacterIndexes: I })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.worldInfo,
                  onChange: (I) => k("worldInfo", I.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ T.jsx(
              au,
              {
                items: Ve,
                value: a.selectedWorldNames,
                onChange: (I) => s((re) => ({ ...re, selectedWorldNames: I })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.existingFields,
                  onChange: (I) => k("existingFields", I.target.checked)
                }
              ),
              " ",
              "Existing Field Content"
            ] }),
            /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.dontSendOtherGreetings,
                  onChange: (I) => k("dontSendOtherGreetings", I.target.checked)
                }
              ),
              " ",
              "Don't send other alternate greetings"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ T.jsx("h3", { children: "Generation Options" }),
          /* @__PURE__ */ T.jsxs("label", { title: "You can edit in extension settings", children: [
            "Main Context Template",
            /* @__PURE__ */ T.jsx(
              wu,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: ze,
                value: r.mainContextTemplatePreset,
                onChange: (I) => M("mainContextTemplatePreset", I ?? "default")
              }
            )
          ] }),
          /* @__PURE__ */ T.jsxs("label", { children: [
            "Max Context Tokens",
            /* @__PURE__ */ T.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.maxContextType,
                onChange: (I) => M("maxContextType", I.target.value),
                children: [
                  /* @__PURE__ */ T.jsx("option", { value: "profile", children: "Use profile preset" }),
                  /* @__PURE__ */ T.jsx("option", { value: "sampler", children: "Use active preset" }),
                  /* @__PURE__ */ T.jsx("option", { value: "custom", children: "Custom" })
                ]
              }
            )
          ] }),
          r.maxContextType === "custom" && /* @__PURE__ */ T.jsx(
            "input",
            {
              type: "number",
              className: "text_pole",
              value: r.maxContextValue,
              onChange: (I) => M("maxContextValue", parseInt(I.target.value) || 16384)
            }
          ),
          /* @__PURE__ */ T.jsxs("label", { children: [
            "Max Response Tokens",
            /* @__PURE__ */ T.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                value: r.maxResponseToken,
                onChange: (I) => M("maxResponseToken", parseInt(I.target.value) || 1024)
              }
            )
          ] }),
          /* @__PURE__ */ T.jsxs("label", { children: [
            "Output Format",
            /* @__PURE__ */ T.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.outputFormat,
                onChange: (I) => M("outputFormat", I.target.value),
                children: [
                  /* @__PURE__ */ T.jsx("option", { value: "none", children: "Plain Text" }),
                  /* @__PURE__ */ T.jsx("option", { value: "xml", children: "XML" }),
                  /* @__PURE__ */ T.jsx("option", { value: "json", children: "JSON" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ T.jsx("h3", { children: "Additional Instructions" }),
          /* @__PURE__ */ T.jsx(
            wu,
            {
              label: "Prompt Preset",
              items: at,
              value: r.promptPreset,
              onChange: (I) => M("promptPreset", I ?? "default"),
              onItemsChange: (I) => M(
                "promptPresets",
                I.reduce(
                  (re, ne) => ({ ...re, [ne.value]: r.promptPresets[ne.value] ?? { content: "" } }),
                  {}
                )
              ),
              enableCreate: !0,
              enableDelete: !0,
              enableRename: !0,
              readOnlyValues: ["default"]
            }
          ),
          /* @__PURE__ */ T.jsx(
            kn,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (I) => M("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: I.target.value }
              }),
              rows: 4
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "wide-column", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "character-field-actions", children: [
          /* @__PURE__ */ T.jsx(
            _e,
            {
              onClick: Ee,
              title: "Open global revision sessions to edit multiple fields at once",
              children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-comments" })
            }
          ),
          /* @__PURE__ */ T.jsx(_e, { onClick: se, children: "Save as New" }),
          /* @__PURE__ */ T.jsx(_e, { onClick: le, disabled: !d, children: "Override Char" }),
          r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ T.jsx(
            au,
            {
              items: ve,
              placeholder: "Save as WI Entry",
              closeOnSelect: !0,
              value: [],
              onChange: (I) => {
              },
              onBeforeSelection: async (I, re) => {
                if (!a.fields.name.value)
                  return we("warning", "Please enter a name first."), !1;
                const ne = re[0], Ce = Yt.compile(r.prompts.worldInfoCharDefinition.content)({
                  character: rT(a.fields, X)
                }), ge = {
                  uid: -1,
                  key: [a.fields.name.value],
                  content: Ce,
                  comment: a.fields.name.value,
                  disable: !1,
                  keysecondary: []
                };
                try {
                  await ux({ entry: ge, selectedWorldName: ne, operation: "add" }), we("success", `Entry added to ${ne}.`);
                } catch (Me) {
                  we("error", `Failed to add WI Entry: ${Me.message}`);
                }
                return !1;
              }
            }
          ),
          /* @__PURE__ */ T.jsxs(_e, { onClick: ue, children: [
            /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-rotate-left", style: { marginRight: "10px" } }),
            "Reset Fields"
          ] }),
          /* @__PURE__ */ T.jsx(
            _e,
            {
              onClick: J,
              title: "Load the character from the currently open chat",
              disabled: !!Un || Ht === void 0,
              children: "Current Char"
            }
          ),
          /* @__PURE__ */ T.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ T.jsx(
            au,
            {
              items: me,
              value: d ? [String(y.indexOf(d))] : [],
              onChange: (I) => j(I[0]),
              multiple: !1,
              enableSearch: !0,
              placeholder: "Load Character..."
            }
          ) })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ T.jsx(
            _e,
            {
              onClick: () => g("core"),
              className: `menu_button tab-button ${h === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ T.jsx(
            _e,
            {
              onClick: () => g("draft"),
              className: `menu_button tab-button ${h === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ T.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
            /* @__PURE__ */ T.jsxs(_e, { onClick: oe, children: [
              /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ T.jsx(_e, { onClick: Ie, children: "Export" }),
            /* @__PURE__ */ T.jsx(_e, { onClick: V, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "tab-content-area", children: [
          h === "core" && /* @__PURE__ */ T.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ T.jsx("h3", { children: "Core Character Fields" }),
            Jn.map((I) => {
              const re = iT[I];
              return re ? /* @__PURE__ */ T.jsx(
                ky,
                {
                  fieldId: I,
                  label: re.label,
                  value: a.fields[I]?.value ?? "",
                  prompt: a.fields[I]?.prompt ?? "",
                  large: re.large,
                  rows: re.rows,
                  promptEnabled: re.promptEnabled,
                  isGenerating: o.includes(I),
                  onValueChange: (ne, ye) => P(ne, ye, "value", !1),
                  onPromptChange: (ne, ye) => P(ne, ye, "prompt", !1),
                  onGenerate: te,
                  onContinue: (ne) => te(ne, a.fields[ne].value),
                  onClear: (ne) => G(ne, !1),
                  onCompare: Le,
                  onOpenReviseSessions: fe
                },
                I
              ) : null;
            }),
            /* @__PURE__ */ T.jsx(
              fC,
              {
                greetings: X,
                onGreetingsChange: U,
                isGenerating: o.some((I) => I.startsWith("alternate_greetings_")),
                onGenerate: (I) => te(`alternate_greetings_${I + 1}`),
                onContinue: (I) => te(`alternate_greetings_${I + 1}`, X[I].value),
                onCompare: Le
              }
            )
          ] }),
          h === "draft" && /* @__PURE__ */ T.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ T.jsx("h3", { children: "Draft Fields" }),
            Object.entries(a.draftFields).map(([I, re]) => /* @__PURE__ */ T.jsx(
              ky,
              {
                fieldId: I,
                label: re.label,
                value: re.value,
                prompt: re.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: o.includes(I),
                onValueChange: (ne, ye) => P(ne, ye, "value", !0),
                onPromptChange: (ne, ye) => P(ne, ye, "prompt", !0),
                onGenerate: te,
                onContinue: (ne) => te(ne, a.draftFields[ne].value),
                onClear: (ne) => G(ne, !0),
                onDelete: Q
              },
              I
            ))
          ] })
        ] })
      ] })
    ] }),
    E && /* @__PURE__ */ T.jsx(
      Li,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ T.jsx(
          NC,
          {
            originalContent: E.original,
            newContent: E.current,
            fieldName: E.fieldName
          }
        ),
        onComplete: () => O(null),
        options: { wide: !0 }
      }
    ),
    w && x && /* @__PURE__ */ T.jsx(
      Li,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ T.jsx(
          nT,
          {
            target: x,
            onClose: () => D(!1),
            onApply: H,
            initialState: { fields: a.fields, draftFields: a.draftFields },
            contextToSend: r.contextToSend,
            sessionForContext: {
              selectedCharacterIndexes: a.selectedCharacterIndexes,
              selectedWorldNames: a.selectedWorldNames
            }
          }
        ),
        onComplete: () => D(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, lT = () => {
  const [t, r] = ee.useState(!1), a = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = a, t ? /* @__PURE__ */ T.jsx(
    Li,
    {
      content: /* @__PURE__ */ T.jsx(sT, {}),
      type: vn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, P1 = SillyTavern.getContext();
async function oT() {
  const t = await P1.renderExtensionTemplateAsync(
    `third-party/${ka}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", t);
  const r = document.createElement("div"), a = document.querySelector(".charCreator_settings .inline-drawer-content");
  a && (a.prepend(r), bv.createRoot(r).render(
    /* @__PURE__ */ T.jsx(mu.StrictMode, { children: /* @__PURE__ */ T.jsx(uC, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', o = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), bv.createRoot(u).render(
    /* @__PURE__ */ T.jsx(mu.StrictMode, { children: /* @__PURE__ */ T.jsx(lT, {}) })
  ), o.forEach((p) => {
    if (!p) return;
    const h = document.createElement("div");
    h.innerHTML = s.trim();
    const g = h.firstChild;
    g && (p.prepend(g), g.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function uT() {
  return !!P1.ConnectionManagerRequestService;
}
uT() ? nC().then(() => {
  oT();
}) : we("error", `[${ka}] Make sure ST is updated.`);
export {
  oT as init
};
