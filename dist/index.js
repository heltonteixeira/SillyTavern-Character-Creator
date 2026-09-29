import { renderStoryString as n_, persona_description_positions as sv } from "../../../../power-user.js";
import { parseMesExamples as r_, baseChatReplace as a_, chat_metadata as Ps, getMaxContextSize as i_, name1 as _r, name2 as Qr, this_chid as Ht, extension_prompt_types as wa, depth_prompt_role_default as s_, depth_prompt_depth_default as o_ } from "../../../../../script.js";
import { createWorldInfoEntry as l_, world_info_include_names as u_, wi_anchor_position as c_, world_names as ov } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as f_, formatInstructModeSystemPrompt as d_ } from "../../../../instruct-mode.js";
import { appendFileContent as h_ } from "../../../../chats.js";
import { setOpenAIMessages as p_, setOpenAIMessageExamples as m_, formatWorldInfo as g_, getPromptPosition as v_, getPromptRole as y_, prepareOpenAIMessages as b_ } from "../../../../openai.js";
import { metadata_keys as Is } from "../../../../authors-note.js";
import { getGroupDepthPrompts as __, selected_group as Hn } from "../../../../group-chats.js";
import { getRegexedString as S_, regex_placement as lv } from "../../../regex/engine.js";
import { removeFromArray as uv, runAfterAnimation as x_ } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ai, fixToastrForDialogs as Qf } from "../../../../popup.js";
import cv from "../../../../../lib/dialog-polyfill.esm.js";
function d0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Jf = { exports: {} }, Bs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fv;
function E_() {
  if (fv) return Bs;
  fv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function a(s, l, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), "key" in l) {
      u = {};
      for (var p in l)
        p !== "key" && (u[p] = l[p]);
    } else u = l;
    return l = u.ref, {
      $$typeof: t,
      type: s,
      key: f,
      ref: l !== void 0 ? l : null,
      props: u
    };
  }
  return Bs.Fragment = r, Bs.jsx = a, Bs.jsxs = a, Bs;
}
var dv;
function C_() {
  return dv || (dv = 1, Jf.exports = E_()), Jf.exports;
}
var T = C_(), Kf = { exports: {} }, ke = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hv;
function w_() {
  if (hv) return ke;
  hv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
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
  function k(j, J, ae, se, oe, Le) {
    return ae = Le.ref, {
      $$typeof: t,
      type: j,
      key: J,
      ref: ae !== void 0 ? ae : null,
      props: Le
    };
  }
  function q(j, J) {
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
  function B(j) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(ae) {
      return J[ae];
    });
  }
  var G = /\/+/g;
  function $(j, J) {
    return typeof j == "object" && j !== null && j.key != null ? B("" + j.key) : J.toString(36);
  }
  function le() {
  }
  function fe(j) {
    switch (j.status) {
      case "fulfilled":
        return j.value;
      case "rejected":
        throw j.reason;
      default:
        switch (typeof j.status == "string" ? j.then(le, le) : (j.status = "pending", j.then(
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
  function Ce(j, J, ae, se, oe) {
    var Le = typeof j;
    (Le === "undefined" || Le === "boolean") && (j = null);
    var V = !1;
    if (j === null) V = !0;
    else
      switch (Le) {
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
              return V = j._init, Ce(
                V(j._payload),
                J,
                ae,
                se,
                oe
              );
          }
      }
    if (V)
      return oe = oe(j), V = se === "" ? "." + $(j, 0) : se, x(oe) ? (ae = "", V != null && (ae = V.replace(G, "$&/") + "/"), Ce(oe, J, ae, "", function(Xe) {
        return Xe;
      })) : oe != null && (X(oe) && (oe = q(
        oe,
        ae + (oe.key == null || j && j.key === oe.key ? "" : ("" + oe.key).replace(
          G,
          "$&/"
        ) + "/") + V
      )), J.push(oe)), 1;
    V = 0;
    var me = se === "" ? "." : se + ":";
    if (x(j))
      for (var ge = 0; ge < j.length; ge++)
        se = j[ge], Le = me + $(se, ge), V += Ce(
          se,
          J,
          ae,
          Le,
          oe
        );
    else if (ge = b(j), typeof ge == "function")
      for (j = ge.call(j), ge = 0; !(se = j.next()).done; )
        se = se.value, Le = me + $(se, ge++), V += Ce(
          se,
          J,
          ae,
          Le,
          oe
        );
    else if (Le === "object") {
      if (typeof j.then == "function")
        return Ce(
          fe(j),
          J,
          ae,
          se,
          oe
        );
      throw J = String(j), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return V;
  }
  function U(j, J, ae) {
    if (j == null) return j;
    var se = [], oe = 0;
    return Ce(j, se, "", "", function(Le) {
      return J.call(ae, Le, oe++);
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
  function je() {
  }
  return ke.Children = {
    map: U,
    forEach: function(j, J, ae) {
      U(
        j,
        function() {
          J.apply(this, arguments);
        },
        ae
      );
    },
    count: function(j) {
      var J = 0;
      return U(j, function() {
        J++;
      }), J;
    },
    toArray: function(j) {
      return U(j, function(J) {
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
  }, ke.Component = E, ke.Fragment = a, ke.Profiler = l, ke.PureComponent = w, ke.StrictMode = s, ke.Suspense = h, ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A, ke.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(j) {
      return A.H.useMemoCache(j);
    }
  }, ke.cache = function(j) {
    return function() {
      return j.apply(null, arguments);
    };
  }, ke.cloneElement = function(j, J, ae) {
    if (j == null)
      throw Error(
        "The argument must be a React element, but you passed " + j + "."
      );
    var se = d({}, j.props), oe = j.key, Le = void 0;
    if (J != null)
      for (V in J.ref !== void 0 && (Le = void 0), J.key !== void 0 && (oe = "" + J.key), J)
        !M.call(J, V) || V === "key" || V === "__self" || V === "__source" || V === "ref" && J.ref === void 0 || (se[V] = J[V]);
    var V = arguments.length - 2;
    if (V === 1) se.children = ae;
    else if (1 < V) {
      for (var me = Array(V), ge = 0; ge < V; ge++)
        me[ge] = arguments[ge + 2];
      se.children = me;
    }
    return k(j.type, oe, void 0, void 0, Le, se);
  }, ke.createContext = function(j) {
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
  }, ke.createElement = function(j, J, ae) {
    var se, oe = {}, Le = null;
    if (J != null)
      for (se in J.key !== void 0 && (Le = "" + J.key), J)
        M.call(J, se) && se !== "key" && se !== "__self" && se !== "__source" && (oe[se] = J[se]);
    var V = arguments.length - 2;
    if (V === 1) oe.children = ae;
    else if (1 < V) {
      for (var me = Array(V), ge = 0; ge < V; ge++)
        me[ge] = arguments[ge + 2];
      oe.children = me;
    }
    if (j && j.defaultProps)
      for (se in V = j.defaultProps, V)
        oe[se] === void 0 && (oe[se] = V[se]);
    return k(j, Le, void 0, void 0, null, oe);
  }, ke.createRef = function() {
    return { current: null };
  }, ke.forwardRef = function(j) {
    return { $$typeof: p, render: j };
  }, ke.isValidElement = X, ke.lazy = function(j) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: j },
      _init: te
    };
  }, ke.memo = function(j, J) {
    return {
      $$typeof: g,
      type: j,
      compare: J === void 0 ? null : J
    };
  }, ke.startTransition = function(j) {
    var J = A.T, ae = {};
    A.T = ae;
    try {
      var se = j(), oe = A.S;
      oe !== null && oe(ae, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(je, ue);
    } catch (Le) {
      ue(Le);
    } finally {
      A.T = J;
    }
  }, ke.unstable_useCacheRefresh = function() {
    return A.H.useCacheRefresh();
  }, ke.use = function(j) {
    return A.H.use(j);
  }, ke.useActionState = function(j, J, ae) {
    return A.H.useActionState(j, J, ae);
  }, ke.useCallback = function(j, J) {
    return A.H.useCallback(j, J);
  }, ke.useContext = function(j) {
    return A.H.useContext(j);
  }, ke.useDebugValue = function() {
  }, ke.useDeferredValue = function(j, J) {
    return A.H.useDeferredValue(j, J);
  }, ke.useEffect = function(j, J, ae) {
    var se = A.H;
    if (typeof ae == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return se.useEffect(j, J);
  }, ke.useId = function() {
    return A.H.useId();
  }, ke.useImperativeHandle = function(j, J, ae) {
    return A.H.useImperativeHandle(j, J, ae);
  }, ke.useInsertionEffect = function(j, J) {
    return A.H.useInsertionEffect(j, J);
  }, ke.useLayoutEffect = function(j, J) {
    return A.H.useLayoutEffect(j, J);
  }, ke.useMemo = function(j, J) {
    return A.H.useMemo(j, J);
  }, ke.useOptimistic = function(j, J) {
    return A.H.useOptimistic(j, J);
  }, ke.useReducer = function(j, J, ae) {
    return A.H.useReducer(j, J, ae);
  }, ke.useRef = function(j) {
    return A.H.useRef(j);
  }, ke.useState = function(j) {
    return A.H.useState(j);
  }, ke.useSyncExternalStore = function(j, J, ae) {
    return A.H.useSyncExternalStore(
      j,
      J,
      ae
    );
  }, ke.useTransition = function() {
    return A.H.useTransition();
  }, ke.version = "19.1.1", ke;
}
var pv;
function Wd() {
  return pv || (pv = 1, Kf.exports = w_()), Kf.exports;
}
var ee = Wd();
const vu = /* @__PURE__ */ d0(ee);
var Wf = { exports: {} }, Us = {}, ed = { exports: {} }, td = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mv;
function A_() {
  return mv || (mv = 1, (function(t) {
    function r(U, te) {
      var ue = U.length;
      U.push(te);
      e: for (; 0 < ue; ) {
        var je = ue - 1 >>> 1, j = U[je];
        if (0 < l(j, te))
          U[je] = te, U[ue] = j, ue = je;
        else break e;
      }
    }
    function a(U) {
      return U.length === 0 ? null : U[0];
    }
    function s(U) {
      if (U.length === 0) return null;
      var te = U[0], ue = U.pop();
      if (ue !== te) {
        U[0] = ue;
        e: for (var je = 0, j = U.length, J = j >>> 1; je < J; ) {
          var ae = 2 * (je + 1) - 1, se = U[ae], oe = ae + 1, Le = U[oe];
          if (0 > l(se, ue))
            oe < j && 0 > l(Le, se) ? (U[je] = Le, U[oe] = ue, je = oe) : (U[je] = se, U[ae] = ue, je = ae);
          else if (oe < j && 0 > l(Le, ue))
            U[je] = Le, U[oe] = ue, je = oe;
          else break e;
        }
      }
      return te;
    }
    function l(U, te) {
      var ue = U.sortIndex - te.sortIndex;
      return ue !== 0 ? ue : U.id - te.id;
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
    function x(U) {
      for (var te = a(g); te !== null; ) {
        if (te.callback === null) s(g);
        else if (te.startTime <= U)
          s(g), te.sortIndex = te.expirationTime, r(h, te);
        else break;
        te = a(g);
      }
    }
    function A(U) {
      if (S = !1, x(U), !d)
        if (a(h) !== null)
          d = !0, M || (M = !0, $());
        else {
          var te = a(g);
          te !== null && Ce(A, te.startTime - U);
        }
    }
    var M = !1, k = -1, q = 5, X = -1;
    function B() {
      return E ? !0 : !(t.unstable_now() - X < q);
    }
    function G() {
      if (E = !1, M) {
        var U = t.unstable_now();
        X = U;
        var te = !0;
        try {
          e: {
            d = !1, S && (S = !1, w(k), k = -1), v = !0;
            var ue = b;
            try {
              t: {
                for (x(U), _ = a(h); _ !== null && !(_.expirationTime > U && B()); ) {
                  var je = _.callback;
                  if (typeof je == "function") {
                    _.callback = null, b = _.priorityLevel;
                    var j = je(
                      _.expirationTime <= U
                    );
                    if (U = t.unstable_now(), typeof j == "function") {
                      _.callback = j, x(U), te = !0;
                      break t;
                    }
                    _ === a(h) && s(h), x(U);
                  } else s(h);
                  _ = a(h);
                }
                if (_ !== null) te = !0;
                else {
                  var J = a(g);
                  J !== null && Ce(
                    A,
                    J.startTime - U
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
          te ? $() : M = !1;
        }
      }
    }
    var $;
    if (typeof D == "function")
      $ = function() {
        D(G);
      };
    else if (typeof MessageChannel < "u") {
      var le = new MessageChannel(), fe = le.port2;
      le.port1.onmessage = G, $ = function() {
        fe.postMessage(null);
      };
    } else
      $ = function() {
        O(G, 0);
      };
    function Ce(U, te) {
      k = O(function() {
        U(t.unstable_now());
      }, te);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, t.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : q = 0 < U ? Math.floor(1e3 / U) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, t.unstable_next = function(U) {
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
        return U();
      } finally {
        b = ue;
      }
    }, t.unstable_requestPaint = function() {
      E = !0;
    }, t.unstable_runWithPriority = function(U, te) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var ue = b;
      b = U;
      try {
        return te();
      } finally {
        b = ue;
      }
    }, t.unstable_scheduleCallback = function(U, te, ue) {
      var je = t.unstable_now();
      switch (typeof ue == "object" && ue !== null ? (ue = ue.delay, ue = typeof ue == "number" && 0 < ue ? je + ue : je) : ue = je, U) {
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
      return j = ue + j, U = {
        id: y++,
        callback: te,
        priorityLevel: U,
        startTime: ue,
        expirationTime: j,
        sortIndex: -1
      }, ue > je ? (U.sortIndex = ue, r(g, U), a(h) === null && U === a(g) && (S ? (w(k), k = -1) : S = !0, Ce(A, ue - je))) : (U.sortIndex = j, r(h, U), d || v || (d = !0, M || (M = !0, $()))), U;
    }, t.unstable_shouldYield = B, t.unstable_wrapCallback = function(U) {
      var te = b;
      return function() {
        var ue = b;
        b = te;
        try {
          return U.apply(this, arguments);
        } finally {
          b = ue;
        }
      };
    };
  })(td)), td;
}
var gv;
function T_() {
  return gv || (gv = 1, ed.exports = A_()), ed.exports;
}
var nd = { exports: {} }, Bt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vv;
function O_() {
  if (vv) return Bt;
  vv = 1;
  var t = Wd();
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
  }, l = Symbol.for("react.portal");
  function u(h, g, y) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
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
var yv;
function h0() {
  if (yv) return nd.exports;
  yv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), nd.exports = O_(), nd.exports;
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
var bv;
function N_() {
  if (bv) return Us;
  bv = 1;
  var t = T_(), r = Wd(), a = h0();
  function s(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        n += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l(e) {
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
    for (var i = e, o = n; ; ) {
      var c = i.return;
      if (c === null) break;
      var m = c.alternate;
      if (m === null) {
        if (o = c.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (c.child === m.child) {
        for (m = c.child; m; ) {
          if (m === i) return p(c), e;
          if (m === o) return p(c), n;
          m = m.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== o.return) i = c, o = m;
      else {
        for (var C = !1, N = c.child; N; ) {
          if (N === i) {
            C = !0, i = c, o = m;
            break;
          }
          if (N === o) {
            C = !0, o = c, i = m;
            break;
          }
          N = N.sibling;
        }
        if (!C) {
          for (N = m.child; N; ) {
            if (N === i) {
              C = !0, i = m, o = c;
              break;
            }
            if (N === o) {
              C = !0, o = m, i = c;
              break;
            }
            N = N.sibling;
          }
          if (!C) throw Error(s(189));
        }
      }
      if (i.alternate !== o) throw Error(s(190));
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
  var y = Object.assign, _ = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), D = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), B = Symbol.for("react.memo_cache_sentinel"), G = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = G && e[G] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var le = Symbol.for("react.client.reference");
  function fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === le ? null : e.displayName || e.name || null;
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
        case q:
          n = e._payload, e = e._init;
          try {
            return fe(e(n));
          } catch {
          }
      }
    return null;
  }
  var Ce = Array.isArray, U = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, je = [], j = -1;
  function J(e) {
    return { current: e };
  }
  function ae(e) {
    0 > j || (e.current = je[j], je[j] = null, j--);
  }
  function se(e, n) {
    j++, je[j] = e.current, e.current = n;
  }
  var oe = J(null), Le = J(null), V = J(null), me = J(null);
  function ge(e, n) {
    switch (se(V, n), se(Le, e), se(oe, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? jg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = jg(n), e = zg(n, e);
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
    ae(oe), se(oe, e);
  }
  function Xe() {
    ae(oe), ae(Le), ae(V);
  }
  function it(e) {
    e.memoizedState !== null && se(me, e);
    var n = oe.current, i = zg(n, e.type);
    n !== i && (se(Le, e), se(oe, i));
  }
  function Re(e) {
    Le.current === e && (ae(oe), ae(Le)), me.current === e && (ae(me), ks._currentValue = ue);
  }
  var P = Object.prototype.hasOwnProperty, re = t.unstable_scheduleCallback, ne = t.unstable_cancelCallback, be = t.unstable_shouldYield, Se = t.unstable_requestPaint, xe = t.unstable_now, Pe = t.unstable_getCurrentPriorityLevel, Fe = t.unstable_ImmediatePriority, he = t.unstable_UserBlockingPriority, de = t.unstable_NormalPriority, Ve = t.unstable_LowPriority, Ae = t.unstable_IdlePriority, Ze = t.log, Ar = t.unstable_setDisableYieldValue, tr = null, mt = null;
  function Zn(e) {
    if (typeof Ze == "function" && Ar(e), mt && typeof mt.setStrictMode == "function")
      try {
        mt.setStrictMode(tr, e);
      } catch {
      }
  }
  var qt = Math.clz32 ? Math.clz32 : oa, bn = Math.log, sa = Math.LN2;
  function oa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (bn(e) / sa | 0) | 0;
  }
  var nr = 256, Gn = 4194304;
  function _n(e) {
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
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var c = 0, m = e.suspendedLanes, C = e.pingedLanes;
    e = e.warmLanes;
    var N = o & 134217727;
    return N !== 0 ? (o = N & ~m, o !== 0 ? c = _n(o) : (C &= N, C !== 0 ? c = _n(C) : i || (i = N & ~e, i !== 0 && (c = _n(i))))) : (N = o & ~m, N !== 0 ? c = _n(N) : C !== 0 ? c = _n(C) : i || (i = o & ~e, i !== 0 && (c = _n(i)))), c === 0 ? 0 : n !== 0 && n !== c && (n & m) === 0 && (m = c & -c, i = n & -n, m >= i || m === 32 && (i & 4194048) !== 0) ? n : c;
  }
  function Xt(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function go(e, n) {
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
  function Ua() {
    var e = nr;
    return nr <<= 1, (nr & 4194048) === 0 && (nr = 256), e;
  }
  function yh() {
    var e = Gn;
    return Gn <<= 1, (Gn & 62914560) === 0 && (Gn = 4194304), e;
  }
  function Iu(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function qi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Z1(e, n, i, o, c, m) {
    var C = e.pendingLanes;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
    var N = e.entanglements, R = e.expirationTimes, H = e.hiddenUpdates;
    for (i = C & ~i; 0 < i; ) {
      var Y = 31 - qt(i), K = 1 << Y;
      N[Y] = 0, R[Y] = -1;
      var F = H[Y];
      if (F !== null)
        for (H[Y] = null, Y = 0; Y < F.length; Y++) {
          var Z = F[Y];
          Z !== null && (Z.lane &= -536870913);
        }
      i &= ~K;
    }
    o !== 0 && bh(e, o, 0), m !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= m & ~(C & ~n));
  }
  function bh(e, n, i) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - qt(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | i & 4194090;
  }
  function _h(e, n) {
    var i = e.entangledLanes |= n;
    for (e = e.entanglements; i; ) {
      var o = 31 - qt(i), c = 1 << o;
      c & n | e[o] & n && (e[o] |= n), i &= ~c;
    }
  }
  function Bu(e) {
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
  function Uu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Sh() {
    var e = te.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ev(e.type));
  }
  function G1(e, n) {
    var i = te.p;
    try {
      return te.p = e, n();
    } finally {
      te.p = i;
    }
  }
  var Tr = Math.random().toString(36).slice(2), Pt = "__reactFiber$" + Tr, $t = "__reactProps$" + Tr, Ha = "__reactContainer$" + Tr, Hu = "__reactEvents$" + Tr, V1 = "__reactListeners$" + Tr, Y1 = "__reactHandles$" + Tr, xh = "__reactResources$" + Tr, Fi = "__reactMarker$" + Tr;
  function qu(e) {
    delete e[Pt], delete e[$t], delete e[Hu], delete e[V1], delete e[Y1];
  }
  function qa(e) {
    var n = e[Pt];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if (n = i[Ha] || i[Pt]) {
        if (i = n.alternate, n.child !== null || i !== null && i.child !== null)
          for (e = Bg(e); e !== null; ) {
            if (i = e[Pt]) return i;
            e = Bg(e);
          }
        return n;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Fa(e) {
    if (e = e[Pt] || e[Ha]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Zi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Za(e) {
    var n = e[xh];
    return n || (n = e[xh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Nt(e) {
    e[Fi] = !0;
  }
  var Eh = /* @__PURE__ */ new Set(), Ch = {};
  function la(e, n) {
    Ga(e, n), Ga(e + "Capture", n);
  }
  function Ga(e, n) {
    for (Ch[e] = n, e = 0; e < n.length; e++)
      Eh.add(n[e]);
  }
  var X1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), wh = {}, Ah = {};
  function $1(e) {
    return P.call(Ah, e) ? !0 : P.call(wh, e) ? !1 : X1.test(e) ? Ah[e] = !0 : (wh[e] = !0, !1);
  }
  function vo(e, n, i) {
    if ($1(n))
      if (i === null) e.removeAttribute(n);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + i);
      }
  }
  function yo(e, n, i) {
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
  function rr(e, n, i, o) {
    if (o === null) e.removeAttribute(i);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(n, i, "" + o);
    }
  }
  var Fu, Th;
  function Va(e) {
    if (Fu === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        Fu = n && n[1] || "", Th = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Fu + e + Th;
  }
  var Zu = !1;
  function Gu(e, n) {
    if (!e || Zu) return "";
    Zu = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
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
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      c && c.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var m = o.DetermineComponentFrameRoot(), C = m[0], N = m[1];
      if (C && N) {
        var R = C.split(`
`), H = N.split(`
`);
        for (c = o = 0; o < R.length && !R[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; c < H.length && !H[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (o === R.length || c === H.length)
          for (o = R.length - 1, c = H.length - 1; 1 <= o && 0 <= c && R[o] !== H[c]; )
            c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (R[o] !== H[c]) {
            if (o !== 1 || c !== 1)
              do
                if (o--, c--, 0 > c || R[o] !== H[c]) {
                  var Y = `
` + R[o].replace(" at new ", " at ");
                  return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), Y;
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      Zu = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? Va(i) : "";
  }
  function Q1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Va(e.type);
      case 16:
        return Va("Lazy");
      case 13:
        return Va("Suspense");
      case 19:
        return Va("SuspenseList");
      case 0:
      case 15:
        return Gu(e.type, !1);
      case 11:
        return Gu(e.type.render, !1);
      case 1:
        return Gu(e.type, !0);
      case 31:
        return Va("Activity");
      default:
        return "";
    }
  }
  function Oh(e) {
    try {
      var n = "";
      do
        n += Q1(e), e = e.return;
      while (e);
      return n;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  function Sn(e) {
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
  function Nh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function J1(e) {
    var n = Nh(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), o = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var c = i.get, m = i.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(C) {
          o = "" + C, m.call(this, C);
        }
      }), Object.defineProperty(e, n, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(C) {
          o = "" + C;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function bo(e) {
    e._valueTracker || (e._valueTracker = J1(e));
  }
  function Dh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(), o = "";
    return e && (o = Nh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (n.setValue(e), !0) : !1;
  }
  function _o(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var K1 = /[\n"\\]/g;
  function xn(e) {
    return e.replace(
      K1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Vu(e, n, i, o, c, m, C, N) {
    e.name = "", C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" ? e.type = C : e.removeAttribute("type"), n != null ? C === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + Sn(n)) : e.value !== "" + Sn(n) && (e.value = "" + Sn(n)) : C !== "submit" && C !== "reset" || e.removeAttribute("value"), n != null ? Yu(e, C, Sn(n)) : i != null ? Yu(e, C, Sn(i)) : o != null && e.removeAttribute("value"), c == null && m != null && (e.defaultChecked = !!m), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" ? e.name = "" + Sn(N) : e.removeAttribute("name");
  }
  function Mh(e, n, i, o, c, m, C, N) {
    if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.type = m), n != null || i != null) {
      if (!(m !== "submit" && m !== "reset" || n != null))
        return;
      i = i != null ? "" + Sn(i) : "", n = n != null ? "" + Sn(n) : i, N || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? c, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = N ? e.checked : !!o, e.defaultChecked = !!o, C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" && (e.name = C);
  }
  function Yu(e, n, i) {
    n === "number" && _o(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i);
  }
  function Ya(e, n, i, o) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < i.length; c++)
        n["$" + i[c]] = !0;
      for (i = 0; i < e.length; i++)
        c = n.hasOwnProperty("$" + e[i].value), e[i].selected !== c && (e[i].selected = c), c && o && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + Sn(i), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === i) {
          e[c].selected = !0, o && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function kh(e, n, i) {
    if (n != null && (n = "" + Sn(n), n !== e.value && (e.value = n), i == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = i != null ? "" + Sn(i) : "";
  }
  function Rh(e, n, i, o) {
    if (n == null) {
      if (o != null) {
        if (i != null) throw Error(s(92));
        if (Ce(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        i = o;
      }
      i == null && (i = ""), n = i;
    }
    i = Sn(n), e.defaultValue = i, o = e.textContent, o === i && o !== "" && o !== null && (e.value = o);
  }
  function Xa(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var W1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function jh(e, n, i) {
    var o = n.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, i) : typeof i != "number" || i === 0 || W1.has(n) ? n === "float" ? e.cssFloat = i : e[n] = ("" + i).trim() : e[n] = i + "px";
  }
  function zh(e, n, i) {
    if (n != null && typeof n != "object")
      throw Error(s(62));
    if (e = e.style, i != null) {
      for (var o in i)
        !i.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var c in n)
        o = n[c], n.hasOwnProperty(c) && i[c] !== o && jh(e, c, o);
    } else
      for (var m in n)
        n.hasOwnProperty(m) && jh(e, m, n[m]);
  }
  function Xu(e) {
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
  var eb = /* @__PURE__ */ new Map([
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
  ]), tb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function So(e) {
    return tb.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var $u = null;
  function Qu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var $a = null, Qa = null;
  function Lh(e) {
    var n = Fa(e);
    if (n && (e = n.stateNode)) {
      var i = e[$t] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Vu(
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
              'input[name="' + xn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < i.length; n++) {
              var o = i[n];
              if (o !== e && o.form === e.form) {
                var c = o[$t] || null;
                if (!c) throw Error(s(90));
                Vu(
                  o,
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
              o = i[n], o.form === e.form && Dh(o);
          }
          break e;
        case "textarea":
          kh(e, i.value, i.defaultValue);
          break e;
        case "select":
          n = i.value, n != null && Ya(e, !!i.multiple, n, !1);
      }
    }
  }
  var Ju = !1;
  function Ph(e, n, i) {
    if (Ju) return e(n, i);
    Ju = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (Ju = !1, ($a !== null || Qa !== null) && (sl(), $a && (n = $a, e = Qa, Qa = $a = null, Lh(n), e)))
        for (n = 0; n < e.length; n++) Lh(e[n]);
    }
  }
  function Gi(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = i[$t] || null;
    if (o === null) return null;
    i = o[n];
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
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
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
  var ar = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ku = !1;
  if (ar)
    try {
      var Vi = {};
      Object.defineProperty(Vi, "passive", {
        get: function() {
          Ku = !0;
        }
      }), window.addEventListener("test", Vi, Vi), window.removeEventListener("test", Vi, Vi);
    } catch {
      Ku = !1;
    }
  var Or = null, Wu = null, xo = null;
  function Ih() {
    if (xo) return xo;
    var e, n = Wu, i = n.length, o, c = "value" in Or ? Or.value : Or.textContent, m = c.length;
    for (e = 0; e < i && n[e] === c[e]; e++) ;
    var C = i - e;
    for (o = 1; o <= C && n[i - o] === c[m - o]; o++) ;
    return xo = c.slice(e, 1 < o ? 1 - o : void 0);
  }
  function Eo(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Co() {
    return !0;
  }
  function Bh() {
    return !1;
  }
  function Qt(e) {
    function n(i, o, c, m, C) {
      this._reactName = i, this._targetInst = c, this.type = o, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var N in e)
        e.hasOwnProperty(N) && (i = e[N], this[N] = i ? i(m) : m[N]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? Co : Bh, this.isPropagationStopped = Bh, this;
    }
    return y(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Co);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Co);
      },
      persist: function() {
      },
      isPersistent: Co
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
  }, wo = Qt(ua), Yi = y({}, ua, { view: 0, detail: 0 }), nb = Qt(Yi), ec, tc, Xi, Ao = y({}, Yi, {
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
    getModifierState: rc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Xi && (Xi && e.type === "mousemove" ? (ec = e.screenX - Xi.screenX, tc = e.screenY - Xi.screenY) : tc = ec = 0, Xi = e), ec);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : tc;
    }
  }), Uh = Qt(Ao), rb = y({}, Ao, { dataTransfer: 0 }), ab = Qt(rb), ib = y({}, Yi, { relatedTarget: 0 }), nc = Qt(ib), sb = y({}, ua, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ob = Qt(sb), lb = y({}, ua, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), ub = Qt(lb), cb = y({}, ua, { data: 0 }), Hh = Qt(cb), fb = {
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
  }, db = {
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
  }, hb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function pb(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = hb[e]) ? !!n[e] : !1;
  }
  function rc() {
    return pb;
  }
  var mb = y({}, Yi, {
    key: function(e) {
      if (e.key) {
        var n = fb[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = Eo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? db[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: rc,
    charCode: function(e) {
      return e.type === "keypress" ? Eo(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Eo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), gb = Qt(mb), vb = y({}, Ao, {
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
  }), qh = Qt(vb), yb = y({}, Yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rc
  }), bb = Qt(yb), _b = y({}, ua, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Sb = Qt(_b), xb = y({}, Ao, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Eb = Qt(xb), Cb = y({}, ua, {
    newState: 0,
    oldState: 0
  }), wb = Qt(Cb), Ab = [9, 13, 27, 32], ac = ar && "CompositionEvent" in window, $i = null;
  ar && "documentMode" in document && ($i = document.documentMode);
  var Tb = ar && "TextEvent" in window && !$i, Fh = ar && (!ac || $i && 8 < $i && 11 >= $i), Zh = " ", Gh = !1;
  function Vh(e, n) {
    switch (e) {
      case "keyup":
        return Ab.indexOf(n.keyCode) !== -1;
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
  function Yh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ja = !1;
  function Ob(e, n) {
    switch (e) {
      case "compositionend":
        return Yh(n);
      case "keypress":
        return n.which !== 32 ? null : (Gh = !0, Zh);
      case "textInput":
        return e = n.data, e === Zh && Gh ? null : e;
      default:
        return null;
    }
  }
  function Nb(e, n) {
    if (Ja)
      return e === "compositionend" || !ac && Vh(e, n) ? (e = Ih(), xo = Wu = Or = null, Ja = !1, e) : null;
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
        return Fh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Db = {
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
  function Xh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Db[e.type] : n === "textarea";
  }
  function $h(e, n, i, o) {
    $a ? Qa ? Qa.push(o) : Qa = [o] : $a = o, n = dl(n, "onChange"), 0 < n.length && (i = new wo(
      "onChange",
      "change",
      null,
      i,
      o
    ), e.push({ event: i, listeners: n }));
  }
  var Qi = null, Ji = null;
  function Mb(e) {
    Ng(e, 0);
  }
  function To(e) {
    var n = Zi(e);
    if (Dh(n)) return e;
  }
  function Qh(e, n) {
    if (e === "change") return n;
  }
  var Jh = !1;
  if (ar) {
    var ic;
    if (ar) {
      var sc = "oninput" in document;
      if (!sc) {
        var Kh = document.createElement("div");
        Kh.setAttribute("oninput", "return;"), sc = typeof Kh.oninput == "function";
      }
      ic = sc;
    } else ic = !1;
    Jh = ic && (!document.documentMode || 9 < document.documentMode);
  }
  function Wh() {
    Qi && (Qi.detachEvent("onpropertychange", ep), Ji = Qi = null);
  }
  function ep(e) {
    if (e.propertyName === "value" && To(Ji)) {
      var n = [];
      $h(
        n,
        Ji,
        e,
        Qu(e)
      ), Ph(Mb, n);
    }
  }
  function kb(e, n, i) {
    e === "focusin" ? (Wh(), Qi = n, Ji = i, Qi.attachEvent("onpropertychange", ep)) : e === "focusout" && Wh();
  }
  function Rb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return To(Ji);
  }
  function jb(e, n) {
    if (e === "click") return To(n);
  }
  function zb(e, n) {
    if (e === "input" || e === "change")
      return To(n);
  }
  function Lb(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var sn = typeof Object.is == "function" ? Object.is : Lb;
  function Ki(e, n) {
    if (sn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var i = Object.keys(e), o = Object.keys(n);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var c = i[o];
      if (!P.call(n, c) || !sn(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  function tp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function np(e, n) {
    var i = tp(e);
    e = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (o = e + i.textContent.length, e <= n && o >= n)
          return { node: i, offset: n - e };
        e = o;
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
      i = tp(i);
    }
  }
  function rp(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? rp(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function ap(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = _o(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = _o(e.document);
    }
    return n;
  }
  function oc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Pb = ar && "documentMode" in document && 11 >= document.documentMode, Ka = null, lc = null, Wi = null, uc = !1;
  function ip(e, n, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    uc || Ka == null || Ka !== _o(o) || (o = Ka, "selectionStart" in o && oc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Wi && Ki(Wi, o) || (Wi = o, o = dl(lc, "onSelect"), 0 < o.length && (n = new wo(
      "onSelect",
      "select",
      null,
      n,
      i
    ), e.push({ event: n, listeners: o }), n.target = Ka)));
  }
  function ca(e, n) {
    var i = {};
    return i[e.toLowerCase()] = n.toLowerCase(), i["Webkit" + e] = "webkit" + n, i["Moz" + e] = "moz" + n, i;
  }
  var Wa = {
    animationend: ca("Animation", "AnimationEnd"),
    animationiteration: ca("Animation", "AnimationIteration"),
    animationstart: ca("Animation", "AnimationStart"),
    transitionrun: ca("Transition", "TransitionRun"),
    transitionstart: ca("Transition", "TransitionStart"),
    transitioncancel: ca("Transition", "TransitionCancel"),
    transitionend: ca("Transition", "TransitionEnd")
  }, cc = {}, sp = {};
  ar && (sp = document.createElement("div").style, "AnimationEvent" in window || (delete Wa.animationend.animation, delete Wa.animationiteration.animation, delete Wa.animationstart.animation), "TransitionEvent" in window || delete Wa.transitionend.transition);
  function fa(e) {
    if (cc[e]) return cc[e];
    if (!Wa[e]) return e;
    var n = Wa[e], i;
    for (i in n)
      if (n.hasOwnProperty(i) && i in sp)
        return cc[e] = n[i];
    return e;
  }
  var op = fa("animationend"), lp = fa("animationiteration"), up = fa("animationstart"), Ib = fa("transitionrun"), Bb = fa("transitionstart"), Ub = fa("transitioncancel"), cp = fa("transitionend"), fp = /* @__PURE__ */ new Map(), fc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  fc.push("scrollEnd");
  function zn(e, n) {
    fp.set(e, n), la(n, [e]);
  }
  var dp = /* @__PURE__ */ new WeakMap();
  function En(e, n) {
    if (typeof e == "object" && e !== null) {
      var i = dp.get(e);
      return i !== void 0 ? i : (n = {
        value: e,
        source: n,
        stack: Oh(n)
      }, dp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Oh(n)
    };
  }
  var Cn = [], ei = 0, dc = 0;
  function Oo() {
    for (var e = ei, n = dc = ei = 0; n < e; ) {
      var i = Cn[n];
      Cn[n++] = null;
      var o = Cn[n];
      Cn[n++] = null;
      var c = Cn[n];
      Cn[n++] = null;
      var m = Cn[n];
      if (Cn[n++] = null, o !== null && c !== null) {
        var C = o.pending;
        C === null ? c.next = c : (c.next = C.next, C.next = c), o.pending = c;
      }
      m !== 0 && hp(i, c, m);
    }
  }
  function No(e, n, i, o) {
    Cn[ei++] = e, Cn[ei++] = n, Cn[ei++] = i, Cn[ei++] = o, dc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function hc(e, n, i, o) {
    return No(e, n, i, o), Do(e);
  }
  function ti(e, n) {
    return No(e, null, null, n), Do(e);
  }
  function hp(e, n, i) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i);
    for (var c = !1, m = e.return; m !== null; )
      m.childLanes |= i, o = m.alternate, o !== null && (o.childLanes |= i), m.tag === 22 && (e = m.stateNode, e === null || e._visibility & 1 || (c = !0)), e = m, m = m.return;
    return e.tag === 3 ? (m = e.stateNode, c && n !== null && (c = 31 - qt(i), e = m.hiddenUpdates, o = e[c], o === null ? e[c] = [n] : o.push(n), n.lane = i | 536870912), m) : null;
  }
  function Do(e) {
    if (50 < Cs)
      throw Cs = 0, _f = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ni = {};
  function Hb(e, n, i, o) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function on(e, n, i, o) {
    return new Hb(e, n, i, o);
  }
  function pc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ir(e, n) {
    var i = e.alternate;
    return i === null ? (i = on(
      e.tag,
      n,
      e.key,
      e.mode
    ), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = n, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, n = e.dependencies, i.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i;
  }
  function pp(e, n) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, n = i.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Mo(e, n, i, o, c, m) {
    var C = 0;
    if (o = e, typeof e == "function") pc(e) && (C = 1);
    else if (typeof e == "string")
      C = F2(
        e,
        i,
        oe.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case X:
          return e = on(31, i, n, c), e.elementType = X, e.lanes = m, e;
        case d:
          return da(i.children, c, m, n);
        case S:
          C = 8, c |= 24;
          break;
        case E:
          return e = on(12, i, n, c | 2), e.elementType = E, e.lanes = m, e;
        case A:
          return e = on(13, i, n, c), e.elementType = A, e.lanes = m, e;
        case M:
          return e = on(19, i, n, c), e.elementType = M, e.lanes = m, e;
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
              case q:
                C = 16, o = null;
                break e;
            }
          C = 29, i = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = on(C, i, n, c), n.elementType = e, n.type = o, n.lanes = m, n;
  }
  function da(e, n, i, o) {
    return e = on(7, e, o, n), e.lanes = i, e;
  }
  function mc(e, n, i) {
    return e = on(6, e, null, n), e.lanes = i, e;
  }
  function gc(e, n, i) {
    return n = on(
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
  var ri = [], ai = 0, ko = null, Ro = 0, wn = [], An = 0, ha = null, sr = 1, or = "";
  function pa(e, n) {
    ri[ai++] = Ro, ri[ai++] = ko, ko = e, Ro = n;
  }
  function mp(e, n, i) {
    wn[An++] = sr, wn[An++] = or, wn[An++] = ha, ha = e;
    var o = sr;
    e = or;
    var c = 32 - qt(o) - 1;
    o &= ~(1 << c), i += 1;
    var m = 32 - qt(n) + c;
    if (30 < m) {
      var C = c - c % 5;
      m = (o & (1 << C) - 1).toString(32), o >>= C, c -= C, sr = 1 << 32 - qt(n) + c | i << c | o, or = m + e;
    } else
      sr = 1 << m | i << c | o, or = e;
  }
  function vc(e) {
    e.return !== null && (pa(e, 1), mp(e, 1, 0));
  }
  function yc(e) {
    for (; e === ko; )
      ko = ri[--ai], ri[ai] = null, Ro = ri[--ai], ri[ai] = null;
    for (; e === ha; )
      ha = wn[--An], wn[An] = null, or = wn[--An], wn[An] = null, sr = wn[--An], wn[An] = null;
  }
  var Zt = null, dt = null, $e = !1, ma = null, Vn = !1, bc = Error(s(519));
  function ga(e) {
    var n = Error(s(418, ""));
    throw ns(En(n, e)), bc;
  }
  function gp(e) {
    var n = e.stateNode, i = e.type, o = e.memoizedProps;
    switch (n[Pt] = e, n[$t] = o, i) {
      case "dialog":
        Ue("cancel", n), Ue("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ue("load", n);
        break;
      case "video":
      case "audio":
        for (i = 0; i < As.length; i++)
          Ue(As[i], n);
        break;
      case "source":
        Ue("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ue("error", n), Ue("load", n);
        break;
      case "details":
        Ue("toggle", n);
        break;
      case "input":
        Ue("invalid", n), Mh(
          n,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), bo(n);
        break;
      case "select":
        Ue("invalid", n);
        break;
      case "textarea":
        Ue("invalid", n), Rh(n, o.value, o.defaultValue, o.children), bo(n);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || n.textContent === "" + i || o.suppressHydrationWarning === !0 || Rg(n.textContent, i) ? (o.popover != null && (Ue("beforetoggle", n), Ue("toggle", n)), o.onScroll != null && Ue("scroll", n), o.onScrollEnd != null && Ue("scrollend", n), o.onClick != null && (n.onclick = hl), n = !0) : n = !1, n || ga(e);
  }
  function vp(e) {
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
  function es(e) {
    if (e !== Zt) return !1;
    if (!$e) return vp(e), $e = !0, !1;
    var n = e.tag, i;
    if ((i = n !== 3 && n !== 27) && ((i = n === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || Lf(e.type, e.memoizedProps)), i = !i), i && dt && ga(e), vp(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (i = e.data, i === "/$") {
              if (n === 0) {
                dt = Pn(e.nextSibling);
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
      n === 27 ? (n = dt, Zr(e.type) ? (e = Uf, Uf = null, dt = e) : dt = n) : dt = Zt ? Pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ts() {
    dt = Zt = null, $e = !1;
  }
  function yp() {
    var e = ma;
    return e !== null && (Wt === null ? Wt = e : Wt.push.apply(
      Wt,
      e
    ), ma = null), e;
  }
  function ns(e) {
    ma === null ? ma = [e] : ma.push(e);
  }
  var _c = J(null), va = null, lr = null;
  function Nr(e, n, i) {
    se(_c, n._currentValue), n._currentValue = i;
  }
  function ur(e) {
    e._currentValue = _c.current, ae(_c);
  }
  function Sc(e, n, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === i) break;
      e = e.return;
    }
  }
  function xc(e, n, i, o) {
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
              m.lanes |= i, N = m.alternate, N !== null && (N.lanes |= i), Sc(
                m.return,
                i,
                e
              ), o || (C = null);
              break e;
            }
          m = N.next;
        }
      } else if (c.tag === 18) {
        if (C = c.return, C === null) throw Error(s(341));
        C.lanes |= i, m = C.alternate, m !== null && (m.lanes |= i), Sc(C, i, e), C = null;
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
  function rs(e, n, i, o) {
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
        C.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(ks) : e = [ks]);
      }
      c = c.return;
    }
    e !== null && xc(
      n,
      e,
      i,
      o
    ), n.flags |= 262144;
  }
  function jo(e) {
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
    va = e, lr = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function It(e) {
    return bp(va, e);
  }
  function zo(e, n) {
    return va === null && ya(e), bp(e, n);
  }
  function bp(e, n) {
    var i = n._currentValue;
    if (n = { context: n, memoizedValue: i, next: null }, lr === null) {
      if (e === null) throw Error(s(308));
      lr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else lr = lr.next = n;
    return i;
  }
  var qb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(i, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(i) {
        return i();
      });
    };
  }, Fb = t.unstable_scheduleCallback, Zb = t.unstable_NormalPriority, Ct = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ec() {
    return {
      controller: new qb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function as(e) {
    e.refCount--, e.refCount === 0 && Fb(Zb, function() {
      e.controller.abort();
    });
  }
  var is = null, Cc = 0, ii = 0, si = null;
  function Gb(e, n) {
    if (is === null) {
      var i = is = [];
      Cc = 0, ii = Tf(), si = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return Cc++, n.then(_p, _p), n;
  }
  function _p() {
    if (--Cc === 0 && is !== null) {
      si !== null && (si.status = "fulfilled");
      var e = is;
      is = null, ii = 0, si = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Vb(e, n) {
    var i = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        i.push(c);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = n;
        for (var c = 0; c < i.length; c++) (0, i[c])(n);
      },
      function(c) {
        for (o.status = "rejected", o.reason = c, c = 0; c < i.length; c++)
          (0, i[c])(void 0);
      }
    ), o;
  }
  var Sp = U.S;
  U.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Gb(e, n), Sp !== null && Sp(e, n);
  };
  var ba = J(null);
  function wc() {
    var e = ba.current;
    return e !== null ? e : rt.pooledCache;
  }
  function Lo(e, n) {
    n === null ? se(ba, ba.current) : se(ba, n.pool);
  }
  function xp() {
    var e = wc();
    return e === null ? null : { parent: Ct._currentValue, pool: e };
  }
  var ss = Error(s(460)), Ep = Error(s(474)), Po = Error(s(542)), Ac = { then: function() {
  } };
  function Cp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Io() {
  }
  function wp(e, n, i) {
    switch (i = e[i], i === void 0 ? e.push(n) : i !== n && (n.then(Io, Io), n = i), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, Tp(e), e;
      default:
        if (typeof n.status == "string") n.then(Io, Io);
        else {
          if (e = rt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = n, e.status = "pending", e.then(
            function(o) {
              if (n.status === "pending") {
                var c = n;
                c.status = "fulfilled", c.value = o;
              }
            },
            function(o) {
              if (n.status === "pending") {
                var c = n;
                c.status = "rejected", c.reason = o;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, Tp(e), e;
        }
        throw os = n, ss;
    }
  }
  var os = null;
  function Ap() {
    if (os === null) throw Error(s(459));
    var e = os;
    return os = null, e;
  }
  function Tp(e) {
    if (e === ss || e === Po)
      throw Error(s(483));
  }
  var Dr = !1;
  function Tc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Oc(e, n) {
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
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Qe & 2) !== 0) {
      var c = o.pending;
      return c === null ? n.next = n : (n.next = c.next, c.next = n), o.pending = n, n = Do(e), hp(e, null, i), n;
    }
    return No(e, o, n, i), Do(e);
  }
  function ls(e, n, i) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, _h(e, i);
    }
  }
  function Nc(e, n) {
    var i = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
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
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: m,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = n : e.next = n, i.lastBaseUpdate = n;
  }
  var Dc = !1;
  function us() {
    if (Dc) {
      var e = si;
      if (e !== null) throw e;
    }
  }
  function cs(e, n, i, o) {
    Dc = !1;
    var c = e.updateQueue;
    Dr = !1;
    var m = c.firstBaseUpdate, C = c.lastBaseUpdate, N = c.shared.pending;
    if (N !== null) {
      c.shared.pending = null;
      var R = N, H = R.next;
      R.next = null, C === null ? m = H : C.next = H, C = R;
      var Y = e.alternate;
      Y !== null && (Y = Y.updateQueue, N = Y.lastBaseUpdate, N !== C && (N === null ? Y.firstBaseUpdate = H : N.next = H, Y.lastBaseUpdate = R));
    }
    if (m !== null) {
      var K = c.baseState;
      C = 0, Y = H = R = null, N = m;
      do {
        var F = N.lane & -536870913, Z = F !== N.lane;
        if (Z ? (Ge & F) === F : (o & F) === F) {
          F !== 0 && F === ii && (Dc = !0), Y !== null && (Y = Y.next = {
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: null,
            next: null
          });
          e: {
            var Te = e, _e = N;
            F = n;
            var et = i;
            switch (_e.tag) {
              case 1:
                if (Te = _e.payload, typeof Te == "function") {
                  K = Te.call(et, K, F);
                  break e;
                }
                K = Te;
                break e;
              case 3:
                Te.flags = Te.flags & -65537 | 128;
              case 0:
                if (Te = _e.payload, F = typeof Te == "function" ? Te.call(et, K, F) : Te, F == null) break e;
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
          }, Y === null ? (H = Y = Z, R = K) : Y = Y.next = Z, C |= F;
        if (N = N.next, N === null) {
          if (N = c.shared.pending, N === null)
            break;
          Z = N, N = Z.next, Z.next = null, c.lastBaseUpdate = Z, c.shared.pending = null;
        }
      } while (!0);
      Y === null && (R = K), c.baseState = R, c.firstBaseUpdate = H, c.lastBaseUpdate = Y, m === null && (c.shared.lanes = 0), Ur |= C, e.lanes = C, e.memoizedState = K;
    }
  }
  function Op(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function Np(e, n) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        Op(i[e], n);
  }
  var oi = J(null), Bo = J(0);
  function Dp(e, n) {
    e = gr, se(Bo, e), se(oi, n), gr = e | n.baseLanes;
  }
  function Mc() {
    se(Bo, gr), se(oi, oi.current);
  }
  function kc() {
    gr = Bo.current, ae(oi), ae(Bo);
  }
  var Rr = 0, ze = null, Ke = null, bt = null, Uo = !1, li = !1, _a = !1, Ho = 0, fs = 0, ui = null, Yb = 0;
  function gt() {
    throw Error(s(321));
  }
  function Rc(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!sn(e[i], n[i])) return !1;
    return !0;
  }
  function jc(e, n, i, o, c, m) {
    return Rr = m, ze = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, U.H = e === null || e.memoizedState === null ? hm : pm, _a = !1, m = i(o, c), _a = !1, li && (m = kp(
      n,
      i,
      o,
      c
    )), Mp(e), m;
  }
  function Mp(e) {
    U.H = Yo;
    var n = Ke !== null && Ke.next !== null;
    if (Rr = 0, bt = Ke = ze = null, Uo = !1, fs = 0, ui = null, n) throw Error(s(300));
    e === null || Dt || (e = e.dependencies, e !== null && jo(e) && (Dt = !0));
  }
  function kp(e, n, i, o) {
    ze = e;
    var c = 0;
    do {
      if (li && (ui = null), fs = 0, li = !1, 25 <= c) throw Error(s(301));
      if (c += 1, bt = Ke = null, e.updateQueue != null) {
        var m = e.updateQueue;
        m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
      }
      U.H = e2, m = n(i, o);
    } while (li);
    return m;
  }
  function Xb() {
    var e = U.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? ds(n) : n, e = e.useState()[0], (Ke !== null ? Ke.memoizedState : null) !== e && (ze.flags |= 1024), n;
  }
  function zc() {
    var e = Ho !== 0;
    return Ho = 0, e;
  }
  function Lc(e, n, i) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~i;
  }
  function Pc(e) {
    if (Uo) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Uo = !1;
    }
    Rr = 0, bt = Ke = ze = null, li = !1, fs = Ho = 0, ui = null;
  }
  function Jt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return bt === null ? ze.memoizedState = bt = e : bt = bt.next = e, bt;
  }
  function _t() {
    if (Ke === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var n = bt === null ? ze.memoizedState : bt.next;
    if (n !== null)
      bt = n, Ke = e;
    else {
      if (e === null)
        throw ze.alternate === null ? Error(s(467)) : Error(s(310));
      Ke = e, e = {
        memoizedState: Ke.memoizedState,
        baseState: Ke.baseState,
        baseQueue: Ke.baseQueue,
        queue: Ke.queue,
        next: null
      }, bt === null ? ze.memoizedState = bt = e : bt = bt.next = e;
    }
    return bt;
  }
  function Ic() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ds(e) {
    var n = fs;
    return fs += 1, ui === null && (ui = []), e = wp(ui, e, n), n = ze, (bt === null ? n.memoizedState : bt.next) === null && (n = n.alternate, U.H = n === null || n.memoizedState === null ? hm : pm), e;
  }
  function qo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ds(e);
      if (e.$$typeof === D) return It(e);
    }
    throw Error(s(438, String(e)));
  }
  function Bc(e) {
    var n = null, i = ze.updateQueue;
    if (i !== null && (n = i.memoCache), n == null) {
      var o = ze.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), i === null && (i = Ic(), ze.updateQueue = i), i.memoCache = n, i = n.data[n.index], i === void 0)
      for (i = n.data[n.index] = Array(e), o = 0; o < e; o++)
        i[o] = B;
    return n.index++, i;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Fo(e) {
    var n = _t();
    return Uc(n, Ke, e);
  }
  function Uc(e, n, i) {
    var o = e.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = i;
    var c = e.baseQueue, m = o.pending;
    if (m !== null) {
      if (c !== null) {
        var C = c.next;
        c.next = m.next, m.next = C;
      }
      n.baseQueue = c = m, o.pending = null;
    }
    if (m = e.baseState, c === null) e.memoizedState = m;
    else {
      n = c.next;
      var N = C = null, R = null, H = n, Y = !1;
      do {
        var K = H.lane & -536870913;
        if (K !== H.lane ? (Ge & K) === K : (Rr & K) === K) {
          var F = H.revertLane;
          if (F === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), K === ii && (Y = !0);
          else if ((Rr & F) === F) {
            H = H.next, F === ii && (Y = !0);
            continue;
          } else
            K = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, R === null ? (N = R = K, C = m) : R = R.next = K, ze.lanes |= F, Ur |= F;
          K = H.action, _a && i(m, K), m = H.hasEagerState ? H.eagerState : i(m, K);
        } else
          F = {
            lane: K,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, R === null ? (N = R = F, C = m) : R = R.next = F, ze.lanes |= K, Ur |= K;
        H = H.next;
      } while (H !== null && H !== n);
      if (R === null ? C = m : R.next = N, !sn(m, e.memoizedState) && (Dt = !0, Y && (i = si, i !== null)))
        throw i;
      e.memoizedState = m, e.baseState = C, e.baseQueue = R, o.lastRenderedState = m;
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Hc(e) {
    var n = _t(), i = n.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch, c = i.pending, m = n.memoizedState;
    if (c !== null) {
      i.pending = null;
      var C = c = c.next;
      do
        m = e(m, C.action), C = C.next;
      while (C !== c);
      sn(m, n.memoizedState) || (Dt = !0), n.memoizedState = m, n.baseQueue === null && (n.baseState = m), i.lastRenderedState = m;
    }
    return [m, o];
  }
  function Rp(e, n, i) {
    var o = ze, c = _t(), m = $e;
    if (m) {
      if (i === void 0) throw Error(s(407));
      i = i();
    } else i = n();
    var C = !sn(
      (Ke || c).memoizedState,
      i
    );
    C && (c.memoizedState = i, Dt = !0), c = c.queue;
    var N = Lp.bind(null, o, c, e);
    if (hs(2048, 8, N, [e]), c.getSnapshot !== n || C || bt !== null && bt.memoizedState.tag & 1) {
      if (o.flags |= 2048, ci(
        9,
        Zo(),
        zp.bind(
          null,
          o,
          c,
          i,
          n
        ),
        null
      ), rt === null) throw Error(s(349));
      m || (Rr & 124) !== 0 || jp(o, n, i);
    }
    return i;
  }
  function jp(e, n, i) {
    e.flags |= 16384, e = { getSnapshot: n, value: i }, n = ze.updateQueue, n === null ? (n = Ic(), ze.updateQueue = n, n.stores = [e]) : (i = n.stores, i === null ? n.stores = [e] : i.push(e));
  }
  function zp(e, n, i, o) {
    n.value = i, n.getSnapshot = o, Pp(n) && Ip(e);
  }
  function Lp(e, n, i) {
    return i(function() {
      Pp(n) && Ip(e);
    });
  }
  function Pp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !sn(e, i);
    } catch {
      return !0;
    }
  }
  function Ip(e) {
    var n = ti(e, 2);
    n !== null && dn(n, e, 2);
  }
  function qc(e) {
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
  function Bp(e, n, i, o) {
    return e.baseState = i, Uc(
      e,
      Ke,
      typeof o == "function" ? o : cr
    );
  }
  function $b(e, n, i, o, c) {
    if (Vo(e)) throw Error(s(485));
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
      U.T !== null ? i(!0) : m.isTransition = !1, o(m), i = n.pending, i === null ? (m.next = n.pending = m, Up(n, m)) : (m.next = i.next, n.pending = i.next = m);
    }
  }
  function Up(e, n) {
    var i = n.action, o = n.payload, c = e.state;
    if (n.isTransition) {
      var m = U.T, C = {};
      U.T = C;
      try {
        var N = i(c, o), R = U.S;
        R !== null && R(C, N), Hp(e, n, N);
      } catch (H) {
        Fc(e, n, H);
      } finally {
        U.T = m;
      }
    } else
      try {
        m = i(c, o), Hp(e, n, m);
      } catch (H) {
        Fc(e, n, H);
      }
  }
  function Hp(e, n, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(o) {
        qp(e, n, o);
      },
      function(o) {
        return Fc(e, n, o);
      }
    ) : qp(e, n, i);
  }
  function qp(e, n, i) {
    n.status = "fulfilled", n.value = i, Fp(n), e.state = i, n = e.pending, n !== null && (i = n.next, i === n ? e.pending = null : (i = i.next, n.next = i, Up(e, i)));
  }
  function Fc(e, n, i) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = i, Fp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function Fp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Zp(e, n) {
    return n;
  }
  function Gp(e, n) {
    if ($e) {
      var i = rt.formState;
      if (i !== null) {
        e: {
          var o = ze;
          if ($e) {
            if (dt) {
              t: {
                for (var c = dt, m = Vn; c.nodeType !== 8; ) {
                  if (!m) {
                    c = null;
                    break t;
                  }
                  if (c = Pn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                m = c.data, c = m === "F!" || m === "F" ? c : null;
              }
              if (c) {
                dt = Pn(
                  c.nextSibling
                ), o = c.data === "F!";
                break e;
              }
            }
            ga(o);
          }
          o = !1;
        }
        o && (n = i[0]);
      }
    }
    return i = Jt(), i.memoizedState = i.baseState = n, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zp,
      lastRenderedState: n
    }, i.queue = o, i = cm.bind(
      null,
      ze,
      o
    ), o.dispatch = i, o = qc(!1), m = Xc.bind(
      null,
      ze,
      !1,
      o.queue
    ), o = Jt(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = c, i = $b.bind(
      null,
      ze,
      c,
      m,
      i
    ), c.dispatch = i, o.memoizedState = e, [n, i, !1];
  }
  function Vp(e) {
    var n = _t();
    return Yp(n, Ke, e);
  }
  function Yp(e, n, i) {
    if (n = Uc(
      e,
      n,
      Zp
    )[0], e = Fo(cr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = ds(n);
      } catch (C) {
        throw C === ss ? Po : C;
      }
    else o = n;
    n = _t();
    var c = n.queue, m = c.dispatch;
    return i !== n.memoizedState && (ze.flags |= 2048, ci(
      9,
      Zo(),
      Qb.bind(null, c, i),
      null
    )), [o, m, e];
  }
  function Qb(e, n) {
    e.action = n;
  }
  function Xp(e) {
    var n = _t(), i = Ke;
    if (i !== null)
      return Yp(n, i, e);
    _t(), n = n.memoizedState, i = _t();
    var o = i.queue.dispatch;
    return i.memoizedState = e, [n, o, !1];
  }
  function ci(e, n, i, o) {
    return e = { tag: e, create: i, deps: o, inst: n, next: null }, n = ze.updateQueue, n === null && (n = Ic(), ze.updateQueue = n), i = n.lastEffect, i === null ? n.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, n.lastEffect = e), e;
  }
  function Zo() {
    return { destroy: void 0, resource: void 0 };
  }
  function $p() {
    return _t().memoizedState;
  }
  function Go(e, n, i, o) {
    var c = Jt();
    o = o === void 0 ? null : o, ze.flags |= e, c.memoizedState = ci(
      1 | n,
      Zo(),
      i,
      o
    );
  }
  function hs(e, n, i, o) {
    var c = _t();
    o = o === void 0 ? null : o;
    var m = c.memoizedState.inst;
    Ke !== null && o !== null && Rc(o, Ke.memoizedState.deps) ? c.memoizedState = ci(n, m, i, o) : (ze.flags |= e, c.memoizedState = ci(
      1 | n,
      m,
      i,
      o
    ));
  }
  function Qp(e, n) {
    Go(8390656, 8, e, n);
  }
  function Jp(e, n) {
    hs(2048, 8, e, n);
  }
  function Kp(e, n) {
    return hs(4, 2, e, n);
  }
  function Wp(e, n) {
    return hs(4, 4, e, n);
  }
  function em(e, n) {
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
  function tm(e, n, i) {
    i = i != null ? i.concat([e]) : null, hs(4, 4, em.bind(null, n, e), i);
  }
  function Zc() {
  }
  function nm(e, n) {
    var i = _t();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    return n !== null && Rc(n, o[1]) ? o[0] : (i.memoizedState = [e, n], e);
  }
  function rm(e, n) {
    var i = _t();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    if (n !== null && Rc(n, o[1]))
      return o[0];
    if (o = e(), _a) {
      Zn(!0);
      try {
        e();
      } finally {
        Zn(!1);
      }
    }
    return i.memoizedState = [o, n], o;
  }
  function Gc(e, n, i) {
    return i === void 0 || (Rr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = i, e = sg(), ze.lanes |= e, Ur |= e, i);
  }
  function am(e, n, i, o) {
    return sn(i, n) ? i : oi.current !== null ? (e = Gc(e, i, o), sn(e, n) || (Dt = !0), e) : (Rr & 42) === 0 ? (Dt = !0, e.memoizedState = i) : (e = sg(), ze.lanes |= e, Ur |= e, n);
  }
  function im(e, n, i, o, c) {
    var m = te.p;
    te.p = m !== 0 && 8 > m ? m : 8;
    var C = U.T, N = {};
    U.T = N, Xc(e, !1, n, i);
    try {
      var R = c(), H = U.S;
      if (H !== null && H(N, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var Y = Vb(
          R,
          o
        );
        ps(
          e,
          n,
          Y,
          fn(e)
        );
      } else
        ps(
          e,
          n,
          o,
          fn(e)
        );
    } catch (K) {
      ps(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: K },
        fn()
      );
    } finally {
      te.p = m, U.T = C;
    }
  }
  function Jb() {
  }
  function Vc(e, n, i, o) {
    if (e.tag !== 5) throw Error(s(476));
    var c = sm(e).queue;
    im(
      e,
      c,
      n,
      ue,
      i === null ? Jb : function() {
        return om(e), i(o);
      }
    );
  }
  function sm(e) {
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
  function om(e) {
    var n = sm(e).next.queue;
    ps(e, n, {}, fn());
  }
  function Yc() {
    return It(ks);
  }
  function lm() {
    return _t().memoizedState;
  }
  function um() {
    return _t().memoizedState;
  }
  function Kb(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = fn();
          e = Mr(i);
          var o = kr(n, e, i);
          o !== null && (dn(o, n, i), ls(o, n, i)), n = { cache: Ec() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Wb(e, n, i) {
    var o = fn();
    i = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Vo(e) ? fm(n, i) : (i = hc(e, n, i, o), i !== null && (dn(i, e, o), dm(i, n, o)));
  }
  function cm(e, n, i) {
    var o = fn();
    ps(e, n, i, o);
  }
  function ps(e, n, i, o) {
    var c = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Vo(e)) fm(n, c);
    else {
      var m = e.alternate;
      if (e.lanes === 0 && (m === null || m.lanes === 0) && (m = n.lastRenderedReducer, m !== null))
        try {
          var C = n.lastRenderedState, N = m(C, i);
          if (c.hasEagerState = !0, c.eagerState = N, sn(N, C))
            return No(e, n, c, 0), rt === null && Oo(), !1;
        } catch {
        } finally {
        }
      if (i = hc(e, n, c, o), i !== null)
        return dn(i, e, o), dm(i, n, o), !0;
    }
    return !1;
  }
  function Xc(e, n, i, o) {
    if (o = {
      lane: 2,
      revertLane: Tf(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Vo(e)) {
      if (n) throw Error(s(479));
    } else
      n = hc(
        e,
        i,
        o,
        2
      ), n !== null && dn(n, e, 2);
  }
  function Vo(e) {
    var n = e.alternate;
    return e === ze || n !== null && n === ze;
  }
  function fm(e, n) {
    li = Uo = !0;
    var i = e.pending;
    i === null ? n.next = n : (n.next = i.next, i.next = n), e.pending = n;
  }
  function dm(e, n, i) {
    if ((i & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, _h(e, i);
    }
  }
  var Yo = {
    readContext: It,
    use: qo,
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
  }, hm = {
    readContext: It,
    use: qo,
    useCallback: function(e, n) {
      return Jt().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: It,
    useEffect: Qp,
    useImperativeHandle: function(e, n, i) {
      i = i != null ? i.concat([e]) : null, Go(
        4194308,
        4,
        em.bind(null, n, e),
        i
      );
    },
    useLayoutEffect: function(e, n) {
      return Go(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Go(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var i = Jt();
      n = n === void 0 ? null : n;
      var o = e();
      if (_a) {
        Zn(!0);
        try {
          e();
        } finally {
          Zn(!1);
        }
      }
      return i.memoizedState = [o, n], o;
    },
    useReducer: function(e, n, i) {
      var o = Jt();
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
      return o.memoizedState = o.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, o.queue = e, e = e.dispatch = Wb.bind(
        null,
        ze,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = Jt();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = qc(e);
      var n = e.queue, i = cm.bind(null, ze, n);
      return n.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: Zc,
    useDeferredValue: function(e, n) {
      var i = Jt();
      return Gc(i, e, n);
    },
    useTransition: function() {
      var e = qc(!1);
      return e = im.bind(
        null,
        ze,
        e.queue,
        !0,
        !1
      ), Jt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, i) {
      var o = ze, c = Jt();
      if ($e) {
        if (i === void 0)
          throw Error(s(407));
        i = i();
      } else {
        if (i = n(), rt === null)
          throw Error(s(349));
        (Ge & 124) !== 0 || jp(o, n, i);
      }
      c.memoizedState = i;
      var m = { value: i, getSnapshot: n };
      return c.queue = m, Qp(Lp.bind(null, o, m, e), [
        e
      ]), o.flags |= 2048, ci(
        9,
        Zo(),
        zp.bind(
          null,
          o,
          m,
          i,
          n
        ),
        null
      ), i;
    },
    useId: function() {
      var e = Jt(), n = rt.identifierPrefix;
      if ($e) {
        var i = or, o = sr;
        i = (o & ~(1 << 32 - qt(o) - 1)).toString(32) + i, n = "«" + n + "R" + i, i = Ho++, 0 < i && (n += "H" + i.toString(32)), n += "»";
      } else
        i = Yb++, n = "«" + n + "r" + i.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Yc,
    useFormState: Gp,
    useActionState: Gp,
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
      return n.queue = i, n = Xc.bind(
        null,
        ze,
        !0,
        i
      ), i.dispatch = n, [e, n];
    },
    useMemoCache: Bc,
    useCacheRefresh: function() {
      return Jt().memoizedState = Kb.bind(
        null,
        ze
      );
    }
  }, pm = {
    readContext: It,
    use: qo,
    useCallback: nm,
    useContext: It,
    useEffect: Jp,
    useImperativeHandle: tm,
    useInsertionEffect: Kp,
    useLayoutEffect: Wp,
    useMemo: rm,
    useReducer: Fo,
    useRef: $p,
    useState: function() {
      return Fo(cr);
    },
    useDebugValue: Zc,
    useDeferredValue: function(e, n) {
      var i = _t();
      return am(
        i,
        Ke.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Fo(cr)[0], n = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : ds(e),
        n
      ];
    },
    useSyncExternalStore: Rp,
    useId: lm,
    useHostTransitionStatus: Yc,
    useFormState: Vp,
    useActionState: Vp,
    useOptimistic: function(e, n) {
      var i = _t();
      return Bp(i, Ke, e, n);
    },
    useMemoCache: Bc,
    useCacheRefresh: um
  }, e2 = {
    readContext: It,
    use: qo,
    useCallback: nm,
    useContext: It,
    useEffect: Jp,
    useImperativeHandle: tm,
    useInsertionEffect: Kp,
    useLayoutEffect: Wp,
    useMemo: rm,
    useReducer: Hc,
    useRef: $p,
    useState: function() {
      return Hc(cr);
    },
    useDebugValue: Zc,
    useDeferredValue: function(e, n) {
      var i = _t();
      return Ke === null ? Gc(i, e, n) : am(
        i,
        Ke.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Hc(cr)[0], n = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : ds(e),
        n
      ];
    },
    useSyncExternalStore: Rp,
    useId: lm,
    useHostTransitionStatus: Yc,
    useFormState: Xp,
    useActionState: Xp,
    useOptimistic: function(e, n) {
      var i = _t();
      return Ke !== null ? Bp(i, Ke, e, n) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: Bc,
    useCacheRefresh: um
  }, fi = null, ms = 0;
  function Xo(e) {
    var n = ms;
    return ms += 1, fi === null && (fi = []), wp(fi, e, n);
  }
  function gs(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function $o(e, n) {
    throw n.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(n), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function mm(e) {
    var n = e._init;
    return n(e._payload);
  }
  function gm(e) {
    function n(L, z) {
      if (e) {
        var I = L.deletions;
        I === null ? (L.deletions = [z], L.flags |= 16) : I.push(z);
      }
    }
    function i(L, z) {
      if (!e) return null;
      for (; z !== null; )
        n(L, z), z = z.sibling;
      return null;
    }
    function o(L) {
      for (var z = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? z.set(L.key, L) : z.set(L.index, L), L = L.sibling;
      return z;
    }
    function c(L, z) {
      return L = ir(L, z), L.index = 0, L.sibling = null, L;
    }
    function m(L, z, I) {
      return L.index = I, e ? (I = L.alternate, I !== null ? (I = I.index, I < z ? (L.flags |= 67108866, z) : I) : (L.flags |= 67108866, z)) : (L.flags |= 1048576, z);
    }
    function C(L) {
      return e && L.alternate === null && (L.flags |= 67108866), L;
    }
    function N(L, z, I, Q) {
      return z === null || z.tag !== 6 ? (z = mc(I, L.mode, Q), z.return = L, z) : (z = c(z, I), z.return = L, z);
    }
    function R(L, z, I, Q) {
      var ce = I.type;
      return ce === d ? Y(
        L,
        z,
        I.props.children,
        Q,
        I.key
      ) : z !== null && (z.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === q && mm(ce) === z.type) ? (z = c(z, I.props), gs(z, I), z.return = L, z) : (z = Mo(
        I.type,
        I.key,
        I.props,
        null,
        L.mode,
        Q
      ), gs(z, I), z.return = L, z);
    }
    function H(L, z, I, Q) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== I.containerInfo || z.stateNode.implementation !== I.implementation ? (z = gc(I, L.mode, Q), z.return = L, z) : (z = c(z, I.children || []), z.return = L, z);
    }
    function Y(L, z, I, Q, ce) {
      return z === null || z.tag !== 7 ? (z = da(
        I,
        L.mode,
        Q,
        ce
      ), z.return = L, z) : (z = c(z, I), z.return = L, z);
    }
    function K(L, z, I) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = mc(
          "" + z,
          L.mode,
          I
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case b:
            return I = Mo(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              I
            ), gs(I, z), I.return = L, I;
          case v:
            return z = gc(
              z,
              L.mode,
              I
            ), z.return = L, z;
          case q:
            var Q = z._init;
            return z = Q(z._payload), K(L, z, I);
        }
        if (Ce(z) || $(z))
          return z = da(
            z,
            L.mode,
            I,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return K(L, Xo(z), I);
        if (z.$$typeof === D)
          return K(
            L,
            zo(L, z),
            I
          );
        $o(L, z);
      }
      return null;
    }
    function F(L, z, I, Q) {
      var ce = z !== null ? z.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return ce !== null ? null : N(L, z, "" + I, Q);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case b:
            return I.key === ce ? R(L, z, I, Q) : null;
          case v:
            return I.key === ce ? H(L, z, I, Q) : null;
          case q:
            return ce = I._init, I = ce(I._payload), F(L, z, I, Q);
        }
        if (Ce(I) || $(I))
          return ce !== null ? null : Y(L, z, I, Q, null);
        if (typeof I.then == "function")
          return F(
            L,
            z,
            Xo(I),
            Q
          );
        if (I.$$typeof === D)
          return F(
            L,
            z,
            zo(L, I),
            Q
          );
        $o(L, I);
      }
      return null;
    }
    function Z(L, z, I, Q, ce) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return L = L.get(I) || null, N(z, L, "" + Q, ce);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case b:
            return L = L.get(
              Q.key === null ? I : Q.key
            ) || null, R(z, L, Q, ce);
          case v:
            return L = L.get(
              Q.key === null ? I : Q.key
            ) || null, H(z, L, Q, ce);
          case q:
            var Ie = Q._init;
            return Q = Ie(Q._payload), Z(
              L,
              z,
              I,
              Q,
              ce
            );
        }
        if (Ce(Q) || $(Q))
          return L = L.get(I) || null, Y(z, L, Q, ce, null);
        if (typeof Q.then == "function")
          return Z(
            L,
            z,
            I,
            Xo(Q),
            ce
          );
        if (Q.$$typeof === D)
          return Z(
            L,
            z,
            I,
            zo(z, Q),
            ce
          );
        $o(z, Q);
      }
      return null;
    }
    function Te(L, z, I, Q) {
      for (var ce = null, Ie = null, pe = z, Ee = z = 0, kt = null; pe !== null && Ee < I.length; Ee++) {
        pe.index > Ee ? (kt = pe, pe = null) : kt = pe.sibling;
        var Ye = F(
          L,
          pe,
          I[Ee],
          Q
        );
        if (Ye === null) {
          pe === null && (pe = kt);
          break;
        }
        e && pe && Ye.alternate === null && n(L, pe), z = m(Ye, z, Ee), Ie === null ? ce = Ye : Ie.sibling = Ye, Ie = Ye, pe = kt;
      }
      if (Ee === I.length)
        return i(L, pe), $e && pa(L, Ee), ce;
      if (pe === null) {
        for (; Ee < I.length; Ee++)
          pe = K(L, I[Ee], Q), pe !== null && (z = m(
            pe,
            z,
            Ee
          ), Ie === null ? ce = pe : Ie.sibling = pe, Ie = pe);
        return $e && pa(L, Ee), ce;
      }
      for (pe = o(pe); Ee < I.length; Ee++)
        kt = Z(
          pe,
          L,
          Ee,
          I[Ee],
          Q
        ), kt !== null && (e && kt.alternate !== null && pe.delete(
          kt.key === null ? Ee : kt.key
        ), z = m(
          kt,
          z,
          Ee
        ), Ie === null ? ce = kt : Ie.sibling = kt, Ie = kt);
      return e && pe.forEach(function($r) {
        return n(L, $r);
      }), $e && pa(L, Ee), ce;
    }
    function _e(L, z, I, Q) {
      if (I == null) throw Error(s(151));
      for (var ce = null, Ie = null, pe = z, Ee = z = 0, kt = null, Ye = I.next(); pe !== null && !Ye.done; Ee++, Ye = I.next()) {
        pe.index > Ee ? (kt = pe, pe = null) : kt = pe.sibling;
        var $r = F(L, pe, Ye.value, Q);
        if ($r === null) {
          pe === null && (pe = kt);
          break;
        }
        e && pe && $r.alternate === null && n(L, pe), z = m($r, z, Ee), Ie === null ? ce = $r : Ie.sibling = $r, Ie = $r, pe = kt;
      }
      if (Ye.done)
        return i(L, pe), $e && pa(L, Ee), ce;
      if (pe === null) {
        for (; !Ye.done; Ee++, Ye = I.next())
          Ye = K(L, Ye.value, Q), Ye !== null && (z = m(Ye, z, Ee), Ie === null ? ce = Ye : Ie.sibling = Ye, Ie = Ye);
        return $e && pa(L, Ee), ce;
      }
      for (pe = o(pe); !Ye.done; Ee++, Ye = I.next())
        Ye = Z(pe, L, Ee, Ye.value, Q), Ye !== null && (e && Ye.alternate !== null && pe.delete(Ye.key === null ? Ee : Ye.key), z = m(Ye, z, Ee), Ie === null ? ce = Ye : Ie.sibling = Ye, Ie = Ye);
      return e && pe.forEach(function(t_) {
        return n(L, t_);
      }), $e && pa(L, Ee), ce;
    }
    function et(L, z, I, Q) {
      if (typeof I == "object" && I !== null && I.type === d && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case b:
            e: {
              for (var ce = I.key; z !== null; ) {
                if (z.key === ce) {
                  if (ce = I.type, ce === d) {
                    if (z.tag === 7) {
                      i(
                        L,
                        z.sibling
                      ), Q = c(
                        z,
                        I.props.children
                      ), Q.return = L, L = Q;
                      break e;
                    }
                  } else if (z.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === q && mm(ce) === z.type) {
                    i(
                      L,
                      z.sibling
                    ), Q = c(z, I.props), gs(Q, I), Q.return = L, L = Q;
                    break e;
                  }
                  i(L, z);
                  break;
                } else n(L, z);
                z = z.sibling;
              }
              I.type === d ? (Q = da(
                I.props.children,
                L.mode,
                Q,
                I.key
              ), Q.return = L, L = Q) : (Q = Mo(
                I.type,
                I.key,
                I.props,
                null,
                L.mode,
                Q
              ), gs(Q, I), Q.return = L, L = Q);
            }
            return C(L);
          case v:
            e: {
              for (ce = I.key; z !== null; ) {
                if (z.key === ce)
                  if (z.tag === 4 && z.stateNode.containerInfo === I.containerInfo && z.stateNode.implementation === I.implementation) {
                    i(
                      L,
                      z.sibling
                    ), Q = c(z, I.children || []), Q.return = L, L = Q;
                    break e;
                  } else {
                    i(L, z);
                    break;
                  }
                else n(L, z);
                z = z.sibling;
              }
              Q = gc(I, L.mode, Q), Q.return = L, L = Q;
            }
            return C(L);
          case q:
            return ce = I._init, I = ce(I._payload), et(
              L,
              z,
              I,
              Q
            );
        }
        if (Ce(I))
          return Te(
            L,
            z,
            I,
            Q
          );
        if ($(I)) {
          if (ce = $(I), typeof ce != "function") throw Error(s(150));
          return I = ce.call(I), _e(
            L,
            z,
            I,
            Q
          );
        }
        if (typeof I.then == "function")
          return et(
            L,
            z,
            Xo(I),
            Q
          );
        if (I.$$typeof === D)
          return et(
            L,
            z,
            zo(L, I),
            Q
          );
        $o(L, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint" ? (I = "" + I, z !== null && z.tag === 6 ? (i(L, z.sibling), Q = c(z, I), Q.return = L, L = Q) : (i(L, z), Q = mc(I, L.mode, Q), Q.return = L, L = Q), C(L)) : i(L, z);
    }
    return function(L, z, I, Q) {
      try {
        ms = 0;
        var ce = et(
          L,
          z,
          I,
          Q
        );
        return fi = null, ce;
      } catch (pe) {
        if (pe === ss || pe === Po) throw pe;
        var Ie = on(29, pe, null, L.mode);
        return Ie.lanes = Q, Ie.return = L, Ie;
      } finally {
      }
    };
  }
  var di = gm(!0), vm = gm(!1), Tn = J(null), Yn = null;
  function jr(e) {
    var n = e.alternate;
    se(wt, wt.current & 1), se(Tn, e), Yn === null && (n === null || oi.current !== null || n.memoizedState !== null) && (Yn = e);
  }
  function ym(e) {
    if (e.tag === 22) {
      if (se(wt, wt.current), se(Tn, e), Yn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Yn = e);
      }
    } else zr();
  }
  function zr() {
    se(wt, wt.current), se(Tn, Tn.current);
  }
  function fr(e) {
    ae(Tn), Yn === e && (Yn = null), ae(wt);
  }
  var wt = J(0);
  function Qo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || Bf(i)))
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
  function $c(e, n, i, o) {
    n = e.memoizedState, i = i(o, n), i = i == null ? n : y({}, n, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Qc = {
    enqueueSetState: function(e, n, i) {
      e = e._reactInternals;
      var o = fn(), c = Mr(o);
      c.payload = n, i != null && (c.callback = i), n = kr(e, c, o), n !== null && (dn(n, e, o), ls(n, e, o));
    },
    enqueueReplaceState: function(e, n, i) {
      e = e._reactInternals;
      var o = fn(), c = Mr(o);
      c.tag = 1, c.payload = n, i != null && (c.callback = i), n = kr(e, c, o), n !== null && (dn(n, e, o), ls(n, e, o));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var i = fn(), o = Mr(i);
      o.tag = 2, n != null && (o.callback = n), n = kr(e, o, i), n !== null && (dn(n, e, i), ls(n, e, i));
    }
  };
  function bm(e, n, i, o, c, m, C) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, m, C) : n.prototype && n.prototype.isPureReactComponent ? !Ki(i, o) || !Ki(c, m) : !0;
  }
  function _m(e, n, i, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, o), n.state !== e && Qc.enqueueReplaceState(n, n.state, null);
  }
  function Sa(e, n) {
    var i = n;
    if ("ref" in n) {
      i = {};
      for (var o in n)
        o !== "ref" && (i[o] = n[o]);
    }
    if (e = e.defaultProps) {
      i === n && (i = y({}, i));
      for (var c in e)
        i[c] === void 0 && (i[c] = e[c]);
    }
    return i;
  }
  var Jo = typeof reportError == "function" ? reportError : function(e) {
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
  function Sm(e) {
    Jo(e);
  }
  function xm(e) {
    console.error(e);
  }
  function Em(e) {
    Jo(e);
  }
  function Ko(e, n) {
    try {
      var i = e.onUncaughtError;
      i(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Cm(e, n, i) {
    try {
      var o = e.onCaughtError;
      o(i.value, {
        componentStack: i.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Jc(e, n, i) {
    return i = Mr(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      Ko(e, n);
    }, i;
  }
  function wm(e) {
    return e = Mr(e), e.tag = 3, e;
  }
  function Am(e, n, i, o) {
    var c = i.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var m = o.value;
      e.payload = function() {
        return c(m);
      }, e.callback = function() {
        Cm(n, i, o);
      };
    }
    var C = i.stateNode;
    C !== null && typeof C.componentDidCatch == "function" && (e.callback = function() {
      Cm(n, i, o), typeof c != "function" && (Hr === null ? Hr = /* @__PURE__ */ new Set([this]) : Hr.add(this));
      var N = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: N !== null ? N : ""
      });
    });
  }
  function t2(e, n, i, o, c) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = i.alternate, n !== null && rs(
        n,
        i,
        c,
        !0
      ), i = Tn.current, i !== null) {
        switch (i.tag) {
          case 13:
            return Yn === null ? xf() : i.alternate === null && ht === 0 && (ht = 3), i.flags &= -257, i.flags |= 65536, i.lanes = c, o === Ac ? i.flags |= 16384 : (n = i.updateQueue, n === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), Cf(e, o, c)), !1;
          case 22:
            return i.flags |= 65536, o === Ac ? i.flags |= 16384 : (n = i.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = n) : (i = n.retryQueue, i === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), Cf(e, o, c)), !1;
        }
        throw Error(s(435, i.tag));
      }
      return Cf(e, o, c), xf(), !1;
    }
    if ($e)
      return n = Tn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, o !== bc && (e = Error(s(422), { cause: o }), ns(En(e, i)))) : (o !== bc && (n = Error(s(423), {
        cause: o
      }), ns(
        En(n, i)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, o = En(o, i), c = Jc(
        e.stateNode,
        o,
        c
      ), Nc(e, c), ht !== 4 && (ht = 2)), !1;
    var m = Error(s(520), { cause: o });
    if (m = En(m, i), Es === null ? Es = [m] : Es.push(m), ht !== 4 && (ht = 2), n === null) return !0;
    o = En(o, i), i = n;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = c & -c, i.lanes |= e, e = Jc(i.stateNode, o, e), Nc(i, e), !1;
        case 1:
          if (n = i.type, m = i.stateNode, (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Hr === null || !Hr.has(m))))
            return i.flags |= 65536, c &= -c, i.lanes |= c, c = wm(c), Am(
              c,
              e,
              i,
              o
            ), Nc(i, c), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Tm = Error(s(461)), Dt = !1;
  function Rt(e, n, i, o) {
    n.child = e === null ? vm(n, null, i, o) : di(
      n,
      e.child,
      i,
      o
    );
  }
  function Om(e, n, i, o, c) {
    i = i.render;
    var m = n.ref;
    if ("ref" in o) {
      var C = {};
      for (var N in o)
        N !== "ref" && (C[N] = o[N]);
    } else C = o;
    return ya(n), o = jc(
      e,
      n,
      i,
      C,
      m,
      c
    ), N = zc(), e !== null && !Dt ? (Lc(e, n, c), dr(e, n, c)) : ($e && N && vc(n), n.flags |= 1, Rt(e, n, o, c), n.child);
  }
  function Nm(e, n, i, o, c) {
    if (e === null) {
      var m = i.type;
      return typeof m == "function" && !pc(m) && m.defaultProps === void 0 && i.compare === null ? (n.tag = 15, n.type = m, Dm(
        e,
        n,
        m,
        o,
        c
      )) : (e = Mo(
        i.type,
        null,
        o,
        n,
        n.mode,
        c
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (m = e.child, !sf(e, c)) {
      var C = m.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Ki, i(C, o) && e.ref === n.ref)
        return dr(e, n, c);
    }
    return n.flags |= 1, e = ir(m, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Dm(e, n, i, o, c) {
    if (e !== null) {
      var m = e.memoizedProps;
      if (Ki(m, o) && e.ref === n.ref)
        if (Dt = !1, n.pendingProps = o = m, sf(e, c))
          (e.flags & 131072) !== 0 && (Dt = !0);
        else
          return n.lanes = e.lanes, dr(e, n, c);
    }
    return Kc(
      e,
      n,
      i,
      o,
      c
    );
  }
  function Mm(e, n, i) {
    var o = n.pendingProps, c = o.children, m = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = m !== null ? m.baseLanes | i : i, e !== null) {
          for (c = n.child = e.child, m = 0; c !== null; )
            m = m | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = m & ~o;
        } else n.childLanes = 0, n.child = null;
        return km(
          e,
          n,
          o,
          i
        );
      }
      if ((i & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Lo(
          n,
          m !== null ? m.cachePool : null
        ), m !== null ? Dp(n, m) : Mc(), ym(n);
      else
        return n.lanes = n.childLanes = 536870912, km(
          e,
          n,
          m !== null ? m.baseLanes | i : i,
          i
        );
    } else
      m !== null ? (Lo(n, m.cachePool), Dp(n, m), zr(), n.memoizedState = null) : (e !== null && Lo(n, null), Mc(), zr());
    return Rt(e, n, c, i), n.child;
  }
  function km(e, n, i, o) {
    var c = wc();
    return c = c === null ? null : { parent: Ct._currentValue, pool: c }, n.memoizedState = {
      baseLanes: i,
      cachePool: c
    }, e !== null && Lo(n, null), Mc(), ym(n), e !== null && rs(e, n, o, !0), null;
  }
  function Wo(e, n) {
    var i = n.ref;
    if (i === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object")
        throw Error(s(284));
      (e === null || e.ref !== i) && (n.flags |= 4194816);
    }
  }
  function Kc(e, n, i, o, c) {
    return ya(n), i = jc(
      e,
      n,
      i,
      o,
      void 0,
      c
    ), o = zc(), e !== null && !Dt ? (Lc(e, n, c), dr(e, n, c)) : ($e && o && vc(n), n.flags |= 1, Rt(e, n, i, c), n.child);
  }
  function Rm(e, n, i, o, c, m) {
    return ya(n), n.updateQueue = null, i = kp(
      n,
      o,
      i,
      c
    ), Mp(e), o = zc(), e !== null && !Dt ? (Lc(e, n, m), dr(e, n, m)) : ($e && o && vc(n), n.flags |= 1, Rt(e, n, i, m), n.child);
  }
  function jm(e, n, i, o, c) {
    if (ya(n), n.stateNode === null) {
      var m = ni, C = i.contextType;
      typeof C == "object" && C !== null && (m = It(C)), m = new i(o, m), n.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = Qc, n.stateNode = m, m._reactInternals = n, m = n.stateNode, m.props = o, m.state = n.memoizedState, m.refs = {}, Tc(n), C = i.contextType, m.context = typeof C == "object" && C !== null ? It(C) : ni, m.state = n.memoizedState, C = i.getDerivedStateFromProps, typeof C == "function" && ($c(
        n,
        i,
        C,
        o
      ), m.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (C = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), C !== m.state && Qc.enqueueReplaceState(m, m.state, null), cs(n, o, m, c), us(), m.state = n.memoizedState), typeof m.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      m = n.stateNode;
      var N = n.memoizedProps, R = Sa(i, N);
      m.props = R;
      var H = m.context, Y = i.contextType;
      C = ni, typeof Y == "object" && Y !== null && (C = It(Y));
      var K = i.getDerivedStateFromProps;
      Y = typeof K == "function" || typeof m.getSnapshotBeforeUpdate == "function", N = n.pendingProps !== N, Y || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (N || H !== C) && _m(
        n,
        m,
        o,
        C
      ), Dr = !1;
      var F = n.memoizedState;
      m.state = F, cs(n, o, m, c), us(), H = n.memoizedState, N || F !== H || Dr ? (typeof K == "function" && ($c(
        n,
        i,
        K,
        o
      ), H = n.memoizedState), (R = Dr || bm(
        n,
        i,
        R,
        o,
        F,
        H,
        C
      )) ? (Y || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = H), m.props = o, m.state = H, m.context = C, o = R) : (typeof m.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      m = n.stateNode, Oc(e, n), C = n.memoizedProps, Y = Sa(i, C), m.props = Y, K = n.pendingProps, F = m.context, H = i.contextType, R = ni, typeof H == "object" && H !== null && (R = It(H)), N = i.getDerivedStateFromProps, (H = typeof N == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== K || F !== R) && _m(
        n,
        m,
        o,
        R
      ), Dr = !1, F = n.memoizedState, m.state = F, cs(n, o, m, c), us();
      var Z = n.memoizedState;
      C !== K || F !== Z || Dr || e !== null && e.dependencies !== null && jo(e.dependencies) ? (typeof N == "function" && ($c(
        n,
        i,
        N,
        o
      ), Z = n.memoizedState), (Y = Dr || bm(
        n,
        i,
        Y,
        o,
        F,
        Z,
        R
      ) || e !== null && e.dependencies !== null && jo(e.dependencies)) ? (H || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Z, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(
        o,
        Z,
        R
      )), typeof m.componentDidUpdate == "function" && (n.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = Z), m.props = o, m.state = Z, m.context = R, o = Y) : (typeof m.componentDidUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return m = o, Wo(e, n), o = (n.flags & 128) !== 0, m || o ? (m = n.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : m.render(), n.flags |= 1, e !== null && o ? (n.child = di(
      n,
      e.child,
      null,
      c
    ), n.child = di(
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
  function zm(e, n, i, o) {
    return ts(), n.flags |= 256, Rt(e, n, i, o), n.child;
  }
  var Wc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ef(e) {
    return { baseLanes: e, cachePool: xp() };
  }
  function tf(e, n, i) {
    return e = e !== null ? e.childLanes & ~i : 0, n && (e |= On), e;
  }
  function Lm(e, n, i) {
    var o = n.pendingProps, c = !1, m = (n.flags & 128) !== 0, C;
    if ((C = m) || (C = e !== null && e.memoizedState === null ? !1 : (wt.current & 2) !== 0), C && (c = !0, n.flags &= -129), C = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if ($e) {
        if (c ? jr(n) : zr(), $e) {
          var N = dt, R;
          if (R = N) {
            e: {
              for (R = N, N = Vn; R.nodeType !== 8; ) {
                if (!N) {
                  N = null;
                  break e;
                }
                if (R = Pn(
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
              treeContext: ha !== null ? { id: sr, overflow: or } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, R = on(
              18,
              null,
              null,
              0
            ), R.stateNode = N, R.return = n, n.child = R, Zt = n, dt = null, R = !0) : R = !1;
          }
          R || ga(n);
        }
        if (N = n.memoizedState, N !== null && (N = N.dehydrated, N !== null))
          return Bf(N) ? n.lanes = 32 : n.lanes = 536870912, null;
        fr(n);
      }
      return N = o.children, o = o.fallback, c ? (zr(), c = n.mode, N = el(
        { mode: "hidden", children: N },
        c
      ), o = da(
        o,
        c,
        i,
        null
      ), N.return = n, o.return = n, N.sibling = o, n.child = N, c = n.child, c.memoizedState = ef(i), c.childLanes = tf(
        e,
        C,
        i
      ), n.memoizedState = Wc, o) : (jr(n), nf(n, N));
    }
    if (R = e.memoizedState, R !== null && (N = R.dehydrated, N !== null)) {
      if (m)
        n.flags & 256 ? (jr(n), n.flags &= -257, n = rf(
          e,
          n,
          i
        )) : n.memoizedState !== null ? (zr(), n.child = e.child, n.flags |= 128, n = null) : (zr(), c = o.fallback, N = n.mode, o = el(
          { mode: "visible", children: o.children },
          N
        ), c = da(
          c,
          N,
          i,
          null
        ), c.flags |= 2, o.return = n, c.return = n, o.sibling = c, n.child = o, di(
          n,
          e.child,
          null,
          i
        ), o = n.child, o.memoizedState = ef(i), o.childLanes = tf(
          e,
          C,
          i
        ), n.memoizedState = Wc, n = c);
      else if (jr(n), Bf(N)) {
        if (C = N.nextSibling && N.nextSibling.dataset, C) var H = C.dgst;
        C = H, o = Error(s(419)), o.stack = "", o.digest = C, ns({ value: o, source: null, stack: null }), n = rf(
          e,
          n,
          i
        );
      } else if (Dt || rs(e, n, i, !1), C = (i & e.childLanes) !== 0, Dt || C) {
        if (C = rt, C !== null && (o = i & -i, o = (o & 42) !== 0 ? 1 : Bu(o), o = (o & (C.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== R.retryLane))
          throw R.retryLane = o, ti(e, o), dn(C, e, o), Tm;
        N.data === "$?" || xf(), n = rf(
          e,
          n,
          i
        );
      } else
        N.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = R.treeContext, dt = Pn(
          N.nextSibling
        ), Zt = n, $e = !0, ma = null, Vn = !1, e !== null && (wn[An++] = sr, wn[An++] = or, wn[An++] = ha, sr = e.id, or = e.overflow, ha = n), n = nf(
          n,
          o.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (zr(), c = o.fallback, N = n.mode, R = e.child, H = R.sibling, o = ir(R, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = R.subtreeFlags & 65011712, H !== null ? c = ir(H, c) : (c = da(
      c,
      N,
      i,
      null
    ), c.flags |= 2), c.return = n, o.return = n, o.sibling = c, n.child = o, o = c, c = n.child, N = e.child.memoizedState, N === null ? N = ef(i) : (R = N.cachePool, R !== null ? (H = Ct._currentValue, R = R.parent !== H ? { parent: H, pool: H } : R) : R = xp(), N = {
      baseLanes: N.baseLanes | i,
      cachePool: R
    }), c.memoizedState = N, c.childLanes = tf(
      e,
      C,
      i
    ), n.memoizedState = Wc, o) : (jr(n), i = e.child, e = i.sibling, i = ir(i, {
      mode: "visible",
      children: o.children
    }), i.return = n, i.sibling = null, e !== null && (C = n.deletions, C === null ? (n.deletions = [e], n.flags |= 16) : C.push(e)), n.child = i, n.memoizedState = null, i);
  }
  function nf(e, n) {
    return n = el(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function el(e, n) {
    return e = on(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function rf(e, n, i) {
    return di(n, e.child, null, i), e = nf(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Pm(e, n, i) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), Sc(e.return, n, i);
  }
  function af(e, n, i, o, c) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: i,
      tailMode: c
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = o, m.tail = i, m.tailMode = c);
  }
  function Im(e, n, i) {
    var o = n.pendingProps, c = o.revealOrder, m = o.tail;
    if (Rt(e, n, o.children, i), o = wt.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Pm(e, i, n);
          else if (e.tag === 19)
            Pm(e, i, n);
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
      o &= 1;
    }
    switch (se(wt, o), c) {
      case "forwards":
        for (i = n.child, c = null; i !== null; )
          e = i.alternate, e !== null && Qo(e) === null && (c = i), i = i.sibling;
        i = c, i === null ? (c = n.child, n.child = null) : (c = i.sibling, i.sibling = null), af(
          n,
          !1,
          c,
          i,
          m
        );
        break;
      case "backwards":
        for (i = null, c = n.child, n.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Qo(e) === null) {
            n.child = c;
            break;
          }
          e = c.sibling, c.sibling = i, i = c, c = e;
        }
        af(
          n,
          !0,
          i,
          null,
          m
        );
        break;
      case "together":
        af(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function dr(e, n, i) {
    if (e !== null && (n.dependencies = e.dependencies), Ur |= n.lanes, (i & n.childLanes) === 0)
      if (e !== null) {
        if (rs(
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
  function sf(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && jo(e)));
  }
  function n2(e, n, i) {
    switch (n.tag) {
      case 3:
        ge(n, n.stateNode.containerInfo), Nr(n, Ct, e.memoizedState.cache), ts();
        break;
      case 27:
      case 5:
        it(n);
        break;
      case 4:
        ge(n, n.stateNode.containerInfo);
        break;
      case 10:
        Nr(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (jr(n), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? Lm(e, n, i) : (jr(n), e = dr(
            e,
            n,
            i
          ), e !== null ? e.sibling : null);
        jr(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (o = (i & n.childLanes) !== 0, o || (rs(
          e,
          n,
          i,
          !1
        ), o = (i & n.childLanes) !== 0), c) {
          if (o)
            return Im(
              e,
              n,
              i
            );
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), se(wt, wt.current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Mm(e, n, i);
      case 24:
        Nr(n, Ct, e.memoizedState.cache);
    }
    return dr(e, n, i);
  }
  function Bm(e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Dt = !0;
      else {
        if (!sf(e, i) && (n.flags & 128) === 0)
          return Dt = !1, n2(
            e,
            n,
            i
          );
        Dt = (e.flags & 131072) !== 0;
      }
    else
      Dt = !1, $e && (n.flags & 1048576) !== 0 && mp(n, Ro, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, c = o._init;
          if (o = c(o._payload), n.type = o, typeof o == "function")
            pc(o) ? (e = Sa(o, e), n.tag = 1, n = jm(
              null,
              n,
              o,
              e,
              i
            )) : (n.tag = 0, n = Kc(
              null,
              n,
              o,
              e,
              i
            ));
          else {
            if (o != null) {
              if (c = o.$$typeof, c === x) {
                n.tag = 11, n = Om(
                  null,
                  n,
                  o,
                  e,
                  i
                );
                break e;
              } else if (c === k) {
                n.tag = 14, n = Nm(
                  null,
                  n,
                  o,
                  e,
                  i
                );
                break e;
              }
            }
            throw n = fe(o) || o, Error(s(306, n, ""));
          }
        }
        return n;
      case 0:
        return Kc(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 1:
        return o = n.type, c = Sa(
          o,
          n.pendingProps
        ), jm(
          e,
          n,
          o,
          c,
          i
        );
      case 3:
        e: {
          if (ge(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          o = n.pendingProps;
          var m = n.memoizedState;
          c = m.element, Oc(e, n), cs(n, o, null, i);
          var C = n.memoizedState;
          if (o = C.cache, Nr(n, Ct, o), o !== m.cache && xc(
            n,
            [Ct],
            i,
            !0
          ), us(), o = C.element, m.isDehydrated)
            if (m = {
              element: o,
              isDehydrated: !1,
              cache: C.cache
            }, n.updateQueue.baseState = m, n.memoizedState = m, n.flags & 256) {
              n = zm(
                e,
                n,
                o,
                i
              );
              break e;
            } else if (o !== c) {
              c = En(
                Error(s(424)),
                n
              ), ns(c), n = zm(
                e,
                n,
                o,
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
              for (dt = Pn(e.firstChild), Zt = n, $e = !0, ma = null, Vn = !0, i = vm(
                n,
                null,
                o,
                i
              ), n.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
            }
          else {
            if (ts(), o === c) {
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
              o,
              i
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return Wo(e, n), e === null ? (i = Fg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = i : $e || (i = n.type, e = n.pendingProps, o = pl(
          V.current
        ).createElement(i), o[Pt] = n, o[$t] = e, zt(o, i, e), Nt(o), n.stateNode = o) : n.memoizedState = Fg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return it(n), e === null && $e && (o = n.stateNode = Ug(
          n.type,
          n.pendingProps,
          V.current
        ), Zt = n, Vn = !0, c = dt, Zr(n.type) ? (Uf = c, dt = Pn(
          o.firstChild
        )) : dt = c), Rt(
          e,
          n,
          n.pendingProps.children,
          i
        ), Wo(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && $e && ((c = o = dt) && (o = D2(
          o,
          n.type,
          n.pendingProps,
          Vn
        ), o !== null ? (n.stateNode = o, Zt = n, dt = Pn(
          o.firstChild
        ), Vn = !1, c = !0) : c = !1), c || ga(n)), it(n), c = n.type, m = n.pendingProps, C = e !== null ? e.memoizedProps : null, o = m.children, Lf(c, m) ? o = null : C !== null && Lf(c, C) && (n.flags |= 32), n.memoizedState !== null && (c = jc(
          e,
          n,
          Xb,
          null,
          null,
          i
        ), ks._currentValue = c), Wo(e, n), Rt(e, n, o, i), n.child;
      case 6:
        return e === null && $e && ((e = i = dt) && (i = M2(
          i,
          n.pendingProps,
          Vn
        ), i !== null ? (n.stateNode = i, Zt = n, dt = null, e = !0) : e = !1), e || ga(n)), null;
      case 13:
        return Lm(e, n, i);
      case 4:
        return ge(
          n,
          n.stateNode.containerInfo
        ), o = n.pendingProps, e === null ? n.child = di(
          n,
          null,
          o,
          i
        ) : Rt(
          e,
          n,
          o,
          i
        ), n.child;
      case 11:
        return Om(
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
        return o = n.pendingProps, Nr(n, n.type, o.value), Rt(
          e,
          n,
          o.children,
          i
        ), n.child;
      case 9:
        return c = n.type._context, o = n.pendingProps.children, ya(n), c = It(c), o = o(c), n.flags |= 1, Rt(e, n, o, i), n.child;
      case 14:
        return Nm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 15:
        return Dm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 19:
        return Im(e, n, i);
      case 31:
        return o = n.pendingProps, i = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (i = el(
          o,
          i
        ), i.ref = n.ref, n.child = i, i.return = n, n = i) : (i = ir(e.child, o), i.ref = n.ref, n.child = i, i.return = n, n = i), n;
      case 22:
        return Mm(e, n, i);
      case 24:
        return ya(n), o = It(Ct), e === null ? (c = wc(), c === null && (c = rt, m = Ec(), c.pooledCache = m, m.refCount++, m !== null && (c.pooledCacheLanes |= i), c = m), n.memoizedState = {
          parent: o,
          cache: c
        }, Tc(n), Nr(n, Ct, c)) : ((e.lanes & i) !== 0 && (Oc(e, n), cs(n, null, null, i), us()), c = e.memoizedState, m = n.memoizedState, c.parent !== o ? (c = { parent: o, cache: o }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Nr(n, Ct, o)) : (o = m.cache, Nr(n, Ct, o), o !== c.cache && xc(
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
  function Um(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Xg(n)) {
      if (n = Tn.current, n !== null && ((Ge & 4194048) === Ge ? Yn !== null : (Ge & 62914560) !== Ge && (Ge & 536870912) === 0 || n !== Yn))
        throw os = Ac, Ep;
      e.flags |= 8192;
    }
  }
  function tl(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? yh() : 536870912, e.lanes |= n, gi |= n);
  }
  function vs(e, n) {
    if (!$e)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), n = n.sibling;
          i === null ? e.tail = null : i.sibling = null;
          break;
        case "collapsed":
          i = e.tail;
          for (var o = null; i !== null; )
            i.alternate !== null && (o = i), i = i.sibling;
          o === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function ut(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, i = 0, o = 0;
    if (n)
      for (var c = e.child; c !== null; )
        i |= c.lanes | c.childLanes, o |= c.subtreeFlags & 65011712, o |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        i |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= o, e.childLanes = i, n;
  }
  function r2(e, n, i) {
    var o = n.pendingProps;
    switch (yc(n), n.tag) {
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
        return i = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), ur(Ct), Xe(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (es(n) ? hr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, yp())), ut(n), null;
      case 26:
        return i = n.memoizedState, e === null ? (hr(n), i !== null ? (ut(n), Um(n, i)) : (ut(n), n.flags &= -16777217)) : i ? i !== e.memoizedState ? (hr(n), ut(n), Um(n, i)) : (ut(n), n.flags &= -16777217) : (e.memoizedProps !== o && hr(n), ut(n), n.flags &= -16777217), null;
      case 27:
        Re(n), i = V.current;
        var c = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== o && hr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ut(n), null;
          }
          e = oe.current, es(n) ? gp(n) : (e = Ug(c, o, i), n.stateNode = e, hr(n));
        }
        return ut(n), null;
      case 5:
        if (Re(n), i = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== o && hr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ut(n), null;
          }
          if (e = oe.current, es(n))
            gp(n);
          else {
            switch (c = pl(
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
                    e = typeof o.is == "string" ? c.createElement("select", { is: o.is }) : c.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? c.createElement(i, { is: o.is }) : c.createElement(i);
                }
            }
            e[Pt] = n, e[$t] = o;
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
            e: switch (zt(e, i, o), i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
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
          e.memoizedProps !== o && hr(n);
        else {
          if (typeof o != "string" && n.stateNode === null)
            throw Error(s(166));
          if (e = V.current, es(n)) {
            if (e = n.stateNode, i = n.memoizedProps, o = null, c = Zt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            e[Pt] = n, e = !!(e.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || Rg(e.nodeValue, i)), e || ga(n);
          } else
            e = pl(e).createTextNode(
              o
            ), e[Pt] = n, n.stateNode = e;
        }
        return ut(n), null;
      case 13:
        if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = es(n), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[Pt] = n;
            } else
              ts(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ut(n), c = !1;
          } else
            c = yp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (fr(n), n) : (fr(n), null);
        }
        if (fr(n), (n.flags & 128) !== 0)
          return n.lanes = i, n;
        if (i = o !== null, e = e !== null && e.memoizedState !== null, i) {
          o = n.child, c = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (c = o.alternate.memoizedState.cachePool.pool);
          var m = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (m = o.memoizedState.cachePool.pool), m !== c && (o.flags |= 2048);
        }
        return i !== e && i && (n.child.flags |= 8192), tl(n, n.updateQueue), ut(n), null;
      case 4:
        return Xe(), e === null && Mf(n.stateNode.containerInfo), ut(n), null;
      case 10:
        return ur(n.type), ut(n), null;
      case 19:
        if (ae(wt), c = n.memoizedState, c === null) return ut(n), null;
        if (o = (n.flags & 128) !== 0, m = c.rendering, m === null)
          if (o) vs(c, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (m = Qo(e), m !== null) {
                  for (n.flags |= 128, vs(c, !1), e = m.updateQueue, n.updateQueue = e, tl(n, e), n.subtreeFlags = 0, e = i, i = n.child; i !== null; )
                    pp(i, e), i = i.sibling;
                  return se(
                    wt,
                    wt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && xe() > al && (n.flags |= 128, o = !0, vs(c, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Qo(m), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, tl(n, e), vs(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !$e)
                return ut(n), null;
            } else
              2 * xe() - c.renderingStartTime > al && i !== 536870912 && (n.flags |= 128, o = !0, vs(c, !1), n.lanes = 4194304);
          c.isBackwards ? (m.sibling = n.child, n.child = m) : (e = c.last, e !== null ? e.sibling = m : n.child = m, c.last = m);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = xe(), n.sibling = null, e = wt.current, se(wt, o ? e & 1 | 2 : e & 1), n) : (ut(n), null);
      case 22:
      case 23:
        return fr(n), kc(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (ut(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ut(n), i = n.updateQueue, i !== null && tl(n, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== i && (n.flags |= 2048), e !== null && ae(ba), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), ur(Ct), ut(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function a2(e, n) {
    switch (yc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return ur(Ct), Xe(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Re(n), null;
      case 13:
        if (fr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(s(340));
          ts();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ae(wt), null;
      case 4:
        return Xe(), null;
      case 10:
        return ur(n.type), null;
      case 22:
      case 23:
        return fr(n), kc(), e !== null && ae(ba), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return ur(Ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hm(e, n) {
    switch (yc(n), n.tag) {
      case 3:
        ur(Ct), Xe();
        break;
      case 26:
      case 27:
      case 5:
        Re(n);
        break;
      case 4:
        Xe();
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
        fr(n), kc(), e !== null && ae(ba);
        break;
      case 24:
        ur(Ct);
    }
  }
  function ys(e, n) {
    try {
      var i = n.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        i = c;
        do {
          if ((i.tag & e) === e) {
            o = void 0;
            var m = i.create, C = i.inst;
            o = m(), C.destroy = o;
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (N) {
      nt(n, n.return, N);
    }
  }
  function Lr(e, n, i) {
    try {
      var o = n.updateQueue, c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var m = c.next;
        o = m;
        do {
          if ((o.tag & e) === e) {
            var C = o.inst, N = C.destroy;
            if (N !== void 0) {
              C.destroy = void 0, c = n;
              var R = i, H = N;
              try {
                H();
              } catch (Y) {
                nt(
                  c,
                  R,
                  Y
                );
              }
            }
          }
          o = o.next;
        } while (o !== m);
      }
    } catch (Y) {
      nt(n, n.return, Y);
    }
  }
  function qm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var i = e.stateNode;
      try {
        Np(n, i);
      } catch (o) {
        nt(e, e.return, o);
      }
    }
  }
  function Fm(e, n, i) {
    i.props = Sa(
      e.type,
      e.memoizedProps
    ), i.state = e.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (o) {
      nt(e, n, o);
    }
  }
  function bs(e, n) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof i == "function" ? e.refCleanup = i(o) : i.current = o;
      }
    } catch (c) {
      nt(e, n, c);
    }
  }
  function Xn(e, n) {
    var i = e.ref, o = e.refCleanup;
    if (i !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (c) {
          nt(e, n, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (c) {
          nt(e, n, c);
        }
      else i.current = null;
  }
  function Zm(e) {
    var n = e.type, i = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && o.focus();
          break e;
        case "img":
          i.src ? o.src = i.src : i.srcSet && (o.srcset = i.srcSet);
      }
    } catch (c) {
      nt(e, e.return, c);
    }
  }
  function of(e, n, i) {
    try {
      var o = e.stateNode;
      w2(o, e.type, i, n), o[$t] = n;
    } catch (c) {
      nt(e, e.return, c);
    }
  }
  function Gm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zr(e.type) || e.tag === 4;
  }
  function lf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Zr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function uf(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, n) : (n = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, n.appendChild(e), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = hl));
    else if (o !== 4 && (o === 27 && Zr(e.type) && (i = e.stateNode, n = null), e = e.child, e !== null))
      for (uf(e, n, i), e = e.sibling; e !== null; )
        uf(e, n, i), e = e.sibling;
  }
  function nl(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? i.insertBefore(e, n) : i.appendChild(e);
    else if (o !== 4 && (o === 27 && Zr(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (nl(e, n, i), e = e.sibling; e !== null; )
        nl(e, n, i), e = e.sibling;
  }
  function Vm(e) {
    var n = e.stateNode, i = e.memoizedProps;
    try {
      for (var o = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      zt(n, o, i), n[Pt] = e, n[$t] = i;
    } catch (m) {
      nt(e, e.return, m);
    }
  }
  var pr = !1, vt = !1, cf = !1, Ym = typeof WeakSet == "function" ? WeakSet : Set, Mt = null;
  function i2(e, n) {
    if (e = e.containerInfo, jf = _l, e = ap(e), oc(e)) {
      if ("selectionStart" in e)
        var i = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          i = (i = e.ownerDocument) && i.defaultView || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var c = o.anchorOffset, m = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, m.nodeType;
            } catch {
              i = null;
              break e;
            }
            var C = 0, N = -1, R = -1, H = 0, Y = 0, K = e, F = null;
            t: for (; ; ) {
              for (var Z; K !== i || c !== 0 && K.nodeType !== 3 || (N = C + c), K !== m || o !== 0 && K.nodeType !== 3 || (R = C + o), K.nodeType === 3 && (C += K.nodeValue.length), (Z = K.firstChild) !== null; )
                F = K, K = Z;
              for (; ; ) {
                if (K === e) break t;
                if (F === i && ++H === c && (N = C), F === m && ++Y === o && (R = C), (Z = K.nextSibling) !== null) break;
                K = F, F = K.parentNode;
              }
              K = Z;
            }
            i = N === -1 || R === -1 ? null : { start: N, end: R };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (zf = { focusedElem: e, selectionRange: i }, _l = !1, Mt = n; Mt !== null; )
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
                e = void 0, i = n, c = m.memoizedProps, m = m.memoizedState, o = i.stateNode;
                try {
                  var Te = Sa(
                    i.type,
                    c,
                    i.elementType === i.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Te,
                    m
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (_e) {
                  nt(
                    i,
                    i.return,
                    _e
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, i = e.nodeType, i === 9)
                  If(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      If(e);
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
  function Xm(e, n, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Pr(e, i), o & 4 && ys(5, i);
        break;
      case 1:
        if (Pr(e, i), o & 4)
          if (e = i.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (C) {
              nt(i, i.return, C);
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
              nt(
                i,
                i.return,
                C
              );
            }
          }
        o & 64 && qm(i), o & 512 && bs(i, i.return);
        break;
      case 3:
        if (Pr(e, i), o & 64 && (e = i.updateQueue, e !== null)) {
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
            Np(e, n);
          } catch (C) {
            nt(i, i.return, C);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Vm(i);
      case 26:
      case 5:
        Pr(e, i), n === null && o & 4 && Zm(i), o & 512 && bs(i, i.return);
        break;
      case 12:
        Pr(e, i);
        break;
      case 13:
        Pr(e, i), o & 4 && Jm(e, i), o & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = p2.bind(
          null,
          i
        ), k2(e, i))));
        break;
      case 22:
        if (o = i.memoizedState !== null || pr, !o) {
          n = n !== null && n.memoizedState !== null || vt, c = pr;
          var m = vt;
          pr = o, (vt = n) && !m ? Ir(
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
  function $m(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, $m(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && qu(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var st = null, Kt = !1;
  function mr(e, n, i) {
    for (i = i.child; i !== null; )
      Qm(e, n, i), i = i.sibling;
  }
  function Qm(e, n, i) {
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
        var o = st, c = Kt;
        Zr(i.type) && (st = i.stateNode, Kt = !1), mr(
          e,
          n,
          i
        ), Os(i.stateNode), st = o, Kt = c;
        break;
      case 5:
        vt || Xn(i, n);
      case 6:
        if (o = st, c = Kt, st = null, mr(
          e,
          n,
          i
        ), st = o, Kt = c, st !== null)
          if (Kt)
            try {
              (st.nodeType === 9 ? st.body : st.nodeName === "HTML" ? st.ownerDocument.body : st).removeChild(i.stateNode);
            } catch (m) {
              nt(
                i,
                n,
                m
              );
            }
          else
            try {
              st.removeChild(i.stateNode);
            } catch (m) {
              nt(
                i,
                n,
                m
              );
            }
        break;
      case 18:
        st !== null && (Kt ? (e = st, Ig(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), Ls(e)) : Ig(st, i.stateNode));
        break;
      case 4:
        o = st, c = Kt, st = i.stateNode.containerInfo, Kt = !0, mr(
          e,
          n,
          i
        ), st = o, Kt = c;
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
        vt || (Xn(i, n), o = i.stateNode, typeof o.componentWillUnmount == "function" && Fm(
          i,
          n,
          o
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
        vt = (o = vt) || i.memoizedState !== null, mr(
          e,
          n,
          i
        ), vt = o;
        break;
      default:
        mr(
          e,
          n,
          i
        );
    }
  }
  function Jm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ls(e);
      } catch (i) {
        nt(n, n.return, i);
      }
  }
  function s2(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Ym()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Ym()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function ff(e, n) {
    var i = s2(e);
    n.forEach(function(o) {
      var c = m2.bind(null, e, o);
      i.has(o) || (i.add(o), o.then(c, c));
    });
  }
  function ln(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var c = i[o], m = e, C = n, N = C;
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
        Qm(m, C, c), st = null, Kt = !1, m = c.alternate, m !== null && (m.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Km(n, e), n = n.sibling;
  }
  var Ln = null;
  function Km(e, n) {
    var i = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ln(n, e), un(e), o & 4 && (Lr(3, e, e.return), ys(3, e), Lr(5, e, e.return));
        break;
      case 1:
        ln(n, e), un(e), o & 512 && (vt || i === null || Xn(i, i.return)), o & 64 && pr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var c = Ln;
        if (ln(n, e), un(e), o & 512 && (vt || i === null || Xn(i, i.return)), o & 4) {
          var m = i !== null ? i.memoizedState : null;
          if (o = e.memoizedState, i === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, i = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (o) {
                    case "title":
                      m = c.getElementsByTagName("title")[0], (!m || m[Fi] || m[Pt] || m.namespaceURI === "http://www.w3.org/2000/svg" || m.hasAttribute("itemprop")) && (m = c.createElement(o), c.head.insertBefore(
                        m,
                        c.querySelector("head > title")
                      )), zt(m, o, i), m[Pt] = e, Nt(m), o = m;
                      break e;
                    case "link":
                      var C = Vg(
                        "link",
                        "href",
                        c
                      ).get(o + (i.href || ""));
                      if (C) {
                        for (var N = 0; N < C.length; N++)
                          if (m = C[N], m.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && m.getAttribute("rel") === (i.rel == null ? null : i.rel) && m.getAttribute("title") === (i.title == null ? null : i.title) && m.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                            C.splice(N, 1);
                            break t;
                          }
                      }
                      m = c.createElement(o), zt(m, o, i), c.head.appendChild(m);
                      break;
                    case "meta":
                      if (C = Vg(
                        "meta",
                        "content",
                        c
                      ).get(o + (i.content || ""))) {
                        for (N = 0; N < C.length; N++)
                          if (m = C[N], m.getAttribute("content") === (i.content == null ? null : "" + i.content) && m.getAttribute("name") === (i.name == null ? null : i.name) && m.getAttribute("property") === (i.property == null ? null : i.property) && m.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && m.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                            C.splice(N, 1);
                            break t;
                          }
                      }
                      m = c.createElement(o), zt(m, o, i), c.head.appendChild(m);
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  m[Pt] = e, Nt(m), o = m;
                }
                e.stateNode = o;
              } else
                Yg(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Gg(
                c,
                o,
                e.memoizedProps
              );
          else
            m !== o ? (m === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : m.count--, o === null ? Yg(
              c,
              e.type,
              e.stateNode
            ) : Gg(
              c,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && of(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        ln(n, e), un(e), o & 512 && (vt || i === null || Xn(i, i.return)), i !== null && o & 4 && of(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (ln(n, e), un(e), o & 512 && (vt || i === null || Xn(i, i.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Xa(c, "");
          } catch (Z) {
            nt(e, e.return, Z);
          }
        }
        o & 4 && e.stateNode != null && (c = e.memoizedProps, of(
          e,
          c,
          i !== null ? i.memoizedProps : c
        )), o & 1024 && (cf = !0);
        break;
      case 6:
        if (ln(n, e), un(e), o & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          o = e.memoizedProps, i = e.stateNode;
          try {
            i.nodeValue = o;
          } catch (Z) {
            nt(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (vl = null, c = Ln, Ln = ml(n.containerInfo), ln(n, e), Ln = c, un(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Ls(n.containerInfo);
          } catch (Z) {
            nt(e, e.return, Z);
          }
        cf && (cf = !1, Wm(e));
        break;
      case 4:
        o = Ln, Ln = ml(
          e.stateNode.containerInfo
        ), ln(n, e), un(e), Ln = o;
        break;
      case 12:
        ln(n, e), un(e);
        break;
      case 13:
        ln(n, e), un(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (vf = xe()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, ff(e, o)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var R = i !== null && i.memoizedState !== null, H = pr, Y = vt;
        if (pr = H || c, vt = Y || R, ln(n, e), vt = Y, pr = H, un(e), o & 8192)
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
                  nt(R, R.return, Z);
                }
              }
            } else if (n.tag === 6) {
              if (i === null) {
                R = n;
                try {
                  R.stateNode.nodeValue = c ? "" : R.memoizedProps;
                } catch (Z) {
                  nt(R, R.return, Z);
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
        o & 4 && (o = e.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, ff(e, i))));
        break;
      case 19:
        ln(n, e), un(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, ff(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ln(n, e), un(e);
    }
  }
  function un(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var i, o = e.return; o !== null; ) {
          if (Gm(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(s(160));
        switch (i.tag) {
          case 27:
            var c = i.stateNode, m = lf(e);
            nl(e, m, c);
            break;
          case 5:
            var C = i.stateNode;
            i.flags & 32 && (Xa(C, ""), i.flags &= -33);
            var N = lf(e);
            nl(e, N, C);
            break;
          case 3:
          case 4:
            var R = i.stateNode.containerInfo, H = lf(e);
            uf(
              e,
              H,
              R
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (Y) {
        nt(e, e.return, Y);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Wm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Wm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Pr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Xm(e, n.alternate, n), n = n.sibling;
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
          typeof i.componentWillUnmount == "function" && Fm(
            n,
            n.return,
            i
          ), xa(n);
          break;
        case 27:
          Os(n.stateNode);
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
      var o = n.alternate, c = e, m = n, C = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Ir(
            c,
            m,
            i
          ), ys(4, m);
          break;
        case 1:
          if (Ir(
            c,
            m,
            i
          ), o = m, c = o.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (H) {
              nt(o, o.return, H);
            }
          if (o = m, c = o.updateQueue, c !== null) {
            var N = o.stateNode;
            try {
              var R = c.shared.hiddenCallbacks;
              if (R !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < R.length; c++)
                  Op(R[c], N);
            } catch (H) {
              nt(o, o.return, H);
            }
          }
          i && C & 64 && qm(m), bs(m, m.return);
          break;
        case 27:
          Vm(m);
        case 26:
        case 5:
          Ir(
            c,
            m,
            i
          ), i && o === null && C & 4 && Zm(m), bs(m, m.return);
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
          ), i && C & 4 && Jm(c, m);
          break;
        case 22:
          m.memoizedState === null && Ir(
            c,
            m,
            i
          ), bs(m, m.return);
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
  function df(e, n) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && as(i));
  }
  function hf(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && as(e));
  }
  function $n(e, n, i, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        eg(
          e,
          n,
          i,
          o
        ), n = n.sibling;
  }
  function eg(e, n, i, o) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        $n(
          e,
          n,
          i,
          o
        ), c & 2048 && ys(9, n);
        break;
      case 1:
        $n(
          e,
          n,
          i,
          o
        );
        break;
      case 3:
        $n(
          e,
          n,
          i,
          o
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && as(e)));
        break;
      case 12:
        if (c & 2048) {
          $n(
            e,
            n,
            i,
            o
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
            nt(n, n.return, R);
          }
        } else
          $n(
            e,
            n,
            i,
            o
          );
        break;
      case 13:
        $n(
          e,
          n,
          i,
          o
        );
        break;
      case 23:
        break;
      case 22:
        m = n.stateNode, C = n.alternate, n.memoizedState !== null ? m._visibility & 2 ? $n(
          e,
          n,
          i,
          o
        ) : _s(e, n) : m._visibility & 2 ? $n(
          e,
          n,
          i,
          o
        ) : (m._visibility |= 2, hi(
          e,
          n,
          i,
          o,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && df(C, n);
        break;
      case 24:
        $n(
          e,
          n,
          i,
          o
        ), c & 2048 && hf(n.alternate, n);
        break;
      default:
        $n(
          e,
          n,
          i,
          o
        );
    }
  }
  function hi(e, n, i, o, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var m = e, C = n, N = i, R = o, H = C.flags;
      switch (C.tag) {
        case 0:
        case 11:
        case 15:
          hi(
            m,
            C,
            N,
            R,
            c
          ), ys(8, C);
          break;
        case 23:
          break;
        case 22:
          var Y = C.stateNode;
          C.memoizedState !== null ? Y._visibility & 2 ? hi(
            m,
            C,
            N,
            R,
            c
          ) : _s(
            m,
            C
          ) : (Y._visibility |= 2, hi(
            m,
            C,
            N,
            R,
            c
          )), c && H & 2048 && df(
            C.alternate,
            C
          );
          break;
        case 24:
          hi(
            m,
            C,
            N,
            R,
            c
          ), c && H & 2048 && hf(C.alternate, C);
          break;
        default:
          hi(
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
  function _s(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var i = e, o = n, c = o.flags;
        switch (o.tag) {
          case 22:
            _s(i, o), c & 2048 && df(
              o.alternate,
              o
            );
            break;
          case 24:
            _s(i, o), c & 2048 && hf(o.alternate, o);
            break;
          default:
            _s(i, o);
        }
        n = n.sibling;
      }
  }
  var Ss = 8192;
  function pi(e) {
    if (e.subtreeFlags & Ss)
      for (e = e.child; e !== null; )
        tg(e), e = e.sibling;
  }
  function tg(e) {
    switch (e.tag) {
      case 26:
        pi(e), e.flags & Ss && e.memoizedState !== null && G2(
          Ln,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        pi(e);
        break;
      case 3:
      case 4:
        var n = Ln;
        Ln = ml(e.stateNode.containerInfo), pi(e), Ln = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Ss, Ss = 16777216, pi(e), Ss = n) : pi(e));
        break;
      default:
        pi(e);
    }
  }
  function ng(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function xs(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          Mt = o, ag(
            o,
            e
          );
        }
      ng(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        rg(e), e = e.sibling;
  }
  function rg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        xs(e), e.flags & 2048 && Lr(9, e, e.return);
        break;
      case 3:
        xs(e);
        break;
      case 12:
        xs(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, rl(e)) : xs(e);
        break;
      default:
        xs(e);
    }
  }
  function rl(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          Mt = o, ag(
            o,
            e
          );
        }
      ng(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Lr(8, n, n.return), rl(n);
          break;
        case 22:
          i = n.stateNode, i._visibility & 2 && (i._visibility &= -3, rl(n));
          break;
        default:
          rl(n);
      }
      e = e.sibling;
    }
  }
  function ag(e, n) {
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
            var o = i.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          as(i.memoizedState.cache);
      }
      if (o = i.child, o !== null) o.return = i, Mt = o;
      else
        e: for (i = e; Mt !== null; ) {
          o = Mt;
          var c = o.sibling, m = o.return;
          if ($m(o), o === i) {
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
  var o2 = {
    getCacheForType: function(e) {
      var n = It(Ct), i = n.data.get(e);
      return i === void 0 && (i = e(), n.data.set(e, i)), i;
    }
  }, l2 = typeof WeakMap == "function" ? WeakMap : Map, Qe = 0, rt = null, Be = null, Ge = 0, Je = 0, cn = null, Br = !1, mi = !1, pf = !1, gr = 0, ht = 0, Ur = 0, Ea = 0, mf = 0, On = 0, gi = 0, Es = null, Wt = null, gf = !1, vf = 0, al = 1 / 0, il = null, Hr = null, jt = 0, qr = null, vi = null, yi = 0, yf = 0, bf = null, ig = null, Cs = 0, _f = null;
  function fn() {
    if ((Qe & 2) !== 0 && Ge !== 0)
      return Ge & -Ge;
    if (U.T !== null) {
      var e = ii;
      return e !== 0 ? e : Tf();
    }
    return Sh();
  }
  function sg() {
    On === 0 && (On = (Ge & 536870912) === 0 || $e ? Ua() : 536870912);
    var e = Tn.current;
    return e !== null && (e.flags |= 32), On;
  }
  function dn(e, n, i) {
    (e === rt && (Je === 2 || Je === 9) || e.cancelPendingCommit !== null) && (bi(e, 0), Fr(
      e,
      Ge,
      On,
      !1
    )), qi(e, i), ((Qe & 2) === 0 || e !== rt) && (e === rt && ((Qe & 2) === 0 && (Ea |= i), ht === 4 && Fr(
      e,
      Ge,
      On,
      !1
    )), Qn(e));
  }
  function og(e, n, i) {
    if ((Qe & 6) !== 0) throw Error(s(327));
    var o = !i && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Xt(e, n), c = o ? f2(e, n) : Ef(e, n, !0), m = o;
    do {
      if (c === 0) {
        mi && !o && Fr(e, n, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, m && !u2(i)) {
          c = Ef(e, n, !1), m = !1;
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
              c = Es;
              var R = N.current.memoizedState.isDehydrated;
              if (R && (bi(N, C).flags |= 256), C = Ef(
                N,
                C,
                !1
              ), C !== 2) {
                if (pf && !R) {
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
          bi(e, 0), Fr(e, n, 0, !0);
          break;
        }
        e: {
          switch (o = e, m = c, m) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Fr(
                o,
                n,
                On,
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
          if ((n & 62914560) === n && (c = vf + 300 - xe(), 10 < c)) {
            if (Fr(
              o,
              n,
              On,
              !Br
            ), Ft(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Lg(
              lg.bind(
                null,
                o,
                i,
                Wt,
                il,
                gf,
                n,
                On,
                Ea,
                gi,
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
          lg(
            o,
            i,
            Wt,
            il,
            gf,
            n,
            On,
            Ea,
            gi,
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
  function lg(e, n, i, o, c, m, C, N, R, H, Y, K, F, Z) {
    if (e.timeoutHandle = -1, K = n.subtreeFlags, (K & 8192 || (K & 16785408) === 16785408) && (Ms = { stylesheets: null, count: 0, unsuspend: Z2 }, tg(n), K = V2(), K !== null)) {
      e.cancelPendingCommit = K(
        mg.bind(
          null,
          e,
          n,
          m,
          i,
          o,
          c,
          C,
          N,
          R,
          Y,
          1,
          F,
          Z
        )
      ), Fr(e, m, C, !H);
      return;
    }
    mg(
      e,
      n,
      m,
      i,
      o,
      c,
      C,
      N,
      R
    );
  }
  function u2(e) {
    for (var n = e; ; ) {
      var i = n.tag;
      if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var o = 0; o < i.length; o++) {
          var c = i[o], m = c.getSnapshot;
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
  function Fr(e, n, i, o) {
    n &= ~mf, n &= ~Ea, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var m = 31 - qt(c), C = 1 << m;
      o[m] = -1, c &= ~C;
    }
    i !== 0 && bh(e, i, n);
  }
  function sl() {
    return (Qe & 6) === 0 ? (ws(0), !1) : !0;
  }
  function Sf() {
    if (Be !== null) {
      if (Je === 0)
        var e = Be.return;
      else
        e = Be, lr = va = null, Pc(e), fi = null, ms = 0, e = Be;
      for (; e !== null; )
        Hm(e.alternate, e), e = e.return;
      Be = null;
    }
  }
  function bi(e, n) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, T2(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), Sf(), rt = e, Be = i = ir(e.current, null), Ge = n, Je = 0, cn = null, Br = !1, mi = Xt(e, n), pf = !1, gi = On = mf = Ea = Ur = ht = 0, Wt = Es = null, gf = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var c = 31 - qt(o), m = 1 << c;
        n |= e[c], o &= ~m;
      }
    return gr = n, Oo(), i;
  }
  function ug(e, n) {
    ze = null, U.H = Yo, n === ss || n === Po ? (n = Ap(), Je = 3) : n === Ep ? (n = Ap(), Je = 4) : Je = n === Tm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, cn = n, Be === null && (ht = 1, Ko(
      e,
      En(n, e.current)
    ));
  }
  function cg() {
    var e = U.H;
    return U.H = Yo, e === null ? Yo : e;
  }
  function fg() {
    var e = U.A;
    return U.A = o2, e;
  }
  function xf() {
    ht = 4, Br || (Ge & 4194048) !== Ge && Tn.current !== null || (mi = !0), (Ur & 134217727) === 0 && (Ea & 134217727) === 0 || rt === null || Fr(
      rt,
      Ge,
      On,
      !1
    );
  }
  function Ef(e, n, i) {
    var o = Qe;
    Qe |= 2;
    var c = cg(), m = fg();
    (rt !== e || Ge !== n) && (il = null, bi(e, n)), n = !1;
    var C = ht;
    e: do
      try {
        if (Je !== 0 && Be !== null) {
          var N = Be, R = cn;
          switch (Je) {
            case 8:
              Sf(), C = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Tn.current === null && (n = !0);
              var H = Je;
              if (Je = 0, cn = null, _i(e, N, R, H), i && mi) {
                C = 0;
                break e;
              }
              break;
            default:
              H = Je, Je = 0, cn = null, _i(e, N, R, H);
          }
        }
        c2(), C = ht;
        break;
      } catch (Y) {
        ug(e, Y);
      }
    while (!0);
    return n && e.shellSuspendCounter++, lr = va = null, Qe = o, U.H = c, U.A = m, Be === null && (rt = null, Ge = 0, Oo()), C;
  }
  function c2() {
    for (; Be !== null; ) dg(Be);
  }
  function f2(e, n) {
    var i = Qe;
    Qe |= 2;
    var o = cg(), c = fg();
    rt !== e || Ge !== n ? (il = null, al = xe() + 500, bi(e, n)) : mi = Xt(
      e,
      n
    );
    e: do
      try {
        if (Je !== 0 && Be !== null) {
          n = Be;
          var m = cn;
          t: switch (Je) {
            case 1:
              Je = 0, cn = null, _i(e, n, m, 1);
              break;
            case 2:
            case 9:
              if (Cp(m)) {
                Je = 0, cn = null, hg(n);
                break;
              }
              n = function() {
                Je !== 2 && Je !== 9 || rt !== e || (Je = 7), Qn(e);
              }, m.then(n, n);
              break e;
            case 3:
              Je = 7;
              break e;
            case 4:
              Je = 5;
              break e;
            case 7:
              Cp(m) ? (Je = 0, cn = null, hg(n)) : (Je = 0, cn = null, _i(e, n, m, 7));
              break;
            case 5:
              var C = null;
              switch (Be.tag) {
                case 26:
                  C = Be.memoizedState;
                case 5:
                case 27:
                  var N = Be;
                  if (!C || Xg(C)) {
                    Je = 0, cn = null;
                    var R = N.sibling;
                    if (R !== null) Be = R;
                    else {
                      var H = N.return;
                      H !== null ? (Be = H, ol(H)) : Be = null;
                    }
                    break t;
                  }
              }
              Je = 0, cn = null, _i(e, n, m, 5);
              break;
            case 6:
              Je = 0, cn = null, _i(e, n, m, 6);
              break;
            case 8:
              Sf(), ht = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        d2();
        break;
      } catch (Y) {
        ug(e, Y);
      }
    while (!0);
    return lr = va = null, U.H = o, U.A = c, Qe = i, Be !== null ? 0 : (rt = null, Ge = 0, Oo(), ht);
  }
  function d2() {
    for (; Be !== null && !be(); )
      dg(Be);
  }
  function dg(e) {
    var n = Bm(e.alternate, e, gr);
    e.memoizedProps = e.pendingProps, n === null ? ol(e) : Be = n;
  }
  function hg(e) {
    var n = e, i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Rm(
          i,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ge
        );
        break;
      case 11:
        n = Rm(
          i,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ge
        );
        break;
      case 5:
        Pc(n);
      default:
        Hm(i, n), n = Be = pp(n, gr), n = Bm(i, n, gr);
    }
    e.memoizedProps = e.pendingProps, n === null ? ol(e) : Be = n;
  }
  function _i(e, n, i, o) {
    lr = va = null, Pc(n), fi = null, ms = 0;
    var c = n.return;
    try {
      if (t2(
        e,
        c,
        n,
        i,
        Ge
      )) {
        ht = 1, Ko(
          e,
          En(i, e.current)
        ), Be = null;
        return;
      }
    } catch (m) {
      if (c !== null) throw Be = c, m;
      ht = 1, Ko(
        e,
        En(i, e.current)
      ), Be = null;
      return;
    }
    n.flags & 32768 ? ($e || o === 1 ? e = !0 : mi || (Ge & 536870912) !== 0 ? e = !1 : (Br = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Tn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), pg(n, e)) : ol(n);
  }
  function ol(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        pg(
          n,
          Br
        );
        return;
      }
      e = n.return;
      var i = r2(
        n.alternate,
        n,
        gr
      );
      if (i !== null) {
        Be = i;
        return;
      }
      if (n = n.sibling, n !== null) {
        Be = n;
        return;
      }
      Be = n = e;
    } while (n !== null);
    ht === 0 && (ht = 5);
  }
  function pg(e, n) {
    do {
      var i = a2(e.alternate, e);
      if (i !== null) {
        i.flags &= 32767, Be = i;
        return;
      }
      if (i = e.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !n && (e = e.sibling, e !== null)) {
        Be = e;
        return;
      }
      Be = e = i;
    } while (e !== null);
    ht = 6, Be = null;
  }
  function mg(e, n, i, o, c, m, C, N, R) {
    e.cancelPendingCommit = null;
    do
      ll();
    while (jt !== 0);
    if ((Qe & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (m = n.lanes | n.childLanes, m |= dc, Z1(
        e,
        i,
        m,
        C,
        N,
        R
      ), e === rt && (Be = rt = null, Ge = 0), vi = n, qr = e, yi = i, yf = m, bf = c, ig = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, g2(de, function() {
        return _g(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = U.T, U.T = null, c = te.p, te.p = 2, C = Qe, Qe |= 4;
        try {
          i2(e, n, i);
        } finally {
          Qe = C, te.p = c, U.T = o;
        }
      }
      jt = 1, gg(), vg(), yg();
    }
  }
  function gg() {
    if (jt === 1) {
      jt = 0;
      var e = qr, n = vi, i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        i = U.T, U.T = null;
        var o = te.p;
        te.p = 2;
        var c = Qe;
        Qe |= 4;
        try {
          Km(n, e);
          var m = zf, C = ap(e.containerInfo), N = m.focusedElem, R = m.selectionRange;
          if (C !== N && N && N.ownerDocument && rp(
            N.ownerDocument.documentElement,
            N
          )) {
            if (R !== null && oc(N)) {
              var H = R.start, Y = R.end;
              if (Y === void 0 && (Y = H), "selectionStart" in N)
                N.selectionStart = H, N.selectionEnd = Math.min(
                  Y,
                  N.value.length
                );
              else {
                var K = N.ownerDocument || document, F = K && K.defaultView || window;
                if (F.getSelection) {
                  var Z = F.getSelection(), Te = N.textContent.length, _e = Math.min(R.start, Te), et = R.end === void 0 ? _e : Math.min(R.end, Te);
                  !Z.extend && _e > et && (C = et, et = _e, _e = C);
                  var L = np(
                    N,
                    _e
                  ), z = np(
                    N,
                    et
                  );
                  if (L && z && (Z.rangeCount !== 1 || Z.anchorNode !== L.node || Z.anchorOffset !== L.offset || Z.focusNode !== z.node || Z.focusOffset !== z.offset)) {
                    var I = K.createRange();
                    I.setStart(L.node, L.offset), Z.removeAllRanges(), _e > et ? (Z.addRange(I), Z.extend(z.node, z.offset)) : (I.setEnd(z.node, z.offset), Z.addRange(I));
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
              var Q = K[N];
              Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
            }
          }
          _l = !!jf, zf = jf = null;
        } finally {
          Qe = c, te.p = o, U.T = i;
        }
      }
      e.current = n, jt = 2;
    }
  }
  function vg() {
    if (jt === 2) {
      jt = 0;
      var e = qr, n = vi, i = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || i) {
        i = U.T, U.T = null;
        var o = te.p;
        te.p = 2;
        var c = Qe;
        Qe |= 4;
        try {
          Xm(e, n.alternate, n);
        } finally {
          Qe = c, te.p = o, U.T = i;
        }
      }
      jt = 3;
    }
  }
  function yg() {
    if (jt === 4 || jt === 3) {
      jt = 0, Se();
      var e = qr, n = vi, i = yi, o = ig;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? jt = 5 : (jt = 0, vi = qr = null, bg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Hr = null), Uu(i), n = n.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
        try {
          mt.onCommitFiberRoot(
            tr,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        n = U.T, c = te.p, te.p = 2, U.T = null;
        try {
          for (var m = e.onRecoverableError, C = 0; C < o.length; C++) {
            var N = o[C];
            m(N.value, {
              componentStack: N.stack
            });
          }
        } finally {
          U.T = n, te.p = c;
        }
      }
      (yi & 3) !== 0 && ll(), Qn(e), c = e.pendingLanes, (i & 4194090) !== 0 && (c & 42) !== 0 ? e === _f ? Cs++ : (Cs = 0, _f = e) : Cs = 0, ws(0);
    }
  }
  function bg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, as(n)));
  }
  function ll(e) {
    return gg(), vg(), yg(), _g();
  }
  function _g() {
    if (jt !== 5) return !1;
    var e = qr, n = yf;
    yf = 0;
    var i = Uu(yi), o = U.T, c = te.p;
    try {
      te.p = 32 > i ? 32 : i, U.T = null, i = bf, bf = null;
      var m = qr, C = yi;
      if (jt = 0, vi = qr = null, yi = 0, (Qe & 6) !== 0) throw Error(s(331));
      var N = Qe;
      if (Qe |= 4, rg(m.current), eg(
        m,
        m.current,
        C,
        i
      ), Qe = N, ws(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(tr, m);
        } catch {
        }
      return !0;
    } finally {
      te.p = c, U.T = o, bg(e, n);
    }
  }
  function Sg(e, n, i) {
    n = En(i, n), n = Jc(e.stateNode, n, 2), e = kr(e, n, 2), e !== null && (qi(e, 2), Qn(e));
  }
  function nt(e, n, i) {
    if (e.tag === 3)
      Sg(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Sg(
            n,
            e,
            i
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Hr === null || !Hr.has(o))) {
            e = En(i, e), i = wm(2), o = kr(n, i, 2), o !== null && (Am(
              i,
              o,
              n,
              e
            ), qi(o, 2), Qn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Cf(e, n, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new l2();
      var c = /* @__PURE__ */ new Set();
      o.set(n, c);
    } else
      c = o.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(n, c));
    c.has(i) || (pf = !0, c.add(i), e = h2.bind(null, e, n, i), n.then(e, e));
  }
  function h2(e, n, i) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, rt === e && (Ge & i) === i && (ht === 4 || ht === 3 && (Ge & 62914560) === Ge && 300 > xe() - vf ? (Qe & 2) === 0 && bi(e, 0) : mf |= i, gi === Ge && (gi = 0)), Qn(e);
  }
  function xg(e, n) {
    n === 0 && (n = yh()), e = ti(e, n), e !== null && (qi(e, n), Qn(e));
  }
  function p2(e) {
    var n = e.memoizedState, i = 0;
    n !== null && (i = n.retryLane), xg(e, i);
  }
  function m2(e, n) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, c = e.memoizedState;
        c !== null && (i = c.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    o !== null && o.delete(n), xg(e, i);
  }
  function g2(e, n) {
    return re(e, n);
  }
  var ul = null, Si = null, wf = !1, cl = !1, Af = !1, Ca = 0;
  function Qn(e) {
    e !== Si && e.next === null && (Si === null ? ul = Si = e : Si = Si.next = e), cl = !0, wf || (wf = !0, y2());
  }
  function ws(e, n) {
    if (!Af && cl) {
      Af = !0;
      do
        for (var i = !1, o = ul; o !== null; ) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var m = 0;
            else {
              var C = o.suspendedLanes, N = o.pingedLanes;
              m = (1 << 31 - qt(42 | e) + 1) - 1, m &= c & ~(C & ~N), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
            }
            m !== 0 && (i = !0, Ag(o, m));
          } else
            m = Ge, m = Ft(
              o,
              o === rt ? m : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (m & 3) === 0 || Xt(o, m) || (i = !0, Ag(o, m));
          o = o.next;
        }
      while (i);
      Af = !1;
    }
  }
  function v2() {
    Eg();
  }
  function Eg() {
    cl = wf = !1;
    var e = 0;
    Ca !== 0 && (A2() && (e = Ca), Ca = 0);
    for (var n = xe(), i = null, o = ul; o !== null; ) {
      var c = o.next, m = Cg(o, n);
      m === 0 ? (o.next = null, i === null ? ul = c : i.next = c, c === null && (Si = i)) : (i = o, (e !== 0 || (m & 3) !== 0) && (cl = !0)), o = c;
    }
    ws(e);
  }
  function Cg(e, n) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, m = e.pendingLanes & -62914561; 0 < m; ) {
      var C = 31 - qt(m), N = 1 << C, R = c[C];
      R === -1 ? ((N & i) === 0 || (N & o) !== 0) && (c[C] = go(N, n)) : R <= n && (e.expiredLanes |= N), m &= ~N;
    }
    if (n = rt, i = Ge, i = Ft(
      e,
      e === n ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, i === 0 || e === n && (Je === 2 || Je === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && ne(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || Xt(e, i)) {
      if (n = i & -i, n === e.callbackPriority) return n;
      switch (o !== null && ne(o), Uu(i)) {
        case 2:
        case 8:
          i = he;
          break;
        case 32:
          i = de;
          break;
        case 268435456:
          i = Ae;
          break;
        default:
          i = de;
      }
      return o = wg.bind(null, e), i = re(i, o), e.callbackPriority = n, e.callbackNode = i, n;
    }
    return o !== null && o !== null && ne(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function wg(e, n) {
    if (jt !== 0 && jt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (ll() && e.callbackNode !== i)
      return null;
    var o = Ge;
    return o = Ft(
      e,
      e === rt ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (og(e, o, n), Cg(e, xe()), e.callbackNode != null && e.callbackNode === i ? wg.bind(null, e) : null);
  }
  function Ag(e, n) {
    if (ll()) return null;
    og(e, n, !0);
  }
  function y2() {
    O2(function() {
      (Qe & 6) !== 0 ? re(
        Fe,
        v2
      ) : Eg();
    });
  }
  function Tf() {
    return Ca === 0 && (Ca = Ua()), Ca;
  }
  function Tg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : So("" + e);
  }
  function Og(e, n) {
    var i = n.ownerDocument.createElement("input");
    return i.name = n.name, i.value = n.value, e.id && i.setAttribute("form", e.id), n.parentNode.insertBefore(i, n), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function b2(e, n, i, o, c) {
    if (n === "submit" && i && i.stateNode === c) {
      var m = Tg(
        (c[$t] || null).action
      ), C = o.submitter;
      C && (n = (n = C[$t] || null) ? Tg(n.formAction) : C.getAttribute("formAction"), n !== null && (m = n, C = null));
      var N = new wo(
        "action",
        "action",
        null,
        o,
        c
      );
      e.push({
        event: N,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (Ca !== 0) {
                  var R = C ? Og(c, C) : new FormData(c);
                  Vc(
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
                typeof m == "function" && (N.preventDefault(), R = C ? Og(c, C) : new FormData(c), Vc(
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
  for (var Of = 0; Of < fc.length; Of++) {
    var Nf = fc[Of], _2 = Nf.toLowerCase(), S2 = Nf[0].toUpperCase() + Nf.slice(1);
    zn(
      _2,
      "on" + S2
    );
  }
  zn(op, "onAnimationEnd"), zn(lp, "onAnimationIteration"), zn(up, "onAnimationStart"), zn("dblclick", "onDoubleClick"), zn("focusin", "onFocus"), zn("focusout", "onBlur"), zn(Ib, "onTransitionRun"), zn(Bb, "onTransitionStart"), zn(Ub, "onTransitionCancel"), zn(cp, "onTransitionEnd"), Ga("onMouseEnter", ["mouseout", "mouseover"]), Ga("onMouseLeave", ["mouseout", "mouseover"]), Ga("onPointerEnter", ["pointerout", "pointerover"]), Ga("onPointerLeave", ["pointerout", "pointerover"]), la(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), la(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), la("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), la(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), la(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), la(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var As = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), x2 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(As)
  );
  function Ng(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i], c = o.event;
      o = o.listeners;
      e: {
        var m = void 0;
        if (n)
          for (var C = o.length - 1; 0 <= C; C--) {
            var N = o[C], R = N.instance, H = N.currentTarget;
            if (N = N.listener, R !== m && c.isPropagationStopped())
              break e;
            m = N, c.currentTarget = H;
            try {
              m(c);
            } catch (Y) {
              Jo(Y);
            }
            c.currentTarget = null, m = R;
          }
        else
          for (C = 0; C < o.length; C++) {
            if (N = o[C], R = N.instance, H = N.currentTarget, N = N.listener, R !== m && c.isPropagationStopped())
              break e;
            m = N, c.currentTarget = H;
            try {
              m(c);
            } catch (Y) {
              Jo(Y);
            }
            c.currentTarget = null, m = R;
          }
      }
    }
  }
  function Ue(e, n) {
    var i = n[Hu];
    i === void 0 && (i = n[Hu] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    i.has(o) || (Dg(n, e, 2, !1), i.add(o));
  }
  function Df(e, n, i) {
    var o = 0;
    n && (o |= 4), Dg(
      i,
      e,
      o,
      n
    );
  }
  var fl = "_reactListening" + Math.random().toString(36).slice(2);
  function Mf(e) {
    if (!e[fl]) {
      e[fl] = !0, Eh.forEach(function(i) {
        i !== "selectionchange" && (x2.has(i) || Df(i, !1, e), Df(i, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[fl] || (n[fl] = !0, Df("selectionchange", !1, n));
    }
  }
  function Dg(e, n, i, o) {
    switch (ev(n)) {
      case 2:
        var c = $2;
        break;
      case 8:
        c = Q2;
        break;
      default:
        c = Gf;
    }
    i = c.bind(
      null,
      n,
      i,
      e
    ), c = void 0, !Ku || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), o ? c !== void 0 ? e.addEventListener(n, i, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, i, !0) : c !== void 0 ? e.addEventListener(n, i, {
      passive: c
    }) : e.addEventListener(n, i, !1);
  }
  function kf(e, n, i, o, c) {
    var m = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var C = o.tag;
        if (C === 3 || C === 4) {
          var N = o.stateNode.containerInfo;
          if (N === c) break;
          if (C === 4)
            for (C = o.return; C !== null; ) {
              var R = C.tag;
              if ((R === 3 || R === 4) && C.stateNode.containerInfo === c)
                return;
              C = C.return;
            }
          for (; N !== null; ) {
            if (C = qa(N), C === null) return;
            if (R = C.tag, R === 5 || R === 6 || R === 26 || R === 27) {
              o = m = C;
              continue e;
            }
            N = N.parentNode;
          }
        }
        o = o.return;
      }
    Ph(function() {
      var H = m, Y = Qu(i), K = [];
      e: {
        var F = fp.get(e);
        if (F !== void 0) {
          var Z = wo, Te = e;
          switch (e) {
            case "keypress":
              if (Eo(i) === 0) break e;
            case "keydown":
            case "keyup":
              Z = gb;
              break;
            case "focusin":
              Te = "focus", Z = nc;
              break;
            case "focusout":
              Te = "blur", Z = nc;
              break;
            case "beforeblur":
            case "afterblur":
              Z = nc;
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
              Z = Uh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = ab;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = bb;
              break;
            case op:
            case lp:
            case up:
              Z = ob;
              break;
            case cp:
              Z = Sb;
              break;
            case "scroll":
            case "scrollend":
              Z = nb;
              break;
            case "wheel":
              Z = Eb;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = ub;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = qh;
              break;
            case "toggle":
            case "beforetoggle":
              Z = wb;
          }
          var _e = (n & 4) !== 0, et = !_e && (e === "scroll" || e === "scrollend"), L = _e ? F !== null ? F + "Capture" : null : F;
          _e = [];
          for (var z = H, I; z !== null; ) {
            var Q = z;
            if (I = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || I === null || L === null || (Q = Gi(z, L), Q != null && _e.push(
              Ts(z, Q, I)
            )), et) break;
            z = z.return;
          }
          0 < _e.length && (F = new Z(
            F,
            Te,
            null,
            i,
            Y
          ), K.push({ event: F, listeners: _e }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (F = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", F && i !== $u && (Te = i.relatedTarget || i.fromElement) && (qa(Te) || Te[Ha]))
            break e;
          if ((Z || F) && (F = Y.window === Y ? Y : (F = Y.ownerDocument) ? F.defaultView || F.parentWindow : window, Z ? (Te = i.relatedTarget || i.toElement, Z = H, Te = Te ? qa(Te) : null, Te !== null && (et = u(Te), _e = Te.tag, Te !== et || _e !== 5 && _e !== 27 && _e !== 6) && (Te = null)) : (Z = null, Te = H), Z !== Te)) {
            if (_e = Uh, Q = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (_e = qh, Q = "onPointerLeave", L = "onPointerEnter", z = "pointer"), et = Z == null ? F : Zi(Z), I = Te == null ? F : Zi(Te), F = new _e(
              Q,
              z + "leave",
              Z,
              i,
              Y
            ), F.target = et, F.relatedTarget = I, Q = null, qa(Y) === H && (_e = new _e(
              L,
              z + "enter",
              Te,
              i,
              Y
            ), _e.target = I, _e.relatedTarget = et, Q = _e), et = Q, Z && Te)
              t: {
                for (_e = Z, L = Te, z = 0, I = _e; I; I = xi(I))
                  z++;
                for (I = 0, Q = L; Q; Q = xi(Q))
                  I++;
                for (; 0 < z - I; )
                  _e = xi(_e), z--;
                for (; 0 < I - z; )
                  L = xi(L), I--;
                for (; z--; ) {
                  if (_e === L || L !== null && _e === L.alternate)
                    break t;
                  _e = xi(_e), L = xi(L);
                }
                _e = null;
              }
            else _e = null;
            Z !== null && Mg(
              K,
              F,
              Z,
              _e,
              !1
            ), Te !== null && et !== null && Mg(
              K,
              et,
              Te,
              _e,
              !0
            );
          }
        }
        e: {
          if (F = H ? Zi(H) : window, Z = F.nodeName && F.nodeName.toLowerCase(), Z === "select" || Z === "input" && F.type === "file")
            var ce = Qh;
          else if (Xh(F))
            if (Jh)
              ce = zb;
            else {
              ce = Rb;
              var Ie = kb;
            }
          else
            Z = F.nodeName, !Z || Z.toLowerCase() !== "input" || F.type !== "checkbox" && F.type !== "radio" ? H && Xu(H.elementType) && (ce = Qh) : ce = jb;
          if (ce && (ce = ce(e, H))) {
            $h(
              K,
              ce,
              i,
              Y
            );
            break e;
          }
          Ie && Ie(e, F, H), e === "focusout" && H && F.type === "number" && H.memoizedProps.value != null && Yu(F, "number", F.value);
        }
        switch (Ie = H ? Zi(H) : window, e) {
          case "focusin":
            (Xh(Ie) || Ie.contentEditable === "true") && (Ka = Ie, lc = H, Wi = null);
            break;
          case "focusout":
            Wi = lc = Ka = null;
            break;
          case "mousedown":
            uc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            uc = !1, ip(K, i, Y);
            break;
          case "selectionchange":
            if (Pb) break;
          case "keydown":
          case "keyup":
            ip(K, i, Y);
        }
        var pe;
        if (ac)
          e: {
            switch (e) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          Ja ? Vh(e, i) && (Ee = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (Fh && i.locale !== "ko" && (Ja || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Ja && (pe = Ih()) : (Or = Y, Wu = "value" in Or ? Or.value : Or.textContent, Ja = !0)), Ie = dl(H, Ee), 0 < Ie.length && (Ee = new Hh(
          Ee,
          e,
          null,
          i,
          Y
        ), K.push({ event: Ee, listeners: Ie }), pe ? Ee.data = pe : (pe = Yh(i), pe !== null && (Ee.data = pe)))), (pe = Tb ? Ob(e, i) : Nb(e, i)) && (Ee = dl(H, "onBeforeInput"), 0 < Ee.length && (Ie = new Hh(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          Y
        ), K.push({
          event: Ie,
          listeners: Ee
        }), Ie.data = pe)), b2(
          K,
          e,
          H,
          i,
          Y
        );
      }
      Ng(K, n);
    });
  }
  function Ts(e, n, i) {
    return {
      instance: e,
      listener: n,
      currentTarget: i
    };
  }
  function dl(e, n) {
    for (var i = n + "Capture", o = []; e !== null; ) {
      var c = e, m = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || m === null || (c = Gi(e, i), c != null && o.unshift(
        Ts(e, c, m)
      ), c = Gi(e, n), c != null && o.push(
        Ts(e, c, m)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function xi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Mg(e, n, i, o, c) {
    for (var m = n._reactName, C = []; i !== null && i !== o; ) {
      var N = i, R = N.alternate, H = N.stateNode;
      if (N = N.tag, R !== null && R === o) break;
      N !== 5 && N !== 26 && N !== 27 || H === null || (R = H, c ? (H = Gi(i, m), H != null && C.unshift(
        Ts(i, H, R)
      )) : c || (H = Gi(i, m), H != null && C.push(
        Ts(i, H, R)
      ))), i = i.return;
    }
    C.length !== 0 && e.push({ event: n, listeners: C });
  }
  var E2 = /\r\n?/g, C2 = /\u0000|\uFFFD/g;
  function kg(e) {
    return (typeof e == "string" ? e : "" + e).replace(E2, `
`).replace(C2, "");
  }
  function Rg(e, n) {
    return n = kg(n), kg(e) === n;
  }
  function hl() {
  }
  function We(e, n, i, o, c, m) {
    switch (i) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || Xa(e, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && Xa(e, "" + o);
        break;
      case "className":
        yo(e, "class", o);
        break;
      case "tabIndex":
        yo(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        yo(e, i, o);
        break;
      case "style":
        zh(e, o, m);
        break;
      case "data":
        if (n !== "object") {
          yo(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        o = So("" + o), e.setAttribute(i, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof m == "function" && (i === "formAction" ? (n !== "input" && We(e, n, "name", c.name, c, null), We(
            e,
            n,
            "formEncType",
            c.formEncType,
            c,
            null
          ), We(
            e,
            n,
            "formMethod",
            c.formMethod,
            c,
            null
          ), We(
            e,
            n,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (We(e, n, "encType", c.encType, c, null), We(e, n, "method", c.method, c, null), We(e, n, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        o = So("" + o), e.setAttribute(i, o);
        break;
      case "onClick":
        o != null && (e.onclick = hl);
        break;
      case "onScroll":
        o != null && Ue("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ue("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(s(61));
          if (i = o.__html, i != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = i;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
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
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        i = So("" + o), e.setAttributeNS(
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
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, "" + o) : e.removeAttribute(i);
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
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, "") : e.removeAttribute(i);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(i, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, o) : e.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(i, o) : e.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(i) : e.setAttribute(i, o);
        break;
      case "popover":
        Ue("beforetoggle", e), Ue("toggle", e), vo(e, "popover", o);
        break;
      case "xlinkActuate":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        vo(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = eb.get(i) || i, vo(e, i, o));
    }
  }
  function Rf(e, n, i, o, c, m) {
    switch (i) {
      case "style":
        zh(e, o, m);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(s(61));
          if (i = o.__html, i != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Xa(e, o) : (typeof o == "number" || typeof o == "bigint") && Xa(e, "" + o);
        break;
      case "onScroll":
        o != null && Ue("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ue("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = hl);
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
        if (!Ch.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (c = i.endsWith("Capture"), n = i.slice(2, c ? i.length - 7 : void 0), m = e[$t] || null, m = m != null ? m[i] : null, typeof m == "function" && e.removeEventListener(n, m, c), typeof o == "function")) {
              typeof m != "function" && m !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(n, o, c);
              break e;
            }
            i in e ? e[i] = o : o === !0 ? e.setAttribute(i, "") : vo(e, i, o);
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
        Ue("error", e), Ue("load", e);
        var o = !1, c = !1, m;
        for (m in i)
          if (i.hasOwnProperty(m)) {
            var C = i[m];
            if (C != null)
              switch (m) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, n));
                default:
                  We(e, n, m, C, i, null);
              }
          }
        c && We(e, n, "srcSet", i.srcSet, i, null), o && We(e, n, "src", i.src, i, null);
        return;
      case "input":
        Ue("invalid", e);
        var N = m = C = c = null, R = null, H = null;
        for (o in i)
          if (i.hasOwnProperty(o)) {
            var Y = i[o];
            if (Y != null)
              switch (o) {
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
                  H = Y;
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
                  We(e, n, o, Y, i, null);
              }
          }
        Mh(
          e,
          m,
          N,
          R,
          H,
          C,
          c,
          !1
        ), bo(e);
        return;
      case "select":
        Ue("invalid", e), o = C = m = null;
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
                o = N;
              default:
                We(e, n, c, N, i, null);
            }
        n = m, i = C, e.multiple = !!o, n != null ? Ya(e, !!o, n, !1) : i != null && Ya(e, !!o, i, !0);
        return;
      case "textarea":
        Ue("invalid", e), m = c = o = null;
        for (C in i)
          if (i.hasOwnProperty(C) && (N = i[C], N != null))
            switch (C) {
              case "value":
                o = N;
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
                We(e, n, C, N, i, null);
            }
        Rh(e, o, c, m), bo(e);
        return;
      case "option":
        for (R in i)
          if (i.hasOwnProperty(R) && (o = i[R], o != null))
            switch (R) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                We(e, n, R, o, i, null);
            }
        return;
      case "dialog":
        Ue("beforetoggle", e), Ue("toggle", e), Ue("cancel", e), Ue("close", e);
        break;
      case "iframe":
      case "object":
        Ue("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < As.length; o++)
          Ue(As[o], e);
        break;
      case "image":
        Ue("error", e), Ue("load", e);
        break;
      case "details":
        Ue("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ue("error", e), Ue("load", e);
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
        for (H in i)
          if (i.hasOwnProperty(H) && (o = i[H], o != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                We(e, n, H, o, i, null);
            }
        return;
      default:
        if (Xu(n)) {
          for (Y in i)
            i.hasOwnProperty(Y) && (o = i[Y], o !== void 0 && Rf(
              e,
              n,
              Y,
              o,
              i,
              void 0
            ));
          return;
        }
    }
    for (N in i)
      i.hasOwnProperty(N) && (o = i[N], o != null && We(e, n, N, o, i, null));
  }
  function w2(e, n, i, o) {
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
        var c = null, m = null, C = null, N = null, R = null, H = null, Y = null;
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
                o.hasOwnProperty(Z) || We(e, n, Z, null, o, K);
            }
        }
        for (var F in o) {
          var Z = o[F];
          if (K = i[F], o.hasOwnProperty(F) && (Z != null || K != null))
            switch (F) {
              case "type":
                m = Z;
                break;
              case "name":
                c = Z;
                break;
              case "checked":
                H = Z;
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
                Z !== K && We(
                  e,
                  n,
                  F,
                  Z,
                  o,
                  K
                );
            }
        }
        Vu(
          e,
          C,
          N,
          R,
          H,
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
                o.hasOwnProperty(m) || We(
                  e,
                  n,
                  m,
                  null,
                  o,
                  R
                );
            }
        for (c in o)
          if (m = o[c], R = i[c], o.hasOwnProperty(c) && (m != null || R != null))
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
                m !== R && We(
                  e,
                  n,
                  c,
                  m,
                  o,
                  R
                );
            }
        n = N, i = C, o = Z, F != null ? Ya(e, !!i, F, !1) : !!o != !!i && (n != null ? Ya(e, !!i, n, !0) : Ya(e, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        Z = F = null;
        for (N in i)
          if (c = i[N], i.hasOwnProperty(N) && c != null && !o.hasOwnProperty(N))
            switch (N) {
              case "value":
                break;
              case "children":
                break;
              default:
                We(e, n, N, null, o, c);
            }
        for (C in o)
          if (c = o[C], m = i[C], o.hasOwnProperty(C) && (c != null || m != null))
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
                c !== m && We(e, n, C, c, o, m);
            }
        kh(e, F, Z);
        return;
      case "option":
        for (var Te in i)
          if (F = i[Te], i.hasOwnProperty(Te) && F != null && !o.hasOwnProperty(Te))
            switch (Te) {
              case "selected":
                e.selected = !1;
                break;
              default:
                We(
                  e,
                  n,
                  Te,
                  null,
                  o,
                  F
                );
            }
        for (R in o)
          if (F = o[R], Z = i[R], o.hasOwnProperty(R) && F !== Z && (F != null || Z != null))
            switch (R) {
              case "selected":
                e.selected = F && typeof F != "function" && typeof F != "symbol";
                break;
              default:
                We(
                  e,
                  n,
                  R,
                  F,
                  o,
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
        for (var _e in i)
          F = i[_e], i.hasOwnProperty(_e) && F != null && !o.hasOwnProperty(_e) && We(e, n, _e, null, o, F);
        for (H in o)
          if (F = o[H], Z = i[H], o.hasOwnProperty(H) && F !== Z && (F != null || Z != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(s(137, n));
                break;
              default:
                We(
                  e,
                  n,
                  H,
                  F,
                  o,
                  Z
                );
            }
        return;
      default:
        if (Xu(n)) {
          for (var et in i)
            F = i[et], i.hasOwnProperty(et) && F !== void 0 && !o.hasOwnProperty(et) && Rf(
              e,
              n,
              et,
              void 0,
              o,
              F
            );
          for (Y in o)
            F = o[Y], Z = i[Y], !o.hasOwnProperty(Y) || F === Z || F === void 0 && Z === void 0 || Rf(
              e,
              n,
              Y,
              F,
              o,
              Z
            );
          return;
        }
    }
    for (var L in i)
      F = i[L], i.hasOwnProperty(L) && F != null && !o.hasOwnProperty(L) && We(e, n, L, null, o, F);
    for (K in o)
      F = o[K], Z = i[K], !o.hasOwnProperty(K) || F === Z || F == null && Z == null || We(e, n, K, F, o, Z);
  }
  var jf = null, zf = null;
  function pl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function jg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zg(e, n) {
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
  function Lf(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Pf = null;
  function A2() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Pf ? !1 : (Pf = e, !0) : (Pf = null, !1);
  }
  var Lg = typeof setTimeout == "function" ? setTimeout : void 0, T2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Pg = typeof Promise == "function" ? Promise : void 0, O2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pg < "u" ? function(e) {
    return Pg.resolve(null).then(e).catch(N2);
  } : Lg;
  function N2(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Zr(e) {
    return e === "head";
  }
  function Ig(e, n) {
    var i = n, o = 0, c = 0;
    do {
      var m = i.nextSibling;
      if (e.removeChild(i), m && m.nodeType === 8)
        if (i = m.data, i === "/$") {
          if (0 < o && 8 > o) {
            i = o;
            var C = e.ownerDocument;
            if (i & 1 && Os(C.documentElement), i & 2 && Os(C.body), i & 4)
              for (i = C.head, Os(i), C = i.firstChild; C; ) {
                var N = C.nextSibling, R = C.nodeName;
                C[Fi] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && C.rel.toLowerCase() === "stylesheet" || i.removeChild(C), C = N;
              }
          }
          if (c === 0) {
            e.removeChild(m), Ls(n);
            return;
          }
          c--;
        } else
          i === "$" || i === "$?" || i === "$!" ? c++ : o = i.charCodeAt(0) - 48;
      else o = 0;
      i = m;
    } while (i);
    Ls(n);
  }
  function If(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (n = n.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          If(i), qu(i);
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
  function D2(e, n, i, o) {
    for (; e.nodeType === 1; ) {
      var c = i;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[Fi])
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
      if (e = Pn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function M2(e, n, i) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = Pn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Bf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function k2(e, n) {
    var i = e.ownerDocument;
    if (e.data !== "$?" || i.readyState === "complete")
      n();
    else {
      var o = function() {
        n(), i.removeEventListener("DOMContentLoaded", o);
      };
      i.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function Pn(e) {
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
  var Uf = null;
  function Bg(e) {
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
  function Ug(e, n, i) {
    switch (n = pl(i), e) {
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
  function Os(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    qu(e);
  }
  var Nn = /* @__PURE__ */ new Map(), Hg = /* @__PURE__ */ new Set();
  function ml(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var vr = te.d;
  te.d = {
    f: R2,
    r: j2,
    D: z2,
    C: L2,
    L: P2,
    m: I2,
    X: U2,
    S: B2,
    M: H2
  };
  function R2() {
    var e = vr.f(), n = sl();
    return e || n;
  }
  function j2(e) {
    var n = Fa(e);
    n !== null && n.tag === 5 && n.type === "form" ? om(n) : vr.r(e);
  }
  var Ei = typeof document > "u" ? null : document;
  function qg(e, n, i) {
    var o = Ei;
    if (o && typeof n == "string" && n) {
      var c = xn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof i == "string" && (c += '[crossorigin="' + i + '"]'), Hg.has(c) || (Hg.add(c), e = { rel: e, crossOrigin: i, href: n }, o.querySelector(c) === null && (n = o.createElement("link"), zt(n, "link", e), Nt(n), o.head.appendChild(n)));
    }
  }
  function z2(e) {
    vr.D(e), qg("dns-prefetch", e, null);
  }
  function L2(e, n) {
    vr.C(e, n), qg("preconnect", e, n);
  }
  function P2(e, n, i) {
    vr.L(e, n, i);
    var o = Ei;
    if (o && e && n) {
      var c = 'link[rel="preload"][as="' + xn(n) + '"]';
      n === "image" && i && i.imageSrcSet ? (c += '[imagesrcset="' + xn(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (c += '[imagesizes="' + xn(
        i.imageSizes
      ) + '"]')) : c += '[href="' + xn(e) + '"]';
      var m = c;
      switch (n) {
        case "style":
          m = Ci(e);
          break;
        case "script":
          m = wi(e);
      }
      Nn.has(m) || (e = y(
        {
          rel: "preload",
          href: n === "image" && i && i.imageSrcSet ? void 0 : e,
          as: n
        },
        i
      ), Nn.set(m, e), o.querySelector(c) !== null || n === "style" && o.querySelector(Ns(m)) || n === "script" && o.querySelector(Ds(m)) || (n = o.createElement("link"), zt(n, "link", e), Nt(n), o.head.appendChild(n)));
    }
  }
  function I2(e, n) {
    vr.m(e, n);
    var i = Ei;
    if (i && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + xn(o) + '"][href="' + xn(e) + '"]', m = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          m = wi(e);
      }
      if (!Nn.has(m) && (e = y({ rel: "modulepreload", href: e }, n), Nn.set(m, e), i.querySelector(c) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(Ds(m)))
              return;
        }
        o = i.createElement("link"), zt(o, "link", e), Nt(o), i.head.appendChild(o);
      }
    }
  }
  function B2(e, n, i) {
    vr.S(e, n, i);
    var o = Ei;
    if (o && e) {
      var c = Za(o).hoistableStyles, m = Ci(e);
      n = n || "default";
      var C = c.get(m);
      if (!C) {
        var N = { loading: 0, preload: null };
        if (C = o.querySelector(
          Ns(m)
        ))
          N.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": n },
            i
          ), (i = Nn.get(m)) && Hf(e, i);
          var R = C = o.createElement("link");
          Nt(R), zt(R, "link", e), R._p = new Promise(function(H, Y) {
            R.onload = H, R.onerror = Y;
          }), R.addEventListener("load", function() {
            N.loading |= 1;
          }), R.addEventListener("error", function() {
            N.loading |= 2;
          }), N.loading |= 4, gl(C, n, o);
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
  function U2(e, n) {
    vr.X(e, n);
    var i = Ei;
    if (i && e) {
      var o = Za(i).hoistableScripts, c = wi(e), m = o.get(c);
      m || (m = i.querySelector(Ds(c)), m || (e = y({ src: e, async: !0 }, n), (n = Nn.get(c)) && qf(e, n), m = i.createElement("script"), Nt(m), zt(m, "link", e), i.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, o.set(c, m));
    }
  }
  function H2(e, n) {
    vr.M(e, n);
    var i = Ei;
    if (i && e) {
      var o = Za(i).hoistableScripts, c = wi(e), m = o.get(c);
      m || (m = i.querySelector(Ds(c)), m || (e = y({ src: e, async: !0, type: "module" }, n), (n = Nn.get(c)) && qf(e, n), m = i.createElement("script"), Nt(m), zt(m, "link", e), i.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, o.set(c, m));
    }
  }
  function Fg(e, n, i, o) {
    var c = (c = V.current) ? ml(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (n = Ci(i.href), i = Za(
          c
        ).hoistableStyles, o = i.get(n), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          e = Ci(i.href);
          var m = Za(
            c
          ).hoistableStyles, C = m.get(e);
          if (C || (c = c.ownerDocument || c, C = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, m.set(e, C), (m = c.querySelector(
            Ns(e)
          )) && !m._p && (C.instance = m, C.state.loading = 5), Nn.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, Nn.set(e, i), m || q2(
            c,
            e,
            i,
            C.state
          ))), n && o === null)
            throw Error(s(528, ""));
          return C;
        }
        if (n && o !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return n = i.async, i = i.src, typeof i == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = wi(i), i = Za(
          c
        ).hoistableScripts, o = i.get(n), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function Ci(e) {
    return 'href="' + xn(e) + '"';
  }
  function Ns(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Zg(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function q2(e, n, i, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), zt(n, "link", i), Nt(n), e.head.appendChild(n));
  }
  function wi(e) {
    return '[src="' + xn(e) + '"]';
  }
  function Ds(e) {
    return "script[async]" + e;
  }
  function Gg(e, n, i) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + xn(i.href) + '"]'
          );
          if (o)
            return n.instance = o, Nt(o), o;
          var c = y({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), Nt(o), zt(o, "style", c), gl(o, i.precedence, e), n.instance = o;
        case "stylesheet":
          c = Ci(i.href);
          var m = e.querySelector(
            Ns(c)
          );
          if (m)
            return n.state.loading |= 4, n.instance = m, Nt(m), m;
          o = Zg(i), (c = Nn.get(c)) && Hf(o, c), m = (e.ownerDocument || e).createElement("link"), Nt(m);
          var C = m;
          return C._p = new Promise(function(N, R) {
            C.onload = N, C.onerror = R;
          }), zt(m, "link", o), n.state.loading |= 4, gl(m, i.precedence, e), n.instance = m;
        case "script":
          return m = wi(i.src), (c = e.querySelector(
            Ds(m)
          )) ? (n.instance = c, Nt(c), c) : (o = i, (c = Nn.get(m)) && (o = y({}, i), qf(o, c)), e = e.ownerDocument || e, c = e.createElement("script"), Nt(c), zt(c, "link", o), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, gl(o, i.precedence, e));
    return n.instance;
  }
  function gl(e, n, i) {
    for (var o = i.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = o.length ? o[o.length - 1] : null, m = c, C = 0; C < o.length; C++) {
      var N = o[C];
      if (N.dataset.precedence === n) m = N;
      else if (m !== c) break;
    }
    m ? m.parentNode.insertBefore(e, m.nextSibling) : (n = i.nodeType === 9 ? i.head : i, n.insertBefore(e, n.firstChild));
  }
  function Hf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function qf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var vl = null;
  function Vg(e, n, i) {
    if (vl === null) {
      var o = /* @__PURE__ */ new Map(), c = vl = /* @__PURE__ */ new Map();
      c.set(i, o);
    } else
      c = vl, o = c.get(i), o || (o = /* @__PURE__ */ new Map(), c.set(i, o));
    if (o.has(e)) return o;
    for (o.set(e, null), i = i.getElementsByTagName(e), c = 0; c < i.length; c++) {
      var m = i[c];
      if (!(m[Fi] || m[Pt] || e === "link" && m.getAttribute("rel") === "stylesheet") && m.namespaceURI !== "http://www.w3.org/2000/svg") {
        var C = m.getAttribute(n) || "";
        C = e + C;
        var N = o.get(C);
        N ? N.push(m) : o.set(C, [m]);
      }
    }
    return o;
  }
  function Yg(e, n, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function F2(e, n, i) {
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
  function Xg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ms = null;
  function Z2() {
  }
  function G2(e, n, i) {
    if (Ms === null) throw Error(s(475));
    var o = Ms;
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = Ci(i.href), m = e.querySelector(
          Ns(c)
        );
        if (m) {
          e = m._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = yl.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = m, Nt(m);
          return;
        }
        m = e.ownerDocument || e, i = Zg(i), (c = Nn.get(c)) && Hf(i, c), m = m.createElement("link"), Nt(m);
        var C = m;
        C._p = new Promise(function(N, R) {
          C.onload = N, C.onerror = R;
        }), zt(m, "link", i), n.instance = m;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = yl.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function V2() {
    if (Ms === null) throw Error(s(475));
    var e = Ms;
    return e.stylesheets && e.count === 0 && Ff(e, e.stylesheets), 0 < e.count ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && Ff(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(i);
      };
    } : null;
  }
  function yl() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ff(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var bl = null;
  function Ff(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, bl = /* @__PURE__ */ new Map(), n.forEach(Y2, e), bl = null, yl.call(e));
  }
  function Y2(e, n) {
    if (!(n.state.loading & 4)) {
      var i = bl.get(e);
      if (i) var o = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), bl.set(e, i);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), m = 0; m < c.length; m++) {
          var C = c[m];
          (C.nodeName === "LINK" || C.getAttribute("media") !== "not all") && (i.set(C.dataset.precedence, C), o = C);
        }
        o && i.set(null, o);
      }
      c = n.instance, C = c.getAttribute("data-precedence"), m = i.get(C) || o, m === o && i.set(null, c), i.set(C, c), this.count++, o = yl.bind(this), c.addEventListener("load", o), c.addEventListener("error", o), m ? m.parentNode.insertBefore(c, m.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var ks = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function X2(e, n, i, o, c, m, C, N) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Iu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Iu(0), this.hiddenUpdates = Iu(null), this.identifierPrefix = o, this.onUncaughtError = c, this.onCaughtError = m, this.onRecoverableError = C, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function $g(e, n, i, o, c, m, C, N, R, H, Y, K) {
    return e = new X2(
      e,
      n,
      i,
      C,
      N,
      R,
      H,
      K
    ), n = 1, m === !0 && (n |= 24), m = on(3, null, null, n), e.current = m, m.stateNode = e, n = Ec(), n.refCount++, e.pooledCache = n, n.refCount++, m.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: n
    }, Tc(m), e;
  }
  function Qg(e) {
    return e ? (e = ni, e) : ni;
  }
  function Jg(e, n, i, o, c, m) {
    c = Qg(c), o.context === null ? o.context = c : o.pendingContext = c, o = Mr(n), o.payload = { element: i }, m = m === void 0 ? null : m, m !== null && (o.callback = m), i = kr(e, o, n), i !== null && (dn(i, e, n), ls(i, e, n));
  }
  function Kg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Zf(e, n) {
    Kg(e, n), (e = e.alternate) && Kg(e, n);
  }
  function Wg(e) {
    if (e.tag === 13) {
      var n = ti(e, 67108864);
      n !== null && dn(n, e, 67108864), Zf(e, 67108864);
    }
  }
  var _l = !0;
  function $2(e, n, i, o) {
    var c = U.T;
    U.T = null;
    var m = te.p;
    try {
      te.p = 2, Gf(e, n, i, o);
    } finally {
      te.p = m, U.T = c;
    }
  }
  function Q2(e, n, i, o) {
    var c = U.T;
    U.T = null;
    var m = te.p;
    try {
      te.p = 8, Gf(e, n, i, o);
    } finally {
      te.p = m, U.T = c;
    }
  }
  function Gf(e, n, i, o) {
    if (_l) {
      var c = Vf(o);
      if (c === null)
        kf(
          e,
          n,
          o,
          Sl,
          i
        ), tv(e, o);
      else if (K2(
        c,
        e,
        n,
        i,
        o
      ))
        o.stopPropagation();
      else if (tv(e, o), n & 4 && -1 < J2.indexOf(e)) {
        for (; c !== null; ) {
          var m = Fa(c);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (m = m.stateNode, m.current.memoizedState.isDehydrated) {
                  var C = _n(m.pendingLanes);
                  if (C !== 0) {
                    var N = m;
                    for (N.pendingLanes |= 2, N.entangledLanes |= 2; C; ) {
                      var R = 1 << 31 - qt(C);
                      N.entanglements[1] |= R, C &= ~R;
                    }
                    Qn(m), (Qe & 6) === 0 && (al = xe() + 500, ws(0));
                  }
                }
                break;
              case 13:
                N = ti(m, 2), N !== null && dn(N, m, 2), sl(), Zf(m, 2);
            }
          if (m = Vf(o), m === null && kf(
            e,
            n,
            o,
            Sl,
            i
          ), m === c) break;
          c = m;
        }
        c !== null && o.stopPropagation();
      } else
        kf(
          e,
          n,
          o,
          null,
          i
        );
    }
  }
  function Vf(e) {
    return e = Qu(e), Yf(e);
  }
  var Sl = null;
  function Yf(e) {
    if (Sl = null, e = qa(e), e !== null) {
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
    return Sl = e, null;
  }
  function ev(e) {
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
        switch (Pe()) {
          case Fe:
            return 2;
          case he:
            return 8;
          case de:
          case Ve:
            return 32;
          case Ae:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xf = !1, Gr = null, Vr = null, Yr = null, Rs = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), Xr = [], J2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function tv(e, n) {
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
        Rs.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        js.delete(n.pointerId);
    }
  }
  function zs(e, n, i, o, c, m) {
    return e === null || e.nativeEvent !== m ? (e = {
      blockedOn: n,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: m,
      targetContainers: [c]
    }, n !== null && (n = Fa(n), n !== null && Wg(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function K2(e, n, i, o, c) {
    switch (n) {
      case "focusin":
        return Gr = zs(
          Gr,
          e,
          n,
          i,
          o,
          c
        ), !0;
      case "dragenter":
        return Vr = zs(
          Vr,
          e,
          n,
          i,
          o,
          c
        ), !0;
      case "mouseover":
        return Yr = zs(
          Yr,
          e,
          n,
          i,
          o,
          c
        ), !0;
      case "pointerover":
        var m = c.pointerId;
        return Rs.set(
          m,
          zs(
            Rs.get(m) || null,
            e,
            n,
            i,
            o,
            c
          )
        ), !0;
      case "gotpointercapture":
        return m = c.pointerId, js.set(
          m,
          zs(
            js.get(m) || null,
            e,
            n,
            i,
            o,
            c
          )
        ), !0;
    }
    return !1;
  }
  function nv(e) {
    var n = qa(e.target);
    if (n !== null) {
      var i = u(n);
      if (i !== null) {
        if (n = i.tag, n === 13) {
          if (n = f(i), n !== null) {
            e.blockedOn = n, G1(e.priority, function() {
              if (i.tag === 13) {
                var o = fn();
                o = Bu(o);
                var c = ti(i, o);
                c !== null && dn(c, i, o), Zf(i, o);
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
  function xl(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = Vf(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(
          i.type,
          i
        );
        $u = o, i.target.dispatchEvent(o), $u = null;
      } else
        return n = Fa(i), n !== null && Wg(n), e.blockedOn = i, !1;
      n.shift();
    }
    return !0;
  }
  function rv(e, n, i) {
    xl(e) && i.delete(n);
  }
  function W2() {
    Xf = !1, Gr !== null && xl(Gr) && (Gr = null), Vr !== null && xl(Vr) && (Vr = null), Yr !== null && xl(Yr) && (Yr = null), Rs.forEach(rv), js.forEach(rv);
  }
  function El(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Xf || (Xf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      W2
    )));
  }
  var Cl = null;
  function av(e) {
    Cl !== e && (Cl = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        Cl === e && (Cl = null);
        for (var n = 0; n < e.length; n += 3) {
          var i = e[n], o = e[n + 1], c = e[n + 2];
          if (typeof o != "function") {
            if (Yf(o || i) === null)
              continue;
            break;
          }
          var m = Fa(i);
          m !== null && (e.splice(n, 3), n -= 3, Vc(
            m,
            {
              pending: !0,
              data: c,
              method: i.method,
              action: o
            },
            o,
            c
          ));
        }
      }
    ));
  }
  function Ls(e) {
    function n(R) {
      return El(R, e);
    }
    Gr !== null && El(Gr, e), Vr !== null && El(Vr, e), Yr !== null && El(Yr, e), Rs.forEach(n), js.forEach(n);
    for (var i = 0; i < Xr.length; i++) {
      var o = Xr[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Xr.length && (i = Xr[0], i.blockedOn === null); )
      nv(i), i.blockedOn === null && Xr.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (o = 0; o < i.length; o += 3) {
        var c = i[o], m = i[o + 1], C = c[$t] || null;
        if (typeof m == "function")
          C || av(i);
        else if (C) {
          var N = null;
          if (m && m.hasAttribute("formAction")) {
            if (c = m, C = m[$t] || null)
              N = C.formAction;
            else if (Yf(c) !== null) continue;
          } else N = C.action;
          typeof N == "function" ? i[o + 1] = N : (i.splice(o, 3), o -= 3), av(i);
        }
      }
  }
  function $f(e) {
    this._internalRoot = e;
  }
  wl.prototype.render = $f.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var i = n.current, o = fn();
    Jg(i, o, e, n, null, null);
  }, wl.prototype.unmount = $f.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      Jg(e.current, 2, null, e, null, null), sl(), n[Ha] = null;
    }
  };
  function wl(e) {
    this._internalRoot = e;
  }
  wl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Sh();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < Xr.length && n !== 0 && n < Xr[i].priority; i++) ;
      Xr.splice(i, 0, e), i === 0 && nv(e);
    }
  };
  var iv = r.version;
  if (iv !== "19.1.1")
    throw Error(
      s(
        527,
        iv,
        "19.1.1"
      )
    );
  te.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = h(n), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var e_ = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Al.isDisabled && Al.supportsFiber)
      try {
        tr = Al.inject(
          e_
        ), mt = Al;
      } catch {
      }
  }
  return Us.createRoot = function(e, n) {
    if (!l(e)) throw Error(s(299));
    var i = !1, o = "", c = Sm, m = xm, C = Em, N = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (C = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (N = n.unstable_transitionCallbacks)), n = $g(
      e,
      1,
      !1,
      null,
      null,
      i,
      o,
      c,
      m,
      C,
      N,
      null
    ), e[Ha] = n.current, Mf(e), new $f(n);
  }, Us.hydrateRoot = function(e, n, i) {
    if (!l(e)) throw Error(s(299));
    var o = !1, c = "", m = Sm, C = xm, N = Em, R = null, H = null;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (c = i.identifierPrefix), i.onUncaughtError !== void 0 && (m = i.onUncaughtError), i.onCaughtError !== void 0 && (C = i.onCaughtError), i.onRecoverableError !== void 0 && (N = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (R = i.unstable_transitionCallbacks), i.formState !== void 0 && (H = i.formState)), n = $g(
      e,
      1,
      !0,
      n,
      i ?? null,
      o,
      c,
      m,
      C,
      N,
      R,
      H
    ), n.context = Qg(null), i = n.current, o = fn(), o = Bu(o), c = Mr(o), c.callback = null, kr(i, c, o), i = o, n.current.lanes = i, qi(n, i), Qn(n), e[Ha] = n.current, Mf(e), new wl(n);
  }, Us.version = "19.1.1", Us;
}
var _v;
function D_() {
  if (_v) return Wf.exports;
  _v = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Wf.exports = N_(), Wf.exports;
}
var M_ = D_();
const Sv = /* @__PURE__ */ d0(M_);
var k_ = Object.defineProperty, R_ = (t, r, a) => r in t ? k_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, j_ = (t, r, a) => R_(t, r + "", a);
class p0 extends Error {
  constructor(r, a) {
    super(r), j_(this, "data"), this.data = a;
  }
  toString() {
    return this.message;
  }
}
async function z_(t, r) {
  const a = SillyTavern.getContext(), s = new FormData();
  s.append("avatar", new Blob([JSON.stringify(t)], { type: "application/json" }), "character.json"), s.append("file_type", "json");
  const l = a.getRequestHeaders();
  delete l["Content-Type"];
  const u = await fetch("/api/characters/import", {
    method: "POST",
    headers: l,
    body: s,
    cache: "no-cache"
  });
  if (!u.ok)
    throw new p0(u.statusText, u);
  await a.getCharacters();
}
async function L_(t, r) {
  var a;
  const s = SillyTavern.getContext();
  if (!t.avatar)
    throw new Error("`data.avatar` (character filename) is required to save character attributes.");
  t == null || delete t.json_data, (a = t?.data) == null || delete a.json_data;
  const l = s.getRequestHeaders(), u = await fetch("/api/characters/merge-attributes", {
    method: "POST",
    headers: l,
    body: JSON.stringify(t),
    cache: "no-cache"
  });
  if (!u.ok) {
    const f = await u.json().catch(() => ({ message: u.statusText }));
    throw new p0(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var P_ = Object.defineProperty, I_ = (t, r, a) => r in t ? P_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, xv = (t, r, a) => I_(t, typeof r != "symbol" ? r + "" : r, a);
class m0 {
  constructor(r, a) {
    xv(this, "settingsKey"), xv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = a;
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
    const { strategy: a = "recursive" } = r, s = this.defaultSettings.version, l = this.defaultSettings.formatVersion, u = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
      version: {
        changed: !1,
        new: s ?? ""
      },
      formatVersion: {
        changed: !1,
        new: l ?? ""
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
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), l && l !== "*" && u.formatVersion !== l && (p.formatVersion.changed = !0, p.formatVersion.new = l, u.formatVersion = l), (h(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(a)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), l && !u.formatVersion && (u.formatVersion = l, p.formatVersion.changed = !0, p.formatVersion.new = l);
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
  return Array.isArray ? Array.isArray(t) : y0(t) === "[object Array]";
}
function B_(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function U_(t) {
  return t == null ? "" : B_(t);
}
function Kn(t) {
  return typeof t == "string";
}
function g0(t) {
  return typeof t == "number";
}
function H_(t) {
  return t === !0 || t === !1 || q_(t) && y0(t) == "[object Boolean]";
}
function v0(t) {
  return typeof t == "object";
}
function q_(t) {
  return v0(t) && t !== null;
}
function vn(t) {
  return t != null;
}
function rd(t) {
  return !t.trim().length;
}
function y0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const F_ = "Incorrect 'index' type", Z_ = (t) => `Invalid value for key ${t}`, G_ = (t) => `Pattern length exceeds max of ${t}.`, V_ = (t) => `Missing ${t} property in key`, Y_ = (t) => `Property 'weight' in key '${t}' must be a positive integer`, Ev = Object.prototype.hasOwnProperty;
class X_ {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let a = 0;
    r.forEach((s) => {
      let l = b0(s);
      this._keys.push(l), this._keyMap[l.id] = l, a += l.weight;
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
function b0(t) {
  let r = null, a = null, s = null, l = 1, u = null;
  if (Kn(t) || Er(t))
    s = t, r = Cv(t), a = Td(t);
  else {
    if (!Ev.call(t, "name"))
      throw new Error(V_("name"));
    const f = t.name;
    if (s = f, Ev.call(t, "weight") && (l = t.weight, l <= 0))
      throw new Error(Y_(f));
    r = Cv(f), a = Td(f), u = t.getFn;
  }
  return { path: r, id: a, weight: l, src: s, getFn: u };
}
function Cv(t) {
  return Er(t) ? t : t.split(".");
}
function Td(t) {
  return Er(t) ? t.join(".") : t;
}
function $_(t, r) {
  let a = [], s = !1;
  const l = (u, f, p) => {
    if (vn(u))
      if (!f[p])
        a.push(u);
      else {
        let h = f[p];
        const g = u[h];
        if (!vn(g))
          return;
        if (p === f.length - 1 && (Kn(g) || g0(g) || H_(g)))
          a.push(U_(g));
        else if (Er(g)) {
          s = !0;
          for (let y = 0, _ = g.length; y < _; y += 1)
            l(g[y], f, p + 1);
        } else f.length && l(g, f, p + 1);
      }
  };
  return l(t, Kn(r) ? r.split(".") : r, 0), s ? a : a[0];
}
const Q_ = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, J_ = {
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
}, K_ = {
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
}, W_ = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: $_,
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
var De = {
  ...J_,
  ...Q_,
  ...K_,
  ...W_
};
const eS = /[^ ]+/g;
function tS(t = 1, r = 3) {
  const a = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(l) {
      const u = l.match(eS).length;
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
class eh {
  constructor({
    getFn: r = De.getFn,
    fieldNormWeight: a = De.fieldNormWeight
  } = {}) {
    this.norm = tS(a, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    if (!vn(r) || rd(r))
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
    this.keys.forEach((l, u) => {
      let f = l.getFn ? l.getFn(r) : this.getFn(r, l.path);
      if (vn(f)) {
        if (Er(f)) {
          let p = [];
          const h = [{ nestedArrIndex: -1, value: f }];
          for (; h.length; ) {
            const { nestedArrIndex: g, value: y } = h.pop();
            if (vn(y))
              if (Kn(y) && !rd(y)) {
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
        } else if (Kn(f) && !rd(f)) {
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
function _0(t, r, { getFn: a = De.getFn, fieldNormWeight: s = De.fieldNormWeight } = {}) {
  const l = new eh({ getFn: a, fieldNormWeight: s });
  return l.setKeys(t.map(b0)), l.setSources(r), l.create(), l;
}
function nS(t, { getFn: r = De.getFn, fieldNormWeight: a = De.fieldNormWeight } = {}) {
  const { keys: s, records: l } = t, u = new eh({ getFn: r, fieldNormWeight: a });
  return u.setKeys(s), u.setIndexRecords(l), u;
}
function Tl(t, {
  errors: r = 0,
  currentLocation: a = 0,
  expectedLocation: s = 0,
  distance: l = De.distance,
  ignoreLocation: u = De.ignoreLocation
} = {}) {
  const f = r / t.length;
  if (u)
    return f;
  const p = Math.abs(s - a);
  return l ? f + p / l : p ? 1 : f;
}
function rS(t = [], r = De.minMatchCharLength) {
  let a = [], s = -1, l = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (l = u - 1, l - s + 1 >= r && a.push([s, l]), s = -1);
  }
  return t[u - 1] && u - s >= r && a.push([s, u - 1]), a;
}
const Ma = 32;
function aS(t, r, a, {
  location: s = De.location,
  distance: l = De.distance,
  threshold: u = De.threshold,
  findAllMatches: f = De.findAllMatches,
  minMatchCharLength: p = De.minMatchCharLength,
  includeMatches: h = De.includeMatches,
  ignoreLocation: g = De.ignoreLocation
} = {}) {
  if (r.length > Ma)
    throw new Error(G_(Ma));
  const y = r.length, _ = t.length, b = Math.max(0, Math.min(s, _));
  let v = u, d = b;
  const S = p > 1 || h, E = S ? Array(_) : [];
  let O;
  for (; (O = t.indexOf(r, d)) > -1; ) {
    let k = Tl(r, {
      currentLocation: O,
      expectedLocation: b,
      distance: l,
      ignoreLocation: g
    });
    if (v = Math.min(k, v), d = O + y, S) {
      let q = 0;
      for (; q < y; )
        E[O + q] = 1, q += 1;
    }
  }
  d = -1;
  let w = [], D = 1, x = y + _;
  const A = 1 << y - 1;
  for (let k = 0; k < y; k += 1) {
    let q = 0, X = x;
    for (; q < X; )
      Tl(r, {
        errors: k,
        currentLocation: b + X,
        expectedLocation: b,
        distance: l,
        ignoreLocation: g
      }) <= v ? q = X : x = X, X = Math.floor((x - q) / 2 + q);
    x = X;
    let B = Math.max(1, b - X + 1), G = f ? _ : Math.min(b + X, _) + y, $ = Array(G + 2);
    $[G + 1] = (1 << k) - 1;
    for (let fe = G; fe >= B; fe -= 1) {
      let Ce = fe - 1, U = a[t.charAt(Ce)];
      if (S && (E[Ce] = +!!U), $[fe] = ($[fe + 1] << 1 | 1) & U, k && ($[fe] |= (w[fe + 1] | w[fe]) << 1 | 1 | w[fe + 1]), $[fe] & A && (D = Tl(r, {
        errors: k,
        currentLocation: Ce,
        expectedLocation: b,
        distance: l,
        ignoreLocation: g
      }), D <= v)) {
        if (v = D, d = Ce, d <= b)
          break;
        B = Math.max(1, 2 * b - d);
      }
    }
    if (Tl(r, {
      errors: k + 1,
      currentLocation: b,
      expectedLocation: b,
      distance: l,
      ignoreLocation: g
    }) > v)
      break;
    w = $;
  }
  const M = {
    isMatch: d >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, D)
  };
  if (S) {
    const k = rS(E, p);
    k.length ? h && (M.indices = k) : M.isMatch = !1;
  }
  return M;
}
function iS(t) {
  let r = {};
  for (let a = 0, s = t.length; a < s; a += 1) {
    const l = t.charAt(a);
    r[l] = (r[l] || 0) | 1 << s - a - 1;
  }
  return r;
}
const yu = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class S0 {
  constructor(r, {
    location: a = De.location,
    threshold: s = De.threshold,
    distance: l = De.distance,
    includeMatches: u = De.includeMatches,
    findAllMatches: f = De.findAllMatches,
    minMatchCharLength: p = De.minMatchCharLength,
    isCaseSensitive: h = De.isCaseSensitive,
    ignoreDiacritics: g = De.ignoreDiacritics,
    ignoreLocation: y = De.ignoreLocation
  } = {}) {
    if (this.options = {
      location: a,
      threshold: s,
      distance: l,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: g,
      ignoreLocation: y
    }, r = h ? r : r.toLowerCase(), r = g ? yu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const _ = (v, d) => {
      this.chunks.push({
        pattern: v,
        alphabet: iS(v),
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
    const { isCaseSensitive: a, ignoreDiacritics: s, includeMatches: l } = this.options;
    if (r = a ? r : r.toLowerCase(), r = s ? yu(r) : r, this.pattern === r) {
      let S = {
        isMatch: !0,
        score: 0
      };
      return l && (S.indices = [[0, r.length - 1]]), S;
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
      const { isMatch: w, score: D, indices: x } = aS(r, S, E, {
        location: u + O,
        distance: f,
        threshold: p,
        findAllMatches: h,
        minMatchCharLength: g,
        includeMatches: l,
        ignoreLocation: y
      });
      w && (v = !0), b += D, w && x && (_ = [..._, ...x]);
    });
    let d = {
      isMatch: v,
      score: v ? b / this.chunks.length : 1
    };
    return v && l && (d.indices = _), d;
  }
}
class ra {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return wv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return wv(r, this.singleRegex);
  }
  search() {
  }
}
function wv(t, r) {
  const a = t.match(r);
  return a ? a[1] : null;
}
class sS extends ra {
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
class oS extends ra {
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
class lS extends ra {
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
class uS extends ra {
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
class cS extends ra {
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
class fS extends ra {
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
class x0 extends ra {
  constructor(r, {
    location: a = De.location,
    threshold: s = De.threshold,
    distance: l = De.distance,
    includeMatches: u = De.includeMatches,
    findAllMatches: f = De.findAllMatches,
    minMatchCharLength: p = De.minMatchCharLength,
    isCaseSensitive: h = De.isCaseSensitive,
    ignoreDiacritics: g = De.ignoreDiacritics,
    ignoreLocation: y = De.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new S0(r, {
      location: a,
      threshold: s,
      distance: l,
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
class E0 extends ra {
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
    const l = [], u = this.pattern.length;
    for (; (s = r.indexOf(this.pattern, a)) > -1; )
      a = s + u, l.push([s, a - 1]);
    const f = !!l.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: l
    };
  }
}
const Od = [
  sS,
  E0,
  lS,
  uS,
  fS,
  cS,
  oS,
  x0
], Av = Od.length, dS = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, hS = "|";
function pS(t, r = {}) {
  return t.split(hS).map((a) => {
    let s = a.trim().split(dS).filter((u) => u && !!u.trim()), l = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const p = s[u];
      let h = !1, g = -1;
      for (; !h && ++g < Av; ) {
        const y = Od[g];
        let _ = y.isMultiMatch(p);
        _ && (l.push(new y(_, r)), h = !0);
      }
      if (!h)
        for (g = -1; ++g < Av; ) {
          const y = Od[g];
          let _ = y.isSingleMatch(p);
          if (_) {
            l.push(new y(_, r));
            break;
          }
        }
    }
    return l;
  });
}
const mS = /* @__PURE__ */ new Set([x0.type, E0.type]);
class gS {
  constructor(r, {
    isCaseSensitive: a = De.isCaseSensitive,
    ignoreDiacritics: s = De.ignoreDiacritics,
    includeMatches: l = De.includeMatches,
    minMatchCharLength: u = De.minMatchCharLength,
    ignoreLocation: f = De.ignoreLocation,
    findAllMatches: p = De.findAllMatches,
    location: h = De.location,
    threshold: g = De.threshold,
    distance: y = De.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: a,
      ignoreDiacritics: s,
      includeMatches: l,
      minMatchCharLength: u,
      findAllMatches: p,
      ignoreLocation: f,
      location: h,
      threshold: g,
      distance: y
    }, r = a ? r : r.toLowerCase(), r = s ? yu(r) : r, this.pattern = r, this.query = pS(this.pattern, this.options);
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
    const { includeMatches: s, isCaseSensitive: l, ignoreDiacritics: u } = this.options;
    r = l ? r : r.toLowerCase(), r = u ? yu(r) : r;
    let f = 0, p = [], h = 0;
    for (let g = 0, y = a.length; g < y; g += 1) {
      const _ = a[g];
      p.length = 0, f = 0;
      for (let b = 0, v = _.length; b < v; b += 1) {
        const d = _[b], { isMatch: S, indices: E, score: O } = d.search(r);
        if (S) {
          if (f += 1, h += O, s) {
            const w = d.constructor.type;
            mS.has(w) ? p = [...p, ...E] : p.push(E);
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
const Nd = [];
function vS(...t) {
  Nd.push(...t);
}
function Dd(t, r) {
  for (let a = 0, s = Nd.length; a < s; a += 1) {
    let l = Nd[a];
    if (l.condition(t, r))
      return new l(t, r);
  }
  return new S0(t, r);
}
const bu = {
  AND: "$and",
  OR: "$or"
}, Md = {
  PATH: "$path",
  PATTERN: "$val"
}, kd = (t) => !!(t[bu.AND] || t[bu.OR]), yS = (t) => !!t[Md.PATH], bS = (t) => !Er(t) && v0(t) && !kd(t), Tv = (t) => ({
  [bu.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function C0(t, r, { auto: a = !0 } = {}) {
  const s = (l) => {
    let u = Object.keys(l);
    const f = yS(l);
    if (!f && u.length > 1 && !kd(l))
      return s(Tv(l));
    if (bS(l)) {
      const h = f ? l[Md.PATH] : u[0], g = f ? l[Md.PATTERN] : l[h];
      if (!Kn(g))
        throw new Error(Z_(h));
      const y = {
        keyId: Td(h),
        pattern: g
      };
      return a && (y.searcher = Dd(g, r)), y;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((h) => {
      const g = l[h];
      Er(g) && g.forEach((y) => {
        p.children.push(s(y));
      });
    }), p;
  };
  return kd(t) || (t = Tv(t)), s(t);
}
function _S(t, { ignoreFieldNorm: r = De.ignoreFieldNorm }) {
  t.forEach((a) => {
    let s = 1;
    a.matches.forEach(({ key: l, norm: u, score: f }) => {
      const p = l ? l.weight : null;
      s *= Math.pow(
        f === 0 && p ? Number.EPSILON : f,
        (p || 1) * (r ? 1 : u)
      );
    }), a.score = s;
  });
}
function SS(t, r) {
  const a = t.matches;
  r.matches = [], vn(a) && a.forEach((s) => {
    if (!vn(s.indices) || !s.indices.length)
      return;
    const { indices: l, value: u } = s;
    let f = {
      indices: l,
      value: u
    };
    s.key && (f.key = s.key.src), s.idx > -1 && (f.refIndex = s.idx), r.matches.push(f);
  });
}
function xS(t, r) {
  r.score = t.score;
}
function ES(t, r, {
  includeMatches: a = De.includeMatches,
  includeScore: s = De.includeScore
} = {}) {
  const l = [];
  return a && l.push(SS), s && l.push(xS), t.map((u) => {
    const { idx: f } = u, p = {
      item: r[f],
      refIndex: f
    };
    return l.length && l.forEach((h) => {
      h(u, p);
    }), p;
  });
}
class Ui {
  constructor(r, a = {}, s) {
    this.options = { ...De, ...a }, this.options.useExtendedSearch, this._keyStore = new X_(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, a) {
    if (this._docs = r, a && !(a instanceof eh))
      throw new Error(F_);
    this._myIndex = a || _0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    vn(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const a = [];
    for (let s = 0, l = this._docs.length; s < l; s += 1) {
      const u = this._docs[s];
      r(u, s) && (this.removeAt(s), s -= 1, l -= 1, a.push(u));
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
      includeScore: l,
      shouldSort: u,
      sortFn: f,
      ignoreFieldNorm: p
    } = this.options;
    let h = Kn(r) ? Kn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return _S(h, { ignoreFieldNorm: p }), u && h.sort(f), g0(a) && a > -1 && (h = h.slice(0, a)), ES(h, this._docs, {
      includeMatches: s,
      includeScore: l
    });
  }
  _searchStringList(r) {
    const a = Dd(r, this.options), { records: s } = this._myIndex, l = [];
    return s.forEach(({ v: u, i: f, n: p }) => {
      if (!vn(u))
        return;
      const { isMatch: h, score: g, indices: y } = a.searchIn(u);
      h && l.push({
        item: u,
        idx: f,
        matches: [{ score: g, value: u, norm: p, indices: y }]
      });
    }), l;
  }
  _searchLogical(r) {
    const a = C0(r, this.options), s = (p, h, g) => {
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
        else if (p.operator === bu.AND)
          return [];
      }
      return y;
    }, l = this._myIndex.records, u = {}, f = [];
    return l.forEach(({ $: p, i: h }) => {
      if (vn(p)) {
        let g = s(a, p, h);
        g.length && (u[h] || (u[h] = { idx: h, item: p, matches: [] }, f.push(u[h])), g.forEach(({ matches: y }) => {
          u[h].matches.push(...y);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const a = Dd(r, this.options), { keys: s, records: l } = this._myIndex, u = [];
    return l.forEach(({ $: f, i: p }) => {
      if (!vn(f))
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
    if (!vn(a))
      return [];
    let l = [];
    if (Er(a))
      a.forEach(({ v: u, i: f, n: p }) => {
        if (!vn(u))
          return;
        const { isMatch: h, score: g, indices: y } = s.searchIn(u);
        h && l.push({
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
      p && l.push({ score: h, key: r, value: u, norm: f, indices: g });
    }
    return l;
  }
}
Ui.version = "7.1.0";
Ui.createIndex = _0;
Ui.parseIndex = nS;
Ui.config = De;
Ui.parseQuery = C0;
vS(gS);
var CS = Object.defineProperty, wS = (t, r, a) => r in t ? CS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, AS = (t, r, a) => wS(t, r + "", a);
let TS = class {
  constructor() {
    AS(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
    const l = SillyTavern.getContext(), u = l.uuidv4(), f = ((s = r?.custom) == null ? void 0 : s.stream) ?? !1;
    if (this.requestMap.set(u, {
      abortController: a?.abortController,
      isStream: f,
      options: a
    }), f)
      try {
        const p = await l.ConnectionManagerRequestService.sendRequest(
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
        const p = await l.ConnectionManagerRequestService.sendRequest(
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
async function OS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function we(t, r, { escapeHtml: a = !0 } = {}) {
  await OS("echo", { severity: t, escapeHtml: (!!a).toString() }, r);
}
function ad(t) {
  return i_(t);
}
function Ov(t, r) {
  return r_(t, r);
}
function Ol(t, r, a) {
  return a_(t, r, a);
}
function NS(t, r, a) {
  return f_(t, r, a);
}
function DS(t, r) {
  return d_(t, r);
}
function MS(t, {
  customStoryString: r,
  customInstructSettings: a
} = {}) {
  return n_(t, { customStoryString: r, customInstructSettings: a });
}
function Aa(t) {
  return y_(t);
}
function kS() {
  return {
    prompt: Ps[Is.prompt],
    interval: Ps[Is.interval],
    position: Ps[Is.position],
    depth: Ps[Is.depth],
    role: Ps[Is.role]
  };
}
function RS(t, r) {
  return __(t, r);
}
function jS({
  name2: t,
  charDescription: r,
  charPersonality: a,
  Scenario: s,
  worldInfoBefore: l,
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
  return b_(
    {
      name2: t,
      charDescription: r,
      charPersonality: a,
      Scenario: s,
      worldInfoBefore: l,
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
function zS(t) {
  return p_(t);
}
function LS(t) {
  return m_(t);
}
function PS(t, r, {
  characterOverride: a,
  isMarkdown: s,
  isPrompt: l,
  isEdit: u,
  depth: f
}) {
  return S_(t, r, { characterOverride: a, isMarkdown: s, isPrompt: l, isEdit: u, depth: f });
}
async function IS(t, r) {
  return await h_(t, r);
}
function Nv(t, {
  wiFormat: r
} = {}) {
  return g_(t, { wiFormat: r });
}
function Hs(t) {
  return v_(t);
}
function BS(t, r) {
  return l_(t, r);
}
class US {
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
var HS = Object.defineProperty, qS = (t, r, a) => r in t ? HS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, Nl = (t, r, a) => qS(t, typeof r != "symbol" ? r + "" : r, a);
class FS {
  constructor(r) {
    Nl(this, "messages", []), Nl(this, "tokenizer"), Nl(this, "maxContext"), Nl(this, "currentTokenCount", 0), this.tokenizer = new US(), this.maxContext = r;
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
    const a = r.filter((p) => p.content), s = a.map((p) => this.getTokenCount(p)), l = s.reduce((p, h) => p + h, 0);
    if (this.currentTokenCount + l <= this.maxContext)
      return this.messages.push(...a), this.currentTokenCount += l, !0;
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
async function w0(t, {
  targetCharacterId: r,
  presetName: a,
  instructName: s,
  contextName: l,
  syspromptName: u,
  maxContext: f,
  includeNames: p,
  ignoreCharacterFields: h,
  ignoreAuthorNote: g,
  ignoreWorldInfo: y,
  messageIndexesBetween: _
} = {}) {
  var b, v, d, S, E, O, w, D, x, A, M, k, q, X;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const B = SillyTavern.getContext();
  let { description: G, personality: $, persona: le, scenario: fe, mesExamples: Ce, system: U, jailbreak: te } = h ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : B.getCharacterCardFields({
    chid: r
  });
  const ue = t === "textgenerationwebui" ? (b = B.getPresetManager("instruct")) == null ? void 0 : b.getCompletionPresetByName(s) : void 0, je = !!(ue != null && ue.enabled);
  let j = Ov(Ce, je);
  function J() {
    var he, de;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !a)
      return ad();
    if (typeof f == "number")
      return f;
    let Ve;
    if (t === "textgenerationwebui") {
      const Ae = (he = B.getPresetManager("textgenerationwebui")) == null ? void 0 : he.getCompletionPresetByName(a);
      Ve = Ae?.max_length;
    } else {
      const Ae = (de = B.getPresetManager("openai")) == null ? void 0 : de.getCompletionPresetByName(a);
      Ve = Ae?.openai_max_context;
    }
    return typeof Ve == "number" ? Ve : ad();
  }
  let ae = [];
  const se = J();
  if (se <= 0)
    return { result: [], warnings: ae };
  const oe = new FS(se), Le = B.ToolManager.isToolCallingSupported(), V = _?.start ?? 0, me = _ != null && _.end ? _.end + 1 : void 0;
  let ge = V === -1 && me === 0 ? [] : B.chat.slice(V, me).filter((he) => {
    var de;
    return !he.is_system || Le && Array.isArray((de = he.extra) == null ? void 0 : de.tool_invocations);
  });
  ge = await Promise.all(
    ge.map(async (he, de) => {
      var Ve, Ae;
      let Ze = he.mes, Ar = he.is_user ? lv.USER_INPUT : lv.AI_OUTPUT, tr = { isPrompt: !0, depth: ge.length - de - 1 }, mt = PS(Ze, Ar, tr);
      return mt = await IS(he, mt), (Ve = he?.extra) != null && Ve.append_title && (Ae = he?.extra) != null && Ae.title && (mt = `${mt}

${he.extra.title}`), {
        ...he,
        mes: mt,
        index: de
      };
    })
  );
  const Xe = ge.map((he) => u_ ? `${he.name}: ${he.mes}` : he.mes).reverse(), { worldInfoString: it, worldInfoBefore: Re, worldInfoAfter: P, worldInfoExamples: re, worldInfoDepth: ne, anBefore: be, anAfter: Se } = y ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await B.getWorldInfoPrompt(Xe, se, !1);
  for (const he of re) {
    const de = he.content;
    if (de.length === 0)
      continue;
    const Ve = Ol(de, _r, Qr), Ae = Ov(Ve, je);
    he.position === c_.before ? j.unshift(...Ae) : j.push(...Ae);
  }
  function xe() {
    const he = [];
    for (let de = ge.length - 1; de >= 0; de--) {
      const Ve = ge[de], Ae = Ve.name === "System" && !Ve.is_user ? "system" : Ve.is_user ? "user" : "assistant";
      he.unshift({
        role: Ae,
        content: p && Ae != "system" ? `${Ve.name}: ${Ve.mes}` : Ve.mes,
        source: Ve
      });
    }
    oe.addMany(he);
  }
  if (t === "textgenerationwebui") {
    const he = [...j];
    j && (j = NS(j, _r, Qr));
    const de = (v = B.getPresetManager("sysprompt")) == null ? void 0 : v.getCompletionPresetByName(u);
    de && (U = B.powerUserSettings.prefer_character_prompt && U ? U : Ol(de.content, _r, Qr), U = je ? DS(
      B.substituteParams(U, _r, Qr, de.content),
      ue
    ) : U);
    const Ve = {
      description: G,
      personality: $,
      persona: B.powerUserSettings.persona_description_position == sv.IN_PROMPT ? le : "",
      scenario: fe,
      system: U,
      char: Qr,
      user: _r,
      wiBefore: Re,
      wiAfter: P,
      loreBefore: Re,
      loreAfter: P,
      mesExamples: j.join(""),
      mesExamplesRaw: he.join("")
    }, Ae = (d = B.getPresetManager("context")) == null ? void 0 : d.getCompletionPresetByName(l);
    let Ze = MS(Ve, {
      customInstructSettings: ue,
      customStoryString: Ae?.story_string
    });
    Ze && oe.add({ role: "system", content: Ze, ignoreInstruct: !0 }), xe();
  } else {
    let he = function(Ft) {
      const Xt = bn.find((Ua) => Ua.identifier === Ft);
      if (Xt)
        return Xt;
      const go = Ze.prompts.find((Ua) => Ua.identifier === Ft);
      if (go)
        return go;
    }, de = zS(ge), Ve = LS(j);
    async function Ae() {
      let [Ft, Xt] = await jS(
        {
          name2: Qr,
          charDescription: G,
          charPersonality: $,
          Scenario: fe,
          worldInfoBefore: Re,
          worldInfoAfter: P,
          extensionPrompts: B.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: U,
          jailbreakPromptOverride: te,
          personaDescription: le,
          messages: de,
          messageExamples: Ve
        },
        !1
      );
      oe.addMany(Ft);
    }
    if (!a)
      return ae.push("No preset name provided. Using default preset."), await Ae(), { result: oe.getMessages(), warnings: ae };
    const Ze = (S = B.getPresetManager("openai")) == null ? void 0 : S.getCompletionPresetByName(a);
    if (!Ze)
      return console.warn(`Preset not found: ${a}. Using current preset.`), ae.push(`Preset not found: ${a}. Using current preset.`), Ae(), { result: oe.getMessages(), warnings: ae };
    let Ar = (E = Ze.prompt_order) == null ? void 0 : E.find((Ft) => Ft.character_id === Ht);
    if (!Ar && Ze.prompt_order && Ze.prompt_order.length > 0 && (Ar = Ze.prompt_order[Ze.prompt_order.length - 1]), !Ar)
      return console.warn(`No prompt order found for preset: ${a}. Using current preset.`), ae.push(`No prompt order found for preset: ${a}. Using current preset.`), Ae(), { result: oe.getMessages(), warnings: ae };
    const tr = fe && Ze.scenario_format ? B.substituteParams(Ze.scenario_format) : "", mt = $ && Ze.personality_format ? B.substituteParams(Ze.personality_format) : "", Zn = B.substituteParams(Ze.group_nudge_prompt), qt = Ze.impersonation_prompt ? B.substituteParams(Ze.impersonation_prompt) : "", bn = [];
    y || bn.push(
      {
        role: "system",
        content: Nv(Re, { wiFormat: Ze.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: Nv(P, { wiFormat: Ze.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || bn.push(
      { role: "system", content: G, identifier: "charDescription" },
      { role: "system", content: mt, identifier: "charPersonality" },
      { role: "system", content: tr, identifier: "scenario" }
    ), bn.push(
      { role: "system", content: qt, identifier: "impersonate" },
      { role: "system", content: Zn, identifier: "groupNudge" }
    );
    const sa = B.extensionPrompts["1_memory"];
    sa && sa.value && bn.push({
      role: Aa(sa.role),
      content: sa.value,
      identifier: "summary",
      position: Hs(sa.position)
    });
    const oa = B.extensionPrompts["2_floating_prompt"];
    !g && oa && oa.value && bn.push({
      role: Aa(oa.role),
      content: oa.value,
      identifier: "authorsNote",
      position: Hs(oa.position)
    });
    const nr = B.extensionPrompts["3_vectors"];
    nr && nr.value && bn.push({
      role: "system",
      content: nr.value,
      identifier: "vectorsMemory",
      position: Hs(nr.position)
    });
    const Gn = B.extensionPrompts["4_vectors_data_bank"];
    Gn && Gn.value && bn.push({
      role: Aa(Gn.role),
      content: Gn.value,
      identifier: "vectorsDataBank",
      position: Hs(Gn.position)
    });
    const _n = B.extensionPrompts.chromadb;
    _n && _n.value && bn.push({
      role: "system",
      content: _n.value,
      identifier: "smartContext",
      position: Hs(_n.position)
    }), !h && B.powerUserSettings.persona_description && B.powerUserSettings.persona_description_position === sv.IN_PROMPT && bn.push({
      role: "system",
      content: B.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Ar.order.forEach((Ft) => {
      if (!Ft.enabled)
        return;
      const Xt = he(Ft.identifier);
      if (Xt && Xt.content) {
        oe.add({
          role: Xt.role ?? "system",
          content: B.substituteParams(Xt.content)
        });
        return;
      }
      Ft.identifier === "chatHistory" && xe();
    });
  }
  const Pe = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const he in B.extensionPrompts)
    if (Object.hasOwn(B.extensionPrompts, he)) {
      const de = B.extensionPrompts[he];
      if (Pe.includes(he) || !B.extensionPrompts[he].value || ![wa.BEFORE_PROMPT, wa.IN_PROMPT].includes(de.position) || typeof de.filter == "function" && !await de.filter()) continue;
      const Ve = {
        role: Aa(de.role) ?? "system",
        content: de.value
      };
      if (de.position === wa.BEFORE_PROMPT)
        oe.insert(de.depth, Ve);
      else if (de.position === wa.IN_PROMPT) {
        const Ae = oe.getMessages();
        oe.insert(Ae.length - de.depth, Ve);
      }
    }
  for (const he of ne) {
    const de = oe.getMessages();
    oe.insert(de.length - he.depth, {
      role: Aa(he.role),
      content: he.entries.join(`
`)
    });
  }
  if (!h) {
    const he = RS(Hn, Number(Ht));
    if (Hn && Array.isArray(he) && he.length > 0)
      he.filter((de) => de.text).forEach((de, Ve) => {
        const Ae = oe.getMessages();
        oe.insert(Ae.length - de.depth, { role: de.role, content: de.text });
      });
    else {
      const de = Ol(
        (A = (x = (D = (w = (O = B.characters[Ht]) == null ? void 0 : O.data) == null ? void 0 : w.extensions) == null ? void 0 : D.depth_prompt) == null ? void 0 : x.prompt) == null ? void 0 : A.trim(),
        _r,
        Qr
      ) || "";
      if (de) {
        const Ve = o_, Ae = ((X = (q = (k = (M = B.characters[Ht]) == null ? void 0 : M.data) == null ? void 0 : k.extensions) == null ? void 0 : q.depth_prompt) == null ? void 0 : X.role) ?? s_, Ze = oe.getMessages();
        oe.insert(Ze.length - Ve, {
          role: Aa(Ae),
          content: de
        });
      }
    }
  }
  let Fe = -1;
  if (!g) {
    const he = kS();
    if (he.prompt) {
      he.prompt = Ol(he.prompt, _r, Qr);
      const de = { role: Aa(he.role), content: he.prompt };
      switch (he.position) {
        case wa.IN_PROMPT:
          oe.insert(1, de), Fe = 1;
          break;
        case wa.IN_CHAT:
          Fe = oe.getMessages().length - he.depth, oe.insert(Fe, de);
          break;
        case wa.BEFORE_PROMPT:
          oe.addFront(de), Fe = 0;
          break;
      }
    }
  }
  return Fe >= 0 && (be.length > 0 && (oe.insert(Fe, { role: "system", content: be.join(`
`) }), Fe++), Se.length > 0 && oe.insert(Fe + 1, { role: "system", content: Se.join(`
`) })), { result: oe.getMessages(), warnings: ae };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Dv(t, r) {
  var a = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    r && (s = s.filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    })), a.push.apply(a, s);
  }
  return a;
}
function er(t) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Dv(Object(a), !0).forEach(function(s) {
      ZS(t, s, a[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Dv(Object(a)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(a, s));
    });
  }
  return t;
}
function du(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? du = function(r) {
    return typeof r;
  } : du = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, du(t);
}
function ZS(t, r, a) {
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
function GS(t, r) {
  if (t == null) return {};
  var a = {}, s = Object.keys(t), l, u;
  for (u = 0; u < s.length; u++)
    l = s[u], !(r.indexOf(l) >= 0) && (a[l] = t[l]);
  return a;
}
function VS(t, r) {
  if (t == null) return {};
  var a = GS(t, r), s, l;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (l = 0; l < u.length; l++)
      s = u[l], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (a[s] = t[s]);
  }
  return a;
}
var YS = "1.15.6";
function xr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var wr = xr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), co = xr(/Edge/i), Mv = xr(/firefox/i), to = xr(/safari/i) && !xr(/chrome/i) && !xr(/android/i), th = xr(/iP(ad|od|hone)/i), A0 = xr(/chrome/i) && xr(/android/i), T0 = {
  capture: !1,
  passive: !1
};
function qe(t, r, a) {
  t.addEventListener(r, a, !wr && T0);
}
function He(t, r, a) {
  t.removeEventListener(r, a, !wr && T0);
}
function _u(t, r) {
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
function O0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Un(t, r, a, s) {
  if (t) {
    a = a || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === a && _u(t, r) : _u(t, r)) || s && t === a)
        return t;
      if (t === a) break;
    } while (t = O0(t));
  }
  return null;
}
var kv = /\s+/g;
function pn(t, r, a) {
  if (t && r)
    if (t.classList)
      t.classList[a ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(kv, " ").replace(" " + r + " ", " ");
      t.className = (s + (a ? " " + r : "")).replace(kv, " ");
    }
}
function Oe(t, r, a) {
  var s = t && t.style;
  if (s) {
    if (a === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? a = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (a = t.currentStyle), r === void 0 ? a : a[r];
    !(r in s) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), s[r] = a + (typeof a == "string" ? "" : "px");
  }
}
function Li(t, r) {
  var a = "";
  if (typeof t == "string")
    a = t;
  else
    do {
      var s = Oe(t, "transform");
      s && s !== "none" && (a = s + " " + a);
    } while (!r && (t = t.parentNode));
  var l = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return l && new l(a);
}
function N0(t, r, a) {
  if (t) {
    var s = t.getElementsByTagName(r), l = 0, u = s.length;
    if (a)
      for (; l < u; l++)
        a(s[l], l);
    return s;
  }
  return [];
}
function Wn() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function xt(t, r, a, s, l) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, f, p, h, g, y, _;
    if (t !== window && t.parentNode && t !== Wn() ? (u = t.getBoundingClientRect(), f = u.top, p = u.left, h = u.bottom, g = u.right, y = u.height, _ = u.width) : (f = 0, p = 0, h = window.innerHeight, g = window.innerWidth, y = window.innerHeight, _ = window.innerWidth), (r || a) && t !== window && (l = l || t.parentNode, !wr))
      do
        if (l && l.getBoundingClientRect && (Oe(l, "transform") !== "none" || a && Oe(l, "position") !== "static")) {
          var b = l.getBoundingClientRect();
          f -= b.top + parseInt(Oe(l, "border-top-width")), p -= b.left + parseInt(Oe(l, "border-left-width")), h = f + u.height, g = p + u.width;
          break;
        }
      while (l = l.parentNode);
    if (s && t !== window) {
      var v = Li(l || t), d = v && v.a, S = v && v.d;
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
function Rv(t, r, a) {
  for (var s = ta(t, !0), l = xt(t)[r]; s; ) {
    var u = xt(s)[a], f = void 0;
    if (f = l >= u, !f) return s;
    if (s === Wn()) break;
    s = ta(s, !1);
  }
  return !1;
}
function Bi(t, r, a, s) {
  for (var l = 0, u = 0, f = t.children; u < f.length; ) {
    if (f[u].style.display !== "none" && f[u] !== Ne.ghost && (s || f[u] !== Ne.dragged) && Un(f[u], a.draggable, t, !1)) {
      if (l === r)
        return f[u];
      l++;
    }
    u++;
  }
  return null;
}
function nh(t, r) {
  for (var a = t.lastElementChild; a && (a === Ne.ghost || Oe(a, "display") === "none" || r && !_u(a, r)); )
    a = a.previousElementSibling;
  return a || null;
}
function Mn(t, r) {
  var a = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Ne.clone && (!r || _u(t, r)) && a++;
  return a;
}
function jv(t) {
  var r = 0, a = 0, s = Wn();
  if (t)
    do {
      var l = Li(t), u = l.a, f = l.d;
      r += t.scrollLeft * u, a += t.scrollTop * f;
    } while (t !== s && (t = t.parentNode));
  return [r, a];
}
function XS(t, r) {
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
      var l = Oe(a);
      if (a.clientWidth < a.scrollWidth && (l.overflowX == "auto" || l.overflowX == "scroll") || a.clientHeight < a.scrollHeight && (l.overflowY == "auto" || l.overflowY == "scroll")) {
        if (!a.getBoundingClientRect || a === document.body) return Wn();
        if (s || r) return a;
        s = !0;
      }
    }
  while (a = a.parentNode);
  return Wn();
}
function $S(t, r) {
  if (t && r)
    for (var a in r)
      r.hasOwnProperty(a) && (t[a] = r[a]);
  return t;
}
function id(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var no;
function D0(t, r) {
  return function() {
    if (!no) {
      var a = arguments, s = this;
      a.length === 1 ? t.call(s, a[0]) : t.apply(s, a), no = setTimeout(function() {
        no = void 0;
      }, r);
    }
  };
}
function QS() {
  clearTimeout(no), no = void 0;
}
function M0(t, r, a) {
  t.scrollLeft += r, t.scrollTop += a;
}
function k0(t) {
  var r = window.Polymer, a = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : a ? a(t).clone(!0)[0] : t.cloneNode(!0);
}
function R0(t, r, a) {
  var s = {};
  return Array.from(t.children).forEach(function(l) {
    var u, f, p, h;
    if (!(!Un(l, r.draggable, t, !1) || l.animated || l === a)) {
      var g = xt(l);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, g.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, g.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, g.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, g.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var nn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function JS() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(l) {
          if (!(Oe(l, "display") === "none" || l === Ne.ghost)) {
            t.push({
              target: l,
              rect: xt(l)
            });
            var u = er({}, t[t.length - 1].rect);
            if (l.thisAnimationDuration) {
              var f = Li(l, !0);
              f && (u.top -= f.f, u.left -= f.e);
            }
            l.fromRect = u;
          }
        });
      }
    },
    addAnimationState: function(s) {
      t.push(s);
    },
    removeAnimationState: function(s) {
      t.splice(XS(t, {
        target: s
      }), 1);
    },
    animateAll: function(s) {
      var l = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof s == "function" && s();
        return;
      }
      var u = !1, f = 0;
      t.forEach(function(p) {
        var h = 0, g = p.target, y = g.fromRect, _ = xt(g), b = g.prevFromRect, v = g.prevToRect, d = p.rect, S = Li(g, !0);
        S && (_.top -= S.f, _.left -= S.e), g.toRect = _, g.thisAnimationDuration && id(b, _) && !id(y, _) && // Make sure animatingRect is on line between toRect & fromRect
        (d.top - _.top) / (d.left - _.left) === (y.top - _.top) / (y.left - _.left) && (h = WS(d, b, v, l.options)), id(_, y) || (g.prevFromRect = y, g.prevToRect = _, h || (h = l.options.animation), l.animate(g, d, _, h)), h && (u = !0, f = Math.max(f, h), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, h), g.thisAnimationDuration = h);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, l, u, f) {
      if (f) {
        Oe(s, "transition", ""), Oe(s, "transform", "");
        var p = Li(this.el), h = p && p.a, g = p && p.d, y = (l.left - u.left) / (h || 1), _ = (l.top - u.top) / (g || 1);
        s.animatingX = !!y, s.animatingY = !!_, Oe(s, "transform", "translate3d(" + y + "px," + _ + "px,0)"), this.forRepaintDummy = KS(s), Oe(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), Oe(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          Oe(s, "transition", ""), Oe(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function KS(t) {
  return t.offsetWidth;
}
function WS(t, r, a, s) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - a.top, 2) + Math.pow(r.left - a.left, 2)) * s.animation;
}
var Ti = [], sd = {
  initializeByDefault: !0
}, fo = {
  mount: function(r) {
    for (var a in sd)
      sd.hasOwnProperty(a) && !(a in r) && (r[a] = sd[a]);
    Ti.forEach(function(s) {
      if (s.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), Ti.push(r);
  },
  pluginEvent: function(r, a, s) {
    var l = this;
    this.eventCanceled = !1, s.cancel = function() {
      l.eventCanceled = !0;
    };
    var u = r + "Global";
    Ti.forEach(function(f) {
      a[f.pluginName] && (a[f.pluginName][u] && a[f.pluginName][u](er({
        sortable: a
      }, s)), a.options[f.pluginName] && a[f.pluginName][r] && a[f.pluginName][r](er({
        sortable: a
      }, s)));
    });
  },
  initializePlugins: function(r, a, s, l) {
    Ti.forEach(function(p) {
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
    return Ti.forEach(function(l) {
      typeof l.eventProperties == "function" && Cr(s, l.eventProperties.call(a[l.pluginName], r));
    }), s;
  },
  modifyOption: function(r, a, s) {
    var l;
    return Ti.forEach(function(u) {
      r[u.pluginName] && u.optionListeners && typeof u.optionListeners[a] == "function" && (l = u.optionListeners[a].call(r[u.pluginName], s));
    }), l;
  }
};
function ex(t) {
  var r = t.sortable, a = t.rootEl, s = t.name, l = t.targetEl, u = t.cloneEl, f = t.toEl, p = t.fromEl, h = t.oldIndex, g = t.newIndex, y = t.oldDraggableIndex, _ = t.newDraggableIndex, b = t.originalEvent, v = t.putSortable, d = t.extraEventProperties;
  if (r = r || a && a[nn], !!r) {
    var S, E = r.options, O = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !wr && !co ? S = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(s, !0, !0)), S.to = f || a, S.from = p || a, S.item = l || a, S.clone = u, S.oldIndex = h, S.newIndex = g, S.oldDraggableIndex = y, S.newDraggableIndex = _, S.originalEvent = b, S.pullMode = v ? v.lastPutMode : void 0;
    var w = er(er({}, d), fo.getEventProperties(s, r));
    for (var D in w)
      S[D] = w[D];
    a && a.dispatchEvent(S), E[O] && E[O].call(r, S);
  }
}
var tx = ["evt"], en = function(r, a) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = s.evt, u = VS(s, tx);
  fo.pluginEvent.bind(Ne)(r, a, er({
    dragEl: ie,
    parentEl: pt,
    ghostEl: Me,
    rootEl: ot,
    nextEl: Na,
    lastDownEl: hu,
    cloneEl: ct,
    cloneHidden: ea,
    dragStarted: Qs,
    putSortable: Lt,
    activeSortable: Ne.active,
    originalEvent: l,
    oldIndex: ji,
    oldDraggableIndex: ro,
    newIndex: mn,
    newDraggableIndex: Wr,
    hideGhostForTarget: P0,
    unhideGhostForTarget: I0,
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
        originalEvent: l
      });
    }
  }, u));
};
function Gt(t) {
  ex(er({
    putSortable: Lt,
    cloneEl: ct,
    targetEl: ie,
    rootEl: ot,
    oldIndex: ji,
    oldDraggableIndex: ro,
    newIndex: mn,
    newDraggableIndex: Wr
  }, t));
}
var ie, pt, Me, ot, Na, hu, ct, ea, ji, mn, ro, Wr, Dl, Lt, Ri = !1, Su = !1, xu = [], Ta, In, od, ld, zv, Lv, Qs, Oi, ao, io = !1, Ml = !1, pu, Ut, ud = [], Rd = !1, Eu = [], Ru = typeof document < "u", kl = th, Pv = co || wr ? "cssFloat" : "float", nx = Ru && !A0 && !th && "draggable" in document.createElement("div"), j0 = (function() {
  if (Ru) {
    if (wr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), z0 = function(r, a) {
  var s = Oe(r), l = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Bi(r, 0, a), f = Bi(r, 1, a), p = u && Oe(u), h = f && Oe(f), g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + xt(u).width, y = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + xt(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var _ = p.float === "left" ? "left" : "right";
    return f && (h.clear === "both" || h.clear === _) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || g >= l && s[Pv] === "none" || f && s[Pv] === "none" && g + y > l) ? "vertical" : "horizontal";
}, rx = function(r, a, s) {
  var l = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, p = s ? a.left : a.top, h = s ? a.right : a.bottom, g = s ? a.width : a.height;
  return l === p || u === h || l + f / 2 === p + g / 2;
}, ax = function(r, a) {
  var s;
  return xu.some(function(l) {
    var u = l[nn].options.emptyInsertThreshold;
    if (!(!u || nh(l))) {
      var f = xt(l), p = r >= f.left - u && r <= f.right + u, h = a >= f.top - u && a <= f.bottom + u;
      if (p && h)
        return s = l;
    }
  }), s;
}, L0 = function(r) {
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
  var s = {}, l = r.group;
  (!l || du(l) != "object") && (l = {
    name: l
  }), s.name = l.name, s.checkPull = a(l.pull, !0), s.checkPut = a(l.put), s.revertClone = l.revertClone, r.group = s;
}, P0 = function() {
  !j0 && Me && Oe(Me, "display", "none");
}, I0 = function() {
  !j0 && Me && Oe(Me, "display", "");
};
Ru && !A0 && document.addEventListener("click", function(t) {
  if (Su)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Su = !1, !1;
}, !0);
var Oa = function(r) {
  if (ie) {
    r = r.touches ? r.touches[0] : r;
    var a = ax(r.clientX, r.clientY);
    if (a) {
      var s = {};
      for (var l in r)
        r.hasOwnProperty(l) && (s[l] = r[l]);
      s.target = s.rootEl = a, s.preventDefault = void 0, s.stopPropagation = void 0, a[nn]._onDragOver(s);
    }
  }
}, ix = function(r) {
  ie && ie.parentNode[nn]._isOutsideThisEl(r.target);
};
function Ne(t, r) {
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
      return z0(t, this.options);
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
    supportPointer: Ne.supportPointer !== !1 && "PointerEvent" in window && (!to || th),
    emptyInsertThreshold: 5
  };
  fo.initializePlugins(this, t, a);
  for (var s in a)
    !(s in r) && (r[s] = a[s]);
  L0(r);
  for (var l in this)
    l.charAt(0) === "_" && typeof this[l] == "function" && (this[l] = this[l].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : nx, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? qe(t, "pointerdown", this._onTapStart) : (qe(t, "mousedown", this._onTapStart), qe(t, "touchstart", this._onTapStart)), this.nativeDraggable && (qe(t, "dragover", this), qe(t, "dragenter", this)), xu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Cr(this, JS());
}
Ne.prototype = /** @lends Sortable.prototype */
{
  constructor: Ne,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Oi = null);
  },
  _getDirection: function(r, a) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, a, ie) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var a = this, s = this.el, l = this.options, u = l.preventOnFilter, f = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, h = (p || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || h, y = l.filter;
      if (hx(s), !ie && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || l.disabled) && !g.isContentEditable && !(!this.nativeDraggable && to && h && h.tagName.toUpperCase() === "SELECT") && (h = Un(h, l.draggable, s, !1), !(h && h.animated) && hu !== h)) {
        if (ji = Mn(h), ro = Mn(h, l.draggable), typeof y == "function") {
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
          if (_ = Un(g, _.trim(), s, !1), _)
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
        l.handle && !Un(g, l.handle, s, !1) || this._prepareDragStart(r, p, h);
      }
    }
  },
  _prepareDragStart: function(r, a, s) {
    var l = this, u = l.el, f = l.options, p = u.ownerDocument, h;
    if (s && !ie && s.parentNode === u) {
      var g = xt(s);
      if (ot = u, ie = s, pt = ie.parentNode, Na = ie.nextSibling, hu = s, Dl = f.group, Ne.dragged = ie, Ta = {
        target: ie,
        clientX: (a || r).clientX,
        clientY: (a || r).clientY
      }, zv = Ta.clientX - g.left, Lv = Ta.clientY - g.top, this._lastX = (a || r).clientX, this._lastY = (a || r).clientY, ie.style["will-change"] = "all", h = function() {
        if (en("delayEnded", l, {
          evt: r
        }), Ne.eventCanceled) {
          l._onDrop();
          return;
        }
        l._disableDelayedDragEvents(), !Mv && l.nativeDraggable && (ie.draggable = !0), l._triggerDragStart(r, a), Gt({
          sortable: l,
          name: "choose",
          originalEvent: r
        }), pn(ie, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(y) {
        N0(ie, y.trim(), cd);
      }), qe(p, "dragover", Oa), qe(p, "mousemove", Oa), qe(p, "touchmove", Oa), f.supportPointer ? (qe(p, "pointerup", l._onDrop), !this.nativeDraggable && qe(p, "pointercancel", l._onDrop)) : (qe(p, "mouseup", l._onDrop), qe(p, "touchend", l._onDrop), qe(p, "touchcancel", l._onDrop)), Mv && this.nativeDraggable && (this.options.touchStartThreshold = 4, ie.draggable = !0), en("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || a) && (!this.nativeDraggable || !(co || wr))) {
        if (Ne.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (qe(p, "pointerup", l._disableDelayedDrag), qe(p, "pointercancel", l._disableDelayedDrag)) : (qe(p, "mouseup", l._disableDelayedDrag), qe(p, "touchend", l._disableDelayedDrag), qe(p, "touchcancel", l._disableDelayedDrag)), qe(p, "mousemove", l._delayedDragTouchMoveHandler), qe(p, "touchmove", l._delayedDragTouchMoveHandler), f.supportPointer && qe(p, "pointermove", l._delayedDragTouchMoveHandler), l._dragStartTimer = setTimeout(h, f.delay);
      } else
        h();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var a = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ie && cd(ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    He(r, "mouseup", this._disableDelayedDrag), He(r, "touchend", this._disableDelayedDrag), He(r, "touchcancel", this._disableDelayedDrag), He(r, "pointerup", this._disableDelayedDrag), He(r, "pointercancel", this._disableDelayedDrag), He(r, "mousemove", this._delayedDragTouchMoveHandler), He(r, "touchmove", this._delayedDragTouchMoveHandler), He(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, a) {
    a = a || r.pointerType == "touch" && r, !this.nativeDraggable || a ? this.options.supportPointer ? qe(document, "pointermove", this._onTouchMove) : a ? qe(document, "touchmove", this._onTouchMove) : qe(document, "mousemove", this._onTouchMove) : (qe(ie, "dragend", this), qe(ot, "dragstart", this._onDragStart));
    try {
      document.selection ? mu(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, a) {
    if (Ri = !1, ot && ie) {
      en("dragStarted", this, {
        evt: a
      }), this.nativeDraggable && qe(document, "dragover", ix);
      var s = this.options;
      !r && pn(ie, s.dragClass, !1), pn(ie, s.ghostClass, !0), Ne.active = this, r && this._appendGhost(), Gt({
        sortable: this,
        name: "start",
        originalEvent: a
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (In) {
      this._lastX = In.clientX, this._lastY = In.clientY, P0();
      for (var r = document.elementFromPoint(In.clientX, In.clientY), a = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(In.clientX, In.clientY), r !== a); )
        a = r;
      if (ie.parentNode[nn]._isOutsideThisEl(r), a)
        do {
          if (a[nn]) {
            var s = void 0;
            if (s = a[nn]._onDragOver({
              clientX: In.clientX,
              clientY: In.clientY,
              target: r,
              rootEl: a
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = a;
        } while (a = O0(a));
      I0();
    }
  },
  _onTouchMove: function(r) {
    if (Ta) {
      var a = this.options, s = a.fallbackTolerance, l = a.fallbackOffset, u = r.touches ? r.touches[0] : r, f = Me && Li(Me, !0), p = Me && f && f.a, h = Me && f && f.d, g = kl && Ut && jv(Ut), y = (u.clientX - Ta.clientX + l.x) / (p || 1) + (g ? g[0] - ud[0] : 0) / (p || 1), _ = (u.clientY - Ta.clientY + l.y) / (h || 1) + (g ? g[1] - ud[1] : 0) / (h || 1);
      if (!Ne.active && !Ri) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (Me) {
        f ? (f.e += y - (od || 0), f.f += _ - (ld || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: y,
          f: _
        };
        var b = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        Oe(Me, "webkitTransform", b), Oe(Me, "mozTransform", b), Oe(Me, "msTransform", b), Oe(Me, "transform", b), od = y, ld = _, In = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Me) {
      var r = this.options.fallbackOnBody ? document.body : ot, a = xt(ie, !0, kl, !0, r), s = this.options;
      if (kl) {
        for (Ut = r; Oe(Ut, "position") === "static" && Oe(Ut, "transform") === "none" && Ut !== document; )
          Ut = Ut.parentNode;
        Ut !== document.body && Ut !== document.documentElement ? (Ut === document && (Ut = Wn()), a.top += Ut.scrollTop, a.left += Ut.scrollLeft) : Ut = Wn(), ud = jv(Ut);
      }
      Me = ie.cloneNode(!0), pn(Me, s.ghostClass, !1), pn(Me, s.fallbackClass, !0), pn(Me, s.dragClass, !0), Oe(Me, "transition", ""), Oe(Me, "transform", ""), Oe(Me, "box-sizing", "border-box"), Oe(Me, "margin", 0), Oe(Me, "top", a.top), Oe(Me, "left", a.left), Oe(Me, "width", a.width), Oe(Me, "height", a.height), Oe(Me, "opacity", "0.8"), Oe(Me, "position", kl ? "absolute" : "fixed"), Oe(Me, "zIndex", "100000"), Oe(Me, "pointerEvents", "none"), Ne.ghost = Me, r.appendChild(Me), Oe(Me, "transform-origin", zv / parseInt(Me.style.width) * 100 + "% " + Lv / parseInt(Me.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, a) {
    var s = this, l = r.dataTransfer, u = s.options;
    if (en("dragStart", this, {
      evt: r
    }), Ne.eventCanceled) {
      this._onDrop();
      return;
    }
    en("setupClone", this), Ne.eventCanceled || (ct = k0(ie), ct.removeAttribute("id"), ct.draggable = !1, ct.style["will-change"] = "", this._hideClone(), pn(ct, this.options.chosenClass, !1), Ne.clone = ct), s.cloneId = mu(function() {
      en("clone", s), !Ne.eventCanceled && (s.options.removeCloneOnHide || ot.insertBefore(ct, ie), s._hideClone(), Gt({
        sortable: s,
        name: "clone"
      }));
    }), !a && pn(ie, u.dragClass, !0), a ? (Su = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (He(document, "mouseup", s._onDrop), He(document, "touchend", s._onDrop), He(document, "touchcancel", s._onDrop), l && (l.effectAllowed = "move", u.setData && u.setData.call(s, l, ie)), qe(document, "drop", s), Oe(ie, "transform", "translateZ(0)")), Ri = !0, s._dragStartId = mu(s._dragStarted.bind(s, a, r)), qe(document, "selectstart", s), Qs = !0, window.getSelection().removeAllRanges(), to && Oe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var a = this.el, s = r.target, l, u, f, p = this.options, h = p.group, g = Ne.active, y = Dl === h, _ = p.sort, b = Lt || g, v, d = this, S = !1;
    if (Rd) return;
    function E(ue, je) {
      en(ue, d, er({
        evt: r,
        isOwner: y,
        axis: v ? "vertical" : "horizontal",
        revert: f,
        dragRect: l,
        targetRect: u,
        canSort: _,
        fromSortable: b,
        target: s,
        completed: w,
        onMove: function(J, ae) {
          return Rl(ot, a, ie, l, J, xt(J), r, ae);
        },
        changed: D
      }, je));
    }
    function O() {
      E("dragOverAnimationCapture"), d.captureAnimationState(), d !== b && b.captureAnimationState();
    }
    function w(ue) {
      return E("dragOverCompleted", {
        insertion: ue
      }), ue && (y ? g._hideClone() : g._showClone(d), d !== b && (pn(ie, Lt ? Lt.options.ghostClass : g.options.ghostClass, !1), pn(ie, p.ghostClass, !0)), Lt !== d && d !== Ne.active ? Lt = d : d === Ne.active && Lt && (Lt = null), b === d && (d._ignoreWhileAnimating = s), d.animateAll(function() {
        E("dragOverAnimationComplete"), d._ignoreWhileAnimating = null;
      }), d !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (s === ie && !ie.animated || s === a && !s.animated) && (Oi = null), !p.dragoverBubble && !r.rootEl && s !== document && (ie.parentNode[nn]._isOutsideThisEl(r.target), !ue && Oa(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), S = !0;
    }
    function D() {
      mn = Mn(ie), Wr = Mn(ie, p.draggable), Gt({
        sortable: d,
        name: "change",
        toEl: a,
        newIndex: mn,
        newDraggableIndex: Wr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Un(s, p.draggable, a, !0), E("dragOver"), Ne.eventCanceled) return S;
    if (ie.contains(r.target) || s.animated && s.animatingX && s.animatingY || d._ignoreWhileAnimating === s)
      return w(!1);
    if (Su = !1, g && !p.disabled && (y ? _ || (f = pt !== ot) : Lt === this || (this.lastPutMode = Dl.checkPull(this, g, ie, r)) && h.checkPut(this, g, ie, r))) {
      if (v = this._getDirection(r, s) === "vertical", l = xt(ie), E("dragOverValid"), Ne.eventCanceled) return S;
      if (f)
        return pt = ot, O(), this._hideClone(), E("revert"), Ne.eventCanceled || (Na ? ot.insertBefore(ie, Na) : ot.appendChild(ie)), w(!0);
      var x = nh(a, p.draggable);
      if (!x || ux(r, v, this) && !x.animated) {
        if (x === ie)
          return w(!1);
        if (x && a === r.target && (s = x), s && (u = xt(s)), Rl(ot, a, ie, l, s, u, r, !!s) !== !1)
          return O(), x && x.nextSibling ? a.insertBefore(ie, x.nextSibling) : a.appendChild(ie), pt = a, D(), w(!0);
      } else if (x && lx(r, v, this)) {
        var A = Bi(a, 0, p, !0);
        if (A === ie)
          return w(!1);
        if (s = A, u = xt(s), Rl(ot, a, ie, l, s, u, r, !1) !== !1)
          return O(), a.insertBefore(ie, A), pt = a, D(), w(!0);
      } else if (s.parentNode === a) {
        u = xt(s);
        var M = 0, k, q = ie.parentNode !== a, X = !rx(ie.animated && ie.toRect || l, s.animated && s.toRect || u, v), B = v ? "top" : "left", G = Rv(s, "top", "top") || Rv(ie, "top", "top"), $ = G ? G.scrollTop : void 0;
        Oi !== s && (k = u[B], io = !1, Ml = !X && p.invertSwap || q), M = cx(r, s, u, v, X ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, Ml, Oi === s);
        var le;
        if (M !== 0) {
          var fe = Mn(ie);
          do
            fe -= M, le = pt.children[fe];
          while (le && (Oe(le, "display") === "none" || le === Me));
        }
        if (M === 0 || le === s)
          return w(!1);
        Oi = s, ao = M;
        var Ce = s.nextElementSibling, U = !1;
        U = M === 1;
        var te = Rl(ot, a, ie, l, s, u, r, U);
        if (te !== !1)
          return (te === 1 || te === -1) && (U = te === 1), Rd = !0, setTimeout(ox, 30), O(), U && !Ce ? a.appendChild(ie) : s.parentNode.insertBefore(ie, U ? Ce : s), G && M0(G, 0, $ - G.scrollTop), pt = ie.parentNode, k !== void 0 && !Ml && (pu = Math.abs(k - xt(s)[B])), D(), w(!0);
      }
      if (a.contains(ie))
        return w(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    He(document, "mousemove", this._onTouchMove), He(document, "touchmove", this._onTouchMove), He(document, "pointermove", this._onTouchMove), He(document, "dragover", Oa), He(document, "mousemove", Oa), He(document, "touchmove", Oa);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    He(r, "mouseup", this._onDrop), He(r, "touchend", this._onDrop), He(r, "pointerup", this._onDrop), He(r, "pointercancel", this._onDrop), He(r, "touchcancel", this._onDrop), He(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var a = this.el, s = this.options;
    if (mn = Mn(ie), Wr = Mn(ie, s.draggable), en("drop", this, {
      evt: r
    }), pt = ie && ie.parentNode, mn = Mn(ie), Wr = Mn(ie, s.draggable), Ne.eventCanceled) {
      this._nulling();
      return;
    }
    Ri = !1, Ml = !1, io = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), jd(this.cloneId), jd(this._dragStartId), this.nativeDraggable && (He(document, "drop", this), He(a, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), to && Oe(document.body, "user-select", ""), Oe(ie, "transform", ""), r && (Qs && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), Me && Me.parentNode && Me.parentNode.removeChild(Me), (ot === pt || Lt && Lt.lastPutMode !== "clone") && ct && ct.parentNode && ct.parentNode.removeChild(ct), ie && (this.nativeDraggable && He(ie, "dragend", this), cd(ie), ie.style["will-change"] = "", Qs && !Ri && pn(ie, Lt ? Lt.options.ghostClass : this.options.ghostClass, !1), pn(ie, this.options.chosenClass, !1), Gt({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), ot !== pt ? (mn >= 0 && (Gt({
      rootEl: pt,
      name: "add",
      toEl: pt,
      fromEl: ot,
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
      fromEl: ot,
      originalEvent: r
    }), Gt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Lt && Lt.save()) : mn !== ji && mn >= 0 && (Gt({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Gt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Ne.active && ((mn == null || mn === -1) && (mn = ji, Wr = ro), Gt({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    en("nulling", this), ot = ie = pt = Me = Na = ct = hu = ea = Ta = In = Qs = mn = Wr = ji = ro = Oi = ao = Lt = Dl = Ne.dragged = Ne.ghost = Ne.clone = Ne.active = null, Eu.forEach(function(r) {
      r.checked = !0;
    }), Eu.length = od = ld = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        ie && (this._onDragOver(r), sx(r));
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
    for (var r = [], a, s = this.el.children, l = 0, u = s.length, f = this.options; l < u; l++)
      a = s[l], Un(a, f.draggable, this.el, !1) && r.push(a.getAttribute(f.dataIdAttr) || dx(a));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, a) {
    var s = {}, l = this.el;
    this.toArray().forEach(function(u, f) {
      var p = l.children[f];
      Un(p, this.options.draggable, l, !1) && (s[u] = p);
    }, this), a && this.captureAnimationState(), r.forEach(function(u) {
      s[u] && (l.removeChild(s[u]), l.appendChild(s[u]));
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
    return Un(r, a || this.options.draggable, this.el, !1);
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
    var l = fo.modifyOption(this, r, a);
    typeof l < "u" ? s[r] = l : s[r] = a, r === "group" && L0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    en("destroy", this);
    var r = this.el;
    r[nn] = null, He(r, "mousedown", this._onTapStart), He(r, "touchstart", this._onTapStart), He(r, "pointerdown", this._onTapStart), this.nativeDraggable && (He(r, "dragover", this), He(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(a) {
      a.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), xu.splice(xu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ea) {
      if (en("hideClone", this), Ne.eventCanceled) return;
      Oe(ct, "display", "none"), this.options.removeCloneOnHide && ct.parentNode && ct.parentNode.removeChild(ct), ea = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ea) {
      if (en("showClone", this), Ne.eventCanceled) return;
      ie.parentNode == ot && !this.options.group.revertClone ? ot.insertBefore(ct, ie) : Na ? ot.insertBefore(ct, Na) : ot.appendChild(ct), this.options.group.revertClone && this.animate(ie, ct), Oe(ct, "display", ""), ea = !1;
    }
  }
};
function sx(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Rl(t, r, a, s, l, u, f, p) {
  var h, g = t[nn], y = g.options.onMove, _;
  return window.CustomEvent && !wr && !co ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = r, h.from = t, h.dragged = a, h.draggedRect = s, h.related = l || r, h.relatedRect = u || xt(r), h.willInsertAfter = p, h.originalEvent = f, t.dispatchEvent(h), y && (_ = y.call(g, h, f)), _;
}
function cd(t) {
  t.draggable = !1;
}
function ox() {
  Rd = !1;
}
function lx(t, r, a) {
  var s = xt(Bi(a.el, 0, a.options, !0)), l = R0(a.el, a.options, Me), u = 10;
  return r ? t.clientX < l.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < l.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function ux(t, r, a) {
  var s = xt(nh(a.el, a.options.draggable)), l = R0(a.el, a.options, Me), u = 10;
  return r ? t.clientX > l.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > l.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function cx(t, r, a, s, l, u, f, p) {
  var h = s ? t.clientY : t.clientX, g = s ? a.height : a.width, y = s ? a.top : a.left, _ = s ? a.bottom : a.right, b = !1;
  if (!f) {
    if (p && pu < g * l) {
      if (!io && (ao === 1 ? h > y + g * u / 2 : h < _ - g * u / 2) && (io = !0), io)
        b = !0;
      else if (ao === 1 ? h < y + pu : h > _ - pu)
        return -ao;
    } else if (h > y + g * (1 - l) / 2 && h < _ - g * (1 - l) / 2)
      return fx(r);
  }
  return b = b || f, b && (h < y + g * u / 2 || h > _ - g * u / 2) ? h > y + g / 2 ? 1 : -1 : 0;
}
function fx(t) {
  return Mn(ie) < Mn(t) ? 1 : -1;
}
function dx(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, a = r.length, s = 0; a--; )
    s += r.charCodeAt(a);
  return s.toString(36);
}
function hx(t) {
  Eu.length = 0;
  for (var r = t.getElementsByTagName("input"), a = r.length; a--; ) {
    var s = r[a];
    s.checked && Eu.push(s);
  }
}
function mu(t) {
  return setTimeout(t, 0);
}
function jd(t) {
  return clearTimeout(t);
}
Ru && qe(document, "touchmove", function(t) {
  (Ne.active || Ri) && t.cancelable && t.preventDefault();
});
Ne.utils = {
  on: qe,
  off: He,
  css: Oe,
  find: N0,
  is: function(r, a) {
    return !!Un(r, a, r, !1);
  },
  extend: $S,
  throttle: D0,
  closest: Un,
  toggleClass: pn,
  clone: k0,
  index: Mn,
  nextTick: mu,
  cancelNextTick: jd,
  detectDirection: z0,
  getChild: Bi,
  expando: nn
};
Ne.get = function(t) {
  return t[nn];
};
Ne.mount = function() {
  for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
    r[a] = arguments[a];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (Ne.utils = er(er({}, Ne.utils), s.utils)), fo.mount(s);
  });
};
Ne.create = function(t, r) {
  return new Ne(t, r);
};
Ne.version = YS;
var St = [], Js, zd, Ld = !1, fd, dd, Cu, Ks;
function px() {
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
      this.sortable.nativeDraggable ? qe(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? qe(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? qe(document, "touchmove", this._handleFallbackAutoScroll) : qe(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(a) {
      var s = a.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? He(document, "dragover", this._handleAutoScroll) : (He(document, "pointermove", this._handleFallbackAutoScroll), He(document, "touchmove", this._handleFallbackAutoScroll), He(document, "mousemove", this._handleFallbackAutoScroll)), Iv(), gu(), QS();
    },
    nulling: function() {
      Cu = zd = Js = Ld = Ks = fd = dd = null, St.length = 0;
    },
    _handleFallbackAutoScroll: function(a) {
      this._handleAutoScroll(a, !0);
    },
    _handleAutoScroll: function(a, s) {
      var l = this, u = (a.touches ? a.touches[0] : a).clientX, f = (a.touches ? a.touches[0] : a).clientY, p = document.elementFromPoint(u, f);
      if (Cu = a, s || this.options.forceAutoScrollFallback || co || wr || to) {
        hd(a, this.options, p, s);
        var h = ta(p, !0);
        Ld && (!Ks || u !== fd || f !== dd) && (Ks && Iv(), Ks = setInterval(function() {
          var g = ta(document.elementFromPoint(u, f), !0);
          g !== h && (h = g, gu()), hd(a, l.options, g, s);
        }, 10), fd = u, dd = f);
      } else {
        if (!this.options.bubbleScroll || ta(p, !0) === Wn()) {
          gu();
          return;
        }
        hd(a, this.options, ta(p, !1), !1);
      }
    }
  }, Cr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function gu() {
  St.forEach(function(t) {
    clearInterval(t.pid);
  }), St = [];
}
function Iv() {
  clearInterval(Ks);
}
var hd = D0(function(t, r, a, s) {
  if (r.scroll) {
    var l = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, p = r.scrollSpeed, h = Wn(), g = !1, y;
    zd !== a && (zd = a, gu(), Js = r.scroll, y = r.scrollFn, Js === !0 && (Js = ta(a, !0)));
    var _ = 0, b = Js;
    do {
      var v = b, d = xt(v), S = d.top, E = d.bottom, O = d.left, w = d.right, D = d.width, x = d.height, A = void 0, M = void 0, k = v.scrollWidth, q = v.scrollHeight, X = Oe(v), B = v.scrollLeft, G = v.scrollTop;
      v === h ? (A = D < k && (X.overflowX === "auto" || X.overflowX === "scroll" || X.overflowX === "visible"), M = x < q && (X.overflowY === "auto" || X.overflowY === "scroll" || X.overflowY === "visible")) : (A = D < k && (X.overflowX === "auto" || X.overflowX === "scroll"), M = x < q && (X.overflowY === "auto" || X.overflowY === "scroll"));
      var $ = A && (Math.abs(w - l) <= f && B + D < k) - (Math.abs(O - l) <= f && !!B), le = M && (Math.abs(E - u) <= f && G + x < q) - (Math.abs(S - u) <= f && !!G);
      if (!St[_])
        for (var fe = 0; fe <= _; fe++)
          St[fe] || (St[fe] = {});
      (St[_].vx != $ || St[_].vy != le || St[_].el !== v) && (St[_].el = v, St[_].vx = $, St[_].vy = le, clearInterval(St[_].pid), ($ != 0 || le != 0) && (g = !0, St[_].pid = setInterval((function() {
        s && this.layer === 0 && Ne.active._onTouchMove(Cu);
        var Ce = St[this.layer].vy ? St[this.layer].vy * p : 0, U = St[this.layer].vx ? St[this.layer].vx * p : 0;
        typeof y == "function" && y.call(Ne.dragged.parentNode[nn], U, Ce, t, Cu, St[this.layer].el) !== "continue" || M0(St[this.layer].el, U, Ce);
      }).bind({
        layer: _
      }), 24))), _++;
    } while (r.bubbleScroll && b !== h && (b = ta(b, !1)));
    Ld = g;
  }
}, 30), B0 = function(r) {
  var a = r.originalEvent, s = r.putSortable, l = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, p = r.hideGhostForTarget, h = r.unhideGhostForTarget;
  if (a) {
    var g = s || u;
    p();
    var y = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, _ = document.elementFromPoint(y.clientX, y.clientY);
    h(), g && !g.el.contains(_) && (f("spill"), this.onSpill({
      dragEl: l,
      putSortable: s
    }));
  }
};
function rh() {
}
rh.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var a = r.oldDraggableIndex;
    this.startIndex = a;
  },
  onSpill: function(r) {
    var a = r.dragEl, s = r.putSortable;
    this.sortable.captureAnimationState(), s && s.captureAnimationState();
    var l = Bi(this.sortable.el, this.startIndex, this.options);
    l ? this.sortable.el.insertBefore(a, l) : this.sortable.el.appendChild(a), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: B0
};
Cr(rh, {
  pluginName: "revertOnSpill"
});
function ah() {
}
ah.prototype = {
  onSpill: function(r) {
    var a = r.dragEl, s = r.putSortable, l = s || this.sortable;
    l.captureAnimationState(), a.parentNode && a.parentNode.removeChild(a), l.animateAll();
  },
  drop: B0
};
Cr(ah, {
  pluginName: "removeOnSpill"
});
Ne.mount(new px());
Ne.mount(ah, rh);
async function mx({
  entry: t,
  selectedWorldName: r,
  skipSave: a = !1,
  skipReload: s = !1,
  operation: l = "auto"
}) {
  const u = SillyTavern.getContext(), f = await u.loadWorldInfo(r);
  if (!f)
    throw new Error("Failed to load world info");
  const p = Object.values(f.entries), h = p.length > 0 ? p[p.length - 1] : void 0;
  let g;
  if (l === "update" || l === "auto") {
    const _ = Object.values(f.entries).find((b) => b.uid === t.uid);
    if (_)
      (l === "auto" || l === "update") && (g = _);
    else if (l === "update")
      throw new Error("Entry not found for update operation");
  }
  const y = g ? "update" : "add";
  if (!g) {
    if (g = BS(r, f), !g)
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
const Pd = `=======

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

=======`, Id = `{{#if characters}}
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
{{/if}}`, gx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, vx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, yx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, ih = "{{activeFormatInstructions}}", U0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, H0 = `### {{character.name}}
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
  {{else}}*Not provided*{{/if}}`, so = `{{#is_not_empty fields}}
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
{{/is_not_empty}}`, bx = `## User's Persona Description
name: {{user}}
{{persona}}`, sh = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, _x = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", Sx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", xx = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, q0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ex = q0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Cx = "[" + q0 + "][" + Ex + "]*", wx = new RegExp("^" + Cx + "$");
function F0(t, r) {
  const a = [];
  let s = r.exec(t);
  for (; s; ) {
    const l = [];
    l.startIndex = r.lastIndex - s[0].length;
    const u = s.length;
    for (let f = 0; f < u; f++)
      l.push(s[f]);
    a.push(l), s = r.exec(t);
  }
  return a;
}
const oh = function(t) {
  const r = wx.exec(t);
  return !(r === null || typeof r > "u");
};
function Ax(t) {
  return typeof t < "u";
}
const Tx = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function Z0(t, r) {
  r = Object.assign({}, Tx, r);
  const a = [];
  let s = !1, l = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Uv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let f = u;
      if (u++, t[u] === "!") {
        u = Hv(t, u);
        continue;
      } else {
        let p = !1;
        t[u] === "/" && (p = !0, u++);
        let h = "";
        for (; u < t.length && t[u] !== ">" && t[u] !== " " && t[u] !== "	" && t[u] !== `
` && t[u] !== "\r"; u++)
          h += t[u];
        if (h = h.trim(), h[h.length - 1] === "/" && (h = h.substring(0, h.length - 1), u--), !zx(h)) {
          let _;
          return h.trim().length === 0 ? _ = "Invalid space after '<'." : _ = "Tag '" + h + "' is an invalid name.", yt("InvalidTag", _, Vt(t, u));
        }
        const g = Dx(t, u);
        if (g === !1)
          return yt("InvalidAttr", "Attributes for '" + h + "' have open quote.", Vt(t, u));
        let y = g.value;
        if (u = g.index, y[y.length - 1] === "/") {
          const _ = u - y.length;
          y = y.substring(0, y.length - 1);
          const b = qv(y, r);
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
              a.length == 0 && (l = !0);
            }
          } else return yt("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", Vt(t, u));
        else {
          const _ = qv(y, r);
          if (_ !== !0)
            return yt(_.err.code, _.err.msg, Vt(t, u - y.length + _.err.line));
          if (l === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", Vt(t, u));
          r.unpairedTags.indexOf(h) !== -1 || a.push({ tagName: h, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = Hv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Uv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const _ = Rx(t, u);
            if (_ == -1)
              return yt("InvalidChar", "char '&' is not expected.", Vt(t, u));
            u = _;
          } else if (l === !0 && !Bv(t[u]))
            return yt("InvalidXml", "Extra text at the end", Vt(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (Bv(t[u]))
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
function Bv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Uv(t, r) {
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
function Hv(t, r) {
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
const Ox = '"', Nx = "'";
function Dx(t, r) {
  let a = "", s = "", l = !1;
  for (; r < t.length; r++) {
    if (t[r] === Ox || t[r] === Nx)
      s === "" ? s = t[r] : s !== t[r] || (s = "");
    else if (t[r] === ">" && s === "") {
      l = !0;
      break;
    }
    a += t[r];
  }
  return s !== "" ? !1 : {
    value: a,
    index: r,
    tagClosed: l
  };
}
const Mx = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function qv(t, r) {
  const a = F0(t, Mx), s = {};
  for (let l = 0; l < a.length; l++) {
    if (a[l][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + a[l][2] + "' has no space in starting.", qs(a[l]));
    if (a[l][3] !== void 0 && a[l][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + a[l][2] + "' is without value.", qs(a[l]));
    if (a[l][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + a[l][2] + "' is not allowed.", qs(a[l]));
    const u = a[l][2];
    if (!jx(u))
      return yt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", qs(a[l]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + u + "' is repeated.", qs(a[l]));
  }
  return !0;
}
function kx(t, r) {
  let a = /\d/;
  for (t[r] === "x" && (r++, a = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(a))
      break;
  }
  return -1;
}
function Rx(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, kx(t, r);
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
function jx(t) {
  return oh(t);
}
function zx(t) {
  return oh(t);
}
function Vt(t, r) {
  const a = t.substring(0, r).split(/\r?\n/);
  return {
    line: a.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: a[a.length - 1].length + 1
  };
}
function qs(t) {
  return t.startIndex + t[1].length;
}
const Lx = {
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
}, Px = function(t) {
  return Object.assign({}, Lx, t);
};
class Fs {
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
function Ix(t, r) {
  const a = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, l = !1, u = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (l && Hx(t, r)) {
          r += 7;
          let p, h;
          [p, h, r] = Bx(t, r + 1), h.indexOf("&") === -1 && (a[Gx(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: h
          });
        } else if (l && qx(t, r)) r += 8;
        else if (l && Fx(t, r)) r += 8;
        else if (l && Zx(t, r)) r += 9;
        else if (Ux) u = !0;
        else throw new Error("Invalid DOCTYPE");
        s++, f = "";
      } else if (t[r] === ">") {
        if (u ? t[r - 1] === "-" && t[r - 2] === "-" && (u = !1, s--) : s--, s === 0)
          break;
      } else t[r] === "[" ? l = !0 : f += t[r];
    if (s !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: a, i: r };
}
function Bx(t, r) {
  let a = "";
  for (; r < t.length && t[r] !== "'" && t[r] !== '"'; r++)
    a += t[r];
  if (a = a.trim(), a.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const s = t[r++];
  let l = "";
  for (; r < t.length && t[r] !== s; r++)
    l += t[r];
  return [a, l, r];
}
function Ux(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function Hx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function qx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function Fx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function Zx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function Gx(t) {
  if (oh(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const Vx = /^[-+]?0x[a-fA-F0-9]+$/, Yx = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Xx = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function $x(t, r = {}) {
  if (r = Object.assign({}, Xx, r), !t || typeof t != "string") return t;
  let a = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(a)) return t;
  if (t === "0") return 0;
  if (r.hex && Vx.test(a))
    return Jx(a, 16);
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
    const s = Yx.exec(a);
    if (s) {
      const l = s[1], u = s[2];
      let f = Qx(s[3]);
      if (!r.leadingZeros && u.length > 0 && l && a[2] !== ".") return t;
      if (!r.leadingZeros && u.length > 0 && !l && a[1] !== ".") return t;
      if (r.leadingZeros && u === t) return 0;
      {
        const p = Number(a), h = "" + p;
        return h.search(/[eE]/) !== -1 ? r.eNotation ? p : t : a.indexOf(".") !== -1 ? h === "0" && f === "" || h === f || l && h === "-" + f ? p : t : u ? f === h || l + f === h ? p : t : a === h || a === l + h ? p : t;
      }
    } else
      return t;
  }
}
function Qx(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function Jx(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function Kx(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const a of t)
      if (typeof a == "string" && r === a || a instanceof RegExp && a.test(r))
        return !0;
  } : () => !1;
}
class Wx {
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
    }, this.addExternalEntities = eE, this.parseXml = iE, this.parseTextData = tE, this.resolveNameSpace = nE, this.buildAttributesMap = aE, this.isItStopNode = uE, this.replaceEntitiesValue = oE, this.readStopNodeData = fE, this.saveTextToParentTag = lE, this.addChild = sE, this.ignoreAttributesFn = Kx(this.options.ignoreAttributes);
  }
}
function eE(t) {
  const r = Object.keys(t);
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function tE(t, r, a, s, l, u, f) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const p = this.options.tagValueProcessor(r, t, a, l, u);
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? Ud(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Ud(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function nE(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), a = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = a + r[1]);
  }
  return t;
}
const rE = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function aE(t, r, a) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = F0(t, rE), l = s.length, u = {};
    for (let f = 0; f < l; f++) {
      const p = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let h = s[f][4], g = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (g = this.options.transformAttributeName(g)), g === "__proto__" && (g = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const y = this.options.attributeValueProcessor(p, h, r);
          y == null ? u[g] = h : typeof y != typeof h || y !== h ? u[g] = y : u[g] = Ud(
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
const iE = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new Fs("!xml");
  let a = r, s = "", l = "";
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<")
      if (t[u + 1] === "/") {
        const p = Ra(t, ">", u, "Closing Tag is not closed.");
        let h = t.substring(u + 2, p).trim();
        if (this.options.removeNSPrefix) {
          const _ = h.indexOf(":");
          _ !== -1 && (h = h.substr(_ + 1));
        }
        this.options.transformTagName && (h = this.options.transformTagName(h)), a && (s = this.saveTextToParentTag(s, a, l));
        const g = l.substring(l.lastIndexOf(".") + 1);
        if (h && this.options.unpairedTags.indexOf(h) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${h}>`);
        let y = 0;
        g && this.options.unpairedTags.indexOf(g) !== -1 ? (y = l.lastIndexOf(".", l.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : y = l.lastIndexOf("."), l = l.substring(0, y), a = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (t[u + 1] === "?") {
        let p = Bd(t, u, !1, "?>");
        if (!p) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, a, l), !(this.options.ignoreDeclaration && p.tagName === "?xml" || this.options.ignorePiTags)) {
          const h = new Fs(p.tagName);
          h.add(this.options.textNodeName, ""), p.tagName !== p.tagExp && p.attrExpPresent && (h[":@"] = this.buildAttributesMap(p.tagExp, l, p.tagName)), this.addChild(a, h, l);
        }
        u = p.closeIndex + 1;
      } else if (t.substr(u + 1, 3) === "!--") {
        const p = Ra(t, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const h = t.substring(u + 4, p - 2);
          s = this.saveTextToParentTag(s, a, l), a.add(this.options.commentPropName, [{ [this.options.textNodeName]: h }]);
        }
        u = p;
      } else if (t.substr(u + 1, 2) === "!D") {
        const p = Ix(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = Ra(t, "]]>", u, "CDATA is not closed.") - 2, h = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, a, l);
        let g = this.parseTextData(h, a.tagname, l, !0, !1, !0, !0);
        g == null && (g = ""), this.options.cdataPropName ? a.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : a.add(this.options.textNodeName, g), u = p + 2;
      } else {
        let p = Bd(t, u, this.options.removeNSPrefix), h = p.tagName;
        const g = p.rawTagName;
        let y = p.tagExp, _ = p.attrExpPresent, b = p.closeIndex;
        this.options.transformTagName && (h = this.options.transformTagName(h)), a && s && a.tagname !== "!xml" && (s = this.saveTextToParentTag(s, a, l, !1));
        const v = a;
        if (v && this.options.unpairedTags.indexOf(v.tagname) !== -1 && (a = this.tagsNodeStack.pop(), l = l.substring(0, l.lastIndexOf("."))), h !== r.tagname && (l += l ? "." + h : h), this.isItStopNode(this.options.stopNodes, l, h)) {
          let d = "";
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1)
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), l = l.substr(0, l.length - 1), y = h) : y = y.substr(0, y.length - 1), u = p.closeIndex;
          else if (this.options.unpairedTags.indexOf(h) !== -1)
            u = p.closeIndex;
          else {
            const E = this.readStopNodeData(t, g, b + 1);
            if (!E) throw new Error(`Unexpected end of ${g}`);
            u = E.i, d = E.tagContent;
          }
          const S = new Fs(h);
          h !== y && _ && (S[":@"] = this.buildAttributesMap(y, l, h)), d && (d = this.parseTextData(d, h, l, !0, _, !0, !0)), l = l.substr(0, l.lastIndexOf(".")), S.add(this.options.textNodeName, d), this.addChild(a, S, l);
        } else {
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1) {
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), l = l.substr(0, l.length - 1), y = h) : y = y.substr(0, y.length - 1), this.options.transformTagName && (h = this.options.transformTagName(h));
            const d = new Fs(h);
            h !== y && _ && (d[":@"] = this.buildAttributesMap(y, l, h)), this.addChild(a, d, l), l = l.substr(0, l.lastIndexOf("."));
          } else {
            const d = new Fs(h);
            this.tagsNodeStack.push(a), h !== y && _ && (d[":@"] = this.buildAttributesMap(y, l, h)), this.addChild(a, d, l), a = d;
          }
          s = "", u = b;
        }
      }
    else
      s += t[u];
  return r.child;
};
function sE(t, r, a) {
  const s = this.options.updateTag(r.tagname, a, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const oE = function(t) {
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
function lE(t, r, a, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    a,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function uE(t, r, a) {
  const s = "*." + a;
  for (const l in t) {
    const u = t[l];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function cE(t, r, a = ">") {
  let s, l = "";
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
            data: l,
            index: u
          };
      } else
        return {
          data: l,
          index: u
        };
    else f === "	" && (f = " ");
    l += f;
  }
}
function Ra(t, r, a, s) {
  const l = t.indexOf(r, a);
  if (l === -1)
    throw new Error(s);
  return l + r.length - 1;
}
function Bd(t, r, a, s = ">") {
  const l = cE(t, r + 1, s);
  if (!l) return;
  let u = l.data;
  const f = l.index, p = u.search(/\s/);
  let h = u, g = !0;
  p !== -1 && (h = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const y = h;
  if (a) {
    const _ = h.indexOf(":");
    _ !== -1 && (h = h.substr(_ + 1), g = h !== l.data.substr(_ + 1));
  }
  return {
    tagName: h,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: g,
    rawTagName: y
  };
}
function fE(t, r, a) {
  const s = a;
  let l = 1;
  for (; a < t.length; a++)
    if (t[a] === "<")
      if (t[a + 1] === "/") {
        const u = Ra(t, ">", a, `${r} is not closed`);
        if (t.substring(a + 2, u).trim() === r && (l--, l === 0))
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
        const u = Bd(t, a, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && l++, a = u.closeIndex);
      }
}
function Ud(t, r, a) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : $x(t, a);
  } else
    return Ax(t) ? t : "";
}
function dE(t, r) {
  return G0(t, r);
}
function G0(t, r, a) {
  let s;
  const l = {};
  for (let u = 0; u < t.length; u++) {
    const f = t[u], p = hE(f);
    let h = "";
    if (a === void 0 ? h = p : h = a + "." + p, p === r.textNodeName)
      s === void 0 ? s = f[p] : s += "" + f[p];
    else {
      if (p === void 0)
        continue;
      if (f[p]) {
        let g = G0(f[p], r, h);
        const y = mE(g, r);
        f[":@"] ? pE(g, f[":@"], h, r) : Object.keys(g).length === 1 && g[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? g = g[r.textNodeName] : Object.keys(g).length === 0 && (r.alwaysCreateTextNode ? g[r.textNodeName] = "" : g = ""), l[p] !== void 0 && l.hasOwnProperty(p) ? (Array.isArray(l[p]) || (l[p] = [l[p]]), l[p].push(g)) : r.isArray(p, h, y) ? l[p] = [g] : l[p] = g;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (l[r.textNodeName] = s) : s !== void 0 && (l[r.textNodeName] = s), l;
}
function hE(t) {
  const r = Object.keys(t);
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (s !== ":@") return s;
  }
}
function pE(t, r, a, s) {
  if (r) {
    const l = Object.keys(r), u = l.length;
    for (let f = 0; f < u; f++) {
      const p = l[f];
      s.isArray(p, a + "." + p, !0, !0) ? t[p] = [r[p]] : t[p] = r[p];
    }
  }
}
function mE(t, r) {
  const { textNodeName: a } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[a] || typeof t[a] == "boolean" || t[a] === 0));
}
class V0 {
  constructor(r) {
    this.externalEntities = {}, this.options = Px(r);
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
      const u = Z0(r, a);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new Wx(this.options);
    s.addExternalEntities(this.externalEntities);
    const l = s.parseXml(r);
    return this.options.preserveOrder || l === void 0 ? l : dE(l, this.options);
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
const gE = {
  validate: Z0
}, vE = new V0({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
}), yE = new V0({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0,
  parseTagValue: !1
});
function Fv(t, r) {
  if (r?.type === "string" && typeof t != "string")
    return String(t);
  if ((r?.type === "integer" || r?.type === "number") && typeof t == "string" && t.trim() !== "") {
    const a = Number(t);
    return Number.isFinite(a) ? a : t;
  }
  return r?.type === "boolean" && (t === "true" || t === "false") ? t === "true" : t;
}
function Hd(t, r) {
  if (!(!r || !t || !r.properties))
    for (const a in r.properties) {
      if (!t.hasOwnProperty(a)) continue;
      const s = r.properties[a];
      let l = t[a];
      s.type === "array" && !Array.isArray(l) && (typeof l == "object" && l !== null && Object.keys(l).length === 1 && "item" in l && !s.items?.properties?.item && (l = l.item), l = Array.isArray(l) ? l : [l]), s.type === "array" && (l = l.filter((u) => u !== ""), t[a] = l), s.type === "object" && typeof l == "object" && l !== null ? Hd(l, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(l) && l.forEach((u) => Hd(u, s.items)), s.type === "array" ? t[a] = l.map((u) => Fv(u, s.items)) : t[a] = Fv(l, s);
    }
}
function bE(t) {
  return t.split(/(<!\[CDATA\[[\s\S]*?\]\]>)/).map((r, a) => a % 2 === 1 ? r : r.replace(/&(?!(?:[a-zA-Z]+|#\d+|#x[0-9a-fA-F]+);)/g, "&amp;")).join("");
}
const lh = /```(?:\w+\n|\n)?([\s\S]*?)```/g, Ws = /<response(?:\s[^>]*)?>/, _E = { "&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"', "&apos;": "'" };
function SE(t) {
  let r = null;
  for (const a of t.matchAll(lh))
    r = a[1].trim();
  return r;
}
function xE(t) {
  const r = t.match(/^```(?:\w+\n|\n)?([\s\S]*?)```$/);
  return r && !r[1].includes("```") ? r[1].trim() : t;
}
function EE(t) {
  const r = (l) => l.replace(/&(?:lt|gt|amp|quot|apos);/g, (u) => _E[u]);
  let a = t.trim().replace(/]]>$/, ""), s = "";
  for (; ; ) {
    const l = a.indexOf("<![CDATA[");
    if (l === -1)
      return s + r(a);
    s += r(a.slice(0, l)), a = a.slice(l + 9);
    const u = a.indexOf("]]>");
    if (u === -1)
      return s + a;
    s += a.slice(0, u), a = a.slice(u + 3);
  }
}
function Zv(t) {
  let r = t.search(Ws);
  if (r === -1)
    return null;
  let a = !1, s = -1;
  for (const p of t.matchAll(lh))
    p.index < r && r < p.index + p[0].length && (a = !0), Ws.test(p[1]) && (s = p.index);
  a && s !== -1 && (r = s + t.slice(s).search(Ws));
  const l = r + t.slice(r).match(Ws)[0].length, u = t.lastIndexOf("</response>");
  let f;
  if (u >= l)
    f = t.slice(l, u);
  else {
    f = t.slice(l).trimEnd();
    const p = f.match(/<\/([\w:.-]+)\s*>$/);
    p && !f.includes(`<${p[1]}`) && (f = f.slice(0, p.index));
  }
  return EE(f).trim();
}
function CE(t) {
  let r = t.trimEnd();
  const a = r.match(/(\\*)"\s*}?\s*(?:```)?$/);
  a && a[1].length % 2 === 0 && (r = r.slice(0, a.index + a[1].length)), r = r.replace(/(^|[^\\])((?:\\\\)*)\\(?:u[0-9a-fA-F]{0,3})?$/, "$1$2");
  try {
    const s = r.replace(/[\u0000-\u001f]/g, (l) => JSON.stringify(l).slice(1, -1));
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
function wu(t, r, a = {}) {
  let l = SE(t) ?? t.trim();
  try {
    switch (r) {
      case "xml":
        if (!a.schema) {
          const p = Zv(t);
          if (p !== null) return p;
        }
        if (a.schema) {
          l = bE(l);
          const p = gE.validate(l);
          if (p !== !0)
            throw new Error(`Model response is not valid XML: ${p.err.msg}`);
        }
        let u = (a.schema ? yE : vE).parse(l);
        if (u.root)
          u = u.root;
        else if (u.response)
          return na(u.response);
        return a.schema ? (Hd(u, a.schema), u) : na(u);
      case "json":
        if (!a.schema) {
          const p = t.trim(), h = p.indexOf("{"), g = p.lastIndexOf("}");
          if (h !== -1 && g > h)
            try {
              return na(JSON.parse(p.slice(h, g + 1)));
            } catch {
            }
        }
        const f = JSON.parse(l);
        return a.schema ? f : na(f);
      case "none":
        return xE(t.trim());
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (u) {
    if (r !== "none" && !a.schema) {
      const f = Zv(t);
      if (f !== null) return f;
      const p = t.match(/[\s\S]*"response":\s*"([\s\S]*)/);
      if (p) return CE(p[1]);
    }
    throw console.error(`Error parsing response in format '${r}':`, u), console.error("Raw content received:", t), r === "xml" ? u.message.startsWith("Model response is not valid XML:") ? u : new Error(`Model response is not valid XML: ${u.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${u.message}`);
  }
}
function Y0(t, r) {
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
const Gv = /^\{\s*"response"\s*:/;
function wE(t, r, a) {
  switch (a) {
    case "xml":
      return Ws.test(t);
    case "json":
      return Gv.test(t.trim()) || Array.from(t.matchAll(lh)).some((s) => Gv.test(s[1].trim()));
    case "none":
      return t.trim().startsWith(r);
    default:
      return !1;
  }
}
function AE(t, r) {
  return !t || !r ? "" : /[.!?…"'”’»)\]*]$/.test(t) ? `

` : " ";
}
function TE(t, r, a) {
  const s = t.trim();
  if (!wE(r, s, a)) {
    const u = String(wu(Y0(t, a) + r, a));
    if (u.startsWith(s))
      return u;
  }
  const l = String(wu(r, a));
  return l.startsWith(s) ? l : s + AE(s, l) + l;
}
var jl = { exports: {} }, zl = { exports: {} }, Bn = {}, tn = {}, Vv;
function rn() {
  if (Vv) return tn;
  Vv = 1, tn.__esModule = !0, tn.extend = l, tn.indexOf = h, tn.escapeExpression = g, tn.isEmpty = y, tn.createFrame = _, tn.blockParams = b, tn.appendContextPath = v;
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
  function l(d) {
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
    var S = l({}, d);
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
var Ll = { exports: {} }, Yv;
function Fn() {
  return Yv || (Yv = 1, (function(t, r) {
    r.__esModule = !0;
    var a = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(l, u) {
      var f = u && u.loc, p = void 0, h = void 0, g = void 0, y = void 0;
      f && (p = f.start.line, h = f.end.line, g = f.start.column, y = f.end.column, l += " - " + p + ":" + g);
      for (var _ = Error.prototype.constructor.call(this, l), b = 0; b < a.length; b++)
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
  })(Ll, Ll.exports)), Ll.exports;
}
var Zs = {}, Pl = { exports: {} }, Xv;
function OE() {
  return Xv || (Xv = 1, (function(t, r) {
    r.__esModule = !0;
    var a = rn();
    r.default = function(s) {
      s.registerHelper("blockHelperMissing", function(l, u) {
        var f = u.inverse, p = u.fn;
        if (l === !0)
          return p(this);
        if (l === !1 || l == null)
          return f(this);
        if (a.isArray(l))
          return l.length > 0 ? (u.ids && (u.ids = [u.name]), s.helpers.each(l, u)) : f(this);
        if (u.data && u.ids) {
          var h = a.createFrame(u.data);
          h.contextPath = a.appendContextPath(u.data.contextPath, u.name), u = { data: h };
        }
        return p(l, u);
      });
    }, t.exports = r.default;
  })(Pl, Pl.exports)), Pl.exports;
}
var Il = { exports: {} }, $v;
function NE() {
  return $v || ($v = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = rn(), l = Fn(), u = a(l);
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
  })(Il, Il.exports)), Il.exports;
}
var Bl = { exports: {} }, Qv;
function DE() {
  return Qv || (Qv = 1, (function(t, r) {
    r.__esModule = !0;
    function a(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = Fn(), l = a(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new l.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(Bl, Bl.exports)), Bl.exports;
}
var Ul = { exports: {} }, Jv;
function ME() {
  return Jv || (Jv = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = rn(), l = Fn(), u = a(l);
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
  })(Ul, Ul.exports)), Ul.exports;
}
var Hl = { exports: {} }, Kv;
function kE() {
  return Kv || (Kv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(a) {
      a.registerHelper("log", function() {
        for (var s = [void 0], l = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var f = 1;
        l.hash.level != null ? f = l.hash.level : l.data && l.data.level != null && (f = l.data.level), s[0] = f, a.log.apply(a, s);
      });
    }, t.exports = r.default;
  })(Hl, Hl.exports)), Hl.exports;
}
var ql = { exports: {} }, Wv;
function RE() {
  return Wv || (Wv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(a) {
      a.registerHelper("lookup", function(s, l, u) {
        return s && u.lookupProperty(s, l);
      });
    }, t.exports = r.default;
  })(ql, ql.exports)), ql.exports;
}
var Fl = { exports: {} }, ey;
function jE() {
  return ey || (ey = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = rn(), l = Fn(), u = a(l);
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
  })(Fl, Fl.exports)), Fl.exports;
}
var ty;
function X0() {
  if (ty) return Zs;
  ty = 1, Zs.__esModule = !0, Zs.registerDefaultHelpers = S, Zs.moveHelperToHooks = E;
  function t(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var r = OE(), a = t(r), s = NE(), l = t(s), u = DE(), f = t(u), p = ME(), h = t(p), g = kE(), y = t(g), _ = RE(), b = t(_), v = jE(), d = t(v);
  function S(O) {
    a.default(O), l.default(O), f.default(O), h.default(O), y.default(O), b.default(O), d.default(O);
  }
  function E(O, w, D) {
    O.helpers[w] && (O.hooks[w] = O.helpers[w], D || delete O.helpers[w]);
  }
  return Zs;
}
var Zl = {}, Gl = { exports: {} }, ny;
function zE() {
  return ny || (ny = 1, (function(t, r) {
    r.__esModule = !0;
    var a = rn();
    r.default = function(s) {
      s.registerDecorator("inline", function(l, u, f, p) {
        var h = l;
        return u.partials || (u.partials = {}, h = function(g, y) {
          var _ = f.partials;
          f.partials = a.extend({}, _, u.partials);
          var b = l(g, y);
          return f.partials = _, b;
        }), u.partials[p.args[0]] = p.fn, h;
      });
    }, t.exports = r.default;
  })(Gl, Gl.exports)), Gl.exports;
}
var ry;
function LE() {
  if (ry) return Zl;
  ry = 1, Zl.__esModule = !0, Zl.registerDefaultDecorators = s;
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var r = zE(), a = t(r);
  function s(l) {
    a.default(l);
  }
  return Zl;
}
var Vl = { exports: {} }, ay;
function $0() {
  return ay || (ay = 1, (function(t, r) {
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
  })(Vl, Vl.exports)), Vl.exports;
}
var Ni = {}, Yl = {}, iy;
function PE() {
  if (iy) return Yl;
  iy = 1, Yl.__esModule = !0, Yl.createNewLookupObject = r;
  var t = rn();
  function r() {
    for (var a = arguments.length, s = Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Yl;
}
var sy;
function Q0() {
  if (sy) return Ni;
  sy = 1, Ni.__esModule = !0, Ni.createProtoAccessControl = u, Ni.resultIsAllowed = f, Ni.resetLoggedProperties = g;
  function t(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = PE(), a = $0(), s = t(a), l = /* @__PURE__ */ Object.create(null);
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
    l[y] !== !0 && (l[y] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + y + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function g() {
    Object.keys(l).forEach(function(y) {
      delete l[y];
    });
  }
  return Ni;
}
var oy;
function uh() {
  if (oy) return Bn;
  oy = 1, Bn.__esModule = !0, Bn.HandlebarsEnvironment = d;
  function t(E) {
    return E && E.__esModule ? E : { default: E };
  }
  var r = rn(), a = Fn(), s = t(a), l = X0(), u = LE(), f = $0(), p = t(f), h = Q0(), g = "4.7.8";
  Bn.VERSION = g;
  var y = 8;
  Bn.COMPILER_REVISION = y;
  var _ = 7;
  Bn.LAST_COMPATIBLE_COMPILER_REVISION = _;
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
  Bn.REVISION_CHANGES = b;
  var v = "[object Object]";
  function d(E, O, w) {
    this.helpers = E || {}, this.partials = O || {}, this.decorators = w || {}, l.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
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
  return Bn.log = S, Bn.createFrame = r.createFrame, Bn.logger = p.default, Bn;
}
var Xl = { exports: {} }, ly;
function IE() {
  return ly || (ly = 1, (function(t, r) {
    r.__esModule = !0;
    function a(s) {
      this.string = s;
    }
    a.prototype.toString = a.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = a, t.exports = r.default;
  })(Xl, Xl.exports)), Xl.exports;
}
var yr = {}, $l = {}, uy;
function BE() {
  if (uy) return $l;
  uy = 1, $l.__esModule = !0, $l.wrapHelper = t;
  function t(r, a) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = a(u), r.apply(this, arguments);
    };
    return s;
  }
  return $l;
}
var cy;
function UE() {
  if (cy) return yr;
  cy = 1, yr.__esModule = !0, yr.checkRevision = y, yr.template = _, yr.wrapProgram = b, yr.resolvePartial = v, yr.invokePartial = d, yr.noop = S;
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
  var a = rn(), s = r(a), l = Fn(), u = t(l), f = uh(), p = X0(), h = BE(), g = Q0();
  function y(x) {
    var A = x && x[0] || 1, M = f.COMPILER_REVISION;
    if (!(A >= f.LAST_COMPATIBLE_COMPILER_REVISION && A <= f.COMPILER_REVISION))
      if (A < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[M], q = f.REVISION_CHANGES[A];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + q + ").");
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
    function k(B, G, $) {
      $.hash && (G = s.extend({}, G, $.hash), $.ids && ($.ids[0] = !0)), B = A.VM.resolvePartial.call(this, B, G, $);
      var le = s.extend({}, $, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), fe = A.VM.invokePartial.call(this, B, G, le);
      if (fe == null && A.compile && ($.partials[$.name] = A.compile(B, x.compilerOptions, A), fe = $.partials[$.name](G, le)), fe != null) {
        if ($.indent) {
          for (var Ce = fe.split(`
`), U = 0, te = Ce.length; U < te && !(!Ce[U] && U + 1 === te); U++)
            Ce[U] = $.indent + Ce[U];
          fe = Ce.join(`
`);
        }
        return fe;
      } else
        throw new u.default("The partial " + $.name + " could not be compiled when running in runtime-only mode");
    }
    var q = {
      strict: function(G, $, le) {
        if (!G || !($ in G))
          throw new u.default('"' + $ + '" not defined in ' + G, {
            loc: le
          });
        return q.lookupProperty(G, $);
      },
      lookupProperty: function(G, $) {
        var le = G[$];
        if (le == null || Object.prototype.hasOwnProperty.call(G, $) || g.resultIsAllowed(le, q.protoAccessControl, $))
          return le;
      },
      lookup: function(G, $) {
        for (var le = G.length, fe = 0; fe < le; fe++) {
          var Ce = G[fe] && q.lookupProperty(G[fe], $);
          if (Ce != null)
            return G[fe][$];
        }
      },
      lambda: function(G, $) {
        return typeof G == "function" ? G.call($) : G;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: k,
      fn: function(G) {
        var $ = x[G];
        return $.decorator = x[G + "_d"], $;
      },
      programs: [],
      program: function(G, $, le, fe, Ce) {
        var U = this.programs[G], te = this.fn(G);
        return $ || Ce || fe || le ? U = b(this, G, te, $, le, fe, Ce) : U || (U = this.programs[G] = b(this, G, te)), U;
      },
      data: function(G, $) {
        for (; G && $--; )
          G = G._parent;
        return G;
      },
      mergeIfNeeded: function(G, $) {
        var le = G || $;
        return G && $ && G !== $ && (le = s.extend({}, $, G)), le;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: A.VM.noop,
      compilerInfo: x.compiler
    };
    function X(B) {
      var G = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], $ = G.data;
      X._setup(G), !G.partial && x.useData && ($ = E(B, $));
      var le = void 0, fe = x.useBlockParams ? [] : void 0;
      x.useDepths && (G.depths ? le = B != G.depths[0] ? [B].concat(G.depths) : G.depths : le = [B]);
      function Ce(U) {
        return "" + x.main(q, U, q.helpers, q.partials, $, fe, le);
      }
      return Ce = O(x.main, Ce, q, G.depths || [], $, fe), Ce(B, G);
    }
    return X.isTop = !0, X._setup = function(B) {
      if (B.partial)
        q.protoAccessControl = B.protoAccessControl, q.helpers = B.helpers, q.partials = B.partials, q.decorators = B.decorators, q.hooks = B.hooks;
      else {
        var G = s.extend({}, A.helpers, B.helpers);
        w(G, q), q.helpers = G, x.usePartial && (q.partials = q.mergeIfNeeded(B.partials, A.partials)), (x.usePartial || x.useDecorators) && (q.decorators = s.extend({}, A.decorators, B.decorators)), q.hooks = {}, q.protoAccessControl = g.createProtoAccessControl(B);
        var $ = B.allowCallsToHelperMissing || M;
        p.moveHelperToHooks(q, "helperMissing", $), p.moveHelperToHooks(q, "blockHelperMissing", $);
      }
    }, X._child = function(B, G, $, le) {
      if (x.useBlockParams && !$)
        throw new u.default("must pass block params");
      if (x.useDepths && !le)
        throw new u.default("must pass parent depths");
      return b(q, B, x[B], G, 0, $, le);
    }, X;
  }
  function b(x, A, M, k, q, X, B) {
    function G($) {
      var le = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], fe = B;
      return B && $ != B[0] && !($ === x.nullContext && B[0] === null) && (fe = [$].concat(B)), M(x, $, x.helpers, x.partials, le.data || k, X && [le.blockParams].concat(X), fe);
    }
    return G = O(M, G, x, B, k, X), G.program = A, G.depth = B ? B.length : 0, G.blockParams = q || 0, G;
  }
  function v(x, A, M) {
    return x ? !x.call && !M.name && (M.name = x, x = M.partials[x]) : M.name === "@partial-block" ? x = M.data["partial-block"] : x = M.partials[M.name], x;
  }
  function d(x, A, M) {
    var k = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var q = void 0;
    if (M.fn && M.fn !== S && (function() {
      M.data = f.createFrame(M.data);
      var X = M.fn;
      q = M.data["partial-block"] = function(G) {
        var $ = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return $.data = f.createFrame($.data), $.data["partial-block"] = k, X(G, $);
      }, X.partials && (M.partials = s.extend({}, M.partials, X.partials));
    })(), x === void 0 && q && (x = q), x === void 0)
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
  function O(x, A, M, k, q, X) {
    if (x.decorator) {
      var B = {};
      A = x.decorator(A, B, M, k && k[0], q, X, k), s.extend(A, B);
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
var Ql = { exports: {} }, fy;
function J0() {
  return fy || (fy = 1, (function(t, r) {
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
  })(Ql, Ql.exports)), Ql.exports;
}
var dy;
function HE() {
  return dy || (dy = 1, (function(t, r) {
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
    var l = uh(), u = s(l), f = IE(), p = a(f), h = Fn(), g = a(h), y = rn(), _ = s(y), b = UE(), v = s(b), d = J0(), S = a(d);
    function E() {
      var w = new u.HandlebarsEnvironment();
      return _.extend(w, u), w.SafeString = p.default, w.Exception = g.default, w.Utils = _, w.escapeExpression = _.escapeExpression, w.VM = v, w.template = function(D) {
        return v.template(D, w);
      }, w;
    }
    var O = E();
    O.create = E, S.default(O), O.default = O, r.default = O, t.exports = r.default;
  })(zl, zl.exports)), zl.exports;
}
var Jl = { exports: {} }, hy;
function K0() {
  return hy || (hy = 1, (function(t, r) {
    r.__esModule = !0;
    var a = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(l) {
          return l.type === "SubExpression" || (l.type === "MustacheStatement" || l.type === "BlockStatement") && !!(l.params && l.params.length || l.hash);
        },
        scopedId: function(l) {
          return /^\.|this\b/.test(l.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(l) {
          return l.parts.length === 1 && !a.helpers.scopedId(l) && !l.depth;
        }
      }
    };
    r.default = a, t.exports = r.default;
  })(Jl, Jl.exports)), Jl.exports;
}
var Di = {}, Kl = { exports: {} }, py;
function qE() {
  return py || (py = 1, (function(t, r) {
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
            var le;
            return le = h.lexer.lex() || 1, typeof le != "number" && (le = h.symbols_[le] || le), le;
          }
          for (var D, x, A, M, k = {}, q, X, B, G; ; ) {
            if (x = g[g.length - 1], this.defaultActions[x] ? A = this.defaultActions[x] : ((D === null || typeof D > "u") && (D = w()), A = b[x] && b[x][D]), typeof A > "u" || !A.length || !A[0]) {
              var $ = "";
              {
                G = [];
                for (q in b[x]) this.terminals_[q] && q > 2 && G.push("'" + this.terminals_[q] + "'");
                this.lexer.showPosition ? $ = "Parse error on line " + (d + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + G.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : $ = "Parse error on line " + (d + 1) + ": Unexpected " + (D == 1 ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError($, { text: this.lexer.match, token: this.terminals_[D] || D, line: this.lexer.yylineno, loc: E, expected: G });
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
                X && (g = g.slice(0, -1 * X * 2), y = y.slice(0, -1 * X), _ = _.slice(0, -1 * X)), g.push(this.productions_[A[1]][0]), y.push(k.$), _.push(k._$), B = b[g[g.length - 2]][g[g.length - 1]], g.push(B);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, l = (function() {
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
      s.lexer = l;
      function u() {
        this.yy = {};
      }
      return u.prototype = s, s.Parser = u, new u();
    })();
    r.default = a, t.exports = r.default;
  })(Kl, Kl.exports)), Kl.exports;
}
var Wl = { exports: {} }, eu = { exports: {} }, my;
function W0() {
  return my || (my = 1, (function(t, r) {
    r.__esModule = !0;
    function a(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = Fn(), l = a(s);
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
            throw new l.default('Unexpected node type "' + b.type + '" found when accepting ' + _ + " on " + y.type);
          y[_] = b;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(y, _) {
        if (this.acceptKey(y, _), !y[_])
          throw new l.default(y.type + " requires " + _);
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
            throw new l.default("Unknown type: " + y.type, y);
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
  })(eu, eu.exports)), eu.exports;
}
var gy;
function FE() {
  return gy || (gy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = W0(), l = a(s);
    function u() {
      var y = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = y;
    }
    u.prototype = new l.default(), u.prototype.Program = function(y) {
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
  })(Wl, Wl.exports)), Wl.exports;
}
var hn = {}, vy;
function ZE() {
  if (vy) return hn;
  vy = 1, hn.__esModule = !0, hn.SourceLocation = l, hn.id = u, hn.stripFlags = f, hn.stripComment = p, hn.preparePath = h, hn.prepareMustache = g, hn.prepareRawBlock = y, hn.prepareBlock = _, hn.prepareProgram = b, hn.preparePartialBlock = v;
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
  function l(d, S) {
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
var yy;
function GE() {
  if (yy) return Di;
  yy = 1, Di.__esModule = !0, Di.parseWithoutProcessing = y, Di.parse = _;
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
  var a = qE(), s = r(a), l = FE(), u = r(l), f = ZE(), p = t(f), h = rn();
  Di.parser = s.default;
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
  return Di;
}
var Mi = {}, by;
function VE() {
  if (by) return Mi;
  by = 1, Mi.__esModule = !0, Mi.Compiler = p, Mi.precompile = h, Mi.compile = g;
  function t(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var r = Fn(), a = t(r), s = rn(), l = K0(), u = t(l), f = [].slice;
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
  return Mi;
}
var tu = { exports: {} }, nu = { exports: {} }, Gs = {}, pd = {}, ru = {}, au = {}, _y;
function YE() {
  if (_y) return au;
  _y = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return au.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, au.decode = function(r) {
    var a = 65, s = 90, l = 97, u = 122, f = 48, p = 57, h = 43, g = 47, y = 26, _ = 52;
    return a <= r && r <= s ? r - a : l <= r && r <= u ? r - l + y : f <= r && r <= p ? r - f + _ : r == h ? 62 : r == g ? 63 : -1;
  }, au;
}
var Sy;
function e1() {
  if (Sy) return ru;
  Sy = 1;
  var t = YE(), r = 5, a = 1 << r, s = a - 1, l = a;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function f(p) {
    var h = (p & 1) === 1, g = p >> 1;
    return h ? -g : g;
  }
  return ru.encode = function(h) {
    var g = "", y, _ = u(h);
    do
      y = _ & s, _ >>>= r, _ > 0 && (y |= l), g += t.encode(y);
    while (_ > 0);
    return g;
  }, ru.decode = function(h, g, y) {
    var _ = h.length, b = 0, v = 0, d, S;
    do {
      if (g >= _)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (S = t.decode(h.charCodeAt(g++)), S === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(g - 1));
      d = !!(S & l), S &= s, b = b + (S << v), v += r;
    } while (d);
    y.value = f(b), y.rest = g;
  }, ru;
}
var md = {}, xy;
function ho() {
  return xy || (xy = 1, (function(t) {
    function r(x, A, M) {
      if (A in x)
        return x[A];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + A + '" is a required argument.');
    }
    t.getArg = r;
    var a = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function l(x) {
      var A = x.match(a);
      return A ? {
        scheme: A[1],
        auth: A[2],
        host: A[3],
        port: A[4],
        path: A[5]
      } : null;
    }
    t.urlParse = l;
    function u(x) {
      var A = "";
      return x.scheme && (A += x.scheme + ":"), A += "//", x.auth && (A += x.auth + "@"), x.host && (A += x.host), x.port && (A += ":" + x.port), x.path && (A += x.path), A;
    }
    t.urlGenerate = u;
    function f(x) {
      var A = x, M = l(x);
      if (M) {
        if (!M.path)
          return x;
        A = M.path;
      }
      for (var k = t.isAbsolute(A), q = A.split(/\/+/), X, B = 0, G = q.length - 1; G >= 0; G--)
        X = q[G], X === "." ? q.splice(G, 1) : X === ".." ? B++ : B > 0 && (X === "" ? (q.splice(G + 1, B), B = 0) : (q.splice(G, 2), B--));
      return A = q.join("/"), A === "" && (A = k ? "/" : "."), M ? (M.path = A, u(M)) : A;
    }
    t.normalize = f;
    function p(x, A) {
      x === "" && (x = "."), A === "" && (A = ".");
      var M = l(A), k = l(x);
      if (k && (x = k.path || "/"), M && !M.scheme)
        return k && (M.scheme = k.scheme), u(M);
      if (M || A.match(s))
        return A;
      if (k && !k.host && !k.path)
        return k.host = A, u(k);
      var q = A.charAt(0) === "/" ? A : f(x.replace(/\/+$/, "") + "/" + A);
      return k ? (k.path = q, u(k)) : q;
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
        var k = l(M);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var q = k.path.lastIndexOf("/");
          q >= 0 && (k.path = k.path.substring(0, q + 1));
        }
        A = p(u(k), A);
      }
      return f(A);
    }
    t.computeSourceURL = D;
  })(md)), md;
}
var gd = {}, Ey;
function t1() {
  if (Ey) return gd;
  Ey = 1;
  var t = ho(), r = Object.prototype.hasOwnProperty, a = typeof Map < "u";
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
  }, gd.ArraySet = s, gd;
}
var vd = {}, Cy;
function XE() {
  if (Cy) return vd;
  Cy = 1;
  var t = ho();
  function r(s, l) {
    var u = s.generatedLine, f = l.generatedLine, p = s.generatedColumn, h = l.generatedColumn;
    return f > u || f == u && h >= p || t.compareByGeneratedPositionsInflated(s, l) <= 0;
  }
  function a() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return a.prototype.unsortedForEach = function(l, u) {
    this._array.forEach(l, u);
  }, a.prototype.add = function(l) {
    r(this._last, l) ? (this._last = l, this._array.push(l)) : (this._sorted = !1, this._array.push(l));
  }, a.prototype.toArray = function() {
    return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, vd.MappingList = a, vd;
}
var wy;
function n1() {
  if (wy) return pd;
  wy = 1;
  var t = e1(), r = ho(), a = t1().ArraySet, s = XE().MappingList;
  function l(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new a(), this._names = new a(), this._mappings = new s(), this._sourcesContents = null;
  }
  return l.prototype._version = 3, l.fromSourceMap = function(f) {
    var p = f.sourceRoot, h = new l({
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
  }, l.prototype.addMapping = function(f) {
    var p = r.getArg(f, "generated"), h = r.getArg(f, "original", null), g = r.getArg(f, "source", null), y = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(p, h, g, y), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), y != null && (y = String(y), this._names.has(y) || this._names.add(y)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: g,
      name: y
    });
  }, l.prototype.setSourceContent = function(f, p) {
    var h = f;
    this._sourceRoot != null && (h = r.relative(this._sourceRoot, h)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(h)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(h)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, l.prototype.applySourceMap = function(f, p, h) {
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
  }, l.prototype._validateMapping = function(f, p, h, g) {
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
  }, l.prototype._serializeMappings = function() {
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
  }, l.prototype._generateSourcesContent = function(f, p) {
    return f.map(function(h) {
      if (!this._sourcesContents)
        return null;
      p != null && (h = r.relative(p, h));
      var g = r.toSetString(h);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, g) ? this._sourcesContents[g] : null;
    }, this);
  }, l.prototype.toJSON = function() {
    var f = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (f.file = this._file), this._sourceRoot != null && (f.sourceRoot = this._sourceRoot), this._sourcesContents && (f.sourcesContent = this._generateSourcesContent(f.sources, f.sourceRoot)), f;
  }, l.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, pd.SourceMapGenerator = l, pd;
}
var Vs = {}, yd = {}, Ay;
function $E() {
  return Ay || (Ay = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(a, s, l, u, f, p) {
      var h = Math.floor((s - a) / 2) + a, g = f(l, u[h], !0);
      return g === 0 ? h : g > 0 ? s - h > 1 ? r(h, s, l, u, f, p) : p == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : h : h - a > 1 ? r(a, h, l, u, f, p) : p == t.LEAST_UPPER_BOUND ? h : a < 0 ? -1 : a;
    }
    t.search = function(s, l, u, f) {
      if (l.length === 0)
        return -1;
      var p = r(
        -1,
        l.length,
        s,
        l,
        u,
        f || t.GREATEST_LOWER_BOUND
      );
      if (p < 0)
        return -1;
      for (; p - 1 >= 0 && u(l[p], l[p - 1], !0) === 0; )
        --p;
      return p;
    };
  })(yd)), yd;
}
var bd = {}, Ty;
function QE() {
  if (Ty) return bd;
  Ty = 1;
  function t(s, l, u) {
    var f = s[l];
    s[l] = s[u], s[u] = f;
  }
  function r(s, l) {
    return Math.round(s + Math.random() * (l - s));
  }
  function a(s, l, u, f) {
    if (u < f) {
      var p = r(u, f), h = u - 1;
      t(s, p, f);
      for (var g = s[f], y = u; y < f; y++)
        l(s[y], g) <= 0 && (h += 1, t(s, h, y));
      t(s, h + 1, y);
      var _ = h + 1;
      a(s, l, u, _ - 1), a(s, l, _ + 1, f);
    }
  }
  return bd.quickSort = function(s, l) {
    a(s, l, 0, s.length - 1);
  }, bd;
}
var Oy;
function JE() {
  if (Oy) return Vs;
  Oy = 1;
  var t = ho(), r = $E(), a = t1().ArraySet, s = e1(), l = QE().quickSort;
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
  }, Vs.SourceMapConsumer = u;
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
    return l(b.__originalMappings, t.compareByOriginalPositions), b;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function p() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(y, _) {
    for (var b = 1, v = 0, d = 0, S = 0, E = 0, O = 0, w = y.length, D = 0, x = {}, A = {}, M = [], k = [], q, X, B, G, $; D < w; )
      if (y.charAt(D) === ";")
        b++, D++, v = 0;
      else if (y.charAt(D) === ",")
        D++;
      else {
        for (q = new p(), q.generatedLine = b, G = D; G < w && !this._charIsMappingSeparator(y, G); G++)
          ;
        if (X = y.slice(D, G), B = x[X], B)
          D += X.length;
        else {
          for (B = []; D < G; )
            s.decode(y, D, A), $ = A.value, D = A.rest, B.push($);
          if (B.length === 2)
            throw new Error("Found a source, but no line and column");
          if (B.length === 3)
            throw new Error("Found a source and line, but no column");
          x[X] = B;
        }
        q.generatedColumn = v + B[0], v = q.generatedColumn, B.length > 1 && (q.source = E + B[1], E += B[1], q.originalLine = d + B[2], d = q.originalLine, q.originalLine += 1, q.originalColumn = S + B[3], S = q.originalColumn, B.length > 4 && (q.name = O + B[4], O += B[4])), k.push(q), typeof q.originalLine == "number" && M.push(q);
      }
    l(k, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, l(M, t.compareByOriginalPositions), this.__originalMappings = M;
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
  }, Vs.BasicSourceMapConsumer = f;
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
    l(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), l(this.__originalMappings, t.compareByOriginalPositions);
  }, Vs.IndexedSourceMapConsumer = h, Vs;
}
var _d = {}, Ny;
function KE() {
  if (Ny) return _d;
  Ny = 1;
  var t = n1().SourceMapGenerator, r = ho(), a = /(\r?\n)/, s = 10, l = "$$$isSourceNode$$$";
  function u(f, p, h, g, y) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = p ?? null, this.source = h ?? null, this.name = y ?? null, this[l] = !0, g != null && this.add(g);
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
    else if (p[l] || typeof p == "string")
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
    else if (p[l] || typeof p == "string")
      this.children.unshift(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, u.prototype.walk = function(p) {
    for (var h, g = 0, y = this.children.length; g < y; g++)
      h = this.children[g], h[l] ? h.walk(p) : h !== "" && p(h, {
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
    return g[l] ? g.replaceRight(p, h) : typeof g == "string" ? this.children[this.children.length - 1] = g.replace(p, h) : this.children.push("".replace(p, h)), this;
  }, u.prototype.setSourceContent = function(p, h) {
    this.sourceContents[r.toSetString(p)] = h;
  }, u.prototype.walkSourceContents = function(p) {
    for (var h = 0, g = this.children.length; h < g; h++)
      this.children[h][l] && this.children[h].walkSourceContents(p);
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
  }, _d.SourceNode = u, _d;
}
var Dy;
function WE() {
  return Dy || (Dy = 1, Gs.SourceMapGenerator = n1().SourceMapGenerator, Gs.SourceMapConsumer = JE().SourceMapConsumer, Gs.SourceNode = KE().SourceNode), Gs;
}
var My;
function eC() {
  return My || (My = 1, (function(t, r) {
    r.__esModule = !0;
    var a = rn(), s = void 0;
    try {
      var l = WE();
      s = l.SourceNode;
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
  })(nu, nu.exports)), nu.exports;
}
var ky;
function tC() {
  return ky || (ky = 1, (function(t, r) {
    r.__esModule = !0;
    function a(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = uh(), l = Fn(), u = a(l), f = rn(), p = eC(), h = a(p);
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
        var q = this.context, X = q.programs, B = q.decorators;
        for (x = 0, A = X.length; x < A; x++)
          X[x] && (k[x] = X[x], B[x] && (k[x + "_d"] = B[x], k.useDecorators = !0));
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
        for (var q = d; q--; )
          A = this.popStack(), S[q] = A, this.trackIds && (D[q] = this.popStack()), this.stringParams && (w[q] = this.popStack(), O[q] = this.popStack());
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
  })(tu, tu.exports)), tu.exports;
}
var Ry;
function nC() {
  return Ry || (Ry = 1, (function(t, r) {
    r.__esModule = !0;
    function a(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var s = HE(), l = a(s), u = K0(), f = a(u), p = GE(), h = VE(), g = tC(), y = a(g), _ = W0(), b = a(_), v = J0(), d = a(v), S = l.default.create;
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
  })(jl, jl.exports)), jl.exports;
}
var za = nC();
function Hi(t, r) {
  za.helpers[t] || za.registerHelper(t, r);
}
Hi("add", (t, r) => Number(t) + Number(r));
Hi("join", (t, r) => Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "");
Hi("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
Hi("indent", (t, r) => {
  const a = " ".repeat(Math.max(0, Number(t) || 0));
  return String(r ?? "").split(`
`).join(`
${a}`);
});
Hi("json", (t) => JSON.stringify(t));
Hi(
  "xmlEscape",
  (t) => String(t ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
);
const rC = "﷐", r1 = "﷑", aC = "﷒", jy = "[[[crec_veryUniqueUserPlaceHolder]]]", zy = "[[[crec_veryUniqueCharPlaceHolder]]]";
function Ly(t) {
  return t.replace(
    /\{\{|\}\}|[\uFDD0-\uFDD2]/g,
    (r) => r === "{{" ? r1 : r === "}}" ? aC : rC + r
  );
}
function iC(t) {
  return t.replace(
    /\uFDD0([\uFDD0-\uFDD2])|[\uFDD1\uFDD2]/g,
    (r, a) => a || (r === r1 ? "{{" : "}}")
  );
}
function Yt(t) {
  return typeof t == "string" ? Ly(t) : Array.isArray(t) ? t.map((r) => Yt(r)) : t && typeof t == "object" ? Object.fromEntries(Object.entries(t).map(([r, a]) => [Ly(r), Yt(a)])) : t;
}
function oo(t, r, a) {
  let s = za.compile(t, { noEscape: !0 })(r);
  return s = s.replaceAll("{{user}}", jy), s = s.replaceAll("{{char}}", zy), s = a(s), s = s.replaceAll(jy, "{{user}}"), s = s.replaceAll(zy, "{{char}}"), iC(s);
}
const gn = SillyTavern.getContext(), Jn = [
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
}, sC = "Continue the current text of the {{targetField}} field from exactly where it stops. Output only the new text that comes after it, in the required output format. Do not repeat, rewrite or summarize the existing text.";
new m0("dumb", {}).getSettings();
async function oC({
  profileId: t,
  userPrompt: r,
  buildPromptOptions: a,
  continueFrom: s,
  session: l,
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
  const d = gn.extensionSettings.connectionManager?.profiles?.find((A) => A.id === t);
  if (!d)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const S = d.api ? gn.CONNECT_API_MAP[d.api].selected : void 0;
  if (!S)
    throw new Error(`Could not determine API for profile "${d.name}".`);
  const E = {};
  E.char = Yt(l.fields.name.value) || "{{char}}", E.user = y && _r ? _r : "{{user}}", E.persona = "{{persona}}", E.targetField = b, E.userInstructions = Yt(r.trim()), E.fieldSpecificInstructions = Yt(
    l.draftFields[b]?.prompt ?? l.fields[b]?.prompt
  ), E.activeFormatInstructions = za.compile(h.content, { noEscape: !0 })(
    E
  );
  {
    const A = [];
    l.selectedCharacterIndexes.forEach((M) => {
      const k = parseInt(M), q = u[k];
      q && A.push(q);
    }), E.characters = Yt(A);
  }
  {
    const A = {};
    Object.entries(f).filter(
      ([M, k]) => k.length > 0 && l.selectedWorldNames.includes(M) && k.some((q) => !q.disable)
    ).forEach(([M, k]) => {
      A[M] = k.filter((q) => !q.disable);
    }), E.lorebooks = Yt(A);
  }
  {
    const A = {}, M = {}, k = {}, q = b.startsWith("alternate_greetings_"), X = Tt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(l.fields).forEach(([G, $]) => {
      let le = !1;
      if (X) {
        const fe = G.startsWith("alternate_greetings_");
        q ? le = fe && G !== b || G === "first_mes" : le = fe;
      }
      le || (Jn.includes(G) ? A[$.label] = $.value : G.startsWith("alternate_greetings_") && (M[G] = $.value));
    }), Object.entries(l.draftFields || {}).forEach(([G, $]) => {
      k[$.label] = $.value;
    });
    const B = {};
    Object.keys(A).length > 0 && (B.core = A), Object.keys(M).length > 0 && (B.alternate_greetings = M), Object.keys(k).length > 0 && (B.draft = k), E.fields = Yt(B);
  }
  const O = [];
  {
    for (const A of g) {
      if (A.promptName === "chatHistory") {
        const X = await w0(S, a);
        if (X.warnings && X.warnings.length > 0)
          for (const B of X.warnings)
            we("warning", B);
        O.push(...X.result);
        continue;
      }
      let M = structuredClone(E);
      A.promptName === "stDescription" && (M.char = "{{char}}", M.user = "{{user}}");
      const k = p[A.promptName];
      if (!k)
        continue;
      const q = {
        role: A.role,
        content: oo(k.content, M, gn.substituteParams)
      };
      q.content && O.push(q);
    }
    s && (O.push({
      role: "user",
      content: za.compile(sC, { noEscape: !0 })(E)
    }), O.push({
      role: "assistant",
      content: Y0(s, v)
    }));
  }
  const w = await gn.ConnectionManagerRequestService.sendRequest(
    t,
    O,
    _
  );
  if (s) {
    const A = TE(s, w.content, v);
    return A.trim() === s.trim() ? (we("warning", "The model didn't add any text. Try again or use a different model."), s) : A;
  }
  const D = wu(w.content, v);
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
function lC(t, r) {
  const a = t.match(/\d+/g)?.map(Number) ?? [], s = r.match(/\d+/g)?.map(Number) ?? [];
  for (let l = 0; l < Math.max(a.length, s.length); l++) {
    const u = (a[l] ?? 0) - (s[l] ?? 0);
    if (u !== 0) return u;
  }
  return 0;
}
async function uC(t, r) {
  let a, s = t.formatVersion;
  for (; ; ) {
    const l = (f) => lC(f.to, s) > 0, u = r.find((f) => f.from === s && l(f)) ?? r.find((f) => f.from === "*" && l(f));
    if (!u) return a;
    a = await u.action(a ?? structuredClone(t)), a.formatVersion = u.to, s = u.to;
  }
}
const ka = "SillyTavern-Character-Creator", ch = "0.3.0", cC = "F_1.10", a1 = {
  EXTENSION: "charCreator"
}, iu = [
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
], tt = {
  stDescription: Pd,
  charDefinitions: Id,
  lorebookDefinitions: U0,
  xmlFormat: gx,
  jsonFormat: vx,
  noneFormat: yx,
  worldInfoCharDefinition: H0,
  existingFieldDefinitions: so,
  taskDescription: sh,
  outputFormatInstructions: ih,
  personaDescription: bx,
  reviseJsonPrompt: _x,
  reviseXmlPrompt: Sx,
  reviseTaskDescription: xx
}, i1 = {
  version: ch,
  formatVersion: cC,
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
      content: tt.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: tt.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: tt.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: tt.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: tt.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: tt.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: tt.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: so,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: sh,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: ih,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: tt.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: tt.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: tt.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: tt.reviseTaskDescription,
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
function qd(t) {
  const a = t.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let s = !1;
  return a.map((l, u) => {
    const f = l.replace(/^\d+/, "");
    if (f) {
      const p = s ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return s || (s = !0), p;
    }
    return "";
  }).join("");
}
const Tt = new m0(a1.EXTENSION, i1);
async function fC() {
  return new Promise((t, r) => {
    Tt.initializeSettings({ strategy: [] }).then(
      () => uC(Tt.getSettings(), [
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
                  content: tt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: tt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: tt.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: tt.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: tt.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: tt.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: tt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: so,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: sh,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: ih,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: tt.personaDescription,
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
                  content: tt.personaDescription,
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
                  content: tt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: tt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: tt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: so,
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
            return a.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Pd), s;
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
              content: tt.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: tt.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: tt.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, a.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Id), a.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = U0), a.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = so), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(a) {
            const s = {
              ...a
            };
            return a.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Pd), s;
          }
        },
        {
          from: "F_1.9",
          to: "F_1.10",
          action(a) {
            const s = {
              ...a
            };
            return a.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Id), a.prompts.worldInfoCharDefinition.isDefault && (s.prompts.worldInfoCharDefinition.content = H0), s;
          }
        }
      ])
    ).then((a) => {
      a && (gn.extensionSettings[a1.EXTENSION] = { ...a, version: ch }, Tt.saveSettings()), t();
    }).catch((a) => {
      console.error(`[${ka}] Error initializing settings:`, a), we("error", `[${ka}] Failed to initialize settings: ${a.message}`), gn.Popup.show.confirm(
        `[${ka}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (Tt.resetSettings(), we("success", `[${ka}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const ye = ({ children: t, className: r, overrideDefaults: a = !1, ...s }) => {
  const l = ee.useMemo(() => {
    const u = [];
    return a || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [a, r]);
  return /* @__PURE__ */ T.jsx("button", { className: l, ...s, children: t });
}, dC = ({ label: t, className: r, overrideDefaults: a = !1, type: s = "text", ...l }) => {
  const u = ee.useMemo(() => {
    const f = [];
    return a || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [a, r, s]);
  if (s === "checkbox") {
    const f = a ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ T.jsxs("label", { className: f, children: [
      /* @__PURE__ */ T.jsx("input", { type: "checkbox", ...l }),
      t && /* @__PURE__ */ T.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ T.jsx("input", { type: s, className: u, ...l });
}, Au = ({ children: t, className: r, overrideDefaults: a = !1, ...s }) => {
  const l = ee.useMemo(() => {
    const u = [];
    return a || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [a, r]);
  return /* @__PURE__ */ T.jsx("select", { className: l, ...s, children: t });
}, Rn = ({ children: t, className: r, overrideDefaults: a = !1, ...s }) => {
  const l = ee.useMemo(() => {
    const u = [];
    return a || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [a, r]);
  return /* @__PURE__ */ T.jsx("textarea", { className: l, ...s, children: t });
};
var hC = h0(), yn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(yn || {}), Kr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Kr || {});
const pC = SillyTavern.getContext(), Pi = ({
  content: t,
  type: r,
  inputValue: a = "",
  options: s = {},
  preventEscape: l = !1,
  onComplete: u
}) => {
  var f;
  const p = ee.useRef(null), h = ee.useRef(null), [g, y] = ee.useState(!1), [_, b] = ee.useState(null), v = ee.useRef(pC.uuidv4()), d = ee.useRef({
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
      x.preventDefault(), l || S(Kr.CANCELLED);
    };
    return w.addEventListener("cancel", D), d.current.dlg = w, d.current.mainInput = h.current, Ai.util.popups.push(d.current), w.showModal || (w.classList.add("poly_dialog"), cv.registerDialog(w), new ResizeObserver((x) => {
      for (const A of x)
        cv.reposition(A.target);
    }).observe(w)), w.showModal(), Qf(), () => {
      uv(Ai.util.popups, d.current), Qf(), w.removeEventListener("cancel", D);
    };
  }, []);
  const S = async (w) => {
    var D, x;
    let A = w;
    if (r === yn.INPUT && (w >= Kr.AFFIRMATIVE ? A = (D = h.current) == null ? void 0 : D.value : w === Kr.NEGATIVE ? A = !1 : w === Kr.CANCELLED ? A = null : A = !1), (x = s.customInputs) != null && x.length) {
      const k = new Map(
        s.customInputs.map((q) => {
          var X;
          const B = (X = p.current) == null ? void 0 : X.querySelector(`#${q.id}`);
          return [B.id, B.checked];
        })
      );
      d.current.inputResults = k;
    }
    if (d.current.result = w, d.current.value = A, s.onClosing && !await s.onClosing(d.current)) {
      y(!0), d.current.value = void 0, d.current.result = void 0, d.current.inputResults = void 0;
      return;
    }
    y(!1), Ai.util.lastResult = {
      value: A,
      result: w,
      inputResults: d.current.inputResults
    };
    const M = p.current;
    M && (M.setAttribute("closing", ""), Qf(), x_(M, async () => {
      var k;
      if (M.close(), s.onClose && await s.onClose(d.current), uv(Ai.util.popups, d.current), Ai.util.popups.length > 0) {
        const q = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), X = q?.getAttribute("data-id"), B = Ai.util.popups.find((G) => G.id === X);
        B && B.lastFocus && B.lastFocus.focus();
      }
      u(A);
    }));
  }, E = (w) => {
    w.target instanceof HTMLElement && w.target !== p.current && (b(w.target), d.current.lastFocus = w.target);
  }, O = async (w) => {
  };
  return hC.createPortal(
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
          r === yn.INPUT && /* @__PURE__ */ T.jsx(
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
          r !== yn.DISPLAY && /* @__PURE__ */ T.jsxs("div", { className: "popup-controls", children: [
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
            r !== yn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ T.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => S(Kr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== yn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ T.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => S(Kr.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === yn.DISPLAY && /* @__PURE__ */ T.jsx(
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
}, Ys = (t, r, a) => {
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
}, br = SillyTavern.getContext(), s1 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: a = "Select a Connection Profile",
  onChange: s,
  onCreate: l,
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
      Ys(D, r, v) && (y(Date.now()), l?.(D));
    }, O = (D, x) => {
      const A = Ys(D, r, v), M = Ys(x, r, v);
      (A || M) && y(Date.now()), u?.(D, x), p === D.id && !M && (h(""), s?.(void 0));
    }, w = (D) => {
      Ys(D, r, v) && (y(Date.now()), f?.(D), p === D.id && (h(""), s?.(void 0)));
    };
    return br.eventSource.on("CONNECTION_PROFILE_CREATED", E), br.eventSource.on("CONNECTION_PROFILE_UPDATED", O), br.eventSource.on("CONNECTION_PROFILE_DELETED", w), () => {
      br.eventSource.removeListener("CONNECTION_PROFILE_CREATED", E), br.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), br.eventSource.removeListener("CONNECTION_PROFILE_DELETED", w);
    };
  }, [_, p, r, v, s, l, u, f]);
  const d = ee.useMemo(() => {
    if (!_) return [];
    const E = b.filter((w) => Ys(w, r, v)), O = {};
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
  return _ ? /* @__PURE__ */ T.jsxs(Au, { value: p, onChange: S, children: [
    /* @__PURE__ */ T.jsx("option", { value: "", children: a }),
    d.map((E) => /* @__PURE__ */ T.jsx("optgroup", { label: E.label, children: E.profiles.map((O) => /* @__PURE__ */ T.jsx("option", { value: O.id, children: O.name }, O.id)) }, E.label))
  ] }) : /* @__PURE__ */ T.jsx(Au, { disabled: !0, value: "", children: /* @__PURE__ */ T.jsx("option", { children: "Connection Manager disabled" }) });
}, mC = vu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: a, showSelectInput: s, onToggle: l, onDelete: u, onSelectChange: f }) => {
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
        Au,
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
        ye,
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
          onClick: () => l(p)
        }
      ),
      r && !_ && /* @__PURE__ */ T.jsx("span", { style: w }),
      a && y && /* @__PURE__ */ T.jsx(
        ye,
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
), gC = ({
  items: t,
  onItemsChange: r,
  showToggleButton: a = !1,
  showDeleteButton: s = !1,
  showSelectInput: l = !1,
  sortableJsOptions: u = {}
}) => {
  const f = ee.useRef(null), p = ee.useRef(null);
  ee.useEffect(() => (f.current && (p.current = Ne.create(f.current, {
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
    mC,
    {
      item: _,
      showToggleButton: a,
      showDeleteButton: s,
      showSelectInput: l,
      onToggle: h,
      onDelete: g,
      onSelectChange: y
    },
    _.id
  )) });
}, su = ({
  items: t,
  value: r,
  onChange: a,
  placeholder: s = "Select items...",
  closeOnSelect: l = !1,
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
    const k = (q) => {
      w.current && !w.current.contains(q.target) && S(!1);
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
    return new Ui(t, k);
  }, [t, h, _]), x = ee.useMemo(() => !h || !E.trim() || !D ? t : D.search(E.trim()).map((k) => k.item), [t, E, h, D]), A = async (k) => {
    let q;
    u ? q = r.includes(k) ? r.filter((X) => X !== k) : [...r, k] : q = r.includes(k) ? [] : [k], !(p && !await Promise.resolve(p(r, q))) && (a(q), l && S(!1));
  }, M = ee.useMemo(() => {
    var k;
    return r.length === 0 ? s : r.length === 1 ? ((k = t.find((q) => q.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
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
                    dC,
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
                vC,
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
}, vC = vu.memo(({ item: t, isSelected: r, onClick: a }) => {
  const [s, l] = ee.useState(!1);
  return /* @__PURE__ */ T.jsxs(
    "li",
    {
      onClick: () => a(t.value),
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
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
}), Sd = SillyTavern.getContext(), Tu = ({
  value: t,
  items: r,
  readOnlyValues: a = [],
  label: s,
  onChange: l,
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
    const w = await Sd.Popup.show.input(
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
    u([...r, x]), l(x.value, t);
  }, E = async () => {
    if (!v) {
      await we("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (d(v.value)) {
      await we("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const w = await Sd.Popup.show.input(
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
    u(A), l(x.value, t);
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
    if (!await Sd.Popup.show.confirm(
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
    l(A, t);
  };
  return /* @__PURE__ */ T.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ T.jsx(Au, { value: t ?? "", onChange: (w) => l(w.target.value, t), children: r.map((w) => /* @__PURE__ */ T.jsx("option", { value: w.value, children: w.label }, w.value)) }),
    f && /* @__PURE__ */ T.jsx(
      ye,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: S,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ T.jsx(
      ye,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: E,
        disabled: !v,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ T.jsx(
      ye,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: O,
        disabled: !v,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    b?.map((w) => /* @__PURE__ */ T.jsx(
      ye,
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
}, o1 = () => {
  const [, t] = ee.useState(0);
  return ee.useCallback(() => {
    t((a) => a + 1);
  }, []);
}, xd = SillyTavern.getContext(), yC = () => {
  const t = o1(), r = Tt.getSettings(), [a, s] = ee.useState(iu[0]), l = ee.useCallback(
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
    l((A) => {
      A.mainContextTemplatePreset = x ?? "default";
    });
  }, g = (x) => {
    l((A) => {
      const M = {};
      x.forEach((k) => {
        M[k.value] = A.mainContextTemplatePresets[k.value] ?? structuredClone(
          A.mainContextTemplatePresets[A.mainContextTemplatePreset] ?? A.mainContextTemplatePresets.default
        );
      }), A.mainContextTemplatePresets = M;
    });
  }, y = (x) => {
    l((A) => {
      const M = x.map((X) => ({
        promptName: X.id,
        enabled: X.enabled,
        role: X.selectValue ?? "user"
      })), k = {
        ...A.mainContextTemplatePresets[A.mainContextTemplatePreset],
        prompts: M
      }, q = {
        ...A.mainContextTemplatePresets,
        [A.mainContextTemplatePreset]: k
      };
      A.mainContextTemplatePresets = q;
    });
  }, _ = async () => {
    await xd.Popup.show.confirm("Restore default", "Are you sure?") && l((A) => {
      A.mainContextTemplatePresets = {
        ...A.mainContextTemplatePresets,
        default: structuredClone(i1.mainContextTemplatePresets.default)
      }, A.mainContextTemplatePreset === "default" ? t() : A.mainContextTemplatePreset = "default";
    });
  }, b = (x) => {
    l((A) => {
      const M = x.map((B) => B.value);
      Object.keys(A.prompts).filter((B) => !M.includes(B)).forEach((B) => {
        Object.values(A.mainContextTemplatePresets).forEach((G) => {
          G.prompts = G.prompts.filter(($) => $.promptName !== B);
        });
      });
      const X = {};
      x.forEach((B) => {
        X[B.value] = A.prompts[B.value] ?? { content: "", isDefault: !1, label: B.label };
      }), A.prompts = X;
    });
  }, v = (x) => {
    const A = qd(x);
    return A ? r.prompts[A] ? (we("error", `Prompt name already exists: ${A}`), { confirmed: !1 }) : (l((M) => {
      M.prompts = {
        ...M.prompts,
        [A]: { content: M.prompts[a]?.content ?? "", isDefault: !1, label: x }
      };
      const k = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([q, X]) => [
          q,
          {
            ...X,
            prompts: [...X.prompts, { enabled: !0, promptName: A, role: "user" }]
          }
        ])
      );
      M.mainContextTemplatePresets = k;
    }), s(A), { confirmed: !0, value: A }) : (we("error", `Invalid prompt name: ${x}`), { confirmed: !1 });
  }, d = (x, A) => {
    const M = qd(A);
    return M ? r.prompts[M] ? (we("error", `Prompt name already exists: ${M}`), { confirmed: !1 }) : (l((k) => {
      const { [x]: q, ...X } = k.prompts;
      k.prompts = {
        ...X,
        [M]: { ...q, label: A }
      };
      const B = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([G, $]) => [
          G,
          {
            ...$,
            prompts: $.prompts.map((le) => le.promptName === x ? { ...le, promptName: M } : le)
          }
        ])
      );
      k.mainContextTemplatePresets = B;
    }), s(M), { confirmed: !0, value: M }) : (we("error", `Invalid prompt name: ${A}`), { confirmed: !1 });
  }, S = (x) => {
    const A = x.target.value;
    l((M) => {
      const k = M.prompts[a];
      k && (M.prompts = {
        ...M.prompts,
        [a]: {
          ...k,
          // Copy existing properties
          content: A,
          isDefault: iu.includes(a) ? tt[a] === A : !1
        }
      });
    });
  }, E = async () => {
    const x = r.prompts[a];
    if (!x) return we("warning", "No prompt selected.");
    await xd.Popup.show.confirm("Restore Default", `Restore default for "${x.label}"?`) && l((M) => {
      M.prompts = {
        ...M.prompts,
        [a]: {
          ...M.prompts[a],
          content: tt[a],
          isDefault: !0
        }
      };
    });
  }, O = async () => {
    await xd.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (Tt.resetSettings(), t(), we("success", "Settings have been reset."));
  }, w = r.prompts[a], D = iu.includes(a);
  return /* @__PURE__ */ T.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ T.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ T.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ T.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ T.jsx(
          ye,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: _
          }
        )
      ] }),
      /* @__PURE__ */ T.jsx(
        Tu,
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
        gC,
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
          ye,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: E
          }
        )
      ] }),
      /* @__PURE__ */ T.jsx(
        Tu,
        {
          label: "Prompt",
          items: f,
          value: a,
          readOnlyValues: iu,
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
        Rn,
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
          onChange: (x) => l((A) => {
            A.showSaveAsWorldInfoEntry.show = x.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ T.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ T.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ T.jsxs(ye, { className: "danger_button", style: { width: "auto" }, onClick: O, children: [
      /* @__PURE__ */ T.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, Py = ({
  fieldId: t,
  label: r,
  value: a,
  prompt: s,
  large: l = !1,
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
  /* @__PURE__ */ T.jsxs("div", { className: `field-container ${l ? "large-field" : ""}`, children: [
    /* @__PURE__ */ T.jsx(Rn, { value: a, onChange: (O) => g(t, O.target.value), rows: u }),
    /* @__PURE__ */ T.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ T.jsx(ye, { onClick: () => _(t), disabled: h, title: "Generate field content", children: h ? /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ T.jsx(ye, { onClick: () => b(t), disabled: h, title: "Continue from current content", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ T.jsx(ye, { onClick: () => v(t), title: "Clear field content", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-eraser" }) }),
      E && !p && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ T.jsx(ye, { onClick: () => E(t), title: "Revise with AI chat", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-comments" }) }),
      !p && d && /* @__PURE__ */ T.jsx(ye, { onClick: () => d(t), title: "Compare with loaded character", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      p && S && /* @__PURE__ */ T.jsx(ye, { onClick: () => S(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  f && /* @__PURE__ */ T.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ T.jsx(
    Rn,
    {
      value: s,
      onChange: (O) => y(t, O.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), bC = SillyTavern.getContext(), _C = ({
  greetings: t,
  onGreetingsChange: r,
  onGenerate: a,
  onContinue: s,
  onCompare: l,
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
    if (await bC.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
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
            ye,
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
      /* @__PURE__ */ T.jsxs(ye, { onClick: h, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ T.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ T.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ T.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ T.jsx(
          Rn,
          {
            value: _?.value ?? "",
            onChange: (b) => y(f, "value", b.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ T.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ T.jsx(
          Rn,
          {
            value: _?.prompt ?? "",
            onChange: (b) => y(f, "prompt", b.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ T.jsx(ye, { onClick: () => a(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ T.jsx(ye, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ T.jsx(
          ye,
          {
            onClick: () => y(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ T.jsx(ye, { onClick: () => l(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ T.jsx(
          ye,
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
      var l;
      typeof s == "function" ? (l = s, s = {}) : "callback" in s && (l = s.callback);
      var u = this.castInput(r, s), f = this.castInput(a, s), p = this.removeEmpty(this.tokenize(u, s)), h = this.removeEmpty(this.tokenize(f, s));
      return this.diffWithOptionsObj(p, h, s, l);
    }, t.prototype.diffWithOptionsObj = function(r, a, s, l) {
      var u = this, f, p = function(x) {
        if (x = u.postProcess(x, s), l) {
          setTimeout(function() {
            l(x);
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
          var q = !1;
          if (k) {
            var X = k.oldPos - x;
            q = k && 0 <= X && X < h;
          }
          var B = M && M.oldPos + 1 < g;
          if (!q && !B) {
            d[x] = void 0;
            continue;
          }
          if (!B || q && M.oldPos < k.oldPos ? A = u.addToPath(k, !0, !1, 0, s) : A = u.addToPath(M, !1, !0, 1, s), S = u.extractCommon(A, a, r, x, s), A.oldPos + 1 >= g && S + 1 >= h)
            return p(u.buildValues(A.lastComponent, a, r)) || !0;
          d[x] = A, A.oldPos + 1 >= g && (O = Math.min(O, x - 1)), S + 1 >= h && (E = Math.max(E, x + 1));
        }
        y++;
      };
      if (l)
        (function x() {
          setTimeout(function() {
            if (y > _ || Date.now() > v)
              return l(void 0);
            w() || x();
          }, 0);
        })();
      else
        for (; y <= _ && Date.now() <= v; ) {
          var D = w();
          if (D)
            return D;
        }
    }, t.prototype.addToPath = function(r, a, s, l, u) {
      var f = r.lastComponent;
      return f && !u.oneChangePerToken && f.added === a && f.removed === s ? {
        oldPos: r.oldPos + l,
        lastComponent: { count: f.count + 1, added: a, removed: s, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + l,
        lastComponent: { count: 1, added: a, removed: s, previousComponent: f }
      };
    }, t.prototype.extractCommon = function(r, a, s, l, u) {
      for (var f = a.length, p = s.length, h = r.oldPos, g = h - l, y = 0; g + 1 < f && h + 1 < p && this.equals(s[h + 1], a[g + 1], u); )
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
      for (var l = [], u; r; )
        l.push(r), u = r.previousComponent, delete r.previousComponent, r = u;
      l.reverse();
      for (var f = l.length, p = 0, h = 0, g = 0; p < f; p++) {
        var y = l[p];
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
      return l;
    }, t;
  })()
), SC = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
    return r;
  })(aa)
);
new xC();
function Iy(t, r) {
  var a;
  for (a = 0; a < t.length && a < r.length; a++)
    if (t[a] != r[a])
      return t.slice(0, a);
  return t.slice(0, a);
}
function By(t, r) {
  var a;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (a = 0; a < t.length && a < r.length; a++)
    if (t[t.length - (a + 1)] != r[r.length - (a + 1)])
      return t.slice(-a);
  return t.slice(-a);
}
function Fd(t, r, a) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return a + t.slice(r.length);
}
function Zd(t, r, a) {
  if (!r)
    return t + a;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + a;
}
function Xs(t, r) {
  return Fd(t, r, "");
}
function ou(t, r) {
  return Zd(t, r, "");
}
function Uy(t, r) {
  return r.slice(0, EC(t, r));
}
function EC(t, r) {
  var a = 0;
  t.length > r.length && (a = t.length - r.length);
  var s = r.length;
  t.length < r.length && (s = t.length);
  var l = Array(s), u = 0;
  l[0] = 0;
  for (var f = 1; f < s; f++) {
    for (r[f] == r[u] ? l[f] = l[u] : l[f] = u; u > 0 && r[f] != r[u]; )
      u = l[u];
    r[f] == r[u] && u++;
  }
  u = 0;
  for (var p = a; p < t.length; p++) {
    for (; u > 0 && t[p] != r[u]; )
      u = l[u];
    t[p] == r[u] && u++;
  }
  return u;
}
function $s(t) {
  var r;
  for (r = t.length - 1; r >= 0 && t[r].match(/\s/); r--)
    ;
  return t.substring(r + 1);
}
function Jr(t) {
  var r = t.match(/^\s*/);
  return r ? r[0] : "";
}
var l1 = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), Ou = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", CC = new RegExp("[".concat(Ou, "]+|\\s+|[^").concat(Ou, "]"), "ug"), wC = (
  /** @class */
  (function(t) {
    l1(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(a, s, l) {
      return l.ignoreCase && (a = a.toLowerCase(), s = s.toLowerCase()), a.trim() === s.trim();
    }, r.prototype.tokenize = function(a, s) {
      s === void 0 && (s = {});
      var l;
      if (s.intlSegmenter) {
        var u = s.intlSegmenter;
        if (u.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        l = Array.from(u.segment(a), function(h) {
          return h.segment;
        });
      } else
        l = a.match(CC) || [];
      var f = [], p = null;
      return l.forEach(function(h) {
        /\s/.test(h) ? p == null ? f.push(h) : f.push(f.pop() + h) : p != null && /\s/.test(p) ? f[f.length - 1] == p ? f.push(f.pop() + h) : f.push(p + h) : f.push(h), p = h;
      }), f;
    }, r.prototype.join = function(a) {
      return a.map(function(s, l) {
        return l == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(a, s) {
      if (!a || s.oneChangePerToken)
        return a;
      var l = null, u = null, f = null;
      return a.forEach(function(p) {
        p.added ? u = p : p.removed ? f = p : ((u || f) && Hy(l, f, u, p), l = p, u = null, f = null);
      }), (u || f) && Hy(l, f, u, null), a;
    }, r;
  })(aa)
), AC = new wC();
function u1(t, r, a) {
  return AC.diff(t, r, a);
}
function Hy(t, r, a, s) {
  if (r && a) {
    var l = Jr(r.value), u = $s(r.value), f = Jr(a.value), p = $s(a.value);
    if (t) {
      var h = Iy(l, f);
      t.value = Zd(t.value, f, h), r.value = Xs(r.value, h), a.value = Xs(a.value, h);
    }
    if (s) {
      var g = By(u, p);
      s.value = Fd(s.value, p, g), r.value = ou(r.value, g), a.value = ou(a.value, g);
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
    var _ = Jr(s.value), b = Jr(r.value), v = $s(r.value), d = Iy(_, b);
    r.value = Xs(r.value, d);
    var S = By(Xs(_, d), v);
    r.value = ou(r.value, S), s.value = Fd(s.value, _, S), t.value = Zd(t.value, _, _.slice(0, _.length - S.length));
  } else if (s) {
    var E = Jr(s.value), O = $s(r.value), w = Uy(O, E);
    r.value = ou(r.value, w);
  } else if (t) {
    var D = $s(t.value), x = Jr(r.value), w = Uy(D, x);
    r.value = Xs(r.value, w);
  }
}
var TC = (
  /** @class */
  (function(t) {
    l1(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      var s = new RegExp("(\\r?\\n)|[".concat(Ou, "]+|[^\\S\\n\\r]+|[^").concat(Ou, "]"), "ug");
      return a.match(s) || [];
    }, r;
  })(aa)
);
new TC();
var OC = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), NC = (
  /** @class */
  (function(t) {
    OC(r, t);
    function r() {
      var a = t !== null && t.apply(this, arguments) || this;
      return a.tokenize = c1, a;
    }
    return r.prototype.equals = function(a, s, l) {
      return l.ignoreWhitespace ? ((!l.newlineIsToken || !a.includes(`
`)) && (a = a.trim()), (!l.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : l.ignoreNewlineAtEof && !l.newlineIsToken && (a.endsWith(`
`) && (a = a.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), t.prototype.equals.call(this, a, s, l);
    }, r;
  })(aa)
);
new NC();
function c1(t, r) {
  r.stripTrailingCr && (t = t.replace(/\r\n/g, `
`));
  var a = [], s = t.split(/(\n|\r\n)/);
  s[s.length - 1] || s.pop();
  for (var l = 0; l < s.length; l++) {
    var u = s[l];
    l % 2 && !r.newlineIsToken ? a[a.length - 1] += u : a.push(u);
  }
  return a;
}
var DC = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), MC = (
  /** @class */
  (function(t) {
    DC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      return a.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(aa)
);
new MC();
var kC = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), RC = (
  /** @class */
  (function(t) {
    kC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      return a.split(/([{}:;,]|\s+)/);
    }, r;
  })(aa)
);
new RC();
var jC = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), zC = (
  /** @class */
  (function(t) {
    jC(r, t);
    function r() {
      var a = t !== null && t.apply(this, arguments) || this;
      return a.tokenize = c1, a;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(a, s) {
      var l = s.undefinedReplacement, u = s.stringifyReplacer, f = u === void 0 ? function(p, h) {
        return typeof h > "u" ? l : h;
      } : u;
      return typeof a == "string" ? a : JSON.stringify(Gd(a, null, null, f), null, "  ");
    }, r.prototype.equals = function(a, s, l) {
      return t.prototype.equals.call(this, a.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), l);
    }, r;
  })(aa)
);
new zC();
function Gd(t, r, a, s, l) {
  r = r || [], a = a || [], s && (t = s(l === void 0 ? "" : l, t));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === t)
      return a[u];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), a.push(f), u = 0; u < t.length; u += 1)
      f[u] = Gd(t[u], r, a, s, String(u));
    return r.pop(), a.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, a.push(f);
    var p = [], h;
    for (h in t)
      Object.prototype.hasOwnProperty.call(t, h) && p.push(h);
    for (p.sort(), u = 0; u < p.length; u += 1)
      h = p[u], f[h] = Gd(t[h], r, a, s, h);
    r.pop(), a.pop();
  } else
    f = t;
  return f;
}
var LC = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), PC = (
  /** @class */
  (function(t) {
    LC(r, t);
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
new PC();
const IC = ({ originalContent: t, newContent: r, fieldName: a }) => {
  const s = ee.useMemo(() => {
    const l = u1(t, r);
    let u = "", f = "";
    return l.forEach((p) => {
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
}, BC = (t) => Object.entries(t.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, a) => {
  const s = parseInt(r[0].split("_")[2]), l = parseInt(a[0].split("_")[2]);
  return s - l;
}).map(([, r]) => ({ value: r.value, prompt: r.prompt })), UC = (t, r, a, s) => {
  const l = structuredClone(t);
  if (a === "field" && s) {
    const u = r;
    return l.fields[s] && (l.fields[s].value = u.response), l;
  }
  if (a === "global") {
    const u = r;
    if (u.fields_to_change?.length)
      for (const h of u.fields_to_change)
        l.fields[h.field] ? l.fields[h.field].value = h.value : l.draftFields[h.field] && (l.draftFields[h.field].value = h.value);
    if (u.draft_fields_to_remove?.length)
      for (const h of u.draft_fields_to_remove)
        l.draftFields[h] && delete l.draftFields[h];
    let f = BC(l), p = !1;
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
    u.greetings_to_add?.length && (p = !0, f.push(...u.greetings_to_add.map((h) => ({ value: h, prompt: "" })))), p && (Object.keys(l.fields).forEach((h) => {
      h.startsWith("alternate_greetings_") && delete l.fields[h];
    }), f.forEach((h, g) => {
      const y = `alternate_greetings_${g + 1}`;
      l.fields[y] = {
        ...h,
        label: `Alternate Greeting ${g + 1}`
      };
    }));
  }
  return l;
}, HC = (t, r) => {
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
  const l = a?.Parent ?? Object;
  class u extends l {
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
class Ii extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class f1 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const d1 = {};
function La(t) {
  return d1;
}
function h1(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, l]) => r.indexOf(+s) === -1).map(([s, l]) => l);
}
function Vd(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function fh(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function dh(t) {
  return t == null;
}
function hh(t) {
  const r = t.startsWith("^") ? 1 : 0, a = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, a);
}
function qC(t, r) {
  const a = (t.toString().split(".")[1] || "").length, s = r.toString();
  let l = (s.split(".")[1] || "").length;
  if (l === 0 && /\d?e-\d?/.test(s)) {
    const h = s.match(/\d?e-(\d?)/);
    h?.[1] && (l = Number.parseInt(h[1]));
  }
  const u = a > l ? a : l, f = Number.parseInt(t.toFixed(u).replace(".", "")), p = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % p / 10 ** u;
}
const qy = Symbol("evaluating");
function at(t, r, a) {
  let s;
  Object.defineProperty(t, r, {
    get() {
      if (s !== qy)
        return s === void 0 && (s = qy, s = a()), s;
    },
    set(l) {
      Object.defineProperty(t, r, {
        value: l
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Ia(t, r, a) {
  Object.defineProperty(t, r, {
    value: a,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Ba(...t) {
  const r = {};
  for (const a of t) {
    const s = Object.getOwnPropertyDescriptors(a);
    Object.assign(r, s);
  }
  return Object.defineProperties({}, r);
}
function Fy(t) {
  return JSON.stringify(t);
}
const p1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Nu(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const FC = fh(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function lo(t) {
  if (Nu(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const a = r.prototype;
  return !(Nu(a) === !1 || Object.prototype.hasOwnProperty.call(a, "isPrototypeOf") === !1);
}
function m1(t) {
  return lo(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const ZC = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ju(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ia(t, r, a) {
  const s = new t._zod.constr(r ?? t._zod.def);
  return (!r || a?.parent) && (s._zod.parent = t), s;
}
function ve(t) {
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
function GC(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const VC = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function YC(t, r) {
  const a = t._zod.def, s = Ba(t._zod.def, {
    get shape() {
      const l = {};
      for (const u in r) {
        if (!(u in a.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && (l[u] = a.shape[u]);
      }
      return Ia(this, "shape", l), l;
    },
    checks: []
  });
  return ia(t, s);
}
function XC(t, r) {
  const a = t._zod.def, s = Ba(t._zod.def, {
    get shape() {
      const l = { ...t._zod.def.shape };
      for (const u in r) {
        if (!(u in a.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && delete l[u];
      }
      return Ia(this, "shape", l), l;
    },
    checks: []
  });
  return ia(t, s);
}
function $C(t, r) {
  if (!lo(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const a = t._zod.def.checks;
  if (a && a.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const l = Ba(t._zod.def, {
    get shape() {
      const u = { ...t._zod.def.shape, ...r };
      return Ia(this, "shape", u), u;
    },
    checks: []
  });
  return ia(t, l);
}
function QC(t, r) {
  if (!lo(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const a = {
    ...t._zod.def,
    get shape() {
      const s = { ...t._zod.def.shape, ...r };
      return Ia(this, "shape", s), s;
    },
    checks: t._zod.def.checks
  };
  return ia(t, a);
}
function JC(t, r) {
  const a = Ba(t._zod.def, {
    get shape() {
      const s = { ...t._zod.def.shape, ...r._zod.def.shape };
      return Ia(this, "shape", s), s;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ia(t, a);
}
function KC(t, r, a) {
  const s = Ba(r._zod.def, {
    get shape() {
      const l = r._zod.def.shape, u = { ...l };
      if (a)
        for (const f in a) {
          if (!(f in l))
            throw new Error(`Unrecognized key: "${f}"`);
          a[f] && (u[f] = t ? new t({
            type: "optional",
            innerType: l[f]
          }) : l[f]);
        }
      else
        for (const f in l)
          u[f] = t ? new t({
            type: "optional",
            innerType: l[f]
          }) : l[f];
      return Ia(this, "shape", u), u;
    },
    checks: []
  });
  return ia(r, s);
}
function WC(t, r, a) {
  const s = Ba(r._zod.def, {
    get shape() {
      const l = r._zod.def.shape, u = { ...l };
      if (a)
        for (const f in a) {
          if (!(f in u))
            throw new Error(`Unrecognized key: "${f}"`);
          a[f] && (u[f] = new t({
            type: "nonoptional",
            innerType: l[f]
          }));
        }
      else
        for (const f in l)
          u[f] = new t({
            type: "nonoptional",
            innerType: l[f]
          });
      return Ia(this, "shape", u), u;
    },
    checks: []
  });
  return ia(r, s);
}
function zi(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let a = r; a < t.issues.length; a++)
    if (t.issues[a]?.continue !== !0)
      return !0;
  return !1;
}
function g1(t, r) {
  return r.map((a) => {
    var s;
    return (s = a).path ?? (s.path = []), a.path.unshift(t), a;
  });
}
function lu(t) {
  return typeof t == "string" ? t : t?.message;
}
function Pa(t, r, a) {
  const s = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const l = lu(t.inst?._zod.def?.error?.(t)) ?? lu(r?.error?.(t)) ?? lu(a.customError?.(t)) ?? lu(a.localeError?.(t)) ?? "Invalid input";
    s.message = l;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function ph(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function uo(...t) {
  const [r, a, s] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: a,
    inst: s
  } : { ...r };
}
const v1 = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, Vd, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, y1 = W("$ZodError", v1), b1 = W("$ZodError", v1, { Parent: Error });
function ew(t, r = (a) => a.message) {
  const a = {}, s = [];
  for (const l of t.issues)
    l.path.length > 0 ? (a[l.path[0]] = a[l.path[0]] || [], a[l.path[0]].push(r(l))) : s.push(r(l));
  return { formErrors: s, fieldErrors: a };
}
function tw(t, r = (a) => a.message) {
  const a = { _errors: [] }, s = (l) => {
    for (const u of l.issues)
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
const mh = (t) => (r, a, s, l) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: a, issues: [] }, u);
  if (f instanceof Promise)
    throw new Ii();
  if (f.issues.length) {
    const p = new (l?.Err ?? t)(f.issues.map((h) => Pa(h, u, La())));
    throw p1(p, l?.callee), p;
  }
  return f.value;
}, gh = (t) => async (r, a, s, l) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: a, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const p = new (l?.Err ?? t)(f.issues.map((h) => Pa(h, u, La())));
    throw p1(p, l?.callee), p;
  }
  return f.value;
}, zu = (t) => (r, a, s) => {
  const l = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: a, issues: [] }, l);
  if (u instanceof Promise)
    throw new Ii();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? y1)(u.issues.map((f) => Pa(f, l, La())))
  } : { success: !0, data: u.value };
}, nw = /* @__PURE__ */ zu(b1), Lu = (t) => async (r, a, s) => {
  const l = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: a, issues: [] }, l);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((f) => Pa(f, l, La())))
  } : { success: !0, data: u.value };
}, rw = /* @__PURE__ */ Lu(b1), aw = (t) => (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return mh(t)(r, a, l);
}, iw = (t) => (r, a, s) => mh(t)(r, a, s), sw = (t) => async (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return gh(t)(r, a, l);
}, ow = (t) => async (r, a, s) => gh(t)(r, a, s), lw = (t) => (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return zu(t)(r, a, l);
}, uw = (t) => (r, a, s) => zu(t)(r, a, s), cw = (t) => async (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Lu(t)(r, a, l);
}, fw = (t) => async (r, a, s) => Lu(t)(r, a, s), dw = /^[cC][^\s-]{8,}$/, hw = /^[0-9a-z]+$/, pw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, mw = /^[0-9a-vA-V]{20}$/, gw = /^[A-Za-z0-9]{27}$/, vw = /^[a-zA-Z0-9_-]{21}$/, yw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, bw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Zy = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, _w = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Sw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function xw() {
  return new RegExp(Sw, "u");
}
const Ew = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Cw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, ww = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Aw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Tw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, _1 = /^[A-Za-z0-9_-]*$/, Ow = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Nw = /^\+(?:[0-9]){6,14}[0-9]$/, S1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Dw = /* @__PURE__ */ new RegExp(`^${S1}$`);
function x1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Mw(t) {
  return new RegExp(`^${x1(t)}$`);
}
function kw(t) {
  const r = x1({ precision: t.precision }), a = ["Z"];
  t.local && a.push(""), t.offset && a.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${a.join("|")})`;
  return new RegExp(`^${S1}T(?:${s})$`);
}
const Rw = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, jw = /^-?\d+$/, zw = /^-?\d+(?:\.\d+)?/, Lw = /^[^A-Z]*$/, Pw = /^[^a-z]*$/, an = /* @__PURE__ */ W("$ZodCheck", (t, r) => {
  var a;
  t._zod ?? (t._zod = {}), t._zod.def = r, (a = t._zod).onattach ?? (a.onattach = []);
}), E1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, C1 = /* @__PURE__ */ W("$ZodCheckLessThan", (t, r) => {
  an.init(t, r);
  const a = E1[typeof r.value];
  t._zod.onattach.push((s) => {
    const l = s._zod.bag, u = (r.inclusive ? l.maximum : l.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < u && (r.inclusive ? l.maximum = r.value : l.exclusiveMaximum = r.value);
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
}), w1 = /* @__PURE__ */ W("$ZodCheckGreaterThan", (t, r) => {
  an.init(t, r);
  const a = E1[typeof r.value];
  t._zod.onattach.push((s) => {
    const l = s._zod.bag, u = (r.inclusive ? l.minimum : l.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > u && (r.inclusive ? l.minimum = r.value : l.exclusiveMinimum = r.value);
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
}), Iw = /* @__PURE__ */ W("$ZodCheckMultipleOf", (t, r) => {
  an.init(t, r), t._zod.onattach.push((a) => {
    var s;
    (s = a._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (a) => {
    if (typeof a.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof a.value == "bigint" ? a.value % r.value === BigInt(0) : qC(a.value, r.value) === 0) || a.issues.push({
      origin: typeof a.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Bw = /* @__PURE__ */ W("$ZodCheckNumberFormat", (t, r) => {
  an.init(t, r), r.format = r.format || "float64";
  const a = r.format?.includes("int"), s = a ? "int" : "number", [l, u] = VC[r.format];
  t._zod.onattach.push((f) => {
    const p = f._zod.bag;
    p.format = r.format, p.minimum = l, p.maximum = u, a && (p.pattern = jw);
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
    p < l && f.issues.push({
      origin: "number",
      input: p,
      code: "too_small",
      minimum: l,
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
}), Uw = /* @__PURE__ */ W("$ZodCheckMaxLength", (t, r) => {
  var a;
  an.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
    const l = s.value;
    return !dh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < l && (s._zod.bag.maximum = r.maximum);
  }), t._zod.check = (s) => {
    const l = s.value;
    if (l.length <= r.maximum)
      return;
    const f = ph(l);
    s.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: l,
      inst: t,
      continue: !r.abort
    });
  };
}), Hw = /* @__PURE__ */ W("$ZodCheckMinLength", (t, r) => {
  var a;
  an.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
    const l = s.value;
    return !dh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > l && (s._zod.bag.minimum = r.minimum);
  }), t._zod.check = (s) => {
    const l = s.value;
    if (l.length >= r.minimum)
      return;
    const f = ph(l);
    s.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: l,
      inst: t,
      continue: !r.abort
    });
  };
}), qw = /* @__PURE__ */ W("$ZodCheckLengthEquals", (t, r) => {
  var a;
  an.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
    const l = s.value;
    return !dh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.minimum = r.length, l.maximum = r.length, l.length = r.length;
  }), t._zod.check = (s) => {
    const l = s.value, u = l.length;
    if (u === r.length)
      return;
    const f = ph(l), p = u > r.length;
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
}), Pu = /* @__PURE__ */ W("$ZodCheckStringFormat", (t, r) => {
  var a, s;
  an.init(t, r), t._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.format = r.format, r.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r.pattern));
  }), r.pattern ? (a = t._zod).check ?? (a.check = (l) => {
    r.pattern.lastIndex = 0, !r.pattern.test(l.value) && l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: l.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: t,
      continue: !r.abort
    });
  }) : (s = t._zod).check ?? (s.check = () => {
  });
}), Fw = /* @__PURE__ */ W("$ZodCheckRegex", (t, r) => {
  Pu.init(t, r), t._zod.check = (a) => {
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
}), Zw = /* @__PURE__ */ W("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = Lw), Pu.init(t, r);
}), Gw = /* @__PURE__ */ W("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = Pw), Pu.init(t, r);
}), Vw = /* @__PURE__ */ W("$ZodCheckIncludes", (t, r) => {
  an.init(t, r);
  const a = ju(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${a}` : a);
  r.pattern = s, t._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), t._zod.check = (l) => {
    l.value.includes(r.includes, r.position) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: l.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Yw = /* @__PURE__ */ W("$ZodCheckStartsWith", (t, r) => {
  an.init(t, r);
  const a = new RegExp(`^${ju(r.prefix)}.*`);
  r.pattern ?? (r.pattern = a), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(a);
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
}), Xw = /* @__PURE__ */ W("$ZodCheckEndsWith", (t, r) => {
  an.init(t, r);
  const a = new RegExp(`.*${ju(r.suffix)}$`);
  r.pattern ?? (r.pattern = a), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(a);
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
}), $w = /* @__PURE__ */ W("$ZodCheckOverwrite", (t, r) => {
  an.init(t, r), t._zod.check = (a) => {
    a.value = r.tx(a.value);
  };
});
class Qw {
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
`).filter((f) => f), l = Math.min(...s.map((f) => f.length - f.trimStart().length)), u = s.map((f) => f.slice(l)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of u)
      this.content.push(f);
  }
  compile() {
    const r = Function, a = this?.args, l = [...(this?.content ?? [""]).map((u) => `  ${u}`)];
    return new r(...a, l.join(`
`));
  }
}
const Jw = {
  major: 4,
  minor: 1,
  patch: 12
}, Et = /* @__PURE__ */ W("$ZodType", (t, r) => {
  var a;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = Jw;
  const s = [...t._zod.def.checks ?? []];
  t._zod.traits.has("$ZodCheck") && s.unshift(t);
  for (const l of s)
    for (const u of l._zod.onattach)
      u(t);
  if (s.length === 0)
    (a = t._zod).deferred ?? (a.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const l = (f, p, h) => {
      let g = zi(f), y;
      for (const _ of p) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(f))
            continue;
        } else if (g)
          continue;
        const b = f.issues.length, v = _._zod.check(f);
        if (v instanceof Promise && h?.async === !1)
          throw new Ii();
        if (y || v instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await v, f.issues.length !== b && (g || (g = zi(f, b)));
          });
        else {
          if (f.issues.length === b)
            continue;
          g || (g = zi(f, b));
        }
      }
      return y ? y.then(() => f) : f;
    }, u = (f, p, h) => {
      if (zi(f))
        return f.aborted = !0, f;
      const g = l(p, s, h);
      if (g instanceof Promise) {
        if (h.async === !1)
          throw new Ii();
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
          throw new Ii();
        return h.then((g) => l(g, s, p));
      }
      return l(h, s, p);
    };
  }
  t["~standard"] = {
    validate: (l) => {
      try {
        const u = nw(t, l);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return rw(t, l).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), vh = /* @__PURE__ */ W("$ZodString", (t, r) => {
  Et.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? Rw(t._zod.bag), t._zod.parse = (a, s) => {
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
}), lt = /* @__PURE__ */ W("$ZodStringFormat", (t, r) => {
  Pu.init(t, r), vh.init(t, r);
}), Kw = /* @__PURE__ */ W("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = bw), lt.init(t, r);
}), Ww = /* @__PURE__ */ W("$ZodUUID", (t, r) => {
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
    r.pattern ?? (r.pattern = Zy(s));
  } else
    r.pattern ?? (r.pattern = Zy());
  lt.init(t, r);
}), e3 = /* @__PURE__ */ W("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = _w), lt.init(t, r);
}), t3 = /* @__PURE__ */ W("$ZodURL", (t, r) => {
  lt.init(t, r), t._zod.check = (a) => {
    try {
      const s = a.value.trim(), l = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(l.hostname) || a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Ow.source,
        input: a.value,
        inst: t,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(l.protocol.endsWith(":") ? l.protocol.slice(0, -1) : l.protocol) || a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: a.value,
        inst: t,
        continue: !r.abort
      })), r.normalize ? a.value = l.href : a.value = s;
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
}), n3 = /* @__PURE__ */ W("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = xw()), lt.init(t, r);
}), r3 = /* @__PURE__ */ W("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = vw), lt.init(t, r);
}), a3 = /* @__PURE__ */ W("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = dw), lt.init(t, r);
}), i3 = /* @__PURE__ */ W("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = hw), lt.init(t, r);
}), s3 = /* @__PURE__ */ W("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = pw), lt.init(t, r);
}), o3 = /* @__PURE__ */ W("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = mw), lt.init(t, r);
}), l3 = /* @__PURE__ */ W("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = gw), lt.init(t, r);
}), u3 = /* @__PURE__ */ W("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = kw(r)), lt.init(t, r);
}), c3 = /* @__PURE__ */ W("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = Dw), lt.init(t, r);
}), f3 = /* @__PURE__ */ W("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = Mw(r)), lt.init(t, r);
}), d3 = /* @__PURE__ */ W("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = yw), lt.init(t, r);
}), h3 = /* @__PURE__ */ W("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = Ew), lt.init(t, r), t._zod.onattach.push((a) => {
    const s = a._zod.bag;
    s.format = "ipv4";
  });
}), p3 = /* @__PURE__ */ W("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = Cw), lt.init(t, r), t._zod.onattach.push((a) => {
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
}), m3 = /* @__PURE__ */ W("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = ww), lt.init(t, r);
}), g3 = /* @__PURE__ */ W("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = Aw), lt.init(t, r), t._zod.check = (a) => {
    const s = a.value.split("/");
    try {
      if (s.length !== 2)
        throw new Error();
      const [l, u] = s;
      if (!u)
        throw new Error();
      const f = Number(u);
      if (`${f}` !== u)
        throw new Error();
      if (f < 0 || f > 128)
        throw new Error();
      new URL(`http://[${l}]`);
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
function A1(t) {
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
const v3 = /* @__PURE__ */ W("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = Tw), lt.init(t, r), t._zod.onattach.push((a) => {
    a._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (a) => {
    A1(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function y3(t) {
  if (!_1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), a = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return A1(a);
}
const b3 = /* @__PURE__ */ W("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = _1), lt.init(t, r), t._zod.onattach.push((a) => {
    a._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (a) => {
    y3(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), _3 = /* @__PURE__ */ W("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = Nw), lt.init(t, r);
});
function S3(t, r = null) {
  try {
    const a = t.split(".");
    if (a.length !== 3)
      return !1;
    const [s] = a;
    if (!s)
      return !1;
    const l = JSON.parse(atob(s));
    return !("typ" in l && l?.typ !== "JWT" || !l.alg || r && (!("alg" in l) || l.alg !== r));
  } catch {
    return !1;
  }
}
const x3 = /* @__PURE__ */ W("$ZodJWT", (t, r) => {
  lt.init(t, r), t._zod.check = (a) => {
    S3(a.value, r.alg) || a.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), T1 = /* @__PURE__ */ W("$ZodNumber", (t, r) => {
  Et.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? zw, t._zod.parse = (a, s) => {
    if (r.coerce)
      try {
        a.value = Number(a.value);
      } catch {
      }
    const l = a.value;
    if (typeof l == "number" && !Number.isNaN(l) && Number.isFinite(l))
      return a;
    const u = typeof l == "number" ? Number.isNaN(l) ? "NaN" : Number.isFinite(l) ? void 0 : "Infinity" : void 0;
    return a.issues.push({
      expected: "number",
      code: "invalid_type",
      input: l,
      inst: t,
      ...u ? { received: u } : {}
    }), a;
  };
}), E3 = /* @__PURE__ */ W("$ZodNumber", (t, r) => {
  Bw.init(t, r), T1.init(t, r);
}), C3 = /* @__PURE__ */ W("$ZodUnknown", (t, r) => {
  Et.init(t, r), t._zod.parse = (a) => a;
}), w3 = /* @__PURE__ */ W("$ZodNever", (t, r) => {
  Et.init(t, r), t._zod.parse = (a, s) => (a.issues.push({
    expected: "never",
    code: "invalid_type",
    input: a.value,
    inst: t
  }), a);
});
function Gy(t, r, a) {
  t.issues.length && r.issues.push(...g1(a, t.issues)), r.value[a] = t.value;
}
const A3 = /* @__PURE__ */ W("$ZodArray", (t, r) => {
  Et.init(t, r), t._zod.parse = (a, s) => {
    const l = a.value;
    if (!Array.isArray(l))
      return a.issues.push({
        expected: "array",
        code: "invalid_type",
        input: l,
        inst: t
      }), a;
    a.value = Array(l.length);
    const u = [];
    for (let f = 0; f < l.length; f++) {
      const p = l[f], h = r.element._zod.run({
        value: p,
        issues: []
      }, s);
      h instanceof Promise ? u.push(h.then((g) => Gy(g, a, f))) : Gy(h, a, f);
    }
    return u.length ? Promise.all(u).then(() => a) : a;
  };
});
function Du(t, r, a, s) {
  t.issues.length && r.issues.push(...g1(a, t.issues)), t.value === void 0 ? a in s && (r.value[a] = void 0) : r.value[a] = t.value;
}
function O1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const a = GC(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(a)
  };
}
function N1(t, r, a, s, l, u) {
  const f = [], p = l.keySet, h = l.catchall._zod, g = h.def.type;
  for (const y of Object.keys(r)) {
    if (p.has(y))
      continue;
    if (g === "never") {
      f.push(y);
      continue;
    }
    const _ = h.run({ value: r[y], issues: [] }, s);
    _ instanceof Promise ? t.push(_.then((b) => Du(b, a, y, r))) : Du(_, a, y, r);
  }
  return f.length && a.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => a) : a;
}
const T3 = /* @__PURE__ */ W("$ZodObject", (t, r) => {
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
  const s = fh(() => O1(r));
  at(t._zod, "propValues", () => {
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
  const l = Nu, u = r.catchall;
  let f;
  t._zod.parse = (p, h) => {
    f ?? (f = s.value);
    const g = p.value;
    if (!l(g))
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
      d instanceof Promise ? y.push(d.then((S) => Du(S, p, b, g))) : Du(d, p, b, g);
    }
    return u ? N1(y, g, p, h, s.value, t) : y.length ? Promise.all(y).then(() => p) : p;
  };
}), O3 = /* @__PURE__ */ W("$ZodObjectJIT", (t, r) => {
  T3.init(t, r);
  const a = t._zod.parse, s = fh(() => O1(r)), l = (b) => {
    const v = new Qw(["shape", "payload", "ctx"]), d = s.value, S = (D) => {
      const x = Fy(D);
      return `shape[${x}]._zod.run({ value: input[${x}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const E = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const D of d.keys)
      E[D] = `key_${O++}`;
    v.write("const newResult = {};");
    for (const D of d.keys) {
      const x = E[D], A = Fy(D);
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
  const f = Nu, p = !d1.jitless, g = p && FC.value, y = r.catchall;
  let _;
  t._zod.parse = (b, v) => {
    _ ?? (_ = s.value);
    const d = b.value;
    return f(d) ? p && g && v?.async === !1 && v.jitless !== !0 ? (u || (u = l(r.shape)), b = u(b, v), y ? N1([], d, b, v, _, t) : b) : a(b, v) : (b.issues.push({
      expected: "object",
      code: "invalid_type",
      input: d,
      inst: t
    }), b);
  };
});
function Vy(t, r, a, s) {
  for (const u of t)
    if (u.issues.length === 0)
      return r.value = u.value, r;
  const l = t.filter((u) => !zi(u));
  return l.length === 1 ? (r.value = l[0].value, l[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: a,
    errors: t.map((u) => u.issues.map((f) => Pa(f, s, La())))
  }), r);
}
const N3 = /* @__PURE__ */ W("$ZodUnion", (t, r) => {
  Et.init(t, r), at(t._zod, "optin", () => r.options.some((l) => l._zod.optin === "optional") ? "optional" : void 0), at(t._zod, "optout", () => r.options.some((l) => l._zod.optout === "optional") ? "optional" : void 0), at(t._zod, "values", () => {
    if (r.options.every((l) => l._zod.values))
      return new Set(r.options.flatMap((l) => Array.from(l._zod.values)));
  }), at(t._zod, "pattern", () => {
    if (r.options.every((l) => l._zod.pattern)) {
      const l = r.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${l.map((u) => hh(u.source)).join("|")})$`);
    }
  });
  const a = r.options.length === 1, s = r.options[0]._zod.run;
  t._zod.parse = (l, u) => {
    if (a)
      return s(l, u);
    let f = !1;
    const p = [];
    for (const h of r.options) {
      const g = h._zod.run({
        value: l.value,
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
    return f ? Promise.all(p).then((h) => Vy(h, l, t, u)) : Vy(p, l, t, u);
  };
}), D3 = /* @__PURE__ */ W("$ZodIntersection", (t, r) => {
  Et.init(t, r), t._zod.parse = (a, s) => {
    const l = a.value, u = r.left._zod.run({ value: l, issues: [] }, s), f = r.right._zod.run({ value: l, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([h, g]) => Yy(a, h, g)) : Yy(a, u, f);
  };
});
function Yd(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (lo(t) && lo(r)) {
    const a = Object.keys(r), s = Object.keys(t).filter((u) => a.indexOf(u) !== -1), l = { ...t, ...r };
    for (const u of s) {
      const f = Yd(t[u], r[u]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...f.mergeErrorPath]
        };
      l[u] = f.data;
    }
    return { valid: !0, data: l };
  }
  if (Array.isArray(t) && Array.isArray(r)) {
    if (t.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const a = [];
    for (let s = 0; s < t.length; s++) {
      const l = t[s], u = r[s], f = Yd(l, u);
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
function Yy(t, r, a) {
  if (r.issues.length && t.issues.push(...r.issues), a.issues.length && t.issues.push(...a.issues), zi(t))
    return t;
  const s = Yd(r.value, a.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const M3 = /* @__PURE__ */ W("$ZodEnum", (t, r) => {
  Et.init(t, r);
  const a = h1(r.entries), s = new Set(a);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${a.filter((l) => ZC.has(typeof l)).map((l) => typeof l == "string" ? ju(l) : l.toString()).join("|")})$`), t._zod.parse = (l, u) => {
    const f = l.value;
    return s.has(f) || l.issues.push({
      code: "invalid_value",
      values: a,
      input: f,
      inst: t
    }), l;
  };
}), k3 = /* @__PURE__ */ W("$ZodTransform", (t, r) => {
  Et.init(t, r), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      throw new f1(t.constructor.name);
    const l = r.transform(a.value, a);
    if (s.async)
      return (l instanceof Promise ? l : Promise.resolve(l)).then((f) => (a.value = f, a));
    if (l instanceof Promise)
      throw new Ii();
    return a.value = l, a;
  };
});
function Xy(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const R3 = /* @__PURE__ */ W("$ZodOptional", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", at(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), at(t._zod, "pattern", () => {
    const a = r.innerType._zod.pattern;
    return a ? new RegExp(`^(${hh(a.source)})?$`) : void 0;
  }), t._zod.parse = (a, s) => {
    if (r.innerType._zod.optin === "optional") {
      const l = r.innerType._zod.run(a, s);
      return l instanceof Promise ? l.then((u) => Xy(u, a.value)) : Xy(l, a.value);
    }
    return a.value === void 0 ? a : r.innerType._zod.run(a, s);
  };
}), j3 = /* @__PURE__ */ W("$ZodNullable", (t, r) => {
  Et.init(t, r), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), at(t._zod, "pattern", () => {
    const a = r.innerType._zod.pattern;
    return a ? new RegExp(`^(${hh(a.source)}|null)$`) : void 0;
  }), at(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (a, s) => a.value === null ? a : r.innerType._zod.run(a, s);
}), z3 = /* @__PURE__ */ W("$ZodDefault", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(a, s);
    if (a.value === void 0)
      return a.value = r.defaultValue, a;
    const l = r.innerType._zod.run(a, s);
    return l instanceof Promise ? l.then((u) => $y(u, r)) : $y(l, r);
  };
});
function $y(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const L3 = /* @__PURE__ */ W("$ZodPrefault", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => (s.direction === "backward" || a.value === void 0 && (a.value = r.defaultValue), r.innerType._zod.run(a, s));
}), P3 = /* @__PURE__ */ W("$ZodNonOptional", (t, r) => {
  Et.init(t, r), at(t._zod, "values", () => {
    const a = r.innerType._zod.values;
    return a ? new Set([...a].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (a, s) => {
    const l = r.innerType._zod.run(a, s);
    return l instanceof Promise ? l.then((u) => Qy(u, t)) : Qy(l, t);
  };
});
function Qy(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const I3 = /* @__PURE__ */ W("$ZodCatch", (t, r) => {
  Et.init(t, r), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(a, s);
    const l = r.innerType._zod.run(a, s);
    return l instanceof Promise ? l.then((u) => (a.value = u.value, u.issues.length && (a.value = r.catchValue({
      ...a,
      error: {
        issues: u.issues.map((f) => Pa(f, s, La()))
      },
      input: a.value
    }), a.issues = []), a)) : (a.value = l.value, l.issues.length && (a.value = r.catchValue({
      ...a,
      error: {
        issues: l.issues.map((u) => Pa(u, s, La()))
      },
      input: a.value
    }), a.issues = []), a);
  };
}), B3 = /* @__PURE__ */ W("$ZodPipe", (t, r) => {
  Et.init(t, r), at(t._zod, "values", () => r.in._zod.values), at(t._zod, "optin", () => r.in._zod.optin), at(t._zod, "optout", () => r.out._zod.optout), at(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (a, s) => {
    if (s.direction === "backward") {
      const u = r.out._zod.run(a, s);
      return u instanceof Promise ? u.then((f) => uu(f, r.in, s)) : uu(u, r.in, s);
    }
    const l = r.in._zod.run(a, s);
    return l instanceof Promise ? l.then((u) => uu(u, r.out, s)) : uu(l, r.out, s);
  };
});
function uu(t, r, a) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, a);
}
const U3 = /* @__PURE__ */ W("$ZodReadonly", (t, r) => {
  Et.init(t, r), at(t._zod, "propValues", () => r.innerType._zod.propValues), at(t._zod, "values", () => r.innerType._zod.values), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(a, s);
    const l = r.innerType._zod.run(a, s);
    return l instanceof Promise ? l.then(Jy) : Jy(l);
  };
});
function Jy(t) {
  return t.value = Object.freeze(t.value), t;
}
const H3 = /* @__PURE__ */ W("$ZodCustom", (t, r) => {
  an.init(t, r), Et.init(t, r), t._zod.parse = (a, s) => a, t._zod.check = (a) => {
    const s = a.value, l = r.fn(s);
    if (l instanceof Promise)
      return l.then((u) => Ky(u, a, s, t));
    Ky(l, a, s, t);
  };
});
function Ky(t, r, a, s) {
  if (!t) {
    const l = {
      code: "custom",
      input: a,
      inst: s,
      // incorporates params.error into issue reporting
      path: [...s._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !s._zod.def.abort
      // params: inst._zod.def.params,
    };
    s._zod.def.params && (l.params = s._zod.def.params), r.issues.push(uo(l));
  }
}
class D1 {
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
      const l = { ...s, ...this._map.get(r) };
      return Object.keys(l).length ? l : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function q3() {
  return new D1();
}
const eo = /* @__PURE__ */ q3();
function F3(t, r) {
  return new t({
    type: "string",
    ...ve(r)
  });
}
function Z3(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function Wy(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function G3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function V3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ve(r)
  });
}
function Y3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ve(r)
  });
}
function X3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ve(r)
  });
}
function $3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function Q3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function J3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function K3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function W3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function e4(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function t4(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function n4(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function r4(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function a4(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function i4(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function s4(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function o4(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function l4(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function u4(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function c4(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function f4(t, r) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ve(r)
  });
}
function d4(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...ve(r)
  });
}
function h4(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ve(r)
  });
}
function p4(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ve(r)
  });
}
function m4(t, r) {
  return new t({
    type: "number",
    checks: [],
    ...ve(r)
  });
}
function g4(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ve(r)
  });
}
function v4(t) {
  return new t({
    type: "unknown"
  });
}
function y4(t, r) {
  return new t({
    type: "never",
    ...ve(r)
  });
}
function e0(t, r) {
  return new C1({
    check: "less_than",
    ...ve(r),
    value: t,
    inclusive: !1
  });
}
function Ed(t, r) {
  return new C1({
    check: "less_than",
    ...ve(r),
    value: t,
    inclusive: !0
  });
}
function t0(t, r) {
  return new w1({
    check: "greater_than",
    ...ve(r),
    value: t,
    inclusive: !1
  });
}
function Cd(t, r) {
  return new w1({
    check: "greater_than",
    ...ve(r),
    value: t,
    inclusive: !0
  });
}
function n0(t, r) {
  return new Iw({
    check: "multiple_of",
    ...ve(r),
    value: t
  });
}
function M1(t, r) {
  return new Uw({
    check: "max_length",
    ...ve(r),
    maximum: t
  });
}
function Mu(t, r) {
  return new Hw({
    check: "min_length",
    ...ve(r),
    minimum: t
  });
}
function k1(t, r) {
  return new qw({
    check: "length_equals",
    ...ve(r),
    length: t
  });
}
function b4(t, r) {
  return new Fw({
    check: "string_format",
    format: "regex",
    ...ve(r),
    pattern: t
  });
}
function _4(t) {
  return new Zw({
    check: "string_format",
    format: "lowercase",
    ...ve(t)
  });
}
function S4(t) {
  return new Gw({
    check: "string_format",
    format: "uppercase",
    ...ve(t)
  });
}
function x4(t, r) {
  return new Vw({
    check: "string_format",
    format: "includes",
    ...ve(r),
    includes: t
  });
}
function E4(t, r) {
  return new Yw({
    check: "string_format",
    format: "starts_with",
    ...ve(r),
    prefix: t
  });
}
function C4(t, r) {
  return new Xw({
    check: "string_format",
    format: "ends_with",
    ...ve(r),
    suffix: t
  });
}
function po(t) {
  return new $w({
    check: "overwrite",
    tx: t
  });
}
function w4(t) {
  return po((r) => r.normalize(t));
}
function A4() {
  return po((t) => t.trim());
}
function T4() {
  return po((t) => t.toLowerCase());
}
function O4() {
  return po((t) => t.toUpperCase());
}
function N4(t, r, a) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...ve(a)
  });
}
function D4(t, r, a) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ...ve(a)
  });
}
function M4(t) {
  const r = k4((a) => (a.addIssue = (s) => {
    if (typeof s == "string")
      a.issues.push(uo(s, a.value, r._zod.def));
    else {
      const l = s;
      l.fatal && (l.continue = !1), l.code ?? (l.code = "custom"), l.input ?? (l.input = a.value), l.inst ?? (l.inst = r), l.continue ?? (l.continue = !r._zod.def.abort), a.issues.push(uo(l));
    }
  }, t(a.value, a)));
  return r;
}
function k4(t, r) {
  const a = new an({
    check: "custom",
    ...ve(r)
  });
  return a._zod.check = t, a;
}
class r0 {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? eo, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, a = { path: [], schemaPath: [] }) {
    var s;
    const l = r._zod.def, u = {
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
        switch (l.type) {
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
            typeof S == "number" && (d.minItems = S), typeof E == "number" && (d.maxItems = E), d.type = "array", d.items = this.process(l.element, { ..._, path: [..._.path, "items"] });
            break;
          }
          case "object": {
            const d = v;
            d.type = "object", d.properties = {};
            const S = l.shape;
            for (const w in S)
              d.properties[w] = this.process(S[w], {
                ..._,
                path: [..._.path, "properties", w]
              });
            const E = new Set(Object.keys(S)), O = new Set([...E].filter((w) => {
              const D = l.shape[w]._zod;
              return this.io === "input" ? D.optin === void 0 : D.optout === void 0;
            }));
            O.size > 0 && (d.required = Array.from(O)), l.catchall?._zod.def.type === "never" ? d.additionalProperties = !1 : l.catchall ? l.catchall && (d.additionalProperties = this.process(l.catchall, {
              ..._,
              path: [..._.path, "additionalProperties"]
            })) : this.io === "output" && (d.additionalProperties = !1);
            break;
          }
          case "union": {
            const d = v, S = l.options.map((E, O) => this.process(E, {
              ..._,
              path: [..._.path, "anyOf", O]
            }));
            d.anyOf = S;
            break;
          }
          case "intersection": {
            const d = v, S = this.process(l.left, {
              ..._,
              path: [..._.path, "allOf", 0]
            }), E = this.process(l.right, {
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
            const S = this.target === "draft-2020-12" ? "prefixItems" : "items", E = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", O = l.items.map((A, M) => this.process(A, {
              ..._,
              path: [..._.path, S, M]
            })), w = l.rest ? this.process(l.rest, {
              ..._,
              path: [..._.path, E, ...this.target === "openapi-3.0" ? [l.items.length] : []]
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
            d.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (d.propertyNames = this.process(l.keyType, {
              ..._,
              path: [..._.path, "propertyNames"]
            })), d.additionalProperties = this.process(l.valueType, {
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
            const d = v, S = h1(l.entries);
            S.every((E) => typeof E == "number") && (d.type = "number"), S.every((E) => typeof E == "string") && (d.type = "string"), d.enum = S;
            break;
          }
          case "literal": {
            const d = v, S = [];
            for (const E of l.values)
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
            const d = this.process(l.innerType, _);
            this.target === "openapi-3.0" ? (p.ref = l.innerType, v.nullable = !0) : v.anyOf = [d, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(l.innerType, _), p.ref = l.innerType;
            break;
          }
          case "success": {
            const d = v;
            d.type = "boolean";
            break;
          }
          case "default": {
            this.process(l.innerType, _), p.ref = l.innerType, v.default = JSON.parse(JSON.stringify(l.defaultValue));
            break;
          }
          case "prefault": {
            this.process(l.innerType, _), p.ref = l.innerType, this.io === "input" && (v._prefault = JSON.parse(JSON.stringify(l.defaultValue)));
            break;
          }
          case "catch": {
            this.process(l.innerType, _), p.ref = l.innerType;
            let d;
            try {
              d = l.catchValue(void 0);
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
            const d = this.io === "input" ? l.in._zod.def.type === "transform" ? l.out : l.in : l.out;
            this.process(d, _), p.ref = d;
            break;
          }
          case "readonly": {
            this.process(l.innerType, _), p.ref = l.innerType, v.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(l.innerType, _), p.ref = l.innerType;
            break;
          }
          case "optional": {
            this.process(l.innerType, _), p.ref = l.innerType;
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
    }, l = this.seen.get(r);
    if (!l)
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
      if (y[1] === l)
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
    Object.assign(h, l.def);
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
function R4(t, r) {
  if (t instanceof D1) {
    const s = new r0(r), l = {};
    for (const p of t._idmap.entries()) {
      const [h, g] = p;
      s.process(g);
    }
    const u = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: l
    };
    for (const p of t._idmap.entries()) {
      const [h, g] = p;
      u[h] = s.emit(g, {
        ...r,
        external: f
      });
    }
    if (Object.keys(l).length > 0) {
      const p = s.target === "draft-2020-12" ? "$defs" : "definitions";
      u.__shared = {
        [p]: l
      };
    }
    return { schemas: u };
  }
  const a = new r0(r);
  return a.process(t), a.emit(t, r);
}
function At(t, r) {
  const a = r ?? { seen: /* @__PURE__ */ new Set() };
  if (a.seen.has(t))
    return !1;
  a.seen.add(t);
  const l = t._zod.def;
  switch (l.type) {
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
      return At(l.element, a);
    case "object": {
      for (const u in l.shape)
        if (At(l.shape[u], a))
          return !0;
      return !1;
    }
    case "union": {
      for (const u of l.options)
        if (At(u, a))
          return !0;
      return !1;
    }
    case "intersection":
      return At(l.left, a) || At(l.right, a);
    case "tuple": {
      for (const u of l.items)
        if (At(u, a))
          return !0;
      return !!(l.rest && At(l.rest, a));
    }
    case "record":
      return At(l.keyType, a) || At(l.valueType, a);
    case "map":
      return At(l.keyType, a) || At(l.valueType, a);
    case "set":
      return At(l.valueType, a);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return At(l.innerType, a);
    case "lazy":
      return At(l.getter(), a);
    case "default":
      return At(l.innerType, a);
    case "prefault":
      return At(l.innerType, a);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return At(l.in, a) || At(l.out, a);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${l.type}`);
}
const j4 = /* @__PURE__ */ W("ZodISODateTime", (t, r) => {
  u3.init(t, r), ft.init(t, r);
});
function z4(t) {
  return f4(j4, t);
}
const L4 = /* @__PURE__ */ W("ZodISODate", (t, r) => {
  c3.init(t, r), ft.init(t, r);
});
function P4(t) {
  return d4(L4, t);
}
const I4 = /* @__PURE__ */ W("ZodISOTime", (t, r) => {
  f3.init(t, r), ft.init(t, r);
});
function B4(t) {
  return h4(I4, t);
}
const U4 = /* @__PURE__ */ W("ZodISODuration", (t, r) => {
  d3.init(t, r), ft.init(t, r);
});
function H4(t) {
  return p4(U4, t);
}
const q4 = (t, r) => {
  y1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (a) => tw(t, a)
      // enumerable: false,
    },
    flatten: {
      value: (a) => ew(t, a)
      // enumerable: false,
    },
    addIssue: {
      value: (a) => {
        t.issues.push(a), t.message = JSON.stringify(t.issues, Vd, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (a) => {
        t.issues.push(...a), t.message = JSON.stringify(t.issues, Vd, 2);
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
}, jn = W("ZodError", q4, {
  Parent: Error
}), F4 = /* @__PURE__ */ mh(jn), Z4 = /* @__PURE__ */ gh(jn), G4 = /* @__PURE__ */ zu(jn), V4 = /* @__PURE__ */ Lu(jn), Y4 = /* @__PURE__ */ aw(jn), X4 = /* @__PURE__ */ iw(jn), $4 = /* @__PURE__ */ sw(jn), Q4 = /* @__PURE__ */ ow(jn), J4 = /* @__PURE__ */ lw(jn), K4 = /* @__PURE__ */ uw(jn), W4 = /* @__PURE__ */ cw(jn), eA = /* @__PURE__ */ fw(jn), Ot = /* @__PURE__ */ W("ZodType", (t, r) => (Et.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...a) => t.clone(Ba(r, {
  checks: [
    ...r.checks ?? [],
    ...a.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (a, s) => ia(t, a, s), t.brand = () => t, t.register = ((a, s) => (a.add(t, s), t)), t.parse = (a, s) => F4(t, a, s, { callee: t.parse }), t.safeParse = (a, s) => G4(t, a, s), t.parseAsync = async (a, s) => Z4(t, a, s, { callee: t.parseAsync }), t.safeParseAsync = async (a, s) => V4(t, a, s), t.spa = t.safeParseAsync, t.encode = (a, s) => Y4(t, a, s), t.decode = (a, s) => X4(t, a, s), t.encodeAsync = async (a, s) => $4(t, a, s), t.decodeAsync = async (a, s) => Q4(t, a, s), t.safeEncode = (a, s) => J4(t, a, s), t.safeDecode = (a, s) => K4(t, a, s), t.safeEncodeAsync = async (a, s) => W4(t, a, s), t.safeDecodeAsync = async (a, s) => eA(t, a, s), t.refine = (a, s) => t.check(FA(a, s)), t.superRefine = (a) => t.check(ZA(a)), t.overwrite = (a) => t.check(po(a)), t.optional = () => o0(t), t.nullable = () => l0(t), t.nullish = () => o0(l0(t)), t.nonoptional = (a) => LA(t, a), t.array = () => qn(t), t.or = (a) => AA([t, a]), t.and = (a) => OA(t, a), t.transform = (a) => u0(t, DA(a)), t.default = (a) => RA(t, a), t.prefault = (a) => zA(t, a), t.catch = (a) => IA(t, a), t.pipe = (a) => u0(t, a), t.readonly = () => HA(t), t.describe = (a) => {
  const s = t.clone();
  return eo.add(s, { description: a }), s;
}, Object.defineProperty(t, "description", {
  get() {
    return eo.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...a) => {
  if (a.length === 0)
    return eo.get(t);
  const s = t.clone();
  return eo.add(s, a[0]), s;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), R1 = /* @__PURE__ */ W("_ZodString", (t, r) => {
  vh.init(t, r), Ot.init(t, r);
  const a = t._zod.bag;
  t.format = a.format ?? null, t.minLength = a.minimum ?? null, t.maxLength = a.maximum ?? null, t.regex = (...s) => t.check(b4(...s)), t.includes = (...s) => t.check(x4(...s)), t.startsWith = (...s) => t.check(E4(...s)), t.endsWith = (...s) => t.check(C4(...s)), t.min = (...s) => t.check(Mu(...s)), t.max = (...s) => t.check(M1(...s)), t.length = (...s) => t.check(k1(...s)), t.nonempty = (...s) => t.check(Mu(1, ...s)), t.lowercase = (s) => t.check(_4(s)), t.uppercase = (s) => t.check(S4(s)), t.trim = () => t.check(A4()), t.normalize = (...s) => t.check(w4(...s)), t.toLowerCase = () => t.check(T4()), t.toUpperCase = () => t.check(O4());
}), tA = /* @__PURE__ */ W("ZodString", (t, r) => {
  vh.init(t, r), R1.init(t, r), t.email = (a) => t.check(Z3(nA, a)), t.url = (a) => t.check($3(rA, a)), t.jwt = (a) => t.check(c4(yA, a)), t.emoji = (a) => t.check(Q3(aA, a)), t.guid = (a) => t.check(Wy(a0, a)), t.uuid = (a) => t.check(G3(cu, a)), t.uuidv4 = (a) => t.check(V3(cu, a)), t.uuidv6 = (a) => t.check(Y3(cu, a)), t.uuidv7 = (a) => t.check(X3(cu, a)), t.nanoid = (a) => t.check(J3(iA, a)), t.guid = (a) => t.check(Wy(a0, a)), t.cuid = (a) => t.check(K3(sA, a)), t.cuid2 = (a) => t.check(W3(oA, a)), t.ulid = (a) => t.check(e4(lA, a)), t.base64 = (a) => t.check(o4(mA, a)), t.base64url = (a) => t.check(l4(gA, a)), t.xid = (a) => t.check(t4(uA, a)), t.ksuid = (a) => t.check(n4(cA, a)), t.ipv4 = (a) => t.check(r4(fA, a)), t.ipv6 = (a) => t.check(a4(dA, a)), t.cidrv4 = (a) => t.check(i4(hA, a)), t.cidrv6 = (a) => t.check(s4(pA, a)), t.e164 = (a) => t.check(u4(vA, a)), t.datetime = (a) => t.check(z4(a)), t.date = (a) => t.check(P4(a)), t.time = (a) => t.check(B4(a)), t.duration = (a) => t.check(H4(a));
});
function kn(t) {
  return F3(tA, t);
}
const ft = /* @__PURE__ */ W("ZodStringFormat", (t, r) => {
  lt.init(t, r), R1.init(t, r);
}), nA = /* @__PURE__ */ W("ZodEmail", (t, r) => {
  e3.init(t, r), ft.init(t, r);
}), a0 = /* @__PURE__ */ W("ZodGUID", (t, r) => {
  Kw.init(t, r), ft.init(t, r);
}), cu = /* @__PURE__ */ W("ZodUUID", (t, r) => {
  Ww.init(t, r), ft.init(t, r);
}), rA = /* @__PURE__ */ W("ZodURL", (t, r) => {
  t3.init(t, r), ft.init(t, r);
}), aA = /* @__PURE__ */ W("ZodEmoji", (t, r) => {
  n3.init(t, r), ft.init(t, r);
}), iA = /* @__PURE__ */ W("ZodNanoID", (t, r) => {
  r3.init(t, r), ft.init(t, r);
}), sA = /* @__PURE__ */ W("ZodCUID", (t, r) => {
  a3.init(t, r), ft.init(t, r);
}), oA = /* @__PURE__ */ W("ZodCUID2", (t, r) => {
  i3.init(t, r), ft.init(t, r);
}), lA = /* @__PURE__ */ W("ZodULID", (t, r) => {
  s3.init(t, r), ft.init(t, r);
}), uA = /* @__PURE__ */ W("ZodXID", (t, r) => {
  o3.init(t, r), ft.init(t, r);
}), cA = /* @__PURE__ */ W("ZodKSUID", (t, r) => {
  l3.init(t, r), ft.init(t, r);
}), fA = /* @__PURE__ */ W("ZodIPv4", (t, r) => {
  h3.init(t, r), ft.init(t, r);
}), dA = /* @__PURE__ */ W("ZodIPv6", (t, r) => {
  p3.init(t, r), ft.init(t, r);
}), hA = /* @__PURE__ */ W("ZodCIDRv4", (t, r) => {
  m3.init(t, r), ft.init(t, r);
}), pA = /* @__PURE__ */ W("ZodCIDRv6", (t, r) => {
  g3.init(t, r), ft.init(t, r);
}), mA = /* @__PURE__ */ W("ZodBase64", (t, r) => {
  v3.init(t, r), ft.init(t, r);
}), gA = /* @__PURE__ */ W("ZodBase64URL", (t, r) => {
  b3.init(t, r), ft.init(t, r);
}), vA = /* @__PURE__ */ W("ZodE164", (t, r) => {
  _3.init(t, r), ft.init(t, r);
}), yA = /* @__PURE__ */ W("ZodJWT", (t, r) => {
  x3.init(t, r), ft.init(t, r);
}), j1 = /* @__PURE__ */ W("ZodNumber", (t, r) => {
  T1.init(t, r), Ot.init(t, r), t.gt = (s, l) => t.check(t0(s, l)), t.gte = (s, l) => t.check(Cd(s, l)), t.min = (s, l) => t.check(Cd(s, l)), t.lt = (s, l) => t.check(e0(s, l)), t.lte = (s, l) => t.check(Ed(s, l)), t.max = (s, l) => t.check(Ed(s, l)), t.int = (s) => t.check(i0(s)), t.safe = (s) => t.check(i0(s)), t.positive = (s) => t.check(t0(0, s)), t.nonnegative = (s) => t.check(Cd(0, s)), t.negative = (s) => t.check(e0(0, s)), t.nonpositive = (s) => t.check(Ed(0, s)), t.multipleOf = (s, l) => t.check(n0(s, l)), t.step = (s, l) => t.check(n0(s, l)), t.finite = () => t;
  const a = t._zod.bag;
  t.minValue = Math.max(a.minimum ?? Number.NEGATIVE_INFINITY, a.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(a.maximum ?? Number.POSITIVE_INFINITY, a.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (a.format ?? "").includes("int") || Number.isSafeInteger(a.multipleOf ?? 0.5), t.isFinite = !0, t.format = a.format ?? null;
});
function ku(t) {
  return m4(j1, t);
}
const bA = /* @__PURE__ */ W("ZodNumberFormat", (t, r) => {
  E3.init(t, r), j1.init(t, r);
});
function i0(t) {
  return g4(bA, t);
}
const _A = /* @__PURE__ */ W("ZodUnknown", (t, r) => {
  C3.init(t, r), Ot.init(t, r);
});
function s0() {
  return v4(_A);
}
const SA = /* @__PURE__ */ W("ZodNever", (t, r) => {
  w3.init(t, r), Ot.init(t, r);
});
function xA(t) {
  return y4(SA, t);
}
const EA = /* @__PURE__ */ W("ZodArray", (t, r) => {
  A3.init(t, r), Ot.init(t, r), t.element = r.element, t.min = (a, s) => t.check(Mu(a, s)), t.nonempty = (a) => t.check(Mu(1, a)), t.max = (a, s) => t.check(M1(a, s)), t.length = (a, s) => t.check(k1(a, s)), t.unwrap = () => t.element;
});
function qn(t, r) {
  return N4(EA, t, r);
}
const CA = /* @__PURE__ */ W("ZodObject", (t, r) => {
  O3.init(t, r), Ot.init(t, r), at(t, "shape", () => r.shape), t.keyof = () => $d(Object.keys(t._zod.def.shape)), t.catchall = (a) => t.clone({ ...t._zod.def, catchall: a }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: s0() }), t.loose = () => t.clone({ ...t._zod.def, catchall: s0() }), t.strict = () => t.clone({ ...t._zod.def, catchall: xA() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (a) => $C(t, a), t.safeExtend = (a) => QC(t, a), t.merge = (a) => JC(t, a), t.pick = (a) => YC(t, a), t.omit = (a) => XC(t, a), t.partial = (...a) => KC(z1, t, a[0]), t.required = (...a) => WC(L1, t, a[0]);
});
function ja(t, r) {
  const a = {
    type: "object",
    shape: t ?? {},
    ...ve(r)
  };
  return new CA(a);
}
const wA = /* @__PURE__ */ W("ZodUnion", (t, r) => {
  N3.init(t, r), Ot.init(t, r), t.options = r.options;
});
function AA(t, r) {
  return new wA({
    type: "union",
    options: t,
    ...ve(r)
  });
}
const TA = /* @__PURE__ */ W("ZodIntersection", (t, r) => {
  D3.init(t, r), Ot.init(t, r);
});
function OA(t, r) {
  return new TA({
    type: "intersection",
    left: t,
    right: r
  });
}
const Xd = /* @__PURE__ */ W("ZodEnum", (t, r) => {
  M3.init(t, r), Ot.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const a = new Set(Object.keys(r.entries));
  t.extract = (s, l) => {
    const u = {};
    for (const f of s)
      if (a.has(f))
        u[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Xd({
      ...r,
      checks: [],
      ...ve(l),
      entries: u
    });
  }, t.exclude = (s, l) => {
    const u = { ...r.entries };
    for (const f of s)
      if (a.has(f))
        delete u[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Xd({
      ...r,
      checks: [],
      ...ve(l),
      entries: u
    });
  };
});
function $d(t, r) {
  const a = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new Xd({
    type: "enum",
    entries: a,
    ...ve(r)
  });
}
const NA = /* @__PURE__ */ W("ZodTransform", (t, r) => {
  k3.init(t, r), Ot.init(t, r), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      throw new f1(t.constructor.name);
    a.addIssue = (u) => {
      if (typeof u == "string")
        a.issues.push(uo(u, a.value, r));
      else {
        const f = u;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = a.value), f.inst ?? (f.inst = t), a.issues.push(uo(f));
      }
    };
    const l = r.transform(a.value, a);
    return l instanceof Promise ? l.then((u) => (a.value = u, a)) : (a.value = l, a);
  };
});
function DA(t) {
  return new NA({
    type: "transform",
    transform: t
  });
}
const z1 = /* @__PURE__ */ W("ZodOptional", (t, r) => {
  R3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function o0(t) {
  return new z1({
    type: "optional",
    innerType: t
  });
}
const MA = /* @__PURE__ */ W("ZodNullable", (t, r) => {
  j3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function l0(t) {
  return new MA({
    type: "nullable",
    innerType: t
  });
}
const kA = /* @__PURE__ */ W("ZodDefault", (t, r) => {
  z3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function RA(t, r) {
  return new kA({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : m1(r);
    }
  });
}
const jA = /* @__PURE__ */ W("ZodPrefault", (t, r) => {
  L3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function zA(t, r) {
  return new jA({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : m1(r);
    }
  });
}
const L1 = /* @__PURE__ */ W("ZodNonOptional", (t, r) => {
  P3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function LA(t, r) {
  return new L1({
    type: "nonoptional",
    innerType: t,
    ...ve(r)
  });
}
const PA = /* @__PURE__ */ W("ZodCatch", (t, r) => {
  I3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function IA(t, r) {
  return new PA({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const BA = /* @__PURE__ */ W("ZodPipe", (t, r) => {
  B3.init(t, r), Ot.init(t, r), t.in = r.in, t.out = r.out;
});
function u0(t, r) {
  return new BA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const UA = /* @__PURE__ */ W("ZodReadonly", (t, r) => {
  U3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function HA(t) {
  return new UA({
    type: "readonly",
    innerType: t
  });
}
const qA = /* @__PURE__ */ W("ZodCustom", (t, r) => {
  H3.init(t, r), Ot.init(t, r);
});
function FA(t, r = {}) {
  return D4(qA, t, r);
}
function ZA(t) {
  return M4(t);
}
const c0 = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Qd = "placeholder-chatHistory", GA = ja({
  justification: kn().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: kn().describe("The new, full content for the character field.")
}), VA = ja({
  field: kn(),
  value: kn()
}), YA = ja({
  index: ku().int().positive(),
  value: kn()
});
ja({
  justification: kn(),
  fields_to_change: qn(VA).optional(),
  draft_fields_to_remove: qn(kn()).optional(),
  greetings_to_add: qn(kn()).optional(),
  greetings_to_remove: qn(ku().int().positive()).optional(),
  greetings_to_change: qn(YA).optional()
});
const XA = (t, r) => {
  const a = ja({
    index: ku().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: kn().describe("The new content for the alternate greeting.")
  }), s = {
    justification: kn().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: qn(kn()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: qn(ku().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: qn(a).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const l = ja({
      field: $d(t).describe("The unique ID of the field to change (core or draft)."),
      value: kn().describe("The new content for the field.")
    });
    s.fields_to_change = qn(l).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = qn($d(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), ja(s);
};
function wd(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Jd(t, r = 0) {
  const a = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${a}<item>
${Jd(s, r + 1)}${a}</item>
` : `${a}<item>${wd(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const l of Object.keys(t)) {
      const u = t[l];
      u !== null && typeof u == "object" ? s += `${a}<${l}>
${Jd(u, r + 1)}${a}</${l}>
` : s += `${a}<${l}>${wd(u)}</${l}>
`;
    }
    return s;
  }
  return `${a}<value>${wd(t)}</value>
`;
}
function $A(t, r) {
  const a = Da(t);
  return r === "xml" ? Jd(a).trim() : JSON.stringify(a, null, 2);
}
function QA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function JA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function f0(t, r) {
  let a = 0;
  return typeof t.minimum == "number" && a < t.minimum && (a = r ? Math.ceil(t.minimum) : t.minimum), typeof t.exclusiveMinimum == "number" && a <= t.exclusiveMinimum && (a = r ? Math.floor(t.exclusiveMinimum) + 1 : t.exclusiveMinimum + 1), typeof t.maximum == "number" && a > t.maximum && (a = r ? Math.floor(t.maximum) : t.maximum), typeof t.exclusiveMaximum == "number" && a >= t.exclusiveMaximum && (a = r ? Math.ceil(t.exclusiveMaximum) - 1 : t.exclusiveMaximum - 1), a;
}
function Da(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, a = QA(t.example, r, t.default);
  if (a !== void 0) return a;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return Da(s);
  switch (JA(t.type)) {
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
      return f0(t, !0);
    case "number":
      return f0(t, !1);
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return t.properties || t.additionalProperties ? Da({ ...t, type: "object" }) : t.items ? Da({ ...t, type: "array" }) : null;
  }
}
const KA = new TS();
async function Kd(t, r, a, s, l, u) {
  const f = !s.json_schema && !1;
  return new Promise((p, h) => {
    const g = new AbortController(), y = u ?? g.signal;
    u && u.addEventListener("abort", () => g.abort(), { once: !0 }), KA.generateRequest(
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
async function WA(t, r, a, s) {
  const l = await Kd(t, r, a, {}, void 0, s);
  if (!l?.content)
    throw new Error("Plain request failed to return content.");
  return l.content;
}
async function eT(t, r, a, s, l, u, f) {
  const p = Tt.getSettings();
  let h, g;
  const y = R4(a);
  if (l === "native") {
    if (h = await Kd(
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
    const b = l, v = $A(y, b), d = JSON.stringify(y, null, 2), S = b === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", E = p.prompts[S]?.content;
    if (!E)
      throw new Error(`Prompt template for mode "${b}" not found.`);
    const O = {
      example_response: v,
      schema: d
    };
    let w;
    try {
      w = za.compile(E, { noEscape: !0, strict: !0 })(O);
    } catch (x) {
      const A = p.prompts[S]?.label ?? S;
      throw new Error(
        `Failed to render the "${A}" prompt template: ${x?.message ?? x}. Available variables: ${Object.keys(O).join(", ")}.`
      );
    }
    const D = { role: "system", content: w };
    if (h = await Kd(
      t,
      [...r, D],
      u,
      {},
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = wu(h.content, b, { schema: y });
  }
  const _ = a.safeParse(g);
  if (!_.success) {
    const b = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", _.error.issues), console.error("Raw content parsed:", g), await we("error", b), new Error(b);
  }
  return _.data;
}
const P1 = ({ originalContent: t, newContent: r }) => {
  const a = ee.useMemo(() => {
    const s = u1(t, r);
    let l = "", u = "";
    return s.forEach((f) => {
      const p = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), g = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      f.added || (l += g), f.removed || (u += g);
    }), { originalHtml: l, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ T.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ T.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: a.originalHtml } }),
    /* @__PURE__ */ T.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: a.newHtml } })
  ] });
}, tT = ({ before: t, after: r }) => {
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
    a.length === 0 ? /* @__PURE__ */ T.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ T.jsx("div", { className: "compare-state-list", children: a.map(({ label: s, before: l, after: u }) => /* @__PURE__ */ T.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ T.jsx("h4", { children: s }),
      /* @__PURE__ */ T.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ T.jsx("span", { children: "Before" }),
        /* @__PURE__ */ T.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ T.jsx(P1, { originalContent: l, newContent: u })
    ] }, s)) })
  ] });
}, nT = ({ currentState: t, initialState: r }) => {
  const [a, s] = ee.useState(!1), { coreFields: l, alternateGreetings: u } = ee.useMemo(() => {
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
      /* @__PURE__ */ T.jsx(P1, { originalContent: h, newContent: g })
    ] }, p)) }) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
      /* @__PURE__ */ T.jsx("h4", { children: "Core Fields" }),
      l.map(({ label: p, value: h }) => /* @__PURE__ */ T.jsxs("div", { className: "state-field", children: [
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
}, ki = SillyTavern.getContext(), rT = ({ initialState: t, onSave: r, onClose: a }) => {
  const [s, l] = ee.useState(() => structuredClone(t)), u = (_, b, v) => {
    const d = structuredClone(s), S = v ? "draftFields" : "fields";
    d[S][_] && (d[S][_].value = b), l(d);
  }, f = (_, b) => {
    const v = structuredClone(s), d = `alternate_greetings_${_ + 1}`;
    v.fields[d] && (v.fields[d].value = b), l(v);
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
        /* @__PURE__ */ T.jsxs(ye, { onClick: y, children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ T.jsxs(ye, { onClick: a, className: "danger_button", children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ T.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: _, label: b, value: v }) => /* @__PURE__ */ T.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ T.jsx("label", { children: b }),
        /* @__PURE__ */ T.jsx(Rn, { value: v, onChange: (d) => u(_, d.target.value, !1), rows: 4 })
      ] }, _)),
      g.length > 0 && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
        /* @__PURE__ */ T.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        g.map(({ id: _, label: b, value: v }) => /* @__PURE__ */ T.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ T.jsx("label", { children: b }),
          /* @__PURE__ */ T.jsx(Rn, { value: v, onChange: (d) => u(_, d.target.value, !0), rows: 4 })
        ] }, _))
      ] }),
      h.length > 0 && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
        /* @__PURE__ */ T.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        h.map((_, b) => /* @__PURE__ */ T.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ T.jsxs("label", { children: [
            "Greeting ",
            b + 1
          ] }),
          /* @__PURE__ */ T.jsx(Rn, { value: _, onChange: (v) => f(b, v.target.value), rows: 4 })
        ] }, b))
      ] })
    ] })
  ] });
}, aT = ({
  session: t,
  onBack: r,
  onApply: a,
  onSessionUpdate: s,
  initialState: l,
  chatContextOptions: u
}) => {
  const [f, p] = ee.useState(t.messages), [h, g] = ee.useState(""), [y, _] = ee.useState(!1), [b, v] = ee.useState(null), [d, S] = ee.useState(!1), [E, O] = ee.useState(!1), [w, D] = ee.useState(null), [x, A] = ee.useState(""), M = ee.useRef(null), k = ee.useRef(null);
  ee.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const q = ee.useCallback(
    (V, me, ge) => {
      if (JSON.stringify(ge) === JSON.stringify(me))
        return V;
      const it = Tt.getSettings().prompts.existingFieldDefinitions;
      if (!it) return V;
      const Re = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(ge.fields), ...Object.keys(me.fields)])).forEach((Se) => {
        const xe = ge.fields[Se]?.value ?? "", Pe = me.fields[Se]?.value ?? "";
        if (xe !== Pe) {
          const Fe = me.fields[Se];
          Fe && (Se.startsWith("alternate_greetings_") ? Re.alternate_greetings[Fe.label] = Fe.value : Jn.includes(Se) && (Re.core[Fe.label] = Fe.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(ge.draftFields), ...Object.keys(me.draftFields)])).forEach((Se) => {
        const xe = ge.draftFields[Se]?.value ?? "", Pe = me.draftFields[Se]?.value ?? "";
        if (xe !== Pe && me.draftFields[Se]) {
          const Fe = me.draftFields[Se];
          Re.draft[Fe.label] = Fe.value;
        }
      }), Object.keys(Re.core).length === 0 && Object.keys(Re.alternate_greetings).length === 0 && Object.keys(Re.draft).length === 0)
        return V;
      const ne = { fields: Yt(Re) }, be = oo(it.content, ne, ki.substituteParams);
      if (be.trim()) {
        const Se = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: be.trim(),
          isStateUpdate: !0
        };
        return [...V, Se];
      }
      return V;
    },
    []
  ), X = ee.useCallback(
    async (V, me, ge, Xe) => {
      const it = Tt.getSettings();
      if (!t.profileId) {
        we("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), ge(), _(!0);
      try {
        const Re = [], P = ki.extensionSettings.connectionManager?.profiles?.find(
          (Se) => Se.id === t.profileId
        ), re = P?.api ? ki.CONNECT_API_MAP[P.api].selected : void 0;
        if (!re) {
          we("warning", "No API selected for this session.");
          return;
        }
        for (const Se of V)
          if (Se.id === Qd) {
            if (Ht === void 0 && !Hn) continue;
            const xe = await w0(re, u);
            xe.warnings?.length && xe.warnings.forEach((Pe) => we("warning", Pe)), Re.push(...xe.result);
          } else
            Re.push(Se);
        const ne = V.slice(0, V.length - (me ? 0 : 1)).reverse().find((Se) => Se.stateSnapshot)?.stateSnapshot ?? l, be = it.prompts.existingFieldDefinitions;
        if (be) {
          const Se = {
            fields: Yt({
              core: Object.fromEntries(
                Object.entries(ne.fields).filter(([Pe]) => !Pe.startsWith("alternate_greetings_")).map(([, Pe]) => [Pe.label, Pe.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(ne.fields).filter(([Pe]) => Pe.startsWith("alternate_greetings_")).map(([, Pe]) => [Pe.label, Pe.value])
              ),
              draft: Object.fromEntries(Object.entries(ne.draftFields).map(([, Pe]) => [Pe.label, Pe.value]))
            })
          }, xe = oo(be.content, Se, ki.substituteParams);
          if (xe.trim()) {
            const Pe = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: xe.trim()
            }, Fe = Re.pop();
            Re.push(Pe), Fe && Re.push(Fe);
          }
        }
        if (t.isReadonly) {
          Re.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const Se = await WA(
            t.profileId,
            Re,
            it.maxResponseToken,
            k.current.signal
          ), xe = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Se
          }, Pe = [...V, xe];
          p(Pe), s({ ...t, messages: Pe });
        } else {
          const Se = t.type === "field" ? GA : (() => {
            const Ve = [...Object.keys(ne.fields), ...Object.keys(ne.draftFields)], Ae = Object.keys(ne.draftFields);
            return XA(Ve, Ae);
          })(), Pe = await eT(
            t.profileId,
            Re,
            Se,
            t.type === "field" ? c0.FIELD : c0.GLOBAL,
            t.promptEngineeringMode,
            it.maxResponseToken,
            k.current.signal
          ), Fe = UC(ne, Pe, t.type, t.targetFieldId), he = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Pe.justification,
            stateSnapshot: Fe
          };
          let de = [...V, he];
          de = q(de, Fe, ne), p(de), s({ ...t, messages: de });
        }
      } catch (Re) {
        Re.name === "AbortError" ? we("info", "Request was cancelled.") : (console.error("Revise request failed:", Re), we("error", `Request failed: ${Re.message}`)), Xe();
      } finally {
        _(!1), k.current = null;
      }
    },
    [t, s, l, u, q]
  ), B = ee.useCallback(async () => {
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
    const ge = f.findLastIndex((Xe) => !Xe.isStateUpdate);
    ge > -1 && f[ge].role === "assistant" && (me = f.slice(0, ge)), await X(
      me,
      !0,
      () => p(me),
      () => p(V)
    );
  }, [y, f, X]), $ = () => {
    const V = f.slice().reverse().find((me) => me.stateSnapshot)?.stateSnapshot ?? l;
    a(V), r();
  }, le = (V) => {
    const me = f.findIndex((it) => it.id === V);
    if (me === -1 || !f[me].stateSnapshot) return;
    const ge = f[me].stateSnapshot;
    let Xe = l;
    for (let it = me - 1; it >= 0; it--)
      if (f[it].stateSnapshot) {
        Xe = f[it].stateSnapshot;
        break;
      }
    v({ before: Xe, after: ge });
  }, fe = () => {
    S(!0);
  }, Ce = (V) => {
    D(V.id), A(V.content);
  }, U = () => {
    D(null), A("");
  }, te = async () => {
    if (!w) return;
    const V = f.findIndex((P) => P.id === w);
    if (V === -1 || !await ki.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ge = f, Xe = f.slice(0, V), it = { ...f[V], content: x }, Re = [...Xe, it];
    U(), X(
      Re,
      !1,
      () => p(Re),
      () => p(ge)
    );
  }, ue = async (V) => {
    const me = f.findIndex((P) => P.id === V);
    if (me === -1) return;
    const Xe = !!f[me].isInitial;
    if (!await ki.Popup.show.confirm(
      "Delete Message",
      Xe ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let Re;
    Xe ? Re = f.filter((P) => P.isInitial && P.id !== V) : Re = f.slice(0, me), p(Re), s({ ...t, messages: Re }), we("info", "Message history has been updated.");
  }, je = f.filter((V) => !V.isStateUpdate), j = je.filter((V) => V.isInitial), J = je.filter((V) => !V.isInitial), ae = f.slice().reverse().find((V) => V.stateSnapshot)?.stateSnapshot ?? l, se = () => {
    O(!0);
  }, oe = (V) => {
    const me = f.slice().reverse().find((it) => it.stateSnapshot)?.stateSnapshot ?? l, ge = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: V
    };
    let Xe = [...f, ge];
    Xe = q(Xe, V, me), p(Xe), s({ ...t, messages: Xe }), O(!1);
  }, Le = () => {
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
          s1,
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
        /* @__PURE__ */ T.jsx(ye, { onClick: fe, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ T.jsx(ye, { onClick: se, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ T.jsx(ye, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ T.jsxs(ye, { onClick: $, title: "Apply Changes and Close", children: [
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
            /* @__PURE__ */ T.jsx(Rn, { value: x, onChange: (me) => A(me.target.value), rows: 5 }),
            /* @__PURE__ */ T.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ T.jsxs(ye, { onClick: te, children: [
                /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ T.jsxs(ye, { onClick: U, children: [
                /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, V.id) : /* @__PURE__ */ T.jsxs("div", { className: `message-bubble-wrapper initial-context ${V.role}`, children: [
            /* @__PURE__ */ T.jsx("div", { className: `message-bubble ${V.role} initial`, children: /* @__PURE__ */ T.jsx("div", { className: "message-content", children: V.content }) }),
            !y && V.id !== Qd && /* @__PURE__ */ T.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ T.jsxs(
                ye,
                {
                  className: "message-action-button",
                  onClick: () => Ce(V),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ T.jsxs(
                ye,
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
          /* @__PURE__ */ T.jsx(Rn, { value: x, onChange: (me) => A(me.target.value), rows: 3 }),
          /* @__PURE__ */ T.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ T.jsxs(ye, { onClick: te, children: [
              /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ T.jsxs(ye, { onClick: U, children: [
              /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, V.id) : /* @__PURE__ */ T.jsxs("div", { className: `message-bubble-wrapper ${V.role}`, children: [
          /* @__PURE__ */ T.jsxs("div", { className: "message-actions", children: [
            V.role === "user" && !V.stateSnapshot && !y && /* @__PURE__ */ T.jsxs(
              ye,
              {
                className: "message-action-button",
                onClick: () => Ce(V),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            V.stateSnapshot && !y && /* @__PURE__ */ T.jsxs(
              ye,
              {
                className: "message-action-button",
                onClick: () => le(V.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !y && /* @__PURE__ */ T.jsxs(
              ye,
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
      J.length > 0 && !y && /* @__PURE__ */ T.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ T.jsxs(ye, { onClick: G, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      y && /* @__PURE__ */ T.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ T.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ T.jsx(ye, { onClick: Le, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ T.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ T.jsx(
        Rn,
        {
          value: h,
          onChange: (V) => g(V.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: y || !!w,
          onKeyDown: (V) => {
            V.key === "Enter" && !V.shiftKey && (V.preventDefault(), B());
          }
        }
      ),
      /* @__PURE__ */ T.jsxs(ye, { onClick: B, disabled: y || !h.trim() || !!w, children: [
        " ",
        /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    b && /* @__PURE__ */ T.jsx(
      Pi,
      {
        type: yn.DISPLAY,
        content: /* @__PURE__ */ T.jsx(tT, { before: b.before, after: b.after }),
        onComplete: () => v(null),
        options: { wide: !0, large: !0 }
      }
    ),
    d && /* @__PURE__ */ T.jsx(
      Pi,
      {
        type: yn.DISPLAY,
        content: /* @__PURE__ */ T.jsx(nT, { currentState: ae, initialState: l }),
        onComplete: () => S(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    E && /* @__PURE__ */ T.jsx(
      Pi,
      {
        type: yn.DISPLAY,
        content: /* @__PURE__ */ T.jsx(
          rT,
          {
            initialState: ae,
            onSave: oe,
            onClose: () => O(!1)
          }
        ),
        onComplete: () => O(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
function I1(t, r = {}) {
  const a = t?.entries;
  if (!a)
    return [];
  const s = Array.isArray(a) ? a : Object.values(a);
  return r.includeDisabled ? s : s.filter((l) => !l.disable);
}
async function iT(t, r, a, s, l) {
  const u = Tt.getSettings(), f = u.mainContextTemplatePresets[a];
  if (!f)
    throw new Error(`Main context template preset "${a}" not found.`);
  const p = [], g = {
    ...{
      user: gn.name1 || "You",
      char: Yt(t.fields.name?.value) || "Character",
      // Resolved up front like ST's {{persona}} macro, since renderPrompt keeps {{char}}/{{user}} literal.
      persona: gn.substituteParams(gn.powerUserSettings.persona_description ?? "")
    },
    fields: Yt({
      core: Object.fromEntries(
        Object.entries(t.fields).filter(([v]) => !v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(t.fields).filter(([v]) => v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      draft: Object.fromEntries(Object.entries(t.draftFields).map(([, v]) => [v.label, v.value]))
    })
  };
  if (s.charCard) {
    const v = [];
    l.selectedCharacterIndexes.forEach((d) => {
      const S = gn.characters[parseInt(d)];
      S && v.push(S);
    }), g.characters = Yt(v);
  }
  if (s.worldInfo) {
    const v = {};
    await Promise.all(
      l.selectedWorldNames.map(async (d) => {
        const S = await gn.loadWorldInfo(d);
        S && (v[d] = I1(S));
      })
    ), g.lorebooks = Yt(v);
  }
  for (const v of f.prompts) {
    if (!v.enabled || v.promptName === "stDescription" && !s.stDescription || v.promptName === "charDefinitions" && !s.charCard || v.promptName === "lorebookDefinitions" && !s.worldInfo || v.promptName === "existingFieldDefinitions" && !s.existingFields || v.promptName === "personaDescription" && !s.persona || v.promptName === "chatHistory" && s.messages.type === "none" || Ht === void 0 && !Hn && v.promptName === "chatHistory") continue;
    if (v.promptName === "chatHistory") {
      p.push({
        id: Qd,
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
    const E = v.promptName === "stDescription" ? { ...g, char: "{{char}}", user: "{{user}}" } : g, O = oo(S.content, E, gn.substituteParams);
    O.trim() && p.push({
      id: `im-${p.length}`,
      role: v.role,
      content: O.trim(),
      isInitial: !0
    });
  }
  const y = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", _ = u.prompts.reviseTaskDescription.content, b = oo(
    _,
    { ...g, isFieldSession: !!r, targetLabel: Yt(y) },
    gn.substituteParams
  );
  return p.push({
    id: `im-${p.length}`,
    role: "system",
    content: b,
    isInitial: !0
  }), p;
}
const B1 = "charCreator", U1 = "charCreator_reviseSessions", mo = () => SillyTavern.libs.localforage, sT = (t) => {
  if (!t)
    return { value: null, recovered: !1 };
  try {
    return { value: JSON.parse(t), recovered: !1 };
  } catch (r) {
    return { value: null, recovered: !0, error: r };
  }
}, H1 = async (t, r, a) => {
  try {
    const s = await r.getItem(t);
    if (s !== null)
      return { value: s, migrated: !1, recovered: !1 };
    const l = sT(a.getItem(t));
    return l.value === null ? (l.recovered && a.removeItem(t), { value: null, migrated: !1, recovered: l.recovered, error: l.error }) : (await r.setItem(t, l.value), a.removeItem(t), { value: l.value, migrated: !0, recovered: l.recovered });
  } catch (s) {
    return { value: null, migrated: !1, recovered: !0, error: s };
  }
}, q1 = async (t, r, a = mo()) => {
  try {
    return await a.setItem(t, r), { persisted: !0 };
  } catch (s) {
    return { persisted: !1, error: s };
  }
}, oT = (t = mo(), r = localStorage) => H1(B1, t, r), lT = (t, r = mo()) => q1(B1, t, r), uT = (t = mo(), r = localStorage) => H1(U1, t, r), cT = (t, r = mo()) => q1(U1, t, r), fu = SillyTavern.getContext(), fT = ({
  target: t,
  onClose: r,
  onApply: a,
  initialState: s,
  contextToSend: l,
  sessionForContext: u
}) => {
  const [f, p] = ee.useState([]), [h, g] = ee.useState(null), [y, _] = ee.useState(!0);
  ee.useEffect(() => {
    let D = !0;
    return uT().then(({ value: x, recovered: A }) => {
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
    p(D), cT(D).then((x) => {
      x.persisted || (console.warn("Failed to save revise sessions:", x.error), we("warning", "Revise session history could not be saved. Browser storage may be full."));
    });
  }, d = async () => {
    const D = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", x = await fu.Popup.show.input(
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
        }, k = await iT(
          s,
          M.targetFieldId,
          M.context.mainContextTemplatePreset,
          l,
          u
        );
        M.messages = k, g(M);
      } catch (A) {
        console.error("Failed to create session:", A), we("error", `Failed to create session: ${A.message}`);
      }
  }, S = (D) => {
    g(D);
  }, E = async (D) => {
    if (await fu.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const A = f.filter((M) => M.id !== D);
      v(A);
    }
  }, O = (D) => {
    const x = f.findIndex((M) => M.id === D.id), A = [...f];
    x !== -1 ? A[x] = D : A.push(D), v(A), g(D);
  };
  if (h) {
    const D = fu.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === h.profileId
    ), x = {
      targetCharacterId: Ht,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Hn,
      presetName: D?.preset,
      contextName: D?.context,
      instructName: D?.instruct
    }, A = l.messages;
    switch (A.type) {
      case "none":
        x.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        x.messageIndexesBetween = { start: 0, end: A.first ?? 10 };
        break;
      case "last":
        const M = fu.chat?.length ?? 0, k = A.last ?? 10;
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
    return Ht === void 0 && !Hn && (x.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ T.jsx(
      aT,
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
      /* @__PURE__ */ T.jsx(ye, { className: "danger_button", onClick: () => E(D.id), children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, D.id)) }),
    /* @__PURE__ */ T.jsx("div", { className: "session-actions", children: /* @__PURE__ */ T.jsxs(ye, { onClick: d, className: "menu_button", children: [
      /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
};
function dT(t, r) {
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
function hT(t, r, a) {
  return za.compile(t, { noEscape: !0 })({
    character: dT(r, a),
    // The entry describes this card, so {{char}} is its name. {{user}} is left for ST to resolve when the entry is used.
    char: r.name?.value || "{{char}}",
    user: "{{user}}"
  });
}
function pT(t, r = []) {
  const a = new Set(t), s = r.filter((l) => l && !a.has(l));
  return [
    ...t.map((l) => ({ value: l, label: l })),
    ...s.map((l) => ({ value: l, label: `${l} (missing)` }))
  ];
}
const Dn = SillyTavern.getContext(), Ad = () => ({
  selectedCharacterIndexes: Ht ? [String(Ht)] : [],
  selectedWorldNames: [],
  fields: Jn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: Sr[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), mT = {
  name: { label: Sr.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Sr.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Sr.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Sr.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Sr.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Sr.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, gT = () => {
  const t = o1(), r = Tt.getSettings(), [a, s] = ee.useState(Ad()), [l, u] = ee.useState([]), [f, p] = ee.useState(!0), [h, g] = ee.useState("core"), [y, _] = ee.useState([]), [b, v] = ee.useState([]), [d, S] = ee.useState(null), [E, O] = ee.useState(null), [w, D] = ee.useState(!1), [x, A] = ee.useState(null);
  ee.useEffect(() => {
    (async () => {
      p(!0), _(Dn.characters), v(ov);
      const re = (await oT()).value ?? {}, ne = Ad();
      if (re.fields && (ne.fields = { ...ne.fields, ...re.fields }), re.draftFields && (ne.draftFields = re.draftFields), re.selectedCharacterIndexes && (ne.selectedCharacterIndexes = re.selectedCharacterIndexes), re.selectedWorldNames && (ne.selectedWorldNames = re.selectedWorldNames), re.lastLoadedCharacterId) {
        ne.lastLoadedCharacterId = re.lastLoadedCharacterId;
        const be = Dn.characters.find((Se) => Se.avatar === re.lastLoadedCharacterId);
        be && S(be);
      }
      s(ne), p(!1);
    })();
  }, []), ee.useEffect(() => {
    f || lT(a).then((P) => {
      P.persisted || (console.warn("Failed to save Character Creator session:", P.error), we("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [a, f]);
  const M = (P, re) => {
    Tt.getSettings()[P] = re, Tt.saveSettings(), t();
  }, k = (P, re) => {
    Tt.getSettings().contextToSend[P] = re, Tt.saveSettings(), t();
  }, q = ee.useCallback(
    (P, re, ne, be) => {
      s((Se) => {
        const xe = be ? "draftFields" : "fields", Pe = { ...Se[xe] };
        return Pe[P] || (Pe[P] = { value: "", prompt: "", label: P }), Pe[P][ne] = re, { ...Se, [xe]: Pe };
      });
    },
    []
  ), X = ee.useMemo(
    () => Object.keys(a.fields).filter((P) => P.startsWith("alternate_greetings_")).sort((P, re) => parseInt(P.split("_")[2]) - parseInt(re.split("_")[2])).map((P) => a.fields[P]),
    [a.fields]
  ), B = ee.useCallback((P) => {
    s((re) => {
      const ne = { ...re.fields };
      return Object.keys(ne).forEach((be) => {
        be.startsWith("alternate_greetings_") && delete ne[be];
      }), P.forEach((be, Se) => {
        const xe = `alternate_greetings_${Se + 1}`;
        ne[xe] = { ...be, label: `Alternate Greeting ${Se + 1}` };
      }), { ...re, fields: ne };
    });
  }, []), G = ee.useCallback(
    (P, re) => {
      q(P, "", "value", re);
    },
    [q]
  ), $ = ee.useCallback(
    async (P) => {
      await Dn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${a.draftFields[P].label}"?`
      ) && s((ne) => {
        const be = { ...ne.draftFields };
        return delete be[P], { ...ne, draftFields: be };
      });
    },
    [a.draftFields]
  ), le = ee.useCallback(async () => {
    const P = await Dn.Popup.show.input("Enter Draft Field Name", "");
    if (!P?.trim()) return;
    const re = qd(P.trim());
    if (!re) return we("error", "Invalid field name.");
    if (a.draftFields[re] || Jn.includes(re))
      return we("warning", "Field name already exists.");
    s((ne) => ({
      ...ne,
      draftFields: { ...ne.draftFields, [re]: { value: "", prompt: "", label: P } }
    })), g("draft");
  }, [a.draftFields]), fe = (P) => {
    A({ type: "field", fieldId: P }), D(!0);
  }, Ce = () => {
    A({ type: "global" }), D(!0);
  }, U = (P) => {
    s((re) => HC(re, P)), we("success", "Changes from revise session applied."), D(!1);
  }, te = ee.useCallback(
    async (P, re) => {
      if (!r.profileId) return we("warning", "Please select a connection profile.");
      u((ne) => [...ne, P]);
      try {
        const ne = Dn.extensionSettings.connectionManager?.profiles?.find(
          (Ae) => Ae.id === r.profileId
        );
        if (!ne) throw new Error("Connection profile not found.");
        const be = {
          presetName: ne?.preset,
          contextName: ne?.context,
          instructName: ne?.instruct,
          targetCharacterId: Ht,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Hn
        }, Se = r.contextToSend.messages;
        switch (Se.type) {
          case "none":
            be.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            be.messageIndexesBetween = { start: 0, end: Se.first ?? 10 };
            break;
          case "last":
            const Ae = Dn.chat?.length ?? 0, Ze = Se.last ?? 10;
            be.messageIndexesBetween = {
              end: Math.max(0, Ae - 1),
              start: Math.max(0, Ae - Ze)
            };
            break;
          case "range":
            be.messageIndexesBetween = {
              start: Se.range?.start ?? 0,
              end: Se.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        const xe = Se.type !== "none" && (Ht !== void 0 || !!Hn), Pe = {};
        r.contextToSend.worldInfo && await Promise.all(
          a.selectedWorldNames.filter((Ae) => ov.includes(Ae)).map(async (Ae) => {
            const Ze = await Dn.loadWorldInfo(Ae);
            Ze && (Pe[Ae] = I1(Ze, { includeDisabled: !0 }));
          })
        );
        const Fe = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete Fe.stDescription, (!r.contextToSend.charCard || a.selectedCharacterIndexes.length === 0) && delete Fe.charDefinitions, (!r.contextToSend.worldInfo || a.selectedWorldNames.length === 0) && delete Fe.lorebookDefinitions, r.contextToSend.existingFields || delete Fe.existingFieldDefinitions, r.contextToSend.persona || delete Fe.personaDescription, delete Fe.worldInfoCharDefinition;
        const he = await oC({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: be,
          continueFrom: re,
          session: a,
          allCharacters: y,
          entriesGroupByWorldName: Pe,
          promptSettings: Fe,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`].content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (Ae) => Ae.enabled && (xe || Ae.promptName !== "chatHistory")
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: P,
          outputFormat: r.outputFormat
        }), de = P.startsWith("alternate_greetings_"), Ve = !de && !Jn.includes(P);
        if (de) {
          const Ae = parseInt(P.split("_")[2]) - 1, Ze = [...X];
          Ze[Ae] && (Ze[Ae].value = he), B(Ze);
        } else
          q(P, he, "value", Ve);
      } catch (ne) {
        console.error(ne), we("error", ne.message || String(ne));
      } finally {
        u((ne) => ne.filter((be) => be !== P));
      }
    },
    [a, r, y, X, q, B]
  ), ue = ee.useCallback(async () => {
    await Dn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(Ad()), S(null));
  }, []), je = ee.useCallback(
    (P) => {
      if (!d) return we("warning", "Please load a character to compare against.");
      let re, ne, be;
      typeof P == "number" ? (re = X[P]?.value ?? "", ne = d.data?.alternate_greetings?.[P] ?? "", be = `Alternate Greeting ${P + 1}`) : (re = a.fields[P]?.value ?? "", ne = d[P] ?? d.data?.[P] ?? "", be = Sr[P]), O({ original: ne, current: re, fieldName: be });
    },
    [d, a.fields, X]
  ), j = ee.useCallback(
    async (P) => {
      const re = y[parseInt(P)];
      if (!re || Jn.some((xe) => a.fields[xe].value.trim() !== "") && !await Dn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const be = { ...a.fields };
      Jn.forEach((xe) => {
        be[xe] = { value: re[xe] ?? re.data?.[xe] ?? "", prompt: "", label: Sr[xe] };
      });
      const Se = (re.data?.alternate_greetings ?? []).map((xe) => ({ value: xe, prompt: "" }));
      S(re), s((xe) => ({ ...xe, fields: be, lastLoadedCharacterId: re.avatar })), B(Se);
    },
    [y, a.fields, B]
  ), J = ee.useCallback(async () => {
    if (Hn) {
      we("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (Ht === void 0) {
      we("warning", "No character chat is currently open.");
      return;
    }
    await j(String(Ht));
  }, [j]), ae = () => X.map((P) => P.value).filter((P) => P.trim() !== ""), se = async () => {
    if (!a.fields.name.value) return we("warning", "Please provide a character name.");
    if (!await Dn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
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
      await z_(re, !0);
    } catch (ne) {
      we("error", `Failed to create character: ${ne.message}`);
    }
  }, oe = async () => {
    if (!d) return we("warning", "Please load a character to override.");
    if (!await Dn.Popup.show.confirm(
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
      await L_(re, !0), we("success", `Character "${re.name}" updated!`);
    } catch (ne) {
      we("error", `Failed to override character: ${ne.message}`);
    }
  }, Le = () => {
    const P = JSON.stringify({ draftFields: a.draftFields, version: ch }, null, 2), re = new Blob([P], { type: "application/json" }), ne = document.createElement("a");
    ne.href = URL.createObjectURL(re), ne.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, ne.click(), URL.revokeObjectURL(ne.href);
  }, V = () => {
    const P = document.createElement("input");
    P.type = "file", P.accept = ".json", P.onchange = async () => {
      const re = P.files?.[0];
      if (re)
        try {
          const ne = await re.text(), be = JSON.parse(ne);
          if (!be.draftFields) throw new Error("Invalid file format.");
          (Object.keys(a.draftFields).length > 0 ? await Dn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((xe) => ({ ...xe, draftFields: be.draftFields })), we("success", "Draft fields imported."));
        } catch (ne) {
          we("error", `Import failed: ${ne.message}`);
        }
    }, P.click();
  }, me = ee.useMemo(
    () => y.map((P, re) => ({ value: String(re), label: P.name })),
    [y]
  ), ge = ee.useMemo(
    () => b.map((P) => ({ value: P, label: P })),
    [b]
  ), Xe = ee.useMemo(
    () => pT(b, a.selectedWorldNames),
    [b, a.selectedWorldNames]
  ), it = ee.useMemo(
    () => Object.keys(r.promptPresets).map((P) => ({ value: P, label: P })),
    [r.promptPresets]
  ), Re = ee.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((P) => ({ value: P, label: P })),
    [r.mainContextTemplatePresets]
  );
  return f ? /* @__PURE__ */ T.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ T.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ T.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ T.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ T.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ T.jsx(
            s1,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (P) => M("profileId", P?.id ?? "")
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
                  onChange: (P) => k("stDescription", P.target.checked)
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
                  onChange: (P) => k("persona", P.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (Ht !== void 0 || Hn) && /* @__PURE__ */ T.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ T.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ T.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (P) => k("messages", {
                    ...r.contextToSend.messages,
                    type: P.target.value
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
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      first: parseInt(P.target.value) || 10
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
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      last: parseInt(P.target.value) || 10
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
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: parseInt(P.target.value) || 0
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
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: parseInt(P.target.value) || 10 }
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
                  onChange: (P) => k("charCard", P.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ T.jsx(
              su,
              {
                items: me,
                value: a.selectedCharacterIndexes,
                onChange: (P) => s((re) => ({ ...re, selectedCharacterIndexes: P })),
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
                  onChange: (P) => k("worldInfo", P.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ T.jsx(
              su,
              {
                items: Xe,
                value: a.selectedWorldNames,
                onChange: (P) => s((re) => ({ ...re, selectedWorldNames: P })),
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
                  onChange: (P) => k("existingFields", P.target.checked)
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
                  onChange: (P) => k("dontSendOtherGreetings", P.target.checked)
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
              Tu,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: Re,
                value: r.mainContextTemplatePreset,
                onChange: (P) => M("mainContextTemplatePreset", P ?? "default")
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
                onChange: (P) => M("maxContextType", P.target.value),
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
              onChange: (P) => M("maxContextValue", parseInt(P.target.value) || 16384)
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
                onChange: (P) => M("maxResponseToken", parseInt(P.target.value) || 1024)
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
                onChange: (P) => M("outputFormat", P.target.value),
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
            Tu,
            {
              label: "Prompt Preset",
              items: it,
              value: r.promptPreset,
              onChange: (P) => M("promptPreset", P ?? "default"),
              onItemsChange: (P) => M(
                "promptPresets",
                P.reduce(
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
            Rn,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (P) => M("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: P.target.value }
              }),
              rows: 4
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "wide-column", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "character-field-actions", children: [
          /* @__PURE__ */ T.jsx(
            ye,
            {
              onClick: Ce,
              title: "Open global revision sessions to edit multiple fields at once",
              children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-comments" })
            }
          ),
          /* @__PURE__ */ T.jsx(ye, { onClick: se, children: "Save as New" }),
          /* @__PURE__ */ T.jsx(ye, { onClick: oe, disabled: !d, children: "Override Char" }),
          r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ T.jsx(
            su,
            {
              items: ge,
              placeholder: "Save as WI Entry",
              closeOnSelect: !0,
              value: [],
              onChange: (P) => {
              },
              onBeforeSelection: async (P, re) => {
                if (!a.fields.name.value)
                  return we("warning", "Please enter a name first."), !1;
                const ne = re[0], be = hT(
                  r.prompts.worldInfoCharDefinition.content,
                  a.fields,
                  X
                ), Se = {
                  uid: -1,
                  key: [a.fields.name.value],
                  content: be,
                  comment: a.fields.name.value,
                  disable: !1,
                  keysecondary: []
                };
                try {
                  await mx({ entry: Se, selectedWorldName: ne, operation: "add" }), we("success", `Entry added to ${ne}.`);
                } catch (xe) {
                  we("error", `Failed to add WI Entry: ${xe.message}`);
                }
                return !1;
              }
            }
          ),
          /* @__PURE__ */ T.jsxs(ye, { onClick: ue, children: [
            /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-rotate-left", style: { marginRight: "10px" } }),
            "Reset Fields"
          ] }),
          /* @__PURE__ */ T.jsx(
            ye,
            {
              onClick: J,
              title: "Load the character from the currently open chat",
              disabled: !!Hn || Ht === void 0,
              children: "Current Char"
            }
          ),
          /* @__PURE__ */ T.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ T.jsx(
            su,
            {
              items: me,
              value: d ? [String(y.indexOf(d))] : [],
              onChange: (P) => j(P[0]),
              multiple: !1,
              enableSearch: !0,
              placeholder: "Load Character..."
            }
          ) })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ T.jsx(
            ye,
            {
              onClick: () => g("core"),
              className: `menu_button tab-button ${h === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ T.jsx(
            ye,
            {
              onClick: () => g("draft"),
              className: `menu_button tab-button ${h === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ T.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
            /* @__PURE__ */ T.jsxs(ye, { onClick: le, children: [
              /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ T.jsx(ye, { onClick: Le, children: "Export" }),
            /* @__PURE__ */ T.jsx(ye, { onClick: V, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "tab-content-area", children: [
          h === "core" && /* @__PURE__ */ T.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ T.jsx("h3", { children: "Core Character Fields" }),
            Jn.map((P) => {
              const re = mT[P];
              return re ? /* @__PURE__ */ T.jsx(
                Py,
                {
                  fieldId: P,
                  label: re.label,
                  value: a.fields[P]?.value ?? "",
                  prompt: a.fields[P]?.prompt ?? "",
                  large: re.large,
                  rows: re.rows,
                  promptEnabled: re.promptEnabled,
                  isGenerating: l.includes(P),
                  onValueChange: (ne, be) => q(ne, be, "value", !1),
                  onPromptChange: (ne, be) => q(ne, be, "prompt", !1),
                  onGenerate: te,
                  onContinue: (ne) => te(ne, a.fields[ne].value),
                  onClear: (ne) => G(ne, !1),
                  onCompare: je,
                  onOpenReviseSessions: fe
                },
                P
              ) : null;
            }),
            /* @__PURE__ */ T.jsx(
              _C,
              {
                greetings: X,
                onGreetingsChange: B,
                isGenerating: l.some((P) => P.startsWith("alternate_greetings_")),
                onGenerate: (P) => te(`alternate_greetings_${P + 1}`),
                onContinue: (P) => te(`alternate_greetings_${P + 1}`, X[P].value),
                onCompare: je
              }
            )
          ] }),
          h === "draft" && /* @__PURE__ */ T.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ T.jsx("h3", { children: "Draft Fields" }),
            Object.entries(a.draftFields).map(([P, re]) => /* @__PURE__ */ T.jsx(
              Py,
              {
                fieldId: P,
                label: re.label,
                value: re.value,
                prompt: re.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: l.includes(P),
                onValueChange: (ne, be) => q(ne, be, "value", !0),
                onPromptChange: (ne, be) => q(ne, be, "prompt", !0),
                onGenerate: te,
                onContinue: (ne) => te(ne, a.draftFields[ne].value),
                onClear: (ne) => G(ne, !0),
                onDelete: $
              },
              P
            ))
          ] })
        ] })
      ] })
    ] }),
    E && /* @__PURE__ */ T.jsx(
      Pi,
      {
        type: yn.DISPLAY,
        content: /* @__PURE__ */ T.jsx(
          IC,
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
      Pi,
      {
        type: yn.DISPLAY,
        content: /* @__PURE__ */ T.jsx(
          fT,
          {
            target: x,
            onClose: () => D(!1),
            onApply: U,
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
}, vT = () => {
  const [t, r] = ee.useState(!1), a = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = a, t ? /* @__PURE__ */ T.jsx(
    Pi,
    {
      content: /* @__PURE__ */ T.jsx(gT, {}),
      type: yn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, F1 = SillyTavern.getContext();
async function yT() {
  const t = await F1.renderExtensionTemplateAsync(
    `third-party/${ka}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", t);
  const r = document.createElement("div"), a = document.querySelector(".charCreator_settings .inline-drawer-content");
  a && (a.prepend(r), Sv.createRoot(r).render(
    /* @__PURE__ */ T.jsx(vu.StrictMode, { children: /* @__PURE__ */ T.jsx(yC, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', l = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), Sv.createRoot(u).render(
    /* @__PURE__ */ T.jsx(vu.StrictMode, { children: /* @__PURE__ */ T.jsx(vT, {}) })
  ), l.forEach((p) => {
    if (!p) return;
    const h = document.createElement("div");
    h.innerHTML = s.trim();
    const g = h.firstChild;
    g && (p.prepend(g), g.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function bT() {
  return !!F1.ConnectionManagerRequestService;
}
bT() ? fC().then(() => {
  yT();
}) : we("error", `[${ka}] Make sure ST is updated.`);
export {
  yT as init
};
