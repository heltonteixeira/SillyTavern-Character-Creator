import { renderStoryString as w2, persona_description_positions as pv } from "../../../../power-user.js";
import { parseMesExamples as A2, baseChatReplace as T2, chat_metadata as Ps, getMaxContextSize as O2, name1 as _r, name2 as Qr, this_chid as qt, extension_prompt_types as wa, depth_prompt_role_default as N2, depth_prompt_depth_default as D2 } from "../../../../../script.js";
import { createWorldInfoEntry as M2, world_info_include_names as k2, wi_anchor_position as R2, world_names as mv } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as j2, formatInstructModeSystemPrompt as z2 } from "../../../../instruct-mode.js";
import { appendFileContent as L2 } from "../../../../chats.js";
import { setOpenAIMessages as P2, setOpenAIMessageExamples as I2, formatWorldInfo as B2, getPromptPosition as U2, getPromptRole as H2, prepareOpenAIMessages as q2 } from "../../../../openai.js";
import { metadata_keys as Is } from "../../../../authors-note.js";
import { getGroupDepthPrompts as F2, selected_group as Hn } from "../../../../group-chats.js";
import { getRegexedString as Z2, regex_placement as gv } from "../../../regex/engine.js";
import { removeFromArray as vv, runAfterAnimation as G2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ai, fixToastrForDialogs as rd } from "../../../../popup.js";
import yv from "../../../../../lib/dialog-polyfill.esm.js";
function A0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ad = { exports: {} }, Bs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bv;
function V2() {
  if (bv) return Bs;
  bv = 1;
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
var _v;
function Y2() {
  return _v || (_v = 1, ad.exports = V2()), ad.exports;
}
var A = Y2(), id = { exports: {} }, ke = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sv;
function X2() {
  if (Sv) return ke;
  Sv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
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
  var x = Array.isArray, T = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function k(j, J, ae, se, oe, Pe) {
    return ae = Pe.ref, {
      $$typeof: t,
      type: j,
      key: J,
      ref: ae !== void 0 ? ae : null,
      props: Pe
    };
  }
  function U(j, J) {
    return k(
      j.type,
      J,
      void 0,
      void 0,
      void 0,
      j.props
    );
  }
  function Y(j) {
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
  function ue() {
  }
  function he(j) {
    switch (j.status) {
      case "fulfilled":
        return j.value;
      case "rejected":
        throw j.reason;
      default:
        switch (typeof j.status == "string" ? j.then(ue, ue) : (j.status = "pending", j.then(
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
  function xe(j, J, ae, se, oe) {
    var Pe = typeof j;
    (Pe === "undefined" || Pe === "boolean") && (j = null);
    var V = !1;
    if (j === null) V = !0;
    else
      switch (Pe) {
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
              return V = j._init, xe(
                V(j._payload),
                J,
                ae,
                se,
                oe
              );
          }
      }
    if (V)
      return oe = oe(j), V = se === "" ? "." + $(j, 0) : se, x(oe) ? (ae = "", V != null && (ae = V.replace(G, "$&/") + "/"), xe(oe, J, ae, "", function(Ye) {
        return Ye;
      })) : oe != null && (Y(oe) && (oe = U(
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
        se = j[ge], Pe = me + $(se, ge), V += xe(
          se,
          J,
          ae,
          Pe,
          oe
        );
    else if (ge = b(j), typeof ge == "function")
      for (j = ge.call(j), ge = 0; !(se = j.next()).done; )
        se = se.value, Pe = me + $(se, ge++), V += xe(
          se,
          J,
          ae,
          Pe,
          oe
        );
    else if (Pe === "object") {
      if (typeof j.then == "function")
        return xe(
          he(j),
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
  function H(j, J, ae) {
    if (j == null) return j;
    var se = [], oe = 0;
    return xe(j, se, "", "", function(Pe) {
      return J.call(ae, Pe, oe++);
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
  var ce = typeof reportError == "function" ? reportError : function(j) {
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
      if (!Y(j))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return j;
    }
  }, ke.Component = E, ke.Fragment = a, ke.Profiler = l, ke.PureComponent = w, ke.StrictMode = s, ke.Suspense = h, ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, ke.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(j) {
      return T.H.useMemoCache(j);
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
    var se = d({}, j.props), oe = j.key, Pe = void 0;
    if (J != null)
      for (V in J.ref !== void 0 && (Pe = void 0), J.key !== void 0 && (oe = "" + J.key), J)
        !M.call(J, V) || V === "key" || V === "__self" || V === "__source" || V === "ref" && J.ref === void 0 || (se[V] = J[V]);
    var V = arguments.length - 2;
    if (V === 1) se.children = ae;
    else if (1 < V) {
      for (var me = Array(V), ge = 0; ge < V; ge++)
        me[ge] = arguments[ge + 2];
      se.children = me;
    }
    return k(j.type, oe, void 0, void 0, Pe, se);
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
    var se, oe = {}, Pe = null;
    if (J != null)
      for (se in J.key !== void 0 && (Pe = "" + J.key), J)
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
    return k(j, Pe, void 0, void 0, null, oe);
  }, ke.createRef = function() {
    return { current: null };
  }, ke.forwardRef = function(j) {
    return { $$typeof: p, render: j };
  }, ke.isValidElement = Y, ke.lazy = function(j) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: j },
      _init: te
    };
  }, ke.memo = function(j, J) {
    return {
      $$typeof: m,
      type: j,
      compare: J === void 0 ? null : J
    };
  }, ke.startTransition = function(j) {
    var J = T.T, ae = {};
    T.T = ae;
    try {
      var se = j(), oe = T.S;
      oe !== null && oe(ae, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(je, ce);
    } catch (Pe) {
      ce(Pe);
    } finally {
      T.T = J;
    }
  }, ke.unstable_useCacheRefresh = function() {
    return T.H.useCacheRefresh();
  }, ke.use = function(j) {
    return T.H.use(j);
  }, ke.useActionState = function(j, J, ae) {
    return T.H.useActionState(j, J, ae);
  }, ke.useCallback = function(j, J) {
    return T.H.useCallback(j, J);
  }, ke.useContext = function(j) {
    return T.H.useContext(j);
  }, ke.useDebugValue = function() {
  }, ke.useDeferredValue = function(j, J) {
    return T.H.useDeferredValue(j, J);
  }, ke.useEffect = function(j, J, ae) {
    var se = T.H;
    if (typeof ae == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return se.useEffect(j, J);
  }, ke.useId = function() {
    return T.H.useId();
  }, ke.useImperativeHandle = function(j, J, ae) {
    return T.H.useImperativeHandle(j, J, ae);
  }, ke.useInsertionEffect = function(j, J) {
    return T.H.useInsertionEffect(j, J);
  }, ke.useLayoutEffect = function(j, J) {
    return T.H.useLayoutEffect(j, J);
  }, ke.useMemo = function(j, J) {
    return T.H.useMemo(j, J);
  }, ke.useOptimistic = function(j, J) {
    return T.H.useOptimistic(j, J);
  }, ke.useReducer = function(j, J, ae) {
    return T.H.useReducer(j, J, ae);
  }, ke.useRef = function(j) {
    return T.H.useRef(j);
  }, ke.useState = function(j) {
    return T.H.useState(j);
  }, ke.useSyncExternalStore = function(j, J, ae) {
    return T.H.useSyncExternalStore(
      j,
      J,
      ae
    );
  }, ke.useTransition = function() {
    return T.H.useTransition();
  }, ke.version = "19.1.1", ke;
}
var xv;
function ih() {
  return xv || (xv = 1, id.exports = X2()), id.exports;
}
var ee = ih();
const xu = /* @__PURE__ */ A0(ee);
var sd = { exports: {} }, Us = {}, od = { exports: {} }, ld = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ev;
function $2() {
  return Ev || (Ev = 1, (function(t) {
    function r(H, te) {
      var ce = H.length;
      H.push(te);
      e: for (; 0 < ce; ) {
        var je = ce - 1 >>> 1, j = H[je];
        if (0 < l(j, te))
          H[je] = te, H[ce] = j, ce = je;
        else break e;
      }
    }
    function a(H) {
      return H.length === 0 ? null : H[0];
    }
    function s(H) {
      if (H.length === 0) return null;
      var te = H[0], ce = H.pop();
      if (ce !== te) {
        H[0] = ce;
        e: for (var je = 0, j = H.length, J = j >>> 1; je < J; ) {
          var ae = 2 * (je + 1) - 1, se = H[ae], oe = ae + 1, Pe = H[oe];
          if (0 > l(se, ce))
            oe < j && 0 > l(Pe, se) ? (H[je] = Pe, H[oe] = ce, je = oe) : (H[je] = se, H[ae] = ce, je = ae);
          else if (oe < j && 0 > l(Pe, ce))
            H[je] = Pe, H[oe] = ce, je = oe;
          else break e;
        }
      }
      return te;
    }
    function l(H, te) {
      var ce = H.sortIndex - te.sortIndex;
      return ce !== 0 ? ce : H.id - te.id;
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
    var h = [], m = [], y = 1, _ = null, b = 3, v = !1, d = !1, S = !1, E = !1, O = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function x(H) {
      for (var te = a(m); te !== null; ) {
        if (te.callback === null) s(m);
        else if (te.startTime <= H)
          s(m), te.sortIndex = te.expirationTime, r(h, te);
        else break;
        te = a(m);
      }
    }
    function T(H) {
      if (S = !1, x(H), !d)
        if (a(h) !== null)
          d = !0, M || (M = !0, $());
        else {
          var te = a(m);
          te !== null && xe(T, te.startTime - H);
        }
    }
    var M = !1, k = -1, U = 5, Y = -1;
    function B() {
      return E ? !0 : !(t.unstable_now() - Y < U);
    }
    function G() {
      if (E = !1, M) {
        var H = t.unstable_now();
        Y = H;
        var te = !0;
        try {
          e: {
            d = !1, S && (S = !1, w(k), k = -1), v = !0;
            var ce = b;
            try {
              t: {
                for (x(H), _ = a(h); _ !== null && !(_.expirationTime > H && B()); ) {
                  var je = _.callback;
                  if (typeof je == "function") {
                    _.callback = null, b = _.priorityLevel;
                    var j = je(
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
                  var J = a(m);
                  J !== null && xe(
                    T,
                    J.startTime - H
                  ), te = !1;
                }
              }
              break e;
            } finally {
              _ = null, b = ce, v = !1;
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
      var ue = new MessageChannel(), he = ue.port2;
      ue.port1.onmessage = G, $ = function() {
        he.postMessage(null);
      };
    } else
      $ = function() {
        O(G, 0);
      };
    function xe(H, te) {
      k = O(function() {
        H(t.unstable_now());
      }, te);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, t.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : U = 0 < H ? Math.floor(1e3 / H) : 5;
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
      var ce = b;
      b = te;
      try {
        return H();
      } finally {
        b = ce;
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
      var ce = b;
      b = H;
      try {
        return te();
      } finally {
        b = ce;
      }
    }, t.unstable_scheduleCallback = function(H, te, ce) {
      var je = t.unstable_now();
      switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? je + ce : je) : ce = je, H) {
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
      return j = ce + j, H = {
        id: y++,
        callback: te,
        priorityLevel: H,
        startTime: ce,
        expirationTime: j,
        sortIndex: -1
      }, ce > je ? (H.sortIndex = ce, r(m, H), a(h) === null && H === a(m) && (S ? (w(k), k = -1) : S = !0, xe(T, ce - je))) : (H.sortIndex = j, r(h, H), d || v || (d = !0, M || (M = !0, $()))), H;
    }, t.unstable_shouldYield = B, t.unstable_wrapCallback = function(H) {
      var te = b;
      return function() {
        var ce = b;
        b = te;
        try {
          return H.apply(this, arguments);
        } finally {
          b = ce;
        }
      };
    };
  })(ld)), ld;
}
var Cv;
function Q2() {
  return Cv || (Cv = 1, od.exports = $2()), od.exports;
}
var ud = { exports: {} }, Ut = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wv;
function J2() {
  if (wv) return Ut;
  wv = 1;
  var t = ih();
  function r(h) {
    var m = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        m += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + h + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function u(h, m, y) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: _ == null ? null : "" + _,
      children: h,
      containerInfo: m,
      implementation: y
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(h, m) {
    if (h === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Ut.createPortal = function(h, m) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(r(299));
    return u(h, m, null, y);
  }, Ut.flushSync = function(h) {
    var m = f.T, y = s.p;
    try {
      if (f.T = null, s.p = 2, h) return h();
    } finally {
      f.T = m, s.p = y, s.d.f();
    }
  }, Ut.preconnect = function(h, m) {
    typeof h == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, s.d.C(h, m));
  }, Ut.prefetchDNS = function(h) {
    typeof h == "string" && s.d.D(h);
  }, Ut.preinit = function(h, m) {
    if (typeof h == "string" && m && typeof m.as == "string") {
      var y = m.as, _ = p(y, m.crossOrigin), b = typeof m.integrity == "string" ? m.integrity : void 0, v = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      y === "style" ? s.d.S(
        h,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: _,
          integrity: b,
          fetchPriority: v
        }
      ) : y === "script" && s.d.X(h, {
        crossOrigin: _,
        integrity: b,
        fetchPriority: v,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, Ut.preinitModule = function(h, m) {
    if (typeof h == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var y = p(
            m.as,
            m.crossOrigin
          );
          s.d.M(h, {
            crossOrigin: y,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && s.d.M(h);
  }, Ut.preload = function(h, m) {
    if (typeof h == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var y = m.as, _ = p(y, m.crossOrigin);
      s.d.L(h, y, {
        crossOrigin: _,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, Ut.preloadModule = function(h, m) {
    if (typeof h == "string")
      if (m) {
        var y = p(m.as, m.crossOrigin);
        s.d.m(h, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: y,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else s.d.m(h);
  }, Ut.requestFormReset = function(h) {
    s.d.r(h);
  }, Ut.unstable_batchedUpdates = function(h, m) {
    return h(m);
  }, Ut.useFormState = function(h, m, y) {
    return f.H.useFormState(h, m, y);
  }, Ut.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Ut.version = "19.1.1", Ut;
}
var Av;
function T0() {
  if (Av) return ud.exports;
  Av = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), ud.exports = J2(), ud.exports;
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
var Tv;
function K2() {
  if (Tv) return Us;
  Tv = 1;
  var t = Q2(), r = ih(), a = T0();
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
      var g = c.alternate;
      if (g === null) {
        if (o = c.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (c.child === g.child) {
        for (g = c.child; g; ) {
          if (g === i) return p(c), e;
          if (g === o) return p(c), n;
          g = g.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== o.return) i = c, o = g;
      else {
        for (var C = !1, N = c.child; N; ) {
          if (N === i) {
            C = !0, i = c, o = g;
            break;
          }
          if (N === o) {
            C = !0, o = c, i = g;
            break;
          }
          N = N.sibling;
        }
        if (!C) {
          for (N = g.child; N; ) {
            if (N === i) {
              C = !0, i = g, o = c;
              break;
            }
            if (N === o) {
              C = !0, o = g, i = c;
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
  function m(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = m(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, _ = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), D = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), B = Symbol.for("react.memo_cache_sentinel"), G = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = G && e[G] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ue = Symbol.for("react.client.reference");
  function he(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ue ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case d:
        return "Fragment";
      case E:
        return "Profiler";
      case S:
        return "StrictMode";
      case T:
        return "Suspense";
      case M:
        return "SuspenseList";
      case Y:
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
          return n = e.displayName || null, n !== null ? n : he(e.type) || "Memo";
        case U:
          n = e._payload, e = e._init;
          try {
            return he(e(n));
          } catch {
          }
      }
    return null;
  }
  var xe = Array.isArray, H = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = {
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
  var oe = J(null), Pe = J(null), V = J(null), me = J(null);
  function ge(e, n) {
    switch (se(V, n), se(Pe, e), se(oe, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? qg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = qg(n), e = Fg(n, e);
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
  function Ye() {
    ae(oe), ae(Pe), ae(V);
  }
  function it(e) {
    e.memoizedState !== null && se(me, e);
    var n = oe.current, i = Fg(n, e.type);
    n !== i && (se(Pe, e), se(oe, i));
  }
  function Re(e) {
    Pe.current === e && (ae(oe), ae(Pe)), me.current === e && (ae(me), ks._currentValue = ce);
  }
  var P = Object.prototype.hasOwnProperty, re = t.unstable_scheduleCallback, ne = t.unstable_cancelCallback, Ee = t.unstable_shouldYield, ze = t.unstable_requestPaint, Ce = t.unstable_now, we = t.unstable_getCurrentPriorityLevel, $e = t.unstable_ImmediatePriority, de = t.unstable_UserBlockingPriority, le = t.unstable_NormalPriority, Ge = t.unstable_LowPriority, Ae = t.unstable_IdlePriority, Fe = t.log, Ar = t.unstable_setDisableYieldValue, tr = null, mt = null;
  function Gn(e) {
    if (typeof Fe == "function" && Ar(e), mt && typeof mt.setStrictMode == "function")
      try {
        mt.setStrictMode(tr, e);
      } catch {
      }
  }
  var Ft = Math.clz32 ? Math.clz32 : oa, yn = Math.log, sa = Math.LN2;
  function oa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (yn(e) / sa | 0) | 0;
  }
  var nr = 256, Vn = 4194304;
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
  function Zt(e, n, i) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var c = 0, g = e.suspendedLanes, C = e.pingedLanes;
    e = e.warmLanes;
    var N = o & 134217727;
    return N !== 0 ? (o = N & ~g, o !== 0 ? c = bn(o) : (C &= N, C !== 0 ? c = bn(C) : i || (i = N & ~e, i !== 0 && (c = bn(i))))) : (N = o & ~g, N !== 0 ? c = bn(N) : C !== 0 ? c = bn(C) : i || (i = o & ~e, i !== 0 && (c = bn(i)))), c === 0 ? 0 : n !== 0 && n !== c && (n & g) === 0 && (g = c & -c, i = n & -n, g >= i || g === 32 && (i & 4194048) !== 0) ? n : c;
  }
  function Xt(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function _o(e, n) {
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
  function Ah() {
    var e = Vn;
    return Vn <<= 1, (Vn & 62914560) === 0 && (Vn = 4194304), e;
  }
  function Gu(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function qi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function hb(e, n, i, o, c, g) {
    var C = e.pendingLanes;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
    var N = e.entanglements, R = e.expirationTimes, q = e.hiddenUpdates;
    for (i = C & ~i; 0 < i; ) {
      var X = 31 - Ft(i), K = 1 << X;
      N[X] = 0, R[X] = -1;
      var F = q[X];
      if (F !== null)
        for (q[X] = null, X = 0; X < F.length; X++) {
          var Z = F[X];
          Z !== null && (Z.lane &= -536870913);
        }
      i &= ~K;
    }
    o !== 0 && Th(e, o, 0), g !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= g & ~(C & ~n));
  }
  function Th(e, n, i) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - Ft(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | i & 4194090;
  }
  function Oh(e, n) {
    var i = e.entangledLanes |= n;
    for (e = e.entanglements; i; ) {
      var o = 31 - Ft(i), c = 1 << o;
      c & n | e[o] & n && (e[o] |= n), i &= ~c;
    }
  }
  function Vu(e) {
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
  function Yu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Nh() {
    var e = te.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : lv(e.type));
  }
  function pb(e, n) {
    var i = te.p;
    try {
      return te.p = e, n();
    } finally {
      te.p = i;
    }
  }
  var Tr = Math.random().toString(36).slice(2), It = "__reactFiber$" + Tr, $t = "__reactProps$" + Tr, Ha = "__reactContainer$" + Tr, Xu = "__reactEvents$" + Tr, mb = "__reactListeners$" + Tr, gb = "__reactHandles$" + Tr, Dh = "__reactResources$" + Tr, Fi = "__reactMarker$" + Tr;
  function $u(e) {
    delete e[It], delete e[$t], delete e[Xu], delete e[mb], delete e[gb];
  }
  function qa(e) {
    var n = e[It];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if (n = i[Ha] || i[It]) {
        if (i = n.alternate, n.child !== null || i !== null && i.child !== null)
          for (e = Yg(e); e !== null; ) {
            if (i = e[It]) return i;
            e = Yg(e);
          }
        return n;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Fa(e) {
    if (e = e[It] || e[Ha]) {
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
    var n = e[Dh];
    return n || (n = e[Dh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Dt(e) {
    e[Fi] = !0;
  }
  var Mh = /* @__PURE__ */ new Set(), kh = {};
  function la(e, n) {
    Ga(e, n), Ga(e + "Capture", n);
  }
  function Ga(e, n) {
    for (kh[e] = n, e = 0; e < n.length; e++)
      Mh.add(n[e]);
  }
  var vb = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Rh = {}, jh = {};
  function yb(e) {
    return P.call(jh, e) ? !0 : P.call(Rh, e) ? !1 : vb.test(e) ? jh[e] = !0 : (Rh[e] = !0, !1);
  }
  function So(e, n, i) {
    if (yb(n))
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
  function xo(e, n, i) {
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
  var Qu, zh;
  function Va(e) {
    if (Qu === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        Qu = n && n[1] || "", zh = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qu + e + zh;
  }
  var Ju = !1;
  function Ku(e, n) {
    if (!e || Ju) return "";
    Ju = !0;
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
      var g = o.DetermineComponentFrameRoot(), C = g[0], N = g[1];
      if (C && N) {
        var R = C.split(`
`), q = N.split(`
`);
        for (c = o = 0; o < R.length && !R[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; c < q.length && !q[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (o === R.length || c === q.length)
          for (o = R.length - 1, c = q.length - 1; 1 <= o && 0 <= c && R[o] !== q[c]; )
            c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (R[o] !== q[c]) {
            if (o !== 1 || c !== 1)
              do
                if (o--, c--, 0 > c || R[o] !== q[c]) {
                  var X = `
` + R[o].replace(" at new ", " at ");
                  return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), X;
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      Ju = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? Va(i) : "";
  }
  function bb(e) {
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
        return Ku(e.type, !1);
      case 11:
        return Ku(e.type.render, !1);
      case 1:
        return Ku(e.type, !0);
      case 31:
        return Va("Activity");
      default:
        return "";
    }
  }
  function Lh(e) {
    try {
      var n = "";
      do
        n += bb(e), e = e.return;
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
  function Ph(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function _b(e) {
    var n = Ph(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), o = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var c = i.get, g = i.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(C) {
          o = "" + C, g.call(this, C);
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
  function Eo(e) {
    e._valueTracker || (e._valueTracker = _b(e));
  }
  function Ih(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(), o = "";
    return e && (o = Ph(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (n.setValue(e), !0) : !1;
  }
  function Co(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Sb = /[\n"\\]/g;
  function Sn(e) {
    return e.replace(
      Sb,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Wu(e, n, i, o, c, g, C, N) {
    e.name = "", C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" ? e.type = C : e.removeAttribute("type"), n != null ? C === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + _n(n)) : e.value !== "" + _n(n) && (e.value = "" + _n(n)) : C !== "submit" && C !== "reset" || e.removeAttribute("value"), n != null ? ec(e, C, _n(n)) : i != null ? ec(e, C, _n(i)) : o != null && e.removeAttribute("value"), c == null && g != null && (e.defaultChecked = !!g), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" ? e.name = "" + _n(N) : e.removeAttribute("name");
  }
  function Bh(e, n, i, o, c, g, C, N) {
    if (g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.type = g), n != null || i != null) {
      if (!(g !== "submit" && g !== "reset" || n != null))
        return;
      i = i != null ? "" + _n(i) : "", n = n != null ? "" + _n(n) : i, N || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? c, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = N ? e.checked : !!o, e.defaultChecked = !!o, C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" && (e.name = C);
  }
  function ec(e, n, i) {
    n === "number" && Co(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i);
  }
  function Ya(e, n, i, o) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < i.length; c++)
        n["$" + i[c]] = !0;
      for (i = 0; i < e.length; i++)
        c = n.hasOwnProperty("$" + e[i].value), e[i].selected !== c && (e[i].selected = c), c && o && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + _n(i), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === i) {
          e[c].selected = !0, o && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Uh(e, n, i) {
    if (n != null && (n = "" + _n(n), n !== e.value && (e.value = n), i == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = i != null ? "" + _n(i) : "";
  }
  function Hh(e, n, i, o) {
    if (n == null) {
      if (o != null) {
        if (i != null) throw Error(s(92));
        if (xe(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        i = o;
      }
      i == null && (i = ""), n = i;
    }
    i = _n(n), e.defaultValue = i, o = e.textContent, o === i && o !== "" && o !== null && (e.value = o);
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
  var xb = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qh(e, n, i) {
    var o = n.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, i) : typeof i != "number" || i === 0 || xb.has(n) ? n === "float" ? e.cssFloat = i : e[n] = ("" + i).trim() : e[n] = i + "px";
  }
  function Fh(e, n, i) {
    if (n != null && typeof n != "object")
      throw Error(s(62));
    if (e = e.style, i != null) {
      for (var o in i)
        !i.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var c in n)
        o = n[c], n.hasOwnProperty(c) && i[c] !== o && qh(e, c, o);
    } else
      for (var g in n)
        n.hasOwnProperty(g) && qh(e, g, n[g]);
  }
  function tc(e) {
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
  var Eb = /* @__PURE__ */ new Map([
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
  ]), Cb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wo(e) {
    return Cb.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var nc = null;
  function rc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var $a = null, Qa = null;
  function Zh(e) {
    var n = Fa(e);
    if (n && (e = n.stateNode)) {
      var i = e[$t] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Wu(
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
              var o = i[n];
              if (o !== e && o.form === e.form) {
                var c = o[$t] || null;
                if (!c) throw Error(s(90));
                Wu(
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
              o = i[n], o.form === e.form && Ih(o);
          }
          break e;
        case "textarea":
          Uh(e, i.value, i.defaultValue);
          break e;
        case "select":
          n = i.value, n != null && Ya(e, !!i.multiple, n, !1);
      }
    }
  }
  var ac = !1;
  function Gh(e, n, i) {
    if (ac) return e(n, i);
    ac = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (ac = !1, ($a !== null || Qa !== null) && (cl(), $a && (n = $a, e = Qa, Qa = $a = null, Zh(n), e)))
        for (n = 0; n < e.length; n++) Zh(e[n]);
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
  var ar = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ic = !1;
  if (ar)
    try {
      var Vi = {};
      Object.defineProperty(Vi, "passive", {
        get: function() {
          ic = !0;
        }
      }), window.addEventListener("test", Vi, Vi), window.removeEventListener("test", Vi, Vi);
    } catch {
      ic = !1;
    }
  var Or = null, sc = null, Ao = null;
  function Vh() {
    if (Ao) return Ao;
    var e, n = sc, i = n.length, o, c = "value" in Or ? Or.value : Or.textContent, g = c.length;
    for (e = 0; e < i && n[e] === c[e]; e++) ;
    var C = i - e;
    for (o = 1; o <= C && n[i - o] === c[g - o]; o++) ;
    return Ao = c.slice(e, 1 < o ? 1 - o : void 0);
  }
  function To(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Oo() {
    return !0;
  }
  function Yh() {
    return !1;
  }
  function Qt(e) {
    function n(i, o, c, g, C) {
      this._reactName = i, this._targetInst = c, this.type = o, this.nativeEvent = g, this.target = C, this.currentTarget = null;
      for (var N in e)
        e.hasOwnProperty(N) && (i = e[N], this[N] = i ? i(g) : g[N]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? Oo : Yh, this.isPropagationStopped = Yh, this;
    }
    return y(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Oo);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Oo);
      },
      persist: function() {
      },
      isPersistent: Oo
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
  }, No = Qt(ua), Yi = y({}, ua, { view: 0, detail: 0 }), wb = Qt(Yi), oc, lc, Xi, Do = y({}, Yi, {
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
    getModifierState: cc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Xi && (Xi && e.type === "mousemove" ? (oc = e.screenX - Xi.screenX, lc = e.screenY - Xi.screenY) : lc = oc = 0, Xi = e), oc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : lc;
    }
  }), Xh = Qt(Do), Ab = y({}, Do, { dataTransfer: 0 }), Tb = Qt(Ab), Ob = y({}, Yi, { relatedTarget: 0 }), uc = Qt(Ob), Nb = y({}, ua, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Db = Qt(Nb), Mb = y({}, ua, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), kb = Qt(Mb), Rb = y({}, ua, { data: 0 }), $h = Qt(Rb), jb = {
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
  }, zb = {
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
  }, Lb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Pb(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = Lb[e]) ? !!n[e] : !1;
  }
  function cc() {
    return Pb;
  }
  var Ib = y({}, Yi, {
    key: function(e) {
      if (e.key) {
        var n = jb[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = To(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zb[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cc,
    charCode: function(e) {
      return e.type === "keypress" ? To(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? To(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Bb = Qt(Ib), Ub = y({}, Do, {
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
  }), Qh = Qt(Ub), Hb = y({}, Yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cc
  }), qb = Qt(Hb), Fb = y({}, ua, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zb = Qt(Fb), Gb = y({}, Do, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Vb = Qt(Gb), Yb = y({}, ua, {
    newState: 0,
    oldState: 0
  }), Xb = Qt(Yb), $b = [9, 13, 27, 32], fc = ar && "CompositionEvent" in window, $i = null;
  ar && "documentMode" in document && ($i = document.documentMode);
  var Qb = ar && "TextEvent" in window && !$i, Jh = ar && (!fc || $i && 8 < $i && 11 >= $i), Kh = " ", Wh = !1;
  function ep(e, n) {
    switch (e) {
      case "keyup":
        return $b.indexOf(n.keyCode) !== -1;
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
  function tp(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ja = !1;
  function Jb(e, n) {
    switch (e) {
      case "compositionend":
        return tp(n);
      case "keypress":
        return n.which !== 32 ? null : (Wh = !0, Kh);
      case "textInput":
        return e = n.data, e === Kh && Wh ? null : e;
      default:
        return null;
    }
  }
  function Kb(e, n) {
    if (Ja)
      return e === "compositionend" || !fc && ep(e, n) ? (e = Vh(), Ao = sc = Or = null, Ja = !1, e) : null;
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
        return Jh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Wb = {
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
  function np(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Wb[e.type] : n === "textarea";
  }
  function rp(e, n, i, o) {
    $a ? Qa ? Qa.push(o) : Qa = [o] : $a = o, n = gl(n, "onChange"), 0 < n.length && (i = new No(
      "onChange",
      "change",
      null,
      i,
      o
    ), e.push({ event: i, listeners: n }));
  }
  var Qi = null, Ji = null;
  function e_(e) {
    Pg(e, 0);
  }
  function Mo(e) {
    var n = Zi(e);
    if (Ih(n)) return e;
  }
  function ap(e, n) {
    if (e === "change") return n;
  }
  var ip = !1;
  if (ar) {
    var dc;
    if (ar) {
      var hc = "oninput" in document;
      if (!hc) {
        var sp = document.createElement("div");
        sp.setAttribute("oninput", "return;"), hc = typeof sp.oninput == "function";
      }
      dc = hc;
    } else dc = !1;
    ip = dc && (!document.documentMode || 9 < document.documentMode);
  }
  function op() {
    Qi && (Qi.detachEvent("onpropertychange", lp), Ji = Qi = null);
  }
  function lp(e) {
    if (e.propertyName === "value" && Mo(Ji)) {
      var n = [];
      rp(
        n,
        Ji,
        e,
        rc(e)
      ), Gh(e_, n);
    }
  }
  function t_(e, n, i) {
    e === "focusin" ? (op(), Qi = n, Ji = i, Qi.attachEvent("onpropertychange", lp)) : e === "focusout" && op();
  }
  function n_(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Mo(Ji);
  }
  function r_(e, n) {
    if (e === "click") return Mo(n);
  }
  function a_(e, n) {
    if (e === "input" || e === "change")
      return Mo(n);
  }
  function i_(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var sn = typeof Object.is == "function" ? Object.is : i_;
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
  function up(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function cp(e, n) {
    var i = up(e);
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
      i = up(i);
    }
  }
  function fp(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? fp(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function dp(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = Co(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = Co(e.document);
    }
    return n;
  }
  function pc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var s_ = ar && "documentMode" in document && 11 >= document.documentMode, Ka = null, mc = null, Wi = null, gc = !1;
  function hp(e, n, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    gc || Ka == null || Ka !== Co(o) || (o = Ka, "selectionStart" in o && pc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Wi && Ki(Wi, o) || (Wi = o, o = gl(mc, "onSelect"), 0 < o.length && (n = new No(
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
  }, vc = {}, pp = {};
  ar && (pp = document.createElement("div").style, "AnimationEvent" in window || (delete Wa.animationend.animation, delete Wa.animationiteration.animation, delete Wa.animationstart.animation), "TransitionEvent" in window || delete Wa.transitionend.transition);
  function fa(e) {
    if (vc[e]) return vc[e];
    if (!Wa[e]) return e;
    var n = Wa[e], i;
    for (i in n)
      if (n.hasOwnProperty(i) && i in pp)
        return vc[e] = n[i];
    return e;
  }
  var mp = fa("animationend"), gp = fa("animationiteration"), vp = fa("animationstart"), o_ = fa("transitionrun"), l_ = fa("transitionstart"), u_ = fa("transitioncancel"), yp = fa("transitionend"), bp = /* @__PURE__ */ new Map(), yc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  yc.push("scrollEnd");
  function zn(e, n) {
    bp.set(e, n), la(n, [e]);
  }
  var _p = /* @__PURE__ */ new WeakMap();
  function xn(e, n) {
    if (typeof e == "object" && e !== null) {
      var i = _p.get(e);
      return i !== void 0 ? i : (n = {
        value: e,
        source: n,
        stack: Lh(n)
      }, _p.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Lh(n)
    };
  }
  var En = [], ei = 0, bc = 0;
  function ko() {
    for (var e = ei, n = bc = ei = 0; n < e; ) {
      var i = En[n];
      En[n++] = null;
      var o = En[n];
      En[n++] = null;
      var c = En[n];
      En[n++] = null;
      var g = En[n];
      if (En[n++] = null, o !== null && c !== null) {
        var C = o.pending;
        C === null ? c.next = c : (c.next = C.next, C.next = c), o.pending = c;
      }
      g !== 0 && Sp(i, c, g);
    }
  }
  function Ro(e, n, i, o) {
    En[ei++] = e, En[ei++] = n, En[ei++] = i, En[ei++] = o, bc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function _c(e, n, i, o) {
    return Ro(e, n, i, o), jo(e);
  }
  function ti(e, n) {
    return Ro(e, null, null, n), jo(e);
  }
  function Sp(e, n, i) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i);
    for (var c = !1, g = e.return; g !== null; )
      g.childLanes |= i, o = g.alternate, o !== null && (o.childLanes |= i), g.tag === 22 && (e = g.stateNode, e === null || e._visibility & 1 || (c = !0)), e = g, g = g.return;
    return e.tag === 3 ? (g = e.stateNode, c && n !== null && (c = 31 - Ft(i), e = g.hiddenUpdates, o = e[c], o === null ? e[c] = [n] : o.push(n), n.lane = i | 536870912), g) : null;
  }
  function jo(e) {
    if (50 < Cs)
      throw Cs = 0, Tf = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ni = {};
  function c_(e, n, i, o) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function on(e, n, i, o) {
    return new c_(e, n, i, o);
  }
  function Sc(e) {
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
  function xp(e, n) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, n = i.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function zo(e, n, i, o, c, g) {
    var C = 0;
    if (o = e, typeof e == "function") Sc(e) && (C = 1);
    else if (typeof e == "string")
      C = d2(
        e,
        i,
        oe.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Y:
          return e = on(31, i, n, c), e.elementType = Y, e.lanes = g, e;
        case d:
          return da(i.children, c, g, n);
        case S:
          C = 8, c |= 24;
          break;
        case E:
          return e = on(12, i, n, c | 2), e.elementType = E, e.lanes = g, e;
        case T:
          return e = on(13, i, n, c), e.elementType = T, e.lanes = g, e;
        case M:
          return e = on(19, i, n, c), e.elementType = M, e.lanes = g, e;
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
              case U:
                C = 16, o = null;
                break e;
            }
          C = 29, i = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = on(C, i, n, c), n.elementType = e, n.type = o, n.lanes = g, n;
  }
  function da(e, n, i, o) {
    return e = on(7, e, o, n), e.lanes = i, e;
  }
  function xc(e, n, i) {
    return e = on(6, e, null, n), e.lanes = i, e;
  }
  function Ec(e, n, i) {
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
  var ri = [], ai = 0, Lo = null, Po = 0, Cn = [], wn = 0, ha = null, sr = 1, or = "";
  function pa(e, n) {
    ri[ai++] = Po, ri[ai++] = Lo, Lo = e, Po = n;
  }
  function Ep(e, n, i) {
    Cn[wn++] = sr, Cn[wn++] = or, Cn[wn++] = ha, ha = e;
    var o = sr;
    e = or;
    var c = 32 - Ft(o) - 1;
    o &= ~(1 << c), i += 1;
    var g = 32 - Ft(n) + c;
    if (30 < g) {
      var C = c - c % 5;
      g = (o & (1 << C) - 1).toString(32), o >>= C, c -= C, sr = 1 << 32 - Ft(n) + c | i << c | o, or = g + e;
    } else
      sr = 1 << g | i << c | o, or = e;
  }
  function Cc(e) {
    e.return !== null && (pa(e, 1), Ep(e, 1, 0));
  }
  function wc(e) {
    for (; e === Lo; )
      Lo = ri[--ai], ri[ai] = null, Po = ri[--ai], ri[ai] = null;
    for (; e === ha; )
      ha = Cn[--wn], Cn[wn] = null, or = Cn[--wn], Cn[wn] = null, sr = Cn[--wn], Cn[wn] = null;
  }
  var Gt = null, dt = null, Xe = !1, ma = null, Yn = !1, Ac = Error(s(519));
  function ga(e) {
    var n = Error(s(418, ""));
    throw ns(xn(n, e)), Ac;
  }
  function Cp(e) {
    var n = e.stateNode, i = e.type, o = e.memoizedProps;
    switch (n[It] = e, n[$t] = o, i) {
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
        Ue("invalid", n), Bh(
          n,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), Eo(n);
        break;
      case "select":
        Ue("invalid", n);
        break;
      case "textarea":
        Ue("invalid", n), Hh(n, o.value, o.defaultValue, o.children), Eo(n);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || n.textContent === "" + i || o.suppressHydrationWarning === !0 || Hg(n.textContent, i) ? (o.popover != null && (Ue("beforetoggle", n), Ue("toggle", n)), o.onScroll != null && Ue("scroll", n), o.onScrollEnd != null && Ue("scrollend", n), o.onClick != null && (n.onclick = vl), n = !0) : n = !1, n || ga(e);
  }
  function wp(e) {
    for (Gt = e.return; Gt; )
      switch (Gt.tag) {
        case 5:
        case 13:
          Yn = !1;
          return;
        case 27:
        case 3:
          Yn = !0;
          return;
        default:
          Gt = Gt.return;
      }
  }
  function es(e) {
    if (e !== Gt) return !1;
    if (!Xe) return wp(e), Xe = !0, !1;
    var n = e.tag, i;
    if ((i = n !== 3 && n !== 27) && ((i = n === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || Ff(e.type, e.memoizedProps)), i = !i), i && dt && ga(e), wp(e), n === 13) {
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
      n === 27 ? (n = dt, Zr(e.type) ? (e = Yf, Yf = null, dt = e) : dt = n) : dt = Gt ? Pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ts() {
    dt = Gt = null, Xe = !1;
  }
  function Ap() {
    var e = ma;
    return e !== null && (Wt === null ? Wt = e : Wt.push.apply(
      Wt,
      e
    ), ma = null), e;
  }
  function ns(e) {
    ma === null ? ma = [e] : ma.push(e);
  }
  var Tc = J(null), va = null, lr = null;
  function Nr(e, n, i) {
    se(Tc, n._currentValue), n._currentValue = i;
  }
  function ur(e) {
    e._currentValue = Tc.current, ae(Tc);
  }
  function Oc(e, n, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === i) break;
      e = e.return;
    }
  }
  function Nc(e, n, i, o) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var g = c.dependencies;
      if (g !== null) {
        var C = c.child;
        g = g.firstContext;
        e: for (; g !== null; ) {
          var N = g;
          g = c;
          for (var R = 0; R < n.length; R++)
            if (N.context === n[R]) {
              g.lanes |= i, N = g.alternate, N !== null && (N.lanes |= i), Oc(
                g.return,
                i,
                e
              ), o || (C = null);
              break e;
            }
          g = N.next;
        }
      } else if (c.tag === 18) {
        if (C = c.return, C === null) throw Error(s(341));
        C.lanes |= i, g = C.alternate, g !== null && (g.lanes |= i), Oc(C, i, e), C = null;
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
    for (var c = n, g = !1; c !== null; ) {
      if (!g) {
        if ((c.flags & 524288) !== 0) g = !0;
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
    e !== null && Nc(
      n,
      e,
      i,
      o
    ), n.flags |= 262144;
  }
  function Io(e) {
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
  function Bt(e) {
    return Tp(va, e);
  }
  function Bo(e, n) {
    return va === null && ya(e), Tp(e, n);
  }
  function Tp(e, n) {
    var i = n._currentValue;
    if (n = { context: n, memoizedValue: i, next: null }, lr === null) {
      if (e === null) throw Error(s(308));
      lr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else lr = lr.next = n;
    return i;
  }
  var f_ = typeof AbortController < "u" ? AbortController : function() {
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
  }, d_ = t.unstable_scheduleCallback, h_ = t.unstable_NormalPriority, wt = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Dc() {
    return {
      controller: new f_(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function as(e) {
    e.refCount--, e.refCount === 0 && d_(h_, function() {
      e.controller.abort();
    });
  }
  var is = null, Mc = 0, ii = 0, si = null;
  function p_(e, n) {
    if (is === null) {
      var i = is = [];
      Mc = 0, ii = jf(), si = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return Mc++, n.then(Op, Op), n;
  }
  function Op() {
    if (--Mc === 0 && is !== null) {
      si !== null && (si.status = "fulfilled");
      var e = is;
      is = null, ii = 0, si = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function m_(e, n) {
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
  var Np = H.S;
  H.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && p_(e, n), Np !== null && Np(e, n);
  };
  var ba = J(null);
  function kc() {
    var e = ba.current;
    return e !== null ? e : rt.pooledCache;
  }
  function Uo(e, n) {
    n === null ? se(ba, ba.current) : se(ba, n.pool);
  }
  function Dp() {
    var e = kc();
    return e === null ? null : { parent: wt._currentValue, pool: e };
  }
  var ss = Error(s(460)), Mp = Error(s(474)), Ho = Error(s(542)), Rc = { then: function() {
  } };
  function kp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function qo() {
  }
  function Rp(e, n, i) {
    switch (i = e[i], i === void 0 ? e.push(n) : i !== n && (n.then(qo, qo), n = i), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, zp(e), e;
      default:
        if (typeof n.status == "string") n.then(qo, qo);
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
            throw e = n.reason, zp(e), e;
        }
        throw os = n, ss;
    }
  }
  var os = null;
  function jp() {
    if (os === null) throw Error(s(459));
    var e = os;
    return os = null, e;
  }
  function zp(e) {
    if (e === ss || e === Ho)
      throw Error(s(483));
  }
  var Dr = !1;
  function jc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function zc(e, n) {
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
      return c === null ? n.next = n : (n.next = c.next, c.next = n), o.pending = n, n = jo(e), Sp(e, null, i), n;
    }
    return Ro(e, o, n, i), jo(e);
  }
  function ls(e, n, i) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, Oh(e, i);
    }
  }
  function Lc(e, n) {
    var i = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var c = null, g = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var C = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          g === null ? c = g = C : g = g.next = C, i = i.next;
        } while (i !== null);
        g === null ? c = g = n : g = g.next = n;
      } else c = g = n;
      i = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: g,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = n : e.next = n, i.lastBaseUpdate = n;
  }
  var Pc = !1;
  function us() {
    if (Pc) {
      var e = si;
      if (e !== null) throw e;
    }
  }
  function cs(e, n, i, o) {
    Pc = !1;
    var c = e.updateQueue;
    Dr = !1;
    var g = c.firstBaseUpdate, C = c.lastBaseUpdate, N = c.shared.pending;
    if (N !== null) {
      c.shared.pending = null;
      var R = N, q = R.next;
      R.next = null, C === null ? g = q : C.next = q, C = R;
      var X = e.alternate;
      X !== null && (X = X.updateQueue, N = X.lastBaseUpdate, N !== C && (N === null ? X.firstBaseUpdate = q : N.next = q, X.lastBaseUpdate = R));
    }
    if (g !== null) {
      var K = c.baseState;
      C = 0, X = q = R = null, N = g;
      do {
        var F = N.lane & -536870913, Z = F !== N.lane;
        if (Z ? (Ze & F) === F : (o & F) === F) {
          F !== 0 && F === ii && (Pc = !0), X !== null && (X = X.next = {
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: null,
            next: null
          });
          e: {
            var Te = e, be = N;
            F = n;
            var et = i;
            switch (be.tag) {
              case 1:
                if (Te = be.payload, typeof Te == "function") {
                  K = Te.call(et, K, F);
                  break e;
                }
                K = Te;
                break e;
              case 3:
                Te.flags = Te.flags & -65537 | 128;
              case 0:
                if (Te = be.payload, F = typeof Te == "function" ? Te.call(et, K, F) : Te, F == null) break e;
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
          }, X === null ? (q = X = Z, R = K) : X = X.next = Z, C |= F;
        if (N = N.next, N === null) {
          if (N = c.shared.pending, N === null)
            break;
          Z = N, N = Z.next, Z.next = null, c.lastBaseUpdate = Z, c.shared.pending = null;
        }
      } while (!0);
      X === null && (R = K), c.baseState = R, c.firstBaseUpdate = q, c.lastBaseUpdate = X, g === null && (c.shared.lanes = 0), Ur |= C, e.lanes = C, e.memoizedState = K;
    }
  }
  function Lp(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function Pp(e, n) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        Lp(i[e], n);
  }
  var oi = J(null), Fo = J(0);
  function Ip(e, n) {
    e = gr, se(Fo, e), se(oi, n), gr = e | n.baseLanes;
  }
  function Ic() {
    se(Fo, gr), se(oi, oi.current);
  }
  function Bc() {
    gr = Fo.current, ae(oi), ae(Fo);
  }
  var Rr = 0, Le = null, Ke = null, bt = null, Zo = !1, li = !1, _a = !1, Go = 0, fs = 0, ui = null, g_ = 0;
  function gt() {
    throw Error(s(321));
  }
  function Uc(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!sn(e[i], n[i])) return !1;
    return !0;
  }
  function Hc(e, n, i, o, c, g) {
    return Rr = g, Le = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, H.H = e === null || e.memoizedState === null ? Sm : xm, _a = !1, g = i(o, c), _a = !1, li && (g = Up(
      n,
      i,
      o,
      c
    )), Bp(e), g;
  }
  function Bp(e) {
    H.H = Jo;
    var n = Ke !== null && Ke.next !== null;
    if (Rr = 0, bt = Ke = Le = null, Zo = !1, fs = 0, ui = null, n) throw Error(s(300));
    e === null || Mt || (e = e.dependencies, e !== null && Io(e) && (Mt = !0));
  }
  function Up(e, n, i, o) {
    Le = e;
    var c = 0;
    do {
      if (li && (ui = null), fs = 0, li = !1, 25 <= c) throw Error(s(301));
      if (c += 1, bt = Ke = null, e.updateQueue != null) {
        var g = e.updateQueue;
        g.lastEffect = null, g.events = null, g.stores = null, g.memoCache != null && (g.memoCache.index = 0);
      }
      H.H = E_, g = n(i, o);
    } while (li);
    return g;
  }
  function v_() {
    var e = H.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? ds(n) : n, e = e.useState()[0], (Ke !== null ? Ke.memoizedState : null) !== e && (Le.flags |= 1024), n;
  }
  function qc() {
    var e = Go !== 0;
    return Go = 0, e;
  }
  function Fc(e, n, i) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~i;
  }
  function Zc(e) {
    if (Zo) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Zo = !1;
    }
    Rr = 0, bt = Ke = Le = null, li = !1, fs = Go = 0, ui = null;
  }
  function Jt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return bt === null ? Le.memoizedState = bt = e : bt = bt.next = e, bt;
  }
  function _t() {
    if (Ke === null) {
      var e = Le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var n = bt === null ? Le.memoizedState : bt.next;
    if (n !== null)
      bt = n, Ke = e;
    else {
      if (e === null)
        throw Le.alternate === null ? Error(s(467)) : Error(s(310));
      Ke = e, e = {
        memoizedState: Ke.memoizedState,
        baseState: Ke.baseState,
        baseQueue: Ke.baseQueue,
        queue: Ke.queue,
        next: null
      }, bt === null ? Le.memoizedState = bt = e : bt = bt.next = e;
    }
    return bt;
  }
  function Gc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ds(e) {
    var n = fs;
    return fs += 1, ui === null && (ui = []), e = Rp(ui, e, n), n = Le, (bt === null ? n.memoizedState : bt.next) === null && (n = n.alternate, H.H = n === null || n.memoizedState === null ? Sm : xm), e;
  }
  function Vo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ds(e);
      if (e.$$typeof === D) return Bt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Vc(e) {
    var n = null, i = Le.updateQueue;
    if (i !== null && (n = i.memoCache), n == null) {
      var o = Le.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), i === null && (i = Gc(), Le.updateQueue = i), i.memoCache = n, i = n.data[n.index], i === void 0)
      for (i = n.data[n.index] = Array(e), o = 0; o < e; o++)
        i[o] = B;
    return n.index++, i;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Yo(e) {
    var n = _t();
    return Yc(n, Ke, e);
  }
  function Yc(e, n, i) {
    var o = e.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = i;
    var c = e.baseQueue, g = o.pending;
    if (g !== null) {
      if (c !== null) {
        var C = c.next;
        c.next = g.next, g.next = C;
      }
      n.baseQueue = c = g, o.pending = null;
    }
    if (g = e.baseState, c === null) e.memoizedState = g;
    else {
      n = c.next;
      var N = C = null, R = null, q = n, X = !1;
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
            }), K === ii && (X = !0);
          else if ((Rr & F) === F) {
            q = q.next, F === ii && (X = !0);
            continue;
          } else
            K = {
              lane: 0,
              revertLane: q.revertLane,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, R === null ? (N = R = K, C = g) : R = R.next = K, Le.lanes |= F, Ur |= F;
          K = q.action, _a && i(g, K), g = q.hasEagerState ? q.eagerState : i(g, K);
        } else
          F = {
            lane: K,
            revertLane: q.revertLane,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, R === null ? (N = R = F, C = g) : R = R.next = F, Le.lanes |= K, Ur |= K;
        q = q.next;
      } while (q !== null && q !== n);
      if (R === null ? C = g : R.next = N, !sn(g, e.memoizedState) && (Mt = !0, X && (i = si, i !== null)))
        throw i;
      e.memoizedState = g, e.baseState = C, e.baseQueue = R, o.lastRenderedState = g;
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Xc(e) {
    var n = _t(), i = n.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch, c = i.pending, g = n.memoizedState;
    if (c !== null) {
      i.pending = null;
      var C = c = c.next;
      do
        g = e(g, C.action), C = C.next;
      while (C !== c);
      sn(g, n.memoizedState) || (Mt = !0), n.memoizedState = g, n.baseQueue === null && (n.baseState = g), i.lastRenderedState = g;
    }
    return [g, o];
  }
  function Hp(e, n, i) {
    var o = Le, c = _t(), g = Xe;
    if (g) {
      if (i === void 0) throw Error(s(407));
      i = i();
    } else i = n();
    var C = !sn(
      (Ke || c).memoizedState,
      i
    );
    C && (c.memoizedState = i, Mt = !0), c = c.queue;
    var N = Zp.bind(null, o, c, e);
    if (hs(2048, 8, N, [e]), c.getSnapshot !== n || C || bt !== null && bt.memoizedState.tag & 1) {
      if (o.flags |= 2048, ci(
        9,
        Xo(),
        Fp.bind(
          null,
          o,
          c,
          i,
          n
        ),
        null
      ), rt === null) throw Error(s(349));
      g || (Rr & 124) !== 0 || qp(o, n, i);
    }
    return i;
  }
  function qp(e, n, i) {
    e.flags |= 16384, e = { getSnapshot: n, value: i }, n = Le.updateQueue, n === null ? (n = Gc(), Le.updateQueue = n, n.stores = [e]) : (i = n.stores, i === null ? n.stores = [e] : i.push(e));
  }
  function Fp(e, n, i, o) {
    n.value = i, n.getSnapshot = o, Gp(n) && Vp(e);
  }
  function Zp(e, n, i) {
    return i(function() {
      Gp(n) && Vp(e);
    });
  }
  function Gp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !sn(e, i);
    } catch {
      return !0;
    }
  }
  function Vp(e) {
    var n = ti(e, 2);
    n !== null && dn(n, e, 2);
  }
  function $c(e) {
    var n = Jt();
    if (typeof e == "function") {
      var i = e;
      if (e = i(), _a) {
        Gn(!0);
        try {
          i();
        } finally {
          Gn(!1);
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
  function Yp(e, n, i, o) {
    return e.baseState = i, Yc(
      e,
      Ke,
      typeof o == "function" ? o : cr
    );
  }
  function y_(e, n, i, o, c) {
    if (Qo(e)) throw Error(s(485));
    if (e = n.action, e !== null) {
      var g = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(C) {
          g.listeners.push(C);
        }
      };
      H.T !== null ? i(!0) : g.isTransition = !1, o(g), i = n.pending, i === null ? (g.next = n.pending = g, Xp(n, g)) : (g.next = i.next, n.pending = i.next = g);
    }
  }
  function Xp(e, n) {
    var i = n.action, o = n.payload, c = e.state;
    if (n.isTransition) {
      var g = H.T, C = {};
      H.T = C;
      try {
        var N = i(c, o), R = H.S;
        R !== null && R(C, N), $p(e, n, N);
      } catch (q) {
        Qc(e, n, q);
      } finally {
        H.T = g;
      }
    } else
      try {
        g = i(c, o), $p(e, n, g);
      } catch (q) {
        Qc(e, n, q);
      }
  }
  function $p(e, n, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(o) {
        Qp(e, n, o);
      },
      function(o) {
        return Qc(e, n, o);
      }
    ) : Qp(e, n, i);
  }
  function Qp(e, n, i) {
    n.status = "fulfilled", n.value = i, Jp(n), e.state = i, n = e.pending, n !== null && (i = n.next, i === n ? e.pending = null : (i = i.next, n.next = i, Xp(e, i)));
  }
  function Qc(e, n, i) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = i, Jp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function Jp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Kp(e, n) {
    return n;
  }
  function Wp(e, n) {
    if (Xe) {
      var i = rt.formState;
      if (i !== null) {
        e: {
          var o = Le;
          if (Xe) {
            if (dt) {
              t: {
                for (var c = dt, g = Yn; c.nodeType !== 8; ) {
                  if (!g) {
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
                g = c.data, c = g === "F!" || g === "F" ? c : null;
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
      lastRenderedReducer: Kp,
      lastRenderedState: n
    }, i.queue = o, i = ym.bind(
      null,
      Le,
      o
    ), o.dispatch = i, o = $c(!1), g = tf.bind(
      null,
      Le,
      !1,
      o.queue
    ), o = Jt(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = c, i = y_.bind(
      null,
      Le,
      c,
      g,
      i
    ), c.dispatch = i, o.memoizedState = e, [n, i, !1];
  }
  function em(e) {
    var n = _t();
    return tm(n, Ke, e);
  }
  function tm(e, n, i) {
    if (n = Yc(
      e,
      n,
      Kp
    )[0], e = Yo(cr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = ds(n);
      } catch (C) {
        throw C === ss ? Ho : C;
      }
    else o = n;
    n = _t();
    var c = n.queue, g = c.dispatch;
    return i !== n.memoizedState && (Le.flags |= 2048, ci(
      9,
      Xo(),
      b_.bind(null, c, i),
      null
    )), [o, g, e];
  }
  function b_(e, n) {
    e.action = n;
  }
  function nm(e) {
    var n = _t(), i = Ke;
    if (i !== null)
      return tm(n, i, e);
    _t(), n = n.memoizedState, i = _t();
    var o = i.queue.dispatch;
    return i.memoizedState = e, [n, o, !1];
  }
  function ci(e, n, i, o) {
    return e = { tag: e, create: i, deps: o, inst: n, next: null }, n = Le.updateQueue, n === null && (n = Gc(), Le.updateQueue = n), i = n.lastEffect, i === null ? n.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, n.lastEffect = e), e;
  }
  function Xo() {
    return { destroy: void 0, resource: void 0 };
  }
  function rm() {
    return _t().memoizedState;
  }
  function $o(e, n, i, o) {
    var c = Jt();
    o = o === void 0 ? null : o, Le.flags |= e, c.memoizedState = ci(
      1 | n,
      Xo(),
      i,
      o
    );
  }
  function hs(e, n, i, o) {
    var c = _t();
    o = o === void 0 ? null : o;
    var g = c.memoizedState.inst;
    Ke !== null && o !== null && Uc(o, Ke.memoizedState.deps) ? c.memoizedState = ci(n, g, i, o) : (Le.flags |= e, c.memoizedState = ci(
      1 | n,
      g,
      i,
      o
    ));
  }
  function am(e, n) {
    $o(8390656, 8, e, n);
  }
  function im(e, n) {
    hs(2048, 8, e, n);
  }
  function sm(e, n) {
    return hs(4, 2, e, n);
  }
  function om(e, n) {
    return hs(4, 4, e, n);
  }
  function lm(e, n) {
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
  function um(e, n, i) {
    i = i != null ? i.concat([e]) : null, hs(4, 4, lm.bind(null, n, e), i);
  }
  function Jc() {
  }
  function cm(e, n) {
    var i = _t();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    return n !== null && Uc(n, o[1]) ? o[0] : (i.memoizedState = [e, n], e);
  }
  function fm(e, n) {
    var i = _t();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    if (n !== null && Uc(n, o[1]))
      return o[0];
    if (o = e(), _a) {
      Gn(!0);
      try {
        e();
      } finally {
        Gn(!1);
      }
    }
    return i.memoizedState = [o, n], o;
  }
  function Kc(e, n, i) {
    return i === void 0 || (Rr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = i, e = pg(), Le.lanes |= e, Ur |= e, i);
  }
  function dm(e, n, i, o) {
    return sn(i, n) ? i : oi.current !== null ? (e = Kc(e, i, o), sn(e, n) || (Mt = !0), e) : (Rr & 42) === 0 ? (Mt = !0, e.memoizedState = i) : (e = pg(), Le.lanes |= e, Ur |= e, n);
  }
  function hm(e, n, i, o, c) {
    var g = te.p;
    te.p = g !== 0 && 8 > g ? g : 8;
    var C = H.T, N = {};
    H.T = N, tf(e, !1, n, i);
    try {
      var R = c(), q = H.S;
      if (q !== null && q(N, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var X = m_(
          R,
          o
        );
        ps(
          e,
          n,
          X,
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
      te.p = g, H.T = C;
    }
  }
  function __() {
  }
  function Wc(e, n, i, o) {
    if (e.tag !== 5) throw Error(s(476));
    var c = pm(e).queue;
    hm(
      e,
      c,
      n,
      ce,
      i === null ? __ : function() {
        return mm(e), i(o);
      }
    );
  }
  function pm(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ce,
      baseState: ce,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: ce
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
  function mm(e) {
    var n = pm(e).next.queue;
    ps(e, n, {}, fn());
  }
  function ef() {
    return Bt(ks);
  }
  function gm() {
    return _t().memoizedState;
  }
  function vm() {
    return _t().memoizedState;
  }
  function S_(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = fn();
          e = Mr(i);
          var o = kr(n, e, i);
          o !== null && (dn(o, n, i), ls(o, n, i)), n = { cache: Dc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function x_(e, n, i) {
    var o = fn();
    i = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qo(e) ? bm(n, i) : (i = _c(e, n, i, o), i !== null && (dn(i, e, o), _m(i, n, o)));
  }
  function ym(e, n, i) {
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
    if (Qo(e)) bm(n, c);
    else {
      var g = e.alternate;
      if (e.lanes === 0 && (g === null || g.lanes === 0) && (g = n.lastRenderedReducer, g !== null))
        try {
          var C = n.lastRenderedState, N = g(C, i);
          if (c.hasEagerState = !0, c.eagerState = N, sn(N, C))
            return Ro(e, n, c, 0), rt === null && ko(), !1;
        } catch {
        } finally {
        }
      if (i = _c(e, n, c, o), i !== null)
        return dn(i, e, o), _m(i, n, o), !0;
    }
    return !1;
  }
  function tf(e, n, i, o) {
    if (o = {
      lane: 2,
      revertLane: jf(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qo(e)) {
      if (n) throw Error(s(479));
    } else
      n = _c(
        e,
        i,
        o,
        2
      ), n !== null && dn(n, e, 2);
  }
  function Qo(e) {
    var n = e.alternate;
    return e === Le || n !== null && n === Le;
  }
  function bm(e, n) {
    li = Zo = !0;
    var i = e.pending;
    i === null ? n.next = n : (n.next = i.next, i.next = n), e.pending = n;
  }
  function _m(e, n, i) {
    if ((i & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, Oh(e, i);
    }
  }
  var Jo = {
    readContext: Bt,
    use: Vo,
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
  }, Sm = {
    readContext: Bt,
    use: Vo,
    useCallback: function(e, n) {
      return Jt().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Bt,
    useEffect: am,
    useImperativeHandle: function(e, n, i) {
      i = i != null ? i.concat([e]) : null, $o(
        4194308,
        4,
        lm.bind(null, n, e),
        i
      );
    },
    useLayoutEffect: function(e, n) {
      return $o(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      $o(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var i = Jt();
      n = n === void 0 ? null : n;
      var o = e();
      if (_a) {
        Gn(!0);
        try {
          e();
        } finally {
          Gn(!1);
        }
      }
      return i.memoizedState = [o, n], o;
    },
    useReducer: function(e, n, i) {
      var o = Jt();
      if (i !== void 0) {
        var c = i(n);
        if (_a) {
          Gn(!0);
          try {
            i(n);
          } finally {
            Gn(!1);
          }
        }
      } else c = n;
      return o.memoizedState = o.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, o.queue = e, e = e.dispatch = x_.bind(
        null,
        Le,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = Jt();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = $c(e);
      var n = e.queue, i = ym.bind(null, Le, n);
      return n.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: Jc,
    useDeferredValue: function(e, n) {
      var i = Jt();
      return Kc(i, e, n);
    },
    useTransition: function() {
      var e = $c(!1);
      return e = hm.bind(
        null,
        Le,
        e.queue,
        !0,
        !1
      ), Jt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, i) {
      var o = Le, c = Jt();
      if (Xe) {
        if (i === void 0)
          throw Error(s(407));
        i = i();
      } else {
        if (i = n(), rt === null)
          throw Error(s(349));
        (Ze & 124) !== 0 || qp(o, n, i);
      }
      c.memoizedState = i;
      var g = { value: i, getSnapshot: n };
      return c.queue = g, am(Zp.bind(null, o, g, e), [
        e
      ]), o.flags |= 2048, ci(
        9,
        Xo(),
        Fp.bind(
          null,
          o,
          g,
          i,
          n
        ),
        null
      ), i;
    },
    useId: function() {
      var e = Jt(), n = rt.identifierPrefix;
      if (Xe) {
        var i = or, o = sr;
        i = (o & ~(1 << 32 - Ft(o) - 1)).toString(32) + i, n = "«" + n + "R" + i, i = Go++, 0 < i && (n += "H" + i.toString(32)), n += "»";
      } else
        i = g_++, n = "«" + n + "r" + i.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: ef,
    useFormState: Wp,
    useActionState: Wp,
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
      return n.queue = i, n = tf.bind(
        null,
        Le,
        !0,
        i
      ), i.dispatch = n, [e, n];
    },
    useMemoCache: Vc,
    useCacheRefresh: function() {
      return Jt().memoizedState = S_.bind(
        null,
        Le
      );
    }
  }, xm = {
    readContext: Bt,
    use: Vo,
    useCallback: cm,
    useContext: Bt,
    useEffect: im,
    useImperativeHandle: um,
    useInsertionEffect: sm,
    useLayoutEffect: om,
    useMemo: fm,
    useReducer: Yo,
    useRef: rm,
    useState: function() {
      return Yo(cr);
    },
    useDebugValue: Jc,
    useDeferredValue: function(e, n) {
      var i = _t();
      return dm(
        i,
        Ke.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Yo(cr)[0], n = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : ds(e),
        n
      ];
    },
    useSyncExternalStore: Hp,
    useId: gm,
    useHostTransitionStatus: ef,
    useFormState: em,
    useActionState: em,
    useOptimistic: function(e, n) {
      var i = _t();
      return Yp(i, Ke, e, n);
    },
    useMemoCache: Vc,
    useCacheRefresh: vm
  }, E_ = {
    readContext: Bt,
    use: Vo,
    useCallback: cm,
    useContext: Bt,
    useEffect: im,
    useImperativeHandle: um,
    useInsertionEffect: sm,
    useLayoutEffect: om,
    useMemo: fm,
    useReducer: Xc,
    useRef: rm,
    useState: function() {
      return Xc(cr);
    },
    useDebugValue: Jc,
    useDeferredValue: function(e, n) {
      var i = _t();
      return Ke === null ? Kc(i, e, n) : dm(
        i,
        Ke.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Xc(cr)[0], n = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : ds(e),
        n
      ];
    },
    useSyncExternalStore: Hp,
    useId: gm,
    useHostTransitionStatus: ef,
    useFormState: nm,
    useActionState: nm,
    useOptimistic: function(e, n) {
      var i = _t();
      return Ke !== null ? Yp(i, Ke, e, n) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: Vc,
    useCacheRefresh: vm
  }, fi = null, ms = 0;
  function Ko(e) {
    var n = ms;
    return ms += 1, fi === null && (fi = []), Rp(fi, e, n);
  }
  function gs(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Wo(e, n) {
    throw n.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(n), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function Em(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Cm(e) {
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
    function g(L, z, I) {
      return L.index = I, e ? (I = L.alternate, I !== null ? (I = I.index, I < z ? (L.flags |= 67108866, z) : I) : (L.flags |= 67108866, z)) : (L.flags |= 1048576, z);
    }
    function C(L) {
      return e && L.alternate === null && (L.flags |= 67108866), L;
    }
    function N(L, z, I, Q) {
      return z === null || z.tag !== 6 ? (z = xc(I, L.mode, Q), z.return = L, z) : (z = c(z, I), z.return = L, z);
    }
    function R(L, z, I, Q) {
      var fe = I.type;
      return fe === d ? X(
        L,
        z,
        I.props.children,
        Q,
        I.key
      ) : z !== null && (z.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === U && Em(fe) === z.type) ? (z = c(z, I.props), gs(z, I), z.return = L, z) : (z = zo(
        I.type,
        I.key,
        I.props,
        null,
        L.mode,
        Q
      ), gs(z, I), z.return = L, z);
    }
    function q(L, z, I, Q) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== I.containerInfo || z.stateNode.implementation !== I.implementation ? (z = Ec(I, L.mode, Q), z.return = L, z) : (z = c(z, I.children || []), z.return = L, z);
    }
    function X(L, z, I, Q, fe) {
      return z === null || z.tag !== 7 ? (z = da(
        I,
        L.mode,
        Q,
        fe
      ), z.return = L, z) : (z = c(z, I), z.return = L, z);
    }
    function K(L, z, I) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = xc(
          "" + z,
          L.mode,
          I
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case b:
            return I = zo(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              I
            ), gs(I, z), I.return = L, I;
          case v:
            return z = Ec(
              z,
              L.mode,
              I
            ), z.return = L, z;
          case U:
            var Q = z._init;
            return z = Q(z._payload), K(L, z, I);
        }
        if (xe(z) || $(z))
          return z = da(
            z,
            L.mode,
            I,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return K(L, Ko(z), I);
        if (z.$$typeof === D)
          return K(
            L,
            Bo(L, z),
            I
          );
        Wo(L, z);
      }
      return null;
    }
    function F(L, z, I, Q) {
      var fe = z !== null ? z.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return fe !== null ? null : N(L, z, "" + I, Q);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case b:
            return I.key === fe ? R(L, z, I, Q) : null;
          case v:
            return I.key === fe ? q(L, z, I, Q) : null;
          case U:
            return fe = I._init, I = fe(I._payload), F(L, z, I, Q);
        }
        if (xe(I) || $(I))
          return fe !== null ? null : X(L, z, I, Q, null);
        if (typeof I.then == "function")
          return F(
            L,
            z,
            Ko(I),
            Q
          );
        if (I.$$typeof === D)
          return F(
            L,
            z,
            Bo(L, I),
            Q
          );
        Wo(L, I);
      }
      return null;
    }
    function Z(L, z, I, Q, fe) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return L = L.get(I) || null, N(z, L, "" + Q, fe);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case b:
            return L = L.get(
              Q.key === null ? I : Q.key
            ) || null, R(z, L, Q, fe);
          case v:
            return L = L.get(
              Q.key === null ? I : Q.key
            ) || null, q(z, L, Q, fe);
          case U:
            var Ie = Q._init;
            return Q = Ie(Q._payload), Z(
              L,
              z,
              I,
              Q,
              fe
            );
        }
        if (xe(Q) || $(Q))
          return L = L.get(I) || null, X(z, L, Q, fe, null);
        if (typeof Q.then == "function")
          return Z(
            L,
            z,
            I,
            Ko(Q),
            fe
          );
        if (Q.$$typeof === D)
          return Z(
            L,
            z,
            I,
            Bo(z, Q),
            fe
          );
        Wo(z, Q);
      }
      return null;
    }
    function Te(L, z, I, Q) {
      for (var fe = null, Ie = null, pe = z, Se = z = 0, Rt = null; pe !== null && Se < I.length; Se++) {
        pe.index > Se ? (Rt = pe, pe = null) : Rt = pe.sibling;
        var Ve = F(
          L,
          pe,
          I[Se],
          Q
        );
        if (Ve === null) {
          pe === null && (pe = Rt);
          break;
        }
        e && pe && Ve.alternate === null && n(L, pe), z = g(Ve, z, Se), Ie === null ? fe = Ve : Ie.sibling = Ve, Ie = Ve, pe = Rt;
      }
      if (Se === I.length)
        return i(L, pe), Xe && pa(L, Se), fe;
      if (pe === null) {
        for (; Se < I.length; Se++)
          pe = K(L, I[Se], Q), pe !== null && (z = g(
            pe,
            z,
            Se
          ), Ie === null ? fe = pe : Ie.sibling = pe, Ie = pe);
        return Xe && pa(L, Se), fe;
      }
      for (pe = o(pe); Se < I.length; Se++)
        Rt = Z(
          pe,
          L,
          Se,
          I[Se],
          Q
        ), Rt !== null && (e && Rt.alternate !== null && pe.delete(
          Rt.key === null ? Se : Rt.key
        ), z = g(
          Rt,
          z,
          Se
        ), Ie === null ? fe = Rt : Ie.sibling = Rt, Ie = Rt);
      return e && pe.forEach(function($r) {
        return n(L, $r);
      }), Xe && pa(L, Se), fe;
    }
    function be(L, z, I, Q) {
      if (I == null) throw Error(s(151));
      for (var fe = null, Ie = null, pe = z, Se = z = 0, Rt = null, Ve = I.next(); pe !== null && !Ve.done; Se++, Ve = I.next()) {
        pe.index > Se ? (Rt = pe, pe = null) : Rt = pe.sibling;
        var $r = F(L, pe, Ve.value, Q);
        if ($r === null) {
          pe === null && (pe = Rt);
          break;
        }
        e && pe && $r.alternate === null && n(L, pe), z = g($r, z, Se), Ie === null ? fe = $r : Ie.sibling = $r, Ie = $r, pe = Rt;
      }
      if (Ve.done)
        return i(L, pe), Xe && pa(L, Se), fe;
      if (pe === null) {
        for (; !Ve.done; Se++, Ve = I.next())
          Ve = K(L, Ve.value, Q), Ve !== null && (z = g(Ve, z, Se), Ie === null ? fe = Ve : Ie.sibling = Ve, Ie = Ve);
        return Xe && pa(L, Se), fe;
      }
      for (pe = o(pe); !Ve.done; Se++, Ve = I.next())
        Ve = Z(pe, L, Se, Ve.value, Q), Ve !== null && (e && Ve.alternate !== null && pe.delete(Ve.key === null ? Se : Ve.key), z = g(Ve, z, Se), Ie === null ? fe = Ve : Ie.sibling = Ve, Ie = Ve);
      return e && pe.forEach(function(C2) {
        return n(L, C2);
      }), Xe && pa(L, Se), fe;
    }
    function et(L, z, I, Q) {
      if (typeof I == "object" && I !== null && I.type === d && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case b:
            e: {
              for (var fe = I.key; z !== null; ) {
                if (z.key === fe) {
                  if (fe = I.type, fe === d) {
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
                  } else if (z.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === U && Em(fe) === z.type) {
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
              ), Q.return = L, L = Q) : (Q = zo(
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
              for (fe = I.key; z !== null; ) {
                if (z.key === fe)
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
              Q = Ec(I, L.mode, Q), Q.return = L, L = Q;
            }
            return C(L);
          case U:
            return fe = I._init, I = fe(I._payload), et(
              L,
              z,
              I,
              Q
            );
        }
        if (xe(I))
          return Te(
            L,
            z,
            I,
            Q
          );
        if ($(I)) {
          if (fe = $(I), typeof fe != "function") throw Error(s(150));
          return I = fe.call(I), be(
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
            Ko(I),
            Q
          );
        if (I.$$typeof === D)
          return et(
            L,
            z,
            Bo(L, I),
            Q
          );
        Wo(L, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint" ? (I = "" + I, z !== null && z.tag === 6 ? (i(L, z.sibling), Q = c(z, I), Q.return = L, L = Q) : (i(L, z), Q = xc(I, L.mode, Q), Q.return = L, L = Q), C(L)) : i(L, z);
    }
    return function(L, z, I, Q) {
      try {
        ms = 0;
        var fe = et(
          L,
          z,
          I,
          Q
        );
        return fi = null, fe;
      } catch (pe) {
        if (pe === ss || pe === Ho) throw pe;
        var Ie = on(29, pe, null, L.mode);
        return Ie.lanes = Q, Ie.return = L, Ie;
      } finally {
      }
    };
  }
  var di = Cm(!0), wm = Cm(!1), An = J(null), Xn = null;
  function jr(e) {
    var n = e.alternate;
    se(At, At.current & 1), se(An, e), Xn === null && (n === null || oi.current !== null || n.memoizedState !== null) && (Xn = e);
  }
  function Am(e) {
    if (e.tag === 22) {
      if (se(At, At.current), se(An, e), Xn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Xn = e);
      }
    } else zr();
  }
  function zr() {
    se(At, At.current), se(An, An.current);
  }
  function fr(e) {
    ae(An), Xn === e && (Xn = null), ae(At);
  }
  var At = J(0);
  function el(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || Vf(i)))
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
  function nf(e, n, i, o) {
    n = e.memoizedState, i = i(o, n), i = i == null ? n : y({}, n, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var rf = {
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
  function Tm(e, n, i, o, c, g, C) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, g, C) : n.prototype && n.prototype.isPureReactComponent ? !Ki(i, o) || !Ki(c, g) : !0;
  }
  function Om(e, n, i, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, o), n.state !== e && rf.enqueueReplaceState(n, n.state, null);
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
  var tl = typeof reportError == "function" ? reportError : function(e) {
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
  function Nm(e) {
    tl(e);
  }
  function Dm(e) {
    console.error(e);
  }
  function Mm(e) {
    tl(e);
  }
  function nl(e, n) {
    try {
      var i = e.onUncaughtError;
      i(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function km(e, n, i) {
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
  function af(e, n, i) {
    return i = Mr(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      nl(e, n);
    }, i;
  }
  function Rm(e) {
    return e = Mr(e), e.tag = 3, e;
  }
  function jm(e, n, i, o) {
    var c = i.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var g = o.value;
      e.payload = function() {
        return c(g);
      }, e.callback = function() {
        km(n, i, o);
      };
    }
    var C = i.stateNode;
    C !== null && typeof C.componentDidCatch == "function" && (e.callback = function() {
      km(n, i, o), typeof c != "function" && (Hr === null ? Hr = /* @__PURE__ */ new Set([this]) : Hr.add(this));
      var N = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: N !== null ? N : ""
      });
    });
  }
  function C_(e, n, i, o, c) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = i.alternate, n !== null && rs(
        n,
        i,
        c,
        !0
      ), i = An.current, i !== null) {
        switch (i.tag) {
          case 13:
            return Xn === null ? Nf() : i.alternate === null && ht === 0 && (ht = 3), i.flags &= -257, i.flags |= 65536, i.lanes = c, o === Rc ? i.flags |= 16384 : (n = i.updateQueue, n === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), Mf(e, o, c)), !1;
          case 22:
            return i.flags |= 65536, o === Rc ? i.flags |= 16384 : (n = i.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = n) : (i = n.retryQueue, i === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), Mf(e, o, c)), !1;
        }
        throw Error(s(435, i.tag));
      }
      return Mf(e, o, c), Nf(), !1;
    }
    if (Xe)
      return n = An.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, o !== Ac && (e = Error(s(422), { cause: o }), ns(xn(e, i)))) : (o !== Ac && (n = Error(s(423), {
        cause: o
      }), ns(
        xn(n, i)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, o = xn(o, i), c = af(
        e.stateNode,
        o,
        c
      ), Lc(e, c), ht !== 4 && (ht = 2)), !1;
    var g = Error(s(520), { cause: o });
    if (g = xn(g, i), Es === null ? Es = [g] : Es.push(g), ht !== 4 && (ht = 2), n === null) return !0;
    o = xn(o, i), i = n;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = c & -c, i.lanes |= e, e = af(i.stateNode, o, e), Lc(i, e), !1;
        case 1:
          if (n = i.type, g = i.stateNode, (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Hr === null || !Hr.has(g))))
            return i.flags |= 65536, c &= -c, i.lanes |= c, c = Rm(c), jm(
              c,
              e,
              i,
              o
            ), Lc(i, c), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var zm = Error(s(461)), Mt = !1;
  function jt(e, n, i, o) {
    n.child = e === null ? wm(n, null, i, o) : di(
      n,
      e.child,
      i,
      o
    );
  }
  function Lm(e, n, i, o, c) {
    i = i.render;
    var g = n.ref;
    if ("ref" in o) {
      var C = {};
      for (var N in o)
        N !== "ref" && (C[N] = o[N]);
    } else C = o;
    return ya(n), o = Hc(
      e,
      n,
      i,
      C,
      g,
      c
    ), N = qc(), e !== null && !Mt ? (Fc(e, n, c), dr(e, n, c)) : (Xe && N && Cc(n), n.flags |= 1, jt(e, n, o, c), n.child);
  }
  function Pm(e, n, i, o, c) {
    if (e === null) {
      var g = i.type;
      return typeof g == "function" && !Sc(g) && g.defaultProps === void 0 && i.compare === null ? (n.tag = 15, n.type = g, Im(
        e,
        n,
        g,
        o,
        c
      )) : (e = zo(
        i.type,
        null,
        o,
        n,
        n.mode,
        c
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (g = e.child, !hf(e, c)) {
      var C = g.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Ki, i(C, o) && e.ref === n.ref)
        return dr(e, n, c);
    }
    return n.flags |= 1, e = ir(g, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Im(e, n, i, o, c) {
    if (e !== null) {
      var g = e.memoizedProps;
      if (Ki(g, o) && e.ref === n.ref)
        if (Mt = !1, n.pendingProps = o = g, hf(e, c))
          (e.flags & 131072) !== 0 && (Mt = !0);
        else
          return n.lanes = e.lanes, dr(e, n, c);
    }
    return sf(
      e,
      n,
      i,
      o,
      c
    );
  }
  function Bm(e, n, i) {
    var o = n.pendingProps, c = o.children, g = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = g !== null ? g.baseLanes | i : i, e !== null) {
          for (c = n.child = e.child, g = 0; c !== null; )
            g = g | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = g & ~o;
        } else n.childLanes = 0, n.child = null;
        return Um(
          e,
          n,
          o,
          i
        );
      }
      if ((i & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Uo(
          n,
          g !== null ? g.cachePool : null
        ), g !== null ? Ip(n, g) : Ic(), Am(n);
      else
        return n.lanes = n.childLanes = 536870912, Um(
          e,
          n,
          g !== null ? g.baseLanes | i : i,
          i
        );
    } else
      g !== null ? (Uo(n, g.cachePool), Ip(n, g), zr(), n.memoizedState = null) : (e !== null && Uo(n, null), Ic(), zr());
    return jt(e, n, c, i), n.child;
  }
  function Um(e, n, i, o) {
    var c = kc();
    return c = c === null ? null : { parent: wt._currentValue, pool: c }, n.memoizedState = {
      baseLanes: i,
      cachePool: c
    }, e !== null && Uo(n, null), Ic(), Am(n), e !== null && rs(e, n, o, !0), null;
  }
  function rl(e, n) {
    var i = n.ref;
    if (i === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object")
        throw Error(s(284));
      (e === null || e.ref !== i) && (n.flags |= 4194816);
    }
  }
  function sf(e, n, i, o, c) {
    return ya(n), i = Hc(
      e,
      n,
      i,
      o,
      void 0,
      c
    ), o = qc(), e !== null && !Mt ? (Fc(e, n, c), dr(e, n, c)) : (Xe && o && Cc(n), n.flags |= 1, jt(e, n, i, c), n.child);
  }
  function Hm(e, n, i, o, c, g) {
    return ya(n), n.updateQueue = null, i = Up(
      n,
      o,
      i,
      c
    ), Bp(e), o = qc(), e !== null && !Mt ? (Fc(e, n, g), dr(e, n, g)) : (Xe && o && Cc(n), n.flags |= 1, jt(e, n, i, g), n.child);
  }
  function qm(e, n, i, o, c) {
    if (ya(n), n.stateNode === null) {
      var g = ni, C = i.contextType;
      typeof C == "object" && C !== null && (g = Bt(C)), g = new i(o, g), n.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, g.updater = rf, n.stateNode = g, g._reactInternals = n, g = n.stateNode, g.props = o, g.state = n.memoizedState, g.refs = {}, jc(n), C = i.contextType, g.context = typeof C == "object" && C !== null ? Bt(C) : ni, g.state = n.memoizedState, C = i.getDerivedStateFromProps, typeof C == "function" && (nf(
        n,
        i,
        C,
        o
      ), g.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function" || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (C = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), C !== g.state && rf.enqueueReplaceState(g, g.state, null), cs(n, o, g, c), us(), g.state = n.memoizedState), typeof g.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      g = n.stateNode;
      var N = n.memoizedProps, R = Sa(i, N);
      g.props = R;
      var q = g.context, X = i.contextType;
      C = ni, typeof X == "object" && X !== null && (C = Bt(X));
      var K = i.getDerivedStateFromProps;
      X = typeof K == "function" || typeof g.getSnapshotBeforeUpdate == "function", N = n.pendingProps !== N, X || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (N || q !== C) && Om(
        n,
        g,
        o,
        C
      ), Dr = !1;
      var F = n.memoizedState;
      g.state = F, cs(n, o, g, c), us(), q = n.memoizedState, N || F !== q || Dr ? (typeof K == "function" && (nf(
        n,
        i,
        K,
        o
      ), q = n.memoizedState), (R = Dr || Tm(
        n,
        i,
        R,
        o,
        F,
        q,
        C
      )) ? (X || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = q), g.props = o, g.state = q, g.context = C, o = R) : (typeof g.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      g = n.stateNode, zc(e, n), C = n.memoizedProps, X = Sa(i, C), g.props = X, K = n.pendingProps, F = g.context, q = i.contextType, R = ni, typeof q == "object" && q !== null && (R = Bt(q)), N = i.getDerivedStateFromProps, (q = typeof N == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (C !== K || F !== R) && Om(
        n,
        g,
        o,
        R
      ), Dr = !1, F = n.memoizedState, g.state = F, cs(n, o, g, c), us();
      var Z = n.memoizedState;
      C !== K || F !== Z || Dr || e !== null && e.dependencies !== null && Io(e.dependencies) ? (typeof N == "function" && (nf(
        n,
        i,
        N,
        o
      ), Z = n.memoizedState), (X = Dr || Tm(
        n,
        i,
        X,
        o,
        F,
        Z,
        R
      ) || e !== null && e.dependencies !== null && Io(e.dependencies)) ? (q || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(o, Z, R), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(
        o,
        Z,
        R
      )), typeof g.componentDidUpdate == "function" && (n.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = Z), g.props = o, g.state = Z, g.context = R, o = X) : (typeof g.componentDidUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return g = o, rl(e, n), o = (n.flags & 128) !== 0, g || o ? (g = n.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : g.render(), n.flags |= 1, e !== null && o ? (n.child = di(
      n,
      e.child,
      null,
      c
    ), n.child = di(
      n,
      null,
      i,
      c
    )) : jt(e, n, i, c), n.memoizedState = g.state, e = n.child) : e = dr(
      e,
      n,
      c
    ), e;
  }
  function Fm(e, n, i, o) {
    return ts(), n.flags |= 256, jt(e, n, i, o), n.child;
  }
  var of = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function lf(e) {
    return { baseLanes: e, cachePool: Dp() };
  }
  function uf(e, n, i) {
    return e = e !== null ? e.childLanes & ~i : 0, n && (e |= Tn), e;
  }
  function Zm(e, n, i) {
    var o = n.pendingProps, c = !1, g = (n.flags & 128) !== 0, C;
    if ((C = g) || (C = e !== null && e.memoizedState === null ? !1 : (At.current & 2) !== 0), C && (c = !0, n.flags &= -129), C = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Xe) {
        if (c ? jr(n) : zr(), Xe) {
          var N = dt, R;
          if (R = N) {
            e: {
              for (R = N, N = Yn; R.nodeType !== 8; ) {
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
            ), R.stateNode = N, R.return = n, n.child = R, Gt = n, dt = null, R = !0) : R = !1;
          }
          R || ga(n);
        }
        if (N = n.memoizedState, N !== null && (N = N.dehydrated, N !== null))
          return Vf(N) ? n.lanes = 32 : n.lanes = 536870912, null;
        fr(n);
      }
      return N = o.children, o = o.fallback, c ? (zr(), c = n.mode, N = al(
        { mode: "hidden", children: N },
        c
      ), o = da(
        o,
        c,
        i,
        null
      ), N.return = n, o.return = n, N.sibling = o, n.child = N, c = n.child, c.memoizedState = lf(i), c.childLanes = uf(
        e,
        C,
        i
      ), n.memoizedState = of, o) : (jr(n), cf(n, N));
    }
    if (R = e.memoizedState, R !== null && (N = R.dehydrated, N !== null)) {
      if (g)
        n.flags & 256 ? (jr(n), n.flags &= -257, n = ff(
          e,
          n,
          i
        )) : n.memoizedState !== null ? (zr(), n.child = e.child, n.flags |= 128, n = null) : (zr(), c = o.fallback, N = n.mode, o = al(
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
        ), o = n.child, o.memoizedState = lf(i), o.childLanes = uf(
          e,
          C,
          i
        ), n.memoizedState = of, n = c);
      else if (jr(n), Vf(N)) {
        if (C = N.nextSibling && N.nextSibling.dataset, C) var q = C.dgst;
        C = q, o = Error(s(419)), o.stack = "", o.digest = C, ns({ value: o, source: null, stack: null }), n = ff(
          e,
          n,
          i
        );
      } else if (Mt || rs(e, n, i, !1), C = (i & e.childLanes) !== 0, Mt || C) {
        if (C = rt, C !== null && (o = i & -i, o = (o & 42) !== 0 ? 1 : Vu(o), o = (o & (C.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== R.retryLane))
          throw R.retryLane = o, ti(e, o), dn(C, e, o), zm;
        N.data === "$?" || Nf(), n = ff(
          e,
          n,
          i
        );
      } else
        N.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = R.treeContext, dt = Pn(
          N.nextSibling
        ), Gt = n, Xe = !0, ma = null, Yn = !1, e !== null && (Cn[wn++] = sr, Cn[wn++] = or, Cn[wn++] = ha, sr = e.id, or = e.overflow, ha = n), n = cf(
          n,
          o.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (zr(), c = o.fallback, N = n.mode, R = e.child, q = R.sibling, o = ir(R, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = R.subtreeFlags & 65011712, q !== null ? c = ir(q, c) : (c = da(
      c,
      N,
      i,
      null
    ), c.flags |= 2), c.return = n, o.return = n, o.sibling = c, n.child = o, o = c, c = n.child, N = e.child.memoizedState, N === null ? N = lf(i) : (R = N.cachePool, R !== null ? (q = wt._currentValue, R = R.parent !== q ? { parent: q, pool: q } : R) : R = Dp(), N = {
      baseLanes: N.baseLanes | i,
      cachePool: R
    }), c.memoizedState = N, c.childLanes = uf(
      e,
      C,
      i
    ), n.memoizedState = of, o) : (jr(n), i = e.child, e = i.sibling, i = ir(i, {
      mode: "visible",
      children: o.children
    }), i.return = n, i.sibling = null, e !== null && (C = n.deletions, C === null ? (n.deletions = [e], n.flags |= 16) : C.push(e)), n.child = i, n.memoizedState = null, i);
  }
  function cf(e, n) {
    return n = al(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function al(e, n) {
    return e = on(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function ff(e, n, i) {
    return di(n, e.child, null, i), e = cf(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Gm(e, n, i) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), Oc(e.return, n, i);
  }
  function df(e, n, i, o, c) {
    var g = e.memoizedState;
    g === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: i,
      tailMode: c
    } : (g.isBackwards = n, g.rendering = null, g.renderingStartTime = 0, g.last = o, g.tail = i, g.tailMode = c);
  }
  function Vm(e, n, i) {
    var o = n.pendingProps, c = o.revealOrder, g = o.tail;
    if (jt(e, n, o.children, i), o = At.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Gm(e, i, n);
          else if (e.tag === 19)
            Gm(e, i, n);
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
    switch (se(At, o), c) {
      case "forwards":
        for (i = n.child, c = null; i !== null; )
          e = i.alternate, e !== null && el(e) === null && (c = i), i = i.sibling;
        i = c, i === null ? (c = n.child, n.child = null) : (c = i.sibling, i.sibling = null), df(
          n,
          !1,
          c,
          i,
          g
        );
        break;
      case "backwards":
        for (i = null, c = n.child, n.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && el(e) === null) {
            n.child = c;
            break;
          }
          e = c.sibling, c.sibling = i, i = c, c = e;
        }
        df(
          n,
          !0,
          i,
          null,
          g
        );
        break;
      case "together":
        df(n, !1, null, null, void 0);
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
  function hf(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Io(e)));
  }
  function w_(e, n, i) {
    switch (n.tag) {
      case 3:
        ge(n, n.stateNode.containerInfo), Nr(n, wt, e.memoizedState.cache), ts();
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
          return o.dehydrated !== null ? (jr(n), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? Zm(e, n, i) : (jr(n), e = dr(
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
            return Vm(
              e,
              n,
              i
            );
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), se(At, At.current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Bm(e, n, i);
      case 24:
        Nr(n, wt, e.memoizedState.cache);
    }
    return dr(e, n, i);
  }
  function Ym(e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Mt = !0;
      else {
        if (!hf(e, i) && (n.flags & 128) === 0)
          return Mt = !1, w_(
            e,
            n,
            i
          );
        Mt = (e.flags & 131072) !== 0;
      }
    else
      Mt = !1, Xe && (n.flags & 1048576) !== 0 && Ep(n, Po, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, c = o._init;
          if (o = c(o._payload), n.type = o, typeof o == "function")
            Sc(o) ? (e = Sa(o, e), n.tag = 1, n = qm(
              null,
              n,
              o,
              e,
              i
            )) : (n.tag = 0, n = sf(
              null,
              n,
              o,
              e,
              i
            ));
          else {
            if (o != null) {
              if (c = o.$$typeof, c === x) {
                n.tag = 11, n = Lm(
                  null,
                  n,
                  o,
                  e,
                  i
                );
                break e;
              } else if (c === k) {
                n.tag = 14, n = Pm(
                  null,
                  n,
                  o,
                  e,
                  i
                );
                break e;
              }
            }
            throw n = he(o) || o, Error(s(306, n, ""));
          }
        }
        return n;
      case 0:
        return sf(
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
        ), qm(
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
          var g = n.memoizedState;
          c = g.element, zc(e, n), cs(n, o, null, i);
          var C = n.memoizedState;
          if (o = C.cache, Nr(n, wt, o), o !== g.cache && Nc(
            n,
            [wt],
            i,
            !0
          ), us(), o = C.element, g.isDehydrated)
            if (g = {
              element: o,
              isDehydrated: !1,
              cache: C.cache
            }, n.updateQueue.baseState = g, n.memoizedState = g, n.flags & 256) {
              n = Fm(
                e,
                n,
                o,
                i
              );
              break e;
            } else if (o !== c) {
              c = xn(
                Error(s(424)),
                n
              ), ns(c), n = Fm(
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
              for (dt = Pn(e.firstChild), Gt = n, Xe = !0, ma = null, Yn = !0, i = wm(
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
            jt(
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
        return rl(e, n), e === null ? (i = Jg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = i : Xe || (i = n.type, e = n.pendingProps, o = yl(
          V.current
        ).createElement(i), o[It] = n, o[$t] = e, Lt(o, i, e), Dt(o), n.stateNode = o) : n.memoizedState = Jg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return it(n), e === null && Xe && (o = n.stateNode = Xg(
          n.type,
          n.pendingProps,
          V.current
        ), Gt = n, Yn = !0, c = dt, Zr(n.type) ? (Yf = c, dt = Pn(
          o.firstChild
        )) : dt = c), jt(
          e,
          n,
          n.pendingProps.children,
          i
        ), rl(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Xe && ((c = o = dt) && (o = W_(
          o,
          n.type,
          n.pendingProps,
          Yn
        ), o !== null ? (n.stateNode = o, Gt = n, dt = Pn(
          o.firstChild
        ), Yn = !1, c = !0) : c = !1), c || ga(n)), it(n), c = n.type, g = n.pendingProps, C = e !== null ? e.memoizedProps : null, o = g.children, Ff(c, g) ? o = null : C !== null && Ff(c, C) && (n.flags |= 32), n.memoizedState !== null && (c = Hc(
          e,
          n,
          v_,
          null,
          null,
          i
        ), ks._currentValue = c), rl(e, n), jt(e, n, o, i), n.child;
      case 6:
        return e === null && Xe && ((e = i = dt) && (i = e2(
          i,
          n.pendingProps,
          Yn
        ), i !== null ? (n.stateNode = i, Gt = n, dt = null, e = !0) : e = !1), e || ga(n)), null;
      case 13:
        return Zm(e, n, i);
      case 4:
        return ge(
          n,
          n.stateNode.containerInfo
        ), o = n.pendingProps, e === null ? n.child = di(
          n,
          null,
          o,
          i
        ) : jt(
          e,
          n,
          o,
          i
        ), n.child;
      case 11:
        return Lm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 7:
        return jt(
          e,
          n,
          n.pendingProps,
          i
        ), n.child;
      case 8:
        return jt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 12:
        return jt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 10:
        return o = n.pendingProps, Nr(n, n.type, o.value), jt(
          e,
          n,
          o.children,
          i
        ), n.child;
      case 9:
        return c = n.type._context, o = n.pendingProps.children, ya(n), c = Bt(c), o = o(c), n.flags |= 1, jt(e, n, o, i), n.child;
      case 14:
        return Pm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 15:
        return Im(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 19:
        return Vm(e, n, i);
      case 31:
        return o = n.pendingProps, i = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (i = al(
          o,
          i
        ), i.ref = n.ref, n.child = i, i.return = n, n = i) : (i = ir(e.child, o), i.ref = n.ref, n.child = i, i.return = n, n = i), n;
      case 22:
        return Bm(e, n, i);
      case 24:
        return ya(n), o = Bt(wt), e === null ? (c = kc(), c === null && (c = rt, g = Dc(), c.pooledCache = g, g.refCount++, g !== null && (c.pooledCacheLanes |= i), c = g), n.memoizedState = {
          parent: o,
          cache: c
        }, jc(n), Nr(n, wt, c)) : ((e.lanes & i) !== 0 && (zc(e, n), cs(n, null, null, i), us()), c = e.memoizedState, g = n.memoizedState, c.parent !== o ? (c = { parent: o, cache: o }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Nr(n, wt, o)) : (o = g.cache, Nr(n, wt, o), o !== c.cache && Nc(
          n,
          [wt],
          i,
          !0
        ))), jt(
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
  function Xm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !nv(n)) {
      if (n = An.current, n !== null && ((Ze & 4194048) === Ze ? Xn !== null : (Ze & 62914560) !== Ze && (Ze & 536870912) === 0 || n !== Xn))
        throw os = Rc, Mp;
      e.flags |= 8192;
    }
  }
  function il(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? Ah() : 536870912, e.lanes |= n, gi |= n);
  }
  function vs(e, n) {
    if (!Xe)
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
  function A_(e, n, i) {
    var o = n.pendingProps;
    switch (wc(n), n.tag) {
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
        return i = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), ur(wt), Ye(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (es(n) ? hr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Ap())), ut(n), null;
      case 26:
        return i = n.memoizedState, e === null ? (hr(n), i !== null ? (ut(n), Xm(n, i)) : (ut(n), n.flags &= -16777217)) : i ? i !== e.memoizedState ? (hr(n), ut(n), Xm(n, i)) : (ut(n), n.flags &= -16777217) : (e.memoizedProps !== o && hr(n), ut(n), n.flags &= -16777217), null;
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
          e = oe.current, es(n) ? Cp(n) : (e = Xg(c, o, i), n.stateNode = e, hr(n));
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
            Cp(n);
          else {
            switch (c = yl(
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
            e[It] = n, e[$t] = o;
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
            e: switch (Lt(e, i, o), i) {
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
            if (e = n.stateNode, i = n.memoizedProps, o = null, c = Gt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            e[It] = n, e = !!(e.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || Hg(e.nodeValue, i)), e || ga(n);
          } else
            e = yl(e).createTextNode(
              o
            ), e[It] = n, n.stateNode = e;
        }
        return ut(n), null;
      case 13:
        if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = es(n), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[It] = n;
            } else
              ts(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ut(n), c = !1;
          } else
            c = Ap(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (fr(n), n) : (fr(n), null);
        }
        if (fr(n), (n.flags & 128) !== 0)
          return n.lanes = i, n;
        if (i = o !== null, e = e !== null && e.memoizedState !== null, i) {
          o = n.child, c = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (c = o.alternate.memoizedState.cachePool.pool);
          var g = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (g = o.memoizedState.cachePool.pool), g !== c && (o.flags |= 2048);
        }
        return i !== e && i && (n.child.flags |= 8192), il(n, n.updateQueue), ut(n), null;
      case 4:
        return Ye(), e === null && If(n.stateNode.containerInfo), ut(n), null;
      case 10:
        return ur(n.type), ut(n), null;
      case 19:
        if (ae(At), c = n.memoizedState, c === null) return ut(n), null;
        if (o = (n.flags & 128) !== 0, g = c.rendering, g === null)
          if (o) vs(c, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (g = el(e), g !== null) {
                  for (n.flags |= 128, vs(c, !1), e = g.updateQueue, n.updateQueue = e, il(n, e), n.subtreeFlags = 0, e = i, i = n.child; i !== null; )
                    xp(i, e), i = i.sibling;
                  return se(
                    At,
                    At.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && Ce() > ll && (n.flags |= 128, o = !0, vs(c, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = el(g), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, il(n, e), vs(c, !0), c.tail === null && c.tailMode === "hidden" && !g.alternate && !Xe)
                return ut(n), null;
            } else
              2 * Ce() - c.renderingStartTime > ll && i !== 536870912 && (n.flags |= 128, o = !0, vs(c, !1), n.lanes = 4194304);
          c.isBackwards ? (g.sibling = n.child, n.child = g) : (e = c.last, e !== null ? e.sibling = g : n.child = g, c.last = g);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = Ce(), n.sibling = null, e = At.current, se(At, o ? e & 1 | 2 : e & 1), n) : (ut(n), null);
      case 22:
      case 23:
        return fr(n), Bc(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (ut(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ut(n), i = n.updateQueue, i !== null && il(n, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== i && (n.flags |= 2048), e !== null && ae(ba), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), ur(wt), ut(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function T_(e, n) {
    switch (wc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return ur(wt), Ye(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
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
        return ae(At), null;
      case 4:
        return Ye(), null;
      case 10:
        return ur(n.type), null;
      case 22:
      case 23:
        return fr(n), Bc(), e !== null && ae(ba), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return ur(wt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $m(e, n) {
    switch (wc(n), n.tag) {
      case 3:
        ur(wt), Ye();
        break;
      case 26:
      case 27:
      case 5:
        Re(n);
        break;
      case 4:
        Ye();
        break;
      case 13:
        fr(n);
        break;
      case 19:
        ae(At);
        break;
      case 10:
        ur(n.type);
        break;
      case 22:
      case 23:
        fr(n), Bc(), e !== null && ae(ba);
        break;
      case 24:
        ur(wt);
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
            var g = i.create, C = i.inst;
            o = g(), C.destroy = o;
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
        var g = c.next;
        o = g;
        do {
          if ((o.tag & e) === e) {
            var C = o.inst, N = C.destroy;
            if (N !== void 0) {
              C.destroy = void 0, c = n;
              var R = i, q = N;
              try {
                q();
              } catch (X) {
                nt(
                  c,
                  R,
                  X
                );
              }
            }
          }
          o = o.next;
        } while (o !== g);
      }
    } catch (X) {
      nt(n, n.return, X);
    }
  }
  function Qm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var i = e.stateNode;
      try {
        Pp(n, i);
      } catch (o) {
        nt(e, e.return, o);
      }
    }
  }
  function Jm(e, n, i) {
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
  function $n(e, n) {
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
  function Km(e) {
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
  function pf(e, n, i) {
    try {
      var o = e.stateNode;
      X_(o, e.type, i, n), o[$t] = n;
    } catch (c) {
      nt(e, e.return, c);
    }
  }
  function Wm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zr(e.type) || e.tag === 4;
  }
  function mf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Zr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function gf(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, n) : (n = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, n.appendChild(e), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = vl));
    else if (o !== 4 && (o === 27 && Zr(e.type) && (i = e.stateNode, n = null), e = e.child, e !== null))
      for (gf(e, n, i), e = e.sibling; e !== null; )
        gf(e, n, i), e = e.sibling;
  }
  function sl(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? i.insertBefore(e, n) : i.appendChild(e);
    else if (o !== 4 && (o === 27 && Zr(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (sl(e, n, i), e = e.sibling; e !== null; )
        sl(e, n, i), e = e.sibling;
  }
  function eg(e) {
    var n = e.stateNode, i = e.memoizedProps;
    try {
      for (var o = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      Lt(n, o, i), n[It] = e, n[$t] = i;
    } catch (g) {
      nt(e, e.return, g);
    }
  }
  var pr = !1, vt = !1, vf = !1, tg = typeof WeakSet == "function" ? WeakSet : Set, kt = null;
  function O_(e, n) {
    if (e = e.containerInfo, Hf = Cl, e = dp(e), pc(e)) {
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
            var c = o.anchorOffset, g = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, g.nodeType;
            } catch {
              i = null;
              break e;
            }
            var C = 0, N = -1, R = -1, q = 0, X = 0, K = e, F = null;
            t: for (; ; ) {
              for (var Z; K !== i || c !== 0 && K.nodeType !== 3 || (N = C + c), K !== g || o !== 0 && K.nodeType !== 3 || (R = C + o), K.nodeType === 3 && (C += K.nodeValue.length), (Z = K.firstChild) !== null; )
                F = K, K = Z;
              for (; ; ) {
                if (K === e) break t;
                if (F === i && ++q === c && (N = C), F === g && ++X === o && (R = C), (Z = K.nextSibling) !== null) break;
                K = F, F = K.parentNode;
              }
              K = Z;
            }
            i = N === -1 || R === -1 ? null : { start: N, end: R };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (qf = { focusedElem: e, selectionRange: i }, Cl = !1, kt = n; kt !== null; )
      if (n = kt, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, kt = e;
      else
        for (; kt !== null; ) {
          switch (n = kt, g = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && g !== null) {
                e = void 0, i = n, c = g.memoizedProps, g = g.memoizedState, o = i.stateNode;
                try {
                  var Te = Sa(
                    i.type,
                    c,
                    i.elementType === i.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Te,
                    g
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (be) {
                  nt(
                    i,
                    i.return,
                    be
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, i = e.nodeType, i === 9)
                  Gf(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Gf(e);
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
            e.return = n.return, kt = e;
            break;
          }
          kt = n.return;
        }
  }
  function ng(e, n, i) {
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
        o & 64 && Qm(i), o & 512 && bs(i, i.return);
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
            Pp(e, n);
          } catch (C) {
            nt(i, i.return, C);
          }
        }
        break;
      case 27:
        n === null && o & 4 && eg(i);
      case 26:
      case 5:
        Pr(e, i), n === null && o & 4 && Km(i), o & 512 && bs(i, i.return);
        break;
      case 12:
        Pr(e, i);
        break;
      case 13:
        Pr(e, i), o & 4 && ig(e, i), o & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = P_.bind(
          null,
          i
        ), t2(e, i))));
        break;
      case 22:
        if (o = i.memoizedState !== null || pr, !o) {
          n = n !== null && n.memoizedState !== null || vt, c = pr;
          var g = vt;
          pr = o, (vt = n) && !g ? Ir(
            e,
            i,
            (i.subtreeFlags & 8772) !== 0
          ) : Pr(e, i), pr = c, vt = g;
        }
        break;
      case 30:
        break;
      default:
        Pr(e, i);
    }
  }
  function rg(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, rg(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && $u(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var st = null, Kt = !1;
  function mr(e, n, i) {
    for (i = i.child; i !== null; )
      ag(e, n, i), i = i.sibling;
  }
  function ag(e, n, i) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(tr, i);
      } catch {
      }
    switch (i.tag) {
      case 26:
        vt || $n(i, n), mr(
          e,
          n,
          i
        ), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        vt || $n(i, n);
        var o = st, c = Kt;
        Zr(i.type) && (st = i.stateNode, Kt = !1), mr(
          e,
          n,
          i
        ), Os(i.stateNode), st = o, Kt = c;
        break;
      case 5:
        vt || $n(i, n);
      case 6:
        if (o = st, c = Kt, st = null, mr(
          e,
          n,
          i
        ), st = o, Kt = c, st !== null)
          if (Kt)
            try {
              (st.nodeType === 9 ? st.body : st.nodeName === "HTML" ? st.ownerDocument.body : st).removeChild(i.stateNode);
            } catch (g) {
              nt(
                i,
                n,
                g
              );
            }
          else
            try {
              st.removeChild(i.stateNode);
            } catch (g) {
              nt(
                i,
                n,
                g
              );
            }
        break;
      case 18:
        st !== null && (Kt ? (e = st, Vg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), Ls(e)) : Vg(st, i.stateNode));
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
        vt || ($n(i, n), o = i.stateNode, typeof o.componentWillUnmount == "function" && Jm(
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
  function ig(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ls(e);
      } catch (i) {
        nt(n, n.return, i);
      }
  }
  function N_(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new tg()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new tg()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function yf(e, n) {
    var i = N_(e);
    n.forEach(function(o) {
      var c = I_.bind(null, e, o);
      i.has(o) || (i.add(o), o.then(c, c));
    });
  }
  function ln(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var c = i[o], g = e, C = n, N = C;
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
        ag(g, C, c), st = null, Kt = !1, g = c.alternate, g !== null && (g.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        sg(n, e), n = n.sibling;
  }
  var Ln = null;
  function sg(e, n) {
    var i = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ln(n, e), un(e), o & 4 && (Lr(3, e, e.return), ys(3, e), Lr(5, e, e.return));
        break;
      case 1:
        ln(n, e), un(e), o & 512 && (vt || i === null || $n(i, i.return)), o & 64 && pr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var c = Ln;
        if (ln(n, e), un(e), o & 512 && (vt || i === null || $n(i, i.return)), o & 4) {
          var g = i !== null ? i.memoizedState : null;
          if (o = e.memoizedState, i === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, i = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (o) {
                    case "title":
                      g = c.getElementsByTagName("title")[0], (!g || g[Fi] || g[It] || g.namespaceURI === "http://www.w3.org/2000/svg" || g.hasAttribute("itemprop")) && (g = c.createElement(o), c.head.insertBefore(
                        g,
                        c.querySelector("head > title")
                      )), Lt(g, o, i), g[It] = e, Dt(g), o = g;
                      break e;
                    case "link":
                      var C = ev(
                        "link",
                        "href",
                        c
                      ).get(o + (i.href || ""));
                      if (C) {
                        for (var N = 0; N < C.length; N++)
                          if (g = C[N], g.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && g.getAttribute("rel") === (i.rel == null ? null : i.rel) && g.getAttribute("title") === (i.title == null ? null : i.title) && g.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                            C.splice(N, 1);
                            break t;
                          }
                      }
                      g = c.createElement(o), Lt(g, o, i), c.head.appendChild(g);
                      break;
                    case "meta":
                      if (C = ev(
                        "meta",
                        "content",
                        c
                      ).get(o + (i.content || ""))) {
                        for (N = 0; N < C.length; N++)
                          if (g = C[N], g.getAttribute("content") === (i.content == null ? null : "" + i.content) && g.getAttribute("name") === (i.name == null ? null : i.name) && g.getAttribute("property") === (i.property == null ? null : i.property) && g.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && g.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                            C.splice(N, 1);
                            break t;
                          }
                      }
                      g = c.createElement(o), Lt(g, o, i), c.head.appendChild(g);
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  g[It] = e, Dt(g), o = g;
                }
                e.stateNode = o;
              } else
                tv(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Wg(
                c,
                o,
                e.memoizedProps
              );
          else
            g !== o ? (g === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : g.count--, o === null ? tv(
              c,
              e.type,
              e.stateNode
            ) : Wg(
              c,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && pf(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        ln(n, e), un(e), o & 512 && (vt || i === null || $n(i, i.return)), i !== null && o & 4 && pf(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (ln(n, e), un(e), o & 512 && (vt || i === null || $n(i, i.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Xa(c, "");
          } catch (Z) {
            nt(e, e.return, Z);
          }
        }
        o & 4 && e.stateNode != null && (c = e.memoizedProps, pf(
          e,
          c,
          i !== null ? i.memoizedProps : c
        )), o & 1024 && (vf = !0);
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
        if (Sl = null, c = Ln, Ln = bl(n.containerInfo), ln(n, e), Ln = c, un(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Ls(n.containerInfo);
          } catch (Z) {
            nt(e, e.return, Z);
          }
        vf && (vf = !1, og(e));
        break;
      case 4:
        o = Ln, Ln = bl(
          e.stateNode.containerInfo
        ), ln(n, e), un(e), Ln = o;
        break;
      case 12:
        ln(n, e), un(e);
        break;
      case 13:
        ln(n, e), un(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (Cf = Ce()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, yf(e, o)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var R = i !== null && i.memoizedState !== null, q = pr, X = vt;
        if (pr = q || c, vt = X || R, ln(n, e), vt = X, pr = q, un(e), o & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (i === null || R || pr || vt || xa(e)), i = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (i === null) {
                R = i = n;
                try {
                  if (g = R.stateNode, c)
                    C = g.style, typeof C.setProperty == "function" ? C.setProperty("display", "none", "important") : C.display = "none";
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
        o & 4 && (o = e.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, yf(e, i))));
        break;
      case 19:
        ln(n, e), un(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, yf(e, o)));
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
          if (Wm(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(s(160));
        switch (i.tag) {
          case 27:
            var c = i.stateNode, g = mf(e);
            sl(e, g, c);
            break;
          case 5:
            var C = i.stateNode;
            i.flags & 32 && (Xa(C, ""), i.flags &= -33);
            var N = mf(e);
            sl(e, N, C);
            break;
          case 3:
          case 4:
            var R = i.stateNode.containerInfo, q = mf(e);
            gf(
              e,
              q,
              R
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (X) {
        nt(e, e.return, X);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function og(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        og(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Pr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        ng(e, n.alternate, n), n = n.sibling;
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
          $n(n, n.return);
          var i = n.stateNode;
          typeof i.componentWillUnmount == "function" && Jm(
            n,
            n.return,
            i
          ), xa(n);
          break;
        case 27:
          Os(n.stateNode);
        case 26:
        case 5:
          $n(n, n.return), xa(n);
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
      var o = n.alternate, c = e, g = n, C = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Ir(
            c,
            g,
            i
          ), ys(4, g);
          break;
        case 1:
          if (Ir(
            c,
            g,
            i
          ), o = g, c = o.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (q) {
              nt(o, o.return, q);
            }
          if (o = g, c = o.updateQueue, c !== null) {
            var N = o.stateNode;
            try {
              var R = c.shared.hiddenCallbacks;
              if (R !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < R.length; c++)
                  Lp(R[c], N);
            } catch (q) {
              nt(o, o.return, q);
            }
          }
          i && C & 64 && Qm(g), bs(g, g.return);
          break;
        case 27:
          eg(g);
        case 26:
        case 5:
          Ir(
            c,
            g,
            i
          ), i && o === null && C & 4 && Km(g), bs(g, g.return);
          break;
        case 12:
          Ir(
            c,
            g,
            i
          );
          break;
        case 13:
          Ir(
            c,
            g,
            i
          ), i && C & 4 && ig(c, g);
          break;
        case 22:
          g.memoizedState === null && Ir(
            c,
            g,
            i
          ), bs(g, g.return);
          break;
        case 30:
          break;
        default:
          Ir(
            c,
            g,
            i
          );
      }
      n = n.sibling;
    }
  }
  function bf(e, n) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && as(i));
  }
  function _f(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && as(e));
  }
  function Qn(e, n, i, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        lg(
          e,
          n,
          i,
          o
        ), n = n.sibling;
  }
  function lg(e, n, i, o) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Qn(
          e,
          n,
          i,
          o
        ), c & 2048 && ys(9, n);
        break;
      case 1:
        Qn(
          e,
          n,
          i,
          o
        );
        break;
      case 3:
        Qn(
          e,
          n,
          i,
          o
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && as(e)));
        break;
      case 12:
        if (c & 2048) {
          Qn(
            e,
            n,
            i,
            o
          ), e = n.stateNode;
          try {
            var g = n.memoizedProps, C = g.id, N = g.onPostCommit;
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
          Qn(
            e,
            n,
            i,
            o
          );
        break;
      case 13:
        Qn(
          e,
          n,
          i,
          o
        );
        break;
      case 23:
        break;
      case 22:
        g = n.stateNode, C = n.alternate, n.memoizedState !== null ? g._visibility & 2 ? Qn(
          e,
          n,
          i,
          o
        ) : _s(e, n) : g._visibility & 2 ? Qn(
          e,
          n,
          i,
          o
        ) : (g._visibility |= 2, hi(
          e,
          n,
          i,
          o,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && bf(C, n);
        break;
      case 24:
        Qn(
          e,
          n,
          i,
          o
        ), c & 2048 && _f(n.alternate, n);
        break;
      default:
        Qn(
          e,
          n,
          i,
          o
        );
    }
  }
  function hi(e, n, i, o, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var g = e, C = n, N = i, R = o, q = C.flags;
      switch (C.tag) {
        case 0:
        case 11:
        case 15:
          hi(
            g,
            C,
            N,
            R,
            c
          ), ys(8, C);
          break;
        case 23:
          break;
        case 22:
          var X = C.stateNode;
          C.memoizedState !== null ? X._visibility & 2 ? hi(
            g,
            C,
            N,
            R,
            c
          ) : _s(
            g,
            C
          ) : (X._visibility |= 2, hi(
            g,
            C,
            N,
            R,
            c
          )), c && q & 2048 && bf(
            C.alternate,
            C
          );
          break;
        case 24:
          hi(
            g,
            C,
            N,
            R,
            c
          ), c && q & 2048 && _f(C.alternate, C);
          break;
        default:
          hi(
            g,
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
            _s(i, o), c & 2048 && bf(
              o.alternate,
              o
            );
            break;
          case 24:
            _s(i, o), c & 2048 && _f(o.alternate, o);
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
        ug(e), e = e.sibling;
  }
  function ug(e) {
    switch (e.tag) {
      case 26:
        pi(e), e.flags & Ss && e.memoizedState !== null && p2(
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
        Ln = bl(e.stateNode.containerInfo), pi(e), Ln = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Ss, Ss = 16777216, pi(e), Ss = n) : pi(e));
        break;
      default:
        pi(e);
    }
  }
  function cg(e) {
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
          kt = o, dg(
            o,
            e
          );
        }
      cg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        fg(e), e = e.sibling;
  }
  function fg(e) {
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
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, ol(e)) : xs(e);
        break;
      default:
        xs(e);
    }
  }
  function ol(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          kt = o, dg(
            o,
            e
          );
        }
      cg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Lr(8, n, n.return), ol(n);
          break;
        case 22:
          i = n.stateNode, i._visibility & 2 && (i._visibility &= -3, ol(n));
          break;
        default:
          ol(n);
      }
      e = e.sibling;
    }
  }
  function dg(e, n) {
    for (; kt !== null; ) {
      var i = kt;
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
      if (o = i.child, o !== null) o.return = i, kt = o;
      else
        e: for (i = e; kt !== null; ) {
          o = kt;
          var c = o.sibling, g = o.return;
          if (rg(o), o === i) {
            kt = null;
            break e;
          }
          if (c !== null) {
            c.return = g, kt = c;
            break e;
          }
          kt = g;
        }
    }
  }
  var D_ = {
    getCacheForType: function(e) {
      var n = Bt(wt), i = n.data.get(e);
      return i === void 0 && (i = e(), n.data.set(e, i)), i;
    }
  }, M_ = typeof WeakMap == "function" ? WeakMap : Map, Qe = 0, rt = null, Be = null, Ze = 0, Je = 0, cn = null, Br = !1, mi = !1, Sf = !1, gr = 0, ht = 0, Ur = 0, Ea = 0, xf = 0, Tn = 0, gi = 0, Es = null, Wt = null, Ef = !1, Cf = 0, ll = 1 / 0, ul = null, Hr = null, zt = 0, qr = null, vi = null, yi = 0, wf = 0, Af = null, hg = null, Cs = 0, Tf = null;
  function fn() {
    if ((Qe & 2) !== 0 && Ze !== 0)
      return Ze & -Ze;
    if (H.T !== null) {
      var e = ii;
      return e !== 0 ? e : jf();
    }
    return Nh();
  }
  function pg() {
    Tn === 0 && (Tn = (Ze & 536870912) === 0 || Xe ? Ua() : 536870912);
    var e = An.current;
    return e !== null && (e.flags |= 32), Tn;
  }
  function dn(e, n, i) {
    (e === rt && (Je === 2 || Je === 9) || e.cancelPendingCommit !== null) && (bi(e, 0), Fr(
      e,
      Ze,
      Tn,
      !1
    )), qi(e, i), ((Qe & 2) === 0 || e !== rt) && (e === rt && ((Qe & 2) === 0 && (Ea |= i), ht === 4 && Fr(
      e,
      Ze,
      Tn,
      !1
    )), Jn(e));
  }
  function mg(e, n, i) {
    if ((Qe & 6) !== 0) throw Error(s(327));
    var o = !i && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Xt(e, n), c = o ? j_(e, n) : Df(e, n, !0), g = o;
    do {
      if (c === 0) {
        mi && !o && Fr(e, n, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, g && !k_(i)) {
          c = Df(e, n, !1), g = !1;
          continue;
        }
        if (c === 2) {
          if (g = n, e.errorRecoveryDisabledLanes & g)
            var C = 0;
          else
            C = e.pendingLanes & -536870913, C = C !== 0 ? C : C & 536870912 ? 536870912 : 0;
          if (C !== 0) {
            n = C;
            e: {
              var N = e;
              c = Es;
              var R = N.current.memoizedState.isDehydrated;
              if (R && (bi(N, C).flags |= 256), C = Df(
                N,
                C,
                !1
              ), C !== 2) {
                if (Sf && !R) {
                  N.errorRecoveryDisabledLanes |= g, Ea |= g, c = 4;
                  break e;
                }
                g = Wt, Wt = c, g !== null && (Wt === null ? Wt = g : Wt.push.apply(
                  Wt,
                  g
                ));
              }
              c = C;
            }
            if (g = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          bi(e, 0), Fr(e, n, 0, !0);
          break;
        }
        e: {
          switch (o = e, g = c, g) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Fr(
                o,
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
          if ((n & 62914560) === n && (c = Cf + 300 - Ce(), 10 < c)) {
            if (Fr(
              o,
              n,
              Tn,
              !Br
            ), Zt(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Zg(
              gg.bind(
                null,
                o,
                i,
                Wt,
                ul,
                Ef,
                n,
                Tn,
                Ea,
                gi,
                Br,
                g,
                2,
                -0,
                0
              ),
              c
            );
            break e;
          }
          gg(
            o,
            i,
            Wt,
            ul,
            Ef,
            n,
            Tn,
            Ea,
            gi,
            Br,
            g,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Jn(e);
  }
  function gg(e, n, i, o, c, g, C, N, R, q, X, K, F, Z) {
    if (e.timeoutHandle = -1, K = n.subtreeFlags, (K & 8192 || (K & 16785408) === 16785408) && (Ms = { stylesheets: null, count: 0, unsuspend: h2 }, ug(n), K = m2(), K !== null)) {
      e.cancelPendingCommit = K(
        Eg.bind(
          null,
          e,
          n,
          g,
          i,
          o,
          c,
          C,
          N,
          R,
          X,
          1,
          F,
          Z
        )
      ), Fr(e, g, C, !q);
      return;
    }
    Eg(
      e,
      n,
      g,
      i,
      o,
      c,
      C,
      N,
      R
    );
  }
  function k_(e) {
    for (var n = e; ; ) {
      var i = n.tag;
      if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var o = 0; o < i.length; o++) {
          var c = i[o], g = c.getSnapshot;
          c = c.value;
          try {
            if (!sn(g(), c)) return !1;
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
    n &= ~xf, n &= ~Ea, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var g = 31 - Ft(c), C = 1 << g;
      o[g] = -1, c &= ~C;
    }
    i !== 0 && Th(e, i, n);
  }
  function cl() {
    return (Qe & 6) === 0 ? (ws(0), !1) : !0;
  }
  function Of() {
    if (Be !== null) {
      if (Je === 0)
        var e = Be.return;
      else
        e = Be, lr = va = null, Zc(e), fi = null, ms = 0, e = Be;
      for (; e !== null; )
        $m(e.alternate, e), e = e.return;
      Be = null;
    }
  }
  function bi(e, n) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, Q_(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), Of(), rt = e, Be = i = ir(e.current, null), Ze = n, Je = 0, cn = null, Br = !1, mi = Xt(e, n), Sf = !1, gi = Tn = xf = Ea = Ur = ht = 0, Wt = Es = null, Ef = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var c = 31 - Ft(o), g = 1 << c;
        n |= e[c], o &= ~g;
      }
    return gr = n, ko(), i;
  }
  function vg(e, n) {
    Le = null, H.H = Jo, n === ss || n === Ho ? (n = jp(), Je = 3) : n === Mp ? (n = jp(), Je = 4) : Je = n === zm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, cn = n, Be === null && (ht = 1, nl(
      e,
      xn(n, e.current)
    ));
  }
  function yg() {
    var e = H.H;
    return H.H = Jo, e === null ? Jo : e;
  }
  function bg() {
    var e = H.A;
    return H.A = D_, e;
  }
  function Nf() {
    ht = 4, Br || (Ze & 4194048) !== Ze && An.current !== null || (mi = !0), (Ur & 134217727) === 0 && (Ea & 134217727) === 0 || rt === null || Fr(
      rt,
      Ze,
      Tn,
      !1
    );
  }
  function Df(e, n, i) {
    var o = Qe;
    Qe |= 2;
    var c = yg(), g = bg();
    (rt !== e || Ze !== n) && (ul = null, bi(e, n)), n = !1;
    var C = ht;
    e: do
      try {
        if (Je !== 0 && Be !== null) {
          var N = Be, R = cn;
          switch (Je) {
            case 8:
              Of(), C = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              An.current === null && (n = !0);
              var q = Je;
              if (Je = 0, cn = null, _i(e, N, R, q), i && mi) {
                C = 0;
                break e;
              }
              break;
            default:
              q = Je, Je = 0, cn = null, _i(e, N, R, q);
          }
        }
        R_(), C = ht;
        break;
      } catch (X) {
        vg(e, X);
      }
    while (!0);
    return n && e.shellSuspendCounter++, lr = va = null, Qe = o, H.H = c, H.A = g, Be === null && (rt = null, Ze = 0, ko()), C;
  }
  function R_() {
    for (; Be !== null; ) _g(Be);
  }
  function j_(e, n) {
    var i = Qe;
    Qe |= 2;
    var o = yg(), c = bg();
    rt !== e || Ze !== n ? (ul = null, ll = Ce() + 500, bi(e, n)) : mi = Xt(
      e,
      n
    );
    e: do
      try {
        if (Je !== 0 && Be !== null) {
          n = Be;
          var g = cn;
          t: switch (Je) {
            case 1:
              Je = 0, cn = null, _i(e, n, g, 1);
              break;
            case 2:
            case 9:
              if (kp(g)) {
                Je = 0, cn = null, Sg(n);
                break;
              }
              n = function() {
                Je !== 2 && Je !== 9 || rt !== e || (Je = 7), Jn(e);
              }, g.then(n, n);
              break e;
            case 3:
              Je = 7;
              break e;
            case 4:
              Je = 5;
              break e;
            case 7:
              kp(g) ? (Je = 0, cn = null, Sg(n)) : (Je = 0, cn = null, _i(e, n, g, 7));
              break;
            case 5:
              var C = null;
              switch (Be.tag) {
                case 26:
                  C = Be.memoizedState;
                case 5:
                case 27:
                  var N = Be;
                  if (!C || nv(C)) {
                    Je = 0, cn = null;
                    var R = N.sibling;
                    if (R !== null) Be = R;
                    else {
                      var q = N.return;
                      q !== null ? (Be = q, fl(q)) : Be = null;
                    }
                    break t;
                  }
              }
              Je = 0, cn = null, _i(e, n, g, 5);
              break;
            case 6:
              Je = 0, cn = null, _i(e, n, g, 6);
              break;
            case 8:
              Of(), ht = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        z_();
        break;
      } catch (X) {
        vg(e, X);
      }
    while (!0);
    return lr = va = null, H.H = o, H.A = c, Qe = i, Be !== null ? 0 : (rt = null, Ze = 0, ko(), ht);
  }
  function z_() {
    for (; Be !== null && !Ee(); )
      _g(Be);
  }
  function _g(e) {
    var n = Ym(e.alternate, e, gr);
    e.memoizedProps = e.pendingProps, n === null ? fl(e) : Be = n;
  }
  function Sg(e) {
    var n = e, i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Hm(
          i,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ze
        );
        break;
      case 11:
        n = Hm(
          i,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ze
        );
        break;
      case 5:
        Zc(n);
      default:
        $m(i, n), n = Be = xp(n, gr), n = Ym(i, n, gr);
    }
    e.memoizedProps = e.pendingProps, n === null ? fl(e) : Be = n;
  }
  function _i(e, n, i, o) {
    lr = va = null, Zc(n), fi = null, ms = 0;
    var c = n.return;
    try {
      if (C_(
        e,
        c,
        n,
        i,
        Ze
      )) {
        ht = 1, nl(
          e,
          xn(i, e.current)
        ), Be = null;
        return;
      }
    } catch (g) {
      if (c !== null) throw Be = c, g;
      ht = 1, nl(
        e,
        xn(i, e.current)
      ), Be = null;
      return;
    }
    n.flags & 32768 ? (Xe || o === 1 ? e = !0 : mi || (Ze & 536870912) !== 0 ? e = !1 : (Br = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = An.current, o !== null && o.tag === 13 && (o.flags |= 16384))), xg(n, e)) : fl(n);
  }
  function fl(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        xg(
          n,
          Br
        );
        return;
      }
      e = n.return;
      var i = A_(
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
  function xg(e, n) {
    do {
      var i = T_(e.alternate, e);
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
  function Eg(e, n, i, o, c, g, C, N, R) {
    e.cancelPendingCommit = null;
    do
      dl();
    while (zt !== 0);
    if ((Qe & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (g = n.lanes | n.childLanes, g |= bc, hb(
        e,
        i,
        g,
        C,
        N,
        R
      ), e === rt && (Be = rt = null, Ze = 0), vi = n, qr = e, yi = i, wf = g, Af = c, hg = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, B_(le, function() {
        return Og(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = H.T, H.T = null, c = te.p, te.p = 2, C = Qe, Qe |= 4;
        try {
          O_(e, n, i);
        } finally {
          Qe = C, te.p = c, H.T = o;
        }
      }
      zt = 1, Cg(), wg(), Ag();
    }
  }
  function Cg() {
    if (zt === 1) {
      zt = 0;
      var e = qr, n = vi, i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        i = H.T, H.T = null;
        var o = te.p;
        te.p = 2;
        var c = Qe;
        Qe |= 4;
        try {
          sg(n, e);
          var g = qf, C = dp(e.containerInfo), N = g.focusedElem, R = g.selectionRange;
          if (C !== N && N && N.ownerDocument && fp(
            N.ownerDocument.documentElement,
            N
          )) {
            if (R !== null && pc(N)) {
              var q = R.start, X = R.end;
              if (X === void 0 && (X = q), "selectionStart" in N)
                N.selectionStart = q, N.selectionEnd = Math.min(
                  X,
                  N.value.length
                );
              else {
                var K = N.ownerDocument || document, F = K && K.defaultView || window;
                if (F.getSelection) {
                  var Z = F.getSelection(), Te = N.textContent.length, be = Math.min(R.start, Te), et = R.end === void 0 ? be : Math.min(R.end, Te);
                  !Z.extend && be > et && (C = et, et = be, be = C);
                  var L = cp(
                    N,
                    be
                  ), z = cp(
                    N,
                    et
                  );
                  if (L && z && (Z.rangeCount !== 1 || Z.anchorNode !== L.node || Z.anchorOffset !== L.offset || Z.focusNode !== z.node || Z.focusOffset !== z.offset)) {
                    var I = K.createRange();
                    I.setStart(L.node, L.offset), Z.removeAllRanges(), be > et ? (Z.addRange(I), Z.extend(z.node, z.offset)) : (I.setEnd(z.node, z.offset), Z.addRange(I));
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
          Cl = !!Hf, qf = Hf = null;
        } finally {
          Qe = c, te.p = o, H.T = i;
        }
      }
      e.current = n, zt = 2;
    }
  }
  function wg() {
    if (zt === 2) {
      zt = 0;
      var e = qr, n = vi, i = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || i) {
        i = H.T, H.T = null;
        var o = te.p;
        te.p = 2;
        var c = Qe;
        Qe |= 4;
        try {
          ng(e, n.alternate, n);
        } finally {
          Qe = c, te.p = o, H.T = i;
        }
      }
      zt = 3;
    }
  }
  function Ag() {
    if (zt === 4 || zt === 3) {
      zt = 0, ze();
      var e = qr, n = vi, i = yi, o = hg;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? zt = 5 : (zt = 0, vi = qr = null, Tg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Hr = null), Yu(i), n = n.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
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
        n = H.T, c = te.p, te.p = 2, H.T = null;
        try {
          for (var g = e.onRecoverableError, C = 0; C < o.length; C++) {
            var N = o[C];
            g(N.value, {
              componentStack: N.stack
            });
          }
        } finally {
          H.T = n, te.p = c;
        }
      }
      (yi & 3) !== 0 && dl(), Jn(e), c = e.pendingLanes, (i & 4194090) !== 0 && (c & 42) !== 0 ? e === Tf ? Cs++ : (Cs = 0, Tf = e) : Cs = 0, ws(0);
    }
  }
  function Tg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, as(n)));
  }
  function dl(e) {
    return Cg(), wg(), Ag(), Og();
  }
  function Og() {
    if (zt !== 5) return !1;
    var e = qr, n = wf;
    wf = 0;
    var i = Yu(yi), o = H.T, c = te.p;
    try {
      te.p = 32 > i ? 32 : i, H.T = null, i = Af, Af = null;
      var g = qr, C = yi;
      if (zt = 0, vi = qr = null, yi = 0, (Qe & 6) !== 0) throw Error(s(331));
      var N = Qe;
      if (Qe |= 4, fg(g.current), lg(
        g,
        g.current,
        C,
        i
      ), Qe = N, ws(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(tr, g);
        } catch {
        }
      return !0;
    } finally {
      te.p = c, H.T = o, Tg(e, n);
    }
  }
  function Ng(e, n, i) {
    n = xn(i, n), n = af(e.stateNode, n, 2), e = kr(e, n, 2), e !== null && (qi(e, 2), Jn(e));
  }
  function nt(e, n, i) {
    if (e.tag === 3)
      Ng(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Ng(
            n,
            e,
            i
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Hr === null || !Hr.has(o))) {
            e = xn(i, e), i = Rm(2), o = kr(n, i, 2), o !== null && (jm(
              i,
              o,
              n,
              e
            ), qi(o, 2), Jn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Mf(e, n, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new M_();
      var c = /* @__PURE__ */ new Set();
      o.set(n, c);
    } else
      c = o.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(n, c));
    c.has(i) || (Sf = !0, c.add(i), e = L_.bind(null, e, n, i), n.then(e, e));
  }
  function L_(e, n, i) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, rt === e && (Ze & i) === i && (ht === 4 || ht === 3 && (Ze & 62914560) === Ze && 300 > Ce() - Cf ? (Qe & 2) === 0 && bi(e, 0) : xf |= i, gi === Ze && (gi = 0)), Jn(e);
  }
  function Dg(e, n) {
    n === 0 && (n = Ah()), e = ti(e, n), e !== null && (qi(e, n), Jn(e));
  }
  function P_(e) {
    var n = e.memoizedState, i = 0;
    n !== null && (i = n.retryLane), Dg(e, i);
  }
  function I_(e, n) {
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
    o !== null && o.delete(n), Dg(e, i);
  }
  function B_(e, n) {
    return re(e, n);
  }
  var hl = null, Si = null, kf = !1, pl = !1, Rf = !1, Ca = 0;
  function Jn(e) {
    e !== Si && e.next === null && (Si === null ? hl = Si = e : Si = Si.next = e), pl = !0, kf || (kf = !0, H_());
  }
  function ws(e, n) {
    if (!Rf && pl) {
      Rf = !0;
      do
        for (var i = !1, o = hl; o !== null; ) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var g = 0;
            else {
              var C = o.suspendedLanes, N = o.pingedLanes;
              g = (1 << 31 - Ft(42 | e) + 1) - 1, g &= c & ~(C & ~N), g = g & 201326741 ? g & 201326741 | 1 : g ? g | 2 : 0;
            }
            g !== 0 && (i = !0, jg(o, g));
          } else
            g = Ze, g = Zt(
              o,
              o === rt ? g : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (g & 3) === 0 || Xt(o, g) || (i = !0, jg(o, g));
          o = o.next;
        }
      while (i);
      Rf = !1;
    }
  }
  function U_() {
    Mg();
  }
  function Mg() {
    pl = kf = !1;
    var e = 0;
    Ca !== 0 && ($_() && (e = Ca), Ca = 0);
    for (var n = Ce(), i = null, o = hl; o !== null; ) {
      var c = o.next, g = kg(o, n);
      g === 0 ? (o.next = null, i === null ? hl = c : i.next = c, c === null && (Si = i)) : (i = o, (e !== 0 || (g & 3) !== 0) && (pl = !0)), o = c;
    }
    ws(e);
  }
  function kg(e, n) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, g = e.pendingLanes & -62914561; 0 < g; ) {
      var C = 31 - Ft(g), N = 1 << C, R = c[C];
      R === -1 ? ((N & i) === 0 || (N & o) !== 0) && (c[C] = _o(N, n)) : R <= n && (e.expiredLanes |= N), g &= ~N;
    }
    if (n = rt, i = Ze, i = Zt(
      e,
      e === n ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, i === 0 || e === n && (Je === 2 || Je === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && ne(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || Xt(e, i)) {
      if (n = i & -i, n === e.callbackPriority) return n;
      switch (o !== null && ne(o), Yu(i)) {
        case 2:
        case 8:
          i = de;
          break;
        case 32:
          i = le;
          break;
        case 268435456:
          i = Ae;
          break;
        default:
          i = le;
      }
      return o = Rg.bind(null, e), i = re(i, o), e.callbackPriority = n, e.callbackNode = i, n;
    }
    return o !== null && o !== null && ne(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Rg(e, n) {
    if (zt !== 0 && zt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (dl() && e.callbackNode !== i)
      return null;
    var o = Ze;
    return o = Zt(
      e,
      e === rt ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (mg(e, o, n), kg(e, Ce()), e.callbackNode != null && e.callbackNode === i ? Rg.bind(null, e) : null);
  }
  function jg(e, n) {
    if (dl()) return null;
    mg(e, n, !0);
  }
  function H_() {
    J_(function() {
      (Qe & 6) !== 0 ? re(
        $e,
        U_
      ) : Mg();
    });
  }
  function jf() {
    return Ca === 0 && (Ca = Ua()), Ca;
  }
  function zg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : wo("" + e);
  }
  function Lg(e, n) {
    var i = n.ownerDocument.createElement("input");
    return i.name = n.name, i.value = n.value, e.id && i.setAttribute("form", e.id), n.parentNode.insertBefore(i, n), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function q_(e, n, i, o, c) {
    if (n === "submit" && i && i.stateNode === c) {
      var g = zg(
        (c[$t] || null).action
      ), C = o.submitter;
      C && (n = (n = C[$t] || null) ? zg(n.formAction) : C.getAttribute("formAction"), n !== null && (g = n, C = null));
      var N = new No(
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
                  var R = C ? Lg(c, C) : new FormData(c);
                  Wc(
                    i,
                    {
                      pending: !0,
                      data: R,
                      method: c.method,
                      action: g
                    },
                    null,
                    R
                  );
                }
              } else
                typeof g == "function" && (N.preventDefault(), R = C ? Lg(c, C) : new FormData(c), Wc(
                  i,
                  {
                    pending: !0,
                    data: R,
                    method: c.method,
                    action: g
                  },
                  g,
                  R
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var zf = 0; zf < yc.length; zf++) {
    var Lf = yc[zf], F_ = Lf.toLowerCase(), Z_ = Lf[0].toUpperCase() + Lf.slice(1);
    zn(
      F_,
      "on" + Z_
    );
  }
  zn(mp, "onAnimationEnd"), zn(gp, "onAnimationIteration"), zn(vp, "onAnimationStart"), zn("dblclick", "onDoubleClick"), zn("focusin", "onFocus"), zn("focusout", "onBlur"), zn(o_, "onTransitionRun"), zn(l_, "onTransitionStart"), zn(u_, "onTransitionCancel"), zn(yp, "onTransitionEnd"), Ga("onMouseEnter", ["mouseout", "mouseover"]), Ga("onMouseLeave", ["mouseout", "mouseover"]), Ga("onPointerEnter", ["pointerout", "pointerover"]), Ga("onPointerLeave", ["pointerout", "pointerover"]), la(
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
  ), G_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(As)
  );
  function Pg(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i], c = o.event;
      o = o.listeners;
      e: {
        var g = void 0;
        if (n)
          for (var C = o.length - 1; 0 <= C; C--) {
            var N = o[C], R = N.instance, q = N.currentTarget;
            if (N = N.listener, R !== g && c.isPropagationStopped())
              break e;
            g = N, c.currentTarget = q;
            try {
              g(c);
            } catch (X) {
              tl(X);
            }
            c.currentTarget = null, g = R;
          }
        else
          for (C = 0; C < o.length; C++) {
            if (N = o[C], R = N.instance, q = N.currentTarget, N = N.listener, R !== g && c.isPropagationStopped())
              break e;
            g = N, c.currentTarget = q;
            try {
              g(c);
            } catch (X) {
              tl(X);
            }
            c.currentTarget = null, g = R;
          }
      }
    }
  }
  function Ue(e, n) {
    var i = n[Xu];
    i === void 0 && (i = n[Xu] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    i.has(o) || (Ig(n, e, 2, !1), i.add(o));
  }
  function Pf(e, n, i) {
    var o = 0;
    n && (o |= 4), Ig(
      i,
      e,
      o,
      n
    );
  }
  var ml = "_reactListening" + Math.random().toString(36).slice(2);
  function If(e) {
    if (!e[ml]) {
      e[ml] = !0, Mh.forEach(function(i) {
        i !== "selectionchange" && (G_.has(i) || Pf(i, !1, e), Pf(i, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[ml] || (n[ml] = !0, Pf("selectionchange", !1, n));
    }
  }
  function Ig(e, n, i, o) {
    switch (lv(n)) {
      case 2:
        var c = y2;
        break;
      case 8:
        c = b2;
        break;
      default:
        c = Kf;
    }
    i = c.bind(
      null,
      n,
      i,
      e
    ), c = void 0, !ic || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), o ? c !== void 0 ? e.addEventListener(n, i, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, i, !0) : c !== void 0 ? e.addEventListener(n, i, {
      passive: c
    }) : e.addEventListener(n, i, !1);
  }
  function Bf(e, n, i, o, c) {
    var g = o;
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
              o = g = C;
              continue e;
            }
            N = N.parentNode;
          }
        }
        o = o.return;
      }
    Gh(function() {
      var q = g, X = rc(i), K = [];
      e: {
        var F = bp.get(e);
        if (F !== void 0) {
          var Z = No, Te = e;
          switch (e) {
            case "keypress":
              if (To(i) === 0) break e;
            case "keydown":
            case "keyup":
              Z = Bb;
              break;
            case "focusin":
              Te = "focus", Z = uc;
              break;
            case "focusout":
              Te = "blur", Z = uc;
              break;
            case "beforeblur":
            case "afterblur":
              Z = uc;
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
              Z = Xh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Tb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = qb;
              break;
            case mp:
            case gp:
            case vp:
              Z = Db;
              break;
            case yp:
              Z = Zb;
              break;
            case "scroll":
            case "scrollend":
              Z = wb;
              break;
            case "wheel":
              Z = Vb;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = kb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = Qh;
              break;
            case "toggle":
            case "beforetoggle":
              Z = Xb;
          }
          var be = (n & 4) !== 0, et = !be && (e === "scroll" || e === "scrollend"), L = be ? F !== null ? F + "Capture" : null : F;
          be = [];
          for (var z = q, I; z !== null; ) {
            var Q = z;
            if (I = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || I === null || L === null || (Q = Gi(z, L), Q != null && be.push(
              Ts(z, Q, I)
            )), et) break;
            z = z.return;
          }
          0 < be.length && (F = new Z(
            F,
            Te,
            null,
            i,
            X
          ), K.push({ event: F, listeners: be }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (F = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", F && i !== nc && (Te = i.relatedTarget || i.fromElement) && (qa(Te) || Te[Ha]))
            break e;
          if ((Z || F) && (F = X.window === X ? X : (F = X.ownerDocument) ? F.defaultView || F.parentWindow : window, Z ? (Te = i.relatedTarget || i.toElement, Z = q, Te = Te ? qa(Te) : null, Te !== null && (et = u(Te), be = Te.tag, Te !== et || be !== 5 && be !== 27 && be !== 6) && (Te = null)) : (Z = null, Te = q), Z !== Te)) {
            if (be = Xh, Q = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (be = Qh, Q = "onPointerLeave", L = "onPointerEnter", z = "pointer"), et = Z == null ? F : Zi(Z), I = Te == null ? F : Zi(Te), F = new be(
              Q,
              z + "leave",
              Z,
              i,
              X
            ), F.target = et, F.relatedTarget = I, Q = null, qa(X) === q && (be = new be(
              L,
              z + "enter",
              Te,
              i,
              X
            ), be.target = I, be.relatedTarget = et, Q = be), et = Q, Z && Te)
              t: {
                for (be = Z, L = Te, z = 0, I = be; I; I = xi(I))
                  z++;
                for (I = 0, Q = L; Q; Q = xi(Q))
                  I++;
                for (; 0 < z - I; )
                  be = xi(be), z--;
                for (; 0 < I - z; )
                  L = xi(L), I--;
                for (; z--; ) {
                  if (be === L || L !== null && be === L.alternate)
                    break t;
                  be = xi(be), L = xi(L);
                }
                be = null;
              }
            else be = null;
            Z !== null && Bg(
              K,
              F,
              Z,
              be,
              !1
            ), Te !== null && et !== null && Bg(
              K,
              et,
              Te,
              be,
              !0
            );
          }
        }
        e: {
          if (F = q ? Zi(q) : window, Z = F.nodeName && F.nodeName.toLowerCase(), Z === "select" || Z === "input" && F.type === "file")
            var fe = ap;
          else if (np(F))
            if (ip)
              fe = a_;
            else {
              fe = n_;
              var Ie = t_;
            }
          else
            Z = F.nodeName, !Z || Z.toLowerCase() !== "input" || F.type !== "checkbox" && F.type !== "radio" ? q && tc(q.elementType) && (fe = ap) : fe = r_;
          if (fe && (fe = fe(e, q))) {
            rp(
              K,
              fe,
              i,
              X
            );
            break e;
          }
          Ie && Ie(e, F, q), e === "focusout" && q && F.type === "number" && q.memoizedProps.value != null && ec(F, "number", F.value);
        }
        switch (Ie = q ? Zi(q) : window, e) {
          case "focusin":
            (np(Ie) || Ie.contentEditable === "true") && (Ka = Ie, mc = q, Wi = null);
            break;
          case "focusout":
            Wi = mc = Ka = null;
            break;
          case "mousedown":
            gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gc = !1, hp(K, i, X);
            break;
          case "selectionchange":
            if (s_) break;
          case "keydown":
          case "keyup":
            hp(K, i, X);
        }
        var pe;
        if (fc)
          e: {
            switch (e) {
              case "compositionstart":
                var Se = "onCompositionStart";
                break e;
              case "compositionend":
                Se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Se = "onCompositionUpdate";
                break e;
            }
            Se = void 0;
          }
        else
          Ja ? ep(e, i) && (Se = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (Se = "onCompositionStart");
        Se && (Jh && i.locale !== "ko" && (Ja || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && Ja && (pe = Vh()) : (Or = X, sc = "value" in Or ? Or.value : Or.textContent, Ja = !0)), Ie = gl(q, Se), 0 < Ie.length && (Se = new $h(
          Se,
          e,
          null,
          i,
          X
        ), K.push({ event: Se, listeners: Ie }), pe ? Se.data = pe : (pe = tp(i), pe !== null && (Se.data = pe)))), (pe = Qb ? Jb(e, i) : Kb(e, i)) && (Se = gl(q, "onBeforeInput"), 0 < Se.length && (Ie = new $h(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          X
        ), K.push({
          event: Ie,
          listeners: Se
        }), Ie.data = pe)), q_(
          K,
          e,
          q,
          i,
          X
        );
      }
      Pg(K, n);
    });
  }
  function Ts(e, n, i) {
    return {
      instance: e,
      listener: n,
      currentTarget: i
    };
  }
  function gl(e, n) {
    for (var i = n + "Capture", o = []; e !== null; ) {
      var c = e, g = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || g === null || (c = Gi(e, i), c != null && o.unshift(
        Ts(e, c, g)
      ), c = Gi(e, n), c != null && o.push(
        Ts(e, c, g)
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
  function Bg(e, n, i, o, c) {
    for (var g = n._reactName, C = []; i !== null && i !== o; ) {
      var N = i, R = N.alternate, q = N.stateNode;
      if (N = N.tag, R !== null && R === o) break;
      N !== 5 && N !== 26 && N !== 27 || q === null || (R = q, c ? (q = Gi(i, g), q != null && C.unshift(
        Ts(i, q, R)
      )) : c || (q = Gi(i, g), q != null && C.push(
        Ts(i, q, R)
      ))), i = i.return;
    }
    C.length !== 0 && e.push({ event: n, listeners: C });
  }
  var V_ = /\r\n?/g, Y_ = /\u0000|\uFFFD/g;
  function Ug(e) {
    return (typeof e == "string" ? e : "" + e).replace(V_, `
`).replace(Y_, "");
  }
  function Hg(e, n) {
    return n = Ug(n), Ug(e) === n;
  }
  function vl() {
  }
  function We(e, n, i, o, c, g) {
    switch (i) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || Xa(e, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && Xa(e, "" + o);
        break;
      case "className":
        xo(e, "class", o);
        break;
      case "tabIndex":
        xo(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xo(e, i, o);
        break;
      case "style":
        Fh(e, o, g);
        break;
      case "data":
        if (n !== "object") {
          xo(e, "data", o);
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
        o = wo("" + o), e.setAttribute(i, o);
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
          typeof g == "function" && (i === "formAction" ? (n !== "input" && We(e, n, "name", c.name, c, null), We(
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
        o = wo("" + o), e.setAttribute(i, o);
        break;
      case "onClick":
        o != null && (e.onclick = vl);
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
        i = wo("" + o), e.setAttributeNS(
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
        Ue("beforetoggle", e), Ue("toggle", e), So(e, "popover", o);
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
        So(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = Eb.get(i) || i, So(e, i, o));
    }
  }
  function Uf(e, n, i, o, c, g) {
    switch (i) {
      case "style":
        Fh(e, o, g);
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
        o != null && (e.onclick = vl);
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
        if (!kh.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (c = i.endsWith("Capture"), n = i.slice(2, c ? i.length - 7 : void 0), g = e[$t] || null, g = g != null ? g[i] : null, typeof g == "function" && e.removeEventListener(n, g, c), typeof o == "function")) {
              typeof g != "function" && g !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(n, o, c);
              break e;
            }
            i in e ? e[i] = o : o === !0 ? e.setAttribute(i, "") : So(e, i, o);
          }
    }
  }
  function Lt(e, n, i) {
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
        var o = !1, c = !1, g;
        for (g in i)
          if (i.hasOwnProperty(g)) {
            var C = i[g];
            if (C != null)
              switch (g) {
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
                  We(e, n, g, C, i, null);
              }
          }
        c && We(e, n, "srcSet", i.srcSet, i, null), o && We(e, n, "src", i.src, i, null);
        return;
      case "input":
        Ue("invalid", e);
        var N = g = C = c = null, R = null, q = null;
        for (o in i)
          if (i.hasOwnProperty(o)) {
            var X = i[o];
            if (X != null)
              switch (o) {
                case "name":
                  c = X;
                  break;
                case "type":
                  C = X;
                  break;
                case "checked":
                  R = X;
                  break;
                case "defaultChecked":
                  q = X;
                  break;
                case "value":
                  g = X;
                  break;
                case "defaultValue":
                  N = X;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (X != null)
                    throw Error(s(137, n));
                  break;
                default:
                  We(e, n, o, X, i, null);
              }
          }
        Bh(
          e,
          g,
          N,
          R,
          q,
          C,
          c,
          !1
        ), Eo(e);
        return;
      case "select":
        Ue("invalid", e), o = C = g = null;
        for (c in i)
          if (i.hasOwnProperty(c) && (N = i[c], N != null))
            switch (c) {
              case "value":
                g = N;
                break;
              case "defaultValue":
                C = N;
                break;
              case "multiple":
                o = N;
              default:
                We(e, n, c, N, i, null);
            }
        n = g, i = C, e.multiple = !!o, n != null ? Ya(e, !!o, n, !1) : i != null && Ya(e, !!o, i, !0);
        return;
      case "textarea":
        Ue("invalid", e), g = c = o = null;
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
                g = N;
                break;
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(s(91));
                break;
              default:
                We(e, n, C, N, i, null);
            }
        Hh(e, o, c, g), Eo(e);
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
        for (q in i)
          if (i.hasOwnProperty(q) && (o = i[q], o != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                We(e, n, q, o, i, null);
            }
        return;
      default:
        if (tc(n)) {
          for (X in i)
            i.hasOwnProperty(X) && (o = i[X], o !== void 0 && Uf(
              e,
              n,
              X,
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
  function X_(e, n, i, o) {
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
        var c = null, g = null, C = null, N = null, R = null, q = null, X = null;
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
                g = Z;
                break;
              case "name":
                c = Z;
                break;
              case "checked":
                q = Z;
                break;
              case "defaultChecked":
                X = Z;
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
        Wu(
          e,
          C,
          N,
          R,
          q,
          X,
          g,
          c
        );
        return;
      case "select":
        Z = C = N = F = null;
        for (g in i)
          if (R = i[g], i.hasOwnProperty(g) && R != null)
            switch (g) {
              case "value":
                break;
              case "multiple":
                Z = R;
              default:
                o.hasOwnProperty(g) || We(
                  e,
                  n,
                  g,
                  null,
                  o,
                  R
                );
            }
        for (c in o)
          if (g = o[c], R = i[c], o.hasOwnProperty(c) && (g != null || R != null))
            switch (c) {
              case "value":
                F = g;
                break;
              case "defaultValue":
                N = g;
                break;
              case "multiple":
                C = g;
              default:
                g !== R && We(
                  e,
                  n,
                  c,
                  g,
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
          if (c = o[C], g = i[C], o.hasOwnProperty(C) && (c != null || g != null))
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
                c !== g && We(e, n, C, c, o, g);
            }
        Uh(e, F, Z);
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
        for (var be in i)
          F = i[be], i.hasOwnProperty(be) && F != null && !o.hasOwnProperty(be) && We(e, n, be, null, o, F);
        for (q in o)
          if (F = o[q], Z = i[q], o.hasOwnProperty(q) && F !== Z && (F != null || Z != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(s(137, n));
                break;
              default:
                We(
                  e,
                  n,
                  q,
                  F,
                  o,
                  Z
                );
            }
        return;
      default:
        if (tc(n)) {
          for (var et in i)
            F = i[et], i.hasOwnProperty(et) && F !== void 0 && !o.hasOwnProperty(et) && Uf(
              e,
              n,
              et,
              void 0,
              o,
              F
            );
          for (X in o)
            F = o[X], Z = i[X], !o.hasOwnProperty(X) || F === Z || F === void 0 && Z === void 0 || Uf(
              e,
              n,
              X,
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
  var Hf = null, qf = null;
  function yl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function qg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Fg(e, n) {
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
  function Ff(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Zf = null;
  function $_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Zf ? !1 : (Zf = e, !0) : (Zf = null, !1);
  }
  var Zg = typeof setTimeout == "function" ? setTimeout : void 0, Q_ = typeof clearTimeout == "function" ? clearTimeout : void 0, Gg = typeof Promise == "function" ? Promise : void 0, J_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gg < "u" ? function(e) {
    return Gg.resolve(null).then(e).catch(K_);
  } : Zg;
  function K_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Zr(e) {
    return e === "head";
  }
  function Vg(e, n) {
    var i = n, o = 0, c = 0;
    do {
      var g = i.nextSibling;
      if (e.removeChild(i), g && g.nodeType === 8)
        if (i = g.data, i === "/$") {
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
            e.removeChild(g), Ls(n);
            return;
          }
          c--;
        } else
          i === "$" || i === "$?" || i === "$!" ? c++ : o = i.charCodeAt(0) - 48;
      else o = 0;
      i = g;
    } while (i);
    Ls(n);
  }
  function Gf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (n = n.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Gf(i), $u(i);
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
  function W_(e, n, i, o) {
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
              if (g = e.getAttribute("rel"), g === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (g !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (g = e.getAttribute("src"), (g !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && g && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var g = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === g)
          return e;
      } else return e;
      if (e = Pn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function e2(e, n, i) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = Pn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Vf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function t2(e, n) {
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
  var Yf = null;
  function Yg(e) {
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
  function Xg(e, n, i) {
    switch (n = yl(i), e) {
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
    $u(e);
  }
  var On = /* @__PURE__ */ new Map(), $g = /* @__PURE__ */ new Set();
  function bl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var vr = te.d;
  te.d = {
    f: n2,
    r: r2,
    D: a2,
    C: i2,
    L: s2,
    m: o2,
    X: u2,
    S: l2,
    M: c2
  };
  function n2() {
    var e = vr.f(), n = cl();
    return e || n;
  }
  function r2(e) {
    var n = Fa(e);
    n !== null && n.tag === 5 && n.type === "form" ? mm(n) : vr.r(e);
  }
  var Ei = typeof document > "u" ? null : document;
  function Qg(e, n, i) {
    var o = Ei;
    if (o && typeof n == "string" && n) {
      var c = Sn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof i == "string" && (c += '[crossorigin="' + i + '"]'), $g.has(c) || ($g.add(c), e = { rel: e, crossOrigin: i, href: n }, o.querySelector(c) === null && (n = o.createElement("link"), Lt(n, "link", e), Dt(n), o.head.appendChild(n)));
    }
  }
  function a2(e) {
    vr.D(e), Qg("dns-prefetch", e, null);
  }
  function i2(e, n) {
    vr.C(e, n), Qg("preconnect", e, n);
  }
  function s2(e, n, i) {
    vr.L(e, n, i);
    var o = Ei;
    if (o && e && n) {
      var c = 'link[rel="preload"][as="' + Sn(n) + '"]';
      n === "image" && i && i.imageSrcSet ? (c += '[imagesrcset="' + Sn(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (c += '[imagesizes="' + Sn(
        i.imageSizes
      ) + '"]')) : c += '[href="' + Sn(e) + '"]';
      var g = c;
      switch (n) {
        case "style":
          g = Ci(e);
          break;
        case "script":
          g = wi(e);
      }
      On.has(g) || (e = y(
        {
          rel: "preload",
          href: n === "image" && i && i.imageSrcSet ? void 0 : e,
          as: n
        },
        i
      ), On.set(g, e), o.querySelector(c) !== null || n === "style" && o.querySelector(Ns(g)) || n === "script" && o.querySelector(Ds(g)) || (n = o.createElement("link"), Lt(n, "link", e), Dt(n), o.head.appendChild(n)));
    }
  }
  function o2(e, n) {
    vr.m(e, n);
    var i = Ei;
    if (i && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + Sn(o) + '"][href="' + Sn(e) + '"]', g = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          g = wi(e);
      }
      if (!On.has(g) && (e = y({ rel: "modulepreload", href: e }, n), On.set(g, e), i.querySelector(c) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(Ds(g)))
              return;
        }
        o = i.createElement("link"), Lt(o, "link", e), Dt(o), i.head.appendChild(o);
      }
    }
  }
  function l2(e, n, i) {
    vr.S(e, n, i);
    var o = Ei;
    if (o && e) {
      var c = Za(o).hoistableStyles, g = Ci(e);
      n = n || "default";
      var C = c.get(g);
      if (!C) {
        var N = { loading: 0, preload: null };
        if (C = o.querySelector(
          Ns(g)
        ))
          N.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": n },
            i
          ), (i = On.get(g)) && Xf(e, i);
          var R = C = o.createElement("link");
          Dt(R), Lt(R, "link", e), R._p = new Promise(function(q, X) {
            R.onload = q, R.onerror = X;
          }), R.addEventListener("load", function() {
            N.loading |= 1;
          }), R.addEventListener("error", function() {
            N.loading |= 2;
          }), N.loading |= 4, _l(C, n, o);
        }
        C = {
          type: "stylesheet",
          instance: C,
          count: 1,
          state: N
        }, c.set(g, C);
      }
    }
  }
  function u2(e, n) {
    vr.X(e, n);
    var i = Ei;
    if (i && e) {
      var o = Za(i).hoistableScripts, c = wi(e), g = o.get(c);
      g || (g = i.querySelector(Ds(c)), g || (e = y({ src: e, async: !0 }, n), (n = On.get(c)) && $f(e, n), g = i.createElement("script"), Dt(g), Lt(g, "link", e), i.head.appendChild(g)), g = {
        type: "script",
        instance: g,
        count: 1,
        state: null
      }, o.set(c, g));
    }
  }
  function c2(e, n) {
    vr.M(e, n);
    var i = Ei;
    if (i && e) {
      var o = Za(i).hoistableScripts, c = wi(e), g = o.get(c);
      g || (g = i.querySelector(Ds(c)), g || (e = y({ src: e, async: !0, type: "module" }, n), (n = On.get(c)) && $f(e, n), g = i.createElement("script"), Dt(g), Lt(g, "link", e), i.head.appendChild(g)), g = {
        type: "script",
        instance: g,
        count: 1,
        state: null
      }, o.set(c, g));
    }
  }
  function Jg(e, n, i, o) {
    var c = (c = V.current) ? bl(c) : null;
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
          var g = Za(
            c
          ).hoistableStyles, C = g.get(e);
          if (C || (c = c.ownerDocument || c, C = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, g.set(e, C), (g = c.querySelector(
            Ns(e)
          )) && !g._p && (C.instance = g, C.state.loading = 5), On.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, On.set(e, i), g || f2(
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
    return 'href="' + Sn(e) + '"';
  }
  function Ns(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Kg(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function f2(e, n, i, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), Lt(n, "link", i), Dt(n), e.head.appendChild(n));
  }
  function wi(e) {
    return '[src="' + Sn(e) + '"]';
  }
  function Ds(e) {
    return "script[async]" + e;
  }
  function Wg(e, n, i) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + Sn(i.href) + '"]'
          );
          if (o)
            return n.instance = o, Dt(o), o;
          var c = y({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), Dt(o), Lt(o, "style", c), _l(o, i.precedence, e), n.instance = o;
        case "stylesheet":
          c = Ci(i.href);
          var g = e.querySelector(
            Ns(c)
          );
          if (g)
            return n.state.loading |= 4, n.instance = g, Dt(g), g;
          o = Kg(i), (c = On.get(c)) && Xf(o, c), g = (e.ownerDocument || e).createElement("link"), Dt(g);
          var C = g;
          return C._p = new Promise(function(N, R) {
            C.onload = N, C.onerror = R;
          }), Lt(g, "link", o), n.state.loading |= 4, _l(g, i.precedence, e), n.instance = g;
        case "script":
          return g = wi(i.src), (c = e.querySelector(
            Ds(g)
          )) ? (n.instance = c, Dt(c), c) : (o = i, (c = On.get(g)) && (o = y({}, i), $f(o, c)), e = e.ownerDocument || e, c = e.createElement("script"), Dt(c), Lt(c, "link", o), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, _l(o, i.precedence, e));
    return n.instance;
  }
  function _l(e, n, i) {
    for (var o = i.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = o.length ? o[o.length - 1] : null, g = c, C = 0; C < o.length; C++) {
      var N = o[C];
      if (N.dataset.precedence === n) g = N;
      else if (g !== c) break;
    }
    g ? g.parentNode.insertBefore(e, g.nextSibling) : (n = i.nodeType === 9 ? i.head : i, n.insertBefore(e, n.firstChild));
  }
  function Xf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function $f(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var Sl = null;
  function ev(e, n, i) {
    if (Sl === null) {
      var o = /* @__PURE__ */ new Map(), c = Sl = /* @__PURE__ */ new Map();
      c.set(i, o);
    } else
      c = Sl, o = c.get(i), o || (o = /* @__PURE__ */ new Map(), c.set(i, o));
    if (o.has(e)) return o;
    for (o.set(e, null), i = i.getElementsByTagName(e), c = 0; c < i.length; c++) {
      var g = i[c];
      if (!(g[Fi] || g[It] || e === "link" && g.getAttribute("rel") === "stylesheet") && g.namespaceURI !== "http://www.w3.org/2000/svg") {
        var C = g.getAttribute(n) || "";
        C = e + C;
        var N = o.get(C);
        N ? N.push(g) : o.set(C, [g]);
      }
    }
    return o;
  }
  function tv(e, n, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function d2(e, n, i) {
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
  function nv(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ms = null;
  function h2() {
  }
  function p2(e, n, i) {
    if (Ms === null) throw Error(s(475));
    var o = Ms;
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = Ci(i.href), g = e.querySelector(
          Ns(c)
        );
        if (g) {
          e = g._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = xl.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = g, Dt(g);
          return;
        }
        g = e.ownerDocument || e, i = Kg(i), (c = On.get(c)) && Xf(i, c), g = g.createElement("link"), Dt(g);
        var C = g;
        C._p = new Promise(function(N, R) {
          C.onload = N, C.onerror = R;
        }), Lt(g, "link", i), n.instance = g;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = xl.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function m2() {
    if (Ms === null) throw Error(s(475));
    var e = Ms;
    return e.stylesheets && e.count === 0 && Qf(e, e.stylesheets), 0 < e.count ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && Qf(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(i);
      };
    } : null;
  }
  function xl() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Qf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var El = null;
  function Qf(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, El = /* @__PURE__ */ new Map(), n.forEach(g2, e), El = null, xl.call(e));
  }
  function g2(e, n) {
    if (!(n.state.loading & 4)) {
      var i = El.get(e);
      if (i) var o = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), El.set(e, i);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), g = 0; g < c.length; g++) {
          var C = c[g];
          (C.nodeName === "LINK" || C.getAttribute("media") !== "not all") && (i.set(C.dataset.precedence, C), o = C);
        }
        o && i.set(null, o);
      }
      c = n.instance, C = c.getAttribute("data-precedence"), g = i.get(C) || o, g === o && i.set(null, c), i.set(C, c), this.count++, o = xl.bind(this), c.addEventListener("load", o), c.addEventListener("error", o), g ? g.parentNode.insertBefore(c, g.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var ks = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: ce,
    _currentValue2: ce,
    _threadCount: 0
  };
  function v2(e, n, i, o, c, g, C, N) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gu(0), this.hiddenUpdates = Gu(null), this.identifierPrefix = o, this.onUncaughtError = c, this.onCaughtError = g, this.onRecoverableError = C, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function rv(e, n, i, o, c, g, C, N, R, q, X, K) {
    return e = new v2(
      e,
      n,
      i,
      C,
      N,
      R,
      q,
      K
    ), n = 1, g === !0 && (n |= 24), g = on(3, null, null, n), e.current = g, g.stateNode = e, n = Dc(), n.refCount++, e.pooledCache = n, n.refCount++, g.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: n
    }, jc(g), e;
  }
  function av(e) {
    return e ? (e = ni, e) : ni;
  }
  function iv(e, n, i, o, c, g) {
    c = av(c), o.context === null ? o.context = c : o.pendingContext = c, o = Mr(n), o.payload = { element: i }, g = g === void 0 ? null : g, g !== null && (o.callback = g), i = kr(e, o, n), i !== null && (dn(i, e, n), ls(i, e, n));
  }
  function sv(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Jf(e, n) {
    sv(e, n), (e = e.alternate) && sv(e, n);
  }
  function ov(e) {
    if (e.tag === 13) {
      var n = ti(e, 67108864);
      n !== null && dn(n, e, 67108864), Jf(e, 67108864);
    }
  }
  var Cl = !0;
  function y2(e, n, i, o) {
    var c = H.T;
    H.T = null;
    var g = te.p;
    try {
      te.p = 2, Kf(e, n, i, o);
    } finally {
      te.p = g, H.T = c;
    }
  }
  function b2(e, n, i, o) {
    var c = H.T;
    H.T = null;
    var g = te.p;
    try {
      te.p = 8, Kf(e, n, i, o);
    } finally {
      te.p = g, H.T = c;
    }
  }
  function Kf(e, n, i, o) {
    if (Cl) {
      var c = Wf(o);
      if (c === null)
        Bf(
          e,
          n,
          o,
          wl,
          i
        ), uv(e, o);
      else if (S2(
        c,
        e,
        n,
        i,
        o
      ))
        o.stopPropagation();
      else if (uv(e, o), n & 4 && -1 < _2.indexOf(e)) {
        for (; c !== null; ) {
          var g = Fa(c);
          if (g !== null)
            switch (g.tag) {
              case 3:
                if (g = g.stateNode, g.current.memoizedState.isDehydrated) {
                  var C = bn(g.pendingLanes);
                  if (C !== 0) {
                    var N = g;
                    for (N.pendingLanes |= 2, N.entangledLanes |= 2; C; ) {
                      var R = 1 << 31 - Ft(C);
                      N.entanglements[1] |= R, C &= ~R;
                    }
                    Jn(g), (Qe & 6) === 0 && (ll = Ce() + 500, ws(0));
                  }
                }
                break;
              case 13:
                N = ti(g, 2), N !== null && dn(N, g, 2), cl(), Jf(g, 2);
            }
          if (g = Wf(o), g === null && Bf(
            e,
            n,
            o,
            wl,
            i
          ), g === c) break;
          c = g;
        }
        c !== null && o.stopPropagation();
      } else
        Bf(
          e,
          n,
          o,
          null,
          i
        );
    }
  }
  function Wf(e) {
    return e = rc(e), ed(e);
  }
  var wl = null;
  function ed(e) {
    if (wl = null, e = qa(e), e !== null) {
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
    return wl = e, null;
  }
  function lv(e) {
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
        switch (we()) {
          case $e:
            return 2;
          case de:
            return 8;
          case le:
          case Ge:
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
  var td = !1, Gr = null, Vr = null, Yr = null, Rs = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), Xr = [], _2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function uv(e, n) {
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
  function zs(e, n, i, o, c, g) {
    return e === null || e.nativeEvent !== g ? (e = {
      blockedOn: n,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: g,
      targetContainers: [c]
    }, n !== null && (n = Fa(n), n !== null && ov(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function S2(e, n, i, o, c) {
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
        var g = c.pointerId;
        return Rs.set(
          g,
          zs(
            Rs.get(g) || null,
            e,
            n,
            i,
            o,
            c
          )
        ), !0;
      case "gotpointercapture":
        return g = c.pointerId, js.set(
          g,
          zs(
            js.get(g) || null,
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
  function cv(e) {
    var n = qa(e.target);
    if (n !== null) {
      var i = u(n);
      if (i !== null) {
        if (n = i.tag, n === 13) {
          if (n = f(i), n !== null) {
            e.blockedOn = n, pb(e.priority, function() {
              if (i.tag === 13) {
                var o = fn();
                o = Vu(o);
                var c = ti(i, o);
                c !== null && dn(c, i, o), Jf(i, o);
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
  function Al(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = Wf(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(
          i.type,
          i
        );
        nc = o, i.target.dispatchEvent(o), nc = null;
      } else
        return n = Fa(i), n !== null && ov(n), e.blockedOn = i, !1;
      n.shift();
    }
    return !0;
  }
  function fv(e, n, i) {
    Al(e) && i.delete(n);
  }
  function x2() {
    td = !1, Gr !== null && Al(Gr) && (Gr = null), Vr !== null && Al(Vr) && (Vr = null), Yr !== null && Al(Yr) && (Yr = null), Rs.forEach(fv), js.forEach(fv);
  }
  function Tl(e, n) {
    e.blockedOn === n && (e.blockedOn = null, td || (td = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      x2
    )));
  }
  var Ol = null;
  function dv(e) {
    Ol !== e && (Ol = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        Ol === e && (Ol = null);
        for (var n = 0; n < e.length; n += 3) {
          var i = e[n], o = e[n + 1], c = e[n + 2];
          if (typeof o != "function") {
            if (ed(o || i) === null)
              continue;
            break;
          }
          var g = Fa(i);
          g !== null && (e.splice(n, 3), n -= 3, Wc(
            g,
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
      return Tl(R, e);
    }
    Gr !== null && Tl(Gr, e), Vr !== null && Tl(Vr, e), Yr !== null && Tl(Yr, e), Rs.forEach(n), js.forEach(n);
    for (var i = 0; i < Xr.length; i++) {
      var o = Xr[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Xr.length && (i = Xr[0], i.blockedOn === null); )
      cv(i), i.blockedOn === null && Xr.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (o = 0; o < i.length; o += 3) {
        var c = i[o], g = i[o + 1], C = c[$t] || null;
        if (typeof g == "function")
          C || dv(i);
        else if (C) {
          var N = null;
          if (g && g.hasAttribute("formAction")) {
            if (c = g, C = g[$t] || null)
              N = C.formAction;
            else if (ed(c) !== null) continue;
          } else N = C.action;
          typeof N == "function" ? i[o + 1] = N : (i.splice(o, 3), o -= 3), dv(i);
        }
      }
  }
  function nd(e) {
    this._internalRoot = e;
  }
  Nl.prototype.render = nd.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var i = n.current, o = fn();
    iv(i, o, e, n, null, null);
  }, Nl.prototype.unmount = nd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      iv(e.current, 2, null, e, null, null), cl(), n[Ha] = null;
    }
  };
  function Nl(e) {
    this._internalRoot = e;
  }
  Nl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Nh();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < Xr.length && n !== 0 && n < Xr[i].priority; i++) ;
      Xr.splice(i, 0, e), i === 0 && cv(e);
    }
  };
  var hv = r.version;
  if (hv !== "19.1.1")
    throw Error(
      s(
        527,
        hv,
        "19.1.1"
      )
    );
  te.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = h(n), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var E2 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Dl.isDisabled && Dl.supportsFiber)
      try {
        tr = Dl.inject(
          E2
        ), mt = Dl;
      } catch {
      }
  }
  return Us.createRoot = function(e, n) {
    if (!l(e)) throw Error(s(299));
    var i = !1, o = "", c = Nm, g = Dm, C = Mm, N = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (g = n.onCaughtError), n.onRecoverableError !== void 0 && (C = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (N = n.unstable_transitionCallbacks)), n = rv(
      e,
      1,
      !1,
      null,
      null,
      i,
      o,
      c,
      g,
      C,
      N,
      null
    ), e[Ha] = n.current, If(e), new nd(n);
  }, Us.hydrateRoot = function(e, n, i) {
    if (!l(e)) throw Error(s(299));
    var o = !1, c = "", g = Nm, C = Dm, N = Mm, R = null, q = null;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (c = i.identifierPrefix), i.onUncaughtError !== void 0 && (g = i.onUncaughtError), i.onCaughtError !== void 0 && (C = i.onCaughtError), i.onRecoverableError !== void 0 && (N = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (R = i.unstable_transitionCallbacks), i.formState !== void 0 && (q = i.formState)), n = rv(
      e,
      1,
      !0,
      n,
      i ?? null,
      o,
      c,
      g,
      C,
      N,
      R,
      q
    ), n.context = av(null), i = n.current, o = fn(), o = Vu(o), c = Mr(o), c.callback = null, kr(i, c, o), i = o, n.current.lanes = i, qi(n, i), Jn(n), e[Ha] = n.current, If(e), new Nl(n);
  }, Us.version = "19.1.1", Us;
}
var Ov;
function W2() {
  if (Ov) return sd.exports;
  Ov = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), sd.exports = K2(), sd.exports;
}
var eS = W2();
const Nv = /* @__PURE__ */ A0(eS);
var tS = Object.defineProperty, nS = (t, r, a) => r in t ? tS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, rS = (t, r, a) => nS(t, r + "", a);
class O0 extends Error {
  constructor(r, a) {
    super(r), rS(this, "data"), this.data = a;
  }
  toString() {
    return this.message;
  }
}
async function aS(t, r) {
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
    throw new O0(u.statusText, u);
  await a.getCharacters();
}
async function iS(t, r) {
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
    throw new O0(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var sS = Object.defineProperty, oS = (t, r, a) => r in t ? sS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, Dv = (t, r, a) => oS(t, typeof r != "symbol" ? r + "" : r, a);
class N0 {
  constructor(r, a) {
    Dv(this, "settingsKey"), Dv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = a;
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
      let h = function(m, y) {
        let _ = !1;
        for (const b of Object.keys(y))
          m[b] === void 0 ? (m[b] = y[b], _ = !0) : typeof y[b] == "object" && y[b] !== null && (m[b] = m[b] || {}, h(m[b], y[b]) && (_ = !0));
        return _;
      };
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), l && l !== "*" && u.formatVersion !== l && (p.formatVersion.changed = !0, p.formatVersion.new = l, u.formatVersion = l), (h(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(a)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), l && !u.formatVersion && (u.formatVersion = l, p.formatVersion.changed = !0, p.formatVersion.new = l);
      let h = structuredClone(u), m = u.formatVersion;
      try {
        let y;
        do {
          y = !1;
          let _ = a.find((b) => b.from === m);
          if (_ && _.to > m)
            h = await _.action(h), m = _.to, h.formatVersion = _.to, y = !0;
          else
            for (const b of a)
              if (b.from === "*" && b.to > m && m !== b.to) {
                h = await b.action(h), m = b.to, h.formatVersion = b.to, y = !0;
                break;
              }
        } while (y);
        if (m !== u.formatVersion) {
          p.formatVersion.changed = !0, p.formatVersion.new = m;
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
  return Array.isArray ? Array.isArray(t) : k0(t) === "[object Array]";
}
function lS(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function uS(t) {
  return t == null ? "" : lS(t);
}
function Kn(t) {
  return typeof t == "string";
}
function D0(t) {
  return typeof t == "number";
}
function cS(t) {
  return t === !0 || t === !1 || fS(t) && k0(t) == "[object Boolean]";
}
function M0(t) {
  return typeof t == "object";
}
function fS(t) {
  return M0(t) && t !== null;
}
function gn(t) {
  return t != null;
}
function cd(t) {
  return !t.trim().length;
}
function k0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const dS = "Incorrect 'index' type", hS = (t) => `Invalid value for key ${t}`, pS = (t) => `Pattern length exceeds max of ${t}.`, mS = (t) => `Missing ${t} property in key`, gS = (t) => `Property 'weight' in key '${t}' must be a positive integer`, Mv = Object.prototype.hasOwnProperty;
class vS {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let a = 0;
    r.forEach((s) => {
      let l = R0(s);
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
function R0(t) {
  let r = null, a = null, s = null, l = 1, u = null;
  if (Kn(t) || Er(t))
    s = t, r = kv(t), a = jd(t);
  else {
    if (!Mv.call(t, "name"))
      throw new Error(mS("name"));
    const f = t.name;
    if (s = f, Mv.call(t, "weight") && (l = t.weight, l <= 0))
      throw new Error(gS(f));
    r = kv(f), a = jd(f), u = t.getFn;
  }
  return { path: r, id: a, weight: l, src: s, getFn: u };
}
function kv(t) {
  return Er(t) ? t : t.split(".");
}
function jd(t) {
  return Er(t) ? t.join(".") : t;
}
function yS(t, r) {
  let a = [], s = !1;
  const l = (u, f, p) => {
    if (gn(u))
      if (!f[p])
        a.push(u);
      else {
        let h = f[p];
        const m = u[h];
        if (!gn(m))
          return;
        if (p === f.length - 1 && (Kn(m) || D0(m) || cS(m)))
          a.push(uS(m));
        else if (Er(m)) {
          s = !0;
          for (let y = 0, _ = m.length; y < _; y += 1)
            l(m[y], f, p + 1);
        } else f.length && l(m, f, p + 1);
      }
  };
  return l(t, Kn(r) ? r.split(".") : r, 0), s ? a : a[0];
}
const bS = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, _S = {
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
}, SS = {
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
}, xS = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: yS,
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
  ..._S,
  ...bS,
  ...SS,
  ...xS
};
const ES = /[^ ]+/g;
function CS(t = 1, r = 3) {
  const a = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(l) {
      const u = l.match(ES).length;
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
class sh {
  constructor({
    getFn: r = De.getFn,
    fieldNormWeight: a = De.fieldNormWeight
  } = {}) {
    this.norm = CS(a, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    if (!gn(r) || cd(r))
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
      if (gn(f)) {
        if (Er(f)) {
          let p = [];
          const h = [{ nestedArrIndex: -1, value: f }];
          for (; h.length; ) {
            const { nestedArrIndex: m, value: y } = h.pop();
            if (gn(y))
              if (Kn(y) && !cd(y)) {
                let _ = {
                  v: y,
                  i: m,
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
        } else if (Kn(f) && !cd(f)) {
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
function j0(t, r, { getFn: a = De.getFn, fieldNormWeight: s = De.fieldNormWeight } = {}) {
  const l = new sh({ getFn: a, fieldNormWeight: s });
  return l.setKeys(t.map(R0)), l.setSources(r), l.create(), l;
}
function wS(t, { getFn: r = De.getFn, fieldNormWeight: a = De.fieldNormWeight } = {}) {
  const { keys: s, records: l } = t, u = new sh({ getFn: r, fieldNormWeight: a });
  return u.setKeys(s), u.setIndexRecords(l), u;
}
function Ml(t, {
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
function AS(t = [], r = De.minMatchCharLength) {
  let a = [], s = -1, l = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (l = u - 1, l - s + 1 >= r && a.push([s, l]), s = -1);
  }
  return t[u - 1] && u - s >= r && a.push([s, u - 1]), a;
}
const Ma = 32;
function TS(t, r, a, {
  location: s = De.location,
  distance: l = De.distance,
  threshold: u = De.threshold,
  findAllMatches: f = De.findAllMatches,
  minMatchCharLength: p = De.minMatchCharLength,
  includeMatches: h = De.includeMatches,
  ignoreLocation: m = De.ignoreLocation
} = {}) {
  if (r.length > Ma)
    throw new Error(pS(Ma));
  const y = r.length, _ = t.length, b = Math.max(0, Math.min(s, _));
  let v = u, d = b;
  const S = p > 1 || h, E = S ? Array(_) : [];
  let O;
  for (; (O = t.indexOf(r, d)) > -1; ) {
    let k = Ml(r, {
      currentLocation: O,
      expectedLocation: b,
      distance: l,
      ignoreLocation: m
    });
    if (v = Math.min(k, v), d = O + y, S) {
      let U = 0;
      for (; U < y; )
        E[O + U] = 1, U += 1;
    }
  }
  d = -1;
  let w = [], D = 1, x = y + _;
  const T = 1 << y - 1;
  for (let k = 0; k < y; k += 1) {
    let U = 0, Y = x;
    for (; U < Y; )
      Ml(r, {
        errors: k,
        currentLocation: b + Y,
        expectedLocation: b,
        distance: l,
        ignoreLocation: m
      }) <= v ? U = Y : x = Y, Y = Math.floor((x - U) / 2 + U);
    x = Y;
    let B = Math.max(1, b - Y + 1), G = f ? _ : Math.min(b + Y, _) + y, $ = Array(G + 2);
    $[G + 1] = (1 << k) - 1;
    for (let he = G; he >= B; he -= 1) {
      let xe = he - 1, H = a[t.charAt(xe)];
      if (S && (E[xe] = +!!H), $[he] = ($[he + 1] << 1 | 1) & H, k && ($[he] |= (w[he + 1] | w[he]) << 1 | 1 | w[he + 1]), $[he] & T && (D = Ml(r, {
        errors: k,
        currentLocation: xe,
        expectedLocation: b,
        distance: l,
        ignoreLocation: m
      }), D <= v)) {
        if (v = D, d = xe, d <= b)
          break;
        B = Math.max(1, 2 * b - d);
      }
    }
    if (Ml(r, {
      errors: k + 1,
      currentLocation: b,
      expectedLocation: b,
      distance: l,
      ignoreLocation: m
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
    const k = AS(E, p);
    k.length ? h && (M.indices = k) : M.isMatch = !1;
  }
  return M;
}
function OS(t) {
  let r = {};
  for (let a = 0, s = t.length; a < s; a += 1) {
    const l = t.charAt(a);
    r[l] = (r[l] || 0) | 1 << s - a - 1;
  }
  return r;
}
const Eu = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class z0 {
  constructor(r, {
    location: a = De.location,
    threshold: s = De.threshold,
    distance: l = De.distance,
    includeMatches: u = De.includeMatches,
    findAllMatches: f = De.findAllMatches,
    minMatchCharLength: p = De.minMatchCharLength,
    isCaseSensitive: h = De.isCaseSensitive,
    ignoreDiacritics: m = De.ignoreDiacritics,
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
      ignoreDiacritics: m,
      ignoreLocation: y
    }, r = h ? r : r.toLowerCase(), r = m ? Eu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const _ = (v, d) => {
      this.chunks.push({
        pattern: v,
        alphabet: OS(v),
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
    if (r = a ? r : r.toLowerCase(), r = s ? Eu(r) : r, this.pattern === r) {
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
      minMatchCharLength: m,
      ignoreLocation: y
    } = this.options;
    let _ = [], b = 0, v = !1;
    this.chunks.forEach(({ pattern: S, alphabet: E, startIndex: O }) => {
      const { isMatch: w, score: D, indices: x } = TS(r, S, E, {
        location: u + O,
        distance: f,
        threshold: p,
        findAllMatches: h,
        minMatchCharLength: m,
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
    return Rv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return Rv(r, this.singleRegex);
  }
  search() {
  }
}
function Rv(t, r) {
  const a = t.match(r);
  return a ? a[1] : null;
}
class NS extends ra {
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
class DS extends ra {
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
class MS extends ra {
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
class kS extends ra {
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
class RS extends ra {
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
class jS extends ra {
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
class L0 extends ra {
  constructor(r, {
    location: a = De.location,
    threshold: s = De.threshold,
    distance: l = De.distance,
    includeMatches: u = De.includeMatches,
    findAllMatches: f = De.findAllMatches,
    minMatchCharLength: p = De.minMatchCharLength,
    isCaseSensitive: h = De.isCaseSensitive,
    ignoreDiacritics: m = De.ignoreDiacritics,
    ignoreLocation: y = De.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new z0(r, {
      location: a,
      threshold: s,
      distance: l,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: m,
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
class P0 extends ra {
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
const zd = [
  NS,
  P0,
  MS,
  kS,
  jS,
  RS,
  DS,
  L0
], jv = zd.length, zS = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, LS = "|";
function PS(t, r = {}) {
  return t.split(LS).map((a) => {
    let s = a.trim().split(zS).filter((u) => u && !!u.trim()), l = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const p = s[u];
      let h = !1, m = -1;
      for (; !h && ++m < jv; ) {
        const y = zd[m];
        let _ = y.isMultiMatch(p);
        _ && (l.push(new y(_, r)), h = !0);
      }
      if (!h)
        for (m = -1; ++m < jv; ) {
          const y = zd[m];
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
const IS = /* @__PURE__ */ new Set([L0.type, P0.type]);
class BS {
  constructor(r, {
    isCaseSensitive: a = De.isCaseSensitive,
    ignoreDiacritics: s = De.ignoreDiacritics,
    includeMatches: l = De.includeMatches,
    minMatchCharLength: u = De.minMatchCharLength,
    ignoreLocation: f = De.ignoreLocation,
    findAllMatches: p = De.findAllMatches,
    location: h = De.location,
    threshold: m = De.threshold,
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
      threshold: m,
      distance: y
    }, r = a ? r : r.toLowerCase(), r = s ? Eu(r) : r, this.pattern = r, this.query = PS(this.pattern, this.options);
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
    r = l ? r : r.toLowerCase(), r = u ? Eu(r) : r;
    let f = 0, p = [], h = 0;
    for (let m = 0, y = a.length; m < y; m += 1) {
      const _ = a[m];
      p.length = 0, f = 0;
      for (let b = 0, v = _.length; b < v; b += 1) {
        const d = _[b], { isMatch: S, indices: E, score: O } = d.search(r);
        if (S) {
          if (f += 1, h += O, s) {
            const w = d.constructor.type;
            IS.has(w) ? p = [...p, ...E] : p.push(E);
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
const Ld = [];
function US(...t) {
  Ld.push(...t);
}
function Pd(t, r) {
  for (let a = 0, s = Ld.length; a < s; a += 1) {
    let l = Ld[a];
    if (l.condition(t, r))
      return new l(t, r);
  }
  return new z0(t, r);
}
const Cu = {
  AND: "$and",
  OR: "$or"
}, Id = {
  PATH: "$path",
  PATTERN: "$val"
}, Bd = (t) => !!(t[Cu.AND] || t[Cu.OR]), HS = (t) => !!t[Id.PATH], qS = (t) => !Er(t) && M0(t) && !Bd(t), zv = (t) => ({
  [Cu.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function I0(t, r, { auto: a = !0 } = {}) {
  const s = (l) => {
    let u = Object.keys(l);
    const f = HS(l);
    if (!f && u.length > 1 && !Bd(l))
      return s(zv(l));
    if (qS(l)) {
      const h = f ? l[Id.PATH] : u[0], m = f ? l[Id.PATTERN] : l[h];
      if (!Kn(m))
        throw new Error(hS(h));
      const y = {
        keyId: jd(h),
        pattern: m
      };
      return a && (y.searcher = Pd(m, r)), y;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((h) => {
      const m = l[h];
      Er(m) && m.forEach((y) => {
        p.children.push(s(y));
      });
    }), p;
  };
  return Bd(t) || (t = zv(t)), s(t);
}
function FS(t, { ignoreFieldNorm: r = De.ignoreFieldNorm }) {
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
function ZS(t, r) {
  const a = t.matches;
  r.matches = [], gn(a) && a.forEach((s) => {
    if (!gn(s.indices) || !s.indices.length)
      return;
    const { indices: l, value: u } = s;
    let f = {
      indices: l,
      value: u
    };
    s.key && (f.key = s.key.src), s.idx > -1 && (f.refIndex = s.idx), r.matches.push(f);
  });
}
function GS(t, r) {
  r.score = t.score;
}
function VS(t, r, {
  includeMatches: a = De.includeMatches,
  includeScore: s = De.includeScore
} = {}) {
  const l = [];
  return a && l.push(ZS), s && l.push(GS), t.map((u) => {
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
    this.options = { ...De, ...a }, this.options.useExtendedSearch, this._keyStore = new vS(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, a) {
    if (this._docs = r, a && !(a instanceof sh))
      throw new Error(dS);
    this._myIndex = a || j0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    gn(r) && (this._docs.push(r), this._myIndex.add(r));
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
    return FS(h, { ignoreFieldNorm: p }), u && h.sort(f), D0(a) && a > -1 && (h = h.slice(0, a)), VS(h, this._docs, {
      includeMatches: s,
      includeScore: l
    });
  }
  _searchStringList(r) {
    const a = Pd(r, this.options), { records: s } = this._myIndex, l = [];
    return s.forEach(({ v: u, i: f, n: p }) => {
      if (!gn(u))
        return;
      const { isMatch: h, score: m, indices: y } = a.searchIn(u);
      h && l.push({
        item: u,
        idx: f,
        matches: [{ score: m, value: u, norm: p, indices: y }]
      });
    }), l;
  }
  _searchLogical(r) {
    const a = I0(r, this.options), s = (p, h, m) => {
      if (!p.children) {
        const { keyId: _, searcher: b } = p, v = this._findMatches({
          key: this._keyStore.get(_),
          value: this._myIndex.getValueForItemAtKeyId(h, _),
          searcher: b
        });
        return v && v.length ? [
          {
            idx: m,
            item: h,
            matches: v
          }
        ] : [];
      }
      const y = [];
      for (let _ = 0, b = p.children.length; _ < b; _ += 1) {
        const v = p.children[_], d = s(v, h, m);
        if (d.length)
          y.push(...d);
        else if (p.operator === Cu.AND)
          return [];
      }
      return y;
    }, l = this._myIndex.records, u = {}, f = [];
    return l.forEach(({ $: p, i: h }) => {
      if (gn(p)) {
        let m = s(a, p, h);
        m.length && (u[h] || (u[h] = { idx: h, item: p, matches: [] }, f.push(u[h])), m.forEach(({ matches: y }) => {
          u[h].matches.push(...y);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const a = Pd(r, this.options), { keys: s, records: l } = this._myIndex, u = [];
    return l.forEach(({ $: f, i: p }) => {
      if (!gn(f))
        return;
      let h = [];
      s.forEach((m, y) => {
        h.push(
          ...this._findMatches({
            key: m,
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
    let l = [];
    if (Er(a))
      a.forEach(({ v: u, i: f, n: p }) => {
        if (!gn(u))
          return;
        const { isMatch: h, score: m, indices: y } = s.searchIn(u);
        h && l.push({
          score: m,
          key: r,
          value: u,
          idx: f,
          norm: p,
          indices: y
        });
      });
    else {
      const { v: u, n: f } = a, { isMatch: p, score: h, indices: m } = s.searchIn(u);
      p && l.push({ score: h, key: r, value: u, norm: f, indices: m });
    }
    return l;
  }
}
Ui.version = "7.1.0";
Ui.createIndex = j0;
Ui.parseIndex = wS;
Ui.config = De;
Ui.parseQuery = I0;
US(BS);
async function YS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function _e(t, r, { escapeHtml: a = !0 } = {}) {
  await YS("echo", { severity: t, escapeHtml: (!!a).toString() }, r);
}
function fd(t) {
  return O2(t);
}
function Lv(t, r) {
  return A2(t, r);
}
function kl(t, r, a) {
  return T2(t, r, a);
}
function XS(t, r, a) {
  return j2(t, r, a);
}
function $S(t, r) {
  return z2(t, r);
}
function QS(t, {
  customStoryString: r,
  customInstructSettings: a
} = {}) {
  return w2(t, { customStoryString: r, customInstructSettings: a });
}
function Aa(t) {
  return H2(t);
}
function JS() {
  return {
    prompt: Ps[Is.prompt],
    interval: Ps[Is.interval],
    position: Ps[Is.position],
    depth: Ps[Is.depth],
    role: Ps[Is.role]
  };
}
function KS(t, r) {
  return F2(t, r);
}
function WS({
  name2: t,
  charDescription: r,
  charPersonality: a,
  Scenario: s,
  worldInfoBefore: l,
  worldInfoAfter: u,
  bias: f,
  type: p,
  quietPrompt: h,
  quietImage: m,
  extensionPrompts: y,
  cyclePrompt: _,
  systemPromptOverride: b,
  jailbreakPromptOverride: v,
  personaDescription: d,
  messages: S,
  messageExamples: E
}, O) {
  return q2(
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
      quietImage: m,
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
function ex(t) {
  return P2(t);
}
function tx(t) {
  return I2(t);
}
function nx(t, r, {
  characterOverride: a,
  isMarkdown: s,
  isPrompt: l,
  isEdit: u,
  depth: f
}) {
  return Z2(t, r, { characterOverride: a, isMarkdown: s, isPrompt: l, isEdit: u, depth: f });
}
async function rx(t, r) {
  return await L2(t, r);
}
function Pv(t, {
  wiFormat: r
} = {}) {
  return B2(t, { wiFormat: r });
}
function Hs(t) {
  return U2(t);
}
function ax(t, r) {
  return M2(t, r);
}
class ix {
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
var sx = Object.defineProperty, ox = (t, r, a) => r in t ? sx(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, Rl = (t, r, a) => ox(t, typeof r != "symbol" ? r + "" : r, a);
class lx {
  constructor(r) {
    Rl(this, "messages", []), Rl(this, "tokenizer"), Rl(this, "maxContext"), Rl(this, "currentTokenCount", 0), this.tokenizer = new ix(), this.maxContext = r;
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
      const h = a[p], m = s[p];
      if (this.currentTokenCount + u + m <= this.maxContext)
        f.unshift(h), u += m;
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
async function B0(t, {
  targetCharacterId: r,
  presetName: a,
  instructName: s,
  contextName: l,
  syspromptName: u,
  maxContext: f,
  includeNames: p,
  ignoreCharacterFields: h,
  ignoreAuthorNote: m,
  ignoreWorldInfo: y,
  messageIndexesBetween: _
} = {}) {
  var b, v, d, S, E, O, w, D, x, T, M, k, U, Y;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const B = SillyTavern.getContext();
  let { description: G, personality: $, persona: ue, scenario: he, mesExamples: xe, system: H, jailbreak: te } = h ? {
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
  const ce = t === "textgenerationwebui" ? (b = B.getPresetManager("instruct")) == null ? void 0 : b.getCompletionPresetByName(s) : void 0, je = !!(ce != null && ce.enabled);
  let j = Lv(xe, je);
  function J() {
    var de, le;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !a)
      return fd();
    if (typeof f == "number")
      return f;
    let Ge;
    if (t === "textgenerationwebui") {
      const Ae = (de = B.getPresetManager("textgenerationwebui")) == null ? void 0 : de.getCompletionPresetByName(a);
      Ge = Ae?.max_length;
    } else {
      const Ae = (le = B.getPresetManager("openai")) == null ? void 0 : le.getCompletionPresetByName(a);
      Ge = Ae?.openai_max_context;
    }
    return typeof Ge == "number" ? Ge : fd();
  }
  let ae = [];
  const se = J();
  if (se <= 0)
    return { result: [], warnings: ae };
  const oe = new lx(se), Pe = B.ToolManager.isToolCallingSupported(), V = _?.start ?? 0, me = _ != null && _.end ? _.end + 1 : void 0;
  let ge = V === -1 && me === 0 ? [] : B.chat.slice(V, me).filter((de) => {
    var le;
    return !de.is_system || Pe && Array.isArray((le = de.extra) == null ? void 0 : le.tool_invocations);
  });
  ge = await Promise.all(
    ge.map(async (de, le) => {
      var Ge, Ae;
      let Fe = de.mes, Ar = de.is_user ? gv.USER_INPUT : gv.AI_OUTPUT, tr = { isPrompt: !0, depth: ge.length - le - 1 }, mt = nx(Fe, Ar, tr);
      return mt = await rx(de, mt), (Ge = de?.extra) != null && Ge.append_title && (Ae = de?.extra) != null && Ae.title && (mt = `${mt}

${de.extra.title}`), {
        ...de,
        mes: mt,
        index: le
      };
    })
  );
  const Ye = ge.map((de) => k2 ? `${de.name}: ${de.mes}` : de.mes).reverse(), { worldInfoString: it, worldInfoBefore: Re, worldInfoAfter: P, worldInfoExamples: re, worldInfoDepth: ne, anBefore: Ee, anAfter: ze } = y ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await B.getWorldInfoPrompt(Ye, se, !1);
  for (const de of re) {
    const le = de.content;
    if (le.length === 0)
      continue;
    const Ge = kl(le, _r, Qr), Ae = Lv(Ge, je);
    de.position === R2.before ? j.unshift(...Ae) : j.push(...Ae);
  }
  function Ce() {
    const de = [];
    for (let le = ge.length - 1; le >= 0; le--) {
      const Ge = ge[le], Ae = Ge.name === "System" && !Ge.is_user ? "system" : Ge.is_user ? "user" : "assistant";
      de.unshift({
        role: Ae,
        content: p && Ae != "system" ? `${Ge.name}: ${Ge.mes}` : Ge.mes,
        source: Ge
      });
    }
    oe.addMany(de);
  }
  if (t === "textgenerationwebui") {
    const de = [...j];
    j && (j = XS(j, _r, Qr));
    const le = (v = B.getPresetManager("sysprompt")) == null ? void 0 : v.getCompletionPresetByName(u);
    le && (H = B.powerUserSettings.prefer_character_prompt && H ? H : kl(le.content, _r, Qr), H = je ? $S(
      B.substituteParams(H, _r, Qr, le.content),
      ce
    ) : H);
    const Ge = {
      description: G,
      personality: $,
      persona: B.powerUserSettings.persona_description_position == pv.IN_PROMPT ? ue : "",
      scenario: he,
      system: H,
      char: Qr,
      user: _r,
      wiBefore: Re,
      wiAfter: P,
      loreBefore: Re,
      loreAfter: P,
      mesExamples: j.join(""),
      mesExamplesRaw: de.join("")
    }, Ae = (d = B.getPresetManager("context")) == null ? void 0 : d.getCompletionPresetByName(l);
    let Fe = QS(Ge, {
      customInstructSettings: ce,
      customStoryString: Ae?.story_string
    });
    Fe && oe.add({ role: "system", content: Fe, ignoreInstruct: !0 }), Ce();
  } else {
    let de = function(Zt) {
      const Xt = yn.find((Ua) => Ua.identifier === Zt);
      if (Xt)
        return Xt;
      const _o = Fe.prompts.find((Ua) => Ua.identifier === Zt);
      if (_o)
        return _o;
    }, le = ex(ge), Ge = tx(j);
    async function Ae() {
      let [Zt, Xt] = await WS(
        {
          name2: Qr,
          charDescription: G,
          charPersonality: $,
          Scenario: he,
          worldInfoBefore: Re,
          worldInfoAfter: P,
          extensionPrompts: B.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: H,
          jailbreakPromptOverride: te,
          personaDescription: ue,
          messages: le,
          messageExamples: Ge
        },
        !1
      );
      oe.addMany(Zt);
    }
    if (!a)
      return ae.push("No preset name provided. Using default preset."), await Ae(), { result: oe.getMessages(), warnings: ae };
    const Fe = (S = B.getPresetManager("openai")) == null ? void 0 : S.getCompletionPresetByName(a);
    if (!Fe)
      return console.warn(`Preset not found: ${a}. Using current preset.`), ae.push(`Preset not found: ${a}. Using current preset.`), Ae(), { result: oe.getMessages(), warnings: ae };
    let Ar = (E = Fe.prompt_order) == null ? void 0 : E.find((Zt) => Zt.character_id === qt);
    if (!Ar && Fe.prompt_order && Fe.prompt_order.length > 0 && (Ar = Fe.prompt_order[Fe.prompt_order.length - 1]), !Ar)
      return console.warn(`No prompt order found for preset: ${a}. Using current preset.`), ae.push(`No prompt order found for preset: ${a}. Using current preset.`), Ae(), { result: oe.getMessages(), warnings: ae };
    const tr = he && Fe.scenario_format ? B.substituteParams(Fe.scenario_format) : "", mt = $ && Fe.personality_format ? B.substituteParams(Fe.personality_format) : "", Gn = B.substituteParams(Fe.group_nudge_prompt), Ft = Fe.impersonation_prompt ? B.substituteParams(Fe.impersonation_prompt) : "", yn = [];
    y || yn.push(
      {
        role: "system",
        content: Pv(Re, { wiFormat: Fe.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: Pv(P, { wiFormat: Fe.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || yn.push(
      { role: "system", content: G, identifier: "charDescription" },
      { role: "system", content: mt, identifier: "charPersonality" },
      { role: "system", content: tr, identifier: "scenario" }
    ), yn.push(
      { role: "system", content: Ft, identifier: "impersonate" },
      { role: "system", content: Gn, identifier: "groupNudge" }
    );
    const sa = B.extensionPrompts["1_memory"];
    sa && sa.value && yn.push({
      role: Aa(sa.role),
      content: sa.value,
      identifier: "summary",
      position: Hs(sa.position)
    });
    const oa = B.extensionPrompts["2_floating_prompt"];
    !m && oa && oa.value && yn.push({
      role: Aa(oa.role),
      content: oa.value,
      identifier: "authorsNote",
      position: Hs(oa.position)
    });
    const nr = B.extensionPrompts["3_vectors"];
    nr && nr.value && yn.push({
      role: "system",
      content: nr.value,
      identifier: "vectorsMemory",
      position: Hs(nr.position)
    });
    const Vn = B.extensionPrompts["4_vectors_data_bank"];
    Vn && Vn.value && yn.push({
      role: Aa(Vn.role),
      content: Vn.value,
      identifier: "vectorsDataBank",
      position: Hs(Vn.position)
    });
    const bn = B.extensionPrompts.chromadb;
    bn && bn.value && yn.push({
      role: "system",
      content: bn.value,
      identifier: "smartContext",
      position: Hs(bn.position)
    }), !h && B.powerUserSettings.persona_description && B.powerUserSettings.persona_description_position === pv.IN_PROMPT && yn.push({
      role: "system",
      content: B.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Ar.order.forEach((Zt) => {
      if (!Zt.enabled)
        return;
      const Xt = de(Zt.identifier);
      if (Xt && Xt.content) {
        oe.add({
          role: Xt.role ?? "system",
          content: B.substituteParams(Xt.content)
        });
        return;
      }
      Zt.identifier === "chatHistory" && Ce();
    });
  }
  const we = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const de in B.extensionPrompts)
    if (Object.hasOwn(B.extensionPrompts, de)) {
      const le = B.extensionPrompts[de];
      if (we.includes(de) || !B.extensionPrompts[de].value || ![wa.BEFORE_PROMPT, wa.IN_PROMPT].includes(le.position) || typeof le.filter == "function" && !await le.filter()) continue;
      const Ge = {
        role: Aa(le.role) ?? "system",
        content: le.value
      };
      if (le.position === wa.BEFORE_PROMPT)
        oe.insert(le.depth, Ge);
      else if (le.position === wa.IN_PROMPT) {
        const Ae = oe.getMessages();
        oe.insert(Ae.length - le.depth, Ge);
      }
    }
  for (const de of ne) {
    const le = oe.getMessages();
    oe.insert(le.length - de.depth, {
      role: Aa(de.role),
      content: de.entries.join(`
`)
    });
  }
  if (!h) {
    const de = KS(Hn, Number(qt));
    if (Hn && Array.isArray(de) && de.length > 0)
      de.filter((le) => le.text).forEach((le, Ge) => {
        const Ae = oe.getMessages();
        oe.insert(Ae.length - le.depth, { role: le.role, content: le.text });
      });
    else {
      const le = kl(
        (T = (x = (D = (w = (O = B.characters[qt]) == null ? void 0 : O.data) == null ? void 0 : w.extensions) == null ? void 0 : D.depth_prompt) == null ? void 0 : x.prompt) == null ? void 0 : T.trim(),
        _r,
        Qr
      ) || "";
      if (le) {
        const Ge = D2, Ae = ((Y = (U = (k = (M = B.characters[qt]) == null ? void 0 : M.data) == null ? void 0 : k.extensions) == null ? void 0 : U.depth_prompt) == null ? void 0 : Y.role) ?? N2, Fe = oe.getMessages();
        oe.insert(Fe.length - Ge, {
          role: Aa(Ae),
          content: le
        });
      }
    }
  }
  let $e = -1;
  if (!m) {
    const de = JS();
    if (de.prompt) {
      de.prompt = kl(de.prompt, _r, Qr);
      const le = { role: Aa(de.role), content: de.prompt };
      switch (de.position) {
        case wa.IN_PROMPT:
          oe.insert(1, le), $e = 1;
          break;
        case wa.IN_CHAT:
          $e = oe.getMessages().length - de.depth, oe.insert($e, le);
          break;
        case wa.BEFORE_PROMPT:
          oe.addFront(le), $e = 0;
          break;
      }
    }
  }
  return $e >= 0 && (Ee.length > 0 && (oe.insert($e, { role: "system", content: Ee.join(`
`) }), $e++), ze.length > 0 && oe.insert($e + 1, { role: "system", content: ze.join(`
`) })), { result: oe.getMessages(), warnings: ae };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Iv(t, r) {
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
    r % 2 ? Iv(Object(a), !0).forEach(function(s) {
      ux(t, s, a[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Iv(Object(a)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(a, s));
    });
  }
  return t;
}
function gu(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? gu = function(r) {
    return typeof r;
  } : gu = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, gu(t);
}
function ux(t, r, a) {
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
function cx(t, r) {
  if (t == null) return {};
  var a = {}, s = Object.keys(t), l, u;
  for (u = 0; u < s.length; u++)
    l = s[u], !(r.indexOf(l) >= 0) && (a[l] = t[l]);
  return a;
}
function fx(t, r) {
  if (t == null) return {};
  var a = cx(t, r), s, l;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (l = 0; l < u.length; l++)
      s = u[l], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (a[s] = t[s]);
  }
  return a;
}
var dx = "1.15.6";
function xr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var wr = xr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), po = xr(/Edge/i), Bv = xr(/firefox/i), no = xr(/safari/i) && !xr(/chrome/i) && !xr(/android/i), oh = xr(/iP(ad|od|hone)/i), U0 = xr(/chrome/i) && xr(/android/i), H0 = {
  capture: !1,
  passive: !1
};
function qe(t, r, a) {
  t.addEventListener(r, a, !wr && H0);
}
function He(t, r, a) {
  t.removeEventListener(r, a, !wr && H0);
}
function wu(t, r) {
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
function q0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Un(t, r, a, s) {
  if (t) {
    a = a || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === a && wu(t, r) : wu(t, r)) || s && t === a)
        return t;
      if (t === a) break;
    } while (t = q0(t));
  }
  return null;
}
var Uv = /\s+/g;
function pn(t, r, a) {
  if (t && r)
    if (t.classList)
      t.classList[a ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(Uv, " ").replace(" " + r + " ", " ");
      t.className = (s + (a ? " " + r : "")).replace(Uv, " ");
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
function F0(t, r, a) {
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
    var u, f, p, h, m, y, _;
    if (t !== window && t.parentNode && t !== Wn() ? (u = t.getBoundingClientRect(), f = u.top, p = u.left, h = u.bottom, m = u.right, y = u.height, _ = u.width) : (f = 0, p = 0, h = window.innerHeight, m = window.innerWidth, y = window.innerHeight, _ = window.innerWidth), (r || a) && t !== window && (l = l || t.parentNode, !wr))
      do
        if (l && l.getBoundingClientRect && (Oe(l, "transform") !== "none" || a && Oe(l, "position") !== "static")) {
          var b = l.getBoundingClientRect();
          f -= b.top + parseInt(Oe(l, "border-top-width")), p -= b.left + parseInt(Oe(l, "border-left-width")), h = f + u.height, m = p + u.width;
          break;
        }
      while (l = l.parentNode);
    if (s && t !== window) {
      var v = Li(l || t), d = v && v.a, S = v && v.d;
      v && (f /= S, p /= d, _ /= d, y /= S, h = f + y, m = p + _);
    }
    return {
      top: f,
      left: p,
      bottom: h,
      right: m,
      width: _,
      height: y
    };
  }
}
function Hv(t, r, a) {
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
function lh(t, r) {
  for (var a = t.lastElementChild; a && (a === Ne.ghost || Oe(a, "display") === "none" || r && !wu(a, r)); )
    a = a.previousElementSibling;
  return a || null;
}
function Dn(t, r) {
  var a = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Ne.clone && (!r || wu(t, r)) && a++;
  return a;
}
function qv(t) {
  var r = 0, a = 0, s = Wn();
  if (t)
    do {
      var l = Li(t), u = l.a, f = l.d;
      r += t.scrollLeft * u, a += t.scrollTop * f;
    } while (t !== s && (t = t.parentNode));
  return [r, a];
}
function hx(t, r) {
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
function px(t, r) {
  if (t && r)
    for (var a in r)
      r.hasOwnProperty(a) && (t[a] = r[a]);
  return t;
}
function dd(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var ro;
function Z0(t, r) {
  return function() {
    if (!ro) {
      var a = arguments, s = this;
      a.length === 1 ? t.call(s, a[0]) : t.apply(s, a), ro = setTimeout(function() {
        ro = void 0;
      }, r);
    }
  };
}
function mx() {
  clearTimeout(ro), ro = void 0;
}
function G0(t, r, a) {
  t.scrollLeft += r, t.scrollTop += a;
}
function V0(t) {
  var r = window.Polymer, a = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : a ? a(t).clone(!0)[0] : t.cloneNode(!0);
}
function Y0(t, r, a) {
  var s = {};
  return Array.from(t.children).forEach(function(l) {
    var u, f, p, h;
    if (!(!Un(l, r.draggable, t, !1) || l.animated || l === a)) {
      var m = xt(l);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, m.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, m.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, m.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, m.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var nn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function gx() {
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
      t.splice(hx(t, {
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
        var h = 0, m = p.target, y = m.fromRect, _ = xt(m), b = m.prevFromRect, v = m.prevToRect, d = p.rect, S = Li(m, !0);
        S && (_.top -= S.f, _.left -= S.e), m.toRect = _, m.thisAnimationDuration && dd(b, _) && !dd(y, _) && // Make sure animatingRect is on line between toRect & fromRect
        (d.top - _.top) / (d.left - _.left) === (y.top - _.top) / (y.left - _.left) && (h = yx(d, b, v, l.options)), dd(_, y) || (m.prevFromRect = y, m.prevToRect = _, h || (h = l.options.animation), l.animate(m, d, _, h)), h && (u = !0, f = Math.max(f, h), clearTimeout(m.animationResetTimer), m.animationResetTimer = setTimeout(function() {
          m.animationTime = 0, m.prevFromRect = null, m.fromRect = null, m.prevToRect = null, m.thisAnimationDuration = null;
        }, h), m.thisAnimationDuration = h);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, l, u, f) {
      if (f) {
        Oe(s, "transition", ""), Oe(s, "transform", "");
        var p = Li(this.el), h = p && p.a, m = p && p.d, y = (l.left - u.left) / (h || 1), _ = (l.top - u.top) / (m || 1);
        s.animatingX = !!y, s.animatingY = !!_, Oe(s, "transform", "translate3d(" + y + "px," + _ + "px,0)"), this.forRepaintDummy = vx(s), Oe(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), Oe(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          Oe(s, "transition", ""), Oe(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function vx(t) {
  return t.offsetWidth;
}
function yx(t, r, a, s) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - a.top, 2) + Math.pow(r.left - a.left, 2)) * s.animation;
}
var Ti = [], hd = {
  initializeByDefault: !0
}, mo = {
  mount: function(r) {
    for (var a in hd)
      hd.hasOwnProperty(a) && !(a in r) && (r[a] = hd[a]);
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
        var m = new p(r, a, r.options);
        m.sortable = r, m.options = r.options, r[h] = m, Cr(s, m.defaults);
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
function bx(t) {
  var r = t.sortable, a = t.rootEl, s = t.name, l = t.targetEl, u = t.cloneEl, f = t.toEl, p = t.fromEl, h = t.oldIndex, m = t.newIndex, y = t.oldDraggableIndex, _ = t.newDraggableIndex, b = t.originalEvent, v = t.putSortable, d = t.extraEventProperties;
  if (r = r || a && a[nn], !!r) {
    var S, E = r.options, O = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !wr && !po ? S = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(s, !0, !0)), S.to = f || a, S.from = p || a, S.item = l || a, S.clone = u, S.oldIndex = h, S.newIndex = m, S.oldDraggableIndex = y, S.newDraggableIndex = _, S.originalEvent = b, S.pullMode = v ? v.lastPutMode : void 0;
    var w = er(er({}, d), mo.getEventProperties(s, r));
    for (var D in w)
      S[D] = w[D];
    a && a.dispatchEvent(S), E[O] && E[O].call(r, S);
  }
}
var _x = ["evt"], en = function(r, a) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = s.evt, u = fx(s, _x);
  mo.pluginEvent.bind(Ne)(r, a, er({
    dragEl: ie,
    parentEl: pt,
    ghostEl: Me,
    rootEl: ot,
    nextEl: Na,
    lastDownEl: vu,
    cloneEl: ct,
    cloneHidden: ea,
    dragStarted: Js,
    putSortable: Pt,
    activeSortable: Ne.active,
    originalEvent: l,
    oldIndex: ji,
    oldDraggableIndex: ao,
    newIndex: mn,
    newDraggableIndex: Wr,
    hideGhostForTarget: J0,
    unhideGhostForTarget: K0,
    cloneNowHidden: function() {
      ea = !0;
    },
    cloneNowShown: function() {
      ea = !1;
    },
    dispatchSortableEvent: function(p) {
      Vt({
        sortable: a,
        name: p,
        originalEvent: l
      });
    }
  }, u));
};
function Vt(t) {
  bx(er({
    putSortable: Pt,
    cloneEl: ct,
    targetEl: ie,
    rootEl: ot,
    oldIndex: ji,
    oldDraggableIndex: ao,
    newIndex: mn,
    newDraggableIndex: Wr
  }, t));
}
var ie, pt, Me, ot, Na, vu, ct, ea, ji, mn, ao, Wr, jl, Pt, Ri = !1, Au = !1, Tu = [], Ta, In, pd, md, Fv, Zv, Js, Oi, io, so = !1, zl = !1, yu, Ht, gd = [], Ud = !1, Ou = [], Uu = typeof document < "u", Ll = oh, Gv = po || wr ? "cssFloat" : "float", Sx = Uu && !U0 && !oh && "draggable" in document.createElement("div"), X0 = (function() {
  if (Uu) {
    if (wr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), $0 = function(r, a) {
  var s = Oe(r), l = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Bi(r, 0, a), f = Bi(r, 1, a), p = u && Oe(u), h = f && Oe(f), m = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + xt(u).width, y = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + xt(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var _ = p.float === "left" ? "left" : "right";
    return f && (h.clear === "both" || h.clear === _) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || m >= l && s[Gv] === "none" || f && s[Gv] === "none" && m + y > l) ? "vertical" : "horizontal";
}, xx = function(r, a, s) {
  var l = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, p = s ? a.left : a.top, h = s ? a.right : a.bottom, m = s ? a.width : a.height;
  return l === p || u === h || l + f / 2 === p + m / 2;
}, Ex = function(r, a) {
  var s;
  return Tu.some(function(l) {
    var u = l[nn].options.emptyInsertThreshold;
    if (!(!u || lh(l))) {
      var f = xt(l), p = r >= f.left - u && r <= f.right + u, h = a >= f.top - u && a <= f.bottom + u;
      if (p && h)
        return s = l;
    }
  }), s;
}, Q0 = function(r) {
  function a(u, f) {
    return function(p, h, m, y) {
      var _ = p.options.group.name && h.options.group.name && p.options.group.name === h.options.group.name;
      if (u == null && (f || _))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (f && u === "clone")
        return u;
      if (typeof u == "function")
        return a(u(p, h, m, y), f)(p, h, m, y);
      var b = (f ? p : h).options.group.name;
      return u === !0 || typeof u == "string" && u === b || u.join && u.indexOf(b) > -1;
    };
  }
  var s = {}, l = r.group;
  (!l || gu(l) != "object") && (l = {
    name: l
  }), s.name = l.name, s.checkPull = a(l.pull, !0), s.checkPut = a(l.put), s.revertClone = l.revertClone, r.group = s;
}, J0 = function() {
  !X0 && Me && Oe(Me, "display", "none");
}, K0 = function() {
  !X0 && Me && Oe(Me, "display", "");
};
Uu && !U0 && document.addEventListener("click", function(t) {
  if (Au)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Au = !1, !1;
}, !0);
var Oa = function(r) {
  if (ie) {
    r = r.touches ? r.touches[0] : r;
    var a = Ex(r.clientX, r.clientY);
    if (a) {
      var s = {};
      for (var l in r)
        r.hasOwnProperty(l) && (s[l] = r[l]);
      s.target = s.rootEl = a, s.preventDefault = void 0, s.stopPropagation = void 0, a[nn]._onDragOver(s);
    }
  }
}, Cx = function(r) {
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
      return $0(t, this.options);
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
    supportPointer: Ne.supportPointer !== !1 && "PointerEvent" in window && (!no || oh),
    emptyInsertThreshold: 5
  };
  mo.initializePlugins(this, t, a);
  for (var s in a)
    !(s in r) && (r[s] = a[s]);
  Q0(r);
  for (var l in this)
    l.charAt(0) === "_" && typeof this[l] == "function" && (this[l] = this[l].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : Sx, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? qe(t, "pointerdown", this._onTapStart) : (qe(t, "mousedown", this._onTapStart), qe(t, "touchstart", this._onTapStart)), this.nativeDraggable && (qe(t, "dragover", this), qe(t, "dragenter", this)), Tu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Cr(this, gx());
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
      var a = this, s = this.el, l = this.options, u = l.preventOnFilter, f = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, h = (p || r).target, m = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || h, y = l.filter;
      if (kx(s), !ie && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || l.disabled) && !m.isContentEditable && !(!this.nativeDraggable && no && h && h.tagName.toUpperCase() === "SELECT") && (h = Un(h, l.draggable, s, !1), !(h && h.animated) && vu !== h)) {
        if (ji = Dn(h), ao = Dn(h, l.draggable), typeof y == "function") {
          if (y.call(this, r, h, this)) {
            Vt({
              sortable: a,
              rootEl: m,
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
          if (_ = Un(m, _.trim(), s, !1), _)
            return Vt({
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
        l.handle && !Un(m, l.handle, s, !1) || this._prepareDragStart(r, p, h);
      }
    }
  },
  _prepareDragStart: function(r, a, s) {
    var l = this, u = l.el, f = l.options, p = u.ownerDocument, h;
    if (s && !ie && s.parentNode === u) {
      var m = xt(s);
      if (ot = u, ie = s, pt = ie.parentNode, Na = ie.nextSibling, vu = s, jl = f.group, Ne.dragged = ie, Ta = {
        target: ie,
        clientX: (a || r).clientX,
        clientY: (a || r).clientY
      }, Fv = Ta.clientX - m.left, Zv = Ta.clientY - m.top, this._lastX = (a || r).clientX, this._lastY = (a || r).clientY, ie.style["will-change"] = "all", h = function() {
        if (en("delayEnded", l, {
          evt: r
        }), Ne.eventCanceled) {
          l._onDrop();
          return;
        }
        l._disableDelayedDragEvents(), !Bv && l.nativeDraggable && (ie.draggable = !0), l._triggerDragStart(r, a), Vt({
          sortable: l,
          name: "choose",
          originalEvent: r
        }), pn(ie, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(y) {
        F0(ie, y.trim(), vd);
      }), qe(p, "dragover", Oa), qe(p, "mousemove", Oa), qe(p, "touchmove", Oa), f.supportPointer ? (qe(p, "pointerup", l._onDrop), !this.nativeDraggable && qe(p, "pointercancel", l._onDrop)) : (qe(p, "mouseup", l._onDrop), qe(p, "touchend", l._onDrop), qe(p, "touchcancel", l._onDrop)), Bv && this.nativeDraggable && (this.options.touchStartThreshold = 4, ie.draggable = !0), en("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || a) && (!this.nativeDraggable || !(po || wr))) {
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
    ie && vd(ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    He(r, "mouseup", this._disableDelayedDrag), He(r, "touchend", this._disableDelayedDrag), He(r, "touchcancel", this._disableDelayedDrag), He(r, "pointerup", this._disableDelayedDrag), He(r, "pointercancel", this._disableDelayedDrag), He(r, "mousemove", this._delayedDragTouchMoveHandler), He(r, "touchmove", this._delayedDragTouchMoveHandler), He(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, a) {
    a = a || r.pointerType == "touch" && r, !this.nativeDraggable || a ? this.options.supportPointer ? qe(document, "pointermove", this._onTouchMove) : a ? qe(document, "touchmove", this._onTouchMove) : qe(document, "mousemove", this._onTouchMove) : (qe(ie, "dragend", this), qe(ot, "dragstart", this._onDragStart));
    try {
      document.selection ? bu(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, a) {
    if (Ri = !1, ot && ie) {
      en("dragStarted", this, {
        evt: a
      }), this.nativeDraggable && qe(document, "dragover", Cx);
      var s = this.options;
      !r && pn(ie, s.dragClass, !1), pn(ie, s.ghostClass, !0), Ne.active = this, r && this._appendGhost(), Vt({
        sortable: this,
        name: "start",
        originalEvent: a
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (In) {
      this._lastX = In.clientX, this._lastY = In.clientY, J0();
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
        } while (a = q0(a));
      K0();
    }
  },
  _onTouchMove: function(r) {
    if (Ta) {
      var a = this.options, s = a.fallbackTolerance, l = a.fallbackOffset, u = r.touches ? r.touches[0] : r, f = Me && Li(Me, !0), p = Me && f && f.a, h = Me && f && f.d, m = Ll && Ht && qv(Ht), y = (u.clientX - Ta.clientX + l.x) / (p || 1) + (m ? m[0] - gd[0] : 0) / (p || 1), _ = (u.clientY - Ta.clientY + l.y) / (h || 1) + (m ? m[1] - gd[1] : 0) / (h || 1);
      if (!Ne.active && !Ri) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (Me) {
        f ? (f.e += y - (pd || 0), f.f += _ - (md || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: y,
          f: _
        };
        var b = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        Oe(Me, "webkitTransform", b), Oe(Me, "mozTransform", b), Oe(Me, "msTransform", b), Oe(Me, "transform", b), pd = y, md = _, In = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Me) {
      var r = this.options.fallbackOnBody ? document.body : ot, a = xt(ie, !0, Ll, !0, r), s = this.options;
      if (Ll) {
        for (Ht = r; Oe(Ht, "position") === "static" && Oe(Ht, "transform") === "none" && Ht !== document; )
          Ht = Ht.parentNode;
        Ht !== document.body && Ht !== document.documentElement ? (Ht === document && (Ht = Wn()), a.top += Ht.scrollTop, a.left += Ht.scrollLeft) : Ht = Wn(), gd = qv(Ht);
      }
      Me = ie.cloneNode(!0), pn(Me, s.ghostClass, !1), pn(Me, s.fallbackClass, !0), pn(Me, s.dragClass, !0), Oe(Me, "transition", ""), Oe(Me, "transform", ""), Oe(Me, "box-sizing", "border-box"), Oe(Me, "margin", 0), Oe(Me, "top", a.top), Oe(Me, "left", a.left), Oe(Me, "width", a.width), Oe(Me, "height", a.height), Oe(Me, "opacity", "0.8"), Oe(Me, "position", Ll ? "absolute" : "fixed"), Oe(Me, "zIndex", "100000"), Oe(Me, "pointerEvents", "none"), Ne.ghost = Me, r.appendChild(Me), Oe(Me, "transform-origin", Fv / parseInt(Me.style.width) * 100 + "% " + Zv / parseInt(Me.style.height) * 100 + "%");
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
    en("setupClone", this), Ne.eventCanceled || (ct = V0(ie), ct.removeAttribute("id"), ct.draggable = !1, ct.style["will-change"] = "", this._hideClone(), pn(ct, this.options.chosenClass, !1), Ne.clone = ct), s.cloneId = bu(function() {
      en("clone", s), !Ne.eventCanceled && (s.options.removeCloneOnHide || ot.insertBefore(ct, ie), s._hideClone(), Vt({
        sortable: s,
        name: "clone"
      }));
    }), !a && pn(ie, u.dragClass, !0), a ? (Au = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (He(document, "mouseup", s._onDrop), He(document, "touchend", s._onDrop), He(document, "touchcancel", s._onDrop), l && (l.effectAllowed = "move", u.setData && u.setData.call(s, l, ie)), qe(document, "drop", s), Oe(ie, "transform", "translateZ(0)")), Ri = !0, s._dragStartId = bu(s._dragStarted.bind(s, a, r)), qe(document, "selectstart", s), Js = !0, window.getSelection().removeAllRanges(), no && Oe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var a = this.el, s = r.target, l, u, f, p = this.options, h = p.group, m = Ne.active, y = jl === h, _ = p.sort, b = Pt || m, v, d = this, S = !1;
    if (Ud) return;
    function E(ce, je) {
      en(ce, d, er({
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
          return Pl(ot, a, ie, l, J, xt(J), r, ae);
        },
        changed: D
      }, je));
    }
    function O() {
      E("dragOverAnimationCapture"), d.captureAnimationState(), d !== b && b.captureAnimationState();
    }
    function w(ce) {
      return E("dragOverCompleted", {
        insertion: ce
      }), ce && (y ? m._hideClone() : m._showClone(d), d !== b && (pn(ie, Pt ? Pt.options.ghostClass : m.options.ghostClass, !1), pn(ie, p.ghostClass, !0)), Pt !== d && d !== Ne.active ? Pt = d : d === Ne.active && Pt && (Pt = null), b === d && (d._ignoreWhileAnimating = s), d.animateAll(function() {
        E("dragOverAnimationComplete"), d._ignoreWhileAnimating = null;
      }), d !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (s === ie && !ie.animated || s === a && !s.animated) && (Oi = null), !p.dragoverBubble && !r.rootEl && s !== document && (ie.parentNode[nn]._isOutsideThisEl(r.target), !ce && Oa(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), S = !0;
    }
    function D() {
      mn = Dn(ie), Wr = Dn(ie, p.draggable), Vt({
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
    if (Au = !1, m && !p.disabled && (y ? _ || (f = pt !== ot) : Pt === this || (this.lastPutMode = jl.checkPull(this, m, ie, r)) && h.checkPut(this, m, ie, r))) {
      if (v = this._getDirection(r, s) === "vertical", l = xt(ie), E("dragOverValid"), Ne.eventCanceled) return S;
      if (f)
        return pt = ot, O(), this._hideClone(), E("revert"), Ne.eventCanceled || (Na ? ot.insertBefore(ie, Na) : ot.appendChild(ie)), w(!0);
      var x = lh(a, p.draggable);
      if (!x || Ox(r, v, this) && !x.animated) {
        if (x === ie)
          return w(!1);
        if (x && a === r.target && (s = x), s && (u = xt(s)), Pl(ot, a, ie, l, s, u, r, !!s) !== !1)
          return O(), x && x.nextSibling ? a.insertBefore(ie, x.nextSibling) : a.appendChild(ie), pt = a, D(), w(!0);
      } else if (x && Tx(r, v, this)) {
        var T = Bi(a, 0, p, !0);
        if (T === ie)
          return w(!1);
        if (s = T, u = xt(s), Pl(ot, a, ie, l, s, u, r, !1) !== !1)
          return O(), a.insertBefore(ie, T), pt = a, D(), w(!0);
      } else if (s.parentNode === a) {
        u = xt(s);
        var M = 0, k, U = ie.parentNode !== a, Y = !xx(ie.animated && ie.toRect || l, s.animated && s.toRect || u, v), B = v ? "top" : "left", G = Hv(s, "top", "top") || Hv(ie, "top", "top"), $ = G ? G.scrollTop : void 0;
        Oi !== s && (k = u[B], so = !1, zl = !Y && p.invertSwap || U), M = Nx(r, s, u, v, Y ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, zl, Oi === s);
        var ue;
        if (M !== 0) {
          var he = Dn(ie);
          do
            he -= M, ue = pt.children[he];
          while (ue && (Oe(ue, "display") === "none" || ue === Me));
        }
        if (M === 0 || ue === s)
          return w(!1);
        Oi = s, io = M;
        var xe = s.nextElementSibling, H = !1;
        H = M === 1;
        var te = Pl(ot, a, ie, l, s, u, r, H);
        if (te !== !1)
          return (te === 1 || te === -1) && (H = te === 1), Ud = !0, setTimeout(Ax, 30), O(), H && !xe ? a.appendChild(ie) : s.parentNode.insertBefore(ie, H ? xe : s), G && G0(G, 0, $ - G.scrollTop), pt = ie.parentNode, k !== void 0 && !zl && (yu = Math.abs(k - xt(s)[B])), D(), w(!0);
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
    if (mn = Dn(ie), Wr = Dn(ie, s.draggable), en("drop", this, {
      evt: r
    }), pt = ie && ie.parentNode, mn = Dn(ie), Wr = Dn(ie, s.draggable), Ne.eventCanceled) {
      this._nulling();
      return;
    }
    Ri = !1, zl = !1, so = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Hd(this.cloneId), Hd(this._dragStartId), this.nativeDraggable && (He(document, "drop", this), He(a, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), no && Oe(document.body, "user-select", ""), Oe(ie, "transform", ""), r && (Js && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), Me && Me.parentNode && Me.parentNode.removeChild(Me), (ot === pt || Pt && Pt.lastPutMode !== "clone") && ct && ct.parentNode && ct.parentNode.removeChild(ct), ie && (this.nativeDraggable && He(ie, "dragend", this), vd(ie), ie.style["will-change"] = "", Js && !Ri && pn(ie, Pt ? Pt.options.ghostClass : this.options.ghostClass, !1), pn(ie, this.options.chosenClass, !1), Vt({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), ot !== pt ? (mn >= 0 && (Vt({
      rootEl: pt,
      name: "add",
      toEl: pt,
      fromEl: ot,
      originalEvent: r
    }), Vt({
      sortable: this,
      name: "remove",
      toEl: pt,
      originalEvent: r
    }), Vt({
      rootEl: pt,
      name: "sort",
      toEl: pt,
      fromEl: ot,
      originalEvent: r
    }), Vt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Pt && Pt.save()) : mn !== ji && mn >= 0 && (Vt({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Vt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Ne.active && ((mn == null || mn === -1) && (mn = ji, Wr = ao), Vt({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    en("nulling", this), ot = ie = pt = Me = Na = ct = vu = ea = Ta = In = Js = mn = Wr = ji = ao = Oi = io = Pt = jl = Ne.dragged = Ne.ghost = Ne.clone = Ne.active = null, Ou.forEach(function(r) {
      r.checked = !0;
    }), Ou.length = pd = md = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        ie && (this._onDragOver(r), wx(r));
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
      a = s[l], Un(a, f.draggable, this.el, !1) && r.push(a.getAttribute(f.dataIdAttr) || Mx(a));
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
    var l = mo.modifyOption(this, r, a);
    typeof l < "u" ? s[r] = l : s[r] = a, r === "group" && Q0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    en("destroy", this);
    var r = this.el;
    r[nn] = null, He(r, "mousedown", this._onTapStart), He(r, "touchstart", this._onTapStart), He(r, "pointerdown", this._onTapStart), this.nativeDraggable && (He(r, "dragover", this), He(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(a) {
      a.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Tu.splice(Tu.indexOf(this.el), 1), this.el = r = null;
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
function wx(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Pl(t, r, a, s, l, u, f, p) {
  var h, m = t[nn], y = m.options.onMove, _;
  return window.CustomEvent && !wr && !po ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = r, h.from = t, h.dragged = a, h.draggedRect = s, h.related = l || r, h.relatedRect = u || xt(r), h.willInsertAfter = p, h.originalEvent = f, t.dispatchEvent(h), y && (_ = y.call(m, h, f)), _;
}
function vd(t) {
  t.draggable = !1;
}
function Ax() {
  Ud = !1;
}
function Tx(t, r, a) {
  var s = xt(Bi(a.el, 0, a.options, !0)), l = Y0(a.el, a.options, Me), u = 10;
  return r ? t.clientX < l.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < l.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function Ox(t, r, a) {
  var s = xt(lh(a.el, a.options.draggable)), l = Y0(a.el, a.options, Me), u = 10;
  return r ? t.clientX > l.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > l.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function Nx(t, r, a, s, l, u, f, p) {
  var h = s ? t.clientY : t.clientX, m = s ? a.height : a.width, y = s ? a.top : a.left, _ = s ? a.bottom : a.right, b = !1;
  if (!f) {
    if (p && yu < m * l) {
      if (!so && (io === 1 ? h > y + m * u / 2 : h < _ - m * u / 2) && (so = !0), so)
        b = !0;
      else if (io === 1 ? h < y + yu : h > _ - yu)
        return -io;
    } else if (h > y + m * (1 - l) / 2 && h < _ - m * (1 - l) / 2)
      return Dx(r);
  }
  return b = b || f, b && (h < y + m * u / 2 || h > _ - m * u / 2) ? h > y + m / 2 ? 1 : -1 : 0;
}
function Dx(t) {
  return Dn(ie) < Dn(t) ? 1 : -1;
}
function Mx(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, a = r.length, s = 0; a--; )
    s += r.charCodeAt(a);
  return s.toString(36);
}
function kx(t) {
  Ou.length = 0;
  for (var r = t.getElementsByTagName("input"), a = r.length; a--; ) {
    var s = r[a];
    s.checked && Ou.push(s);
  }
}
function bu(t) {
  return setTimeout(t, 0);
}
function Hd(t) {
  return clearTimeout(t);
}
Uu && qe(document, "touchmove", function(t) {
  (Ne.active || Ri) && t.cancelable && t.preventDefault();
});
Ne.utils = {
  on: qe,
  off: He,
  css: Oe,
  find: F0,
  is: function(r, a) {
    return !!Un(r, a, r, !1);
  },
  extend: px,
  throttle: Z0,
  closest: Un,
  toggleClass: pn,
  clone: V0,
  index: Dn,
  nextTick: bu,
  cancelNextTick: Hd,
  detectDirection: $0,
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
    s.utils && (Ne.utils = er(er({}, Ne.utils), s.utils)), mo.mount(s);
  });
};
Ne.create = function(t, r) {
  return new Ne(t, r);
};
Ne.version = dx;
var St = [], Ks, qd, Fd = !1, yd, bd, Nu, Ws;
function Rx() {
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
      this.sortable.nativeDraggable ? He(document, "dragover", this._handleAutoScroll) : (He(document, "pointermove", this._handleFallbackAutoScroll), He(document, "touchmove", this._handleFallbackAutoScroll), He(document, "mousemove", this._handleFallbackAutoScroll)), Vv(), _u(), mx();
    },
    nulling: function() {
      Nu = qd = Ks = Fd = Ws = yd = bd = null, St.length = 0;
    },
    _handleFallbackAutoScroll: function(a) {
      this._handleAutoScroll(a, !0);
    },
    _handleAutoScroll: function(a, s) {
      var l = this, u = (a.touches ? a.touches[0] : a).clientX, f = (a.touches ? a.touches[0] : a).clientY, p = document.elementFromPoint(u, f);
      if (Nu = a, s || this.options.forceAutoScrollFallback || po || wr || no) {
        _d(a, this.options, p, s);
        var h = ta(p, !0);
        Fd && (!Ws || u !== yd || f !== bd) && (Ws && Vv(), Ws = setInterval(function() {
          var m = ta(document.elementFromPoint(u, f), !0);
          m !== h && (h = m, _u()), _d(a, l.options, m, s);
        }, 10), yd = u, bd = f);
      } else {
        if (!this.options.bubbleScroll || ta(p, !0) === Wn()) {
          _u();
          return;
        }
        _d(a, this.options, ta(p, !1), !1);
      }
    }
  }, Cr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function _u() {
  St.forEach(function(t) {
    clearInterval(t.pid);
  }), St = [];
}
function Vv() {
  clearInterval(Ws);
}
var _d = Z0(function(t, r, a, s) {
  if (r.scroll) {
    var l = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, p = r.scrollSpeed, h = Wn(), m = !1, y;
    qd !== a && (qd = a, _u(), Ks = r.scroll, y = r.scrollFn, Ks === !0 && (Ks = ta(a, !0)));
    var _ = 0, b = Ks;
    do {
      var v = b, d = xt(v), S = d.top, E = d.bottom, O = d.left, w = d.right, D = d.width, x = d.height, T = void 0, M = void 0, k = v.scrollWidth, U = v.scrollHeight, Y = Oe(v), B = v.scrollLeft, G = v.scrollTop;
      v === h ? (T = D < k && (Y.overflowX === "auto" || Y.overflowX === "scroll" || Y.overflowX === "visible"), M = x < U && (Y.overflowY === "auto" || Y.overflowY === "scroll" || Y.overflowY === "visible")) : (T = D < k && (Y.overflowX === "auto" || Y.overflowX === "scroll"), M = x < U && (Y.overflowY === "auto" || Y.overflowY === "scroll"));
      var $ = T && (Math.abs(w - l) <= f && B + D < k) - (Math.abs(O - l) <= f && !!B), ue = M && (Math.abs(E - u) <= f && G + x < U) - (Math.abs(S - u) <= f && !!G);
      if (!St[_])
        for (var he = 0; he <= _; he++)
          St[he] || (St[he] = {});
      (St[_].vx != $ || St[_].vy != ue || St[_].el !== v) && (St[_].el = v, St[_].vx = $, St[_].vy = ue, clearInterval(St[_].pid), ($ != 0 || ue != 0) && (m = !0, St[_].pid = setInterval((function() {
        s && this.layer === 0 && Ne.active._onTouchMove(Nu);
        var xe = St[this.layer].vy ? St[this.layer].vy * p : 0, H = St[this.layer].vx ? St[this.layer].vx * p : 0;
        typeof y == "function" && y.call(Ne.dragged.parentNode[nn], H, xe, t, Nu, St[this.layer].el) !== "continue" || G0(St[this.layer].el, H, xe);
      }).bind({
        layer: _
      }), 24))), _++;
    } while (r.bubbleScroll && b !== h && (b = ta(b, !1)));
    Fd = m;
  }
}, 30), W0 = function(r) {
  var a = r.originalEvent, s = r.putSortable, l = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, p = r.hideGhostForTarget, h = r.unhideGhostForTarget;
  if (a) {
    var m = s || u;
    p();
    var y = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, _ = document.elementFromPoint(y.clientX, y.clientY);
    h(), m && !m.el.contains(_) && (f("spill"), this.onSpill({
      dragEl: l,
      putSortable: s
    }));
  }
};
function uh() {
}
uh.prototype = {
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
  drop: W0
};
Cr(uh, {
  pluginName: "revertOnSpill"
});
function ch() {
}
ch.prototype = {
  onSpill: function(r) {
    var a = r.dragEl, s = r.putSortable, l = s || this.sortable;
    l.captureAnimationState(), a.parentNode && a.parentNode.removeChild(a), l.animateAll();
  },
  drop: W0
};
Cr(ch, {
  pluginName: "removeOnSpill"
});
Ne.mount(new Rx());
Ne.mount(ch, uh);
async function jx({
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
  let m;
  if (l === "update" || l === "auto") {
    const _ = Object.values(f.entries).find((b) => b.uid === t.uid);
    if (_)
      (l === "auto" || l === "update") && (m = _);
    else if (l === "update")
      throw new Error("Entry not found for update operation");
  }
  const y = m ? "update" : "add";
  if (!m) {
    if (m = ax(r, f), !m)
      throw new Error("Failed to create entry");
    if (h) {
      const _ = m.uid;
      Object.assign(m, h), m.uid = _;
    }
  }
  return m.key = t.key, m.content = t.content, m.comment = t.comment, a || await u.saveWorldInfo(r, f), s || u.reloadWorldInfoEditor(r, !0), {
    entry: m,
    operation: y
  };
}
const Su = `=======

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
    *   Start each exchange with a <START> line. SillyTavern uses it to separate the examples.
*   **Example**:
    \`\`\`
    <START>
    {{user}}: "What makes you think your plan will work?"
    {{char}}: *A slow, confident smirk spreads across her face as she leans back in her chair, boots resting on the scarred metal desk.* "Because I accounted for every variable. Especially the human one—your greed."

    <START>
    {{user}}: "I'm not sure I can do this."
    {{char}}: *Her expression softens for a brief moment. She places a reassuring hand on {{user}}'s shoulder, her calloused fingers a surprising comfort.* "Fear is just a signal. It tells you what you need to protect. Now, let's protect it together."
    \`\`\`

#### 7. Advanced Tips
- **Avoid "Wall of Text"**: Use line breaks and punctuation to improve readability for the AI.

=======`, Zd = `{{#if characters}}
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
{{/if}}`, e1 = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag, with the content inside a CDATA section.
Quotes, &, <START> and line breaks are safe inside CDATA. Never write ]]> inside it.

Example:
<response><![CDATA[Generated content for the field goes here.]]></response>`, t1 = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

Example:
{
  "response": "Generated content for the field goes here."
}`, n1 = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

Example:
Generated content for the field goes here.`, fh = "{{activeFormatInstructions}}", r1 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, a1 = `### {{character.name}}
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
  {{else}}*Not provided*{{/if}}`, oo = `{{#is_not_empty fields}}
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
{{/is_not_empty}}`, zx = `## User's Persona Description
name: {{user}}
{{persona}}`, dh = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, Lx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", i1 = `You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.

**CRITICAL INSTRUCTIONS:**
1.  You MUST wrap the entire XML object in a markdown code block (\`\`\`xml\\n...\\n\`\`\`).
2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.
3.  The XML object inside the code block MUST be valid and MUST be a single <root> element, following the structure described by the JSON schema below.
4.  Wrap every text value in a CDATA section, e.g. <name><![CDATA[Text with "quotes", & and <START>]]></name>. Never write ]]> inside a CDATA section.
5.  For lists, write each entry as an <item> element inside the list's element, as shown in the example.

**JSON SCHEMA OF THE XML STRUCTURE:**
\`\`\`json
{{schema}}
\`\`\`

**EXAMPLE OF A PERFECT RESPONSE:**
\`\`\`xml
<root>
{{example_response}}
</root>
\`\`\``, Px = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, s1 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ix = s1 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Bx = "[" + s1 + "][" + Ix + "]*", Ux = new RegExp("^" + Bx + "$");
function o1(t, r) {
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
const hh = function(t) {
  const r = Ux.exec(t);
  return !(r === null || typeof r > "u");
};
function Hx(t) {
  return typeof t < "u";
}
const qx = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function l1(t, r) {
  r = Object.assign({}, qx, r);
  const a = [];
  let s = !1, l = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Xv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let f = u;
      if (u++, t[u] === "!") {
        u = $v(t, u);
        continue;
      } else {
        let p = !1;
        t[u] === "/" && (p = !0, u++);
        let h = "";
        for (; u < t.length && t[u] !== ">" && t[u] !== " " && t[u] !== "	" && t[u] !== `
` && t[u] !== "\r"; u++)
          h += t[u];
        if (h = h.trim(), h[h.length - 1] === "/" && (h = h.substring(0, h.length - 1), u--), !Qx(h)) {
          let _;
          return h.trim().length === 0 ? _ = "Invalid space after '<'." : _ = "Tag '" + h + "' is an invalid name.", yt("InvalidTag", _, Yt(t, u));
        }
        const m = Gx(t, u);
        if (m === !1)
          return yt("InvalidAttr", "Attributes for '" + h + "' have open quote.", Yt(t, u));
        let y = m.value;
        if (u = m.index, y[y.length - 1] === "/") {
          const _ = u - y.length;
          y = y.substring(0, y.length - 1);
          const b = Qv(y, r);
          if (b === !0)
            s = !0;
          else
            return yt(b.err.code, b.err.msg, Yt(t, _ + b.err.line));
        } else if (p)
          if (m.tagClosed) {
            if (y.trim().length > 0)
              return yt("InvalidTag", "Closing tag '" + h + "' can't have attributes or invalid starting.", Yt(t, f));
            if (a.length === 0)
              return yt("InvalidTag", "Closing tag '" + h + "' has not been opened.", Yt(t, f));
            {
              const _ = a.pop();
              if (h !== _.tagName) {
                let b = Yt(t, _.tagStartPos);
                return yt(
                  "InvalidTag",
                  "Expected closing tag '" + _.tagName + "' (opened in line " + b.line + ", col " + b.col + ") instead of closing tag '" + h + "'.",
                  Yt(t, f)
                );
              }
              a.length == 0 && (l = !0);
            }
          } else return yt("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", Yt(t, u));
        else {
          const _ = Qv(y, r);
          if (_ !== !0)
            return yt(_.err.code, _.err.msg, Yt(t, u - y.length + _.err.line));
          if (l === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", Yt(t, u));
          r.unpairedTags.indexOf(h) !== -1 || a.push({ tagName: h, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = $v(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Xv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const _ = Xx(t, u);
            if (_ == -1)
              return yt("InvalidChar", "char '&' is not expected.", Yt(t, u));
            u = _;
          } else if (l === !0 && !Yv(t[u]))
            return yt("InvalidXml", "Extra text at the end", Yt(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (Yv(t[u]))
        continue;
      return yt("InvalidChar", "char '" + t[u] + "' is not expected.", Yt(t, u));
    }
  if (s) {
    if (a.length == 1)
      return yt("InvalidTag", "Unclosed tag '" + a[0].tagName + "'.", Yt(t, a[0].tagStartPos));
    if (a.length > 0)
      return yt("InvalidXml", "Invalid '" + JSON.stringify(a.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return yt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Yv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Xv(t, r) {
  const a = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(a, r - a);
      if (r > 5 && s === "xml")
        return yt("InvalidXml", "XML declaration allowed only at the start of the document.", Yt(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function $v(t, r) {
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
const Fx = '"', Zx = "'";
function Gx(t, r) {
  let a = "", s = "", l = !1;
  for (; r < t.length; r++) {
    if (t[r] === Fx || t[r] === Zx)
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
const Vx = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Qv(t, r) {
  const a = o1(t, Vx), s = {};
  for (let l = 0; l < a.length; l++) {
    if (a[l][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + a[l][2] + "' has no space in starting.", qs(a[l]));
    if (a[l][3] !== void 0 && a[l][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + a[l][2] + "' is without value.", qs(a[l]));
    if (a[l][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + a[l][2] + "' is not allowed.", qs(a[l]));
    const u = a[l][2];
    if (!$x(u))
      return yt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", qs(a[l]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + u + "' is repeated.", qs(a[l]));
  }
  return !0;
}
function Yx(t, r) {
  let a = /\d/;
  for (t[r] === "x" && (r++, a = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(a))
      break;
  }
  return -1;
}
function Xx(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, Yx(t, r);
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
function $x(t) {
  return hh(t);
}
function Qx(t) {
  return hh(t);
}
function Yt(t, r) {
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
const Jx = {
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
}, Kx = function(t) {
  return Object.assign({}, Jx, t);
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
function Wx(t, r) {
  const a = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, l = !1, u = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (l && nE(t, r)) {
          r += 7;
          let p, h;
          [p, h, r] = eE(t, r + 1), h.indexOf("&") === -1 && (a[sE(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: h
          });
        } else if (l && rE(t, r)) r += 8;
        else if (l && aE(t, r)) r += 8;
        else if (l && iE(t, r)) r += 9;
        else if (tE) u = !0;
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
function eE(t, r) {
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
function tE(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function nE(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function rE(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function aE(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function iE(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function sE(t) {
  if (hh(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const oE = /^[-+]?0x[a-fA-F0-9]+$/, lE = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, uE = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function cE(t, r = {}) {
  if (r = Object.assign({}, uE, r), !t || typeof t != "string") return t;
  let a = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(a)) return t;
  if (t === "0") return 0;
  if (r.hex && oE.test(a))
    return dE(a, 16);
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
    const s = lE.exec(a);
    if (s) {
      const l = s[1], u = s[2];
      let f = fE(s[3]);
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
function fE(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function dE(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function hE(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const a of t)
      if (typeof a == "string" && r === a || a instanceof RegExp && a.test(r))
        return !0;
  } : () => !1;
}
class pE {
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
    }, this.addExternalEntities = mE, this.parseXml = _E, this.parseTextData = gE, this.resolveNameSpace = vE, this.buildAttributesMap = bE, this.isItStopNode = CE, this.replaceEntitiesValue = xE, this.readStopNodeData = AE, this.saveTextToParentTag = EE, this.addChild = SE, this.ignoreAttributesFn = hE(this.options.ignoreAttributes);
  }
}
function mE(t) {
  const r = Object.keys(t);
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function gE(t, r, a, s, l, u, f) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const p = this.options.tagValueProcessor(r, t, a, l, u);
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? Vd(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Vd(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function vE(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), a = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = a + r[1]);
  }
  return t;
}
const yE = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function bE(t, r, a) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = o1(t, yE), l = s.length, u = {};
    for (let f = 0; f < l; f++) {
      const p = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let h = s[f][4], m = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (m = this.options.transformAttributeName(m)), m === "__proto__" && (m = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const y = this.options.attributeValueProcessor(p, h, r);
          y == null ? u[m] = h : typeof y != typeof h || y !== h ? u[m] = y : u[m] = Vd(
            h,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (u[m] = !0);
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
const _E = function(t) {
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
        const m = l.substring(l.lastIndexOf(".") + 1);
        if (h && this.options.unpairedTags.indexOf(h) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${h}>`);
        let y = 0;
        m && this.options.unpairedTags.indexOf(m) !== -1 ? (y = l.lastIndexOf(".", l.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : y = l.lastIndexOf("."), l = l.substring(0, y), a = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (t[u + 1] === "?") {
        let p = Gd(t, u, !1, "?>");
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
        const p = Wx(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = Ra(t, "]]>", u, "CDATA is not closed.") - 2, h = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, a, l);
        let m = this.parseTextData(h, a.tagname, l, !0, !1, !0, !0);
        m == null && (m = ""), this.options.cdataPropName ? a.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : a.add(this.options.textNodeName, m), u = p + 2;
      } else {
        let p = Gd(t, u, this.options.removeNSPrefix), h = p.tagName;
        const m = p.rawTagName;
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
            const E = this.readStopNodeData(t, m, b + 1);
            if (!E) throw new Error(`Unexpected end of ${m}`);
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
function SE(t, r, a) {
  const s = this.options.updateTag(r.tagname, a, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const xE = function(t) {
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
function EE(t, r, a, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    a,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function CE(t, r, a) {
  const s = "*." + a;
  for (const l in t) {
    const u = t[l];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function wE(t, r, a = ">") {
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
function Gd(t, r, a, s = ">") {
  const l = wE(t, r + 1, s);
  if (!l) return;
  let u = l.data;
  const f = l.index, p = u.search(/\s/);
  let h = u, m = !0;
  p !== -1 && (h = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const y = h;
  if (a) {
    const _ = h.indexOf(":");
    _ !== -1 && (h = h.substr(_ + 1), m = h !== l.data.substr(_ + 1));
  }
  return {
    tagName: h,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: m,
    rawTagName: y
  };
}
function AE(t, r, a) {
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
        const u = Gd(t, a, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && l++, a = u.closeIndex);
      }
}
function Vd(t, r, a) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : cE(t, a);
  } else
    return Hx(t) ? t : "";
}
function TE(t, r) {
  return u1(t, r);
}
function u1(t, r, a) {
  let s;
  const l = {};
  for (let u = 0; u < t.length; u++) {
    const f = t[u], p = OE(f);
    let h = "";
    if (a === void 0 ? h = p : h = a + "." + p, p === r.textNodeName)
      s === void 0 ? s = f[p] : s += "" + f[p];
    else {
      if (p === void 0)
        continue;
      if (f[p]) {
        let m = u1(f[p], r, h);
        const y = DE(m, r);
        f[":@"] ? NE(m, f[":@"], h, r) : Object.keys(m).length === 1 && m[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? m = m[r.textNodeName] : Object.keys(m).length === 0 && (r.alwaysCreateTextNode ? m[r.textNodeName] = "" : m = ""), l[p] !== void 0 && l.hasOwnProperty(p) ? (Array.isArray(l[p]) || (l[p] = [l[p]]), l[p].push(m)) : r.isArray(p, h, y) ? l[p] = [m] : l[p] = m;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (l[r.textNodeName] = s) : s !== void 0 && (l[r.textNodeName] = s), l;
}
function OE(t) {
  const r = Object.keys(t);
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (s !== ":@") return s;
  }
}
function NE(t, r, a, s) {
  if (r) {
    const l = Object.keys(r), u = l.length;
    for (let f = 0; f < u; f++) {
      const p = l[f];
      s.isArray(p, a + "." + p, !0, !0) ? t[p] = [r[p]] : t[p] = r[p];
    }
  }
}
function DE(t, r) {
  const { textNodeName: a } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[a] || typeof t[a] == "boolean" || t[a] === 0));
}
class c1 {
  constructor(r) {
    this.externalEntities = {}, this.options = Kx(r);
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
      const u = l1(r, a);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new pE(this.options);
    s.addExternalEntities(this.externalEntities);
    const l = s.parseXml(r);
    return this.options.preserveOrder || l === void 0 ? l : TE(l, this.options);
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
const ME = {
  validate: l1
}, kE = new c1({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
}), RE = new c1({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0,
  parseTagValue: !1
});
function Jv(t, r) {
  if (r?.type === "string" && typeof t != "string")
    return String(t);
  if ((r?.type === "integer" || r?.type === "number") && typeof t == "string" && t.trim() !== "") {
    const a = Number(t);
    return Number.isFinite(a) ? a : t;
  }
  return r?.type === "boolean" && (t === "true" || t === "false") ? t === "true" : t;
}
function Yd(t, r) {
  if (!(!r || !t || !r.properties))
    for (const a in r.properties) {
      if (!t.hasOwnProperty(a)) continue;
      const s = r.properties[a];
      let l = t[a];
      s.type === "array" && !Array.isArray(l) && (typeof l == "object" && l !== null && Object.keys(l).length === 1 && "item" in l && !s.items?.properties?.item && (l = l.item), l = Array.isArray(l) ? l : [l]), s.type === "array" && (l = l.filter((u) => u !== ""), t[a] = l), s.type === "object" && typeof l == "object" && l !== null ? Yd(l, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(l) && l.forEach((u) => Yd(u, s.items)), s.type === "array" ? t[a] = l.map((u) => Jv(u, s.items)) : t[a] = Jv(l, s);
    }
}
function jE(t) {
  return t.split(/(<!\[CDATA\[[\s\S]*?\]\]>)/).map((r, a) => a % 2 === 1 ? r : r.replace(/&(?!(?:[a-zA-Z]+|#\d+|#x[0-9a-fA-F]+);)/g, "&amp;")).join("");
}
const ph = /```(?:\w+\n|\n)?([\s\S]*?)```/g, eo = /<response(?:\s[^>]*)?>/, zE = { "&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"', "&apos;": "'" };
function f1(t) {
  let r = null;
  for (const a of t.matchAll(ph))
    r = a[1].trim();
  return r;
}
function LE(t) {
  const r = t.match(/^```(?:\w+\n|\n)?([\s\S]*?)```$/);
  return r && !r[1].includes("```") ? r[1].trim() : t;
}
function PE(t) {
  const r = (l) => l.replace(/&(?:lt|gt|amp|quot|apos);/g, (u) => zE[u]);
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
function Kv(t) {
  let r = t.search(eo);
  if (r === -1)
    return null;
  let a = !1, s = -1;
  for (const p of t.matchAll(ph))
    p.index < r && r < p.index + p[0].length && (a = !0), eo.test(p[1]) && (s = p.index);
  a && s !== -1 && (r = s + t.slice(s).search(eo));
  const l = r + t.slice(r).match(eo)[0].length, u = t.lastIndexOf("</response>");
  let f;
  if (u >= l)
    f = t.slice(l, u);
  else {
    f = t.slice(l).trimEnd();
    const p = f.match(/<\/([\w:.-]+)\s*>$/);
    p && !f.includes(`<${p[1]}`) && (f = f.slice(0, p.index));
  }
  return PE(f).trim();
}
function IE(t) {
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
const BE = /^\s*<(think|thinking|reasoning)>[\s\S]*?(?:<\/\1>|$)/i;
function go(t) {
  return t.replace(BE, "");
}
function Xd(t, r = 120) {
  const a = t.trim().replace(/\s+/g, " ");
  return `It starts with: "${a.slice(0, r)}"${a.length > r ? "…" : ""}`;
}
function UE(t) {
  const r = [];
  let a = 0;
  for (; a < t.length; ) {
    let s = 0, l = -1, u = !1, f = !1;
    for (let p = a; p < t.length; p++) {
      const h = t[p];
      s === 0 ? h === "{" && (l = p, s = 1) : u ? f ? f = !1 : h === "\\" ? f = !0 : h === '"' && (u = !1) : h === '"' ? u = !0 : h === "{" ? s++ : h === "}" && --s === 0 && r.push(t.slice(l, p + 1));
    }
    if (s === 0)
      break;
    a = l + 1;
  }
  return r;
}
function HE(t) {
  const r = go(t).trim(), a = f1(r);
  let s;
  for (const u of a === null ? [r] : [r, a])
    try {
      return JSON.parse(u);
    } catch (f) {
      s = f;
    }
  const l = UE(r);
  for (let u = l.length - 1; u >= 0; u--)
    try {
      return JSON.parse(l[u]);
    } catch {
    }
  throw s;
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
function Du(t, r, a = {}) {
  t = go(t);
  const s = f1(t);
  let l = s ?? t.trim();
  try {
    switch (r) {
      case "xml":
        if (!a.schema) {
          const f = Kv(t);
          if (f !== null) return f;
        }
        if (a.schema) {
          if (s === null) {
            l = l.replace(/^```\w*\s*/, "");
            const p = l.search(/<root(?:\s[^>]*)?>/), h = l.lastIndexOf("</root>");
            p !== -1 && (l = l.slice(
              p,
              h > p ? h + 7 : void 0
            ));
          }
          l = jE(l);
          const f = ME.validate(l);
          if (f !== !0)
            throw new Error(
              `Model response is not valid XML: ${f.err.msg}. ${Xd(t)}`
            );
        }
        let u = (a.schema ? RE : kE).parse(l);
        if (u.root)
          u = u.root;
        else if (u.response)
          return na(u.response);
        return a.schema ? (Yd(u, a.schema), u) : na(u);
      case "json":
        if (!a.schema) {
          const f = t.trim(), p = f.indexOf("{"), h = f.lastIndexOf("}");
          if (p !== -1 && h > p)
            try {
              return na(JSON.parse(f.slice(p, h + 1)));
            } catch {
            }
        }
        return a.schema ? HE(t) : na(JSON.parse(l));
      case "none":
        return LE(t.trim());
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (u) {
    if (r !== "none" && !a.schema) {
      const f = Kv(t);
      if (f !== null) return f;
      const p = t.match(/[\s\S]*"response":\s*"([\s\S]*)/);
      if (p) return IE(p[1]);
    }
    throw console.error(`Error parsing response in format '${r}':`, u), console.error("Raw content received:", t), r === "xml" ? u.message.startsWith("Model response is not valid XML:") ? u : new Error(`Model response is not valid XML: ${u.message}`) : r === "json" ? new Error(`Model response is not valid JSON (${u.message}). ${Xd(t)}`) : new Error(`Failed to parse response as ${r}: ${u.message}`);
  }
}
function d1(t, r) {
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
const Wv = /^\{\s*"response"\s*:/, qE = {
  json: /^[\s"}]*(?:```\s*)?$/,
  xml: /^\s*(?:]]>)?\s*(?:<\/response>)?\s*(?:```\s*)?$/
};
function FE(t, r, a) {
  switch (a) {
    case "xml":
      return eo.test(t);
    case "json":
      return Wv.test(t.trim()) || Array.from(t.matchAll(ph)).some((s) => Wv.test(s[1].trim()));
    case "none":
      return t.trim().startsWith(r);
    default:
      return !1;
  }
}
function ey(t) {
  try {
    return JSON.parse(`"${t.replace(/[\u0000-\u001f]/g, (r) => JSON.stringify(r).slice(1, -1))}"`), !0;
  } catch {
    return !1;
  }
}
function ZE(t) {
  if (/^\s*(?:```|\{\s*")/.test(t) || /}\s*(?:```)?\s*$/.test(t))
    return !1;
  const r = t.replace(/"\s*$/, "").replace(/(^|[^\\])((?:\\\\)*)\\(?:u[0-9a-fA-F]{0,3})?$/, "$1$2");
  return !ey(t) && !ey(r);
}
function ty(t, r) {
  return !t || !r ? "" : /[.!?…"'”’»)\]*]$/.test(t) ? `

` : " ";
}
function GE(t, r) {
  return /[.!?…]["'”’»)\]*]*$/.test(t) && new RegExp("^\\p{L}", "u").test(r) ? `${t} ${r}` : t + r;
}
function VE(t, r, a) {
  const s = t.trim();
  if (r = go(r), a !== "none" && qE[a].test(r))
    return s;
  if (a === "json" && ZE(r)) {
    const u = r.trim();
    return u.startsWith(s) ? u : s + ty(s, u) + u;
  }
  if (!FE(r, s, a)) {
    const u = String(Du(d1(t, a) + r, a));
    if (u.startsWith(s))
      return GE(s, u.slice(s.length));
  }
  const l = String(Du(r, a));
  return l.startsWith(s) ? l : s + ty(s, l) + l;
}
var Il = { exports: {} }, Bl = { exports: {} }, Bn = {}, tn = {}, ny;
function rn() {
  if (ny) return tn;
  ny = 1, tn.__esModule = !0, tn.extend = l, tn.indexOf = h, tn.escapeExpression = m, tn.isEmpty = y, tn.createFrame = _, tn.blockParams = b, tn.appendContextPath = v;
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
  function m(d) {
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
var Ul = { exports: {} }, ry;
function Zn() {
  return ry || (ry = 1, (function(t, r) {
    r.__esModule = !0;
    var a = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(l, u) {
      var f = u && u.loc, p = void 0, h = void 0, m = void 0, y = void 0;
      f && (p = f.start.line, h = f.end.line, m = f.start.column, y = f.end.column, l += " - " + p + ":" + m);
      for (var _ = Error.prototype.constructor.call(this, l), b = 0; b < a.length; b++)
        this[a[b]] = _[a[b]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        f && (this.lineNumber = p, this.endLineNumber = h, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: m,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: y,
          enumerable: !0
        })) : (this.column = m, this.endColumn = y));
      } catch {
      }
    }
    s.prototype = new Error(), r.default = s, t.exports = r.default;
  })(Ul, Ul.exports)), Ul.exports;
}
var Zs = {}, Hl = { exports: {} }, ay;
function YE() {
  return ay || (ay = 1, (function(t, r) {
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
  })(Hl, Hl.exports)), Hl.exports;
}
var ql = { exports: {} }, iy;
function XE() {
  return iy || (iy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = rn(), l = Zn(), u = a(l);
    r.default = function(f) {
      f.registerHelper("each", function(p, h) {
        if (!h)
          throw new u.default("Must pass iterator to #each");
        var m = h.fn, y = h.inverse, _ = 0, b = "", v = void 0, d = void 0;
        h.data && h.ids && (d = s.appendContextPath(h.data.contextPath, h.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), h.data && (v = s.createFrame(h.data));
        function S(x, T, M) {
          v && (v.key = x, v.index = T, v.first = T === 0, v.last = !!M, d && (v.contextPath = d + x)), b = b + m(p[x], {
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
              Object.keys(p).forEach(function(T) {
                x !== void 0 && S(x, _ - 1), x = T, _++;
              }), x !== void 0 && S(x, _ - 1, !0);
            })();
        return _ === 0 && (b = y(this)), b;
      });
    }, t.exports = r.default;
  })(ql, ql.exports)), ql.exports;
}
var Fl = { exports: {} }, sy;
function $E() {
  return sy || (sy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = Zn(), l = a(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new l.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(Fl, Fl.exports)), Fl.exports;
}
var Zl = { exports: {} }, oy;
function QE() {
  return oy || (oy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = rn(), l = Zn(), u = a(l);
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
  })(Zl, Zl.exports)), Zl.exports;
}
var Gl = { exports: {} }, ly;
function JE() {
  return ly || (ly = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(a) {
      a.registerHelper("log", function() {
        for (var s = [void 0], l = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var f = 1;
        l.hash.level != null ? f = l.hash.level : l.data && l.data.level != null && (f = l.data.level), s[0] = f, a.log.apply(a, s);
      });
    }, t.exports = r.default;
  })(Gl, Gl.exports)), Gl.exports;
}
var Vl = { exports: {} }, uy;
function KE() {
  return uy || (uy = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(a) {
      a.registerHelper("lookup", function(s, l, u) {
        return s && u.lookupProperty(s, l);
      });
    }, t.exports = r.default;
  })(Vl, Vl.exports)), Vl.exports;
}
var Yl = { exports: {} }, cy;
function WE() {
  return cy || (cy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = rn(), l = Zn(), u = a(l);
    r.default = function(f) {
      f.registerHelper("with", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(p) && (p = p.call(this));
        var m = h.fn;
        if (s.isEmpty(p))
          return h.inverse(this);
        var y = h.data;
        return h.data && h.ids && (y = s.createFrame(h.data), y.contextPath = s.appendContextPath(h.data.contextPath, h.ids[0])), m(p, {
          data: y,
          blockParams: s.blockParams([p], [y && y.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Yl, Yl.exports)), Yl.exports;
}
var fy;
function h1() {
  if (fy) return Zs;
  fy = 1, Zs.__esModule = !0, Zs.registerDefaultHelpers = S, Zs.moveHelperToHooks = E;
  function t(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var r = YE(), a = t(r), s = XE(), l = t(s), u = $E(), f = t(u), p = QE(), h = t(p), m = JE(), y = t(m), _ = KE(), b = t(_), v = WE(), d = t(v);
  function S(O) {
    a.default(O), l.default(O), f.default(O), h.default(O), y.default(O), b.default(O), d.default(O);
  }
  function E(O, w, D) {
    O.helpers[w] && (O.hooks[w] = O.helpers[w], D || delete O.helpers[w]);
  }
  return Zs;
}
var Xl = {}, $l = { exports: {} }, dy;
function eC() {
  return dy || (dy = 1, (function(t, r) {
    r.__esModule = !0;
    var a = rn();
    r.default = function(s) {
      s.registerDecorator("inline", function(l, u, f, p) {
        var h = l;
        return u.partials || (u.partials = {}, h = function(m, y) {
          var _ = f.partials;
          f.partials = a.extend({}, _, u.partials);
          var b = l(m, y);
          return f.partials = _, b;
        }), u.partials[p.args[0]] = p.fn, h;
      });
    }, t.exports = r.default;
  })($l, $l.exports)), $l.exports;
}
var hy;
function tC() {
  if (hy) return Xl;
  hy = 1, Xl.__esModule = !0, Xl.registerDefaultDecorators = s;
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var r = eC(), a = t(r);
  function s(l) {
    a.default(l);
  }
  return Xl;
}
var Ql = { exports: {} }, py;
function p1() {
  return py || (py = 1, (function(t, r) {
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
          for (var p = arguments.length, h = Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
            h[m - 1] = arguments[m];
          console[f].apply(console, h);
        }
      }
    };
    r.default = s, t.exports = r.default;
  })(Ql, Ql.exports)), Ql.exports;
}
var Ni = {}, Jl = {}, my;
function nC() {
  if (my) return Jl;
  my = 1, Jl.__esModule = !0, Jl.createNewLookupObject = r;
  var t = rn();
  function r() {
    for (var a = arguments.length, s = Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Jl;
}
var gy;
function m1() {
  if (gy) return Ni;
  gy = 1, Ni.__esModule = !0, Ni.createProtoAccessControl = u, Ni.resultIsAllowed = f, Ni.resetLoggedProperties = m;
  function t(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = nC(), a = p1(), s = t(a), l = /* @__PURE__ */ Object.create(null);
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
  function m() {
    Object.keys(l).forEach(function(y) {
      delete l[y];
    });
  }
  return Ni;
}
var vy;
function mh() {
  if (vy) return Bn;
  vy = 1, Bn.__esModule = !0, Bn.HandlebarsEnvironment = d;
  function t(E) {
    return E && E.__esModule ? E : { default: E };
  }
  var r = rn(), a = Zn(), s = t(a), l = h1(), u = tC(), f = p1(), p = t(f), h = m1(), m = "4.7.8";
  Bn.VERSION = m;
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
var Kl = { exports: {} }, yy;
function rC() {
  return yy || (yy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(s) {
      this.string = s;
    }
    a.prototype.toString = a.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = a, t.exports = r.default;
  })(Kl, Kl.exports)), Kl.exports;
}
var yr = {}, Wl = {}, by;
function aC() {
  if (by) return Wl;
  by = 1, Wl.__esModule = !0, Wl.wrapHelper = t;
  function t(r, a) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = a(u), r.apply(this, arguments);
    };
    return s;
  }
  return Wl;
}
var _y;
function iC() {
  if (_y) return yr;
  _y = 1, yr.__esModule = !0, yr.checkRevision = y, yr.template = _, yr.wrapProgram = b, yr.resolvePartial = v, yr.invokePartial = d, yr.noop = S;
  function t(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function r(x) {
    if (x && x.__esModule)
      return x;
    var T = {};
    if (x != null)
      for (var M in x)
        Object.prototype.hasOwnProperty.call(x, M) && (T[M] = x[M]);
    return T.default = x, T;
  }
  var a = rn(), s = r(a), l = Zn(), u = t(l), f = mh(), p = h1(), h = aC(), m = m1();
  function y(x) {
    var T = x && x[0] || 1, M = f.COMPILER_REVISION;
    if (!(T >= f.LAST_COMPATIBLE_COMPILER_REVISION && T <= f.COMPILER_REVISION))
      if (T < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[M], U = f.REVISION_CHANGES[T];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + U + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + x[1] + ").");
  }
  function _(x, T) {
    if (!T)
      throw new u.default("No environment passed to template");
    if (!x || !x.main)
      throw new u.default("Unknown template object: " + typeof x);
    x.main.decorator = x.main_d, T.VM.checkRevision(x.compiler);
    var M = x.compiler && x.compiler[0] === 7;
    function k(B, G, $) {
      $.hash && (G = s.extend({}, G, $.hash), $.ids && ($.ids[0] = !0)), B = T.VM.resolvePartial.call(this, B, G, $);
      var ue = s.extend({}, $, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), he = T.VM.invokePartial.call(this, B, G, ue);
      if (he == null && T.compile && ($.partials[$.name] = T.compile(B, x.compilerOptions, T), he = $.partials[$.name](G, ue)), he != null) {
        if ($.indent) {
          for (var xe = he.split(`
`), H = 0, te = xe.length; H < te && !(!xe[H] && H + 1 === te); H++)
            xe[H] = $.indent + xe[H];
          he = xe.join(`
`);
        }
        return he;
      } else
        throw new u.default("The partial " + $.name + " could not be compiled when running in runtime-only mode");
    }
    var U = {
      strict: function(G, $, ue) {
        if (!G || !($ in G))
          throw new u.default('"' + $ + '" not defined in ' + G, {
            loc: ue
          });
        return U.lookupProperty(G, $);
      },
      lookupProperty: function(G, $) {
        var ue = G[$];
        if (ue == null || Object.prototype.hasOwnProperty.call(G, $) || m.resultIsAllowed(ue, U.protoAccessControl, $))
          return ue;
      },
      lookup: function(G, $) {
        for (var ue = G.length, he = 0; he < ue; he++) {
          var xe = G[he] && U.lookupProperty(G[he], $);
          if (xe != null)
            return G[he][$];
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
      program: function(G, $, ue, he, xe) {
        var H = this.programs[G], te = this.fn(G);
        return $ || xe || he || ue ? H = b(this, G, te, $, ue, he, xe) : H || (H = this.programs[G] = b(this, G, te)), H;
      },
      data: function(G, $) {
        for (; G && $--; )
          G = G._parent;
        return G;
      },
      mergeIfNeeded: function(G, $) {
        var ue = G || $;
        return G && $ && G !== $ && (ue = s.extend({}, $, G)), ue;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: T.VM.noop,
      compilerInfo: x.compiler
    };
    function Y(B) {
      var G = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], $ = G.data;
      Y._setup(G), !G.partial && x.useData && ($ = E(B, $));
      var ue = void 0, he = x.useBlockParams ? [] : void 0;
      x.useDepths && (G.depths ? ue = B != G.depths[0] ? [B].concat(G.depths) : G.depths : ue = [B]);
      function xe(H) {
        return "" + x.main(U, H, U.helpers, U.partials, $, he, ue);
      }
      return xe = O(x.main, xe, U, G.depths || [], $, he), xe(B, G);
    }
    return Y.isTop = !0, Y._setup = function(B) {
      if (B.partial)
        U.protoAccessControl = B.protoAccessControl, U.helpers = B.helpers, U.partials = B.partials, U.decorators = B.decorators, U.hooks = B.hooks;
      else {
        var G = s.extend({}, T.helpers, B.helpers);
        w(G, U), U.helpers = G, x.usePartial && (U.partials = U.mergeIfNeeded(B.partials, T.partials)), (x.usePartial || x.useDecorators) && (U.decorators = s.extend({}, T.decorators, B.decorators)), U.hooks = {}, U.protoAccessControl = m.createProtoAccessControl(B);
        var $ = B.allowCallsToHelperMissing || M;
        p.moveHelperToHooks(U, "helperMissing", $), p.moveHelperToHooks(U, "blockHelperMissing", $);
      }
    }, Y._child = function(B, G, $, ue) {
      if (x.useBlockParams && !$)
        throw new u.default("must pass block params");
      if (x.useDepths && !ue)
        throw new u.default("must pass parent depths");
      return b(U, B, x[B], G, 0, $, ue);
    }, Y;
  }
  function b(x, T, M, k, U, Y, B) {
    function G($) {
      var ue = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], he = B;
      return B && $ != B[0] && !($ === x.nullContext && B[0] === null) && (he = [$].concat(B)), M(x, $, x.helpers, x.partials, ue.data || k, Y && [ue.blockParams].concat(Y), he);
    }
    return G = O(M, G, x, B, k, Y), G.program = T, G.depth = B ? B.length : 0, G.blockParams = U || 0, G;
  }
  function v(x, T, M) {
    return x ? !x.call && !M.name && (M.name = x, x = M.partials[x]) : M.name === "@partial-block" ? x = M.data["partial-block"] : x = M.partials[M.name], x;
  }
  function d(x, T, M) {
    var k = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var U = void 0;
    if (M.fn && M.fn !== S && (function() {
      M.data = f.createFrame(M.data);
      var Y = M.fn;
      U = M.data["partial-block"] = function(G) {
        var $ = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return $.data = f.createFrame($.data), $.data["partial-block"] = k, Y(G, $);
      }, Y.partials && (M.partials = s.extend({}, M.partials, Y.partials));
    })(), x === void 0 && U && (x = U), x === void 0)
      throw new u.default("The partial " + M.name + " could not be found");
    if (x instanceof Function)
      return x(T, M);
  }
  function S() {
    return "";
  }
  function E(x, T) {
    return (!T || !("root" in T)) && (T = T ? f.createFrame(T) : {}, T.root = x), T;
  }
  function O(x, T, M, k, U, Y) {
    if (x.decorator) {
      var B = {};
      T = x.decorator(T, B, M, k && k[0], U, Y, k), s.extend(T, B);
    }
    return T;
  }
  function w(x, T) {
    Object.keys(x).forEach(function(M) {
      var k = x[M];
      x[M] = D(k, T);
    });
  }
  function D(x, T) {
    var M = T.lookupProperty;
    return h.wrapHelper(x, function(k) {
      return s.extend({ lookupProperty: M }, k);
    });
  }
  return yr;
}
var eu = { exports: {} }, Sy;
function g1() {
  return Sy || (Sy = 1, (function(t, r) {
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
  })(eu, eu.exports)), eu.exports;
}
var xy;
function sC() {
  return xy || (xy = 1, (function(t, r) {
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
    var l = mh(), u = s(l), f = rC(), p = a(f), h = Zn(), m = a(h), y = rn(), _ = s(y), b = iC(), v = s(b), d = g1(), S = a(d);
    function E() {
      var w = new u.HandlebarsEnvironment();
      return _.extend(w, u), w.SafeString = p.default, w.Exception = m.default, w.Utils = _, w.escapeExpression = _.escapeExpression, w.VM = v, w.template = function(D) {
        return v.template(D, w);
      }, w;
    }
    var O = E();
    O.create = E, S.default(O), O.default = O, r.default = O, t.exports = r.default;
  })(Bl, Bl.exports)), Bl.exports;
}
var tu = { exports: {} }, Ey;
function v1() {
  return Ey || (Ey = 1, (function(t, r) {
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
  })(tu, tu.exports)), tu.exports;
}
var Di = {}, nu = { exports: {} }, Cy;
function oC() {
  return Cy || (Cy = 1, (function(t, r) {
    r.__esModule = !0;
    var a = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(p, h, m, y, _, b, v) {
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
          var h = this, m = [0], y = [null], _ = [], b = this.table, v = "", d = 0, S = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var E = this.lexer.yylloc;
          _.push(E);
          var O = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function w() {
            var ue;
            return ue = h.lexer.lex() || 1, typeof ue != "number" && (ue = h.symbols_[ue] || ue), ue;
          }
          for (var D, x, T, M, k = {}, U, Y, B, G; ; ) {
            if (x = m[m.length - 1], this.defaultActions[x] ? T = this.defaultActions[x] : ((D === null || typeof D > "u") && (D = w()), T = b[x] && b[x][D]), typeof T > "u" || !T.length || !T[0]) {
              var $ = "";
              {
                G = [];
                for (U in b[x]) this.terminals_[U] && U > 2 && G.push("'" + this.terminals_[U] + "'");
                this.lexer.showPosition ? $ = "Parse error on line " + (d + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + G.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : $ = "Parse error on line " + (d + 1) + ": Unexpected " + (D == 1 ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError($, { text: this.lexer.match, token: this.terminals_[D] || D, line: this.lexer.yylineno, loc: E, expected: G });
              }
            }
            if (T[0] instanceof Array && T.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + x + ", token: " + D);
            switch (T[0]) {
              case 1:
                m.push(D), y.push(this.lexer.yytext), _.push(this.lexer.yylloc), m.push(T[1]), D = null, S = this.lexer.yyleng, v = this.lexer.yytext, d = this.lexer.yylineno, E = this.lexer.yylloc;
                break;
              case 2:
                if (Y = this.productions_[T[1]][1], k.$ = y[y.length - Y], k._$ = { first_line: _[_.length - (Y || 1)].first_line, last_line: _[_.length - 1].last_line, first_column: _[_.length - (Y || 1)].first_column, last_column: _[_.length - 1].last_column }, O && (k._$.range = [_[_.length - (Y || 1)].range[0], _[_.length - 1].range[1]]), M = this.performAction.call(k, v, S, d, this.yy, T[1], y, _), typeof M < "u")
                  return M;
                Y && (m = m.slice(0, -1 * Y * 2), y = y.slice(0, -1 * Y), _ = _.slice(0, -1 * Y)), m.push(this.productions_[T[1]][0]), y.push(k.$), _.push(k._$), B = b[m[m.length - 2]][m[m.length - 1]], m.push(B);
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
          parseError: function(h, m) {
            if (this.yy.parser)
              this.yy.parser.parseError(h, m);
            else
              throw new Error(h);
          },
          setInput: function(h) {
            return this._input = h, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var h = this._input[0];
            this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
            var m = h.match(/(?:\r\n?|\n).*/g);
            return m ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h;
          },
          unput: function(h) {
            var m = h.length, y = h.split(/(?:\r\n?|\n)/g);
            this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - m - 1), this.offset -= m;
            var _ = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), y.length - 1 && (this.yylineno -= y.length - 1);
            var b = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: y ? (y.length === _.length ? this.yylloc.first_column : 0) + _[_.length - y.length].length - y[0].length : this.yylloc.first_column - m
            }, this.options.ranges && (this.yylloc.range = [b[0], b[0] + this.yyleng - m]), this;
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
            var h = this.pastInput(), m = new Array(h.length + 1).join("-");
            return h + this.upcomingInput() + `
` + m + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var h, m, y, _, b;
            this._more || (this.yytext = "", this.match = "");
            for (var v = this._currentRules(), d = 0; d < v.length && (y = this._input.match(this.rules[v[d]]), !(y && (!m || y[0].length > m[0].length) && (m = y, _ = d, !this.options.flex))); d++)
              ;
            return m ? (b = m[0].match(/(?:\r\n?|\n).*/g), b && (this.yylineno += b.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: b ? b[b.length - 1].length - b[b.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + m[0].length
            }, this.yytext += m[0], this.match += m[0], this.matches = m, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(m[0].length), this.matched += m[0], h = this.performAction.call(this, this.yy, this, v[_], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
        return f.options = {}, f.performAction = function(h, m, y, _) {
          function b(v, d) {
            return m.yytext = m.yytext.substring(v, m.yyleng - d + v);
          }
          switch (y) {
            case 0:
              if (m.yytext.slice(-2) === "\\\\" ? (b(0, 1), this.begin("mu")) : m.yytext.slice(-1) === "\\" ? (b(0, 1), this.begin("emu")) : this.begin("mu"), m.yytext) return 15;
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
              this.unput(m.yytext), this.popState(), this.begin("com");
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
              return m.yytext = b(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return m.yytext = b(1, 2).replace(/\\'/g, "'"), 80;
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
              return m.yytext = m.yytext.replace(/\\([\\\]])/g, "$1"), 72;
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
  })(nu, nu.exports)), nu.exports;
}
var ru = { exports: {} }, au = { exports: {} }, wy;
function y1() {
  return wy || (wy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(m) {
      return m && m.__esModule ? m : { default: m };
    }
    var s = Zn(), l = a(s);
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
    function f(m) {
      this.acceptRequired(m, "path"), this.acceptArray(m.params), this.acceptKey(m, "hash");
    }
    function p(m) {
      f.call(this, m), this.acceptKey(m, "program"), this.acceptKey(m, "inverse");
    }
    function h(m) {
      this.acceptRequired(m, "name"), this.acceptArray(m.params), this.acceptKey(m, "hash");
    }
    r.default = u, t.exports = r.default;
  })(au, au.exports)), au.exports;
}
var Ay;
function lC() {
  return Ay || (Ay = 1, (function(t, r) {
    r.__esModule = !0;
    function a(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = y1(), l = a(s);
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
          var w = f(v, d, b), D = p(v, d, b), x = O.openStandalone && w, T = O.closeStandalone && D, M = O.inlineStandalone && w && D;
          O.close && h(v, d, !0), O.open && m(v, d, !0), _ && M && (h(v, d), m(v, d) && E.type === "PartialStatement" && (E.indent = /([ \t]+$)/.exec(v[d - 1].original)[1])), _ && x && (h((E.program || E.inverse).body), m(v, d)), _ && T && (h(v, d), m((E.inverse || E.program).body));
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
        E.open && m(_.body, null, !0), E.close && h(v.body, null, !0), y.closeStrip.open && m(d.body, null, !0), !this.options.ignoreStandalone && f(_.body) && p(v.body) && (m(_.body), h(v.body));
      } else y.closeStrip.open && m(_.body, null, !0);
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
    function m(y, _, b) {
      var v = y[_ == null ? y.length - 1 : _ - 1];
      if (!(!v || v.type !== "ContentStatement" || !b && v.leftStripped)) {
        var d = v.value;
        return v.value = v.value.replace(b ? /\s+$/ : /[ \t]+$/, ""), v.leftStripped = v.value !== d, v.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })(ru, ru.exports)), ru.exports;
}
var hn = {}, Ty;
function uC() {
  if (Ty) return hn;
  Ty = 1, hn.__esModule = !0, hn.SourceLocation = l, hn.id = u, hn.stripFlags = f, hn.stripComment = p, hn.preparePath = h, hn.prepareMustache = m, hn.prepareRawBlock = y, hn.prepareBlock = _, hn.prepareProgram = b, hn.preparePartialBlock = v;
  function t(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var r = Zn(), a = t(r);
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
    for (var O = d ? "@" : "", w = [], D = 0, x = 0, T = S.length; x < T; x++) {
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
  function m(d, S, E, O, w, D) {
    var x = O.charAt(3) || O.charAt(2), T = x !== "{" && x !== "&", M = /\*/.test(O);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: d,
      params: S,
      hash: E,
      escaped: T,
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
    var T = void 0, M = void 0;
    if (E) {
      if (x)
        throw new a.default("Unexpected inverse block on decorator", E);
      E.chain && (E.program.body[0].closeStrip = O.strip), M = E.strip, T = E.program;
    }
    return w && (w = T, T = S, S = w), {
      type: x ? "DecoratorBlock" : "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: S,
      inverse: T,
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
var Oy;
function cC() {
  if (Oy) return Di;
  Oy = 1, Di.__esModule = !0, Di.parseWithoutProcessing = y, Di.parse = _;
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
  var a = oC(), s = r(a), l = lC(), u = r(l), f = uC(), p = t(f), h = rn();
  Di.parser = s.default;
  var m = {};
  h.extend(m, p);
  function y(b, v) {
    if (b.type === "Program")
      return b;
    s.default.yy = m, m.locInfo = function(S) {
      return new m.SourceLocation(v && v.srcName, S);
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
var Mi = {}, Ny;
function fC() {
  if (Ny) return Mi;
  Ny = 1, Mi.__esModule = !0, Mi.Compiler = p, Mi.precompile = h, Mi.compile = m;
  function t(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var r = Zn(), a = t(r), s = rn(), l = v1(), u = t(l), f = [].slice;
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
  function m(b, v, d) {
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
    }, O._child = function(w, D, x, T) {
      return S || (S = E()), S._child(w, D, x, T);
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
var iu = { exports: {} }, su = { exports: {} }, Gs = {}, Sd = {}, ou = {}, lu = {}, Dy;
function dC() {
  if (Dy) return lu;
  Dy = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return lu.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, lu.decode = function(r) {
    var a = 65, s = 90, l = 97, u = 122, f = 48, p = 57, h = 43, m = 47, y = 26, _ = 52;
    return a <= r && r <= s ? r - a : l <= r && r <= u ? r - l + y : f <= r && r <= p ? r - f + _ : r == h ? 62 : r == m ? 63 : -1;
  }, lu;
}
var My;
function b1() {
  if (My) return ou;
  My = 1;
  var t = dC(), r = 5, a = 1 << r, s = a - 1, l = a;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function f(p) {
    var h = (p & 1) === 1, m = p >> 1;
    return h ? -m : m;
  }
  return ou.encode = function(h) {
    var m = "", y, _ = u(h);
    do
      y = _ & s, _ >>>= r, _ > 0 && (y |= l), m += t.encode(y);
    while (_ > 0);
    return m;
  }, ou.decode = function(h, m, y) {
    var _ = h.length, b = 0, v = 0, d, S;
    do {
      if (m >= _)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (S = t.decode(h.charCodeAt(m++)), S === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(m - 1));
      d = !!(S & l), S &= s, b = b + (S << v), v += r;
    } while (d);
    y.value = f(b), y.rest = m;
  }, ou;
}
var xd = {}, ky;
function vo() {
  return ky || (ky = 1, (function(t) {
    function r(x, T, M) {
      if (T in x)
        return x[T];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + T + '" is a required argument.');
    }
    t.getArg = r;
    var a = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function l(x) {
      var T = x.match(a);
      return T ? {
        scheme: T[1],
        auth: T[2],
        host: T[3],
        port: T[4],
        path: T[5]
      } : null;
    }
    t.urlParse = l;
    function u(x) {
      var T = "";
      return x.scheme && (T += x.scheme + ":"), T += "//", x.auth && (T += x.auth + "@"), x.host && (T += x.host), x.port && (T += ":" + x.port), x.path && (T += x.path), T;
    }
    t.urlGenerate = u;
    function f(x) {
      var T = x, M = l(x);
      if (M) {
        if (!M.path)
          return x;
        T = M.path;
      }
      for (var k = t.isAbsolute(T), U = T.split(/\/+/), Y, B = 0, G = U.length - 1; G >= 0; G--)
        Y = U[G], Y === "." ? U.splice(G, 1) : Y === ".." ? B++ : B > 0 && (Y === "" ? (U.splice(G + 1, B), B = 0) : (U.splice(G, 2), B--));
      return T = U.join("/"), T === "" && (T = k ? "/" : "."), M ? (M.path = T, u(M)) : T;
    }
    t.normalize = f;
    function p(x, T) {
      x === "" && (x = "."), T === "" && (T = ".");
      var M = l(T), k = l(x);
      if (k && (x = k.path || "/"), M && !M.scheme)
        return k && (M.scheme = k.scheme), u(M);
      if (M || T.match(s))
        return T;
      if (k && !k.host && !k.path)
        return k.host = T, u(k);
      var U = T.charAt(0) === "/" ? T : f(x.replace(/\/+$/, "") + "/" + T);
      return k ? (k.path = U, u(k)) : U;
    }
    t.join = p, t.isAbsolute = function(x) {
      return x.charAt(0) === "/" || a.test(x);
    };
    function h(x, T) {
      x === "" && (x = "."), x = x.replace(/\/$/, "");
      for (var M = 0; T.indexOf(x + "/") !== 0; ) {
        var k = x.lastIndexOf("/");
        if (k < 0 || (x = x.slice(0, k), x.match(/^([^\/]+:\/)?\/*$/)))
          return T;
        ++M;
      }
      return Array(M + 1).join("../") + T.substr(x.length + 1);
    }
    t.relative = h;
    var m = (function() {
      var x = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in x);
    })();
    function y(x) {
      return x;
    }
    function _(x) {
      return v(x) ? "$" + x : x;
    }
    t.toSetString = m ? y : _;
    function b(x) {
      return v(x) ? x.slice(1) : x;
    }
    t.fromSetString = m ? y : b;
    function v(x) {
      if (!x)
        return !1;
      var T = x.length;
      if (T < 9 || x.charCodeAt(T - 1) !== 95 || x.charCodeAt(T - 2) !== 95 || x.charCodeAt(T - 3) !== 111 || x.charCodeAt(T - 4) !== 116 || x.charCodeAt(T - 5) !== 111 || x.charCodeAt(T - 6) !== 114 || x.charCodeAt(T - 7) !== 112 || x.charCodeAt(T - 8) !== 95 || x.charCodeAt(T - 9) !== 95)
        return !1;
      for (var M = T - 10; M >= 0; M--)
        if (x.charCodeAt(M) !== 36)
          return !1;
      return !0;
    }
    function d(x, T, M) {
      var k = E(x.source, T.source);
      return k !== 0 || (k = x.originalLine - T.originalLine, k !== 0) || (k = x.originalColumn - T.originalColumn, k !== 0 || M) || (k = x.generatedColumn - T.generatedColumn, k !== 0) || (k = x.generatedLine - T.generatedLine, k !== 0) ? k : E(x.name, T.name);
    }
    t.compareByOriginalPositions = d;
    function S(x, T, M) {
      var k = x.generatedLine - T.generatedLine;
      return k !== 0 || (k = x.generatedColumn - T.generatedColumn, k !== 0 || M) || (k = E(x.source, T.source), k !== 0) || (k = x.originalLine - T.originalLine, k !== 0) || (k = x.originalColumn - T.originalColumn, k !== 0) ? k : E(x.name, T.name);
    }
    t.compareByGeneratedPositionsDeflated = S;
    function E(x, T) {
      return x === T ? 0 : x === null ? 1 : T === null ? -1 : x > T ? 1 : -1;
    }
    function O(x, T) {
      var M = x.generatedLine - T.generatedLine;
      return M !== 0 || (M = x.generatedColumn - T.generatedColumn, M !== 0) || (M = E(x.source, T.source), M !== 0) || (M = x.originalLine - T.originalLine, M !== 0) || (M = x.originalColumn - T.originalColumn, M !== 0) ? M : E(x.name, T.name);
    }
    t.compareByGeneratedPositionsInflated = O;
    function w(x) {
      return JSON.parse(x.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = w;
    function D(x, T, M) {
      if (T = T || "", x && (x[x.length - 1] !== "/" && T[0] !== "/" && (x += "/"), T = x + T), M) {
        var k = l(M);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var U = k.path.lastIndexOf("/");
          U >= 0 && (k.path = k.path.substring(0, U + 1));
        }
        T = p(u(k), T);
      }
      return f(T);
    }
    t.computeSourceURL = D;
  })(xd)), xd;
}
var Ed = {}, Ry;
function _1() {
  if (Ry) return Ed;
  Ry = 1;
  var t = vo(), r = Object.prototype.hasOwnProperty, a = typeof Map < "u";
  function s() {
    this._array = [], this._set = a ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, f) {
    for (var p = new s(), h = 0, m = u.length; h < m; h++)
      p.add(u[h], f);
    return p;
  }, s.prototype.size = function() {
    return a ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, f) {
    var p = a ? u : t.toSetString(u), h = a ? this.has(u) : r.call(this._set, p), m = this._array.length;
    (!h || f) && this._array.push(u), h || (a ? this._set.set(u, m) : this._set[p] = m);
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
  }, Ed.ArraySet = s, Ed;
}
var Cd = {}, jy;
function hC() {
  if (jy) return Cd;
  jy = 1;
  var t = vo();
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
  }, Cd.MappingList = a, Cd;
}
var zy;
function S1() {
  if (zy) return Sd;
  zy = 1;
  var t = b1(), r = vo(), a = _1().ArraySet, s = hC().MappingList;
  function l(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new a(), this._names = new a(), this._mappings = new s(), this._sourcesContents = null;
  }
  return l.prototype._version = 3, l.fromSourceMap = function(f) {
    var p = f.sourceRoot, h = new l({
      file: f.file,
      sourceRoot: p
    });
    return f.eachMapping(function(m) {
      var y = {
        generated: {
          line: m.generatedLine,
          column: m.generatedColumn
        }
      };
      m.source != null && (y.source = m.source, p != null && (y.source = r.relative(p, y.source)), y.original = {
        line: m.originalLine,
        column: m.originalColumn
      }, m.name != null && (y.name = m.name)), h.addMapping(y);
    }), f.sources.forEach(function(m) {
      var y = m;
      p !== null && (y = r.relative(p, m)), h._sources.has(y) || h._sources.add(y);
      var _ = f.sourceContentFor(m);
      _ != null && h.setSourceContent(m, _);
    }), h;
  }, l.prototype.addMapping = function(f) {
    var p = r.getArg(f, "generated"), h = r.getArg(f, "original", null), m = r.getArg(f, "source", null), y = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(p, h, m, y), m != null && (m = String(m), this._sources.has(m) || this._sources.add(m)), y != null && (y = String(y), this._names.has(y) || this._names.add(y)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: m,
      name: y
    });
  }, l.prototype.setSourceContent = function(f, p) {
    var h = f;
    this._sourceRoot != null && (h = r.relative(this._sourceRoot, h)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(h)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(h)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, l.prototype.applySourceMap = function(f, p, h) {
    var m = p;
    if (p == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      m = f.file;
    }
    var y = this._sourceRoot;
    y != null && (m = r.relative(y, m));
    var _ = new a(), b = new a();
    this._mappings.unsortedForEach(function(v) {
      if (v.source === m && v.originalLine != null) {
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
  }, l.prototype._validateMapping = function(f, p, h, m) {
    if (p && typeof p.line != "number" && typeof p.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !p && !h && !m)) {
      if (f && "line" in f && "column" in f && p && "line" in p && "column" in p && f.line > 0 && f.column >= 0 && p.line > 0 && p.column >= 0 && h)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: h,
        original: p,
        name: m
      }));
    }
  }, l.prototype._serializeMappings = function() {
    for (var f = 0, p = 1, h = 0, m = 0, y = 0, _ = 0, b = "", v, d, S, E, O = this._mappings.toArray(), w = 0, D = O.length; w < D; w++) {
      if (d = O[w], v = "", d.generatedLine !== p)
        for (f = 0; d.generatedLine !== p; )
          v += ";", p++;
      else if (w > 0) {
        if (!r.compareByGeneratedPositionsInflated(d, O[w - 1]))
          continue;
        v += ",";
      }
      v += t.encode(d.generatedColumn - f), f = d.generatedColumn, d.source != null && (E = this._sources.indexOf(d.source), v += t.encode(E - _), _ = E, v += t.encode(d.originalLine - 1 - m), m = d.originalLine - 1, v += t.encode(d.originalColumn - h), h = d.originalColumn, d.name != null && (S = this._names.indexOf(d.name), v += t.encode(S - y), y = S)), b += v;
    }
    return b;
  }, l.prototype._generateSourcesContent = function(f, p) {
    return f.map(function(h) {
      if (!this._sourcesContents)
        return null;
      p != null && (h = r.relative(p, h));
      var m = r.toSetString(h);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, m) ? this._sourcesContents[m] : null;
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
  }, Sd.SourceMapGenerator = l, Sd;
}
var Vs = {}, wd = {}, Ly;
function pC() {
  return Ly || (Ly = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(a, s, l, u, f, p) {
      var h = Math.floor((s - a) / 2) + a, m = f(l, u[h], !0);
      return m === 0 ? h : m > 0 ? s - h > 1 ? r(h, s, l, u, f, p) : p == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : h : h - a > 1 ? r(a, h, l, u, f, p) : p == t.LEAST_UPPER_BOUND ? h : a < 0 ? -1 : a;
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
  })(wd)), wd;
}
var Ad = {}, Py;
function mC() {
  if (Py) return Ad;
  Py = 1;
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
      for (var m = s[f], y = u; y < f; y++)
        l(s[y], m) <= 0 && (h += 1, t(s, h, y));
      t(s, h + 1, y);
      var _ = h + 1;
      a(s, l, u, _ - 1), a(s, l, _ + 1, f);
    }
  }
  return Ad.quickSort = function(s, l) {
    a(s, l, 0, s.length - 1);
  }, Ad;
}
var Iy;
function gC() {
  if (Iy) return Vs;
  Iy = 1;
  var t = vo(), r = pC(), a = _1().ArraySet, s = b1(), l = mC().quickSort;
  function u(m, y) {
    var _ = m;
    return typeof m == "string" && (_ = t.parseSourceMapInput(m)), _.sections != null ? new h(_, y) : new f(_, y);
  }
  u.fromSourceMap = function(m, y) {
    return f.fromSourceMap(m, y);
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
  function f(m, y) {
    var _ = m;
    typeof m == "string" && (_ = t.parseSourceMapInput(m));
    var b = t.getArg(_, "version"), v = t.getArg(_, "sources"), d = t.getArg(_, "names", []), S = t.getArg(_, "sourceRoot", null), E = t.getArg(_, "sourcesContent", null), O = t.getArg(_, "mappings"), w = t.getArg(_, "file", null);
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    S && (S = t.normalize(S)), v = v.map(String).map(t.normalize).map(function(D) {
      return S && t.isAbsolute(S) && t.isAbsolute(D) ? t.relative(S, D) : D;
    }), this._names = a.fromArray(d.map(String), !0), this._sources = a.fromArray(v, !0), this._absoluteSources = this._sources.toArray().map(function(D) {
      return t.computeSourceURL(S, D, y);
    }), this.sourceRoot = S, this.sourcesContent = E, this._mappings = O, this._sourceMapURL = y, this.file = w;
  }
  f.prototype = Object.create(u.prototype), f.prototype.consumer = u, f.prototype._findSourceIndex = function(m) {
    var y = m;
    if (this.sourceRoot != null && (y = t.relative(this.sourceRoot, y)), this._sources.has(y))
      return this._sources.indexOf(y);
    var _;
    for (_ = 0; _ < this._absoluteSources.length; ++_)
      if (this._absoluteSources[_] == m)
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
      var x = S[w], T = new p();
      T.generatedLine = x.generatedLine, T.generatedColumn = x.generatedColumn, x.source && (T.source = d.indexOf(x.source), T.originalLine = x.originalLine, T.originalColumn = x.originalColumn, x.name && (T.name = v.indexOf(x.name)), O.push(T)), E.push(T);
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
    for (var b = 1, v = 0, d = 0, S = 0, E = 0, O = 0, w = y.length, D = 0, x = {}, T = {}, M = [], k = [], U, Y, B, G, $; D < w; )
      if (y.charAt(D) === ";")
        b++, D++, v = 0;
      else if (y.charAt(D) === ",")
        D++;
      else {
        for (U = new p(), U.generatedLine = b, G = D; G < w && !this._charIsMappingSeparator(y, G); G++)
          ;
        if (Y = y.slice(D, G), B = x[Y], B)
          D += Y.length;
        else {
          for (B = []; D < G; )
            s.decode(y, D, T), $ = T.value, D = T.rest, B.push($);
          if (B.length === 2)
            throw new Error("Found a source, but no line and column");
          if (B.length === 3)
            throw new Error("Found a source and line, but no column");
          x[Y] = B;
        }
        U.generatedColumn = v + B[0], v = U.generatedColumn, B.length > 1 && (U.source = E + B[1], E += B[1], U.originalLine = d + B[2], d = U.originalLine, U.originalLine += 1, U.originalColumn = S + B[3], S = U.originalColumn, B.length > 4 && (U.name = O + B[4], O += B[4])), k.push(U), typeof U.originalLine == "number" && M.push(U);
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
  function h(m, y) {
    var _ = m;
    typeof m == "string" && (_ = t.parseSourceMapInput(m));
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
      for (var m = [], y = 0; y < this._sections.length; y++)
        for (var _ = 0; _ < this._sections[y].consumer.sources.length; _++)
          m.push(this._sections[y].consumer.sources[_]);
      return m;
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
var Td = {}, By;
function vC() {
  if (By) return Td;
  By = 1;
  var t = S1().SourceMapGenerator, r = vo(), a = /(\r?\n)/, s = 10, l = "$$$isSourceNode$$$";
  function u(f, p, h, m, y) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = p ?? null, this.source = h ?? null, this.name = y ?? null, this[l] = !0, m != null && this.add(m);
  }
  return u.fromStringWithSourceMap = function(p, h, m) {
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
      D != null && (m != null && (w = r.join(m, w)), y.setSourceContent(w, D));
    }), y;
    function O(w, D) {
      if (w === null || w.source === void 0)
        y.add(D);
      else {
        var x = m ? r.join(m, w.source) : w.source;
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
    for (var h, m = 0, y = this.children.length; m < y; m++)
      h = this.children[m], h[l] ? h.walk(p) : h !== "" && p(h, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(p) {
    var h, m, y = this.children.length;
    if (y > 0) {
      for (h = [], m = 0; m < y - 1; m++)
        h.push(this.children[m]), h.push(p);
      h.push(this.children[m]), this.children = h;
    }
    return this;
  }, u.prototype.replaceRight = function(p, h) {
    var m = this.children[this.children.length - 1];
    return m[l] ? m.replaceRight(p, h) : typeof m == "string" ? this.children[this.children.length - 1] = m.replace(p, h) : this.children.push("".replace(p, h)), this;
  }, u.prototype.setSourceContent = function(p, h) {
    this.sourceContents[r.toSetString(p)] = h;
  }, u.prototype.walkSourceContents = function(p) {
    for (var h = 0, m = this.children.length; h < m; h++)
      this.children[h][l] && this.children[h].walkSourceContents(p);
    for (var y = Object.keys(this.sourceContents), h = 0, m = y.length; h < m; h++)
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
    }, m = new t(p), y = !1, _ = null, b = null, v = null, d = null;
    return this.walk(function(S, E) {
      h.code += S, E.source !== null && E.line !== null && E.column !== null ? ((_ !== E.source || b !== E.line || v !== E.column || d !== E.name) && m.addMapping({
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
      }), _ = E.source, b = E.line, v = E.column, d = E.name, y = !0) : y && (m.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), _ = null, y = !1);
      for (var O = 0, w = S.length; O < w; O++)
        S.charCodeAt(O) === s ? (h.line++, h.column = 0, O + 1 === w ? (_ = null, y = !1) : y && m.addMapping({
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
      m.setSourceContent(S, E);
    }), { code: h.code, map: m };
  }, Td.SourceNode = u, Td;
}
var Uy;
function yC() {
  return Uy || (Uy = 1, Gs.SourceMapGenerator = S1().SourceMapGenerator, Gs.SourceMapConsumer = gC().SourceMapConsumer, Gs.SourceNode = vC().SourceNode), Gs;
}
var Hy;
function bC() {
  return Hy || (Hy = 1, (function(t, r) {
    r.__esModule = !0;
    var a = rn(), s = void 0;
    try {
      var l = yC();
      s = l.SourceNode;
    } catch {
    }
    s || (s = function(p, h, m, y) {
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
    function u(p, h, m) {
      if (a.isArray(p)) {
        for (var y = [], _ = 0, b = p.length; _ < b; _++)
          y.push(h.wrap(p[_], m));
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
      prepend: function(h, m) {
        this.source.unshift(this.wrap(h, m));
      },
      push: function(h, m) {
        this.source.push(this.wrap(h, m));
      },
      merge: function() {
        var h = this.empty();
        return this.each(function(m) {
          h.add(["  ", m, `
`]);
        }), h;
      },
      each: function(h) {
        for (var m = 0, y = this.source.length; m < y; m++)
          h(this.source[m]);
      },
      empty: function() {
        var h = this.currentLocation || { start: {} };
        return new s(h.start.line, h.start.column, this.srcFile);
      },
      wrap: function(h) {
        var m = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return h instanceof s ? h : (h = u(h, this, m), new s(m.start.line, m.start.column, this.srcFile, h));
      },
      functionCall: function(h, m, y) {
        return y = this.generateList(y), this.wrap([h, m ? "." + m + "(" : "(", y, ")"]);
      },
      quotedString: function(h) {
        return '"' + (h + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(h) {
        var m = this, y = [];
        Object.keys(h).forEach(function(b) {
          var v = u(h[b], m);
          v !== "undefined" && y.push([m.quotedString(b), ":", v]);
        });
        var _ = this.generateList(y);
        return _.prepend("{"), _.add("}"), _;
      },
      generateList: function(h) {
        for (var m = this.empty(), y = 0, _ = h.length; y < _; y++)
          y && m.add(","), m.add(u(h[y], this));
        return m;
      },
      generateArray: function(h) {
        var m = this.generateList(h);
        return m.prepend("["), m.add("]"), m;
      }
    }, r.default = f, t.exports = r.default;
  })(su, su.exports)), su.exports;
}
var qy;
function _C() {
  return qy || (qy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = mh(), l = Zn(), u = a(l), f = rn(), p = bC(), h = a(p);
    function m(b) {
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
        var O = v.opcodes, w = void 0, D = void 0, x = void 0, T = void 0;
        for (x = 0, T = O.length; x < T; x++)
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
        var U = this.context, Y = U.programs, B = U.decorators;
        for (x = 0, T = Y.length; x < T; x++)
          Y[x] && (k[x] = Y[x], B[x] && (k[x + "_d"] = B[x], k.useDecorators = !0));
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
          var T = d.aliases[x];
          T.children && T.referenceCount > 1 && (S += ", alias" + ++O + "=" + x, T.children[0] = "alias" + O);
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
            var T = w.nameLookup(x, d[S], v);
            return E ? [" && ", T] : [" != null ? ", T, " : ", x];
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
            var T = this.context.programs.length;
            E.index = T, E.name = "program" + T, this.context.programs[T] = O.compile(E, d, this.context, !this.precompile), this.context.decorators[T] = O.decorators, this.context.environments[T] = E, this.useDepths = this.useDepths || O.useDepths, this.useBlockParams = this.useBlockParams || O.useBlockParams, E.useDepths = this.useDepths, E.useBlockParams = this.useBlockParams;
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
        return v instanceof m || (v = this.source.wrap(v)), this.inlineStack.push(v), v;
      },
      pushStackLiteral: function(v) {
        this.push(new m(v));
      },
      pushSource: function(v) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), v && this.source.push(v);
      },
      replaceStack: function(v) {
        var d = ["("], S = void 0, E = void 0, O = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var w = this.popStack(!0);
        if (w instanceof m)
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
          if (E instanceof m)
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
        if (!v && S instanceof m)
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
        return d instanceof m ? d.value : d;
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
        var E = {}, O = [], w = [], D = [], x = !S, T = void 0;
        x && (S = []), E.name = this.quotedString(v), E.hash = this.popStack(), this.trackIds && (E.hashIds = this.popStack()), this.stringParams && (E.hashTypes = this.popStack(), E.hashContexts = this.popStack());
        var M = this.popStack(), k = this.popStack();
        (k || M) && (E.fn = k || "container.noop", E.inverse = M || "container.noop");
        for (var U = d; U--; )
          T = this.popStack(), S[U] = T, this.trackIds && (D[U] = this.popStack()), this.stringParams && (w[U] = this.popStack(), O[U] = this.popStack());
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
  })(iu, iu.exports)), iu.exports;
}
var Fy;
function SC() {
  return Fy || (Fy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var s = sC(), l = a(s), u = v1(), f = a(u), p = cC(), h = fC(), m = _C(), y = a(m), _ = y1(), b = a(_), v = g1(), d = a(v), S = l.default.create;
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
  })(Il, Il.exports)), Il.exports;
}
var za = SC();
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
const xC = "﷐", x1 = "﷑", EC = "﷒", Zy = "[[[crec_veryUniqueUserPlaceHolder]]]", Gy = "[[[crec_veryUniqueCharPlaceHolder]]]";
function Vy(t) {
  return t.replace(
    /\{\{|\}\}|[\uFDD0-\uFDD2]/g,
    (r) => r === "{{" ? x1 : r === "}}" ? EC : xC + r
  );
}
function CC(t) {
  return t.replace(
    /\uFDD0([\uFDD0-\uFDD2])|[\uFDD1\uFDD2]/g,
    (r, a) => a || (r === x1 ? "{{" : "}}")
  );
}
function Et(t) {
  return typeof t == "string" ? Vy(t) : Array.isArray(t) ? t.map((r) => Et(r)) : t && typeof t == "object" ? Object.fromEntries(Object.entries(t).map(([r, a]) => [Vy(r), Et(a)])) : t;
}
function co(t, r, a) {
  let s = za.compile(t, { noEscape: !0 })(r);
  return s = s.replaceAll("{{user}}", Zy), s = s.replaceAll("{{char}}", Gy), s = a(s), s = s.replaceAll(Zy, "{{user}}"), s = s.replaceAll(Gy, "{{char}}"), CC(s);
}
function W(t, r, a) {
  function s(p, h) {
    var m;
    Object.defineProperty(p, "_zod", {
      value: p._zod ?? {},
      enumerable: !1
    }), (m = p._zod).traits ?? (m.traits = /* @__PURE__ */ new Set()), p._zod.traits.add(t), r(p, h);
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
    const m = a?.Parent ? new u() : this;
    s(m, p), (h = m._zod).deferred ?? (h.deferred = []);
    for (const y of m._zod.deferred)
      y();
    return m;
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
class E1 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const C1 = {};
function La(t) {
  return C1;
}
function w1(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, l]) => r.indexOf(+s) === -1).map(([s, l]) => l);
}
function $d(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function gh(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function vh(t) {
  return t == null;
}
function yh(t) {
  const r = t.startsWith("^") ? 1 : 0, a = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, a);
}
function wC(t, r) {
  const a = (t.toString().split(".")[1] || "").length, s = r.toString();
  let l = (s.split(".")[1] || "").length;
  if (l === 0 && /\d?e-\d?/.test(s)) {
    const h = s.match(/\d?e-(\d?)/);
    h?.[1] && (l = Number.parseInt(h[1]));
  }
  const u = a > l ? a : l, f = Number.parseInt(t.toFixed(u).replace(".", "")), p = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % p / 10 ** u;
}
const Yy = Symbol("evaluating");
function at(t, r, a) {
  let s;
  Object.defineProperty(t, r, {
    get() {
      if (s !== Yy)
        return s === void 0 && (s = Yy, s = a()), s;
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
function Xy(t) {
  return JSON.stringify(t);
}
const A1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Mu(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const AC = gh(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function fo(t) {
  if (Mu(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const a = r.prototype;
  return !(Mu(a) === !1 || Object.prototype.hasOwnProperty.call(a, "isPrototypeOf") === !1);
}
function T1(t) {
  return fo(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const TC = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Hu(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function aa(t, r, a) {
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
function OC(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const NC = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function DC(t, r) {
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
  return aa(t, s);
}
function MC(t, r) {
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
  return aa(t, s);
}
function kC(t, r) {
  if (!fo(r))
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
  return aa(t, l);
}
function RC(t, r) {
  if (!fo(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const a = {
    ...t._zod.def,
    get shape() {
      const s = { ...t._zod.def.shape, ...r };
      return Ia(this, "shape", s), s;
    },
    checks: t._zod.def.checks
  };
  return aa(t, a);
}
function jC(t, r) {
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
  return aa(t, a);
}
function zC(t, r, a) {
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
  return aa(r, s);
}
function LC(t, r, a) {
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
  return aa(r, s);
}
function zi(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let a = r; a < t.issues.length; a++)
    if (t.issues[a]?.continue !== !0)
      return !0;
  return !1;
}
function O1(t, r) {
  return r.map((a) => {
    var s;
    return (s = a).path ?? (s.path = []), a.path.unshift(t), a;
  });
}
function uu(t) {
  return typeof t == "string" ? t : t?.message;
}
function Pa(t, r, a) {
  const s = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const l = uu(t.inst?._zod.def?.error?.(t)) ?? uu(r?.error?.(t)) ?? uu(a.customError?.(t)) ?? uu(a.localeError?.(t)) ?? "Invalid input";
    s.message = l;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function bh(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function ho(...t) {
  const [r, a, s] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: a,
    inst: s
  } : { ...r };
}
const N1 = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, $d, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, D1 = W("$ZodError", N1), M1 = W("$ZodError", N1, { Parent: Error });
function PC(t, r = (a) => a.message) {
  const a = {}, s = [];
  for (const l of t.issues)
    l.path.length > 0 ? (a[l.path[0]] = a[l.path[0]] || [], a[l.path[0]].push(r(l))) : s.push(r(l));
  return { formErrors: s, fieldErrors: a };
}
function IC(t, r = (a) => a.message) {
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
const _h = (t) => (r, a, s, l) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: a, issues: [] }, u);
  if (f instanceof Promise)
    throw new Pi();
  if (f.issues.length) {
    const p = new (l?.Err ?? t)(f.issues.map((h) => Pa(h, u, La())));
    throw A1(p, l?.callee), p;
  }
  return f.value;
}, Sh = (t) => async (r, a, s, l) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: a, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const p = new (l?.Err ?? t)(f.issues.map((h) => Pa(h, u, La())));
    throw A1(p, l?.callee), p;
  }
  return f.value;
}, qu = (t) => (r, a, s) => {
  const l = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: a, issues: [] }, l);
  if (u instanceof Promise)
    throw new Pi();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? D1)(u.issues.map((f) => Pa(f, l, La())))
  } : { success: !0, data: u.value };
}, BC = /* @__PURE__ */ qu(M1), Fu = (t) => async (r, a, s) => {
  const l = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: a, issues: [] }, l);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((f) => Pa(f, l, La())))
  } : { success: !0, data: u.value };
}, UC = /* @__PURE__ */ Fu(M1), HC = (t) => (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return _h(t)(r, a, l);
}, qC = (t) => (r, a, s) => _h(t)(r, a, s), FC = (t) => async (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Sh(t)(r, a, l);
}, ZC = (t) => async (r, a, s) => Sh(t)(r, a, s), GC = (t) => (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return qu(t)(r, a, l);
}, VC = (t) => (r, a, s) => qu(t)(r, a, s), YC = (t) => async (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Fu(t)(r, a, l);
}, XC = (t) => async (r, a, s) => Fu(t)(r, a, s), $C = /^[cC][^\s-]{8,}$/, QC = /^[0-9a-z]+$/, JC = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, KC = /^[0-9a-vA-V]{20}$/, WC = /^[A-Za-z0-9]{27}$/, ew = /^[a-zA-Z0-9_-]{21}$/, tw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, nw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, $y = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, rw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, aw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function iw() {
  return new RegExp(aw, "u");
}
const sw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ow = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, lw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, uw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, cw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, k1 = /^[A-Za-z0-9_-]*$/, fw = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, dw = /^\+(?:[0-9]){6,14}[0-9]$/, R1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", hw = /* @__PURE__ */ new RegExp(`^${R1}$`);
function j1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function pw(t) {
  return new RegExp(`^${j1(t)}$`);
}
function mw(t) {
  const r = j1({ precision: t.precision }), a = ["Z"];
  t.local && a.push(""), t.offset && a.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${a.join("|")})`;
  return new RegExp(`^${R1}T(?:${s})$`);
}
const gw = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, vw = /^-?\d+$/, yw = /^-?\d+(?:\.\d+)?/, bw = /^[^A-Z]*$/, _w = /^[^a-z]*$/, an = /* @__PURE__ */ W("$ZodCheck", (t, r) => {
  var a;
  t._zod ?? (t._zod = {}), t._zod.def = r, (a = t._zod).onattach ?? (a.onattach = []);
}), z1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, L1 = /* @__PURE__ */ W("$ZodCheckLessThan", (t, r) => {
  an.init(t, r);
  const a = z1[typeof r.value];
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
}), P1 = /* @__PURE__ */ W("$ZodCheckGreaterThan", (t, r) => {
  an.init(t, r);
  const a = z1[typeof r.value];
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
}), Sw = /* @__PURE__ */ W("$ZodCheckMultipleOf", (t, r) => {
  an.init(t, r), t._zod.onattach.push((a) => {
    var s;
    (s = a._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (a) => {
    if (typeof a.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof a.value == "bigint" ? a.value % r.value === BigInt(0) : wC(a.value, r.value) === 0) || a.issues.push({
      origin: typeof a.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), xw = /* @__PURE__ */ W("$ZodCheckNumberFormat", (t, r) => {
  an.init(t, r), r.format = r.format || "float64";
  const a = r.format?.includes("int"), s = a ? "int" : "number", [l, u] = NC[r.format];
  t._zod.onattach.push((f) => {
    const p = f._zod.bag;
    p.format = r.format, p.minimum = l, p.maximum = u, a && (p.pattern = vw);
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
}), Ew = /* @__PURE__ */ W("$ZodCheckMaxLength", (t, r) => {
  var a;
  an.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
    const l = s.value;
    return !vh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < l && (s._zod.bag.maximum = r.maximum);
  }), t._zod.check = (s) => {
    const l = s.value;
    if (l.length <= r.maximum)
      return;
    const f = bh(l);
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
}), Cw = /* @__PURE__ */ W("$ZodCheckMinLength", (t, r) => {
  var a;
  an.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
    const l = s.value;
    return !vh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > l && (s._zod.bag.minimum = r.minimum);
  }), t._zod.check = (s) => {
    const l = s.value;
    if (l.length >= r.minimum)
      return;
    const f = bh(l);
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
}), ww = /* @__PURE__ */ W("$ZodCheckLengthEquals", (t, r) => {
  var a;
  an.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
    const l = s.value;
    return !vh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.minimum = r.length, l.maximum = r.length, l.length = r.length;
  }), t._zod.check = (s) => {
    const l = s.value, u = l.length;
    if (u === r.length)
      return;
    const f = bh(l), p = u > r.length;
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
}), Zu = /* @__PURE__ */ W("$ZodCheckStringFormat", (t, r) => {
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
}), Aw = /* @__PURE__ */ W("$ZodCheckRegex", (t, r) => {
  Zu.init(t, r), t._zod.check = (a) => {
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
}), Tw = /* @__PURE__ */ W("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = bw), Zu.init(t, r);
}), Ow = /* @__PURE__ */ W("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = _w), Zu.init(t, r);
}), Nw = /* @__PURE__ */ W("$ZodCheckIncludes", (t, r) => {
  an.init(t, r);
  const a = Hu(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${a}` : a);
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
}), Dw = /* @__PURE__ */ W("$ZodCheckStartsWith", (t, r) => {
  an.init(t, r);
  const a = new RegExp(`^${Hu(r.prefix)}.*`);
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
}), Mw = /* @__PURE__ */ W("$ZodCheckEndsWith", (t, r) => {
  an.init(t, r);
  const a = new RegExp(`.*${Hu(r.suffix)}$`);
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
}), kw = /* @__PURE__ */ W("$ZodCheckOverwrite", (t, r) => {
  an.init(t, r), t._zod.check = (a) => {
    a.value = r.tx(a.value);
  };
});
class Rw {
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
const jw = {
  major: 4,
  minor: 1,
  patch: 12
}, Ct = /* @__PURE__ */ W("$ZodType", (t, r) => {
  var a;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = jw;
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
      let m = zi(f), y;
      for (const _ of p) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(f))
            continue;
        } else if (m)
          continue;
        const b = f.issues.length, v = _._zod.check(f);
        if (v instanceof Promise && h?.async === !1)
          throw new Pi();
        if (y || v instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await v, f.issues.length !== b && (m || (m = zi(f, b)));
          });
        else {
          if (f.issues.length === b)
            continue;
          m || (m = zi(f, b));
        }
      }
      return y ? y.then(() => f) : f;
    }, u = (f, p, h) => {
      if (zi(f))
        return f.aborted = !0, f;
      const m = l(p, s, h);
      if (m instanceof Promise) {
        if (h.async === !1)
          throw new Pi();
        return m.then((y) => t._zod.parse(y, h));
      }
      return t._zod.parse(m, h);
    };
    t._zod.run = (f, p) => {
      if (p.skipChecks)
        return t._zod.parse(f, p);
      if (p.direction === "backward") {
        const m = t._zod.parse({ value: f.value, issues: [] }, { ...p, skipChecks: !0 });
        return m instanceof Promise ? m.then((y) => u(y, f, p)) : u(m, f, p);
      }
      const h = t._zod.parse(f, p);
      if (h instanceof Promise) {
        if (p.async === !1)
          throw new Pi();
        return h.then((m) => l(m, s, p));
      }
      return l(h, s, p);
    };
  }
  t["~standard"] = {
    validate: (l) => {
      try {
        const u = BC(t, l);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return UC(t, l).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), xh = /* @__PURE__ */ W("$ZodString", (t, r) => {
  Ct.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? gw(t._zod.bag), t._zod.parse = (a, s) => {
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
  Zu.init(t, r), xh.init(t, r);
}), zw = /* @__PURE__ */ W("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = nw), lt.init(t, r);
}), Lw = /* @__PURE__ */ W("$ZodUUID", (t, r) => {
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
    r.pattern ?? (r.pattern = $y(s));
  } else
    r.pattern ?? (r.pattern = $y());
  lt.init(t, r);
}), Pw = /* @__PURE__ */ W("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = rw), lt.init(t, r);
}), Iw = /* @__PURE__ */ W("$ZodURL", (t, r) => {
  lt.init(t, r), t._zod.check = (a) => {
    try {
      const s = a.value.trim(), l = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(l.hostname) || a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: fw.source,
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
}), Bw = /* @__PURE__ */ W("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = iw()), lt.init(t, r);
}), Uw = /* @__PURE__ */ W("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = ew), lt.init(t, r);
}), Hw = /* @__PURE__ */ W("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = $C), lt.init(t, r);
}), qw = /* @__PURE__ */ W("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = QC), lt.init(t, r);
}), Fw = /* @__PURE__ */ W("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = JC), lt.init(t, r);
}), Zw = /* @__PURE__ */ W("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = KC), lt.init(t, r);
}), Gw = /* @__PURE__ */ W("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = WC), lt.init(t, r);
}), Vw = /* @__PURE__ */ W("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = mw(r)), lt.init(t, r);
}), Yw = /* @__PURE__ */ W("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = hw), lt.init(t, r);
}), Xw = /* @__PURE__ */ W("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = pw(r)), lt.init(t, r);
}), $w = /* @__PURE__ */ W("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = tw), lt.init(t, r);
}), Qw = /* @__PURE__ */ W("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = sw), lt.init(t, r), t._zod.onattach.push((a) => {
    const s = a._zod.bag;
    s.format = "ipv4";
  });
}), Jw = /* @__PURE__ */ W("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = ow), lt.init(t, r), t._zod.onattach.push((a) => {
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
}), Kw = /* @__PURE__ */ W("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = lw), lt.init(t, r);
}), Ww = /* @__PURE__ */ W("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = uw), lt.init(t, r), t._zod.check = (a) => {
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
function I1(t) {
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
const e3 = /* @__PURE__ */ W("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = cw), lt.init(t, r), t._zod.onattach.push((a) => {
    a._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (a) => {
    I1(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function t3(t) {
  if (!k1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), a = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return I1(a);
}
const n3 = /* @__PURE__ */ W("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = k1), lt.init(t, r), t._zod.onattach.push((a) => {
    a._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (a) => {
    t3(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), r3 = /* @__PURE__ */ W("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = dw), lt.init(t, r);
});
function a3(t, r = null) {
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
const i3 = /* @__PURE__ */ W("$ZodJWT", (t, r) => {
  lt.init(t, r), t._zod.check = (a) => {
    a3(a.value, r.alg) || a.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), B1 = /* @__PURE__ */ W("$ZodNumber", (t, r) => {
  Ct.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? yw, t._zod.parse = (a, s) => {
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
}), s3 = /* @__PURE__ */ W("$ZodNumber", (t, r) => {
  xw.init(t, r), B1.init(t, r);
}), o3 = /* @__PURE__ */ W("$ZodUnknown", (t, r) => {
  Ct.init(t, r), t._zod.parse = (a) => a;
}), l3 = /* @__PURE__ */ W("$ZodNever", (t, r) => {
  Ct.init(t, r), t._zod.parse = (a, s) => (a.issues.push({
    expected: "never",
    code: "invalid_type",
    input: a.value,
    inst: t
  }), a);
});
function Qy(t, r, a) {
  t.issues.length && r.issues.push(...O1(a, t.issues)), r.value[a] = t.value;
}
const u3 = /* @__PURE__ */ W("$ZodArray", (t, r) => {
  Ct.init(t, r), t._zod.parse = (a, s) => {
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
      h instanceof Promise ? u.push(h.then((m) => Qy(m, a, f))) : Qy(h, a, f);
    }
    return u.length ? Promise.all(u).then(() => a) : a;
  };
});
function ku(t, r, a, s) {
  t.issues.length && r.issues.push(...O1(a, t.issues)), t.value === void 0 ? a in s && (r.value[a] = void 0) : r.value[a] = t.value;
}
function U1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const a = OC(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(a)
  };
}
function H1(t, r, a, s, l, u) {
  const f = [], p = l.keySet, h = l.catchall._zod, m = h.def.type;
  for (const y of Object.keys(r)) {
    if (p.has(y))
      continue;
    if (m === "never") {
      f.push(y);
      continue;
    }
    const _ = h.run({ value: r[y], issues: [] }, s);
    _ instanceof Promise ? t.push(_.then((b) => ku(b, a, y, r))) : ku(_, a, y, r);
  }
  return f.length && a.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => a) : a;
}
const c3 = /* @__PURE__ */ W("$ZodObject", (t, r) => {
  if (Ct.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
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
  const s = gh(() => U1(r));
  at(t._zod, "propValues", () => {
    const p = r.shape, h = {};
    for (const m in p) {
      const y = p[m]._zod;
      if (y.values) {
        h[m] ?? (h[m] = /* @__PURE__ */ new Set());
        for (const _ of y.values)
          h[m].add(_);
      }
    }
    return h;
  });
  const l = Mu, u = r.catchall;
  let f;
  t._zod.parse = (p, h) => {
    f ?? (f = s.value);
    const m = p.value;
    if (!l(m))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: m,
        inst: t
      }), p;
    p.value = {};
    const y = [], _ = f.shape;
    for (const b of f.keys) {
      const d = _[b]._zod.run({ value: m[b], issues: [] }, h);
      d instanceof Promise ? y.push(d.then((S) => ku(S, p, b, m))) : ku(d, p, b, m);
    }
    return u ? H1(y, m, p, h, s.value, t) : y.length ? Promise.all(y).then(() => p) : p;
  };
}), f3 = /* @__PURE__ */ W("$ZodObjectJIT", (t, r) => {
  c3.init(t, r);
  const a = t._zod.parse, s = gh(() => U1(r)), l = (b) => {
    const v = new Rw(["shape", "payload", "ctx"]), d = s.value, S = (D) => {
      const x = Xy(D);
      return `shape[${x}]._zod.run({ value: input[${x}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const E = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const D of d.keys)
      E[D] = `key_${O++}`;
    v.write("const newResult = {};");
    for (const D of d.keys) {
      const x = E[D], T = Xy(D);
      v.write(`const ${x} = ${S(D)};`), v.write(`
        if (${x}.issues.length) {
          payload.issues = payload.issues.concat(${x}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${T}, ...iss.path] : [${T}]
          })));
        }
        
        
        if (${x}.value === undefined) {
          if (${T} in input) {
            newResult[${T}] = undefined;
          }
        } else {
          newResult[${T}] = ${x}.value;
        }
        
      `);
    }
    v.write("payload.value = newResult;"), v.write("return payload;");
    const w = v.compile();
    return (D, x) => w(b, D, x);
  };
  let u;
  const f = Mu, p = !C1.jitless, m = p && AC.value, y = r.catchall;
  let _;
  t._zod.parse = (b, v) => {
    _ ?? (_ = s.value);
    const d = b.value;
    return f(d) ? p && m && v?.async === !1 && v.jitless !== !0 ? (u || (u = l(r.shape)), b = u(b, v), y ? H1([], d, b, v, _, t) : b) : a(b, v) : (b.issues.push({
      expected: "object",
      code: "invalid_type",
      input: d,
      inst: t
    }), b);
  };
});
function Jy(t, r, a, s) {
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
const d3 = /* @__PURE__ */ W("$ZodUnion", (t, r) => {
  Ct.init(t, r), at(t._zod, "optin", () => r.options.some((l) => l._zod.optin === "optional") ? "optional" : void 0), at(t._zod, "optout", () => r.options.some((l) => l._zod.optout === "optional") ? "optional" : void 0), at(t._zod, "values", () => {
    if (r.options.every((l) => l._zod.values))
      return new Set(r.options.flatMap((l) => Array.from(l._zod.values)));
  }), at(t._zod, "pattern", () => {
    if (r.options.every((l) => l._zod.pattern)) {
      const l = r.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${l.map((u) => yh(u.source)).join("|")})$`);
    }
  });
  const a = r.options.length === 1, s = r.options[0]._zod.run;
  t._zod.parse = (l, u) => {
    if (a)
      return s(l, u);
    let f = !1;
    const p = [];
    for (const h of r.options) {
      const m = h._zod.run({
        value: l.value,
        issues: []
      }, u);
      if (m instanceof Promise)
        p.push(m), f = !0;
      else {
        if (m.issues.length === 0)
          return m;
        p.push(m);
      }
    }
    return f ? Promise.all(p).then((h) => Jy(h, l, t, u)) : Jy(p, l, t, u);
  };
}), h3 = /* @__PURE__ */ W("$ZodIntersection", (t, r) => {
  Ct.init(t, r), t._zod.parse = (a, s) => {
    const l = a.value, u = r.left._zod.run({ value: l, issues: [] }, s), f = r.right._zod.run({ value: l, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([h, m]) => Ky(a, h, m)) : Ky(a, u, f);
  };
});
function Qd(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (fo(t) && fo(r)) {
    const a = Object.keys(r), s = Object.keys(t).filter((u) => a.indexOf(u) !== -1), l = { ...t, ...r };
    for (const u of s) {
      const f = Qd(t[u], r[u]);
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
      const l = t[s], u = r[s], f = Qd(l, u);
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
function Ky(t, r, a) {
  if (r.issues.length && t.issues.push(...r.issues), a.issues.length && t.issues.push(...a.issues), zi(t))
    return t;
  const s = Qd(r.value, a.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const p3 = /* @__PURE__ */ W("$ZodEnum", (t, r) => {
  Ct.init(t, r);
  const a = w1(r.entries), s = new Set(a);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${a.filter((l) => TC.has(typeof l)).map((l) => typeof l == "string" ? Hu(l) : l.toString()).join("|")})$`), t._zod.parse = (l, u) => {
    const f = l.value;
    return s.has(f) || l.issues.push({
      code: "invalid_value",
      values: a,
      input: f,
      inst: t
    }), l;
  };
}), m3 = /* @__PURE__ */ W("$ZodTransform", (t, r) => {
  Ct.init(t, r), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      throw new E1(t.constructor.name);
    const l = r.transform(a.value, a);
    if (s.async)
      return (l instanceof Promise ? l : Promise.resolve(l)).then((f) => (a.value = f, a));
    if (l instanceof Promise)
      throw new Pi();
    return a.value = l, a;
  };
});
function Wy(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const g3 = /* @__PURE__ */ W("$ZodOptional", (t, r) => {
  Ct.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", at(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), at(t._zod, "pattern", () => {
    const a = r.innerType._zod.pattern;
    return a ? new RegExp(`^(${yh(a.source)})?$`) : void 0;
  }), t._zod.parse = (a, s) => {
    if (r.innerType._zod.optin === "optional") {
      const l = r.innerType._zod.run(a, s);
      return l instanceof Promise ? l.then((u) => Wy(u, a.value)) : Wy(l, a.value);
    }
    return a.value === void 0 ? a : r.innerType._zod.run(a, s);
  };
}), v3 = /* @__PURE__ */ W("$ZodNullable", (t, r) => {
  Ct.init(t, r), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), at(t._zod, "pattern", () => {
    const a = r.innerType._zod.pattern;
    return a ? new RegExp(`^(${yh(a.source)}|null)$`) : void 0;
  }), at(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (a, s) => a.value === null ? a : r.innerType._zod.run(a, s);
}), y3 = /* @__PURE__ */ W("$ZodDefault", (t, r) => {
  Ct.init(t, r), t._zod.optin = "optional", at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(a, s);
    if (a.value === void 0)
      return a.value = r.defaultValue, a;
    const l = r.innerType._zod.run(a, s);
    return l instanceof Promise ? l.then((u) => e0(u, r)) : e0(l, r);
  };
});
function e0(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const b3 = /* @__PURE__ */ W("$ZodPrefault", (t, r) => {
  Ct.init(t, r), t._zod.optin = "optional", at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => (s.direction === "backward" || a.value === void 0 && (a.value = r.defaultValue), r.innerType._zod.run(a, s));
}), _3 = /* @__PURE__ */ W("$ZodNonOptional", (t, r) => {
  Ct.init(t, r), at(t._zod, "values", () => {
    const a = r.innerType._zod.values;
    return a ? new Set([...a].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (a, s) => {
    const l = r.innerType._zod.run(a, s);
    return l instanceof Promise ? l.then((u) => t0(u, t)) : t0(l, t);
  };
});
function t0(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const S3 = /* @__PURE__ */ W("$ZodCatch", (t, r) => {
  Ct.init(t, r), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => {
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
}), x3 = /* @__PURE__ */ W("$ZodPipe", (t, r) => {
  Ct.init(t, r), at(t._zod, "values", () => r.in._zod.values), at(t._zod, "optin", () => r.in._zod.optin), at(t._zod, "optout", () => r.out._zod.optout), at(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (a, s) => {
    if (s.direction === "backward") {
      const u = r.out._zod.run(a, s);
      return u instanceof Promise ? u.then((f) => cu(f, r.in, s)) : cu(u, r.in, s);
    }
    const l = r.in._zod.run(a, s);
    return l instanceof Promise ? l.then((u) => cu(u, r.out, s)) : cu(l, r.out, s);
  };
});
function cu(t, r, a) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, a);
}
const E3 = /* @__PURE__ */ W("$ZodReadonly", (t, r) => {
  Ct.init(t, r), at(t._zod, "propValues", () => r.innerType._zod.propValues), at(t._zod, "values", () => r.innerType._zod.values), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(a, s);
    const l = r.innerType._zod.run(a, s);
    return l instanceof Promise ? l.then(n0) : n0(l);
  };
});
function n0(t) {
  return t.value = Object.freeze(t.value), t;
}
const C3 = /* @__PURE__ */ W("$ZodCustom", (t, r) => {
  an.init(t, r), Ct.init(t, r), t._zod.parse = (a, s) => a, t._zod.check = (a) => {
    const s = a.value, l = r.fn(s);
    if (l instanceof Promise)
      return l.then((u) => r0(u, a, s, t));
    r0(l, a, s, t);
  };
});
function r0(t, r, a, s) {
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
    s._zod.def.params && (l.params = s._zod.def.params), r.issues.push(ho(l));
  }
}
class q1 {
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
function w3() {
  return new q1();
}
const to = /* @__PURE__ */ w3();
function A3(t, r) {
  return new t({
    type: "string",
    ...ve(r)
  });
}
function T3(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function a0(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function O3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function N3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ve(r)
  });
}
function D3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ve(r)
  });
}
function M3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ve(r)
  });
}
function k3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function R3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function j3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function z3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function L3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function P3(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function I3(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function B3(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function U3(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function H3(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function q3(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function F3(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function Z3(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function G3(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function V3(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function Y3(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function X3(t, r) {
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
function $3(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...ve(r)
  });
}
function Q3(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ve(r)
  });
}
function J3(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ve(r)
  });
}
function K3(t, r) {
  return new t({
    type: "number",
    checks: [],
    ...ve(r)
  });
}
function W3(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ve(r)
  });
}
function e4(t) {
  return new t({
    type: "unknown"
  });
}
function t4(t, r) {
  return new t({
    type: "never",
    ...ve(r)
  });
}
function i0(t, r) {
  return new L1({
    check: "less_than",
    ...ve(r),
    value: t,
    inclusive: !1
  });
}
function Od(t, r) {
  return new L1({
    check: "less_than",
    ...ve(r),
    value: t,
    inclusive: !0
  });
}
function s0(t, r) {
  return new P1({
    check: "greater_than",
    ...ve(r),
    value: t,
    inclusive: !1
  });
}
function Nd(t, r) {
  return new P1({
    check: "greater_than",
    ...ve(r),
    value: t,
    inclusive: !0
  });
}
function o0(t, r) {
  return new Sw({
    check: "multiple_of",
    ...ve(r),
    value: t
  });
}
function F1(t, r) {
  return new Ew({
    check: "max_length",
    ...ve(r),
    maximum: t
  });
}
function Ru(t, r) {
  return new Cw({
    check: "min_length",
    ...ve(r),
    minimum: t
  });
}
function Z1(t, r) {
  return new ww({
    check: "length_equals",
    ...ve(r),
    length: t
  });
}
function n4(t, r) {
  return new Aw({
    check: "string_format",
    format: "regex",
    ...ve(r),
    pattern: t
  });
}
function r4(t) {
  return new Tw({
    check: "string_format",
    format: "lowercase",
    ...ve(t)
  });
}
function a4(t) {
  return new Ow({
    check: "string_format",
    format: "uppercase",
    ...ve(t)
  });
}
function i4(t, r) {
  return new Nw({
    check: "string_format",
    format: "includes",
    ...ve(r),
    includes: t
  });
}
function s4(t, r) {
  return new Dw({
    check: "string_format",
    format: "starts_with",
    ...ve(r),
    prefix: t
  });
}
function o4(t, r) {
  return new Mw({
    check: "string_format",
    format: "ends_with",
    ...ve(r),
    suffix: t
  });
}
function yo(t) {
  return new kw({
    check: "overwrite",
    tx: t
  });
}
function l4(t) {
  return yo((r) => r.normalize(t));
}
function u4() {
  return yo((t) => t.trim());
}
function c4() {
  return yo((t) => t.toLowerCase());
}
function f4() {
  return yo((t) => t.toUpperCase());
}
function d4(t, r, a) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...ve(a)
  });
}
function h4(t, r, a) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ...ve(a)
  });
}
function p4(t) {
  const r = m4((a) => (a.addIssue = (s) => {
    if (typeof s == "string")
      a.issues.push(ho(s, a.value, r._zod.def));
    else {
      const l = s;
      l.fatal && (l.continue = !1), l.code ?? (l.code = "custom"), l.input ?? (l.input = a.value), l.inst ?? (l.inst = r), l.continue ?? (l.continue = !r._zod.def.abort), a.issues.push(ho(l));
    }
  }, t(a.value, a)));
  return r;
}
function m4(t, r) {
  const a = new an({
    check: "custom",
    ...ve(r)
  });
  return a._zod.check = t, a;
}
class l0 {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? to, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
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
                ...x.map((T) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: T.source
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
            const S = this.target === "draft-2020-12" ? "prefixItems" : "items", E = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", O = l.items.map((T, M) => this.process(T, {
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
            const d = v, S = w1(l.entries);
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
    const m = this.metadataRegistry.get(r);
    return m && Object.assign(p.schema, m), this.io === "input" && Tt(r) && (delete p.schema.examples, delete p.schema.default), this.io === "input" && p.schema._prefault && ((s = p.schema).default ?? (s.default = p.schema._prefault)), delete p.schema._prefault, this.seen.get(r).schema;
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
    const m = s.external?.defs ?? {};
    for (const y of this.seen.entries()) {
      const _ = y[1];
      _.def && _.defId && (m[_.defId] = _.def);
    }
    s.external || Object.keys(m).length > 0 && (this.target === "draft-2020-12" ? h.$defs = m : h.definitions = m);
    try {
      return JSON.parse(JSON.stringify(h));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function g4(t, r) {
  if (t instanceof q1) {
    const s = new l0(r), l = {};
    for (const p of t._idmap.entries()) {
      const [h, m] = p;
      s.process(m);
    }
    const u = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: l
    };
    for (const p of t._idmap.entries()) {
      const [h, m] = p;
      u[h] = s.emit(m, {
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
  const a = new l0(r);
  return a.process(t), a.emit(t, r);
}
function Tt(t, r) {
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
      return Tt(l.element, a);
    case "object": {
      for (const u in l.shape)
        if (Tt(l.shape[u], a))
          return !0;
      return !1;
    }
    case "union": {
      for (const u of l.options)
        if (Tt(u, a))
          return !0;
      return !1;
    }
    case "intersection":
      return Tt(l.left, a) || Tt(l.right, a);
    case "tuple": {
      for (const u of l.items)
        if (Tt(u, a))
          return !0;
      return !!(l.rest && Tt(l.rest, a));
    }
    case "record":
      return Tt(l.keyType, a) || Tt(l.valueType, a);
    case "map":
      return Tt(l.keyType, a) || Tt(l.valueType, a);
    case "set":
      return Tt(l.valueType, a);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return Tt(l.innerType, a);
    case "lazy":
      return Tt(l.getter(), a);
    case "default":
      return Tt(l.innerType, a);
    case "prefault":
      return Tt(l.innerType, a);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return Tt(l.in, a) || Tt(l.out, a);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${l.type}`);
}
const v4 = /* @__PURE__ */ W("ZodISODateTime", (t, r) => {
  Vw.init(t, r), ft.init(t, r);
});
function y4(t) {
  return X3(v4, t);
}
const b4 = /* @__PURE__ */ W("ZodISODate", (t, r) => {
  Yw.init(t, r), ft.init(t, r);
});
function _4(t) {
  return $3(b4, t);
}
const S4 = /* @__PURE__ */ W("ZodISOTime", (t, r) => {
  Xw.init(t, r), ft.init(t, r);
});
function x4(t) {
  return Q3(S4, t);
}
const E4 = /* @__PURE__ */ W("ZodISODuration", (t, r) => {
  $w.init(t, r), ft.init(t, r);
});
function C4(t) {
  return J3(E4, t);
}
const w4 = (t, r) => {
  D1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (a) => IC(t, a)
      // enumerable: false,
    },
    flatten: {
      value: (a) => PC(t, a)
      // enumerable: false,
    },
    addIssue: {
      value: (a) => {
        t.issues.push(a), t.message = JSON.stringify(t.issues, $d, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (a) => {
        t.issues.push(...a), t.message = JSON.stringify(t.issues, $d, 2);
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
}, jn = W("ZodError", w4, {
  Parent: Error
}), A4 = /* @__PURE__ */ _h(jn), T4 = /* @__PURE__ */ Sh(jn), O4 = /* @__PURE__ */ qu(jn), N4 = /* @__PURE__ */ Fu(jn), D4 = /* @__PURE__ */ HC(jn), M4 = /* @__PURE__ */ qC(jn), k4 = /* @__PURE__ */ FC(jn), R4 = /* @__PURE__ */ ZC(jn), j4 = /* @__PURE__ */ GC(jn), z4 = /* @__PURE__ */ VC(jn), L4 = /* @__PURE__ */ YC(jn), P4 = /* @__PURE__ */ XC(jn), Nt = /* @__PURE__ */ W("ZodType", (t, r) => (Ct.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...a) => t.clone(Ba(r, {
  checks: [
    ...r.checks ?? [],
    ...a.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (a, s) => aa(t, a, s), t.brand = () => t, t.register = ((a, s) => (a.add(t, s), t)), t.parse = (a, s) => A4(t, a, s, { callee: t.parse }), t.safeParse = (a, s) => O4(t, a, s), t.parseAsync = async (a, s) => T4(t, a, s, { callee: t.parseAsync }), t.safeParseAsync = async (a, s) => N4(t, a, s), t.spa = t.safeParseAsync, t.encode = (a, s) => D4(t, a, s), t.decode = (a, s) => M4(t, a, s), t.encodeAsync = async (a, s) => k4(t, a, s), t.decodeAsync = async (a, s) => R4(t, a, s), t.safeEncode = (a, s) => j4(t, a, s), t.safeDecode = (a, s) => z4(t, a, s), t.safeEncodeAsync = async (a, s) => L4(t, a, s), t.safeDecodeAsync = async (a, s) => P4(t, a, s), t.refine = (a, s) => t.check(AA(a, s)), t.superRefine = (a) => t.check(TA(a)), t.overwrite = (a) => t.check(yo(a)), t.optional = () => d0(t), t.nullable = () => h0(t), t.nullish = () => d0(h0(t)), t.nonoptional = (a) => bA(t, a), t.array = () => qn(t), t.or = (a) => uA([t, a]), t.and = (a) => fA(t, a), t.transform = (a) => p0(t, hA(a)), t.default = (a) => gA(t, a), t.prefault = (a) => yA(t, a), t.catch = (a) => SA(t, a), t.pipe = (a) => p0(t, a), t.readonly = () => CA(t), t.describe = (a) => {
  const s = t.clone();
  return to.add(s, { description: a }), s;
}, Object.defineProperty(t, "description", {
  get() {
    return to.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...a) => {
  if (a.length === 0)
    return to.get(t);
  const s = t.clone();
  return to.add(s, a[0]), s;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), G1 = /* @__PURE__ */ W("_ZodString", (t, r) => {
  xh.init(t, r), Nt.init(t, r);
  const a = t._zod.bag;
  t.format = a.format ?? null, t.minLength = a.minimum ?? null, t.maxLength = a.maximum ?? null, t.regex = (...s) => t.check(n4(...s)), t.includes = (...s) => t.check(i4(...s)), t.startsWith = (...s) => t.check(s4(...s)), t.endsWith = (...s) => t.check(o4(...s)), t.min = (...s) => t.check(Ru(...s)), t.max = (...s) => t.check(F1(...s)), t.length = (...s) => t.check(Z1(...s)), t.nonempty = (...s) => t.check(Ru(1, ...s)), t.lowercase = (s) => t.check(r4(s)), t.uppercase = (s) => t.check(a4(s)), t.trim = () => t.check(u4()), t.normalize = (...s) => t.check(l4(...s)), t.toLowerCase = () => t.check(c4()), t.toUpperCase = () => t.check(f4());
}), I4 = /* @__PURE__ */ W("ZodString", (t, r) => {
  xh.init(t, r), G1.init(t, r), t.email = (a) => t.check(T3(B4, a)), t.url = (a) => t.check(k3(U4, a)), t.jwt = (a) => t.check(Y3(tA, a)), t.emoji = (a) => t.check(R3(H4, a)), t.guid = (a) => t.check(a0(u0, a)), t.uuid = (a) => t.check(O3(fu, a)), t.uuidv4 = (a) => t.check(N3(fu, a)), t.uuidv6 = (a) => t.check(D3(fu, a)), t.uuidv7 = (a) => t.check(M3(fu, a)), t.nanoid = (a) => t.check(j3(q4, a)), t.guid = (a) => t.check(a0(u0, a)), t.cuid = (a) => t.check(z3(F4, a)), t.cuid2 = (a) => t.check(L3(Z4, a)), t.ulid = (a) => t.check(P3(G4, a)), t.base64 = (a) => t.check(Z3(K4, a)), t.base64url = (a) => t.check(G3(W4, a)), t.xid = (a) => t.check(I3(V4, a)), t.ksuid = (a) => t.check(B3(Y4, a)), t.ipv4 = (a) => t.check(U3(X4, a)), t.ipv6 = (a) => t.check(H3($4, a)), t.cidrv4 = (a) => t.check(q3(Q4, a)), t.cidrv6 = (a) => t.check(F3(J4, a)), t.e164 = (a) => t.check(V3(eA, a)), t.datetime = (a) => t.check(y4(a)), t.date = (a) => t.check(_4(a)), t.time = (a) => t.check(x4(a)), t.duration = (a) => t.check(C4(a));
});
function kn(t) {
  return A3(I4, t);
}
const ft = /* @__PURE__ */ W("ZodStringFormat", (t, r) => {
  lt.init(t, r), G1.init(t, r);
}), B4 = /* @__PURE__ */ W("ZodEmail", (t, r) => {
  Pw.init(t, r), ft.init(t, r);
}), u0 = /* @__PURE__ */ W("ZodGUID", (t, r) => {
  zw.init(t, r), ft.init(t, r);
}), fu = /* @__PURE__ */ W("ZodUUID", (t, r) => {
  Lw.init(t, r), ft.init(t, r);
}), U4 = /* @__PURE__ */ W("ZodURL", (t, r) => {
  Iw.init(t, r), ft.init(t, r);
}), H4 = /* @__PURE__ */ W("ZodEmoji", (t, r) => {
  Bw.init(t, r), ft.init(t, r);
}), q4 = /* @__PURE__ */ W("ZodNanoID", (t, r) => {
  Uw.init(t, r), ft.init(t, r);
}), F4 = /* @__PURE__ */ W("ZodCUID", (t, r) => {
  Hw.init(t, r), ft.init(t, r);
}), Z4 = /* @__PURE__ */ W("ZodCUID2", (t, r) => {
  qw.init(t, r), ft.init(t, r);
}), G4 = /* @__PURE__ */ W("ZodULID", (t, r) => {
  Fw.init(t, r), ft.init(t, r);
}), V4 = /* @__PURE__ */ W("ZodXID", (t, r) => {
  Zw.init(t, r), ft.init(t, r);
}), Y4 = /* @__PURE__ */ W("ZodKSUID", (t, r) => {
  Gw.init(t, r), ft.init(t, r);
}), X4 = /* @__PURE__ */ W("ZodIPv4", (t, r) => {
  Qw.init(t, r), ft.init(t, r);
}), $4 = /* @__PURE__ */ W("ZodIPv6", (t, r) => {
  Jw.init(t, r), ft.init(t, r);
}), Q4 = /* @__PURE__ */ W("ZodCIDRv4", (t, r) => {
  Kw.init(t, r), ft.init(t, r);
}), J4 = /* @__PURE__ */ W("ZodCIDRv6", (t, r) => {
  Ww.init(t, r), ft.init(t, r);
}), K4 = /* @__PURE__ */ W("ZodBase64", (t, r) => {
  e3.init(t, r), ft.init(t, r);
}), W4 = /* @__PURE__ */ W("ZodBase64URL", (t, r) => {
  n3.init(t, r), ft.init(t, r);
}), eA = /* @__PURE__ */ W("ZodE164", (t, r) => {
  r3.init(t, r), ft.init(t, r);
}), tA = /* @__PURE__ */ W("ZodJWT", (t, r) => {
  i3.init(t, r), ft.init(t, r);
}), V1 = /* @__PURE__ */ W("ZodNumber", (t, r) => {
  B1.init(t, r), Nt.init(t, r), t.gt = (s, l) => t.check(s0(s, l)), t.gte = (s, l) => t.check(Nd(s, l)), t.min = (s, l) => t.check(Nd(s, l)), t.lt = (s, l) => t.check(i0(s, l)), t.lte = (s, l) => t.check(Od(s, l)), t.max = (s, l) => t.check(Od(s, l)), t.int = (s) => t.check(c0(s)), t.safe = (s) => t.check(c0(s)), t.positive = (s) => t.check(s0(0, s)), t.nonnegative = (s) => t.check(Nd(0, s)), t.negative = (s) => t.check(i0(0, s)), t.nonpositive = (s) => t.check(Od(0, s)), t.multipleOf = (s, l) => t.check(o0(s, l)), t.step = (s, l) => t.check(o0(s, l)), t.finite = () => t;
  const a = t._zod.bag;
  t.minValue = Math.max(a.minimum ?? Number.NEGATIVE_INFINITY, a.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(a.maximum ?? Number.POSITIVE_INFINITY, a.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (a.format ?? "").includes("int") || Number.isSafeInteger(a.multipleOf ?? 0.5), t.isFinite = !0, t.format = a.format ?? null;
});
function ju(t) {
  return K3(V1, t);
}
const nA = /* @__PURE__ */ W("ZodNumberFormat", (t, r) => {
  s3.init(t, r), V1.init(t, r);
});
function c0(t) {
  return W3(nA, t);
}
const rA = /* @__PURE__ */ W("ZodUnknown", (t, r) => {
  o3.init(t, r), Nt.init(t, r);
});
function f0() {
  return e4(rA);
}
const aA = /* @__PURE__ */ W("ZodNever", (t, r) => {
  l3.init(t, r), Nt.init(t, r);
});
function iA(t) {
  return t4(aA, t);
}
const sA = /* @__PURE__ */ W("ZodArray", (t, r) => {
  u3.init(t, r), Nt.init(t, r), t.element = r.element, t.min = (a, s) => t.check(Ru(a, s)), t.nonempty = (a) => t.check(Ru(1, a)), t.max = (a, s) => t.check(F1(a, s)), t.length = (a, s) => t.check(Z1(a, s)), t.unwrap = () => t.element;
});
function qn(t, r) {
  return d4(sA, t, r);
}
const oA = /* @__PURE__ */ W("ZodObject", (t, r) => {
  f3.init(t, r), Nt.init(t, r), at(t, "shape", () => r.shape), t.keyof = () => Kd(Object.keys(t._zod.def.shape)), t.catchall = (a) => t.clone({ ...t._zod.def, catchall: a }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: f0() }), t.loose = () => t.clone({ ...t._zod.def, catchall: f0() }), t.strict = () => t.clone({ ...t._zod.def, catchall: iA() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (a) => kC(t, a), t.safeExtend = (a) => RC(t, a), t.merge = (a) => jC(t, a), t.pick = (a) => DC(t, a), t.omit = (a) => MC(t, a), t.partial = (...a) => zC(Y1, t, a[0]), t.required = (...a) => LC(X1, t, a[0]);
});
function ja(t, r) {
  const a = {
    type: "object",
    shape: t ?? {},
    ...ve(r)
  };
  return new oA(a);
}
const lA = /* @__PURE__ */ W("ZodUnion", (t, r) => {
  d3.init(t, r), Nt.init(t, r), t.options = r.options;
});
function uA(t, r) {
  return new lA({
    type: "union",
    options: t,
    ...ve(r)
  });
}
const cA = /* @__PURE__ */ W("ZodIntersection", (t, r) => {
  h3.init(t, r), Nt.init(t, r);
});
function fA(t, r) {
  return new cA({
    type: "intersection",
    left: t,
    right: r
  });
}
const Jd = /* @__PURE__ */ W("ZodEnum", (t, r) => {
  p3.init(t, r), Nt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const a = new Set(Object.keys(r.entries));
  t.extract = (s, l) => {
    const u = {};
    for (const f of s)
      if (a.has(f))
        u[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Jd({
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
    return new Jd({
      ...r,
      checks: [],
      ...ve(l),
      entries: u
    });
  };
});
function Kd(t, r) {
  const a = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new Jd({
    type: "enum",
    entries: a,
    ...ve(r)
  });
}
const dA = /* @__PURE__ */ W("ZodTransform", (t, r) => {
  m3.init(t, r), Nt.init(t, r), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      throw new E1(t.constructor.name);
    a.addIssue = (u) => {
      if (typeof u == "string")
        a.issues.push(ho(u, a.value, r));
      else {
        const f = u;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = a.value), f.inst ?? (f.inst = t), a.issues.push(ho(f));
      }
    };
    const l = r.transform(a.value, a);
    return l instanceof Promise ? l.then((u) => (a.value = u, a)) : (a.value = l, a);
  };
});
function hA(t) {
  return new dA({
    type: "transform",
    transform: t
  });
}
const Y1 = /* @__PURE__ */ W("ZodOptional", (t, r) => {
  g3.init(t, r), Nt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function d0(t) {
  return new Y1({
    type: "optional",
    innerType: t
  });
}
const pA = /* @__PURE__ */ W("ZodNullable", (t, r) => {
  v3.init(t, r), Nt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function h0(t) {
  return new pA({
    type: "nullable",
    innerType: t
  });
}
const mA = /* @__PURE__ */ W("ZodDefault", (t, r) => {
  y3.init(t, r), Nt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function gA(t, r) {
  return new mA({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : T1(r);
    }
  });
}
const vA = /* @__PURE__ */ W("ZodPrefault", (t, r) => {
  b3.init(t, r), Nt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function yA(t, r) {
  return new vA({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : T1(r);
    }
  });
}
const X1 = /* @__PURE__ */ W("ZodNonOptional", (t, r) => {
  _3.init(t, r), Nt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function bA(t, r) {
  return new X1({
    type: "nonoptional",
    innerType: t,
    ...ve(r)
  });
}
const _A = /* @__PURE__ */ W("ZodCatch", (t, r) => {
  S3.init(t, r), Nt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function SA(t, r) {
  return new _A({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const xA = /* @__PURE__ */ W("ZodPipe", (t, r) => {
  x3.init(t, r), Nt.init(t, r), t.in = r.in, t.out = r.out;
});
function p0(t, r) {
  return new xA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const EA = /* @__PURE__ */ W("ZodReadonly", (t, r) => {
  E3.init(t, r), Nt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function CA(t) {
  return new EA({
    type: "readonly",
    innerType: t
  });
}
const wA = /* @__PURE__ */ W("ZodCustom", (t, r) => {
  C3.init(t, r), Nt.init(t, r);
});
function AA(t, r = {}) {
  return h4(wA, t, r);
}
function TA(t) {
  return p4(t);
}
function Dd(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Wd(t, r = 0) {
  const a = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${a}<item>
${Wd(s, r + 1)}${a}</item>
` : `${a}<item>${Dd(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const l of Object.keys(t)) {
      const u = t[l];
      u !== null && typeof u == "object" ? s += `${a}<${l}>
${Wd(u, r + 1)}${a}</${l}>
` : s += `${a}<${l}>${Dd(u)}</${l}>
`;
    }
    return s;
  }
  return `${a}<value>${Dd(t)}</value>
`;
}
function OA(t, r) {
  const a = Da(t);
  return r === "xml" ? Wd(a).trim() : JSON.stringify(a, null, 2);
}
function NA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function DA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function m0(t, r) {
  let a = 0;
  return typeof t.minimum == "number" && a < t.minimum && (a = r ? Math.ceil(t.minimum) : t.minimum), typeof t.exclusiveMinimum == "number" && a <= t.exclusiveMinimum && (a = r ? Math.floor(t.exclusiveMinimum) + 1 : t.exclusiveMinimum + 1), typeof t.maximum == "number" && a > t.maximum && (a = r ? Math.floor(t.maximum) : t.maximum), typeof t.exclusiveMaximum == "number" && a >= t.exclusiveMaximum && (a = r ? Math.ceil(t.exclusiveMaximum) - 1 : t.exclusiveMaximum - 1), a;
}
function Da(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, a = NA(t.example, r, t.default);
  if (a !== void 0) return a;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return Da(s);
  switch (DA(t.type)) {
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
      return m0(t, !0);
    case "number":
      return m0(t, !1);
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return t.properties || t.additionalProperties ? Da({ ...t, type: "object" }) : t.items ? Da({ ...t, type: "array" }) : null;
  }
}
const lo = "Max Response Tokens";
function Ys(t) {
  return typeof t == "string" ? t.trim() !== "" : Array.isArray(t) && t.length > 0;
}
function g0(t, r, a, s = !1) {
  r = typeof r == "string" ? r : "";
  const l = t?.choices?.[0], u = Array.isArray(t?.content) ? t.content : [], f = l?.finish_reason ?? t?.stop_reason ?? t?.candidates?.[0]?.finishReason ?? t?.finish_reason, p = s ? u.find((m) => m?.type === "tool_use") : void 0, h = Ys(l?.message?.reasoning_content) || Ys(l?.message?.reasoning) || Ys(l?.reasoning) || Ys(t?.thinking) || // Claude returns thinking blocks without text unless a summary is requested, so the block itself counts.
  u.some((m) => m?.type === "thinking" || m?.type === "redacted_thinking") || (t?.responseContent?.parts ?? []).some((m) => m?.thought && Ys(m.text)) || go(r) !== r;
  return {
    text: r,
    structured: p?.input,
    finishReason: f == null ? void 0 : String(f),
    truncated: /length|max_tokens/i.test(String(f ?? "")),
    hasReasoning: h,
    maxTokens: a
  };
}
function Eh(t) {
  return t.structured === void 0 && go(t.text).trim() === "";
}
function Ch(t) {
  return t.truncated && t.hasReasoning ? `The model used all ${t.maxTokens} response tokens on thinking and returned no answer. Raise "${lo}" or turn thinking off.` : t.truncated ? `The model returned no answer before hitting the ${t.maxTokens}-token limit. Raise "${lo}".` : t.finishReason === void 0 && t.hasReasoning ? `The model returned no answer, and SillyTavern didn't report why it stopped. If thinking used up all ${t.maxTokens} response tokens, raise "${lo}" or turn thinking off.` : t.finishReason && !/^(stop|end_turn|stop_sequence|eos)$/i.test(t.finishReason) ? `The model returned an empty response (finish reason: ${t.finishReason}).` : "The model returned an empty response.";
}
function MA(t, r) {
  return `The response was ${Q1(t)} at the ${t.maxTokens}-token limit, so it isn't complete ${r.toUpperCase()}. Raise "${lo}".`;
}
function $1(t) {
  return `The response was ${Q1(t)} at the ${t.maxTokens}-token limit, so the text may be incomplete. Raise "${lo}" for longer responses.`;
}
function Q1(t) {
  return t.truncationEstimated ? "probably cut off" : "cut off";
}
function J1(t) {
  const r = t?.message || String(t), a = t?.cause;
  if (r === "API request failed" && a) {
    const s = a?.message || String(a);
    return s ? `${r}: ${s}` : r;
  }
  return r;
}
const v0 = ["role", "content", "name", "tool_calls", "tool_call_id"];
function kA(t, r) {
  const a = r === "openai" ? v0 : [...v0, "ignoreInstruct"];
  return t.map(
    (s) => Object.fromEntries(
      Object.entries(s).filter(([l, u]) => a.includes(l) && u !== void 0)
    )
  );
}
const RA = [
  "custom_url",
  "vertexai_region",
  "zai_endpoint",
  "siliconflow_endpoint",
  "minimax_endpoint",
  "pollinations_endpoint"
];
async function jA(t, r, a, s, l) {
  const u = t.ChatCompletionService;
  if (!r.preset || typeof u?.presetToGeneratePayload != "function")
    return;
  const f = t.getPresetManager?.("openai")?.getCompletionPresetByName(r.preset);
  if (!f || f.chat_completion_source === a)
    return;
  const p = u.createRequestData({
    stream: !1,
    messages: s,
    max_tokens: l,
    model: r.model,
    chat_completion_source: a,
    secret_id: r["secret-id"],
    custom_prompt_post_processing: r["prompt-post-processing"],
    ...Object.fromEntries(RA.map((m) => [m, r["api-url"]]))
  }), h = await u.presetToGeneratePayload(f, { chat_completion_source: a }, p);
  return r.proxy && (delete h.reverse_proxy, delete h.proxy_password), h;
}
const zA = /^(Response not OK|Got response status \d+|API request failed)$/i;
class K1 extends Error {
  constructor(r, a) {
    const s = a?.message === "API request failed" && a?.cause ? a.cause : a, l = s?.message || String(s), u = zA.test(l.trim()) ? ". SillyTavern didn't pass on the provider's reason; it's in the SillyTavern server console." : "", f = r?.model ? `${r?.name} (${r.model})` : r?.name;
    super(`${f ? `${f}: ` : ""}${l}${u}`, { cause: a }), this.name = "RequestError";
  }
}
async function zu(t, r, a, s = {}, l) {
  const u = SillyTavern.getContext(), f = u.ConnectionManagerRequestService, p = f.getProfile(t), h = f.validateProfile(p), m = h.selected, y = m !== "openai", _ = kA(r, m), b = { stream: !1, signal: l, extractData: y };
  let v = s, d;
  try {
    if (m === "openai") {
      const E = await jA(u, p, h.source, _, a);
      E && (b.includePreset = !1, v = { ...E, ...s });
    }
    l?.throwIfAborted(), d = await f.sendRequest(t, _, a, b, v);
  } catch (E) {
    throw l?.aborted ? new DOMException("Request aborted by user", "AbortError") : new K1(p, E);
  }
  if (l?.aborted)
    throw new DOMException("Request aborted by user", "AbortError");
  let S;
  if (y) {
    const E = d?.content;
    S = g0({}, typeof E == "string" ? E : "", a), S = { ...S, structured: E !== null && typeof E == "object" ? E : void 0, hasReasoning: S.hasReasoning || !!d?.reasoning };
  } else
    S = g0(d, u.extractMessageFromData(d, m), a, !!v.json_schema);
  return PA(S, u);
}
const LA = 0.9;
async function PA(t, r) {
  if (t.finishReason !== void 0 || !t.text || typeof r.getTokenCountAsync != "function")
    return t;
  try {
    if (await r.getTokenCountAsync(t.text) >= t.maxTokens * LA)
      return { ...t, truncated: !0, truncationEstimated: !0 };
  } catch (a) {
    console.warn("Could not count response tokens", a);
  }
  return t;
}
async function IA(t, r, a, s) {
  const l = await zu(t, r, a, {}, s);
  if (Eh(l))
    throw new Error(Ch(l));
  return l.truncated && _e("warning", $1(l)), l.text;
}
function y0(t, r, a) {
  if (t.structured !== void 0)
    return t.structured;
  if (Eh(t))
    throw new Error(Ch(t));
  try {
    return Du(t.text, r, { schema: a });
  } catch (s) {
    throw t.truncated ? new Error(MA(t, r)) : s;
  }
}
const b0 = /* @__PURE__ */ new Set();
function BA(t) {
  const r = SillyTavern.getContext().ConnectionManagerRequestService.getProfile(t);
  return `${t}:${r?.model ?? ""}`;
}
async function UA(t, r, a, s, l, u, f) {
  const p = Ot.getSettings();
  let h, m;
  const y = g4(a);
  let _ = l === "native" ? void 0 : l;
  if (!_) {
    const v = BA(t);
    if (b0.has(v))
      _ = "json";
    else
      try {
        h = await zu(
          t,
          r,
          u,
          {
            json_schema: { name: s, strict: !0, value: y }
          },
          f
        ), m = y0(h, "json", y);
      } catch (d) {
        if (!(d instanceof K1))
          throw d;
        b0.add(v), _e(
          "warning",
          `Native mode failed, so JSON mode is used for this profile until the page is reloaded. ${d.message}`
        ), _ = "json";
      }
  }
  if (_) {
    const v = OA(y, _), d = JSON.stringify(y, null, 2), S = _ === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", E = p.prompts[S]?.content;
    if (!E)
      throw new Error(`Prompt template for mode "${_}" not found.`);
    const O = {
      example_response: v,
      schema: d
    };
    let w;
    try {
      w = za.compile(E, { noEscape: !0, strict: !0 })(O);
    } catch (x) {
      const T = p.prompts[S]?.label ?? S;
      throw new Error(
        `Failed to render the "${T}" prompt template: ${x?.message ?? x}. Available variables: ${Object.keys(O).join(", ")}.`
      );
    }
    const D = { role: "system", content: w };
    h = await zu(t, [...r, D], u, {}, f), m = y0(h, _, y);
  }
  const b = a.safeParse(m);
  if (!b.success) {
    const v = b.error.issues;
    console.error("Zod validation failed:", v), console.error("Raw response:", h.text, "Parsed:", m);
    const d = v.slice(0, 3).map((E) => `${E.path.join(".") || "(root)"}: ${E.message}`).join("; "), S = h.structured !== void 0 ? JSON.stringify(h.structured) : h.text;
    throw new Error(
      `Model response failed schema validation for ${s} (${d}${v.length > 3 ? "; …" : ""}). ` + Xd(S)
    );
  }
  return b.data;
}
const Fn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], uo = "alternate_greetings_";
function Lu(t, r = {}) {
  const a = (f, p, h) => ({
    id: f,
    label: p.label,
    value: p.value,
    group: h
  }), s = Fn.filter((f) => t[f]).map((f) => a(f, t[f], "core")), l = Object.keys(t).filter((f) => f.startsWith(uo)).sort((f, p) => parseInt(f.slice(uo.length)) - parseInt(p.slice(uo.length))).map((f) => a(f, t[f], "alternate_greetings")), u = Object.entries(r).map(([f, p]) => a(f, p, "draft"));
  return [...s, ...l, ...u];
}
function HA(t, r, a = {}) {
  return a[t]?.label || r[t]?.label || t;
}
function qA(t, r, a) {
  if (!a)
    return t;
  const s = r.startsWith(uo);
  return Object.fromEntries(
    Object.entries(t).filter(([l]) => {
      const u = l.startsWith(uo);
      return s ? !(u && l !== r || l === "first_mes") : !u;
    })
  );
}
const Mn = SillyTavern.getContext(), Sr = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
}, FA = "Continue the current text of the {{targetField}} field from exactly where it stops. Output only the new text that comes after it, in the required output format. Do not repeat, rewrite or summarize the existing text.";
new N0("dumb", {}).getSettings();
async function ZA({
  profileId: t,
  userPrompt: r,
  buildPromptOptions: a,
  continueFrom: s,
  session: l,
  allCharacters: u,
  entriesGroupByWorldName: f,
  promptSettings: p,
  formatDescription: h,
  mainContextList: m,
  includeUserMacro: y,
  maxResponseToken: _,
  targetField: b,
  outputFormat: v
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const d = Mn.extensionSettings.connectionManager?.profiles?.find((T) => T.id === t);
  if (!d)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const S = d.api ? Mn.CONNECT_API_MAP[d.api].selected : void 0;
  if (!S)
    throw new Error(`Could not determine API for profile "${d.name}".`);
  const E = {};
  E.char = Et(l.fields.name.value) || "{{char}}", E.user = y && _r ? _r : "{{user}}", E.persona = "{{persona}}", E.targetField = b, E.targetLabel = Et(HA(b, l.fields, l.draftFields)), E.userInstructions = Et(r.trim()), E.fieldSpecificInstructions = Et(
    l.draftFields[b]?.prompt ?? l.fields[b]?.prompt
  ), E.activeFormatInstructions = za.compile(h.content, { noEscape: !0 })(
    E
  );
  {
    const T = [];
    l.selectedCharacterIndexes.forEach((M) => {
      const k = parseInt(M), U = u[k];
      U && T.push(U);
    }), E.characters = Et(T);
  }
  {
    const T = {};
    Object.entries(f).filter(
      ([M, k]) => k.length > 0 && l.selectedWorldNames.includes(M) && k.some((U) => !U.disable)
    ).forEach(([M, k]) => {
      T[M] = k.filter((U) => !U.disable);
    }), E.lorebooks = Et(T);
  }
  {
    const T = {}, M = {}, k = {}, U = Ot.getSettings().contextToSend.dontSendOtherGreetings, Y = qA(l.fields, b, U);
    Object.entries(Y).forEach(([G, $]) => {
      Fn.includes(G) ? T[$.label] = $.value : G.startsWith("alternate_greetings_") && (M[G] = $.value);
    }), Object.entries(l.draftFields || {}).forEach(([G, $]) => {
      k[$.label] = $.value;
    });
    const B = {};
    Object.keys(T).length > 0 && (B.core = T), Object.keys(M).length > 0 && (B.alternate_greetings = M), Object.keys(k).length > 0 && (B.draft = k), E.fields = Et(B), E.fieldList = Et(Lu(Y, l.draftFields));
  }
  const O = [];
  {
    for (const T of m) {
      if (T.promptName === "chatHistory") {
        const Y = await B0(S, a);
        if (Y.warnings && Y.warnings.length > 0)
          for (const B of Y.warnings)
            _e("warning", B);
        O.push(...Y.result);
        continue;
      }
      let M = structuredClone(E);
      T.promptName === "stDescription" && (M.char = "{{char}}", M.user = "{{user}}");
      const k = p[T.promptName];
      if (!k)
        continue;
      const U = {
        role: T.role,
        content: co(k.content, M, Mn.substituteParams)
      };
      U.content && O.push(U);
    }
    s && (O.push({
      role: "user",
      content: za.compile(FA, { noEscape: !0 })(E)
    }), O.push({
      role: "assistant",
      content: d1(s, v)
    }));
  }
  const w = await zu(t, O, _);
  if (Eh(w) && (!s || w.truncated))
    throw new Error(Ch(w));
  if (w.truncated && _e("warning", $1(w)), s) {
    const T = VE(s, w.text, v);
    return T.trim() === s.trim() ? (_e("warning", "The model didn't add any text. Try again or use a different model."), s) : T;
  }
  const D = Du(w.text, v);
  let x;
  if (typeof D == "string")
    x = D;
  else if (typeof D == "object" && D !== null)
    if ("response" in D && typeof D.response == "string")
      x = D.response;
    else {
      const T = Object.values(D)[0];
      x = T ? String(T) : "";
    }
  else
    x = "";
  return x;
}
function GA(t, r) {
  const a = t.match(/\d+/g)?.map(Number) ?? [], s = r.match(/\d+/g)?.map(Number) ?? [];
  for (let l = 0; l < Math.max(a.length, s.length); l++) {
    const u = (a[l] ?? 0) - (s[l] ?? 0);
    if (u !== 0) return u;
  }
  return 0;
}
async function VA(t, r) {
  let a, s = t.formatVersion;
  for (; ; ) {
    const l = (f) => GA(f.to, s) > 0, u = r.find((f) => f.from === s && l(f)) ?? r.find((f) => f.from === "*" && l(f));
    if (!u) return a;
    a = await u.action(a ?? structuredClone(t)), a.formatVersion = u.to, s = u.to;
  }
}
function YA(t, r) {
  const a = { ...t.prompts };
  for (const [s, l] of Object.entries(r))
    a[s]?.isDefault && (a[s] = { ...a[s], content: l });
  return { ...t, prompts: a };
}
const ka = "SillyTavern-Character-Creator", wh = "0.4.0", XA = "F_1.11", W1 = {
  EXTENSION: "charCreator"
}, du = [
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
  stDescription: Su,
  charDefinitions: Zd,
  lorebookDefinitions: r1,
  xmlFormat: e1,
  jsonFormat: t1,
  noneFormat: n1,
  worldInfoCharDefinition: a1,
  existingFieldDefinitions: oo,
  taskDescription: dh,
  outputFormatInstructions: fh,
  personaDescription: zx,
  reviseJsonPrompt: Lx,
  reviseXmlPrompt: i1,
  reviseTaskDescription: Px
}, eb = {
  version: wh,
  formatVersion: XA,
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
      content: oo,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: dh,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: fh,
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
function eh(t) {
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
const Ot = new N0(W1.EXTENSION, eb);
async function $A() {
  return new Promise((t, r) => {
    Ot.initializeSettings({ strategy: [] }).then(
      () => VA(Ot.getSettings(), [
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
                  content: oo,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: dh,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: fh,
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
            return await _e("info", `[${ka}] Added Alternate Greetings.`), {
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
                  content: oo,
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
            return a.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Su), s;
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
            }, a.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Zd), a.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = r1), a.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = oo), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(a) {
            const s = {
              ...a
            };
            return a.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Su), s;
          }
        },
        {
          from: "F_1.9",
          to: "F_1.10",
          action(a) {
            const s = {
              ...a
            };
            return a.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Zd), a.prompts.worldInfoCharDefinition.isDefault && (s.prompts.worldInfoCharDefinition.content = a1), s;
          }
        },
        {
          from: "F_1.10",
          to: "F_1.11",
          action(a) {
            return YA(a, {
              stDescription: Su,
              xmlFormat: e1,
              jsonFormat: t1,
              noneFormat: n1,
              reviseXmlPrompt: i1
            });
          }
        }
      ])
    ).then((a) => {
      a && (Mn.extensionSettings[W1.EXTENSION] = { ...a, version: wh }, Ot.saveSettings()), t();
    }).catch((a) => {
      console.error(`[${ka}] Error initializing settings:`, a), _e("error", `[${ka}] Failed to initialize settings: ${a.message}`), Mn.Popup.show.confirm(
        `[${ka}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (Ot.resetSettings(), _e("success", `[${ka}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const ye = ({ children: t, className: r, overrideDefaults: a = !1, ...s }) => {
  const l = ee.useMemo(() => {
    const u = [];
    return a || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [a, r]);
  return /* @__PURE__ */ A.jsx("button", { className: l, ...s, children: t });
}, QA = ({ label: t, className: r, overrideDefaults: a = !1, type: s = "text", ...l }) => {
  const u = ee.useMemo(() => {
    const f = [];
    return a || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [a, r, s]);
  if (s === "checkbox") {
    const f = a ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ A.jsxs("label", { className: f, children: [
      /* @__PURE__ */ A.jsx("input", { type: "checkbox", ...l }),
      t && /* @__PURE__ */ A.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ A.jsx("input", { type: s, className: u, ...l });
}, Pu = ({ children: t, className: r, overrideDefaults: a = !1, ...s }) => {
  const l = ee.useMemo(() => {
    const u = [];
    return a || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [a, r]);
  return /* @__PURE__ */ A.jsx("select", { className: l, ...s, children: t });
}, Rn = ({ children: t, className: r, overrideDefaults: a = !1, ...s }) => {
  const l = ee.useMemo(() => {
    const u = [];
    return a || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [a, r]);
  return /* @__PURE__ */ A.jsx("textarea", { className: l, ...s, children: t });
};
var JA = T0(), vn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(vn || {}), Kr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Kr || {});
const KA = SillyTavern.getContext(), Ii = ({
  content: t,
  type: r,
  inputValue: a = "",
  options: s = {},
  preventEscape: l = !1,
  onComplete: u
}) => {
  var f;
  const p = ee.useRef(null), h = ee.useRef(null), [m, y] = ee.useState(!1), [_, b] = ee.useState(null), v = ee.useRef(KA.uuidv4()), d = ee.useRef({
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
    return w.addEventListener("cancel", D), d.current.dlg = w, d.current.mainInput = h.current, Ai.util.popups.push(d.current), w.showModal || (w.classList.add("poly_dialog"), yv.registerDialog(w), new ResizeObserver((x) => {
      for (const T of x)
        yv.reposition(T.target);
    }).observe(w)), w.showModal(), rd(), () => {
      vv(Ai.util.popups, d.current), rd(), w.removeEventListener("cancel", D);
    };
  }, []);
  const S = async (w) => {
    var D, x;
    let T = w;
    if (r === vn.INPUT && (w >= Kr.AFFIRMATIVE ? T = (D = h.current) == null ? void 0 : D.value : w === Kr.NEGATIVE ? T = !1 : w === Kr.CANCELLED ? T = null : T = !1), (x = s.customInputs) != null && x.length) {
      const k = new Map(
        s.customInputs.map((U) => {
          var Y;
          const B = (Y = p.current) == null ? void 0 : Y.querySelector(`#${U.id}`);
          return [B.id, B.checked];
        })
      );
      d.current.inputResults = k;
    }
    if (d.current.result = w, d.current.value = T, s.onClosing && !await s.onClosing(d.current)) {
      y(!0), d.current.value = void 0, d.current.result = void 0, d.current.inputResults = void 0;
      return;
    }
    y(!1), Ai.util.lastResult = {
      value: T,
      result: w,
      inputResults: d.current.inputResults
    };
    const M = p.current;
    M && (M.setAttribute("closing", ""), rd(), G2(M, async () => {
      var k;
      if (M.close(), s.onClose && await s.onClose(d.current), vv(Ai.util.popups, d.current), Ai.util.popups.length > 0) {
        const U = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), Y = U?.getAttribute("data-id"), B = Ai.util.popups.find((G) => G.id === Y);
        B && B.lastFocus && B.lastFocus.focus();
      }
      u(T);
    }));
  }, E = (w) => {
    w.target instanceof HTMLElement && w.target !== p.current && (b(w.target), d.current.lastFocus = w.target);
  }, O = async (w) => {
  };
  return JA.createPortal(
    /* @__PURE__ */ A.jsx(
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
        children: /* @__PURE__ */ A.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ A.jsx("div", { className: "popup-content", children: t }),
          r === vn.INPUT && /* @__PURE__ */ A.jsx(
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
          s.customInputs && /* @__PURE__ */ A.jsx("div", { className: "popup-inputs", children: s.customInputs.map((w) => /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: w.id, children: [
            /* @__PURE__ */ A.jsx("input", { type: "checkbox", id: w.id, defaultChecked: w.defaultState }),
            /* @__PURE__ */ A.jsx("span", { "data-i18n": w.label, children: w.label }),
            w.tooltip && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: w.tooltip,
                "data-i18n": `[title]${w.tooltip}`
              }
            )
          ] }, w.id)) }),
          r !== vn.DISPLAY && /* @__PURE__ */ A.jsxs("div", { className: "popup-controls", children: [
            (f = s.customButtons) == null ? void 0 : f.map((w, D) => {
              const x = typeof w == "string" ? { text: w, result: D + 2 } : w;
              return /* @__PURE__ */ A.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${x.classes ?? ""}`,
                  "data-result": x.result,
                  onClick: () => {
                    var T;
                    (T = x.action) == null || T.call(x), S(x.result ?? D + 2);
                  },
                  "data-i18n": x.text,
                  children: x.text
                },
                D
              );
            }),
            r !== vn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => S(Kr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== vn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => S(Kr.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === vn.DISPLAY && /* @__PURE__ */ A.jsx(
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
}, Xs = (t, r, a) => {
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
}, br = SillyTavern.getContext(), tb = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: a = "Select a Connection Profile",
  onChange: s,
  onCreate: l,
  onUpdate: u,
  onDelete: f
}) => {
  const [p, h] = ee.useState(t ?? ""), [m, y] = ee.useState(Date.now()), { isEnabled: _, profiles: b, connectApiMap: v } = ee.useMemo(() => {
    var E, O;
    return (E = br.extensionSettings.disabledExtensions) != null && E.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((O = br.extensionSettings.connectionManager) == null ? void 0 : O.profiles) ?? [],
      connectApiMap: br.CONNECT_API_MAP
    };
  }, [m]);
  ee.useEffect(() => {
    if (!_) return;
    const E = (D) => {
      Xs(D, r, v) && (y(Date.now()), l?.(D));
    }, O = (D, x) => {
      const T = Xs(D, r, v), M = Xs(x, r, v);
      (T || M) && y(Date.now()), u?.(D, x), p === D.id && !M && (h(""), s?.(void 0));
    }, w = (D) => {
      Xs(D, r, v) && (y(Date.now()), f?.(D), p === D.id && (h(""), s?.(void 0)));
    };
    return br.eventSource.on("CONNECTION_PROFILE_CREATED", E), br.eventSource.on("CONNECTION_PROFILE_UPDATED", O), br.eventSource.on("CONNECTION_PROFILE_DELETED", w), () => {
      br.eventSource.removeListener("CONNECTION_PROFILE_CREATED", E), br.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), br.eventSource.removeListener("CONNECTION_PROFILE_DELETED", w);
    };
  }, [_, p, r, v, s, l, u, f]);
  const d = ee.useMemo(() => {
    if (!_) return [];
    const E = b.filter((w) => Xs(w, r, v)), O = {};
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
  return _ ? /* @__PURE__ */ A.jsxs(Pu, { value: p, onChange: S, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: a }),
    d.map((E) => /* @__PURE__ */ A.jsx("optgroup", { label: E.label, children: E.profiles.map((O) => /* @__PURE__ */ A.jsx("option", { value: O.id, children: O.name }, O.id)) }, E.label))
  ] }) : /* @__PURE__ */ A.jsx(Pu, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, WA = xu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: a, showSelectInput: s, onToggle: l, onDelete: u, onSelectChange: f }) => {
    const {
      id: p,
      label: h,
      enabled: m,
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
      opacity: r && !m ? 0.6 : 1
    }, O = { cursor: "pointer", flexShrink: 0 }, w = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ A.jsxs("li", { className: "sortable-list-item", style: E, "data-id": p, children: [
      /* @__PURE__ */ A.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ A.jsx(
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
      s && b && v && /* @__PURE__ */ A.jsx(
        Pu,
        {
          value: S,
          onChange: (D) => f(p, D.target.value),
          disabled: !m,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: d.length === 0 ? /* @__PURE__ */ A.jsx("option", { disabled: !0, children: "--" }) : d.map((D) => /* @__PURE__ */ A.jsx("option", { value: D.value, children: D.label }, D.value))
        }
      ),
      s && (!b || !v) && /* @__PURE__ */ A.jsx("span", { style: w }),
      r && _ && /* @__PURE__ */ A.jsx(
        ye,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${m ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...O,
            marginRight: "10px",
            fontSize: "1.2em",
            color: m ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => l(p)
        }
      ),
      r && !_ && /* @__PURE__ */ A.jsx("span", { style: w }),
      a && y && /* @__PURE__ */ A.jsx(
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
      a && !y && /* @__PURE__ */ A.jsx("span", { style: { ...w, marginRight: 0 } })
    ] });
  }
), eT = ({
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
  }, m = (_) => {
    r(t.filter((b) => b.id !== _));
  }, y = (_, b) => {
    r(t.map((v) => v.id === _ ? { ...v, selectValue: b } : v));
  };
  return /* @__PURE__ */ A.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((_) => /* @__PURE__ */ A.jsx(
    WA,
    {
      item: _,
      showToggleButton: a,
      showDeleteButton: s,
      showSelectInput: l,
      onToggle: h,
      onDelete: m,
      onSelectChange: y
    },
    _.id
  )) });
}, hu = ({
  items: t,
  value: r,
  onChange: a,
  placeholder: s = "Select items...",
  closeOnSelect: l = !1,
  multiple: u = !0,
  disabled: f = !1,
  onBeforeSelection: p,
  enableSearch: h = !1,
  searchPlaceholder: m = "Search...",
  searchNoResultsText: y = "No results found",
  searchFuseOptions: _,
  inputClasses: b,
  containerClasses: v
}) => {
  const [d, S] = ee.useState(!1), [E, O] = ee.useState(""), w = ee.useRef(null);
  ee.useEffect(() => {
    const k = (U) => {
      w.current && !w.current.contains(U.target) && S(!1);
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
  }, [t, h, _]), x = ee.useMemo(() => !h || !E.trim() || !D ? t : D.search(E.trim()).map((k) => k.item), [t, E, h, D]), T = async (k) => {
    let U;
    u ? U = r.includes(k) ? r.filter((Y) => Y !== k) : [...r, k] : U = r.includes(k) ? [] : [k], !(p && !await Promise.resolve(p(r, U))) && (a(U), l && S(!1));
  }, M = ee.useMemo(() => {
    var k;
    return r.length === 0 ? s : r.length === 1 ? ((k = t.find((U) => U.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ A.jsxs(
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
        /* @__PURE__ */ A.jsxs(
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
              /* @__PURE__ */ A.jsx("span", { className: "fancy-dropdown-trigger-text", children: M }),
              /* @__PURE__ */ A.jsx("i", { className: `fas ${d ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        d && /* @__PURE__ */ A.jsxs(
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
              h && /* @__PURE__ */ A.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ A.jsx(
                    QA,
                    {
                      type: "text",
                      placeholder: m,
                      value: E,
                      onChange: (k) => O(k.target.value),
                      autoFocus: !0,
                      className: b
                    }
                  )
                }
              ),
              /* @__PURE__ */ A.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: x.length > 0 ? x.map((k) => /* @__PURE__ */ A.jsx(
                tT,
                {
                  item: k,
                  isSelected: r.includes(k.value),
                  onClick: T
                },
                k.value
              )) : /* @__PURE__ */ A.jsx(
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
}, tT = xu.memo(({ item: t, isSelected: r, onClick: a }) => {
  const [s, l] = ee.useState(!1);
  return /* @__PURE__ */ A.jsxs(
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
        /* @__PURE__ */ A.jsx("span", { children: t.label }),
        r && /* @__PURE__ */ A.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), Md = SillyTavern.getContext(), Iu = ({
  value: t,
  items: r,
  readOnlyValues: a = [],
  label: s,
  onChange: l,
  onItemsChange: u,
  enableCreate: f = !1,
  enableRename: p = !1,
  enableDelete: h = !1,
  onCreate: m,
  onRename: y,
  onDelete: _,
  buttons: b
}) => {
  const v = ee.useMemo(() => r.find((w) => w.value === t), [r, t]), d = ee.useCallback((w) => w ? a.includes(w) : !1, [a]), S = async () => {
    const w = await Md.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!w || w.trim() === "") return;
    const D = w.trim();
    if (r.some((T) => T.value === D)) {
      await _e("warning", `A ${s} with this name already exists.`);
      return;
    }
    let x = { value: D, label: D };
    if (m) {
      const T = await Promise.resolve(m(D));
      if (!T.confirmed) return;
      T.value && (typeof T.value == "string" ? x = { value: T.value, label: T.value } : x = T.value);
    }
    u([...r, x]), l(x.value, t);
  }, E = async () => {
    if (!v) {
      await _e("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (d(v.value)) {
      await _e("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const w = await Md.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${v.label}":`,
      v.label
    );
    if (!w || w.trim() === "" || w.trim() === v.value) return;
    const D = w.trim();
    if (r.some((M) => M.value === D)) {
      await _e("warning", `A ${s} with this name already exists.`);
      return;
    }
    let x = { value: D, label: D };
    if (y) {
      const M = await Promise.resolve(y(v.value, D));
      if (!M.confirmed) return;
      M.value && (typeof M.value == "string" ? x = { value: M.value, label: M.value } : x = M.value);
    }
    const T = r.map((M) => M.value === v.value ? x : M);
    u(T), l(x.value, t);
  }, O = async () => {
    var w;
    if (!v) {
      await _e("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (d(v.value)) {
      await _e("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await Md.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${v.label}"?`
    ) || _ && !await Promise.resolve(_(v.value)))
      return;
    const D = r.findIndex((M) => M.value === v.value), x = r.filter((M) => M.value !== v.value);
    u(x);
    let T;
    if (x.length > 0) {
      const M = Math.min(D, x.length - 1);
      T = (w = x[M]) == null ? void 0 : w.value;
    }
    l(T, t);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ A.jsx(Pu, { value: t ?? "", onChange: (w) => l(w.target.value, t), children: r.map((w) => /* @__PURE__ */ A.jsx("option", { value: w.value, children: w.label }, w.value)) }),
    f && /* @__PURE__ */ A.jsx(
      ye,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: S,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ A.jsx(
      ye,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: E,
        disabled: !v,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ A.jsx(
      ye,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: O,
        disabled: !v,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    b?.map((w) => /* @__PURE__ */ A.jsx(
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
}, nb = () => {
  const [, t] = ee.useState(0);
  return ee.useCallback(() => {
    t((a) => a + 1);
  }, []);
}, kd = SillyTavern.getContext(), nT = () => {
  const t = nb(), r = Ot.getSettings(), [a, s] = ee.useState(du[0]), l = ee.useCallback(
    (x) => {
      const T = Ot.getSettings();
      x(T), Ot.saveSettings(), t();
    },
    [t]
  ), u = ee.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((x) => ({ value: x, label: x })),
    [r.mainContextTemplatePresets]
  ), f = ee.useMemo(
    () => Object.entries(r.prompts).map(([x, T]) => ({
      value: x,
      label: `${T.label} (${x})`
    })),
    [r.prompts]
  ), p = ee.useMemo(() => {
    const x = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return x ? x.prompts.map((T) => {
      const M = r.prompts[T.promptName], k = M ? `${M.label} (${T.promptName})` : T.promptName;
      return {
        id: T.promptName,
        label: k,
        enabled: T.enabled,
        selectValue: T.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), h = (x) => {
    l((T) => {
      T.mainContextTemplatePreset = x ?? "default";
    });
  }, m = (x) => {
    l((T) => {
      const M = {};
      x.forEach((k) => {
        M[k.value] = T.mainContextTemplatePresets[k.value] ?? structuredClone(
          T.mainContextTemplatePresets[T.mainContextTemplatePreset] ?? T.mainContextTemplatePresets.default
        );
      }), T.mainContextTemplatePresets = M;
    });
  }, y = (x) => {
    l((T) => {
      const M = x.map((Y) => ({
        promptName: Y.id,
        enabled: Y.enabled,
        role: Y.selectValue ?? "user"
      })), k = {
        ...T.mainContextTemplatePresets[T.mainContextTemplatePreset],
        prompts: M
      }, U = {
        ...T.mainContextTemplatePresets,
        [T.mainContextTemplatePreset]: k
      };
      T.mainContextTemplatePresets = U;
    });
  }, _ = async () => {
    await kd.Popup.show.confirm("Restore default", "Are you sure?") && l((T) => {
      T.mainContextTemplatePresets = {
        ...T.mainContextTemplatePresets,
        default: structuredClone(eb.mainContextTemplatePresets.default)
      }, T.mainContextTemplatePreset === "default" ? t() : T.mainContextTemplatePreset = "default";
    });
  }, b = (x) => {
    l((T) => {
      const M = x.map((B) => B.value);
      Object.keys(T.prompts).filter((B) => !M.includes(B)).forEach((B) => {
        Object.values(T.mainContextTemplatePresets).forEach((G) => {
          G.prompts = G.prompts.filter(($) => $.promptName !== B);
        });
      });
      const Y = {};
      x.forEach((B) => {
        Y[B.value] = T.prompts[B.value] ?? { content: "", isDefault: !1, label: B.label };
      }), T.prompts = Y;
    });
  }, v = (x) => {
    const T = eh(x);
    return T ? r.prompts[T] ? (_e("error", `Prompt name already exists: ${T}`), { confirmed: !1 }) : (l((M) => {
      M.prompts = {
        ...M.prompts,
        [T]: { content: M.prompts[a]?.content ?? "", isDefault: !1, label: x }
      };
      const k = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([U, Y]) => [
          U,
          {
            ...Y,
            prompts: [...Y.prompts, { enabled: !0, promptName: T, role: "user" }]
          }
        ])
      );
      M.mainContextTemplatePresets = k;
    }), s(T), { confirmed: !0, value: T }) : (_e("error", `Invalid prompt name: ${x}`), { confirmed: !1 });
  }, d = (x, T) => {
    const M = eh(T);
    return M ? r.prompts[M] ? (_e("error", `Prompt name already exists: ${M}`), { confirmed: !1 }) : (l((k) => {
      const { [x]: U, ...Y } = k.prompts;
      k.prompts = {
        ...Y,
        [M]: { ...U, label: T }
      };
      const B = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([G, $]) => [
          G,
          {
            ...$,
            prompts: $.prompts.map((ue) => ue.promptName === x ? { ...ue, promptName: M } : ue)
          }
        ])
      );
      k.mainContextTemplatePresets = B;
    }), s(M), { confirmed: !0, value: M }) : (_e("error", `Invalid prompt name: ${T}`), { confirmed: !1 });
  }, S = (x) => {
    const T = x.target.value;
    l((M) => {
      const k = M.prompts[a];
      k && (M.prompts = {
        ...M.prompts,
        [a]: {
          ...k,
          // Copy existing properties
          content: T,
          isDefault: du.includes(a) ? tt[a] === T : !1
        }
      });
    });
  }, E = async () => {
    const x = r.prompts[a];
    if (!x) return _e("warning", "No prompt selected.");
    await kd.Popup.show.confirm("Restore Default", `Restore default for "${x.label}"?`) && l((M) => {
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
    await kd.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (Ot.resetSettings(), t(), _e("success", "Settings have been reset."));
  }, w = r.prompts[a], D = du.includes(a);
  return /* @__PURE__ */ A.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ A.jsx(
          ye,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: _
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        Iu,
        {
          label: "Template",
          items: u,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: h,
          onItemsChange: m,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
        eT,
        {
          items: p,
          onItemsChange: y,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Prompt Templates" }),
        D && /* @__PURE__ */ A.jsx(
          ye,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: E
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        Iu,
        {
          label: "Prompt",
          items: f,
          value: a,
          readOnlyValues: du,
          onChange: (x) => s(x ?? ""),
          onItemsChange: b,
          onCreate: v,
          onRename: d,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx(
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
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", style: { marginTop: "15px" }, children: [
      /* @__PURE__ */ A.jsx(
        "input",
        {
          type: "checkbox",
          checked: r.showSaveAsWorldInfoEntry.show,
          onChange: (x) => l((T) => {
            T.showSaveAsWorldInfoEntry.show = x.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ A.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ A.jsxs(ye, { className: "danger_button", style: { width: "auto" }, onClick: O, children: [
      /* @__PURE__ */ A.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, _0 = ({
  fieldId: t,
  label: r,
  value: a,
  prompt: s,
  large: l = !1,
  rows: u = 3,
  promptEnabled: f = !0,
  isDraft: p = !1,
  isGenerating: h = !1,
  onValueChange: m,
  onPromptChange: y,
  onGenerate: _,
  onContinue: b,
  onClear: v,
  onCompare: d,
  onDelete: S,
  onOpenReviseSessions: E
}) => /* @__PURE__ */ A.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ A.jsx("label", { children: r }),
  /* @__PURE__ */ A.jsxs("div", { className: `field-container ${l ? "large-field" : ""}`, children: [
    /* @__PURE__ */ A.jsx(Rn, { value: a, onChange: (O) => m(t, O.target.value), rows: u }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ A.jsx(ye, { onClick: () => _(t), disabled: h, title: "Generate field content", children: h ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ A.jsx(ye, { onClick: () => b(t), disabled: h, title: "Continue from current content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ A.jsx(ye, { onClick: () => v(t), title: "Clear field content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" }) }),
      E && !p && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ A.jsx(ye, { onClick: () => E(t), title: "Revise with AI chat", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" }) }),
      !p && d && /* @__PURE__ */ A.jsx(ye, { onClick: () => d(t), title: "Compare with loaded character", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      p && S && /* @__PURE__ */ A.jsx(ye, { onClick: () => S(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  f && /* @__PURE__ */ A.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ A.jsx(
    Rn,
    {
      value: s,
      onChange: (O) => y(t, O.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), rT = SillyTavern.getContext(), aT = ({
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
  }, m = async () => {
    if (t.length === 0) return;
    if (await rT.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const v = t.filter((d, S) => S !== f);
      r(v);
    }
  }, y = (b, v, d) => {
    const S = [...t];
    S[b][v] = d, r(S);
  }, _ = t[f];
  return /* @__PURE__ */ A.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ A.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ A.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((b, v) => /* @__PURE__ */ A.jsxs(
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
      /* @__PURE__ */ A.jsxs(ye, { onClick: h, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ A.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ A.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ A.jsx(
          Rn,
          {
            value: _?.value ?? "",
            onChange: (b) => y(f, "value", b.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ A.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
          Rn,
          {
            value: _?.prompt ?? "",
            onChange: (b) => y(f, "prompt", b.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ A.jsx(ye, { onClick: () => a(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ A.jsx(ye, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ A.jsx(
          ye,
          {
            onClick: () => y(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ A.jsx(ye, { onClick: () => l(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ A.jsx(
          ye,
          {
            onClick: m,
            disabled: u,
            title: "Delete greeting",
            className: "danger_button",
            children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        )
      ] })
    ] })
  ] });
};
var ia = (
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
      }, h = a.length, m = r.length, y = 1, _ = h + m;
      s.maxEditLength != null && (_ = Math.min(_, s.maxEditLength));
      var b = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, v = Date.now() + b, d = [{ oldPos: -1, lastComponent: void 0 }], S = this.extractCommon(d[0], a, r, 0, s);
      if (d[0].oldPos + 1 >= m && S + 1 >= h)
        return p(this.buildValues(d[0].lastComponent, a, r));
      var E = -1 / 0, O = 1 / 0, w = function() {
        for (var x = Math.max(E, -y); x <= Math.min(O, y); x += 2) {
          var T = void 0, M = d[x - 1], k = d[x + 1];
          M && (d[x - 1] = void 0);
          var U = !1;
          if (k) {
            var Y = k.oldPos - x;
            U = k && 0 <= Y && Y < h;
          }
          var B = M && M.oldPos + 1 < m;
          if (!U && !B) {
            d[x] = void 0;
            continue;
          }
          if (!B || U && M.oldPos < k.oldPos ? T = u.addToPath(k, !0, !1, 0, s) : T = u.addToPath(M, !1, !0, 1, s), S = u.extractCommon(T, a, r, x, s), T.oldPos + 1 >= m && S + 1 >= h)
            return p(u.buildValues(T.lastComponent, a, r)) || !0;
          d[x] = T, T.oldPos + 1 >= m && (O = Math.min(O, x - 1)), S + 1 >= h && (E = Math.max(E, x + 1));
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
      for (var f = a.length, p = s.length, h = r.oldPos, m = h - l, y = 0; m + 1 < f && h + 1 < p && this.equals(s[h + 1], a[m + 1], u); )
        m++, h++, y++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return y && !u.oneChangePerToken && (r.lastComponent = { count: y, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = h, m;
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
      for (var f = l.length, p = 0, h = 0, m = 0; p < f; p++) {
        var y = l[p];
        if (y.removed)
          y.value = this.join(s.slice(m, m + y.count)), m += y.count;
        else {
          if (!y.added && this.useLongestToken) {
            var _ = a.slice(h, h + y.count);
            _ = _.map(function(b, v) {
              var d = s[m + v];
              return d.length > b.length ? d : b;
            }), y.value = this.join(_);
          } else
            y.value = this.join(a.slice(h, h + y.count));
          h += y.count, y.added || (m += y.count);
        }
      }
      return l;
    }, t;
  })()
), iT = /* @__PURE__ */ (function() {
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
})(), sT = (
  /** @class */
  (function(t) {
    iT(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(ia)
);
new sT();
function S0(t, r) {
  var a;
  for (a = 0; a < t.length && a < r.length; a++)
    if (t[a] != r[a])
      return t.slice(0, a);
  return t.slice(0, a);
}
function x0(t, r) {
  var a;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (a = 0; a < t.length && a < r.length; a++)
    if (t[t.length - (a + 1)] != r[r.length - (a + 1)])
      return t.slice(-a);
  return t.slice(-a);
}
function th(t, r, a) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return a + t.slice(r.length);
}
function nh(t, r, a) {
  if (!r)
    return t + a;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + a;
}
function $s(t, r) {
  return th(t, r, "");
}
function pu(t, r) {
  return nh(t, r, "");
}
function E0(t, r) {
  return r.slice(0, oT(t, r));
}
function oT(t, r) {
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
function Qs(t) {
  var r;
  for (r = t.length - 1; r >= 0 && t[r].match(/\s/); r--)
    ;
  return t.substring(r + 1);
}
function Jr(t) {
  var r = t.match(/^\s*/);
  return r ? r[0] : "";
}
var rb = /* @__PURE__ */ (function() {
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
})(), Bu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", lT = new RegExp("[".concat(Bu, "]+|\\s+|[^").concat(Bu, "]"), "ug"), uT = (
  /** @class */
  (function(t) {
    rb(r, t);
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
        l = a.match(lT) || [];
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
        p.added ? u = p : p.removed ? f = p : ((u || f) && C0(l, f, u, p), l = p, u = null, f = null);
      }), (u || f) && C0(l, f, u, null), a;
    }, r;
  })(ia)
), cT = new uT();
function ab(t, r, a) {
  return cT.diff(t, r, a);
}
function C0(t, r, a, s) {
  if (r && a) {
    var l = Jr(r.value), u = Qs(r.value), f = Jr(a.value), p = Qs(a.value);
    if (t) {
      var h = S0(l, f);
      t.value = nh(t.value, f, h), r.value = $s(r.value, h), a.value = $s(a.value, h);
    }
    if (s) {
      var m = x0(u, p);
      s.value = th(s.value, p, m), r.value = pu(r.value, m), a.value = pu(a.value, m);
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
    var _ = Jr(s.value), b = Jr(r.value), v = Qs(r.value), d = S0(_, b);
    r.value = $s(r.value, d);
    var S = x0($s(_, d), v);
    r.value = pu(r.value, S), s.value = th(s.value, _, S), t.value = nh(t.value, _, _.slice(0, _.length - S.length));
  } else if (s) {
    var E = Jr(s.value), O = Qs(r.value), w = E0(O, E);
    r.value = pu(r.value, w);
  } else if (t) {
    var D = Qs(t.value), x = Jr(r.value), w = E0(D, x);
    r.value = $s(r.value, w);
  }
}
var fT = (
  /** @class */
  (function(t) {
    rb(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      var s = new RegExp("(\\r?\\n)|[".concat(Bu, "]+|[^\\S\\n\\r]+|[^").concat(Bu, "]"), "ug");
      return a.match(s) || [];
    }, r;
  })(ia)
);
new fT();
var dT = /* @__PURE__ */ (function() {
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
})(), hT = (
  /** @class */
  (function(t) {
    dT(r, t);
    function r() {
      var a = t !== null && t.apply(this, arguments) || this;
      return a.tokenize = ib, a;
    }
    return r.prototype.equals = function(a, s, l) {
      return l.ignoreWhitespace ? ((!l.newlineIsToken || !a.includes(`
`)) && (a = a.trim()), (!l.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : l.ignoreNewlineAtEof && !l.newlineIsToken && (a.endsWith(`
`) && (a = a.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), t.prototype.equals.call(this, a, s, l);
    }, r;
  })(ia)
);
new hT();
function ib(t, r) {
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
var pT = /* @__PURE__ */ (function() {
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
})(), mT = (
  /** @class */
  (function(t) {
    pT(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      return a.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ia)
);
new mT();
var gT = /* @__PURE__ */ (function() {
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
})(), vT = (
  /** @class */
  (function(t) {
    gT(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      return a.split(/([{}:;,]|\s+)/);
    }, r;
  })(ia)
);
new vT();
var yT = /* @__PURE__ */ (function() {
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
})(), bT = (
  /** @class */
  (function(t) {
    yT(r, t);
    function r() {
      var a = t !== null && t.apply(this, arguments) || this;
      return a.tokenize = ib, a;
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
      return typeof a == "string" ? a : JSON.stringify(rh(a, null, null, f), null, "  ");
    }, r.prototype.equals = function(a, s, l) {
      return t.prototype.equals.call(this, a.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), l);
    }, r;
  })(ia)
);
new bT();
function rh(t, r, a, s, l) {
  r = r || [], a = a || [], s && (t = s(l === void 0 ? "" : l, t));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === t)
      return a[u];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), a.push(f), u = 0; u < t.length; u += 1)
      f[u] = rh(t[u], r, a, s, String(u));
    return r.pop(), a.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, a.push(f);
    var p = [], h;
    for (h in t)
      Object.prototype.hasOwnProperty.call(t, h) && p.push(h);
    for (p.sort(), u = 0; u < p.length; u += 1)
      h = p[u], f[h] = rh(t[h], r, a, s, h);
    r.pop(), a.pop();
  } else
    f = t;
  return f;
}
var _T = /* @__PURE__ */ (function() {
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
})(), ST = (
  /** @class */
  (function(t) {
    _T(r, t);
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
  })(ia)
);
new ST();
const xT = ({ originalContent: t, newContent: r, fieldName: a }) => {
  const s = ee.useMemo(() => {
    const l = ab(t, r);
    let u = "", f = "";
    return l.forEach((p) => {
      const m = `<span style="${p.added ? "color: green; background-color: #e6ffed;" : p.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p.value}</span>`;
      p.added || (u += m), p.removed || (f += m);
    }), { originalHtml: u, newHtml: f };
  }, [t, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ A.jsxs("h3", { children: [
      "Compare Changes for: ",
      a
    ] }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ A.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ A.jsx("h4", { children: "Loaded Character Content" }),
        /* @__PURE__ */ A.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ A.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ A.jsx("h4", { children: "Current Content" }),
        /* @__PURE__ */ A.jsx(
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
}, ET = (t) => Object.entries(t.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, a) => {
  const s = parseInt(r[0].split("_")[2]), l = parseInt(a[0].split("_")[2]);
  return s - l;
}).map(([, r]) => ({ value: r.value, prompt: r.prompt })), CT = (t, r, a, s) => {
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
    let f = ET(l), p = !1;
    if (u.greetings_to_change?.length) {
      p = !0;
      for (const h of u.greetings_to_change)
        h.index > 0 && h.index <= f.length && (f[h.index - 1].value = h.value);
    }
    if (u.greetings_to_remove?.length) {
      p = !0;
      const h = new Set(u.greetings_to_remove.map((m) => m - 1));
      f = f.filter((m, y) => !h.has(y));
    }
    u.greetings_to_add?.length && (p = !0, f.push(...u.greetings_to_add.map((h) => ({ value: h, prompt: "" })))), p && (Object.keys(l.fields).forEach((h) => {
      h.startsWith("alternate_greetings_") && delete l.fields[h];
    }), f.forEach((h, m) => {
      const y = `alternate_greetings_${m + 1}`;
      l.fields[y] = {
        ...h,
        label: `Alternate Greeting ${m + 1}`
      };
    }));
  }
  return l;
}, wT = (t, r) => {
  const a = Object.fromEntries(
    Object.entries(t.fields).filter(([s]) => !s.startsWith("alternate_greetings_"))
  );
  return {
    ...t,
    fields: { ...a, ...r.fields },
    draftFields: { ...r.draftFields }
  };
}, w0 = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, ah = "placeholder-chatHistory", AT = ja({
  justification: kn().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: kn().describe("The new, full content for the character field.")
}), TT = ja({
  field: kn(),
  value: kn()
}), OT = ja({
  index: ju().int().positive(),
  value: kn()
});
ja({
  justification: kn(),
  fields_to_change: qn(TT).optional(),
  draft_fields_to_remove: qn(kn()).optional(),
  greetings_to_add: qn(kn()).optional(),
  greetings_to_remove: qn(ju().int().positive()).optional(),
  greetings_to_change: qn(OT).optional()
});
const NT = (t, r) => {
  const a = ja({
    index: ju().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: kn().describe("The new content for the alternate greeting.")
  }), s = {
    justification: kn().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: qn(kn()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: qn(ju().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: qn(a).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const l = ja({
      field: Kd(t).describe("The unique ID of the field to change (core or draft)."),
      value: kn().describe("The new content for the field.")
    });
    s.fields_to_change = qn(l).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = qn(Kd(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), ja(s);
}, sb = ({ originalContent: t, newContent: r }) => {
  const a = ee.useMemo(() => {
    const s = ab(t, r);
    let l = "", u = "";
    return s.forEach((f) => {
      const p = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), m = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      f.added || (l += m), f.removed || (u += m);
    }), { originalHtml: l, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: a.originalHtml } }),
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: a.newHtml } })
  ] });
}, DT = ({ before: t, after: r }) => {
  const a = ee.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(t.fields), ...Object.keys(r.fields)])).forEach((u) => {
      const f = t.fields[u], p = r.fields[u], h = f?.value ?? "", m = p?.value ?? "";
      h !== m && s.push({
        label: p?.label ?? f?.label ?? u,
        before: h,
        after: m
      });
    }), s;
  }, [t, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
    /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
    a.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: a.map(({ label: s, before: l, after: u }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ A.jsx("h4", { children: s }),
      /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Before" }),
        /* @__PURE__ */ A.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ A.jsx(sb, { originalContent: l, newContent: u })
    ] }, s)) })
  ] });
}, MT = ({ currentState: t, initialState: r }) => {
  const [a, s] = ee.useState(!1), { coreFields: l, alternateGreetings: u } = ee.useMemo(() => {
    const p = [], h = [];
    return Fn.forEach((m) => {
      t.fields[m] && p.push({ label: t.fields[m].label, value: t.fields[m].value });
    }), Object.entries(t.fields).filter(([m]) => m.startsWith("alternate_greetings_")).sort((m, y) => parseInt(m[0].split("_")[2]) - parseInt(y[0].split("_")[2])).forEach(([, m]) => h.push(m.value)), { coreFields: p, alternateGreetings: h };
  }, [t]), f = ee.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((m) => {
      const y = r.fields[m], _ = t.fields[m], b = y?.value ?? "", v = _?.value ?? "";
      b !== v && p.push({
        label: _?.label ?? y?.label ?? m,
        before: b,
        after: v
      });
    }), p;
  }, [r, t]);
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: a ? "Comparing with Original State" : "Current Character State" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: a, onChange: (p) => s(p.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: a ? /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: p, before: h, after: m }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ A.jsx("h4", { children: p }),
      /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Original" }),
        /* @__PURE__ */ A.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ A.jsx(sb, { originalContent: h, newContent: m })
    ] }, p)) }) : /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Core Fields" }),
      l.map(({ label: p, value: h }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: p }),
        /* @__PURE__ */ A.jsx("div", { className: "state-value", children: h || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, p)),
      u.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((p, h) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Greeting ",
            h + 1
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, h))
      ] })
    ] }) })
  ] });
}, ki = SillyTavern.getContext(), kT = ({ initialState: t, onSave: r, onClose: a }) => {
  const [s, l] = ee.useState(() => structuredClone(t)), u = (_, b, v) => {
    const d = structuredClone(s), S = v ? "draftFields" : "fields";
    d[S][_] && (d[S][_].value = b), l(d);
  }, f = (_, b) => {
    const v = structuredClone(s), d = `alternate_greetings_${_ + 1}`;
    v.fields[d] && (v.fields[d].value = b), l(v);
  }, { coreFields: p, alternateGreetings: h, draftFields: m } = ee.useMemo(() => {
    const _ = [], b = [], v = [];
    return Fn.forEach((d) => {
      s.fields[d] && _.push({ id: d, label: s.fields[d].label, value: s.fields[d].value });
    }), Object.entries(s.fields).filter(([d]) => d.startsWith("alternate_greetings_")).sort((d, S) => parseInt(d[0].split("_")[2]) - parseInt(S[0].split("_")[2])).forEach(([, d]) => b.push(d.value)), Object.entries(s.draftFields).forEach(([d, S]) => {
      v.push({ id: d, label: S.label, value: S.value });
    }), { coreFields: _, alternateGreetings: b, draftFields: v };
  }, [s]), y = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), a();
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs(ye, { onClick: y, children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ A.jsxs(ye, { onClick: a, className: "danger_button", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: _, label: b, value: v }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: b }),
        /* @__PURE__ */ A.jsx(Rn, { value: v, onChange: (d) => u(_, d.target.value, !1), rows: 4 })
      ] }, _)),
      m.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        m.map(({ id: _, label: b, value: v }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsx("label", { children: b }),
          /* @__PURE__ */ A.jsx(Rn, { value: v, onChange: (d) => u(_, d.target.value, !0), rows: 4 })
        ] }, _))
      ] }),
      h.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        h.map((_, b) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Greeting ",
            b + 1
          ] }),
          /* @__PURE__ */ A.jsx(Rn, { value: _, onChange: (v) => f(b, v.target.value), rows: 4 })
        ] }, b))
      ] })
    ] })
  ] });
}, RT = ({
  session: t,
  onBack: r,
  onApply: a,
  onSessionUpdate: s,
  initialState: l,
  chatContextOptions: u
}) => {
  const [f, p] = ee.useState(t.messages), [h, m] = ee.useState(""), [y, _] = ee.useState(!1), [b, v] = ee.useState(null), [d, S] = ee.useState(!1), [E, O] = ee.useState(!1), [w, D] = ee.useState(null), [x, T] = ee.useState(""), M = ee.useRef(null), k = ee.useRef(null);
  ee.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const U = ee.useCallback(
    (V, me, ge) => {
      if (JSON.stringify(ge) === JSON.stringify(me))
        return V;
      const it = Ot.getSettings().prompts.existingFieldDefinitions;
      if (!it) return V;
      const Re = { core: {}, alternate_greetings: {}, draft: {} }, P = {}, re = {};
      if ((/* @__PURE__ */ new Set([...Object.keys(ge.fields), ...Object.keys(me.fields)])).forEach((we) => {
        const $e = ge.fields[we]?.value ?? "", de = me.fields[we]?.value ?? "";
        if ($e !== de) {
          const le = me.fields[we];
          le && (P[we] = le, we.startsWith("alternate_greetings_") ? Re.alternate_greetings[le.label] = le.value : Fn.includes(we) && (Re.core[le.label] = le.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(ge.draftFields), ...Object.keys(me.draftFields)])).forEach((we) => {
        const $e = ge.draftFields[we]?.value ?? "", de = me.draftFields[we]?.value ?? "";
        if ($e !== de && me.draftFields[we]) {
          const le = me.draftFields[we];
          Re.draft[le.label] = le.value, re[we] = le;
        }
      }), Object.keys(Re.core).length === 0 && Object.keys(Re.alternate_greetings).length === 0 && Object.keys(Re.draft).length === 0)
        return V;
      const ze = {
        fields: Et(Re),
        fieldList: Et(Lu(P, re))
      }, Ce = co(it.content, ze, ki.substituteParams);
      if (Ce.trim()) {
        const we = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: Ce.trim(),
          isStateUpdate: !0
        };
        return [...V, we];
      }
      return V;
    },
    []
  ), Y = ee.useCallback(
    async (V, me, ge, Ye) => {
      const it = Ot.getSettings();
      if (!t.profileId) {
        _e("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), ge(), _(!0);
      try {
        const Re = [], P = ki.extensionSettings.connectionManager?.profiles?.find(
          (ze) => ze.id === t.profileId
        ), re = P?.api ? ki.CONNECT_API_MAP[P.api].selected : void 0;
        if (!re) {
          _e("warning", "No API selected for this session.");
          return;
        }
        for (const ze of V)
          if (ze.id === ah) {
            if (qt === void 0 && !Hn) continue;
            const Ce = await B0(re, u);
            Ce.warnings?.length && Ce.warnings.forEach((we) => _e("warning", we)), Re.push(...Ce.result);
          } else
            Re.push(ze);
        const ne = V.slice(0, V.length - (me ? 0 : 1)).reverse().find((ze) => ze.stateSnapshot)?.stateSnapshot ?? l, Ee = it.prompts.existingFieldDefinitions;
        if (Ee) {
          const ze = {
            fields: Et({
              core: Object.fromEntries(
                Object.entries(ne.fields).filter(([we]) => !we.startsWith("alternate_greetings_")).map(([, we]) => [we.label, we.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(ne.fields).filter(([we]) => we.startsWith("alternate_greetings_")).map(([, we]) => [we.label, we.value])
              ),
              draft: Object.fromEntries(Object.entries(ne.draftFields).map(([, we]) => [we.label, we.value]))
            }),
            fieldList: Et(Lu(ne.fields, ne.draftFields))
          }, Ce = co(Ee.content, ze, ki.substituteParams);
          if (Ce.trim()) {
            const we = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: Ce.trim()
            }, $e = Re.pop();
            Re.push(we), $e && Re.push($e);
          }
        }
        if (t.isReadonly) {
          Re.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const ze = await IA(
            t.profileId,
            Re,
            it.maxResponseToken,
            k.current.signal
          ), Ce = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: ze
          }, we = [...V, Ce];
          p(we), s({ ...t, messages: we });
        } else {
          const ze = t.type === "field" ? AT : (() => {
            const Ge = [...Object.keys(ne.fields), ...Object.keys(ne.draftFields)], Ae = Object.keys(ne.draftFields);
            return NT(Ge, Ae);
          })(), we = await UA(
            t.profileId,
            Re,
            ze,
            t.type === "field" ? w0.FIELD : w0.GLOBAL,
            t.promptEngineeringMode,
            it.maxResponseToken,
            k.current.signal
          ), $e = CT(ne, we, t.type, t.targetFieldId), de = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: we.justification,
            stateSnapshot: $e
          };
          let le = [...V, de];
          le = U(le, $e, ne), p(le), s({ ...t, messages: le });
        }
      } catch (Re) {
        Re.name === "AbortError" ? _e("info", "Request was cancelled.") : (console.error("Revise request failed:", Re), _e("error", `Request failed: ${J1(Re)}`)), Ye();
      } finally {
        _(!1), k.current = null;
      }
    },
    [t, s, l, u, U]
  ), B = ee.useCallback(async () => {
    if (!h.trim() || y) return;
    const V = { id: `msg-${Date.now()}`, role: "user", content: h.trim() }, me = f;
    Y(
      [...f, V],
      !1,
      () => {
        p([...f, V]), m("");
      },
      () => p(me)
    );
  }, [h, y, f, Y]), G = ee.useCallback(async () => {
    if (y || f.length === 0) return;
    const V = f;
    let me = [...f];
    const ge = f.findLastIndex((Ye) => !Ye.isStateUpdate);
    ge > -1 && f[ge].role === "assistant" && (me = f.slice(0, ge)), await Y(
      me,
      !0,
      () => p(me),
      () => p(V)
    );
  }, [y, f, Y]), $ = () => {
    const V = f.slice().reverse().find((me) => me.stateSnapshot)?.stateSnapshot ?? l;
    a(V), r();
  }, ue = (V) => {
    const me = f.findIndex((it) => it.id === V);
    if (me === -1 || !f[me].stateSnapshot) return;
    const ge = f[me].stateSnapshot;
    let Ye = l;
    for (let it = me - 1; it >= 0; it--)
      if (f[it].stateSnapshot) {
        Ye = f[it].stateSnapshot;
        break;
      }
    v({ before: Ye, after: ge });
  }, he = () => {
    S(!0);
  }, xe = (V) => {
    D(V.id), T(V.content);
  }, H = () => {
    D(null), T("");
  }, te = async () => {
    if (!w) return;
    const V = f.findIndex((P) => P.id === w);
    if (V === -1 || !await ki.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ge = f, Ye = f.slice(0, V), it = { ...f[V], content: x }, Re = [...Ye, it];
    H(), Y(
      Re,
      !1,
      () => p(Re),
      () => p(ge)
    );
  }, ce = async (V) => {
    const me = f.findIndex((P) => P.id === V);
    if (me === -1) return;
    const Ye = !!f[me].isInitial;
    if (!await ki.Popup.show.confirm(
      "Delete Message",
      Ye ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let Re;
    Ye ? Re = f.filter((P) => P.isInitial && P.id !== V) : Re = f.slice(0, me), p(Re), s({ ...t, messages: Re }), _e("info", "Message history has been updated.");
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
    let Ye = [...f, ge];
    Ye = U(Ye, V, me), p(Ye), s({ ...t, messages: Ye }), O(!1);
  }, Pe = () => {
    k.current?.abort();
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h2", { children: t.name }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "checkbox",
              checked: t.isReadonly ?? !1,
              onChange: (V) => s({ ...t, isReadonly: V.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ A.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ A.jsx(
          tb,
          {
            initialSelectedProfileId: t.profileId,
            onChange: (V) => s({ ...t, profileId: V?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ A.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: (V) => s({ ...t, promptEngineeringMode: V.target.value }),
            title: "Prompt Engineering Mode",
            disabled: t.isReadonly,
            style: { minWidth: "fit-content", width: "unset" },
            children: [
              /* @__PURE__ */ A.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ A.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ A.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(ye, { onClick: he, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ A.jsx(ye, { onClick: se, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ A.jsx(ye, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ A.jsxs(ye, { onClick: $, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-messages", children: [
      j.length > 0 && /* @__PURE__ */ A.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ A.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ A.jsx("div", { className: "initial-messages-content", children: j.map(
          (V) => w === V.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ A.jsx(Rn, { value: x, onChange: (me) => T(me.target.value), rows: 5 }),
            /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ A.jsxs(ye, { onClick: te, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ A.jsxs(ye, { onClick: H, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, V.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper initial-context ${V.role}`, children: [
            /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${V.role} initial`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: V.content }) }),
            !y && V.id !== ah && /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ A.jsxs(
                ye,
                {
                  className: "message-action-button",
                  onClick: () => xe(V),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ A.jsxs(
                ye,
                {
                  className: "message-action-button danger_button",
                  onClick: () => ce(V.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, V.id)
        ) })
      ] }),
      J.map(
        (V) => w === V.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ A.jsx(Rn, { value: x, onChange: (me) => T(me.target.value), rows: 3 }),
          /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ A.jsxs(ye, { onClick: te, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ A.jsxs(ye, { onClick: H, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, V.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper ${V.role}`, children: [
          /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
            V.role === "user" && !V.stateSnapshot && !y && /* @__PURE__ */ A.jsxs(
              ye,
              {
                className: "message-action-button",
                onClick: () => xe(V),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            V.stateSnapshot && !y && /* @__PURE__ */ A.jsxs(
              ye,
              {
                className: "message-action-button",
                onClick: () => ue(V.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !y && /* @__PURE__ */ A.jsxs(
              ye,
              {
                className: "message-action-button danger_button",
                onClick: () => ce(V.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${V.role}`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: V.content }) })
        ] }, V.id)
      ),
      J.length > 0 && !y && /* @__PURE__ */ A.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ A.jsxs(ye, { onClick: G, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      y && /* @__PURE__ */ A.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ A.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ A.jsx(ye, { onClick: Pe, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ A.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ A.jsx(
        Rn,
        {
          value: h,
          onChange: (V) => m(V.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: y || !!w,
          onKeyDown: (V) => {
            V.key === "Enter" && !V.shiftKey && (V.preventDefault(), B());
          }
        }
      ),
      /* @__PURE__ */ A.jsxs(ye, { onClick: B, disabled: y || !h.trim() || !!w, children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    b && /* @__PURE__ */ A.jsx(
      Ii,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(DT, { before: b.before, after: b.after }),
        onComplete: () => v(null),
        options: { wide: !0, large: !0 }
      }
    ),
    d && /* @__PURE__ */ A.jsx(
      Ii,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(MT, { currentState: ae, initialState: l }),
        onComplete: () => S(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    E && /* @__PURE__ */ A.jsx(
      Ii,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          kT,
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
function ob(t, r = {}) {
  const a = t?.entries;
  if (!a)
    return [];
  const s = Array.isArray(a) ? a : Object.values(a);
  return r.includeDisabled ? s : s.filter((l) => !l.disable);
}
async function jT(t, r, a, s, l) {
  const u = Ot.getSettings(), f = u.mainContextTemplatePresets[a];
  if (!f)
    throw new Error(`Main context template preset "${a}" not found.`);
  const p = [], m = {
    ...{
      user: Mn.name1 || "You",
      char: Et(t.fields.name?.value) || "Character",
      // Resolved up front like ST's {{persona}} macro, since renderPrompt keeps {{char}}/{{user}} literal.
      persona: Mn.substituteParams(Mn.powerUserSettings.persona_description ?? "")
    },
    fields: Et({
      core: Object.fromEntries(
        Object.entries(t.fields).filter(([v]) => !v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(t.fields).filter(([v]) => v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      draft: Object.fromEntries(Object.entries(t.draftFields).map(([, v]) => [v.label, v.value]))
    }),
    // Every field with its ID and label, see FieldListItem in field-list.ts
    fieldList: Et(Lu(t.fields, t.draftFields))
  };
  if (s.charCard) {
    const v = [];
    l.selectedCharacterIndexes.forEach((d) => {
      const S = Mn.characters[parseInt(d)];
      S && v.push(S);
    }), m.characters = Et(v);
  }
  if (s.worldInfo) {
    const v = {};
    await Promise.all(
      l.selectedWorldNames.map(async (d) => {
        const S = await Mn.loadWorldInfo(d);
        S && (v[d] = ob(S));
      })
    ), m.lorebooks = Et(v);
  }
  for (const v of f.prompts) {
    if (!v.enabled || v.promptName === "stDescription" && !s.stDescription || v.promptName === "charDefinitions" && !s.charCard || v.promptName === "lorebookDefinitions" && !s.worldInfo || v.promptName === "existingFieldDefinitions" && !s.existingFields || v.promptName === "personaDescription" && !s.persona || v.promptName === "chatHistory" && s.messages.type === "none" || qt === void 0 && !Hn && v.promptName === "chatHistory") continue;
    if (v.promptName === "chatHistory") {
      p.push({
        id: ah,
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
    const E = v.promptName === "stDescription" ? { ...m, char: "{{char}}", user: "{{user}}" } : m, O = co(S.content, E, Mn.substituteParams);
    O.trim() && p.push({
      id: `im-${p.length}`,
      role: v.role,
      content: O.trim(),
      isInitial: !0
    });
  }
  const y = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", _ = u.prompts.reviseTaskDescription.content, b = co(
    _,
    {
      ...m,
      isFieldSession: !!r,
      targetField: r,
      targetLabel: Et(y)
    },
    Mn.substituteParams
  );
  return p.push({
    id: `im-${p.length}`,
    role: "system",
    content: b,
    isInitial: !0
  }), p;
}
const lb = "charCreator", ub = "charCreator_reviseSessions", bo = () => SillyTavern.libs.localforage, zT = (t) => {
  if (!t)
    return { value: null, recovered: !1 };
  try {
    return { value: JSON.parse(t), recovered: !1 };
  } catch (r) {
    return { value: null, recovered: !0, error: r };
  }
}, cb = async (t, r, a) => {
  try {
    const s = await r.getItem(t);
    if (s !== null)
      return { value: s, migrated: !1, recovered: !1 };
    const l = zT(a.getItem(t));
    return l.value === null ? (l.recovered && a.removeItem(t), { value: null, migrated: !1, recovered: l.recovered, error: l.error }) : (await r.setItem(t, l.value), a.removeItem(t), { value: l.value, migrated: !0, recovered: l.recovered });
  } catch (s) {
    return { value: null, migrated: !1, recovered: !0, error: s };
  }
}, fb = async (t, r, a = bo()) => {
  try {
    return await a.setItem(t, r), { persisted: !0 };
  } catch (s) {
    return { persisted: !1, error: s };
  }
}, LT = (t = bo(), r = localStorage) => cb(lb, t, r), PT = (t, r = bo()) => fb(lb, t, r), IT = (t = bo(), r = localStorage) => cb(ub, t, r), BT = (t, r = bo()) => fb(ub, t, r), mu = SillyTavern.getContext(), UT = ({
  target: t,
  onClose: r,
  onApply: a,
  initialState: s,
  contextToSend: l,
  sessionForContext: u
}) => {
  const [f, p] = ee.useState([]), [h, m] = ee.useState(null), [y, _] = ee.useState(!0);
  ee.useEffect(() => {
    let D = !0;
    return IT().then(({ value: x, recovered: T }) => {
      D && (p(Array.isArray(x) ? x : []), T && _e("warning", "Some saved revise sessions were invalid and have been reset."));
    }).catch((x) => {
      console.error("Failed to load revise sessions:", x), _e("warning", "Saved revise sessions could not be loaded.");
    }).finally(() => {
      D && _(!1);
    }), () => {
      D = !1;
    };
  }, []);
  const b = ee.useMemo(() => f.filter((D) => D.type === t.type && (D.type === "global" || D.targetFieldId === t.fieldId)).sort((D, x) => new Date(x.createdAt).getTime() - new Date(D.createdAt).getTime()), [f, t]), v = (D) => {
    p(D), BT(D).then((x) => {
      x.persisted || (console.warn("Failed to save revise sessions:", x.error), _e("warning", "Revise session history could not be saved. Browser storage may be full."));
    });
  }, d = async () => {
    const x = `Session for ${t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global"} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`, T = await mu.Popup.show.input("New Session Name", "", x);
    if (T === null) return;
    const M = T.trim() || x;
    try {
      const k = Ot.getSettings();
      if (!k.profileId) {
        _e("warning", "Please select a connection profile in the main popup first.");
        return;
      }
      const U = {
        id: `rs-${Date.now()}`,
        name: M,
        type: t.type,
        targetFieldId: t.fieldId,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [],
        // Will be populated next
        context: {
          mainContextTemplatePreset: k.mainContextTemplatePreset
        },
        profileId: k.profileId,
        promptEngineeringMode: k.defaultPromptEngineeringMode,
        isReadonly: !1
      }, Y = await jT(
        s,
        U.targetFieldId,
        U.context.mainContextTemplatePreset,
        l,
        u
      );
      U.messages = Y, m(U);
    } catch (k) {
      console.error("Failed to create session:", k), _e("error", `Failed to create session: ${k.message}`);
    }
  }, S = (D) => {
    m(D);
  }, E = async (D) => {
    if (await mu.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const T = f.filter((M) => M.id !== D);
      v(T);
    }
  }, O = (D) => {
    const x = f.findIndex((M) => M.id === D.id), T = [...f];
    x !== -1 ? T[x] = D : T.push(D), v(T), m(D);
  };
  if (h) {
    const D = mu.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === h.profileId
    ), x = {
      targetCharacterId: qt,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Hn,
      presetName: D?.preset,
      contextName: D?.context,
      instructName: D?.instruct
    }, T = l.messages;
    switch (T.type) {
      case "none":
        x.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        x.messageIndexesBetween = { start: 0, end: T.first ?? 10 };
        break;
      case "last":
        const M = mu.chat?.length ?? 0, k = T.last ?? 10;
        x.messageIndexesBetween = {
          end: Math.max(0, M - 1),
          start: Math.max(0, M - k)
        };
        break;
      case "range":
        x.messageIndexesBetween = {
          start: T.range?.start ?? 0,
          end: T.range?.end ?? 10
        };
        break;
    }
    return qt === void 0 && !Hn && (x.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ A.jsx(
      RT,
      {
        session: h,
        onBack: () => m(null),
        onApply: a,
        onSessionUpdate: O,
        initialState: s,
        chatContextOptions: x
      }
    );
  }
  const w = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global";
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ A.jsx("div", { className: "popup_header", children: /* @__PURE__ */ A.jsxs("h2", { children: [
      'Revise Sessions for "',
      w,
      '"'
    ] }) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-list", children: y ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : b.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : b.map((D) => /* @__PURE__ */ A.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "session-info", onClick: () => S(D), children: [
        /* @__PURE__ */ A.jsx("span", { className: "session-name", children: D.name }),
        /* @__PURE__ */ A.jsx("span", { className: "session-date", children: new Date(D.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ A.jsx(ye, { className: "danger_button", onClick: () => E(D.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, D.id)) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-actions", children: /* @__PURE__ */ A.jsxs(ye, { onClick: d, className: "menu_button", children: [
      /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
};
function HT(t, r) {
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
function qT(t, r, a) {
  return za.compile(t, { noEscape: !0 })({
    character: HT(r, a),
    // The entry describes this card, so {{char}} is its name. {{user}} is left for ST to resolve when the entry is used.
    char: r.name?.value || "{{char}}",
    user: "{{user}}"
  });
}
function FT(t, r = []) {
  const a = new Set(t), s = r.filter((l) => l && !a.has(l));
  return [
    ...t.map((l) => ({ value: l, label: l })),
    ...s.map((l) => ({ value: l, label: `${l} (missing)` }))
  ];
}
const Nn = SillyTavern.getContext(), Rd = () => ({
  selectedCharacterIndexes: qt ? [String(qt)] : [],
  selectedWorldNames: [],
  fields: Fn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: Sr[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), ZT = {
  name: { label: Sr.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Sr.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Sr.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Sr.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Sr.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Sr.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, GT = () => {
  const t = nb(), r = Ot.getSettings(), [a, s] = ee.useState(Rd()), [l, u] = ee.useState([]), [f, p] = ee.useState(!0), [h, m] = ee.useState("core"), [y, _] = ee.useState([]), [b, v] = ee.useState([]), [d, S] = ee.useState(null), [E, O] = ee.useState(null), [w, D] = ee.useState(!1), [x, T] = ee.useState(null);
  ee.useEffect(() => {
    (async () => {
      p(!0), _(Nn.characters), v(mv);
      const re = (await LT()).value ?? {}, ne = Rd();
      if (re.fields && (ne.fields = { ...ne.fields, ...re.fields }), re.draftFields && (ne.draftFields = re.draftFields), re.selectedCharacterIndexes && (ne.selectedCharacterIndexes = re.selectedCharacterIndexes), re.selectedWorldNames && (ne.selectedWorldNames = re.selectedWorldNames), re.lastLoadedCharacterId) {
        ne.lastLoadedCharacterId = re.lastLoadedCharacterId;
        const Ee = Nn.characters.find((ze) => ze.avatar === re.lastLoadedCharacterId);
        Ee && S(Ee);
      }
      s(ne), p(!1);
    })();
  }, []), ee.useEffect(() => {
    f || PT(a).then((P) => {
      P.persisted || (console.warn("Failed to save Character Creator session:", P.error), _e("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [a, f]);
  const M = (P, re) => {
    Ot.getSettings()[P] = re, Ot.saveSettings(), t();
  }, k = (P, re) => {
    Ot.getSettings().contextToSend[P] = re, Ot.saveSettings(), t();
  }, U = ee.useCallback(
    (P, re, ne, Ee) => {
      s((ze) => {
        const Ce = Ee ? "draftFields" : "fields", we = { ...ze[Ce] };
        return we[P] || (we[P] = { value: "", prompt: "", label: P }), we[P][ne] = re, { ...ze, [Ce]: we };
      });
    },
    []
  ), Y = ee.useMemo(
    () => Object.keys(a.fields).filter((P) => P.startsWith("alternate_greetings_")).sort((P, re) => parseInt(P.split("_")[2]) - parseInt(re.split("_")[2])).map((P) => a.fields[P]),
    [a.fields]
  ), B = ee.useCallback((P) => {
    s((re) => {
      const ne = { ...re.fields };
      return Object.keys(ne).forEach((Ee) => {
        Ee.startsWith("alternate_greetings_") && delete ne[Ee];
      }), P.forEach((Ee, ze) => {
        const Ce = `alternate_greetings_${ze + 1}`;
        ne[Ce] = { ...Ee, label: `Alternate Greeting ${ze + 1}` };
      }), { ...re, fields: ne };
    });
  }, []), G = ee.useCallback(
    (P, re) => {
      U(P, "", "value", re);
    },
    [U]
  ), $ = ee.useCallback(
    async (P) => {
      await Nn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${a.draftFields[P].label}"?`
      ) && s((ne) => {
        const Ee = { ...ne.draftFields };
        return delete Ee[P], { ...ne, draftFields: Ee };
      });
    },
    [a.draftFields]
  ), ue = ee.useCallback(async () => {
    const P = await Nn.Popup.show.input("Enter Draft Field Name", "");
    if (!P?.trim()) return;
    const re = eh(P.trim());
    if (!re) return _e("error", "Invalid field name.");
    if (a.draftFields[re] || Fn.includes(re))
      return _e("warning", "Field name already exists.");
    s((ne) => ({
      ...ne,
      draftFields: { ...ne.draftFields, [re]: { value: "", prompt: "", label: P } }
    })), m("draft");
  }, [a.draftFields]), he = (P) => {
    T({ type: "field", fieldId: P }), D(!0);
  }, xe = () => {
    T({ type: "global" }), D(!0);
  }, H = (P) => {
    s((re) => wT(re, P)), _e("success", "Changes from revise session applied."), D(!1);
  }, te = ee.useCallback(
    async (P, re) => {
      if (!r.profileId) return _e("warning", "Please select a connection profile.");
      u((ne) => [...ne, P]);
      try {
        const ne = Nn.extensionSettings.connectionManager?.profiles?.find(
          (Ae) => Ae.id === r.profileId
        );
        if (!ne) throw new Error("Connection profile not found.");
        const Ee = {
          presetName: ne?.preset,
          contextName: ne?.context,
          instructName: ne?.instruct,
          targetCharacterId: qt,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Hn
        }, ze = r.contextToSend.messages;
        switch (ze.type) {
          case "none":
            Ee.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            Ee.messageIndexesBetween = { start: 0, end: ze.first ?? 10 };
            break;
          case "last":
            const Ae = Nn.chat?.length ?? 0, Fe = ze.last ?? 10;
            Ee.messageIndexesBetween = {
              end: Math.max(0, Ae - 1),
              start: Math.max(0, Ae - Fe)
            };
            break;
          case "range":
            Ee.messageIndexesBetween = {
              start: ze.range?.start ?? 0,
              end: ze.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        const Ce = ze.type !== "none" && (qt !== void 0 || !!Hn), we = {};
        r.contextToSend.worldInfo && await Promise.all(
          a.selectedWorldNames.filter((Ae) => mv.includes(Ae)).map(async (Ae) => {
            const Fe = await Nn.loadWorldInfo(Ae);
            Fe && (we[Ae] = ob(Fe, { includeDisabled: !0 }));
          })
        );
        const $e = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete $e.stDescription, (!r.contextToSend.charCard || a.selectedCharacterIndexes.length === 0) && delete $e.charDefinitions, (!r.contextToSend.worldInfo || a.selectedWorldNames.length === 0) && delete $e.lorebookDefinitions, r.contextToSend.existingFields || delete $e.existingFieldDefinitions, r.contextToSend.persona || delete $e.personaDescription, delete $e.worldInfoCharDefinition;
        const de = await ZA({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: Ee,
          continueFrom: re,
          session: a,
          allCharacters: y,
          entriesGroupByWorldName: we,
          promptSettings: $e,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`].content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (Ae) => Ae.enabled && (Ce || Ae.promptName !== "chatHistory")
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: P,
          outputFormat: r.outputFormat
        }), le = P.startsWith("alternate_greetings_"), Ge = !le && !Fn.includes(P);
        if (le) {
          const Ae = parseInt(P.split("_")[2]) - 1, Fe = [...Y];
          Fe[Ae] && (Fe[Ae].value = de), B(Fe);
        } else
          U(P, de, "value", Ge);
      } catch (ne) {
        console.error(ne), _e("error", J1(ne));
      } finally {
        u((ne) => ne.filter((Ee) => Ee !== P));
      }
    },
    [a, r, y, Y, U, B]
  ), ce = ee.useCallback(async () => {
    await Nn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(Rd()), S(null));
  }, []), je = ee.useCallback(
    (P) => {
      if (!d) return _e("warning", "Please load a character to compare against.");
      let re, ne, Ee;
      typeof P == "number" ? (re = Y[P]?.value ?? "", ne = d.data?.alternate_greetings?.[P] ?? "", Ee = `Alternate Greeting ${P + 1}`) : (re = a.fields[P]?.value ?? "", ne = d[P] ?? d.data?.[P] ?? "", Ee = Sr[P]), O({ original: ne, current: re, fieldName: Ee });
    },
    [d, a.fields, Y]
  ), j = ee.useCallback(
    async (P) => {
      const re = y[parseInt(P)];
      if (!re || Fn.some((Ce) => a.fields[Ce].value.trim() !== "") && !await Nn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const Ee = { ...a.fields };
      Fn.forEach((Ce) => {
        Ee[Ce] = { value: re[Ce] ?? re.data?.[Ce] ?? "", prompt: "", label: Sr[Ce] };
      });
      const ze = (re.data?.alternate_greetings ?? []).map((Ce) => ({ value: Ce, prompt: "" }));
      S(re), s((Ce) => ({ ...Ce, fields: Ee, lastLoadedCharacterId: re.avatar })), B(ze);
    },
    [y, a.fields, B]
  ), J = ee.useCallback(async () => {
    if (Hn) {
      _e("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (qt === void 0) {
      _e("warning", "No character chat is currently open.");
      return;
    }
    await j(String(qt));
  }, [j]), ae = () => Y.map((P) => P.value).filter((P) => P.trim() !== ""), se = async () => {
    if (!a.fields.name.value) return _e("warning", "Please provide a character name.");
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
      await aS(re, !0);
    } catch (ne) {
      _e("error", `Failed to create character: ${ne.message}`);
    }
  }, oe = async () => {
    if (!d) return _e("warning", "Please load a character to override.");
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
      await iS(re, !0), _e("success", `Character "${re.name}" updated!`);
    } catch (ne) {
      _e("error", `Failed to override character: ${ne.message}`);
    }
  }, Pe = () => {
    const P = JSON.stringify({ draftFields: a.draftFields, version: wh }, null, 2), re = new Blob([P], { type: "application/json" }), ne = document.createElement("a");
    ne.href = URL.createObjectURL(re), ne.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, ne.click(), URL.revokeObjectURL(ne.href);
  }, V = () => {
    const P = document.createElement("input");
    P.type = "file", P.accept = ".json", P.onchange = async () => {
      const re = P.files?.[0];
      if (re)
        try {
          const ne = await re.text(), Ee = JSON.parse(ne);
          if (!Ee.draftFields) throw new Error("Invalid file format.");
          (Object.keys(a.draftFields).length > 0 ? await Nn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((Ce) => ({ ...Ce, draftFields: Ee.draftFields })), _e("success", "Draft fields imported."));
        } catch (ne) {
          _e("error", `Import failed: ${ne.message}`);
        }
    }, P.click();
  }, me = ee.useMemo(
    () => y.map((P, re) => ({ value: String(re), label: P.name })),
    [y]
  ), ge = ee.useMemo(
    () => b.map((P) => ({ value: P, label: P })),
    [b]
  ), Ye = ee.useMemo(
    () => FT(b, a.selectedWorldNames),
    [b, a.selectedWorldNames]
  ), it = ee.useMemo(
    () => Object.keys(r.promptPresets).map((P) => ({ value: P, label: P })),
    [r.promptPresets]
  ), Re = ee.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((P) => ({ value: P, label: P })),
    [r.mainContextTemplatePresets]
  );
  return f ? /* @__PURE__ */ A.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ A.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ A.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ A.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ A.jsx(
            tb,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (P) => M("profileId", P?.id ?? "")
            }
          )
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Context to Send" }),
          /* @__PURE__ */ A.jsxs("div", { className: "context-options", children: [
            /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ A.jsx(
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
            /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ A.jsx(
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
            (qt !== void 0 || Hn) && /* @__PURE__ */ A.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ A.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ A.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (P) => k("messages", {
                    ...r.contextToSend.messages,
                    type: P.target.value
                  }),
                  children: [
                    /* @__PURE__ */ A.jsx("option", { value: "none", children: "None" }),
                    /* @__PURE__ */ A.jsx("option", { value: "all", children: "All Messages" }),
                    /* @__PURE__ */ A.jsx("option", { value: "first", children: "First X Messages" }),
                    /* @__PURE__ */ A.jsx("option", { value: "last", children: "Last X Messages" }),
                    /* @__PURE__ */ A.jsx("option", { value: "range", children: "Range" })
                  ]
                }
              ),
              r.contextToSend.messages.type === "first" && /* @__PURE__ */ A.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsxs("label", { children: [
                "First",
                " ",
                /* @__PURE__ */ A.jsx(
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
              r.contextToSend.messages.type === "last" && /* @__PURE__ */ A.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsxs("label", { children: [
                "Last",
                " ",
                /* @__PURE__ */ A.jsx(
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
              r.contextToSend.messages.type === "range" && /* @__PURE__ */ A.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsxs("label", { children: [
                "Range:",
                " ",
                /* @__PURE__ */ A.jsx(
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
                /* @__PURE__ */ A.jsx(
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
            /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ A.jsx(
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
            r.contextToSend.charCard && /* @__PURE__ */ A.jsx(
              hu,
              {
                items: me,
                value: a.selectedCharacterIndexes,
                onChange: (P) => s((re) => ({ ...re, selectedCharacterIndexes: P })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ A.jsx(
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
            r.contextToSend.worldInfo && /* @__PURE__ */ A.jsx(
              hu,
              {
                items: Ye,
                value: a.selectedWorldNames,
                onChange: (P) => s((re) => ({ ...re, selectedWorldNames: P })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ A.jsx(
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
            /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ A.jsx(
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
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Generation Options" }),
          /* @__PURE__ */ A.jsxs("label", { title: "You can edit in extension settings", children: [
            "Main Context Template",
            /* @__PURE__ */ A.jsx(
              Iu,
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
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Max Context Tokens",
            /* @__PURE__ */ A.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.maxContextType,
                onChange: (P) => M("maxContextType", P.target.value),
                children: [
                  /* @__PURE__ */ A.jsx("option", { value: "profile", children: "Use profile preset" }),
                  /* @__PURE__ */ A.jsx("option", { value: "sampler", children: "Use active preset" }),
                  /* @__PURE__ */ A.jsx("option", { value: "custom", children: "Custom" })
                ]
              }
            )
          ] }),
          r.maxContextType === "custom" && /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "number",
              className: "text_pole",
              value: r.maxContextValue,
              onChange: (P) => M("maxContextValue", parseInt(P.target.value) || 16384)
            }
          ),
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Max Response Tokens",
            /* @__PURE__ */ A.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                value: r.maxResponseToken,
                onChange: (P) => M("maxResponseToken", parseInt(P.target.value) || 1024)
              }
            )
          ] }),
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Output Format",
            /* @__PURE__ */ A.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.outputFormat,
                onChange: (P) => M("outputFormat", P.target.value),
                children: [
                  /* @__PURE__ */ A.jsx("option", { value: "none", children: "Plain Text" }),
                  /* @__PURE__ */ A.jsx("option", { value: "xml", children: "XML" }),
                  /* @__PURE__ */ A.jsx("option", { value: "json", children: "JSON" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Additional Instructions" }),
          /* @__PURE__ */ A.jsx(
            Iu,
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
          /* @__PURE__ */ A.jsx(
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
      /* @__PURE__ */ A.jsxs("div", { className: "wide-column", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "character-field-actions", children: [
          /* @__PURE__ */ A.jsx(
            ye,
            {
              onClick: xe,
              title: "Open global revision sessions to edit multiple fields at once",
              children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" })
            }
          ),
          /* @__PURE__ */ A.jsx(ye, { onClick: se, children: "Save as New" }),
          /* @__PURE__ */ A.jsx(ye, { onClick: oe, disabled: !d, children: "Override Char" }),
          r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ A.jsx(
            hu,
            {
              items: ge,
              placeholder: "Save as WI Entry",
              closeOnSelect: !0,
              value: [],
              onChange: (P) => {
              },
              onBeforeSelection: async (P, re) => {
                if (!a.fields.name.value)
                  return _e("warning", "Please enter a name first."), !1;
                const ne = re[0], Ee = qT(
                  r.prompts.worldInfoCharDefinition.content,
                  a.fields,
                  Y
                ), ze = {
                  uid: -1,
                  key: [a.fields.name.value],
                  content: Ee,
                  comment: a.fields.name.value,
                  disable: !1,
                  keysecondary: []
                };
                try {
                  await jx({ entry: ze, selectedWorldName: ne, operation: "add" }), _e("success", `Entry added to ${ne}.`);
                } catch (Ce) {
                  _e("error", `Failed to add WI Entry: ${Ce.message}`);
                }
                return !1;
              }
            }
          ),
          /* @__PURE__ */ A.jsxs(ye, { onClick: ce, children: [
            /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-left", style: { marginRight: "10px" } }),
            "Reset Fields"
          ] }),
          /* @__PURE__ */ A.jsx(
            ye,
            {
              onClick: J,
              title: "Load the character from the currently open chat",
              disabled: !!Hn || qt === void 0,
              children: "Current Char"
            }
          ),
          /* @__PURE__ */ A.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ A.jsx(
            hu,
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
        /* @__PURE__ */ A.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ A.jsx(
            ye,
            {
              onClick: () => m("core"),
              className: `menu_button tab-button ${h === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ A.jsx(
            ye,
            {
              onClick: () => m("draft"),
              className: `menu_button tab-button ${h === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ A.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
            /* @__PURE__ */ A.jsxs(ye, { onClick: ue, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ A.jsx(ye, { onClick: Pe, children: "Export" }),
            /* @__PURE__ */ A.jsx(ye, { onClick: V, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-content-area", children: [
          h === "core" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Core Character Fields" }),
            Fn.map((P) => {
              const re = ZT[P];
              return re ? /* @__PURE__ */ A.jsx(
                _0,
                {
                  fieldId: P,
                  label: re.label,
                  value: a.fields[P]?.value ?? "",
                  prompt: a.fields[P]?.prompt ?? "",
                  large: re.large,
                  rows: re.rows,
                  promptEnabled: re.promptEnabled,
                  isGenerating: l.includes(P),
                  onValueChange: (ne, Ee) => U(ne, Ee, "value", !1),
                  onPromptChange: (ne, Ee) => U(ne, Ee, "prompt", !1),
                  onGenerate: te,
                  onContinue: (ne) => te(ne, a.fields[ne].value),
                  onClear: (ne) => G(ne, !1),
                  onCompare: je,
                  onOpenReviseSessions: he
                },
                P
              ) : null;
            }),
            /* @__PURE__ */ A.jsx(
              aT,
              {
                greetings: Y,
                onGreetingsChange: B,
                isGenerating: l.some((P) => P.startsWith("alternate_greetings_")),
                onGenerate: (P) => te(`alternate_greetings_${P + 1}`),
                onContinue: (P) => te(`alternate_greetings_${P + 1}`, Y[P].value),
                onCompare: je
              }
            )
          ] }),
          h === "draft" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Draft Fields" }),
            Object.entries(a.draftFields).map(([P, re]) => /* @__PURE__ */ A.jsx(
              _0,
              {
                fieldId: P,
                label: re.label,
                value: re.value,
                prompt: re.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: l.includes(P),
                onValueChange: (ne, Ee) => U(ne, Ee, "value", !0),
                onPromptChange: (ne, Ee) => U(ne, Ee, "prompt", !0),
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
    E && /* @__PURE__ */ A.jsx(
      Ii,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          xT,
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
    w && x && /* @__PURE__ */ A.jsx(
      Ii,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          UT,
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
}, VT = () => {
  const [t, r] = ee.useState(!1), a = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = a, t ? /* @__PURE__ */ A.jsx(
    Ii,
    {
      content: /* @__PURE__ */ A.jsx(GT, {}),
      type: vn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, db = SillyTavern.getContext();
async function YT() {
  const t = await db.renderExtensionTemplateAsync(
    `third-party/${ka}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", t);
  const r = document.createElement("div"), a = document.querySelector(".charCreator_settings .inline-drawer-content");
  a && (a.prepend(r), Nv.createRoot(r).render(
    /* @__PURE__ */ A.jsx(xu.StrictMode, { children: /* @__PURE__ */ A.jsx(nT, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', l = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), Nv.createRoot(u).render(
    /* @__PURE__ */ A.jsx(xu.StrictMode, { children: /* @__PURE__ */ A.jsx(VT, {}) })
  ), l.forEach((p) => {
    if (!p) return;
    const h = document.createElement("div");
    h.innerHTML = s.trim();
    const m = h.firstChild;
    m && (p.prepend(m), m.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function XT() {
  return !!db.ConnectionManagerRequestService;
}
XT() ? $A().then(() => {
  YT();
}) : _e("error", `[${ka}] Make sure ST is updated.`);
export {
  YT as init
};
