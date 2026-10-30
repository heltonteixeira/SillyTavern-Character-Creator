import "../../../../power-user.js";
import { this_chid as or, name1 as Ug } from "../../../../../script.js";
import { createWorldInfoEntry as F_, world_names as Pg } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import "../../../../instruct-mode.js";
import "../../../../chats.js";
import "../../../../openai.js";
import "../../../../authors-note.js";
import { selected_group as ma } from "../../../../group-chats.js";
import { getRegexedString as V_, regex_placement as Ig } from "../../../regex/engine.js";
import { removeFromArray as Hg, runAfterAnimation as Y_ } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as si, fixToastrForDialogs as zf } from "../../../../popup.js";
import qg from "../../../../../lib/dialog-polyfill.esm.js";
function Gy(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Lf = { exports: {} }, Ss = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zg;
function X_() {
  if (Zg) return Ss;
  Zg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(s, o, c) {
    var h = null;
    if (c !== void 0 && (h = "" + c), o.key !== void 0 && (h = "" + o.key), "key" in o) {
      c = {};
      for (var m in o)
        m !== "key" && (c[m] = o[m]);
    } else c = o;
    return o = c.ref, {
      $$typeof: n,
      type: s,
      key: h,
      ref: o !== void 0 ? o : null,
      props: c
    };
  }
  return Ss.Fragment = r, Ss.jsx = i, Ss.jsxs = i, Ss;
}
var Gg;
function Q_() {
  return Gg || (Gg = 1, Lf.exports = X_()), Lf.exports;
}
var A = Q_(), Bf = { exports: {} }, Ne = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fg;
function $_() {
  if (Fg) return Ne;
  Fg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), b = Symbol.iterator;
  function y(k) {
    return k === null || typeof k != "object" ? null : (k = b && k[b] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var p = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, f = Object.assign, S = {};
  function x(k, j, F) {
    this.props = k, this.context = j, this.refs = S, this.updater = F || p;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(k, j) {
    if (typeof k != "object" && typeof k != "function" && k != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, k, j, "setState");
  }, x.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function T() {
  }
  T.prototype = x.prototype;
  function w(k, j, F) {
    this.props = k, this.context = j, this.refs = S, this.updater = F || p;
  }
  var N = w.prototype = new T();
  N.constructor = w, f(N, x.prototype), N.isPureReactComponent = !0;
  var C = Array.isArray, O = { H: null, A: null, T: null, S: null, V: null }, z = Object.prototype.hasOwnProperty;
  function R(k, j, F, V, le, pe) {
    return F = pe.ref, {
      $$typeof: n,
      type: k,
      key: j,
      ref: F !== void 0 ? F : null,
      props: pe
    };
  }
  function Z(k, j) {
    return R(
      k.type,
      j,
      void 0,
      void 0,
      void 0,
      k.props
    );
  }
  function te(k) {
    return typeof k == "object" && k !== null && k.$$typeof === n;
  }
  function $(k) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(F) {
      return j[F];
    });
  }
  var Q = /\/+/g;
  function ee(k, j) {
    return typeof k == "object" && k !== null && k.key != null ? $("" + k.key) : j.toString(36);
  }
  function fe() {
  }
  function de(k) {
    switch (k.status) {
      case "fulfilled":
        return k.value;
      case "rejected":
        throw k.reason;
      default:
        switch (typeof k.status == "string" ? k.then(fe, fe) : (k.status = "pending", k.then(
          function(j) {
            k.status === "pending" && (k.status = "fulfilled", k.value = j);
          },
          function(j) {
            k.status === "pending" && (k.status = "rejected", k.reason = j);
          }
        )), k.status) {
          case "fulfilled":
            return k.value;
          case "rejected":
            throw k.reason;
        }
    }
    throw k;
  }
  function be(k, j, F, V, le) {
    var pe = typeof k;
    (pe === "undefined" || pe === "boolean") && (k = null);
    var Y = !1;
    if (k === null) Y = !0;
    else
      switch (pe) {
        case "bigint":
        case "string":
        case "number":
          Y = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case n:
            case r:
              Y = !0;
              break;
            case _:
              return Y = k._init, be(
                Y(k._payload),
                j,
                F,
                V,
                le
              );
          }
      }
    if (Y)
      return le = le(k), Y = V === "" ? "." + ee(k, 0) : V, C(le) ? (F = "", Y != null && (F = Y.replace(Q, "$&/") + "/"), be(le, j, F, "", function(Ze) {
        return Ze;
      })) : le != null && (te(le) && (le = Z(
        le,
        F + (le.key == null || k && k.key === le.key ? "" : ("" + le.key).replace(
          Q,
          "$&/"
        ) + "/") + Y
      )), j.push(le)), 1;
    Y = 0;
    var me = V === "" ? "." : V + ":";
    if (C(k))
      for (var we = 0; we < k.length; we++)
        V = k[we], pe = me + ee(V, we), Y += be(
          V,
          j,
          F,
          pe,
          le
        );
    else if (we = y(k), typeof we == "function")
      for (k = we.call(k), we = 0; !(V = k.next()).done; )
        V = V.value, pe = me + ee(V, we++), Y += be(
          V,
          j,
          F,
          pe,
          le
        );
    else if (pe === "object") {
      if (typeof k.then == "function")
        return be(
          de(k),
          j,
          F,
          V,
          le
        );
      throw j = String(k), Error(
        "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Y;
  }
  function H(k, j, F) {
    if (k == null) return k;
    var V = [], le = 0;
    return be(k, V, "", "", function(pe) {
      return j.call(F, pe, le++);
    }), V;
  }
  function re(k) {
    if (k._status === -1) {
      var j = k._result;
      j = j(), j.then(
        function(F) {
          (k._status === 0 || k._status === -1) && (k._status = 1, k._result = F);
        },
        function(F) {
          (k._status === 0 || k._status === -1) && (k._status = 2, k._result = F);
        }
      ), k._status === -1 && (k._status = 0, k._result = j);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ue = typeof reportError == "function" ? reportError : function(k) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var j = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof k == "object" && k !== null && typeof k.message == "string" ? String(k.message) : String(k),
        error: k
      });
      if (!window.dispatchEvent(j)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", k);
      return;
    }
    console.error(k);
  };
  function ke() {
  }
  return Ne.Children = {
    map: H,
    forEach: function(k, j, F) {
      H(
        k,
        function() {
          j.apply(this, arguments);
        },
        F
      );
    },
    count: function(k) {
      var j = 0;
      return H(k, function() {
        j++;
      }), j;
    },
    toArray: function(k) {
      return H(k, function(j) {
        return j;
      }) || [];
    },
    only: function(k) {
      if (!te(k))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return k;
    }
  }, Ne.Component = x, Ne.Fragment = i, Ne.Profiler = o, Ne.PureComponent = w, Ne.StrictMode = s, Ne.Suspense = g, Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O, Ne.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(k) {
      return O.H.useMemoCache(k);
    }
  }, Ne.cache = function(k) {
    return function() {
      return k.apply(null, arguments);
    };
  }, Ne.cloneElement = function(k, j, F) {
    if (k == null)
      throw Error(
        "The argument must be a React element, but you passed " + k + "."
      );
    var V = f({}, k.props), le = k.key, pe = void 0;
    if (j != null)
      for (Y in j.ref !== void 0 && (pe = void 0), j.key !== void 0 && (le = "" + j.key), j)
        !z.call(j, Y) || Y === "key" || Y === "__self" || Y === "__source" || Y === "ref" && j.ref === void 0 || (V[Y] = j[Y]);
    var Y = arguments.length - 2;
    if (Y === 1) V.children = F;
    else if (1 < Y) {
      for (var me = Array(Y), we = 0; we < Y; we++)
        me[we] = arguments[we + 2];
      V.children = me;
    }
    return R(k.type, le, void 0, void 0, pe, V);
  }, Ne.createContext = function(k) {
    return k = {
      $$typeof: h,
      _currentValue: k,
      _currentValue2: k,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, k.Provider = k, k.Consumer = {
      $$typeof: c,
      _context: k
    }, k;
  }, Ne.createElement = function(k, j, F) {
    var V, le = {}, pe = null;
    if (j != null)
      for (V in j.key !== void 0 && (pe = "" + j.key), j)
        z.call(j, V) && V !== "key" && V !== "__self" && V !== "__source" && (le[V] = j[V]);
    var Y = arguments.length - 2;
    if (Y === 1) le.children = F;
    else if (1 < Y) {
      for (var me = Array(Y), we = 0; we < Y; we++)
        me[we] = arguments[we + 2];
      le.children = me;
    }
    if (k && k.defaultProps)
      for (V in Y = k.defaultProps, Y)
        le[V] === void 0 && (le[V] = Y[V]);
    return R(k, pe, void 0, void 0, null, le);
  }, Ne.createRef = function() {
    return { current: null };
  }, Ne.forwardRef = function(k) {
    return { $$typeof: m, render: k };
  }, Ne.isValidElement = te, Ne.lazy = function(k) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: k },
      _init: re
    };
  }, Ne.memo = function(k, j) {
    return {
      $$typeof: v,
      type: k,
      compare: j === void 0 ? null : j
    };
  }, Ne.startTransition = function(k) {
    var j = O.T, F = {};
    O.T = F;
    try {
      var V = k(), le = O.S;
      le !== null && le(F, V), typeof V == "object" && V !== null && typeof V.then == "function" && V.then(ke, ue);
    } catch (pe) {
      ue(pe);
    } finally {
      O.T = j;
    }
  }, Ne.unstable_useCacheRefresh = function() {
    return O.H.useCacheRefresh();
  }, Ne.use = function(k) {
    return O.H.use(k);
  }, Ne.useActionState = function(k, j, F) {
    return O.H.useActionState(k, j, F);
  }, Ne.useCallback = function(k, j) {
    return O.H.useCallback(k, j);
  }, Ne.useContext = function(k) {
    return O.H.useContext(k);
  }, Ne.useDebugValue = function() {
  }, Ne.useDeferredValue = function(k, j) {
    return O.H.useDeferredValue(k, j);
  }, Ne.useEffect = function(k, j, F) {
    var V = O.H;
    if (typeof F == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return V.useEffect(k, j);
  }, Ne.useId = function() {
    return O.H.useId();
  }, Ne.useImperativeHandle = function(k, j, F) {
    return O.H.useImperativeHandle(k, j, F);
  }, Ne.useInsertionEffect = function(k, j) {
    return O.H.useInsertionEffect(k, j);
  }, Ne.useLayoutEffect = function(k, j) {
    return O.H.useLayoutEffect(k, j);
  }, Ne.useMemo = function(k, j) {
    return O.H.useMemo(k, j);
  }, Ne.useOptimistic = function(k, j) {
    return O.H.useOptimistic(k, j);
  }, Ne.useReducer = function(k, j, F) {
    return O.H.useReducer(k, j, F);
  }, Ne.useRef = function(k) {
    return O.H.useRef(k);
  }, Ne.useState = function(k) {
    return O.H.useState(k);
  }, Ne.useSyncExternalStore = function(k, j, F) {
    return O.H.useSyncExternalStore(
      k,
      j,
      F
    );
  }, Ne.useTransition = function() {
    return O.H.useTransition();
  }, Ne.version = "19.1.1", Ne;
}
var Vg;
function Mh() {
  return Vg || (Vg = 1, Bf.exports = $_()), Bf.exports;
}
var ne = Mh();
const nu = /* @__PURE__ */ Gy(ne);
var Uf = { exports: {} }, xs = {}, Pf = { exports: {} }, If = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yg;
function K_() {
  return Yg || (Yg = 1, (function(n) {
    function r(H, re) {
      var ue = H.length;
      H.push(re);
      e: for (; 0 < ue; ) {
        var ke = ue - 1 >>> 1, k = H[ke];
        if (0 < o(k, re))
          H[ke] = re, H[ue] = k, ue = ke;
        else break e;
      }
    }
    function i(H) {
      return H.length === 0 ? null : H[0];
    }
    function s(H) {
      if (H.length === 0) return null;
      var re = H[0], ue = H.pop();
      if (ue !== re) {
        H[0] = ue;
        e: for (var ke = 0, k = H.length, j = k >>> 1; ke < j; ) {
          var F = 2 * (ke + 1) - 1, V = H[F], le = F + 1, pe = H[le];
          if (0 > o(V, ue))
            le < k && 0 > o(pe, V) ? (H[ke] = pe, H[le] = ue, ke = le) : (H[ke] = V, H[F] = ue, ke = F);
          else if (le < k && 0 > o(pe, ue))
            H[ke] = pe, H[le] = ue, ke = le;
          else break e;
        }
      }
      return re;
    }
    function o(H, re) {
      var ue = H.sortIndex - re.sortIndex;
      return ue !== 0 ? ue : H.id - re.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var h = Date, m = h.now();
      n.unstable_now = function() {
        return h.now() - m;
      };
    }
    var g = [], v = [], _ = 1, b = null, y = 3, p = !1, f = !1, S = !1, x = !1, T = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    function C(H) {
      for (var re = i(v); re !== null; ) {
        if (re.callback === null) s(v);
        else if (re.startTime <= H)
          s(v), re.sortIndex = re.expirationTime, r(g, re);
        else break;
        re = i(v);
      }
    }
    function O(H) {
      if (S = !1, C(H), !f)
        if (i(g) !== null)
          f = !0, z || (z = !0, ee());
        else {
          var re = i(v);
          re !== null && be(O, re.startTime - H);
        }
    }
    var z = !1, R = -1, Z = 5, te = -1;
    function $() {
      return x ? !0 : !(n.unstable_now() - te < Z);
    }
    function Q() {
      if (x = !1, z) {
        var H = n.unstable_now();
        te = H;
        var re = !0;
        try {
          e: {
            f = !1, S && (S = !1, w(R), R = -1), p = !0;
            var ue = y;
            try {
              t: {
                for (C(H), b = i(g); b !== null && !(b.expirationTime > H && $()); ) {
                  var ke = b.callback;
                  if (typeof ke == "function") {
                    b.callback = null, y = b.priorityLevel;
                    var k = ke(
                      b.expirationTime <= H
                    );
                    if (H = n.unstable_now(), typeof k == "function") {
                      b.callback = k, C(H), re = !0;
                      break t;
                    }
                    b === i(g) && s(g), C(H);
                  } else s(g);
                  b = i(g);
                }
                if (b !== null) re = !0;
                else {
                  var j = i(v);
                  j !== null && be(
                    O,
                    j.startTime - H
                  ), re = !1;
                }
              }
              break e;
            } finally {
              b = null, y = ue, p = !1;
            }
            re = void 0;
          }
        } finally {
          re ? ee() : z = !1;
        }
      }
    }
    var ee;
    if (typeof N == "function")
      ee = function() {
        N(Q);
      };
    else if (typeof MessageChannel < "u") {
      var fe = new MessageChannel(), de = fe.port2;
      fe.port1.onmessage = Q, ee = function() {
        de.postMessage(null);
      };
    } else
      ee = function() {
        T(Q, 0);
      };
    function be(H, re) {
      R = T(function() {
        H(n.unstable_now());
      }, re);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, n.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Z = 0 < H ? Math.floor(1e3 / H) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return y;
    }, n.unstable_next = function(H) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = y;
      }
      var ue = y;
      y = re;
      try {
        return H();
      } finally {
        y = ue;
      }
    }, n.unstable_requestPaint = function() {
      x = !0;
    }, n.unstable_runWithPriority = function(H, re) {
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
      var ue = y;
      y = H;
      try {
        return re();
      } finally {
        y = ue;
      }
    }, n.unstable_scheduleCallback = function(H, re, ue) {
      var ke = n.unstable_now();
      switch (typeof ue == "object" && ue !== null ? (ue = ue.delay, ue = typeof ue == "number" && 0 < ue ? ke + ue : ke) : ue = ke, H) {
        case 1:
          var k = -1;
          break;
        case 2:
          k = 250;
          break;
        case 5:
          k = 1073741823;
          break;
        case 4:
          k = 1e4;
          break;
        default:
          k = 5e3;
      }
      return k = ue + k, H = {
        id: _++,
        callback: re,
        priorityLevel: H,
        startTime: ue,
        expirationTime: k,
        sortIndex: -1
      }, ue > ke ? (H.sortIndex = ue, r(v, H), i(g) === null && H === i(v) && (S ? (w(R), R = -1) : S = !0, be(O, ue - ke))) : (H.sortIndex = k, r(g, H), f || p || (f = !0, z || (z = !0, ee()))), H;
    }, n.unstable_shouldYield = $, n.unstable_wrapCallback = function(H) {
      var re = y;
      return function() {
        var ue = y;
        y = re;
        try {
          return H.apply(this, arguments);
        } finally {
          y = ue;
        }
      };
    };
  })(If)), If;
}
var Xg;
function J_() {
  return Xg || (Xg = 1, Pf.exports = K_()), Pf.exports;
}
var Hf = { exports: {} }, Rt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qg;
function W_() {
  if (Qg) return Rt;
  Qg = 1;
  var n = Mh();
  function r(g) {
    var v = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        v += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + g + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var s = {
    d: {
      f: i,
      r: function() {
        throw Error(r(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, o = Symbol.for("react.portal");
  function c(g, v, _) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: v,
      implementation: _
    };
  }
  var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(g, v) {
    if (g === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Rt.createPortal = function(g, v) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(r(299));
    return c(g, v, null, _);
  }, Rt.flushSync = function(g) {
    var v = h.T, _ = s.p;
    try {
      if (h.T = null, s.p = 2, g) return g();
    } finally {
      h.T = v, s.p = _, s.d.f();
    }
  }, Rt.preconnect = function(g, v) {
    typeof g == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, s.d.C(g, v));
  }, Rt.prefetchDNS = function(g) {
    typeof g == "string" && s.d.D(g);
  }, Rt.preinit = function(g, v) {
    if (typeof g == "string" && v && typeof v.as == "string") {
      var _ = v.as, b = m(_, v.crossOrigin), y = typeof v.integrity == "string" ? v.integrity : void 0, p = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      _ === "style" ? s.d.S(
        g,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: b,
          integrity: y,
          fetchPriority: p
        }
      ) : _ === "script" && s.d.X(g, {
        crossOrigin: b,
        integrity: y,
        fetchPriority: p,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, Rt.preinitModule = function(g, v) {
    if (typeof g == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var _ = m(
            v.as,
            v.crossOrigin
          );
          s.d.M(g, {
            crossOrigin: _,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && s.d.M(g);
  }, Rt.preload = function(g, v) {
    if (typeof g == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var _ = v.as, b = m(_, v.crossOrigin);
      s.d.L(g, _, {
        crossOrigin: b,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, Rt.preloadModule = function(g, v) {
    if (typeof g == "string")
      if (v) {
        var _ = m(v.as, v.crossOrigin);
        s.d.m(g, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: _,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else s.d.m(g);
  }, Rt.requestFormReset = function(g) {
    s.d.r(g);
  }, Rt.unstable_batchedUpdates = function(g, v) {
    return g(v);
  }, Rt.useFormState = function(g, v, _) {
    return h.H.useFormState(g, v, _);
  }, Rt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, Rt.version = "19.1.1", Rt;
}
var $g;
function Fy() {
  if ($g) return Hf.exports;
  $g = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Hf.exports = W_(), Hf.exports;
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
var Kg;
function eb() {
  if (Kg) return xs;
  Kg = 1;
  var n = J_(), r = Mh(), i = Fy();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (c(e) !== e)
      throw Error(s(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (t = c(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (l = u.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === a) return m(u), e;
          if (d === l) return m(u), t;
          d = d.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== l.return) a = u, l = d;
      else {
        for (var E = !1, D = u.child; D; ) {
          if (D === a) {
            E = !0, a = u, l = d;
            break;
          }
          if (D === l) {
            E = !0, l = u, a = d;
            break;
          }
          D = D.sibling;
        }
        if (!E) {
          for (D = d.child; D; ) {
            if (D === a) {
              E = !0, a = d, l = u;
              break;
            }
            if (D === l) {
              E = !0, l = d, a = u;
              break;
            }
            D = D.sibling;
          }
          if (!E) throw Error(s(189));
        }
      }
      if (a.alternate !== l) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = v(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var _ = Object.assign, b = Symbol.for("react.element"), y = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), N = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), $ = Symbol.for("react.memo_cache_sentinel"), Q = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object" ? null : (e = Q && e[Q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var fe = Symbol.for("react.client.reference");
  function de(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === fe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case f:
        return "Fragment";
      case x:
        return "Profiler";
      case S:
        return "StrictMode";
      case O:
        return "Suspense";
      case z:
        return "SuspenseList";
      case te:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case p:
          return "Portal";
        case N:
          return (e.displayName || "Context") + ".Provider";
        case w:
          return (e._context.displayName || "Context") + ".Consumer";
        case C:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case R:
          return t = e.displayName || null, t !== null ? t : de(e.type) || "Memo";
        case Z:
          t = e._payload, e = e._init;
          try {
            return de(e(t));
          } catch {
          }
      }
    return null;
  }
  var be = Array.isArray, H = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ke = [], k = -1;
  function j(e) {
    return { current: e };
  }
  function F(e) {
    0 > k || (e.current = ke[k], ke[k] = null, k--);
  }
  function V(e, t) {
    k++, ke[k] = e.current, e.current = t;
  }
  var le = j(null), pe = j(null), Y = j(null), me = j(null);
  function we(e, t) {
    switch (V(Y, t), V(pe, e), V(le, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? hg(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = hg(t), e = dg(t, e);
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
    F(le), V(le, e);
  }
  function Ze() {
    F(le), F(pe), F(Y);
  }
  function $e(e) {
    e.memoizedState !== null && V(me, e);
    var t = le.current, a = dg(t, e.type);
    t !== a && (V(pe, e), V(le, a));
  }
  function Ve(e) {
    pe.current === e && (F(le), F(pe)), me.current === e && (F(me), gs._currentValue = ue);
  }
  var P = Object.prototype.hasOwnProperty, ie = n.unstable_scheduleCallback, ae = n.unstable_cancelCallback, Oe = n.unstable_shouldYield, qe = n.unstable_requestPaint, ye = n.unstable_now, Te = n.unstable_getCurrentPriorityLevel, zt = n.unstable_ImmediatePriority, Mn = n.unstable_UserBlockingPriority, Ie = n.unstable_NormalPriority, kn = n.unstable_LowPriority, Js = n.unstable_IdlePriority, T1 = n.log, D1 = n.unstable_setDisableYieldValue, Ci = null, Xt = null;
  function dr(e) {
    if (typeof T1 == "function" && D1(e), Xt && typeof Xt.setStrictMode == "function")
      try {
        Xt.setStrictMode(Ci, e);
      } catch {
      }
  }
  var Qt = Math.clz32 ? Math.clz32 : M1, O1 = Math.log, N1 = Math.LN2;
  function M1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (O1(e) / N1 | 0) | 0;
  }
  var Ws = 256, el = 4194304;
  function Fr(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
  function tl(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0, d = e.suspendedLanes, E = e.pingedLanes;
    e = e.warmLanes;
    var D = l & 134217727;
    return D !== 0 ? (l = D & ~d, l !== 0 ? u = Fr(l) : (E &= D, E !== 0 ? u = Fr(E) : a || (a = D & ~e, a !== 0 && (u = Fr(a))))) : (D = l & ~d, D !== 0 ? u = Fr(D) : E !== 0 ? u = Fr(E) : a || (a = l & ~e, a !== 0 && (u = Fr(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & d) === 0 && (d = u & -u, a = t & -t, d >= a || d === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function wi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function k1(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
  function Qh() {
    var e = Ws;
    return Ws <<= 1, (Ws & 4194048) === 0 && (Ws = 256), e;
  }
  function $h() {
    var e = el;
    return el <<= 1, (el & 62914560) === 0 && (el = 4194304), e;
  }
  function Eu(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ai(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function R1(e, t, a, l, u, d) {
    var E = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var D = e.entanglements, M = e.expirationTimes, I = e.hiddenUpdates;
    for (a = E & ~a; 0 < a; ) {
      var X = 31 - Qt(a), J = 1 << X;
      D[X] = 0, M[X] = -1;
      var q = I[X];
      if (q !== null)
        for (I[X] = null, X = 0; X < q.length; X++) {
          var G = q[X];
          G !== null && (G.lane &= -536870913);
        }
      a &= ~J;
    }
    l !== 0 && Kh(e, l, 0), d !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(E & ~t));
  }
  function Kh(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - Qt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 4194090;
  }
  function Jh(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - Qt(a), u = 1 << l;
      u & t | e[l] & t && (e[l] |= t), a &= ~u;
    }
  }
  function Cu(e) {
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
  function wu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Wh() {
    var e = re.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : kg(e.type));
  }
  function j1(e, t) {
    var a = re.p;
    try {
      return re.p = e, t();
    } finally {
      re.p = a;
    }
  }
  var pr = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + pr, Ut = "__reactProps$" + pr, Sa = "__reactContainer$" + pr, Au = "__reactEvents$" + pr, z1 = "__reactListeners$" + pr, L1 = "__reactHandles$" + pr, ed = "__reactResources$" + pr, Ti = "__reactMarker$" + pr;
  function Tu(e) {
    delete e[Mt], delete e[Ut], delete e[Au], delete e[z1], delete e[L1];
  }
  function xa(e) {
    var t = e[Mt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Sa] || a[Mt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = vg(e); e !== null; ) {
            if (a = e[Mt]) return a;
            e = vg(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ea(e) {
    if (e = e[Mt] || e[Sa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Di(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Ca(e) {
    var t = e[ed];
    return t || (t = e[ed] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Et(e) {
    e[Ti] = !0;
  }
  var td = /* @__PURE__ */ new Set(), nd = {};
  function Vr(e, t) {
    wa(e, t), wa(e + "Capture", t);
  }
  function wa(e, t) {
    for (nd[e] = t, e = 0; e < t.length; e++)
      td.add(t[e]);
  }
  var B1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), rd = {}, ad = {};
  function U1(e) {
    return P.call(ad, e) ? !0 : P.call(rd, e) ? !1 : B1.test(e) ? ad[e] = !0 : (rd[e] = !0, !1);
  }
  function nl(e, t, a) {
    if (U1(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function rl(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function Zn(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  var Du, id;
  function Aa(e) {
    if (Du === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Du = t && t[1] || "", id = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Du + e + id;
  }
  var Ou = !1;
  function Nu(e, t) {
    if (!e || Ou) return "";
    Ou = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var J = function() {
                throw Error();
              };
              if (Object.defineProperty(J.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(J, []);
                } catch (G) {
                  var q = G;
                }
                Reflect.construct(e, [], J);
              } else {
                try {
                  J.call();
                } catch (G) {
                  q = G;
                }
                e.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                q = G;
              }
              (J = e()) && typeof J.catch == "function" && J.catch(function() {
              });
            }
          } catch (G) {
            if (G && q && typeof G.stack == "string")
              return [G.stack, q.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var d = l.DetermineComponentFrameRoot(), E = d[0], D = d[1];
      if (E && D) {
        var M = E.split(`
`), I = D.split(`
`);
        for (u = l = 0; l < M.length && !M[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < I.length && !I[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === M.length || u === I.length)
          for (l = M.length - 1, u = I.length - 1; 1 <= l && 0 <= u && M[l] !== I[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (M[l] !== I[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || M[l] !== I[u]) {
                  var X = `
` + M[l].replace(" at new ", " at ");
                  return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), X;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      Ou = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Aa(a) : "";
  }
  function P1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Aa(e.type);
      case 16:
        return Aa("Lazy");
      case 13:
        return Aa("Suspense");
      case 19:
        return Aa("SuspenseList");
      case 0:
      case 15:
        return Nu(e.type, !1);
      case 11:
        return Nu(e.type.render, !1);
      case 1:
        return Nu(e.type, !0);
      case 31:
        return Aa("Activity");
      default:
        return "";
    }
  }
  function sd(e) {
    try {
      var t = "";
      do
        t += P1(e), e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function un(e) {
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
  function ld(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function I1(e) {
    var t = ld(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, d = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(E) {
          l = "" + E, d.call(this, E);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(E) {
          l = "" + E;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function al(e) {
    e._valueTracker || (e._valueTracker = I1(e));
  }
  function od(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = ld(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function il(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var H1 = /[\n"\\]/g;
  function cn(e) {
    return e.replace(
      H1,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Mu(e, t, a, l, u, d, E, D) {
    e.name = "", E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean" ? e.type = E : e.removeAttribute("type"), t != null ? E === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + un(t)) : e.value !== "" + un(t) && (e.value = "" + un(t)) : E !== "submit" && E !== "reset" || e.removeAttribute("value"), t != null ? ku(e, E, un(t)) : a != null ? ku(e, E, un(a)) : l != null && e.removeAttribute("value"), u == null && d != null && (e.defaultChecked = !!d), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), D != null && typeof D != "function" && typeof D != "symbol" && typeof D != "boolean" ? e.name = "" + un(D) : e.removeAttribute("name");
  }
  function ud(e, t, a, l, u, d, E, D) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), t != null || a != null) {
      if (!(d !== "submit" && d !== "reset" || t != null))
        return;
      a = a != null ? "" + un(a) : "", t = t != null ? "" + un(t) : a, D || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = D ? e.checked : !!l, e.defaultChecked = !!l, E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean" && (e.name = E);
  }
  function ku(e, t, a) {
    t === "number" && il(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ta(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < a.length; u++)
        t["$" + a[u]] = !0;
      for (a = 0; a < e.length; a++)
        u = t.hasOwnProperty("$" + e[a].value), e[a].selected !== u && (e[a].selected = u), u && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + un(a), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === a) {
          e[u].selected = !0, l && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function cd(e, t, a) {
    if (t != null && (t = "" + un(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + un(a) : "";
  }
  function fd(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(s(92));
        if (be(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = un(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l);
  }
  function Da(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var q1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function hd(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || q1.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function dd(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var u in t)
        l = t[u], t.hasOwnProperty(u) && a[u] !== l && hd(e, u, l);
    } else
      for (var d in t)
        t.hasOwnProperty(d) && hd(e, d, t[d]);
  }
  function Ru(e) {
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
  var Z1 = /* @__PURE__ */ new Map([
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
  ]), G1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function sl(e) {
    return G1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var ju = null;
  function zu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Oa = null, Na = null;
  function pd(e) {
    var t = Ea(e);
    if (t && (e = t.stateNode)) {
      var a = e[Ut] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Mu(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + cn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var u = l[Ut] || null;
                if (!u) throw Error(s(90));
                Mu(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              l = a[t], l.form === e.form && od(l);
          }
          break e;
        case "textarea":
          cd(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Ta(e, !!a.multiple, t, !1);
      }
    }
  }
  var Lu = !1;
  function md(e, t, a) {
    if (Lu) return e(t, a);
    Lu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Lu = !1, (Oa !== null || Na !== null) && (Fl(), Oa && (t = Oa, e = Na, Na = Oa = null, pd(t), e)))
        for (t = 0; t < e.length; t++) pd(e[t]);
    }
  }
  function Oi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Ut] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
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
    if (a && typeof a != "function")
      throw Error(
        s(231, t, typeof a)
      );
    return a;
  }
  var Gn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Bu = !1;
  if (Gn)
    try {
      var Ni = {};
      Object.defineProperty(Ni, "passive", {
        get: function() {
          Bu = !0;
        }
      }), window.addEventListener("test", Ni, Ni), window.removeEventListener("test", Ni, Ni);
    } catch {
      Bu = !1;
    }
  var mr = null, Uu = null, ll = null;
  function gd() {
    if (ll) return ll;
    var e, t = Uu, a = t.length, l, u = "value" in mr ? mr.value : mr.textContent, d = u.length;
    for (e = 0; e < a && t[e] === u[e]; e++) ;
    var E = a - e;
    for (l = 1; l <= E && t[a - l] === u[d - l]; l++) ;
    return ll = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function ol(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ul() {
    return !0;
  }
  function vd() {
    return !1;
  }
  function Pt(e) {
    function t(a, l, u, d, E) {
      this._reactName = a, this._targetInst = u, this.type = l, this.nativeEvent = d, this.target = E, this.currentTarget = null;
      for (var D in e)
        e.hasOwnProperty(D) && (a = e[D], this[D] = a ? a(d) : d[D]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ul : vd, this.isPropagationStopped = vd, this;
    }
    return _(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ul);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ul);
      },
      persist: function() {
      },
      isPersistent: ul
    }), t;
  }
  var Yr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, cl = Pt(Yr), Mi = _({}, Yr, { view: 0, detail: 0 }), F1 = Pt(Mi), Pu, Iu, ki, fl = _({}, Mi, {
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
    getModifierState: qu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ki && (ki && e.type === "mousemove" ? (Pu = e.screenX - ki.screenX, Iu = e.screenY - ki.screenY) : Iu = Pu = 0, ki = e), Pu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Iu;
    }
  }), yd = Pt(fl), V1 = _({}, fl, { dataTransfer: 0 }), Y1 = Pt(V1), X1 = _({}, Mi, { relatedTarget: 0 }), Hu = Pt(X1), Q1 = _({}, Yr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $1 = Pt(Q1), K1 = _({}, Yr, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), J1 = Pt(K1), W1 = _({}, Yr, { data: 0 }), _d = Pt(W1), e2 = {
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
  }, t2 = {
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
  }, n2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function r2(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = n2[e]) ? !!t[e] : !1;
  }
  function qu() {
    return r2;
  }
  var a2 = _({}, Mi, {
    key: function(e) {
      if (e.key) {
        var t = e2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ol(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? t2[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: qu,
    charCode: function(e) {
      return e.type === "keypress" ? ol(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ol(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), i2 = Pt(a2), s2 = _({}, fl, {
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
  }), bd = Pt(s2), l2 = _({}, Mi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qu
  }), o2 = Pt(l2), u2 = _({}, Yr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), c2 = Pt(u2), f2 = _({}, fl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), h2 = Pt(f2), d2 = _({}, Yr, {
    newState: 0,
    oldState: 0
  }), p2 = Pt(d2), m2 = [9, 13, 27, 32], Zu = Gn && "CompositionEvent" in window, Ri = null;
  Gn && "documentMode" in document && (Ri = document.documentMode);
  var g2 = Gn && "TextEvent" in window && !Ri, Sd = Gn && (!Zu || Ri && 8 < Ri && 11 >= Ri), xd = " ", Ed = !1;
  function Cd(e, t) {
    switch (e) {
      case "keyup":
        return m2.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ma = !1;
  function v2(e, t) {
    switch (e) {
      case "compositionend":
        return wd(t);
      case "keypress":
        return t.which !== 32 ? null : (Ed = !0, xd);
      case "textInput":
        return e = t.data, e === xd && Ed ? null : e;
      default:
        return null;
    }
  }
  function y2(e, t) {
    if (Ma)
      return e === "compositionend" || !Zu && Cd(e, t) ? (e = gd(), ll = Uu = mr = null, Ma = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Sd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _2 = {
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
  function Ad(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_2[e.type] : t === "textarea";
  }
  function Td(e, t, a, l) {
    Oa ? Na ? Na.push(l) : Na = [l] : Oa = l, t = Kl(t, "onChange"), 0 < t.length && (a = new cl(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var ji = null, zi = null;
  function b2(e) {
    lg(e, 0);
  }
  function hl(e) {
    var t = Di(e);
    if (od(t)) return e;
  }
  function Dd(e, t) {
    if (e === "change") return t;
  }
  var Od = !1;
  if (Gn) {
    var Gu;
    if (Gn) {
      var Fu = "oninput" in document;
      if (!Fu) {
        var Nd = document.createElement("div");
        Nd.setAttribute("oninput", "return;"), Fu = typeof Nd.oninput == "function";
      }
      Gu = Fu;
    } else Gu = !1;
    Od = Gu && (!document.documentMode || 9 < document.documentMode);
  }
  function Md() {
    ji && (ji.detachEvent("onpropertychange", kd), zi = ji = null);
  }
  function kd(e) {
    if (e.propertyName === "value" && hl(zi)) {
      var t = [];
      Td(
        t,
        zi,
        e,
        zu(e)
      ), md(b2, t);
    }
  }
  function S2(e, t, a) {
    e === "focusin" ? (Md(), ji = t, zi = a, ji.attachEvent("onpropertychange", kd)) : e === "focusout" && Md();
  }
  function x2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return hl(zi);
  }
  function E2(e, t) {
    if (e === "click") return hl(t);
  }
  function C2(e, t) {
    if (e === "input" || e === "change")
      return hl(t);
  }
  function w2(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var $t = typeof Object.is == "function" ? Object.is : w2;
  function Li(e, t) {
    if ($t(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var u = a[l];
      if (!P.call(t, u) || !$t(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function Rd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function jd(e, t) {
    var a = Rd(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= t && l >= t)
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Rd(a);
    }
  }
  function zd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ld(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = il(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = il(e.document);
    }
    return t;
  }
  function Vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var A2 = Gn && "documentMode" in document && 11 >= document.documentMode, ka = null, Yu = null, Bi = null, Xu = !1;
  function Bd(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Xu || ka == null || ka !== il(l) || (l = ka, "selectionStart" in l && Vu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Bi && Li(Bi, l) || (Bi = l, l = Kl(Yu, "onSelect"), 0 < l.length && (t = new cl(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = ka)));
  }
  function Xr(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Ra = {
    animationend: Xr("Animation", "AnimationEnd"),
    animationiteration: Xr("Animation", "AnimationIteration"),
    animationstart: Xr("Animation", "AnimationStart"),
    transitionrun: Xr("Transition", "TransitionRun"),
    transitionstart: Xr("Transition", "TransitionStart"),
    transitioncancel: Xr("Transition", "TransitionCancel"),
    transitionend: Xr("Transition", "TransitionEnd")
  }, Qu = {}, Ud = {};
  Gn && (Ud = document.createElement("div").style, "AnimationEvent" in window || (delete Ra.animationend.animation, delete Ra.animationiteration.animation, delete Ra.animationstart.animation), "TransitionEvent" in window || delete Ra.transitionend.transition);
  function Qr(e) {
    if (Qu[e]) return Qu[e];
    if (!Ra[e]) return e;
    var t = Ra[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Ud)
        return Qu[e] = t[a];
    return e;
  }
  var Pd = Qr("animationend"), Id = Qr("animationiteration"), Hd = Qr("animationstart"), T2 = Qr("transitionrun"), D2 = Qr("transitionstart"), O2 = Qr("transitioncancel"), qd = Qr("transitionend"), Zd = /* @__PURE__ */ new Map(), $u = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  $u.push("scrollEnd");
  function xn(e, t) {
    Zd.set(e, t), Vr(t, [e]);
  }
  var Gd = /* @__PURE__ */ new WeakMap();
  function fn(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Gd.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: sd(t)
      }, Gd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: sd(t)
    };
  }
  var hn = [], ja = 0, Ku = 0;
  function dl() {
    for (var e = ja, t = Ku = ja = 0; t < e; ) {
      var a = hn[t];
      hn[t++] = null;
      var l = hn[t];
      hn[t++] = null;
      var u = hn[t];
      hn[t++] = null;
      var d = hn[t];
      if (hn[t++] = null, l !== null && u !== null) {
        var E = l.pending;
        E === null ? u.next = u : (u.next = E.next, E.next = u), l.pending = u;
      }
      d !== 0 && Fd(a, u, d);
    }
  }
  function pl(e, t, a, l) {
    hn[ja++] = e, hn[ja++] = t, hn[ja++] = a, hn[ja++] = l, Ku |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function Ju(e, t, a, l) {
    return pl(e, t, a, l), ml(e);
  }
  function za(e, t) {
    return pl(e, null, null, t), ml(e);
  }
  function Fd(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var u = !1, d = e.return; d !== null; )
      d.childLanes |= a, l = d.alternate, l !== null && (l.childLanes |= a), d.tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (u = !0)), e = d, d = d.return;
    return e.tag === 3 ? (d = e.stateNode, u && t !== null && (u = 31 - Qt(a), e = d.hiddenUpdates, l = e[u], l === null ? e[u] = [t] : l.push(t), t.lane = a | 536870912), d) : null;
  }
  function ml(e) {
    if (50 < os)
      throw os = 0, af = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var La = {};
  function N2(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Kt(e, t, a, l) {
    return new N2(e, t, a, l);
  }
  function Wu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Fn(e, t) {
    var a = e.alternate;
    return a === null ? (a = Kt(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Vd(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function gl(e, t, a, l, u, d) {
    var E = 0;
    if (l = e, typeof e == "function") Wu(e) && (E = 1);
    else if (typeof e == "string")
      E = k_(
        e,
        a,
        le.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case te:
          return e = Kt(31, a, t, u), e.elementType = te, e.lanes = d, e;
        case f:
          return $r(a.children, u, d, t);
        case S:
          E = 8, u |= 24;
          break;
        case x:
          return e = Kt(12, a, t, u | 2), e.elementType = x, e.lanes = d, e;
        case O:
          return e = Kt(13, a, t, u), e.elementType = O, e.lanes = d, e;
        case z:
          return e = Kt(19, a, t, u), e.elementType = z, e.lanes = d, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case T:
              case N:
                E = 10;
                break e;
              case w:
                E = 9;
                break e;
              case C:
                E = 11;
                break e;
              case R:
                E = 14;
                break e;
              case Z:
                E = 16, l = null;
                break e;
            }
          E = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = Kt(E, a, t, u), t.elementType = e, t.type = l, t.lanes = d, t;
  }
  function $r(e, t, a, l) {
    return e = Kt(7, e, l, t), e.lanes = a, e;
  }
  function ec(e, t, a) {
    return e = Kt(6, e, null, t), e.lanes = a, e;
  }
  function tc(e, t, a) {
    return t = Kt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Ba = [], Ua = 0, vl = null, yl = 0, dn = [], pn = 0, Kr = null, Vn = 1, Yn = "";
  function Jr(e, t) {
    Ba[Ua++] = yl, Ba[Ua++] = vl, vl = e, yl = t;
  }
  function Yd(e, t, a) {
    dn[pn++] = Vn, dn[pn++] = Yn, dn[pn++] = Kr, Kr = e;
    var l = Vn;
    e = Yn;
    var u = 32 - Qt(l) - 1;
    l &= ~(1 << u), a += 1;
    var d = 32 - Qt(t) + u;
    if (30 < d) {
      var E = u - u % 5;
      d = (l & (1 << E) - 1).toString(32), l >>= E, u -= E, Vn = 1 << 32 - Qt(t) + u | a << u | l, Yn = d + e;
    } else
      Vn = 1 << d | a << u | l, Yn = e;
  }
  function nc(e) {
    e.return !== null && (Jr(e, 1), Yd(e, 1, 0));
  }
  function rc(e) {
    for (; e === vl; )
      vl = Ba[--Ua], Ba[Ua] = null, yl = Ba[--Ua], Ba[Ua] = null;
    for (; e === Kr; )
      Kr = dn[--pn], dn[pn] = null, Yn = dn[--pn], dn[pn] = null, Vn = dn[--pn], dn[pn] = null;
  }
  var Lt = null, st = null, He = !1, Wr = null, Rn = !1, ac = Error(s(519));
  function ea(e) {
    var t = Error(s(418, ""));
    throw Ii(fn(t, e)), ac;
  }
  function Xd(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[Mt] = e, t[Ut] = l, a) {
      case "dialog":
        ze("cancel", t), ze("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ze("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < cs.length; a++)
          ze(cs[a], t);
        break;
      case "source":
        ze("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ze("error", t), ze("load", t);
        break;
      case "details":
        ze("toggle", t);
        break;
      case "input":
        ze("invalid", t), ud(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), al(t);
        break;
      case "select":
        ze("invalid", t);
        break;
      case "textarea":
        ze("invalid", t), fd(t, l.value, l.defaultValue, l.children), al(t);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || fg(t.textContent, a) ? (l.popover != null && (ze("beforetoggle", t), ze("toggle", t)), l.onScroll != null && ze("scroll", t), l.onScrollEnd != null && ze("scrollend", t), l.onClick != null && (t.onclick = Jl), t = !0) : t = !1, t || ea(e);
  }
  function Qd(e) {
    for (Lt = e.return; Lt; )
      switch (Lt.tag) {
        case 5:
        case 13:
          Rn = !1;
          return;
        case 27:
        case 3:
          Rn = !0;
          return;
        default:
          Lt = Lt.return;
      }
  }
  function Ui(e) {
    if (e !== Lt) return !1;
    if (!He) return Qd(e), He = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Sf(e.type, e.memoizedProps)), a = !a), a && st && ea(e), Qd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (t === 0) {
                st = Cn(e.nextSibling);
                break e;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          e = e.nextSibling;
        }
        st = null;
      }
    } else
      t === 27 ? (t = st, Mr(e.type) ? (e = wf, wf = null, st = e) : st = t) : st = Lt ? Cn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pi() {
    st = Lt = null, He = !1;
  }
  function $d() {
    var e = Wr;
    return e !== null && (qt === null ? qt = e : qt.push.apply(
      qt,
      e
    ), Wr = null), e;
  }
  function Ii(e) {
    Wr === null ? Wr = [e] : Wr.push(e);
  }
  var ic = j(null), ta = null, Xn = null;
  function gr(e, t, a) {
    V(ic, t._currentValue), t._currentValue = a;
  }
  function Qn(e) {
    e._currentValue = ic.current, F(ic);
  }
  function sc(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function lc(e, t, a, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var d = u.dependencies;
      if (d !== null) {
        var E = u.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var D = d;
          d = u;
          for (var M = 0; M < t.length; M++)
            if (D.context === t[M]) {
              d.lanes |= a, D = d.alternate, D !== null && (D.lanes |= a), sc(
                d.return,
                a,
                e
              ), l || (E = null);
              break e;
            }
          d = D.next;
        }
      } else if (u.tag === 18) {
        if (E = u.return, E === null) throw Error(s(341));
        E.lanes |= a, d = E.alternate, d !== null && (d.lanes |= a), sc(E, a, e), E = null;
      } else E = u.child;
      if (E !== null) E.return = u;
      else
        for (E = u; E !== null; ) {
          if (E === e) {
            E = null;
            break;
          }
          if (u = E.sibling, u !== null) {
            u.return = E.return, E = u;
            break;
          }
          E = E.return;
        }
      u = E;
    }
  }
  function Hi(e, t, a, l) {
    e = null;
    for (var u = t, d = !1; u !== null; ) {
      if (!d) {
        if ((u.flags & 524288) !== 0) d = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var E = u.alternate;
        if (E === null) throw Error(s(387));
        if (E = E.memoizedProps, E !== null) {
          var D = u.type;
          $t(u.pendingProps.value, E.value) || (e !== null ? e.push(D) : e = [D]);
        }
      } else if (u === me.current) {
        if (E = u.alternate, E === null) throw Error(s(387));
        E.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(gs) : e = [gs]);
      }
      u = u.return;
    }
    e !== null && lc(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function _l(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!$t(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function na(e) {
    ta = e, Xn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function kt(e) {
    return Kd(ta, e);
  }
  function bl(e, t) {
    return ta === null && na(e), Kd(e, t);
  }
  function Kd(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Xn === null) {
      if (e === null) throw Error(s(308));
      Xn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Xn = Xn.next = t;
    return a;
  }
  var M2 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, k2 = n.unstable_scheduleCallback, R2 = n.unstable_NormalPriority, _t = {
    $$typeof: N,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function oc() {
    return {
      controller: new M2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function qi(e) {
    e.refCount--, e.refCount === 0 && k2(R2, function() {
      e.controller.abort();
    });
  }
  var Zi = null, uc = 0, Pa = 0, Ia = null;
  function j2(e, t) {
    if (Zi === null) {
      var a = Zi = [];
      uc = 0, Pa = hf(), Ia = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return uc++, t.then(Jd, Jd), t;
  }
  function Jd() {
    if (--uc === 0 && Zi !== null) {
      Ia !== null && (Ia.status = "fulfilled");
      var e = Zi;
      Zi = null, Pa = 0, Ia = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function z2(e, t) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        a.push(u);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var u = 0; u < a.length; u++) (0, a[u])(t);
      },
      function(u) {
        for (l.status = "rejected", l.reason = u, u = 0; u < a.length; u++)
          (0, a[u])(void 0);
      }
    ), l;
  }
  var Wd = H.S;
  H.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && j2(e, t), Wd !== null && Wd(e, t);
  };
  var ra = j(null);
  function cc() {
    var e = ra.current;
    return e !== null ? e : Je.pooledCache;
  }
  function Sl(e, t) {
    t === null ? V(ra, ra.current) : V(ra, t.pool);
  }
  function ep() {
    var e = cc();
    return e === null ? null : { parent: _t._currentValue, pool: e };
  }
  var Gi = Error(s(460)), tp = Error(s(474)), xl = Error(s(542)), fc = { then: function() {
  } };
  function np(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function El() {
  }
  function rp(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(El, El), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, ip(e), e;
      default:
        if (typeof t.status == "string") t.then(El, El);
        else {
          if (e = Je, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, ip(e), e;
        }
        throw Fi = t, Gi;
    }
  }
  var Fi = null;
  function ap() {
    if (Fi === null) throw Error(s(459));
    var e = Fi;
    return Fi = null, e;
  }
  function ip(e) {
    if (e === Gi || e === xl)
      throw Error(s(483));
  }
  var vr = !1;
  function hc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function dc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function yr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function _r(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Ge & 2) !== 0) {
      var u = l.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t, t = ml(e), Fd(e, null, a), t;
    }
    return pl(e, l, t, a), ml(e);
  }
  function Vi(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Jh(e, a);
    }
  }
  function pc(e, t) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var u = null, d = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var E = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          d === null ? u = d = E : d = d.next = E, a = a.next;
        } while (a !== null);
        d === null ? u = d = t : d = d.next = t;
      } else u = d = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var mc = !1;
  function Yi() {
    if (mc) {
      var e = Ia;
      if (e !== null) throw e;
    }
  }
  function Xi(e, t, a, l) {
    mc = !1;
    var u = e.updateQueue;
    vr = !1;
    var d = u.firstBaseUpdate, E = u.lastBaseUpdate, D = u.shared.pending;
    if (D !== null) {
      u.shared.pending = null;
      var M = D, I = M.next;
      M.next = null, E === null ? d = I : E.next = I, E = M;
      var X = e.alternate;
      X !== null && (X = X.updateQueue, D = X.lastBaseUpdate, D !== E && (D === null ? X.firstBaseUpdate = I : D.next = I, X.lastBaseUpdate = M));
    }
    if (d !== null) {
      var J = u.baseState;
      E = 0, X = I = M = null, D = d;
      do {
        var q = D.lane & -536870913, G = q !== D.lane;
        if (G ? (Ue & q) === q : (l & q) === q) {
          q !== 0 && q === Pa && (mc = !0), X !== null && (X = X.next = {
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: null,
            next: null
          });
          e: {
            var Se = e, ve = D;
            q = t;
            var Qe = a;
            switch (ve.tag) {
              case 1:
                if (Se = ve.payload, typeof Se == "function") {
                  J = Se.call(Qe, J, q);
                  break e;
                }
                J = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = ve.payload, q = typeof Se == "function" ? Se.call(Qe, J, q) : Se, q == null) break e;
                J = _({}, J, q);
                break e;
              case 2:
                vr = !0;
            }
          }
          q = D.callback, q !== null && (e.flags |= 64, G && (e.flags |= 8192), G = u.callbacks, G === null ? u.callbacks = [q] : G.push(q));
        } else
          G = {
            lane: q,
            tag: D.tag,
            payload: D.payload,
            callback: D.callback,
            next: null
          }, X === null ? (I = X = G, M = J) : X = X.next = G, E |= q;
        if (D = D.next, D === null) {
          if (D = u.shared.pending, D === null)
            break;
          G = D, D = G.next, G.next = null, u.lastBaseUpdate = G, u.shared.pending = null;
        }
      } while (!0);
      X === null && (M = J), u.baseState = M, u.firstBaseUpdate = I, u.lastBaseUpdate = X, d === null && (u.shared.lanes = 0), Tr |= E, e.lanes = E, e.memoizedState = J;
    }
  }
  function sp(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function lp(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        sp(a[e], t);
  }
  var Ha = j(null), Cl = j(0);
  function op(e, t) {
    e = nr, V(Cl, e), V(Ha, t), nr = e | t.baseLanes;
  }
  function gc() {
    V(Cl, nr), V(Ha, Ha.current);
  }
  function vc() {
    nr = Cl.current, F(Ha), F(Cl);
  }
  var br = 0, Me = null, Ye = null, ht = null, wl = !1, qa = !1, aa = !1, Al = 0, Qi = 0, Za = null, L2 = 0;
  function ut() {
    throw Error(s(321));
  }
  function yc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!$t(e[a], t[a])) return !1;
    return !0;
  }
  function _c(e, t, a, l, u, d) {
    return br = d, Me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e === null || e.memoizedState === null ? Fp : Vp, aa = !1, d = a(l, u), aa = !1, qa && (d = cp(
      t,
      a,
      l,
      u
    )), up(e), d;
  }
  function up(e) {
    H.H = kl;
    var t = Ye !== null && Ye.next !== null;
    if (br = 0, ht = Ye = Me = null, wl = !1, Qi = 0, Za = null, t) throw Error(s(300));
    e === null || Ct || (e = e.dependencies, e !== null && _l(e) && (Ct = !0));
  }
  function cp(e, t, a, l) {
    Me = e;
    var u = 0;
    do {
      if (qa && (Za = null), Qi = 0, qa = !1, 25 <= u) throw Error(s(301));
      if (u += 1, ht = Ye = null, e.updateQueue != null) {
        var d = e.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      H.H = Z2, d = t(a, l);
    } while (qa);
    return d;
  }
  function B2() {
    var e = H.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? $i(t) : t, e = e.useState()[0], (Ye !== null ? Ye.memoizedState : null) !== e && (Me.flags |= 1024), t;
  }
  function bc() {
    var e = Al !== 0;
    return Al = 0, e;
  }
  function Sc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function xc(e) {
    if (wl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      wl = !1;
    }
    br = 0, ht = Ye = Me = null, qa = !1, Qi = Al = 0, Za = null;
  }
  function It() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ht === null ? Me.memoizedState = ht = e : ht = ht.next = e, ht;
  }
  function dt() {
    if (Ye === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ye.next;
    var t = ht === null ? Me.memoizedState : ht.next;
    if (t !== null)
      ht = t, Ye = e;
    else {
      if (e === null)
        throw Me.alternate === null ? Error(s(467)) : Error(s(310));
      Ye = e, e = {
        memoizedState: Ye.memoizedState,
        baseState: Ye.baseState,
        baseQueue: Ye.baseQueue,
        queue: Ye.queue,
        next: null
      }, ht === null ? Me.memoizedState = ht = e : ht = ht.next = e;
    }
    return ht;
  }
  function Ec() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $i(e) {
    var t = Qi;
    return Qi += 1, Za === null && (Za = []), e = rp(Za, e, t), t = Me, (ht === null ? t.memoizedState : ht.next) === null && (t = t.alternate, H.H = t === null || t.memoizedState === null ? Fp : Vp), e;
  }
  function Tl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return $i(e);
      if (e.$$typeof === N) return kt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Cc(e) {
    var t = null, a = Me.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = Me.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Ec(), Me.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = $;
    return t.index++, a;
  }
  function $n(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Dl(e) {
    var t = dt();
    return wc(t, Ye, e);
  }
  function wc(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = a;
    var u = e.baseQueue, d = l.pending;
    if (d !== null) {
      if (u !== null) {
        var E = u.next;
        u.next = d.next, d.next = E;
      }
      t.baseQueue = u = d, l.pending = null;
    }
    if (d = e.baseState, u === null) e.memoizedState = d;
    else {
      t = u.next;
      var D = E = null, M = null, I = t, X = !1;
      do {
        var J = I.lane & -536870913;
        if (J !== I.lane ? (Ue & J) === J : (br & J) === J) {
          var q = I.revertLane;
          if (q === 0)
            M !== null && (M = M.next = {
              lane: 0,
              revertLane: 0,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null
            }), J === Pa && (X = !0);
          else if ((br & q) === q) {
            I = I.next, q === Pa && (X = !0);
            continue;
          } else
            J = {
              lane: 0,
              revertLane: I.revertLane,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null
            }, M === null ? (D = M = J, E = d) : M = M.next = J, Me.lanes |= q, Tr |= q;
          J = I.action, aa && a(d, J), d = I.hasEagerState ? I.eagerState : a(d, J);
        } else
          q = {
            lane: J,
            revertLane: I.revertLane,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          }, M === null ? (D = M = q, E = d) : M = M.next = q, Me.lanes |= J, Tr |= J;
        I = I.next;
      } while (I !== null && I !== t);
      if (M === null ? E = d : M.next = D, !$t(d, e.memoizedState) && (Ct = !0, X && (a = Ia, a !== null)))
        throw a;
      e.memoizedState = d, e.baseState = E, e.baseQueue = M, l.lastRenderedState = d;
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Ac(e) {
    var t = dt(), a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, u = a.pending, d = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var E = u = u.next;
      do
        d = e(d, E.action), E = E.next;
      while (E !== u);
      $t(d, t.memoizedState) || (Ct = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), a.lastRenderedState = d;
    }
    return [d, l];
  }
  function fp(e, t, a) {
    var l = Me, u = dt(), d = He;
    if (d) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = t();
    var E = !$t(
      (Ye || u).memoizedState,
      a
    );
    E && (u.memoizedState = a, Ct = !0), u = u.queue;
    var D = pp.bind(null, l, u, e);
    if (Ki(2048, 8, D, [e]), u.getSnapshot !== t || E || ht !== null && ht.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ga(
        9,
        Ol(),
        dp.bind(
          null,
          l,
          u,
          a,
          t
        ),
        null
      ), Je === null) throw Error(s(349));
      d || (br & 124) !== 0 || hp(l, t, a);
    }
    return a;
  }
  function hp(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Me.updateQueue, t === null ? (t = Ec(), Me.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function dp(e, t, a, l) {
    t.value = a, t.getSnapshot = l, mp(t) && gp(e);
  }
  function pp(e, t, a) {
    return a(function() {
      mp(t) && gp(e);
    });
  }
  function mp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !$t(e, a);
    } catch {
      return !0;
    }
  }
  function gp(e) {
    var t = za(e, 2);
    t !== null && nn(t, e, 2);
  }
  function Tc(e) {
    var t = It();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), aa) {
        dr(!0);
        try {
          a();
        } finally {
          dr(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $n,
      lastRenderedState: e
    }, t;
  }
  function vp(e, t, a, l) {
    return e.baseState = a, wc(
      e,
      Ye,
      typeof l == "function" ? l : $n
    );
  }
  function U2(e, t, a, l, u) {
    if (Ml(e)) throw Error(s(485));
    if (e = t.action, e !== null) {
      var d = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(E) {
          d.listeners.push(E);
        }
      };
      H.T !== null ? a(!0) : d.isTransition = !1, l(d), a = t.pending, a === null ? (d.next = t.pending = d, yp(t, d)) : (d.next = a.next, t.pending = a.next = d);
    }
  }
  function yp(e, t) {
    var a = t.action, l = t.payload, u = e.state;
    if (t.isTransition) {
      var d = H.T, E = {};
      H.T = E;
      try {
        var D = a(u, l), M = H.S;
        M !== null && M(E, D), _p(e, t, D);
      } catch (I) {
        Dc(e, t, I);
      } finally {
        H.T = d;
      }
    } else
      try {
        d = a(u, l), _p(e, t, d);
      } catch (I) {
        Dc(e, t, I);
      }
  }
  function _p(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        bp(e, t, l);
      },
      function(l) {
        return Dc(e, t, l);
      }
    ) : bp(e, t, a);
  }
  function bp(e, t, a) {
    t.status = "fulfilled", t.value = a, Sp(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, yp(e, a)));
  }
  function Dc(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, Sp(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Sp(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function xp(e, t) {
    return t;
  }
  function Ep(e, t) {
    if (He) {
      var a = Je.formState;
      if (a !== null) {
        e: {
          var l = Me;
          if (He) {
            if (st) {
              t: {
                for (var u = st, d = Rn; u.nodeType !== 8; ) {
                  if (!d) {
                    u = null;
                    break t;
                  }
                  if (u = Cn(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                d = u.data, u = d === "F!" || d === "F" ? u : null;
              }
              if (u) {
                st = Cn(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            ea(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = It(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xp,
      lastRenderedState: t
    }, a.queue = l, a = qp.bind(
      null,
      Me,
      l
    ), l.dispatch = a, l = Tc(!1), d = Rc.bind(
      null,
      Me,
      !1,
      l.queue
    ), l = It(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, a = U2.bind(
      null,
      Me,
      u,
      d,
      a
    ), u.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function Cp(e) {
    var t = dt();
    return wp(t, Ye, e);
  }
  function wp(e, t, a) {
    if (t = wc(
      e,
      t,
      xp
    )[0], e = Dl($n)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = $i(t);
      } catch (E) {
        throw E === Gi ? xl : E;
      }
    else l = t;
    t = dt();
    var u = t.queue, d = u.dispatch;
    return a !== t.memoizedState && (Me.flags |= 2048, Ga(
      9,
      Ol(),
      P2.bind(null, u, a),
      null
    )), [l, d, e];
  }
  function P2(e, t) {
    e.action = t;
  }
  function Ap(e) {
    var t = dt(), a = Ye;
    if (a !== null)
      return wp(t, a, e);
    dt(), t = t.memoizedState, a = dt();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function Ga(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = Me.updateQueue, t === null && (t = Ec(), Me.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Ol() {
    return { destroy: void 0, resource: void 0 };
  }
  function Tp() {
    return dt().memoizedState;
  }
  function Nl(e, t, a, l) {
    var u = It();
    l = l === void 0 ? null : l, Me.flags |= e, u.memoizedState = Ga(
      1 | t,
      Ol(),
      a,
      l
    );
  }
  function Ki(e, t, a, l) {
    var u = dt();
    l = l === void 0 ? null : l;
    var d = u.memoizedState.inst;
    Ye !== null && l !== null && yc(l, Ye.memoizedState.deps) ? u.memoizedState = Ga(t, d, a, l) : (Me.flags |= e, u.memoizedState = Ga(
      1 | t,
      d,
      a,
      l
    ));
  }
  function Dp(e, t) {
    Nl(8390656, 8, e, t);
  }
  function Op(e, t) {
    Ki(2048, 8, e, t);
  }
  function Np(e, t) {
    return Ki(4, 2, e, t);
  }
  function Mp(e, t) {
    return Ki(4, 4, e, t);
  }
  function kp(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Rp(e, t, a) {
    a = a != null ? a.concat([e]) : null, Ki(4, 4, kp.bind(null, t, e), a);
  }
  function Oc() {
  }
  function jp(e, t) {
    var a = dt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && yc(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function zp(e, t) {
    var a = dt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && yc(t, l[1]))
      return l[0];
    if (l = e(), aa) {
      dr(!0);
      try {
        e();
      } finally {
        dr(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Nc(e, t, a) {
    return a === void 0 || (br & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Um(), Me.lanes |= e, Tr |= e, a);
  }
  function Lp(e, t, a, l) {
    return $t(a, t) ? a : Ha.current !== null ? (e = Nc(e, a, l), $t(e, t) || (Ct = !0), e) : (br & 42) === 0 ? (Ct = !0, e.memoizedState = a) : (e = Um(), Me.lanes |= e, Tr |= e, t);
  }
  function Bp(e, t, a, l, u) {
    var d = re.p;
    re.p = d !== 0 && 8 > d ? d : 8;
    var E = H.T, D = {};
    H.T = D, Rc(e, !1, t, a);
    try {
      var M = u(), I = H.S;
      if (I !== null && I(D, M), M !== null && typeof M == "object" && typeof M.then == "function") {
        var X = z2(
          M,
          l
        );
        Ji(
          e,
          t,
          X,
          tn(e)
        );
      } else
        Ji(
          e,
          t,
          l,
          tn(e)
        );
    } catch (J) {
      Ji(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: J },
        tn()
      );
    } finally {
      re.p = d, H.T = E;
    }
  }
  function I2() {
  }
  function Mc(e, t, a, l) {
    if (e.tag !== 5) throw Error(s(476));
    var u = Up(e).queue;
    Bp(
      e,
      u,
      t,
      ue,
      a === null ? I2 : function() {
        return Pp(e), a(l);
      }
    );
  }
  function Up(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ue,
      baseState: ue,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $n,
        lastRenderedState: ue
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $n,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Pp(e) {
    var t = Up(e).next.queue;
    Ji(e, t, {}, tn());
  }
  function kc() {
    return kt(gs);
  }
  function Ip() {
    return dt().memoizedState;
  }
  function Hp() {
    return dt().memoizedState;
  }
  function H2(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = tn();
          e = yr(a);
          var l = _r(t, e, a);
          l !== null && (nn(l, t, a), Vi(l, t, a)), t = { cache: oc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function q2(e, t, a) {
    var l = tn();
    a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ml(e) ? Zp(t, a) : (a = Ju(e, t, a, l), a !== null && (nn(a, e, l), Gp(a, t, l)));
  }
  function qp(e, t, a) {
    var l = tn();
    Ji(e, t, a, l);
  }
  function Ji(e, t, a, l) {
    var u = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ml(e)) Zp(t, u);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null))
        try {
          var E = t.lastRenderedState, D = d(E, a);
          if (u.hasEagerState = !0, u.eagerState = D, $t(D, E))
            return pl(e, t, u, 0), Je === null && dl(), !1;
        } catch {
        } finally {
        }
      if (a = Ju(e, t, u, l), a !== null)
        return nn(a, e, l), Gp(a, t, l), !0;
    }
    return !1;
  }
  function Rc(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: hf(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ml(e)) {
      if (t) throw Error(s(479));
    } else
      t = Ju(
        e,
        a,
        l,
        2
      ), t !== null && nn(t, e, 2);
  }
  function Ml(e) {
    var t = e.alternate;
    return e === Me || t !== null && t === Me;
  }
  function Zp(e, t) {
    qa = wl = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Gp(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Jh(e, a);
    }
  }
  var kl = {
    readContext: kt,
    use: Tl,
    useCallback: ut,
    useContext: ut,
    useEffect: ut,
    useImperativeHandle: ut,
    useLayoutEffect: ut,
    useInsertionEffect: ut,
    useMemo: ut,
    useReducer: ut,
    useRef: ut,
    useState: ut,
    useDebugValue: ut,
    useDeferredValue: ut,
    useTransition: ut,
    useSyncExternalStore: ut,
    useId: ut,
    useHostTransitionStatus: ut,
    useFormState: ut,
    useActionState: ut,
    useOptimistic: ut,
    useMemoCache: ut,
    useCacheRefresh: ut
  }, Fp = {
    readContext: kt,
    use: Tl,
    useCallback: function(e, t) {
      return It().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: kt,
    useEffect: Dp,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Nl(
        4194308,
        4,
        kp.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Nl(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Nl(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = It();
      t = t === void 0 ? null : t;
      var l = e();
      if (aa) {
        dr(!0);
        try {
          e();
        } finally {
          dr(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = It();
      if (a !== void 0) {
        var u = a(t);
        if (aa) {
          dr(!0);
          try {
            a(t);
          } finally {
            dr(!1);
          }
        }
      } else u = t;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = q2.bind(
        null,
        Me,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = It();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Tc(e);
      var t = e.queue, a = qp.bind(null, Me, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Oc,
    useDeferredValue: function(e, t) {
      var a = It();
      return Nc(a, e, t);
    },
    useTransition: function() {
      var e = Tc(!1);
      return e = Bp.bind(
        null,
        Me,
        e.queue,
        !0,
        !1
      ), It().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = Me, u = It();
      if (He) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = t(), Je === null)
          throw Error(s(349));
        (Ue & 124) !== 0 || hp(l, t, a);
      }
      u.memoizedState = a;
      var d = { value: a, getSnapshot: t };
      return u.queue = d, Dp(pp.bind(null, l, d, e), [
        e
      ]), l.flags |= 2048, Ga(
        9,
        Ol(),
        dp.bind(
          null,
          l,
          d,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = It(), t = Je.identifierPrefix;
      if (He) {
        var a = Yn, l = Vn;
        a = (l & ~(1 << 32 - Qt(l) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Al++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = L2++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: kc,
    useFormState: Ep,
    useActionState: Ep,
    useOptimistic: function(e) {
      var t = It();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Rc.bind(
        null,
        Me,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Cc,
    useCacheRefresh: function() {
      return It().memoizedState = H2.bind(
        null,
        Me
      );
    }
  }, Vp = {
    readContext: kt,
    use: Tl,
    useCallback: jp,
    useContext: kt,
    useEffect: Op,
    useImperativeHandle: Rp,
    useInsertionEffect: Np,
    useLayoutEffect: Mp,
    useMemo: zp,
    useReducer: Dl,
    useRef: Tp,
    useState: function() {
      return Dl($n);
    },
    useDebugValue: Oc,
    useDeferredValue: function(e, t) {
      var a = dt();
      return Lp(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Dl($n)[0], t = dt().memoizedState;
      return [
        typeof e == "boolean" ? e : $i(e),
        t
      ];
    },
    useSyncExternalStore: fp,
    useId: Ip,
    useHostTransitionStatus: kc,
    useFormState: Cp,
    useActionState: Cp,
    useOptimistic: function(e, t) {
      var a = dt();
      return vp(a, Ye, e, t);
    },
    useMemoCache: Cc,
    useCacheRefresh: Hp
  }, Z2 = {
    readContext: kt,
    use: Tl,
    useCallback: jp,
    useContext: kt,
    useEffect: Op,
    useImperativeHandle: Rp,
    useInsertionEffect: Np,
    useLayoutEffect: Mp,
    useMemo: zp,
    useReducer: Ac,
    useRef: Tp,
    useState: function() {
      return Ac($n);
    },
    useDebugValue: Oc,
    useDeferredValue: function(e, t) {
      var a = dt();
      return Ye === null ? Nc(a, e, t) : Lp(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ac($n)[0], t = dt().memoizedState;
      return [
        typeof e == "boolean" ? e : $i(e),
        t
      ];
    },
    useSyncExternalStore: fp,
    useId: Ip,
    useHostTransitionStatus: kc,
    useFormState: Ap,
    useActionState: Ap,
    useOptimistic: function(e, t) {
      var a = dt();
      return Ye !== null ? vp(a, Ye, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Cc,
    useCacheRefresh: Hp
  }, Fa = null, Wi = 0;
  function Rl(e) {
    var t = Wi;
    return Wi += 1, Fa === null && (Fa = []), rp(Fa, e, t);
  }
  function es(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function jl(e, t) {
    throw t.$$typeof === b ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Yp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Xp(e) {
    function t(B, L) {
      if (e) {
        var U = B.deletions;
        U === null ? (B.deletions = [L], B.flags |= 16) : U.push(L);
      }
    }
    function a(B, L) {
      if (!e) return null;
      for (; L !== null; )
        t(B, L), L = L.sibling;
      return null;
    }
    function l(B) {
      for (var L = /* @__PURE__ */ new Map(); B !== null; )
        B.key !== null ? L.set(B.key, B) : L.set(B.index, B), B = B.sibling;
      return L;
    }
    function u(B, L) {
      return B = Fn(B, L), B.index = 0, B.sibling = null, B;
    }
    function d(B, L, U) {
      return B.index = U, e ? (U = B.alternate, U !== null ? (U = U.index, U < L ? (B.flags |= 67108866, L) : U) : (B.flags |= 67108866, L)) : (B.flags |= 1048576, L);
    }
    function E(B) {
      return e && B.alternate === null && (B.flags |= 67108866), B;
    }
    function D(B, L, U, K) {
      return L === null || L.tag !== 6 ? (L = ec(U, B.mode, K), L.return = B, L) : (L = u(L, U), L.return = B, L);
    }
    function M(B, L, U, K) {
      var oe = U.type;
      return oe === f ? X(
        B,
        L,
        U.props.children,
        K,
        U.key
      ) : L !== null && (L.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Z && Yp(oe) === L.type) ? (L = u(L, U.props), es(L, U), L.return = B, L) : (L = gl(
        U.type,
        U.key,
        U.props,
        null,
        B.mode,
        K
      ), es(L, U), L.return = B, L);
    }
    function I(B, L, U, K) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== U.containerInfo || L.stateNode.implementation !== U.implementation ? (L = tc(U, B.mode, K), L.return = B, L) : (L = u(L, U.children || []), L.return = B, L);
    }
    function X(B, L, U, K, oe) {
      return L === null || L.tag !== 7 ? (L = $r(
        U,
        B.mode,
        K,
        oe
      ), L.return = B, L) : (L = u(L, U), L.return = B, L);
    }
    function J(B, L, U) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return L = ec(
          "" + L,
          B.mode,
          U
        ), L.return = B, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case y:
            return U = gl(
              L.type,
              L.key,
              L.props,
              null,
              B.mode,
              U
            ), es(U, L), U.return = B, U;
          case p:
            return L = tc(
              L,
              B.mode,
              U
            ), L.return = B, L;
          case Z:
            var K = L._init;
            return L = K(L._payload), J(B, L, U);
        }
        if (be(L) || ee(L))
          return L = $r(
            L,
            B.mode,
            U,
            null
          ), L.return = B, L;
        if (typeof L.then == "function")
          return J(B, Rl(L), U);
        if (L.$$typeof === N)
          return J(
            B,
            bl(B, L),
            U
          );
        jl(B, L);
      }
      return null;
    }
    function q(B, L, U, K) {
      var oe = L !== null ? L.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return oe !== null ? null : D(B, L, "" + U, K);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case y:
            return U.key === oe ? M(B, L, U, K) : null;
          case p:
            return U.key === oe ? I(B, L, U, K) : null;
          case Z:
            return oe = U._init, U = oe(U._payload), q(B, L, U, K);
        }
        if (be(U) || ee(U))
          return oe !== null ? null : X(B, L, U, K, null);
        if (typeof U.then == "function")
          return q(
            B,
            L,
            Rl(U),
            K
          );
        if (U.$$typeof === N)
          return q(
            B,
            L,
            bl(B, U),
            K
          );
        jl(B, U);
      }
      return null;
    }
    function G(B, L, U, K, oe) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return B = B.get(U) || null, D(L, B, "" + K, oe);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case y:
            return B = B.get(
              K.key === null ? U : K.key
            ) || null, M(L, B, K, oe);
          case p:
            return B = B.get(
              K.key === null ? U : K.key
            ) || null, I(L, B, K, oe);
          case Z:
            var Re = K._init;
            return K = Re(K._payload), G(
              B,
              L,
              U,
              K,
              oe
            );
        }
        if (be(K) || ee(K))
          return B = B.get(U) || null, X(L, B, K, oe, null);
        if (typeof K.then == "function")
          return G(
            B,
            L,
            U,
            Rl(K),
            oe
          );
        if (K.$$typeof === N)
          return G(
            B,
            L,
            U,
            bl(L, K),
            oe
          );
        jl(L, K);
      }
      return null;
    }
    function Se(B, L, U, K) {
      for (var oe = null, Re = null, he = L, _e = L = 0, At = null; he !== null && _e < U.length; _e++) {
        he.index > _e ? (At = he, he = null) : At = he.sibling;
        var Pe = q(
          B,
          he,
          U[_e],
          K
        );
        if (Pe === null) {
          he === null && (he = At);
          break;
        }
        e && he && Pe.alternate === null && t(B, he), L = d(Pe, L, _e), Re === null ? oe = Pe : Re.sibling = Pe, Re = Pe, he = At;
      }
      if (_e === U.length)
        return a(B, he), He && Jr(B, _e), oe;
      if (he === null) {
        for (; _e < U.length; _e++)
          he = J(B, U[_e], K), he !== null && (L = d(
            he,
            L,
            _e
          ), Re === null ? oe = he : Re.sibling = he, Re = he);
        return He && Jr(B, _e), oe;
      }
      for (he = l(he); _e < U.length; _e++)
        At = G(
          he,
          B,
          _e,
          U[_e],
          K
        ), At !== null && (e && At.alternate !== null && he.delete(
          At.key === null ? _e : At.key
        ), L = d(
          At,
          L,
          _e
        ), Re === null ? oe = At : Re.sibling = At, Re = At);
      return e && he.forEach(function(Lr) {
        return t(B, Lr);
      }), He && Jr(B, _e), oe;
    }
    function ve(B, L, U, K) {
      if (U == null) throw Error(s(151));
      for (var oe = null, Re = null, he = L, _e = L = 0, At = null, Pe = U.next(); he !== null && !Pe.done; _e++, Pe = U.next()) {
        he.index > _e ? (At = he, he = null) : At = he.sibling;
        var Lr = q(B, he, Pe.value, K);
        if (Lr === null) {
          he === null && (he = At);
          break;
        }
        e && he && Lr.alternate === null && t(B, he), L = d(Lr, L, _e), Re === null ? oe = Lr : Re.sibling = Lr, Re = Lr, he = At;
      }
      if (Pe.done)
        return a(B, he), He && Jr(B, _e), oe;
      if (he === null) {
        for (; !Pe.done; _e++, Pe = U.next())
          Pe = J(B, Pe.value, K), Pe !== null && (L = d(Pe, L, _e), Re === null ? oe = Pe : Re.sibling = Pe, Re = Pe);
        return He && Jr(B, _e), oe;
      }
      for (he = l(he); !Pe.done; _e++, Pe = U.next())
        Pe = G(he, B, _e, Pe.value, K), Pe !== null && (e && Pe.alternate !== null && he.delete(Pe.key === null ? _e : Pe.key), L = d(Pe, L, _e), Re === null ? oe = Pe : Re.sibling = Pe, Re = Pe);
      return e && he.forEach(function(G_) {
        return t(B, G_);
      }), He && Jr(B, _e), oe;
    }
    function Qe(B, L, U, K) {
      if (typeof U == "object" && U !== null && U.type === f && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case y:
            e: {
              for (var oe = U.key; L !== null; ) {
                if (L.key === oe) {
                  if (oe = U.type, oe === f) {
                    if (L.tag === 7) {
                      a(
                        B,
                        L.sibling
                      ), K = u(
                        L,
                        U.props.children
                      ), K.return = B, B = K;
                      break e;
                    }
                  } else if (L.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Z && Yp(oe) === L.type) {
                    a(
                      B,
                      L.sibling
                    ), K = u(L, U.props), es(K, U), K.return = B, B = K;
                    break e;
                  }
                  a(B, L);
                  break;
                } else t(B, L);
                L = L.sibling;
              }
              U.type === f ? (K = $r(
                U.props.children,
                B.mode,
                K,
                U.key
              ), K.return = B, B = K) : (K = gl(
                U.type,
                U.key,
                U.props,
                null,
                B.mode,
                K
              ), es(K, U), K.return = B, B = K);
            }
            return E(B);
          case p:
            e: {
              for (oe = U.key; L !== null; ) {
                if (L.key === oe)
                  if (L.tag === 4 && L.stateNode.containerInfo === U.containerInfo && L.stateNode.implementation === U.implementation) {
                    a(
                      B,
                      L.sibling
                    ), K = u(L, U.children || []), K.return = B, B = K;
                    break e;
                  } else {
                    a(B, L);
                    break;
                  }
                else t(B, L);
                L = L.sibling;
              }
              K = tc(U, B.mode, K), K.return = B, B = K;
            }
            return E(B);
          case Z:
            return oe = U._init, U = oe(U._payload), Qe(
              B,
              L,
              U,
              K
            );
        }
        if (be(U))
          return Se(
            B,
            L,
            U,
            K
          );
        if (ee(U)) {
          if (oe = ee(U), typeof oe != "function") throw Error(s(150));
          return U = oe.call(U), ve(
            B,
            L,
            U,
            K
          );
        }
        if (typeof U.then == "function")
          return Qe(
            B,
            L,
            Rl(U),
            K
          );
        if (U.$$typeof === N)
          return Qe(
            B,
            L,
            bl(B, U),
            K
          );
        jl(B, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, L !== null && L.tag === 6 ? (a(B, L.sibling), K = u(L, U), K.return = B, B = K) : (a(B, L), K = ec(U, B.mode, K), K.return = B, B = K), E(B)) : a(B, L);
    }
    return function(B, L, U, K) {
      try {
        Wi = 0;
        var oe = Qe(
          B,
          L,
          U,
          K
        );
        return Fa = null, oe;
      } catch (he) {
        if (he === Gi || he === xl) throw he;
        var Re = Kt(29, he, null, B.mode);
        return Re.lanes = K, Re.return = B, Re;
      } finally {
      }
    };
  }
  var Va = Xp(!0), Qp = Xp(!1), mn = j(null), jn = null;
  function Sr(e) {
    var t = e.alternate;
    V(bt, bt.current & 1), V(mn, e), jn === null && (t === null || Ha.current !== null || t.memoizedState !== null) && (jn = e);
  }
  function $p(e) {
    if (e.tag === 22) {
      if (V(bt, bt.current), V(mn, e), jn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (jn = e);
      }
    } else xr();
  }
  function xr() {
    V(bt, bt.current), V(mn, mn.current);
  }
  function Kn(e) {
    F(mn), jn === e && (jn = null), F(bt);
  }
  var bt = j(0);
  function zl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Cf(a)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function jc(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : _({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var zc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = tn(), u = yr(l);
      u.payload = t, a != null && (u.callback = a), t = _r(e, u, l), t !== null && (nn(t, e, l), Vi(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = tn(), u = yr(l);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = _r(e, u, l), t !== null && (nn(t, e, l), Vi(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = tn(), l = yr(a);
      l.tag = 2, t != null && (l.callback = t), t = _r(e, l, a), t !== null && (nn(t, e, a), Vi(t, e, a));
    }
  };
  function Kp(e, t, a, l, u, d, E) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, d, E) : t.prototype && t.prototype.isPureReactComponent ? !Li(a, l) || !Li(u, d) : !0;
  }
  function Jp(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && zc.enqueueReplaceState(t, t.state, null);
  }
  function ia(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t)
        l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = _({}, a));
      for (var u in e)
        a[u] === void 0 && (a[u] = e[u]);
    }
    return a;
  }
  var Ll = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function Wp(e) {
    Ll(e);
  }
  function em(e) {
    console.error(e);
  }
  function tm(e) {
    Ll(e);
  }
  function Bl(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function nm(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Lc(e, t, a) {
    return a = yr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Bl(e, t);
    }, a;
  }
  function rm(e) {
    return e = yr(e), e.tag = 3, e;
  }
  function am(e, t, a, l) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = l.value;
      e.payload = function() {
        return u(d);
      }, e.callback = function() {
        nm(t, a, l);
      };
    }
    var E = a.stateNode;
    E !== null && typeof E.componentDidCatch == "function" && (e.callback = function() {
      nm(t, a, l), typeof u != "function" && (Dr === null ? Dr = /* @__PURE__ */ new Set([this]) : Dr.add(this));
      var D = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: D !== null ? D : ""
      });
    });
  }
  function G2(e, t, a, l, u) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Hi(
        t,
        a,
        u,
        !0
      ), a = mn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return jn === null ? lf() : a.alternate === null && lt === 0 && (lt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, l === fc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), uf(e, l, u)), !1;
          case 22:
            return a.flags |= 65536, l === fc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), uf(e, l, u)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return uf(e, l, u), lf(), !1;
    }
    if (He)
      return t = mn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, l !== ac && (e = Error(s(422), { cause: l }), Ii(fn(e, a)))) : (l !== ac && (t = Error(s(423), {
        cause: l
      }), Ii(
        fn(t, a)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = fn(l, a), u = Lc(
        e.stateNode,
        l,
        u
      ), pc(e, u), lt !== 4 && (lt = 2)), !1;
    var d = Error(s(520), { cause: l });
    if (d = fn(d, a), ls === null ? ls = [d] : ls.push(d), lt !== 4 && (lt = 2), t === null) return !0;
    l = fn(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = u & -u, a.lanes |= e, e = Lc(a.stateNode, l, e), pc(a, e), !1;
        case 1:
          if (t = a.type, d = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Dr === null || !Dr.has(d))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = rm(u), am(
              u,
              e,
              a,
              l
            ), pc(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var im = Error(s(461)), Ct = !1;
  function Tt(e, t, a, l) {
    t.child = e === null ? Qp(t, null, a, l) : Va(
      t,
      e.child,
      a,
      l
    );
  }
  function sm(e, t, a, l, u) {
    a = a.render;
    var d = t.ref;
    if ("ref" in l) {
      var E = {};
      for (var D in l)
        D !== "ref" && (E[D] = l[D]);
    } else E = l;
    return na(t), l = _c(
      e,
      t,
      a,
      E,
      d,
      u
    ), D = bc(), e !== null && !Ct ? (Sc(e, t, u), Jn(e, t, u)) : (He && D && nc(t), t.flags |= 1, Tt(e, t, l, u), t.child);
  }
  function lm(e, t, a, l, u) {
    if (e === null) {
      var d = a.type;
      return typeof d == "function" && !Wu(d) && d.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = d, om(
        e,
        t,
        d,
        l,
        u
      )) : (e = gl(
        a.type,
        null,
        l,
        t,
        t.mode,
        u
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (d = e.child, !Gc(e, u)) {
      var E = d.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Li, a(E, l) && e.ref === t.ref)
        return Jn(e, t, u);
    }
    return t.flags |= 1, e = Fn(d, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function om(e, t, a, l, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Li(d, l) && e.ref === t.ref)
        if (Ct = !1, t.pendingProps = l = d, Gc(e, u))
          (e.flags & 131072) !== 0 && (Ct = !0);
        else
          return t.lanes = e.lanes, Jn(e, t, u);
    }
    return Bc(
      e,
      t,
      a,
      l,
      u
    );
  }
  function um(e, t, a) {
    var l = t.pendingProps, u = l.children, d = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (l = d !== null ? d.baseLanes | a : a, e !== null) {
          for (u = t.child = e.child, d = 0; u !== null; )
            d = d | u.lanes | u.childLanes, u = u.sibling;
          t.childLanes = d & ~l;
        } else t.childLanes = 0, t.child = null;
        return cm(
          e,
          t,
          l,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Sl(
          t,
          d !== null ? d.cachePool : null
        ), d !== null ? op(t, d) : gc(), $p(t);
      else
        return t.lanes = t.childLanes = 536870912, cm(
          e,
          t,
          d !== null ? d.baseLanes | a : a,
          a
        );
    } else
      d !== null ? (Sl(t, d.cachePool), op(t, d), xr(), t.memoizedState = null) : (e !== null && Sl(t, null), gc(), xr());
    return Tt(e, t, u, a), t.child;
  }
  function cm(e, t, a, l) {
    var u = cc();
    return u = u === null ? null : { parent: _t._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && Sl(t, null), gc(), $p(t), e !== null && Hi(e, t, l, !0), null;
  }
  function Ul(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(s(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Bc(e, t, a, l, u) {
    return na(t), a = _c(
      e,
      t,
      a,
      l,
      void 0,
      u
    ), l = bc(), e !== null && !Ct ? (Sc(e, t, u), Jn(e, t, u)) : (He && l && nc(t), t.flags |= 1, Tt(e, t, a, u), t.child);
  }
  function fm(e, t, a, l, u, d) {
    return na(t), t.updateQueue = null, a = cp(
      t,
      l,
      a,
      u
    ), up(e), l = bc(), e !== null && !Ct ? (Sc(e, t, d), Jn(e, t, d)) : (He && l && nc(t), t.flags |= 1, Tt(e, t, a, d), t.child);
  }
  function hm(e, t, a, l, u) {
    if (na(t), t.stateNode === null) {
      var d = La, E = a.contextType;
      typeof E == "object" && E !== null && (d = kt(E)), d = new a(l, d), t.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = zc, t.stateNode = d, d._reactInternals = t, d = t.stateNode, d.props = l, d.state = t.memoizedState, d.refs = {}, hc(t), E = a.contextType, d.context = typeof E == "object" && E !== null ? kt(E) : La, d.state = t.memoizedState, E = a.getDerivedStateFromProps, typeof E == "function" && (jc(
        t,
        a,
        E,
        l
      ), d.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (E = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), E !== d.state && zc.enqueueReplaceState(d, d.state, null), Xi(t, l, d, u), Yi(), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      d = t.stateNode;
      var D = t.memoizedProps, M = ia(a, D);
      d.props = M;
      var I = d.context, X = a.contextType;
      E = La, typeof X == "object" && X !== null && (E = kt(X));
      var J = a.getDerivedStateFromProps;
      X = typeof J == "function" || typeof d.getSnapshotBeforeUpdate == "function", D = t.pendingProps !== D, X || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (D || I !== E) && Jp(
        t,
        d,
        l,
        E
      ), vr = !1;
      var q = t.memoizedState;
      d.state = q, Xi(t, l, d, u), Yi(), I = t.memoizedState, D || q !== I || vr ? (typeof J == "function" && (jc(
        t,
        a,
        J,
        l
      ), I = t.memoizedState), (M = vr || Kp(
        t,
        a,
        M,
        l,
        q,
        I,
        E
      )) ? (X || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = I), d.props = l, d.state = I, d.context = E, l = M) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      d = t.stateNode, dc(e, t), E = t.memoizedProps, X = ia(a, E), d.props = X, J = t.pendingProps, q = d.context, I = a.contextType, M = La, typeof I == "object" && I !== null && (M = kt(I)), D = a.getDerivedStateFromProps, (I = typeof D == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (E !== J || q !== M) && Jp(
        t,
        d,
        l,
        M
      ), vr = !1, q = t.memoizedState, d.state = q, Xi(t, l, d, u), Yi();
      var G = t.memoizedState;
      E !== J || q !== G || vr || e !== null && e.dependencies !== null && _l(e.dependencies) ? (typeof D == "function" && (jc(
        t,
        a,
        D,
        l
      ), G = t.memoizedState), (X = vr || Kp(
        t,
        a,
        X,
        l,
        q,
        G,
        M
      ) || e !== null && e.dependencies !== null && _l(e.dependencies)) ? (I || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, G, M), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        l,
        G,
        M
      )), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || E === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || E === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = G), d.props = l, d.state = G, d.context = M, l = X) : (typeof d.componentDidUpdate != "function" || E === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || E === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return d = l, Ul(e, t), l = (t.flags & 128) !== 0, d || l ? (d = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : d.render(), t.flags |= 1, e !== null && l ? (t.child = Va(
      t,
      e.child,
      null,
      u
    ), t.child = Va(
      t,
      null,
      a,
      u
    )) : Tt(e, t, a, u), t.memoizedState = d.state, e = t.child) : e = Jn(
      e,
      t,
      u
    ), e;
  }
  function dm(e, t, a, l) {
    return Pi(), t.flags |= 256, Tt(e, t, a, l), t.child;
  }
  var Uc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Pc(e) {
    return { baseLanes: e, cachePool: ep() };
  }
  function Ic(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= gn), e;
  }
  function pm(e, t, a) {
    var l = t.pendingProps, u = !1, d = (t.flags & 128) !== 0, E;
    if ((E = d) || (E = e !== null && e.memoizedState === null ? !1 : (bt.current & 2) !== 0), E && (u = !0, t.flags &= -129), E = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (He) {
        if (u ? Sr(t) : xr(), He) {
          var D = st, M;
          if (M = D) {
            e: {
              for (M = D, D = Rn; M.nodeType !== 8; ) {
                if (!D) {
                  D = null;
                  break e;
                }
                if (M = Cn(
                  M.nextSibling
                ), M === null) {
                  D = null;
                  break e;
                }
              }
              D = M;
            }
            D !== null ? (t.memoizedState = {
              dehydrated: D,
              treeContext: Kr !== null ? { id: Vn, overflow: Yn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, M = Kt(
              18,
              null,
              null,
              0
            ), M.stateNode = D, M.return = t, t.child = M, Lt = t, st = null, M = !0) : M = !1;
          }
          M || ea(t);
        }
        if (D = t.memoizedState, D !== null && (D = D.dehydrated, D !== null))
          return Cf(D) ? t.lanes = 32 : t.lanes = 536870912, null;
        Kn(t);
      }
      return D = l.children, l = l.fallback, u ? (xr(), u = t.mode, D = Pl(
        { mode: "hidden", children: D },
        u
      ), l = $r(
        l,
        u,
        a,
        null
      ), D.return = t, l.return = t, D.sibling = l, t.child = D, u = t.child, u.memoizedState = Pc(a), u.childLanes = Ic(
        e,
        E,
        a
      ), t.memoizedState = Uc, l) : (Sr(t), Hc(t, D));
    }
    if (M = e.memoizedState, M !== null && (D = M.dehydrated, D !== null)) {
      if (d)
        t.flags & 256 ? (Sr(t), t.flags &= -257, t = qc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (xr(), t.child = e.child, t.flags |= 128, t = null) : (xr(), u = l.fallback, D = t.mode, l = Pl(
          { mode: "visible", children: l.children },
          D
        ), u = $r(
          u,
          D,
          a,
          null
        ), u.flags |= 2, l.return = t, u.return = t, l.sibling = u, t.child = l, Va(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = Pc(a), l.childLanes = Ic(
          e,
          E,
          a
        ), t.memoizedState = Uc, t = u);
      else if (Sr(t), Cf(D)) {
        if (E = D.nextSibling && D.nextSibling.dataset, E) var I = E.dgst;
        E = I, l = Error(s(419)), l.stack = "", l.digest = E, Ii({ value: l, source: null, stack: null }), t = qc(
          e,
          t,
          a
        );
      } else if (Ct || Hi(e, t, a, !1), E = (a & e.childLanes) !== 0, Ct || E) {
        if (E = Je, E !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : Cu(l), l = (l & (E.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== M.retryLane))
          throw M.retryLane = l, za(e, l), nn(E, e, l), im;
        D.data === "$?" || lf(), t = qc(
          e,
          t,
          a
        );
      } else
        D.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = M.treeContext, st = Cn(
          D.nextSibling
        ), Lt = t, He = !0, Wr = null, Rn = !1, e !== null && (dn[pn++] = Vn, dn[pn++] = Yn, dn[pn++] = Kr, Vn = e.id, Yn = e.overflow, Kr = t), t = Hc(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (xr(), u = l.fallback, D = t.mode, M = e.child, I = M.sibling, l = Fn(M, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = M.subtreeFlags & 65011712, I !== null ? u = Fn(I, u) : (u = $r(
      u,
      D,
      a,
      null
    ), u.flags |= 2), u.return = t, l.return = t, l.sibling = u, t.child = l, l = u, u = t.child, D = e.child.memoizedState, D === null ? D = Pc(a) : (M = D.cachePool, M !== null ? (I = _t._currentValue, M = M.parent !== I ? { parent: I, pool: I } : M) : M = ep(), D = {
      baseLanes: D.baseLanes | a,
      cachePool: M
    }), u.memoizedState = D, u.childLanes = Ic(
      e,
      E,
      a
    ), t.memoizedState = Uc, l) : (Sr(t), a = e.child, e = a.sibling, a = Fn(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (E = t.deletions, E === null ? (t.deletions = [e], t.flags |= 16) : E.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function Hc(e, t) {
    return t = Pl(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Pl(e, t) {
    return e = Kt(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function qc(e, t, a) {
    return Va(t, e.child, null, a), e = Hc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function mm(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), sc(e.return, t, a);
  }
  function Zc(e, t, a, l, u) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: u
    } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = l, d.tail = a, d.tailMode = u);
  }
  function gm(e, t, a) {
    var l = t.pendingProps, u = l.revealOrder, d = l.tail;
    if (Tt(e, t, l.children, a), l = bt.current, (l & 2) !== 0)
      l = l & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && mm(e, a, t);
          else if (e.tag === 19)
            mm(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      l &= 1;
    }
    switch (V(bt, l), u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          e = a.alternate, e !== null && zl(e) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), Zc(
          t,
          !1,
          u,
          a,
          d
        );
        break;
      case "backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && zl(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = a, a = u, u = e;
        }
        Zc(
          t,
          !0,
          a,
          null,
          d
        );
        break;
      case "together":
        Zc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Jn(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Tr |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Hi(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, a = Fn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = Fn(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Gc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && _l(e)));
  }
  function F2(e, t, a) {
    switch (t.tag) {
      case 3:
        we(t, t.stateNode.containerInfo), gr(t, _t, e.memoizedState.cache), Pi();
        break;
      case 27:
      case 5:
        $e(t);
        break;
      case 4:
        we(t, t.stateNode.containerInfo);
        break;
      case 10:
        gr(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Sr(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? pm(e, t, a) : (Sr(t), e = Jn(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Sr(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (Hi(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), u) {
          if (l)
            return gm(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), V(bt, bt.current), l) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, um(e, t, a);
      case 24:
        gr(t, _t, e.memoizedState.cache);
    }
    return Jn(e, t, a);
  }
  function vm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ct = !0;
      else {
        if (!Gc(e, a) && (t.flags & 128) === 0)
          return Ct = !1, F2(
            e,
            t,
            a
          );
        Ct = (e.flags & 131072) !== 0;
      }
    else
      Ct = !1, He && (t.flags & 1048576) !== 0 && Yd(t, yl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType, u = l._init;
          if (l = u(l._payload), t.type = l, typeof l == "function")
            Wu(l) ? (e = ia(l, e), t.tag = 1, t = hm(
              null,
              t,
              l,
              e,
              a
            )) : (t.tag = 0, t = Bc(
              null,
              t,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              if (u = l.$$typeof, u === C) {
                t.tag = 11, t = sm(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break e;
              } else if (u === R) {
                t.tag = 14, t = lm(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break e;
              }
            }
            throw t = de(l) || l, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return Bc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, u = ia(
          l,
          t.pendingProps
        ), hm(
          e,
          t,
          l,
          u,
          a
        );
      case 3:
        e: {
          if (we(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          l = t.pendingProps;
          var d = t.memoizedState;
          u = d.element, dc(e, t), Xi(t, l, null, a);
          var E = t.memoizedState;
          if (l = E.cache, gr(t, _t, l), l !== d.cache && lc(
            t,
            [_t],
            a,
            !0
          ), Yi(), l = E.element, d.isDehydrated)
            if (d = {
              element: l,
              isDehydrated: !1,
              cache: E.cache
            }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
              t = dm(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== u) {
              u = fn(
                Error(s(424)),
                t
              ), Ii(u), t = dm(
                e,
                t,
                l,
                a
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (st = Cn(e.firstChild), Lt = t, He = !0, Wr = null, Rn = !0, a = Qp(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Pi(), l === u) {
              t = Jn(
                e,
                t,
                a
              );
              break e;
            }
            Tt(
              e,
              t,
              l,
              a
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ul(e, t), e === null ? (a = Sg(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : He || (a = t.type, e = t.pendingProps, l = Wl(
          Y.current
        ).createElement(a), l[Mt] = t, l[Ut] = e, Ot(l, a, e), Et(l), t.stateNode = l) : t.memoizedState = Sg(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return $e(t), e === null && He && (l = t.stateNode = yg(
          t.type,
          t.pendingProps,
          Y.current
        ), Lt = t, Rn = !0, u = st, Mr(t.type) ? (wf = u, st = Cn(
          l.firstChild
        )) : st = u), Tt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Ul(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && He && ((u = l = st) && (l = __(
          l,
          t.type,
          t.pendingProps,
          Rn
        ), l !== null ? (t.stateNode = l, Lt = t, st = Cn(
          l.firstChild
        ), Rn = !1, u = !0) : u = !1), u || ea(t)), $e(t), u = t.type, d = t.pendingProps, E = e !== null ? e.memoizedProps : null, l = d.children, Sf(u, d) ? l = null : E !== null && Sf(u, E) && (t.flags |= 32), t.memoizedState !== null && (u = _c(
          e,
          t,
          B2,
          null,
          null,
          a
        ), gs._currentValue = u), Ul(e, t), Tt(e, t, l, a), t.child;
      case 6:
        return e === null && He && ((e = a = st) && (a = b_(
          a,
          t.pendingProps,
          Rn
        ), a !== null ? (t.stateNode = a, Lt = t, st = null, e = !0) : e = !1), e || ea(t)), null;
      case 13:
        return pm(e, t, a);
      case 4:
        return we(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = Va(
          t,
          null,
          l,
          a
        ) : Tt(
          e,
          t,
          l,
          a
        ), t.child;
      case 11:
        return sm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Tt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Tt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Tt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, gr(t, t.type, l.value), Tt(
          e,
          t,
          l.children,
          a
        ), t.child;
      case 9:
        return u = t.type._context, l = t.pendingProps.children, na(t), u = kt(u), l = l(u), t.flags |= 1, Tt(e, t, l, a), t.child;
      case 14:
        return lm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return om(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return gm(e, t, a);
      case 31:
        return l = t.pendingProps, a = t.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (a = Pl(
          l,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = Fn(e.child, l), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return um(e, t, a);
      case 24:
        return na(t), l = kt(_t), e === null ? (u = cc(), u === null && (u = Je, d = oc(), u.pooledCache = d, d.refCount++, d !== null && (u.pooledCacheLanes |= a), u = d), t.memoizedState = {
          parent: l,
          cache: u
        }, hc(t), gr(t, _t, u)) : ((e.lanes & a) !== 0 && (dc(e, t), Xi(t, null, null, a), Yi()), u = e.memoizedState, d = t.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), gr(t, _t, l)) : (l = d.cache, gr(t, _t, l), l !== u.cache && lc(
          t,
          [_t],
          a,
          !0
        ))), Tt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Wn(e) {
    e.flags |= 4;
  }
  function ym(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Ag(t)) {
      if (t = mn.current, t !== null && ((Ue & 4194048) === Ue ? jn !== null : (Ue & 62914560) !== Ue && (Ue & 536870912) === 0 || t !== jn))
        throw Fi = fc, tp;
      e.flags |= 8192;
    }
  }
  function Il(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? $h() : 536870912, e.lanes |= t, $a |= t);
  }
  function ts(e, t) {
    if (!He)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function rt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function V2(e, t, a) {
    var l = t.pendingProps;
    switch (rc(t), t.tag) {
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
        return rt(t), null;
      case 1:
        return rt(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Qn(_t), Ze(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ui(t) ? Wn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, $d())), rt(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (Wn(t), a !== null ? (rt(t), ym(t, a)) : (rt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Wn(t), rt(t), ym(t, a)) : (rt(t), t.flags &= -16777217) : (e.memoizedProps !== l && Wn(t), rt(t), t.flags &= -16777217), null;
      case 27:
        Ve(t), a = Y.current;
        var u = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== l && Wn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(s(166));
            return rt(t), null;
          }
          e = le.current, Ui(t) ? Xd(t) : (e = yg(u, l, a), t.stateNode = e, Wn(t));
        }
        return rt(t), null;
      case 5:
        if (Ve(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Wn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(s(166));
            return rt(t), null;
          }
          if (e = le.current, Ui(t))
            Xd(t);
          else {
            switch (u = Wl(
              Y.current
            ), e) {
              case 1:
                e = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                e = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    e = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    e = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof l.is == "string" ? u.createElement("select", { is: l.is }) : u.createElement("select"), l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                    break;
                  default:
                    e = typeof l.is == "string" ? u.createElement(a, { is: l.is }) : u.createElement(a);
                }
            }
            e[Mt] = t, e[Ut] = l;
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                e.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t)
                  break e;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            t.stateNode = e;
            e: switch (Ot(e, a, l), a) {
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
            e && Wn(t);
          }
        }
        return rt(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Wn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(s(166));
          if (e = Y.current, Ui(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, u = Lt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[Mt] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || fg(e.nodeValue, a)), e || ea(t);
          } else
            e = Wl(e).createTextNode(
              l
            ), e[Mt] = t, t.stateNode = e;
        }
        return rt(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = Ui(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(s(317));
              u[Mt] = t;
            } else
              Pi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            rt(t), u = !1;
          } else
            u = $d(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (Kn(t), t) : (Kn(t), null);
        }
        if (Kn(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = l !== null, e = e !== null && e.memoizedState !== null, a) {
          l = t.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool);
          var d = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (d = l.memoizedState.cachePool.pool), d !== u && (l.flags |= 2048);
        }
        return a !== e && a && (t.child.flags |= 8192), Il(t, t.updateQueue), rt(t), null;
      case 4:
        return Ze(), e === null && gf(t.stateNode.containerInfo), rt(t), null;
      case 10:
        return Qn(t.type), rt(t), null;
      case 19:
        if (F(bt), u = t.memoizedState, u === null) return rt(t), null;
        if (l = (t.flags & 128) !== 0, d = u.rendering, d === null)
          if (l) ts(u, !1);
          else {
            if (lt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (d = zl(e), d !== null) {
                  for (t.flags |= 128, ts(u, !1), e = d.updateQueue, t.updateQueue = e, Il(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Vd(a, e), a = a.sibling;
                  return V(
                    bt,
                    bt.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null && ye() > Zl && (t.flags |= 128, l = !0, ts(u, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = zl(d), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, Il(t, e), ts(u, !0), u.tail === null && u.tailMode === "hidden" && !d.alternate && !He)
                return rt(t), null;
            } else
              2 * ye() - u.renderingStartTime > Zl && a !== 536870912 && (t.flags |= 128, l = !0, ts(u, !1), t.lanes = 4194304);
          u.isBackwards ? (d.sibling = t.child, t.child = d) : (e = u.last, e !== null ? e.sibling = d : t.child = d, u.last = d);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = ye(), t.sibling = null, e = bt.current, V(bt, l ? e & 1 | 2 : e & 1), t) : (rt(t), null);
      case 22:
      case 23:
        return Kn(t), vc(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : rt(t), a = t.updateQueue, a !== null && Il(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && F(ra), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qn(_t), rt(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Y2(e, t) {
    switch (rc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Qn(_t), Ze(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ve(t), null;
      case 13:
        if (Kn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Pi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return F(bt), null;
      case 4:
        return Ze(), null;
      case 10:
        return Qn(t.type), null;
      case 22:
      case 23:
        return Kn(t), vc(), e !== null && F(ra), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Qn(_t), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _m(e, t) {
    switch (rc(t), t.tag) {
      case 3:
        Qn(_t), Ze();
        break;
      case 26:
      case 27:
      case 5:
        Ve(t);
        break;
      case 4:
        Ze();
        break;
      case 13:
        Kn(t);
        break;
      case 19:
        F(bt);
        break;
      case 10:
        Qn(t.type);
        break;
      case 22:
      case 23:
        Kn(t), vc(), e !== null && F(ra);
        break;
      case 24:
        Qn(_t);
    }
  }
  function ns(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var d = a.create, E = a.inst;
            l = d(), E.destroy = l;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (D) {
      Ke(t, t.return, D);
    }
  }
  function Er(e, t, a) {
    try {
      var l = t.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var d = u.next;
        l = d;
        do {
          if ((l.tag & e) === e) {
            var E = l.inst, D = E.destroy;
            if (D !== void 0) {
              E.destroy = void 0, u = t;
              var M = a, I = D;
              try {
                I();
              } catch (X) {
                Ke(
                  u,
                  M,
                  X
                );
              }
            }
          }
          l = l.next;
        } while (l !== d);
      }
    } catch (X) {
      Ke(t, t.return, X);
    }
  }
  function bm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        lp(t, a);
      } catch (l) {
        Ke(e, e.return, l);
      }
    }
  }
  function Sm(e, t, a) {
    a.props = ia(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      Ke(e, t, l);
    }
  }
  function rs(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
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
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l;
      }
    } catch (u) {
      Ke(e, t, u);
    }
  }
  function zn(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          Ke(e, t, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          Ke(e, t, u);
        }
      else a.current = null;
  }
  function xm(e) {
    var t = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (u) {
      Ke(e, e.return, u);
    }
  }
  function Fc(e, t, a) {
    try {
      var l = e.stateNode;
      p_(l, e.type, a, t), l[Ut] = t;
    } catch (u) {
      Ke(e, e.return, u);
    }
  }
  function Em(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Mr(e.type) || e.tag === 4;
  }
  function Vc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Em(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Mr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Yc(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Jl));
    else if (l !== 4 && (l === 27 && Mr(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (Yc(e, t, a), e = e.sibling; e !== null; )
        Yc(e, t, a), e = e.sibling;
  }
  function Hl(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Mr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Hl(e, t, a), e = e.sibling; e !== null; )
        Hl(e, t, a), e = e.sibling;
  }
  function Cm(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Ot(t, l, a), t[Mt] = e, t[Ut] = a;
    } catch (d) {
      Ke(e, e.return, d);
    }
  }
  var er = !1, ct = !1, Xc = !1, wm = typeof WeakSet == "function" ? WeakSet : Set, wt = null;
  function X2(e, t) {
    if (e = e.containerInfo, _f = io, e = Ld(e), Vu(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var u = l.anchorOffset, d = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, d.nodeType;
            } catch {
              a = null;
              break e;
            }
            var E = 0, D = -1, M = -1, I = 0, X = 0, J = e, q = null;
            t: for (; ; ) {
              for (var G; J !== a || u !== 0 && J.nodeType !== 3 || (D = E + u), J !== d || l !== 0 && J.nodeType !== 3 || (M = E + l), J.nodeType === 3 && (E += J.nodeValue.length), (G = J.firstChild) !== null; )
                q = J, J = G;
              for (; ; ) {
                if (J === e) break t;
                if (q === a && ++I === u && (D = E), q === d && ++X === l && (M = E), (G = J.nextSibling) !== null) break;
                J = q, q = J.parentNode;
              }
              J = G;
            }
            a = D === -1 || M === -1 ? null : { start: D, end: M };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (bf = { focusedElem: e, selectionRange: a }, io = !1, wt = t; wt !== null; )
      if (t = wt, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, wt = e;
      else
        for (; wt !== null; ) {
          switch (t = wt, d = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                e = void 0, a = t, u = d.memoizedProps, d = d.memoizedState, l = a.stateNode;
                try {
                  var Se = ia(
                    a.type,
                    u,
                    a.elementType === a.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    Se,
                    d
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ve) {
                  Ke(
                    a,
                    a.return,
                    ve
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Ef(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ef(e);
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
          if (e = t.sibling, e !== null) {
            e.return = t.return, wt = e;
            break;
          }
          wt = t.return;
        }
  }
  function Am(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Cr(e, a), l & 4 && ns(5, a);
        break;
      case 1:
        if (Cr(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (E) {
              Ke(a, a.return, E);
            }
          else {
            var u = ia(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                u,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (E) {
              Ke(
                a,
                a.return,
                E
              );
            }
          }
        l & 64 && bm(a), l & 512 && rs(a, a.return);
        break;
      case 3:
        if (Cr(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            lp(e, t);
          } catch (E) {
            Ke(a, a.return, E);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Cm(a);
      case 26:
      case 5:
        Cr(e, a), t === null && l & 4 && xm(a), l & 512 && rs(a, a.return);
        break;
      case 12:
        Cr(e, a);
        break;
      case 13:
        Cr(e, a), l & 4 && Om(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = r_.bind(
          null,
          a
        ), S_(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || er, !l) {
          t = t !== null && t.memoizedState !== null || ct, u = er;
          var d = ct;
          er = l, (ct = t) && !d ? wr(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Cr(e, a), er = u, ct = d;
        }
        break;
      case 30:
        break;
      default:
        Cr(e, a);
    }
  }
  function Tm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Tm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Tu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var et = null, Ht = !1;
  function tr(e, t, a) {
    for (a = a.child; a !== null; )
      Dm(e, t, a), a = a.sibling;
  }
  function Dm(e, t, a) {
    if (Xt && typeof Xt.onCommitFiberUnmount == "function")
      try {
        Xt.onCommitFiberUnmount(Ci, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        ct || zn(a, t), tr(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        ct || zn(a, t);
        var l = et, u = Ht;
        Mr(a.type) && (et = a.stateNode, Ht = !1), tr(
          e,
          t,
          a
        ), hs(a.stateNode), et = l, Ht = u;
        break;
      case 5:
        ct || zn(a, t);
      case 6:
        if (l = et, u = Ht, et = null, tr(
          e,
          t,
          a
        ), et = l, Ht = u, et !== null)
          if (Ht)
            try {
              (et.nodeType === 9 ? et.body : et.nodeName === "HTML" ? et.ownerDocument.body : et).removeChild(a.stateNode);
            } catch (d) {
              Ke(
                a,
                t,
                d
              );
            }
          else
            try {
              et.removeChild(a.stateNode);
            } catch (d) {
              Ke(
                a,
                t,
                d
              );
            }
        break;
      case 18:
        et !== null && (Ht ? (e = et, gg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), bs(e)) : gg(et, a.stateNode));
        break;
      case 4:
        l = et, u = Ht, et = a.stateNode.containerInfo, Ht = !0, tr(
          e,
          t,
          a
        ), et = l, Ht = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ct || Er(2, a, t), ct || Er(4, a, t), tr(
          e,
          t,
          a
        );
        break;
      case 1:
        ct || (zn(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Sm(
          a,
          t,
          l
        )), tr(
          e,
          t,
          a
        );
        break;
      case 21:
        tr(
          e,
          t,
          a
        );
        break;
      case 22:
        ct = (l = ct) || a.memoizedState !== null, tr(
          e,
          t,
          a
        ), ct = l;
        break;
      default:
        tr(
          e,
          t,
          a
        );
    }
  }
  function Om(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        bs(e);
      } catch (a) {
        Ke(t, t.return, a);
      }
  }
  function Q2(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new wm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new wm()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Qc(e, t) {
    var a = Q2(e);
    t.forEach(function(l) {
      var u = a_.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(u, u));
    });
  }
  function Jt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var u = a[l], d = e, E = t, D = E;
        e: for (; D !== null; ) {
          switch (D.tag) {
            case 27:
              if (Mr(D.type)) {
                et = D.stateNode, Ht = !1;
                break e;
              }
              break;
            case 5:
              et = D.stateNode, Ht = !1;
              break e;
            case 3:
            case 4:
              et = D.stateNode.containerInfo, Ht = !0;
              break e;
          }
          D = D.return;
        }
        if (et === null) throw Error(s(160));
        Dm(d, E, u), et = null, Ht = !1, d = u.alternate, d !== null && (d.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Nm(t, e), t = t.sibling;
  }
  var En = null;
  function Nm(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Jt(t, e), Wt(e), l & 4 && (Er(3, e, e.return), ns(3, e), Er(5, e, e.return));
        break;
      case 1:
        Jt(t, e), Wt(e), l & 512 && (ct || a === null || zn(a, a.return)), l & 64 && er && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var u = En;
        if (Jt(t, e), Wt(e), l & 512 && (ct || a === null || zn(a, a.return)), l & 4) {
          var d = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, u = u.ownerDocument || u;
                  t: switch (l) {
                    case "title":
                      d = u.getElementsByTagName("title")[0], (!d || d[Ti] || d[Mt] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = u.createElement(l), u.head.insertBefore(
                        d,
                        u.querySelector("head > title")
                      )), Ot(d, l, a), d[Mt] = e, Et(d), l = d;
                      break e;
                    case "link":
                      var E = Cg(
                        "link",
                        "href",
                        u
                      ).get(l + (a.href || ""));
                      if (E) {
                        for (var D = 0; D < E.length; D++)
                          if (d = E[D], d.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && d.getAttribute("rel") === (a.rel == null ? null : a.rel) && d.getAttribute("title") === (a.title == null ? null : a.title) && d.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            E.splice(D, 1);
                            break t;
                          }
                      }
                      d = u.createElement(l), Ot(d, l, a), u.head.appendChild(d);
                      break;
                    case "meta":
                      if (E = Cg(
                        "meta",
                        "content",
                        u
                      ).get(l + (a.content || ""))) {
                        for (D = 0; D < E.length; D++)
                          if (d = E[D], d.getAttribute("content") === (a.content == null ? null : "" + a.content) && d.getAttribute("name") === (a.name == null ? null : a.name) && d.getAttribute("property") === (a.property == null ? null : a.property) && d.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && d.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            E.splice(D, 1);
                            break t;
                          }
                      }
                      d = u.createElement(l), Ot(d, l, a), u.head.appendChild(d);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  d[Mt] = e, Et(d), l = d;
                }
                e.stateNode = l;
              } else
                wg(
                  u,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Eg(
                u,
                l,
                e.memoizedProps
              );
          else
            d !== l ? (d === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : d.count--, l === null ? wg(
              u,
              e.type,
              e.stateNode
            ) : Eg(
              u,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && Fc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Jt(t, e), Wt(e), l & 512 && (ct || a === null || zn(a, a.return)), a !== null && l & 4 && Fc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Jt(t, e), Wt(e), l & 512 && (ct || a === null || zn(a, a.return)), e.flags & 32) {
          u = e.stateNode;
          try {
            Da(u, "");
          } catch (G) {
            Ke(e, e.return, G);
          }
        }
        l & 4 && e.stateNode != null && (u = e.memoizedProps, Fc(
          e,
          u,
          a !== null ? a.memoizedProps : u
        )), l & 1024 && (Xc = !0);
        break;
      case 6:
        if (Jt(t, e), Wt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (G) {
            Ke(e, e.return, G);
          }
        }
        break;
      case 3:
        if (no = null, u = En, En = eo(t.containerInfo), Jt(t, e), En = u, Wt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            bs(t.containerInfo);
          } catch (G) {
            Ke(e, e.return, G);
          }
        Xc && (Xc = !1, Mm(e));
        break;
      case 4:
        l = En, En = eo(
          e.stateNode.containerInfo
        ), Jt(t, e), Wt(e), En = l;
        break;
      case 12:
        Jt(t, e), Wt(e);
        break;
      case 13:
        Jt(t, e), Wt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (tf = ye()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Qc(e, l)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var M = a !== null && a.memoizedState !== null, I = er, X = ct;
        if (er = I || u, ct = X || M, Jt(t, e), ct = X, er = I, Wt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || M || er || ct || sa(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                M = a = t;
                try {
                  if (d = M.stateNode, u)
                    E = d.style, typeof E.setProperty == "function" ? E.setProperty("display", "none", "important") : E.display = "none";
                  else {
                    D = M.stateNode;
                    var J = M.memoizedProps.style, q = J != null && J.hasOwnProperty("display") ? J.display : null;
                    D.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                  }
                } catch (G) {
                  Ke(M, M.return, G);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                M = t;
                try {
                  M.stateNode.nodeValue = u ? "" : M.memoizedProps;
                } catch (G) {
                  Ke(M, M.return, G);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, Qc(e, a))));
        break;
      case 19:
        Jt(t, e), Wt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Qc(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Jt(t, e), Wt(e);
    }
  }
  function Wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Em(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, d = Vc(e);
            Hl(e, d, u);
            break;
          case 5:
            var E = a.stateNode;
            a.flags & 32 && (Da(E, ""), a.flags &= -33);
            var D = Vc(e);
            Hl(e, D, E);
            break;
          case 3:
          case 4:
            var M = a.stateNode.containerInfo, I = Vc(e);
            Yc(
              e,
              I,
              M
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (X) {
        Ke(e, e.return, X);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Mm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Mm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Cr(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Am(e, t.alternate, t), t = t.sibling;
  }
  function sa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Er(4, t, t.return), sa(t);
          break;
        case 1:
          zn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Sm(
            t,
            t.return,
            a
          ), sa(t);
          break;
        case 27:
          hs(t.stateNode);
        case 26:
        case 5:
          zn(t, t.return), sa(t);
          break;
        case 22:
          t.memoizedState === null && sa(t);
          break;
        case 30:
          sa(t);
          break;
        default:
          sa(t);
      }
      e = e.sibling;
    }
  }
  function wr(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, u = e, d = t, E = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          wr(
            u,
            d,
            a
          ), ns(4, d);
          break;
        case 1:
          if (wr(
            u,
            d,
            a
          ), l = d, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (I) {
              Ke(l, l.return, I);
            }
          if (l = d, u = l.updateQueue, u !== null) {
            var D = l.stateNode;
            try {
              var M = u.shared.hiddenCallbacks;
              if (M !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < M.length; u++)
                  sp(M[u], D);
            } catch (I) {
              Ke(l, l.return, I);
            }
          }
          a && E & 64 && bm(d), rs(d, d.return);
          break;
        case 27:
          Cm(d);
        case 26:
        case 5:
          wr(
            u,
            d,
            a
          ), a && l === null && E & 4 && xm(d), rs(d, d.return);
          break;
        case 12:
          wr(
            u,
            d,
            a
          );
          break;
        case 13:
          wr(
            u,
            d,
            a
          ), a && E & 4 && Om(u, d);
          break;
        case 22:
          d.memoizedState === null && wr(
            u,
            d,
            a
          ), rs(d, d.return);
          break;
        case 30:
          break;
        default:
          wr(
            u,
            d,
            a
          );
      }
      t = t.sibling;
    }
  }
  function $c(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && qi(a));
  }
  function Kc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && qi(e));
  }
  function Ln(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        km(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function km(e, t, a, l) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ln(
          e,
          t,
          a,
          l
        ), u & 2048 && ns(9, t);
        break;
      case 1:
        Ln(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        Ln(
          e,
          t,
          a,
          l
        ), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && qi(e)));
        break;
      case 12:
        if (u & 2048) {
          Ln(
            e,
            t,
            a,
            l
          ), e = t.stateNode;
          try {
            var d = t.memoizedProps, E = d.id, D = d.onPostCommit;
            typeof D == "function" && D(
              E,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (M) {
            Ke(t, t.return, M);
          }
        } else
          Ln(
            e,
            t,
            a,
            l
          );
        break;
      case 13:
        Ln(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        d = t.stateNode, E = t.alternate, t.memoizedState !== null ? d._visibility & 2 ? Ln(
          e,
          t,
          a,
          l
        ) : as(e, t) : d._visibility & 2 ? Ln(
          e,
          t,
          a,
          l
        ) : (d._visibility |= 2, Ya(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0
        )), u & 2048 && $c(E, t);
        break;
      case 24:
        Ln(
          e,
          t,
          a,
          l
        ), u & 2048 && Kc(t.alternate, t);
        break;
      default:
        Ln(
          e,
          t,
          a,
          l
        );
    }
  }
  function Ya(e, t, a, l, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var d = e, E = t, D = a, M = l, I = E.flags;
      switch (E.tag) {
        case 0:
        case 11:
        case 15:
          Ya(
            d,
            E,
            D,
            M,
            u
          ), ns(8, E);
          break;
        case 23:
          break;
        case 22:
          var X = E.stateNode;
          E.memoizedState !== null ? X._visibility & 2 ? Ya(
            d,
            E,
            D,
            M,
            u
          ) : as(
            d,
            E
          ) : (X._visibility |= 2, Ya(
            d,
            E,
            D,
            M,
            u
          )), u && I & 2048 && $c(
            E.alternate,
            E
          );
          break;
        case 24:
          Ya(
            d,
            E,
            D,
            M,
            u
          ), u && I & 2048 && Kc(E.alternate, E);
          break;
        default:
          Ya(
            d,
            E,
            D,
            M,
            u
          );
      }
      t = t.sibling;
    }
  }
  function as(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, u = l.flags;
        switch (l.tag) {
          case 22:
            as(a, l), u & 2048 && $c(
              l.alternate,
              l
            );
            break;
          case 24:
            as(a, l), u & 2048 && Kc(l.alternate, l);
            break;
          default:
            as(a, l);
        }
        t = t.sibling;
      }
  }
  var is = 8192;
  function Xa(e) {
    if (e.subtreeFlags & is)
      for (e = e.child; e !== null; )
        Rm(e), e = e.sibling;
  }
  function Rm(e) {
    switch (e.tag) {
      case 26:
        Xa(e), e.flags & is && e.memoizedState !== null && j_(
          En,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Xa(e);
        break;
      case 3:
      case 4:
        var t = En;
        En = eo(e.stateNode.containerInfo), Xa(e), En = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = is, is = 16777216, Xa(e), is = t) : Xa(e));
        break;
      default:
        Xa(e);
    }
  }
  function jm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ss(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          wt = l, Lm(
            l,
            e
          );
        }
      jm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        zm(e), e = e.sibling;
  }
  function zm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ss(e), e.flags & 2048 && Er(9, e, e.return);
        break;
      case 3:
        ss(e);
        break;
      case 12:
        ss(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ql(e)) : ss(e);
        break;
      default:
        ss(e);
    }
  }
  function ql(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          wt = l, Lm(
            l,
            e
          );
        }
      jm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Er(8, t, t.return), ql(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, ql(t));
          break;
        default:
          ql(t);
      }
      e = e.sibling;
    }
  }
  function Lm(e, t) {
    for (; wt !== null; ) {
      var a = wt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Er(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          qi(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, wt = l;
      else
        e: for (a = e; wt !== null; ) {
          l = wt;
          var u = l.sibling, d = l.return;
          if (Tm(l), l === a) {
            wt = null;
            break e;
          }
          if (u !== null) {
            u.return = d, wt = u;
            break e;
          }
          wt = d;
        }
    }
  }
  var $2 = {
    getCacheForType: function(e) {
      var t = kt(_t), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, K2 = typeof WeakMap == "function" ? WeakMap : Map, Ge = 0, Je = null, je = null, Ue = 0, Fe = 0, en = null, Ar = !1, Qa = !1, Jc = !1, nr = 0, lt = 0, Tr = 0, la = 0, Wc = 0, gn = 0, $a = 0, ls = null, qt = null, ef = !1, tf = 0, Zl = 1 / 0, Gl = null, Dr = null, Dt = 0, Or = null, Ka = null, Ja = 0, nf = 0, rf = null, Bm = null, os = 0, af = null;
  function tn() {
    if ((Ge & 2) !== 0 && Ue !== 0)
      return Ue & -Ue;
    if (H.T !== null) {
      var e = Pa;
      return e !== 0 ? e : hf();
    }
    return Wh();
  }
  function Um() {
    gn === 0 && (gn = (Ue & 536870912) === 0 || He ? Qh() : 536870912);
    var e = mn.current;
    return e !== null && (e.flags |= 32), gn;
  }
  function nn(e, t, a) {
    (e === Je && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null) && (Wa(e, 0), Nr(
      e,
      Ue,
      gn,
      !1
    )), Ai(e, a), ((Ge & 2) === 0 || e !== Je) && (e === Je && ((Ge & 2) === 0 && (la |= a), lt === 4 && Nr(
      e,
      Ue,
      gn,
      !1
    )), Bn(e));
  }
  function Pm(e, t, a) {
    if ((Ge & 6) !== 0) throw Error(s(327));
    var l = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || wi(e, t), u = l ? e_(e, t) : of(e, t, !0), d = l;
    do {
      if (u === 0) {
        Qa && !l && Nr(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, d && !J2(a)) {
          u = of(e, t, !1), d = !1;
          continue;
        }
        if (u === 2) {
          if (d = t, e.errorRecoveryDisabledLanes & d)
            var E = 0;
          else
            E = e.pendingLanes & -536870913, E = E !== 0 ? E : E & 536870912 ? 536870912 : 0;
          if (E !== 0) {
            t = E;
            e: {
              var D = e;
              u = ls;
              var M = D.current.memoizedState.isDehydrated;
              if (M && (Wa(D, E).flags |= 256), E = of(
                D,
                E,
                !1
              ), E !== 2) {
                if (Jc && !M) {
                  D.errorRecoveryDisabledLanes |= d, la |= d, u = 4;
                  break e;
                }
                d = qt, qt = u, d !== null && (qt === null ? qt = d : qt.push.apply(
                  qt,
                  d
                ));
              }
              u = E;
            }
            if (d = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Wa(e, 0), Nr(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, d = u, d) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Nr(
                l,
                t,
                gn,
                !Ar
              );
              break e;
            case 2:
              qt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (u = tf + 300 - ye(), 10 < u)) {
            if (Nr(
              l,
              t,
              gn,
              !Ar
            ), tl(l, 0, !0) !== 0) break e;
            l.timeoutHandle = pg(
              Im.bind(
                null,
                l,
                a,
                qt,
                Gl,
                ef,
                t,
                gn,
                la,
                $a,
                Ar,
                d,
                2,
                -0,
                0
              ),
              u
            );
            break e;
          }
          Im(
            l,
            a,
            qt,
            Gl,
            ef,
            t,
            gn,
            la,
            $a,
            Ar,
            d,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Bn(e);
  }
  function Im(e, t, a, l, u, d, E, D, M, I, X, J, q, G) {
    if (e.timeoutHandle = -1, J = t.subtreeFlags, (J & 8192 || (J & 16785408) === 16785408) && (ms = { stylesheets: null, count: 0, unsuspend: R_ }, Rm(t), J = z_(), J !== null)) {
      e.cancelPendingCommit = J(
        Ym.bind(
          null,
          e,
          t,
          d,
          a,
          l,
          u,
          E,
          D,
          M,
          X,
          1,
          q,
          G
        )
      ), Nr(e, d, E, !I);
      return;
    }
    Ym(
      e,
      t,
      d,
      a,
      l,
      u,
      E,
      D,
      M
    );
  }
  function J2(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var u = a[l], d = u.getSnapshot;
          u = u.value;
          try {
            if (!$t(d(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Nr(e, t, a, l) {
    t &= ~Wc, t &= ~la, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var d = 31 - Qt(u), E = 1 << d;
      l[d] = -1, u &= ~E;
    }
    a !== 0 && Kh(e, a, t);
  }
  function Fl() {
    return (Ge & 6) === 0 ? (us(0), !1) : !0;
  }
  function sf() {
    if (je !== null) {
      if (Fe === 0)
        var e = je.return;
      else
        e = je, Xn = ta = null, xc(e), Fa = null, Wi = 0, e = je;
      for (; e !== null; )
        _m(e.alternate, e), e = e.return;
      je = null;
    }
  }
  function Wa(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, g_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), sf(), Je = e, je = a = Fn(e.current, null), Ue = t, Fe = 0, en = null, Ar = !1, Qa = wi(e, t), Jc = !1, $a = gn = Wc = la = Tr = lt = 0, qt = ls = null, ef = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var u = 31 - Qt(l), d = 1 << u;
        t |= e[u], l &= ~d;
      }
    return nr = t, dl(), a;
  }
  function Hm(e, t) {
    Me = null, H.H = kl, t === Gi || t === xl ? (t = ap(), Fe = 3) : t === tp ? (t = ap(), Fe = 4) : Fe = t === im ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, en = t, je === null && (lt = 1, Bl(
      e,
      fn(t, e.current)
    ));
  }
  function qm() {
    var e = H.H;
    return H.H = kl, e === null ? kl : e;
  }
  function Zm() {
    var e = H.A;
    return H.A = $2, e;
  }
  function lf() {
    lt = 4, Ar || (Ue & 4194048) !== Ue && mn.current !== null || (Qa = !0), (Tr & 134217727) === 0 && (la & 134217727) === 0 || Je === null || Nr(
      Je,
      Ue,
      gn,
      !1
    );
  }
  function of(e, t, a) {
    var l = Ge;
    Ge |= 2;
    var u = qm(), d = Zm();
    (Je !== e || Ue !== t) && (Gl = null, Wa(e, t)), t = !1;
    var E = lt;
    e: do
      try {
        if (Fe !== 0 && je !== null) {
          var D = je, M = en;
          switch (Fe) {
            case 8:
              sf(), E = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              mn.current === null && (t = !0);
              var I = Fe;
              if (Fe = 0, en = null, ei(e, D, M, I), a && Qa) {
                E = 0;
                break e;
              }
              break;
            default:
              I = Fe, Fe = 0, en = null, ei(e, D, M, I);
          }
        }
        W2(), E = lt;
        break;
      } catch (X) {
        Hm(e, X);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Xn = ta = null, Ge = l, H.H = u, H.A = d, je === null && (Je = null, Ue = 0, dl()), E;
  }
  function W2() {
    for (; je !== null; ) Gm(je);
  }
  function e_(e, t) {
    var a = Ge;
    Ge |= 2;
    var l = qm(), u = Zm();
    Je !== e || Ue !== t ? (Gl = null, Zl = ye() + 500, Wa(e, t)) : Qa = wi(
      e,
      t
    );
    e: do
      try {
        if (Fe !== 0 && je !== null) {
          t = je;
          var d = en;
          t: switch (Fe) {
            case 1:
              Fe = 0, en = null, ei(e, t, d, 1);
              break;
            case 2:
            case 9:
              if (np(d)) {
                Fe = 0, en = null, Fm(t);
                break;
              }
              t = function() {
                Fe !== 2 && Fe !== 9 || Je !== e || (Fe = 7), Bn(e);
              }, d.then(t, t);
              break e;
            case 3:
              Fe = 7;
              break e;
            case 4:
              Fe = 5;
              break e;
            case 7:
              np(d) ? (Fe = 0, en = null, Fm(t)) : (Fe = 0, en = null, ei(e, t, d, 7));
              break;
            case 5:
              var E = null;
              switch (je.tag) {
                case 26:
                  E = je.memoizedState;
                case 5:
                case 27:
                  var D = je;
                  if (!E || Ag(E)) {
                    Fe = 0, en = null;
                    var M = D.sibling;
                    if (M !== null) je = M;
                    else {
                      var I = D.return;
                      I !== null ? (je = I, Vl(I)) : je = null;
                    }
                    break t;
                  }
              }
              Fe = 0, en = null, ei(e, t, d, 5);
              break;
            case 6:
              Fe = 0, en = null, ei(e, t, d, 6);
              break;
            case 8:
              sf(), lt = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        t_();
        break;
      } catch (X) {
        Hm(e, X);
      }
    while (!0);
    return Xn = ta = null, H.H = l, H.A = u, Ge = a, je !== null ? 0 : (Je = null, Ue = 0, dl(), lt);
  }
  function t_() {
    for (; je !== null && !Oe(); )
      Gm(je);
  }
  function Gm(e) {
    var t = vm(e.alternate, e, nr);
    e.memoizedProps = e.pendingProps, t === null ? Vl(e) : je = t;
  }
  function Fm(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = fm(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ue
        );
        break;
      case 11:
        t = fm(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ue
        );
        break;
      case 5:
        xc(t);
      default:
        _m(a, t), t = je = Vd(t, nr), t = vm(a, t, nr);
    }
    e.memoizedProps = e.pendingProps, t === null ? Vl(e) : je = t;
  }
  function ei(e, t, a, l) {
    Xn = ta = null, xc(t), Fa = null, Wi = 0;
    var u = t.return;
    try {
      if (G2(
        e,
        u,
        t,
        a,
        Ue
      )) {
        lt = 1, Bl(
          e,
          fn(a, e.current)
        ), je = null;
        return;
      }
    } catch (d) {
      if (u !== null) throw je = u, d;
      lt = 1, Bl(
        e,
        fn(a, e.current)
      ), je = null;
      return;
    }
    t.flags & 32768 ? (He || l === 1 ? e = !0 : Qa || (Ue & 536870912) !== 0 ? e = !1 : (Ar = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = mn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Vm(t, e)) : Vl(t);
  }
  function Vl(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Vm(
          t,
          Ar
        );
        return;
      }
      e = t.return;
      var a = V2(
        t.alternate,
        t,
        nr
      );
      if (a !== null) {
        je = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        je = t;
        return;
      }
      je = t = e;
    } while (t !== null);
    lt === 0 && (lt = 5);
  }
  function Vm(e, t) {
    do {
      var a = Y2(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, je = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        je = e;
        return;
      }
      je = e = a;
    } while (e !== null);
    lt = 6, je = null;
  }
  function Ym(e, t, a, l, u, d, E, D, M) {
    e.cancelPendingCommit = null;
    do
      Yl();
    while (Dt !== 0);
    if ((Ge & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (d = t.lanes | t.childLanes, d |= Ku, R1(
        e,
        a,
        d,
        E,
        D,
        M
      ), e === Je && (je = Je = null, Ue = 0), Ka = t, Or = e, Ja = a, nf = d, rf = u, Bm = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, i_(Ie, function() {
        return Jm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = H.T, H.T = null, u = re.p, re.p = 2, E = Ge, Ge |= 4;
        try {
          X2(e, t, a);
        } finally {
          Ge = E, re.p = u, H.T = l;
        }
      }
      Dt = 1, Xm(), Qm(), $m();
    }
  }
  function Xm() {
    if (Dt === 1) {
      Dt = 0;
      var e = Or, t = Ka, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = H.T, H.T = null;
        var l = re.p;
        re.p = 2;
        var u = Ge;
        Ge |= 4;
        try {
          Nm(t, e);
          var d = bf, E = Ld(e.containerInfo), D = d.focusedElem, M = d.selectionRange;
          if (E !== D && D && D.ownerDocument && zd(
            D.ownerDocument.documentElement,
            D
          )) {
            if (M !== null && Vu(D)) {
              var I = M.start, X = M.end;
              if (X === void 0 && (X = I), "selectionStart" in D)
                D.selectionStart = I, D.selectionEnd = Math.min(
                  X,
                  D.value.length
                );
              else {
                var J = D.ownerDocument || document, q = J && J.defaultView || window;
                if (q.getSelection) {
                  var G = q.getSelection(), Se = D.textContent.length, ve = Math.min(M.start, Se), Qe = M.end === void 0 ? ve : Math.min(M.end, Se);
                  !G.extend && ve > Qe && (E = Qe, Qe = ve, ve = E);
                  var B = jd(
                    D,
                    ve
                  ), L = jd(
                    D,
                    Qe
                  );
                  if (B && L && (G.rangeCount !== 1 || G.anchorNode !== B.node || G.anchorOffset !== B.offset || G.focusNode !== L.node || G.focusOffset !== L.offset)) {
                    var U = J.createRange();
                    U.setStart(B.node, B.offset), G.removeAllRanges(), ve > Qe ? (G.addRange(U), G.extend(L.node, L.offset)) : (U.setEnd(L.node, L.offset), G.addRange(U));
                  }
                }
              }
            }
            for (J = [], G = D; G = G.parentNode; )
              G.nodeType === 1 && J.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof D.focus == "function" && D.focus(), D = 0; D < J.length; D++) {
              var K = J[D];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          io = !!_f, bf = _f = null;
        } finally {
          Ge = u, re.p = l, H.T = a;
        }
      }
      e.current = t, Dt = 2;
    }
  }
  function Qm() {
    if (Dt === 2) {
      Dt = 0;
      var e = Or, t = Ka, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = H.T, H.T = null;
        var l = re.p;
        re.p = 2;
        var u = Ge;
        Ge |= 4;
        try {
          Am(e, t.alternate, t);
        } finally {
          Ge = u, re.p = l, H.T = a;
        }
      }
      Dt = 3;
    }
  }
  function $m() {
    if (Dt === 4 || Dt === 3) {
      Dt = 0, qe();
      var e = Or, t = Ka, a = Ja, l = Bm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Dt = 5 : (Dt = 0, Ka = Or = null, Km(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (u === 0 && (Dr = null), wu(a), t = t.stateNode, Xt && typeof Xt.onCommitFiberRoot == "function")
        try {
          Xt.onCommitFiberRoot(
            Ci,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = H.T, u = re.p, re.p = 2, H.T = null;
        try {
          for (var d = e.onRecoverableError, E = 0; E < l.length; E++) {
            var D = l[E];
            d(D.value, {
              componentStack: D.stack
            });
          }
        } finally {
          H.T = t, re.p = u;
        }
      }
      (Ja & 3) !== 0 && Yl(), Bn(e), u = e.pendingLanes, (a & 4194090) !== 0 && (u & 42) !== 0 ? e === af ? os++ : (os = 0, af = e) : os = 0, us(0);
    }
  }
  function Km(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, qi(t)));
  }
  function Yl(e) {
    return Xm(), Qm(), $m(), Jm();
  }
  function Jm() {
    if (Dt !== 5) return !1;
    var e = Or, t = nf;
    nf = 0;
    var a = wu(Ja), l = H.T, u = re.p;
    try {
      re.p = 32 > a ? 32 : a, H.T = null, a = rf, rf = null;
      var d = Or, E = Ja;
      if (Dt = 0, Ka = Or = null, Ja = 0, (Ge & 6) !== 0) throw Error(s(331));
      var D = Ge;
      if (Ge |= 4, zm(d.current), km(
        d,
        d.current,
        E,
        a
      ), Ge = D, us(0, !1), Xt && typeof Xt.onPostCommitFiberRoot == "function")
        try {
          Xt.onPostCommitFiberRoot(Ci, d);
        } catch {
        }
      return !0;
    } finally {
      re.p = u, H.T = l, Km(e, t);
    }
  }
  function Wm(e, t, a) {
    t = fn(a, t), t = Lc(e.stateNode, t, 2), e = _r(e, t, 2), e !== null && (Ai(e, 2), Bn(e));
  }
  function Ke(e, t, a) {
    if (e.tag === 3)
      Wm(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Wm(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Dr === null || !Dr.has(l))) {
            e = fn(a, e), a = rm(2), l = _r(t, a, 2), l !== null && (am(
              a,
              l,
              t,
              e
            ), Ai(l, 2), Bn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function uf(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new K2();
      var u = /* @__PURE__ */ new Set();
      l.set(t, u);
    } else
      u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u));
    u.has(a) || (Jc = !0, u.add(a), e = n_.bind(null, e, t, a), t.then(e, e));
  }
  function n_(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Je === e && (Ue & a) === a && (lt === 4 || lt === 3 && (Ue & 62914560) === Ue && 300 > ye() - tf ? (Ge & 2) === 0 && Wa(e, 0) : Wc |= a, $a === Ue && ($a = 0)), Bn(e);
  }
  function eg(e, t) {
    t === 0 && (t = $h()), e = za(e, t), e !== null && (Ai(e, t), Bn(e));
  }
  function r_(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), eg(e, a);
  }
  function a_(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, u = e.memoizedState;
        u !== null && (a = u.retryLane);
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
    l !== null && l.delete(t), eg(e, a);
  }
  function i_(e, t) {
    return ie(e, t);
  }
  var Xl = null, ti = null, cf = !1, Ql = !1, ff = !1, oa = 0;
  function Bn(e) {
    e !== ti && e.next === null && (ti === null ? Xl = ti = e : ti = ti.next = e), Ql = !0, cf || (cf = !0, l_());
  }
  function us(e, t) {
    if (!ff && Ql) {
      ff = !0;
      do
        for (var a = !1, l = Xl; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var E = l.suspendedLanes, D = l.pingedLanes;
              d = (1 << 31 - Qt(42 | e) + 1) - 1, d &= u & ~(E & ~D), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (a = !0, ag(l, d));
          } else
            d = Ue, d = tl(
              l,
              l === Je ? d : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (d & 3) === 0 || wi(l, d) || (a = !0, ag(l, d));
          l = l.next;
        }
      while (a);
      ff = !1;
    }
  }
  function s_() {
    tg();
  }
  function tg() {
    Ql = cf = !1;
    var e = 0;
    oa !== 0 && (m_() && (e = oa), oa = 0);
    for (var t = ye(), a = null, l = Xl; l !== null; ) {
      var u = l.next, d = ng(l, t);
      d === 0 ? (l.next = null, a === null ? Xl = u : a.next = u, u === null && (ti = a)) : (a = l, (e !== 0 || (d & 3) !== 0) && (Ql = !0)), l = u;
    }
    us(e);
  }
  function ng(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d; ) {
      var E = 31 - Qt(d), D = 1 << E, M = u[E];
      M === -1 ? ((D & a) === 0 || (D & l) !== 0) && (u[E] = k1(D, t)) : M <= t && (e.expiredLanes |= D), d &= ~D;
    }
    if (t = Je, a = Ue, a = tl(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && ae(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || wi(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && ae(l), wu(a)) {
        case 2:
        case 8:
          a = Mn;
          break;
        case 32:
          a = Ie;
          break;
        case 268435456:
          a = Js;
          break;
        default:
          a = Ie;
      }
      return l = rg.bind(null, e), a = ie(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && ae(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function rg(e, t) {
    if (Dt !== 0 && Dt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Yl() && e.callbackNode !== a)
      return null;
    var l = Ue;
    return l = tl(
      e,
      e === Je ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Pm(e, l, t), ng(e, ye()), e.callbackNode != null && e.callbackNode === a ? rg.bind(null, e) : null);
  }
  function ag(e, t) {
    if (Yl()) return null;
    Pm(e, t, !0);
  }
  function l_() {
    v_(function() {
      (Ge & 6) !== 0 ? ie(
        zt,
        s_
      ) : tg();
    });
  }
  function hf() {
    return oa === 0 && (oa = Qh()), oa;
  }
  function ig(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : sl("" + e);
  }
  function sg(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function o_(e, t, a, l, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var d = ig(
        (u[Ut] || null).action
      ), E = l.submitter;
      E && (t = (t = E[Ut] || null) ? ig(t.formAction) : E.getAttribute("formAction"), t !== null && (d = t, E = null));
      var D = new cl(
        "action",
        "action",
        null,
        l,
        u
      );
      e.push({
        event: D,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (oa !== 0) {
                  var M = E ? sg(u, E) : new FormData(u);
                  Mc(
                    a,
                    {
                      pending: !0,
                      data: M,
                      method: u.method,
                      action: d
                    },
                    null,
                    M
                  );
                }
              } else
                typeof d == "function" && (D.preventDefault(), M = E ? sg(u, E) : new FormData(u), Mc(
                  a,
                  {
                    pending: !0,
                    data: M,
                    method: u.method,
                    action: d
                  },
                  d,
                  M
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var df = 0; df < $u.length; df++) {
    var pf = $u[df], u_ = pf.toLowerCase(), c_ = pf[0].toUpperCase() + pf.slice(1);
    xn(
      u_,
      "on" + c_
    );
  }
  xn(Pd, "onAnimationEnd"), xn(Id, "onAnimationIteration"), xn(Hd, "onAnimationStart"), xn("dblclick", "onDoubleClick"), xn("focusin", "onFocus"), xn("focusout", "onBlur"), xn(T2, "onTransitionRun"), xn(D2, "onTransitionStart"), xn(O2, "onTransitionCancel"), xn(qd, "onTransitionEnd"), wa("onMouseEnter", ["mouseout", "mouseover"]), wa("onMouseLeave", ["mouseout", "mouseover"]), wa("onPointerEnter", ["pointerout", "pointerover"]), wa("onPointerLeave", ["pointerout", "pointerover"]), Vr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Vr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Vr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Vr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Vr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Vr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var cs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), f_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cs)
  );
  function lg(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], u = l.event;
      l = l.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var E = l.length - 1; 0 <= E; E--) {
            var D = l[E], M = D.instance, I = D.currentTarget;
            if (D = D.listener, M !== d && u.isPropagationStopped())
              break e;
            d = D, u.currentTarget = I;
            try {
              d(u);
            } catch (X) {
              Ll(X);
            }
            u.currentTarget = null, d = M;
          }
        else
          for (E = 0; E < l.length; E++) {
            if (D = l[E], M = D.instance, I = D.currentTarget, D = D.listener, M !== d && u.isPropagationStopped())
              break e;
            d = D, u.currentTarget = I;
            try {
              d(u);
            } catch (X) {
              Ll(X);
            }
            u.currentTarget = null, d = M;
          }
      }
    }
  }
  function ze(e, t) {
    var a = t[Au];
    a === void 0 && (a = t[Au] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (og(t, e, 2, !1), a.add(l));
  }
  function mf(e, t, a) {
    var l = 0;
    t && (l |= 4), og(
      a,
      e,
      l,
      t
    );
  }
  var $l = "_reactListening" + Math.random().toString(36).slice(2);
  function gf(e) {
    if (!e[$l]) {
      e[$l] = !0, td.forEach(function(a) {
        a !== "selectionchange" && (f_.has(a) || mf(a, !1, e), mf(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$l] || (t[$l] = !0, mf("selectionchange", !1, t));
    }
  }
  function og(e, t, a, l) {
    switch (kg(t)) {
      case 2:
        var u = U_;
        break;
      case 8:
        u = P_;
        break;
      default:
        u = Nf;
    }
    a = u.bind(
      null,
      t,
      a,
      e
    ), u = void 0, !Bu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, a, !0) : u !== void 0 ? e.addEventListener(t, a, {
      passive: u
    }) : e.addEventListener(t, a, !1);
  }
  function vf(e, t, a, l, u) {
    var d = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var E = l.tag;
        if (E === 3 || E === 4) {
          var D = l.stateNode.containerInfo;
          if (D === u) break;
          if (E === 4)
            for (E = l.return; E !== null; ) {
              var M = E.tag;
              if ((M === 3 || M === 4) && E.stateNode.containerInfo === u)
                return;
              E = E.return;
            }
          for (; D !== null; ) {
            if (E = xa(D), E === null) return;
            if (M = E.tag, M === 5 || M === 6 || M === 26 || M === 27) {
              l = d = E;
              continue e;
            }
            D = D.parentNode;
          }
        }
        l = l.return;
      }
    md(function() {
      var I = d, X = zu(a), J = [];
      e: {
        var q = Zd.get(e);
        if (q !== void 0) {
          var G = cl, Se = e;
          switch (e) {
            case "keypress":
              if (ol(a) === 0) break e;
            case "keydown":
            case "keyup":
              G = i2;
              break;
            case "focusin":
              Se = "focus", G = Hu;
              break;
            case "focusout":
              Se = "blur", G = Hu;
              break;
            case "beforeblur":
            case "afterblur":
              G = Hu;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = yd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = Y1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = o2;
              break;
            case Pd:
            case Id:
            case Hd:
              G = $1;
              break;
            case qd:
              G = c2;
              break;
            case "scroll":
            case "scrollend":
              G = F1;
              break;
            case "wheel":
              G = h2;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = J1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = bd;
              break;
            case "toggle":
            case "beforetoggle":
              G = p2;
          }
          var ve = (t & 4) !== 0, Qe = !ve && (e === "scroll" || e === "scrollend"), B = ve ? q !== null ? q + "Capture" : null : q;
          ve = [];
          for (var L = I, U; L !== null; ) {
            var K = L;
            if (U = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || U === null || B === null || (K = Oi(L, B), K != null && ve.push(
              fs(L, K, U)
            )), Qe) break;
            L = L.return;
          }
          0 < ve.length && (q = new G(
            q,
            Se,
            null,
            a,
            X
          ), J.push({ event: q, listeners: ve }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (q = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", q && a !== ju && (Se = a.relatedTarget || a.fromElement) && (xa(Se) || Se[Sa]))
            break e;
          if ((G || q) && (q = X.window === X ? X : (q = X.ownerDocument) ? q.defaultView || q.parentWindow : window, G ? (Se = a.relatedTarget || a.toElement, G = I, Se = Se ? xa(Se) : null, Se !== null && (Qe = c(Se), ve = Se.tag, Se !== Qe || ve !== 5 && ve !== 27 && ve !== 6) && (Se = null)) : (G = null, Se = I), G !== Se)) {
            if (ve = yd, K = "onMouseLeave", B = "onMouseEnter", L = "mouse", (e === "pointerout" || e === "pointerover") && (ve = bd, K = "onPointerLeave", B = "onPointerEnter", L = "pointer"), Qe = G == null ? q : Di(G), U = Se == null ? q : Di(Se), q = new ve(
              K,
              L + "leave",
              G,
              a,
              X
            ), q.target = Qe, q.relatedTarget = U, K = null, xa(X) === I && (ve = new ve(
              B,
              L + "enter",
              Se,
              a,
              X
            ), ve.target = U, ve.relatedTarget = Qe, K = ve), Qe = K, G && Se)
              t: {
                for (ve = G, B = Se, L = 0, U = ve; U; U = ni(U))
                  L++;
                for (U = 0, K = B; K; K = ni(K))
                  U++;
                for (; 0 < L - U; )
                  ve = ni(ve), L--;
                for (; 0 < U - L; )
                  B = ni(B), U--;
                for (; L--; ) {
                  if (ve === B || B !== null && ve === B.alternate)
                    break t;
                  ve = ni(ve), B = ni(B);
                }
                ve = null;
              }
            else ve = null;
            G !== null && ug(
              J,
              q,
              G,
              ve,
              !1
            ), Se !== null && Qe !== null && ug(
              J,
              Qe,
              Se,
              ve,
              !0
            );
          }
        }
        e: {
          if (q = I ? Di(I) : window, G = q.nodeName && q.nodeName.toLowerCase(), G === "select" || G === "input" && q.type === "file")
            var oe = Dd;
          else if (Ad(q))
            if (Od)
              oe = C2;
            else {
              oe = x2;
              var Re = S2;
            }
          else
            G = q.nodeName, !G || G.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? I && Ru(I.elementType) && (oe = Dd) : oe = E2;
          if (oe && (oe = oe(e, I))) {
            Td(
              J,
              oe,
              a,
              X
            );
            break e;
          }
          Re && Re(e, q, I), e === "focusout" && I && q.type === "number" && I.memoizedProps.value != null && ku(q, "number", q.value);
        }
        switch (Re = I ? Di(I) : window, e) {
          case "focusin":
            (Ad(Re) || Re.contentEditable === "true") && (ka = Re, Yu = I, Bi = null);
            break;
          case "focusout":
            Bi = Yu = ka = null;
            break;
          case "mousedown":
            Xu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xu = !1, Bd(J, a, X);
            break;
          case "selectionchange":
            if (A2) break;
          case "keydown":
          case "keyup":
            Bd(J, a, X);
        }
        var he;
        if (Zu)
          e: {
            switch (e) {
              case "compositionstart":
                var _e = "onCompositionStart";
                break e;
              case "compositionend":
                _e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _e = "onCompositionUpdate";
                break e;
            }
            _e = void 0;
          }
        else
          Ma ? Cd(e, a) && (_e = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (_e = "onCompositionStart");
        _e && (Sd && a.locale !== "ko" && (Ma || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && Ma && (he = gd()) : (mr = X, Uu = "value" in mr ? mr.value : mr.textContent, Ma = !0)), Re = Kl(I, _e), 0 < Re.length && (_e = new _d(
          _e,
          e,
          null,
          a,
          X
        ), J.push({ event: _e, listeners: Re }), he ? _e.data = he : (he = wd(a), he !== null && (_e.data = he)))), (he = g2 ? v2(e, a) : y2(e, a)) && (_e = Kl(I, "onBeforeInput"), 0 < _e.length && (Re = new _d(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          X
        ), J.push({
          event: Re,
          listeners: _e
        }), Re.data = he)), o_(
          J,
          e,
          I,
          a,
          X
        );
      }
      lg(J, t);
    });
  }
  function fs(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Kl(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var u = e, d = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || d === null || (u = Oi(e, a), u != null && l.unshift(
        fs(e, u, d)
      ), u = Oi(e, t), u != null && l.push(
        fs(e, u, d)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function ni(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ug(e, t, a, l, u) {
    for (var d = t._reactName, E = []; a !== null && a !== l; ) {
      var D = a, M = D.alternate, I = D.stateNode;
      if (D = D.tag, M !== null && M === l) break;
      D !== 5 && D !== 26 && D !== 27 || I === null || (M = I, u ? (I = Oi(a, d), I != null && E.unshift(
        fs(a, I, M)
      )) : u || (I = Oi(a, d), I != null && E.push(
        fs(a, I, M)
      ))), a = a.return;
    }
    E.length !== 0 && e.push({ event: t, listeners: E });
  }
  var h_ = /\r\n?/g, d_ = /\u0000|\uFFFD/g;
  function cg(e) {
    return (typeof e == "string" ? e : "" + e).replace(h_, `
`).replace(d_, "");
  }
  function fg(e, t) {
    return t = cg(t), cg(e) === t;
  }
  function Jl() {
  }
  function Xe(e, t, a, l, u, d) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Da(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Da(e, "" + l);
        break;
      case "className":
        rl(e, "class", l);
        break;
      case "tabIndex":
        rl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        rl(e, a, l);
        break;
      case "style":
        dd(e, l, d);
        break;
      case "data":
        if (t !== "object") {
          rl(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = sl("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" && (a === "formAction" ? (t !== "input" && Xe(e, t, "name", u.name, u, null), Xe(
            e,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Xe(
            e,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Xe(
            e,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Xe(e, t, "encType", u.encType, u, null), Xe(e, t, "method", u.method, u, null), Xe(e, t, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = sl("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = Jl);
        break;
      case "onScroll":
        l != null && ze("scroll", e);
        break;
      case "onScrollEnd":
        l != null && ze("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (a = l.__html, a != null) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = a;
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
        a = sl("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
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
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
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
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        ze("beforetoggle", e), ze("toggle", e), nl(e, "popover", l);
        break;
      case "xlinkActuate":
        Zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Zn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Zn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Zn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        nl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Z1.get(a) || a, nl(e, a, l));
    }
  }
  function yf(e, t, a, l, u, d) {
    switch (a) {
      case "style":
        dd(e, l, d);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (a = l.__html, a != null) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Da(e, l) : (typeof l == "number" || typeof l == "bigint") && Da(e, "" + l);
        break;
      case "onScroll":
        l != null && ze("scroll", e);
        break;
      case "onScrollEnd":
        l != null && ze("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Jl);
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
        if (!nd.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), d = e[Ut] || null, d = d != null ? d[a] : null, typeof d == "function" && e.removeEventListener(t, d, u), typeof l == "function")) {
              typeof d != "function" && d !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, u);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : nl(e, a, l);
          }
    }
  }
  function Ot(e, t, a) {
    switch (t) {
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
        ze("error", e), ze("load", e);
        var l = !1, u = !1, d;
        for (d in a)
          if (a.hasOwnProperty(d)) {
            var E = a[d];
            if (E != null)
              switch (d) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  Xe(e, t, d, E, a, null);
              }
          }
        u && Xe(e, t, "srcSet", a.srcSet, a, null), l && Xe(e, t, "src", a.src, a, null);
        return;
      case "input":
        ze("invalid", e);
        var D = d = E = u = null, M = null, I = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var X = a[l];
            if (X != null)
              switch (l) {
                case "name":
                  u = X;
                  break;
                case "type":
                  E = X;
                  break;
                case "checked":
                  M = X;
                  break;
                case "defaultChecked":
                  I = X;
                  break;
                case "value":
                  d = X;
                  break;
                case "defaultValue":
                  D = X;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (X != null)
                    throw Error(s(137, t));
                  break;
                default:
                  Xe(e, t, l, X, a, null);
              }
          }
        ud(
          e,
          d,
          D,
          M,
          I,
          E,
          u,
          !1
        ), al(e);
        return;
      case "select":
        ze("invalid", e), l = E = d = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (D = a[u], D != null))
            switch (u) {
              case "value":
                d = D;
                break;
              case "defaultValue":
                E = D;
                break;
              case "multiple":
                l = D;
              default:
                Xe(e, t, u, D, a, null);
            }
        t = d, a = E, e.multiple = !!l, t != null ? Ta(e, !!l, t, !1) : a != null && Ta(e, !!l, a, !0);
        return;
      case "textarea":
        ze("invalid", e), d = u = l = null;
        for (E in a)
          if (a.hasOwnProperty(E) && (D = a[E], D != null))
            switch (E) {
              case "value":
                l = D;
                break;
              case "defaultValue":
                u = D;
                break;
              case "children":
                d = D;
                break;
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(s(91));
                break;
              default:
                Xe(e, t, E, D, a, null);
            }
        fd(e, l, u, d), al(e);
        return;
      case "option":
        for (M in a)
          if (a.hasOwnProperty(M) && (l = a[M], l != null))
            switch (M) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Xe(e, t, M, l, a, null);
            }
        return;
      case "dialog":
        ze("beforetoggle", e), ze("toggle", e), ze("cancel", e), ze("close", e);
        break;
      case "iframe":
      case "object":
        ze("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < cs.length; l++)
          ze(cs[l], e);
        break;
      case "image":
        ze("error", e), ze("load", e);
        break;
      case "details":
        ze("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ze("error", e), ze("load", e);
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
        for (I in a)
          if (a.hasOwnProperty(I) && (l = a[I], l != null))
            switch (I) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                Xe(e, t, I, l, a, null);
            }
        return;
      default:
        if (Ru(t)) {
          for (X in a)
            a.hasOwnProperty(X) && (l = a[X], l !== void 0 && yf(
              e,
              t,
              X,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (D in a)
      a.hasOwnProperty(D) && (l = a[D], l != null && Xe(e, t, D, l, a, null));
  }
  function p_(e, t, a, l) {
    switch (t) {
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
        var u = null, d = null, E = null, D = null, M = null, I = null, X = null;
        for (G in a) {
          var J = a[G];
          if (a.hasOwnProperty(G) && J != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = J;
              default:
                l.hasOwnProperty(G) || Xe(e, t, G, null, l, J);
            }
        }
        for (var q in l) {
          var G = l[q];
          if (J = a[q], l.hasOwnProperty(q) && (G != null || J != null))
            switch (q) {
              case "type":
                d = G;
                break;
              case "name":
                u = G;
                break;
              case "checked":
                I = G;
                break;
              case "defaultChecked":
                X = G;
                break;
              case "value":
                E = G;
                break;
              case "defaultValue":
                D = G;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(s(137, t));
                break;
              default:
                G !== J && Xe(
                  e,
                  t,
                  q,
                  G,
                  l,
                  J
                );
            }
        }
        Mu(
          e,
          E,
          D,
          M,
          I,
          X,
          d,
          u
        );
        return;
      case "select":
        G = E = D = q = null;
        for (d in a)
          if (M = a[d], a.hasOwnProperty(d) && M != null)
            switch (d) {
              case "value":
                break;
              case "multiple":
                G = M;
              default:
                l.hasOwnProperty(d) || Xe(
                  e,
                  t,
                  d,
                  null,
                  l,
                  M
                );
            }
        for (u in l)
          if (d = l[u], M = a[u], l.hasOwnProperty(u) && (d != null || M != null))
            switch (u) {
              case "value":
                q = d;
                break;
              case "defaultValue":
                D = d;
                break;
              case "multiple":
                E = d;
              default:
                d !== M && Xe(
                  e,
                  t,
                  u,
                  d,
                  l,
                  M
                );
            }
        t = D, a = E, l = G, q != null ? Ta(e, !!a, q, !1) : !!l != !!a && (t != null ? Ta(e, !!a, t, !0) : Ta(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        G = q = null;
        for (D in a)
          if (u = a[D], a.hasOwnProperty(D) && u != null && !l.hasOwnProperty(D))
            switch (D) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xe(e, t, D, null, l, u);
            }
        for (E in l)
          if (u = l[E], d = a[E], l.hasOwnProperty(E) && (u != null || d != null))
            switch (E) {
              case "value":
                q = u;
                break;
              case "defaultValue":
                G = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== d && Xe(e, t, E, u, l, d);
            }
        cd(e, q, G);
        return;
      case "option":
        for (var Se in a)
          if (q = a[Se], a.hasOwnProperty(Se) && q != null && !l.hasOwnProperty(Se))
            switch (Se) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Xe(
                  e,
                  t,
                  Se,
                  null,
                  l,
                  q
                );
            }
        for (M in l)
          if (q = l[M], G = a[M], l.hasOwnProperty(M) && q !== G && (q != null || G != null))
            switch (M) {
              case "selected":
                e.selected = q && typeof q != "function" && typeof q != "symbol";
                break;
              default:
                Xe(
                  e,
                  t,
                  M,
                  q,
                  l,
                  G
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
        for (var ve in a)
          q = a[ve], a.hasOwnProperty(ve) && q != null && !l.hasOwnProperty(ve) && Xe(e, t, ve, null, l, q);
        for (I in l)
          if (q = l[I], G = a[I], l.hasOwnProperty(I) && q !== G && (q != null || G != null))
            switch (I) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(s(137, t));
                break;
              default:
                Xe(
                  e,
                  t,
                  I,
                  q,
                  l,
                  G
                );
            }
        return;
      default:
        if (Ru(t)) {
          for (var Qe in a)
            q = a[Qe], a.hasOwnProperty(Qe) && q !== void 0 && !l.hasOwnProperty(Qe) && yf(
              e,
              t,
              Qe,
              void 0,
              l,
              q
            );
          for (X in l)
            q = l[X], G = a[X], !l.hasOwnProperty(X) || q === G || q === void 0 && G === void 0 || yf(
              e,
              t,
              X,
              q,
              l,
              G
            );
          return;
        }
    }
    for (var B in a)
      q = a[B], a.hasOwnProperty(B) && q != null && !l.hasOwnProperty(B) && Xe(e, t, B, null, l, q);
    for (J in l)
      q = l[J], G = a[J], !l.hasOwnProperty(J) || q === G || q == null && G == null || Xe(e, t, J, q, l, G);
  }
  var _f = null, bf = null;
  function Wl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function hg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function dg(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Sf(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var xf = null;
  function m_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === xf ? !1 : (xf = e, !0) : (xf = null, !1);
  }
  var pg = typeof setTimeout == "function" ? setTimeout : void 0, g_ = typeof clearTimeout == "function" ? clearTimeout : void 0, mg = typeof Promise == "function" ? Promise : void 0, v_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof mg < "u" ? function(e) {
    return mg.resolve(null).then(e).catch(y_);
  } : pg;
  function y_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Mr(e) {
    return e === "head";
  }
  function gg(e, t) {
    var a = t, l = 0, u = 0;
    do {
      var d = a.nextSibling;
      if (e.removeChild(a), d && d.nodeType === 8)
        if (a = d.data, a === "/$") {
          if (0 < l && 8 > l) {
            a = l;
            var E = e.ownerDocument;
            if (a & 1 && hs(E.documentElement), a & 2 && hs(E.body), a & 4)
              for (a = E.head, hs(a), E = a.firstChild; E; ) {
                var D = E.nextSibling, M = E.nodeName;
                E[Ti] || M === "SCRIPT" || M === "STYLE" || M === "LINK" && E.rel.toLowerCase() === "stylesheet" || a.removeChild(E), E = D;
              }
          }
          if (u === 0) {
            e.removeChild(d), bs(t);
            return;
          }
          u--;
        } else
          a === "$" || a === "$?" || a === "$!" ? u++ : l = a.charCodeAt(0) - 48;
      else l = 0;
      a = d;
    } while (a);
    bs(t);
  }
  function Ef(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ef(a), Tu(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function __(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var u = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Ti])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (d = e.getAttribute("rel"), d === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (d !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (d = e.getAttribute("src"), (d !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && d && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var d = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === d)
          return e;
      } else return e;
      if (e = Cn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function b_(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Cn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Cf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function S_(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      t();
    else {
      var l = function() {
        t(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Cn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var wf = null;
  function vg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return e;
          t--;
        } else a === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function yg(e, t, a) {
    switch (t = Wl(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function hs(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Tu(e);
  }
  var vn = /* @__PURE__ */ new Map(), _g = /* @__PURE__ */ new Set();
  function eo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var rr = re.d;
  re.d = {
    f: x_,
    r: E_,
    D: C_,
    C: w_,
    L: A_,
    m: T_,
    X: O_,
    S: D_,
    M: N_
  };
  function x_() {
    var e = rr.f(), t = Fl();
    return e || t;
  }
  function E_(e) {
    var t = Ea(e);
    t !== null && t.tag === 5 && t.type === "form" ? Pp(t) : rr.r(e);
  }
  var ri = typeof document > "u" ? null : document;
  function bg(e, t, a) {
    var l = ri;
    if (l && typeof t == "string" && t) {
      var u = cn(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), _g.has(u) || (_g.add(u), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(u) === null && (t = l.createElement("link"), Ot(t, "link", e), Et(t), l.head.appendChild(t)));
    }
  }
  function C_(e) {
    rr.D(e), bg("dns-prefetch", e, null);
  }
  function w_(e, t) {
    rr.C(e, t), bg("preconnect", e, t);
  }
  function A_(e, t, a) {
    rr.L(e, t, a);
    var l = ri;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + cn(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + cn(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + cn(
        a.imageSizes
      ) + '"]')) : u += '[href="' + cn(e) + '"]';
      var d = u;
      switch (t) {
        case "style":
          d = ai(e);
          break;
        case "script":
          d = ii(e);
      }
      vn.has(d) || (e = _(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), vn.set(d, e), l.querySelector(u) !== null || t === "style" && l.querySelector(ds(d)) || t === "script" && l.querySelector(ps(d)) || (t = l.createElement("link"), Ot(t, "link", e), Et(t), l.head.appendChild(t)));
    }
  }
  function T_(e, t) {
    rr.m(e, t);
    var a = ri;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + cn(l) + '"][href="' + cn(e) + '"]', d = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = ii(e);
      }
      if (!vn.has(d) && (e = _({ rel: "modulepreload", href: e }, t), vn.set(d, e), a.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ps(d)))
              return;
        }
        l = a.createElement("link"), Ot(l, "link", e), Et(l), a.head.appendChild(l);
      }
    }
  }
  function D_(e, t, a) {
    rr.S(e, t, a);
    var l = ri;
    if (l && e) {
      var u = Ca(l).hoistableStyles, d = ai(e);
      t = t || "default";
      var E = u.get(d);
      if (!E) {
        var D = { loading: 0, preload: null };
        if (E = l.querySelector(
          ds(d)
        ))
          D.loading = 5;
        else {
          e = _(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = vn.get(d)) && Af(e, a);
          var M = E = l.createElement("link");
          Et(M), Ot(M, "link", e), M._p = new Promise(function(I, X) {
            M.onload = I, M.onerror = X;
          }), M.addEventListener("load", function() {
            D.loading |= 1;
          }), M.addEventListener("error", function() {
            D.loading |= 2;
          }), D.loading |= 4, to(E, t, l);
        }
        E = {
          type: "stylesheet",
          instance: E,
          count: 1,
          state: D
        }, u.set(d, E);
      }
    }
  }
  function O_(e, t) {
    rr.X(e, t);
    var a = ri;
    if (a && e) {
      var l = Ca(a).hoistableScripts, u = ii(e), d = l.get(u);
      d || (d = a.querySelector(ps(u)), d || (e = _({ src: e, async: !0 }, t), (t = vn.get(u)) && Tf(e, t), d = a.createElement("script"), Et(d), Ot(d, "link", e), a.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, l.set(u, d));
    }
  }
  function N_(e, t) {
    rr.M(e, t);
    var a = ri;
    if (a && e) {
      var l = Ca(a).hoistableScripts, u = ii(e), d = l.get(u);
      d || (d = a.querySelector(ps(u)), d || (e = _({ src: e, async: !0, type: "module" }, t), (t = vn.get(u)) && Tf(e, t), d = a.createElement("script"), Et(d), Ot(d, "link", e), a.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, l.set(u, d));
    }
  }
  function Sg(e, t, a, l) {
    var u = (u = Y.current) ? eo(u) : null;
    if (!u) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = ai(a.href), a = Ca(
          u
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = ai(a.href);
          var d = Ca(
            u
          ).hoistableStyles, E = d.get(e);
          if (E || (u = u.ownerDocument || u, E = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, d.set(e, E), (d = u.querySelector(
            ds(e)
          )) && !d._p && (E.instance = d, E.state.loading = 5), vn.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, vn.set(e, a), d || M_(
            u,
            e,
            a,
            E.state
          ))), t && l === null)
            throw Error(s(528, ""));
          return E;
        }
        if (t && l !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ii(a), a = Ca(
          u
        ).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function ai(e) {
    return 'href="' + cn(e) + '"';
  }
  function ds(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function xg(e) {
    return _({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function M_(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), Ot(t, "link", a), Et(t), e.head.appendChild(t));
  }
  function ii(e) {
    return '[src="' + cn(e) + '"]';
  }
  function ps(e) {
    return "script[async]" + e;
  }
  function Eg(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + cn(a.href) + '"]'
          );
          if (l)
            return t.instance = l, Et(l), l;
          var u = _({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Et(l), Ot(l, "style", u), to(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          u = ai(a.href);
          var d = e.querySelector(
            ds(u)
          );
          if (d)
            return t.state.loading |= 4, t.instance = d, Et(d), d;
          l = xg(a), (u = vn.get(u)) && Af(l, u), d = (e.ownerDocument || e).createElement("link"), Et(d);
          var E = d;
          return E._p = new Promise(function(D, M) {
            E.onload = D, E.onerror = M;
          }), Ot(d, "link", l), t.state.loading |= 4, to(d, a.precedence, e), t.instance = d;
        case "script":
          return d = ii(a.src), (u = e.querySelector(
            ps(d)
          )) ? (t.instance = u, Et(u), u) : (l = a, (u = vn.get(d)) && (l = _({}, a), Tf(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), Et(u), Ot(u, "link", l), e.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, to(l, a.precedence, e));
    return t.instance;
  }
  function to(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, d = u, E = 0; E < l.length; E++) {
      var D = l[E];
      if (D.dataset.precedence === t) d = D;
      else if (d !== u) break;
    }
    d ? d.parentNode.insertBefore(e, d.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Af(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Tf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var no = null;
  function Cg(e, t, a) {
    if (no === null) {
      var l = /* @__PURE__ */ new Map(), u = no = /* @__PURE__ */ new Map();
      u.set(a, l);
    } else
      u = no, l = u.get(a), l || (l = /* @__PURE__ */ new Map(), u.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), u = 0; u < a.length; u++) {
      var d = a[u];
      if (!(d[Ti] || d[Mt] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var E = d.getAttribute(t) || "";
        E = e + E;
        var D = l.get(E);
        D ? D.push(d) : l.set(E, [d]);
      }
    }
    return l;
  }
  function wg(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function k_(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Ag(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var ms = null;
  function R_() {
  }
  function j_(e, t, a) {
    if (ms === null) throw Error(s(475));
    var l = ms;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var u = ai(a.href), d = e.querySelector(
          ds(u)
        );
        if (d) {
          e = d._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = ro.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = d, Et(d);
          return;
        }
        d = e.ownerDocument || e, a = xg(a), (u = vn.get(u)) && Af(a, u), d = d.createElement("link"), Et(d);
        var E = d;
        E._p = new Promise(function(D, M) {
          E.onload = D, E.onerror = M;
        }), Ot(d, "link", a), t.instance = d;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = ro.bind(l), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function z_() {
    if (ms === null) throw Error(s(475));
    var e = ms;
    return e.stylesheets && e.count === 0 && Df(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && Df(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function ro() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Df(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var ao = null;
  function Df(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ao = /* @__PURE__ */ new Map(), t.forEach(L_, e), ao = null, ro.call(e));
  }
  function L_(e, t) {
    if (!(t.state.loading & 4)) {
      var a = ao.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), ao.set(e, a);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < u.length; d++) {
          var E = u[d];
          (E.nodeName === "LINK" || E.getAttribute("media") !== "not all") && (a.set(E.dataset.precedence, E), l = E);
        }
        l && a.set(null, l);
      }
      u = t.instance, E = u.getAttribute("data-precedence"), d = a.get(E) || l, d === l && a.set(null, u), a.set(E, u), this.count++, l = ro.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), d ? d.parentNode.insertBefore(u, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var gs = {
    $$typeof: N,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function B_(e, t, a, l, u, d, E, D) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Eu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Eu(0), this.hiddenUpdates = Eu(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = d, this.onRecoverableError = E, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Tg(e, t, a, l, u, d, E, D, M, I, X, J) {
    return e = new B_(
      e,
      t,
      a,
      E,
      D,
      M,
      I,
      J
    ), t = 1, d === !0 && (t |= 24), d = Kt(3, null, null, t), e.current = d, d.stateNode = e, t = oc(), t.refCount++, e.pooledCache = t, t.refCount++, d.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, hc(d), e;
  }
  function Dg(e) {
    return e ? (e = La, e) : La;
  }
  function Og(e, t, a, l, u, d) {
    u = Dg(u), l.context === null ? l.context = u : l.pendingContext = u, l = yr(t), l.payload = { element: a }, d = d === void 0 ? null : d, d !== null && (l.callback = d), a = _r(e, l, t), a !== null && (nn(a, e, t), Vi(a, e, t));
  }
  function Ng(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Of(e, t) {
    Ng(e, t), (e = e.alternate) && Ng(e, t);
  }
  function Mg(e) {
    if (e.tag === 13) {
      var t = za(e, 67108864);
      t !== null && nn(t, e, 67108864), Of(e, 67108864);
    }
  }
  var io = !0;
  function U_(e, t, a, l) {
    var u = H.T;
    H.T = null;
    var d = re.p;
    try {
      re.p = 2, Nf(e, t, a, l);
    } finally {
      re.p = d, H.T = u;
    }
  }
  function P_(e, t, a, l) {
    var u = H.T;
    H.T = null;
    var d = re.p;
    try {
      re.p = 8, Nf(e, t, a, l);
    } finally {
      re.p = d, H.T = u;
    }
  }
  function Nf(e, t, a, l) {
    if (io) {
      var u = Mf(l);
      if (u === null)
        vf(
          e,
          t,
          l,
          so,
          a
        ), Rg(e, l);
      else if (H_(
        u,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (Rg(e, l), t & 4 && -1 < I_.indexOf(e)) {
        for (; u !== null; ) {
          var d = Ea(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var E = Fr(d.pendingLanes);
                  if (E !== 0) {
                    var D = d;
                    for (D.pendingLanes |= 2, D.entangledLanes |= 2; E; ) {
                      var M = 1 << 31 - Qt(E);
                      D.entanglements[1] |= M, E &= ~M;
                    }
                    Bn(d), (Ge & 6) === 0 && (Zl = ye() + 500, us(0));
                  }
                }
                break;
              case 13:
                D = za(d, 2), D !== null && nn(D, d, 2), Fl(), Of(d, 2);
            }
          if (d = Mf(l), d === null && vf(
            e,
            t,
            l,
            so,
            a
          ), d === u) break;
          u = d;
        }
        u !== null && l.stopPropagation();
      } else
        vf(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Mf(e) {
    return e = zu(e), kf(e);
  }
  var so = null;
  function kf(e) {
    if (so = null, e = xa(e), e !== null) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return so = e, null;
  }
  function kg(e) {
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
        switch (Te()) {
          case zt:
            return 2;
          case Mn:
            return 8;
          case Ie:
          case kn:
            return 32;
          case Js:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Rf = !1, kr = null, Rr = null, jr = null, vs = /* @__PURE__ */ new Map(), ys = /* @__PURE__ */ new Map(), zr = [], I_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Rg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        kr = null;
        break;
      case "dragenter":
      case "dragleave":
        Rr = null;
        break;
      case "mouseover":
      case "mouseout":
        jr = null;
        break;
      case "pointerover":
      case "pointerout":
        vs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ys.delete(t.pointerId);
    }
  }
  function _s(e, t, a, l, u, d) {
    return e === null || e.nativeEvent !== d ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: d,
      targetContainers: [u]
    }, t !== null && (t = Ea(t), t !== null && Mg(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function H_(e, t, a, l, u) {
    switch (t) {
      case "focusin":
        return kr = _s(
          kr,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "dragenter":
        return Rr = _s(
          Rr,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "mouseover":
        return jr = _s(
          jr,
          e,
          t,
          a,
          l,
          u
        ), !0;
      case "pointerover":
        var d = u.pointerId;
        return vs.set(
          d,
          _s(
            vs.get(d) || null,
            e,
            t,
            a,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return d = u.pointerId, ys.set(
          d,
          _s(
            ys.get(d) || null,
            e,
            t,
            a,
            l,
            u
          )
        ), !0;
    }
    return !1;
  }
  function jg(e) {
    var t = xa(e.target);
    if (t !== null) {
      var a = c(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = h(a), t !== null) {
            e.blockedOn = t, j1(e.priority, function() {
              if (a.tag === 13) {
                var l = tn();
                l = Cu(l);
                var u = za(a, l);
                u !== null && nn(u, a, l), Of(a, l);
              }
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function lo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Mf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        ju = l, a.target.dispatchEvent(l), ju = null;
      } else
        return t = Ea(a), t !== null && Mg(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function zg(e, t, a) {
    lo(e) && a.delete(t);
  }
  function q_() {
    Rf = !1, kr !== null && lo(kr) && (kr = null), Rr !== null && lo(Rr) && (Rr = null), jr !== null && lo(jr) && (jr = null), vs.forEach(zg), ys.forEach(zg);
  }
  function oo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Rf || (Rf = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      q_
    )));
  }
  var uo = null;
  function Lg(e) {
    uo !== e && (uo = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        uo === e && (uo = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], u = e[t + 2];
          if (typeof l != "function") {
            if (kf(l || a) === null)
              continue;
            break;
          }
          var d = Ea(a);
          d !== null && (e.splice(t, 3), t -= 3, Mc(
            d,
            {
              pending: !0,
              data: u,
              method: a.method,
              action: l
            },
            l,
            u
          ));
        }
      }
    ));
  }
  function bs(e) {
    function t(M) {
      return oo(M, e);
    }
    kr !== null && oo(kr, e), Rr !== null && oo(Rr, e), jr !== null && oo(jr, e), vs.forEach(t), ys.forEach(t);
    for (var a = 0; a < zr.length; a++) {
      var l = zr[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < zr.length && (a = zr[0], a.blockedOn === null); )
      jg(a), a.blockedOn === null && zr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var u = a[l], d = a[l + 1], E = u[Ut] || null;
        if (typeof d == "function")
          E || Lg(a);
        else if (E) {
          var D = null;
          if (d && d.hasAttribute("formAction")) {
            if (u = d, E = d[Ut] || null)
              D = E.formAction;
            else if (kf(u) !== null) continue;
          } else D = E.action;
          typeof D == "function" ? a[l + 1] = D : (a.splice(l, 3), l -= 3), Lg(a);
        }
      }
  }
  function jf(e) {
    this._internalRoot = e;
  }
  co.prototype.render = jf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var a = t.current, l = tn();
    Og(a, l, e, t, null, null);
  }, co.prototype.unmount = jf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Og(e.current, 2, null, e, null, null), Fl(), t[Sa] = null;
    }
  };
  function co(e) {
    this._internalRoot = e;
  }
  co.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Wh();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < zr.length && t !== 0 && t < zr[a].priority; a++) ;
      zr.splice(a, 0, e), a === 0 && jg(e);
    }
  };
  var Bg = r.version;
  if (Bg !== "19.1.1")
    throw Error(
      s(
        527,
        Bg,
        "19.1.1"
      )
    );
  re.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = g(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Z_ = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fo.isDisabled && fo.supportsFiber)
      try {
        Ci = fo.inject(
          Z_
        ), Xt = fo;
      } catch {
      }
  }
  return xs.createRoot = function(e, t) {
    if (!o(e)) throw Error(s(299));
    var a = !1, l = "", u = Wp, d = em, E = tm, D = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (d = t.onCaughtError), t.onRecoverableError !== void 0 && (E = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (D = t.unstable_transitionCallbacks)), t = Tg(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      u,
      d,
      E,
      D,
      null
    ), e[Sa] = t.current, gf(e), new jf(t);
  }, xs.hydrateRoot = function(e, t, a) {
    if (!o(e)) throw Error(s(299));
    var l = !1, u = "", d = Wp, E = em, D = tm, M = null, I = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (d = a.onUncaughtError), a.onCaughtError !== void 0 && (E = a.onCaughtError), a.onRecoverableError !== void 0 && (D = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (M = a.unstable_transitionCallbacks), a.formState !== void 0 && (I = a.formState)), t = Tg(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      u,
      d,
      E,
      D,
      M,
      I
    ), t.context = Dg(null), a = t.current, l = tn(), l = Cu(l), u = yr(l), u.callback = null, _r(a, u, l), a = l, t.current.lanes = a, Ai(t, a), Bn(t), e[Sa] = t.current, gf(e), new co(t);
  }, xs.version = "19.1.1", xs;
}
var Jg;
function tb() {
  if (Jg) return Uf.exports;
  Jg = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Uf.exports = eb(), Uf.exports;
}
var nb = tb();
const Wg = /* @__PURE__ */ Gy(nb);
var rb = Object.defineProperty, ab = (n, r, i) => r in n ? rb(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[r] = i, ib = (n, r, i) => ab(n, r + "", i);
class Vy extends Error {
  constructor(r, i) {
    super(r), ib(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function sb(n, r) {
  const i = SillyTavern.getContext(), s = new FormData();
  s.append("avatar", new Blob([JSON.stringify(n)], { type: "application/json" }), "character.json"), s.append("file_type", "json");
  const o = i.getRequestHeaders();
  delete o["Content-Type"];
  const c = await fetch("/api/characters/import", {
    method: "POST",
    headers: o,
    body: s,
    cache: "no-cache"
  });
  if (!c.ok)
    throw new Vy(c.statusText, c);
  await i.getCharacters();
}
async function lb(n, r) {
  var i;
  const s = SillyTavern.getContext();
  if (!n.avatar)
    throw new Error("`data.avatar` (character filename) is required to save character attributes.");
  n == null || delete n.json_data, (i = n?.data) == null || delete i.json_data;
  const o = s.getRequestHeaders(), c = await fetch("/api/characters/merge-attributes", {
    method: "POST",
    headers: o,
    body: JSON.stringify(n),
    cache: "no-cache"
  });
  if (!c.ok) {
    const h = await c.json().catch(() => ({ message: c.statusText }));
    throw new Vy(h.message || `Request failed with status ${c.status}`, c);
  }
  await s.getCharacters();
}
var ob = Object.defineProperty, ub = (n, r, i) => r in n ? ob(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[r] = i, ev = (n, r, i) => ub(n, typeof r != "symbol" ? r + "" : r, i);
class Yy {
  constructor(r, i) {
    ev(this, "settingsKey"), ev(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = i;
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
    const { strategy: i = "recursive" } = r, s = this.defaultSettings.version, o = this.defaultSettings.formatVersion, c = SillyTavern.getContext().extensionSettings[this.settingsKey], h = {
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
    if (!c)
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), h;
    const m = {
      ...h,
      oldSettings: structuredClone(c),
      version: {
        changed: !1,
        old: c.version,
        new: c.version
      },
      formatVersion: {
        changed: !1,
        old: c.formatVersion,
        new: c.formatVersion
      }
    };
    if (i === "recursive") {
      let g = function(v, _) {
        let b = !1;
        for (const y of Object.keys(_))
          v[y] === void 0 ? (v[y] = _[y], b = !0) : typeof _[y] == "object" && _[y] !== null && (v[y] = v[y] || {}, g(v[y], _[y]) && (b = !0));
        return b;
      };
      s && c.version !== s && (m.version.changed = !0, m.version.new = s, c.version = s), o && o !== "*" && c.formatVersion !== o && (m.formatVersion.changed = !0, m.formatVersion.new = o, c.formatVersion = o), (g(c, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      s && !c.version && (c.version = s, m.version.changed = !0, m.version.new = s), o && !c.formatVersion && (c.formatVersion = o, m.formatVersion.changed = !0, m.formatVersion.new = o);
      let g = structuredClone(c), v = c.formatVersion;
      try {
        let _;
        do {
          _ = !1;
          let b = i.find((y) => y.from === v);
          if (b && b.to > v)
            g = await b.action(g), v = b.to, g.formatVersion = b.to, _ = !0;
          else
            for (const y of i)
              if (y.from === "*" && y.to > v && v !== y.to) {
                g = await y.action(g), v = y.to, g.formatVersion = y.to, _ = !0;
                break;
              }
        } while (_);
        if (v !== c.formatVersion) {
          m.formatVersion.changed = !0, m.formatVersion.new = v;
          const b = this.defaultSettings.version;
          b && (g.version = b);
        }
        if (m.formatVersion.changed) {
          for (const b of Object.keys(c))
            delete c[b];
          Object.assign(c, g), this.saveSettings();
        }
      } catch (_) {
        throw console.error("Failed to apply version changes:", _), new Error(`Version migration failed: ${_ instanceof Error ? _.message : _}`, {
          cause: _
        });
      }
    }
    return m.newSettings = c, m;
  }
  getSettings() {
    return SillyTavern.getContext().extensionSettings[this.settingsKey];
  }
  updateSetting(r, i) {
    SillyTavern.getContext().extensionSettings[this.settingsKey][r] = i, this.saveSettings();
  }
  saveSettings() {
    SillyTavern.getContext().saveSettingsDebounced();
  }
  resetSettings() {
    SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings();
  }
}
function cr(n) {
  return Array.isArray ? Array.isArray(n) : $y(n) === "[object Array]";
}
function cb(n) {
  if (typeof n == "string")
    return n;
  let r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function fb(n) {
  return n == null ? "" : cb(n);
}
function In(n) {
  return typeof n == "string";
}
function Xy(n) {
  return typeof n == "number";
}
function hb(n) {
  return n === !0 || n === !1 || db(n) && $y(n) == "[object Boolean]";
}
function Qy(n) {
  return typeof n == "object";
}
function db(n) {
  return Qy(n) && n !== null;
}
function ln(n) {
  return n != null;
}
function qf(n) {
  return !n.trim().length;
}
function $y(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const pb = "Incorrect 'index' type", mb = (n) => `Invalid value for key ${n}`, gb = (n) => `Pattern length exceeds max of ${n}.`, vb = (n) => `Missing ${n} property in key`, yb = (n) => `Property 'weight' in key '${n}' must be a positive integer`, tv = Object.prototype.hasOwnProperty;
class _b {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((s) => {
      let o = Ky(s);
      this._keys.push(o), this._keyMap[o.id] = o, i += o.weight;
    }), this._keys.forEach((s) => {
      s.weight /= i;
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
function Ky(n) {
  let r = null, i = null, s = null, o = 1, c = null;
  if (In(n) || cr(n))
    s = n, r = nv(n), i = ch(n);
  else {
    if (!tv.call(n, "name"))
      throw new Error(vb("name"));
    const h = n.name;
    if (s = h, tv.call(n, "weight") && (o = n.weight, o <= 0))
      throw new Error(yb(h));
    r = nv(h), i = ch(h), c = n.getFn;
  }
  return { path: r, id: i, weight: o, src: s, getFn: c };
}
function nv(n) {
  return cr(n) ? n : n.split(".");
}
function ch(n) {
  return cr(n) ? n.join(".") : n;
}
function bb(n, r) {
  let i = [], s = !1;
  const o = (c, h, m) => {
    if (ln(c))
      if (!h[m])
        i.push(c);
      else {
        let g = h[m];
        const v = c[g];
        if (!ln(v))
          return;
        if (m === h.length - 1 && (In(v) || Xy(v) || hb(v)))
          i.push(fb(v));
        else if (cr(v)) {
          s = !0;
          for (let _ = 0, b = v.length; _ < b; _ += 1)
            o(v[_], h, m + 1);
        } else h.length && o(v, h, m + 1);
      }
  };
  return o(n, In(r) ? r.split(".") : r, 0), s ? i : i[0];
}
const Sb = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, xb = {
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
  sortFn: (n, r) => n.score === r.score ? n.idx < r.idx ? -1 : 1 : n.score < r.score ? -1 : 1
}, Eb = {
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
}, Cb = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: bb,
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
var Ce = {
  ...xb,
  ...Sb,
  ...Eb,
  ...Cb
};
const wb = /[^ ]+/g;
function Ab(n = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(o) {
      const c = o.match(wb).length;
      if (i.has(c))
        return i.get(c);
      const h = 1 / Math.pow(c, 0.5 * n), m = parseFloat(Math.round(h * s) / s);
      return i.set(c, m), m;
    },
    clear() {
      i.clear();
    }
  };
}
class kh {
  constructor({
    getFn: r = Ce.getFn,
    fieldNormWeight: i = Ce.fieldNormWeight
  } = {}) {
    this.norm = Ab(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(r = []) {
    this.docs = r;
  }
  setIndexRecords(r = []) {
    this.records = r;
  }
  setKeys(r = []) {
    this.keys = r, this._keysMap = {}, r.forEach((i, s) => {
      this._keysMap[i.id] = s;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, In(this.docs[0]) ? this.docs.forEach((r, i) => {
      this._addString(r, i);
    }) : this.docs.forEach((r, i) => {
      this._addObject(r, i);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const i = this.size();
    In(r) ? this._addString(r, i) : this._addObject(r, i);
  }
  // Removes the doc at the specified index of the index
  removeAt(r) {
    this.records.splice(r, 1);
    for (let i = r, s = this.size(); i < s; i += 1)
      this.records[i].i -= 1;
  }
  getValueForItemAtKeyId(r, i) {
    return r[this._keysMap[i]];
  }
  size() {
    return this.records.length;
  }
  _addString(r, i) {
    if (!ln(r) || qf(r))
      return;
    let s = {
      v: r,
      i,
      n: this.norm.get(r)
    };
    this.records.push(s);
  }
  _addObject(r, i) {
    let s = { i, $: {} };
    this.keys.forEach((o, c) => {
      let h = o.getFn ? o.getFn(r) : this.getFn(r, o.path);
      if (ln(h)) {
        if (cr(h)) {
          let m = [];
          const g = [{ nestedArrIndex: -1, value: h }];
          for (; g.length; ) {
            const { nestedArrIndex: v, value: _ } = g.pop();
            if (ln(_))
              if (In(_) && !qf(_)) {
                let b = {
                  v: _,
                  i: v,
                  n: this.norm.get(_)
                };
                m.push(b);
              } else cr(_) && _.forEach((b, y) => {
                g.push({
                  nestedArrIndex: y,
                  value: b
                });
              });
          }
          s.$[c] = m;
        } else if (In(h) && !qf(h)) {
          let m = {
            v: h,
            n: this.norm.get(h)
          };
          s.$[c] = m;
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
function Jy(n, r, { getFn: i = Ce.getFn, fieldNormWeight: s = Ce.fieldNormWeight } = {}) {
  const o = new kh({ getFn: i, fieldNormWeight: s });
  return o.setKeys(n.map(Ky)), o.setSources(r), o.create(), o;
}
function Tb(n, { getFn: r = Ce.getFn, fieldNormWeight: i = Ce.fieldNormWeight } = {}) {
  const { keys: s, records: o } = n, c = new kh({ getFn: r, fieldNormWeight: i });
  return c.setKeys(s), c.setIndexRecords(o), c;
}
function ho(n, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: s = 0,
  distance: o = Ce.distance,
  ignoreLocation: c = Ce.ignoreLocation
} = {}) {
  const h = r / n.length;
  if (c)
    return h;
  const m = Math.abs(s - i);
  return o ? h + m / o : m ? 1 : h;
}
function Db(n = [], r = Ce.minMatchCharLength) {
  let i = [], s = -1, o = -1, c = 0;
  for (let h = n.length; c < h; c += 1) {
    let m = n[c];
    m && s === -1 ? s = c : !m && s !== -1 && (o = c - 1, o - s + 1 >= r && i.push([s, o]), s = -1);
  }
  return n[c - 1] && c - s >= r && i.push([s, c - 1]), i;
}
const da = 32;
function Ob(n, r, i, {
  location: s = Ce.location,
  distance: o = Ce.distance,
  threshold: c = Ce.threshold,
  findAllMatches: h = Ce.findAllMatches,
  minMatchCharLength: m = Ce.minMatchCharLength,
  includeMatches: g = Ce.includeMatches,
  ignoreLocation: v = Ce.ignoreLocation
} = {}) {
  if (r.length > da)
    throw new Error(gb(da));
  const _ = r.length, b = n.length, y = Math.max(0, Math.min(s, b));
  let p = c, f = y;
  const S = m > 1 || g, x = S ? Array(b) : [];
  let T;
  for (; (T = n.indexOf(r, f)) > -1; ) {
    let R = ho(r, {
      currentLocation: T,
      expectedLocation: y,
      distance: o,
      ignoreLocation: v
    });
    if (p = Math.min(R, p), f = T + _, S) {
      let Z = 0;
      for (; Z < _; )
        x[T + Z] = 1, Z += 1;
    }
  }
  f = -1;
  let w = [], N = 1, C = _ + b;
  const O = 1 << _ - 1;
  for (let R = 0; R < _; R += 1) {
    let Z = 0, te = C;
    for (; Z < te; )
      ho(r, {
        errors: R,
        currentLocation: y + te,
        expectedLocation: y,
        distance: o,
        ignoreLocation: v
      }) <= p ? Z = te : C = te, te = Math.floor((C - Z) / 2 + Z);
    C = te;
    let $ = Math.max(1, y - te + 1), Q = h ? b : Math.min(y + te, b) + _, ee = Array(Q + 2);
    ee[Q + 1] = (1 << R) - 1;
    for (let de = Q; de >= $; de -= 1) {
      let be = de - 1, H = i[n.charAt(be)];
      if (S && (x[be] = +!!H), ee[de] = (ee[de + 1] << 1 | 1) & H, R && (ee[de] |= (w[de + 1] | w[de]) << 1 | 1 | w[de + 1]), ee[de] & O && (N = ho(r, {
        errors: R,
        currentLocation: be,
        expectedLocation: y,
        distance: o,
        ignoreLocation: v
      }), N <= p)) {
        if (p = N, f = be, f <= y)
          break;
        $ = Math.max(1, 2 * y - f);
      }
    }
    if (ho(r, {
      errors: R + 1,
      currentLocation: y,
      expectedLocation: y,
      distance: o,
      ignoreLocation: v
    }) > p)
      break;
    w = ee;
  }
  const z = {
    isMatch: f >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, N)
  };
  if (S) {
    const R = Db(x, m);
    R.length ? g && (z.indices = R) : z.isMatch = !1;
  }
  return z;
}
function Nb(n) {
  let r = {};
  for (let i = 0, s = n.length; i < s; i += 1) {
    const o = n.charAt(i);
    r[o] = (r[o] || 0) | 1 << s - i - 1;
  }
  return r;
}
const ru = String.prototype.normalize ? ((n) => n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((n) => n);
class Wy {
  constructor(r, {
    location: i = Ce.location,
    threshold: s = Ce.threshold,
    distance: o = Ce.distance,
    includeMatches: c = Ce.includeMatches,
    findAllMatches: h = Ce.findAllMatches,
    minMatchCharLength: m = Ce.minMatchCharLength,
    isCaseSensitive: g = Ce.isCaseSensitive,
    ignoreDiacritics: v = Ce.ignoreDiacritics,
    ignoreLocation: _ = Ce.ignoreLocation
  } = {}) {
    if (this.options = {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: c,
      findAllMatches: h,
      minMatchCharLength: m,
      isCaseSensitive: g,
      ignoreDiacritics: v,
      ignoreLocation: _
    }, r = g ? r : r.toLowerCase(), r = v ? ru(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const b = (p, f) => {
      this.chunks.push({
        pattern: p,
        alphabet: Nb(p),
        startIndex: f
      });
    }, y = this.pattern.length;
    if (y > da) {
      let p = 0;
      const f = y % da, S = y - f;
      for (; p < S; )
        b(this.pattern.substr(p, da), p), p += da;
      if (f) {
        const x = y - da;
        b(this.pattern.substr(x), x);
      }
    } else
      b(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: i, ignoreDiacritics: s, includeMatches: o } = this.options;
    if (r = i ? r : r.toLowerCase(), r = s ? ru(r) : r, this.pattern === r) {
      let S = {
        isMatch: !0,
        score: 0
      };
      return o && (S.indices = [[0, r.length - 1]]), S;
    }
    const {
      location: c,
      distance: h,
      threshold: m,
      findAllMatches: g,
      minMatchCharLength: v,
      ignoreLocation: _
    } = this.options;
    let b = [], y = 0, p = !1;
    this.chunks.forEach(({ pattern: S, alphabet: x, startIndex: T }) => {
      const { isMatch: w, score: N, indices: C } = Ob(r, S, x, {
        location: c + T,
        distance: h,
        threshold: m,
        findAllMatches: g,
        minMatchCharLength: v,
        includeMatches: o,
        ignoreLocation: _
      });
      w && (p = !0), y += N, w && C && (b = [...b, ...C]);
    });
    let f = {
      isMatch: p,
      score: p ? y / this.chunks.length : 1
    };
    return p && o && (f.indices = b), f;
  }
}
class qr {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return rv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return rv(r, this.singleRegex);
  }
  search() {
  }
}
function rv(n, r) {
  const i = n.match(r);
  return i ? i[1] : null;
}
class Mb extends qr {
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
    const i = r === this.pattern;
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class kb extends qr {
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
class Rb extends qr {
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
    const i = r.startsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class jb extends qr {
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
    const i = !r.startsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class zb extends qr {
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
    const i = r.endsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [r.length - this.pattern.length, r.length - 1]
    };
  }
}
class Lb extends qr {
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
    const i = !r.endsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class e0 extends qr {
  constructor(r, {
    location: i = Ce.location,
    threshold: s = Ce.threshold,
    distance: o = Ce.distance,
    includeMatches: c = Ce.includeMatches,
    findAllMatches: h = Ce.findAllMatches,
    minMatchCharLength: m = Ce.minMatchCharLength,
    isCaseSensitive: g = Ce.isCaseSensitive,
    ignoreDiacritics: v = Ce.ignoreDiacritics,
    ignoreLocation: _ = Ce.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new Wy(r, {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: c,
      findAllMatches: h,
      minMatchCharLength: m,
      isCaseSensitive: g,
      ignoreDiacritics: v,
      ignoreLocation: _
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
class t0 extends qr {
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
    let i = 0, s;
    const o = [], c = this.pattern.length;
    for (; (s = r.indexOf(this.pattern, i)) > -1; )
      i = s + c, o.push([s, i - 1]);
    const h = !!o.length;
    return {
      isMatch: h,
      score: h ? 0 : 1,
      indices: o
    };
  }
}
const fh = [
  Mb,
  t0,
  Rb,
  jb,
  Lb,
  zb,
  kb,
  e0
], av = fh.length, Bb = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, Ub = "|";
function Pb(n, r = {}) {
  return n.split(Ub).map((i) => {
    let s = i.trim().split(Bb).filter((c) => c && !!c.trim()), o = [];
    for (let c = 0, h = s.length; c < h; c += 1) {
      const m = s[c];
      let g = !1, v = -1;
      for (; !g && ++v < av; ) {
        const _ = fh[v];
        let b = _.isMultiMatch(m);
        b && (o.push(new _(b, r)), g = !0);
      }
      if (!g)
        for (v = -1; ++v < av; ) {
          const _ = fh[v];
          let b = _.isSingleMatch(m);
          if (b) {
            o.push(new _(b, r));
            break;
          }
        }
    }
    return o;
  });
}
const Ib = /* @__PURE__ */ new Set([e0.type, t0.type]);
class Hb {
  constructor(r, {
    isCaseSensitive: i = Ce.isCaseSensitive,
    ignoreDiacritics: s = Ce.ignoreDiacritics,
    includeMatches: o = Ce.includeMatches,
    minMatchCharLength: c = Ce.minMatchCharLength,
    ignoreLocation: h = Ce.ignoreLocation,
    findAllMatches: m = Ce.findAllMatches,
    location: g = Ce.location,
    threshold: v = Ce.threshold,
    distance: _ = Ce.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: i,
      ignoreDiacritics: s,
      includeMatches: o,
      minMatchCharLength: c,
      findAllMatches: m,
      ignoreLocation: h,
      location: g,
      threshold: v,
      distance: _
    }, r = i ? r : r.toLowerCase(), r = s ? ru(r) : r, this.pattern = r, this.query = Pb(this.pattern, this.options);
  }
  static condition(r, i) {
    return i.useExtendedSearch;
  }
  searchIn(r) {
    const i = this.query;
    if (!i)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: s, isCaseSensitive: o, ignoreDiacritics: c } = this.options;
    r = o ? r : r.toLowerCase(), r = c ? ru(r) : r;
    let h = 0, m = [], g = 0;
    for (let v = 0, _ = i.length; v < _; v += 1) {
      const b = i[v];
      m.length = 0, h = 0;
      for (let y = 0, p = b.length; y < p; y += 1) {
        const f = b[y], { isMatch: S, indices: x, score: T } = f.search(r);
        if (S) {
          if (h += 1, g += T, s) {
            const w = f.constructor.type;
            Ib.has(w) ? m = [...m, ...x] : m.push(x);
          }
        } else {
          g = 0, h = 0, m.length = 0;
          break;
        }
      }
      if (h) {
        let y = {
          isMatch: !0,
          score: g / h
        };
        return s && (y.indices = m), y;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const hh = [];
function qb(...n) {
  hh.push(...n);
}
function dh(n, r) {
  for (let i = 0, s = hh.length; i < s; i += 1) {
    let o = hh[i];
    if (o.condition(n, r))
      return new o(n, r);
  }
  return new Wy(n, r);
}
const au = {
  AND: "$and",
  OR: "$or"
}, ph = {
  PATH: "$path",
  PATTERN: "$val"
}, mh = (n) => !!(n[au.AND] || n[au.OR]), Zb = (n) => !!n[ph.PATH], Gb = (n) => !cr(n) && Qy(n) && !mh(n), iv = (n) => ({
  [au.AND]: Object.keys(n).map((r) => ({
    [r]: n[r]
  }))
});
function n0(n, r, { auto: i = !0 } = {}) {
  const s = (o) => {
    let c = Object.keys(o);
    const h = Zb(o);
    if (!h && c.length > 1 && !mh(o))
      return s(iv(o));
    if (Gb(o)) {
      const g = h ? o[ph.PATH] : c[0], v = h ? o[ph.PATTERN] : o[g];
      if (!In(v))
        throw new Error(mb(g));
      const _ = {
        keyId: ch(g),
        pattern: v
      };
      return i && (_.searcher = dh(v, r)), _;
    }
    let m = {
      children: [],
      operator: c[0]
    };
    return c.forEach((g) => {
      const v = o[g];
      cr(v) && v.forEach((_) => {
        m.children.push(s(_));
      });
    }), m;
  };
  return mh(n) || (n = iv(n)), s(n);
}
function Fb(n, { ignoreFieldNorm: r = Ce.ignoreFieldNorm }) {
  n.forEach((i) => {
    let s = 1;
    i.matches.forEach(({ key: o, norm: c, score: h }) => {
      const m = o ? o.weight : null;
      s *= Math.pow(
        h === 0 && m ? Number.EPSILON : h,
        (m || 1) * (r ? 1 : c)
      );
    }), i.score = s;
  });
}
function Vb(n, r) {
  const i = n.matches;
  r.matches = [], ln(i) && i.forEach((s) => {
    if (!ln(s.indices) || !s.indices.length)
      return;
    const { indices: o, value: c } = s;
    let h = {
      indices: o,
      value: c
    };
    s.key && (h.key = s.key.src), s.idx > -1 && (h.refIndex = s.idx), r.matches.push(h);
  });
}
function Yb(n, r) {
  r.score = n.score;
}
function Xb(n, r, {
  includeMatches: i = Ce.includeMatches,
  includeScore: s = Ce.includeScore
} = {}) {
  const o = [];
  return i && o.push(Vb), s && o.push(Yb), n.map((c) => {
    const { idx: h } = c, m = {
      item: r[h],
      refIndex: h
    };
    return o.length && o.forEach((g) => {
      g(c, m);
    }), m;
  });
}
class xi {
  constructor(r, i = {}, s) {
    this.options = { ...Ce, ...i }, this.options.useExtendedSearch, this._keyStore = new _b(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof kh))
      throw new Error(pb);
    this._myIndex = i || Jy(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    ln(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const i = [];
    for (let s = 0, o = this._docs.length; s < o; s += 1) {
      const c = this._docs[s];
      r(c, s) && (this.removeAt(s), s -= 1, o -= 1, i.push(c));
    }
    return i;
  }
  removeAt(r) {
    this._docs.splice(r, 1), this._myIndex.removeAt(r);
  }
  getIndex() {
    return this._myIndex;
  }
  search(r, { limit: i = -1 } = {}) {
    const {
      includeMatches: s,
      includeScore: o,
      shouldSort: c,
      sortFn: h,
      ignoreFieldNorm: m
    } = this.options;
    let g = In(r) ? In(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return Fb(g, { ignoreFieldNorm: m }), c && g.sort(h), Xy(i) && i > -1 && (g = g.slice(0, i)), Xb(g, this._docs, {
      includeMatches: s,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const i = dh(r, this.options), { records: s } = this._myIndex, o = [];
    return s.forEach(({ v: c, i: h, n: m }) => {
      if (!ln(c))
        return;
      const { isMatch: g, score: v, indices: _ } = i.searchIn(c);
      g && o.push({
        item: c,
        idx: h,
        matches: [{ score: v, value: c, norm: m, indices: _ }]
      });
    }), o;
  }
  _searchLogical(r) {
    const i = n0(r, this.options), s = (m, g, v) => {
      if (!m.children) {
        const { keyId: b, searcher: y } = m, p = this._findMatches({
          key: this._keyStore.get(b),
          value: this._myIndex.getValueForItemAtKeyId(g, b),
          searcher: y
        });
        return p && p.length ? [
          {
            idx: v,
            item: g,
            matches: p
          }
        ] : [];
      }
      const _ = [];
      for (let b = 0, y = m.children.length; b < y; b += 1) {
        const p = m.children[b], f = s(p, g, v);
        if (f.length)
          _.push(...f);
        else if (m.operator === au.AND)
          return [];
      }
      return _;
    }, o = this._myIndex.records, c = {}, h = [];
    return o.forEach(({ $: m, i: g }) => {
      if (ln(m)) {
        let v = s(i, m, g);
        v.length && (c[g] || (c[g] = { idx: g, item: m, matches: [] }, h.push(c[g])), v.forEach(({ matches: _ }) => {
          c[g].matches.push(..._);
        }));
      }
    }), h;
  }
  _searchObjectList(r) {
    const i = dh(r, this.options), { keys: s, records: o } = this._myIndex, c = [];
    return o.forEach(({ $: h, i: m }) => {
      if (!ln(h))
        return;
      let g = [];
      s.forEach((v, _) => {
        g.push(
          ...this._findMatches({
            key: v,
            value: h[_],
            searcher: i
          })
        );
      }), g.length && c.push({
        idx: m,
        item: h,
        matches: g
      });
    }), c;
  }
  _findMatches({ key: r, value: i, searcher: s }) {
    if (!ln(i))
      return [];
    let o = [];
    if (cr(i))
      i.forEach(({ v: c, i: h, n: m }) => {
        if (!ln(c))
          return;
        const { isMatch: g, score: v, indices: _ } = s.searchIn(c);
        g && o.push({
          score: v,
          key: r,
          value: c,
          idx: h,
          norm: m,
          indices: _
        });
      });
    else {
      const { v: c, n: h } = i, { isMatch: m, score: g, indices: v } = s.searchIn(c);
      m && o.push({ score: g, key: r, value: c, norm: h, indices: v });
    }
    return o;
  }
}
xi.version = "7.1.0";
xi.createIndex = Jy;
xi.parseIndex = Tb;
xi.config = Ce;
xi.parseQuery = n0;
qb(Hb);
async function Qb(n, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[n].callback(...r);
}
async function Ae(n, r, { escapeHtml: i = !0 } = {}) {
  await Qb("echo", { severity: n, escapeHtml: (!!i).toString() }, r);
}
function $b(n, r, {
  characterOverride: i,
  isMarkdown: s,
  isPrompt: o,
  isEdit: c,
  depth: h
}) {
  return V_(n, r, { characterOverride: i, isMarkdown: s, isPrompt: o, isEdit: c, depth: h });
}
function Kb(n, r) {
  return F_(n, r);
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function sv(n, r) {
  var i = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    r && (s = s.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function qn(n) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? sv(Object(i), !0).forEach(function(s) {
      Jb(n, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : sv(Object(i)).forEach(function(s) {
      Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return n;
}
function $o(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $o = function(r) {
    return typeof r;
  } : $o = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, $o(n);
}
function Jb(n, r, i) {
  return r in n ? Object.defineProperty(n, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[r] = i, n;
}
function fr() {
  return fr = Object.assign || function(n) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
    }
    return n;
  }, fr.apply(this, arguments);
}
function Wb(n, r) {
  if (n == null) return {};
  var i = {}, s = Object.keys(n), o, c;
  for (c = 0; c < s.length; c++)
    o = s[c], !(r.indexOf(o) >= 0) && (i[o] = n[o]);
  return i;
}
function eS(n, r) {
  if (n == null) return {};
  var i = Wb(n, r), s, o;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (o = 0; o < c.length; o++)
      s = c[o], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(n, s) && (i[s] = n[s]);
  }
  return i;
}
var tS = "1.15.6";
function ur(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var hr = ur(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Vs = ur(/Edge/i), lv = ur(/firefox/i), zs = ur(/safari/i) && !ur(/chrome/i) && !ur(/android/i), Rh = ur(/iP(ad|od|hone)/i), r0 = ur(/chrome/i) && ur(/android/i), a0 = {
  capture: !1,
  passive: !1
};
function Be(n, r, i) {
  n.addEventListener(r, i, !hr && a0);
}
function Le(n, r, i) {
  n.removeEventListener(r, i, !hr && a0);
}
function iu(n, r) {
  if (r) {
    if (r[0] === ">" && (r = r.substring(1)), n)
      try {
        if (n.matches)
          return n.matches(r);
        if (n.msMatchesSelector)
          return n.msMatchesSelector(r);
        if (n.webkitMatchesSelector)
          return n.webkitMatchesSelector(r);
      } catch {
        return !1;
      }
    return !1;
  }
}
function i0(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function Tn(n, r, i, s) {
  if (n) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? n.parentNode === i && iu(n, r) : iu(n, r)) || s && n === i)
        return n;
      if (n === i) break;
    } while (n = i0(n));
  }
  return null;
}
var ov = /\s+/g;
function an(n, r, i) {
  if (n && r)
    if (n.classList)
      n.classList[i ? "add" : "remove"](r);
    else {
      var s = (" " + n.className + " ").replace(ov, " ").replace(" " + r + " ", " ");
      n.className = (s + (i ? " " + r : "")).replace(ov, " ");
    }
}
function xe(n, r, i) {
  var s = n && n.style;
  if (s) {
    if (i === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (i = n.currentStyle), r === void 0 ? i : i[r];
    !(r in s) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), s[r] = i + (typeof i == "string" ? "" : "px");
  }
}
function gi(n, r) {
  var i = "";
  if (typeof n == "string")
    i = n;
  else
    do {
      var s = xe(n, "transform");
      s && s !== "none" && (i = s + " " + i);
    } while (!r && (n = n.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(i);
}
function s0(n, r, i) {
  if (n) {
    var s = n.getElementsByTagName(r), o = 0, c = s.length;
    if (i)
      for (; o < c; o++)
        i(s[o], o);
    return s;
  }
  return [];
}
function Hn() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function gt(n, r, i, s, o) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var c, h, m, g, v, _, b;
    if (n !== window && n.parentNode && n !== Hn() ? (c = n.getBoundingClientRect(), h = c.top, m = c.left, g = c.bottom, v = c.right, _ = c.height, b = c.width) : (h = 0, m = 0, g = window.innerHeight, v = window.innerWidth, _ = window.innerHeight, b = window.innerWidth), (r || i) && n !== window && (o = o || n.parentNode, !hr))
      do
        if (o && o.getBoundingClientRect && (xe(o, "transform") !== "none" || i && xe(o, "position") !== "static")) {
          var y = o.getBoundingClientRect();
          h -= y.top + parseInt(xe(o, "border-top-width")), m -= y.left + parseInt(xe(o, "border-left-width")), g = h + c.height, v = m + c.width;
          break;
        }
      while (o = o.parentNode);
    if (s && n !== window) {
      var p = gi(o || n), f = p && p.a, S = p && p.d;
      p && (h /= S, m /= f, b /= f, _ /= S, g = h + _, v = m + b);
    }
    return {
      top: h,
      left: m,
      bottom: g,
      right: v,
      width: b,
      height: _
    };
  }
}
function uv(n, r, i) {
  for (var s = Hr(n, !0), o = gt(n)[r]; s; ) {
    var c = gt(s)[i], h = void 0;
    if (h = o >= c, !h) return s;
    if (s === Hn()) break;
    s = Hr(s, !1);
  }
  return !1;
}
function _i(n, r, i, s) {
  for (var o = 0, c = 0, h = n.children; c < h.length; ) {
    if (h[c].style.display !== "none" && h[c] !== Ee.ghost && (s || h[c] !== Ee.dragged) && Tn(h[c], i.draggable, n, !1)) {
      if (o === r)
        return h[c];
      o++;
    }
    c++;
  }
  return null;
}
function jh(n, r) {
  for (var i = n.lastElementChild; i && (i === Ee.ghost || xe(i, "display") === "none" || r && !iu(i, r)); )
    i = i.previousElementSibling;
  return i || null;
}
function yn(n, r) {
  var i = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== Ee.clone && (!r || iu(n, r)) && i++;
  return i;
}
function cv(n) {
  var r = 0, i = 0, s = Hn();
  if (n)
    do {
      var o = gi(n), c = o.a, h = o.d;
      r += n.scrollLeft * c, i += n.scrollTop * h;
    } while (n !== s && (n = n.parentNode));
  return [r, i];
}
function nS(n, r) {
  for (var i in n)
    if (n.hasOwnProperty(i)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === n[i][s]) return Number(i);
    }
  return -1;
}
function Hr(n, r) {
  if (!n || !n.getBoundingClientRect) return Hn();
  var i = n, s = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var o = xe(i);
      if (i.clientWidth < i.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return Hn();
        if (s || r) return i;
        s = !0;
      }
    }
  while (i = i.parentNode);
  return Hn();
}
function rS(n, r) {
  if (n && r)
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  return n;
}
function Zf(n, r) {
  return Math.round(n.top) === Math.round(r.top) && Math.round(n.left) === Math.round(r.left) && Math.round(n.height) === Math.round(r.height) && Math.round(n.width) === Math.round(r.width);
}
var Ls;
function l0(n, r) {
  return function() {
    if (!Ls) {
      var i = arguments, s = this;
      i.length === 1 ? n.call(s, i[0]) : n.apply(s, i), Ls = setTimeout(function() {
        Ls = void 0;
      }, r);
    }
  };
}
function aS() {
  clearTimeout(Ls), Ls = void 0;
}
function o0(n, r, i) {
  n.scrollLeft += r, n.scrollTop += i;
}
function u0(n) {
  var r = window.Polymer, i = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(n).cloneNode(!0) : i ? i(n).clone(!0)[0] : n.cloneNode(!0);
}
function c0(n, r, i) {
  var s = {};
  return Array.from(n.children).forEach(function(o) {
    var c, h, m, g;
    if (!(!Tn(o, r.draggable, n, !1) || o.animated || o === i)) {
      var v = gt(o);
      s.left = Math.min((c = s.left) !== null && c !== void 0 ? c : 1 / 0, v.left), s.top = Math.min((h = s.top) !== null && h !== void 0 ? h : 1 / 0, v.top), s.right = Math.max((m = s.right) !== null && m !== void 0 ? m : -1 / 0, v.right), s.bottom = Math.max((g = s.bottom) !== null && g !== void 0 ? g : -1 / 0, v.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var Ft = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function iS() {
  var n = [], r;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(o) {
          if (!(xe(o, "display") === "none" || o === Ee.ghost)) {
            n.push({
              target: o,
              rect: gt(o)
            });
            var c = qn({}, n[n.length - 1].rect);
            if (o.thisAnimationDuration) {
              var h = gi(o, !0);
              h && (c.top -= h.f, c.left -= h.e);
            }
            o.fromRect = c;
          }
        });
      }
    },
    addAnimationState: function(s) {
      n.push(s);
    },
    removeAnimationState: function(s) {
      n.splice(nS(n, {
        target: s
      }), 1);
    },
    animateAll: function(s) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof s == "function" && s();
        return;
      }
      var c = !1, h = 0;
      n.forEach(function(m) {
        var g = 0, v = m.target, _ = v.fromRect, b = gt(v), y = v.prevFromRect, p = v.prevToRect, f = m.rect, S = gi(v, !0);
        S && (b.top -= S.f, b.left -= S.e), v.toRect = b, v.thisAnimationDuration && Zf(y, b) && !Zf(_, b) && // Make sure animatingRect is on line between toRect & fromRect
        (f.top - b.top) / (f.left - b.left) === (_.top - b.top) / (_.left - b.left) && (g = lS(f, y, p, o.options)), Zf(b, _) || (v.prevFromRect = _, v.prevToRect = b, g || (g = o.options.animation), o.animate(v, f, b, g)), g && (c = !0, h = Math.max(h, g), clearTimeout(v.animationResetTimer), v.animationResetTimer = setTimeout(function() {
          v.animationTime = 0, v.prevFromRect = null, v.fromRect = null, v.prevToRect = null, v.thisAnimationDuration = null;
        }, g), v.thisAnimationDuration = g);
      }), clearTimeout(r), c ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, h) : typeof s == "function" && s(), n = [];
    },
    animate: function(s, o, c, h) {
      if (h) {
        xe(s, "transition", ""), xe(s, "transform", "");
        var m = gi(this.el), g = m && m.a, v = m && m.d, _ = (o.left - c.left) / (g || 1), b = (o.top - c.top) / (v || 1);
        s.animatingX = !!_, s.animatingY = !!b, xe(s, "transform", "translate3d(" + _ + "px," + b + "px,0)"), this.forRepaintDummy = sS(s), xe(s, "transition", "transform " + h + "ms" + (this.options.easing ? " " + this.options.easing : "")), xe(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          xe(s, "transition", ""), xe(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, h);
      }
    }
  };
}
function sS(n) {
  return n.offsetWidth;
}
function lS(n, r, i, s) {
  return Math.sqrt(Math.pow(r.top - n.top, 2) + Math.pow(r.left - n.left, 2)) / Math.sqrt(Math.pow(r.top - i.top, 2) + Math.pow(r.left - i.left, 2)) * s.animation;
}
var li = [], Gf = {
  initializeByDefault: !0
}, Ys = {
  mount: function(r) {
    for (var i in Gf)
      Gf.hasOwnProperty(i) && !(i in r) && (r[i] = Gf[i]);
    li.forEach(function(s) {
      if (s.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), li.push(r);
  },
  pluginEvent: function(r, i, s) {
    var o = this;
    this.eventCanceled = !1, s.cancel = function() {
      o.eventCanceled = !0;
    };
    var c = r + "Global";
    li.forEach(function(h) {
      i[h.pluginName] && (i[h.pluginName][c] && i[h.pluginName][c](qn({
        sortable: i
      }, s)), i.options[h.pluginName] && i[h.pluginName][r] && i[h.pluginName][r](qn({
        sortable: i
      }, s)));
    });
  },
  initializePlugins: function(r, i, s, o) {
    li.forEach(function(m) {
      var g = m.pluginName;
      if (!(!r.options[g] && !m.initializeByDefault)) {
        var v = new m(r, i, r.options);
        v.sortable = r, v.options = r.options, r[g] = v, fr(s, v.defaults);
      }
    });
    for (var c in r.options)
      if (r.options.hasOwnProperty(c)) {
        var h = this.modifyOption(r, c, r.options[c]);
        typeof h < "u" && (r.options[c] = h);
      }
  },
  getEventProperties: function(r, i) {
    var s = {};
    return li.forEach(function(o) {
      typeof o.eventProperties == "function" && fr(s, o.eventProperties.call(i[o.pluginName], r));
    }), s;
  },
  modifyOption: function(r, i, s) {
    var o;
    return li.forEach(function(c) {
      r[c.pluginName] && c.optionListeners && typeof c.optionListeners[i] == "function" && (o = c.optionListeners[i].call(r[c.pluginName], s));
    }), o;
  }
};
function oS(n) {
  var r = n.sortable, i = n.rootEl, s = n.name, o = n.targetEl, c = n.cloneEl, h = n.toEl, m = n.fromEl, g = n.oldIndex, v = n.newIndex, _ = n.oldDraggableIndex, b = n.newDraggableIndex, y = n.originalEvent, p = n.putSortable, f = n.extraEventProperties;
  if (r = r || i && i[Ft], !!r) {
    var S, x = r.options, T = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !hr && !Vs ? S = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(s, !0, !0)), S.to = h || i, S.from = m || i, S.item = o || i, S.clone = c, S.oldIndex = g, S.newIndex = v, S.oldDraggableIndex = _, S.newDraggableIndex = b, S.originalEvent = y, S.pullMode = p ? p.lastPutMode : void 0;
    var w = qn(qn({}, f), Ys.getEventProperties(s, r));
    for (var N in w)
      S[N] = w[N];
    i && i.dispatchEvent(S), x[T] && x[T].call(r, S);
  }
}
var uS = ["evt"], Zt = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = s.evt, c = eS(s, uS);
  Ys.pluginEvent.bind(Ee)(r, i, qn({
    dragEl: se,
    parentEl: ot,
    ghostEl: De,
    rootEl: tt,
    nextEl: fa,
    lastDownEl: Ko,
    cloneEl: at,
    cloneHidden: Ir,
    dragStarted: Ms,
    putSortable: Nt,
    activeSortable: Ee.active,
    originalEvent: o,
    oldIndex: di,
    oldDraggableIndex: Bs,
    newIndex: sn,
    newDraggableIndex: Pr,
    hideGhostForTarget: p0,
    unhideGhostForTarget: m0,
    cloneNowHidden: function() {
      Ir = !0;
    },
    cloneNowShown: function() {
      Ir = !1;
    },
    dispatchSortableEvent: function(m) {
      Bt({
        sortable: i,
        name: m,
        originalEvent: o
      });
    }
  }, c));
};
function Bt(n) {
  oS(qn({
    putSortable: Nt,
    cloneEl: at,
    targetEl: se,
    rootEl: tt,
    oldIndex: di,
    oldDraggableIndex: Bs,
    newIndex: sn,
    newDraggableIndex: Pr
  }, n));
}
var se, ot, De, tt, fa, Ko, at, Ir, di, sn, Bs, Pr, po, Nt, hi = !1, su = !1, lu = [], ua, wn, Ff, Vf, fv, hv, Ms, oi, Us, Ps = !1, mo = !1, Jo, jt, Yf = [], gh = !1, ou = [], vu = typeof document < "u", go = Rh, dv = Vs || hr ? "cssFloat" : "float", cS = vu && !r0 && !Rh && "draggable" in document.createElement("div"), f0 = (function() {
  if (vu) {
    if (hr)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
})(), h0 = function(r, i) {
  var s = xe(r), o = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), c = _i(r, 0, i), h = _i(r, 1, i), m = c && xe(c), g = h && xe(h), v = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + gt(c).width, _ = g && parseInt(g.marginLeft) + parseInt(g.marginRight) + gt(h).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && m.float && m.float !== "none") {
    var b = m.float === "left" ? "left" : "right";
    return h && (g.clear === "both" || g.clear === b) ? "vertical" : "horizontal";
  }
  return c && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || v >= o && s[dv] === "none" || h && s[dv] === "none" && v + _ > o) ? "vertical" : "horizontal";
}, fS = function(r, i, s) {
  var o = s ? r.left : r.top, c = s ? r.right : r.bottom, h = s ? r.width : r.height, m = s ? i.left : i.top, g = s ? i.right : i.bottom, v = s ? i.width : i.height;
  return o === m || c === g || o + h / 2 === m + v / 2;
}, hS = function(r, i) {
  var s;
  return lu.some(function(o) {
    var c = o[Ft].options.emptyInsertThreshold;
    if (!(!c || jh(o))) {
      var h = gt(o), m = r >= h.left - c && r <= h.right + c, g = i >= h.top - c && i <= h.bottom + c;
      if (m && g)
        return s = o;
    }
  }), s;
}, d0 = function(r) {
  function i(c, h) {
    return function(m, g, v, _) {
      var b = m.options.group.name && g.options.group.name && m.options.group.name === g.options.group.name;
      if (c == null && (h || b))
        return !0;
      if (c == null || c === !1)
        return !1;
      if (h && c === "clone")
        return c;
      if (typeof c == "function")
        return i(c(m, g, v, _), h)(m, g, v, _);
      var y = (h ? m : g).options.group.name;
      return c === !0 || typeof c == "string" && c === y || c.join && c.indexOf(y) > -1;
    };
  }
  var s = {}, o = r.group;
  (!o || $o(o) != "object") && (o = {
    name: o
  }), s.name = o.name, s.checkPull = i(o.pull, !0), s.checkPut = i(o.put), s.revertClone = o.revertClone, r.group = s;
}, p0 = function() {
  !f0 && De && xe(De, "display", "none");
}, m0 = function() {
  !f0 && De && xe(De, "display", "");
};
vu && !r0 && document.addEventListener("click", function(n) {
  if (su)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), su = !1, !1;
}, !0);
var ca = function(r) {
  if (se) {
    r = r.touches ? r.touches[0] : r;
    var i = hS(r.clientX, r.clientY);
    if (i) {
      var s = {};
      for (var o in r)
        r.hasOwnProperty(o) && (s[o] = r[o]);
      s.target = s.rootEl = i, s.preventDefault = void 0, s.stopPropagation = void 0, i[Ft]._onDragOver(s);
    }
  }
}, dS = function(r) {
  se && se.parentNode[Ft]._isOutsideThisEl(r.target);
};
function Ee(n, r) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));
  this.el = n, this.options = r = fr({}, r), n[Ft] = this;
  var i = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(n.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return h0(n, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(h, m) {
      h.setData("Text", m.textContent);
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
    supportPointer: Ee.supportPointer !== !1 && "PointerEvent" in window && (!zs || Rh),
    emptyInsertThreshold: 5
  };
  Ys.initializePlugins(this, n, i);
  for (var s in i)
    !(s in r) && (r[s] = i[s]);
  d0(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : cS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Be(n, "pointerdown", this._onTapStart) : (Be(n, "mousedown", this._onTapStart), Be(n, "touchstart", this._onTapStart)), this.nativeDraggable && (Be(n, "dragover", this), Be(n, "dragenter", this)), lu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), fr(this, iS());
}
Ee.prototype = /** @lends Sortable.prototype */
{
  constructor: Ee,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (oi = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, se) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, o = this.options, c = o.preventOnFilter, h = r.type, m = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, g = (m || r).target, v = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || g, _ = o.filter;
      if (SS(s), !se && !(/mousedown|pointerdown/.test(h) && r.button !== 0 || o.disabled) && !v.isContentEditable && !(!this.nativeDraggable && zs && g && g.tagName.toUpperCase() === "SELECT") && (g = Tn(g, o.draggable, s, !1), !(g && g.animated) && Ko !== g)) {
        if (di = yn(g), Bs = yn(g, o.draggable), typeof _ == "function") {
          if (_.call(this, r, g, this)) {
            Bt({
              sortable: i,
              rootEl: v,
              name: "filter",
              targetEl: g,
              toEl: s,
              fromEl: s
            }), Zt("filter", i, {
              evt: r
            }), c && r.preventDefault();
            return;
          }
        } else if (_ && (_ = _.split(",").some(function(b) {
          if (b = Tn(v, b.trim(), s, !1), b)
            return Bt({
              sortable: i,
              rootEl: b,
              name: "filter",
              targetEl: g,
              fromEl: s,
              toEl: s
            }), Zt("filter", i, {
              evt: r
            }), !0;
        }), _)) {
          c && r.preventDefault();
          return;
        }
        o.handle && !Tn(v, o.handle, s, !1) || this._prepareDragStart(r, m, g);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var o = this, c = o.el, h = o.options, m = c.ownerDocument, g;
    if (s && !se && s.parentNode === c) {
      var v = gt(s);
      if (tt = c, se = s, ot = se.parentNode, fa = se.nextSibling, Ko = s, po = h.group, Ee.dragged = se, ua = {
        target: se,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, fv = ua.clientX - v.left, hv = ua.clientY - v.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, se.style["will-change"] = "all", g = function() {
        if (Zt("delayEnded", o, {
          evt: r
        }), Ee.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !lv && o.nativeDraggable && (se.draggable = !0), o._triggerDragStart(r, i), Bt({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), an(se, h.chosenClass, !0);
      }, h.ignore.split(",").forEach(function(_) {
        s0(se, _.trim(), Xf);
      }), Be(m, "dragover", ca), Be(m, "mousemove", ca), Be(m, "touchmove", ca), h.supportPointer ? (Be(m, "pointerup", o._onDrop), !this.nativeDraggable && Be(m, "pointercancel", o._onDrop)) : (Be(m, "mouseup", o._onDrop), Be(m, "touchend", o._onDrop), Be(m, "touchcancel", o._onDrop)), lv && this.nativeDraggable && (this.options.touchStartThreshold = 4, se.draggable = !0), Zt("delayStart", this, {
        evt: r
      }), h.delay && (!h.delayOnTouchOnly || i) && (!this.nativeDraggable || !(Vs || hr))) {
        if (Ee.eventCanceled) {
          this._onDrop();
          return;
        }
        h.supportPointer ? (Be(m, "pointerup", o._disableDelayedDrag), Be(m, "pointercancel", o._disableDelayedDrag)) : (Be(m, "mouseup", o._disableDelayedDrag), Be(m, "touchend", o._disableDelayedDrag), Be(m, "touchcancel", o._disableDelayedDrag)), Be(m, "mousemove", o._delayedDragTouchMoveHandler), Be(m, "touchmove", o._delayedDragTouchMoveHandler), h.supportPointer && Be(m, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(g, h.delay);
      } else
        g();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var i = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    se && Xf(se), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Le(r, "mouseup", this._disableDelayedDrag), Le(r, "touchend", this._disableDelayedDrag), Le(r, "touchcancel", this._disableDelayedDrag), Le(r, "pointerup", this._disableDelayedDrag), Le(r, "pointercancel", this._disableDelayedDrag), Le(r, "mousemove", this._delayedDragTouchMoveHandler), Le(r, "touchmove", this._delayedDragTouchMoveHandler), Le(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Be(document, "pointermove", this._onTouchMove) : i ? Be(document, "touchmove", this._onTouchMove) : Be(document, "mousemove", this._onTouchMove) : (Be(se, "dragend", this), Be(tt, "dragstart", this._onDragStart));
    try {
      document.selection ? Wo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (hi = !1, tt && se) {
      Zt("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Be(document, "dragover", dS);
      var s = this.options;
      !r && an(se, s.dragClass, !1), an(se, s.ghostClass, !0), Ee.active = this, r && this._appendGhost(), Bt({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (wn) {
      this._lastX = wn.clientX, this._lastY = wn.clientY, p0();
      for (var r = document.elementFromPoint(wn.clientX, wn.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(wn.clientX, wn.clientY), r !== i); )
        i = r;
      if (se.parentNode[Ft]._isOutsideThisEl(r), i)
        do {
          if (i[Ft]) {
            var s = void 0;
            if (s = i[Ft]._onDragOver({
              clientX: wn.clientX,
              clientY: wn.clientY,
              target: r,
              rootEl: i
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = i;
        } while (i = i0(i));
      m0();
    }
  },
  _onTouchMove: function(r) {
    if (ua) {
      var i = this.options, s = i.fallbackTolerance, o = i.fallbackOffset, c = r.touches ? r.touches[0] : r, h = De && gi(De, !0), m = De && h && h.a, g = De && h && h.d, v = go && jt && cv(jt), _ = (c.clientX - ua.clientX + o.x) / (m || 1) + (v ? v[0] - Yf[0] : 0) / (m || 1), b = (c.clientY - ua.clientY + o.y) / (g || 1) + (v ? v[1] - Yf[1] : 0) / (g || 1);
      if (!Ee.active && !hi) {
        if (s && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (De) {
        h ? (h.e += _ - (Ff || 0), h.f += b - (Vf || 0)) : h = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: _,
          f: b
        };
        var y = "matrix(".concat(h.a, ",").concat(h.b, ",").concat(h.c, ",").concat(h.d, ",").concat(h.e, ",").concat(h.f, ")");
        xe(De, "webkitTransform", y), xe(De, "mozTransform", y), xe(De, "msTransform", y), xe(De, "transform", y), Ff = _, Vf = b, wn = c;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!De) {
      var r = this.options.fallbackOnBody ? document.body : tt, i = gt(se, !0, go, !0, r), s = this.options;
      if (go) {
        for (jt = r; xe(jt, "position") === "static" && xe(jt, "transform") === "none" && jt !== document; )
          jt = jt.parentNode;
        jt !== document.body && jt !== document.documentElement ? (jt === document && (jt = Hn()), i.top += jt.scrollTop, i.left += jt.scrollLeft) : jt = Hn(), Yf = cv(jt);
      }
      De = se.cloneNode(!0), an(De, s.ghostClass, !1), an(De, s.fallbackClass, !0), an(De, s.dragClass, !0), xe(De, "transition", ""), xe(De, "transform", ""), xe(De, "box-sizing", "border-box"), xe(De, "margin", 0), xe(De, "top", i.top), xe(De, "left", i.left), xe(De, "width", i.width), xe(De, "height", i.height), xe(De, "opacity", "0.8"), xe(De, "position", go ? "absolute" : "fixed"), xe(De, "zIndex", "100000"), xe(De, "pointerEvents", "none"), Ee.ghost = De, r.appendChild(De), xe(De, "transform-origin", fv / parseInt(De.style.width) * 100 + "% " + hv / parseInt(De.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, o = r.dataTransfer, c = s.options;
    if (Zt("dragStart", this, {
      evt: r
    }), Ee.eventCanceled) {
      this._onDrop();
      return;
    }
    Zt("setupClone", this), Ee.eventCanceled || (at = u0(se), at.removeAttribute("id"), at.draggable = !1, at.style["will-change"] = "", this._hideClone(), an(at, this.options.chosenClass, !1), Ee.clone = at), s.cloneId = Wo(function() {
      Zt("clone", s), !Ee.eventCanceled && (s.options.removeCloneOnHide || tt.insertBefore(at, se), s._hideClone(), Bt({
        sortable: s,
        name: "clone"
      }));
    }), !i && an(se, c.dragClass, !0), i ? (su = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (Le(document, "mouseup", s._onDrop), Le(document, "touchend", s._onDrop), Le(document, "touchcancel", s._onDrop), o && (o.effectAllowed = "move", c.setData && c.setData.call(s, o, se)), Be(document, "drop", s), xe(se, "transform", "translateZ(0)")), hi = !0, s._dragStartId = Wo(s._dragStarted.bind(s, i, r)), Be(document, "selectstart", s), Ms = !0, window.getSelection().removeAllRanges(), zs && xe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, o, c, h, m = this.options, g = m.group, v = Ee.active, _ = po === g, b = m.sort, y = Nt || v, p, f = this, S = !1;
    if (gh) return;
    function x(ue, ke) {
      Zt(ue, f, qn({
        evt: r,
        isOwner: _,
        axis: p ? "vertical" : "horizontal",
        revert: h,
        dragRect: o,
        targetRect: c,
        canSort: b,
        fromSortable: y,
        target: s,
        completed: w,
        onMove: function(j, F) {
          return vo(tt, i, se, o, j, gt(j), r, F);
        },
        changed: N
      }, ke));
    }
    function T() {
      x("dragOverAnimationCapture"), f.captureAnimationState(), f !== y && y.captureAnimationState();
    }
    function w(ue) {
      return x("dragOverCompleted", {
        insertion: ue
      }), ue && (_ ? v._hideClone() : v._showClone(f), f !== y && (an(se, Nt ? Nt.options.ghostClass : v.options.ghostClass, !1), an(se, m.ghostClass, !0)), Nt !== f && f !== Ee.active ? Nt = f : f === Ee.active && Nt && (Nt = null), y === f && (f._ignoreWhileAnimating = s), f.animateAll(function() {
        x("dragOverAnimationComplete"), f._ignoreWhileAnimating = null;
      }), f !== y && (y.animateAll(), y._ignoreWhileAnimating = null)), (s === se && !se.animated || s === i && !s.animated) && (oi = null), !m.dragoverBubble && !r.rootEl && s !== document && (se.parentNode[Ft]._isOutsideThisEl(r.target), !ue && ca(r)), !m.dragoverBubble && r.stopPropagation && r.stopPropagation(), S = !0;
    }
    function N() {
      sn = yn(se), Pr = yn(se, m.draggable), Bt({
        sortable: f,
        name: "change",
        toEl: i,
        newIndex: sn,
        newDraggableIndex: Pr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Tn(s, m.draggable, i, !0), x("dragOver"), Ee.eventCanceled) return S;
    if (se.contains(r.target) || s.animated && s.animatingX && s.animatingY || f._ignoreWhileAnimating === s)
      return w(!1);
    if (su = !1, v && !m.disabled && (_ ? b || (h = ot !== tt) : Nt === this || (this.lastPutMode = po.checkPull(this, v, se, r)) && g.checkPut(this, v, se, r))) {
      if (p = this._getDirection(r, s) === "vertical", o = gt(se), x("dragOverValid"), Ee.eventCanceled) return S;
      if (h)
        return ot = tt, T(), this._hideClone(), x("revert"), Ee.eventCanceled || (fa ? tt.insertBefore(se, fa) : tt.appendChild(se)), w(!0);
      var C = jh(i, m.draggable);
      if (!C || vS(r, p, this) && !C.animated) {
        if (C === se)
          return w(!1);
        if (C && i === r.target && (s = C), s && (c = gt(s)), vo(tt, i, se, o, s, c, r, !!s) !== !1)
          return T(), C && C.nextSibling ? i.insertBefore(se, C.nextSibling) : i.appendChild(se), ot = i, N(), w(!0);
      } else if (C && gS(r, p, this)) {
        var O = _i(i, 0, m, !0);
        if (O === se)
          return w(!1);
        if (s = O, c = gt(s), vo(tt, i, se, o, s, c, r, !1) !== !1)
          return T(), i.insertBefore(se, O), ot = i, N(), w(!0);
      } else if (s.parentNode === i) {
        c = gt(s);
        var z = 0, R, Z = se.parentNode !== i, te = !fS(se.animated && se.toRect || o, s.animated && s.toRect || c, p), $ = p ? "top" : "left", Q = uv(s, "top", "top") || uv(se, "top", "top"), ee = Q ? Q.scrollTop : void 0;
        oi !== s && (R = c[$], Ps = !1, mo = !te && m.invertSwap || Z), z = yS(r, s, c, p, te ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, mo, oi === s);
        var fe;
        if (z !== 0) {
          var de = yn(se);
          do
            de -= z, fe = ot.children[de];
          while (fe && (xe(fe, "display") === "none" || fe === De));
        }
        if (z === 0 || fe === s)
          return w(!1);
        oi = s, Us = z;
        var be = s.nextElementSibling, H = !1;
        H = z === 1;
        var re = vo(tt, i, se, o, s, c, r, H);
        if (re !== !1)
          return (re === 1 || re === -1) && (H = re === 1), gh = !0, setTimeout(mS, 30), T(), H && !be ? i.appendChild(se) : s.parentNode.insertBefore(se, H ? be : s), Q && o0(Q, 0, ee - Q.scrollTop), ot = se.parentNode, R !== void 0 && !mo && (Jo = Math.abs(R - gt(s)[$])), N(), w(!0);
      }
      if (i.contains(se))
        return w(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Le(document, "mousemove", this._onTouchMove), Le(document, "touchmove", this._onTouchMove), Le(document, "pointermove", this._onTouchMove), Le(document, "dragover", ca), Le(document, "mousemove", ca), Le(document, "touchmove", ca);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Le(r, "mouseup", this._onDrop), Le(r, "touchend", this._onDrop), Le(r, "pointerup", this._onDrop), Le(r, "pointercancel", this._onDrop), Le(r, "touchcancel", this._onDrop), Le(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var i = this.el, s = this.options;
    if (sn = yn(se), Pr = yn(se, s.draggable), Zt("drop", this, {
      evt: r
    }), ot = se && se.parentNode, sn = yn(se), Pr = yn(se, s.draggable), Ee.eventCanceled) {
      this._nulling();
      return;
    }
    hi = !1, mo = !1, Ps = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), vh(this.cloneId), vh(this._dragStartId), this.nativeDraggable && (Le(document, "drop", this), Le(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), zs && xe(document.body, "user-select", ""), xe(se, "transform", ""), r && (Ms && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), De && De.parentNode && De.parentNode.removeChild(De), (tt === ot || Nt && Nt.lastPutMode !== "clone") && at && at.parentNode && at.parentNode.removeChild(at), se && (this.nativeDraggable && Le(se, "dragend", this), Xf(se), se.style["will-change"] = "", Ms && !hi && an(se, Nt ? Nt.options.ghostClass : this.options.ghostClass, !1), an(se, this.options.chosenClass, !1), Bt({
      sortable: this,
      name: "unchoose",
      toEl: ot,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), tt !== ot ? (sn >= 0 && (Bt({
      rootEl: ot,
      name: "add",
      toEl: ot,
      fromEl: tt,
      originalEvent: r
    }), Bt({
      sortable: this,
      name: "remove",
      toEl: ot,
      originalEvent: r
    }), Bt({
      rootEl: ot,
      name: "sort",
      toEl: ot,
      fromEl: tt,
      originalEvent: r
    }), Bt({
      sortable: this,
      name: "sort",
      toEl: ot,
      originalEvent: r
    })), Nt && Nt.save()) : sn !== di && sn >= 0 && (Bt({
      sortable: this,
      name: "update",
      toEl: ot,
      originalEvent: r
    }), Bt({
      sortable: this,
      name: "sort",
      toEl: ot,
      originalEvent: r
    })), Ee.active && ((sn == null || sn === -1) && (sn = di, Pr = Bs), Bt({
      sortable: this,
      name: "end",
      toEl: ot,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Zt("nulling", this), tt = se = ot = De = fa = at = Ko = Ir = ua = wn = Ms = sn = Pr = di = Bs = oi = Us = Nt = po = Ee.dragged = Ee.ghost = Ee.clone = Ee.active = null, ou.forEach(function(r) {
      r.checked = !0;
    }), ou.length = Ff = Vf = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        se && (this._onDragOver(r), pS(r));
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
    for (var r = [], i, s = this.el.children, o = 0, c = s.length, h = this.options; o < c; o++)
      i = s[o], Tn(i, h.draggable, this.el, !1) && r.push(i.getAttribute(h.dataIdAttr) || bS(i));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, i) {
    var s = {}, o = this.el;
    this.toArray().forEach(function(c, h) {
      var m = o.children[h];
      Tn(m, this.options.draggable, o, !1) && (s[c] = m);
    }, this), i && this.captureAnimationState(), r.forEach(function(c) {
      s[c] && (o.removeChild(s[c]), o.appendChild(s[c]));
    }), i && this.animateAll();
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
  closest: function(r, i) {
    return Tn(r, i || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(r, i) {
    var s = this.options;
    if (i === void 0)
      return s[r];
    var o = Ys.modifyOption(this, r, i);
    typeof o < "u" ? s[r] = o : s[r] = i, r === "group" && d0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Zt("destroy", this);
    var r = this.el;
    r[Ft] = null, Le(r, "mousedown", this._onTapStart), Le(r, "touchstart", this._onTapStart), Le(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Le(r, "dragover", this), Le(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), lu.splice(lu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!Ir) {
      if (Zt("hideClone", this), Ee.eventCanceled) return;
      xe(at, "display", "none"), this.options.removeCloneOnHide && at.parentNode && at.parentNode.removeChild(at), Ir = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ir) {
      if (Zt("showClone", this), Ee.eventCanceled) return;
      se.parentNode == tt && !this.options.group.revertClone ? tt.insertBefore(at, se) : fa ? tt.insertBefore(at, fa) : tt.appendChild(at), this.options.group.revertClone && this.animate(se, at), xe(at, "display", ""), Ir = !1;
    }
  }
};
function pS(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function vo(n, r, i, s, o, c, h, m) {
  var g, v = n[Ft], _ = v.options.onMove, b;
  return window.CustomEvent && !hr && !Vs ? g = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (g = document.createEvent("Event"), g.initEvent("move", !0, !0)), g.to = r, g.from = n, g.dragged = i, g.draggedRect = s, g.related = o || r, g.relatedRect = c || gt(r), g.willInsertAfter = m, g.originalEvent = h, n.dispatchEvent(g), _ && (b = _.call(v, g, h)), b;
}
function Xf(n) {
  n.draggable = !1;
}
function mS() {
  gh = !1;
}
function gS(n, r, i) {
  var s = gt(_i(i.el, 0, i.options, !0)), o = c0(i.el, i.options, De), c = 10;
  return r ? n.clientX < o.left - c || n.clientY < s.top && n.clientX < s.right : n.clientY < o.top - c || n.clientY < s.bottom && n.clientX < s.left;
}
function vS(n, r, i) {
  var s = gt(jh(i.el, i.options.draggable)), o = c0(i.el, i.options, De), c = 10;
  return r ? n.clientX > o.right + c || n.clientY > s.bottom && n.clientX > s.left : n.clientY > o.bottom + c || n.clientX > s.right && n.clientY > s.top;
}
function yS(n, r, i, s, o, c, h, m) {
  var g = s ? n.clientY : n.clientX, v = s ? i.height : i.width, _ = s ? i.top : i.left, b = s ? i.bottom : i.right, y = !1;
  if (!h) {
    if (m && Jo < v * o) {
      if (!Ps && (Us === 1 ? g > _ + v * c / 2 : g < b - v * c / 2) && (Ps = !0), Ps)
        y = !0;
      else if (Us === 1 ? g < _ + Jo : g > b - Jo)
        return -Us;
    } else if (g > _ + v * (1 - o) / 2 && g < b - v * (1 - o) / 2)
      return _S(r);
  }
  return y = y || h, y && (g < _ + v * c / 2 || g > b - v * c / 2) ? g > _ + v / 2 ? 1 : -1 : 0;
}
function _S(n) {
  return yn(se) < yn(n) ? 1 : -1;
}
function bS(n) {
  for (var r = n.tagName + n.className + n.src + n.href + n.textContent, i = r.length, s = 0; i--; )
    s += r.charCodeAt(i);
  return s.toString(36);
}
function SS(n) {
  ou.length = 0;
  for (var r = n.getElementsByTagName("input"), i = r.length; i--; ) {
    var s = r[i];
    s.checked && ou.push(s);
  }
}
function Wo(n) {
  return setTimeout(n, 0);
}
function vh(n) {
  return clearTimeout(n);
}
vu && Be(document, "touchmove", function(n) {
  (Ee.active || hi) && n.cancelable && n.preventDefault();
});
Ee.utils = {
  on: Be,
  off: Le,
  css: xe,
  find: s0,
  is: function(r, i) {
    return !!Tn(r, i, r, !1);
  },
  extend: rS,
  throttle: l0,
  closest: Tn,
  toggleClass: an,
  clone: u0,
  index: yn,
  nextTick: Wo,
  cancelNextTick: vh,
  detectDirection: h0,
  getChild: _i,
  expando: Ft
};
Ee.get = function(n) {
  return n[Ft];
};
Ee.mount = function() {
  for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (Ee.utils = qn(qn({}, Ee.utils), s.utils)), Ys.mount(s);
  });
};
Ee.create = function(n, r) {
  return new Ee(n, r);
};
Ee.version = tS;
var pt = [], ks, yh, _h = !1, Qf, $f, uu, Rs;
function xS() {
  function n() {
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
  return n.prototype = {
    dragStarted: function(i) {
      var s = i.originalEvent;
      this.sortable.nativeDraggable ? Be(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Be(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Be(document, "touchmove", this._handleFallbackAutoScroll) : Be(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var s = i.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Le(document, "dragover", this._handleAutoScroll) : (Le(document, "pointermove", this._handleFallbackAutoScroll), Le(document, "touchmove", this._handleFallbackAutoScroll), Le(document, "mousemove", this._handleFallbackAutoScroll)), pv(), eu(), aS();
    },
    nulling: function() {
      uu = yh = ks = _h = Rs = Qf = $f = null, pt.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, s) {
      var o = this, c = (i.touches ? i.touches[0] : i).clientX, h = (i.touches ? i.touches[0] : i).clientY, m = document.elementFromPoint(c, h);
      if (uu = i, s || this.options.forceAutoScrollFallback || Vs || hr || zs) {
        Kf(i, this.options, m, s);
        var g = Hr(m, !0);
        _h && (!Rs || c !== Qf || h !== $f) && (Rs && pv(), Rs = setInterval(function() {
          var v = Hr(document.elementFromPoint(c, h), !0);
          v !== g && (g = v, eu()), Kf(i, o.options, v, s);
        }, 10), Qf = c, $f = h);
      } else {
        if (!this.options.bubbleScroll || Hr(m, !0) === Hn()) {
          eu();
          return;
        }
        Kf(i, this.options, Hr(m, !1), !1);
      }
    }
  }, fr(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function eu() {
  pt.forEach(function(n) {
    clearInterval(n.pid);
  }), pt = [];
}
function pv() {
  clearInterval(Rs);
}
var Kf = l0(function(n, r, i, s) {
  if (r.scroll) {
    var o = (n.touches ? n.touches[0] : n).clientX, c = (n.touches ? n.touches[0] : n).clientY, h = r.scrollSensitivity, m = r.scrollSpeed, g = Hn(), v = !1, _;
    yh !== i && (yh = i, eu(), ks = r.scroll, _ = r.scrollFn, ks === !0 && (ks = Hr(i, !0)));
    var b = 0, y = ks;
    do {
      var p = y, f = gt(p), S = f.top, x = f.bottom, T = f.left, w = f.right, N = f.width, C = f.height, O = void 0, z = void 0, R = p.scrollWidth, Z = p.scrollHeight, te = xe(p), $ = p.scrollLeft, Q = p.scrollTop;
      p === g ? (O = N < R && (te.overflowX === "auto" || te.overflowX === "scroll" || te.overflowX === "visible"), z = C < Z && (te.overflowY === "auto" || te.overflowY === "scroll" || te.overflowY === "visible")) : (O = N < R && (te.overflowX === "auto" || te.overflowX === "scroll"), z = C < Z && (te.overflowY === "auto" || te.overflowY === "scroll"));
      var ee = O && (Math.abs(w - o) <= h && $ + N < R) - (Math.abs(T - o) <= h && !!$), fe = z && (Math.abs(x - c) <= h && Q + C < Z) - (Math.abs(S - c) <= h && !!Q);
      if (!pt[b])
        for (var de = 0; de <= b; de++)
          pt[de] || (pt[de] = {});
      (pt[b].vx != ee || pt[b].vy != fe || pt[b].el !== p) && (pt[b].el = p, pt[b].vx = ee, pt[b].vy = fe, clearInterval(pt[b].pid), (ee != 0 || fe != 0) && (v = !0, pt[b].pid = setInterval((function() {
        s && this.layer === 0 && Ee.active._onTouchMove(uu);
        var be = pt[this.layer].vy ? pt[this.layer].vy * m : 0, H = pt[this.layer].vx ? pt[this.layer].vx * m : 0;
        typeof _ == "function" && _.call(Ee.dragged.parentNode[Ft], H, be, n, uu, pt[this.layer].el) !== "continue" || o0(pt[this.layer].el, H, be);
      }).bind({
        layer: b
      }), 24))), b++;
    } while (r.bubbleScroll && y !== g && (y = Hr(y, !1)));
    _h = v;
  }
}, 30), g0 = function(r) {
  var i = r.originalEvent, s = r.putSortable, o = r.dragEl, c = r.activeSortable, h = r.dispatchSortableEvent, m = r.hideGhostForTarget, g = r.unhideGhostForTarget;
  if (i) {
    var v = s || c;
    m();
    var _ = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, b = document.elementFromPoint(_.clientX, _.clientY);
    g(), v && !v.el.contains(b) && (h("spill"), this.onSpill({
      dragEl: o,
      putSortable: s
    }));
  }
};
function zh() {
}
zh.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var i = r.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable;
    this.sortable.captureAnimationState(), s && s.captureAnimationState();
    var o = _i(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(i, o) : this.sortable.el.appendChild(i), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: g0
};
fr(zh, {
  pluginName: "revertOnSpill"
});
function Lh() {
}
Lh.prototype = {
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable, o = s || this.sortable;
    o.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), o.animateAll();
  },
  drop: g0
};
fr(Lh, {
  pluginName: "removeOnSpill"
});
Ee.mount(new xS());
Ee.mount(Lh, zh);
async function ES({
  entry: n,
  selectedWorldName: r,
  skipSave: i = !1,
  skipReload: s = !1,
  operation: o = "auto"
}) {
  const c = SillyTavern.getContext(), h = await c.loadWorldInfo(r);
  if (!h)
    throw new Error("Failed to load world info");
  const m = Object.values(h.entries), g = m.length > 0 ? m[m.length - 1] : void 0;
  let v;
  if (o === "update" || o === "auto") {
    const b = Object.values(h.entries).find((y) => y.uid === n.uid);
    if (b)
      (o === "auto" || o === "update") && (v = b);
    else if (o === "update")
      throw new Error("Entry not found for update operation");
  }
  const _ = v ? "update" : "add";
  if (!v) {
    if (v = Kb(r, h), !v)
      throw new Error("Failed to create entry");
    if (g) {
      const b = v.uid;
      Object.assign(v, g), v.uid = b;
    }
  }
  return v.key = n.key, v.content = n.content, v.comment = n.comment, i || await c.saveWorldInfo(r, h), s || c.reloadWorldInfoEditor(r, !0), {
    entry: v,
    operation: _
  };
}
const tu = `=======

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

=======`, bh = `{{#if characters}}
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
{{/if}}`, pi = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

Example:
Generated content for the field goes here.`, v0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, y0 = `### {{character.name}}
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
  {{else}}*Not provided*{{/if}}`, Is = `{{#is_not_empty fields}}
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
{{/is_not_empty}}`, CS = `## User's Persona Description
name: {{user}}
{{persona}}`, Bh = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, wS = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", AS = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, TS = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
function DS(n) {
  let r = null;
  for (const i of n.matchAll(TS))
    r = i[1].trim();
  return r;
}
function _0(n) {
  const r = n.match(/^```(?:\w+\n|\n)?([\s\S]*?)```$/);
  return r && !r[1].includes("```") ? r[1].trim() : n;
}
const OS = /^\s*<(think|thinking|reasoning)>[\s\S]*?(?:<\/\1>|$)/i;
function Xs(n) {
  return n.replace(OS, "");
}
function mv(n, r = 120) {
  const i = n.trim().replace(/\s+/g, " ");
  return `It starts with: "${i.slice(0, r)}"${i.length > r ? "…" : ""}`;
}
function NS(n) {
  const r = [];
  let i = 0;
  for (; i < n.length; ) {
    let s = 0, o = -1, c = !1, h = !1;
    for (let m = i; m < n.length; m++) {
      const g = n[m];
      s === 0 ? g === "{" && (o = m, s = 1) : c ? h ? h = !1 : g === "\\" ? h = !0 : g === '"' && (c = !1) : g === '"' ? c = !0 : g === "{" ? s++ : g === "}" && --s === 0 && r.push(n.slice(o, m + 1));
    }
    if (s === 0)
      break;
    i = o + 1;
  }
  return r;
}
function MS(n) {
  const r = Xs(n).trim(), i = DS(r);
  let s;
  for (const c of i === null ? [r] : [r, i])
    try {
      return JSON.parse(c);
    } catch (h) {
      s = h;
    }
  const o = NS(r);
  for (let c = o.length - 1; c >= 0; c--)
    try {
      return JSON.parse(o[c]);
    } catch {
    }
  throw s;
}
function b0(n) {
  return _0(Xs(n).trim());
}
function kS(n, r) {
  const i = r[0];
  return i === "“" || i === "«" ? !0 : (i === '"' || i === "*") && n.split(i).length % 2 === 1;
}
function RS(n, r) {
  return /[.!?…]["'”’»)\]*]*$/.test(n) && (new RegExp("^\\p{L}", "u").test(r) || kS(n, r)) ? `${n} ${r}` : n + r;
}
function jS(n, r) {
  const i = n.trim();
  r = Xs(r);
  const s = b0(r);
  if (s.startsWith(i))
    return s;
  const o = _0((i + r).trim());
  return o.startsWith(i) ? RS(i, o.slice(i.length)) : i + o;
}
var yo = { exports: {} }, _o = { exports: {} }, An = {}, Gt = {}, gv;
function Vt() {
  if (gv) return Gt;
  gv = 1, Gt.__esModule = !0, Gt.extend = o, Gt.indexOf = g, Gt.escapeExpression = v, Gt.isEmpty = _, Gt.createFrame = b, Gt.blockParams = y, Gt.appendContextPath = p;
  var n = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, i = /[&<>"'`=]/;
  function s(f) {
    return n[f];
  }
  function o(f) {
    for (var S = 1; S < arguments.length; S++)
      for (var x in arguments[S])
        Object.prototype.hasOwnProperty.call(arguments[S], x) && (f[x] = arguments[S][x]);
    return f;
  }
  var c = Object.prototype.toString;
  Gt.toString = c;
  var h = function(S) {
    return typeof S == "function";
  };
  h(/x/) && (Gt.isFunction = h = function(f) {
    return typeof f == "function" && c.call(f) === "[object Function]";
  }), Gt.isFunction = h;
  var m = Array.isArray || function(f) {
    return f && typeof f == "object" ? c.call(f) === "[object Array]" : !1;
  };
  Gt.isArray = m;
  function g(f, S) {
    for (var x = 0, T = f.length; x < T; x++)
      if (f[x] === S)
        return x;
    return -1;
  }
  function v(f) {
    if (typeof f != "string") {
      if (f && f.toHTML)
        return f.toHTML();
      if (f == null)
        return "";
      if (!f)
        return f + "";
      f = "" + f;
    }
    return i.test(f) ? f.replace(r, s) : f;
  }
  function _(f) {
    return !f && f !== 0 ? !0 : !!(m(f) && f.length === 0);
  }
  function b(f) {
    var S = o({}, f);
    return S._parent = f, S;
  }
  function y(f, S) {
    return f.path = S, f;
  }
  function p(f, S) {
    return (f ? f + "." : "") + S;
  }
  return Gt;
}
var bo = { exports: {} }, vv;
function Nn() {
  return vv || (vv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(o, c) {
      var h = c && c.loc, m = void 0, g = void 0, v = void 0, _ = void 0;
      h && (m = h.start.line, g = h.end.line, v = h.start.column, _ = h.end.column, o += " - " + m + ":" + v);
      for (var b = Error.prototype.constructor.call(this, o), y = 0; y < i.length; y++)
        this[i[y]] = b[i[y]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        h && (this.lineNumber = m, this.endLineNumber = g, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: v,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: _,
          enumerable: !0
        })) : (this.column = v, this.endColumn = _));
      } catch {
      }
    }
    s.prototype = new Error(), r.default = s, n.exports = r.default;
  })(bo, bo.exports)), bo.exports;
}
var Es = {}, So = { exports: {} }, yv;
function zS() {
  return yv || (yv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = Vt();
    r.default = function(s) {
      s.registerHelper("blockHelperMissing", function(o, c) {
        var h = c.inverse, m = c.fn;
        if (o === !0)
          return m(this);
        if (o === !1 || o == null)
          return h(this);
        if (i.isArray(o))
          return o.length > 0 ? (c.ids && (c.ids = [c.name]), s.helpers.each(o, c)) : h(this);
        if (c.data && c.ids) {
          var g = i.createFrame(c.data);
          g.contextPath = i.appendContextPath(c.data.contextPath, c.name), c = { data: g };
        }
        return m(o, c);
      });
    }, n.exports = r.default;
  })(So, So.exports)), So.exports;
}
var xo = { exports: {} }, _v;
function LS() {
  return _v || (_v = 1, (function(n, r) {
    r.__esModule = !0;
    function i(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var s = Vt(), o = Nn(), c = i(o);
    r.default = function(h) {
      h.registerHelper("each", function(m, g) {
        if (!g)
          throw new c.default("Must pass iterator to #each");
        var v = g.fn, _ = g.inverse, b = 0, y = "", p = void 0, f = void 0;
        g.data && g.ids && (f = s.appendContextPath(g.data.contextPath, g.ids[0]) + "."), s.isFunction(m) && (m = m.call(this)), g.data && (p = s.createFrame(g.data));
        function S(C, O, z) {
          p && (p.key = C, p.index = O, p.first = O === 0, p.last = !!z, f && (p.contextPath = f + C)), y = y + v(m[C], {
            data: p,
            blockParams: s.blockParams([m[C], C], [f + C, null])
          });
        }
        if (m && typeof m == "object")
          if (s.isArray(m))
            for (var x = m.length; b < x; b++)
              b in m && S(b, b, b === m.length - 1);
          else if (typeof Symbol == "function" && m[Symbol.iterator]) {
            for (var T = [], w = m[Symbol.iterator](), N = w.next(); !N.done; N = w.next())
              T.push(N.value);
            m = T;
            for (var x = m.length; b < x; b++)
              S(b, b, b === m.length - 1);
          } else
            (function() {
              var C = void 0;
              Object.keys(m).forEach(function(O) {
                C !== void 0 && S(C, b - 1), C = O, b++;
              }), C !== void 0 && S(C, b - 1, !0);
            })();
        return b === 0 && (y = _(this)), y;
      });
    }, n.exports = r.default;
  })(xo, xo.exports)), xo.exports;
}
var Eo = { exports: {} }, bv;
function BS() {
  return bv || (bv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(c) {
      return c && c.__esModule ? c : { default: c };
    }
    var s = Nn(), o = i(s);
    r.default = function(c) {
      c.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, n.exports = r.default;
  })(Eo, Eo.exports)), Eo.exports;
}
var Co = { exports: {} }, Sv;
function US() {
  return Sv || (Sv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var s = Vt(), o = Nn(), c = i(o);
    r.default = function(h) {
      h.registerHelper("if", function(m, g) {
        if (arguments.length != 2)
          throw new c.default("#if requires exactly one argument");
        return s.isFunction(m) && (m = m.call(this)), !g.hash.includeZero && !m || s.isEmpty(m) ? g.inverse(this) : g.fn(this);
      }), h.registerHelper("unless", function(m, g) {
        if (arguments.length != 2)
          throw new c.default("#unless requires exactly one argument");
        return h.helpers.if.call(this, m, {
          fn: g.inverse,
          inverse: g.fn,
          hash: g.hash
        });
      });
    }, n.exports = r.default;
  })(Co, Co.exports)), Co.exports;
}
var wo = { exports: {} }, xv;
function PS() {
  return xv || (xv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("log", function() {
        for (var s = [void 0], o = arguments[arguments.length - 1], c = 0; c < arguments.length - 1; c++)
          s.push(arguments[c]);
        var h = 1;
        o.hash.level != null ? h = o.hash.level : o.data && o.data.level != null && (h = o.data.level), s[0] = h, i.log.apply(i, s);
      });
    }, n.exports = r.default;
  })(wo, wo.exports)), wo.exports;
}
var Ao = { exports: {} }, Ev;
function IS() {
  return Ev || (Ev = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(s, o, c) {
        return s && c.lookupProperty(s, o);
      });
    }, n.exports = r.default;
  })(Ao, Ao.exports)), Ao.exports;
}
var To = { exports: {} }, Cv;
function HS() {
  return Cv || (Cv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var s = Vt(), o = Nn(), c = i(o);
    r.default = function(h) {
      h.registerHelper("with", function(m, g) {
        if (arguments.length != 2)
          throw new c.default("#with requires exactly one argument");
        s.isFunction(m) && (m = m.call(this));
        var v = g.fn;
        if (s.isEmpty(m))
          return g.inverse(this);
        var _ = g.data;
        return g.data && g.ids && (_ = s.createFrame(g.data), _.contextPath = s.appendContextPath(g.data.contextPath, g.ids[0])), v(m, {
          data: _,
          blockParams: s.blockParams([m], [_ && _.contextPath])
        });
      });
    }, n.exports = r.default;
  })(To, To.exports)), To.exports;
}
var wv;
function S0() {
  if (wv) return Es;
  wv = 1, Es.__esModule = !0, Es.registerDefaultHelpers = S, Es.moveHelperToHooks = x;
  function n(T) {
    return T && T.__esModule ? T : { default: T };
  }
  var r = zS(), i = n(r), s = LS(), o = n(s), c = BS(), h = n(c), m = US(), g = n(m), v = PS(), _ = n(v), b = IS(), y = n(b), p = HS(), f = n(p);
  function S(T) {
    i.default(T), o.default(T), h.default(T), g.default(T), _.default(T), y.default(T), f.default(T);
  }
  function x(T, w, N) {
    T.helpers[w] && (T.hooks[w] = T.helpers[w], N || delete T.helpers[w]);
  }
  return Es;
}
var Do = {}, Oo = { exports: {} }, Av;
function qS() {
  return Av || (Av = 1, (function(n, r) {
    r.__esModule = !0;
    var i = Vt();
    r.default = function(s) {
      s.registerDecorator("inline", function(o, c, h, m) {
        var g = o;
        return c.partials || (c.partials = {}, g = function(v, _) {
          var b = h.partials;
          h.partials = i.extend({}, b, c.partials);
          var y = o(v, _);
          return h.partials = b, y;
        }), c.partials[m.args[0]] = m.fn, g;
      });
    }, n.exports = r.default;
  })(Oo, Oo.exports)), Oo.exports;
}
var Tv;
function ZS() {
  if (Tv) return Do;
  Tv = 1, Do.__esModule = !0, Do.registerDefaultDecorators = s;
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = qS(), i = n(r);
  function s(o) {
    i.default(o);
  }
  return Do;
}
var No = { exports: {} }, Dv;
function x0() {
  return Dv || (Dv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = Vt(), s = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(c) {
        if (typeof c == "string") {
          var h = i.indexOf(s.methodMap, c.toLowerCase());
          h >= 0 ? c = h : c = parseInt(c, 10);
        }
        return c;
      },
      // Can be overridden in the host environment
      log: function(c) {
        if (c = s.lookupLevel(c), typeof console < "u" && s.lookupLevel(s.level) <= c) {
          var h = s.methodMap[c];
          console[h] || (h = "log");
          for (var m = arguments.length, g = Array(m > 1 ? m - 1 : 0), v = 1; v < m; v++)
            g[v - 1] = arguments[v];
          console[h].apply(console, g);
        }
      }
    };
    r.default = s, n.exports = r.default;
  })(No, No.exports)), No.exports;
}
var ui = {}, Mo = {}, Ov;
function GS() {
  if (Ov) return Mo;
  Ov = 1, Mo.__esModule = !0, Mo.createNewLookupObject = r;
  var n = Vt();
  function r() {
    for (var i = arguments.length, s = Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return n.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Mo;
}
var Nv;
function E0() {
  if (Nv) return ui;
  Nv = 1, ui.__esModule = !0, ui.createProtoAccessControl = c, ui.resultIsAllowed = h, ui.resetLoggedProperties = v;
  function n(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var r = GS(), i = x0(), s = n(i), o = /* @__PURE__ */ Object.create(null);
  function c(_) {
    var b = /* @__PURE__ */ Object.create(null);
    b.constructor = !1, b.__defineGetter__ = !1, b.__defineSetter__ = !1, b.__lookupGetter__ = !1;
    var y = /* @__PURE__ */ Object.create(null);
    return y.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(y, _.allowedProtoProperties),
        defaultValue: _.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(b, _.allowedProtoMethods),
        defaultValue: _.allowProtoMethodsByDefault
      }
    };
  }
  function h(_, b, y) {
    return m(typeof _ == "function" ? b.methods : b.properties, y);
  }
  function m(_, b) {
    return _.whitelist[b] !== void 0 ? _.whitelist[b] === !0 : _.defaultValue !== void 0 ? _.defaultValue : (g(b), !1);
  }
  function g(_) {
    o[_] !== !0 && (o[_] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + _ + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function v() {
    Object.keys(o).forEach(function(_) {
      delete o[_];
    });
  }
  return ui;
}
var Mv;
function Uh() {
  if (Mv) return An;
  Mv = 1, An.__esModule = !0, An.HandlebarsEnvironment = f;
  function n(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var r = Vt(), i = Nn(), s = n(i), o = S0(), c = ZS(), h = x0(), m = n(h), g = E0(), v = "4.7.8";
  An.VERSION = v;
  var _ = 8;
  An.COMPILER_REVISION = _;
  var b = 7;
  An.LAST_COMPATIBLE_COMPILER_REVISION = b;
  var y = {
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
  An.REVISION_CHANGES = y;
  var p = "[object Object]";
  function f(x, T, w) {
    this.helpers = x || {}, this.partials = T || {}, this.decorators = w || {}, o.registerDefaultHelpers(this), c.registerDefaultDecorators(this);
  }
  f.prototype = {
    constructor: f,
    logger: m.default,
    log: m.default.log,
    registerHelper: function(T, w) {
      if (r.toString.call(T) === p) {
        if (w)
          throw new s.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, T);
      } else
        this.helpers[T] = w;
    },
    unregisterHelper: function(T) {
      delete this.helpers[T];
    },
    registerPartial: function(T, w) {
      if (r.toString.call(T) === p)
        r.extend(this.partials, T);
      else {
        if (typeof w > "u")
          throw new s.default('Attempting to register a partial called "' + T + '" as undefined');
        this.partials[T] = w;
      }
    },
    unregisterPartial: function(T) {
      delete this.partials[T];
    },
    registerDecorator: function(T, w) {
      if (r.toString.call(T) === p) {
        if (w)
          throw new s.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, T);
      } else
        this.decorators[T] = w;
    },
    unregisterDecorator: function(T) {
      delete this.decorators[T];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      g.resetLoggedProperties();
    }
  };
  var S = m.default.log;
  return An.log = S, An.createFrame = r.createFrame, An.logger = m.default, An;
}
var ko = { exports: {} }, kv;
function FS() {
  return kv || (kv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(s) {
      this.string = s;
    }
    i.prototype.toString = i.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = i, n.exports = r.default;
  })(ko, ko.exports)), ko.exports;
}
var ar = {}, Ro = {}, Rv;
function VS() {
  if (Rv) return Ro;
  Rv = 1, Ro.__esModule = !0, Ro.wrapHelper = n;
  function n(r, i) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var c = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = i(c), r.apply(this, arguments);
    };
    return s;
  }
  return Ro;
}
var jv;
function YS() {
  if (jv) return ar;
  jv = 1, ar.__esModule = !0, ar.checkRevision = _, ar.template = b, ar.wrapProgram = y, ar.resolvePartial = p, ar.invokePartial = f, ar.noop = S;
  function n(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function r(C) {
    if (C && C.__esModule)
      return C;
    var O = {};
    if (C != null)
      for (var z in C)
        Object.prototype.hasOwnProperty.call(C, z) && (O[z] = C[z]);
    return O.default = C, O;
  }
  var i = Vt(), s = r(i), o = Nn(), c = n(o), h = Uh(), m = S0(), g = VS(), v = E0();
  function _(C) {
    var O = C && C[0] || 1, z = h.COMPILER_REVISION;
    if (!(O >= h.LAST_COMPATIBLE_COMPILER_REVISION && O <= h.COMPILER_REVISION))
      if (O < h.LAST_COMPATIBLE_COMPILER_REVISION) {
        var R = h.REVISION_CHANGES[z], Z = h.REVISION_CHANGES[O];
        throw new c.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + R + ") or downgrade your runtime to an older version (" + Z + ").");
      } else
        throw new c.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + C[1] + ").");
  }
  function b(C, O) {
    if (!O)
      throw new c.default("No environment passed to template");
    if (!C || !C.main)
      throw new c.default("Unknown template object: " + typeof C);
    C.main.decorator = C.main_d, O.VM.checkRevision(C.compiler);
    var z = C.compiler && C.compiler[0] === 7;
    function R($, Q, ee) {
      ee.hash && (Q = s.extend({}, Q, ee.hash), ee.ids && (ee.ids[0] = !0)), $ = O.VM.resolvePartial.call(this, $, Q, ee);
      var fe = s.extend({}, ee, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), de = O.VM.invokePartial.call(this, $, Q, fe);
      if (de == null && O.compile && (ee.partials[ee.name] = O.compile($, C.compilerOptions, O), de = ee.partials[ee.name](Q, fe)), de != null) {
        if (ee.indent) {
          for (var be = de.split(`
`), H = 0, re = be.length; H < re && !(!be[H] && H + 1 === re); H++)
            be[H] = ee.indent + be[H];
          de = be.join(`
`);
        }
        return de;
      } else
        throw new c.default("The partial " + ee.name + " could not be compiled when running in runtime-only mode");
    }
    var Z = {
      strict: function(Q, ee, fe) {
        if (!Q || !(ee in Q))
          throw new c.default('"' + ee + '" not defined in ' + Q, {
            loc: fe
          });
        return Z.lookupProperty(Q, ee);
      },
      lookupProperty: function(Q, ee) {
        var fe = Q[ee];
        if (fe == null || Object.prototype.hasOwnProperty.call(Q, ee) || v.resultIsAllowed(fe, Z.protoAccessControl, ee))
          return fe;
      },
      lookup: function(Q, ee) {
        for (var fe = Q.length, de = 0; de < fe; de++) {
          var be = Q[de] && Z.lookupProperty(Q[de], ee);
          if (be != null)
            return Q[de][ee];
        }
      },
      lambda: function(Q, ee) {
        return typeof Q == "function" ? Q.call(ee) : Q;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: R,
      fn: function(Q) {
        var ee = C[Q];
        return ee.decorator = C[Q + "_d"], ee;
      },
      programs: [],
      program: function(Q, ee, fe, de, be) {
        var H = this.programs[Q], re = this.fn(Q);
        return ee || be || de || fe ? H = y(this, Q, re, ee, fe, de, be) : H || (H = this.programs[Q] = y(this, Q, re)), H;
      },
      data: function(Q, ee) {
        for (; Q && ee--; )
          Q = Q._parent;
        return Q;
      },
      mergeIfNeeded: function(Q, ee) {
        var fe = Q || ee;
        return Q && ee && Q !== ee && (fe = s.extend({}, ee, Q)), fe;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: O.VM.noop,
      compilerInfo: C.compiler
    };
    function te($) {
      var Q = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], ee = Q.data;
      te._setup(Q), !Q.partial && C.useData && (ee = x($, ee));
      var fe = void 0, de = C.useBlockParams ? [] : void 0;
      C.useDepths && (Q.depths ? fe = $ != Q.depths[0] ? [$].concat(Q.depths) : Q.depths : fe = [$]);
      function be(H) {
        return "" + C.main(Z, H, Z.helpers, Z.partials, ee, de, fe);
      }
      return be = T(C.main, be, Z, Q.depths || [], ee, de), be($, Q);
    }
    return te.isTop = !0, te._setup = function($) {
      if ($.partial)
        Z.protoAccessControl = $.protoAccessControl, Z.helpers = $.helpers, Z.partials = $.partials, Z.decorators = $.decorators, Z.hooks = $.hooks;
      else {
        var Q = s.extend({}, O.helpers, $.helpers);
        w(Q, Z), Z.helpers = Q, C.usePartial && (Z.partials = Z.mergeIfNeeded($.partials, O.partials)), (C.usePartial || C.useDecorators) && (Z.decorators = s.extend({}, O.decorators, $.decorators)), Z.hooks = {}, Z.protoAccessControl = v.createProtoAccessControl($);
        var ee = $.allowCallsToHelperMissing || z;
        m.moveHelperToHooks(Z, "helperMissing", ee), m.moveHelperToHooks(Z, "blockHelperMissing", ee);
      }
    }, te._child = function($, Q, ee, fe) {
      if (C.useBlockParams && !ee)
        throw new c.default("must pass block params");
      if (C.useDepths && !fe)
        throw new c.default("must pass parent depths");
      return y(Z, $, C[$], Q, 0, ee, fe);
    }, te;
  }
  function y(C, O, z, R, Z, te, $) {
    function Q(ee) {
      var fe = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], de = $;
      return $ && ee != $[0] && !(ee === C.nullContext && $[0] === null) && (de = [ee].concat($)), z(C, ee, C.helpers, C.partials, fe.data || R, te && [fe.blockParams].concat(te), de);
    }
    return Q = T(z, Q, C, $, R, te), Q.program = O, Q.depth = $ ? $.length : 0, Q.blockParams = Z || 0, Q;
  }
  function p(C, O, z) {
    return C ? !C.call && !z.name && (z.name = C, C = z.partials[C]) : z.name === "@partial-block" ? C = z.data["partial-block"] : C = z.partials[z.name], C;
  }
  function f(C, O, z) {
    var R = z.data && z.data["partial-block"];
    z.partial = !0, z.ids && (z.data.contextPath = z.ids[0] || z.data.contextPath);
    var Z = void 0;
    if (z.fn && z.fn !== S && (function() {
      z.data = h.createFrame(z.data);
      var te = z.fn;
      Z = z.data["partial-block"] = function(Q) {
        var ee = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return ee.data = h.createFrame(ee.data), ee.data["partial-block"] = R, te(Q, ee);
      }, te.partials && (z.partials = s.extend({}, z.partials, te.partials));
    })(), C === void 0 && Z && (C = Z), C === void 0)
      throw new c.default("The partial " + z.name + " could not be found");
    if (C instanceof Function)
      return C(O, z);
  }
  function S() {
    return "";
  }
  function x(C, O) {
    return (!O || !("root" in O)) && (O = O ? h.createFrame(O) : {}, O.root = C), O;
  }
  function T(C, O, z, R, Z, te) {
    if (C.decorator) {
      var $ = {};
      O = C.decorator(O, $, z, R && R[0], Z, te, R), s.extend(O, $);
    }
    return O;
  }
  function w(C, O) {
    Object.keys(C).forEach(function(z) {
      var R = C[z];
      C[z] = N(R, O);
    });
  }
  function N(C, O) {
    var z = O.lookupProperty;
    return g.wrapHelper(C, function(R) {
      return s.extend({ lookupProperty: z }, R);
    });
  }
  return ar;
}
var jo = { exports: {} }, zv;
function C0() {
  return zv || (zv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(i) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var s = globalThis.Handlebars;
      i.noConflict = function() {
        return globalThis.Handlebars === i && (globalThis.Handlebars = s), i;
      };
    }, n.exports = r.default;
  })(jo, jo.exports)), jo.exports;
}
var Lv;
function XS() {
  return Lv || (Lv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    function s(w) {
      if (w && w.__esModule)
        return w;
      var N = {};
      if (w != null)
        for (var C in w)
          Object.prototype.hasOwnProperty.call(w, C) && (N[C] = w[C]);
      return N.default = w, N;
    }
    var o = Uh(), c = s(o), h = FS(), m = i(h), g = Nn(), v = i(g), _ = Vt(), b = s(_), y = YS(), p = s(y), f = C0(), S = i(f);
    function x() {
      var w = new c.HandlebarsEnvironment();
      return b.extend(w, c), w.SafeString = m.default, w.Exception = v.default, w.Utils = b, w.escapeExpression = b.escapeExpression, w.VM = p, w.template = function(N) {
        return p.template(N, w);
      }, w;
    }
    var T = x();
    T.create = x, S.default(T), T.default = T, r.default = T, n.exports = r.default;
  })(_o, _o.exports)), _o.exports;
}
var zo = { exports: {} }, Bv;
function w0() {
  return Bv || (Bv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = {
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
          return o.parts.length === 1 && !i.helpers.scopedId(o) && !o.depth;
        }
      }
    };
    r.default = i, n.exports = r.default;
  })(zo, zo.exports)), zo.exports;
}
var ci = {}, Lo = { exports: {} }, Uv;
function QS() {
  return Uv || (Uv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(m, g, v, _, b, y, p) {
          var f = y.length - 1;
          switch (b) {
            case 1:
              return y[f - 1];
            case 2:
              this.$ = _.prepareProgram(y[f]);
              break;
            case 3:
              this.$ = y[f];
              break;
            case 4:
              this.$ = y[f];
              break;
            case 5:
              this.$ = y[f];
              break;
            case 6:
              this.$ = y[f];
              break;
            case 7:
              this.$ = y[f];
              break;
            case 8:
              this.$ = y[f];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: _.stripComment(y[f]),
                strip: _.stripFlags(y[f], y[f]),
                loc: _.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: y[f],
                value: y[f],
                loc: _.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = _.prepareRawBlock(y[f - 2], y[f - 1], y[f], this._$);
              break;
            case 12:
              this.$ = { path: y[f - 3], params: y[f - 2], hash: y[f - 1] };
              break;
            case 13:
              this.$ = _.prepareBlock(y[f - 3], y[f - 2], y[f - 1], y[f], !1, this._$);
              break;
            case 14:
              this.$ = _.prepareBlock(y[f - 3], y[f - 2], y[f - 1], y[f], !0, this._$);
              break;
            case 15:
              this.$ = { open: y[f - 5], path: y[f - 4], params: y[f - 3], hash: y[f - 2], blockParams: y[f - 1], strip: _.stripFlags(y[f - 5], y[f]) };
              break;
            case 16:
              this.$ = { path: y[f - 4], params: y[f - 3], hash: y[f - 2], blockParams: y[f - 1], strip: _.stripFlags(y[f - 5], y[f]) };
              break;
            case 17:
              this.$ = { path: y[f - 4], params: y[f - 3], hash: y[f - 2], blockParams: y[f - 1], strip: _.stripFlags(y[f - 5], y[f]) };
              break;
            case 18:
              this.$ = { strip: _.stripFlags(y[f - 1], y[f - 1]), program: y[f] };
              break;
            case 19:
              var S = _.prepareBlock(y[f - 2], y[f - 1], y[f], y[f], !1, this._$), x = _.prepareProgram([S], y[f - 1].loc);
              x.chained = !0, this.$ = { strip: y[f - 2].strip, program: x, chain: !0 };
              break;
            case 20:
              this.$ = y[f];
              break;
            case 21:
              this.$ = { path: y[f - 1], strip: _.stripFlags(y[f - 2], y[f]) };
              break;
            case 22:
              this.$ = _.prepareMustache(y[f - 3], y[f - 2], y[f - 1], y[f - 4], _.stripFlags(y[f - 4], y[f]), this._$);
              break;
            case 23:
              this.$ = _.prepareMustache(y[f - 3], y[f - 2], y[f - 1], y[f - 4], _.stripFlags(y[f - 4], y[f]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: y[f - 3],
                params: y[f - 2],
                hash: y[f - 1],
                indent: "",
                strip: _.stripFlags(y[f - 4], y[f]),
                loc: _.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = _.preparePartialBlock(y[f - 2], y[f - 1], y[f], this._$);
              break;
            case 26:
              this.$ = { path: y[f - 3], params: y[f - 2], hash: y[f - 1], strip: _.stripFlags(y[f - 4], y[f]) };
              break;
            case 27:
              this.$ = y[f];
              break;
            case 28:
              this.$ = y[f];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: y[f - 3],
                params: y[f - 2],
                hash: y[f - 1],
                loc: _.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: y[f], loc: _.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: _.id(y[f - 2]), value: y[f], loc: _.locInfo(this._$) };
              break;
            case 32:
              this.$ = _.id(y[f - 1]);
              break;
            case 33:
              this.$ = y[f];
              break;
            case 34:
              this.$ = y[f];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: y[f], original: y[f], loc: _.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(y[f]), original: Number(y[f]), loc: _.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: y[f] === "true", original: y[f] === "true", loc: _.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: _.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: _.locInfo(this._$) };
              break;
            case 40:
              this.$ = y[f];
              break;
            case 41:
              this.$ = y[f];
              break;
            case 42:
              this.$ = _.preparePath(!0, y[f], this._$);
              break;
            case 43:
              this.$ = _.preparePath(!1, y[f], this._$);
              break;
            case 44:
              y[f - 2].push({ part: _.id(y[f]), original: y[f], separator: y[f - 1] }), this.$ = y[f - 2];
              break;
            case 45:
              this.$ = [{ part: _.id(y[f]), original: y[f] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              y[f - 1].push(y[f]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              y[f - 1].push(y[f]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              y[f - 1].push(y[f]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              y[f - 1].push(y[f]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              y[f - 1].push(y[f]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              y[f - 1].push(y[f]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              y[f - 1].push(y[f]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              y[f - 1].push(y[f]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              y[f - 1].push(y[f]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              y[f - 1].push(y[f]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              y[f - 1].push(y[f]);
              break;
            case 98:
              this.$ = [y[f]];
              break;
            case 99:
              y[f - 1].push(y[f]);
              break;
            case 100:
              this.$ = [y[f]];
              break;
            case 101:
              y[f - 1].push(y[f]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(m, g) {
          throw new Error(m);
        },
        parse: function(m) {
          var g = this, v = [0], _ = [null], b = [], y = this.table, p = "", f = 0, S = 0;
          this.lexer.setInput(m), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var x = this.lexer.yylloc;
          b.push(x);
          var T = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function w() {
            var fe;
            return fe = g.lexer.lex() || 1, typeof fe != "number" && (fe = g.symbols_[fe] || fe), fe;
          }
          for (var N, C, O, z, R = {}, Z, te, $, Q; ; ) {
            if (C = v[v.length - 1], this.defaultActions[C] ? O = this.defaultActions[C] : ((N === null || typeof N > "u") && (N = w()), O = y[C] && y[C][N]), typeof O > "u" || !O.length || !O[0]) {
              var ee = "";
              {
                Q = [];
                for (Z in y[C]) this.terminals_[Z] && Z > 2 && Q.push("'" + this.terminals_[Z] + "'");
                this.lexer.showPosition ? ee = "Parse error on line " + (f + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + Q.join(", ") + ", got '" + (this.terminals_[N] || N) + "'" : ee = "Parse error on line " + (f + 1) + ": Unexpected " + (N == 1 ? "end of input" : "'" + (this.terminals_[N] || N) + "'"), this.parseError(ee, { text: this.lexer.match, token: this.terminals_[N] || N, line: this.lexer.yylineno, loc: x, expected: Q });
              }
            }
            if (O[0] instanceof Array && O.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + C + ", token: " + N);
            switch (O[0]) {
              case 1:
                v.push(N), _.push(this.lexer.yytext), b.push(this.lexer.yylloc), v.push(O[1]), N = null, S = this.lexer.yyleng, p = this.lexer.yytext, f = this.lexer.yylineno, x = this.lexer.yylloc;
                break;
              case 2:
                if (te = this.productions_[O[1]][1], R.$ = _[_.length - te], R._$ = { first_line: b[b.length - (te || 1)].first_line, last_line: b[b.length - 1].last_line, first_column: b[b.length - (te || 1)].first_column, last_column: b[b.length - 1].last_column }, T && (R._$.range = [b[b.length - (te || 1)].range[0], b[b.length - 1].range[1]]), z = this.performAction.call(R, p, S, f, this.yy, O[1], _, b), typeof z < "u")
                  return z;
                te && (v = v.slice(0, -1 * te * 2), _ = _.slice(0, -1 * te), b = b.slice(0, -1 * te)), v.push(this.productions_[O[1]][0]), _.push(R.$), b.push(R._$), $ = y[v[v.length - 2]][v[v.length - 1]], v.push($);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, o = (function() {
        var h = {
          EOF: 1,
          parseError: function(g, v) {
            if (this.yy.parser)
              this.yy.parser.parseError(g, v);
            else
              throw new Error(g);
          },
          setInput: function(g) {
            return this._input = g, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var g = this._input[0];
            this.yytext += g, this.yyleng++, this.offset++, this.match += g, this.matched += g;
            var v = g.match(/(?:\r\n?|\n).*/g);
            return v ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), g;
          },
          unput: function(g) {
            var v = g.length, _ = g.split(/(?:\r\n?|\n)/g);
            this._input = g + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - v - 1), this.offset -= v;
            var b = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), _.length - 1 && (this.yylineno -= _.length - 1);
            var y = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: _ ? (_.length === b.length ? this.yylloc.first_column : 0) + b[b.length - _.length].length - _[0].length : this.yylloc.first_column - v
            }, this.options.ranges && (this.yylloc.range = [y[0], y[0] + this.yyleng - v]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(g) {
            this.unput(this.match.slice(g));
          },
          pastInput: function() {
            var g = this.matched.substr(0, this.matched.length - this.match.length);
            return (g.length > 20 ? "..." : "") + g.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var g = this.match;
            return g.length < 20 && (g += this._input.substr(0, 20 - g.length)), (g.substr(0, 20) + (g.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var g = this.pastInput(), v = new Array(g.length + 1).join("-");
            return g + this.upcomingInput() + `
` + v + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var g, v, _, b, y;
            this._more || (this.yytext = "", this.match = "");
            for (var p = this._currentRules(), f = 0; f < p.length && (_ = this._input.match(this.rules[p[f]]), !(_ && (!v || _[0].length > v[0].length) && (v = _, b = f, !this.options.flex))); f++)
              ;
            return v ? (y = v[0].match(/(?:\r\n?|\n).*/g), y && (this.yylineno += y.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: y ? y[y.length - 1].length - y[y.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + v[0].length
            }, this.yytext += v[0], this.match += v[0], this.matches = v, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(v[0].length), this.matched += v[0], g = this.performAction.call(this, this.yy, this, p[b], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), g || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var g = this.next();
            return typeof g < "u" ? g : this.lex();
          },
          begin: function(g) {
            this.conditionStack.push(g);
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
          pushState: function(g) {
            this.begin(g);
          }
        };
        return h.options = {}, h.performAction = function(g, v, _, b) {
          function y(p, f) {
            return v.yytext = v.yytext.substring(p, v.yyleng - f + p);
          }
          switch (_) {
            case 0:
              if (v.yytext.slice(-2) === "\\\\" ? (y(0, 1), this.begin("mu")) : v.yytext.slice(-1) === "\\" ? (y(0, 1), this.begin("emu")) : this.begin("mu"), v.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (y(5, 9), "END_RAW_BLOCK");
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
              this.unput(v.yytext), this.popState(), this.begin("com");
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
              return v.yytext = y(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return v.yytext = y(1, 2).replace(/\\'/g, "'"), 80;
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
              return v.yytext = v.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, h.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], h.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, h;
      })();
      s.lexer = o;
      function c() {
        this.yy = {};
      }
      return c.prototype = s, s.Parser = c, new c();
    })();
    r.default = i, n.exports = r.default;
  })(Lo, Lo.exports)), Lo.exports;
}
var Bo = { exports: {} }, Uo = { exports: {} }, Pv;
function A0() {
  return Pv || (Pv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var s = Nn(), o = i(s);
    function c() {
      this.parents = [];
    }
    c.prototype = {
      constructor: c,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(_, b) {
        var y = this.accept(_[b]);
        if (this.mutating) {
          if (y && !c.prototype[y.type])
            throw new o.default('Unexpected node type "' + y.type + '" found when accepting ' + b + " on " + _.type);
          _[b] = y;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(_, b) {
        if (this.acceptKey(_, b), !_[b])
          throw new o.default(_.type + " requires " + b);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(_) {
        for (var b = 0, y = _.length; b < y; b++)
          this.acceptKey(_, b), _[b] || (_.splice(b, 1), b--, y--);
      },
      accept: function(_) {
        if (_) {
          if (!this[_.type])
            throw new o.default("Unknown type: " + _.type, _);
          this.current && this.parents.unshift(this.current), this.current = _;
          var b = this[_.type](_);
          if (this.current = this.parents.shift(), !this.mutating || b)
            return b;
          if (b !== !1)
            return _;
        }
      },
      Program: function(_) {
        this.acceptArray(_.body);
      },
      MustacheStatement: h,
      Decorator: h,
      BlockStatement: m,
      DecoratorBlock: m,
      PartialStatement: g,
      PartialBlockStatement: function(_) {
        g.call(this, _), this.acceptKey(_, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: h,
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
      Hash: function(_) {
        this.acceptArray(_.pairs);
      },
      HashPair: function(_) {
        this.acceptRequired(_, "value");
      }
    };
    function h(v) {
      this.acceptRequired(v, "path"), this.acceptArray(v.params), this.acceptKey(v, "hash");
    }
    function m(v) {
      h.call(this, v), this.acceptKey(v, "program"), this.acceptKey(v, "inverse");
    }
    function g(v) {
      this.acceptRequired(v, "name"), this.acceptArray(v.params), this.acceptKey(v, "hash");
    }
    r.default = c, n.exports = r.default;
  })(Uo, Uo.exports)), Uo.exports;
}
var Iv;
function $S() {
  return Iv || (Iv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }
    var s = A0(), o = i(s);
    function c() {
      var _ = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = _;
    }
    c.prototype = new o.default(), c.prototype.Program = function(_) {
      var b = !this.options.ignoreStandalone, y = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var p = _.body, f = 0, S = p.length; f < S; f++) {
        var x = p[f], T = this.accept(x);
        if (T) {
          var w = h(p, f, y), N = m(p, f, y), C = T.openStandalone && w, O = T.closeStandalone && N, z = T.inlineStandalone && w && N;
          T.close && g(p, f, !0), T.open && v(p, f, !0), b && z && (g(p, f), v(p, f) && x.type === "PartialStatement" && (x.indent = /([ \t]+$)/.exec(p[f - 1].original)[1])), b && C && (g((x.program || x.inverse).body), v(p, f)), b && O && (g(p, f), v((x.inverse || x.program).body));
        }
      }
      return _;
    }, c.prototype.BlockStatement = c.prototype.DecoratorBlock = c.prototype.PartialBlockStatement = function(_) {
      this.accept(_.program), this.accept(_.inverse);
      var b = _.program || _.inverse, y = _.program && _.inverse, p = y, f = y;
      if (y && y.chained)
        for (p = y.body[0].program; f.chained; )
          f = f.body[f.body.length - 1].program;
      var S = {
        open: _.openStrip.open,
        close: _.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: m(b.body),
        closeStandalone: h((p || b).body)
      };
      if (_.openStrip.close && g(b.body, null, !0), y) {
        var x = _.inverseStrip;
        x.open && v(b.body, null, !0), x.close && g(p.body, null, !0), _.closeStrip.open && v(f.body, null, !0), !this.options.ignoreStandalone && h(b.body) && m(p.body) && (v(b.body), g(p.body));
      } else _.closeStrip.open && v(b.body, null, !0);
      return S;
    }, c.prototype.Decorator = c.prototype.MustacheStatement = function(_) {
      return _.strip;
    }, c.prototype.PartialStatement = c.prototype.CommentStatement = function(_) {
      var b = _.strip || {};
      return {
        inlineStandalone: !0,
        open: b.open,
        close: b.close
      };
    };
    function h(_, b, y) {
      b === void 0 && (b = _.length);
      var p = _[b - 1], f = _[b - 2];
      if (!p)
        return y;
      if (p.type === "ContentStatement")
        return (f || !y ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(p.original);
    }
    function m(_, b, y) {
      b === void 0 && (b = -1);
      var p = _[b + 1], f = _[b + 2];
      if (!p)
        return y;
      if (p.type === "ContentStatement")
        return (f || !y ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(p.original);
    }
    function g(_, b, y) {
      var p = _[b == null ? 0 : b + 1];
      if (!(!p || p.type !== "ContentStatement" || !y && p.rightStripped)) {
        var f = p.value;
        p.value = p.value.replace(y ? /^\s+/ : /^[ \t]*\r?\n?/, ""), p.rightStripped = p.value !== f;
      }
    }
    function v(_, b, y) {
      var p = _[b == null ? _.length - 1 : b - 1];
      if (!(!p || p.type !== "ContentStatement" || !y && p.leftStripped)) {
        var f = p.value;
        return p.value = p.value.replace(y ? /\s+$/ : /[ \t]+$/, ""), p.leftStripped = p.value !== f, p.leftStripped;
      }
    }
    r.default = c, n.exports = r.default;
  })(Bo, Bo.exports)), Bo.exports;
}
var rn = {}, Hv;
function KS() {
  if (Hv) return rn;
  Hv = 1, rn.__esModule = !0, rn.SourceLocation = o, rn.id = c, rn.stripFlags = h, rn.stripComment = m, rn.preparePath = g, rn.prepareMustache = v, rn.prepareRawBlock = _, rn.prepareBlock = b, rn.prepareProgram = y, rn.preparePartialBlock = p;
  function n(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var r = Nn(), i = n(r);
  function s(f, S) {
    if (S = S.path ? S.path.original : S, f.path.original !== S) {
      var x = { loc: f.path.loc };
      throw new i.default(f.path.original + " doesn't match " + S, x);
    }
  }
  function o(f, S) {
    this.source = f, this.start = {
      line: S.first_line,
      column: S.first_column
    }, this.end = {
      line: S.last_line,
      column: S.last_column
    };
  }
  function c(f) {
    return /^\[.*\]$/.test(f) ? f.substring(1, f.length - 1) : f;
  }
  function h(f, S) {
    return {
      open: f.charAt(2) === "~",
      close: S.charAt(S.length - 3) === "~"
    };
  }
  function m(f) {
    return f.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function g(f, S, x) {
    x = this.locInfo(x);
    for (var T = f ? "@" : "", w = [], N = 0, C = 0, O = S.length; C < O; C++) {
      var z = S[C].part, R = S[C].original !== z;
      if (T += (S[C].separator || "") + z, !R && (z === ".." || z === "." || z === "this")) {
        if (w.length > 0)
          throw new i.default("Invalid path: " + T, { loc: x });
        z === ".." && N++;
      } else
        w.push(z);
    }
    return {
      type: "PathExpression",
      data: f,
      depth: N,
      parts: w,
      original: T,
      loc: x
    };
  }
  function v(f, S, x, T, w, N) {
    var C = T.charAt(3) || T.charAt(2), O = C !== "{" && C !== "&", z = /\*/.test(T);
    return {
      type: z ? "Decorator" : "MustacheStatement",
      path: f,
      params: S,
      hash: x,
      escaped: O,
      strip: w,
      loc: this.locInfo(N)
    };
  }
  function _(f, S, x, T) {
    s(f, x), T = this.locInfo(T);
    var w = {
      type: "Program",
      body: S,
      strip: {},
      loc: T
    };
    return {
      type: "BlockStatement",
      path: f.path,
      params: f.params,
      hash: f.hash,
      program: w,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: T
    };
  }
  function b(f, S, x, T, w, N) {
    T && T.path && s(f, T);
    var C = /\*/.test(f.open);
    S.blockParams = f.blockParams;
    var O = void 0, z = void 0;
    if (x) {
      if (C)
        throw new i.default("Unexpected inverse block on decorator", x);
      x.chain && (x.program.body[0].closeStrip = T.strip), z = x.strip, O = x.program;
    }
    return w && (w = O, O = S, S = w), {
      type: C ? "DecoratorBlock" : "BlockStatement",
      path: f.path,
      params: f.params,
      hash: f.hash,
      program: S,
      inverse: O,
      openStrip: f.strip,
      inverseStrip: z,
      closeStrip: T && T.strip,
      loc: this.locInfo(N)
    };
  }
  function y(f, S) {
    if (!S && f.length) {
      var x = f[0].loc, T = f[f.length - 1].loc;
      x && T && (S = {
        source: x.source,
        start: {
          line: x.start.line,
          column: x.start.column
        },
        end: {
          line: T.end.line,
          column: T.end.column
        }
      });
    }
    return {
      type: "Program",
      body: f,
      strip: {},
      loc: S
    };
  }
  function p(f, S, x, T) {
    return s(f, x), {
      type: "PartialBlockStatement",
      name: f.path,
      params: f.params,
      hash: f.hash,
      program: S,
      openStrip: f.strip,
      closeStrip: x && x.strip,
      loc: this.locInfo(T)
    };
  }
  return rn;
}
var qv;
function JS() {
  if (qv) return ci;
  qv = 1, ci.__esModule = !0, ci.parseWithoutProcessing = _, ci.parse = b;
  function n(y) {
    if (y && y.__esModule)
      return y;
    var p = {};
    if (y != null)
      for (var f in y)
        Object.prototype.hasOwnProperty.call(y, f) && (p[f] = y[f]);
    return p.default = y, p;
  }
  function r(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var i = QS(), s = r(i), o = $S(), c = r(o), h = KS(), m = n(h), g = Vt();
  ci.parser = s.default;
  var v = {};
  g.extend(v, m);
  function _(y, p) {
    if (y.type === "Program")
      return y;
    s.default.yy = v, v.locInfo = function(S) {
      return new v.SourceLocation(p && p.srcName, S);
    };
    var f = s.default.parse(y);
    return f;
  }
  function b(y, p) {
    var f = _(y, p), S = new c.default(p);
    return S.accept(f);
  }
  return ci;
}
var fi = {}, Zv;
function WS() {
  if (Zv) return fi;
  Zv = 1, fi.__esModule = !0, fi.Compiler = m, fi.precompile = g, fi.compile = v;
  function n(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = Nn(), i = n(r), s = Vt(), o = w0(), c = n(o), h = [].slice;
  function m() {
  }
  m.prototype = {
    compiler: m,
    equals: function(p) {
      var f = this.opcodes.length;
      if (p.opcodes.length !== f)
        return !1;
      for (var S = 0; S < f; S++) {
        var x = this.opcodes[S], T = p.opcodes[S];
        if (x.opcode !== T.opcode || !_(x.args, T.args))
          return !1;
      }
      f = this.children.length;
      for (var S = 0; S < f; S++)
        if (!this.children[S].equals(p.children[S]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(p, f) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = f, this.stringParams = f.stringParams, this.trackIds = f.trackIds, f.blockParams = f.blockParams || [], f.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, f.knownHelpers), this.accept(p);
    },
    compileProgram: function(p) {
      var f = new this.compiler(), S = f.compile(p, this.options), x = this.guid++;
      return this.usePartial = this.usePartial || S.usePartial, this.children[x] = S, this.useDepths = this.useDepths || S.useDepths, x;
    },
    accept: function(p) {
      if (!this[p.type])
        throw new i.default("Unknown type: " + p.type, p);
      this.sourceNode.unshift(p);
      var f = this[p.type](p);
      return this.sourceNode.shift(), f;
    },
    Program: function(p) {
      this.options.blockParams.unshift(p.blockParams);
      for (var f = p.body, S = f.length, x = 0; x < S; x++)
        this.accept(f[x]);
      return this.options.blockParams.shift(), this.isSimple = S === 1, this.blockParams = p.blockParams ? p.blockParams.length : 0, this;
    },
    BlockStatement: function(p) {
      b(p);
      var f = p.program, S = p.inverse;
      f = f && this.compileProgram(f), S = S && this.compileProgram(S);
      var x = this.classifySexpr(p);
      x === "helper" ? this.helperSexpr(p, f, S) : x === "simple" ? (this.simpleSexpr(p), this.opcode("pushProgram", f), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("blockValue", p.path.original)) : (this.ambiguousSexpr(p, f, S), this.opcode("pushProgram", f), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(p) {
      var f = p.program && this.compileProgram(p.program), S = this.setupFullMustacheParams(p, f, void 0), x = p.path;
      this.useDecorators = !0, this.opcode("registerDecorator", S.length, x.original);
    },
    PartialStatement: function(p) {
      this.usePartial = !0;
      var f = p.program;
      f && (f = this.compileProgram(p.program));
      var S = p.params;
      if (S.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + S.length, p);
      S.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : S.push({ type: "PathExpression", parts: [], depth: 0 }));
      var x = p.name.original, T = p.name.type === "SubExpression";
      T && this.accept(p.name), this.setupFullMustacheParams(p, f, void 0, !0);
      var w = p.indent || "";
      this.options.preventIndent && w && (this.opcode("appendContent", w), w = ""), this.opcode("invokePartial", T, x, w), this.opcode("append");
    },
    PartialBlockStatement: function(p) {
      this.PartialStatement(p);
    },
    MustacheStatement: function(p) {
      this.SubExpression(p), p.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(p) {
      this.DecoratorBlock(p);
    },
    ContentStatement: function(p) {
      p.value && this.opcode("appendContent", p.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(p) {
      b(p);
      var f = this.classifySexpr(p);
      f === "simple" ? this.simpleSexpr(p) : f === "helper" ? this.helperSexpr(p) : this.ambiguousSexpr(p);
    },
    ambiguousSexpr: function(p, f, S) {
      var x = p.path, T = x.parts[0], w = f != null || S != null;
      this.opcode("getContext", x.depth), this.opcode("pushProgram", f), this.opcode("pushProgram", S), x.strict = !0, this.accept(x), this.opcode("invokeAmbiguous", T, w);
    },
    simpleSexpr: function(p) {
      var f = p.path;
      f.strict = !0, this.accept(f), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(p, f, S) {
      var x = this.setupFullMustacheParams(p, f, S), T = p.path, w = T.parts[0];
      if (this.options.knownHelpers[w])
        this.opcode("invokeKnownHelper", x.length, w);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + w, p);
        T.strict = !0, T.falsy = !0, this.accept(T), this.opcode("invokeHelper", x.length, T.original, c.default.helpers.simpleId(T));
      }
    },
    PathExpression: function(p) {
      this.addDepth(p.depth), this.opcode("getContext", p.depth);
      var f = p.parts[0], S = c.default.helpers.scopedId(p), x = !p.depth && !S && this.blockParamIndex(f);
      x ? this.opcode("lookupBlockParam", x, p.parts) : f ? p.data ? (this.options.data = !0, this.opcode("lookupData", p.depth, p.parts, p.strict)) : this.opcode("lookupOnContext", p.parts, p.falsy, p.strict, S) : this.opcode("pushContext");
    },
    StringLiteral: function(p) {
      this.opcode("pushString", p.value);
    },
    NumberLiteral: function(p) {
      this.opcode("pushLiteral", p.value);
    },
    BooleanLiteral: function(p) {
      this.opcode("pushLiteral", p.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(p) {
      var f = p.pairs, S = 0, x = f.length;
      for (this.opcode("pushHash"); S < x; S++)
        this.pushParam(f[S].value);
      for (; S--; )
        this.opcode("assignToHash", f[S].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(p) {
      this.opcodes.push({
        opcode: p,
        args: h.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(p) {
      p && (this.useDepths = !0);
    },
    classifySexpr: function(p) {
      var f = c.default.helpers.simpleId(p.path), S = f && !!this.blockParamIndex(p.path.parts[0]), x = !S && c.default.helpers.helperExpression(p), T = !S && (x || f);
      if (T && !x) {
        var w = p.path.parts[0], N = this.options;
        N.knownHelpers[w] ? x = !0 : N.knownHelpersOnly && (T = !1);
      }
      return x ? "helper" : T ? "ambiguous" : "simple";
    },
    pushParams: function(p) {
      for (var f = 0, S = p.length; f < S; f++)
        this.pushParam(p[f]);
    },
    pushParam: function(p) {
      var f = p.value != null ? p.value : p.original || "";
      if (this.stringParams)
        f.replace && (f = f.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), p.depth && this.addDepth(p.depth), this.opcode("getContext", p.depth || 0), this.opcode("pushStringParam", f, p.type), p.type === "SubExpression" && this.accept(p);
      else {
        if (this.trackIds) {
          var S = void 0;
          if (p.parts && !c.default.helpers.scopedId(p) && !p.depth && (S = this.blockParamIndex(p.parts[0])), S) {
            var x = p.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", S, x);
          } else
            f = p.original || f, f.replace && (f = f.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", p.type, f);
        }
        this.accept(p);
      }
    },
    setupFullMustacheParams: function(p, f, S, x) {
      var T = p.params;
      return this.pushParams(T), this.opcode("pushProgram", f), this.opcode("pushProgram", S), p.hash ? this.accept(p.hash) : this.opcode("emptyHash", x), T;
    },
    blockParamIndex: function(p) {
      for (var f = 0, S = this.options.blockParams.length; f < S; f++) {
        var x = this.options.blockParams[f], T = x && s.indexOf(x, p);
        if (x && T >= 0)
          return [f, T];
      }
    }
  };
  function g(y, p, f) {
    if (y == null || typeof y != "string" && y.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + y);
    p = p || {}, "data" in p || (p.data = !0), p.compat && (p.useDepths = !0);
    var S = f.parse(y, p), x = new f.Compiler().compile(S, p);
    return new f.JavaScriptCompiler().compile(x, p);
  }
  function v(y, p, f) {
    if (p === void 0 && (p = {}), y == null || typeof y != "string" && y.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + y);
    p = s.extend({}, p), "data" in p || (p.data = !0), p.compat && (p.useDepths = !0);
    var S = void 0;
    function x() {
      var w = f.parse(y, p), N = new f.Compiler().compile(w, p), C = new f.JavaScriptCompiler().compile(N, p, void 0, !0);
      return f.template(C);
    }
    function T(w, N) {
      return S || (S = x()), S.call(this, w, N);
    }
    return T._setup = function(w) {
      return S || (S = x()), S._setup(w);
    }, T._child = function(w, N, C, O) {
      return S || (S = x()), S._child(w, N, C, O);
    }, T;
  }
  function _(y, p) {
    if (y === p)
      return !0;
    if (s.isArray(y) && s.isArray(p) && y.length === p.length) {
      for (var f = 0; f < y.length; f++)
        if (!_(y[f], p[f]))
          return !1;
      return !0;
    }
  }
  function b(y) {
    if (!y.path.parts) {
      var p = y.path;
      y.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [p.original + ""],
        original: p.original + "",
        loc: p.loc
      };
    }
  }
  return fi;
}
var Po = { exports: {} }, Io = { exports: {} }, Cs = {}, Jf = {}, Ho = {}, qo = {}, Gv;
function ex() {
  if (Gv) return qo;
  Gv = 1;
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return qo.encode = function(r) {
    if (0 <= r && r < n.length)
      return n[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, qo.decode = function(r) {
    var i = 65, s = 90, o = 97, c = 122, h = 48, m = 57, g = 43, v = 47, _ = 26, b = 52;
    return i <= r && r <= s ? r - i : o <= r && r <= c ? r - o + _ : h <= r && r <= m ? r - h + b : r == g ? 62 : r == v ? 63 : -1;
  }, qo;
}
var Fv;
function T0() {
  if (Fv) return Ho;
  Fv = 1;
  var n = ex(), r = 5, i = 1 << r, s = i - 1, o = i;
  function c(m) {
    return m < 0 ? (-m << 1) + 1 : (m << 1) + 0;
  }
  function h(m) {
    var g = (m & 1) === 1, v = m >> 1;
    return g ? -v : v;
  }
  return Ho.encode = function(g) {
    var v = "", _, b = c(g);
    do
      _ = b & s, b >>>= r, b > 0 && (_ |= o), v += n.encode(_);
    while (b > 0);
    return v;
  }, Ho.decode = function(g, v, _) {
    var b = g.length, y = 0, p = 0, f, S;
    do {
      if (v >= b)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (S = n.decode(g.charCodeAt(v++)), S === -1)
        throw new Error("Invalid base64 digit: " + g.charAt(v - 1));
      f = !!(S & o), S &= s, y = y + (S << p), p += r;
    } while (f);
    _.value = h(y), _.rest = v;
  }, Ho;
}
var Wf = {}, Vv;
function Qs() {
  return Vv || (Vv = 1, (function(n) {
    function r(C, O, z) {
      if (O in C)
        return C[O];
      if (arguments.length === 3)
        return z;
      throw new Error('"' + O + '" is a required argument.');
    }
    n.getArg = r;
    var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function o(C) {
      var O = C.match(i);
      return O ? {
        scheme: O[1],
        auth: O[2],
        host: O[3],
        port: O[4],
        path: O[5]
      } : null;
    }
    n.urlParse = o;
    function c(C) {
      var O = "";
      return C.scheme && (O += C.scheme + ":"), O += "//", C.auth && (O += C.auth + "@"), C.host && (O += C.host), C.port && (O += ":" + C.port), C.path && (O += C.path), O;
    }
    n.urlGenerate = c;
    function h(C) {
      var O = C, z = o(C);
      if (z) {
        if (!z.path)
          return C;
        O = z.path;
      }
      for (var R = n.isAbsolute(O), Z = O.split(/\/+/), te, $ = 0, Q = Z.length - 1; Q >= 0; Q--)
        te = Z[Q], te === "." ? Z.splice(Q, 1) : te === ".." ? $++ : $ > 0 && (te === "" ? (Z.splice(Q + 1, $), $ = 0) : (Z.splice(Q, 2), $--));
      return O = Z.join("/"), O === "" && (O = R ? "/" : "."), z ? (z.path = O, c(z)) : O;
    }
    n.normalize = h;
    function m(C, O) {
      C === "" && (C = "."), O === "" && (O = ".");
      var z = o(O), R = o(C);
      if (R && (C = R.path || "/"), z && !z.scheme)
        return R && (z.scheme = R.scheme), c(z);
      if (z || O.match(s))
        return O;
      if (R && !R.host && !R.path)
        return R.host = O, c(R);
      var Z = O.charAt(0) === "/" ? O : h(C.replace(/\/+$/, "") + "/" + O);
      return R ? (R.path = Z, c(R)) : Z;
    }
    n.join = m, n.isAbsolute = function(C) {
      return C.charAt(0) === "/" || i.test(C);
    };
    function g(C, O) {
      C === "" && (C = "."), C = C.replace(/\/$/, "");
      for (var z = 0; O.indexOf(C + "/") !== 0; ) {
        var R = C.lastIndexOf("/");
        if (R < 0 || (C = C.slice(0, R), C.match(/^([^\/]+:\/)?\/*$/)))
          return O;
        ++z;
      }
      return Array(z + 1).join("../") + O.substr(C.length + 1);
    }
    n.relative = g;
    var v = (function() {
      var C = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in C);
    })();
    function _(C) {
      return C;
    }
    function b(C) {
      return p(C) ? "$" + C : C;
    }
    n.toSetString = v ? _ : b;
    function y(C) {
      return p(C) ? C.slice(1) : C;
    }
    n.fromSetString = v ? _ : y;
    function p(C) {
      if (!C)
        return !1;
      var O = C.length;
      if (O < 9 || C.charCodeAt(O - 1) !== 95 || C.charCodeAt(O - 2) !== 95 || C.charCodeAt(O - 3) !== 111 || C.charCodeAt(O - 4) !== 116 || C.charCodeAt(O - 5) !== 111 || C.charCodeAt(O - 6) !== 114 || C.charCodeAt(O - 7) !== 112 || C.charCodeAt(O - 8) !== 95 || C.charCodeAt(O - 9) !== 95)
        return !1;
      for (var z = O - 10; z >= 0; z--)
        if (C.charCodeAt(z) !== 36)
          return !1;
      return !0;
    }
    function f(C, O, z) {
      var R = x(C.source, O.source);
      return R !== 0 || (R = C.originalLine - O.originalLine, R !== 0) || (R = C.originalColumn - O.originalColumn, R !== 0 || z) || (R = C.generatedColumn - O.generatedColumn, R !== 0) || (R = C.generatedLine - O.generatedLine, R !== 0) ? R : x(C.name, O.name);
    }
    n.compareByOriginalPositions = f;
    function S(C, O, z) {
      var R = C.generatedLine - O.generatedLine;
      return R !== 0 || (R = C.generatedColumn - O.generatedColumn, R !== 0 || z) || (R = x(C.source, O.source), R !== 0) || (R = C.originalLine - O.originalLine, R !== 0) || (R = C.originalColumn - O.originalColumn, R !== 0) ? R : x(C.name, O.name);
    }
    n.compareByGeneratedPositionsDeflated = S;
    function x(C, O) {
      return C === O ? 0 : C === null ? 1 : O === null ? -1 : C > O ? 1 : -1;
    }
    function T(C, O) {
      var z = C.generatedLine - O.generatedLine;
      return z !== 0 || (z = C.generatedColumn - O.generatedColumn, z !== 0) || (z = x(C.source, O.source), z !== 0) || (z = C.originalLine - O.originalLine, z !== 0) || (z = C.originalColumn - O.originalColumn, z !== 0) ? z : x(C.name, O.name);
    }
    n.compareByGeneratedPositionsInflated = T;
    function w(C) {
      return JSON.parse(C.replace(/^\)]}'[^\n]*\n/, ""));
    }
    n.parseSourceMapInput = w;
    function N(C, O, z) {
      if (O = O || "", C && (C[C.length - 1] !== "/" && O[0] !== "/" && (C += "/"), O = C + O), z) {
        var R = o(z);
        if (!R)
          throw new Error("sourceMapURL could not be parsed");
        if (R.path) {
          var Z = R.path.lastIndexOf("/");
          Z >= 0 && (R.path = R.path.substring(0, Z + 1));
        }
        O = m(c(R), O);
      }
      return h(O);
    }
    n.computeSourceURL = N;
  })(Wf)), Wf;
}
var eh = {}, Yv;
function D0() {
  if (Yv) return eh;
  Yv = 1;
  var n = Qs(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
  function s() {
    this._array = [], this._set = i ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(c, h) {
    for (var m = new s(), g = 0, v = c.length; g < v; g++)
      m.add(c[g], h);
    return m;
  }, s.prototype.size = function() {
    return i ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(c, h) {
    var m = i ? c : n.toSetString(c), g = i ? this.has(c) : r.call(this._set, m), v = this._array.length;
    (!g || h) && this._array.push(c), g || (i ? this._set.set(c, v) : this._set[m] = v);
  }, s.prototype.has = function(c) {
    if (i)
      return this._set.has(c);
    var h = n.toSetString(c);
    return r.call(this._set, h);
  }, s.prototype.indexOf = function(c) {
    if (i) {
      var h = this._set.get(c);
      if (h >= 0)
        return h;
    } else {
      var m = n.toSetString(c);
      if (r.call(this._set, m))
        return this._set[m];
    }
    throw new Error('"' + c + '" is not in the set.');
  }, s.prototype.at = function(c) {
    if (c >= 0 && c < this._array.length)
      return this._array[c];
    throw new Error("No element indexed by " + c);
  }, s.prototype.toArray = function() {
    return this._array.slice();
  }, eh.ArraySet = s, eh;
}
var th = {}, Xv;
function tx() {
  if (Xv) return th;
  Xv = 1;
  var n = Qs();
  function r(s, o) {
    var c = s.generatedLine, h = o.generatedLine, m = s.generatedColumn, g = o.generatedColumn;
    return h > c || h == c && g >= m || n.compareByGeneratedPositionsInflated(s, o) <= 0;
  }
  function i() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return i.prototype.unsortedForEach = function(o, c) {
    this._array.forEach(o, c);
  }, i.prototype.add = function(o) {
    r(this._last, o) ? (this._last = o, this._array.push(o)) : (this._sorted = !1, this._array.push(o));
  }, i.prototype.toArray = function() {
    return this._sorted || (this._array.sort(n.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, th.MappingList = i, th;
}
var Qv;
function O0() {
  if (Qv) return Jf;
  Qv = 1;
  var n = T0(), r = Qs(), i = D0().ArraySet, s = tx().MappingList;
  function o(c) {
    c || (c = {}), this._file = r.getArg(c, "file", null), this._sourceRoot = r.getArg(c, "sourceRoot", null), this._skipValidation = r.getArg(c, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new s(), this._sourcesContents = null;
  }
  return o.prototype._version = 3, o.fromSourceMap = function(h) {
    var m = h.sourceRoot, g = new o({
      file: h.file,
      sourceRoot: m
    });
    return h.eachMapping(function(v) {
      var _ = {
        generated: {
          line: v.generatedLine,
          column: v.generatedColumn
        }
      };
      v.source != null && (_.source = v.source, m != null && (_.source = r.relative(m, _.source)), _.original = {
        line: v.originalLine,
        column: v.originalColumn
      }, v.name != null && (_.name = v.name)), g.addMapping(_);
    }), h.sources.forEach(function(v) {
      var _ = v;
      m !== null && (_ = r.relative(m, v)), g._sources.has(_) || g._sources.add(_);
      var b = h.sourceContentFor(v);
      b != null && g.setSourceContent(v, b);
    }), g;
  }, o.prototype.addMapping = function(h) {
    var m = r.getArg(h, "generated"), g = r.getArg(h, "original", null), v = r.getArg(h, "source", null), _ = r.getArg(h, "name", null);
    this._skipValidation || this._validateMapping(m, g, v, _), v != null && (v = String(v), this._sources.has(v) || this._sources.add(v)), _ != null && (_ = String(_), this._names.has(_) || this._names.add(_)), this._mappings.add({
      generatedLine: m.line,
      generatedColumn: m.column,
      originalLine: g != null && g.line,
      originalColumn: g != null && g.column,
      source: v,
      name: _
    });
  }, o.prototype.setSourceContent = function(h, m) {
    var g = h;
    this._sourceRoot != null && (g = r.relative(this._sourceRoot, g)), m != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(g)] = m) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(g)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, o.prototype.applySourceMap = function(h, m, g) {
    var v = m;
    if (m == null) {
      if (h.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      v = h.file;
    }
    var _ = this._sourceRoot;
    _ != null && (v = r.relative(_, v));
    var b = new i(), y = new i();
    this._mappings.unsortedForEach(function(p) {
      if (p.source === v && p.originalLine != null) {
        var f = h.originalPositionFor({
          line: p.originalLine,
          column: p.originalColumn
        });
        f.source != null && (p.source = f.source, g != null && (p.source = r.join(g, p.source)), _ != null && (p.source = r.relative(_, p.source)), p.originalLine = f.line, p.originalColumn = f.column, f.name != null && (p.name = f.name));
      }
      var S = p.source;
      S != null && !b.has(S) && b.add(S);
      var x = p.name;
      x != null && !y.has(x) && y.add(x);
    }, this), this._sources = b, this._names = y, h.sources.forEach(function(p) {
      var f = h.sourceContentFor(p);
      f != null && (g != null && (p = r.join(g, p)), _ != null && (p = r.relative(_, p)), this.setSourceContent(p, f));
    }, this);
  }, o.prototype._validateMapping = function(h, m, g, v) {
    if (m && typeof m.line != "number" && typeof m.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(h && "line" in h && "column" in h && h.line > 0 && h.column >= 0 && !m && !g && !v)) {
      if (h && "line" in h && "column" in h && m && "line" in m && "column" in m && h.line > 0 && h.column >= 0 && m.line > 0 && m.column >= 0 && g)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: h,
        source: g,
        original: m,
        name: v
      }));
    }
  }, o.prototype._serializeMappings = function() {
    for (var h = 0, m = 1, g = 0, v = 0, _ = 0, b = 0, y = "", p, f, S, x, T = this._mappings.toArray(), w = 0, N = T.length; w < N; w++) {
      if (f = T[w], p = "", f.generatedLine !== m)
        for (h = 0; f.generatedLine !== m; )
          p += ";", m++;
      else if (w > 0) {
        if (!r.compareByGeneratedPositionsInflated(f, T[w - 1]))
          continue;
        p += ",";
      }
      p += n.encode(f.generatedColumn - h), h = f.generatedColumn, f.source != null && (x = this._sources.indexOf(f.source), p += n.encode(x - b), b = x, p += n.encode(f.originalLine - 1 - v), v = f.originalLine - 1, p += n.encode(f.originalColumn - g), g = f.originalColumn, f.name != null && (S = this._names.indexOf(f.name), p += n.encode(S - _), _ = S)), y += p;
    }
    return y;
  }, o.prototype._generateSourcesContent = function(h, m) {
    return h.map(function(g) {
      if (!this._sourcesContents)
        return null;
      m != null && (g = r.relative(m, g));
      var v = r.toSetString(g);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, v) ? this._sourcesContents[v] : null;
    }, this);
  }, o.prototype.toJSON = function() {
    var h = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (h.file = this._file), this._sourceRoot != null && (h.sourceRoot = this._sourceRoot), this._sourcesContents && (h.sourcesContent = this._generateSourcesContent(h.sources, h.sourceRoot)), h;
  }, o.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, Jf.SourceMapGenerator = o, Jf;
}
var ws = {}, nh = {}, $v;
function nx() {
  return $v || ($v = 1, (function(n) {
    n.GREATEST_LOWER_BOUND = 1, n.LEAST_UPPER_BOUND = 2;
    function r(i, s, o, c, h, m) {
      var g = Math.floor((s - i) / 2) + i, v = h(o, c[g], !0);
      return v === 0 ? g : v > 0 ? s - g > 1 ? r(g, s, o, c, h, m) : m == n.LEAST_UPPER_BOUND ? s < c.length ? s : -1 : g : g - i > 1 ? r(i, g, o, c, h, m) : m == n.LEAST_UPPER_BOUND ? g : i < 0 ? -1 : i;
    }
    n.search = function(s, o, c, h) {
      if (o.length === 0)
        return -1;
      var m = r(
        -1,
        o.length,
        s,
        o,
        c,
        h || n.GREATEST_LOWER_BOUND
      );
      if (m < 0)
        return -1;
      for (; m - 1 >= 0 && c(o[m], o[m - 1], !0) === 0; )
        --m;
      return m;
    };
  })(nh)), nh;
}
var rh = {}, Kv;
function rx() {
  if (Kv) return rh;
  Kv = 1;
  function n(s, o, c) {
    var h = s[o];
    s[o] = s[c], s[c] = h;
  }
  function r(s, o) {
    return Math.round(s + Math.random() * (o - s));
  }
  function i(s, o, c, h) {
    if (c < h) {
      var m = r(c, h), g = c - 1;
      n(s, m, h);
      for (var v = s[h], _ = c; _ < h; _++)
        o(s[_], v) <= 0 && (g += 1, n(s, g, _));
      n(s, g + 1, _);
      var b = g + 1;
      i(s, o, c, b - 1), i(s, o, b + 1, h);
    }
  }
  return rh.quickSort = function(s, o) {
    i(s, o, 0, s.length - 1);
  }, rh;
}
var Jv;
function ax() {
  if (Jv) return ws;
  Jv = 1;
  var n = Qs(), r = nx(), i = D0().ArraySet, s = T0(), o = rx().quickSort;
  function c(v, _) {
    var b = v;
    return typeof v == "string" && (b = n.parseSourceMapInput(v)), b.sections != null ? new g(b, _) : new h(b, _);
  }
  c.fromSourceMap = function(v, _) {
    return h.fromSourceMap(v, _);
  }, c.prototype._version = 3, c.prototype.__generatedMappings = null, Object.defineProperty(c.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), c.prototype.__originalMappings = null, Object.defineProperty(c.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), c.prototype._charIsMappingSeparator = function(_, b) {
    var y = _.charAt(b);
    return y === ";" || y === ",";
  }, c.prototype._parseMappings = function(_, b) {
    throw new Error("Subclasses must implement _parseMappings");
  }, c.GENERATED_ORDER = 1, c.ORIGINAL_ORDER = 2, c.GREATEST_LOWER_BOUND = 1, c.LEAST_UPPER_BOUND = 2, c.prototype.eachMapping = function(_, b, y) {
    var p = b || null, f = y || c.GENERATED_ORDER, S;
    switch (f) {
      case c.GENERATED_ORDER:
        S = this._generatedMappings;
        break;
      case c.ORIGINAL_ORDER:
        S = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var x = this.sourceRoot;
    S.map(function(T) {
      var w = T.source === null ? null : this._sources.at(T.source);
      return w = n.computeSourceURL(x, w, this._sourceMapURL), {
        source: w,
        generatedLine: T.generatedLine,
        generatedColumn: T.generatedColumn,
        originalLine: T.originalLine,
        originalColumn: T.originalColumn,
        name: T.name === null ? null : this._names.at(T.name)
      };
    }, this).forEach(_, p);
  }, c.prototype.allGeneratedPositionsFor = function(_) {
    var b = n.getArg(_, "line"), y = {
      source: n.getArg(_, "source"),
      originalLine: b,
      originalColumn: n.getArg(_, "column", 0)
    };
    if (y.source = this._findSourceIndex(y.source), y.source < 0)
      return [];
    var p = [], f = this._findMapping(
      y,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (f >= 0) {
      var S = this._originalMappings[f];
      if (_.column === void 0)
        for (var x = S.originalLine; S && S.originalLine === x; )
          p.push({
            line: n.getArg(S, "generatedLine", null),
            column: n.getArg(S, "generatedColumn", null),
            lastColumn: n.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++f];
      else
        for (var T = S.originalColumn; S && S.originalLine === b && S.originalColumn == T; )
          p.push({
            line: n.getArg(S, "generatedLine", null),
            column: n.getArg(S, "generatedColumn", null),
            lastColumn: n.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++f];
    }
    return p;
  }, ws.SourceMapConsumer = c;
  function h(v, _) {
    var b = v;
    typeof v == "string" && (b = n.parseSourceMapInput(v));
    var y = n.getArg(b, "version"), p = n.getArg(b, "sources"), f = n.getArg(b, "names", []), S = n.getArg(b, "sourceRoot", null), x = n.getArg(b, "sourcesContent", null), T = n.getArg(b, "mappings"), w = n.getArg(b, "file", null);
    if (y != this._version)
      throw new Error("Unsupported version: " + y);
    S && (S = n.normalize(S)), p = p.map(String).map(n.normalize).map(function(N) {
      return S && n.isAbsolute(S) && n.isAbsolute(N) ? n.relative(S, N) : N;
    }), this._names = i.fromArray(f.map(String), !0), this._sources = i.fromArray(p, !0), this._absoluteSources = this._sources.toArray().map(function(N) {
      return n.computeSourceURL(S, N, _);
    }), this.sourceRoot = S, this.sourcesContent = x, this._mappings = T, this._sourceMapURL = _, this.file = w;
  }
  h.prototype = Object.create(c.prototype), h.prototype.consumer = c, h.prototype._findSourceIndex = function(v) {
    var _ = v;
    if (this.sourceRoot != null && (_ = n.relative(this.sourceRoot, _)), this._sources.has(_))
      return this._sources.indexOf(_);
    var b;
    for (b = 0; b < this._absoluteSources.length; ++b)
      if (this._absoluteSources[b] == v)
        return b;
    return -1;
  }, h.fromSourceMap = function(_, b) {
    var y = Object.create(h.prototype), p = y._names = i.fromArray(_._names.toArray(), !0), f = y._sources = i.fromArray(_._sources.toArray(), !0);
    y.sourceRoot = _._sourceRoot, y.sourcesContent = _._generateSourcesContent(
      y._sources.toArray(),
      y.sourceRoot
    ), y.file = _._file, y._sourceMapURL = b, y._absoluteSources = y._sources.toArray().map(function(z) {
      return n.computeSourceURL(y.sourceRoot, z, b);
    });
    for (var S = _._mappings.toArray().slice(), x = y.__generatedMappings = [], T = y.__originalMappings = [], w = 0, N = S.length; w < N; w++) {
      var C = S[w], O = new m();
      O.generatedLine = C.generatedLine, O.generatedColumn = C.generatedColumn, C.source && (O.source = f.indexOf(C.source), O.originalLine = C.originalLine, O.originalColumn = C.originalColumn, C.name && (O.name = p.indexOf(C.name)), T.push(O)), x.push(O);
    }
    return o(y.__originalMappings, n.compareByOriginalPositions), y;
  }, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function m() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  h.prototype._parseMappings = function(_, b) {
    for (var y = 1, p = 0, f = 0, S = 0, x = 0, T = 0, w = _.length, N = 0, C = {}, O = {}, z = [], R = [], Z, te, $, Q, ee; N < w; )
      if (_.charAt(N) === ";")
        y++, N++, p = 0;
      else if (_.charAt(N) === ",")
        N++;
      else {
        for (Z = new m(), Z.generatedLine = y, Q = N; Q < w && !this._charIsMappingSeparator(_, Q); Q++)
          ;
        if (te = _.slice(N, Q), $ = C[te], $)
          N += te.length;
        else {
          for ($ = []; N < Q; )
            s.decode(_, N, O), ee = O.value, N = O.rest, $.push(ee);
          if ($.length === 2)
            throw new Error("Found a source, but no line and column");
          if ($.length === 3)
            throw new Error("Found a source and line, but no column");
          C[te] = $;
        }
        Z.generatedColumn = p + $[0], p = Z.generatedColumn, $.length > 1 && (Z.source = x + $[1], x += $[1], Z.originalLine = f + $[2], f = Z.originalLine, Z.originalLine += 1, Z.originalColumn = S + $[3], S = Z.originalColumn, $.length > 4 && (Z.name = T + $[4], T += $[4])), R.push(Z), typeof Z.originalLine == "number" && z.push(Z);
      }
    o(R, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = R, o(z, n.compareByOriginalPositions), this.__originalMappings = z;
  }, h.prototype._findMapping = function(_, b, y, p, f, S) {
    if (_[y] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + _[y]);
    if (_[p] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + _[p]);
    return r.search(_, b, f, S);
  }, h.prototype.computeColumnSpans = function() {
    for (var _ = 0; _ < this._generatedMappings.length; ++_) {
      var b = this._generatedMappings[_];
      if (_ + 1 < this._generatedMappings.length) {
        var y = this._generatedMappings[_ + 1];
        if (b.generatedLine === y.generatedLine) {
          b.lastGeneratedColumn = y.generatedColumn - 1;
          continue;
        }
      }
      b.lastGeneratedColumn = 1 / 0;
    }
  }, h.prototype.originalPositionFor = function(_) {
    var b = {
      generatedLine: n.getArg(_, "line"),
      generatedColumn: n.getArg(_, "column")
    }, y = this._findMapping(
      b,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      n.compareByGeneratedPositionsDeflated,
      n.getArg(_, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (y >= 0) {
      var p = this._generatedMappings[y];
      if (p.generatedLine === b.generatedLine) {
        var f = n.getArg(p, "source", null);
        f !== null && (f = this._sources.at(f), f = n.computeSourceURL(this.sourceRoot, f, this._sourceMapURL));
        var S = n.getArg(p, "name", null);
        return S !== null && (S = this._names.at(S)), {
          source: f,
          line: n.getArg(p, "originalLine", null),
          column: n.getArg(p, "originalColumn", null),
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
  }, h.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(_) {
      return _ == null;
    }) : !1;
  }, h.prototype.sourceContentFor = function(_, b) {
    if (!this.sourcesContent)
      return null;
    var y = this._findSourceIndex(_);
    if (y >= 0)
      return this.sourcesContent[y];
    var p = _;
    this.sourceRoot != null && (p = n.relative(this.sourceRoot, p));
    var f;
    if (this.sourceRoot != null && (f = n.urlParse(this.sourceRoot))) {
      var S = p.replace(/^file:\/\//, "");
      if (f.scheme == "file" && this._sources.has(S))
        return this.sourcesContent[this._sources.indexOf(S)];
      if ((!f.path || f.path == "/") && this._sources.has("/" + p))
        return this.sourcesContent[this._sources.indexOf("/" + p)];
    }
    if (b)
      return null;
    throw new Error('"' + p + '" is not in the SourceMap.');
  }, h.prototype.generatedPositionFor = function(_) {
    var b = n.getArg(_, "source");
    if (b = this._findSourceIndex(b), b < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var y = {
      source: b,
      originalLine: n.getArg(_, "line"),
      originalColumn: n.getArg(_, "column")
    }, p = this._findMapping(
      y,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      n.getArg(_, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (p >= 0) {
      var f = this._originalMappings[p];
      if (f.source === y.source)
        return {
          line: n.getArg(f, "generatedLine", null),
          column: n.getArg(f, "generatedColumn", null),
          lastColumn: n.getArg(f, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, ws.BasicSourceMapConsumer = h;
  function g(v, _) {
    var b = v;
    typeof v == "string" && (b = n.parseSourceMapInput(v));
    var y = n.getArg(b, "version"), p = n.getArg(b, "sections");
    if (y != this._version)
      throw new Error("Unsupported version: " + y);
    this._sources = new i(), this._names = new i();
    var f = {
      line: -1,
      column: 0
    };
    this._sections = p.map(function(S) {
      if (S.url)
        throw new Error("Support for url field in sections not implemented.");
      var x = n.getArg(S, "offset"), T = n.getArg(x, "line"), w = n.getArg(x, "column");
      if (T < f.line || T === f.line && w < f.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return f = x, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: T + 1,
          generatedColumn: w + 1
        },
        consumer: new c(n.getArg(S, "map"), _)
      };
    });
  }
  return g.prototype = Object.create(c.prototype), g.prototype.constructor = c, g.prototype._version = 3, Object.defineProperty(g.prototype, "sources", {
    get: function() {
      for (var v = [], _ = 0; _ < this._sections.length; _++)
        for (var b = 0; b < this._sections[_].consumer.sources.length; b++)
          v.push(this._sections[_].consumer.sources[b]);
      return v;
    }
  }), g.prototype.originalPositionFor = function(_) {
    var b = {
      generatedLine: n.getArg(_, "line"),
      generatedColumn: n.getArg(_, "column")
    }, y = r.search(
      b,
      this._sections,
      function(f, S) {
        var x = f.generatedLine - S.generatedOffset.generatedLine;
        return x || f.generatedColumn - S.generatedOffset.generatedColumn;
      }
    ), p = this._sections[y];
    return p ? p.consumer.originalPositionFor({
      line: b.generatedLine - (p.generatedOffset.generatedLine - 1),
      column: b.generatedColumn - (p.generatedOffset.generatedLine === b.generatedLine ? p.generatedOffset.generatedColumn - 1 : 0),
      bias: _.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, g.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(_) {
      return _.consumer.hasContentsOfAllSources();
    });
  }, g.prototype.sourceContentFor = function(_, b) {
    for (var y = 0; y < this._sections.length; y++) {
      var p = this._sections[y], f = p.consumer.sourceContentFor(_, !0);
      if (f)
        return f;
    }
    if (b)
      return null;
    throw new Error('"' + _ + '" is not in the SourceMap.');
  }, g.prototype.generatedPositionFor = function(_) {
    for (var b = 0; b < this._sections.length; b++) {
      var y = this._sections[b];
      if (y.consumer._findSourceIndex(n.getArg(_, "source")) !== -1) {
        var p = y.consumer.generatedPositionFor(_);
        if (p) {
          var f = {
            line: p.line + (y.generatedOffset.generatedLine - 1),
            column: p.column + (y.generatedOffset.generatedLine === p.line ? y.generatedOffset.generatedColumn - 1 : 0)
          };
          return f;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, g.prototype._parseMappings = function(_, b) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var y = 0; y < this._sections.length; y++)
      for (var p = this._sections[y], f = p.consumer._generatedMappings, S = 0; S < f.length; S++) {
        var x = f[S], T = p.consumer._sources.at(x.source);
        T = n.computeSourceURL(p.consumer.sourceRoot, T, this._sourceMapURL), this._sources.add(T), T = this._sources.indexOf(T);
        var w = null;
        x.name && (w = p.consumer._names.at(x.name), this._names.add(w), w = this._names.indexOf(w));
        var N = {
          source: T,
          generatedLine: x.generatedLine + (p.generatedOffset.generatedLine - 1),
          generatedColumn: x.generatedColumn + (p.generatedOffset.generatedLine === x.generatedLine ? p.generatedOffset.generatedColumn - 1 : 0),
          originalLine: x.originalLine,
          originalColumn: x.originalColumn,
          name: w
        };
        this.__generatedMappings.push(N), typeof N.originalLine == "number" && this.__originalMappings.push(N);
      }
    o(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), o(this.__originalMappings, n.compareByOriginalPositions);
  }, ws.IndexedSourceMapConsumer = g, ws;
}
var ah = {}, Wv;
function ix() {
  if (Wv) return ah;
  Wv = 1;
  var n = O0().SourceMapGenerator, r = Qs(), i = /(\r?\n)/, s = 10, o = "$$$isSourceNode$$$";
  function c(h, m, g, v, _) {
    this.children = [], this.sourceContents = {}, this.line = h ?? null, this.column = m ?? null, this.source = g ?? null, this.name = _ ?? null, this[o] = !0, v != null && this.add(v);
  }
  return c.fromStringWithSourceMap = function(m, g, v) {
    var _ = new c(), b = m.split(i), y = 0, p = function() {
      var w = C(), N = C() || "";
      return w + N;
      function C() {
        return y < b.length ? b[y++] : void 0;
      }
    }, f = 1, S = 0, x = null;
    return g.eachMapping(function(w) {
      if (x !== null)
        if (f < w.generatedLine)
          T(x, p()), f++, S = 0;
        else {
          var N = b[y] || "", C = N.substr(0, w.generatedColumn - S);
          b[y] = N.substr(w.generatedColumn - S), S = w.generatedColumn, T(x, C), x = w;
          return;
        }
      for (; f < w.generatedLine; )
        _.add(p()), f++;
      if (S < w.generatedColumn) {
        var N = b[y] || "";
        _.add(N.substr(0, w.generatedColumn)), b[y] = N.substr(w.generatedColumn), S = w.generatedColumn;
      }
      x = w;
    }, this), y < b.length && (x && T(x, p()), _.add(b.splice(y).join(""))), g.sources.forEach(function(w) {
      var N = g.sourceContentFor(w);
      N != null && (v != null && (w = r.join(v, w)), _.setSourceContent(w, N));
    }), _;
    function T(w, N) {
      if (w === null || w.source === void 0)
        _.add(N);
      else {
        var C = v ? r.join(v, w.source) : w.source;
        _.add(new c(
          w.originalLine,
          w.originalColumn,
          C,
          N,
          w.name
        ));
      }
    }
  }, c.prototype.add = function(m) {
    if (Array.isArray(m))
      m.forEach(function(g) {
        this.add(g);
      }, this);
    else if (m[o] || typeof m == "string")
      m && this.children.push(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, c.prototype.prepend = function(m) {
    if (Array.isArray(m))
      for (var g = m.length - 1; g >= 0; g--)
        this.prepend(m[g]);
    else if (m[o] || typeof m == "string")
      this.children.unshift(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, c.prototype.walk = function(m) {
    for (var g, v = 0, _ = this.children.length; v < _; v++)
      g = this.children[v], g[o] ? g.walk(m) : g !== "" && m(g, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, c.prototype.join = function(m) {
    var g, v, _ = this.children.length;
    if (_ > 0) {
      for (g = [], v = 0; v < _ - 1; v++)
        g.push(this.children[v]), g.push(m);
      g.push(this.children[v]), this.children = g;
    }
    return this;
  }, c.prototype.replaceRight = function(m, g) {
    var v = this.children[this.children.length - 1];
    return v[o] ? v.replaceRight(m, g) : typeof v == "string" ? this.children[this.children.length - 1] = v.replace(m, g) : this.children.push("".replace(m, g)), this;
  }, c.prototype.setSourceContent = function(m, g) {
    this.sourceContents[r.toSetString(m)] = g;
  }, c.prototype.walkSourceContents = function(m) {
    for (var g = 0, v = this.children.length; g < v; g++)
      this.children[g][o] && this.children[g].walkSourceContents(m);
    for (var _ = Object.keys(this.sourceContents), g = 0, v = _.length; g < v; g++)
      m(r.fromSetString(_[g]), this.sourceContents[_[g]]);
  }, c.prototype.toString = function() {
    var m = "";
    return this.walk(function(g) {
      m += g;
    }), m;
  }, c.prototype.toStringWithSourceMap = function(m) {
    var g = {
      code: "",
      line: 1,
      column: 0
    }, v = new n(m), _ = !1, b = null, y = null, p = null, f = null;
    return this.walk(function(S, x) {
      g.code += S, x.source !== null && x.line !== null && x.column !== null ? ((b !== x.source || y !== x.line || p !== x.column || f !== x.name) && v.addMapping({
        source: x.source,
        original: {
          line: x.line,
          column: x.column
        },
        generated: {
          line: g.line,
          column: g.column
        },
        name: x.name
      }), b = x.source, y = x.line, p = x.column, f = x.name, _ = !0) : _ && (v.addMapping({
        generated: {
          line: g.line,
          column: g.column
        }
      }), b = null, _ = !1);
      for (var T = 0, w = S.length; T < w; T++)
        S.charCodeAt(T) === s ? (g.line++, g.column = 0, T + 1 === w ? (b = null, _ = !1) : _ && v.addMapping({
          source: x.source,
          original: {
            line: x.line,
            column: x.column
          },
          generated: {
            line: g.line,
            column: g.column
          },
          name: x.name
        })) : g.column++;
    }), this.walkSourceContents(function(S, x) {
      v.setSourceContent(S, x);
    }), { code: g.code, map: v };
  }, ah.SourceNode = c, ah;
}
var ey;
function sx() {
  return ey || (ey = 1, Cs.SourceMapGenerator = O0().SourceMapGenerator, Cs.SourceMapConsumer = ax().SourceMapConsumer, Cs.SourceNode = ix().SourceNode), Cs;
}
var ty;
function lx() {
  return ty || (ty = 1, (function(n, r) {
    r.__esModule = !0;
    var i = Vt(), s = void 0;
    try {
      var o = sx();
      s = o.SourceNode;
    } catch {
    }
    s || (s = function(m, g, v, _) {
      this.src = "", _ && this.add(_);
    }, s.prototype = {
      add: function(g) {
        i.isArray(g) && (g = g.join("")), this.src += g;
      },
      prepend: function(g) {
        i.isArray(g) && (g = g.join("")), this.src = g + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function c(m, g, v) {
      if (i.isArray(m)) {
        for (var _ = [], b = 0, y = m.length; b < y; b++)
          _.push(g.wrap(m[b], v));
        return _;
      } else if (typeof m == "boolean" || typeof m == "number")
        return m + "";
      return m;
    }
    function h(m) {
      this.srcFile = m, this.source = [];
    }
    h.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(g, v) {
        this.source.unshift(this.wrap(g, v));
      },
      push: function(g, v) {
        this.source.push(this.wrap(g, v));
      },
      merge: function() {
        var g = this.empty();
        return this.each(function(v) {
          g.add(["  ", v, `
`]);
        }), g;
      },
      each: function(g) {
        for (var v = 0, _ = this.source.length; v < _; v++)
          g(this.source[v]);
      },
      empty: function() {
        var g = this.currentLocation || { start: {} };
        return new s(g.start.line, g.start.column, this.srcFile);
      },
      wrap: function(g) {
        var v = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return g instanceof s ? g : (g = c(g, this, v), new s(v.start.line, v.start.column, this.srcFile, g));
      },
      functionCall: function(g, v, _) {
        return _ = this.generateList(_), this.wrap([g, v ? "." + v + "(" : "(", _, ")"]);
      },
      quotedString: function(g) {
        return '"' + (g + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(g) {
        var v = this, _ = [];
        Object.keys(g).forEach(function(y) {
          var p = c(g[y], v);
          p !== "undefined" && _.push([v.quotedString(y), ":", p]);
        });
        var b = this.generateList(_);
        return b.prepend("{"), b.add("}"), b;
      },
      generateList: function(g) {
        for (var v = this.empty(), _ = 0, b = g.length; _ < b; _++)
          _ && v.add(","), v.add(c(g[_], this));
        return v;
      },
      generateArray: function(g) {
        var v = this.generateList(g);
        return v.prepend("["), v.add("]"), v;
      }
    }, r.default = h, n.exports = r.default;
  })(Io, Io.exports)), Io.exports;
}
var ny;
function ox() {
  return ny || (ny = 1, (function(n, r) {
    r.__esModule = !0;
    function i(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = Uh(), o = Nn(), c = i(o), h = Vt(), m = lx(), g = i(m);
    function v(y) {
      this.value = y;
    }
    function _() {
    }
    _.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(p, f) {
        return this.internalNameLookup(p, f);
      },
      depthedLookup: function(p) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(p), ")"];
      },
      compilerInfo: function() {
        var p = s.COMPILER_REVISION, f = s.REVISION_CHANGES[p];
        return [p, f];
      },
      appendToBuffer: function(p, f, S) {
        return h.isArray(p) || (p = [p]), p = this.source.wrap(p, f), this.environment.isSimple ? ["return ", p, ";"] : S ? ["buffer += ", p, ";"] : (p.appendToBuffer = !0, p);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(p, f) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", p, ",", JSON.stringify(f), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(p, f, S, x) {
        this.environment = p, this.options = f, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !x, this.name = this.environment.name, this.isChild = !!S, this.context = S || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(p, f), this.useDepths = this.useDepths || p.useDepths || p.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || p.useBlockParams;
        var T = p.opcodes, w = void 0, N = void 0, C = void 0, O = void 0;
        for (C = 0, O = T.length; C < O; C++)
          w = T[C], this.source.currentLocation = w.loc, N = N || w.loc, this[w.opcode].apply(this, w.args);
        if (this.source.currentLocation = N, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new c.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), x ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var z = this.createFunctionContext(x);
        if (this.isChild)
          return z;
        var R = {
          compiler: this.compilerInfo(),
          main: z
        };
        this.decorators && (R.main_d = this.decorators, R.useDecorators = !0);
        var Z = this.context, te = Z.programs, $ = Z.decorators;
        for (C = 0, O = te.length; C < O; C++)
          te[C] && (R[C] = te[C], $[C] && (R[C + "_d"] = $[C], R.useDecorators = !0));
        return this.environment.usePartial && (R.usePartial = !0), this.options.data && (R.useData = !0), this.useDepths && (R.useDepths = !0), this.useBlockParams && (R.useBlockParams = !0), this.options.compat && (R.compat = !0), x ? R.compilerOptions = this.options : (R.compiler = JSON.stringify(R.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, R = this.objectLiteral(R), f.srcName ? (R = R.toStringWithSourceMap({ file: f.destName }), R.map = R.map && R.map.toString()) : R = R.toString()), R;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new g.default(this.options.srcName), this.decorators = new g.default(this.options.srcName);
      },
      createFunctionContext: function(p) {
        var f = this, S = "", x = this.stackVars.concat(this.registers.list);
        x.length > 0 && (S += ", " + x.join(", "));
        var T = 0;
        Object.keys(this.aliases).forEach(function(C) {
          var O = f.aliases[C];
          O.children && O.referenceCount > 1 && (S += ", alias" + ++T + "=" + C, O.children[0] = "alias" + T);
        }), this.lookupPropertyFunctionIsUsed && (S += ", " + this.lookupPropertyFunctionVarDeclaration());
        var w = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && w.push("blockParams"), this.useDepths && w.push("depths");
        var N = this.mergeSource(S);
        return p ? (w.push(N), Function.apply(this, w)) : this.source.wrap(["function(", w.join(","), `) {
  `, N, "}"]);
      },
      mergeSource: function(p) {
        var f = this.environment.isSimple, S = !this.forceBuffer, x = void 0, T = void 0, w = void 0, N = void 0;
        return this.source.each(function(C) {
          C.appendToBuffer ? (w ? C.prepend("  + ") : w = C, N = C) : (w && (T ? w.prepend("buffer += ") : x = !0, N.add(";"), w = N = void 0), T = !0, f || (S = !1));
        }), S ? w ? (w.prepend("return "), N.add(";")) : T || this.source.push('return "";') : (p += ", buffer = " + (x ? "" : this.initializeBuffer()), w ? (w.prepend("return buffer + "), N.add(";")) : this.source.push("return buffer;")), p && this.source.prepend("var " + p.substring(2) + (x ? "" : `;
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
      blockValue: function(p) {
        var f = this.aliasable("container.hooks.blockHelperMissing"), S = [this.contextName(0)];
        this.setupHelperArgs(p, 0, S);
        var x = this.popStack();
        S.splice(1, 0, x), this.push(this.source.functionCall(f, "call", S));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var p = this.aliasable("container.hooks.blockHelperMissing"), f = [this.contextName(0)];
        this.setupHelperArgs("", 0, f, !0), this.flushInline();
        var S = this.topStack();
        f.splice(1, 0, S), this.pushSource(["if (!", this.lastHelper, ") { ", S, " = ", this.source.functionCall(p, "call", f), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(p) {
        this.pendingContent ? p = this.pendingContent + p : this.pendingLocation = this.source.currentLocation, this.pendingContent = p;
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
          this.replaceStack(function(f) {
            return [" != null ? ", f, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var p = this.popStack();
          this.pushSource(["if (", p, " != null) { ", this.appendToBuffer(p, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
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
      getContext: function(p) {
        this.lastContext = p;
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
      lookupOnContext: function(p, f, S, x) {
        var T = 0;
        !x && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(p[T++])) : this.pushContext(), this.resolvePath("context", p, T, f, S);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(p, f) {
        this.useBlockParams = !0, this.push(["blockParams[", p[0], "][", p[1], "]"]), this.resolvePath("context", f, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(p, f, S) {
        p ? this.pushStackLiteral("container.data(data, " + p + ")") : this.pushStackLiteral("data"), this.resolvePath("data", f, 0, !0, S);
      },
      resolvePath: function(p, f, S, x, T) {
        var w = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(b(this.options.strict && T, this, f, S, p));
          return;
        }
        for (var N = f.length; S < N; S++)
          this.replaceStack(function(C) {
            var O = w.nameLookup(C, f[S], p);
            return x ? [" && ", O] : [" != null ? ", O, " : ", C];
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
      pushStringParam: function(p, f) {
        this.pushContext(), this.pushString(f), f !== "SubExpression" && (typeof p == "string" ? this.pushString(p) : this.pushStackLiteral(p));
      },
      emptyHash: function(p) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(p ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var p = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(p.ids)), this.stringParams && (this.push(this.objectLiteral(p.contexts)), this.push(this.objectLiteral(p.types))), this.push(this.objectLiteral(p.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(p) {
        this.pushStackLiteral(this.quotedString(p));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(p) {
        this.pushStackLiteral(p);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(p) {
        p != null ? this.pushStackLiteral(this.programExpression(p)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(p, f) {
        var S = this.nameLookup("decorators", f, "decorator"), x = this.setupHelperArgs(f, p);
        this.decorators.push(["fn = ", this.decorators.functionCall(S, "", ["fn", "props", "container", x]), " || fn;"]);
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
      invokeHelper: function(p, f, S) {
        var x = this.popStack(), T = this.setupHelper(p, f), w = [];
        S && w.push(T.name), w.push(x), this.options.strict || w.push(this.aliasable("container.hooks.helperMissing"));
        var N = ["(", this.itemsSeparatedBy(w, "||"), ")"], C = this.source.functionCall(N, "call", T.callParams);
        this.push(C);
      },
      itemsSeparatedBy: function(p, f) {
        var S = [];
        S.push(p[0]);
        for (var x = 1; x < p.length; x++)
          S.push(f, p[x]);
        return S;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(p, f) {
        var S = this.setupHelper(p, f);
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
      invokeAmbiguous: function(p, f) {
        this.useRegister("helper");
        var S = this.popStack();
        this.emptyHash();
        var x = this.setupHelper(0, p, f), T = this.lastHelper = this.nameLookup("helpers", p, "helper"), w = ["(", "(helper = ", T, " || ", S, ")"];
        this.options.strict || (w[0] = "(helper = ", w.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", w, x.paramsInit ? ["),(", x.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", x.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(p, f, S) {
        var x = [], T = this.setupParams(f, 1, x);
        p && (f = this.popStack(), delete T.name), S && (T.indent = JSON.stringify(S)), T.helpers = "helpers", T.partials = "partials", T.decorators = "container.decorators", p ? x.unshift(f) : x.unshift(this.nameLookup("partials", f, "partial")), this.options.compat && (T.depths = "depths"), T = this.objectLiteral(T), x.push(T), this.push(this.source.functionCall("container.invokePartial", "", x));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(p) {
        var f = this.popStack(), S = void 0, x = void 0, T = void 0;
        this.trackIds && (T = this.popStack()), this.stringParams && (x = this.popStack(), S = this.popStack());
        var w = this.hash;
        S && (w.contexts[p] = S), x && (w.types[p] = x), T && (w.ids[p] = T), w.values[p] = f;
      },
      pushId: function(p, f, S) {
        p === "BlockParam" ? this.pushStackLiteral("blockParams[" + f[0] + "].path[" + f[1] + "]" + (S ? " + " + JSON.stringify("." + S) : "")) : p === "PathExpression" ? this.pushString(f) : p === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: _,
      compileChildren: function(p, f) {
        for (var S = p.children, x = void 0, T = void 0, w = 0, N = S.length; w < N; w++) {
          x = S[w], T = new this.compiler();
          var C = this.matchExistingProgram(x);
          if (C == null) {
            this.context.programs.push("");
            var O = this.context.programs.length;
            x.index = O, x.name = "program" + O, this.context.programs[O] = T.compile(x, f, this.context, !this.precompile), this.context.decorators[O] = T.decorators, this.context.environments[O] = x, this.useDepths = this.useDepths || T.useDepths, this.useBlockParams = this.useBlockParams || T.useBlockParams, x.useDepths = this.useDepths, x.useBlockParams = this.useBlockParams;
          } else
            x.index = C.index, x.name = "program" + C.index, this.useDepths = this.useDepths || C.useDepths, this.useBlockParams = this.useBlockParams || C.useBlockParams;
        }
      },
      matchExistingProgram: function(p) {
        for (var f = 0, S = this.context.environments.length; f < S; f++) {
          var x = this.context.environments[f];
          if (x && x.equals(p))
            return x;
        }
      },
      programExpression: function(p) {
        var f = this.environment.children[p], S = [f.index, "data", f.blockParams];
        return (this.useBlockParams || this.useDepths) && S.push("blockParams"), this.useDepths && S.push("depths"), "container.program(" + S.join(", ") + ")";
      },
      useRegister: function(p) {
        this.registers[p] || (this.registers[p] = !0, this.registers.list.push(p));
      },
      push: function(p) {
        return p instanceof v || (p = this.source.wrap(p)), this.inlineStack.push(p), p;
      },
      pushStackLiteral: function(p) {
        this.push(new v(p));
      },
      pushSource: function(p) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), p && this.source.push(p);
      },
      replaceStack: function(p) {
        var f = ["("], S = void 0, x = void 0, T = void 0;
        if (!this.isInline())
          throw new c.default("replaceStack on non-inline");
        var w = this.popStack(!0);
        if (w instanceof v)
          S = [w.value], f = ["(", S], T = !0;
        else {
          x = !0;
          var N = this.incrStack();
          f = ["((", this.push(N), " = ", w, ")"], S = this.topStack();
        }
        var C = p.call(this, S);
        T || this.popStack(), x && this.stackSlot--, this.push(f.concat(C, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var p = this.inlineStack;
        this.inlineStack = [];
        for (var f = 0, S = p.length; f < S; f++) {
          var x = p[f];
          if (x instanceof v)
            this.compileStack.push(x);
          else {
            var T = this.incrStack();
            this.pushSource([T, " = ", x, ";"]), this.compileStack.push(T);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(p) {
        var f = this.isInline(), S = (f ? this.inlineStack : this.compileStack).pop();
        if (!p && S instanceof v)
          return S.value;
        if (!f) {
          if (!this.stackSlot)
            throw new c.default("Invalid stack pop");
          this.stackSlot--;
        }
        return S;
      },
      topStack: function() {
        var p = this.isInline() ? this.inlineStack : this.compileStack, f = p[p.length - 1];
        return f instanceof v ? f.value : f;
      },
      contextName: function(p) {
        return this.useDepths && p ? "depths[" + p + "]" : "depth" + p;
      },
      quotedString: function(p) {
        return this.source.quotedString(p);
      },
      objectLiteral: function(p) {
        return this.source.objectLiteral(p);
      },
      aliasable: function(p) {
        var f = this.aliases[p];
        return f ? (f.referenceCount++, f) : (f = this.aliases[p] = this.source.wrap(p), f.aliasable = !0, f.referenceCount = 1, f);
      },
      setupHelper: function(p, f, S) {
        var x = [], T = this.setupHelperArgs(f, p, x, S), w = this.nameLookup("helpers", f, "helper"), N = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: x,
          paramsInit: T,
          name: w,
          callParams: [N].concat(x)
        };
      },
      setupParams: function(p, f, S) {
        var x = {}, T = [], w = [], N = [], C = !S, O = void 0;
        C && (S = []), x.name = this.quotedString(p), x.hash = this.popStack(), this.trackIds && (x.hashIds = this.popStack()), this.stringParams && (x.hashTypes = this.popStack(), x.hashContexts = this.popStack());
        var z = this.popStack(), R = this.popStack();
        (R || z) && (x.fn = R || "container.noop", x.inverse = z || "container.noop");
        for (var Z = f; Z--; )
          O = this.popStack(), S[Z] = O, this.trackIds && (N[Z] = this.popStack()), this.stringParams && (w[Z] = this.popStack(), T[Z] = this.popStack());
        return C && (x.args = this.source.generateArray(S)), this.trackIds && (x.ids = this.source.generateArray(N)), this.stringParams && (x.types = this.source.generateArray(w), x.contexts = this.source.generateArray(T)), this.options.data && (x.data = "data"), this.useBlockParams && (x.blockParams = "blockParams"), x;
      },
      setupHelperArgs: function(p, f, S, x) {
        var T = this.setupParams(p, f, S);
        return T.loc = JSON.stringify(this.source.currentLocation), T = this.objectLiteral(T), x ? (this.useRegister("options"), S.push("options"), ["options=", T]) : S ? (S.push(T), "") : T;
      }
    }, (function() {
      for (var y = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), p = _.RESERVED_WORDS = {}, f = 0, S = y.length; f < S; f++)
        p[y[f]] = !0;
    })(), _.isValidJavaScriptVariableName = function(y) {
      return !_.RESERVED_WORDS[y] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(y);
    };
    function b(y, p, f, S, x) {
      var T = p.popStack(), w = f.length;
      for (y && w--; S < w; S++)
        T = p.nameLookup(T, f[S], x);
      return y ? [p.aliasable("container.strict"), "(", T, ", ", p.quotedString(f[S]), ", ", JSON.stringify(p.source.currentLocation), " )"] : T;
    }
    r.default = _, n.exports = r.default;
  })(Po, Po.exports)), Po.exports;
}
var ry;
function ux() {
  return ry || (ry = 1, (function(n, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var s = XS(), o = i(s), c = w0(), h = i(c), m = JS(), g = WS(), v = ox(), _ = i(v), b = A0(), y = i(b), p = C0(), f = i(p), S = o.default.create;
    function x() {
      var w = S();
      return w.compile = function(N, C) {
        return g.compile(N, C, w);
      }, w.precompile = function(N, C) {
        return g.precompile(N, C, w);
      }, w.AST = h.default, w.Compiler = g.Compiler, w.JavaScriptCompiler = _.default, w.Parser = m.parser, w.parse = m.parse, w.parseWithoutProcessing = m.parseWithoutProcessing, w;
    }
    var T = x();
    T.create = x, f.default(T), T.Visitor = y.default, T.default = T, r.default = T, n.exports = r.default;
  })(yo, yo.exports)), yo.exports;
}
var bi = ux();
function Ei(n, r) {
  bi.helpers[n] || bi.registerHelper(n, r);
}
Ei("add", (n, r) => Number(n) + Number(r));
Ei("join", (n, r) => Array.isArray(n) ? n.join(typeof r == "string" ? r : ", ") : "");
Ei("is_not_empty", function(n, r) {
  return n ? Array.isArray(n) ? n.length > 0 ? r.fn(this) : r.inverse(this) : typeof n == "object" && Object.keys(n).length > 0 ? r.fn(this) : typeof n != "object" && !Array.isArray(n) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
Ei("indent", (n, r) => {
  const i = " ".repeat(Math.max(0, Number(n) || 0));
  return String(r ?? "").split(`
`).join(`
${i}`);
});
Ei("json", (n) => JSON.stringify(n));
Ei(
  "xmlEscape",
  (n) => String(n ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
);
const cx = "﷐", N0 = "﷑", fx = "﷒", ay = "[[[crec_veryUniqueUserPlaceHolder]]]", iy = "[[[crec_veryUniqueCharPlaceHolder]]]";
function sy(n) {
  return n.replace(
    /\{\{|\}\}|[\uFDD0-\uFDD2]/g,
    (r) => r === "{{" ? N0 : r === "}}" ? fx : cx + r
  );
}
function hx(n) {
  return n.replace(
    /\uFDD0([\uFDD0-\uFDD2])|[\uFDD1\uFDD2]/g,
    (r, i) => i || (r === N0 ? "{{" : "}}")
  );
}
function vt(n) {
  return typeof n == "string" ? sy(n) : Array.isArray(n) ? n.map((r) => vt(r)) : n && typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r, i]) => [sy(r), vt(i)])) : n;
}
function Zs(n, r, i) {
  let s = bi.compile(n, { noEscape: !0 })(r);
  return s = s.replaceAll("{{user}}", ay), s = s.replaceAll("{{char}}", iy), s = i(s), s = s.replaceAll(ay, "{{user}}"), s = s.replaceAll(iy, "{{char}}"), hx(s);
}
function W(n, r, i) {
  function s(m, g) {
    var v;
    Object.defineProperty(m, "_zod", {
      value: m._zod ?? {},
      enumerable: !1
    }), (v = m._zod).traits ?? (v.traits = /* @__PURE__ */ new Set()), m._zod.traits.add(n), r(m, g);
    for (const _ in h.prototype)
      _ in m || Object.defineProperty(m, _, { value: h.prototype[_].bind(m) });
    m._zod.constr = h, m._zod.def = g;
  }
  const o = i?.Parent ?? Object;
  class c extends o {
  }
  Object.defineProperty(c, "name", { value: n });
  function h(m) {
    var g;
    const v = i?.Parent ? new c() : this;
    s(v, m), (g = v._zod).deferred ?? (g.deferred = []);
    for (const _ of v._zod.deferred)
      _();
    return v;
  }
  return Object.defineProperty(h, "init", { value: s }), Object.defineProperty(h, Symbol.hasInstance, {
    value: (m) => i?.Parent && m instanceof i.Parent ? !0 : m?._zod?.traits?.has(n)
  }), Object.defineProperty(h, "name", { value: n }), h;
}
class vi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class M0 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const k0 = {};
function va(n) {
  return k0;
}
function R0(n) {
  const r = Object.values(n).filter((s) => typeof s == "number");
  return Object.entries(n).filter(([s, o]) => r.indexOf(+s) === -1).map(([s, o]) => o);
}
function Sh(n, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function Ph(n) {
  return {
    get value() {
      {
        const r = n();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function Ih(n) {
  return n == null;
}
function Hh(n) {
  const r = n.startsWith("^") ? 1 : 0, i = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(r, i);
}
function dx(n, r) {
  const i = (n.toString().split(".")[1] || "").length, s = r.toString();
  let o = (s.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(s)) {
    const g = s.match(/\d?e-(\d?)/);
    g?.[1] && (o = Number.parseInt(g[1]));
  }
  const c = i > o ? i : o, h = Number.parseInt(n.toFixed(c).replace(".", "")), m = Number.parseInt(r.toFixed(c).replace(".", ""));
  return h % m / 10 ** c;
}
const ly = Symbol("evaluating");
function We(n, r, i) {
  let s;
  Object.defineProperty(n, r, {
    get() {
      if (s !== ly)
        return s === void 0 && (s = ly, s = i()), s;
    },
    set(o) {
      Object.defineProperty(n, r, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function _a(n, r, i) {
  Object.defineProperty(n, r, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function ba(...n) {
  const r = {};
  for (const i of n) {
    const s = Object.getOwnPropertyDescriptors(i);
    Object.assign(r, s);
  }
  return Object.defineProperties({}, r);
}
function oy(n) {
  return JSON.stringify(n);
}
const j0 = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function cu(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const px = Ph(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function Gs(n) {
  if (cu(n) === !1)
    return !1;
  const r = n.constructor;
  if (r === void 0)
    return !0;
  const i = r.prototype;
  return !(cu(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function z0(n) {
  return Gs(n) ? { ...n } : Array.isArray(n) ? [...n] : n;
}
const mx = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function yu(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Zr(n, r, i) {
  const s = new n._zod.constr(r ?? n._zod.def);
  return (!r || i?.parent) && (s._zod.parent = n), s;
}
function ge(n) {
  const r = n;
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
function gx(n) {
  return Object.keys(n).filter((r) => n[r]._zod.optin === "optional" && n[r]._zod.optout === "optional");
}
const vx = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function yx(n, r) {
  const i = n._zod.def, s = ba(n._zod.def, {
    get shape() {
      const o = {};
      for (const c in r) {
        if (!(c in i.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && (o[c] = i.shape[c]);
      }
      return _a(this, "shape", o), o;
    },
    checks: []
  });
  return Zr(n, s);
}
function _x(n, r) {
  const i = n._zod.def, s = ba(n._zod.def, {
    get shape() {
      const o = { ...n._zod.def.shape };
      for (const c in r) {
        if (!(c in i.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && delete o[c];
      }
      return _a(this, "shape", o), o;
    },
    checks: []
  });
  return Zr(n, s);
}
function bx(n, r) {
  if (!Gs(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = n._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = ba(n._zod.def, {
    get shape() {
      const c = { ...n._zod.def.shape, ...r };
      return _a(this, "shape", c), c;
    },
    checks: []
  });
  return Zr(n, o);
}
function Sx(n, r) {
  if (!Gs(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...n._zod.def,
    get shape() {
      const s = { ...n._zod.def.shape, ...r };
      return _a(this, "shape", s), s;
    },
    checks: n._zod.def.checks
  };
  return Zr(n, i);
}
function xx(n, r) {
  const i = ba(n._zod.def, {
    get shape() {
      const s = { ...n._zod.def.shape, ...r._zod.def.shape };
      return _a(this, "shape", s), s;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Zr(n, i);
}
function Ex(n, r, i) {
  const s = ba(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, c = { ...o };
      if (i)
        for (const h in i) {
          if (!(h in o))
            throw new Error(`Unrecognized key: "${h}"`);
          i[h] && (c[h] = n ? new n({
            type: "optional",
            innerType: o[h]
          }) : o[h]);
        }
      else
        for (const h in o)
          c[h] = n ? new n({
            type: "optional",
            innerType: o[h]
          }) : o[h];
      return _a(this, "shape", c), c;
    },
    checks: []
  });
  return Zr(r, s);
}
function Cx(n, r, i) {
  const s = ba(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, c = { ...o };
      if (i)
        for (const h in i) {
          if (!(h in c))
            throw new Error(`Unrecognized key: "${h}"`);
          i[h] && (c[h] = new n({
            type: "nonoptional",
            innerType: o[h]
          }));
        }
      else
        for (const h in o)
          c[h] = new n({
            type: "nonoptional",
            innerType: o[h]
          });
      return _a(this, "shape", c), c;
    },
    checks: []
  });
  return Zr(r, s);
}
function mi(n, r = 0) {
  if (n.aborted === !0)
    return !0;
  for (let i = r; i < n.issues.length; i++)
    if (n.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function L0(n, r) {
  return r.map((i) => {
    var s;
    return (s = i).path ?? (s.path = []), i.path.unshift(n), i;
  });
}
function Zo(n) {
  return typeof n == "string" ? n : n?.message;
}
function ya(n, r, i) {
  const s = { ...n, path: n.path ?? [] };
  if (!n.message) {
    const o = Zo(n.inst?._zod.def?.error?.(n)) ?? Zo(r?.error?.(n)) ?? Zo(i.customError?.(n)) ?? Zo(i.localeError?.(n)) ?? "Invalid input";
    s.message = o;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function qh(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function Fs(...n) {
  const [r, i, s] = n;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: i,
    inst: s
  } : { ...r };
}
const B0 = (n, r) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: r,
    enumerable: !1
  }), n.message = JSON.stringify(r, Sh, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, U0 = W("$ZodError", B0), P0 = W("$ZodError", B0, { Parent: Error });
function wx(n, r = (i) => i.message) {
  const i = {}, s = [];
  for (const o of n.issues)
    o.path.length > 0 ? (i[o.path[0]] = i[o.path[0]] || [], i[o.path[0]].push(r(o))) : s.push(r(o));
  return { formErrors: s, fieldErrors: i };
}
function Ax(n, r = (i) => i.message) {
  const i = { _errors: [] }, s = (o) => {
    for (const c of o.issues)
      if (c.code === "invalid_union" && c.errors.length)
        c.errors.map((h) => s({ issues: h }));
      else if (c.code === "invalid_key")
        s({ issues: c.issues });
      else if (c.code === "invalid_element")
        s({ issues: c.issues });
      else if (c.path.length === 0)
        i._errors.push(r(c));
      else {
        let h = i, m = 0;
        for (; m < c.path.length; ) {
          const g = c.path[m];
          m === c.path.length - 1 ? (h[g] = h[g] || { _errors: [] }, h[g]._errors.push(r(c))) : h[g] = h[g] || { _errors: [] }, h = h[g], m++;
        }
      }
  };
  return s(n), i;
}
const Zh = (n) => (r, i, s, o) => {
  const c = s ? Object.assign(s, { async: !1 }) : { async: !1 }, h = r._zod.run({ value: i, issues: [] }, c);
  if (h instanceof Promise)
    throw new vi();
  if (h.issues.length) {
    const m = new (o?.Err ?? n)(h.issues.map((g) => ya(g, c, va())));
    throw j0(m, o?.callee), m;
  }
  return h.value;
}, Gh = (n) => async (r, i, s, o) => {
  const c = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let h = r._zod.run({ value: i, issues: [] }, c);
  if (h instanceof Promise && (h = await h), h.issues.length) {
    const m = new (o?.Err ?? n)(h.issues.map((g) => ya(g, c, va())));
    throw j0(m, o?.callee), m;
  }
  return h.value;
}, _u = (n) => (r, i, s) => {
  const o = s ? { ...s, async: !1 } : { async: !1 }, c = r._zod.run({ value: i, issues: [] }, o);
  if (c instanceof Promise)
    throw new vi();
  return c.issues.length ? {
    success: !1,
    error: new (n ?? U0)(c.issues.map((h) => ya(h, o, va())))
  } : { success: !0, data: c.value };
}, Tx = /* @__PURE__ */ _u(P0), bu = (n) => async (r, i, s) => {
  const o = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let c = r._zod.run({ value: i, issues: [] }, o);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new n(c.issues.map((h) => ya(h, o, va())))
  } : { success: !0, data: c.value };
}, Dx = /* @__PURE__ */ bu(P0), Ox = (n) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Zh(n)(r, i, o);
}, Nx = (n) => (r, i, s) => Zh(n)(r, i, s), Mx = (n) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Gh(n)(r, i, o);
}, kx = (n) => async (r, i, s) => Gh(n)(r, i, s), Rx = (n) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return _u(n)(r, i, o);
}, jx = (n) => (r, i, s) => _u(n)(r, i, s), zx = (n) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return bu(n)(r, i, o);
}, Lx = (n) => async (r, i, s) => bu(n)(r, i, s), Bx = /^[cC][^\s-]{8,}$/, Ux = /^[0-9a-z]+$/, Px = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Ix = /^[0-9a-vA-V]{20}$/, Hx = /^[A-Za-z0-9]{27}$/, qx = /^[a-zA-Z0-9_-]{21}$/, Zx = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Gx = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, uy = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Fx = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Vx = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Yx() {
  return new RegExp(Vx, "u");
}
const Xx = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Qx = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, $x = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Kx = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Jx = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, I0 = /^[A-Za-z0-9_-]*$/, Wx = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, eE = /^\+(?:[0-9]){6,14}[0-9]$/, H0 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", tE = /* @__PURE__ */ new RegExp(`^${H0}$`);
function q0(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function nE(n) {
  return new RegExp(`^${q0(n)}$`);
}
function rE(n) {
  const r = q0({ precision: n.precision }), i = ["Z"];
  n.local && i.push(""), n.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${H0}T(?:${s})$`);
}
const aE = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, iE = /^-?\d+$/, sE = /^-?\d+(?:\.\d+)?/, lE = /^[^A-Z]*$/, oE = /^[^a-z]*$/, Yt = /* @__PURE__ */ W("$ZodCheck", (n, r) => {
  var i;
  n._zod ?? (n._zod = {}), n._zod.def = r, (i = n._zod).onattach ?? (i.onattach = []);
}), Z0 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, G0 = /* @__PURE__ */ W("$ZodCheckLessThan", (n, r) => {
  Yt.init(n, r);
  const i = Z0[typeof r.value];
  n._zod.onattach.push((s) => {
    const o = s._zod.bag, c = (r.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < c && (r.inclusive ? o.maximum = r.value : o.exclusiveMaximum = r.value);
  }), n._zod.check = (s) => {
    (r.inclusive ? s.value <= r.value : s.value < r.value) || s.issues.push({
      origin: i,
      code: "too_big",
      maximum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: n,
      continue: !r.abort
    });
  };
}), F0 = /* @__PURE__ */ W("$ZodCheckGreaterThan", (n, r) => {
  Yt.init(n, r);
  const i = Z0[typeof r.value];
  n._zod.onattach.push((s) => {
    const o = s._zod.bag, c = (r.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > c && (r.inclusive ? o.minimum = r.value : o.exclusiveMinimum = r.value);
  }), n._zod.check = (s) => {
    (r.inclusive ? s.value >= r.value : s.value > r.value) || s.issues.push({
      origin: i,
      code: "too_small",
      minimum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: n,
      continue: !r.abort
    });
  };
}), uE = /* @__PURE__ */ W("$ZodCheckMultipleOf", (n, r) => {
  Yt.init(n, r), n._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), n._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : dx(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), cE = /* @__PURE__ */ W("$ZodCheckNumberFormat", (n, r) => {
  Yt.init(n, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), s = i ? "int" : "number", [o, c] = vx[r.format];
  n._zod.onattach.push((h) => {
    const m = h._zod.bag;
    m.format = r.format, m.minimum = o, m.maximum = c, i && (m.pattern = iE);
  }), n._zod.check = (h) => {
    const m = h.value;
    if (i) {
      if (!Number.isInteger(m)) {
        h.issues.push({
          expected: s,
          format: r.format,
          code: "invalid_type",
          continue: !1,
          input: m,
          inst: n
        });
        return;
      }
      if (!Number.isSafeInteger(m)) {
        m > 0 ? h.issues.push({
          input: m,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: s,
          continue: !r.abort
        }) : h.issues.push({
          input: m,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: s,
          continue: !r.abort
        });
        return;
      }
    }
    m < o && h.issues.push({
      origin: "number",
      input: m,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: n,
      continue: !r.abort
    }), m > c && h.issues.push({
      origin: "number",
      input: m,
      code: "too_big",
      maximum: c,
      inst: n
    });
  };
}), fE = /* @__PURE__ */ W("$ZodCheckMaxLength", (n, r) => {
  var i;
  Yt.init(n, r), (i = n._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !Ih(o) && o.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const o = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < o && (s._zod.bag.maximum = r.maximum);
  }), n._zod.check = (s) => {
    const o = s.value;
    if (o.length <= r.maximum)
      return;
    const h = qh(o);
    s.issues.push({
      origin: h,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: o,
      inst: n,
      continue: !r.abort
    });
  };
}), hE = /* @__PURE__ */ W("$ZodCheckMinLength", (n, r) => {
  var i;
  Yt.init(n, r), (i = n._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !Ih(o) && o.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const o = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > o && (s._zod.bag.minimum = r.minimum);
  }), n._zod.check = (s) => {
    const o = s.value;
    if (o.length >= r.minimum)
      return;
    const h = qh(o);
    s.issues.push({
      origin: h,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: o,
      inst: n,
      continue: !r.abort
    });
  };
}), dE = /* @__PURE__ */ W("$ZodCheckLengthEquals", (n, r) => {
  var i;
  Yt.init(n, r), (i = n._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !Ih(o) && o.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.minimum = r.length, o.maximum = r.length, o.length = r.length;
  }), n._zod.check = (s) => {
    const o = s.value, c = o.length;
    if (c === r.length)
      return;
    const h = qh(o), m = c > r.length;
    s.issues.push({
      origin: h,
      ...m ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Su = /* @__PURE__ */ W("$ZodCheckStringFormat", (n, r) => {
  var i, s;
  Yt.init(n, r), n._zod.onattach.push((o) => {
    const c = o._zod.bag;
    c.format = r.format, r.pattern && (c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(r.pattern));
  }), r.pattern ? (i = n._zod).check ?? (i.check = (o) => {
    r.pattern.lastIndex = 0, !r.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: o.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: n,
      continue: !r.abort
    });
  }) : (s = n._zod).check ?? (s.check = () => {
  });
}), pE = /* @__PURE__ */ W("$ZodCheckRegex", (n, r) => {
  Su.init(n, r), n._zod.check = (i) => {
    r.pattern.lastIndex = 0, !r.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: i.value,
      pattern: r.pattern.toString(),
      inst: n,
      continue: !r.abort
    });
  };
}), mE = /* @__PURE__ */ W("$ZodCheckLowerCase", (n, r) => {
  r.pattern ?? (r.pattern = lE), Su.init(n, r);
}), gE = /* @__PURE__ */ W("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = oE), Su.init(n, r);
}), vE = /* @__PURE__ */ W("$ZodCheckIncludes", (n, r) => {
  Yt.init(n, r);
  const i = yu(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${i}` : i);
  r.pattern = s, n._zod.onattach.push((o) => {
    const c = o._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(s);
  }), n._zod.check = (o) => {
    o.value.includes(r.includes, r.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: o.value,
      inst: n,
      continue: !r.abort
    });
  };
}), yE = /* @__PURE__ */ W("$ZodCheckStartsWith", (n, r) => {
  Yt.init(n, r);
  const i = new RegExp(`^${yu(r.prefix)}.*`);
  r.pattern ?? (r.pattern = i), n._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(i);
  }), n._zod.check = (s) => {
    s.value.startsWith(r.prefix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), _E = /* @__PURE__ */ W("$ZodCheckEndsWith", (n, r) => {
  Yt.init(n, r);
  const i = new RegExp(`.*${yu(r.suffix)}$`);
  r.pattern ?? (r.pattern = i), n._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(i);
  }), n._zod.check = (s) => {
    s.value.endsWith(r.suffix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), bE = /* @__PURE__ */ W("$ZodCheckOverwrite", (n, r) => {
  Yt.init(n, r), n._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class SE {
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
`).filter((h) => h), o = Math.min(...s.map((h) => h.length - h.trimStart().length)), c = s.map((h) => h.slice(o)).map((h) => " ".repeat(this.indent * 2) + h);
    for (const h of c)
      this.content.push(h);
  }
  compile() {
    const r = Function, i = this?.args, o = [...(this?.content ?? [""]).map((c) => `  ${c}`)];
    return new r(...i, o.join(`
`));
  }
}
const xE = {
  major: 4,
  minor: 1,
  patch: 12
}, yt = /* @__PURE__ */ W("$ZodType", (n, r) => {
  var i;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = xE;
  const s = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && s.unshift(n);
  for (const o of s)
    for (const c of o._zod.onattach)
      c(n);
  if (s.length === 0)
    (i = n._zod).deferred ?? (i.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const o = (h, m, g) => {
      let v = mi(h), _;
      for (const b of m) {
        if (b._zod.def.when) {
          if (!b._zod.def.when(h))
            continue;
        } else if (v)
          continue;
        const y = h.issues.length, p = b._zod.check(h);
        if (p instanceof Promise && g?.async === !1)
          throw new vi();
        if (_ || p instanceof Promise)
          _ = (_ ?? Promise.resolve()).then(async () => {
            await p, h.issues.length !== y && (v || (v = mi(h, y)));
          });
        else {
          if (h.issues.length === y)
            continue;
          v || (v = mi(h, y));
        }
      }
      return _ ? _.then(() => h) : h;
    }, c = (h, m, g) => {
      if (mi(h))
        return h.aborted = !0, h;
      const v = o(m, s, g);
      if (v instanceof Promise) {
        if (g.async === !1)
          throw new vi();
        return v.then((_) => n._zod.parse(_, g));
      }
      return n._zod.parse(v, g);
    };
    n._zod.run = (h, m) => {
      if (m.skipChecks)
        return n._zod.parse(h, m);
      if (m.direction === "backward") {
        const v = n._zod.parse({ value: h.value, issues: [] }, { ...m, skipChecks: !0 });
        return v instanceof Promise ? v.then((_) => c(_, h, m)) : c(v, h, m);
      }
      const g = n._zod.parse(h, m);
      if (g instanceof Promise) {
        if (m.async === !1)
          throw new vi();
        return g.then((v) => o(v, s, m));
      }
      return o(g, s, m);
    };
  }
  n["~standard"] = {
    validate: (o) => {
      try {
        const c = Tx(n, o);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return Dx(n, o).then((h) => h.success ? { value: h.data } : { issues: h.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Fh = /* @__PURE__ */ W("$ZodString", (n, r) => {
  yt.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? aE(n._zod.bag), n._zod.parse = (i, s) => {
    if (r.coerce)
      try {
        i.value = String(i.value);
      } catch {
      }
    return typeof i.value == "string" || i.issues.push({
      expected: "string",
      code: "invalid_type",
      input: i.value,
      inst: n
    }), i;
  };
}), nt = /* @__PURE__ */ W("$ZodStringFormat", (n, r) => {
  Su.init(n, r), Fh.init(n, r);
}), EE = /* @__PURE__ */ W("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = Gx), nt.init(n, r);
}), CE = /* @__PURE__ */ W("$ZodUUID", (n, r) => {
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
    r.pattern ?? (r.pattern = uy(s));
  } else
    r.pattern ?? (r.pattern = uy());
  nt.init(n, r);
}), wE = /* @__PURE__ */ W("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = Fx), nt.init(n, r);
}), AE = /* @__PURE__ */ W("$ZodURL", (n, r) => {
  nt.init(n, r), n._zod.check = (i) => {
    try {
      const s = i.value.trim(), o = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(o.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Wx.source,
        input: i.value,
        inst: n,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: i.value,
        inst: n,
        continue: !r.abort
      })), r.normalize ? i.value = o.href : i.value = s;
      return;
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "url",
        input: i.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
}), TE = /* @__PURE__ */ W("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = Yx()), nt.init(n, r);
}), DE = /* @__PURE__ */ W("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = qx), nt.init(n, r);
}), OE = /* @__PURE__ */ W("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = Bx), nt.init(n, r);
}), NE = /* @__PURE__ */ W("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = Ux), nt.init(n, r);
}), ME = /* @__PURE__ */ W("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = Px), nt.init(n, r);
}), kE = /* @__PURE__ */ W("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = Ix), nt.init(n, r);
}), RE = /* @__PURE__ */ W("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = Hx), nt.init(n, r);
}), jE = /* @__PURE__ */ W("$ZodISODateTime", (n, r) => {
  r.pattern ?? (r.pattern = rE(r)), nt.init(n, r);
}), zE = /* @__PURE__ */ W("$ZodISODate", (n, r) => {
  r.pattern ?? (r.pattern = tE), nt.init(n, r);
}), LE = /* @__PURE__ */ W("$ZodISOTime", (n, r) => {
  r.pattern ?? (r.pattern = nE(r)), nt.init(n, r);
}), BE = /* @__PURE__ */ W("$ZodISODuration", (n, r) => {
  r.pattern ?? (r.pattern = Zx), nt.init(n, r);
}), UE = /* @__PURE__ */ W("$ZodIPv4", (n, r) => {
  r.pattern ?? (r.pattern = Xx), nt.init(n, r), n._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), PE = /* @__PURE__ */ W("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = Qx), nt.init(n, r), n._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv6";
  }), n._zod.check = (i) => {
    try {
      new URL(`http://[${i.value}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: i.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
}), IE = /* @__PURE__ */ W("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = $x), nt.init(n, r);
}), HE = /* @__PURE__ */ W("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = Kx), nt.init(n, r), n._zod.check = (i) => {
    const s = i.value.split("/");
    try {
      if (s.length !== 2)
        throw new Error();
      const [o, c] = s;
      if (!c)
        throw new Error();
      const h = Number(c);
      if (`${h}` !== c)
        throw new Error();
      if (h < 0 || h > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: i.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
});
function V0(n) {
  if (n === "")
    return !0;
  if (n.length % 4 !== 0)
    return !1;
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}
const qE = /* @__PURE__ */ W("$ZodBase64", (n, r) => {
  r.pattern ?? (r.pattern = Jx), nt.init(n, r), n._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), n._zod.check = (i) => {
    V0(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
});
function ZE(n) {
  if (!I0.test(n))
    return !1;
  const r = n.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return V0(i);
}
const GE = /* @__PURE__ */ W("$ZodBase64URL", (n, r) => {
  r.pattern ?? (r.pattern = I0), nt.init(n, r), n._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (i) => {
    ZE(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), FE = /* @__PURE__ */ W("$ZodE164", (n, r) => {
  r.pattern ?? (r.pattern = eE), nt.init(n, r);
});
function VE(n, r = null) {
  try {
    const i = n.split(".");
    if (i.length !== 3)
      return !1;
    const [s] = i;
    if (!s)
      return !1;
    const o = JSON.parse(atob(s));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || r && (!("alg" in o) || o.alg !== r));
  } catch {
    return !1;
  }
}
const YE = /* @__PURE__ */ W("$ZodJWT", (n, r) => {
  nt.init(n, r), n._zod.check = (i) => {
    VE(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Y0 = /* @__PURE__ */ W("$ZodNumber", (n, r) => {
  yt.init(n, r), n._zod.pattern = n._zod.bag.pattern ?? sE, n._zod.parse = (i, s) => {
    if (r.coerce)
      try {
        i.value = Number(i.value);
      } catch {
      }
    const o = i.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return i;
    const c = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return i.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: n,
      ...c ? { received: c } : {}
    }), i;
  };
}), XE = /* @__PURE__ */ W("$ZodNumber", (n, r) => {
  cE.init(n, r), Y0.init(n, r);
}), QE = /* @__PURE__ */ W("$ZodUnknown", (n, r) => {
  yt.init(n, r), n._zod.parse = (i) => i;
}), $E = /* @__PURE__ */ W("$ZodNever", (n, r) => {
  yt.init(n, r), n._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: n
  }), i);
});
function cy(n, r, i) {
  n.issues.length && r.issues.push(...L0(i, n.issues)), r.value[i] = n.value;
}
const KE = /* @__PURE__ */ W("$ZodArray", (n, r) => {
  yt.init(n, r), n._zod.parse = (i, s) => {
    const o = i.value;
    if (!Array.isArray(o))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: n
      }), i;
    i.value = Array(o.length);
    const c = [];
    for (let h = 0; h < o.length; h++) {
      const m = o[h], g = r.element._zod.run({
        value: m,
        issues: []
      }, s);
      g instanceof Promise ? c.push(g.then((v) => cy(v, i, h))) : cy(g, i, h);
    }
    return c.length ? Promise.all(c).then(() => i) : i;
  };
});
function fu(n, r, i, s) {
  n.issues.length && r.issues.push(...L0(i, n.issues)), n.value === void 0 ? i in s && (r.value[i] = void 0) : r.value[i] = n.value;
}
function X0(n) {
  const r = Object.keys(n.shape);
  for (const s of r)
    if (!n.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = gx(n.shape);
  return {
    ...n,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function Q0(n, r, i, s, o, c) {
  const h = [], m = o.keySet, g = o.catchall._zod, v = g.def.type;
  for (const _ of Object.keys(r)) {
    if (m.has(_))
      continue;
    if (v === "never") {
      h.push(_);
      continue;
    }
    const b = g.run({ value: r[_], issues: [] }, s);
    b instanceof Promise ? n.push(b.then((y) => fu(y, i, _, r))) : fu(b, i, _, r);
  }
  return h.length && i.issues.push({
    code: "unrecognized_keys",
    keys: h,
    input: r,
    inst: c
  }), n.length ? Promise.all(n).then(() => i) : i;
}
const JE = /* @__PURE__ */ W("$ZodObject", (n, r) => {
  if (yt.init(n, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const m = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const g = { ...m };
        return Object.defineProperty(r, "shape", {
          value: g
        }), g;
      }
    });
  }
  const s = Ph(() => X0(r));
  We(n._zod, "propValues", () => {
    const m = r.shape, g = {};
    for (const v in m) {
      const _ = m[v]._zod;
      if (_.values) {
        g[v] ?? (g[v] = /* @__PURE__ */ new Set());
        for (const b of _.values)
          g[v].add(b);
      }
    }
    return g;
  });
  const o = cu, c = r.catchall;
  let h;
  n._zod.parse = (m, g) => {
    h ?? (h = s.value);
    const v = m.value;
    if (!o(v))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: v,
        inst: n
      }), m;
    m.value = {};
    const _ = [], b = h.shape;
    for (const y of h.keys) {
      const f = b[y]._zod.run({ value: v[y], issues: [] }, g);
      f instanceof Promise ? _.push(f.then((S) => fu(S, m, y, v))) : fu(f, m, y, v);
    }
    return c ? Q0(_, v, m, g, s.value, n) : _.length ? Promise.all(_).then(() => m) : m;
  };
}), WE = /* @__PURE__ */ W("$ZodObjectJIT", (n, r) => {
  JE.init(n, r);
  const i = n._zod.parse, s = Ph(() => X0(r)), o = (y) => {
    const p = new SE(["shape", "payload", "ctx"]), f = s.value, S = (N) => {
      const C = oy(N);
      return `shape[${C}]._zod.run({ value: input[${C}], issues: [] }, ctx)`;
    };
    p.write("const input = payload.value;");
    const x = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const N of f.keys)
      x[N] = `key_${T++}`;
    p.write("const newResult = {};");
    for (const N of f.keys) {
      const C = x[N], O = oy(N);
      p.write(`const ${C} = ${S(N)};`), p.write(`
        if (${C}.issues.length) {
          payload.issues = payload.issues.concat(${C}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${O}, ...iss.path] : [${O}]
          })));
        }
        
        
        if (${C}.value === undefined) {
          if (${O} in input) {
            newResult[${O}] = undefined;
          }
        } else {
          newResult[${O}] = ${C}.value;
        }
        
      `);
    }
    p.write("payload.value = newResult;"), p.write("return payload;");
    const w = p.compile();
    return (N, C) => w(y, N, C);
  };
  let c;
  const h = cu, m = !k0.jitless, v = m && px.value, _ = r.catchall;
  let b;
  n._zod.parse = (y, p) => {
    b ?? (b = s.value);
    const f = y.value;
    return h(f) ? m && v && p?.async === !1 && p.jitless !== !0 ? (c || (c = o(r.shape)), y = c(y, p), _ ? Q0([], f, y, p, b, n) : y) : i(y, p) : (y.issues.push({
      expected: "object",
      code: "invalid_type",
      input: f,
      inst: n
    }), y);
  };
});
function fy(n, r, i, s) {
  for (const c of n)
    if (c.issues.length === 0)
      return r.value = c.value, r;
  const o = n.filter((c) => !mi(c));
  return o.length === 1 ? (r.value = o[0].value, o[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: i,
    errors: n.map((c) => c.issues.map((h) => ya(h, s, va())))
  }), r);
}
const eC = /* @__PURE__ */ W("$ZodUnion", (n, r) => {
  yt.init(n, r), We(n._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), We(n._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), We(n._zod, "values", () => {
    if (r.options.every((o) => o._zod.values))
      return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), We(n._zod, "pattern", () => {
    if (r.options.every((o) => o._zod.pattern)) {
      const o = r.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${o.map((c) => Hh(c.source)).join("|")})$`);
    }
  });
  const i = r.options.length === 1, s = r.options[0]._zod.run;
  n._zod.parse = (o, c) => {
    if (i)
      return s(o, c);
    let h = !1;
    const m = [];
    for (const g of r.options) {
      const v = g._zod.run({
        value: o.value,
        issues: []
      }, c);
      if (v instanceof Promise)
        m.push(v), h = !0;
      else {
        if (v.issues.length === 0)
          return v;
        m.push(v);
      }
    }
    return h ? Promise.all(m).then((g) => fy(g, o, n, c)) : fy(m, o, n, c);
  };
}), tC = /* @__PURE__ */ W("$ZodIntersection", (n, r) => {
  yt.init(n, r), n._zod.parse = (i, s) => {
    const o = i.value, c = r.left._zod.run({ value: o, issues: [] }, s), h = r.right._zod.run({ value: o, issues: [] }, s);
    return c instanceof Promise || h instanceof Promise ? Promise.all([c, h]).then(([g, v]) => hy(i, g, v)) : hy(i, c, h);
  };
});
function xh(n, r) {
  if (n === r)
    return { valid: !0, data: n };
  if (n instanceof Date && r instanceof Date && +n == +r)
    return { valid: !0, data: n };
  if (Gs(n) && Gs(r)) {
    const i = Object.keys(r), s = Object.keys(n).filter((c) => i.indexOf(c) !== -1), o = { ...n, ...r };
    for (const c of s) {
      const h = xh(n[c], r[c]);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [c, ...h.mergeErrorPath]
        };
      o[c] = h.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(n) && Array.isArray(r)) {
    if (n.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let s = 0; s < n.length; s++) {
      const o = n[s], c = r[s], h = xh(o, c);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...h.mergeErrorPath]
        };
      i.push(h.data);
    }
    return { valid: !0, data: i };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function hy(n, r, i) {
  if (r.issues.length && n.issues.push(...r.issues), i.issues.length && n.issues.push(...i.issues), mi(n))
    return n;
  const s = xh(r.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return n.value = s.data, n;
}
const nC = /* @__PURE__ */ W("$ZodEnum", (n, r) => {
  yt.init(n, r);
  const i = R0(r.entries), s = new Set(i);
  n._zod.values = s, n._zod.pattern = new RegExp(`^(${i.filter((o) => mx.has(typeof o)).map((o) => typeof o == "string" ? yu(o) : o.toString()).join("|")})$`), n._zod.parse = (o, c) => {
    const h = o.value;
    return s.has(h) || o.issues.push({
      code: "invalid_value",
      values: i,
      input: h,
      inst: n
    }), o;
  };
}), rC = /* @__PURE__ */ W("$ZodTransform", (n, r) => {
  yt.init(n, r), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new M0(n.constructor.name);
    const o = r.transform(i.value, i);
    if (s.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((h) => (i.value = h, i));
    if (o instanceof Promise)
      throw new vi();
    return i.value = o, i;
  };
});
function dy(n, r) {
  return n.issues.length && r === void 0 ? { issues: [], value: void 0 } : n;
}
const aC = /* @__PURE__ */ W("$ZodOptional", (n, r) => {
  yt.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", We(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), We(n._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${Hh(i.source)})?$`) : void 0;
  }), n._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(i, s);
      return o instanceof Promise ? o.then((c) => dy(c, i.value)) : dy(o, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), iC = /* @__PURE__ */ W("$ZodNullable", (n, r) => {
  yt.init(n, r), We(n._zod, "optin", () => r.innerType._zod.optin), We(n._zod, "optout", () => r.innerType._zod.optout), We(n._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${Hh(i.source)}|null)$`) : void 0;
  }), We(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), sC = /* @__PURE__ */ W("$ZodDefault", (n, r) => {
  yt.init(n, r), n._zod.optin = "optional", We(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = r.defaultValue, i;
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((c) => py(c, r)) : py(o, r);
  };
});
function py(n, r) {
  return n.value === void 0 && (n.value = r.defaultValue), n;
}
const lC = /* @__PURE__ */ W("$ZodPrefault", (n, r) => {
  yt.init(n, r), n._zod.optin = "optional", We(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), oC = /* @__PURE__ */ W("$ZodNonOptional", (n, r) => {
  yt.init(n, r), We(n._zod, "values", () => {
    const i = r.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), n._zod.parse = (i, s) => {
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((c) => my(c, n)) : my(o, n);
  };
});
function my(n, r) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: r
  }), n;
}
const uC = /* @__PURE__ */ W("$ZodCatch", (n, r) => {
  yt.init(n, r), We(n._zod, "optin", () => r.innerType._zod.optin), We(n._zod, "optout", () => r.innerType._zod.optout), We(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((c) => (i.value = c.value, c.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: c.issues.map((h) => ya(h, s, va()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = o.value, o.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: o.issues.map((c) => ya(c, s, va()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), cC = /* @__PURE__ */ W("$ZodPipe", (n, r) => {
  yt.init(n, r), We(n._zod, "values", () => r.in._zod.values), We(n._zod, "optin", () => r.in._zod.optin), We(n._zod, "optout", () => r.out._zod.optout), We(n._zod, "propValues", () => r.in._zod.propValues), n._zod.parse = (i, s) => {
    if (s.direction === "backward") {
      const c = r.out._zod.run(i, s);
      return c instanceof Promise ? c.then((h) => Go(h, r.in, s)) : Go(c, r.in, s);
    }
    const o = r.in._zod.run(i, s);
    return o instanceof Promise ? o.then((c) => Go(c, r.out, s)) : Go(o, r.out, s);
  };
});
function Go(n, r, i) {
  return n.issues.length ? (n.aborted = !0, n) : r._zod.run({ value: n.value, issues: n.issues }, i);
}
const fC = /* @__PURE__ */ W("$ZodReadonly", (n, r) => {
  yt.init(n, r), We(n._zod, "propValues", () => r.innerType._zod.propValues), We(n._zod, "values", () => r.innerType._zod.values), We(n._zod, "optin", () => r.innerType._zod.optin), We(n._zod, "optout", () => r.innerType._zod.optout), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then(gy) : gy(o);
  };
});
function gy(n) {
  return n.value = Object.freeze(n.value), n;
}
const hC = /* @__PURE__ */ W("$ZodCustom", (n, r) => {
  Yt.init(n, r), yt.init(n, r), n._zod.parse = (i, s) => i, n._zod.check = (i) => {
    const s = i.value, o = r.fn(s);
    if (o instanceof Promise)
      return o.then((c) => vy(c, i, s, n));
    vy(o, i, s, n);
  };
});
function vy(n, r, i, s) {
  if (!n) {
    const o = {
      code: "custom",
      input: i,
      inst: s,
      // incorporates params.error into issue reporting
      path: [...s._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !s._zod.def.abort
      // params: inst._zod.def.params,
    };
    s._zod.def.params && (o.params = s._zod.def.params), r.issues.push(Fs(o));
  }
}
class $0 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(r, ...i) {
    const s = i[0];
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
    const i = this._map.get(r);
    return i && typeof i == "object" && "id" in i && this._idmap.delete(i.id), this._map.delete(r), this;
  }
  get(r) {
    const i = r._zod.parent;
    if (i) {
      const s = { ...this.get(i) ?? {} };
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
function dC() {
  return new $0();
}
const js = /* @__PURE__ */ dC();
function pC(n, r) {
  return new n({
    type: "string",
    ...ge(r)
  });
}
function mC(n, r) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function yy(n, r) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function gC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function vC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ge(r)
  });
}
function yC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ge(r)
  });
}
function _C(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ge(r)
  });
}
function bC(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function SC(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function xC(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function EC(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function CC(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function wC(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function AC(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function TC(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function DC(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function OC(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function NC(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function MC(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function kC(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function RC(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function jC(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function zC(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ge(r)
  });
}
function LC(n, r) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ge(r)
  });
}
function BC(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...ge(r)
  });
}
function UC(n, r) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ge(r)
  });
}
function PC(n, r) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ge(r)
  });
}
function IC(n, r) {
  return new n({
    type: "number",
    checks: [],
    ...ge(r)
  });
}
function HC(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ge(r)
  });
}
function qC(n) {
  return new n({
    type: "unknown"
  });
}
function ZC(n, r) {
  return new n({
    type: "never",
    ...ge(r)
  });
}
function _y(n, r) {
  return new G0({
    check: "less_than",
    ...ge(r),
    value: n,
    inclusive: !1
  });
}
function ih(n, r) {
  return new G0({
    check: "less_than",
    ...ge(r),
    value: n,
    inclusive: !0
  });
}
function by(n, r) {
  return new F0({
    check: "greater_than",
    ...ge(r),
    value: n,
    inclusive: !1
  });
}
function sh(n, r) {
  return new F0({
    check: "greater_than",
    ...ge(r),
    value: n,
    inclusive: !0
  });
}
function Sy(n, r) {
  return new uE({
    check: "multiple_of",
    ...ge(r),
    value: n
  });
}
function K0(n, r) {
  return new fE({
    check: "max_length",
    ...ge(r),
    maximum: n
  });
}
function hu(n, r) {
  return new hE({
    check: "min_length",
    ...ge(r),
    minimum: n
  });
}
function J0(n, r) {
  return new dE({
    check: "length_equals",
    ...ge(r),
    length: n
  });
}
function GC(n, r) {
  return new pE({
    check: "string_format",
    format: "regex",
    ...ge(r),
    pattern: n
  });
}
function FC(n) {
  return new mE({
    check: "string_format",
    format: "lowercase",
    ...ge(n)
  });
}
function VC(n) {
  return new gE({
    check: "string_format",
    format: "uppercase",
    ...ge(n)
  });
}
function YC(n, r) {
  return new vE({
    check: "string_format",
    format: "includes",
    ...ge(r),
    includes: n
  });
}
function XC(n, r) {
  return new yE({
    check: "string_format",
    format: "starts_with",
    ...ge(r),
    prefix: n
  });
}
function QC(n, r) {
  return new _E({
    check: "string_format",
    format: "ends_with",
    ...ge(r),
    suffix: n
  });
}
function $s(n) {
  return new bE({
    check: "overwrite",
    tx: n
  });
}
function $C(n) {
  return $s((r) => r.normalize(n));
}
function KC() {
  return $s((n) => n.trim());
}
function JC() {
  return $s((n) => n.toLowerCase());
}
function WC() {
  return $s((n) => n.toUpperCase());
}
function e3(n, r, i) {
  return new n({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...ge(i)
  });
}
function t3(n, r, i) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...ge(i)
  });
}
function n3(n) {
  const r = r3((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(Fs(s, i.value, r._zod.def));
    else {
      const o = s;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = i.value), o.inst ?? (o.inst = r), o.continue ?? (o.continue = !r._zod.def.abort), i.issues.push(Fs(o));
    }
  }, n(i.value, i)));
  return r;
}
function r3(n, r) {
  const i = new Yt({
    check: "custom",
    ...ge(r)
  });
  return i._zod.check = n, i;
}
class xy {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? js, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, i = { path: [], schemaPath: [] }) {
    var s;
    const o = r._zod.def, c = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, h = this.seen.get(r);
    if (h)
      return h.count++, i.schemaPath.includes(r) && (h.cycle = i.path), h.schema;
    const m = { schema: {}, count: 1, cycle: void 0, path: i.path };
    this.seen.set(r, m);
    const g = r._zod.toJSONSchema?.();
    if (g)
      m.schema = g;
    else {
      const b = {
        ...i,
        schemaPath: [...i.schemaPath, r],
        path: i.path
      }, y = r._zod.parent;
      if (y)
        m.ref = y, this.process(y, b), this.seen.get(y).isParent = !0;
      else {
        const p = m.schema;
        switch (o.type) {
          case "string": {
            const f = p;
            f.type = "string";
            const { minimum: S, maximum: x, format: T, patterns: w, contentEncoding: N } = r._zod.bag;
            if (typeof S == "number" && (f.minLength = S), typeof x == "number" && (f.maxLength = x), T && (f.format = c[T] ?? T, f.format === "" && delete f.format), N && (f.contentEncoding = N), w && w.size > 0) {
              const C = [...w];
              C.length === 1 ? f.pattern = C[0].source : C.length > 1 && (m.schema.allOf = [
                ...C.map((O) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: O.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const f = p, { minimum: S, maximum: x, format: T, multipleOf: w, exclusiveMaximum: N, exclusiveMinimum: C } = r._zod.bag;
            typeof T == "string" && T.includes("int") ? f.type = "integer" : f.type = "number", typeof C == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (f.minimum = C, f.exclusiveMinimum = !0) : f.exclusiveMinimum = C), typeof S == "number" && (f.minimum = S, typeof C == "number" && this.target !== "draft-4" && (C >= S ? delete f.minimum : delete f.exclusiveMinimum)), typeof N == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (f.maximum = N, f.exclusiveMaximum = !0) : f.exclusiveMaximum = N), typeof x == "number" && (f.maximum = x, typeof N == "number" && this.target !== "draft-4" && (N <= x ? delete f.maximum : delete f.exclusiveMaximum)), typeof w == "number" && (f.multipleOf = w);
            break;
          }
          case "boolean": {
            const f = p;
            f.type = "boolean";
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
            this.target === "openapi-3.0" ? (p.type = "string", p.nullable = !0, p.enum = [null]) : p.type = "null";
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
            p.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const f = p, { minimum: S, maximum: x } = r._zod.bag;
            typeof S == "number" && (f.minItems = S), typeof x == "number" && (f.maxItems = x), f.type = "array", f.items = this.process(o.element, { ...b, path: [...b.path, "items"] });
            break;
          }
          case "object": {
            const f = p;
            f.type = "object", f.properties = {};
            const S = o.shape;
            for (const w in S)
              f.properties[w] = this.process(S[w], {
                ...b,
                path: [...b.path, "properties", w]
              });
            const x = new Set(Object.keys(S)), T = new Set([...x].filter((w) => {
              const N = o.shape[w]._zod;
              return this.io === "input" ? N.optin === void 0 : N.optout === void 0;
            }));
            T.size > 0 && (f.required = Array.from(T)), o.catchall?._zod.def.type === "never" ? f.additionalProperties = !1 : o.catchall ? o.catchall && (f.additionalProperties = this.process(o.catchall, {
              ...b,
              path: [...b.path, "additionalProperties"]
            })) : this.io === "output" && (f.additionalProperties = !1);
            break;
          }
          case "union": {
            const f = p, S = o.options.map((x, T) => this.process(x, {
              ...b,
              path: [...b.path, "anyOf", T]
            }));
            f.anyOf = S;
            break;
          }
          case "intersection": {
            const f = p, S = this.process(o.left, {
              ...b,
              path: [...b.path, "allOf", 0]
            }), x = this.process(o.right, {
              ...b,
              path: [...b.path, "allOf", 1]
            }), T = (N) => "allOf" in N && Object.keys(N).length === 1, w = [
              ...T(S) ? S.allOf : [S],
              ...T(x) ? x.allOf : [x]
            ];
            f.allOf = w;
            break;
          }
          case "tuple": {
            const f = p;
            f.type = "array";
            const S = this.target === "draft-2020-12" ? "prefixItems" : "items", x = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", T = o.items.map((O, z) => this.process(O, {
              ...b,
              path: [...b.path, S, z]
            })), w = o.rest ? this.process(o.rest, {
              ...b,
              path: [...b.path, x, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (f.prefixItems = T, w && (f.items = w)) : this.target === "openapi-3.0" ? (f.items = {
              anyOf: T
            }, w && f.items.anyOf.push(w), f.minItems = T.length, w || (f.maxItems = T.length)) : (f.items = T, w && (f.additionalItems = w));
            const { minimum: N, maximum: C } = r._zod.bag;
            typeof N == "number" && (f.minItems = N), typeof C == "number" && (f.maxItems = C);
            break;
          }
          case "record": {
            const f = p;
            f.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (f.propertyNames = this.process(o.keyType, {
              ...b,
              path: [...b.path, "propertyNames"]
            })), f.additionalProperties = this.process(o.valueType, {
              ...b,
              path: [...b.path, "additionalProperties"]
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
            const f = p, S = R0(o.entries);
            S.every((x) => typeof x == "number") && (f.type = "number"), S.every((x) => typeof x == "string") && (f.type = "string"), f.enum = S;
            break;
          }
          case "literal": {
            const f = p, S = [];
            for (const x of o.values)
              if (x === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof x == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                S.push(Number(x));
              } else
                S.push(x);
            if (S.length !== 0) if (S.length === 1) {
              const x = S[0];
              f.type = x === null ? "null" : typeof x, this.target === "draft-4" || this.target === "openapi-3.0" ? f.enum = [x] : f.const = x;
            } else
              S.every((x) => typeof x == "number") && (f.type = "number"), S.every((x) => typeof x == "string") && (f.type = "string"), S.every((x) => typeof x == "boolean") && (f.type = "string"), S.every((x) => x === null) && (f.type = "null"), f.enum = S;
            break;
          }
          case "file": {
            const f = p, S = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: x, maximum: T, mime: w } = r._zod.bag;
            x !== void 0 && (S.minLength = x), T !== void 0 && (S.maxLength = T), w ? w.length === 1 ? (S.contentMediaType = w[0], Object.assign(f, S)) : f.anyOf = w.map((N) => ({ ...S, contentMediaType: N })) : Object.assign(f, S);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const f = this.process(o.innerType, b);
            this.target === "openapi-3.0" ? (m.ref = o.innerType, p.nullable = !0) : p.anyOf = [f, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, b), m.ref = o.innerType;
            break;
          }
          case "success": {
            const f = p;
            f.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, b), m.ref = o.innerType, p.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, b), m.ref = o.innerType, this.io === "input" && (p._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
            break;
          }
          case "catch": {
            this.process(o.innerType, b), m.ref = o.innerType;
            let f;
            try {
              f = o.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            p.default = f;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const f = p, S = r._zod.pattern;
            if (!S)
              throw new Error("Pattern not found in template literal");
            f.type = "string", f.pattern = S.source;
            break;
          }
          case "pipe": {
            const f = this.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
            this.process(f, b), m.ref = f;
            break;
          }
          case "readonly": {
            this.process(o.innerType, b), m.ref = o.innerType, p.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(o.innerType, b), m.ref = o.innerType;
            break;
          }
          case "optional": {
            this.process(o.innerType, b), m.ref = o.innerType;
            break;
          }
          case "lazy": {
            const f = r._zod.innerType;
            this.process(f, b), m.ref = f;
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
    const v = this.metadataRegistry.get(r);
    return v && Object.assign(m.schema, v), this.io === "input" && St(r) && (delete m.schema.examples, delete m.schema.default), this.io === "input" && m.schema._prefault && ((s = m.schema).default ?? (s.default = m.schema._prefault)), delete m.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, i) {
    const s = {
      cycles: i?.cycles ?? "ref",
      reused: i?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: i?.external ?? void 0
    }, o = this.seen.get(r);
    if (!o)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const c = (_) => {
      const b = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (s.external) {
        const S = s.external.registry.get(_[0])?.id, x = s.external.uri ?? ((w) => w);
        if (S)
          return { ref: x(S) };
        const T = _[1].defId ?? _[1].schema.id ?? `schema${this.counter++}`;
        return _[1].defId = T, { defId: T, ref: `${x("__shared")}#/${b}/${T}` };
      }
      if (_[1] === o)
        return { ref: "#" };
      const p = `#/${b}/`, f = _[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: f, ref: p + f };
    }, h = (_) => {
      if (_[1].schema.$ref)
        return;
      const b = _[1], { ref: y, defId: p } = c(_);
      b.def = { ...b.schema }, p && (b.defId = p);
      const f = b.schema;
      for (const S in f)
        delete f[S];
      f.$ref = y;
    };
    if (s.cycles === "throw")
      for (const _ of this.seen.entries()) {
        const b = _[1];
        if (b.cycle)
          throw new Error(`Cycle detected: #/${b.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const _ of this.seen.entries()) {
      const b = _[1];
      if (r === _[0]) {
        h(_);
        continue;
      }
      if (s.external) {
        const p = s.external.registry.get(_[0])?.id;
        if (r !== _[0] && p) {
          h(_);
          continue;
        }
      }
      if (this.metadataRegistry.get(_[0])?.id) {
        h(_);
        continue;
      }
      if (b.cycle) {
        h(_);
        continue;
      }
      if (b.count > 1 && s.reused === "ref") {
        h(_);
        continue;
      }
    }
    const m = (_, b) => {
      const y = this.seen.get(_), p = y.def ?? y.schema, f = { ...p };
      if (y.ref === null)
        return;
      const S = y.ref;
      if (y.ref = null, S) {
        m(S, b);
        const x = this.seen.get(S).schema;
        x.$ref && (b.target === "draft-7" || b.target === "draft-4" || b.target === "openapi-3.0") ? (p.allOf = p.allOf ?? [], p.allOf.push(x)) : (Object.assign(p, x), Object.assign(p, f));
      }
      y.isParent || this.override({
        zodSchema: _,
        jsonSchema: p,
        path: y.path ?? []
      });
    };
    for (const _ of [...this.seen.entries()].reverse())
      m(_[0], { target: this.target });
    const g = {};
    if (this.target === "draft-2020-12" ? g.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? g.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? g.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), s.external?.uri) {
      const _ = s.external.registry.get(r)?.id;
      if (!_)
        throw new Error("Schema is missing an `id` property");
      g.$id = s.external.uri(_);
    }
    Object.assign(g, o.def);
    const v = s.external?.defs ?? {};
    for (const _ of this.seen.entries()) {
      const b = _[1];
      b.def && b.defId && (v[b.defId] = b.def);
    }
    s.external || Object.keys(v).length > 0 && (this.target === "draft-2020-12" ? g.$defs = v : g.definitions = v);
    try {
      return JSON.parse(JSON.stringify(g));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function a3(n, r) {
  if (n instanceof $0) {
    const s = new xy(r), o = {};
    for (const m of n._idmap.entries()) {
      const [g, v] = m;
      s.process(v);
    }
    const c = {}, h = {
      registry: n,
      uri: r?.uri,
      defs: o
    };
    for (const m of n._idmap.entries()) {
      const [g, v] = m;
      c[g] = s.emit(v, {
        ...r,
        external: h
      });
    }
    if (Object.keys(o).length > 0) {
      const m = s.target === "draft-2020-12" ? "$defs" : "definitions";
      c.__shared = {
        [m]: o
      };
    }
    return { schemas: c };
  }
  const i = new xy(r);
  return i.process(n), i.emit(n, r);
}
function St(n, r) {
  const i = r ?? { seen: /* @__PURE__ */ new Set() };
  if (i.seen.has(n))
    return !1;
  i.seen.add(n);
  const o = n._zod.def;
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
      return St(o.element, i);
    case "object": {
      for (const c in o.shape)
        if (St(o.shape[c], i))
          return !0;
      return !1;
    }
    case "union": {
      for (const c of o.options)
        if (St(c, i))
          return !0;
      return !1;
    }
    case "intersection":
      return St(o.left, i) || St(o.right, i);
    case "tuple": {
      for (const c of o.items)
        if (St(c, i))
          return !0;
      return !!(o.rest && St(o.rest, i));
    }
    case "record":
      return St(o.keyType, i) || St(o.valueType, i);
    case "map":
      return St(o.keyType, i) || St(o.valueType, i);
    case "set":
      return St(o.valueType, i);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return St(o.innerType, i);
    case "lazy":
      return St(o.getter(), i);
    case "default":
      return St(o.innerType, i);
    case "prefault":
      return St(o.innerType, i);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return St(o.in, i) || St(o.out, i);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${o.type}`);
}
const i3 = /* @__PURE__ */ W("ZodISODateTime", (n, r) => {
  jE.init(n, r), it.init(n, r);
});
function s3(n) {
  return LC(i3, n);
}
const l3 = /* @__PURE__ */ W("ZodISODate", (n, r) => {
  zE.init(n, r), it.init(n, r);
});
function o3(n) {
  return BC(l3, n);
}
const u3 = /* @__PURE__ */ W("ZodISOTime", (n, r) => {
  LE.init(n, r), it.init(n, r);
});
function c3(n) {
  return UC(u3, n);
}
const f3 = /* @__PURE__ */ W("ZodISODuration", (n, r) => {
  BE.init(n, r), it.init(n, r);
});
function h3(n) {
  return PC(f3, n);
}
const d3 = (n, r) => {
  U0.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (i) => Ax(n, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => wx(n, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        n.issues.push(i), n.message = JSON.stringify(n.issues, Sh, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        n.issues.push(...i), n.message = JSON.stringify(n.issues, Sh, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return n.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Sn = W("ZodError", d3, {
  Parent: Error
}), p3 = /* @__PURE__ */ Zh(Sn), m3 = /* @__PURE__ */ Gh(Sn), g3 = /* @__PURE__ */ _u(Sn), v3 = /* @__PURE__ */ bu(Sn), y3 = /* @__PURE__ */ Ox(Sn), _3 = /* @__PURE__ */ Nx(Sn), b3 = /* @__PURE__ */ Mx(Sn), S3 = /* @__PURE__ */ kx(Sn), x3 = /* @__PURE__ */ Rx(Sn), E3 = /* @__PURE__ */ jx(Sn), C3 = /* @__PURE__ */ zx(Sn), w3 = /* @__PURE__ */ Lx(Sn), xt = /* @__PURE__ */ W("ZodType", (n, r) => (yt.init(n, r), n.def = r, n.type = r.type, Object.defineProperty(n, "_def", { value: r }), n.check = (...i) => n.clone(ba(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), n.clone = (i, s) => Zr(n, i, s), n.brand = () => n, n.register = ((i, s) => (i.add(n, s), n)), n.parse = (i, s) => p3(n, i, s, { callee: n.parse }), n.safeParse = (i, s) => g3(n, i, s), n.parseAsync = async (i, s) => m3(n, i, s, { callee: n.parseAsync }), n.safeParseAsync = async (i, s) => v3(n, i, s), n.spa = n.safeParseAsync, n.encode = (i, s) => y3(n, i, s), n.decode = (i, s) => _3(n, i, s), n.encodeAsync = async (i, s) => b3(n, i, s), n.decodeAsync = async (i, s) => S3(n, i, s), n.safeEncode = (i, s) => x3(n, i, s), n.safeDecode = (i, s) => E3(n, i, s), n.safeEncodeAsync = async (i, s) => C3(n, i, s), n.safeDecodeAsync = async (i, s) => w3(n, i, s), n.refine = (i, s) => n.check(p4(i, s)), n.superRefine = (i) => n.check(m4(i)), n.overwrite = (i) => n.check($s(i)), n.optional = () => Ay(n), n.nullable = () => Ty(n), n.nullish = () => Ay(Ty(n)), n.nonoptional = (i) => l4(n, i), n.array = () => Dn(n), n.or = (i) => K3([n, i]), n.and = (i) => W3(n, i), n.transform = (i) => Dy(n, t4(i)), n.default = (i) => a4(n, i), n.prefault = (i) => s4(n, i), n.catch = (i) => u4(n, i), n.pipe = (i) => Dy(n, i), n.readonly = () => h4(n), n.describe = (i) => {
  const s = n.clone();
  return js.add(s, { description: i }), s;
}, Object.defineProperty(n, "description", {
  get() {
    return js.get(n)?.description;
  },
  configurable: !0
}), n.meta = (...i) => {
  if (i.length === 0)
    return js.get(n);
  const s = n.clone();
  return js.add(s, i[0]), s;
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), W0 = /* @__PURE__ */ W("_ZodString", (n, r) => {
  Fh.init(n, r), xt.init(n, r);
  const i = n._zod.bag;
  n.format = i.format ?? null, n.minLength = i.minimum ?? null, n.maxLength = i.maximum ?? null, n.regex = (...s) => n.check(GC(...s)), n.includes = (...s) => n.check(YC(...s)), n.startsWith = (...s) => n.check(XC(...s)), n.endsWith = (...s) => n.check(QC(...s)), n.min = (...s) => n.check(hu(...s)), n.max = (...s) => n.check(K0(...s)), n.length = (...s) => n.check(J0(...s)), n.nonempty = (...s) => n.check(hu(1, ...s)), n.lowercase = (s) => n.check(FC(s)), n.uppercase = (s) => n.check(VC(s)), n.trim = () => n.check(KC()), n.normalize = (...s) => n.check($C(...s)), n.toLowerCase = () => n.check(JC()), n.toUpperCase = () => n.check(WC());
}), A3 = /* @__PURE__ */ W("ZodString", (n, r) => {
  Fh.init(n, r), W0.init(n, r), n.email = (i) => n.check(mC(T3, i)), n.url = (i) => n.check(bC(D3, i)), n.jwt = (i) => n.check(zC(Z3, i)), n.emoji = (i) => n.check(SC(O3, i)), n.guid = (i) => n.check(yy(Ey, i)), n.uuid = (i) => n.check(gC(Fo, i)), n.uuidv4 = (i) => n.check(vC(Fo, i)), n.uuidv6 = (i) => n.check(yC(Fo, i)), n.uuidv7 = (i) => n.check(_C(Fo, i)), n.nanoid = (i) => n.check(xC(N3, i)), n.guid = (i) => n.check(yy(Ey, i)), n.cuid = (i) => n.check(EC(M3, i)), n.cuid2 = (i) => n.check(CC(k3, i)), n.ulid = (i) => n.check(wC(R3, i)), n.base64 = (i) => n.check(kC(I3, i)), n.base64url = (i) => n.check(RC(H3, i)), n.xid = (i) => n.check(AC(j3, i)), n.ksuid = (i) => n.check(TC(z3, i)), n.ipv4 = (i) => n.check(DC(L3, i)), n.ipv6 = (i) => n.check(OC(B3, i)), n.cidrv4 = (i) => n.check(NC(U3, i)), n.cidrv6 = (i) => n.check(MC(P3, i)), n.e164 = (i) => n.check(jC(q3, i)), n.datetime = (i) => n.check(s3(i)), n.date = (i) => n.check(o3(i)), n.time = (i) => n.check(c3(i)), n.duration = (i) => n.check(h3(i));
});
function _n(n) {
  return pC(A3, n);
}
const it = /* @__PURE__ */ W("ZodStringFormat", (n, r) => {
  nt.init(n, r), W0.init(n, r);
}), T3 = /* @__PURE__ */ W("ZodEmail", (n, r) => {
  wE.init(n, r), it.init(n, r);
}), Ey = /* @__PURE__ */ W("ZodGUID", (n, r) => {
  EE.init(n, r), it.init(n, r);
}), Fo = /* @__PURE__ */ W("ZodUUID", (n, r) => {
  CE.init(n, r), it.init(n, r);
}), D3 = /* @__PURE__ */ W("ZodURL", (n, r) => {
  AE.init(n, r), it.init(n, r);
}), O3 = /* @__PURE__ */ W("ZodEmoji", (n, r) => {
  TE.init(n, r), it.init(n, r);
}), N3 = /* @__PURE__ */ W("ZodNanoID", (n, r) => {
  DE.init(n, r), it.init(n, r);
}), M3 = /* @__PURE__ */ W("ZodCUID", (n, r) => {
  OE.init(n, r), it.init(n, r);
}), k3 = /* @__PURE__ */ W("ZodCUID2", (n, r) => {
  NE.init(n, r), it.init(n, r);
}), R3 = /* @__PURE__ */ W("ZodULID", (n, r) => {
  ME.init(n, r), it.init(n, r);
}), j3 = /* @__PURE__ */ W("ZodXID", (n, r) => {
  kE.init(n, r), it.init(n, r);
}), z3 = /* @__PURE__ */ W("ZodKSUID", (n, r) => {
  RE.init(n, r), it.init(n, r);
}), L3 = /* @__PURE__ */ W("ZodIPv4", (n, r) => {
  UE.init(n, r), it.init(n, r);
}), B3 = /* @__PURE__ */ W("ZodIPv6", (n, r) => {
  PE.init(n, r), it.init(n, r);
}), U3 = /* @__PURE__ */ W("ZodCIDRv4", (n, r) => {
  IE.init(n, r), it.init(n, r);
}), P3 = /* @__PURE__ */ W("ZodCIDRv6", (n, r) => {
  HE.init(n, r), it.init(n, r);
}), I3 = /* @__PURE__ */ W("ZodBase64", (n, r) => {
  qE.init(n, r), it.init(n, r);
}), H3 = /* @__PURE__ */ W("ZodBase64URL", (n, r) => {
  GE.init(n, r), it.init(n, r);
}), q3 = /* @__PURE__ */ W("ZodE164", (n, r) => {
  FE.init(n, r), it.init(n, r);
}), Z3 = /* @__PURE__ */ W("ZodJWT", (n, r) => {
  YE.init(n, r), it.init(n, r);
}), e1 = /* @__PURE__ */ W("ZodNumber", (n, r) => {
  Y0.init(n, r), xt.init(n, r), n.gt = (s, o) => n.check(by(s, o)), n.gte = (s, o) => n.check(sh(s, o)), n.min = (s, o) => n.check(sh(s, o)), n.lt = (s, o) => n.check(_y(s, o)), n.lte = (s, o) => n.check(ih(s, o)), n.max = (s, o) => n.check(ih(s, o)), n.int = (s) => n.check(Cy(s)), n.safe = (s) => n.check(Cy(s)), n.positive = (s) => n.check(by(0, s)), n.nonnegative = (s) => n.check(sh(0, s)), n.negative = (s) => n.check(_y(0, s)), n.nonpositive = (s) => n.check(ih(0, s)), n.multipleOf = (s, o) => n.check(Sy(s, o)), n.step = (s, o) => n.check(Sy(s, o)), n.finite = () => n;
  const i = n._zod.bag;
  n.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), n.isFinite = !0, n.format = i.format ?? null;
});
function du(n) {
  return IC(e1, n);
}
const G3 = /* @__PURE__ */ W("ZodNumberFormat", (n, r) => {
  XE.init(n, r), e1.init(n, r);
});
function Cy(n) {
  return HC(G3, n);
}
const F3 = /* @__PURE__ */ W("ZodUnknown", (n, r) => {
  QE.init(n, r), xt.init(n, r);
});
function wy() {
  return qC(F3);
}
const V3 = /* @__PURE__ */ W("ZodNever", (n, r) => {
  $E.init(n, r), xt.init(n, r);
});
function Y3(n) {
  return ZC(V3, n);
}
const X3 = /* @__PURE__ */ W("ZodArray", (n, r) => {
  KE.init(n, r), xt.init(n, r), n.element = r.element, n.min = (i, s) => n.check(hu(i, s)), n.nonempty = (i) => n.check(hu(1, i)), n.max = (i, s) => n.check(K0(i, s)), n.length = (i, s) => n.check(J0(i, s)), n.unwrap = () => n.element;
});
function Dn(n, r) {
  return e3(X3, n, r);
}
const Q3 = /* @__PURE__ */ W("ZodObject", (n, r) => {
  WE.init(n, r), xt.init(n, r), We(n, "shape", () => r.shape), n.keyof = () => Ch(Object.keys(n._zod.def.shape)), n.catchall = (i) => n.clone({ ...n._zod.def, catchall: i }), n.passthrough = () => n.clone({ ...n._zod.def, catchall: wy() }), n.loose = () => n.clone({ ...n._zod.def, catchall: wy() }), n.strict = () => n.clone({ ...n._zod.def, catchall: Y3() }), n.strip = () => n.clone({ ...n._zod.def, catchall: void 0 }), n.extend = (i) => bx(n, i), n.safeExtend = (i) => Sx(n, i), n.merge = (i) => xx(n, i), n.pick = (i) => yx(n, i), n.omit = (i) => _x(n, i), n.partial = (...i) => Ex(t1, n, i[0]), n.required = (...i) => Cx(n1, n, i[0]);
});
function ga(n, r) {
  const i = {
    type: "object",
    shape: n ?? {},
    ...ge(r)
  };
  return new Q3(i);
}
const $3 = /* @__PURE__ */ W("ZodUnion", (n, r) => {
  eC.init(n, r), xt.init(n, r), n.options = r.options;
});
function K3(n, r) {
  return new $3({
    type: "union",
    options: n,
    ...ge(r)
  });
}
const J3 = /* @__PURE__ */ W("ZodIntersection", (n, r) => {
  tC.init(n, r), xt.init(n, r);
});
function W3(n, r) {
  return new J3({
    type: "intersection",
    left: n,
    right: r
  });
}
const Eh = /* @__PURE__ */ W("ZodEnum", (n, r) => {
  nC.init(n, r), xt.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const i = new Set(Object.keys(r.entries));
  n.extract = (s, o) => {
    const c = {};
    for (const h of s)
      if (i.has(h))
        c[h] = r.entries[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new Eh({
      ...r,
      checks: [],
      ...ge(o),
      entries: c
    });
  }, n.exclude = (s, o) => {
    const c = { ...r.entries };
    for (const h of s)
      if (i.has(h))
        delete c[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new Eh({
      ...r,
      checks: [],
      ...ge(o),
      entries: c
    });
  };
});
function Ch(n, r) {
  const i = Array.isArray(n) ? Object.fromEntries(n.map((s) => [s, s])) : n;
  return new Eh({
    type: "enum",
    entries: i,
    ...ge(r)
  });
}
const e4 = /* @__PURE__ */ W("ZodTransform", (n, r) => {
  rC.init(n, r), xt.init(n, r), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new M0(n.constructor.name);
    i.addIssue = (c) => {
      if (typeof c == "string")
        i.issues.push(Fs(c, i.value, r));
      else {
        const h = c;
        h.fatal && (h.continue = !1), h.code ?? (h.code = "custom"), h.input ?? (h.input = i.value), h.inst ?? (h.inst = n), i.issues.push(Fs(h));
      }
    };
    const o = r.transform(i.value, i);
    return o instanceof Promise ? o.then((c) => (i.value = c, i)) : (i.value = o, i);
  };
});
function t4(n) {
  return new e4({
    type: "transform",
    transform: n
  });
}
const t1 = /* @__PURE__ */ W("ZodOptional", (n, r) => {
  aC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Ay(n) {
  return new t1({
    type: "optional",
    innerType: n
  });
}
const n4 = /* @__PURE__ */ W("ZodNullable", (n, r) => {
  iC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Ty(n) {
  return new n4({
    type: "nullable",
    innerType: n
  });
}
const r4 = /* @__PURE__ */ W("ZodDefault", (n, r) => {
  sC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function a4(n, r) {
  return new r4({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : z0(r);
    }
  });
}
const i4 = /* @__PURE__ */ W("ZodPrefault", (n, r) => {
  lC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function s4(n, r) {
  return new i4({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : z0(r);
    }
  });
}
const n1 = /* @__PURE__ */ W("ZodNonOptional", (n, r) => {
  oC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function l4(n, r) {
  return new n1({
    type: "nonoptional",
    innerType: n,
    ...ge(r)
  });
}
const o4 = /* @__PURE__ */ W("ZodCatch", (n, r) => {
  uC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function u4(n, r) {
  return new o4({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const c4 = /* @__PURE__ */ W("ZodPipe", (n, r) => {
  cC.init(n, r), xt.init(n, r), n.in = r.in, n.out = r.out;
});
function Dy(n, r) {
  return new c4({
    type: "pipe",
    in: n,
    out: r
    // ...util.normalizeParams(params),
  });
}
const f4 = /* @__PURE__ */ W("ZodReadonly", (n, r) => {
  fC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function h4(n) {
  return new f4({
    type: "readonly",
    innerType: n
  });
}
const d4 = /* @__PURE__ */ W("ZodCustom", (n, r) => {
  hC.init(n, r), xt.init(n, r);
});
function p4(n, r = {}) {
  return t3(d4, n, r);
}
function m4(n) {
  return n3(n);
}
function g4(n) {
  return JSON.stringify(ha(n), null, 2);
}
function v4(...n) {
  for (const r of n) if (r !== void 0) return r;
}
function y4(n) {
  return Array.isArray(n) ? n.find((r) => r !== "null") ?? n[0] : n;
}
function Oy(n, r) {
  let i = 0;
  return typeof n.minimum == "number" && i < n.minimum && (i = r ? Math.ceil(n.minimum) : n.minimum), typeof n.exclusiveMinimum == "number" && i <= n.exclusiveMinimum && (i = r ? Math.floor(n.exclusiveMinimum) + 1 : n.exclusiveMinimum + 1), typeof n.maximum == "number" && i > n.maximum && (i = r ? Math.floor(n.maximum) : n.maximum), typeof n.exclusiveMaximum == "number" && i >= n.exclusiveMaximum && (i = r ? Math.ceil(n.exclusiveMaximum) - 1 : n.exclusiveMaximum - 1), i;
}
function ha(n) {
  if (!n || typeof n != "object") return null;
  const r = Array.isArray(n.examples) ? n.examples[0] : void 0, i = v4(n.example, r, n.default);
  if (i !== void 0) return i;
  if (n.const !== void 0) return n.const;
  if (Array.isArray(n.enum) && n.enum.length) return n.enum[0];
  const s = Array.isArray(n.anyOf) ? n.anyOf[0] : Array.isArray(n.oneOf) ? n.oneOf[0] : void 0;
  if (s) return ha(s);
  switch (y4(n.type)) {
    case "object": {
      const c = {}, h = n.properties || {};
      for (const m of Object.keys(h))
        c[m] = ha(h[m]);
      return n.additionalProperties && typeof n.additionalProperties == "object" && (c.additionalProperty = ha(n.additionalProperties)), c;
    }
    case "array": {
      const c = n.items ?? {};
      return [ha(c)];
    }
    case "string":
      switch (n.format) {
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
          return n.title || n.description || "string";
      }
    case "integer":
      return Oy(n, !0);
    case "number":
      return Oy(n, !1);
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return n.properties || n.additionalProperties ? ha({ ...n, type: "object" }) : n.items ? ha({ ...n, type: "array" }) : null;
  }
}
const Hs = "Max Response Tokens";
function As(n) {
  return typeof n == "string" ? n.trim() !== "" : Array.isArray(n) && n.length > 0;
}
function Ny(n, r, i, s = !1) {
  r = typeof r == "string" ? r : "";
  const o = n?.choices?.[0], c = Array.isArray(n?.content) ? n.content : [], h = o?.finish_reason ?? n?.stop_reason ?? n?.candidates?.[0]?.finishReason ?? n?.finish_reason, m = s ? c.find((v) => v?.type === "tool_use") : void 0, g = As(o?.message?.reasoning_content) || As(o?.message?.reasoning) || As(o?.reasoning) || As(n?.thinking) || // Claude returns thinking blocks without text unless a summary is requested, so the block itself counts.
  c.some((v) => v?.type === "thinking" || v?.type === "redacted_thinking") || (n?.responseContent?.parts ?? []).some((v) => v?.thought && As(v.text)) || Xs(r) !== r;
  return {
    text: r,
    structured: m?.input,
    finishReason: h == null ? void 0 : String(h),
    truncated: /length|max_tokens/i.test(String(h ?? "")),
    hasReasoning: g,
    maxTokens: i
  };
}
function Vh(n) {
  return n.structured === void 0 && Xs(n.text).trim() === "";
}
function Yh(n) {
  return n.truncated && n.hasReasoning ? `The model used all ${n.maxTokens} response tokens on thinking and returned no answer. Raise "${Hs}" or turn thinking off.` : n.truncated ? `The model returned no answer before hitting the ${n.maxTokens}-token limit. Raise "${Hs}".` : n.finishReason === void 0 && n.hasReasoning ? `The model returned no answer, and SillyTavern didn't report why it stopped. If thinking used up all ${n.maxTokens} response tokens, raise "${Hs}" or turn thinking off.` : n.finishReason && !/^(stop|end_turn|stop_sequence|eos)$/i.test(n.finishReason) ? `The model returned an empty response (finish reason: ${n.finishReason}).` : "The model returned an empty response.";
}
function _4(n) {
  return `The response was ${a1(n)} at the ${n.maxTokens}-token limit, so it isn't complete JSON. Raise "${Hs}".`;
}
function r1(n) {
  return `The response was ${a1(n)} at the ${n.maxTokens}-token limit, so the text may be incomplete. Raise "${Hs}" for longer responses.`;
}
function a1(n) {
  return n.truncationEstimated ? "probably cut off" : "cut off";
}
function i1(n) {
  const r = n?.message || String(n), i = n?.cause;
  if (r === "API request failed" && i) {
    const s = i?.message || String(i);
    return s ? `${r}: ${s}` : r;
  }
  return r;
}
const My = ["role", "content", "name", "tool_calls", "tool_call_id"];
function b4(n, r) {
  const i = r === "openai" ? My : [...My, "ignoreInstruct"];
  return n.map(
    (s) => Object.fromEntries(
      Object.entries(s).filter(([o, c]) => i.includes(o) && c !== void 0)
    )
  );
}
const S4 = [
  "custom_url",
  "vertexai_region",
  "zai_endpoint",
  "siliconflow_endpoint",
  "minimax_endpoint",
  "pollinations_endpoint"
];
async function x4(n, r, i, s) {
  const { profile: o, preset: c, source: h } = r, m = n.ChatCompletionService;
  if (r.mainApi !== "openai" || !c || typeof m?.presetToGeneratePayload != "function")
    return;
  const g = m.createRequestData({
    stream: !1,
    messages: i,
    max_tokens: s,
    model: o.model,
    chat_completion_source: h,
    secret_id: o["secret-id"],
    custom_prompt_post_processing: o["prompt-post-processing"],
    ...Object.fromEntries(S4.map((_) => [_, o["api-url"]]))
  }), v = await m.presetToGeneratePayload(c, { chat_completion_source: h }, g);
  return o.proxy && (delete v.reverse_proxy, delete v.proxy_password), delete v.stop, v;
}
function ky(n, r, i) {
  const s = r?.["reasoning-template"];
  if (!s || typeof i != "string" || typeof n.getReasoningTemplateByName != "function" || typeof n.parseReasoningFromString != "function")
    return i;
  let o;
  try {
    o = n.getReasoningTemplateByName(s);
  } catch {
    return i;
  }
  const c = n.parseReasoningFromString(i, { strict: !0 }, o);
  return typeof c?.content == "string" ? c.content : i;
}
const E4 = /^(Response not OK|Got response status (\d+)|API request failed|Unknown error occurred)$/i, s1 = {
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  408: "Request Timeout",
  413: "Payload Too Large",
  422: "Unprocessable Entity",
  429: "Too Many Requests",
  500: "Internal Server Error",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout"
};
function C4(n) {
  const r = n.match(E4);
  if (r)
    return r[2] ? Number(r[2]) : null;
  const i = Object.entries(s1).find(([, s]) => s.toLowerCase() === n.toLowerCase())?.[0];
  return i ? Number(i) : void 0;
}
function w4(n, { maxTokens: r, mainApi: i }) {
  const s = r ? `Max Response Tokens (${r})` : "Max Response Tokens", o = i !== void 0 && i !== "openai";
  switch (n) {
    case 400:
    case 413:
    case 422:
      return `Check that ${s} is within the model's output limit, then the profile's model and its preset's settings.`;
    case 401:
    case 403:
      return "Check the API key of the profile's connection.";
    case 402:
      return "Check the account's credits or billing.";
    case 404:
      return "Check the profile's model and API URL.";
    case 408:
    case 504:
      return "The provider took too long to answer. Try again later.";
    case 429:
      return "Rate limit or quota reached. Wait and try again, or check the account's quota.";
  }
  return n && n >= 500 ? "The provider had a problem. Try again later." : o ? `Check that the server is running, its model is loaded, and ${s} is within its limit.` : `Check that ${s} is within the model's output limit, the profile's model exists and its API key is valid.`;
}
function A4(n, r) {
  return `${n ? `${s1[n] ?? "The request failed"} (HTTP ${n})` : "The request failed"}. ${w4(n, r)} SillyTavern didn't pass on the provider's reason; it's in the SillyTavern server console.`;
}
class l1 extends Error {
  constructor(r, i, s = {}) {
    const o = i?.message === "API request failed" && i?.cause ? i.cause : i, c = o?.message || String(o), h = C4(c.trim()), m = h === void 0 ? c : A4(h, s), g = r?.model ? `${r?.name} (${r.model})` : r?.name;
    super(`${g ? `${g}: ` : ""}${m}`, { cause: i }), this.name = "RequestError";
  }
}
function xu(n, r = SillyTavern.getContext()) {
  if (!n)
    throw new Error("No connection profile selected.");
  const i = r.ConnectionManagerRequestService, s = i.getProfile(n), o = i.validateProfile(s), c = o.selected, h = s.preset ? r.getPresetManager?.(c)?.getCompletionPresetByName(s.preset) : void 0;
  return { profile: s, mainApi: c, source: o.source, preset: h };
}
function T4(n) {
  const r = n.mainApi === "openai" ? n.preset?.openai_max_context : n.preset?.max_length;
  return typeof r == "number" && r > 0 ? r : void 0;
}
function o1(n, r, i = SillyTavern.getContext()) {
  return r.maxContextType === "custom" && r.maxContextValue > 0 ? r.maxContextValue : T4(n) ?? Number(i.maxContext);
}
async function pu(n, r, i, s = {}, o) {
  const c = SillyTavern.getContext(), h = c.ConnectionManagerRequestService, m = xu(n, c), { profile: g, mainApi: v } = m, _ = v !== "openai", b = b4(r, v), y = { stream: !1, signal: o, extractData: _ };
  let p = s, f;
  try {
    const x = await x4(c, m, b, i);
    x && (y.includePreset = !1, p = { ...x, ...s }), o?.throwIfAborted(), f = await h.sendRequest(n, b, i, y, p);
  } catch (x) {
    throw o?.aborted ? new DOMException("Request aborted by user", "AbortError") : new l1(g, x, { maxTokens: i, mainApi: v });
  }
  if (o?.aborted)
    throw new DOMException("Request aborted by user", "AbortError");
  let S;
  if (_) {
    const x = f?.content, T = typeof x == "string" ? x : "", w = ky(c, g, T);
    S = Ny({}, w, i), S = { ...S, structured: x !== null && typeof x == "object" ? x : void 0, hasReasoning: S.hasReasoning || !!f?.reasoning || w !== T };
  } else {
    const x = c.extractMessageFromData(f, v), T = ky(c, g, x);
    S = Ny(f, T, i, !!p.json_schema), S = { ...S, hasReasoning: S.hasReasoning || T !== x };
  }
  return O4(S, c);
}
const D4 = 0.9;
async function O4(n, r) {
  if (n.finishReason !== void 0 || !n.text || typeof r.getTokenCountAsync != "function")
    return n;
  try {
    if (await r.getTokenCountAsync(n.text) >= n.maxTokens * D4)
      return { ...n, truncated: !0, truncationEstimated: !0 };
  } catch (i) {
    console.warn("Could not count response tokens", i);
  }
  return n;
}
async function N4(n, r, i, s) {
  const o = await pu(n, r, i, {}, s);
  if (Vh(o))
    throw new Error(Yh(o));
  return o.truncated && Ae("warning", r1(o)), o.text;
}
class wh extends Error {
}
function Ry(n, r, i) {
  let s = n.structured;
  if (s === void 0) {
    if (Vh(n))
      throw new Error(Yh(n));
    try {
      s = MS(n.text);
    } catch (c) {
      throw n.truncated ? new Error(_4(n)) : (console.error("Raw response:", n.text), new wh(
        `Model response is not valid JSON (${c?.message ?? c}). ${mv(n.text)}`
      ));
    }
  }
  const o = r.safeParse(s);
  if (!o.success) {
    const c = o.error.issues;
    console.error("Zod validation failed:", c), console.error("Raw response:", n.text, "Parsed:", s);
    const h = c.slice(0, 3).map((g) => `${g.path.join(".") || "(root)"}: ${g.message}`).join("; "), m = n.structured !== void 0 ? JSON.stringify(n.structured) : n.text;
    throw new wh(
      `Model response failed schema validation for ${i} (${h}${c.length > 3 ? "; …" : ""}). ` + mv(m)
    );
  }
  return o.data;
}
const jy = /* @__PURE__ */ new Set();
function M4(n) {
  return `${n}:${xu(n).profile.model ?? ""}`;
}
async function k4(n, r, i, s, o, c) {
  const h = a3(i), m = M4(n);
  let g;
  if (!jy.has(m))
    try {
      const x = await pu(
        n,
        r,
        o,
        { json_schema: { name: s, strict: !0, value: h } },
        c
      );
      return Ry(x, i, s);
    } catch (x) {
      if (!(x instanceof l1 || x instanceof wh))
        throw x;
      console.warn("Native structured output failed, asking for JSON in the prompt instead:", x), g = x;
    }
  const v = ft.getSettings(), _ = v.prompts.reviseJsonPrompt?.content;
  if (!_)
    throw new Error('The "Revise Session (JSON Mode)" prompt template is missing.');
  const b = {
    example_response: g4(h),
    schema: JSON.stringify(h, null, 2)
  };
  let y;
  try {
    y = bi.compile(_, { noEscape: !0, strict: !0 })(b);
  } catch (x) {
    const T = v.prompts.reviseJsonPrompt?.label ?? "reviseJsonPrompt";
    throw new Error(
      `Failed to render the "${T}" prompt template: ${x?.message ?? x}. Available variables: ${Object.keys(b).join(", ")}.`
    );
  }
  const p = { role: "system", content: y }, f = await pu(n, [...r, p], o, {}, c), S = Ry(f, i, s);
  return g && (jy.add(m), Ae(
    "info",
    `Native structured output didn't work for this profile, so JSON is asked for in the prompt until the page is reloaded. ${g.message}`
  )), S;
}
const On = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], qs = "alternate_greetings_";
function mu(n, r = {}) {
  const i = (h, m, g) => ({
    id: h,
    label: m.label,
    value: m.value,
    group: g
  }), s = On.filter((h) => n[h]).map((h) => i(h, n[h], "core")), o = Object.keys(n).filter((h) => h.startsWith(qs)).sort((h, m) => parseInt(h.slice(qs.length)) - parseInt(m.slice(qs.length))).map((h) => i(h, n[h], "alternate_greetings")), c = Object.entries(r).map(([h, m]) => i(h, m, "draft"));
  return [...s, ...o, ...c];
}
function R4(n, r, i = {}) {
  return i[n]?.label || r[n]?.label || n;
}
function j4(n, r, i) {
  if (!i)
    return n;
  const s = r.startsWith(qs);
  return Object.fromEntries(
    Object.entries(n).filter(([o]) => {
      const c = o.startsWith(qs);
      return s ? !(c && o !== r || o === "first_mes") : !c;
    })
  );
}
function z4(n, r) {
  let i = 0, s = r;
  switch (n.type) {
    case "none":
      return null;
    case "first":
      s = Math.min(r, n.first ?? 10);
      break;
    case "last":
      i = Math.max(0, r - (n.last ?? 10));
      break;
    case "range":
      i = Math.max(0, n.range?.start ?? 0), s = Math.min(r, (n.range?.end ?? 10) + 1);
      break;
  }
  return i < s ? [i, s] : null;
}
async function L4(n, r, i) {
  const s = [];
  let o = 0;
  for (let c = n.length - 1; c >= 0 && (o += await i(n[c].content), !(o > r)); c--)
    s.unshift(n[c]);
  return { messages: s, dropped: n.length - s.length };
}
function B4(n, [r, i], { includeNames: s, regex: o }) {
  const c = [];
  for (let h = r; h < i; h++) {
    const m = n[h];
    if (!m || m.is_system || typeof m.mes != "string")
      continue;
    const g = o(m.mes, !!m.is_user, n.length - h - 1);
    g.trim() && c.push({
      role: m.is_user ? "user" : "assistant",
      content: s && m.name ? `${m.name}: ${g}` : g
    });
  }
  return c;
}
async function u1(n, r, {
  selection: i,
  contextSize: s,
  maxResponseTokens: o
}) {
  if (r === -1)
    return n;
  const c = n.slice(0, r), h = n.slice(r + 1), m = SillyTavern.getContext(), g = m.chat ?? [], v = or !== void 0 || ma ? z4(i, g.length) : null;
  if (!v)
    return [...c, ...h];
  const _ = async (S) => S ? await m.getTokenCountAsync(S) : 0;
  let b = 0;
  for (const S of [...c, ...h])
    b += await _(typeof S.content == "string" ? S.content : "");
  const y = s - o - b, p = B4(g, v, {
    includeNames: !!ma,
    regex: (S, x, T) => $b(S, x ? Ig.USER_INPUT : Ig.AI_OUTPUT, {
      isPrompt: !0,
      depth: T
    })
  }), f = await L4(p, y, _);
  return f.dropped > 0 && Ae("warning", U4(f.messages.length, p.length, s)), [...c, ...f.messages, ...h];
}
function U4(n, r, i) {
  const s = 'Raise "Max Context Tokens" or lower "Max Response Tokens" to send more.';
  return n === 0 ? `No chat messages were sent: none of the ${r} fit in the ${i}-token context after the response tokens and the other prompts. ${s}` : `Only the last ${n} of ${r} chat messages fit in the ${i}-token context, so the older ones were left out. ${s}`;
}
const Pn = SillyTavern.getContext(), lr = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
}, P4 = "Continue the current text of the {{targetField}} field from exactly where it stops. Output only the new text that comes after it. Do not repeat, rewrite or summarize the existing text.";
new Yy("dumb", {}).getSettings();
async function I4({
  profileId: n,
  userPrompt: r,
  messageSelection: i,
  continueFrom: s,
  session: o,
  allCharacters: c,
  entriesGroupByWorldName: h,
  promptSettings: m,
  mainContextList: g,
  includeUserMacro: v,
  maxResponseToken: _,
  targetField: b
}) {
  const y = xu(n), p = {};
  p.char = vt(o.fields.name.value) || "{{char}}", p.user = v && Ug ? Ug : "{{user}}", p.persona = "{{persona}}", p.targetField = b, p.targetLabel = vt(R4(b, o.fields, o.draftFields)), p.userInstructions = vt(r.trim()), p.fieldSpecificInstructions = vt(
    o.draftFields[b]?.prompt ?? o.fields[b]?.prompt
  );
  {
    const T = [];
    o.selectedCharacterIndexes.forEach((w) => {
      const N = parseInt(w), C = c[N];
      C && T.push(C);
    }), p.characters = vt(T);
  }
  {
    const T = {};
    Object.entries(h).filter(
      ([w, N]) => N.length > 0 && o.selectedWorldNames.includes(w) && N.some((C) => !C.disable)
    ).forEach(([w, N]) => {
      T[w] = N.filter((C) => !C.disable);
    }), p.lorebooks = vt(T);
  }
  {
    const T = {}, w = {}, N = {}, C = ft.getSettings().contextToSend.dontSendOtherGreetings, O = j4(o.fields, b, C);
    Object.entries(O).forEach(([R, Z]) => {
      On.includes(R) ? T[Z.label] = Z.value : R.startsWith("alternate_greetings_") && (w[R] = Z.value);
    }), Object.entries(o.draftFields || {}).forEach(([R, Z]) => {
      N[Z.label] = Z.value;
    });
    const z = {};
    Object.keys(T).length > 0 && (z.core = T), Object.keys(w).length > 0 && (z.alternate_greetings = w), Object.keys(N).length > 0 && (z.draft = N), p.fields = vt(z), p.fieldList = vt(mu(O, o.draftFields));
  }
  let f = [], S = -1;
  {
    for (const T of g) {
      if (T.promptName === "chatHistory") {
        S = f.length, f.push({ role: "system", content: "" });
        continue;
      }
      let w = structuredClone(p);
      T.promptName === "stDescription" && (w.char = "{{char}}", w.user = "{{user}}");
      const N = m[T.promptName];
      if (!N)
        continue;
      const C = {
        role: T.role,
        content: Zs(N.content, w, Pn.substituteParams)
      };
      C.content && f.push(C);
    }
    s && (f.push({
      role: "user",
      content: bi.compile(P4, { noEscape: !0 })(p)
    }), f.push({
      role: "assistant",
      content: s.trim()
    }));
  }
  f = await u1(f, S, {
    selection: i,
    contextSize: o1(y, ft.getSettings()),
    maxResponseTokens: _
  });
  const x = await pu(n, f, _);
  if (Vh(x) && (!s || x.truncated))
    throw new Error(Yh(x));
  if (x.truncated && Ae("warning", r1(x)), s) {
    const T = jS(s, x.text);
    return T.trim() === s.trim() ? (Ae("warning", "The model didn't add any text. Try again or use a different model."), s) : T;
  }
  return b0(x.text);
}
function H4(n, r) {
  const i = n.match(/\d+/g)?.map(Number) ?? [], s = r.match(/\d+/g)?.map(Number) ?? [];
  for (let o = 0; o < Math.max(i.length, s.length); o++) {
    const c = (i[o] ?? 0) - (s[o] ?? 0);
    if (c !== 0) return c;
  }
  return 0;
}
async function q4(n, r) {
  let i, s = n.formatVersion;
  for (; ; ) {
    const o = (h) => H4(h.to, s) > 0, c = r.find((h) => h.from === s && o(h)) ?? r.find((h) => h.from === "*" && o(h));
    if (!c) return i;
    i = await c.action(i ?? structuredClone(n)), i.formatVersion = c.to, s = c.to;
  }
}
function Z4(n, r) {
  const i = { ...n.prompts };
  for (const [s, o] of Object.entries(r))
    i[s]?.isDefault && (i[s] = { ...i[s], content: o });
  return { ...n, prompts: i };
}
function G4(n) {
  const { outputFormat: r, defaultPromptEngineeringMode: i, ...s } = n, { xmlFormat: o, jsonFormat: c, reviseXmlPrompt: h, ...m } = n.prompts ?? {};
  return {
    ...s,
    maxContextType: n.maxContextType === "custom" ? "custom" : "profile",
    prompts: m
  };
}
function F4(n, r) {
  const { noneFormat: i, ...s } = n.prompts ?? {}, o = i?.content ?? r, c = /\{\{\{?\s*activeFormatInstructions\s*\}?\}\}/g;
  for (const [m, g] of Object.entries(s))
    typeof g?.content == "string" && g.content.match(c) && (s[m] = { ...g, content: g.content.replace(c, () => o) });
  s.outputFormatInstructions && (s.outputFormatInstructions = {
    ...s.outputFormatInstructions,
    isDefault: s.outputFormatInstructions.content === r
  });
  const h = Object.fromEntries(
    Object.entries(n.mainContextTemplatePresets ?? {}).map(([m, g]) => [
      m,
      { ...g, prompts: (g.prompts ?? []).filter((v) => v.promptName !== "noneFormat") }
    ])
  );
  return { ...n, prompts: s, mainContextTemplatePresets: h };
}
const pa = "SillyTavern-Character-Creator", Xh = "0.5.0", V4 = "F_1.13", c1 = {
  EXTENSION: "charCreator"
}, Y4 = [
  "stDescription",
  "charDefinitions",
  "lorebookDefinitions",
  "worldInfoCharDefinition",
  "existingFieldDefinitions",
  "taskDescription",
  "outputFormatInstructions",
  "personaDescription",
  "reviseJsonPrompt",
  "reviseTaskDescription"
], mt = {
  stDescription: tu,
  charDefinitions: bh,
  lorebookDefinitions: v0,
  worldInfoCharDefinition: y0,
  existingFieldDefinitions: Is,
  taskDescription: Bh,
  outputFormatInstructions: pi,
  personaDescription: CS,
  reviseJsonPrompt: wS,
  reviseTaskDescription: AS
}, f1 = {
  version: Xh,
  formatVersion: V4,
  profileId: "",
  maxContextType: "profile",
  maxContextValue: 16384,
  maxResponseToken: 1024,
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
  // Updated prompts structure
  prompts: {
    stDescription: {
      content: mt.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: mt.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: mt.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    worldInfoCharDefinition: {
      content: mt.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: Is,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: Bh,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: pi,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: mt.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: mt.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseTaskDescription: {
      content: mt.reviseTaskDescription,
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
function h1(n) {
  const i = n.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let s = !1;
  return i.map((o, c) => {
    const h = o.replace(/^\d+/, "");
    if (h) {
      const m = s ? `${h[0].toUpperCase()}${h.slice(1).toLowerCase()}` : h.toLowerCase();
      return s || (s = !0), m;
    }
    return "";
  }).join("");
}
const ft = new Yy(c1.EXTENSION, f1);
async function X4() {
  return new Promise((n, r) => {
    ft.initializeSettings({ strategy: [] }).then(
      () => q4(ft.getSettings(), [
        {
          from: "*",
          to: "F_1.4",
          action(i) {
            return {
              profileId: i?.profileId ?? "",
              maxContextType: i?.maxContextType ?? "profile",
              maxContextValue: i?.maxContextValue ?? 16384,
              maxResponseToken: i?.maxResponseToken ?? 1024,
              contextToSend: {
                ...i?.contextToSend,
                persona: !0
              },
              // Updated prompts structure
              prompts: {
                stDescription: {
                  content: mt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: mt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: mt.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                noneFormat: {
                  content: pi,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: mt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: Is,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: Bh,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: pi,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: mt.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Generic Prompt Presets
              promptPreset: i?.promptPreset ?? "default",
              promptPresets: i?.promptPresets ?? {
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
              showSaveAsWorldInfoEntry: i?.showSaveAsWorldInfoEntry ?? {
                show: i?.showSaveAsWorldInfoEntry.show ?? !1
              }
            };
          }
        },
        {
          from: "F_1.4",
          to: "F_1.5",
          action(i) {
            return {
              ...i,
              // Update persona
              prompts: {
                ...i?.prompts,
                personaDescription: {
                  content: mt.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Reset default main context
              mainContextTemplatePresets: {
                ...i?.mainContextTemplatePresets,
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
          async action(i) {
            return await Ae("info", `[${pa}] Added Alternate Greetings.`), {
              ...i,
              prompts: {
                ...i?.prompts,
                stDescription: {
                  content: mt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: mt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: mt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: Is,
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
          async action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = tu), s;
          }
        },
        {
          from: "F_1.7",
          to: "F_1.8",
          action(i) {
            const s = {
              ...i
            };
            return s.prompts || (s.prompts = {}), s.prompts.reviseJsonPrompt = {
              content: mt.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: mt.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = bh), i.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = v0), i.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = Is), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = tu), s;
          }
        },
        {
          from: "F_1.9",
          to: "F_1.10",
          action(i) {
            const s = {
              ...i
            };
            return i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = bh), i.prompts.worldInfoCharDefinition.isDefault && (s.prompts.worldInfoCharDefinition.content = y0), s;
          }
        },
        {
          from: "F_1.10",
          to: "F_1.11",
          action(i) {
            return Z4(i, {
              stDescription: tu,
              noneFormat: pi
            });
          }
        },
        {
          from: "F_1.11",
          to: "F_1.12",
          action(i) {
            return G4(i);
          }
        },
        {
          from: "F_1.12",
          to: "F_1.13",
          action(i) {
            return F4(i, pi);
          }
        }
      ])
    ).then((i) => {
      i && (Pn.extensionSettings[c1.EXTENSION] = { ...i, version: Xh }, ft.saveSettings()), n();
    }).catch((i) => {
      console.error(`[${pa}] Error initializing settings:`, i), Ae("error", `[${pa}] Failed to initialize settings: ${i.message}`), Pn.Popup.show.confirm(
        `[${pa}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (ft.resetSettings(), Ae("success", `[${pa}] Settings reset. Reloading may be required.`), n());
      });
    });
  });
}
const ce = ({ children: n, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = ne.useMemo(() => {
    const c = [];
    return i || c.push("menu_button", "interactable"), c.push(r), c.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("button", { className: o, ...s, children: n });
}, d1 = ({ label: n, className: r, overrideDefaults: i = !1, type: s = "text", ...o }) => {
  const c = ne.useMemo(() => {
    const h = [];
    return i || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && h.push("text_pole"), h.push(r), h.filter(Boolean).join(" ");
  }, [i, r, s]);
  if (s === "checkbox") {
    const h = i ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ A.jsxs("label", { className: h, children: [
      /* @__PURE__ */ A.jsx("input", { type: "checkbox", ...o }),
      n && /* @__PURE__ */ A.jsx("span", { children: n })
    ] });
  }
  return /* @__PURE__ */ A.jsx("input", { type: s, className: c, ...o });
}, Si = ({ children: n, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = ne.useMemo(() => {
    const c = [];
    return i || c.push("text_pole"), c.push(r), c.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("select", { className: o, ...s, children: n });
}, bn = ({ children: n, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = ne.useMemo(() => {
    const c = [];
    return i || c.push("text_pole", "textarea_compact"), c.push(r), c.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("textarea", { className: o, ...s, children: n });
};
var Q4 = Fy(), on = /* @__PURE__ */ ((n) => (n[n.TEXT = 1] = "TEXT", n[n.CONFIRM = 2] = "CONFIRM", n[n.INPUT = 3] = "INPUT", n[n.DISPLAY = 4] = "DISPLAY", n))(on || {}), Ur = /* @__PURE__ */ ((n) => (n[n.AFFIRMATIVE = 1] = "AFFIRMATIVE", n[n.NEGATIVE = 0] = "NEGATIVE", n[n.CANCELLED = null] = "CANCELLED", n))(Ur || {});
const $4 = SillyTavern.getContext(), yi = ({
  content: n,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: o = !1,
  onComplete: c
}) => {
  var h;
  const m = ne.useRef(null), g = ne.useRef(null), [v, _] = ne.useState(!1), [b, y] = ne.useState(null), p = ne.useRef($4.uuidv4()), f = ne.useRef({
    id: p.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  ne.useEffect(() => {
    const w = m.current;
    if (!w) return;
    const N = (C) => {
      C.preventDefault(), o || S(Ur.CANCELLED);
    };
    return w.addEventListener("cancel", N), f.current.dlg = w, f.current.mainInput = g.current, si.util.popups.push(f.current), w.showModal || (w.classList.add("poly_dialog"), qg.registerDialog(w), new ResizeObserver((C) => {
      for (const O of C)
        qg.reposition(O.target);
    }).observe(w)), w.showModal(), zf(), () => {
      Hg(si.util.popups, f.current), zf(), w.removeEventListener("cancel", N);
    };
  }, []);
  const S = async (w) => {
    var N, C;
    let O = w;
    if (r === on.INPUT && (w >= Ur.AFFIRMATIVE ? O = (N = g.current) == null ? void 0 : N.value : w === Ur.NEGATIVE ? O = !1 : w === Ur.CANCELLED ? O = null : O = !1), (C = s.customInputs) != null && C.length) {
      const R = new Map(
        s.customInputs.map((Z) => {
          var te;
          const $ = (te = m.current) == null ? void 0 : te.querySelector(`#${Z.id}`);
          return [$.id, $.checked];
        })
      );
      f.current.inputResults = R;
    }
    if (f.current.result = w, f.current.value = O, s.onClosing && !await s.onClosing(f.current)) {
      _(!0), f.current.value = void 0, f.current.result = void 0, f.current.inputResults = void 0;
      return;
    }
    _(!1), si.util.lastResult = {
      value: O,
      result: w,
      inputResults: f.current.inputResults
    };
    const z = m.current;
    z && (z.setAttribute("closing", ""), zf(), Y_(z, async () => {
      var R;
      if (z.close(), s.onClose && await s.onClose(f.current), Hg(si.util.popups, f.current), si.util.popups.length > 0) {
        const Z = (R = document.activeElement) == null ? void 0 : R.closest(".popup"), te = Z?.getAttribute("data-id"), $ = si.util.popups.find((Q) => Q.id === te);
        $ && $.lastFocus && $.lastFocus.focus();
      }
      c(O);
    }));
  }, x = (w) => {
    w.target instanceof HTMLElement && w.target !== m.current && (y(w.target), f.current.lastFocus = w.target);
  }, T = async (w) => {
  };
  return Q4.createPortal(
    /* @__PURE__ */ A.jsx(
      "dialog",
      {
        ref: m,
        className: (() => {
          const w = ["popup"];
          return s.wide && w.push("wide_dialogue_popup"), s.wider && w.push("wider_dialogue_popup"), s.large && w.push("large_dialogue_popup"), s.transparent && w.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && w.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && w.push("vertical_scrolling_dialogue_popup"), s.animation && w.push(`popup--animation-${s.animation}`), w.join(" ");
        })(),
        "data-id": p.current,
        onKeyDown: T,
        onFocus: x,
        children: /* @__PURE__ */ A.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ A.jsx("div", { className: "popup-content", children: n }),
          r === on.INPUT && /* @__PURE__ */ A.jsx(
            "textarea",
            {
              ref: g,
              className: "popup-input text_pole result-control auto-select",
              rows: s.rows ?? 1,
              defaultValue: i,
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
          r !== on.DISPLAY && /* @__PURE__ */ A.jsxs("div", { className: "popup-controls", children: [
            (h = s.customButtons) == null ? void 0 : h.map((w, N) => {
              const C = typeof w == "string" ? { text: w, result: N + 2 } : w;
              return /* @__PURE__ */ A.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${C.classes ?? ""}`,
                  "data-result": C.result,
                  onClick: () => {
                    var O;
                    (O = C.action) == null || O.call(C), S(C.result ?? N + 2);
                  },
                  "data-i18n": C.text,
                  children: C.text
                },
                N
              );
            }),
            r !== on.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => S(Ur.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== on.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => S(Ur.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === on.DISPLAY && /* @__PURE__ */ A.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => S(Ur.CANCELLED),
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
}, Ts = (n, r, i) => {
  if (!n || !n.api)
    return !1;
  const s = i[n.api];
  if (!s || !Object.hasOwn(r, s.selected))
    return !1;
  switch (s.selected) {
    case "openai":
      return !!s.source;
    case "textgenerationwebui":
      return !!s.type;
  }
  return !1;
}, ir = SillyTavern.getContext(), p1 = ({
  initialSelectedProfileId: n,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: s,
  onCreate: o,
  onUpdate: c,
  onDelete: h
}) => {
  const [m, g] = ne.useState(n ?? ""), [v, _] = ne.useState(Date.now()), { isEnabled: b, profiles: y, connectApiMap: p } = ne.useMemo(() => {
    var x, T;
    return (x = ir.extensionSettings.disabledExtensions) != null && x.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((T = ir.extensionSettings.connectionManager) == null ? void 0 : T.profiles) ?? [],
      connectApiMap: ir.CONNECT_API_MAP
    };
  }, [v]);
  ne.useEffect(() => {
    if (!b) return;
    const x = (N) => {
      Ts(N, r, p) && (_(Date.now()), o?.(N));
    }, T = (N, C) => {
      const O = Ts(N, r, p), z = Ts(C, r, p);
      (O || z) && _(Date.now()), c?.(N, C), m === N.id && !z && (g(""), s?.(void 0));
    }, w = (N) => {
      Ts(N, r, p) && (_(Date.now()), h?.(N), m === N.id && (g(""), s?.(void 0)));
    };
    return ir.eventSource.on("CONNECTION_PROFILE_CREATED", x), ir.eventSource.on("CONNECTION_PROFILE_UPDATED", T), ir.eventSource.on("CONNECTION_PROFILE_DELETED", w), () => {
      ir.eventSource.removeListener("CONNECTION_PROFILE_CREATED", x), ir.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", T), ir.eventSource.removeListener("CONNECTION_PROFILE_DELETED", w);
    };
  }, [b, m, r, p, s, o, c, h]);
  const f = ne.useMemo(() => {
    if (!b) return [];
    const x = y.filter((w) => Ts(w, r, p)), T = {};
    for (const [w, N] of Object.entries(r))
      T[w] = { label: N, profiles: [] };
    for (const w of x) {
      const N = p[w.api];
      T[N.selected] && T[N.selected].profiles.push(w);
    }
    for (const w of Object.values(T))
      w.profiles.sort((N, C) => (N.name ?? "").localeCompare(C.name ?? ""));
    return Object.values(T).filter((w) => w.profiles.length > 0);
  }, [b, y, r, p]), S = ne.useCallback(
    (x) => {
      const T = x.target.value;
      g(T);
      const w = y.find((N) => N.id === T);
      s?.(w);
    },
    [y, s]
  );
  return b ? /* @__PURE__ */ A.jsxs(Si, { value: m, onChange: S, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: i }),
    f.map((x) => /* @__PURE__ */ A.jsx("optgroup", { label: x.label, children: x.profiles.map((T) => /* @__PURE__ */ A.jsx("option", { value: T.id, children: T.name }, T.id)) }, x.label))
  ] }) : /* @__PURE__ */ A.jsx(Si, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, K4 = nu.memo(
  ({ item: n, showToggleButton: r, showDeleteButton: i, showSelectInput: s, onToggle: o, onDelete: c, onSelectChange: h }) => {
    const {
      id: m,
      label: g,
      enabled: v,
      canDelete: _ = !0,
      canToggle: b = !0,
      showSelect: y = !0,
      canSelect: p = !0,
      selectOptions: f = [],
      selectValue: S
    } = n, x = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !v ? 0.6 : 1
    }, T = { cursor: "pointer", flexShrink: 0 }, w = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ A.jsxs("li", { className: "sortable-list-item", style: x, "data-id": m, children: [
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
          children: g
        }
      ),
      s && y && p && /* @__PURE__ */ A.jsx(
        Si,
        {
          value: S,
          onChange: (N) => h(m, N.target.value),
          disabled: !v,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: f.length === 0 ? /* @__PURE__ */ A.jsx("option", { disabled: !0, children: "--" }) : f.map((N) => /* @__PURE__ */ A.jsx("option", { value: N.value, children: N.label }, N.value))
        }
      ),
      s && (!y || !p) && /* @__PURE__ */ A.jsx("span", { style: w }),
      r && b && /* @__PURE__ */ A.jsx(
        ce,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${v ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...T,
            marginRight: "10px",
            fontSize: "1.2em",
            color: v ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => o(m)
        }
      ),
      r && !b && /* @__PURE__ */ A.jsx("span", { style: w }),
      i && _ && /* @__PURE__ */ A.jsx(
        ce,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...T,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => c(m)
        }
      ),
      i && !_ && /* @__PURE__ */ A.jsx("span", { style: { ...w, marginRight: 0 } })
    ] });
  }
), J4 = ({
  items: n,
  onItemsChange: r,
  showToggleButton: i = !1,
  showDeleteButton: s = !1,
  showSelectInput: o = !1,
  sortableJsOptions: c = {}
}) => {
  const h = ne.useRef(null), m = ne.useRef(null);
  ne.useEffect(() => (h.current && (m.current = Ee.create(h.current, {
    handle: ".drag-handle",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    filter: "select, button, .toggle-button, .delete-button",
    // Prevent drag on controls
    preventOnFilter: !1,
    ...c,
    onEnd: (b) => {
      const { oldIndex: y, newIndex: p } = b;
      if (y === void 0 || p === void 0 || y === p)
        return;
      const f = Array.from(n), [S] = f.splice(y, 1);
      f.splice(p, 0, S), r(f);
    }
  })), () => {
    var b;
    (b = m.current) == null || b.destroy(), m.current = null;
  }), [n, r, c]);
  const g = (b) => {
    r(n.map((y) => y.id === b ? { ...y, enabled: !y.enabled } : y));
  }, v = (b) => {
    r(n.filter((y) => y.id !== b));
  }, _ = (b, y) => {
    r(n.map((p) => p.id === b ? { ...p, selectValue: y } : p));
  };
  return /* @__PURE__ */ A.jsx("ul", { ref: h, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((b) => /* @__PURE__ */ A.jsx(
    K4,
    {
      item: b,
      showToggleButton: i,
      showDeleteButton: s,
      showSelectInput: o,
      onToggle: g,
      onDelete: v,
      onSelectChange: _
    },
    b.id
  )) });
}, Vo = ({
  items: n,
  value: r,
  onChange: i,
  placeholder: s = "Select items...",
  closeOnSelect: o = !1,
  multiple: c = !0,
  disabled: h = !1,
  onBeforeSelection: m,
  enableSearch: g = !1,
  searchPlaceholder: v = "Search...",
  searchNoResultsText: _ = "No results found",
  searchFuseOptions: b,
  inputClasses: y,
  containerClasses: p
}) => {
  const [f, S] = ne.useState(!1), [x, T] = ne.useState(""), w = ne.useRef(null);
  ne.useEffect(() => {
    const R = (Z) => {
      w.current && !w.current.contains(Z.target) && S(!1);
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, []), ne.useEffect(() => {
    f || T("");
  }, [f]);
  const N = ne.useMemo(() => {
    if (!g) return null;
    const R = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...b
    };
    return new xi(n, R);
  }, [n, g, b]), C = ne.useMemo(() => !g || !x.trim() || !N ? n : N.search(x.trim()).map((R) => R.item), [n, x, g, N]), O = async (R) => {
    let Z;
    c ? Z = r.includes(R) ? r.filter((te) => te !== R) : [...r, R] : Z = r.includes(R) ? [] : [R], !(m && !await Promise.resolve(m(r, Z))) && (i(Z), o && S(!1));
  }, z = ne.useMemo(() => {
    var R;
    return r.length === 0 ? s : r.length === 1 ? ((R = n.find((Z) => Z.value === r[0])) == null ? void 0 : R.label) ?? r[0] : `${r.length} items selected`;
  }, [r, n, s]);
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      ref: w,
      className: `fancy-dropdown-container ${p ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: h ? 0.6 : 1,
        pointerEvents: h ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !h && S(!f),
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
              /* @__PURE__ */ A.jsx("span", { className: "fancy-dropdown-trigger-text", children: z }),
              /* @__PURE__ */ A.jsx("i", { className: `fas ${f ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        f && /* @__PURE__ */ A.jsxs(
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
              g && /* @__PURE__ */ A.jsx(
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
                    d1,
                    {
                      type: "text",
                      placeholder: v,
                      value: x,
                      onChange: (R) => T(R.target.value),
                      autoFocus: !0,
                      className: y
                    }
                  )
                }
              ),
              /* @__PURE__ */ A.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: C.length > 0 ? C.map((R) => /* @__PURE__ */ A.jsx(
                W4,
                {
                  item: R,
                  isSelected: r.includes(R.value),
                  onClick: O
                },
                R.value
              )) : /* @__PURE__ */ A.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: _
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, W4 = nu.memo(({ item: n, isSelected: r, onClick: i }) => {
  const [s, o] = ne.useState(!1);
  return /* @__PURE__ */ A.jsxs(
    "li",
    {
      onClick: () => i(n.value),
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
        /* @__PURE__ */ A.jsx("span", { children: n.label }),
        r && /* @__PURE__ */ A.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), lh = SillyTavern.getContext(), Ah = ({
  value: n,
  items: r,
  readOnlyValues: i = [],
  label: s,
  onChange: o,
  onItemsChange: c,
  enableCreate: h = !1,
  enableRename: m = !1,
  enableDelete: g = !1,
  onCreate: v,
  onRename: _,
  onDelete: b,
  buttons: y
}) => {
  const p = ne.useMemo(() => r.find((w) => w.value === n), [r, n]), f = ne.useCallback((w) => w ? i.includes(w) : !1, [i]), S = async () => {
    const w = await lh.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!w || w.trim() === "") return;
    const N = w.trim();
    if (r.some((O) => O.value === N)) {
      await Ae("warning", `A ${s} with this name already exists.`);
      return;
    }
    let C = { value: N, label: N };
    if (v) {
      const O = await Promise.resolve(v(N));
      if (!O.confirmed) return;
      O.value && (typeof O.value == "string" ? C = { value: O.value, label: O.value } : C = O.value);
    }
    c([...r, C]), o(C.value, n);
  }, x = async () => {
    if (!p) {
      await Ae("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (f(p.value)) {
      await Ae("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const w = await lh.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${p.label}":`,
      p.label
    );
    if (!w || w.trim() === "" || w.trim() === p.value) return;
    const N = w.trim();
    if (r.some((z) => z.value === N)) {
      await Ae("warning", `A ${s} with this name already exists.`);
      return;
    }
    let C = { value: N, label: N };
    if (_) {
      const z = await Promise.resolve(_(p.value, N));
      if (!z.confirmed) return;
      z.value && (typeof z.value == "string" ? C = { value: z.value, label: z.value } : C = z.value);
    }
    const O = r.map((z) => z.value === p.value ? C : z);
    c(O), o(C.value, n);
  }, T = async () => {
    var w;
    if (!p) {
      await Ae("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (f(p.value)) {
      await Ae("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await lh.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${p.label}"?`
    ) || b && !await Promise.resolve(b(p.value)))
      return;
    const N = r.findIndex((z) => z.value === p.value), C = r.filter((z) => z.value !== p.value);
    c(C);
    let O;
    if (C.length > 0) {
      const z = Math.min(N, C.length - 1);
      O = (w = C[z]) == null ? void 0 : w.value;
    }
    o(O, n);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ A.jsx(Si, { value: n ?? "", onChange: (w) => o(w.target.value, n), children: r.map((w) => /* @__PURE__ */ A.jsx("option", { value: w.value, children: w.label }, w.value)) }),
    h && /* @__PURE__ */ A.jsx(
      ce,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: S,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    m && /* @__PURE__ */ A.jsx(
      ce,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: x,
        disabled: !p,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    g && /* @__PURE__ */ A.jsx(
      ce,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: T,
        disabled: !p,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    y?.map((w) => /* @__PURE__ */ A.jsx(
      ce,
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
}, sr = "chatHistory";
function zy(n, r) {
  return n.prompts.some((i) => i.promptName === r) ? n : { ...n, prompts: [{ promptName: r, enabled: !1, role: "system" }, ...n.prompts] };
}
function m1(n, r) {
  return { ...n, prompts: n.prompts.filter((i) => i.promptName !== r) };
}
function ew(n, r) {
  return Object.fromEntries(Object.entries(n).map(([i, s]) => [i, m1(s, r)]));
}
function tw(n, r) {
  const i = n || "prompt";
  let s = i;
  for (let o = 2; r.includes(s) || s === sr; o++)
    s = `${i}${o}`;
  return s;
}
const g1 = () => {
  const [, n] = ne.useState(0);
  return ne.useCallback(() => {
    n((i) => i + 1);
  }, []);
}, Yo = SillyTavern.getContext(), Ly = "Chat History", nw = [
  { value: "system", label: "System" },
  { value: "user", label: "User" },
  { value: "assistant", label: "Assistant" }
], oh = {
  user: { icon: "fa-user", title: "Sent as User" },
  assistant: { icon: "fa-robot", title: "Sent as Assistant" }
}, Ds = (n) => Y4.includes(n), rw = () => {
  const n = g1(), r = ft.getSettings(), [i, s] = ne.useState(sr), [o, c] = ne.useState(null), h = ne.useRef(null);
  ne.useEffect(() => {
    o && h.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [o?.promptName, !!o]);
  const m = ne.useCallback(
    (j) => {
      const F = ft.getSettings();
      j(F), ft.saveSettings(), n();
    },
    [n]
  ), g = (j) => j === sr ? Ly : r.prompts[j]?.label ?? j, v = (j) => {
    m((F) => {
      const V = F.mainContextTemplatePresets[F.mainContextTemplatePreset];
      V && (F.mainContextTemplatePresets = {
        ...F.mainContextTemplatePresets,
        [F.mainContextTemplatePreset]: j(V)
      });
    });
  }, _ = ne.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((j) => ({ value: j, label: j })),
    [r.mainContextTemplatePresets]
  ), b = ne.useMemo(
    () => [
      { value: sr, label: Ly },
      ...Object.entries(r.prompts).map(([j, F]) => ({ value: j, label: F.label || j })).sort((j, F) => j.label.localeCompare(F.label))
    ],
    [r.prompts]
  ), y = b.some((j) => j.value === i) ? i : sr, p = r.mainContextTemplatePresets[r.mainContextTemplatePreset], f = (j) => j ? p?.prompts.find((F) => F.promptName === j) : void 0, S = f(o?.promptName)?.role;
  ne.useEffect(() => {
    c((j) => j?.promptName ? { ...j, role: f(j.promptName)?.role ?? j.role } : j);
  }, [r.mainContextTemplatePreset, S]);
  const x = async (j, F) => {
    const V = j ?? "default", le = ft.getSettings().mainContextTemplatePresets;
    if (o?.inList && !le[V]?.prompts.some((pe) => pe.promptName === o.promptName)) {
      if (F && le[F] && !await $()) return;
      c(null);
    }
    m((pe) => {
      pe.mainContextTemplatePreset = V;
    });
  }, T = async () => o?.inList ? await $() ? (c(null), !0) : !1 : !0, w = (j) => {
    m((F) => {
      const V = {};
      j.forEach((le) => {
        V[le.value] = F.mainContextTemplatePresets[le.value] ?? structuredClone(
          F.mainContextTemplatePresets[F.mainContextTemplatePreset] ?? F.mainContextTemplatePresets.default
        );
      }), F.mainContextTemplatePresets = V;
    });
  }, N = (j) => {
    v((F) => ({
      ...F,
      prompts: j.map((V) => {
        const le = F.prompts.find((pe) => pe.promptName === V.id);
        return { promptName: V.id, enabled: V.enabled, role: le?.role ?? "system" };
      })
    }));
  }, C = (j) => {
    v((F) => ({
      ...F,
      prompts: F.prompts.map((V) => V.promptName === j ? { ...V, enabled: !V.enabled } : V)
    }));
  }, O = async () => {
    const j = r.mainContextTemplatePreset;
    if (!await Yo.Popup.show.confirm(
      "Restore default",
      `Reset "${j}" to the default prompt list?`
    )) return;
    const V = structuredClone(f1.mainContextTemplatePresets.default);
    if (o?.inList && !V.prompts.some((le) => le.promptName === o.promptName)) {
      if (!await $()) return;
      c(null);
    }
    v(() => V);
  }, z = () => {
    v((j) => zy(j, y));
  }, R = async () => {
    const j = y;
    j === sr || Ds(j) || !await Yo.Popup.show.confirm(
      "Delete prompt",
      `Are you sure you want to delete "${g(j)}"?`
    ) || (m((V) => {
      const { [j]: le, ...pe } = V.prompts;
      V.prompts = pe, V.mainContextTemplatePresets = ew(V.mainContextTemplatePresets, j);
    }), o?.promptName === j && c(null));
  }, Z = (j) => {
    const F = j ? r.prompts[j] : void 0;
    return {
      promptName: j,
      label: F?.label ?? "",
      content: F?.content ?? "",
      // A new prompt goes into the current template
      role: j ? f(j)?.role : "system",
      inList: !!f(j)
    };
  }, te = (j) => {
    if (!j.promptName) return j.label.trim() !== "" || j.content !== "";
    const F = r.prompts[j.promptName], V = f(j.promptName);
    return j.label !== F?.label || j.content !== F?.content || !!V && j.role !== V.role;
  }, $ = async () => !o || !te(o) || !!await Yo.Popup.show.confirm(
    "Unsaved changes",
    `Discard your changes to "${o.label.trim() || "the new prompt"}"?`
  ), Q = async (j) => {
    if (o && o.promptName === j) {
      const F = !!f(j);
      o.inList !== F && c({ ...o, inList: F });
      return;
    }
    await $() && c(Z(j));
  }, ee = async () => {
    await $() && c(null);
  }, fe = async (j) => {
    const F = !!o?.inList && o.promptName === j;
    F && !await $() || (v((V) => m1(V, j)), F && c(null));
  }, de = () => {
    if (!o) return;
    const j = !!o.promptName && Ds(o.promptName), F = o.label.trim();
    if (!j) {
      if (!F) {
        Ae("error", "Enter a name for the prompt.");
        return;
      }
      if (Object.entries(r.prompts).some(
        ([pe, Y]) => pe !== o.promptName && Y.label.toLowerCase() === F.toLowerCase()
      )) {
        Ae("error", `A prompt named "${F}" already exists.`);
        return;
      }
    }
    const V = o.promptName ?? tw(h1(F), Object.keys(r.prompts));
    m((le) => {
      le.prompts = {
        ...le.prompts,
        [V]: {
          label: j ? le.prompts[V].label : F,
          content: o.content,
          isDefault: j ? mt[V] === o.content : !1
        }
      };
      const pe = le.mainContextTemplatePresets[le.mainContextTemplatePreset];
      if (pe) {
        const Y = o.promptName ? pe : zy(pe, V);
        le.mainContextTemplatePresets = {
          ...le.mainContextTemplatePresets,
          [le.mainContextTemplatePreset]: {
            ...Y,
            prompts: Y.prompts.map(
              (me) => me.promptName === V && o.role ? { ...me, role: o.role } : me
            )
          }
        };
      }
    }), o.promptName || s(V), c(null);
  }, be = () => {
    !o?.promptName || !Ds(o.promptName) || c({ ...o, content: mt[o.promptName] });
  }, H = async () => {
    await Yo.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (ft.resetSettings(), c(null), n(), Ae("success", "Settings have been reset."));
  }, re = y !== sr && !Ds(y), ue = () => {
    if (!o) return null;
    const j = !!o.promptName && Ds(o.promptName), F = !o.promptName || !!f(o.promptName);
    return /* @__PURE__ */ A.jsxs("div", { className: "charCreator_promptEditor", ref: h, children: [
      !j && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("label", { className: "charCreator_settingsLabel", children: "Name" }),
        /* @__PURE__ */ A.jsx(
          d1,
          {
            type: "text",
            value: o.label,
            autoFocus: !o.promptName,
            onChange: (V) => c({ ...o, label: V.target.value })
          }
        )
      ] }),
      F && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("label", { className: "charCreator_settingsLabel", children: "Role" }),
        /* @__PURE__ */ A.jsx(
          Si,
          {
            value: o.role ?? "system",
            onChange: (V) => c({ ...o, role: V.target.value }),
            children: nw.map((V) => /* @__PURE__ */ A.jsx("option", { value: V.value, children: V.label }, V.value))
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx("label", { className: "charCreator_settingsLabel", children: "Prompt" }),
      /* @__PURE__ */ A.jsx(
        bn,
        {
          value: o.content,
          onChange: (V) => c({ ...o, content: V.target.value }),
          placeholder: "Prompt text",
          rows: 14,
          style: { width: "100%" }
        }
      ),
      /* @__PURE__ */ A.jsxs("div", { className: "charCreator_promptEditorButtons", children: [
        j && /* @__PURE__ */ A.jsxs(ce, { title: "Put the default text in the editor", onClick: be, children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-undo" }),
          " Restore default"
        ] }),
        /* @__PURE__ */ A.jsxs("span", { className: "charCreator_promptEditorActions", children: [
          /* @__PURE__ */ A.jsx(ce, { onClick: ee, children: "Cancel" }),
          /* @__PURE__ */ A.jsxs(ce, { onClick: de, disabled: !te(o), children: [
            /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-floppy-disk" }),
            " Save"
          ] })
        ] })
      ] })
    ] });
  }, ke = !!o?.inList, k = (p?.prompts ?? []).map((j) => {
    const F = j.promptName === sr, V = F || !!r.prompts[j.promptName], le = g(j.promptName), pe = ke && o?.promptName === j.promptName;
    return {
      id: j.promptName,
      enabled: j.enabled,
      // The whole row is drawn here (toggle included), so the editor can open under it
      label: /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsxs("div", { className: `charCreator_promptRow${j.enabled ? "" : " charCreator_promptRowOff"}`, children: [
          /* @__PURE__ */ A.jsxs("span", { className: "charCreator_promptName", title: le, children: [
            /* @__PURE__ */ A.jsx("span", { className: "charCreator_promptNameText", children: le }),
            !F && oh[j.role] && /* @__PURE__ */ A.jsx(
              "span",
              {
                className: `charCreator_promptRole fa-xs fa-solid ${oh[j.role].icon}`,
                title: oh[j.role].title
              }
            )
          ] }),
          /* @__PURE__ */ A.jsx(
            ce,
            {
              overrideDefaults: !0,
              className: "charCreator_promptAction caution fa-solid fa-chain-broken",
              title: "Remove from this template",
              onClick: () => fe(j.promptName)
            }
          ),
          V && !F ? (
            // While the editor is open under the row, the same button closes it
            /* @__PURE__ */ A.jsx(
              ce,
              {
                overrideDefaults: !0,
                className: `charCreator_promptAction fa-solid ${pe ? "fa-xmark" : "fa-pencil"}`,
                title: pe ? "Close editor" : "Edit prompt",
                onClick: () => pe ? ee() : Q(j.promptName)
              }
            )
          ) : /* @__PURE__ */ A.jsx("span", { className: "charCreator_promptAction" }),
          /* @__PURE__ */ A.jsx(
            ce,
            {
              overrideDefaults: !0,
              className: `charCreator_promptAction charCreator_promptToggle fa-solid ${j.enabled ? "fa-toggle-on" : "fa-toggle-off"}`,
              title: j.enabled ? "Switch off" : "Switch on",
              onClick: () => C(j.promptName)
            }
          )
        ] }),
        pe && ue()
      ] })
    };
  });
  return /* @__PURE__ */ A.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsx("div", { className: "title_restorable", children: /* @__PURE__ */ A.jsx("span", { children: "Main Context Template" }) }),
      /* @__PURE__ */ A.jsx("label", { className: "charCreator_settingsLabel", children: "Template" }),
      /* @__PURE__ */ A.jsx(
        Ah,
        {
          label: "Template",
          items: _,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: x,
          onItemsChange: w,
          onDelete: T,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx("label", { className: "charCreator_settingsLabel", children: "Prompts" }),
      /* @__PURE__ */ A.jsxs("div", { className: "charCreator_promptBar", children: [
        /* @__PURE__ */ A.jsx(Si, { value: y, onChange: (j) => s(j.target.value), children: b.map((j) => /* @__PURE__ */ A.jsx("option", { value: j.value, children: j.label }, j.value)) }),
        /* @__PURE__ */ A.jsx(ce, { className: "fa-solid fa-chain", title: "Insert prompt", onClick: z }),
        /* @__PURE__ */ A.jsx(
          ce,
          {
            className: "fa-solid fa-pencil",
            title: "Edit prompt",
            disabled: y === sr,
            onClick: () => Q(y)
          }
        ),
        /* @__PURE__ */ A.jsx(
          ce,
          {
            className: "caution fa-solid fa-x",
            title: "Delete prompt",
            disabled: !re,
            onClick: R
          }
        ),
        /* @__PURE__ */ A.jsx(
          ce,
          {
            className: "fa-solid fa-undo",
            title: "Reset this template to the default prompt list",
            onClick: O
          }
        ),
        /* @__PURE__ */ A.jsx(ce, { className: "fa-solid fa-plus-square", title: "New prompt", onClick: () => Q() })
      ] }),
      !ke && ue(),
      /* @__PURE__ */ A.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(J4, { items: k, onItemsChange: N }) })
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", style: { marginTop: "15px" }, children: [
      /* @__PURE__ */ A.jsx(
        "input",
        {
          type: "checkbox",
          checked: r.showSaveAsWorldInfoEntry.show,
          onChange: (j) => m((F) => {
            F.showSaveAsWorldInfoEntry.show = j.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ A.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ A.jsxs(ce, { className: "danger_button", style: { width: "auto" }, onClick: H, children: [
      /* @__PURE__ */ A.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, By = ({
  fieldId: n,
  label: r,
  value: i,
  prompt: s,
  large: o = !1,
  rows: c = 3,
  promptEnabled: h = !0,
  isDraft: m = !1,
  isGenerating: g = !1,
  onValueChange: v,
  onPromptChange: _,
  onGenerate: b,
  onContinue: y,
  onClear: p,
  onCompare: f,
  onDelete: S,
  onOpenReviseSessions: x
}) => /* @__PURE__ */ A.jsxs("div", { className: `character-field ${m ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ A.jsx("label", { children: r }),
  /* @__PURE__ */ A.jsxs("div", { className: `field-container ${o ? "large-field" : ""}`, children: [
    /* @__PURE__ */ A.jsx(bn, { value: i, onChange: (T) => v(n, T.target.value), rows: c }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ A.jsx(ce, { onClick: () => b(n), disabled: g, title: "Generate field content", children: g ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ A.jsx(ce, { onClick: () => y(n), disabled: g, title: "Continue from current content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ A.jsx(ce, { onClick: () => p(n), title: "Clear field content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" }) }),
      x && !m && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ A.jsx(ce, { onClick: () => x(n), title: "Revise with AI chat", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" }) }),
      !m && f && /* @__PURE__ */ A.jsx(ce, { onClick: () => f(n), title: "Compare with loaded character", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      m && S && /* @__PURE__ */ A.jsx(ce, { onClick: () => S(n), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  h && /* @__PURE__ */ A.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ A.jsx(
    bn,
    {
      value: s,
      onChange: (T) => _(n, T.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), aw = SillyTavern.getContext(), iw = ({
  greetings: n,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: s,
  onCompare: o,
  isGenerating: c
}) => {
  const [h, m] = ne.useState(0);
  ne.useEffect(() => {
    h >= n.length && n.length > 0 ? m(n.length - 1) : n.length === 0 && m(0);
  }, [n, h]);
  const g = () => {
    const y = [...n, { value: "", prompt: "" }];
    r(y), m(y.length - 1);
  }, v = async () => {
    if (n.length === 0) return;
    if (await aw.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const p = n.filter((f, S) => S !== h);
      r(p);
    }
  }, _ = (y, p, f) => {
    const S = [...n];
    S[y][p] = f, r(S);
  }, b = n[h];
  return /* @__PURE__ */ A.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ A.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ A.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: n.map((y, p) => /* @__PURE__ */ A.jsxs(
            ce,
            {
              onClick: () => m(p),
              className: `menu_button ${p === h ? "active" : ""}`,
              children: [
                "Greeting ",
                p + 1
              ]
            },
            p
          ))
        }
      ),
      /* @__PURE__ */ A.jsxs(ce, { onClick: g, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    n.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ A.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ A.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ A.jsx(
          bn,
          {
            value: b?.value ?? "",
            onChange: (y) => _(h, "value", y.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ A.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
          bn,
          {
            value: b?.prompt ?? "",
            onChange: (y) => _(h, "prompt", y.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ A.jsx(ce, { onClick: () => i(h), disabled: c, title: "Generate greeting", children: c ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ A.jsx(ce, { onClick: () => s(h), disabled: c, title: "Continue greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ A.jsx(
          ce,
          {
            onClick: () => _(h, "value", ""),
            disabled: c,
            title: "Clear greeting",
            children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ A.jsx(ce, { onClick: () => o(h), disabled: c, title: "Compare greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ A.jsx(
          ce,
          {
            onClick: v,
            disabled: c,
            title: "Delete greeting",
            className: "danger_button",
            children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        )
      ] })
    ] })
  ] });
};
var Gr = (
  /** @class */
  (function() {
    function n() {
    }
    return n.prototype.diff = function(r, i, s) {
      s === void 0 && (s = {});
      var o;
      typeof s == "function" ? (o = s, s = {}) : "callback" in s && (o = s.callback);
      var c = this.castInput(r, s), h = this.castInput(i, s), m = this.removeEmpty(this.tokenize(c, s)), g = this.removeEmpty(this.tokenize(h, s));
      return this.diffWithOptionsObj(m, g, s, o);
    }, n.prototype.diffWithOptionsObj = function(r, i, s, o) {
      var c = this, h, m = function(C) {
        if (C = c.postProcess(C, s), o) {
          setTimeout(function() {
            o(C);
          }, 0);
          return;
        } else
          return C;
      }, g = i.length, v = r.length, _ = 1, b = g + v;
      s.maxEditLength != null && (b = Math.min(b, s.maxEditLength));
      var y = (h = s.timeout) !== null && h !== void 0 ? h : 1 / 0, p = Date.now() + y, f = [{ oldPos: -1, lastComponent: void 0 }], S = this.extractCommon(f[0], i, r, 0, s);
      if (f[0].oldPos + 1 >= v && S + 1 >= g)
        return m(this.buildValues(f[0].lastComponent, i, r));
      var x = -1 / 0, T = 1 / 0, w = function() {
        for (var C = Math.max(x, -_); C <= Math.min(T, _); C += 2) {
          var O = void 0, z = f[C - 1], R = f[C + 1];
          z && (f[C - 1] = void 0);
          var Z = !1;
          if (R) {
            var te = R.oldPos - C;
            Z = R && 0 <= te && te < g;
          }
          var $ = z && z.oldPos + 1 < v;
          if (!Z && !$) {
            f[C] = void 0;
            continue;
          }
          if (!$ || Z && z.oldPos < R.oldPos ? O = c.addToPath(R, !0, !1, 0, s) : O = c.addToPath(z, !1, !0, 1, s), S = c.extractCommon(O, i, r, C, s), O.oldPos + 1 >= v && S + 1 >= g)
            return m(c.buildValues(O.lastComponent, i, r)) || !0;
          f[C] = O, O.oldPos + 1 >= v && (T = Math.min(T, C - 1)), S + 1 >= g && (x = Math.max(x, C + 1));
        }
        _++;
      };
      if (o)
        (function C() {
          setTimeout(function() {
            if (_ > b || Date.now() > p)
              return o(void 0);
            w() || C();
          }, 0);
        })();
      else
        for (; _ <= b && Date.now() <= p; ) {
          var N = w();
          if (N)
            return N;
        }
    }, n.prototype.addToPath = function(r, i, s, o, c) {
      var h = r.lastComponent;
      return h && !c.oneChangePerToken && h.added === i && h.removed === s ? {
        oldPos: r.oldPos + o,
        lastComponent: { count: h.count + 1, added: i, removed: s, previousComponent: h.previousComponent }
      } : {
        oldPos: r.oldPos + o,
        lastComponent: { count: 1, added: i, removed: s, previousComponent: h }
      };
    }, n.prototype.extractCommon = function(r, i, s, o, c) {
      for (var h = i.length, m = s.length, g = r.oldPos, v = g - o, _ = 0; v + 1 < h && g + 1 < m && this.equals(s[g + 1], i[v + 1], c); )
        v++, g++, _++, c.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return _ && !c.oneChangePerToken && (r.lastComponent = { count: _, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = g, v;
    }, n.prototype.equals = function(r, i, s) {
      return s.comparator ? s.comparator(r, i) : r === i || !!s.ignoreCase && r.toLowerCase() === i.toLowerCase();
    }, n.prototype.removeEmpty = function(r) {
      for (var i = [], s = 0; s < r.length; s++)
        r[s] && i.push(r[s]);
      return i;
    }, n.prototype.castInput = function(r, i) {
      return r;
    }, n.prototype.tokenize = function(r, i) {
      return Array.from(r);
    }, n.prototype.join = function(r) {
      return r.join("");
    }, n.prototype.postProcess = function(r, i) {
      return r;
    }, Object.defineProperty(n.prototype, "useLongestToken", {
      get: function() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.buildValues = function(r, i, s) {
      for (var o = [], c; r; )
        o.push(r), c = r.previousComponent, delete r.previousComponent, r = c;
      o.reverse();
      for (var h = o.length, m = 0, g = 0, v = 0; m < h; m++) {
        var _ = o[m];
        if (_.removed)
          _.value = this.join(s.slice(v, v + _.count)), v += _.count;
        else {
          if (!_.added && this.useLongestToken) {
            var b = i.slice(g, g + _.count);
            b = b.map(function(y, p) {
              var f = s[v + p];
              return f.length > y.length ? f : y;
            }), _.value = this.join(b);
          } else
            _.value = this.join(i.slice(g, g + _.count));
          g += _.count, _.added || (v += _.count);
        }
      }
      return o;
    }, n;
  })()
), sw = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (s[c] = o[c]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), lw = (
  /** @class */
  (function(n) {
    sw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r;
  })(Gr)
);
new lw();
function Uy(n, r) {
  var i;
  for (i = 0; i < n.length && i < r.length; i++)
    if (n[i] != r[i])
      return n.slice(0, i);
  return n.slice(0, i);
}
function Py(n, r) {
  var i;
  if (!n || !r || n[n.length - 1] != r[r.length - 1])
    return "";
  for (i = 0; i < n.length && i < r.length; i++)
    if (n[n.length - (i + 1)] != r[r.length - (i + 1)])
      return n.slice(-i);
  return n.slice(-i);
}
function Th(n, r, i) {
  if (n.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return i + n.slice(r.length);
}
function Dh(n, r, i) {
  if (!r)
    return n + i;
  if (n.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return n.slice(0, -r.length) + i;
}
function Os(n, r) {
  return Th(n, r, "");
}
function Xo(n, r) {
  return Dh(n, r, "");
}
function Iy(n, r) {
  return r.slice(0, ow(n, r));
}
function ow(n, r) {
  var i = 0;
  n.length > r.length && (i = n.length - r.length);
  var s = r.length;
  n.length < r.length && (s = n.length);
  var o = Array(s), c = 0;
  o[0] = 0;
  for (var h = 1; h < s; h++) {
    for (r[h] == r[c] ? o[h] = o[c] : o[h] = c; c > 0 && r[h] != r[c]; )
      c = o[c];
    r[h] == r[c] && c++;
  }
  c = 0;
  for (var m = i; m < n.length; m++) {
    for (; c > 0 && n[m] != r[c]; )
      c = o[c];
    n[m] == r[c] && c++;
  }
  return c;
}
function Ns(n) {
  var r;
  for (r = n.length - 1; r >= 0 && n[r].match(/\s/); r--)
    ;
  return n.substring(r + 1);
}
function Br(n) {
  var r = n.match(/^\s*/);
  return r ? r[0] : "";
}
var v1 = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (s[c] = o[c]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), gu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", uw = new RegExp("[".concat(gu, "]+|\\s+|[^").concat(gu, "]"), "ug"), cw = (
  /** @class */
  (function(n) {
    v1(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(i, s, o) {
      return o.ignoreCase && (i = i.toLowerCase(), s = s.toLowerCase()), i.trim() === s.trim();
    }, r.prototype.tokenize = function(i, s) {
      s === void 0 && (s = {});
      var o;
      if (s.intlSegmenter) {
        var c = s.intlSegmenter;
        if (c.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        o = Array.from(c.segment(i), function(g) {
          return g.segment;
        });
      } else
        o = i.match(uw) || [];
      var h = [], m = null;
      return o.forEach(function(g) {
        /\s/.test(g) ? m == null ? h.push(g) : h.push(h.pop() + g) : m != null && /\s/.test(m) ? h[h.length - 1] == m ? h.push(h.pop() + g) : h.push(m + g) : h.push(g), m = g;
      }), h;
    }, r.prototype.join = function(i) {
      return i.map(function(s, o) {
        return o == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(i, s) {
      if (!i || s.oneChangePerToken)
        return i;
      var o = null, c = null, h = null;
      return i.forEach(function(m) {
        m.added ? c = m : m.removed ? h = m : ((c || h) && Hy(o, h, c, m), o = m, c = null, h = null);
      }), (c || h) && Hy(o, h, c, null), i;
    }, r;
  })(Gr)
), fw = new cw();
function y1(n, r, i) {
  return fw.diff(n, r, i);
}
function Hy(n, r, i, s) {
  if (r && i) {
    var o = Br(r.value), c = Ns(r.value), h = Br(i.value), m = Ns(i.value);
    if (n) {
      var g = Uy(o, h);
      n.value = Dh(n.value, h, g), r.value = Os(r.value, g), i.value = Os(i.value, g);
    }
    if (s) {
      var v = Py(c, m);
      s.value = Th(s.value, m, v), r.value = Xo(r.value, v), i.value = Xo(i.value, v);
    }
  } else if (i) {
    if (n) {
      var _ = Br(i.value);
      i.value = i.value.substring(_.length);
    }
    if (s) {
      var _ = Br(s.value);
      s.value = s.value.substring(_.length);
    }
  } else if (n && s) {
    var b = Br(s.value), y = Br(r.value), p = Ns(r.value), f = Uy(b, y);
    r.value = Os(r.value, f);
    var S = Py(Os(b, f), p);
    r.value = Xo(r.value, S), s.value = Th(s.value, b, S), n.value = Dh(n.value, b, b.slice(0, b.length - S.length));
  } else if (s) {
    var x = Br(s.value), T = Ns(r.value), w = Iy(T, x);
    r.value = Xo(r.value, w);
  } else if (n) {
    var N = Ns(n.value), C = Br(r.value), w = Iy(N, C);
    r.value = Os(r.value, w);
  }
}
var hw = (
  /** @class */
  (function(n) {
    v1(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var s = new RegExp("(\\r?\\n)|[".concat(gu, "]+|[^\\S\\n\\r]+|[^").concat(gu, "]"), "ug");
      return i.match(s) || [];
    }, r;
  })(Gr)
);
new hw();
var dw = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (s[c] = o[c]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), pw = (
  /** @class */
  (function(n) {
    dw(r, n);
    function r() {
      var i = n !== null && n.apply(this, arguments) || this;
      return i.tokenize = _1, i;
    }
    return r.prototype.equals = function(i, s, o) {
      return o.ignoreWhitespace ? ((!o.newlineIsToken || !i.includes(`
`)) && (i = i.trim()), (!o.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : o.ignoreNewlineAtEof && !o.newlineIsToken && (i.endsWith(`
`) && (i = i.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), n.prototype.equals.call(this, i, s, o);
    }, r;
  })(Gr)
);
new pw();
function _1(n, r) {
  r.stripTrailingCr && (n = n.replace(/\r\n/g, `
`));
  var i = [], s = n.split(/(\n|\r\n)/);
  s[s.length - 1] || s.pop();
  for (var o = 0; o < s.length; o++) {
    var c = s[o];
    o % 2 && !r.newlineIsToken ? i[i.length - 1] += c : i.push(c);
  }
  return i;
}
var mw = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (s[c] = o[c]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), gw = (
  /** @class */
  (function(n) {
    mw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(Gr)
);
new gw();
var vw = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (s[c] = o[c]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), yw = (
  /** @class */
  (function(n) {
    vw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(Gr)
);
new yw();
var _w = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (s[c] = o[c]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), bw = (
  /** @class */
  (function(n) {
    _w(r, n);
    function r() {
      var i = n !== null && n.apply(this, arguments) || this;
      return i.tokenize = _1, i;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(i, s) {
      var o = s.undefinedReplacement, c = s.stringifyReplacer, h = c === void 0 ? function(m, g) {
        return typeof g > "u" ? o : g;
      } : c;
      return typeof i == "string" ? i : JSON.stringify(Oh(i, null, null, h), null, "  ");
    }, r.prototype.equals = function(i, s, o) {
      return n.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), o);
    }, r;
  })(Gr)
);
new bw();
function Oh(n, r, i, s, o) {
  r = r || [], i = i || [], s && (n = s(o === void 0 ? "" : o, n));
  var c;
  for (c = 0; c < r.length; c += 1)
    if (r[c] === n)
      return i[c];
  var h;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (r.push(n), h = new Array(n.length), i.push(h), c = 0; c < n.length; c += 1)
      h[c] = Oh(n[c], r, i, s, String(c));
    return r.pop(), i.pop(), h;
  }
  if (n && n.toJSON && (n = n.toJSON()), typeof n == "object" && n !== null) {
    r.push(n), h = {}, i.push(h);
    var m = [], g;
    for (g in n)
      Object.prototype.hasOwnProperty.call(n, g) && m.push(g);
    for (m.sort(), c = 0; c < m.length; c += 1)
      g = m[c], h[g] = Oh(n[g], r, i, s, g);
    r.pop(), i.pop();
  } else
    h = n;
  return h;
}
var Sw = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (s[c] = o[c]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), xw = (
  /** @class */
  (function(n) {
    Sw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.slice();
    }, r.prototype.join = function(i) {
      return i;
    }, r.prototype.removeEmpty = function(i) {
      return i;
    }, r;
  })(Gr)
);
new xw();
const Ew = ({ originalContent: n, newContent: r, fieldName: i }) => {
  const s = ne.useMemo(() => {
    const o = y1(n, r);
    let c = "", h = "";
    return o.forEach((m) => {
      const v = `<span style="${m.added ? "color: green; background-color: #e6ffed;" : m.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m.value}</span>`;
      m.added || (c += v), m.removed || (h += v);
    }), { originalHtml: c, newHtml: h };
  }, [n, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ A.jsxs("h3", { children: [
      "Compare Changes for: ",
      i
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
}, Cw = (n) => Object.entries(n.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const s = parseInt(r[0].split("_")[2]), o = parseInt(i[0].split("_")[2]);
  return s - o;
}).map(([, r]) => ({ value: r.value, prompt: r.prompt })), ww = (n, r, i, s) => {
  const o = structuredClone(n);
  if (i === "field" && s) {
    const c = r;
    return o.fields[s] && (o.fields[s].value = c.response), o;
  }
  if (i === "global") {
    const c = r;
    if (c.fields_to_change?.length)
      for (const g of c.fields_to_change)
        o.fields[g.field] ? o.fields[g.field].value = g.value : o.draftFields[g.field] && (o.draftFields[g.field].value = g.value);
    if (c.draft_fields_to_remove?.length)
      for (const g of c.draft_fields_to_remove)
        o.draftFields[g] && delete o.draftFields[g];
    let h = Cw(o), m = !1;
    if (c.greetings_to_change?.length) {
      m = !0;
      for (const g of c.greetings_to_change)
        g.index > 0 && g.index <= h.length && (h[g.index - 1].value = g.value);
    }
    if (c.greetings_to_remove?.length) {
      m = !0;
      const g = new Set(c.greetings_to_remove.map((v) => v - 1));
      h = h.filter((v, _) => !g.has(_));
    }
    c.greetings_to_add?.length && (m = !0, h.push(...c.greetings_to_add.map((g) => ({ value: g, prompt: "" })))), m && (Object.keys(o.fields).forEach((g) => {
      g.startsWith("alternate_greetings_") && delete o.fields[g];
    }), h.forEach((g, v) => {
      const _ = `alternate_greetings_${v + 1}`;
      o.fields[_] = {
        ...g,
        label: `Alternate Greeting ${v + 1}`
      };
    }));
  }
  return o;
}, Aw = (n, r) => {
  const i = Object.fromEntries(
    Object.entries(n.fields).filter(([s]) => !s.startsWith("alternate_greetings_"))
  );
  return {
    ...n,
    fields: { ...i, ...r.fields },
    draftFields: { ...r.draftFields }
  };
}, qy = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Nh = "placeholder-chatHistory", Tw = ga({
  justification: _n().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: _n().describe("The new, full content for the character field.")
}), Dw = ga({
  field: _n(),
  value: _n()
}), Ow = ga({
  index: du().int().positive(),
  value: _n()
});
ga({
  justification: _n(),
  fields_to_change: Dn(Dw).optional(),
  draft_fields_to_remove: Dn(_n()).optional(),
  greetings_to_add: Dn(_n()).optional(),
  greetings_to_remove: Dn(du().int().positive()).optional(),
  greetings_to_change: Dn(Ow).optional()
});
const Nw = (n, r) => {
  const i = ga({
    index: du().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: _n().describe("The new content for the alternate greeting.")
  }), s = {
    justification: _n().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Dn(_n()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Dn(du().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Dn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (n.length > 0) {
    const o = ga({
      field: Ch(n).describe("The unique ID of the field to change (core or draft)."),
      value: _n().describe("The new content for the field.")
    });
    s.fields_to_change = Dn(o).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = Dn(Ch(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), ga(s);
}, b1 = ({ originalContent: n, newContent: r }) => {
  const i = ne.useMemo(() => {
    const s = y1(n, r);
    let o = "", c = "";
    return s.forEach((h) => {
      const m = h.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), v = `<span style="${h.added ? "color: green; background-color: #e6ffed;" : h.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m}</span>`;
      h.added || (o += v), h.removed || (c += v);
    }), { originalHtml: o, newHtml: c };
  }, [n, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, Mw = ({ before: n, after: r }) => {
  const i = ne.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(n.fields), ...Object.keys(r.fields)])).forEach((c) => {
      const h = n.fields[c], m = r.fields[c], g = h?.value ?? "", v = m?.value ?? "";
      g !== v && s.push({
        label: m?.label ?? h?.label ?? c,
        before: g,
        after: v
      });
    }), s;
  }, [n, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
    /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
    i.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: i.map(({ label: s, before: o, after: c }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ A.jsx("h4", { children: s }),
      /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Before" }),
        /* @__PURE__ */ A.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ A.jsx(b1, { originalContent: o, newContent: c })
    ] }, s)) })
  ] });
}, kw = ({ currentState: n, initialState: r }) => {
  const [i, s] = ne.useState(!1), { coreFields: o, alternateGreetings: c } = ne.useMemo(() => {
    const m = [], g = [];
    return On.forEach((v) => {
      n.fields[v] && m.push({ label: n.fields[v].label, value: n.fields[v].value });
    }), Object.entries(n.fields).filter(([v]) => v.startsWith("alternate_greetings_")).sort((v, _) => parseInt(v[0].split("_")[2]) - parseInt(_[0].split("_")[2])).forEach(([, v]) => g.push(v.value)), { coreFields: m, alternateGreetings: g };
  }, [n]), h = ne.useMemo(() => {
    const m = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(n.fields)])).forEach((v) => {
      const _ = r.fields[v], b = n.fields[v], y = _?.value ?? "", p = b?.value ?? "";
      y !== p && m.push({
        label: b?.label ?? _?.label ?? v,
        before: y,
        after: p
      });
    }), m;
  }, [r, n]);
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: i ? "Comparing with Original State" : "Current Character State" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: i, onChange: (m) => s(m.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: h.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : h.map(({ label: m, before: g, after: v }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ A.jsx("h4", { children: m }),
      /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Original" }),
        /* @__PURE__ */ A.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ A.jsx(b1, { originalContent: g, newContent: v })
    ] }, m)) }) : /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Core Fields" }),
      o.map(({ label: m, value: g }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: m }),
        /* @__PURE__ */ A.jsx("div", { className: "state-value", children: g || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, m)),
      c.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        c.map((m, g) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Greeting ",
            g + 1
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: "state-value", children: m || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, g))
      ] })
    ] }) })
  ] });
}, Qo = SillyTavern.getContext(), Rw = ({ initialState: n, onSave: r, onClose: i }) => {
  const [s, o] = ne.useState(() => structuredClone(n)), c = (b, y, p) => {
    const f = structuredClone(s), S = p ? "draftFields" : "fields";
    f[S][b] && (f[S][b].value = y), o(f);
  }, h = (b, y) => {
    const p = structuredClone(s), f = `alternate_greetings_${b + 1}`;
    p.fields[f] && (p.fields[f].value = y), o(p);
  }, { coreFields: m, alternateGreetings: g, draftFields: v } = ne.useMemo(() => {
    const b = [], y = [], p = [];
    return On.forEach((f) => {
      s.fields[f] && b.push({ id: f, label: s.fields[f].label, value: s.fields[f].value });
    }), Object.entries(s.fields).filter(([f]) => f.startsWith("alternate_greetings_")).sort((f, S) => parseInt(f[0].split("_")[2]) - parseInt(S[0].split("_")[2])).forEach(([, f]) => y.push(f.value)), Object.entries(s.draftFields).forEach(([f, S]) => {
      p.push({ id: f, label: S.label, value: S.value });
    }), { coreFields: b, alternateGreetings: y, draftFields: p };
  }, [s]), _ = () => {
    JSON.stringify(n) !== JSON.stringify(s) && r(s), i();
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs(ce, { onClick: _, children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ A.jsxs(ce, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Core Fields" }),
      m.map(({ id: b, label: y, value: p }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: y }),
        /* @__PURE__ */ A.jsx(bn, { value: p, onChange: (f) => c(b, f.target.value, !1), rows: 4 })
      ] }, b)),
      v.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        v.map(({ id: b, label: y, value: p }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsx("label", { children: y }),
          /* @__PURE__ */ A.jsx(bn, { value: p, onChange: (f) => c(b, f.target.value, !0), rows: 4 })
        ] }, b))
      ] }),
      g.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        g.map((b, y) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Greeting ",
            y + 1
          ] }),
          /* @__PURE__ */ A.jsx(bn, { value: b, onChange: (p) => h(y, p.target.value), rows: 4 })
        ] }, y))
      ] })
    ] })
  ] });
}, jw = ({
  session: n,
  onBack: r,
  onApply: i,
  onSessionUpdate: s,
  initialState: o,
  messageSelection: c
}) => {
  const [h, m] = ne.useState(n.messages), [g, v] = ne.useState(""), [_, b] = ne.useState(!1), [y, p] = ne.useState(null), [f, S] = ne.useState(!1), [x, T] = ne.useState(!1), [w, N] = ne.useState(null), [C, O] = ne.useState(""), z = ne.useRef(null), R = ne.useRef(null);
  ne.useEffect(() => {
    z.current?.scrollIntoView({ behavior: "smooth" });
  }, [h]);
  const Z = ne.useCallback(
    (Y, me, we) => {
      if (JSON.stringify(we) === JSON.stringify(me))
        return Y;
      const $e = ft.getSettings().prompts.existingFieldDefinitions;
      if (!$e) return Y;
      const Ve = { core: {}, alternate_greetings: {}, draft: {} }, P = {}, ie = {};
      if ((/* @__PURE__ */ new Set([...Object.keys(we.fields), ...Object.keys(me.fields)])).forEach((Te) => {
        const zt = we.fields[Te]?.value ?? "", Mn = me.fields[Te]?.value ?? "";
        if (zt !== Mn) {
          const Ie = me.fields[Te];
          Ie && (P[Te] = Ie, Te.startsWith("alternate_greetings_") ? Ve.alternate_greetings[Ie.label] = Ie.value : On.includes(Te) && (Ve.core[Ie.label] = Ie.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(we.draftFields), ...Object.keys(me.draftFields)])).forEach((Te) => {
        const zt = we.draftFields[Te]?.value ?? "", Mn = me.draftFields[Te]?.value ?? "";
        if (zt !== Mn && me.draftFields[Te]) {
          const Ie = me.draftFields[Te];
          Ve.draft[Ie.label] = Ie.value, ie[Te] = Ie;
        }
      }), Object.keys(Ve.core).length === 0 && Object.keys(Ve.alternate_greetings).length === 0 && Object.keys(Ve.draft).length === 0)
        return Y;
      const qe = {
        fields: vt(Ve),
        fieldList: vt(mu(P, ie))
      }, ye = Zs($e.content, qe, Qo.substituteParams);
      if (ye.trim()) {
        const Te = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: ye.trim(),
          isStateUpdate: !0
        };
        return [...Y, Te];
      }
      return Y;
    },
    []
  ), te = ne.useCallback(
    async (Y, me, we, Ze) => {
      const $e = ft.getSettings();
      if (!n.profileId) {
        Ae("warning", "Please select a connection profile for this session.");
        return;
      }
      R.current = new AbortController(), we(), b(!0);
      try {
        const Ve = xu(n.profileId), P = [...Y], ie = (qe) => u1(
          qe,
          qe.findIndex((ye) => ye.id === Nh),
          {
            selection: c,
            contextSize: o1(Ve, $e),
            maxResponseTokens: $e.maxResponseToken
          }
        ), ae = Y.slice(0, Y.length - (me ? 0 : 1)).reverse().find((qe) => qe.stateSnapshot)?.stateSnapshot ?? o, Oe = $e.prompts.existingFieldDefinitions;
        if (Oe) {
          const qe = {
            fields: vt({
              core: Object.fromEntries(
                Object.entries(ae.fields).filter(([Te]) => !Te.startsWith("alternate_greetings_")).map(([, Te]) => [Te.label, Te.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(ae.fields).filter(([Te]) => Te.startsWith("alternate_greetings_")).map(([, Te]) => [Te.label, Te.value])
              ),
              draft: Object.fromEntries(Object.entries(ae.draftFields).map(([, Te]) => [Te.label, Te.value]))
            }),
            fieldList: vt(mu(ae.fields, ae.draftFields))
          }, ye = Zs(Oe.content, qe, Qo.substituteParams);
          if (ye.trim()) {
            const Te = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: ye.trim()
            }, zt = P.pop();
            P.push(Te), zt && P.push(zt);
          }
        }
        if (n.isReadonly) {
          P.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const qe = await N4(
            n.profileId,
            await ie(P),
            $e.maxResponseToken,
            R.current.signal
          ), ye = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: qe
          }, Te = [...Y, ye];
          m(Te), s({ ...n, messages: Te });
        } else {
          const qe = n.type === "field" ? Tw : (() => {
            const kn = [...Object.keys(ae.fields), ...Object.keys(ae.draftFields)], Js = Object.keys(ae.draftFields);
            return Nw(kn, Js);
          })(), Te = await k4(
            n.profileId,
            await ie(P),
            qe,
            n.type === "field" ? qy.FIELD : qy.GLOBAL,
            $e.maxResponseToken,
            R.current.signal
          ), zt = ww(ae, Te, n.type, n.targetFieldId), Mn = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Te.justification,
            stateSnapshot: zt
          };
          let Ie = [...Y, Mn];
          Ie = Z(Ie, zt, ae), m(Ie), s({ ...n, messages: Ie });
        }
      } catch (Ve) {
        Ve.name === "AbortError" ? Ae("info", "Request was cancelled.") : (console.error("Revise request failed:", Ve), Ae("error", `Request failed: ${i1(Ve)}`)), Ze();
      } finally {
        b(!1), R.current = null;
      }
    },
    [n, s, o, c, Z]
  ), $ = ne.useCallback(async () => {
    if (!g.trim() || _) return;
    const Y = { id: `msg-${Date.now()}`, role: "user", content: g.trim() }, me = h, we = g;
    te(
      [...h, Y],
      !1,
      () => {
        m([...h, Y]), v("");
      },
      // Put the message back in the input so it can be sent again.
      () => {
        m(me), v(we);
      }
    );
  }, [g, _, h, te]), Q = ne.useCallback(async () => {
    if (_ || h.length === 0) return;
    const Y = h;
    let me = [...h];
    const we = h.findLastIndex((Ze) => !Ze.isStateUpdate);
    we > -1 && h[we].role === "assistant" && (me = h.slice(0, we)), await te(
      me,
      !0,
      () => m(me),
      () => m(Y)
    );
  }, [_, h, te]), ee = () => {
    const Y = h.slice().reverse().find((me) => me.stateSnapshot)?.stateSnapshot ?? o;
    i(Y), r();
  }, fe = (Y) => {
    const me = h.findIndex(($e) => $e.id === Y);
    if (me === -1 || !h[me].stateSnapshot) return;
    const we = h[me].stateSnapshot;
    let Ze = o;
    for (let $e = me - 1; $e >= 0; $e--)
      if (h[$e].stateSnapshot) {
        Ze = h[$e].stateSnapshot;
        break;
      }
    p({ before: Ze, after: we });
  }, de = () => {
    S(!0);
  }, be = (Y) => {
    N(Y.id), O(Y.content);
  }, H = () => {
    N(null), O("");
  }, re = async () => {
    if (!w) return;
    const Y = h.findIndex((ie) => ie.id === w);
    if (Y === -1 || !await Qo.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const we = h, Ze = h.slice(0, Y), $e = { ...h[Y], content: C }, Ve = [...Ze, $e], P = C;
    H(), te(
      Ve,
      !1,
      () => m(Ve),
      // Reopen the editor with the edited text so it can be saved again.
      () => {
        m(we), N($e.id), O(P);
      }
    );
  }, ue = async (Y) => {
    const me = h.findIndex((P) => P.id === Y);
    if (me === -1) return;
    const Ze = !!h[me].isInitial;
    if (!await Qo.Popup.show.confirm(
      "Delete Message",
      Ze ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let Ve;
    Ze ? Ve = h.filter((P) => P.isInitial && P.id !== Y) : Ve = h.slice(0, me), m(Ve), s({ ...n, messages: Ve }), Ae("info", "Message history has been updated.");
  }, ke = h.filter((Y) => !Y.isStateUpdate), k = ke.filter((Y) => Y.isInitial), j = ke.filter((Y) => !Y.isInitial), F = h.slice().reverse().find((Y) => Y.stateSnapshot)?.stateSnapshot ?? o, V = () => {
    T(!0);
  }, le = (Y) => {
    const me = h.slice().reverse().find(($e) => $e.stateSnapshot)?.stateSnapshot ?? o, we = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: Y
    };
    let Ze = [...h, we];
    Ze = Z(Ze, Y, me), m(Ze), s({ ...n, messages: Ze }), T(!1);
  }, pe = () => {
    R.current?.abort();
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h2", { children: n.name }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "checkbox",
              checked: n.isReadonly ?? !1,
              onChange: (Y) => s({ ...n, isReadonly: Y.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ A.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ A.jsx(
          p1,
          {
            initialSelectedProfileId: n.profileId,
            onChange: (Y) => s({ ...n, profileId: Y?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ A.jsx(ce, { onClick: de, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ A.jsx(ce, { onClick: V, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ A.jsx(ce, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ A.jsxs(ce, { onClick: ee, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-messages", children: [
      k.length > 0 && /* @__PURE__ */ A.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ A.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ A.jsx("div", { className: "initial-messages-content", children: k.map(
          (Y) => w === Y.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ A.jsx(bn, { value: C, onChange: (me) => O(me.target.value), rows: 5 }),
            /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ A.jsxs(ce, { onClick: re, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ A.jsxs(ce, { onClick: H, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, Y.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper initial-context ${Y.role}`, children: [
            /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${Y.role} initial`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: Y.content }) }),
            !_ && Y.id !== Nh && /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ A.jsxs(
                ce,
                {
                  className: "message-action-button",
                  onClick: () => be(Y),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ A.jsxs(
                ce,
                {
                  className: "message-action-button danger_button",
                  onClick: () => ue(Y.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, Y.id)
        ) })
      ] }),
      j.map(
        (Y) => w === Y.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ A.jsx(bn, { value: C, onChange: (me) => O(me.target.value), rows: 3 }),
          /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ A.jsxs(ce, { onClick: re, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ A.jsxs(ce, { onClick: H, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, Y.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper ${Y.role}`, children: [
          /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
            Y.role === "user" && !Y.stateSnapshot && !_ && /* @__PURE__ */ A.jsxs(
              ce,
              {
                className: "message-action-button",
                onClick: () => be(Y),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            Y.stateSnapshot && !_ && /* @__PURE__ */ A.jsxs(
              ce,
              {
                className: "message-action-button",
                onClick: () => fe(Y.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !_ && /* @__PURE__ */ A.jsxs(
              ce,
              {
                className: "message-action-button danger_button",
                onClick: () => ue(Y.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${Y.role}`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: Y.content }) })
        ] }, Y.id)
      ),
      j.length > 0 && !_ && /* @__PURE__ */ A.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ A.jsxs(ce, { onClick: Q, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      _ && /* @__PURE__ */ A.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ A.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ A.jsx(ce, { onClick: pe, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ A.jsx("div", { ref: z })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ A.jsx(
        bn,
        {
          value: g,
          onChange: (Y) => v(Y.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: _ || !!w,
          onKeyDown: (Y) => {
            Y.key === "Enter" && !Y.shiftKey && (Y.preventDefault(), $());
          }
        }
      ),
      /* @__PURE__ */ A.jsxs(ce, { onClick: $, disabled: _ || !g.trim() || !!w, children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    y && /* @__PURE__ */ A.jsx(
      yi,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(Mw, { before: y.before, after: y.after }),
        onComplete: () => p(null),
        options: { wide: !0, large: !0 }
      }
    ),
    f && /* @__PURE__ */ A.jsx(
      yi,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(kw, { currentState: F, initialState: o }),
        onComplete: () => S(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    x && /* @__PURE__ */ A.jsx(
      yi,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          Rw,
          {
            initialState: F,
            onSave: le,
            onClose: () => T(!1)
          }
        ),
        onComplete: () => T(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
function S1(n, r = {}) {
  const i = n?.entries;
  if (!i)
    return [];
  const s = Array.isArray(i) ? i : Object.values(i);
  return r.includeDisabled ? s : s.filter((o) => !o.disable);
}
async function zw(n, r, i, s, o) {
  const c = ft.getSettings(), h = c.mainContextTemplatePresets[i];
  if (!h)
    throw new Error(`Main context template preset "${i}" not found.`);
  const m = [], v = {
    ...{
      user: Pn.name1 || "You",
      char: vt(n.fields.name?.value) || "Character",
      // Resolved up front like ST's {{persona}} macro, since renderPrompt keeps {{char}}/{{user}} literal.
      persona: Pn.substituteParams(Pn.powerUserSettings.persona_description ?? "")
    },
    fields: vt({
      core: Object.fromEntries(
        Object.entries(n.fields).filter(([p]) => !p.startsWith("alternate_greetings_")).map(([, p]) => [p.label, p.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(n.fields).filter(([p]) => p.startsWith("alternate_greetings_")).map(([, p]) => [p.label, p.value])
      ),
      draft: Object.fromEntries(Object.entries(n.draftFields).map(([, p]) => [p.label, p.value]))
    }),
    // Every field with its ID and label, see FieldListItem in field-list.ts
    fieldList: vt(mu(n.fields, n.draftFields))
  };
  if (s.charCard) {
    const p = [];
    o.selectedCharacterIndexes.forEach((f) => {
      const S = Pn.characters[parseInt(f)];
      S && p.push(S);
    }), v.characters = vt(p);
  }
  if (s.worldInfo) {
    const p = {};
    await Promise.all(
      o.selectedWorldNames.map(async (f) => {
        const S = await Pn.loadWorldInfo(f);
        S && (p[f] = S1(S));
      })
    ), v.lorebooks = vt(p);
  }
  for (const p of h.prompts) {
    if (!p.enabled || p.promptName === "stDescription" && !s.stDescription || p.promptName === "charDefinitions" && !s.charCard || p.promptName === "lorebookDefinitions" && !s.worldInfo || p.promptName === "existingFieldDefinitions" && !s.existingFields || p.promptName === "personaDescription" && !s.persona || p.promptName === "chatHistory" && s.messages.type === "none" || or === void 0 && !ma && p.promptName === "chatHistory") continue;
    if (p.promptName === "chatHistory") {
      m.push({
        id: Nh,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    if (["taskDescription", "existingFieldDefinitions", "outputFormatInstructions"].includes(p.promptName))
      continue;
    const S = c.prompts[p.promptName];
    if (!S)
      continue;
    const x = p.promptName === "stDescription" ? { ...v, char: "{{char}}", user: "{{user}}" } : v, T = Zs(S.content, x, Pn.substituteParams);
    T.trim() && m.push({
      id: `im-${m.length}`,
      role: p.role,
      content: T.trim(),
      isInitial: !0
    });
  }
  const _ = r ? n.fields[r]?.label || n.draftFields[r]?.label : "Global", b = c.prompts.reviseTaskDescription.content, y = Zs(
    b,
    {
      ...v,
      isFieldSession: !!r,
      targetField: r,
      targetLabel: vt(_)
    },
    Pn.substituteParams
  );
  return m.push({
    id: `im-${m.length}`,
    role: "system",
    content: y,
    isInitial: !0
  }), m;
}
const x1 = "charCreator", E1 = "charCreator_reviseSessions", Ks = () => SillyTavern.libs.localforage, Lw = (n) => {
  if (!n)
    return { value: null, recovered: !1 };
  try {
    return { value: JSON.parse(n), recovered: !1 };
  } catch (r) {
    return { value: null, recovered: !0, error: r };
  }
}, C1 = async (n, r, i) => {
  try {
    const s = await r.getItem(n);
    if (s !== null)
      return { value: s, migrated: !1, recovered: !1 };
    const o = Lw(i.getItem(n));
    return o.value === null ? (o.recovered && i.removeItem(n), { value: null, migrated: !1, recovered: o.recovered, error: o.error }) : (await r.setItem(n, o.value), i.removeItem(n), { value: o.value, migrated: !0, recovered: o.recovered });
  } catch (s) {
    return { value: null, migrated: !1, recovered: !0, error: s };
  }
}, w1 = async (n, r, i = Ks()) => {
  try {
    return await i.setItem(n, r), { persisted: !0 };
  } catch (s) {
    return { persisted: !1, error: s };
  }
}, Bw = (n = Ks(), r = localStorage) => C1(x1, n, r), Uw = (n, r = Ks()) => w1(x1, n, r), Pw = (n = Ks(), r = localStorage) => C1(E1, n, r), Iw = (n, r = Ks()) => w1(E1, n, r), Zy = SillyTavern.getContext(), Hw = ({
  target: n,
  onClose: r,
  onApply: i,
  initialState: s,
  contextToSend: o,
  sessionForContext: c
}) => {
  const [h, m] = ne.useState([]), [g, v] = ne.useState(null), [_, b] = ne.useState(!0);
  ne.useEffect(() => {
    let N = !0;
    return Pw().then(({ value: C, recovered: O }) => {
      N && (m(Array.isArray(C) ? C : []), O && Ae("warning", "Some saved revise sessions were invalid and have been reset."));
    }).catch((C) => {
      console.error("Failed to load revise sessions:", C), Ae("warning", "Saved revise sessions could not be loaded.");
    }).finally(() => {
      N && b(!1);
    }), () => {
      N = !1;
    };
  }, []);
  const y = ne.useMemo(() => h.filter((N) => N.type === n.type && (N.type === "global" || N.targetFieldId === n.fieldId)).sort((N, C) => new Date(C.createdAt).getTime() - new Date(N.createdAt).getTime()), [h, n]), p = (N) => {
    m(N), Iw(N).then((C) => {
      C.persisted || (console.warn("Failed to save revise sessions:", C.error), Ae("warning", "Revise session history could not be saved. Browser storage may be full."));
    });
  }, f = async () => {
    const C = `Session for ${n.type === "field" ? s.fields[n.fieldId]?.label || s.draftFields[n.fieldId]?.label : "Global"} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`, O = await Zy.Popup.show.input("New Session Name", "", C);
    if (O === null) return;
    const z = O.trim() || C;
    try {
      const R = ft.getSettings();
      if (!R.profileId) {
        Ae("warning", "Please select a connection profile in the main popup first.");
        return;
      }
      const Z = {
        id: `rs-${Date.now()}`,
        name: z,
        type: n.type,
        targetFieldId: n.fieldId,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [],
        // Will be populated next
        context: {
          mainContextTemplatePreset: R.mainContextTemplatePreset
        },
        profileId: R.profileId,
        isReadonly: !1
      }, te = await zw(
        s,
        Z.targetFieldId,
        Z.context.mainContextTemplatePreset,
        o,
        c
      );
      Z.messages = te, v(Z);
    } catch (R) {
      console.error("Failed to create session:", R), Ae("error", `Failed to create session: ${R.message}`);
    }
  }, S = (N) => {
    v(N);
  }, x = async (N) => {
    if (await Zy.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const O = h.filter((z) => z.id !== N);
      p(O);
    }
  }, T = (N) => {
    const C = h.findIndex((z) => z.id === N.id), O = [...h];
    C !== -1 ? O[C] = N : O.push(N), p(O), v(N);
  };
  if (g)
    return /* @__PURE__ */ A.jsx(
      jw,
      {
        session: g,
        onBack: () => v(null),
        onApply: i,
        onSessionUpdate: T,
        initialState: s,
        messageSelection: o.messages
      }
    );
  const w = n.type === "field" ? s.fields[n.fieldId]?.label || s.draftFields[n.fieldId]?.label : "Global";
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ A.jsx("div", { className: "popup_header", children: /* @__PURE__ */ A.jsxs("h2", { children: [
      'Revise Sessions for "',
      w,
      '"'
    ] }) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-list", children: _ ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : y.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : y.map((N) => /* @__PURE__ */ A.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "session-info", onClick: () => S(N), children: [
        /* @__PURE__ */ A.jsx("span", { className: "session-name", children: N.name }),
        /* @__PURE__ */ A.jsx("span", { className: "session-date", children: new Date(N.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ A.jsx(ce, { className: "danger_button", onClick: () => x(N.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, N.id)) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-actions", children: /* @__PURE__ */ A.jsxs(ce, { onClick: f, className: "menu_button", children: [
      /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
};
function qw(n, r) {
  return {
    name: n.name?.value ?? "",
    description: n.description?.value ?? "",
    personality: n.personality?.value ?? "",
    scenario: n.scenario?.value ?? "",
    first_mes: n.first_mes?.value ?? "",
    mes_example: n.mes_example?.value ?? "",
    alternate_greetings: r.map((i) => i.value).filter(Boolean)
  };
}
function Zw(n, r, i) {
  return bi.compile(n, { noEscape: !0 })({
    character: qw(r, i),
    // The entry describes this card, so {{char}} is its name. {{user}} is left for ST to resolve when the entry is used.
    char: r.name?.value || "{{char}}",
    user: "{{user}}"
  });
}
function Gw(n, r = []) {
  const i = new Set(n), s = r.filter((o) => o && !i.has(o));
  return [
    ...n.map((o) => ({ value: o, label: o })),
    ...s.map((o) => ({ value: o, label: `${o} (missing)` }))
  ];
}
const Un = SillyTavern.getContext(), uh = () => ({
  selectedCharacterIndexes: or ? [String(or)] : [],
  selectedWorldNames: [],
  fields: On.reduce(
    (n, r) => (n[r] = { value: "", prompt: "", label: lr[r] }, n),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), Fw = {
  name: { label: lr.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: lr.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: lr.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: lr.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: lr.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: lr.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, Vw = () => {
  const n = g1(), r = ft.getSettings(), [i, s] = ne.useState(uh()), [o, c] = ne.useState([]), [h, m] = ne.useState(!0), [g, v] = ne.useState("core"), [_, b] = ne.useState([]), [y, p] = ne.useState([]), [f, S] = ne.useState(null), [x, T] = ne.useState(null), [w, N] = ne.useState(!1), [C, O] = ne.useState(null);
  ne.useEffect(() => {
    (async () => {
      m(!0), b(Un.characters), p(Pg);
      const ie = (await Bw()).value ?? {}, ae = uh();
      if (ie.fields && (ae.fields = { ...ae.fields, ...ie.fields }), ie.draftFields && (ae.draftFields = ie.draftFields), ie.selectedCharacterIndexes && (ae.selectedCharacterIndexes = ie.selectedCharacterIndexes), ie.selectedWorldNames && (ae.selectedWorldNames = ie.selectedWorldNames), ie.lastLoadedCharacterId) {
        ae.lastLoadedCharacterId = ie.lastLoadedCharacterId;
        const Oe = Un.characters.find((qe) => qe.avatar === ie.lastLoadedCharacterId);
        Oe && S(Oe);
      }
      s(ae), m(!1);
    })();
  }, []), ne.useEffect(() => {
    h || Uw(i).then((P) => {
      P.persisted || (console.warn("Failed to save Character Creator session:", P.error), Ae("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [i, h]);
  const z = (P, ie) => {
    ft.getSettings()[P] = ie, ft.saveSettings(), n();
  }, R = (P, ie) => {
    ft.getSettings().contextToSend[P] = ie, ft.saveSettings(), n();
  }, Z = ne.useCallback(
    (P, ie, ae, Oe) => {
      s((qe) => {
        const ye = Oe ? "draftFields" : "fields", Te = { ...qe[ye] };
        return Te[P] || (Te[P] = { value: "", prompt: "", label: P }), Te[P][ae] = ie, { ...qe, [ye]: Te };
      });
    },
    []
  ), te = ne.useMemo(
    () => Object.keys(i.fields).filter((P) => P.startsWith("alternate_greetings_")).sort((P, ie) => parseInt(P.split("_")[2]) - parseInt(ie.split("_")[2])).map((P) => i.fields[P]),
    [i.fields]
  ), $ = ne.useCallback((P) => {
    s((ie) => {
      const ae = { ...ie.fields };
      return Object.keys(ae).forEach((Oe) => {
        Oe.startsWith("alternate_greetings_") && delete ae[Oe];
      }), P.forEach((Oe, qe) => {
        const ye = `alternate_greetings_${qe + 1}`;
        ae[ye] = { ...Oe, label: `Alternate Greeting ${qe + 1}` };
      }), { ...ie, fields: ae };
    });
  }, []), Q = ne.useCallback(
    (P, ie) => {
      Z(P, "", "value", ie);
    },
    [Z]
  ), ee = ne.useCallback(
    async (P) => {
      await Un.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[P].label}"?`
      ) && s((ae) => {
        const Oe = { ...ae.draftFields };
        return delete Oe[P], { ...ae, draftFields: Oe };
      });
    },
    [i.draftFields]
  ), fe = ne.useCallback(async () => {
    const P = await Un.Popup.show.input("Enter Draft Field Name", "");
    if (!P?.trim()) return;
    const ie = h1(P.trim());
    if (!ie) return Ae("error", "Invalid field name.");
    if (i.draftFields[ie] || On.includes(ie))
      return Ae("warning", "Field name already exists.");
    s((ae) => ({
      ...ae,
      draftFields: { ...ae.draftFields, [ie]: { value: "", prompt: "", label: P } }
    })), v("draft");
  }, [i.draftFields]), de = (P) => {
    O({ type: "field", fieldId: P }), N(!0);
  }, be = () => {
    O({ type: "global" }), N(!0);
  }, H = (P) => {
    s((ie) => Aw(ie, P)), Ae("success", "Changes from revise session applied."), N(!1);
  }, re = ne.useCallback(
    async (P, ie) => {
      if (!r.profileId) return Ae("warning", "Please select a connection profile.");
      c((ae) => [...ae, P]);
      try {
        const ae = r.contextToSend.messages, Oe = ae.type !== "none" && (or !== void 0 || !!ma), qe = {};
        r.contextToSend.worldInfo && await Promise.all(
          i.selectedWorldNames.filter((Ie) => Pg.includes(Ie)).map(async (Ie) => {
            const kn = await Un.loadWorldInfo(Ie);
            kn && (qe[Ie] = S1(kn, { includeDisabled: !0 }));
          })
        );
        const ye = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete ye.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete ye.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete ye.lorebookDefinitions, r.contextToSend.existingFields || delete ye.existingFieldDefinitions, r.contextToSend.persona || delete ye.personaDescription, delete ye.worldInfoCharDefinition;
        const Te = await I4({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          messageSelection: ae,
          continueFrom: ie,
          session: i,
          allCharacters: _,
          entriesGroupByWorldName: qe,
          promptSettings: ye,
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (Ie) => Ie.enabled && (Oe || Ie.promptName !== "chatHistory")
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: P
        }), zt = P.startsWith("alternate_greetings_"), Mn = !zt && !On.includes(P);
        if (zt) {
          const Ie = parseInt(P.split("_")[2]) - 1, kn = [...te];
          kn[Ie] && (kn[Ie].value = Te), $(kn);
        } else
          Z(P, Te, "value", Mn);
      } catch (ae) {
        console.error(ae), Ae("error", i1(ae));
      } finally {
        c((ae) => ae.filter((Oe) => Oe !== P));
      }
    },
    [i, r, _, te, Z, $]
  ), ue = ne.useCallback(async () => {
    await Un.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(uh()), S(null));
  }, []), ke = ne.useCallback(
    (P) => {
      if (!f) return Ae("warning", "Please load a character to compare against.");
      let ie, ae, Oe;
      typeof P == "number" ? (ie = te[P]?.value ?? "", ae = f.data?.alternate_greetings?.[P] ?? "", Oe = `Alternate Greeting ${P + 1}`) : (ie = i.fields[P]?.value ?? "", ae = f[P] ?? f.data?.[P] ?? "", Oe = lr[P]), T({ original: ae, current: ie, fieldName: Oe });
    },
    [f, i.fields, te]
  ), k = ne.useCallback(
    async (P) => {
      const ie = _[parseInt(P)];
      if (!ie || On.some((ye) => i.fields[ye].value.trim() !== "") && !await Un.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const Oe = { ...i.fields };
      On.forEach((ye) => {
        Oe[ye] = { value: ie[ye] ?? ie.data?.[ye] ?? "", prompt: "", label: lr[ye] };
      });
      const qe = (ie.data?.alternate_greetings ?? []).map((ye) => ({ value: ye, prompt: "" }));
      S(ie), s((ye) => ({ ...ye, fields: Oe, lastLoadedCharacterId: ie.avatar })), $(qe);
    },
    [_, i.fields, $]
  ), j = ne.useCallback(async () => {
    if (ma) {
      Ae("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (or === void 0) {
      Ae("warning", "No character chat is currently open.");
      return;
    }
    await k(String(or));
  }, [k]), F = () => te.map((P) => P.value).filter((P) => P.trim() !== ""), V = async () => {
    if (!i.fields.name.value) return Ae("warning", "Please provide a character name.");
    if (!await Un.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const ie = {
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: F(),
        tags: [],
        avatar: "none",
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      },
      avatar: "none",
      tags: [],
      spec: "chara_card_v3",
      spec_version: "3.0"
    };
    try {
      await sb(ie, !0);
    } catch (ae) {
      Ae("error", `Failed to create character: ${ae.message}`);
    }
  }, le = async () => {
    if (!f) return Ae("warning", "Please load a character to override.");
    if (!await Un.Popup.show.confirm(
      "Override Character",
      `Override "${f.name}"? This cannot be undone.`
    )) return;
    const ie = {
      ...f,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: F(),
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      }
    };
    try {
      await lb(ie, !0), Ae("success", `Character "${ie.name}" updated!`);
    } catch (ae) {
      Ae("error", `Failed to override character: ${ae.message}`);
    }
  }, pe = () => {
    const P = JSON.stringify({ draftFields: i.draftFields, version: Xh }, null, 2), ie = new Blob([P], { type: "application/json" }), ae = document.createElement("a");
    ae.href = URL.createObjectURL(ie), ae.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, ae.click(), URL.revokeObjectURL(ae.href);
  }, Y = () => {
    const P = document.createElement("input");
    P.type = "file", P.accept = ".json", P.onchange = async () => {
      const ie = P.files?.[0];
      if (ie)
        try {
          const ae = await ie.text(), Oe = JSON.parse(ae);
          if (!Oe.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await Un.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((ye) => ({ ...ye, draftFields: Oe.draftFields })), Ae("success", "Draft fields imported."));
        } catch (ae) {
          Ae("error", `Import failed: ${ae.message}`);
        }
    }, P.click();
  }, me = ne.useMemo(
    () => _.map((P, ie) => ({ value: String(ie), label: P.name })),
    [_]
  ), we = ne.useMemo(
    () => y.map((P) => ({ value: P, label: P })),
    [y]
  ), Ze = ne.useMemo(
    () => Gw(y, i.selectedWorldNames),
    [y, i.selectedWorldNames]
  ), $e = ne.useMemo(
    () => Object.keys(r.promptPresets).map((P) => ({ value: P, label: P })),
    [r.promptPresets]
  ), Ve = ne.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((P) => ({ value: P, label: P })),
    [r.mainContextTemplatePresets]
  );
  return h ? /* @__PURE__ */ A.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ A.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ A.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ A.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ A.jsx(
            p1,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (P) => z("profileId", P?.id ?? "")
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
                  onChange: (P) => R("stDescription", P.target.checked)
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
                  onChange: (P) => R("persona", P.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (or !== void 0 || ma) && /* @__PURE__ */ A.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ A.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ A.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (P) => R("messages", {
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
                    onChange: (P) => R("messages", {
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
                    onChange: (P) => R("messages", {
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
                    onChange: (P) => R("messages", {
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
                    onChange: (P) => R("messages", {
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
                  onChange: (P) => R("charCard", P.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ A.jsx(
              Vo,
              {
                items: me,
                value: i.selectedCharacterIndexes,
                onChange: (P) => s((ie) => ({ ...ie, selectedCharacterIndexes: P })),
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
                  onChange: (P) => R("worldInfo", P.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ A.jsx(
              Vo,
              {
                items: Ze,
                value: i.selectedWorldNames,
                onChange: (P) => s((ie) => ({ ...ie, selectedWorldNames: P })),
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
                  onChange: (P) => R("existingFields", P.target.checked)
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
                  onChange: (P) => R("dontSendOtherGreetings", P.target.checked)
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
              Ah,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: Ve,
                value: r.mainContextTemplatePreset,
                onChange: (P) => z("mainContextTemplatePreset", P ?? "default")
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
                onChange: (P) => z("maxContextType", P.target.value),
                children: [
                  /* @__PURE__ */ A.jsx("option", { value: "profile", children: "Use profile preset" }),
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
              onChange: (P) => z("maxContextValue", parseInt(P.target.value) || 16384)
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
                onChange: (P) => z("maxResponseToken", parseInt(P.target.value) || 1024)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Additional Instructions" }),
          /* @__PURE__ */ A.jsx(
            Ah,
            {
              label: "Prompt Preset",
              items: $e,
              value: r.promptPreset,
              onChange: (P) => z("promptPreset", P ?? "default"),
              onItemsChange: (P) => z(
                "promptPresets",
                P.reduce(
                  (ie, ae) => ({ ...ie, [ae.value]: r.promptPresets[ae.value] ?? { content: "" } }),
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
            bn,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (P) => z("promptPresets", {
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
            ce,
            {
              onClick: be,
              title: "Open global revision sessions to edit multiple fields at once",
              children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" })
            }
          ),
          /* @__PURE__ */ A.jsx(ce, { onClick: V, children: "Save as New" }),
          /* @__PURE__ */ A.jsx(ce, { onClick: le, disabled: !f, children: "Override Char" }),
          r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ A.jsx(
            Vo,
            {
              items: we,
              placeholder: "Save as WI Entry",
              closeOnSelect: !0,
              value: [],
              onChange: (P) => {
              },
              onBeforeSelection: async (P, ie) => {
                if (!i.fields.name.value)
                  return Ae("warning", "Please enter a name first."), !1;
                const ae = ie[0], Oe = Zw(
                  r.prompts.worldInfoCharDefinition.content,
                  i.fields,
                  te
                ), qe = {
                  uid: -1,
                  key: [i.fields.name.value],
                  content: Oe,
                  comment: i.fields.name.value,
                  disable: !1,
                  keysecondary: []
                };
                try {
                  await ES({ entry: qe, selectedWorldName: ae, operation: "add" }), Ae("success", `Entry added to ${ae}.`);
                } catch (ye) {
                  Ae("error", `Failed to add WI Entry: ${ye.message}`);
                }
                return !1;
              }
            }
          ),
          /* @__PURE__ */ A.jsxs(ce, { onClick: ue, children: [
            /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-left", style: { marginRight: "10px" } }),
            "Reset Fields"
          ] }),
          /* @__PURE__ */ A.jsx(
            ce,
            {
              onClick: j,
              title: "Load the character from the currently open chat",
              disabled: !!ma || or === void 0,
              children: "Current Char"
            }
          ),
          /* @__PURE__ */ A.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ A.jsx(
            Vo,
            {
              items: me,
              value: f ? [String(_.indexOf(f))] : [],
              onChange: (P) => k(P[0]),
              multiple: !1,
              enableSearch: !0,
              placeholder: "Load Character..."
            }
          ) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ A.jsx(
            ce,
            {
              onClick: () => v("core"),
              className: `menu_button tab-button ${g === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ A.jsx(
            ce,
            {
              onClick: () => v("draft"),
              className: `menu_button tab-button ${g === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ A.jsx("div", { className: "right-aligned", children: g === "draft" && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
            /* @__PURE__ */ A.jsxs(ce, { onClick: fe, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ A.jsx(ce, { onClick: pe, children: "Export" }),
            /* @__PURE__ */ A.jsx(ce, { onClick: Y, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-content-area", children: [
          g === "core" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Core Character Fields" }),
            On.map((P) => {
              const ie = Fw[P];
              return ie ? /* @__PURE__ */ A.jsx(
                By,
                {
                  fieldId: P,
                  label: ie.label,
                  value: i.fields[P]?.value ?? "",
                  prompt: i.fields[P]?.prompt ?? "",
                  large: ie.large,
                  rows: ie.rows,
                  promptEnabled: ie.promptEnabled,
                  isGenerating: o.includes(P),
                  onValueChange: (ae, Oe) => Z(ae, Oe, "value", !1),
                  onPromptChange: (ae, Oe) => Z(ae, Oe, "prompt", !1),
                  onGenerate: re,
                  onContinue: (ae) => re(ae, i.fields[ae].value),
                  onClear: (ae) => Q(ae, !1),
                  onCompare: ke,
                  onOpenReviseSessions: de
                },
                P
              ) : null;
            }),
            /* @__PURE__ */ A.jsx(
              iw,
              {
                greetings: te,
                onGreetingsChange: $,
                isGenerating: o.some((P) => P.startsWith("alternate_greetings_")),
                onGenerate: (P) => re(`alternate_greetings_${P + 1}`),
                onContinue: (P) => re(`alternate_greetings_${P + 1}`, te[P].value),
                onCompare: ke
              }
            )
          ] }),
          g === "draft" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Draft Fields" }),
            Object.entries(i.draftFields).map(([P, ie]) => /* @__PURE__ */ A.jsx(
              By,
              {
                fieldId: P,
                label: ie.label,
                value: ie.value,
                prompt: ie.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: o.includes(P),
                onValueChange: (ae, Oe) => Z(ae, Oe, "value", !0),
                onPromptChange: (ae, Oe) => Z(ae, Oe, "prompt", !0),
                onGenerate: re,
                onContinue: (ae) => re(ae, i.draftFields[ae].value),
                onClear: (ae) => Q(ae, !0),
                onDelete: ee
              },
              P
            ))
          ] })
        ] })
      ] })
    ] }),
    x && /* @__PURE__ */ A.jsx(
      yi,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          Ew,
          {
            originalContent: x.original,
            newContent: x.current,
            fieldName: x.fieldName
          }
        ),
        onComplete: () => T(null),
        options: { wide: !0 }
      }
    ),
    w && C && /* @__PURE__ */ A.jsx(
      yi,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          Hw,
          {
            target: C,
            onClose: () => N(!1),
            onApply: H,
            initialState: { fields: i.fields, draftFields: i.draftFields },
            contextToSend: r.contextToSend,
            sessionForContext: {
              selectedCharacterIndexes: i.selectedCharacterIndexes,
              selectedWorldNames: i.selectedWorldNames
            }
          }
        ),
        onComplete: () => N(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, Yw = () => {
  const [n, r] = ne.useState(!1), i = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = i, n ? /* @__PURE__ */ A.jsx(
    yi,
    {
      content: /* @__PURE__ */ A.jsx(Vw, {}),
      type: on.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, A1 = SillyTavern.getContext();
async function Xw() {
  const n = await A1.renderExtensionTemplateAsync(
    `third-party/${pa}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", n);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), Wg.createRoot(r).render(
    /* @__PURE__ */ A.jsx(nu.StrictMode, { children: /* @__PURE__ */ A.jsx(rw, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', o = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], c = document.createElement("div");
  document.body.appendChild(c), Wg.createRoot(c).render(
    /* @__PURE__ */ A.jsx(nu.StrictMode, { children: /* @__PURE__ */ A.jsx(Yw, {}) })
  ), o.forEach((m) => {
    if (!m) return;
    const g = document.createElement("div");
    g.innerHTML = s.trim();
    const v = g.firstChild;
    v && (m.prepend(v), v.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function Qw() {
  return !!A1.ConnectionManagerRequestService;
}
Qw() ? X4().then(() => {
  Xw();
}) : Ae("error", `[${pa}] Make sure ST is updated.`);
export {
  Xw as init
};
