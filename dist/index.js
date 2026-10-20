import "../../../../power-user.js";
import { this_chid as sr, name1 as Bg } from "../../../../../script.js";
import { createWorldInfoEntry as P_, world_names as Ug } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import "../../../../instruct-mode.js";
import "../../../../chats.js";
import "../../../../openai.js";
import "../../../../authors-note.js";
import { selected_group as pa } from "../../../../group-chats.js";
import { getRegexedString as H_, regex_placement as Pg } from "../../../regex/engine.js";
import { removeFromArray as Hg, runAfterAnimation as I_ } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as li, fixToastrForDialogs as Rf } from "../../../../popup.js";
import Ig from "../../../../../lib/dialog-polyfill.esm.js";
function Iy(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var jf = { exports: {} }, yl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qg;
function q_() {
  if (qg) return yl;
  qg = 1;
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
  return yl.Fragment = r, yl.jsx = i, yl.jsxs = i, yl;
}
var Zg;
function Z_() {
  return Zg || (Zg = 1, jf.exports = q_()), jf.exports;
}
var A = Z_(), zf = { exports: {} }, Oe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gg;
function G_() {
  if (Gg) return Oe;
  Gg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), b = Symbol.iterator;
  function y(j) {
    return j === null || typeof j != "object" ? null : (j = b && j[b] || j["@@iterator"], typeof j == "function" ? j : null);
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
  function C(j, J, le) {
    this.props = j, this.context = J, this.refs = S, this.updater = le || p;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(j, J) {
    if (typeof j != "object" && typeof j != "function" && j != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, j, J, "setState");
  }, C.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function T() {
  }
  T.prototype = C.prototype;
  function w(j, J, le) {
    this.props = j, this.context = J, this.refs = S, this.updater = le || p;
  }
  var N = w.prototype = new T();
  N.constructor = w, f(N, C.prototype), N.isPureReactComponent = !0;
  var x = Array.isArray, D = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function R(j, J, le, ie, fe, je) {
    return le = je.ref, {
      $$typeof: n,
      type: j,
      key: J,
      ref: le !== void 0 ? le : null,
      props: je
    };
  }
  function q(j, J) {
    return R(
      j.type,
      J,
      void 0,
      void 0,
      void 0,
      j.props
    );
  }
  function Y(j) {
    return typeof j == "object" && j !== null && j.$$typeof === n;
  }
  function G(j) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(le) {
      return J[le];
    });
  }
  var X = /\/+/g;
  function W(j, J) {
    return typeof j == "object" && j !== null && j.key != null ? G("" + j.key) : J.toString(36);
  }
  function oe() {
  }
  function he(j) {
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
  function Ce(j, J, le, ie, fe) {
    var je = typeof j;
    (je === "undefined" || je === "boolean") && (j = null);
    var V = !1;
    if (j === null) V = !0;
    else
      switch (je) {
        case "bigint":
        case "string":
        case "number":
          V = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case n:
            case r:
              V = !0;
              break;
            case _:
              return V = j._init, Ce(
                V(j._payload),
                J,
                le,
                ie,
                fe
              );
          }
      }
    if (V)
      return fe = fe(j), V = ie === "" ? "." + W(j, 0) : ie, x(fe) ? (le = "", V != null && (le = V.replace(X, "$&/") + "/"), Ce(fe, J, le, "", function(Ze) {
        return Ze;
      })) : fe != null && (Y(fe) && (fe = q(
        fe,
        le + (fe.key == null || j && j.key === fe.key ? "" : ("" + fe.key).replace(
          X,
          "$&/"
        ) + "/") + V
      )), J.push(fe)), 1;
    V = 0;
    var me = ie === "" ? "." : ie + ":";
    if (x(j))
      for (var we = 0; we < j.length; we++)
        ie = j[we], je = me + W(ie, we), V += Ce(
          ie,
          J,
          le,
          je,
          fe
        );
    else if (we = y(j), typeof we == "function")
      for (j = we.call(j), we = 0; !(ie = j.next()).done; )
        ie = ie.value, je = me + W(ie, we++), V += Ce(
          ie,
          J,
          le,
          je,
          fe
        );
    else if (je === "object") {
      if (typeof j.then == "function")
        return Ce(
          he(j),
          J,
          le,
          ie,
          fe
        );
      throw J = String(j), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return V;
  }
  function H(j, J, le) {
    if (j == null) return j;
    var ie = [], fe = 0;
    return Ce(j, ie, "", "", function(je) {
      return J.call(le, je, fe++);
    }), ie;
  }
  function te(j) {
    if (j._status === -1) {
      var J = j._result;
      J = J(), J.then(
        function(le) {
          (j._status === 0 || j._status === -1) && (j._status = 1, j._result = le);
        },
        function(le) {
          (j._status === 0 || j._status === -1) && (j._status = 2, j._result = le);
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
  return Oe.Children = {
    map: H,
    forEach: function(j, J, le) {
      H(
        j,
        function() {
          J.apply(this, arguments);
        },
        le
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
  }, Oe.Component = C, Oe.Fragment = i, Oe.Profiler = o, Oe.PureComponent = w, Oe.StrictMode = l, Oe.Suspense = g, Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D, Oe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(j) {
      return D.H.useMemoCache(j);
    }
  }, Oe.cache = function(j) {
    return function() {
      return j.apply(null, arguments);
    };
  }, Oe.cloneElement = function(j, J, le) {
    if (j == null)
      throw Error(
        "The argument must be a React element, but you passed " + j + "."
      );
    var ie = f({}, j.props), fe = j.key, je = void 0;
    if (J != null)
      for (V in J.ref !== void 0 && (je = void 0), J.key !== void 0 && (fe = "" + J.key), J)
        !M.call(J, V) || V === "key" || V === "__self" || V === "__source" || V === "ref" && J.ref === void 0 || (ie[V] = J[V]);
    var V = arguments.length - 2;
    if (V === 1) ie.children = le;
    else if (1 < V) {
      for (var me = Array(V), we = 0; we < V; we++)
        me[we] = arguments[we + 2];
      ie.children = me;
    }
    return R(j.type, fe, void 0, void 0, je, ie);
  }, Oe.createContext = function(j) {
    return j = {
      $$typeof: h,
      _currentValue: j,
      _currentValue2: j,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, j.Provider = j, j.Consumer = {
      $$typeof: c,
      _context: j
    }, j;
  }, Oe.createElement = function(j, J, le) {
    var ie, fe = {}, je = null;
    if (J != null)
      for (ie in J.key !== void 0 && (je = "" + J.key), J)
        M.call(J, ie) && ie !== "key" && ie !== "__self" && ie !== "__source" && (fe[ie] = J[ie]);
    var V = arguments.length - 2;
    if (V === 1) fe.children = le;
    else if (1 < V) {
      for (var me = Array(V), we = 0; we < V; we++)
        me[we] = arguments[we + 2];
      fe.children = me;
    }
    if (j && j.defaultProps)
      for (ie in V = j.defaultProps, V)
        fe[ie] === void 0 && (fe[ie] = V[ie]);
    return R(j, je, void 0, void 0, null, fe);
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(j) {
    return { $$typeof: m, render: j };
  }, Oe.isValidElement = Y, Oe.lazy = function(j) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: j },
      _init: te
    };
  }, Oe.memo = function(j, J) {
    return {
      $$typeof: v,
      type: j,
      compare: J === void 0 ? null : J
    };
  }, Oe.startTransition = function(j) {
    var J = D.T, le = {};
    D.T = le;
    try {
      var ie = j(), fe = D.S;
      fe !== null && fe(le, ie), typeof ie == "object" && ie !== null && typeof ie.then == "function" && ie.then(Le, ue);
    } catch (je) {
      ue(je);
    } finally {
      D.T = J;
    }
  }, Oe.unstable_useCacheRefresh = function() {
    return D.H.useCacheRefresh();
  }, Oe.use = function(j) {
    return D.H.use(j);
  }, Oe.useActionState = function(j, J, le) {
    return D.H.useActionState(j, J, le);
  }, Oe.useCallback = function(j, J) {
    return D.H.useCallback(j, J);
  }, Oe.useContext = function(j) {
    return D.H.useContext(j);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(j, J) {
    return D.H.useDeferredValue(j, J);
  }, Oe.useEffect = function(j, J, le) {
    var ie = D.H;
    if (typeof le == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return ie.useEffect(j, J);
  }, Oe.useId = function() {
    return D.H.useId();
  }, Oe.useImperativeHandle = function(j, J, le) {
    return D.H.useImperativeHandle(j, J, le);
  }, Oe.useInsertionEffect = function(j, J) {
    return D.H.useInsertionEffect(j, J);
  }, Oe.useLayoutEffect = function(j, J) {
    return D.H.useLayoutEffect(j, J);
  }, Oe.useMemo = function(j, J) {
    return D.H.useMemo(j, J);
  }, Oe.useOptimistic = function(j, J) {
    return D.H.useOptimistic(j, J);
  }, Oe.useReducer = function(j, J, le) {
    return D.H.useReducer(j, J, le);
  }, Oe.useRef = function(j) {
    return D.H.useRef(j);
  }, Oe.useState = function(j) {
    return D.H.useState(j);
  }, Oe.useSyncExternalStore = function(j, J, le) {
    return D.H.useSyncExternalStore(
      j,
      J,
      le
    );
  }, Oe.useTransition = function() {
    return D.H.useTransition();
  }, Oe.version = "19.1.1", Oe;
}
var Fg;
function Oh() {
  return Fg || (Fg = 1, zf.exports = G_()), zf.exports;
}
var ee = Oh();
const Jo = /* @__PURE__ */ Iy(ee);
var Lf = { exports: {} }, _l = {}, Bf = { exports: {} }, Uf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vg;
function F_() {
  return Vg || (Vg = 1, (function(n) {
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
    function i(H) {
      return H.length === 0 ? null : H[0];
    }
    function l(H) {
      if (H.length === 0) return null;
      var te = H[0], ue = H.pop();
      if (ue !== te) {
        H[0] = ue;
        e: for (var Le = 0, j = H.length, J = j >>> 1; Le < J; ) {
          var le = 2 * (Le + 1) - 1, ie = H[le], fe = le + 1, je = H[fe];
          if (0 > o(ie, ue))
            fe < j && 0 > o(je, ie) ? (H[Le] = je, H[fe] = ue, Le = fe) : (H[Le] = ie, H[le] = ue, Le = le);
          else if (fe < j && 0 > o(je, ue))
            H[Le] = je, H[fe] = ue, Le = fe;
          else break e;
        }
      }
      return te;
    }
    function o(H, te) {
      var ue = H.sortIndex - te.sortIndex;
      return ue !== 0 ? ue : H.id - te.id;
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
    var g = [], v = [], _ = 1, b = null, y = 3, p = !1, f = !1, S = !1, C = !1, T = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    function x(H) {
      for (var te = i(v); te !== null; ) {
        if (te.callback === null) l(v);
        else if (te.startTime <= H)
          l(v), te.sortIndex = te.expirationTime, r(g, te);
        else break;
        te = i(v);
      }
    }
    function D(H) {
      if (S = !1, x(H), !f)
        if (i(g) !== null)
          f = !0, M || (M = !0, W());
        else {
          var te = i(v);
          te !== null && Ce(D, te.startTime - H);
        }
    }
    var M = !1, R = -1, q = 5, Y = -1;
    function G() {
      return C ? !0 : !(n.unstable_now() - Y < q);
    }
    function X() {
      if (C = !1, M) {
        var H = n.unstable_now();
        Y = H;
        var te = !0;
        try {
          e: {
            f = !1, S && (S = !1, w(R), R = -1), p = !0;
            var ue = y;
            try {
              t: {
                for (x(H), b = i(g); b !== null && !(b.expirationTime > H && G()); ) {
                  var Le = b.callback;
                  if (typeof Le == "function") {
                    b.callback = null, y = b.priorityLevel;
                    var j = Le(
                      b.expirationTime <= H
                    );
                    if (H = n.unstable_now(), typeof j == "function") {
                      b.callback = j, x(H), te = !0;
                      break t;
                    }
                    b === i(g) && l(g), x(H);
                  } else l(g);
                  b = i(g);
                }
                if (b !== null) te = !0;
                else {
                  var J = i(v);
                  J !== null && Ce(
                    D,
                    J.startTime - H
                  ), te = !1;
                }
              }
              break e;
            } finally {
              b = null, y = ue, p = !1;
            }
            te = void 0;
          }
        } finally {
          te ? W() : M = !1;
        }
      }
    }
    var W;
    if (typeof N == "function")
      W = function() {
        N(X);
      };
    else if (typeof MessageChannel < "u") {
      var oe = new MessageChannel(), he = oe.port2;
      oe.port1.onmessage = X, W = function() {
        he.postMessage(null);
      };
    } else
      W = function() {
        T(X, 0);
      };
    function Ce(H, te) {
      R = T(function() {
        H(n.unstable_now());
      }, te);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, n.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : q = 0 < H ? Math.floor(1e3 / H) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return y;
    }, n.unstable_next = function(H) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = y;
      }
      var ue = y;
      y = te;
      try {
        return H();
      } finally {
        y = ue;
      }
    }, n.unstable_requestPaint = function() {
      C = !0;
    }, n.unstable_runWithPriority = function(H, te) {
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
        return te();
      } finally {
        y = ue;
      }
    }, n.unstable_scheduleCallback = function(H, te, ue) {
      var Le = n.unstable_now();
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
        id: _++,
        callback: te,
        priorityLevel: H,
        startTime: ue,
        expirationTime: j,
        sortIndex: -1
      }, ue > Le ? (H.sortIndex = ue, r(v, H), i(g) === null && H === i(v) && (S ? (w(R), R = -1) : S = !0, Ce(D, ue - Le))) : (H.sortIndex = j, r(g, H), f || p || (f = !0, M || (M = !0, W()))), H;
    }, n.unstable_shouldYield = G, n.unstable_wrapCallback = function(H) {
      var te = y;
      return function() {
        var ue = y;
        y = te;
        try {
          return H.apply(this, arguments);
        } finally {
          y = ue;
        }
      };
    };
  })(Uf)), Uf;
}
var Yg;
function V_() {
  return Yg || (Yg = 1, Bf.exports = F_()), Bf.exports;
}
var Pf = { exports: {} }, Rt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xg;
function Y_() {
  if (Xg) return Rt;
  Xg = 1;
  var n = Oh();
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
var Qg;
function qy() {
  if (Qg) return Pf.exports;
  Qg = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Pf.exports = Y_(), Pf.exports;
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
var $g;
function X_() {
  if ($g) return _l;
  $g = 1;
  var n = V_(), r = Oh(), i = qy();
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
        for (var E = !1, O = u.child; O; ) {
          if (O === a) {
            E = !0, a = u, s = d;
            break;
          }
          if (O === s) {
            E = !0, s = u, a = d;
            break;
          }
          O = O.sibling;
        }
        if (!E) {
          for (O = d.child; O; ) {
            if (O === a) {
              E = !0, a = d, s = u;
              break;
            }
            if (O === s) {
              E = !0, s = d, a = u;
              break;
            }
            O = O.sibling;
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
  var _ = Object.assign, b = Symbol.for("react.element"), y = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), N = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), G = Symbol.for("react.memo_cache_sentinel"), X = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object" ? null : (e = X && e[X] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var oe = Symbol.for("react.client.reference");
  function he(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === oe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case f:
        return "Fragment";
      case C:
        return "Profiler";
      case S:
        return "StrictMode";
      case D:
        return "Suspense";
      case M:
        return "SuspenseList";
      case Y:
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
        case x:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case R:
          return t = e.displayName || null, t !== null ? t : he(e.type) || "Memo";
        case q:
          t = e._payload, e = e._init;
          try {
            return he(e(t));
          } catch {
          }
      }
    return null;
  }
  var Ce = Array.isArray, H = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Le = [], j = -1;
  function J(e) {
    return { current: e };
  }
  function le(e) {
    0 > j || (e.current = Le[j], Le[j] = null, j--);
  }
  function ie(e, t) {
    j++, Le[j] = e.current, e.current = t;
  }
  var fe = J(null), je = J(null), V = J(null), me = J(null);
  function we(e, t) {
    switch (ie(V, t), ie(je, e), ie(fe, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? fg(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = fg(t), e = hg(t, e);
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
    le(fe), ie(fe, e);
  }
  function Ze() {
    le(fe), le(je), le(V);
  }
  function $e(e) {
    e.memoizedState !== null && ie(me, e);
    var t = fe.current, a = hg(t, e.type);
    t !== a && (ie(je, e), ie(fe, a));
  }
  function Ve(e) {
    je.current === e && (le(fe), le(je)), me.current === e && (le(me), dl._currentValue = ue);
  }
  var U = Object.prototype.hasOwnProperty, re = n.unstable_scheduleCallback, ne = n.unstable_cancelCallback, Te = n.unstable_shouldYield, qe = n.unstable_requestPaint, ve = n.unstable_now, Ae = n.unstable_getCurrentPriorityLevel, zt = n.unstable_ImmediatePriority, Mn = n.unstable_UserBlockingPriority, He = n.unstable_NormalPriority, kn = n.unstable_LowPriority, Xl = n.unstable_IdlePriority, S1 = n.log, x1 = n.unstable_setDisableYieldValue, Si = null, Xt = null;
  function hr(e) {
    if (typeof S1 == "function" && x1(e), Xt && typeof Xt.setStrictMode == "function")
      try {
        Xt.setStrictMode(Si, e);
      } catch {
      }
  }
  var Qt = Math.clz32 ? Math.clz32 : w1, E1 = Math.log, C1 = Math.LN2;
  function w1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (E1(e) / C1 | 0) | 0;
  }
  var Ql = 256, $l = 4194304;
  function Gr(e) {
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
  function Kl(e, t, a) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var u = 0, d = e.suspendedLanes, E = e.pingedLanes;
    e = e.warmLanes;
    var O = s & 134217727;
    return O !== 0 ? (s = O & ~d, s !== 0 ? u = Gr(s) : (E &= O, E !== 0 ? u = Gr(E) : a || (a = O & ~e, a !== 0 && (u = Gr(a))))) : (O = s & ~d, O !== 0 ? u = Gr(O) : E !== 0 ? u = Gr(E) : a || (a = s & ~e, a !== 0 && (u = Gr(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & d) === 0 && (d = u & -u, a = t & -t, d >= a || d === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function xi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function A1(e, t) {
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
  function Xh() {
    var e = Ql;
    return Ql <<= 1, (Ql & 4194048) === 0 && (Ql = 256), e;
  }
  function Qh() {
    var e = $l;
    return $l <<= 1, ($l & 62914560) === 0 && ($l = 4194304), e;
  }
  function Su(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ei(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function D1(e, t, a, s, u, d) {
    var E = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var O = e.entanglements, k = e.expirationTimes, P = e.hiddenUpdates;
    for (a = E & ~a; 0 < a; ) {
      var F = 31 - Qt(a), $ = 1 << F;
      O[F] = 0, k[F] = -1;
      var I = P[F];
      if (I !== null)
        for (P[F] = null, F = 0; F < I.length; F++) {
          var Z = I[F];
          Z !== null && (Z.lane &= -536870913);
        }
      a &= ~$;
    }
    s !== 0 && $h(e, s, 0), d !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(E & ~t));
  }
  function $h(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var s = 31 - Qt(t);
    e.entangledLanes |= t, e.entanglements[s] = e.entanglements[s] | 1073741824 | a & 4194090;
  }
  function Kh(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var s = 31 - Qt(a), u = 1 << s;
      u & t | e[s] & t && (e[s] |= t), a &= ~u;
    }
  }
  function xu(e) {
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
  function Eu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Jh() {
    var e = te.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Mg(e.type));
  }
  function T1(e, t) {
    var a = te.p;
    try {
      return te.p = e, t();
    } finally {
      te.p = a;
    }
  }
  var dr = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + dr, Ut = "__reactProps$" + dr, Sa = "__reactContainer$" + dr, Cu = "__reactEvents$" + dr, O1 = "__reactListeners$" + dr, N1 = "__reactHandles$" + dr, Wh = "__reactResources$" + dr, Ci = "__reactMarker$" + dr;
  function wu(e) {
    delete e[Mt], delete e[Ut], delete e[Cu], delete e[O1], delete e[N1];
  }
  function xa(e) {
    var t = e[Mt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Sa] || a[Mt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = gg(e); e !== null; ) {
            if (a = e[Mt]) return a;
            e = gg(e);
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
  function wi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Ca(e) {
    var t = e[Wh];
    return t || (t = e[Wh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Et(e) {
    e[Ci] = !0;
  }
  var ed = /* @__PURE__ */ new Set(), td = {};
  function Fr(e, t) {
    wa(e, t), wa(e + "Capture", t);
  }
  function wa(e, t) {
    for (td[e] = t, e = 0; e < t.length; e++)
      ed.add(t[e]);
  }
  var M1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), nd = {}, rd = {};
  function k1(e) {
    return U.call(rd, e) ? !0 : U.call(nd, e) ? !1 : M1.test(e) ? rd[e] = !0 : (nd[e] = !0, !1);
  }
  function Jl(e, t, a) {
    if (k1(t))
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
  function Wl(e, t, a) {
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
  var Au, ad;
  function Aa(e) {
    if (Au === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Au = t && t[1] || "", ad = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Au + e + ad;
  }
  var Du = !1;
  function Tu(e, t) {
    if (!e || Du) return "";
    Du = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (Z) {
                  var I = Z;
                }
                Reflect.construct(e, [], $);
              } else {
                try {
                  $.call();
                } catch (Z) {
                  I = Z;
                }
                e.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                I = Z;
              }
              ($ = e()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (Z) {
            if (Z && I && typeof Z.stack == "string")
              return [Z.stack, I.stack];
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
      var d = s.DetermineComponentFrameRoot(), E = d[0], O = d[1];
      if (E && O) {
        var k = E.split(`
`), P = O.split(`
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
                  var F = `
` + k[s].replace(" at new ", " at ");
                  return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), F;
                }
              while (1 <= s && 0 <= u);
            break;
          }
      }
    } finally {
      Du = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Aa(a) : "";
  }
  function R1(e) {
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
        return Tu(e.type, !1);
      case 11:
        return Tu(e.type.render, !1);
      case 1:
        return Tu(e.type, !0);
      case 31:
        return Aa("Activity");
      default:
        return "";
    }
  }
  function id(e) {
    try {
      var t = "";
      do
        t += R1(e), e = e.return;
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
  function j1(e) {
    var t = ld(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
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
  function es(e) {
    e._valueTracker || (e._valueTracker = j1(e));
  }
  function sd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), s = "";
    return e && (s = ld(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== a ? (t.setValue(e), !0) : !1;
  }
  function ts(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var z1 = /[\n"\\]/g;
  function cn(e) {
    return e.replace(
      z1,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ou(e, t, a, s, u, d, E, O) {
    e.name = "", E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean" ? e.type = E : e.removeAttribute("type"), t != null ? E === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + un(t)) : e.value !== "" + un(t) && (e.value = "" + un(t)) : E !== "submit" && E !== "reset" || e.removeAttribute("value"), t != null ? Nu(e, E, un(t)) : a != null ? Nu(e, E, un(a)) : s != null && e.removeAttribute("value"), u == null && d != null && (e.defaultChecked = !!d), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), O != null && typeof O != "function" && typeof O != "symbol" && typeof O != "boolean" ? e.name = "" + un(O) : e.removeAttribute("name");
  }
  function od(e, t, a, s, u, d, E, O) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), t != null || a != null) {
      if (!(d !== "submit" && d !== "reset" || t != null))
        return;
      a = a != null ? "" + un(a) : "", t = t != null ? "" + un(t) : a, O || t === e.value || (e.value = t), e.defaultValue = t;
    }
    s = s ?? u, s = typeof s != "function" && typeof s != "symbol" && !!s, e.checked = O ? e.checked : !!s, e.defaultChecked = !!s, E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean" && (e.name = E);
  }
  function Nu(e, t, a) {
    t === "number" && ts(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
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
  function ud(e, t, a) {
    if (t != null && (t = "" + un(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + un(a) : "";
  }
  function cd(e, t, a, s) {
    if (t == null) {
      if (s != null) {
        if (a != null) throw Error(l(92));
        if (Ce(s)) {
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
  var L1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function fd(e, t, a) {
    var s = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? s ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : s ? e.setProperty(t, a) : typeof a != "number" || a === 0 || L1.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function hd(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(l(62));
    if (e = e.style, a != null) {
      for (var s in a)
        !a.hasOwnProperty(s) || t != null && t.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
      for (var u in t)
        s = t[u], t.hasOwnProperty(u) && a[u] !== s && fd(e, u, s);
    } else
      for (var d in t)
        t.hasOwnProperty(d) && fd(e, d, t[d]);
  }
  function Mu(e) {
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
  var B1 = /* @__PURE__ */ new Map([
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
  ]), U1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ns(e) {
    return U1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var ku = null;
  function Ru(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Oa = null, Na = null;
  function dd(e) {
    var t = Ea(e);
    if (t && (e = t.stateNode)) {
      var a = e[Ut] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Ou(
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
                Ou(
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
              s = a[t], s.form === e.form && sd(s);
          }
          break e;
        case "textarea":
          ud(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Da(e, !!a.multiple, t, !1);
      }
    }
  }
  var ju = !1;
  function pd(e, t, a) {
    if (ju) return e(t, a);
    ju = !0;
    try {
      var s = e(t);
      return s;
    } finally {
      if (ju = !1, (Oa !== null || Na !== null) && (Is(), Oa && (t = Oa, e = Na, Na = Oa = null, dd(t), e)))
        for (t = 0; t < e.length; t++) dd(e[t]);
    }
  }
  function Ai(e, t) {
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
  var Gn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), zu = !1;
  if (Gn)
    try {
      var Di = {};
      Object.defineProperty(Di, "passive", {
        get: function() {
          zu = !0;
        }
      }), window.addEventListener("test", Di, Di), window.removeEventListener("test", Di, Di);
    } catch {
      zu = !1;
    }
  var pr = null, Lu = null, rs = null;
  function md() {
    if (rs) return rs;
    var e, t = Lu, a = t.length, s, u = "value" in pr ? pr.value : pr.textContent, d = u.length;
    for (e = 0; e < a && t[e] === u[e]; e++) ;
    var E = a - e;
    for (s = 1; s <= E && t[a - s] === u[d - s]; s++) ;
    return rs = u.slice(e, 1 < s ? 1 - s : void 0);
  }
  function as(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function is() {
    return !0;
  }
  function gd() {
    return !1;
  }
  function Pt(e) {
    function t(a, s, u, d, E) {
      this._reactName = a, this._targetInst = u, this.type = s, this.nativeEvent = d, this.target = E, this.currentTarget = null;
      for (var O in e)
        e.hasOwnProperty(O) && (a = e[O], this[O] = a ? a(d) : d[O]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? is : gd, this.isPropagationStopped = gd, this;
    }
    return _(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = is);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = is);
      },
      persist: function() {
      },
      isPersistent: is
    }), t;
  }
  var Vr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ls = Pt(Vr), Ti = _({}, Vr, { view: 0, detail: 0 }), P1 = Pt(Ti), Bu, Uu, Oi, ss = _({}, Ti, {
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
    getModifierState: Hu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Oi && (Oi && e.type === "mousemove" ? (Bu = e.screenX - Oi.screenX, Uu = e.screenY - Oi.screenY) : Uu = Bu = 0, Oi = e), Bu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Uu;
    }
  }), vd = Pt(ss), H1 = _({}, ss, { dataTransfer: 0 }), I1 = Pt(H1), q1 = _({}, Ti, { relatedTarget: 0 }), Pu = Pt(q1), Z1 = _({}, Vr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), G1 = Pt(Z1), F1 = _({}, Vr, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), V1 = Pt(F1), Y1 = _({}, Vr, { data: 0 }), yd = Pt(Y1), X1 = {
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
  }, Q1 = {
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
  }, $1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function K1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $1[e]) ? !!t[e] : !1;
  }
  function Hu() {
    return K1;
  }
  var J1 = _({}, Ti, {
    key: function(e) {
      if (e.key) {
        var t = X1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = as(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Q1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Hu,
    charCode: function(e) {
      return e.type === "keypress" ? as(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? as(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), W1 = Pt(J1), e2 = _({}, ss, {
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
  }), _d = Pt(e2), t2 = _({}, Ti, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hu
  }), n2 = Pt(t2), r2 = _({}, Vr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), a2 = Pt(r2), i2 = _({}, ss, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), l2 = Pt(i2), s2 = _({}, Vr, {
    newState: 0,
    oldState: 0
  }), o2 = Pt(s2), u2 = [9, 13, 27, 32], Iu = Gn && "CompositionEvent" in window, Ni = null;
  Gn && "documentMode" in document && (Ni = document.documentMode);
  var c2 = Gn && "TextEvent" in window && !Ni, bd = Gn && (!Iu || Ni && 8 < Ni && 11 >= Ni), Sd = " ", xd = !1;
  function Ed(e, t) {
    switch (e) {
      case "keyup":
        return u2.indexOf(t.keyCode) !== -1;
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
  function Cd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ma = !1;
  function f2(e, t) {
    switch (e) {
      case "compositionend":
        return Cd(t);
      case "keypress":
        return t.which !== 32 ? null : (xd = !0, Sd);
      case "textInput":
        return e = t.data, e === Sd && xd ? null : e;
      default:
        return null;
    }
  }
  function h2(e, t) {
    if (Ma)
      return e === "compositionend" || !Iu && Ed(e, t) ? (e = md(), rs = Lu = pr = null, Ma = !1, e) : null;
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
        return bd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var d2 = {
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
  function wd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!d2[e.type] : t === "textarea";
  }
  function Ad(e, t, a, s) {
    Oa ? Na ? Na.push(s) : Na = [s] : Oa = s, t = Ys(t, "onChange"), 0 < t.length && (a = new ls(
      "onChange",
      "change",
      null,
      a,
      s
    ), e.push({ event: a, listeners: t }));
  }
  var Mi = null, ki = null;
  function p2(e) {
    lg(e, 0);
  }
  function os(e) {
    var t = wi(e);
    if (sd(t)) return e;
  }
  function Dd(e, t) {
    if (e === "change") return t;
  }
  var Td = !1;
  if (Gn) {
    var qu;
    if (Gn) {
      var Zu = "oninput" in document;
      if (!Zu) {
        var Od = document.createElement("div");
        Od.setAttribute("oninput", "return;"), Zu = typeof Od.oninput == "function";
      }
      qu = Zu;
    } else qu = !1;
    Td = qu && (!document.documentMode || 9 < document.documentMode);
  }
  function Nd() {
    Mi && (Mi.detachEvent("onpropertychange", Md), ki = Mi = null);
  }
  function Md(e) {
    if (e.propertyName === "value" && os(ki)) {
      var t = [];
      Ad(
        t,
        ki,
        e,
        Ru(e)
      ), pd(p2, t);
    }
  }
  function m2(e, t, a) {
    e === "focusin" ? (Nd(), Mi = t, ki = a, Mi.attachEvent("onpropertychange", Md)) : e === "focusout" && Nd();
  }
  function g2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return os(ki);
  }
  function v2(e, t) {
    if (e === "click") return os(t);
  }
  function y2(e, t) {
    if (e === "input" || e === "change")
      return os(t);
  }
  function _2(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var $t = typeof Object.is == "function" ? Object.is : _2;
  function Ri(e, t) {
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
  function kd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Rd(e, t) {
    var a = kd(e);
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
      a = kd(a);
    }
  }
  function jd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function zd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = ts(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = ts(e.document);
    }
    return t;
  }
  function Gu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var b2 = Gn && "documentMode" in document && 11 >= document.documentMode, ka = null, Fu = null, ji = null, Vu = !1;
  function Ld(e, t, a) {
    var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Vu || ka == null || ka !== ts(s) || (s = ka, "selectionStart" in s && Gu(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), ji && Ri(ji, s) || (ji = s, s = Ys(Fu, "onSelect"), 0 < s.length && (t = new ls(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: s }), t.target = ka)));
  }
  function Yr(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Ra = {
    animationend: Yr("Animation", "AnimationEnd"),
    animationiteration: Yr("Animation", "AnimationIteration"),
    animationstart: Yr("Animation", "AnimationStart"),
    transitionrun: Yr("Transition", "TransitionRun"),
    transitionstart: Yr("Transition", "TransitionStart"),
    transitioncancel: Yr("Transition", "TransitionCancel"),
    transitionend: Yr("Transition", "TransitionEnd")
  }, Yu = {}, Bd = {};
  Gn && (Bd = document.createElement("div").style, "AnimationEvent" in window || (delete Ra.animationend.animation, delete Ra.animationiteration.animation, delete Ra.animationstart.animation), "TransitionEvent" in window || delete Ra.transitionend.transition);
  function Xr(e) {
    if (Yu[e]) return Yu[e];
    if (!Ra[e]) return e;
    var t = Ra[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Bd)
        return Yu[e] = t[a];
    return e;
  }
  var Ud = Xr("animationend"), Pd = Xr("animationiteration"), Hd = Xr("animationstart"), S2 = Xr("transitionrun"), x2 = Xr("transitionstart"), E2 = Xr("transitioncancel"), Id = Xr("transitionend"), qd = /* @__PURE__ */ new Map(), Xu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Xu.push("scrollEnd");
  function xn(e, t) {
    qd.set(e, t), Fr(t, [e]);
  }
  var Zd = /* @__PURE__ */ new WeakMap();
  function fn(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Zd.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: id(t)
      }, Zd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: id(t)
    };
  }
  var hn = [], ja = 0, Qu = 0;
  function us() {
    for (var e = ja, t = Qu = ja = 0; t < e; ) {
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
      d !== 0 && Gd(a, u, d);
    }
  }
  function cs(e, t, a, s) {
    hn[ja++] = e, hn[ja++] = t, hn[ja++] = a, hn[ja++] = s, Qu |= s, e.lanes |= s, e = e.alternate, e !== null && (e.lanes |= s);
  }
  function $u(e, t, a, s) {
    return cs(e, t, a, s), fs(e);
  }
  function za(e, t) {
    return cs(e, null, null, t), fs(e);
  }
  function Gd(e, t, a) {
    e.lanes |= a;
    var s = e.alternate;
    s !== null && (s.lanes |= a);
    for (var u = !1, d = e.return; d !== null; )
      d.childLanes |= a, s = d.alternate, s !== null && (s.childLanes |= a), d.tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (u = !0)), e = d, d = d.return;
    return e.tag === 3 ? (d = e.stateNode, u && t !== null && (u = 31 - Qt(a), e = d.hiddenUpdates, s = e[u], s === null ? e[u] = [t] : s.push(t), t.lane = a | 536870912), d) : null;
  }
  function fs(e) {
    if (50 < il)
      throw il = 0, nf = null, Error(l(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var La = {};
  function C2(e, t, a, s) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Kt(e, t, a, s) {
    return new C2(e, t, a, s);
  }
  function Ku(e) {
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
  function Fd(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function hs(e, t, a, s, u, d) {
    var E = 0;
    if (s = e, typeof e == "function") Ku(e) && (E = 1);
    else if (typeof e == "string")
      E = A_(
        e,
        a,
        fe.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Y:
          return e = Kt(31, a, t, u), e.elementType = Y, e.lanes = d, e;
        case f:
          return Qr(a.children, u, d, t);
        case S:
          E = 8, u |= 24;
          break;
        case C:
          return e = Kt(12, a, t, u | 2), e.elementType = C, e.lanes = d, e;
        case D:
          return e = Kt(13, a, t, u), e.elementType = D, e.lanes = d, e;
        case M:
          return e = Kt(19, a, t, u), e.elementType = M, e.lanes = d, e;
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
              case x:
                E = 11;
                break e;
              case R:
                E = 14;
                break e;
              case q:
                E = 16, s = null;
                break e;
            }
          E = 29, a = Error(
            l(130, e === null ? "null" : typeof e, "")
          ), s = null;
      }
    return t = Kt(E, a, t, u), t.elementType = e, t.type = s, t.lanes = d, t;
  }
  function Qr(e, t, a, s) {
    return e = Kt(7, e, s, t), e.lanes = a, e;
  }
  function Ju(e, t, a) {
    return e = Kt(6, e, null, t), e.lanes = a, e;
  }
  function Wu(e, t, a) {
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
  var Ba = [], Ua = 0, ds = null, ps = 0, dn = [], pn = 0, $r = null, Vn = 1, Yn = "";
  function Kr(e, t) {
    Ba[Ua++] = ps, Ba[Ua++] = ds, ds = e, ps = t;
  }
  function Vd(e, t, a) {
    dn[pn++] = Vn, dn[pn++] = Yn, dn[pn++] = $r, $r = e;
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
  function ec(e) {
    e.return !== null && (Kr(e, 1), Vd(e, 1, 0));
  }
  function tc(e) {
    for (; e === ds; )
      ds = Ba[--Ua], Ba[Ua] = null, ps = Ba[--Ua], Ba[Ua] = null;
    for (; e === $r; )
      $r = dn[--pn], dn[pn] = null, Yn = dn[--pn], dn[pn] = null, Vn = dn[--pn], dn[pn] = null;
  }
  var Lt = null, lt = null, Ie = !1, Jr = null, Rn = !1, nc = Error(l(519));
  function Wr(e) {
    var t = Error(l(418, ""));
    throw Bi(fn(t, e)), nc;
  }
  function Yd(e) {
    var t = e.stateNode, a = e.type, s = e.memoizedProps;
    switch (t[Mt] = e, t[Ut] = s, a) {
      case "dialog":
        Re("cancel", t), Re("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Re("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < sl.length; a++)
          Re(sl[a], t);
        break;
      case "source":
        Re("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Re("error", t), Re("load", t);
        break;
      case "details":
        Re("toggle", t);
        break;
      case "input":
        Re("invalid", t), od(
          t,
          s.value,
          s.defaultValue,
          s.checked,
          s.defaultChecked,
          s.type,
          s.name,
          !0
        ), es(t);
        break;
      case "select":
        Re("invalid", t);
        break;
      case "textarea":
        Re("invalid", t), cd(t, s.value, s.defaultValue, s.children), es(t);
    }
    a = s.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || s.suppressHydrationWarning === !0 || cg(t.textContent, a) ? (s.popover != null && (Re("beforetoggle", t), Re("toggle", t)), s.onScroll != null && Re("scroll", t), s.onScrollEnd != null && Re("scrollend", t), s.onClick != null && (t.onclick = Xs), t = !0) : t = !1, t || Wr(e);
  }
  function Xd(e) {
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
  function zi(e) {
    if (e !== Lt) return !1;
    if (!Ie) return Xd(e), Ie = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || _f(e.type, e.memoizedProps)), a = !a), a && lt && Wr(e), Xd(e), t === 13) {
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
      t === 27 ? (t = lt, Nr(e.type) ? (e = Ef, Ef = null, lt = e) : lt = t) : lt = Lt ? Cn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Li() {
    lt = Lt = null, Ie = !1;
  }
  function Qd() {
    var e = Jr;
    return e !== null && (qt === null ? qt = e : qt.push.apply(
      qt,
      e
    ), Jr = null), e;
  }
  function Bi(e) {
    Jr === null ? Jr = [e] : Jr.push(e);
  }
  var rc = J(null), ea = null, Xn = null;
  function mr(e, t, a) {
    ie(rc, t._currentValue), t._currentValue = a;
  }
  function Qn(e) {
    e._currentValue = rc.current, le(rc);
  }
  function ac(e, t, a) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function ic(e, t, a, s) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var d = u.dependencies;
      if (d !== null) {
        var E = u.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var O = d;
          d = u;
          for (var k = 0; k < t.length; k++)
            if (O.context === t[k]) {
              d.lanes |= a, O = d.alternate, O !== null && (O.lanes |= a), ac(
                d.return,
                a,
                e
              ), s || (E = null);
              break e;
            }
          d = O.next;
        }
      } else if (u.tag === 18) {
        if (E = u.return, E === null) throw Error(l(341));
        E.lanes |= a, d = E.alternate, d !== null && (d.lanes |= a), ac(E, a, e), E = null;
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
  function Ui(e, t, a, s) {
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
          var O = u.type;
          $t(u.pendingProps.value, E.value) || (e !== null ? e.push(O) : e = [O]);
        }
      } else if (u === me.current) {
        if (E = u.alternate, E === null) throw Error(l(387));
        E.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(dl) : e = [dl]);
      }
      u = u.return;
    }
    e !== null && ic(
      t,
      e,
      a,
      s
    ), t.flags |= 262144;
  }
  function ms(e) {
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
  function ta(e) {
    ea = e, Xn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function kt(e) {
    return $d(ea, e);
  }
  function gs(e, t) {
    return ea === null && ta(e), $d(e, t);
  }
  function $d(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Xn === null) {
      if (e === null) throw Error(l(308));
      Xn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Xn = Xn.next = t;
    return a;
  }
  var w2 = typeof AbortController < "u" ? AbortController : function() {
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
  }, A2 = n.unstable_scheduleCallback, D2 = n.unstable_NormalPriority, _t = {
    $$typeof: N,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function lc() {
    return {
      controller: new w2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Pi(e) {
    e.refCount--, e.refCount === 0 && A2(D2, function() {
      e.controller.abort();
    });
  }
  var Hi = null, sc = 0, Pa = 0, Ha = null;
  function T2(e, t) {
    if (Hi === null) {
      var a = Hi = [];
      sc = 0, Pa = cf(), Ha = {
        status: "pending",
        value: void 0,
        then: function(s) {
          a.push(s);
        }
      };
    }
    return sc++, t.then(Kd, Kd), t;
  }
  function Kd() {
    if (--sc === 0 && Hi !== null) {
      Ha !== null && (Ha.status = "fulfilled");
      var e = Hi;
      Hi = null, Pa = 0, Ha = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function O2(e, t) {
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
  var Jd = H.S;
  H.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && T2(e, t), Jd !== null && Jd(e, t);
  };
  var na = J(null);
  function oc() {
    var e = na.current;
    return e !== null ? e : Je.pooledCache;
  }
  function vs(e, t) {
    t === null ? ie(na, na.current) : ie(na, t.pool);
  }
  function Wd() {
    var e = oc();
    return e === null ? null : { parent: _t._currentValue, pool: e };
  }
  var Ii = Error(l(460)), ep = Error(l(474)), ys = Error(l(542)), uc = { then: function() {
  } };
  function tp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function _s() {
  }
  function np(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(_s, _s), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, ap(e), e;
      default:
        if (typeof t.status == "string") t.then(_s, _s);
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
            throw e = t.reason, ap(e), e;
        }
        throw qi = t, Ii;
    }
  }
  var qi = null;
  function rp() {
    if (qi === null) throw Error(l(459));
    var e = qi;
    return qi = null, e;
  }
  function ap(e) {
    if (e === Ii || e === ys)
      throw Error(l(483));
  }
  var gr = !1;
  function cc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function fc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function vr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function yr(e, t, a) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Ge & 2) !== 0) {
      var u = s.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), s.pending = t, t = fs(e), Gd(e, null, a), t;
    }
    return cs(e, s, t, a), fs(e);
  }
  function Zi(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, a |= s, t.lanes = a, Kh(e, a);
    }
  }
  function hc(e, t) {
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
  var dc = !1;
  function Gi() {
    if (dc) {
      var e = Ha;
      if (e !== null) throw e;
    }
  }
  function Fi(e, t, a, s) {
    dc = !1;
    var u = e.updateQueue;
    gr = !1;
    var d = u.firstBaseUpdate, E = u.lastBaseUpdate, O = u.shared.pending;
    if (O !== null) {
      u.shared.pending = null;
      var k = O, P = k.next;
      k.next = null, E === null ? d = P : E.next = P, E = k;
      var F = e.alternate;
      F !== null && (F = F.updateQueue, O = F.lastBaseUpdate, O !== E && (O === null ? F.firstBaseUpdate = P : O.next = P, F.lastBaseUpdate = k));
    }
    if (d !== null) {
      var $ = u.baseState;
      E = 0, F = P = k = null, O = d;
      do {
        var I = O.lane & -536870913, Z = I !== O.lane;
        if (Z ? (Ue & I) === I : (s & I) === I) {
          I !== 0 && I === Pa && (dc = !0), F !== null && (F = F.next = {
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: null,
            next: null
          });
          e: {
            var be = e, ge = O;
            I = t;
            var Qe = a;
            switch (ge.tag) {
              case 1:
                if (be = ge.payload, typeof be == "function") {
                  $ = be.call(Qe, $, I);
                  break e;
                }
                $ = be;
                break e;
              case 3:
                be.flags = be.flags & -65537 | 128;
              case 0:
                if (be = ge.payload, I = typeof be == "function" ? be.call(Qe, $, I) : be, I == null) break e;
                $ = _({}, $, I);
                break e;
              case 2:
                gr = !0;
            }
          }
          I = O.callback, I !== null && (e.flags |= 64, Z && (e.flags |= 8192), Z = u.callbacks, Z === null ? u.callbacks = [I] : Z.push(I));
        } else
          Z = {
            lane: I,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          }, F === null ? (P = F = Z, k = $) : F = F.next = Z, E |= I;
        if (O = O.next, O === null) {
          if (O = u.shared.pending, O === null)
            break;
          Z = O, O = Z.next, Z.next = null, u.lastBaseUpdate = Z, u.shared.pending = null;
        }
      } while (!0);
      F === null && (k = $), u.baseState = k, u.firstBaseUpdate = P, u.lastBaseUpdate = F, d === null && (u.shared.lanes = 0), Ar |= E, e.lanes = E, e.memoizedState = $;
    }
  }
  function ip(e, t) {
    if (typeof e != "function")
      throw Error(l(191, e));
    e.call(t);
  }
  function lp(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        ip(a[e], t);
  }
  var Ia = J(null), bs = J(0);
  function sp(e, t) {
    e = nr, ie(bs, e), ie(Ia, t), nr = e | t.baseLanes;
  }
  function pc() {
    ie(bs, nr), ie(Ia, Ia.current);
  }
  function mc() {
    nr = bs.current, le(Ia), le(bs);
  }
  var _r = 0, Ne = null, Ye = null, ht = null, Ss = !1, qa = !1, ra = !1, xs = 0, Vi = 0, Za = null, N2 = 0;
  function ct() {
    throw Error(l(321));
  }
  function gc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!$t(e[a], t[a])) return !1;
    return !0;
  }
  function vc(e, t, a, s, u, d) {
    return _r = d, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e === null || e.memoizedState === null ? Gp : Fp, ra = !1, d = a(s, u), ra = !1, qa && (d = up(
      t,
      a,
      s,
      u
    )), op(e), d;
  }
  function op(e) {
    H.H = Ts;
    var t = Ye !== null && Ye.next !== null;
    if (_r = 0, ht = Ye = Ne = null, Ss = !1, Vi = 0, Za = null, t) throw Error(l(300));
    e === null || Ct || (e = e.dependencies, e !== null && ms(e) && (Ct = !0));
  }
  function up(e, t, a, s) {
    Ne = e;
    var u = 0;
    do {
      if (qa && (Za = null), Vi = 0, qa = !1, 25 <= u) throw Error(l(301));
      if (u += 1, ht = Ye = null, e.updateQueue != null) {
        var d = e.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      H.H = B2, d = t(a, s);
    } while (qa);
    return d;
  }
  function M2() {
    var e = H.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Yi(t) : t, e = e.useState()[0], (Ye !== null ? Ye.memoizedState : null) !== e && (Ne.flags |= 1024), t;
  }
  function yc() {
    var e = xs !== 0;
    return xs = 0, e;
  }
  function _c(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function bc(e) {
    if (Ss) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Ss = !1;
    }
    _r = 0, ht = Ye = Ne = null, qa = !1, Vi = xs = 0, Za = null;
  }
  function Ht() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ht === null ? Ne.memoizedState = ht = e : ht = ht.next = e, ht;
  }
  function dt() {
    if (Ye === null) {
      var e = Ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ye.next;
    var t = ht === null ? Ne.memoizedState : ht.next;
    if (t !== null)
      ht = t, Ye = e;
    else {
      if (e === null)
        throw Ne.alternate === null ? Error(l(467)) : Error(l(310));
      Ye = e, e = {
        memoizedState: Ye.memoizedState,
        baseState: Ye.baseState,
        baseQueue: Ye.baseQueue,
        queue: Ye.queue,
        next: null
      }, ht === null ? Ne.memoizedState = ht = e : ht = ht.next = e;
    }
    return ht;
  }
  function Sc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Yi(e) {
    var t = Vi;
    return Vi += 1, Za === null && (Za = []), e = np(Za, e, t), t = Ne, (ht === null ? t.memoizedState : ht.next) === null && (t = t.alternate, H.H = t === null || t.memoizedState === null ? Gp : Fp), e;
  }
  function Es(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Yi(e);
      if (e.$$typeof === N) return kt(e);
    }
    throw Error(l(438, String(e)));
  }
  function xc(e) {
    var t = null, a = Ne.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var s = Ne.alternate;
      s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (t = {
        data: s.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Sc(), Ne.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), s = 0; s < e; s++)
        a[s] = G;
    return t.index++, a;
  }
  function $n(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Cs(e) {
    var t = dt();
    return Ec(t, Ye, e);
  }
  function Ec(e, t, a) {
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
      var O = E = null, k = null, P = t, F = !1;
      do {
        var $ = P.lane & -536870913;
        if ($ !== P.lane ? (Ue & $) === $ : (_r & $) === $) {
          var I = P.revertLane;
          if (I === 0)
            k !== null && (k = k.next = {
              lane: 0,
              revertLane: 0,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            }), $ === Pa && (F = !0);
          else if ((_r & I) === I) {
            P = P.next, I === Pa && (F = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: P.revertLane,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            }, k === null ? (O = k = $, E = d) : k = k.next = $, Ne.lanes |= I, Ar |= I;
          $ = P.action, ra && a(d, $), d = P.hasEagerState ? P.eagerState : a(d, $);
        } else
          I = {
            lane: $,
            revertLane: P.revertLane,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null
          }, k === null ? (O = k = I, E = d) : k = k.next = I, Ne.lanes |= $, Ar |= $;
        P = P.next;
      } while (P !== null && P !== t);
      if (k === null ? E = d : k.next = O, !$t(d, e.memoizedState) && (Ct = !0, F && (a = Ha, a !== null)))
        throw a;
      e.memoizedState = d, e.baseState = E, e.baseQueue = k, s.lastRenderedState = d;
    }
    return u === null && (s.lanes = 0), [e.memoizedState, s.dispatch];
  }
  function Cc(e) {
    var t = dt(), a = t.queue;
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
  function cp(e, t, a) {
    var s = Ne, u = dt(), d = Ie;
    if (d) {
      if (a === void 0) throw Error(l(407));
      a = a();
    } else a = t();
    var E = !$t(
      (Ye || u).memoizedState,
      a
    );
    E && (u.memoizedState = a, Ct = !0), u = u.queue;
    var O = dp.bind(null, s, u, e);
    if (Xi(2048, 8, O, [e]), u.getSnapshot !== t || E || ht !== null && ht.memoizedState.tag & 1) {
      if (s.flags |= 2048, Ga(
        9,
        ws(),
        hp.bind(
          null,
          s,
          u,
          a,
          t
        ),
        null
      ), Je === null) throw Error(l(349));
      d || (_r & 124) !== 0 || fp(s, t, a);
    }
    return a;
  }
  function fp(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ne.updateQueue, t === null ? (t = Sc(), Ne.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function hp(e, t, a, s) {
    t.value = a, t.getSnapshot = s, pp(t) && mp(e);
  }
  function dp(e, t, a) {
    return a(function() {
      pp(t) && mp(e);
    });
  }
  function pp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !$t(e, a);
    } catch {
      return !0;
    }
  }
  function mp(e) {
    var t = za(e, 2);
    t !== null && nn(t, e, 2);
  }
  function wc(e) {
    var t = Ht();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ra) {
        hr(!0);
        try {
          a();
        } finally {
          hr(!1);
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
  function gp(e, t, a, s) {
    return e.baseState = a, Ec(
      e,
      Ye,
      typeof s == "function" ? s : $n
    );
  }
  function k2(e, t, a, s, u) {
    if (Ds(e)) throw Error(l(485));
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
      H.T !== null ? a(!0) : d.isTransition = !1, s(d), a = t.pending, a === null ? (d.next = t.pending = d, vp(t, d)) : (d.next = a.next, t.pending = a.next = d);
    }
  }
  function vp(e, t) {
    var a = t.action, s = t.payload, u = e.state;
    if (t.isTransition) {
      var d = H.T, E = {};
      H.T = E;
      try {
        var O = a(u, s), k = H.S;
        k !== null && k(E, O), yp(e, t, O);
      } catch (P) {
        Ac(e, t, P);
      } finally {
        H.T = d;
      }
    } else
      try {
        d = a(u, s), yp(e, t, d);
      } catch (P) {
        Ac(e, t, P);
      }
  }
  function yp(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(s) {
        _p(e, t, s);
      },
      function(s) {
        return Ac(e, t, s);
      }
    ) : _p(e, t, a);
  }
  function _p(e, t, a) {
    t.status = "fulfilled", t.value = a, bp(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, vp(e, a)));
  }
  function Ac(e, t, a) {
    var s = e.pending;
    if (e.pending = null, s !== null) {
      s = s.next;
      do
        t.status = "rejected", t.reason = a, bp(t), t = t.next;
      while (t !== s);
    }
    e.action = null;
  }
  function bp(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Sp(e, t) {
    return t;
  }
  function xp(e, t) {
    if (Ie) {
      var a = Je.formState;
      if (a !== null) {
        e: {
          var s = Ne;
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
            Wr(s);
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
      lastRenderedReducer: Sp,
      lastRenderedState: t
    }, a.queue = s, a = Ip.bind(
      null,
      Ne,
      s
    ), s.dispatch = a, s = wc(!1), d = Mc.bind(
      null,
      Ne,
      !1,
      s.queue
    ), s = Ht(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, s.queue = u, a = k2.bind(
      null,
      Ne,
      u,
      d,
      a
    ), u.dispatch = a, s.memoizedState = e, [t, a, !1];
  }
  function Ep(e) {
    var t = dt();
    return Cp(t, Ye, e);
  }
  function Cp(e, t, a) {
    if (t = Ec(
      e,
      t,
      Sp
    )[0], e = Cs($n)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var s = Yi(t);
      } catch (E) {
        throw E === Ii ? ys : E;
      }
    else s = t;
    t = dt();
    var u = t.queue, d = u.dispatch;
    return a !== t.memoizedState && (Ne.flags |= 2048, Ga(
      9,
      ws(),
      R2.bind(null, u, a),
      null
    )), [s, d, e];
  }
  function R2(e, t) {
    e.action = t;
  }
  function wp(e) {
    var t = dt(), a = Ye;
    if (a !== null)
      return Cp(t, a, e);
    dt(), t = t.memoizedState, a = dt();
    var s = a.queue.dispatch;
    return a.memoizedState = e, [t, s, !1];
  }
  function Ga(e, t, a, s) {
    return e = { tag: e, create: a, deps: s, inst: t, next: null }, t = Ne.updateQueue, t === null && (t = Sc(), Ne.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (s = a.next, a.next = e, e.next = s, t.lastEffect = e), e;
  }
  function ws() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ap() {
    return dt().memoizedState;
  }
  function As(e, t, a, s) {
    var u = Ht();
    s = s === void 0 ? null : s, Ne.flags |= e, u.memoizedState = Ga(
      1 | t,
      ws(),
      a,
      s
    );
  }
  function Xi(e, t, a, s) {
    var u = dt();
    s = s === void 0 ? null : s;
    var d = u.memoizedState.inst;
    Ye !== null && s !== null && gc(s, Ye.memoizedState.deps) ? u.memoizedState = Ga(t, d, a, s) : (Ne.flags |= e, u.memoizedState = Ga(
      1 | t,
      d,
      a,
      s
    ));
  }
  function Dp(e, t) {
    As(8390656, 8, e, t);
  }
  function Tp(e, t) {
    Xi(2048, 8, e, t);
  }
  function Op(e, t) {
    return Xi(4, 2, e, t);
  }
  function Np(e, t) {
    return Xi(4, 4, e, t);
  }
  function Mp(e, t) {
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
  function kp(e, t, a) {
    a = a != null ? a.concat([e]) : null, Xi(4, 4, Mp.bind(null, t, e), a);
  }
  function Dc() {
  }
  function Rp(e, t) {
    var a = dt();
    t = t === void 0 ? null : t;
    var s = a.memoizedState;
    return t !== null && gc(t, s[1]) ? s[0] : (a.memoizedState = [e, t], e);
  }
  function jp(e, t) {
    var a = dt();
    t = t === void 0 ? null : t;
    var s = a.memoizedState;
    if (t !== null && gc(t, s[1]))
      return s[0];
    if (s = e(), ra) {
      hr(!0);
      try {
        e();
      } finally {
        hr(!1);
      }
    }
    return a.memoizedState = [s, t], s;
  }
  function Tc(e, t, a) {
    return a === void 0 || (_r & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Bm(), Ne.lanes |= e, Ar |= e, a);
  }
  function zp(e, t, a, s) {
    return $t(a, t) ? a : Ia.current !== null ? (e = Tc(e, a, s), $t(e, t) || (Ct = !0), e) : (_r & 42) === 0 ? (Ct = !0, e.memoizedState = a) : (e = Bm(), Ne.lanes |= e, Ar |= e, t);
  }
  function Lp(e, t, a, s, u) {
    var d = te.p;
    te.p = d !== 0 && 8 > d ? d : 8;
    var E = H.T, O = {};
    H.T = O, Mc(e, !1, t, a);
    try {
      var k = u(), P = H.S;
      if (P !== null && P(O, k), k !== null && typeof k == "object" && typeof k.then == "function") {
        var F = O2(
          k,
          s
        );
        Qi(
          e,
          t,
          F,
          tn(e)
        );
      } else
        Qi(
          e,
          t,
          s,
          tn(e)
        );
    } catch ($) {
      Qi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: $ },
        tn()
      );
    } finally {
      te.p = d, H.T = E;
    }
  }
  function j2() {
  }
  function Oc(e, t, a, s) {
    if (e.tag !== 5) throw Error(l(476));
    var u = Bp(e).queue;
    Lp(
      e,
      u,
      t,
      ue,
      a === null ? j2 : function() {
        return Up(e), a(s);
      }
    );
  }
  function Bp(e) {
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
  function Up(e) {
    var t = Bp(e).next.queue;
    Qi(e, t, {}, tn());
  }
  function Nc() {
    return kt(dl);
  }
  function Pp() {
    return dt().memoizedState;
  }
  function Hp() {
    return dt().memoizedState;
  }
  function z2(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = tn();
          e = vr(a);
          var s = yr(t, e, a);
          s !== null && (nn(s, t, a), Zi(s, t, a)), t = { cache: lc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function L2(e, t, a) {
    var s = tn();
    a = {
      lane: s,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ds(e) ? qp(t, a) : (a = $u(e, t, a, s), a !== null && (nn(a, e, s), Zp(a, t, s)));
  }
  function Ip(e, t, a) {
    var s = tn();
    Qi(e, t, a, s);
  }
  function Qi(e, t, a, s) {
    var u = {
      lane: s,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ds(e)) qp(t, u);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null))
        try {
          var E = t.lastRenderedState, O = d(E, a);
          if (u.hasEagerState = !0, u.eagerState = O, $t(O, E))
            return cs(e, t, u, 0), Je === null && us(), !1;
        } catch {
        } finally {
        }
      if (a = $u(e, t, u, s), a !== null)
        return nn(a, e, s), Zp(a, t, s), !0;
    }
    return !1;
  }
  function Mc(e, t, a, s) {
    if (s = {
      lane: 2,
      revertLane: cf(),
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ds(e)) {
      if (t) throw Error(l(479));
    } else
      t = $u(
        e,
        a,
        s,
        2
      ), t !== null && nn(t, e, 2);
  }
  function Ds(e) {
    var t = e.alternate;
    return e === Ne || t !== null && t === Ne;
  }
  function qp(e, t) {
    qa = Ss = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Zp(e, t, a) {
    if ((a & 4194048) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, a |= s, t.lanes = a, Kh(e, a);
    }
  }
  var Ts = {
    readContext: kt,
    use: Es,
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
  }, Gp = {
    readContext: kt,
    use: Es,
    useCallback: function(e, t) {
      return Ht().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: kt,
    useEffect: Dp,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, As(
        4194308,
        4,
        Mp.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return As(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      As(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Ht();
      t = t === void 0 ? null : t;
      var s = e();
      if (ra) {
        hr(!0);
        try {
          e();
        } finally {
          hr(!1);
        }
      }
      return a.memoizedState = [s, t], s;
    },
    useReducer: function(e, t, a) {
      var s = Ht();
      if (a !== void 0) {
        var u = a(t);
        if (ra) {
          hr(!0);
          try {
            a(t);
          } finally {
            hr(!1);
          }
        }
      } else u = t;
      return s.memoizedState = s.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, s.queue = e, e = e.dispatch = L2.bind(
        null,
        Ne,
        e
      ), [s.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ht();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = wc(e);
      var t = e.queue, a = Ip.bind(null, Ne, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Dc,
    useDeferredValue: function(e, t) {
      var a = Ht();
      return Tc(a, e, t);
    },
    useTransition: function() {
      var e = wc(!1);
      return e = Lp.bind(
        null,
        Ne,
        e.queue,
        !0,
        !1
      ), Ht().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var s = Ne, u = Ht();
      if (Ie) {
        if (a === void 0)
          throw Error(l(407));
        a = a();
      } else {
        if (a = t(), Je === null)
          throw Error(l(349));
        (Ue & 124) !== 0 || fp(s, t, a);
      }
      u.memoizedState = a;
      var d = { value: a, getSnapshot: t };
      return u.queue = d, Dp(dp.bind(null, s, d, e), [
        e
      ]), s.flags |= 2048, Ga(
        9,
        ws(),
        hp.bind(
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
        a = (s & ~(1 << 32 - Qt(s) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = xs++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = N2++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Nc,
    useFormState: xp,
    useActionState: xp,
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
      return t.queue = a, t = Mc.bind(
        null,
        Ne,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: xc,
    useCacheRefresh: function() {
      return Ht().memoizedState = z2.bind(
        null,
        Ne
      );
    }
  }, Fp = {
    readContext: kt,
    use: Es,
    useCallback: Rp,
    useContext: kt,
    useEffect: Tp,
    useImperativeHandle: kp,
    useInsertionEffect: Op,
    useLayoutEffect: Np,
    useMemo: jp,
    useReducer: Cs,
    useRef: Ap,
    useState: function() {
      return Cs($n);
    },
    useDebugValue: Dc,
    useDeferredValue: function(e, t) {
      var a = dt();
      return zp(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Cs($n)[0], t = dt().memoizedState;
      return [
        typeof e == "boolean" ? e : Yi(e),
        t
      ];
    },
    useSyncExternalStore: cp,
    useId: Pp,
    useHostTransitionStatus: Nc,
    useFormState: Ep,
    useActionState: Ep,
    useOptimistic: function(e, t) {
      var a = dt();
      return gp(a, Ye, e, t);
    },
    useMemoCache: xc,
    useCacheRefresh: Hp
  }, B2 = {
    readContext: kt,
    use: Es,
    useCallback: Rp,
    useContext: kt,
    useEffect: Tp,
    useImperativeHandle: kp,
    useInsertionEffect: Op,
    useLayoutEffect: Np,
    useMemo: jp,
    useReducer: Cc,
    useRef: Ap,
    useState: function() {
      return Cc($n);
    },
    useDebugValue: Dc,
    useDeferredValue: function(e, t) {
      var a = dt();
      return Ye === null ? Tc(a, e, t) : zp(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Cc($n)[0], t = dt().memoizedState;
      return [
        typeof e == "boolean" ? e : Yi(e),
        t
      ];
    },
    useSyncExternalStore: cp,
    useId: Pp,
    useHostTransitionStatus: Nc,
    useFormState: wp,
    useActionState: wp,
    useOptimistic: function(e, t) {
      var a = dt();
      return Ye !== null ? gp(a, Ye, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: xc,
    useCacheRefresh: Hp
  }, Fa = null, $i = 0;
  function Os(e) {
    var t = $i;
    return $i += 1, Fa === null && (Fa = []), np(Fa, e, t);
  }
  function Ki(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ns(e, t) {
    throw t.$$typeof === b ? Error(l(525)) : (e = Object.prototype.toString.call(t), Error(
      l(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Vp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Yp(e) {
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
    function O(L, z, B, Q) {
      return z === null || z.tag !== 6 ? (z = Ju(B, L.mode, Q), z.return = L, z) : (z = u(z, B), z.return = L, z);
    }
    function k(L, z, B, Q) {
      var se = B.type;
      return se === f ? F(
        L,
        z,
        B.props.children,
        Q,
        B.key
      ) : z !== null && (z.elementType === se || typeof se == "object" && se !== null && se.$$typeof === q && Vp(se) === z.type) ? (z = u(z, B.props), Ki(z, B), z.return = L, z) : (z = hs(
        B.type,
        B.key,
        B.props,
        null,
        L.mode,
        Q
      ), Ki(z, B), z.return = L, z);
    }
    function P(L, z, B, Q) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== B.containerInfo || z.stateNode.implementation !== B.implementation ? (z = Wu(B, L.mode, Q), z.return = L, z) : (z = u(z, B.children || []), z.return = L, z);
    }
    function F(L, z, B, Q, se) {
      return z === null || z.tag !== 7 ? (z = Qr(
        B,
        L.mode,
        Q,
        se
      ), z.return = L, z) : (z = u(z, B), z.return = L, z);
    }
    function $(L, z, B) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Ju(
          "" + z,
          L.mode,
          B
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case y:
            return B = hs(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              B
            ), Ki(B, z), B.return = L, B;
          case p:
            return z = Wu(
              z,
              L.mode,
              B
            ), z.return = L, z;
          case q:
            var Q = z._init;
            return z = Q(z._payload), $(L, z, B);
        }
        if (Ce(z) || W(z))
          return z = Qr(
            z,
            L.mode,
            B,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return $(L, Os(z), B);
        if (z.$$typeof === N)
          return $(
            L,
            gs(L, z),
            B
          );
        Ns(L, z);
      }
      return null;
    }
    function I(L, z, B, Q) {
      var se = z !== null ? z.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return se !== null ? null : O(L, z, "" + B, Q);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case y:
            return B.key === se ? k(L, z, B, Q) : null;
          case p:
            return B.key === se ? P(L, z, B, Q) : null;
          case q:
            return se = B._init, B = se(B._payload), I(L, z, B, Q);
        }
        if (Ce(B) || W(B))
          return se !== null ? null : F(L, z, B, Q, null);
        if (typeof B.then == "function")
          return I(
            L,
            z,
            Os(B),
            Q
          );
        if (B.$$typeof === N)
          return I(
            L,
            z,
            gs(L, B),
            Q
          );
        Ns(L, B);
      }
      return null;
    }
    function Z(L, z, B, Q, se) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return L = L.get(B) || null, O(z, L, "" + Q, se);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case y:
            return L = L.get(
              Q.key === null ? B : Q.key
            ) || null, k(z, L, Q, se);
          case p:
            return L = L.get(
              Q.key === null ? B : Q.key
            ) || null, P(z, L, Q, se);
          case q:
            var Me = Q._init;
            return Q = Me(Q._payload), Z(
              L,
              z,
              B,
              Q,
              se
            );
        }
        if (Ce(Q) || W(Q))
          return L = L.get(B) || null, F(z, L, Q, se, null);
        if (typeof Q.then == "function")
          return Z(
            L,
            z,
            B,
            Os(Q),
            se
          );
        if (Q.$$typeof === N)
          return Z(
            L,
            z,
            B,
            gs(z, Q),
            se
          );
        Ns(z, Q);
      }
      return null;
    }
    function be(L, z, B, Q) {
      for (var se = null, Me = null, ce = z, ye = z = 0, At = null; ce !== null && ye < B.length; ye++) {
        ce.index > ye ? (At = ce, ce = null) : At = ce.sibling;
        var Pe = I(
          L,
          ce,
          B[ye],
          Q
        );
        if (Pe === null) {
          ce === null && (ce = At);
          break;
        }
        e && ce && Pe.alternate === null && t(L, ce), z = d(Pe, z, ye), Me === null ? se = Pe : Me.sibling = Pe, Me = Pe, ce = At;
      }
      if (ye === B.length)
        return a(L, ce), Ie && Kr(L, ye), se;
      if (ce === null) {
        for (; ye < B.length; ye++)
          ce = $(L, B[ye], Q), ce !== null && (z = d(
            ce,
            z,
            ye
          ), Me === null ? se = ce : Me.sibling = ce, Me = ce);
        return Ie && Kr(L, ye), se;
      }
      for (ce = s(ce); ye < B.length; ye++)
        At = Z(
          ce,
          L,
          ye,
          B[ye],
          Q
        ), At !== null && (e && At.alternate !== null && ce.delete(
          At.key === null ? ye : At.key
        ), z = d(
          At,
          z,
          ye
        ), Me === null ? se = At : Me.sibling = At, Me = At);
      return e && ce.forEach(function(zr) {
        return t(L, zr);
      }), Ie && Kr(L, ye), se;
    }
    function ge(L, z, B, Q) {
      if (B == null) throw Error(l(151));
      for (var se = null, Me = null, ce = z, ye = z = 0, At = null, Pe = B.next(); ce !== null && !Pe.done; ye++, Pe = B.next()) {
        ce.index > ye ? (At = ce, ce = null) : At = ce.sibling;
        var zr = I(L, ce, Pe.value, Q);
        if (zr === null) {
          ce === null && (ce = At);
          break;
        }
        e && ce && zr.alternate === null && t(L, ce), z = d(zr, z, ye), Me === null ? se = zr : Me.sibling = zr, Me = zr, ce = At;
      }
      if (Pe.done)
        return a(L, ce), Ie && Kr(L, ye), se;
      if (ce === null) {
        for (; !Pe.done; ye++, Pe = B.next())
          Pe = $(L, Pe.value, Q), Pe !== null && (z = d(Pe, z, ye), Me === null ? se = Pe : Me.sibling = Pe, Me = Pe);
        return Ie && Kr(L, ye), se;
      }
      for (ce = s(ce); !Pe.done; ye++, Pe = B.next())
        Pe = Z(ce, L, ye, Pe.value, Q), Pe !== null && (e && Pe.alternate !== null && ce.delete(Pe.key === null ? ye : Pe.key), z = d(Pe, z, ye), Me === null ? se = Pe : Me.sibling = Pe, Me = Pe);
      return e && ce.forEach(function(U_) {
        return t(L, U_);
      }), Ie && Kr(L, ye), se;
    }
    function Qe(L, z, B, Q) {
      if (typeof B == "object" && B !== null && B.type === f && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case y:
            e: {
              for (var se = B.key; z !== null; ) {
                if (z.key === se) {
                  if (se = B.type, se === f) {
                    if (z.tag === 7) {
                      a(
                        L,
                        z.sibling
                      ), Q = u(
                        z,
                        B.props.children
                      ), Q.return = L, L = Q;
                      break e;
                    }
                  } else if (z.elementType === se || typeof se == "object" && se !== null && se.$$typeof === q && Vp(se) === z.type) {
                    a(
                      L,
                      z.sibling
                    ), Q = u(z, B.props), Ki(Q, B), Q.return = L, L = Q;
                    break e;
                  }
                  a(L, z);
                  break;
                } else t(L, z);
                z = z.sibling;
              }
              B.type === f ? (Q = Qr(
                B.props.children,
                L.mode,
                Q,
                B.key
              ), Q.return = L, L = Q) : (Q = hs(
                B.type,
                B.key,
                B.props,
                null,
                L.mode,
                Q
              ), Ki(Q, B), Q.return = L, L = Q);
            }
            return E(L);
          case p:
            e: {
              for (se = B.key; z !== null; ) {
                if (z.key === se)
                  if (z.tag === 4 && z.stateNode.containerInfo === B.containerInfo && z.stateNode.implementation === B.implementation) {
                    a(
                      L,
                      z.sibling
                    ), Q = u(z, B.children || []), Q.return = L, L = Q;
                    break e;
                  } else {
                    a(L, z);
                    break;
                  }
                else t(L, z);
                z = z.sibling;
              }
              Q = Wu(B, L.mode, Q), Q.return = L, L = Q;
            }
            return E(L);
          case q:
            return se = B._init, B = se(B._payload), Qe(
              L,
              z,
              B,
              Q
            );
        }
        if (Ce(B))
          return be(
            L,
            z,
            B,
            Q
          );
        if (W(B)) {
          if (se = W(B), typeof se != "function") throw Error(l(150));
          return B = se.call(B), ge(
            L,
            z,
            B,
            Q
          );
        }
        if (typeof B.then == "function")
          return Qe(
            L,
            z,
            Os(B),
            Q
          );
        if (B.$$typeof === N)
          return Qe(
            L,
            z,
            gs(L, B),
            Q
          );
        Ns(L, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, z !== null && z.tag === 6 ? (a(L, z.sibling), Q = u(z, B), Q.return = L, L = Q) : (a(L, z), Q = Ju(B, L.mode, Q), Q.return = L, L = Q), E(L)) : a(L, z);
    }
    return function(L, z, B, Q) {
      try {
        $i = 0;
        var se = Qe(
          L,
          z,
          B,
          Q
        );
        return Fa = null, se;
      } catch (ce) {
        if (ce === Ii || ce === ys) throw ce;
        var Me = Kt(29, ce, null, L.mode);
        return Me.lanes = Q, Me.return = L, Me;
      } finally {
      }
    };
  }
  var Va = Yp(!0), Xp = Yp(!1), mn = J(null), jn = null;
  function br(e) {
    var t = e.alternate;
    ie(bt, bt.current & 1), ie(mn, e), jn === null && (t === null || Ia.current !== null || t.memoizedState !== null) && (jn = e);
  }
  function Qp(e) {
    if (e.tag === 22) {
      if (ie(bt, bt.current), ie(mn, e), jn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (jn = e);
      }
    } else Sr();
  }
  function Sr() {
    ie(bt, bt.current), ie(mn, mn.current);
  }
  function Kn(e) {
    le(mn), jn === e && (jn = null), le(bt);
  }
  var bt = J(0);
  function Ms(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || xf(a)))
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
  function kc(e, t, a, s) {
    t = e.memoizedState, a = a(s, t), a = a == null ? t : _({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Rc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var s = tn(), u = vr(s);
      u.payload = t, a != null && (u.callback = a), t = yr(e, u, s), t !== null && (nn(t, e, s), Zi(t, e, s));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var s = tn(), u = vr(s);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = yr(e, u, s), t !== null && (nn(t, e, s), Zi(t, e, s));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = tn(), s = vr(a);
      s.tag = 2, t != null && (s.callback = t), t = yr(e, s, a), t !== null && (nn(t, e, a), Zi(t, e, a));
    }
  };
  function $p(e, t, a, s, u, d, E) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, d, E) : t.prototype && t.prototype.isPureReactComponent ? !Ri(a, s) || !Ri(u, d) : !0;
  }
  function Kp(e, t, a, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, s), t.state !== e && Rc.enqueueReplaceState(t, t.state, null);
  }
  function aa(e, t) {
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
  var ks = typeof reportError == "function" ? reportError : function(e) {
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
  function Jp(e) {
    ks(e);
  }
  function Wp(e) {
    console.error(e);
  }
  function em(e) {
    ks(e);
  }
  function Rs(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function tm(e, t, a) {
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
  function jc(e, t, a) {
    return a = vr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Rs(e, t);
    }, a;
  }
  function nm(e) {
    return e = vr(e), e.tag = 3, e;
  }
  function rm(e, t, a, s) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = s.value;
      e.payload = function() {
        return u(d);
      }, e.callback = function() {
        tm(t, a, s);
      };
    }
    var E = a.stateNode;
    E !== null && typeof E.componentDidCatch == "function" && (e.callback = function() {
      tm(t, a, s), typeof u != "function" && (Dr === null ? Dr = /* @__PURE__ */ new Set([this]) : Dr.add(this));
      var O = s.stack;
      this.componentDidCatch(s.value, {
        componentStack: O !== null ? O : ""
      });
    });
  }
  function U2(e, t, a, s, u) {
    if (a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
      if (t = a.alternate, t !== null && Ui(
        t,
        a,
        u,
        !0
      ), a = mn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return jn === null ? af() : a.alternate === null && st === 0 && (st = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, s === uc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([s]) : t.add(s), sf(e, s, u)), !1;
          case 22:
            return a.flags |= 65536, s === uc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([s])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([s]) : a.add(s)), sf(e, s, u)), !1;
        }
        throw Error(l(435, a.tag));
      }
      return sf(e, s, u), af(), !1;
    }
    if (Ie)
      return t = mn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, s !== nc && (e = Error(l(422), { cause: s }), Bi(fn(e, a)))) : (s !== nc && (t = Error(l(423), {
        cause: s
      }), Bi(
        fn(t, a)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, s = fn(s, a), u = jc(
        e.stateNode,
        s,
        u
      ), hc(e, u), st !== 4 && (st = 2)), !1;
    var d = Error(l(520), { cause: s });
    if (d = fn(d, a), al === null ? al = [d] : al.push(d), st !== 4 && (st = 2), t === null) return !0;
    s = fn(s, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = u & -u, a.lanes |= e, e = jc(a.stateNode, s, e), hc(a, e), !1;
        case 1:
          if (t = a.type, d = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Dr === null || !Dr.has(d))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = nm(u), rm(
              u,
              e,
              a,
              s
            ), hc(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var am = Error(l(461)), Ct = !1;
  function Dt(e, t, a, s) {
    t.child = e === null ? Xp(t, null, a, s) : Va(
      t,
      e.child,
      a,
      s
    );
  }
  function im(e, t, a, s, u) {
    a = a.render;
    var d = t.ref;
    if ("ref" in s) {
      var E = {};
      for (var O in s)
        O !== "ref" && (E[O] = s[O]);
    } else E = s;
    return ta(t), s = vc(
      e,
      t,
      a,
      E,
      d,
      u
    ), O = yc(), e !== null && !Ct ? (_c(e, t, u), Jn(e, t, u)) : (Ie && O && ec(t), t.flags |= 1, Dt(e, t, s, u), t.child);
  }
  function lm(e, t, a, s, u) {
    if (e === null) {
      var d = a.type;
      return typeof d == "function" && !Ku(d) && d.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = d, sm(
        e,
        t,
        d,
        s,
        u
      )) : (e = hs(
        a.type,
        null,
        s,
        t,
        t.mode,
        u
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (d = e.child, !qc(e, u)) {
      var E = d.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ri, a(E, s) && e.ref === t.ref)
        return Jn(e, t, u);
    }
    return t.flags |= 1, e = Fn(d, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function sm(e, t, a, s, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Ri(d, s) && e.ref === t.ref)
        if (Ct = !1, t.pendingProps = s = d, qc(e, u))
          (e.flags & 131072) !== 0 && (Ct = !0);
        else
          return t.lanes = e.lanes, Jn(e, t, u);
    }
    return zc(
      e,
      t,
      a,
      s,
      u
    );
  }
  function om(e, t, a) {
    var s = t.pendingProps, u = s.children, d = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (s = d !== null ? d.baseLanes | a : a, e !== null) {
          for (u = t.child = e.child, d = 0; u !== null; )
            d = d | u.lanes | u.childLanes, u = u.sibling;
          t.childLanes = d & ~s;
        } else t.childLanes = 0, t.child = null;
        return um(
          e,
          t,
          s,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && vs(
          t,
          d !== null ? d.cachePool : null
        ), d !== null ? sp(t, d) : pc(), Qp(t);
      else
        return t.lanes = t.childLanes = 536870912, um(
          e,
          t,
          d !== null ? d.baseLanes | a : a,
          a
        );
    } else
      d !== null ? (vs(t, d.cachePool), sp(t, d), Sr(), t.memoizedState = null) : (e !== null && vs(t, null), pc(), Sr());
    return Dt(e, t, u, a), t.child;
  }
  function um(e, t, a, s) {
    var u = oc();
    return u = u === null ? null : { parent: _t._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && vs(t, null), pc(), Qp(t), e !== null && Ui(e, t, s, !0), null;
  }
  function js(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(l(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function zc(e, t, a, s, u) {
    return ta(t), a = vc(
      e,
      t,
      a,
      s,
      void 0,
      u
    ), s = yc(), e !== null && !Ct ? (_c(e, t, u), Jn(e, t, u)) : (Ie && s && ec(t), t.flags |= 1, Dt(e, t, a, u), t.child);
  }
  function cm(e, t, a, s, u, d) {
    return ta(t), t.updateQueue = null, a = up(
      t,
      s,
      a,
      u
    ), op(e), s = yc(), e !== null && !Ct ? (_c(e, t, d), Jn(e, t, d)) : (Ie && s && ec(t), t.flags |= 1, Dt(e, t, a, d), t.child);
  }
  function fm(e, t, a, s, u) {
    if (ta(t), t.stateNode === null) {
      var d = La, E = a.contextType;
      typeof E == "object" && E !== null && (d = kt(E)), d = new a(s, d), t.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Rc, t.stateNode = d, d._reactInternals = t, d = t.stateNode, d.props = s, d.state = t.memoizedState, d.refs = {}, cc(t), E = a.contextType, d.context = typeof E == "object" && E !== null ? kt(E) : La, d.state = t.memoizedState, E = a.getDerivedStateFromProps, typeof E == "function" && (kc(
        t,
        a,
        E,
        s
      ), d.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (E = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), E !== d.state && Rc.enqueueReplaceState(d, d.state, null), Fi(t, s, d, u), Gi(), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308), s = !0;
    } else if (e === null) {
      d = t.stateNode;
      var O = t.memoizedProps, k = aa(a, O);
      d.props = k;
      var P = d.context, F = a.contextType;
      E = La, typeof F == "object" && F !== null && (E = kt(F));
      var $ = a.getDerivedStateFromProps;
      F = typeof $ == "function" || typeof d.getSnapshotBeforeUpdate == "function", O = t.pendingProps !== O, F || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (O || P !== E) && Kp(
        t,
        d,
        s,
        E
      ), gr = !1;
      var I = t.memoizedState;
      d.state = I, Fi(t, s, d, u), Gi(), P = t.memoizedState, O || I !== P || gr ? (typeof $ == "function" && (kc(
        t,
        a,
        $,
        s
      ), P = t.memoizedState), (k = gr || $p(
        t,
        a,
        k,
        s,
        I,
        P,
        E
      )) ? (F || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = P), d.props = s, d.state = P, d.context = E, s = k) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      d = t.stateNode, fc(e, t), E = t.memoizedProps, F = aa(a, E), d.props = F, $ = t.pendingProps, I = d.context, P = a.contextType, k = La, typeof P == "object" && P !== null && (k = kt(P)), O = a.getDerivedStateFromProps, (P = typeof O == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (E !== $ || I !== k) && Kp(
        t,
        d,
        s,
        k
      ), gr = !1, I = t.memoizedState, d.state = I, Fi(t, s, d, u), Gi();
      var Z = t.memoizedState;
      E !== $ || I !== Z || gr || e !== null && e.dependencies !== null && ms(e.dependencies) ? (typeof O == "function" && (kc(
        t,
        a,
        O,
        s
      ), Z = t.memoizedState), (F = gr || $p(
        t,
        a,
        F,
        s,
        I,
        Z,
        k
      ) || e !== null && e.dependencies !== null && ms(e.dependencies)) ? (P || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(s, Z, k), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        s,
        Z,
        k
      )), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || E === e.memoizedProps && I === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || E === e.memoizedProps && I === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = Z), d.props = s, d.state = Z, d.context = k, s = F) : (typeof d.componentDidUpdate != "function" || E === e.memoizedProps && I === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || E === e.memoizedProps && I === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return d = s, js(e, t), s = (t.flags & 128) !== 0, d || s ? (d = t.stateNode, a = s && typeof a.getDerivedStateFromError != "function" ? null : d.render(), t.flags |= 1, e !== null && s ? (t.child = Va(
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
  function hm(e, t, a, s) {
    return Li(), t.flags |= 256, Dt(e, t, a, s), t.child;
  }
  var Lc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Bc(e) {
    return { baseLanes: e, cachePool: Wd() };
  }
  function Uc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= gn), e;
  }
  function dm(e, t, a) {
    var s = t.pendingProps, u = !1, d = (t.flags & 128) !== 0, E;
    if ((E = d) || (E = e !== null && e.memoizedState === null ? !1 : (bt.current & 2) !== 0), E && (u = !0, t.flags &= -129), E = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ie) {
        if (u ? br(t) : Sr(), Ie) {
          var O = lt, k;
          if (k = O) {
            e: {
              for (k = O, O = Rn; k.nodeType !== 8; ) {
                if (!O) {
                  O = null;
                  break e;
                }
                if (k = Cn(
                  k.nextSibling
                ), k === null) {
                  O = null;
                  break e;
                }
              }
              O = k;
            }
            O !== null ? (t.memoizedState = {
              dehydrated: O,
              treeContext: $r !== null ? { id: Vn, overflow: Yn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, k = Kt(
              18,
              null,
              null,
              0
            ), k.stateNode = O, k.return = t, t.child = k, Lt = t, lt = null, k = !0) : k = !1;
          }
          k || Wr(t);
        }
        if (O = t.memoizedState, O !== null && (O = O.dehydrated, O !== null))
          return xf(O) ? t.lanes = 32 : t.lanes = 536870912, null;
        Kn(t);
      }
      return O = s.children, s = s.fallback, u ? (Sr(), u = t.mode, O = zs(
        { mode: "hidden", children: O },
        u
      ), s = Qr(
        s,
        u,
        a,
        null
      ), O.return = t, s.return = t, O.sibling = s, t.child = O, u = t.child, u.memoizedState = Bc(a), u.childLanes = Uc(
        e,
        E,
        a
      ), t.memoizedState = Lc, s) : (br(t), Pc(t, O));
    }
    if (k = e.memoizedState, k !== null && (O = k.dehydrated, O !== null)) {
      if (d)
        t.flags & 256 ? (br(t), t.flags &= -257, t = Hc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Sr(), t.child = e.child, t.flags |= 128, t = null) : (Sr(), u = s.fallback, O = t.mode, s = zs(
          { mode: "visible", children: s.children },
          O
        ), u = Qr(
          u,
          O,
          a,
          null
        ), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, Va(
          t,
          e.child,
          null,
          a
        ), s = t.child, s.memoizedState = Bc(a), s.childLanes = Uc(
          e,
          E,
          a
        ), t.memoizedState = Lc, t = u);
      else if (br(t), xf(O)) {
        if (E = O.nextSibling && O.nextSibling.dataset, E) var P = E.dgst;
        E = P, s = Error(l(419)), s.stack = "", s.digest = E, Bi({ value: s, source: null, stack: null }), t = Hc(
          e,
          t,
          a
        );
      } else if (Ct || Ui(e, t, a, !1), E = (a & e.childLanes) !== 0, Ct || E) {
        if (E = Je, E !== null && (s = a & -a, s = (s & 42) !== 0 ? 1 : xu(s), s = (s & (E.suspendedLanes | a)) !== 0 ? 0 : s, s !== 0 && s !== k.retryLane))
          throw k.retryLane = s, za(e, s), nn(E, e, s), am;
        O.data === "$?" || af(), t = Hc(
          e,
          t,
          a
        );
      } else
        O.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = k.treeContext, lt = Cn(
          O.nextSibling
        ), Lt = t, Ie = !0, Jr = null, Rn = !1, e !== null && (dn[pn++] = Vn, dn[pn++] = Yn, dn[pn++] = $r, Vn = e.id, Yn = e.overflow, $r = t), t = Pc(
          t,
          s.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (Sr(), u = s.fallback, O = t.mode, k = e.child, P = k.sibling, s = Fn(k, {
      mode: "hidden",
      children: s.children
    }), s.subtreeFlags = k.subtreeFlags & 65011712, P !== null ? u = Fn(P, u) : (u = Qr(
      u,
      O,
      a,
      null
    ), u.flags |= 2), u.return = t, s.return = t, s.sibling = u, t.child = s, s = u, u = t.child, O = e.child.memoizedState, O === null ? O = Bc(a) : (k = O.cachePool, k !== null ? (P = _t._currentValue, k = k.parent !== P ? { parent: P, pool: P } : k) : k = Wd(), O = {
      baseLanes: O.baseLanes | a,
      cachePool: k
    }), u.memoizedState = O, u.childLanes = Uc(
      e,
      E,
      a
    ), t.memoizedState = Lc, s) : (br(t), a = e.child, e = a.sibling, a = Fn(a, {
      mode: "visible",
      children: s.children
    }), a.return = t, a.sibling = null, e !== null && (E = t.deletions, E === null ? (t.deletions = [e], t.flags |= 16) : E.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function Pc(e, t) {
    return t = zs(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function zs(e, t) {
    return e = Kt(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Hc(e, t, a) {
    return Va(t, e.child, null, a), e = Pc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function pm(e, t, a) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), ac(e.return, t, a);
  }
  function Ic(e, t, a, s, u) {
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
  function mm(e, t, a) {
    var s = t.pendingProps, u = s.revealOrder, d = s.tail;
    if (Dt(e, t, s.children, a), s = bt.current, (s & 2) !== 0)
      s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && pm(e, a, t);
          else if (e.tag === 19)
            pm(e, a, t);
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
    switch (ie(bt, s), u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          e = a.alternate, e !== null && Ms(e) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), Ic(
          t,
          !1,
          u,
          a,
          d
        );
        break;
      case "backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && Ms(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = a, a = u, u = e;
        }
        Ic(
          t,
          !0,
          a,
          null,
          d
        );
        break;
      case "together":
        Ic(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Jn(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Ar |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Ui(
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
  function qc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ms(e)));
  }
  function P2(e, t, a) {
    switch (t.tag) {
      case 3:
        we(t, t.stateNode.containerInfo), mr(t, _t, e.memoizedState.cache), Li();
        break;
      case 27:
      case 5:
        $e(t);
        break;
      case 4:
        we(t, t.stateNode.containerInfo);
        break;
      case 10:
        mr(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var s = t.memoizedState;
        if (s !== null)
          return s.dehydrated !== null ? (br(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? dm(e, t, a) : (br(t), e = Jn(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        br(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (s = (a & t.childLanes) !== 0, s || (Ui(
          e,
          t,
          a,
          !1
        ), s = (a & t.childLanes) !== 0), u) {
          if (s)
            return mm(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), ie(bt, bt.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, om(e, t, a);
      case 24:
        mr(t, _t, e.memoizedState.cache);
    }
    return Jn(e, t, a);
  }
  function gm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ct = !0;
      else {
        if (!qc(e, a) && (t.flags & 128) === 0)
          return Ct = !1, P2(
            e,
            t,
            a
          );
        Ct = (e.flags & 131072) !== 0;
      }
    else
      Ct = !1, Ie && (t.flags & 1048576) !== 0 && Vd(t, ps, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var s = t.elementType, u = s._init;
          if (s = u(s._payload), t.type = s, typeof s == "function")
            Ku(s) ? (e = aa(s, e), t.tag = 1, t = fm(
              null,
              t,
              s,
              e,
              a
            )) : (t.tag = 0, t = zc(
              null,
              t,
              s,
              e,
              a
            ));
          else {
            if (s != null) {
              if (u = s.$$typeof, u === x) {
                t.tag = 11, t = im(
                  null,
                  t,
                  s,
                  e,
                  a
                );
                break e;
              } else if (u === R) {
                t.tag = 14, t = lm(
                  null,
                  t,
                  s,
                  e,
                  a
                );
                break e;
              }
            }
            throw t = he(s) || s, Error(l(306, t, ""));
          }
        }
        return t;
      case 0:
        return zc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return s = t.type, u = aa(
          s,
          t.pendingProps
        ), fm(
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
          u = d.element, fc(e, t), Fi(t, s, null, a);
          var E = t.memoizedState;
          if (s = E.cache, mr(t, _t, s), s !== d.cache && ic(
            t,
            [_t],
            a,
            !0
          ), Gi(), s = E.element, d.isDehydrated)
            if (d = {
              element: s,
              isDehydrated: !1,
              cache: E.cache
            }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
              t = hm(
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
              ), Bi(u), t = hm(
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
              for (lt = Cn(e.firstChild), Lt = t, Ie = !0, Jr = null, Rn = !0, a = Xp(
                t,
                null,
                s,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Li(), s === u) {
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
        return js(e, t), e === null ? (a = bg(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Ie || (a = t.type, e = t.pendingProps, s = Qs(
          V.current
        ).createElement(a), s[Mt] = t, s[Ut] = e, Ot(s, a, e), Et(s), t.stateNode = s) : t.memoizedState = bg(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return $e(t), e === null && Ie && (s = t.stateNode = vg(
          t.type,
          t.pendingProps,
          V.current
        ), Lt = t, Rn = !0, u = lt, Nr(t.type) ? (Ef = u, lt = Cn(
          s.firstChild
        )) : lt = u), Dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), js(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ie && ((u = s = lt) && (s = d_(
          s,
          t.type,
          t.pendingProps,
          Rn
        ), s !== null ? (t.stateNode = s, Lt = t, lt = Cn(
          s.firstChild
        ), Rn = !1, u = !0) : u = !1), u || Wr(t)), $e(t), u = t.type, d = t.pendingProps, E = e !== null ? e.memoizedProps : null, s = d.children, _f(u, d) ? s = null : E !== null && _f(u, E) && (t.flags |= 32), t.memoizedState !== null && (u = vc(
          e,
          t,
          M2,
          null,
          null,
          a
        ), dl._currentValue = u), js(e, t), Dt(e, t, s, a), t.child;
      case 6:
        return e === null && Ie && ((e = a = lt) && (a = p_(
          a,
          t.pendingProps,
          Rn
        ), a !== null ? (t.stateNode = a, Lt = t, lt = null, e = !0) : e = !1), e || Wr(t)), null;
      case 13:
        return dm(e, t, a);
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
        return im(
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
        return s = t.pendingProps, mr(t, t.type, s.value), Dt(
          e,
          t,
          s.children,
          a
        ), t.child;
      case 9:
        return u = t.type._context, s = t.pendingProps.children, ta(t), u = kt(u), s = s(u), t.flags |= 1, Dt(e, t, s, a), t.child;
      case 14:
        return lm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return sm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return mm(e, t, a);
      case 31:
        return s = t.pendingProps, a = t.mode, s = {
          mode: s.mode,
          children: s.children
        }, e === null ? (a = zs(
          s,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = Fn(e.child, s), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return om(e, t, a);
      case 24:
        return ta(t), s = kt(_t), e === null ? (u = oc(), u === null && (u = Je, d = lc(), u.pooledCache = d, d.refCount++, d !== null && (u.pooledCacheLanes |= a), u = d), t.memoizedState = {
          parent: s,
          cache: u
        }, cc(t), mr(t, _t, u)) : ((e.lanes & a) !== 0 && (fc(e, t), Fi(t, null, null, a), Gi()), u = e.memoizedState, d = t.memoizedState, u.parent !== s ? (u = { parent: s, cache: s }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), mr(t, _t, s)) : (s = d.cache, mr(t, _t, s), s !== u.cache && ic(
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
  function vm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !wg(t)) {
      if (t = mn.current, t !== null && ((Ue & 4194048) === Ue ? jn !== null : (Ue & 62914560) !== Ue && (Ue & 536870912) === 0 || t !== jn))
        throw qi = uc, ep;
      e.flags |= 8192;
    }
  }
  function Ls(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Qh() : 536870912, e.lanes |= t, $a |= t);
  }
  function Ji(e, t) {
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
  function H2(e, t, a) {
    var s = t.pendingProps;
    switch (tc(t), t.tag) {
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
        return a = t.stateNode, s = null, e !== null && (s = e.memoizedState.cache), t.memoizedState.cache !== s && (t.flags |= 2048), Qn(_t), Ze(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (zi(t) ? Wn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Qd())), rt(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (Wn(t), a !== null ? (rt(t), vm(t, a)) : (rt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Wn(t), rt(t), vm(t, a)) : (rt(t), t.flags &= -16777217) : (e.memoizedProps !== s && Wn(t), rt(t), t.flags &= -16777217), null;
      case 27:
        Ve(t), a = V.current;
        var u = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== s && Wn(t);
        else {
          if (!s) {
            if (t.stateNode === null)
              throw Error(l(166));
            return rt(t), null;
          }
          e = fe.current, zi(t) ? Yd(t) : (e = vg(u, s, a), t.stateNode = e, Wn(t));
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
          if (e = fe.current, zi(t))
            Yd(t);
          else {
            switch (u = Qs(
              V.current
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
          if (e = V.current, zi(t)) {
            if (e = t.stateNode, a = t.memoizedProps, s = null, u = Lt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  s = u.memoizedProps;
              }
            e[Mt] = t, e = !!(e.nodeValue === a || s !== null && s.suppressHydrationWarning === !0 || cg(e.nodeValue, a)), e || Wr(t);
          } else
            e = Qs(e).createTextNode(
              s
            ), e[Mt] = t, t.stateNode = e;
        }
        return rt(t), null;
      case 13:
        if (s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = zi(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(l(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(l(317));
              u[Mt] = t;
            } else
              Li(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            rt(t), u = !1;
          } else
            u = Qd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
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
        return a !== e && a && (t.child.flags |= 8192), Ls(t, t.updateQueue), rt(t), null;
      case 4:
        return Ze(), e === null && pf(t.stateNode.containerInfo), rt(t), null;
      case 10:
        return Qn(t.type), rt(t), null;
      case 19:
        if (le(bt), u = t.memoizedState, u === null) return rt(t), null;
        if (s = (t.flags & 128) !== 0, d = u.rendering, d === null)
          if (s) Ji(u, !1);
          else {
            if (st !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (d = Ms(e), d !== null) {
                  for (t.flags |= 128, Ji(u, !1), e = d.updateQueue, t.updateQueue = e, Ls(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Fd(a, e), a = a.sibling;
                  return ie(
                    bt,
                    bt.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null && ve() > Ps && (t.flags |= 128, s = !0, Ji(u, !1), t.lanes = 4194304);
          }
        else {
          if (!s)
            if (e = Ms(d), e !== null) {
              if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, Ls(t, e), Ji(u, !0), u.tail === null && u.tailMode === "hidden" && !d.alternate && !Ie)
                return rt(t), null;
            } else
              2 * ve() - u.renderingStartTime > Ps && a !== 536870912 && (t.flags |= 128, s = !0, Ji(u, !1), t.lanes = 4194304);
          u.isBackwards ? (d.sibling = t.child, t.child = d) : (e = u.last, e !== null ? e.sibling = d : t.child = d, u.last = d);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = ve(), t.sibling = null, e = bt.current, ie(bt, s ? e & 1 | 2 : e & 1), t) : (rt(t), null);
      case 22:
      case 23:
        return Kn(t), mc(), s = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192), s ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : rt(t), a = t.updateQueue, a !== null && Ls(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), s = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), s !== a && (t.flags |= 2048), e !== null && le(na), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qn(_t), rt(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function I2(e, t) {
    switch (tc(t), t.tag) {
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
          Li();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return le(bt), null;
      case 4:
        return Ze(), null;
      case 10:
        return Qn(t.type), null;
      case 22:
      case 23:
        return Kn(t), mc(), e !== null && le(na), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Qn(_t), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ym(e, t) {
    switch (tc(t), t.tag) {
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
        le(bt);
        break;
      case 10:
        Qn(t.type);
        break;
      case 22:
      case 23:
        Kn(t), mc(), e !== null && le(na);
        break;
      case 24:
        Qn(_t);
    }
  }
  function Wi(e, t) {
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
    } catch (O) {
      Ke(t, t.return, O);
    }
  }
  function xr(e, t, a) {
    try {
      var s = t.updateQueue, u = s !== null ? s.lastEffect : null;
      if (u !== null) {
        var d = u.next;
        s = d;
        do {
          if ((s.tag & e) === e) {
            var E = s.inst, O = E.destroy;
            if (O !== void 0) {
              E.destroy = void 0, u = t;
              var k = a, P = O;
              try {
                P();
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
  function _m(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        lp(t, a);
      } catch (s) {
        Ke(e, e.return, s);
      }
    }
  }
  function bm(e, t, a) {
    a.props = aa(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (s) {
      Ke(e, t, s);
    }
  }
  function el(e, t) {
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
  function Sm(e) {
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
  function Zc(e, t, a) {
    try {
      var s = e.stateNode;
      o_(s, e.type, a, t), s[Ut] = t;
    } catch (u) {
      Ke(e, e.return, u);
    }
  }
  function xm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Nr(e.type) || e.tag === 4;
  }
  function Gc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || xm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Nr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Fc(e, t, a) {
    var s = e.tag;
    if (s === 5 || s === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Xs));
    else if (s !== 4 && (s === 27 && Nr(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (Fc(e, t, a), e = e.sibling; e !== null; )
        Fc(e, t, a), e = e.sibling;
  }
  function Bs(e, t, a) {
    var s = e.tag;
    if (s === 5 || s === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (s !== 4 && (s === 27 && Nr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Bs(e, t, a), e = e.sibling; e !== null; )
        Bs(e, t, a), e = e.sibling;
  }
  function Em(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var s = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Ot(t, s, a), t[Mt] = e, t[Ut] = a;
    } catch (d) {
      Ke(e, e.return, d);
    }
  }
  var er = !1, ft = !1, Vc = !1, Cm = typeof WeakSet == "function" ? WeakSet : Set, wt = null;
  function q2(e, t) {
    if (e = e.containerInfo, vf = to, e = zd(e), Gu(e)) {
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
            var E = 0, O = -1, k = -1, P = 0, F = 0, $ = e, I = null;
            t: for (; ; ) {
              for (var Z; $ !== a || u !== 0 && $.nodeType !== 3 || (O = E + u), $ !== d || s !== 0 && $.nodeType !== 3 || (k = E + s), $.nodeType === 3 && (E += $.nodeValue.length), (Z = $.firstChild) !== null; )
                I = $, $ = Z;
              for (; ; ) {
                if ($ === e) break t;
                if (I === a && ++P === u && (O = E), I === d && ++F === s && (k = E), (Z = $.nextSibling) !== null) break;
                $ = I, I = $.parentNode;
              }
              $ = Z;
            }
            a = O === -1 || k === -1 ? null : { start: O, end: k };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (yf = { focusedElem: e, selectionRange: a }, to = !1, wt = t; wt !== null; )
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
                  var be = aa(
                    a.type,
                    u,
                    a.elementType === a.type
                  );
                  e = s.getSnapshotBeforeUpdate(
                    be,
                    d
                  ), s.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ge) {
                  Ke(
                    a,
                    a.return,
                    ge
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Sf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Sf(e);
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
  function wm(e, t, a) {
    var s = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Er(e, a), s & 4 && Wi(5, a);
        break;
      case 1:
        if (Er(e, a), s & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (E) {
              Ke(a, a.return, E);
            }
          else {
            var u = aa(
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
        s & 64 && _m(a), s & 512 && el(a, a.return);
        break;
      case 3:
        if (Er(e, a), s & 64 && (e = a.updateQueue, e !== null)) {
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
        t === null && s & 4 && Em(a);
      case 26:
      case 5:
        Er(e, a), t === null && s & 4 && Sm(a), s & 512 && el(a, a.return);
        break;
      case 12:
        Er(e, a);
        break;
      case 13:
        Er(e, a), s & 4 && Tm(e, a), s & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = K2.bind(
          null,
          a
        ), m_(e, a))));
        break;
      case 22:
        if (s = a.memoizedState !== null || er, !s) {
          t = t !== null && t.memoizedState !== null || ft, u = er;
          var d = ft;
          er = s, (ft = t) && !d ? Cr(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Er(e, a), er = u, ft = d;
        }
        break;
      case 30:
        break;
      default:
        Er(e, a);
    }
  }
  function Am(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Am(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && wu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var et = null, It = !1;
  function tr(e, t, a) {
    for (a = a.child; a !== null; )
      Dm(e, t, a), a = a.sibling;
  }
  function Dm(e, t, a) {
    if (Xt && typeof Xt.onCommitFiberUnmount == "function")
      try {
        Xt.onCommitFiberUnmount(Si, a);
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
        Nr(a.type) && (et = a.stateNode, It = !1), tr(
          e,
          t,
          a
        ), ul(a.stateNode), et = s, It = u;
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
        et !== null && (It ? (e = et, mg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), vl(e)) : mg(et, a.stateNode));
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
        ft || xr(2, a, t), ft || xr(4, a, t), tr(
          e,
          t,
          a
        );
        break;
      case 1:
        ft || (zn(a, t), s = a.stateNode, typeof s.componentWillUnmount == "function" && bm(
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
  function Tm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        vl(e);
      } catch (a) {
        Ke(t, t.return, a);
      }
  }
  function Z2(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Cm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Cm()), t;
      default:
        throw Error(l(435, e.tag));
    }
  }
  function Yc(e, t) {
    var a = Z2(e);
    t.forEach(function(s) {
      var u = J2.bind(null, e, s);
      a.has(s) || (a.add(s), s.then(u, u));
    });
  }
  function Jt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var u = a[s], d = e, E = t, O = E;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 27:
              if (Nr(O.type)) {
                et = O.stateNode, It = !1;
                break e;
              }
              break;
            case 5:
              et = O.stateNode, It = !1;
              break e;
            case 3:
            case 4:
              et = O.stateNode.containerInfo, It = !0;
              break e;
          }
          O = O.return;
        }
        if (et === null) throw Error(l(160));
        Dm(d, E, u), et = null, It = !1, d = u.alternate, d !== null && (d.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Om(t, e), t = t.sibling;
  }
  var En = null;
  function Om(e, t) {
    var a = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Jt(t, e), Wt(e), s & 4 && (xr(3, e, e.return), Wi(3, e), xr(5, e, e.return));
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
                      d = u.getElementsByTagName("title")[0], (!d || d[Ci] || d[Mt] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = u.createElement(s), u.head.insertBefore(
                        d,
                        u.querySelector("head > title")
                      )), Ot(d, s, a), d[Mt] = e, Et(d), s = d;
                      break e;
                    case "link":
                      var E = Eg(
                        "link",
                        "href",
                        u
                      ).get(s + (a.href || ""));
                      if (E) {
                        for (var O = 0; O < E.length; O++)
                          if (d = E[O], d.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && d.getAttribute("rel") === (a.rel == null ? null : a.rel) && d.getAttribute("title") === (a.title == null ? null : a.title) && d.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            E.splice(O, 1);
                            break t;
                          }
                      }
                      d = u.createElement(s), Ot(d, s, a), u.head.appendChild(d);
                      break;
                    case "meta":
                      if (E = Eg(
                        "meta",
                        "content",
                        u
                      ).get(s + (a.content || ""))) {
                        for (O = 0; O < E.length; O++)
                          if (d = E[O], d.getAttribute("content") === (a.content == null ? null : "" + a.content) && d.getAttribute("name") === (a.name == null ? null : a.name) && d.getAttribute("property") === (a.property == null ? null : a.property) && d.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && d.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            E.splice(O, 1);
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
                Cg(
                  u,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = xg(
                u,
                s,
                e.memoizedProps
              );
          else
            d !== s ? (d === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : d.count--, s === null ? Cg(
              u,
              e.type,
              e.stateNode
            ) : xg(
              u,
              s,
              e.memoizedProps
            )) : s === null && e.stateNode !== null && Zc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Jt(t, e), Wt(e), s & 512 && (ft || a === null || zn(a, a.return)), a !== null && s & 4 && Zc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Jt(t, e), Wt(e), s & 512 && (ft || a === null || zn(a, a.return)), e.flags & 32) {
          u = e.stateNode;
          try {
            Ta(u, "");
          } catch (Z) {
            Ke(e, e.return, Z);
          }
        }
        s & 4 && e.stateNode != null && (u = e.memoizedProps, Zc(
          e,
          u,
          a !== null ? a.memoizedProps : u
        )), s & 1024 && (Vc = !0);
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
        if (Js = null, u = En, En = $s(t.containerInfo), Jt(t, e), En = u, Wt(e), s & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            vl(t.containerInfo);
          } catch (Z) {
            Ke(e, e.return, Z);
          }
        Vc && (Vc = !1, Nm(e));
        break;
      case 4:
        s = En, En = $s(
          e.stateNode.containerInfo
        ), Jt(t, e), Wt(e), En = s;
        break;
      case 12:
        Jt(t, e), Wt(e);
        break;
      case 13:
        Jt(t, e), Wt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Wc = ve()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Yc(e, s)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var k = a !== null && a.memoizedState !== null, P = er, F = ft;
        if (er = P || u, ft = F || k, Jt(t, e), ft = F, er = P, Wt(e), s & 8192)
          e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || k || er || ft || ia(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                k = a = t;
                try {
                  if (d = k.stateNode, u)
                    E = d.style, typeof E.setProperty == "function" ? E.setProperty("display", "none", "important") : E.display = "none";
                  else {
                    O = k.stateNode;
                    var $ = k.memoizedProps.style, I = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    O.style.display = I == null || typeof I == "boolean" ? "" : ("" + I).trim();
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
        s & 4 && (s = e.updateQueue, s !== null && (a = s.retryQueue, a !== null && (s.retryQueue = null, Yc(e, a))));
        break;
      case 19:
        Jt(t, e), Wt(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Yc(e, s)));
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
          if (xm(s)) {
            a = s;
            break;
          }
          s = s.return;
        }
        if (a == null) throw Error(l(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, d = Gc(e);
            Bs(e, d, u);
            break;
          case 5:
            var E = a.stateNode;
            a.flags & 32 && (Ta(E, ""), a.flags &= -33);
            var O = Gc(e);
            Bs(e, O, E);
            break;
          case 3:
          case 4:
            var k = a.stateNode.containerInfo, P = Gc(e);
            Fc(
              e,
              P,
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
  function Nm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Nm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Er(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        wm(e, t.alternate, t), t = t.sibling;
  }
  function ia(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xr(4, t, t.return), ia(t);
          break;
        case 1:
          zn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && bm(
            t,
            t.return,
            a
          ), ia(t);
          break;
        case 27:
          ul(t.stateNode);
        case 26:
        case 5:
          zn(t, t.return), ia(t);
          break;
        case 22:
          t.memoizedState === null && ia(t);
          break;
        case 30:
          ia(t);
          break;
        default:
          ia(t);
      }
      e = e.sibling;
    }
  }
  function Cr(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var s = t.alternate, u = e, d = t, E = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Cr(
            u,
            d,
            a
          ), Wi(4, d);
          break;
        case 1:
          if (Cr(
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
            var O = s.stateNode;
            try {
              var k = u.shared.hiddenCallbacks;
              if (k !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < k.length; u++)
                  ip(k[u], O);
            } catch (P) {
              Ke(s, s.return, P);
            }
          }
          a && E & 64 && _m(d), el(d, d.return);
          break;
        case 27:
          Em(d);
        case 26:
        case 5:
          Cr(
            u,
            d,
            a
          ), a && s === null && E & 4 && Sm(d), el(d, d.return);
          break;
        case 12:
          Cr(
            u,
            d,
            a
          );
          break;
        case 13:
          Cr(
            u,
            d,
            a
          ), a && E & 4 && Tm(u, d);
          break;
        case 22:
          d.memoizedState === null && Cr(
            u,
            d,
            a
          ), el(d, d.return);
          break;
        case 30:
          break;
        default:
          Cr(
            u,
            d,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Xc(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Pi(a));
  }
  function Qc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Pi(e));
  }
  function Ln(e, t, a, s) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Mm(
          e,
          t,
          a,
          s
        ), t = t.sibling;
  }
  function Mm(e, t, a, s) {
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
        ), u & 2048 && Wi(9, t);
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
        ), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Pi(e)));
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
            var d = t.memoizedProps, E = d.id, O = d.onPostCommit;
            typeof O == "function" && O(
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
        ) : tl(e, t) : d._visibility & 2 ? Ln(
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
        )), u & 2048 && Xc(E, t);
        break;
      case 24:
        Ln(
          e,
          t,
          a,
          s
        ), u & 2048 && Qc(t.alternate, t);
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
      var d = e, E = t, O = a, k = s, P = E.flags;
      switch (E.tag) {
        case 0:
        case 11:
        case 15:
          Ya(
            d,
            E,
            O,
            k,
            u
          ), Wi(8, E);
          break;
        case 23:
          break;
        case 22:
          var F = E.stateNode;
          E.memoizedState !== null ? F._visibility & 2 ? Ya(
            d,
            E,
            O,
            k,
            u
          ) : tl(
            d,
            E
          ) : (F._visibility |= 2, Ya(
            d,
            E,
            O,
            k,
            u
          )), u && P & 2048 && Xc(
            E.alternate,
            E
          );
          break;
        case 24:
          Ya(
            d,
            E,
            O,
            k,
            u
          ), u && P & 2048 && Qc(E.alternate, E);
          break;
        default:
          Ya(
            d,
            E,
            O,
            k,
            u
          );
      }
      t = t.sibling;
    }
  }
  function tl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, s = t, u = s.flags;
        switch (s.tag) {
          case 22:
            tl(a, s), u & 2048 && Xc(
              s.alternate,
              s
            );
            break;
          case 24:
            tl(a, s), u & 2048 && Qc(s.alternate, s);
            break;
          default:
            tl(a, s);
        }
        t = t.sibling;
      }
  }
  var nl = 8192;
  function Xa(e) {
    if (e.subtreeFlags & nl)
      for (e = e.child; e !== null; )
        km(e), e = e.sibling;
  }
  function km(e) {
    switch (e.tag) {
      case 26:
        Xa(e), e.flags & nl && e.memoizedState !== null && T_(
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
        En = $s(e.stateNode.containerInfo), Xa(e), En = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = nl, nl = 16777216, Xa(e), nl = t) : Xa(e));
        break;
      default:
        Xa(e);
    }
  }
  function Rm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function rl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var s = t[a];
          wt = s, zm(
            s,
            e
          );
        }
      Rm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        jm(e), e = e.sibling;
  }
  function jm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        rl(e), e.flags & 2048 && xr(9, e, e.return);
        break;
      case 3:
        rl(e);
        break;
      case 12:
        rl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Us(e)) : rl(e);
        break;
      default:
        rl(e);
    }
  }
  function Us(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var s = t[a];
          wt = s, zm(
            s,
            e
          );
        }
      Rm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          xr(8, t, t.return), Us(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Us(t));
          break;
        default:
          Us(t);
      }
      e = e.sibling;
    }
  }
  function zm(e, t) {
    for (; wt !== null; ) {
      var a = wt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          xr(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var s = a.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          Pi(a.memoizedState.cache);
      }
      if (s = a.child, s !== null) s.return = a, wt = s;
      else
        e: for (a = e; wt !== null; ) {
          s = wt;
          var u = s.sibling, d = s.return;
          if (Am(s), s === a) {
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
  var G2 = {
    getCacheForType: function(e) {
      var t = kt(_t), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, F2 = typeof WeakMap == "function" ? WeakMap : Map, Ge = 0, Je = null, ke = null, Ue = 0, Fe = 0, en = null, wr = !1, Qa = !1, $c = !1, nr = 0, st = 0, Ar = 0, la = 0, Kc = 0, gn = 0, $a = 0, al = null, qt = null, Jc = !1, Wc = 0, Ps = 1 / 0, Hs = null, Dr = null, Tt = 0, Tr = null, Ka = null, Ja = 0, ef = 0, tf = null, Lm = null, il = 0, nf = null;
  function tn() {
    if ((Ge & 2) !== 0 && Ue !== 0)
      return Ue & -Ue;
    if (H.T !== null) {
      var e = Pa;
      return e !== 0 ? e : cf();
    }
    return Jh();
  }
  function Bm() {
    gn === 0 && (gn = (Ue & 536870912) === 0 || Ie ? Xh() : 536870912);
    var e = mn.current;
    return e !== null && (e.flags |= 32), gn;
  }
  function nn(e, t, a) {
    (e === Je && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null) && (Wa(e, 0), Or(
      e,
      Ue,
      gn,
      !1
    )), Ei(e, a), ((Ge & 2) === 0 || e !== Je) && (e === Je && ((Ge & 2) === 0 && (la |= a), st === 4 && Or(
      e,
      Ue,
      gn,
      !1
    )), Bn(e));
  }
  function Um(e, t, a) {
    if ((Ge & 6) !== 0) throw Error(l(327));
    var s = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || xi(e, t), u = s ? X2(e, t) : lf(e, t, !0), d = s;
    do {
      if (u === 0) {
        Qa && !s && Or(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, d && !V2(a)) {
          u = lf(e, t, !1), d = !1;
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
              var O = e;
              u = al;
              var k = O.current.memoizedState.isDehydrated;
              if (k && (Wa(O, E).flags |= 256), E = lf(
                O,
                E,
                !1
              ), E !== 2) {
                if ($c && !k) {
                  O.errorRecoveryDisabledLanes |= d, la |= d, u = 4;
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
          Wa(e, 0), Or(e, t, 0, !0);
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
              Or(
                s,
                t,
                gn,
                !wr
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
          if ((t & 62914560) === t && (u = Wc + 300 - ve(), 10 < u)) {
            if (Or(
              s,
              t,
              gn,
              !wr
            ), Kl(s, 0, !0) !== 0) break e;
            s.timeoutHandle = dg(
              Pm.bind(
                null,
                s,
                a,
                qt,
                Hs,
                Jc,
                t,
                gn,
                la,
                $a,
                wr,
                d,
                2,
                -0,
                0
              ),
              u
            );
            break e;
          }
          Pm(
            s,
            a,
            qt,
            Hs,
            Jc,
            t,
            gn,
            la,
            $a,
            wr,
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
  function Pm(e, t, a, s, u, d, E, O, k, P, F, $, I, Z) {
    if (e.timeoutHandle = -1, $ = t.subtreeFlags, ($ & 8192 || ($ & 16785408) === 16785408) && (hl = { stylesheets: null, count: 0, unsuspend: D_ }, km(t), $ = O_(), $ !== null)) {
      e.cancelPendingCommit = $(
        Vm.bind(
          null,
          e,
          t,
          d,
          a,
          s,
          u,
          E,
          O,
          k,
          F,
          1,
          I,
          Z
        )
      ), Or(e, d, E, !P);
      return;
    }
    Vm(
      e,
      t,
      d,
      a,
      s,
      u,
      E,
      O,
      k
    );
  }
  function V2(e) {
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
  function Or(e, t, a, s) {
    t &= ~Kc, t &= ~la, e.suspendedLanes |= t, e.pingedLanes &= ~t, s && (e.warmLanes |= t), s = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var d = 31 - Qt(u), E = 1 << d;
      s[d] = -1, u &= ~E;
    }
    a !== 0 && $h(e, a, t);
  }
  function Is() {
    return (Ge & 6) === 0 ? (ll(0), !1) : !0;
  }
  function rf() {
    if (ke !== null) {
      if (Fe === 0)
        var e = ke.return;
      else
        e = ke, Xn = ea = null, bc(e), Fa = null, $i = 0, e = ke;
      for (; e !== null; )
        ym(e.alternate, e), e = e.return;
      ke = null;
    }
  }
  function Wa(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, c_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), rf(), Je = e, ke = a = Fn(e.current, null), Ue = t, Fe = 0, en = null, wr = !1, Qa = xi(e, t), $c = !1, $a = gn = Kc = la = Ar = st = 0, qt = al = null, Jc = !1, (t & 8) !== 0 && (t |= t & 32);
    var s = e.entangledLanes;
    if (s !== 0)
      for (e = e.entanglements, s &= t; 0 < s; ) {
        var u = 31 - Qt(s), d = 1 << u;
        t |= e[u], s &= ~d;
      }
    return nr = t, us(), a;
  }
  function Hm(e, t) {
    Ne = null, H.H = Ts, t === Ii || t === ys ? (t = rp(), Fe = 3) : t === ep ? (t = rp(), Fe = 4) : Fe = t === am ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, en = t, ke === null && (st = 1, Rs(
      e,
      fn(t, e.current)
    ));
  }
  function Im() {
    var e = H.H;
    return H.H = Ts, e === null ? Ts : e;
  }
  function qm() {
    var e = H.A;
    return H.A = G2, e;
  }
  function af() {
    st = 4, wr || (Ue & 4194048) !== Ue && mn.current !== null || (Qa = !0), (Ar & 134217727) === 0 && (la & 134217727) === 0 || Je === null || Or(
      Je,
      Ue,
      gn,
      !1
    );
  }
  function lf(e, t, a) {
    var s = Ge;
    Ge |= 2;
    var u = Im(), d = qm();
    (Je !== e || Ue !== t) && (Hs = null, Wa(e, t)), t = !1;
    var E = st;
    e: do
      try {
        if (Fe !== 0 && ke !== null) {
          var O = ke, k = en;
          switch (Fe) {
            case 8:
              rf(), E = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              mn.current === null && (t = !0);
              var P = Fe;
              if (Fe = 0, en = null, ei(e, O, k, P), a && Qa) {
                E = 0;
                break e;
              }
              break;
            default:
              P = Fe, Fe = 0, en = null, ei(e, O, k, P);
          }
        }
        Y2(), E = st;
        break;
      } catch (F) {
        Hm(e, F);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Xn = ea = null, Ge = s, H.H = u, H.A = d, ke === null && (Je = null, Ue = 0, us()), E;
  }
  function Y2() {
    for (; ke !== null; ) Zm(ke);
  }
  function X2(e, t) {
    var a = Ge;
    Ge |= 2;
    var s = Im(), u = qm();
    Je !== e || Ue !== t ? (Hs = null, Ps = ve() + 500, Wa(e, t)) : Qa = xi(
      e,
      t
    );
    e: do
      try {
        if (Fe !== 0 && ke !== null) {
          t = ke;
          var d = en;
          t: switch (Fe) {
            case 1:
              Fe = 0, en = null, ei(e, t, d, 1);
              break;
            case 2:
            case 9:
              if (tp(d)) {
                Fe = 0, en = null, Gm(t);
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
              tp(d) ? (Fe = 0, en = null, Gm(t)) : (Fe = 0, en = null, ei(e, t, d, 7));
              break;
            case 5:
              var E = null;
              switch (ke.tag) {
                case 26:
                  E = ke.memoizedState;
                case 5:
                case 27:
                  var O = ke;
                  if (!E || wg(E)) {
                    Fe = 0, en = null;
                    var k = O.sibling;
                    if (k !== null) ke = k;
                    else {
                      var P = O.return;
                      P !== null ? (ke = P, qs(P)) : ke = null;
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
              rf(), st = 6;
              break e;
            default:
              throw Error(l(462));
          }
        }
        Q2();
        break;
      } catch (F) {
        Hm(e, F);
      }
    while (!0);
    return Xn = ea = null, H.H = s, H.A = u, Ge = a, ke !== null ? 0 : (Je = null, Ue = 0, us(), st);
  }
  function Q2() {
    for (; ke !== null && !Te(); )
      Zm(ke);
  }
  function Zm(e) {
    var t = gm(e.alternate, e, nr);
    e.memoizedProps = e.pendingProps, t === null ? qs(e) : ke = t;
  }
  function Gm(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = cm(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ue
        );
        break;
      case 11:
        t = cm(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ue
        );
        break;
      case 5:
        bc(t);
      default:
        ym(a, t), t = ke = Fd(t, nr), t = gm(a, t, nr);
    }
    e.memoizedProps = e.pendingProps, t === null ? qs(e) : ke = t;
  }
  function ei(e, t, a, s) {
    Xn = ea = null, bc(t), Fa = null, $i = 0;
    var u = t.return;
    try {
      if (U2(
        e,
        u,
        t,
        a,
        Ue
      )) {
        st = 1, Rs(
          e,
          fn(a, e.current)
        ), ke = null;
        return;
      }
    } catch (d) {
      if (u !== null) throw ke = u, d;
      st = 1, Rs(
        e,
        fn(a, e.current)
      ), ke = null;
      return;
    }
    t.flags & 32768 ? (Ie || s === 1 ? e = !0 : Qa || (Ue & 536870912) !== 0 ? e = !1 : (wr = e = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = mn.current, s !== null && s.tag === 13 && (s.flags |= 16384))), Fm(t, e)) : qs(t);
  }
  function qs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Fm(
          t,
          wr
        );
        return;
      }
      e = t.return;
      var a = H2(
        t.alternate,
        t,
        nr
      );
      if (a !== null) {
        ke = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        ke = t;
        return;
      }
      ke = t = e;
    } while (t !== null);
    st === 0 && (st = 5);
  }
  function Fm(e, t) {
    do {
      var a = I2(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, ke = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        ke = e;
        return;
      }
      ke = e = a;
    } while (e !== null);
    st = 6, ke = null;
  }
  function Vm(e, t, a, s, u, d, E, O, k) {
    e.cancelPendingCommit = null;
    do
      Zs();
    while (Tt !== 0);
    if ((Ge & 6) !== 0) throw Error(l(327));
    if (t !== null) {
      if (t === e.current) throw Error(l(177));
      if (d = t.lanes | t.childLanes, d |= Qu, D1(
        e,
        a,
        d,
        E,
        O,
        k
      ), e === Je && (ke = Je = null, Ue = 0), Ka = t, Tr = e, Ja = a, ef = d, tf = u, Lm = s, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, W2(He, function() {
        return Km(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), s = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || s) {
        s = H.T, H.T = null, u = te.p, te.p = 2, E = Ge, Ge |= 4;
        try {
          q2(e, t, a);
        } finally {
          Ge = E, te.p = u, H.T = s;
        }
      }
      Tt = 1, Ym(), Xm(), Qm();
    }
  }
  function Ym() {
    if (Tt === 1) {
      Tt = 0;
      var e = Tr, t = Ka, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = H.T, H.T = null;
        var s = te.p;
        te.p = 2;
        var u = Ge;
        Ge |= 4;
        try {
          Om(t, e);
          var d = yf, E = zd(e.containerInfo), O = d.focusedElem, k = d.selectionRange;
          if (E !== O && O && O.ownerDocument && jd(
            O.ownerDocument.documentElement,
            O
          )) {
            if (k !== null && Gu(O)) {
              var P = k.start, F = k.end;
              if (F === void 0 && (F = P), "selectionStart" in O)
                O.selectionStart = P, O.selectionEnd = Math.min(
                  F,
                  O.value.length
                );
              else {
                var $ = O.ownerDocument || document, I = $ && $.defaultView || window;
                if (I.getSelection) {
                  var Z = I.getSelection(), be = O.textContent.length, ge = Math.min(k.start, be), Qe = k.end === void 0 ? ge : Math.min(k.end, be);
                  !Z.extend && ge > Qe && (E = Qe, Qe = ge, ge = E);
                  var L = Rd(
                    O,
                    ge
                  ), z = Rd(
                    O,
                    Qe
                  );
                  if (L && z && (Z.rangeCount !== 1 || Z.anchorNode !== L.node || Z.anchorOffset !== L.offset || Z.focusNode !== z.node || Z.focusOffset !== z.offset)) {
                    var B = $.createRange();
                    B.setStart(L.node, L.offset), Z.removeAllRanges(), ge > Qe ? (Z.addRange(B), Z.extend(z.node, z.offset)) : (B.setEnd(z.node, z.offset), Z.addRange(B));
                  }
                }
              }
            }
            for ($ = [], Z = O; Z = Z.parentNode; )
              Z.nodeType === 1 && $.push({
                element: Z,
                left: Z.scrollLeft,
                top: Z.scrollTop
              });
            for (typeof O.focus == "function" && O.focus(), O = 0; O < $.length; O++) {
              var Q = $[O];
              Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
            }
          }
          to = !!vf, yf = vf = null;
        } finally {
          Ge = u, te.p = s, H.T = a;
        }
      }
      e.current = t, Tt = 2;
    }
  }
  function Xm() {
    if (Tt === 2) {
      Tt = 0;
      var e = Tr, t = Ka, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = H.T, H.T = null;
        var s = te.p;
        te.p = 2;
        var u = Ge;
        Ge |= 4;
        try {
          wm(e, t.alternate, t);
        } finally {
          Ge = u, te.p = s, H.T = a;
        }
      }
      Tt = 3;
    }
  }
  function Qm() {
    if (Tt === 4 || Tt === 3) {
      Tt = 0, qe();
      var e = Tr, t = Ka, a = Ja, s = Lm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Tt = 5 : (Tt = 0, Ka = Tr = null, $m(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (u === 0 && (Dr = null), Eu(a), t = t.stateNode, Xt && typeof Xt.onCommitFiberRoot == "function")
        try {
          Xt.onCommitFiberRoot(
            Si,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (s !== null) {
        t = H.T, u = te.p, te.p = 2, H.T = null;
        try {
          for (var d = e.onRecoverableError, E = 0; E < s.length; E++) {
            var O = s[E];
            d(O.value, {
              componentStack: O.stack
            });
          }
        } finally {
          H.T = t, te.p = u;
        }
      }
      (Ja & 3) !== 0 && Zs(), Bn(e), u = e.pendingLanes, (a & 4194090) !== 0 && (u & 42) !== 0 ? e === nf ? il++ : (il = 0, nf = e) : il = 0, ll(0);
    }
  }
  function $m(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Pi(t)));
  }
  function Zs(e) {
    return Ym(), Xm(), Qm(), Km();
  }
  function Km() {
    if (Tt !== 5) return !1;
    var e = Tr, t = ef;
    ef = 0;
    var a = Eu(Ja), s = H.T, u = te.p;
    try {
      te.p = 32 > a ? 32 : a, H.T = null, a = tf, tf = null;
      var d = Tr, E = Ja;
      if (Tt = 0, Ka = Tr = null, Ja = 0, (Ge & 6) !== 0) throw Error(l(331));
      var O = Ge;
      if (Ge |= 4, jm(d.current), Mm(
        d,
        d.current,
        E,
        a
      ), Ge = O, ll(0, !1), Xt && typeof Xt.onPostCommitFiberRoot == "function")
        try {
          Xt.onPostCommitFiberRoot(Si, d);
        } catch {
        }
      return !0;
    } finally {
      te.p = u, H.T = s, $m(e, t);
    }
  }
  function Jm(e, t, a) {
    t = fn(a, t), t = jc(e.stateNode, t, 2), e = yr(e, t, 2), e !== null && (Ei(e, 2), Bn(e));
  }
  function Ke(e, t, a) {
    if (e.tag === 3)
      Jm(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Jm(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Dr === null || !Dr.has(s))) {
            e = fn(a, e), a = nm(2), s = yr(t, a, 2), s !== null && (rm(
              a,
              s,
              t,
              e
            ), Ei(s, 2), Bn(s));
            break;
          }
        }
        t = t.return;
      }
  }
  function sf(e, t, a) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new F2();
      var u = /* @__PURE__ */ new Set();
      s.set(t, u);
    } else
      u = s.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), s.set(t, u));
    u.has(a) || ($c = !0, u.add(a), e = $2.bind(null, e, t, a), t.then(e, e));
  }
  function $2(e, t, a) {
    var s = e.pingCache;
    s !== null && s.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Je === e && (Ue & a) === a && (st === 4 || st === 3 && (Ue & 62914560) === Ue && 300 > ve() - Wc ? (Ge & 2) === 0 && Wa(e, 0) : Kc |= a, $a === Ue && ($a = 0)), Bn(e);
  }
  function Wm(e, t) {
    t === 0 && (t = Qh()), e = za(e, t), e !== null && (Ei(e, t), Bn(e));
  }
  function K2(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Wm(e, a);
  }
  function J2(e, t) {
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
    s !== null && s.delete(t), Wm(e, a);
  }
  function W2(e, t) {
    return re(e, t);
  }
  var Gs = null, ti = null, of = !1, Fs = !1, uf = !1, sa = 0;
  function Bn(e) {
    e !== ti && e.next === null && (ti === null ? Gs = ti = e : ti = ti.next = e), Fs = !0, of || (of = !0, t_());
  }
  function ll(e, t) {
    if (!uf && Fs) {
      uf = !0;
      do
        for (var a = !1, s = Gs; s !== null; ) {
          if (e !== 0) {
            var u = s.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var E = s.suspendedLanes, O = s.pingedLanes;
              d = (1 << 31 - Qt(42 | e) + 1) - 1, d &= u & ~(E & ~O), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (a = !0, rg(s, d));
          } else
            d = Ue, d = Kl(
              s,
              s === Je ? d : 0,
              s.cancelPendingCommit !== null || s.timeoutHandle !== -1
            ), (d & 3) === 0 || xi(s, d) || (a = !0, rg(s, d));
          s = s.next;
        }
      while (a);
      uf = !1;
    }
  }
  function e_() {
    eg();
  }
  function eg() {
    Fs = of = !1;
    var e = 0;
    sa !== 0 && (u_() && (e = sa), sa = 0);
    for (var t = ve(), a = null, s = Gs; s !== null; ) {
      var u = s.next, d = tg(s, t);
      d === 0 ? (s.next = null, a === null ? Gs = u : a.next = u, u === null && (ti = a)) : (a = s, (e !== 0 || (d & 3) !== 0) && (Fs = !0)), s = u;
    }
    ll(e);
  }
  function tg(e, t) {
    for (var a = e.suspendedLanes, s = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d; ) {
      var E = 31 - Qt(d), O = 1 << E, k = u[E];
      k === -1 ? ((O & a) === 0 || (O & s) !== 0) && (u[E] = A1(O, t)) : k <= t && (e.expiredLanes |= O), d &= ~O;
    }
    if (t = Je, a = Ue, a = Kl(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), s = e.callbackNode, a === 0 || e === t && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null)
      return s !== null && s !== null && ne(s), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || xi(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (s !== null && ne(s), Eu(a)) {
        case 2:
        case 8:
          a = Mn;
          break;
        case 32:
          a = He;
          break;
        case 268435456:
          a = Xl;
          break;
        default:
          a = He;
      }
      return s = ng.bind(null, e), a = re(a, s), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return s !== null && s !== null && ne(s), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function ng(e, t) {
    if (Tt !== 0 && Tt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Zs() && e.callbackNode !== a)
      return null;
    var s = Ue;
    return s = Kl(
      e,
      e === Je ? s : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), s === 0 ? null : (Um(e, s, t), tg(e, ve()), e.callbackNode != null && e.callbackNode === a ? ng.bind(null, e) : null);
  }
  function rg(e, t) {
    if (Zs()) return null;
    Um(e, t, !0);
  }
  function t_() {
    f_(function() {
      (Ge & 6) !== 0 ? re(
        zt,
        e_
      ) : eg();
    });
  }
  function cf() {
    return sa === 0 && (sa = Xh()), sa;
  }
  function ag(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ns("" + e);
  }
  function ig(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function n_(e, t, a, s, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var d = ag(
        (u[Ut] || null).action
      ), E = s.submitter;
      E && (t = (t = E[Ut] || null) ? ag(t.formAction) : E.getAttribute("formAction"), t !== null && (d = t, E = null));
      var O = new ls(
        "action",
        "action",
        null,
        s,
        u
      );
      e.push({
        event: O,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (s.defaultPrevented) {
                if (sa !== 0) {
                  var k = E ? ig(u, E) : new FormData(u);
                  Oc(
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
                typeof d == "function" && (O.preventDefault(), k = E ? ig(u, E) : new FormData(u), Oc(
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
  for (var ff = 0; ff < Xu.length; ff++) {
    var hf = Xu[ff], r_ = hf.toLowerCase(), a_ = hf[0].toUpperCase() + hf.slice(1);
    xn(
      r_,
      "on" + a_
    );
  }
  xn(Ud, "onAnimationEnd"), xn(Pd, "onAnimationIteration"), xn(Hd, "onAnimationStart"), xn("dblclick", "onDoubleClick"), xn("focusin", "onFocus"), xn("focusout", "onBlur"), xn(S2, "onTransitionRun"), xn(x2, "onTransitionStart"), xn(E2, "onTransitionCancel"), xn(Id, "onTransitionEnd"), wa("onMouseEnter", ["mouseout", "mouseover"]), wa("onMouseLeave", ["mouseout", "mouseover"]), wa("onPointerEnter", ["pointerout", "pointerover"]), wa("onPointerLeave", ["pointerout", "pointerover"]), Fr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Fr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Fr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Fr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Fr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Fr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var sl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), i_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl)
  );
  function lg(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var s = e[a], u = s.event;
      s = s.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var E = s.length - 1; 0 <= E; E--) {
            var O = s[E], k = O.instance, P = O.currentTarget;
            if (O = O.listener, k !== d && u.isPropagationStopped())
              break e;
            d = O, u.currentTarget = P;
            try {
              d(u);
            } catch (F) {
              ks(F);
            }
            u.currentTarget = null, d = k;
          }
        else
          for (E = 0; E < s.length; E++) {
            if (O = s[E], k = O.instance, P = O.currentTarget, O = O.listener, k !== d && u.isPropagationStopped())
              break e;
            d = O, u.currentTarget = P;
            try {
              d(u);
            } catch (F) {
              ks(F);
            }
            u.currentTarget = null, d = k;
          }
      }
    }
  }
  function Re(e, t) {
    var a = t[Cu];
    a === void 0 && (a = t[Cu] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    a.has(s) || (sg(t, e, 2, !1), a.add(s));
  }
  function df(e, t, a) {
    var s = 0;
    t && (s |= 4), sg(
      a,
      e,
      s,
      t
    );
  }
  var Vs = "_reactListening" + Math.random().toString(36).slice(2);
  function pf(e) {
    if (!e[Vs]) {
      e[Vs] = !0, ed.forEach(function(a) {
        a !== "selectionchange" && (i_.has(a) || df(a, !1, e), df(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vs] || (t[Vs] = !0, df("selectionchange", !1, t));
    }
  }
  function sg(e, t, a, s) {
    switch (Mg(t)) {
      case 2:
        var u = k_;
        break;
      case 8:
        u = R_;
        break;
      default:
        u = Tf;
    }
    a = u.bind(
      null,
      t,
      a,
      e
    ), u = void 0, !zu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), s ? u !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, a, !0) : u !== void 0 ? e.addEventListener(t, a, {
      passive: u
    }) : e.addEventListener(t, a, !1);
  }
  function mf(e, t, a, s, u) {
    var d = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (; ; ) {
        if (s === null) return;
        var E = s.tag;
        if (E === 3 || E === 4) {
          var O = s.stateNode.containerInfo;
          if (O === u) break;
          if (E === 4)
            for (E = s.return; E !== null; ) {
              var k = E.tag;
              if ((k === 3 || k === 4) && E.stateNode.containerInfo === u)
                return;
              E = E.return;
            }
          for (; O !== null; ) {
            if (E = xa(O), E === null) return;
            if (k = E.tag, k === 5 || k === 6 || k === 26 || k === 27) {
              s = d = E;
              continue e;
            }
            O = O.parentNode;
          }
        }
        s = s.return;
      }
    pd(function() {
      var P = d, F = Ru(a), $ = [];
      e: {
        var I = qd.get(e);
        if (I !== void 0) {
          var Z = ls, be = e;
          switch (e) {
            case "keypress":
              if (as(a) === 0) break e;
            case "keydown":
            case "keyup":
              Z = W1;
              break;
            case "focusin":
              be = "focus", Z = Pu;
              break;
            case "focusout":
              be = "blur", Z = Pu;
              break;
            case "beforeblur":
            case "afterblur":
              Z = Pu;
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
              Z = vd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = I1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = n2;
              break;
            case Ud:
            case Pd:
            case Hd:
              Z = G1;
              break;
            case Id:
              Z = a2;
              break;
            case "scroll":
            case "scrollend":
              Z = P1;
              break;
            case "wheel":
              Z = l2;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = V1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = _d;
              break;
            case "toggle":
            case "beforetoggle":
              Z = o2;
          }
          var ge = (t & 4) !== 0, Qe = !ge && (e === "scroll" || e === "scrollend"), L = ge ? I !== null ? I + "Capture" : null : I;
          ge = [];
          for (var z = P, B; z !== null; ) {
            var Q = z;
            if (B = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || B === null || L === null || (Q = Ai(z, L), Q != null && ge.push(
              ol(z, Q, B)
            )), Qe) break;
            z = z.return;
          }
          0 < ge.length && (I = new Z(
            I,
            be,
            null,
            a,
            F
          ), $.push({ event: I, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (I = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", I && a !== ku && (be = a.relatedTarget || a.fromElement) && (xa(be) || be[Sa]))
            break e;
          if ((Z || I) && (I = F.window === F ? F : (I = F.ownerDocument) ? I.defaultView || I.parentWindow : window, Z ? (be = a.relatedTarget || a.toElement, Z = P, be = be ? xa(be) : null, be !== null && (Qe = c(be), ge = be.tag, be !== Qe || ge !== 5 && ge !== 27 && ge !== 6) && (be = null)) : (Z = null, be = P), Z !== be)) {
            if (ge = vd, Q = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (ge = _d, Q = "onPointerLeave", L = "onPointerEnter", z = "pointer"), Qe = Z == null ? I : wi(Z), B = be == null ? I : wi(be), I = new ge(
              Q,
              z + "leave",
              Z,
              a,
              F
            ), I.target = Qe, I.relatedTarget = B, Q = null, xa(F) === P && (ge = new ge(
              L,
              z + "enter",
              be,
              a,
              F
            ), ge.target = B, ge.relatedTarget = Qe, Q = ge), Qe = Q, Z && be)
              t: {
                for (ge = Z, L = be, z = 0, B = ge; B; B = ni(B))
                  z++;
                for (B = 0, Q = L; Q; Q = ni(Q))
                  B++;
                for (; 0 < z - B; )
                  ge = ni(ge), z--;
                for (; 0 < B - z; )
                  L = ni(L), B--;
                for (; z--; ) {
                  if (ge === L || L !== null && ge === L.alternate)
                    break t;
                  ge = ni(ge), L = ni(L);
                }
                ge = null;
              }
            else ge = null;
            Z !== null && og(
              $,
              I,
              Z,
              ge,
              !1
            ), be !== null && Qe !== null && og(
              $,
              Qe,
              be,
              ge,
              !0
            );
          }
        }
        e: {
          if (I = P ? wi(P) : window, Z = I.nodeName && I.nodeName.toLowerCase(), Z === "select" || Z === "input" && I.type === "file")
            var se = Dd;
          else if (wd(I))
            if (Td)
              se = y2;
            else {
              se = g2;
              var Me = m2;
            }
          else
            Z = I.nodeName, !Z || Z.toLowerCase() !== "input" || I.type !== "checkbox" && I.type !== "radio" ? P && Mu(P.elementType) && (se = Dd) : se = v2;
          if (se && (se = se(e, P))) {
            Ad(
              $,
              se,
              a,
              F
            );
            break e;
          }
          Me && Me(e, I, P), e === "focusout" && P && I.type === "number" && P.memoizedProps.value != null && Nu(I, "number", I.value);
        }
        switch (Me = P ? wi(P) : window, e) {
          case "focusin":
            (wd(Me) || Me.contentEditable === "true") && (ka = Me, Fu = P, ji = null);
            break;
          case "focusout":
            ji = Fu = ka = null;
            break;
          case "mousedown":
            Vu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Vu = !1, Ld($, a, F);
            break;
          case "selectionchange":
            if (b2) break;
          case "keydown":
          case "keyup":
            Ld($, a, F);
        }
        var ce;
        if (Iu)
          e: {
            switch (e) {
              case "compositionstart":
                var ye = "onCompositionStart";
                break e;
              case "compositionend":
                ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ye = "onCompositionUpdate";
                break e;
            }
            ye = void 0;
          }
        else
          Ma ? Ed(e, a) && (ye = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ye = "onCompositionStart");
        ye && (bd && a.locale !== "ko" && (Ma || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Ma && (ce = md()) : (pr = F, Lu = "value" in pr ? pr.value : pr.textContent, Ma = !0)), Me = Ys(P, ye), 0 < Me.length && (ye = new yd(
          ye,
          e,
          null,
          a,
          F
        ), $.push({ event: ye, listeners: Me }), ce ? ye.data = ce : (ce = Cd(a), ce !== null && (ye.data = ce)))), (ce = c2 ? f2(e, a) : h2(e, a)) && (ye = Ys(P, "onBeforeInput"), 0 < ye.length && (Me = new yd(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          F
        ), $.push({
          event: Me,
          listeners: ye
        }), Me.data = ce)), n_(
          $,
          e,
          P,
          a,
          F
        );
      }
      lg($, t);
    });
  }
  function ol(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Ys(e, t) {
    for (var a = t + "Capture", s = []; e !== null; ) {
      var u = e, d = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || d === null || (u = Ai(e, a), u != null && s.unshift(
        ol(e, u, d)
      ), u = Ai(e, t), u != null && s.push(
        ol(e, u, d)
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
  function og(e, t, a, s, u) {
    for (var d = t._reactName, E = []; a !== null && a !== s; ) {
      var O = a, k = O.alternate, P = O.stateNode;
      if (O = O.tag, k !== null && k === s) break;
      O !== 5 && O !== 26 && O !== 27 || P === null || (k = P, u ? (P = Ai(a, d), P != null && E.unshift(
        ol(a, P, k)
      )) : u || (P = Ai(a, d), P != null && E.push(
        ol(a, P, k)
      ))), a = a.return;
    }
    E.length !== 0 && e.push({ event: t, listeners: E });
  }
  var l_ = /\r\n?/g, s_ = /\u0000|\uFFFD/g;
  function ug(e) {
    return (typeof e == "string" ? e : "" + e).replace(l_, `
`).replace(s_, "");
  }
  function cg(e, t) {
    return t = ug(t), ug(e) === t;
  }
  function Xs() {
  }
  function Xe(e, t, a, s, u, d) {
    switch (a) {
      case "children":
        typeof s == "string" ? t === "body" || t === "textarea" && s === "" || Ta(e, s) : (typeof s == "number" || typeof s == "bigint") && t !== "body" && Ta(e, "" + s);
        break;
      case "className":
        Wl(e, "class", s);
        break;
      case "tabIndex":
        Wl(e, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wl(e, a, s);
        break;
      case "style":
        hd(e, s, d);
        break;
      case "data":
        if (t !== "object") {
          Wl(e, "data", s);
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
        s = ns("" + s), e.setAttribute(a, s);
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
        s = ns("" + s), e.setAttribute(a, s);
        break;
      case "onClick":
        s != null && (e.onclick = Xs);
        break;
      case "onScroll":
        s != null && Re("scroll", e);
        break;
      case "onScrollEnd":
        s != null && Re("scrollend", e);
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
        a = ns("" + s), e.setAttributeNS(
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
        Re("beforetoggle", e), Re("toggle", e), Jl(e, "popover", s);
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
        Jl(e, "is", s);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = B1.get(a) || a, Jl(e, a, s));
    }
  }
  function gf(e, t, a, s, u, d) {
    switch (a) {
      case "style":
        hd(e, s, d);
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
        s != null && Re("scroll", e);
        break;
      case "onScrollEnd":
        s != null && Re("scrollend", e);
        break;
      case "onClick":
        s != null && (e.onclick = Xs);
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
        if (!td.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), d = e[Ut] || null, d = d != null ? d[a] : null, typeof d == "function" && e.removeEventListener(t, d, u), typeof s == "function")) {
              typeof d != "function" && d !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, s, u);
              break e;
            }
            a in e ? e[a] = s : s === !0 ? e.setAttribute(a, "") : Jl(e, a, s);
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
        Re("error", e), Re("load", e);
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
        Re("invalid", e);
        var O = d = E = u = null, k = null, P = null;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var F = a[s];
            if (F != null)
              switch (s) {
                case "name":
                  u = F;
                  break;
                case "type":
                  E = F;
                  break;
                case "checked":
                  k = F;
                  break;
                case "defaultChecked":
                  P = F;
                  break;
                case "value":
                  d = F;
                  break;
                case "defaultValue":
                  O = F;
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
        od(
          e,
          d,
          O,
          k,
          P,
          E,
          u,
          !1
        ), es(e);
        return;
      case "select":
        Re("invalid", e), s = E = d = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (O = a[u], O != null))
            switch (u) {
              case "value":
                d = O;
                break;
              case "defaultValue":
                E = O;
                break;
              case "multiple":
                s = O;
              default:
                Xe(e, t, u, O, a, null);
            }
        t = d, a = E, e.multiple = !!s, t != null ? Da(e, !!s, t, !1) : a != null && Da(e, !!s, a, !0);
        return;
      case "textarea":
        Re("invalid", e), d = u = s = null;
        for (E in a)
          if (a.hasOwnProperty(E) && (O = a[E], O != null))
            switch (E) {
              case "value":
                s = O;
                break;
              case "defaultValue":
                u = O;
                break;
              case "children":
                d = O;
                break;
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(l(91));
                break;
              default:
                Xe(e, t, E, O, a, null);
            }
        cd(e, s, u, d), es(e);
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
        Re("beforetoggle", e), Re("toggle", e), Re("cancel", e), Re("close", e);
        break;
      case "iframe":
      case "object":
        Re("load", e);
        break;
      case "video":
      case "audio":
        for (s = 0; s < sl.length; s++)
          Re(sl[s], e);
        break;
      case "image":
        Re("error", e), Re("load", e);
        break;
      case "details":
        Re("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Re("error", e), Re("load", e);
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
        if (Mu(t)) {
          for (F in a)
            a.hasOwnProperty(F) && (s = a[F], s !== void 0 && gf(
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
    for (O in a)
      a.hasOwnProperty(O) && (s = a[O], s != null && Xe(e, t, O, s, a, null));
  }
  function o_(e, t, a, s) {
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
        var u = null, d = null, E = null, O = null, k = null, P = null, F = null;
        for (Z in a) {
          var $ = a[Z];
          if (a.hasOwnProperty(Z) && $ != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                k = $;
              default:
                s.hasOwnProperty(Z) || Xe(e, t, Z, null, s, $);
            }
        }
        for (var I in s) {
          var Z = s[I];
          if ($ = a[I], s.hasOwnProperty(I) && (Z != null || $ != null))
            switch (I) {
              case "type":
                d = Z;
                break;
              case "name":
                u = Z;
                break;
              case "checked":
                P = Z;
                break;
              case "defaultChecked":
                F = Z;
                break;
              case "value":
                E = Z;
                break;
              case "defaultValue":
                O = Z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(l(137, t));
                break;
              default:
                Z !== $ && Xe(
                  e,
                  t,
                  I,
                  Z,
                  s,
                  $
                );
            }
        }
        Ou(
          e,
          E,
          O,
          k,
          P,
          F,
          d,
          u
        );
        return;
      case "select":
        Z = E = O = I = null;
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
                I = d;
                break;
              case "defaultValue":
                O = d;
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
        t = O, a = E, s = Z, I != null ? Da(e, !!a, I, !1) : !!s != !!a && (t != null ? Da(e, !!a, t, !0) : Da(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        Z = I = null;
        for (O in a)
          if (u = a[O], a.hasOwnProperty(O) && u != null && !s.hasOwnProperty(O))
            switch (O) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xe(e, t, O, null, s, u);
            }
        for (E in s)
          if (u = s[E], d = a[E], s.hasOwnProperty(E) && (u != null || d != null))
            switch (E) {
              case "value":
                I = u;
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
                u !== d && Xe(e, t, E, u, s, d);
            }
        ud(e, I, Z);
        return;
      case "option":
        for (var be in a)
          if (I = a[be], a.hasOwnProperty(be) && I != null && !s.hasOwnProperty(be))
            switch (be) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Xe(
                  e,
                  t,
                  be,
                  null,
                  s,
                  I
                );
            }
        for (k in s)
          if (I = s[k], Z = a[k], s.hasOwnProperty(k) && I !== Z && (I != null || Z != null))
            switch (k) {
              case "selected":
                e.selected = I && typeof I != "function" && typeof I != "symbol";
                break;
              default:
                Xe(
                  e,
                  t,
                  k,
                  I,
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
        for (var ge in a)
          I = a[ge], a.hasOwnProperty(ge) && I != null && !s.hasOwnProperty(ge) && Xe(e, t, ge, null, s, I);
        for (P in s)
          if (I = s[P], Z = a[P], s.hasOwnProperty(P) && I !== Z && (I != null || Z != null))
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (I != null)
                  throw Error(l(137, t));
                break;
              default:
                Xe(
                  e,
                  t,
                  P,
                  I,
                  s,
                  Z
                );
            }
        return;
      default:
        if (Mu(t)) {
          for (var Qe in a)
            I = a[Qe], a.hasOwnProperty(Qe) && I !== void 0 && !s.hasOwnProperty(Qe) && gf(
              e,
              t,
              Qe,
              void 0,
              s,
              I
            );
          for (F in s)
            I = s[F], Z = a[F], !s.hasOwnProperty(F) || I === Z || I === void 0 && Z === void 0 || gf(
              e,
              t,
              F,
              I,
              s,
              Z
            );
          return;
        }
    }
    for (var L in a)
      I = a[L], a.hasOwnProperty(L) && I != null && !s.hasOwnProperty(L) && Xe(e, t, L, null, s, I);
    for ($ in s)
      I = s[$], Z = a[$], !s.hasOwnProperty($) || I === Z || I == null && Z == null || Xe(e, t, $, I, s, Z);
  }
  var vf = null, yf = null;
  function Qs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function fg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function hg(e, t) {
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
  function _f(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var bf = null;
  function u_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === bf ? !1 : (bf = e, !0) : (bf = null, !1);
  }
  var dg = typeof setTimeout == "function" ? setTimeout : void 0, c_ = typeof clearTimeout == "function" ? clearTimeout : void 0, pg = typeof Promise == "function" ? Promise : void 0, f_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof pg < "u" ? function(e) {
    return pg.resolve(null).then(e).catch(h_);
  } : dg;
  function h_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Nr(e) {
    return e === "head";
  }
  function mg(e, t) {
    var a = t, s = 0, u = 0;
    do {
      var d = a.nextSibling;
      if (e.removeChild(a), d && d.nodeType === 8)
        if (a = d.data, a === "/$") {
          if (0 < s && 8 > s) {
            a = s;
            var E = e.ownerDocument;
            if (a & 1 && ul(E.documentElement), a & 2 && ul(E.body), a & 4)
              for (a = E.head, ul(a), E = a.firstChild; E; ) {
                var O = E.nextSibling, k = E.nodeName;
                E[Ci] || k === "SCRIPT" || k === "STYLE" || k === "LINK" && E.rel.toLowerCase() === "stylesheet" || a.removeChild(E), E = O;
              }
          }
          if (u === 0) {
            e.removeChild(d), vl(t);
            return;
          }
          u--;
        } else
          a === "$" || a === "$?" || a === "$!" ? u++ : s = a.charCodeAt(0) - 48;
      else s = 0;
      a = d;
    } while (a);
    vl(t);
  }
  function Sf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Sf(a), wu(a);
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
  function d_(e, t, a, s) {
    for (; e.nodeType === 1; ) {
      var u = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (s) {
        if (!e[Ci])
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
  function p_(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Cn(e.nextSibling), e === null)) return null;
    return e;
  }
  function xf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function m_(e, t) {
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
  var Ef = null;
  function gg(e) {
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
  function vg(e, t, a) {
    switch (t = Qs(a), e) {
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
  function ul(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    wu(e);
  }
  var vn = /* @__PURE__ */ new Map(), yg = /* @__PURE__ */ new Set();
  function $s(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var rr = te.d;
  te.d = {
    f: g_,
    r: v_,
    D: y_,
    C: __,
    L: b_,
    m: S_,
    X: E_,
    S: x_,
    M: C_
  };
  function g_() {
    var e = rr.f(), t = Is();
    return e || t;
  }
  function v_(e) {
    var t = Ea(e);
    t !== null && t.tag === 5 && t.type === "form" ? Up(t) : rr.r(e);
  }
  var ri = typeof document > "u" ? null : document;
  function _g(e, t, a) {
    var s = ri;
    if (s && typeof t == "string" && t) {
      var u = cn(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), yg.has(u) || (yg.add(u), e = { rel: e, crossOrigin: a, href: t }, s.querySelector(u) === null && (t = s.createElement("link"), Ot(t, "link", e), Et(t), s.head.appendChild(t)));
    }
  }
  function y_(e) {
    rr.D(e), _g("dns-prefetch", e, null);
  }
  function __(e, t) {
    rr.C(e, t), _g("preconnect", e, t);
  }
  function b_(e, t, a) {
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
      ), vn.set(d, e), s.querySelector(u) !== null || t === "style" && s.querySelector(cl(d)) || t === "script" && s.querySelector(fl(d)) || (t = s.createElement("link"), Ot(t, "link", e), Et(t), s.head.appendChild(t)));
    }
  }
  function S_(e, t) {
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
            if (a.querySelector(fl(d)))
              return;
        }
        s = a.createElement("link"), Ot(s, "link", e), Et(s), a.head.appendChild(s);
      }
    }
  }
  function x_(e, t, a) {
    rr.S(e, t, a);
    var s = ri;
    if (s && e) {
      var u = Ca(s).hoistableStyles, d = ai(e);
      t = t || "default";
      var E = u.get(d);
      if (!E) {
        var O = { loading: 0, preload: null };
        if (E = s.querySelector(
          cl(d)
        ))
          O.loading = 5;
        else {
          e = _(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = vn.get(d)) && Cf(e, a);
          var k = E = s.createElement("link");
          Et(k), Ot(k, "link", e), k._p = new Promise(function(P, F) {
            k.onload = P, k.onerror = F;
          }), k.addEventListener("load", function() {
            O.loading |= 1;
          }), k.addEventListener("error", function() {
            O.loading |= 2;
          }), O.loading |= 4, Ks(E, t, s);
        }
        E = {
          type: "stylesheet",
          instance: E,
          count: 1,
          state: O
        }, u.set(d, E);
      }
    }
  }
  function E_(e, t) {
    rr.X(e, t);
    var a = ri;
    if (a && e) {
      var s = Ca(a).hoistableScripts, u = ii(e), d = s.get(u);
      d || (d = a.querySelector(fl(u)), d || (e = _({ src: e, async: !0 }, t), (t = vn.get(u)) && wf(e, t), d = a.createElement("script"), Et(d), Ot(d, "link", e), a.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, s.set(u, d));
    }
  }
  function C_(e, t) {
    rr.M(e, t);
    var a = ri;
    if (a && e) {
      var s = Ca(a).hoistableScripts, u = ii(e), d = s.get(u);
      d || (d = a.querySelector(fl(u)), d || (e = _({ src: e, async: !0, type: "module" }, t), (t = vn.get(u)) && wf(e, t), d = a.createElement("script"), Et(d), Ot(d, "link", e), a.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, s.set(u, d));
    }
  }
  function bg(e, t, a, s) {
    var u = (u = V.current) ? $s(u) : null;
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
            cl(e)
          )) && !d._p && (E.instance = d, E.state.loading = 5), vn.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, vn.set(e, a), d || w_(
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
  function cl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Sg(e) {
    return _({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function w_(e, t, a, s) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? s.loading = 1 : (t = e.createElement("link"), s.preload = t, t.addEventListener("load", function() {
      return s.loading |= 1;
    }), t.addEventListener("error", function() {
      return s.loading |= 2;
    }), Ot(t, "link", a), Et(t), e.head.appendChild(t));
  }
  function ii(e) {
    return '[src="' + cn(e) + '"]';
  }
  function fl(e) {
    return "script[async]" + e;
  }
  function xg(e, t, a) {
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
          ), Et(s), Ot(s, "style", u), Ks(s, a.precedence, e), t.instance = s;
        case "stylesheet":
          u = ai(a.href);
          var d = e.querySelector(
            cl(u)
          );
          if (d)
            return t.state.loading |= 4, t.instance = d, Et(d), d;
          s = Sg(a), (u = vn.get(u)) && Cf(s, u), d = (e.ownerDocument || e).createElement("link"), Et(d);
          var E = d;
          return E._p = new Promise(function(O, k) {
            E.onload = O, E.onerror = k;
          }), Ot(d, "link", s), t.state.loading |= 4, Ks(d, a.precedence, e), t.instance = d;
        case "script":
          return d = ii(a.src), (u = e.querySelector(
            fl(d)
          )) ? (t.instance = u, Et(u), u) : (s = a, (u = vn.get(d)) && (s = _({}, a), wf(s, u)), e = e.ownerDocument || e, u = e.createElement("script"), Et(u), Ot(u, "link", s), e.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(l(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (s = t.instance, t.state.loading |= 4, Ks(s, a.precedence, e));
    return t.instance;
  }
  function Ks(e, t, a) {
    for (var s = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = s.length ? s[s.length - 1] : null, d = u, E = 0; E < s.length; E++) {
      var O = s[E];
      if (O.dataset.precedence === t) d = O;
      else if (d !== u) break;
    }
    d ? d.parentNode.insertBefore(e, d.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Cf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function wf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Js = null;
  function Eg(e, t, a) {
    if (Js === null) {
      var s = /* @__PURE__ */ new Map(), u = Js = /* @__PURE__ */ new Map();
      u.set(a, s);
    } else
      u = Js, s = u.get(a), s || (s = /* @__PURE__ */ new Map(), u.set(a, s));
    if (s.has(e)) return s;
    for (s.set(e, null), a = a.getElementsByTagName(e), u = 0; u < a.length; u++) {
      var d = a[u];
      if (!(d[Ci] || d[Mt] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var E = d.getAttribute(t) || "";
        E = e + E;
        var O = s.get(E);
        O ? O.push(d) : s.set(E, [d]);
      }
    }
    return s;
  }
  function Cg(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function A_(e, t, a) {
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
  function wg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var hl = null;
  function D_() {
  }
  function T_(e, t, a) {
    if (hl === null) throw Error(l(475));
    var s = hl;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var u = ai(a.href), d = e.querySelector(
          cl(u)
        );
        if (d) {
          e = d._p, e !== null && typeof e == "object" && typeof e.then == "function" && (s.count++, s = Ws.bind(s), e.then(s, s)), t.state.loading |= 4, t.instance = d, Et(d);
          return;
        }
        d = e.ownerDocument || e, a = Sg(a), (u = vn.get(u)) && Cf(a, u), d = d.createElement("link"), Et(d);
        var E = d;
        E._p = new Promise(function(O, k) {
          E.onload = O, E.onerror = k;
        }), Ot(d, "link", a), t.instance = d;
      }
      s.stylesheets === null && (s.stylesheets = /* @__PURE__ */ new Map()), s.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (s.count++, t = Ws.bind(s), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function O_() {
    if (hl === null) throw Error(l(475));
    var e = hl;
    return e.stylesheets && e.count === 0 && Af(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && Af(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function Ws() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Af(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var eo = null;
  function Af(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, eo = /* @__PURE__ */ new Map(), t.forEach(N_, e), eo = null, Ws.call(e));
  }
  function N_(e, t) {
    if (!(t.state.loading & 4)) {
      var a = eo.get(e);
      if (a) var s = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), eo.set(e, a);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < u.length; d++) {
          var E = u[d];
          (E.nodeName === "LINK" || E.getAttribute("media") !== "not all") && (a.set(E.dataset.precedence, E), s = E);
        }
        s && a.set(null, s);
      }
      u = t.instance, E = u.getAttribute("data-precedence"), d = a.get(E) || s, d === s && a.set(null, u), a.set(E, u), this.count++, s = Ws.bind(this), u.addEventListener("load", s), u.addEventListener("error", s), d ? d.parentNode.insertBefore(u, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var dl = {
    $$typeof: N,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function M_(e, t, a, s, u, d, E, O) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Su(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Su(0), this.hiddenUpdates = Su(null), this.identifierPrefix = s, this.onUncaughtError = u, this.onCaughtError = d, this.onRecoverableError = E, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ag(e, t, a, s, u, d, E, O, k, P, F, $) {
    return e = new M_(
      e,
      t,
      a,
      E,
      O,
      k,
      P,
      $
    ), t = 1, d === !0 && (t |= 24), d = Kt(3, null, null, t), e.current = d, d.stateNode = e, t = lc(), t.refCount++, e.pooledCache = t, t.refCount++, d.memoizedState = {
      element: s,
      isDehydrated: a,
      cache: t
    }, cc(d), e;
  }
  function Dg(e) {
    return e ? (e = La, e) : La;
  }
  function Tg(e, t, a, s, u, d) {
    u = Dg(u), s.context === null ? s.context = u : s.pendingContext = u, s = vr(t), s.payload = { element: a }, d = d === void 0 ? null : d, d !== null && (s.callback = d), a = yr(e, s, t), a !== null && (nn(a, e, t), Zi(a, e, t));
  }
  function Og(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Df(e, t) {
    Og(e, t), (e = e.alternate) && Og(e, t);
  }
  function Ng(e) {
    if (e.tag === 13) {
      var t = za(e, 67108864);
      t !== null && nn(t, e, 67108864), Df(e, 67108864);
    }
  }
  var to = !0;
  function k_(e, t, a, s) {
    var u = H.T;
    H.T = null;
    var d = te.p;
    try {
      te.p = 2, Tf(e, t, a, s);
    } finally {
      te.p = d, H.T = u;
    }
  }
  function R_(e, t, a, s) {
    var u = H.T;
    H.T = null;
    var d = te.p;
    try {
      te.p = 8, Tf(e, t, a, s);
    } finally {
      te.p = d, H.T = u;
    }
  }
  function Tf(e, t, a, s) {
    if (to) {
      var u = Of(s);
      if (u === null)
        mf(
          e,
          t,
          s,
          no,
          a
        ), kg(e, s);
      else if (z_(
        u,
        e,
        t,
        a,
        s
      ))
        s.stopPropagation();
      else if (kg(e, s), t & 4 && -1 < j_.indexOf(e)) {
        for (; u !== null; ) {
          var d = Ea(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var E = Gr(d.pendingLanes);
                  if (E !== 0) {
                    var O = d;
                    for (O.pendingLanes |= 2, O.entangledLanes |= 2; E; ) {
                      var k = 1 << 31 - Qt(E);
                      O.entanglements[1] |= k, E &= ~k;
                    }
                    Bn(d), (Ge & 6) === 0 && (Ps = ve() + 500, ll(0));
                  }
                }
                break;
              case 13:
                O = za(d, 2), O !== null && nn(O, d, 2), Is(), Df(d, 2);
            }
          if (d = Of(s), d === null && mf(
            e,
            t,
            s,
            no,
            a
          ), d === u) break;
          u = d;
        }
        u !== null && s.stopPropagation();
      } else
        mf(
          e,
          t,
          s,
          null,
          a
        );
    }
  }
  function Of(e) {
    return e = Ru(e), Nf(e);
  }
  var no = null;
  function Nf(e) {
    if (no = null, e = xa(e), e !== null) {
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
    return no = e, null;
  }
  function Mg(e) {
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
          case Xl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mf = !1, Mr = null, kr = null, Rr = null, pl = /* @__PURE__ */ new Map(), ml = /* @__PURE__ */ new Map(), jr = [], j_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function kg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Mr = null;
        break;
      case "dragenter":
      case "dragleave":
        kr = null;
        break;
      case "mouseover":
      case "mouseout":
        Rr = null;
        break;
      case "pointerover":
      case "pointerout":
        pl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ml.delete(t.pointerId);
    }
  }
  function gl(e, t, a, s, u, d) {
    return e === null || e.nativeEvent !== d ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: s,
      nativeEvent: d,
      targetContainers: [u]
    }, t !== null && (t = Ea(t), t !== null && Ng(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function z_(e, t, a, s, u) {
    switch (t) {
      case "focusin":
        return Mr = gl(
          Mr,
          e,
          t,
          a,
          s,
          u
        ), !0;
      case "dragenter":
        return kr = gl(
          kr,
          e,
          t,
          a,
          s,
          u
        ), !0;
      case "mouseover":
        return Rr = gl(
          Rr,
          e,
          t,
          a,
          s,
          u
        ), !0;
      case "pointerover":
        var d = u.pointerId;
        return pl.set(
          d,
          gl(
            pl.get(d) || null,
            e,
            t,
            a,
            s,
            u
          )
        ), !0;
      case "gotpointercapture":
        return d = u.pointerId, ml.set(
          d,
          gl(
            ml.get(d) || null,
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
  function Rg(e) {
    var t = xa(e.target);
    if (t !== null) {
      var a = c(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = h(a), t !== null) {
            e.blockedOn = t, T1(e.priority, function() {
              if (a.tag === 13) {
                var s = tn();
                s = xu(s);
                var u = za(a, s);
                u !== null && nn(u, a, s), Df(a, s);
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
  function ro(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Of(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var s = new a.constructor(
          a.type,
          a
        );
        ku = s, a.target.dispatchEvent(s), ku = null;
      } else
        return t = Ea(a), t !== null && Ng(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function jg(e, t, a) {
    ro(e) && a.delete(t);
  }
  function L_() {
    Mf = !1, Mr !== null && ro(Mr) && (Mr = null), kr !== null && ro(kr) && (kr = null), Rr !== null && ro(Rr) && (Rr = null), pl.forEach(jg), ml.forEach(jg);
  }
  function ao(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Mf || (Mf = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      L_
    )));
  }
  var io = null;
  function zg(e) {
    io !== e && (io = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        io === e && (io = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], s = e[t + 1], u = e[t + 2];
          if (typeof s != "function") {
            if (Nf(s || a) === null)
              continue;
            break;
          }
          var d = Ea(a);
          d !== null && (e.splice(t, 3), t -= 3, Oc(
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
  function vl(e) {
    function t(k) {
      return ao(k, e);
    }
    Mr !== null && ao(Mr, e), kr !== null && ao(kr, e), Rr !== null && ao(Rr, e), pl.forEach(t), ml.forEach(t);
    for (var a = 0; a < jr.length; a++) {
      var s = jr[a];
      s.blockedOn === e && (s.blockedOn = null);
    }
    for (; 0 < jr.length && (a = jr[0], a.blockedOn === null); )
      Rg(a), a.blockedOn === null && jr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (s = 0; s < a.length; s += 3) {
        var u = a[s], d = a[s + 1], E = u[Ut] || null;
        if (typeof d == "function")
          E || zg(a);
        else if (E) {
          var O = null;
          if (d && d.hasAttribute("formAction")) {
            if (u = d, E = d[Ut] || null)
              O = E.formAction;
            else if (Nf(u) !== null) continue;
          } else O = E.action;
          typeof O == "function" ? a[s + 1] = O : (a.splice(s, 3), s -= 3), zg(a);
        }
      }
  }
  function kf(e) {
    this._internalRoot = e;
  }
  lo.prototype.render = kf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    var a = t.current, s = tn();
    Tg(a, s, e, t, null, null);
  }, lo.prototype.unmount = kf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Tg(e.current, 2, null, e, null, null), Is(), t[Sa] = null;
    }
  };
  function lo(e) {
    this._internalRoot = e;
  }
  lo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Jh();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < jr.length && t !== 0 && t < jr[a].priority; a++) ;
      jr.splice(a, 0, e), a === 0 && Rg(e);
    }
  };
  var Lg = r.version;
  if (Lg !== "19.1.1")
    throw Error(
      l(
        527,
        Lg,
        "19.1.1"
      )
    );
  te.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = g(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var B_ = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var so = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!so.isDisabled && so.supportsFiber)
      try {
        Si = so.inject(
          B_
        ), Xt = so;
      } catch {
      }
  }
  return _l.createRoot = function(e, t) {
    if (!o(e)) throw Error(l(299));
    var a = !1, s = "", u = Jp, d = Wp, E = em, O = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (d = t.onCaughtError), t.onRecoverableError !== void 0 && (E = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (O = t.unstable_transitionCallbacks)), t = Ag(
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
      O,
      null
    ), e[Sa] = t.current, pf(e), new kf(t);
  }, _l.hydrateRoot = function(e, t, a) {
    if (!o(e)) throw Error(l(299));
    var s = !1, u = "", d = Jp, E = Wp, O = em, k = null, P = null;
    return a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (d = a.onUncaughtError), a.onCaughtError !== void 0 && (E = a.onCaughtError), a.onRecoverableError !== void 0 && (O = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (k = a.unstable_transitionCallbacks), a.formState !== void 0 && (P = a.formState)), t = Ag(
      e,
      1,
      !0,
      t,
      a ?? null,
      s,
      u,
      d,
      E,
      O,
      k,
      P
    ), t.context = Dg(null), a = t.current, s = tn(), s = xu(s), u = vr(s), u.callback = null, yr(a, u, s), a = s, t.current.lanes = a, Ei(t, a), Bn(t), e[Sa] = t.current, pf(e), new lo(t);
  }, _l.version = "19.1.1", _l;
}
var Kg;
function Q_() {
  if (Kg) return Lf.exports;
  Kg = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Lf.exports = X_(), Lf.exports;
}
var $_ = Q_();
const Jg = /* @__PURE__ */ Iy($_);
var K_ = Object.defineProperty, J_ = (n, r, i) => r in n ? K_(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[r] = i, W_ = (n, r, i) => J_(n, r + "", i);
class Zy extends Error {
  constructor(r, i) {
    super(r), W_(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function eb(n, r) {
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
    throw new Zy(c.statusText, c);
  await i.getCharacters();
}
async function tb(n, r) {
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
    throw new Zy(h.message || `Request failed with status ${c.status}`, c);
  }
  await l.getCharacters();
}
var nb = Object.defineProperty, rb = (n, r, i) => r in n ? nb(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[r] = i, Wg = (n, r, i) => rb(n, typeof r != "symbol" ? r + "" : r, i);
class Gy {
  constructor(r, i) {
    Wg(this, "settingsKey"), Wg(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = i;
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
function ur(n) {
  return Array.isArray ? Array.isArray(n) : Yy(n) === "[object Array]";
}
function ab(n) {
  if (typeof n == "string")
    return n;
  let r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function ib(n) {
  return n == null ? "" : ab(n);
}
function Hn(n) {
  return typeof n == "string";
}
function Fy(n) {
  return typeof n == "number";
}
function lb(n) {
  return n === !0 || n === !1 || sb(n) && Yy(n) == "[object Boolean]";
}
function Vy(n) {
  return typeof n == "object";
}
function sb(n) {
  return Vy(n) && n !== null;
}
function sn(n) {
  return n != null;
}
function Hf(n) {
  return !n.trim().length;
}
function Yy(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const ob = "Incorrect 'index' type", ub = (n) => `Invalid value for key ${n}`, cb = (n) => `Pattern length exceeds max of ${n}.`, fb = (n) => `Missing ${n} property in key`, hb = (n) => `Property 'weight' in key '${n}' must be a positive integer`, ev = Object.prototype.hasOwnProperty;
class db {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((l) => {
      let o = Xy(l);
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
function Xy(n) {
  let r = null, i = null, l = null, o = 1, c = null;
  if (Hn(n) || ur(n))
    l = n, r = tv(n), i = oh(n);
  else {
    if (!ev.call(n, "name"))
      throw new Error(fb("name"));
    const h = n.name;
    if (l = h, ev.call(n, "weight") && (o = n.weight, o <= 0))
      throw new Error(hb(h));
    r = tv(h), i = oh(h), c = n.getFn;
  }
  return { path: r, id: i, weight: o, src: l, getFn: c };
}
function tv(n) {
  return ur(n) ? n : n.split(".");
}
function oh(n) {
  return ur(n) ? n.join(".") : n;
}
function pb(n, r) {
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
        if (m === h.length - 1 && (Hn(v) || Fy(v) || lb(v)))
          i.push(ib(v));
        else if (ur(v)) {
          l = !0;
          for (let _ = 0, b = v.length; _ < b; _ += 1)
            o(v[_], h, m + 1);
        } else h.length && o(v, h, m + 1);
      }
  };
  return o(n, Hn(r) ? r.split(".") : r, 0), l ? i : i[0];
}
const mb = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, gb = {
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
}, vb = {
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
}, yb = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: pb,
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
var Ee = {
  ...gb,
  ...mb,
  ...vb,
  ...yb
};
const _b = /[^ ]+/g;
function bb(n = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), l = Math.pow(10, r);
  return {
    get(o) {
      const c = o.match(_b).length;
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
class Nh {
  constructor({
    getFn: r = Ee.getFn,
    fieldNormWeight: i = Ee.fieldNormWeight
  } = {}) {
    this.norm = bb(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    if (!sn(r) || Hf(r))
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
        if (ur(h)) {
          let m = [];
          const g = [{ nestedArrIndex: -1, value: h }];
          for (; g.length; ) {
            const { nestedArrIndex: v, value: _ } = g.pop();
            if (sn(_))
              if (Hn(_) && !Hf(_)) {
                let b = {
                  v: _,
                  i: v,
                  n: this.norm.get(_)
                };
                m.push(b);
              } else ur(_) && _.forEach((b, y) => {
                g.push({
                  nestedArrIndex: y,
                  value: b
                });
              });
          }
          l.$[c] = m;
        } else if (Hn(h) && !Hf(h)) {
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
function Qy(n, r, { getFn: i = Ee.getFn, fieldNormWeight: l = Ee.fieldNormWeight } = {}) {
  const o = new Nh({ getFn: i, fieldNormWeight: l });
  return o.setKeys(n.map(Xy)), o.setSources(r), o.create(), o;
}
function Sb(n, { getFn: r = Ee.getFn, fieldNormWeight: i = Ee.fieldNormWeight } = {}) {
  const { keys: l, records: o } = n, c = new Nh({ getFn: r, fieldNormWeight: i });
  return c.setKeys(l), c.setIndexRecords(o), c;
}
function oo(n, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: l = 0,
  distance: o = Ee.distance,
  ignoreLocation: c = Ee.ignoreLocation
} = {}) {
  const h = r / n.length;
  if (c)
    return h;
  const m = Math.abs(l - i);
  return o ? h + m / o : m ? 1 : h;
}
function xb(n = [], r = Ee.minMatchCharLength) {
  let i = [], l = -1, o = -1, c = 0;
  for (let h = n.length; c < h; c += 1) {
    let m = n[c];
    m && l === -1 ? l = c : !m && l !== -1 && (o = c - 1, o - l + 1 >= r && i.push([l, o]), l = -1);
  }
  return n[c - 1] && c - l >= r && i.push([l, c - 1]), i;
}
const ha = 32;
function Eb(n, r, i, {
  location: l = Ee.location,
  distance: o = Ee.distance,
  threshold: c = Ee.threshold,
  findAllMatches: h = Ee.findAllMatches,
  minMatchCharLength: m = Ee.minMatchCharLength,
  includeMatches: g = Ee.includeMatches,
  ignoreLocation: v = Ee.ignoreLocation
} = {}) {
  if (r.length > ha)
    throw new Error(cb(ha));
  const _ = r.length, b = n.length, y = Math.max(0, Math.min(l, b));
  let p = c, f = y;
  const S = m > 1 || g, C = S ? Array(b) : [];
  let T;
  for (; (T = n.indexOf(r, f)) > -1; ) {
    let R = oo(r, {
      currentLocation: T,
      expectedLocation: y,
      distance: o,
      ignoreLocation: v
    });
    if (p = Math.min(R, p), f = T + _, S) {
      let q = 0;
      for (; q < _; )
        C[T + q] = 1, q += 1;
    }
  }
  f = -1;
  let w = [], N = 1, x = _ + b;
  const D = 1 << _ - 1;
  for (let R = 0; R < _; R += 1) {
    let q = 0, Y = x;
    for (; q < Y; )
      oo(r, {
        errors: R,
        currentLocation: y + Y,
        expectedLocation: y,
        distance: o,
        ignoreLocation: v
      }) <= p ? q = Y : x = Y, Y = Math.floor((x - q) / 2 + q);
    x = Y;
    let G = Math.max(1, y - Y + 1), X = h ? b : Math.min(y + Y, b) + _, W = Array(X + 2);
    W[X + 1] = (1 << R) - 1;
    for (let he = X; he >= G; he -= 1) {
      let Ce = he - 1, H = i[n.charAt(Ce)];
      if (S && (C[Ce] = +!!H), W[he] = (W[he + 1] << 1 | 1) & H, R && (W[he] |= (w[he + 1] | w[he]) << 1 | 1 | w[he + 1]), W[he] & D && (N = oo(r, {
        errors: R,
        currentLocation: Ce,
        expectedLocation: y,
        distance: o,
        ignoreLocation: v
      }), N <= p)) {
        if (p = N, f = Ce, f <= y)
          break;
        G = Math.max(1, 2 * y - f);
      }
    }
    if (oo(r, {
      errors: R + 1,
      currentLocation: y,
      expectedLocation: y,
      distance: o,
      ignoreLocation: v
    }) > p)
      break;
    w = W;
  }
  const M = {
    isMatch: f >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, N)
  };
  if (S) {
    const R = xb(C, m);
    R.length ? g && (M.indices = R) : M.isMatch = !1;
  }
  return M;
}
function Cb(n) {
  let r = {};
  for (let i = 0, l = n.length; i < l; i += 1) {
    const o = n.charAt(i);
    r[o] = (r[o] || 0) | 1 << l - i - 1;
  }
  return r;
}
const Wo = String.prototype.normalize ? ((n) => n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((n) => n);
class $y {
  constructor(r, {
    location: i = Ee.location,
    threshold: l = Ee.threshold,
    distance: o = Ee.distance,
    includeMatches: c = Ee.includeMatches,
    findAllMatches: h = Ee.findAllMatches,
    minMatchCharLength: m = Ee.minMatchCharLength,
    isCaseSensitive: g = Ee.isCaseSensitive,
    ignoreDiacritics: v = Ee.ignoreDiacritics,
    ignoreLocation: _ = Ee.ignoreLocation
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
    }, r = g ? r : r.toLowerCase(), r = v ? Wo(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const b = (p, f) => {
      this.chunks.push({
        pattern: p,
        alphabet: Cb(p),
        startIndex: f
      });
    }, y = this.pattern.length;
    if (y > ha) {
      let p = 0;
      const f = y % ha, S = y - f;
      for (; p < S; )
        b(this.pattern.substr(p, ha), p), p += ha;
      if (f) {
        const C = y - ha;
        b(this.pattern.substr(C), C);
      }
    } else
      b(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: i, ignoreDiacritics: l, includeMatches: o } = this.options;
    if (r = i ? r : r.toLowerCase(), r = l ? Wo(r) : r, this.pattern === r) {
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
    this.chunks.forEach(({ pattern: S, alphabet: C, startIndex: T }) => {
      const { isMatch: w, score: N, indices: x } = Eb(r, S, C, {
        location: c + T,
        distance: h,
        threshold: m,
        findAllMatches: g,
        minMatchCharLength: v,
        includeMatches: o,
        ignoreLocation: _
      });
      w && (p = !0), y += N, w && x && (b = [...b, ...x]);
    });
    let f = {
      isMatch: p,
      score: p ? y / this.chunks.length : 1
    };
    return p && o && (f.indices = b), f;
  }
}
class Ir {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return nv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return nv(r, this.singleRegex);
  }
  search() {
  }
}
function nv(n, r) {
  const i = n.match(r);
  return i ? i[1] : null;
}
class wb extends Ir {
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
class Ab extends Ir {
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
class Db extends Ir {
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
class Tb extends Ir {
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
class Ob extends Ir {
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
class Nb extends Ir {
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
class Ky extends Ir {
  constructor(r, {
    location: i = Ee.location,
    threshold: l = Ee.threshold,
    distance: o = Ee.distance,
    includeMatches: c = Ee.includeMatches,
    findAllMatches: h = Ee.findAllMatches,
    minMatchCharLength: m = Ee.minMatchCharLength,
    isCaseSensitive: g = Ee.isCaseSensitive,
    ignoreDiacritics: v = Ee.ignoreDiacritics,
    ignoreLocation: _ = Ee.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new $y(r, {
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
class Jy extends Ir {
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
const uh = [
  wb,
  Jy,
  Db,
  Tb,
  Nb,
  Ob,
  Ab,
  Ky
], rv = uh.length, Mb = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, kb = "|";
function Rb(n, r = {}) {
  return n.split(kb).map((i) => {
    let l = i.trim().split(Mb).filter((c) => c && !!c.trim()), o = [];
    for (let c = 0, h = l.length; c < h; c += 1) {
      const m = l[c];
      let g = !1, v = -1;
      for (; !g && ++v < rv; ) {
        const _ = uh[v];
        let b = _.isMultiMatch(m);
        b && (o.push(new _(b, r)), g = !0);
      }
      if (!g)
        for (v = -1; ++v < rv; ) {
          const _ = uh[v];
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
const jb = /* @__PURE__ */ new Set([Ky.type, Jy.type]);
class zb {
  constructor(r, {
    isCaseSensitive: i = Ee.isCaseSensitive,
    ignoreDiacritics: l = Ee.ignoreDiacritics,
    includeMatches: o = Ee.includeMatches,
    minMatchCharLength: c = Ee.minMatchCharLength,
    ignoreLocation: h = Ee.ignoreLocation,
    findAllMatches: m = Ee.findAllMatches,
    location: g = Ee.location,
    threshold: v = Ee.threshold,
    distance: _ = Ee.distance
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
    }, r = i ? r : r.toLowerCase(), r = l ? Wo(r) : r, this.pattern = r, this.query = Rb(this.pattern, this.options);
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
    r = o ? r : r.toLowerCase(), r = c ? Wo(r) : r;
    let h = 0, m = [], g = 0;
    for (let v = 0, _ = i.length; v < _; v += 1) {
      const b = i[v];
      m.length = 0, h = 0;
      for (let y = 0, p = b.length; y < p; y += 1) {
        const f = b[y], { isMatch: S, indices: C, score: T } = f.search(r);
        if (S) {
          if (h += 1, g += T, l) {
            const w = f.constructor.type;
            jb.has(w) ? m = [...m, ...C] : m.push(C);
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
const ch = [];
function Lb(...n) {
  ch.push(...n);
}
function fh(n, r) {
  for (let i = 0, l = ch.length; i < l; i += 1) {
    let o = ch[i];
    if (o.condition(n, r))
      return new o(n, r);
  }
  return new $y(n, r);
}
const eu = {
  AND: "$and",
  OR: "$or"
}, hh = {
  PATH: "$path",
  PATTERN: "$val"
}, dh = (n) => !!(n[eu.AND] || n[eu.OR]), Bb = (n) => !!n[hh.PATH], Ub = (n) => !ur(n) && Vy(n) && !dh(n), av = (n) => ({
  [eu.AND]: Object.keys(n).map((r) => ({
    [r]: n[r]
  }))
});
function Wy(n, r, { auto: i = !0 } = {}) {
  const l = (o) => {
    let c = Object.keys(o);
    const h = Bb(o);
    if (!h && c.length > 1 && !dh(o))
      return l(av(o));
    if (Ub(o)) {
      const g = h ? o[hh.PATH] : c[0], v = h ? o[hh.PATTERN] : o[g];
      if (!Hn(v))
        throw new Error(ub(g));
      const _ = {
        keyId: oh(g),
        pattern: v
      };
      return i && (_.searcher = fh(v, r)), _;
    }
    let m = {
      children: [],
      operator: c[0]
    };
    return c.forEach((g) => {
      const v = o[g];
      ur(v) && v.forEach((_) => {
        m.children.push(l(_));
      });
    }), m;
  };
  return dh(n) || (n = av(n)), l(n);
}
function Pb(n, { ignoreFieldNorm: r = Ee.ignoreFieldNorm }) {
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
function Hb(n, r) {
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
function Ib(n, r) {
  r.score = n.score;
}
function qb(n, r, {
  includeMatches: i = Ee.includeMatches,
  includeScore: l = Ee.includeScore
} = {}) {
  const o = [];
  return i && o.push(Hb), l && o.push(Ib), n.map((c) => {
    const { idx: h } = c, m = {
      item: r[h],
      refIndex: h
    };
    return o.length && o.forEach((g) => {
      g(c, m);
    }), m;
  });
}
class _i {
  constructor(r, i = {}, l) {
    this.options = { ...Ee, ...i }, this.options.useExtendedSearch, this._keyStore = new db(this.options.keys), this.setCollection(r, l);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof Nh))
      throw new Error(ob);
    this._myIndex = i || Qy(this.options.keys, this._docs, {
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
    let g = Hn(r) ? Hn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return Pb(g, { ignoreFieldNorm: m }), c && g.sort(h), Fy(i) && i > -1 && (g = g.slice(0, i)), qb(g, this._docs, {
      includeMatches: l,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const i = fh(r, this.options), { records: l } = this._myIndex, o = [];
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
    const i = Wy(r, this.options), l = (m, g, v) => {
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
        else if (m.operator === eu.AND)
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
    const i = fh(r, this.options), { keys: l, records: o } = this._myIndex, c = [];
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
    if (ur(i))
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
_i.version = "7.1.0";
_i.createIndex = Qy;
_i.parseIndex = Sb;
_i.config = Ee;
_i.parseQuery = Wy;
Lb(zb);
async function Zb(n, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[n].callback(...r);
}
async function _e(n, r, { escapeHtml: i = !0 } = {}) {
  await Zb("echo", { severity: n, escapeHtml: (!!i).toString() }, r);
}
function Gb(n, r, {
  characterOverride: i,
  isMarkdown: l,
  isPrompt: o,
  isEdit: c,
  depth: h
}) {
  return H_(n, r, { characterOverride: i, isMarkdown: l, isPrompt: o, isEdit: c, depth: h });
}
function Fb(n, r) {
  return P_(n, r);
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function iv(n, r) {
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
    r % 2 ? iv(Object(i), !0).forEach(function(l) {
      Vb(n, l, i[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : iv(Object(i)).forEach(function(l) {
      Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(i, l));
    });
  }
  return n;
}
function Vo(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vo = function(r) {
    return typeof r;
  } : Vo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Vo(n);
}
function Vb(n, r, i) {
  return r in n ? Object.defineProperty(n, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[r] = i, n;
}
function cr() {
  return cr = Object.assign || function(n) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var l in i)
        Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
    }
    return n;
  }, cr.apply(this, arguments);
}
function Yb(n, r) {
  if (n == null) return {};
  var i = {}, l = Object.keys(n), o, c;
  for (c = 0; c < l.length; c++)
    o = l[c], !(r.indexOf(o) >= 0) && (i[o] = n[o]);
  return i;
}
function Xb(n, r) {
  if (n == null) return {};
  var i = Yb(n, r), l, o;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (o = 0; o < c.length; o++)
      l = c[o], !(r.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(n, l) && (i[l] = n[l]);
  }
  return i;
}
var Qb = "1.15.6";
function or(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var fr = or(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ql = or(/Edge/i), lv = or(/firefox/i), Ml = or(/safari/i) && !or(/chrome/i) && !or(/android/i), Mh = or(/iP(ad|od|hone)/i), e0 = or(/chrome/i) && or(/android/i), t0 = {
  capture: !1,
  passive: !1
};
function Be(n, r, i) {
  n.addEventListener(r, i, !fr && t0);
}
function ze(n, r, i) {
  n.removeEventListener(r, i, !fr && t0);
}
function tu(n, r) {
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
function n0(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function Dn(n, r, i, l) {
  if (n) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? n.parentNode === i && tu(n, r) : tu(n, r)) || l && n === i)
        return n;
      if (n === i) break;
    } while (n = n0(n));
  }
  return null;
}
var sv = /\s+/g;
function an(n, r, i) {
  if (n && r)
    if (n.classList)
      n.classList[i ? "add" : "remove"](r);
    else {
      var l = (" " + n.className + " ").replace(sv, " ").replace(" " + r + " ", " ");
      n.className = (l + (i ? " " + r : "")).replace(sv, " ");
    }
}
function Se(n, r, i) {
  var l = n && n.style;
  if (l) {
    if (i === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (i = n.currentStyle), r === void 0 ? i : i[r];
    !(r in l) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), l[r] = i + (typeof i == "string" ? "" : "px");
  }
}
function mi(n, r) {
  var i = "";
  if (typeof n == "string")
    i = n;
  else
    do {
      var l = Se(n, "transform");
      l && l !== "none" && (i = l + " " + i);
    } while (!r && (n = n.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(i);
}
function r0(n, r, i) {
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
    var c, h, m, g, v, _, b;
    if (n !== window && n.parentNode && n !== In() ? (c = n.getBoundingClientRect(), h = c.top, m = c.left, g = c.bottom, v = c.right, _ = c.height, b = c.width) : (h = 0, m = 0, g = window.innerHeight, v = window.innerWidth, _ = window.innerHeight, b = window.innerWidth), (r || i) && n !== window && (o = o || n.parentNode, !fr))
      do
        if (o && o.getBoundingClientRect && (Se(o, "transform") !== "none" || i && Se(o, "position") !== "static")) {
          var y = o.getBoundingClientRect();
          h -= y.top + parseInt(Se(o, "border-top-width")), m -= y.left + parseInt(Se(o, "border-left-width")), g = h + c.height, v = m + c.width;
          break;
        }
      while (o = o.parentNode);
    if (l && n !== window) {
      var p = mi(o || n), f = p && p.a, S = p && p.d;
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
function ov(n, r, i) {
  for (var l = Hr(n, !0), o = mt(n)[r]; l; ) {
    var c = mt(l)[i], h = void 0;
    if (h = o >= c, !h) return l;
    if (l === In()) break;
    l = Hr(l, !1);
  }
  return !1;
}
function yi(n, r, i, l) {
  for (var o = 0, c = 0, h = n.children; c < h.length; ) {
    if (h[c].style.display !== "none" && h[c] !== xe.ghost && (l || h[c] !== xe.dragged) && Dn(h[c], i.draggable, n, !1)) {
      if (o === r)
        return h[c];
      o++;
    }
    c++;
  }
  return null;
}
function kh(n, r) {
  for (var i = n.lastElementChild; i && (i === xe.ghost || Se(i, "display") === "none" || r && !tu(i, r)); )
    i = i.previousElementSibling;
  return i || null;
}
function yn(n, r) {
  var i = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== xe.clone && (!r || tu(n, r)) && i++;
  return i;
}
function uv(n) {
  var r = 0, i = 0, l = In();
  if (n)
    do {
      var o = mi(n), c = o.a, h = o.d;
      r += n.scrollLeft * c, i += n.scrollTop * h;
    } while (n !== l && (n = n.parentNode));
  return [r, i];
}
function $b(n, r) {
  for (var i in n)
    if (n.hasOwnProperty(i)) {
      for (var l in r)
        if (r.hasOwnProperty(l) && r[l] === n[i][l]) return Number(i);
    }
  return -1;
}
function Hr(n, r) {
  if (!n || !n.getBoundingClientRect) return In();
  var i = n, l = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var o = Se(i);
      if (i.clientWidth < i.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return In();
        if (l || r) return i;
        l = !0;
      }
    }
  while (i = i.parentNode);
  return In();
}
function Kb(n, r) {
  if (n && r)
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  return n;
}
function If(n, r) {
  return Math.round(n.top) === Math.round(r.top) && Math.round(n.left) === Math.round(r.left) && Math.round(n.height) === Math.round(r.height) && Math.round(n.width) === Math.round(r.width);
}
var kl;
function a0(n, r) {
  return function() {
    if (!kl) {
      var i = arguments, l = this;
      i.length === 1 ? n.call(l, i[0]) : n.apply(l, i), kl = setTimeout(function() {
        kl = void 0;
      }, r);
    }
  };
}
function Jb() {
  clearTimeout(kl), kl = void 0;
}
function i0(n, r, i) {
  n.scrollLeft += r, n.scrollTop += i;
}
function l0(n) {
  var r = window.Polymer, i = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(n).cloneNode(!0) : i ? i(n).clone(!0)[0] : n.cloneNode(!0);
}
function s0(n, r, i) {
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
function Wb() {
  var n = [], r;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(o) {
          if (!(Se(o, "display") === "none" || o === xe.ghost)) {
            n.push({
              target: o,
              rect: mt(o)
            });
            var c = qn({}, n[n.length - 1].rect);
            if (o.thisAnimationDuration) {
              var h = mi(o, !0);
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
      n.splice($b(n, {
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
        var g = 0, v = m.target, _ = v.fromRect, b = mt(v), y = v.prevFromRect, p = v.prevToRect, f = m.rect, S = mi(v, !0);
        S && (b.top -= S.f, b.left -= S.e), v.toRect = b, v.thisAnimationDuration && If(y, b) && !If(_, b) && // Make sure animatingRect is on line between toRect & fromRect
        (f.top - b.top) / (f.left - b.left) === (_.top - b.top) / (_.left - b.left) && (g = tS(f, y, p, o.options)), If(b, _) || (v.prevFromRect = _, v.prevToRect = b, g || (g = o.options.animation), o.animate(v, f, b, g)), g && (c = !0, h = Math.max(h, g), clearTimeout(v.animationResetTimer), v.animationResetTimer = setTimeout(function() {
          v.animationTime = 0, v.prevFromRect = null, v.fromRect = null, v.prevToRect = null, v.thisAnimationDuration = null;
        }, g), v.thisAnimationDuration = g);
      }), clearTimeout(r), c ? r = setTimeout(function() {
        typeof l == "function" && l();
      }, h) : typeof l == "function" && l(), n = [];
    },
    animate: function(l, o, c, h) {
      if (h) {
        Se(l, "transition", ""), Se(l, "transform", "");
        var m = mi(this.el), g = m && m.a, v = m && m.d, _ = (o.left - c.left) / (g || 1), b = (o.top - c.top) / (v || 1);
        l.animatingX = !!_, l.animatingY = !!b, Se(l, "transform", "translate3d(" + _ + "px," + b + "px,0)"), this.forRepaintDummy = eS(l), Se(l, "transition", "transform " + h + "ms" + (this.options.easing ? " " + this.options.easing : "")), Se(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          Se(l, "transition", ""), Se(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, h);
      }
    }
  };
}
function eS(n) {
  return n.offsetWidth;
}
function tS(n, r, i, l) {
  return Math.sqrt(Math.pow(r.top - n.top, 2) + Math.pow(r.left - n.left, 2)) / Math.sqrt(Math.pow(r.top - i.top, 2) + Math.pow(r.left - i.left, 2)) * l.animation;
}
var si = [], qf = {
  initializeByDefault: !0
}, Zl = {
  mount: function(r) {
    for (var i in qf)
      qf.hasOwnProperty(i) && !(i in r) && (r[i] = qf[i]);
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
        v.sortable = r, v.options = r.options, r[g] = v, cr(l, v.defaults);
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
      typeof o.eventProperties == "function" && cr(l, o.eventProperties.call(i[o.pluginName], r));
    }), l;
  },
  modifyOption: function(r, i, l) {
    var o;
    return si.forEach(function(c) {
      r[c.pluginName] && c.optionListeners && typeof c.optionListeners[i] == "function" && (o = c.optionListeners[i].call(r[c.pluginName], l));
    }), o;
  }
};
function nS(n) {
  var r = n.sortable, i = n.rootEl, l = n.name, o = n.targetEl, c = n.cloneEl, h = n.toEl, m = n.fromEl, g = n.oldIndex, v = n.newIndex, _ = n.oldDraggableIndex, b = n.newDraggableIndex, y = n.originalEvent, p = n.putSortable, f = n.extraEventProperties;
  if (r = r || i && i[Ft], !!r) {
    var S, C = r.options, T = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !fr && !ql ? S = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(l, !0, !0)), S.to = h || i, S.from = m || i, S.item = o || i, S.clone = c, S.oldIndex = g, S.newIndex = v, S.oldDraggableIndex = _, S.newDraggableIndex = b, S.originalEvent = y, S.pullMode = p ? p.lastPutMode : void 0;
    var w = qn(qn({}, f), Zl.getEventProperties(l, r));
    for (var N in w)
      S[N] = w[N];
    i && i.dispatchEvent(S), C[T] && C[T].call(r, S);
  }
}
var rS = ["evt"], Zt = function(r, i) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = l.evt, c = Xb(l, rS);
  Zl.pluginEvent.bind(xe)(r, i, qn({
    dragEl: ae,
    parentEl: ot,
    ghostEl: De,
    rootEl: tt,
    nextEl: ca,
    lastDownEl: Yo,
    cloneEl: at,
    cloneHidden: Pr,
    dragStarted: Dl,
    putSortable: Nt,
    activeSortable: xe.active,
    originalEvent: o,
    oldIndex: di,
    oldDraggableIndex: Rl,
    newIndex: ln,
    newDraggableIndex: Ur,
    hideGhostForTarget: f0,
    unhideGhostForTarget: h0,
    cloneNowHidden: function() {
      Pr = !0;
    },
    cloneNowShown: function() {
      Pr = !1;
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
  nS(qn({
    putSortable: Nt,
    cloneEl: at,
    targetEl: ae,
    rootEl: tt,
    oldIndex: di,
    oldDraggableIndex: Rl,
    newIndex: ln,
    newDraggableIndex: Ur
  }, n));
}
var ae, ot, De, tt, ca, Yo, at, Pr, di, ln, Rl, Ur, uo, Nt, hi = !1, nu = !1, ru = [], oa, wn, Zf, Gf, cv, fv, Dl, oi, jl, zl = !1, co = !1, Xo, jt, Ff = [], ph = !1, au = [], mu = typeof document < "u", fo = Mh, hv = ql || fr ? "cssFloat" : "float", aS = mu && !e0 && !Mh && "draggable" in document.createElement("div"), o0 = (function() {
  if (mu) {
    if (fr)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
})(), u0 = function(r, i) {
  var l = Se(r), o = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), c = yi(r, 0, i), h = yi(r, 1, i), m = c && Se(c), g = h && Se(h), v = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + mt(c).width, _ = g && parseInt(g.marginLeft) + parseInt(g.marginRight) + mt(h).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && m.float && m.float !== "none") {
    var b = m.float === "left" ? "left" : "right";
    return h && (g.clear === "both" || g.clear === b) ? "vertical" : "horizontal";
  }
  return c && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || v >= o && l[hv] === "none" || h && l[hv] === "none" && v + _ > o) ? "vertical" : "horizontal";
}, iS = function(r, i, l) {
  var o = l ? r.left : r.top, c = l ? r.right : r.bottom, h = l ? r.width : r.height, m = l ? i.left : i.top, g = l ? i.right : i.bottom, v = l ? i.width : i.height;
  return o === m || c === g || o + h / 2 === m + v / 2;
}, lS = function(r, i) {
  var l;
  return ru.some(function(o) {
    var c = o[Ft].options.emptyInsertThreshold;
    if (!(!c || kh(o))) {
      var h = mt(o), m = r >= h.left - c && r <= h.right + c, g = i >= h.top - c && i <= h.bottom + c;
      if (m && g)
        return l = o;
    }
  }), l;
}, c0 = function(r) {
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
  (!o || Vo(o) != "object") && (o = {
    name: o
  }), l.name = o.name, l.checkPull = i(o.pull, !0), l.checkPut = i(o.put), l.revertClone = o.revertClone, r.group = l;
}, f0 = function() {
  !o0 && De && Se(De, "display", "none");
}, h0 = function() {
  !o0 && De && Se(De, "display", "");
};
mu && !e0 && document.addEventListener("click", function(n) {
  if (nu)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), nu = !1, !1;
}, !0);
var ua = function(r) {
  if (ae) {
    r = r.touches ? r.touches[0] : r;
    var i = lS(r.clientX, r.clientY);
    if (i) {
      var l = {};
      for (var o in r)
        r.hasOwnProperty(o) && (l[o] = r[o]);
      l.target = l.rootEl = i, l.preventDefault = void 0, l.stopPropagation = void 0, i[Ft]._onDragOver(l);
    }
  }
}, sS = function(r) {
  ae && ae.parentNode[Ft]._isOutsideThisEl(r.target);
};
function xe(n, r) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));
  this.el = n, this.options = r = cr({}, r), n[Ft] = this;
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
      return u0(n, this.options);
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
    supportPointer: xe.supportPointer !== !1 && "PointerEvent" in window && (!Ml || Mh),
    emptyInsertThreshold: 5
  };
  Zl.initializePlugins(this, n, i);
  for (var l in i)
    !(l in r) && (r[l] = i[l]);
  c0(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : aS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Be(n, "pointerdown", this._onTapStart) : (Be(n, "mousedown", this._onTapStart), Be(n, "touchstart", this._onTapStart)), this.nativeDraggable && (Be(n, "dragover", this), Be(n, "dragenter", this)), ru.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), cr(this, Wb());
}
xe.prototype = /** @lends Sortable.prototype */
{
  constructor: xe,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (oi = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, ae) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, l = this.el, o = this.options, c = o.preventOnFilter, h = r.type, m = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, g = (m || r).target, v = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || g, _ = o.filter;
      if (mS(l), !ae && !(/mousedown|pointerdown/.test(h) && r.button !== 0 || o.disabled) && !v.isContentEditable && !(!this.nativeDraggable && Ml && g && g.tagName.toUpperCase() === "SELECT") && (g = Dn(g, o.draggable, l, !1), !(g && g.animated) && Yo !== g)) {
        if (di = yn(g), Rl = yn(g, o.draggable), typeof _ == "function") {
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
    if (l && !ae && l.parentNode === c) {
      var v = mt(l);
      if (tt = c, ae = l, ot = ae.parentNode, ca = ae.nextSibling, Yo = l, uo = h.group, xe.dragged = ae, oa = {
        target: ae,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, cv = oa.clientX - v.left, fv = oa.clientY - v.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, ae.style["will-change"] = "all", g = function() {
        if (Zt("delayEnded", o, {
          evt: r
        }), xe.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !lv && o.nativeDraggable && (ae.draggable = !0), o._triggerDragStart(r, i), Bt({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), an(ae, h.chosenClass, !0);
      }, h.ignore.split(",").forEach(function(_) {
        r0(ae, _.trim(), Vf);
      }), Be(m, "dragover", ua), Be(m, "mousemove", ua), Be(m, "touchmove", ua), h.supportPointer ? (Be(m, "pointerup", o._onDrop), !this.nativeDraggable && Be(m, "pointercancel", o._onDrop)) : (Be(m, "mouseup", o._onDrop), Be(m, "touchend", o._onDrop), Be(m, "touchcancel", o._onDrop)), lv && this.nativeDraggable && (this.options.touchStartThreshold = 4, ae.draggable = !0), Zt("delayStart", this, {
        evt: r
      }), h.delay && (!h.delayOnTouchOnly || i) && (!this.nativeDraggable || !(ql || fr))) {
        if (xe.eventCanceled) {
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
    ae && Vf(ae), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    ze(r, "mouseup", this._disableDelayedDrag), ze(r, "touchend", this._disableDelayedDrag), ze(r, "touchcancel", this._disableDelayedDrag), ze(r, "pointerup", this._disableDelayedDrag), ze(r, "pointercancel", this._disableDelayedDrag), ze(r, "mousemove", this._delayedDragTouchMoveHandler), ze(r, "touchmove", this._delayedDragTouchMoveHandler), ze(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Be(document, "pointermove", this._onTouchMove) : i ? Be(document, "touchmove", this._onTouchMove) : Be(document, "mousemove", this._onTouchMove) : (Be(ae, "dragend", this), Be(tt, "dragstart", this._onDragStart));
    try {
      document.selection ? Qo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (hi = !1, tt && ae) {
      Zt("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Be(document, "dragover", sS);
      var l = this.options;
      !r && an(ae, l.dragClass, !1), an(ae, l.ghostClass, !0), xe.active = this, r && this._appendGhost(), Bt({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (wn) {
      this._lastX = wn.clientX, this._lastY = wn.clientY, f0();
      for (var r = document.elementFromPoint(wn.clientX, wn.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(wn.clientX, wn.clientY), r !== i); )
        i = r;
      if (ae.parentNode[Ft]._isOutsideThisEl(r), i)
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
        } while (i = n0(i));
      h0();
    }
  },
  _onTouchMove: function(r) {
    if (oa) {
      var i = this.options, l = i.fallbackTolerance, o = i.fallbackOffset, c = r.touches ? r.touches[0] : r, h = De && mi(De, !0), m = De && h && h.a, g = De && h && h.d, v = fo && jt && uv(jt), _ = (c.clientX - oa.clientX + o.x) / (m || 1) + (v ? v[0] - Ff[0] : 0) / (m || 1), b = (c.clientY - oa.clientY + o.y) / (g || 1) + (v ? v[1] - Ff[1] : 0) / (g || 1);
      if (!xe.active && !hi) {
        if (l && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < l)
          return;
        this._onDragStart(r, !0);
      }
      if (De) {
        h ? (h.e += _ - (Zf || 0), h.f += b - (Gf || 0)) : h = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: _,
          f: b
        };
        var y = "matrix(".concat(h.a, ",").concat(h.b, ",").concat(h.c, ",").concat(h.d, ",").concat(h.e, ",").concat(h.f, ")");
        Se(De, "webkitTransform", y), Se(De, "mozTransform", y), Se(De, "msTransform", y), Se(De, "transform", y), Zf = _, Gf = b, wn = c;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!De) {
      var r = this.options.fallbackOnBody ? document.body : tt, i = mt(ae, !0, fo, !0, r), l = this.options;
      if (fo) {
        for (jt = r; Se(jt, "position") === "static" && Se(jt, "transform") === "none" && jt !== document; )
          jt = jt.parentNode;
        jt !== document.body && jt !== document.documentElement ? (jt === document && (jt = In()), i.top += jt.scrollTop, i.left += jt.scrollLeft) : jt = In(), Ff = uv(jt);
      }
      De = ae.cloneNode(!0), an(De, l.ghostClass, !1), an(De, l.fallbackClass, !0), an(De, l.dragClass, !0), Se(De, "transition", ""), Se(De, "transform", ""), Se(De, "box-sizing", "border-box"), Se(De, "margin", 0), Se(De, "top", i.top), Se(De, "left", i.left), Se(De, "width", i.width), Se(De, "height", i.height), Se(De, "opacity", "0.8"), Se(De, "position", fo ? "absolute" : "fixed"), Se(De, "zIndex", "100000"), Se(De, "pointerEvents", "none"), xe.ghost = De, r.appendChild(De), Se(De, "transform-origin", cv / parseInt(De.style.width) * 100 + "% " + fv / parseInt(De.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var l = this, o = r.dataTransfer, c = l.options;
    if (Zt("dragStart", this, {
      evt: r
    }), xe.eventCanceled) {
      this._onDrop();
      return;
    }
    Zt("setupClone", this), xe.eventCanceled || (at = l0(ae), at.removeAttribute("id"), at.draggable = !1, at.style["will-change"] = "", this._hideClone(), an(at, this.options.chosenClass, !1), xe.clone = at), l.cloneId = Qo(function() {
      Zt("clone", l), !xe.eventCanceled && (l.options.removeCloneOnHide || tt.insertBefore(at, ae), l._hideClone(), Bt({
        sortable: l,
        name: "clone"
      }));
    }), !i && an(ae, c.dragClass, !0), i ? (nu = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (ze(document, "mouseup", l._onDrop), ze(document, "touchend", l._onDrop), ze(document, "touchcancel", l._onDrop), o && (o.effectAllowed = "move", c.setData && c.setData.call(l, o, ae)), Be(document, "drop", l), Se(ae, "transform", "translateZ(0)")), hi = !0, l._dragStartId = Qo(l._dragStarted.bind(l, i, r)), Be(document, "selectstart", l), Dl = !0, window.getSelection().removeAllRanges(), Ml && Se(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, l = r.target, o, c, h, m = this.options, g = m.group, v = xe.active, _ = uo === g, b = m.sort, y = Nt || v, p, f = this, S = !1;
    if (ph) return;
    function C(ue, Le) {
      Zt(ue, f, qn({
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
        onMove: function(J, le) {
          return ho(tt, i, ae, o, J, mt(J), r, le);
        },
        changed: N
      }, Le));
    }
    function T() {
      C("dragOverAnimationCapture"), f.captureAnimationState(), f !== y && y.captureAnimationState();
    }
    function w(ue) {
      return C("dragOverCompleted", {
        insertion: ue
      }), ue && (_ ? v._hideClone() : v._showClone(f), f !== y && (an(ae, Nt ? Nt.options.ghostClass : v.options.ghostClass, !1), an(ae, m.ghostClass, !0)), Nt !== f && f !== xe.active ? Nt = f : f === xe.active && Nt && (Nt = null), y === f && (f._ignoreWhileAnimating = l), f.animateAll(function() {
        C("dragOverAnimationComplete"), f._ignoreWhileAnimating = null;
      }), f !== y && (y.animateAll(), y._ignoreWhileAnimating = null)), (l === ae && !ae.animated || l === i && !l.animated) && (oi = null), !m.dragoverBubble && !r.rootEl && l !== document && (ae.parentNode[Ft]._isOutsideThisEl(r.target), !ue && ua(r)), !m.dragoverBubble && r.stopPropagation && r.stopPropagation(), S = !0;
    }
    function N() {
      ln = yn(ae), Ur = yn(ae, m.draggable), Bt({
        sortable: f,
        name: "change",
        toEl: i,
        newIndex: ln,
        newDraggableIndex: Ur,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), l = Dn(l, m.draggable, i, !0), C("dragOver"), xe.eventCanceled) return S;
    if (ae.contains(r.target) || l.animated && l.animatingX && l.animatingY || f._ignoreWhileAnimating === l)
      return w(!1);
    if (nu = !1, v && !m.disabled && (_ ? b || (h = ot !== tt) : Nt === this || (this.lastPutMode = uo.checkPull(this, v, ae, r)) && g.checkPut(this, v, ae, r))) {
      if (p = this._getDirection(r, l) === "vertical", o = mt(ae), C("dragOverValid"), xe.eventCanceled) return S;
      if (h)
        return ot = tt, T(), this._hideClone(), C("revert"), xe.eventCanceled || (ca ? tt.insertBefore(ae, ca) : tt.appendChild(ae)), w(!0);
      var x = kh(i, m.draggable);
      if (!x || fS(r, p, this) && !x.animated) {
        if (x === ae)
          return w(!1);
        if (x && i === r.target && (l = x), l && (c = mt(l)), ho(tt, i, ae, o, l, c, r, !!l) !== !1)
          return T(), x && x.nextSibling ? i.insertBefore(ae, x.nextSibling) : i.appendChild(ae), ot = i, N(), w(!0);
      } else if (x && cS(r, p, this)) {
        var D = yi(i, 0, m, !0);
        if (D === ae)
          return w(!1);
        if (l = D, c = mt(l), ho(tt, i, ae, o, l, c, r, !1) !== !1)
          return T(), i.insertBefore(ae, D), ot = i, N(), w(!0);
      } else if (l.parentNode === i) {
        c = mt(l);
        var M = 0, R, q = ae.parentNode !== i, Y = !iS(ae.animated && ae.toRect || o, l.animated && l.toRect || c, p), G = p ? "top" : "left", X = ov(l, "top", "top") || ov(ae, "top", "top"), W = X ? X.scrollTop : void 0;
        oi !== l && (R = c[G], zl = !1, co = !Y && m.invertSwap || q), M = hS(r, l, c, p, Y ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, co, oi === l);
        var oe;
        if (M !== 0) {
          var he = yn(ae);
          do
            he -= M, oe = ot.children[he];
          while (oe && (Se(oe, "display") === "none" || oe === De));
        }
        if (M === 0 || oe === l)
          return w(!1);
        oi = l, jl = M;
        var Ce = l.nextElementSibling, H = !1;
        H = M === 1;
        var te = ho(tt, i, ae, o, l, c, r, H);
        if (te !== !1)
          return (te === 1 || te === -1) && (H = te === 1), ph = !0, setTimeout(uS, 30), T(), H && !Ce ? i.appendChild(ae) : l.parentNode.insertBefore(ae, H ? Ce : l), X && i0(X, 0, W - X.scrollTop), ot = ae.parentNode, R !== void 0 && !co && (Xo = Math.abs(R - mt(l)[G])), N(), w(!0);
      }
      if (i.contains(ae))
        return w(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    ze(document, "mousemove", this._onTouchMove), ze(document, "touchmove", this._onTouchMove), ze(document, "pointermove", this._onTouchMove), ze(document, "dragover", ua), ze(document, "mousemove", ua), ze(document, "touchmove", ua);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    ze(r, "mouseup", this._onDrop), ze(r, "touchend", this._onDrop), ze(r, "pointerup", this._onDrop), ze(r, "pointercancel", this._onDrop), ze(r, "touchcancel", this._onDrop), ze(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var i = this.el, l = this.options;
    if (ln = yn(ae), Ur = yn(ae, l.draggable), Zt("drop", this, {
      evt: r
    }), ot = ae && ae.parentNode, ln = yn(ae), Ur = yn(ae, l.draggable), xe.eventCanceled) {
      this._nulling();
      return;
    }
    hi = !1, co = !1, zl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), mh(this.cloneId), mh(this._dragStartId), this.nativeDraggable && (ze(document, "drop", this), ze(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ml && Se(document.body, "user-select", ""), Se(ae, "transform", ""), r && (Dl && (r.cancelable && r.preventDefault(), !l.dropBubble && r.stopPropagation()), De && De.parentNode && De.parentNode.removeChild(De), (tt === ot || Nt && Nt.lastPutMode !== "clone") && at && at.parentNode && at.parentNode.removeChild(at), ae && (this.nativeDraggable && ze(ae, "dragend", this), Vf(ae), ae.style["will-change"] = "", Dl && !hi && an(ae, Nt ? Nt.options.ghostClass : this.options.ghostClass, !1), an(ae, this.options.chosenClass, !1), Bt({
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
    })), xe.active && ((ln == null || ln === -1) && (ln = di, Ur = Rl), Bt({
      sortable: this,
      name: "end",
      toEl: ot,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Zt("nulling", this), tt = ae = ot = De = ca = at = Yo = Pr = oa = wn = Dl = ln = Ur = di = Rl = oi = jl = Nt = uo = xe.dragged = xe.ghost = xe.clone = xe.active = null, au.forEach(function(r) {
      r.checked = !0;
    }), au.length = Zf = Gf = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        ae && (this._onDragOver(r), oS(r));
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
      i = l[o], Dn(i, h.draggable, this.el, !1) && r.push(i.getAttribute(h.dataIdAttr) || pS(i));
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
    var o = Zl.modifyOption(this, r, i);
    typeof o < "u" ? l[r] = o : l[r] = i, r === "group" && c0(l);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Zt("destroy", this);
    var r = this.el;
    r[Ft] = null, ze(r, "mousedown", this._onTapStart), ze(r, "touchstart", this._onTapStart), ze(r, "pointerdown", this._onTapStart), this.nativeDraggable && (ze(r, "dragover", this), ze(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), ru.splice(ru.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!Pr) {
      if (Zt("hideClone", this), xe.eventCanceled) return;
      Se(at, "display", "none"), this.options.removeCloneOnHide && at.parentNode && at.parentNode.removeChild(at), Pr = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Pr) {
      if (Zt("showClone", this), xe.eventCanceled) return;
      ae.parentNode == tt && !this.options.group.revertClone ? tt.insertBefore(at, ae) : ca ? tt.insertBefore(at, ca) : tt.appendChild(at), this.options.group.revertClone && this.animate(ae, at), Se(at, "display", ""), Pr = !1;
    }
  }
};
function oS(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function ho(n, r, i, l, o, c, h, m) {
  var g, v = n[Ft], _ = v.options.onMove, b;
  return window.CustomEvent && !fr && !ql ? g = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (g = document.createEvent("Event"), g.initEvent("move", !0, !0)), g.to = r, g.from = n, g.dragged = i, g.draggedRect = l, g.related = o || r, g.relatedRect = c || mt(r), g.willInsertAfter = m, g.originalEvent = h, n.dispatchEvent(g), _ && (b = _.call(v, g, h)), b;
}
function Vf(n) {
  n.draggable = !1;
}
function uS() {
  ph = !1;
}
function cS(n, r, i) {
  var l = mt(yi(i.el, 0, i.options, !0)), o = s0(i.el, i.options, De), c = 10;
  return r ? n.clientX < o.left - c || n.clientY < l.top && n.clientX < l.right : n.clientY < o.top - c || n.clientY < l.bottom && n.clientX < l.left;
}
function fS(n, r, i) {
  var l = mt(kh(i.el, i.options.draggable)), o = s0(i.el, i.options, De), c = 10;
  return r ? n.clientX > o.right + c || n.clientY > l.bottom && n.clientX > l.left : n.clientY > o.bottom + c || n.clientX > l.right && n.clientY > l.top;
}
function hS(n, r, i, l, o, c, h, m) {
  var g = l ? n.clientY : n.clientX, v = l ? i.height : i.width, _ = l ? i.top : i.left, b = l ? i.bottom : i.right, y = !1;
  if (!h) {
    if (m && Xo < v * o) {
      if (!zl && (jl === 1 ? g > _ + v * c / 2 : g < b - v * c / 2) && (zl = !0), zl)
        y = !0;
      else if (jl === 1 ? g < _ + Xo : g > b - Xo)
        return -jl;
    } else if (g > _ + v * (1 - o) / 2 && g < b - v * (1 - o) / 2)
      return dS(r);
  }
  return y = y || h, y && (g < _ + v * c / 2 || g > b - v * c / 2) ? g > _ + v / 2 ? 1 : -1 : 0;
}
function dS(n) {
  return yn(ae) < yn(n) ? 1 : -1;
}
function pS(n) {
  for (var r = n.tagName + n.className + n.src + n.href + n.textContent, i = r.length, l = 0; i--; )
    l += r.charCodeAt(i);
  return l.toString(36);
}
function mS(n) {
  au.length = 0;
  for (var r = n.getElementsByTagName("input"), i = r.length; i--; ) {
    var l = r[i];
    l.checked && au.push(l);
  }
}
function Qo(n) {
  return setTimeout(n, 0);
}
function mh(n) {
  return clearTimeout(n);
}
mu && Be(document, "touchmove", function(n) {
  (xe.active || hi) && n.cancelable && n.preventDefault();
});
xe.utils = {
  on: Be,
  off: ze,
  css: Se,
  find: r0,
  is: function(r, i) {
    return !!Dn(r, i, r, !1);
  },
  extend: Kb,
  throttle: a0,
  closest: Dn,
  toggleClass: an,
  clone: l0,
  index: yn,
  nextTick: Qo,
  cancelNextTick: mh,
  detectDirection: u0,
  getChild: yi,
  expando: Ft
};
xe.get = function(n) {
  return n[Ft];
};
xe.mount = function() {
  for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (xe.utils = qn(qn({}, xe.utils), l.utils)), Zl.mount(l);
  });
};
xe.create = function(n, r) {
  return new xe(n, r);
};
xe.version = Qb;
var pt = [], Tl, gh, vh = !1, Yf, Xf, iu, Ol;
function gS() {
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
      this.sortable.nativeDraggable ? ze(document, "dragover", this._handleAutoScroll) : (ze(document, "pointermove", this._handleFallbackAutoScroll), ze(document, "touchmove", this._handleFallbackAutoScroll), ze(document, "mousemove", this._handleFallbackAutoScroll)), dv(), $o(), Jb();
    },
    nulling: function() {
      iu = gh = Tl = vh = Ol = Yf = Xf = null, pt.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, l) {
      var o = this, c = (i.touches ? i.touches[0] : i).clientX, h = (i.touches ? i.touches[0] : i).clientY, m = document.elementFromPoint(c, h);
      if (iu = i, l || this.options.forceAutoScrollFallback || ql || fr || Ml) {
        Qf(i, this.options, m, l);
        var g = Hr(m, !0);
        vh && (!Ol || c !== Yf || h !== Xf) && (Ol && dv(), Ol = setInterval(function() {
          var v = Hr(document.elementFromPoint(c, h), !0);
          v !== g && (g = v, $o()), Qf(i, o.options, v, l);
        }, 10), Yf = c, Xf = h);
      } else {
        if (!this.options.bubbleScroll || Hr(m, !0) === In()) {
          $o();
          return;
        }
        Qf(i, this.options, Hr(m, !1), !1);
      }
    }
  }, cr(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function $o() {
  pt.forEach(function(n) {
    clearInterval(n.pid);
  }), pt = [];
}
function dv() {
  clearInterval(Ol);
}
var Qf = a0(function(n, r, i, l) {
  if (r.scroll) {
    var o = (n.touches ? n.touches[0] : n).clientX, c = (n.touches ? n.touches[0] : n).clientY, h = r.scrollSensitivity, m = r.scrollSpeed, g = In(), v = !1, _;
    gh !== i && (gh = i, $o(), Tl = r.scroll, _ = r.scrollFn, Tl === !0 && (Tl = Hr(i, !0)));
    var b = 0, y = Tl;
    do {
      var p = y, f = mt(p), S = f.top, C = f.bottom, T = f.left, w = f.right, N = f.width, x = f.height, D = void 0, M = void 0, R = p.scrollWidth, q = p.scrollHeight, Y = Se(p), G = p.scrollLeft, X = p.scrollTop;
      p === g ? (D = N < R && (Y.overflowX === "auto" || Y.overflowX === "scroll" || Y.overflowX === "visible"), M = x < q && (Y.overflowY === "auto" || Y.overflowY === "scroll" || Y.overflowY === "visible")) : (D = N < R && (Y.overflowX === "auto" || Y.overflowX === "scroll"), M = x < q && (Y.overflowY === "auto" || Y.overflowY === "scroll"));
      var W = D && (Math.abs(w - o) <= h && G + N < R) - (Math.abs(T - o) <= h && !!G), oe = M && (Math.abs(C - c) <= h && X + x < q) - (Math.abs(S - c) <= h && !!X);
      if (!pt[b])
        for (var he = 0; he <= b; he++)
          pt[he] || (pt[he] = {});
      (pt[b].vx != W || pt[b].vy != oe || pt[b].el !== p) && (pt[b].el = p, pt[b].vx = W, pt[b].vy = oe, clearInterval(pt[b].pid), (W != 0 || oe != 0) && (v = !0, pt[b].pid = setInterval((function() {
        l && this.layer === 0 && xe.active._onTouchMove(iu);
        var Ce = pt[this.layer].vy ? pt[this.layer].vy * m : 0, H = pt[this.layer].vx ? pt[this.layer].vx * m : 0;
        typeof _ == "function" && _.call(xe.dragged.parentNode[Ft], H, Ce, n, iu, pt[this.layer].el) !== "continue" || i0(pt[this.layer].el, H, Ce);
      }).bind({
        layer: b
      }), 24))), b++;
    } while (r.bubbleScroll && y !== g && (y = Hr(y, !1)));
    vh = v;
  }
}, 30), d0 = function(r) {
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
function Rh() {
}
Rh.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var i = r.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(r) {
    var i = r.dragEl, l = r.putSortable;
    this.sortable.captureAnimationState(), l && l.captureAnimationState();
    var o = yi(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(i, o) : this.sortable.el.appendChild(i), this.sortable.animateAll(), l && l.animateAll();
  },
  drop: d0
};
cr(Rh, {
  pluginName: "revertOnSpill"
});
function jh() {
}
jh.prototype = {
  onSpill: function(r) {
    var i = r.dragEl, l = r.putSortable, o = l || this.sortable;
    o.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), o.animateAll();
  },
  drop: d0
};
cr(jh, {
  pluginName: "removeOnSpill"
});
xe.mount(new gS());
xe.mount(jh, Rh);
async function vS({
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
    if (v = Fb(r, h), !v)
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
const Ko = `=======

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

=======`, yh = `{{#if characters}}
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
{{/if}}`, p0 = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

Example:
Generated content for the field goes here.`, zh = "{{activeFormatInstructions}}", m0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, g0 = `### {{character.name}}
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
  {{else}}*Not provided*{{/if}}`, Ll = `{{#is_not_empty fields}}
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
{{/is_not_empty}}`, yS = `## User's Persona Description
name: {{user}}
{{persona}}`, Lh = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, _S = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", bS = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, SS = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
function xS(n) {
  let r = null;
  for (const i of n.matchAll(SS))
    r = i[1].trim();
  return r;
}
function v0(n) {
  const r = n.match(/^```(?:\w+\n|\n)?([\s\S]*?)```$/);
  return r && !r[1].includes("```") ? r[1].trim() : n;
}
const ES = /^\s*<(think|thinking|reasoning)>[\s\S]*?(?:<\/\1>|$)/i;
function Gl(n) {
  return n.replace(ES, "");
}
function pv(n, r = 120) {
  const i = n.trim().replace(/\s+/g, " ");
  return `It starts with: "${i.slice(0, r)}"${i.length > r ? "…" : ""}`;
}
function CS(n) {
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
function wS(n) {
  const r = Gl(n).trim(), i = xS(r);
  let l;
  for (const c of i === null ? [r] : [r, i])
    try {
      return JSON.parse(c);
    } catch (h) {
      l = h;
    }
  const o = CS(r);
  for (let c = o.length - 1; c >= 0; c--)
    try {
      return JSON.parse(o[c]);
    } catch {
    }
  throw l;
}
function y0(n) {
  return v0(Gl(n).trim());
}
function AS(n, r) {
  const i = r[0];
  return i === "“" || i === "«" ? !0 : (i === '"' || i === "*") && n.split(i).length % 2 === 1;
}
function DS(n, r) {
  return /[.!?…]["'”’»)\]*]*$/.test(n) && (new RegExp("^\\p{L}", "u").test(r) || AS(n, r)) ? `${n} ${r}` : n + r;
}
function TS(n, r) {
  const i = n.trim();
  r = Gl(r);
  const l = y0(r);
  if (l.startsWith(i))
    return l;
  const o = v0((i + r).trim());
  return o.startsWith(i) ? DS(i, o.slice(i.length)) : i + o;
}
var po = { exports: {} }, mo = { exports: {} }, An = {}, Gt = {}, mv;
function Vt() {
  if (mv) return Gt;
  mv = 1, Gt.__esModule = !0, Gt.extend = o, Gt.indexOf = g, Gt.escapeExpression = v, Gt.isEmpty = _, Gt.createFrame = b, Gt.blockParams = y, Gt.appendContextPath = p;
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
      for (var C in arguments[S])
        Object.prototype.hasOwnProperty.call(arguments[S], C) && (f[C] = arguments[S][C]);
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
    for (var C = 0, T = f.length; C < T; C++)
      if (f[C] === S)
        return C;
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
var go = { exports: {} }, gv;
function Nn() {
  return gv || (gv = 1, (function(n, r) {
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
  })(go, go.exports)), go.exports;
}
var bl = {}, vo = { exports: {} }, vv;
function OS() {
  return vv || (vv = 1, (function(n, r) {
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
  })(vo, vo.exports)), vo.exports;
}
var yo = { exports: {} }, yv;
function NS() {
  return yv || (yv = 1, (function(n, r) {
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
        function S(x, D, M) {
          p && (p.key = x, p.index = D, p.first = D === 0, p.last = !!M, f && (p.contextPath = f + x)), y = y + v(m[x], {
            data: p,
            blockParams: l.blockParams([m[x], x], [f + x, null])
          });
        }
        if (m && typeof m == "object")
          if (l.isArray(m))
            for (var C = m.length; b < C; b++)
              b in m && S(b, b, b === m.length - 1);
          else if (typeof Symbol == "function" && m[Symbol.iterator]) {
            for (var T = [], w = m[Symbol.iterator](), N = w.next(); !N.done; N = w.next())
              T.push(N.value);
            m = T;
            for (var C = m.length; b < C; b++)
              S(b, b, b === m.length - 1);
          } else
            (function() {
              var x = void 0;
              Object.keys(m).forEach(function(D) {
                x !== void 0 && S(x, b - 1), x = D, b++;
              }), x !== void 0 && S(x, b - 1, !0);
            })();
        return b === 0 && (y = _(this)), y;
      });
    }, n.exports = r.default;
  })(yo, yo.exports)), yo.exports;
}
var _o = { exports: {} }, _v;
function MS() {
  return _v || (_v = 1, (function(n, r) {
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
  })(_o, _o.exports)), _o.exports;
}
var bo = { exports: {} }, bv;
function kS() {
  return bv || (bv = 1, (function(n, r) {
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
  })(bo, bo.exports)), bo.exports;
}
var So = { exports: {} }, Sv;
function RS() {
  return Sv || (Sv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("log", function() {
        for (var l = [void 0], o = arguments[arguments.length - 1], c = 0; c < arguments.length - 1; c++)
          l.push(arguments[c]);
        var h = 1;
        o.hash.level != null ? h = o.hash.level : o.data && o.data.level != null && (h = o.data.level), l[0] = h, i.log.apply(i, l);
      });
    }, n.exports = r.default;
  })(So, So.exports)), So.exports;
}
var xo = { exports: {} }, xv;
function jS() {
  return xv || (xv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(l, o, c) {
        return l && c.lookupProperty(l, o);
      });
    }, n.exports = r.default;
  })(xo, xo.exports)), xo.exports;
}
var Eo = { exports: {} }, Ev;
function zS() {
  return Ev || (Ev = 1, (function(n, r) {
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
  })(Eo, Eo.exports)), Eo.exports;
}
var Cv;
function _0() {
  if (Cv) return bl;
  Cv = 1, bl.__esModule = !0, bl.registerDefaultHelpers = S, bl.moveHelperToHooks = C;
  function n(T) {
    return T && T.__esModule ? T : { default: T };
  }
  var r = OS(), i = n(r), l = NS(), o = n(l), c = MS(), h = n(c), m = kS(), g = n(m), v = RS(), _ = n(v), b = jS(), y = n(b), p = zS(), f = n(p);
  function S(T) {
    i.default(T), o.default(T), h.default(T), g.default(T), _.default(T), y.default(T), f.default(T);
  }
  function C(T, w, N) {
    T.helpers[w] && (T.hooks[w] = T.helpers[w], N || delete T.helpers[w]);
  }
  return bl;
}
var Co = {}, wo = { exports: {} }, wv;
function LS() {
  return wv || (wv = 1, (function(n, r) {
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
  })(wo, wo.exports)), wo.exports;
}
var Av;
function BS() {
  if (Av) return Co;
  Av = 1, Co.__esModule = !0, Co.registerDefaultDecorators = l;
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = LS(), i = n(r);
  function l(o) {
    i.default(o);
  }
  return Co;
}
var Ao = { exports: {} }, Dv;
function b0() {
  return Dv || (Dv = 1, (function(n, r) {
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
  })(Ao, Ao.exports)), Ao.exports;
}
var ui = {}, Do = {}, Tv;
function US() {
  if (Tv) return Do;
  Tv = 1, Do.__esModule = !0, Do.createNewLookupObject = r;
  var n = Vt();
  function r() {
    for (var i = arguments.length, l = Array(i), o = 0; o < i; o++)
      l[o] = arguments[o];
    return n.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(l));
  }
  return Do;
}
var Ov;
function S0() {
  if (Ov) return ui;
  Ov = 1, ui.__esModule = !0, ui.createProtoAccessControl = c, ui.resultIsAllowed = h, ui.resetLoggedProperties = v;
  function n(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var r = US(), i = b0(), l = n(i), o = /* @__PURE__ */ Object.create(null);
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
var Nv;
function Bh() {
  if (Nv) return An;
  Nv = 1, An.__esModule = !0, An.HandlebarsEnvironment = f;
  function n(C) {
    return C && C.__esModule ? C : { default: C };
  }
  var r = Vt(), i = Nn(), l = n(i), o = _0(), c = BS(), h = b0(), m = n(h), g = S0(), v = "4.7.8";
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
  function f(C, T, w) {
    this.helpers = C || {}, this.partials = T || {}, this.decorators = w || {}, o.registerDefaultHelpers(this), c.registerDefaultDecorators(this);
  }
  f.prototype = {
    constructor: f,
    logger: m.default,
    log: m.default.log,
    registerHelper: function(T, w) {
      if (r.toString.call(T) === p) {
        if (w)
          throw new l.default("Arg not supported with multiple helpers");
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
          throw new l.default('Attempting to register a partial called "' + T + '" as undefined');
        this.partials[T] = w;
      }
    },
    unregisterPartial: function(T) {
      delete this.partials[T];
    },
    registerDecorator: function(T, w) {
      if (r.toString.call(T) === p) {
        if (w)
          throw new l.default("Arg not supported with multiple decorators");
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
var To = { exports: {} }, Mv;
function PS() {
  return Mv || (Mv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(l) {
      this.string = l;
    }
    i.prototype.toString = i.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = i, n.exports = r.default;
  })(To, To.exports)), To.exports;
}
var ar = {}, Oo = {}, kv;
function HS() {
  if (kv) return Oo;
  kv = 1, Oo.__esModule = !0, Oo.wrapHelper = n;
  function n(r, i) {
    if (typeof r != "function")
      return r;
    var l = function() {
      var c = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = i(c), r.apply(this, arguments);
    };
    return l;
  }
  return Oo;
}
var Rv;
function IS() {
  if (Rv) return ar;
  Rv = 1, ar.__esModule = !0, ar.checkRevision = _, ar.template = b, ar.wrapProgram = y, ar.resolvePartial = p, ar.invokePartial = f, ar.noop = S;
  function n(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function r(x) {
    if (x && x.__esModule)
      return x;
    var D = {};
    if (x != null)
      for (var M in x)
        Object.prototype.hasOwnProperty.call(x, M) && (D[M] = x[M]);
    return D.default = x, D;
  }
  var i = Vt(), l = r(i), o = Nn(), c = n(o), h = Bh(), m = _0(), g = HS(), v = S0();
  function _(x) {
    var D = x && x[0] || 1, M = h.COMPILER_REVISION;
    if (!(D >= h.LAST_COMPATIBLE_COMPILER_REVISION && D <= h.COMPILER_REVISION))
      if (D < h.LAST_COMPATIBLE_COMPILER_REVISION) {
        var R = h.REVISION_CHANGES[M], q = h.REVISION_CHANGES[D];
        throw new c.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + R + ") or downgrade your runtime to an older version (" + q + ").");
      } else
        throw new c.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + x[1] + ").");
  }
  function b(x, D) {
    if (!D)
      throw new c.default("No environment passed to template");
    if (!x || !x.main)
      throw new c.default("Unknown template object: " + typeof x);
    x.main.decorator = x.main_d, D.VM.checkRevision(x.compiler);
    var M = x.compiler && x.compiler[0] === 7;
    function R(G, X, W) {
      W.hash && (X = l.extend({}, X, W.hash), W.ids && (W.ids[0] = !0)), G = D.VM.resolvePartial.call(this, G, X, W);
      var oe = l.extend({}, W, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), he = D.VM.invokePartial.call(this, G, X, oe);
      if (he == null && D.compile && (W.partials[W.name] = D.compile(G, x.compilerOptions, D), he = W.partials[W.name](X, oe)), he != null) {
        if (W.indent) {
          for (var Ce = he.split(`
`), H = 0, te = Ce.length; H < te && !(!Ce[H] && H + 1 === te); H++)
            Ce[H] = W.indent + Ce[H];
          he = Ce.join(`
`);
        }
        return he;
      } else
        throw new c.default("The partial " + W.name + " could not be compiled when running in runtime-only mode");
    }
    var q = {
      strict: function(X, W, oe) {
        if (!X || !(W in X))
          throw new c.default('"' + W + '" not defined in ' + X, {
            loc: oe
          });
        return q.lookupProperty(X, W);
      },
      lookupProperty: function(X, W) {
        var oe = X[W];
        if (oe == null || Object.prototype.hasOwnProperty.call(X, W) || v.resultIsAllowed(oe, q.protoAccessControl, W))
          return oe;
      },
      lookup: function(X, W) {
        for (var oe = X.length, he = 0; he < oe; he++) {
          var Ce = X[he] && q.lookupProperty(X[he], W);
          if (Ce != null)
            return X[he][W];
        }
      },
      lambda: function(X, W) {
        return typeof X == "function" ? X.call(W) : X;
      },
      escapeExpression: l.escapeExpression,
      invokePartial: R,
      fn: function(X) {
        var W = x[X];
        return W.decorator = x[X + "_d"], W;
      },
      programs: [],
      program: function(X, W, oe, he, Ce) {
        var H = this.programs[X], te = this.fn(X);
        return W || Ce || he || oe ? H = y(this, X, te, W, oe, he, Ce) : H || (H = this.programs[X] = y(this, X, te)), H;
      },
      data: function(X, W) {
        for (; X && W--; )
          X = X._parent;
        return X;
      },
      mergeIfNeeded: function(X, W) {
        var oe = X || W;
        return X && W && X !== W && (oe = l.extend({}, W, X)), oe;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: D.VM.noop,
      compilerInfo: x.compiler
    };
    function Y(G) {
      var X = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], W = X.data;
      Y._setup(X), !X.partial && x.useData && (W = C(G, W));
      var oe = void 0, he = x.useBlockParams ? [] : void 0;
      x.useDepths && (X.depths ? oe = G != X.depths[0] ? [G].concat(X.depths) : X.depths : oe = [G]);
      function Ce(H) {
        return "" + x.main(q, H, q.helpers, q.partials, W, he, oe);
      }
      return Ce = T(x.main, Ce, q, X.depths || [], W, he), Ce(G, X);
    }
    return Y.isTop = !0, Y._setup = function(G) {
      if (G.partial)
        q.protoAccessControl = G.protoAccessControl, q.helpers = G.helpers, q.partials = G.partials, q.decorators = G.decorators, q.hooks = G.hooks;
      else {
        var X = l.extend({}, D.helpers, G.helpers);
        w(X, q), q.helpers = X, x.usePartial && (q.partials = q.mergeIfNeeded(G.partials, D.partials)), (x.usePartial || x.useDecorators) && (q.decorators = l.extend({}, D.decorators, G.decorators)), q.hooks = {}, q.protoAccessControl = v.createProtoAccessControl(G);
        var W = G.allowCallsToHelperMissing || M;
        m.moveHelperToHooks(q, "helperMissing", W), m.moveHelperToHooks(q, "blockHelperMissing", W);
      }
    }, Y._child = function(G, X, W, oe) {
      if (x.useBlockParams && !W)
        throw new c.default("must pass block params");
      if (x.useDepths && !oe)
        throw new c.default("must pass parent depths");
      return y(q, G, x[G], X, 0, W, oe);
    }, Y;
  }
  function y(x, D, M, R, q, Y, G) {
    function X(W) {
      var oe = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], he = G;
      return G && W != G[0] && !(W === x.nullContext && G[0] === null) && (he = [W].concat(G)), M(x, W, x.helpers, x.partials, oe.data || R, Y && [oe.blockParams].concat(Y), he);
    }
    return X = T(M, X, x, G, R, Y), X.program = D, X.depth = G ? G.length : 0, X.blockParams = q || 0, X;
  }
  function p(x, D, M) {
    return x ? !x.call && !M.name && (M.name = x, x = M.partials[x]) : M.name === "@partial-block" ? x = M.data["partial-block"] : x = M.partials[M.name], x;
  }
  function f(x, D, M) {
    var R = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var q = void 0;
    if (M.fn && M.fn !== S && (function() {
      M.data = h.createFrame(M.data);
      var Y = M.fn;
      q = M.data["partial-block"] = function(X) {
        var W = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return W.data = h.createFrame(W.data), W.data["partial-block"] = R, Y(X, W);
      }, Y.partials && (M.partials = l.extend({}, M.partials, Y.partials));
    })(), x === void 0 && q && (x = q), x === void 0)
      throw new c.default("The partial " + M.name + " could not be found");
    if (x instanceof Function)
      return x(D, M);
  }
  function S() {
    return "";
  }
  function C(x, D) {
    return (!D || !("root" in D)) && (D = D ? h.createFrame(D) : {}, D.root = x), D;
  }
  function T(x, D, M, R, q, Y) {
    if (x.decorator) {
      var G = {};
      D = x.decorator(D, G, M, R && R[0], q, Y, R), l.extend(D, G);
    }
    return D;
  }
  function w(x, D) {
    Object.keys(x).forEach(function(M) {
      var R = x[M];
      x[M] = N(R, D);
    });
  }
  function N(x, D) {
    var M = D.lookupProperty;
    return g.wrapHelper(x, function(R) {
      return l.extend({ lookupProperty: M }, R);
    });
  }
  return ar;
}
var No = { exports: {} }, jv;
function x0() {
  return jv || (jv = 1, (function(n, r) {
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
  })(No, No.exports)), No.exports;
}
var zv;
function qS() {
  return zv || (zv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    function l(w) {
      if (w && w.__esModule)
        return w;
      var N = {};
      if (w != null)
        for (var x in w)
          Object.prototype.hasOwnProperty.call(w, x) && (N[x] = w[x]);
      return N.default = w, N;
    }
    var o = Bh(), c = l(o), h = PS(), m = i(h), g = Nn(), v = i(g), _ = Vt(), b = l(_), y = IS(), p = l(y), f = x0(), S = i(f);
    function C() {
      var w = new c.HandlebarsEnvironment();
      return b.extend(w, c), w.SafeString = m.default, w.Exception = v.default, w.Utils = b, w.escapeExpression = b.escapeExpression, w.VM = p, w.template = function(N) {
        return p.template(N, w);
      }, w;
    }
    var T = C();
    T.create = C, S.default(T), T.default = T, r.default = T, n.exports = r.default;
  })(mo, mo.exports)), mo.exports;
}
var Mo = { exports: {} }, Lv;
function E0() {
  return Lv || (Lv = 1, (function(n, r) {
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
  })(Mo, Mo.exports)), Mo.exports;
}
var ci = {}, ko = { exports: {} }, Bv;
function ZS() {
  return Bv || (Bv = 1, (function(n, r) {
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
              var S = _.prepareBlock(y[f - 2], y[f - 1], y[f], y[f], !1, this._$), C = _.prepareProgram([S], y[f - 1].loc);
              C.chained = !0, this.$ = { strip: y[f - 2].strip, program: C, chain: !0 };
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
          var C = this.lexer.yylloc;
          b.push(C);
          var T = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function w() {
            var oe;
            return oe = g.lexer.lex() || 1, typeof oe != "number" && (oe = g.symbols_[oe] || oe), oe;
          }
          for (var N, x, D, M, R = {}, q, Y, G, X; ; ) {
            if (x = v[v.length - 1], this.defaultActions[x] ? D = this.defaultActions[x] : ((N === null || typeof N > "u") && (N = w()), D = y[x] && y[x][N]), typeof D > "u" || !D.length || !D[0]) {
              var W = "";
              {
                X = [];
                for (q in y[x]) this.terminals_[q] && q > 2 && X.push("'" + this.terminals_[q] + "'");
                this.lexer.showPosition ? W = "Parse error on line " + (f + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + X.join(", ") + ", got '" + (this.terminals_[N] || N) + "'" : W = "Parse error on line " + (f + 1) + ": Unexpected " + (N == 1 ? "end of input" : "'" + (this.terminals_[N] || N) + "'"), this.parseError(W, { text: this.lexer.match, token: this.terminals_[N] || N, line: this.lexer.yylineno, loc: C, expected: X });
              }
            }
            if (D[0] instanceof Array && D.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + x + ", token: " + N);
            switch (D[0]) {
              case 1:
                v.push(N), _.push(this.lexer.yytext), b.push(this.lexer.yylloc), v.push(D[1]), N = null, S = this.lexer.yyleng, p = this.lexer.yytext, f = this.lexer.yylineno, C = this.lexer.yylloc;
                break;
              case 2:
                if (Y = this.productions_[D[1]][1], R.$ = _[_.length - Y], R._$ = { first_line: b[b.length - (Y || 1)].first_line, last_line: b[b.length - 1].last_line, first_column: b[b.length - (Y || 1)].first_column, last_column: b[b.length - 1].last_column }, T && (R._$.range = [b[b.length - (Y || 1)].range[0], b[b.length - 1].range[1]]), M = this.performAction.call(R, p, S, f, this.yy, D[1], _, b), typeof M < "u")
                  return M;
                Y && (v = v.slice(0, -1 * Y * 2), _ = _.slice(0, -1 * Y), b = b.slice(0, -1 * Y)), v.push(this.productions_[D[1]][0]), _.push(R.$), b.push(R._$), G = y[v[v.length - 2]][v[v.length - 1]], v.push(G);
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
  })(ko, ko.exports)), ko.exports;
}
var Ro = { exports: {} }, jo = { exports: {} }, Uv;
function C0() {
  return Uv || (Uv = 1, (function(n, r) {
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
  })(jo, jo.exports)), jo.exports;
}
var Pv;
function GS() {
  return Pv || (Pv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }
    var l = C0(), o = i(l);
    function c() {
      var _ = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = _;
    }
    c.prototype = new o.default(), c.prototype.Program = function(_) {
      var b = !this.options.ignoreStandalone, y = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var p = _.body, f = 0, S = p.length; f < S; f++) {
        var C = p[f], T = this.accept(C);
        if (T) {
          var w = h(p, f, y), N = m(p, f, y), x = T.openStandalone && w, D = T.closeStandalone && N, M = T.inlineStandalone && w && N;
          T.close && g(p, f, !0), T.open && v(p, f, !0), b && M && (g(p, f), v(p, f) && C.type === "PartialStatement" && (C.indent = /([ \t]+$)/.exec(p[f - 1].original)[1])), b && x && (g((C.program || C.inverse).body), v(p, f)), b && D && (g(p, f), v((C.inverse || C.program).body));
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
        var C = _.inverseStrip;
        C.open && v(b.body, null, !0), C.close && g(p.body, null, !0), _.closeStrip.open && v(f.body, null, !0), !this.options.ignoreStandalone && h(b.body) && m(p.body) && (v(b.body), g(p.body));
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
  })(Ro, Ro.exports)), Ro.exports;
}
var rn = {}, Hv;
function FS() {
  if (Hv) return rn;
  Hv = 1, rn.__esModule = !0, rn.SourceLocation = o, rn.id = c, rn.stripFlags = h, rn.stripComment = m, rn.preparePath = g, rn.prepareMustache = v, rn.prepareRawBlock = _, rn.prepareBlock = b, rn.prepareProgram = y, rn.preparePartialBlock = p;
  function n(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var r = Nn(), i = n(r);
  function l(f, S) {
    if (S = S.path ? S.path.original : S, f.path.original !== S) {
      var C = { loc: f.path.loc };
      throw new i.default(f.path.original + " doesn't match " + S, C);
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
  function g(f, S, C) {
    C = this.locInfo(C);
    for (var T = f ? "@" : "", w = [], N = 0, x = 0, D = S.length; x < D; x++) {
      var M = S[x].part, R = S[x].original !== M;
      if (T += (S[x].separator || "") + M, !R && (M === ".." || M === "." || M === "this")) {
        if (w.length > 0)
          throw new i.default("Invalid path: " + T, { loc: C });
        M === ".." && N++;
      } else
        w.push(M);
    }
    return {
      type: "PathExpression",
      data: f,
      depth: N,
      parts: w,
      original: T,
      loc: C
    };
  }
  function v(f, S, C, T, w, N) {
    var x = T.charAt(3) || T.charAt(2), D = x !== "{" && x !== "&", M = /\*/.test(T);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: f,
      params: S,
      hash: C,
      escaped: D,
      strip: w,
      loc: this.locInfo(N)
    };
  }
  function _(f, S, C, T) {
    l(f, C), T = this.locInfo(T);
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
  function b(f, S, C, T, w, N) {
    T && T.path && l(f, T);
    var x = /\*/.test(f.open);
    S.blockParams = f.blockParams;
    var D = void 0, M = void 0;
    if (C) {
      if (x)
        throw new i.default("Unexpected inverse block on decorator", C);
      C.chain && (C.program.body[0].closeStrip = T.strip), M = C.strip, D = C.program;
    }
    return w && (w = D, D = S, S = w), {
      type: x ? "DecoratorBlock" : "BlockStatement",
      path: f.path,
      params: f.params,
      hash: f.hash,
      program: S,
      inverse: D,
      openStrip: f.strip,
      inverseStrip: M,
      closeStrip: T && T.strip,
      loc: this.locInfo(N)
    };
  }
  function y(f, S) {
    if (!S && f.length) {
      var C = f[0].loc, T = f[f.length - 1].loc;
      C && T && (S = {
        source: C.source,
        start: {
          line: C.start.line,
          column: C.start.column
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
  function p(f, S, C, T) {
    return l(f, C), {
      type: "PartialBlockStatement",
      name: f.path,
      params: f.params,
      hash: f.hash,
      program: S,
      openStrip: f.strip,
      closeStrip: C && C.strip,
      loc: this.locInfo(T)
    };
  }
  return rn;
}
var Iv;
function VS() {
  if (Iv) return ci;
  Iv = 1, ci.__esModule = !0, ci.parseWithoutProcessing = _, ci.parse = b;
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
  var i = ZS(), l = r(i), o = GS(), c = r(o), h = FS(), m = n(h), g = Vt();
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
var fi = {}, qv;
function YS() {
  if (qv) return fi;
  qv = 1, fi.__esModule = !0, fi.Compiler = m, fi.precompile = g, fi.compile = v;
  function n(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = Nn(), i = n(r), l = Vt(), o = E0(), c = n(o), h = [].slice;
  function m() {
  }
  m.prototype = {
    compiler: m,
    equals: function(p) {
      var f = this.opcodes.length;
      if (p.opcodes.length !== f)
        return !1;
      for (var S = 0; S < f; S++) {
        var C = this.opcodes[S], T = p.opcodes[S];
        if (C.opcode !== T.opcode || !_(C.args, T.args))
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
      var f = new this.compiler(), S = f.compile(p, this.options), C = this.guid++;
      return this.usePartial = this.usePartial || S.usePartial, this.children[C] = S, this.useDepths = this.useDepths || S.useDepths, C;
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
      for (var f = p.body, S = f.length, C = 0; C < S; C++)
        this.accept(f[C]);
      return this.options.blockParams.shift(), this.isSimple = S === 1, this.blockParams = p.blockParams ? p.blockParams.length : 0, this;
    },
    BlockStatement: function(p) {
      b(p);
      var f = p.program, S = p.inverse;
      f = f && this.compileProgram(f), S = S && this.compileProgram(S);
      var C = this.classifySexpr(p);
      C === "helper" ? this.helperSexpr(p, f, S) : C === "simple" ? (this.simpleSexpr(p), this.opcode("pushProgram", f), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("blockValue", p.path.original)) : (this.ambiguousSexpr(p, f, S), this.opcode("pushProgram", f), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(p) {
      var f = p.program && this.compileProgram(p.program), S = this.setupFullMustacheParams(p, f, void 0), C = p.path;
      this.useDecorators = !0, this.opcode("registerDecorator", S.length, C.original);
    },
    PartialStatement: function(p) {
      this.usePartial = !0;
      var f = p.program;
      f && (f = this.compileProgram(p.program));
      var S = p.params;
      if (S.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + S.length, p);
      S.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : S.push({ type: "PathExpression", parts: [], depth: 0 }));
      var C = p.name.original, T = p.name.type === "SubExpression";
      T && this.accept(p.name), this.setupFullMustacheParams(p, f, void 0, !0);
      var w = p.indent || "";
      this.options.preventIndent && w && (this.opcode("appendContent", w), w = ""), this.opcode("invokePartial", T, C, w), this.opcode("append");
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
      var C = p.path, T = C.parts[0], w = f != null || S != null;
      this.opcode("getContext", C.depth), this.opcode("pushProgram", f), this.opcode("pushProgram", S), C.strict = !0, this.accept(C), this.opcode("invokeAmbiguous", T, w);
    },
    simpleSexpr: function(p) {
      var f = p.path;
      f.strict = !0, this.accept(f), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(p, f, S) {
      var C = this.setupFullMustacheParams(p, f, S), T = p.path, w = T.parts[0];
      if (this.options.knownHelpers[w])
        this.opcode("invokeKnownHelper", C.length, w);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + w, p);
        T.strict = !0, T.falsy = !0, this.accept(T), this.opcode("invokeHelper", C.length, T.original, c.default.helpers.simpleId(T));
      }
    },
    PathExpression: function(p) {
      this.addDepth(p.depth), this.opcode("getContext", p.depth);
      var f = p.parts[0], S = c.default.helpers.scopedId(p), C = !p.depth && !S && this.blockParamIndex(f);
      C ? this.opcode("lookupBlockParam", C, p.parts) : f ? p.data ? (this.options.data = !0, this.opcode("lookupData", p.depth, p.parts, p.strict)) : this.opcode("lookupOnContext", p.parts, p.falsy, p.strict, S) : this.opcode("pushContext");
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
      var f = p.pairs, S = 0, C = f.length;
      for (this.opcode("pushHash"); S < C; S++)
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
      var f = c.default.helpers.simpleId(p.path), S = f && !!this.blockParamIndex(p.path.parts[0]), C = !S && c.default.helpers.helperExpression(p), T = !S && (C || f);
      if (T && !C) {
        var w = p.path.parts[0], N = this.options;
        N.knownHelpers[w] ? C = !0 : N.knownHelpersOnly && (T = !1);
      }
      return C ? "helper" : T ? "ambiguous" : "simple";
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
            var C = p.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", S, C);
          } else
            f = p.original || f, f.replace && (f = f.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", p.type, f);
        }
        this.accept(p);
      }
    },
    setupFullMustacheParams: function(p, f, S, C) {
      var T = p.params;
      return this.pushParams(T), this.opcode("pushProgram", f), this.opcode("pushProgram", S), p.hash ? this.accept(p.hash) : this.opcode("emptyHash", C), T;
    },
    blockParamIndex: function(p) {
      for (var f = 0, S = this.options.blockParams.length; f < S; f++) {
        var C = this.options.blockParams[f], T = C && l.indexOf(C, p);
        if (C && T >= 0)
          return [f, T];
      }
    }
  };
  function g(y, p, f) {
    if (y == null || typeof y != "string" && y.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + y);
    p = p || {}, "data" in p || (p.data = !0), p.compat && (p.useDepths = !0);
    var S = f.parse(y, p), C = new f.Compiler().compile(S, p);
    return new f.JavaScriptCompiler().compile(C, p);
  }
  function v(y, p, f) {
    if (p === void 0 && (p = {}), y == null || typeof y != "string" && y.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + y);
    p = l.extend({}, p), "data" in p || (p.data = !0), p.compat && (p.useDepths = !0);
    var S = void 0;
    function C() {
      var w = f.parse(y, p), N = new f.Compiler().compile(w, p), x = new f.JavaScriptCompiler().compile(N, p, void 0, !0);
      return f.template(x);
    }
    function T(w, N) {
      return S || (S = C()), S.call(this, w, N);
    }
    return T._setup = function(w) {
      return S || (S = C()), S._setup(w);
    }, T._child = function(w, N, x, D) {
      return S || (S = C()), S._child(w, N, x, D);
    }, T;
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
var zo = { exports: {} }, Lo = { exports: {} }, Sl = {}, $f = {}, Bo = {}, Uo = {}, Zv;
function XS() {
  if (Zv) return Uo;
  Zv = 1;
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Uo.encode = function(r) {
    if (0 <= r && r < n.length)
      return n[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Uo.decode = function(r) {
    var i = 65, l = 90, o = 97, c = 122, h = 48, m = 57, g = 43, v = 47, _ = 26, b = 52;
    return i <= r && r <= l ? r - i : o <= r && r <= c ? r - o + _ : h <= r && r <= m ? r - h + b : r == g ? 62 : r == v ? 63 : -1;
  }, Uo;
}
var Gv;
function w0() {
  if (Gv) return Bo;
  Gv = 1;
  var n = XS(), r = 5, i = 1 << r, l = i - 1, o = i;
  function c(m) {
    return m < 0 ? (-m << 1) + 1 : (m << 1) + 0;
  }
  function h(m) {
    var g = (m & 1) === 1, v = m >> 1;
    return g ? -v : v;
  }
  return Bo.encode = function(g) {
    var v = "", _, b = c(g);
    do
      _ = b & l, b >>>= r, b > 0 && (_ |= o), v += n.encode(_);
    while (b > 0);
    return v;
  }, Bo.decode = function(g, v, _) {
    var b = g.length, y = 0, p = 0, f, S;
    do {
      if (v >= b)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (S = n.decode(g.charCodeAt(v++)), S === -1)
        throw new Error("Invalid base64 digit: " + g.charAt(v - 1));
      f = !!(S & o), S &= l, y = y + (S << p), p += r;
    } while (f);
    _.value = h(y), _.rest = v;
  }, Bo;
}
var Kf = {}, Fv;
function Fl() {
  return Fv || (Fv = 1, (function(n) {
    function r(x, D, M) {
      if (D in x)
        return x[D];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + D + '" is a required argument.');
    }
    n.getArg = r;
    var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, l = /^data:.+\,.+$/;
    function o(x) {
      var D = x.match(i);
      return D ? {
        scheme: D[1],
        auth: D[2],
        host: D[3],
        port: D[4],
        path: D[5]
      } : null;
    }
    n.urlParse = o;
    function c(x) {
      var D = "";
      return x.scheme && (D += x.scheme + ":"), D += "//", x.auth && (D += x.auth + "@"), x.host && (D += x.host), x.port && (D += ":" + x.port), x.path && (D += x.path), D;
    }
    n.urlGenerate = c;
    function h(x) {
      var D = x, M = o(x);
      if (M) {
        if (!M.path)
          return x;
        D = M.path;
      }
      for (var R = n.isAbsolute(D), q = D.split(/\/+/), Y, G = 0, X = q.length - 1; X >= 0; X--)
        Y = q[X], Y === "." ? q.splice(X, 1) : Y === ".." ? G++ : G > 0 && (Y === "" ? (q.splice(X + 1, G), G = 0) : (q.splice(X, 2), G--));
      return D = q.join("/"), D === "" && (D = R ? "/" : "."), M ? (M.path = D, c(M)) : D;
    }
    n.normalize = h;
    function m(x, D) {
      x === "" && (x = "."), D === "" && (D = ".");
      var M = o(D), R = o(x);
      if (R && (x = R.path || "/"), M && !M.scheme)
        return R && (M.scheme = R.scheme), c(M);
      if (M || D.match(l))
        return D;
      if (R && !R.host && !R.path)
        return R.host = D, c(R);
      var q = D.charAt(0) === "/" ? D : h(x.replace(/\/+$/, "") + "/" + D);
      return R ? (R.path = q, c(R)) : q;
    }
    n.join = m, n.isAbsolute = function(x) {
      return x.charAt(0) === "/" || i.test(x);
    };
    function g(x, D) {
      x === "" && (x = "."), x = x.replace(/\/$/, "");
      for (var M = 0; D.indexOf(x + "/") !== 0; ) {
        var R = x.lastIndexOf("/");
        if (R < 0 || (x = x.slice(0, R), x.match(/^([^\/]+:\/)?\/*$/)))
          return D;
        ++M;
      }
      return Array(M + 1).join("../") + D.substr(x.length + 1);
    }
    n.relative = g;
    var v = (function() {
      var x = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in x);
    })();
    function _(x) {
      return x;
    }
    function b(x) {
      return p(x) ? "$" + x : x;
    }
    n.toSetString = v ? _ : b;
    function y(x) {
      return p(x) ? x.slice(1) : x;
    }
    n.fromSetString = v ? _ : y;
    function p(x) {
      if (!x)
        return !1;
      var D = x.length;
      if (D < 9 || x.charCodeAt(D - 1) !== 95 || x.charCodeAt(D - 2) !== 95 || x.charCodeAt(D - 3) !== 111 || x.charCodeAt(D - 4) !== 116 || x.charCodeAt(D - 5) !== 111 || x.charCodeAt(D - 6) !== 114 || x.charCodeAt(D - 7) !== 112 || x.charCodeAt(D - 8) !== 95 || x.charCodeAt(D - 9) !== 95)
        return !1;
      for (var M = D - 10; M >= 0; M--)
        if (x.charCodeAt(M) !== 36)
          return !1;
      return !0;
    }
    function f(x, D, M) {
      var R = C(x.source, D.source);
      return R !== 0 || (R = x.originalLine - D.originalLine, R !== 0) || (R = x.originalColumn - D.originalColumn, R !== 0 || M) || (R = x.generatedColumn - D.generatedColumn, R !== 0) || (R = x.generatedLine - D.generatedLine, R !== 0) ? R : C(x.name, D.name);
    }
    n.compareByOriginalPositions = f;
    function S(x, D, M) {
      var R = x.generatedLine - D.generatedLine;
      return R !== 0 || (R = x.generatedColumn - D.generatedColumn, R !== 0 || M) || (R = C(x.source, D.source), R !== 0) || (R = x.originalLine - D.originalLine, R !== 0) || (R = x.originalColumn - D.originalColumn, R !== 0) ? R : C(x.name, D.name);
    }
    n.compareByGeneratedPositionsDeflated = S;
    function C(x, D) {
      return x === D ? 0 : x === null ? 1 : D === null ? -1 : x > D ? 1 : -1;
    }
    function T(x, D) {
      var M = x.generatedLine - D.generatedLine;
      return M !== 0 || (M = x.generatedColumn - D.generatedColumn, M !== 0) || (M = C(x.source, D.source), M !== 0) || (M = x.originalLine - D.originalLine, M !== 0) || (M = x.originalColumn - D.originalColumn, M !== 0) ? M : C(x.name, D.name);
    }
    n.compareByGeneratedPositionsInflated = T;
    function w(x) {
      return JSON.parse(x.replace(/^\)]}'[^\n]*\n/, ""));
    }
    n.parseSourceMapInput = w;
    function N(x, D, M) {
      if (D = D || "", x && (x[x.length - 1] !== "/" && D[0] !== "/" && (x += "/"), D = x + D), M) {
        var R = o(M);
        if (!R)
          throw new Error("sourceMapURL could not be parsed");
        if (R.path) {
          var q = R.path.lastIndexOf("/");
          q >= 0 && (R.path = R.path.substring(0, q + 1));
        }
        D = m(c(R), D);
      }
      return h(D);
    }
    n.computeSourceURL = N;
  })(Kf)), Kf;
}
var Jf = {}, Vv;
function A0() {
  if (Vv) return Jf;
  Vv = 1;
  var n = Fl(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
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
  }, Jf.ArraySet = l, Jf;
}
var Wf = {}, Yv;
function QS() {
  if (Yv) return Wf;
  Yv = 1;
  var n = Fl();
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
  }, Wf.MappingList = i, Wf;
}
var Xv;
function D0() {
  if (Xv) return $f;
  Xv = 1;
  var n = w0(), r = Fl(), i = A0().ArraySet, l = QS().MappingList;
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
      var C = p.name;
      C != null && !y.has(C) && y.add(C);
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
    for (var h = 0, m = 1, g = 0, v = 0, _ = 0, b = 0, y = "", p, f, S, C, T = this._mappings.toArray(), w = 0, N = T.length; w < N; w++) {
      if (f = T[w], p = "", f.generatedLine !== m)
        for (h = 0; f.generatedLine !== m; )
          p += ";", m++;
      else if (w > 0) {
        if (!r.compareByGeneratedPositionsInflated(f, T[w - 1]))
          continue;
        p += ",";
      }
      p += n.encode(f.generatedColumn - h), h = f.generatedColumn, f.source != null && (C = this._sources.indexOf(f.source), p += n.encode(C - b), b = C, p += n.encode(f.originalLine - 1 - v), v = f.originalLine - 1, p += n.encode(f.originalColumn - g), g = f.originalColumn, f.name != null && (S = this._names.indexOf(f.name), p += n.encode(S - _), _ = S)), y += p;
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
  }, $f.SourceMapGenerator = o, $f;
}
var xl = {}, eh = {}, Qv;
function $S() {
  return Qv || (Qv = 1, (function(n) {
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
  })(eh)), eh;
}
var th = {}, $v;
function KS() {
  if ($v) return th;
  $v = 1;
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
  return th.quickSort = function(l, o) {
    i(l, o, 0, l.length - 1);
  }, th;
}
var Kv;
function JS() {
  if (Kv) return xl;
  Kv = 1;
  var n = Fl(), r = $S(), i = A0().ArraySet, l = w0(), o = KS().quickSort;
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
    var C = this.sourceRoot;
    S.map(function(T) {
      var w = T.source === null ? null : this._sources.at(T.source);
      return w = n.computeSourceURL(C, w, this._sourceMapURL), {
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
        for (var C = S.originalLine; S && S.originalLine === C; )
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
  }, xl.SourceMapConsumer = c;
  function h(v, _) {
    var b = v;
    typeof v == "string" && (b = n.parseSourceMapInput(v));
    var y = n.getArg(b, "version"), p = n.getArg(b, "sources"), f = n.getArg(b, "names", []), S = n.getArg(b, "sourceRoot", null), C = n.getArg(b, "sourcesContent", null), T = n.getArg(b, "mappings"), w = n.getArg(b, "file", null);
    if (y != this._version)
      throw new Error("Unsupported version: " + y);
    S && (S = n.normalize(S)), p = p.map(String).map(n.normalize).map(function(N) {
      return S && n.isAbsolute(S) && n.isAbsolute(N) ? n.relative(S, N) : N;
    }), this._names = i.fromArray(f.map(String), !0), this._sources = i.fromArray(p, !0), this._absoluteSources = this._sources.toArray().map(function(N) {
      return n.computeSourceURL(S, N, _);
    }), this.sourceRoot = S, this.sourcesContent = C, this._mappings = T, this._sourceMapURL = _, this.file = w;
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
    ), y.file = _._file, y._sourceMapURL = b, y._absoluteSources = y._sources.toArray().map(function(M) {
      return n.computeSourceURL(y.sourceRoot, M, b);
    });
    for (var S = _._mappings.toArray().slice(), C = y.__generatedMappings = [], T = y.__originalMappings = [], w = 0, N = S.length; w < N; w++) {
      var x = S[w], D = new m();
      D.generatedLine = x.generatedLine, D.generatedColumn = x.generatedColumn, x.source && (D.source = f.indexOf(x.source), D.originalLine = x.originalLine, D.originalColumn = x.originalColumn, x.name && (D.name = p.indexOf(x.name)), T.push(D)), C.push(D);
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
    for (var y = 1, p = 0, f = 0, S = 0, C = 0, T = 0, w = _.length, N = 0, x = {}, D = {}, M = [], R = [], q, Y, G, X, W; N < w; )
      if (_.charAt(N) === ";")
        y++, N++, p = 0;
      else if (_.charAt(N) === ",")
        N++;
      else {
        for (q = new m(), q.generatedLine = y, X = N; X < w && !this._charIsMappingSeparator(_, X); X++)
          ;
        if (Y = _.slice(N, X), G = x[Y], G)
          N += Y.length;
        else {
          for (G = []; N < X; )
            l.decode(_, N, D), W = D.value, N = D.rest, G.push(W);
          if (G.length === 2)
            throw new Error("Found a source, but no line and column");
          if (G.length === 3)
            throw new Error("Found a source and line, but no column");
          x[Y] = G;
        }
        q.generatedColumn = p + G[0], p = q.generatedColumn, G.length > 1 && (q.source = C + G[1], C += G[1], q.originalLine = f + G[2], f = q.originalLine, q.originalLine += 1, q.originalColumn = S + G[3], S = q.originalColumn, G.length > 4 && (q.name = T + G[4], T += G[4])), R.push(q), typeof q.originalLine == "number" && M.push(q);
      }
    o(R, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = R, o(M, n.compareByOriginalPositions), this.__originalMappings = M;
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
  }, xl.BasicSourceMapConsumer = h;
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
      var C = n.getArg(S, "offset"), T = n.getArg(C, "line"), w = n.getArg(C, "column");
      if (T < f.line || T === f.line && w < f.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return f = C, {
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
        var C = f.generatedLine - S.generatedOffset.generatedLine;
        return C || f.generatedColumn - S.generatedOffset.generatedColumn;
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
        var C = f[S], T = p.consumer._sources.at(C.source);
        T = n.computeSourceURL(p.consumer.sourceRoot, T, this._sourceMapURL), this._sources.add(T), T = this._sources.indexOf(T);
        var w = null;
        C.name && (w = p.consumer._names.at(C.name), this._names.add(w), w = this._names.indexOf(w));
        var N = {
          source: T,
          generatedLine: C.generatedLine + (p.generatedOffset.generatedLine - 1),
          generatedColumn: C.generatedColumn + (p.generatedOffset.generatedLine === C.generatedLine ? p.generatedOffset.generatedColumn - 1 : 0),
          originalLine: C.originalLine,
          originalColumn: C.originalColumn,
          name: w
        };
        this.__generatedMappings.push(N), typeof N.originalLine == "number" && this.__originalMappings.push(N);
      }
    o(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), o(this.__originalMappings, n.compareByOriginalPositions);
  }, xl.IndexedSourceMapConsumer = g, xl;
}
var nh = {}, Jv;
function WS() {
  if (Jv) return nh;
  Jv = 1;
  var n = D0().SourceMapGenerator, r = Fl(), i = /(\r?\n)/, l = 10, o = "$$$isSourceNode$$$";
  function c(h, m, g, v, _) {
    this.children = [], this.sourceContents = {}, this.line = h ?? null, this.column = m ?? null, this.source = g ?? null, this.name = _ ?? null, this[o] = !0, v != null && this.add(v);
  }
  return c.fromStringWithSourceMap = function(m, g, v) {
    var _ = new c(), b = m.split(i), y = 0, p = function() {
      var w = x(), N = x() || "";
      return w + N;
      function x() {
        return y < b.length ? b[y++] : void 0;
      }
    }, f = 1, S = 0, C = null;
    return g.eachMapping(function(w) {
      if (C !== null)
        if (f < w.generatedLine)
          T(C, p()), f++, S = 0;
        else {
          var N = b[y] || "", x = N.substr(0, w.generatedColumn - S);
          b[y] = N.substr(w.generatedColumn - S), S = w.generatedColumn, T(C, x), C = w;
          return;
        }
      for (; f < w.generatedLine; )
        _.add(p()), f++;
      if (S < w.generatedColumn) {
        var N = b[y] || "";
        _.add(N.substr(0, w.generatedColumn)), b[y] = N.substr(w.generatedColumn), S = w.generatedColumn;
      }
      C = w;
    }, this), y < b.length && (C && T(C, p()), _.add(b.splice(y).join(""))), g.sources.forEach(function(w) {
      var N = g.sourceContentFor(w);
      N != null && (v != null && (w = r.join(v, w)), _.setSourceContent(w, N));
    }), _;
    function T(w, N) {
      if (w === null || w.source === void 0)
        _.add(N);
      else {
        var x = v ? r.join(v, w.source) : w.source;
        _.add(new c(
          w.originalLine,
          w.originalColumn,
          x,
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
    return this.walk(function(S, C) {
      g.code += S, C.source !== null && C.line !== null && C.column !== null ? ((b !== C.source || y !== C.line || p !== C.column || f !== C.name) && v.addMapping({
        source: C.source,
        original: {
          line: C.line,
          column: C.column
        },
        generated: {
          line: g.line,
          column: g.column
        },
        name: C.name
      }), b = C.source, y = C.line, p = C.column, f = C.name, _ = !0) : _ && (v.addMapping({
        generated: {
          line: g.line,
          column: g.column
        }
      }), b = null, _ = !1);
      for (var T = 0, w = S.length; T < w; T++)
        S.charCodeAt(T) === l ? (g.line++, g.column = 0, T + 1 === w ? (b = null, _ = !1) : _ && v.addMapping({
          source: C.source,
          original: {
            line: C.line,
            column: C.column
          },
          generated: {
            line: g.line,
            column: g.column
          },
          name: C.name
        })) : g.column++;
    }), this.walkSourceContents(function(S, C) {
      v.setSourceContent(S, C);
    }), { code: g.code, map: v };
  }, nh.SourceNode = c, nh;
}
var Wv;
function ex() {
  return Wv || (Wv = 1, Sl.SourceMapGenerator = D0().SourceMapGenerator, Sl.SourceMapConsumer = JS().SourceMapConsumer, Sl.SourceNode = WS().SourceNode), Sl;
}
var ey;
function tx() {
  return ey || (ey = 1, (function(n, r) {
    r.__esModule = !0;
    var i = Vt(), l = void 0;
    try {
      var o = ex();
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
  })(Lo, Lo.exports)), Lo.exports;
}
var ty;
function nx() {
  return ty || (ty = 1, (function(n, r) {
    r.__esModule = !0;
    function i(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var l = Bh(), o = Nn(), c = i(o), h = Vt(), m = tx(), g = i(m);
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
      compile: function(p, f, S, C) {
        this.environment = p, this.options = f, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !C, this.name = this.environment.name, this.isChild = !!S, this.context = S || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(p, f), this.useDepths = this.useDepths || p.useDepths || p.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || p.useBlockParams;
        var T = p.opcodes, w = void 0, N = void 0, x = void 0, D = void 0;
        for (x = 0, D = T.length; x < D; x++)
          w = T[x], this.source.currentLocation = w.loc, N = N || w.loc, this[w.opcode].apply(this, w.args);
        if (this.source.currentLocation = N, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new c.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), C ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var M = this.createFunctionContext(C);
        if (this.isChild)
          return M;
        var R = {
          compiler: this.compilerInfo(),
          main: M
        };
        this.decorators && (R.main_d = this.decorators, R.useDecorators = !0);
        var q = this.context, Y = q.programs, G = q.decorators;
        for (x = 0, D = Y.length; x < D; x++)
          Y[x] && (R[x] = Y[x], G[x] && (R[x + "_d"] = G[x], R.useDecorators = !0));
        return this.environment.usePartial && (R.usePartial = !0), this.options.data && (R.useData = !0), this.useDepths && (R.useDepths = !0), this.useBlockParams && (R.useBlockParams = !0), this.options.compat && (R.compat = !0), C ? R.compilerOptions = this.options : (R.compiler = JSON.stringify(R.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, R = this.objectLiteral(R), f.srcName ? (R = R.toStringWithSourceMap({ file: f.destName }), R.map = R.map && R.map.toString()) : R = R.toString()), R;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new g.default(this.options.srcName), this.decorators = new g.default(this.options.srcName);
      },
      createFunctionContext: function(p) {
        var f = this, S = "", C = this.stackVars.concat(this.registers.list);
        C.length > 0 && (S += ", " + C.join(", "));
        var T = 0;
        Object.keys(this.aliases).forEach(function(x) {
          var D = f.aliases[x];
          D.children && D.referenceCount > 1 && (S += ", alias" + ++T + "=" + x, D.children[0] = "alias" + T);
        }), this.lookupPropertyFunctionIsUsed && (S += ", " + this.lookupPropertyFunctionVarDeclaration());
        var w = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && w.push("blockParams"), this.useDepths && w.push("depths");
        var N = this.mergeSource(S);
        return p ? (w.push(N), Function.apply(this, w)) : this.source.wrap(["function(", w.join(","), `) {
  `, N, "}"]);
      },
      mergeSource: function(p) {
        var f = this.environment.isSimple, S = !this.forceBuffer, C = void 0, T = void 0, w = void 0, N = void 0;
        return this.source.each(function(x) {
          x.appendToBuffer ? (w ? x.prepend("  + ") : w = x, N = x) : (w && (T ? w.prepend("buffer += ") : C = !0, N.add(";"), w = N = void 0), T = !0, f || (S = !1));
        }), S ? w ? (w.prepend("return "), N.add(";")) : T || this.source.push('return "";') : (p += ", buffer = " + (C ? "" : this.initializeBuffer()), w ? (w.prepend("return buffer + "), N.add(";")) : this.source.push("return buffer;")), p && this.source.prepend("var " + p.substring(2) + (C ? "" : `;
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
        var C = this.popStack();
        S.splice(1, 0, C), this.push(this.source.functionCall(f, "call", S));
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
      lookupOnContext: function(p, f, S, C) {
        var T = 0;
        !C && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(p[T++])) : this.pushContext(), this.resolvePath("context", p, T, f, S);
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
      resolvePath: function(p, f, S, C, T) {
        var w = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(b(this.options.strict && T, this, f, S, p));
          return;
        }
        for (var N = f.length; S < N; S++)
          this.replaceStack(function(x) {
            var D = w.nameLookup(x, f[S], p);
            return C ? [" && ", D] : [" != null ? ", D, " : ", x];
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
        var S = this.nameLookup("decorators", f, "decorator"), C = this.setupHelperArgs(f, p);
        this.decorators.push(["fn = ", this.decorators.functionCall(S, "", ["fn", "props", "container", C]), " || fn;"]);
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
        var C = this.popStack(), T = this.setupHelper(p, f), w = [];
        S && w.push(T.name), w.push(C), this.options.strict || w.push(this.aliasable("container.hooks.helperMissing"));
        var N = ["(", this.itemsSeparatedBy(w, "||"), ")"], x = this.source.functionCall(N, "call", T.callParams);
        this.push(x);
      },
      itemsSeparatedBy: function(p, f) {
        var S = [];
        S.push(p[0]);
        for (var C = 1; C < p.length; C++)
          S.push(f, p[C]);
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
        var C = this.setupHelper(0, p, f), T = this.lastHelper = this.nameLookup("helpers", p, "helper"), w = ["(", "(helper = ", T, " || ", S, ")"];
        this.options.strict || (w[0] = "(helper = ", w.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", w, C.paramsInit ? ["),(", C.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", C.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(p, f, S) {
        var C = [], T = this.setupParams(f, 1, C);
        p && (f = this.popStack(), delete T.name), S && (T.indent = JSON.stringify(S)), T.helpers = "helpers", T.partials = "partials", T.decorators = "container.decorators", p ? C.unshift(f) : C.unshift(this.nameLookup("partials", f, "partial")), this.options.compat && (T.depths = "depths"), T = this.objectLiteral(T), C.push(T), this.push(this.source.functionCall("container.invokePartial", "", C));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(p) {
        var f = this.popStack(), S = void 0, C = void 0, T = void 0;
        this.trackIds && (T = this.popStack()), this.stringParams && (C = this.popStack(), S = this.popStack());
        var w = this.hash;
        S && (w.contexts[p] = S), C && (w.types[p] = C), T && (w.ids[p] = T), w.values[p] = f;
      },
      pushId: function(p, f, S) {
        p === "BlockParam" ? this.pushStackLiteral("blockParams[" + f[0] + "].path[" + f[1] + "]" + (S ? " + " + JSON.stringify("." + S) : "")) : p === "PathExpression" ? this.pushString(f) : p === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: _,
      compileChildren: function(p, f) {
        for (var S = p.children, C = void 0, T = void 0, w = 0, N = S.length; w < N; w++) {
          C = S[w], T = new this.compiler();
          var x = this.matchExistingProgram(C);
          if (x == null) {
            this.context.programs.push("");
            var D = this.context.programs.length;
            C.index = D, C.name = "program" + D, this.context.programs[D] = T.compile(C, f, this.context, !this.precompile), this.context.decorators[D] = T.decorators, this.context.environments[D] = C, this.useDepths = this.useDepths || T.useDepths, this.useBlockParams = this.useBlockParams || T.useBlockParams, C.useDepths = this.useDepths, C.useBlockParams = this.useBlockParams;
          } else
            C.index = x.index, C.name = "program" + x.index, this.useDepths = this.useDepths || x.useDepths, this.useBlockParams = this.useBlockParams || x.useBlockParams;
        }
      },
      matchExistingProgram: function(p) {
        for (var f = 0, S = this.context.environments.length; f < S; f++) {
          var C = this.context.environments[f];
          if (C && C.equals(p))
            return C;
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
        var f = ["("], S = void 0, C = void 0, T = void 0;
        if (!this.isInline())
          throw new c.default("replaceStack on non-inline");
        var w = this.popStack(!0);
        if (w instanceof v)
          S = [w.value], f = ["(", S], T = !0;
        else {
          C = !0;
          var N = this.incrStack();
          f = ["((", this.push(N), " = ", w, ")"], S = this.topStack();
        }
        var x = p.call(this, S);
        T || this.popStack(), C && this.stackSlot--, this.push(f.concat(x, ")"));
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
          var C = p[f];
          if (C instanceof v)
            this.compileStack.push(C);
          else {
            var T = this.incrStack();
            this.pushSource([T, " = ", C, ";"]), this.compileStack.push(T);
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
        var C = [], T = this.setupHelperArgs(f, p, C, S), w = this.nameLookup("helpers", f, "helper"), N = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: C,
          paramsInit: T,
          name: w,
          callParams: [N].concat(C)
        };
      },
      setupParams: function(p, f, S) {
        var C = {}, T = [], w = [], N = [], x = !S, D = void 0;
        x && (S = []), C.name = this.quotedString(p), C.hash = this.popStack(), this.trackIds && (C.hashIds = this.popStack()), this.stringParams && (C.hashTypes = this.popStack(), C.hashContexts = this.popStack());
        var M = this.popStack(), R = this.popStack();
        (R || M) && (C.fn = R || "container.noop", C.inverse = M || "container.noop");
        for (var q = f; q--; )
          D = this.popStack(), S[q] = D, this.trackIds && (N[q] = this.popStack()), this.stringParams && (w[q] = this.popStack(), T[q] = this.popStack());
        return x && (C.args = this.source.generateArray(S)), this.trackIds && (C.ids = this.source.generateArray(N)), this.stringParams && (C.types = this.source.generateArray(w), C.contexts = this.source.generateArray(T)), this.options.data && (C.data = "data"), this.useBlockParams && (C.blockParams = "blockParams"), C;
      },
      setupHelperArgs: function(p, f, S, C) {
        var T = this.setupParams(p, f, S);
        return T.loc = JSON.stringify(this.source.currentLocation), T = this.objectLiteral(T), C ? (this.useRegister("options"), S.push("options"), ["options=", T]) : S ? (S.push(T), "") : T;
      }
    }, (function() {
      for (var y = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), p = _.RESERVED_WORDS = {}, f = 0, S = y.length; f < S; f++)
        p[y[f]] = !0;
    })(), _.isValidJavaScriptVariableName = function(y) {
      return !_.RESERVED_WORDS[y] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(y);
    };
    function b(y, p, f, S, C) {
      var T = p.popStack(), w = f.length;
      for (y && w--; S < w; S++)
        T = p.nameLookup(T, f[S], C);
      return y ? [p.aliasable("container.strict"), "(", T, ", ", p.quotedString(f[S]), ", ", JSON.stringify(p.source.currentLocation), " )"] : T;
    }
    r.default = _, n.exports = r.default;
  })(zo, zo.exports)), zo.exports;
}
var ny;
function rx() {
  return ny || (ny = 1, (function(n, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var l = qS(), o = i(l), c = E0(), h = i(c), m = VS(), g = YS(), v = nx(), _ = i(v), b = C0(), y = i(b), p = x0(), f = i(p), S = o.default.create;
    function C() {
      var w = S();
      return w.compile = function(N, x) {
        return g.compile(N, x, w);
      }, w.precompile = function(N, x) {
        return g.precompile(N, x, w);
      }, w.AST = h.default, w.Compiler = g.Compiler, w.JavaScriptCompiler = _.default, w.Parser = m.parser, w.parse = m.parse, w.parseWithoutProcessing = m.parseWithoutProcessing, w;
    }
    var T = C();
    T.create = C, f.default(T), T.Visitor = y.default, T.default = T, r.default = T, n.exports = r.default;
  })(po, po.exports)), po.exports;
}
var ga = rx();
function bi(n, r) {
  ga.helpers[n] || ga.registerHelper(n, r);
}
bi("add", (n, r) => Number(n) + Number(r));
bi("join", (n, r) => Array.isArray(n) ? n.join(typeof r == "string" ? r : ", ") : "");
bi("is_not_empty", function(n, r) {
  return n ? Array.isArray(n) ? n.length > 0 ? r.fn(this) : r.inverse(this) : typeof n == "object" && Object.keys(n).length > 0 ? r.fn(this) : typeof n != "object" && !Array.isArray(n) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
bi("indent", (n, r) => {
  const i = " ".repeat(Math.max(0, Number(n) || 0));
  return String(r ?? "").split(`
`).join(`
${i}`);
});
bi("json", (n) => JSON.stringify(n));
bi(
  "xmlEscape",
  (n) => String(n ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
);
const ax = "﷐", T0 = "﷑", ix = "﷒", ry = "[[[crec_veryUniqueUserPlaceHolder]]]", ay = "[[[crec_veryUniqueCharPlaceHolder]]]";
function iy(n) {
  return n.replace(
    /\{\{|\}\}|[\uFDD0-\uFDD2]/g,
    (r) => r === "{{" ? T0 : r === "}}" ? ix : ax + r
  );
}
function lx(n) {
  return n.replace(
    /\uFDD0([\uFDD0-\uFDD2])|[\uFDD1\uFDD2]/g,
    (r, i) => i || (r === T0 ? "{{" : "}}")
  );
}
function gt(n) {
  return typeof n == "string" ? iy(n) : Array.isArray(n) ? n.map((r) => gt(r)) : n && typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r, i]) => [iy(r), gt(i)])) : n;
}
function Pl(n, r, i) {
  let l = ga.compile(n, { noEscape: !0 })(r);
  return l = l.replaceAll("{{user}}", ry), l = l.replaceAll("{{char}}", ay), l = i(l), l = l.replaceAll(ry, "{{user}}"), l = l.replaceAll(ay, "{{char}}"), lx(l);
}
function K(n, r, i) {
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
class gi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class O0 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const N0 = {};
function va(n) {
  return N0;
}
function M0(n) {
  const r = Object.values(n).filter((l) => typeof l == "number");
  return Object.entries(n).filter(([l, o]) => r.indexOf(+l) === -1).map(([l, o]) => o);
}
function _h(n, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function Uh(n) {
  return {
    get value() {
      {
        const r = n();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function Ph(n) {
  return n == null;
}
function Hh(n) {
  const r = n.startsWith("^") ? 1 : 0, i = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(r, i);
}
function sx(n, r) {
  const i = (n.toString().split(".")[1] || "").length, l = r.toString();
  let o = (l.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(l)) {
    const g = l.match(/\d?e-(\d?)/);
    g?.[1] && (o = Number.parseInt(g[1]));
  }
  const c = i > o ? i : o, h = Number.parseInt(n.toFixed(c).replace(".", "")), m = Number.parseInt(r.toFixed(c).replace(".", ""));
  return h % m / 10 ** c;
}
const ly = Symbol("evaluating");
function We(n, r, i) {
  let l;
  Object.defineProperty(n, r, {
    get() {
      if (l !== ly)
        return l === void 0 && (l = ly, l = i()), l;
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
function sy(n) {
  return JSON.stringify(n);
}
const k0 = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function lu(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const ox = Uh(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function Hl(n) {
  if (lu(n) === !1)
    return !1;
  const r = n.constructor;
  if (r === void 0)
    return !0;
  const i = r.prototype;
  return !(lu(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function R0(n) {
  return Hl(n) ? { ...n } : Array.isArray(n) ? [...n] : n;
}
const ux = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function gu(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function qr(n, r, i) {
  const l = new n._zod.constr(r ?? n._zod.def);
  return (!r || i?.parent) && (l._zod.parent = n), l;
}
function de(n) {
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
function cx(n) {
  return Object.keys(n).filter((r) => n[r]._zod.optin === "optional" && n[r]._zod.optout === "optional");
}
const fx = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function hx(n, r) {
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
  return qr(n, l);
}
function dx(n, r) {
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
  return qr(n, l);
}
function px(n, r) {
  if (!Hl(r))
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
  return qr(n, o);
}
function mx(n, r) {
  if (!Hl(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...n._zod.def,
    get shape() {
      const l = { ...n._zod.def.shape, ...r };
      return _a(this, "shape", l), l;
    },
    checks: n._zod.def.checks
  };
  return qr(n, i);
}
function gx(n, r) {
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
  return qr(n, i);
}
function vx(n, r, i) {
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
  return qr(r, l);
}
function yx(n, r, i) {
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
  return qr(r, l);
}
function pi(n, r = 0) {
  if (n.aborted === !0)
    return !0;
  for (let i = r; i < n.issues.length; i++)
    if (n.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function j0(n, r) {
  return r.map((i) => {
    var l;
    return (l = i).path ?? (l.path = []), i.path.unshift(n), i;
  });
}
function Po(n) {
  return typeof n == "string" ? n : n?.message;
}
function ya(n, r, i) {
  const l = { ...n, path: n.path ?? [] };
  if (!n.message) {
    const o = Po(n.inst?._zod.def?.error?.(n)) ?? Po(r?.error?.(n)) ?? Po(i.customError?.(n)) ?? Po(i.localeError?.(n)) ?? "Invalid input";
    l.message = o;
  }
  return delete l.inst, delete l.continue, r?.reportInput || delete l.input, l;
}
function Ih(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function Il(...n) {
  const [r, i, l] = n;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: i,
    inst: l
  } : { ...r };
}
const z0 = (n, r) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: r,
    enumerable: !1
  }), n.message = JSON.stringify(r, _h, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, L0 = K("$ZodError", z0), B0 = K("$ZodError", z0, { Parent: Error });
function _x(n, r = (i) => i.message) {
  const i = {}, l = [];
  for (const o of n.issues)
    o.path.length > 0 ? (i[o.path[0]] = i[o.path[0]] || [], i[o.path[0]].push(r(o))) : l.push(r(o));
  return { formErrors: l, fieldErrors: i };
}
function bx(n, r = (i) => i.message) {
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
const qh = (n) => (r, i, l, o) => {
  const c = l ? Object.assign(l, { async: !1 }) : { async: !1 }, h = r._zod.run({ value: i, issues: [] }, c);
  if (h instanceof Promise)
    throw new gi();
  if (h.issues.length) {
    const m = new (o?.Err ?? n)(h.issues.map((g) => ya(g, c, va())));
    throw k0(m, o?.callee), m;
  }
  return h.value;
}, Zh = (n) => async (r, i, l, o) => {
  const c = l ? Object.assign(l, { async: !0 }) : { async: !0 };
  let h = r._zod.run({ value: i, issues: [] }, c);
  if (h instanceof Promise && (h = await h), h.issues.length) {
    const m = new (o?.Err ?? n)(h.issues.map((g) => ya(g, c, va())));
    throw k0(m, o?.callee), m;
  }
  return h.value;
}, vu = (n) => (r, i, l) => {
  const o = l ? { ...l, async: !1 } : { async: !1 }, c = r._zod.run({ value: i, issues: [] }, o);
  if (c instanceof Promise)
    throw new gi();
  return c.issues.length ? {
    success: !1,
    error: new (n ?? L0)(c.issues.map((h) => ya(h, o, va())))
  } : { success: !0, data: c.value };
}, Sx = /* @__PURE__ */ vu(B0), yu = (n) => async (r, i, l) => {
  const o = l ? Object.assign(l, { async: !0 }) : { async: !0 };
  let c = r._zod.run({ value: i, issues: [] }, o);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new n(c.issues.map((h) => ya(h, o, va())))
  } : { success: !0, data: c.value };
}, xx = /* @__PURE__ */ yu(B0), Ex = (n) => (r, i, l) => {
  const o = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return qh(n)(r, i, o);
}, Cx = (n) => (r, i, l) => qh(n)(r, i, l), wx = (n) => async (r, i, l) => {
  const o = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Zh(n)(r, i, o);
}, Ax = (n) => async (r, i, l) => Zh(n)(r, i, l), Dx = (n) => (r, i, l) => {
  const o = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return vu(n)(r, i, o);
}, Tx = (n) => (r, i, l) => vu(n)(r, i, l), Ox = (n) => async (r, i, l) => {
  const o = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return yu(n)(r, i, o);
}, Nx = (n) => async (r, i, l) => yu(n)(r, i, l), Mx = /^[cC][^\s-]{8,}$/, kx = /^[0-9a-z]+$/, Rx = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, jx = /^[0-9a-vA-V]{20}$/, zx = /^[A-Za-z0-9]{27}$/, Lx = /^[a-zA-Z0-9_-]{21}$/, Bx = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Ux = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, oy = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Px = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Hx = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Ix() {
  return new RegExp(Hx, "u");
}
const qx = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Zx = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Gx = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Fx = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Vx = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, U0 = /^[A-Za-z0-9_-]*$/, Yx = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Xx = /^\+(?:[0-9]){6,14}[0-9]$/, P0 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Qx = /* @__PURE__ */ new RegExp(`^${P0}$`);
function H0(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function $x(n) {
  return new RegExp(`^${H0(n)}$`);
}
function Kx(n) {
  const r = H0({ precision: n.precision }), i = ["Z"];
  n.local && i.push(""), n.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const l = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${P0}T(?:${l})$`);
}
const Jx = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, Wx = /^-?\d+$/, eE = /^-?\d+(?:\.\d+)?/, tE = /^[^A-Z]*$/, nE = /^[^a-z]*$/, Yt = /* @__PURE__ */ K("$ZodCheck", (n, r) => {
  var i;
  n._zod ?? (n._zod = {}), n._zod.def = r, (i = n._zod).onattach ?? (i.onattach = []);
}), I0 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, q0 = /* @__PURE__ */ K("$ZodCheckLessThan", (n, r) => {
  Yt.init(n, r);
  const i = I0[typeof r.value];
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
}), Z0 = /* @__PURE__ */ K("$ZodCheckGreaterThan", (n, r) => {
  Yt.init(n, r);
  const i = I0[typeof r.value];
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
}), rE = /* @__PURE__ */ K("$ZodCheckMultipleOf", (n, r) => {
  Yt.init(n, r), n._zod.onattach.push((i) => {
    var l;
    (l = i._zod.bag).multipleOf ?? (l.multipleOf = r.value);
  }), n._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : sx(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), aE = /* @__PURE__ */ K("$ZodCheckNumberFormat", (n, r) => {
  Yt.init(n, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), l = i ? "int" : "number", [o, c] = fx[r.format];
  n._zod.onattach.push((h) => {
    const m = h._zod.bag;
    m.format = r.format, m.minimum = o, m.maximum = c, i && (m.pattern = Wx);
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
}), iE = /* @__PURE__ */ K("$ZodCheckMaxLength", (n, r) => {
  var i;
  Yt.init(n, r), (i = n._zod.def).when ?? (i.when = (l) => {
    const o = l.value;
    return !Ph(o) && o.length !== void 0;
  }), n._zod.onattach.push((l) => {
    const o = l._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < o && (l._zod.bag.maximum = r.maximum);
  }), n._zod.check = (l) => {
    const o = l.value;
    if (o.length <= r.maximum)
      return;
    const h = Ih(o);
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
}), lE = /* @__PURE__ */ K("$ZodCheckMinLength", (n, r) => {
  var i;
  Yt.init(n, r), (i = n._zod.def).when ?? (i.when = (l) => {
    const o = l.value;
    return !Ph(o) && o.length !== void 0;
  }), n._zod.onattach.push((l) => {
    const o = l._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > o && (l._zod.bag.minimum = r.minimum);
  }), n._zod.check = (l) => {
    const o = l.value;
    if (o.length >= r.minimum)
      return;
    const h = Ih(o);
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
}), sE = /* @__PURE__ */ K("$ZodCheckLengthEquals", (n, r) => {
  var i;
  Yt.init(n, r), (i = n._zod.def).when ?? (i.when = (l) => {
    const o = l.value;
    return !Ph(o) && o.length !== void 0;
  }), n._zod.onattach.push((l) => {
    const o = l._zod.bag;
    o.minimum = r.length, o.maximum = r.length, o.length = r.length;
  }), n._zod.check = (l) => {
    const o = l.value, c = o.length;
    if (c === r.length)
      return;
    const h = Ih(o), m = c > r.length;
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
}), _u = /* @__PURE__ */ K("$ZodCheckStringFormat", (n, r) => {
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
}), oE = /* @__PURE__ */ K("$ZodCheckRegex", (n, r) => {
  _u.init(n, r), n._zod.check = (i) => {
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
}), uE = /* @__PURE__ */ K("$ZodCheckLowerCase", (n, r) => {
  r.pattern ?? (r.pattern = tE), _u.init(n, r);
}), cE = /* @__PURE__ */ K("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = nE), _u.init(n, r);
}), fE = /* @__PURE__ */ K("$ZodCheckIncludes", (n, r) => {
  Yt.init(n, r);
  const i = gu(r.includes), l = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${i}` : i);
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
}), hE = /* @__PURE__ */ K("$ZodCheckStartsWith", (n, r) => {
  Yt.init(n, r);
  const i = new RegExp(`^${gu(r.prefix)}.*`);
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
}), dE = /* @__PURE__ */ K("$ZodCheckEndsWith", (n, r) => {
  Yt.init(n, r);
  const i = new RegExp(`.*${gu(r.suffix)}$`);
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
}), pE = /* @__PURE__ */ K("$ZodCheckOverwrite", (n, r) => {
  Yt.init(n, r), n._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class mE {
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
const gE = {
  major: 4,
  minor: 1,
  patch: 12
}, yt = /* @__PURE__ */ K("$ZodType", (n, r) => {
  var i;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = gE;
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
      let v = pi(h), _;
      for (const b of m) {
        if (b._zod.def.when) {
          if (!b._zod.def.when(h))
            continue;
        } else if (v)
          continue;
        const y = h.issues.length, p = b._zod.check(h);
        if (p instanceof Promise && g?.async === !1)
          throw new gi();
        if (_ || p instanceof Promise)
          _ = (_ ?? Promise.resolve()).then(async () => {
            await p, h.issues.length !== y && (v || (v = pi(h, y)));
          });
        else {
          if (h.issues.length === y)
            continue;
          v || (v = pi(h, y));
        }
      }
      return _ ? _.then(() => h) : h;
    }, c = (h, m, g) => {
      if (pi(h))
        return h.aborted = !0, h;
      const v = o(m, l, g);
      if (v instanceof Promise) {
        if (g.async === !1)
          throw new gi();
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
          throw new gi();
        return g.then((v) => o(v, l, m));
      }
      return o(g, l, m);
    };
  }
  n["~standard"] = {
    validate: (o) => {
      try {
        const c = Sx(n, o);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return xx(n, o).then((h) => h.success ? { value: h.data } : { issues: h.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Gh = /* @__PURE__ */ K("$ZodString", (n, r) => {
  yt.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? Jx(n._zod.bag), n._zod.parse = (i, l) => {
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
}), nt = /* @__PURE__ */ K("$ZodStringFormat", (n, r) => {
  _u.init(n, r), Gh.init(n, r);
}), vE = /* @__PURE__ */ K("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = Ux), nt.init(n, r);
}), yE = /* @__PURE__ */ K("$ZodUUID", (n, r) => {
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
    r.pattern ?? (r.pattern = oy(l));
  } else
    r.pattern ?? (r.pattern = oy());
  nt.init(n, r);
}), _E = /* @__PURE__ */ K("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = Px), nt.init(n, r);
}), bE = /* @__PURE__ */ K("$ZodURL", (n, r) => {
  nt.init(n, r), n._zod.check = (i) => {
    try {
      const l = i.value.trim(), o = new URL(l);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(o.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Yx.source,
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
}), SE = /* @__PURE__ */ K("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = Ix()), nt.init(n, r);
}), xE = /* @__PURE__ */ K("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = Lx), nt.init(n, r);
}), EE = /* @__PURE__ */ K("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = Mx), nt.init(n, r);
}), CE = /* @__PURE__ */ K("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = kx), nt.init(n, r);
}), wE = /* @__PURE__ */ K("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = Rx), nt.init(n, r);
}), AE = /* @__PURE__ */ K("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = jx), nt.init(n, r);
}), DE = /* @__PURE__ */ K("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = zx), nt.init(n, r);
}), TE = /* @__PURE__ */ K("$ZodISODateTime", (n, r) => {
  r.pattern ?? (r.pattern = Kx(r)), nt.init(n, r);
}), OE = /* @__PURE__ */ K("$ZodISODate", (n, r) => {
  r.pattern ?? (r.pattern = Qx), nt.init(n, r);
}), NE = /* @__PURE__ */ K("$ZodISOTime", (n, r) => {
  r.pattern ?? (r.pattern = $x(r)), nt.init(n, r);
}), ME = /* @__PURE__ */ K("$ZodISODuration", (n, r) => {
  r.pattern ?? (r.pattern = Bx), nt.init(n, r);
}), kE = /* @__PURE__ */ K("$ZodIPv4", (n, r) => {
  r.pattern ?? (r.pattern = qx), nt.init(n, r), n._zod.onattach.push((i) => {
    const l = i._zod.bag;
    l.format = "ipv4";
  });
}), RE = /* @__PURE__ */ K("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = Zx), nt.init(n, r), n._zod.onattach.push((i) => {
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
}), jE = /* @__PURE__ */ K("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = Gx), nt.init(n, r);
}), zE = /* @__PURE__ */ K("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = Fx), nt.init(n, r), n._zod.check = (i) => {
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
function G0(n) {
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
const LE = /* @__PURE__ */ K("$ZodBase64", (n, r) => {
  r.pattern ?? (r.pattern = Vx), nt.init(n, r), n._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), n._zod.check = (i) => {
    G0(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
});
function BE(n) {
  if (!U0.test(n))
    return !1;
  const r = n.replace(/[-_]/g, (l) => l === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return G0(i);
}
const UE = /* @__PURE__ */ K("$ZodBase64URL", (n, r) => {
  r.pattern ?? (r.pattern = U0), nt.init(n, r), n._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (i) => {
    BE(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), PE = /* @__PURE__ */ K("$ZodE164", (n, r) => {
  r.pattern ?? (r.pattern = Xx), nt.init(n, r);
});
function HE(n, r = null) {
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
const IE = /* @__PURE__ */ K("$ZodJWT", (n, r) => {
  nt.init(n, r), n._zod.check = (i) => {
    HE(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), F0 = /* @__PURE__ */ K("$ZodNumber", (n, r) => {
  yt.init(n, r), n._zod.pattern = n._zod.bag.pattern ?? eE, n._zod.parse = (i, l) => {
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
}), qE = /* @__PURE__ */ K("$ZodNumber", (n, r) => {
  aE.init(n, r), F0.init(n, r);
}), ZE = /* @__PURE__ */ K("$ZodUnknown", (n, r) => {
  yt.init(n, r), n._zod.parse = (i) => i;
}), GE = /* @__PURE__ */ K("$ZodNever", (n, r) => {
  yt.init(n, r), n._zod.parse = (i, l) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: n
  }), i);
});
function uy(n, r, i) {
  n.issues.length && r.issues.push(...j0(i, n.issues)), r.value[i] = n.value;
}
const FE = /* @__PURE__ */ K("$ZodArray", (n, r) => {
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
      g instanceof Promise ? c.push(g.then((v) => uy(v, i, h))) : uy(g, i, h);
    }
    return c.length ? Promise.all(c).then(() => i) : i;
  };
});
function su(n, r, i, l) {
  n.issues.length && r.issues.push(...j0(i, n.issues)), n.value === void 0 ? i in l && (r.value[i] = void 0) : r.value[i] = n.value;
}
function V0(n) {
  const r = Object.keys(n.shape);
  for (const l of r)
    if (!n.shape?.[l]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${l}": expected a Zod schema`);
  const i = cx(n.shape);
  return {
    ...n,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function Y0(n, r, i, l, o, c) {
  const h = [], m = o.keySet, g = o.catchall._zod, v = g.def.type;
  for (const _ of Object.keys(r)) {
    if (m.has(_))
      continue;
    if (v === "never") {
      h.push(_);
      continue;
    }
    const b = g.run({ value: r[_], issues: [] }, l);
    b instanceof Promise ? n.push(b.then((y) => su(y, i, _, r))) : su(b, i, _, r);
  }
  return h.length && i.issues.push({
    code: "unrecognized_keys",
    keys: h,
    input: r,
    inst: c
  }), n.length ? Promise.all(n).then(() => i) : i;
}
const VE = /* @__PURE__ */ K("$ZodObject", (n, r) => {
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
  const l = Uh(() => V0(r));
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
  const o = lu, c = r.catchall;
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
      f instanceof Promise ? _.push(f.then((S) => su(S, m, y, v))) : su(f, m, y, v);
    }
    return c ? Y0(_, v, m, g, l.value, n) : _.length ? Promise.all(_).then(() => m) : m;
  };
}), YE = /* @__PURE__ */ K("$ZodObjectJIT", (n, r) => {
  VE.init(n, r);
  const i = n._zod.parse, l = Uh(() => V0(r)), o = (y) => {
    const p = new mE(["shape", "payload", "ctx"]), f = l.value, S = (N) => {
      const x = sy(N);
      return `shape[${x}]._zod.run({ value: input[${x}], issues: [] }, ctx)`;
    };
    p.write("const input = payload.value;");
    const C = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const N of f.keys)
      C[N] = `key_${T++}`;
    p.write("const newResult = {};");
    for (const N of f.keys) {
      const x = C[N], D = sy(N);
      p.write(`const ${x} = ${S(N)};`), p.write(`
        if (${x}.issues.length) {
          payload.issues = payload.issues.concat(${x}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${D}, ...iss.path] : [${D}]
          })));
        }
        
        
        if (${x}.value === undefined) {
          if (${D} in input) {
            newResult[${D}] = undefined;
          }
        } else {
          newResult[${D}] = ${x}.value;
        }
        
      `);
    }
    p.write("payload.value = newResult;"), p.write("return payload;");
    const w = p.compile();
    return (N, x) => w(y, N, x);
  };
  let c;
  const h = lu, m = !N0.jitless, v = m && ox.value, _ = r.catchall;
  let b;
  n._zod.parse = (y, p) => {
    b ?? (b = l.value);
    const f = y.value;
    return h(f) ? m && v && p?.async === !1 && p.jitless !== !0 ? (c || (c = o(r.shape)), y = c(y, p), _ ? Y0([], f, y, p, b, n) : y) : i(y, p) : (y.issues.push({
      expected: "object",
      code: "invalid_type",
      input: f,
      inst: n
    }), y);
  };
});
function cy(n, r, i, l) {
  for (const c of n)
    if (c.issues.length === 0)
      return r.value = c.value, r;
  const o = n.filter((c) => !pi(c));
  return o.length === 1 ? (r.value = o[0].value, o[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: i,
    errors: n.map((c) => c.issues.map((h) => ya(h, l, va())))
  }), r);
}
const XE = /* @__PURE__ */ K("$ZodUnion", (n, r) => {
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
    return h ? Promise.all(m).then((g) => cy(g, o, n, c)) : cy(m, o, n, c);
  };
}), QE = /* @__PURE__ */ K("$ZodIntersection", (n, r) => {
  yt.init(n, r), n._zod.parse = (i, l) => {
    const o = i.value, c = r.left._zod.run({ value: o, issues: [] }, l), h = r.right._zod.run({ value: o, issues: [] }, l);
    return c instanceof Promise || h instanceof Promise ? Promise.all([c, h]).then(([g, v]) => fy(i, g, v)) : fy(i, c, h);
  };
});
function bh(n, r) {
  if (n === r)
    return { valid: !0, data: n };
  if (n instanceof Date && r instanceof Date && +n == +r)
    return { valid: !0, data: n };
  if (Hl(n) && Hl(r)) {
    const i = Object.keys(r), l = Object.keys(n).filter((c) => i.indexOf(c) !== -1), o = { ...n, ...r };
    for (const c of l) {
      const h = bh(n[c], r[c]);
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
      const o = n[l], c = r[l], h = bh(o, c);
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
function fy(n, r, i) {
  if (r.issues.length && n.issues.push(...r.issues), i.issues.length && n.issues.push(...i.issues), pi(n))
    return n;
  const l = bh(r.value, i.value);
  if (!l.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
  return n.value = l.data, n;
}
const $E = /* @__PURE__ */ K("$ZodEnum", (n, r) => {
  yt.init(n, r);
  const i = M0(r.entries), l = new Set(i);
  n._zod.values = l, n._zod.pattern = new RegExp(`^(${i.filter((o) => ux.has(typeof o)).map((o) => typeof o == "string" ? gu(o) : o.toString()).join("|")})$`), n._zod.parse = (o, c) => {
    const h = o.value;
    return l.has(h) || o.issues.push({
      code: "invalid_value",
      values: i,
      input: h,
      inst: n
    }), o;
  };
}), KE = /* @__PURE__ */ K("$ZodTransform", (n, r) => {
  yt.init(n, r), n._zod.parse = (i, l) => {
    if (l.direction === "backward")
      throw new O0(n.constructor.name);
    const o = r.transform(i.value, i);
    if (l.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((h) => (i.value = h, i));
    if (o instanceof Promise)
      throw new gi();
    return i.value = o, i;
  };
});
function hy(n, r) {
  return n.issues.length && r === void 0 ? { issues: [], value: void 0 } : n;
}
const JE = /* @__PURE__ */ K("$ZodOptional", (n, r) => {
  yt.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", We(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), We(n._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${Hh(i.source)})?$`) : void 0;
  }), n._zod.parse = (i, l) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(i, l);
      return o instanceof Promise ? o.then((c) => hy(c, i.value)) : hy(o, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, l);
  };
}), WE = /* @__PURE__ */ K("$ZodNullable", (n, r) => {
  yt.init(n, r), We(n._zod, "optin", () => r.innerType._zod.optin), We(n._zod, "optout", () => r.innerType._zod.optout), We(n._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${Hh(i.source)}|null)$`) : void 0;
  }), We(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (i, l) => i.value === null ? i : r.innerType._zod.run(i, l);
}), e3 = /* @__PURE__ */ K("$ZodDefault", (n, r) => {
  yt.init(n, r), n._zod.optin = "optional", We(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, l) => {
    if (l.direction === "backward")
      return r.innerType._zod.run(i, l);
    if (i.value === void 0)
      return i.value = r.defaultValue, i;
    const o = r.innerType._zod.run(i, l);
    return o instanceof Promise ? o.then((c) => dy(c, r)) : dy(o, r);
  };
});
function dy(n, r) {
  return n.value === void 0 && (n.value = r.defaultValue), n;
}
const t3 = /* @__PURE__ */ K("$ZodPrefault", (n, r) => {
  yt.init(n, r), n._zod.optin = "optional", We(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, l) => (l.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, l));
}), n3 = /* @__PURE__ */ K("$ZodNonOptional", (n, r) => {
  yt.init(n, r), We(n._zod, "values", () => {
    const i = r.innerType._zod.values;
    return i ? new Set([...i].filter((l) => l !== void 0)) : void 0;
  }), n._zod.parse = (i, l) => {
    const o = r.innerType._zod.run(i, l);
    return o instanceof Promise ? o.then((c) => py(c, n)) : py(o, n);
  };
});
function py(n, r) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: r
  }), n;
}
const r3 = /* @__PURE__ */ K("$ZodCatch", (n, r) => {
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
}), a3 = /* @__PURE__ */ K("$ZodPipe", (n, r) => {
  yt.init(n, r), We(n._zod, "values", () => r.in._zod.values), We(n._zod, "optin", () => r.in._zod.optin), We(n._zod, "optout", () => r.out._zod.optout), We(n._zod, "propValues", () => r.in._zod.propValues), n._zod.parse = (i, l) => {
    if (l.direction === "backward") {
      const c = r.out._zod.run(i, l);
      return c instanceof Promise ? c.then((h) => Ho(h, r.in, l)) : Ho(c, r.in, l);
    }
    const o = r.in._zod.run(i, l);
    return o instanceof Promise ? o.then((c) => Ho(c, r.out, l)) : Ho(o, r.out, l);
  };
});
function Ho(n, r, i) {
  return n.issues.length ? (n.aborted = !0, n) : r._zod.run({ value: n.value, issues: n.issues }, i);
}
const i3 = /* @__PURE__ */ K("$ZodReadonly", (n, r) => {
  yt.init(n, r), We(n._zod, "propValues", () => r.innerType._zod.propValues), We(n._zod, "values", () => r.innerType._zod.values), We(n._zod, "optin", () => r.innerType._zod.optin), We(n._zod, "optout", () => r.innerType._zod.optout), n._zod.parse = (i, l) => {
    if (l.direction === "backward")
      return r.innerType._zod.run(i, l);
    const o = r.innerType._zod.run(i, l);
    return o instanceof Promise ? o.then(my) : my(o);
  };
});
function my(n) {
  return n.value = Object.freeze(n.value), n;
}
const l3 = /* @__PURE__ */ K("$ZodCustom", (n, r) => {
  Yt.init(n, r), yt.init(n, r), n._zod.parse = (i, l) => i, n._zod.check = (i) => {
    const l = i.value, o = r.fn(l);
    if (o instanceof Promise)
      return o.then((c) => gy(c, i, l, n));
    gy(o, i, l, n);
  };
});
function gy(n, r, i, l) {
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
    l._zod.def.params && (o.params = l._zod.def.params), r.issues.push(Il(o));
  }
}
class X0 {
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
function s3() {
  return new X0();
}
const Nl = /* @__PURE__ */ s3();
function o3(n, r) {
  return new n({
    type: "string",
    ...de(r)
  });
}
function u3(n, r) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function vy(n, r) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function c3(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function f3(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...de(r)
  });
}
function h3(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...de(r)
  });
}
function d3(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...de(r)
  });
}
function p3(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function m3(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function g3(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function v3(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function y3(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function _3(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function b3(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function S3(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function x3(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function E3(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function C3(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function w3(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function A3(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function D3(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function T3(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function O3(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...de(r)
  });
}
function N3(n, r) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...de(r)
  });
}
function M3(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...de(r)
  });
}
function k3(n, r) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...de(r)
  });
}
function R3(n, r) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...de(r)
  });
}
function j3(n, r) {
  return new n({
    type: "number",
    checks: [],
    ...de(r)
  });
}
function z3(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...de(r)
  });
}
function L3(n) {
  return new n({
    type: "unknown"
  });
}
function B3(n, r) {
  return new n({
    type: "never",
    ...de(r)
  });
}
function yy(n, r) {
  return new q0({
    check: "less_than",
    ...de(r),
    value: n,
    inclusive: !1
  });
}
function rh(n, r) {
  return new q0({
    check: "less_than",
    ...de(r),
    value: n,
    inclusive: !0
  });
}
function _y(n, r) {
  return new Z0({
    check: "greater_than",
    ...de(r),
    value: n,
    inclusive: !1
  });
}
function ah(n, r) {
  return new Z0({
    check: "greater_than",
    ...de(r),
    value: n,
    inclusive: !0
  });
}
function by(n, r) {
  return new rE({
    check: "multiple_of",
    ...de(r),
    value: n
  });
}
function Q0(n, r) {
  return new iE({
    check: "max_length",
    ...de(r),
    maximum: n
  });
}
function ou(n, r) {
  return new lE({
    check: "min_length",
    ...de(r),
    minimum: n
  });
}
function $0(n, r) {
  return new sE({
    check: "length_equals",
    ...de(r),
    length: n
  });
}
function U3(n, r) {
  return new oE({
    check: "string_format",
    format: "regex",
    ...de(r),
    pattern: n
  });
}
function P3(n) {
  return new uE({
    check: "string_format",
    format: "lowercase",
    ...de(n)
  });
}
function H3(n) {
  return new cE({
    check: "string_format",
    format: "uppercase",
    ...de(n)
  });
}
function I3(n, r) {
  return new fE({
    check: "string_format",
    format: "includes",
    ...de(r),
    includes: n
  });
}
function q3(n, r) {
  return new hE({
    check: "string_format",
    format: "starts_with",
    ...de(r),
    prefix: n
  });
}
function Z3(n, r) {
  return new dE({
    check: "string_format",
    format: "ends_with",
    ...de(r),
    suffix: n
  });
}
function Vl(n) {
  return new pE({
    check: "overwrite",
    tx: n
  });
}
function G3(n) {
  return Vl((r) => r.normalize(n));
}
function F3() {
  return Vl((n) => n.trim());
}
function V3() {
  return Vl((n) => n.toLowerCase());
}
function Y3() {
  return Vl((n) => n.toUpperCase());
}
function X3(n, r, i) {
  return new n({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...de(i)
  });
}
function Q3(n, r, i) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...de(i)
  });
}
function $3(n) {
  const r = K3((i) => (i.addIssue = (l) => {
    if (typeof l == "string")
      i.issues.push(Il(l, i.value, r._zod.def));
    else {
      const o = l;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = i.value), o.inst ?? (o.inst = r), o.continue ?? (o.continue = !r._zod.def.abort), i.issues.push(Il(o));
    }
  }, n(i.value, i)));
  return r;
}
function K3(n, r) {
  const i = new Yt({
    check: "custom",
    ...de(r)
  });
  return i._zod.check = n, i;
}
class Sy {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Nl, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
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
            const { minimum: S, maximum: C, format: T, patterns: w, contentEncoding: N } = r._zod.bag;
            if (typeof S == "number" && (f.minLength = S), typeof C == "number" && (f.maxLength = C), T && (f.format = c[T] ?? T, f.format === "" && delete f.format), N && (f.contentEncoding = N), w && w.size > 0) {
              const x = [...w];
              x.length === 1 ? f.pattern = x[0].source : x.length > 1 && (m.schema.allOf = [
                ...x.map((D) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: D.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const f = p, { minimum: S, maximum: C, format: T, multipleOf: w, exclusiveMaximum: N, exclusiveMinimum: x } = r._zod.bag;
            typeof T == "string" && T.includes("int") ? f.type = "integer" : f.type = "number", typeof x == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (f.minimum = x, f.exclusiveMinimum = !0) : f.exclusiveMinimum = x), typeof S == "number" && (f.minimum = S, typeof x == "number" && this.target !== "draft-4" && (x >= S ? delete f.minimum : delete f.exclusiveMinimum)), typeof N == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (f.maximum = N, f.exclusiveMaximum = !0) : f.exclusiveMaximum = N), typeof C == "number" && (f.maximum = C, typeof N == "number" && this.target !== "draft-4" && (N <= C ? delete f.maximum : delete f.exclusiveMaximum)), typeof w == "number" && (f.multipleOf = w);
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
            const f = p, { minimum: S, maximum: C } = r._zod.bag;
            typeof S == "number" && (f.minItems = S), typeof C == "number" && (f.maxItems = C), f.type = "array", f.items = this.process(o.element, { ...b, path: [...b.path, "items"] });
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
            const C = new Set(Object.keys(S)), T = new Set([...C].filter((w) => {
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
            const f = p, S = o.options.map((C, T) => this.process(C, {
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
            }), C = this.process(o.right, {
              ...b,
              path: [...b.path, "allOf", 1]
            }), T = (N) => "allOf" in N && Object.keys(N).length === 1, w = [
              ...T(S) ? S.allOf : [S],
              ...T(C) ? C.allOf : [C]
            ];
            f.allOf = w;
            break;
          }
          case "tuple": {
            const f = p;
            f.type = "array";
            const S = this.target === "draft-2020-12" ? "prefixItems" : "items", C = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", T = o.items.map((D, M) => this.process(D, {
              ...b,
              path: [...b.path, S, M]
            })), w = o.rest ? this.process(o.rest, {
              ...b,
              path: [...b.path, C, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (f.prefixItems = T, w && (f.items = w)) : this.target === "openapi-3.0" ? (f.items = {
              anyOf: T
            }, w && f.items.anyOf.push(w), f.minItems = T.length, w || (f.maxItems = T.length)) : (f.items = T, w && (f.additionalItems = w));
            const { minimum: N, maximum: x } = r._zod.bag;
            typeof N == "number" && (f.minItems = N), typeof x == "number" && (f.maxItems = x);
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
            const f = p, S = M0(o.entries);
            S.every((C) => typeof C == "number") && (f.type = "number"), S.every((C) => typeof C == "string") && (f.type = "string"), f.enum = S;
            break;
          }
          case "literal": {
            const f = p, S = [];
            for (const C of o.values)
              if (C === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof C == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                S.push(Number(C));
              } else
                S.push(C);
            if (S.length !== 0) if (S.length === 1) {
              const C = S[0];
              f.type = C === null ? "null" : typeof C, this.target === "draft-4" || this.target === "openapi-3.0" ? f.enum = [C] : f.const = C;
            } else
              S.every((C) => typeof C == "number") && (f.type = "number"), S.every((C) => typeof C == "string") && (f.type = "string"), S.every((C) => typeof C == "boolean") && (f.type = "string"), S.every((C) => C === null) && (f.type = "null"), f.enum = S;
            break;
          }
          case "file": {
            const f = p, S = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: C, maximum: T, mime: w } = r._zod.bag;
            C !== void 0 && (S.minLength = C), T !== void 0 && (S.maxLength = T), w ? w.length === 1 ? (S.contentMediaType = w[0], Object.assign(f, S)) : f.anyOf = w.map((N) => ({ ...S, contentMediaType: N })) : Object.assign(f, S);
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
        const S = l.external.registry.get(_[0])?.id, C = l.external.uri ?? ((w) => w);
        if (S)
          return { ref: C(S) };
        const T = _[1].defId ?? _[1].schema.id ?? `schema${this.counter++}`;
        return _[1].defId = T, { defId: T, ref: `${C("__shared")}#/${b}/${T}` };
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
        const C = this.seen.get(S).schema;
        C.$ref && (b.target === "draft-7" || b.target === "draft-4" || b.target === "openapi-3.0") ? (p.allOf = p.allOf ?? [], p.allOf.push(C)) : (Object.assign(p, C), Object.assign(p, f));
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
function J3(n, r) {
  if (n instanceof X0) {
    const l = new Sy(r), o = {};
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
  const i = new Sy(r);
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
const W3 = /* @__PURE__ */ K("ZodISODateTime", (n, r) => {
  TE.init(n, r), it.init(n, r);
});
function eC(n) {
  return N3(W3, n);
}
const tC = /* @__PURE__ */ K("ZodISODate", (n, r) => {
  OE.init(n, r), it.init(n, r);
});
function nC(n) {
  return M3(tC, n);
}
const rC = /* @__PURE__ */ K("ZodISOTime", (n, r) => {
  NE.init(n, r), it.init(n, r);
});
function aC(n) {
  return k3(rC, n);
}
const iC = /* @__PURE__ */ K("ZodISODuration", (n, r) => {
  ME.init(n, r), it.init(n, r);
});
function lC(n) {
  return R3(iC, n);
}
const sC = (n, r) => {
  L0.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (i) => bx(n, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => _x(n, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        n.issues.push(i), n.message = JSON.stringify(n.issues, _h, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        n.issues.push(...i), n.message = JSON.stringify(n.issues, _h, 2);
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
}, Sn = K("ZodError", sC, {
  Parent: Error
}), oC = /* @__PURE__ */ qh(Sn), uC = /* @__PURE__ */ Zh(Sn), cC = /* @__PURE__ */ vu(Sn), fC = /* @__PURE__ */ yu(Sn), hC = /* @__PURE__ */ Ex(Sn), dC = /* @__PURE__ */ Cx(Sn), pC = /* @__PURE__ */ wx(Sn), mC = /* @__PURE__ */ Ax(Sn), gC = /* @__PURE__ */ Dx(Sn), vC = /* @__PURE__ */ Tx(Sn), yC = /* @__PURE__ */ Ox(Sn), _C = /* @__PURE__ */ Nx(Sn), xt = /* @__PURE__ */ K("ZodType", (n, r) => (yt.init(n, r), n.def = r, n.type = r.type, Object.defineProperty(n, "_def", { value: r }), n.check = (...i) => n.clone(ba(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((l) => typeof l == "function" ? { _zod: { check: l, def: { check: "custom" }, onattach: [] } } : l)
  ]
})), n.clone = (i, l) => qr(n, i, l), n.brand = () => n, n.register = ((i, l) => (i.add(n, l), n)), n.parse = (i, l) => oC(n, i, l, { callee: n.parse }), n.safeParse = (i, l) => cC(n, i, l), n.parseAsync = async (i, l) => uC(n, i, l, { callee: n.parseAsync }), n.safeParseAsync = async (i, l) => fC(n, i, l), n.spa = n.safeParseAsync, n.encode = (i, l) => hC(n, i, l), n.decode = (i, l) => dC(n, i, l), n.encodeAsync = async (i, l) => pC(n, i, l), n.decodeAsync = async (i, l) => mC(n, i, l), n.safeEncode = (i, l) => gC(n, i, l), n.safeDecode = (i, l) => vC(n, i, l), n.safeEncodeAsync = async (i, l) => yC(n, i, l), n.safeDecodeAsync = async (i, l) => _C(n, i, l), n.refine = (i, l) => n.check(o4(i, l)), n.superRefine = (i) => n.check(u4(i)), n.overwrite = (i) => n.check(Vl(i)), n.optional = () => wy(n), n.nullable = () => Ay(n), n.nullish = () => wy(Ay(n)), n.nonoptional = (i) => t4(n, i), n.array = () => Tn(n), n.or = (i) => FC([n, i]), n.and = (i) => YC(n, i), n.transform = (i) => Dy(n, QC(i)), n.default = (i) => JC(n, i), n.prefault = (i) => e4(n, i), n.catch = (i) => r4(n, i), n.pipe = (i) => Dy(n, i), n.readonly = () => l4(n), n.describe = (i) => {
  const l = n.clone();
  return Nl.add(l, { description: i }), l;
}, Object.defineProperty(n, "description", {
  get() {
    return Nl.get(n)?.description;
  },
  configurable: !0
}), n.meta = (...i) => {
  if (i.length === 0)
    return Nl.get(n);
  const l = n.clone();
  return Nl.add(l, i[0]), l;
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), K0 = /* @__PURE__ */ K("_ZodString", (n, r) => {
  Gh.init(n, r), xt.init(n, r);
  const i = n._zod.bag;
  n.format = i.format ?? null, n.minLength = i.minimum ?? null, n.maxLength = i.maximum ?? null, n.regex = (...l) => n.check(U3(...l)), n.includes = (...l) => n.check(I3(...l)), n.startsWith = (...l) => n.check(q3(...l)), n.endsWith = (...l) => n.check(Z3(...l)), n.min = (...l) => n.check(ou(...l)), n.max = (...l) => n.check(Q0(...l)), n.length = (...l) => n.check($0(...l)), n.nonempty = (...l) => n.check(ou(1, ...l)), n.lowercase = (l) => n.check(P3(l)), n.uppercase = (l) => n.check(H3(l)), n.trim = () => n.check(F3()), n.normalize = (...l) => n.check(G3(...l)), n.toLowerCase = () => n.check(V3()), n.toUpperCase = () => n.check(Y3());
}), bC = /* @__PURE__ */ K("ZodString", (n, r) => {
  Gh.init(n, r), K0.init(n, r), n.email = (i) => n.check(u3(SC, i)), n.url = (i) => n.check(p3(xC, i)), n.jwt = (i) => n.check(O3(BC, i)), n.emoji = (i) => n.check(m3(EC, i)), n.guid = (i) => n.check(vy(xy, i)), n.uuid = (i) => n.check(c3(Io, i)), n.uuidv4 = (i) => n.check(f3(Io, i)), n.uuidv6 = (i) => n.check(h3(Io, i)), n.uuidv7 = (i) => n.check(d3(Io, i)), n.nanoid = (i) => n.check(g3(CC, i)), n.guid = (i) => n.check(vy(xy, i)), n.cuid = (i) => n.check(v3(wC, i)), n.cuid2 = (i) => n.check(y3(AC, i)), n.ulid = (i) => n.check(_3(DC, i)), n.base64 = (i) => n.check(A3(jC, i)), n.base64url = (i) => n.check(D3(zC, i)), n.xid = (i) => n.check(b3(TC, i)), n.ksuid = (i) => n.check(S3(OC, i)), n.ipv4 = (i) => n.check(x3(NC, i)), n.ipv6 = (i) => n.check(E3(MC, i)), n.cidrv4 = (i) => n.check(C3(kC, i)), n.cidrv6 = (i) => n.check(w3(RC, i)), n.e164 = (i) => n.check(T3(LC, i)), n.datetime = (i) => n.check(eC(i)), n.date = (i) => n.check(nC(i)), n.time = (i) => n.check(aC(i)), n.duration = (i) => n.check(lC(i));
});
function _n(n) {
  return o3(bC, n);
}
const it = /* @__PURE__ */ K("ZodStringFormat", (n, r) => {
  nt.init(n, r), K0.init(n, r);
}), SC = /* @__PURE__ */ K("ZodEmail", (n, r) => {
  _E.init(n, r), it.init(n, r);
}), xy = /* @__PURE__ */ K("ZodGUID", (n, r) => {
  vE.init(n, r), it.init(n, r);
}), Io = /* @__PURE__ */ K("ZodUUID", (n, r) => {
  yE.init(n, r), it.init(n, r);
}), xC = /* @__PURE__ */ K("ZodURL", (n, r) => {
  bE.init(n, r), it.init(n, r);
}), EC = /* @__PURE__ */ K("ZodEmoji", (n, r) => {
  SE.init(n, r), it.init(n, r);
}), CC = /* @__PURE__ */ K("ZodNanoID", (n, r) => {
  xE.init(n, r), it.init(n, r);
}), wC = /* @__PURE__ */ K("ZodCUID", (n, r) => {
  EE.init(n, r), it.init(n, r);
}), AC = /* @__PURE__ */ K("ZodCUID2", (n, r) => {
  CE.init(n, r), it.init(n, r);
}), DC = /* @__PURE__ */ K("ZodULID", (n, r) => {
  wE.init(n, r), it.init(n, r);
}), TC = /* @__PURE__ */ K("ZodXID", (n, r) => {
  AE.init(n, r), it.init(n, r);
}), OC = /* @__PURE__ */ K("ZodKSUID", (n, r) => {
  DE.init(n, r), it.init(n, r);
}), NC = /* @__PURE__ */ K("ZodIPv4", (n, r) => {
  kE.init(n, r), it.init(n, r);
}), MC = /* @__PURE__ */ K("ZodIPv6", (n, r) => {
  RE.init(n, r), it.init(n, r);
}), kC = /* @__PURE__ */ K("ZodCIDRv4", (n, r) => {
  jE.init(n, r), it.init(n, r);
}), RC = /* @__PURE__ */ K("ZodCIDRv6", (n, r) => {
  zE.init(n, r), it.init(n, r);
}), jC = /* @__PURE__ */ K("ZodBase64", (n, r) => {
  LE.init(n, r), it.init(n, r);
}), zC = /* @__PURE__ */ K("ZodBase64URL", (n, r) => {
  UE.init(n, r), it.init(n, r);
}), LC = /* @__PURE__ */ K("ZodE164", (n, r) => {
  PE.init(n, r), it.init(n, r);
}), BC = /* @__PURE__ */ K("ZodJWT", (n, r) => {
  IE.init(n, r), it.init(n, r);
}), J0 = /* @__PURE__ */ K("ZodNumber", (n, r) => {
  F0.init(n, r), xt.init(n, r), n.gt = (l, o) => n.check(_y(l, o)), n.gte = (l, o) => n.check(ah(l, o)), n.min = (l, o) => n.check(ah(l, o)), n.lt = (l, o) => n.check(yy(l, o)), n.lte = (l, o) => n.check(rh(l, o)), n.max = (l, o) => n.check(rh(l, o)), n.int = (l) => n.check(Ey(l)), n.safe = (l) => n.check(Ey(l)), n.positive = (l) => n.check(_y(0, l)), n.nonnegative = (l) => n.check(ah(0, l)), n.negative = (l) => n.check(yy(0, l)), n.nonpositive = (l) => n.check(rh(0, l)), n.multipleOf = (l, o) => n.check(by(l, o)), n.step = (l, o) => n.check(by(l, o)), n.finite = () => n;
  const i = n._zod.bag;
  n.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), n.isFinite = !0, n.format = i.format ?? null;
});
function uu(n) {
  return j3(J0, n);
}
const UC = /* @__PURE__ */ K("ZodNumberFormat", (n, r) => {
  qE.init(n, r), J0.init(n, r);
});
function Ey(n) {
  return z3(UC, n);
}
const PC = /* @__PURE__ */ K("ZodUnknown", (n, r) => {
  ZE.init(n, r), xt.init(n, r);
});
function Cy() {
  return L3(PC);
}
const HC = /* @__PURE__ */ K("ZodNever", (n, r) => {
  GE.init(n, r), xt.init(n, r);
});
function IC(n) {
  return B3(HC, n);
}
const qC = /* @__PURE__ */ K("ZodArray", (n, r) => {
  FE.init(n, r), xt.init(n, r), n.element = r.element, n.min = (i, l) => n.check(ou(i, l)), n.nonempty = (i) => n.check(ou(1, i)), n.max = (i, l) => n.check(Q0(i, l)), n.length = (i, l) => n.check($0(i, l)), n.unwrap = () => n.element;
});
function Tn(n, r) {
  return X3(qC, n, r);
}
const ZC = /* @__PURE__ */ K("ZodObject", (n, r) => {
  YE.init(n, r), xt.init(n, r), We(n, "shape", () => r.shape), n.keyof = () => xh(Object.keys(n._zod.def.shape)), n.catchall = (i) => n.clone({ ...n._zod.def, catchall: i }), n.passthrough = () => n.clone({ ...n._zod.def, catchall: Cy() }), n.loose = () => n.clone({ ...n._zod.def, catchall: Cy() }), n.strict = () => n.clone({ ...n._zod.def, catchall: IC() }), n.strip = () => n.clone({ ...n._zod.def, catchall: void 0 }), n.extend = (i) => px(n, i), n.safeExtend = (i) => mx(n, i), n.merge = (i) => gx(n, i), n.pick = (i) => hx(n, i), n.omit = (i) => dx(n, i), n.partial = (...i) => vx(W0, n, i[0]), n.required = (...i) => yx(e1, n, i[0]);
});
function ma(n, r) {
  const i = {
    type: "object",
    shape: n ?? {},
    ...de(r)
  };
  return new ZC(i);
}
const GC = /* @__PURE__ */ K("ZodUnion", (n, r) => {
  XE.init(n, r), xt.init(n, r), n.options = r.options;
});
function FC(n, r) {
  return new GC({
    type: "union",
    options: n,
    ...de(r)
  });
}
const VC = /* @__PURE__ */ K("ZodIntersection", (n, r) => {
  QE.init(n, r), xt.init(n, r);
});
function YC(n, r) {
  return new VC({
    type: "intersection",
    left: n,
    right: r
  });
}
const Sh = /* @__PURE__ */ K("ZodEnum", (n, r) => {
  $E.init(n, r), xt.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const i = new Set(Object.keys(r.entries));
  n.extract = (l, o) => {
    const c = {};
    for (const h of l)
      if (i.has(h))
        c[h] = r.entries[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new Sh({
      ...r,
      checks: [],
      ...de(o),
      entries: c
    });
  }, n.exclude = (l, o) => {
    const c = { ...r.entries };
    for (const h of l)
      if (i.has(h))
        delete c[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new Sh({
      ...r,
      checks: [],
      ...de(o),
      entries: c
    });
  };
});
function xh(n, r) {
  const i = Array.isArray(n) ? Object.fromEntries(n.map((l) => [l, l])) : n;
  return new Sh({
    type: "enum",
    entries: i,
    ...de(r)
  });
}
const XC = /* @__PURE__ */ K("ZodTransform", (n, r) => {
  KE.init(n, r), xt.init(n, r), n._zod.parse = (i, l) => {
    if (l.direction === "backward")
      throw new O0(n.constructor.name);
    i.addIssue = (c) => {
      if (typeof c == "string")
        i.issues.push(Il(c, i.value, r));
      else {
        const h = c;
        h.fatal && (h.continue = !1), h.code ?? (h.code = "custom"), h.input ?? (h.input = i.value), h.inst ?? (h.inst = n), i.issues.push(Il(h));
      }
    };
    const o = r.transform(i.value, i);
    return o instanceof Promise ? o.then((c) => (i.value = c, i)) : (i.value = o, i);
  };
});
function QC(n) {
  return new XC({
    type: "transform",
    transform: n
  });
}
const W0 = /* @__PURE__ */ K("ZodOptional", (n, r) => {
  JE.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function wy(n) {
  return new W0({
    type: "optional",
    innerType: n
  });
}
const $C = /* @__PURE__ */ K("ZodNullable", (n, r) => {
  WE.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Ay(n) {
  return new $C({
    type: "nullable",
    innerType: n
  });
}
const KC = /* @__PURE__ */ K("ZodDefault", (n, r) => {
  e3.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function JC(n, r) {
  return new KC({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : R0(r);
    }
  });
}
const WC = /* @__PURE__ */ K("ZodPrefault", (n, r) => {
  t3.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function e4(n, r) {
  return new WC({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : R0(r);
    }
  });
}
const e1 = /* @__PURE__ */ K("ZodNonOptional", (n, r) => {
  n3.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function t4(n, r) {
  return new e1({
    type: "nonoptional",
    innerType: n,
    ...de(r)
  });
}
const n4 = /* @__PURE__ */ K("ZodCatch", (n, r) => {
  r3.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function r4(n, r) {
  return new n4({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const a4 = /* @__PURE__ */ K("ZodPipe", (n, r) => {
  a3.init(n, r), xt.init(n, r), n.in = r.in, n.out = r.out;
});
function Dy(n, r) {
  return new a4({
    type: "pipe",
    in: n,
    out: r
    // ...util.normalizeParams(params),
  });
}
const i4 = /* @__PURE__ */ K("ZodReadonly", (n, r) => {
  i3.init(n, r), xt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function l4(n) {
  return new i4({
    type: "readonly",
    innerType: n
  });
}
const s4 = /* @__PURE__ */ K("ZodCustom", (n, r) => {
  l3.init(n, r), xt.init(n, r);
});
function o4(n, r = {}) {
  return Q3(s4, n, r);
}
function u4(n) {
  return $3(n);
}
function c4(n) {
  return JSON.stringify(fa(n), null, 2);
}
function f4(...n) {
  for (const r of n) if (r !== void 0) return r;
}
function h4(n) {
  return Array.isArray(n) ? n.find((r) => r !== "null") ?? n[0] : n;
}
function Ty(n, r) {
  let i = 0;
  return typeof n.minimum == "number" && i < n.minimum && (i = r ? Math.ceil(n.minimum) : n.minimum), typeof n.exclusiveMinimum == "number" && i <= n.exclusiveMinimum && (i = r ? Math.floor(n.exclusiveMinimum) + 1 : n.exclusiveMinimum + 1), typeof n.maximum == "number" && i > n.maximum && (i = r ? Math.floor(n.maximum) : n.maximum), typeof n.exclusiveMaximum == "number" && i >= n.exclusiveMaximum && (i = r ? Math.ceil(n.exclusiveMaximum) - 1 : n.exclusiveMaximum - 1), i;
}
function fa(n) {
  if (!n || typeof n != "object") return null;
  const r = Array.isArray(n.examples) ? n.examples[0] : void 0, i = f4(n.example, r, n.default);
  if (i !== void 0) return i;
  if (n.const !== void 0) return n.const;
  if (Array.isArray(n.enum) && n.enum.length) return n.enum[0];
  const l = Array.isArray(n.anyOf) ? n.anyOf[0] : Array.isArray(n.oneOf) ? n.oneOf[0] : void 0;
  if (l) return fa(l);
  switch (h4(n.type)) {
    case "object": {
      const c = {}, h = n.properties || {};
      for (const m of Object.keys(h))
        c[m] = fa(h[m]);
      return n.additionalProperties && typeof n.additionalProperties == "object" && (c.additionalProperty = fa(n.additionalProperties)), c;
    }
    case "array": {
      const c = n.items ?? {};
      return [fa(c)];
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
      return Ty(n, !0);
    case "number":
      return Ty(n, !1);
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return n.properties || n.additionalProperties ? fa({ ...n, type: "object" }) : n.items ? fa({ ...n, type: "array" }) : null;
  }
}
const Bl = "Max Response Tokens";
function El(n) {
  return typeof n == "string" ? n.trim() !== "" : Array.isArray(n) && n.length > 0;
}
function Oy(n, r, i, l = !1) {
  r = typeof r == "string" ? r : "";
  const o = n?.choices?.[0], c = Array.isArray(n?.content) ? n.content : [], h = o?.finish_reason ?? n?.stop_reason ?? n?.candidates?.[0]?.finishReason ?? n?.finish_reason, m = l ? c.find((v) => v?.type === "tool_use") : void 0, g = El(o?.message?.reasoning_content) || El(o?.message?.reasoning) || El(o?.reasoning) || El(n?.thinking) || // Claude returns thinking blocks without text unless a summary is requested, so the block itself counts.
  c.some((v) => v?.type === "thinking" || v?.type === "redacted_thinking") || (n?.responseContent?.parts ?? []).some((v) => v?.thought && El(v.text)) || Gl(r) !== r;
  return {
    text: r,
    structured: m?.input,
    finishReason: h == null ? void 0 : String(h),
    truncated: /length|max_tokens/i.test(String(h ?? "")),
    hasReasoning: g,
    maxTokens: i
  };
}
function Fh(n) {
  return n.structured === void 0 && Gl(n.text).trim() === "";
}
function Vh(n) {
  return n.truncated && n.hasReasoning ? `The model used all ${n.maxTokens} response tokens on thinking and returned no answer. Raise "${Bl}" or turn thinking off.` : n.truncated ? `The model returned no answer before hitting the ${n.maxTokens}-token limit. Raise "${Bl}".` : n.finishReason === void 0 && n.hasReasoning ? `The model returned no answer, and SillyTavern didn't report why it stopped. If thinking used up all ${n.maxTokens} response tokens, raise "${Bl}" or turn thinking off.` : n.finishReason && !/^(stop|end_turn|stop_sequence|eos)$/i.test(n.finishReason) ? `The model returned an empty response (finish reason: ${n.finishReason}).` : "The model returned an empty response.";
}
function d4(n) {
  return `The response was ${n1(n)} at the ${n.maxTokens}-token limit, so it isn't complete JSON. Raise "${Bl}".`;
}
function t1(n) {
  return `The response was ${n1(n)} at the ${n.maxTokens}-token limit, so the text may be incomplete. Raise "${Bl}" for longer responses.`;
}
function n1(n) {
  return n.truncationEstimated ? "probably cut off" : "cut off";
}
function r1(n) {
  const r = n?.message || String(n), i = n?.cause;
  if (r === "API request failed" && i) {
    const l = i?.message || String(i);
    return l ? `${r}: ${l}` : r;
  }
  return r;
}
const Ny = ["role", "content", "name", "tool_calls", "tool_call_id"];
function p4(n, r) {
  const i = r === "openai" ? Ny : [...Ny, "ignoreInstruct"];
  return n.map(
    (l) => Object.fromEntries(
      Object.entries(l).filter(([o, c]) => i.includes(o) && c !== void 0)
    )
  );
}
const m4 = [
  "custom_url",
  "vertexai_region",
  "zai_endpoint",
  "siliconflow_endpoint",
  "minimax_endpoint",
  "pollinations_endpoint"
];
async function g4(n, r, i, l) {
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
    ...Object.fromEntries(m4.map((_) => [_, o["api-url"]]))
  }), v = await m.presetToGeneratePayload(c, { chat_completion_source: h }, g);
  return o.proxy && (delete v.reverse_proxy, delete v.proxy_password), delete v.stop, v;
}
function My(n, r, i) {
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
const v4 = /^(Response not OK|Got response status \d+|API request failed)$/i;
class a1 extends Error {
  constructor(r, i) {
    const l = i?.message === "API request failed" && i?.cause ? i.cause : i, o = l?.message || String(l), c = v4.test(o.trim()) ? ". SillyTavern didn't pass on the provider's reason; it's in the SillyTavern server console." : "", h = r?.model ? `${r?.name} (${r.model})` : r?.name;
    super(`${h ? `${h}: ` : ""}${o}${c}`, { cause: i }), this.name = "RequestError";
  }
}
function bu(n, r = SillyTavern.getContext()) {
  if (!n)
    throw new Error("No connection profile selected.");
  const i = r.ConnectionManagerRequestService, l = i.getProfile(n), o = i.validateProfile(l), c = o.selected, h = l.preset ? r.getPresetManager?.(c)?.getCompletionPresetByName(l.preset) : void 0;
  return { profile: l, mainApi: c, source: o.source, preset: h };
}
function y4(n) {
  const r = n.mainApi === "openai" ? n.preset?.openai_max_context : n.preset?.max_length;
  return typeof r == "number" && r > 0 ? r : void 0;
}
function i1(n, r, i = SillyTavern.getContext()) {
  return r.maxContextType === "custom" && r.maxContextValue > 0 ? r.maxContextValue : y4(n) ?? Number(i.maxContext);
}
async function cu(n, r, i, l = {}, o) {
  const c = SillyTavern.getContext(), h = c.ConnectionManagerRequestService, m = bu(n, c), { profile: g, mainApi: v } = m, _ = v !== "openai", b = p4(r, v), y = { stream: !1, signal: o, extractData: _ };
  let p = l, f;
  try {
    const C = await g4(c, m, b, i);
    C && (y.includePreset = !1, p = { ...C, ...l }), o?.throwIfAborted(), f = await h.sendRequest(n, b, i, y, p);
  } catch (C) {
    throw o?.aborted ? new DOMException("Request aborted by user", "AbortError") : new a1(g, C);
  }
  if (o?.aborted)
    throw new DOMException("Request aborted by user", "AbortError");
  let S;
  if (_) {
    const C = f?.content, T = typeof C == "string" ? C : "", w = My(c, g, T);
    S = Oy({}, w, i), S = { ...S, structured: C !== null && typeof C == "object" ? C : void 0, hasReasoning: S.hasReasoning || !!f?.reasoning || w !== T };
  } else {
    const C = c.extractMessageFromData(f, v), T = My(c, g, C);
    S = Oy(f, T, i, !!p.json_schema), S = { ...S, hasReasoning: S.hasReasoning || T !== C };
  }
  return b4(S, c);
}
const _4 = 0.9;
async function b4(n, r) {
  if (n.finishReason !== void 0 || !n.text || typeof r.getTokenCountAsync != "function")
    return n;
  try {
    if (await r.getTokenCountAsync(n.text) >= n.maxTokens * _4)
      return { ...n, truncated: !0, truncationEstimated: !0 };
  } catch (i) {
    console.warn("Could not count response tokens", i);
  }
  return n;
}
async function S4(n, r, i, l) {
  const o = await cu(n, r, i, {}, l);
  if (Fh(o))
    throw new Error(Vh(o));
  return o.truncated && _e("warning", t1(o)), o.text;
}
class Eh extends Error {
}
function ky(n, r, i) {
  let l = n.structured;
  if (l === void 0) {
    if (Fh(n))
      throw new Error(Vh(n));
    try {
      l = wS(n.text);
    } catch (c) {
      throw n.truncated ? new Error(d4(n)) : (console.error("Raw response:", n.text), new Eh(
        `Model response is not valid JSON (${c?.message ?? c}). ${pv(n.text)}`
      ));
    }
  }
  const o = r.safeParse(l);
  if (!o.success) {
    const c = o.error.issues;
    console.error("Zod validation failed:", c), console.error("Raw response:", n.text, "Parsed:", l);
    const h = c.slice(0, 3).map((g) => `${g.path.join(".") || "(root)"}: ${g.message}`).join("; "), m = n.structured !== void 0 ? JSON.stringify(n.structured) : n.text;
    throw new Eh(
      `Model response failed schema validation for ${i} (${h}${c.length > 3 ? "; …" : ""}). ` + pv(m)
    );
  }
  return o.data;
}
const Ry = /* @__PURE__ */ new Set();
function x4(n) {
  return `${n}:${bu(n).profile.model ?? ""}`;
}
async function E4(n, r, i, l, o, c) {
  const h = J3(i), m = x4(n);
  if (!Ry.has(m))
    try {
      const f = await cu(
        n,
        r,
        o,
        { json_schema: { name: l, strict: !0, value: h } },
        c
      );
      return ky(f, i, l);
    } catch (f) {
      if (!(f instanceof a1 || f instanceof Eh))
        throw f;
      Ry.add(m), console.warn("Native structured output failed, asking for JSON in the prompt instead:", f), _e(
        "info",
        `Native structured output didn't work for this profile, so JSON is asked for in the prompt until the page is reloaded. ${f.message}`
      );
    }
  const g = vt.getSettings(), v = g.prompts.reviseJsonPrompt?.content;
  if (!v)
    throw new Error('The "Revise Session (JSON Mode)" prompt template is missing.');
  const _ = {
    example_response: c4(h),
    schema: JSON.stringify(h, null, 2)
  };
  let b;
  try {
    b = ga.compile(v, { noEscape: !0, strict: !0 })(_);
  } catch (f) {
    const S = g.prompts.reviseJsonPrompt?.label ?? "reviseJsonPrompt";
    throw new Error(
      `Failed to render the "${S}" prompt template: ${f?.message ?? f}. Available variables: ${Object.keys(_).join(", ")}.`
    );
  }
  const y = { role: "system", content: b }, p = await cu(n, [...r, y], o, {}, c);
  return ky(p, i, l);
}
const On = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Ul = "alternate_greetings_";
function fu(n, r = {}) {
  const i = (h, m, g) => ({
    id: h,
    label: m.label,
    value: m.value,
    group: g
  }), l = On.filter((h) => n[h]).map((h) => i(h, n[h], "core")), o = Object.keys(n).filter((h) => h.startsWith(Ul)).sort((h, m) => parseInt(h.slice(Ul.length)) - parseInt(m.slice(Ul.length))).map((h) => i(h, n[h], "alternate_greetings")), c = Object.entries(r).map(([h, m]) => i(h, m, "draft"));
  return [...l, ...o, ...c];
}
function C4(n, r, i = {}) {
  return i[n]?.label || r[n]?.label || n;
}
function w4(n, r, i) {
  if (!i)
    return n;
  const l = r.startsWith(Ul);
  return Object.fromEntries(
    Object.entries(n).filter(([o]) => {
      const c = o.startsWith(Ul);
      return l ? !(c && o !== r || o === "first_mes") : !c;
    })
  );
}
function A4(n, r) {
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
async function D4(n, r, i) {
  const l = [];
  let o = 0;
  for (let c = n.length - 1; c >= 0 && (o += await i(n[c].content), !(o > r)); c--)
    l.unshift(n[c]);
  return { messages: l, dropped: n.length - l.length };
}
function T4(n, [r, i], { includeNames: l, regex: o }) {
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
async function l1(n, r, {
  selection: i,
  contextSize: l,
  maxResponseTokens: o
}) {
  if (r === -1)
    return n;
  const c = n.slice(0, r), h = n.slice(r + 1), m = SillyTavern.getContext(), g = m.chat ?? [], v = sr !== void 0 || pa ? A4(i, g.length) : null;
  if (!v)
    return [...c, ...h];
  const _ = async (S) => S ? await m.getTokenCountAsync(S) : 0;
  let b = 0;
  for (const S of [...c, ...h])
    b += await _(typeof S.content == "string" ? S.content : "");
  const y = l - o - b, p = T4(g, v, {
    includeNames: !!pa,
    regex: (S, C, T) => Gb(S, C ? Pg.USER_INPUT : Pg.AI_OUTPUT, {
      isPrompt: !0,
      depth: T
    })
  }), f = await D4(p, y, _);
  return f.dropped > 0 && _e("warning", O4(f.messages.length, p.length, l)), [...c, ...f.messages, ...h];
}
function O4(n, r, i) {
  const l = 'Raise "Max Context Tokens" or lower "Max Response Tokens" to send more.';
  return n === 0 ? `No chat messages were sent: none of the ${r} fit in the ${i}-token context after the response tokens and the other prompts. ${l}` : `Only the last ${n} of ${r} chat messages fit in the ${i}-token context, so the older ones were left out. ${l}`;
}
const Pn = SillyTavern.getContext(), lr = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
}, N4 = "Continue the current text of the {{targetField}} field from exactly where it stops. Output only the new text that comes after it. Do not repeat, rewrite or summarize the existing text.";
new Gy("dumb", {}).getSettings();
async function M4({
  profileId: n,
  userPrompt: r,
  messageSelection: i,
  continueFrom: l,
  session: o,
  allCharacters: c,
  entriesGroupByWorldName: h,
  promptSettings: m,
  formatDescription: g,
  mainContextList: v,
  includeUserMacro: _,
  maxResponseToken: b,
  targetField: y
}) {
  const p = bu(n), f = {};
  f.char = gt(o.fields.name.value) || "{{char}}", f.user = _ && Bg ? Bg : "{{user}}", f.persona = "{{persona}}", f.targetField = y, f.targetLabel = gt(C4(y, o.fields, o.draftFields)), f.userInstructions = gt(r.trim()), f.fieldSpecificInstructions = gt(
    o.draftFields[y]?.prompt ?? o.fields[y]?.prompt
  ), f.activeFormatInstructions = ga.compile(g.content, { noEscape: !0 })(
    f
  );
  {
    const w = [];
    o.selectedCharacterIndexes.forEach((N) => {
      const x = parseInt(N), D = c[x];
      D && w.push(D);
    }), f.characters = gt(w);
  }
  {
    const w = {};
    Object.entries(h).filter(
      ([N, x]) => x.length > 0 && o.selectedWorldNames.includes(N) && x.some((D) => !D.disable)
    ).forEach(([N, x]) => {
      w[N] = x.filter((D) => !D.disable);
    }), f.lorebooks = gt(w);
  }
  {
    const w = {}, N = {}, x = {}, D = vt.getSettings().contextToSend.dontSendOtherGreetings, M = w4(o.fields, y, D);
    Object.entries(M).forEach(([q, Y]) => {
      On.includes(q) ? w[Y.label] = Y.value : q.startsWith("alternate_greetings_") && (N[q] = Y.value);
    }), Object.entries(o.draftFields || {}).forEach(([q, Y]) => {
      x[Y.label] = Y.value;
    });
    const R = {};
    Object.keys(w).length > 0 && (R.core = w), Object.keys(N).length > 0 && (R.alternate_greetings = N), Object.keys(x).length > 0 && (R.draft = x), f.fields = gt(R), f.fieldList = gt(fu(M, o.draftFields));
  }
  let S = [], C = -1;
  {
    for (const w of v) {
      if (w.promptName === "chatHistory") {
        C = S.length, S.push({ role: "system", content: "" });
        continue;
      }
      let N = structuredClone(f);
      w.promptName === "stDescription" && (N.char = "{{char}}", N.user = "{{user}}");
      const x = m[w.promptName];
      if (!x)
        continue;
      const D = {
        role: w.role,
        content: Pl(x.content, N, Pn.substituteParams)
      };
      D.content && S.push(D);
    }
    l && (S.push({
      role: "user",
      content: ga.compile(N4, { noEscape: !0 })(f)
    }), S.push({
      role: "assistant",
      content: l.trim()
    }));
  }
  S = await l1(S, C, {
    selection: i,
    contextSize: i1(p, vt.getSettings()),
    maxResponseTokens: b
  });
  const T = await cu(n, S, b);
  if (Fh(T) && (!l || T.truncated))
    throw new Error(Vh(T));
  if (T.truncated && _e("warning", t1(T)), l) {
    const w = TS(l, T.text);
    return w.trim() === l.trim() ? (_e("warning", "The model didn't add any text. Try again or use a different model."), l) : w;
  }
  return y0(T.text);
}
function k4(n, r) {
  const i = n.match(/\d+/g)?.map(Number) ?? [], l = r.match(/\d+/g)?.map(Number) ?? [];
  for (let o = 0; o < Math.max(i.length, l.length); o++) {
    const c = (i[o] ?? 0) - (l[o] ?? 0);
    if (c !== 0) return c;
  }
  return 0;
}
async function R4(n, r) {
  let i, l = n.formatVersion;
  for (; ; ) {
    const o = (h) => k4(h.to, l) > 0, c = r.find((h) => h.from === l && o(h)) ?? r.find((h) => h.from === "*" && o(h));
    if (!c) return i;
    i = await c.action(i ?? structuredClone(n)), i.formatVersion = c.to, l = c.to;
  }
}
function j4(n, r) {
  const i = { ...n.prompts };
  for (const [l, o] of Object.entries(r))
    i[l]?.isDefault && (i[l] = { ...i[l], content: o });
  return { ...n, prompts: i };
}
function z4(n) {
  const { outputFormat: r, defaultPromptEngineeringMode: i, ...l } = n, { xmlFormat: o, jsonFormat: c, reviseXmlPrompt: h, ...m } = n.prompts ?? {};
  return {
    ...l,
    maxContextType: n.maxContextType === "custom" ? "custom" : "profile",
    prompts: m
  };
}
const da = "SillyTavern-Character-Creator", Yh = "0.5.0", L4 = "F_1.12", s1 = {
  EXTENSION: "charCreator"
}, qo = [
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
  stDescription: Ko,
  charDefinitions: yh,
  lorebookDefinitions: m0,
  noneFormat: p0,
  worldInfoCharDefinition: g0,
  existingFieldDefinitions: Ll,
  taskDescription: Lh,
  outputFormatInstructions: zh,
  personaDescription: yS,
  reviseJsonPrompt: _S,
  reviseTaskDescription: bS
}, o1 = {
  version: Yh,
  formatVersion: L4,
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
      content: Ll,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: Lh,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: zh,
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
function Ch(n) {
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
const vt = new Gy(s1.EXTENSION, o1);
async function B4() {
  return new Promise((n, r) => {
    vt.initializeSettings({ strategy: [] }).then(
      () => R4(vt.getSettings(), [
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
                  content: Ll,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: Lh,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: zh,
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
            return await _e("info", `[${da}] Added Alternate Greetings.`), {
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
                  content: Ll,
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
            return i.prompts.stDescription.isDefault && (l.prompts.stDescription.content = Ko), l;
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
            }, i.prompts.charDefinitions.isDefault && (l.prompts.charDefinitions.content = yh), i.prompts.lorebookDefinitions.isDefault && (l.prompts.lorebookDefinitions.content = m0), i.prompts.existingFieldDefinitions.isDefault && (l.prompts.existingFieldDefinitions.content = Ll), l;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(i) {
            const l = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (l.prompts.stDescription.content = Ko), l;
          }
        },
        {
          from: "F_1.9",
          to: "F_1.10",
          action(i) {
            const l = {
              ...i
            };
            return i.prompts.charDefinitions.isDefault && (l.prompts.charDefinitions.content = yh), i.prompts.worldInfoCharDefinition.isDefault && (l.prompts.worldInfoCharDefinition.content = g0), l;
          }
        },
        {
          from: "F_1.10",
          to: "F_1.11",
          action(i) {
            return j4(i, {
              stDescription: Ko,
              noneFormat: p0
            });
          }
        },
        {
          from: "F_1.11",
          to: "F_1.12",
          action(i) {
            return z4(i);
          }
        }
      ])
    ).then((i) => {
      i && (Pn.extensionSettings[s1.EXTENSION] = { ...i, version: Yh }, vt.saveSettings()), n();
    }).catch((i) => {
      console.error(`[${da}] Error initializing settings:`, i), _e("error", `[${da}] Failed to initialize settings: ${i.message}`), Pn.Popup.show.confirm(
        `[${da}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((l) => {
        l && (vt.resetSettings(), _e("success", `[${da}] Settings reset. Reloading may be required.`), n());
      });
    });
  });
}
const pe = ({ children: n, className: r, overrideDefaults: i = !1, ...l }) => {
  const o = ee.useMemo(() => {
    const c = [];
    return i || c.push("menu_button", "interactable"), c.push(r), c.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("button", { className: o, ...l, children: n });
}, U4 = ({ label: n, className: r, overrideDefaults: i = !1, type: l = "text", ...o }) => {
  const c = ee.useMemo(() => {
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
}, hu = ({ children: n, className: r, overrideDefaults: i = !1, ...l }) => {
  const o = ee.useMemo(() => {
    const c = [];
    return i || c.push("text_pole"), c.push(r), c.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("select", { className: o, ...l, children: n });
}, bn = ({ children: n, className: r, overrideDefaults: i = !1, ...l }) => {
  const o = ee.useMemo(() => {
    const c = [];
    return i || c.push("text_pole", "textarea_compact"), c.push(r), c.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("textarea", { className: o, ...l, children: n });
};
var P4 = qy(), on = /* @__PURE__ */ ((n) => (n[n.TEXT = 1] = "TEXT", n[n.CONFIRM = 2] = "CONFIRM", n[n.INPUT = 3] = "INPUT", n[n.DISPLAY = 4] = "DISPLAY", n))(on || {}), Br = /* @__PURE__ */ ((n) => (n[n.AFFIRMATIVE = 1] = "AFFIRMATIVE", n[n.NEGATIVE = 0] = "NEGATIVE", n[n.CANCELLED = null] = "CANCELLED", n))(Br || {});
const H4 = SillyTavern.getContext(), vi = ({
  content: n,
  type: r,
  inputValue: i = "",
  options: l = {},
  preventEscape: o = !1,
  onComplete: c
}) => {
  var h;
  const m = ee.useRef(null), g = ee.useRef(null), [v, _] = ee.useState(!1), [b, y] = ee.useState(null), p = ee.useRef(H4.uuidv4()), f = ee.useRef({
    id: p.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  ee.useEffect(() => {
    const w = m.current;
    if (!w) return;
    const N = (x) => {
      x.preventDefault(), o || S(Br.CANCELLED);
    };
    return w.addEventListener("cancel", N), f.current.dlg = w, f.current.mainInput = g.current, li.util.popups.push(f.current), w.showModal || (w.classList.add("poly_dialog"), Ig.registerDialog(w), new ResizeObserver((x) => {
      for (const D of x)
        Ig.reposition(D.target);
    }).observe(w)), w.showModal(), Rf(), () => {
      Hg(li.util.popups, f.current), Rf(), w.removeEventListener("cancel", N);
    };
  }, []);
  const S = async (w) => {
    var N, x;
    let D = w;
    if (r === on.INPUT && (w >= Br.AFFIRMATIVE ? D = (N = g.current) == null ? void 0 : N.value : w === Br.NEGATIVE ? D = !1 : w === Br.CANCELLED ? D = null : D = !1), (x = l.customInputs) != null && x.length) {
      const R = new Map(
        l.customInputs.map((q) => {
          var Y;
          const G = (Y = m.current) == null ? void 0 : Y.querySelector(`#${q.id}`);
          return [G.id, G.checked];
        })
      );
      f.current.inputResults = R;
    }
    if (f.current.result = w, f.current.value = D, l.onClosing && !await l.onClosing(f.current)) {
      _(!0), f.current.value = void 0, f.current.result = void 0, f.current.inputResults = void 0;
      return;
    }
    _(!1), li.util.lastResult = {
      value: D,
      result: w,
      inputResults: f.current.inputResults
    };
    const M = m.current;
    M && (M.setAttribute("closing", ""), Rf(), I_(M, async () => {
      var R;
      if (M.close(), l.onClose && await l.onClose(f.current), Hg(li.util.popups, f.current), li.util.popups.length > 0) {
        const q = (R = document.activeElement) == null ? void 0 : R.closest(".popup"), Y = q?.getAttribute("data-id"), G = li.util.popups.find((X) => X.id === Y);
        G && G.lastFocus && G.lastFocus.focus();
      }
      c(D);
    }));
  }, C = (w) => {
    w.target instanceof HTMLElement && w.target !== m.current && (y(w.target), f.current.lastFocus = w.target);
  }, T = async (w) => {
  };
  return P4.createPortal(
    /* @__PURE__ */ A.jsx(
      "dialog",
      {
        ref: m,
        className: (() => {
          const w = ["popup"];
          return l.wide && w.push("wide_dialogue_popup"), l.wider && w.push("wider_dialogue_popup"), l.large && w.push("large_dialogue_popup"), l.transparent && w.push("transparent_dialogue_popup"), l.allowHorizontalScrolling && w.push("horizontal_scrolling_dialogue_popup"), l.allowVerticalScrolling && w.push("vertical_scrolling_dialogue_popup"), l.animation && w.push(`popup--animation-${l.animation}`), w.join(" ");
        })(),
        "data-id": p.current,
        onKeyDown: T,
        onFocus: C,
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
              const x = typeof w == "string" ? { text: w, result: N + 2 } : w;
              return /* @__PURE__ */ A.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${x.classes ?? ""}`,
                  "data-result": x.result,
                  onClick: () => {
                    var D;
                    (D = x.action) == null || D.call(x), S(x.result ?? N + 2);
                  },
                  "data-i18n": x.text,
                  children: x.text
                },
                N
              );
            }),
            r !== on.DISPLAY && l.okButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => S(Br.AFFIRMATIVE),
                "data-result": "1",
                children: typeof l.okButton == "string" ? l.okButton : "OK"
              }
            ),
            r !== on.DISPLAY && l.cancelButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => S(Br.NEGATIVE),
                "data-result": "0",
                children: typeof l.cancelButton == "string" ? l.cancelButton : "Cancel"
              }
            )
          ] }),
          r === on.DISPLAY && /* @__PURE__ */ A.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => S(Br.CANCELLED),
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
}, Cl = (n, r, i) => {
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
}, ir = SillyTavern.getContext(), u1 = ({
  initialSelectedProfileId: n,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: l,
  onCreate: o,
  onUpdate: c,
  onDelete: h
}) => {
  const [m, g] = ee.useState(n ?? ""), [v, _] = ee.useState(Date.now()), { isEnabled: b, profiles: y, connectApiMap: p } = ee.useMemo(() => {
    var C, T;
    return (C = ir.extensionSettings.disabledExtensions) != null && C.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((T = ir.extensionSettings.connectionManager) == null ? void 0 : T.profiles) ?? [],
      connectApiMap: ir.CONNECT_API_MAP
    };
  }, [v]);
  ee.useEffect(() => {
    if (!b) return;
    const C = (N) => {
      Cl(N, r, p) && (_(Date.now()), o?.(N));
    }, T = (N, x) => {
      const D = Cl(N, r, p), M = Cl(x, r, p);
      (D || M) && _(Date.now()), c?.(N, x), m === N.id && !M && (g(""), l?.(void 0));
    }, w = (N) => {
      Cl(N, r, p) && (_(Date.now()), h?.(N), m === N.id && (g(""), l?.(void 0)));
    };
    return ir.eventSource.on("CONNECTION_PROFILE_CREATED", C), ir.eventSource.on("CONNECTION_PROFILE_UPDATED", T), ir.eventSource.on("CONNECTION_PROFILE_DELETED", w), () => {
      ir.eventSource.removeListener("CONNECTION_PROFILE_CREATED", C), ir.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", T), ir.eventSource.removeListener("CONNECTION_PROFILE_DELETED", w);
    };
  }, [b, m, r, p, l, o, c, h]);
  const f = ee.useMemo(() => {
    if (!b) return [];
    const C = y.filter((w) => Cl(w, r, p)), T = {};
    for (const [w, N] of Object.entries(r))
      T[w] = { label: N, profiles: [] };
    for (const w of C) {
      const N = p[w.api];
      T[N.selected] && T[N.selected].profiles.push(w);
    }
    for (const w of Object.values(T))
      w.profiles.sort((N, x) => (N.name ?? "").localeCompare(x.name ?? ""));
    return Object.values(T).filter((w) => w.profiles.length > 0);
  }, [b, y, r, p]), S = ee.useCallback(
    (C) => {
      const T = C.target.value;
      g(T);
      const w = y.find((N) => N.id === T);
      l?.(w);
    },
    [y, l]
  );
  return b ? /* @__PURE__ */ A.jsxs(hu, { value: m, onChange: S, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: i }),
    f.map((C) => /* @__PURE__ */ A.jsx("optgroup", { label: C.label, children: C.profiles.map((T) => /* @__PURE__ */ A.jsx("option", { value: T.id, children: T.name }, T.id)) }, C.label))
  ] }) : /* @__PURE__ */ A.jsx(hu, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, I4 = Jo.memo(
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
    } = n, C = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !v ? 0.6 : 1
    }, T = { cursor: "pointer", flexShrink: 0 }, w = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ A.jsxs("li", { className: "sortable-list-item", style: C, "data-id": m, children: [
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
        hu,
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
        pe,
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
        pe,
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
), q4 = ({
  items: n,
  onItemsChange: r,
  showToggleButton: i = !1,
  showDeleteButton: l = !1,
  showSelectInput: o = !1,
  sortableJsOptions: c = {}
}) => {
  const h = ee.useRef(null), m = ee.useRef(null);
  ee.useEffect(() => (h.current && (m.current = xe.create(h.current, {
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
    I4,
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
}, Zo = ({
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
  const [f, S] = ee.useState(!1), [C, T] = ee.useState(""), w = ee.useRef(null);
  ee.useEffect(() => {
    const R = (q) => {
      w.current && !w.current.contains(q.target) && S(!1);
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, []), ee.useEffect(() => {
    f || T("");
  }, [f]);
  const N = ee.useMemo(() => {
    if (!g) return null;
    const R = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...b
    };
    return new _i(n, R);
  }, [n, g, b]), x = ee.useMemo(() => !g || !C.trim() || !N ? n : N.search(C.trim()).map((R) => R.item), [n, C, g, N]), D = async (R) => {
    let q;
    c ? q = r.includes(R) ? r.filter((Y) => Y !== R) : [...r, R] : q = r.includes(R) ? [] : [R], !(m && !await Promise.resolve(m(r, q))) && (i(q), o && S(!1));
  }, M = ee.useMemo(() => {
    var R;
    return r.length === 0 ? l : r.length === 1 ? ((R = n.find((q) => q.value === r[0])) == null ? void 0 : R.label) ?? r[0] : `${r.length} items selected`;
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
              /* @__PURE__ */ A.jsx("span", { className: "fancy-dropdown-trigger-text", children: M }),
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
                    U4,
                    {
                      type: "text",
                      placeholder: v,
                      value: C,
                      onChange: (R) => T(R.target.value),
                      autoFocus: !0,
                      className: y
                    }
                  )
                }
              ),
              /* @__PURE__ */ A.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: x.length > 0 ? x.map((R) => /* @__PURE__ */ A.jsx(
                Z4,
                {
                  item: R,
                  isSelected: r.includes(R.value),
                  onClick: D
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
}, Z4 = Jo.memo(({ item: n, isSelected: r, onClick: i }) => {
  const [l, o] = ee.useState(!1);
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
}), ih = SillyTavern.getContext(), du = ({
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
  const p = ee.useMemo(() => r.find((w) => w.value === n), [r, n]), f = ee.useCallback((w) => w ? i.includes(w) : !1, [i]), S = async () => {
    const w = await ih.Popup.show.input(
      `Create a new ${l}`,
      `Please enter a name for the new ${l}:`,
      ""
    );
    if (!w || w.trim() === "") return;
    const N = w.trim();
    if (r.some((D) => D.value === N)) {
      await _e("warning", `A ${l} with this name already exists.`);
      return;
    }
    let x = { value: N, label: N };
    if (v) {
      const D = await Promise.resolve(v(N));
      if (!D.confirmed) return;
      D.value && (typeof D.value == "string" ? x = { value: D.value, label: D.value } : x = D.value);
    }
    c([...r, x]), o(x.value, n);
  }, C = async () => {
    if (!p) {
      await _e("warning", `Please select a ${l} to rename.`);
      return;
    }
    if (f(p.value)) {
      await _e("warning", `This ${l} cannot be renamed as it is read-only.`);
      return;
    }
    const w = await ih.Popup.show.input(
      `Rename ${l}`,
      `Please enter a new name for "${p.label}":`,
      p.label
    );
    if (!w || w.trim() === "" || w.trim() === p.value) return;
    const N = w.trim();
    if (r.some((M) => M.value === N)) {
      await _e("warning", `A ${l} with this name already exists.`);
      return;
    }
    let x = { value: N, label: N };
    if (_) {
      const M = await Promise.resolve(_(p.value, N));
      if (!M.confirmed) return;
      M.value && (typeof M.value == "string" ? x = { value: M.value, label: M.value } : x = M.value);
    }
    const D = r.map((M) => M.value === p.value ? x : M);
    c(D), o(x.value, n);
  }, T = async () => {
    var w;
    if (!p) {
      await _e("warning", `Please select a ${l} to delete.`);
      return;
    }
    if (f(p.value)) {
      await _e("warning", `This ${l} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await ih.Popup.show.confirm(
      `Delete ${l}`,
      `Are you sure you want to delete "${p.label}"?`
    ) || b && !await Promise.resolve(b(p.value)))
      return;
    const N = r.findIndex((M) => M.value === p.value), x = r.filter((M) => M.value !== p.value);
    c(x);
    let D;
    if (x.length > 0) {
      const M = Math.min(N, x.length - 1);
      D = (w = x[M]) == null ? void 0 : w.value;
    }
    o(D, n);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ A.jsx(hu, { value: n ?? "", onChange: (w) => o(w.target.value, n), children: r.map((w) => /* @__PURE__ */ A.jsx("option", { value: w.value, children: w.label }, w.value)) }),
    h && /* @__PURE__ */ A.jsx(
      pe,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${l}`,
        onClick: S,
        "data-i18n": `[title]Create a new ${l}`
      }
    ),
    m && /* @__PURE__ */ A.jsx(
      pe,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${l}`,
        onClick: C,
        disabled: !p,
        "data-i18n": `[title]Rename selected ${l}`
      }
    ),
    g && /* @__PURE__ */ A.jsx(
      pe,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${l}`,
        onClick: T,
        disabled: !p,
        "data-i18n": `[title]Delete selected ${l}`
      }
    ),
    y?.map((w) => /* @__PURE__ */ A.jsx(
      pe,
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
}, c1 = () => {
  const [, n] = ee.useState(0);
  return ee.useCallback(() => {
    n((i) => i + 1);
  }, []);
}, lh = SillyTavern.getContext(), G4 = () => {
  const n = c1(), r = vt.getSettings(), [i, l] = ee.useState(qo[0]), o = ee.useCallback(
    (x) => {
      const D = vt.getSettings();
      x(D), vt.saveSettings(), n();
    },
    [n]
  ), c = ee.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((x) => ({ value: x, label: x })),
    [r.mainContextTemplatePresets]
  ), h = ee.useMemo(
    () => Object.entries(r.prompts).map(([x, D]) => ({
      value: x,
      label: `${D.label} (${x})`
    })),
    [r.prompts]
  ), m = ee.useMemo(() => {
    const x = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return x ? x.prompts.map((D) => {
      const M = r.prompts[D.promptName], R = M ? `${M.label} (${D.promptName})` : D.promptName;
      return {
        id: D.promptName,
        label: R,
        enabled: D.enabled,
        selectValue: D.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), g = (x) => {
    o((D) => {
      D.mainContextTemplatePreset = x ?? "default";
    });
  }, v = (x) => {
    o((D) => {
      const M = {};
      x.forEach((R) => {
        M[R.value] = D.mainContextTemplatePresets[R.value] ?? structuredClone(
          D.mainContextTemplatePresets[D.mainContextTemplatePreset] ?? D.mainContextTemplatePresets.default
        );
      }), D.mainContextTemplatePresets = M;
    });
  }, _ = (x) => {
    o((D) => {
      const M = x.map((Y) => ({
        promptName: Y.id,
        enabled: Y.enabled,
        role: Y.selectValue ?? "user"
      })), R = {
        ...D.mainContextTemplatePresets[D.mainContextTemplatePreset],
        prompts: M
      }, q = {
        ...D.mainContextTemplatePresets,
        [D.mainContextTemplatePreset]: R
      };
      D.mainContextTemplatePresets = q;
    });
  }, b = async () => {
    await lh.Popup.show.confirm("Restore default", "Are you sure?") && o((D) => {
      D.mainContextTemplatePresets = {
        ...D.mainContextTemplatePresets,
        default: structuredClone(o1.mainContextTemplatePresets.default)
      }, D.mainContextTemplatePreset === "default" ? n() : D.mainContextTemplatePreset = "default";
    });
  }, y = (x) => {
    o((D) => {
      const M = x.map((G) => G.value);
      Object.keys(D.prompts).filter((G) => !M.includes(G)).forEach((G) => {
        Object.values(D.mainContextTemplatePresets).forEach((X) => {
          X.prompts = X.prompts.filter((W) => W.promptName !== G);
        });
      });
      const Y = {};
      x.forEach((G) => {
        Y[G.value] = D.prompts[G.value] ?? { content: "", isDefault: !1, label: G.label };
      }), D.prompts = Y;
    });
  }, p = (x) => {
    const D = Ch(x);
    return D ? r.prompts[D] ? (_e("error", `Prompt name already exists: ${D}`), { confirmed: !1 }) : (o((M) => {
      M.prompts = {
        ...M.prompts,
        [D]: { content: M.prompts[i]?.content ?? "", isDefault: !1, label: x }
      };
      const R = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([q, Y]) => [
          q,
          {
            ...Y,
            prompts: [...Y.prompts, { enabled: !0, promptName: D, role: "user" }]
          }
        ])
      );
      M.mainContextTemplatePresets = R;
    }), l(D), { confirmed: !0, value: D }) : (_e("error", `Invalid prompt name: ${x}`), { confirmed: !1 });
  }, f = (x, D) => {
    const M = Ch(D);
    return M ? r.prompts[M] ? (_e("error", `Prompt name already exists: ${M}`), { confirmed: !1 }) : (o((R) => {
      const { [x]: q, ...Y } = R.prompts;
      R.prompts = {
        ...Y,
        [M]: { ...q, label: D }
      };
      const G = Object.fromEntries(
        Object.entries(R.mainContextTemplatePresets).map(([X, W]) => [
          X,
          {
            ...W,
            prompts: W.prompts.map((oe) => oe.promptName === x ? { ...oe, promptName: M } : oe)
          }
        ])
      );
      R.mainContextTemplatePresets = G;
    }), l(M), { confirmed: !0, value: M }) : (_e("error", `Invalid prompt name: ${D}`), { confirmed: !1 });
  }, S = (x) => {
    const D = x.target.value;
    o((M) => {
      const R = M.prompts[i];
      R && (M.prompts = {
        ...M.prompts,
        [i]: {
          ...R,
          // Copy existing properties
          content: D,
          isDefault: qo.includes(i) ? ut[i] === D : !1
        }
      });
    });
  }, C = async () => {
    const x = r.prompts[i];
    if (!x) return _e("warning", "No prompt selected.");
    await lh.Popup.show.confirm("Restore Default", `Restore default for "${x.label}"?`) && o((M) => {
      M.prompts = {
        ...M.prompts,
        [i]: {
          ...M.prompts[i],
          content: ut[i],
          isDefault: !0
        }
      };
    });
  }, T = async () => {
    await lh.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (vt.resetSettings(), n(), _e("success", "Settings have been reset."));
  }, w = r.prompts[i], N = qo.includes(i);
  return /* @__PURE__ */ A.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ A.jsx(
          pe,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: b
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        du,
        {
          label: "Template",
          items: c,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: g,
          onItemsChange: v,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
        q4,
        {
          items: m,
          onItemsChange: _,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Prompt Templates" }),
        N && /* @__PURE__ */ A.jsx(
          pe,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: C
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        du,
        {
          label: "Prompt",
          items: h,
          value: i,
          readOnlyValues: qo,
          onChange: (x) => l(x ?? ""),
          onItemsChange: y,
          onCreate: p,
          onRename: f,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx(
        bn,
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
          onChange: (x) => o((D) => {
            D.showSaveAsWorldInfoEntry.show = x.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ A.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ A.jsxs(pe, { className: "danger_button", style: { width: "auto" }, onClick: T, children: [
      /* @__PURE__ */ A.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, jy = ({
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
  onOpenReviseSessions: C
}) => /* @__PURE__ */ A.jsxs("div", { className: `character-field ${m ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ A.jsx("label", { children: r }),
  /* @__PURE__ */ A.jsxs("div", { className: `field-container ${o ? "large-field" : ""}`, children: [
    /* @__PURE__ */ A.jsx(bn, { value: i, onChange: (T) => v(n, T.target.value), rows: c }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ A.jsx(pe, { onClick: () => b(n), disabled: g, title: "Generate field content", children: g ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ A.jsx(pe, { onClick: () => y(n), disabled: g, title: "Continue from current content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ A.jsx(pe, { onClick: () => p(n), title: "Clear field content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" }) }),
      C && !m && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ A.jsx(pe, { onClick: () => C(n), title: "Revise with AI chat", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" }) }),
      !m && f && /* @__PURE__ */ A.jsx(pe, { onClick: () => f(n), title: "Compare with loaded character", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      m && S && /* @__PURE__ */ A.jsx(pe, { onClick: () => S(n), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  h && /* @__PURE__ */ A.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ A.jsx(
    bn,
    {
      value: l,
      onChange: (T) => _(n, T.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), F4 = SillyTavern.getContext(), V4 = ({
  greetings: n,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: l,
  onCompare: o,
  isGenerating: c
}) => {
  const [h, m] = ee.useState(0);
  ee.useEffect(() => {
    h >= n.length && n.length > 0 ? m(n.length - 1) : n.length === 0 && m(0);
  }, [n, h]);
  const g = () => {
    const y = [...n, { value: "", prompt: "" }];
    r(y), m(y.length - 1);
  }, v = async () => {
    if (n.length === 0) return;
    if (await F4.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
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
            pe,
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
      /* @__PURE__ */ A.jsxs(pe, { onClick: g, title: "Add a new alternate greeting", children: [
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
        /* @__PURE__ */ A.jsx(pe, { onClick: () => i(h), disabled: c, title: "Generate greeting", children: c ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ A.jsx(pe, { onClick: () => l(h), disabled: c, title: "Continue greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ A.jsx(
          pe,
          {
            onClick: () => _(h, "value", ""),
            disabled: c,
            title: "Clear greeting",
            children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ A.jsx(pe, { onClick: () => o(h), disabled: c, title: "Compare greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ A.jsx(
          pe,
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
var Zr = (
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
      var c = this, h, m = function(x) {
        if (x = c.postProcess(x, l), o) {
          setTimeout(function() {
            o(x);
          }, 0);
          return;
        } else
          return x;
      }, g = i.length, v = r.length, _ = 1, b = g + v;
      l.maxEditLength != null && (b = Math.min(b, l.maxEditLength));
      var y = (h = l.timeout) !== null && h !== void 0 ? h : 1 / 0, p = Date.now() + y, f = [{ oldPos: -1, lastComponent: void 0 }], S = this.extractCommon(f[0], i, r, 0, l);
      if (f[0].oldPos + 1 >= v && S + 1 >= g)
        return m(this.buildValues(f[0].lastComponent, i, r));
      var C = -1 / 0, T = 1 / 0, w = function() {
        for (var x = Math.max(C, -_); x <= Math.min(T, _); x += 2) {
          var D = void 0, M = f[x - 1], R = f[x + 1];
          M && (f[x - 1] = void 0);
          var q = !1;
          if (R) {
            var Y = R.oldPos - x;
            q = R && 0 <= Y && Y < g;
          }
          var G = M && M.oldPos + 1 < v;
          if (!q && !G) {
            f[x] = void 0;
            continue;
          }
          if (!G || q && M.oldPos < R.oldPos ? D = c.addToPath(R, !0, !1, 0, l) : D = c.addToPath(M, !1, !0, 1, l), S = c.extractCommon(D, i, r, x, l), D.oldPos + 1 >= v && S + 1 >= g)
            return m(c.buildValues(D.lastComponent, i, r)) || !0;
          f[x] = D, D.oldPos + 1 >= v && (T = Math.min(T, x - 1)), S + 1 >= g && (C = Math.max(C, x + 1));
        }
        _++;
      };
      if (o)
        (function x() {
          setTimeout(function() {
            if (_ > b || Date.now() > p)
              return o(void 0);
            w() || x();
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
), Y4 = /* @__PURE__ */ (function() {
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
})(), X4 = (
  /** @class */
  (function(n) {
    Y4(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r;
  })(Zr)
);
new X4();
function zy(n, r) {
  var i;
  for (i = 0; i < n.length && i < r.length; i++)
    if (n[i] != r[i])
      return n.slice(0, i);
  return n.slice(0, i);
}
function Ly(n, r) {
  var i;
  if (!n || !r || n[n.length - 1] != r[r.length - 1])
    return "";
  for (i = 0; i < n.length && i < r.length; i++)
    if (n[n.length - (i + 1)] != r[r.length - (i + 1)])
      return n.slice(-i);
  return n.slice(-i);
}
function wh(n, r, i) {
  if (n.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return i + n.slice(r.length);
}
function Ah(n, r, i) {
  if (!r)
    return n + i;
  if (n.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return n.slice(0, -r.length) + i;
}
function wl(n, r) {
  return wh(n, r, "");
}
function Go(n, r) {
  return Ah(n, r, "");
}
function By(n, r) {
  return r.slice(0, Q4(n, r));
}
function Q4(n, r) {
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
function Al(n) {
  var r;
  for (r = n.length - 1; r >= 0 && n[r].match(/\s/); r--)
    ;
  return n.substring(r + 1);
}
function Lr(n) {
  var r = n.match(/^\s*/);
  return r ? r[0] : "";
}
var f1 = /* @__PURE__ */ (function() {
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
})(), pu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", $4 = new RegExp("[".concat(pu, "]+|\\s+|[^").concat(pu, "]"), "ug"), K4 = (
  /** @class */
  (function(n) {
    f1(r, n);
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
        o = i.match($4) || [];
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
        m.added ? c = m : m.removed ? h = m : ((c || h) && Uy(o, h, c, m), o = m, c = null, h = null);
      }), (c || h) && Uy(o, h, c, null), i;
    }, r;
  })(Zr)
), J4 = new K4();
function h1(n, r, i) {
  return J4.diff(n, r, i);
}
function Uy(n, r, i, l) {
  if (r && i) {
    var o = Lr(r.value), c = Al(r.value), h = Lr(i.value), m = Al(i.value);
    if (n) {
      var g = zy(o, h);
      n.value = Ah(n.value, h, g), r.value = wl(r.value, g), i.value = wl(i.value, g);
    }
    if (l) {
      var v = Ly(c, m);
      l.value = wh(l.value, m, v), r.value = Go(r.value, v), i.value = Go(i.value, v);
    }
  } else if (i) {
    if (n) {
      var _ = Lr(i.value);
      i.value = i.value.substring(_.length);
    }
    if (l) {
      var _ = Lr(l.value);
      l.value = l.value.substring(_.length);
    }
  } else if (n && l) {
    var b = Lr(l.value), y = Lr(r.value), p = Al(r.value), f = zy(b, y);
    r.value = wl(r.value, f);
    var S = Ly(wl(b, f), p);
    r.value = Go(r.value, S), l.value = wh(l.value, b, S), n.value = Ah(n.value, b, b.slice(0, b.length - S.length));
  } else if (l) {
    var C = Lr(l.value), T = Al(r.value), w = By(T, C);
    r.value = Go(r.value, w);
  } else if (n) {
    var N = Al(n.value), x = Lr(r.value), w = By(N, x);
    r.value = wl(r.value, w);
  }
}
var W4 = (
  /** @class */
  (function(n) {
    f1(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var l = new RegExp("(\\r?\\n)|[".concat(pu, "]+|[^\\S\\n\\r]+|[^").concat(pu, "]"), "ug");
      return i.match(l) || [];
    }, r;
  })(Zr)
);
new W4();
var ew = /* @__PURE__ */ (function() {
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
})(), tw = (
  /** @class */
  (function(n) {
    ew(r, n);
    function r() {
      var i = n !== null && n.apply(this, arguments) || this;
      return i.tokenize = d1, i;
    }
    return r.prototype.equals = function(i, l, o) {
      return o.ignoreWhitespace ? ((!o.newlineIsToken || !i.includes(`
`)) && (i = i.trim()), (!o.newlineIsToken || !l.includes(`
`)) && (l = l.trim())) : o.ignoreNewlineAtEof && !o.newlineIsToken && (i.endsWith(`
`) && (i = i.slice(0, -1)), l.endsWith(`
`) && (l = l.slice(0, -1))), n.prototype.equals.call(this, i, l, o);
    }, r;
  })(Zr)
);
new tw();
function d1(n, r) {
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
var nw = /* @__PURE__ */ (function() {
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
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(Zr)
);
new rw();
var aw = /* @__PURE__ */ (function() {
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
})(), iw = (
  /** @class */
  (function(n) {
    aw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(Zr)
);
new iw();
var lw = /* @__PURE__ */ (function() {
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
})(), sw = (
  /** @class */
  (function(n) {
    lw(r, n);
    function r() {
      var i = n !== null && n.apply(this, arguments) || this;
      return i.tokenize = d1, i;
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
      return typeof i == "string" ? i : JSON.stringify(Dh(i, null, null, h), null, "  ");
    }, r.prototype.equals = function(i, l, o) {
      return n.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), l.replace(/,([\r\n])/g, "$1"), o);
    }, r;
  })(Zr)
);
new sw();
function Dh(n, r, i, l, o) {
  r = r || [], i = i || [], l && (n = l(o === void 0 ? "" : o, n));
  var c;
  for (c = 0; c < r.length; c += 1)
    if (r[c] === n)
      return i[c];
  var h;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (r.push(n), h = new Array(n.length), i.push(h), c = 0; c < n.length; c += 1)
      h[c] = Dh(n[c], r, i, l, String(c));
    return r.pop(), i.pop(), h;
  }
  if (n && n.toJSON && (n = n.toJSON()), typeof n == "object" && n !== null) {
    r.push(n), h = {}, i.push(h);
    var m = [], g;
    for (g in n)
      Object.prototype.hasOwnProperty.call(n, g) && m.push(g);
    for (m.sort(), c = 0; c < m.length; c += 1)
      g = m[c], h[g] = Dh(n[g], r, i, l, g);
    r.pop(), i.pop();
  } else
    h = n;
  return h;
}
var ow = /* @__PURE__ */ (function() {
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
})(), uw = (
  /** @class */
  (function(n) {
    ow(r, n);
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
  })(Zr)
);
new uw();
const cw = ({ originalContent: n, newContent: r, fieldName: i }) => {
  const l = ee.useMemo(() => {
    const o = h1(n, r);
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
}, fw = (n) => Object.entries(n.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const l = parseInt(r[0].split("_")[2]), o = parseInt(i[0].split("_")[2]);
  return l - o;
}).map(([, r]) => ({ value: r.value, prompt: r.prompt })), hw = (n, r, i, l) => {
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
    let h = fw(o), m = !1;
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
}, dw = (n, r) => {
  const i = Object.fromEntries(
    Object.entries(n.fields).filter(([l]) => !l.startsWith("alternate_greetings_"))
  );
  return {
    ...n,
    fields: { ...i, ...r.fields },
    draftFields: { ...r.draftFields }
  };
}, Py = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Th = "placeholder-chatHistory", pw = ma({
  justification: _n().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: _n().describe("The new, full content for the character field.")
}), mw = ma({
  field: _n(),
  value: _n()
}), gw = ma({
  index: uu().int().positive(),
  value: _n()
});
ma({
  justification: _n(),
  fields_to_change: Tn(mw).optional(),
  draft_fields_to_remove: Tn(_n()).optional(),
  greetings_to_add: Tn(_n()).optional(),
  greetings_to_remove: Tn(uu().int().positive()).optional(),
  greetings_to_change: Tn(gw).optional()
});
const vw = (n, r) => {
  const i = ma({
    index: uu().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: _n().describe("The new content for the alternate greeting.")
  }), l = {
    justification: _n().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Tn(_n()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Tn(uu().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Tn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (n.length > 0) {
    const o = ma({
      field: xh(n).describe("The unique ID of the field to change (core or draft)."),
      value: _n().describe("The new content for the field.")
    });
    l.fields_to_change = Tn(o).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (l.draft_fields_to_remove = Tn(xh(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), ma(l);
}, p1 = ({ originalContent: n, newContent: r }) => {
  const i = ee.useMemo(() => {
    const l = h1(n, r);
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
}, yw = ({ before: n, after: r }) => {
  const i = ee.useMemo(() => {
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
      /* @__PURE__ */ A.jsx(p1, { originalContent: o, newContent: c })
    ] }, l)) })
  ] });
}, _w = ({ currentState: n, initialState: r }) => {
  const [i, l] = ee.useState(!1), { coreFields: o, alternateGreetings: c } = ee.useMemo(() => {
    const m = [], g = [];
    return On.forEach((v) => {
      n.fields[v] && m.push({ label: n.fields[v].label, value: n.fields[v].value });
    }), Object.entries(n.fields).filter(([v]) => v.startsWith("alternate_greetings_")).sort((v, _) => parseInt(v[0].split("_")[2]) - parseInt(_[0].split("_")[2])).forEach(([, v]) => g.push(v.value)), { coreFields: m, alternateGreetings: g };
  }, [n]), h = ee.useMemo(() => {
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
      /* @__PURE__ */ A.jsx(p1, { originalContent: g, newContent: v })
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
}, Fo = SillyTavern.getContext(), bw = ({ initialState: n, onSave: r, onClose: i }) => {
  const [l, o] = ee.useState(() => structuredClone(n)), c = (b, y, p) => {
    const f = structuredClone(l), S = p ? "draftFields" : "fields";
    f[S][b] && (f[S][b].value = y), o(f);
  }, h = (b, y) => {
    const p = structuredClone(l), f = `alternate_greetings_${b + 1}`;
    p.fields[f] && (p.fields[f].value = y), o(p);
  }, { coreFields: m, alternateGreetings: g, draftFields: v } = ee.useMemo(() => {
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
        /* @__PURE__ */ A.jsxs(pe, { onClick: _, children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ A.jsxs(pe, { onClick: i, className: "danger_button", children: [
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
}, Sw = ({
  session: n,
  onBack: r,
  onApply: i,
  onSessionUpdate: l,
  initialState: o,
  messageSelection: c
}) => {
  const [h, m] = ee.useState(n.messages), [g, v] = ee.useState(""), [_, b] = ee.useState(!1), [y, p] = ee.useState(null), [f, S] = ee.useState(!1), [C, T] = ee.useState(!1), [w, N] = ee.useState(null), [x, D] = ee.useState(""), M = ee.useRef(null), R = ee.useRef(null);
  ee.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [h]);
  const q = ee.useCallback(
    (V, me, we) => {
      if (JSON.stringify(we) === JSON.stringify(me))
        return V;
      const $e = vt.getSettings().prompts.existingFieldDefinitions;
      if (!$e) return V;
      const Ve = { core: {}, alternate_greetings: {}, draft: {} }, U = {}, re = {};
      if ((/* @__PURE__ */ new Set([...Object.keys(we.fields), ...Object.keys(me.fields)])).forEach((Ae) => {
        const zt = we.fields[Ae]?.value ?? "", Mn = me.fields[Ae]?.value ?? "";
        if (zt !== Mn) {
          const He = me.fields[Ae];
          He && (U[Ae] = He, Ae.startsWith("alternate_greetings_") ? Ve.alternate_greetings[He.label] = He.value : On.includes(Ae) && (Ve.core[He.label] = He.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(we.draftFields), ...Object.keys(me.draftFields)])).forEach((Ae) => {
        const zt = we.draftFields[Ae]?.value ?? "", Mn = me.draftFields[Ae]?.value ?? "";
        if (zt !== Mn && me.draftFields[Ae]) {
          const He = me.draftFields[Ae];
          Ve.draft[He.label] = He.value, re[Ae] = He;
        }
      }), Object.keys(Ve.core).length === 0 && Object.keys(Ve.alternate_greetings).length === 0 && Object.keys(Ve.draft).length === 0)
        return V;
      const qe = {
        fields: gt(Ve),
        fieldList: gt(fu(U, re))
      }, ve = Pl($e.content, qe, Fo.substituteParams);
      if (ve.trim()) {
        const Ae = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: ve.trim(),
          isStateUpdate: !0
        };
        return [...V, Ae];
      }
      return V;
    },
    []
  ), Y = ee.useCallback(
    async (V, me, we, Ze) => {
      const $e = vt.getSettings();
      if (!n.profileId) {
        _e("warning", "Please select a connection profile for this session.");
        return;
      }
      R.current = new AbortController(), we(), b(!0);
      try {
        const Ve = bu(n.profileId), U = [...V], re = (qe) => l1(
          qe,
          qe.findIndex((ve) => ve.id === Th),
          {
            selection: c,
            contextSize: i1(Ve, $e),
            maxResponseTokens: $e.maxResponseToken
          }
        ), ne = V.slice(0, V.length - (me ? 0 : 1)).reverse().find((qe) => qe.stateSnapshot)?.stateSnapshot ?? o, Te = $e.prompts.existingFieldDefinitions;
        if (Te) {
          const qe = {
            fields: gt({
              core: Object.fromEntries(
                Object.entries(ne.fields).filter(([Ae]) => !Ae.startsWith("alternate_greetings_")).map(([, Ae]) => [Ae.label, Ae.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(ne.fields).filter(([Ae]) => Ae.startsWith("alternate_greetings_")).map(([, Ae]) => [Ae.label, Ae.value])
              ),
              draft: Object.fromEntries(Object.entries(ne.draftFields).map(([, Ae]) => [Ae.label, Ae.value]))
            }),
            fieldList: gt(fu(ne.fields, ne.draftFields))
          }, ve = Pl(Te.content, qe, Fo.substituteParams);
          if (ve.trim()) {
            const Ae = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: ve.trim()
            }, zt = U.pop();
            U.push(Ae), zt && U.push(zt);
          }
        }
        if (n.isReadonly) {
          U.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const qe = await S4(
            n.profileId,
            await re(U),
            $e.maxResponseToken,
            R.current.signal
          ), ve = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: qe
          }, Ae = [...V, ve];
          m(Ae), l({ ...n, messages: Ae });
        } else {
          const qe = n.type === "field" ? pw : (() => {
            const kn = [...Object.keys(ne.fields), ...Object.keys(ne.draftFields)], Xl = Object.keys(ne.draftFields);
            return vw(kn, Xl);
          })(), Ae = await E4(
            n.profileId,
            await re(U),
            qe,
            n.type === "field" ? Py.FIELD : Py.GLOBAL,
            $e.maxResponseToken,
            R.current.signal
          ), zt = hw(ne, Ae, n.type, n.targetFieldId), Mn = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Ae.justification,
            stateSnapshot: zt
          };
          let He = [...V, Mn];
          He = q(He, zt, ne), m(He), l({ ...n, messages: He });
        }
      } catch (Ve) {
        Ve.name === "AbortError" ? _e("info", "Request was cancelled.") : (console.error("Revise request failed:", Ve), _e("error", `Request failed: ${r1(Ve)}`)), Ze();
      } finally {
        b(!1), R.current = null;
      }
    },
    [n, l, o, c, q]
  ), G = ee.useCallback(async () => {
    if (!g.trim() || _) return;
    const V = { id: `msg-${Date.now()}`, role: "user", content: g.trim() }, me = h, we = g;
    Y(
      [...h, V],
      !1,
      () => {
        m([...h, V]), v("");
      },
      // Put the message back in the input so it can be sent again.
      () => {
        m(me), v(we);
      }
    );
  }, [g, _, h, Y]), X = ee.useCallback(async () => {
    if (_ || h.length === 0) return;
    const V = h;
    let me = [...h];
    const we = h.findLastIndex((Ze) => !Ze.isStateUpdate);
    we > -1 && h[we].role === "assistant" && (me = h.slice(0, we)), await Y(
      me,
      !0,
      () => m(me),
      () => m(V)
    );
  }, [_, h, Y]), W = () => {
    const V = h.slice().reverse().find((me) => me.stateSnapshot)?.stateSnapshot ?? o;
    i(V), r();
  }, oe = (V) => {
    const me = h.findIndex(($e) => $e.id === V);
    if (me === -1 || !h[me].stateSnapshot) return;
    const we = h[me].stateSnapshot;
    let Ze = o;
    for (let $e = me - 1; $e >= 0; $e--)
      if (h[$e].stateSnapshot) {
        Ze = h[$e].stateSnapshot;
        break;
      }
    p({ before: Ze, after: we });
  }, he = () => {
    S(!0);
  }, Ce = (V) => {
    N(V.id), D(V.content);
  }, H = () => {
    N(null), D("");
  }, te = async () => {
    if (!w) return;
    const V = h.findIndex((re) => re.id === w);
    if (V === -1 || !await Fo.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const we = h, Ze = h.slice(0, V), $e = { ...h[V], content: x }, Ve = [...Ze, $e], U = x;
    H(), Y(
      Ve,
      !1,
      () => m(Ve),
      // Reopen the editor with the edited text so it can be saved again.
      () => {
        m(we), N($e.id), D(U);
      }
    );
  }, ue = async (V) => {
    const me = h.findIndex((U) => U.id === V);
    if (me === -1) return;
    const Ze = !!h[me].isInitial;
    if (!await Fo.Popup.show.confirm(
      "Delete Message",
      Ze ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let Ve;
    Ze ? Ve = h.filter((U) => U.isInitial && U.id !== V) : Ve = h.slice(0, me), m(Ve), l({ ...n, messages: Ve }), _e("info", "Message history has been updated.");
  }, Le = h.filter((V) => !V.isStateUpdate), j = Le.filter((V) => V.isInitial), J = Le.filter((V) => !V.isInitial), le = h.slice().reverse().find((V) => V.stateSnapshot)?.stateSnapshot ?? o, ie = () => {
    T(!0);
  }, fe = (V) => {
    const me = h.slice().reverse().find(($e) => $e.stateSnapshot)?.stateSnapshot ?? o, we = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: V
    };
    let Ze = [...h, we];
    Ze = q(Ze, V, me), m(Ze), l({ ...n, messages: Ze }), T(!1);
  }, je = () => {
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
              onChange: (V) => l({ ...n, isReadonly: V.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ A.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ A.jsx(
          u1,
          {
            initialSelectedProfileId: n.profileId,
            onChange: (V) => l({ ...n, profileId: V?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ A.jsx(pe, { onClick: he, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ A.jsx(pe, { onClick: ie, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ A.jsx(pe, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ A.jsxs(pe, { onClick: W, title: "Apply Changes and Close", children: [
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
            /* @__PURE__ */ A.jsx(bn, { value: x, onChange: (me) => D(me.target.value), rows: 5 }),
            /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ A.jsxs(pe, { onClick: te, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ A.jsxs(pe, { onClick: H, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, V.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper initial-context ${V.role}`, children: [
            /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${V.role} initial`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: V.content }) }),
            !_ && V.id !== Th && /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ A.jsxs(
                pe,
                {
                  className: "message-action-button",
                  onClick: () => Ce(V),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ A.jsxs(
                pe,
                {
                  className: "message-action-button danger_button",
                  onClick: () => ue(V.id),
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
          /* @__PURE__ */ A.jsx(bn, { value: x, onChange: (me) => D(me.target.value), rows: 3 }),
          /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ A.jsxs(pe, { onClick: te, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ A.jsxs(pe, { onClick: H, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, V.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper ${V.role}`, children: [
          /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
            V.role === "user" && !V.stateSnapshot && !_ && /* @__PURE__ */ A.jsxs(
              pe,
              {
                className: "message-action-button",
                onClick: () => Ce(V),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            V.stateSnapshot && !_ && /* @__PURE__ */ A.jsxs(
              pe,
              {
                className: "message-action-button",
                onClick: () => oe(V.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !_ && /* @__PURE__ */ A.jsxs(
              pe,
              {
                className: "message-action-button danger_button",
                onClick: () => ue(V.id),
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
      J.length > 0 && !_ && /* @__PURE__ */ A.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ A.jsxs(pe, { onClick: X, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      _ && /* @__PURE__ */ A.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ A.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ A.jsx(pe, { onClick: je, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ A.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ A.jsx(
        bn,
        {
          value: g,
          onChange: (V) => v(V.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: _ || !!w,
          onKeyDown: (V) => {
            V.key === "Enter" && !V.shiftKey && (V.preventDefault(), G());
          }
        }
      ),
      /* @__PURE__ */ A.jsxs(pe, { onClick: G, disabled: _ || !g.trim() || !!w, children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    y && /* @__PURE__ */ A.jsx(
      vi,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(yw, { before: y.before, after: y.after }),
        onComplete: () => p(null),
        options: { wide: !0, large: !0 }
      }
    ),
    f && /* @__PURE__ */ A.jsx(
      vi,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(_w, { currentState: le, initialState: o }),
        onComplete: () => S(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    C && /* @__PURE__ */ A.jsx(
      vi,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          bw,
          {
            initialState: le,
            onSave: fe,
            onClose: () => T(!1)
          }
        ),
        onComplete: () => T(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
function m1(n, r = {}) {
  const i = n?.entries;
  if (!i)
    return [];
  const l = Array.isArray(i) ? i : Object.values(i);
  return r.includeDisabled ? l : l.filter((o) => !o.disable);
}
async function xw(n, r, i, l, o) {
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
    fieldList: gt(fu(n.fields, n.draftFields))
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
        S && (p[f] = m1(S));
      })
    ), v.lorebooks = gt(p);
  }
  for (const p of h.prompts) {
    if (!p.enabled || p.promptName === "stDescription" && !l.stDescription || p.promptName === "charDefinitions" && !l.charCard || p.promptName === "lorebookDefinitions" && !l.worldInfo || p.promptName === "existingFieldDefinitions" && !l.existingFields || p.promptName === "personaDescription" && !l.persona || p.promptName === "chatHistory" && l.messages.type === "none" || sr === void 0 && !pa && p.promptName === "chatHistory") continue;
    if (p.promptName === "chatHistory") {
      m.push({
        id: Th,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    if (["taskDescription", "existingFieldDefinitions"].includes(p.promptName))
      continue;
    const S = c.prompts[p.promptName];
    if (!S || S.content.includes("{{activeFormatInstructions}}"))
      continue;
    const C = p.promptName === "stDescription" ? { ...v, char: "{{char}}", user: "{{user}}" } : v, T = Pl(S.content, C, Pn.substituteParams);
    T.trim() && m.push({
      id: `im-${m.length}`,
      role: p.role,
      content: T.trim(),
      isInitial: !0
    });
  }
  const _ = r ? n.fields[r]?.label || n.draftFields[r]?.label : "Global", b = c.prompts.reviseTaskDescription.content, y = Pl(
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
const g1 = "charCreator", v1 = "charCreator_reviseSessions", Yl = () => SillyTavern.libs.localforage, Ew = (n) => {
  if (!n)
    return { value: null, recovered: !1 };
  try {
    return { value: JSON.parse(n), recovered: !1 };
  } catch (r) {
    return { value: null, recovered: !0, error: r };
  }
}, y1 = async (n, r, i) => {
  try {
    const l = await r.getItem(n);
    if (l !== null)
      return { value: l, migrated: !1, recovered: !1 };
    const o = Ew(i.getItem(n));
    return o.value === null ? (o.recovered && i.removeItem(n), { value: null, migrated: !1, recovered: o.recovered, error: o.error }) : (await r.setItem(n, o.value), i.removeItem(n), { value: o.value, migrated: !0, recovered: o.recovered });
  } catch (l) {
    return { value: null, migrated: !1, recovered: !0, error: l };
  }
}, _1 = async (n, r, i = Yl()) => {
  try {
    return await i.setItem(n, r), { persisted: !0 };
  } catch (l) {
    return { persisted: !1, error: l };
  }
}, Cw = (n = Yl(), r = localStorage) => y1(g1, n, r), ww = (n, r = Yl()) => _1(g1, n, r), Aw = (n = Yl(), r = localStorage) => y1(v1, n, r), Dw = (n, r = Yl()) => _1(v1, n, r), Hy = SillyTavern.getContext(), Tw = ({
  target: n,
  onClose: r,
  onApply: i,
  initialState: l,
  contextToSend: o,
  sessionForContext: c
}) => {
  const [h, m] = ee.useState([]), [g, v] = ee.useState(null), [_, b] = ee.useState(!0);
  ee.useEffect(() => {
    let N = !0;
    return Aw().then(({ value: x, recovered: D }) => {
      N && (m(Array.isArray(x) ? x : []), D && _e("warning", "Some saved revise sessions were invalid and have been reset."));
    }).catch((x) => {
      console.error("Failed to load revise sessions:", x), _e("warning", "Saved revise sessions could not be loaded.");
    }).finally(() => {
      N && b(!1);
    }), () => {
      N = !1;
    };
  }, []);
  const y = ee.useMemo(() => h.filter((N) => N.type === n.type && (N.type === "global" || N.targetFieldId === n.fieldId)).sort((N, x) => new Date(x.createdAt).getTime() - new Date(N.createdAt).getTime()), [h, n]), p = (N) => {
    m(N), Dw(N).then((x) => {
      x.persisted || (console.warn("Failed to save revise sessions:", x.error), _e("warning", "Revise session history could not be saved. Browser storage may be full."));
    });
  }, f = async () => {
    const x = `Session for ${n.type === "field" ? l.fields[n.fieldId]?.label || l.draftFields[n.fieldId]?.label : "Global"} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`, D = await Hy.Popup.show.input("New Session Name", "", x);
    if (D === null) return;
    const M = D.trim() || x;
    try {
      const R = vt.getSettings();
      if (!R.profileId) {
        _e("warning", "Please select a connection profile in the main popup first.");
        return;
      }
      const q = {
        id: `rs-${Date.now()}`,
        name: M,
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
      }, Y = await xw(
        l,
        q.targetFieldId,
        q.context.mainContextTemplatePreset,
        o,
        c
      );
      q.messages = Y, v(q);
    } catch (R) {
      console.error("Failed to create session:", R), _e("error", `Failed to create session: ${R.message}`);
    }
  }, S = (N) => {
    v(N);
  }, C = async (N) => {
    if (await Hy.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const D = h.filter((M) => M.id !== N);
      p(D);
    }
  }, T = (N) => {
    const x = h.findIndex((M) => M.id === N.id), D = [...h];
    x !== -1 ? D[x] = N : D.push(N), p(D), v(N);
  };
  if (g)
    return /* @__PURE__ */ A.jsx(
      Sw,
      {
        session: g,
        onBack: () => v(null),
        onApply: i,
        onSessionUpdate: T,
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
      /* @__PURE__ */ A.jsx(pe, { className: "danger_button", onClick: () => C(N.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, N.id)) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-actions", children: /* @__PURE__ */ A.jsxs(pe, { onClick: f, className: "menu_button", children: [
      /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
};
function Ow(n, r) {
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
function Nw(n, r, i) {
  return ga.compile(n, { noEscape: !0 })({
    character: Ow(r, i),
    // The entry describes this card, so {{char}} is its name. {{user}} is left for ST to resolve when the entry is used.
    char: r.name?.value || "{{char}}",
    user: "{{user}}"
  });
}
function Mw(n, r = []) {
  const i = new Set(n), l = r.filter((o) => o && !i.has(o));
  return [
    ...n.map((o) => ({ value: o, label: o })),
    ...l.map((o) => ({ value: o, label: `${o} (missing)` }))
  ];
}
const Un = SillyTavern.getContext(), sh = () => ({
  selectedCharacterIndexes: sr ? [String(sr)] : [],
  selectedWorldNames: [],
  fields: On.reduce(
    (n, r) => (n[r] = { value: "", prompt: "", label: lr[r] }, n),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), kw = {
  name: { label: lr.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: lr.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: lr.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: lr.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: lr.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: lr.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, Rw = () => {
  const n = c1(), r = vt.getSettings(), [i, l] = ee.useState(sh()), [o, c] = ee.useState([]), [h, m] = ee.useState(!0), [g, v] = ee.useState("core"), [_, b] = ee.useState([]), [y, p] = ee.useState([]), [f, S] = ee.useState(null), [C, T] = ee.useState(null), [w, N] = ee.useState(!1), [x, D] = ee.useState(null);
  ee.useEffect(() => {
    (async () => {
      m(!0), b(Un.characters), p(Ug);
      const re = (await Cw()).value ?? {}, ne = sh();
      if (re.fields && (ne.fields = { ...ne.fields, ...re.fields }), re.draftFields && (ne.draftFields = re.draftFields), re.selectedCharacterIndexes && (ne.selectedCharacterIndexes = re.selectedCharacterIndexes), re.selectedWorldNames && (ne.selectedWorldNames = re.selectedWorldNames), re.lastLoadedCharacterId) {
        ne.lastLoadedCharacterId = re.lastLoadedCharacterId;
        const Te = Un.characters.find((qe) => qe.avatar === re.lastLoadedCharacterId);
        Te && S(Te);
      }
      l(ne), m(!1);
    })();
  }, []), ee.useEffect(() => {
    h || ww(i).then((U) => {
      U.persisted || (console.warn("Failed to save Character Creator session:", U.error), _e("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [i, h]);
  const M = (U, re) => {
    vt.getSettings()[U] = re, vt.saveSettings(), n();
  }, R = (U, re) => {
    vt.getSettings().contextToSend[U] = re, vt.saveSettings(), n();
  }, q = ee.useCallback(
    (U, re, ne, Te) => {
      l((qe) => {
        const ve = Te ? "draftFields" : "fields", Ae = { ...qe[ve] };
        return Ae[U] || (Ae[U] = { value: "", prompt: "", label: U }), Ae[U][ne] = re, { ...qe, [ve]: Ae };
      });
    },
    []
  ), Y = ee.useMemo(
    () => Object.keys(i.fields).filter((U) => U.startsWith("alternate_greetings_")).sort((U, re) => parseInt(U.split("_")[2]) - parseInt(re.split("_")[2])).map((U) => i.fields[U]),
    [i.fields]
  ), G = ee.useCallback((U) => {
    l((re) => {
      const ne = { ...re.fields };
      return Object.keys(ne).forEach((Te) => {
        Te.startsWith("alternate_greetings_") && delete ne[Te];
      }), U.forEach((Te, qe) => {
        const ve = `alternate_greetings_${qe + 1}`;
        ne[ve] = { ...Te, label: `Alternate Greeting ${qe + 1}` };
      }), { ...re, fields: ne };
    });
  }, []), X = ee.useCallback(
    (U, re) => {
      q(U, "", "value", re);
    },
    [q]
  ), W = ee.useCallback(
    async (U) => {
      await Un.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[U].label}"?`
      ) && l((ne) => {
        const Te = { ...ne.draftFields };
        return delete Te[U], { ...ne, draftFields: Te };
      });
    },
    [i.draftFields]
  ), oe = ee.useCallback(async () => {
    const U = await Un.Popup.show.input("Enter Draft Field Name", "");
    if (!U?.trim()) return;
    const re = Ch(U.trim());
    if (!re) return _e("error", "Invalid field name.");
    if (i.draftFields[re] || On.includes(re))
      return _e("warning", "Field name already exists.");
    l((ne) => ({
      ...ne,
      draftFields: { ...ne.draftFields, [re]: { value: "", prompt: "", label: U } }
    })), v("draft");
  }, [i.draftFields]), he = (U) => {
    D({ type: "field", fieldId: U }), N(!0);
  }, Ce = () => {
    D({ type: "global" }), N(!0);
  }, H = (U) => {
    l((re) => dw(re, U)), _e("success", "Changes from revise session applied."), N(!1);
  }, te = ee.useCallback(
    async (U, re) => {
      if (!r.profileId) return _e("warning", "Please select a connection profile.");
      c((ne) => [...ne, U]);
      try {
        const ne = r.contextToSend.messages, Te = ne.type !== "none" && (sr !== void 0 || !!pa), qe = {};
        r.contextToSend.worldInfo && await Promise.all(
          i.selectedWorldNames.filter((He) => Ug.includes(He)).map(async (He) => {
            const kn = await Un.loadWorldInfo(He);
            kn && (qe[He] = m1(kn, { includeDisabled: !0 }));
          })
        );
        const ve = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete ve.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete ve.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete ve.lorebookDefinitions, r.contextToSend.existingFields || delete ve.existingFieldDefinitions, r.contextToSend.persona || delete ve.personaDescription, delete ve.worldInfoCharDefinition;
        const Ae = await M4({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          messageSelection: ne,
          continueFrom: re,
          session: i,
          allCharacters: _,
          entriesGroupByWorldName: qe,
          promptSettings: ve,
          formatDescription: { content: r.prompts.noneFormat.content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (He) => He.enabled && (Te || He.promptName !== "chatHistory")
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: U
        }), zt = U.startsWith("alternate_greetings_"), Mn = !zt && !On.includes(U);
        if (zt) {
          const He = parseInt(U.split("_")[2]) - 1, kn = [...Y];
          kn[He] && (kn[He].value = Ae), G(kn);
        } else
          q(U, Ae, "value", Mn);
      } catch (ne) {
        console.error(ne), _e("error", r1(ne));
      } finally {
        c((ne) => ne.filter((Te) => Te !== U));
      }
    },
    [i, r, _, Y, q, G]
  ), ue = ee.useCallback(async () => {
    await Un.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (l(sh()), S(null));
  }, []), Le = ee.useCallback(
    (U) => {
      if (!f) return _e("warning", "Please load a character to compare against.");
      let re, ne, Te;
      typeof U == "number" ? (re = Y[U]?.value ?? "", ne = f.data?.alternate_greetings?.[U] ?? "", Te = `Alternate Greeting ${U + 1}`) : (re = i.fields[U]?.value ?? "", ne = f[U] ?? f.data?.[U] ?? "", Te = lr[U]), T({ original: ne, current: re, fieldName: Te });
    },
    [f, i.fields, Y]
  ), j = ee.useCallback(
    async (U) => {
      const re = _[parseInt(U)];
      if (!re || On.some((ve) => i.fields[ve].value.trim() !== "") && !await Un.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const Te = { ...i.fields };
      On.forEach((ve) => {
        Te[ve] = { value: re[ve] ?? re.data?.[ve] ?? "", prompt: "", label: lr[ve] };
      });
      const qe = (re.data?.alternate_greetings ?? []).map((ve) => ({ value: ve, prompt: "" }));
      S(re), l((ve) => ({ ...ve, fields: Te, lastLoadedCharacterId: re.avatar })), G(qe);
    },
    [_, i.fields, G]
  ), J = ee.useCallback(async () => {
    if (pa) {
      _e("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (sr === void 0) {
      _e("warning", "No character chat is currently open.");
      return;
    }
    await j(String(sr));
  }, [j]), le = () => Y.map((U) => U.value).filter((U) => U.trim() !== ""), ie = async () => {
    if (!i.fields.name.value) return _e("warning", "Please provide a character name.");
    if (!await Un.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const re = {
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: le(),
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
      await eb(re, !0);
    } catch (ne) {
      _e("error", `Failed to create character: ${ne.message}`);
    }
  }, fe = async () => {
    if (!f) return _e("warning", "Please load a character to override.");
    if (!await Un.Popup.show.confirm(
      "Override Character",
      `Override "${f.name}"? This cannot be undone.`
    )) return;
    const re = {
      ...f,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: le(),
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      }
    };
    try {
      await tb(re, !0), _e("success", `Character "${re.name}" updated!`);
    } catch (ne) {
      _e("error", `Failed to override character: ${ne.message}`);
    }
  }, je = () => {
    const U = JSON.stringify({ draftFields: i.draftFields, version: Yh }, null, 2), re = new Blob([U], { type: "application/json" }), ne = document.createElement("a");
    ne.href = URL.createObjectURL(re), ne.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, ne.click(), URL.revokeObjectURL(ne.href);
  }, V = () => {
    const U = document.createElement("input");
    U.type = "file", U.accept = ".json", U.onchange = async () => {
      const re = U.files?.[0];
      if (re)
        try {
          const ne = await re.text(), Te = JSON.parse(ne);
          if (!Te.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await Un.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (l((ve) => ({ ...ve, draftFields: Te.draftFields })), _e("success", "Draft fields imported."));
        } catch (ne) {
          _e("error", `Import failed: ${ne.message}`);
        }
    }, U.click();
  }, me = ee.useMemo(
    () => _.map((U, re) => ({ value: String(re), label: U.name })),
    [_]
  ), we = ee.useMemo(
    () => y.map((U) => ({ value: U, label: U })),
    [y]
  ), Ze = ee.useMemo(
    () => Mw(y, i.selectedWorldNames),
    [y, i.selectedWorldNames]
  ), $e = ee.useMemo(
    () => Object.keys(r.promptPresets).map((U) => ({ value: U, label: U })),
    [r.promptPresets]
  ), Ve = ee.useMemo(
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
            u1,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (U) => M("profileId", U?.id ?? "")
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
            (sr !== void 0 || pa) && /* @__PURE__ */ A.jsxs("div", { className: "message-options", children: [
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
              Zo,
              {
                items: me,
                value: i.selectedCharacterIndexes,
                onChange: (U) => l((re) => ({ ...re, selectedCharacterIndexes: U })),
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
              Zo,
              {
                items: Ze,
                value: i.selectedWorldNames,
                onChange: (U) => l((re) => ({ ...re, selectedWorldNames: U })),
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
              du,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: Ve,
                value: r.mainContextTemplatePreset,
                onChange: (U) => M("mainContextTemplatePreset", U ?? "default")
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
                onChange: (U) => M("maxContextType", U.target.value),
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
              onChange: (U) => M("maxContextValue", parseInt(U.target.value) || 16384)
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
                onChange: (U) => M("maxResponseToken", parseInt(U.target.value) || 1024)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Additional Instructions" }),
          /* @__PURE__ */ A.jsx(
            du,
            {
              label: "Prompt Preset",
              items: $e,
              value: r.promptPreset,
              onChange: (U) => M("promptPreset", U ?? "default"),
              onItemsChange: (U) => M(
                "promptPresets",
                U.reduce(
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
            bn,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (U) => M("promptPresets", {
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
            pe,
            {
              onClick: Ce,
              title: "Open global revision sessions to edit multiple fields at once",
              children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" })
            }
          ),
          /* @__PURE__ */ A.jsx(pe, { onClick: ie, children: "Save as New" }),
          /* @__PURE__ */ A.jsx(pe, { onClick: fe, disabled: !f, children: "Override Char" }),
          r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ A.jsx(
            Zo,
            {
              items: we,
              placeholder: "Save as WI Entry",
              closeOnSelect: !0,
              value: [],
              onChange: (U) => {
              },
              onBeforeSelection: async (U, re) => {
                if (!i.fields.name.value)
                  return _e("warning", "Please enter a name first."), !1;
                const ne = re[0], Te = Nw(
                  r.prompts.worldInfoCharDefinition.content,
                  i.fields,
                  Y
                ), qe = {
                  uid: -1,
                  key: [i.fields.name.value],
                  content: Te,
                  comment: i.fields.name.value,
                  disable: !1,
                  keysecondary: []
                };
                try {
                  await vS({ entry: qe, selectedWorldName: ne, operation: "add" }), _e("success", `Entry added to ${ne}.`);
                } catch (ve) {
                  _e("error", `Failed to add WI Entry: ${ve.message}`);
                }
                return !1;
              }
            }
          ),
          /* @__PURE__ */ A.jsxs(pe, { onClick: ue, children: [
            /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-left", style: { marginRight: "10px" } }),
            "Reset Fields"
          ] }),
          /* @__PURE__ */ A.jsx(
            pe,
            {
              onClick: J,
              title: "Load the character from the currently open chat",
              disabled: !!pa || sr === void 0,
              children: "Current Char"
            }
          ),
          /* @__PURE__ */ A.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ A.jsx(
            Zo,
            {
              items: me,
              value: f ? [String(_.indexOf(f))] : [],
              onChange: (U) => j(U[0]),
              multiple: !1,
              enableSearch: !0,
              placeholder: "Load Character..."
            }
          ) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ A.jsx(
            pe,
            {
              onClick: () => v("core"),
              className: `menu_button tab-button ${g === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ A.jsx(
            pe,
            {
              onClick: () => v("draft"),
              className: `menu_button tab-button ${g === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ A.jsx("div", { className: "right-aligned", children: g === "draft" && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
            /* @__PURE__ */ A.jsxs(pe, { onClick: oe, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ A.jsx(pe, { onClick: je, children: "Export" }),
            /* @__PURE__ */ A.jsx(pe, { onClick: V, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-content-area", children: [
          g === "core" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Core Character Fields" }),
            On.map((U) => {
              const re = kw[U];
              return re ? /* @__PURE__ */ A.jsx(
                jy,
                {
                  fieldId: U,
                  label: re.label,
                  value: i.fields[U]?.value ?? "",
                  prompt: i.fields[U]?.prompt ?? "",
                  large: re.large,
                  rows: re.rows,
                  promptEnabled: re.promptEnabled,
                  isGenerating: o.includes(U),
                  onValueChange: (ne, Te) => q(ne, Te, "value", !1),
                  onPromptChange: (ne, Te) => q(ne, Te, "prompt", !1),
                  onGenerate: te,
                  onContinue: (ne) => te(ne, i.fields[ne].value),
                  onClear: (ne) => X(ne, !1),
                  onCompare: Le,
                  onOpenReviseSessions: he
                },
                U
              ) : null;
            }),
            /* @__PURE__ */ A.jsx(
              V4,
              {
                greetings: Y,
                onGreetingsChange: G,
                isGenerating: o.some((U) => U.startsWith("alternate_greetings_")),
                onGenerate: (U) => te(`alternate_greetings_${U + 1}`),
                onContinue: (U) => te(`alternate_greetings_${U + 1}`, Y[U].value),
                onCompare: Le
              }
            )
          ] }),
          g === "draft" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Draft Fields" }),
            Object.entries(i.draftFields).map(([U, re]) => /* @__PURE__ */ A.jsx(
              jy,
              {
                fieldId: U,
                label: re.label,
                value: re.value,
                prompt: re.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: o.includes(U),
                onValueChange: (ne, Te) => q(ne, Te, "value", !0),
                onPromptChange: (ne, Te) => q(ne, Te, "prompt", !0),
                onGenerate: te,
                onContinue: (ne) => te(ne, i.draftFields[ne].value),
                onClear: (ne) => X(ne, !0),
                onDelete: W
              },
              U
            ))
          ] })
        ] })
      ] })
    ] }),
    C && /* @__PURE__ */ A.jsx(
      vi,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          cw,
          {
            originalContent: C.original,
            newContent: C.current,
            fieldName: C.fieldName
          }
        ),
        onComplete: () => T(null),
        options: { wide: !0 }
      }
    ),
    w && x && /* @__PURE__ */ A.jsx(
      vi,
      {
        type: on.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          Tw,
          {
            target: x,
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
}, jw = () => {
  const [n, r] = ee.useState(!1), i = () => r(!0), l = () => r(!1);
  return window.openCharacterCreatorPopup = i, n ? /* @__PURE__ */ A.jsx(
    vi,
    {
      content: /* @__PURE__ */ A.jsx(Rw, {}),
      type: on.DISPLAY,
      onComplete: l,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, b1 = SillyTavern.getContext();
async function zw() {
  const n = await b1.renderExtensionTemplateAsync(
    `third-party/${da}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", n);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), Jg.createRoot(r).render(
    /* @__PURE__ */ A.jsx(Jo.StrictMode, { children: /* @__PURE__ */ A.jsx(G4, {}) })
  ));
  const l = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', o = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], c = document.createElement("div");
  document.body.appendChild(c), Jg.createRoot(c).render(
    /* @__PURE__ */ A.jsx(Jo.StrictMode, { children: /* @__PURE__ */ A.jsx(jw, {}) })
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
function Lw() {
  return !!b1.ConnectionManagerRequestService;
}
Lw() ? B4().then(() => {
  zw();
}) : _e("error", `[${da}] Make sure ST is updated.`);
export {
  zw as init
};
