import "../../../../power-user.js";
import { this_chid as or, name1 as Ug } from "../../../../../script.js";
import { createWorldInfoEntry as G_, world_names as Pg } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import "../../../../instruct-mode.js";
import "../../../../chats.js";
import "../../../../openai.js";
import "../../../../authors-note.js";
import { selected_group as ma } from "../../../../group-chats.js";
import { getRegexedString as F_, regex_placement as Ig } from "../../../regex/engine.js";
import { removeFromArray as Hg, runAfterAnimation as V_ } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as li, fixToastrForDialogs as zf } from "../../../../popup.js";
import qg from "../../../../../lib/dialog-polyfill.esm.js";
function Gy(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Lf = { exports: {} }, Sl = {};
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
function Y_() {
  if (Zg) return Sl;
  Zg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(l, o, c) {
    var h = null;
    if (c !== void 0 && (h = "" + c), o.key !== void 0 && (h = "" + o.key), "key" in o) {
      c = {};
      for (var m in o)
        m !== "key" && (c[m] = o[m]);
    } else c = o;
    return o = c.ref, {
      $$typeof: n,
      type: l,
      key: h,
      ref: o !== void 0 ? o : null,
      props: c
    };
  }
  return Sl.Fragment = r, Sl.jsx = i, Sl.jsxs = i, Sl;
}
var Gg;
function X_() {
  return Gg || (Gg = 1, Lf.exports = Y_()), Lf.exports;
}
var A = X_(), Bf = { exports: {} }, Ne = {};
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
function Q_() {
  if (Fg) return Ne;
  Fg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), b = Symbol.iterator;
  function y(M) {
    return M === null || typeof M != "object" ? null : (M = b && M[b] || M["@@iterator"], typeof M == "function" ? M : null);
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
  function x(M, F, re) {
    this.props = M, this.context = F, this.refs = S, this.updater = re || p;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(M, F) {
    if (typeof M != "object" && typeof M != "function" && M != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, M, F, "setState");
  }, x.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function D() {
  }
  D.prototype = x.prototype;
  function w(M, F, re) {
    this.props = M, this.context = F, this.refs = S, this.updater = re || p;
  }
  var N = w.prototype = new D();
  N.constructor = w, f(N, x.prototype), N.isPureReactComponent = !0;
  var C = Array.isArray, O = { H: null, A: null, T: null, S: null, V: null }, j = Object.prototype.hasOwnProperty;
  function R(M, F, re, se, he, ze) {
    return re = ze.ref, {
      $$typeof: n,
      type: M,
      key: F,
      ref: re !== void 0 ? re : null,
      props: ze
    };
  }
  function Z(M, F) {
    return R(
      M.type,
      F,
      void 0,
      void 0,
      void 0,
      M.props
    );
  }
  function W(M) {
    return typeof M == "object" && M !== null && M.$$typeof === n;
  }
  function $(M) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(re) {
      return F[re];
    });
  }
  var Q = /\/+/g;
  function ee(M, F) {
    return typeof M == "object" && M !== null && M.key != null ? $("" + M.key) : F.toString(36);
  }
  function fe() {
  }
  function pe(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (typeof M.status == "string" ? M.then(fe, fe) : (M.status = "pending", M.then(
          function(F) {
            M.status === "pending" && (M.status = "fulfilled", M.value = F);
          },
          function(F) {
            M.status === "pending" && (M.status = "rejected", M.reason = F);
          }
        )), M.status) {
          case "fulfilled":
            return M.value;
          case "rejected":
            throw M.reason;
        }
    }
    throw M;
  }
  function ye(M, F, re, se, he) {
    var ze = typeof M;
    (ze === "undefined" || ze === "boolean") && (M = null);
    var Y = !1;
    if (M === null) Y = !0;
    else
      switch (ze) {
        case "bigint":
        case "string":
        case "number":
          Y = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case n:
            case r:
              Y = !0;
              break;
            case _:
              return Y = M._init, ye(
                Y(M._payload),
                F,
                re,
                se,
                he
              );
          }
      }
    if (Y)
      return he = he(M), Y = se === "" ? "." + ee(M, 0) : se, C(he) ? (re = "", Y != null && (re = Y.replace(Q, "$&/") + "/"), ye(he, F, re, "", function(Ze) {
        return Ze;
      })) : he != null && (W(he) && (he = Z(
        he,
        re + (he.key == null || M && M.key === he.key ? "" : ("" + he.key).replace(
          Q,
          "$&/"
        ) + "/") + Y
      )), F.push(he)), 1;
    Y = 0;
    var ge = se === "" ? "." : se + ":";
    if (C(M))
      for (var we = 0; we < M.length; we++)
        se = M[we], ze = ge + ee(se, we), Y += ye(
          se,
          F,
          re,
          ze,
          he
        );
    else if (we = y(M), typeof we == "function")
      for (M = we.call(M), we = 0; !(se = M.next()).done; )
        se = se.value, ze = ge + ee(se, we++), Y += ye(
          se,
          F,
          re,
          ze,
          he
        );
    else if (ze === "object") {
      if (typeof M.then == "function")
        return ye(
          pe(M),
          F,
          re,
          se,
          he
        );
      throw F = String(M), Error(
        "Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Y;
  }
  function H(M, F, re) {
    if (M == null) return M;
    var se = [], he = 0;
    return ye(M, se, "", "", function(ze) {
      return F.call(re, ze, he++);
    }), se;
  }
  function ne(M) {
    if (M._status === -1) {
      var F = M._result;
      F = F(), F.then(
        function(re) {
          (M._status === 0 || M._status === -1) && (M._status = 1, M._result = re);
        },
        function(re) {
          (M._status === 0 || M._status === -1) && (M._status = 2, M._result = re);
        }
      ), M._status === -1 && (M._status = 0, M._result = F);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var I = typeof reportError == "function" ? reportError : function(M) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var F = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M),
        error: M
      });
      if (!window.dispatchEvent(F)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", M);
      return;
    }
    console.error(M);
  };
  function le() {
  }
  return Ne.Children = {
    map: H,
    forEach: function(M, F, re) {
      H(
        M,
        function() {
          F.apply(this, arguments);
        },
        re
      );
    },
    count: function(M) {
      var F = 0;
      return H(M, function() {
        F++;
      }), F;
    },
    toArray: function(M) {
      return H(M, function(F) {
        return F;
      }) || [];
    },
    only: function(M) {
      if (!W(M))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return M;
    }
  }, Ne.Component = x, Ne.Fragment = i, Ne.Profiler = o, Ne.PureComponent = w, Ne.StrictMode = l, Ne.Suspense = g, Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O, Ne.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(M) {
      return O.H.useMemoCache(M);
    }
  }, Ne.cache = function(M) {
    return function() {
      return M.apply(null, arguments);
    };
  }, Ne.cloneElement = function(M, F, re) {
    if (M == null)
      throw Error(
        "The argument must be a React element, but you passed " + M + "."
      );
    var se = f({}, M.props), he = M.key, ze = void 0;
    if (F != null)
      for (Y in F.ref !== void 0 && (ze = void 0), F.key !== void 0 && (he = "" + F.key), F)
        !j.call(F, Y) || Y === "key" || Y === "__self" || Y === "__source" || Y === "ref" && F.ref === void 0 || (se[Y] = F[Y]);
    var Y = arguments.length - 2;
    if (Y === 1) se.children = re;
    else if (1 < Y) {
      for (var ge = Array(Y), we = 0; we < Y; we++)
        ge[we] = arguments[we + 2];
      se.children = ge;
    }
    return R(M.type, he, void 0, void 0, ze, se);
  }, Ne.createContext = function(M) {
    return M = {
      $$typeof: h,
      _currentValue: M,
      _currentValue2: M,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, M.Provider = M, M.Consumer = {
      $$typeof: c,
      _context: M
    }, M;
  }, Ne.createElement = function(M, F, re) {
    var se, he = {}, ze = null;
    if (F != null)
      for (se in F.key !== void 0 && (ze = "" + F.key), F)
        j.call(F, se) && se !== "key" && se !== "__self" && se !== "__source" && (he[se] = F[se]);
    var Y = arguments.length - 2;
    if (Y === 1) he.children = re;
    else if (1 < Y) {
      for (var ge = Array(Y), we = 0; we < Y; we++)
        ge[we] = arguments[we + 2];
      he.children = ge;
    }
    if (M && M.defaultProps)
      for (se in Y = M.defaultProps, Y)
        he[se] === void 0 && (he[se] = Y[se]);
    return R(M, ze, void 0, void 0, null, he);
  }, Ne.createRef = function() {
    return { current: null };
  }, Ne.forwardRef = function(M) {
    return { $$typeof: m, render: M };
  }, Ne.isValidElement = W, Ne.lazy = function(M) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: M },
      _init: ne
    };
  }, Ne.memo = function(M, F) {
    return {
      $$typeof: v,
      type: M,
      compare: F === void 0 ? null : F
    };
  }, Ne.startTransition = function(M) {
    var F = O.T, re = {};
    O.T = re;
    try {
      var se = M(), he = O.S;
      he !== null && he(re, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(le, I);
    } catch (ze) {
      I(ze);
    } finally {
      O.T = F;
    }
  }, Ne.unstable_useCacheRefresh = function() {
    return O.H.useCacheRefresh();
  }, Ne.use = function(M) {
    return O.H.use(M);
  }, Ne.useActionState = function(M, F, re) {
    return O.H.useActionState(M, F, re);
  }, Ne.useCallback = function(M, F) {
    return O.H.useCallback(M, F);
  }, Ne.useContext = function(M) {
    return O.H.useContext(M);
  }, Ne.useDebugValue = function() {
  }, Ne.useDeferredValue = function(M, F) {
    return O.H.useDeferredValue(M, F);
  }, Ne.useEffect = function(M, F, re) {
    var se = O.H;
    if (typeof re == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return se.useEffect(M, F);
  }, Ne.useId = function() {
    return O.H.useId();
  }, Ne.useImperativeHandle = function(M, F, re) {
    return O.H.useImperativeHandle(M, F, re);
  }, Ne.useInsertionEffect = function(M, F) {
    return O.H.useInsertionEffect(M, F);
  }, Ne.useLayoutEffect = function(M, F) {
    return O.H.useLayoutEffect(M, F);
  }, Ne.useMemo = function(M, F) {
    return O.H.useMemo(M, F);
  }, Ne.useOptimistic = function(M, F) {
    return O.H.useOptimistic(M, F);
  }, Ne.useReducer = function(M, F, re) {
    return O.H.useReducer(M, F, re);
  }, Ne.useRef = function(M) {
    return O.H.useRef(M);
  }, Ne.useState = function(M) {
    return O.H.useState(M);
  }, Ne.useSyncExternalStore = function(M, F, re) {
    return O.H.useSyncExternalStore(
      M,
      F,
      re
    );
  }, Ne.useTransition = function() {
    return O.H.useTransition();
  }, Ne.version = "19.1.1", Ne;
}
var Vg;
function Mh() {
  return Vg || (Vg = 1, Bf.exports = Q_()), Bf.exports;
}
var te = Mh();
const nu = /* @__PURE__ */ Gy(te);
var Uf = { exports: {} }, xl = {}, Pf = { exports: {} }, If = {};
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
function $_() {
  return Yg || (Yg = 1, (function(n) {
    function r(H, ne) {
      var I = H.length;
      H.push(ne);
      e: for (; 0 < I; ) {
        var le = I - 1 >>> 1, M = H[le];
        if (0 < o(M, ne))
          H[le] = ne, H[I] = M, I = le;
        else break e;
      }
    }
    function i(H) {
      return H.length === 0 ? null : H[0];
    }
    function l(H) {
      if (H.length === 0) return null;
      var ne = H[0], I = H.pop();
      if (I !== ne) {
        H[0] = I;
        e: for (var le = 0, M = H.length, F = M >>> 1; le < F; ) {
          var re = 2 * (le + 1) - 1, se = H[re], he = re + 1, ze = H[he];
          if (0 > o(se, I))
            he < M && 0 > o(ze, se) ? (H[le] = ze, H[he] = I, le = he) : (H[le] = se, H[re] = I, le = re);
          else if (he < M && 0 > o(ze, I))
            H[le] = ze, H[he] = I, le = he;
          else break e;
        }
      }
      return ne;
    }
    function o(H, ne) {
      var I = H.sortIndex - ne.sortIndex;
      return I !== 0 ? I : H.id - ne.id;
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
    var g = [], v = [], _ = 1, b = null, y = 3, p = !1, f = !1, S = !1, x = !1, D = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    function C(H) {
      for (var ne = i(v); ne !== null; ) {
        if (ne.callback === null) l(v);
        else if (ne.startTime <= H)
          l(v), ne.sortIndex = ne.expirationTime, r(g, ne);
        else break;
        ne = i(v);
      }
    }
    function O(H) {
      if (S = !1, C(H), !f)
        if (i(g) !== null)
          f = !0, j || (j = !0, ee());
        else {
          var ne = i(v);
          ne !== null && ye(O, ne.startTime - H);
        }
    }
    var j = !1, R = -1, Z = 5, W = -1;
    function $() {
      return x ? !0 : !(n.unstable_now() - W < Z);
    }
    function Q() {
      if (x = !1, j) {
        var H = n.unstable_now();
        W = H;
        var ne = !0;
        try {
          e: {
            f = !1, S && (S = !1, w(R), R = -1), p = !0;
            var I = y;
            try {
              t: {
                for (C(H), b = i(g); b !== null && !(b.expirationTime > H && $()); ) {
                  var le = b.callback;
                  if (typeof le == "function") {
                    b.callback = null, y = b.priorityLevel;
                    var M = le(
                      b.expirationTime <= H
                    );
                    if (H = n.unstable_now(), typeof M == "function") {
                      b.callback = M, C(H), ne = !0;
                      break t;
                    }
                    b === i(g) && l(g), C(H);
                  } else l(g);
                  b = i(g);
                }
                if (b !== null) ne = !0;
                else {
                  var F = i(v);
                  F !== null && ye(
                    O,
                    F.startTime - H
                  ), ne = !1;
                }
              }
              break e;
            } finally {
              b = null, y = I, p = !1;
            }
            ne = void 0;
          }
        } finally {
          ne ? ee() : j = !1;
        }
      }
    }
    var ee;
    if (typeof N == "function")
      ee = function() {
        N(Q);
      };
    else if (typeof MessageChannel < "u") {
      var fe = new MessageChannel(), pe = fe.port2;
      fe.port1.onmessage = Q, ee = function() {
        pe.postMessage(null);
      };
    } else
      ee = function() {
        D(Q, 0);
      };
    function ye(H, ne) {
      R = D(function() {
        H(n.unstable_now());
      }, ne);
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
          var ne = 3;
          break;
        default:
          ne = y;
      }
      var I = y;
      y = ne;
      try {
        return H();
      } finally {
        y = I;
      }
    }, n.unstable_requestPaint = function() {
      x = !0;
    }, n.unstable_runWithPriority = function(H, ne) {
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
      var I = y;
      y = H;
      try {
        return ne();
      } finally {
        y = I;
      }
    }, n.unstable_scheduleCallback = function(H, ne, I) {
      var le = n.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? le + I : le) : I = le, H) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = I + M, H = {
        id: _++,
        callback: ne,
        priorityLevel: H,
        startTime: I,
        expirationTime: M,
        sortIndex: -1
      }, I > le ? (H.sortIndex = I, r(v, H), i(g) === null && H === i(v) && (S ? (w(R), R = -1) : S = !0, ye(O, I - le))) : (H.sortIndex = M, r(g, H), f || p || (f = !0, j || (j = !0, ee()))), H;
    }, n.unstable_shouldYield = $, n.unstable_wrapCallback = function(H) {
      var ne = y;
      return function() {
        var I = y;
        y = ne;
        try {
          return H.apply(this, arguments);
        } finally {
          y = I;
        }
      };
    };
  })(If)), If;
}
var Xg;
function K_() {
  return Xg || (Xg = 1, Pf.exports = $_()), Pf.exports;
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
function J_() {
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
  var l = {
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
  return Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, Rt.createPortal = function(g, v) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(r(299));
    return c(g, v, null, _);
  }, Rt.flushSync = function(g) {
    var v = h.T, _ = l.p;
    try {
      if (h.T = null, l.p = 2, g) return g();
    } finally {
      h.T = v, l.p = _, l.d.f();
    }
  }, Rt.preconnect = function(g, v) {
    typeof g == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, l.d.C(g, v));
  }, Rt.prefetchDNS = function(g) {
    typeof g == "string" && l.d.D(g);
  }, Rt.preinit = function(g, v) {
    if (typeof g == "string" && v && typeof v.as == "string") {
      var _ = v.as, b = m(_, v.crossOrigin), y = typeof v.integrity == "string" ? v.integrity : void 0, p = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      _ === "style" ? l.d.S(
        g,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: b,
          integrity: y,
          fetchPriority: p
        }
      ) : _ === "script" && l.d.X(g, {
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
          l.d.M(g, {
            crossOrigin: _,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && l.d.M(g);
  }, Rt.preload = function(g, v) {
    if (typeof g == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var _ = v.as, b = m(_, v.crossOrigin);
      l.d.L(g, _, {
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
        l.d.m(g, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: _,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else l.d.m(g);
  }, Rt.requestFormReset = function(g) {
    l.d.r(g);
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
  return n(), Hf.exports = J_(), Hf.exports;
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
function W_() {
  if (Kg) return xl;
  Kg = 1;
  var n = K_(), r = Mh(), i = Fy();
  function l(e) {
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
      throw Error(l(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (t = c(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var a = e, s = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (s = u.return, s !== null) {
          a = s;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === a) return m(u), e;
          if (d === s) return m(u), t;
          d = d.sibling;
        }
        throw Error(l(188));
      }
      if (a.return !== s.return) a = u, s = d;
      else {
        for (var E = !1, T = u.child; T; ) {
          if (T === a) {
            E = !0, a = u, s = d;
            break;
          }
          if (T === s) {
            E = !0, s = u, a = d;
            break;
          }
          T = T.sibling;
        }
        if (!E) {
          for (T = d.child; T; ) {
            if (T === a) {
              E = !0, a = d, s = u;
              break;
            }
            if (T === s) {
              E = !0, s = d, a = u;
              break;
            }
            T = T.sibling;
          }
          if (!E) throw Error(l(189));
        }
      }
      if (a.alternate !== s) throw Error(l(190));
    }
    if (a.tag !== 3) throw Error(l(188));
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
  var _ = Object.assign, b = Symbol.for("react.element"), y = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), N = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), $ = Symbol.for("react.memo_cache_sentinel"), Q = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object" ? null : (e = Q && e[Q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var fe = Symbol.for("react.client.reference");
  function pe(e) {
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
      case j:
        return "SuspenseList";
      case W:
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
          return t = e.displayName || null, t !== null ? t : pe(e.type) || "Memo";
        case Z:
          t = e._payload, e = e._init;
          try {
            return pe(e(t));
          } catch {
          }
      }
    return null;
  }
  var ye = Array.isArray, H = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, le = [], M = -1;
  function F(e) {
    return { current: e };
  }
  function re(e) {
    0 > M || (e.current = le[M], le[M] = null, M--);
  }
  function se(e, t) {
    M++, le[M] = e.current, e.current = t;
  }
  var he = F(null), ze = F(null), Y = F(null), ge = F(null);
  function we(e, t) {
    switch (se(Y, t), se(ze, e), se(he, null), t.nodeType) {
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
    re(he), se(he, e);
  }
  function Ze() {
    re(he), re(ze), re(Y);
  }
  function $e(e) {
    e.memoizedState !== null && se(ge, e);
    var t = he.current, a = dg(t, e.type);
    t !== a && (se(ze, e), se(he, a));
  }
  function Ve(e) {
    ze.current === e && (re(he), re(ze)), ge.current === e && (re(ge), gl._currentValue = I);
  }
  var U = Object.prototype.hasOwnProperty, ie = n.unstable_scheduleCallback, ae = n.unstable_cancelCallback, Oe = n.unstable_shouldYield, qe = n.unstable_requestPaint, _e = n.unstable_now, De = n.unstable_getCurrentPriorityLevel, zt = n.unstable_ImmediatePriority, Mn = n.unstable_UserBlockingPriority, Ie = n.unstable_NormalPriority, kn = n.unstable_LowPriority, Jl = n.unstable_IdlePriority, A1 = n.log, D1 = n.unstable_setDisableYieldValue, Ci = null, Xt = null;
  function dr(e) {
    if (typeof A1 == "function" && D1(e), Xt && typeof Xt.setStrictMode == "function")
      try {
        Xt.setStrictMode(Ci, e);
      } catch {
      }
  }
  var Qt = Math.clz32 ? Math.clz32 : N1, T1 = Math.log, O1 = Math.LN2;
  function N1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (T1(e) / O1 | 0) | 0;
  }
  var Wl = 256, es = 4194304;
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
  function ts(e, t, a) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var u = 0, d = e.suspendedLanes, E = e.pingedLanes;
    e = e.warmLanes;
    var T = s & 134217727;
    return T !== 0 ? (s = T & ~d, s !== 0 ? u = Fr(s) : (E &= T, E !== 0 ? u = Fr(E) : a || (a = T & ~e, a !== 0 && (u = Fr(a))))) : (T = s & ~d, T !== 0 ? u = Fr(T) : E !== 0 ? u = Fr(E) : a || (a = s & ~e, a !== 0 && (u = Fr(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & d) === 0 && (d = u & -u, a = t & -t, d >= a || d === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function wi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function M1(e, t) {
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
    var e = Wl;
    return Wl <<= 1, (Wl & 4194048) === 0 && (Wl = 256), e;
  }
  function $h() {
    var e = es;
    return es <<= 1, (es & 62914560) === 0 && (es = 4194304), e;
  }
  function Eu(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ai(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function k1(e, t, a, s, u, d) {
    var E = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var T = e.entanglements, k = e.expirationTimes, P = e.hiddenUpdates;
    for (a = E & ~a; 0 < a; ) {
      var V = 31 - Qt(a), K = 1 << V;
      T[V] = 0, k[V] = -1;
      var q = P[V];
      if (q !== null)
        for (P[V] = null, V = 0; V < q.length; V++) {
          var G = q[V];
          G !== null && (G.lane &= -536870913);
        }
      a &= ~K;
    }
    s !== 0 && Kh(e, s, 0), d !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(E & ~t));
  }
  function Kh(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var s = 31 - Qt(t);
    e.entangledLanes |= t, e.entanglements[s] = e.entanglements[s] | 1073741824 | a & 4194090;
  }
  function Jh(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var s = 31 - Qt(a), u = 1 << s;
      u & t | e[s] & t && (e[s] |= t), a &= ~u;
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
    var e = ne.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : kg(e.type));
  }
  function R1(e, t) {
    var a = ne.p;
    try {
      return ne.p = e, t();
    } finally {
      ne.p = a;
    }
  }
  var pr = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + pr, Ut = "__reactProps$" + pr, Sa = "__reactContainer$" + pr, Au = "__reactEvents$" + pr, j1 = "__reactListeners$" + pr, z1 = "__reactHandles$" + pr, ed = "__reactResources$" + pr, Di = "__reactMarker$" + pr;
  function Du(e) {
    delete e[Mt], delete e[Ut], delete e[Au], delete e[j1], delete e[z1];
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
  function Ti(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Ca(e) {
    var t = e[ed];
    return t || (t = e[ed] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Et(e) {
    e[Di] = !0;
  }
  var td = /* @__PURE__ */ new Set(), nd = {};
  function Vr(e, t) {
    wa(e, t), wa(e + "Capture", t);
  }
  function wa(e, t) {
    for (nd[e] = t, e = 0; e < t.length; e++)
      td.add(t[e]);
  }
  var L1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), rd = {}, ad = {};
  function B1(e) {
    return U.call(ad, e) ? !0 : U.call(rd, e) ? !1 : L1.test(e) ? ad[e] = !0 : (rd[e] = !0, !1);
  }
  function ns(e, t, a) {
    if (B1(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var s = t.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function rs(e, t, a) {
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
  function Zn(e, t, a, s) {
    if (s === null) e.removeAttribute(a);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + s);
    }
  }
  var Tu, id;
  function Aa(e) {
    if (Tu === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Tu = t && t[1] || "", id = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Tu + e + id;
  }
  var Ou = !1;
  function Nu(e, t) {
    if (!e || Ou) return "";
    Ou = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
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
                } catch (G) {
                  var q = G;
                }
                Reflect.construct(e, [], K);
              } else {
                try {
                  K.call();
                } catch (G) {
                  q = G;
                }
                e.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                q = G;
              }
              (K = e()) && typeof K.catch == "function" && K.catch(function() {
              });
            }
          } catch (G) {
            if (G && q && typeof G.stack == "string")
              return [G.stack, q.stack];
          }
          return [null, null];
        }
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        s.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var d = s.DetermineComponentFrameRoot(), E = d[0], T = d[1];
      if (E && T) {
        var k = E.split(`
`), P = T.split(`
`);
        for (u = s = 0; s < k.length && !k[s].includes("DetermineComponentFrameRoot"); )
          s++;
        for (; u < P.length && !P[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (s === k.length || u === P.length)
          for (s = k.length - 1, u = P.length - 1; 1 <= s && 0 <= u && k[s] !== P[u]; )
            u--;
        for (; 1 <= s && 0 <= u; s--, u--)
          if (k[s] !== P[u]) {
            if (s !== 1 || u !== 1)
              do
                if (s--, u--, 0 > u || k[s] !== P[u]) {
                  var V = `
` + k[s].replace(" at new ", " at ");
                  return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), V;
                }
              while (1 <= s && 0 <= u);
            break;
          }
      }
    } finally {
      Ou = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Aa(a) : "";
  }
  function U1(e) {
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
  function ld(e) {
    try {
      var t = "";
      do
        t += U1(e), e = e.return;
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
  function sd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function P1(e) {
    var t = sd(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, d = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(E) {
          s = "" + E, d.call(this, E);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return s;
        },
        setValue: function(E) {
          s = "" + E;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function as(e) {
    e._valueTracker || (e._valueTracker = P1(e));
  }
  function od(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), s = "";
    return e && (s = sd(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== a ? (t.setValue(e), !0) : !1;
  }
  function is(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var I1 = /[\n"\\]/g;
  function cn(e) {
    return e.replace(
      I1,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Mu(e, t, a, s, u, d, E, T) {
    e.name = "", E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean" ? e.type = E : e.removeAttribute("type"), t != null ? E === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + un(t)) : e.value !== "" + un(t) && (e.value = "" + un(t)) : E !== "submit" && E !== "reset" || e.removeAttribute("value"), t != null ? ku(e, E, un(t)) : a != null ? ku(e, E, un(a)) : s != null && e.removeAttribute("value"), u == null && d != null && (e.defaultChecked = !!d), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.name = "" + un(T) : e.removeAttribute("name");
  }
  function ud(e, t, a, s, u, d, E, T) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), t != null || a != null) {
      if (!(d !== "submit" && d !== "reset" || t != null))
        return;
      a = a != null ? "" + un(a) : "", t = t != null ? "" + un(t) : a, T || t === e.value || (e.value = t), e.defaultValue = t;
    }
    s = s ?? u, s = typeof s != "function" && typeof s != "symbol" && !!s, e.checked = T ? e.checked : !!s, e.defaultChecked = !!s, E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean" && (e.name = E);
  }
  function ku(e, t, a) {
    t === "number" && is(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Da(e, t, a, s) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < a.length; u++)
        t["$" + a[u]] = !0;
      for (a = 0; a < e.length; a++)
        u = t.hasOwnProperty("$" + e[a].value), e[a].selected !== u && (e[a].selected = u), u && s && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + un(a), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === a) {
          e[u].selected = !0, s && (e[u].defaultSelected = !0);
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
  function fd(e, t, a, s) {
    if (t == null) {
      if (s != null) {
        if (a != null) throw Error(l(92));
        if (ye(s)) {
          if (1 < s.length) throw Error(l(93));
          s = s[0];
        }
        a = s;
      }
      a == null && (a = ""), t = a;
    }
    a = un(t), e.defaultValue = a, s = e.textContent, s === a && s !== "" && s !== null && (e.value = s);
  }
  function Ta(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var H1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function hd(e, t, a) {
    var s = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? s ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : s ? e.setProperty(t, a) : typeof a != "number" || a === 0 || H1.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function dd(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(l(62));
    if (e = e.style, a != null) {
      for (var s in a)
        !a.hasOwnProperty(s) || t != null && t.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
      for (var u in t)
        s = t[u], t.hasOwnProperty(u) && a[u] !== s && hd(e, u, s);
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
  var q1 = /* @__PURE__ */ new Map([
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
  ]), Z1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ls(e) {
    return Z1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
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
              var s = a[t];
              if (s !== e && s.form === e.form) {
                var u = s[Ut] || null;
                if (!u) throw Error(l(90));
                Mu(
                  s,
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
              s = a[t], s.form === e.form && od(s);
          }
          break e;
        case "textarea":
          cd(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Da(e, !!a.multiple, t, !1);
      }
    }
  }
  var Lu = !1;
  function md(e, t, a) {
    if (Lu) return e(t, a);
    Lu = !0;
    try {
      var s = e(t);
      return s;
    } finally {
      if (Lu = !1, (Oa !== null || Na !== null) && (Fs(), Oa && (t = Oa, e = Na, Na = Oa = null, pd(t), e)))
        for (t = 0; t < e.length; t++) pd(e[t]);
    }
  }
  function Oi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var s = a[Ut] || null;
    if (s === null) return null;
    a = s[t];
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
        (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        l(231, t, typeof a)
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
  var mr = null, Uu = null, ss = null;
  function gd() {
    if (ss) return ss;
    var e, t = Uu, a = t.length, s, u = "value" in mr ? mr.value : mr.textContent, d = u.length;
    for (e = 0; e < a && t[e] === u[e]; e++) ;
    var E = a - e;
    for (s = 1; s <= E && t[a - s] === u[d - s]; s++) ;
    return ss = u.slice(e, 1 < s ? 1 - s : void 0);
  }
  function os(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function us() {
    return !0;
  }
  function vd() {
    return !1;
  }
  function Pt(e) {
    function t(a, s, u, d, E) {
      this._reactName = a, this._targetInst = u, this.type = s, this.nativeEvent = d, this.target = E, this.currentTarget = null;
      for (var T in e)
        e.hasOwnProperty(T) && (a = e[T], this[T] = a ? a(d) : d[T]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? us : vd, this.isPropagationStopped = vd, this;
    }
    return _(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = us);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = us);
      },
      persist: function() {
      },
      isPersistent: us
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
  }, cs = Pt(Yr), Mi = _({}, Yr, { view: 0, detail: 0 }), G1 = Pt(Mi), Pu, Iu, ki, fs = _({}, Mi, {
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
  }), yd = Pt(fs), F1 = _({}, fs, { dataTransfer: 0 }), V1 = Pt(F1), Y1 = _({}, Mi, { relatedTarget: 0 }), Hu = Pt(Y1), X1 = _({}, Yr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Q1 = Pt(X1), $1 = _({}, Yr, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), K1 = Pt($1), J1 = _({}, Yr, { data: 0 }), _d = Pt(J1), W1 = {
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
  }, e2 = {
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
  }, t2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function n2(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = t2[e]) ? !!t[e] : !1;
  }
  function qu() {
    return n2;
  }
  var r2 = _({}, Mi, {
    key: function(e) {
      if (e.key) {
        var t = W1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = os(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? e2[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? os(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? os(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), a2 = Pt(r2), i2 = _({}, fs, {
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
  }), bd = Pt(i2), l2 = _({}, Mi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qu
  }), s2 = Pt(l2), o2 = _({}, Yr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), u2 = Pt(o2), c2 = _({}, fs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), f2 = Pt(c2), h2 = _({}, Yr, {
    newState: 0,
    oldState: 0
  }), d2 = Pt(h2), p2 = [9, 13, 27, 32], Zu = Gn && "CompositionEvent" in window, Ri = null;
  Gn && "documentMode" in document && (Ri = document.documentMode);
  var m2 = Gn && "TextEvent" in window && !Ri, Sd = Gn && (!Zu || Ri && 8 < Ri && 11 >= Ri), xd = " ", Ed = !1;
  function Cd(e, t) {
    switch (e) {
      case "keyup":
        return p2.indexOf(t.keyCode) !== -1;
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
  function g2(e, t) {
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
  function v2(e, t) {
    if (Ma)
      return e === "compositionend" || !Zu && Cd(e, t) ? (e = gd(), ss = Uu = mr = null, Ma = !1, e) : null;
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
  var y2 = {
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
    return t === "input" ? !!y2[e.type] : t === "textarea";
  }
  function Dd(e, t, a, s) {
    Oa ? Na ? Na.push(s) : Na = [s] : Oa = s, t = Ks(t, "onChange"), 0 < t.length && (a = new cs(
      "onChange",
      "change",
      null,
      a,
      s
    ), e.push({ event: a, listeners: t }));
  }
  var ji = null, zi = null;
  function _2(e) {
    sg(e, 0);
  }
  function hs(e) {
    var t = Ti(e);
    if (od(t)) return e;
  }
  function Td(e, t) {
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
    if (e.propertyName === "value" && hs(zi)) {
      var t = [];
      Dd(
        t,
        zi,
        e,
        zu(e)
      ), md(_2, t);
    }
  }
  function b2(e, t, a) {
    e === "focusin" ? (Md(), ji = t, zi = a, ji.attachEvent("onpropertychange", kd)) : e === "focusout" && Md();
  }
  function S2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return hs(zi);
  }
  function x2(e, t) {
    if (e === "click") return hs(t);
  }
  function E2(e, t) {
    if (e === "input" || e === "change")
      return hs(t);
  }
  function C2(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var $t = typeof Object.is == "function" ? Object.is : C2;
  function Li(e, t) {
    if ($t(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), s = Object.keys(t);
    if (a.length !== s.length) return !1;
    for (s = 0; s < a.length; s++) {
      var u = a[s];
      if (!U.call(t, u) || !$t(e[u], t[u]))
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
    for (var s; a; ) {
      if (a.nodeType === 3) {
        if (s = e + a.textContent.length, e <= t && s >= t)
          return { node: a, offset: t - e };
        e = s;
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
    for (var t = is(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = is(e.document);
    }
    return t;
  }
  function Vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var w2 = Gn && "documentMode" in document && 11 >= document.documentMode, ka = null, Yu = null, Bi = null, Xu = !1;
  function Bd(e, t, a) {
    var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Xu || ka == null || ka !== is(s) || (s = ka, "selectionStart" in s && Vu(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), Bi && Li(Bi, s) || (Bi = s, s = Ks(Yu, "onSelect"), 0 < s.length && (t = new cs(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: s }), t.target = ka)));
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
  var Pd = Qr("animationend"), Id = Qr("animationiteration"), Hd = Qr("animationstart"), A2 = Qr("transitionrun"), D2 = Qr("transitionstart"), T2 = Qr("transitioncancel"), qd = Qr("transitionend"), Zd = /* @__PURE__ */ new Map(), $u = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
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
        stack: ld(t)
      }, Gd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: ld(t)
    };
  }
  var hn = [], ja = 0, Ku = 0;
  function ds() {
    for (var e = ja, t = Ku = ja = 0; t < e; ) {
      var a = hn[t];
      hn[t++] = null;
      var s = hn[t];
      hn[t++] = null;
      var u = hn[t];
      hn[t++] = null;
      var d = hn[t];
      if (hn[t++] = null, s !== null && u !== null) {
        var E = s.pending;
        E === null ? u.next = u : (u.next = E.next, E.next = u), s.pending = u;
      }
      d !== 0 && Fd(a, u, d);
    }
  }
  function ps(e, t, a, s) {
    hn[ja++] = e, hn[ja++] = t, hn[ja++] = a, hn[ja++] = s, Ku |= s, e.lanes |= s, e = e.alternate, e !== null && (e.lanes |= s);
  }
  function Ju(e, t, a, s) {
    return ps(e, t, a, s), ms(e);
  }
  function za(e, t) {
    return ps(e, null, null, t), ms(e);
  }
  function Fd(e, t, a) {
    e.lanes |= a;
    var s = e.alternate;
    s !== null && (s.lanes |= a);
    for (var u = !1, d = e.return; d !== null; )
      d.childLanes |= a, s = d.alternate, s !== null && (s.childLanes |= a), d.tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (u = !0)), e = d, d = d.return;
    return e.tag === 3 ? (d = e.stateNode, u && t !== null && (u = 31 - Qt(a), e = d.hiddenUpdates, s = e[u], s === null ? e[u] = [t] : s.push(t), t.lane = a | 536870912), d) : null;
  }
  function ms(e) {
    if (50 < ol)
      throw ol = 0, af = null, Error(l(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var La = {};
  function O2(e, t, a, s) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Kt(e, t, a, s) {
    return new O2(e, t, a, s);
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
  function gs(e, t, a, s, u, d) {
    var E = 0;
    if (s = e, typeof e == "function") Wu(e) && (E = 1);
    else if (typeof e == "string")
      E = M_(
        e,
        a,
        he.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case W:
          return e = Kt(31, a, t, u), e.elementType = W, e.lanes = d, e;
        case f:
          return $r(a.children, u, d, t);
        case S:
          E = 8, u |= 24;
          break;
        case x:
          return e = Kt(12, a, t, u | 2), e.elementType = x, e.lanes = d, e;
        case O:
          return e = Kt(13, a, t, u), e.elementType = O, e.lanes = d, e;
        case j:
          return e = Kt(19, a, t, u), e.elementType = j, e.lanes = d, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case D:
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
                E = 16, s = null;
                break e;
            }
          E = 29, a = Error(
            l(130, e === null ? "null" : typeof e, "")
          ), s = null;
      }
    return t = Kt(E, a, t, u), t.elementType = e, t.type = s, t.lanes = d, t;
  }
  function $r(e, t, a, s) {
    return e = Kt(7, e, s, t), e.lanes = a, e;
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
  var Ba = [], Ua = 0, vs = null, ys = 0, dn = [], pn = 0, Kr = null, Vn = 1, Yn = "";
  function Jr(e, t) {
    Ba[Ua++] = ys, Ba[Ua++] = vs, vs = e, ys = t;
  }
  function Yd(e, t, a) {
    dn[pn++] = Vn, dn[pn++] = Yn, dn[pn++] = Kr, Kr = e;
    var s = Vn;
    e = Yn;
    var u = 32 - Qt(s) - 1;
    s &= ~(1 << u), a += 1;
    var d = 32 - Qt(t) + u;
    if (30 < d) {
      var E = u - u % 5;
      d = (s & (1 << E) - 1).toString(32), s >>= E, u -= E, Vn = 1 << 32 - Qt(t) + u | a << u | s, Yn = d + e;
    } else
      Vn = 1 << d | a << u | s, Yn = e;
  }
  function nc(e) {
    e.return !== null && (Jr(e, 1), Yd(e, 1, 0));
  }
  function rc(e) {
    for (; e === vs; )
      vs = Ba[--Ua], Ba[Ua] = null, ys = Ba[--Ua], Ba[Ua] = null;
    for (; e === Kr; )
      Kr = dn[--pn], dn[pn] = null, Yn = dn[--pn], dn[pn] = null, Vn = dn[--pn], dn[pn] = null;
  }
  var Lt = null, lt = null, He = !1, Wr = null, Rn = !1, ac = Error(l(519));
  function ea(e) {
    var t = Error(l(418, ""));
    throw Ii(fn(t, e)), ac;
  }
  function Xd(e) {
    var t = e.stateNode, a = e.type, s = e.memoizedProps;
    switch (t[Mt] = e, t[Ut] = s, a) {
      case "dialog":
        je("cancel", t), je("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        je("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < cl.length; a++)
          je(cl[a], t);
        break;
      case "source":
        je("error", t);
        break;
      case "img":
      case "image":
      case "link":
        je("error", t), je("load", t);
        break;
      case "details":
        je("toggle", t);
        break;
      case "input":
        je("invalid", t), ud(
          t,
          s.value,
          s.defaultValue,
          s.checked,
          s.defaultChecked,
          s.type,
          s.name,
          !0
        ), as(t);
        break;
      case "select":
        je("invalid", t);
        break;
      case "textarea":
        je("invalid", t), fd(t, s.value, s.defaultValue, s.children), as(t);
    }
    a = s.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || s.suppressHydrationWarning === !0 || fg(t.textContent, a) ? (s.popover != null && (je("beforetoggle", t), je("toggle", t)), s.onScroll != null && je("scroll", t), s.onScrollEnd != null && je("scrollend", t), s.onClick != null && (t.onclick = Js), t = !0) : t = !1, t || ea(e);
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
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Sf(e.type, e.memoizedProps)), a = !a), a && lt && ea(e), Qd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (t === 0) {
                lt = Cn(e.nextSibling);
                break e;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          e = e.nextSibling;
        }
        lt = null;
      }
    } else
      t === 27 ? (t = lt, Mr(e.type) ? (e = wf, wf = null, lt = e) : lt = t) : lt = Lt ? Cn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pi() {
    lt = Lt = null, He = !1;
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
  var ic = F(null), ta = null, Xn = null;
  function gr(e, t, a) {
    se(ic, t._currentValue), t._currentValue = a;
  }
  function Qn(e) {
    e._currentValue = ic.current, re(ic);
  }
  function lc(e, t, a) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function sc(e, t, a, s) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var d = u.dependencies;
      if (d !== null) {
        var E = u.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var T = d;
          d = u;
          for (var k = 0; k < t.length; k++)
            if (T.context === t[k]) {
              d.lanes |= a, T = d.alternate, T !== null && (T.lanes |= a), lc(
                d.return,
                a,
                e
              ), s || (E = null);
              break e;
            }
          d = T.next;
        }
      } else if (u.tag === 18) {
        if (E = u.return, E === null) throw Error(l(341));
        E.lanes |= a, d = E.alternate, d !== null && (d.lanes |= a), lc(E, a, e), E = null;
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
  function Hi(e, t, a, s) {
    e = null;
    for (var u = t, d = !1; u !== null; ) {
      if (!d) {
        if ((u.flags & 524288) !== 0) d = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var E = u.alternate;
        if (E === null) throw Error(l(387));
        if (E = E.memoizedProps, E !== null) {
          var T = u.type;
          $t(u.pendingProps.value, E.value) || (e !== null ? e.push(T) : e = [T]);
        }
      } else if (u === ge.current) {
        if (E = u.alternate, E === null) throw Error(l(387));
        E.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(gl) : e = [gl]);
      }
      u = u.return;
    }
    e !== null && sc(
      t,
      e,
      a,
      s
    ), t.flags |= 262144;
  }
  function _s(e) {
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
  function bs(e, t) {
    return ta === null && na(e), Kd(e, t);
  }
  function Kd(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Xn === null) {
      if (e === null) throw Error(l(308));
      Xn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Xn = Xn.next = t;
    return a;
  }
  var N2 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, s) {
        e.push(s);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, M2 = n.unstable_scheduleCallback, k2 = n.unstable_NormalPriority, _t = {
    $$typeof: N,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function oc() {
    return {
      controller: new N2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function qi(e) {
    e.refCount--, e.refCount === 0 && M2(k2, function() {
      e.controller.abort();
    });
  }
  var Zi = null, uc = 0, Pa = 0, Ia = null;
  function R2(e, t) {
    if (Zi === null) {
      var a = Zi = [];
      uc = 0, Pa = hf(), Ia = {
        status: "pending",
        value: void 0,
        then: function(s) {
          a.push(s);
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
  function j2(e, t) {
    var a = [], s = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        a.push(u);
      }
    };
    return e.then(
      function() {
        s.status = "fulfilled", s.value = t;
        for (var u = 0; u < a.length; u++) (0, a[u])(t);
      },
      function(u) {
        for (s.status = "rejected", s.reason = u, u = 0; u < a.length; u++)
          (0, a[u])(void 0);
      }
    ), s;
  }
  var Wd = H.S;
  H.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && R2(e, t), Wd !== null && Wd(e, t);
  };
  var ra = F(null);
  function cc() {
    var e = ra.current;
    return e !== null ? e : Je.pooledCache;
  }
  function Ss(e, t) {
    t === null ? se(ra, ra.current) : se(ra, t.pool);
  }
  function ep() {
    var e = cc();
    return e === null ? null : { parent: _t._currentValue, pool: e };
  }
  var Gi = Error(l(460)), tp = Error(l(474)), xs = Error(l(542)), fc = { then: function() {
  } };
  function np(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Es() {
  }
  function rp(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Es, Es), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, ip(e), e;
      default:
        if (typeof t.status == "string") t.then(Es, Es);
        else {
          if (e = Je, e !== null && 100 < e.shellSuspendCounter)
            throw Error(l(482));
          e = t, e.status = "pending", e.then(
            function(s) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = s;
              }
            },
            function(s) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = s;
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
    if (Fi === null) throw Error(l(459));
    var e = Fi;
    return Fi = null, e;
  }
  function ip(e) {
    if (e === Gi || e === xs)
      throw Error(l(483));
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
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Ge & 2) !== 0) {
      var u = s.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), s.pending = t, t = ms(e), Fd(e, null, a), t;
    }
    return ps(e, s, t, a), ms(e);
  }
  function Vi(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, a |= s, t.lanes = a, Jh(e, a);
    }
  }
  function pc(e, t) {
    var a = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, a === s)) {
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
        baseState: s.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: s.shared,
        callbacks: s.callbacks
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
  function Xi(e, t, a, s) {
    mc = !1;
    var u = e.updateQueue;
    vr = !1;
    var d = u.firstBaseUpdate, E = u.lastBaseUpdate, T = u.shared.pending;
    if (T !== null) {
      u.shared.pending = null;
      var k = T, P = k.next;
      k.next = null, E === null ? d = P : E.next = P, E = k;
      var V = e.alternate;
      V !== null && (V = V.updateQueue, T = V.lastBaseUpdate, T !== E && (T === null ? V.firstBaseUpdate = P : T.next = P, V.lastBaseUpdate = k));
    }
    if (d !== null) {
      var K = u.baseState;
      E = 0, V = P = k = null, T = d;
      do {
        var q = T.lane & -536870913, G = q !== T.lane;
        if (G ? (Ue & q) === q : (s & q) === q) {
          q !== 0 && q === Pa && (mc = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: null,
            next: null
          });
          e: {
            var Se = e, ve = T;
            q = t;
            var Qe = a;
            switch (ve.tag) {
              case 1:
                if (Se = ve.payload, typeof Se == "function") {
                  K = Se.call(Qe, K, q);
                  break e;
                }
                K = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = ve.payload, q = typeof Se == "function" ? Se.call(Qe, K, q) : Se, q == null) break e;
                K = _({}, K, q);
                break e;
              case 2:
                vr = !0;
            }
          }
          q = T.callback, q !== null && (e.flags |= 64, G && (e.flags |= 8192), G = u.callbacks, G === null ? u.callbacks = [q] : G.push(q));
        } else
          G = {
            lane: q,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          }, V === null ? (P = V = G, k = K) : V = V.next = G, E |= q;
        if (T = T.next, T === null) {
          if (T = u.shared.pending, T === null)
            break;
          G = T, T = G.next, G.next = null, u.lastBaseUpdate = G, u.shared.pending = null;
        }
      } while (!0);
      V === null && (k = K), u.baseState = k, u.firstBaseUpdate = P, u.lastBaseUpdate = V, d === null && (u.shared.lanes = 0), Dr |= E, e.lanes = E, e.memoizedState = K;
    }
  }
  function lp(e, t) {
    if (typeof e != "function")
      throw Error(l(191, e));
    e.call(t);
  }
  function sp(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        lp(a[e], t);
  }
  var Ha = F(null), Cs = F(0);
  function op(e, t) {
    e = nr, se(Cs, e), se(Ha, t), nr = e | t.baseLanes;
  }
  function gc() {
    se(Cs, nr), se(Ha, Ha.current);
  }
  function vc() {
    nr = Cs.current, re(Ha), re(Cs);
  }
  var br = 0, Me = null, Ye = null, ft = null, ws = !1, qa = !1, aa = !1, As = 0, Qi = 0, Za = null, z2 = 0;
  function ut() {
    throw Error(l(321));
  }
  function yc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!$t(e[a], t[a])) return !1;
    return !0;
  }
  function _c(e, t, a, s, u, d) {
    return br = d, Me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e === null || e.memoizedState === null ? Fp : Vp, aa = !1, d = a(s, u), aa = !1, qa && (d = cp(
      t,
      a,
      s,
      u
    )), up(e), d;
  }
  function up(e) {
    H.H = ks;
    var t = Ye !== null && Ye.next !== null;
    if (br = 0, ft = Ye = Me = null, ws = !1, Qi = 0, Za = null, t) throw Error(l(300));
    e === null || Ct || (e = e.dependencies, e !== null && _s(e) && (Ct = !0));
  }
  function cp(e, t, a, s) {
    Me = e;
    var u = 0;
    do {
      if (qa && (Za = null), Qi = 0, qa = !1, 25 <= u) throw Error(l(301));
      if (u += 1, ft = Ye = null, e.updateQueue != null) {
        var d = e.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      H.H = q2, d = t(a, s);
    } while (qa);
    return d;
  }
  function L2() {
    var e = H.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? $i(t) : t, e = e.useState()[0], (Ye !== null ? Ye.memoizedState : null) !== e && (Me.flags |= 1024), t;
  }
  function bc() {
    var e = As !== 0;
    return As = 0, e;
  }
  function Sc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function xc(e) {
    if (ws) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ws = !1;
    }
    br = 0, ft = Ye = Me = null, qa = !1, Qi = As = 0, Za = null;
  }
  function It() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ft === null ? Me.memoizedState = ft = e : ft = ft.next = e, ft;
  }
  function ht() {
    if (Ye === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ye.next;
    var t = ft === null ? Me.memoizedState : ft.next;
    if (t !== null)
      ft = t, Ye = e;
    else {
      if (e === null)
        throw Me.alternate === null ? Error(l(467)) : Error(l(310));
      Ye = e, e = {
        memoizedState: Ye.memoizedState,
        baseState: Ye.baseState,
        baseQueue: Ye.baseQueue,
        queue: Ye.queue,
        next: null
      }, ft === null ? Me.memoizedState = ft = e : ft = ft.next = e;
    }
    return ft;
  }
  function Ec() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $i(e) {
    var t = Qi;
    return Qi += 1, Za === null && (Za = []), e = rp(Za, e, t), t = Me, (ft === null ? t.memoizedState : ft.next) === null && (t = t.alternate, H.H = t === null || t.memoizedState === null ? Fp : Vp), e;
  }
  function Ds(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return $i(e);
      if (e.$$typeof === N) return kt(e);
    }
    throw Error(l(438, String(e)));
  }
  function Cc(e) {
    var t = null, a = Me.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var s = Me.alternate;
      s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (t = {
        data: s.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Ec(), Me.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), s = 0; s < e; s++)
        a[s] = $;
    return t.index++, a;
  }
  function $n(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ts(e) {
    var t = ht();
    return wc(t, Ye, e);
  }
  function wc(e, t, a) {
    var s = e.queue;
    if (s === null) throw Error(l(311));
    s.lastRenderedReducer = a;
    var u = e.baseQueue, d = s.pending;
    if (d !== null) {
      if (u !== null) {
        var E = u.next;
        u.next = d.next, d.next = E;
      }
      t.baseQueue = u = d, s.pending = null;
    }
    if (d = e.baseState, u === null) e.memoizedState = d;
    else {
      t = u.next;
      var T = E = null, k = null, P = t, V = !1;
      do {
        var K = P.lane & -536870913;
        if (K !== P.lane ? (Ue & K) === K : (br & K) === K) {
          var q = P.revertLane;
          if (q === 0)
            k !== null && (k = k.next = {
              lane: 0,
              revertLane: 0,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            }), K === Pa && (V = !0);
          else if ((br & q) === q) {
            P = P.next, q === Pa && (V = !0);
            continue;
          } else
            K = {
              lane: 0,
              revertLane: P.revertLane,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            }, k === null ? (T = k = K, E = d) : k = k.next = K, Me.lanes |= q, Dr |= q;
          K = P.action, aa && a(d, K), d = P.hasEagerState ? P.eagerState : a(d, K);
        } else
          q = {
            lane: K,
            revertLane: P.revertLane,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null
          }, k === null ? (T = k = q, E = d) : k = k.next = q, Me.lanes |= K, Dr |= K;
        P = P.next;
      } while (P !== null && P !== t);
      if (k === null ? E = d : k.next = T, !$t(d, e.memoizedState) && (Ct = !0, V && (a = Ia, a !== null)))
        throw a;
      e.memoizedState = d, e.baseState = E, e.baseQueue = k, s.lastRenderedState = d;
    }
    return u === null && (s.lanes = 0), [e.memoizedState, s.dispatch];
  }
  function Ac(e) {
    var t = ht(), a = t.queue;
    if (a === null) throw Error(l(311));
    a.lastRenderedReducer = e;
    var s = a.dispatch, u = a.pending, d = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var E = u = u.next;
      do
        d = e(d, E.action), E = E.next;
      while (E !== u);
      $t(d, t.memoizedState) || (Ct = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), a.lastRenderedState = d;
    }
    return [d, s];
  }
  function fp(e, t, a) {
    var s = Me, u = ht(), d = He;
    if (d) {
      if (a === void 0) throw Error(l(407));
      a = a();
    } else a = t();
    var E = !$t(
      (Ye || u).memoizedState,
      a
    );
    E && (u.memoizedState = a, Ct = !0), u = u.queue;
    var T = pp.bind(null, s, u, e);
    if (Ki(2048, 8, T, [e]), u.getSnapshot !== t || E || ft !== null && ft.memoizedState.tag & 1) {
      if (s.flags |= 2048, Ga(
        9,
        Os(),
        dp.bind(
          null,
          s,
          u,
          a,
          t
        ),
        null
      ), Je === null) throw Error(l(349));
      d || (br & 124) !== 0 || hp(s, t, a);
    }
    return a;
  }
  function hp(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Me.updateQueue, t === null ? (t = Ec(), Me.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function dp(e, t, a, s) {
    t.value = a, t.getSnapshot = s, mp(t) && gp(e);
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
  function Dc(e) {
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
  function vp(e, t, a, s) {
    return e.baseState = a, wc(
      e,
      Ye,
      typeof s == "function" ? s : $n
    );
  }
  function B2(e, t, a, s, u) {
    if (Ms(e)) throw Error(l(485));
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
      H.T !== null ? a(!0) : d.isTransition = !1, s(d), a = t.pending, a === null ? (d.next = t.pending = d, yp(t, d)) : (d.next = a.next, t.pending = a.next = d);
    }
  }
  function yp(e, t) {
    var a = t.action, s = t.payload, u = e.state;
    if (t.isTransition) {
      var d = H.T, E = {};
      H.T = E;
      try {
        var T = a(u, s), k = H.S;
        k !== null && k(E, T), _p(e, t, T);
      } catch (P) {
        Tc(e, t, P);
      } finally {
        H.T = d;
      }
    } else
      try {
        d = a(u, s), _p(e, t, d);
      } catch (P) {
        Tc(e, t, P);
      }
  }
  function _p(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(s) {
        bp(e, t, s);
      },
      function(s) {
        return Tc(e, t, s);
      }
    ) : bp(e, t, a);
  }
  function bp(e, t, a) {
    t.status = "fulfilled", t.value = a, Sp(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, yp(e, a)));
  }
  function Tc(e, t, a) {
    var s = e.pending;
    if (e.pending = null, s !== null) {
      s = s.next;
      do
        t.status = "rejected", t.reason = a, Sp(t), t = t.next;
      while (t !== s);
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
          var s = Me;
          if (He) {
            if (lt) {
              t: {
                for (var u = lt, d = Rn; u.nodeType !== 8; ) {
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
                lt = Cn(
                  u.nextSibling
                ), s = u.data === "F!";
                break e;
              }
            }
            ea(s);
          }
          s = !1;
        }
        s && (t = a[0]);
      }
    }
    return a = It(), a.memoizedState = a.baseState = t, s = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xp,
      lastRenderedState: t
    }, a.queue = s, a = qp.bind(
      null,
      Me,
      s
    ), s.dispatch = a, s = Dc(!1), d = Rc.bind(
      null,
      Me,
      !1,
      s.queue
    ), s = It(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, s.queue = u, a = B2.bind(
      null,
      Me,
      u,
      d,
      a
    ), u.dispatch = a, s.memoizedState = e, [t, a, !1];
  }
  function Cp(e) {
    var t = ht();
    return wp(t, Ye, e);
  }
  function wp(e, t, a) {
    if (t = wc(
      e,
      t,
      xp
    )[0], e = Ts($n)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var s = $i(t);
      } catch (E) {
        throw E === Gi ? xs : E;
      }
    else s = t;
    t = ht();
    var u = t.queue, d = u.dispatch;
    return a !== t.memoizedState && (Me.flags |= 2048, Ga(
      9,
      Os(),
      U2.bind(null, u, a),
      null
    )), [s, d, e];
  }
  function U2(e, t) {
    e.action = t;
  }
  function Ap(e) {
    var t = ht(), a = Ye;
    if (a !== null)
      return wp(t, a, e);
    ht(), t = t.memoizedState, a = ht();
    var s = a.queue.dispatch;
    return a.memoizedState = e, [t, s, !1];
  }
  function Ga(e, t, a, s) {
    return e = { tag: e, create: a, deps: s, inst: t, next: null }, t = Me.updateQueue, t === null && (t = Ec(), Me.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (s = a.next, a.next = e, e.next = s, t.lastEffect = e), e;
  }
  function Os() {
    return { destroy: void 0, resource: void 0 };
  }
  function Dp() {
    return ht().memoizedState;
  }
  function Ns(e, t, a, s) {
    var u = It();
    s = s === void 0 ? null : s, Me.flags |= e, u.memoizedState = Ga(
      1 | t,
      Os(),
      a,
      s
    );
  }
  function Ki(e, t, a, s) {
    var u = ht();
    s = s === void 0 ? null : s;
    var d = u.memoizedState.inst;
    Ye !== null && s !== null && yc(s, Ye.memoizedState.deps) ? u.memoizedState = Ga(t, d, a, s) : (Me.flags |= e, u.memoizedState = Ga(
      1 | t,
      d,
      a,
      s
    ));
  }
  function Tp(e, t) {
    Ns(8390656, 8, e, t);
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
    var a = ht();
    t = t === void 0 ? null : t;
    var s = a.memoizedState;
    return t !== null && yc(t, s[1]) ? s[0] : (a.memoizedState = [e, t], e);
  }
  function zp(e, t) {
    var a = ht();
    t = t === void 0 ? null : t;
    var s = a.memoizedState;
    if (t !== null && yc(t, s[1]))
      return s[0];
    if (s = e(), aa) {
      dr(!0);
      try {
        e();
      } finally {
        dr(!1);
      }
    }
    return a.memoizedState = [s, t], s;
  }
  function Nc(e, t, a) {
    return a === void 0 || (br & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Um(), Me.lanes |= e, Dr |= e, a);
  }
  function Lp(e, t, a, s) {
    return $t(a, t) ? a : Ha.current !== null ? (e = Nc(e, a, s), $t(e, t) || (Ct = !0), e) : (br & 42) === 0 ? (Ct = !0, e.memoizedState = a) : (e = Um(), Me.lanes |= e, Dr |= e, t);
  }
  function Bp(e, t, a, s, u) {
    var d = ne.p;
    ne.p = d !== 0 && 8 > d ? d : 8;
    var E = H.T, T = {};
    H.T = T, Rc(e, !1, t, a);
    try {
      var k = u(), P = H.S;
      if (P !== null && P(T, k), k !== null && typeof k == "object" && typeof k.then == "function") {
        var V = j2(
          k,
          s
        );
        Ji(
          e,
          t,
          V,
          tn(e)
        );
      } else
        Ji(
          e,
          t,
          s,
          tn(e)
        );
    } catch (K) {
      Ji(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: K },
        tn()
      );
    } finally {
      ne.p = d, H.T = E;
    }
  }
  function P2() {
  }
  function Mc(e, t, a, s) {
    if (e.tag !== 5) throw Error(l(476));
    var u = Up(e).queue;
    Bp(
      e,
      u,
      t,
      I,
      a === null ? P2 : function() {
        return Pp(e), a(s);
      }
    );
  }
  function Up(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $n,
        lastRenderedState: I
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
    return kt(gl);
  }
  function Ip() {
    return ht().memoizedState;
  }
  function Hp() {
    return ht().memoizedState;
  }
  function I2(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = tn();
          e = yr(a);
          var s = _r(t, e, a);
          s !== null && (nn(s, t, a), Vi(s, t, a)), t = { cache: oc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function H2(e, t, a) {
    var s = tn();
    a = {
      lane: s,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ms(e) ? Zp(t, a) : (a = Ju(e, t, a, s), a !== null && (nn(a, e, s), Gp(a, t, s)));
  }
  function qp(e, t, a) {
    var s = tn();
    Ji(e, t, a, s);
  }
  function Ji(e, t, a, s) {
    var u = {
      lane: s,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ms(e)) Zp(t, u);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null))
        try {
          var E = t.lastRenderedState, T = d(E, a);
          if (u.hasEagerState = !0, u.eagerState = T, $t(T, E))
            return ps(e, t, u, 0), Je === null && ds(), !1;
        } catch {
        } finally {
        }
      if (a = Ju(e, t, u, s), a !== null)
        return nn(a, e, s), Gp(a, t, s), !0;
    }
    return !1;
  }
  function Rc(e, t, a, s) {
    if (s = {
      lane: 2,
      revertLane: hf(),
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ms(e)) {
      if (t) throw Error(l(479));
    } else
      t = Ju(
        e,
        a,
        s,
        2
      ), t !== null && nn(t, e, 2);
  }
  function Ms(e) {
    var t = e.alternate;
    return e === Me || t !== null && t === Me;
  }
  function Zp(e, t) {
    qa = ws = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Gp(e, t, a) {
    if ((a & 4194048) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, a |= s, t.lanes = a, Jh(e, a);
    }
  }
  var ks = {
    readContext: kt,
    use: Ds,
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
    use: Ds,
    useCallback: function(e, t) {
      return It().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: kt,
    useEffect: Tp,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Ns(
        4194308,
        4,
        kp.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Ns(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ns(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = It();
      t = t === void 0 ? null : t;
      var s = e();
      if (aa) {
        dr(!0);
        try {
          e();
        } finally {
          dr(!1);
        }
      }
      return a.memoizedState = [s, t], s;
    },
    useReducer: function(e, t, a) {
      var s = It();
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
      return s.memoizedState = s.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, s.queue = e, e = e.dispatch = H2.bind(
        null,
        Me,
        e
      ), [s.memoizedState, e];
    },
    useRef: function(e) {
      var t = It();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Dc(e);
      var t = e.queue, a = qp.bind(null, Me, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Oc,
    useDeferredValue: function(e, t) {
      var a = It();
      return Nc(a, e, t);
    },
    useTransition: function() {
      var e = Dc(!1);
      return e = Bp.bind(
        null,
        Me,
        e.queue,
        !0,
        !1
      ), It().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var s = Me, u = It();
      if (He) {
        if (a === void 0)
          throw Error(l(407));
        a = a();
      } else {
        if (a = t(), Je === null)
          throw Error(l(349));
        (Ue & 124) !== 0 || hp(s, t, a);
      }
      u.memoizedState = a;
      var d = { value: a, getSnapshot: t };
      return u.queue = d, Tp(pp.bind(null, s, d, e), [
        e
      ]), s.flags |= 2048, Ga(
        9,
        Os(),
        dp.bind(
          null,
          s,
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
        var a = Yn, s = Vn;
        a = (s & ~(1 << 32 - Qt(s) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = As++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = z2++, t = "«" + t + "r" + a.toString(32) + "»";
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
      return It().memoizedState = I2.bind(
        null,
        Me
      );
    }
  }, Vp = {
    readContext: kt,
    use: Ds,
    useCallback: jp,
    useContext: kt,
    useEffect: Op,
    useImperativeHandle: Rp,
    useInsertionEffect: Np,
    useLayoutEffect: Mp,
    useMemo: zp,
    useReducer: Ts,
    useRef: Dp,
    useState: function() {
      return Ts($n);
    },
    useDebugValue: Oc,
    useDeferredValue: function(e, t) {
      var a = ht();
      return Lp(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ts($n)[0], t = ht().memoizedState;
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
      var a = ht();
      return vp(a, Ye, e, t);
    },
    useMemoCache: Cc,
    useCacheRefresh: Hp
  }, q2 = {
    readContext: kt,
    use: Ds,
    useCallback: jp,
    useContext: kt,
    useEffect: Op,
    useImperativeHandle: Rp,
    useInsertionEffect: Np,
    useLayoutEffect: Mp,
    useMemo: zp,
    useReducer: Ac,
    useRef: Dp,
    useState: function() {
      return Ac($n);
    },
    useDebugValue: Oc,
    useDeferredValue: function(e, t) {
      var a = ht();
      return Ye === null ? Nc(a, e, t) : Lp(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ac($n)[0], t = ht().memoizedState;
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
      var a = ht();
      return Ye !== null ? vp(a, Ye, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Cc,
    useCacheRefresh: Hp
  }, Fa = null, Wi = 0;
  function Rs(e) {
    var t = Wi;
    return Wi += 1, Fa === null && (Fa = []), rp(Fa, e, t);
  }
  function el(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function js(e, t) {
    throw t.$$typeof === b ? Error(l(525)) : (e = Object.prototype.toString.call(t), Error(
      l(
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
    function t(L, z) {
      if (e) {
        var B = L.deletions;
        B === null ? (L.deletions = [z], L.flags |= 16) : B.push(z);
      }
    }
    function a(L, z) {
      if (!e) return null;
      for (; z !== null; )
        t(L, z), z = z.sibling;
      return null;
    }
    function s(L) {
      for (var z = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? z.set(L.key, L) : z.set(L.index, L), L = L.sibling;
      return z;
    }
    function u(L, z) {
      return L = Fn(L, z), L.index = 0, L.sibling = null, L;
    }
    function d(L, z, B) {
      return L.index = B, e ? (B = L.alternate, B !== null ? (B = B.index, B < z ? (L.flags |= 67108866, z) : B) : (L.flags |= 67108866, z)) : (L.flags |= 1048576, z);
    }
    function E(L) {
      return e && L.alternate === null && (L.flags |= 67108866), L;
    }
    function T(L, z, B, X) {
      return z === null || z.tag !== 6 ? (z = ec(B, L.mode, X), z.return = L, z) : (z = u(z, B), z.return = L, z);
    }
    function k(L, z, B, X) {
      var ue = B.type;
      return ue === f ? V(
        L,
        z,
        B.props.children,
        X,
        B.key
      ) : z !== null && (z.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === Z && Yp(ue) === z.type) ? (z = u(z, B.props), el(z, B), z.return = L, z) : (z = gs(
        B.type,
        B.key,
        B.props,
        null,
        L.mode,
        X
      ), el(z, B), z.return = L, z);
    }
    function P(L, z, B, X) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== B.containerInfo || z.stateNode.implementation !== B.implementation ? (z = tc(B, L.mode, X), z.return = L, z) : (z = u(z, B.children || []), z.return = L, z);
    }
    function V(L, z, B, X, ue) {
      return z === null || z.tag !== 7 ? (z = $r(
        B,
        L.mode,
        X,
        ue
      ), z.return = L, z) : (z = u(z, B), z.return = L, z);
    }
    function K(L, z, B) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = ec(
          "" + z,
          L.mode,
          B
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case y:
            return B = gs(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              B
            ), el(B, z), B.return = L, B;
          case p:
            return z = tc(
              z,
              L.mode,
              B
            ), z.return = L, z;
          case Z:
            var X = z._init;
            return z = X(z._payload), K(L, z, B);
        }
        if (ye(z) || ee(z))
          return z = $r(
            z,
            L.mode,
            B,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return K(L, Rs(z), B);
        if (z.$$typeof === N)
          return K(
            L,
            bs(L, z),
            B
          );
        js(L, z);
      }
      return null;
    }
    function q(L, z, B, X) {
      var ue = z !== null ? z.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return ue !== null ? null : T(L, z, "" + B, X);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case y:
            return B.key === ue ? k(L, z, B, X) : null;
          case p:
            return B.key === ue ? P(L, z, B, X) : null;
          case Z:
            return ue = B._init, B = ue(B._payload), q(L, z, B, X);
        }
        if (ye(B) || ee(B))
          return ue !== null ? null : V(L, z, B, X, null);
        if (typeof B.then == "function")
          return q(
            L,
            z,
            Rs(B),
            X
          );
        if (B.$$typeof === N)
          return q(
            L,
            z,
            bs(L, B),
            X
          );
        js(L, B);
      }
      return null;
    }
    function G(L, z, B, X, ue) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return L = L.get(B) || null, T(z, L, "" + X, ue);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case y:
            return L = L.get(
              X.key === null ? B : X.key
            ) || null, k(z, L, X, ue);
          case p:
            return L = L.get(
              X.key === null ? B : X.key
            ) || null, P(z, L, X, ue);
          case Z:
            var ke = X._init;
            return X = ke(X._payload), G(
              L,
              z,
              B,
              X,
              ue
            );
        }
        if (ye(X) || ee(X))
          return L = L.get(B) || null, V(z, L, X, ue, null);
        if (typeof X.then == "function")
          return G(
            L,
            z,
            B,
            Rs(X),
            ue
          );
        if (X.$$typeof === N)
          return G(
            L,
            z,
            B,
            bs(z, X),
            ue
          );
        js(z, X);
      }
      return null;
    }
    function Se(L, z, B, X) {
      for (var ue = null, ke = null, de = z, be = z = 0, At = null; de !== null && be < B.length; be++) {
        de.index > be ? (At = de, de = null) : At = de.sibling;
        var Pe = q(
          L,
          de,
          B[be],
          X
        );
        if (Pe === null) {
          de === null && (de = At);
          break;
        }
        e && de && Pe.alternate === null && t(L, de), z = d(Pe, z, be), ke === null ? ue = Pe : ke.sibling = Pe, ke = Pe, de = At;
      }
      if (be === B.length)
        return a(L, de), He && Jr(L, be), ue;
      if (de === null) {
        for (; be < B.length; be++)
          de = K(L, B[be], X), de !== null && (z = d(
            de,
            z,
            be
          ), ke === null ? ue = de : ke.sibling = de, ke = de);
        return He && Jr(L, be), ue;
      }
      for (de = s(de); be < B.length; be++)
        At = G(
          de,
          L,
          be,
          B[be],
          X
        ), At !== null && (e && At.alternate !== null && de.delete(
          At.key === null ? be : At.key
        ), z = d(
          At,
          z,
          be
        ), ke === null ? ue = At : ke.sibling = At, ke = At);
      return e && de.forEach(function(Lr) {
        return t(L, Lr);
      }), He && Jr(L, be), ue;
    }
    function ve(L, z, B, X) {
      if (B == null) throw Error(l(151));
      for (var ue = null, ke = null, de = z, be = z = 0, At = null, Pe = B.next(); de !== null && !Pe.done; be++, Pe = B.next()) {
        de.index > be ? (At = de, de = null) : At = de.sibling;
        var Lr = q(L, de, Pe.value, X);
        if (Lr === null) {
          de === null && (de = At);
          break;
        }
        e && de && Lr.alternate === null && t(L, de), z = d(Lr, z, be), ke === null ? ue = Lr : ke.sibling = Lr, ke = Lr, de = At;
      }
      if (Pe.done)
        return a(L, de), He && Jr(L, be), ue;
      if (de === null) {
        for (; !Pe.done; be++, Pe = B.next())
          Pe = K(L, Pe.value, X), Pe !== null && (z = d(Pe, z, be), ke === null ? ue = Pe : ke.sibling = Pe, ke = Pe);
        return He && Jr(L, be), ue;
      }
      for (de = s(de); !Pe.done; be++, Pe = B.next())
        Pe = G(de, L, be, Pe.value, X), Pe !== null && (e && Pe.alternate !== null && de.delete(Pe.key === null ? be : Pe.key), z = d(Pe, z, be), ke === null ? ue = Pe : ke.sibling = Pe, ke = Pe);
      return e && de.forEach(function(Z_) {
        return t(L, Z_);
      }), He && Jr(L, be), ue;
    }
    function Qe(L, z, B, X) {
      if (typeof B == "object" && B !== null && B.type === f && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case y:
            e: {
              for (var ue = B.key; z !== null; ) {
                if (z.key === ue) {
                  if (ue = B.type, ue === f) {
                    if (z.tag === 7) {
                      a(
                        L,
                        z.sibling
                      ), X = u(
                        z,
                        B.props.children
                      ), X.return = L, L = X;
                      break e;
                    }
                  } else if (z.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === Z && Yp(ue) === z.type) {
                    a(
                      L,
                      z.sibling
                    ), X = u(z, B.props), el(X, B), X.return = L, L = X;
                    break e;
                  }
                  a(L, z);
                  break;
                } else t(L, z);
                z = z.sibling;
              }
              B.type === f ? (X = $r(
                B.props.children,
                L.mode,
                X,
                B.key
              ), X.return = L, L = X) : (X = gs(
                B.type,
                B.key,
                B.props,
                null,
                L.mode,
                X
              ), el(X, B), X.return = L, L = X);
            }
            return E(L);
          case p:
            e: {
              for (ue = B.key; z !== null; ) {
                if (z.key === ue)
                  if (z.tag === 4 && z.stateNode.containerInfo === B.containerInfo && z.stateNode.implementation === B.implementation) {
                    a(
                      L,
                      z.sibling
                    ), X = u(z, B.children || []), X.return = L, L = X;
                    break e;
                  } else {
                    a(L, z);
                    break;
                  }
                else t(L, z);
                z = z.sibling;
              }
              X = tc(B, L.mode, X), X.return = L, L = X;
            }
            return E(L);
          case Z:
            return ue = B._init, B = ue(B._payload), Qe(
              L,
              z,
              B,
              X
            );
        }
        if (ye(B))
          return Se(
            L,
            z,
            B,
            X
          );
        if (ee(B)) {
          if (ue = ee(B), typeof ue != "function") throw Error(l(150));
          return B = ue.call(B), ve(
            L,
            z,
            B,
            X
          );
        }
        if (typeof B.then == "function")
          return Qe(
            L,
            z,
            Rs(B),
            X
          );
        if (B.$$typeof === N)
          return Qe(
            L,
            z,
            bs(L, B),
            X
          );
        js(L, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, z !== null && z.tag === 6 ? (a(L, z.sibling), X = u(z, B), X.return = L, L = X) : (a(L, z), X = ec(B, L.mode, X), X.return = L, L = X), E(L)) : a(L, z);
    }
    return function(L, z, B, X) {
      try {
        Wi = 0;
        var ue = Qe(
          L,
          z,
          B,
          X
        );
        return Fa = null, ue;
      } catch (de) {
        if (de === Gi || de === xs) throw de;
        var ke = Kt(29, de, null, L.mode);
        return ke.lanes = X, ke.return = L, ke;
      } finally {
      }
    };
  }
  var Va = Xp(!0), Qp = Xp(!1), mn = F(null), jn = null;
  function Sr(e) {
    var t = e.alternate;
    se(bt, bt.current & 1), se(mn, e), jn === null && (t === null || Ha.current !== null || t.memoizedState !== null) && (jn = e);
  }
  function $p(e) {
    if (e.tag === 22) {
      if (se(bt, bt.current), se(mn, e), jn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (jn = e);
      }
    } else xr();
  }
  function xr() {
    se(bt, bt.current), se(mn, mn.current);
  }
  function Kn(e) {
    re(mn), jn === e && (jn = null), re(bt);
  }
  var bt = F(0);
  function zs(e) {
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
  function jc(e, t, a, s) {
    t = e.memoizedState, a = a(s, t), a = a == null ? t : _({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var zc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var s = tn(), u = yr(s);
      u.payload = t, a != null && (u.callback = a), t = _r(e, u, s), t !== null && (nn(t, e, s), Vi(t, e, s));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var s = tn(), u = yr(s);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = _r(e, u, s), t !== null && (nn(t, e, s), Vi(t, e, s));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = tn(), s = yr(a);
      s.tag = 2, t != null && (s.callback = t), t = _r(e, s, a), t !== null && (nn(t, e, a), Vi(t, e, a));
    }
  };
  function Kp(e, t, a, s, u, d, E) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, d, E) : t.prototype && t.prototype.isPureReactComponent ? !Li(a, s) || !Li(u, d) : !0;
  }
  function Jp(e, t, a, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, s), t.state !== e && zc.enqueueReplaceState(t, t.state, null);
  }
  function ia(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var s in t)
        s !== "ref" && (a[s] = t[s]);
    }
    if (e = e.defaultProps) {
      a === t && (a = _({}, a));
      for (var u in e)
        a[u] === void 0 && (a[u] = e[u]);
    }
    return a;
  }
  var Ls = typeof reportError == "function" ? reportError : function(e) {
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
    Ls(e);
  }
  function em(e) {
    console.error(e);
  }
  function tm(e) {
    Ls(e);
  }
  function Bs(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function nm(e, t, a) {
    try {
      var s = e.onCaughtError;
      s(a.value, {
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
      Bs(e, t);
    }, a;
  }
  function rm(e) {
    return e = yr(e), e.tag = 3, e;
  }
  function am(e, t, a, s) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = s.value;
      e.payload = function() {
        return u(d);
      }, e.callback = function() {
        nm(t, a, s);
      };
    }
    var E = a.stateNode;
    E !== null && typeof E.componentDidCatch == "function" && (e.callback = function() {
      nm(t, a, s), typeof u != "function" && (Tr === null ? Tr = /* @__PURE__ */ new Set([this]) : Tr.add(this));
      var T = s.stack;
      this.componentDidCatch(s.value, {
        componentStack: T !== null ? T : ""
      });
    });
  }
  function Z2(e, t, a, s, u) {
    if (a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
      if (t = a.alternate, t !== null && Hi(
        t,
        a,
        u,
        !0
      ), a = mn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return jn === null ? sf() : a.alternate === null && st === 0 && (st = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, s === fc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([s]) : t.add(s), uf(e, s, u)), !1;
          case 22:
            return a.flags |= 65536, s === fc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([s])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([s]) : a.add(s)), uf(e, s, u)), !1;
        }
        throw Error(l(435, a.tag));
      }
      return uf(e, s, u), sf(), !1;
    }
    if (He)
      return t = mn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, s !== ac && (e = Error(l(422), { cause: s }), Ii(fn(e, a)))) : (s !== ac && (t = Error(l(423), {
        cause: s
      }), Ii(
        fn(t, a)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, s = fn(s, a), u = Lc(
        e.stateNode,
        s,
        u
      ), pc(e, u), st !== 4 && (st = 2)), !1;
    var d = Error(l(520), { cause: s });
    if (d = fn(d, a), sl === null ? sl = [d] : sl.push(d), st !== 4 && (st = 2), t === null) return !0;
    s = fn(s, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = u & -u, a.lanes |= e, e = Lc(a.stateNode, s, e), pc(a, e), !1;
        case 1:
          if (t = a.type, d = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Tr === null || !Tr.has(d))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = rm(u), am(
              u,
              e,
              a,
              s
            ), pc(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var im = Error(l(461)), Ct = !1;
  function Dt(e, t, a, s) {
    t.child = e === null ? Qp(t, null, a, s) : Va(
      t,
      e.child,
      a,
      s
    );
  }
  function lm(e, t, a, s, u) {
    a = a.render;
    var d = t.ref;
    if ("ref" in s) {
      var E = {};
      for (var T in s)
        T !== "ref" && (E[T] = s[T]);
    } else E = s;
    return na(t), s = _c(
      e,
      t,
      a,
      E,
      d,
      u
    ), T = bc(), e !== null && !Ct ? (Sc(e, t, u), Jn(e, t, u)) : (He && T && nc(t), t.flags |= 1, Dt(e, t, s, u), t.child);
  }
  function sm(e, t, a, s, u) {
    if (e === null) {
      var d = a.type;
      return typeof d == "function" && !Wu(d) && d.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = d, om(
        e,
        t,
        d,
        s,
        u
      )) : (e = gs(
        a.type,
        null,
        s,
        t,
        t.mode,
        u
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (d = e.child, !Gc(e, u)) {
      var E = d.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Li, a(E, s) && e.ref === t.ref)
        return Jn(e, t, u);
    }
    return t.flags |= 1, e = Fn(d, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function om(e, t, a, s, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Li(d, s) && e.ref === t.ref)
        if (Ct = !1, t.pendingProps = s = d, Gc(e, u))
          (e.flags & 131072) !== 0 && (Ct = !0);
        else
          return t.lanes = e.lanes, Jn(e, t, u);
    }
    return Bc(
      e,
      t,
      a,
      s,
      u
    );
  }
  function um(e, t, a) {
    var s = t.pendingProps, u = s.children, d = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (s = d !== null ? d.baseLanes | a : a, e !== null) {
          for (u = t.child = e.child, d = 0; u !== null; )
            d = d | u.lanes | u.childLanes, u = u.sibling;
          t.childLanes = d & ~s;
        } else t.childLanes = 0, t.child = null;
        return cm(
          e,
          t,
          s,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ss(
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
      d !== null ? (Ss(t, d.cachePool), op(t, d), xr(), t.memoizedState = null) : (e !== null && Ss(t, null), gc(), xr());
    return Dt(e, t, u, a), t.child;
  }
  function cm(e, t, a, s) {
    var u = cc();
    return u = u === null ? null : { parent: _t._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && Ss(t, null), gc(), $p(t), e !== null && Hi(e, t, s, !0), null;
  }
  function Us(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(l(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Bc(e, t, a, s, u) {
    return na(t), a = _c(
      e,
      t,
      a,
      s,
      void 0,
      u
    ), s = bc(), e !== null && !Ct ? (Sc(e, t, u), Jn(e, t, u)) : (He && s && nc(t), t.flags |= 1, Dt(e, t, a, u), t.child);
  }
  function fm(e, t, a, s, u, d) {
    return na(t), t.updateQueue = null, a = cp(
      t,
      s,
      a,
      u
    ), up(e), s = bc(), e !== null && !Ct ? (Sc(e, t, d), Jn(e, t, d)) : (He && s && nc(t), t.flags |= 1, Dt(e, t, a, d), t.child);
  }
  function hm(e, t, a, s, u) {
    if (na(t), t.stateNode === null) {
      var d = La, E = a.contextType;
      typeof E == "object" && E !== null && (d = kt(E)), d = new a(s, d), t.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = zc, t.stateNode = d, d._reactInternals = t, d = t.stateNode, d.props = s, d.state = t.memoizedState, d.refs = {}, hc(t), E = a.contextType, d.context = typeof E == "object" && E !== null ? kt(E) : La, d.state = t.memoizedState, E = a.getDerivedStateFromProps, typeof E == "function" && (jc(
        t,
        a,
        E,
        s
      ), d.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (E = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), E !== d.state && zc.enqueueReplaceState(d, d.state, null), Xi(t, s, d, u), Yi(), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308), s = !0;
    } else if (e === null) {
      d = t.stateNode;
      var T = t.memoizedProps, k = ia(a, T);
      d.props = k;
      var P = d.context, V = a.contextType;
      E = La, typeof V == "object" && V !== null && (E = kt(V));
      var K = a.getDerivedStateFromProps;
      V = typeof K == "function" || typeof d.getSnapshotBeforeUpdate == "function", T = t.pendingProps !== T, V || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (T || P !== E) && Jp(
        t,
        d,
        s,
        E
      ), vr = !1;
      var q = t.memoizedState;
      d.state = q, Xi(t, s, d, u), Yi(), P = t.memoizedState, T || q !== P || vr ? (typeof K == "function" && (jc(
        t,
        a,
        K,
        s
      ), P = t.memoizedState), (k = vr || Kp(
        t,
        a,
        k,
        s,
        q,
        P,
        E
      )) ? (V || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = P), d.props = s, d.state = P, d.context = E, s = k) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      d = t.stateNode, dc(e, t), E = t.memoizedProps, V = ia(a, E), d.props = V, K = t.pendingProps, q = d.context, P = a.contextType, k = La, typeof P == "object" && P !== null && (k = kt(P)), T = a.getDerivedStateFromProps, (P = typeof T == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (E !== K || q !== k) && Jp(
        t,
        d,
        s,
        k
      ), vr = !1, q = t.memoizedState, d.state = q, Xi(t, s, d, u), Yi();
      var G = t.memoizedState;
      E !== K || q !== G || vr || e !== null && e.dependencies !== null && _s(e.dependencies) ? (typeof T == "function" && (jc(
        t,
        a,
        T,
        s
      ), G = t.memoizedState), (V = vr || Kp(
        t,
        a,
        V,
        s,
        q,
        G,
        k
      ) || e !== null && e.dependencies !== null && _s(e.dependencies)) ? (P || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(s, G, k), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        s,
        G,
        k
      )), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || E === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || E === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = G), d.props = s, d.state = G, d.context = k, s = V) : (typeof d.componentDidUpdate != "function" || E === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || E === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return d = s, Us(e, t), s = (t.flags & 128) !== 0, d || s ? (d = t.stateNode, a = s && typeof a.getDerivedStateFromError != "function" ? null : d.render(), t.flags |= 1, e !== null && s ? (t.child = Va(
      t,
      e.child,
      null,
      u
    ), t.child = Va(
      t,
      null,
      a,
      u
    )) : Dt(e, t, a, u), t.memoizedState = d.state, e = t.child) : e = Jn(
      e,
      t,
      u
    ), e;
  }
  function dm(e, t, a, s) {
    return Pi(), t.flags |= 256, Dt(e, t, a, s), t.child;
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
    var s = t.pendingProps, u = !1, d = (t.flags & 128) !== 0, E;
    if ((E = d) || (E = e !== null && e.memoizedState === null ? !1 : (bt.current & 2) !== 0), E && (u = !0, t.flags &= -129), E = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (He) {
        if (u ? Sr(t) : xr(), He) {
          var T = lt, k;
          if (k = T) {
            e: {
              for (k = T, T = Rn; k.nodeType !== 8; ) {
                if (!T) {
                  T = null;
                  break e;
                }
                if (k = Cn(
                  k.nextSibling
                ), k === null) {
                  T = null;
                  break e;
                }
              }
              T = k;
            }
            T !== null ? (t.memoizedState = {
              dehydrated: T,
              treeContext: Kr !== null ? { id: Vn, overflow: Yn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, k = Kt(
              18,
              null,
              null,
              0
            ), k.stateNode = T, k.return = t, t.child = k, Lt = t, lt = null, k = !0) : k = !1;
          }
          k || ea(t);
        }
        if (T = t.memoizedState, T !== null && (T = T.dehydrated, T !== null))
          return Cf(T) ? t.lanes = 32 : t.lanes = 536870912, null;
        Kn(t);
      }
      return T = s.children, s = s.fallback, u ? (xr(), u = t.mode, T = Ps(
        { mode: "hidden", children: T },
        u
      ), s = $r(
        s,
        u,
        a,
        null
      ), T.return = t, s.return = t, T.sibling = s, t.child = T, u = t.child, u.memoizedState = Pc(a), u.childLanes = Ic(
        e,
        E,
        a
      ), t.memoizedState = Uc, s) : (Sr(t), Hc(t, T));
    }
    if (k = e.memoizedState, k !== null && (T = k.dehydrated, T !== null)) {
      if (d)
        t.flags & 256 ? (Sr(t), t.flags &= -257, t = qc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (xr(), t.child = e.child, t.flags |= 128, t = null) : (xr(), u = s.fallback, T = t.mode, s = Ps(
          { mode: "visible", children: s.children },
          T
        ), u = $r(
          u,
          T,
          a,
          null
        ), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, Va(
          t,
          e.child,
          null,
          a
        ), s = t.child, s.memoizedState = Pc(a), s.childLanes = Ic(
          e,
          E,
          a
        ), t.memoizedState = Uc, t = u);
      else if (Sr(t), Cf(T)) {
        if (E = T.nextSibling && T.nextSibling.dataset, E) var P = E.dgst;
        E = P, s = Error(l(419)), s.stack = "", s.digest = E, Ii({ value: s, source: null, stack: null }), t = qc(
          e,
          t,
          a
        );
      } else if (Ct || Hi(e, t, a, !1), E = (a & e.childLanes) !== 0, Ct || E) {
        if (E = Je, E !== null && (s = a & -a, s = (s & 42) !== 0 ? 1 : Cu(s), s = (s & (E.suspendedLanes | a)) !== 0 ? 0 : s, s !== 0 && s !== k.retryLane))
          throw k.retryLane = s, za(e, s), nn(E, e, s), im;
        T.data === "$?" || sf(), t = qc(
          e,
          t,
          a
        );
      } else
        T.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = k.treeContext, lt = Cn(
          T.nextSibling
        ), Lt = t, He = !0, Wr = null, Rn = !1, e !== null && (dn[pn++] = Vn, dn[pn++] = Yn, dn[pn++] = Kr, Vn = e.id, Yn = e.overflow, Kr = t), t = Hc(
          t,
          s.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (xr(), u = s.fallback, T = t.mode, k = e.child, P = k.sibling, s = Fn(k, {
      mode: "hidden",
      children: s.children
    }), s.subtreeFlags = k.subtreeFlags & 65011712, P !== null ? u = Fn(P, u) : (u = $r(
      u,
      T,
      a,
      null
    ), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, T = e.child.memoizedState, T === null ? T = Pc(a) : (k = T.cachePool, k !== null ? (P = _t._currentValue, k = k.parent !== P ? { parent: P, pool: P } : k) : k = ep(), T = {
      baseLanes: T.baseLanes | a,
      cachePool: k
    }), u.memoizedState = T, u.childLanes = Ic(
      e,
      E,
      a
    ), t.memoizedState = Uc, s) : (Sr(t), a = e.child, e = a.sibling, a = Fn(a, {
      mode: "visible",
      children: s.children
    }), a.return = t, a.sibling = null, e !== null && (E = t.deletions, E === null ? (t.deletions = [e], t.flags |= 16) : E.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function Hc(e, t) {
    return t = Ps(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ps(e, t) {
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
    var s = e.alternate;
    s !== null && (s.lanes |= t), lc(e.return, t, a);
  }
  function Zc(e, t, a, s, u) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: s,
      tail: a,
      tailMode: u
    } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = s, d.tail = a, d.tailMode = u);
  }
  function gm(e, t, a) {
    var s = t.pendingProps, u = s.revealOrder, d = s.tail;
    if (Dt(e, t, s.children, a), s = bt.current, (s & 2) !== 0)
      s = s & 1 | 2, t.flags |= 128;
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
      s &= 1;
    }
    switch (se(bt, s), u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          e = a.alternate, e !== null && zs(e) === null && (u = a), a = a.sibling;
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
          if (e = u.alternate, e !== null && zs(e) === null) {
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
    if (e !== null && (t.dependencies = e.dependencies), Dr |= t.lanes, (a & t.childLanes) === 0)
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
      throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, a = Fn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = Fn(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Gc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && _s(e)));
  }
  function G2(e, t, a) {
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
        var s = t.memoizedState;
        if (s !== null)
          return s.dehydrated !== null ? (Sr(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? pm(e, t, a) : (Sr(t), e = Jn(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Sr(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (s = (a & t.childLanes) !== 0, s || (Hi(
          e,
          t,
          a,
          !1
        ), s = (a & t.childLanes) !== 0), u) {
          if (s)
            return gm(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), se(bt, bt.current), s) break;
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
          return Ct = !1, G2(
            e,
            t,
            a
          );
        Ct = (e.flags & 131072) !== 0;
      }
    else
      Ct = !1, He && (t.flags & 1048576) !== 0 && Yd(t, ys, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var s = t.elementType, u = s._init;
          if (s = u(s._payload), t.type = s, typeof s == "function")
            Wu(s) ? (e = ia(s, e), t.tag = 1, t = hm(
              null,
              t,
              s,
              e,
              a
            )) : (t.tag = 0, t = Bc(
              null,
              t,
              s,
              e,
              a
            ));
          else {
            if (s != null) {
              if (u = s.$$typeof, u === C) {
                t.tag = 11, t = lm(
                  null,
                  t,
                  s,
                  e,
                  a
                );
                break e;
              } else if (u === R) {
                t.tag = 14, t = sm(
                  null,
                  t,
                  s,
                  e,
                  a
                );
                break e;
              }
            }
            throw t = pe(s) || s, Error(l(306, t, ""));
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
        return s = t.type, u = ia(
          s,
          t.pendingProps
        ), hm(
          e,
          t,
          s,
          u,
          a
        );
      case 3:
        e: {
          if (we(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(l(387));
          s = t.pendingProps;
          var d = t.memoizedState;
          u = d.element, dc(e, t), Xi(t, s, null, a);
          var E = t.memoizedState;
          if (s = E.cache, gr(t, _t, s), s !== d.cache && sc(
            t,
            [_t],
            a,
            !0
          ), Yi(), s = E.element, d.isDehydrated)
            if (d = {
              element: s,
              isDehydrated: !1,
              cache: E.cache
            }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
              t = dm(
                e,
                t,
                s,
                a
              );
              break e;
            } else if (s !== u) {
              u = fn(
                Error(l(424)),
                t
              ), Ii(u), t = dm(
                e,
                t,
                s,
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
              for (lt = Cn(e.firstChild), Lt = t, He = !0, Wr = null, Rn = !0, a = Qp(
                t,
                null,
                s,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Pi(), s === u) {
              t = Jn(
                e,
                t,
                a
              );
              break e;
            }
            Dt(
              e,
              t,
              s,
              a
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return Us(e, t), e === null ? (a = Sg(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : He || (a = t.type, e = t.pendingProps, s = Ws(
          Y.current
        ).createElement(a), s[Mt] = t, s[Ut] = e, Ot(s, a, e), Et(s), t.stateNode = s) : t.memoizedState = Sg(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return $e(t), e === null && He && (s = t.stateNode = yg(
          t.type,
          t.pendingProps,
          Y.current
        ), Lt = t, Rn = !0, u = lt, Mr(t.type) ? (wf = u, lt = Cn(
          s.firstChild
        )) : lt = u), Dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Us(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && He && ((u = s = lt) && (s = y_(
          s,
          t.type,
          t.pendingProps,
          Rn
        ), s !== null ? (t.stateNode = s, Lt = t, lt = Cn(
          s.firstChild
        ), Rn = !1, u = !0) : u = !1), u || ea(t)), $e(t), u = t.type, d = t.pendingProps, E = e !== null ? e.memoizedProps : null, s = d.children, Sf(u, d) ? s = null : E !== null && Sf(u, E) && (t.flags |= 32), t.memoizedState !== null && (u = _c(
          e,
          t,
          L2,
          null,
          null,
          a
        ), gl._currentValue = u), Us(e, t), Dt(e, t, s, a), t.child;
      case 6:
        return e === null && He && ((e = a = lt) && (a = __(
          a,
          t.pendingProps,
          Rn
        ), a !== null ? (t.stateNode = a, Lt = t, lt = null, e = !0) : e = !1), e || ea(t)), null;
      case 13:
        return pm(e, t, a);
      case 4:
        return we(
          t,
          t.stateNode.containerInfo
        ), s = t.pendingProps, e === null ? t.child = Va(
          t,
          null,
          s,
          a
        ) : Dt(
          e,
          t,
          s,
          a
        ), t.child;
      case 11:
        return lm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Dt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return s = t.pendingProps, gr(t, t.type, s.value), Dt(
          e,
          t,
          s.children,
          a
        ), t.child;
      case 9:
        return u = t.type._context, s = t.pendingProps.children, na(t), u = kt(u), s = s(u), t.flags |= 1, Dt(e, t, s, a), t.child;
      case 14:
        return sm(
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
        return s = t.pendingProps, a = t.mode, s = {
          mode: s.mode,
          children: s.children
        }, e === null ? (a = Ps(
          s,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = Fn(e.child, s), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return um(e, t, a);
      case 24:
        return na(t), s = kt(_t), e === null ? (u = cc(), u === null && (u = Je, d = oc(), u.pooledCache = d, d.refCount++, d !== null && (u.pooledCacheLanes |= a), u = d), t.memoizedState = {
          parent: s,
          cache: u
        }, hc(t), gr(t, _t, u)) : ((e.lanes & a) !== 0 && (dc(e, t), Xi(t, null, null, a), Yi()), u = e.memoizedState, d = t.memoizedState, u.parent !== s ? (u = { parent: s, cache: s }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), gr(t, _t, s)) : (s = d.cache, gr(t, _t, s), s !== u.cache && sc(
          t,
          [_t],
          a,
          !0
        ))), Dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(l(156, t.tag));
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
  function Is(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? $h() : 536870912, e.lanes |= t, $a |= t);
  }
  function tl(e, t) {
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
          for (var s = null; a !== null; )
            a.alternate !== null && (s = a), a = a.sibling;
          s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
      }
  }
  function rt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, s = 0;
    if (t)
      for (var u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, s |= u.subtreeFlags & 65011712, s |= u.flags & 65011712, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        a |= u.lanes | u.childLanes, s |= u.subtreeFlags, s |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= s, e.childLanes = a, t;
  }
  function F2(e, t, a) {
    var s = t.pendingProps;
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
        return a = t.stateNode, s = null, e !== null && (s = e.memoizedState.cache), t.memoizedState.cache !== s && (t.flags |= 2048), Qn(_t), Ze(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ui(t) ? Wn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, $d())), rt(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (Wn(t), a !== null ? (rt(t), ym(t, a)) : (rt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Wn(t), rt(t), ym(t, a)) : (rt(t), t.flags &= -16777217) : (e.memoizedProps !== s && Wn(t), rt(t), t.flags &= -16777217), null;
      case 27:
        Ve(t), a = Y.current;
        var u = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== s && Wn(t);
        else {
          if (!s) {
            if (t.stateNode === null)
              throw Error(l(166));
            return rt(t), null;
          }
          e = he.current, Ui(t) ? Xd(t) : (e = yg(u, s, a), t.stateNode = e, Wn(t));
        }
        return rt(t), null;
      case 5:
        if (Ve(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== s && Wn(t);
        else {
          if (!s) {
            if (t.stateNode === null)
              throw Error(l(166));
            return rt(t), null;
          }
          if (e = he.current, Ui(t))
            Xd(t);
          else {
            switch (u = Ws(
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
                    e = typeof s.is == "string" ? u.createElement("select", { is: s.is }) : u.createElement("select"), s.multiple ? e.multiple = !0 : s.size && (e.size = s.size);
                    break;
                  default:
                    e = typeof s.is == "string" ? u.createElement(a, { is: s.is }) : u.createElement(a);
                }
            }
            e[Mt] = t, e[Ut] = s;
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
            e: switch (Ot(e, a, s), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!s.autoFocus;
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
          e.memoizedProps !== s && Wn(t);
        else {
          if (typeof s != "string" && t.stateNode === null)
            throw Error(l(166));
          if (e = Y.current, Ui(t)) {
            if (e = t.stateNode, a = t.memoizedProps, s = null, u = Lt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  s = u.memoizedProps;
              }
            e[Mt] = t, e = !!(e.nodeValue === a || s !== null && s.suppressHydrationWarning === !0 || fg(e.nodeValue, a)), e || ea(t);
          } else
            e = Ws(e).createTextNode(
              s
            ), e[Mt] = t, t.stateNode = e;
        }
        return rt(t), null;
      case 13:
        if (s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = Ui(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(l(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(l(317));
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
        if (a = s !== null, e = e !== null && e.memoizedState !== null, a) {
          s = t.child, u = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (u = s.alternate.memoizedState.cachePool.pool);
          var d = null;
          s.memoizedState !== null && s.memoizedState.cachePool !== null && (d = s.memoizedState.cachePool.pool), d !== u && (s.flags |= 2048);
        }
        return a !== e && a && (t.child.flags |= 8192), Is(t, t.updateQueue), rt(t), null;
      case 4:
        return Ze(), e === null && gf(t.stateNode.containerInfo), rt(t), null;
      case 10:
        return Qn(t.type), rt(t), null;
      case 19:
        if (re(bt), u = t.memoizedState, u === null) return rt(t), null;
        if (s = (t.flags & 128) !== 0, d = u.rendering, d === null)
          if (s) tl(u, !1);
          else {
            if (st !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (d = zs(e), d !== null) {
                  for (t.flags |= 128, tl(u, !1), e = d.updateQueue, t.updateQueue = e, Is(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Vd(a, e), a = a.sibling;
                  return se(
                    bt,
                    bt.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null && _e() > Zs && (t.flags |= 128, s = !0, tl(u, !1), t.lanes = 4194304);
          }
        else {
          if (!s)
            if (e = zs(d), e !== null) {
              if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, Is(t, e), tl(u, !0), u.tail === null && u.tailMode === "hidden" && !d.alternate && !He)
                return rt(t), null;
            } else
              2 * _e() - u.renderingStartTime > Zs && a !== 536870912 && (t.flags |= 128, s = !0, tl(u, !1), t.lanes = 4194304);
          u.isBackwards ? (d.sibling = t.child, t.child = d) : (e = u.last, e !== null ? e.sibling = d : t.child = d, u.last = d);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = _e(), t.sibling = null, e = bt.current, se(bt, s ? e & 1 | 2 : e & 1), t) : (rt(t), null);
      case 22:
      case 23:
        return Kn(t), vc(), s = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192), s ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : rt(t), a = t.updateQueue, a !== null && Is(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), s = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), s !== a && (t.flags |= 2048), e !== null && re(ra), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qn(_t), rt(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function V2(e, t) {
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
            throw Error(l(340));
          Pi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return re(bt), null;
      case 4:
        return Ze(), null;
      case 10:
        return Qn(t.type), null;
      case 22:
      case 23:
        return Kn(t), vc(), e !== null && re(ra), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
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
        re(bt);
        break;
      case 10:
        Qn(t.type);
        break;
      case 22:
      case 23:
        Kn(t), vc(), e !== null && re(ra);
        break;
      case 24:
        Qn(_t);
    }
  }
  function nl(e, t) {
    try {
      var a = t.updateQueue, s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            s = void 0;
            var d = a.create, E = a.inst;
            s = d(), E.destroy = s;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (T) {
      Ke(t, t.return, T);
    }
  }
  function Er(e, t, a) {
    try {
      var s = t.updateQueue, u = s !== null ? s.lastEffect : null;
      if (u !== null) {
        var d = u.next;
        s = d;
        do {
          if ((s.tag & e) === e) {
            var E = s.inst, T = E.destroy;
            if (T !== void 0) {
              E.destroy = void 0, u = t;
              var k = a, P = T;
              try {
                P();
              } catch (V) {
                Ke(
                  u,
                  k,
                  V
                );
              }
            }
          }
          s = s.next;
        } while (s !== d);
      }
    } catch (V) {
      Ke(t, t.return, V);
    }
  }
  function bm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        sp(t, a);
      } catch (s) {
        Ke(e, e.return, s);
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
    } catch (s) {
      Ke(e, t, s);
    }
  }
  function rl(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var s = e.stateNode;
            break;
          case 30:
            s = e.stateNode;
            break;
          default:
            s = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(s) : a.current = s;
      }
    } catch (u) {
      Ke(e, t, u);
    }
  }
  function zn(e, t) {
    var a = e.ref, s = e.refCleanup;
    if (a !== null)
      if (typeof s == "function")
        try {
          s();
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
    var t = e.type, a = e.memoizedProps, s = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && s.focus();
          break e;
        case "img":
          a.src ? s.src = a.src : a.srcSet && (s.srcset = a.srcSet);
      }
    } catch (u) {
      Ke(e, e.return, u);
    }
  }
  function Fc(e, t, a) {
    try {
      var s = e.stateNode;
      d_(s, e.type, a, t), s[Ut] = t;
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
    var s = e.tag;
    if (s === 5 || s === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Js));
    else if (s !== 4 && (s === 27 && Mr(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (Yc(e, t, a), e = e.sibling; e !== null; )
        Yc(e, t, a), e = e.sibling;
  }
  function Hs(e, t, a) {
    var s = e.tag;
    if (s === 5 || s === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (s !== 4 && (s === 27 && Mr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Hs(e, t, a), e = e.sibling; e !== null; )
        Hs(e, t, a), e = e.sibling;
  }
  function Cm(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var s = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Ot(t, s, a), t[Mt] = e, t[Ut] = a;
    } catch (d) {
      Ke(e, e.return, d);
    }
  }
  var er = !1, ct = !1, Xc = !1, wm = typeof WeakSet == "function" ? WeakSet : Set, wt = null;
  function Y2(e, t) {
    if (e = e.containerInfo, _f = io, e = Ld(e), Vu(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var s = a.getSelection && a.getSelection();
          if (s && s.rangeCount !== 0) {
            a = s.anchorNode;
            var u = s.anchorOffset, d = s.focusNode;
            s = s.focusOffset;
            try {
              a.nodeType, d.nodeType;
            } catch {
              a = null;
              break e;
            }
            var E = 0, T = -1, k = -1, P = 0, V = 0, K = e, q = null;
            t: for (; ; ) {
              for (var G; K !== a || u !== 0 && K.nodeType !== 3 || (T = E + u), K !== d || s !== 0 && K.nodeType !== 3 || (k = E + s), K.nodeType === 3 && (E += K.nodeValue.length), (G = K.firstChild) !== null; )
                q = K, K = G;
              for (; ; ) {
                if (K === e) break t;
                if (q === a && ++P === u && (T = E), q === d && ++V === s && (k = E), (G = K.nextSibling) !== null) break;
                K = q, q = K.parentNode;
              }
              K = G;
            }
            a = T === -1 || k === -1 ? null : { start: T, end: k };
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
                e = void 0, a = t, u = d.memoizedProps, d = d.memoizedState, s = a.stateNode;
                try {
                  var Se = ia(
                    a.type,
                    u,
                    a.elementType === a.type
                  );
                  e = s.getSnapshotBeforeUpdate(
                    Se,
                    d
                  ), s.__reactInternalSnapshotBeforeUpdate = e;
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
              if ((e & 1024) !== 0) throw Error(l(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, wt = e;
            break;
          }
          wt = t.return;
        }
  }
  function Am(e, t, a) {
    var s = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Cr(e, a), s & 4 && nl(5, a);
        break;
      case 1:
        if (Cr(e, a), s & 4)
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
        s & 64 && bm(a), s & 512 && rl(a, a.return);
        break;
      case 3:
        if (Cr(e, a), s & 64 && (e = a.updateQueue, e !== null)) {
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
            sp(e, t);
          } catch (E) {
            Ke(a, a.return, E);
          }
        }
        break;
      case 27:
        t === null && s & 4 && Cm(a);
      case 26:
      case 5:
        Cr(e, a), t === null && s & 4 && xm(a), s & 512 && rl(a, a.return);
        break;
      case 12:
        Cr(e, a);
        break;
      case 13:
        Cr(e, a), s & 4 && Om(e, a), s & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = n_.bind(
          null,
          a
        ), b_(e, a))));
        break;
      case 22:
        if (s = a.memoizedState !== null || er, !s) {
          t = t !== null && t.memoizedState !== null || ct, u = er;
          var d = ct;
          er = s, (ct = t) && !d ? wr(
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
  function Dm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Dm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Du(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var et = null, Ht = !1;
  function tr(e, t, a) {
    for (a = a.child; a !== null; )
      Tm(e, t, a), a = a.sibling;
  }
  function Tm(e, t, a) {
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
        var s = et, u = Ht;
        Mr(a.type) && (et = a.stateNode, Ht = !1), tr(
          e,
          t,
          a
        ), hl(a.stateNode), et = s, Ht = u;
        break;
      case 5:
        ct || zn(a, t);
      case 6:
        if (s = et, u = Ht, et = null, tr(
          e,
          t,
          a
        ), et = s, Ht = u, et !== null)
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
        ), bl(e)) : gg(et, a.stateNode));
        break;
      case 4:
        s = et, u = Ht, et = a.stateNode.containerInfo, Ht = !0, tr(
          e,
          t,
          a
        ), et = s, Ht = u;
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
        ct || (zn(a, t), s = a.stateNode, typeof s.componentWillUnmount == "function" && Sm(
          a,
          t,
          s
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
        ct = (s = ct) || a.memoizedState !== null, tr(
          e,
          t,
          a
        ), ct = s;
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
        bl(e);
      } catch (a) {
        Ke(t, t.return, a);
      }
  }
  function X2(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new wm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new wm()), t;
      default:
        throw Error(l(435, e.tag));
    }
  }
  function Qc(e, t) {
    var a = X2(e);
    t.forEach(function(s) {
      var u = r_.bind(null, e, s);
      a.has(s) || (a.add(s), s.then(u, u));
    });
  }
  function Jt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var u = a[s], d = e, E = t, T = E;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (Mr(T.type)) {
                et = T.stateNode, Ht = !1;
                break e;
              }
              break;
            case 5:
              et = T.stateNode, Ht = !1;
              break e;
            case 3:
            case 4:
              et = T.stateNode.containerInfo, Ht = !0;
              break e;
          }
          T = T.return;
        }
        if (et === null) throw Error(l(160));
        Tm(d, E, u), et = null, Ht = !1, d = u.alternate, d !== null && (d.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Nm(t, e), t = t.sibling;
  }
  var En = null;
  function Nm(e, t) {
    var a = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Jt(t, e), Wt(e), s & 4 && (Er(3, e, e.return), nl(3, e), Er(5, e, e.return));
        break;
      case 1:
        Jt(t, e), Wt(e), s & 512 && (ct || a === null || zn(a, a.return)), s & 64 && er && (e = e.updateQueue, e !== null && (s = e.callbacks, s !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? s : a.concat(s))));
        break;
      case 26:
        var u = En;
        if (Jt(t, e), Wt(e), s & 512 && (ct || a === null || zn(a, a.return)), s & 4) {
          var d = a !== null ? a.memoizedState : null;
          if (s = e.memoizedState, a === null)
            if (s === null)
              if (e.stateNode === null) {
                e: {
                  s = e.type, a = e.memoizedProps, u = u.ownerDocument || u;
                  t: switch (s) {
                    case "title":
                      d = u.getElementsByTagName("title")[0], (!d || d[Di] || d[Mt] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = u.createElement(s), u.head.insertBefore(
                        d,
                        u.querySelector("head > title")
                      )), Ot(d, s, a), d[Mt] = e, Et(d), s = d;
                      break e;
                    case "link":
                      var E = Cg(
                        "link",
                        "href",
                        u
                      ).get(s + (a.href || ""));
                      if (E) {
                        for (var T = 0; T < E.length; T++)
                          if (d = E[T], d.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && d.getAttribute("rel") === (a.rel == null ? null : a.rel) && d.getAttribute("title") === (a.title == null ? null : a.title) && d.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            E.splice(T, 1);
                            break t;
                          }
                      }
                      d = u.createElement(s), Ot(d, s, a), u.head.appendChild(d);
                      break;
                    case "meta":
                      if (E = Cg(
                        "meta",
                        "content",
                        u
                      ).get(s + (a.content || ""))) {
                        for (T = 0; T < E.length; T++)
                          if (d = E[T], d.getAttribute("content") === (a.content == null ? null : "" + a.content) && d.getAttribute("name") === (a.name == null ? null : a.name) && d.getAttribute("property") === (a.property == null ? null : a.property) && d.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && d.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            E.splice(T, 1);
                            break t;
                          }
                      }
                      d = u.createElement(s), Ot(d, s, a), u.head.appendChild(d);
                      break;
                    default:
                      throw Error(l(468, s));
                  }
                  d[Mt] = e, Et(d), s = d;
                }
                e.stateNode = s;
              } else
                wg(
                  u,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Eg(
                u,
                s,
                e.memoizedProps
              );
          else
            d !== s ? (d === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : d.count--, s === null ? wg(
              u,
              e.type,
              e.stateNode
            ) : Eg(
              u,
              s,
              e.memoizedProps
            )) : s === null && e.stateNode !== null && Fc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Jt(t, e), Wt(e), s & 512 && (ct || a === null || zn(a, a.return)), a !== null && s & 4 && Fc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Jt(t, e), Wt(e), s & 512 && (ct || a === null || zn(a, a.return)), e.flags & 32) {
          u = e.stateNode;
          try {
            Ta(u, "");
          } catch (G) {
            Ke(e, e.return, G);
          }
        }
        s & 4 && e.stateNode != null && (u = e.memoizedProps, Fc(
          e,
          u,
          a !== null ? a.memoizedProps : u
        )), s & 1024 && (Xc = !0);
        break;
      case 6:
        if (Jt(t, e), Wt(e), s & 4) {
          if (e.stateNode === null)
            throw Error(l(162));
          s = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = s;
          } catch (G) {
            Ke(e, e.return, G);
          }
        }
        break;
      case 3:
        if (no = null, u = En, En = eo(t.containerInfo), Jt(t, e), En = u, Wt(e), s & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            bl(t.containerInfo);
          } catch (G) {
            Ke(e, e.return, G);
          }
        Xc && (Xc = !1, Mm(e));
        break;
      case 4:
        s = En, En = eo(
          e.stateNode.containerInfo
        ), Jt(t, e), Wt(e), En = s;
        break;
      case 12:
        Jt(t, e), Wt(e);
        break;
      case 13:
        Jt(t, e), Wt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (tf = _e()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Qc(e, s)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var k = a !== null && a.memoizedState !== null, P = er, V = ct;
        if (er = P || u, ct = V || k, Jt(t, e), ct = V, er = P, Wt(e), s & 8192)
          e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || k || er || ct || la(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                k = a = t;
                try {
                  if (d = k.stateNode, u)
                    E = d.style, typeof E.setProperty == "function" ? E.setProperty("display", "none", "important") : E.display = "none";
                  else {
                    T = k.stateNode;
                    var K = k.memoizedProps.style, q = K != null && K.hasOwnProperty("display") ? K.display : null;
                    T.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                  }
                } catch (G) {
                  Ke(k, k.return, G);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                k = t;
                try {
                  k.stateNode.nodeValue = u ? "" : k.memoizedProps;
                } catch (G) {
                  Ke(k, k.return, G);
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
        s & 4 && (s = e.updateQueue, s !== null && (a = s.retryQueue, a !== null && (s.retryQueue = null, Qc(e, a))));
        break;
      case 19:
        Jt(t, e), Wt(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Qc(e, s)));
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
        for (var a, s = e.return; s !== null; ) {
          if (Em(s)) {
            a = s;
            break;
          }
          s = s.return;
        }
        if (a == null) throw Error(l(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, d = Vc(e);
            Hs(e, d, u);
            break;
          case 5:
            var E = a.stateNode;
            a.flags & 32 && (Ta(E, ""), a.flags &= -33);
            var T = Vc(e);
            Hs(e, T, E);
            break;
          case 3:
          case 4:
            var k = a.stateNode.containerInfo, P = Vc(e);
            Yc(
              e,
              P,
              k
            );
            break;
          default:
            throw Error(l(161));
        }
      } catch (V) {
        Ke(e, e.return, V);
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
  function la(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Er(4, t, t.return), la(t);
          break;
        case 1:
          zn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Sm(
            t,
            t.return,
            a
          ), la(t);
          break;
        case 27:
          hl(t.stateNode);
        case 26:
        case 5:
          zn(t, t.return), la(t);
          break;
        case 22:
          t.memoizedState === null && la(t);
          break;
        case 30:
          la(t);
          break;
        default:
          la(t);
      }
      e = e.sibling;
    }
  }
  function wr(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var s = t.alternate, u = e, d = t, E = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          wr(
            u,
            d,
            a
          ), nl(4, d);
          break;
        case 1:
          if (wr(
            u,
            d,
            a
          ), s = d, u = s.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (P) {
              Ke(s, s.return, P);
            }
          if (s = d, u = s.updateQueue, u !== null) {
            var T = s.stateNode;
            try {
              var k = u.shared.hiddenCallbacks;
              if (k !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < k.length; u++)
                  lp(k[u], T);
            } catch (P) {
              Ke(s, s.return, P);
            }
          }
          a && E & 64 && bm(d), rl(d, d.return);
          break;
        case 27:
          Cm(d);
        case 26:
        case 5:
          wr(
            u,
            d,
            a
          ), a && s === null && E & 4 && xm(d), rl(d, d.return);
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
          ), rl(d, d.return);
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
  function Ln(e, t, a, s) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        km(
          e,
          t,
          a,
          s
        ), t = t.sibling;
  }
  function km(e, t, a, s) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ln(
          e,
          t,
          a,
          s
        ), u & 2048 && nl(9, t);
        break;
      case 1:
        Ln(
          e,
          t,
          a,
          s
        );
        break;
      case 3:
        Ln(
          e,
          t,
          a,
          s
        ), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && qi(e)));
        break;
      case 12:
        if (u & 2048) {
          Ln(
            e,
            t,
            a,
            s
          ), e = t.stateNode;
          try {
            var d = t.memoizedProps, E = d.id, T = d.onPostCommit;
            typeof T == "function" && T(
              E,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (k) {
            Ke(t, t.return, k);
          }
        } else
          Ln(
            e,
            t,
            a,
            s
          );
        break;
      case 13:
        Ln(
          e,
          t,
          a,
          s
        );
        break;
      case 23:
        break;
      case 22:
        d = t.stateNode, E = t.alternate, t.memoizedState !== null ? d._visibility & 2 ? Ln(
          e,
          t,
          a,
          s
        ) : al(e, t) : d._visibility & 2 ? Ln(
          e,
          t,
          a,
          s
        ) : (d._visibility |= 2, Ya(
          e,
          t,
          a,
          s,
          (t.subtreeFlags & 10256) !== 0
        )), u & 2048 && $c(E, t);
        break;
      case 24:
        Ln(
          e,
          t,
          a,
          s
        ), u & 2048 && Kc(t.alternate, t);
        break;
      default:
        Ln(
          e,
          t,
          a,
          s
        );
    }
  }
  function Ya(e, t, a, s, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var d = e, E = t, T = a, k = s, P = E.flags;
      switch (E.tag) {
        case 0:
        case 11:
        case 15:
          Ya(
            d,
            E,
            T,
            k,
            u
          ), nl(8, E);
          break;
        case 23:
          break;
        case 22:
          var V = E.stateNode;
          E.memoizedState !== null ? V._visibility & 2 ? Ya(
            d,
            E,
            T,
            k,
            u
          ) : al(
            d,
            E
          ) : (V._visibility |= 2, Ya(
            d,
            E,
            T,
            k,
            u
          )), u && P & 2048 && $c(
            E.alternate,
            E
          );
          break;
        case 24:
          Ya(
            d,
            E,
            T,
            k,
            u
          ), u && P & 2048 && Kc(E.alternate, E);
          break;
        default:
          Ya(
            d,
            E,
            T,
            k,
            u
          );
      }
      t = t.sibling;
    }
  }
  function al(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, s = t, u = s.flags;
        switch (s.tag) {
          case 22:
            al(a, s), u & 2048 && $c(
              s.alternate,
              s
            );
            break;
          case 24:
            al(a, s), u & 2048 && Kc(s.alternate, s);
            break;
          default:
            al(a, s);
        }
        t = t.sibling;
      }
  }
  var il = 8192;
  function Xa(e) {
    if (e.subtreeFlags & il)
      for (e = e.child; e !== null; )
        Rm(e), e = e.sibling;
  }
  function Rm(e) {
    switch (e.tag) {
      case 26:
        Xa(e), e.flags & il && e.memoizedState !== null && R_(
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
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = il, il = 16777216, Xa(e), il = t) : Xa(e));
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
  function ll(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var s = t[a];
          wt = s, Lm(
            s,
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
        ll(e), e.flags & 2048 && Er(9, e, e.return);
        break;
      case 3:
        ll(e);
        break;
      case 12:
        ll(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, qs(e)) : ll(e);
        break;
      default:
        ll(e);
    }
  }
  function qs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var s = t[a];
          wt = s, Lm(
            s,
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
          Er(8, t, t.return), qs(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, qs(t));
          break;
        default:
          qs(t);
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
            var s = a.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          qi(a.memoizedState.cache);
      }
      if (s = a.child, s !== null) s.return = a, wt = s;
      else
        e: for (a = e; wt !== null; ) {
          s = wt;
          var u = s.sibling, d = s.return;
          if (Dm(s), s === a) {
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
  var Q2 = {
    getCacheForType: function(e) {
      var t = kt(_t), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, $2 = typeof WeakMap == "function" ? WeakMap : Map, Ge = 0, Je = null, Re = null, Ue = 0, Fe = 0, en = null, Ar = !1, Qa = !1, Jc = !1, nr = 0, st = 0, Dr = 0, sa = 0, Wc = 0, gn = 0, $a = 0, sl = null, qt = null, ef = !1, tf = 0, Zs = 1 / 0, Gs = null, Tr = null, Tt = 0, Or = null, Ka = null, Ja = 0, nf = 0, rf = null, Bm = null, ol = 0, af = null;
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
    )), Ai(e, a), ((Ge & 2) === 0 || e !== Je) && (e === Je && ((Ge & 2) === 0 && (sa |= a), st === 4 && Nr(
      e,
      Ue,
      gn,
      !1
    )), Bn(e));
  }
  function Pm(e, t, a) {
    if ((Ge & 6) !== 0) throw Error(l(327));
    var s = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || wi(e, t), u = s ? W2(e, t) : of(e, t, !0), d = s;
    do {
      if (u === 0) {
        Qa && !s && Nr(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, d && !K2(a)) {
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
              var T = e;
              u = sl;
              var k = T.current.memoizedState.isDehydrated;
              if (k && (Wa(T, E).flags |= 256), E = of(
                T,
                E,
                !1
              ), E !== 2) {
                if (Jc && !k) {
                  T.errorRecoveryDisabledLanes |= d, sa |= d, u = 4;
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
          switch (s = e, d = u, d) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Nr(
                s,
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
              throw Error(l(329));
          }
          if ((t & 62914560) === t && (u = tf + 300 - _e(), 10 < u)) {
            if (Nr(
              s,
              t,
              gn,
              !Ar
            ), ts(s, 0, !0) !== 0) break e;
            s.timeoutHandle = pg(
              Im.bind(
                null,
                s,
                a,
                qt,
                Gs,
                ef,
                t,
                gn,
                sa,
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
            s,
            a,
            qt,
            Gs,
            ef,
            t,
            gn,
            sa,
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
  function Im(e, t, a, s, u, d, E, T, k, P, V, K, q, G) {
    if (e.timeoutHandle = -1, K = t.subtreeFlags, (K & 8192 || (K & 16785408) === 16785408) && (ml = { stylesheets: null, count: 0, unsuspend: k_ }, Rm(t), K = j_(), K !== null)) {
      e.cancelPendingCommit = K(
        Ym.bind(
          null,
          e,
          t,
          d,
          a,
          s,
          u,
          E,
          T,
          k,
          V,
          1,
          q,
          G
        )
      ), Nr(e, d, E, !P);
      return;
    }
    Ym(
      e,
      t,
      d,
      a,
      s,
      u,
      E,
      T,
      k
    );
  }
  function K2(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var s = 0; s < a.length; s++) {
          var u = a[s], d = u.getSnapshot;
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
  function Nr(e, t, a, s) {
    t &= ~Wc, t &= ~sa, e.suspendedLanes |= t, e.pingedLanes &= ~t, s && (e.warmLanes |= t), s = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var d = 31 - Qt(u), E = 1 << d;
      s[d] = -1, u &= ~E;
    }
    a !== 0 && Kh(e, a, t);
  }
  function Fs() {
    return (Ge & 6) === 0 ? (ul(0), !1) : !0;
  }
  function lf() {
    if (Re !== null) {
      if (Fe === 0)
        var e = Re.return;
      else
        e = Re, Xn = ta = null, xc(e), Fa = null, Wi = 0, e = Re;
      for (; e !== null; )
        _m(e.alternate, e), e = e.return;
      Re = null;
    }
  }
  function Wa(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, m_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), lf(), Je = e, Re = a = Fn(e.current, null), Ue = t, Fe = 0, en = null, Ar = !1, Qa = wi(e, t), Jc = !1, $a = gn = Wc = sa = Dr = st = 0, qt = sl = null, ef = !1, (t & 8) !== 0 && (t |= t & 32);
    var s = e.entangledLanes;
    if (s !== 0)
      for (e = e.entanglements, s &= t; 0 < s; ) {
        var u = 31 - Qt(s), d = 1 << u;
        t |= e[u], s &= ~d;
      }
    return nr = t, ds(), a;
  }
  function Hm(e, t) {
    Me = null, H.H = ks, t === Gi || t === xs ? (t = ap(), Fe = 3) : t === tp ? (t = ap(), Fe = 4) : Fe = t === im ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, en = t, Re === null && (st = 1, Bs(
      e,
      fn(t, e.current)
    ));
  }
  function qm() {
    var e = H.H;
    return H.H = ks, e === null ? ks : e;
  }
  function Zm() {
    var e = H.A;
    return H.A = Q2, e;
  }
  function sf() {
    st = 4, Ar || (Ue & 4194048) !== Ue && mn.current !== null || (Qa = !0), (Dr & 134217727) === 0 && (sa & 134217727) === 0 || Je === null || Nr(
      Je,
      Ue,
      gn,
      !1
    );
  }
  function of(e, t, a) {
    var s = Ge;
    Ge |= 2;
    var u = qm(), d = Zm();
    (Je !== e || Ue !== t) && (Gs = null, Wa(e, t)), t = !1;
    var E = st;
    e: do
      try {
        if (Fe !== 0 && Re !== null) {
          var T = Re, k = en;
          switch (Fe) {
            case 8:
              lf(), E = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              mn.current === null && (t = !0);
              var P = Fe;
              if (Fe = 0, en = null, ei(e, T, k, P), a && Qa) {
                E = 0;
                break e;
              }
              break;
            default:
              P = Fe, Fe = 0, en = null, ei(e, T, k, P);
          }
        }
        J2(), E = st;
        break;
      } catch (V) {
        Hm(e, V);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Xn = ta = null, Ge = s, H.H = u, H.A = d, Re === null && (Je = null, Ue = 0, ds()), E;
  }
  function J2() {
    for (; Re !== null; ) Gm(Re);
  }
  function W2(e, t) {
    var a = Ge;
    Ge |= 2;
    var s = qm(), u = Zm();
    Je !== e || Ue !== t ? (Gs = null, Zs = _e() + 500, Wa(e, t)) : Qa = wi(
      e,
      t
    );
    e: do
      try {
        if (Fe !== 0 && Re !== null) {
          t = Re;
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
              switch (Re.tag) {
                case 26:
                  E = Re.memoizedState;
                case 5:
                case 27:
                  var T = Re;
                  if (!E || Ag(E)) {
                    Fe = 0, en = null;
                    var k = T.sibling;
                    if (k !== null) Re = k;
                    else {
                      var P = T.return;
                      P !== null ? (Re = P, Vs(P)) : Re = null;
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
              lf(), st = 6;
              break e;
            default:
              throw Error(l(462));
          }
        }
        e_();
        break;
      } catch (V) {
        Hm(e, V);
      }
    while (!0);
    return Xn = ta = null, H.H = s, H.A = u, Ge = a, Re !== null ? 0 : (Je = null, Ue = 0, ds(), st);
  }
  function e_() {
    for (; Re !== null && !Oe(); )
      Gm(Re);
  }
  function Gm(e) {
    var t = vm(e.alternate, e, nr);
    e.memoizedProps = e.pendingProps, t === null ? Vs(e) : Re = t;
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
        _m(a, t), t = Re = Vd(t, nr), t = vm(a, t, nr);
    }
    e.memoizedProps = e.pendingProps, t === null ? Vs(e) : Re = t;
  }
  function ei(e, t, a, s) {
    Xn = ta = null, xc(t), Fa = null, Wi = 0;
    var u = t.return;
    try {
      if (Z2(
        e,
        u,
        t,
        a,
        Ue
      )) {
        st = 1, Bs(
          e,
          fn(a, e.current)
        ), Re = null;
        return;
      }
    } catch (d) {
      if (u !== null) throw Re = u, d;
      st = 1, Bs(
        e,
        fn(a, e.current)
      ), Re = null;
      return;
    }
    t.flags & 32768 ? (He || s === 1 ? e = !0 : Qa || (Ue & 536870912) !== 0 ? e = !1 : (Ar = e = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = mn.current, s !== null && s.tag === 13 && (s.flags |= 16384))), Vm(t, e)) : Vs(t);
  }
  function Vs(e) {
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
      var a = F2(
        t.alternate,
        t,
        nr
      );
      if (a !== null) {
        Re = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Re = t;
        return;
      }
      Re = t = e;
    } while (t !== null);
    st === 0 && (st = 5);
  }
  function Vm(e, t) {
    do {
      var a = V2(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Re = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Re = e;
        return;
      }
      Re = e = a;
    } while (e !== null);
    st = 6, Re = null;
  }
  function Ym(e, t, a, s, u, d, E, T, k) {
    e.cancelPendingCommit = null;
    do
      Ys();
    while (Tt !== 0);
    if ((Ge & 6) !== 0) throw Error(l(327));
    if (t !== null) {
      if (t === e.current) throw Error(l(177));
      if (d = t.lanes | t.childLanes, d |= Ku, k1(
        e,
        a,
        d,
        E,
        T,
        k
      ), e === Je && (Re = Je = null, Ue = 0), Ka = t, Or = e, Ja = a, nf = d, rf = u, Bm = s, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, a_(Ie, function() {
        return Jm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), s = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || s) {
        s = H.T, H.T = null, u = ne.p, ne.p = 2, E = Ge, Ge |= 4;
        try {
          Y2(e, t, a);
        } finally {
          Ge = E, ne.p = u, H.T = s;
        }
      }
      Tt = 1, Xm(), Qm(), $m();
    }
  }
  function Xm() {
    if (Tt === 1) {
      Tt = 0;
      var e = Or, t = Ka, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = H.T, H.T = null;
        var s = ne.p;
        ne.p = 2;
        var u = Ge;
        Ge |= 4;
        try {
          Nm(t, e);
          var d = bf, E = Ld(e.containerInfo), T = d.focusedElem, k = d.selectionRange;
          if (E !== T && T && T.ownerDocument && zd(
            T.ownerDocument.documentElement,
            T
          )) {
            if (k !== null && Vu(T)) {
              var P = k.start, V = k.end;
              if (V === void 0 && (V = P), "selectionStart" in T)
                T.selectionStart = P, T.selectionEnd = Math.min(
                  V,
                  T.value.length
                );
              else {
                var K = T.ownerDocument || document, q = K && K.defaultView || window;
                if (q.getSelection) {
                  var G = q.getSelection(), Se = T.textContent.length, ve = Math.min(k.start, Se), Qe = k.end === void 0 ? ve : Math.min(k.end, Se);
                  !G.extend && ve > Qe && (E = Qe, Qe = ve, ve = E);
                  var L = jd(
                    T,
                    ve
                  ), z = jd(
                    T,
                    Qe
                  );
                  if (L && z && (G.rangeCount !== 1 || G.anchorNode !== L.node || G.anchorOffset !== L.offset || G.focusNode !== z.node || G.focusOffset !== z.offset)) {
                    var B = K.createRange();
                    B.setStart(L.node, L.offset), G.removeAllRanges(), ve > Qe ? (G.addRange(B), G.extend(z.node, z.offset)) : (B.setEnd(z.node, z.offset), G.addRange(B));
                  }
                }
              }
            }
            for (K = [], G = T; G = G.parentNode; )
              G.nodeType === 1 && K.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof T.focus == "function" && T.focus(), T = 0; T < K.length; T++) {
              var X = K[T];
              X.element.scrollLeft = X.left, X.element.scrollTop = X.top;
            }
          }
          io = !!_f, bf = _f = null;
        } finally {
          Ge = u, ne.p = s, H.T = a;
        }
      }
      e.current = t, Tt = 2;
    }
  }
  function Qm() {
    if (Tt === 2) {
      Tt = 0;
      var e = Or, t = Ka, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = H.T, H.T = null;
        var s = ne.p;
        ne.p = 2;
        var u = Ge;
        Ge |= 4;
        try {
          Am(e, t.alternate, t);
        } finally {
          Ge = u, ne.p = s, H.T = a;
        }
      }
      Tt = 3;
    }
  }
  function $m() {
    if (Tt === 4 || Tt === 3) {
      Tt = 0, qe();
      var e = Or, t = Ka, a = Ja, s = Bm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Tt = 5 : (Tt = 0, Ka = Or = null, Km(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (u === 0 && (Tr = null), wu(a), t = t.stateNode, Xt && typeof Xt.onCommitFiberRoot == "function")
        try {
          Xt.onCommitFiberRoot(
            Ci,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (s !== null) {
        t = H.T, u = ne.p, ne.p = 2, H.T = null;
        try {
          for (var d = e.onRecoverableError, E = 0; E < s.length; E++) {
            var T = s[E];
            d(T.value, {
              componentStack: T.stack
            });
          }
        } finally {
          H.T = t, ne.p = u;
        }
      }
      (Ja & 3) !== 0 && Ys(), Bn(e), u = e.pendingLanes, (a & 4194090) !== 0 && (u & 42) !== 0 ? e === af ? ol++ : (ol = 0, af = e) : ol = 0, ul(0);
    }
  }
  function Km(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, qi(t)));
  }
  function Ys(e) {
    return Xm(), Qm(), $m(), Jm();
  }
  function Jm() {
    if (Tt !== 5) return !1;
    var e = Or, t = nf;
    nf = 0;
    var a = wu(Ja), s = H.T, u = ne.p;
    try {
      ne.p = 32 > a ? 32 : a, H.T = null, a = rf, rf = null;
      var d = Or, E = Ja;
      if (Tt = 0, Ka = Or = null, Ja = 0, (Ge & 6) !== 0) throw Error(l(331));
      var T = Ge;
      if (Ge |= 4, zm(d.current), km(
        d,
        d.current,
        E,
        a
      ), Ge = T, ul(0, !1), Xt && typeof Xt.onPostCommitFiberRoot == "function")
        try {
          Xt.onPostCommitFiberRoot(Ci, d);
        } catch {
        }
      return !0;
    } finally {
      ne.p = u, H.T = s, Km(e, t);
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
          var s = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Tr === null || !Tr.has(s))) {
            e = fn(a, e), a = rm(2), s = _r(t, a, 2), s !== null && (am(
              a,
              s,
              t,
              e
            ), Ai(s, 2), Bn(s));
            break;
          }
        }
        t = t.return;
      }
  }
  function uf(e, t, a) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new $2();
      var u = /* @__PURE__ */ new Set();
      s.set(t, u);
    } else
      u = s.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), s.set(t, u));
    u.has(a) || (Jc = !0, u.add(a), e = t_.bind(null, e, t, a), t.then(e, e));
  }
  function t_(e, t, a) {
    var s = e.pingCache;
    s !== null && s.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Je === e && (Ue & a) === a && (st === 4 || st === 3 && (Ue & 62914560) === Ue && 300 > _e() - tf ? (Ge & 2) === 0 && Wa(e, 0) : Wc |= a, $a === Ue && ($a = 0)), Bn(e);
  }
  function eg(e, t) {
    t === 0 && (t = $h()), e = za(e, t), e !== null && (Ai(e, t), Bn(e));
  }
  function n_(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), eg(e, a);
  }
  function r_(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode, u = e.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      case 22:
        s = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    s !== null && s.delete(t), eg(e, a);
  }
  function a_(e, t) {
    return ie(e, t);
  }
  var Xs = null, ti = null, cf = !1, Qs = !1, ff = !1, oa = 0;
  function Bn(e) {
    e !== ti && e.next === null && (ti === null ? Xs = ti = e : ti = ti.next = e), Qs = !0, cf || (cf = !0, l_());
  }
  function ul(e, t) {
    if (!ff && Qs) {
      ff = !0;
      do
        for (var a = !1, s = Xs; s !== null; ) {
          if (e !== 0) {
            var u = s.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var E = s.suspendedLanes, T = s.pingedLanes;
              d = (1 << 31 - Qt(42 | e) + 1) - 1, d &= u & ~(E & ~T), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (a = !0, ag(s, d));
          } else
            d = Ue, d = ts(
              s,
              s === Je ? d : 0,
              s.cancelPendingCommit !== null || s.timeoutHandle !== -1
            ), (d & 3) === 0 || wi(s, d) || (a = !0, ag(s, d));
          s = s.next;
        }
      while (a);
      ff = !1;
    }
  }
  function i_() {
    tg();
  }
  function tg() {
    Qs = cf = !1;
    var e = 0;
    oa !== 0 && (p_() && (e = oa), oa = 0);
    for (var t = _e(), a = null, s = Xs; s !== null; ) {
      var u = s.next, d = ng(s, t);
      d === 0 ? (s.next = null, a === null ? Xs = u : a.next = u, u === null && (ti = a)) : (a = s, (e !== 0 || (d & 3) !== 0) && (Qs = !0)), s = u;
    }
    ul(e);
  }
  function ng(e, t) {
    for (var a = e.suspendedLanes, s = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d; ) {
      var E = 31 - Qt(d), T = 1 << E, k = u[E];
      k === -1 ? ((T & a) === 0 || (T & s) !== 0) && (u[E] = M1(T, t)) : k <= t && (e.expiredLanes |= T), d &= ~T;
    }
    if (t = Je, a = Ue, a = ts(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), s = e.callbackNode, a === 0 || e === t && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null)
      return s !== null && s !== null && ae(s), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || wi(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (s !== null && ae(s), wu(a)) {
        case 2:
        case 8:
          a = Mn;
          break;
        case 32:
          a = Ie;
          break;
        case 268435456:
          a = Jl;
          break;
        default:
          a = Ie;
      }
      return s = rg.bind(null, e), a = ie(a, s), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return s !== null && s !== null && ae(s), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function rg(e, t) {
    if (Tt !== 0 && Tt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Ys() && e.callbackNode !== a)
      return null;
    var s = Ue;
    return s = ts(
      e,
      e === Je ? s : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), s === 0 ? null : (Pm(e, s, t), ng(e, _e()), e.callbackNode != null && e.callbackNode === a ? rg.bind(null, e) : null);
  }
  function ag(e, t) {
    if (Ys()) return null;
    Pm(e, t, !0);
  }
  function l_() {
    g_(function() {
      (Ge & 6) !== 0 ? ie(
        zt,
        i_
      ) : tg();
    });
  }
  function hf() {
    return oa === 0 && (oa = Qh()), oa;
  }
  function ig(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ls("" + e);
  }
  function lg(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function s_(e, t, a, s, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var d = ig(
        (u[Ut] || null).action
      ), E = s.submitter;
      E && (t = (t = E[Ut] || null) ? ig(t.formAction) : E.getAttribute("formAction"), t !== null && (d = t, E = null));
      var T = new cs(
        "action",
        "action",
        null,
        s,
        u
      );
      e.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (s.defaultPrevented) {
                if (oa !== 0) {
                  var k = E ? lg(u, E) : new FormData(u);
                  Mc(
                    a,
                    {
                      pending: !0,
                      data: k,
                      method: u.method,
                      action: d
                    },
                    null,
                    k
                  );
                }
              } else
                typeof d == "function" && (T.preventDefault(), k = E ? lg(u, E) : new FormData(u), Mc(
                  a,
                  {
                    pending: !0,
                    data: k,
                    method: u.method,
                    action: d
                  },
                  d,
                  k
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var df = 0; df < $u.length; df++) {
    var pf = $u[df], o_ = pf.toLowerCase(), u_ = pf[0].toUpperCase() + pf.slice(1);
    xn(
      o_,
      "on" + u_
    );
  }
  xn(Pd, "onAnimationEnd"), xn(Id, "onAnimationIteration"), xn(Hd, "onAnimationStart"), xn("dblclick", "onDoubleClick"), xn("focusin", "onFocus"), xn("focusout", "onBlur"), xn(A2, "onTransitionRun"), xn(D2, "onTransitionStart"), xn(T2, "onTransitionCancel"), xn(qd, "onTransitionEnd"), wa("onMouseEnter", ["mouseout", "mouseover"]), wa("onMouseLeave", ["mouseout", "mouseover"]), wa("onPointerEnter", ["pointerout", "pointerover"]), wa("onPointerLeave", ["pointerout", "pointerover"]), Vr(
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
  var cl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), c_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl)
  );
  function sg(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var s = e[a], u = s.event;
      s = s.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var E = s.length - 1; 0 <= E; E--) {
            var T = s[E], k = T.instance, P = T.currentTarget;
            if (T = T.listener, k !== d && u.isPropagationStopped())
              break e;
            d = T, u.currentTarget = P;
            try {
              d(u);
            } catch (V) {
              Ls(V);
            }
            u.currentTarget = null, d = k;
          }
        else
          for (E = 0; E < s.length; E++) {
            if (T = s[E], k = T.instance, P = T.currentTarget, T = T.listener, k !== d && u.isPropagationStopped())
              break e;
            d = T, u.currentTarget = P;
            try {
              d(u);
            } catch (V) {
              Ls(V);
            }
            u.currentTarget = null, d = k;
          }
      }
    }
  }
  function je(e, t) {
    var a = t[Au];
    a === void 0 && (a = t[Au] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    a.has(s) || (og(t, e, 2, !1), a.add(s));
  }
  function mf(e, t, a) {
    var s = 0;
    t && (s |= 4), og(
      a,
      e,
      s,
      t
    );
  }
  var $s = "_reactListening" + Math.random().toString(36).slice(2);
  function gf(e) {
    if (!e[$s]) {
      e[$s] = !0, td.forEach(function(a) {
        a !== "selectionchange" && (c_.has(a) || mf(a, !1, e), mf(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$s] || (t[$s] = !0, mf("selectionchange", !1, t));
    }
  }
  function og(e, t, a, s) {
    switch (kg(t)) {
      case 2:
        var u = B_;
        break;
      case 8:
        u = U_;
        break;
      default:
        u = Nf;
    }
    a = u.bind(
      null,
      t,
      a,
      e
    ), u = void 0, !Bu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), s ? u !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, a, !0) : u !== void 0 ? e.addEventListener(t, a, {
      passive: u
    }) : e.addEventListener(t, a, !1);
  }
  function vf(e, t, a, s, u) {
    var d = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (; ; ) {
        if (s === null) return;
        var E = s.tag;
        if (E === 3 || E === 4) {
          var T = s.stateNode.containerInfo;
          if (T === u) break;
          if (E === 4)
            for (E = s.return; E !== null; ) {
              var k = E.tag;
              if ((k === 3 || k === 4) && E.stateNode.containerInfo === u)
                return;
              E = E.return;
            }
          for (; T !== null; ) {
            if (E = xa(T), E === null) return;
            if (k = E.tag, k === 5 || k === 6 || k === 26 || k === 27) {
              s = d = E;
              continue e;
            }
            T = T.parentNode;
          }
        }
        s = s.return;
      }
    md(function() {
      var P = d, V = zu(a), K = [];
      e: {
        var q = Zd.get(e);
        if (q !== void 0) {
          var G = cs, Se = e;
          switch (e) {
            case "keypress":
              if (os(a) === 0) break e;
            case "keydown":
            case "keyup":
              G = a2;
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
              G = V1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = s2;
              break;
            case Pd:
            case Id:
            case Hd:
              G = Q1;
              break;
            case qd:
              G = u2;
              break;
            case "scroll":
            case "scrollend":
              G = G1;
              break;
            case "wheel":
              G = f2;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = K1;
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
              G = d2;
          }
          var ve = (t & 4) !== 0, Qe = !ve && (e === "scroll" || e === "scrollend"), L = ve ? q !== null ? q + "Capture" : null : q;
          ve = [];
          for (var z = P, B; z !== null; ) {
            var X = z;
            if (B = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || B === null || L === null || (X = Oi(z, L), X != null && ve.push(
              fl(z, X, B)
            )), Qe) break;
            z = z.return;
          }
          0 < ve.length && (q = new G(
            q,
            Se,
            null,
            a,
            V
          ), K.push({ event: q, listeners: ve }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (q = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", q && a !== ju && (Se = a.relatedTarget || a.fromElement) && (xa(Se) || Se[Sa]))
            break e;
          if ((G || q) && (q = V.window === V ? V : (q = V.ownerDocument) ? q.defaultView || q.parentWindow : window, G ? (Se = a.relatedTarget || a.toElement, G = P, Se = Se ? xa(Se) : null, Se !== null && (Qe = c(Se), ve = Se.tag, Se !== Qe || ve !== 5 && ve !== 27 && ve !== 6) && (Se = null)) : (G = null, Se = P), G !== Se)) {
            if (ve = yd, X = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (ve = bd, X = "onPointerLeave", L = "onPointerEnter", z = "pointer"), Qe = G == null ? q : Ti(G), B = Se == null ? q : Ti(Se), q = new ve(
              X,
              z + "leave",
              G,
              a,
              V
            ), q.target = Qe, q.relatedTarget = B, X = null, xa(V) === P && (ve = new ve(
              L,
              z + "enter",
              Se,
              a,
              V
            ), ve.target = B, ve.relatedTarget = Qe, X = ve), Qe = X, G && Se)
              t: {
                for (ve = G, L = Se, z = 0, B = ve; B; B = ni(B))
                  z++;
                for (B = 0, X = L; X; X = ni(X))
                  B++;
                for (; 0 < z - B; )
                  ve = ni(ve), z--;
                for (; 0 < B - z; )
                  L = ni(L), B--;
                for (; z--; ) {
                  if (ve === L || L !== null && ve === L.alternate)
                    break t;
                  ve = ni(ve), L = ni(L);
                }
                ve = null;
              }
            else ve = null;
            G !== null && ug(
              K,
              q,
              G,
              ve,
              !1
            ), Se !== null && Qe !== null && ug(
              K,
              Qe,
              Se,
              ve,
              !0
            );
          }
        }
        e: {
          if (q = P ? Ti(P) : window, G = q.nodeName && q.nodeName.toLowerCase(), G === "select" || G === "input" && q.type === "file")
            var ue = Td;
          else if (Ad(q))
            if (Od)
              ue = E2;
            else {
              ue = S2;
              var ke = b2;
            }
          else
            G = q.nodeName, !G || G.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? P && Ru(P.elementType) && (ue = Td) : ue = x2;
          if (ue && (ue = ue(e, P))) {
            Dd(
              K,
              ue,
              a,
              V
            );
            break e;
          }
          ke && ke(e, q, P), e === "focusout" && P && q.type === "number" && P.memoizedProps.value != null && ku(q, "number", q.value);
        }
        switch (ke = P ? Ti(P) : window, e) {
          case "focusin":
            (Ad(ke) || ke.contentEditable === "true") && (ka = ke, Yu = P, Bi = null);
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
            Xu = !1, Bd(K, a, V);
            break;
          case "selectionchange":
            if (w2) break;
          case "keydown":
          case "keyup":
            Bd(K, a, V);
        }
        var de;
        if (Zu)
          e: {
            switch (e) {
              case "compositionstart":
                var be = "onCompositionStart";
                break e;
              case "compositionend":
                be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                be = "onCompositionUpdate";
                break e;
            }
            be = void 0;
          }
        else
          Ma ? Cd(e, a) && (be = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (be = "onCompositionStart");
        be && (Sd && a.locale !== "ko" && (Ma || be !== "onCompositionStart" ? be === "onCompositionEnd" && Ma && (de = gd()) : (mr = V, Uu = "value" in mr ? mr.value : mr.textContent, Ma = !0)), ke = Ks(P, be), 0 < ke.length && (be = new _d(
          be,
          e,
          null,
          a,
          V
        ), K.push({ event: be, listeners: ke }), de ? be.data = de : (de = wd(a), de !== null && (be.data = de)))), (de = m2 ? g2(e, a) : v2(e, a)) && (be = Ks(P, "onBeforeInput"), 0 < be.length && (ke = new _d(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          V
        ), K.push({
          event: ke,
          listeners: be
        }), ke.data = de)), s_(
          K,
          e,
          P,
          a,
          V
        );
      }
      sg(K, t);
    });
  }
  function fl(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Ks(e, t) {
    for (var a = t + "Capture", s = []; e !== null; ) {
      var u = e, d = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || d === null || (u = Oi(e, a), u != null && s.unshift(
        fl(e, u, d)
      ), u = Oi(e, t), u != null && s.push(
        fl(e, u, d)
      )), e.tag === 3) return s;
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
  function ug(e, t, a, s, u) {
    for (var d = t._reactName, E = []; a !== null && a !== s; ) {
      var T = a, k = T.alternate, P = T.stateNode;
      if (T = T.tag, k !== null && k === s) break;
      T !== 5 && T !== 26 && T !== 27 || P === null || (k = P, u ? (P = Oi(a, d), P != null && E.unshift(
        fl(a, P, k)
      )) : u || (P = Oi(a, d), P != null && E.push(
        fl(a, P, k)
      ))), a = a.return;
    }
    E.length !== 0 && e.push({ event: t, listeners: E });
  }
  var f_ = /\r\n?/g, h_ = /\u0000|\uFFFD/g;
  function cg(e) {
    return (typeof e == "string" ? e : "" + e).replace(f_, `
`).replace(h_, "");
  }
  function fg(e, t) {
    return t = cg(t), cg(e) === t;
  }
  function Js() {
  }
  function Xe(e, t, a, s, u, d) {
    switch (a) {
      case "children":
        typeof s == "string" ? t === "body" || t === "textarea" && s === "" || Ta(e, s) : (typeof s == "number" || typeof s == "bigint") && t !== "body" && Ta(e, "" + s);
        break;
      case "className":
        rs(e, "class", s);
        break;
      case "tabIndex":
        rs(e, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        rs(e, a, s);
        break;
      case "style":
        dd(e, s, d);
        break;
      case "data":
        if (t !== "object") {
          rs(e, "data", s);
          break;
        }
      case "src":
      case "href":
        if (s === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
          e.removeAttribute(a);
          break;
        }
        s = ls("" + s), e.setAttribute(a, s);
        break;
      case "action":
      case "formAction":
        if (typeof s == "function") {
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
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          e.removeAttribute(a);
          break;
        }
        s = ls("" + s), e.setAttribute(a, s);
        break;
      case "onClick":
        s != null && (e.onclick = Js);
        break;
      case "onScroll":
        s != null && je("scroll", e);
        break;
      case "onScrollEnd":
        s != null && je("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(l(61));
          if (a = s.__html, a != null) {
            if (u.children != null) throw Error(l(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "muted":
        e.muted = s && typeof s != "function" && typeof s != "symbol";
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
        if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = ls("" + s), e.setAttributeNS(
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
        s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "" + s) : e.removeAttribute(a);
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
        s && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        s === !0 ? e.setAttribute(a, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, s) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? e.setAttribute(a, s) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? e.removeAttribute(a) : e.setAttribute(a, s);
        break;
      case "popover":
        je("beforetoggle", e), je("toggle", e), ns(e, "popover", s);
        break;
      case "xlinkActuate":
        Zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          s
        );
        break;
      case "xlinkArcrole":
        Zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          s
        );
        break;
      case "xlinkRole":
        Zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          s
        );
        break;
      case "xlinkShow":
        Zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          s
        );
        break;
      case "xlinkTitle":
        Zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          s
        );
        break;
      case "xlinkType":
        Zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          s
        );
        break;
      case "xmlBase":
        Zn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          s
        );
        break;
      case "xmlLang":
        Zn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          s
        );
        break;
      case "xmlSpace":
        Zn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          s
        );
        break;
      case "is":
        ns(e, "is", s);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = q1.get(a) || a, ns(e, a, s));
    }
  }
  function yf(e, t, a, s, u, d) {
    switch (a) {
      case "style":
        dd(e, s, d);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s))
            throw Error(l(61));
          if (a = s.__html, a != null) {
            if (u.children != null) throw Error(l(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof s == "string" ? Ta(e, s) : (typeof s == "number" || typeof s == "bigint") && Ta(e, "" + s);
        break;
      case "onScroll":
        s != null && je("scroll", e);
        break;
      case "onScrollEnd":
        s != null && je("scrollend", e);
        break;
      case "onClick":
        s != null && (e.onclick = Js);
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
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), d = e[Ut] || null, d = d != null ? d[a] : null, typeof d == "function" && e.removeEventListener(t, d, u), typeof s == "function")) {
              typeof d != "function" && d !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, s, u);
              break e;
            }
            a in e ? e[a] = s : s === !0 ? e.setAttribute(a, "") : ns(e, a, s);
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
        je("error", e), je("load", e);
        var s = !1, u = !1, d;
        for (d in a)
          if (a.hasOwnProperty(d)) {
            var E = a[d];
            if (E != null)
              switch (d) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, t));
                default:
                  Xe(e, t, d, E, a, null);
              }
          }
        u && Xe(e, t, "srcSet", a.srcSet, a, null), s && Xe(e, t, "src", a.src, a, null);
        return;
      case "input":
        je("invalid", e);
        var T = d = E = u = null, k = null, P = null;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var V = a[s];
            if (V != null)
              switch (s) {
                case "name":
                  u = V;
                  break;
                case "type":
                  E = V;
                  break;
                case "checked":
                  k = V;
                  break;
                case "defaultChecked":
                  P = V;
                  break;
                case "value":
                  d = V;
                  break;
                case "defaultValue":
                  T = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(l(137, t));
                  break;
                default:
                  Xe(e, t, s, V, a, null);
              }
          }
        ud(
          e,
          d,
          T,
          k,
          P,
          E,
          u,
          !1
        ), as(e);
        return;
      case "select":
        je("invalid", e), s = E = d = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (T = a[u], T != null))
            switch (u) {
              case "value":
                d = T;
                break;
              case "defaultValue":
                E = T;
                break;
              case "multiple":
                s = T;
              default:
                Xe(e, t, u, T, a, null);
            }
        t = d, a = E, e.multiple = !!s, t != null ? Da(e, !!s, t, !1) : a != null && Da(e, !!s, a, !0);
        return;
      case "textarea":
        je("invalid", e), d = u = s = null;
        for (E in a)
          if (a.hasOwnProperty(E) && (T = a[E], T != null))
            switch (E) {
              case "value":
                s = T;
                break;
              case "defaultValue":
                u = T;
                break;
              case "children":
                d = T;
                break;
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(l(91));
                break;
              default:
                Xe(e, t, E, T, a, null);
            }
        fd(e, s, u, d), as(e);
        return;
      case "option":
        for (k in a)
          if (a.hasOwnProperty(k) && (s = a[k], s != null))
            switch (k) {
              case "selected":
                e.selected = s && typeof s != "function" && typeof s != "symbol";
                break;
              default:
                Xe(e, t, k, s, a, null);
            }
        return;
      case "dialog":
        je("beforetoggle", e), je("toggle", e), je("cancel", e), je("close", e);
        break;
      case "iframe":
      case "object":
        je("load", e);
        break;
      case "video":
      case "audio":
        for (s = 0; s < cl.length; s++)
          je(cl[s], e);
        break;
      case "image":
        je("error", e), je("load", e);
        break;
      case "details":
        je("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        je("error", e), je("load", e);
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
        for (P in a)
          if (a.hasOwnProperty(P) && (s = a[P], s != null))
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, t));
              default:
                Xe(e, t, P, s, a, null);
            }
        return;
      default:
        if (Ru(t)) {
          for (V in a)
            a.hasOwnProperty(V) && (s = a[V], s !== void 0 && yf(
              e,
              t,
              V,
              s,
              a,
              void 0
            ));
          return;
        }
    }
    for (T in a)
      a.hasOwnProperty(T) && (s = a[T], s != null && Xe(e, t, T, s, a, null));
  }
  function d_(e, t, a, s) {
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
        var u = null, d = null, E = null, T = null, k = null, P = null, V = null;
        for (G in a) {
          var K = a[G];
          if (a.hasOwnProperty(G) && K != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                k = K;
              default:
                s.hasOwnProperty(G) || Xe(e, t, G, null, s, K);
            }
        }
        for (var q in s) {
          var G = s[q];
          if (K = a[q], s.hasOwnProperty(q) && (G != null || K != null))
            switch (q) {
              case "type":
                d = G;
                break;
              case "name":
                u = G;
                break;
              case "checked":
                P = G;
                break;
              case "defaultChecked":
                V = G;
                break;
              case "value":
                E = G;
                break;
              case "defaultValue":
                T = G;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(l(137, t));
                break;
              default:
                G !== K && Xe(
                  e,
                  t,
                  q,
                  G,
                  s,
                  K
                );
            }
        }
        Mu(
          e,
          E,
          T,
          k,
          P,
          V,
          d,
          u
        );
        return;
      case "select":
        G = E = T = q = null;
        for (d in a)
          if (k = a[d], a.hasOwnProperty(d) && k != null)
            switch (d) {
              case "value":
                break;
              case "multiple":
                G = k;
              default:
                s.hasOwnProperty(d) || Xe(
                  e,
                  t,
                  d,
                  null,
                  s,
                  k
                );
            }
        for (u in s)
          if (d = s[u], k = a[u], s.hasOwnProperty(u) && (d != null || k != null))
            switch (u) {
              case "value":
                q = d;
                break;
              case "defaultValue":
                T = d;
                break;
              case "multiple":
                E = d;
              default:
                d !== k && Xe(
                  e,
                  t,
                  u,
                  d,
                  s,
                  k
                );
            }
        t = T, a = E, s = G, q != null ? Da(e, !!a, q, !1) : !!s != !!a && (t != null ? Da(e, !!a, t, !0) : Da(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        G = q = null;
        for (T in a)
          if (u = a[T], a.hasOwnProperty(T) && u != null && !s.hasOwnProperty(T))
            switch (T) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xe(e, t, T, null, s, u);
            }
        for (E in s)
          if (u = s[E], d = a[E], s.hasOwnProperty(E) && (u != null || d != null))
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
                if (u != null) throw Error(l(91));
                break;
              default:
                u !== d && Xe(e, t, E, u, s, d);
            }
        cd(e, q, G);
        return;
      case "option":
        for (var Se in a)
          if (q = a[Se], a.hasOwnProperty(Se) && q != null && !s.hasOwnProperty(Se))
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
                  s,
                  q
                );
            }
        for (k in s)
          if (q = s[k], G = a[k], s.hasOwnProperty(k) && q !== G && (q != null || G != null))
            switch (k) {
              case "selected":
                e.selected = q && typeof q != "function" && typeof q != "symbol";
                break;
              default:
                Xe(
                  e,
                  t,
                  k,
                  q,
                  s,
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
          q = a[ve], a.hasOwnProperty(ve) && q != null && !s.hasOwnProperty(ve) && Xe(e, t, ve, null, s, q);
        for (P in s)
          if (q = s[P], G = a[P], s.hasOwnProperty(P) && q !== G && (q != null || G != null))
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(l(137, t));
                break;
              default:
                Xe(
                  e,
                  t,
                  P,
                  q,
                  s,
                  G
                );
            }
        return;
      default:
        if (Ru(t)) {
          for (var Qe in a)
            q = a[Qe], a.hasOwnProperty(Qe) && q !== void 0 && !s.hasOwnProperty(Qe) && yf(
              e,
              t,
              Qe,
              void 0,
              s,
              q
            );
          for (V in s)
            q = s[V], G = a[V], !s.hasOwnProperty(V) || q === G || q === void 0 && G === void 0 || yf(
              e,
              t,
              V,
              q,
              s,
              G
            );
          return;
        }
    }
    for (var L in a)
      q = a[L], a.hasOwnProperty(L) && q != null && !s.hasOwnProperty(L) && Xe(e, t, L, null, s, q);
    for (K in s)
      q = s[K], G = a[K], !s.hasOwnProperty(K) || q === G || q == null && G == null || Xe(e, t, K, q, s, G);
  }
  var _f = null, bf = null;
  function Ws(e) {
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
  function p_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === xf ? !1 : (xf = e, !0) : (xf = null, !1);
  }
  var pg = typeof setTimeout == "function" ? setTimeout : void 0, m_ = typeof clearTimeout == "function" ? clearTimeout : void 0, mg = typeof Promise == "function" ? Promise : void 0, g_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof mg < "u" ? function(e) {
    return mg.resolve(null).then(e).catch(v_);
  } : pg;
  function v_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Mr(e) {
    return e === "head";
  }
  function gg(e, t) {
    var a = t, s = 0, u = 0;
    do {
      var d = a.nextSibling;
      if (e.removeChild(a), d && d.nodeType === 8)
        if (a = d.data, a === "/$") {
          if (0 < s && 8 > s) {
            a = s;
            var E = e.ownerDocument;
            if (a & 1 && hl(E.documentElement), a & 2 && hl(E.body), a & 4)
              for (a = E.head, hl(a), E = a.firstChild; E; ) {
                var T = E.nextSibling, k = E.nodeName;
                E[Di] || k === "SCRIPT" || k === "STYLE" || k === "LINK" && E.rel.toLowerCase() === "stylesheet" || a.removeChild(E), E = T;
              }
          }
          if (u === 0) {
            e.removeChild(d), bl(t);
            return;
          }
          u--;
        } else
          a === "$" || a === "$?" || a === "$!" ? u++ : s = a.charCodeAt(0) - 48;
      else s = 0;
      a = d;
    } while (a);
    bl(t);
  }
  function Ef(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ef(a), Du(a);
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
  function y_(e, t, a, s) {
    for (; e.nodeType === 1; ) {
      var u = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (s) {
        if (!e[Di])
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
  function __(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Cn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Cf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function b_(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      t();
    else {
      var s = function() {
        t(), a.removeEventListener("DOMContentLoaded", s);
      };
      a.addEventListener("DOMContentLoaded", s), e._reactRetry = s;
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
    switch (t = Ws(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(l(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(l(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  function hl(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Du(e);
  }
  var vn = /* @__PURE__ */ new Map(), _g = /* @__PURE__ */ new Set();
  function eo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var rr = ne.d;
  ne.d = {
    f: S_,
    r: x_,
    D: E_,
    C: C_,
    L: w_,
    m: A_,
    X: T_,
    S: D_,
    M: O_
  };
  function S_() {
    var e = rr.f(), t = Fs();
    return e || t;
  }
  function x_(e) {
    var t = Ea(e);
    t !== null && t.tag === 5 && t.type === "form" ? Pp(t) : rr.r(e);
  }
  var ri = typeof document > "u" ? null : document;
  function bg(e, t, a) {
    var s = ri;
    if (s && typeof t == "string" && t) {
      var u = cn(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), _g.has(u) || (_g.add(u), e = { rel: e, crossOrigin: a, href: t }, s.querySelector(u) === null && (t = s.createElement("link"), Ot(t, "link", e), Et(t), s.head.appendChild(t)));
    }
  }
  function E_(e) {
    rr.D(e), bg("dns-prefetch", e, null);
  }
  function C_(e, t) {
    rr.C(e, t), bg("preconnect", e, t);
  }
  function w_(e, t, a) {
    rr.L(e, t, a);
    var s = ri;
    if (s && e && t) {
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
      ), vn.set(d, e), s.querySelector(u) !== null || t === "style" && s.querySelector(dl(d)) || t === "script" && s.querySelector(pl(d)) || (t = s.createElement("link"), Ot(t, "link", e), Et(t), s.head.appendChild(t)));
    }
  }
  function A_(e, t) {
    rr.m(e, t);
    var a = ri;
    if (a && e) {
      var s = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + cn(s) + '"][href="' + cn(e) + '"]', d = u;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = ii(e);
      }
      if (!vn.has(d) && (e = _({ rel: "modulepreload", href: e }, t), vn.set(d, e), a.querySelector(u) === null)) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(pl(d)))
              return;
        }
        s = a.createElement("link"), Ot(s, "link", e), Et(s), a.head.appendChild(s);
      }
    }
  }
  function D_(e, t, a) {
    rr.S(e, t, a);
    var s = ri;
    if (s && e) {
      var u = Ca(s).hoistableStyles, d = ai(e);
      t = t || "default";
      var E = u.get(d);
      if (!E) {
        var T = { loading: 0, preload: null };
        if (E = s.querySelector(
          dl(d)
        ))
          T.loading = 5;
        else {
          e = _(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = vn.get(d)) && Af(e, a);
          var k = E = s.createElement("link");
          Et(k), Ot(k, "link", e), k._p = new Promise(function(P, V) {
            k.onload = P, k.onerror = V;
          }), k.addEventListener("load", function() {
            T.loading |= 1;
          }), k.addEventListener("error", function() {
            T.loading |= 2;
          }), T.loading |= 4, to(E, t, s);
        }
        E = {
          type: "stylesheet",
          instance: E,
          count: 1,
          state: T
        }, u.set(d, E);
      }
    }
  }
  function T_(e, t) {
    rr.X(e, t);
    var a = ri;
    if (a && e) {
      var s = Ca(a).hoistableScripts, u = ii(e), d = s.get(u);
      d || (d = a.querySelector(pl(u)), d || (e = _({ src: e, async: !0 }, t), (t = vn.get(u)) && Df(e, t), d = a.createElement("script"), Et(d), Ot(d, "link", e), a.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, s.set(u, d));
    }
  }
  function O_(e, t) {
    rr.M(e, t);
    var a = ri;
    if (a && e) {
      var s = Ca(a).hoistableScripts, u = ii(e), d = s.get(u);
      d || (d = a.querySelector(pl(u)), d || (e = _({ src: e, async: !0, type: "module" }, t), (t = vn.get(u)) && Df(e, t), d = a.createElement("script"), Et(d), Ot(d, "link", e), a.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, s.set(u, d));
    }
  }
  function Sg(e, t, a, s) {
    var u = (u = Y.current) ? eo(u) : null;
    if (!u) throw Error(l(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = ai(a.href), a = Ca(
          u
        ).hoistableStyles, s = a.get(t), s || (s = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, s)), s) : { type: "void", instance: null, count: 0, state: null };
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
            dl(e)
          )) && !d._p && (E.instance = d, E.state.loading = 5), vn.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, vn.set(e, a), d || N_(
            u,
            e,
            a,
            E.state
          ))), t && s === null)
            throw Error(l(528, ""));
          return E;
        }
        if (t && s !== null)
          throw Error(l(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ii(a), a = Ca(
          u
        ).hoistableScripts, s = a.get(t), s || (s = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, s)), s) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(l(444, e));
    }
  }
  function ai(e) {
    return 'href="' + cn(e) + '"';
  }
  function dl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function xg(e) {
    return _({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function N_(e, t, a, s) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? s.loading = 1 : (t = e.createElement("link"), s.preload = t, t.addEventListener("load", function() {
      return s.loading |= 1;
    }), t.addEventListener("error", function() {
      return s.loading |= 2;
    }), Ot(t, "link", a), Et(t), e.head.appendChild(t));
  }
  function ii(e) {
    return '[src="' + cn(e) + '"]';
  }
  function pl(e) {
    return "script[async]" + e;
  }
  function Eg(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var s = e.querySelector(
            'style[data-href~="' + cn(a.href) + '"]'
          );
          if (s)
            return t.instance = s, Et(s), s;
          var u = _({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return s = (e.ownerDocument || e).createElement(
            "style"
          ), Et(s), Ot(s, "style", u), to(s, a.precedence, e), t.instance = s;
        case "stylesheet":
          u = ai(a.href);
          var d = e.querySelector(
            dl(u)
          );
          if (d)
            return t.state.loading |= 4, t.instance = d, Et(d), d;
          s = xg(a), (u = vn.get(u)) && Af(s, u), d = (e.ownerDocument || e).createElement("link"), Et(d);
          var E = d;
          return E._p = new Promise(function(T, k) {
            E.onload = T, E.onerror = k;
          }), Ot(d, "link", s), t.state.loading |= 4, to(d, a.precedence, e), t.instance = d;
        case "script":
          return d = ii(a.src), (u = e.querySelector(
            pl(d)
          )) ? (t.instance = u, Et(u), u) : (s = a, (u = vn.get(d)) && (s = _({}, a), Df(s, u)), e = e.ownerDocument || e, u = e.createElement("script"), Et(u), Ot(u, "link", s), e.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(l(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (s = t.instance, t.state.loading |= 4, to(s, a.precedence, e));
    return t.instance;
  }
  function to(e, t, a) {
    for (var s = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = s.length ? s[s.length - 1] : null, d = u, E = 0; E < s.length; E++) {
      var T = s[E];
      if (T.dataset.precedence === t) d = T;
      else if (d !== u) break;
    }
    d ? d.parentNode.insertBefore(e, d.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Af(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Df(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var no = null;
  function Cg(e, t, a) {
    if (no === null) {
      var s = /* @__PURE__ */ new Map(), u = no = /* @__PURE__ */ new Map();
      u.set(a, s);
    } else
      u = no, s = u.get(a), s || (s = /* @__PURE__ */ new Map(), u.set(a, s));
    if (s.has(e)) return s;
    for (s.set(e, null), a = a.getElementsByTagName(e), u = 0; u < a.length; u++) {
      var d = a[u];
      if (!(d[Di] || d[Mt] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var E = d.getAttribute(t) || "";
        E = e + E;
        var T = s.get(E);
        T ? T.push(d) : s.set(E, [d]);
      }
    }
    return s;
  }
  function wg(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function M_(e, t, a) {
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
  var ml = null;
  function k_() {
  }
  function R_(e, t, a) {
    if (ml === null) throw Error(l(475));
    var s = ml;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var u = ai(a.href), d = e.querySelector(
          dl(u)
        );
        if (d) {
          e = d._p, e !== null && typeof e == "object" && typeof e.then == "function" && (s.count++, s = ro.bind(s), e.then(s, s)), t.state.loading |= 4, t.instance = d, Et(d);
          return;
        }
        d = e.ownerDocument || e, a = xg(a), (u = vn.get(u)) && Af(a, u), d = d.createElement("link"), Et(d);
        var E = d;
        E._p = new Promise(function(T, k) {
          E.onload = T, E.onerror = k;
        }), Ot(d, "link", a), t.instance = d;
      }
      s.stylesheets === null && (s.stylesheets = /* @__PURE__ */ new Map()), s.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (s.count++, t = ro.bind(s), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function j_() {
    if (ml === null) throw Error(l(475));
    var e = ml;
    return e.stylesheets && e.count === 0 && Tf(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && Tf(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function ro() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Tf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var ao = null;
  function Tf(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ao = /* @__PURE__ */ new Map(), t.forEach(z_, e), ao = null, ro.call(e));
  }
  function z_(e, t) {
    if (!(t.state.loading & 4)) {
      var a = ao.get(e);
      if (a) var s = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), ao.set(e, a);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < u.length; d++) {
          var E = u[d];
          (E.nodeName === "LINK" || E.getAttribute("media") !== "not all") && (a.set(E.dataset.precedence, E), s = E);
        }
        s && a.set(null, s);
      }
      u = t.instance, E = u.getAttribute("data-precedence"), d = a.get(E) || s, d === s && a.set(null, u), a.set(E, u), this.count++, s = ro.bind(this), u.addEventListener("load", s), u.addEventListener("error", s), d ? d.parentNode.insertBefore(u, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var gl = {
    $$typeof: N,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function L_(e, t, a, s, u, d, E, T) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Eu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Eu(0), this.hiddenUpdates = Eu(null), this.identifierPrefix = s, this.onUncaughtError = u, this.onCaughtError = d, this.onRecoverableError = E, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Dg(e, t, a, s, u, d, E, T, k, P, V, K) {
    return e = new L_(
      e,
      t,
      a,
      E,
      T,
      k,
      P,
      K
    ), t = 1, d === !0 && (t |= 24), d = Kt(3, null, null, t), e.current = d, d.stateNode = e, t = oc(), t.refCount++, e.pooledCache = t, t.refCount++, d.memoizedState = {
      element: s,
      isDehydrated: a,
      cache: t
    }, hc(d), e;
  }
  function Tg(e) {
    return e ? (e = La, e) : La;
  }
  function Og(e, t, a, s, u, d) {
    u = Tg(u), s.context === null ? s.context = u : s.pendingContext = u, s = yr(t), s.payload = { element: a }, d = d === void 0 ? null : d, d !== null && (s.callback = d), a = _r(e, s, t), a !== null && (nn(a, e, t), Vi(a, e, t));
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
  function B_(e, t, a, s) {
    var u = H.T;
    H.T = null;
    var d = ne.p;
    try {
      ne.p = 2, Nf(e, t, a, s);
    } finally {
      ne.p = d, H.T = u;
    }
  }
  function U_(e, t, a, s) {
    var u = H.T;
    H.T = null;
    var d = ne.p;
    try {
      ne.p = 8, Nf(e, t, a, s);
    } finally {
      ne.p = d, H.T = u;
    }
  }
  function Nf(e, t, a, s) {
    if (io) {
      var u = Mf(s);
      if (u === null)
        vf(
          e,
          t,
          s,
          lo,
          a
        ), Rg(e, s);
      else if (I_(
        u,
        e,
        t,
        a,
        s
      ))
        s.stopPropagation();
      else if (Rg(e, s), t & 4 && -1 < P_.indexOf(e)) {
        for (; u !== null; ) {
          var d = Ea(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var E = Fr(d.pendingLanes);
                  if (E !== 0) {
                    var T = d;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; E; ) {
                      var k = 1 << 31 - Qt(E);
                      T.entanglements[1] |= k, E &= ~k;
                    }
                    Bn(d), (Ge & 6) === 0 && (Zs = _e() + 500, ul(0));
                  }
                }
                break;
              case 13:
                T = za(d, 2), T !== null && nn(T, d, 2), Fs(), Of(d, 2);
            }
          if (d = Mf(s), d === null && vf(
            e,
            t,
            s,
            lo,
            a
          ), d === u) break;
          u = d;
        }
        u !== null && s.stopPropagation();
      } else
        vf(
          e,
          t,
          s,
          null,
          a
        );
    }
  }
  function Mf(e) {
    return e = zu(e), kf(e);
  }
  var lo = null;
  function kf(e) {
    if (lo = null, e = xa(e), e !== null) {
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
    return lo = e, null;
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
        switch (De()) {
          case zt:
            return 2;
          case Mn:
            return 8;
          case Ie:
          case kn:
            return 32;
          case Jl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Rf = !1, kr = null, Rr = null, jr = null, vl = /* @__PURE__ */ new Map(), yl = /* @__PURE__ */ new Map(), zr = [], P_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
        vl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yl.delete(t.pointerId);
    }
  }
  function _l(e, t, a, s, u, d) {
    return e === null || e.nativeEvent !== d ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: s,
      nativeEvent: d,
      targetContainers: [u]
    }, t !== null && (t = Ea(t), t !== null && Mg(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function I_(e, t, a, s, u) {
    switch (t) {
      case "focusin":
        return kr = _l(
          kr,
          e,
          t,
          a,
          s,
          u
        ), !0;
      case "dragenter":
        return Rr = _l(
          Rr,
          e,
          t,
          a,
          s,
          u
        ), !0;
      case "mouseover":
        return jr = _l(
          jr,
          e,
          t,
          a,
          s,
          u
        ), !0;
      case "pointerover":
        var d = u.pointerId;
        return vl.set(
          d,
          _l(
            vl.get(d) || null,
            e,
            t,
            a,
            s,
            u
          )
        ), !0;
      case "gotpointercapture":
        return d = u.pointerId, yl.set(
          d,
          _l(
            yl.get(d) || null,
            e,
            t,
            a,
            s,
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
            e.blockedOn = t, R1(e.priority, function() {
              if (a.tag === 13) {
                var s = tn();
                s = Cu(s);
                var u = za(a, s);
                u !== null && nn(u, a, s), Of(a, s);
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
  function so(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Mf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var s = new a.constructor(
          a.type,
          a
        );
        ju = s, a.target.dispatchEvent(s), ju = null;
      } else
        return t = Ea(a), t !== null && Mg(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function zg(e, t, a) {
    so(e) && a.delete(t);
  }
  function H_() {
    Rf = !1, kr !== null && so(kr) && (kr = null), Rr !== null && so(Rr) && (Rr = null), jr !== null && so(jr) && (jr = null), vl.forEach(zg), yl.forEach(zg);
  }
  function oo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Rf || (Rf = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      H_
    )));
  }
  var uo = null;
  function Lg(e) {
    uo !== e && (uo = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        uo === e && (uo = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], s = e[t + 1], u = e[t + 2];
          if (typeof s != "function") {
            if (kf(s || a) === null)
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
              action: s
            },
            s,
            u
          ));
        }
      }
    ));
  }
  function bl(e) {
    function t(k) {
      return oo(k, e);
    }
    kr !== null && oo(kr, e), Rr !== null && oo(Rr, e), jr !== null && oo(jr, e), vl.forEach(t), yl.forEach(t);
    for (var a = 0; a < zr.length; a++) {
      var s = zr[a];
      s.blockedOn === e && (s.blockedOn = null);
    }
    for (; 0 < zr.length && (a = zr[0], a.blockedOn === null); )
      jg(a), a.blockedOn === null && zr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (s = 0; s < a.length; s += 3) {
        var u = a[s], d = a[s + 1], E = u[Ut] || null;
        if (typeof d == "function")
          E || Lg(a);
        else if (E) {
          var T = null;
          if (d && d.hasAttribute("formAction")) {
            if (u = d, E = d[Ut] || null)
              T = E.formAction;
            else if (kf(u) !== null) continue;
          } else T = E.action;
          typeof T == "function" ? a[s + 1] = T : (a.splice(s, 3), s -= 3), Lg(a);
        }
      }
  }
  function jf(e) {
    this._internalRoot = e;
  }
  co.prototype.render = jf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    var a = t.current, s = tn();
    Og(a, s, e, t, null, null);
  }, co.prototype.unmount = jf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Og(e.current, 2, null, e, null, null), Fs(), t[Sa] = null;
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
      l(
        527,
        Bg,
        "19.1.1"
      )
    );
  ne.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = g(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var q_ = {
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
          q_
        ), Xt = fo;
      } catch {
      }
  }
  return xl.createRoot = function(e, t) {
    if (!o(e)) throw Error(l(299));
    var a = !1, s = "", u = Wp, d = em, E = tm, T = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (d = t.onCaughtError), t.onRecoverableError !== void 0 && (E = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (T = t.unstable_transitionCallbacks)), t = Dg(
      e,
      1,
      !1,
      null,
      null,
      a,
      s,
      u,
      d,
      E,
      T,
      null
    ), e[Sa] = t.current, gf(e), new jf(t);
  }, xl.hydrateRoot = function(e, t, a) {
    if (!o(e)) throw Error(l(299));
    var s = !1, u = "", d = Wp, E = em, T = tm, k = null, P = null;
    return a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (d = a.onUncaughtError), a.onCaughtError !== void 0 && (E = a.onCaughtError), a.onRecoverableError !== void 0 && (T = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (k = a.unstable_transitionCallbacks), a.formState !== void 0 && (P = a.formState)), t = Dg(
      e,
      1,
      !0,
      t,
      a ?? null,
      s,
      u,
      d,
      E,
      T,
      k,
      P
    ), t.context = Tg(null), a = t.current, s = tn(), s = Cu(s), u = yr(s), u.callback = null, _r(a, u, s), a = s, t.current.lanes = a, Ai(t, a), Bn(t), e[Sa] = t.current, gf(e), new co(t);
  }, xl.version = "19.1.1", xl;
}
var Jg;
function eb() {
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
  return n(), Uf.exports = W_(), Uf.exports;
}
var tb = eb();
const Wg = /* @__PURE__ */ Gy(tb);
var nb = Object.defineProperty, rb = (n, r, i) => r in n ? nb(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[r] = i, ab = (n, r, i) => rb(n, r + "", i);
class Vy extends Error {
  constructor(r, i) {
    super(r), ab(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function ib(n, r) {
  const i = SillyTavern.getContext(), l = new FormData();
  l.append("avatar", new Blob([JSON.stringify(n)], { type: "application/json" }), "character.json"), l.append("file_type", "json");
  const o = i.getRequestHeaders();
  delete o["Content-Type"];
  const c = await fetch("/api/characters/import", {
    method: "POST",
    headers: o,
    body: l,
    cache: "no-cache"
  });
  if (!c.ok)
    throw new Vy(c.statusText, c);
  await i.getCharacters();
}
async function lb(n, r) {
  var i;
  const l = SillyTavern.getContext();
  if (!n.avatar)
    throw new Error("`data.avatar` (character filename) is required to save character attributes.");
  n == null || delete n.json_data, (i = n?.data) == null || delete i.json_data;
  const o = l.getRequestHeaders(), c = await fetch("/api/characters/merge-attributes", {
    method: "POST",
    headers: o,
    body: JSON.stringify(n),
    cache: "no-cache"
  });
  if (!c.ok) {
    const h = await c.json().catch(() => ({ message: c.statusText }));
    throw new Vy(h.message || `Request failed with status ${c.status}`, c);
  }
  await l.getCharacters();
}
var sb = Object.defineProperty, ob = (n, r, i) => r in n ? sb(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[r] = i, ev = (n, r, i) => ob(n, typeof r != "symbol" ? r + "" : r, i);
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
    const { strategy: i = "recursive" } = r, l = this.defaultSettings.version, o = this.defaultSettings.formatVersion, c = SillyTavern.getContext().extensionSettings[this.settingsKey], h = {
      version: {
        changed: !1,
        new: l ?? ""
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
      l && c.version !== l && (m.version.changed = !0, m.version.new = l, c.version = l), o && o !== "*" && c.formatVersion !== o && (m.formatVersion.changed = !0, m.formatVersion.new = o, c.formatVersion = o), (g(c, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      l && !c.version && (c.version = l, m.version.changed = !0, m.version.new = l), o && !c.formatVersion && (c.formatVersion = o, m.formatVersion.changed = !0, m.formatVersion.new = o);
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
function ub(n) {
  if (typeof n == "string")
    return n;
  let r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function cb(n) {
  return n == null ? "" : ub(n);
}
function In(n) {
  return typeof n == "string";
}
function Xy(n) {
  return typeof n == "number";
}
function fb(n) {
  return n === !0 || n === !1 || hb(n) && $y(n) == "[object Boolean]";
}
function Qy(n) {
  return typeof n == "object";
}
function hb(n) {
  return Qy(n) && n !== null;
}
function sn(n) {
  return n != null;
}
function qf(n) {
  return !n.trim().length;
}
function $y(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const db = "Incorrect 'index' type", pb = (n) => `Invalid value for key ${n}`, mb = (n) => `Pattern length exceeds max of ${n}.`, gb = (n) => `Missing ${n} property in key`, vb = (n) => `Property 'weight' in key '${n}' must be a positive integer`, tv = Object.prototype.hasOwnProperty;
class yb {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((l) => {
      let o = Ky(l);
      this._keys.push(o), this._keyMap[o.id] = o, i += o.weight;
    }), this._keys.forEach((l) => {
      l.weight /= i;
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
  let r = null, i = null, l = null, o = 1, c = null;
  if (In(n) || cr(n))
    l = n, r = nv(n), i = ch(n);
  else {
    if (!tv.call(n, "name"))
      throw new Error(gb("name"));
    const h = n.name;
    if (l = h, tv.call(n, "weight") && (o = n.weight, o <= 0))
      throw new Error(vb(h));
    r = nv(h), i = ch(h), c = n.getFn;
  }
  return { path: r, id: i, weight: o, src: l, getFn: c };
}
function nv(n) {
  return cr(n) ? n : n.split(".");
}
function ch(n) {
  return cr(n) ? n.join(".") : n;
}
function _b(n, r) {
  let i = [], l = !1;
  const o = (c, h, m) => {
    if (sn(c))
      if (!h[m])
        i.push(c);
      else {
        let g = h[m];
        const v = c[g];
        if (!sn(v))
          return;
        if (m === h.length - 1 && (In(v) || Xy(v) || fb(v)))
          i.push(cb(v));
        else if (cr(v)) {
          l = !0;
          for (let _ = 0, b = v.length; _ < b; _ += 1)
            o(v[_], h, m + 1);
        } else h.length && o(v, h, m + 1);
      }
  };
  return o(n, In(r) ? r.split(".") : r, 0), l ? i : i[0];
}
const bb = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, Sb = {
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
}, xb = {
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
}, Eb = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: _b,
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
  ...Sb,
  ...bb,
  ...xb,
  ...Eb
};
const Cb = /[^ ]+/g;
function wb(n = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), l = Math.pow(10, r);
  return {
    get(o) {
      const c = o.match(Cb).length;
      if (i.has(c))
        return i.get(c);
      const h = 1 / Math.pow(c, 0.5 * n), m = parseFloat(Math.round(h * l) / l);
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
    this.norm = wb(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(r = []) {
    this.docs = r;
  }
  setIndexRecords(r = []) {
    this.records = r;
  }
  setKeys(r = []) {
    this.keys = r, this._keysMap = {}, r.forEach((i, l) => {
      this._keysMap[i.id] = l;
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
    for (let i = r, l = this.size(); i < l; i += 1)
      this.records[i].i -= 1;
  }
  getValueForItemAtKeyId(r, i) {
    return r[this._keysMap[i]];
  }
  size() {
    return this.records.length;
  }
  _addString(r, i) {
    if (!sn(r) || qf(r))
      return;
    let l = {
      v: r,
      i,
      n: this.norm.get(r)
    };
    this.records.push(l);
  }
  _addObject(r, i) {
    let l = { i, $: {} };
    this.keys.forEach((o, c) => {
      let h = o.getFn ? o.getFn(r) : this.getFn(r, o.path);
      if (sn(h)) {
        if (cr(h)) {
          let m = [];
          const g = [{ nestedArrIndex: -1, value: h }];
          for (; g.length; ) {
            const { nestedArrIndex: v, value: _ } = g.pop();
            if (sn(_))
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
          l.$[c] = m;
        } else if (In(h) && !qf(h)) {
          let m = {
            v: h,
            n: this.norm.get(h)
          };
          l.$[c] = m;
        }
      }
    }), this.records.push(l);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function Jy(n, r, { getFn: i = Ce.getFn, fieldNormWeight: l = Ce.fieldNormWeight } = {}) {
  const o = new kh({ getFn: i, fieldNormWeight: l });
  return o.setKeys(n.map(Ky)), o.setSources(r), o.create(), o;
}
function Ab(n, { getFn: r = Ce.getFn, fieldNormWeight: i = Ce.fieldNormWeight } = {}) {
  const { keys: l, records: o } = n, c = new kh({ getFn: r, fieldNormWeight: i });
  return c.setKeys(l), c.setIndexRecords(o), c;
}
function ho(n, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: l = 0,
  distance: o = Ce.distance,
  ignoreLocation: c = Ce.ignoreLocation
} = {}) {
  const h = r / n.length;
  if (c)
    return h;
  const m = Math.abs(l - i);
  return o ? h + m / o : m ? 1 : h;
}
function Db(n = [], r = Ce.minMatchCharLength) {
  let i = [], l = -1, o = -1, c = 0;
  for (let h = n.length; c < h; c += 1) {
    let m = n[c];
    m && l === -1 ? l = c : !m && l !== -1 && (o = c - 1, o - l + 1 >= r && i.push([l, o]), l = -1);
  }
  return n[c - 1] && c - l >= r && i.push([l, c - 1]), i;
}
const da = 32;
function Tb(n, r, i, {
  location: l = Ce.location,
  distance: o = Ce.distance,
  threshold: c = Ce.threshold,
  findAllMatches: h = Ce.findAllMatches,
  minMatchCharLength: m = Ce.minMatchCharLength,
  includeMatches: g = Ce.includeMatches,
  ignoreLocation: v = Ce.ignoreLocation
} = {}) {
  if (r.length > da)
    throw new Error(mb(da));
  const _ = r.length, b = n.length, y = Math.max(0, Math.min(l, b));
  let p = c, f = y;
  const S = m > 1 || g, x = S ? Array(b) : [];
  let D;
  for (; (D = n.indexOf(r, f)) > -1; ) {
    let R = ho(r, {
      currentLocation: D,
      expectedLocation: y,
      distance: o,
      ignoreLocation: v
    });
    if (p = Math.min(R, p), f = D + _, S) {
      let Z = 0;
      for (; Z < _; )
        x[D + Z] = 1, Z += 1;
    }
  }
  f = -1;
  let w = [], N = 1, C = _ + b;
  const O = 1 << _ - 1;
  for (let R = 0; R < _; R += 1) {
    let Z = 0, W = C;
    for (; Z < W; )
      ho(r, {
        errors: R,
        currentLocation: y + W,
        expectedLocation: y,
        distance: o,
        ignoreLocation: v
      }) <= p ? Z = W : C = W, W = Math.floor((C - Z) / 2 + Z);
    C = W;
    let $ = Math.max(1, y - W + 1), Q = h ? b : Math.min(y + W, b) + _, ee = Array(Q + 2);
    ee[Q + 1] = (1 << R) - 1;
    for (let pe = Q; pe >= $; pe -= 1) {
      let ye = pe - 1, H = i[n.charAt(ye)];
      if (S && (x[ye] = +!!H), ee[pe] = (ee[pe + 1] << 1 | 1) & H, R && (ee[pe] |= (w[pe + 1] | w[pe]) << 1 | 1 | w[pe + 1]), ee[pe] & O && (N = ho(r, {
        errors: R,
        currentLocation: ye,
        expectedLocation: y,
        distance: o,
        ignoreLocation: v
      }), N <= p)) {
        if (p = N, f = ye, f <= y)
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
  const j = {
    isMatch: f >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, N)
  };
  if (S) {
    const R = Db(x, m);
    R.length ? g && (j.indices = R) : j.isMatch = !1;
  }
  return j;
}
function Ob(n) {
  let r = {};
  for (let i = 0, l = n.length; i < l; i += 1) {
    const o = n.charAt(i);
    r[o] = (r[o] || 0) | 1 << l - i - 1;
  }
  return r;
}
const ru = String.prototype.normalize ? ((n) => n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((n) => n);
class Wy {
  constructor(r, {
    location: i = Ce.location,
    threshold: l = Ce.threshold,
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
      threshold: l,
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
        alphabet: Ob(p),
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
    const { isCaseSensitive: i, ignoreDiacritics: l, includeMatches: o } = this.options;
    if (r = i ? r : r.toLowerCase(), r = l ? ru(r) : r, this.pattern === r) {
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
    this.chunks.forEach(({ pattern: S, alphabet: x, startIndex: D }) => {
      const { isMatch: w, score: N, indices: C } = Tb(r, S, x, {
        location: c + D,
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
class Nb extends qr {
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
class Mb extends qr {
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
    const l = r.indexOf(this.pattern) === -1;
    return {
      isMatch: l,
      score: l ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class kb extends qr {
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
class Rb extends qr {
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
class jb extends qr {
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
class zb extends qr {
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
    threshold: l = Ce.threshold,
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
      threshold: l,
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
    let i = 0, l;
    const o = [], c = this.pattern.length;
    for (; (l = r.indexOf(this.pattern, i)) > -1; )
      i = l + c, o.push([l, i - 1]);
    const h = !!o.length;
    return {
      isMatch: h,
      score: h ? 0 : 1,
      indices: o
    };
  }
}
const fh = [
  Nb,
  t0,
  kb,
  Rb,
  zb,
  jb,
  Mb,
  e0
], av = fh.length, Lb = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, Bb = "|";
function Ub(n, r = {}) {
  return n.split(Bb).map((i) => {
    let l = i.trim().split(Lb).filter((c) => c && !!c.trim()), o = [];
    for (let c = 0, h = l.length; c < h; c += 1) {
      const m = l[c];
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
const Pb = /* @__PURE__ */ new Set([e0.type, t0.type]);
class Ib {
  constructor(r, {
    isCaseSensitive: i = Ce.isCaseSensitive,
    ignoreDiacritics: l = Ce.ignoreDiacritics,
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
      ignoreDiacritics: l,
      includeMatches: o,
      minMatchCharLength: c,
      findAllMatches: m,
      ignoreLocation: h,
      location: g,
      threshold: v,
      distance: _
    }, r = i ? r : r.toLowerCase(), r = l ? ru(r) : r, this.pattern = r, this.query = Ub(this.pattern, this.options);
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
    const { includeMatches: l, isCaseSensitive: o, ignoreDiacritics: c } = this.options;
    r = o ? r : r.toLowerCase(), r = c ? ru(r) : r;
    let h = 0, m = [], g = 0;
    for (let v = 0, _ = i.length; v < _; v += 1) {
      const b = i[v];
      m.length = 0, h = 0;
      for (let y = 0, p = b.length; y < p; y += 1) {
        const f = b[y], { isMatch: S, indices: x, score: D } = f.search(r);
        if (S) {
          if (h += 1, g += D, l) {
            const w = f.constructor.type;
            Pb.has(w) ? m = [...m, ...x] : m.push(x);
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
        return l && (y.indices = m), y;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const hh = [];
function Hb(...n) {
  hh.push(...n);
}
function dh(n, r) {
  for (let i = 0, l = hh.length; i < l; i += 1) {
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
}, mh = (n) => !!(n[au.AND] || n[au.OR]), qb = (n) => !!n[ph.PATH], Zb = (n) => !cr(n) && Qy(n) && !mh(n), iv = (n) => ({
  [au.AND]: Object.keys(n).map((r) => ({
    [r]: n[r]
  }))
});
function n0(n, r, { auto: i = !0 } = {}) {
  const l = (o) => {
    let c = Object.keys(o);
    const h = qb(o);
    if (!h && c.length > 1 && !mh(o))
      return l(iv(o));
    if (Zb(o)) {
      const g = h ? o[ph.PATH] : c[0], v = h ? o[ph.PATTERN] : o[g];
      if (!In(v))
        throw new Error(pb(g));
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
        m.children.push(l(_));
      });
    }), m;
  };
  return mh(n) || (n = iv(n)), l(n);
}
function Gb(n, { ignoreFieldNorm: r = Ce.ignoreFieldNorm }) {
  n.forEach((i) => {
    let l = 1;
    i.matches.forEach(({ key: o, norm: c, score: h }) => {
      const m = o ? o.weight : null;
      l *= Math.pow(
        h === 0 && m ? Number.EPSILON : h,
        (m || 1) * (r ? 1 : c)
      );
    }), i.score = l;
  });
}
function Fb(n, r) {
  const i = n.matches;
  r.matches = [], sn(i) && i.forEach((l) => {
    if (!sn(l.indices) || !l.indices.length)
      return;
    const { indices: o, value: c } = l;
    let h = {
      indices: o,
      value: c
    };
    l.key && (h.key = l.key.src), l.idx > -1 && (h.refIndex = l.idx), r.matches.push(h);
  });
}
function Vb(n, r) {
  r.score = n.score;
}
function Yb(n, r, {
  includeMatches: i = Ce.includeMatches,
  includeScore: l = Ce.includeScore
} = {}) {
  const o = [];
  return i && o.push(Fb), l && o.push(Vb), n.map((c) => {
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
  constructor(r, i = {}, l) {
    this.options = { ...Ce, ...i }, this.options.useExtendedSearch, this._keyStore = new yb(this.options.keys), this.setCollection(r, l);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof kh))
      throw new Error(db);
    this._myIndex = i || Jy(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    sn(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const i = [];
    for (let l = 0, o = this._docs.length; l < o; l += 1) {
      const c = this._docs[l];
      r(c, l) && (this.removeAt(l), l -= 1, o -= 1, i.push(c));
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
      includeMatches: l,
      includeScore: o,
      shouldSort: c,
      sortFn: h,
      ignoreFieldNorm: m
    } = this.options;
    let g = In(r) ? In(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return Gb(g, { ignoreFieldNorm: m }), c && g.sort(h), Xy(i) && i > -1 && (g = g.slice(0, i)), Yb(g, this._docs, {
      includeMatches: l,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const i = dh(r, this.options), { records: l } = this._myIndex, o = [];
    return l.forEach(({ v: c, i: h, n: m }) => {
      if (!sn(c))
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
    const i = n0(r, this.options), l = (m, g, v) => {
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
        const p = m.children[b], f = l(p, g, v);
        if (f.length)
          _.push(...f);
        else if (m.operator === au.AND)
          return [];
      }
      return _;
    }, o = this._myIndex.records, c = {}, h = [];
    return o.forEach(({ $: m, i: g }) => {
      if (sn(m)) {
        let v = l(i, m, g);
        v.length && (c[g] || (c[g] = { idx: g, item: m, matches: [] }, h.push(c[g])), v.forEach(({ matches: _ }) => {
          c[g].matches.push(..._);
        }));
      }
    }), h;
  }
  _searchObjectList(r) {
    const i = dh(r, this.options), { keys: l, records: o } = this._myIndex, c = [];
    return o.forEach(({ $: h, i: m }) => {
      if (!sn(h))
        return;
      let g = [];
      l.forEach((v, _) => {
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
  _findMatches({ key: r, value: i, searcher: l }) {
    if (!sn(i))
      return [];
    let o = [];
    if (cr(i))
      i.forEach(({ v: c, i: h, n: m }) => {
        if (!sn(c))
          return;
        const { isMatch: g, score: v, indices: _ } = l.searchIn(c);
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
      const { v: c, n: h } = i, { isMatch: m, score: g, indices: v } = l.searchIn(c);
      m && o.push({ score: g, key: r, value: c, norm: h, indices: v });
    }
    return o;
  }
}
xi.version = "7.1.0";
xi.createIndex = Jy;
xi.parseIndex = Ab;
xi.config = Ce;
xi.parseQuery = n0;
Hb(Ib);
async function Xb(n, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[n].callback(...r);
}
async function Ae(n, r, { escapeHtml: i = !0 } = {}) {
  await Xb("echo", { severity: n, escapeHtml: (!!i).toString() }, r);
}
function Qb(n, r, {
  characterOverride: i,
  isMarkdown: l,
  isPrompt: o,
  isEdit: c,
  depth: h
}) {
  return F_(n, r, { characterOverride: i, isMarkdown: l, isPrompt: o, isEdit: c, depth: h });
}
function $b(n, r) {
  return G_(n, r);
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function lv(n, r) {
  var i = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    r && (l = l.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), i.push.apply(i, l);
  }
  return i;
}
function qn(n) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? lv(Object(i), !0).forEach(function(l) {
      Kb(n, l, i[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : lv(Object(i)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(i, l));
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
function Kb(n, r, i) {
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
      for (var l in i)
        Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
    }
    return n;
  }, fr.apply(this, arguments);
}
function Jb(n, r) {
  if (n == null) return {};
  var i = {}, l = Object.keys(n), o, c;
  for (c = 0; c < l.length; c++)
    o = l[c], !(r.indexOf(o) >= 0) && (i[o] = n[o]);
  return i;
}
function Wb(n, r) {
  if (n == null) return {};
  var i = Jb(n, r), l, o;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (o = 0; o < c.length; o++)
      l = c[o], !(r.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (i[l] = n[l]);
  }
  return i;
}
var eS = "1.15.6";
function ur(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var hr = ur(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Vl = ur(/Edge/i), sv = ur(/firefox/i), zl = ur(/safari/i) && !ur(/chrome/i) && !ur(/android/i), Rh = ur(/iP(ad|od|hone)/i), r0 = ur(/chrome/i) && ur(/android/i), a0 = {
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
function Dn(n, r, i, l) {
  if (n) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? n.parentNode === i && iu(n, r) : iu(n, r)) || l && n === i)
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
      var l = (" " + n.className + " ").replace(ov, " ").replace(" " + r + " ", " ");
      n.className = (l + (i ? " " + r : "")).replace(ov, " ");
    }
}
function xe(n, r, i) {
  var l = n && n.style;
  if (l) {
    if (i === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (i = n.currentStyle), r === void 0 ? i : i[r];
    !(r in l) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), l[r] = i + (typeof i == "string" ? "" : "px");
  }
}
function gi(n, r) {
  var i = "";
  if (typeof n == "string")
    i = n;
  else
    do {
      var l = xe(n, "transform");
      l && l !== "none" && (i = l + " " + i);
    } while (!r && (n = n.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(i);
}
function l0(n, r, i) {
  if (n) {
    var l = n.getElementsByTagName(r), o = 0, c = l.length;
    if (i)
      for (; o < c; o++)
        i(l[o], o);
    return l;
  }
  return [];
}
function Hn() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function mt(n, r, i, l, o) {
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
    if (l && n !== window) {
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
  for (var l = Hr(n, !0), o = mt(n)[r]; l; ) {
    var c = mt(l)[i], h = void 0;
    if (h = o >= c, !h) return l;
    if (l === Hn()) break;
    l = Hr(l, !1);
  }
  return !1;
}
function _i(n, r, i, l) {
  for (var o = 0, c = 0, h = n.children; c < h.length; ) {
    if (h[c].style.display !== "none" && h[c] !== Ee.ghost && (l || h[c] !== Ee.dragged) && Dn(h[c], i.draggable, n, !1)) {
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
  var r = 0, i = 0, l = Hn();
  if (n)
    do {
      var o = gi(n), c = o.a, h = o.d;
      r += n.scrollLeft * c, i += n.scrollTop * h;
    } while (n !== l && (n = n.parentNode));
  return [r, i];
}
function tS(n, r) {
  for (var i in n)
    if (n.hasOwnProperty(i)) {
      for (var l in r)
        if (r.hasOwnProperty(l) && r[l] === n[i][l]) return Number(i);
    }
  return -1;
}
function Hr(n, r) {
  if (!n || !n.getBoundingClientRect) return Hn();
  var i = n, l = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var o = xe(i);
      if (i.clientWidth < i.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return Hn();
        if (l || r) return i;
        l = !0;
      }
    }
  while (i = i.parentNode);
  return Hn();
}
function nS(n, r) {
  if (n && r)
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  return n;
}
function Zf(n, r) {
  return Math.round(n.top) === Math.round(r.top) && Math.round(n.left) === Math.round(r.left) && Math.round(n.height) === Math.round(r.height) && Math.round(n.width) === Math.round(r.width);
}
var Ll;
function s0(n, r) {
  return function() {
    if (!Ll) {
      var i = arguments, l = this;
      i.length === 1 ? n.call(l, i[0]) : n.apply(l, i), Ll = setTimeout(function() {
        Ll = void 0;
      }, r);
    }
  };
}
function rS() {
  clearTimeout(Ll), Ll = void 0;
}
function o0(n, r, i) {
  n.scrollLeft += r, n.scrollTop += i;
}
function u0(n) {
  var r = window.Polymer, i = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(n).cloneNode(!0) : i ? i(n).clone(!0)[0] : n.cloneNode(!0);
}
function c0(n, r, i) {
  var l = {};
  return Array.from(n.children).forEach(function(o) {
    var c, h, m, g;
    if (!(!Dn(o, r.draggable, n, !1) || o.animated || o === i)) {
      var v = mt(o);
      l.left = Math.min((c = l.left) !== null && c !== void 0 ? c : 1 / 0, v.left), l.top = Math.min((h = l.top) !== null && h !== void 0 ? h : 1 / 0, v.top), l.right = Math.max((m = l.right) !== null && m !== void 0 ? m : -1 / 0, v.right), l.bottom = Math.max((g = l.bottom) !== null && g !== void 0 ? g : -1 / 0, v.bottom);
    }
  }), l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
var Ft = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function aS() {
  var n = [], r;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(o) {
          if (!(xe(o, "display") === "none" || o === Ee.ghost)) {
            n.push({
              target: o,
              rect: mt(o)
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
    addAnimationState: function(l) {
      n.push(l);
    },
    removeAnimationState: function(l) {
      n.splice(tS(n, {
        target: l
      }), 1);
    },
    animateAll: function(l) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof l == "function" && l();
        return;
      }
      var c = !1, h = 0;
      n.forEach(function(m) {
        var g = 0, v = m.target, _ = v.fromRect, b = mt(v), y = v.prevFromRect, p = v.prevToRect, f = m.rect, S = gi(v, !0);
        S && (b.top -= S.f, b.left -= S.e), v.toRect = b, v.thisAnimationDuration && Zf(y, b) && !Zf(_, b) && // Make sure animatingRect is on line between toRect & fromRect
        (f.top - b.top) / (f.left - b.left) === (_.top - b.top) / (_.left - b.left) && (g = lS(f, y, p, o.options)), Zf(b, _) || (v.prevFromRect = _, v.prevToRect = b, g || (g = o.options.animation), o.animate(v, f, b, g)), g && (c = !0, h = Math.max(h, g), clearTimeout(v.animationResetTimer), v.animationResetTimer = setTimeout(function() {
          v.animationTime = 0, v.prevFromRect = null, v.fromRect = null, v.prevToRect = null, v.thisAnimationDuration = null;
        }, g), v.thisAnimationDuration = g);
      }), clearTimeout(r), c ? r = setTimeout(function() {
        typeof l == "function" && l();
      }, h) : typeof l == "function" && l(), n = [];
    },
    animate: function(l, o, c, h) {
      if (h) {
        xe(l, "transition", ""), xe(l, "transform", "");
        var m = gi(this.el), g = m && m.a, v = m && m.d, _ = (o.left - c.left) / (g || 1), b = (o.top - c.top) / (v || 1);
        l.animatingX = !!_, l.animatingY = !!b, xe(l, "transform", "translate3d(" + _ + "px," + b + "px,0)"), this.forRepaintDummy = iS(l), xe(l, "transition", "transform " + h + "ms" + (this.options.easing ? " " + this.options.easing : "")), xe(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          xe(l, "transition", ""), xe(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, h);
      }
    }
  };
}
function iS(n) {
  return n.offsetWidth;
}
function lS(n, r, i, l) {
  return Math.sqrt(Math.pow(r.top - n.top, 2) + Math.pow(r.left - n.left, 2)) / Math.sqrt(Math.pow(r.top - i.top, 2) + Math.pow(r.left - i.left, 2)) * l.animation;
}
var si = [], Gf = {
  initializeByDefault: !0
}, Yl = {
  mount: function(r) {
    for (var i in Gf)
      Gf.hasOwnProperty(i) && !(i in r) && (r[i] = Gf[i]);
    si.forEach(function(l) {
      if (l.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), si.push(r);
  },
  pluginEvent: function(r, i, l) {
    var o = this;
    this.eventCanceled = !1, l.cancel = function() {
      o.eventCanceled = !0;
    };
    var c = r + "Global";
    si.forEach(function(h) {
      i[h.pluginName] && (i[h.pluginName][c] && i[h.pluginName][c](qn({
        sortable: i
      }, l)), i.options[h.pluginName] && i[h.pluginName][r] && i[h.pluginName][r](qn({
        sortable: i
      }, l)));
    });
  },
  initializePlugins: function(r, i, l, o) {
    si.forEach(function(m) {
      var g = m.pluginName;
      if (!(!r.options[g] && !m.initializeByDefault)) {
        var v = new m(r, i, r.options);
        v.sortable = r, v.options = r.options, r[g] = v, fr(l, v.defaults);
      }
    });
    for (var c in r.options)
      if (r.options.hasOwnProperty(c)) {
        var h = this.modifyOption(r, c, r.options[c]);
        typeof h < "u" && (r.options[c] = h);
      }
  },
  getEventProperties: function(r, i) {
    var l = {};
    return si.forEach(function(o) {
      typeof o.eventProperties == "function" && fr(l, o.eventProperties.call(i[o.pluginName], r));
    }), l;
  },
  modifyOption: function(r, i, l) {
    var o;
    return si.forEach(function(c) {
      r[c.pluginName] && c.optionListeners && typeof c.optionListeners[i] == "function" && (o = c.optionListeners[i].call(r[c.pluginName], l));
    }), o;
  }
};
function sS(n) {
  var r = n.sortable, i = n.rootEl, l = n.name, o = n.targetEl, c = n.cloneEl, h = n.toEl, m = n.fromEl, g = n.oldIndex, v = n.newIndex, _ = n.oldDraggableIndex, b = n.newDraggableIndex, y = n.originalEvent, p = n.putSortable, f = n.extraEventProperties;
  if (r = r || i && i[Ft], !!r) {
    var S, x = r.options, D = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !hr && !Vl ? S = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(l, !0, !0)), S.to = h || i, S.from = m || i, S.item = o || i, S.clone = c, S.oldIndex = g, S.newIndex = v, S.oldDraggableIndex = _, S.newDraggableIndex = b, S.originalEvent = y, S.pullMode = p ? p.lastPutMode : void 0;
    var w = qn(qn({}, f), Yl.getEventProperties(l, r));
    for (var N in w)
      S[N] = w[N];
    i && i.dispatchEvent(S), x[D] && x[D].call(r, S);
  }
}
var oS = ["evt"], Zt = function(r, i) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = l.evt, c = Wb(l, oS);
  Yl.pluginEvent.bind(Ee)(r, i, qn({
    dragEl: oe,
    parentEl: ot,
    ghostEl: Te,
    rootEl: tt,
    nextEl: fa,
    lastDownEl: Ko,
    cloneEl: at,
    cloneHidden: Ir,
    dragStarted: Ml,
    putSortable: Nt,
    activeSortable: Ee.active,
    originalEvent: o,
    oldIndex: di,
    oldDraggableIndex: Bl,
    newIndex: ln,
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
  sS(qn({
    putSortable: Nt,
    cloneEl: at,
    targetEl: oe,
    rootEl: tt,
    oldIndex: di,
    oldDraggableIndex: Bl,
    newIndex: ln,
    newDraggableIndex: Pr
  }, n));
}
var oe, ot, Te, tt, fa, Ko, at, Ir, di, ln, Bl, Pr, po, Nt, hi = !1, lu = !1, su = [], ua, wn, Ff, Vf, fv, hv, Ml, oi, Ul, Pl = !1, mo = !1, Jo, jt, Yf = [], gh = !1, ou = [], vu = typeof document < "u", go = Rh, dv = Vl || hr ? "cssFloat" : "float", uS = vu && !r0 && !Rh && "draggable" in document.createElement("div"), f0 = (function() {
  if (vu) {
    if (hr)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
})(), h0 = function(r, i) {
  var l = xe(r), o = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), c = _i(r, 0, i), h = _i(r, 1, i), m = c && xe(c), g = h && xe(h), v = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + mt(c).width, _ = g && parseInt(g.marginLeft) + parseInt(g.marginRight) + mt(h).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && m.float && m.float !== "none") {
    var b = m.float === "left" ? "left" : "right";
    return h && (g.clear === "both" || g.clear === b) ? "vertical" : "horizontal";
  }
  return c && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || v >= o && l[dv] === "none" || h && l[dv] === "none" && v + _ > o) ? "vertical" : "horizontal";
}, cS = function(r, i, l) {
  var o = l ? r.left : r.top, c = l ? r.right : r.bottom, h = l ? r.width : r.height, m = l ? i.left : i.top, g = l ? i.right : i.bottom, v = l ? i.width : i.height;
  return o === m || c === g || o + h / 2 === m + v / 2;
}, fS = function(r, i) {
  var l;
  return su.some(function(o) {
    var c = o[Ft].options.emptyInsertThreshold;
    if (!(!c || jh(o))) {
      var h = mt(o), m = r >= h.left - c && r <= h.right + c, g = i >= h.top - c && i <= h.bottom + c;
      if (m && g)
        return l = o;
    }
  }), l;
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
  var l = {}, o = r.group;
  (!o || $o(o) != "object") && (o = {
    name: o
  }), l.name = o.name, l.checkPull = i(o.pull, !0), l.checkPut = i(o.put), l.revertClone = o.revertClone, r.group = l;
}, p0 = function() {
  !f0 && Te && xe(Te, "display", "none");
}, m0 = function() {
  !f0 && Te && xe(Te, "display", "");
};
vu && !r0 && document.addEventListener("click", function(n) {
  if (lu)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), lu = !1, !1;
}, !0);
var ca = function(r) {
  if (oe) {
    r = r.touches ? r.touches[0] : r;
    var i = fS(r.clientX, r.clientY);
    if (i) {
      var l = {};
      for (var o in r)
        r.hasOwnProperty(o) && (l[o] = r[o]);
      l.target = l.rootEl = i, l.preventDefault = void 0, l.stopPropagation = void 0, i[Ft]._onDragOver(l);
    }
  }
}, hS = function(r) {
  oe && oe.parentNode[Ft]._isOutsideThisEl(r.target);
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
    supportPointer: Ee.supportPointer !== !1 && "PointerEvent" in window && (!zl || Rh),
    emptyInsertThreshold: 5
  };
  Yl.initializePlugins(this, n, i);
  for (var l in i)
    !(l in r) && (r[l] = i[l]);
  d0(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : uS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Be(n, "pointerdown", this._onTapStart) : (Be(n, "mousedown", this._onTapStart), Be(n, "touchstart", this._onTapStart)), this.nativeDraggable && (Be(n, "dragover", this), Be(n, "dragenter", this)), su.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), fr(this, aS());
}
Ee.prototype = /** @lends Sortable.prototype */
{
  constructor: Ee,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (oi = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, oe) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, l = this.el, o = this.options, c = o.preventOnFilter, h = r.type, m = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, g = (m || r).target, v = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || g, _ = o.filter;
      if (bS(l), !oe && !(/mousedown|pointerdown/.test(h) && r.button !== 0 || o.disabled) && !v.isContentEditable && !(!this.nativeDraggable && zl && g && g.tagName.toUpperCase() === "SELECT") && (g = Dn(g, o.draggable, l, !1), !(g && g.animated) && Ko !== g)) {
        if (di = yn(g), Bl = yn(g, o.draggable), typeof _ == "function") {
          if (_.call(this, r, g, this)) {
            Bt({
              sortable: i,
              rootEl: v,
              name: "filter",
              targetEl: g,
              toEl: l,
              fromEl: l
            }), Zt("filter", i, {
              evt: r
            }), c && r.preventDefault();
            return;
          }
        } else if (_ && (_ = _.split(",").some(function(b) {
          if (b = Dn(v, b.trim(), l, !1), b)
            return Bt({
              sortable: i,
              rootEl: b,
              name: "filter",
              targetEl: g,
              fromEl: l,
              toEl: l
            }), Zt("filter", i, {
              evt: r
            }), !0;
        }), _)) {
          c && r.preventDefault();
          return;
        }
        o.handle && !Dn(v, o.handle, l, !1) || this._prepareDragStart(r, m, g);
      }
    }
  },
  _prepareDragStart: function(r, i, l) {
    var o = this, c = o.el, h = o.options, m = c.ownerDocument, g;
    if (l && !oe && l.parentNode === c) {
      var v = mt(l);
      if (tt = c, oe = l, ot = oe.parentNode, fa = oe.nextSibling, Ko = l, po = h.group, Ee.dragged = oe, ua = {
        target: oe,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, fv = ua.clientX - v.left, hv = ua.clientY - v.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, oe.style["will-change"] = "all", g = function() {
        if (Zt("delayEnded", o, {
          evt: r
        }), Ee.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !sv && o.nativeDraggable && (oe.draggable = !0), o._triggerDragStart(r, i), Bt({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), an(oe, h.chosenClass, !0);
      }, h.ignore.split(",").forEach(function(_) {
        l0(oe, _.trim(), Xf);
      }), Be(m, "dragover", ca), Be(m, "mousemove", ca), Be(m, "touchmove", ca), h.supportPointer ? (Be(m, "pointerup", o._onDrop), !this.nativeDraggable && Be(m, "pointercancel", o._onDrop)) : (Be(m, "mouseup", o._onDrop), Be(m, "touchend", o._onDrop), Be(m, "touchcancel", o._onDrop)), sv && this.nativeDraggable && (this.options.touchStartThreshold = 4, oe.draggable = !0), Zt("delayStart", this, {
        evt: r
      }), h.delay && (!h.delayOnTouchOnly || i) && (!this.nativeDraggable || !(Vl || hr))) {
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
    oe && Xf(oe), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Le(r, "mouseup", this._disableDelayedDrag), Le(r, "touchend", this._disableDelayedDrag), Le(r, "touchcancel", this._disableDelayedDrag), Le(r, "pointerup", this._disableDelayedDrag), Le(r, "pointercancel", this._disableDelayedDrag), Le(r, "mousemove", this._delayedDragTouchMoveHandler), Le(r, "touchmove", this._delayedDragTouchMoveHandler), Le(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Be(document, "pointermove", this._onTouchMove) : i ? Be(document, "touchmove", this._onTouchMove) : Be(document, "mousemove", this._onTouchMove) : (Be(oe, "dragend", this), Be(tt, "dragstart", this._onDragStart));
    try {
      document.selection ? Wo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (hi = !1, tt && oe) {
      Zt("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Be(document, "dragover", hS);
      var l = this.options;
      !r && an(oe, l.dragClass, !1), an(oe, l.ghostClass, !0), Ee.active = this, r && this._appendGhost(), Bt({
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
      if (oe.parentNode[Ft]._isOutsideThisEl(r), i)
        do {
          if (i[Ft]) {
            var l = void 0;
            if (l = i[Ft]._onDragOver({
              clientX: wn.clientX,
              clientY: wn.clientY,
              target: r,
              rootEl: i
            }), l && !this.options.dragoverBubble)
              break;
          }
          r = i;
        } while (i = i0(i));
      m0();
    }
  },
  _onTouchMove: function(r) {
    if (ua) {
      var i = this.options, l = i.fallbackTolerance, o = i.fallbackOffset, c = r.touches ? r.touches[0] : r, h = Te && gi(Te, !0), m = Te && h && h.a, g = Te && h && h.d, v = go && jt && cv(jt), _ = (c.clientX - ua.clientX + o.x) / (m || 1) + (v ? v[0] - Yf[0] : 0) / (m || 1), b = (c.clientY - ua.clientY + o.y) / (g || 1) + (v ? v[1] - Yf[1] : 0) / (g || 1);
      if (!Ee.active && !hi) {
        if (l && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < l)
          return;
        this._onDragStart(r, !0);
      }
      if (Te) {
        h ? (h.e += _ - (Ff || 0), h.f += b - (Vf || 0)) : h = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: _,
          f: b
        };
        var y = "matrix(".concat(h.a, ",").concat(h.b, ",").concat(h.c, ",").concat(h.d, ",").concat(h.e, ",").concat(h.f, ")");
        xe(Te, "webkitTransform", y), xe(Te, "mozTransform", y), xe(Te, "msTransform", y), xe(Te, "transform", y), Ff = _, Vf = b, wn = c;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Te) {
      var r = this.options.fallbackOnBody ? document.body : tt, i = mt(oe, !0, go, !0, r), l = this.options;
      if (go) {
        for (jt = r; xe(jt, "position") === "static" && xe(jt, "transform") === "none" && jt !== document; )
          jt = jt.parentNode;
        jt !== document.body && jt !== document.documentElement ? (jt === document && (jt = Hn()), i.top += jt.scrollTop, i.left += jt.scrollLeft) : jt = Hn(), Yf = cv(jt);
      }
      Te = oe.cloneNode(!0), an(Te, l.ghostClass, !1), an(Te, l.fallbackClass, !0), an(Te, l.dragClass, !0), xe(Te, "transition", ""), xe(Te, "transform", ""), xe(Te, "box-sizing", "border-box"), xe(Te, "margin", 0), xe(Te, "top", i.top), xe(Te, "left", i.left), xe(Te, "width", i.width), xe(Te, "height", i.height), xe(Te, "opacity", "0.8"), xe(Te, "position", go ? "absolute" : "fixed"), xe(Te, "zIndex", "100000"), xe(Te, "pointerEvents", "none"), Ee.ghost = Te, r.appendChild(Te), xe(Te, "transform-origin", fv / parseInt(Te.style.width) * 100 + "% " + hv / parseInt(Te.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var l = this, o = r.dataTransfer, c = l.options;
    if (Zt("dragStart", this, {
      evt: r
    }), Ee.eventCanceled) {
      this._onDrop();
      return;
    }
    Zt("setupClone", this), Ee.eventCanceled || (at = u0(oe), at.removeAttribute("id"), at.draggable = !1, at.style["will-change"] = "", this._hideClone(), an(at, this.options.chosenClass, !1), Ee.clone = at), l.cloneId = Wo(function() {
      Zt("clone", l), !Ee.eventCanceled && (l.options.removeCloneOnHide || tt.insertBefore(at, oe), l._hideClone(), Bt({
        sortable: l,
        name: "clone"
      }));
    }), !i && an(oe, c.dragClass, !0), i ? (lu = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (Le(document, "mouseup", l._onDrop), Le(document, "touchend", l._onDrop), Le(document, "touchcancel", l._onDrop), o && (o.effectAllowed = "move", c.setData && c.setData.call(l, o, oe)), Be(document, "drop", l), xe(oe, "transform", "translateZ(0)")), hi = !0, l._dragStartId = Wo(l._dragStarted.bind(l, i, r)), Be(document, "selectstart", l), Ml = !0, window.getSelection().removeAllRanges(), zl && xe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, l = r.target, o, c, h, m = this.options, g = m.group, v = Ee.active, _ = po === g, b = m.sort, y = Nt || v, p, f = this, S = !1;
    if (gh) return;
    function x(I, le) {
      Zt(I, f, qn({
        evt: r,
        isOwner: _,
        axis: p ? "vertical" : "horizontal",
        revert: h,
        dragRect: o,
        targetRect: c,
        canSort: b,
        fromSortable: y,
        target: l,
        completed: w,
        onMove: function(F, re) {
          return vo(tt, i, oe, o, F, mt(F), r, re);
        },
        changed: N
      }, le));
    }
    function D() {
      x("dragOverAnimationCapture"), f.captureAnimationState(), f !== y && y.captureAnimationState();
    }
    function w(I) {
      return x("dragOverCompleted", {
        insertion: I
      }), I && (_ ? v._hideClone() : v._showClone(f), f !== y && (an(oe, Nt ? Nt.options.ghostClass : v.options.ghostClass, !1), an(oe, m.ghostClass, !0)), Nt !== f && f !== Ee.active ? Nt = f : f === Ee.active && Nt && (Nt = null), y === f && (f._ignoreWhileAnimating = l), f.animateAll(function() {
        x("dragOverAnimationComplete"), f._ignoreWhileAnimating = null;
      }), f !== y && (y.animateAll(), y._ignoreWhileAnimating = null)), (l === oe && !oe.animated || l === i && !l.animated) && (oi = null), !m.dragoverBubble && !r.rootEl && l !== document && (oe.parentNode[Ft]._isOutsideThisEl(r.target), !I && ca(r)), !m.dragoverBubble && r.stopPropagation && r.stopPropagation(), S = !0;
    }
    function N() {
      ln = yn(oe), Pr = yn(oe, m.draggable), Bt({
        sortable: f,
        name: "change",
        toEl: i,
        newIndex: ln,
        newDraggableIndex: Pr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), l = Dn(l, m.draggable, i, !0), x("dragOver"), Ee.eventCanceled) return S;
    if (oe.contains(r.target) || l.animated && l.animatingX && l.animatingY || f._ignoreWhileAnimating === l)
      return w(!1);
    if (lu = !1, v && !m.disabled && (_ ? b || (h = ot !== tt) : Nt === this || (this.lastPutMode = po.checkPull(this, v, oe, r)) && g.checkPut(this, v, oe, r))) {
      if (p = this._getDirection(r, l) === "vertical", o = mt(oe), x("dragOverValid"), Ee.eventCanceled) return S;
      if (h)
        return ot = tt, D(), this._hideClone(), x("revert"), Ee.eventCanceled || (fa ? tt.insertBefore(oe, fa) : tt.appendChild(oe)), w(!0);
      var C = jh(i, m.draggable);
      if (!C || gS(r, p, this) && !C.animated) {
        if (C === oe)
          return w(!1);
        if (C && i === r.target && (l = C), l && (c = mt(l)), vo(tt, i, oe, o, l, c, r, !!l) !== !1)
          return D(), C && C.nextSibling ? i.insertBefore(oe, C.nextSibling) : i.appendChild(oe), ot = i, N(), w(!0);
      } else if (C && mS(r, p, this)) {
        var O = _i(i, 0, m, !0);
        if (O === oe)
          return w(!1);
        if (l = O, c = mt(l), vo(tt, i, oe, o, l, c, r, !1) !== !1)
          return D(), i.insertBefore(oe, O), ot = i, N(), w(!0);
      } else if (l.parentNode === i) {
        c = mt(l);
        var j = 0, R, Z = oe.parentNode !== i, W = !cS(oe.animated && oe.toRect || o, l.animated && l.toRect || c, p), $ = p ? "top" : "left", Q = uv(l, "top", "top") || uv(oe, "top", "top"), ee = Q ? Q.scrollTop : void 0;
        oi !== l && (R = c[$], Pl = !1, mo = !W && m.invertSwap || Z), j = vS(r, l, c, p, W ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, mo, oi === l);
        var fe;
        if (j !== 0) {
          var pe = yn(oe);
          do
            pe -= j, fe = ot.children[pe];
          while (fe && (xe(fe, "display") === "none" || fe === Te));
        }
        if (j === 0 || fe === l)
          return w(!1);
        oi = l, Ul = j;
        var ye = l.nextElementSibling, H = !1;
        H = j === 1;
        var ne = vo(tt, i, oe, o, l, c, r, H);
        if (ne !== !1)
          return (ne === 1 || ne === -1) && (H = ne === 1), gh = !0, setTimeout(pS, 30), D(), H && !ye ? i.appendChild(oe) : l.parentNode.insertBefore(oe, H ? ye : l), Q && o0(Q, 0, ee - Q.scrollTop), ot = oe.parentNode, R !== void 0 && !mo && (Jo = Math.abs(R - mt(l)[$])), N(), w(!0);
      }
      if (i.contains(oe))
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
    var i = this.el, l = this.options;
    if (ln = yn(oe), Pr = yn(oe, l.draggable), Zt("drop", this, {
      evt: r
    }), ot = oe && oe.parentNode, ln = yn(oe), Pr = yn(oe, l.draggable), Ee.eventCanceled) {
      this._nulling();
      return;
    }
    hi = !1, mo = !1, Pl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), vh(this.cloneId), vh(this._dragStartId), this.nativeDraggable && (Le(document, "drop", this), Le(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), zl && xe(document.body, "user-select", ""), xe(oe, "transform", ""), r && (Ml && (r.cancelable && r.preventDefault(), !l.dropBubble && r.stopPropagation()), Te && Te.parentNode && Te.parentNode.removeChild(Te), (tt === ot || Nt && Nt.lastPutMode !== "clone") && at && at.parentNode && at.parentNode.removeChild(at), oe && (this.nativeDraggable && Le(oe, "dragend", this), Xf(oe), oe.style["will-change"] = "", Ml && !hi && an(oe, Nt ? Nt.options.ghostClass : this.options.ghostClass, !1), an(oe, this.options.chosenClass, !1), Bt({
      sortable: this,
      name: "unchoose",
      toEl: ot,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), tt !== ot ? (ln >= 0 && (Bt({
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
    })), Nt && Nt.save()) : ln !== di && ln >= 0 && (Bt({
      sortable: this,
      name: "update",
      toEl: ot,
      originalEvent: r
    }), Bt({
      sortable: this,
      name: "sort",
      toEl: ot,
      originalEvent: r
    })), Ee.active && ((ln == null || ln === -1) && (ln = di, Pr = Bl), Bt({
      sortable: this,
      name: "end",
      toEl: ot,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Zt("nulling", this), tt = oe = ot = Te = fa = at = Ko = Ir = ua = wn = Ml = ln = Pr = di = Bl = oi = Ul = Nt = po = Ee.dragged = Ee.ghost = Ee.clone = Ee.active = null, ou.forEach(function(r) {
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
        oe && (this._onDragOver(r), dS(r));
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
    for (var r = [], i, l = this.el.children, o = 0, c = l.length, h = this.options; o < c; o++)
      i = l[o], Dn(i, h.draggable, this.el, !1) && r.push(i.getAttribute(h.dataIdAttr) || _S(i));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, i) {
    var l = {}, o = this.el;
    this.toArray().forEach(function(c, h) {
      var m = o.children[h];
      Dn(m, this.options.draggable, o, !1) && (l[c] = m);
    }, this), i && this.captureAnimationState(), r.forEach(function(c) {
      l[c] && (o.removeChild(l[c]), o.appendChild(l[c]));
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
    return Dn(r, i || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(r, i) {
    var l = this.options;
    if (i === void 0)
      return l[r];
    var o = Yl.modifyOption(this, r, i);
    typeof o < "u" ? l[r] = o : l[r] = i, r === "group" && d0(l);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Zt("destroy", this);
    var r = this.el;
    r[Ft] = null, Le(r, "mousedown", this._onTapStart), Le(r, "touchstart", this._onTapStart), Le(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Le(r, "dragover", this), Le(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), su.splice(su.indexOf(this.el), 1), this.el = r = null;
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
      oe.parentNode == tt && !this.options.group.revertClone ? tt.insertBefore(at, oe) : fa ? tt.insertBefore(at, fa) : tt.appendChild(at), this.options.group.revertClone && this.animate(oe, at), xe(at, "display", ""), Ir = !1;
    }
  }
};
function dS(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function vo(n, r, i, l, o, c, h, m) {
  var g, v = n[Ft], _ = v.options.onMove, b;
  return window.CustomEvent && !hr && !Vl ? g = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (g = document.createEvent("Event"), g.initEvent("move", !0, !0)), g.to = r, g.from = n, g.dragged = i, g.draggedRect = l, g.related = o || r, g.relatedRect = c || mt(r), g.willInsertAfter = m, g.originalEvent = h, n.dispatchEvent(g), _ && (b = _.call(v, g, h)), b;
}
function Xf(n) {
  n.draggable = !1;
}
function pS() {
  gh = !1;
}
function mS(n, r, i) {
  var l = mt(_i(i.el, 0, i.options, !0)), o = c0(i.el, i.options, Te), c = 10;
  return r ? n.clientX < o.left - c || n.clientY < l.top && n.clientX < l.right : n.clientY < o.top - c || n.clientY < l.bottom && n.clientX < l.left;
}
function gS(n, r, i) {
  var l = mt(jh(i.el, i.options.draggable)), o = c0(i.el, i.options, Te), c = 10;
  return r ? n.clientX > o.right + c || n.clientY > l.bottom && n.clientX > l.left : n.clientY > o.bottom + c || n.clientX > l.right && n.clientY > l.top;
}
function vS(n, r, i, l, o, c, h, m) {
  var g = l ? n.clientY : n.clientX, v = l ? i.height : i.width, _ = l ? i.top : i.left, b = l ? i.bottom : i.right, y = !1;
  if (!h) {
    if (m && Jo < v * o) {
      if (!Pl && (Ul === 1 ? g > _ + v * c / 2 : g < b - v * c / 2) && (Pl = !0), Pl)
        y = !0;
      else if (Ul === 1 ? g < _ + Jo : g > b - Jo)
        return -Ul;
    } else if (g > _ + v * (1 - o) / 2 && g < b - v * (1 - o) / 2)
      return yS(r);
  }
  return y = y || h, y && (g < _ + v * c / 2 || g > b - v * c / 2) ? g > _ + v / 2 ? 1 : -1 : 0;
}
function yS(n) {
  return yn(oe) < yn(n) ? 1 : -1;
}
function _S(n) {
  for (var r = n.tagName + n.className + n.src + n.href + n.textContent, i = r.length, l = 0; i--; )
    l += r.charCodeAt(i);
  return l.toString(36);
}
function bS(n) {
  ou.length = 0;
  for (var r = n.getElementsByTagName("input"), i = r.length; i--; ) {
    var l = r[i];
    l.checked && ou.push(l);
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
  find: l0,
  is: function(r, i) {
    return !!Dn(r, i, r, !1);
  },
  extend: nS,
  throttle: s0,
  closest: Dn,
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
  r[0].constructor === Array && (r = r[0]), r.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (Ee.utils = qn(qn({}, Ee.utils), l.utils)), Yl.mount(l);
  });
};
Ee.create = function(n, r) {
  return new Ee(n, r);
};
Ee.version = eS;
var dt = [], kl, yh, _h = !1, Qf, $f, uu, Rl;
function SS() {
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
      var l = i.originalEvent;
      this.sortable.nativeDraggable ? Be(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Be(document, "pointermove", this._handleFallbackAutoScroll) : l.touches ? Be(document, "touchmove", this._handleFallbackAutoScroll) : Be(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var l = i.originalEvent;
      !this.options.dragOverBubble && !l.rootEl && this._handleAutoScroll(l);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Le(document, "dragover", this._handleAutoScroll) : (Le(document, "pointermove", this._handleFallbackAutoScroll), Le(document, "touchmove", this._handleFallbackAutoScroll), Le(document, "mousemove", this._handleFallbackAutoScroll)), pv(), eu(), rS();
    },
    nulling: function() {
      uu = yh = kl = _h = Rl = Qf = $f = null, dt.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, l) {
      var o = this, c = (i.touches ? i.touches[0] : i).clientX, h = (i.touches ? i.touches[0] : i).clientY, m = document.elementFromPoint(c, h);
      if (uu = i, l || this.options.forceAutoScrollFallback || Vl || hr || zl) {
        Kf(i, this.options, m, l);
        var g = Hr(m, !0);
        _h && (!Rl || c !== Qf || h !== $f) && (Rl && pv(), Rl = setInterval(function() {
          var v = Hr(document.elementFromPoint(c, h), !0);
          v !== g && (g = v, eu()), Kf(i, o.options, v, l);
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
  dt.forEach(function(n) {
    clearInterval(n.pid);
  }), dt = [];
}
function pv() {
  clearInterval(Rl);
}
var Kf = s0(function(n, r, i, l) {
  if (r.scroll) {
    var o = (n.touches ? n.touches[0] : n).clientX, c = (n.touches ? n.touches[0] : n).clientY, h = r.scrollSensitivity, m = r.scrollSpeed, g = Hn(), v = !1, _;
    yh !== i && (yh = i, eu(), kl = r.scroll, _ = r.scrollFn, kl === !0 && (kl = Hr(i, !0)));
    var b = 0, y = kl;
    do {
      var p = y, f = mt(p), S = f.top, x = f.bottom, D = f.left, w = f.right, N = f.width, C = f.height, O = void 0, j = void 0, R = p.scrollWidth, Z = p.scrollHeight, W = xe(p), $ = p.scrollLeft, Q = p.scrollTop;
      p === g ? (O = N < R && (W.overflowX === "auto" || W.overflowX === "scroll" || W.overflowX === "visible"), j = C < Z && (W.overflowY === "auto" || W.overflowY === "scroll" || W.overflowY === "visible")) : (O = N < R && (W.overflowX === "auto" || W.overflowX === "scroll"), j = C < Z && (W.overflowY === "auto" || W.overflowY === "scroll"));
      var ee = O && (Math.abs(w - o) <= h && $ + N < R) - (Math.abs(D - o) <= h && !!$), fe = j && (Math.abs(x - c) <= h && Q + C < Z) - (Math.abs(S - c) <= h && !!Q);
      if (!dt[b])
        for (var pe = 0; pe <= b; pe++)
          dt[pe] || (dt[pe] = {});
      (dt[b].vx != ee || dt[b].vy != fe || dt[b].el !== p) && (dt[b].el = p, dt[b].vx = ee, dt[b].vy = fe, clearInterval(dt[b].pid), (ee != 0 || fe != 0) && (v = !0, dt[b].pid = setInterval((function() {
        l && this.layer === 0 && Ee.active._onTouchMove(uu);
        var ye = dt[this.layer].vy ? dt[this.layer].vy * m : 0, H = dt[this.layer].vx ? dt[this.layer].vx * m : 0;
        typeof _ == "function" && _.call(Ee.dragged.parentNode[Ft], H, ye, n, uu, dt[this.layer].el) !== "continue" || o0(dt[this.layer].el, H, ye);
      }).bind({
        layer: b
      }), 24))), b++;
    } while (r.bubbleScroll && y !== g && (y = Hr(y, !1)));
    _h = v;
  }
}, 30), g0 = function(r) {
  var i = r.originalEvent, l = r.putSortable, o = r.dragEl, c = r.activeSortable, h = r.dispatchSortableEvent, m = r.hideGhostForTarget, g = r.unhideGhostForTarget;
  if (i) {
    var v = l || c;
    m();
    var _ = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, b = document.elementFromPoint(_.clientX, _.clientY);
    g(), v && !v.el.contains(b) && (h("spill"), this.onSpill({
      dragEl: o,
      putSortable: l
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
    var i = r.dragEl, l = r.putSortable;
    this.sortable.captureAnimationState(), l && l.captureAnimationState();
    var o = _i(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(i, o) : this.sortable.el.appendChild(i), this.sortable.animateAll(), l && l.animateAll();
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
    var i = r.dragEl, l = r.putSortable, o = l || this.sortable;
    o.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), o.animateAll();
  },
  drop: g0
};
fr(Lh, {
  pluginName: "removeOnSpill"
});
Ee.mount(new SS());
Ee.mount(Lh, zh);
async function xS({
  entry: n,
  selectedWorldName: r,
  skipSave: i = !1,
  skipReload: l = !1,
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
    if (v = $b(r, h), !v)
      throw new Error("Failed to create entry");
    if (g) {
      const b = v.uid;
      Object.assign(v, g), v.uid = b;
    }
  }
  return v.key = n.key, v.content = n.content, v.comment = n.comment, i || await c.saveWorldInfo(r, h), l || c.reloadWorldInfoEditor(r, !0), {
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
  {{else}}*Not provided*{{/if}}`, Il = `{{#is_not_empty fields}}
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
{{/is_not_empty}}`, ES = `## User's Persona Description
name: {{user}}
{{persona}}`, Bh = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, CS = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", wS = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, AS = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
function DS(n) {
  let r = null;
  for (const i of n.matchAll(AS))
    r = i[1].trim();
  return r;
}
function _0(n) {
  const r = n.match(/^```(?:\w+\n|\n)?([\s\S]*?)```$/);
  return r && !r[1].includes("```") ? r[1].trim() : n;
}
const TS = /^\s*<(think|thinking|reasoning)>[\s\S]*?(?:<\/\1>|$)/i;
function Xl(n) {
  return n.replace(TS, "");
}
function mv(n, r = 120) {
  const i = n.trim().replace(/\s+/g, " ");
  return `It starts with: "${i.slice(0, r)}"${i.length > r ? "…" : ""}`;
}
function OS(n) {
  const r = [];
  let i = 0;
  for (; i < n.length; ) {
    let l = 0, o = -1, c = !1, h = !1;
    for (let m = i; m < n.length; m++) {
      const g = n[m];
      l === 0 ? g === "{" && (o = m, l = 1) : c ? h ? h = !1 : g === "\\" ? h = !0 : g === '"' && (c = !1) : g === '"' ? c = !0 : g === "{" ? l++ : g === "}" && --l === 0 && r.push(n.slice(o, m + 1));
    }
    if (l === 0)
      break;
    i = o + 1;
  }
  return r;
}
function NS(n) {
  const r = Xl(n).trim(), i = DS(r);
  let l;
  for (const c of i === null ? [r] : [r, i])
    try {
      return JSON.parse(c);
    } catch (h) {
      l = h;
    }
  const o = OS(r);
  for (let c = o.length - 1; c >= 0; c--)
    try {
      return JSON.parse(o[c]);
    } catch {
    }
  throw l;
}
function b0(n) {
  return _0(Xl(n).trim());
}
function MS(n, r) {
  const i = r[0];
  return i === "“" || i === "«" ? !0 : (i === '"' || i === "*") && n.split(i).length % 2 === 1;
}
function kS(n, r) {
  return /[.!?…]["'”’»)\]*]*$/.test(n) && (new RegExp("^\\p{L}", "u").test(r) || MS(n, r)) ? `${n} ${r}` : n + r;
}
function RS(n, r) {
  const i = n.trim();
  r = Xl(r);
  const l = b0(r);
  if (l.startsWith(i))
    return l;
  const o = _0((i + r).trim());
  return o.startsWith(i) ? kS(i, o.slice(i.length)) : i + o;
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
  function l(f) {
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
    for (var x = 0, D = f.length; x < D; x++)
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
    return i.test(f) ? f.replace(r, l) : f;
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
    function l(o, c) {
      var h = c && c.loc, m = void 0, g = void 0, v = void 0, _ = void 0;
      h && (m = h.start.line, g = h.end.line, v = h.start.column, _ = h.end.column, o += " - " + m + ":" + v);
      for (var b = Error.prototype.constructor.call(this, o), y = 0; y < i.length; y++)
        this[i[y]] = b[i[y]];
      Error.captureStackTrace && Error.captureStackTrace(this, l);
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
    l.prototype = new Error(), r.default = l, n.exports = r.default;
  })(bo, bo.exports)), bo.exports;
}
var El = {}, So = { exports: {} }, yv;
function jS() {
  return yv || (yv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = Vt();
    r.default = function(l) {
      l.registerHelper("blockHelperMissing", function(o, c) {
        var h = c.inverse, m = c.fn;
        if (o === !0)
          return m(this);
        if (o === !1 || o == null)
          return h(this);
        if (i.isArray(o))
          return o.length > 0 ? (c.ids && (c.ids = [c.name]), l.helpers.each(o, c)) : h(this);
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
function zS() {
  return _v || (_v = 1, (function(n, r) {
    r.__esModule = !0;
    function i(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var l = Vt(), o = Nn(), c = i(o);
    r.default = function(h) {
      h.registerHelper("each", function(m, g) {
        if (!g)
          throw new c.default("Must pass iterator to #each");
        var v = g.fn, _ = g.inverse, b = 0, y = "", p = void 0, f = void 0;
        g.data && g.ids && (f = l.appendContextPath(g.data.contextPath, g.ids[0]) + "."), l.isFunction(m) && (m = m.call(this)), g.data && (p = l.createFrame(g.data));
        function S(C, O, j) {
          p && (p.key = C, p.index = O, p.first = O === 0, p.last = !!j, f && (p.contextPath = f + C)), y = y + v(m[C], {
            data: p,
            blockParams: l.blockParams([m[C], C], [f + C, null])
          });
        }
        if (m && typeof m == "object")
          if (l.isArray(m))
            for (var x = m.length; b < x; b++)
              b in m && S(b, b, b === m.length - 1);
          else if (typeof Symbol == "function" && m[Symbol.iterator]) {
            for (var D = [], w = m[Symbol.iterator](), N = w.next(); !N.done; N = w.next())
              D.push(N.value);
            m = D;
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
function LS() {
  return bv || (bv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(c) {
      return c && c.__esModule ? c : { default: c };
    }
    var l = Nn(), o = i(l);
    r.default = function(c) {
      c.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, n.exports = r.default;
  })(Eo, Eo.exports)), Eo.exports;
}
var Co = { exports: {} }, Sv;
function BS() {
  return Sv || (Sv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var l = Vt(), o = Nn(), c = i(o);
    r.default = function(h) {
      h.registerHelper("if", function(m, g) {
        if (arguments.length != 2)
          throw new c.default("#if requires exactly one argument");
        return l.isFunction(m) && (m = m.call(this)), !g.hash.includeZero && !m || l.isEmpty(m) ? g.inverse(this) : g.fn(this);
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
function US() {
  return xv || (xv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("log", function() {
        for (var l = [void 0], o = arguments[arguments.length - 1], c = 0; c < arguments.length - 1; c++)
          l.push(arguments[c]);
        var h = 1;
        o.hash.level != null ? h = o.hash.level : o.data && o.data.level != null && (h = o.data.level), l[0] = h, i.log.apply(i, l);
      });
    }, n.exports = r.default;
  })(wo, wo.exports)), wo.exports;
}
var Ao = { exports: {} }, Ev;
function PS() {
  return Ev || (Ev = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(l, o, c) {
        return l && c.lookupProperty(l, o);
      });
    }, n.exports = r.default;
  })(Ao, Ao.exports)), Ao.exports;
}
var Do = { exports: {} }, Cv;
function IS() {
  return Cv || (Cv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var l = Vt(), o = Nn(), c = i(o);
    r.default = function(h) {
      h.registerHelper("with", function(m, g) {
        if (arguments.length != 2)
          throw new c.default("#with requires exactly one argument");
        l.isFunction(m) && (m = m.call(this));
        var v = g.fn;
        if (l.isEmpty(m))
          return g.inverse(this);
        var _ = g.data;
        return g.data && g.ids && (_ = l.createFrame(g.data), _.contextPath = l.appendContextPath(g.data.contextPath, g.ids[0])), v(m, {
          data: _,
          blockParams: l.blockParams([m], [_ && _.contextPath])
        });
      });
    }, n.exports = r.default;
  })(Do, Do.exports)), Do.exports;
}
var wv;
function S0() {
  if (wv) return El;
  wv = 1, El.__esModule = !0, El.registerDefaultHelpers = S, El.moveHelperToHooks = x;
  function n(D) {
    return D && D.__esModule ? D : { default: D };
  }
  var r = jS(), i = n(r), l = zS(), o = n(l), c = LS(), h = n(c), m = BS(), g = n(m), v = US(), _ = n(v), b = PS(), y = n(b), p = IS(), f = n(p);
  function S(D) {
    i.default(D), o.default(D), h.default(D), g.default(D), _.default(D), y.default(D), f.default(D);
  }
  function x(D, w, N) {
    D.helpers[w] && (D.hooks[w] = D.helpers[w], N || delete D.helpers[w]);
  }
  return El;
}
var To = {}, Oo = { exports: {} }, Av;
function HS() {
  return Av || (Av = 1, (function(n, r) {
    r.__esModule = !0;
    var i = Vt();
    r.default = function(l) {
      l.registerDecorator("inline", function(o, c, h, m) {
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
var Dv;
function qS() {
  if (Dv) return To;
  Dv = 1, To.__esModule = !0, To.registerDefaultDecorators = l;
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = HS(), i = n(r);
  function l(o) {
    i.default(o);
  }
  return To;
}
var No = { exports: {} }, Tv;
function x0() {
  return Tv || (Tv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = Vt(), l = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(c) {
        if (typeof c == "string") {
          var h = i.indexOf(l.methodMap, c.toLowerCase());
          h >= 0 ? c = h : c = parseInt(c, 10);
        }
        return c;
      },
      // Can be overridden in the host environment
      log: function(c) {
        if (c = l.lookupLevel(c), typeof console < "u" && l.lookupLevel(l.level) <= c) {
          var h = l.methodMap[c];
          console[h] || (h = "log");
          for (var m = arguments.length, g = Array(m > 1 ? m - 1 : 0), v = 1; v < m; v++)
            g[v - 1] = arguments[v];
          console[h].apply(console, g);
        }
      }
    };
    r.default = l, n.exports = r.default;
  })(No, No.exports)), No.exports;
}
var ui = {}, Mo = {}, Ov;
function ZS() {
  if (Ov) return Mo;
  Ov = 1, Mo.__esModule = !0, Mo.createNewLookupObject = r;
  var n = Vt();
  function r() {
    for (var i = arguments.length, l = Array(i), o = 0; o < i; o++)
      l[o] = arguments[o];
    return n.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(l));
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
  var r = ZS(), i = x0(), l = n(i), o = /* @__PURE__ */ Object.create(null);
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
    o[_] !== !0 && (o[_] = !0, l.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + _ + `" because it is not an "own property" of its parent.
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
  var r = Vt(), i = Nn(), l = n(i), o = S0(), c = qS(), h = x0(), m = n(h), g = E0(), v = "4.7.8";
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
  function f(x, D, w) {
    this.helpers = x || {}, this.partials = D || {}, this.decorators = w || {}, o.registerDefaultHelpers(this), c.registerDefaultDecorators(this);
  }
  f.prototype = {
    constructor: f,
    logger: m.default,
    log: m.default.log,
    registerHelper: function(D, w) {
      if (r.toString.call(D) === p) {
        if (w)
          throw new l.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, D);
      } else
        this.helpers[D] = w;
    },
    unregisterHelper: function(D) {
      delete this.helpers[D];
    },
    registerPartial: function(D, w) {
      if (r.toString.call(D) === p)
        r.extend(this.partials, D);
      else {
        if (typeof w > "u")
          throw new l.default('Attempting to register a partial called "' + D + '" as undefined');
        this.partials[D] = w;
      }
    },
    unregisterPartial: function(D) {
      delete this.partials[D];
    },
    registerDecorator: function(D, w) {
      if (r.toString.call(D) === p) {
        if (w)
          throw new l.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, D);
      } else
        this.decorators[D] = w;
    },
    unregisterDecorator: function(D) {
      delete this.decorators[D];
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
function GS() {
  return kv || (kv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(l) {
      this.string = l;
    }
    i.prototype.toString = i.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = i, n.exports = r.default;
  })(ko, ko.exports)), ko.exports;
}
var ar = {}, Ro = {}, Rv;
function FS() {
  if (Rv) return Ro;
  Rv = 1, Ro.__esModule = !0, Ro.wrapHelper = n;
  function n(r, i) {
    if (typeof r != "function")
      return r;
    var l = function() {
      var c = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = i(c), r.apply(this, arguments);
    };
    return l;
  }
  return Ro;
}
var jv;
function VS() {
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
      for (var j in C)
        Object.prototype.hasOwnProperty.call(C, j) && (O[j] = C[j]);
    return O.default = C, O;
  }
  var i = Vt(), l = r(i), o = Nn(), c = n(o), h = Uh(), m = S0(), g = FS(), v = E0();
  function _(C) {
    var O = C && C[0] || 1, j = h.COMPILER_REVISION;
    if (!(O >= h.LAST_COMPATIBLE_COMPILER_REVISION && O <= h.COMPILER_REVISION))
      if (O < h.LAST_COMPATIBLE_COMPILER_REVISION) {
        var R = h.REVISION_CHANGES[j], Z = h.REVISION_CHANGES[O];
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
    var j = C.compiler && C.compiler[0] === 7;
    function R($, Q, ee) {
      ee.hash && (Q = l.extend({}, Q, ee.hash), ee.ids && (ee.ids[0] = !0)), $ = O.VM.resolvePartial.call(this, $, Q, ee);
      var fe = l.extend({}, ee, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), pe = O.VM.invokePartial.call(this, $, Q, fe);
      if (pe == null && O.compile && (ee.partials[ee.name] = O.compile($, C.compilerOptions, O), pe = ee.partials[ee.name](Q, fe)), pe != null) {
        if (ee.indent) {
          for (var ye = pe.split(`
`), H = 0, ne = ye.length; H < ne && !(!ye[H] && H + 1 === ne); H++)
            ye[H] = ee.indent + ye[H];
          pe = ye.join(`
`);
        }
        return pe;
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
        for (var fe = Q.length, pe = 0; pe < fe; pe++) {
          var ye = Q[pe] && Z.lookupProperty(Q[pe], ee);
          if (ye != null)
            return Q[pe][ee];
        }
      },
      lambda: function(Q, ee) {
        return typeof Q == "function" ? Q.call(ee) : Q;
      },
      escapeExpression: l.escapeExpression,
      invokePartial: R,
      fn: function(Q) {
        var ee = C[Q];
        return ee.decorator = C[Q + "_d"], ee;
      },
      programs: [],
      program: function(Q, ee, fe, pe, ye) {
        var H = this.programs[Q], ne = this.fn(Q);
        return ee || ye || pe || fe ? H = y(this, Q, ne, ee, fe, pe, ye) : H || (H = this.programs[Q] = y(this, Q, ne)), H;
      },
      data: function(Q, ee) {
        for (; Q && ee--; )
          Q = Q._parent;
        return Q;
      },
      mergeIfNeeded: function(Q, ee) {
        var fe = Q || ee;
        return Q && ee && Q !== ee && (fe = l.extend({}, ee, Q)), fe;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: O.VM.noop,
      compilerInfo: C.compiler
    };
    function W($) {
      var Q = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], ee = Q.data;
      W._setup(Q), !Q.partial && C.useData && (ee = x($, ee));
      var fe = void 0, pe = C.useBlockParams ? [] : void 0;
      C.useDepths && (Q.depths ? fe = $ != Q.depths[0] ? [$].concat(Q.depths) : Q.depths : fe = [$]);
      function ye(H) {
        return "" + C.main(Z, H, Z.helpers, Z.partials, ee, pe, fe);
      }
      return ye = D(C.main, ye, Z, Q.depths || [], ee, pe), ye($, Q);
    }
    return W.isTop = !0, W._setup = function($) {
      if ($.partial)
        Z.protoAccessControl = $.protoAccessControl, Z.helpers = $.helpers, Z.partials = $.partials, Z.decorators = $.decorators, Z.hooks = $.hooks;
      else {
        var Q = l.extend({}, O.helpers, $.helpers);
        w(Q, Z), Z.helpers = Q, C.usePartial && (Z.partials = Z.mergeIfNeeded($.partials, O.partials)), (C.usePartial || C.useDecorators) && (Z.decorators = l.extend({}, O.decorators, $.decorators)), Z.hooks = {}, Z.protoAccessControl = v.createProtoAccessControl($);
        var ee = $.allowCallsToHelperMissing || j;
        m.moveHelperToHooks(Z, "helperMissing", ee), m.moveHelperToHooks(Z, "blockHelperMissing", ee);
      }
    }, W._child = function($, Q, ee, fe) {
      if (C.useBlockParams && !ee)
        throw new c.default("must pass block params");
      if (C.useDepths && !fe)
        throw new c.default("must pass parent depths");
      return y(Z, $, C[$], Q, 0, ee, fe);
    }, W;
  }
  function y(C, O, j, R, Z, W, $) {
    function Q(ee) {
      var fe = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], pe = $;
      return $ && ee != $[0] && !(ee === C.nullContext && $[0] === null) && (pe = [ee].concat($)), j(C, ee, C.helpers, C.partials, fe.data || R, W && [fe.blockParams].concat(W), pe);
    }
    return Q = D(j, Q, C, $, R, W), Q.program = O, Q.depth = $ ? $.length : 0, Q.blockParams = Z || 0, Q;
  }
  function p(C, O, j) {
    return C ? !C.call && !j.name && (j.name = C, C = j.partials[C]) : j.name === "@partial-block" ? C = j.data["partial-block"] : C = j.partials[j.name], C;
  }
  function f(C, O, j) {
    var R = j.data && j.data["partial-block"];
    j.partial = !0, j.ids && (j.data.contextPath = j.ids[0] || j.data.contextPath);
    var Z = void 0;
    if (j.fn && j.fn !== S && (function() {
      j.data = h.createFrame(j.data);
      var W = j.fn;
      Z = j.data["partial-block"] = function(Q) {
        var ee = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return ee.data = h.createFrame(ee.data), ee.data["partial-block"] = R, W(Q, ee);
      }, W.partials && (j.partials = l.extend({}, j.partials, W.partials));
    })(), C === void 0 && Z && (C = Z), C === void 0)
      throw new c.default("The partial " + j.name + " could not be found");
    if (C instanceof Function)
      return C(O, j);
  }
  function S() {
    return "";
  }
  function x(C, O) {
    return (!O || !("root" in O)) && (O = O ? h.createFrame(O) : {}, O.root = C), O;
  }
  function D(C, O, j, R, Z, W) {
    if (C.decorator) {
      var $ = {};
      O = C.decorator(O, $, j, R && R[0], Z, W, R), l.extend(O, $);
    }
    return O;
  }
  function w(C, O) {
    Object.keys(C).forEach(function(j) {
      var R = C[j];
      C[j] = N(R, O);
    });
  }
  function N(C, O) {
    var j = O.lookupProperty;
    return g.wrapHelper(C, function(R) {
      return l.extend({ lookupProperty: j }, R);
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
      var l = globalThis.Handlebars;
      i.noConflict = function() {
        return globalThis.Handlebars === i && (globalThis.Handlebars = l), i;
      };
    }, n.exports = r.default;
  })(jo, jo.exports)), jo.exports;
}
var Lv;
function YS() {
  return Lv || (Lv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    function l(w) {
      if (w && w.__esModule)
        return w;
      var N = {};
      if (w != null)
        for (var C in w)
          Object.prototype.hasOwnProperty.call(w, C) && (N[C] = w[C]);
      return N.default = w, N;
    }
    var o = Uh(), c = l(o), h = GS(), m = i(h), g = Nn(), v = i(g), _ = Vt(), b = l(_), y = VS(), p = l(y), f = C0(), S = i(f);
    function x() {
      var w = new c.HandlebarsEnvironment();
      return b.extend(w, c), w.SafeString = m.default, w.Exception = v.default, w.Utils = b, w.escapeExpression = b.escapeExpression, w.VM = p, w.template = function(N) {
        return p.template(N, w);
      }, w;
    }
    var D = x();
    D.create = x, S.default(D), D.default = D, r.default = D, n.exports = r.default;
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
function XS() {
  return Uv || (Uv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = (function() {
      var l = {
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
          var D = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function w() {
            var fe;
            return fe = g.lexer.lex() || 1, typeof fe != "number" && (fe = g.symbols_[fe] || fe), fe;
          }
          for (var N, C, O, j, R = {}, Z, W, $, Q; ; ) {
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
                if (W = this.productions_[O[1]][1], R.$ = _[_.length - W], R._$ = { first_line: b[b.length - (W || 1)].first_line, last_line: b[b.length - 1].last_line, first_column: b[b.length - (W || 1)].first_column, last_column: b[b.length - 1].last_column }, D && (R._$.range = [b[b.length - (W || 1)].range[0], b[b.length - 1].range[1]]), j = this.performAction.call(R, p, S, f, this.yy, O[1], _, b), typeof j < "u")
                  return j;
                W && (v = v.slice(0, -1 * W * 2), _ = _.slice(0, -1 * W), b = b.slice(0, -1 * W)), v.push(this.productions_[O[1]][0]), _.push(R.$), b.push(R._$), $ = y[v[v.length - 2]][v[v.length - 1]], v.push($);
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
      l.lexer = o;
      function c() {
        this.yy = {};
      }
      return c.prototype = l, l.Parser = c, new c();
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
    var l = Nn(), o = i(l);
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
function QS() {
  return Iv || (Iv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }
    var l = A0(), o = i(l);
    function c() {
      var _ = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = _;
    }
    c.prototype = new o.default(), c.prototype.Program = function(_) {
      var b = !this.options.ignoreStandalone, y = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var p = _.body, f = 0, S = p.length; f < S; f++) {
        var x = p[f], D = this.accept(x);
        if (D) {
          var w = h(p, f, y), N = m(p, f, y), C = D.openStandalone && w, O = D.closeStandalone && N, j = D.inlineStandalone && w && N;
          D.close && g(p, f, !0), D.open && v(p, f, !0), b && j && (g(p, f), v(p, f) && x.type === "PartialStatement" && (x.indent = /([ \t]+$)/.exec(p[f - 1].original)[1])), b && C && (g((x.program || x.inverse).body), v(p, f)), b && O && (g(p, f), v((x.inverse || x.program).body));
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
function $S() {
  if (Hv) return rn;
  Hv = 1, rn.__esModule = !0, rn.SourceLocation = o, rn.id = c, rn.stripFlags = h, rn.stripComment = m, rn.preparePath = g, rn.prepareMustache = v, rn.prepareRawBlock = _, rn.prepareBlock = b, rn.prepareProgram = y, rn.preparePartialBlock = p;
  function n(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var r = Nn(), i = n(r);
  function l(f, S) {
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
    for (var D = f ? "@" : "", w = [], N = 0, C = 0, O = S.length; C < O; C++) {
      var j = S[C].part, R = S[C].original !== j;
      if (D += (S[C].separator || "") + j, !R && (j === ".." || j === "." || j === "this")) {
        if (w.length > 0)
          throw new i.default("Invalid path: " + D, { loc: x });
        j === ".." && N++;
      } else
        w.push(j);
    }
    return {
      type: "PathExpression",
      data: f,
      depth: N,
      parts: w,
      original: D,
      loc: x
    };
  }
  function v(f, S, x, D, w, N) {
    var C = D.charAt(3) || D.charAt(2), O = C !== "{" && C !== "&", j = /\*/.test(D);
    return {
      type: j ? "Decorator" : "MustacheStatement",
      path: f,
      params: S,
      hash: x,
      escaped: O,
      strip: w,
      loc: this.locInfo(N)
    };
  }
  function _(f, S, x, D) {
    l(f, x), D = this.locInfo(D);
    var w = {
      type: "Program",
      body: S,
      strip: {},
      loc: D
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
      loc: D
    };
  }
  function b(f, S, x, D, w, N) {
    D && D.path && l(f, D);
    var C = /\*/.test(f.open);
    S.blockParams = f.blockParams;
    var O = void 0, j = void 0;
    if (x) {
      if (C)
        throw new i.default("Unexpected inverse block on decorator", x);
      x.chain && (x.program.body[0].closeStrip = D.strip), j = x.strip, O = x.program;
    }
    return w && (w = O, O = S, S = w), {
      type: C ? "DecoratorBlock" : "BlockStatement",
      path: f.path,
      params: f.params,
      hash: f.hash,
      program: S,
      inverse: O,
      openStrip: f.strip,
      inverseStrip: j,
      closeStrip: D && D.strip,
      loc: this.locInfo(N)
    };
  }
  function y(f, S) {
    if (!S && f.length) {
      var x = f[0].loc, D = f[f.length - 1].loc;
      x && D && (S = {
        source: x.source,
        start: {
          line: x.start.line,
          column: x.start.column
        },
        end: {
          line: D.end.line,
          column: D.end.column
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
  function p(f, S, x, D) {
    return l(f, x), {
      type: "PartialBlockStatement",
      name: f.path,
      params: f.params,
      hash: f.hash,
      program: S,
      openStrip: f.strip,
      closeStrip: x && x.strip,
      loc: this.locInfo(D)
    };
  }
  return rn;
}
var qv;
function KS() {
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
  var i = XS(), l = r(i), o = QS(), c = r(o), h = $S(), m = n(h), g = Vt();
  ci.parser = l.default;
  var v = {};
  g.extend(v, m);
  function _(y, p) {
    if (y.type === "Program")
      return y;
    l.default.yy = v, v.locInfo = function(S) {
      return new v.SourceLocation(p && p.srcName, S);
    };
    var f = l.default.parse(y);
    return f;
  }
  function b(y, p) {
    var f = _(y, p), S = new c.default(p);
    return S.accept(f);
  }
  return ci;
}
var fi = {}, Zv;
function JS() {
  if (Zv) return fi;
  Zv = 1, fi.__esModule = !0, fi.Compiler = m, fi.precompile = g, fi.compile = v;
  function n(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = Nn(), i = n(r), l = Vt(), o = w0(), c = n(o), h = [].slice;
  function m() {
  }
  m.prototype = {
    compiler: m,
    equals: function(p) {
      var f = this.opcodes.length;
      if (p.opcodes.length !== f)
        return !1;
      for (var S = 0; S < f; S++) {
        var x = this.opcodes[S], D = p.opcodes[S];
        if (x.opcode !== D.opcode || !_(x.args, D.args))
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
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = f, this.stringParams = f.stringParams, this.trackIds = f.trackIds, f.blockParams = f.blockParams || [], f.knownHelpers = l.extend(/* @__PURE__ */ Object.create(null), {
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
      var x = p.name.original, D = p.name.type === "SubExpression";
      D && this.accept(p.name), this.setupFullMustacheParams(p, f, void 0, !0);
      var w = p.indent || "";
      this.options.preventIndent && w && (this.opcode("appendContent", w), w = ""), this.opcode("invokePartial", D, x, w), this.opcode("append");
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
      var x = p.path, D = x.parts[0], w = f != null || S != null;
      this.opcode("getContext", x.depth), this.opcode("pushProgram", f), this.opcode("pushProgram", S), x.strict = !0, this.accept(x), this.opcode("invokeAmbiguous", D, w);
    },
    simpleSexpr: function(p) {
      var f = p.path;
      f.strict = !0, this.accept(f), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(p, f, S) {
      var x = this.setupFullMustacheParams(p, f, S), D = p.path, w = D.parts[0];
      if (this.options.knownHelpers[w])
        this.opcode("invokeKnownHelper", x.length, w);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + w, p);
        D.strict = !0, D.falsy = !0, this.accept(D), this.opcode("invokeHelper", x.length, D.original, c.default.helpers.simpleId(D));
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
      var f = c.default.helpers.simpleId(p.path), S = f && !!this.blockParamIndex(p.path.parts[0]), x = !S && c.default.helpers.helperExpression(p), D = !S && (x || f);
      if (D && !x) {
        var w = p.path.parts[0], N = this.options;
        N.knownHelpers[w] ? x = !0 : N.knownHelpersOnly && (D = !1);
      }
      return x ? "helper" : D ? "ambiguous" : "simple";
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
      var D = p.params;
      return this.pushParams(D), this.opcode("pushProgram", f), this.opcode("pushProgram", S), p.hash ? this.accept(p.hash) : this.opcode("emptyHash", x), D;
    },
    blockParamIndex: function(p) {
      for (var f = 0, S = this.options.blockParams.length; f < S; f++) {
        var x = this.options.blockParams[f], D = x && l.indexOf(x, p);
        if (x && D >= 0)
          return [f, D];
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
    p = l.extend({}, p), "data" in p || (p.data = !0), p.compat && (p.useDepths = !0);
    var S = void 0;
    function x() {
      var w = f.parse(y, p), N = new f.Compiler().compile(w, p), C = new f.JavaScriptCompiler().compile(N, p, void 0, !0);
      return f.template(C);
    }
    function D(w, N) {
      return S || (S = x()), S.call(this, w, N);
    }
    return D._setup = function(w) {
      return S || (S = x()), S._setup(w);
    }, D._child = function(w, N, C, O) {
      return S || (S = x()), S._child(w, N, C, O);
    }, D;
  }
  function _(y, p) {
    if (y === p)
      return !0;
    if (l.isArray(y) && l.isArray(p) && y.length === p.length) {
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
var Po = { exports: {} }, Io = { exports: {} }, Cl = {}, Jf = {}, Ho = {}, qo = {}, Gv;
function WS() {
  if (Gv) return qo;
  Gv = 1;
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return qo.encode = function(r) {
    if (0 <= r && r < n.length)
      return n[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, qo.decode = function(r) {
    var i = 65, l = 90, o = 97, c = 122, h = 48, m = 57, g = 43, v = 47, _ = 26, b = 52;
    return i <= r && r <= l ? r - i : o <= r && r <= c ? r - o + _ : h <= r && r <= m ? r - h + b : r == g ? 62 : r == v ? 63 : -1;
  }, qo;
}
var Fv;
function D0() {
  if (Fv) return Ho;
  Fv = 1;
  var n = WS(), r = 5, i = 1 << r, l = i - 1, o = i;
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
      _ = b & l, b >>>= r, b > 0 && (_ |= o), v += n.encode(_);
    while (b > 0);
    return v;
  }, Ho.decode = function(g, v, _) {
    var b = g.length, y = 0, p = 0, f, S;
    do {
      if (v >= b)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (S = n.decode(g.charCodeAt(v++)), S === -1)
        throw new Error("Invalid base64 digit: " + g.charAt(v - 1));
      f = !!(S & o), S &= l, y = y + (S << p), p += r;
    } while (f);
    _.value = h(y), _.rest = v;
  }, Ho;
}
var Wf = {}, Vv;
function Ql() {
  return Vv || (Vv = 1, (function(n) {
    function r(C, O, j) {
      if (O in C)
        return C[O];
      if (arguments.length === 3)
        return j;
      throw new Error('"' + O + '" is a required argument.');
    }
    n.getArg = r;
    var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, l = /^data:.+\,.+$/;
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
      var O = C, j = o(C);
      if (j) {
        if (!j.path)
          return C;
        O = j.path;
      }
      for (var R = n.isAbsolute(O), Z = O.split(/\/+/), W, $ = 0, Q = Z.length - 1; Q >= 0; Q--)
        W = Z[Q], W === "." ? Z.splice(Q, 1) : W === ".." ? $++ : $ > 0 && (W === "" ? (Z.splice(Q + 1, $), $ = 0) : (Z.splice(Q, 2), $--));
      return O = Z.join("/"), O === "" && (O = R ? "/" : "."), j ? (j.path = O, c(j)) : O;
    }
    n.normalize = h;
    function m(C, O) {
      C === "" && (C = "."), O === "" && (O = ".");
      var j = o(O), R = o(C);
      if (R && (C = R.path || "/"), j && !j.scheme)
        return R && (j.scheme = R.scheme), c(j);
      if (j || O.match(l))
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
      for (var j = 0; O.indexOf(C + "/") !== 0; ) {
        var R = C.lastIndexOf("/");
        if (R < 0 || (C = C.slice(0, R), C.match(/^([^\/]+:\/)?\/*$/)))
          return O;
        ++j;
      }
      return Array(j + 1).join("../") + O.substr(C.length + 1);
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
      for (var j = O - 10; j >= 0; j--)
        if (C.charCodeAt(j) !== 36)
          return !1;
      return !0;
    }
    function f(C, O, j) {
      var R = x(C.source, O.source);
      return R !== 0 || (R = C.originalLine - O.originalLine, R !== 0) || (R = C.originalColumn - O.originalColumn, R !== 0 || j) || (R = C.generatedColumn - O.generatedColumn, R !== 0) || (R = C.generatedLine - O.generatedLine, R !== 0) ? R : x(C.name, O.name);
    }
    n.compareByOriginalPositions = f;
    function S(C, O, j) {
      var R = C.generatedLine - O.generatedLine;
      return R !== 0 || (R = C.generatedColumn - O.generatedColumn, R !== 0 || j) || (R = x(C.source, O.source), R !== 0) || (R = C.originalLine - O.originalLine, R !== 0) || (R = C.originalColumn - O.originalColumn, R !== 0) ? R : x(C.name, O.name);
    }
    n.compareByGeneratedPositionsDeflated = S;
    function x(C, O) {
      return C === O ? 0 : C === null ? 1 : O === null ? -1 : C > O ? 1 : -1;
    }
    function D(C, O) {
      var j = C.generatedLine - O.generatedLine;
      return j !== 0 || (j = C.generatedColumn - O.generatedColumn, j !== 0) || (j = x(C.source, O.source), j !== 0) || (j = C.originalLine - O.originalLine, j !== 0) || (j = C.originalColumn - O.originalColumn, j !== 0) ? j : x(C.name, O.name);
    }
    n.compareByGeneratedPositionsInflated = D;
    function w(C) {
      return JSON.parse(C.replace(/^\)]}'[^\n]*\n/, ""));
    }
    n.parseSourceMapInput = w;
    function N(C, O, j) {
      if (O = O || "", C && (C[C.length - 1] !== "/" && O[0] !== "/" && (C += "/"), O = C + O), j) {
        var R = o(j);
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
function T0() {
  if (Yv) return eh;
  Yv = 1;
  var n = Ql(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
  function l() {
    this._array = [], this._set = i ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return l.fromArray = function(c, h) {
    for (var m = new l(), g = 0, v = c.length; g < v; g++)
      m.add(c[g], h);
    return m;
  }, l.prototype.size = function() {
    return i ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, l.prototype.add = function(c, h) {
    var m = i ? c : n.toSetString(c), g = i ? this.has(c) : r.call(this._set, m), v = this._array.length;
    (!g || h) && this._array.push(c), g || (i ? this._set.set(c, v) : this._set[m] = v);
  }, l.prototype.has = function(c) {
    if (i)
      return this._set.has(c);
    var h = n.toSetString(c);
    return r.call(this._set, h);
  }, l.prototype.indexOf = function(c) {
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
  }, l.prototype.at = function(c) {
    if (c >= 0 && c < this._array.length)
      return this._array[c];
    throw new Error("No element indexed by " + c);
  }, l.prototype.toArray = function() {
    return this._array.slice();
  }, eh.ArraySet = l, eh;
}
var th = {}, Xv;
function ex() {
  if (Xv) return th;
  Xv = 1;
  var n = Ql();
  function r(l, o) {
    var c = l.generatedLine, h = o.generatedLine, m = l.generatedColumn, g = o.generatedColumn;
    return h > c || h == c && g >= m || n.compareByGeneratedPositionsInflated(l, o) <= 0;
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
  var n = D0(), r = Ql(), i = T0().ArraySet, l = ex().MappingList;
  function o(c) {
    c || (c = {}), this._file = r.getArg(c, "file", null), this._sourceRoot = r.getArg(c, "sourceRoot", null), this._skipValidation = r.getArg(c, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new l(), this._sourcesContents = null;
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
    for (var h = 0, m = 1, g = 0, v = 0, _ = 0, b = 0, y = "", p, f, S, x, D = this._mappings.toArray(), w = 0, N = D.length; w < N; w++) {
      if (f = D[w], p = "", f.generatedLine !== m)
        for (h = 0; f.generatedLine !== m; )
          p += ";", m++;
      else if (w > 0) {
        if (!r.compareByGeneratedPositionsInflated(f, D[w - 1]))
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
var wl = {}, nh = {}, $v;
function tx() {
  return $v || ($v = 1, (function(n) {
    n.GREATEST_LOWER_BOUND = 1, n.LEAST_UPPER_BOUND = 2;
    function r(i, l, o, c, h, m) {
      var g = Math.floor((l - i) / 2) + i, v = h(o, c[g], !0);
      return v === 0 ? g : v > 0 ? l - g > 1 ? r(g, l, o, c, h, m) : m == n.LEAST_UPPER_BOUND ? l < c.length ? l : -1 : g : g - i > 1 ? r(i, g, o, c, h, m) : m == n.LEAST_UPPER_BOUND ? g : i < 0 ? -1 : i;
    }
    n.search = function(l, o, c, h) {
      if (o.length === 0)
        return -1;
      var m = r(
        -1,
        o.length,
        l,
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
function nx() {
  if (Kv) return rh;
  Kv = 1;
  function n(l, o, c) {
    var h = l[o];
    l[o] = l[c], l[c] = h;
  }
  function r(l, o) {
    return Math.round(l + Math.random() * (o - l));
  }
  function i(l, o, c, h) {
    if (c < h) {
      var m = r(c, h), g = c - 1;
      n(l, m, h);
      for (var v = l[h], _ = c; _ < h; _++)
        o(l[_], v) <= 0 && (g += 1, n(l, g, _));
      n(l, g + 1, _);
      var b = g + 1;
      i(l, o, c, b - 1), i(l, o, b + 1, h);
    }
  }
  return rh.quickSort = function(l, o) {
    i(l, o, 0, l.length - 1);
  }, rh;
}
var Jv;
function rx() {
  if (Jv) return wl;
  Jv = 1;
  var n = Ql(), r = tx(), i = T0().ArraySet, l = D0(), o = nx().quickSort;
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
    S.map(function(D) {
      var w = D.source === null ? null : this._sources.at(D.source);
      return w = n.computeSourceURL(x, w, this._sourceMapURL), {
        source: w,
        generatedLine: D.generatedLine,
        generatedColumn: D.generatedColumn,
        originalLine: D.originalLine,
        originalColumn: D.originalColumn,
        name: D.name === null ? null : this._names.at(D.name)
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
        for (var D = S.originalColumn; S && S.originalLine === b && S.originalColumn == D; )
          p.push({
            line: n.getArg(S, "generatedLine", null),
            column: n.getArg(S, "generatedColumn", null),
            lastColumn: n.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++f];
    }
    return p;
  }, wl.SourceMapConsumer = c;
  function h(v, _) {
    var b = v;
    typeof v == "string" && (b = n.parseSourceMapInput(v));
    var y = n.getArg(b, "version"), p = n.getArg(b, "sources"), f = n.getArg(b, "names", []), S = n.getArg(b, "sourceRoot", null), x = n.getArg(b, "sourcesContent", null), D = n.getArg(b, "mappings"), w = n.getArg(b, "file", null);
    if (y != this._version)
      throw new Error("Unsupported version: " + y);
    S && (S = n.normalize(S)), p = p.map(String).map(n.normalize).map(function(N) {
      return S && n.isAbsolute(S) && n.isAbsolute(N) ? n.relative(S, N) : N;
    }), this._names = i.fromArray(f.map(String), !0), this._sources = i.fromArray(p, !0), this._absoluteSources = this._sources.toArray().map(function(N) {
      return n.computeSourceURL(S, N, _);
    }), this.sourceRoot = S, this.sourcesContent = x, this._mappings = D, this._sourceMapURL = _, this.file = w;
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
    ), y.file = _._file, y._sourceMapURL = b, y._absoluteSources = y._sources.toArray().map(function(j) {
      return n.computeSourceURL(y.sourceRoot, j, b);
    });
    for (var S = _._mappings.toArray().slice(), x = y.__generatedMappings = [], D = y.__originalMappings = [], w = 0, N = S.length; w < N; w++) {
      var C = S[w], O = new m();
      O.generatedLine = C.generatedLine, O.generatedColumn = C.generatedColumn, C.source && (O.source = f.indexOf(C.source), O.originalLine = C.originalLine, O.originalColumn = C.originalColumn, C.name && (O.name = p.indexOf(C.name)), D.push(O)), x.push(O);
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
    for (var y = 1, p = 0, f = 0, S = 0, x = 0, D = 0, w = _.length, N = 0, C = {}, O = {}, j = [], R = [], Z, W, $, Q, ee; N < w; )
      if (_.charAt(N) === ";")
        y++, N++, p = 0;
      else if (_.charAt(N) === ",")
        N++;
      else {
        for (Z = new m(), Z.generatedLine = y, Q = N; Q < w && !this._charIsMappingSeparator(_, Q); Q++)
          ;
        if (W = _.slice(N, Q), $ = C[W], $)
          N += W.length;
        else {
          for ($ = []; N < Q; )
            l.decode(_, N, O), ee = O.value, N = O.rest, $.push(ee);
          if ($.length === 2)
            throw new Error("Found a source, but no line and column");
          if ($.length === 3)
            throw new Error("Found a source and line, but no column");
          C[W] = $;
        }
        Z.generatedColumn = p + $[0], p = Z.generatedColumn, $.length > 1 && (Z.source = x + $[1], x += $[1], Z.originalLine = f + $[2], f = Z.originalLine, Z.originalLine += 1, Z.originalColumn = S + $[3], S = Z.originalColumn, $.length > 4 && (Z.name = D + $[4], D += $[4])), R.push(Z), typeof Z.originalLine == "number" && j.push(Z);
      }
    o(R, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = R, o(j, n.compareByOriginalPositions), this.__originalMappings = j;
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
  }, wl.BasicSourceMapConsumer = h;
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
      var x = n.getArg(S, "offset"), D = n.getArg(x, "line"), w = n.getArg(x, "column");
      if (D < f.line || D === f.line && w < f.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return f = x, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: D + 1,
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
        var x = f[S], D = p.consumer._sources.at(x.source);
        D = n.computeSourceURL(p.consumer.sourceRoot, D, this._sourceMapURL), this._sources.add(D), D = this._sources.indexOf(D);
        var w = null;
        x.name && (w = p.consumer._names.at(x.name), this._names.add(w), w = this._names.indexOf(w));
        var N = {
          source: D,
          generatedLine: x.generatedLine + (p.generatedOffset.generatedLine - 1),
          generatedColumn: x.generatedColumn + (p.generatedOffset.generatedLine === x.generatedLine ? p.generatedOffset.generatedColumn - 1 : 0),
          originalLine: x.originalLine,
          originalColumn: x.originalColumn,
          name: w
        };
        this.__generatedMappings.push(N), typeof N.originalLine == "number" && this.__originalMappings.push(N);
      }
    o(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), o(this.__originalMappings, n.compareByOriginalPositions);
  }, wl.IndexedSourceMapConsumer = g, wl;
}
var ah = {}, Wv;
function ax() {
  if (Wv) return ah;
  Wv = 1;
  var n = O0().SourceMapGenerator, r = Ql(), i = /(\r?\n)/, l = 10, o = "$$$isSourceNode$$$";
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
          D(x, p()), f++, S = 0;
        else {
          var N = b[y] || "", C = N.substr(0, w.generatedColumn - S);
          b[y] = N.substr(w.generatedColumn - S), S = w.generatedColumn, D(x, C), x = w;
          return;
        }
      for (; f < w.generatedLine; )
        _.add(p()), f++;
      if (S < w.generatedColumn) {
        var N = b[y] || "";
        _.add(N.substr(0, w.generatedColumn)), b[y] = N.substr(w.generatedColumn), S = w.generatedColumn;
      }
      x = w;
    }, this), y < b.length && (x && D(x, p()), _.add(b.splice(y).join(""))), g.sources.forEach(function(w) {
      var N = g.sourceContentFor(w);
      N != null && (v != null && (w = r.join(v, w)), _.setSourceContent(w, N));
    }), _;
    function D(w, N) {
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
      for (var D = 0, w = S.length; D < w; D++)
        S.charCodeAt(D) === l ? (g.line++, g.column = 0, D + 1 === w ? (b = null, _ = !1) : _ && v.addMapping({
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
function ix() {
  return ey || (ey = 1, Cl.SourceMapGenerator = O0().SourceMapGenerator, Cl.SourceMapConsumer = rx().SourceMapConsumer, Cl.SourceNode = ax().SourceNode), Cl;
}
var ty;
function lx() {
  return ty || (ty = 1, (function(n, r) {
    r.__esModule = !0;
    var i = Vt(), l = void 0;
    try {
      var o = ix();
      l = o.SourceNode;
    } catch {
    }
    l || (l = function(m, g, v, _) {
      this.src = "", _ && this.add(_);
    }, l.prototype = {
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
        return new l(g.start.line, g.start.column, this.srcFile);
      },
      wrap: function(g) {
        var v = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return g instanceof l ? g : (g = c(g, this, v), new l(v.start.line, v.start.column, this.srcFile, g));
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
function sx() {
  return ny || (ny = 1, (function(n, r) {
    r.__esModule = !0;
    function i(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var l = Uh(), o = Nn(), c = i(o), h = Vt(), m = lx(), g = i(m);
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
        var p = l.COMPILER_REVISION, f = l.REVISION_CHANGES[p];
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
        var D = p.opcodes, w = void 0, N = void 0, C = void 0, O = void 0;
        for (C = 0, O = D.length; C < O; C++)
          w = D[C], this.source.currentLocation = w.loc, N = N || w.loc, this[w.opcode].apply(this, w.args);
        if (this.source.currentLocation = N, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new c.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), x ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var j = this.createFunctionContext(x);
        if (this.isChild)
          return j;
        var R = {
          compiler: this.compilerInfo(),
          main: j
        };
        this.decorators && (R.main_d = this.decorators, R.useDecorators = !0);
        var Z = this.context, W = Z.programs, $ = Z.decorators;
        for (C = 0, O = W.length; C < O; C++)
          W[C] && (R[C] = W[C], $[C] && (R[C + "_d"] = $[C], R.useDecorators = !0));
        return this.environment.usePartial && (R.usePartial = !0), this.options.data && (R.useData = !0), this.useDepths && (R.useDepths = !0), this.useBlockParams && (R.useBlockParams = !0), this.options.compat && (R.compat = !0), x ? R.compilerOptions = this.options : (R.compiler = JSON.stringify(R.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, R = this.objectLiteral(R), f.srcName ? (R = R.toStringWithSourceMap({ file: f.destName }), R.map = R.map && R.map.toString()) : R = R.toString()), R;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new g.default(this.options.srcName), this.decorators = new g.default(this.options.srcName);
      },
      createFunctionContext: function(p) {
        var f = this, S = "", x = this.stackVars.concat(this.registers.list);
        x.length > 0 && (S += ", " + x.join(", "));
        var D = 0;
        Object.keys(this.aliases).forEach(function(C) {
          var O = f.aliases[C];
          O.children && O.referenceCount > 1 && (S += ", alias" + ++D + "=" + C, O.children[0] = "alias" + D);
        }), this.lookupPropertyFunctionIsUsed && (S += ", " + this.lookupPropertyFunctionVarDeclaration());
        var w = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && w.push("blockParams"), this.useDepths && w.push("depths");
        var N = this.mergeSource(S);
        return p ? (w.push(N), Function.apply(this, w)) : this.source.wrap(["function(", w.join(","), `) {
  `, N, "}"]);
      },
      mergeSource: function(p) {
        var f = this.environment.isSimple, S = !this.forceBuffer, x = void 0, D = void 0, w = void 0, N = void 0;
        return this.source.each(function(C) {
          C.appendToBuffer ? (w ? C.prepend("  + ") : w = C, N = C) : (w && (D ? w.prepend("buffer += ") : x = !0, N.add(";"), w = N = void 0), D = !0, f || (S = !1));
        }), S ? w ? (w.prepend("return "), N.add(";")) : D || this.source.push('return "";') : (p += ", buffer = " + (x ? "" : this.initializeBuffer()), w ? (w.prepend("return buffer + "), N.add(";")) : this.source.push("return buffer;")), p && this.source.prepend("var " + p.substring(2) + (x ? "" : `;
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
        var D = 0;
        !x && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(p[D++])) : this.pushContext(), this.resolvePath("context", p, D, f, S);
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
      resolvePath: function(p, f, S, x, D) {
        var w = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(b(this.options.strict && D, this, f, S, p));
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
        var x = this.popStack(), D = this.setupHelper(p, f), w = [];
        S && w.push(D.name), w.push(x), this.options.strict || w.push(this.aliasable("container.hooks.helperMissing"));
        var N = ["(", this.itemsSeparatedBy(w, "||"), ")"], C = this.source.functionCall(N, "call", D.callParams);
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
        var x = this.setupHelper(0, p, f), D = this.lastHelper = this.nameLookup("helpers", p, "helper"), w = ["(", "(helper = ", D, " || ", S, ")"];
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
        var x = [], D = this.setupParams(f, 1, x);
        p && (f = this.popStack(), delete D.name), S && (D.indent = JSON.stringify(S)), D.helpers = "helpers", D.partials = "partials", D.decorators = "container.decorators", p ? x.unshift(f) : x.unshift(this.nameLookup("partials", f, "partial")), this.options.compat && (D.depths = "depths"), D = this.objectLiteral(D), x.push(D), this.push(this.source.functionCall("container.invokePartial", "", x));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(p) {
        var f = this.popStack(), S = void 0, x = void 0, D = void 0;
        this.trackIds && (D = this.popStack()), this.stringParams && (x = this.popStack(), S = this.popStack());
        var w = this.hash;
        S && (w.contexts[p] = S), x && (w.types[p] = x), D && (w.ids[p] = D), w.values[p] = f;
      },
      pushId: function(p, f, S) {
        p === "BlockParam" ? this.pushStackLiteral("blockParams[" + f[0] + "].path[" + f[1] + "]" + (S ? " + " + JSON.stringify("." + S) : "")) : p === "PathExpression" ? this.pushString(f) : p === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: _,
      compileChildren: function(p, f) {
        for (var S = p.children, x = void 0, D = void 0, w = 0, N = S.length; w < N; w++) {
          x = S[w], D = new this.compiler();
          var C = this.matchExistingProgram(x);
          if (C == null) {
            this.context.programs.push("");
            var O = this.context.programs.length;
            x.index = O, x.name = "program" + O, this.context.programs[O] = D.compile(x, f, this.context, !this.precompile), this.context.decorators[O] = D.decorators, this.context.environments[O] = x, this.useDepths = this.useDepths || D.useDepths, this.useBlockParams = this.useBlockParams || D.useBlockParams, x.useDepths = this.useDepths, x.useBlockParams = this.useBlockParams;
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
        var f = ["("], S = void 0, x = void 0, D = void 0;
        if (!this.isInline())
          throw new c.default("replaceStack on non-inline");
        var w = this.popStack(!0);
        if (w instanceof v)
          S = [w.value], f = ["(", S], D = !0;
        else {
          x = !0;
          var N = this.incrStack();
          f = ["((", this.push(N), " = ", w, ")"], S = this.topStack();
        }
        var C = p.call(this, S);
        D || this.popStack(), x && this.stackSlot--, this.push(f.concat(C, ")"));
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
            var D = this.incrStack();
            this.pushSource([D, " = ", x, ";"]), this.compileStack.push(D);
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
        var x = [], D = this.setupHelperArgs(f, p, x, S), w = this.nameLookup("helpers", f, "helper"), N = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: x,
          paramsInit: D,
          name: w,
          callParams: [N].concat(x)
        };
      },
      setupParams: function(p, f, S) {
        var x = {}, D = [], w = [], N = [], C = !S, O = void 0;
        C && (S = []), x.name = this.quotedString(p), x.hash = this.popStack(), this.trackIds && (x.hashIds = this.popStack()), this.stringParams && (x.hashTypes = this.popStack(), x.hashContexts = this.popStack());
        var j = this.popStack(), R = this.popStack();
        (R || j) && (x.fn = R || "container.noop", x.inverse = j || "container.noop");
        for (var Z = f; Z--; )
          O = this.popStack(), S[Z] = O, this.trackIds && (N[Z] = this.popStack()), this.stringParams && (w[Z] = this.popStack(), D[Z] = this.popStack());
        return C && (x.args = this.source.generateArray(S)), this.trackIds && (x.ids = this.source.generateArray(N)), this.stringParams && (x.types = this.source.generateArray(w), x.contexts = this.source.generateArray(D)), this.options.data && (x.data = "data"), this.useBlockParams && (x.blockParams = "blockParams"), x;
      },
      setupHelperArgs: function(p, f, S, x) {
        var D = this.setupParams(p, f, S);
        return D.loc = JSON.stringify(this.source.currentLocation), D = this.objectLiteral(D), x ? (this.useRegister("options"), S.push("options"), ["options=", D]) : S ? (S.push(D), "") : D;
      }
    }, (function() {
      for (var y = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), p = _.RESERVED_WORDS = {}, f = 0, S = y.length; f < S; f++)
        p[y[f]] = !0;
    })(), _.isValidJavaScriptVariableName = function(y) {
      return !_.RESERVED_WORDS[y] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(y);
    };
    function b(y, p, f, S, x) {
      var D = p.popStack(), w = f.length;
      for (y && w--; S < w; S++)
        D = p.nameLookup(D, f[S], x);
      return y ? [p.aliasable("container.strict"), "(", D, ", ", p.quotedString(f[S]), ", ", JSON.stringify(p.source.currentLocation), " )"] : D;
    }
    r.default = _, n.exports = r.default;
  })(Po, Po.exports)), Po.exports;
}
var ry;
function ox() {
  return ry || (ry = 1, (function(n, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var l = YS(), o = i(l), c = w0(), h = i(c), m = KS(), g = JS(), v = sx(), _ = i(v), b = A0(), y = i(b), p = C0(), f = i(p), S = o.default.create;
    function x() {
      var w = S();
      return w.compile = function(N, C) {
        return g.compile(N, C, w);
      }, w.precompile = function(N, C) {
        return g.precompile(N, C, w);
      }, w.AST = h.default, w.Compiler = g.Compiler, w.JavaScriptCompiler = _.default, w.Parser = m.parser, w.parse = m.parse, w.parseWithoutProcessing = m.parseWithoutProcessing, w;
    }
    var D = x();
    D.create = x, f.default(D), D.Visitor = y.default, D.default = D, r.default = D, n.exports = r.default;
  })(yo, yo.exports)), yo.exports;
}
var bi = ox();
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
const ux = "﷐", N0 = "﷑", cx = "﷒", ay = "[[[crec_veryUniqueUserPlaceHolder]]]", iy = "[[[crec_veryUniqueCharPlaceHolder]]]";
function ly(n) {
  return n.replace(
    /\{\{|\}\}|[\uFDD0-\uFDD2]/g,
    (r) => r === "{{" ? N0 : r === "}}" ? cx : ux + r
  );
}
function fx(n) {
  return n.replace(
    /\uFDD0([\uFDD0-\uFDD2])|[\uFDD1\uFDD2]/g,
    (r, i) => i || (r === N0 ? "{{" : "}}")
  );
}
function gt(n) {
  return typeof n == "string" ? ly(n) : Array.isArray(n) ? n.map((r) => gt(r)) : n && typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r, i]) => [ly(r), gt(i)])) : n;
}
function Zl(n, r, i) {
  let l = bi.compile(n, { noEscape: !0 })(r);
  return l = l.replaceAll("{{user}}", ay), l = l.replaceAll("{{char}}", iy), l = i(l), l = l.replaceAll(ay, "{{user}}"), l = l.replaceAll(iy, "{{char}}"), fx(l);
}
function J(n, r, i) {
  function l(m, g) {
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
    l(v, m), (g = v._zod).deferred ?? (g.deferred = []);
    for (const _ of v._zod.deferred)
      _();
    return v;
  }
  return Object.defineProperty(h, "init", { value: l }), Object.defineProperty(h, Symbol.hasInstance, {
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
  const r = Object.values(n).filter((l) => typeof l == "number");
  return Object.entries(n).filter(([l, o]) => r.indexOf(+l) === -1).map(([l, o]) => o);
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
function hx(n, r) {
  const i = (n.toString().split(".")[1] || "").length, l = r.toString();
  let o = (l.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(l)) {
    const g = l.match(/\d?e-(\d?)/);
    g?.[1] && (o = Number.parseInt(g[1]));
  }
  const c = i > o ? i : o, h = Number.parseInt(n.toFixed(c).replace(".", "")), m = Number.parseInt(r.toFixed(c).replace(".", ""));
  return h % m / 10 ** c;
}
const sy = Symbol("evaluating");
function We(n, r, i) {
  let l;
  Object.defineProperty(n, r, {
    get() {
      if (l !== sy)
        return l === void 0 && (l = sy, l = i()), l;
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
    const l = Object.getOwnPropertyDescriptors(i);
    Object.assign(r, l);
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
const dx = Ph(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function Gl(n) {
  if (cu(n) === !1)
    return !1;
  const r = n.constructor;
  if (r === void 0)
    return !0;
  const i = r.prototype;
  return !(cu(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function z0(n) {
  return Gl(n) ? { ...n } : Array.isArray(n) ? [...n] : n;
}
const px = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function yu(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Zr(n, r, i) {
  const l = new n._zod.constr(r ?? n._zod.def);
  return (!r || i?.parent) && (l._zod.parent = n), l;
}
function me(n) {
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
function mx(n) {
  return Object.keys(n).filter((r) => n[r]._zod.optin === "optional" && n[r]._zod.optout === "optional");
}
const gx = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function vx(n, r) {
  const i = n._zod.def, l = ba(n._zod.def, {
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
  return Zr(n, l);
}
function yx(n, r) {
  const i = n._zod.def, l = ba(n._zod.def, {
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
  return Zr(n, l);
}
function _x(n, r) {
  if (!Gl(r))
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
function bx(n, r) {
  if (!Gl(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...n._zod.def,
    get shape() {
      const l = { ...n._zod.def.shape, ...r };
      return _a(this, "shape", l), l;
    },
    checks: n._zod.def.checks
  };
  return Zr(n, i);
}
function Sx(n, r) {
  const i = ba(n._zod.def, {
    get shape() {
      const l = { ...n._zod.def.shape, ...r._zod.def.shape };
      return _a(this, "shape", l), l;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Zr(n, i);
}
function xx(n, r, i) {
  const l = ba(r._zod.def, {
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
  return Zr(r, l);
}
function Ex(n, r, i) {
  const l = ba(r._zod.def, {
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
  return Zr(r, l);
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
    var l;
    return (l = i).path ?? (l.path = []), i.path.unshift(n), i;
  });
}
function Zo(n) {
  return typeof n == "string" ? n : n?.message;
}
function ya(n, r, i) {
  const l = { ...n, path: n.path ?? [] };
  if (!n.message) {
    const o = Zo(n.inst?._zod.def?.error?.(n)) ?? Zo(r?.error?.(n)) ?? Zo(i.customError?.(n)) ?? Zo(i.localeError?.(n)) ?? "Invalid input";
    l.message = o;
  }
  return delete l.inst, delete l.continue, r?.reportInput || delete l.input, l;
}
function qh(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function Fl(...n) {
  const [r, i, l] = n;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: i,
    inst: l
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
}, U0 = J("$ZodError", B0), P0 = J("$ZodError", B0, { Parent: Error });
function Cx(n, r = (i) => i.message) {
  const i = {}, l = [];
  for (const o of n.issues)
    o.path.length > 0 ? (i[o.path[0]] = i[o.path[0]] || [], i[o.path[0]].push(r(o))) : l.push(r(o));
  return { formErrors: l, fieldErrors: i };
}
function wx(n, r = (i) => i.message) {
  const i = { _errors: [] }, l = (o) => {
    for (const c of o.issues)
      if (c.code === "invalid_union" && c.errors.length)
        c.errors.map((h) => l({ issues: h }));
      else if (c.code === "invalid_key")
        l({ issues: c.issues });
      else if (c.code === "invalid_element")
        l({ issues: c.issues });
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
  return l(n), i;
}
const Zh = (n) => (r, i, l, o) => {
  const c = l ? Object.assign(l, { async: !1 }) : { async: !1 }, h = r._zod.run({ value: i, issues: [] }, c);
  if (h instanceof Promise)
    throw new vi();
  if (h.issues.length) {
    const m = new (o?.Err ?? n)(h.issues.map((g) => ya(g, c, va())));
    throw j0(m, o?.callee), m;
  }
  return h.value;
}, Gh = (n) => async (r, i, l, o) => {
  const c = l ? Object.assign(l, { async: !0 }) : { async: !0 };
  let h = r._zod.run({ value: i, issues: [] }, c);
  if (h instanceof Promise && (h = await h), h.issues.length) {
    const m = new (o?.Err ?? n)(h.issues.map((g) => ya(g, c, va())));
    throw j0(m, o?.callee), m;
  }
  return h.value;
}, _u = (n) => (r, i, l) => {
  const o = l ? { ...l, async: !1 } : { async: !1 }, c = r._zod.run({ value: i, issues: [] }, o);
  if (c instanceof Promise)
    throw new vi();
  return c.issues.length ? {
    success: !1,
    error: new (n ?? U0)(c.issues.map((h) => ya(h, o, va())))
  } : { success: !0, data: c.value };
}, Ax = /* @__PURE__ */ _u(P0), bu = (n) => async (r, i, l) => {
  const o = l ? Object.assign(l, { async: !0 }) : { async: !0 };
  let c = r._zod.run({ value: i, issues: [] }, o);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new n(c.issues.map((h) => ya(h, o, va())))
  } : { success: !0, data: c.value };
}, Dx = /* @__PURE__ */ bu(P0), Tx = (n) => (r, i, l) => {
  const o = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Zh(n)(r, i, o);
}, Ox = (n) => (r, i, l) => Zh(n)(r, i, l), Nx = (n) => async (r, i, l) => {
  const o = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Gh(n)(r, i, o);
}, Mx = (n) => async (r, i, l) => Gh(n)(r, i, l), kx = (n) => (r, i, l) => {
  const o = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return _u(n)(r, i, o);
}, Rx = (n) => (r, i, l) => _u(n)(r, i, l), jx = (n) => async (r, i, l) => {
  const o = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return bu(n)(r, i, o);
}, zx = (n) => async (r, i, l) => bu(n)(r, i, l), Lx = /^[cC][^\s-]{8,}$/, Bx = /^[0-9a-z]+$/, Ux = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Px = /^[0-9a-vA-V]{20}$/, Ix = /^[A-Za-z0-9]{27}$/, Hx = /^[a-zA-Z0-9_-]{21}$/, qx = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Zx = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, uy = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Gx = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Fx = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Vx() {
  return new RegExp(Fx, "u");
}
const Yx = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Xx = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Qx = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, $x = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Kx = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, I0 = /^[A-Za-z0-9_-]*$/, Jx = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Wx = /^\+(?:[0-9]){6,14}[0-9]$/, H0 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", eE = /* @__PURE__ */ new RegExp(`^${H0}$`);
function q0(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function tE(n) {
  return new RegExp(`^${q0(n)}$`);
}
function nE(n) {
  const r = q0({ precision: n.precision }), i = ["Z"];
  n.local && i.push(""), n.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const l = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${H0}T(?:${l})$`);
}
const rE = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, aE = /^-?\d+$/, iE = /^-?\d+(?:\.\d+)?/, lE = /^[^A-Z]*$/, sE = /^[^a-z]*$/, Yt = /* @__PURE__ */ J("$ZodCheck", (n, r) => {
  var i;
  n._zod ?? (n._zod = {}), n._zod.def = r, (i = n._zod).onattach ?? (i.onattach = []);
}), Z0 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, G0 = /* @__PURE__ */ J("$ZodCheckLessThan", (n, r) => {
  Yt.init(n, r);
  const i = Z0[typeof r.value];
  n._zod.onattach.push((l) => {
    const o = l._zod.bag, c = (r.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < c && (r.inclusive ? o.maximum = r.value : o.exclusiveMaximum = r.value);
  }), n._zod.check = (l) => {
    (r.inclusive ? l.value <= r.value : l.value < r.value) || l.issues.push({
      origin: i,
      code: "too_big",
      maximum: r.value,
      input: l.value,
      inclusive: r.inclusive,
      inst: n,
      continue: !r.abort
    });
  };
}), F0 = /* @__PURE__ */ J("$ZodCheckGreaterThan", (n, r) => {
  Yt.init(n, r);
  const i = Z0[typeof r.value];
  n._zod.onattach.push((l) => {
    const o = l._zod.bag, c = (r.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > c && (r.inclusive ? o.minimum = r.value : o.exclusiveMinimum = r.value);
  }), n._zod.check = (l) => {
    (r.inclusive ? l.value >= r.value : l.value > r.value) || l.issues.push({
      origin: i,
      code: "too_small",
      minimum: r.value,
      input: l.value,
      inclusive: r.inclusive,
      inst: n,
      continue: !r.abort
    });
  };
}), oE = /* @__PURE__ */ J("$ZodCheckMultipleOf", (n, r) => {
  Yt.init(n, r), n._zod.onattach.push((i) => {
    var l;
    (l = i._zod.bag).multipleOf ?? (l.multipleOf = r.value);
  }), n._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : hx(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), uE = /* @__PURE__ */ J("$ZodCheckNumberFormat", (n, r) => {
  Yt.init(n, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), l = i ? "int" : "number", [o, c] = gx[r.format];
  n._zod.onattach.push((h) => {
    const m = h._zod.bag;
    m.format = r.format, m.minimum = o, m.maximum = c, i && (m.pattern = aE);
  }), n._zod.check = (h) => {
    const m = h.value;
    if (i) {
      if (!Number.isInteger(m)) {
        h.issues.push({
          expected: l,
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
          origin: l,
          continue: !r.abort
        }) : h.issues.push({
          input: m,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: l,
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
}), cE = /* @__PURE__ */ J("$ZodCheckMaxLength", (n, r) => {
  var i;
  Yt.init(n, r), (i = n._zod.def).when ?? (i.when = (l) => {
    const o = l.value;
    return !Ih(o) && o.length !== void 0;
  }), n._zod.onattach.push((l) => {
    const o = l._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < o && (l._zod.bag.maximum = r.maximum);
  }), n._zod.check = (l) => {
    const o = l.value;
    if (o.length <= r.maximum)
      return;
    const h = qh(o);
    l.issues.push({
      origin: h,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: o,
      inst: n,
      continue: !r.abort
    });
  };
}), fE = /* @__PURE__ */ J("$ZodCheckMinLength", (n, r) => {
  var i;
  Yt.init(n, r), (i = n._zod.def).when ?? (i.when = (l) => {
    const o = l.value;
    return !Ih(o) && o.length !== void 0;
  }), n._zod.onattach.push((l) => {
    const o = l._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > o && (l._zod.bag.minimum = r.minimum);
  }), n._zod.check = (l) => {
    const o = l.value;
    if (o.length >= r.minimum)
      return;
    const h = qh(o);
    l.issues.push({
      origin: h,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: o,
      inst: n,
      continue: !r.abort
    });
  };
}), hE = /* @__PURE__ */ J("$ZodCheckLengthEquals", (n, r) => {
  var i;
  Yt.init(n, r), (i = n._zod.def).when ?? (i.when = (l) => {
    const o = l.value;
    return !Ih(o) && o.length !== void 0;
  }), n._zod.onattach.push((l) => {
    const o = l._zod.bag;
    o.minimum = r.length, o.maximum = r.length, o.length = r.length;
  }), n._zod.check = (l) => {
    const o = l.value, c = o.length;
    if (c === r.length)
      return;
    const h = qh(o), m = c > r.length;
    l.issues.push({
      origin: h,
      ...m ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: l.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Su = /* @__PURE__ */ J("$ZodCheckStringFormat", (n, r) => {
  var i, l;
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
  }) : (l = n._zod).check ?? (l.check = () => {
  });
}), dE = /* @__PURE__ */ J("$ZodCheckRegex", (n, r) => {
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
}), pE = /* @__PURE__ */ J("$ZodCheckLowerCase", (n, r) => {
  r.pattern ?? (r.pattern = lE), Su.init(n, r);
}), mE = /* @__PURE__ */ J("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = sE), Su.init(n, r);
}), gE = /* @__PURE__ */ J("$ZodCheckIncludes", (n, r) => {
  Yt.init(n, r);
  const i = yu(r.includes), l = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${i}` : i);
  r.pattern = l, n._zod.onattach.push((o) => {
    const c = o._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(l);
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
}), vE = /* @__PURE__ */ J("$ZodCheckStartsWith", (n, r) => {
  Yt.init(n, r);
  const i = new RegExp(`^${yu(r.prefix)}.*`);
  r.pattern ?? (r.pattern = i), n._zod.onattach.push((l) => {
    const o = l._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(i);
  }), n._zod.check = (l) => {
    l.value.startsWith(r.prefix) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: l.value,
      inst: n,
      continue: !r.abort
    });
  };
}), yE = /* @__PURE__ */ J("$ZodCheckEndsWith", (n, r) => {
  Yt.init(n, r);
  const i = new RegExp(`.*${yu(r.suffix)}$`);
  r.pattern ?? (r.pattern = i), n._zod.onattach.push((l) => {
    const o = l._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(i);
  }), n._zod.check = (l) => {
    l.value.endsWith(r.suffix) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: l.value,
      inst: n,
      continue: !r.abort
    });
  };
}), _E = /* @__PURE__ */ J("$ZodCheckOverwrite", (n, r) => {
  Yt.init(n, r), n._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class bE {
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
    const l = r.split(`
`).filter((h) => h), o = Math.min(...l.map((h) => h.length - h.trimStart().length)), c = l.map((h) => h.slice(o)).map((h) => " ".repeat(this.indent * 2) + h);
    for (const h of c)
      this.content.push(h);
  }
  compile() {
    const r = Function, i = this?.args, o = [...(this?.content ?? [""]).map((c) => `  ${c}`)];
    return new r(...i, o.join(`
`));
  }
}
const SE = {
  major: 4,
  minor: 1,
  patch: 12
}, yt = /* @__PURE__ */ J("$ZodType", (n, r) => {
  var i;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = SE;
  const l = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && l.unshift(n);
  for (const o of l)
    for (const c of o._zod.onattach)
      c(n);
  if (l.length === 0)
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
      const v = o(m, l, g);
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
        return g.then((v) => o(v, l, m));
      }
      return o(g, l, m);
    };
  }
  n["~standard"] = {
    validate: (o) => {
      try {
        const c = Ax(n, o);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return Dx(n, o).then((h) => h.success ? { value: h.data } : { issues: h.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Fh = /* @__PURE__ */ J("$ZodString", (n, r) => {
  yt.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? rE(n._zod.bag), n._zod.parse = (i, l) => {
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
}), nt = /* @__PURE__ */ J("$ZodStringFormat", (n, r) => {
  Su.init(n, r), Fh.init(n, r);
}), xE = /* @__PURE__ */ J("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = Zx), nt.init(n, r);
}), EE = /* @__PURE__ */ J("$ZodUUID", (n, r) => {
  if (r.version) {
    const l = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[r.version];
    if (l === void 0)
      throw new Error(`Invalid UUID version: "${r.version}"`);
    r.pattern ?? (r.pattern = uy(l));
  } else
    r.pattern ?? (r.pattern = uy());
  nt.init(n, r);
}), CE = /* @__PURE__ */ J("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = Gx), nt.init(n, r);
}), wE = /* @__PURE__ */ J("$ZodURL", (n, r) => {
  nt.init(n, r), n._zod.check = (i) => {
    try {
      const l = i.value.trim(), o = new URL(l);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(o.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Jx.source,
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
      })), r.normalize ? i.value = o.href : i.value = l;
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
}), AE = /* @__PURE__ */ J("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = Vx()), nt.init(n, r);
}), DE = /* @__PURE__ */ J("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = Hx), nt.init(n, r);
}), TE = /* @__PURE__ */ J("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = Lx), nt.init(n, r);
}), OE = /* @__PURE__ */ J("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = Bx), nt.init(n, r);
}), NE = /* @__PURE__ */ J("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = Ux), nt.init(n, r);
}), ME = /* @__PURE__ */ J("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = Px), nt.init(n, r);
}), kE = /* @__PURE__ */ J("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = Ix), nt.init(n, r);
}), RE = /* @__PURE__ */ J("$ZodISODateTime", (n, r) => {
  r.pattern ?? (r.pattern = nE(r)), nt.init(n, r);
}), jE = /* @__PURE__ */ J("$ZodISODate", (n, r) => {
  r.pattern ?? (r.pattern = eE), nt.init(n, r);
}), zE = /* @__PURE__ */ J("$ZodISOTime", (n, r) => {
  r.pattern ?? (r.pattern = tE(r)), nt.init(n, r);
}), LE = /* @__PURE__ */ J("$ZodISODuration", (n, r) => {
  r.pattern ?? (r.pattern = qx), nt.init(n, r);
}), BE = /* @__PURE__ */ J("$ZodIPv4", (n, r) => {
  r.pattern ?? (r.pattern = Yx), nt.init(n, r), n._zod.onattach.push((i) => {
    const l = i._zod.bag;
    l.format = "ipv4";
  });
}), UE = /* @__PURE__ */ J("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = Xx), nt.init(n, r), n._zod.onattach.push((i) => {
    const l = i._zod.bag;
    l.format = "ipv6";
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
}), PE = /* @__PURE__ */ J("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = Qx), nt.init(n, r);
}), IE = /* @__PURE__ */ J("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = $x), nt.init(n, r), n._zod.check = (i) => {
    const l = i.value.split("/");
    try {
      if (l.length !== 2)
        throw new Error();
      const [o, c] = l;
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
const HE = /* @__PURE__ */ J("$ZodBase64", (n, r) => {
  r.pattern ?? (r.pattern = Kx), nt.init(n, r), n._zod.onattach.push((i) => {
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
function qE(n) {
  if (!I0.test(n))
    return !1;
  const r = n.replace(/[-_]/g, (l) => l === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return V0(i);
}
const ZE = /* @__PURE__ */ J("$ZodBase64URL", (n, r) => {
  r.pattern ?? (r.pattern = I0), nt.init(n, r), n._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (i) => {
    qE(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), GE = /* @__PURE__ */ J("$ZodE164", (n, r) => {
  r.pattern ?? (r.pattern = Wx), nt.init(n, r);
});
function FE(n, r = null) {
  try {
    const i = n.split(".");
    if (i.length !== 3)
      return !1;
    const [l] = i;
    if (!l)
      return !1;
    const o = JSON.parse(atob(l));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || r && (!("alg" in o) || o.alg !== r));
  } catch {
    return !1;
  }
}
const VE = /* @__PURE__ */ J("$ZodJWT", (n, r) => {
  nt.init(n, r), n._zod.check = (i) => {
    FE(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Y0 = /* @__PURE__ */ J("$ZodNumber", (n, r) => {
  yt.init(n, r), n._zod.pattern = n._zod.bag.pattern ?? iE, n._zod.parse = (i, l) => {
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
}), YE = /* @__PURE__ */ J("$ZodNumber", (n, r) => {
  uE.init(n, r), Y0.init(n, r);
}), XE = /* @__PURE__ */ J("$ZodUnknown", (n, r) => {
  yt.init(n, r), n._zod.parse = (i) => i;
}), QE = /* @__PURE__ */ J("$ZodNever", (n, r) => {
  yt.init(n, r), n._zod.parse = (i, l) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: n
  }), i);
});
function cy(n, r, i) {
  n.issues.length && r.issues.push(...L0(i, n.issues)), r.value[i] = n.value;
}
const $E = /* @__PURE__ */ J("$ZodArray", (n, r) => {
  yt.init(n, r), n._zod.parse = (i, l) => {
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
      }, l);
      g instanceof Promise ? c.push(g.then((v) => cy(v, i, h))) : cy(g, i, h);
    }
    return c.length ? Promise.all(c).then(() => i) : i;
  };
});
function fu(n, r, i, l) {
  n.issues.length && r.issues.push(...L0(i, n.issues)), n.value === void 0 ? i in l && (r.value[i] = void 0) : r.value[i] = n.value;
}
function X0(n) {
  const r = Object.keys(n.shape);
  for (const l of r)
    if (!n.shape?.[l]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${l}": expected a Zod schema`);
  const i = mx(n.shape);
  return {
    ...n,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function Q0(n, r, i, l, o, c) {
  const h = [], m = o.keySet, g = o.catchall._zod, v = g.def.type;
  for (const _ of Object.keys(r)) {
    if (m.has(_))
      continue;
    if (v === "never") {
      h.push(_);
      continue;
    }
    const b = g.run({ value: r[_], issues: [] }, l);
    b instanceof Promise ? n.push(b.then((y) => fu(y, i, _, r))) : fu(b, i, _, r);
  }
  return h.length && i.issues.push({
    code: "unrecognized_keys",
    keys: h,
    input: r,
    inst: c
  }), n.length ? Promise.all(n).then(() => i) : i;
}
const KE = /* @__PURE__ */ J("$ZodObject", (n, r) => {
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
  const l = Ph(() => X0(r));
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
    h ?? (h = l.value);
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
    return c ? Q0(_, v, m, g, l.value, n) : _.length ? Promise.all(_).then(() => m) : m;
  };
}), JE = /* @__PURE__ */ J("$ZodObjectJIT", (n, r) => {
  KE.init(n, r);
  const i = n._zod.parse, l = Ph(() => X0(r)), o = (y) => {
    const p = new bE(["shape", "payload", "ctx"]), f = l.value, S = (N) => {
      const C = oy(N);
      return `shape[${C}]._zod.run({ value: input[${C}], issues: [] }, ctx)`;
    };
    p.write("const input = payload.value;");
    const x = /* @__PURE__ */ Object.create(null);
    let D = 0;
    for (const N of f.keys)
      x[N] = `key_${D++}`;
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
  const h = cu, m = !k0.jitless, v = m && dx.value, _ = r.catchall;
  let b;
  n._zod.parse = (y, p) => {
    b ?? (b = l.value);
    const f = y.value;
    return h(f) ? m && v && p?.async === !1 && p.jitless !== !0 ? (c || (c = o(r.shape)), y = c(y, p), _ ? Q0([], f, y, p, b, n) : y) : i(y, p) : (y.issues.push({
      expected: "object",
      code: "invalid_type",
      input: f,
      inst: n
    }), y);
  };
});
function fy(n, r, i, l) {
  for (const c of n)
    if (c.issues.length === 0)
      return r.value = c.value, r;
  const o = n.filter((c) => !mi(c));
  return o.length === 1 ? (r.value = o[0].value, o[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: i,
    errors: n.map((c) => c.issues.map((h) => ya(h, l, va())))
  }), r);
}
const WE = /* @__PURE__ */ J("$ZodUnion", (n, r) => {
  yt.init(n, r), We(n._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), We(n._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), We(n._zod, "values", () => {
    if (r.options.every((o) => o._zod.values))
      return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), We(n._zod, "pattern", () => {
    if (r.options.every((o) => o._zod.pattern)) {
      const o = r.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${o.map((c) => Hh(c.source)).join("|")})$`);
    }
  });
  const i = r.options.length === 1, l = r.options[0]._zod.run;
  n._zod.parse = (o, c) => {
    if (i)
      return l(o, c);
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
}), eC = /* @__PURE__ */ J("$ZodIntersection", (n, r) => {
  yt.init(n, r), n._zod.parse = (i, l) => {
    const o = i.value, c = r.left._zod.run({ value: o, issues: [] }, l), h = r.right._zod.run({ value: o, issues: [] }, l);
    return c instanceof Promise || h instanceof Promise ? Promise.all([c, h]).then(([g, v]) => hy(i, g, v)) : hy(i, c, h);
  };
});
function xh(n, r) {
  if (n === r)
    return { valid: !0, data: n };
  if (n instanceof Date && r instanceof Date && +n == +r)
    return { valid: !0, data: n };
  if (Gl(n) && Gl(r)) {
    const i = Object.keys(r), l = Object.keys(n).filter((c) => i.indexOf(c) !== -1), o = { ...n, ...r };
    for (const c of l) {
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
    for (let l = 0; l < n.length; l++) {
      const o = n[l], c = r[l], h = xh(o, c);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [l, ...h.mergeErrorPath]
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
  const l = xh(r.value, i.value);
  if (!l.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
  return n.value = l.data, n;
}
const tC = /* @__PURE__ */ J("$ZodEnum", (n, r) => {
  yt.init(n, r);
  const i = R0(r.entries), l = new Set(i);
  n._zod.values = l, n._zod.pattern = new RegExp(`^(${i.filter((o) => px.has(typeof o)).map((o) => typeof o == "string" ? yu(o) : o.toString()).join("|")})$`), n._zod.parse = (o, c) => {
    const h = o.value;
    return l.has(h) || o.issues.push({
      code: "invalid_value",
      values: i,
      input: h,
      inst: n
    }), o;
  };
}), nC = /* @__PURE__ */ J("$ZodTransform", (n, r) => {
  yt.init(n, r), n._zod.parse = (i, l) => {
    if (l.direction === "backward")
      throw new M0(n.constructor.name);
    const o = r.transform(i.value, i);
    if (l.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((h) => (i.value = h, i));
    if (o instanceof Promise)
      throw new vi();
    return i.value = o, i;
  };
});
function dy(n, r) {
  return n.issues.length && r === void 0 ? { issues: [], value: void 0 } : n;
}
const rC = /* @__PURE__ */ J("$ZodOptional", (n, r) => {
  yt.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", We(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), We(n._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${Hh(i.source)})?$`) : void 0;
  }), n._zod.parse = (i, l) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(i, l);
      return o instanceof Promise ? o.then((c) => dy(c, i.value)) : dy(o, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, l);
  };
}), aC = /* @__PURE__ */ J("$ZodNullable", (n, r) => {
  yt.init(n, r), We(n._zod, "optin", () => r.innerType._zod.optin), We(n._zod, "optout", () => r.innerType._zod.optout), We(n._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${Hh(i.source)}|null)$`) : void 0;
  }), We(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (i, l) => i.value === null ? i : r.innerType._zod.run(i, l);
}), iC = /* @__PURE__ */ J("$ZodDefault", (n, r) => {
  yt.init(n, r), n._zod.optin = "optional", We(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, l) => {
    if (l.direction === "backward")
      return r.innerType._zod.run(i, l);
    if (i.value === void 0)
      return i.value = r.defaultValue, i;
    const o = r.innerType._zod.run(i, l);
    return o instanceof Promise ? o.then((c) => py(c, r)) : py(o, r);
  };
});
function py(n, r) {
  return n.value === void 0 && (n.value = r.defaultValue), n;
}
const lC = /* @__PURE__ */ J("$ZodPrefault", (n, r) => {
  yt.init(n, r), n._zod.optin = "optional", We(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, l) => (l.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, l));
}), sC = /* @__PURE__ */ J("$ZodNonOptional", (n, r) => {
  yt.init(n, r), We(n._zod, "values", () => {
    const i = r.innerType._zod.values;
    return i ? new Set([...i].filter((l) => l !== void 0)) : void 0;
  }), n._zod.parse = (i, l) => {
    const o = r.innerType._zod.run(i, l);
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
const oC = /* @__PURE__ */ J("$ZodCatch", (n, r) => {
  yt.init(n, r), We(n._zod, "optin", () => r.innerType._zod.optin), We(n._zod, "optout", () => r.innerType._zod.optout), We(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, l) => {
    if (l.direction === "backward")
      return r.innerType._zod.run(i, l);
    const o = r.innerType._zod.run(i, l);
    return o instanceof Promise ? o.then((c) => (i.value = c.value, c.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: c.issues.map((h) => ya(h, l, va()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = o.value, o.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: o.issues.map((c) => ya(c, l, va()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), uC = /* @__PURE__ */ J("$ZodPipe", (n, r) => {
  yt.init(n, r), We(n._zod, "values", () => r.in._zod.values), We(n._zod, "optin", () => r.in._zod.optin), We(n._zod, "optout", () => r.out._zod.optout), We(n._zod, "propValues", () => r.in._zod.propValues), n._zod.parse = (i, l) => {
    if (l.direction === "backward") {
      const c = r.out._zod.run(i, l);
      return c instanceof Promise ? c.then((h) => Go(h, r.in, l)) : Go(c, r.in, l);
    }
    const o = r.in._zod.run(i, l);
    return o instanceof Promise ? o.then((c) => Go(c, r.out, l)) : Go(o, r.out, l);
  };
});
function Go(n, r, i) {
  return n.issues.length ? (n.aborted = !0, n) : r._zod.run({ value: n.value, issues: n.issues }, i);
}
const cC = /* @__PURE__ */ J("$ZodReadonly", (n, r) => {
  yt.init(n, r), We(n._zod, "propValues", () => r.innerType._zod.propValues), We(n._zod, "values", () => r.innerType._zod.values), We(n._zod, "optin", () => r.innerType._zod.optin), We(n._zod, "optout", () => r.innerType._zod.optout), n._zod.parse = (i, l) => {
    if (l.direction === "backward")
      return r.innerType._zod.run(i, l);
    const o = r.innerType._zod.run(i, l);
    return o instanceof Promise ? o.then(gy) : gy(o);
  };
});
function gy(n) {
  return n.value = Object.freeze(n.value), n;
}
const fC = /* @__PURE__ */ J("$ZodCustom", (n, r) => {
  Yt.init(n, r), yt.init(n, r), n._zod.parse = (i, l) => i, n._zod.check = (i) => {
    const l = i.value, o = r.fn(l);
    if (o instanceof Promise)
      return o.then((c) => vy(c, i, l, n));
    vy(o, i, l, n);
  };
});
function vy(n, r, i, l) {
  if (!n) {
    const o = {
      code: "custom",
      input: i,
      inst: l,
      // incorporates params.error into issue reporting
      path: [...l._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !l._zod.def.abort
      // params: inst._zod.def.params,
    };
    l._zod.def.params && (o.params = l._zod.def.params), r.issues.push(Fl(o));
  }
}
class $0 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(r, ...i) {
    const l = i[0];
    if (this._map.set(r, l), l && typeof l == "object" && "id" in l) {
      if (this._idmap.has(l.id))
        throw new Error(`ID ${l.id} already exists in the registry`);
      this._idmap.set(l.id, r);
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
      const l = { ...this.get(i) ?? {} };
      delete l.id;
      const o = { ...l, ...this._map.get(r) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function hC() {
  return new $0();
}
const jl = /* @__PURE__ */ hC();
function dC(n, r) {
  return new n({
    type: "string",
    ...me(r)
  });
}
function pC(n, r) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function yy(n, r) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function mC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function gC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...me(r)
  });
}
function vC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...me(r)
  });
}
function yC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...me(r)
  });
}
function _C(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function bC(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function SC(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function xC(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function EC(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function CC(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function wC(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function AC(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function DC(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function TC(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function OC(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function NC(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function MC(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function kC(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function RC(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function jC(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function zC(n, r) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...me(r)
  });
}
function LC(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...me(r)
  });
}
function BC(n, r) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...me(r)
  });
}
function UC(n, r) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...me(r)
  });
}
function PC(n, r) {
  return new n({
    type: "number",
    checks: [],
    ...me(r)
  });
}
function IC(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...me(r)
  });
}
function HC(n) {
  return new n({
    type: "unknown"
  });
}
function qC(n, r) {
  return new n({
    type: "never",
    ...me(r)
  });
}
function _y(n, r) {
  return new G0({
    check: "less_than",
    ...me(r),
    value: n,
    inclusive: !1
  });
}
function ih(n, r) {
  return new G0({
    check: "less_than",
    ...me(r),
    value: n,
    inclusive: !0
  });
}
function by(n, r) {
  return new F0({
    check: "greater_than",
    ...me(r),
    value: n,
    inclusive: !1
  });
}
function lh(n, r) {
  return new F0({
    check: "greater_than",
    ...me(r),
    value: n,
    inclusive: !0
  });
}
function Sy(n, r) {
  return new oE({
    check: "multiple_of",
    ...me(r),
    value: n
  });
}
function K0(n, r) {
  return new cE({
    check: "max_length",
    ...me(r),
    maximum: n
  });
}
function hu(n, r) {
  return new fE({
    check: "min_length",
    ...me(r),
    minimum: n
  });
}
function J0(n, r) {
  return new hE({
    check: "length_equals",
    ...me(r),
    length: n
  });
}
function ZC(n, r) {
  return new dE({
    check: "string_format",
    format: "regex",
    ...me(r),
    pattern: n
  });
}
function GC(n) {
  return new pE({
    check: "string_format",
    format: "lowercase",
    ...me(n)
  });
}
function FC(n) {
  return new mE({
    check: "string_format",
    format: "uppercase",
    ...me(n)
  });
}
function VC(n, r) {
  return new gE({
    check: "string_format",
    format: "includes",
    ...me(r),
    includes: n
  });
}
function YC(n, r) {
  return new vE({
    check: "string_format",
    format: "starts_with",
    ...me(r),
    prefix: n
  });
}
function XC(n, r) {
  return new yE({
    check: "string_format",
    format: "ends_with",
    ...me(r),
    suffix: n
  });
}
function $l(n) {
  return new _E({
    check: "overwrite",
    tx: n
  });
}
function QC(n) {
  return $l((r) => r.normalize(n));
}
function $C() {
  return $l((n) => n.trim());
}
function KC() {
  return $l((n) => n.toLowerCase());
}
function JC() {
  return $l((n) => n.toUpperCase());
}
function WC(n, r, i) {
  return new n({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...me(i)
  });
}
function e3(n, r, i) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...me(i)
  });
}
function t3(n) {
  const r = n3((i) => (i.addIssue = (l) => {
    if (typeof l == "string")
      i.issues.push(Fl(l, i.value, r._zod.def));
    else {
      const o = l;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = i.value), o.inst ?? (o.inst = r), o.continue ?? (o.continue = !r._zod.def.abort), i.issues.push(Fl(o));
    }
  }, n(i.value, i)));
  return r;
}
function n3(n, r) {
  const i = new Yt({
    check: "custom",
    ...me(r)
  });
  return i._zod.check = n, i;
}
class xy {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? jl, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, i = { path: [], schemaPath: [] }) {
    var l;
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
            const { minimum: S, maximum: x, format: D, patterns: w, contentEncoding: N } = r._zod.bag;
            if (typeof S == "number" && (f.minLength = S), typeof x == "number" && (f.maxLength = x), D && (f.format = c[D] ?? D, f.format === "" && delete f.format), N && (f.contentEncoding = N), w && w.size > 0) {
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
            const f = p, { minimum: S, maximum: x, format: D, multipleOf: w, exclusiveMaximum: N, exclusiveMinimum: C } = r._zod.bag;
            typeof D == "string" && D.includes("int") ? f.type = "integer" : f.type = "number", typeof C == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (f.minimum = C, f.exclusiveMinimum = !0) : f.exclusiveMinimum = C), typeof S == "number" && (f.minimum = S, typeof C == "number" && this.target !== "draft-4" && (C >= S ? delete f.minimum : delete f.exclusiveMinimum)), typeof N == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (f.maximum = N, f.exclusiveMaximum = !0) : f.exclusiveMaximum = N), typeof x == "number" && (f.maximum = x, typeof N == "number" && this.target !== "draft-4" && (N <= x ? delete f.maximum : delete f.exclusiveMaximum)), typeof w == "number" && (f.multipleOf = w);
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
            const x = new Set(Object.keys(S)), D = new Set([...x].filter((w) => {
              const N = o.shape[w]._zod;
              return this.io === "input" ? N.optin === void 0 : N.optout === void 0;
            }));
            D.size > 0 && (f.required = Array.from(D)), o.catchall?._zod.def.type === "never" ? f.additionalProperties = !1 : o.catchall ? o.catchall && (f.additionalProperties = this.process(o.catchall, {
              ...b,
              path: [...b.path, "additionalProperties"]
            })) : this.io === "output" && (f.additionalProperties = !1);
            break;
          }
          case "union": {
            const f = p, S = o.options.map((x, D) => this.process(x, {
              ...b,
              path: [...b.path, "anyOf", D]
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
            }), D = (N) => "allOf" in N && Object.keys(N).length === 1, w = [
              ...D(S) ? S.allOf : [S],
              ...D(x) ? x.allOf : [x]
            ];
            f.allOf = w;
            break;
          }
          case "tuple": {
            const f = p;
            f.type = "array";
            const S = this.target === "draft-2020-12" ? "prefixItems" : "items", x = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", D = o.items.map((O, j) => this.process(O, {
              ...b,
              path: [...b.path, S, j]
            })), w = o.rest ? this.process(o.rest, {
              ...b,
              path: [...b.path, x, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (f.prefixItems = D, w && (f.items = w)) : this.target === "openapi-3.0" ? (f.items = {
              anyOf: D
            }, w && f.items.anyOf.push(w), f.minItems = D.length, w || (f.maxItems = D.length)) : (f.items = D, w && (f.additionalItems = w));
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
            }, { minimum: x, maximum: D, mime: w } = r._zod.bag;
            x !== void 0 && (S.minLength = x), D !== void 0 && (S.maxLength = D), w ? w.length === 1 ? (S.contentMediaType = w[0], Object.assign(f, S)) : f.anyOf = w.map((N) => ({ ...S, contentMediaType: N })) : Object.assign(f, S);
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
    return v && Object.assign(m.schema, v), this.io === "input" && St(r) && (delete m.schema.examples, delete m.schema.default), this.io === "input" && m.schema._prefault && ((l = m.schema).default ?? (l.default = m.schema._prefault)), delete m.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, i) {
    const l = {
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
      if (l.external) {
        const S = l.external.registry.get(_[0])?.id, x = l.external.uri ?? ((w) => w);
        if (S)
          return { ref: x(S) };
        const D = _[1].defId ?? _[1].schema.id ?? `schema${this.counter++}`;
        return _[1].defId = D, { defId: D, ref: `${x("__shared")}#/${b}/${D}` };
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
    if (l.cycles === "throw")
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
      if (l.external) {
        const p = l.external.registry.get(_[0])?.id;
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
      if (b.count > 1 && l.reused === "ref") {
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
    if (this.target === "draft-2020-12" ? g.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? g.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? g.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), l.external?.uri) {
      const _ = l.external.registry.get(r)?.id;
      if (!_)
        throw new Error("Schema is missing an `id` property");
      g.$id = l.external.uri(_);
    }
    Object.assign(g, o.def);
    const v = l.external?.defs ?? {};
    for (const _ of this.seen.entries()) {
      const b = _[1];
      b.def && b.defId && (v[b.defId] = b.def);
    }
    l.external || Object.keys(v).length > 0 && (this.target === "draft-2020-12" ? g.$defs = v : g.definitions = v);
    try {
      return JSON.parse(JSON.stringify(g));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function r3(n, r) {
  if (n instanceof $0) {
    const l = new xy(r), o = {};
    for (const m of n._idmap.entries()) {
      const [g, v] = m;
      l.process(v);
    }
    const c = {}, h = {
      registry: n,
      uri: r?.uri,
      defs: o
    };
    for (const m of n._idmap.entries()) {
      const [g, v] = m;
      c[g] = l.emit(v, {
        ...r,
        external: h
      });
    }
    if (Object.keys(o).length > 0) {
      const m = l.target === "draft-2020-12" ? "$defs" : "definitions";
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
const a3 = /* @__PURE__ */ J("ZodISODateTime", (n, r) => {
  RE.init(n, r), it.init(n, r);
});
function i3(n) {
  return zC(a3, n);
}
const l3 = /* @__PURE__ */ J("ZodISODate", (n, r) => {
  jE.init(n, r), it.init(n, r);
});
function s3(n) {
  return LC(l3, n);
}
const o3 = /* @__PURE__ */ J("ZodISOTime", (n, r) => {
  zE.init(n, r), it.init(n, r);
});
function u3(n) {
  return BC(o3, n);
}
const c3 = /* @__PURE__ */ J("ZodISODuration", (n, r) => {
  LE.init(n, r), it.init(n, r);
});
function f3(n) {
  return UC(c3, n);
}
const h3 = (n, r) => {
  U0.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (i) => wx(n, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => Cx(n, i)
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
}, Sn = J("ZodError", h3, {
  Parent: Error
}), d3 = /* @__PURE__ */ Zh(Sn), p3 = /* @__PURE__ */ Gh(Sn), m3 = /* @__PURE__ */ _u(Sn), g3 = /* @__PURE__ */ bu(Sn), v3 = /* @__PURE__ */ Tx(Sn), y3 = /* @__PURE__ */ Ox(Sn), _3 = /* @__PURE__ */ Nx(Sn), b3 = /* @__PURE__ */ Mx(Sn), S3 = /* @__PURE__ */ kx(Sn), x3 = /* @__PURE__ */ Rx(Sn), E3 = /* @__PURE__ */ jx(Sn), C3 = /* @__PURE__ */ zx(Sn), xt = /* @__PURE__ */ J("ZodType", (n, r) => (yt.init(n, r), n.def = r, n.type = r.type, Object.defineProperty(n, "_def", { value: r }), n.check = (...i) => n.clone(ba(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((l) => typeof l == "function" ? { _zod: { check: l, def: { check: "custom" }, onattach: [] } } : l)
  ]
})), n.clone = (i, l) => Zr(n, i, l), n.brand = () => n, n.register = ((i, l) => (i.add(n, l), n)), n.parse = (i, l) => d3(n, i, l, { callee: n.parse }), n.safeParse = (i, l) => m3(n, i, l), n.parseAsync = async (i, l) => p3(n, i, l, { callee: n.parseAsync }), n.safeParseAsync = async (i, l) => g3(n, i, l), n.spa = n.safeParseAsync, n.encode = (i, l) => v3(n, i, l), n.decode = (i, l) => y3(n, i, l), n.encodeAsync = async (i, l) => _3(n, i, l), n.decodeAsync = async (i, l) => b3(n, i, l), n.safeEncode = (i, l) => S3(n, i, l), n.safeDecode = (i, l) => x3(n, i, l), n.safeEncodeAsync = async (i, l) => E3(n, i, l), n.safeDecodeAsync = async (i, l) => C3(n, i, l), n.refine = (i, l) => n.check(d4(i, l)), n.superRefine = (i) => n.check(p4(i)), n.overwrite = (i) => n.check($l(i)), n.optional = () => Ay(n), n.nullable = () => Dy(n), n.nullish = () => Ay(Dy(n)), n.nonoptional = (i) => l4(n, i), n.array = () => Tn(n), n.or = (i) => $3([n, i]), n.and = (i) => J3(n, i), n.transform = (i) => Ty(n, e4(i)), n.default = (i) => r4(n, i), n.prefault = (i) => i4(n, i), n.catch = (i) => o4(n, i), n.pipe = (i) => Ty(n, i), n.readonly = () => f4(n), n.describe = (i) => {
  const l = n.clone();
  return jl.add(l, { description: i }), l;
}, Object.defineProperty(n, "description", {
  get() {
    return jl.get(n)?.description;
  },
  configurable: !0
}), n.meta = (...i) => {
  if (i.length === 0)
    return jl.get(n);
  const l = n.clone();
  return jl.add(l, i[0]), l;
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), W0 = /* @__PURE__ */ J("_ZodString", (n, r) => {
  Fh.init(n, r), xt.init(n, r);
  const i = n._zod.bag;
  n.format = i.format ?? null, n.minLength = i.minimum ?? null, n.maxLength = i.maximum ?? null, n.regex = (...l) => n.check(ZC(...l)), n.includes = (...l) => n.check(VC(...l)), n.startsWith = (...l) => n.check(YC(...l)), n.endsWith = (...l) => n.check(XC(...l)), n.min = (...l) => n.check(hu(...l)), n.max = (...l) => n.check(K0(...l)), n.length = (...l) => n.check(J0(...l)), n.nonempty = (...l) => n.check(hu(1, ...l)), n.lowercase = (l) => n.check(GC(l)), n.uppercase = (l) => n.check(FC(l)), n.trim = () => n.check($C()), n.normalize = (...l) => n.check(QC(...l)), n.toLowerCase = () => n.check(KC()), n.toUpperCase = () => n.check(JC());
}), w3 = /* @__PURE__ */ J("ZodString", (n, r) => {
  Fh.init(n, r), W0.init(n, r), n.email = (i) => n.check(pC(A3, i)), n.url = (i) => n.check(_C(D3, i)), n.jwt = (i) => n.check(jC(q3, i)), n.emoji = (i) => n.check(bC(T3, i)), n.guid = (i) => n.check(yy(Ey, i)), n.uuid = (i) => n.check(mC(Fo, i)), n.uuidv4 = (i) => n.check(gC(Fo, i)), n.uuidv6 = (i) => n.check(vC(Fo, i)), n.uuidv7 = (i) => n.check(yC(Fo, i)), n.nanoid = (i) => n.check(SC(O3, i)), n.guid = (i) => n.check(yy(Ey, i)), n.cuid = (i) => n.check(xC(N3, i)), n.cuid2 = (i) => n.check(EC(M3, i)), n.ulid = (i) => n.check(CC(k3, i)), n.base64 = (i) => n.check(MC(P3, i)), n.base64url = (i) => n.check(kC(I3, i)), n.xid = (i) => n.check(wC(R3, i)), n.ksuid = (i) => n.check(AC(j3, i)), n.ipv4 = (i) => n.check(DC(z3, i)), n.ipv6 = (i) => n.check(TC(L3, i)), n.cidrv4 = (i) => n.check(OC(B3, i)), n.cidrv6 = (i) => n.check(NC(U3, i)), n.e164 = (i) => n.check(RC(H3, i)), n.datetime = (i) => n.check(i3(i)), n.date = (i) => n.check(s3(i)), n.time = (i) => n.check(u3(i)), n.duration = (i) => n.check(f3(i));
});
function _n(n) {
  return dC(w3, n);
}
const it = /* @__PURE__ */ J("ZodStringFormat", (n, r) => {
  nt.init(n, r), W0.init(n, r);
}), A3 = /* @__PURE__ */ J("ZodEmail", (n, r) => {
  CE.init(n, r), it.init(n, r);
}), Ey = /* @__PURE__ */ J("ZodGUID", (n, r) => {
  xE.init(n, r), it.init(n, r);
}), Fo = /* @__PURE__ */ J("ZodUUID", (n, r) => {
  EE.init(n, r), it.init(n, r);
}), D3 = /* @__PURE__ */ J("ZodURL", (n, r) => {
  wE.init(n, r), it.init(n, r);
}), T3 = /* @__PURE__ */ J("ZodEmoji", (n, r) => {
  AE.init(n, r), it.init(n, r);
}), O3 = /* @__PURE__ */ J("ZodNanoID", (n, r) => {
  DE.init(n, r), it.init(n, r);
}), N3 = /* @__PURE__ */ J("ZodCUID", (n, r) => {
  TE.init(n, r), it.init(n, r);
}), M3 = /* @__PURE__ */ J("ZodCUID2", (n, r) => {
  OE.init(n, r), it.init(n, r);
}), k3 = /* @__PURE__ */ J("ZodULID", (n, r) => {
  NE.init(n, r), it.init(n, r);
}), R3 = /* @__PURE__ */ J("ZodXID", (n, r) => {
  ME.init(n, r), it.init(n, r);
}), j3 = /* @__PURE__ */ J("ZodKSUID", (n, r) => {
  kE.init(n, r), it.init(n, r);
}), z3 = /* @__PURE__ */ J("ZodIPv4", (n, r) => {
  BE.init(n, r), it.init(n, r);
}), L3 = /* @__PURE__ */ J("ZodIPv6", (n, r) => {
  UE.init(n, r), it.init(n, r);
}), B3 = /* @__PURE__ */ J("ZodCIDRv4", (n, r) => {
  PE.init(n, r), it.init(n, r);
}), U3 = /* @__PURE__ */ J("ZodCIDRv6", (n, r) => {
  IE.init(n, r), it.init(n, r);
}), P3 = /* @__PURE__ */ J("ZodBase64", (n, r) => {
  HE.init(n, r), it.init(n, r);
}), I3 = /* @__PURE__ */ J("ZodBase64URL", (n, r) => {
  ZE.init(n, r), it.init(n, r);
}), H3 = /* @__PURE__ */ J("ZodE164", (n, r) => {
  GE.init(n, r), it.init(n, r);
}), q3 = /* @__PURE__ */ J("ZodJWT", (n, r) => {
  VE.init(n, r), it.init(n, r);
}), e1 = /* @__PURE__ */ J("ZodNumber", (n, r) => {
  Y0.init(n, r), xt.init(n, r), n.gt = (l, o) => n.check(by(l, o)), n.gte = (l, o) => n.check(lh(l, o)), n.min = (l, o) => n.check(lh(l, o)), n.lt = (l, o) => n.check(_y(l, o)), n.lte = (l, o) => n.check(ih(l, o)), n.max = (l, o) => n.check(ih(l, o)), n.int = (l) => n.check(Cy(l)), n.safe = (l) => n.check(Cy(l)), n.positive = (l) => n.check(by(0, l)), n.nonnegative = (l) => n.check(lh(0, l)), n.negative = (l) => n.check(_y(0, l)), n.nonpositive = (l) => n.check(ih(0, l)), n.multipleOf = (l, o) => n.check(Sy(l, o)), n.step = (l, o) => n.check(Sy(l, o)), n.finite = () => n;
  const i = n._zod.bag;
  n.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), n.isFinite = !0, n.format = i.format ?? null;
});
function du(n) {
  return PC(e1, n);
}
const Z3 = /* @__PURE__ */ J("ZodNumberFormat", (n, r) => {
  YE.init(n, r), e1.init(n, r);
});
function Cy(n) {
  return IC(Z3, n);
}
const G3 = /* @__PURE__ */ J("ZodUnknown", (n, r) => {
  XE.init(n, r), xt.init(n, r);
});
function wy() {
  return HC(G3);
}
const F3 = /* @__PURE__ */ J("ZodNever", (n, r) => {
  QE.init(n, r), xt.init(n, r);
});
function V3(n) {
  return qC(F3, n);
}
const Y3 = /* @__PURE__ */ J("ZodArray", (n, r) => {
  $E.init(n, r), xt.init(n, r), n.element = r.element, n.min = (i, l) => n.check(hu(i, l)), n.nonempty = (i) => n.check(hu(1, i)), n.max = (i, l) => n.check(K0(i, l)), n.length = (i, l) => n.check(J0(i, l)), n.unwrap = () => n.element;
});
function Tn(n, r) {
  return WC(Y3, n, r);
}
const X3 = /* @__PURE__ */ J("ZodObject", (n, r) => {
  JE.init(n, r), xt.init(n, r), We(n, "shape", () => r.shape), n.keyof = () => Ch(Object.keys(n._zod.def.shape)), n.catchall = (i) => n.clone({ ...n._zod.def, catchall: i }), n.passthrough = () => n.clone({ ...n._zod.def, catchall: wy() }), n.loose = () => n.clone({ ...n._zod.def, catchall: wy() }), n.strict = () => n.clone({ ...n._zod.def, catchall: V3() }), n.strip = () => n.clone({ ...n._zod.def, catchall: void 0 }), n.extend = (i) => _x(n, i), n.safeExtend = (i) => bx(n, i), n.merge = (i) => Sx(n, i), n.pick = (i) => vx(n, i), n.omit = (i) => yx(n, i), n.partial = (...i) => xx(t1, n, i[0]), n.required = (...i) => Ex(n1, n, i[0]);
});
function ga(n, r) {
  const i = {
    type: "object",
    shape: n ?? {},
    ...me(r)
  };
  return new X3(i);
}
const Q3 = /* @__PURE__ */ J("ZodUnion", (n, r) => {
  WE.init(n, r), xt.init(n, r), n.options = r.options;
});
function $3(n, r) {
  return new Q3({
    type: "union",
    options: n,
    ...me(r)
  });
}
const K3 = /* @__PURE__ */ J("ZodIntersection", (n, r) => {
  eC.init(n, r), xt.init(n, r);
});
function J3(n, r) {
  return new K3({
    type: "intersection",
    left: n,
    right: r
  });
}
const Eh = /* @__PURE__ */ J("ZodEnum", (n, r) => {
  tC.init(n, r), xt.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const i = new Set(Object.keys(r.entries));
  n.extract = (l, o) => {
    const c = {};
    for (const h of l)
      if (i.has(h))
        c[h] = r.entries[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new Eh({
      ...r,
      checks: [],
      ...me(o),
      entries: c
    });
  }, n.exclude = (l, o) => {
    const c = { ...r.entries };
    for (const h of l)
      if (i.has(h))
        delete c[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new Eh({
      ...r,
      checks: [],
      ...me(o),
      entries: c
    });
  };
});
function Ch(n, r) {
  const i = Array.isArray(n) ? Object.fromEntries(n.map((l) => [l, l])) : n;
  return new Eh({
    type: "enum",
    entries: i,
    ...me(r)
  });
}
const W3 = /* @__PURE__ */ J("ZodTransform", (n, r) => {
  nC.init(n, r), xt.init(n, r), n._zod.parse = (i, l) => {
    if (l.direction === "backward")
      throw new M0(n.constructor.name);
    i.addIssue = (c) => {
      if (typeof c == "string")
        i.issues.push(Fl(c, i.value, r));
      else {
        const h = c;
        h.fatal && (h.continue = !1), h.code ?? (h.code = "custom"), h.input ?? (h.input = i.value), h.inst ?? (h.inst = n), i.issues.push(Fl(h));
      }
    };
    const o = r.transform(i.value, i);
    return o instanceof Promise ? o.then((c) => (i.value = c, i)) : (i.value = o, i);
  };
});
function e4(n) {
  return new W3({
    type: "transform",
    transform: n
  });
}
const t1 = /* @__PURE__ */ J("ZodOptional", (n, r) => {
  rC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Ay(n) {
  return new t1({
    type: "optional",
    innerType: n
  });
}
const t4 = /* @__PURE__ */ J("ZodNullable", (n, r) => {
  aC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Dy(n) {
  return new t4({
    type: "nullable",
    innerType: n
  });
}
const n4 = /* @__PURE__ */ J("ZodDefault", (n, r) => {
  iC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function r4(n, r) {
  return new n4({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : z0(r);
    }
  });
}
const a4 = /* @__PURE__ */ J("ZodPrefault", (n, r) => {
  lC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function i4(n, r) {
  return new a4({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : z0(r);
    }
  });
}
const n1 = /* @__PURE__ */ J("ZodNonOptional", (n, r) => {
  sC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function l4(n, r) {
  return new n1({
    type: "nonoptional",
    innerType: n,
    ...me(r)
  });
}
const s4 = /* @__PURE__ */ J("ZodCatch", (n, r) => {
  oC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function o4(n, r) {
  return new s4({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const u4 = /* @__PURE__ */ J("ZodPipe", (n, r) => {
  uC.init(n, r), xt.init(n, r), n.in = r.in, n.out = r.out;
});
function Ty(n, r) {
  return new u4({
    type: "pipe",
    in: n,
    out: r
    // ...util.normalizeParams(params),
  });
}
const c4 = /* @__PURE__ */ J("ZodReadonly", (n, r) => {
  cC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function f4(n) {
  return new c4({
    type: "readonly",
    innerType: n
  });
}
const h4 = /* @__PURE__ */ J("ZodCustom", (n, r) => {
  fC.init(n, r), xt.init(n, r);
});
function d4(n, r = {}) {
  return e3(h4, n, r);
}
function p4(n) {
  return t3(n);
}
function m4(n) {
  return JSON.stringify(ha(n), null, 2);
}
function g4(...n) {
  for (const r of n) if (r !== void 0) return r;
}
function v4(n) {
  return Array.isArray(n) ? n.find((r) => r !== "null") ?? n[0] : n;
}
function Oy(n, r) {
  let i = 0;
  return typeof n.minimum == "number" && i < n.minimum && (i = r ? Math.ceil(n.minimum) : n.minimum), typeof n.exclusiveMinimum == "number" && i <= n.exclusiveMinimum && (i = r ? Math.floor(n.exclusiveMinimum) + 1 : n.exclusiveMinimum + 1), typeof n.maximum == "number" && i > n.maximum && (i = r ? Math.floor(n.maximum) : n.maximum), typeof n.exclusiveMaximum == "number" && i >= n.exclusiveMaximum && (i = r ? Math.ceil(n.exclusiveMaximum) - 1 : n.exclusiveMaximum - 1), i;
}
function ha(n) {
  if (!n || typeof n != "object") return null;
  const r = Array.isArray(n.examples) ? n.examples[0] : void 0, i = g4(n.example, r, n.default);
  if (i !== void 0) return i;
  if (n.const !== void 0) return n.const;
  if (Array.isArray(n.enum) && n.enum.length) return n.enum[0];
  const l = Array.isArray(n.anyOf) ? n.anyOf[0] : Array.isArray(n.oneOf) ? n.oneOf[0] : void 0;
  if (l) return ha(l);
  switch (v4(n.type)) {
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
const Hl = "Max Response Tokens";
function Al(n) {
  return typeof n == "string" ? n.trim() !== "" : Array.isArray(n) && n.length > 0;
}
function Ny(n, r, i, l = !1) {
  r = typeof r == "string" ? r : "";
  const o = n?.choices?.[0], c = Array.isArray(n?.content) ? n.content : [], h = o?.finish_reason ?? n?.stop_reason ?? n?.candidates?.[0]?.finishReason ?? n?.finish_reason, m = l ? c.find((v) => v?.type === "tool_use") : void 0, g = Al(o?.message?.reasoning_content) || Al(o?.message?.reasoning) || Al(o?.reasoning) || Al(n?.thinking) || // Claude returns thinking blocks without text unless a summary is requested, so the block itself counts.
  c.some((v) => v?.type === "thinking" || v?.type === "redacted_thinking") || (n?.responseContent?.parts ?? []).some((v) => v?.thought && Al(v.text)) || Xl(r) !== r;
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
  return n.structured === void 0 && Xl(n.text).trim() === "";
}
function Yh(n) {
  return n.truncated && n.hasReasoning ? `The model used all ${n.maxTokens} response tokens on thinking and returned no answer. Raise "${Hl}" or turn thinking off.` : n.truncated ? `The model returned no answer before hitting the ${n.maxTokens}-token limit. Raise "${Hl}".` : n.finishReason === void 0 && n.hasReasoning ? `The model returned no answer, and SillyTavern didn't report why it stopped. If thinking used up all ${n.maxTokens} response tokens, raise "${Hl}" or turn thinking off.` : n.finishReason && !/^(stop|end_turn|stop_sequence|eos)$/i.test(n.finishReason) ? `The model returned an empty response (finish reason: ${n.finishReason}).` : "The model returned an empty response.";
}
function y4(n) {
  return `The response was ${a1(n)} at the ${n.maxTokens}-token limit, so it isn't complete JSON. Raise "${Hl}".`;
}
function r1(n) {
  return `The response was ${a1(n)} at the ${n.maxTokens}-token limit, so the text may be incomplete. Raise "${Hl}" for longer responses.`;
}
function a1(n) {
  return n.truncationEstimated ? "probably cut off" : "cut off";
}
function i1(n) {
  const r = n?.message || String(n), i = n?.cause;
  if (r === "API request failed" && i) {
    const l = i?.message || String(i);
    return l ? `${r}: ${l}` : r;
  }
  return r;
}
const My = ["role", "content", "name", "tool_calls", "tool_call_id"];
function _4(n, r) {
  const i = r === "openai" ? My : [...My, "ignoreInstruct"];
  return n.map(
    (l) => Object.fromEntries(
      Object.entries(l).filter(([o, c]) => i.includes(o) && c !== void 0)
    )
  );
}
const b4 = [
  "custom_url",
  "vertexai_region",
  "zai_endpoint",
  "siliconflow_endpoint",
  "minimax_endpoint",
  "pollinations_endpoint"
];
async function S4(n, r, i, l) {
  const { profile: o, preset: c, source: h } = r, m = n.ChatCompletionService;
  if (r.mainApi !== "openai" || !c || typeof m?.presetToGeneratePayload != "function")
    return;
  const g = m.createRequestData({
    stream: !1,
    messages: i,
    max_tokens: l,
    model: o.model,
    chat_completion_source: h,
    secret_id: o["secret-id"],
    custom_prompt_post_processing: o["prompt-post-processing"],
    ...Object.fromEntries(b4.map((_) => [_, o["api-url"]]))
  }), v = await m.presetToGeneratePayload(c, { chat_completion_source: h }, g);
  return o.proxy && (delete v.reverse_proxy, delete v.proxy_password), delete v.stop, v;
}
function ky(n, r, i) {
  const l = r?.["reasoning-template"];
  if (!l || typeof i != "string" || typeof n.getReasoningTemplateByName != "function" || typeof n.parseReasoningFromString != "function")
    return i;
  let o;
  try {
    o = n.getReasoningTemplateByName(l);
  } catch {
    return i;
  }
  const c = n.parseReasoningFromString(i, { strict: !0 }, o);
  return typeof c?.content == "string" ? c.content : i;
}
const x4 = /^(Response not OK|Got response status \d+|API request failed)$/i;
class l1 extends Error {
  constructor(r, i) {
    const l = i?.message === "API request failed" && i?.cause ? i.cause : i, o = l?.message || String(l), c = x4.test(o.trim()) ? ". SillyTavern didn't pass on the provider's reason; it's in the SillyTavern server console." : "", h = r?.model ? `${r?.name} (${r.model})` : r?.name;
    super(`${h ? `${h}: ` : ""}${o}${c}`, { cause: i }), this.name = "RequestError";
  }
}
function xu(n, r = SillyTavern.getContext()) {
  if (!n)
    throw new Error("No connection profile selected.");
  const i = r.ConnectionManagerRequestService, l = i.getProfile(n), o = i.validateProfile(l), c = o.selected, h = l.preset ? r.getPresetManager?.(c)?.getCompletionPresetByName(l.preset) : void 0;
  return { profile: l, mainApi: c, source: o.source, preset: h };
}
function E4(n) {
  const r = n.mainApi === "openai" ? n.preset?.openai_max_context : n.preset?.max_length;
  return typeof r == "number" && r > 0 ? r : void 0;
}
function s1(n, r, i = SillyTavern.getContext()) {
  return r.maxContextType === "custom" && r.maxContextValue > 0 ? r.maxContextValue : E4(n) ?? Number(i.maxContext);
}
async function pu(n, r, i, l = {}, o) {
  const c = SillyTavern.getContext(), h = c.ConnectionManagerRequestService, m = xu(n, c), { profile: g, mainApi: v } = m, _ = v !== "openai", b = _4(r, v), y = { stream: !1, signal: o, extractData: _ };
  let p = l, f;
  try {
    const x = await S4(c, m, b, i);
    x && (y.includePreset = !1, p = { ...x, ...l }), o?.throwIfAborted(), f = await h.sendRequest(n, b, i, y, p);
  } catch (x) {
    throw o?.aborted ? new DOMException("Request aborted by user", "AbortError") : new l1(g, x);
  }
  if (o?.aborted)
    throw new DOMException("Request aborted by user", "AbortError");
  let S;
  if (_) {
    const x = f?.content, D = typeof x == "string" ? x : "", w = ky(c, g, D);
    S = Ny({}, w, i), S = { ...S, structured: x !== null && typeof x == "object" ? x : void 0, hasReasoning: S.hasReasoning || !!f?.reasoning || w !== D };
  } else {
    const x = c.extractMessageFromData(f, v), D = ky(c, g, x);
    S = Ny(f, D, i, !!p.json_schema), S = { ...S, hasReasoning: S.hasReasoning || D !== x };
  }
  return w4(S, c);
}
const C4 = 0.9;
async function w4(n, r) {
  if (n.finishReason !== void 0 || !n.text || typeof r.getTokenCountAsync != "function")
    return n;
  try {
    if (await r.getTokenCountAsync(n.text) >= n.maxTokens * C4)
      return { ...n, truncated: !0, truncationEstimated: !0 };
  } catch (i) {
    console.warn("Could not count response tokens", i);
  }
  return n;
}
async function A4(n, r, i, l) {
  const o = await pu(n, r, i, {}, l);
  if (Vh(o))
    throw new Error(Yh(o));
  return o.truncated && Ae("warning", r1(o)), o.text;
}
class wh extends Error {
}
function Ry(n, r, i) {
  let l = n.structured;
  if (l === void 0) {
    if (Vh(n))
      throw new Error(Yh(n));
    try {
      l = NS(n.text);
    } catch (c) {
      throw n.truncated ? new Error(y4(n)) : (console.error("Raw response:", n.text), new wh(
        `Model response is not valid JSON (${c?.message ?? c}). ${mv(n.text)}`
      ));
    }
  }
  const o = r.safeParse(l);
  if (!o.success) {
    const c = o.error.issues;
    console.error("Zod validation failed:", c), console.error("Raw response:", n.text, "Parsed:", l);
    const h = c.slice(0, 3).map((g) => `${g.path.join(".") || "(root)"}: ${g.message}`).join("; "), m = n.structured !== void 0 ? JSON.stringify(n.structured) : n.text;
    throw new wh(
      `Model response failed schema validation for ${i} (${h}${c.length > 3 ? "; …" : ""}). ` + mv(m)
    );
  }
  return o.data;
}
const jy = /* @__PURE__ */ new Set();
function D4(n) {
  return `${n}:${xu(n).profile.model ?? ""}`;
}
async function T4(n, r, i, l, o, c) {
  const h = r3(i), m = D4(n);
  if (!jy.has(m))
    try {
      const f = await pu(
        n,
        r,
        o,
        { json_schema: { name: l, strict: !0, value: h } },
        c
      );
      return Ry(f, i, l);
    } catch (f) {
      if (!(f instanceof l1 || f instanceof wh))
        throw f;
      jy.add(m), console.warn("Native structured output failed, asking for JSON in the prompt instead:", f), Ae(
        "info",
        `Native structured output didn't work for this profile, so JSON is asked for in the prompt until the page is reloaded. ${f.message}`
      );
    }
  const g = vt.getSettings(), v = g.prompts.reviseJsonPrompt?.content;
  if (!v)
    throw new Error('The "Revise Session (JSON Mode)" prompt template is missing.');
  const _ = {
    example_response: m4(h),
    schema: JSON.stringify(h, null, 2)
  };
  let b;
  try {
    b = bi.compile(v, { noEscape: !0, strict: !0 })(_);
  } catch (f) {
    const S = g.prompts.reviseJsonPrompt?.label ?? "reviseJsonPrompt";
    throw new Error(
      `Failed to render the "${S}" prompt template: ${f?.message ?? f}. Available variables: ${Object.keys(_).join(", ")}.`
    );
  }
  const y = { role: "system", content: b }, p = await pu(n, [...r, y], o, {}, c);
  return Ry(p, i, l);
}
const On = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], ql = "alternate_greetings_";
function mu(n, r = {}) {
  const i = (h, m, g) => ({
    id: h,
    label: m.label,
    value: m.value,
    group: g
  }), l = On.filter((h) => n[h]).map((h) => i(h, n[h], "core")), o = Object.keys(n).filter((h) => h.startsWith(ql)).sort((h, m) => parseInt(h.slice(ql.length)) - parseInt(m.slice(ql.length))).map((h) => i(h, n[h], "alternate_greetings")), c = Object.entries(r).map(([h, m]) => i(h, m, "draft"));
  return [...l, ...o, ...c];
}
function O4(n, r, i = {}) {
  return i[n]?.label || r[n]?.label || n;
}
function N4(n, r, i) {
  if (!i)
    return n;
  const l = r.startsWith(ql);
  return Object.fromEntries(
    Object.entries(n).filter(([o]) => {
      const c = o.startsWith(ql);
      return l ? !(c && o !== r || o === "first_mes") : !c;
    })
  );
}
function M4(n, r) {
  let i = 0, l = r;
  switch (n.type) {
    case "none":
      return null;
    case "first":
      l = Math.min(r, n.first ?? 10);
      break;
    case "last":
      i = Math.max(0, r - (n.last ?? 10));
      break;
    case "range":
      i = Math.max(0, n.range?.start ?? 0), l = Math.min(r, (n.range?.end ?? 10) + 1);
      break;
  }
  return i < l ? [i, l] : null;
}
async function k4(n, r, i) {
  const l = [];
  let o = 0;
  for (let c = n.length - 1; c >= 0 && (o += await i(n[c].content), !(o > r)); c--)
    l.unshift(n[c]);
  return { messages: l, dropped: n.length - l.length };
}
function R4(n, [r, i], { includeNames: l, regex: o }) {
  const c = [];
  for (let h = r; h < i; h++) {
    const m = n[h];
    if (!m || m.is_system || typeof m.mes != "string")
      continue;
    const g = o(m.mes, !!m.is_user, n.length - h - 1);
    g.trim() && c.push({
      role: m.is_user ? "user" : "assistant",
      content: l && m.name ? `${m.name}: ${g}` : g
    });
  }
  return c;
}
async function o1(n, r, {
  selection: i,
  contextSize: l,
  maxResponseTokens: o
}) {
  if (r === -1)
    return n;
  const c = n.slice(0, r), h = n.slice(r + 1), m = SillyTavern.getContext(), g = m.chat ?? [], v = or !== void 0 || ma ? M4(i, g.length) : null;
  if (!v)
    return [...c, ...h];
  const _ = async (S) => S ? await m.getTokenCountAsync(S) : 0;
  let b = 0;
  for (const S of [...c, ...h])
    b += await _(typeof S.content == "string" ? S.content : "");
  const y = l - o - b, p = R4(g, v, {
    includeNames: !!ma,
    regex: (S, x, D) => Qb(S, x ? Ig.USER_INPUT : Ig.AI_OUTPUT, {
      isPrompt: !0,
      depth: D
    })
  }), f = await k4(p, y, _);
  return f.dropped > 0 && Ae("warning", j4(f.messages.length, p.length, l)), [...c, ...f.messages, ...h];
}
function j4(n, r, i) {
  const l = 'Raise "Max Context Tokens" or lower "Max Response Tokens" to send more.';
  return n === 0 ? `No chat messages were sent: none of the ${r} fit in the ${i}-token context after the response tokens and the other prompts. ${l}` : `Only the last ${n} of ${r} chat messages fit in the ${i}-token context, so the older ones were left out. ${l}`;
}
const Pn = SillyTavern.getContext(), sr = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
}, z4 = "Continue the current text of the {{targetField}} field from exactly where it stops. Output only the new text that comes after it. Do not repeat, rewrite or summarize the existing text.";
new Yy("dumb", {}).getSettings();
async function L4({
  profileId: n,
  userPrompt: r,
  messageSelection: i,
  continueFrom: l,
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
  p.char = gt(o.fields.name.value) || "{{char}}", p.user = v && Ug ? Ug : "{{user}}", p.persona = "{{persona}}", p.targetField = b, p.targetLabel = gt(O4(b, o.fields, o.draftFields)), p.userInstructions = gt(r.trim()), p.fieldSpecificInstructions = gt(
    o.draftFields[b]?.prompt ?? o.fields[b]?.prompt
  );
  {
    const D = [];
    o.selectedCharacterIndexes.forEach((w) => {
      const N = parseInt(w), C = c[N];
      C && D.push(C);
    }), p.characters = gt(D);
  }
  {
    const D = {};
    Object.entries(h).filter(
      ([w, N]) => N.length > 0 && o.selectedWorldNames.includes(w) && N.some((C) => !C.disable)
    ).forEach(([w, N]) => {
      D[w] = N.filter((C) => !C.disable);
    }), p.lorebooks = gt(D);
  }
  {
    const D = {}, w = {}, N = {}, C = vt.getSettings().contextToSend.dontSendOtherGreetings, O = N4(o.fields, b, C);
    Object.entries(O).forEach(([R, Z]) => {
      On.includes(R) ? D[Z.label] = Z.value : R.startsWith("alternate_greetings_") && (w[R] = Z.value);
    }), Object.entries(o.draftFields || {}).forEach(([R, Z]) => {
      N[Z.label] = Z.value;
    });
    const j = {};
    Object.keys(D).length > 0 && (j.core = D), Object.keys(w).length > 0 && (j.alternate_greetings = w), Object.keys(N).length > 0 && (j.draft = N), p.fields = gt(j), p.fieldList = gt(mu(O, o.draftFields));
  }
  let f = [], S = -1;
  {
    for (const D of g) {
      if (D.promptName === "chatHistory") {
        S = f.length, f.push({ role: "system", content: "" });
        continue;
      }
      let w = structuredClone(p);
      D.promptName === "stDescription" && (w.char = "{{char}}", w.user = "{{user}}");
      const N = m[D.promptName];
      if (!N)
        continue;
      const C = {
        role: D.role,
        content: Zl(N.content, w, Pn.substituteParams)
      };
      C.content && f.push(C);
    }
    l && (f.push({
      role: "user",
      content: bi.compile(z4, { noEscape: !0 })(p)
    }), f.push({
      role: "assistant",
      content: l.trim()
    }));
  }
  f = await o1(f, S, {
    selection: i,
    contextSize: s1(y, vt.getSettings()),
    maxResponseTokens: _
  });
  const x = await pu(n, f, _);
  if (Vh(x) && (!l || x.truncated))
    throw new Error(Yh(x));
  if (x.truncated && Ae("warning", r1(x)), l) {
    const D = RS(l, x.text);
    return D.trim() === l.trim() ? (Ae("warning", "The model didn't add any text. Try again or use a different model."), l) : D;
  }
  return b0(x.text);
}
function B4(n, r) {
  const i = n.match(/\d+/g)?.map(Number) ?? [], l = r.match(/\d+/g)?.map(Number) ?? [];
  for (let o = 0; o < Math.max(i.length, l.length); o++) {
    const c = (i[o] ?? 0) - (l[o] ?? 0);
    if (c !== 0) return c;
  }
  return 0;
}
async function U4(n, r) {
  let i, l = n.formatVersion;
  for (; ; ) {
    const o = (h) => B4(h.to, l) > 0, c = r.find((h) => h.from === l && o(h)) ?? r.find((h) => h.from === "*" && o(h));
    if (!c) return i;
    i = await c.action(i ?? structuredClone(n)), i.formatVersion = c.to, l = c.to;
  }
}
function P4(n, r) {
  const i = { ...n.prompts };
  for (const [l, o] of Object.entries(r))
    i[l]?.isDefault && (i[l] = { ...i[l], content: o });
  return { ...n, prompts: i };
}
function I4(n) {
  const { outputFormat: r, defaultPromptEngineeringMode: i, ...l } = n, { xmlFormat: o, jsonFormat: c, reviseXmlPrompt: h, ...m } = n.prompts ?? {};
  return {
    ...l,
    maxContextType: n.maxContextType === "custom" ? "custom" : "profile",
    prompts: m
  };
}
function H4(n, r) {
  const { noneFormat: i, ...l } = n.prompts ?? {}, o = i?.content ?? r, c = /\{\{\{?\s*activeFormatInstructions\s*\}?\}\}/g;
  for (const [m, g] of Object.entries(l))
    typeof g?.content == "string" && g.content.match(c) && (l[m] = { ...g, content: g.content.replace(c, () => o) });
  l.outputFormatInstructions && (l.outputFormatInstructions = {
    ...l.outputFormatInstructions,
    isDefault: l.outputFormatInstructions.content === r
  });
  const h = Object.fromEntries(
    Object.entries(n.mainContextTemplatePresets ?? {}).map(([m, g]) => [
      m,
      { ...g, prompts: (g.prompts ?? []).filter((v) => v.promptName !== "noneFormat") }
    ])
  );
  return { ...n, prompts: l, mainContextTemplatePresets: h };
}
const pa = "SillyTavern-Character-Creator", Xh = "0.5.0", q4 = "F_1.13", u1 = {
  EXTENSION: "charCreator"
}, Z4 = [
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
], pt = {
  stDescription: tu,
  charDefinitions: bh,
  lorebookDefinitions: v0,
  worldInfoCharDefinition: y0,
  existingFieldDefinitions: Il,
  taskDescription: Bh,
  outputFormatInstructions: pi,
  personaDescription: ES,
  reviseJsonPrompt: CS,
  reviseTaskDescription: wS
}, c1 = {
  version: Xh,
  formatVersion: q4,
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
      content: pt.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: pt.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: pt.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    worldInfoCharDefinition: {
      content: pt.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: Il,
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
      content: pt.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: pt.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseTaskDescription: {
      content: pt.reviseTaskDescription,
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
function f1(n) {
  const i = n.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let l = !1;
  return i.map((o, c) => {
    const h = o.replace(/^\d+/, "");
    if (h) {
      const m = l ? `${h[0].toUpperCase()}${h.slice(1).toLowerCase()}` : h.toLowerCase();
      return l || (l = !0), m;
    }
    return "";
  }).join("");
}
const vt = new Yy(u1.EXTENSION, c1);
async function G4() {
  return new Promise((n, r) => {
    vt.initializeSettings({ strategy: [] }).then(
      () => U4(vt.getSettings(), [
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
                  content: pt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: pt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: pt.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                noneFormat: {
                  content: pi,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: pt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: Il,
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
                  content: pt.personaDescription,
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
                  content: pt.personaDescription,
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
                  content: pt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: pt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: pt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: Il,
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
            const l = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (l.prompts.stDescription.content = tu), l;
          }
        },
        {
          from: "F_1.7",
          to: "F_1.8",
          action(i) {
            const l = {
              ...i
            };
            return l.prompts || (l.prompts = {}), l.prompts.reviseJsonPrompt = {
              content: pt.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, l.prompts.reviseTaskDescription = {
              content: pt.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, i.prompts.charDefinitions.isDefault && (l.prompts.charDefinitions.content = bh), i.prompts.lorebookDefinitions.isDefault && (l.prompts.lorebookDefinitions.content = v0), i.prompts.existingFieldDefinitions.isDefault && (l.prompts.existingFieldDefinitions.content = Il), l;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(i) {
            const l = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (l.prompts.stDescription.content = tu), l;
          }
        },
        {
          from: "F_1.9",
          to: "F_1.10",
          action(i) {
            const l = {
              ...i
            };
            return i.prompts.charDefinitions.isDefault && (l.prompts.charDefinitions.content = bh), i.prompts.worldInfoCharDefinition.isDefault && (l.prompts.worldInfoCharDefinition.content = y0), l;
          }
        },
        {
          from: "F_1.10",
          to: "F_1.11",
          action(i) {
            return P4(i, {
              stDescription: tu,
              noneFormat: pi
            });
          }
        },
        {
          from: "F_1.11",
          to: "F_1.12",
          action(i) {
            return I4(i);
          }
        },
        {
          from: "F_1.12",
          to: "F_1.13",
          action(i) {
            return H4(i, pi);
          }
        }
      ])
    ).then((i) => {
      i && (Pn.extensionSettings[u1.EXTENSION] = { ...i, version: Xh }, vt.saveSettings()), n();
    }).catch((i) => {
      console.error(`[${pa}] Error initializing settings:`, i), Ae("error", `[${pa}] Failed to initialize settings: ${i.message}`), Pn.Popup.show.confirm(
        `[${pa}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((l) => {
        l && (vt.resetSettings(), Ae("success", `[${pa}] Settings reset. Reloading may be required.`), n());
      });
    });
  });
}
const ce = ({ children: n, className: r, overrideDefaults: i = !1, ...l }) => {
  const o = te.useMemo(() => {
    const c = [];
    return i || c.push("menu_button", "interactable"), c.push(r), c.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("button", { className: o, ...l, children: n });
}, h1 = ({ label: n, className: r, overrideDefaults: i = !1, type: l = "text", ...o }) => {
  const c = te.useMemo(() => {
    const h = [];
    return i || (l === "text" || l === "number" || l === "password" || l === "email" || l === "search") && h.push("text_pole"), h.push(r), h.filter(Boolean).join(" ");
  }, [i, r, l]);
  if (l === "checkbox") {
    const h = i ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ A.jsxs("label", { className: h, children: [
      /* @__PURE__ */ A.jsx("input", { type: "checkbox", ...o }),
      n && /* @__PURE__ */ A.jsx("span", { children: n })
    ] });
  }
  return /* @__PURE__ */ A.jsx("input", { type: l, className: c, ...o });
}, Si = ({ children: n, className: r, overrideDefaults: i = !1, ...l }) => {
  const o = te.useMemo(() => {
    const c = [];
    return i || c.push("text_pole"), c.push(r), c.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("select", { className: o, ...l, children: n });
}, bn = ({ children: n, className: r, overrideDefaults: i = !1, ...l }) => {
  const o = te.useMemo(() => {
    const c = [];
    return i || c.push("text_pole", "textarea_compact"), c.push(r), c.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("textarea", { className: o, ...l, children: n });
};
var F4 = Fy(), on = /* @__PURE__ */ ((n) => (n[n.TEXT = 1] = "TEXT", n[n.CONFIRM = 2] = "CONFIRM", n[n.INPUT = 3] = "INPUT", n[n.DISPLAY = 4] = "DISPLAY", n))(on || {}), Ur = /* @__PURE__ */ ((n) => (n[n.AFFIRMATIVE = 1] = "AFFIRMATIVE", n[n.NEGATIVE = 0] = "NEGATIVE", n[n.CANCELLED = null] = "CANCELLED", n))(Ur || {});
const V4 = SillyTavern.getContext(), yi = ({
  content: n,
  type: r,
  inputValue: i = "",
  options: l = {},
  preventEscape: o = !1,
  onComplete: c
}) => {
  var h;
  const m = te.useRef(null), g = te.useRef(null), [v, _] = te.useState(!1), [b, y] = te.useState(null), p = te.useRef(V4.uuidv4()), f = te.useRef({
    id: p.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  te.useEffect(() => {
    const w = m.current;
    if (!w) return;
    const N = (C) => {
      C.preventDefault(), o || S(Ur.CANCELLED);
    };
    return w.addEventListener("cancel", N), f.current.dlg = w, f.current.mainInput = g.current, li.util.popups.push(f.current), w.showModal || (w.classList.add("poly_dialog"), qg.registerDialog(w), new ResizeObserver((C) => {
      for (const O of C)
        qg.reposition(O.target);
    }).observe(w)), w.showModal(), zf(), () => {
      Hg(li.util.popups, f.current), zf(), w.removeEventListener("cancel", N);
    };
  }, []);
  const S = async (w) => {
    var N, C;
    let O = w;
    if (r === on.INPUT && (w >= Ur.AFFIRMATIVE ? O = (N = g.current) == null ? void 0 : N.value : w === Ur.NEGATIVE ? O = !1 : w === Ur.CANCELLED ? O = null : O = !1), (C = l.customInputs) != null && C.length) {
      const R = new Map(
        l.customInputs.map((Z) => {
          var W;
          const $ = (W = m.current) == null ? void 0 : W.querySelector(`#${Z.id}`);
          return [$.id, $.checked];
        })
      );
      f.current.inputResults = R;
    }
    if (f.current.result = w, f.current.value = O, l.onClosing && !await l.onClosing(f.current)) {
      _(!0), f.current.value = void 0, f.current.result = void 0, f.current.inputResults = void 0;
      return;
    }
    _(!1), li.util.lastResult = {
      value: O,
      result: w,
      inputResults: f.current.inputResults
    };
    const j = m.current;
    j && (j.setAttribute("closing", ""), zf(), V_(j, async () => {
      var R;
      if (j.close(), l.onClose && await l.onClose(f.current), Hg(li.util.popups, f.current), li.util.popups.length > 0) {
        const Z = (R = document.activeElement) == null ? void 0 : R.closest(".popup"), W = Z?.getAttribute("data-id"), $ = li.util.popups.find((Q) => Q.id === W);
        $ && $.lastFocus && $.lastFocus.focus();
      }
      c(O);
    }));
  }, x = (w) => {
    w.target instanceof HTMLElement && w.target !== m.current && (y(w.target), f.current.lastFocus = w.target);
  }, D = async (w) => {
  };
  return F4.createPortal(
    /* @__PURE__ */ A.jsx(
      "dialog",
      {
        ref: m,
        className: (() => {
          const w = ["popup"];
          return l.wide && w.push("wide_dialogue_popup"), l.wider && w.push("wider_dialogue_popup"), l.large && w.push("large_dialogue_popup"), l.transparent && w.push("transparent_dialogue_popup"), l.allowHorizontalScrolling && w.push("horizontal_scrolling_dialogue_popup"), l.allowVerticalScrolling && w.push("vertical_scrolling_dialogue_popup"), l.animation && w.push(`popup--animation-${l.animation}`), w.join(" ");
        })(),
        "data-id": p.current,
        onKeyDown: D,
        onFocus: x,
        children: /* @__PURE__ */ A.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ A.jsx("div", { className: "popup-content", children: n }),
          r === on.INPUT && /* @__PURE__ */ A.jsx(
            "textarea",
            {
              ref: g,
              className: "popup-input text_pole result-control auto-select",
              rows: l.rows ?? 1,
              defaultValue: i,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          l.customInputs && /* @__PURE__ */ A.jsx("div", { className: "popup-inputs", children: l.customInputs.map((w) => /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: w.id, children: [
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
            (h = l.customButtons) == null ? void 0 : h.map((w, N) => {
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
            r !== on.DISPLAY && l.okButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => S(Ur.AFFIRMATIVE),
                "data-result": "1",
                children: typeof l.okButton == "string" ? l.okButton : "OK"
              }
            ),
            r !== on.DISPLAY && l.cancelButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => S(Ur.NEGATIVE),
                "data-result": "0",
                children: typeof l.cancelButton == "string" ? l.cancelButton : "Cancel"
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
}, Dl = (n, r, i) => {
  if (!n || !n.api)
    return !1;
  const l = i[n.api];
  if (!l || !Object.hasOwn(r, l.selected))
    return !1;
  switch (l.selected) {
    case "openai":
      return !!l.source;
    case "textgenerationwebui":
      return !!l.type;
  }
  return !1;
}, ir = SillyTavern.getContext(), d1 = ({
  initialSelectedProfileId: n,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: l,
  onCreate: o,
  onUpdate: c,
  onDelete: h
}) => {
  const [m, g] = te.useState(n ?? ""), [v, _] = te.useState(Date.now()), { isEnabled: b, profiles: y, connectApiMap: p } = te.useMemo(() => {
    var x, D;
    return (x = ir.extensionSettings.disabledExtensions) != null && x.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((D = ir.extensionSettings.connectionManager) == null ? void 0 : D.profiles) ?? [],
      connectApiMap: ir.CONNECT_API_MAP
    };
  }, [v]);
  te.useEffect(() => {
    if (!b) return;
    const x = (N) => {
      Dl(N, r, p) && (_(Date.now()), o?.(N));
    }, D = (N, C) => {
      const O = Dl(N, r, p), j = Dl(C, r, p);
      (O || j) && _(Date.now()), c?.(N, C), m === N.id && !j && (g(""), l?.(void 0));
    }, w = (N) => {
      Dl(N, r, p) && (_(Date.now()), h?.(N), m === N.id && (g(""), l?.(void 0)));
    };
    return ir.eventSource.on("CONNECTION_PROFILE_CREATED", x), ir.eventSource.on("CONNECTION_PROFILE_UPDATED", D), ir.eventSource.on("CONNECTION_PROFILE_DELETED", w), () => {
      ir.eventSource.removeListener("CONNECTION_PROFILE_CREATED", x), ir.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", D), ir.eventSource.removeListener("CONNECTION_PROFILE_DELETED", w);
    };
  }, [b, m, r, p, l, o, c, h]);
  const f = te.useMemo(() => {
    if (!b) return [];
    const x = y.filter((w) => Dl(w, r, p)), D = {};
    for (const [w, N] of Object.entries(r))
      D[w] = { label: N, profiles: [] };
    for (const w of x) {
      const N = p[w.api];
      D[N.selected] && D[N.selected].profiles.push(w);
    }
    for (const w of Object.values(D))
      w.profiles.sort((N, C) => (N.name ?? "").localeCompare(C.name ?? ""));
    return Object.values(D).filter((w) => w.profiles.length > 0);
  }, [b, y, r, p]), S = te.useCallback(
    (x) => {
      const D = x.target.value;
      g(D);
      const w = y.find((N) => N.id === D);
      l?.(w);
    },
    [y, l]
  );
  return b ? /* @__PURE__ */ A.jsxs(Si, { value: m, onChange: S, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: i }),
    f.map((x) => /* @__PURE__ */ A.jsx("optgroup", { label: x.label, children: x.profiles.map((D) => /* @__PURE__ */ A.jsx("option", { value: D.id, children: D.name }, D.id)) }, x.label))
  ] }) : /* @__PURE__ */ A.jsx(Si, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, Y4 = nu.memo(
  ({ item: n, showToggleButton: r, showDeleteButton: i, showSelectInput: l, onToggle: o, onDelete: c, onSelectChange: h }) => {
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
    }, D = { cursor: "pointer", flexShrink: 0 }, w = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
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
      l && y && p && /* @__PURE__ */ A.jsx(
        Si,
        {
          value: S,
          onChange: (N) => h(m, N.target.value),
          disabled: !v,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: f.length === 0 ? /* @__PURE__ */ A.jsx("option", { disabled: !0, children: "--" }) : f.map((N) => /* @__PURE__ */ A.jsx("option", { value: N.value, children: N.label }, N.value))
        }
      ),
      l && (!y || !p) && /* @__PURE__ */ A.jsx("span", { style: w }),
      r && b && /* @__PURE__ */ A.jsx(
        ce,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${v ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...D,
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
            ...D,
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
), X4 = ({
  items: n,
  onItemsChange: r,
  showToggleButton: i = !1,
  showDeleteButton: l = !1,
  showSelectInput: o = !1,
  sortableJsOptions: c = {}
}) => {
  const h = te.useRef(null), m = te.useRef(null);
  te.useEffect(() => (h.current && (m.current = Ee.create(h.current, {
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
    Y4,
    {
      item: b,
      showToggleButton: i,
      showDeleteButton: l,
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
  placeholder: l = "Select items...",
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
  const [f, S] = te.useState(!1), [x, D] = te.useState(""), w = te.useRef(null);
  te.useEffect(() => {
    const R = (Z) => {
      w.current && !w.current.contains(Z.target) && S(!1);
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, []), te.useEffect(() => {
    f || D("");
  }, [f]);
  const N = te.useMemo(() => {
    if (!g) return null;
    const R = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...b
    };
    return new xi(n, R);
  }, [n, g, b]), C = te.useMemo(() => !g || !x.trim() || !N ? n : N.search(x.trim()).map((R) => R.item), [n, x, g, N]), O = async (R) => {
    let Z;
    c ? Z = r.includes(R) ? r.filter((W) => W !== R) : [...r, R] : Z = r.includes(R) ? [] : [R], !(m && !await Promise.resolve(m(r, Z))) && (i(Z), o && S(!1));
  }, j = te.useMemo(() => {
    var R;
    return r.length === 0 ? l : r.length === 1 ? ((R = n.find((Z) => Z.value === r[0])) == null ? void 0 : R.label) ?? r[0] : `${r.length} items selected`;
  }, [r, n, l]);
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
              /* @__PURE__ */ A.jsx("span", { className: "fancy-dropdown-trigger-text", children: j }),
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
                    h1,
                    {
                      type: "text",
                      placeholder: v,
                      value: x,
                      onChange: (R) => D(R.target.value),
                      autoFocus: !0,
                      className: y
                    }
                  )
                }
              ),
              /* @__PURE__ */ A.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: C.length > 0 ? C.map((R) => /* @__PURE__ */ A.jsx(
                Q4,
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
}, Q4 = nu.memo(({ item: n, isSelected: r, onClick: i }) => {
  const [l, o] = te.useState(!1);
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
        backgroundColor: r ? "var(--accent-color-bg, var(--link-color))" : l ? "var(--hover-color, var(--white20a))" : "transparent"
      },
      children: [
        /* @__PURE__ */ A.jsx("span", { children: n.label }),
        r && /* @__PURE__ */ A.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), sh = SillyTavern.getContext(), Ah = ({
  value: n,
  items: r,
  readOnlyValues: i = [],
  label: l,
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
  const p = te.useMemo(() => r.find((w) => w.value === n), [r, n]), f = te.useCallback((w) => w ? i.includes(w) : !1, [i]), S = async () => {
    const w = await sh.Popup.show.input(
      `Create a new ${l}`,
      `Please enter a name for the new ${l}:`,
      ""
    );
    if (!w || w.trim() === "") return;
    const N = w.trim();
    if (r.some((O) => O.value === N)) {
      await Ae("warning", `A ${l} with this name already exists.`);
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
      await Ae("warning", `Please select a ${l} to rename.`);
      return;
    }
    if (f(p.value)) {
      await Ae("warning", `This ${l} cannot be renamed as it is read-only.`);
      return;
    }
    const w = await sh.Popup.show.input(
      `Rename ${l}`,
      `Please enter a new name for "${p.label}":`,
      p.label
    );
    if (!w || w.trim() === "" || w.trim() === p.value) return;
    const N = w.trim();
    if (r.some((j) => j.value === N)) {
      await Ae("warning", `A ${l} with this name already exists.`);
      return;
    }
    let C = { value: N, label: N };
    if (_) {
      const j = await Promise.resolve(_(p.value, N));
      if (!j.confirmed) return;
      j.value && (typeof j.value == "string" ? C = { value: j.value, label: j.value } : C = j.value);
    }
    const O = r.map((j) => j.value === p.value ? C : j);
    c(O), o(C.value, n);
  }, D = async () => {
    var w;
    if (!p) {
      await Ae("warning", `Please select a ${l} to delete.`);
      return;
    }
    if (f(p.value)) {
      await Ae("warning", `This ${l} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await sh.Popup.show.confirm(
      `Delete ${l}`,
      `Are you sure you want to delete "${p.label}"?`
    ) || b && !await Promise.resolve(b(p.value)))
      return;
    const N = r.findIndex((j) => j.value === p.value), C = r.filter((j) => j.value !== p.value);
    c(C);
    let O;
    if (C.length > 0) {
      const j = Math.min(N, C.length - 1);
      O = (w = C[j]) == null ? void 0 : w.value;
    }
    o(O, n);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ A.jsx(Si, { value: n ?? "", onChange: (w) => o(w.target.value, n), children: r.map((w) => /* @__PURE__ */ A.jsx("option", { value: w.value, children: w.label }, w.value)) }),
    h && /* @__PURE__ */ A.jsx(
      ce,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${l}`,
        onClick: S,
        "data-i18n": `[title]Create a new ${l}`
      }
    ),
    m && /* @__PURE__ */ A.jsx(
      ce,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${l}`,
        onClick: x,
        disabled: !p,
        "data-i18n": `[title]Rename selected ${l}`
      }
    ),
    g && /* @__PURE__ */ A.jsx(
      ce,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${l}`,
        onClick: D,
        disabled: !p,
        "data-i18n": `[title]Delete selected ${l}`
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
}, lr = "chatHistory";
function zy(n, r) {
  return n.prompts.some((i) => i.promptName === r) ? n : { ...n, prompts: [{ promptName: r, enabled: !1, role: "system" }, ...n.prompts] };
}
function p1(n, r) {
  return { ...n, prompts: n.prompts.filter((i) => i.promptName !== r) };
}
function $4(n, r) {
  return Object.fromEntries(Object.entries(n).map(([i, l]) => [i, p1(l, r)]));
}
function K4(n, r) {
  const i = n || "prompt";
  let l = i;
  for (let o = 2; r.includes(l) || l === lr; o++)
    l = `${i}${o}`;
  return l;
}
const m1 = () => {
  const [, n] = te.useState(0);
  return te.useCallback(() => {
    n((i) => i + 1);
  }, []);
}, Yo = SillyTavern.getContext(), Ly = "Chat History", J4 = [
  { value: "system", label: "System" },
  { value: "user", label: "User" },
  { value: "assistant", label: "Assistant" }
], oh = {
  user: { icon: "fa-user", title: "Sent as User" },
  assistant: { icon: "fa-robot", title: "Sent as Assistant" }
}, Tl = (n) => Z4.includes(n), W4 = () => {
  const n = m1(), r = vt.getSettings(), [i, l] = te.useState(lr), [o, c] = te.useState(null), h = te.useRef(null);
  te.useEffect(() => {
    o && h.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [o?.promptName, !!o]);
  const m = te.useCallback(
    (I) => {
      const le = vt.getSettings();
      I(le), vt.saveSettings(), n();
    },
    [n]
  ), g = (I) => I === lr ? Ly : r.prompts[I]?.label ?? I, v = (I) => {
    m((le) => {
      const M = le.mainContextTemplatePresets[le.mainContextTemplatePreset];
      M && (le.mainContextTemplatePresets = {
        ...le.mainContextTemplatePresets,
        [le.mainContextTemplatePreset]: I(M)
      });
    });
  }, _ = te.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((I) => ({ value: I, label: I })),
    [r.mainContextTemplatePresets]
  ), b = te.useMemo(
    () => [
      { value: lr, label: Ly },
      ...Object.entries(r.prompts).map(([I, le]) => ({ value: I, label: le.label || I })).sort((I, le) => I.label.localeCompare(le.label))
    ],
    [r.prompts]
  ), y = b.some((I) => I.value === i) ? i : lr, p = r.mainContextTemplatePresets[r.mainContextTemplatePreset], f = (I) => I ? p?.prompts.find((le) => le.promptName === I) : void 0;
  te.useEffect(() => {
    c((I) => I?.promptName ? { ...I, role: f(I.promptName)?.role ?? I.role } : I);
  }, [r.mainContextTemplatePreset]);
  const S = (I) => {
    m((le) => {
      le.mainContextTemplatePreset = I ?? "default";
    });
  }, x = (I) => {
    m((le) => {
      const M = {};
      I.forEach((F) => {
        M[F.value] = le.mainContextTemplatePresets[F.value] ?? structuredClone(
          le.mainContextTemplatePresets[le.mainContextTemplatePreset] ?? le.mainContextTemplatePresets.default
        );
      }), le.mainContextTemplatePresets = M;
    });
  }, D = (I) => {
    v((le) => ({
      ...le,
      prompts: I.map((M) => {
        const F = le.prompts.find((re) => re.promptName === M.id);
        return { promptName: M.id, enabled: M.enabled, role: F?.role ?? "system" };
      })
    }));
  }, w = (I) => {
    v((le) => ({
      ...le,
      prompts: le.prompts.map((M) => M.promptName === I ? { ...M, enabled: !M.enabled } : M)
    }));
  }, N = async () => {
    const I = r.mainContextTemplatePreset;
    await Yo.Popup.show.confirm(
      "Restore default",
      `Reset "${I}" to the default prompt list?`
    ) && v(() => structuredClone(c1.mainContextTemplatePresets.default));
  }, C = () => {
    v((I) => zy(I, y));
  }, O = async () => {
    const I = y;
    I === lr || Tl(I) || !await Yo.Popup.show.confirm(
      "Delete prompt",
      `Are you sure you want to delete "${g(I)}"?`
    ) || (m((M) => {
      const { [I]: F, ...re } = M.prompts;
      M.prompts = re, M.mainContextTemplatePresets = $4(M.mainContextTemplatePresets, I);
    }), o?.promptName === I && c(null));
  }, j = (I) => {
    const le = I ? r.prompts[I] : void 0;
    return {
      promptName: I,
      label: le?.label ?? "",
      content: le?.content ?? "",
      // A new prompt goes into the current template
      role: I ? f(I)?.role : "system"
    };
  }, R = (I) => {
    if (!I.promptName) return I.label.trim() !== "" || I.content !== "";
    const le = r.prompts[I.promptName], M = f(I.promptName);
    return I.label !== le?.label || I.content !== le?.content || !!M && I.role !== M.role;
  }, Z = async () => !o || !R(o) || !!await Yo.Popup.show.confirm(
    "Unsaved changes",
    `Discard your changes to "${o.label.trim() || "the new prompt"}"?`
  ), W = async (I) => {
    o && o.promptName === I || await Z() && c(j(I));
  }, $ = async () => {
    await Z() && c(null);
  }, Q = () => {
    if (!o) return;
    const I = !!o.promptName && Tl(o.promptName), le = o.label.trim();
    if (!I) {
      if (!le) {
        Ae("error", "Enter a name for the prompt.");
        return;
      }
      if (Object.entries(r.prompts).some(
        ([re, se]) => re !== o.promptName && se.label.toLowerCase() === le.toLowerCase()
      )) {
        Ae("error", `A prompt named "${le}" already exists.`);
        return;
      }
    }
    const M = o.promptName ?? K4(f1(le), Object.keys(r.prompts));
    m((F) => {
      F.prompts = {
        ...F.prompts,
        [M]: {
          label: I ? F.prompts[M].label : le,
          content: o.content,
          isDefault: I ? pt[M] === o.content : !1
        }
      };
      const re = F.mainContextTemplatePresets[F.mainContextTemplatePreset];
      if (re) {
        const se = o.promptName ? re : zy(re, M);
        F.mainContextTemplatePresets = {
          ...F.mainContextTemplatePresets,
          [F.mainContextTemplatePreset]: {
            ...se,
            prompts: se.prompts.map(
              (he) => he.promptName === M && o.role ? { ...he, role: o.role } : he
            )
          }
        };
      }
    }), o.promptName || l(M), c(null);
  }, ee = () => {
    !o?.promptName || !Tl(o.promptName) || c({ ...o, content: pt[o.promptName] });
  }, fe = async () => {
    await Yo.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (vt.resetSettings(), c(null), n(), Ae("success", "Settings have been reset."));
  }, pe = y !== lr && !Tl(y), ye = () => {
    if (!o) return null;
    const I = !!o.promptName && Tl(o.promptName), le = !o.promptName || !!f(o.promptName);
    return /* @__PURE__ */ A.jsxs("div", { className: "charCreator_promptEditor", ref: h, children: [
      !I && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("label", { className: "charCreator_settingsLabel", children: "Name" }),
        /* @__PURE__ */ A.jsx(
          h1,
          {
            type: "text",
            value: o.label,
            autoFocus: !o.promptName,
            onChange: (M) => c({ ...o, label: M.target.value })
          }
        )
      ] }),
      le && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("label", { className: "charCreator_settingsLabel", children: "Role" }),
        /* @__PURE__ */ A.jsx(
          Si,
          {
            value: o.role ?? "system",
            onChange: (M) => c({ ...o, role: M.target.value }),
            children: J4.map((M) => /* @__PURE__ */ A.jsx("option", { value: M.value, children: M.label }, M.value))
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx("label", { className: "charCreator_settingsLabel", children: "Prompt" }),
      /* @__PURE__ */ A.jsx(
        bn,
        {
          value: o.content,
          onChange: (M) => c({ ...o, content: M.target.value }),
          placeholder: "Prompt text",
          rows: 14,
          style: { width: "100%" }
        }
      ),
      /* @__PURE__ */ A.jsxs("div", { className: "charCreator_promptEditorButtons", children: [
        I && /* @__PURE__ */ A.jsxs(ce, { title: "Put the default text in the editor", onClick: ee, children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-undo" }),
          " Restore default"
        ] }),
        /* @__PURE__ */ A.jsxs("span", { className: "charCreator_promptEditorActions", children: [
          /* @__PURE__ */ A.jsx(ce, { onClick: $, children: "Cancel" }),
          /* @__PURE__ */ A.jsxs(ce, { onClick: Q, disabled: !R(o), children: [
            /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-floppy-disk" }),
            " Save"
          ] })
        ] })
      ] })
    ] });
  }, H = !!f(o?.promptName), ne = (p?.prompts ?? []).map((I) => {
    const le = I.promptName === lr, M = le || !!r.prompts[I.promptName], F = g(I.promptName), re = H && o?.promptName === I.promptName;
    return {
      id: I.promptName,
      enabled: I.enabled,
      // The whole row is drawn here (toggle included), so the editor can open under it
      label: /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsxs("div", { className: `charCreator_promptRow${I.enabled ? "" : " charCreator_promptRowOff"}`, children: [
          /* @__PURE__ */ A.jsxs("span", { className: "charCreator_promptName", title: F, children: [
            /* @__PURE__ */ A.jsx("span", { className: "charCreator_promptNameText", children: F }),
            !le && oh[I.role] && /* @__PURE__ */ A.jsx(
              "span",
              {
                className: `charCreator_promptRole fa-xs fa-solid ${oh[I.role].icon}`,
                title: oh[I.role].title
              }
            )
          ] }),
          /* @__PURE__ */ A.jsx(
            ce,
            {
              overrideDefaults: !0,
              className: "charCreator_promptAction caution fa-solid fa-chain-broken",
              title: "Remove from this template",
              onClick: () => v((se) => p1(se, I.promptName))
            }
          ),
          M && !le ? (
            // While the editor is open under the row, the same button closes it
            /* @__PURE__ */ A.jsx(
              ce,
              {
                overrideDefaults: !0,
                className: `charCreator_promptAction fa-solid ${re ? "fa-xmark" : "fa-pencil"}`,
                title: re ? "Close editor" : "Edit prompt",
                onClick: () => re ? $() : W(I.promptName)
              }
            )
          ) : /* @__PURE__ */ A.jsx("span", { className: "charCreator_promptAction" }),
          /* @__PURE__ */ A.jsx(
            ce,
            {
              overrideDefaults: !0,
              className: `charCreator_promptAction charCreator_promptToggle fa-solid ${I.enabled ? "fa-toggle-on" : "fa-toggle-off"}`,
              title: I.enabled ? "Switch off" : "Switch on",
              onClick: () => w(I.promptName)
            }
          )
        ] }),
        re && ye()
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
          onChange: S,
          onItemsChange: x,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx("label", { className: "charCreator_settingsLabel", children: "Prompts" }),
      /* @__PURE__ */ A.jsxs("div", { className: "charCreator_promptBar", children: [
        /* @__PURE__ */ A.jsx(Si, { value: y, onChange: (I) => l(I.target.value), children: b.map((I) => /* @__PURE__ */ A.jsx("option", { value: I.value, children: I.label }, I.value)) }),
        /* @__PURE__ */ A.jsx(ce, { className: "fa-solid fa-chain", title: "Insert prompt", onClick: C }),
        /* @__PURE__ */ A.jsx(
          ce,
          {
            className: "fa-solid fa-pencil",
            title: "Edit prompt",
            disabled: y === lr,
            onClick: () => W(y)
          }
        ),
        /* @__PURE__ */ A.jsx(
          ce,
          {
            className: "caution fa-solid fa-x",
            title: "Delete prompt",
            disabled: !pe,
            onClick: O
          }
        ),
        /* @__PURE__ */ A.jsx(
          ce,
          {
            className: "fa-solid fa-undo",
            title: "Reset this template to the default prompt list",
            onClick: N
          }
        ),
        /* @__PURE__ */ A.jsx(ce, { className: "fa-solid fa-plus-square", title: "New prompt", onClick: () => W() })
      ] }),
      !H && ye(),
      /* @__PURE__ */ A.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(X4, { items: ne, onItemsChange: D }) })
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", style: { marginTop: "15px" }, children: [
      /* @__PURE__ */ A.jsx(
        "input",
        {
          type: "checkbox",
          checked: r.showSaveAsWorldInfoEntry.show,
          onChange: (I) => m((le) => {
            le.showSaveAsWorldInfoEntry.show = I.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ A.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ A.jsxs(ce, { className: "danger_button", style: { width: "auto" }, onClick: fe, children: [
      /* @__PURE__ */ A.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, By = ({
  fieldId: n,
  label: r,
  value: i,
  prompt: l,
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
    /* @__PURE__ */ A.jsx(bn, { value: i, onChange: (D) => v(n, D.target.value), rows: c }),
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
      value: l,
      onChange: (D) => _(n, D.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), ew = SillyTavern.getContext(), tw = ({
  greetings: n,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: l,
  onCompare: o,
  isGenerating: c
}) => {
  const [h, m] = te.useState(0);
  te.useEffect(() => {
    h >= n.length && n.length > 0 ? m(n.length - 1) : n.length === 0 && m(0);
  }, [n, h]);
  const g = () => {
    const y = [...n, { value: "", prompt: "" }];
    r(y), m(y.length - 1);
  }, v = async () => {
    if (n.length === 0) return;
    if (await ew.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
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
        /* @__PURE__ */ A.jsx(ce, { onClick: () => l(h), disabled: c, title: "Continue greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
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
    return n.prototype.diff = function(r, i, l) {
      l === void 0 && (l = {});
      var o;
      typeof l == "function" ? (o = l, l = {}) : "callback" in l && (o = l.callback);
      var c = this.castInput(r, l), h = this.castInput(i, l), m = this.removeEmpty(this.tokenize(c, l)), g = this.removeEmpty(this.tokenize(h, l));
      return this.diffWithOptionsObj(m, g, l, o);
    }, n.prototype.diffWithOptionsObj = function(r, i, l, o) {
      var c = this, h, m = function(C) {
        if (C = c.postProcess(C, l), o) {
          setTimeout(function() {
            o(C);
          }, 0);
          return;
        } else
          return C;
      }, g = i.length, v = r.length, _ = 1, b = g + v;
      l.maxEditLength != null && (b = Math.min(b, l.maxEditLength));
      var y = (h = l.timeout) !== null && h !== void 0 ? h : 1 / 0, p = Date.now() + y, f = [{ oldPos: -1, lastComponent: void 0 }], S = this.extractCommon(f[0], i, r, 0, l);
      if (f[0].oldPos + 1 >= v && S + 1 >= g)
        return m(this.buildValues(f[0].lastComponent, i, r));
      var x = -1 / 0, D = 1 / 0, w = function() {
        for (var C = Math.max(x, -_); C <= Math.min(D, _); C += 2) {
          var O = void 0, j = f[C - 1], R = f[C + 1];
          j && (f[C - 1] = void 0);
          var Z = !1;
          if (R) {
            var W = R.oldPos - C;
            Z = R && 0 <= W && W < g;
          }
          var $ = j && j.oldPos + 1 < v;
          if (!Z && !$) {
            f[C] = void 0;
            continue;
          }
          if (!$ || Z && j.oldPos < R.oldPos ? O = c.addToPath(R, !0, !1, 0, l) : O = c.addToPath(j, !1, !0, 1, l), S = c.extractCommon(O, i, r, C, l), O.oldPos + 1 >= v && S + 1 >= g)
            return m(c.buildValues(O.lastComponent, i, r)) || !0;
          f[C] = O, O.oldPos + 1 >= v && (D = Math.min(D, C - 1)), S + 1 >= g && (x = Math.max(x, C + 1));
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
    }, n.prototype.addToPath = function(r, i, l, o, c) {
      var h = r.lastComponent;
      return h && !c.oneChangePerToken && h.added === i && h.removed === l ? {
        oldPos: r.oldPos + o,
        lastComponent: { count: h.count + 1, added: i, removed: l, previousComponent: h.previousComponent }
      } : {
        oldPos: r.oldPos + o,
        lastComponent: { count: 1, added: i, removed: l, previousComponent: h }
      };
    }, n.prototype.extractCommon = function(r, i, l, o, c) {
      for (var h = i.length, m = l.length, g = r.oldPos, v = g - o, _ = 0; v + 1 < h && g + 1 < m && this.equals(l[g + 1], i[v + 1], c); )
        v++, g++, _++, c.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return _ && !c.oneChangePerToken && (r.lastComponent = { count: _, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = g, v;
    }, n.prototype.equals = function(r, i, l) {
      return l.comparator ? l.comparator(r, i) : r === i || !!l.ignoreCase && r.toLowerCase() === i.toLowerCase();
    }, n.prototype.removeEmpty = function(r) {
      for (var i = [], l = 0; l < r.length; l++)
        r[l] && i.push(r[l]);
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
    }), n.prototype.buildValues = function(r, i, l) {
      for (var o = [], c; r; )
        o.push(r), c = r.previousComponent, delete r.previousComponent, r = c;
      o.reverse();
      for (var h = o.length, m = 0, g = 0, v = 0; m < h; m++) {
        var _ = o[m];
        if (_.removed)
          _.value = this.join(l.slice(v, v + _.count)), v += _.count;
        else {
          if (!_.added && this.useLongestToken) {
            var b = i.slice(g, g + _.count);
            b = b.map(function(y, p) {
              var f = l[v + p];
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
), nw = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, o) {
      l.__proto__ = o;
    } || function(l, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (l[c] = o[c]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function l() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (l.prototype = i.prototype, new l());
  };
})(), rw = (
  /** @class */
  (function(n) {
    nw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r;
  })(Gr)
);
new rw();
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
function Dh(n, r, i) {
  if (n.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return i + n.slice(r.length);
}
function Th(n, r, i) {
  if (!r)
    return n + i;
  if (n.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return n.slice(0, -r.length) + i;
}
function Ol(n, r) {
  return Dh(n, r, "");
}
function Xo(n, r) {
  return Th(n, r, "");
}
function Iy(n, r) {
  return r.slice(0, aw(n, r));
}
function aw(n, r) {
  var i = 0;
  n.length > r.length && (i = n.length - r.length);
  var l = r.length;
  n.length < r.length && (l = n.length);
  var o = Array(l), c = 0;
  o[0] = 0;
  for (var h = 1; h < l; h++) {
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
function Nl(n) {
  var r;
  for (r = n.length - 1; r >= 0 && n[r].match(/\s/); r--)
    ;
  return n.substring(r + 1);
}
function Br(n) {
  var r = n.match(/^\s*/);
  return r ? r[0] : "";
}
var g1 = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, o) {
      l.__proto__ = o;
    } || function(l, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (l[c] = o[c]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function l() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (l.prototype = i.prototype, new l());
  };
})(), gu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", iw = new RegExp("[".concat(gu, "]+|\\s+|[^").concat(gu, "]"), "ug"), lw = (
  /** @class */
  (function(n) {
    g1(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(i, l, o) {
      return o.ignoreCase && (i = i.toLowerCase(), l = l.toLowerCase()), i.trim() === l.trim();
    }, r.prototype.tokenize = function(i, l) {
      l === void 0 && (l = {});
      var o;
      if (l.intlSegmenter) {
        var c = l.intlSegmenter;
        if (c.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        o = Array.from(c.segment(i), function(g) {
          return g.segment;
        });
      } else
        o = i.match(iw) || [];
      var h = [], m = null;
      return o.forEach(function(g) {
        /\s/.test(g) ? m == null ? h.push(g) : h.push(h.pop() + g) : m != null && /\s/.test(m) ? h[h.length - 1] == m ? h.push(h.pop() + g) : h.push(m + g) : h.push(g), m = g;
      }), h;
    }, r.prototype.join = function(i) {
      return i.map(function(l, o) {
        return o == 0 ? l : l.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(i, l) {
      if (!i || l.oneChangePerToken)
        return i;
      var o = null, c = null, h = null;
      return i.forEach(function(m) {
        m.added ? c = m : m.removed ? h = m : ((c || h) && Hy(o, h, c, m), o = m, c = null, h = null);
      }), (c || h) && Hy(o, h, c, null), i;
    }, r;
  })(Gr)
), sw = new lw();
function v1(n, r, i) {
  return sw.diff(n, r, i);
}
function Hy(n, r, i, l) {
  if (r && i) {
    var o = Br(r.value), c = Nl(r.value), h = Br(i.value), m = Nl(i.value);
    if (n) {
      var g = Uy(o, h);
      n.value = Th(n.value, h, g), r.value = Ol(r.value, g), i.value = Ol(i.value, g);
    }
    if (l) {
      var v = Py(c, m);
      l.value = Dh(l.value, m, v), r.value = Xo(r.value, v), i.value = Xo(i.value, v);
    }
  } else if (i) {
    if (n) {
      var _ = Br(i.value);
      i.value = i.value.substring(_.length);
    }
    if (l) {
      var _ = Br(l.value);
      l.value = l.value.substring(_.length);
    }
  } else if (n && l) {
    var b = Br(l.value), y = Br(r.value), p = Nl(r.value), f = Uy(b, y);
    r.value = Ol(r.value, f);
    var S = Py(Ol(b, f), p);
    r.value = Xo(r.value, S), l.value = Dh(l.value, b, S), n.value = Th(n.value, b, b.slice(0, b.length - S.length));
  } else if (l) {
    var x = Br(l.value), D = Nl(r.value), w = Iy(D, x);
    r.value = Xo(r.value, w);
  } else if (n) {
    var N = Nl(n.value), C = Br(r.value), w = Iy(N, C);
    r.value = Ol(r.value, w);
  }
}
var ow = (
  /** @class */
  (function(n) {
    g1(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var l = new RegExp("(\\r?\\n)|[".concat(gu, "]+|[^\\S\\n\\r]+|[^").concat(gu, "]"), "ug");
      return i.match(l) || [];
    }, r;
  })(Gr)
);
new ow();
var uw = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, o) {
      l.__proto__ = o;
    } || function(l, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (l[c] = o[c]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function l() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (l.prototype = i.prototype, new l());
  };
})(), cw = (
  /** @class */
  (function(n) {
    uw(r, n);
    function r() {
      var i = n !== null && n.apply(this, arguments) || this;
      return i.tokenize = y1, i;
    }
    return r.prototype.equals = function(i, l, o) {
      return o.ignoreWhitespace ? ((!o.newlineIsToken || !i.includes(`
`)) && (i = i.trim()), (!o.newlineIsToken || !l.includes(`
`)) && (l = l.trim())) : o.ignoreNewlineAtEof && !o.newlineIsToken && (i.endsWith(`
`) && (i = i.slice(0, -1)), l.endsWith(`
`) && (l = l.slice(0, -1))), n.prototype.equals.call(this, i, l, o);
    }, r;
  })(Gr)
);
new cw();
function y1(n, r) {
  r.stripTrailingCr && (n = n.replace(/\r\n/g, `
`));
  var i = [], l = n.split(/(\n|\r\n)/);
  l[l.length - 1] || l.pop();
  for (var o = 0; o < l.length; o++) {
    var c = l[o];
    o % 2 && !r.newlineIsToken ? i[i.length - 1] += c : i.push(c);
  }
  return i;
}
var fw = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, o) {
      l.__proto__ = o;
    } || function(l, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (l[c] = o[c]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function l() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (l.prototype = i.prototype, new l());
  };
})(), hw = (
  /** @class */
  (function(n) {
    fw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(Gr)
);
new hw();
var dw = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, o) {
      l.__proto__ = o;
    } || function(l, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (l[c] = o[c]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function l() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (l.prototype = i.prototype, new l());
  };
})(), pw = (
  /** @class */
  (function(n) {
    dw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(Gr)
);
new pw();
var mw = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, o) {
      l.__proto__ = o;
    } || function(l, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (l[c] = o[c]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function l() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (l.prototype = i.prototype, new l());
  };
})(), gw = (
  /** @class */
  (function(n) {
    mw(r, n);
    function r() {
      var i = n !== null && n.apply(this, arguments) || this;
      return i.tokenize = y1, i;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(i, l) {
      var o = l.undefinedReplacement, c = l.stringifyReplacer, h = c === void 0 ? function(m, g) {
        return typeof g > "u" ? o : g;
      } : c;
      return typeof i == "string" ? i : JSON.stringify(Oh(i, null, null, h), null, "  ");
    }, r.prototype.equals = function(i, l, o) {
      return n.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), l.replace(/,([\r\n])/g, "$1"), o);
    }, r;
  })(Gr)
);
new gw();
function Oh(n, r, i, l, o) {
  r = r || [], i = i || [], l && (n = l(o === void 0 ? "" : o, n));
  var c;
  for (c = 0; c < r.length; c += 1)
    if (r[c] === n)
      return i[c];
  var h;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (r.push(n), h = new Array(n.length), i.push(h), c = 0; c < n.length; c += 1)
      h[c] = Oh(n[c], r, i, l, String(c));
    return r.pop(), i.pop(), h;
  }
  if (n && n.toJSON && (n = n.toJSON()), typeof n == "object" && n !== null) {
    r.push(n), h = {}, i.push(h);
    var m = [], g;
    for (g in n)
      Object.prototype.hasOwnProperty.call(n, g) && m.push(g);
    for (m.sort(), c = 0; c < m.length; c += 1)
      g = m[c], h[g] = Oh(n[g], r, i, l, g);
    r.pop(), i.pop();
  } else
    h = n;
  return h;
}
var vw = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, o) {
      l.__proto__ = o;
    } || function(l, o) {
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (l[c] = o[c]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function l() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (l.prototype = i.prototype, new l());
  };
})(), yw = (
  /** @class */
  (function(n) {
    vw(r, n);
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
new yw();
const _w = ({ originalContent: n, newContent: r, fieldName: i }) => {
  const l = te.useMemo(() => {
    const o = v1(n, r);
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
            dangerouslySetInnerHTML: { __html: l.originalHtml }
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
            dangerouslySetInnerHTML: { __html: l.newHtml }
          }
        )
      ] })
    ] })
  ] });
}, bw = (n) => Object.entries(n.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const l = parseInt(r[0].split("_")[2]), o = parseInt(i[0].split("_")[2]);
  return l - o;
}).map(([, r]) => ({ value: r.value, prompt: r.prompt })), Sw = (n, r, i, l) => {
  const o = structuredClone(n);
  if (i === "field" && l) {
    const c = r;
    return o.fields[l] && (o.fields[l].value = c.response), o;
  }
  if (i === "global") {
    const c = r;
    if (c.fields_to_change?.length)
      for (const g of c.fields_to_change)
        o.fields[g.field] ? o.fields[g.field].value = g.value : o.draftFields[g.field] && (o.draftFields[g.field].value = g.value);
    if (c.draft_fields_to_remove?.length)
      for (const g of c.draft_fields_to_remove)
        o.draftFields[g] && delete o.draftFields[g];
    let h = bw(o), m = !1;
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
}, xw = (n, r) => {
  const i = Object.fromEntries(
    Object.entries(n.fields).filter(([l]) => !l.startsWith("alternate_greetings_"))
  );
  return {
    ...n,
    fields: { ...i, ...r.fields },
    draftFields: { ...r.draftFields }
  };
}, qy = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Nh = "placeholder-chatHistory", Ew = ga({
  justification: _n().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: _n().describe("The new, full content for the character field.")
}), Cw = ga({
  field: _n(),
  value: _n()
}), ww = ga({
  index: du().int().positive(),
  value: _n()
});
ga({
  justification: _n(),
  fields_to_change: Tn(Cw).optional(),
  draft_fields_to_remove: Tn(_n()).optional(),
  greetings_to_add: Tn(_n()).optional(),
  greetings_to_remove: Tn(du().int().positive()).optional(),
  greetings_to_change: Tn(ww).optional()
});
const Aw = (n, r) => {
  const i = ga({
    index: du().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: _n().describe("The new content for the alternate greeting.")
  }), l = {
    justification: _n().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Tn(_n()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Tn(du().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Tn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (n.length > 0) {
    const o = ga({
      field: Ch(n).describe("The unique ID of the field to change (core or draft)."),
      value: _n().describe("The new content for the field.")
    });
    l.fields_to_change = Tn(o).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (l.draft_fields_to_remove = Tn(Ch(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), ga(l);
}, _1 = ({ originalContent: n, newContent: r }) => {
  const i = te.useMemo(() => {
    const l = v1(n, r);
    let o = "", c = "";
    return l.forEach((h) => {
      const m = h.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), v = `<span style="${h.added ? "color: green; background-color: #e6ffed;" : h.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m}</span>`;
      h.added || (o += v), h.removed || (c += v);
    }), { originalHtml: o, newHtml: c };
  }, [n, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, Dw = ({ before: n, after: r }) => {
  const i = te.useMemo(() => {
    const l = [];
    return (/* @__PURE__ */ new Set([...Object.keys(n.fields), ...Object.keys(r.fields)])).forEach((c) => {
      const h = n.fields[c], m = r.fields[c], g = h?.value ?? "", v = m?.value ?? "";
      g !== v && l.push({
        label: m?.label ?? h?.label ?? c,
        before: g,
        after: v
      });
    }), l;
  }, [n, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
    /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
    i.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: i.map(({ label: l, before: o, after: c }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ A.jsx("h4", { children: l }),
      /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Before" }),
        /* @__PURE__ */ A.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ A.jsx(_1, { originalContent: o, newContent: c })
    ] }, l)) })
  ] });
}, Tw = ({ currentState: n, initialState: r }) => {
  const [i, l] = te.useState(!1), { coreFields: o, alternateGreetings: c } = te.useMemo(() => {
    const m = [], g = [];
    return On.forEach((v) => {
      n.fields[v] && m.push({ label: n.fields[v].label, value: n.fields[v].value });
    }), Object.entries(n.fields).filter(([v]) => v.startsWith("alternate_greetings_")).sort((v, _) => parseInt(v[0].split("_")[2]) - parseInt(_[0].split("_")[2])).forEach(([, v]) => g.push(v.value)), { coreFields: m, alternateGreetings: g };
  }, [n]), h = te.useMemo(() => {
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
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: i, onChange: (m) => l(m.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: h.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : h.map(({ label: m, before: g, after: v }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ A.jsx("h4", { children: m }),
      /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Original" }),
        /* @__PURE__ */ A.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ A.jsx(_1, { originalContent: g, newContent: v })
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
}, Qo = SillyTavern.getContext(), Ow = ({ initialState: n, onSave: r, onClose: i }) => {
  const [l, o] = te.useState(() => structuredClone(n)), c = (b, y, p) => {
    const f = structuredClone(l), S = p ? "draftFields" : "fields";
    f[S][b] && (f[S][b].value = y), o(f);
  }, h = (b, y) => {
    const p = structuredClone(l), f = `alternate_greetings_${b + 1}`;
    p.fields[f] && (p.fields[f].value = y), o(p);
  }, { coreFields: m, alternateGreetings: g, draftFields: v } = te.useMemo(() => {
    const b = [], y = [], p = [];
    return On.forEach((f) => {
      l.fields[f] && b.push({ id: f, label: l.fields[f].label, value: l.fields[f].value });
    }), Object.entries(l.fields).filter(([f]) => f.startsWith("alternate_greetings_")).sort((f, S) => parseInt(f[0].split("_")[2]) - parseInt(S[0].split("_")[2])).forEach(([, f]) => y.push(f.value)), Object.entries(l.draftFields).forEach(([f, S]) => {
      p.push({ id: f, label: S.label, value: S.value });
    }), { coreFields: b, alternateGreetings: y, draftFields: p };
  }, [l]), _ = () => {
    JSON.stringify(n) !== JSON.stringify(l) && r(l), i();
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
}, Nw = ({
  session: n,
  onBack: r,
  onApply: i,
  onSessionUpdate: l,
  initialState: o,
  messageSelection: c
}) => {
  const [h, m] = te.useState(n.messages), [g, v] = te.useState(""), [_, b] = te.useState(!1), [y, p] = te.useState(null), [f, S] = te.useState(!1), [x, D] = te.useState(!1), [w, N] = te.useState(null), [C, O] = te.useState(""), j = te.useRef(null), R = te.useRef(null);
  te.useEffect(() => {
    j.current?.scrollIntoView({ behavior: "smooth" });
  }, [h]);
  const Z = te.useCallback(
    (Y, ge, we) => {
      if (JSON.stringify(we) === JSON.stringify(ge))
        return Y;
      const $e = vt.getSettings().prompts.existingFieldDefinitions;
      if (!$e) return Y;
      const Ve = { core: {}, alternate_greetings: {}, draft: {} }, U = {}, ie = {};
      if ((/* @__PURE__ */ new Set([...Object.keys(we.fields), ...Object.keys(ge.fields)])).forEach((De) => {
        const zt = we.fields[De]?.value ?? "", Mn = ge.fields[De]?.value ?? "";
        if (zt !== Mn) {
          const Ie = ge.fields[De];
          Ie && (U[De] = Ie, De.startsWith("alternate_greetings_") ? Ve.alternate_greetings[Ie.label] = Ie.value : On.includes(De) && (Ve.core[Ie.label] = Ie.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(we.draftFields), ...Object.keys(ge.draftFields)])).forEach((De) => {
        const zt = we.draftFields[De]?.value ?? "", Mn = ge.draftFields[De]?.value ?? "";
        if (zt !== Mn && ge.draftFields[De]) {
          const Ie = ge.draftFields[De];
          Ve.draft[Ie.label] = Ie.value, ie[De] = Ie;
        }
      }), Object.keys(Ve.core).length === 0 && Object.keys(Ve.alternate_greetings).length === 0 && Object.keys(Ve.draft).length === 0)
        return Y;
      const qe = {
        fields: gt(Ve),
        fieldList: gt(mu(U, ie))
      }, _e = Zl($e.content, qe, Qo.substituteParams);
      if (_e.trim()) {
        const De = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: _e.trim(),
          isStateUpdate: !0
        };
        return [...Y, De];
      }
      return Y;
    },
    []
  ), W = te.useCallback(
    async (Y, ge, we, Ze) => {
      const $e = vt.getSettings();
      if (!n.profileId) {
        Ae("warning", "Please select a connection profile for this session.");
        return;
      }
      R.current = new AbortController(), we(), b(!0);
      try {
        const Ve = xu(n.profileId), U = [...Y], ie = (qe) => o1(
          qe,
          qe.findIndex((_e) => _e.id === Nh),
          {
            selection: c,
            contextSize: s1(Ve, $e),
            maxResponseTokens: $e.maxResponseToken
          }
        ), ae = Y.slice(0, Y.length - (ge ? 0 : 1)).reverse().find((qe) => qe.stateSnapshot)?.stateSnapshot ?? o, Oe = $e.prompts.existingFieldDefinitions;
        if (Oe) {
          const qe = {
            fields: gt({
              core: Object.fromEntries(
                Object.entries(ae.fields).filter(([De]) => !De.startsWith("alternate_greetings_")).map(([, De]) => [De.label, De.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(ae.fields).filter(([De]) => De.startsWith("alternate_greetings_")).map(([, De]) => [De.label, De.value])
              ),
              draft: Object.fromEntries(Object.entries(ae.draftFields).map(([, De]) => [De.label, De.value]))
            }),
            fieldList: gt(mu(ae.fields, ae.draftFields))
          }, _e = Zl(Oe.content, qe, Qo.substituteParams);
          if (_e.trim()) {
            const De = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: _e.trim()
            }, zt = U.pop();
            U.push(De), zt && U.push(zt);
          }
        }
        if (n.isReadonly) {
          U.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const qe = await A4(
            n.profileId,
            await ie(U),
            $e.maxResponseToken,
            R.current.signal
          ), _e = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: qe
          }, De = [...Y, _e];
          m(De), l({ ...n, messages: De });
        } else {
          const qe = n.type === "field" ? Ew : (() => {
            const kn = [...Object.keys(ae.fields), ...Object.keys(ae.draftFields)], Jl = Object.keys(ae.draftFields);
            return Aw(kn, Jl);
          })(), De = await T4(
            n.profileId,
            await ie(U),
            qe,
            n.type === "field" ? qy.FIELD : qy.GLOBAL,
            $e.maxResponseToken,
            R.current.signal
          ), zt = Sw(ae, De, n.type, n.targetFieldId), Mn = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: De.justification,
            stateSnapshot: zt
          };
          let Ie = [...Y, Mn];
          Ie = Z(Ie, zt, ae), m(Ie), l({ ...n, messages: Ie });
        }
      } catch (Ve) {
        Ve.name === "AbortError" ? Ae("info", "Request was cancelled.") : (console.error("Revise request failed:", Ve), Ae("error", `Request failed: ${i1(Ve)}`)), Ze();
      } finally {
        b(!1), R.current = null;
      }
    },
    [n, l, o, c, Z]
  ), $ = te.useCallback(async () => {
    if (!g.trim() || _) return;
    const Y = { id: `msg-${Date.now()}`, role: "user", content: g.trim() }, ge = h, we = g;
    W(
      [...h, Y],
      !1,
      () => {
        m([...h, Y]), v("");
      },
      // Put the message back in the input so it can be sent again.
      () => {
        m(ge), v(we);
      }
    );
  }, [g, _, h, W]), Q = te.useCallback(async () => {
    if (_ || h.length === 0) return;
    const Y = h;
    let ge = [...h];
    const we = h.findLastIndex((Ze) => !Ze.isStateUpdate);
    we > -1 && h[we].role === "assistant" && (ge = h.slice(0, we)), await W(
      ge,
      !0,
      () => m(ge),
      () => m(Y)
    );
  }, [_, h, W]), ee = () => {
    const Y = h.slice().reverse().find((ge) => ge.stateSnapshot)?.stateSnapshot ?? o;
    i(Y), r();
  }, fe = (Y) => {
    const ge = h.findIndex(($e) => $e.id === Y);
    if (ge === -1 || !h[ge].stateSnapshot) return;
    const we = h[ge].stateSnapshot;
    let Ze = o;
    for (let $e = ge - 1; $e >= 0; $e--)
      if (h[$e].stateSnapshot) {
        Ze = h[$e].stateSnapshot;
        break;
      }
    p({ before: Ze, after: we });
  }, pe = () => {
    S(!0);
  }, ye = (Y) => {
    N(Y.id), O(Y.content);
  }, H = () => {
    N(null), O("");
  }, ne = async () => {
    if (!w) return;
    const Y = h.findIndex((ie) => ie.id === w);
    if (Y === -1 || !await Qo.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const we = h, Ze = h.slice(0, Y), $e = { ...h[Y], content: C }, Ve = [...Ze, $e], U = C;
    H(), W(
      Ve,
      !1,
      () => m(Ve),
      // Reopen the editor with the edited text so it can be saved again.
      () => {
        m(we), N($e.id), O(U);
      }
    );
  }, I = async (Y) => {
    const ge = h.findIndex((U) => U.id === Y);
    if (ge === -1) return;
    const Ze = !!h[ge].isInitial;
    if (!await Qo.Popup.show.confirm(
      "Delete Message",
      Ze ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let Ve;
    Ze ? Ve = h.filter((U) => U.isInitial && U.id !== Y) : Ve = h.slice(0, ge), m(Ve), l({ ...n, messages: Ve }), Ae("info", "Message history has been updated.");
  }, le = h.filter((Y) => !Y.isStateUpdate), M = le.filter((Y) => Y.isInitial), F = le.filter((Y) => !Y.isInitial), re = h.slice().reverse().find((Y) => Y.stateSnapshot)?.stateSnapshot ?? o, se = () => {
    D(!0);
  }, he = (Y) => {
    const ge = h.slice().reverse().find(($e) => $e.stateSnapshot)?.stateSnapshot ?? o, we = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: Y
    };
    let Ze = [...h, we];
    Ze = Z(Ze, Y, ge), m(Ze), l({ ...n, messages: Ze }), D(!1);
  }, ze = () => {
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
              onChange: (Y) => l({ ...n, isReadonly: Y.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ A.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ A.jsx(
          d1,
          {
            initialSelectedProfileId: n.profileId,
            onChange: (Y) => l({ ...n, profileId: Y?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ A.jsx(ce, { onClick: pe, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ A.jsx(ce, { onClick: se, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ A.jsx(ce, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ A.jsxs(ce, { onClick: ee, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-messages", children: [
      M.length > 0 && /* @__PURE__ */ A.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ A.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ A.jsx("div", { className: "initial-messages-content", children: M.map(
          (Y) => w === Y.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ A.jsx(bn, { value: C, onChange: (ge) => O(ge.target.value), rows: 5 }),
            /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ A.jsxs(ce, { onClick: ne, children: [
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
                  onClick: () => ye(Y),
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
                  onClick: () => I(Y.id),
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
      F.map(
        (Y) => w === Y.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ A.jsx(bn, { value: C, onChange: (ge) => O(ge.target.value), rows: 3 }),
          /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ A.jsxs(ce, { onClick: ne, children: [
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
                onClick: () => ye(Y),
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
                onClick: () => I(Y.id),
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
      F.length > 0 && !_ && /* @__PURE__ */ A.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ A.jsxs(ce, { onClick: Q, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      _ && /* @__PURE__ */ A.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ A.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ A.jsx(ce, { onClick: ze, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ A.jsx("div", { ref: j })
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
        content: /* @__PURE__ */ A.jsx(Dw, { before: y.before, after: y.after }),
        onComplete: () => p(null),
        options: { wide: !0, large: !0 }
      }
    ),
    f && /* @__PURE__ */ A.jsx(
      yi,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(Tw, { currentState: re, initialState: o }),
        onComplete: () => S(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    x && /* @__PURE__ */ A.jsx(
      yi,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          Ow,
          {
            initialState: re,
            onSave: he,
            onClose: () => D(!1)
          }
        ),
        onComplete: () => D(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
function b1(n, r = {}) {
  const i = n?.entries;
  if (!i)
    return [];
  const l = Array.isArray(i) ? i : Object.values(i);
  return r.includeDisabled ? l : l.filter((o) => !o.disable);
}
async function Mw(n, r, i, l, o) {
  const c = vt.getSettings(), h = c.mainContextTemplatePresets[i];
  if (!h)
    throw new Error(`Main context template preset "${i}" not found.`);
  const m = [], v = {
    ...{
      user: Pn.name1 || "You",
      char: gt(n.fields.name?.value) || "Character",
      // Resolved up front like ST's {{persona}} macro, since renderPrompt keeps {{char}}/{{user}} literal.
      persona: Pn.substituteParams(Pn.powerUserSettings.persona_description ?? "")
    },
    fields: gt({
      core: Object.fromEntries(
        Object.entries(n.fields).filter(([p]) => !p.startsWith("alternate_greetings_")).map(([, p]) => [p.label, p.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(n.fields).filter(([p]) => p.startsWith("alternate_greetings_")).map(([, p]) => [p.label, p.value])
      ),
      draft: Object.fromEntries(Object.entries(n.draftFields).map(([, p]) => [p.label, p.value]))
    }),
    // Every field with its ID and label, see FieldListItem in field-list.ts
    fieldList: gt(mu(n.fields, n.draftFields))
  };
  if (l.charCard) {
    const p = [];
    o.selectedCharacterIndexes.forEach((f) => {
      const S = Pn.characters[parseInt(f)];
      S && p.push(S);
    }), v.characters = gt(p);
  }
  if (l.worldInfo) {
    const p = {};
    await Promise.all(
      o.selectedWorldNames.map(async (f) => {
        const S = await Pn.loadWorldInfo(f);
        S && (p[f] = b1(S));
      })
    ), v.lorebooks = gt(p);
  }
  for (const p of h.prompts) {
    if (!p.enabled || p.promptName === "stDescription" && !l.stDescription || p.promptName === "charDefinitions" && !l.charCard || p.promptName === "lorebookDefinitions" && !l.worldInfo || p.promptName === "existingFieldDefinitions" && !l.existingFields || p.promptName === "personaDescription" && !l.persona || p.promptName === "chatHistory" && l.messages.type === "none" || or === void 0 && !ma && p.promptName === "chatHistory") continue;
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
    const x = p.promptName === "stDescription" ? { ...v, char: "{{char}}", user: "{{user}}" } : v, D = Zl(S.content, x, Pn.substituteParams);
    D.trim() && m.push({
      id: `im-${m.length}`,
      role: p.role,
      content: D.trim(),
      isInitial: !0
    });
  }
  const _ = r ? n.fields[r]?.label || n.draftFields[r]?.label : "Global", b = c.prompts.reviseTaskDescription.content, y = Zl(
    b,
    {
      ...v,
      isFieldSession: !!r,
      targetField: r,
      targetLabel: gt(_)
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
const S1 = "charCreator", x1 = "charCreator_reviseSessions", Kl = () => SillyTavern.libs.localforage, kw = (n) => {
  if (!n)
    return { value: null, recovered: !1 };
  try {
    return { value: JSON.parse(n), recovered: !1 };
  } catch (r) {
    return { value: null, recovered: !0, error: r };
  }
}, E1 = async (n, r, i) => {
  try {
    const l = await r.getItem(n);
    if (l !== null)
      return { value: l, migrated: !1, recovered: !1 };
    const o = kw(i.getItem(n));
    return o.value === null ? (o.recovered && i.removeItem(n), { value: null, migrated: !1, recovered: o.recovered, error: o.error }) : (await r.setItem(n, o.value), i.removeItem(n), { value: o.value, migrated: !0, recovered: o.recovered });
  } catch (l) {
    return { value: null, migrated: !1, recovered: !0, error: l };
  }
}, C1 = async (n, r, i = Kl()) => {
  try {
    return await i.setItem(n, r), { persisted: !0 };
  } catch (l) {
    return { persisted: !1, error: l };
  }
}, Rw = (n = Kl(), r = localStorage) => E1(S1, n, r), jw = (n, r = Kl()) => C1(S1, n, r), zw = (n = Kl(), r = localStorage) => E1(x1, n, r), Lw = (n, r = Kl()) => C1(x1, n, r), Zy = SillyTavern.getContext(), Bw = ({
  target: n,
  onClose: r,
  onApply: i,
  initialState: l,
  contextToSend: o,
  sessionForContext: c
}) => {
  const [h, m] = te.useState([]), [g, v] = te.useState(null), [_, b] = te.useState(!0);
  te.useEffect(() => {
    let N = !0;
    return zw().then(({ value: C, recovered: O }) => {
      N && (m(Array.isArray(C) ? C : []), O && Ae("warning", "Some saved revise sessions were invalid and have been reset."));
    }).catch((C) => {
      console.error("Failed to load revise sessions:", C), Ae("warning", "Saved revise sessions could not be loaded.");
    }).finally(() => {
      N && b(!1);
    }), () => {
      N = !1;
    };
  }, []);
  const y = te.useMemo(() => h.filter((N) => N.type === n.type && (N.type === "global" || N.targetFieldId === n.fieldId)).sort((N, C) => new Date(C.createdAt).getTime() - new Date(N.createdAt).getTime()), [h, n]), p = (N) => {
    m(N), Lw(N).then((C) => {
      C.persisted || (console.warn("Failed to save revise sessions:", C.error), Ae("warning", "Revise session history could not be saved. Browser storage may be full."));
    });
  }, f = async () => {
    const C = `Session for ${n.type === "field" ? l.fields[n.fieldId]?.label || l.draftFields[n.fieldId]?.label : "Global"} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`, O = await Zy.Popup.show.input("New Session Name", "", C);
    if (O === null) return;
    const j = O.trim() || C;
    try {
      const R = vt.getSettings();
      if (!R.profileId) {
        Ae("warning", "Please select a connection profile in the main popup first.");
        return;
      }
      const Z = {
        id: `rs-${Date.now()}`,
        name: j,
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
      }, W = await Mw(
        l,
        Z.targetFieldId,
        Z.context.mainContextTemplatePreset,
        o,
        c
      );
      Z.messages = W, v(Z);
    } catch (R) {
      console.error("Failed to create session:", R), Ae("error", `Failed to create session: ${R.message}`);
    }
  }, S = (N) => {
    v(N);
  }, x = async (N) => {
    if (await Zy.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const O = h.filter((j) => j.id !== N);
      p(O);
    }
  }, D = (N) => {
    const C = h.findIndex((j) => j.id === N.id), O = [...h];
    C !== -1 ? O[C] = N : O.push(N), p(O), v(N);
  };
  if (g)
    return /* @__PURE__ */ A.jsx(
      Nw,
      {
        session: g,
        onBack: () => v(null),
        onApply: i,
        onSessionUpdate: D,
        initialState: l,
        messageSelection: o.messages
      }
    );
  const w = n.type === "field" ? l.fields[n.fieldId]?.label || l.draftFields[n.fieldId]?.label : "Global";
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
function Uw(n, r) {
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
function Pw(n, r, i) {
  return bi.compile(n, { noEscape: !0 })({
    character: Uw(r, i),
    // The entry describes this card, so {{char}} is its name. {{user}} is left for ST to resolve when the entry is used.
    char: r.name?.value || "{{char}}",
    user: "{{user}}"
  });
}
function Iw(n, r = []) {
  const i = new Set(n), l = r.filter((o) => o && !i.has(o));
  return [
    ...n.map((o) => ({ value: o, label: o })),
    ...l.map((o) => ({ value: o, label: `${o} (missing)` }))
  ];
}
const Un = SillyTavern.getContext(), uh = () => ({
  selectedCharacterIndexes: or ? [String(or)] : [],
  selectedWorldNames: [],
  fields: On.reduce(
    (n, r) => (n[r] = { value: "", prompt: "", label: sr[r] }, n),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), Hw = {
  name: { label: sr.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: sr.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: sr.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: sr.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: sr.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: sr.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, qw = () => {
  const n = m1(), r = vt.getSettings(), [i, l] = te.useState(uh()), [o, c] = te.useState([]), [h, m] = te.useState(!0), [g, v] = te.useState("core"), [_, b] = te.useState([]), [y, p] = te.useState([]), [f, S] = te.useState(null), [x, D] = te.useState(null), [w, N] = te.useState(!1), [C, O] = te.useState(null);
  te.useEffect(() => {
    (async () => {
      m(!0), b(Un.characters), p(Pg);
      const ie = (await Rw()).value ?? {}, ae = uh();
      if (ie.fields && (ae.fields = { ...ae.fields, ...ie.fields }), ie.draftFields && (ae.draftFields = ie.draftFields), ie.selectedCharacterIndexes && (ae.selectedCharacterIndexes = ie.selectedCharacterIndexes), ie.selectedWorldNames && (ae.selectedWorldNames = ie.selectedWorldNames), ie.lastLoadedCharacterId) {
        ae.lastLoadedCharacterId = ie.lastLoadedCharacterId;
        const Oe = Un.characters.find((qe) => qe.avatar === ie.lastLoadedCharacterId);
        Oe && S(Oe);
      }
      l(ae), m(!1);
    })();
  }, []), te.useEffect(() => {
    h || jw(i).then((U) => {
      U.persisted || (console.warn("Failed to save Character Creator session:", U.error), Ae("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [i, h]);
  const j = (U, ie) => {
    vt.getSettings()[U] = ie, vt.saveSettings(), n();
  }, R = (U, ie) => {
    vt.getSettings().contextToSend[U] = ie, vt.saveSettings(), n();
  }, Z = te.useCallback(
    (U, ie, ae, Oe) => {
      l((qe) => {
        const _e = Oe ? "draftFields" : "fields", De = { ...qe[_e] };
        return De[U] || (De[U] = { value: "", prompt: "", label: U }), De[U][ae] = ie, { ...qe, [_e]: De };
      });
    },
    []
  ), W = te.useMemo(
    () => Object.keys(i.fields).filter((U) => U.startsWith("alternate_greetings_")).sort((U, ie) => parseInt(U.split("_")[2]) - parseInt(ie.split("_")[2])).map((U) => i.fields[U]),
    [i.fields]
  ), $ = te.useCallback((U) => {
    l((ie) => {
      const ae = { ...ie.fields };
      return Object.keys(ae).forEach((Oe) => {
        Oe.startsWith("alternate_greetings_") && delete ae[Oe];
      }), U.forEach((Oe, qe) => {
        const _e = `alternate_greetings_${qe + 1}`;
        ae[_e] = { ...Oe, label: `Alternate Greeting ${qe + 1}` };
      }), { ...ie, fields: ae };
    });
  }, []), Q = te.useCallback(
    (U, ie) => {
      Z(U, "", "value", ie);
    },
    [Z]
  ), ee = te.useCallback(
    async (U) => {
      await Un.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[U].label}"?`
      ) && l((ae) => {
        const Oe = { ...ae.draftFields };
        return delete Oe[U], { ...ae, draftFields: Oe };
      });
    },
    [i.draftFields]
  ), fe = te.useCallback(async () => {
    const U = await Un.Popup.show.input("Enter Draft Field Name", "");
    if (!U?.trim()) return;
    const ie = f1(U.trim());
    if (!ie) return Ae("error", "Invalid field name.");
    if (i.draftFields[ie] || On.includes(ie))
      return Ae("warning", "Field name already exists.");
    l((ae) => ({
      ...ae,
      draftFields: { ...ae.draftFields, [ie]: { value: "", prompt: "", label: U } }
    })), v("draft");
  }, [i.draftFields]), pe = (U) => {
    O({ type: "field", fieldId: U }), N(!0);
  }, ye = () => {
    O({ type: "global" }), N(!0);
  }, H = (U) => {
    l((ie) => xw(ie, U)), Ae("success", "Changes from revise session applied."), N(!1);
  }, ne = te.useCallback(
    async (U, ie) => {
      if (!r.profileId) return Ae("warning", "Please select a connection profile.");
      c((ae) => [...ae, U]);
      try {
        const ae = r.contextToSend.messages, Oe = ae.type !== "none" && (or !== void 0 || !!ma), qe = {};
        r.contextToSend.worldInfo && await Promise.all(
          i.selectedWorldNames.filter((Ie) => Pg.includes(Ie)).map(async (Ie) => {
            const kn = await Un.loadWorldInfo(Ie);
            kn && (qe[Ie] = b1(kn, { includeDisabled: !0 }));
          })
        );
        const _e = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete _e.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete _e.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete _e.lorebookDefinitions, r.contextToSend.existingFields || delete _e.existingFieldDefinitions, r.contextToSend.persona || delete _e.personaDescription, delete _e.worldInfoCharDefinition;
        const De = await L4({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          messageSelection: ae,
          continueFrom: ie,
          session: i,
          allCharacters: _,
          entriesGroupByWorldName: qe,
          promptSettings: _e,
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (Ie) => Ie.enabled && (Oe || Ie.promptName !== "chatHistory")
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: U
        }), zt = U.startsWith("alternate_greetings_"), Mn = !zt && !On.includes(U);
        if (zt) {
          const Ie = parseInt(U.split("_")[2]) - 1, kn = [...W];
          kn[Ie] && (kn[Ie].value = De), $(kn);
        } else
          Z(U, De, "value", Mn);
      } catch (ae) {
        console.error(ae), Ae("error", i1(ae));
      } finally {
        c((ae) => ae.filter((Oe) => Oe !== U));
      }
    },
    [i, r, _, W, Z, $]
  ), I = te.useCallback(async () => {
    await Un.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (l(uh()), S(null));
  }, []), le = te.useCallback(
    (U) => {
      if (!f) return Ae("warning", "Please load a character to compare against.");
      let ie, ae, Oe;
      typeof U == "number" ? (ie = W[U]?.value ?? "", ae = f.data?.alternate_greetings?.[U] ?? "", Oe = `Alternate Greeting ${U + 1}`) : (ie = i.fields[U]?.value ?? "", ae = f[U] ?? f.data?.[U] ?? "", Oe = sr[U]), D({ original: ae, current: ie, fieldName: Oe });
    },
    [f, i.fields, W]
  ), M = te.useCallback(
    async (U) => {
      const ie = _[parseInt(U)];
      if (!ie || On.some((_e) => i.fields[_e].value.trim() !== "") && !await Un.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const Oe = { ...i.fields };
      On.forEach((_e) => {
        Oe[_e] = { value: ie[_e] ?? ie.data?.[_e] ?? "", prompt: "", label: sr[_e] };
      });
      const qe = (ie.data?.alternate_greetings ?? []).map((_e) => ({ value: _e, prompt: "" }));
      S(ie), l((_e) => ({ ..._e, fields: Oe, lastLoadedCharacterId: ie.avatar })), $(qe);
    },
    [_, i.fields, $]
  ), F = te.useCallback(async () => {
    if (ma) {
      Ae("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (or === void 0) {
      Ae("warning", "No character chat is currently open.");
      return;
    }
    await M(String(or));
  }, [M]), re = () => W.map((U) => U.value).filter((U) => U.trim() !== ""), se = async () => {
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
        alternate_greetings: re(),
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
      await ib(ie, !0);
    } catch (ae) {
      Ae("error", `Failed to create character: ${ae.message}`);
    }
  }, he = async () => {
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
        alternate_greetings: re(),
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
  }, ze = () => {
    const U = JSON.stringify({ draftFields: i.draftFields, version: Xh }, null, 2), ie = new Blob([U], { type: "application/json" }), ae = document.createElement("a");
    ae.href = URL.createObjectURL(ie), ae.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, ae.click(), URL.revokeObjectURL(ae.href);
  }, Y = () => {
    const U = document.createElement("input");
    U.type = "file", U.accept = ".json", U.onchange = async () => {
      const ie = U.files?.[0];
      if (ie)
        try {
          const ae = await ie.text(), Oe = JSON.parse(ae);
          if (!Oe.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await Un.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (l((_e) => ({ ..._e, draftFields: Oe.draftFields })), Ae("success", "Draft fields imported."));
        } catch (ae) {
          Ae("error", `Import failed: ${ae.message}`);
        }
    }, U.click();
  }, ge = te.useMemo(
    () => _.map((U, ie) => ({ value: String(ie), label: U.name })),
    [_]
  ), we = te.useMemo(
    () => y.map((U) => ({ value: U, label: U })),
    [y]
  ), Ze = te.useMemo(
    () => Iw(y, i.selectedWorldNames),
    [y, i.selectedWorldNames]
  ), $e = te.useMemo(
    () => Object.keys(r.promptPresets).map((U) => ({ value: U, label: U })),
    [r.promptPresets]
  ), Ve = te.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((U) => ({ value: U, label: U })),
    [r.mainContextTemplatePresets]
  );
  return h ? /* @__PURE__ */ A.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ A.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ A.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ A.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ A.jsx(
            d1,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (U) => j("profileId", U?.id ?? "")
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
                  onChange: (U) => R("stDescription", U.target.checked)
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
                  onChange: (U) => R("persona", U.target.checked)
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
                  onChange: (U) => R("messages", {
                    ...r.contextToSend.messages,
                    type: U.target.value
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
                    onChange: (U) => R("messages", {
                      ...r.contextToSend.messages,
                      first: parseInt(U.target.value) || 10
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
                    onChange: (U) => R("messages", {
                      ...r.contextToSend.messages,
                      last: parseInt(U.target.value) || 10
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
                    onChange: (U) => R("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: parseInt(U.target.value) || 0
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
                    onChange: (U) => R("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: parseInt(U.target.value) || 10 }
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
                  onChange: (U) => R("charCard", U.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ A.jsx(
              Vo,
              {
                items: ge,
                value: i.selectedCharacterIndexes,
                onChange: (U) => l((ie) => ({ ...ie, selectedCharacterIndexes: U })),
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
                  onChange: (U) => R("worldInfo", U.target.checked)
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
                onChange: (U) => l((ie) => ({ ...ie, selectedWorldNames: U })),
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
                  onChange: (U) => R("existingFields", U.target.checked)
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
                  onChange: (U) => R("dontSendOtherGreetings", U.target.checked)
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
                onChange: (U) => j("mainContextTemplatePreset", U ?? "default")
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
                onChange: (U) => j("maxContextType", U.target.value),
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
              onChange: (U) => j("maxContextValue", parseInt(U.target.value) || 16384)
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
                onChange: (U) => j("maxResponseToken", parseInt(U.target.value) || 1024)
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
              onChange: (U) => j("promptPreset", U ?? "default"),
              onItemsChange: (U) => j(
                "promptPresets",
                U.reduce(
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
              onChange: (U) => j("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: U.target.value }
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
              onClick: ye,
              title: "Open global revision sessions to edit multiple fields at once",
              children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" })
            }
          ),
          /* @__PURE__ */ A.jsx(ce, { onClick: se, children: "Save as New" }),
          /* @__PURE__ */ A.jsx(ce, { onClick: he, disabled: !f, children: "Override Char" }),
          r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ A.jsx(
            Vo,
            {
              items: we,
              placeholder: "Save as WI Entry",
              closeOnSelect: !0,
              value: [],
              onChange: (U) => {
              },
              onBeforeSelection: async (U, ie) => {
                if (!i.fields.name.value)
                  return Ae("warning", "Please enter a name first."), !1;
                const ae = ie[0], Oe = Pw(
                  r.prompts.worldInfoCharDefinition.content,
                  i.fields,
                  W
                ), qe = {
                  uid: -1,
                  key: [i.fields.name.value],
                  content: Oe,
                  comment: i.fields.name.value,
                  disable: !1,
                  keysecondary: []
                };
                try {
                  await xS({ entry: qe, selectedWorldName: ae, operation: "add" }), Ae("success", `Entry added to ${ae}.`);
                } catch (_e) {
                  Ae("error", `Failed to add WI Entry: ${_e.message}`);
                }
                return !1;
              }
            }
          ),
          /* @__PURE__ */ A.jsxs(ce, { onClick: I, children: [
            /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-left", style: { marginRight: "10px" } }),
            "Reset Fields"
          ] }),
          /* @__PURE__ */ A.jsx(
            ce,
            {
              onClick: F,
              title: "Load the character from the currently open chat",
              disabled: !!ma || or === void 0,
              children: "Current Char"
            }
          ),
          /* @__PURE__ */ A.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ A.jsx(
            Vo,
            {
              items: ge,
              value: f ? [String(_.indexOf(f))] : [],
              onChange: (U) => M(U[0]),
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
            /* @__PURE__ */ A.jsx(ce, { onClick: ze, children: "Export" }),
            /* @__PURE__ */ A.jsx(ce, { onClick: Y, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-content-area", children: [
          g === "core" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Core Character Fields" }),
            On.map((U) => {
              const ie = Hw[U];
              return ie ? /* @__PURE__ */ A.jsx(
                By,
                {
                  fieldId: U,
                  label: ie.label,
                  value: i.fields[U]?.value ?? "",
                  prompt: i.fields[U]?.prompt ?? "",
                  large: ie.large,
                  rows: ie.rows,
                  promptEnabled: ie.promptEnabled,
                  isGenerating: o.includes(U),
                  onValueChange: (ae, Oe) => Z(ae, Oe, "value", !1),
                  onPromptChange: (ae, Oe) => Z(ae, Oe, "prompt", !1),
                  onGenerate: ne,
                  onContinue: (ae) => ne(ae, i.fields[ae].value),
                  onClear: (ae) => Q(ae, !1),
                  onCompare: le,
                  onOpenReviseSessions: pe
                },
                U
              ) : null;
            }),
            /* @__PURE__ */ A.jsx(
              tw,
              {
                greetings: W,
                onGreetingsChange: $,
                isGenerating: o.some((U) => U.startsWith("alternate_greetings_")),
                onGenerate: (U) => ne(`alternate_greetings_${U + 1}`),
                onContinue: (U) => ne(`alternate_greetings_${U + 1}`, W[U].value),
                onCompare: le
              }
            )
          ] }),
          g === "draft" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Draft Fields" }),
            Object.entries(i.draftFields).map(([U, ie]) => /* @__PURE__ */ A.jsx(
              By,
              {
                fieldId: U,
                label: ie.label,
                value: ie.value,
                prompt: ie.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: o.includes(U),
                onValueChange: (ae, Oe) => Z(ae, Oe, "value", !0),
                onPromptChange: (ae, Oe) => Z(ae, Oe, "prompt", !0),
                onGenerate: ne,
                onContinue: (ae) => ne(ae, i.draftFields[ae].value),
                onClear: (ae) => Q(ae, !0),
                onDelete: ee
              },
              U
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
          _w,
          {
            originalContent: x.original,
            newContent: x.current,
            fieldName: x.fieldName
          }
        ),
        onComplete: () => D(null),
        options: { wide: !0 }
      }
    ),
    w && C && /* @__PURE__ */ A.jsx(
      yi,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          Bw,
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
}, Zw = () => {
  const [n, r] = te.useState(!1), i = () => r(!0), l = () => r(!1);
  return window.openCharacterCreatorPopup = i, n ? /* @__PURE__ */ A.jsx(
    yi,
    {
      content: /* @__PURE__ */ A.jsx(qw, {}),
      type: on.DISPLAY,
      onComplete: l,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, w1 = SillyTavern.getContext();
async function Gw() {
  const n = await w1.renderExtensionTemplateAsync(
    `third-party/${pa}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", n);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), Wg.createRoot(r).render(
    /* @__PURE__ */ A.jsx(nu.StrictMode, { children: /* @__PURE__ */ A.jsx(W4, {}) })
  ));
  const l = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', o = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], c = document.createElement("div");
  document.body.appendChild(c), Wg.createRoot(c).render(
    /* @__PURE__ */ A.jsx(nu.StrictMode, { children: /* @__PURE__ */ A.jsx(Zw, {}) })
  ), o.forEach((m) => {
    if (!m) return;
    const g = document.createElement("div");
    g.innerHTML = l.trim();
    const v = g.firstChild;
    v && (m.prepend(v), v.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function Fw() {
  return !!w1.ConnectionManagerRequestService;
}
Fw() ? G4().then(() => {
  Gw();
}) : Ae("error", `[${pa}] Make sure ST is updated.`);
export {
  Gw as init
};
