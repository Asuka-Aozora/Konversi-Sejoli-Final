(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var r;
  var o;
  var f;
  var e;
  var c = {};
  var s = [];
  var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function h(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function v(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u3, i3) {
    var t3, r3, o2, f3 = {};
    for (o2 in u3)
      "key" == o2 ? t3 = u3[o2] : "ref" == o2 ? r3 = u3[o2] : f3[o2] = u3[o2];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (o2 in l3.defaultProps)
        void 0 === f3[o2] && (f3[o2] = l3.defaultProps[o2]);
    return p(l3, f3, t3, r3, null);
  }
  function p(n2, i3, t3, r3, o2) {
    var f3 = { type: n2, props: i3, key: t3, ref: r3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o2 ? ++u : o2 };
    return null == o2 && null != l.vnode && l.vnode(f3), f3;
  }
  function _(n2) {
    return n2.children;
  }
  function k(n2, l3, u3, i3, t3) {
    var r3;
    for (r3 in u3)
      "children" === r3 || "key" === r3 || r3 in l3 || g(n2, r3, null, u3[r3], i3);
    for (r3 in l3)
      t3 && "function" != typeof l3[r3] || "children" === r3 || "key" === r3 || "value" === r3 || "checked" === r3 || u3[r3] === l3[r3] || g(n2, r3, l3[r3], u3[r3], i3);
  }
  function b(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
  }
  function g(n2, l3, u3, i3, t3) {
    var r3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || b(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || b(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        r3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? i3 || n2.addEventListener(l3, r3 ? w : m, r3) : n2.removeEventListener(l3, r3 ? w : m, r3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && -1 == l3.indexOf("-") ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function m(n2) {
    t = true;
    try {
      return this.l[n2.type + false](l.event ? l.event(n2) : n2);
    } finally {
      t = false;
    }
  }
  function w(n2) {
    t = true;
    try {
      return this.l[n2.type + true](l.event ? l.event(n2) : n2);
    } finally {
      t = false;
    }
  }
  function x(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function A(n2, l3) {
    if (null == l3)
      return n2.__ ? A(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? A(n2) : null;
  }
  function P(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return P(n2);
    }
  }
  function C(n2) {
    t ? setTimeout(n2) : f(n2);
  }
  function T(n2) {
    (!n2.__d && (n2.__d = true) && r.push(n2) && !$.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || C)($);
  }
  function $() {
    var n2, l3, u3, i3, t3, o2, f3, e3;
    for (r.sort(function(n3, l4) {
      return n3.__v.__b - l4.__v.__b;
    }); n2 = r.shift(); )
      n2.__d && (l3 = r.length, i3 = void 0, t3 = void 0, f3 = (o2 = (u3 = n2).__v).__e, (e3 = u3.__P) && (i3 = [], (t3 = h({}, o2)).__v = o2.__v + 1, M(e3, o2, t3, u3.__n, void 0 !== e3.ownerSVGElement, null != o2.__h ? [f3] : null, i3, null == f3 ? A(o2) : f3, o2.__h), N(i3, o2), o2.__e != f3 && P(o2)), r.length > l3 && r.sort(function(n3, l4) {
        return n3.__v.__b - l4.__v.__b;
      }));
    $.__r = 0;
  }
  function H(n2, l3, u3, i3, t3, r3, o2, f3, e3, a3) {
    var h3, v3, y3, d2, k3, b3, g4, m3 = i3 && i3.__k || s, w4 = m3.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if (null != (d2 = u3.__k[h3] = null == (d2 = l3[h3]) || "boolean" == typeof d2 ? null : "string" == typeof d2 || "number" == typeof d2 || "bigint" == typeof d2 ? p(null, d2, null, null, d2) : Array.isArray(d2) ? p(_, { children: d2 }, null, null, null) : d2.__b > 0 ? p(d2.type, d2.props, d2.key, d2.ref ? d2.ref : null, d2.__v) : d2)) {
        if (d2.__ = u3, d2.__b = u3.__b + 1, null === (y3 = m3[h3]) || y3 && d2.key == y3.key && d2.type === y3.type)
          m3[h3] = void 0;
        else
          for (v3 = 0; v3 < w4; v3++) {
            if ((y3 = m3[v3]) && d2.key == y3.key && d2.type === y3.type) {
              m3[v3] = void 0;
              break;
            }
            y3 = null;
          }
        M(n2, d2, y3 = y3 || c, t3, r3, o2, f3, e3, a3), k3 = d2.__e, (v3 = d2.ref) && y3.ref != v3 && (g4 || (g4 = []), y3.ref && g4.push(y3.ref, null, d2), g4.push(v3, d2.__c || k3, d2)), null != k3 ? (null == b3 && (b3 = k3), "function" == typeof d2.type && d2.__k === y3.__k ? d2.__d = e3 = I(d2, e3, n2) : e3 = z(n2, d2, y3, m3, k3, e3), "function" == typeof u3.type && (u3.__d = e3)) : e3 && y3.__e == e3 && e3.parentNode != n2 && (e3 = A(y3));
      }
    for (u3.__e = b3, h3 = w4; h3--; )
      null != m3[h3] && ("function" == typeof u3.type && null != m3[h3].__e && m3[h3].__e == u3.__d && (u3.__d = L(i3).nextSibling), q(m3[h3], m3[h3]));
    if (g4)
      for (h3 = 0; h3 < g4.length; h3++)
        S(g4[h3], g4[++h3], g4[++h3]);
  }
  function I(n2, l3, u3) {
    for (var i3, t3 = n2.__k, r3 = 0; t3 && r3 < t3.length; r3++)
      (i3 = t3[r3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? I(i3, l3, u3) : z(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function j(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
      j(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function z(n2, l3, u3, i3, t3, r3) {
    var o2, f3, e3;
    if (void 0 !== l3.__d)
      o2 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != r3 || null == t3.parentNode)
      n:
        if (null == r3 || r3.parentNode !== n2)
          n2.appendChild(t3), o2 = null;
        else {
          for (f3 = r3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, r3), o2 = r3;
        }
    return void 0 !== o2 ? o2 : t3.nextSibling;
  }
  function L(n2) {
    var l3, u3, i3;
    if (null == n2.type || "string" == typeof n2.type)
      return n2.__e;
    if (n2.__k) {
      for (l3 = n2.__k.length - 1; l3 >= 0; l3--)
        if ((u3 = n2.__k[l3]) && (i3 = L(u3)))
          return i3;
    }
    return null;
  }
  function M(n2, u3, i3, t3, r3, o2, f3, e3, c3) {
    var s3, a3, v3, y3, p3, d2, k3, b3, g4, m3, w4, A3, P2, C3, T4, $2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, o2 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if ("function" == typeof $2) {
          if (b3 = u3.props, g4 = (s3 = $2.contextType) && t3[s3.__c], m3 = s3 ? g4 ? g4.props.value : s3.__ : t3, i3.__c ? k3 = (a3 = u3.__c = i3.__c).__ = a3.__E : ("prototype" in $2 && $2.prototype.render ? u3.__c = a3 = new $2(b3, m3) : (u3.__c = a3 = new x(b3, m3), a3.constructor = $2, a3.render = B), g4 && g4.sub(a3), a3.props = b3, a3.state || (a3.state = {}), a3.context = m3, a3.__n = t3, v3 = a3.__d = true, a3.__h = [], a3._sb = []), null == a3.__s && (a3.__s = a3.state), null != $2.getDerivedStateFromProps && (a3.__s == a3.state && (a3.__s = h({}, a3.__s)), h(a3.__s, $2.getDerivedStateFromProps(b3, a3.__s))), y3 = a3.props, p3 = a3.state, a3.__v = u3, v3)
            null == $2.getDerivedStateFromProps && null != a3.componentWillMount && a3.componentWillMount(), null != a3.componentDidMount && a3.__h.push(a3.componentDidMount);
          else {
            if (null == $2.getDerivedStateFromProps && b3 !== y3 && null != a3.componentWillReceiveProps && a3.componentWillReceiveProps(b3, m3), !a3.__e && null != a3.shouldComponentUpdate && false === a3.shouldComponentUpdate(b3, a3.__s, m3) || u3.__v === i3.__v) {
              for (u3.__v !== i3.__v && (a3.props = b3, a3.state = a3.__s, a3.__d = false), u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), w4 = 0; w4 < a3._sb.length; w4++)
                a3.__h.push(a3._sb[w4]);
              a3._sb = [], a3.__h.length && f3.push(a3);
              break n;
            }
            null != a3.componentWillUpdate && a3.componentWillUpdate(b3, a3.__s, m3), null != a3.componentDidUpdate && a3.__h.push(function() {
              a3.componentDidUpdate(y3, p3, d2);
            });
          }
          if (a3.context = m3, a3.props = b3, a3.__P = n2, A3 = l.__r, P2 = 0, "prototype" in $2 && $2.prototype.render) {
            for (a3.state = a3.__s, a3.__d = false, A3 && A3(u3), s3 = a3.render(a3.props, a3.state, a3.context), C3 = 0; C3 < a3._sb.length; C3++)
              a3.__h.push(a3._sb[C3]);
            a3._sb = [];
          } else
            do {
              a3.__d = false, A3 && A3(u3), s3 = a3.render(a3.props, a3.state, a3.context), a3.state = a3.__s;
            } while (a3.__d && ++P2 < 25);
          a3.state = a3.__s, null != a3.getChildContext && (t3 = h(h({}, t3), a3.getChildContext())), v3 || null == a3.getSnapshotBeforeUpdate || (d2 = a3.getSnapshotBeforeUpdate(y3, p3)), T4 = null != s3 && s3.type === _ && null == s3.key ? s3.props.children : s3, H(n2, Array.isArray(T4) ? T4 : [T4], u3, i3, t3, r3, o2, f3, e3, c3), a3.base = u3.__e, u3.__h = null, a3.__h.length && f3.push(a3), k3 && (a3.__E = a3.__ = null), a3.__e = false;
        } else
          null == o2 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = O(i3.__e, u3, i3, t3, r3, o2, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != o2) && (u3.__e = e3, u3.__h = !!c3, o2[o2.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function N(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function O(l3, u3, i3, t3, r3, o2, f3, e3) {
    var s3, a3, h3, y3 = i3.props, p3 = u3.props, d2 = u3.type, _3 = 0;
    if ("svg" === d2 && (r3 = true), null != o2) {
      for (; _3 < o2.length; _3++)
        if ((s3 = o2[_3]) && "setAttribute" in s3 == !!d2 && (d2 ? s3.localName === d2 : 3 === s3.nodeType)) {
          l3 = s3, o2[_3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === d2)
        return document.createTextNode(p3);
      l3 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p3.is && p3), o2 = null, e3 = false;
    }
    if (null === d2)
      y3 === p3 || e3 && l3.data === p3 || (l3.data = p3);
    else {
      if (o2 = o2 && n.call(l3.childNodes), a3 = (y3 = i3.props || c).dangerouslySetInnerHTML, h3 = p3.dangerouslySetInnerHTML, !e3) {
        if (null != o2)
          for (y3 = {}, _3 = 0; _3 < l3.attributes.length; _3++)
            y3[l3.attributes[_3].name] = l3.attributes[_3].value;
        (h3 || a3) && (h3 && (a3 && h3.__html == a3.__html || h3.__html === l3.innerHTML) || (l3.innerHTML = h3 && h3.__html || ""));
      }
      if (k(l3, p3, y3, r3, e3), h3)
        u3.__k = [];
      else if (_3 = u3.props.children, H(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t3, r3 && "foreignObject" !== d2, o2, f3, o2 ? o2[0] : i3.__k && A(i3, 0), e3), null != o2)
        for (_3 = o2.length; _3--; )
          null != o2[_3] && v(o2[_3]);
      e3 || ("value" in p3 && void 0 !== (_3 = p3.value) && (_3 !== l3.value || "progress" === d2 && !_3 || "option" === d2 && _3 !== y3.value) && g(l3, "value", _3, y3.value, false), "checked" in p3 && void 0 !== (_3 = p3.checked) && _3 !== l3.checked && g(l3, "checked", _3, y3.checked, false));
    }
    return l3;
  }
  function S(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function q(n2, u3, i3) {
    var t3, r3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || S(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null, n2.__c = void 0;
    }
    if (t3 = n2.__k)
      for (r3 = 0; r3 < t3.length; r3++)
        t3[r3] && q(t3[r3], u3, i3 || "function" != typeof n2.type);
    i3 || null == n2.__e || v(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function B(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function G(n2, l3) {
    var u3 = { __c: l3 = "__cC" + e++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, i3;
      return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
        return i3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(function(n5) {
          n5.__e = true, T(n5);
        });
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  n = s.slice, l = { __e: function(n2, l3, u3, i3) {
    for (var t3, r3, o2; l3 = l3.__; )
      if ((t3 = l3.__c) && !t3.__)
        try {
          if ((r3 = t3.constructor) && null != r3.getDerivedStateFromError && (t3.setState(r3.getDerivedStateFromError(n2)), o2 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), o2 = t3.__d), o2)
            return t3.__E = t3;
        } catch (l4) {
          n2 = l4;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, t = false, x.prototype.setState = function(n2, l3) {
    var u3;
    u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u3), this.props)), n2 && h(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), T(this));
  }, x.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), T(this));
  }, x.prototype.render = _, r = [], f = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $.__r = 0, e = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var f2 = [];
  var c2 = [];
  var e2 = l.__b;
  var a2 = l.__r;
  var v2 = l.diffed;
  var l2 = l.__c;
  var m2 = l.unmount;
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  l.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, l.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i3 = (r2 = n2.__c).__H;
    i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
    })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [])), u2 = r2;
  }, l.diffed = function(t3) {
    v2 && v2(t3);
    var o2 = t3.__c;
    o2 && o2.__H && (o2.__H.__h.length && (1 !== f2.push(o2) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o2.__H.__.forEach(function(n2) {
      n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
    })), u2 = r2 = null;
  }, l.__c = function(t3, r3) {
    r3.some(function(t4) {
      try {
        t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || w2(n2);
        });
      } catch (u3) {
        r3.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), r3 = [], l.__e(u3, t4.__v);
      }
    }), l2 && l2(t3, r3);
  }, l.unmount = function(t3) {
    m2 && m2(t3);
    var r3, u3 = t3.__c;
    u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
      try {
        k2(n2);
      } catch (n3) {
        r3 = n3;
      }
    }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
  };
  var g2 = "function" == typeof requestAnimationFrame;
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }

  // node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C2(n2, t3) {
    for (var e3 in n2)
      if ("__source" !== e3 && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if ("__source" !== r3 && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function w3(n2) {
    this.props = n2;
  }
  (w3.prototype = new x()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n2, t3) {
    return C2(this.props, n2) || C2(this.state, t3);
  };
  var x3 = l.__b;
  l.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), x3 && x3(n2);
  };
  var N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var T3 = l.__e;
  l.__e = function(n2, t3, e3, r3) {
    if (n2.then) {
      for (var u3, o2 = t3; o2 = o2.__; )
        if ((u3 = o2.__c) && u3.__c)
          return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
    }
    T3(n2, t3, e3, r3);
  };
  var I2 = l.unmount;
  function L2(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return L2(n3, t3, e3);
    })), n2;
  }
  function U(n2, t3, e3) {
    return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return U(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function D2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function F3(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function V2() {
    this.u = null, this.o = null;
  }
  l.unmount = function(n2) {
    var t3 = n2.__c;
    t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), I2 && I2(n2);
  }, (D2.prototype = new x()).__c = function(n2, t3) {
    var e3 = t3.__c, r3 = this;
    null == r3.t && (r3.t = []), r3.t.push(e3);
    var u3 = F3(r3.__v), o2 = false, i3 = function() {
      o2 || (o2 = true, e3.__R = null, u3 ? u3(l3) : l3());
    };
    e3.__R = i3;
    var l3 = function() {
      if (!--r3.__u) {
        if (r3.state.__a) {
          var n3 = r3.state.__a;
          r3.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
        }
        var t4;
        for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
          t4.forceUpdate();
      }
    }, c3 = true === t3.__h;
    r3.__u++ || c3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
  }, D2.prototype.componentWillUnmount = function() {
    this.t = [];
  }, D2.prototype.render = function(n2, e3) {
    if (this.__b) {
      if (this.__v.__k) {
        var r3 = document.createElement("div"), o2 = this.__v.__k[0].__c;
        this.__v.__k[0] = L2(this.__b, r3, o2.__O = o2.__P);
      }
      this.__b = null;
    }
    var i3 = e3.__a && y(_, null, n2.fallback);
    return i3 && (i3.__h = null), [y(_, null, e3.__a ? null : n2.children), i3];
  };
  var W = function(n2, t3, e3) {
    if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
      for (e3 = n2.u; e3; ) {
        for (; e3.length > 3; )
          e3.pop()();
        if (e3[1] < e3[0])
          break;
        n2.u = e3 = e3[2];
      }
  };
  (V2.prototype = new x()).__a = function(n2) {
    var t3 = this, e3 = F3(t3.__v), r3 = t3.o.get(n2);
    return r3[0]++, function(u3) {
      var o2 = function() {
        t3.props.revealOrder ? (r3.push(u3), W(t3, n2, r3)) : u3();
      };
      e3 ? e3(o2) : o2();
    };
  }, V2.prototype.render = function(n2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t3 = j(n2.children);
    n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
    for (var e3 = t3.length; e3--; )
      this.o.set(t3[e3], this.u = [1, 0, this.u]);
    return n2.children;
  }, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
    var n2 = this;
    this.o.forEach(function(t3, e3) {
      W(n2, e3, t3);
    });
  };
  var z2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var B2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var H2 = "undefined" != typeof document;
  var Z = function(n2) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
  };
  x.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
    Object.defineProperty(x.prototype, t3, { configurable: true, get: function() {
      return this["UNSAFE_" + t3];
    }, set: function(n2) {
      Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
    } });
  });
  var G2 = l.event;
  function J() {
  }
  function K() {
    return this.cancelBubble;
  }
  function Q() {
    return this.defaultPrevented;
  }
  l.event = function(n2) {
    return G2 && (n2 = G2(n2)), n2.persist = J, n2.isPropagationStopped = K, n2.isDefaultPrevented = Q, n2.nativeEvent = n2;
  };
  var X;
  var nn = { configurable: true, get: function() {
    return this.class;
  } };
  var tn = l.vnode;
  l.vnode = function(n2) {
    var t3 = n2.type, e3 = n2.props, u3 = e3;
    if ("string" == typeof t3) {
      var o2 = -1 === t3.indexOf("-");
      for (var i3 in u3 = {}, e3) {
        var l3 = e3[i3];
        H2 && "children" === i3 && "noscript" === t3 || "value" === i3 && "defaultValue" in e3 && null == l3 || ("defaultValue" === i3 && "value" in e3 && null == e3.value ? i3 = "value" : "download" === i3 && true === l3 ? l3 = "" : /ondoubleclick/i.test(i3) ? i3 = "ondblclick" : /^onchange(textarea|input)/i.test(i3 + t3) && !Z(e3.type) ? i3 = "oninput" : /^onfocus$/i.test(i3) ? i3 = "onfocusin" : /^onblur$/i.test(i3) ? i3 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i3) ? i3 = i3.toLowerCase() : o2 && B2.test(i3) ? i3 = i3.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l3 && (l3 = void 0), /^oninput$/i.test(i3) && (i3 = i3.toLowerCase(), u3[i3] && (i3 = "oninputCapture")), u3[i3] = l3);
      }
      "select" == t3 && u3.multiple && Array.isArray(u3.value) && (u3.value = j(e3.children).forEach(function(n3) {
        n3.props.selected = -1 != u3.value.indexOf(n3.props.value);
      })), "select" == t3 && null != u3.defaultValue && (u3.value = j(e3.children).forEach(function(n3) {
        n3.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n3.props.value) : u3.defaultValue == n3.props.value;
      })), n2.props = u3, e3.class != e3.className && (nn.enumerable = "className" in e3, null != e3.className && (u3.class = e3.className), Object.defineProperty(u3, "className", nn));
    }
    n2.$$typeof = z2, tn && tn(n2);
  };
  var en = l.__r;
  l.__r = function(n2) {
    en && en(n2), X = n2.__c;
  };

  // node_modules/@fullcalendar/core/internal-common.js
  var styleTexts = [];
  var styleEls = /* @__PURE__ */ new Map();
  function injectStyles(styleText) {
    styleTexts.push(styleText);
    styleEls.forEach((styleEl) => {
      appendStylesTo(styleEl, styleText);
    });
  }
  function registerStylesRoot(rootNode) {
    let styleEl = styleEls.get(rootNode);
    if (!styleEl || !styleEl.isConnected) {
      styleEl = rootNode.querySelector("style[data-fullcalendar]");
      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.setAttribute("data-fullcalendar", "");
        const nonce = getNonceValue();
        if (nonce) {
          styleEl.nonce = nonce;
        }
        const parentEl = rootNode === document ? document.head : rootNode;
        const insertBefore = rootNode === document ? parentEl.querySelector("script,link[rel=stylesheet],link[as=style],style") : parentEl.firstChild;
        parentEl.insertBefore(styleEl, insertBefore);
      }
      styleEls.set(rootNode, styleEl);
      hydrateStylesRoot(styleEl);
    }
  }
  function hydrateStylesRoot(styleEl) {
    for (const styleText of styleTexts) {
      appendStylesTo(styleEl, styleText);
    }
  }
  function appendStylesTo(styleEl, styleText) {
    const { sheet } = styleEl;
    const ruleCnt = sheet.cssRules.length;
    styleText.split("}").forEach((styleStr, i3) => {
      styleStr = styleStr.trim();
      if (styleStr) {
        sheet.insertRule(styleStr + "}", ruleCnt + i3);
      }
    });
  }
  var queriedNonceValue;
  function getNonceValue() {
    if (queriedNonceValue === void 0) {
      queriedNonceValue = queryNonceValue();
    }
    return queriedNonceValue;
  }
  function queryNonceValue() {
    const metaWithNonce = document.querySelector('meta[name="csp-nonce"]');
    if (metaWithNonce && metaWithNonce.hasAttribute("content")) {
      return metaWithNonce.getAttribute("content");
    }
    const elWithNonce = document.querySelector("script[nonce]");
    if (elWithNonce) {
      return elWithNonce.nonce || "";
    }
    return "";
  }
  if (typeof document !== "undefined") {
    registerStylesRoot(document);
  }
  var css_248z = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
  injectStyles(css_248z);
  function removeElement(el) {
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
  function elementClosest(el, selector) {
    if (el.closest) {
      return el.closest(selector);
    }
    if (!document.documentElement.contains(el)) {
      return null;
    }
    do {
      if (elementMatches(el, selector)) {
        return el;
      }
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  }
  function elementMatches(el, selector) {
    let method = el.matches || el.matchesSelector || el.msMatchesSelector;
    return method.call(el, selector);
  }
  function findElements(container, selector) {
    let containers = container instanceof HTMLElement ? [container] : container;
    let allMatches = [];
    for (let i3 = 0; i3 < containers.length; i3 += 1) {
      let matches = containers[i3].querySelectorAll(selector);
      for (let j4 = 0; j4 < matches.length; j4 += 1) {
        allMatches.push(matches[j4]);
      }
    }
    return allMatches;
  }
  var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
  function applyStyle(el, props) {
    for (let propName in props) {
      applyStyleProp(el, propName, props[propName]);
    }
  }
  function applyStyleProp(el, name, val) {
    if (val == null) {
      el.style[name] = "";
    } else if (typeof val === "number" && PIXEL_PROP_RE.test(name)) {
      el.style[name] = `${val}px`;
    } else {
      el.style[name] = val;
    }
  }
  function getEventTargetViaRoot(ev) {
    var _a, _b;
    return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
  }
  function preventDefault(ev) {
    ev.preventDefault();
  }
  var transitionEventNames = [
    "webkitTransitionEnd",
    "otransitionend",
    "oTransitionEnd",
    "msTransitionEnd",
    "transitionend"
  ];
  function whenTransitionDone(el, callback) {
    let realCallback = (ev) => {
      callback(ev);
      transitionEventNames.forEach((eventName) => {
        el.removeEventListener(eventName, realCallback);
      });
    };
    transitionEventNames.forEach((eventName) => {
      el.addEventListener(eventName, realCallback);
    });
  }
  var guidNumber = 0;
  function guid() {
    guidNumber += 1;
    return String(guidNumber);
  }
  function disableCursor() {
    document.body.classList.add("fc-not-allowed");
  }
  function enableCursor() {
    document.body.classList.remove("fc-not-allowed");
  }
  function preventSelection(el) {
    el.style.userSelect = "none";
    el.style.webkitUserSelect = "none";
    el.addEventListener("selectstart", preventDefault);
  }
  function allowSelection(el) {
    el.style.userSelect = "";
    el.style.webkitUserSelect = "";
    el.removeEventListener("selectstart", preventDefault);
  }
  function preventContextMenu(el) {
    el.addEventListener("contextmenu", preventDefault);
  }
  function allowContextMenu(el) {
    el.removeEventListener("contextmenu", preventDefault);
  }
  function padStart(val, len) {
    let s3 = String(val);
    return "000".substr(0, len - s3.length) + s3;
  }
  function compareNumbers(a3, b3) {
    return a3 - b3;
  }
  function computeSmallestCellWidth(cellEl) {
    let allWidthEl = cellEl.querySelector(".fc-scrollgrid-shrink-frame");
    let contentWidthEl = cellEl.querySelector(".fc-scrollgrid-shrink-cushion");
    if (!allWidthEl) {
      throw new Error("needs fc-scrollgrid-shrink-frame className");
    }
    if (!contentWidthEl) {
      throw new Error("needs fc-scrollgrid-shrink-cushion className");
    }
    return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width + // the cell padding+border
    contentWidthEl.getBoundingClientRect().width;
  }
  var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
  function createDuration(input, unit) {
    if (typeof input === "string") {
      return parseString(input);
    }
    if (typeof input === "object" && input) {
      return parseObject(input);
    }
    if (typeof input === "number") {
      return parseObject({ [unit || "milliseconds"]: input });
    }
    return null;
  }
  function parseString(s3) {
    let m3 = PARSE_RE.exec(s3);
    if (m3) {
      let sign = m3[1] ? -1 : 1;
      return {
        years: 0,
        months: 0,
        days: sign * (m3[2] ? parseInt(m3[2], 10) : 0),
        milliseconds: sign * ((m3[3] ? parseInt(m3[3], 10) : 0) * 60 * 60 * 1e3 + // hours
        (m3[4] ? parseInt(m3[4], 10) : 0) * 60 * 1e3 + // minutes
        (m3[5] ? parseInt(m3[5], 10) : 0) * 1e3 + // seconds
        (m3[6] ? parseInt(m3[6], 10) : 0))
      };
    }
    return null;
  }
  function parseObject(obj) {
    let duration = {
      years: obj.years || obj.year || 0,
      months: obj.months || obj.month || 0,
      days: obj.days || obj.day || 0,
      milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1e3 + // hours
      (obj.minutes || obj.minute || 0) * 60 * 1e3 + // minutes
      (obj.seconds || obj.second || 0) * 1e3 + // seconds
      (obj.milliseconds || obj.millisecond || obj.ms || 0)
      // ms
    };
    let weeks = obj.weeks || obj.week;
    if (weeks) {
      duration.days += weeks * 7;
      duration.specifiedWeeks = true;
    }
    return duration;
  }
  function durationsEqual(d0, d1) {
    return d0.years === d1.years && d0.months === d1.months && d0.days === d1.days && d0.milliseconds === d1.milliseconds;
  }
  function subtractDurations(d1, d0) {
    return {
      years: d1.years - d0.years,
      months: d1.months - d0.months,
      days: d1.days - d0.days,
      milliseconds: d1.milliseconds - d0.milliseconds
    };
  }
  function isArraysEqual(a0, a1, equalityFunc) {
    if (a0 === a1) {
      return true;
    }
    let len = a0.length;
    let i3;
    if (len !== a1.length) {
      return false;
    }
    for (i3 = 0; i3 < len; i3 += 1) {
      if (!(equalityFunc ? equalityFunc(a0[i3], a1[i3]) : a0[i3] === a1[i3])) {
        return false;
      }
    }
    return true;
  }
  function addDays(m3, n2) {
    let a3 = dateToUtcArray(m3);
    a3[2] += n2;
    return arrayToUtcDate(a3);
  }
  function addMs(m3, n2) {
    let a3 = dateToUtcArray(m3);
    a3[6] += n2;
    return arrayToUtcDate(a3);
  }
  function diffDays(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / (1e3 * 60 * 60 * 24);
  }
  function diffDayAndTime(m0, m1) {
    let m0day = startOfDay(m0);
    let m1day = startOfDay(m1);
    return {
      years: 0,
      months: 0,
      days: Math.round(diffDays(m0day, m1day)),
      milliseconds: m1.valueOf() - m1day.valueOf() - (m0.valueOf() - m0day.valueOf())
    };
  }
  function startOfDay(m3) {
    return arrayToUtcDate([
      m3.getUTCFullYear(),
      m3.getUTCMonth(),
      m3.getUTCDate()
    ]);
  }
  function dateToUtcArray(date) {
    return [
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
      date.getUTCMilliseconds()
    ];
  }
  function arrayToUtcDate(a3) {
    if (a3.length === 1) {
      a3 = a3.concat([0]);
    }
    return new Date(Date.UTC(...a3));
  }
  function timeAsMs(m3) {
    return m3.getUTCHours() * 1e3 * 60 * 60 + m3.getUTCMinutes() * 1e3 * 60 + m3.getUTCSeconds() * 1e3 + m3.getUTCMilliseconds();
  }
  function formatTimeZoneOffset(minutes, doIso = false) {
    let sign = minutes < 0 ? "-" : "+";
    let abs = Math.abs(minutes);
    let hours = Math.floor(abs / 60);
    let mins = Math.round(abs % 60);
    if (doIso) {
      return `${sign + padStart(hours, 2)}:${padStart(mins, 2)}`;
    }
    return `GMT${sign}${hours}${mins ? `:${padStart(mins, 2)}` : ""}`;
  }
  function memoize(workerFunc, resEquality, teardownFunc) {
    let currentArgs;
    let currentRes;
    return function(...newArgs) {
      if (!currentArgs) {
        currentRes = workerFunc.apply(this, newArgs);
      } else if (!isArraysEqual(currentArgs, newArgs)) {
        if (teardownFunc) {
          teardownFunc(currentRes);
        }
        let res = workerFunc.apply(this, newArgs);
        if (!resEquality || !resEquality(res, currentRes)) {
          currentRes = res;
        }
      }
      currentArgs = newArgs;
      return currentRes;
    };
  }
  var EXTENDED_SETTINGS_AND_SEVERITIES = {
    week: 3,
    separator: 0,
    omitZeroMinute: 0,
    meridiem: 0,
    omitCommas: 0
  };
  var STANDARD_DATE_PROP_SEVERITIES = {
    timeZoneName: 7,
    era: 6,
    year: 5,
    month: 4,
    day: 2,
    weekday: 2,
    hour: 1,
    minute: 1,
    second: 1
  };
  var MERIDIEM_RE = /\s*([ap])\.?m\.?/i;
  var COMMA_RE = /,/g;
  var MULTI_SPACE_RE = /\s+/g;
  var LTR_RE = /\u200e/g;
  var UTC_RE = /UTC|GMT/;
  var NativeFormatter = class {
    constructor(formatSettings) {
      let standardDateProps = {};
      let extendedSettings = {};
      let severity = 0;
      for (let name in formatSettings) {
        if (name in EXTENDED_SETTINGS_AND_SEVERITIES) {
          extendedSettings[name] = formatSettings[name];
          severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name], severity);
        } else {
          standardDateProps[name] = formatSettings[name];
          if (name in STANDARD_DATE_PROP_SEVERITIES) {
            severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name], severity);
          }
        }
      }
      this.standardDateProps = standardDateProps;
      this.extendedSettings = extendedSettings;
      this.severity = severity;
      this.buildFormattingFunc = memoize(buildFormattingFunc);
    }
    format(date, context) {
      return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
    }
    formatRange(start, end, context, betterDefaultSeparator) {
      let { standardDateProps, extendedSettings } = this;
      let diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
      if (!diffSeverity) {
        return this.format(start, context);
      }
      let biggestUnitForPartial = diffSeverity;
      if (biggestUnitForPartial > 1 && // the two dates are different in a way that's larger scale than time
      (standardDateProps.year === "numeric" || standardDateProps.year === "2-digit") && (standardDateProps.month === "numeric" || standardDateProps.month === "2-digit") && (standardDateProps.day === "numeric" || standardDateProps.day === "2-digit")) {
        biggestUnitForPartial = 1;
      }
      let full0 = this.format(start, context);
      let full1 = this.format(end, context);
      if (full0 === full1) {
        return full0;
      }
      let partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
      let partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
      let partial0 = partialFormattingFunc(start);
      let partial1 = partialFormattingFunc(end);
      let insertion = findCommonInsertion(full0, partial0, full1, partial1);
      let separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || "";
      if (insertion) {
        return insertion.before + partial0 + separator + partial1 + insertion.after;
      }
      return full0 + separator + full1;
    }
    getLargestUnit() {
      switch (this.severity) {
        case 7:
        case 6:
        case 5:
          return "year";
        case 4:
          return "month";
        case 3:
          return "week";
        case 2:
          return "day";
        default:
          return "time";
      }
    }
  };
  function buildFormattingFunc(standardDateProps, extendedSettings, context) {
    let standardDatePropCnt = Object.keys(standardDateProps).length;
    if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === "short") {
      return (date) => formatTimeZoneOffset(date.timeZoneOffset);
    }
    if (standardDatePropCnt === 0 && extendedSettings.week) {
      return (date) => formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.weekTextLong, context.locale, extendedSettings.week);
    }
    return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
  }
  function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
    standardDateProps = Object.assign({}, standardDateProps);
    extendedSettings = Object.assign({}, extendedSettings);
    sanitizeSettings(standardDateProps, extendedSettings);
    standardDateProps.timeZone = "UTC";
    let normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
    let zeroFormat;
    if (extendedSettings.omitZeroMinute) {
      let zeroProps = Object.assign({}, standardDateProps);
      delete zeroProps.minute;
      zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
    }
    return (date) => {
      let { marker } = date;
      let format;
      if (zeroFormat && !marker.getUTCMinutes()) {
        format = zeroFormat;
      } else {
        format = normalFormat;
      }
      let s3 = format.format(marker);
      return postProcess(s3, date, standardDateProps, extendedSettings, context);
    };
  }
  function sanitizeSettings(standardDateProps, extendedSettings) {
    if (standardDateProps.timeZoneName) {
      if (!standardDateProps.hour) {
        standardDateProps.hour = "2-digit";
      }
      if (!standardDateProps.minute) {
        standardDateProps.minute = "2-digit";
      }
    }
    if (standardDateProps.timeZoneName === "long") {
      standardDateProps.timeZoneName = "short";
    }
    if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
      delete extendedSettings.omitZeroMinute;
    }
  }
  function postProcess(s3, date, standardDateProps, extendedSettings, context) {
    s3 = s3.replace(LTR_RE, "");
    if (standardDateProps.timeZoneName === "short") {
      s3 = injectTzoStr(s3, context.timeZone === "UTC" || date.timeZoneOffset == null ? "UTC" : (
        // important to normalize for IE, which does "GMT"
        formatTimeZoneOffset(date.timeZoneOffset)
      ));
    }
    if (extendedSettings.omitCommas) {
      s3 = s3.replace(COMMA_RE, "").trim();
    }
    if (extendedSettings.omitZeroMinute) {
      s3 = s3.replace(":00", "");
    }
    if (extendedSettings.meridiem === false) {
      s3 = s3.replace(MERIDIEM_RE, "").trim();
    } else if (extendedSettings.meridiem === "narrow") {
      s3 = s3.replace(MERIDIEM_RE, (m0, m1) => m1.toLocaleLowerCase());
    } else if (extendedSettings.meridiem === "short") {
      s3 = s3.replace(MERIDIEM_RE, (m0, m1) => `${m1.toLocaleLowerCase()}m`);
    } else if (extendedSettings.meridiem === "lowercase") {
      s3 = s3.replace(MERIDIEM_RE, (m0) => m0.toLocaleLowerCase());
    }
    s3 = s3.replace(MULTI_SPACE_RE, " ");
    s3 = s3.trim();
    return s3;
  }
  function injectTzoStr(s3, tzoStr) {
    let replaced = false;
    s3 = s3.replace(UTC_RE, () => {
      replaced = true;
      return tzoStr;
    });
    if (!replaced) {
      s3 += ` ${tzoStr}`;
    }
    return s3;
  }
  function formatWeekNumber(num, weekText, weekTextLong, locale, display) {
    let parts = [];
    if (display === "long") {
      parts.push(weekTextLong);
    } else if (display === "short" || display === "narrow") {
      parts.push(weekText);
    }
    if (display === "long" || display === "short") {
      parts.push(" ");
    }
    parts.push(locale.simpleNumberFormat.format(num));
    if (locale.options.direction === "rtl") {
      parts.reverse();
    }
    return parts.join("");
  }
  function computeMarkerDiffSeverity(d0, d1, ca) {
    if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
      return 5;
    }
    if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
      return 4;
    }
    if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
      return 2;
    }
    if (timeAsMs(d0) !== timeAsMs(d1)) {
      return 1;
    }
    return 0;
  }
  function computePartialFormattingOptions(options, biggestUnit) {
    let partialOptions = {};
    for (let name in options) {
      if (!(name in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
      STANDARD_DATE_PROP_SEVERITIES[name] <= biggestUnit) {
        partialOptions[name] = options[name];
      }
    }
    return partialOptions;
  }
  function findCommonInsertion(full0, partial0, full1, partial1) {
    let i0 = 0;
    while (i0 < full0.length) {
      let found0 = full0.indexOf(partial0, i0);
      if (found0 === -1) {
        break;
      }
      let before0 = full0.substr(0, found0);
      i0 = found0 + partial0.length;
      let after0 = full0.substr(i0);
      let i1 = 0;
      while (i1 < full1.length) {
        let found1 = full1.indexOf(partial1, i1);
        if (found1 === -1) {
          break;
        }
        let before1 = full1.substr(0, found1);
        i1 = found1 + partial1.length;
        let after1 = full1.substr(i1);
        if (before0 === before1 && after0 === after1) {
          return {
            before: before0,
            after: after0
          };
        }
      }
    }
    return null;
  }
  function expandZonedMarker(dateInfo, calendarSystem) {
    let a3 = calendarSystem.markerToArray(dateInfo.marker);
    return {
      marker: dateInfo.marker,
      timeZoneOffset: dateInfo.timeZoneOffset,
      array: a3,
      year: a3[0],
      month: a3[1],
      day: a3[2],
      hour: a3[3],
      minute: a3[4],
      second: a3[5],
      millisecond: a3[6]
    };
  }
  function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
    let startInfo = expandZonedMarker(start, context.calendarSystem);
    let endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
    return {
      date: startInfo,
      start: startInfo,
      end: endInfo,
      timeZone: context.timeZone,
      localeCodes: context.locale.codes,
      defaultSeparator: betterDefaultSeparator || context.defaultSeparator
    };
  }
  var CmdFormatter = class {
    constructor(cmdStr) {
      this.cmdStr = cmdStr;
    }
    format(date, context, betterDefaultSeparator) {
      return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
    }
    formatRange(start, end, context, betterDefaultSeparator) {
      return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
    }
  };
  var FuncFormatter = class {
    constructor(func) {
      this.func = func;
    }
    format(date, context, betterDefaultSeparator) {
      return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
    }
    formatRange(start, end, context, betterDefaultSeparator) {
      return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
    }
  };
  function createFormatter(input) {
    if (typeof input === "object" && input) {
      return new NativeFormatter(input);
    }
    if (typeof input === "string") {
      return new CmdFormatter(input);
    }
    if (typeof input === "function") {
      return new FuncFormatter(input);
    }
    return null;
  }
  var BASE_OPTION_DEFAULTS = {
    eventDisplay: "auto",
    defaultRangeSeparator: " - ",
    titleRangeSeparator: " \u2013 ",
    defaultTimedEventDuration: "01:00:00",
    defaultAllDayEventDuration: { day: 1 },
    forceEventDuration: false,
    nextDayThreshold: "00:00:00",
    dayHeaders: true,
    initialView: "",
    aspectRatio: 1.35,
    headerToolbar: {
      start: "title",
      center: "",
      end: "today prev,next"
    },
    weekends: true,
    weekNumbers: false,
    weekNumberCalculation: "local",
    editable: false,
    nowIndicator: false,
    scrollTime: "06:00:00",
    scrollTimeReset: true,
    slotMinTime: "00:00:00",
    slotMaxTime: "24:00:00",
    showNonCurrentDates: true,
    lazyFetching: true,
    startParam: "start",
    endParam: "end",
    timeZoneParam: "timeZone",
    timeZone: "local",
    locales: [],
    locale: "",
    themeSystem: "standard",
    dragRevertDuration: 500,
    dragScroll: true,
    allDayMaintainDuration: false,
    unselectAuto: true,
    dropAccept: "*",
    eventOrder: "start,-duration,allDay,title",
    dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
    handleWindowResize: true,
    windowResizeDelay: 100,
    longPressDelay: 1e3,
    eventDragMinDistance: 5,
    expandRows: false,
    navLinks: false,
    selectable: false,
    eventMinHeight: 15,
    eventMinWidth: 30,
    eventShortHeight: 30,
    monthStartFormat: { month: "long", day: "numeric" }
  };
  function refineProps(input, refiners) {
    let refined = {};
    let extra = {};
    for (let propName in refiners) {
      if (propName in input) {
        refined[propName] = refiners[propName](input[propName]);
      }
    }
    for (let propName in input) {
      if (!(propName in refiners)) {
        extra[propName] = input[propName];
      }
    }
    return { refined, extra };
  }
  function identity(raw) {
    return raw;
  }
  var { hasOwnProperty } = Object.prototype;
  function filterHash(hash, func) {
    let filtered = {};
    for (let key in hash) {
      if (func(hash[key], key)) {
        filtered[key] = hash[key];
      }
    }
    return filtered;
  }
  function mapHash(hash, func) {
    let newHash = {};
    for (let key in hash) {
      newHash[key] = func(hash[key], key);
    }
    return newHash;
  }
  function arrayToHash(a3) {
    let hash = {};
    for (let item of a3) {
      hash[item] = true;
    }
    return hash;
  }
  function hashValuesToArray(obj) {
    let a3 = [];
    for (let key in obj) {
      a3.push(obj[key]);
    }
    return a3;
  }
  function isPropsEqual(obj0, obj1) {
    if (obj0 === obj1) {
      return true;
    }
    for (let key in obj0) {
      if (hasOwnProperty.call(obj0, key)) {
        if (!(key in obj1)) {
          return false;
        }
      }
    }
    for (let key in obj1) {
      if (hasOwnProperty.call(obj1, key)) {
        if (obj0[key] !== obj1[key]) {
          return false;
        }
      }
    }
    return true;
  }
  var HANDLER_RE = /^on[A-Z]/;
  function isNonHandlerPropsEqual(obj0, obj1) {
    const keys = getUnequalProps(obj0, obj1);
    for (let key of keys) {
      if (!HANDLER_RE.test(key)) {
        return false;
      }
    }
    return true;
  }
  function getUnequalProps(obj0, obj1) {
    let keys = [];
    for (let key in obj0) {
      if (hasOwnProperty.call(obj0, key)) {
        if (!(key in obj1)) {
          keys.push(key);
        }
      }
    }
    for (let key in obj1) {
      if (hasOwnProperty.call(obj1, key)) {
        if (obj0[key] !== obj1[key]) {
          keys.push(key);
        }
      }
    }
    return keys;
  }
  function compareObjs(oldProps, newProps, equalityFuncs = {}) {
    if (oldProps === newProps) {
      return true;
    }
    for (let key in newProps) {
      if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key]))
        ;
      else {
        return false;
      }
    }
    for (let key in oldProps) {
      if (!(key in newProps)) {
        return false;
      }
    }
    return true;
  }
  function isObjValsEqual(val0, val1, comparator) {
    if (val0 === val1 || comparator === true) {
      return true;
    }
    if (comparator) {
      return comparator(val0, val1);
    }
    return false;
  }
  function collectFromHash(hash, startIndex = 0, endIndex, step = 1) {
    let res = [];
    if (endIndex == null) {
      endIndex = Object.keys(hash).length;
    }
    for (let i3 = startIndex; i3 < endIndex; i3 += step) {
      let val = hash[i3];
      if (val !== void 0) {
        res.push(val);
      }
    }
    return res;
  }
  var calendarSystemClassMap = {};
  function registerCalendarSystem(name, theClass) {
    calendarSystemClassMap[name] = theClass;
  }
  var GregorianCalendarSystem = class {
    getMarkerYear(d2) {
      return d2.getUTCFullYear();
    }
    getMarkerMonth(d2) {
      return d2.getUTCMonth();
    }
    getMarkerDay(d2) {
      return d2.getUTCDate();
    }
    arrayToMarker(arr) {
      return arrayToUtcDate(arr);
    }
    markerToArray(marker) {
      return dateToUtcArray(marker);
    }
  };
  registerCalendarSystem("gregory", GregorianCalendarSystem);
  var Theme = class {
    constructor(calendarOptions) {
      if (this.iconOverrideOption) {
        this.setIconOverride(calendarOptions[this.iconOverrideOption]);
      }
    }
    setIconOverride(iconOverrideHash) {
      let iconClassesCopy;
      let buttonName;
      if (typeof iconOverrideHash === "object" && iconOverrideHash) {
        iconClassesCopy = Object.assign({}, this.iconClasses);
        for (buttonName in iconOverrideHash) {
          iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
        }
        this.iconClasses = iconClassesCopy;
      } else if (iconOverrideHash === false) {
        this.iconClasses = {};
      }
    }
    applyIconOverridePrefix(className) {
      let prefix = this.iconOverridePrefix;
      if (prefix && className.indexOf(prefix) !== 0) {
        className = prefix + className;
      }
      return className;
    }
    getClass(key) {
      return this.classes[key] || "";
    }
    getIconClass(buttonName, isRtl) {
      let className;
      if (isRtl && this.rtlIconClasses) {
        className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
      } else {
        className = this.iconClasses[buttonName];
      }
      if (className) {
        return `${this.baseIconClass} ${className}`;
      }
      return "";
    }
    getCustomButtonIconClass(customButtonProps) {
      let className;
      if (this.iconOverrideCustomButtonOption) {
        className = customButtonProps[this.iconOverrideCustomButtonOption];
        if (className) {
          return `${this.baseIconClass} ${this.applyIconOverridePrefix(className)}`;
        }
      }
      return "";
    }
  };
  Theme.prototype.classes = {};
  Theme.prototype.iconClasses = {};
  Theme.prototype.baseIconClass = "";
  Theme.prototype.iconOverridePrefix = "";
  function createContext(defaultValue) {
    let ContextType = G(defaultValue);
    let origProvider = ContextType.Provider;
    ContextType.Provider = function() {
      let isNew = !this.getChildContext;
      let children = origProvider.apply(this, arguments);
      if (isNew) {
        let subs = [];
        this.shouldComponentUpdate = (_props) => {
          if (this.props.value !== _props.value) {
            subs.forEach((c3) => {
              c3.context = _props.value;
              c3.forceUpdate();
            });
          }
        };
        this.sub = (c3) => {
          subs.push(c3);
          let old = c3.componentWillUnmount;
          c3.componentWillUnmount = () => {
            subs.splice(subs.indexOf(c3), 1);
            old && old.call(c3);
          };
        };
      }
      return children;
    };
    return ContextType;
  }
  var ViewContextType = createContext({});
  var PureComponent = class extends x {
    shouldComponentUpdate(nextProps, nextState) {
      if (this.debug) {
        console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
      }
      return !compareObjs(this.props, nextProps, this.propEquality) || !compareObjs(this.state, nextState, this.stateEquality);
    }
    // HACK for freakin' React StrictMode
    safeSetState(newState) {
      if (!compareObjs(this.state, Object.assign(Object.assign({}, this.state), newState), this.stateEquality)) {
        this.setState(newState);
      }
    }
  };
  PureComponent.addPropsEquality = addPropsEquality;
  PureComponent.addStateEquality = addStateEquality;
  PureComponent.contextType = ViewContextType;
  PureComponent.prototype.propEquality = {};
  PureComponent.prototype.stateEquality = {};
  var BaseComponent = class extends PureComponent {
  };
  BaseComponent.contextType = ViewContextType;
  function addPropsEquality(propEquality) {
    let hash = Object.create(this.prototype.propEquality);
    Object.assign(hash, propEquality);
    this.prototype.propEquality = hash;
  }
  function addStateEquality(stateEquality) {
    let hash = Object.create(this.prototype.stateEquality);
    Object.assign(hash, stateEquality);
    this.prototype.stateEquality = hash;
  }
  function setRef(ref, current) {
    if (typeof ref === "function") {
      ref(current);
    } else if (ref) {
      ref.current = current;
    }
  }
  var ContentInjector = class extends BaseComponent {
    constructor() {
      super(...arguments);
      this.id = guid();
      this.queuedDomNodes = [];
      this.currentDomNodes = [];
      this.handleEl = (el) => {
        const { options } = this.context;
        const { generatorName } = this.props;
        if (!options.customRenderingReplaces || !hasCustomRenderingHandler(generatorName, options)) {
          this.updateElRef(el);
        }
      };
      this.updateElRef = (el) => {
        if (this.props.elRef) {
          setRef(this.props.elRef, el);
        }
      };
    }
    render() {
      const { props, context } = this;
      const { options } = context;
      const { customGenerator, defaultGenerator, renderProps } = props;
      const attrs = buildElAttrs(props, [], this.handleEl);
      let useDefault = false;
      let innerContent;
      let queuedDomNodes = [];
      let currentGeneratorMeta;
      if (customGenerator != null) {
        const customGeneratorRes = typeof customGenerator === "function" ? customGenerator(renderProps, y) : customGenerator;
        if (customGeneratorRes === true) {
          useDefault = true;
        } else {
          const isObject = customGeneratorRes && typeof customGeneratorRes === "object";
          if (isObject && "html" in customGeneratorRes) {
            attrs.dangerouslySetInnerHTML = { __html: customGeneratorRes.html };
          } else if (isObject && "domNodes" in customGeneratorRes) {
            queuedDomNodes = Array.prototype.slice.call(customGeneratorRes.domNodes);
          } else if (isObject ? i(customGeneratorRes) : typeof customGeneratorRes !== "function") {
            innerContent = customGeneratorRes;
          } else {
            currentGeneratorMeta = customGeneratorRes;
          }
        }
      } else {
        useDefault = !hasCustomRenderingHandler(props.generatorName, options);
      }
      if (useDefault && defaultGenerator) {
        innerContent = defaultGenerator(renderProps);
      }
      this.queuedDomNodes = queuedDomNodes;
      this.currentGeneratorMeta = currentGeneratorMeta;
      return y(props.elTag, attrs, innerContent);
    }
    componentDidMount() {
      this.applyQueueudDomNodes();
      this.triggerCustomRendering(true);
    }
    componentDidUpdate() {
      this.applyQueueudDomNodes();
      this.triggerCustomRendering(true);
    }
    componentWillUnmount() {
      this.triggerCustomRendering(false);
    }
    triggerCustomRendering(isActive) {
      var _a;
      const { props, context } = this;
      const { handleCustomRendering, customRenderingMetaMap } = context.options;
      if (handleCustomRendering) {
        const generatorMeta = (_a = this.currentGeneratorMeta) !== null && _a !== void 0 ? _a : customRenderingMetaMap === null || customRenderingMetaMap === void 0 ? void 0 : customRenderingMetaMap[props.generatorName];
        if (generatorMeta) {
          handleCustomRendering(Object.assign(Object.assign({
            id: this.id,
            isActive,
            containerEl: this.base,
            reportNewContainerEl: this.updateElRef,
            // front-end framework tells us about new container els
            generatorMeta
          }, props), { elClasses: (props.elClasses || []).filter(isTruthy) }));
        }
      }
    }
    applyQueueudDomNodes() {
      const { queuedDomNodes, currentDomNodes } = this;
      const el = this.base;
      if (!isArraysEqual(queuedDomNodes, currentDomNodes)) {
        currentDomNodes.forEach(removeElement);
        for (let newNode of queuedDomNodes) {
          el.appendChild(newNode);
        }
        this.currentDomNodes = queuedDomNodes;
      }
    }
  };
  ContentInjector.addPropsEquality({
    elClasses: isArraysEqual,
    elStyle: isPropsEqual,
    elAttrs: isNonHandlerPropsEqual,
    renderProps: isPropsEqual
  });
  function hasCustomRenderingHandler(generatorName, options) {
    var _a;
    return Boolean(options.handleCustomRendering && generatorName && ((_a = options.customRenderingMetaMap) === null || _a === void 0 ? void 0 : _a[generatorName]));
  }
  function buildElAttrs(props, extraClassNames, elRef) {
    const attrs = Object.assign(Object.assign({}, props.elAttrs), { ref: elRef });
    if (props.elClasses || extraClassNames) {
      attrs.className = (props.elClasses || []).concat(extraClassNames || []).concat(attrs.className || []).filter(Boolean).join(" ");
    }
    if (props.elStyle) {
      attrs.style = props.elStyle;
    }
    return attrs;
  }
  function isTruthy(val) {
    return Boolean(val);
  }
  var RenderId = createContext(0);
  var ContentContainer = class extends x {
    constructor() {
      super(...arguments);
      this.InnerContent = InnerContentInjector.bind(void 0, this);
      this.handleEl = (el) => {
        this.el = el;
        if (this.props.elRef) {
          setRef(this.props.elRef, el);
          if (el && this.didMountMisfire) {
            this.componentDidMount();
          }
        }
      };
    }
    render() {
      const { props } = this;
      const generatedClassNames = generateClassNames(props.classNameGenerator, props.renderProps);
      if (props.children) {
        const elAttrs = buildElAttrs(props, generatedClassNames, this.handleEl);
        const children = props.children(this.InnerContent, props.renderProps, elAttrs);
        if (props.elTag) {
          return y(props.elTag, elAttrs, children);
        } else {
          return children;
        }
      } else {
        return y(ContentInjector, Object.assign(Object.assign({}, props), { elRef: this.handleEl, elTag: props.elTag || "div", elClasses: (props.elClasses || []).concat(generatedClassNames), renderId: this.context }));
      }
    }
    componentDidMount() {
      var _a, _b;
      if (this.el) {
        (_b = (_a = this.props).didMount) === null || _b === void 0 ? void 0 : _b.call(_a, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
      } else {
        this.didMountMisfire = true;
      }
    }
    componentWillUnmount() {
      var _a, _b;
      (_b = (_a = this.props).willUnmount) === null || _b === void 0 ? void 0 : _b.call(_a, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
    }
  };
  ContentContainer.contextType = RenderId;
  function InnerContentInjector(containerComponent, props) {
    const parentProps = containerComponent.props;
    return y(ContentInjector, Object.assign({ renderProps: parentProps.renderProps, generatorName: parentProps.generatorName, customGenerator: parentProps.customGenerator, defaultGenerator: parentProps.defaultGenerator, renderId: containerComponent.context }, props));
  }
  function generateClassNames(classNameGenerator, renderProps) {
    const classNames = typeof classNameGenerator === "function" ? classNameGenerator(renderProps) : classNameGenerator || [];
    return typeof classNames === "string" ? [classNames] : classNames;
  }
  function intersectRanges(range0, range1) {
    let { start, end } = range0;
    let newRange = null;
    if (range1.start !== null) {
      if (start === null) {
        start = range1.start;
      } else {
        start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
      }
    }
    if (range1.end != null) {
      if (end === null) {
        end = range1.end;
      } else {
        end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
      }
    }
    if (start === null || end === null || start < end) {
      newRange = { start, end };
    }
    return newRange;
  }
  function rangesEqual(range0, range1) {
    return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) && (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
  }
  function rangesIntersect(range0, range1) {
    return (range0.end === null || range1.start === null || range0.end > range1.start) && (range0.start === null || range1.end === null || range0.start < range1.end);
  }
  function rangeContainsRange(outerRange, innerRange) {
    return (outerRange.start === null || innerRange.start !== null && innerRange.start >= outerRange.start) && (outerRange.end === null || innerRange.end !== null && innerRange.end <= outerRange.end);
  }
  function computeAlignedDayRange(timedRange) {
    let dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
    let start = startOfDay(timedRange.start);
    let end = addDays(start, dayCnt);
    return { start, end };
  }
  function diffDates(date0, date1, dateEnv, largeUnit) {
    if (largeUnit === "year") {
      return createDuration(dateEnv.diffWholeYears(date0, date1), "year");
    }
    if (largeUnit === "month") {
      return createDuration(dateEnv.diffWholeMonths(date0, date1), "month");
    }
    return diffDayAndTime(date0, date1);
  }
  function getNow(nowInput, dateEnv) {
    if (typeof nowInput === "function") {
      nowInput = nowInput();
    }
    if (nowInput == null) {
      return dateEnv.createNowMarker();
    }
    return dateEnv.createMarker(nowInput);
  }
  function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
    return {
      instanceId: guid(),
      defId,
      range,
      forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
      forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
    };
  }
  function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
    for (let i3 = 0; i3 < recurringTypes.length; i3 += 1) {
      let parsed = recurringTypes[i3].parse(refined, dateEnv);
      if (parsed) {
        let { allDay } = refined;
        if (allDay == null) {
          allDay = defaultAllDay;
          if (allDay == null) {
            allDay = parsed.allDayGuess;
            if (allDay == null) {
              allDay = false;
            }
          }
        }
        return {
          allDay,
          duration: parsed.duration,
          typeData: parsed.typeData,
          typeId: i3
        };
      }
    }
    return null;
  }
  function expandRecurring(eventStore, framingRange, context) {
    let { dateEnv, pluginHooks, options } = context;
    let { defs, instances } = eventStore;
    instances = filterHash(instances, (instance) => !defs[instance.defId].recurringDef);
    for (let defId in defs) {
      let def = defs[defId];
      if (def.recurringDef) {
        let { duration } = def.recurringDef;
        if (!duration) {
          duration = def.allDay ? options.defaultAllDayEventDuration : options.defaultTimedEventDuration;
        }
        let starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);
        for (let start of starts) {
          let instance = createEventInstance(defId, {
            start,
            end: dateEnv.add(start, duration)
          });
          instances[instance.instanceId] = instance;
        }
      }
    }
    return { defs, instances };
  }
  function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
    let typeDef = recurringTypes[eventDef.recurringDef.typeId];
    let markers = typeDef.expand(eventDef.recurringDef.typeData, {
      start: dateEnv.subtract(framingRange.start, duration),
      end: framingRange.end
    }, dateEnv);
    if (eventDef.allDay) {
      markers = markers.map(startOfDay);
    }
    return markers;
  }
  var EVENT_NON_DATE_REFINERS = {
    id: String,
    groupId: String,
    title: String,
    url: String,
    interactive: Boolean
  };
  var EVENT_DATE_REFINERS = {
    start: identity,
    end: identity,
    date: identity,
    allDay: Boolean
  };
  var EVENT_REFINERS = Object.assign(Object.assign(Object.assign({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), { extendedProps: identity });
  function parseEvent(raw, eventSource, context, allowOpenRange, refiners = buildEventRefiners(context), defIdMap, instanceIdMap) {
    let { refined, extra } = refineEventDef(raw, context, refiners);
    let defaultAllDay = computeIsDefaultAllDay(eventSource, context);
    let recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);
    if (recurringRes) {
      let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : "", recurringRes.allDay, Boolean(recurringRes.duration), context, defIdMap);
      def.recurringDef = {
        typeId: recurringRes.typeId,
        typeData: recurringRes.typeData,
        duration: recurringRes.duration
      };
      return { def, instance: null };
    }
    let singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);
    if (singleRes) {
      let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : "", singleRes.allDay, singleRes.hasEnd, context, defIdMap);
      let instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
      if (instanceIdMap && def.publicId && instanceIdMap[def.publicId]) {
        instance.instanceId = instanceIdMap[def.publicId];
      }
      return { def, instance };
    }
    return null;
  }
  function refineEventDef(raw, context, refiners = buildEventRefiners(context)) {
    return refineProps(raw, refiners);
  }
  function buildEventRefiners(context) {
    return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
  }
  function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context, defIdMap) {
    let def = {
      title: refined.title || "",
      groupId: refined.groupId || "",
      publicId: refined.id || "",
      url: refined.url || "",
      recurringDef: null,
      defId: (defIdMap && refined.id ? defIdMap[refined.id] : "") || guid(),
      sourceId,
      allDay,
      hasEnd,
      interactive: refined.interactive,
      ui: createEventUi(refined, context),
      extendedProps: Object.assign(Object.assign({}, refined.extendedProps || {}), extra)
    };
    for (let memberAdder of context.pluginHooks.eventDefMemberAdders) {
      Object.assign(def, memberAdder(refined));
    }
    Object.freeze(def.ui.classNames);
    Object.freeze(def.extendedProps);
    return def;
  }
  function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
    let { allDay } = refined;
    let startMeta;
    let startMarker = null;
    let hasEnd = false;
    let endMeta;
    let endMarker = null;
    let startInput = refined.start != null ? refined.start : refined.date;
    startMeta = context.dateEnv.createMarkerMeta(startInput);
    if (startMeta) {
      startMarker = startMeta.marker;
    } else if (!allowOpenRange) {
      return null;
    }
    if (refined.end != null) {
      endMeta = context.dateEnv.createMarkerMeta(refined.end);
    }
    if (allDay == null) {
      if (defaultAllDay != null) {
        allDay = defaultAllDay;
      } else {
        allDay = (!startMeta || startMeta.isTimeUnspecified) && (!endMeta || endMeta.isTimeUnspecified);
      }
    }
    if (allDay && startMarker) {
      startMarker = startOfDay(startMarker);
    }
    if (endMeta) {
      endMarker = endMeta.marker;
      if (allDay) {
        endMarker = startOfDay(endMarker);
      }
      if (startMarker && endMarker <= startMarker) {
        endMarker = null;
      }
    }
    if (endMarker) {
      hasEnd = true;
    } else if (!allowOpenRange) {
      hasEnd = context.options.forceEventDuration || false;
      endMarker = context.dateEnv.add(startMarker, allDay ? context.options.defaultAllDayEventDuration : context.options.defaultTimedEventDuration);
    }
    return {
      allDay,
      hasEnd,
      range: { start: startMarker, end: endMarker },
      forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
      forcedEndTzo: endMeta ? endMeta.forcedTzo : null
    };
  }
  function computeIsDefaultAllDay(eventSource, context) {
    let res = null;
    if (eventSource) {
      res = eventSource.defaultAllDay;
    }
    if (res == null) {
      res = context.options.defaultAllDay;
    }
    return res;
  }
  function parseEvents(rawEvents, eventSource, context, allowOpenRange, defIdMap, instanceIdMap) {
    let eventStore = createEmptyEventStore();
    let eventRefiners = buildEventRefiners(context);
    for (let rawEvent of rawEvents) {
      let tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners, defIdMap, instanceIdMap);
      if (tuple) {
        eventTupleToStore(tuple, eventStore);
      }
    }
    return eventStore;
  }
  function eventTupleToStore(tuple, eventStore = createEmptyEventStore()) {
    eventStore.defs[tuple.def.defId] = tuple.def;
    if (tuple.instance) {
      eventStore.instances[tuple.instance.instanceId] = tuple.instance;
    }
    return eventStore;
  }
  function getRelevantEvents(eventStore, instanceId) {
    let instance = eventStore.instances[instanceId];
    if (instance) {
      let def = eventStore.defs[instance.defId];
      let newStore = filterEventStoreDefs(eventStore, (lookDef) => isEventDefsGrouped(def, lookDef));
      newStore.defs[def.defId] = def;
      newStore.instances[instance.instanceId] = instance;
      return newStore;
    }
    return createEmptyEventStore();
  }
  function isEventDefsGrouped(def0, def1) {
    return Boolean(def0.groupId && def0.groupId === def1.groupId);
  }
  function createEmptyEventStore() {
    return { defs: {}, instances: {} };
  }
  function filterEventStoreDefs(eventStore, filterFunc) {
    let defs = filterHash(eventStore.defs, filterFunc);
    let instances = filterHash(eventStore.instances, (instance) => defs[instance.defId]);
    return { defs, instances };
  }
  function normalizeConstraint(input, context) {
    if (Array.isArray(input)) {
      return parseEvents(input, null, context, true);
    }
    if (typeof input === "object" && input) {
      return parseEvents([input], null, context, true);
    }
    if (input != null) {
      return String(input);
    }
    return null;
  }
  function parseClassNames(raw) {
    if (Array.isArray(raw)) {
      return raw;
    }
    if (typeof raw === "string") {
      return raw.split(/\s+/);
    }
    return [];
  }
  var EVENT_UI_REFINERS = {
    display: String,
    editable: Boolean,
    startEditable: Boolean,
    durationEditable: Boolean,
    constraint: identity,
    overlap: identity,
    allow: identity,
    className: parseClassNames,
    classNames: parseClassNames,
    color: String,
    backgroundColor: String,
    borderColor: String,
    textColor: String
  };
  var EMPTY_EVENT_UI = {
    display: null,
    startEditable: null,
    durationEditable: null,
    constraints: [],
    overlap: null,
    allows: [],
    backgroundColor: "",
    borderColor: "",
    textColor: "",
    classNames: []
  };
  function createEventUi(refined, context) {
    let constraint = normalizeConstraint(refined.constraint, context);
    return {
      display: refined.display || null,
      startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
      durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
      constraints: constraint != null ? [constraint] : [],
      overlap: refined.overlap != null ? refined.overlap : null,
      allows: refined.allow != null ? [refined.allow] : [],
      backgroundColor: refined.backgroundColor || refined.color || "",
      borderColor: refined.borderColor || refined.color || "",
      textColor: refined.textColor || "",
      classNames: (refined.className || []).concat(refined.classNames || [])
      // join singular and plural
    };
  }
  function combineEventUis(uis) {
    return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
  }
  function combineTwoEventUis(item0, item1) {
    return {
      display: item1.display != null ? item1.display : item0.display,
      startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
      durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
      constraints: item0.constraints.concat(item1.constraints),
      overlap: typeof item1.overlap === "boolean" ? item1.overlap : item0.overlap,
      allows: item0.allows.concat(item1.allows),
      backgroundColor: item1.backgroundColor || item0.backgroundColor,
      borderColor: item1.borderColor || item0.borderColor,
      textColor: item1.textColor || item0.textColor,
      classNames: item0.classNames.concat(item1.classNames)
    };
  }
  function excludeInstances(eventStore, removals) {
    return {
      defs: eventStore.defs,
      instances: filterHash(eventStore.instances, (instance) => !removals[instance.instanceId])
    };
  }
  var Emitter = class {
    constructor() {
      this.handlers = {};
      this.thisContext = null;
    }
    setThisContext(thisContext) {
      this.thisContext = thisContext;
    }
    setOptions(options) {
      this.options = options;
    }
    on(type, handler) {
      addToHash(this.handlers, type, handler);
    }
    off(type, handler) {
      removeFromHash(this.handlers, type, handler);
    }
    trigger(type, ...args) {
      let attachedHandlers = this.handlers[type] || [];
      let optionHandler = this.options && this.options[type];
      let handlers = [].concat(optionHandler || [], attachedHandlers);
      for (let handler of handlers) {
        handler.apply(this.thisContext, args);
      }
    }
    hasHandlers(type) {
      return Boolean(this.handlers[type] && this.handlers[type].length || this.options && this.options[type]);
    }
  };
  function addToHash(hash, type, handler) {
    (hash[type] || (hash[type] = [])).push(handler);
  }
  function removeFromHash(hash, type, handler) {
    if (handler) {
      if (hash[type]) {
        hash[type] = hash[type].filter((func) => func !== handler);
      }
    } else {
      delete hash[type];
    }
  }
  function triggerDateSelect(selection, pev, context) {
    context.emitter.trigger("select", Object.assign(Object.assign({}, buildDateSpanApiWithContext(selection, context)), { jsEvent: pev ? pev.origEvent : null, view: context.viewApi || context.calendarApi.view }));
  }
  function buildDateSpanApiWithContext(dateSpan, context) {
    let props = {};
    for (let transform of context.pluginHooks.dateSpanTransforms) {
      Object.assign(props, transform(dateSpan, context));
    }
    Object.assign(props, buildDateSpanApi(dateSpan, context.dateEnv));
    return props;
  }
  function getDefaultEventEnd(allDay, marker, context) {
    let { dateEnv, options } = context;
    let end = marker;
    if (allDay) {
      end = startOfDay(end);
      end = dateEnv.add(end, options.defaultAllDayEventDuration);
    } else {
      end = dateEnv.add(end, options.defaultTimedEventDuration);
    }
    return end;
  }
  function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
    let eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
    let dest = createEmptyEventStore();
    for (let defId in eventStore.defs) {
      let def = eventStore.defs[defId];
      dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
    }
    for (let instanceId in eventStore.instances) {
      let instance = eventStore.instances[instanceId];
      let def = dest.defs[instance.defId];
      dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
    }
    return dest;
  }
  function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
    let standardProps = mutation.standardProps || {};
    if (standardProps.hasEnd == null && eventConfig.durationEditable && (mutation.startDelta || mutation.endDelta)) {
      standardProps.hasEnd = true;
    }
    let copy = Object.assign(Object.assign(Object.assign({}, eventDef), standardProps), { ui: Object.assign(Object.assign({}, eventDef.ui), standardProps.ui) });
    if (mutation.extendedProps) {
      copy.extendedProps = Object.assign(Object.assign({}, copy.extendedProps), mutation.extendedProps);
    }
    for (let applier of context.pluginHooks.eventDefMutationAppliers) {
      applier(copy, mutation, context);
    }
    if (!copy.hasEnd && context.options.forceEventDuration) {
      copy.hasEnd = true;
    }
    return copy;
  }
  function applyMutationToEventInstance(eventInstance, eventDef, eventConfig, mutation, context) {
    let { dateEnv } = context;
    let forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
    let clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
    let copy = Object.assign({}, eventInstance);
    if (forceAllDay) {
      copy.range = computeAlignedDayRange(copy.range);
    }
    if (mutation.datesDelta && eventConfig.startEditable) {
      copy.range = {
        start: dateEnv.add(copy.range.start, mutation.datesDelta),
        end: dateEnv.add(copy.range.end, mutation.datesDelta)
      };
    }
    if (mutation.startDelta && eventConfig.durationEditable) {
      copy.range = {
        start: dateEnv.add(copy.range.start, mutation.startDelta),
        end: copy.range.end
      };
    }
    if (mutation.endDelta && eventConfig.durationEditable) {
      copy.range = {
        start: copy.range.start,
        end: dateEnv.add(copy.range.end, mutation.endDelta)
      };
    }
    if (clearEnd) {
      copy.range = {
        start: copy.range.start,
        end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context)
      };
    }
    if (eventDef.allDay) {
      copy.range = {
        start: startOfDay(copy.range.start),
        end: startOfDay(copy.range.end)
      };
    }
    if (copy.range.end < copy.range.start) {
      copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
    }
    return copy;
  }
  var EventSourceImpl = class {
    constructor(context, internalEventSource) {
      this.context = context;
      this.internalEventSource = internalEventSource;
    }
    remove() {
      this.context.dispatch({
        type: "REMOVE_EVENT_SOURCE",
        sourceId: this.internalEventSource.sourceId
      });
    }
    refetch() {
      this.context.dispatch({
        type: "FETCH_EVENT_SOURCES",
        sourceIds: [this.internalEventSource.sourceId],
        isRefetch: true
      });
    }
    get id() {
      return this.internalEventSource.publicId;
    }
    get url() {
      return this.internalEventSource.meta.url;
    }
    get format() {
      return this.internalEventSource.meta.format;
    }
  };
  var EventImpl = class _EventImpl {
    // instance will be null if expressing a recurring event that has no current instances,
    // OR if trying to validate an incoming external event that has no dates assigned
    constructor(context, def, instance) {
      this._context = context;
      this._def = def;
      this._instance = instance || null;
    }
    /*
    TODO: make event struct more responsible for this
    */
    setProp(name, val) {
      if (name in EVENT_DATE_REFINERS) {
        console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
      } else if (name === "id") {
        val = EVENT_NON_DATE_REFINERS[name](val);
        this.mutate({
          standardProps: { publicId: val }
          // hardcoded internal name
        });
      } else if (name in EVENT_NON_DATE_REFINERS) {
        val = EVENT_NON_DATE_REFINERS[name](val);
        this.mutate({
          standardProps: { [name]: val }
        });
      } else if (name in EVENT_UI_REFINERS) {
        let ui = EVENT_UI_REFINERS[name](val);
        if (name === "color") {
          ui = { backgroundColor: val, borderColor: val };
        } else if (name === "editable") {
          ui = { startEditable: val, durationEditable: val };
        } else {
          ui = { [name]: val };
        }
        this.mutate({
          standardProps: { ui }
        });
      } else {
        console.warn(`Could not set prop '${name}'. Use setExtendedProp instead.`);
      }
    }
    setExtendedProp(name, val) {
      this.mutate({
        extendedProps: { [name]: val }
      });
    }
    setStart(startInput, options = {}) {
      let { dateEnv } = this._context;
      let start = dateEnv.createMarker(startInput);
      if (start && this._instance) {
        let instanceRange = this._instance.range;
        let startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
        if (options.maintainDuration) {
          this.mutate({ datesDelta: startDelta });
        } else {
          this.mutate({ startDelta });
        }
      }
    }
    setEnd(endInput, options = {}) {
      let { dateEnv } = this._context;
      let end;
      if (endInput != null) {
        end = dateEnv.createMarker(endInput);
        if (!end) {
          return;
        }
      }
      if (this._instance) {
        if (end) {
          let endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
          this.mutate({ endDelta });
        } else {
          this.mutate({ standardProps: { hasEnd: false } });
        }
      }
    }
    setDates(startInput, endInput, options = {}) {
      let { dateEnv } = this._context;
      let standardProps = { allDay: options.allDay };
      let start = dateEnv.createMarker(startInput);
      let end;
      if (!start) {
        return;
      }
      if (endInput != null) {
        end = dateEnv.createMarker(endInput);
        if (!end) {
          return;
        }
      }
      if (this._instance) {
        let instanceRange = this._instance.range;
        if (options.allDay === true) {
          instanceRange = computeAlignedDayRange(instanceRange);
        }
        let startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
        if (end) {
          let endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
          if (durationsEqual(startDelta, endDelta)) {
            this.mutate({ datesDelta: startDelta, standardProps });
          } else {
            this.mutate({ startDelta, endDelta, standardProps });
          }
        } else {
          standardProps.hasEnd = false;
          this.mutate({ datesDelta: startDelta, standardProps });
        }
      }
    }
    moveStart(deltaInput) {
      let delta = createDuration(deltaInput);
      if (delta) {
        this.mutate({ startDelta: delta });
      }
    }
    moveEnd(deltaInput) {
      let delta = createDuration(deltaInput);
      if (delta) {
        this.mutate({ endDelta: delta });
      }
    }
    moveDates(deltaInput) {
      let delta = createDuration(deltaInput);
      if (delta) {
        this.mutate({ datesDelta: delta });
      }
    }
    setAllDay(allDay, options = {}) {
      let standardProps = { allDay };
      let { maintainDuration } = options;
      if (maintainDuration == null) {
        maintainDuration = this._context.options.allDayMaintainDuration;
      }
      if (this._def.allDay !== allDay) {
        standardProps.hasEnd = maintainDuration;
      }
      this.mutate({ standardProps });
    }
    formatRange(formatInput) {
      let { dateEnv } = this._context;
      let instance = this._instance;
      let formatter = createFormatter(formatInput);
      if (this._def.hasEnd) {
        return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
          forcedStartTzo: instance.forcedStartTzo,
          forcedEndTzo: instance.forcedEndTzo
        });
      }
      return dateEnv.format(instance.range.start, formatter, {
        forcedTzo: instance.forcedStartTzo
      });
    }
    mutate(mutation) {
      let instance = this._instance;
      if (instance) {
        let def = this._def;
        let context = this._context;
        let { eventStore } = context.getCurrentData();
        let relevantEvents = getRelevantEvents(eventStore, instance.instanceId);
        let eventConfigBase = {
          "": {
            display: "",
            startEditable: true,
            durationEditable: true,
            constraints: [],
            overlap: null,
            allows: [],
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            classNames: []
          }
        };
        relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context);
        let oldEvent = new _EventImpl(context, def, instance);
        this._def = relevantEvents.defs[def.defId];
        this._instance = relevantEvents.instances[instance.instanceId];
        context.dispatch({
          type: "MERGE_EVENTS",
          eventStore: relevantEvents
        });
        context.emitter.trigger("eventChange", {
          oldEvent,
          event: this,
          relatedEvents: buildEventApis(relevantEvents, context, instance),
          revert() {
            context.dispatch({
              type: "RESET_EVENTS",
              eventStore
              // the ORIGINAL store
            });
          }
        });
      }
    }
    remove() {
      let context = this._context;
      let asStore = eventApiToStore(this);
      context.dispatch({
        type: "REMOVE_EVENTS",
        eventStore: asStore
      });
      context.emitter.trigger("eventRemove", {
        event: this,
        relatedEvents: [],
        revert() {
          context.dispatch({
            type: "MERGE_EVENTS",
            eventStore: asStore
          });
        }
      });
    }
    get source() {
      let { sourceId } = this._def;
      if (sourceId) {
        return new EventSourceImpl(this._context, this._context.getCurrentData().eventSources[sourceId]);
      }
      return null;
    }
    get start() {
      return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
    }
    get end() {
      return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
    }
    get startStr() {
      let instance = this._instance;
      if (instance) {
        return this._context.dateEnv.formatIso(instance.range.start, {
          omitTime: this._def.allDay,
          forcedTzo: instance.forcedStartTzo
        });
      }
      return "";
    }
    get endStr() {
      let instance = this._instance;
      if (instance && this._def.hasEnd) {
        return this._context.dateEnv.formatIso(instance.range.end, {
          omitTime: this._def.allDay,
          forcedTzo: instance.forcedEndTzo
        });
      }
      return "";
    }
    // computable props that all access the def
    // TODO: find a TypeScript-compatible way to do this at scale
    get id() {
      return this._def.publicId;
    }
    get groupId() {
      return this._def.groupId;
    }
    get allDay() {
      return this._def.allDay;
    }
    get title() {
      return this._def.title;
    }
    get url() {
      return this._def.url;
    }
    get display() {
      return this._def.ui.display || "auto";
    }
    // bad. just normalize the type earlier
    get startEditable() {
      return this._def.ui.startEditable;
    }
    get durationEditable() {
      return this._def.ui.durationEditable;
    }
    get constraint() {
      return this._def.ui.constraints[0] || null;
    }
    get overlap() {
      return this._def.ui.overlap;
    }
    get allow() {
      return this._def.ui.allows[0] || null;
    }
    get backgroundColor() {
      return this._def.ui.backgroundColor;
    }
    get borderColor() {
      return this._def.ui.borderColor;
    }
    get textColor() {
      return this._def.ui.textColor;
    }
    // NOTE: user can't modify these because Object.freeze was called in event-def parsing
    get classNames() {
      return this._def.ui.classNames;
    }
    get extendedProps() {
      return this._def.extendedProps;
    }
    toPlainObject(settings = {}) {
      let def = this._def;
      let { ui } = def;
      let { startStr, endStr } = this;
      let res = {
        allDay: def.allDay
      };
      if (def.title) {
        res.title = def.title;
      }
      if (startStr) {
        res.start = startStr;
      }
      if (endStr) {
        res.end = endStr;
      }
      if (def.publicId) {
        res.id = def.publicId;
      }
      if (def.groupId) {
        res.groupId = def.groupId;
      }
      if (def.url) {
        res.url = def.url;
      }
      if (ui.display && ui.display !== "auto") {
        res.display = ui.display;
      }
      if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
        res.color = ui.backgroundColor;
      } else {
        if (ui.backgroundColor) {
          res.backgroundColor = ui.backgroundColor;
        }
        if (ui.borderColor) {
          res.borderColor = ui.borderColor;
        }
      }
      if (ui.textColor) {
        res.textColor = ui.textColor;
      }
      if (ui.classNames.length) {
        res.classNames = ui.classNames;
      }
      if (Object.keys(def.extendedProps).length) {
        if (settings.collapseExtendedProps) {
          Object.assign(res, def.extendedProps);
        } else {
          res.extendedProps = def.extendedProps;
        }
      }
      return res;
    }
    toJSON() {
      return this.toPlainObject();
    }
  };
  function eventApiToStore(eventApi) {
    let def = eventApi._def;
    let instance = eventApi._instance;
    return {
      defs: { [def.defId]: def },
      instances: instance ? { [instance.instanceId]: instance } : {}
    };
  }
  function buildEventApis(eventStore, context, excludeInstance) {
    let { defs, instances } = eventStore;
    let eventApis = [];
    let excludeInstanceId = excludeInstance ? excludeInstance.instanceId : "";
    for (let id in instances) {
      let instance = instances[id];
      let def = defs[instance.defId];
      if (instance.instanceId !== excludeInstanceId) {
        eventApis.push(new EventImpl(context, def, instance));
      }
    }
    return eventApis;
  }
  function getElSeg(el) {
    return el.fcSeg || el.parentNode.fcSeg || // for the harness
    null;
  }
  function compileEventUis(eventDefs, eventUiBases) {
    return mapHash(eventDefs, (eventDef) => compileEventUi(eventDef, eventUiBases));
  }
  function compileEventUi(eventDef, eventUiBases) {
    let uis = [];
    if (eventUiBases[""]) {
      uis.push(eventUiBases[""]);
    }
    if (eventUiBases[eventDef.defId]) {
      uis.push(eventUiBases[eventDef.defId]);
    }
    uis.push(eventDef.ui);
    return combineEventUis(uis);
  }
  function isDateSpansEqual(span0, span1) {
    return rangesEqual(span0.range, span1.range) && span0.allDay === span1.allDay && isSpanPropsEqual(span0, span1);
  }
  function isSpanPropsEqual(span0, span1) {
    for (let propName in span1) {
      if (propName !== "range" && propName !== "allDay") {
        if (span0[propName] !== span1[propName]) {
          return false;
        }
      }
    }
    for (let propName in span0) {
      if (!(propName in span1)) {
        return false;
      }
    }
    return true;
  }
  function buildDateSpanApi(span, dateEnv) {
    return Object.assign(Object.assign({}, buildRangeApi(span.range, dateEnv, span.allDay)), { allDay: span.allDay });
  }
  function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
    return Object.assign(Object.assign({}, buildRangeApi(range, dateEnv, omitTime)), { timeZone: dateEnv.timeZone });
  }
  function buildRangeApi(range, dateEnv, omitTime) {
    return {
      start: dateEnv.toDate(range.start),
      end: dateEnv.toDate(range.end),
      startStr: dateEnv.formatIso(range.start, { omitTime }),
      endStr: dateEnv.formatIso(range.end, { omitTime })
    };
  }
  function unpromisify(func, normalizedSuccessCallback, normalizedFailureCallback) {
    let isResolved = false;
    let wrappedSuccess = function(res2) {
      if (!isResolved) {
        isResolved = true;
        normalizedSuccessCallback(res2);
      }
    };
    let wrappedFailure = function(error) {
      if (!isResolved) {
        isResolved = true;
        normalizedFailureCallback(error);
      }
    };
    let res = func(wrappedSuccess, wrappedFailure);
    if (res && typeof res.then === "function") {
      res.then(wrappedSuccess, wrappedFailure);
    }
  }
  var JsonRequestError = class extends Error {
    constructor(message, response) {
      super(message);
      this.response = response;
    }
  };
  function requestJson(method, url, params) {
    method = method.toUpperCase();
    const fetchOptions = {
      method
    };
    if (method === "GET") {
      url += (url.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(params);
    } else {
      fetchOptions.body = new URLSearchParams(params);
      fetchOptions.headers = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
    }
    return fetch(url, fetchOptions).then((fetchRes) => {
      if (fetchRes.ok) {
        return fetchRes.json().then((parsedResponse) => {
          return [parsedResponse, fetchRes];
        }, () => {
          throw new JsonRequestError("Failure parsing JSON", fetchRes);
        });
      } else {
        throw new JsonRequestError("Request failed", fetchRes);
      }
    });
  }
  var canVGrowWithinCell;
  function getCanVGrowWithinCell() {
    if (canVGrowWithinCell == null) {
      canVGrowWithinCell = computeCanVGrowWithinCell();
    }
    return canVGrowWithinCell;
  }
  function computeCanVGrowWithinCell() {
    if (typeof document === "undefined") {
      return true;
    }
    let el = document.createElement("div");
    el.style.position = "absolute";
    el.style.top = "0px";
    el.style.left = "0px";
    el.innerHTML = "<table><tr><td><div></div></td></tr></table>";
    el.querySelector("table").style.height = "100px";
    el.querySelector("div").style.height = "100%";
    document.body.appendChild(el);
    let div = el.querySelector("div");
    let possible = div.offsetHeight > 0;
    document.body.removeChild(el);
    return possible;
  }
  var Interaction = class {
    constructor(settings) {
      this.component = settings.component;
      this.isHitComboAllowed = settings.isHitComboAllowed || null;
    }
    destroy() {
    }
  };
  function interactionSettingsToStore(settings) {
    return {
      [settings.component.uid]: settings
    };
  }
  var interactionSettingsStore = {};
  function pointInsideRect(point, rect) {
    return point.left >= rect.left && point.left < rect.right && point.top >= rect.top && point.top < rect.bottom;
  }
  function intersectRects(rect1, rect2) {
    let res = {
      left: Math.max(rect1.left, rect2.left),
      right: Math.min(rect1.right, rect2.right),
      top: Math.max(rect1.top, rect2.top),
      bottom: Math.min(rect1.bottom, rect2.bottom)
    };
    if (res.left < res.right && res.top < res.bottom) {
      return res;
    }
    return false;
  }
  function constrainPoint(point, rect) {
    return {
      left: Math.min(Math.max(point.left, rect.left), rect.right),
      top: Math.min(Math.max(point.top, rect.top), rect.bottom)
    };
  }
  function getRectCenter(rect) {
    return {
      left: (rect.left + rect.right) / 2,
      top: (rect.top + rect.bottom) / 2
    };
  }
  function diffPoints(point1, point2) {
    return {
      left: point1.left - point2.left,
      top: point1.top - point2.top
    };
  }
  var EMPTY_EVENT_STORE = createEmptyEventStore();
  var DAY_FORMAT = createFormatter({ year: "numeric", month: "long", day: "numeric" });
  var WEEK_FORMAT = createFormatter({ week: "long" });
  var _isRtlScrollbarOnLeft = null;
  function getIsRtlScrollbarOnLeft() {
    if (_isRtlScrollbarOnLeft === null) {
      _isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
    }
    return _isRtlScrollbarOnLeft;
  }
  function computeIsRtlScrollbarOnLeft() {
    let outerEl = document.createElement("div");
    applyStyle(outerEl, {
      position: "absolute",
      top: -1e3,
      left: 0,
      border: 0,
      padding: 0,
      overflow: "scroll",
      direction: "rtl"
    });
    outerEl.innerHTML = "<div></div>";
    document.body.appendChild(outerEl);
    let innerEl = outerEl.firstChild;
    let res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
    removeElement(outerEl);
    return res;
  }
  var _scrollbarWidths;
  function getScrollbarWidths() {
    if (!_scrollbarWidths) {
      _scrollbarWidths = computeScrollbarWidths();
    }
    return _scrollbarWidths;
  }
  function computeScrollbarWidths() {
    let el = document.createElement("div");
    el.style.overflow = "scroll";
    el.style.position = "absolute";
    el.style.top = "-9999px";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    let res = computeScrollbarWidthsForEl(el);
    document.body.removeChild(el);
    return res;
  }
  function computeScrollbarWidthsForEl(el) {
    return {
      x: el.offsetHeight - el.clientHeight,
      y: el.offsetWidth - el.clientWidth
    };
  }
  function computeEdges(el, getPadding = false) {
    let computedStyle = window.getComputedStyle(el);
    let borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
    let borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
    let borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
    let borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
    let badScrollbarWidths = computeScrollbarWidthsForEl(el);
    let scrollbarLeftRight = badScrollbarWidths.y - borderLeft - borderRight;
    let scrollbarBottom = badScrollbarWidths.x - borderTop - borderBottom;
    let res = {
      borderLeft,
      borderRight,
      borderTop,
      borderBottom,
      scrollbarBottom,
      scrollbarLeft: 0,
      scrollbarRight: 0
    };
    if (getIsRtlScrollbarOnLeft() && computedStyle.direction === "rtl") {
      res.scrollbarLeft = scrollbarLeftRight;
    } else {
      res.scrollbarRight = scrollbarLeftRight;
    }
    if (getPadding) {
      res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
      res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
      res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
      res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
    }
    return res;
  }
  function computeInnerRect(el, goWithinPadding = false, doFromWindowViewport) {
    let outerRect = doFromWindowViewport ? el.getBoundingClientRect() : computeRect(el);
    let edges = computeEdges(el, goWithinPadding);
    let res = {
      left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
      right: outerRect.right - edges.borderRight - edges.scrollbarRight,
      top: outerRect.top + edges.borderTop,
      bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
    };
    if (goWithinPadding) {
      res.left += edges.paddingLeft;
      res.right -= edges.paddingRight;
      res.top += edges.paddingTop;
      res.bottom -= edges.paddingBottom;
    }
    return res;
  }
  function computeRect(el) {
    let rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
      right: rect.right + window.scrollX,
      bottom: rect.bottom + window.scrollY
    };
  }
  function getClippingParents(el) {
    let parents = [];
    while (el instanceof HTMLElement) {
      let computedStyle = window.getComputedStyle(el);
      if (computedStyle.position === "fixed") {
        break;
      }
      if (/(auto|scroll)/.test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
        parents.push(el);
      }
      el = el.parentNode;
    }
    return parents;
  }
  var ScrollController = class {
    getMaxScrollTop() {
      return this.getScrollHeight() - this.getClientHeight();
    }
    getMaxScrollLeft() {
      return this.getScrollWidth() - this.getClientWidth();
    }
    canScrollVertically() {
      return this.getMaxScrollTop() > 0;
    }
    canScrollHorizontally() {
      return this.getMaxScrollLeft() > 0;
    }
    canScrollUp() {
      return this.getScrollTop() > 0;
    }
    canScrollDown() {
      return this.getScrollTop() < this.getMaxScrollTop();
    }
    canScrollLeft() {
      return this.getScrollLeft() > 0;
    }
    canScrollRight() {
      return this.getScrollLeft() < this.getMaxScrollLeft();
    }
  };
  var ElementScrollController = class extends ScrollController {
    constructor(el) {
      super();
      this.el = el;
    }
    getScrollTop() {
      return this.el.scrollTop;
    }
    getScrollLeft() {
      return this.el.scrollLeft;
    }
    setScrollTop(top) {
      this.el.scrollTop = top;
    }
    setScrollLeft(left) {
      this.el.scrollLeft = left;
    }
    getScrollWidth() {
      return this.el.scrollWidth;
    }
    getScrollHeight() {
      return this.el.scrollHeight;
    }
    getClientHeight() {
      return this.el.clientHeight;
    }
    getClientWidth() {
      return this.el.clientWidth;
    }
  };
  var WindowScrollController = class extends ScrollController {
    getScrollTop() {
      return window.scrollY;
    }
    getScrollLeft() {
      return window.scrollX;
    }
    setScrollTop(n2) {
      window.scroll(window.scrollX, n2);
    }
    setScrollLeft(n2) {
      window.scroll(n2, window.scrollY);
    }
    getScrollWidth() {
      return document.documentElement.scrollWidth;
    }
    getScrollHeight() {
      return document.documentElement.scrollHeight;
    }
    getClientHeight() {
      return document.documentElement.clientHeight;
    }
    getClientWidth() {
      return document.documentElement.clientWidth;
    }
  };
  var ElementDragging = class {
    constructor(el, selector) {
      this.emitter = new Emitter();
    }
    destroy() {
    }
    setMirrorIsVisible(bool) {
    }
    setMirrorNeedsRevert(bool) {
    }
    setAutoScrollEnabled(bool) {
    }
  };
  var config = {};
  var DRAG_META_REFINERS = {
    startTime: createDuration,
    duration: createDuration,
    create: Boolean,
    sourceId: String
  };
  function parseDragMeta(raw) {
    let { refined, extra } = refineProps(raw, DRAG_META_REFINERS);
    return {
      startTime: refined.startTime || null,
      duration: refined.duration || null,
      create: refined.create != null ? refined.create : true,
      sourceId: refined.sourceId,
      leftoverProps: extra
    };
  }
  var WEEKDAY_FORMAT = createFormatter({ weekday: "long" });
  var NowTimer = class extends x {
    constructor(props, context) {
      super(props, context);
      this.initialNowDate = getNow(context.options.now, context.dateEnv);
      this.initialNowQueriedMs = (/* @__PURE__ */ new Date()).valueOf();
      this.state = this.computeTiming().currentState;
    }
    render() {
      let { props, state } = this;
      return props.children(state.nowDate, state.todayRange);
    }
    componentDidMount() {
      this.setTimeout();
    }
    componentDidUpdate(prevProps) {
      if (prevProps.unit !== this.props.unit) {
        this.clearTimeout();
        this.setTimeout();
      }
    }
    componentWillUnmount() {
      this.clearTimeout();
    }
    computeTiming() {
      let { props, context } = this;
      let unroundedNow = addMs(this.initialNowDate, (/* @__PURE__ */ new Date()).valueOf() - this.initialNowQueriedMs);
      let currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
      let nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
      let waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf();
      waitMs = Math.min(1e3 * 60 * 60 * 24, waitMs);
      return {
        currentState: { nowDate: currentUnitStart, todayRange: buildDayRange(currentUnitStart) },
        nextState: { nowDate: nextUnitStart, todayRange: buildDayRange(nextUnitStart) },
        waitMs
      };
    }
    setTimeout() {
      let { nextState, waitMs } = this.computeTiming();
      this.timeoutId = setTimeout(() => {
        this.setState(nextState, () => {
          this.setTimeout();
        });
      }, waitMs);
    }
    clearTimeout() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    }
  };
  NowTimer.contextType = ViewContextType;
  function buildDayRange(date) {
    let start = startOfDay(date);
    let end = addDays(start, 1);
    return { start, end };
  }
  function isInteractionValid(interaction, dateProfile, context) {
    let { instances } = interaction.mutatedEvents;
    for (let instanceId in instances) {
      if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
        return false;
      }
    }
    return isNewPropsValid({ eventDrag: interaction }, context);
  }
  function isDateSelectionValid(dateSelection, dateProfile, context) {
    if (!rangeContainsRange(dateProfile.validRange, dateSelection.range)) {
      return false;
    }
    return isNewPropsValid({ dateSelection }, context);
  }
  function isNewPropsValid(newProps, context) {
    let calendarState = context.getCurrentData();
    let props = Object.assign({ businessHours: calendarState.businessHours, dateSelection: "", eventStore: calendarState.eventStore, eventUiBases: calendarState.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, newProps);
    return (context.pluginHooks.isPropsValid || isPropsValid)(props, context);
  }
  function isPropsValid(state, context, dateSpanMeta = {}, filterConfig) {
    if (state.eventDrag && !isInteractionPropsValid(state, context, dateSpanMeta, filterConfig)) {
      return false;
    }
    if (state.dateSelection && !isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig)) {
      return false;
    }
    return true;
  }
  function isInteractionPropsValid(state, context, dateSpanMeta, filterConfig) {
    let currentState = context.getCurrentData();
    let interaction = state.eventDrag;
    let subjectEventStore = interaction.mutatedEvents;
    let subjectDefs = subjectEventStore.defs;
    let subjectInstances = subjectEventStore.instances;
    let subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ? state.eventUiBases : { "": currentState.selectionConfig });
    if (filterConfig) {
      subjectConfigs = mapHash(subjectConfigs, filterConfig);
    }
    let otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances);
    let otherDefs = otherEventStore.defs;
    let otherInstances = otherEventStore.instances;
    let otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
    for (let subjectInstanceId in subjectInstances) {
      let subjectInstance = subjectInstances[subjectInstanceId];
      let subjectRange = subjectInstance.range;
      let subjectConfig = subjectConfigs[subjectInstance.defId];
      let subjectDef = subjectDefs[subjectInstance.defId];
      if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, context)) {
        return false;
      }
      let { eventOverlap } = context.options;
      let eventOverlapFunc = typeof eventOverlap === "function" ? eventOverlap : null;
      for (let otherInstanceId in otherInstances) {
        let otherInstance = otherInstances[otherInstanceId];
        if (rangesIntersect(subjectRange, otherInstance.range)) {
          let otherOverlap = otherConfigs[otherInstance.defId].overlap;
          if (otherOverlap === false && interaction.isEvent) {
            return false;
          }
          if (subjectConfig.overlap === false) {
            return false;
          }
          if (eventOverlapFunc && !eventOverlapFunc(
            new EventImpl(context, otherDefs[otherInstance.defId], otherInstance),
            // still event
            new EventImpl(context, subjectDef, subjectInstance)
          )) {
            return false;
          }
        }
      }
      let calendarEventStore = currentState.eventStore;
      for (let subjectAllow of subjectConfig.allows) {
        let subjectDateSpan = Object.assign(Object.assign({}, dateSpanMeta), { range: subjectInstance.range, allDay: subjectDef.allDay });
        let origDef = calendarEventStore.defs[subjectDef.defId];
        let origInstance = calendarEventStore.instances[subjectInstanceId];
        let eventApi;
        if (origDef) {
          eventApi = new EventImpl(context, origDef, origInstance);
        } else {
          eventApi = new EventImpl(context, subjectDef);
        }
        if (!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan, context), eventApi)) {
          return false;
        }
      }
    }
    return true;
  }
  function isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig) {
    let relevantEventStore = state.eventStore;
    let relevantDefs = relevantEventStore.defs;
    let relevantInstances = relevantEventStore.instances;
    let selection = state.dateSelection;
    let selectionRange = selection.range;
    let { selectionConfig } = context.getCurrentData();
    if (filterConfig) {
      selectionConfig = filterConfig(selectionConfig);
    }
    if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, context)) {
      return false;
    }
    let { selectOverlap } = context.options;
    let selectOverlapFunc = typeof selectOverlap === "function" ? selectOverlap : null;
    for (let relevantInstanceId in relevantInstances) {
      let relevantInstance = relevantInstances[relevantInstanceId];
      if (rangesIntersect(selectionRange, relevantInstance.range)) {
        if (selectionConfig.overlap === false) {
          return false;
        }
        if (selectOverlapFunc && !selectOverlapFunc(new EventImpl(context, relevantDefs[relevantInstance.defId], relevantInstance), null)) {
          return false;
        }
      }
    }
    for (let selectionAllow of selectionConfig.allows) {
      let fullDateSpan = Object.assign(Object.assign({}, dateSpanMeta), selection);
      if (!selectionAllow(buildDateSpanApiWithContext(fullDateSpan, context), null)) {
        return false;
      }
    }
    return true;
  }
  function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
    for (let constraint of constraints) {
      if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context), subjectRange)) {
        return false;
      }
    }
    return true;
  }
  function constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
    if (constraint === "businessHours") {
      return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, context));
    }
    if (typeof constraint === "string") {
      return eventStoreToRanges(filterEventStoreDefs(otherEventStore, (eventDef) => eventDef.groupId === constraint));
    }
    if (typeof constraint === "object" && constraint) {
      return eventStoreToRanges(expandRecurring(constraint, subjectRange, context));
    }
    return [];
  }
  function eventStoreToRanges(eventStore) {
    let { instances } = eventStore;
    let ranges = [];
    for (let instanceId in instances) {
      ranges.push(instances[instanceId].range);
    }
    return ranges;
  }
  function anyRangesContainRange(outerRanges, innerRange) {
    for (let outerRange of outerRanges) {
      if (rangeContainsRange(outerRange, innerRange)) {
        return true;
      }
    }
    return false;
  }
  var VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;
  var Scroller = class extends BaseComponent {
    constructor() {
      super(...arguments);
      this.handleEl = (el) => {
        this.el = el;
        setRef(this.props.elRef, el);
      };
    }
    render() {
      let { props } = this;
      let { liquid, liquidIsAbsolute } = props;
      let isAbsolute = liquid && liquidIsAbsolute;
      let className = ["fc-scroller"];
      if (liquid) {
        if (liquidIsAbsolute) {
          className.push("fc-scroller-liquid-absolute");
        } else {
          className.push("fc-scroller-liquid");
        }
      }
      return y("div", { ref: this.handleEl, className: className.join(" "), style: {
        overflowX: props.overflowX,
        overflowY: props.overflowY,
        left: isAbsolute && -(props.overcomeLeft || 0) || "",
        right: isAbsolute && -(props.overcomeRight || 0) || "",
        bottom: isAbsolute && -(props.overcomeBottom || 0) || "",
        marginLeft: !isAbsolute && -(props.overcomeLeft || 0) || "",
        marginRight: !isAbsolute && -(props.overcomeRight || 0) || "",
        marginBottom: !isAbsolute && -(props.overcomeBottom || 0) || "",
        maxHeight: props.maxHeight || ""
      } }, props.children);
    }
    needsXScrolling() {
      if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
        return false;
      }
      let { el } = this;
      let realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
      let { children } = el;
      for (let i3 = 0; i3 < children.length; i3 += 1) {
        let childEl = children[i3];
        if (childEl.getBoundingClientRect().width > realClientWidth) {
          return true;
        }
      }
      return false;
    }
    needsYScrolling() {
      if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
        return false;
      }
      let { el } = this;
      let realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
      let { children } = el;
      for (let i3 = 0; i3 < children.length; i3 += 1) {
        let childEl = children[i3];
        if (childEl.getBoundingClientRect().height > realClientHeight) {
          return true;
        }
      }
      return false;
    }
    getXScrollbarWidth() {
      if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
        return 0;
      }
      return this.el.offsetHeight - this.el.clientHeight;
    }
    getYScrollbarWidth() {
      if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
        return 0;
      }
      return this.el.offsetWidth - this.el.clientWidth;
    }
  };
  var RefMap = class {
    constructor(masterCallback) {
      this.masterCallback = masterCallback;
      this.currentMap = {};
      this.depths = {};
      this.callbackMap = {};
      this.handleValue = (val, key) => {
        let { depths, currentMap } = this;
        let removed = false;
        let added = false;
        if (val !== null) {
          removed = key in currentMap;
          currentMap[key] = val;
          depths[key] = (depths[key] || 0) + 1;
          added = true;
        } else {
          depths[key] -= 1;
          if (!depths[key]) {
            delete currentMap[key];
            delete this.callbackMap[key];
            removed = true;
          }
        }
        if (this.masterCallback) {
          if (removed) {
            this.masterCallback(null, String(key));
          }
          if (added) {
            this.masterCallback(val, String(key));
          }
        }
      };
    }
    createRef(key) {
      let refCallback = this.callbackMap[key];
      if (!refCallback) {
        refCallback = this.callbackMap[key] = (val) => {
          this.handleValue(val, String(key));
        };
      }
      return refCallback;
    }
    // TODO: check callers that don't care about order. should use getAll instead
    // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
    // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
    collect(startIndex, endIndex, step) {
      return collectFromHash(this.currentMap, startIndex, endIndex, step);
    }
    getAll() {
      return hashValuesToArray(this.currentMap);
    }
  };
  function computeShrinkWidth(chunkEls) {
    let shrinkCells = findElements(chunkEls, ".fc-scrollgrid-shrink");
    let largestWidth = 0;
    for (let shrinkCell of shrinkCells) {
      largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
    }
    return Math.ceil(largestWidth);
  }
  function getSectionHasLiquidHeight(props, sectionConfig) {
    return props.liquid && sectionConfig.liquid;
  }
  function getAllowYScrolling(props, sectionConfig) {
    return sectionConfig.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
    getSectionHasLiquidHeight(props, sectionConfig);
  }
  function renderChunkContent(sectionConfig, chunkConfig, arg, isHeader) {
    let { expandRows } = arg;
    let content = typeof chunkConfig.content === "function" ? chunkConfig.content(arg) : y("table", {
      role: "presentation",
      className: [
        chunkConfig.tableClassName,
        sectionConfig.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
      ].join(" "),
      style: {
        minWidth: arg.tableMinWidth,
        width: arg.clientWidth,
        height: expandRows ? arg.clientHeight : ""
        // css `height` on a <table> serves as a min-height
      }
    }, arg.tableColGroupNode, y(isHeader ? "thead" : "tbody", {
      role: "presentation"
    }, typeof chunkConfig.rowContent === "function" ? chunkConfig.rowContent(arg) : chunkConfig.rowContent));
    return content;
  }
  function isColPropsEqual(cols0, cols1) {
    return isArraysEqual(cols0, cols1, isPropsEqual);
  }
  function renderMicroColGroup(cols, shrinkWidth) {
    let colNodes = [];
    for (let colProps of cols) {
      let span = colProps.span || 1;
      for (let i3 = 0; i3 < span; i3 += 1) {
        colNodes.push(y("col", { style: {
          width: colProps.width === "shrink" ? sanitizeShrinkWidth(shrinkWidth) : colProps.width || "",
          minWidth: colProps.minWidth || ""
        } }));
      }
    }
    return y("colgroup", {}, ...colNodes);
  }
  function sanitizeShrinkWidth(shrinkWidth) {
    return shrinkWidth == null ? 4 : shrinkWidth;
  }
  function hasShrinkWidth(cols) {
    for (let col of cols) {
      if (col.width === "shrink") {
        return true;
      }
    }
    return false;
  }
  function getScrollGridClassNames(liquid, context) {
    let classNames = [
      "fc-scrollgrid",
      context.theme.getClass("table")
    ];
    if (liquid) {
      classNames.push("fc-scrollgrid-liquid");
    }
    return classNames;
  }
  function getSectionClassNames(sectionConfig, wholeTableVGrow) {
    let classNames = [
      "fc-scrollgrid-section",
      `fc-scrollgrid-section-${sectionConfig.type}`,
      sectionConfig.className
      // used?
    ];
    if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) {
      classNames.push("fc-scrollgrid-section-liquid");
    }
    if (sectionConfig.isSticky) {
      classNames.push("fc-scrollgrid-section-sticky");
    }
    return classNames;
  }
  var SimpleScrollGrid = class extends BaseComponent {
    constructor() {
      super(...arguments);
      this.processCols = memoize((a3) => a3, isColPropsEqual);
      this.renderMicroColGroup = memoize(renderMicroColGroup);
      this.scrollerRefs = new RefMap();
      this.scrollerElRefs = new RefMap(this._handleScrollerEl.bind(this));
      this.state = {
        shrinkWidth: null,
        forceYScrollbars: false,
        scrollerClientWidths: {},
        scrollerClientHeights: {}
      };
      this.handleSizing = () => {
        this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
      };
    }
    render() {
      let { props, state, context } = this;
      let sectionConfigs = props.sections || [];
      let cols = this.processCols(props.cols);
      let microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
      let classNames = getScrollGridClassNames(props.liquid, context);
      if (props.collapsibleWidth) {
        classNames.push("fc-scrollgrid-collapsible");
      }
      let configCnt = sectionConfigs.length;
      let configI = 0;
      let currentConfig;
      let headSectionNodes = [];
      let bodySectionNodes = [];
      let footSectionNodes = [];
      while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === "header") {
        headSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
        configI += 1;
      }
      while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === "body") {
        bodySectionNodes.push(this.renderSection(currentConfig, microColGroupNode, false));
        configI += 1;
      }
      while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === "footer") {
        footSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
        configI += 1;
      }
      let isBuggy = !getCanVGrowWithinCell();
      const roleAttrs = { role: "rowgroup" };
      return y("table", {
        role: "grid",
        className: classNames.join(" "),
        style: { height: props.height }
      }, Boolean(!isBuggy && headSectionNodes.length) && y("thead", roleAttrs, ...headSectionNodes), Boolean(!isBuggy && bodySectionNodes.length) && y("tbody", roleAttrs, ...bodySectionNodes), Boolean(!isBuggy && footSectionNodes.length) && y("tfoot", roleAttrs, ...footSectionNodes), isBuggy && y("tbody", roleAttrs, ...headSectionNodes, ...bodySectionNodes, ...footSectionNodes));
    }
    renderSection(sectionConfig, microColGroupNode, isHeader) {
      if ("outerContent" in sectionConfig) {
        return y(_, { key: sectionConfig.key }, sectionConfig.outerContent);
      }
      return y("tr", { key: sectionConfig.key, role: "presentation", className: getSectionClassNames(sectionConfig, this.props.liquid).join(" ") }, this.renderChunkTd(sectionConfig, microColGroupNode, sectionConfig.chunk, isHeader));
    }
    renderChunkTd(sectionConfig, microColGroupNode, chunkConfig, isHeader) {
      if ("outerContent" in chunkConfig) {
        return chunkConfig.outerContent;
      }
      let { props } = this;
      let { forceYScrollbars, scrollerClientWidths, scrollerClientHeights } = this.state;
      let needsYScrolling = getAllowYScrolling(props, sectionConfig);
      let isLiquid = getSectionHasLiquidHeight(props, sectionConfig);
      let overflowY = !props.liquid ? "visible" : forceYScrollbars ? "scroll" : !needsYScrolling ? "hidden" : "auto";
      let sectionKey = sectionConfig.key;
      let content = renderChunkContent(sectionConfig, chunkConfig, {
        tableColGroupNode: microColGroupNode,
        tableMinWidth: "",
        clientWidth: !props.collapsibleWidth && scrollerClientWidths[sectionKey] !== void 0 ? scrollerClientWidths[sectionKey] : null,
        clientHeight: scrollerClientHeights[sectionKey] !== void 0 ? scrollerClientHeights[sectionKey] : null,
        expandRows: sectionConfig.expandRows,
        syncRowHeights: false,
        rowSyncHeights: [],
        reportRowHeightChange: () => {
        }
      }, isHeader);
      return y(isHeader ? "th" : "td", {
        ref: chunkConfig.elRef,
        role: "presentation"
      }, y(
        "div",
        { className: `fc-scroller-harness${isLiquid ? " fc-scroller-harness-liquid" : ""}` },
        y(Scroller, { ref: this.scrollerRefs.createRef(sectionKey), elRef: this.scrollerElRefs.createRef(sectionKey), overflowY, overflowX: !props.liquid ? "visible" : "hidden", maxHeight: sectionConfig.maxHeight, liquid: isLiquid, liquidIsAbsolute: true }, content)
      ));
    }
    _handleScrollerEl(scrollerEl, key) {
      let section = getSectionByKey(this.props.sections, key);
      if (section) {
        setRef(section.chunk.scrollerElRef, scrollerEl);
      }
    }
    componentDidMount() {
      this.handleSizing();
      this.context.addResizeHandler(this.handleSizing);
    }
    componentDidUpdate() {
      this.handleSizing();
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleSizing);
    }
    computeShrinkWidth() {
      return hasShrinkWidth(this.props.cols) ? computeShrinkWidth(this.scrollerElRefs.getAll()) : 0;
    }
    computeScrollerDims() {
      let scrollbarWidth = getScrollbarWidths();
      let { scrollerRefs, scrollerElRefs } = this;
      let forceYScrollbars = false;
      let scrollerClientWidths = {};
      let scrollerClientHeights = {};
      for (let sectionKey in scrollerRefs.currentMap) {
        let scroller = scrollerRefs.currentMap[sectionKey];
        if (scroller && scroller.needsYScrolling()) {
          forceYScrollbars = true;
          break;
        }
      }
      for (let section of this.props.sections) {
        let sectionKey = section.key;
        let scrollerEl = scrollerElRefs.currentMap[sectionKey];
        if (scrollerEl) {
          let harnessEl = scrollerEl.parentNode;
          scrollerClientWidths[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars ? scrollbarWidth.y : 0));
          scrollerClientHeights[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().height);
        }
      }
      return { forceYScrollbars, scrollerClientWidths, scrollerClientHeights };
    }
  };
  SimpleScrollGrid.addStateEquality({
    scrollerClientWidths: isPropsEqual,
    scrollerClientHeights: isPropsEqual
  });
  function getSectionByKey(sections, key) {
    for (let section of sections) {
      if (section.key === key) {
        return section;
      }
    }
    return null;
  }
  var DAY_NUM_FORMAT = createFormatter({ day: "numeric" });

  // node_modules/@fullcalendar/core/index.js
  var MINIMAL_RAW_EN_LOCALE = {
    code: "en",
    week: {
      dow: 0,
      doy: 4
      // 4 days need to be within the year to be considered the first week
    },
    direction: "ltr",
    buttonText: {
      prev: "prev",
      next: "next",
      prevYear: "prev year",
      nextYear: "next year",
      year: "year",
      today: "today",
      month: "month",
      week: "week",
      day: "day",
      list: "list"
    },
    weekText: "W",
    weekTextLong: "Week",
    closeHint: "Close",
    timeHint: "Time",
    eventHint: "Event",
    allDayText: "all-day",
    moreLinkText: "more",
    noEventsText: "No events to display"
  };
  var RAW_EN_LOCALE = Object.assign(Object.assign({}, MINIMAL_RAW_EN_LOCALE), {
    // Includes things we don't want other locales to inherit,
    // things that derive from other translatable strings.
    buttonHints: {
      prev: "Previous $0",
      next: "Next $0",
      today(buttonText, unit) {
        return unit === "day" ? "Today" : `This ${buttonText}`;
      }
    },
    viewHint: "$0 view",
    navLinkHint: "Go to $0",
    moreLinkHint(eventCnt) {
      return `Show ${eventCnt} more event${eventCnt === 1 ? "" : "s"}`;
    }
  });
  function createPlugin(input) {
    return {
      id: guid(),
      name: input.name,
      premiumReleaseDate: input.premiumReleaseDate ? new Date(input.premiumReleaseDate) : void 0,
      deps: input.deps || [],
      reducers: input.reducers || [],
      isLoadingFuncs: input.isLoadingFuncs || [],
      contextInit: [].concat(input.contextInit || []),
      eventRefiners: input.eventRefiners || {},
      eventDefMemberAdders: input.eventDefMemberAdders || [],
      eventSourceRefiners: input.eventSourceRefiners || {},
      isDraggableTransformers: input.isDraggableTransformers || [],
      eventDragMutationMassagers: input.eventDragMutationMassagers || [],
      eventDefMutationAppliers: input.eventDefMutationAppliers || [],
      dateSelectionTransformers: input.dateSelectionTransformers || [],
      datePointTransforms: input.datePointTransforms || [],
      dateSpanTransforms: input.dateSpanTransforms || [],
      views: input.views || {},
      viewPropsTransformers: input.viewPropsTransformers || [],
      isPropsValid: input.isPropsValid || null,
      externalDefTransforms: input.externalDefTransforms || [],
      viewContainerAppends: input.viewContainerAppends || [],
      eventDropTransformers: input.eventDropTransformers || [],
      componentInteractions: input.componentInteractions || [],
      calendarInteractions: input.calendarInteractions || [],
      themeClasses: input.themeClasses || {},
      eventSourceDefs: input.eventSourceDefs || [],
      cmdFormatter: input.cmdFormatter,
      recurringTypes: input.recurringTypes || [],
      namedTimeZonedImpl: input.namedTimeZonedImpl,
      initialView: input.initialView || "",
      elementDraggingImpl: input.elementDraggingImpl,
      optionChangeHandlers: input.optionChangeHandlers || {},
      scrollGridImpl: input.scrollGridImpl || null,
      listenerRefiners: input.listenerRefiners || {},
      optionRefiners: input.optionRefiners || {},
      propSetHandlers: input.propSetHandlers || {}
    };
  }
  var StandardTheme = class extends Theme {
  };
  StandardTheme.prototype.classes = {
    root: "fc-theme-standard",
    tableCellShaded: "fc-cell-shaded",
    buttonGroup: "fc-button-group",
    button: "fc-button fc-button-primary",
    buttonActive: "fc-button-active"
  };
  StandardTheme.prototype.baseIconClass = "fc-icon";
  StandardTheme.prototype.iconClasses = {
    close: "fc-icon-x",
    prev: "fc-icon-chevron-left",
    next: "fc-icon-chevron-right",
    prevYear: "fc-icon-chevrons-left",
    nextYear: "fc-icon-chevrons-right"
  };
  StandardTheme.prototype.rtlIconClasses = {
    prev: "fc-icon-chevron-right",
    next: "fc-icon-chevron-left",
    prevYear: "fc-icon-chevrons-right",
    nextYear: "fc-icon-chevrons-left"
  };
  StandardTheme.prototype.iconOverrideOption = "buttonIcons";
  StandardTheme.prototype.iconOverrideCustomButtonOption = "icon";
  StandardTheme.prototype.iconOverridePrefix = "fc-icon-";
  function computeEventSourcesLoading(eventSources) {
    for (let sourceId in eventSources) {
      if (eventSources[sourceId].isFetching) {
        return true;
      }
    }
    return false;
  }
  var eventSourceDef$2 = {
    ignoreRange: true,
    parseMeta(refined) {
      if (Array.isArray(refined.events)) {
        return refined.events;
      }
      return null;
    },
    fetch(arg, successCallback) {
      successCallback({
        rawEvents: arg.eventSource.meta
      });
    }
  };
  var arrayEventSourcePlugin = createPlugin({
    name: "array-event-source",
    eventSourceDefs: [eventSourceDef$2]
  });
  var eventSourceDef$1 = {
    parseMeta(refined) {
      if (typeof refined.events === "function") {
        return refined.events;
      }
      return null;
    },
    fetch(arg, successCallback, errorCallback) {
      const { dateEnv } = arg.context;
      const func = arg.eventSource.meta;
      unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), (rawEvents) => successCallback({ rawEvents }), errorCallback);
    }
  };
  var funcEventSourcePlugin = createPlugin({
    name: "func-event-source",
    eventSourceDefs: [eventSourceDef$1]
  });
  var JSON_FEED_EVENT_SOURCE_REFINERS = {
    method: String,
    extraParams: identity,
    startParam: String,
    endParam: String,
    timeZoneParam: String
  };
  var eventSourceDef = {
    parseMeta(refined) {
      if (refined.url && (refined.format === "json" || !refined.format)) {
        return {
          url: refined.url,
          format: "json",
          method: (refined.method || "GET").toUpperCase(),
          extraParams: refined.extraParams,
          startParam: refined.startParam,
          endParam: refined.endParam,
          timeZoneParam: refined.timeZoneParam
        };
      }
      return null;
    },
    fetch(arg, successCallback, errorCallback) {
      const { meta } = arg.eventSource;
      const requestParams = buildRequestParams(meta, arg.range, arg.context);
      requestJson(meta.method, meta.url, requestParams).then(([rawEvents, response]) => {
        successCallback({ rawEvents, response });
      }, errorCallback);
    }
  };
  var jsonFeedEventSourcePlugin = createPlugin({
    name: "json-event-source",
    eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
    eventSourceDefs: [eventSourceDef]
  });
  function buildRequestParams(meta, range, context) {
    let { dateEnv, options } = context;
    let startParam;
    let endParam;
    let timeZoneParam;
    let customRequestParams;
    let params = {};
    startParam = meta.startParam;
    if (startParam == null) {
      startParam = options.startParam;
    }
    endParam = meta.endParam;
    if (endParam == null) {
      endParam = options.endParam;
    }
    timeZoneParam = meta.timeZoneParam;
    if (timeZoneParam == null) {
      timeZoneParam = options.timeZoneParam;
    }
    if (typeof meta.extraParams === "function") {
      customRequestParams = meta.extraParams();
    } else {
      customRequestParams = meta.extraParams || {};
    }
    Object.assign(params, customRequestParams);
    params[startParam] = dateEnv.formatIso(range.start);
    params[endParam] = dateEnv.formatIso(range.end);
    if (dateEnv.timeZone !== "local") {
      params[timeZoneParam] = dateEnv.timeZone;
    }
    return params;
  }
  var SIMPLE_RECURRING_REFINERS = {
    daysOfWeek: identity,
    startTime: createDuration,
    endTime: createDuration,
    duration: createDuration,
    startRecur: identity,
    endRecur: identity
  };
  var recurring = {
    parse(refined, dateEnv) {
      if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
        let recurringData = {
          daysOfWeek: refined.daysOfWeek || null,
          startTime: refined.startTime || null,
          endTime: refined.endTime || null,
          startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
          endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null
        };
        let duration;
        if (refined.duration) {
          duration = refined.duration;
        }
        if (!duration && refined.startTime && refined.endTime) {
          duration = subtractDurations(refined.endTime, refined.startTime);
        }
        return {
          allDayGuess: Boolean(!refined.startTime && !refined.endTime),
          duration,
          typeData: recurringData
          // doesn't need endTime anymore but oh well
        };
      }
      return null;
    },
    expand(typeData, framingRange, dateEnv) {
      let clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
      if (clippedFramingRange) {
        return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
      }
      return [];
    }
  };
  var simpleRecurringEventsPlugin = createPlugin({
    name: "simple-recurring-event",
    recurringTypes: [recurring],
    eventRefiners: SIMPLE_RECURRING_REFINERS
  });
  function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
    let dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
    let dayMarker = startOfDay(framingRange.start);
    let endMarker = framingRange.end;
    let instanceStarts = [];
    while (dayMarker < endMarker) {
      let instanceStart;
      if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
        if (startTime) {
          instanceStart = dateEnv.add(dayMarker, startTime);
        } else {
          instanceStart = dayMarker;
        }
        instanceStarts.push(instanceStart);
      }
      dayMarker = addDays(dayMarker, 1);
    }
    return instanceStarts;
  }
  var changeHandlerPlugin = createPlugin({
    name: "change-handler",
    optionChangeHandlers: {
      events(events, context) {
        handleEventSources([events], context);
      },
      eventSources: handleEventSources
    }
  });
  function handleEventSources(inputs, context) {
    let unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
    if (unfoundSources.length === 1 && inputs.length === 1 && Array.isArray(unfoundSources[0]._raw) && Array.isArray(inputs[0])) {
      context.dispatch({
        type: "RESET_RAW_EVENTS",
        sourceId: unfoundSources[0].sourceId,
        rawEvents: inputs[0]
      });
      return;
    }
    let newInputs = [];
    for (let input of inputs) {
      let inputFound = false;
      for (let i3 = 0; i3 < unfoundSources.length; i3 += 1) {
        if (unfoundSources[i3]._raw === input) {
          unfoundSources.splice(i3, 1);
          inputFound = true;
          break;
        }
      }
      if (!inputFound) {
        newInputs.push(input);
      }
    }
    for (let unfoundSource of unfoundSources) {
      context.dispatch({
        type: "REMOVE_EVENT_SOURCE",
        sourceId: unfoundSource.sourceId
      });
    }
    for (let newInput of newInputs) {
      context.calendarApi.addEventSource(newInput);
    }
  }
  function handleDateProfile(dateProfile, context) {
    context.emitter.trigger("datesSet", Object.assign(Object.assign({}, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), { view: context.viewApi }));
  }
  function handleEventStore(eventStore, context) {
    let { emitter } = context;
    if (emitter.hasHandlers("eventsSet")) {
      emitter.trigger("eventsSet", buildEventApis(eventStore, context));
    }
  }
  var globalPlugins = [
    arrayEventSourcePlugin,
    funcEventSourcePlugin,
    jsonFeedEventSourcePlugin,
    simpleRecurringEventsPlugin,
    changeHandlerPlugin,
    createPlugin({
      name: "misc",
      isLoadingFuncs: [
        (state) => computeEventSourcesLoading(state.eventSources)
      ],
      propSetHandlers: {
        dateProfile: handleDateProfile,
        eventStore: handleEventStore
      }
    })
  ];

  // node_modules/@fullcalendar/interaction/index.js
  config.touchMouseIgnoreWait = 500;
  var ignoreMouseDepth = 0;
  var listenerCnt = 0;
  var isWindowTouchMoveCancelled = false;
  var PointerDragging = class {
    constructor(containerEl) {
      this.subjectEl = null;
      this.selector = "";
      this.handleSelector = "";
      this.shouldIgnoreMove = false;
      this.shouldWatchScroll = true;
      this.isDragging = false;
      this.isTouchDragging = false;
      this.wasTouchScroll = false;
      this.handleMouseDown = (ev) => {
        if (!this.shouldIgnoreMouse() && isPrimaryMouseButton(ev) && this.tryStart(ev)) {
          let pev = this.createEventFromMouse(ev, true);
          this.emitter.trigger("pointerdown", pev);
          this.initScrollWatch(pev);
          if (!this.shouldIgnoreMove) {
            document.addEventListener("mousemove", this.handleMouseMove);
          }
          document.addEventListener("mouseup", this.handleMouseUp);
        }
      };
      this.handleMouseMove = (ev) => {
        let pev = this.createEventFromMouse(ev);
        this.recordCoords(pev);
        this.emitter.trigger("pointermove", pev);
      };
      this.handleMouseUp = (ev) => {
        document.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("mouseup", this.handleMouseUp);
        this.emitter.trigger("pointerup", this.createEventFromMouse(ev));
        this.cleanup();
      };
      this.handleTouchStart = (ev) => {
        if (this.tryStart(ev)) {
          this.isTouchDragging = true;
          let pev = this.createEventFromTouch(ev, true);
          this.emitter.trigger("pointerdown", pev);
          this.initScrollWatch(pev);
          let targetEl = ev.target;
          if (!this.shouldIgnoreMove) {
            targetEl.addEventListener("touchmove", this.handleTouchMove);
          }
          targetEl.addEventListener("touchend", this.handleTouchEnd);
          targetEl.addEventListener("touchcancel", this.handleTouchEnd);
          window.addEventListener("scroll", this.handleTouchScroll, true);
        }
      };
      this.handleTouchMove = (ev) => {
        let pev = this.createEventFromTouch(ev);
        this.recordCoords(pev);
        this.emitter.trigger("pointermove", pev);
      };
      this.handleTouchEnd = (ev) => {
        if (this.isDragging) {
          let targetEl = ev.target;
          targetEl.removeEventListener("touchmove", this.handleTouchMove);
          targetEl.removeEventListener("touchend", this.handleTouchEnd);
          targetEl.removeEventListener("touchcancel", this.handleTouchEnd);
          window.removeEventListener("scroll", this.handleTouchScroll, true);
          this.emitter.trigger("pointerup", this.createEventFromTouch(ev));
          this.cleanup();
          this.isTouchDragging = false;
          startIgnoringMouse();
        }
      };
      this.handleTouchScroll = () => {
        this.wasTouchScroll = true;
      };
      this.handleScroll = (ev) => {
        if (!this.shouldIgnoreMove) {
          let pageX = window.scrollX - this.prevScrollX + this.prevPageX;
          let pageY = window.scrollY - this.prevScrollY + this.prevPageY;
          this.emitter.trigger("pointermove", {
            origEvent: ev,
            isTouch: this.isTouchDragging,
            subjectEl: this.subjectEl,
            pageX,
            pageY,
            deltaX: pageX - this.origPageX,
            deltaY: pageY - this.origPageY
          });
        }
      };
      this.containerEl = containerEl;
      this.emitter = new Emitter();
      containerEl.addEventListener("mousedown", this.handleMouseDown);
      containerEl.addEventListener("touchstart", this.handleTouchStart, { passive: true });
      listenerCreated();
    }
    destroy() {
      this.containerEl.removeEventListener("mousedown", this.handleMouseDown);
      this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: true });
      listenerDestroyed();
    }
    tryStart(ev) {
      let subjectEl = this.querySubjectEl(ev);
      let downEl = ev.target;
      if (subjectEl && (!this.handleSelector || elementClosest(downEl, this.handleSelector))) {
        this.subjectEl = subjectEl;
        this.isDragging = true;
        this.wasTouchScroll = false;
        return true;
      }
      return false;
    }
    cleanup() {
      isWindowTouchMoveCancelled = false;
      this.isDragging = false;
      this.subjectEl = null;
      this.destroyScrollWatch();
    }
    querySubjectEl(ev) {
      if (this.selector) {
        return elementClosest(ev.target, this.selector);
      }
      return this.containerEl;
    }
    shouldIgnoreMouse() {
      return ignoreMouseDepth || this.isTouchDragging;
    }
    // can be called by user of this class, to cancel touch-based scrolling for the current drag
    cancelTouchScroll() {
      if (this.isDragging) {
        isWindowTouchMoveCancelled = true;
      }
    }
    // Scrolling that simulates pointermoves
    // ----------------------------------------------------------------------------------------------------
    initScrollWatch(ev) {
      if (this.shouldWatchScroll) {
        this.recordCoords(ev);
        window.addEventListener("scroll", this.handleScroll, true);
      }
    }
    recordCoords(ev) {
      if (this.shouldWatchScroll) {
        this.prevPageX = ev.pageX;
        this.prevPageY = ev.pageY;
        this.prevScrollX = window.scrollX;
        this.prevScrollY = window.scrollY;
      }
    }
    destroyScrollWatch() {
      if (this.shouldWatchScroll) {
        window.removeEventListener("scroll", this.handleScroll, true);
      }
    }
    // Event Normalization
    // ----------------------------------------------------------------------------------------------------
    createEventFromMouse(ev, isFirst) {
      let deltaX = 0;
      let deltaY = 0;
      if (isFirst) {
        this.origPageX = ev.pageX;
        this.origPageY = ev.pageY;
      } else {
        deltaX = ev.pageX - this.origPageX;
        deltaY = ev.pageY - this.origPageY;
      }
      return {
        origEvent: ev,
        isTouch: false,
        subjectEl: this.subjectEl,
        pageX: ev.pageX,
        pageY: ev.pageY,
        deltaX,
        deltaY
      };
    }
    createEventFromTouch(ev, isFirst) {
      let touches = ev.touches;
      let pageX;
      let pageY;
      let deltaX = 0;
      let deltaY = 0;
      if (touches && touches.length) {
        pageX = touches[0].pageX;
        pageY = touches[0].pageY;
      } else {
        pageX = ev.pageX;
        pageY = ev.pageY;
      }
      if (isFirst) {
        this.origPageX = pageX;
        this.origPageY = pageY;
      } else {
        deltaX = pageX - this.origPageX;
        deltaY = pageY - this.origPageY;
      }
      return {
        origEvent: ev,
        isTouch: true,
        subjectEl: this.subjectEl,
        pageX,
        pageY,
        deltaX,
        deltaY
      };
    }
  };
  function isPrimaryMouseButton(ev) {
    return ev.button === 0 && !ev.ctrlKey;
  }
  function startIgnoringMouse() {
    ignoreMouseDepth += 1;
    setTimeout(() => {
      ignoreMouseDepth -= 1;
    }, config.touchMouseIgnoreWait);
  }
  function listenerCreated() {
    listenerCnt += 1;
    if (listenerCnt === 1) {
      window.addEventListener("touchmove", onWindowTouchMove, { passive: false });
    }
  }
  function listenerDestroyed() {
    listenerCnt -= 1;
    if (!listenerCnt) {
      window.removeEventListener("touchmove", onWindowTouchMove, { passive: false });
    }
  }
  function onWindowTouchMove(ev) {
    if (isWindowTouchMoveCancelled) {
      ev.preventDefault();
    }
  }
  var ElementMirror = class {
    constructor() {
      this.isVisible = false;
      this.sourceEl = null;
      this.mirrorEl = null;
      this.sourceElRect = null;
      this.parentNode = document.body;
      this.zIndex = 9999;
      this.revertDuration = 0;
    }
    start(sourceEl, pageX, pageY) {
      this.sourceEl = sourceEl;
      this.sourceElRect = this.sourceEl.getBoundingClientRect();
      this.origScreenX = pageX - window.scrollX;
      this.origScreenY = pageY - window.scrollY;
      this.deltaX = 0;
      this.deltaY = 0;
      this.updateElPosition();
    }
    handleMove(pageX, pageY) {
      this.deltaX = pageX - window.scrollX - this.origScreenX;
      this.deltaY = pageY - window.scrollY - this.origScreenY;
      this.updateElPosition();
    }
    // can be called before start
    setIsVisible(bool) {
      if (bool) {
        if (!this.isVisible) {
          if (this.mirrorEl) {
            this.mirrorEl.style.display = "";
          }
          this.isVisible = bool;
          this.updateElPosition();
        }
      } else if (this.isVisible) {
        if (this.mirrorEl) {
          this.mirrorEl.style.display = "none";
        }
        this.isVisible = bool;
      }
    }
    // always async
    stop(needsRevertAnimation, callback) {
      let done = () => {
        this.cleanup();
        callback();
      };
      if (needsRevertAnimation && this.mirrorEl && this.isVisible && this.revertDuration && // if 0, transition won't work
      (this.deltaX || this.deltaY)) {
        this.doRevertAnimation(done, this.revertDuration);
      } else {
        setTimeout(done, 0);
      }
    }
    doRevertAnimation(callback, revertDuration) {
      let mirrorEl = this.mirrorEl;
      let finalSourceElRect = this.sourceEl.getBoundingClientRect();
      mirrorEl.style.transition = "top " + revertDuration + "ms,left " + revertDuration + "ms";
      applyStyle(mirrorEl, {
        left: finalSourceElRect.left,
        top: finalSourceElRect.top
      });
      whenTransitionDone(mirrorEl, () => {
        mirrorEl.style.transition = "";
        callback();
      });
    }
    cleanup() {
      if (this.mirrorEl) {
        removeElement(this.mirrorEl);
        this.mirrorEl = null;
      }
      this.sourceEl = null;
    }
    updateElPosition() {
      if (this.sourceEl && this.isVisible) {
        applyStyle(this.getMirrorEl(), {
          left: this.sourceElRect.left + this.deltaX,
          top: this.sourceElRect.top + this.deltaY
        });
      }
    }
    getMirrorEl() {
      let sourceElRect = this.sourceElRect;
      let mirrorEl = this.mirrorEl;
      if (!mirrorEl) {
        mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true);
        mirrorEl.style.userSelect = "none";
        mirrorEl.style.webkitUserSelect = "none";
        mirrorEl.style.pointerEvents = "none";
        mirrorEl.classList.add("fc-event-dragging");
        applyStyle(mirrorEl, {
          position: "fixed",
          zIndex: this.zIndex,
          visibility: "",
          boxSizing: "border-box",
          width: sourceElRect.right - sourceElRect.left,
          height: sourceElRect.bottom - sourceElRect.top,
          right: "auto",
          bottom: "auto",
          margin: 0
        });
        this.parentNode.appendChild(mirrorEl);
      }
      return mirrorEl;
    }
  };
  var ScrollGeomCache = class extends ScrollController {
    constructor(scrollController, doesListening) {
      super();
      this.handleScroll = () => {
        this.scrollTop = this.scrollController.getScrollTop();
        this.scrollLeft = this.scrollController.getScrollLeft();
        this.handleScrollChange();
      };
      this.scrollController = scrollController;
      this.doesListening = doesListening;
      this.scrollTop = this.origScrollTop = scrollController.getScrollTop();
      this.scrollLeft = this.origScrollLeft = scrollController.getScrollLeft();
      this.scrollWidth = scrollController.getScrollWidth();
      this.scrollHeight = scrollController.getScrollHeight();
      this.clientWidth = scrollController.getClientWidth();
      this.clientHeight = scrollController.getClientHeight();
      this.clientRect = this.computeClientRect();
      if (this.doesListening) {
        this.getEventTarget().addEventListener("scroll", this.handleScroll);
      }
    }
    destroy() {
      if (this.doesListening) {
        this.getEventTarget().removeEventListener("scroll", this.handleScroll);
      }
    }
    getScrollTop() {
      return this.scrollTop;
    }
    getScrollLeft() {
      return this.scrollLeft;
    }
    setScrollTop(top) {
      this.scrollController.setScrollTop(top);
      if (!this.doesListening) {
        this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
        this.handleScrollChange();
      }
    }
    setScrollLeft(top) {
      this.scrollController.setScrollLeft(top);
      if (!this.doesListening) {
        this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
        this.handleScrollChange();
      }
    }
    getClientWidth() {
      return this.clientWidth;
    }
    getClientHeight() {
      return this.clientHeight;
    }
    getScrollWidth() {
      return this.scrollWidth;
    }
    getScrollHeight() {
      return this.scrollHeight;
    }
    handleScrollChange() {
    }
  };
  var ElementScrollGeomCache = class extends ScrollGeomCache {
    constructor(el, doesListening) {
      super(new ElementScrollController(el), doesListening);
    }
    getEventTarget() {
      return this.scrollController.el;
    }
    computeClientRect() {
      return computeInnerRect(this.scrollController.el);
    }
  };
  var WindowScrollGeomCache = class extends ScrollGeomCache {
    constructor(doesListening) {
      super(new WindowScrollController(), doesListening);
    }
    getEventTarget() {
      return window;
    }
    computeClientRect() {
      return {
        left: this.scrollLeft,
        right: this.scrollLeft + this.clientWidth,
        top: this.scrollTop,
        bottom: this.scrollTop + this.clientHeight
      };
    }
    // the window is the only scroll object that changes it's rectangle relative
    // to the document's topleft as it scrolls
    handleScrollChange() {
      this.clientRect = this.computeClientRect();
    }
  };
  var getTime = typeof performance === "function" ? performance.now : Date.now;
  var AutoScroller = class {
    constructor() {
      this.isEnabled = true;
      this.scrollQuery = [window, ".fc-scroller"];
      this.edgeThreshold = 50;
      this.maxVelocity = 300;
      this.pointerScreenX = null;
      this.pointerScreenY = null;
      this.isAnimating = false;
      this.scrollCaches = null;
      this.everMovedUp = false;
      this.everMovedDown = false;
      this.everMovedLeft = false;
      this.everMovedRight = false;
      this.animate = () => {
        if (this.isAnimating) {
          let edge = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
          if (edge) {
            let now = getTime();
            this.handleSide(edge, (now - this.msSinceRequest) / 1e3);
            this.requestAnimation(now);
          } else {
            this.isAnimating = false;
          }
        }
      };
    }
    start(pageX, pageY, scrollStartEl) {
      if (this.isEnabled) {
        this.scrollCaches = this.buildCaches(scrollStartEl);
        this.pointerScreenX = null;
        this.pointerScreenY = null;
        this.everMovedUp = false;
        this.everMovedDown = false;
        this.everMovedLeft = false;
        this.everMovedRight = false;
        this.handleMove(pageX, pageY);
      }
    }
    handleMove(pageX, pageY) {
      if (this.isEnabled) {
        let pointerScreenX = pageX - window.scrollX;
        let pointerScreenY = pageY - window.scrollY;
        let yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
        let xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
        if (yDelta < 0) {
          this.everMovedUp = true;
        } else if (yDelta > 0) {
          this.everMovedDown = true;
        }
        if (xDelta < 0) {
          this.everMovedLeft = true;
        } else if (xDelta > 0) {
          this.everMovedRight = true;
        }
        this.pointerScreenX = pointerScreenX;
        this.pointerScreenY = pointerScreenY;
        if (!this.isAnimating) {
          this.isAnimating = true;
          this.requestAnimation(getTime());
        }
      }
    }
    stop() {
      if (this.isEnabled) {
        this.isAnimating = false;
        for (let scrollCache of this.scrollCaches) {
          scrollCache.destroy();
        }
        this.scrollCaches = null;
      }
    }
    requestAnimation(now) {
      this.msSinceRequest = now;
      requestAnimationFrame(this.animate);
    }
    handleSide(edge, seconds) {
      let { scrollCache } = edge;
      let { edgeThreshold } = this;
      let invDistance = edgeThreshold - edge.distance;
      let velocity = (
        // the closer to the edge, the faster we scroll
        invDistance * invDistance / (edgeThreshold * edgeThreshold) * // quadratic
        this.maxVelocity * seconds
      );
      let sign = 1;
      switch (edge.name) {
        case "left":
          sign = -1;
        case "right":
          scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
          break;
        case "top":
          sign = -1;
        case "bottom":
          scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
          break;
      }
    }
    // left/top are relative to document topleft
    computeBestEdge(left, top) {
      let { edgeThreshold } = this;
      let bestSide = null;
      let scrollCaches = this.scrollCaches || [];
      for (let scrollCache of scrollCaches) {
        let rect = scrollCache.clientRect;
        let leftDist = left - rect.left;
        let rightDist = rect.right - left;
        let topDist = top - rect.top;
        let bottomDist = rect.bottom - top;
        if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
          if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() && (!bestSide || bestSide.distance > topDist)) {
            bestSide = { scrollCache, name: "top", distance: topDist };
          }
          if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() && (!bestSide || bestSide.distance > bottomDist)) {
            bestSide = { scrollCache, name: "bottom", distance: bottomDist };
          }
          if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() && (!bestSide || bestSide.distance > leftDist)) {
            bestSide = { scrollCache, name: "left", distance: leftDist };
          }
          if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() && (!bestSide || bestSide.distance > rightDist)) {
            bestSide = { scrollCache, name: "right", distance: rightDist };
          }
        }
      }
      return bestSide;
    }
    buildCaches(scrollStartEl) {
      return this.queryScrollEls(scrollStartEl).map((el) => {
        if (el === window) {
          return new WindowScrollGeomCache(false);
        }
        return new ElementScrollGeomCache(el, false);
      });
    }
    queryScrollEls(scrollStartEl) {
      let els = [];
      for (let query of this.scrollQuery) {
        if (typeof query === "object") {
          els.push(query);
        } else {
          els.push(...Array.prototype.slice.call(scrollStartEl.getRootNode().querySelectorAll(query)));
        }
      }
      return els;
    }
  };
  var FeaturefulElementDragging = class extends ElementDragging {
    constructor(containerEl, selector) {
      super(containerEl);
      this.containerEl = containerEl;
      this.delay = null;
      this.minDistance = 0;
      this.touchScrollAllowed = true;
      this.mirrorNeedsRevert = false;
      this.isInteracting = false;
      this.isDragging = false;
      this.isDelayEnded = false;
      this.isDistanceSurpassed = false;
      this.delayTimeoutId = null;
      this.onPointerDown = (ev) => {
        if (!this.isDragging) {
          this.isInteracting = true;
          this.isDelayEnded = false;
          this.isDistanceSurpassed = false;
          preventSelection(document.body);
          preventContextMenu(document.body);
          if (!ev.isTouch) {
            ev.origEvent.preventDefault();
          }
          this.emitter.trigger("pointerdown", ev);
          if (this.isInteracting && // not destroyed via pointerdown handler
          !this.pointer.shouldIgnoreMove) {
            this.mirror.setIsVisible(false);
            this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY);
            this.startDelay(ev);
            if (!this.minDistance) {
              this.handleDistanceSurpassed(ev);
            }
          }
        }
      };
      this.onPointerMove = (ev) => {
        if (this.isInteracting) {
          this.emitter.trigger("pointermove", ev);
          if (!this.isDistanceSurpassed) {
            let minDistance = this.minDistance;
            let distanceSq;
            let { deltaX, deltaY } = ev;
            distanceSq = deltaX * deltaX + deltaY * deltaY;
            if (distanceSq >= minDistance * minDistance) {
              this.handleDistanceSurpassed(ev);
            }
          }
          if (this.isDragging) {
            if (ev.origEvent.type !== "scroll") {
              this.mirror.handleMove(ev.pageX, ev.pageY);
              this.autoScroller.handleMove(ev.pageX, ev.pageY);
            }
            this.emitter.trigger("dragmove", ev);
          }
        }
      };
      this.onPointerUp = (ev) => {
        if (this.isInteracting) {
          this.isInteracting = false;
          allowSelection(document.body);
          allowContextMenu(document.body);
          this.emitter.trigger("pointerup", ev);
          if (this.isDragging) {
            this.autoScroller.stop();
            this.tryStopDrag(ev);
          }
          if (this.delayTimeoutId) {
            clearTimeout(this.delayTimeoutId);
            this.delayTimeoutId = null;
          }
        }
      };
      let pointer = this.pointer = new PointerDragging(containerEl);
      pointer.emitter.on("pointerdown", this.onPointerDown);
      pointer.emitter.on("pointermove", this.onPointerMove);
      pointer.emitter.on("pointerup", this.onPointerUp);
      if (selector) {
        pointer.selector = selector;
      }
      this.mirror = new ElementMirror();
      this.autoScroller = new AutoScroller();
    }
    destroy() {
      this.pointer.destroy();
      this.onPointerUp({});
    }
    startDelay(ev) {
      if (typeof this.delay === "number") {
        this.delayTimeoutId = setTimeout(() => {
          this.delayTimeoutId = null;
          this.handleDelayEnd(ev);
        }, this.delay);
      } else {
        this.handleDelayEnd(ev);
      }
    }
    handleDelayEnd(ev) {
      this.isDelayEnded = true;
      this.tryStartDrag(ev);
    }
    handleDistanceSurpassed(ev) {
      this.isDistanceSurpassed = true;
      this.tryStartDrag(ev);
    }
    tryStartDrag(ev) {
      if (this.isDelayEnded && this.isDistanceSurpassed) {
        if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
          this.isDragging = true;
          this.mirrorNeedsRevert = false;
          this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
          this.emitter.trigger("dragstart", ev);
          if (this.touchScrollAllowed === false) {
            this.pointer.cancelTouchScroll();
          }
        }
      }
    }
    tryStopDrag(ev) {
      this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
    }
    stopDrag(ev) {
      this.isDragging = false;
      this.emitter.trigger("dragend", ev);
    }
    // fill in the implementations...
    setIgnoreMove(bool) {
      this.pointer.shouldIgnoreMove = bool;
    }
    setMirrorIsVisible(bool) {
      this.mirror.setIsVisible(bool);
    }
    setMirrorNeedsRevert(bool) {
      this.mirrorNeedsRevert = bool;
    }
    setAutoScrollEnabled(bool) {
      this.autoScroller.isEnabled = bool;
    }
  };
  var OffsetTracker = class {
    constructor(el) {
      this.el = el;
      this.origRect = computeRect(el);
      this.scrollCaches = getClippingParents(el).map((scrollEl) => new ElementScrollGeomCache(scrollEl, true));
    }
    destroy() {
      for (let scrollCache of this.scrollCaches) {
        scrollCache.destroy();
      }
    }
    computeLeft() {
      let left = this.origRect.left;
      for (let scrollCache of this.scrollCaches) {
        left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
      }
      return left;
    }
    computeTop() {
      let top = this.origRect.top;
      for (let scrollCache of this.scrollCaches) {
        top += scrollCache.origScrollTop - scrollCache.getScrollTop();
      }
      return top;
    }
    isWithinClipping(pageX, pageY) {
      let point = { left: pageX, top: pageY };
      for (let scrollCache of this.scrollCaches) {
        if (!isIgnoredClipping(scrollCache.getEventTarget()) && !pointInsideRect(point, scrollCache.clientRect)) {
          return false;
        }
      }
      return true;
    }
  };
  function isIgnoredClipping(node) {
    let tagName = node.tagName;
    return tagName === "HTML" || tagName === "BODY";
  }
  var HitDragging = class {
    constructor(dragging, droppableStore) {
      this.useSubjectCenter = false;
      this.requireInitial = true;
      this.disablePointCheck = false;
      this.initialHit = null;
      this.movingHit = null;
      this.finalHit = null;
      this.handlePointerDown = (ev) => {
        let { dragging: dragging2 } = this;
        this.initialHit = null;
        this.movingHit = null;
        this.finalHit = null;
        this.prepareHits();
        this.processFirstCoord(ev);
        if (this.initialHit || !this.requireInitial) {
          dragging2.setIgnoreMove(false);
          this.emitter.trigger("pointerdown", ev);
        } else {
          dragging2.setIgnoreMove(true);
        }
      };
      this.handleDragStart = (ev) => {
        this.emitter.trigger("dragstart", ev);
        this.handleMove(ev, true);
      };
      this.handleDragMove = (ev) => {
        this.emitter.trigger("dragmove", ev);
        this.handleMove(ev);
      };
      this.handlePointerUp = (ev) => {
        this.releaseHits();
        this.emitter.trigger("pointerup", ev);
      };
      this.handleDragEnd = (ev) => {
        if (this.movingHit) {
          this.emitter.trigger("hitupdate", null, true, ev);
        }
        this.finalHit = this.movingHit;
        this.movingHit = null;
        this.emitter.trigger("dragend", ev);
      };
      this.droppableStore = droppableStore;
      dragging.emitter.on("pointerdown", this.handlePointerDown);
      dragging.emitter.on("dragstart", this.handleDragStart);
      dragging.emitter.on("dragmove", this.handleDragMove);
      dragging.emitter.on("pointerup", this.handlePointerUp);
      dragging.emitter.on("dragend", this.handleDragEnd);
      this.dragging = dragging;
      this.emitter = new Emitter();
    }
    // sets initialHit
    // sets coordAdjust
    processFirstCoord(ev) {
      let origPoint = { left: ev.pageX, top: ev.pageY };
      let adjustedPoint = origPoint;
      let subjectEl = ev.subjectEl;
      let subjectRect;
      if (subjectEl instanceof HTMLElement) {
        subjectRect = computeRect(subjectEl);
        adjustedPoint = constrainPoint(adjustedPoint, subjectRect);
      }
      let initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
      if (initialHit) {
        if (this.useSubjectCenter && subjectRect) {
          let slicedSubjectRect = intersectRects(subjectRect, initialHit.rect);
          if (slicedSubjectRect) {
            adjustedPoint = getRectCenter(slicedSubjectRect);
          }
        }
        this.coordAdjust = diffPoints(adjustedPoint, origPoint);
      } else {
        this.coordAdjust = { left: 0, top: 0 };
      }
    }
    handleMove(ev, forceHandle) {
      let hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
      if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
        this.movingHit = hit;
        this.emitter.trigger("hitupdate", hit, false, ev);
      }
    }
    prepareHits() {
      this.offsetTrackers = mapHash(this.droppableStore, (interactionSettings) => {
        interactionSettings.component.prepareHits();
        return new OffsetTracker(interactionSettings.el);
      });
    }
    releaseHits() {
      let { offsetTrackers } = this;
      for (let id in offsetTrackers) {
        offsetTrackers[id].destroy();
      }
      this.offsetTrackers = {};
    }
    queryHitForOffset(offsetLeft, offsetTop) {
      let { droppableStore, offsetTrackers } = this;
      let bestHit = null;
      for (let id in droppableStore) {
        let component = droppableStore[id].component;
        let offsetTracker = offsetTrackers[id];
        if (offsetTracker && // wasn't destroyed mid-drag
        offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
          let originLeft = offsetTracker.computeLeft();
          let originTop = offsetTracker.computeTop();
          let positionLeft = offsetLeft - originLeft;
          let positionTop = offsetTop - originTop;
          let { origRect } = offsetTracker;
          let width = origRect.right - origRect.left;
          let height = origRect.bottom - origRect.top;
          if (
            // must be within the element's bounds
            positionLeft >= 0 && positionLeft < width && positionTop >= 0 && positionTop < height
          ) {
            let hit = component.queryHit(positionLeft, positionTop, width, height);
            if (hit && // make sure the hit is within activeRange, meaning it's not a dead cell
            rangeContainsRange(hit.dateProfile.activeRange, hit.dateSpan.range) && // Ensure the component we are querying for the hit is accessibly my the pointer
            // Prevents obscured calendars (ex: under a modal dialog) from accepting hit
            // https://github.com/fullcalendar/fullcalendar/issues/5026
            (this.disablePointCheck || offsetTracker.el.contains(offsetTracker.el.getRootNode().elementFromPoint(
              // add-back origins to get coordinate relative to top-left of window viewport
              positionLeft + originLeft - window.scrollX,
              positionTop + originTop - window.scrollY
            ))) && (!bestHit || hit.layer > bestHit.layer)) {
              hit.componentId = id;
              hit.context = component.context;
              hit.rect.left += originLeft;
              hit.rect.right += originLeft;
              hit.rect.top += originTop;
              hit.rect.bottom += originTop;
              bestHit = hit;
            }
          }
        }
      }
      return bestHit;
    }
  };
  function isHitsEqual(hit0, hit1) {
    if (!hit0 && !hit1) {
      return true;
    }
    if (Boolean(hit0) !== Boolean(hit1)) {
      return false;
    }
    return isDateSpansEqual(hit0.dateSpan, hit1.dateSpan);
  }
  function buildDatePointApiWithContext(dateSpan, context) {
    let props = {};
    for (let transform of context.pluginHooks.datePointTransforms) {
      Object.assign(props, transform(dateSpan, context));
    }
    Object.assign(props, buildDatePointApi(dateSpan, context.dateEnv));
    return props;
  }
  function buildDatePointApi(span, dateEnv) {
    return {
      date: dateEnv.toDate(span.range.start),
      dateStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
      allDay: span.allDay
    };
  }
  var DateClicking = class extends Interaction {
    constructor(settings) {
      super(settings);
      this.handlePointerDown = (pev) => {
        let { dragging } = this;
        let downEl = pev.origEvent.target;
        dragging.setIgnoreMove(!this.component.isValidDateDownEl(downEl));
      };
      this.handleDragEnd = (ev) => {
        let { component } = this;
        let { pointer } = this.dragging;
        if (!pointer.wasTouchScroll) {
          let { initialHit, finalHit } = this.hitDragging;
          if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
            let { context } = component;
            let arg = Object.assign(Object.assign({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), { dayEl: initialHit.dayEl, jsEvent: ev.origEvent, view: context.viewApi || context.calendarApi.view });
            context.emitter.trigger("dateClick", arg);
          }
        }
      };
      this.dragging = new FeaturefulElementDragging(settings.el);
      this.dragging.autoScroller.isEnabled = false;
      let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
      hitDragging.emitter.on("pointerdown", this.handlePointerDown);
      hitDragging.emitter.on("dragend", this.handleDragEnd);
    }
    destroy() {
      this.dragging.destroy();
    }
  };
  var DateSelecting = class extends Interaction {
    constructor(settings) {
      super(settings);
      this.dragSelection = null;
      this.handlePointerDown = (ev) => {
        let { component: component2, dragging: dragging2 } = this;
        let { options: options2 } = component2.context;
        let canSelect = options2.selectable && component2.isValidDateDownEl(ev.origEvent.target);
        dragging2.setIgnoreMove(!canSelect);
        dragging2.delay = ev.isTouch ? getComponentTouchDelay$1(component2) : null;
      };
      this.handleDragStart = (ev) => {
        this.component.context.calendarApi.unselect(ev);
      };
      this.handleHitUpdate = (hit, isFinal) => {
        let { context } = this.component;
        let dragSelection = null;
        let isInvalid = false;
        if (hit) {
          let initialHit = this.hitDragging.initialHit;
          let disallowed = hit.componentId === initialHit.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(initialHit, hit);
          if (!disallowed) {
            dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
          }
          if (!dragSelection || !isDateSelectionValid(dragSelection, hit.dateProfile, context)) {
            isInvalid = true;
            dragSelection = null;
          }
        }
        if (dragSelection) {
          context.dispatch({ type: "SELECT_DATES", selection: dragSelection });
        } else if (!isFinal) {
          context.dispatch({ type: "UNSELECT_DATES" });
        }
        if (!isInvalid) {
          enableCursor();
        } else {
          disableCursor();
        }
        if (!isFinal) {
          this.dragSelection = dragSelection;
        }
      };
      this.handlePointerUp = (pev) => {
        if (this.dragSelection) {
          triggerDateSelect(this.dragSelection, pev, this.component.context);
          this.dragSelection = null;
        }
      };
      let { component } = settings;
      let { options } = component.context;
      let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
      dragging.touchScrollAllowed = false;
      dragging.minDistance = options.selectMinDistance || 0;
      dragging.autoScroller.isEnabled = options.dragScroll;
      let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
      hitDragging.emitter.on("pointerdown", this.handlePointerDown);
      hitDragging.emitter.on("dragstart", this.handleDragStart);
      hitDragging.emitter.on("hitupdate", this.handleHitUpdate);
      hitDragging.emitter.on("pointerup", this.handlePointerUp);
    }
    destroy() {
      this.dragging.destroy();
    }
  };
  function getComponentTouchDelay$1(component) {
    let { options } = component.context;
    let delay = options.selectLongPressDelay;
    if (delay == null) {
      delay = options.longPressDelay;
    }
    return delay;
  }
  function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
    let dateSpan0 = hit0.dateSpan;
    let dateSpan1 = hit1.dateSpan;
    let ms = [
      dateSpan0.range.start,
      dateSpan0.range.end,
      dateSpan1.range.start,
      dateSpan1.range.end
    ];
    ms.sort(compareNumbers);
    let props = {};
    for (let transformer of dateSelectionTransformers) {
      let res = transformer(hit0, hit1);
      if (res === false) {
        return null;
      }
      if (res) {
        Object.assign(props, res);
      }
    }
    props.range = { start: ms[0], end: ms[3] };
    props.allDay = dateSpan0.allDay;
    return props;
  }
  var EventDragging = class _EventDragging extends Interaction {
    constructor(settings) {
      super(settings);
      this.subjectEl = null;
      this.subjectSeg = null;
      this.isDragging = false;
      this.eventRange = null;
      this.relevantEvents = null;
      this.receivingContext = null;
      this.validMutation = null;
      this.mutatedRelevantEvents = null;
      this.handlePointerDown = (ev) => {
        let origTarget = ev.origEvent.target;
        let { component: component2, dragging: dragging2 } = this;
        let { mirror } = dragging2;
        let { options: options2 } = component2.context;
        let initialContext = component2.context;
        this.subjectEl = ev.subjectEl;
        let subjectSeg = this.subjectSeg = getElSeg(ev.subjectEl);
        let eventRange = this.eventRange = subjectSeg.eventRange;
        let eventInstanceId = eventRange.instance.instanceId;
        this.relevantEvents = getRelevantEvents(initialContext.getCurrentData().eventStore, eventInstanceId);
        dragging2.minDistance = ev.isTouch ? 0 : options2.eventDragMinDistance;
        dragging2.delay = // only do a touch delay if touch and this event hasn't been selected yet
        ev.isTouch && eventInstanceId !== component2.props.eventSelection ? getComponentTouchDelay(component2) : null;
        if (options2.fixedMirrorParent) {
          mirror.parentNode = options2.fixedMirrorParent;
        } else {
          mirror.parentNode = elementClosest(origTarget, ".fc");
        }
        mirror.revertDuration = options2.dragRevertDuration;
        let isValid = component2.isValidSegDownEl(origTarget) && !elementClosest(origTarget, ".fc-event-resizer");
        dragging2.setIgnoreMove(!isValid);
        this.isDragging = isValid && ev.subjectEl.classList.contains("fc-event-draggable");
      };
      this.handleDragStart = (ev) => {
        let initialContext = this.component.context;
        let eventRange = this.eventRange;
        let eventInstanceId = eventRange.instance.instanceId;
        if (ev.isTouch) {
          if (eventInstanceId !== this.component.props.eventSelection) {
            initialContext.dispatch({ type: "SELECT_EVENT", eventInstanceId });
          }
        } else {
          initialContext.dispatch({ type: "UNSELECT_EVENT" });
        }
        if (this.isDragging) {
          initialContext.calendarApi.unselect(ev);
          initialContext.emitter.trigger("eventDragStart", {
            el: this.subjectEl,
            event: new EventImpl(initialContext, eventRange.def, eventRange.instance),
            jsEvent: ev.origEvent,
            view: initialContext.viewApi
          });
        }
      };
      this.handleHitUpdate = (hit, isFinal) => {
        if (!this.isDragging) {
          return;
        }
        let relevantEvents = this.relevantEvents;
        let initialHit = this.hitDragging.initialHit;
        let initialContext = this.component.context;
        let receivingContext = null;
        let mutation = null;
        let mutatedRelevantEvents = null;
        let isInvalid = false;
        let interaction = {
          affectedEvents: relevantEvents,
          mutatedEvents: createEmptyEventStore(),
          isEvent: true
        };
        if (hit) {
          receivingContext = hit.context;
          let receivingOptions = receivingContext.options;
          if (initialContext === receivingContext || receivingOptions.editable && receivingOptions.droppable) {
            mutation = computeEventMutation(initialHit, hit, this.eventRange.instance.range.start, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);
            if (mutation) {
              mutatedRelevantEvents = applyMutationToEventStore(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
              interaction.mutatedEvents = mutatedRelevantEvents;
              if (!isInteractionValid(interaction, hit.dateProfile, receivingContext)) {
                isInvalid = true;
                mutation = null;
                mutatedRelevantEvents = null;
                interaction.mutatedEvents = createEmptyEventStore();
              }
            }
          } else {
            receivingContext = null;
          }
        }
        this.displayDrag(receivingContext, interaction);
        if (!isInvalid) {
          enableCursor();
        } else {
          disableCursor();
        }
        if (!isFinal) {
          if (initialContext === receivingContext && // TODO: write test for this
          isHitsEqual(initialHit, hit)) {
            mutation = null;
          }
          this.dragging.setMirrorNeedsRevert(!mutation);
          this.dragging.setMirrorIsVisible(!hit || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror"));
          this.receivingContext = receivingContext;
          this.validMutation = mutation;
          this.mutatedRelevantEvents = mutatedRelevantEvents;
        }
      };
      this.handlePointerUp = () => {
        if (!this.isDragging) {
          this.cleanup();
        }
      };
      this.handleDragEnd = (ev) => {
        if (this.isDragging) {
          let initialContext = this.component.context;
          let initialView = initialContext.viewApi;
          let { receivingContext, validMutation } = this;
          let eventDef = this.eventRange.def;
          let eventInstance = this.eventRange.instance;
          let eventApi = new EventImpl(initialContext, eventDef, eventInstance);
          let relevantEvents = this.relevantEvents;
          let mutatedRelevantEvents = this.mutatedRelevantEvents;
          let { finalHit } = this.hitDragging;
          this.clearDrag();
          initialContext.emitter.trigger("eventDragStop", {
            el: this.subjectEl,
            event: eventApi,
            jsEvent: ev.origEvent,
            view: initialView
          });
          if (validMutation) {
            if (receivingContext === initialContext) {
              let updatedEventApi = new EventImpl(initialContext, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
              initialContext.dispatch({
                type: "MERGE_EVENTS",
                eventStore: mutatedRelevantEvents
              });
              let eventChangeArg = {
                oldEvent: eventApi,
                event: updatedEventApi,
                relatedEvents: buildEventApis(mutatedRelevantEvents, initialContext, eventInstance),
                revert() {
                  initialContext.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: relevantEvents
                    // the pre-change data
                  });
                }
              };
              let transformed = {};
              for (let transformer of initialContext.getCurrentData().pluginHooks.eventDropTransformers) {
                Object.assign(transformed, transformer(validMutation, initialContext));
              }
              initialContext.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, eventChangeArg), transformed), { el: ev.subjectEl, delta: validMutation.datesDelta, jsEvent: ev.origEvent, view: initialView }));
              initialContext.emitter.trigger("eventChange", eventChangeArg);
            } else if (receivingContext) {
              let eventRemoveArg = {
                event: eventApi,
                relatedEvents: buildEventApis(relevantEvents, initialContext, eventInstance),
                revert() {
                  initialContext.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: relevantEvents
                  });
                }
              };
              initialContext.emitter.trigger("eventLeave", Object.assign(Object.assign({}, eventRemoveArg), { draggedEl: ev.subjectEl, view: initialView }));
              initialContext.dispatch({
                type: "REMOVE_EVENTS",
                eventStore: relevantEvents
              });
              initialContext.emitter.trigger("eventRemove", eventRemoveArg);
              let addedEventDef = mutatedRelevantEvents.defs[eventDef.defId];
              let addedEventInstance = mutatedRelevantEvents.instances[eventInstance.instanceId];
              let addedEventApi = new EventImpl(receivingContext, addedEventDef, addedEventInstance);
              receivingContext.dispatch({
                type: "MERGE_EVENTS",
                eventStore: mutatedRelevantEvents
              });
              let eventAddArg = {
                event: addedEventApi,
                relatedEvents: buildEventApis(mutatedRelevantEvents, receivingContext, addedEventInstance),
                revert() {
                  receivingContext.dispatch({
                    type: "REMOVE_EVENTS",
                    eventStore: mutatedRelevantEvents
                  });
                }
              };
              receivingContext.emitter.trigger("eventAdd", eventAddArg);
              if (ev.isTouch) {
                receivingContext.dispatch({
                  type: "SELECT_EVENT",
                  eventInstanceId: eventInstance.instanceId
                });
              }
              receivingContext.emitter.trigger("drop", Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), { draggedEl: ev.subjectEl, jsEvent: ev.origEvent, view: finalHit.context.viewApi }));
              receivingContext.emitter.trigger("eventReceive", Object.assign(Object.assign({}, eventAddArg), { draggedEl: ev.subjectEl, view: finalHit.context.viewApi }));
            }
          } else {
            initialContext.emitter.trigger("_noEventDrop");
          }
        }
        this.cleanup();
      };
      let { component } = this;
      let { options } = component.context;
      let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
      dragging.pointer.selector = _EventDragging.SELECTOR;
      dragging.touchScrollAllowed = false;
      dragging.autoScroller.isEnabled = options.dragScroll;
      let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsStore);
      hitDragging.useSubjectCenter = settings.useEventCenter;
      hitDragging.emitter.on("pointerdown", this.handlePointerDown);
      hitDragging.emitter.on("dragstart", this.handleDragStart);
      hitDragging.emitter.on("hitupdate", this.handleHitUpdate);
      hitDragging.emitter.on("pointerup", this.handlePointerUp);
      hitDragging.emitter.on("dragend", this.handleDragEnd);
    }
    destroy() {
      this.dragging.destroy();
    }
    // render a drag state on the next receivingCalendar
    displayDrag(nextContext, state) {
      let initialContext = this.component.context;
      let prevContext = this.receivingContext;
      if (prevContext && prevContext !== nextContext) {
        if (prevContext === initialContext) {
          prevContext.dispatch({
            type: "SET_EVENT_DRAG",
            state: {
              affectedEvents: state.affectedEvents,
              mutatedEvents: createEmptyEventStore(),
              isEvent: true
            }
          });
        } else {
          prevContext.dispatch({ type: "UNSET_EVENT_DRAG" });
        }
      }
      if (nextContext) {
        nextContext.dispatch({ type: "SET_EVENT_DRAG", state });
      }
    }
    clearDrag() {
      let initialCalendar = this.component.context;
      let { receivingContext } = this;
      if (receivingContext) {
        receivingContext.dispatch({ type: "UNSET_EVENT_DRAG" });
      }
      if (initialCalendar !== receivingContext) {
        initialCalendar.dispatch({ type: "UNSET_EVENT_DRAG" });
      }
    }
    cleanup() {
      this.subjectSeg = null;
      this.isDragging = false;
      this.eventRange = null;
      this.relevantEvents = null;
      this.receivingContext = null;
      this.validMutation = null;
      this.mutatedRelevantEvents = null;
    }
  };
  EventDragging.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
  function computeEventMutation(hit0, hit1, eventInstanceStart, massagers) {
    let dateSpan0 = hit0.dateSpan;
    let dateSpan1 = hit1.dateSpan;
    let date0 = dateSpan0.range.start;
    let date1 = dateSpan1.range.start;
    let standardProps = {};
    if (dateSpan0.allDay !== dateSpan1.allDay) {
      standardProps.allDay = dateSpan1.allDay;
      standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;
      if (dateSpan1.allDay) {
        date0 = startOfDay(eventInstanceStart);
      } else {
        date0 = eventInstanceStart;
      }
    }
    let delta = diffDates(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ? hit0.largeUnit : null);
    if (delta.milliseconds) {
      standardProps.allDay = false;
    }
    let mutation = {
      datesDelta: delta,
      standardProps
    };
    for (let massager of massagers) {
      massager(mutation, hit0, hit1);
    }
    return mutation;
  }
  function getComponentTouchDelay(component) {
    let { options } = component.context;
    let delay = options.eventLongPressDelay;
    if (delay == null) {
      delay = options.longPressDelay;
    }
    return delay;
  }
  var EventResizing = class extends Interaction {
    constructor(settings) {
      super(settings);
      this.draggingSegEl = null;
      this.draggingSeg = null;
      this.eventRange = null;
      this.relevantEvents = null;
      this.validMutation = null;
      this.mutatedRelevantEvents = null;
      this.handlePointerDown = (ev) => {
        let { component: component2 } = this;
        let segEl = this.querySegEl(ev);
        let seg = getElSeg(segEl);
        let eventRange = this.eventRange = seg.eventRange;
        this.dragging.minDistance = component2.context.options.eventDragMinDistance;
        this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(ev.origEvent.target) || ev.isTouch && this.component.props.eventSelection !== eventRange.instance.instanceId);
      };
      this.handleDragStart = (ev) => {
        let { context } = this.component;
        let eventRange = this.eventRange;
        this.relevantEvents = getRelevantEvents(context.getCurrentData().eventStore, this.eventRange.instance.instanceId);
        let segEl = this.querySegEl(ev);
        this.draggingSegEl = segEl;
        this.draggingSeg = getElSeg(segEl);
        context.calendarApi.unselect();
        context.emitter.trigger("eventResizeStart", {
          el: segEl,
          event: new EventImpl(context, eventRange.def, eventRange.instance),
          jsEvent: ev.origEvent,
          view: context.viewApi
        });
      };
      this.handleHitUpdate = (hit, isFinal, ev) => {
        let { context } = this.component;
        let relevantEvents = this.relevantEvents;
        let initialHit = this.hitDragging.initialHit;
        let eventInstance = this.eventRange.instance;
        let mutation = null;
        let mutatedRelevantEvents = null;
        let isInvalid = false;
        let interaction = {
          affectedEvents: relevantEvents,
          mutatedEvents: createEmptyEventStore(),
          isEvent: true
        };
        if (hit) {
          let disallowed = hit.componentId === initialHit.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(initialHit, hit);
          if (!disallowed) {
            mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains("fc-event-resizer-start"), eventInstance.range);
          }
        }
        if (mutation) {
          mutatedRelevantEvents = applyMutationToEventStore(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
          interaction.mutatedEvents = mutatedRelevantEvents;
          if (!isInteractionValid(interaction, hit.dateProfile, context)) {
            isInvalid = true;
            mutation = null;
            mutatedRelevantEvents = null;
            interaction.mutatedEvents = null;
          }
        }
        if (mutatedRelevantEvents) {
          context.dispatch({
            type: "SET_EVENT_RESIZE",
            state: interaction
          });
        } else {
          context.dispatch({ type: "UNSET_EVENT_RESIZE" });
        }
        if (!isInvalid) {
          enableCursor();
        } else {
          disableCursor();
        }
        if (!isFinal) {
          if (mutation && isHitsEqual(initialHit, hit)) {
            mutation = null;
          }
          this.validMutation = mutation;
          this.mutatedRelevantEvents = mutatedRelevantEvents;
        }
      };
      this.handleDragEnd = (ev) => {
        let { context } = this.component;
        let eventDef = this.eventRange.def;
        let eventInstance = this.eventRange.instance;
        let eventApi = new EventImpl(context, eventDef, eventInstance);
        let relevantEvents = this.relevantEvents;
        let mutatedRelevantEvents = this.mutatedRelevantEvents;
        context.emitter.trigger("eventResizeStop", {
          el: this.draggingSegEl,
          event: eventApi,
          jsEvent: ev.origEvent,
          view: context.viewApi
        });
        if (this.validMutation) {
          let updatedEventApi = new EventImpl(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
          context.dispatch({
            type: "MERGE_EVENTS",
            eventStore: mutatedRelevantEvents
          });
          let eventChangeArg = {
            oldEvent: eventApi,
            event: updatedEventApi,
            relatedEvents: buildEventApis(mutatedRelevantEvents, context, eventInstance),
            revert() {
              context.dispatch({
                type: "MERGE_EVENTS",
                eventStore: relevantEvents
                // the pre-change events
              });
            }
          };
          context.emitter.trigger("eventResize", Object.assign(Object.assign({}, eventChangeArg), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || createDuration(0), endDelta: this.validMutation.endDelta || createDuration(0), jsEvent: ev.origEvent, view: context.viewApi }));
          context.emitter.trigger("eventChange", eventChangeArg);
        } else {
          context.emitter.trigger("_noEventResize");
        }
        this.draggingSeg = null;
        this.relevantEvents = null;
        this.validMutation = null;
      };
      let { component } = settings;
      let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
      dragging.pointer.selector = ".fc-event-resizer";
      dragging.touchScrollAllowed = false;
      dragging.autoScroller.isEnabled = component.context.options.dragScroll;
      let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
      hitDragging.emitter.on("pointerdown", this.handlePointerDown);
      hitDragging.emitter.on("dragstart", this.handleDragStart);
      hitDragging.emitter.on("hitupdate", this.handleHitUpdate);
      hitDragging.emitter.on("dragend", this.handleDragEnd);
    }
    destroy() {
      this.dragging.destroy();
    }
    querySegEl(ev) {
      return elementClosest(ev.subjectEl, ".fc-event");
    }
  };
  function computeMutation(hit0, hit1, isFromStart, instanceRange) {
    let dateEnv = hit0.context.dateEnv;
    let date0 = hit0.dateSpan.range.start;
    let date1 = hit1.dateSpan.range.start;
    let delta = diffDates(date0, date1, dateEnv, hit0.largeUnit);
    if (isFromStart) {
      if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
        return { startDelta: delta };
      }
    } else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
      return { endDelta: delta };
    }
    return null;
  }
  var UnselectAuto = class {
    constructor(context) {
      this.context = context;
      this.isRecentPointerDateSelect = false;
      this.matchesCancel = false;
      this.matchesEvent = false;
      this.onSelect = (selectInfo) => {
        if (selectInfo.jsEvent) {
          this.isRecentPointerDateSelect = true;
        }
      };
      this.onDocumentPointerDown = (pev) => {
        let unselectCancel = this.context.options.unselectCancel;
        let downEl = getEventTargetViaRoot(pev.origEvent);
        this.matchesCancel = !!elementClosest(downEl, unselectCancel);
        this.matchesEvent = !!elementClosest(downEl, EventDragging.SELECTOR);
      };
      this.onDocumentPointerUp = (pev) => {
        let { context: context2 } = this;
        let { documentPointer: documentPointer2 } = this;
        let calendarState = context2.getCurrentData();
        if (!documentPointer2.wasTouchScroll) {
          if (calendarState.dateSelection && // an existing date selection?
          !this.isRecentPointerDateSelect) {
            let unselectAuto = context2.options.unselectAuto;
            if (unselectAuto && (!unselectAuto || !this.matchesCancel)) {
              context2.calendarApi.unselect(pev);
            }
          }
          if (calendarState.eventSelection && // an existing event selected?
          !this.matchesEvent) {
            context2.dispatch({ type: "UNSELECT_EVENT" });
          }
        }
        this.isRecentPointerDateSelect = false;
      };
      let documentPointer = this.documentPointer = new PointerDragging(document);
      documentPointer.shouldIgnoreMove = true;
      documentPointer.shouldWatchScroll = false;
      documentPointer.emitter.on("pointerdown", this.onDocumentPointerDown);
      documentPointer.emitter.on("pointerup", this.onDocumentPointerUp);
      context.emitter.on("select", this.onSelect);
    }
    destroy() {
      this.context.emitter.off("select", this.onSelect);
      this.documentPointer.destroy();
    }
  };
  var OPTION_REFINERS = {
    fixedMirrorParent: identity
  };
  var LISTENER_REFINERS = {
    dateClick: identity,
    eventDragStart: identity,
    eventDragStop: identity,
    eventDrop: identity,
    eventResizeStart: identity,
    eventResizeStop: identity,
    eventResize: identity,
    drop: identity,
    eventReceive: identity,
    eventLeave: identity
  };
  var ExternalElementDragging = class {
    constructor(dragging, suppliedDragMeta) {
      this.receivingContext = null;
      this.droppableEvent = null;
      this.suppliedDragMeta = null;
      this.dragMeta = null;
      this.handleDragStart = (ev) => {
        this.dragMeta = this.buildDragMeta(ev.subjectEl);
      };
      this.handleHitUpdate = (hit, isFinal, ev) => {
        let { dragging: dragging2 } = this.hitDragging;
        let receivingContext = null;
        let droppableEvent = null;
        let isInvalid = false;
        let interaction = {
          affectedEvents: createEmptyEventStore(),
          mutatedEvents: createEmptyEventStore(),
          isEvent: this.dragMeta.create
        };
        if (hit) {
          receivingContext = hit.context;
          if (this.canDropElOnCalendar(ev.subjectEl, receivingContext)) {
            droppableEvent = computeEventForDateSpan(hit.dateSpan, this.dragMeta, receivingContext);
            interaction.mutatedEvents = eventTupleToStore(droppableEvent);
            isInvalid = !isInteractionValid(interaction, hit.dateProfile, receivingContext);
            if (isInvalid) {
              interaction.mutatedEvents = createEmptyEventStore();
              droppableEvent = null;
            }
          }
        }
        this.displayDrag(receivingContext, interaction);
        dragging2.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector(".fc-event-mirror"));
        if (!isInvalid) {
          enableCursor();
        } else {
          disableCursor();
        }
        if (!isFinal) {
          dragging2.setMirrorNeedsRevert(!droppableEvent);
          this.receivingContext = receivingContext;
          this.droppableEvent = droppableEvent;
        }
      };
      this.handleDragEnd = (pev) => {
        let { receivingContext, droppableEvent } = this;
        this.clearDrag();
        if (receivingContext && droppableEvent) {
          let finalHit = this.hitDragging.finalHit;
          let finalView = finalHit.context.viewApi;
          let dragMeta = this.dragMeta;
          receivingContext.emitter.trigger("drop", Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), { draggedEl: pev.subjectEl, jsEvent: pev.origEvent, view: finalView }));
          if (dragMeta.create) {
            let addingEvents = eventTupleToStore(droppableEvent);
            receivingContext.dispatch({
              type: "MERGE_EVENTS",
              eventStore: addingEvents
            });
            if (pev.isTouch) {
              receivingContext.dispatch({
                type: "SELECT_EVENT",
                eventInstanceId: droppableEvent.instance.instanceId
              });
            }
            receivingContext.emitter.trigger("eventReceive", {
              event: new EventImpl(receivingContext, droppableEvent.def, droppableEvent.instance),
              relatedEvents: [],
              revert() {
                receivingContext.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: addingEvents
                });
              },
              draggedEl: pev.subjectEl,
              view: finalView
            });
          }
        }
        this.receivingContext = null;
        this.droppableEvent = null;
      };
      let hitDragging = this.hitDragging = new HitDragging(dragging, interactionSettingsStore);
      hitDragging.requireInitial = false;
      hitDragging.emitter.on("dragstart", this.handleDragStart);
      hitDragging.emitter.on("hitupdate", this.handleHitUpdate);
      hitDragging.emitter.on("dragend", this.handleDragEnd);
      this.suppliedDragMeta = suppliedDragMeta;
    }
    buildDragMeta(subjectEl) {
      if (typeof this.suppliedDragMeta === "object") {
        return parseDragMeta(this.suppliedDragMeta);
      }
      if (typeof this.suppliedDragMeta === "function") {
        return parseDragMeta(this.suppliedDragMeta(subjectEl));
      }
      return getDragMetaFromEl(subjectEl);
    }
    displayDrag(nextContext, state) {
      let prevContext = this.receivingContext;
      if (prevContext && prevContext !== nextContext) {
        prevContext.dispatch({ type: "UNSET_EVENT_DRAG" });
      }
      if (nextContext) {
        nextContext.dispatch({ type: "SET_EVENT_DRAG", state });
      }
    }
    clearDrag() {
      if (this.receivingContext) {
        this.receivingContext.dispatch({ type: "UNSET_EVENT_DRAG" });
      }
    }
    canDropElOnCalendar(el, receivingContext) {
      let dropAccept = receivingContext.options.dropAccept;
      if (typeof dropAccept === "function") {
        return dropAccept.call(receivingContext.calendarApi, el);
      }
      if (typeof dropAccept === "string" && dropAccept) {
        return Boolean(elementMatches(el, dropAccept));
      }
      return true;
    }
  };
  function computeEventForDateSpan(dateSpan, dragMeta, context) {
    let defProps = Object.assign({}, dragMeta.leftoverProps);
    for (let transform of context.pluginHooks.externalDefTransforms) {
      Object.assign(defProps, transform(dateSpan, dragMeta));
    }
    let { refined, extra } = refineEventDef(defProps, context);
    let def = parseEventDef(
      refined,
      extra,
      dragMeta.sourceId,
      dateSpan.allDay,
      context.options.forceEventDuration || Boolean(dragMeta.duration),
      // hasEnd
      context
    );
    let start = dateSpan.range.start;
    if (dateSpan.allDay && dragMeta.startTime) {
      start = context.dateEnv.add(start, dragMeta.startTime);
    }
    let end = dragMeta.duration ? context.dateEnv.add(start, dragMeta.duration) : getDefaultEventEnd(dateSpan.allDay, start, context);
    let instance = createEventInstance(def.defId, { start, end });
    return { def, instance };
  }
  function getDragMetaFromEl(el) {
    let str = getEmbeddedElData(el, "event");
    let obj = str ? JSON.parse(str) : { create: false };
    return parseDragMeta(obj);
  }
  config.dataAttrPrefix = "";
  function getEmbeddedElData(el, name) {
    let prefix = config.dataAttrPrefix;
    let prefixedName = (prefix ? prefix + "-" : "") + name;
    return el.getAttribute("data-" + prefixedName) || "";
  }
  var ExternalDraggable = class {
    constructor(el, settings = {}) {
      this.handlePointerDown = (ev) => {
        let { dragging: dragging2 } = this;
        let { minDistance, longPressDelay } = this.settings;
        dragging2.minDistance = minDistance != null ? minDistance : ev.isTouch ? 0 : BASE_OPTION_DEFAULTS.eventDragMinDistance;
        dragging2.delay = ev.isTouch ? (
          // TODO: eventually read eventLongPressDelay instead vvv
          longPressDelay != null ? longPressDelay : BASE_OPTION_DEFAULTS.longPressDelay
        ) : 0;
      };
      this.handleDragStart = (ev) => {
        if (ev.isTouch && this.dragging.delay && ev.subjectEl.classList.contains("fc-event")) {
          this.dragging.mirror.getMirrorEl().classList.add("fc-event-selected");
        }
      };
      this.settings = settings;
      let dragging = this.dragging = new FeaturefulElementDragging(el);
      dragging.touchScrollAllowed = false;
      if (settings.itemSelector != null) {
        dragging.pointer.selector = settings.itemSelector;
      }
      if (settings.appendTo != null) {
        dragging.mirror.parentNode = settings.appendTo;
      }
      dragging.emitter.on("pointerdown", this.handlePointerDown);
      dragging.emitter.on("dragstart", this.handleDragStart);
      new ExternalElementDragging(dragging, settings.eventData);
    }
    destroy() {
      this.dragging.destroy();
    }
  };
  var index = createPlugin({
    name: "@fullcalendar/interaction",
    componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
    calendarInteractions: [UnselectAuto],
    elementDraggingImpl: FeaturefulElementDragging,
    optionRefiners: OPTION_REFINERS,
    listenerRefiners: LISTENER_REFINERS
  });

  // src/js/vendors/calendar/plugins/interaction.js
  window.interactionPlugin = index;
  window.Draggable = ExternalDraggable;
})();
