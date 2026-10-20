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
import { getRegexedString as V_, regex_placement as Hg } from "../../../regex/engine.js";
import { removeFromArray as Ig, runAfterAnimation as Y_ } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as si, fixToastrForDialogs as jf } from "../../../../popup.js";
import qg from "../../../../../lib/dialog-polyfill.esm.js";
function Gy(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var zf = { exports: {} }, Sl = {};
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
  if (Zg) return Sl;
  Zg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(l, o, c) {
    var h = null;
    if (c !== void 0 && (h = "" + c), o.key !== void 0 && (h = "" + o.key), "key" in o) {
      c = {};
      for (var p in o)
        p !== "key" && (c[p] = o[p]);
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
function Q_() {
  return Gg || (Gg = 1, zf.exports = X_()), zf.exports;
}
var A = Q_(), Lf = { exports: {} }, Ne = {};
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
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), b = Symbol.iterator;
  function y(M) {
    return M === null || typeof M != "object" ? null : (M = b && M[b] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var m = {
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
  function E(M, X, se) {
    this.props = M, this.context = X, this.refs = S, this.updater = se || m;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(M, X) {
    if (typeof M != "object" && typeof M != "function" && M != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, M, X, "setState");
  }, E.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function D() {
  }
  D.prototype = E.prototype;
  function w(M, X, se) {
    this.props = M, this.context = X, this.refs = S, this.updater = se || m;
  }
  var N = w.prototype = new D();
  N.constructor = w, f(N, E.prototype), N.isPureReactComponent = !0;
  var C = Array.isArray, O = { H: null, A: null, T: null, S: null, V: null }, j = Object.prototype.hasOwnProperty;
  function R(M, X, se, le, pe, ze) {
    return se = ze.ref, {
      $$typeof: n,
      type: M,
      key: X,
      ref: se !== void 0 ? se : null,
      props: ze
    };
  }
  function G(M, X) {
    return R(
      M.type,
      X,
      void 0,
      void 0,
      void 0,
      M.props
    );
  }
  function ee(M) {
    return typeof M == "object" && M !== null && M.$$typeof === n;
  }
  function K(M) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(se) {
      return X[se];
    });
  }
  var $ = /\/+/g;
  function te(M, X) {
    return typeof M == "object" && M !== null && M.key != null ? K("" + M.key) : X.toString(36);
  }
  function ce() {
  }
  function de(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (typeof M.status == "string" ? M.then(ce, ce) : (M.status = "pending", M.then(
          function(X) {
            M.status === "pending" && (M.status = "fulfilled", M.value = X);
          },
          function(X) {
            M.status === "pending" && (M.status = "rejected", M.reason = X);
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
  function be(M, X, se, le, pe) {
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
              return Y = M._init, be(
                Y(M._payload),
                X,
                se,
                le,
                pe
              );
          }
      }
    if (Y)
      return pe = pe(M), Y = le === "" ? "." + te(M, 0) : le, C(pe) ? (se = "", Y != null && (se = Y.replace($, "$&/") + "/"), be(pe, X, se, "", function(Ze) {
        return Ze;
      })) : pe != null && (ee(pe) && (pe = G(
        pe,
        se + (pe.key == null || M && M.key === pe.key ? "" : ("" + pe.key).replace(
          $,
          "$&/"
        ) + "/") + Y
      )), X.push(pe)), 1;
    Y = 0;
    var ge = le === "" ? "." : le + ":";
    if (C(M))
      for (var we = 0; we < M.length; we++)
        le = M[we], ze = ge + te(le, we), Y += be(
          le,
          X,
          se,
          ze,
          pe
        );
    else if (we = y(M), typeof we == "function")
      for (M = we.call(M), we = 0; !(le = M.next()).done; )
        le = le.value, ze = ge + te(le, we++), Y += be(
          le,
          X,
          se,
          ze,
          pe
        );
    else if (ze === "object") {
      if (typeof M.then == "function")
        return be(
          de(M),
          X,
          se,
          le,
          pe
        );
      throw X = String(M), Error(
        "Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Y;
  }
  function I(M, X, se) {
    if (M == null) return M;
    var le = [], pe = 0;
    return be(M, le, "", "", function(ze) {
      return X.call(se, ze, pe++);
    }), le;
  }
  function B(M) {
    if (M._status === -1) {
      var X = M._result;
      X = X(), X.then(
        function(se) {
          (M._status === 0 || M._status === -1) && (M._status = 1, M._result = se);
        },
        function(se) {
          (M._status === 0 || M._status === -1) && (M._status = 2, M._result = se);
        }
      ), M._status === -1 && (M._status = 0, M._result = X);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var V = typeof reportError == "function" ? reportError : function(M) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var X = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M),
        error: M
      });
      if (!window.dispatchEvent(X)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", M);
      return;
    }
    console.error(M);
  };
  function oe() {
  }
  return Ne.Children = {
    map: I,
    forEach: function(M, X, se) {
      I(
        M,
        function() {
          X.apply(this, arguments);
        },
        se
      );
    },
    count: function(M) {
      var X = 0;
      return I(M, function() {
        X++;
      }), X;
    },
    toArray: function(M) {
      return I(M, function(X) {
        return X;
      }) || [];
    },
    only: function(M) {
      if (!ee(M))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return M;
    }
  }, Ne.Component = E, Ne.Fragment = i, Ne.Profiler = o, Ne.PureComponent = w, Ne.StrictMode = l, Ne.Suspense = v, Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O, Ne.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(M) {
      return O.H.useMemoCache(M);
    }
  }, Ne.cache = function(M) {
    return function() {
      return M.apply(null, arguments);
    };
  }, Ne.cloneElement = function(M, X, se) {
    if (M == null)
      throw Error(
        "The argument must be a React element, but you passed " + M + "."
      );
    var le = f({}, M.props), pe = M.key, ze = void 0;
    if (X != null)
      for (Y in X.ref !== void 0 && (ze = void 0), X.key !== void 0 && (pe = "" + X.key), X)
        !j.call(X, Y) || Y === "key" || Y === "__self" || Y === "__source" || Y === "ref" && X.ref === void 0 || (le[Y] = X[Y]);
    var Y = arguments.length - 2;
    if (Y === 1) le.children = se;
    else if (1 < Y) {
      for (var ge = Array(Y), we = 0; we < Y; we++)
        ge[we] = arguments[we + 2];
      le.children = ge;
    }
    return R(M.type, pe, void 0, void 0, ze, le);
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
  }, Ne.createElement = function(M, X, se) {
    var le, pe = {}, ze = null;
    if (X != null)
      for (le in X.key !== void 0 && (ze = "" + X.key), X)
        j.call(X, le) && le !== "key" && le !== "__self" && le !== "__source" && (pe[le] = X[le]);
    var Y = arguments.length - 2;
    if (Y === 1) pe.children = se;
    else if (1 < Y) {
      for (var ge = Array(Y), we = 0; we < Y; we++)
        ge[we] = arguments[we + 2];
      pe.children = ge;
    }
    if (M && M.defaultProps)
      for (le in Y = M.defaultProps, Y)
        pe[le] === void 0 && (pe[le] = Y[le]);
    return R(M, ze, void 0, void 0, null, pe);
  }, Ne.createRef = function() {
    return { current: null };
  }, Ne.forwardRef = function(M) {
    return { $$typeof: p, render: M };
  }, Ne.isValidElement = ee, Ne.lazy = function(M) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: M },
      _init: B
    };
  }, Ne.memo = function(M, X) {
    return {
      $$typeof: g,
      type: M,
      compare: X === void 0 ? null : X
    };
  }, Ne.startTransition = function(M) {
    var X = O.T, se = {};
    O.T = se;
    try {
      var le = M(), pe = O.S;
      pe !== null && pe(se, le), typeof le == "object" && le !== null && typeof le.then == "function" && le.then(oe, V);
    } catch (ze) {
      V(ze);
    } finally {
      O.T = X;
    }
  }, Ne.unstable_useCacheRefresh = function() {
    return O.H.useCacheRefresh();
  }, Ne.use = function(M) {
    return O.H.use(M);
  }, Ne.useActionState = function(M, X, se) {
    return O.H.useActionState(M, X, se);
  }, Ne.useCallback = function(M, X) {
    return O.H.useCallback(M, X);
  }, Ne.useContext = function(M) {
    return O.H.useContext(M);
  }, Ne.useDebugValue = function() {
  }, Ne.useDeferredValue = function(M, X) {
    return O.H.useDeferredValue(M, X);
  }, Ne.useEffect = function(M, X, se) {
    var le = O.H;
    if (typeof se == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return le.useEffect(M, X);
  }, Ne.useId = function() {
    return O.H.useId();
  }, Ne.useImperativeHandle = function(M, X, se) {
    return O.H.useImperativeHandle(M, X, se);
  }, Ne.useInsertionEffect = function(M, X) {
    return O.H.useInsertionEffect(M, X);
  }, Ne.useLayoutEffect = function(M, X) {
    return O.H.useLayoutEffect(M, X);
  }, Ne.useMemo = function(M, X) {
    return O.H.useMemo(M, X);
  }, Ne.useOptimistic = function(M, X) {
    return O.H.useOptimistic(M, X);
  }, Ne.useReducer = function(M, X, se) {
    return O.H.useReducer(M, X, se);
  }, Ne.useRef = function(M) {
    return O.H.useRef(M);
  }, Ne.useState = function(M) {
    return O.H.useState(M);
  }, Ne.useSyncExternalStore = function(M, X, se) {
    return O.H.useSyncExternalStore(
      M,
      X,
      se
    );
  }, Ne.useTransition = function() {
    return O.H.useTransition();
  }, Ne.version = "19.1.1", Ne;
}
var Vg;
function Nh() {
  return Vg || (Vg = 1, Lf.exports = $_()), Lf.exports;
}
var ne = Nh();
const tu = /* @__PURE__ */ Gy(ne);
var Bf = { exports: {} }, xl = {}, Uf = { exports: {} }, Pf = {};
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
    function r(I, B) {
      var V = I.length;
      I.push(B);
      e: for (; 0 < V; ) {
        var oe = V - 1 >>> 1, M = I[oe];
        if (0 < o(M, B))
          I[oe] = B, I[V] = M, V = oe;
        else break e;
      }
    }
    function i(I) {
      return I.length === 0 ? null : I[0];
    }
    function l(I) {
      if (I.length === 0) return null;
      var B = I[0], V = I.pop();
      if (V !== B) {
        I[0] = V;
        e: for (var oe = 0, M = I.length, X = M >>> 1; oe < X; ) {
          var se = 2 * (oe + 1) - 1, le = I[se], pe = se + 1, ze = I[pe];
          if (0 > o(le, V))
            pe < M && 0 > o(ze, le) ? (I[oe] = ze, I[pe] = V, oe = pe) : (I[oe] = le, I[se] = V, oe = se);
          else if (pe < M && 0 > o(ze, V))
            I[oe] = ze, I[pe] = V, oe = pe;
          else break e;
        }
      }
      return B;
    }
    function o(I, B) {
      var V = I.sortIndex - B.sortIndex;
      return V !== 0 ? V : I.id - B.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var h = Date, p = h.now();
      n.unstable_now = function() {
        return h.now() - p;
      };
    }
    var v = [], g = [], _ = 1, b = null, y = 3, m = !1, f = !1, S = !1, E = !1, D = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    function C(I) {
      for (var B = i(g); B !== null; ) {
        if (B.callback === null) l(g);
        else if (B.startTime <= I)
          l(g), B.sortIndex = B.expirationTime, r(v, B);
        else break;
        B = i(g);
      }
    }
    function O(I) {
      if (S = !1, C(I), !f)
        if (i(v) !== null)
          f = !0, j || (j = !0, te());
        else {
          var B = i(g);
          B !== null && be(O, B.startTime - I);
        }
    }
    var j = !1, R = -1, G = 5, ee = -1;
    function K() {
      return E ? !0 : !(n.unstable_now() - ee < G);
    }
    function $() {
      if (E = !1, j) {
        var I = n.unstable_now();
        ee = I;
        var B = !0;
        try {
          e: {
            f = !1, S && (S = !1, w(R), R = -1), m = !0;
            var V = y;
            try {
              t: {
                for (C(I), b = i(v); b !== null && !(b.expirationTime > I && K()); ) {
                  var oe = b.callback;
                  if (typeof oe == "function") {
                    b.callback = null, y = b.priorityLevel;
                    var M = oe(
                      b.expirationTime <= I
                    );
                    if (I = n.unstable_now(), typeof M == "function") {
                      b.callback = M, C(I), B = !0;
                      break t;
                    }
                    b === i(v) && l(v), C(I);
                  } else l(v);
                  b = i(v);
                }
                if (b !== null) B = !0;
                else {
                  var X = i(g);
                  X !== null && be(
                    O,
                    X.startTime - I
                  ), B = !1;
                }
              }
              break e;
            } finally {
              b = null, y = V, m = !1;
            }
            B = void 0;
          }
        } finally {
          B ? te() : j = !1;
        }
      }
    }
    var te;
    if (typeof N == "function")
      te = function() {
        N($);
      };
    else if (typeof MessageChannel < "u") {
      var ce = new MessageChannel(), de = ce.port2;
      ce.port1.onmessage = $, te = function() {
        de.postMessage(null);
      };
    } else
      te = function() {
        D($, 0);
      };
    function be(I, B) {
      R = D(function() {
        I(n.unstable_now());
      }, B);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(I) {
      I.callback = null;
    }, n.unstable_forceFrameRate = function(I) {
      0 > I || 125 < I ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : G = 0 < I ? Math.floor(1e3 / I) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return y;
    }, n.unstable_next = function(I) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = y;
      }
      var V = y;
      y = B;
      try {
        return I();
      } finally {
        y = V;
      }
    }, n.unstable_requestPaint = function() {
      E = !0;
    }, n.unstable_runWithPriority = function(I, B) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var V = y;
      y = I;
      try {
        return B();
      } finally {
        y = V;
      }
    }, n.unstable_scheduleCallback = function(I, B, V) {
      var oe = n.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? oe + V : oe) : V = oe, I) {
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
      return M = V + M, I = {
        id: _++,
        callback: B,
        priorityLevel: I,
        startTime: V,
        expirationTime: M,
        sortIndex: -1
      }, V > oe ? (I.sortIndex = V, r(g, I), i(v) === null && I === i(g) && (S ? (w(R), R = -1) : S = !0, be(O, V - oe))) : (I.sortIndex = M, r(v, I), f || m || (f = !0, j || (j = !0, te()))), I;
    }, n.unstable_shouldYield = K, n.unstable_wrapCallback = function(I) {
      var B = y;
      return function() {
        var V = y;
        y = B;
        try {
          return I.apply(this, arguments);
        } finally {
          y = V;
        }
      };
    };
  })(Pf)), Pf;
}
var Xg;
function J_() {
  return Xg || (Xg = 1, Uf.exports = K_()), Uf.exports;
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
  var n = Nh();
  function r(v) {
    var g = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        g += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + v + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function c(v, g, _) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: v,
      containerInfo: g,
      implementation: _
    };
  }
  var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, g) {
    if (v === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, Rt.createPortal = function(v, g) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return c(v, g, null, _);
  }, Rt.flushSync = function(v) {
    var g = h.T, _ = l.p;
    try {
      if (h.T = null, l.p = 2, v) return v();
    } finally {
      h.T = g, l.p = _, l.d.f();
    }
  }, Rt.preconnect = function(v, g) {
    typeof v == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, l.d.C(v, g));
  }, Rt.prefetchDNS = function(v) {
    typeof v == "string" && l.d.D(v);
  }, Rt.preinit = function(v, g) {
    if (typeof v == "string" && g && typeof g.as == "string") {
      var _ = g.as, b = p(_, g.crossOrigin), y = typeof g.integrity == "string" ? g.integrity : void 0, m = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      _ === "style" ? l.d.S(
        v,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: b,
          integrity: y,
          fetchPriority: m
        }
      ) : _ === "script" && l.d.X(v, {
        crossOrigin: b,
        integrity: y,
        fetchPriority: m,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Rt.preinitModule = function(v, g) {
    if (typeof v == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var _ = p(
            g.as,
            g.crossOrigin
          );
          l.d.M(v, {
            crossOrigin: _,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && l.d.M(v);
  }, Rt.preload = function(v, g) {
    if (typeof v == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var _ = g.as, b = p(_, g.crossOrigin);
      l.d.L(v, _, {
        crossOrigin: b,
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
  }, Rt.preloadModule = function(v, g) {
    if (typeof v == "string")
      if (g) {
        var _ = p(g.as, g.crossOrigin);
        l.d.m(v, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: _,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else l.d.m(v);
  }, Rt.requestFormReset = function(v) {
    l.d.r(v);
  }, Rt.unstable_batchedUpdates = function(v, g) {
    return v(g);
  }, Rt.useFormState = function(v, g, _) {
    return h.H.useFormState(v, g, _);
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
  if (Kg) return xl;
  Kg = 1;
  var n = J_(), r = Nh(), i = Fy();
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
  function p(e) {
    if (c(e) !== e)
      throw Error(l(188));
  }
  function v(e) {
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
          if (d === a) return p(u), e;
          if (d === s) return p(u), t;
          d = d.sibling;
        }
        throw Error(l(188));
      }
      if (a.return !== s.return) a = u, s = d;
      else {
        for (var x = !1, T = u.child; T; ) {
          if (T === a) {
            x = !0, a = u, s = d;
            break;
          }
          if (T === s) {
            x = !0, s = u, a = d;
            break;
          }
          T = T.sibling;
        }
        if (!x) {
          for (T = d.child; T; ) {
            if (T === a) {
              x = !0, a = d, s = u;
              break;
            }
            if (T === s) {
              x = !0, s = d, a = u;
              break;
            }
            T = T.sibling;
          }
          if (!x) throw Error(l(189));
        }
      }
      if (a.alternate !== s) throw Error(l(190));
    }
    if (a.tag !== 3) throw Error(l(188));
    return a.stateNode.current === a ? e : t;
  }
  function g(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = g(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var _ = Object.assign, b = Symbol.for("react.element"), y = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), N = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), K = Symbol.for("react.memo_cache_sentinel"), $ = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object" ? null : (e = $ && e[$] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ce = Symbol.for("react.client.reference");
  function de(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ce ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case f:
        return "Fragment";
      case E:
        return "Profiler";
      case S:
        return "StrictMode";
      case O:
        return "Suspense";
      case j:
        return "SuspenseList";
      case ee:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case m:
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
        case G:
          t = e._payload, e = e._init;
          try {
            return de(e(t));
          } catch {
          }
      }
    return null;
  }
  var be = Array.isArray, I = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, oe = [], M = -1;
  function X(e) {
    return { current: e };
  }
  function se(e) {
    0 > M || (e.current = oe[M], oe[M] = null, M--);
  }
  function le(e, t) {
    M++, oe[M] = e.current, e.current = t;
  }
  var pe = X(null), ze = X(null), Y = X(null), ge = X(null);
  function we(e, t) {
    switch (le(Y, t), le(ze, e), le(pe, null), t.nodeType) {
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
    se(pe), le(pe, e);
  }
  function Ze() {
    se(pe), se(ze), se(Y);
  }
  function $e(e) {
    e.memoizedState !== null && le(ge, e);
    var t = pe.current, a = dg(t, e.type);
    t !== a && (le(ze, e), le(pe, a));
  }
  function Ve(e) {
    ze.current === e && (se(pe), se(ze)), ge.current === e && (se(ge), gl._currentValue = V);
  }
  var P = Object.prototype.hasOwnProperty, ae = n.unstable_scheduleCallback, re = n.unstable_cancelCallback, Oe = n.unstable_shouldYield, qe = n.unstable_requestPaint, ye = n.unstable_now, Ae = n.unstable_getCurrentPriorityLevel, zt = n.unstable_ImmediatePriority, Mn = n.unstable_UserBlockingPriority, He = n.unstable_NormalPriority, kn = n.unstable_LowPriority, Jl = n.unstable_IdlePriority, D1 = n.log, T1 = n.unstable_setDisableYieldValue, Ci = null, Xt = null;
  function dr(e) {
    if (typeof D1 == "function" && T1(e), Xt && typeof Xt.setStrictMode == "function")
      try {
        Xt.setStrictMode(Ci, e);
      } catch {
      }
  }
  var Qt = Math.clz32 ? Math.clz32 : M1, O1 = Math.log, N1 = Math.LN2;
  function M1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (O1(e) / N1 | 0) | 0;
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
    var u = 0, d = e.suspendedLanes, x = e.pingedLanes;
    e = e.warmLanes;
    var T = s & 134217727;
    return T !== 0 ? (s = T & ~d, s !== 0 ? u = Fr(s) : (x &= T, x !== 0 ? u = Fr(x) : a || (a = T & ~e, a !== 0 && (u = Fr(a))))) : (T = s & ~d, T !== 0 ? u = Fr(T) : x !== 0 ? u = Fr(x) : a || (a = s & ~e, a !== 0 && (u = Fr(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & d) === 0 && (d = u & -u, a = t & -t, d >= a || d === 32 && (a & 4194048) !== 0) ? t : u;
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
    var e = Wl;
    return Wl <<= 1, (Wl & 4194048) === 0 && (Wl = 256), e;
  }
  function $h() {
    var e = es;
    return es <<= 1, (es & 62914560) === 0 && (es = 4194304), e;
  }
  function xu(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ai(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function R1(e, t, a, s, u, d) {
    var x = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var T = e.entanglements, k = e.expirationTimes, H = e.hiddenUpdates;
    for (a = x & ~a; 0 < a; ) {
      var F = 31 - Qt(a), J = 1 << F;
      T[F] = 0, k[F] = -1;
      var q = H[F];
      if (q !== null)
        for (H[F] = null, F = 0; F < q.length; F++) {
          var Z = q[F];
          Z !== null && (Z.lane &= -536870913);
        }
      a &= ~J;
    }
    s !== 0 && Kh(e, s, 0), d !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(x & ~t));
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
  function Eu(e) {
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
  function Cu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Wh() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : kg(e.type));
  }
  function j1(e, t) {
    var a = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = a;
    }
  }
  var pr = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + pr, Ut = "__reactProps$" + pr, xa = "__reactContainer$" + pr, wu = "__reactEvents$" + pr, z1 = "__reactListeners$" + pr, L1 = "__reactHandles$" + pr, ed = "__reactResources$" + pr, Di = "__reactMarker$" + pr;
  function Au(e) {
    delete e[Mt], delete e[Ut], delete e[wu], delete e[z1], delete e[L1];
  }
  function Ea(e) {
    var t = e[Mt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[xa] || a[Mt]) {
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
  function Ca(e) {
    if (e = e[Mt] || e[xa]) {
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
  function wa(e) {
    var t = e[ed];
    return t || (t = e[ed] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Et(e) {
    e[Di] = !0;
  }
  var td = /* @__PURE__ */ new Set(), nd = {};
  function Vr(e, t) {
    Aa(e, t), Aa(e + "Capture", t);
  }
  function Aa(e, t) {
    for (nd[e] = t, e = 0; e < t.length; e++)
      td.add(t[e]);
  }
  var B1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), rd = {}, ad = {};
  function U1(e) {
    return P.call(ad, e) ? !0 : P.call(rd, e) ? !1 : B1.test(e) ? ad[e] = !0 : (rd[e] = !0, !1);
  }
  function ns(e, t, a) {
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
  var Du, id;
  function Da(e) {
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
  var Tu = !1;
  function Ou(e, t) {
    if (!e || Tu) return "";
    Tu = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
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
                } catch (Z) {
                  var q = Z;
                }
                Reflect.construct(e, [], J);
              } else {
                try {
                  J.call();
                } catch (Z) {
                  q = Z;
                }
                e.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                q = Z;
              }
              (J = e()) && typeof J.catch == "function" && J.catch(function() {
              });
            }
          } catch (Z) {
            if (Z && q && typeof Z.stack == "string")
              return [Z.stack, q.stack];
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
      var d = s.DetermineComponentFrameRoot(), x = d[0], T = d[1];
      if (x && T) {
        var k = x.split(`
`), H = T.split(`
`);
        for (u = s = 0; s < k.length && !k[s].includes("DetermineComponentFrameRoot"); )
          s++;
        for (; u < H.length && !H[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (s === k.length || u === H.length)
          for (s = k.length - 1, u = H.length - 1; 1 <= s && 0 <= u && k[s] !== H[u]; )
            u--;
        for (; 1 <= s && 0 <= u; s--, u--)
          if (k[s] !== H[u]) {
            if (s !== 1 || u !== 1)
              do
                if (s--, u--, 0 > u || k[s] !== H[u]) {
                  var F = `
` + k[s].replace(" at new ", " at ");
                  return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), F;
                }
              while (1 <= s && 0 <= u);
            break;
          }
      }
    } finally {
      Tu = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Da(a) : "";
  }
  function P1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Da(e.type);
      case 16:
        return Da("Lazy");
      case 13:
        return Da("Suspense");
      case 19:
        return Da("SuspenseList");
      case 0:
      case 15:
        return Ou(e.type, !1);
      case 11:
        return Ou(e.type.render, !1);
      case 1:
        return Ou(e.type, !0);
      case 31:
        return Da("Activity");
      default:
        return "";
    }
  }
  function ld(e) {
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
  function sd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function H1(e) {
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
        set: function(x) {
          s = "" + x, d.call(this, x);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return s;
        },
        setValue: function(x) {
          s = "" + x;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function as(e) {
    e._valueTracker || (e._valueTracker = H1(e));
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
  function Nu(e, t, a, s, u, d, x, T) {
    e.name = "", x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? e.type = x : e.removeAttribute("type"), t != null ? x === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + un(t)) : e.value !== "" + un(t) && (e.value = "" + un(t)) : x !== "submit" && x !== "reset" || e.removeAttribute("value"), t != null ? Mu(e, x, un(t)) : a != null ? Mu(e, x, un(a)) : s != null && e.removeAttribute("value"), u == null && d != null && (e.defaultChecked = !!d), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.name = "" + un(T) : e.removeAttribute("name");
  }
  function ud(e, t, a, s, u, d, x, T) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), t != null || a != null) {
      if (!(d !== "submit" && d !== "reset" || t != null))
        return;
      a = a != null ? "" + un(a) : "", t = t != null ? "" + un(t) : a, T || t === e.value || (e.value = t), e.defaultValue = t;
    }
    s = s ?? u, s = typeof s != "function" && typeof s != "symbol" && !!s, e.checked = T ? e.checked : !!s, e.defaultChecked = !!s, x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" && (e.name = x);
  }
  function Mu(e, t, a) {
    t === "number" && is(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ta(e, t, a, s) {
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
        if (be(s)) {
          if (1 < s.length) throw Error(l(93));
          s = s[0];
        }
        a = s;
      }
      a == null && (a = ""), t = a;
    }
    a = un(t), e.defaultValue = a, s = e.textContent, s === a && s !== "" && s !== null && (e.value = s);
  }
  function Oa(e, t) {
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
    var s = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? s ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : s ? e.setProperty(t, a) : typeof a != "number" || a === 0 || q1.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
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
  function ku(e) {
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
  function ls(e) {
    return G1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Ru = null;
  function ju(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Na = null, Ma = null;
  function pd(e) {
    var t = Ca(e);
    if (t && (e = t.stateNode)) {
      var a = e[Ut] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Nu(
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
                Nu(
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
          t = a.value, t != null && Ta(e, !!a.multiple, t, !1);
      }
    }
  }
  var zu = !1;
  function md(e, t, a) {
    if (zu) return e(t, a);
    zu = !0;
    try {
      var s = e(t);
      return s;
    } finally {
      if (zu = !1, (Na !== null || Ma !== null) && (Fs(), Na && (t = Na, e = Ma, Ma = Na = null, pd(t), e)))
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
  var Gn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Lu = !1;
  if (Gn)
    try {
      var Ni = {};
      Object.defineProperty(Ni, "passive", {
        get: function() {
          Lu = !0;
        }
      }), window.addEventListener("test", Ni, Ni), window.removeEventListener("test", Ni, Ni);
    } catch {
      Lu = !1;
    }
  var mr = null, Bu = null, ss = null;
  function gd() {
    if (ss) return ss;
    var e, t = Bu, a = t.length, s, u = "value" in mr ? mr.value : mr.textContent, d = u.length;
    for (e = 0; e < a && t[e] === u[e]; e++) ;
    var x = a - e;
    for (s = 1; s <= x && t[a - s] === u[d - s]; s++) ;
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
    function t(a, s, u, d, x) {
      this._reactName = a, this._targetInst = u, this.type = s, this.nativeEvent = d, this.target = x, this.currentTarget = null;
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
  }, cs = Pt(Yr), Mi = _({}, Yr, { view: 0, detail: 0 }), F1 = Pt(Mi), Uu, Pu, ki, fs = _({}, Mi, {
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
    getModifierState: Iu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ki && (ki && e.type === "mousemove" ? (Uu = e.screenX - ki.screenX, Pu = e.screenY - ki.screenY) : Pu = Uu = 0, ki = e), Uu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Pu;
    }
  }), yd = Pt(fs), V1 = _({}, fs, { dataTransfer: 0 }), Y1 = Pt(V1), X1 = _({}, Mi, { relatedTarget: 0 }), Hu = Pt(X1), Q1 = _({}, Yr, {
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
  function Iu() {
    return r2;
  }
  var a2 = _({}, Mi, {
    key: function(e) {
      if (e.key) {
        var t = e2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = os(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? t2[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Iu,
    charCode: function(e) {
      return e.type === "keypress" ? os(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? os(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), i2 = Pt(a2), l2 = _({}, fs, {
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
  }), bd = Pt(l2), s2 = _({}, Mi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Iu
  }), o2 = Pt(s2), u2 = _({}, Yr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), c2 = Pt(u2), f2 = _({}, fs, {
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
  }), p2 = Pt(d2), m2 = [9, 13, 27, 32], qu = Gn && "CompositionEvent" in window, Ri = null;
  Gn && "documentMode" in document && (Ri = document.documentMode);
  var g2 = Gn && "TextEvent" in window && !Ri, Sd = Gn && (!qu || Ri && 8 < Ri && 11 >= Ri), xd = " ", Ed = !1;
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
  var ka = !1;
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
    if (ka)
      return e === "compositionend" || !qu && Cd(e, t) ? (e = gd(), ss = Bu = mr = null, ka = !1, e) : null;
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
  function Dd(e, t, a, s) {
    Na ? Ma ? Ma.push(s) : Ma = [s] : Na = s, t = Ks(t, "onChange"), 0 < t.length && (a = new cs(
      "onChange",
      "change",
      null,
      a,
      s
    ), e.push({ event: a, listeners: t }));
  }
  var ji = null, zi = null;
  function b2(e) {
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
    var Zu;
    if (Gn) {
      var Gu = "oninput" in document;
      if (!Gu) {
        var Nd = document.createElement("div");
        Nd.setAttribute("oninput", "return;"), Gu = typeof Nd.oninput == "function";
      }
      Zu = Gu;
    } else Zu = !1;
    Od = Zu && (!document.documentMode || 9 < document.documentMode);
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
        ju(e)
      ), md(b2, t);
    }
  }
  function S2(e, t, a) {
    e === "focusin" ? (Md(), ji = t, zi = a, ji.attachEvent("onpropertychange", kd)) : e === "focusout" && Md();
  }
  function x2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return hs(zi);
  }
  function E2(e, t) {
    if (e === "click") return hs(t);
  }
  function C2(e, t) {
    if (e === "input" || e === "change")
      return hs(t);
  }
  function w2(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var $t = typeof Object.is == "function" ? Object.is : w2;
  function Li(e, t) {
    if ($t(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), s = Object.keys(t);
    if (a.length !== s.length) return !1;
    for (s = 0; s < a.length; s++) {
      var u = a[s];
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
  function Fu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var A2 = Gn && "documentMode" in document && 11 >= document.documentMode, Ra = null, Vu = null, Bi = null, Yu = !1;
  function Bd(e, t, a) {
    var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Yu || Ra == null || Ra !== is(s) || (s = Ra, "selectionStart" in s && Fu(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), Bi && Li(Bi, s) || (Bi = s, s = Ks(Vu, "onSelect"), 0 < s.length && (t = new cs(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: s }), t.target = Ra)));
  }
  function Xr(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var ja = {
    animationend: Xr("Animation", "AnimationEnd"),
    animationiteration: Xr("Animation", "AnimationIteration"),
    animationstart: Xr("Animation", "AnimationStart"),
    transitionrun: Xr("Transition", "TransitionRun"),
    transitionstart: Xr("Transition", "TransitionStart"),
    transitioncancel: Xr("Transition", "TransitionCancel"),
    transitionend: Xr("Transition", "TransitionEnd")
  }, Xu = {}, Ud = {};
  Gn && (Ud = document.createElement("div").style, "AnimationEvent" in window || (delete ja.animationend.animation, delete ja.animationiteration.animation, delete ja.animationstart.animation), "TransitionEvent" in window || delete ja.transitionend.transition);
  function Qr(e) {
    if (Xu[e]) return Xu[e];
    if (!ja[e]) return e;
    var t = ja[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Ud)
        return Xu[e] = t[a];
    return e;
  }
  var Pd = Qr("animationend"), Hd = Qr("animationiteration"), Id = Qr("animationstart"), D2 = Qr("transitionrun"), T2 = Qr("transitionstart"), O2 = Qr("transitioncancel"), qd = Qr("transitionend"), Zd = /* @__PURE__ */ new Map(), Qu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Qu.push("scrollEnd");
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
  var hn = [], za = 0, $u = 0;
  function ds() {
    for (var e = za, t = $u = za = 0; t < e; ) {
      var a = hn[t];
      hn[t++] = null;
      var s = hn[t];
      hn[t++] = null;
      var u = hn[t];
      hn[t++] = null;
      var d = hn[t];
      if (hn[t++] = null, s !== null && u !== null) {
        var x = s.pending;
        x === null ? u.next = u : (u.next = x.next, x.next = u), s.pending = u;
      }
      d !== 0 && Fd(a, u, d);
    }
  }
  function ps(e, t, a, s) {
    hn[za++] = e, hn[za++] = t, hn[za++] = a, hn[za++] = s, $u |= s, e.lanes |= s, e = e.alternate, e !== null && (e.lanes |= s);
  }
  function Ku(e, t, a, s) {
    return ps(e, t, a, s), ms(e);
  }
  function La(e, t) {
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
      throw ol = 0, rf = null, Error(l(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ba = {};
  function N2(e, t, a, s) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Kt(e, t, a, s) {
    return new N2(e, t, a, s);
  }
  function Ju(e) {
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
    var x = 0;
    if (s = e, typeof e == "function") Ju(e) && (x = 1);
    else if (typeof e == "string")
      x = k_(
        e,
        a,
        pe.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ee:
          return e = Kt(31, a, t, u), e.elementType = ee, e.lanes = d, e;
        case f:
          return $r(a.children, u, d, t);
        case S:
          x = 8, u |= 24;
          break;
        case E:
          return e = Kt(12, a, t, u | 2), e.elementType = E, e.lanes = d, e;
        case O:
          return e = Kt(13, a, t, u), e.elementType = O, e.lanes = d, e;
        case j:
          return e = Kt(19, a, t, u), e.elementType = j, e.lanes = d, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case D:
              case N:
                x = 10;
                break e;
              case w:
                x = 9;
                break e;
              case C:
                x = 11;
                break e;
              case R:
                x = 14;
                break e;
              case G:
                x = 16, s = null;
                break e;
            }
          x = 29, a = Error(
            l(130, e === null ? "null" : typeof e, "")
          ), s = null;
      }
    return t = Kt(x, a, t, u), t.elementType = e, t.type = s, t.lanes = d, t;
  }
  function $r(e, t, a, s) {
    return e = Kt(7, e, s, t), e.lanes = a, e;
  }
  function Wu(e, t, a) {
    return e = Kt(6, e, null, t), e.lanes = a, e;
  }
  function ec(e, t, a) {
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
  var Ua = [], Pa = 0, vs = null, ys = 0, dn = [], pn = 0, Kr = null, Vn = 1, Yn = "";
  function Jr(e, t) {
    Ua[Pa++] = ys, Ua[Pa++] = vs, vs = e, ys = t;
  }
  function Yd(e, t, a) {
    dn[pn++] = Vn, dn[pn++] = Yn, dn[pn++] = Kr, Kr = e;
    var s = Vn;
    e = Yn;
    var u = 32 - Qt(s) - 1;
    s &= ~(1 << u), a += 1;
    var d = 32 - Qt(t) + u;
    if (30 < d) {
      var x = u - u % 5;
      d = (s & (1 << x) - 1).toString(32), s >>= x, u -= x, Vn = 1 << 32 - Qt(t) + u | a << u | s, Yn = d + e;
    } else
      Vn = 1 << d | a << u | s, Yn = e;
  }
  function tc(e) {
    e.return !== null && (Jr(e, 1), Yd(e, 1, 0));
  }
  function nc(e) {
    for (; e === vs; )
      vs = Ua[--Pa], Ua[Pa] = null, ys = Ua[--Pa], Ua[Pa] = null;
    for (; e === Kr; )
      Kr = dn[--pn], dn[pn] = null, Yn = dn[--pn], dn[pn] = null, Vn = dn[--pn], dn[pn] = null;
  }
  var Lt = null, lt = null, Ie = !1, Wr = null, Rn = !1, rc = Error(l(519));
  function ea(e) {
    var t = Error(l(418, ""));
    throw Hi(fn(t, e)), rc;
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
    if (!Ie) return Qd(e), Ie = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || bf(e.type, e.memoizedProps)), a = !a), a && lt && ea(e), Qd(e), t === 13) {
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
      t === 27 ? (t = lt, Mr(e.type) ? (e = Cf, Cf = null, lt = e) : lt = t) : lt = Lt ? Cn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pi() {
    lt = Lt = null, Ie = !1;
  }
  function $d() {
    var e = Wr;
    return e !== null && (qt === null ? qt = e : qt.push.apply(
      qt,
      e
    ), Wr = null), e;
  }
  function Hi(e) {
    Wr === null ? Wr = [e] : Wr.push(e);
  }
  var ac = X(null), ta = null, Xn = null;
  function gr(e, t, a) {
    le(ac, t._currentValue), t._currentValue = a;
  }
  function Qn(e) {
    e._currentValue = ac.current, se(ac);
  }
  function ic(e, t, a) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function lc(e, t, a, s) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var d = u.dependencies;
      if (d !== null) {
        var x = u.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var T = d;
          d = u;
          for (var k = 0; k < t.length; k++)
            if (T.context === t[k]) {
              d.lanes |= a, T = d.alternate, T !== null && (T.lanes |= a), ic(
                d.return,
                a,
                e
              ), s || (x = null);
              break e;
            }
          d = T.next;
        }
      } else if (u.tag === 18) {
        if (x = u.return, x === null) throw Error(l(341));
        x.lanes |= a, d = x.alternate, d !== null && (d.lanes |= a), ic(x, a, e), x = null;
      } else x = u.child;
      if (x !== null) x.return = u;
      else
        for (x = u; x !== null; ) {
          if (x === e) {
            x = null;
            break;
          }
          if (u = x.sibling, u !== null) {
            u.return = x.return, x = u;
            break;
          }
          x = x.return;
        }
      u = x;
    }
  }
  function Ii(e, t, a, s) {
    e = null;
    for (var u = t, d = !1; u !== null; ) {
      if (!d) {
        if ((u.flags & 524288) !== 0) d = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var x = u.alternate;
        if (x === null) throw Error(l(387));
        if (x = x.memoizedProps, x !== null) {
          var T = u.type;
          $t(u.pendingProps.value, x.value) || (e !== null ? e.push(T) : e = [T]);
        }
      } else if (u === ge.current) {
        if (x = u.alternate, x === null) throw Error(l(387));
        x.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(gl) : e = [gl]);
      }
      u = u.return;
    }
    e !== null && lc(
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
  var M2 = typeof AbortController < "u" ? AbortController : function() {
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
  }, k2 = n.unstable_scheduleCallback, R2 = n.unstable_NormalPriority, _t = {
    $$typeof: N,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function sc() {
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
  var Zi = null, oc = 0, Ha = 0, Ia = null;
  function j2(e, t) {
    if (Zi === null) {
      var a = Zi = [];
      oc = 0, Ha = ff(), Ia = {
        status: "pending",
        value: void 0,
        then: function(s) {
          a.push(s);
        }
      };
    }
    return oc++, t.then(Jd, Jd), t;
  }
  function Jd() {
    if (--oc === 0 && Zi !== null) {
      Ia !== null && (Ia.status = "fulfilled");
      var e = Zi;
      Zi = null, Ha = 0, Ia = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function z2(e, t) {
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
  var Wd = I.S;
  I.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && j2(e, t), Wd !== null && Wd(e, t);
  };
  var ra = X(null);
  function uc() {
    var e = ra.current;
    return e !== null ? e : Je.pooledCache;
  }
  function Ss(e, t) {
    t === null ? le(ra, ra.current) : le(ra, t.pool);
  }
  function ep() {
    var e = uc();
    return e === null ? null : { parent: _t._currentValue, pool: e };
  }
  var Gi = Error(l(460)), tp = Error(l(474)), xs = Error(l(542)), cc = { then: function() {
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
  function fc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function hc(e, t) {
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
  function dc(e, t) {
    var a = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, a === s)) {
      var u = null, d = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var x = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          d === null ? u = d = x : d = d.next = x, a = a.next;
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
  var pc = !1;
  function Yi() {
    if (pc) {
      var e = Ia;
      if (e !== null) throw e;
    }
  }
  function Xi(e, t, a, s) {
    pc = !1;
    var u = e.updateQueue;
    vr = !1;
    var d = u.firstBaseUpdate, x = u.lastBaseUpdate, T = u.shared.pending;
    if (T !== null) {
      u.shared.pending = null;
      var k = T, H = k.next;
      k.next = null, x === null ? d = H : x.next = H, x = k;
      var F = e.alternate;
      F !== null && (F = F.updateQueue, T = F.lastBaseUpdate, T !== x && (T === null ? F.firstBaseUpdate = H : T.next = H, F.lastBaseUpdate = k));
    }
    if (d !== null) {
      var J = u.baseState;
      x = 0, F = H = k = null, T = d;
      do {
        var q = T.lane & -536870913, Z = q !== T.lane;
        if (Z ? (Ue & q) === q : (s & q) === q) {
          q !== 0 && q === Ha && (pc = !0), F !== null && (F = F.next = {
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
          q = T.callback, q !== null && (e.flags |= 64, Z && (e.flags |= 8192), Z = u.callbacks, Z === null ? u.callbacks = [q] : Z.push(q));
        } else
          Z = {
            lane: q,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          }, F === null ? (H = F = Z, k = J) : F = F.next = Z, x |= q;
        if (T = T.next, T === null) {
          if (T = u.shared.pending, T === null)
            break;
          Z = T, T = Z.next, Z.next = null, u.lastBaseUpdate = Z, u.shared.pending = null;
        }
      } while (!0);
      F === null && (k = J), u.baseState = k, u.firstBaseUpdate = H, u.lastBaseUpdate = F, d === null && (u.shared.lanes = 0), Dr |= x, e.lanes = x, e.memoizedState = J;
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
  var qa = X(null), Cs = X(0);
  function op(e, t) {
    e = nr, le(Cs, e), le(qa, t), nr = e | t.baseLanes;
  }
  function mc() {
    le(Cs, nr), le(qa, qa.current);
  }
  function gc() {
    nr = Cs.current, se(qa), se(Cs);
  }
  var br = 0, Me = null, Ye = null, ht = null, ws = !1, Za = !1, aa = !1, As = 0, Qi = 0, Ga = null, L2 = 0;
  function ct() {
    throw Error(l(321));
  }
  function vc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!$t(e[a], t[a])) return !1;
    return !0;
  }
  function yc(e, t, a, s, u, d) {
    return br = d, Me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, I.H = e === null || e.memoizedState === null ? Fp : Vp, aa = !1, d = a(s, u), aa = !1, Za && (d = cp(
      t,
      a,
      s,
      u
    )), up(e), d;
  }
  function up(e) {
    I.H = ks;
    var t = Ye !== null && Ye.next !== null;
    if (br = 0, ht = Ye = Me = null, ws = !1, Qi = 0, Ga = null, t) throw Error(l(300));
    e === null || Ct || (e = e.dependencies, e !== null && _s(e) && (Ct = !0));
  }
  function cp(e, t, a, s) {
    Me = e;
    var u = 0;
    do {
      if (Za && (Ga = null), Qi = 0, Za = !1, 25 <= u) throw Error(l(301));
      if (u += 1, ht = Ye = null, e.updateQueue != null) {
        var d = e.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      I.H = Z2, d = t(a, s);
    } while (Za);
    return d;
  }
  function B2() {
    var e = I.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? $i(t) : t, e = e.useState()[0], (Ye !== null ? Ye.memoizedState : null) !== e && (Me.flags |= 1024), t;
  }
  function _c() {
    var e = As !== 0;
    return As = 0, e;
  }
  function bc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Sc(e) {
    if (ws) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ws = !1;
    }
    br = 0, ht = Ye = Me = null, Za = !1, Qi = As = 0, Ga = null;
  }
  function Ht() {
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
        throw Me.alternate === null ? Error(l(467)) : Error(l(310));
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
  function xc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $i(e) {
    var t = Qi;
    return Qi += 1, Ga === null && (Ga = []), e = rp(Ga, e, t), t = Me, (ht === null ? t.memoizedState : ht.next) === null && (t = t.alternate, I.H = t === null || t.memoizedState === null ? Fp : Vp), e;
  }
  function Ds(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return $i(e);
      if (e.$$typeof === N) return kt(e);
    }
    throw Error(l(438, String(e)));
  }
  function Ec(e) {
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
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = xc(), Me.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), s = 0; s < e; s++)
        a[s] = K;
    return t.index++, a;
  }
  function $n(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ts(e) {
    var t = dt();
    return Cc(t, Ye, e);
  }
  function Cc(e, t, a) {
    var s = e.queue;
    if (s === null) throw Error(l(311));
    s.lastRenderedReducer = a;
    var u = e.baseQueue, d = s.pending;
    if (d !== null) {
      if (u !== null) {
        var x = u.next;
        u.next = d.next, d.next = x;
      }
      t.baseQueue = u = d, s.pending = null;
    }
    if (d = e.baseState, u === null) e.memoizedState = d;
    else {
      t = u.next;
      var T = x = null, k = null, H = t, F = !1;
      do {
        var J = H.lane & -536870913;
        if (J !== H.lane ? (Ue & J) === J : (br & J) === J) {
          var q = H.revertLane;
          if (q === 0)
            k !== null && (k = k.next = {
              lane: 0,
              revertLane: 0,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), J === Ha && (F = !0);
          else if ((br & q) === q) {
            H = H.next, q === Ha && (F = !0);
            continue;
          } else
            J = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, k === null ? (T = k = J, x = d) : k = k.next = J, Me.lanes |= q, Dr |= q;
          J = H.action, aa && a(d, J), d = H.hasEagerState ? H.eagerState : a(d, J);
        } else
          q = {
            lane: J,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, k === null ? (T = k = q, x = d) : k = k.next = q, Me.lanes |= J, Dr |= J;
        H = H.next;
      } while (H !== null && H !== t);
      if (k === null ? x = d : k.next = T, !$t(d, e.memoizedState) && (Ct = !0, F && (a = Ia, a !== null)))
        throw a;
      e.memoizedState = d, e.baseState = x, e.baseQueue = k, s.lastRenderedState = d;
    }
    return u === null && (s.lanes = 0), [e.memoizedState, s.dispatch];
  }
  function wc(e) {
    var t = dt(), a = t.queue;
    if (a === null) throw Error(l(311));
    a.lastRenderedReducer = e;
    var s = a.dispatch, u = a.pending, d = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var x = u = u.next;
      do
        d = e(d, x.action), x = x.next;
      while (x !== u);
      $t(d, t.memoizedState) || (Ct = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), a.lastRenderedState = d;
    }
    return [d, s];
  }
  function fp(e, t, a) {
    var s = Me, u = dt(), d = Ie;
    if (d) {
      if (a === void 0) throw Error(l(407));
      a = a();
    } else a = t();
    var x = !$t(
      (Ye || u).memoizedState,
      a
    );
    x && (u.memoizedState = a, Ct = !0), u = u.queue;
    var T = pp.bind(null, s, u, e);
    if (Ki(2048, 8, T, [e]), u.getSnapshot !== t || x || ht !== null && ht.memoizedState.tag & 1) {
      if (s.flags |= 2048, Fa(
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
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Me.updateQueue, t === null ? (t = xc(), Me.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
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
    var t = La(e, 2);
    t !== null && nn(t, e, 2);
  }
  function Ac(e) {
    var t = Ht();
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
    return e.baseState = a, Cc(
      e,
      Ye,
      typeof s == "function" ? s : $n
    );
  }
  function U2(e, t, a, s, u) {
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
        then: function(x) {
          d.listeners.push(x);
        }
      };
      I.T !== null ? a(!0) : d.isTransition = !1, s(d), a = t.pending, a === null ? (d.next = t.pending = d, yp(t, d)) : (d.next = a.next, t.pending = a.next = d);
    }
  }
  function yp(e, t) {
    var a = t.action, s = t.payload, u = e.state;
    if (t.isTransition) {
      var d = I.T, x = {};
      I.T = x;
      try {
        var T = a(u, s), k = I.S;
        k !== null && k(x, T), _p(e, t, T);
      } catch (H) {
        Dc(e, t, H);
      } finally {
        I.T = d;
      }
    } else
      try {
        d = a(u, s), _p(e, t, d);
      } catch (H) {
        Dc(e, t, H);
      }
  }
  function _p(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(s) {
        bp(e, t, s);
      },
      function(s) {
        return Dc(e, t, s);
      }
    ) : bp(e, t, a);
  }
  function bp(e, t, a) {
    t.status = "fulfilled", t.value = a, Sp(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, yp(e, a)));
  }
  function Dc(e, t, a) {
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
    if (Ie) {
      var a = Je.formState;
      if (a !== null) {
        e: {
          var s = Me;
          if (Ie) {
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
    return a = Ht(), a.memoizedState = a.baseState = t, s = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xp,
      lastRenderedState: t
    }, a.queue = s, a = qp.bind(
      null,
      Me,
      s
    ), s.dispatch = a, s = Ac(!1), d = kc.bind(
      null,
      Me,
      !1,
      s.queue
    ), s = Ht(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, s.queue = u, a = U2.bind(
      null,
      Me,
      u,
      d,
      a
    ), u.dispatch = a, s.memoizedState = e, [t, a, !1];
  }
  function Cp(e) {
    var t = dt();
    return wp(t, Ye, e);
  }
  function wp(e, t, a) {
    if (t = Cc(
      e,
      t,
      xp
    )[0], e = Ts($n)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var s = $i(t);
      } catch (x) {
        throw x === Gi ? xs : x;
      }
    else s = t;
    t = dt();
    var u = t.queue, d = u.dispatch;
    return a !== t.memoizedState && (Me.flags |= 2048, Fa(
      9,
      Os(),
      P2.bind(null, u, a),
      null
    )), [s, d, e];
  }
  function P2(e, t) {
    e.action = t;
  }
  function Ap(e) {
    var t = dt(), a = Ye;
    if (a !== null)
      return wp(t, a, e);
    dt(), t = t.memoizedState, a = dt();
    var s = a.queue.dispatch;
    return a.memoizedState = e, [t, s, !1];
  }
  function Fa(e, t, a, s) {
    return e = { tag: e, create: a, deps: s, inst: t, next: null }, t = Me.updateQueue, t === null && (t = xc(), Me.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (s = a.next, a.next = e, e.next = s, t.lastEffect = e), e;
  }
  function Os() {
    return { destroy: void 0, resource: void 0 };
  }
  function Dp() {
    return dt().memoizedState;
  }
  function Ns(e, t, a, s) {
    var u = Ht();
    s = s === void 0 ? null : s, Me.flags |= e, u.memoizedState = Fa(
      1 | t,
      Os(),
      a,
      s
    );
  }
  function Ki(e, t, a, s) {
    var u = dt();
    s = s === void 0 ? null : s;
    var d = u.memoizedState.inst;
    Ye !== null && s !== null && vc(s, Ye.memoizedState.deps) ? u.memoizedState = Fa(t, d, a, s) : (Me.flags |= e, u.memoizedState = Fa(
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
  function Tc() {
  }
  function jp(e, t) {
    var a = dt();
    t = t === void 0 ? null : t;
    var s = a.memoizedState;
    return t !== null && vc(t, s[1]) ? s[0] : (a.memoizedState = [e, t], e);
  }
  function zp(e, t) {
    var a = dt();
    t = t === void 0 ? null : t;
    var s = a.memoizedState;
    if (t !== null && vc(t, s[1]))
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
  function Oc(e, t, a) {
    return a === void 0 || (br & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Um(), Me.lanes |= e, Dr |= e, a);
  }
  function Lp(e, t, a, s) {
    return $t(a, t) ? a : qa.current !== null ? (e = Oc(e, a, s), $t(e, t) || (Ct = !0), e) : (br & 42) === 0 ? (Ct = !0, e.memoizedState = a) : (e = Um(), Me.lanes |= e, Dr |= e, t);
  }
  function Bp(e, t, a, s, u) {
    var d = B.p;
    B.p = d !== 0 && 8 > d ? d : 8;
    var x = I.T, T = {};
    I.T = T, kc(e, !1, t, a);
    try {
      var k = u(), H = I.S;
      if (H !== null && H(T, k), k !== null && typeof k == "object" && typeof k.then == "function") {
        var F = z2(
          k,
          s
        );
        Ji(
          e,
          t,
          F,
          tn(e)
        );
      } else
        Ji(
          e,
          t,
          s,
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
      B.p = d, I.T = x;
    }
  }
  function H2() {
  }
  function Nc(e, t, a, s) {
    if (e.tag !== 5) throw Error(l(476));
    var u = Up(e).queue;
    Bp(
      e,
      u,
      t,
      V,
      a === null ? H2 : function() {
        return Pp(e), a(s);
      }
    );
  }
  function Up(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $n,
        lastRenderedState: V
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
  function Mc() {
    return kt(gl);
  }
  function Hp() {
    return dt().memoizedState;
  }
  function Ip() {
    return dt().memoizedState;
  }
  function I2(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = tn();
          e = yr(a);
          var s = _r(t, e, a);
          s !== null && (nn(s, t, a), Vi(s, t, a)), t = { cache: sc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function q2(e, t, a) {
    var s = tn();
    a = {
      lane: s,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ms(e) ? Zp(t, a) : (a = Ku(e, t, a, s), a !== null && (nn(a, e, s), Gp(a, t, s)));
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
          var x = t.lastRenderedState, T = d(x, a);
          if (u.hasEagerState = !0, u.eagerState = T, $t(T, x))
            return ps(e, t, u, 0), Je === null && ds(), !1;
        } catch {
        } finally {
        }
      if (a = Ku(e, t, u, s), a !== null)
        return nn(a, e, s), Gp(a, t, s), !0;
    }
    return !1;
  }
  function kc(e, t, a, s) {
    if (s = {
      lane: 2,
      revertLane: ff(),
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ms(e)) {
      if (t) throw Error(l(479));
    } else
      t = Ku(
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
    Za = ws = !0;
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
    useCallback: ct,
    useContext: ct,
    useEffect: ct,
    useImperativeHandle: ct,
    useLayoutEffect: ct,
    useInsertionEffect: ct,
    useMemo: ct,
    useReducer: ct,
    useRef: ct,
    useState: ct,
    useDebugValue: ct,
    useDeferredValue: ct,
    useTransition: ct,
    useSyncExternalStore: ct,
    useId: ct,
    useHostTransitionStatus: ct,
    useFormState: ct,
    useActionState: ct,
    useOptimistic: ct,
    useMemoCache: ct,
    useCacheRefresh: ct
  }, Fp = {
    readContext: kt,
    use: Ds,
    useCallback: function(e, t) {
      return Ht().memoizedState = [
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
      var a = Ht();
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
      var s = Ht();
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
      }, s.queue = e, e = e.dispatch = q2.bind(
        null,
        Me,
        e
      ), [s.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ht();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Ac(e);
      var t = e.queue, a = qp.bind(null, Me, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Tc,
    useDeferredValue: function(e, t) {
      var a = Ht();
      return Oc(a, e, t);
    },
    useTransition: function() {
      var e = Ac(!1);
      return e = Bp.bind(
        null,
        Me,
        e.queue,
        !0,
        !1
      ), Ht().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var s = Me, u = Ht();
      if (Ie) {
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
      ]), s.flags |= 2048, Fa(
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
      var e = Ht(), t = Je.identifierPrefix;
      if (Ie) {
        var a = Yn, s = Vn;
        a = (s & ~(1 << 32 - Qt(s) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = As++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = L2++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Mc,
    useFormState: Ep,
    useActionState: Ep,
    useOptimistic: function(e) {
      var t = Ht();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = kc.bind(
        null,
        Me,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Ec,
    useCacheRefresh: function() {
      return Ht().memoizedState = I2.bind(
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
    useDebugValue: Tc,
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
      var e = Ts($n)[0], t = dt().memoizedState;
      return [
        typeof e == "boolean" ? e : $i(e),
        t
      ];
    },
    useSyncExternalStore: fp,
    useId: Hp,
    useHostTransitionStatus: Mc,
    useFormState: Cp,
    useActionState: Cp,
    useOptimistic: function(e, t) {
      var a = dt();
      return vp(a, Ye, e, t);
    },
    useMemoCache: Ec,
    useCacheRefresh: Ip
  }, Z2 = {
    readContext: kt,
    use: Ds,
    useCallback: jp,
    useContext: kt,
    useEffect: Op,
    useImperativeHandle: Rp,
    useInsertionEffect: Np,
    useLayoutEffect: Mp,
    useMemo: zp,
    useReducer: wc,
    useRef: Dp,
    useState: function() {
      return wc($n);
    },
    useDebugValue: Tc,
    useDeferredValue: function(e, t) {
      var a = dt();
      return Ye === null ? Oc(a, e, t) : Lp(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = wc($n)[0], t = dt().memoizedState;
      return [
        typeof e == "boolean" ? e : $i(e),
        t
      ];
    },
    useSyncExternalStore: fp,
    useId: Hp,
    useHostTransitionStatus: Mc,
    useFormState: Ap,
    useActionState: Ap,
    useOptimistic: function(e, t) {
      var a = dt();
      return Ye !== null ? vp(a, Ye, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Ec,
    useCacheRefresh: Ip
  }, Va = null, Wi = 0;
  function Rs(e) {
    var t = Wi;
    return Wi += 1, Va === null && (Va = []), rp(Va, e, t);
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
        var U = L.deletions;
        U === null ? (L.deletions = [z], L.flags |= 16) : U.push(z);
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
    function d(L, z, U) {
      return L.index = U, e ? (U = L.alternate, U !== null ? (U = U.index, U < z ? (L.flags |= 67108866, z) : U) : (L.flags |= 67108866, z)) : (L.flags |= 1048576, z);
    }
    function x(L) {
      return e && L.alternate === null && (L.flags |= 67108866), L;
    }
    function T(L, z, U, Q) {
      return z === null || z.tag !== 6 ? (z = Wu(U, L.mode, Q), z.return = L, z) : (z = u(z, U), z.return = L, z);
    }
    function k(L, z, U, Q) {
      var ue = U.type;
      return ue === f ? F(
        L,
        z,
        U.props.children,
        Q,
        U.key
      ) : z !== null && (z.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === G && Yp(ue) === z.type) ? (z = u(z, U.props), el(z, U), z.return = L, z) : (z = gs(
        U.type,
        U.key,
        U.props,
        null,
        L.mode,
        Q
      ), el(z, U), z.return = L, z);
    }
    function H(L, z, U, Q) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== U.containerInfo || z.stateNode.implementation !== U.implementation ? (z = ec(U, L.mode, Q), z.return = L, z) : (z = u(z, U.children || []), z.return = L, z);
    }
    function F(L, z, U, Q, ue) {
      return z === null || z.tag !== 7 ? (z = $r(
        U,
        L.mode,
        Q,
        ue
      ), z.return = L, z) : (z = u(z, U), z.return = L, z);
    }
    function J(L, z, U) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Wu(
          "" + z,
          L.mode,
          U
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case y:
            return U = gs(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              U
            ), el(U, z), U.return = L, U;
          case m:
            return z = ec(
              z,
              L.mode,
              U
            ), z.return = L, z;
          case G:
            var Q = z._init;
            return z = Q(z._payload), J(L, z, U);
        }
        if (be(z) || te(z))
          return z = $r(
            z,
            L.mode,
            U,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return J(L, Rs(z), U);
        if (z.$$typeof === N)
          return J(
            L,
            bs(L, z),
            U
          );
        js(L, z);
      }
      return null;
    }
    function q(L, z, U, Q) {
      var ue = z !== null ? z.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return ue !== null ? null : T(L, z, "" + U, Q);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case y:
            return U.key === ue ? k(L, z, U, Q) : null;
          case m:
            return U.key === ue ? H(L, z, U, Q) : null;
          case G:
            return ue = U._init, U = ue(U._payload), q(L, z, U, Q);
        }
        if (be(U) || te(U))
          return ue !== null ? null : F(L, z, U, Q, null);
        if (typeof U.then == "function")
          return q(
            L,
            z,
            Rs(U),
            Q
          );
        if (U.$$typeof === N)
          return q(
            L,
            z,
            bs(L, U),
            Q
          );
        js(L, U);
      }
      return null;
    }
    function Z(L, z, U, Q, ue) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return L = L.get(U) || null, T(z, L, "" + Q, ue);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case y:
            return L = L.get(
              Q.key === null ? U : Q.key
            ) || null, k(z, L, Q, ue);
          case m:
            return L = L.get(
              Q.key === null ? U : Q.key
            ) || null, H(z, L, Q, ue);
          case G:
            var ke = Q._init;
            return Q = ke(Q._payload), Z(
              L,
              z,
              U,
              Q,
              ue
            );
        }
        if (be(Q) || te(Q))
          return L = L.get(U) || null, F(z, L, Q, ue, null);
        if (typeof Q.then == "function")
          return Z(
            L,
            z,
            U,
            Rs(Q),
            ue
          );
        if (Q.$$typeof === N)
          return Z(
            L,
            z,
            U,
            bs(z, Q),
            ue
          );
        js(z, Q);
      }
      return null;
    }
    function Se(L, z, U, Q) {
      for (var ue = null, ke = null, he = z, _e = z = 0, At = null; he !== null && _e < U.length; _e++) {
        he.index > _e ? (At = he, he = null) : At = he.sibling;
        var Pe = q(
          L,
          he,
          U[_e],
          Q
        );
        if (Pe === null) {
          he === null && (he = At);
          break;
        }
        e && he && Pe.alternate === null && t(L, he), z = d(Pe, z, _e), ke === null ? ue = Pe : ke.sibling = Pe, ke = Pe, he = At;
      }
      if (_e === U.length)
        return a(L, he), Ie && Jr(L, _e), ue;
      if (he === null) {
        for (; _e < U.length; _e++)
          he = J(L, U[_e], Q), he !== null && (z = d(
            he,
            z,
            _e
          ), ke === null ? ue = he : ke.sibling = he, ke = he);
        return Ie && Jr(L, _e), ue;
      }
      for (he = s(he); _e < U.length; _e++)
        At = Z(
          he,
          L,
          _e,
          U[_e],
          Q
        ), At !== null && (e && At.alternate !== null && he.delete(
          At.key === null ? _e : At.key
        ), z = d(
          At,
          z,
          _e
        ), ke === null ? ue = At : ke.sibling = At, ke = At);
      return e && he.forEach(function(Lr) {
        return t(L, Lr);
      }), Ie && Jr(L, _e), ue;
    }
    function ve(L, z, U, Q) {
      if (U == null) throw Error(l(151));
      for (var ue = null, ke = null, he = z, _e = z = 0, At = null, Pe = U.next(); he !== null && !Pe.done; _e++, Pe = U.next()) {
        he.index > _e ? (At = he, he = null) : At = he.sibling;
        var Lr = q(L, he, Pe.value, Q);
        if (Lr === null) {
          he === null && (he = At);
          break;
        }
        e && he && Lr.alternate === null && t(L, he), z = d(Lr, z, _e), ke === null ? ue = Lr : ke.sibling = Lr, ke = Lr, he = At;
      }
      if (Pe.done)
        return a(L, he), Ie && Jr(L, _e), ue;
      if (he === null) {
        for (; !Pe.done; _e++, Pe = U.next())
          Pe = J(L, Pe.value, Q), Pe !== null && (z = d(Pe, z, _e), ke === null ? ue = Pe : ke.sibling = Pe, ke = Pe);
        return Ie && Jr(L, _e), ue;
      }
      for (he = s(he); !Pe.done; _e++, Pe = U.next())
        Pe = Z(he, L, _e, Pe.value, Q), Pe !== null && (e && Pe.alternate !== null && he.delete(Pe.key === null ? _e : Pe.key), z = d(Pe, z, _e), ke === null ? ue = Pe : ke.sibling = Pe, ke = Pe);
      return e && he.forEach(function(G_) {
        return t(L, G_);
      }), Ie && Jr(L, _e), ue;
    }
    function Qe(L, z, U, Q) {
      if (typeof U == "object" && U !== null && U.type === f && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case y:
            e: {
              for (var ue = U.key; z !== null; ) {
                if (z.key === ue) {
                  if (ue = U.type, ue === f) {
                    if (z.tag === 7) {
                      a(
                        L,
                        z.sibling
                      ), Q = u(
                        z,
                        U.props.children
                      ), Q.return = L, L = Q;
                      break e;
                    }
                  } else if (z.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === G && Yp(ue) === z.type) {
                    a(
                      L,
                      z.sibling
                    ), Q = u(z, U.props), el(Q, U), Q.return = L, L = Q;
                    break e;
                  }
                  a(L, z);
                  break;
                } else t(L, z);
                z = z.sibling;
              }
              U.type === f ? (Q = $r(
                U.props.children,
                L.mode,
                Q,
                U.key
              ), Q.return = L, L = Q) : (Q = gs(
                U.type,
                U.key,
                U.props,
                null,
                L.mode,
                Q
              ), el(Q, U), Q.return = L, L = Q);
            }
            return x(L);
          case m:
            e: {
              for (ue = U.key; z !== null; ) {
                if (z.key === ue)
                  if (z.tag === 4 && z.stateNode.containerInfo === U.containerInfo && z.stateNode.implementation === U.implementation) {
                    a(
                      L,
                      z.sibling
                    ), Q = u(z, U.children || []), Q.return = L, L = Q;
                    break e;
                  } else {
                    a(L, z);
                    break;
                  }
                else t(L, z);
                z = z.sibling;
              }
              Q = ec(U, L.mode, Q), Q.return = L, L = Q;
            }
            return x(L);
          case G:
            return ue = U._init, U = ue(U._payload), Qe(
              L,
              z,
              U,
              Q
            );
        }
        if (be(U))
          return Se(
            L,
            z,
            U,
            Q
          );
        if (te(U)) {
          if (ue = te(U), typeof ue != "function") throw Error(l(150));
          return U = ue.call(U), ve(
            L,
            z,
            U,
            Q
          );
        }
        if (typeof U.then == "function")
          return Qe(
            L,
            z,
            Rs(U),
            Q
          );
        if (U.$$typeof === N)
          return Qe(
            L,
            z,
            bs(L, U),
            Q
          );
        js(L, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, z !== null && z.tag === 6 ? (a(L, z.sibling), Q = u(z, U), Q.return = L, L = Q) : (a(L, z), Q = Wu(U, L.mode, Q), Q.return = L, L = Q), x(L)) : a(L, z);
    }
    return function(L, z, U, Q) {
      try {
        Wi = 0;
        var ue = Qe(
          L,
          z,
          U,
          Q
        );
        return Va = null, ue;
      } catch (he) {
        if (he === Gi || he === xs) throw he;
        var ke = Kt(29, he, null, L.mode);
        return ke.lanes = Q, ke.return = L, ke;
      } finally {
      }
    };
  }
  var Ya = Xp(!0), Qp = Xp(!1), mn = X(null), jn = null;
  function Sr(e) {
    var t = e.alternate;
    le(bt, bt.current & 1), le(mn, e), jn === null && (t === null || qa.current !== null || t.memoizedState !== null) && (jn = e);
  }
  function $p(e) {
    if (e.tag === 22) {
      if (le(bt, bt.current), le(mn, e), jn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (jn = e);
      }
    } else xr();
  }
  function xr() {
    le(bt, bt.current), le(mn, mn.current);
  }
  function Kn(e) {
    se(mn), jn === e && (jn = null), se(bt);
  }
  var bt = X(0);
  function zs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Ef(a)))
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
  function Rc(e, t, a, s) {
    t = e.memoizedState, a = a(s, t), a = a == null ? t : _({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var jc = {
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
  function Kp(e, t, a, s, u, d, x) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, d, x) : t.prototype && t.prototype.isPureReactComponent ? !Li(a, s) || !Li(u, d) : !0;
  }
  function Jp(e, t, a, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, s), t.state !== e && jc.enqueueReplaceState(t, t.state, null);
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
  function zc(e, t, a) {
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
    var x = a.stateNode;
    x !== null && typeof x.componentDidCatch == "function" && (e.callback = function() {
      nm(t, a, s), typeof u != "function" && (Tr === null ? Tr = /* @__PURE__ */ new Set([this]) : Tr.add(this));
      var T = s.stack;
      this.componentDidCatch(s.value, {
        componentStack: T !== null ? T : ""
      });
    });
  }
  function G2(e, t, a, s, u) {
    if (a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
      if (t = a.alternate, t !== null && Ii(
        t,
        a,
        u,
        !0
      ), a = mn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return jn === null ? lf() : a.alternate === null && st === 0 && (st = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, s === cc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([s]) : t.add(s), of(e, s, u)), !1;
          case 22:
            return a.flags |= 65536, s === cc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([s])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([s]) : a.add(s)), of(e, s, u)), !1;
        }
        throw Error(l(435, a.tag));
      }
      return of(e, s, u), lf(), !1;
    }
    if (Ie)
      return t = mn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, s !== rc && (e = Error(l(422), { cause: s }), Hi(fn(e, a)))) : (s !== rc && (t = Error(l(423), {
        cause: s
      }), Hi(
        fn(t, a)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, s = fn(s, a), u = zc(
        e.stateNode,
        s,
        u
      ), dc(e, u), st !== 4 && (st = 2)), !1;
    var d = Error(l(520), { cause: s });
    if (d = fn(d, a), sl === null ? sl = [d] : sl.push(d), st !== 4 && (st = 2), t === null) return !0;
    s = fn(s, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = u & -u, a.lanes |= e, e = zc(a.stateNode, s, e), dc(a, e), !1;
        case 1:
          if (t = a.type, d = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Tr === null || !Tr.has(d))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = rm(u), am(
              u,
              e,
              a,
              s
            ), dc(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var im = Error(l(461)), Ct = !1;
  function Dt(e, t, a, s) {
    t.child = e === null ? Qp(t, null, a, s) : Ya(
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
      var x = {};
      for (var T in s)
        T !== "ref" && (x[T] = s[T]);
    } else x = s;
    return na(t), s = yc(
      e,
      t,
      a,
      x,
      d,
      u
    ), T = _c(), e !== null && !Ct ? (bc(e, t, u), Jn(e, t, u)) : (Ie && T && tc(t), t.flags |= 1, Dt(e, t, s, u), t.child);
  }
  function sm(e, t, a, s, u) {
    if (e === null) {
      var d = a.type;
      return typeof d == "function" && !Ju(d) && d.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = d, om(
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
    if (d = e.child, !Zc(e, u)) {
      var x = d.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Li, a(x, s) && e.ref === t.ref)
        return Jn(e, t, u);
    }
    return t.flags |= 1, e = Fn(d, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function om(e, t, a, s, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Li(d, s) && e.ref === t.ref)
        if (Ct = !1, t.pendingProps = s = d, Zc(e, u))
          (e.flags & 131072) !== 0 && (Ct = !0);
        else
          return t.lanes = e.lanes, Jn(e, t, u);
    }
    return Lc(
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
        ), d !== null ? op(t, d) : mc(), $p(t);
      else
        return t.lanes = t.childLanes = 536870912, cm(
          e,
          t,
          d !== null ? d.baseLanes | a : a,
          a
        );
    } else
      d !== null ? (Ss(t, d.cachePool), op(t, d), xr(), t.memoizedState = null) : (e !== null && Ss(t, null), mc(), xr());
    return Dt(e, t, u, a), t.child;
  }
  function cm(e, t, a, s) {
    var u = uc();
    return u = u === null ? null : { parent: _t._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && Ss(t, null), mc(), $p(t), e !== null && Ii(e, t, s, !0), null;
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
  function Lc(e, t, a, s, u) {
    return na(t), a = yc(
      e,
      t,
      a,
      s,
      void 0,
      u
    ), s = _c(), e !== null && !Ct ? (bc(e, t, u), Jn(e, t, u)) : (Ie && s && tc(t), t.flags |= 1, Dt(e, t, a, u), t.child);
  }
  function fm(e, t, a, s, u, d) {
    return na(t), t.updateQueue = null, a = cp(
      t,
      s,
      a,
      u
    ), up(e), s = _c(), e !== null && !Ct ? (bc(e, t, d), Jn(e, t, d)) : (Ie && s && tc(t), t.flags |= 1, Dt(e, t, a, d), t.child);
  }
  function hm(e, t, a, s, u) {
    if (na(t), t.stateNode === null) {
      var d = Ba, x = a.contextType;
      typeof x == "object" && x !== null && (d = kt(x)), d = new a(s, d), t.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = jc, t.stateNode = d, d._reactInternals = t, d = t.stateNode, d.props = s, d.state = t.memoizedState, d.refs = {}, fc(t), x = a.contextType, d.context = typeof x == "object" && x !== null ? kt(x) : Ba, d.state = t.memoizedState, x = a.getDerivedStateFromProps, typeof x == "function" && (Rc(
        t,
        a,
        x,
        s
      ), d.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (x = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), x !== d.state && jc.enqueueReplaceState(d, d.state, null), Xi(t, s, d, u), Yi(), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308), s = !0;
    } else if (e === null) {
      d = t.stateNode;
      var T = t.memoizedProps, k = ia(a, T);
      d.props = k;
      var H = d.context, F = a.contextType;
      x = Ba, typeof F == "object" && F !== null && (x = kt(F));
      var J = a.getDerivedStateFromProps;
      F = typeof J == "function" || typeof d.getSnapshotBeforeUpdate == "function", T = t.pendingProps !== T, F || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (T || H !== x) && Jp(
        t,
        d,
        s,
        x
      ), vr = !1;
      var q = t.memoizedState;
      d.state = q, Xi(t, s, d, u), Yi(), H = t.memoizedState, T || q !== H || vr ? (typeof J == "function" && (Rc(
        t,
        a,
        J,
        s
      ), H = t.memoizedState), (k = vr || Kp(
        t,
        a,
        k,
        s,
        q,
        H,
        x
      )) ? (F || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = H), d.props = s, d.state = H, d.context = x, s = k) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      d = t.stateNode, hc(e, t), x = t.memoizedProps, F = ia(a, x), d.props = F, J = t.pendingProps, q = d.context, H = a.contextType, k = Ba, typeof H == "object" && H !== null && (k = kt(H)), T = a.getDerivedStateFromProps, (H = typeof T == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (x !== J || q !== k) && Jp(
        t,
        d,
        s,
        k
      ), vr = !1, q = t.memoizedState, d.state = q, Xi(t, s, d, u), Yi();
      var Z = t.memoizedState;
      x !== J || q !== Z || vr || e !== null && e.dependencies !== null && _s(e.dependencies) ? (typeof T == "function" && (Rc(
        t,
        a,
        T,
        s
      ), Z = t.memoizedState), (F = vr || Kp(
        t,
        a,
        F,
        s,
        q,
        Z,
        k
      ) || e !== null && e.dependencies !== null && _s(e.dependencies)) ? (H || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(s, Z, k), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        s,
        Z,
        k
      )), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || x === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = Z), d.props = s, d.state = Z, d.context = k, s = F) : (typeof d.componentDidUpdate != "function" || x === e.memoizedProps && q === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && q === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return d = s, Us(e, t), s = (t.flags & 128) !== 0, d || s ? (d = t.stateNode, a = s && typeof a.getDerivedStateFromError != "function" ? null : d.render(), t.flags |= 1, e !== null && s ? (t.child = Ya(
      t,
      e.child,
      null,
      u
    ), t.child = Ya(
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
  var Bc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Uc(e) {
    return { baseLanes: e, cachePool: ep() };
  }
  function Pc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= gn), e;
  }
  function pm(e, t, a) {
    var s = t.pendingProps, u = !1, d = (t.flags & 128) !== 0, x;
    if ((x = d) || (x = e !== null && e.memoizedState === null ? !1 : (bt.current & 2) !== 0), x && (u = !0, t.flags &= -129), x = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ie) {
        if (u ? Sr(t) : xr(), Ie) {
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
          return Ef(T) ? t.lanes = 32 : t.lanes = 536870912, null;
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
      ), T.return = t, s.return = t, T.sibling = s, t.child = T, u = t.child, u.memoizedState = Uc(a), u.childLanes = Pc(
        e,
        x,
        a
      ), t.memoizedState = Bc, s) : (Sr(t), Hc(t, T));
    }
    if (k = e.memoizedState, k !== null && (T = k.dehydrated, T !== null)) {
      if (d)
        t.flags & 256 ? (Sr(t), t.flags &= -257, t = Ic(
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
        ), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, Ya(
          t,
          e.child,
          null,
          a
        ), s = t.child, s.memoizedState = Uc(a), s.childLanes = Pc(
          e,
          x,
          a
        ), t.memoizedState = Bc, t = u);
      else if (Sr(t), Ef(T)) {
        if (x = T.nextSibling && T.nextSibling.dataset, x) var H = x.dgst;
        x = H, s = Error(l(419)), s.stack = "", s.digest = x, Hi({ value: s, source: null, stack: null }), t = Ic(
          e,
          t,
          a
        );
      } else if (Ct || Ii(e, t, a, !1), x = (a & e.childLanes) !== 0, Ct || x) {
        if (x = Je, x !== null && (s = a & -a, s = (s & 42) !== 0 ? 1 : Eu(s), s = (s & (x.suspendedLanes | a)) !== 0 ? 0 : s, s !== 0 && s !== k.retryLane))
          throw k.retryLane = s, La(e, s), nn(x, e, s), im;
        T.data === "$?" || lf(), t = Ic(
          e,
          t,
          a
        );
      } else
        T.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = k.treeContext, lt = Cn(
          T.nextSibling
        ), Lt = t, Ie = !0, Wr = null, Rn = !1, e !== null && (dn[pn++] = Vn, dn[pn++] = Yn, dn[pn++] = Kr, Vn = e.id, Yn = e.overflow, Kr = t), t = Hc(
          t,
          s.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (xr(), u = s.fallback, T = t.mode, k = e.child, H = k.sibling, s = Fn(k, {
      mode: "hidden",
      children: s.children
    }), s.subtreeFlags = k.subtreeFlags & 65011712, H !== null ? u = Fn(H, u) : (u = $r(
      u,
      T,
      a,
      null
    ), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, T = e.child.memoizedState, T === null ? T = Uc(a) : (k = T.cachePool, k !== null ? (H = _t._currentValue, k = k.parent !== H ? { parent: H, pool: H } : k) : k = ep(), T = {
      baseLanes: T.baseLanes | a,
      cachePool: k
    }), u.memoizedState = T, u.childLanes = Pc(
      e,
      x,
      a
    ), t.memoizedState = Bc, s) : (Sr(t), a = e.child, e = a.sibling, a = Fn(a, {
      mode: "visible",
      children: s.children
    }), a.return = t, a.sibling = null, e !== null && (x = t.deletions, x === null ? (t.deletions = [e], t.flags |= 16) : x.push(e)), t.child = a, t.memoizedState = null, a);
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
  function Ic(e, t, a) {
    return Ya(t, e.child, null, a), e = Hc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function mm(e, t, a) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), ic(e.return, t, a);
  }
  function qc(e, t, a, s, u) {
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
    switch (le(bt, s), u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          e = a.alternate, e !== null && zs(e) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), qc(
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
        qc(
          t,
          !0,
          a,
          null,
          d
        );
        break;
      case "together":
        qc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Jn(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Dr |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Ii(
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
  function Zc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && _s(e)));
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
        if (s = (a & t.childLanes) !== 0, s || (Ii(
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
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), le(bt, bt.current), s) break;
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
        if (!Zc(e, a) && (t.flags & 128) === 0)
          return Ct = !1, F2(
            e,
            t,
            a
          );
        Ct = (e.flags & 131072) !== 0;
      }
    else
      Ct = !1, Ie && (t.flags & 1048576) !== 0 && Yd(t, ys, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var s = t.elementType, u = s._init;
          if (s = u(s._payload), t.type = s, typeof s == "function")
            Ju(s) ? (e = ia(s, e), t.tag = 1, t = hm(
              null,
              t,
              s,
              e,
              a
            )) : (t.tag = 0, t = Lc(
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
            throw t = de(s) || s, Error(l(306, t, ""));
          }
        }
        return t;
      case 0:
        return Lc(
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
          u = d.element, hc(e, t), Xi(t, s, null, a);
          var x = t.memoizedState;
          if (s = x.cache, gr(t, _t, s), s !== d.cache && lc(
            t,
            [_t],
            a,
            !0
          ), Yi(), s = x.element, d.isDehydrated)
            if (d = {
              element: s,
              isDehydrated: !1,
              cache: x.cache
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
              ), Hi(u), t = dm(
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
              for (lt = Cn(e.firstChild), Lt = t, Ie = !0, Wr = null, Rn = !0, a = Qp(
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
        )) ? t.memoizedState = a : Ie || (a = t.type, e = t.pendingProps, s = Ws(
          Y.current
        ).createElement(a), s[Mt] = t, s[Ut] = e, Ot(s, a, e), Et(s), t.stateNode = s) : t.memoizedState = Sg(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return $e(t), e === null && Ie && (s = t.stateNode = yg(
          t.type,
          t.pendingProps,
          Y.current
        ), Lt = t, Rn = !0, u = lt, Mr(t.type) ? (Cf = u, lt = Cn(
          s.firstChild
        )) : lt = u), Dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Us(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ie && ((u = s = lt) && (s = __(
          s,
          t.type,
          t.pendingProps,
          Rn
        ), s !== null ? (t.stateNode = s, Lt = t, lt = Cn(
          s.firstChild
        ), Rn = !1, u = !0) : u = !1), u || ea(t)), $e(t), u = t.type, d = t.pendingProps, x = e !== null ? e.memoizedProps : null, s = d.children, bf(u, d) ? s = null : x !== null && bf(u, x) && (t.flags |= 32), t.memoizedState !== null && (u = yc(
          e,
          t,
          B2,
          null,
          null,
          a
        ), gl._currentValue = u), Us(e, t), Dt(e, t, s, a), t.child;
      case 6:
        return e === null && Ie && ((e = a = lt) && (a = b_(
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
        ), s = t.pendingProps, e === null ? t.child = Ya(
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
        return na(t), s = kt(_t), e === null ? (u = uc(), u === null && (u = Je, d = sc(), u.pooledCache = d, d.refCount++, d !== null && (u.pooledCacheLanes |= a), u = d), t.memoizedState = {
          parent: s,
          cache: u
        }, fc(t), gr(t, _t, u)) : ((e.lanes & a) !== 0 && (hc(e, t), Xi(t, null, null, a), Yi()), u = e.memoizedState, d = t.memoizedState, u.parent !== s ? (u = { parent: s, cache: s }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), gr(t, _t, s)) : (s = d.cache, gr(t, _t, s), s !== u.cache && lc(
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
        throw Fi = cc, tp;
      e.flags |= 8192;
    }
  }
  function Hs(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? $h() : 536870912, e.lanes |= t, Ka |= t);
  }
  function tl(e, t) {
    if (!Ie)
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
  function V2(e, t, a) {
    var s = t.pendingProps;
    switch (nc(t), t.tag) {
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
          e = pe.current, Ui(t) ? Xd(t) : (e = yg(u, s, a), t.stateNode = e, Wn(t));
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
          if (e = pe.current, Ui(t))
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
        return a !== e && a && (t.child.flags |= 8192), Hs(t, t.updateQueue), rt(t), null;
      case 4:
        return Ze(), e === null && mf(t.stateNode.containerInfo), rt(t), null;
      case 10:
        return Qn(t.type), rt(t), null;
      case 19:
        if (se(bt), u = t.memoizedState, u === null) return rt(t), null;
        if (s = (t.flags & 128) !== 0, d = u.rendering, d === null)
          if (s) tl(u, !1);
          else {
            if (st !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (d = zs(e), d !== null) {
                  for (t.flags |= 128, tl(u, !1), e = d.updateQueue, t.updateQueue = e, Hs(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Vd(a, e), a = a.sibling;
                  return le(
                    bt,
                    bt.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null && ye() > Zs && (t.flags |= 128, s = !0, tl(u, !1), t.lanes = 4194304);
          }
        else {
          if (!s)
            if (e = zs(d), e !== null) {
              if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, Hs(t, e), tl(u, !0), u.tail === null && u.tailMode === "hidden" && !d.alternate && !Ie)
                return rt(t), null;
            } else
              2 * ye() - u.renderingStartTime > Zs && a !== 536870912 && (t.flags |= 128, s = !0, tl(u, !1), t.lanes = 4194304);
          u.isBackwards ? (d.sibling = t.child, t.child = d) : (e = u.last, e !== null ? e.sibling = d : t.child = d, u.last = d);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = ye(), t.sibling = null, e = bt.current, le(bt, s ? e & 1 | 2 : e & 1), t) : (rt(t), null);
      case 22:
      case 23:
        return Kn(t), gc(), s = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192), s ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : rt(t), a = t.updateQueue, a !== null && Hs(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), s = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), s !== a && (t.flags |= 2048), e !== null && se(ra), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qn(_t), rt(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Y2(e, t) {
    switch (nc(t), t.tag) {
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
        return se(bt), null;
      case 4:
        return Ze(), null;
      case 10:
        return Qn(t.type), null;
      case 22:
      case 23:
        return Kn(t), gc(), e !== null && se(ra), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Qn(_t), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _m(e, t) {
    switch (nc(t), t.tag) {
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
        se(bt);
        break;
      case 10:
        Qn(t.type);
        break;
      case 22:
      case 23:
        Kn(t), gc(), e !== null && se(ra);
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
            var d = a.create, x = a.inst;
            s = d(), x.destroy = s;
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
            var x = s.inst, T = x.destroy;
            if (T !== void 0) {
              x.destroy = void 0, u = t;
              var k = a, H = T;
              try {
                H();
              } catch (F) {
                Ke(
                  u,
                  k,
                  F
                );
              }
            }
          }
          s = s.next;
        } while (s !== d);
      }
    } catch (F) {
      Ke(t, t.return, F);
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
  function Gc(e, t, a) {
    try {
      var s = e.stateNode;
      p_(s, e.type, a, t), s[Ut] = t;
    } catch (u) {
      Ke(e, e.return, u);
    }
  }
  function Em(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Mr(e.type) || e.tag === 4;
  }
  function Fc(e) {
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
  function Vc(e, t, a) {
    var s = e.tag;
    if (s === 5 || s === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Js));
    else if (s !== 4 && (s === 27 && Mr(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (Vc(e, t, a), e = e.sibling; e !== null; )
        Vc(e, t, a), e = e.sibling;
  }
  function Is(e, t, a) {
    var s = e.tag;
    if (s === 5 || s === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (s !== 4 && (s === 27 && Mr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Is(e, t, a), e = e.sibling; e !== null; )
        Is(e, t, a), e = e.sibling;
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
  var er = !1, ft = !1, Yc = !1, wm = typeof WeakSet == "function" ? WeakSet : Set, wt = null;
  function X2(e, t) {
    if (e = e.containerInfo, yf = io, e = Ld(e), Fu(e)) {
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
            var x = 0, T = -1, k = -1, H = 0, F = 0, J = e, q = null;
            t: for (; ; ) {
              for (var Z; J !== a || u !== 0 && J.nodeType !== 3 || (T = x + u), J !== d || s !== 0 && J.nodeType !== 3 || (k = x + s), J.nodeType === 3 && (x += J.nodeValue.length), (Z = J.firstChild) !== null; )
                q = J, J = Z;
              for (; ; ) {
                if (J === e) break t;
                if (q === a && ++H === u && (T = x), q === d && ++F === s && (k = x), (Z = J.nextSibling) !== null) break;
                J = q, q = J.parentNode;
              }
              J = Z;
            }
            a = T === -1 || k === -1 ? null : { start: T, end: k };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (_f = { focusedElem: e, selectionRange: a }, io = !1, wt = t; wt !== null; )
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
                  xf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      xf(e);
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
            } catch (x) {
              Ke(a, a.return, x);
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
            } catch (x) {
              Ke(
                a,
                a.return,
                x
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
          } catch (x) {
            Ke(a, a.return, x);
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
        Cr(e, a), s & 4 && Om(e, a), s & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = r_.bind(
          null,
          a
        ), S_(e, a))));
        break;
      case 22:
        if (s = a.memoizedState !== null || er, !s) {
          t = t !== null && t.memoizedState !== null || ft, u = er;
          var d = ft;
          er = s, (ft = t) && !d ? wr(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Cr(e, a), er = u, ft = d;
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
    t !== null && (e.alternate = null, Dm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Au(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var et = null, It = !1;
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
        ft || zn(a, t), tr(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        ft || zn(a, t);
        var s = et, u = It;
        Mr(a.type) && (et = a.stateNode, It = !1), tr(
          e,
          t,
          a
        ), hl(a.stateNode), et = s, It = u;
        break;
      case 5:
        ft || zn(a, t);
      case 6:
        if (s = et, u = It, et = null, tr(
          e,
          t,
          a
        ), et = s, It = u, et !== null)
          if (It)
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
        et !== null && (It ? (e = et, gg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), bl(e)) : gg(et, a.stateNode));
        break;
      case 4:
        s = et, u = It, et = a.stateNode.containerInfo, It = !0, tr(
          e,
          t,
          a
        ), et = s, It = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ft || Er(2, a, t), ft || Er(4, a, t), tr(
          e,
          t,
          a
        );
        break;
      case 1:
        ft || (zn(a, t), s = a.stateNode, typeof s.componentWillUnmount == "function" && Sm(
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
        ft = (s = ft) || a.memoizedState !== null, tr(
          e,
          t,
          a
        ), ft = s;
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
  function Q2(e) {
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
  function Xc(e, t) {
    var a = Q2(e);
    t.forEach(function(s) {
      var u = a_.bind(null, e, s);
      a.has(s) || (a.add(s), s.then(u, u));
    });
  }
  function Jt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var u = a[s], d = e, x = t, T = x;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (Mr(T.type)) {
                et = T.stateNode, It = !1;
                break e;
              }
              break;
            case 5:
              et = T.stateNode, It = !1;
              break e;
            case 3:
            case 4:
              et = T.stateNode.containerInfo, It = !0;
              break e;
          }
          T = T.return;
        }
        if (et === null) throw Error(l(160));
        Tm(d, x, u), et = null, It = !1, d = u.alternate, d !== null && (d.return = null), u.return = null;
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
        Jt(t, e), Wt(e), s & 512 && (ft || a === null || zn(a, a.return)), s & 64 && er && (e = e.updateQueue, e !== null && (s = e.callbacks, s !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? s : a.concat(s))));
        break;
      case 26:
        var u = En;
        if (Jt(t, e), Wt(e), s & 512 && (ft || a === null || zn(a, a.return)), s & 4) {
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
                      var x = Cg(
                        "link",
                        "href",
                        u
                      ).get(s + (a.href || ""));
                      if (x) {
                        for (var T = 0; T < x.length; T++)
                          if (d = x[T], d.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && d.getAttribute("rel") === (a.rel == null ? null : a.rel) && d.getAttribute("title") === (a.title == null ? null : a.title) && d.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            x.splice(T, 1);
                            break t;
                          }
                      }
                      d = u.createElement(s), Ot(d, s, a), u.head.appendChild(d);
                      break;
                    case "meta":
                      if (x = Cg(
                        "meta",
                        "content",
                        u
                      ).get(s + (a.content || ""))) {
                        for (T = 0; T < x.length; T++)
                          if (d = x[T], d.getAttribute("content") === (a.content == null ? null : "" + a.content) && d.getAttribute("name") === (a.name == null ? null : a.name) && d.getAttribute("property") === (a.property == null ? null : a.property) && d.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && d.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            x.splice(T, 1);
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
            )) : s === null && e.stateNode !== null && Gc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Jt(t, e), Wt(e), s & 512 && (ft || a === null || zn(a, a.return)), a !== null && s & 4 && Gc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Jt(t, e), Wt(e), s & 512 && (ft || a === null || zn(a, a.return)), e.flags & 32) {
          u = e.stateNode;
          try {
            Oa(u, "");
          } catch (Z) {
            Ke(e, e.return, Z);
          }
        }
        s & 4 && e.stateNode != null && (u = e.memoizedProps, Gc(
          e,
          u,
          a !== null ? a.memoizedProps : u
        )), s & 1024 && (Yc = !0);
        break;
      case 6:
        if (Jt(t, e), Wt(e), s & 4) {
          if (e.stateNode === null)
            throw Error(l(162));
          s = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = s;
          } catch (Z) {
            Ke(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (no = null, u = En, En = eo(t.containerInfo), Jt(t, e), En = u, Wt(e), s & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            bl(t.containerInfo);
          } catch (Z) {
            Ke(e, e.return, Z);
          }
        Yc && (Yc = !1, Mm(e));
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
        Jt(t, e), Wt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ef = ye()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Xc(e, s)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var k = a !== null && a.memoizedState !== null, H = er, F = ft;
        if (er = H || u, ft = F || k, Jt(t, e), ft = F, er = H, Wt(e), s & 8192)
          e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || k || er || ft || la(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                k = a = t;
                try {
                  if (d = k.stateNode, u)
                    x = d.style, typeof x.setProperty == "function" ? x.setProperty("display", "none", "important") : x.display = "none";
                  else {
                    T = k.stateNode;
                    var J = k.memoizedProps.style, q = J != null && J.hasOwnProperty("display") ? J.display : null;
                    T.style.display = q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                  }
                } catch (Z) {
                  Ke(k, k.return, Z);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                k = t;
                try {
                  k.stateNode.nodeValue = u ? "" : k.memoizedProps;
                } catch (Z) {
                  Ke(k, k.return, Z);
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
        s & 4 && (s = e.updateQueue, s !== null && (a = s.retryQueue, a !== null && (s.retryQueue = null, Xc(e, a))));
        break;
      case 19:
        Jt(t, e), Wt(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Xc(e, s)));
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
            var u = a.stateNode, d = Fc(e);
            Is(e, d, u);
            break;
          case 5:
            var x = a.stateNode;
            a.flags & 32 && (Oa(x, ""), a.flags &= -33);
            var T = Fc(e);
            Is(e, T, x);
            break;
          case 3:
          case 4:
            var k = a.stateNode.containerInfo, H = Fc(e);
            Vc(
              e,
              H,
              k
            );
            break;
          default:
            throw Error(l(161));
        }
      } catch (F) {
        Ke(e, e.return, F);
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
      var s = t.alternate, u = e, d = t, x = d.flags;
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
            } catch (H) {
              Ke(s, s.return, H);
            }
          if (s = d, u = s.updateQueue, u !== null) {
            var T = s.stateNode;
            try {
              var k = u.shared.hiddenCallbacks;
              if (k !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < k.length; u++)
                  lp(k[u], T);
            } catch (H) {
              Ke(s, s.return, H);
            }
          }
          a && x & 64 && bm(d), rl(d, d.return);
          break;
        case 27:
          Cm(d);
        case 26:
        case 5:
          wr(
            u,
            d,
            a
          ), a && s === null && x & 4 && xm(d), rl(d, d.return);
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
          ), a && x & 4 && Om(u, d);
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
  function Qc(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && qi(a));
  }
  function $c(e, t) {
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
            var d = t.memoizedProps, x = d.id, T = d.onPostCommit;
            typeof T == "function" && T(
              x,
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
        d = t.stateNode, x = t.alternate, t.memoizedState !== null ? d._visibility & 2 ? Ln(
          e,
          t,
          a,
          s
        ) : al(e, t) : d._visibility & 2 ? Ln(
          e,
          t,
          a,
          s
        ) : (d._visibility |= 2, Xa(
          e,
          t,
          a,
          s,
          (t.subtreeFlags & 10256) !== 0
        )), u & 2048 && Qc(x, t);
        break;
      case 24:
        Ln(
          e,
          t,
          a,
          s
        ), u & 2048 && $c(t.alternate, t);
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
  function Xa(e, t, a, s, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var d = e, x = t, T = a, k = s, H = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          Xa(
            d,
            x,
            T,
            k,
            u
          ), nl(8, x);
          break;
        case 23:
          break;
        case 22:
          var F = x.stateNode;
          x.memoizedState !== null ? F._visibility & 2 ? Xa(
            d,
            x,
            T,
            k,
            u
          ) : al(
            d,
            x
          ) : (F._visibility |= 2, Xa(
            d,
            x,
            T,
            k,
            u
          )), u && H & 2048 && Qc(
            x.alternate,
            x
          );
          break;
        case 24:
          Xa(
            d,
            x,
            T,
            k,
            u
          ), u && H & 2048 && $c(x.alternate, x);
          break;
        default:
          Xa(
            d,
            x,
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
            al(a, s), u & 2048 && Qc(
              s.alternate,
              s
            );
            break;
          case 24:
            al(a, s), u & 2048 && $c(s.alternate, s);
            break;
          default:
            al(a, s);
        }
        t = t.sibling;
      }
  }
  var il = 8192;
  function Qa(e) {
    if (e.subtreeFlags & il)
      for (e = e.child; e !== null; )
        Rm(e), e = e.sibling;
  }
  function Rm(e) {
    switch (e.tag) {
      case 26:
        Qa(e), e.flags & il && e.memoizedState !== null && j_(
          En,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Qa(e);
        break;
      case 3:
      case 4:
        var t = En;
        En = eo(e.stateNode.containerInfo), Qa(e), En = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = il, il = 16777216, Qa(e), il = t) : Qa(e));
        break;
      default:
        Qa(e);
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
  var $2 = {
    getCacheForType: function(e) {
      var t = kt(_t), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, K2 = typeof WeakMap == "function" ? WeakMap : Map, Ge = 0, Je = null, Re = null, Ue = 0, Fe = 0, en = null, Ar = !1, $a = !1, Kc = !1, nr = 0, st = 0, Dr = 0, sa = 0, Jc = 0, gn = 0, Ka = 0, sl = null, qt = null, Wc = !1, ef = 0, Zs = 1 / 0, Gs = null, Tr = null, Tt = 0, Or = null, Ja = null, Wa = 0, tf = 0, nf = null, Bm = null, ol = 0, rf = null;
  function tn() {
    if ((Ge & 2) !== 0 && Ue !== 0)
      return Ue & -Ue;
    if (I.T !== null) {
      var e = Ha;
      return e !== 0 ? e : ff();
    }
    return Wh();
  }
  function Um() {
    gn === 0 && (gn = (Ue & 536870912) === 0 || Ie ? Qh() : 536870912);
    var e = mn.current;
    return e !== null && (e.flags |= 32), gn;
  }
  function nn(e, t, a) {
    (e === Je && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null) && (ei(e, 0), Nr(
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
    var s = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || wi(e, t), u = s ? e_(e, t) : sf(e, t, !0), d = s;
    do {
      if (u === 0) {
        $a && !s && Nr(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, d && !J2(a)) {
          u = sf(e, t, !1), d = !1;
          continue;
        }
        if (u === 2) {
          if (d = t, e.errorRecoveryDisabledLanes & d)
            var x = 0;
          else
            x = e.pendingLanes & -536870913, x = x !== 0 ? x : x & 536870912 ? 536870912 : 0;
          if (x !== 0) {
            t = x;
            e: {
              var T = e;
              u = sl;
              var k = T.current.memoizedState.isDehydrated;
              if (k && (ei(T, x).flags |= 256), x = sf(
                T,
                x,
                !1
              ), x !== 2) {
                if (Kc && !k) {
                  T.errorRecoveryDisabledLanes |= d, sa |= d, u = 4;
                  break e;
                }
                d = qt, qt = u, d !== null && (qt === null ? qt = d : qt.push.apply(
                  qt,
                  d
                ));
              }
              u = x;
            }
            if (d = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          ei(e, 0), Nr(e, t, 0, !0);
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
          if ((t & 62914560) === t && (u = ef + 300 - ye(), 10 < u)) {
            if (Nr(
              s,
              t,
              gn,
              !Ar
            ), ts(s, 0, !0) !== 0) break e;
            s.timeoutHandle = pg(
              Hm.bind(
                null,
                s,
                a,
                qt,
                Gs,
                Wc,
                t,
                gn,
                sa,
                Ka,
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
          Hm(
            s,
            a,
            qt,
            Gs,
            Wc,
            t,
            gn,
            sa,
            Ka,
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
  function Hm(e, t, a, s, u, d, x, T, k, H, F, J, q, Z) {
    if (e.timeoutHandle = -1, J = t.subtreeFlags, (J & 8192 || (J & 16785408) === 16785408) && (ml = { stylesheets: null, count: 0, unsuspend: R_ }, Rm(t), J = z_(), J !== null)) {
      e.cancelPendingCommit = J(
        Ym.bind(
          null,
          e,
          t,
          d,
          a,
          s,
          u,
          x,
          T,
          k,
          F,
          1,
          q,
          Z
        )
      ), Nr(e, d, x, !H);
      return;
    }
    Ym(
      e,
      t,
      d,
      a,
      s,
      u,
      x,
      T,
      k
    );
  }
  function J2(e) {
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
    t &= ~Jc, t &= ~sa, e.suspendedLanes |= t, e.pingedLanes &= ~t, s && (e.warmLanes |= t), s = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var d = 31 - Qt(u), x = 1 << d;
      s[d] = -1, u &= ~x;
    }
    a !== 0 && Kh(e, a, t);
  }
  function Fs() {
    return (Ge & 6) === 0 ? (ul(0), !1) : !0;
  }
  function af() {
    if (Re !== null) {
      if (Fe === 0)
        var e = Re.return;
      else
        e = Re, Xn = ta = null, Sc(e), Va = null, Wi = 0, e = Re;
      for (; e !== null; )
        _m(e.alternate, e), e = e.return;
      Re = null;
    }
  }
  function ei(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, g_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), af(), Je = e, Re = a = Fn(e.current, null), Ue = t, Fe = 0, en = null, Ar = !1, $a = wi(e, t), Kc = !1, Ka = gn = Jc = sa = Dr = st = 0, qt = sl = null, Wc = !1, (t & 8) !== 0 && (t |= t & 32);
    var s = e.entangledLanes;
    if (s !== 0)
      for (e = e.entanglements, s &= t; 0 < s; ) {
        var u = 31 - Qt(s), d = 1 << u;
        t |= e[u], s &= ~d;
      }
    return nr = t, ds(), a;
  }
  function Im(e, t) {
    Me = null, I.H = ks, t === Gi || t === xs ? (t = ap(), Fe = 3) : t === tp ? (t = ap(), Fe = 4) : Fe = t === im ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, en = t, Re === null && (st = 1, Bs(
      e,
      fn(t, e.current)
    ));
  }
  function qm() {
    var e = I.H;
    return I.H = ks, e === null ? ks : e;
  }
  function Zm() {
    var e = I.A;
    return I.A = $2, e;
  }
  function lf() {
    st = 4, Ar || (Ue & 4194048) !== Ue && mn.current !== null || ($a = !0), (Dr & 134217727) === 0 && (sa & 134217727) === 0 || Je === null || Nr(
      Je,
      Ue,
      gn,
      !1
    );
  }
  function sf(e, t, a) {
    var s = Ge;
    Ge |= 2;
    var u = qm(), d = Zm();
    (Je !== e || Ue !== t) && (Gs = null, ei(e, t)), t = !1;
    var x = st;
    e: do
      try {
        if (Fe !== 0 && Re !== null) {
          var T = Re, k = en;
          switch (Fe) {
            case 8:
              af(), x = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              mn.current === null && (t = !0);
              var H = Fe;
              if (Fe = 0, en = null, ti(e, T, k, H), a && $a) {
                x = 0;
                break e;
              }
              break;
            default:
              H = Fe, Fe = 0, en = null, ti(e, T, k, H);
          }
        }
        W2(), x = st;
        break;
      } catch (F) {
        Im(e, F);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Xn = ta = null, Ge = s, I.H = u, I.A = d, Re === null && (Je = null, Ue = 0, ds()), x;
  }
  function W2() {
    for (; Re !== null; ) Gm(Re);
  }
  function e_(e, t) {
    var a = Ge;
    Ge |= 2;
    var s = qm(), u = Zm();
    Je !== e || Ue !== t ? (Gs = null, Zs = ye() + 500, ei(e, t)) : $a = wi(
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
              Fe = 0, en = null, ti(e, t, d, 1);
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
              np(d) ? (Fe = 0, en = null, Fm(t)) : (Fe = 0, en = null, ti(e, t, d, 7));
              break;
            case 5:
              var x = null;
              switch (Re.tag) {
                case 26:
                  x = Re.memoizedState;
                case 5:
                case 27:
                  var T = Re;
                  if (!x || Ag(x)) {
                    Fe = 0, en = null;
                    var k = T.sibling;
                    if (k !== null) Re = k;
                    else {
                      var H = T.return;
                      H !== null ? (Re = H, Vs(H)) : Re = null;
                    }
                    break t;
                  }
              }
              Fe = 0, en = null, ti(e, t, d, 5);
              break;
            case 6:
              Fe = 0, en = null, ti(e, t, d, 6);
              break;
            case 8:
              af(), st = 6;
              break e;
            default:
              throw Error(l(462));
          }
        }
        t_();
        break;
      } catch (F) {
        Im(e, F);
      }
    while (!0);
    return Xn = ta = null, I.H = s, I.A = u, Ge = a, Re !== null ? 0 : (Je = null, Ue = 0, ds(), st);
  }
  function t_() {
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
        Sc(t);
      default:
        _m(a, t), t = Re = Vd(t, nr), t = vm(a, t, nr);
    }
    e.memoizedProps = e.pendingProps, t === null ? Vs(e) : Re = t;
  }
  function ti(e, t, a, s) {
    Xn = ta = null, Sc(t), Va = null, Wi = 0;
    var u = t.return;
    try {
      if (G2(
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
    t.flags & 32768 ? (Ie || s === 1 ? e = !0 : $a || (Ue & 536870912) !== 0 ? e = !1 : (Ar = e = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = mn.current, s !== null && s.tag === 13 && (s.flags |= 16384))), Vm(t, e)) : Vs(t);
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
      var a = V2(
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
      var a = Y2(e.alternate, e);
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
  function Ym(e, t, a, s, u, d, x, T, k) {
    e.cancelPendingCommit = null;
    do
      Ys();
    while (Tt !== 0);
    if ((Ge & 6) !== 0) throw Error(l(327));
    if (t !== null) {
      if (t === e.current) throw Error(l(177));
      if (d = t.lanes | t.childLanes, d |= $u, R1(
        e,
        a,
        d,
        x,
        T,
        k
      ), e === Je && (Re = Je = null, Ue = 0), Ja = t, Or = e, Wa = a, tf = d, nf = u, Bm = s, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, i_(He, function() {
        return Jm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), s = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || s) {
        s = I.T, I.T = null, u = B.p, B.p = 2, x = Ge, Ge |= 4;
        try {
          X2(e, t, a);
        } finally {
          Ge = x, B.p = u, I.T = s;
        }
      }
      Tt = 1, Xm(), Qm(), $m();
    }
  }
  function Xm() {
    if (Tt === 1) {
      Tt = 0;
      var e = Or, t = Ja, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = I.T, I.T = null;
        var s = B.p;
        B.p = 2;
        var u = Ge;
        Ge |= 4;
        try {
          Nm(t, e);
          var d = _f, x = Ld(e.containerInfo), T = d.focusedElem, k = d.selectionRange;
          if (x !== T && T && T.ownerDocument && zd(
            T.ownerDocument.documentElement,
            T
          )) {
            if (k !== null && Fu(T)) {
              var H = k.start, F = k.end;
              if (F === void 0 && (F = H), "selectionStart" in T)
                T.selectionStart = H, T.selectionEnd = Math.min(
                  F,
                  T.value.length
                );
              else {
                var J = T.ownerDocument || document, q = J && J.defaultView || window;
                if (q.getSelection) {
                  var Z = q.getSelection(), Se = T.textContent.length, ve = Math.min(k.start, Se), Qe = k.end === void 0 ? ve : Math.min(k.end, Se);
                  !Z.extend && ve > Qe && (x = Qe, Qe = ve, ve = x);
                  var L = jd(
                    T,
                    ve
                  ), z = jd(
                    T,
                    Qe
                  );
                  if (L && z && (Z.rangeCount !== 1 || Z.anchorNode !== L.node || Z.anchorOffset !== L.offset || Z.focusNode !== z.node || Z.focusOffset !== z.offset)) {
                    var U = J.createRange();
                    U.setStart(L.node, L.offset), Z.removeAllRanges(), ve > Qe ? (Z.addRange(U), Z.extend(z.node, z.offset)) : (U.setEnd(z.node, z.offset), Z.addRange(U));
                  }
                }
              }
            }
            for (J = [], Z = T; Z = Z.parentNode; )
              Z.nodeType === 1 && J.push({
                element: Z,
                left: Z.scrollLeft,
                top: Z.scrollTop
              });
            for (typeof T.focus == "function" && T.focus(), T = 0; T < J.length; T++) {
              var Q = J[T];
              Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
            }
          }
          io = !!yf, _f = yf = null;
        } finally {
          Ge = u, B.p = s, I.T = a;
        }
      }
      e.current = t, Tt = 2;
    }
  }
  function Qm() {
    if (Tt === 2) {
      Tt = 0;
      var e = Or, t = Ja, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = I.T, I.T = null;
        var s = B.p;
        B.p = 2;
        var u = Ge;
        Ge |= 4;
        try {
          Am(e, t.alternate, t);
        } finally {
          Ge = u, B.p = s, I.T = a;
        }
      }
      Tt = 3;
    }
  }
  function $m() {
    if (Tt === 4 || Tt === 3) {
      Tt = 0, qe();
      var e = Or, t = Ja, a = Wa, s = Bm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Tt = 5 : (Tt = 0, Ja = Or = null, Km(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (u === 0 && (Tr = null), Cu(a), t = t.stateNode, Xt && typeof Xt.onCommitFiberRoot == "function")
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
        t = I.T, u = B.p, B.p = 2, I.T = null;
        try {
          for (var d = e.onRecoverableError, x = 0; x < s.length; x++) {
            var T = s[x];
            d(T.value, {
              componentStack: T.stack
            });
          }
        } finally {
          I.T = t, B.p = u;
        }
      }
      (Wa & 3) !== 0 && Ys(), Bn(e), u = e.pendingLanes, (a & 4194090) !== 0 && (u & 42) !== 0 ? e === rf ? ol++ : (ol = 0, rf = e) : ol = 0, ul(0);
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
    var e = Or, t = tf;
    tf = 0;
    var a = Cu(Wa), s = I.T, u = B.p;
    try {
      B.p = 32 > a ? 32 : a, I.T = null, a = nf, nf = null;
      var d = Or, x = Wa;
      if (Tt = 0, Ja = Or = null, Wa = 0, (Ge & 6) !== 0) throw Error(l(331));
      var T = Ge;
      if (Ge |= 4, zm(d.current), km(
        d,
        d.current,
        x,
        a
      ), Ge = T, ul(0, !1), Xt && typeof Xt.onPostCommitFiberRoot == "function")
        try {
          Xt.onPostCommitFiberRoot(Ci, d);
        } catch {
        }
      return !0;
    } finally {
      B.p = u, I.T = s, Km(e, t);
    }
  }
  function Wm(e, t, a) {
    t = fn(a, t), t = zc(e.stateNode, t, 2), e = _r(e, t, 2), e !== null && (Ai(e, 2), Bn(e));
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
  function of(e, t, a) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new K2();
      var u = /* @__PURE__ */ new Set();
      s.set(t, u);
    } else
      u = s.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), s.set(t, u));
    u.has(a) || (Kc = !0, u.add(a), e = n_.bind(null, e, t, a), t.then(e, e));
  }
  function n_(e, t, a) {
    var s = e.pingCache;
    s !== null && s.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Je === e && (Ue & a) === a && (st === 4 || st === 3 && (Ue & 62914560) === Ue && 300 > ye() - ef ? (Ge & 2) === 0 && ei(e, 0) : Jc |= a, Ka === Ue && (Ka = 0)), Bn(e);
  }
  function eg(e, t) {
    t === 0 && (t = $h()), e = La(e, t), e !== null && (Ai(e, t), Bn(e));
  }
  function r_(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), eg(e, a);
  }
  function a_(e, t) {
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
  function i_(e, t) {
    return ae(e, t);
  }
  var Xs = null, ni = null, uf = !1, Qs = !1, cf = !1, oa = 0;
  function Bn(e) {
    e !== ni && e.next === null && (ni === null ? Xs = ni = e : ni = ni.next = e), Qs = !0, uf || (uf = !0, s_());
  }
  function ul(e, t) {
    if (!cf && Qs) {
      cf = !0;
      do
        for (var a = !1, s = Xs; s !== null; ) {
          if (e !== 0) {
            var u = s.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var x = s.suspendedLanes, T = s.pingedLanes;
              d = (1 << 31 - Qt(42 | e) + 1) - 1, d &= u & ~(x & ~T), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
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
      cf = !1;
    }
  }
  function l_() {
    tg();
  }
  function tg() {
    Qs = uf = !1;
    var e = 0;
    oa !== 0 && (m_() && (e = oa), oa = 0);
    for (var t = ye(), a = null, s = Xs; s !== null; ) {
      var u = s.next, d = ng(s, t);
      d === 0 ? (s.next = null, a === null ? Xs = u : a.next = u, u === null && (ni = a)) : (a = s, (e !== 0 || (d & 3) !== 0) && (Qs = !0)), s = u;
    }
    ul(e);
  }
  function ng(e, t) {
    for (var a = e.suspendedLanes, s = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d; ) {
      var x = 31 - Qt(d), T = 1 << x, k = u[x];
      k === -1 ? ((T & a) === 0 || (T & s) !== 0) && (u[x] = k1(T, t)) : k <= t && (e.expiredLanes |= T), d &= ~T;
    }
    if (t = Je, a = Ue, a = ts(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), s = e.callbackNode, a === 0 || e === t && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null)
      return s !== null && s !== null && re(s), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || wi(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (s !== null && re(s), Cu(a)) {
        case 2:
        case 8:
          a = Mn;
          break;
        case 32:
          a = He;
          break;
        case 268435456:
          a = Jl;
          break;
        default:
          a = He;
      }
      return s = rg.bind(null, e), a = ae(a, s), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return s !== null && s !== null && re(s), e.callbackPriority = 2, e.callbackNode = null, 2;
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
    ), s === 0 ? null : (Pm(e, s, t), ng(e, ye()), e.callbackNode != null && e.callbackNode === a ? rg.bind(null, e) : null);
  }
  function ag(e, t) {
    if (Ys()) return null;
    Pm(e, t, !0);
  }
  function s_() {
    v_(function() {
      (Ge & 6) !== 0 ? ae(
        zt,
        l_
      ) : tg();
    });
  }
  function ff() {
    return oa === 0 && (oa = Qh()), oa;
  }
  function ig(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ls("" + e);
  }
  function lg(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function o_(e, t, a, s, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var d = ig(
        (u[Ut] || null).action
      ), x = s.submitter;
      x && (t = (t = x[Ut] || null) ? ig(t.formAction) : x.getAttribute("formAction"), t !== null && (d = t, x = null));
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
                  var k = x ? lg(u, x) : new FormData(u);
                  Nc(
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
                typeof d == "function" && (T.preventDefault(), k = x ? lg(u, x) : new FormData(u), Nc(
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
  for (var hf = 0; hf < Qu.length; hf++) {
    var df = Qu[hf], u_ = df.toLowerCase(), c_ = df[0].toUpperCase() + df.slice(1);
    xn(
      u_,
      "on" + c_
    );
  }
  xn(Pd, "onAnimationEnd"), xn(Hd, "onAnimationIteration"), xn(Id, "onAnimationStart"), xn("dblclick", "onDoubleClick"), xn("focusin", "onFocus"), xn("focusout", "onBlur"), xn(D2, "onTransitionRun"), xn(T2, "onTransitionStart"), xn(O2, "onTransitionCancel"), xn(qd, "onTransitionEnd"), Aa("onMouseEnter", ["mouseout", "mouseover"]), Aa("onMouseLeave", ["mouseout", "mouseover"]), Aa("onPointerEnter", ["pointerout", "pointerover"]), Aa("onPointerLeave", ["pointerout", "pointerover"]), Vr(
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
  ), f_ = new Set(
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
          for (var x = s.length - 1; 0 <= x; x--) {
            var T = s[x], k = T.instance, H = T.currentTarget;
            if (T = T.listener, k !== d && u.isPropagationStopped())
              break e;
            d = T, u.currentTarget = H;
            try {
              d(u);
            } catch (F) {
              Ls(F);
            }
            u.currentTarget = null, d = k;
          }
        else
          for (x = 0; x < s.length; x++) {
            if (T = s[x], k = T.instance, H = T.currentTarget, T = T.listener, k !== d && u.isPropagationStopped())
              break e;
            d = T, u.currentTarget = H;
            try {
              d(u);
            } catch (F) {
              Ls(F);
            }
            u.currentTarget = null, d = k;
          }
      }
    }
  }
  function je(e, t) {
    var a = t[wu];
    a === void 0 && (a = t[wu] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    a.has(s) || (og(t, e, 2, !1), a.add(s));
  }
  function pf(e, t, a) {
    var s = 0;
    t && (s |= 4), og(
      a,
      e,
      s,
      t
    );
  }
  var $s = "_reactListening" + Math.random().toString(36).slice(2);
  function mf(e) {
    if (!e[$s]) {
      e[$s] = !0, td.forEach(function(a) {
        a !== "selectionchange" && (f_.has(a) || pf(a, !1, e), pf(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$s] || (t[$s] = !0, pf("selectionchange", !1, t));
    }
  }
  function og(e, t, a, s) {
    switch (kg(t)) {
      case 2:
        var u = U_;
        break;
      case 8:
        u = P_;
        break;
      default:
        u = Of;
    }
    a = u.bind(
      null,
      t,
      a,
      e
    ), u = void 0, !Lu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), s ? u !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, a, !0) : u !== void 0 ? e.addEventListener(t, a, {
      passive: u
    }) : e.addEventListener(t, a, !1);
  }
  function gf(e, t, a, s, u) {
    var d = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (; ; ) {
        if (s === null) return;
        var x = s.tag;
        if (x === 3 || x === 4) {
          var T = s.stateNode.containerInfo;
          if (T === u) break;
          if (x === 4)
            for (x = s.return; x !== null; ) {
              var k = x.tag;
              if ((k === 3 || k === 4) && x.stateNode.containerInfo === u)
                return;
              x = x.return;
            }
          for (; T !== null; ) {
            if (x = Ea(T), x === null) return;
            if (k = x.tag, k === 5 || k === 6 || k === 26 || k === 27) {
              s = d = x;
              continue e;
            }
            T = T.parentNode;
          }
        }
        s = s.return;
      }
    md(function() {
      var H = d, F = ju(a), J = [];
      e: {
        var q = Zd.get(e);
        if (q !== void 0) {
          var Z = cs, Se = e;
          switch (e) {
            case "keypress":
              if (os(a) === 0) break e;
            case "keydown":
            case "keyup":
              Z = i2;
              break;
            case "focusin":
              Se = "focus", Z = Hu;
              break;
            case "focusout":
              Se = "blur", Z = Hu;
              break;
            case "beforeblur":
            case "afterblur":
              Z = Hu;
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
              Z = yd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Y1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = o2;
              break;
            case Pd:
            case Hd:
            case Id:
              Z = $1;
              break;
            case qd:
              Z = c2;
              break;
            case "scroll":
            case "scrollend":
              Z = F1;
              break;
            case "wheel":
              Z = h2;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = J1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = bd;
              break;
            case "toggle":
            case "beforetoggle":
              Z = p2;
          }
          var ve = (t & 4) !== 0, Qe = !ve && (e === "scroll" || e === "scrollend"), L = ve ? q !== null ? q + "Capture" : null : q;
          ve = [];
          for (var z = H, U; z !== null; ) {
            var Q = z;
            if (U = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || U === null || L === null || (Q = Oi(z, L), Q != null && ve.push(
              fl(z, Q, U)
            )), Qe) break;
            z = z.return;
          }
          0 < ve.length && (q = new Z(
            q,
            Se,
            null,
            a,
            F
          ), J.push({ event: q, listeners: ve }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (q = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", q && a !== Ru && (Se = a.relatedTarget || a.fromElement) && (Ea(Se) || Se[xa]))
            break e;
          if ((Z || q) && (q = F.window === F ? F : (q = F.ownerDocument) ? q.defaultView || q.parentWindow : window, Z ? (Se = a.relatedTarget || a.toElement, Z = H, Se = Se ? Ea(Se) : null, Se !== null && (Qe = c(Se), ve = Se.tag, Se !== Qe || ve !== 5 && ve !== 27 && ve !== 6) && (Se = null)) : (Z = null, Se = H), Z !== Se)) {
            if (ve = yd, Q = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (ve = bd, Q = "onPointerLeave", L = "onPointerEnter", z = "pointer"), Qe = Z == null ? q : Ti(Z), U = Se == null ? q : Ti(Se), q = new ve(
              Q,
              z + "leave",
              Z,
              a,
              F
            ), q.target = Qe, q.relatedTarget = U, Q = null, Ea(F) === H && (ve = new ve(
              L,
              z + "enter",
              Se,
              a,
              F
            ), ve.target = U, ve.relatedTarget = Qe, Q = ve), Qe = Q, Z && Se)
              t: {
                for (ve = Z, L = Se, z = 0, U = ve; U; U = ri(U))
                  z++;
                for (U = 0, Q = L; Q; Q = ri(Q))
                  U++;
                for (; 0 < z - U; )
                  ve = ri(ve), z--;
                for (; 0 < U - z; )
                  L = ri(L), U--;
                for (; z--; ) {
                  if (ve === L || L !== null && ve === L.alternate)
                    break t;
                  ve = ri(ve), L = ri(L);
                }
                ve = null;
              }
            else ve = null;
            Z !== null && ug(
              J,
              q,
              Z,
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
          if (q = H ? Ti(H) : window, Z = q.nodeName && q.nodeName.toLowerCase(), Z === "select" || Z === "input" && q.type === "file")
            var ue = Td;
          else if (Ad(q))
            if (Od)
              ue = C2;
            else {
              ue = x2;
              var ke = S2;
            }
          else
            Z = q.nodeName, !Z || Z.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? H && ku(H.elementType) && (ue = Td) : ue = E2;
          if (ue && (ue = ue(e, H))) {
            Dd(
              J,
              ue,
              a,
              F
            );
            break e;
          }
          ke && ke(e, q, H), e === "focusout" && H && q.type === "number" && H.memoizedProps.value != null && Mu(q, "number", q.value);
        }
        switch (ke = H ? Ti(H) : window, e) {
          case "focusin":
            (Ad(ke) || ke.contentEditable === "true") && (Ra = ke, Vu = H, Bi = null);
            break;
          case "focusout":
            Bi = Vu = Ra = null;
            break;
          case "mousedown":
            Yu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Yu = !1, Bd(J, a, F);
            break;
          case "selectionchange":
            if (A2) break;
          case "keydown":
          case "keyup":
            Bd(J, a, F);
        }
        var he;
        if (qu)
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
          ka ? Cd(e, a) && (_e = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (_e = "onCompositionStart");
        _e && (Sd && a.locale !== "ko" && (ka || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && ka && (he = gd()) : (mr = F, Bu = "value" in mr ? mr.value : mr.textContent, ka = !0)), ke = Ks(H, _e), 0 < ke.length && (_e = new _d(
          _e,
          e,
          null,
          a,
          F
        ), J.push({ event: _e, listeners: ke }), he ? _e.data = he : (he = wd(a), he !== null && (_e.data = he)))), (he = g2 ? v2(e, a) : y2(e, a)) && (_e = Ks(H, "onBeforeInput"), 0 < _e.length && (ke = new _d(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          F
        ), J.push({
          event: ke,
          listeners: _e
        }), ke.data = he)), o_(
          J,
          e,
          H,
          a,
          F
        );
      }
      sg(J, t);
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
  function ri(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ug(e, t, a, s, u) {
    for (var d = t._reactName, x = []; a !== null && a !== s; ) {
      var T = a, k = T.alternate, H = T.stateNode;
      if (T = T.tag, k !== null && k === s) break;
      T !== 5 && T !== 26 && T !== 27 || H === null || (k = H, u ? (H = Oi(a, d), H != null && x.unshift(
        fl(a, H, k)
      )) : u || (H = Oi(a, d), H != null && x.push(
        fl(a, H, k)
      ))), a = a.return;
    }
    x.length !== 0 && e.push({ event: t, listeners: x });
  }
  var h_ = /\r\n?/g, d_ = /\u0000|\uFFFD/g;
  function cg(e) {
    return (typeof e == "string" ? e : "" + e).replace(h_, `
`).replace(d_, "");
  }
  function fg(e, t) {
    return t = cg(t), cg(e) === t;
  }
  function Js() {
  }
  function Xe(e, t, a, s, u, d) {
    switch (a) {
      case "children":
        typeof s == "string" ? t === "body" || t === "textarea" && s === "" || Oa(e, s) : (typeof s == "number" || typeof s == "bigint") && t !== "body" && Oa(e, "" + s);
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
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Z1.get(a) || a, ns(e, a, s));
    }
  }
  function vf(e, t, a, s, u, d) {
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
        typeof s == "string" ? Oa(e, s) : (typeof s == "number" || typeof s == "bigint") && Oa(e, "" + s);
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
            var x = a[d];
            if (x != null)
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
                  Xe(e, t, d, x, a, null);
              }
          }
        u && Xe(e, t, "srcSet", a.srcSet, a, null), s && Xe(e, t, "src", a.src, a, null);
        return;
      case "input":
        je("invalid", e);
        var T = d = x = u = null, k = null, H = null;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var F = a[s];
            if (F != null)
              switch (s) {
                case "name":
                  u = F;
                  break;
                case "type":
                  x = F;
                  break;
                case "checked":
                  k = F;
                  break;
                case "defaultChecked":
                  H = F;
                  break;
                case "value":
                  d = F;
                  break;
                case "defaultValue":
                  T = F;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (F != null)
                    throw Error(l(137, t));
                  break;
                default:
                  Xe(e, t, s, F, a, null);
              }
          }
        ud(
          e,
          d,
          T,
          k,
          H,
          x,
          u,
          !1
        ), as(e);
        return;
      case "select":
        je("invalid", e), s = x = d = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (T = a[u], T != null))
            switch (u) {
              case "value":
                d = T;
                break;
              case "defaultValue":
                x = T;
                break;
              case "multiple":
                s = T;
              default:
                Xe(e, t, u, T, a, null);
            }
        t = d, a = x, e.multiple = !!s, t != null ? Ta(e, !!s, t, !1) : a != null && Ta(e, !!s, a, !0);
        return;
      case "textarea":
        je("invalid", e), d = u = s = null;
        for (x in a)
          if (a.hasOwnProperty(x) && (T = a[x], T != null))
            switch (x) {
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
                Xe(e, t, x, T, a, null);
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
        for (H in a)
          if (a.hasOwnProperty(H) && (s = a[H], s != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, t));
              default:
                Xe(e, t, H, s, a, null);
            }
        return;
      default:
        if (ku(t)) {
          for (F in a)
            a.hasOwnProperty(F) && (s = a[F], s !== void 0 && vf(
              e,
              t,
              F,
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
  function p_(e, t, a, s) {
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
        var u = null, d = null, x = null, T = null, k = null, H = null, F = null;
        for (Z in a) {
          var J = a[Z];
          if (a.hasOwnProperty(Z) && J != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                k = J;
              default:
                s.hasOwnProperty(Z) || Xe(e, t, Z, null, s, J);
            }
        }
        for (var q in s) {
          var Z = s[q];
          if (J = a[q], s.hasOwnProperty(q) && (Z != null || J != null))
            switch (q) {
              case "type":
                d = Z;
                break;
              case "name":
                u = Z;
                break;
              case "checked":
                H = Z;
                break;
              case "defaultChecked":
                F = Z;
                break;
              case "value":
                x = Z;
                break;
              case "defaultValue":
                T = Z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(l(137, t));
                break;
              default:
                Z !== J && Xe(
                  e,
                  t,
                  q,
                  Z,
                  s,
                  J
                );
            }
        }
        Nu(
          e,
          x,
          T,
          k,
          H,
          F,
          d,
          u
        );
        return;
      case "select":
        Z = x = T = q = null;
        for (d in a)
          if (k = a[d], a.hasOwnProperty(d) && k != null)
            switch (d) {
              case "value":
                break;
              case "multiple":
                Z = k;
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
                x = d;
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
        t = T, a = x, s = Z, q != null ? Ta(e, !!a, q, !1) : !!s != !!a && (t != null ? Ta(e, !!a, t, !0) : Ta(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        Z = q = null;
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
        for (x in s)
          if (u = s[x], d = a[x], s.hasOwnProperty(x) && (u != null || d != null))
            switch (x) {
              case "value":
                q = u;
                break;
              case "defaultValue":
                Z = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(l(91));
                break;
              default:
                u !== d && Xe(e, t, x, u, s, d);
            }
        cd(e, q, Z);
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
          if (q = s[k], Z = a[k], s.hasOwnProperty(k) && q !== Z && (q != null || Z != null))
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
        for (var ve in a)
          q = a[ve], a.hasOwnProperty(ve) && q != null && !s.hasOwnProperty(ve) && Xe(e, t, ve, null, s, q);
        for (H in s)
          if (q = s[H], Z = a[H], s.hasOwnProperty(H) && q !== Z && (q != null || Z != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(l(137, t));
                break;
              default:
                Xe(
                  e,
                  t,
                  H,
                  q,
                  s,
                  Z
                );
            }
        return;
      default:
        if (ku(t)) {
          for (var Qe in a)
            q = a[Qe], a.hasOwnProperty(Qe) && q !== void 0 && !s.hasOwnProperty(Qe) && vf(
              e,
              t,
              Qe,
              void 0,
              s,
              q
            );
          for (F in s)
            q = s[F], Z = a[F], !s.hasOwnProperty(F) || q === Z || q === void 0 && Z === void 0 || vf(
              e,
              t,
              F,
              q,
              s,
              Z
            );
          return;
        }
    }
    for (var L in a)
      q = a[L], a.hasOwnProperty(L) && q != null && !s.hasOwnProperty(L) && Xe(e, t, L, null, s, q);
    for (J in s)
      q = s[J], Z = a[J], !s.hasOwnProperty(J) || q === Z || q == null && Z == null || Xe(e, t, J, q, s, Z);
  }
  var yf = null, _f = null;
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
  function bf(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Sf = null;
  function m_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Sf ? !1 : (Sf = e, !0) : (Sf = null, !1);
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
    var a = t, s = 0, u = 0;
    do {
      var d = a.nextSibling;
      if (e.removeChild(a), d && d.nodeType === 8)
        if (a = d.data, a === "/$") {
          if (0 < s && 8 > s) {
            a = s;
            var x = e.ownerDocument;
            if (a & 1 && hl(x.documentElement), a & 2 && hl(x.body), a & 4)
              for (a = x.head, hl(a), x = a.firstChild; x; ) {
                var T = x.nextSibling, k = x.nodeName;
                x[Di] || k === "SCRIPT" || k === "STYLE" || k === "LINK" && x.rel.toLowerCase() === "stylesheet" || a.removeChild(x), x = T;
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
  function xf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          xf(a), Au(a);
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
  function __(e, t, a, s) {
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
  function b_(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Cn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ef(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function S_(e, t) {
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
  var Cf = null;
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
    Au(e);
  }
  var vn = /* @__PURE__ */ new Map(), _g = /* @__PURE__ */ new Set();
  function eo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var rr = B.d;
  B.d = {
    f: x_,
    r: E_,
    D: C_,
    C: w_,
    L: A_,
    m: D_,
    X: O_,
    S: T_,
    M: N_
  };
  function x_() {
    var e = rr.f(), t = Fs();
    return e || t;
  }
  function E_(e) {
    var t = Ca(e);
    t !== null && t.tag === 5 && t.type === "form" ? Pp(t) : rr.r(e);
  }
  var ai = typeof document > "u" ? null : document;
  function bg(e, t, a) {
    var s = ai;
    if (s && typeof t == "string" && t) {
      var u = cn(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), _g.has(u) || (_g.add(u), e = { rel: e, crossOrigin: a, href: t }, s.querySelector(u) === null && (t = s.createElement("link"), Ot(t, "link", e), Et(t), s.head.appendChild(t)));
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
    var s = ai;
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
          d = ii(e);
          break;
        case "script":
          d = li(e);
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
  function D_(e, t) {
    rr.m(e, t);
    var a = ai;
    if (a && e) {
      var s = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + cn(s) + '"][href="' + cn(e) + '"]', d = u;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = li(e);
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
  function T_(e, t, a) {
    rr.S(e, t, a);
    var s = ai;
    if (s && e) {
      var u = wa(s).hoistableStyles, d = ii(e);
      t = t || "default";
      var x = u.get(d);
      if (!x) {
        var T = { loading: 0, preload: null };
        if (x = s.querySelector(
          dl(d)
        ))
          T.loading = 5;
        else {
          e = _(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = vn.get(d)) && wf(e, a);
          var k = x = s.createElement("link");
          Et(k), Ot(k, "link", e), k._p = new Promise(function(H, F) {
            k.onload = H, k.onerror = F;
          }), k.addEventListener("load", function() {
            T.loading |= 1;
          }), k.addEventListener("error", function() {
            T.loading |= 2;
          }), T.loading |= 4, to(x, t, s);
        }
        x = {
          type: "stylesheet",
          instance: x,
          count: 1,
          state: T
        }, u.set(d, x);
      }
    }
  }
  function O_(e, t) {
    rr.X(e, t);
    var a = ai;
    if (a && e) {
      var s = wa(a).hoistableScripts, u = li(e), d = s.get(u);
      d || (d = a.querySelector(pl(u)), d || (e = _({ src: e, async: !0 }, t), (t = vn.get(u)) && Af(e, t), d = a.createElement("script"), Et(d), Ot(d, "link", e), a.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, s.set(u, d));
    }
  }
  function N_(e, t) {
    rr.M(e, t);
    var a = ai;
    if (a && e) {
      var s = wa(a).hoistableScripts, u = li(e), d = s.get(u);
      d || (d = a.querySelector(pl(u)), d || (e = _({ src: e, async: !0, type: "module" }, t), (t = vn.get(u)) && Af(e, t), d = a.createElement("script"), Et(d), Ot(d, "link", e), a.head.appendChild(d)), d = {
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
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = ii(a.href), a = wa(
          u
        ).hoistableStyles, s = a.get(t), s || (s = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, s)), s) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = ii(a.href);
          var d = wa(
            u
          ).hoistableStyles, x = d.get(e);
          if (x || (u = u.ownerDocument || u, x = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, d.set(e, x), (d = u.querySelector(
            dl(e)
          )) && !d._p && (x.instance = d, x.state.loading = 5), vn.has(e) || (a = {
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
            x.state
          ))), t && s === null)
            throw Error(l(528, ""));
          return x;
        }
        if (t && s !== null)
          throw Error(l(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = li(a), a = wa(
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
  function ii(e) {
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
  function M_(e, t, a, s) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? s.loading = 1 : (t = e.createElement("link"), s.preload = t, t.addEventListener("load", function() {
      return s.loading |= 1;
    }), t.addEventListener("error", function() {
      return s.loading |= 2;
    }), Ot(t, "link", a), Et(t), e.head.appendChild(t));
  }
  function li(e) {
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
          u = ii(a.href);
          var d = e.querySelector(
            dl(u)
          );
          if (d)
            return t.state.loading |= 4, t.instance = d, Et(d), d;
          s = xg(a), (u = vn.get(u)) && wf(s, u), d = (e.ownerDocument || e).createElement("link"), Et(d);
          var x = d;
          return x._p = new Promise(function(T, k) {
            x.onload = T, x.onerror = k;
          }), Ot(d, "link", s), t.state.loading |= 4, to(d, a.precedence, e), t.instance = d;
        case "script":
          return d = li(a.src), (u = e.querySelector(
            pl(d)
          )) ? (t.instance = u, Et(u), u) : (s = a, (u = vn.get(d)) && (s = _({}, a), Af(s, u)), e = e.ownerDocument || e, u = e.createElement("script"), Et(u), Ot(u, "link", s), e.head.appendChild(u), t.instance = u);
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
    ), u = s.length ? s[s.length - 1] : null, d = u, x = 0; x < s.length; x++) {
      var T = s[x];
      if (T.dataset.precedence === t) d = T;
      else if (d !== u) break;
    }
    d ? d.parentNode.insertBefore(e, d.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function wf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Af(e, t) {
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
        var x = d.getAttribute(t) || "";
        x = e + x;
        var T = s.get(x);
        T ? T.push(d) : s.set(x, [d]);
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
  var ml = null;
  function R_() {
  }
  function j_(e, t, a) {
    if (ml === null) throw Error(l(475));
    var s = ml;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var u = ii(a.href), d = e.querySelector(
          dl(u)
        );
        if (d) {
          e = d._p, e !== null && typeof e == "object" && typeof e.then == "function" && (s.count++, s = ro.bind(s), e.then(s, s)), t.state.loading |= 4, t.instance = d, Et(d);
          return;
        }
        d = e.ownerDocument || e, a = xg(a), (u = vn.get(u)) && wf(a, u), d = d.createElement("link"), Et(d);
        var x = d;
        x._p = new Promise(function(T, k) {
          x.onload = T, x.onerror = k;
        }), Ot(d, "link", a), t.instance = d;
      }
      s.stylesheets === null && (s.stylesheets = /* @__PURE__ */ new Map()), s.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (s.count++, t = ro.bind(s), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function z_() {
    if (ml === null) throw Error(l(475));
    var e = ml;
    return e.stylesheets && e.count === 0 && Df(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && Df(e, e.stylesheets), e.unsuspend) {
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
      if (a) var s = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), ao.set(e, a);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < u.length; d++) {
          var x = u[d];
          (x.nodeName === "LINK" || x.getAttribute("media") !== "not all") && (a.set(x.dataset.precedence, x), s = x);
        }
        s && a.set(null, s);
      }
      u = t.instance, x = u.getAttribute("data-precedence"), d = a.get(x) || s, d === s && a.set(null, u), a.set(x, u), this.count++, s = ro.bind(this), u.addEventListener("load", s), u.addEventListener("error", s), d ? d.parentNode.insertBefore(u, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var gl = {
    $$typeof: N,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };
  function B_(e, t, a, s, u, d, x, T) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = xu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xu(0), this.hiddenUpdates = xu(null), this.identifierPrefix = s, this.onUncaughtError = u, this.onCaughtError = d, this.onRecoverableError = x, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Dg(e, t, a, s, u, d, x, T, k, H, F, J) {
    return e = new B_(
      e,
      t,
      a,
      x,
      T,
      k,
      H,
      J
    ), t = 1, d === !0 && (t |= 24), d = Kt(3, null, null, t), e.current = d, d.stateNode = e, t = sc(), t.refCount++, e.pooledCache = t, t.refCount++, d.memoizedState = {
      element: s,
      isDehydrated: a,
      cache: t
    }, fc(d), e;
  }
  function Tg(e) {
    return e ? (e = Ba, e) : Ba;
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
  function Tf(e, t) {
    Ng(e, t), (e = e.alternate) && Ng(e, t);
  }
  function Mg(e) {
    if (e.tag === 13) {
      var t = La(e, 67108864);
      t !== null && nn(t, e, 67108864), Tf(e, 67108864);
    }
  }
  var io = !0;
  function U_(e, t, a, s) {
    var u = I.T;
    I.T = null;
    var d = B.p;
    try {
      B.p = 2, Of(e, t, a, s);
    } finally {
      B.p = d, I.T = u;
    }
  }
  function P_(e, t, a, s) {
    var u = I.T;
    I.T = null;
    var d = B.p;
    try {
      B.p = 8, Of(e, t, a, s);
    } finally {
      B.p = d, I.T = u;
    }
  }
  function Of(e, t, a, s) {
    if (io) {
      var u = Nf(s);
      if (u === null)
        gf(
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
      else if (Rg(e, s), t & 4 && -1 < H_.indexOf(e)) {
        for (; u !== null; ) {
          var d = Ca(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var x = Fr(d.pendingLanes);
                  if (x !== 0) {
                    var T = d;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; x; ) {
                      var k = 1 << 31 - Qt(x);
                      T.entanglements[1] |= k, x &= ~k;
                    }
                    Bn(d), (Ge & 6) === 0 && (Zs = ye() + 500, ul(0));
                  }
                }
                break;
              case 13:
                T = La(d, 2), T !== null && nn(T, d, 2), Fs(), Tf(d, 2);
            }
          if (d = Nf(s), d === null && gf(
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
        gf(
          e,
          t,
          s,
          null,
          a
        );
    }
  }
  function Nf(e) {
    return e = ju(e), Mf(e);
  }
  var lo = null;
  function Mf(e) {
    if (lo = null, e = Ea(e), e !== null) {
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
        switch (Ae()) {
          case zt:
            return 2;
          case Mn:
            return 8;
          case He:
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
  var kf = !1, kr = null, Rr = null, jr = null, vl = /* @__PURE__ */ new Map(), yl = /* @__PURE__ */ new Map(), zr = [], H_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
    }, t !== null && (t = Ca(t), t !== null && Mg(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
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
    var t = Ea(e.target);
    if (t !== null) {
      var a = c(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = h(a), t !== null) {
            e.blockedOn = t, j1(e.priority, function() {
              if (a.tag === 13) {
                var s = tn();
                s = Eu(s);
                var u = La(a, s);
                u !== null && nn(u, a, s), Tf(a, s);
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
      var a = Nf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var s = new a.constructor(
          a.type,
          a
        );
        Ru = s, a.target.dispatchEvent(s), Ru = null;
      } else
        return t = Ca(a), t !== null && Mg(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function zg(e, t, a) {
    so(e) && a.delete(t);
  }
  function q_() {
    kf = !1, kr !== null && so(kr) && (kr = null), Rr !== null && so(Rr) && (Rr = null), jr !== null && so(jr) && (jr = null), vl.forEach(zg), yl.forEach(zg);
  }
  function oo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, kf || (kf = !0, n.unstable_scheduleCallback(
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
          var a = e[t], s = e[t + 1], u = e[t + 2];
          if (typeof s != "function") {
            if (Mf(s || a) === null)
              continue;
            break;
          }
          var d = Ca(a);
          d !== null && (e.splice(t, 3), t -= 3, Nc(
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
        var u = a[s], d = a[s + 1], x = u[Ut] || null;
        if (typeof d == "function")
          x || Lg(a);
        else if (x) {
          var T = null;
          if (d && d.hasAttribute("formAction")) {
            if (u = d, x = d[Ut] || null)
              T = x.formAction;
            else if (Mf(u) !== null) continue;
          } else T = x.action;
          typeof T == "function" ? a[s + 1] = T : (a.splice(s, 3), s -= 3), Lg(a);
        }
      }
  }
  function Rf(e) {
    this._internalRoot = e;
  }
  co.prototype.render = Rf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    var a = t.current, s = tn();
    Og(a, s, e, t, null, null);
  }, co.prototype.unmount = Rf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Og(e.current, 2, null, e, null, null), Fs(), t[xa] = null;
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
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = v(t), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Z_ = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: I,
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
  return xl.createRoot = function(e, t) {
    if (!o(e)) throw Error(l(299));
    var a = !1, s = "", u = Wp, d = em, x = tm, T = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (d = t.onCaughtError), t.onRecoverableError !== void 0 && (x = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (T = t.unstable_transitionCallbacks)), t = Dg(
      e,
      1,
      !1,
      null,
      null,
      a,
      s,
      u,
      d,
      x,
      T,
      null
    ), e[xa] = t.current, mf(e), new Rf(t);
  }, xl.hydrateRoot = function(e, t, a) {
    if (!o(e)) throw Error(l(299));
    var s = !1, u = "", d = Wp, x = em, T = tm, k = null, H = null;
    return a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (d = a.onUncaughtError), a.onCaughtError !== void 0 && (x = a.onCaughtError), a.onRecoverableError !== void 0 && (T = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (k = a.unstable_transitionCallbacks), a.formState !== void 0 && (H = a.formState)), t = Dg(
      e,
      1,
      !0,
      t,
      a ?? null,
      s,
      u,
      d,
      x,
      T,
      k,
      H
    ), t.context = Tg(null), a = t.current, s = tn(), s = Eu(s), u = yr(s), u.callback = null, _r(a, u, s), a = s, t.current.lanes = a, Ai(t, a), Bn(t), e[xa] = t.current, mf(e), new co(t);
  }, xl.version = "19.1.1", xl;
}
var Jg;
function tb() {
  if (Jg) return Bf.exports;
  Jg = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Bf.exports = eb(), Bf.exports;
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
async function lb(n, r) {
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
async function sb(n, r) {
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
    const p = {
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
      let v = function(g, _) {
        let b = !1;
        for (const y of Object.keys(_))
          g[y] === void 0 ? (g[y] = _[y], b = !0) : typeof _[y] == "object" && _[y] !== null && (g[y] = g[y] || {}, v(g[y], _[y]) && (b = !0));
        return b;
      };
      l && c.version !== l && (p.version.changed = !0, p.version.new = l, c.version = l), o && o !== "*" && c.formatVersion !== o && (p.formatVersion.changed = !0, p.formatVersion.new = o, c.formatVersion = o), (v(c, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      l && !c.version && (c.version = l, p.version.changed = !0, p.version.new = l), o && !c.formatVersion && (c.formatVersion = o, p.formatVersion.changed = !0, p.formatVersion.new = o);
      let v = structuredClone(c), g = c.formatVersion;
      try {
        let _;
        do {
          _ = !1;
          let b = i.find((y) => y.from === g);
          if (b && b.to > g)
            v = await b.action(v), g = b.to, v.formatVersion = b.to, _ = !0;
          else
            for (const y of i)
              if (y.from === "*" && y.to > g && g !== y.to) {
                v = await y.action(v), g = y.to, v.formatVersion = y.to, _ = !0;
                break;
              }
        } while (_);
        if (g !== c.formatVersion) {
          p.formatVersion.changed = !0, p.formatVersion.new = g;
          const b = this.defaultSettings.version;
          b && (v.version = b);
        }
        if (p.formatVersion.changed) {
          for (const b of Object.keys(c))
            delete c[b];
          Object.assign(c, v), this.saveSettings();
        }
      } catch (_) {
        throw console.error("Failed to apply version changes:", _), new Error(`Version migration failed: ${_ instanceof Error ? _.message : _}`, {
          cause: _
        });
      }
    }
    return p.newSettings = c, p;
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
function Hn(n) {
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
function sn(n) {
  return n != null;
}
function If(n) {
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
  if (Hn(n) || cr(n))
    l = n, r = nv(n), i = uh(n);
  else {
    if (!tv.call(n, "name"))
      throw new Error(vb("name"));
    const h = n.name;
    if (l = h, tv.call(n, "weight") && (o = n.weight, o <= 0))
      throw new Error(yb(h));
    r = nv(h), i = uh(h), c = n.getFn;
  }
  return { path: r, id: i, weight: o, src: l, getFn: c };
}
function nv(n) {
  return cr(n) ? n : n.split(".");
}
function uh(n) {
  return cr(n) ? n.join(".") : n;
}
function bb(n, r) {
  let i = [], l = !1;
  const o = (c, h, p) => {
    if (sn(c))
      if (!h[p])
        i.push(c);
      else {
        let v = h[p];
        const g = c[v];
        if (!sn(g))
          return;
        if (p === h.length - 1 && (Hn(g) || Xy(g) || hb(g)))
          i.push(fb(g));
        else if (cr(g)) {
          l = !0;
          for (let _ = 0, b = g.length; _ < b; _ += 1)
            o(g[_], h, p + 1);
        } else h.length && o(g, h, p + 1);
      }
  };
  return o(n, Hn(r) ? r.split(".") : r, 0), l ? i : i[0];
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
  const i = /* @__PURE__ */ new Map(), l = Math.pow(10, r);
  return {
    get(o) {
      const c = o.match(wb).length;
      if (i.has(c))
        return i.get(c);
      const h = 1 / Math.pow(c, 0.5 * n), p = parseFloat(Math.round(h * l) / l);
      return i.set(c, p), p;
    },
    clear() {
      i.clear();
    }
  };
}
class Mh {
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
    this.keys = r, this._keysMap = {}, r.forEach((i, l) => {
      this._keysMap[i.id] = l;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, Hn(this.docs[0]) ? this.docs.forEach((r, i) => {
      this._addString(r, i);
    }) : this.docs.forEach((r, i) => {
      this._addObject(r, i);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const i = this.size();
    Hn(r) ? this._addString(r, i) : this._addObject(r, i);
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
    if (!sn(r) || If(r))
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
          let p = [];
          const v = [{ nestedArrIndex: -1, value: h }];
          for (; v.length; ) {
            const { nestedArrIndex: g, value: _ } = v.pop();
            if (sn(_))
              if (Hn(_) && !If(_)) {
                let b = {
                  v: _,
                  i: g,
                  n: this.norm.get(_)
                };
                p.push(b);
              } else cr(_) && _.forEach((b, y) => {
                v.push({
                  nestedArrIndex: y,
                  value: b
                });
              });
          }
          l.$[c] = p;
        } else if (Hn(h) && !If(h)) {
          let p = {
            v: h,
            n: this.norm.get(h)
          };
          l.$[c] = p;
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
  const o = new Mh({ getFn: i, fieldNormWeight: l });
  return o.setKeys(n.map(Ky)), o.setSources(r), o.create(), o;
}
function Db(n, { getFn: r = Ce.getFn, fieldNormWeight: i = Ce.fieldNormWeight } = {}) {
  const { keys: l, records: o } = n, c = new Mh({ getFn: r, fieldNormWeight: i });
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
  const p = Math.abs(l - i);
  return o ? h + p / o : p ? 1 : h;
}
function Tb(n = [], r = Ce.minMatchCharLength) {
  let i = [], l = -1, o = -1, c = 0;
  for (let h = n.length; c < h; c += 1) {
    let p = n[c];
    p && l === -1 ? l = c : !p && l !== -1 && (o = c - 1, o - l + 1 >= r && i.push([l, o]), l = -1);
  }
  return n[c - 1] && c - l >= r && i.push([l, c - 1]), i;
}
const da = 32;
function Ob(n, r, i, {
  location: l = Ce.location,
  distance: o = Ce.distance,
  threshold: c = Ce.threshold,
  findAllMatches: h = Ce.findAllMatches,
  minMatchCharLength: p = Ce.minMatchCharLength,
  includeMatches: v = Ce.includeMatches,
  ignoreLocation: g = Ce.ignoreLocation
} = {}) {
  if (r.length > da)
    throw new Error(gb(da));
  const _ = r.length, b = n.length, y = Math.max(0, Math.min(l, b));
  let m = c, f = y;
  const S = p > 1 || v, E = S ? Array(b) : [];
  let D;
  for (; (D = n.indexOf(r, f)) > -1; ) {
    let R = ho(r, {
      currentLocation: D,
      expectedLocation: y,
      distance: o,
      ignoreLocation: g
    });
    if (m = Math.min(R, m), f = D + _, S) {
      let G = 0;
      for (; G < _; )
        E[D + G] = 1, G += 1;
    }
  }
  f = -1;
  let w = [], N = 1, C = _ + b;
  const O = 1 << _ - 1;
  for (let R = 0; R < _; R += 1) {
    let G = 0, ee = C;
    for (; G < ee; )
      ho(r, {
        errors: R,
        currentLocation: y + ee,
        expectedLocation: y,
        distance: o,
        ignoreLocation: g
      }) <= m ? G = ee : C = ee, ee = Math.floor((C - G) / 2 + G);
    C = ee;
    let K = Math.max(1, y - ee + 1), $ = h ? b : Math.min(y + ee, b) + _, te = Array($ + 2);
    te[$ + 1] = (1 << R) - 1;
    for (let de = $; de >= K; de -= 1) {
      let be = de - 1, I = i[n.charAt(be)];
      if (S && (E[be] = +!!I), te[de] = (te[de + 1] << 1 | 1) & I, R && (te[de] |= (w[de + 1] | w[de]) << 1 | 1 | w[de + 1]), te[de] & O && (N = ho(r, {
        errors: R,
        currentLocation: be,
        expectedLocation: y,
        distance: o,
        ignoreLocation: g
      }), N <= m)) {
        if (m = N, f = be, f <= y)
          break;
        K = Math.max(1, 2 * y - f);
      }
    }
    if (ho(r, {
      errors: R + 1,
      currentLocation: y,
      expectedLocation: y,
      distance: o,
      ignoreLocation: g
    }) > m)
      break;
    w = te;
  }
  const j = {
    isMatch: f >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, N)
  };
  if (S) {
    const R = Tb(E, p);
    R.length ? v && (j.indices = R) : j.isMatch = !1;
  }
  return j;
}
function Nb(n) {
  let r = {};
  for (let i = 0, l = n.length; i < l; i += 1) {
    const o = n.charAt(i);
    r[o] = (r[o] || 0) | 1 << l - i - 1;
  }
  return r;
}
const nu = String.prototype.normalize ? ((n) => n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((n) => n);
class Wy {
  constructor(r, {
    location: i = Ce.location,
    threshold: l = Ce.threshold,
    distance: o = Ce.distance,
    includeMatches: c = Ce.includeMatches,
    findAllMatches: h = Ce.findAllMatches,
    minMatchCharLength: p = Ce.minMatchCharLength,
    isCaseSensitive: v = Ce.isCaseSensitive,
    ignoreDiacritics: g = Ce.ignoreDiacritics,
    ignoreLocation: _ = Ce.ignoreLocation
  } = {}) {
    if (this.options = {
      location: i,
      threshold: l,
      distance: o,
      includeMatches: c,
      findAllMatches: h,
      minMatchCharLength: p,
      isCaseSensitive: v,
      ignoreDiacritics: g,
      ignoreLocation: _
    }, r = v ? r : r.toLowerCase(), r = g ? nu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const b = (m, f) => {
      this.chunks.push({
        pattern: m,
        alphabet: Nb(m),
        startIndex: f
      });
    }, y = this.pattern.length;
    if (y > da) {
      let m = 0;
      const f = y % da, S = y - f;
      for (; m < S; )
        b(this.pattern.substr(m, da), m), m += da;
      if (f) {
        const E = y - da;
        b(this.pattern.substr(E), E);
      }
    } else
      b(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: i, ignoreDiacritics: l, includeMatches: o } = this.options;
    if (r = i ? r : r.toLowerCase(), r = l ? nu(r) : r, this.pattern === r) {
      let S = {
        isMatch: !0,
        score: 0
      };
      return o && (S.indices = [[0, r.length - 1]]), S;
    }
    const {
      location: c,
      distance: h,
      threshold: p,
      findAllMatches: v,
      minMatchCharLength: g,
      ignoreLocation: _
    } = this.options;
    let b = [], y = 0, m = !1;
    this.chunks.forEach(({ pattern: S, alphabet: E, startIndex: D }) => {
      const { isMatch: w, score: N, indices: C } = Ob(r, S, E, {
        location: c + D,
        distance: h,
        threshold: p,
        findAllMatches: v,
        minMatchCharLength: g,
        includeMatches: o,
        ignoreLocation: _
      });
      w && (m = !0), y += N, w && C && (b = [...b, ...C]);
    });
    let f = {
      isMatch: m,
      score: m ? y / this.chunks.length : 1
    };
    return m && o && (f.indices = b), f;
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
    const l = r.indexOf(this.pattern) === -1;
    return {
      isMatch: l,
      score: l ? 0 : 1,
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
    threshold: l = Ce.threshold,
    distance: o = Ce.distance,
    includeMatches: c = Ce.includeMatches,
    findAllMatches: h = Ce.findAllMatches,
    minMatchCharLength: p = Ce.minMatchCharLength,
    isCaseSensitive: v = Ce.isCaseSensitive,
    ignoreDiacritics: g = Ce.ignoreDiacritics,
    ignoreLocation: _ = Ce.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new Wy(r, {
      location: i,
      threshold: l,
      distance: o,
      includeMatches: c,
      findAllMatches: h,
      minMatchCharLength: p,
      isCaseSensitive: v,
      ignoreDiacritics: g,
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
const ch = [
  Mb,
  t0,
  Rb,
  jb,
  Lb,
  zb,
  kb,
  e0
], av = ch.length, Bb = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, Ub = "|";
function Pb(n, r = {}) {
  return n.split(Ub).map((i) => {
    let l = i.trim().split(Bb).filter((c) => c && !!c.trim()), o = [];
    for (let c = 0, h = l.length; c < h; c += 1) {
      const p = l[c];
      let v = !1, g = -1;
      for (; !v && ++g < av; ) {
        const _ = ch[g];
        let b = _.isMultiMatch(p);
        b && (o.push(new _(b, r)), v = !0);
      }
      if (!v)
        for (g = -1; ++g < av; ) {
          const _ = ch[g];
          let b = _.isSingleMatch(p);
          if (b) {
            o.push(new _(b, r));
            break;
          }
        }
    }
    return o;
  });
}
const Hb = /* @__PURE__ */ new Set([e0.type, t0.type]);
class Ib {
  constructor(r, {
    isCaseSensitive: i = Ce.isCaseSensitive,
    ignoreDiacritics: l = Ce.ignoreDiacritics,
    includeMatches: o = Ce.includeMatches,
    minMatchCharLength: c = Ce.minMatchCharLength,
    ignoreLocation: h = Ce.ignoreLocation,
    findAllMatches: p = Ce.findAllMatches,
    location: v = Ce.location,
    threshold: g = Ce.threshold,
    distance: _ = Ce.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: i,
      ignoreDiacritics: l,
      includeMatches: o,
      minMatchCharLength: c,
      findAllMatches: p,
      ignoreLocation: h,
      location: v,
      threshold: g,
      distance: _
    }, r = i ? r : r.toLowerCase(), r = l ? nu(r) : r, this.pattern = r, this.query = Pb(this.pattern, this.options);
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
    r = o ? r : r.toLowerCase(), r = c ? nu(r) : r;
    let h = 0, p = [], v = 0;
    for (let g = 0, _ = i.length; g < _; g += 1) {
      const b = i[g];
      p.length = 0, h = 0;
      for (let y = 0, m = b.length; y < m; y += 1) {
        const f = b[y], { isMatch: S, indices: E, score: D } = f.search(r);
        if (S) {
          if (h += 1, v += D, l) {
            const w = f.constructor.type;
            Hb.has(w) ? p = [...p, ...E] : p.push(E);
          }
        } else {
          v = 0, h = 0, p.length = 0;
          break;
        }
      }
      if (h) {
        let y = {
          isMatch: !0,
          score: v / h
        };
        return l && (y.indices = p), y;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const fh = [];
function qb(...n) {
  fh.push(...n);
}
function hh(n, r) {
  for (let i = 0, l = fh.length; i < l; i += 1) {
    let o = fh[i];
    if (o.condition(n, r))
      return new o(n, r);
  }
  return new Wy(n, r);
}
const ru = {
  AND: "$and",
  OR: "$or"
}, dh = {
  PATH: "$path",
  PATTERN: "$val"
}, ph = (n) => !!(n[ru.AND] || n[ru.OR]), Zb = (n) => !!n[dh.PATH], Gb = (n) => !cr(n) && Qy(n) && !ph(n), iv = (n) => ({
  [ru.AND]: Object.keys(n).map((r) => ({
    [r]: n[r]
  }))
});
function n0(n, r, { auto: i = !0 } = {}) {
  const l = (o) => {
    let c = Object.keys(o);
    const h = Zb(o);
    if (!h && c.length > 1 && !ph(o))
      return l(iv(o));
    if (Gb(o)) {
      const v = h ? o[dh.PATH] : c[0], g = h ? o[dh.PATTERN] : o[v];
      if (!Hn(g))
        throw new Error(mb(v));
      const _ = {
        keyId: uh(v),
        pattern: g
      };
      return i && (_.searcher = hh(g, r)), _;
    }
    let p = {
      children: [],
      operator: c[0]
    };
    return c.forEach((v) => {
      const g = o[v];
      cr(g) && g.forEach((_) => {
        p.children.push(l(_));
      });
    }), p;
  };
  return ph(n) || (n = iv(n)), l(n);
}
function Fb(n, { ignoreFieldNorm: r = Ce.ignoreFieldNorm }) {
  n.forEach((i) => {
    let l = 1;
    i.matches.forEach(({ key: o, norm: c, score: h }) => {
      const p = o ? o.weight : null;
      l *= Math.pow(
        h === 0 && p ? Number.EPSILON : h,
        (p || 1) * (r ? 1 : c)
      );
    }), i.score = l;
  });
}
function Vb(n, r) {
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
function Yb(n, r) {
  r.score = n.score;
}
function Xb(n, r, {
  includeMatches: i = Ce.includeMatches,
  includeScore: l = Ce.includeScore
} = {}) {
  const o = [];
  return i && o.push(Vb), l && o.push(Yb), n.map((c) => {
    const { idx: h } = c, p = {
      item: r[h],
      refIndex: h
    };
    return o.length && o.forEach((v) => {
      v(c, p);
    }), p;
  });
}
class xi {
  constructor(r, i = {}, l) {
    this.options = { ...Ce, ...i }, this.options.useExtendedSearch, this._keyStore = new _b(this.options.keys), this.setCollection(r, l);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof Mh))
      throw new Error(pb);
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
      ignoreFieldNorm: p
    } = this.options;
    let v = Hn(r) ? Hn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return Fb(v, { ignoreFieldNorm: p }), c && v.sort(h), Xy(i) && i > -1 && (v = v.slice(0, i)), Xb(v, this._docs, {
      includeMatches: l,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const i = hh(r, this.options), { records: l } = this._myIndex, o = [];
    return l.forEach(({ v: c, i: h, n: p }) => {
      if (!sn(c))
        return;
      const { isMatch: v, score: g, indices: _ } = i.searchIn(c);
      v && o.push({
        item: c,
        idx: h,
        matches: [{ score: g, value: c, norm: p, indices: _ }]
      });
    }), o;
  }
  _searchLogical(r) {
    const i = n0(r, this.options), l = (p, v, g) => {
      if (!p.children) {
        const { keyId: b, searcher: y } = p, m = this._findMatches({
          key: this._keyStore.get(b),
          value: this._myIndex.getValueForItemAtKeyId(v, b),
          searcher: y
        });
        return m && m.length ? [
          {
            idx: g,
            item: v,
            matches: m
          }
        ] : [];
      }
      const _ = [];
      for (let b = 0, y = p.children.length; b < y; b += 1) {
        const m = p.children[b], f = l(m, v, g);
        if (f.length)
          _.push(...f);
        else if (p.operator === ru.AND)
          return [];
      }
      return _;
    }, o = this._myIndex.records, c = {}, h = [];
    return o.forEach(({ $: p, i: v }) => {
      if (sn(p)) {
        let g = l(i, p, v);
        g.length && (c[v] || (c[v] = { idx: v, item: p, matches: [] }, h.push(c[v])), g.forEach(({ matches: _ }) => {
          c[v].matches.push(..._);
        }));
      }
    }), h;
  }
  _searchObjectList(r) {
    const i = hh(r, this.options), { keys: l, records: o } = this._myIndex, c = [];
    return o.forEach(({ $: h, i: p }) => {
      if (!sn(h))
        return;
      let v = [];
      l.forEach((g, _) => {
        v.push(
          ...this._findMatches({
            key: g,
            value: h[_],
            searcher: i
          })
        );
      }), v.length && c.push({
        idx: p,
        item: h,
        matches: v
      });
    }), c;
  }
  _findMatches({ key: r, value: i, searcher: l }) {
    if (!sn(i))
      return [];
    let o = [];
    if (cr(i))
      i.forEach(({ v: c, i: h, n: p }) => {
        if (!sn(c))
          return;
        const { isMatch: v, score: g, indices: _ } = l.searchIn(c);
        v && o.push({
          score: g,
          key: r,
          value: c,
          idx: h,
          norm: p,
          indices: _
        });
      });
    else {
      const { v: c, n: h } = i, { isMatch: p, score: v, indices: g } = l.searchIn(c);
      p && o.push({ score: v, key: r, value: c, norm: h, indices: g });
    }
    return o;
  }
}
xi.version = "7.1.0";
xi.createIndex = Jy;
xi.parseIndex = Db;
xi.config = Ce;
xi.parseQuery = n0;
qb(Ib);
async function Qb(n, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[n].callback(...r);
}
async function De(n, r, { escapeHtml: i = !0 } = {}) {
  await Qb("echo", { severity: n, escapeHtml: (!!i).toString() }, r);
}
function $b(n, r, {
  characterOverride: i,
  isMarkdown: l,
  isPrompt: o,
  isEdit: c,
  depth: h
}) {
  return V_(n, r, { characterOverride: i, isMarkdown: l, isPrompt: o, isEdit: c, depth: h });
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
      Jb(n, l, i[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : lv(Object(i)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(i, l));
    });
  }
  return n;
}
function Qo(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qo = function(r) {
    return typeof r;
  } : Qo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Qo(n);
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
      for (var l in i)
        Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
    }
    return n;
  }, fr.apply(this, arguments);
}
function Wb(n, r) {
  if (n == null) return {};
  var i = {}, l = Object.keys(n), o, c;
  for (c = 0; c < l.length; c++)
    o = l[c], !(r.indexOf(o) >= 0) && (i[o] = n[o]);
  return i;
}
function eS(n, r) {
  if (n == null) return {};
  var i = Wb(n, r), l, o;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (o = 0; o < c.length; o++)
      l = c[o], !(r.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (i[l] = n[l]);
  }
  return i;
}
var tS = "1.15.6";
function ur(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var hr = ur(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Vl = ur(/Edge/i), sv = ur(/firefox/i), zl = ur(/safari/i) && !ur(/chrome/i) && !ur(/android/i), kh = ur(/iP(ad|od|hone)/i), r0 = ur(/chrome/i) && ur(/android/i), a0 = {
  capture: !1,
  passive: !1
};
function Be(n, r, i) {
  n.addEventListener(r, i, !hr && a0);
}
function Le(n, r, i) {
  n.removeEventListener(r, i, !hr && a0);
}
function au(n, r) {
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
      if (r != null && (r[0] === ">" ? n.parentNode === i && au(n, r) : au(n, r)) || l && n === i)
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
function vi(n, r) {
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
function In() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function mt(n, r, i, l, o) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var c, h, p, v, g, _, b;
    if (n !== window && n.parentNode && n !== In() ? (c = n.getBoundingClientRect(), h = c.top, p = c.left, v = c.bottom, g = c.right, _ = c.height, b = c.width) : (h = 0, p = 0, v = window.innerHeight, g = window.innerWidth, _ = window.innerHeight, b = window.innerWidth), (r || i) && n !== window && (o = o || n.parentNode, !hr))
      do
        if (o && o.getBoundingClientRect && (xe(o, "transform") !== "none" || i && xe(o, "position") !== "static")) {
          var y = o.getBoundingClientRect();
          h -= y.top + parseInt(xe(o, "border-top-width")), p -= y.left + parseInt(xe(o, "border-left-width")), v = h + c.height, g = p + c.width;
          break;
        }
      while (o = o.parentNode);
    if (l && n !== window) {
      var m = vi(o || n), f = m && m.a, S = m && m.d;
      m && (h /= S, p /= f, b /= f, _ /= S, v = h + _, g = p + b);
    }
    return {
      top: h,
      left: p,
      bottom: v,
      right: g,
      width: b,
      height: _
    };
  }
}
function uv(n, r, i) {
  for (var l = Ir(n, !0), o = mt(n)[r]; l; ) {
    var c = mt(l)[i], h = void 0;
    if (h = o >= c, !h) return l;
    if (l === In()) break;
    l = Ir(l, !1);
  }
  return !1;
}
function bi(n, r, i, l) {
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
function Rh(n, r) {
  for (var i = n.lastElementChild; i && (i === Ee.ghost || xe(i, "display") === "none" || r && !au(i, r)); )
    i = i.previousElementSibling;
  return i || null;
}
function yn(n, r) {
  var i = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== Ee.clone && (!r || au(n, r)) && i++;
  return i;
}
function cv(n) {
  var r = 0, i = 0, l = In();
  if (n)
    do {
      var o = vi(n), c = o.a, h = o.d;
      r += n.scrollLeft * c, i += n.scrollTop * h;
    } while (n !== l && (n = n.parentNode));
  return [r, i];
}
function nS(n, r) {
  for (var i in n)
    if (n.hasOwnProperty(i)) {
      for (var l in r)
        if (r.hasOwnProperty(l) && r[l] === n[i][l]) return Number(i);
    }
  return -1;
}
function Ir(n, r) {
  if (!n || !n.getBoundingClientRect) return In();
  var i = n, l = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var o = xe(i);
      if (i.clientWidth < i.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return In();
        if (l || r) return i;
        l = !0;
      }
    }
  while (i = i.parentNode);
  return In();
}
function rS(n, r) {
  if (n && r)
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  return n;
}
function qf(n, r) {
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
function aS() {
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
    var c, h, p, v;
    if (!(!Dn(o, r.draggable, n, !1) || o.animated || o === i)) {
      var g = mt(o);
      l.left = Math.min((c = l.left) !== null && c !== void 0 ? c : 1 / 0, g.left), l.top = Math.min((h = l.top) !== null && h !== void 0 ? h : 1 / 0, g.top), l.right = Math.max((p = l.right) !== null && p !== void 0 ? p : -1 / 0, g.right), l.bottom = Math.max((v = l.bottom) !== null && v !== void 0 ? v : -1 / 0, g.bottom);
    }
  }), l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
var Ft = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function iS() {
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
              var h = vi(o, !0);
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
      n.splice(nS(n, {
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
      n.forEach(function(p) {
        var v = 0, g = p.target, _ = g.fromRect, b = mt(g), y = g.prevFromRect, m = g.prevToRect, f = p.rect, S = vi(g, !0);
        S && (b.top -= S.f, b.left -= S.e), g.toRect = b, g.thisAnimationDuration && qf(y, b) && !qf(_, b) && // Make sure animatingRect is on line between toRect & fromRect
        (f.top - b.top) / (f.left - b.left) === (_.top - b.top) / (_.left - b.left) && (v = sS(f, y, m, o.options)), qf(b, _) || (g.prevFromRect = _, g.prevToRect = b, v || (v = o.options.animation), o.animate(g, f, b, v)), v && (c = !0, h = Math.max(h, v), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, v), g.thisAnimationDuration = v);
      }), clearTimeout(r), c ? r = setTimeout(function() {
        typeof l == "function" && l();
      }, h) : typeof l == "function" && l(), n = [];
    },
    animate: function(l, o, c, h) {
      if (h) {
        xe(l, "transition", ""), xe(l, "transform", "");
        var p = vi(this.el), v = p && p.a, g = p && p.d, _ = (o.left - c.left) / (v || 1), b = (o.top - c.top) / (g || 1);
        l.animatingX = !!_, l.animatingY = !!b, xe(l, "transform", "translate3d(" + _ + "px," + b + "px,0)"), this.forRepaintDummy = lS(l), xe(l, "transition", "transform " + h + "ms" + (this.options.easing ? " " + this.options.easing : "")), xe(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          xe(l, "transition", ""), xe(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, h);
      }
    }
  };
}
function lS(n) {
  return n.offsetWidth;
}
function sS(n, r, i, l) {
  return Math.sqrt(Math.pow(r.top - n.top, 2) + Math.pow(r.left - n.left, 2)) / Math.sqrt(Math.pow(r.top - i.top, 2) + Math.pow(r.left - i.left, 2)) * l.animation;
}
var oi = [], Zf = {
  initializeByDefault: !0
}, Yl = {
  mount: function(r) {
    for (var i in Zf)
      Zf.hasOwnProperty(i) && !(i in r) && (r[i] = Zf[i]);
    oi.forEach(function(l) {
      if (l.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), oi.push(r);
  },
  pluginEvent: function(r, i, l) {
    var o = this;
    this.eventCanceled = !1, l.cancel = function() {
      o.eventCanceled = !0;
    };
    var c = r + "Global";
    oi.forEach(function(h) {
      i[h.pluginName] && (i[h.pluginName][c] && i[h.pluginName][c](qn({
        sortable: i
      }, l)), i.options[h.pluginName] && i[h.pluginName][r] && i[h.pluginName][r](qn({
        sortable: i
      }, l)));
    });
  },
  initializePlugins: function(r, i, l, o) {
    oi.forEach(function(p) {
      var v = p.pluginName;
      if (!(!r.options[v] && !p.initializeByDefault)) {
        var g = new p(r, i, r.options);
        g.sortable = r, g.options = r.options, r[v] = g, fr(l, g.defaults);
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
    return oi.forEach(function(o) {
      typeof o.eventProperties == "function" && fr(l, o.eventProperties.call(i[o.pluginName], r));
    }), l;
  },
  modifyOption: function(r, i, l) {
    var o;
    return oi.forEach(function(c) {
      r[c.pluginName] && c.optionListeners && typeof c.optionListeners[i] == "function" && (o = c.optionListeners[i].call(r[c.pluginName], l));
    }), o;
  }
};
function oS(n) {
  var r = n.sortable, i = n.rootEl, l = n.name, o = n.targetEl, c = n.cloneEl, h = n.toEl, p = n.fromEl, v = n.oldIndex, g = n.newIndex, _ = n.oldDraggableIndex, b = n.newDraggableIndex, y = n.originalEvent, m = n.putSortable, f = n.extraEventProperties;
  if (r = r || i && i[Ft], !!r) {
    var S, E = r.options, D = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !hr && !Vl ? S = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(l, !0, !0)), S.to = h || i, S.from = p || i, S.item = o || i, S.clone = c, S.oldIndex = v, S.newIndex = g, S.oldDraggableIndex = _, S.newDraggableIndex = b, S.originalEvent = y, S.pullMode = m ? m.lastPutMode : void 0;
    var w = qn(qn({}, f), Yl.getEventProperties(l, r));
    for (var N in w)
      S[N] = w[N];
    i && i.dispatchEvent(S), E[D] && E[D].call(r, S);
  }
}
var uS = ["evt"], Zt = function(r, i) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = l.evt, c = eS(l, uS);
  Yl.pluginEvent.bind(Ee)(r, i, qn({
    dragEl: ie,
    parentEl: ot,
    ghostEl: Te,
    rootEl: tt,
    nextEl: fa,
    lastDownEl: $o,
    cloneEl: at,
    cloneHidden: Hr,
    dragStarted: Ml,
    putSortable: Nt,
    activeSortable: Ee.active,
    originalEvent: o,
    oldIndex: mi,
    oldDraggableIndex: Bl,
    newIndex: ln,
    newDraggableIndex: Pr,
    hideGhostForTarget: p0,
    unhideGhostForTarget: m0,
    cloneNowHidden: function() {
      Hr = !0;
    },
    cloneNowShown: function() {
      Hr = !1;
    },
    dispatchSortableEvent: function(p) {
      Bt({
        sortable: i,
        name: p,
        originalEvent: o
      });
    }
  }, c));
};
function Bt(n) {
  oS(qn({
    putSortable: Nt,
    cloneEl: at,
    targetEl: ie,
    rootEl: tt,
    oldIndex: mi,
    oldDraggableIndex: Bl,
    newIndex: ln,
    newDraggableIndex: Pr
  }, n));
}
var ie, ot, Te, tt, fa, $o, at, Hr, mi, ln, Bl, Pr, po, Nt, pi = !1, iu = !1, lu = [], ua, wn, Gf, Ff, fv, hv, Ml, ui, Ul, Pl = !1, mo = !1, Ko, jt, Vf = [], mh = !1, su = [], gu = typeof document < "u", go = kh, dv = Vl || hr ? "cssFloat" : "float", cS = gu && !r0 && !kh && "draggable" in document.createElement("div"), f0 = (function() {
  if (gu) {
    if (hr)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
})(), h0 = function(r, i) {
  var l = xe(r), o = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), c = bi(r, 0, i), h = bi(r, 1, i), p = c && xe(c), v = h && xe(h), g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + mt(c).width, _ = v && parseInt(v.marginLeft) + parseInt(v.marginRight) + mt(h).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && p.float && p.float !== "none") {
    var b = p.float === "left" ? "left" : "right";
    return h && (v.clear === "both" || v.clear === b) ? "vertical" : "horizontal";
  }
  return c && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || g >= o && l[dv] === "none" || h && l[dv] === "none" && g + _ > o) ? "vertical" : "horizontal";
}, fS = function(r, i, l) {
  var o = l ? r.left : r.top, c = l ? r.right : r.bottom, h = l ? r.width : r.height, p = l ? i.left : i.top, v = l ? i.right : i.bottom, g = l ? i.width : i.height;
  return o === p || c === v || o + h / 2 === p + g / 2;
}, hS = function(r, i) {
  var l;
  return lu.some(function(o) {
    var c = o[Ft].options.emptyInsertThreshold;
    if (!(!c || Rh(o))) {
      var h = mt(o), p = r >= h.left - c && r <= h.right + c, v = i >= h.top - c && i <= h.bottom + c;
      if (p && v)
        return l = o;
    }
  }), l;
}, d0 = function(r) {
  function i(c, h) {
    return function(p, v, g, _) {
      var b = p.options.group.name && v.options.group.name && p.options.group.name === v.options.group.name;
      if (c == null && (h || b))
        return !0;
      if (c == null || c === !1)
        return !1;
      if (h && c === "clone")
        return c;
      if (typeof c == "function")
        return i(c(p, v, g, _), h)(p, v, g, _);
      var y = (h ? p : v).options.group.name;
      return c === !0 || typeof c == "string" && c === y || c.join && c.indexOf(y) > -1;
    };
  }
  var l = {}, o = r.group;
  (!o || Qo(o) != "object") && (o = {
    name: o
  }), l.name = o.name, l.checkPull = i(o.pull, !0), l.checkPut = i(o.put), l.revertClone = o.revertClone, r.group = l;
}, p0 = function() {
  !f0 && Te && xe(Te, "display", "none");
}, m0 = function() {
  !f0 && Te && xe(Te, "display", "");
};
gu && !r0 && document.addEventListener("click", function(n) {
  if (iu)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), iu = !1, !1;
}, !0);
var ca = function(r) {
  if (ie) {
    r = r.touches ? r.touches[0] : r;
    var i = hS(r.clientX, r.clientY);
    if (i) {
      var l = {};
      for (var o in r)
        r.hasOwnProperty(o) && (l[o] = r[o]);
      l.target = l.rootEl = i, l.preventDefault = void 0, l.stopPropagation = void 0, i[Ft]._onDragOver(l);
    }
  }
}, dS = function(r) {
  ie && ie.parentNode[Ft]._isOutsideThisEl(r.target);
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
    setData: function(h, p) {
      h.setData("Text", p.textContent);
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
    supportPointer: Ee.supportPointer !== !1 && "PointerEvent" in window && (!zl || kh),
    emptyInsertThreshold: 5
  };
  Yl.initializePlugins(this, n, i);
  for (var l in i)
    !(l in r) && (r[l] = i[l]);
  d0(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : cS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Be(n, "pointerdown", this._onTapStart) : (Be(n, "mousedown", this._onTapStart), Be(n, "touchstart", this._onTapStart)), this.nativeDraggable && (Be(n, "dragover", this), Be(n, "dragenter", this)), lu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), fr(this, iS());
}
Ee.prototype = /** @lends Sortable.prototype */
{
  constructor: Ee,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (ui = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, ie) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, l = this.el, o = this.options, c = o.preventOnFilter, h = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, v = (p || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || v, _ = o.filter;
      if (SS(l), !ie && !(/mousedown|pointerdown/.test(h) && r.button !== 0 || o.disabled) && !g.isContentEditable && !(!this.nativeDraggable && zl && v && v.tagName.toUpperCase() === "SELECT") && (v = Dn(v, o.draggable, l, !1), !(v && v.animated) && $o !== v)) {
        if (mi = yn(v), Bl = yn(v, o.draggable), typeof _ == "function") {
          if (_.call(this, r, v, this)) {
            Bt({
              sortable: i,
              rootEl: g,
              name: "filter",
              targetEl: v,
              toEl: l,
              fromEl: l
            }), Zt("filter", i, {
              evt: r
            }), c && r.preventDefault();
            return;
          }
        } else if (_ && (_ = _.split(",").some(function(b) {
          if (b = Dn(g, b.trim(), l, !1), b)
            return Bt({
              sortable: i,
              rootEl: b,
              name: "filter",
              targetEl: v,
              fromEl: l,
              toEl: l
            }), Zt("filter", i, {
              evt: r
            }), !0;
        }), _)) {
          c && r.preventDefault();
          return;
        }
        o.handle && !Dn(g, o.handle, l, !1) || this._prepareDragStart(r, p, v);
      }
    }
  },
  _prepareDragStart: function(r, i, l) {
    var o = this, c = o.el, h = o.options, p = c.ownerDocument, v;
    if (l && !ie && l.parentNode === c) {
      var g = mt(l);
      if (tt = c, ie = l, ot = ie.parentNode, fa = ie.nextSibling, $o = l, po = h.group, Ee.dragged = ie, ua = {
        target: ie,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, fv = ua.clientX - g.left, hv = ua.clientY - g.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, ie.style["will-change"] = "all", v = function() {
        if (Zt("delayEnded", o, {
          evt: r
        }), Ee.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !sv && o.nativeDraggable && (ie.draggable = !0), o._triggerDragStart(r, i), Bt({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), an(ie, h.chosenClass, !0);
      }, h.ignore.split(",").forEach(function(_) {
        l0(ie, _.trim(), Yf);
      }), Be(p, "dragover", ca), Be(p, "mousemove", ca), Be(p, "touchmove", ca), h.supportPointer ? (Be(p, "pointerup", o._onDrop), !this.nativeDraggable && Be(p, "pointercancel", o._onDrop)) : (Be(p, "mouseup", o._onDrop), Be(p, "touchend", o._onDrop), Be(p, "touchcancel", o._onDrop)), sv && this.nativeDraggable && (this.options.touchStartThreshold = 4, ie.draggable = !0), Zt("delayStart", this, {
        evt: r
      }), h.delay && (!h.delayOnTouchOnly || i) && (!this.nativeDraggable || !(Vl || hr))) {
        if (Ee.eventCanceled) {
          this._onDrop();
          return;
        }
        h.supportPointer ? (Be(p, "pointerup", o._disableDelayedDrag), Be(p, "pointercancel", o._disableDelayedDrag)) : (Be(p, "mouseup", o._disableDelayedDrag), Be(p, "touchend", o._disableDelayedDrag), Be(p, "touchcancel", o._disableDelayedDrag)), Be(p, "mousemove", o._delayedDragTouchMoveHandler), Be(p, "touchmove", o._delayedDragTouchMoveHandler), h.supportPointer && Be(p, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(v, h.delay);
      } else
        v();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var i = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ie && Yf(ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Le(r, "mouseup", this._disableDelayedDrag), Le(r, "touchend", this._disableDelayedDrag), Le(r, "touchcancel", this._disableDelayedDrag), Le(r, "pointerup", this._disableDelayedDrag), Le(r, "pointercancel", this._disableDelayedDrag), Le(r, "mousemove", this._delayedDragTouchMoveHandler), Le(r, "touchmove", this._delayedDragTouchMoveHandler), Le(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Be(document, "pointermove", this._onTouchMove) : i ? Be(document, "touchmove", this._onTouchMove) : Be(document, "mousemove", this._onTouchMove) : (Be(ie, "dragend", this), Be(tt, "dragstart", this._onDragStart));
    try {
      document.selection ? Jo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (pi = !1, tt && ie) {
      Zt("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Be(document, "dragover", dS);
      var l = this.options;
      !r && an(ie, l.dragClass, !1), an(ie, l.ghostClass, !0), Ee.active = this, r && this._appendGhost(), Bt({
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
      if (ie.parentNode[Ft]._isOutsideThisEl(r), i)
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
      var i = this.options, l = i.fallbackTolerance, o = i.fallbackOffset, c = r.touches ? r.touches[0] : r, h = Te && vi(Te, !0), p = Te && h && h.a, v = Te && h && h.d, g = go && jt && cv(jt), _ = (c.clientX - ua.clientX + o.x) / (p || 1) + (g ? g[0] - Vf[0] : 0) / (p || 1), b = (c.clientY - ua.clientY + o.y) / (v || 1) + (g ? g[1] - Vf[1] : 0) / (v || 1);
      if (!Ee.active && !pi) {
        if (l && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < l)
          return;
        this._onDragStart(r, !0);
      }
      if (Te) {
        h ? (h.e += _ - (Gf || 0), h.f += b - (Ff || 0)) : h = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: _,
          f: b
        };
        var y = "matrix(".concat(h.a, ",").concat(h.b, ",").concat(h.c, ",").concat(h.d, ",").concat(h.e, ",").concat(h.f, ")");
        xe(Te, "webkitTransform", y), xe(Te, "mozTransform", y), xe(Te, "msTransform", y), xe(Te, "transform", y), Gf = _, Ff = b, wn = c;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Te) {
      var r = this.options.fallbackOnBody ? document.body : tt, i = mt(ie, !0, go, !0, r), l = this.options;
      if (go) {
        for (jt = r; xe(jt, "position") === "static" && xe(jt, "transform") === "none" && jt !== document; )
          jt = jt.parentNode;
        jt !== document.body && jt !== document.documentElement ? (jt === document && (jt = In()), i.top += jt.scrollTop, i.left += jt.scrollLeft) : jt = In(), Vf = cv(jt);
      }
      Te = ie.cloneNode(!0), an(Te, l.ghostClass, !1), an(Te, l.fallbackClass, !0), an(Te, l.dragClass, !0), xe(Te, "transition", ""), xe(Te, "transform", ""), xe(Te, "box-sizing", "border-box"), xe(Te, "margin", 0), xe(Te, "top", i.top), xe(Te, "left", i.left), xe(Te, "width", i.width), xe(Te, "height", i.height), xe(Te, "opacity", "0.8"), xe(Te, "position", go ? "absolute" : "fixed"), xe(Te, "zIndex", "100000"), xe(Te, "pointerEvents", "none"), Ee.ghost = Te, r.appendChild(Te), xe(Te, "transform-origin", fv / parseInt(Te.style.width) * 100 + "% " + hv / parseInt(Te.style.height) * 100 + "%");
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
    Zt("setupClone", this), Ee.eventCanceled || (at = u0(ie), at.removeAttribute("id"), at.draggable = !1, at.style["will-change"] = "", this._hideClone(), an(at, this.options.chosenClass, !1), Ee.clone = at), l.cloneId = Jo(function() {
      Zt("clone", l), !Ee.eventCanceled && (l.options.removeCloneOnHide || tt.insertBefore(at, ie), l._hideClone(), Bt({
        sortable: l,
        name: "clone"
      }));
    }), !i && an(ie, c.dragClass, !0), i ? (iu = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (Le(document, "mouseup", l._onDrop), Le(document, "touchend", l._onDrop), Le(document, "touchcancel", l._onDrop), o && (o.effectAllowed = "move", c.setData && c.setData.call(l, o, ie)), Be(document, "drop", l), xe(ie, "transform", "translateZ(0)")), pi = !0, l._dragStartId = Jo(l._dragStarted.bind(l, i, r)), Be(document, "selectstart", l), Ml = !0, window.getSelection().removeAllRanges(), zl && xe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, l = r.target, o, c, h, p = this.options, v = p.group, g = Ee.active, _ = po === v, b = p.sort, y = Nt || g, m, f = this, S = !1;
    if (mh) return;
    function E(V, oe) {
      Zt(V, f, qn({
        evt: r,
        isOwner: _,
        axis: m ? "vertical" : "horizontal",
        revert: h,
        dragRect: o,
        targetRect: c,
        canSort: b,
        fromSortable: y,
        target: l,
        completed: w,
        onMove: function(X, se) {
          return vo(tt, i, ie, o, X, mt(X), r, se);
        },
        changed: N
      }, oe));
    }
    function D() {
      E("dragOverAnimationCapture"), f.captureAnimationState(), f !== y && y.captureAnimationState();
    }
    function w(V) {
      return E("dragOverCompleted", {
        insertion: V
      }), V && (_ ? g._hideClone() : g._showClone(f), f !== y && (an(ie, Nt ? Nt.options.ghostClass : g.options.ghostClass, !1), an(ie, p.ghostClass, !0)), Nt !== f && f !== Ee.active ? Nt = f : f === Ee.active && Nt && (Nt = null), y === f && (f._ignoreWhileAnimating = l), f.animateAll(function() {
        E("dragOverAnimationComplete"), f._ignoreWhileAnimating = null;
      }), f !== y && (y.animateAll(), y._ignoreWhileAnimating = null)), (l === ie && !ie.animated || l === i && !l.animated) && (ui = null), !p.dragoverBubble && !r.rootEl && l !== document && (ie.parentNode[Ft]._isOutsideThisEl(r.target), !V && ca(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), S = !0;
    }
    function N() {
      ln = yn(ie), Pr = yn(ie, p.draggable), Bt({
        sortable: f,
        name: "change",
        toEl: i,
        newIndex: ln,
        newDraggableIndex: Pr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), l = Dn(l, p.draggable, i, !0), E("dragOver"), Ee.eventCanceled) return S;
    if (ie.contains(r.target) || l.animated && l.animatingX && l.animatingY || f._ignoreWhileAnimating === l)
      return w(!1);
    if (iu = !1, g && !p.disabled && (_ ? b || (h = ot !== tt) : Nt === this || (this.lastPutMode = po.checkPull(this, g, ie, r)) && v.checkPut(this, g, ie, r))) {
      if (m = this._getDirection(r, l) === "vertical", o = mt(ie), E("dragOverValid"), Ee.eventCanceled) return S;
      if (h)
        return ot = tt, D(), this._hideClone(), E("revert"), Ee.eventCanceled || (fa ? tt.insertBefore(ie, fa) : tt.appendChild(ie)), w(!0);
      var C = Rh(i, p.draggable);
      if (!C || vS(r, m, this) && !C.animated) {
        if (C === ie)
          return w(!1);
        if (C && i === r.target && (l = C), l && (c = mt(l)), vo(tt, i, ie, o, l, c, r, !!l) !== !1)
          return D(), C && C.nextSibling ? i.insertBefore(ie, C.nextSibling) : i.appendChild(ie), ot = i, N(), w(!0);
      } else if (C && gS(r, m, this)) {
        var O = bi(i, 0, p, !0);
        if (O === ie)
          return w(!1);
        if (l = O, c = mt(l), vo(tt, i, ie, o, l, c, r, !1) !== !1)
          return D(), i.insertBefore(ie, O), ot = i, N(), w(!0);
      } else if (l.parentNode === i) {
        c = mt(l);
        var j = 0, R, G = ie.parentNode !== i, ee = !fS(ie.animated && ie.toRect || o, l.animated && l.toRect || c, m), K = m ? "top" : "left", $ = uv(l, "top", "top") || uv(ie, "top", "top"), te = $ ? $.scrollTop : void 0;
        ui !== l && (R = c[K], Pl = !1, mo = !ee && p.invertSwap || G), j = yS(r, l, c, m, ee ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, mo, ui === l);
        var ce;
        if (j !== 0) {
          var de = yn(ie);
          do
            de -= j, ce = ot.children[de];
          while (ce && (xe(ce, "display") === "none" || ce === Te));
        }
        if (j === 0 || ce === l)
          return w(!1);
        ui = l, Ul = j;
        var be = l.nextElementSibling, I = !1;
        I = j === 1;
        var B = vo(tt, i, ie, o, l, c, r, I);
        if (B !== !1)
          return (B === 1 || B === -1) && (I = B === 1), mh = !0, setTimeout(mS, 30), D(), I && !be ? i.appendChild(ie) : l.parentNode.insertBefore(ie, I ? be : l), $ && o0($, 0, te - $.scrollTop), ot = ie.parentNode, R !== void 0 && !mo && (Ko = Math.abs(R - mt(l)[K])), N(), w(!0);
      }
      if (i.contains(ie))
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
    if (ln = yn(ie), Pr = yn(ie, l.draggable), Zt("drop", this, {
      evt: r
    }), ot = ie && ie.parentNode, ln = yn(ie), Pr = yn(ie, l.draggable), Ee.eventCanceled) {
      this._nulling();
      return;
    }
    pi = !1, mo = !1, Pl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), gh(this.cloneId), gh(this._dragStartId), this.nativeDraggable && (Le(document, "drop", this), Le(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), zl && xe(document.body, "user-select", ""), xe(ie, "transform", ""), r && (Ml && (r.cancelable && r.preventDefault(), !l.dropBubble && r.stopPropagation()), Te && Te.parentNode && Te.parentNode.removeChild(Te), (tt === ot || Nt && Nt.lastPutMode !== "clone") && at && at.parentNode && at.parentNode.removeChild(at), ie && (this.nativeDraggable && Le(ie, "dragend", this), Yf(ie), ie.style["will-change"] = "", Ml && !pi && an(ie, Nt ? Nt.options.ghostClass : this.options.ghostClass, !1), an(ie, this.options.chosenClass, !1), Bt({
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
    })), Nt && Nt.save()) : ln !== mi && ln >= 0 && (Bt({
      sortable: this,
      name: "update",
      toEl: ot,
      originalEvent: r
    }), Bt({
      sortable: this,
      name: "sort",
      toEl: ot,
      originalEvent: r
    })), Ee.active && ((ln == null || ln === -1) && (ln = mi, Pr = Bl), Bt({
      sortable: this,
      name: "end",
      toEl: ot,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Zt("nulling", this), tt = ie = ot = Te = fa = at = $o = Hr = ua = wn = Ml = ln = Pr = mi = Bl = ui = Ul = Nt = po = Ee.dragged = Ee.ghost = Ee.clone = Ee.active = null, su.forEach(function(r) {
      r.checked = !0;
    }), su.length = Gf = Ff = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        ie && (this._onDragOver(r), pS(r));
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
      i = l[o], Dn(i, h.draggable, this.el, !1) && r.push(i.getAttribute(h.dataIdAttr) || bS(i));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, i) {
    var l = {}, o = this.el;
    this.toArray().forEach(function(c, h) {
      var p = o.children[h];
      Dn(p, this.options.draggable, o, !1) && (l[c] = p);
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
    }), this._onDrop(), this._disableDelayedDragEvents(), lu.splice(lu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!Hr) {
      if (Zt("hideClone", this), Ee.eventCanceled) return;
      xe(at, "display", "none"), this.options.removeCloneOnHide && at.parentNode && at.parentNode.removeChild(at), Hr = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Hr) {
      if (Zt("showClone", this), Ee.eventCanceled) return;
      ie.parentNode == tt && !this.options.group.revertClone ? tt.insertBefore(at, ie) : fa ? tt.insertBefore(at, fa) : tt.appendChild(at), this.options.group.revertClone && this.animate(ie, at), xe(at, "display", ""), Hr = !1;
    }
  }
};
function pS(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function vo(n, r, i, l, o, c, h, p) {
  var v, g = n[Ft], _ = g.options.onMove, b;
  return window.CustomEvent && !hr && !Vl ? v = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (v = document.createEvent("Event"), v.initEvent("move", !0, !0)), v.to = r, v.from = n, v.dragged = i, v.draggedRect = l, v.related = o || r, v.relatedRect = c || mt(r), v.willInsertAfter = p, v.originalEvent = h, n.dispatchEvent(v), _ && (b = _.call(g, v, h)), b;
}
function Yf(n) {
  n.draggable = !1;
}
function mS() {
  mh = !1;
}
function gS(n, r, i) {
  var l = mt(bi(i.el, 0, i.options, !0)), o = c0(i.el, i.options, Te), c = 10;
  return r ? n.clientX < o.left - c || n.clientY < l.top && n.clientX < l.right : n.clientY < o.top - c || n.clientY < l.bottom && n.clientX < l.left;
}
function vS(n, r, i) {
  var l = mt(Rh(i.el, i.options.draggable)), o = c0(i.el, i.options, Te), c = 10;
  return r ? n.clientX > o.right + c || n.clientY > l.bottom && n.clientX > l.left : n.clientY > o.bottom + c || n.clientX > l.right && n.clientY > l.top;
}
function yS(n, r, i, l, o, c, h, p) {
  var v = l ? n.clientY : n.clientX, g = l ? i.height : i.width, _ = l ? i.top : i.left, b = l ? i.bottom : i.right, y = !1;
  if (!h) {
    if (p && Ko < g * o) {
      if (!Pl && (Ul === 1 ? v > _ + g * c / 2 : v < b - g * c / 2) && (Pl = !0), Pl)
        y = !0;
      else if (Ul === 1 ? v < _ + Ko : v > b - Ko)
        return -Ul;
    } else if (v > _ + g * (1 - o) / 2 && v < b - g * (1 - o) / 2)
      return _S(r);
  }
  return y = y || h, y && (v < _ + g * c / 2 || v > b - g * c / 2) ? v > _ + g / 2 ? 1 : -1 : 0;
}
function _S(n) {
  return yn(ie) < yn(n) ? 1 : -1;
}
function bS(n) {
  for (var r = n.tagName + n.className + n.src + n.href + n.textContent, i = r.length, l = 0; i--; )
    l += r.charCodeAt(i);
  return l.toString(36);
}
function SS(n) {
  su.length = 0;
  for (var r = n.getElementsByTagName("input"), i = r.length; i--; ) {
    var l = r[i];
    l.checked && su.push(l);
  }
}
function Jo(n) {
  return setTimeout(n, 0);
}
function gh(n) {
  return clearTimeout(n);
}
gu && Be(document, "touchmove", function(n) {
  (Ee.active || pi) && n.cancelable && n.preventDefault();
});
Ee.utils = {
  on: Be,
  off: Le,
  css: xe,
  find: l0,
  is: function(r, i) {
    return !!Dn(r, i, r, !1);
  },
  extend: rS,
  throttle: s0,
  closest: Dn,
  toggleClass: an,
  clone: u0,
  index: yn,
  nextTick: Jo,
  cancelNextTick: gh,
  detectDirection: h0,
  getChild: bi,
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
Ee.version = tS;
var pt = [], kl, vh, yh = !1, Xf, Qf, ou, Rl;
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
      var l = i.originalEvent;
      this.sortable.nativeDraggable ? Be(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Be(document, "pointermove", this._handleFallbackAutoScroll) : l.touches ? Be(document, "touchmove", this._handleFallbackAutoScroll) : Be(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var l = i.originalEvent;
      !this.options.dragOverBubble && !l.rootEl && this._handleAutoScroll(l);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Le(document, "dragover", this._handleAutoScroll) : (Le(document, "pointermove", this._handleFallbackAutoScroll), Le(document, "touchmove", this._handleFallbackAutoScroll), Le(document, "mousemove", this._handleFallbackAutoScroll)), pv(), Wo(), aS();
    },
    nulling: function() {
      ou = vh = kl = yh = Rl = Xf = Qf = null, pt.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, l) {
      var o = this, c = (i.touches ? i.touches[0] : i).clientX, h = (i.touches ? i.touches[0] : i).clientY, p = document.elementFromPoint(c, h);
      if (ou = i, l || this.options.forceAutoScrollFallback || Vl || hr || zl) {
        $f(i, this.options, p, l);
        var v = Ir(p, !0);
        yh && (!Rl || c !== Xf || h !== Qf) && (Rl && pv(), Rl = setInterval(function() {
          var g = Ir(document.elementFromPoint(c, h), !0);
          g !== v && (v = g, Wo()), $f(i, o.options, g, l);
        }, 10), Xf = c, Qf = h);
      } else {
        if (!this.options.bubbleScroll || Ir(p, !0) === In()) {
          Wo();
          return;
        }
        $f(i, this.options, Ir(p, !1), !1);
      }
    }
  }, fr(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Wo() {
  pt.forEach(function(n) {
    clearInterval(n.pid);
  }), pt = [];
}
function pv() {
  clearInterval(Rl);
}
var $f = s0(function(n, r, i, l) {
  if (r.scroll) {
    var o = (n.touches ? n.touches[0] : n).clientX, c = (n.touches ? n.touches[0] : n).clientY, h = r.scrollSensitivity, p = r.scrollSpeed, v = In(), g = !1, _;
    vh !== i && (vh = i, Wo(), kl = r.scroll, _ = r.scrollFn, kl === !0 && (kl = Ir(i, !0)));
    var b = 0, y = kl;
    do {
      var m = y, f = mt(m), S = f.top, E = f.bottom, D = f.left, w = f.right, N = f.width, C = f.height, O = void 0, j = void 0, R = m.scrollWidth, G = m.scrollHeight, ee = xe(m), K = m.scrollLeft, $ = m.scrollTop;
      m === v ? (O = N < R && (ee.overflowX === "auto" || ee.overflowX === "scroll" || ee.overflowX === "visible"), j = C < G && (ee.overflowY === "auto" || ee.overflowY === "scroll" || ee.overflowY === "visible")) : (O = N < R && (ee.overflowX === "auto" || ee.overflowX === "scroll"), j = C < G && (ee.overflowY === "auto" || ee.overflowY === "scroll"));
      var te = O && (Math.abs(w - o) <= h && K + N < R) - (Math.abs(D - o) <= h && !!K), ce = j && (Math.abs(E - c) <= h && $ + C < G) - (Math.abs(S - c) <= h && !!$);
      if (!pt[b])
        for (var de = 0; de <= b; de++)
          pt[de] || (pt[de] = {});
      (pt[b].vx != te || pt[b].vy != ce || pt[b].el !== m) && (pt[b].el = m, pt[b].vx = te, pt[b].vy = ce, clearInterval(pt[b].pid), (te != 0 || ce != 0) && (g = !0, pt[b].pid = setInterval((function() {
        l && this.layer === 0 && Ee.active._onTouchMove(ou);
        var be = pt[this.layer].vy ? pt[this.layer].vy * p : 0, I = pt[this.layer].vx ? pt[this.layer].vx * p : 0;
        typeof _ == "function" && _.call(Ee.dragged.parentNode[Ft], I, be, n, ou, pt[this.layer].el) !== "continue" || o0(pt[this.layer].el, I, be);
      }).bind({
        layer: b
      }), 24))), b++;
    } while (r.bubbleScroll && y !== v && (y = Ir(y, !1)));
    yh = g;
  }
}, 30), g0 = function(r) {
  var i = r.originalEvent, l = r.putSortable, o = r.dragEl, c = r.activeSortable, h = r.dispatchSortableEvent, p = r.hideGhostForTarget, v = r.unhideGhostForTarget;
  if (i) {
    var g = l || c;
    p();
    var _ = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, b = document.elementFromPoint(_.clientX, _.clientY);
    v(), g && !g.el.contains(b) && (h("spill"), this.onSpill({
      dragEl: o,
      putSortable: l
    }));
  }
};
function jh() {
}
jh.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var i = r.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(r) {
    var i = r.dragEl, l = r.putSortable;
    this.sortable.captureAnimationState(), l && l.captureAnimationState();
    var o = bi(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(i, o) : this.sortable.el.appendChild(i), this.sortable.animateAll(), l && l.animateAll();
  },
  drop: g0
};
fr(jh, {
  pluginName: "revertOnSpill"
});
function zh() {
}
zh.prototype = {
  onSpill: function(r) {
    var i = r.dragEl, l = r.putSortable, o = l || this.sortable;
    o.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), o.animateAll();
  },
  drop: g0
};
fr(zh, {
  pluginName: "removeOnSpill"
});
Ee.mount(new xS());
Ee.mount(zh, jh);
async function ES({
  entry: n,
  selectedWorldName: r,
  skipSave: i = !1,
  skipReload: l = !1,
  operation: o = "auto"
}) {
  const c = SillyTavern.getContext(), h = await c.loadWorldInfo(r);
  if (!h)
    throw new Error("Failed to load world info");
  const p = Object.values(h.entries), v = p.length > 0 ? p[p.length - 1] : void 0;
  let g;
  if (o === "update" || o === "auto") {
    const b = Object.values(h.entries).find((y) => y.uid === n.uid);
    if (b)
      (o === "auto" || o === "update") && (g = b);
    else if (o === "update")
      throw new Error("Entry not found for update operation");
  }
  const _ = g ? "update" : "add";
  if (!g) {
    if (g = Kb(r, h), !g)
      throw new Error("Failed to create entry");
    if (v) {
      const b = g.uid;
      Object.assign(g, v), g.uid = b;
    }
  }
  return g.key = n.key, g.content = n.content, g.comment = n.comment, i || await c.saveWorldInfo(r, h), l || c.reloadWorldInfoEditor(r, !0), {
    entry: g,
    operation: _
  };
}
const eu = `=======

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

=======`, _h = `{{#if characters}}
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
{{/if}}`, v0 = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

Example:
Generated content for the field goes here.`, Lh = "{{activeFormatInstructions}}", y0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, _0 = `### {{character.name}}
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
  {{else}}*Not provided*{{/if}}`, Hl = `{{#is_not_empty fields}}
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

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, DS = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
function TS(n) {
  let r = null;
  for (const i of n.matchAll(DS))
    r = i[1].trim();
  return r;
}
function b0(n) {
  const r = n.match(/^```(?:\w+\n|\n)?([\s\S]*?)```$/);
  return r && !r[1].includes("```") ? r[1].trim() : n;
}
const OS = /^\s*<(think|thinking|reasoning)>[\s\S]*?(?:<\/\1>|$)/i;
function Xl(n) {
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
    let l = 0, o = -1, c = !1, h = !1;
    for (let p = i; p < n.length; p++) {
      const v = n[p];
      l === 0 ? v === "{" && (o = p, l = 1) : c ? h ? h = !1 : v === "\\" ? h = !0 : v === '"' && (c = !1) : v === '"' ? c = !0 : v === "{" ? l++ : v === "}" && --l === 0 && r.push(n.slice(o, p + 1));
    }
    if (l === 0)
      break;
    i = o + 1;
  }
  return r;
}
function MS(n) {
  const r = Xl(n).trim(), i = TS(r);
  let l;
  for (const c of i === null ? [r] : [r, i])
    try {
      return JSON.parse(c);
    } catch (h) {
      l = h;
    }
  const o = NS(r);
  for (let c = o.length - 1; c >= 0; c--)
    try {
      return JSON.parse(o[c]);
    } catch {
    }
  throw l;
}
function S0(n) {
  return b0(Xl(n).trim());
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
  r = Xl(r);
  const l = S0(r);
  if (l.startsWith(i))
    return l;
  const o = b0((i + r).trim());
  return o.startsWith(i) ? RS(i, o.slice(i.length)) : i + o;
}
var yo = { exports: {} }, _o = { exports: {} }, An = {}, Gt = {}, gv;
function Vt() {
  if (gv) return Gt;
  gv = 1, Gt.__esModule = !0, Gt.extend = o, Gt.indexOf = v, Gt.escapeExpression = g, Gt.isEmpty = _, Gt.createFrame = b, Gt.blockParams = y, Gt.appendContextPath = m;
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
      for (var E in arguments[S])
        Object.prototype.hasOwnProperty.call(arguments[S], E) && (f[E] = arguments[S][E]);
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
  var p = Array.isArray || function(f) {
    return f && typeof f == "object" ? c.call(f) === "[object Array]" : !1;
  };
  Gt.isArray = p;
  function v(f, S) {
    for (var E = 0, D = f.length; E < D; E++)
      if (f[E] === S)
        return E;
    return -1;
  }
  function g(f) {
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
    return !f && f !== 0 ? !0 : !!(p(f) && f.length === 0);
  }
  function b(f) {
    var S = o({}, f);
    return S._parent = f, S;
  }
  function y(f, S) {
    return f.path = S, f;
  }
  function m(f, S) {
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
      var h = c && c.loc, p = void 0, v = void 0, g = void 0, _ = void 0;
      h && (p = h.start.line, v = h.end.line, g = h.start.column, _ = h.end.column, o += " - " + p + ":" + g);
      for (var b = Error.prototype.constructor.call(this, o), y = 0; y < i.length; y++)
        this[i[y]] = b[i[y]];
      Error.captureStackTrace && Error.captureStackTrace(this, l);
      try {
        h && (this.lineNumber = p, this.endLineNumber = v, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: g,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: _,
          enumerable: !0
        })) : (this.column = g, this.endColumn = _));
      } catch {
      }
    }
    l.prototype = new Error(), r.default = l, n.exports = r.default;
  })(bo, bo.exports)), bo.exports;
}
var El = {}, So = { exports: {} }, yv;
function zS() {
  return yv || (yv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = Vt();
    r.default = function(l) {
      l.registerHelper("blockHelperMissing", function(o, c) {
        var h = c.inverse, p = c.fn;
        if (o === !0)
          return p(this);
        if (o === !1 || o == null)
          return h(this);
        if (i.isArray(o))
          return o.length > 0 ? (c.ids && (c.ids = [c.name]), l.helpers.each(o, c)) : h(this);
        if (c.data && c.ids) {
          var v = i.createFrame(c.data);
          v.contextPath = i.appendContextPath(c.data.contextPath, c.name), c = { data: v };
        }
        return p(o, c);
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
    var l = Vt(), o = Nn(), c = i(o);
    r.default = function(h) {
      h.registerHelper("each", function(p, v) {
        if (!v)
          throw new c.default("Must pass iterator to #each");
        var g = v.fn, _ = v.inverse, b = 0, y = "", m = void 0, f = void 0;
        v.data && v.ids && (f = l.appendContextPath(v.data.contextPath, v.ids[0]) + "."), l.isFunction(p) && (p = p.call(this)), v.data && (m = l.createFrame(v.data));
        function S(C, O, j) {
          m && (m.key = C, m.index = O, m.first = O === 0, m.last = !!j, f && (m.contextPath = f + C)), y = y + g(p[C], {
            data: m,
            blockParams: l.blockParams([p[C], C], [f + C, null])
          });
        }
        if (p && typeof p == "object")
          if (l.isArray(p))
            for (var E = p.length; b < E; b++)
              b in p && S(b, b, b === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var D = [], w = p[Symbol.iterator](), N = w.next(); !N.done; N = w.next())
              D.push(N.value);
            p = D;
            for (var E = p.length; b < E; b++)
              S(b, b, b === p.length - 1);
          } else
            (function() {
              var C = void 0;
              Object.keys(p).forEach(function(O) {
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
function US() {
  return Sv || (Sv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var l = Vt(), o = Nn(), c = i(o);
    r.default = function(h) {
      h.registerHelper("if", function(p, v) {
        if (arguments.length != 2)
          throw new c.default("#if requires exactly one argument");
        return l.isFunction(p) && (p = p.call(this)), !v.hash.includeZero && !p || l.isEmpty(p) ? v.inverse(this) : v.fn(this);
      }), h.registerHelper("unless", function(p, v) {
        if (arguments.length != 2)
          throw new c.default("#unless requires exactly one argument");
        return h.helpers.if.call(this, p, {
          fn: v.inverse,
          inverse: v.fn,
          hash: v.hash
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
        for (var l = [void 0], o = arguments[arguments.length - 1], c = 0; c < arguments.length - 1; c++)
          l.push(arguments[c]);
        var h = 1;
        o.hash.level != null ? h = o.hash.level : o.data && o.data.level != null && (h = o.data.level), l[0] = h, i.log.apply(i, l);
      });
    }, n.exports = r.default;
  })(wo, wo.exports)), wo.exports;
}
var Ao = { exports: {} }, Ev;
function HS() {
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
      h.registerHelper("with", function(p, v) {
        if (arguments.length != 2)
          throw new c.default("#with requires exactly one argument");
        l.isFunction(p) && (p = p.call(this));
        var g = v.fn;
        if (l.isEmpty(p))
          return v.inverse(this);
        var _ = v.data;
        return v.data && v.ids && (_ = l.createFrame(v.data), _.contextPath = l.appendContextPath(v.data.contextPath, v.ids[0])), g(p, {
          data: _,
          blockParams: l.blockParams([p], [_ && _.contextPath])
        });
      });
    }, n.exports = r.default;
  })(Do, Do.exports)), Do.exports;
}
var wv;
function x0() {
  if (wv) return El;
  wv = 1, El.__esModule = !0, El.registerDefaultHelpers = S, El.moveHelperToHooks = E;
  function n(D) {
    return D && D.__esModule ? D : { default: D };
  }
  var r = zS(), i = n(r), l = LS(), o = n(l), c = BS(), h = n(c), p = US(), v = n(p), g = PS(), _ = n(g), b = HS(), y = n(b), m = IS(), f = n(m);
  function S(D) {
    i.default(D), o.default(D), h.default(D), v.default(D), _.default(D), y.default(D), f.default(D);
  }
  function E(D, w, N) {
    D.helpers[w] && (D.hooks[w] = D.helpers[w], N || delete D.helpers[w]);
  }
  return El;
}
var To = {}, Oo = { exports: {} }, Av;
function qS() {
  return Av || (Av = 1, (function(n, r) {
    r.__esModule = !0;
    var i = Vt();
    r.default = function(l) {
      l.registerDecorator("inline", function(o, c, h, p) {
        var v = o;
        return c.partials || (c.partials = {}, v = function(g, _) {
          var b = h.partials;
          h.partials = i.extend({}, b, c.partials);
          var y = o(g, _);
          return h.partials = b, y;
        }), c.partials[p.args[0]] = p.fn, v;
      });
    }, n.exports = r.default;
  })(Oo, Oo.exports)), Oo.exports;
}
var Dv;
function ZS() {
  if (Dv) return To;
  Dv = 1, To.__esModule = !0, To.registerDefaultDecorators = l;
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = qS(), i = n(r);
  function l(o) {
    i.default(o);
  }
  return To;
}
var No = { exports: {} }, Tv;
function E0() {
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
          for (var p = arguments.length, v = Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++)
            v[g - 1] = arguments[g];
          console[h].apply(console, v);
        }
      }
    };
    r.default = l, n.exports = r.default;
  })(No, No.exports)), No.exports;
}
var ci = {}, Mo = {}, Ov;
function GS() {
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
function C0() {
  if (Nv) return ci;
  Nv = 1, ci.__esModule = !0, ci.createProtoAccessControl = c, ci.resultIsAllowed = h, ci.resetLoggedProperties = g;
  function n(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var r = GS(), i = E0(), l = n(i), o = /* @__PURE__ */ Object.create(null);
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
    return p(typeof _ == "function" ? b.methods : b.properties, y);
  }
  function p(_, b) {
    return _.whitelist[b] !== void 0 ? _.whitelist[b] === !0 : _.defaultValue !== void 0 ? _.defaultValue : (v(b), !1);
  }
  function v(_) {
    o[_] !== !0 && (o[_] = !0, l.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + _ + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function g() {
    Object.keys(o).forEach(function(_) {
      delete o[_];
    });
  }
  return ci;
}
var Mv;
function Uh() {
  if (Mv) return An;
  Mv = 1, An.__esModule = !0, An.HandlebarsEnvironment = f;
  function n(E) {
    return E && E.__esModule ? E : { default: E };
  }
  var r = Vt(), i = Nn(), l = n(i), o = x0(), c = ZS(), h = E0(), p = n(h), v = C0(), g = "4.7.8";
  An.VERSION = g;
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
  var m = "[object Object]";
  function f(E, D, w) {
    this.helpers = E || {}, this.partials = D || {}, this.decorators = w || {}, o.registerDefaultHelpers(this), c.registerDefaultDecorators(this);
  }
  f.prototype = {
    constructor: f,
    logger: p.default,
    log: p.default.log,
    registerHelper: function(D, w) {
      if (r.toString.call(D) === m) {
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
      if (r.toString.call(D) === m)
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
      if (r.toString.call(D) === m) {
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
      v.resetLoggedProperties();
    }
  };
  var S = p.default.log;
  return An.log = S, An.createFrame = r.createFrame, An.logger = p.default, An;
}
var ko = { exports: {} }, kv;
function FS() {
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
function VS() {
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
function YS() {
  if (jv) return ar;
  jv = 1, ar.__esModule = !0, ar.checkRevision = _, ar.template = b, ar.wrapProgram = y, ar.resolvePartial = m, ar.invokePartial = f, ar.noop = S;
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
  var i = Vt(), l = r(i), o = Nn(), c = n(o), h = Uh(), p = x0(), v = VS(), g = C0();
  function _(C) {
    var O = C && C[0] || 1, j = h.COMPILER_REVISION;
    if (!(O >= h.LAST_COMPATIBLE_COMPILER_REVISION && O <= h.COMPILER_REVISION))
      if (O < h.LAST_COMPATIBLE_COMPILER_REVISION) {
        var R = h.REVISION_CHANGES[j], G = h.REVISION_CHANGES[O];
        throw new c.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + R + ") or downgrade your runtime to an older version (" + G + ").");
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
    function R(K, $, te) {
      te.hash && ($ = l.extend({}, $, te.hash), te.ids && (te.ids[0] = !0)), K = O.VM.resolvePartial.call(this, K, $, te);
      var ce = l.extend({}, te, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), de = O.VM.invokePartial.call(this, K, $, ce);
      if (de == null && O.compile && (te.partials[te.name] = O.compile(K, C.compilerOptions, O), de = te.partials[te.name]($, ce)), de != null) {
        if (te.indent) {
          for (var be = de.split(`
`), I = 0, B = be.length; I < B && !(!be[I] && I + 1 === B); I++)
            be[I] = te.indent + be[I];
          de = be.join(`
`);
        }
        return de;
      } else
        throw new c.default("The partial " + te.name + " could not be compiled when running in runtime-only mode");
    }
    var G = {
      strict: function($, te, ce) {
        if (!$ || !(te in $))
          throw new c.default('"' + te + '" not defined in ' + $, {
            loc: ce
          });
        return G.lookupProperty($, te);
      },
      lookupProperty: function($, te) {
        var ce = $[te];
        if (ce == null || Object.prototype.hasOwnProperty.call($, te) || g.resultIsAllowed(ce, G.protoAccessControl, te))
          return ce;
      },
      lookup: function($, te) {
        for (var ce = $.length, de = 0; de < ce; de++) {
          var be = $[de] && G.lookupProperty($[de], te);
          if (be != null)
            return $[de][te];
        }
      },
      lambda: function($, te) {
        return typeof $ == "function" ? $.call(te) : $;
      },
      escapeExpression: l.escapeExpression,
      invokePartial: R,
      fn: function($) {
        var te = C[$];
        return te.decorator = C[$ + "_d"], te;
      },
      programs: [],
      program: function($, te, ce, de, be) {
        var I = this.programs[$], B = this.fn($);
        return te || be || de || ce ? I = y(this, $, B, te, ce, de, be) : I || (I = this.programs[$] = y(this, $, B)), I;
      },
      data: function($, te) {
        for (; $ && te--; )
          $ = $._parent;
        return $;
      },
      mergeIfNeeded: function($, te) {
        var ce = $ || te;
        return $ && te && $ !== te && (ce = l.extend({}, te, $)), ce;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: O.VM.noop,
      compilerInfo: C.compiler
    };
    function ee(K) {
      var $ = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], te = $.data;
      ee._setup($), !$.partial && C.useData && (te = E(K, te));
      var ce = void 0, de = C.useBlockParams ? [] : void 0;
      C.useDepths && ($.depths ? ce = K != $.depths[0] ? [K].concat($.depths) : $.depths : ce = [K]);
      function be(I) {
        return "" + C.main(G, I, G.helpers, G.partials, te, de, ce);
      }
      return be = D(C.main, be, G, $.depths || [], te, de), be(K, $);
    }
    return ee.isTop = !0, ee._setup = function(K) {
      if (K.partial)
        G.protoAccessControl = K.protoAccessControl, G.helpers = K.helpers, G.partials = K.partials, G.decorators = K.decorators, G.hooks = K.hooks;
      else {
        var $ = l.extend({}, O.helpers, K.helpers);
        w($, G), G.helpers = $, C.usePartial && (G.partials = G.mergeIfNeeded(K.partials, O.partials)), (C.usePartial || C.useDecorators) && (G.decorators = l.extend({}, O.decorators, K.decorators)), G.hooks = {}, G.protoAccessControl = g.createProtoAccessControl(K);
        var te = K.allowCallsToHelperMissing || j;
        p.moveHelperToHooks(G, "helperMissing", te), p.moveHelperToHooks(G, "blockHelperMissing", te);
      }
    }, ee._child = function(K, $, te, ce) {
      if (C.useBlockParams && !te)
        throw new c.default("must pass block params");
      if (C.useDepths && !ce)
        throw new c.default("must pass parent depths");
      return y(G, K, C[K], $, 0, te, ce);
    }, ee;
  }
  function y(C, O, j, R, G, ee, K) {
    function $(te) {
      var ce = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], de = K;
      return K && te != K[0] && !(te === C.nullContext && K[0] === null) && (de = [te].concat(K)), j(C, te, C.helpers, C.partials, ce.data || R, ee && [ce.blockParams].concat(ee), de);
    }
    return $ = D(j, $, C, K, R, ee), $.program = O, $.depth = K ? K.length : 0, $.blockParams = G || 0, $;
  }
  function m(C, O, j) {
    return C ? !C.call && !j.name && (j.name = C, C = j.partials[C]) : j.name === "@partial-block" ? C = j.data["partial-block"] : C = j.partials[j.name], C;
  }
  function f(C, O, j) {
    var R = j.data && j.data["partial-block"];
    j.partial = !0, j.ids && (j.data.contextPath = j.ids[0] || j.data.contextPath);
    var G = void 0;
    if (j.fn && j.fn !== S && (function() {
      j.data = h.createFrame(j.data);
      var ee = j.fn;
      G = j.data["partial-block"] = function($) {
        var te = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return te.data = h.createFrame(te.data), te.data["partial-block"] = R, ee($, te);
      }, ee.partials && (j.partials = l.extend({}, j.partials, ee.partials));
    })(), C === void 0 && G && (C = G), C === void 0)
      throw new c.default("The partial " + j.name + " could not be found");
    if (C instanceof Function)
      return C(O, j);
  }
  function S() {
    return "";
  }
  function E(C, O) {
    return (!O || !("root" in O)) && (O = O ? h.createFrame(O) : {}, O.root = C), O;
  }
  function D(C, O, j, R, G, ee) {
    if (C.decorator) {
      var K = {};
      O = C.decorator(O, K, j, R && R[0], G, ee, R), l.extend(O, K);
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
    return v.wrapHelper(C, function(R) {
      return l.extend({ lookupProperty: j }, R);
    });
  }
  return ar;
}
var jo = { exports: {} }, zv;
function w0() {
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
function XS() {
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
    var o = Uh(), c = l(o), h = FS(), p = i(h), v = Nn(), g = i(v), _ = Vt(), b = l(_), y = YS(), m = l(y), f = w0(), S = i(f);
    function E() {
      var w = new c.HandlebarsEnvironment();
      return b.extend(w, c), w.SafeString = p.default, w.Exception = g.default, w.Utils = b, w.escapeExpression = b.escapeExpression, w.VM = m, w.template = function(N) {
        return m.template(N, w);
      }, w;
    }
    var D = E();
    D.create = E, S.default(D), D.default = D, r.default = D, n.exports = r.default;
  })(_o, _o.exports)), _o.exports;
}
var zo = { exports: {} }, Bv;
function A0() {
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
var fi = {}, Lo = { exports: {} }, Uv;
function QS() {
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
        performAction: function(p, v, g, _, b, y, m) {
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
              var S = _.prepareBlock(y[f - 2], y[f - 1], y[f], y[f], !1, this._$), E = _.prepareProgram([S], y[f - 1].loc);
              E.chained = !0, this.$ = { strip: y[f - 2].strip, program: E, chain: !0 };
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
        parseError: function(p, v) {
          throw new Error(p);
        },
        parse: function(p) {
          var v = this, g = [0], _ = [null], b = [], y = this.table, m = "", f = 0, S = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var E = this.lexer.yylloc;
          b.push(E);
          var D = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function w() {
            var ce;
            return ce = v.lexer.lex() || 1, typeof ce != "number" && (ce = v.symbols_[ce] || ce), ce;
          }
          for (var N, C, O, j, R = {}, G, ee, K, $; ; ) {
            if (C = g[g.length - 1], this.defaultActions[C] ? O = this.defaultActions[C] : ((N === null || typeof N > "u") && (N = w()), O = y[C] && y[C][N]), typeof O > "u" || !O.length || !O[0]) {
              var te = "";
              {
                $ = [];
                for (G in y[C]) this.terminals_[G] && G > 2 && $.push("'" + this.terminals_[G] + "'");
                this.lexer.showPosition ? te = "Parse error on line " + (f + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + $.join(", ") + ", got '" + (this.terminals_[N] || N) + "'" : te = "Parse error on line " + (f + 1) + ": Unexpected " + (N == 1 ? "end of input" : "'" + (this.terminals_[N] || N) + "'"), this.parseError(te, { text: this.lexer.match, token: this.terminals_[N] || N, line: this.lexer.yylineno, loc: E, expected: $ });
              }
            }
            if (O[0] instanceof Array && O.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + C + ", token: " + N);
            switch (O[0]) {
              case 1:
                g.push(N), _.push(this.lexer.yytext), b.push(this.lexer.yylloc), g.push(O[1]), N = null, S = this.lexer.yyleng, m = this.lexer.yytext, f = this.lexer.yylineno, E = this.lexer.yylloc;
                break;
              case 2:
                if (ee = this.productions_[O[1]][1], R.$ = _[_.length - ee], R._$ = { first_line: b[b.length - (ee || 1)].first_line, last_line: b[b.length - 1].last_line, first_column: b[b.length - (ee || 1)].first_column, last_column: b[b.length - 1].last_column }, D && (R._$.range = [b[b.length - (ee || 1)].range[0], b[b.length - 1].range[1]]), j = this.performAction.call(R, m, S, f, this.yy, O[1], _, b), typeof j < "u")
                  return j;
                ee && (g = g.slice(0, -1 * ee * 2), _ = _.slice(0, -1 * ee), b = b.slice(0, -1 * ee)), g.push(this.productions_[O[1]][0]), _.push(R.$), b.push(R._$), K = y[g[g.length - 2]][g[g.length - 1]], g.push(K);
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
          parseError: function(v, g) {
            if (this.yy.parser)
              this.yy.parser.parseError(v, g);
            else
              throw new Error(v);
          },
          setInput: function(v) {
            return this._input = v, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var v = this._input[0];
            this.yytext += v, this.yyleng++, this.offset++, this.match += v, this.matched += v;
            var g = v.match(/(?:\r\n?|\n).*/g);
            return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), v;
          },
          unput: function(v) {
            var g = v.length, _ = v.split(/(?:\r\n?|\n)/g);
            this._input = v + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g - 1), this.offset -= g;
            var b = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), _.length - 1 && (this.yylineno -= _.length - 1);
            var y = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: _ ? (_.length === b.length ? this.yylloc.first_column : 0) + b[b.length - _.length].length - _[0].length : this.yylloc.first_column - g
            }, this.options.ranges && (this.yylloc.range = [y[0], y[0] + this.yyleng - g]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(v) {
            this.unput(this.match.slice(v));
          },
          pastInput: function() {
            var v = this.matched.substr(0, this.matched.length - this.match.length);
            return (v.length > 20 ? "..." : "") + v.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var v = this.match;
            return v.length < 20 && (v += this._input.substr(0, 20 - v.length)), (v.substr(0, 20) + (v.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var v = this.pastInput(), g = new Array(v.length + 1).join("-");
            return v + this.upcomingInput() + `
` + g + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var v, g, _, b, y;
            this._more || (this.yytext = "", this.match = "");
            for (var m = this._currentRules(), f = 0; f < m.length && (_ = this._input.match(this.rules[m[f]]), !(_ && (!g || _[0].length > g[0].length) && (g = _, b = f, !this.options.flex))); f++)
              ;
            return g ? (y = g[0].match(/(?:\r\n?|\n).*/g), y && (this.yylineno += y.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: y ? y[y.length - 1].length - y[y.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
            }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], v = this.performAction.call(this, this.yy, this, m[b], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), v || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var v = this.next();
            return typeof v < "u" ? v : this.lex();
          },
          begin: function(v) {
            this.conditionStack.push(v);
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
          pushState: function(v) {
            this.begin(v);
          }
        };
        return h.options = {}, h.performAction = function(v, g, _, b) {
          function y(m, f) {
            return g.yytext = g.yytext.substring(m, g.yyleng - f + m);
          }
          switch (_) {
            case 0:
              if (g.yytext.slice(-2) === "\\\\" ? (y(0, 1), this.begin("mu")) : g.yytext.slice(-1) === "\\" ? (y(0, 1), this.begin("emu")) : this.begin("mu"), g.yytext) return 15;
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
              return g.yytext = y(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return g.yytext = y(1, 2).replace(/\\'/g, "'"), 80;
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
function D0() {
  return Pv || (Pv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(g) {
      return g && g.__esModule ? g : { default: g };
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
      BlockStatement: p,
      DecoratorBlock: p,
      PartialStatement: v,
      PartialBlockStatement: function(_) {
        v.call(this, _), this.acceptKey(_, "program");
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
    function h(g) {
      this.acceptRequired(g, "path"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    function p(g) {
      h.call(this, g), this.acceptKey(g, "program"), this.acceptKey(g, "inverse");
    }
    function v(g) {
      this.acceptRequired(g, "name"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    r.default = c, n.exports = r.default;
  })(Uo, Uo.exports)), Uo.exports;
}
var Hv;
function $S() {
  return Hv || (Hv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }
    var l = D0(), o = i(l);
    function c() {
      var _ = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = _;
    }
    c.prototype = new o.default(), c.prototype.Program = function(_) {
      var b = !this.options.ignoreStandalone, y = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var m = _.body, f = 0, S = m.length; f < S; f++) {
        var E = m[f], D = this.accept(E);
        if (D) {
          var w = h(m, f, y), N = p(m, f, y), C = D.openStandalone && w, O = D.closeStandalone && N, j = D.inlineStandalone && w && N;
          D.close && v(m, f, !0), D.open && g(m, f, !0), b && j && (v(m, f), g(m, f) && E.type === "PartialStatement" && (E.indent = /([ \t]+$)/.exec(m[f - 1].original)[1])), b && C && (v((E.program || E.inverse).body), g(m, f)), b && O && (v(m, f), g((E.inverse || E.program).body));
        }
      }
      return _;
    }, c.prototype.BlockStatement = c.prototype.DecoratorBlock = c.prototype.PartialBlockStatement = function(_) {
      this.accept(_.program), this.accept(_.inverse);
      var b = _.program || _.inverse, y = _.program && _.inverse, m = y, f = y;
      if (y && y.chained)
        for (m = y.body[0].program; f.chained; )
          f = f.body[f.body.length - 1].program;
      var S = {
        open: _.openStrip.open,
        close: _.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(b.body),
        closeStandalone: h((m || b).body)
      };
      if (_.openStrip.close && v(b.body, null, !0), y) {
        var E = _.inverseStrip;
        E.open && g(b.body, null, !0), E.close && v(m.body, null, !0), _.closeStrip.open && g(f.body, null, !0), !this.options.ignoreStandalone && h(b.body) && p(m.body) && (g(b.body), v(m.body));
      } else _.closeStrip.open && g(b.body, null, !0);
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
      var m = _[b - 1], f = _[b - 2];
      if (!m)
        return y;
      if (m.type === "ContentStatement")
        return (f || !y ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(m.original);
    }
    function p(_, b, y) {
      b === void 0 && (b = -1);
      var m = _[b + 1], f = _[b + 2];
      if (!m)
        return y;
      if (m.type === "ContentStatement")
        return (f || !y ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(m.original);
    }
    function v(_, b, y) {
      var m = _[b == null ? 0 : b + 1];
      if (!(!m || m.type !== "ContentStatement" || !y && m.rightStripped)) {
        var f = m.value;
        m.value = m.value.replace(y ? /^\s+/ : /^[ \t]*\r?\n?/, ""), m.rightStripped = m.value !== f;
      }
    }
    function g(_, b, y) {
      var m = _[b == null ? _.length - 1 : b - 1];
      if (!(!m || m.type !== "ContentStatement" || !y && m.leftStripped)) {
        var f = m.value;
        return m.value = m.value.replace(y ? /\s+$/ : /[ \t]+$/, ""), m.leftStripped = m.value !== f, m.leftStripped;
      }
    }
    r.default = c, n.exports = r.default;
  })(Bo, Bo.exports)), Bo.exports;
}
var rn = {}, Iv;
function KS() {
  if (Iv) return rn;
  Iv = 1, rn.__esModule = !0, rn.SourceLocation = o, rn.id = c, rn.stripFlags = h, rn.stripComment = p, rn.preparePath = v, rn.prepareMustache = g, rn.prepareRawBlock = _, rn.prepareBlock = b, rn.prepareProgram = y, rn.preparePartialBlock = m;
  function n(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var r = Nn(), i = n(r);
  function l(f, S) {
    if (S = S.path ? S.path.original : S, f.path.original !== S) {
      var E = { loc: f.path.loc };
      throw new i.default(f.path.original + " doesn't match " + S, E);
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
  function p(f) {
    return f.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function v(f, S, E) {
    E = this.locInfo(E);
    for (var D = f ? "@" : "", w = [], N = 0, C = 0, O = S.length; C < O; C++) {
      var j = S[C].part, R = S[C].original !== j;
      if (D += (S[C].separator || "") + j, !R && (j === ".." || j === "." || j === "this")) {
        if (w.length > 0)
          throw new i.default("Invalid path: " + D, { loc: E });
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
      loc: E
    };
  }
  function g(f, S, E, D, w, N) {
    var C = D.charAt(3) || D.charAt(2), O = C !== "{" && C !== "&", j = /\*/.test(D);
    return {
      type: j ? "Decorator" : "MustacheStatement",
      path: f,
      params: S,
      hash: E,
      escaped: O,
      strip: w,
      loc: this.locInfo(N)
    };
  }
  function _(f, S, E, D) {
    l(f, E), D = this.locInfo(D);
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
  function b(f, S, E, D, w, N) {
    D && D.path && l(f, D);
    var C = /\*/.test(f.open);
    S.blockParams = f.blockParams;
    var O = void 0, j = void 0;
    if (E) {
      if (C)
        throw new i.default("Unexpected inverse block on decorator", E);
      E.chain && (E.program.body[0].closeStrip = D.strip), j = E.strip, O = E.program;
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
      var E = f[0].loc, D = f[f.length - 1].loc;
      E && D && (S = {
        source: E.source,
        start: {
          line: E.start.line,
          column: E.start.column
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
  function m(f, S, E, D) {
    return l(f, E), {
      type: "PartialBlockStatement",
      name: f.path,
      params: f.params,
      hash: f.hash,
      program: S,
      openStrip: f.strip,
      closeStrip: E && E.strip,
      loc: this.locInfo(D)
    };
  }
  return rn;
}
var qv;
function JS() {
  if (qv) return fi;
  qv = 1, fi.__esModule = !0, fi.parseWithoutProcessing = _, fi.parse = b;
  function n(y) {
    if (y && y.__esModule)
      return y;
    var m = {};
    if (y != null)
      for (var f in y)
        Object.prototype.hasOwnProperty.call(y, f) && (m[f] = y[f]);
    return m.default = y, m;
  }
  function r(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var i = QS(), l = r(i), o = $S(), c = r(o), h = KS(), p = n(h), v = Vt();
  fi.parser = l.default;
  var g = {};
  v.extend(g, p);
  function _(y, m) {
    if (y.type === "Program")
      return y;
    l.default.yy = g, g.locInfo = function(S) {
      return new g.SourceLocation(m && m.srcName, S);
    };
    var f = l.default.parse(y);
    return f;
  }
  function b(y, m) {
    var f = _(y, m), S = new c.default(m);
    return S.accept(f);
  }
  return fi;
}
var hi = {}, Zv;
function WS() {
  if (Zv) return hi;
  Zv = 1, hi.__esModule = !0, hi.Compiler = p, hi.precompile = v, hi.compile = g;
  function n(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = Nn(), i = n(r), l = Vt(), o = A0(), c = n(o), h = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(m) {
      var f = this.opcodes.length;
      if (m.opcodes.length !== f)
        return !1;
      for (var S = 0; S < f; S++) {
        var E = this.opcodes[S], D = m.opcodes[S];
        if (E.opcode !== D.opcode || !_(E.args, D.args))
          return !1;
      }
      f = this.children.length;
      for (var S = 0; S < f; S++)
        if (!this.children[S].equals(m.children[S]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(m, f) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = f, this.stringParams = f.stringParams, this.trackIds = f.trackIds, f.blockParams = f.blockParams || [], f.knownHelpers = l.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, f.knownHelpers), this.accept(m);
    },
    compileProgram: function(m) {
      var f = new this.compiler(), S = f.compile(m, this.options), E = this.guid++;
      return this.usePartial = this.usePartial || S.usePartial, this.children[E] = S, this.useDepths = this.useDepths || S.useDepths, E;
    },
    accept: function(m) {
      if (!this[m.type])
        throw new i.default("Unknown type: " + m.type, m);
      this.sourceNode.unshift(m);
      var f = this[m.type](m);
      return this.sourceNode.shift(), f;
    },
    Program: function(m) {
      this.options.blockParams.unshift(m.blockParams);
      for (var f = m.body, S = f.length, E = 0; E < S; E++)
        this.accept(f[E]);
      return this.options.blockParams.shift(), this.isSimple = S === 1, this.blockParams = m.blockParams ? m.blockParams.length : 0, this;
    },
    BlockStatement: function(m) {
      b(m);
      var f = m.program, S = m.inverse;
      f = f && this.compileProgram(f), S = S && this.compileProgram(S);
      var E = this.classifySexpr(m);
      E === "helper" ? this.helperSexpr(m, f, S) : E === "simple" ? (this.simpleSexpr(m), this.opcode("pushProgram", f), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("blockValue", m.path.original)) : (this.ambiguousSexpr(m, f, S), this.opcode("pushProgram", f), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(m) {
      var f = m.program && this.compileProgram(m.program), S = this.setupFullMustacheParams(m, f, void 0), E = m.path;
      this.useDecorators = !0, this.opcode("registerDecorator", S.length, E.original);
    },
    PartialStatement: function(m) {
      this.usePartial = !0;
      var f = m.program;
      f && (f = this.compileProgram(m.program));
      var S = m.params;
      if (S.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + S.length, m);
      S.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : S.push({ type: "PathExpression", parts: [], depth: 0 }));
      var E = m.name.original, D = m.name.type === "SubExpression";
      D && this.accept(m.name), this.setupFullMustacheParams(m, f, void 0, !0);
      var w = m.indent || "";
      this.options.preventIndent && w && (this.opcode("appendContent", w), w = ""), this.opcode("invokePartial", D, E, w), this.opcode("append");
    },
    PartialBlockStatement: function(m) {
      this.PartialStatement(m);
    },
    MustacheStatement: function(m) {
      this.SubExpression(m), m.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(m) {
      this.DecoratorBlock(m);
    },
    ContentStatement: function(m) {
      m.value && this.opcode("appendContent", m.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(m) {
      b(m);
      var f = this.classifySexpr(m);
      f === "simple" ? this.simpleSexpr(m) : f === "helper" ? this.helperSexpr(m) : this.ambiguousSexpr(m);
    },
    ambiguousSexpr: function(m, f, S) {
      var E = m.path, D = E.parts[0], w = f != null || S != null;
      this.opcode("getContext", E.depth), this.opcode("pushProgram", f), this.opcode("pushProgram", S), E.strict = !0, this.accept(E), this.opcode("invokeAmbiguous", D, w);
    },
    simpleSexpr: function(m) {
      var f = m.path;
      f.strict = !0, this.accept(f), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(m, f, S) {
      var E = this.setupFullMustacheParams(m, f, S), D = m.path, w = D.parts[0];
      if (this.options.knownHelpers[w])
        this.opcode("invokeKnownHelper", E.length, w);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + w, m);
        D.strict = !0, D.falsy = !0, this.accept(D), this.opcode("invokeHelper", E.length, D.original, c.default.helpers.simpleId(D));
      }
    },
    PathExpression: function(m) {
      this.addDepth(m.depth), this.opcode("getContext", m.depth);
      var f = m.parts[0], S = c.default.helpers.scopedId(m), E = !m.depth && !S && this.blockParamIndex(f);
      E ? this.opcode("lookupBlockParam", E, m.parts) : f ? m.data ? (this.options.data = !0, this.opcode("lookupData", m.depth, m.parts, m.strict)) : this.opcode("lookupOnContext", m.parts, m.falsy, m.strict, S) : this.opcode("pushContext");
    },
    StringLiteral: function(m) {
      this.opcode("pushString", m.value);
    },
    NumberLiteral: function(m) {
      this.opcode("pushLiteral", m.value);
    },
    BooleanLiteral: function(m) {
      this.opcode("pushLiteral", m.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(m) {
      var f = m.pairs, S = 0, E = f.length;
      for (this.opcode("pushHash"); S < E; S++)
        this.pushParam(f[S].value);
      for (; S--; )
        this.opcode("assignToHash", f[S].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(m) {
      this.opcodes.push({
        opcode: m,
        args: h.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(m) {
      m && (this.useDepths = !0);
    },
    classifySexpr: function(m) {
      var f = c.default.helpers.simpleId(m.path), S = f && !!this.blockParamIndex(m.path.parts[0]), E = !S && c.default.helpers.helperExpression(m), D = !S && (E || f);
      if (D && !E) {
        var w = m.path.parts[0], N = this.options;
        N.knownHelpers[w] ? E = !0 : N.knownHelpersOnly && (D = !1);
      }
      return E ? "helper" : D ? "ambiguous" : "simple";
    },
    pushParams: function(m) {
      for (var f = 0, S = m.length; f < S; f++)
        this.pushParam(m[f]);
    },
    pushParam: function(m) {
      var f = m.value != null ? m.value : m.original || "";
      if (this.stringParams)
        f.replace && (f = f.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), m.depth && this.addDepth(m.depth), this.opcode("getContext", m.depth || 0), this.opcode("pushStringParam", f, m.type), m.type === "SubExpression" && this.accept(m);
      else {
        if (this.trackIds) {
          var S = void 0;
          if (m.parts && !c.default.helpers.scopedId(m) && !m.depth && (S = this.blockParamIndex(m.parts[0])), S) {
            var E = m.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", S, E);
          } else
            f = m.original || f, f.replace && (f = f.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", m.type, f);
        }
        this.accept(m);
      }
    },
    setupFullMustacheParams: function(m, f, S, E) {
      var D = m.params;
      return this.pushParams(D), this.opcode("pushProgram", f), this.opcode("pushProgram", S), m.hash ? this.accept(m.hash) : this.opcode("emptyHash", E), D;
    },
    blockParamIndex: function(m) {
      for (var f = 0, S = this.options.blockParams.length; f < S; f++) {
        var E = this.options.blockParams[f], D = E && l.indexOf(E, m);
        if (E && D >= 0)
          return [f, D];
      }
    }
  };
  function v(y, m, f) {
    if (y == null || typeof y != "string" && y.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + y);
    m = m || {}, "data" in m || (m.data = !0), m.compat && (m.useDepths = !0);
    var S = f.parse(y, m), E = new f.Compiler().compile(S, m);
    return new f.JavaScriptCompiler().compile(E, m);
  }
  function g(y, m, f) {
    if (m === void 0 && (m = {}), y == null || typeof y != "string" && y.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + y);
    m = l.extend({}, m), "data" in m || (m.data = !0), m.compat && (m.useDepths = !0);
    var S = void 0;
    function E() {
      var w = f.parse(y, m), N = new f.Compiler().compile(w, m), C = new f.JavaScriptCompiler().compile(N, m, void 0, !0);
      return f.template(C);
    }
    function D(w, N) {
      return S || (S = E()), S.call(this, w, N);
    }
    return D._setup = function(w) {
      return S || (S = E()), S._setup(w);
    }, D._child = function(w, N, C, O) {
      return S || (S = E()), S._child(w, N, C, O);
    }, D;
  }
  function _(y, m) {
    if (y === m)
      return !0;
    if (l.isArray(y) && l.isArray(m) && y.length === m.length) {
      for (var f = 0; f < y.length; f++)
        if (!_(y[f], m[f]))
          return !1;
      return !0;
    }
  }
  function b(y) {
    if (!y.path.parts) {
      var m = y.path;
      y.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [m.original + ""],
        original: m.original + "",
        loc: m.loc
      };
    }
  }
  return hi;
}
var Po = { exports: {} }, Ho = { exports: {} }, Cl = {}, Kf = {}, Io = {}, qo = {}, Gv;
function ex() {
  if (Gv) return qo;
  Gv = 1;
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return qo.encode = function(r) {
    if (0 <= r && r < n.length)
      return n[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, qo.decode = function(r) {
    var i = 65, l = 90, o = 97, c = 122, h = 48, p = 57, v = 43, g = 47, _ = 26, b = 52;
    return i <= r && r <= l ? r - i : o <= r && r <= c ? r - o + _ : h <= r && r <= p ? r - h + b : r == v ? 62 : r == g ? 63 : -1;
  }, qo;
}
var Fv;
function T0() {
  if (Fv) return Io;
  Fv = 1;
  var n = ex(), r = 5, i = 1 << r, l = i - 1, o = i;
  function c(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function h(p) {
    var v = (p & 1) === 1, g = p >> 1;
    return v ? -g : g;
  }
  return Io.encode = function(v) {
    var g = "", _, b = c(v);
    do
      _ = b & l, b >>>= r, b > 0 && (_ |= o), g += n.encode(_);
    while (b > 0);
    return g;
  }, Io.decode = function(v, g, _) {
    var b = v.length, y = 0, m = 0, f, S;
    do {
      if (g >= b)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (S = n.decode(v.charCodeAt(g++)), S === -1)
        throw new Error("Invalid base64 digit: " + v.charAt(g - 1));
      f = !!(S & o), S &= l, y = y + (S << m), m += r;
    } while (f);
    _.value = h(y), _.rest = g;
  }, Io;
}
var Jf = {}, Vv;
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
      for (var R = n.isAbsolute(O), G = O.split(/\/+/), ee, K = 0, $ = G.length - 1; $ >= 0; $--)
        ee = G[$], ee === "." ? G.splice($, 1) : ee === ".." ? K++ : K > 0 && (ee === "" ? (G.splice($ + 1, K), K = 0) : (G.splice($, 2), K--));
      return O = G.join("/"), O === "" && (O = R ? "/" : "."), j ? (j.path = O, c(j)) : O;
    }
    n.normalize = h;
    function p(C, O) {
      C === "" && (C = "."), O === "" && (O = ".");
      var j = o(O), R = o(C);
      if (R && (C = R.path || "/"), j && !j.scheme)
        return R && (j.scheme = R.scheme), c(j);
      if (j || O.match(l))
        return O;
      if (R && !R.host && !R.path)
        return R.host = O, c(R);
      var G = O.charAt(0) === "/" ? O : h(C.replace(/\/+$/, "") + "/" + O);
      return R ? (R.path = G, c(R)) : G;
    }
    n.join = p, n.isAbsolute = function(C) {
      return C.charAt(0) === "/" || i.test(C);
    };
    function v(C, O) {
      C === "" && (C = "."), C = C.replace(/\/$/, "");
      for (var j = 0; O.indexOf(C + "/") !== 0; ) {
        var R = C.lastIndexOf("/");
        if (R < 0 || (C = C.slice(0, R), C.match(/^([^\/]+:\/)?\/*$/)))
          return O;
        ++j;
      }
      return Array(j + 1).join("../") + O.substr(C.length + 1);
    }
    n.relative = v;
    var g = (function() {
      var C = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in C);
    })();
    function _(C) {
      return C;
    }
    function b(C) {
      return m(C) ? "$" + C : C;
    }
    n.toSetString = g ? _ : b;
    function y(C) {
      return m(C) ? C.slice(1) : C;
    }
    n.fromSetString = g ? _ : y;
    function m(C) {
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
      var R = E(C.source, O.source);
      return R !== 0 || (R = C.originalLine - O.originalLine, R !== 0) || (R = C.originalColumn - O.originalColumn, R !== 0 || j) || (R = C.generatedColumn - O.generatedColumn, R !== 0) || (R = C.generatedLine - O.generatedLine, R !== 0) ? R : E(C.name, O.name);
    }
    n.compareByOriginalPositions = f;
    function S(C, O, j) {
      var R = C.generatedLine - O.generatedLine;
      return R !== 0 || (R = C.generatedColumn - O.generatedColumn, R !== 0 || j) || (R = E(C.source, O.source), R !== 0) || (R = C.originalLine - O.originalLine, R !== 0) || (R = C.originalColumn - O.originalColumn, R !== 0) ? R : E(C.name, O.name);
    }
    n.compareByGeneratedPositionsDeflated = S;
    function E(C, O) {
      return C === O ? 0 : C === null ? 1 : O === null ? -1 : C > O ? 1 : -1;
    }
    function D(C, O) {
      var j = C.generatedLine - O.generatedLine;
      return j !== 0 || (j = C.generatedColumn - O.generatedColumn, j !== 0) || (j = E(C.source, O.source), j !== 0) || (j = C.originalLine - O.originalLine, j !== 0) || (j = C.originalColumn - O.originalColumn, j !== 0) ? j : E(C.name, O.name);
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
          var G = R.path.lastIndexOf("/");
          G >= 0 && (R.path = R.path.substring(0, G + 1));
        }
        O = p(c(R), O);
      }
      return h(O);
    }
    n.computeSourceURL = N;
  })(Jf)), Jf;
}
var Wf = {}, Yv;
function O0() {
  if (Yv) return Wf;
  Yv = 1;
  var n = Ql(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
  function l() {
    this._array = [], this._set = i ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return l.fromArray = function(c, h) {
    for (var p = new l(), v = 0, g = c.length; v < g; v++)
      p.add(c[v], h);
    return p;
  }, l.prototype.size = function() {
    return i ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, l.prototype.add = function(c, h) {
    var p = i ? c : n.toSetString(c), v = i ? this.has(c) : r.call(this._set, p), g = this._array.length;
    (!v || h) && this._array.push(c), v || (i ? this._set.set(c, g) : this._set[p] = g);
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
      var p = n.toSetString(c);
      if (r.call(this._set, p))
        return this._set[p];
    }
    throw new Error('"' + c + '" is not in the set.');
  }, l.prototype.at = function(c) {
    if (c >= 0 && c < this._array.length)
      return this._array[c];
    throw new Error("No element indexed by " + c);
  }, l.prototype.toArray = function() {
    return this._array.slice();
  }, Wf.ArraySet = l, Wf;
}
var eh = {}, Xv;
function tx() {
  if (Xv) return eh;
  Xv = 1;
  var n = Ql();
  function r(l, o) {
    var c = l.generatedLine, h = o.generatedLine, p = l.generatedColumn, v = o.generatedColumn;
    return h > c || h == c && v >= p || n.compareByGeneratedPositionsInflated(l, o) <= 0;
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
  }, eh.MappingList = i, eh;
}
var Qv;
function N0() {
  if (Qv) return Kf;
  Qv = 1;
  var n = T0(), r = Ql(), i = O0().ArraySet, l = tx().MappingList;
  function o(c) {
    c || (c = {}), this._file = r.getArg(c, "file", null), this._sourceRoot = r.getArg(c, "sourceRoot", null), this._skipValidation = r.getArg(c, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new l(), this._sourcesContents = null;
  }
  return o.prototype._version = 3, o.fromSourceMap = function(h) {
    var p = h.sourceRoot, v = new o({
      file: h.file,
      sourceRoot: p
    });
    return h.eachMapping(function(g) {
      var _ = {
        generated: {
          line: g.generatedLine,
          column: g.generatedColumn
        }
      };
      g.source != null && (_.source = g.source, p != null && (_.source = r.relative(p, _.source)), _.original = {
        line: g.originalLine,
        column: g.originalColumn
      }, g.name != null && (_.name = g.name)), v.addMapping(_);
    }), h.sources.forEach(function(g) {
      var _ = g;
      p !== null && (_ = r.relative(p, g)), v._sources.has(_) || v._sources.add(_);
      var b = h.sourceContentFor(g);
      b != null && v.setSourceContent(g, b);
    }), v;
  }, o.prototype.addMapping = function(h) {
    var p = r.getArg(h, "generated"), v = r.getArg(h, "original", null), g = r.getArg(h, "source", null), _ = r.getArg(h, "name", null);
    this._skipValidation || this._validateMapping(p, v, g, _), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), _ != null && (_ = String(_), this._names.has(_) || this._names.add(_)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: v != null && v.line,
      originalColumn: v != null && v.column,
      source: g,
      name: _
    });
  }, o.prototype.setSourceContent = function(h, p) {
    var v = h;
    this._sourceRoot != null && (v = r.relative(this._sourceRoot, v)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(v)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(v)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, o.prototype.applySourceMap = function(h, p, v) {
    var g = p;
    if (p == null) {
      if (h.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      g = h.file;
    }
    var _ = this._sourceRoot;
    _ != null && (g = r.relative(_, g));
    var b = new i(), y = new i();
    this._mappings.unsortedForEach(function(m) {
      if (m.source === g && m.originalLine != null) {
        var f = h.originalPositionFor({
          line: m.originalLine,
          column: m.originalColumn
        });
        f.source != null && (m.source = f.source, v != null && (m.source = r.join(v, m.source)), _ != null && (m.source = r.relative(_, m.source)), m.originalLine = f.line, m.originalColumn = f.column, f.name != null && (m.name = f.name));
      }
      var S = m.source;
      S != null && !b.has(S) && b.add(S);
      var E = m.name;
      E != null && !y.has(E) && y.add(E);
    }, this), this._sources = b, this._names = y, h.sources.forEach(function(m) {
      var f = h.sourceContentFor(m);
      f != null && (v != null && (m = r.join(v, m)), _ != null && (m = r.relative(_, m)), this.setSourceContent(m, f));
    }, this);
  }, o.prototype._validateMapping = function(h, p, v, g) {
    if (p && typeof p.line != "number" && typeof p.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(h && "line" in h && "column" in h && h.line > 0 && h.column >= 0 && !p && !v && !g)) {
      if (h && "line" in h && "column" in h && p && "line" in p && "column" in p && h.line > 0 && h.column >= 0 && p.line > 0 && p.column >= 0 && v)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: h,
        source: v,
        original: p,
        name: g
      }));
    }
  }, o.prototype._serializeMappings = function() {
    for (var h = 0, p = 1, v = 0, g = 0, _ = 0, b = 0, y = "", m, f, S, E, D = this._mappings.toArray(), w = 0, N = D.length; w < N; w++) {
      if (f = D[w], m = "", f.generatedLine !== p)
        for (h = 0; f.generatedLine !== p; )
          m += ";", p++;
      else if (w > 0) {
        if (!r.compareByGeneratedPositionsInflated(f, D[w - 1]))
          continue;
        m += ",";
      }
      m += n.encode(f.generatedColumn - h), h = f.generatedColumn, f.source != null && (E = this._sources.indexOf(f.source), m += n.encode(E - b), b = E, m += n.encode(f.originalLine - 1 - g), g = f.originalLine - 1, m += n.encode(f.originalColumn - v), v = f.originalColumn, f.name != null && (S = this._names.indexOf(f.name), m += n.encode(S - _), _ = S)), y += m;
    }
    return y;
  }, o.prototype._generateSourcesContent = function(h, p) {
    return h.map(function(v) {
      if (!this._sourcesContents)
        return null;
      p != null && (v = r.relative(p, v));
      var g = r.toSetString(v);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, g) ? this._sourcesContents[g] : null;
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
  }, Kf.SourceMapGenerator = o, Kf;
}
var wl = {}, th = {}, $v;
function nx() {
  return $v || ($v = 1, (function(n) {
    n.GREATEST_LOWER_BOUND = 1, n.LEAST_UPPER_BOUND = 2;
    function r(i, l, o, c, h, p) {
      var v = Math.floor((l - i) / 2) + i, g = h(o, c[v], !0);
      return g === 0 ? v : g > 0 ? l - v > 1 ? r(v, l, o, c, h, p) : p == n.LEAST_UPPER_BOUND ? l < c.length ? l : -1 : v : v - i > 1 ? r(i, v, o, c, h, p) : p == n.LEAST_UPPER_BOUND ? v : i < 0 ? -1 : i;
    }
    n.search = function(l, o, c, h) {
      if (o.length === 0)
        return -1;
      var p = r(
        -1,
        o.length,
        l,
        o,
        c,
        h || n.GREATEST_LOWER_BOUND
      );
      if (p < 0)
        return -1;
      for (; p - 1 >= 0 && c(o[p], o[p - 1], !0) === 0; )
        --p;
      return p;
    };
  })(th)), th;
}
var nh = {}, Kv;
function rx() {
  if (Kv) return nh;
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
      var p = r(c, h), v = c - 1;
      n(l, p, h);
      for (var g = l[h], _ = c; _ < h; _++)
        o(l[_], g) <= 0 && (v += 1, n(l, v, _));
      n(l, v + 1, _);
      var b = v + 1;
      i(l, o, c, b - 1), i(l, o, b + 1, h);
    }
  }
  return nh.quickSort = function(l, o) {
    i(l, o, 0, l.length - 1);
  }, nh;
}
var Jv;
function ax() {
  if (Jv) return wl;
  Jv = 1;
  var n = Ql(), r = nx(), i = O0().ArraySet, l = T0(), o = rx().quickSort;
  function c(g, _) {
    var b = g;
    return typeof g == "string" && (b = n.parseSourceMapInput(g)), b.sections != null ? new v(b, _) : new h(b, _);
  }
  c.fromSourceMap = function(g, _) {
    return h.fromSourceMap(g, _);
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
    var m = b || null, f = y || c.GENERATED_ORDER, S;
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
    var E = this.sourceRoot;
    S.map(function(D) {
      var w = D.source === null ? null : this._sources.at(D.source);
      return w = n.computeSourceURL(E, w, this._sourceMapURL), {
        source: w,
        generatedLine: D.generatedLine,
        generatedColumn: D.generatedColumn,
        originalLine: D.originalLine,
        originalColumn: D.originalColumn,
        name: D.name === null ? null : this._names.at(D.name)
      };
    }, this).forEach(_, m);
  }, c.prototype.allGeneratedPositionsFor = function(_) {
    var b = n.getArg(_, "line"), y = {
      source: n.getArg(_, "source"),
      originalLine: b,
      originalColumn: n.getArg(_, "column", 0)
    };
    if (y.source = this._findSourceIndex(y.source), y.source < 0)
      return [];
    var m = [], f = this._findMapping(
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
        for (var E = S.originalLine; S && S.originalLine === E; )
          m.push({
            line: n.getArg(S, "generatedLine", null),
            column: n.getArg(S, "generatedColumn", null),
            lastColumn: n.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++f];
      else
        for (var D = S.originalColumn; S && S.originalLine === b && S.originalColumn == D; )
          m.push({
            line: n.getArg(S, "generatedLine", null),
            column: n.getArg(S, "generatedColumn", null),
            lastColumn: n.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++f];
    }
    return m;
  }, wl.SourceMapConsumer = c;
  function h(g, _) {
    var b = g;
    typeof g == "string" && (b = n.parseSourceMapInput(g));
    var y = n.getArg(b, "version"), m = n.getArg(b, "sources"), f = n.getArg(b, "names", []), S = n.getArg(b, "sourceRoot", null), E = n.getArg(b, "sourcesContent", null), D = n.getArg(b, "mappings"), w = n.getArg(b, "file", null);
    if (y != this._version)
      throw new Error("Unsupported version: " + y);
    S && (S = n.normalize(S)), m = m.map(String).map(n.normalize).map(function(N) {
      return S && n.isAbsolute(S) && n.isAbsolute(N) ? n.relative(S, N) : N;
    }), this._names = i.fromArray(f.map(String), !0), this._sources = i.fromArray(m, !0), this._absoluteSources = this._sources.toArray().map(function(N) {
      return n.computeSourceURL(S, N, _);
    }), this.sourceRoot = S, this.sourcesContent = E, this._mappings = D, this._sourceMapURL = _, this.file = w;
  }
  h.prototype = Object.create(c.prototype), h.prototype.consumer = c, h.prototype._findSourceIndex = function(g) {
    var _ = g;
    if (this.sourceRoot != null && (_ = n.relative(this.sourceRoot, _)), this._sources.has(_))
      return this._sources.indexOf(_);
    var b;
    for (b = 0; b < this._absoluteSources.length; ++b)
      if (this._absoluteSources[b] == g)
        return b;
    return -1;
  }, h.fromSourceMap = function(_, b) {
    var y = Object.create(h.prototype), m = y._names = i.fromArray(_._names.toArray(), !0), f = y._sources = i.fromArray(_._sources.toArray(), !0);
    y.sourceRoot = _._sourceRoot, y.sourcesContent = _._generateSourcesContent(
      y._sources.toArray(),
      y.sourceRoot
    ), y.file = _._file, y._sourceMapURL = b, y._absoluteSources = y._sources.toArray().map(function(j) {
      return n.computeSourceURL(y.sourceRoot, j, b);
    });
    for (var S = _._mappings.toArray().slice(), E = y.__generatedMappings = [], D = y.__originalMappings = [], w = 0, N = S.length; w < N; w++) {
      var C = S[w], O = new p();
      O.generatedLine = C.generatedLine, O.generatedColumn = C.generatedColumn, C.source && (O.source = f.indexOf(C.source), O.originalLine = C.originalLine, O.originalColumn = C.originalColumn, C.name && (O.name = m.indexOf(C.name)), D.push(O)), E.push(O);
    }
    return o(y.__originalMappings, n.compareByOriginalPositions), y;
  }, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function p() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  h.prototype._parseMappings = function(_, b) {
    for (var y = 1, m = 0, f = 0, S = 0, E = 0, D = 0, w = _.length, N = 0, C = {}, O = {}, j = [], R = [], G, ee, K, $, te; N < w; )
      if (_.charAt(N) === ";")
        y++, N++, m = 0;
      else if (_.charAt(N) === ",")
        N++;
      else {
        for (G = new p(), G.generatedLine = y, $ = N; $ < w && !this._charIsMappingSeparator(_, $); $++)
          ;
        if (ee = _.slice(N, $), K = C[ee], K)
          N += ee.length;
        else {
          for (K = []; N < $; )
            l.decode(_, N, O), te = O.value, N = O.rest, K.push(te);
          if (K.length === 2)
            throw new Error("Found a source, but no line and column");
          if (K.length === 3)
            throw new Error("Found a source and line, but no column");
          C[ee] = K;
        }
        G.generatedColumn = m + K[0], m = G.generatedColumn, K.length > 1 && (G.source = E + K[1], E += K[1], G.originalLine = f + K[2], f = G.originalLine, G.originalLine += 1, G.originalColumn = S + K[3], S = G.originalColumn, K.length > 4 && (G.name = D + K[4], D += K[4])), R.push(G), typeof G.originalLine == "number" && j.push(G);
      }
    o(R, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = R, o(j, n.compareByOriginalPositions), this.__originalMappings = j;
  }, h.prototype._findMapping = function(_, b, y, m, f, S) {
    if (_[y] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + _[y]);
    if (_[m] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + _[m]);
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
      var m = this._generatedMappings[y];
      if (m.generatedLine === b.generatedLine) {
        var f = n.getArg(m, "source", null);
        f !== null && (f = this._sources.at(f), f = n.computeSourceURL(this.sourceRoot, f, this._sourceMapURL));
        var S = n.getArg(m, "name", null);
        return S !== null && (S = this._names.at(S)), {
          source: f,
          line: n.getArg(m, "originalLine", null),
          column: n.getArg(m, "originalColumn", null),
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
    var m = _;
    this.sourceRoot != null && (m = n.relative(this.sourceRoot, m));
    var f;
    if (this.sourceRoot != null && (f = n.urlParse(this.sourceRoot))) {
      var S = m.replace(/^file:\/\//, "");
      if (f.scheme == "file" && this._sources.has(S))
        return this.sourcesContent[this._sources.indexOf(S)];
      if ((!f.path || f.path == "/") && this._sources.has("/" + m))
        return this.sourcesContent[this._sources.indexOf("/" + m)];
    }
    if (b)
      return null;
    throw new Error('"' + m + '" is not in the SourceMap.');
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
    }, m = this._findMapping(
      y,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      n.getArg(_, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (m >= 0) {
      var f = this._originalMappings[m];
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
  function v(g, _) {
    var b = g;
    typeof g == "string" && (b = n.parseSourceMapInput(g));
    var y = n.getArg(b, "version"), m = n.getArg(b, "sections");
    if (y != this._version)
      throw new Error("Unsupported version: " + y);
    this._sources = new i(), this._names = new i();
    var f = {
      line: -1,
      column: 0
    };
    this._sections = m.map(function(S) {
      if (S.url)
        throw new Error("Support for url field in sections not implemented.");
      var E = n.getArg(S, "offset"), D = n.getArg(E, "line"), w = n.getArg(E, "column");
      if (D < f.line || D === f.line && w < f.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return f = E, {
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
  return v.prototype = Object.create(c.prototype), v.prototype.constructor = c, v.prototype._version = 3, Object.defineProperty(v.prototype, "sources", {
    get: function() {
      for (var g = [], _ = 0; _ < this._sections.length; _++)
        for (var b = 0; b < this._sections[_].consumer.sources.length; b++)
          g.push(this._sections[_].consumer.sources[b]);
      return g;
    }
  }), v.prototype.originalPositionFor = function(_) {
    var b = {
      generatedLine: n.getArg(_, "line"),
      generatedColumn: n.getArg(_, "column")
    }, y = r.search(
      b,
      this._sections,
      function(f, S) {
        var E = f.generatedLine - S.generatedOffset.generatedLine;
        return E || f.generatedColumn - S.generatedOffset.generatedColumn;
      }
    ), m = this._sections[y];
    return m ? m.consumer.originalPositionFor({
      line: b.generatedLine - (m.generatedOffset.generatedLine - 1),
      column: b.generatedColumn - (m.generatedOffset.generatedLine === b.generatedLine ? m.generatedOffset.generatedColumn - 1 : 0),
      bias: _.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, v.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(_) {
      return _.consumer.hasContentsOfAllSources();
    });
  }, v.prototype.sourceContentFor = function(_, b) {
    for (var y = 0; y < this._sections.length; y++) {
      var m = this._sections[y], f = m.consumer.sourceContentFor(_, !0);
      if (f)
        return f;
    }
    if (b)
      return null;
    throw new Error('"' + _ + '" is not in the SourceMap.');
  }, v.prototype.generatedPositionFor = function(_) {
    for (var b = 0; b < this._sections.length; b++) {
      var y = this._sections[b];
      if (y.consumer._findSourceIndex(n.getArg(_, "source")) !== -1) {
        var m = y.consumer.generatedPositionFor(_);
        if (m) {
          var f = {
            line: m.line + (y.generatedOffset.generatedLine - 1),
            column: m.column + (y.generatedOffset.generatedLine === m.line ? y.generatedOffset.generatedColumn - 1 : 0)
          };
          return f;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, v.prototype._parseMappings = function(_, b) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var y = 0; y < this._sections.length; y++)
      for (var m = this._sections[y], f = m.consumer._generatedMappings, S = 0; S < f.length; S++) {
        var E = f[S], D = m.consumer._sources.at(E.source);
        D = n.computeSourceURL(m.consumer.sourceRoot, D, this._sourceMapURL), this._sources.add(D), D = this._sources.indexOf(D);
        var w = null;
        E.name && (w = m.consumer._names.at(E.name), this._names.add(w), w = this._names.indexOf(w));
        var N = {
          source: D,
          generatedLine: E.generatedLine + (m.generatedOffset.generatedLine - 1),
          generatedColumn: E.generatedColumn + (m.generatedOffset.generatedLine === E.generatedLine ? m.generatedOffset.generatedColumn - 1 : 0),
          originalLine: E.originalLine,
          originalColumn: E.originalColumn,
          name: w
        };
        this.__generatedMappings.push(N), typeof N.originalLine == "number" && this.__originalMappings.push(N);
      }
    o(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), o(this.__originalMappings, n.compareByOriginalPositions);
  }, wl.IndexedSourceMapConsumer = v, wl;
}
var rh = {}, Wv;
function ix() {
  if (Wv) return rh;
  Wv = 1;
  var n = N0().SourceMapGenerator, r = Ql(), i = /(\r?\n)/, l = 10, o = "$$$isSourceNode$$$";
  function c(h, p, v, g, _) {
    this.children = [], this.sourceContents = {}, this.line = h ?? null, this.column = p ?? null, this.source = v ?? null, this.name = _ ?? null, this[o] = !0, g != null && this.add(g);
  }
  return c.fromStringWithSourceMap = function(p, v, g) {
    var _ = new c(), b = p.split(i), y = 0, m = function() {
      var w = C(), N = C() || "";
      return w + N;
      function C() {
        return y < b.length ? b[y++] : void 0;
      }
    }, f = 1, S = 0, E = null;
    return v.eachMapping(function(w) {
      if (E !== null)
        if (f < w.generatedLine)
          D(E, m()), f++, S = 0;
        else {
          var N = b[y] || "", C = N.substr(0, w.generatedColumn - S);
          b[y] = N.substr(w.generatedColumn - S), S = w.generatedColumn, D(E, C), E = w;
          return;
        }
      for (; f < w.generatedLine; )
        _.add(m()), f++;
      if (S < w.generatedColumn) {
        var N = b[y] || "";
        _.add(N.substr(0, w.generatedColumn)), b[y] = N.substr(w.generatedColumn), S = w.generatedColumn;
      }
      E = w;
    }, this), y < b.length && (E && D(E, m()), _.add(b.splice(y).join(""))), v.sources.forEach(function(w) {
      var N = v.sourceContentFor(w);
      N != null && (g != null && (w = r.join(g, w)), _.setSourceContent(w, N));
    }), _;
    function D(w, N) {
      if (w === null || w.source === void 0)
        _.add(N);
      else {
        var C = g ? r.join(g, w.source) : w.source;
        _.add(new c(
          w.originalLine,
          w.originalColumn,
          C,
          N,
          w.name
        ));
      }
    }
  }, c.prototype.add = function(p) {
    if (Array.isArray(p))
      p.forEach(function(v) {
        this.add(v);
      }, this);
    else if (p[o] || typeof p == "string")
      p && this.children.push(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, c.prototype.prepend = function(p) {
    if (Array.isArray(p))
      for (var v = p.length - 1; v >= 0; v--)
        this.prepend(p[v]);
    else if (p[o] || typeof p == "string")
      this.children.unshift(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, c.prototype.walk = function(p) {
    for (var v, g = 0, _ = this.children.length; g < _; g++)
      v = this.children[g], v[o] ? v.walk(p) : v !== "" && p(v, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, c.prototype.join = function(p) {
    var v, g, _ = this.children.length;
    if (_ > 0) {
      for (v = [], g = 0; g < _ - 1; g++)
        v.push(this.children[g]), v.push(p);
      v.push(this.children[g]), this.children = v;
    }
    return this;
  }, c.prototype.replaceRight = function(p, v) {
    var g = this.children[this.children.length - 1];
    return g[o] ? g.replaceRight(p, v) : typeof g == "string" ? this.children[this.children.length - 1] = g.replace(p, v) : this.children.push("".replace(p, v)), this;
  }, c.prototype.setSourceContent = function(p, v) {
    this.sourceContents[r.toSetString(p)] = v;
  }, c.prototype.walkSourceContents = function(p) {
    for (var v = 0, g = this.children.length; v < g; v++)
      this.children[v][o] && this.children[v].walkSourceContents(p);
    for (var _ = Object.keys(this.sourceContents), v = 0, g = _.length; v < g; v++)
      p(r.fromSetString(_[v]), this.sourceContents[_[v]]);
  }, c.prototype.toString = function() {
    var p = "";
    return this.walk(function(v) {
      p += v;
    }), p;
  }, c.prototype.toStringWithSourceMap = function(p) {
    var v = {
      code: "",
      line: 1,
      column: 0
    }, g = new n(p), _ = !1, b = null, y = null, m = null, f = null;
    return this.walk(function(S, E) {
      v.code += S, E.source !== null && E.line !== null && E.column !== null ? ((b !== E.source || y !== E.line || m !== E.column || f !== E.name) && g.addMapping({
        source: E.source,
        original: {
          line: E.line,
          column: E.column
        },
        generated: {
          line: v.line,
          column: v.column
        },
        name: E.name
      }), b = E.source, y = E.line, m = E.column, f = E.name, _ = !0) : _ && (g.addMapping({
        generated: {
          line: v.line,
          column: v.column
        }
      }), b = null, _ = !1);
      for (var D = 0, w = S.length; D < w; D++)
        S.charCodeAt(D) === l ? (v.line++, v.column = 0, D + 1 === w ? (b = null, _ = !1) : _ && g.addMapping({
          source: E.source,
          original: {
            line: E.line,
            column: E.column
          },
          generated: {
            line: v.line,
            column: v.column
          },
          name: E.name
        })) : v.column++;
    }), this.walkSourceContents(function(S, E) {
      g.setSourceContent(S, E);
    }), { code: v.code, map: g };
  }, rh.SourceNode = c, rh;
}
var ey;
function lx() {
  return ey || (ey = 1, Cl.SourceMapGenerator = N0().SourceMapGenerator, Cl.SourceMapConsumer = ax().SourceMapConsumer, Cl.SourceNode = ix().SourceNode), Cl;
}
var ty;
function sx() {
  return ty || (ty = 1, (function(n, r) {
    r.__esModule = !0;
    var i = Vt(), l = void 0;
    try {
      var o = lx();
      l = o.SourceNode;
    } catch {
    }
    l || (l = function(p, v, g, _) {
      this.src = "", _ && this.add(_);
    }, l.prototype = {
      add: function(v) {
        i.isArray(v) && (v = v.join("")), this.src += v;
      },
      prepend: function(v) {
        i.isArray(v) && (v = v.join("")), this.src = v + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function c(p, v, g) {
      if (i.isArray(p)) {
        for (var _ = [], b = 0, y = p.length; b < y; b++)
          _.push(v.wrap(p[b], g));
        return _;
      } else if (typeof p == "boolean" || typeof p == "number")
        return p + "";
      return p;
    }
    function h(p) {
      this.srcFile = p, this.source = [];
    }
    h.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(v, g) {
        this.source.unshift(this.wrap(v, g));
      },
      push: function(v, g) {
        this.source.push(this.wrap(v, g));
      },
      merge: function() {
        var v = this.empty();
        return this.each(function(g) {
          v.add(["  ", g, `
`]);
        }), v;
      },
      each: function(v) {
        for (var g = 0, _ = this.source.length; g < _; g++)
          v(this.source[g]);
      },
      empty: function() {
        var v = this.currentLocation || { start: {} };
        return new l(v.start.line, v.start.column, this.srcFile);
      },
      wrap: function(v) {
        var g = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return v instanceof l ? v : (v = c(v, this, g), new l(g.start.line, g.start.column, this.srcFile, v));
      },
      functionCall: function(v, g, _) {
        return _ = this.generateList(_), this.wrap([v, g ? "." + g + "(" : "(", _, ")"]);
      },
      quotedString: function(v) {
        return '"' + (v + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(v) {
        var g = this, _ = [];
        Object.keys(v).forEach(function(y) {
          var m = c(v[y], g);
          m !== "undefined" && _.push([g.quotedString(y), ":", m]);
        });
        var b = this.generateList(_);
        return b.prepend("{"), b.add("}"), b;
      },
      generateList: function(v) {
        for (var g = this.empty(), _ = 0, b = v.length; _ < b; _++)
          _ && g.add(","), g.add(c(v[_], this));
        return g;
      },
      generateArray: function(v) {
        var g = this.generateList(v);
        return g.prepend("["), g.add("]"), g;
      }
    }, r.default = h, n.exports = r.default;
  })(Ho, Ho.exports)), Ho.exports;
}
var ny;
function ox() {
  return ny || (ny = 1, (function(n, r) {
    r.__esModule = !0;
    function i(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var l = Uh(), o = Nn(), c = i(o), h = Vt(), p = sx(), v = i(p);
    function g(y) {
      this.value = y;
    }
    function _() {
    }
    _.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(m, f) {
        return this.internalNameLookup(m, f);
      },
      depthedLookup: function(m) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(m), ")"];
      },
      compilerInfo: function() {
        var m = l.COMPILER_REVISION, f = l.REVISION_CHANGES[m];
        return [m, f];
      },
      appendToBuffer: function(m, f, S) {
        return h.isArray(m) || (m = [m]), m = this.source.wrap(m, f), this.environment.isSimple ? ["return ", m, ";"] : S ? ["buffer += ", m, ";"] : (m.appendToBuffer = !0, m);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(m, f) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", m, ",", JSON.stringify(f), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(m, f, S, E) {
        this.environment = m, this.options = f, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !E, this.name = this.environment.name, this.isChild = !!S, this.context = S || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(m, f), this.useDepths = this.useDepths || m.useDepths || m.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || m.useBlockParams;
        var D = m.opcodes, w = void 0, N = void 0, C = void 0, O = void 0;
        for (C = 0, O = D.length; C < O; C++)
          w = D[C], this.source.currentLocation = w.loc, N = N || w.loc, this[w.opcode].apply(this, w.args);
        if (this.source.currentLocation = N, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new c.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), E ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var j = this.createFunctionContext(E);
        if (this.isChild)
          return j;
        var R = {
          compiler: this.compilerInfo(),
          main: j
        };
        this.decorators && (R.main_d = this.decorators, R.useDecorators = !0);
        var G = this.context, ee = G.programs, K = G.decorators;
        for (C = 0, O = ee.length; C < O; C++)
          ee[C] && (R[C] = ee[C], K[C] && (R[C + "_d"] = K[C], R.useDecorators = !0));
        return this.environment.usePartial && (R.usePartial = !0), this.options.data && (R.useData = !0), this.useDepths && (R.useDepths = !0), this.useBlockParams && (R.useBlockParams = !0), this.options.compat && (R.compat = !0), E ? R.compilerOptions = this.options : (R.compiler = JSON.stringify(R.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, R = this.objectLiteral(R), f.srcName ? (R = R.toStringWithSourceMap({ file: f.destName }), R.map = R.map && R.map.toString()) : R = R.toString()), R;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new v.default(this.options.srcName), this.decorators = new v.default(this.options.srcName);
      },
      createFunctionContext: function(m) {
        var f = this, S = "", E = this.stackVars.concat(this.registers.list);
        E.length > 0 && (S += ", " + E.join(", "));
        var D = 0;
        Object.keys(this.aliases).forEach(function(C) {
          var O = f.aliases[C];
          O.children && O.referenceCount > 1 && (S += ", alias" + ++D + "=" + C, O.children[0] = "alias" + D);
        }), this.lookupPropertyFunctionIsUsed && (S += ", " + this.lookupPropertyFunctionVarDeclaration());
        var w = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && w.push("blockParams"), this.useDepths && w.push("depths");
        var N = this.mergeSource(S);
        return m ? (w.push(N), Function.apply(this, w)) : this.source.wrap(["function(", w.join(","), `) {
  `, N, "}"]);
      },
      mergeSource: function(m) {
        var f = this.environment.isSimple, S = !this.forceBuffer, E = void 0, D = void 0, w = void 0, N = void 0;
        return this.source.each(function(C) {
          C.appendToBuffer ? (w ? C.prepend("  + ") : w = C, N = C) : (w && (D ? w.prepend("buffer += ") : E = !0, N.add(";"), w = N = void 0), D = !0, f || (S = !1));
        }), S ? w ? (w.prepend("return "), N.add(";")) : D || this.source.push('return "";') : (m += ", buffer = " + (E ? "" : this.initializeBuffer()), w ? (w.prepend("return buffer + "), N.add(";")) : this.source.push("return buffer;")), m && this.source.prepend("var " + m.substring(2) + (E ? "" : `;
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
      blockValue: function(m) {
        var f = this.aliasable("container.hooks.blockHelperMissing"), S = [this.contextName(0)];
        this.setupHelperArgs(m, 0, S);
        var E = this.popStack();
        S.splice(1, 0, E), this.push(this.source.functionCall(f, "call", S));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var m = this.aliasable("container.hooks.blockHelperMissing"), f = [this.contextName(0)];
        this.setupHelperArgs("", 0, f, !0), this.flushInline();
        var S = this.topStack();
        f.splice(1, 0, S), this.pushSource(["if (!", this.lastHelper, ") { ", S, " = ", this.source.functionCall(m, "call", f), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(m) {
        this.pendingContent ? m = this.pendingContent + m : this.pendingLocation = this.source.currentLocation, this.pendingContent = m;
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
          var m = this.popStack();
          this.pushSource(["if (", m, " != null) { ", this.appendToBuffer(m, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
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
      getContext: function(m) {
        this.lastContext = m;
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
      lookupOnContext: function(m, f, S, E) {
        var D = 0;
        !E && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(m[D++])) : this.pushContext(), this.resolvePath("context", m, D, f, S);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(m, f) {
        this.useBlockParams = !0, this.push(["blockParams[", m[0], "][", m[1], "]"]), this.resolvePath("context", f, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(m, f, S) {
        m ? this.pushStackLiteral("container.data(data, " + m + ")") : this.pushStackLiteral("data"), this.resolvePath("data", f, 0, !0, S);
      },
      resolvePath: function(m, f, S, E, D) {
        var w = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(b(this.options.strict && D, this, f, S, m));
          return;
        }
        for (var N = f.length; S < N; S++)
          this.replaceStack(function(C) {
            var O = w.nameLookup(C, f[S], m);
            return E ? [" && ", O] : [" != null ? ", O, " : ", C];
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
      pushStringParam: function(m, f) {
        this.pushContext(), this.pushString(f), f !== "SubExpression" && (typeof m == "string" ? this.pushString(m) : this.pushStackLiteral(m));
      },
      emptyHash: function(m) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(m ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var m = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(m.ids)), this.stringParams && (this.push(this.objectLiteral(m.contexts)), this.push(this.objectLiteral(m.types))), this.push(this.objectLiteral(m.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(m) {
        this.pushStackLiteral(this.quotedString(m));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(m) {
        this.pushStackLiteral(m);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(m) {
        m != null ? this.pushStackLiteral(this.programExpression(m)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(m, f) {
        var S = this.nameLookup("decorators", f, "decorator"), E = this.setupHelperArgs(f, m);
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
      invokeHelper: function(m, f, S) {
        var E = this.popStack(), D = this.setupHelper(m, f), w = [];
        S && w.push(D.name), w.push(E), this.options.strict || w.push(this.aliasable("container.hooks.helperMissing"));
        var N = ["(", this.itemsSeparatedBy(w, "||"), ")"], C = this.source.functionCall(N, "call", D.callParams);
        this.push(C);
      },
      itemsSeparatedBy: function(m, f) {
        var S = [];
        S.push(m[0]);
        for (var E = 1; E < m.length; E++)
          S.push(f, m[E]);
        return S;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(m, f) {
        var S = this.setupHelper(m, f);
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
      invokeAmbiguous: function(m, f) {
        this.useRegister("helper");
        var S = this.popStack();
        this.emptyHash();
        var E = this.setupHelper(0, m, f), D = this.lastHelper = this.nameLookup("helpers", m, "helper"), w = ["(", "(helper = ", D, " || ", S, ")"];
        this.options.strict || (w[0] = "(helper = ", w.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", w, E.paramsInit ? ["),(", E.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", E.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(m, f, S) {
        var E = [], D = this.setupParams(f, 1, E);
        m && (f = this.popStack(), delete D.name), S && (D.indent = JSON.stringify(S)), D.helpers = "helpers", D.partials = "partials", D.decorators = "container.decorators", m ? E.unshift(f) : E.unshift(this.nameLookup("partials", f, "partial")), this.options.compat && (D.depths = "depths"), D = this.objectLiteral(D), E.push(D), this.push(this.source.functionCall("container.invokePartial", "", E));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(m) {
        var f = this.popStack(), S = void 0, E = void 0, D = void 0;
        this.trackIds && (D = this.popStack()), this.stringParams && (E = this.popStack(), S = this.popStack());
        var w = this.hash;
        S && (w.contexts[m] = S), E && (w.types[m] = E), D && (w.ids[m] = D), w.values[m] = f;
      },
      pushId: function(m, f, S) {
        m === "BlockParam" ? this.pushStackLiteral("blockParams[" + f[0] + "].path[" + f[1] + "]" + (S ? " + " + JSON.stringify("." + S) : "")) : m === "PathExpression" ? this.pushString(f) : m === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: _,
      compileChildren: function(m, f) {
        for (var S = m.children, E = void 0, D = void 0, w = 0, N = S.length; w < N; w++) {
          E = S[w], D = new this.compiler();
          var C = this.matchExistingProgram(E);
          if (C == null) {
            this.context.programs.push("");
            var O = this.context.programs.length;
            E.index = O, E.name = "program" + O, this.context.programs[O] = D.compile(E, f, this.context, !this.precompile), this.context.decorators[O] = D.decorators, this.context.environments[O] = E, this.useDepths = this.useDepths || D.useDepths, this.useBlockParams = this.useBlockParams || D.useBlockParams, E.useDepths = this.useDepths, E.useBlockParams = this.useBlockParams;
          } else
            E.index = C.index, E.name = "program" + C.index, this.useDepths = this.useDepths || C.useDepths, this.useBlockParams = this.useBlockParams || C.useBlockParams;
        }
      },
      matchExistingProgram: function(m) {
        for (var f = 0, S = this.context.environments.length; f < S; f++) {
          var E = this.context.environments[f];
          if (E && E.equals(m))
            return E;
        }
      },
      programExpression: function(m) {
        var f = this.environment.children[m], S = [f.index, "data", f.blockParams];
        return (this.useBlockParams || this.useDepths) && S.push("blockParams"), this.useDepths && S.push("depths"), "container.program(" + S.join(", ") + ")";
      },
      useRegister: function(m) {
        this.registers[m] || (this.registers[m] = !0, this.registers.list.push(m));
      },
      push: function(m) {
        return m instanceof g || (m = this.source.wrap(m)), this.inlineStack.push(m), m;
      },
      pushStackLiteral: function(m) {
        this.push(new g(m));
      },
      pushSource: function(m) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), m && this.source.push(m);
      },
      replaceStack: function(m) {
        var f = ["("], S = void 0, E = void 0, D = void 0;
        if (!this.isInline())
          throw new c.default("replaceStack on non-inline");
        var w = this.popStack(!0);
        if (w instanceof g)
          S = [w.value], f = ["(", S], D = !0;
        else {
          E = !0;
          var N = this.incrStack();
          f = ["((", this.push(N), " = ", w, ")"], S = this.topStack();
        }
        var C = m.call(this, S);
        D || this.popStack(), E && this.stackSlot--, this.push(f.concat(C, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var m = this.inlineStack;
        this.inlineStack = [];
        for (var f = 0, S = m.length; f < S; f++) {
          var E = m[f];
          if (E instanceof g)
            this.compileStack.push(E);
          else {
            var D = this.incrStack();
            this.pushSource([D, " = ", E, ";"]), this.compileStack.push(D);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(m) {
        var f = this.isInline(), S = (f ? this.inlineStack : this.compileStack).pop();
        if (!m && S instanceof g)
          return S.value;
        if (!f) {
          if (!this.stackSlot)
            throw new c.default("Invalid stack pop");
          this.stackSlot--;
        }
        return S;
      },
      topStack: function() {
        var m = this.isInline() ? this.inlineStack : this.compileStack, f = m[m.length - 1];
        return f instanceof g ? f.value : f;
      },
      contextName: function(m) {
        return this.useDepths && m ? "depths[" + m + "]" : "depth" + m;
      },
      quotedString: function(m) {
        return this.source.quotedString(m);
      },
      objectLiteral: function(m) {
        return this.source.objectLiteral(m);
      },
      aliasable: function(m) {
        var f = this.aliases[m];
        return f ? (f.referenceCount++, f) : (f = this.aliases[m] = this.source.wrap(m), f.aliasable = !0, f.referenceCount = 1, f);
      },
      setupHelper: function(m, f, S) {
        var E = [], D = this.setupHelperArgs(f, m, E, S), w = this.nameLookup("helpers", f, "helper"), N = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: E,
          paramsInit: D,
          name: w,
          callParams: [N].concat(E)
        };
      },
      setupParams: function(m, f, S) {
        var E = {}, D = [], w = [], N = [], C = !S, O = void 0;
        C && (S = []), E.name = this.quotedString(m), E.hash = this.popStack(), this.trackIds && (E.hashIds = this.popStack()), this.stringParams && (E.hashTypes = this.popStack(), E.hashContexts = this.popStack());
        var j = this.popStack(), R = this.popStack();
        (R || j) && (E.fn = R || "container.noop", E.inverse = j || "container.noop");
        for (var G = f; G--; )
          O = this.popStack(), S[G] = O, this.trackIds && (N[G] = this.popStack()), this.stringParams && (w[G] = this.popStack(), D[G] = this.popStack());
        return C && (E.args = this.source.generateArray(S)), this.trackIds && (E.ids = this.source.generateArray(N)), this.stringParams && (E.types = this.source.generateArray(w), E.contexts = this.source.generateArray(D)), this.options.data && (E.data = "data"), this.useBlockParams && (E.blockParams = "blockParams"), E;
      },
      setupHelperArgs: function(m, f, S, E) {
        var D = this.setupParams(m, f, S);
        return D.loc = JSON.stringify(this.source.currentLocation), D = this.objectLiteral(D), E ? (this.useRegister("options"), S.push("options"), ["options=", D]) : S ? (S.push(D), "") : D;
      }
    }, (function() {
      for (var y = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), m = _.RESERVED_WORDS = {}, f = 0, S = y.length; f < S; f++)
        m[y[f]] = !0;
    })(), _.isValidJavaScriptVariableName = function(y) {
      return !_.RESERVED_WORDS[y] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(y);
    };
    function b(y, m, f, S, E) {
      var D = m.popStack(), w = f.length;
      for (y && w--; S < w; S++)
        D = m.nameLookup(D, f[S], E);
      return y ? [m.aliasable("container.strict"), "(", D, ", ", m.quotedString(f[S]), ", ", JSON.stringify(m.source.currentLocation), " )"] : D;
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
    var l = XS(), o = i(l), c = A0(), h = i(c), p = JS(), v = WS(), g = ox(), _ = i(g), b = D0(), y = i(b), m = w0(), f = i(m), S = o.default.create;
    function E() {
      var w = S();
      return w.compile = function(N, C) {
        return v.compile(N, C, w);
      }, w.precompile = function(N, C) {
        return v.precompile(N, C, w);
      }, w.AST = h.default, w.Compiler = v.Compiler, w.JavaScriptCompiler = _.default, w.Parser = p.parser, w.parse = p.parse, w.parseWithoutProcessing = p.parseWithoutProcessing, w;
    }
    var D = E();
    D.create = E, f.default(D), D.Visitor = y.default, D.default = D, r.default = D, n.exports = r.default;
  })(yo, yo.exports)), yo.exports;
}
var va = ux();
function Ei(n, r) {
  va.helpers[n] || va.registerHelper(n, r);
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
const cx = "﷐", M0 = "﷑", fx = "﷒", ay = "[[[crec_veryUniqueUserPlaceHolder]]]", iy = "[[[crec_veryUniqueCharPlaceHolder]]]";
function ly(n) {
  return n.replace(
    /\{\{|\}\}|[\uFDD0-\uFDD2]/g,
    (r) => r === "{{" ? M0 : r === "}}" ? fx : cx + r
  );
}
function hx(n) {
  return n.replace(
    /\uFDD0([\uFDD0-\uFDD2])|[\uFDD1\uFDD2]/g,
    (r, i) => i || (r === M0 ? "{{" : "}}")
  );
}
function gt(n) {
  return typeof n == "string" ? ly(n) : Array.isArray(n) ? n.map((r) => gt(r)) : n && typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r, i]) => [ly(r), gt(i)])) : n;
}
function Zl(n, r, i) {
  let l = va.compile(n, { noEscape: !0 })(r);
  return l = l.replaceAll("{{user}}", ay), l = l.replaceAll("{{char}}", iy), l = i(l), l = l.replaceAll(ay, "{{user}}"), l = l.replaceAll(iy, "{{char}}"), hx(l);
}
function W(n, r, i) {
  function l(p, v) {
    var g;
    Object.defineProperty(p, "_zod", {
      value: p._zod ?? {},
      enumerable: !1
    }), (g = p._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), p._zod.traits.add(n), r(p, v);
    for (const _ in h.prototype)
      _ in p || Object.defineProperty(p, _, { value: h.prototype[_].bind(p) });
    p._zod.constr = h, p._zod.def = v;
  }
  const o = i?.Parent ?? Object;
  class c extends o {
  }
  Object.defineProperty(c, "name", { value: n });
  function h(p) {
    var v;
    const g = i?.Parent ? new c() : this;
    l(g, p), (v = g._zod).deferred ?? (v.deferred = []);
    for (const _ of g._zod.deferred)
      _();
    return g;
  }
  return Object.defineProperty(h, "init", { value: l }), Object.defineProperty(h, Symbol.hasInstance, {
    value: (p) => i?.Parent && p instanceof i.Parent ? !0 : p?._zod?.traits?.has(n)
  }), Object.defineProperty(h, "name", { value: n }), h;
}
class yi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class k0 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const R0 = {};
function ya(n) {
  return R0;
}
function j0(n) {
  const r = Object.values(n).filter((l) => typeof l == "number");
  return Object.entries(n).filter(([l, o]) => r.indexOf(+l) === -1).map(([l, o]) => o);
}
function bh(n, r) {
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
function Hh(n) {
  return n == null;
}
function Ih(n) {
  const r = n.startsWith("^") ? 1 : 0, i = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(r, i);
}
function dx(n, r) {
  const i = (n.toString().split(".")[1] || "").length, l = r.toString();
  let o = (l.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(l)) {
    const v = l.match(/\d?e-(\d?)/);
    v?.[1] && (o = Number.parseInt(v[1]));
  }
  const c = i > o ? i : o, h = Number.parseInt(n.toFixed(c).replace(".", "")), p = Number.parseInt(r.toFixed(c).replace(".", ""));
  return h % p / 10 ** c;
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
function ba(n, r, i) {
  Object.defineProperty(n, r, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Sa(...n) {
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
const z0 = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function uu(n) {
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
function Gl(n) {
  if (uu(n) === !1)
    return !1;
  const r = n.constructor;
  if (r === void 0)
    return !0;
  const i = r.prototype;
  return !(uu(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function L0(n) {
  return Gl(n) ? { ...n } : Array.isArray(n) ? [...n] : n;
}
const mx = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function vu(n) {
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
  const i = n._zod.def, l = Sa(n._zod.def, {
    get shape() {
      const o = {};
      for (const c in r) {
        if (!(c in i.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && (o[c] = i.shape[c]);
      }
      return ba(this, "shape", o), o;
    },
    checks: []
  });
  return Zr(n, l);
}
function _x(n, r) {
  const i = n._zod.def, l = Sa(n._zod.def, {
    get shape() {
      const o = { ...n._zod.def.shape };
      for (const c in r) {
        if (!(c in i.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && delete o[c];
      }
      return ba(this, "shape", o), o;
    },
    checks: []
  });
  return Zr(n, l);
}
function bx(n, r) {
  if (!Gl(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = n._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = Sa(n._zod.def, {
    get shape() {
      const c = { ...n._zod.def.shape, ...r };
      return ba(this, "shape", c), c;
    },
    checks: []
  });
  return Zr(n, o);
}
function Sx(n, r) {
  if (!Gl(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...n._zod.def,
    get shape() {
      const l = { ...n._zod.def.shape, ...r };
      return ba(this, "shape", l), l;
    },
    checks: n._zod.def.checks
  };
  return Zr(n, i);
}
function xx(n, r) {
  const i = Sa(n._zod.def, {
    get shape() {
      const l = { ...n._zod.def.shape, ...r._zod.def.shape };
      return ba(this, "shape", l), l;
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
  const l = Sa(r._zod.def, {
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
      return ba(this, "shape", c), c;
    },
    checks: []
  });
  return Zr(r, l);
}
function Cx(n, r, i) {
  const l = Sa(r._zod.def, {
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
      return ba(this, "shape", c), c;
    },
    checks: []
  });
  return Zr(r, l);
}
function gi(n, r = 0) {
  if (n.aborted === !0)
    return !0;
  for (let i = r; i < n.issues.length; i++)
    if (n.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function B0(n, r) {
  return r.map((i) => {
    var l;
    return (l = i).path ?? (l.path = []), i.path.unshift(n), i;
  });
}
function Zo(n) {
  return typeof n == "string" ? n : n?.message;
}
function _a(n, r, i) {
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
const U0 = (n, r) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: r,
    enumerable: !1
  }), n.message = JSON.stringify(r, bh, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, P0 = W("$ZodError", U0), H0 = W("$ZodError", U0, { Parent: Error });
function wx(n, r = (i) => i.message) {
  const i = {}, l = [];
  for (const o of n.issues)
    o.path.length > 0 ? (i[o.path[0]] = i[o.path[0]] || [], i[o.path[0]].push(r(o))) : l.push(r(o));
  return { formErrors: l, fieldErrors: i };
}
function Ax(n, r = (i) => i.message) {
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
        let h = i, p = 0;
        for (; p < c.path.length; ) {
          const v = c.path[p];
          p === c.path.length - 1 ? (h[v] = h[v] || { _errors: [] }, h[v]._errors.push(r(c))) : h[v] = h[v] || { _errors: [] }, h = h[v], p++;
        }
      }
  };
  return l(n), i;
}
const Zh = (n) => (r, i, l, o) => {
  const c = l ? Object.assign(l, { async: !1 }) : { async: !1 }, h = r._zod.run({ value: i, issues: [] }, c);
  if (h instanceof Promise)
    throw new yi();
  if (h.issues.length) {
    const p = new (o?.Err ?? n)(h.issues.map((v) => _a(v, c, ya())));
    throw z0(p, o?.callee), p;
  }
  return h.value;
}, Gh = (n) => async (r, i, l, o) => {
  const c = l ? Object.assign(l, { async: !0 }) : { async: !0 };
  let h = r._zod.run({ value: i, issues: [] }, c);
  if (h instanceof Promise && (h = await h), h.issues.length) {
    const p = new (o?.Err ?? n)(h.issues.map((v) => _a(v, c, ya())));
    throw z0(p, o?.callee), p;
  }
  return h.value;
}, yu = (n) => (r, i, l) => {
  const o = l ? { ...l, async: !1 } : { async: !1 }, c = r._zod.run({ value: i, issues: [] }, o);
  if (c instanceof Promise)
    throw new yi();
  return c.issues.length ? {
    success: !1,
    error: new (n ?? P0)(c.issues.map((h) => _a(h, o, ya())))
  } : { success: !0, data: c.value };
}, Dx = /* @__PURE__ */ yu(H0), _u = (n) => async (r, i, l) => {
  const o = l ? Object.assign(l, { async: !0 }) : { async: !0 };
  let c = r._zod.run({ value: i, issues: [] }, o);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new n(c.issues.map((h) => _a(h, o, ya())))
  } : { success: !0, data: c.value };
}, Tx = /* @__PURE__ */ _u(H0), Ox = (n) => (r, i, l) => {
  const o = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Zh(n)(r, i, o);
}, Nx = (n) => (r, i, l) => Zh(n)(r, i, l), Mx = (n) => async (r, i, l) => {
  const o = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Gh(n)(r, i, o);
}, kx = (n) => async (r, i, l) => Gh(n)(r, i, l), Rx = (n) => (r, i, l) => {
  const o = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return yu(n)(r, i, o);
}, jx = (n) => (r, i, l) => yu(n)(r, i, l), zx = (n) => async (r, i, l) => {
  const o = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return _u(n)(r, i, o);
}, Lx = (n) => async (r, i, l) => _u(n)(r, i, l), Bx = /^[cC][^\s-]{8,}$/, Ux = /^[0-9a-z]+$/, Px = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Hx = /^[0-9a-vA-V]{20}$/, Ix = /^[A-Za-z0-9]{27}$/, qx = /^[a-zA-Z0-9_-]{21}$/, Zx = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Gx = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, uy = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Fx = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Vx = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Yx() {
  return new RegExp(Vx, "u");
}
const Xx = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Qx = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, $x = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Kx = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Jx = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, I0 = /^[A-Za-z0-9_-]*$/, Wx = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, eE = /^\+(?:[0-9]){6,14}[0-9]$/, q0 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", tE = /* @__PURE__ */ new RegExp(`^${q0}$`);
function Z0(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function nE(n) {
  return new RegExp(`^${Z0(n)}$`);
}
function rE(n) {
  const r = Z0({ precision: n.precision }), i = ["Z"];
  n.local && i.push(""), n.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const l = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${q0}T(?:${l})$`);
}
const aE = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, iE = /^-?\d+$/, lE = /^-?\d+(?:\.\d+)?/, sE = /^[^A-Z]*$/, oE = /^[^a-z]*$/, Yt = /* @__PURE__ */ W("$ZodCheck", (n, r) => {
  var i;
  n._zod ?? (n._zod = {}), n._zod.def = r, (i = n._zod).onattach ?? (i.onattach = []);
}), G0 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, F0 = /* @__PURE__ */ W("$ZodCheckLessThan", (n, r) => {
  Yt.init(n, r);
  const i = G0[typeof r.value];
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
}), V0 = /* @__PURE__ */ W("$ZodCheckGreaterThan", (n, r) => {
  Yt.init(n, r);
  const i = G0[typeof r.value];
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
}), uE = /* @__PURE__ */ W("$ZodCheckMultipleOf", (n, r) => {
  Yt.init(n, r), n._zod.onattach.push((i) => {
    var l;
    (l = i._zod.bag).multipleOf ?? (l.multipleOf = r.value);
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
  const i = r.format?.includes("int"), l = i ? "int" : "number", [o, c] = vx[r.format];
  n._zod.onattach.push((h) => {
    const p = h._zod.bag;
    p.format = r.format, p.minimum = o, p.maximum = c, i && (p.pattern = iE);
  }), n._zod.check = (h) => {
    const p = h.value;
    if (i) {
      if (!Number.isInteger(p)) {
        h.issues.push({
          expected: l,
          format: r.format,
          code: "invalid_type",
          continue: !1,
          input: p,
          inst: n
        });
        return;
      }
      if (!Number.isSafeInteger(p)) {
        p > 0 ? h.issues.push({
          input: p,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: l,
          continue: !r.abort
        }) : h.issues.push({
          input: p,
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
    p < o && h.issues.push({
      origin: "number",
      input: p,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: n,
      continue: !r.abort
    }), p > c && h.issues.push({
      origin: "number",
      input: p,
      code: "too_big",
      maximum: c,
      inst: n
    });
  };
}), fE = /* @__PURE__ */ W("$ZodCheckMaxLength", (n, r) => {
  var i;
  Yt.init(n, r), (i = n._zod.def).when ?? (i.when = (l) => {
    const o = l.value;
    return !Hh(o) && o.length !== void 0;
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
}), hE = /* @__PURE__ */ W("$ZodCheckMinLength", (n, r) => {
  var i;
  Yt.init(n, r), (i = n._zod.def).when ?? (i.when = (l) => {
    const o = l.value;
    return !Hh(o) && o.length !== void 0;
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
}), dE = /* @__PURE__ */ W("$ZodCheckLengthEquals", (n, r) => {
  var i;
  Yt.init(n, r), (i = n._zod.def).when ?? (i.when = (l) => {
    const o = l.value;
    return !Hh(o) && o.length !== void 0;
  }), n._zod.onattach.push((l) => {
    const o = l._zod.bag;
    o.minimum = r.length, o.maximum = r.length, o.length = r.length;
  }), n._zod.check = (l) => {
    const o = l.value, c = o.length;
    if (c === r.length)
      return;
    const h = qh(o), p = c > r.length;
    l.issues.push({
      origin: h,
      ...p ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: l.value,
      inst: n,
      continue: !r.abort
    });
  };
}), bu = /* @__PURE__ */ W("$ZodCheckStringFormat", (n, r) => {
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
}), pE = /* @__PURE__ */ W("$ZodCheckRegex", (n, r) => {
  bu.init(n, r), n._zod.check = (i) => {
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
  r.pattern ?? (r.pattern = sE), bu.init(n, r);
}), gE = /* @__PURE__ */ W("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = oE), bu.init(n, r);
}), vE = /* @__PURE__ */ W("$ZodCheckIncludes", (n, r) => {
  Yt.init(n, r);
  const i = vu(r.includes), l = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${i}` : i);
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
}), yE = /* @__PURE__ */ W("$ZodCheckStartsWith", (n, r) => {
  Yt.init(n, r);
  const i = new RegExp(`^${vu(r.prefix)}.*`);
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
}), _E = /* @__PURE__ */ W("$ZodCheckEndsWith", (n, r) => {
  Yt.init(n, r);
  const i = new RegExp(`.*${vu(r.suffix)}$`);
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
const xE = {
  major: 4,
  minor: 1,
  patch: 12
}, yt = /* @__PURE__ */ W("$ZodType", (n, r) => {
  var i;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = xE;
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
    const o = (h, p, v) => {
      let g = gi(h), _;
      for (const b of p) {
        if (b._zod.def.when) {
          if (!b._zod.def.when(h))
            continue;
        } else if (g)
          continue;
        const y = h.issues.length, m = b._zod.check(h);
        if (m instanceof Promise && v?.async === !1)
          throw new yi();
        if (_ || m instanceof Promise)
          _ = (_ ?? Promise.resolve()).then(async () => {
            await m, h.issues.length !== y && (g || (g = gi(h, y)));
          });
        else {
          if (h.issues.length === y)
            continue;
          g || (g = gi(h, y));
        }
      }
      return _ ? _.then(() => h) : h;
    }, c = (h, p, v) => {
      if (gi(h))
        return h.aborted = !0, h;
      const g = o(p, l, v);
      if (g instanceof Promise) {
        if (v.async === !1)
          throw new yi();
        return g.then((_) => n._zod.parse(_, v));
      }
      return n._zod.parse(g, v);
    };
    n._zod.run = (h, p) => {
      if (p.skipChecks)
        return n._zod.parse(h, p);
      if (p.direction === "backward") {
        const g = n._zod.parse({ value: h.value, issues: [] }, { ...p, skipChecks: !0 });
        return g instanceof Promise ? g.then((_) => c(_, h, p)) : c(g, h, p);
      }
      const v = n._zod.parse(h, p);
      if (v instanceof Promise) {
        if (p.async === !1)
          throw new yi();
        return v.then((g) => o(g, l, p));
      }
      return o(v, l, p);
    };
  }
  n["~standard"] = {
    validate: (o) => {
      try {
        const c = Dx(n, o);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return Tx(n, o).then((h) => h.success ? { value: h.data } : { issues: h.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Fh = /* @__PURE__ */ W("$ZodString", (n, r) => {
  yt.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? aE(n._zod.bag), n._zod.parse = (i, l) => {
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
  bu.init(n, r), Fh.init(n, r);
}), EE = /* @__PURE__ */ W("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = Gx), nt.init(n, r);
}), CE = /* @__PURE__ */ W("$ZodUUID", (n, r) => {
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
}), wE = /* @__PURE__ */ W("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = Fx), nt.init(n, r);
}), AE = /* @__PURE__ */ W("$ZodURL", (n, r) => {
  nt.init(n, r), n._zod.check = (i) => {
    try {
      const l = i.value.trim(), o = new URL(l);
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
}), DE = /* @__PURE__ */ W("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = Yx()), nt.init(n, r);
}), TE = /* @__PURE__ */ W("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = qx), nt.init(n, r);
}), OE = /* @__PURE__ */ W("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = Bx), nt.init(n, r);
}), NE = /* @__PURE__ */ W("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = Ux), nt.init(n, r);
}), ME = /* @__PURE__ */ W("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = Px), nt.init(n, r);
}), kE = /* @__PURE__ */ W("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = Hx), nt.init(n, r);
}), RE = /* @__PURE__ */ W("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = Ix), nt.init(n, r);
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
    const l = i._zod.bag;
    l.format = "ipv4";
  });
}), PE = /* @__PURE__ */ W("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = Qx), nt.init(n, r), n._zod.onattach.push((i) => {
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
}), HE = /* @__PURE__ */ W("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = $x), nt.init(n, r);
}), IE = /* @__PURE__ */ W("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = Kx), nt.init(n, r), n._zod.check = (i) => {
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
function Y0(n) {
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
    Y0(i.value) || i.issues.push({
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
  const r = n.replace(/[-_]/g, (l) => l === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return Y0(i);
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
    const [l] = i;
    if (!l)
      return !1;
    const o = JSON.parse(atob(l));
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
}), X0 = /* @__PURE__ */ W("$ZodNumber", (n, r) => {
  yt.init(n, r), n._zod.pattern = n._zod.bag.pattern ?? lE, n._zod.parse = (i, l) => {
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
  cE.init(n, r), X0.init(n, r);
}), QE = /* @__PURE__ */ W("$ZodUnknown", (n, r) => {
  yt.init(n, r), n._zod.parse = (i) => i;
}), $E = /* @__PURE__ */ W("$ZodNever", (n, r) => {
  yt.init(n, r), n._zod.parse = (i, l) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: n
  }), i);
});
function cy(n, r, i) {
  n.issues.length && r.issues.push(...B0(i, n.issues)), r.value[i] = n.value;
}
const KE = /* @__PURE__ */ W("$ZodArray", (n, r) => {
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
      const p = o[h], v = r.element._zod.run({
        value: p,
        issues: []
      }, l);
      v instanceof Promise ? c.push(v.then((g) => cy(g, i, h))) : cy(v, i, h);
    }
    return c.length ? Promise.all(c).then(() => i) : i;
  };
});
function cu(n, r, i, l) {
  n.issues.length && r.issues.push(...B0(i, n.issues)), n.value === void 0 ? i in l && (r.value[i] = void 0) : r.value[i] = n.value;
}
function Q0(n) {
  const r = Object.keys(n.shape);
  for (const l of r)
    if (!n.shape?.[l]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${l}": expected a Zod schema`);
  const i = gx(n.shape);
  return {
    ...n,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function $0(n, r, i, l, o, c) {
  const h = [], p = o.keySet, v = o.catchall._zod, g = v.def.type;
  for (const _ of Object.keys(r)) {
    if (p.has(_))
      continue;
    if (g === "never") {
      h.push(_);
      continue;
    }
    const b = v.run({ value: r[_], issues: [] }, l);
    b instanceof Promise ? n.push(b.then((y) => cu(y, i, _, r))) : cu(b, i, _, r);
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
    const p = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const v = { ...p };
        return Object.defineProperty(r, "shape", {
          value: v
        }), v;
      }
    });
  }
  const l = Ph(() => Q0(r));
  We(n._zod, "propValues", () => {
    const p = r.shape, v = {};
    for (const g in p) {
      const _ = p[g]._zod;
      if (_.values) {
        v[g] ?? (v[g] = /* @__PURE__ */ new Set());
        for (const b of _.values)
          v[g].add(b);
      }
    }
    return v;
  });
  const o = uu, c = r.catchall;
  let h;
  n._zod.parse = (p, v) => {
    h ?? (h = l.value);
    const g = p.value;
    if (!o(g))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: g,
        inst: n
      }), p;
    p.value = {};
    const _ = [], b = h.shape;
    for (const y of h.keys) {
      const f = b[y]._zod.run({ value: g[y], issues: [] }, v);
      f instanceof Promise ? _.push(f.then((S) => cu(S, p, y, g))) : cu(f, p, y, g);
    }
    return c ? $0(_, g, p, v, l.value, n) : _.length ? Promise.all(_).then(() => p) : p;
  };
}), WE = /* @__PURE__ */ W("$ZodObjectJIT", (n, r) => {
  JE.init(n, r);
  const i = n._zod.parse, l = Ph(() => Q0(r)), o = (y) => {
    const m = new SE(["shape", "payload", "ctx"]), f = l.value, S = (N) => {
      const C = oy(N);
      return `shape[${C}]._zod.run({ value: input[${C}], issues: [] }, ctx)`;
    };
    m.write("const input = payload.value;");
    const E = /* @__PURE__ */ Object.create(null);
    let D = 0;
    for (const N of f.keys)
      E[N] = `key_${D++}`;
    m.write("const newResult = {};");
    for (const N of f.keys) {
      const C = E[N], O = oy(N);
      m.write(`const ${C} = ${S(N)};`), m.write(`
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
    m.write("payload.value = newResult;"), m.write("return payload;");
    const w = m.compile();
    return (N, C) => w(y, N, C);
  };
  let c;
  const h = uu, p = !R0.jitless, g = p && px.value, _ = r.catchall;
  let b;
  n._zod.parse = (y, m) => {
    b ?? (b = l.value);
    const f = y.value;
    return h(f) ? p && g && m?.async === !1 && m.jitless !== !0 ? (c || (c = o(r.shape)), y = c(y, m), _ ? $0([], f, y, m, b, n) : y) : i(y, m) : (y.issues.push({
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
  const o = n.filter((c) => !gi(c));
  return o.length === 1 ? (r.value = o[0].value, o[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: i,
    errors: n.map((c) => c.issues.map((h) => _a(h, l, ya())))
  }), r);
}
const eC = /* @__PURE__ */ W("$ZodUnion", (n, r) => {
  yt.init(n, r), We(n._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), We(n._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), We(n._zod, "values", () => {
    if (r.options.every((o) => o._zod.values))
      return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), We(n._zod, "pattern", () => {
    if (r.options.every((o) => o._zod.pattern)) {
      const o = r.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${o.map((c) => Ih(c.source)).join("|")})$`);
    }
  });
  const i = r.options.length === 1, l = r.options[0]._zod.run;
  n._zod.parse = (o, c) => {
    if (i)
      return l(o, c);
    let h = !1;
    const p = [];
    for (const v of r.options) {
      const g = v._zod.run({
        value: o.value,
        issues: []
      }, c);
      if (g instanceof Promise)
        p.push(g), h = !0;
      else {
        if (g.issues.length === 0)
          return g;
        p.push(g);
      }
    }
    return h ? Promise.all(p).then((v) => fy(v, o, n, c)) : fy(p, o, n, c);
  };
}), tC = /* @__PURE__ */ W("$ZodIntersection", (n, r) => {
  yt.init(n, r), n._zod.parse = (i, l) => {
    const o = i.value, c = r.left._zod.run({ value: o, issues: [] }, l), h = r.right._zod.run({ value: o, issues: [] }, l);
    return c instanceof Promise || h instanceof Promise ? Promise.all([c, h]).then(([v, g]) => hy(i, v, g)) : hy(i, c, h);
  };
});
function Sh(n, r) {
  if (n === r)
    return { valid: !0, data: n };
  if (n instanceof Date && r instanceof Date && +n == +r)
    return { valid: !0, data: n };
  if (Gl(n) && Gl(r)) {
    const i = Object.keys(r), l = Object.keys(n).filter((c) => i.indexOf(c) !== -1), o = { ...n, ...r };
    for (const c of l) {
      const h = Sh(n[c], r[c]);
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
      const o = n[l], c = r[l], h = Sh(o, c);
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
  if (r.issues.length && n.issues.push(...r.issues), i.issues.length && n.issues.push(...i.issues), gi(n))
    return n;
  const l = Sh(r.value, i.value);
  if (!l.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
  return n.value = l.data, n;
}
const nC = /* @__PURE__ */ W("$ZodEnum", (n, r) => {
  yt.init(n, r);
  const i = j0(r.entries), l = new Set(i);
  n._zod.values = l, n._zod.pattern = new RegExp(`^(${i.filter((o) => mx.has(typeof o)).map((o) => typeof o == "string" ? vu(o) : o.toString()).join("|")})$`), n._zod.parse = (o, c) => {
    const h = o.value;
    return l.has(h) || o.issues.push({
      code: "invalid_value",
      values: i,
      input: h,
      inst: n
    }), o;
  };
}), rC = /* @__PURE__ */ W("$ZodTransform", (n, r) => {
  yt.init(n, r), n._zod.parse = (i, l) => {
    if (l.direction === "backward")
      throw new k0(n.constructor.name);
    const o = r.transform(i.value, i);
    if (l.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((h) => (i.value = h, i));
    if (o instanceof Promise)
      throw new yi();
    return i.value = o, i;
  };
});
function dy(n, r) {
  return n.issues.length && r === void 0 ? { issues: [], value: void 0 } : n;
}
const aC = /* @__PURE__ */ W("$ZodOptional", (n, r) => {
  yt.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", We(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), We(n._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${Ih(i.source)})?$`) : void 0;
  }), n._zod.parse = (i, l) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(i, l);
      return o instanceof Promise ? o.then((c) => dy(c, i.value)) : dy(o, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, l);
  };
}), iC = /* @__PURE__ */ W("$ZodNullable", (n, r) => {
  yt.init(n, r), We(n._zod, "optin", () => r.innerType._zod.optin), We(n._zod, "optout", () => r.innerType._zod.optout), We(n._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${Ih(i.source)}|null)$`) : void 0;
  }), We(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (i, l) => i.value === null ? i : r.innerType._zod.run(i, l);
}), lC = /* @__PURE__ */ W("$ZodDefault", (n, r) => {
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
const sC = /* @__PURE__ */ W("$ZodPrefault", (n, r) => {
  yt.init(n, r), n._zod.optin = "optional", We(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, l) => (l.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, l));
}), oC = /* @__PURE__ */ W("$ZodNonOptional", (n, r) => {
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
const uC = /* @__PURE__ */ W("$ZodCatch", (n, r) => {
  yt.init(n, r), We(n._zod, "optin", () => r.innerType._zod.optin), We(n._zod, "optout", () => r.innerType._zod.optout), We(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, l) => {
    if (l.direction === "backward")
      return r.innerType._zod.run(i, l);
    const o = r.innerType._zod.run(i, l);
    return o instanceof Promise ? o.then((c) => (i.value = c.value, c.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: c.issues.map((h) => _a(h, l, ya()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = o.value, o.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: o.issues.map((c) => _a(c, l, ya()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), cC = /* @__PURE__ */ W("$ZodPipe", (n, r) => {
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
const fC = /* @__PURE__ */ W("$ZodReadonly", (n, r) => {
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
const hC = /* @__PURE__ */ W("$ZodCustom", (n, r) => {
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
class K0 {
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
function dC() {
  return new K0();
}
const jl = /* @__PURE__ */ dC();
function pC(n, r) {
  return new n({
    type: "string",
    ...me(r)
  });
}
function mC(n, r) {
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
function gC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function vC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...me(r)
  });
}
function yC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...me(r)
  });
}
function _C(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...me(r)
  });
}
function bC(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function SC(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function xC(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function EC(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function CC(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function wC(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function AC(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function DC(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function TC(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function OC(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function NC(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function MC(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function kC(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function RC(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function jC(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...me(r)
  });
}
function zC(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...me(r)
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
    ...me(r)
  });
}
function BC(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...me(r)
  });
}
function UC(n, r) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...me(r)
  });
}
function PC(n, r) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...me(r)
  });
}
function HC(n, r) {
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
function qC(n) {
  return new n({
    type: "unknown"
  });
}
function ZC(n, r) {
  return new n({
    type: "never",
    ...me(r)
  });
}
function _y(n, r) {
  return new F0({
    check: "less_than",
    ...me(r),
    value: n,
    inclusive: !1
  });
}
function ah(n, r) {
  return new F0({
    check: "less_than",
    ...me(r),
    value: n,
    inclusive: !0
  });
}
function by(n, r) {
  return new V0({
    check: "greater_than",
    ...me(r),
    value: n,
    inclusive: !1
  });
}
function ih(n, r) {
  return new V0({
    check: "greater_than",
    ...me(r),
    value: n,
    inclusive: !0
  });
}
function Sy(n, r) {
  return new uE({
    check: "multiple_of",
    ...me(r),
    value: n
  });
}
function J0(n, r) {
  return new fE({
    check: "max_length",
    ...me(r),
    maximum: n
  });
}
function fu(n, r) {
  return new hE({
    check: "min_length",
    ...me(r),
    minimum: n
  });
}
function W0(n, r) {
  return new dE({
    check: "length_equals",
    ...me(r),
    length: n
  });
}
function GC(n, r) {
  return new pE({
    check: "string_format",
    format: "regex",
    ...me(r),
    pattern: n
  });
}
function FC(n) {
  return new mE({
    check: "string_format",
    format: "lowercase",
    ...me(n)
  });
}
function VC(n) {
  return new gE({
    check: "string_format",
    format: "uppercase",
    ...me(n)
  });
}
function YC(n, r) {
  return new vE({
    check: "string_format",
    format: "includes",
    ...me(r),
    includes: n
  });
}
function XC(n, r) {
  return new yE({
    check: "string_format",
    format: "starts_with",
    ...me(r),
    prefix: n
  });
}
function QC(n, r) {
  return new _E({
    check: "string_format",
    format: "ends_with",
    ...me(r),
    suffix: n
  });
}
function $l(n) {
  return new bE({
    check: "overwrite",
    tx: n
  });
}
function $C(n) {
  return $l((r) => r.normalize(n));
}
function KC() {
  return $l((n) => n.trim());
}
function JC() {
  return $l((n) => n.toLowerCase());
}
function WC() {
  return $l((n) => n.toUpperCase());
}
function e3(n, r, i) {
  return new n({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...me(i)
  });
}
function t3(n, r, i) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...me(i)
  });
}
function n3(n) {
  const r = r3((i) => (i.addIssue = (l) => {
    if (typeof l == "string")
      i.issues.push(Fl(l, i.value, r._zod.def));
    else {
      const o = l;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = i.value), o.inst ?? (o.inst = r), o.continue ?? (o.continue = !r._zod.def.abort), i.issues.push(Fl(o));
    }
  }, n(i.value, i)));
  return r;
}
function r3(n, r) {
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
    const p = { schema: {}, count: 1, cycle: void 0, path: i.path };
    this.seen.set(r, p);
    const v = r._zod.toJSONSchema?.();
    if (v)
      p.schema = v;
    else {
      const b = {
        ...i,
        schemaPath: [...i.schemaPath, r],
        path: i.path
      }, y = r._zod.parent;
      if (y)
        p.ref = y, this.process(y, b), this.seen.get(y).isParent = !0;
      else {
        const m = p.schema;
        switch (o.type) {
          case "string": {
            const f = m;
            f.type = "string";
            const { minimum: S, maximum: E, format: D, patterns: w, contentEncoding: N } = r._zod.bag;
            if (typeof S == "number" && (f.minLength = S), typeof E == "number" && (f.maxLength = E), D && (f.format = c[D] ?? D, f.format === "" && delete f.format), N && (f.contentEncoding = N), w && w.size > 0) {
              const C = [...w];
              C.length === 1 ? f.pattern = C[0].source : C.length > 1 && (p.schema.allOf = [
                ...C.map((O) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: O.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const f = m, { minimum: S, maximum: E, format: D, multipleOf: w, exclusiveMaximum: N, exclusiveMinimum: C } = r._zod.bag;
            typeof D == "string" && D.includes("int") ? f.type = "integer" : f.type = "number", typeof C == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (f.minimum = C, f.exclusiveMinimum = !0) : f.exclusiveMinimum = C), typeof S == "number" && (f.minimum = S, typeof C == "number" && this.target !== "draft-4" && (C >= S ? delete f.minimum : delete f.exclusiveMinimum)), typeof N == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (f.maximum = N, f.exclusiveMaximum = !0) : f.exclusiveMaximum = N), typeof E == "number" && (f.maximum = E, typeof N == "number" && this.target !== "draft-4" && (N <= E ? delete f.maximum : delete f.exclusiveMaximum)), typeof w == "number" && (f.multipleOf = w);
            break;
          }
          case "boolean": {
            const f = m;
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
            this.target === "openapi-3.0" ? (m.type = "string", m.nullable = !0, m.enum = [null]) : m.type = "null";
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
            m.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const f = m, { minimum: S, maximum: E } = r._zod.bag;
            typeof S == "number" && (f.minItems = S), typeof E == "number" && (f.maxItems = E), f.type = "array", f.items = this.process(o.element, { ...b, path: [...b.path, "items"] });
            break;
          }
          case "object": {
            const f = m;
            f.type = "object", f.properties = {};
            const S = o.shape;
            for (const w in S)
              f.properties[w] = this.process(S[w], {
                ...b,
                path: [...b.path, "properties", w]
              });
            const E = new Set(Object.keys(S)), D = new Set([...E].filter((w) => {
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
            const f = m, S = o.options.map((E, D) => this.process(E, {
              ...b,
              path: [...b.path, "anyOf", D]
            }));
            f.anyOf = S;
            break;
          }
          case "intersection": {
            const f = m, S = this.process(o.left, {
              ...b,
              path: [...b.path, "allOf", 0]
            }), E = this.process(o.right, {
              ...b,
              path: [...b.path, "allOf", 1]
            }), D = (N) => "allOf" in N && Object.keys(N).length === 1, w = [
              ...D(S) ? S.allOf : [S],
              ...D(E) ? E.allOf : [E]
            ];
            f.allOf = w;
            break;
          }
          case "tuple": {
            const f = m;
            f.type = "array";
            const S = this.target === "draft-2020-12" ? "prefixItems" : "items", E = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", D = o.items.map((O, j) => this.process(O, {
              ...b,
              path: [...b.path, S, j]
            })), w = o.rest ? this.process(o.rest, {
              ...b,
              path: [...b.path, E, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (f.prefixItems = D, w && (f.items = w)) : this.target === "openapi-3.0" ? (f.items = {
              anyOf: D
            }, w && f.items.anyOf.push(w), f.minItems = D.length, w || (f.maxItems = D.length)) : (f.items = D, w && (f.additionalItems = w));
            const { minimum: N, maximum: C } = r._zod.bag;
            typeof N == "number" && (f.minItems = N), typeof C == "number" && (f.maxItems = C);
            break;
          }
          case "record": {
            const f = m;
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
            const f = m, S = j0(o.entries);
            S.every((E) => typeof E == "number") && (f.type = "number"), S.every((E) => typeof E == "string") && (f.type = "string"), f.enum = S;
            break;
          }
          case "literal": {
            const f = m, S = [];
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
              f.type = E === null ? "null" : typeof E, this.target === "draft-4" || this.target === "openapi-3.0" ? f.enum = [E] : f.const = E;
            } else
              S.every((E) => typeof E == "number") && (f.type = "number"), S.every((E) => typeof E == "string") && (f.type = "string"), S.every((E) => typeof E == "boolean") && (f.type = "string"), S.every((E) => E === null) && (f.type = "null"), f.enum = S;
            break;
          }
          case "file": {
            const f = m, S = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: E, maximum: D, mime: w } = r._zod.bag;
            E !== void 0 && (S.minLength = E), D !== void 0 && (S.maxLength = D), w ? w.length === 1 ? (S.contentMediaType = w[0], Object.assign(f, S)) : f.anyOf = w.map((N) => ({ ...S, contentMediaType: N })) : Object.assign(f, S);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const f = this.process(o.innerType, b);
            this.target === "openapi-3.0" ? (p.ref = o.innerType, m.nullable = !0) : m.anyOf = [f, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, b), p.ref = o.innerType;
            break;
          }
          case "success": {
            const f = m;
            f.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, b), p.ref = o.innerType, m.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, b), p.ref = o.innerType, this.io === "input" && (m._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
            break;
          }
          case "catch": {
            this.process(o.innerType, b), p.ref = o.innerType;
            let f;
            try {
              f = o.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            m.default = f;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const f = m, S = r._zod.pattern;
            if (!S)
              throw new Error("Pattern not found in template literal");
            f.type = "string", f.pattern = S.source;
            break;
          }
          case "pipe": {
            const f = this.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
            this.process(f, b), p.ref = f;
            break;
          }
          case "readonly": {
            this.process(o.innerType, b), p.ref = o.innerType, m.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(o.innerType, b), p.ref = o.innerType;
            break;
          }
          case "optional": {
            this.process(o.innerType, b), p.ref = o.innerType;
            break;
          }
          case "lazy": {
            const f = r._zod.innerType;
            this.process(f, b), p.ref = f;
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
    return g && Object.assign(p.schema, g), this.io === "input" && St(r) && (delete p.schema.examples, delete p.schema.default), this.io === "input" && p.schema._prefault && ((l = p.schema).default ?? (l.default = p.schema._prefault)), delete p.schema._prefault, this.seen.get(r).schema;
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
        const S = l.external.registry.get(_[0])?.id, E = l.external.uri ?? ((w) => w);
        if (S)
          return { ref: E(S) };
        const D = _[1].defId ?? _[1].schema.id ?? `schema${this.counter++}`;
        return _[1].defId = D, { defId: D, ref: `${E("__shared")}#/${b}/${D}` };
      }
      if (_[1] === o)
        return { ref: "#" };
      const m = `#/${b}/`, f = _[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: f, ref: m + f };
    }, h = (_) => {
      if (_[1].schema.$ref)
        return;
      const b = _[1], { ref: y, defId: m } = c(_);
      b.def = { ...b.schema }, m && (b.defId = m);
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
        const m = l.external.registry.get(_[0])?.id;
        if (r !== _[0] && m) {
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
    const p = (_, b) => {
      const y = this.seen.get(_), m = y.def ?? y.schema, f = { ...m };
      if (y.ref === null)
        return;
      const S = y.ref;
      if (y.ref = null, S) {
        p(S, b);
        const E = this.seen.get(S).schema;
        E.$ref && (b.target === "draft-7" || b.target === "draft-4" || b.target === "openapi-3.0") ? (m.allOf = m.allOf ?? [], m.allOf.push(E)) : (Object.assign(m, E), Object.assign(m, f));
      }
      y.isParent || this.override({
        zodSchema: _,
        jsonSchema: m,
        path: y.path ?? []
      });
    };
    for (const _ of [...this.seen.entries()].reverse())
      p(_[0], { target: this.target });
    const v = {};
    if (this.target === "draft-2020-12" ? v.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? v.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? v.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), l.external?.uri) {
      const _ = l.external.registry.get(r)?.id;
      if (!_)
        throw new Error("Schema is missing an `id` property");
      v.$id = l.external.uri(_);
    }
    Object.assign(v, o.def);
    const g = l.external?.defs ?? {};
    for (const _ of this.seen.entries()) {
      const b = _[1];
      b.def && b.defId && (g[b.defId] = b.def);
    }
    l.external || Object.keys(g).length > 0 && (this.target === "draft-2020-12" ? v.$defs = g : v.definitions = g);
    try {
      return JSON.parse(JSON.stringify(v));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function a3(n, r) {
  if (n instanceof K0) {
    const l = new xy(r), o = {};
    for (const p of n._idmap.entries()) {
      const [v, g] = p;
      l.process(g);
    }
    const c = {}, h = {
      registry: n,
      uri: r?.uri,
      defs: o
    };
    for (const p of n._idmap.entries()) {
      const [v, g] = p;
      c[v] = l.emit(g, {
        ...r,
        external: h
      });
    }
    if (Object.keys(o).length > 0) {
      const p = l.target === "draft-2020-12" ? "$defs" : "definitions";
      c.__shared = {
        [p]: o
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
function l3(n) {
  return LC(i3, n);
}
const s3 = /* @__PURE__ */ W("ZodISODate", (n, r) => {
  zE.init(n, r), it.init(n, r);
});
function o3(n) {
  return BC(s3, n);
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
  P0.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
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
        n.issues.push(i), n.message = JSON.stringify(n.issues, bh, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        n.issues.push(...i), n.message = JSON.stringify(n.issues, bh, 2);
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
}), p3 = /* @__PURE__ */ Zh(Sn), m3 = /* @__PURE__ */ Gh(Sn), g3 = /* @__PURE__ */ yu(Sn), v3 = /* @__PURE__ */ _u(Sn), y3 = /* @__PURE__ */ Ox(Sn), _3 = /* @__PURE__ */ Nx(Sn), b3 = /* @__PURE__ */ Mx(Sn), S3 = /* @__PURE__ */ kx(Sn), x3 = /* @__PURE__ */ Rx(Sn), E3 = /* @__PURE__ */ jx(Sn), C3 = /* @__PURE__ */ zx(Sn), w3 = /* @__PURE__ */ Lx(Sn), xt = /* @__PURE__ */ W("ZodType", (n, r) => (yt.init(n, r), n.def = r, n.type = r.type, Object.defineProperty(n, "_def", { value: r }), n.check = (...i) => n.clone(Sa(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((l) => typeof l == "function" ? { _zod: { check: l, def: { check: "custom" }, onattach: [] } } : l)
  ]
})), n.clone = (i, l) => Zr(n, i, l), n.brand = () => n, n.register = ((i, l) => (i.add(n, l), n)), n.parse = (i, l) => p3(n, i, l, { callee: n.parse }), n.safeParse = (i, l) => g3(n, i, l), n.parseAsync = async (i, l) => m3(n, i, l, { callee: n.parseAsync }), n.safeParseAsync = async (i, l) => v3(n, i, l), n.spa = n.safeParseAsync, n.encode = (i, l) => y3(n, i, l), n.decode = (i, l) => _3(n, i, l), n.encodeAsync = async (i, l) => b3(n, i, l), n.decodeAsync = async (i, l) => S3(n, i, l), n.safeEncode = (i, l) => x3(n, i, l), n.safeDecode = (i, l) => E3(n, i, l), n.safeEncodeAsync = async (i, l) => C3(n, i, l), n.safeDecodeAsync = async (i, l) => w3(n, i, l), n.refine = (i, l) => n.check(p4(i, l)), n.superRefine = (i) => n.check(m4(i)), n.overwrite = (i) => n.check($l(i)), n.optional = () => Ay(n), n.nullable = () => Dy(n), n.nullish = () => Ay(Dy(n)), n.nonoptional = (i) => s4(n, i), n.array = () => Tn(n), n.or = (i) => K3([n, i]), n.and = (i) => W3(n, i), n.transform = (i) => Ty(n, t4(i)), n.default = (i) => a4(n, i), n.prefault = (i) => l4(n, i), n.catch = (i) => u4(n, i), n.pipe = (i) => Ty(n, i), n.readonly = () => h4(n), n.describe = (i) => {
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
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), e1 = /* @__PURE__ */ W("_ZodString", (n, r) => {
  Fh.init(n, r), xt.init(n, r);
  const i = n._zod.bag;
  n.format = i.format ?? null, n.minLength = i.minimum ?? null, n.maxLength = i.maximum ?? null, n.regex = (...l) => n.check(GC(...l)), n.includes = (...l) => n.check(YC(...l)), n.startsWith = (...l) => n.check(XC(...l)), n.endsWith = (...l) => n.check(QC(...l)), n.min = (...l) => n.check(fu(...l)), n.max = (...l) => n.check(J0(...l)), n.length = (...l) => n.check(W0(...l)), n.nonempty = (...l) => n.check(fu(1, ...l)), n.lowercase = (l) => n.check(FC(l)), n.uppercase = (l) => n.check(VC(l)), n.trim = () => n.check(KC()), n.normalize = (...l) => n.check($C(...l)), n.toLowerCase = () => n.check(JC()), n.toUpperCase = () => n.check(WC());
}), A3 = /* @__PURE__ */ W("ZodString", (n, r) => {
  Fh.init(n, r), e1.init(n, r), n.email = (i) => n.check(mC(D3, i)), n.url = (i) => n.check(bC(T3, i)), n.jwt = (i) => n.check(zC(Z3, i)), n.emoji = (i) => n.check(SC(O3, i)), n.guid = (i) => n.check(yy(Ey, i)), n.uuid = (i) => n.check(gC(Fo, i)), n.uuidv4 = (i) => n.check(vC(Fo, i)), n.uuidv6 = (i) => n.check(yC(Fo, i)), n.uuidv7 = (i) => n.check(_C(Fo, i)), n.nanoid = (i) => n.check(xC(N3, i)), n.guid = (i) => n.check(yy(Ey, i)), n.cuid = (i) => n.check(EC(M3, i)), n.cuid2 = (i) => n.check(CC(k3, i)), n.ulid = (i) => n.check(wC(R3, i)), n.base64 = (i) => n.check(kC(H3, i)), n.base64url = (i) => n.check(RC(I3, i)), n.xid = (i) => n.check(AC(j3, i)), n.ksuid = (i) => n.check(DC(z3, i)), n.ipv4 = (i) => n.check(TC(L3, i)), n.ipv6 = (i) => n.check(OC(B3, i)), n.cidrv4 = (i) => n.check(NC(U3, i)), n.cidrv6 = (i) => n.check(MC(P3, i)), n.e164 = (i) => n.check(jC(q3, i)), n.datetime = (i) => n.check(l3(i)), n.date = (i) => n.check(o3(i)), n.time = (i) => n.check(c3(i)), n.duration = (i) => n.check(h3(i));
});
function _n(n) {
  return pC(A3, n);
}
const it = /* @__PURE__ */ W("ZodStringFormat", (n, r) => {
  nt.init(n, r), e1.init(n, r);
}), D3 = /* @__PURE__ */ W("ZodEmail", (n, r) => {
  wE.init(n, r), it.init(n, r);
}), Ey = /* @__PURE__ */ W("ZodGUID", (n, r) => {
  EE.init(n, r), it.init(n, r);
}), Fo = /* @__PURE__ */ W("ZodUUID", (n, r) => {
  CE.init(n, r), it.init(n, r);
}), T3 = /* @__PURE__ */ W("ZodURL", (n, r) => {
  AE.init(n, r), it.init(n, r);
}), O3 = /* @__PURE__ */ W("ZodEmoji", (n, r) => {
  DE.init(n, r), it.init(n, r);
}), N3 = /* @__PURE__ */ W("ZodNanoID", (n, r) => {
  TE.init(n, r), it.init(n, r);
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
  HE.init(n, r), it.init(n, r);
}), P3 = /* @__PURE__ */ W("ZodCIDRv6", (n, r) => {
  IE.init(n, r), it.init(n, r);
}), H3 = /* @__PURE__ */ W("ZodBase64", (n, r) => {
  qE.init(n, r), it.init(n, r);
}), I3 = /* @__PURE__ */ W("ZodBase64URL", (n, r) => {
  GE.init(n, r), it.init(n, r);
}), q3 = /* @__PURE__ */ W("ZodE164", (n, r) => {
  FE.init(n, r), it.init(n, r);
}), Z3 = /* @__PURE__ */ W("ZodJWT", (n, r) => {
  YE.init(n, r), it.init(n, r);
}), t1 = /* @__PURE__ */ W("ZodNumber", (n, r) => {
  X0.init(n, r), xt.init(n, r), n.gt = (l, o) => n.check(by(l, o)), n.gte = (l, o) => n.check(ih(l, o)), n.min = (l, o) => n.check(ih(l, o)), n.lt = (l, o) => n.check(_y(l, o)), n.lte = (l, o) => n.check(ah(l, o)), n.max = (l, o) => n.check(ah(l, o)), n.int = (l) => n.check(Cy(l)), n.safe = (l) => n.check(Cy(l)), n.positive = (l) => n.check(by(0, l)), n.nonnegative = (l) => n.check(ih(0, l)), n.negative = (l) => n.check(_y(0, l)), n.nonpositive = (l) => n.check(ah(0, l)), n.multipleOf = (l, o) => n.check(Sy(l, o)), n.step = (l, o) => n.check(Sy(l, o)), n.finite = () => n;
  const i = n._zod.bag;
  n.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), n.isFinite = !0, n.format = i.format ?? null;
});
function hu(n) {
  return HC(t1, n);
}
const G3 = /* @__PURE__ */ W("ZodNumberFormat", (n, r) => {
  XE.init(n, r), t1.init(n, r);
});
function Cy(n) {
  return IC(G3, n);
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
  KE.init(n, r), xt.init(n, r), n.element = r.element, n.min = (i, l) => n.check(fu(i, l)), n.nonempty = (i) => n.check(fu(1, i)), n.max = (i, l) => n.check(J0(i, l)), n.length = (i, l) => n.check(W0(i, l)), n.unwrap = () => n.element;
});
function Tn(n, r) {
  return e3(X3, n, r);
}
const Q3 = /* @__PURE__ */ W("ZodObject", (n, r) => {
  WE.init(n, r), xt.init(n, r), We(n, "shape", () => r.shape), n.keyof = () => Eh(Object.keys(n._zod.def.shape)), n.catchall = (i) => n.clone({ ...n._zod.def, catchall: i }), n.passthrough = () => n.clone({ ...n._zod.def, catchall: wy() }), n.loose = () => n.clone({ ...n._zod.def, catchall: wy() }), n.strict = () => n.clone({ ...n._zod.def, catchall: Y3() }), n.strip = () => n.clone({ ...n._zod.def, catchall: void 0 }), n.extend = (i) => bx(n, i), n.safeExtend = (i) => Sx(n, i), n.merge = (i) => xx(n, i), n.pick = (i) => yx(n, i), n.omit = (i) => _x(n, i), n.partial = (...i) => Ex(n1, n, i[0]), n.required = (...i) => Cx(r1, n, i[0]);
});
function ga(n, r) {
  const i = {
    type: "object",
    shape: n ?? {},
    ...me(r)
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
    ...me(r)
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
const xh = /* @__PURE__ */ W("ZodEnum", (n, r) => {
  nC.init(n, r), xt.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const i = new Set(Object.keys(r.entries));
  n.extract = (l, o) => {
    const c = {};
    for (const h of l)
      if (i.has(h))
        c[h] = r.entries[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new xh({
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
    return new xh({
      ...r,
      checks: [],
      ...me(o),
      entries: c
    });
  };
});
function Eh(n, r) {
  const i = Array.isArray(n) ? Object.fromEntries(n.map((l) => [l, l])) : n;
  return new xh({
    type: "enum",
    entries: i,
    ...me(r)
  });
}
const e4 = /* @__PURE__ */ W("ZodTransform", (n, r) => {
  rC.init(n, r), xt.init(n, r), n._zod.parse = (i, l) => {
    if (l.direction === "backward")
      throw new k0(n.constructor.name);
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
function t4(n) {
  return new e4({
    type: "transform",
    transform: n
  });
}
const n1 = /* @__PURE__ */ W("ZodOptional", (n, r) => {
  aC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Ay(n) {
  return new n1({
    type: "optional",
    innerType: n
  });
}
const n4 = /* @__PURE__ */ W("ZodNullable", (n, r) => {
  iC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Dy(n) {
  return new n4({
    type: "nullable",
    innerType: n
  });
}
const r4 = /* @__PURE__ */ W("ZodDefault", (n, r) => {
  lC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function a4(n, r) {
  return new r4({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : L0(r);
    }
  });
}
const i4 = /* @__PURE__ */ W("ZodPrefault", (n, r) => {
  sC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function l4(n, r) {
  return new i4({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : L0(r);
    }
  });
}
const r1 = /* @__PURE__ */ W("ZodNonOptional", (n, r) => {
  oC.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function s4(n, r) {
  return new r1({
    type: "nonoptional",
    innerType: n,
    ...me(r)
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
function Ty(n, r) {
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
  const l = Array.isArray(n.anyOf) ? n.anyOf[0] : Array.isArray(n.oneOf) ? n.oneOf[0] : void 0;
  if (l) return ha(l);
  switch (y4(n.type)) {
    case "object": {
      const c = {}, h = n.properties || {};
      for (const p of Object.keys(h))
        c[p] = ha(h[p]);
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
const Il = "Max Response Tokens";
function Al(n) {
  return typeof n == "string" ? n.trim() !== "" : Array.isArray(n) && n.length > 0;
}
function Ny(n, r, i, l = !1) {
  r = typeof r == "string" ? r : "";
  const o = n?.choices?.[0], c = Array.isArray(n?.content) ? n.content : [], h = o?.finish_reason ?? n?.stop_reason ?? n?.candidates?.[0]?.finishReason ?? n?.finish_reason, p = l ? c.find((g) => g?.type === "tool_use") : void 0, v = Al(o?.message?.reasoning_content) || Al(o?.message?.reasoning) || Al(o?.reasoning) || Al(n?.thinking) || // Claude returns thinking blocks without text unless a summary is requested, so the block itself counts.
  c.some((g) => g?.type === "thinking" || g?.type === "redacted_thinking") || (n?.responseContent?.parts ?? []).some((g) => g?.thought && Al(g.text)) || Xl(r) !== r;
  return {
    text: r,
    structured: p?.input,
    finishReason: h == null ? void 0 : String(h),
    truncated: /length|max_tokens/i.test(String(h ?? "")),
    hasReasoning: v,
    maxTokens: i
  };
}
function Vh(n) {
  return n.structured === void 0 && Xl(n.text).trim() === "";
}
function Yh(n) {
  return n.truncated && n.hasReasoning ? `The model used all ${n.maxTokens} response tokens on thinking and returned no answer. Raise "${Il}" or turn thinking off.` : n.truncated ? `The model returned no answer before hitting the ${n.maxTokens}-token limit. Raise "${Il}".` : n.finishReason === void 0 && n.hasReasoning ? `The model returned no answer, and SillyTavern didn't report why it stopped. If thinking used up all ${n.maxTokens} response tokens, raise "${Il}" or turn thinking off.` : n.finishReason && !/^(stop|end_turn|stop_sequence|eos)$/i.test(n.finishReason) ? `The model returned an empty response (finish reason: ${n.finishReason}).` : "The model returned an empty response.";
}
function _4(n) {
  return `The response was ${i1(n)} at the ${n.maxTokens}-token limit, so it isn't complete JSON. Raise "${Il}".`;
}
function a1(n) {
  return `The response was ${i1(n)} at the ${n.maxTokens}-token limit, so the text may be incomplete. Raise "${Il}" for longer responses.`;
}
function i1(n) {
  return n.truncationEstimated ? "probably cut off" : "cut off";
}
function l1(n) {
  const r = n?.message || String(n), i = n?.cause;
  if (r === "API request failed" && i) {
    const l = i?.message || String(i);
    return l ? `${r}: ${l}` : r;
  }
  return r;
}
const My = ["role", "content", "name", "tool_calls", "tool_call_id"];
function b4(n, r) {
  const i = r === "openai" ? My : [...My, "ignoreInstruct"];
  return n.map(
    (l) => Object.fromEntries(
      Object.entries(l).filter(([o, c]) => i.includes(o) && c !== void 0)
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
async function x4(n, r, i, l) {
  const { profile: o, preset: c, source: h } = r, p = n.ChatCompletionService;
  if (r.mainApi !== "openai" || !c || typeof p?.presetToGeneratePayload != "function")
    return;
  const v = p.createRequestData({
    stream: !1,
    messages: i,
    max_tokens: l,
    model: o.model,
    chat_completion_source: h,
    secret_id: o["secret-id"],
    custom_prompt_post_processing: o["prompt-post-processing"],
    ...Object.fromEntries(S4.map((_) => [_, o["api-url"]]))
  }), g = await p.presetToGeneratePayload(c, { chat_completion_source: h }, v);
  return o.proxy && (delete g.reverse_proxy, delete g.proxy_password), delete g.stop, g;
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
const E4 = /^(Response not OK|Got response status \d+|API request failed)$/i;
class s1 extends Error {
  constructor(r, i) {
    const l = i?.message === "API request failed" && i?.cause ? i.cause : i, o = l?.message || String(l), c = E4.test(o.trim()) ? ". SillyTavern didn't pass on the provider's reason; it's in the SillyTavern server console." : "", h = r?.model ? `${r?.name} (${r.model})` : r?.name;
    super(`${h ? `${h}: ` : ""}${o}${c}`, { cause: i }), this.name = "RequestError";
  }
}
function Su(n, r = SillyTavern.getContext()) {
  if (!n)
    throw new Error("No connection profile selected.");
  const i = r.ConnectionManagerRequestService, l = i.getProfile(n), o = i.validateProfile(l), c = o.selected, h = l.preset ? r.getPresetManager?.(c)?.getCompletionPresetByName(l.preset) : void 0;
  return { profile: l, mainApi: c, source: o.source, preset: h };
}
function C4(n) {
  const r = n.mainApi === "openai" ? n.preset?.openai_max_context : n.preset?.max_length;
  return typeof r == "number" && r > 0 ? r : void 0;
}
function o1(n, r, i = SillyTavern.getContext()) {
  return r.maxContextType === "custom" && r.maxContextValue > 0 ? r.maxContextValue : C4(n) ?? Number(i.maxContext);
}
async function du(n, r, i, l = {}, o) {
  const c = SillyTavern.getContext(), h = c.ConnectionManagerRequestService, p = Su(n, c), { profile: v, mainApi: g } = p, _ = g !== "openai", b = b4(r, g), y = { stream: !1, signal: o, extractData: _ };
  let m = l, f;
  try {
    const E = await x4(c, p, b, i);
    E && (y.includePreset = !1, m = { ...E, ...l }), o?.throwIfAborted(), f = await h.sendRequest(n, b, i, y, m);
  } catch (E) {
    throw o?.aborted ? new DOMException("Request aborted by user", "AbortError") : new s1(v, E);
  }
  if (o?.aborted)
    throw new DOMException("Request aborted by user", "AbortError");
  let S;
  if (_) {
    const E = f?.content, D = typeof E == "string" ? E : "", w = ky(c, v, D);
    S = Ny({}, w, i), S = { ...S, structured: E !== null && typeof E == "object" ? E : void 0, hasReasoning: S.hasReasoning || !!f?.reasoning || w !== D };
  } else {
    const E = c.extractMessageFromData(f, g), D = ky(c, v, E);
    S = Ny(f, D, i, !!m.json_schema), S = { ...S, hasReasoning: S.hasReasoning || D !== E };
  }
  return A4(S, c);
}
const w4 = 0.9;
async function A4(n, r) {
  if (n.finishReason !== void 0 || !n.text || typeof r.getTokenCountAsync != "function")
    return n;
  try {
    if (await r.getTokenCountAsync(n.text) >= n.maxTokens * w4)
      return { ...n, truncated: !0, truncationEstimated: !0 };
  } catch (i) {
    console.warn("Could not count response tokens", i);
  }
  return n;
}
async function D4(n, r, i, l) {
  const o = await du(n, r, i, {}, l);
  if (Vh(o))
    throw new Error(Yh(o));
  return o.truncated && De("warning", a1(o)), o.text;
}
class Ch extends Error {
}
function Ry(n, r, i) {
  let l = n.structured;
  if (l === void 0) {
    if (Vh(n))
      throw new Error(Yh(n));
    try {
      l = MS(n.text);
    } catch (c) {
      throw n.truncated ? new Error(_4(n)) : (console.error("Raw response:", n.text), new Ch(
        `Model response is not valid JSON (${c?.message ?? c}). ${mv(n.text)}`
      ));
    }
  }
  const o = r.safeParse(l);
  if (!o.success) {
    const c = o.error.issues;
    console.error("Zod validation failed:", c), console.error("Raw response:", n.text, "Parsed:", l);
    const h = c.slice(0, 3).map((v) => `${v.path.join(".") || "(root)"}: ${v.message}`).join("; "), p = n.structured !== void 0 ? JSON.stringify(n.structured) : n.text;
    throw new Ch(
      `Model response failed schema validation for ${i} (${h}${c.length > 3 ? "; …" : ""}). ` + mv(p)
    );
  }
  return o.data;
}
const jy = /* @__PURE__ */ new Set();
function T4(n) {
  return `${n}:${Su(n).profile.model ?? ""}`;
}
async function O4(n, r, i, l, o, c) {
  const h = a3(i), p = T4(n);
  if (!jy.has(p))
    try {
      const f = await du(
        n,
        r,
        o,
        { json_schema: { name: l, strict: !0, value: h } },
        c
      );
      return Ry(f, i, l);
    } catch (f) {
      if (!(f instanceof s1 || f instanceof Ch))
        throw f;
      jy.add(p), console.warn("Native structured output failed, asking for JSON in the prompt instead:", f), De(
        "info",
        `Native structured output didn't work for this profile, so JSON is asked for in the prompt until the page is reloaded. ${f.message}`
      );
    }
  const v = vt.getSettings(), g = v.prompts.reviseJsonPrompt?.content;
  if (!g)
    throw new Error('The "Revise Session (JSON Mode)" prompt template is missing.');
  const _ = {
    example_response: g4(h),
    schema: JSON.stringify(h, null, 2)
  };
  let b;
  try {
    b = va.compile(g, { noEscape: !0, strict: !0 })(_);
  } catch (f) {
    const S = v.prompts.reviseJsonPrompt?.label ?? "reviseJsonPrompt";
    throw new Error(
      `Failed to render the "${S}" prompt template: ${f?.message ?? f}. Available variables: ${Object.keys(_).join(", ")}.`
    );
  }
  const y = { role: "system", content: b }, m = await du(n, [...r, y], o, {}, c);
  return Ry(m, i, l);
}
const On = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], ql = "alternate_greetings_";
function pu(n, r = {}) {
  const i = (h, p, v) => ({
    id: h,
    label: p.label,
    value: p.value,
    group: v
  }), l = On.filter((h) => n[h]).map((h) => i(h, n[h], "core")), o = Object.keys(n).filter((h) => h.startsWith(ql)).sort((h, p) => parseInt(h.slice(ql.length)) - parseInt(p.slice(ql.length))).map((h) => i(h, n[h], "alternate_greetings")), c = Object.entries(r).map(([h, p]) => i(h, p, "draft"));
  return [...l, ...o, ...c];
}
function N4(n, r, i = {}) {
  return i[n]?.label || r[n]?.label || n;
}
function M4(n, r, i) {
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
function k4(n, r) {
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
async function R4(n, r, i) {
  const l = [];
  let o = 0;
  for (let c = n.length - 1; c >= 0 && (o += await i(n[c].content), !(o > r)); c--)
    l.unshift(n[c]);
  return { messages: l, dropped: n.length - l.length };
}
function j4(n, [r, i], { includeNames: l, regex: o }) {
  const c = [];
  for (let h = r; h < i; h++) {
    const p = n[h];
    if (!p || p.is_system || typeof p.mes != "string")
      continue;
    const v = o(p.mes, !!p.is_user, n.length - h - 1);
    v.trim() && c.push({
      role: p.is_user ? "user" : "assistant",
      content: l && p.name ? `${p.name}: ${v}` : v
    });
  }
  return c;
}
async function u1(n, r, {
  selection: i,
  contextSize: l,
  maxResponseTokens: o
}) {
  if (r === -1)
    return n;
  const c = n.slice(0, r), h = n.slice(r + 1), p = SillyTavern.getContext(), v = p.chat ?? [], g = or !== void 0 || ma ? k4(i, v.length) : null;
  if (!g)
    return [...c, ...h];
  const _ = async (S) => S ? await p.getTokenCountAsync(S) : 0;
  let b = 0;
  for (const S of [...c, ...h])
    b += await _(typeof S.content == "string" ? S.content : "");
  const y = l - o - b, m = j4(v, g, {
    includeNames: !!ma,
    regex: (S, E, D) => $b(S, E ? Hg.USER_INPUT : Hg.AI_OUTPUT, {
      isPrompt: !0,
      depth: D
    })
  }), f = await R4(m, y, _);
  return f.dropped > 0 && De("warning", z4(f.messages.length, m.length, l)), [...c, ...f.messages, ...h];
}
function z4(n, r, i) {
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
}, L4 = "Continue the current text of the {{targetField}} field from exactly where it stops. Output only the new text that comes after it. Do not repeat, rewrite or summarize the existing text.";
new Yy("dumb", {}).getSettings();
async function B4({
  profileId: n,
  userPrompt: r,
  messageSelection: i,
  continueFrom: l,
  session: o,
  allCharacters: c,
  entriesGroupByWorldName: h,
  promptSettings: p,
  formatDescription: v,
  mainContextList: g,
  includeUserMacro: _,
  maxResponseToken: b,
  targetField: y
}) {
  const m = Su(n), f = {};
  f.char = gt(o.fields.name.value) || "{{char}}", f.user = _ && Ug ? Ug : "{{user}}", f.persona = "{{persona}}", f.targetField = y, f.targetLabel = gt(N4(y, o.fields, o.draftFields)), f.userInstructions = gt(r.trim()), f.fieldSpecificInstructions = gt(
    o.draftFields[y]?.prompt ?? o.fields[y]?.prompt
  ), f.activeFormatInstructions = va.compile(v.content, { noEscape: !0 })(
    f
  );
  {
    const w = [];
    o.selectedCharacterIndexes.forEach((N) => {
      const C = parseInt(N), O = c[C];
      O && w.push(O);
    }), f.characters = gt(w);
  }
  {
    const w = {};
    Object.entries(h).filter(
      ([N, C]) => C.length > 0 && o.selectedWorldNames.includes(N) && C.some((O) => !O.disable)
    ).forEach(([N, C]) => {
      w[N] = C.filter((O) => !O.disable);
    }), f.lorebooks = gt(w);
  }
  {
    const w = {}, N = {}, C = {}, O = vt.getSettings().contextToSend.dontSendOtherGreetings, j = M4(o.fields, y, O);
    Object.entries(j).forEach(([G, ee]) => {
      On.includes(G) ? w[ee.label] = ee.value : G.startsWith("alternate_greetings_") && (N[G] = ee.value);
    }), Object.entries(o.draftFields || {}).forEach(([G, ee]) => {
      C[ee.label] = ee.value;
    });
    const R = {};
    Object.keys(w).length > 0 && (R.core = w), Object.keys(N).length > 0 && (R.alternate_greetings = N), Object.keys(C).length > 0 && (R.draft = C), f.fields = gt(R), f.fieldList = gt(pu(j, o.draftFields));
  }
  let S = [], E = -1;
  {
    for (const w of g) {
      if (w.promptName === "chatHistory") {
        E = S.length, S.push({ role: "system", content: "" });
        continue;
      }
      let N = structuredClone(f);
      w.promptName === "stDescription" && (N.char = "{{char}}", N.user = "{{user}}");
      const C = p[w.promptName];
      if (!C)
        continue;
      const O = {
        role: w.role,
        content: Zl(C.content, N, Pn.substituteParams)
      };
      O.content && S.push(O);
    }
    l && (S.push({
      role: "user",
      content: va.compile(L4, { noEscape: !0 })(f)
    }), S.push({
      role: "assistant",
      content: l.trim()
    }));
  }
  S = await u1(S, E, {
    selection: i,
    contextSize: o1(m, vt.getSettings()),
    maxResponseTokens: b
  });
  const D = await du(n, S, b);
  if (Vh(D) && (!l || D.truncated))
    throw new Error(Yh(D));
  if (D.truncated && De("warning", a1(D)), l) {
    const w = jS(l, D.text);
    return w.trim() === l.trim() ? (De("warning", "The model didn't add any text. Try again or use a different model."), l) : w;
  }
  return S0(D.text);
}
function U4(n, r) {
  const i = n.match(/\d+/g)?.map(Number) ?? [], l = r.match(/\d+/g)?.map(Number) ?? [];
  for (let o = 0; o < Math.max(i.length, l.length); o++) {
    const c = (i[o] ?? 0) - (l[o] ?? 0);
    if (c !== 0) return c;
  }
  return 0;
}
async function P4(n, r) {
  let i, l = n.formatVersion;
  for (; ; ) {
    const o = (h) => U4(h.to, l) > 0, c = r.find((h) => h.from === l && o(h)) ?? r.find((h) => h.from === "*" && o(h));
    if (!c) return i;
    i = await c.action(i ?? structuredClone(n)), i.formatVersion = c.to, l = c.to;
  }
}
function H4(n, r) {
  const i = { ...n.prompts };
  for (const [l, o] of Object.entries(r))
    i[l]?.isDefault && (i[l] = { ...i[l], content: o });
  return { ...n, prompts: i };
}
function I4(n) {
  const { outputFormat: r, defaultPromptEngineeringMode: i, ...l } = n, { xmlFormat: o, jsonFormat: c, reviseXmlPrompt: h, ...p } = n.prompts ?? {};
  return {
    ...l,
    maxContextType: n.maxContextType === "custom" ? "custom" : "profile",
    prompts: p
  };
}
const pa = "SillyTavern-Character-Creator", Xh = "0.5.0", q4 = "F_1.12", c1 = {
  EXTENSION: "charCreator"
}, Z4 = [
  "stDescription",
  "charDefinitions",
  "lorebookDefinitions",
  "noneFormat",
  "worldInfoCharDefinition",
  "existingFieldDefinitions",
  "taskDescription",
  "outputFormatInstructions",
  "personaDescription",
  "reviseJsonPrompt",
  "reviseTaskDescription"
], ut = {
  stDescription: eu,
  charDefinitions: _h,
  lorebookDefinitions: y0,
  noneFormat: v0,
  worldInfoCharDefinition: _0,
  existingFieldDefinitions: Hl,
  taskDescription: Bh,
  outputFormatInstructions: Lh,
  personaDescription: CS,
  reviseJsonPrompt: wS,
  reviseTaskDescription: AS
}, f1 = {
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
      content: ut.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: ut.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: ut.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    noneFormat: {
      content: ut.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: ut.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: Hl,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: Bh,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: Lh,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: ut.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: ut.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseTaskDescription: {
      content: ut.reviseTaskDescription,
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
  let l = !1;
  return i.map((o, c) => {
    const h = o.replace(/^\d+/, "");
    if (h) {
      const p = l ? `${h[0].toUpperCase()}${h.slice(1).toLowerCase()}` : h.toLowerCase();
      return l || (l = !0), p;
    }
    return "";
  }).join("");
}
const vt = new Yy(c1.EXTENSION, f1);
async function G4() {
  return new Promise((n, r) => {
    vt.initializeSettings({ strategy: [] }).then(
      () => P4(vt.getSettings(), [
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
                  content: ut.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: ut.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: ut.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                noneFormat: {
                  content: ut.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: ut.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: Hl,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: Bh,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: Lh,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: ut.personaDescription,
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
                  content: ut.personaDescription,
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
            return await De("info", `[${pa}] Added Alternate Greetings.`), {
              ...i,
              prompts: {
                ...i?.prompts,
                stDescription: {
                  content: ut.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: ut.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: ut.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: Hl,
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
            return i.prompts.stDescription.isDefault && (l.prompts.stDescription.content = eu), l;
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
              content: ut.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, l.prompts.reviseTaskDescription = {
              content: ut.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, i.prompts.charDefinitions.isDefault && (l.prompts.charDefinitions.content = _h), i.prompts.lorebookDefinitions.isDefault && (l.prompts.lorebookDefinitions.content = y0), i.prompts.existingFieldDefinitions.isDefault && (l.prompts.existingFieldDefinitions.content = Hl), l;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(i) {
            const l = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (l.prompts.stDescription.content = eu), l;
          }
        },
        {
          from: "F_1.9",
          to: "F_1.10",
          action(i) {
            const l = {
              ...i
            };
            return i.prompts.charDefinitions.isDefault && (l.prompts.charDefinitions.content = _h), i.prompts.worldInfoCharDefinition.isDefault && (l.prompts.worldInfoCharDefinition.content = _0), l;
          }
        },
        {
          from: "F_1.10",
          to: "F_1.11",
          action(i) {
            return H4(i, {
              stDescription: eu,
              noneFormat: v0
            });
          }
        },
        {
          from: "F_1.11",
          to: "F_1.12",
          action(i) {
            return I4(i);
          }
        }
      ])
    ).then((i) => {
      i && (Pn.extensionSettings[c1.EXTENSION] = { ...i, version: Xh }, vt.saveSettings()), n();
    }).catch((i) => {
      console.error(`[${pa}] Error initializing settings:`, i), De("error", `[${pa}] Failed to initialize settings: ${i.message}`), Pn.Popup.show.confirm(
        `[${pa}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((l) => {
        l && (vt.resetSettings(), De("success", `[${pa}] Settings reset. Reloading may be required.`), n());
      });
    });
  });
}
const fe = ({ children: n, className: r, overrideDefaults: i = !1, ...l }) => {
  const o = ne.useMemo(() => {
    const c = [];
    return i || c.push("menu_button", "interactable"), c.push(r), c.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("button", { className: o, ...l, children: n });
}, d1 = ({ label: n, className: r, overrideDefaults: i = !1, type: l = "text", ...o }) => {
  const c = ne.useMemo(() => {
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
  const o = ne.useMemo(() => {
    const c = [];
    return i || c.push("text_pole"), c.push(r), c.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("select", { className: o, ...l, children: n });
}, bn = ({ children: n, className: r, overrideDefaults: i = !1, ...l }) => {
  const o = ne.useMemo(() => {
    const c = [];
    return i || c.push("text_pole", "textarea_compact"), c.push(r), c.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("textarea", { className: o, ...l, children: n });
};
var F4 = Fy(), on = /* @__PURE__ */ ((n) => (n[n.TEXT = 1] = "TEXT", n[n.CONFIRM = 2] = "CONFIRM", n[n.INPUT = 3] = "INPUT", n[n.DISPLAY = 4] = "DISPLAY", n))(on || {}), Ur = /* @__PURE__ */ ((n) => (n[n.AFFIRMATIVE = 1] = "AFFIRMATIVE", n[n.NEGATIVE = 0] = "NEGATIVE", n[n.CANCELLED = null] = "CANCELLED", n))(Ur || {});
const V4 = SillyTavern.getContext(), _i = ({
  content: n,
  type: r,
  inputValue: i = "",
  options: l = {},
  preventEscape: o = !1,
  onComplete: c
}) => {
  var h;
  const p = ne.useRef(null), v = ne.useRef(null), [g, _] = ne.useState(!1), [b, y] = ne.useState(null), m = ne.useRef(V4.uuidv4()), f = ne.useRef({
    id: m.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  ne.useEffect(() => {
    const w = p.current;
    if (!w) return;
    const N = (C) => {
      C.preventDefault(), o || S(Ur.CANCELLED);
    };
    return w.addEventListener("cancel", N), f.current.dlg = w, f.current.mainInput = v.current, si.util.popups.push(f.current), w.showModal || (w.classList.add("poly_dialog"), qg.registerDialog(w), new ResizeObserver((C) => {
      for (const O of C)
        qg.reposition(O.target);
    }).observe(w)), w.showModal(), jf(), () => {
      Ig(si.util.popups, f.current), jf(), w.removeEventListener("cancel", N);
    };
  }, []);
  const S = async (w) => {
    var N, C;
    let O = w;
    if (r === on.INPUT && (w >= Ur.AFFIRMATIVE ? O = (N = v.current) == null ? void 0 : N.value : w === Ur.NEGATIVE ? O = !1 : w === Ur.CANCELLED ? O = null : O = !1), (C = l.customInputs) != null && C.length) {
      const R = new Map(
        l.customInputs.map((G) => {
          var ee;
          const K = (ee = p.current) == null ? void 0 : ee.querySelector(`#${G.id}`);
          return [K.id, K.checked];
        })
      );
      f.current.inputResults = R;
    }
    if (f.current.result = w, f.current.value = O, l.onClosing && !await l.onClosing(f.current)) {
      _(!0), f.current.value = void 0, f.current.result = void 0, f.current.inputResults = void 0;
      return;
    }
    _(!1), si.util.lastResult = {
      value: O,
      result: w,
      inputResults: f.current.inputResults
    };
    const j = p.current;
    j && (j.setAttribute("closing", ""), jf(), Y_(j, async () => {
      var R;
      if (j.close(), l.onClose && await l.onClose(f.current), Ig(si.util.popups, f.current), si.util.popups.length > 0) {
        const G = (R = document.activeElement) == null ? void 0 : R.closest(".popup"), ee = G?.getAttribute("data-id"), K = si.util.popups.find(($) => $.id === ee);
        K && K.lastFocus && K.lastFocus.focus();
      }
      c(O);
    }));
  }, E = (w) => {
    w.target instanceof HTMLElement && w.target !== p.current && (y(w.target), f.current.lastFocus = w.target);
  }, D = async (w) => {
  };
  return F4.createPortal(
    /* @__PURE__ */ A.jsx(
      "dialog",
      {
        ref: p,
        className: (() => {
          const w = ["popup"];
          return l.wide && w.push("wide_dialogue_popup"), l.wider && w.push("wider_dialogue_popup"), l.large && w.push("large_dialogue_popup"), l.transparent && w.push("transparent_dialogue_popup"), l.allowHorizontalScrolling && w.push("horizontal_scrolling_dialogue_popup"), l.allowVerticalScrolling && w.push("vertical_scrolling_dialogue_popup"), l.animation && w.push(`popup--animation-${l.animation}`), w.join(" ");
        })(),
        "data-id": m.current,
        onKeyDown: D,
        onFocus: E,
        children: /* @__PURE__ */ A.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ A.jsx("div", { className: "popup-content", children: n }),
          r === on.INPUT && /* @__PURE__ */ A.jsx(
            "textarea",
            {
              ref: v,
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
}, ir = SillyTavern.getContext(), p1 = ({
  initialSelectedProfileId: n,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: l,
  onCreate: o,
  onUpdate: c,
  onDelete: h
}) => {
  const [p, v] = ne.useState(n ?? ""), [g, _] = ne.useState(Date.now()), { isEnabled: b, profiles: y, connectApiMap: m } = ne.useMemo(() => {
    var E, D;
    return (E = ir.extensionSettings.disabledExtensions) != null && E.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((D = ir.extensionSettings.connectionManager) == null ? void 0 : D.profiles) ?? [],
      connectApiMap: ir.CONNECT_API_MAP
    };
  }, [g]);
  ne.useEffect(() => {
    if (!b) return;
    const E = (N) => {
      Dl(N, r, m) && (_(Date.now()), o?.(N));
    }, D = (N, C) => {
      const O = Dl(N, r, m), j = Dl(C, r, m);
      (O || j) && _(Date.now()), c?.(N, C), p === N.id && !j && (v(""), l?.(void 0));
    }, w = (N) => {
      Dl(N, r, m) && (_(Date.now()), h?.(N), p === N.id && (v(""), l?.(void 0)));
    };
    return ir.eventSource.on("CONNECTION_PROFILE_CREATED", E), ir.eventSource.on("CONNECTION_PROFILE_UPDATED", D), ir.eventSource.on("CONNECTION_PROFILE_DELETED", w), () => {
      ir.eventSource.removeListener("CONNECTION_PROFILE_CREATED", E), ir.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", D), ir.eventSource.removeListener("CONNECTION_PROFILE_DELETED", w);
    };
  }, [b, p, r, m, l, o, c, h]);
  const f = ne.useMemo(() => {
    if (!b) return [];
    const E = y.filter((w) => Dl(w, r, m)), D = {};
    for (const [w, N] of Object.entries(r))
      D[w] = { label: N, profiles: [] };
    for (const w of E) {
      const N = m[w.api];
      D[N.selected] && D[N.selected].profiles.push(w);
    }
    for (const w of Object.values(D))
      w.profiles.sort((N, C) => (N.name ?? "").localeCompare(C.name ?? ""));
    return Object.values(D).filter((w) => w.profiles.length > 0);
  }, [b, y, r, m]), S = ne.useCallback(
    (E) => {
      const D = E.target.value;
      v(D);
      const w = y.find((N) => N.id === D);
      l?.(w);
    },
    [y, l]
  );
  return b ? /* @__PURE__ */ A.jsxs(Si, { value: p, onChange: S, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: i }),
    f.map((E) => /* @__PURE__ */ A.jsx("optgroup", { label: E.label, children: E.profiles.map((D) => /* @__PURE__ */ A.jsx("option", { value: D.id, children: D.name }, D.id)) }, E.label))
  ] }) : /* @__PURE__ */ A.jsx(Si, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, Y4 = tu.memo(
  ({ item: n, showToggleButton: r, showDeleteButton: i, showSelectInput: l, onToggle: o, onDelete: c, onSelectChange: h }) => {
    const {
      id: p,
      label: v,
      enabled: g,
      canDelete: _ = !0,
      canToggle: b = !0,
      showSelect: y = !0,
      canSelect: m = !0,
      selectOptions: f = [],
      selectValue: S
    } = n, E = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !g ? 0.6 : 1
    }, D = { cursor: "pointer", flexShrink: 0 }, w = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
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
          children: v
        }
      ),
      l && y && m && /* @__PURE__ */ A.jsx(
        Si,
        {
          value: S,
          onChange: (N) => h(p, N.target.value),
          disabled: !g,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: f.length === 0 ? /* @__PURE__ */ A.jsx("option", { disabled: !0, children: "--" }) : f.map((N) => /* @__PURE__ */ A.jsx("option", { value: N.value, children: N.label }, N.value))
        }
      ),
      l && (!y || !m) && /* @__PURE__ */ A.jsx("span", { style: w }),
      r && b && /* @__PURE__ */ A.jsx(
        fe,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${g ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...D,
            marginRight: "10px",
            fontSize: "1.2em",
            color: g ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => o(p)
        }
      ),
      r && !b && /* @__PURE__ */ A.jsx("span", { style: w }),
      i && _ && /* @__PURE__ */ A.jsx(
        fe,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...D,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => c(p)
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
  const h = ne.useRef(null), p = ne.useRef(null);
  ne.useEffect(() => (h.current && (p.current = Ee.create(h.current, {
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
      const { oldIndex: y, newIndex: m } = b;
      if (y === void 0 || m === void 0 || y === m)
        return;
      const f = Array.from(n), [S] = f.splice(y, 1);
      f.splice(m, 0, S), r(f);
    }
  })), () => {
    var b;
    (b = p.current) == null || b.destroy(), p.current = null;
  }), [n, r, c]);
  const v = (b) => {
    r(n.map((y) => y.id === b ? { ...y, enabled: !y.enabled } : y));
  }, g = (b) => {
    r(n.filter((y) => y.id !== b));
  }, _ = (b, y) => {
    r(n.map((m) => m.id === b ? { ...m, selectValue: y } : m));
  };
  return /* @__PURE__ */ A.jsx("ul", { ref: h, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((b) => /* @__PURE__ */ A.jsx(
    Y4,
    {
      item: b,
      showToggleButton: i,
      showDeleteButton: l,
      showSelectInput: o,
      onToggle: v,
      onDelete: g,
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
  onBeforeSelection: p,
  enableSearch: v = !1,
  searchPlaceholder: g = "Search...",
  searchNoResultsText: _ = "No results found",
  searchFuseOptions: b,
  inputClasses: y,
  containerClasses: m
}) => {
  const [f, S] = ne.useState(!1), [E, D] = ne.useState(""), w = ne.useRef(null);
  ne.useEffect(() => {
    const R = (G) => {
      w.current && !w.current.contains(G.target) && S(!1);
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, []), ne.useEffect(() => {
    f || D("");
  }, [f]);
  const N = ne.useMemo(() => {
    if (!v) return null;
    const R = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...b
    };
    return new xi(n, R);
  }, [n, v, b]), C = ne.useMemo(() => !v || !E.trim() || !N ? n : N.search(E.trim()).map((R) => R.item), [n, E, v, N]), O = async (R) => {
    let G;
    c ? G = r.includes(R) ? r.filter((ee) => ee !== R) : [...r, R] : G = r.includes(R) ? [] : [R], !(p && !await Promise.resolve(p(r, G))) && (i(G), o && S(!1));
  }, j = ne.useMemo(() => {
    var R;
    return r.length === 0 ? l : r.length === 1 ? ((R = n.find((G) => G.value === r[0])) == null ? void 0 : R.label) ?? r[0] : `${r.length} items selected`;
  }, [r, n, l]);
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      ref: w,
      className: `fancy-dropdown-container ${m ?? ""}`,
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
              v && /* @__PURE__ */ A.jsx(
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
                      placeholder: g,
                      value: E,
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
}, Q4 = tu.memo(({ item: n, isSelected: r, onClick: i }) => {
  const [l, o] = ne.useState(!1);
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
}), lh = SillyTavern.getContext(), wh = ({
  value: n,
  items: r,
  readOnlyValues: i = [],
  label: l,
  onChange: o,
  onItemsChange: c,
  enableCreate: h = !1,
  enableRename: p = !1,
  enableDelete: v = !1,
  onCreate: g,
  onRename: _,
  onDelete: b,
  buttons: y
}) => {
  const m = ne.useMemo(() => r.find((w) => w.value === n), [r, n]), f = ne.useCallback((w) => w ? i.includes(w) : !1, [i]), S = async () => {
    const w = await lh.Popup.show.input(
      `Create a new ${l}`,
      `Please enter a name for the new ${l}:`,
      ""
    );
    if (!w || w.trim() === "") return;
    const N = w.trim();
    if (r.some((O) => O.value === N)) {
      await De("warning", `A ${l} with this name already exists.`);
      return;
    }
    let C = { value: N, label: N };
    if (g) {
      const O = await Promise.resolve(g(N));
      if (!O.confirmed) return;
      O.value && (typeof O.value == "string" ? C = { value: O.value, label: O.value } : C = O.value);
    }
    c([...r, C]), o(C.value, n);
  }, E = async () => {
    if (!m) {
      await De("warning", `Please select a ${l} to rename.`);
      return;
    }
    if (f(m.value)) {
      await De("warning", `This ${l} cannot be renamed as it is read-only.`);
      return;
    }
    const w = await lh.Popup.show.input(
      `Rename ${l}`,
      `Please enter a new name for "${m.label}":`,
      m.label
    );
    if (!w || w.trim() === "" || w.trim() === m.value) return;
    const N = w.trim();
    if (r.some((j) => j.value === N)) {
      await De("warning", `A ${l} with this name already exists.`);
      return;
    }
    let C = { value: N, label: N };
    if (_) {
      const j = await Promise.resolve(_(m.value, N));
      if (!j.confirmed) return;
      j.value && (typeof j.value == "string" ? C = { value: j.value, label: j.value } : C = j.value);
    }
    const O = r.map((j) => j.value === m.value ? C : j);
    c(O), o(C.value, n);
  }, D = async () => {
    var w;
    if (!m) {
      await De("warning", `Please select a ${l} to delete.`);
      return;
    }
    if (f(m.value)) {
      await De("warning", `This ${l} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await lh.Popup.show.confirm(
      `Delete ${l}`,
      `Are you sure you want to delete "${m.label}"?`
    ) || b && !await Promise.resolve(b(m.value)))
      return;
    const N = r.findIndex((j) => j.value === m.value), C = r.filter((j) => j.value !== m.value);
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
      fe,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${l}`,
        onClick: S,
        "data-i18n": `[title]Create a new ${l}`
      }
    ),
    p && /* @__PURE__ */ A.jsx(
      fe,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${l}`,
        onClick: E,
        disabled: !m,
        "data-i18n": `[title]Rename selected ${l}`
      }
    ),
    v && /* @__PURE__ */ A.jsx(
      fe,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${l}`,
        onClick: D,
        disabled: !m,
        "data-i18n": `[title]Delete selected ${l}`
      }
    ),
    y?.map((w) => /* @__PURE__ */ A.jsx(
      fe,
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
function m1(n, r) {
  return { ...n, prompts: n.prompts.filter((i) => i.promptName !== r) };
}
function $4(n, r) {
  return Object.fromEntries(Object.entries(n).map(([i, l]) => [i, m1(l, r)]));
}
function K4(n, r) {
  const i = n || "prompt";
  let l = i;
  for (let o = 2; r.includes(l) || l === lr; o++)
    l = `${i}${o}`;
  return l;
}
const g1 = () => {
  const [, n] = ne.useState(0);
  return ne.useCallback(() => {
    n((i) => i + 1);
  }, []);
}, Tl = SillyTavern.getContext(), Ly = "Chat History", J4 = [
  { value: "system", label: "System" },
  { value: "user", label: "User" },
  { value: "assistant", label: "Assistant" }
], sh = {
  user: { icon: "fa-user", title: "Sent as User" },
  assistant: { icon: "fa-robot", title: "Sent as Assistant" }
}, di = (n) => Z4.includes(n), W4 = () => {
  const n = g1(), r = vt.getSettings(), [i, l] = ne.useState(lr), [o, c] = ne.useState(null), h = ne.useRef(null);
  ne.useEffect(() => {
    o && h.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [o]);
  const p = ne.useCallback(
    (B) => {
      const V = vt.getSettings();
      B(V), vt.saveSettings(), n();
    },
    [n]
  ), v = (B) => B === lr ? Ly : r.prompts[B]?.label ?? B, g = (B) => {
    p((V) => {
      const oe = V.mainContextTemplatePresets[V.mainContextTemplatePreset];
      oe && (V.mainContextTemplatePresets = {
        ...V.mainContextTemplatePresets,
        [V.mainContextTemplatePreset]: B(oe)
      });
    });
  }, _ = ne.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((B) => ({ value: B, label: B })),
    [r.mainContextTemplatePresets]
  ), b = ne.useMemo(
    () => [
      { value: lr, label: Ly },
      ...Object.entries(r.prompts).map(([B, V]) => ({ value: B, label: V.label || B })).sort((B, V) => B.label.localeCompare(V.label))
    ],
    [r.prompts]
  ), y = b.some((B) => B.value === i) ? i : lr, m = r.mainContextTemplatePresets[r.mainContextTemplatePreset], f = (B) => {
    p((V) => {
      V.mainContextTemplatePreset = B ?? "default";
    });
  }, S = (B) => {
    p((V) => {
      const oe = {};
      B.forEach((M) => {
        oe[M.value] = V.mainContextTemplatePresets[M.value] ?? structuredClone(
          V.mainContextTemplatePresets[V.mainContextTemplatePreset] ?? V.mainContextTemplatePresets.default
        );
      }), V.mainContextTemplatePresets = oe;
    });
  }, E = (B) => {
    g((V) => ({
      ...V,
      prompts: B.map((oe) => {
        const M = V.prompts.find((X) => X.promptName === oe.id);
        return { promptName: oe.id, enabled: oe.enabled, role: M?.role ?? "system" };
      })
    }));
  }, D = (B) => {
    g((V) => ({
      ...V,
      prompts: V.prompts.map((oe) => oe.promptName === B ? { ...oe, enabled: !oe.enabled } : oe)
    }));
  }, w = (B, V) => {
    g((oe) => ({
      ...oe,
      prompts: oe.prompts.map((M) => M.promptName === B ? { ...M, role: V } : M)
    }));
  }, N = async () => {
    const B = r.mainContextTemplatePreset;
    await Tl.Popup.show.confirm(
      "Restore default",
      `Reset "${B}" to the default prompt list?`
    ) && g(() => structuredClone(f1.mainContextTemplatePresets.default));
  }, C = () => {
    g((B) => zy(B, y));
  }, O = async () => {
    const B = y;
    B === lr || di(B) || !await Tl.Popup.show.confirm(
      "Delete prompt",
      `Are you sure you want to delete "${v(B)}"?`
    ) || (p((oe) => {
      const { [B]: M, ...X } = oe.prompts;
      oe.prompts = X, oe.mainContextTemplatePresets = $4(oe.mainContextTemplatePresets, B);
    }), o === B && c(null));
  }, j = async () => {
    const V = (await Tl.Popup.show.input("New prompt", "Enter a name for the new prompt:", ""))?.trim();
    if (!V) return;
    if (Object.values(r.prompts).some((M) => M.label.toLowerCase() === V.toLowerCase())) {
      De("error", `A prompt named "${V}" already exists.`);
      return;
    }
    const oe = K4(h1(V), Object.keys(r.prompts));
    p((M) => {
      M.prompts = { ...M.prompts, [oe]: { label: V, content: "", isDefault: !1 } };
      const X = M.mainContextTemplatePresets[M.mainContextTemplatePreset];
      X && (M.mainContextTemplatePresets = {
        ...M.mainContextTemplatePresets,
        [M.mainContextTemplatePreset]: zy(X, oe)
      });
    }), l(oe), c(oe);
  }, R = o ? r.prompts[o] : void 0, G = (B) => {
    o && p((V) => {
      V.prompts = { ...V.prompts, [o]: { ...V.prompts[o], label: B } };
    });
  }, ee = () => {
    o && !R?.label.trim() && G(o);
  }, K = (B) => {
    if (!o) return;
    const V = B.target.value;
    p((oe) => {
      const M = oe.prompts[o];
      M && (oe.prompts = {
        ...oe.prompts,
        [o]: {
          ...M,
          content: V,
          isDefault: di(o) ? ut[o] === V : !1
        }
      });
    });
  }, $ = async () => {
    !o || !R || !di(o) || !await Tl.Popup.show.confirm(
      "Restore Default",
      `Restore default for "${R.label}"?`
    ) || p((V) => {
      V.prompts = {
        ...V.prompts,
        [o]: {
          ...V.prompts[o],
          content: ut[o],
          isDefault: !0
        }
      };
    });
  }, te = async () => {
    await Tl.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (vt.resetSettings(), c(null), n(), De("success", "Settings have been reset."));
  }, ce = y !== lr && !di(y), de = (B) => o && R && /* @__PURE__ */ A.jsxs("div", { className: "charCreator_promptEditor", ref: h, children: [
    !di(o) && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
      /* @__PURE__ */ A.jsx("label", { className: "charCreator_settingsLabel", children: "Name" }),
      /* @__PURE__ */ A.jsx(
        d1,
        {
          type: "text",
          value: R.label,
          onChange: (V) => G(V.target.value),
          onBlur: ee
        }
      )
    ] }),
    B && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
      /* @__PURE__ */ A.jsx("label", { className: "charCreator_settingsLabel", children: "Role" }),
      /* @__PURE__ */ A.jsx(
        Si,
        {
          value: B.role,
          onChange: (V) => w(B.promptName, V.target.value),
          children: J4.map((V) => /* @__PURE__ */ A.jsx("option", { value: V.value, children: V.label }, V.value))
        }
      )
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "charCreator_promptEditorHeader", children: [
      /* @__PURE__ */ A.jsx("label", { className: "charCreator_settingsLabel", children: "Prompt" }),
      di(o) && /* @__PURE__ */ A.jsx(
        fe,
        {
          className: "fa-solid fa-undo",
          title: "Restore this prompt to default",
          onClick: $
        }
      ),
      /* @__PURE__ */ A.jsx(fe, { className: "fa-solid fa-xmark", title: "Close", onClick: () => c(null) })
    ] }),
    /* @__PURE__ */ A.jsx(
      bn,
      {
        value: R.content,
        onChange: K,
        placeholder: "Prompt text",
        rows: 14,
        style: { width: "100%" }
      }
    )
  ] }), be = !!m?.prompts.some((B) => B.promptName === o), I = (m?.prompts ?? []).map((B) => {
    const V = B.promptName === lr, oe = V || !!r.prompts[B.promptName], M = v(B.promptName);
    return {
      id: B.promptName,
      enabled: B.enabled,
      // The whole row is drawn here (toggle included), so the editor can open under it
      label: /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsxs("div", { className: `charCreator_promptRow${B.enabled ? "" : " charCreator_promptRowOff"}`, children: [
          /* @__PURE__ */ A.jsxs("span", { className: "charCreator_promptName", title: M, children: [
            /* @__PURE__ */ A.jsx("span", { className: "charCreator_promptNameText", children: M }),
            !V && sh[B.role] && /* @__PURE__ */ A.jsx(
              "span",
              {
                className: `charCreator_promptRole fa-xs fa-solid ${sh[B.role].icon}`,
                title: sh[B.role].title
              }
            )
          ] }),
          /* @__PURE__ */ A.jsx(
            fe,
            {
              overrideDefaults: !0,
              className: "charCreator_promptAction caution fa-solid fa-chain-broken",
              title: "Remove from this template",
              onClick: () => g((X) => m1(X, B.promptName))
            }
          ),
          oe && !V ? /* @__PURE__ */ A.jsx(
            fe,
            {
              overrideDefaults: !0,
              className: "charCreator_promptAction fa-solid fa-pencil",
              title: "Edit prompt",
              onClick: () => c(B.promptName)
            }
          ) : /* @__PURE__ */ A.jsx("span", { className: "charCreator_promptAction" }),
          /* @__PURE__ */ A.jsx(
            fe,
            {
              overrideDefaults: !0,
              className: `charCreator_promptAction charCreator_promptToggle fa-solid ${B.enabled ? "fa-toggle-on" : "fa-toggle-off"}`,
              title: B.enabled ? "Switch off" : "Switch on",
              onClick: () => D(B.promptName)
            }
          )
        ] }),
        o === B.promptName && de(B)
      ] })
    };
  });
  return /* @__PURE__ */ A.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsx("div", { className: "title_restorable", children: /* @__PURE__ */ A.jsx("span", { children: "Main Context Template" }) }),
      /* @__PURE__ */ A.jsx("label", { className: "charCreator_settingsLabel", children: "Template" }),
      /* @__PURE__ */ A.jsx(
        wh,
        {
          label: "Template",
          items: _,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: f,
          onItemsChange: S,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx("label", { className: "charCreator_settingsLabel", children: "Prompts" }),
      /* @__PURE__ */ A.jsxs("div", { className: "charCreator_promptBar", children: [
        /* @__PURE__ */ A.jsx(Si, { value: y, onChange: (B) => l(B.target.value), children: b.map((B) => /* @__PURE__ */ A.jsx("option", { value: B.value, children: B.label }, B.value)) }),
        /* @__PURE__ */ A.jsx(fe, { className: "fa-solid fa-chain", title: "Insert prompt", onClick: C }),
        /* @__PURE__ */ A.jsx(
          fe,
          {
            className: "fa-solid fa-pencil",
            title: "Edit prompt",
            disabled: y === lr,
            onClick: () => c(y)
          }
        ),
        /* @__PURE__ */ A.jsx(
          fe,
          {
            className: "caution fa-solid fa-x",
            title: "Delete prompt",
            disabled: !ce,
            onClick: O
          }
        ),
        /* @__PURE__ */ A.jsx(
          fe,
          {
            className: "fa-solid fa-undo",
            title: "Reset this template to the default prompt list",
            onClick: N
          }
        ),
        /* @__PURE__ */ A.jsx(fe, { className: "fa-solid fa-plus-square", title: "New prompt", onClick: j })
      ] }),
      !be && de(),
      /* @__PURE__ */ A.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(X4, { items: I, onItemsChange: E }) })
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", style: { marginTop: "15px" }, children: [
      /* @__PURE__ */ A.jsx(
        "input",
        {
          type: "checkbox",
          checked: r.showSaveAsWorldInfoEntry.show,
          onChange: (B) => p((V) => {
            V.showSaveAsWorldInfoEntry.show = B.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ A.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ A.jsxs(fe, { className: "danger_button", style: { width: "auto" }, onClick: te, children: [
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
  isDraft: p = !1,
  isGenerating: v = !1,
  onValueChange: g,
  onPromptChange: _,
  onGenerate: b,
  onContinue: y,
  onClear: m,
  onCompare: f,
  onDelete: S,
  onOpenReviseSessions: E
}) => /* @__PURE__ */ A.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ A.jsx("label", { children: r }),
  /* @__PURE__ */ A.jsxs("div", { className: `field-container ${o ? "large-field" : ""}`, children: [
    /* @__PURE__ */ A.jsx(bn, { value: i, onChange: (D) => g(n, D.target.value), rows: c }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ A.jsx(fe, { onClick: () => b(n), disabled: v, title: "Generate field content", children: v ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ A.jsx(fe, { onClick: () => y(n), disabled: v, title: "Continue from current content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ A.jsx(fe, { onClick: () => m(n), title: "Clear field content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" }) }),
      E && !p && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ A.jsx(fe, { onClick: () => E(n), title: "Revise with AI chat", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" }) }),
      !p && f && /* @__PURE__ */ A.jsx(fe, { onClick: () => f(n), title: "Compare with loaded character", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      p && S && /* @__PURE__ */ A.jsx(fe, { onClick: () => S(n), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
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
  const [h, p] = ne.useState(0);
  ne.useEffect(() => {
    h >= n.length && n.length > 0 ? p(n.length - 1) : n.length === 0 && p(0);
  }, [n, h]);
  const v = () => {
    const y = [...n, { value: "", prompt: "" }];
    r(y), p(y.length - 1);
  }, g = async () => {
    if (n.length === 0) return;
    if (await ew.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const m = n.filter((f, S) => S !== h);
      r(m);
    }
  }, _ = (y, m, f) => {
    const S = [...n];
    S[y][m] = f, r(S);
  }, b = n[h];
  return /* @__PURE__ */ A.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ A.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ A.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: n.map((y, m) => /* @__PURE__ */ A.jsxs(
            fe,
            {
              onClick: () => p(m),
              className: `menu_button ${m === h ? "active" : ""}`,
              children: [
                "Greeting ",
                m + 1
              ]
            },
            m
          ))
        }
      ),
      /* @__PURE__ */ A.jsxs(fe, { onClick: v, title: "Add a new alternate greeting", children: [
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
        /* @__PURE__ */ A.jsx(fe, { onClick: () => i(h), disabled: c, title: "Generate greeting", children: c ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ A.jsx(fe, { onClick: () => l(h), disabled: c, title: "Continue greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ A.jsx(
          fe,
          {
            onClick: () => _(h, "value", ""),
            disabled: c,
            title: "Clear greeting",
            children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ A.jsx(fe, { onClick: () => o(h), disabled: c, title: "Compare greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ A.jsx(
          fe,
          {
            onClick: g,
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
      var c = this.castInput(r, l), h = this.castInput(i, l), p = this.removeEmpty(this.tokenize(c, l)), v = this.removeEmpty(this.tokenize(h, l));
      return this.diffWithOptionsObj(p, v, l, o);
    }, n.prototype.diffWithOptionsObj = function(r, i, l, o) {
      var c = this, h, p = function(C) {
        if (C = c.postProcess(C, l), o) {
          setTimeout(function() {
            o(C);
          }, 0);
          return;
        } else
          return C;
      }, v = i.length, g = r.length, _ = 1, b = v + g;
      l.maxEditLength != null && (b = Math.min(b, l.maxEditLength));
      var y = (h = l.timeout) !== null && h !== void 0 ? h : 1 / 0, m = Date.now() + y, f = [{ oldPos: -1, lastComponent: void 0 }], S = this.extractCommon(f[0], i, r, 0, l);
      if (f[0].oldPos + 1 >= g && S + 1 >= v)
        return p(this.buildValues(f[0].lastComponent, i, r));
      var E = -1 / 0, D = 1 / 0, w = function() {
        for (var C = Math.max(E, -_); C <= Math.min(D, _); C += 2) {
          var O = void 0, j = f[C - 1], R = f[C + 1];
          j && (f[C - 1] = void 0);
          var G = !1;
          if (R) {
            var ee = R.oldPos - C;
            G = R && 0 <= ee && ee < v;
          }
          var K = j && j.oldPos + 1 < g;
          if (!G && !K) {
            f[C] = void 0;
            continue;
          }
          if (!K || G && j.oldPos < R.oldPos ? O = c.addToPath(R, !0, !1, 0, l) : O = c.addToPath(j, !1, !0, 1, l), S = c.extractCommon(O, i, r, C, l), O.oldPos + 1 >= g && S + 1 >= v)
            return p(c.buildValues(O.lastComponent, i, r)) || !0;
          f[C] = O, O.oldPos + 1 >= g && (D = Math.min(D, C - 1)), S + 1 >= v && (E = Math.max(E, C + 1));
        }
        _++;
      };
      if (o)
        (function C() {
          setTimeout(function() {
            if (_ > b || Date.now() > m)
              return o(void 0);
            w() || C();
          }, 0);
        })();
      else
        for (; _ <= b && Date.now() <= m; ) {
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
      for (var h = i.length, p = l.length, v = r.oldPos, g = v - o, _ = 0; g + 1 < h && v + 1 < p && this.equals(l[v + 1], i[g + 1], c); )
        g++, v++, _++, c.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return _ && !c.oneChangePerToken && (r.lastComponent = { count: _, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = v, g;
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
      for (var h = o.length, p = 0, v = 0, g = 0; p < h; p++) {
        var _ = o[p];
        if (_.removed)
          _.value = this.join(l.slice(g, g + _.count)), g += _.count;
        else {
          if (!_.added && this.useLongestToken) {
            var b = i.slice(v, v + _.count);
            b = b.map(function(y, m) {
              var f = l[g + m];
              return f.length > y.length ? f : y;
            }), _.value = this.join(b);
          } else
            _.value = this.join(i.slice(v, v + _.count));
          v += _.count, _.added || (g += _.count);
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
function Ah(n, r, i) {
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
function Ol(n, r) {
  return Ah(n, r, "");
}
function Yo(n, r) {
  return Dh(n, r, "");
}
function Hy(n, r) {
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
  for (var p = i; p < n.length; p++) {
    for (; c > 0 && n[p] != r[c]; )
      c = o[c];
    n[p] == r[c] && c++;
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
var v1 = /* @__PURE__ */ (function() {
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
})(), mu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", iw = new RegExp("[".concat(mu, "]+|\\s+|[^").concat(mu, "]"), "ug"), lw = (
  /** @class */
  (function(n) {
    v1(r, n);
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
        o = Array.from(c.segment(i), function(v) {
          return v.segment;
        });
      } else
        o = i.match(iw) || [];
      var h = [], p = null;
      return o.forEach(function(v) {
        /\s/.test(v) ? p == null ? h.push(v) : h.push(h.pop() + v) : p != null && /\s/.test(p) ? h[h.length - 1] == p ? h.push(h.pop() + v) : h.push(p + v) : h.push(v), p = v;
      }), h;
    }, r.prototype.join = function(i) {
      return i.map(function(l, o) {
        return o == 0 ? l : l.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(i, l) {
      if (!i || l.oneChangePerToken)
        return i;
      var o = null, c = null, h = null;
      return i.forEach(function(p) {
        p.added ? c = p : p.removed ? h = p : ((c || h) && Iy(o, h, c, p), o = p, c = null, h = null);
      }), (c || h) && Iy(o, h, c, null), i;
    }, r;
  })(Gr)
), sw = new lw();
function y1(n, r, i) {
  return sw.diff(n, r, i);
}
function Iy(n, r, i, l) {
  if (r && i) {
    var o = Br(r.value), c = Nl(r.value), h = Br(i.value), p = Nl(i.value);
    if (n) {
      var v = Uy(o, h);
      n.value = Dh(n.value, h, v), r.value = Ol(r.value, v), i.value = Ol(i.value, v);
    }
    if (l) {
      var g = Py(c, p);
      l.value = Ah(l.value, p, g), r.value = Yo(r.value, g), i.value = Yo(i.value, g);
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
    var b = Br(l.value), y = Br(r.value), m = Nl(r.value), f = Uy(b, y);
    r.value = Ol(r.value, f);
    var S = Py(Ol(b, f), m);
    r.value = Yo(r.value, S), l.value = Ah(l.value, b, S), n.value = Dh(n.value, b, b.slice(0, b.length - S.length));
  } else if (l) {
    var E = Br(l.value), D = Nl(r.value), w = Hy(D, E);
    r.value = Yo(r.value, w);
  } else if (n) {
    var N = Nl(n.value), C = Br(r.value), w = Hy(N, C);
    r.value = Ol(r.value, w);
  }
}
var ow = (
  /** @class */
  (function(n) {
    v1(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var l = new RegExp("(\\r?\\n)|[".concat(mu, "]+|[^\\S\\n\\r]+|[^").concat(mu, "]"), "ug");
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
      return i.tokenize = _1, i;
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
function _1(n, r) {
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
      return i.tokenize = _1, i;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(i, l) {
      var o = l.undefinedReplacement, c = l.stringifyReplacer, h = c === void 0 ? function(p, v) {
        return typeof v > "u" ? o : v;
      } : c;
      return typeof i == "string" ? i : JSON.stringify(Th(i, null, null, h), null, "  ");
    }, r.prototype.equals = function(i, l, o) {
      return n.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), l.replace(/,([\r\n])/g, "$1"), o);
    }, r;
  })(Gr)
);
new gw();
function Th(n, r, i, l, o) {
  r = r || [], i = i || [], l && (n = l(o === void 0 ? "" : o, n));
  var c;
  for (c = 0; c < r.length; c += 1)
    if (r[c] === n)
      return i[c];
  var h;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (r.push(n), h = new Array(n.length), i.push(h), c = 0; c < n.length; c += 1)
      h[c] = Th(n[c], r, i, l, String(c));
    return r.pop(), i.pop(), h;
  }
  if (n && n.toJSON && (n = n.toJSON()), typeof n == "object" && n !== null) {
    r.push(n), h = {}, i.push(h);
    var p = [], v;
    for (v in n)
      Object.prototype.hasOwnProperty.call(n, v) && p.push(v);
    for (p.sort(), c = 0; c < p.length; c += 1)
      v = p[c], h[v] = Th(n[v], r, i, l, v);
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
  const l = ne.useMemo(() => {
    const o = y1(n, r);
    let c = "", h = "";
    return o.forEach((p) => {
      const g = `<span style="${p.added ? "color: green; background-color: #e6ffed;" : p.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p.value}</span>`;
      p.added || (c += g), p.removed || (h += g);
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
      for (const v of c.fields_to_change)
        o.fields[v.field] ? o.fields[v.field].value = v.value : o.draftFields[v.field] && (o.draftFields[v.field].value = v.value);
    if (c.draft_fields_to_remove?.length)
      for (const v of c.draft_fields_to_remove)
        o.draftFields[v] && delete o.draftFields[v];
    let h = bw(o), p = !1;
    if (c.greetings_to_change?.length) {
      p = !0;
      for (const v of c.greetings_to_change)
        v.index > 0 && v.index <= h.length && (h[v.index - 1].value = v.value);
    }
    if (c.greetings_to_remove?.length) {
      p = !0;
      const v = new Set(c.greetings_to_remove.map((g) => g - 1));
      h = h.filter((g, _) => !v.has(_));
    }
    c.greetings_to_add?.length && (p = !0, h.push(...c.greetings_to_add.map((v) => ({ value: v, prompt: "" })))), p && (Object.keys(o.fields).forEach((v) => {
      v.startsWith("alternate_greetings_") && delete o.fields[v];
    }), h.forEach((v, g) => {
      const _ = `alternate_greetings_${g + 1}`;
      o.fields[_] = {
        ...v,
        label: `Alternate Greeting ${g + 1}`
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
}, Oh = "placeholder-chatHistory", Ew = ga({
  justification: _n().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: _n().describe("The new, full content for the character field.")
}), Cw = ga({
  field: _n(),
  value: _n()
}), ww = ga({
  index: hu().int().positive(),
  value: _n()
});
ga({
  justification: _n(),
  fields_to_change: Tn(Cw).optional(),
  draft_fields_to_remove: Tn(_n()).optional(),
  greetings_to_add: Tn(_n()).optional(),
  greetings_to_remove: Tn(hu().int().positive()).optional(),
  greetings_to_change: Tn(ww).optional()
});
const Aw = (n, r) => {
  const i = ga({
    index: hu().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: _n().describe("The new content for the alternate greeting.")
  }), l = {
    justification: _n().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Tn(_n()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Tn(hu().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Tn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (n.length > 0) {
    const o = ga({
      field: Eh(n).describe("The unique ID of the field to change (core or draft)."),
      value: _n().describe("The new content for the field.")
    });
    l.fields_to_change = Tn(o).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (l.draft_fields_to_remove = Tn(Eh(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), ga(l);
}, b1 = ({ originalContent: n, newContent: r }) => {
  const i = ne.useMemo(() => {
    const l = y1(n, r);
    let o = "", c = "";
    return l.forEach((h) => {
      const p = h.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), g = `<span style="${h.added ? "color: green; background-color: #e6ffed;" : h.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      h.added || (o += g), h.removed || (c += g);
    }), { originalHtml: o, newHtml: c };
  }, [n, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, Dw = ({ before: n, after: r }) => {
  const i = ne.useMemo(() => {
    const l = [];
    return (/* @__PURE__ */ new Set([...Object.keys(n.fields), ...Object.keys(r.fields)])).forEach((c) => {
      const h = n.fields[c], p = r.fields[c], v = h?.value ?? "", g = p?.value ?? "";
      v !== g && l.push({
        label: p?.label ?? h?.label ?? c,
        before: v,
        after: g
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
      /* @__PURE__ */ A.jsx(b1, { originalContent: o, newContent: c })
    ] }, l)) })
  ] });
}, Tw = ({ currentState: n, initialState: r }) => {
  const [i, l] = ne.useState(!1), { coreFields: o, alternateGreetings: c } = ne.useMemo(() => {
    const p = [], v = [];
    return On.forEach((g) => {
      n.fields[g] && p.push({ label: n.fields[g].label, value: n.fields[g].value });
    }), Object.entries(n.fields).filter(([g]) => g.startsWith("alternate_greetings_")).sort((g, _) => parseInt(g[0].split("_")[2]) - parseInt(_[0].split("_")[2])).forEach(([, g]) => v.push(g.value)), { coreFields: p, alternateGreetings: v };
  }, [n]), h = ne.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(n.fields)])).forEach((g) => {
      const _ = r.fields[g], b = n.fields[g], y = _?.value ?? "", m = b?.value ?? "";
      y !== m && p.push({
        label: b?.label ?? _?.label ?? g,
        before: y,
        after: m
      });
    }), p;
  }, [r, n]);
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: i ? "Comparing with Original State" : "Current Character State" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: i, onChange: (p) => l(p.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: h.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : h.map(({ label: p, before: v, after: g }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ A.jsx("h4", { children: p }),
      /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Original" }),
        /* @__PURE__ */ A.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ A.jsx(b1, { originalContent: v, newContent: g })
    ] }, p)) }) : /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Core Fields" }),
      o.map(({ label: p, value: v }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: p }),
        /* @__PURE__ */ A.jsx("div", { className: "state-value", children: v || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, p)),
      c.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        c.map((p, v) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Greeting ",
            v + 1
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, v))
      ] })
    ] }) })
  ] });
}, Xo = SillyTavern.getContext(), Ow = ({ initialState: n, onSave: r, onClose: i }) => {
  const [l, o] = ne.useState(() => structuredClone(n)), c = (b, y, m) => {
    const f = structuredClone(l), S = m ? "draftFields" : "fields";
    f[S][b] && (f[S][b].value = y), o(f);
  }, h = (b, y) => {
    const m = structuredClone(l), f = `alternate_greetings_${b + 1}`;
    m.fields[f] && (m.fields[f].value = y), o(m);
  }, { coreFields: p, alternateGreetings: v, draftFields: g } = ne.useMemo(() => {
    const b = [], y = [], m = [];
    return On.forEach((f) => {
      l.fields[f] && b.push({ id: f, label: l.fields[f].label, value: l.fields[f].value });
    }), Object.entries(l.fields).filter(([f]) => f.startsWith("alternate_greetings_")).sort((f, S) => parseInt(f[0].split("_")[2]) - parseInt(S[0].split("_")[2])).forEach(([, f]) => y.push(f.value)), Object.entries(l.draftFields).forEach(([f, S]) => {
      m.push({ id: f, label: S.label, value: S.value });
    }), { coreFields: b, alternateGreetings: y, draftFields: m };
  }, [l]), _ = () => {
    JSON.stringify(n) !== JSON.stringify(l) && r(l), i();
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs(fe, { onClick: _, children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ A.jsxs(fe, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: b, label: y, value: m }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: y }),
        /* @__PURE__ */ A.jsx(bn, { value: m, onChange: (f) => c(b, f.target.value, !1), rows: 4 })
      ] }, b)),
      g.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        g.map(({ id: b, label: y, value: m }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsx("label", { children: y }),
          /* @__PURE__ */ A.jsx(bn, { value: m, onChange: (f) => c(b, f.target.value, !0), rows: 4 })
        ] }, b))
      ] }),
      v.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        v.map((b, y) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Greeting ",
            y + 1
          ] }),
          /* @__PURE__ */ A.jsx(bn, { value: b, onChange: (m) => h(y, m.target.value), rows: 4 })
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
  const [h, p] = ne.useState(n.messages), [v, g] = ne.useState(""), [_, b] = ne.useState(!1), [y, m] = ne.useState(null), [f, S] = ne.useState(!1), [E, D] = ne.useState(!1), [w, N] = ne.useState(null), [C, O] = ne.useState(""), j = ne.useRef(null), R = ne.useRef(null);
  ne.useEffect(() => {
    j.current?.scrollIntoView({ behavior: "smooth" });
  }, [h]);
  const G = ne.useCallback(
    (Y, ge, we) => {
      if (JSON.stringify(we) === JSON.stringify(ge))
        return Y;
      const $e = vt.getSettings().prompts.existingFieldDefinitions;
      if (!$e) return Y;
      const Ve = { core: {}, alternate_greetings: {}, draft: {} }, P = {}, ae = {};
      if ((/* @__PURE__ */ new Set([...Object.keys(we.fields), ...Object.keys(ge.fields)])).forEach((Ae) => {
        const zt = we.fields[Ae]?.value ?? "", Mn = ge.fields[Ae]?.value ?? "";
        if (zt !== Mn) {
          const He = ge.fields[Ae];
          He && (P[Ae] = He, Ae.startsWith("alternate_greetings_") ? Ve.alternate_greetings[He.label] = He.value : On.includes(Ae) && (Ve.core[He.label] = He.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(we.draftFields), ...Object.keys(ge.draftFields)])).forEach((Ae) => {
        const zt = we.draftFields[Ae]?.value ?? "", Mn = ge.draftFields[Ae]?.value ?? "";
        if (zt !== Mn && ge.draftFields[Ae]) {
          const He = ge.draftFields[Ae];
          Ve.draft[He.label] = He.value, ae[Ae] = He;
        }
      }), Object.keys(Ve.core).length === 0 && Object.keys(Ve.alternate_greetings).length === 0 && Object.keys(Ve.draft).length === 0)
        return Y;
      const qe = {
        fields: gt(Ve),
        fieldList: gt(pu(P, ae))
      }, ye = Zl($e.content, qe, Xo.substituteParams);
      if (ye.trim()) {
        const Ae = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: ye.trim(),
          isStateUpdate: !0
        };
        return [...Y, Ae];
      }
      return Y;
    },
    []
  ), ee = ne.useCallback(
    async (Y, ge, we, Ze) => {
      const $e = vt.getSettings();
      if (!n.profileId) {
        De("warning", "Please select a connection profile for this session.");
        return;
      }
      R.current = new AbortController(), we(), b(!0);
      try {
        const Ve = Su(n.profileId), P = [...Y], ae = (qe) => u1(
          qe,
          qe.findIndex((ye) => ye.id === Oh),
          {
            selection: c,
            contextSize: o1(Ve, $e),
            maxResponseTokens: $e.maxResponseToken
          }
        ), re = Y.slice(0, Y.length - (ge ? 0 : 1)).reverse().find((qe) => qe.stateSnapshot)?.stateSnapshot ?? o, Oe = $e.prompts.existingFieldDefinitions;
        if (Oe) {
          const qe = {
            fields: gt({
              core: Object.fromEntries(
                Object.entries(re.fields).filter(([Ae]) => !Ae.startsWith("alternate_greetings_")).map(([, Ae]) => [Ae.label, Ae.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(re.fields).filter(([Ae]) => Ae.startsWith("alternate_greetings_")).map(([, Ae]) => [Ae.label, Ae.value])
              ),
              draft: Object.fromEntries(Object.entries(re.draftFields).map(([, Ae]) => [Ae.label, Ae.value]))
            }),
            fieldList: gt(pu(re.fields, re.draftFields))
          }, ye = Zl(Oe.content, qe, Xo.substituteParams);
          if (ye.trim()) {
            const Ae = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: ye.trim()
            }, zt = P.pop();
            P.push(Ae), zt && P.push(zt);
          }
        }
        if (n.isReadonly) {
          P.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const qe = await D4(
            n.profileId,
            await ae(P),
            $e.maxResponseToken,
            R.current.signal
          ), ye = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: qe
          }, Ae = [...Y, ye];
          p(Ae), l({ ...n, messages: Ae });
        } else {
          const qe = n.type === "field" ? Ew : (() => {
            const kn = [...Object.keys(re.fields), ...Object.keys(re.draftFields)], Jl = Object.keys(re.draftFields);
            return Aw(kn, Jl);
          })(), Ae = await O4(
            n.profileId,
            await ae(P),
            qe,
            n.type === "field" ? qy.FIELD : qy.GLOBAL,
            $e.maxResponseToken,
            R.current.signal
          ), zt = Sw(re, Ae, n.type, n.targetFieldId), Mn = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Ae.justification,
            stateSnapshot: zt
          };
          let He = [...Y, Mn];
          He = G(He, zt, re), p(He), l({ ...n, messages: He });
        }
      } catch (Ve) {
        Ve.name === "AbortError" ? De("info", "Request was cancelled.") : (console.error("Revise request failed:", Ve), De("error", `Request failed: ${l1(Ve)}`)), Ze();
      } finally {
        b(!1), R.current = null;
      }
    },
    [n, l, o, c, G]
  ), K = ne.useCallback(async () => {
    if (!v.trim() || _) return;
    const Y = { id: `msg-${Date.now()}`, role: "user", content: v.trim() }, ge = h, we = v;
    ee(
      [...h, Y],
      !1,
      () => {
        p([...h, Y]), g("");
      },
      // Put the message back in the input so it can be sent again.
      () => {
        p(ge), g(we);
      }
    );
  }, [v, _, h, ee]), $ = ne.useCallback(async () => {
    if (_ || h.length === 0) return;
    const Y = h;
    let ge = [...h];
    const we = h.findLastIndex((Ze) => !Ze.isStateUpdate);
    we > -1 && h[we].role === "assistant" && (ge = h.slice(0, we)), await ee(
      ge,
      !0,
      () => p(ge),
      () => p(Y)
    );
  }, [_, h, ee]), te = () => {
    const Y = h.slice().reverse().find((ge) => ge.stateSnapshot)?.stateSnapshot ?? o;
    i(Y), r();
  }, ce = (Y) => {
    const ge = h.findIndex(($e) => $e.id === Y);
    if (ge === -1 || !h[ge].stateSnapshot) return;
    const we = h[ge].stateSnapshot;
    let Ze = o;
    for (let $e = ge - 1; $e >= 0; $e--)
      if (h[$e].stateSnapshot) {
        Ze = h[$e].stateSnapshot;
        break;
      }
    m({ before: Ze, after: we });
  }, de = () => {
    S(!0);
  }, be = (Y) => {
    N(Y.id), O(Y.content);
  }, I = () => {
    N(null), O("");
  }, B = async () => {
    if (!w) return;
    const Y = h.findIndex((ae) => ae.id === w);
    if (Y === -1 || !await Xo.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const we = h, Ze = h.slice(0, Y), $e = { ...h[Y], content: C }, Ve = [...Ze, $e], P = C;
    I(), ee(
      Ve,
      !1,
      () => p(Ve),
      // Reopen the editor with the edited text so it can be saved again.
      () => {
        p(we), N($e.id), O(P);
      }
    );
  }, V = async (Y) => {
    const ge = h.findIndex((P) => P.id === Y);
    if (ge === -1) return;
    const Ze = !!h[ge].isInitial;
    if (!await Xo.Popup.show.confirm(
      "Delete Message",
      Ze ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let Ve;
    Ze ? Ve = h.filter((P) => P.isInitial && P.id !== Y) : Ve = h.slice(0, ge), p(Ve), l({ ...n, messages: Ve }), De("info", "Message history has been updated.");
  }, oe = h.filter((Y) => !Y.isStateUpdate), M = oe.filter((Y) => Y.isInitial), X = oe.filter((Y) => !Y.isInitial), se = h.slice().reverse().find((Y) => Y.stateSnapshot)?.stateSnapshot ?? o, le = () => {
    D(!0);
  }, pe = (Y) => {
    const ge = h.slice().reverse().find(($e) => $e.stateSnapshot)?.stateSnapshot ?? o, we = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: Y
    };
    let Ze = [...h, we];
    Ze = G(Ze, Y, ge), p(Ze), l({ ...n, messages: Ze }), D(!1);
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
          p1,
          {
            initialSelectedProfileId: n.profileId,
            onChange: (Y) => l({ ...n, profileId: Y?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ A.jsx(fe, { onClick: de, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ A.jsx(fe, { onClick: le, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ A.jsx(fe, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ A.jsxs(fe, { onClick: te, title: "Apply Changes and Close", children: [
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
              /* @__PURE__ */ A.jsxs(fe, { onClick: B, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ A.jsxs(fe, { onClick: I, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, Y.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper initial-context ${Y.role}`, children: [
            /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${Y.role} initial`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: Y.content }) }),
            !_ && Y.id !== Oh && /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ A.jsxs(
                fe,
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
                fe,
                {
                  className: "message-action-button danger_button",
                  onClick: () => V(Y.id),
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
      X.map(
        (Y) => w === Y.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ A.jsx(bn, { value: C, onChange: (ge) => O(ge.target.value), rows: 3 }),
          /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ A.jsxs(fe, { onClick: B, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ A.jsxs(fe, { onClick: I, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, Y.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper ${Y.role}`, children: [
          /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
            Y.role === "user" && !Y.stateSnapshot && !_ && /* @__PURE__ */ A.jsxs(
              fe,
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
              fe,
              {
                className: "message-action-button",
                onClick: () => ce(Y.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !_ && /* @__PURE__ */ A.jsxs(
              fe,
              {
                className: "message-action-button danger_button",
                onClick: () => V(Y.id),
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
      X.length > 0 && !_ && /* @__PURE__ */ A.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ A.jsxs(fe, { onClick: $, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      _ && /* @__PURE__ */ A.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ A.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ A.jsx(fe, { onClick: ze, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ A.jsx("div", { ref: j })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ A.jsx(
        bn,
        {
          value: v,
          onChange: (Y) => g(Y.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: _ || !!w,
          onKeyDown: (Y) => {
            Y.key === "Enter" && !Y.shiftKey && (Y.preventDefault(), K());
          }
        }
      ),
      /* @__PURE__ */ A.jsxs(fe, { onClick: K, disabled: _ || !v.trim() || !!w, children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    y && /* @__PURE__ */ A.jsx(
      _i,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(Dw, { before: y.before, after: y.after }),
        onComplete: () => m(null),
        options: { wide: !0, large: !0 }
      }
    ),
    f && /* @__PURE__ */ A.jsx(
      _i,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(Tw, { currentState: se, initialState: o }),
        onComplete: () => S(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    E && /* @__PURE__ */ A.jsx(
      _i,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          Ow,
          {
            initialState: se,
            onSave: pe,
            onClose: () => D(!1)
          }
        ),
        onComplete: () => D(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
function S1(n, r = {}) {
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
  const p = [], g = {
    ...{
      user: Pn.name1 || "You",
      char: gt(n.fields.name?.value) || "Character",
      // Resolved up front like ST's {{persona}} macro, since renderPrompt keeps {{char}}/{{user}} literal.
      persona: Pn.substituteParams(Pn.powerUserSettings.persona_description ?? "")
    },
    fields: gt({
      core: Object.fromEntries(
        Object.entries(n.fields).filter(([m]) => !m.startsWith("alternate_greetings_")).map(([, m]) => [m.label, m.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(n.fields).filter(([m]) => m.startsWith("alternate_greetings_")).map(([, m]) => [m.label, m.value])
      ),
      draft: Object.fromEntries(Object.entries(n.draftFields).map(([, m]) => [m.label, m.value]))
    }),
    // Every field with its ID and label, see FieldListItem in field-list.ts
    fieldList: gt(pu(n.fields, n.draftFields))
  };
  if (l.charCard) {
    const m = [];
    o.selectedCharacterIndexes.forEach((f) => {
      const S = Pn.characters[parseInt(f)];
      S && m.push(S);
    }), g.characters = gt(m);
  }
  if (l.worldInfo) {
    const m = {};
    await Promise.all(
      o.selectedWorldNames.map(async (f) => {
        const S = await Pn.loadWorldInfo(f);
        S && (m[f] = S1(S));
      })
    ), g.lorebooks = gt(m);
  }
  for (const m of h.prompts) {
    if (!m.enabled || m.promptName === "stDescription" && !l.stDescription || m.promptName === "charDefinitions" && !l.charCard || m.promptName === "lorebookDefinitions" && !l.worldInfo || m.promptName === "existingFieldDefinitions" && !l.existingFields || m.promptName === "personaDescription" && !l.persona || m.promptName === "chatHistory" && l.messages.type === "none" || or === void 0 && !ma && m.promptName === "chatHistory") continue;
    if (m.promptName === "chatHistory") {
      p.push({
        id: Oh,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    if (["taskDescription", "existingFieldDefinitions"].includes(m.promptName))
      continue;
    const S = c.prompts[m.promptName];
    if (!S || S.content.includes("{{activeFormatInstructions}}"))
      continue;
    const E = m.promptName === "stDescription" ? { ...g, char: "{{char}}", user: "{{user}}" } : g, D = Zl(S.content, E, Pn.substituteParams);
    D.trim() && p.push({
      id: `im-${p.length}`,
      role: m.role,
      content: D.trim(),
      isInitial: !0
    });
  }
  const _ = r ? n.fields[r]?.label || n.draftFields[r]?.label : "Global", b = c.prompts.reviseTaskDescription.content, y = Zl(
    b,
    {
      ...g,
      isFieldSession: !!r,
      targetField: r,
      targetLabel: gt(_)
    },
    Pn.substituteParams
  );
  return p.push({
    id: `im-${p.length}`,
    role: "system",
    content: y,
    isInitial: !0
  }), p;
}
const x1 = "charCreator", E1 = "charCreator_reviseSessions", Kl = () => SillyTavern.libs.localforage, kw = (n) => {
  if (!n)
    return { value: null, recovered: !1 };
  try {
    return { value: JSON.parse(n), recovered: !1 };
  } catch (r) {
    return { value: null, recovered: !0, error: r };
  }
}, C1 = async (n, r, i) => {
  try {
    const l = await r.getItem(n);
    if (l !== null)
      return { value: l, migrated: !1, recovered: !1 };
    const o = kw(i.getItem(n));
    return o.value === null ? (o.recovered && i.removeItem(n), { value: null, migrated: !1, recovered: o.recovered, error: o.error }) : (await r.setItem(n, o.value), i.removeItem(n), { value: o.value, migrated: !0, recovered: o.recovered });
  } catch (l) {
    return { value: null, migrated: !1, recovered: !0, error: l };
  }
}, w1 = async (n, r, i = Kl()) => {
  try {
    return await i.setItem(n, r), { persisted: !0 };
  } catch (l) {
    return { persisted: !1, error: l };
  }
}, Rw = (n = Kl(), r = localStorage) => C1(x1, n, r), jw = (n, r = Kl()) => w1(x1, n, r), zw = (n = Kl(), r = localStorage) => C1(E1, n, r), Lw = (n, r = Kl()) => w1(E1, n, r), Zy = SillyTavern.getContext(), Bw = ({
  target: n,
  onClose: r,
  onApply: i,
  initialState: l,
  contextToSend: o,
  sessionForContext: c
}) => {
  const [h, p] = ne.useState([]), [v, g] = ne.useState(null), [_, b] = ne.useState(!0);
  ne.useEffect(() => {
    let N = !0;
    return zw().then(({ value: C, recovered: O }) => {
      N && (p(Array.isArray(C) ? C : []), O && De("warning", "Some saved revise sessions were invalid and have been reset."));
    }).catch((C) => {
      console.error("Failed to load revise sessions:", C), De("warning", "Saved revise sessions could not be loaded.");
    }).finally(() => {
      N && b(!1);
    }), () => {
      N = !1;
    };
  }, []);
  const y = ne.useMemo(() => h.filter((N) => N.type === n.type && (N.type === "global" || N.targetFieldId === n.fieldId)).sort((N, C) => new Date(C.createdAt).getTime() - new Date(N.createdAt).getTime()), [h, n]), m = (N) => {
    p(N), Lw(N).then((C) => {
      C.persisted || (console.warn("Failed to save revise sessions:", C.error), De("warning", "Revise session history could not be saved. Browser storage may be full."));
    });
  }, f = async () => {
    const C = `Session for ${n.type === "field" ? l.fields[n.fieldId]?.label || l.draftFields[n.fieldId]?.label : "Global"} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`, O = await Zy.Popup.show.input("New Session Name", "", C);
    if (O === null) return;
    const j = O.trim() || C;
    try {
      const R = vt.getSettings();
      if (!R.profileId) {
        De("warning", "Please select a connection profile in the main popup first.");
        return;
      }
      const G = {
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
      }, ee = await Mw(
        l,
        G.targetFieldId,
        G.context.mainContextTemplatePreset,
        o,
        c
      );
      G.messages = ee, g(G);
    } catch (R) {
      console.error("Failed to create session:", R), De("error", `Failed to create session: ${R.message}`);
    }
  }, S = (N) => {
    g(N);
  }, E = async (N) => {
    if (await Zy.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const O = h.filter((j) => j.id !== N);
      m(O);
    }
  }, D = (N) => {
    const C = h.findIndex((j) => j.id === N.id), O = [...h];
    C !== -1 ? O[C] = N : O.push(N), m(O), g(N);
  };
  if (v)
    return /* @__PURE__ */ A.jsx(
      Nw,
      {
        session: v,
        onBack: () => g(null),
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
      /* @__PURE__ */ A.jsx(fe, { className: "danger_button", onClick: () => E(N.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, N.id)) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-actions", children: /* @__PURE__ */ A.jsxs(fe, { onClick: f, className: "menu_button", children: [
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
  return va.compile(n, { noEscape: !0 })({
    character: Uw(r, i),
    // The entry describes this card, so {{char}} is its name. {{user}} is left for ST to resolve when the entry is used.
    char: r.name?.value || "{{char}}",
    user: "{{user}}"
  });
}
function Hw(n, r = []) {
  const i = new Set(n), l = r.filter((o) => o && !i.has(o));
  return [
    ...n.map((o) => ({ value: o, label: o })),
    ...l.map((o) => ({ value: o, label: `${o} (missing)` }))
  ];
}
const Un = SillyTavern.getContext(), oh = () => ({
  selectedCharacterIndexes: or ? [String(or)] : [],
  selectedWorldNames: [],
  fields: On.reduce(
    (n, r) => (n[r] = { value: "", prompt: "", label: sr[r] }, n),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), Iw = {
  name: { label: sr.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: sr.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: sr.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: sr.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: sr.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: sr.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, qw = () => {
  const n = g1(), r = vt.getSettings(), [i, l] = ne.useState(oh()), [o, c] = ne.useState([]), [h, p] = ne.useState(!0), [v, g] = ne.useState("core"), [_, b] = ne.useState([]), [y, m] = ne.useState([]), [f, S] = ne.useState(null), [E, D] = ne.useState(null), [w, N] = ne.useState(!1), [C, O] = ne.useState(null);
  ne.useEffect(() => {
    (async () => {
      p(!0), b(Un.characters), m(Pg);
      const ae = (await Rw()).value ?? {}, re = oh();
      if (ae.fields && (re.fields = { ...re.fields, ...ae.fields }), ae.draftFields && (re.draftFields = ae.draftFields), ae.selectedCharacterIndexes && (re.selectedCharacterIndexes = ae.selectedCharacterIndexes), ae.selectedWorldNames && (re.selectedWorldNames = ae.selectedWorldNames), ae.lastLoadedCharacterId) {
        re.lastLoadedCharacterId = ae.lastLoadedCharacterId;
        const Oe = Un.characters.find((qe) => qe.avatar === ae.lastLoadedCharacterId);
        Oe && S(Oe);
      }
      l(re), p(!1);
    })();
  }, []), ne.useEffect(() => {
    h || jw(i).then((P) => {
      P.persisted || (console.warn("Failed to save Character Creator session:", P.error), De("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [i, h]);
  const j = (P, ae) => {
    vt.getSettings()[P] = ae, vt.saveSettings(), n();
  }, R = (P, ae) => {
    vt.getSettings().contextToSend[P] = ae, vt.saveSettings(), n();
  }, G = ne.useCallback(
    (P, ae, re, Oe) => {
      l((qe) => {
        const ye = Oe ? "draftFields" : "fields", Ae = { ...qe[ye] };
        return Ae[P] || (Ae[P] = { value: "", prompt: "", label: P }), Ae[P][re] = ae, { ...qe, [ye]: Ae };
      });
    },
    []
  ), ee = ne.useMemo(
    () => Object.keys(i.fields).filter((P) => P.startsWith("alternate_greetings_")).sort((P, ae) => parseInt(P.split("_")[2]) - parseInt(ae.split("_")[2])).map((P) => i.fields[P]),
    [i.fields]
  ), K = ne.useCallback((P) => {
    l((ae) => {
      const re = { ...ae.fields };
      return Object.keys(re).forEach((Oe) => {
        Oe.startsWith("alternate_greetings_") && delete re[Oe];
      }), P.forEach((Oe, qe) => {
        const ye = `alternate_greetings_${qe + 1}`;
        re[ye] = { ...Oe, label: `Alternate Greeting ${qe + 1}` };
      }), { ...ae, fields: re };
    });
  }, []), $ = ne.useCallback(
    (P, ae) => {
      G(P, "", "value", ae);
    },
    [G]
  ), te = ne.useCallback(
    async (P) => {
      await Un.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[P].label}"?`
      ) && l((re) => {
        const Oe = { ...re.draftFields };
        return delete Oe[P], { ...re, draftFields: Oe };
      });
    },
    [i.draftFields]
  ), ce = ne.useCallback(async () => {
    const P = await Un.Popup.show.input("Enter Draft Field Name", "");
    if (!P?.trim()) return;
    const ae = h1(P.trim());
    if (!ae) return De("error", "Invalid field name.");
    if (i.draftFields[ae] || On.includes(ae))
      return De("warning", "Field name already exists.");
    l((re) => ({
      ...re,
      draftFields: { ...re.draftFields, [ae]: { value: "", prompt: "", label: P } }
    })), g("draft");
  }, [i.draftFields]), de = (P) => {
    O({ type: "field", fieldId: P }), N(!0);
  }, be = () => {
    O({ type: "global" }), N(!0);
  }, I = (P) => {
    l((ae) => xw(ae, P)), De("success", "Changes from revise session applied."), N(!1);
  }, B = ne.useCallback(
    async (P, ae) => {
      if (!r.profileId) return De("warning", "Please select a connection profile.");
      c((re) => [...re, P]);
      try {
        const re = r.contextToSend.messages, Oe = re.type !== "none" && (or !== void 0 || !!ma), qe = {};
        r.contextToSend.worldInfo && await Promise.all(
          i.selectedWorldNames.filter((He) => Pg.includes(He)).map(async (He) => {
            const kn = await Un.loadWorldInfo(He);
            kn && (qe[He] = S1(kn, { includeDisabled: !0 }));
          })
        );
        const ye = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete ye.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete ye.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete ye.lorebookDefinitions, r.contextToSend.existingFields || delete ye.existingFieldDefinitions, r.contextToSend.persona || delete ye.personaDescription, delete ye.worldInfoCharDefinition;
        const Ae = await B4({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          messageSelection: re,
          continueFrom: ae,
          session: i,
          allCharacters: _,
          entriesGroupByWorldName: qe,
          promptSettings: ye,
          formatDescription: { content: r.prompts.noneFormat.content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (He) => He.enabled && (Oe || He.promptName !== "chatHistory")
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: P
        }), zt = P.startsWith("alternate_greetings_"), Mn = !zt && !On.includes(P);
        if (zt) {
          const He = parseInt(P.split("_")[2]) - 1, kn = [...ee];
          kn[He] && (kn[He].value = Ae), K(kn);
        } else
          G(P, Ae, "value", Mn);
      } catch (re) {
        console.error(re), De("error", l1(re));
      } finally {
        c((re) => re.filter((Oe) => Oe !== P));
      }
    },
    [i, r, _, ee, G, K]
  ), V = ne.useCallback(async () => {
    await Un.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (l(oh()), S(null));
  }, []), oe = ne.useCallback(
    (P) => {
      if (!f) return De("warning", "Please load a character to compare against.");
      let ae, re, Oe;
      typeof P == "number" ? (ae = ee[P]?.value ?? "", re = f.data?.alternate_greetings?.[P] ?? "", Oe = `Alternate Greeting ${P + 1}`) : (ae = i.fields[P]?.value ?? "", re = f[P] ?? f.data?.[P] ?? "", Oe = sr[P]), D({ original: re, current: ae, fieldName: Oe });
    },
    [f, i.fields, ee]
  ), M = ne.useCallback(
    async (P) => {
      const ae = _[parseInt(P)];
      if (!ae || On.some((ye) => i.fields[ye].value.trim() !== "") && !await Un.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const Oe = { ...i.fields };
      On.forEach((ye) => {
        Oe[ye] = { value: ae[ye] ?? ae.data?.[ye] ?? "", prompt: "", label: sr[ye] };
      });
      const qe = (ae.data?.alternate_greetings ?? []).map((ye) => ({ value: ye, prompt: "" }));
      S(ae), l((ye) => ({ ...ye, fields: Oe, lastLoadedCharacterId: ae.avatar })), K(qe);
    },
    [_, i.fields, K]
  ), X = ne.useCallback(async () => {
    if (ma) {
      De("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (or === void 0) {
      De("warning", "No character chat is currently open.");
      return;
    }
    await M(String(or));
  }, [M]), se = () => ee.map((P) => P.value).filter((P) => P.trim() !== ""), le = async () => {
    if (!i.fields.name.value) return De("warning", "Please provide a character name.");
    if (!await Un.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const ae = {
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: se(),
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
      await lb(ae, !0);
    } catch (re) {
      De("error", `Failed to create character: ${re.message}`);
    }
  }, pe = async () => {
    if (!f) return De("warning", "Please load a character to override.");
    if (!await Un.Popup.show.confirm(
      "Override Character",
      `Override "${f.name}"? This cannot be undone.`
    )) return;
    const ae = {
      ...f,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: se(),
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      }
    };
    try {
      await sb(ae, !0), De("success", `Character "${ae.name}" updated!`);
    } catch (re) {
      De("error", `Failed to override character: ${re.message}`);
    }
  }, ze = () => {
    const P = JSON.stringify({ draftFields: i.draftFields, version: Xh }, null, 2), ae = new Blob([P], { type: "application/json" }), re = document.createElement("a");
    re.href = URL.createObjectURL(ae), re.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, re.click(), URL.revokeObjectURL(re.href);
  }, Y = () => {
    const P = document.createElement("input");
    P.type = "file", P.accept = ".json", P.onchange = async () => {
      const ae = P.files?.[0];
      if (ae)
        try {
          const re = await ae.text(), Oe = JSON.parse(re);
          if (!Oe.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await Un.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (l((ye) => ({ ...ye, draftFields: Oe.draftFields })), De("success", "Draft fields imported."));
        } catch (re) {
          De("error", `Import failed: ${re.message}`);
        }
    }, P.click();
  }, ge = ne.useMemo(
    () => _.map((P, ae) => ({ value: String(ae), label: P.name })),
    [_]
  ), we = ne.useMemo(
    () => y.map((P) => ({ value: P, label: P })),
    [y]
  ), Ze = ne.useMemo(
    () => Hw(y, i.selectedWorldNames),
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
              onChange: (P) => j("profileId", P?.id ?? "")
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
                items: ge,
                value: i.selectedCharacterIndexes,
                onChange: (P) => l((ae) => ({ ...ae, selectedCharacterIndexes: P })),
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
                onChange: (P) => l((ae) => ({ ...ae, selectedWorldNames: P })),
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
              wh,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: Ve,
                value: r.mainContextTemplatePreset,
                onChange: (P) => j("mainContextTemplatePreset", P ?? "default")
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
                onChange: (P) => j("maxContextType", P.target.value),
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
              onChange: (P) => j("maxContextValue", parseInt(P.target.value) || 16384)
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
                onChange: (P) => j("maxResponseToken", parseInt(P.target.value) || 1024)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Additional Instructions" }),
          /* @__PURE__ */ A.jsx(
            wh,
            {
              label: "Prompt Preset",
              items: $e,
              value: r.promptPreset,
              onChange: (P) => j("promptPreset", P ?? "default"),
              onItemsChange: (P) => j(
                "promptPresets",
                P.reduce(
                  (ae, re) => ({ ...ae, [re.value]: r.promptPresets[re.value] ?? { content: "" } }),
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
              onChange: (P) => j("promptPresets", {
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
            fe,
            {
              onClick: be,
              title: "Open global revision sessions to edit multiple fields at once",
              children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" })
            }
          ),
          /* @__PURE__ */ A.jsx(fe, { onClick: le, children: "Save as New" }),
          /* @__PURE__ */ A.jsx(fe, { onClick: pe, disabled: !f, children: "Override Char" }),
          r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ A.jsx(
            Vo,
            {
              items: we,
              placeholder: "Save as WI Entry",
              closeOnSelect: !0,
              value: [],
              onChange: (P) => {
              },
              onBeforeSelection: async (P, ae) => {
                if (!i.fields.name.value)
                  return De("warning", "Please enter a name first."), !1;
                const re = ae[0], Oe = Pw(
                  r.prompts.worldInfoCharDefinition.content,
                  i.fields,
                  ee
                ), qe = {
                  uid: -1,
                  key: [i.fields.name.value],
                  content: Oe,
                  comment: i.fields.name.value,
                  disable: !1,
                  keysecondary: []
                };
                try {
                  await ES({ entry: qe, selectedWorldName: re, operation: "add" }), De("success", `Entry added to ${re}.`);
                } catch (ye) {
                  De("error", `Failed to add WI Entry: ${ye.message}`);
                }
                return !1;
              }
            }
          ),
          /* @__PURE__ */ A.jsxs(fe, { onClick: V, children: [
            /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-left", style: { marginRight: "10px" } }),
            "Reset Fields"
          ] }),
          /* @__PURE__ */ A.jsx(
            fe,
            {
              onClick: X,
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
              onChange: (P) => M(P[0]),
              multiple: !1,
              enableSearch: !0,
              placeholder: "Load Character..."
            }
          ) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ A.jsx(
            fe,
            {
              onClick: () => g("core"),
              className: `menu_button tab-button ${v === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ A.jsx(
            fe,
            {
              onClick: () => g("draft"),
              className: `menu_button tab-button ${v === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ A.jsx("div", { className: "right-aligned", children: v === "draft" && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
            /* @__PURE__ */ A.jsxs(fe, { onClick: ce, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ A.jsx(fe, { onClick: ze, children: "Export" }),
            /* @__PURE__ */ A.jsx(fe, { onClick: Y, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-content-area", children: [
          v === "core" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Core Character Fields" }),
            On.map((P) => {
              const ae = Iw[P];
              return ae ? /* @__PURE__ */ A.jsx(
                By,
                {
                  fieldId: P,
                  label: ae.label,
                  value: i.fields[P]?.value ?? "",
                  prompt: i.fields[P]?.prompt ?? "",
                  large: ae.large,
                  rows: ae.rows,
                  promptEnabled: ae.promptEnabled,
                  isGenerating: o.includes(P),
                  onValueChange: (re, Oe) => G(re, Oe, "value", !1),
                  onPromptChange: (re, Oe) => G(re, Oe, "prompt", !1),
                  onGenerate: B,
                  onContinue: (re) => B(re, i.fields[re].value),
                  onClear: (re) => $(re, !1),
                  onCompare: oe,
                  onOpenReviseSessions: de
                },
                P
              ) : null;
            }),
            /* @__PURE__ */ A.jsx(
              tw,
              {
                greetings: ee,
                onGreetingsChange: K,
                isGenerating: o.some((P) => P.startsWith("alternate_greetings_")),
                onGenerate: (P) => B(`alternate_greetings_${P + 1}`),
                onContinue: (P) => B(`alternate_greetings_${P + 1}`, ee[P].value),
                onCompare: oe
              }
            )
          ] }),
          v === "draft" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Draft Fields" }),
            Object.entries(i.draftFields).map(([P, ae]) => /* @__PURE__ */ A.jsx(
              By,
              {
                fieldId: P,
                label: ae.label,
                value: ae.value,
                prompt: ae.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: o.includes(P),
                onValueChange: (re, Oe) => G(re, Oe, "value", !0),
                onPromptChange: (re, Oe) => G(re, Oe, "prompt", !0),
                onGenerate: B,
                onContinue: (re) => B(re, i.draftFields[re].value),
                onClear: (re) => $(re, !0),
                onDelete: te
              },
              P
            ))
          ] })
        ] })
      ] })
    ] }),
    E && /* @__PURE__ */ A.jsx(
      _i,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          _w,
          {
            originalContent: E.original,
            newContent: E.current,
            fieldName: E.fieldName
          }
        ),
        onComplete: () => D(null),
        options: { wide: !0 }
      }
    ),
    w && C && /* @__PURE__ */ A.jsx(
      _i,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          Bw,
          {
            target: C,
            onClose: () => N(!1),
            onApply: I,
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
  const [n, r] = ne.useState(!1), i = () => r(!0), l = () => r(!1);
  return window.openCharacterCreatorPopup = i, n ? /* @__PURE__ */ A.jsx(
    _i,
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
}, A1 = SillyTavern.getContext();
async function Gw() {
  const n = await A1.renderExtensionTemplateAsync(
    `third-party/${pa}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", n);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), Wg.createRoot(r).render(
    /* @__PURE__ */ A.jsx(tu.StrictMode, { children: /* @__PURE__ */ A.jsx(W4, {}) })
  ));
  const l = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', o = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], c = document.createElement("div");
  document.body.appendChild(c), Wg.createRoot(c).render(
    /* @__PURE__ */ A.jsx(tu.StrictMode, { children: /* @__PURE__ */ A.jsx(Zw, {}) })
  ), o.forEach((p) => {
    if (!p) return;
    const v = document.createElement("div");
    v.innerHTML = l.trim();
    const g = v.firstChild;
    g && (p.prepend(g), g.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function Fw() {
  return !!A1.ConnectionManagerRequestService;
}
Fw() ? G4().then(() => {
  Gw();
}) : De("error", `[${pa}] Make sure ST is updated.`);
export {
  Gw as init
};
