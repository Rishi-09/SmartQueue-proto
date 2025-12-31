(function () {
  "use strict";
  var Y,
    w,
    Te,
    O,
    $e,
    Re,
    Le,
    Pe,
    le,
    ae,
    ce,
    z = {},
    He = [],
    bt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    K = Array.isArray;
  function H(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function ue(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function wt(e, t, n) {
    var r,
      s,
      o,
      i = {};
    for (o in t)
      o == "key" ? (r = t[o]) : o == "ref" ? (s = t[o]) : (i[o] = t[o]);
    if (
      (arguments.length > 2 &&
        (i.children = arguments.length > 3 ? Y.call(arguments, 2) : n),
      typeof e == "function" && e.defaultProps != null)
    )
      for (o in e.defaultProps) i[o] === void 0 && (i[o] = e.defaultProps[o]);
    return J(e, i, r, s, null);
  }
  function J(e, t, n, r, s) {
    var o = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: s ?? ++Te,
      __i: -1,
      __u: 0,
    };
    return s == null && w.vnode != null && w.vnode(o), o;
  }
  function M(e) {
    return e.children;
  }
  function Q(e, t) {
    (this.props = e), (this.context = t);
  }
  function N(e, t) {
    if (t == null) return e.__ ? N(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
    return typeof e.type == "function" ? N(e) : null;
  }
  function Ae(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return Ae(e);
    }
  }
  function Ie(e) {
    ((!e.__d && (e.__d = !0) && O.push(e) && !Z.__r++) ||
      $e != w.debounceRendering) &&
      (($e = w.debounceRendering) || Re)(Z);
  }
  function Z() {
    for (var e, t, n, r, s, o, i, a = 1; O.length; )
      O.length > a && O.sort(Le),
        (e = O.shift()),
        (a = O.length),
        e.__d &&
          ((n = void 0),
          (r = void 0),
          (s = (r = (t = e).__v).__e),
          (o = []),
          (i = []),
          t.__P &&
            (((n = H({}, r)).__v = r.__v + 1),
            w.vnode && w.vnode(n),
            _e(
              t.__P,
              n,
              r,
              t.__n,
              t.__P.namespaceURI,
              32 & r.__u ? [s] : null,
              o,
              s ?? N(r),
              !!(32 & r.__u),
              i
            ),
            (n.__v = r.__v),
            (n.__.__k[n.__i] = n),
            Fe(o, n, i),
            (r.__e = r.__ = null),
            n.__e != s && Ae(n)));
    Z.__r = 0;
  }
  function Oe(e, t, n, r, s, o, i, a, c, u, d) {
    var l,
      f,
      _,
      p,
      b,
      g,
      m,
      y = (r && r.__k) || He,
      x = t.length;
    for (c = vt(n, t, y, c, x), l = 0; l < x; l++)
      (_ = n.__k[l]) != null &&
        ((f = _.__i == -1 ? z : y[_.__i] || z),
        (_.__i = l),
        (g = _e(e, _, f, s, o, i, a, c, u, d)),
        (p = _.__e),
        _.ref &&
          f.ref != _.ref &&
          (f.ref && fe(f.ref, null, _), d.push(_.ref, _.__c || p, _)),
        b == null && p != null && (b = p),
        (m = !!(4 & _.__u)) || f.__k === _.__k
          ? (c = Me(_, c, e, m))
          : typeof _.type == "function" && g !== void 0
          ? (c = g)
          : p && (c = p.nextSibling),
        (_.__u &= -7));
    return (n.__e = b), c;
  }
  function vt(e, t, n, r, s) {
    var o,
      i,
      a,
      c,
      u,
      d = n.length,
      l = d,
      f = 0;
    for (e.__k = new Array(s), o = 0; o < s; o++)
      (i = t[o]) != null && typeof i != "boolean" && typeof i != "function"
        ? ((c = o + f),
          ((i = e.__k[o] =
            typeof i == "string" ||
            typeof i == "number" ||
            typeof i == "bigint" ||
            i.constructor == String
              ? J(null, i, null, null, null)
              : K(i)
              ? J(M, { children: i }, null, null, null)
              : i.constructor == null && i.__b > 0
              ? J(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
              : i).__ = e),
          (i.__b = e.__b + 1),
          (a = null),
          (u = i.__i = Et(i, n, c, l)) != -1 &&
            (l--, (a = n[u]) && (a.__u |= 2)),
          a == null || a.__v == null
            ? (u == -1 && (s > d ? f-- : s < d && f++),
              typeof i.type != "function" && (i.__u |= 4))
            : u != c &&
              (u == c - 1
                ? f--
                : u == c + 1
                ? f++
                : (u > c ? f-- : f++, (i.__u |= 4))))
        : (e.__k[o] = null);
    if (l)
      for (o = 0; o < d; o++)
        (a = n[o]) != null &&
          (2 & a.__u) == 0 &&
          (a.__e == r && (r = N(a)), Be(a, a));
    return r;
  }
  function Me(e, t, n, r) {
    var s, o;
    if (typeof e.type == "function") {
      for (s = e.__k, o = 0; s && o < s.length; o++)
        s[o] && ((s[o].__ = e), (t = Me(s[o], t, n, r)));
      return t;
    }
    e.__e != t &&
      (r &&
        (t && e.type && !t.parentNode && (t = N(e)),
        n.insertBefore(e.__e, t || null)),
      (t = e.__e));
    do t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t;
  }
  function Et(e, t, n, r) {
    var s,
      o,
      i,
      a = e.key,
      c = e.type,
      u = t[n],
      d = u != null && (2 & u.__u) == 0;
    if ((u === null && e.key == null) || (d && a == u.key && c == u.type))
      return n;
    if (r > (d ? 1 : 0)) {
      for (s = n - 1, o = n + 1; s >= 0 || o < t.length; )
        if (
          (u = t[(i = s >= 0 ? s-- : o++)]) != null &&
          (2 & u.__u) == 0 &&
          a == u.key &&
          c == u.type
        )
          return i;
    }
    return -1;
  }
  function Ne(e, t, n) {
    t[0] == "-"
      ? e.setProperty(t, n ?? "")
      : (e[t] =
          n == null ? "" : typeof n != "number" || bt.test(t) ? n : n + "px");
  }
  function ee(e, t, n, r, s) {
    var o, i;
    e: if (t == "style")
      if (typeof n == "string") e.style.cssText = n;
      else {
        if ((typeof r == "string" && (e.style.cssText = r = ""), r))
          for (t in r) (n && t in n) || Ne(e.style, t, "");
        if (n) for (t in n) (r && n[t] == r[t]) || Ne(e.style, t, n[t]);
      }
    else if (t[0] == "o" && t[1] == "n")
      (o = t != (t = t.replace(Pe, "$1"))),
        (i = t.toLowerCase()),
        (t =
          i in e || t == "onFocusOut" || t == "onFocusIn"
            ? i.slice(2)
            : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + o] = n),
        n
          ? r
            ? (n.u = r.u)
            : ((n.u = le), e.addEventListener(t, o ? ce : ae, o))
          : e.removeEventListener(t, o ? ce : ae, o);
    else {
      if (s == "http://www.w3.org/2000/svg")
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        t != "width" &&
        t != "height" &&
        t != "href" &&
        t != "list" &&
        t != "form" &&
        t != "tabIndex" &&
        t != "download" &&
        t != "rowSpan" &&
        t != "colSpan" &&
        t != "role" &&
        t != "popover" &&
        t in e
      )
        try {
          e[t] = n ?? "";
          break e;
        } catch {}
      typeof n == "function" ||
        (n == null || (n === !1 && t[4] != "-")
          ? e.removeAttribute(t)
          : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
    }
  }
  function De(e) {
    return function (t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (t.t == null) t.t = le++;
        else if (t.t < n.u) return;
        return n(w.event ? w.event(t) : t);
      }
    };
  }
  function _e(e, t, n, r, s, o, i, a, c, u) {
    var d,
      l,
      f,
      _,
      p,
      b,
      g,
      m,
      y,
      x,
      C,
      B,
      G,
      yt,
      ie,
      X,
      xe,
      P = t.type;
    if (t.constructor != null) return null;
    128 & n.__u && ((c = !!(32 & n.__u)), (o = [(a = t.__e = n.__e)])),
      (d = w.__b) && d(t);
    e: if (typeof P == "function")
      try {
        if (
          ((m = t.props),
          (y = "prototype" in P && P.prototype.render),
          (x = (d = P.contextType) && r[d.__c]),
          (C = d ? (x ? x.props.value : d.__) : r),
          n.__c
            ? (g = (l = t.__c = n.__c).__ = l.__E)
            : (y
                ? (t.__c = l = new P(m, C))
                : ((t.__c = l = new Q(m, C)),
                  (l.constructor = P),
                  (l.render = Ct)),
              x && x.sub(l),
              (l.props = m),
              l.state || (l.state = {}),
              (l.context = C),
              (l.__n = r),
              (f = l.__d = !0),
              (l.__h = []),
              (l._sb = [])),
          y && l.__s == null && (l.__s = l.state),
          y &&
            P.getDerivedStateFromProps != null &&
            (l.__s == l.state && (l.__s = H({}, l.__s)),
            H(l.__s, P.getDerivedStateFromProps(m, l.__s))),
          (_ = l.props),
          (p = l.state),
          (l.__v = t),
          f)
        )
          y &&
            P.getDerivedStateFromProps == null &&
            l.componentWillMount != null &&
            l.componentWillMount(),
            y && l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (
            (y &&
              P.getDerivedStateFromProps == null &&
              m !== _ &&
              l.componentWillReceiveProps != null &&
              l.componentWillReceiveProps(m, C),
            (!l.__e &&
              l.shouldComponentUpdate != null &&
              l.shouldComponentUpdate(m, l.__s, C) === !1) ||
              t.__v == n.__v)
          ) {
            for (
              t.__v != n.__v &&
                ((l.props = m), (l.state = l.__s), (l.__d = !1)),
                t.__e = n.__e,
                t.__k = n.__k,
                t.__k.some(function (V) {
                  V && (V.__ = t);
                }),
                B = 0;
              B < l._sb.length;
              B++
            )
              l.__h.push(l._sb[B]);
            (l._sb = []), l.__h.length && i.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, C),
            y &&
              l.componentDidUpdate != null &&
              l.__h.push(function () {
                l.componentDidUpdate(_, p, b);
              });
        }
        if (
          ((l.context = C),
          (l.props = m),
          (l.__P = e),
          (l.__e = !1),
          (G = w.__r),
          (yt = 0),
          y)
        ) {
          for (
            l.state = l.__s,
              l.__d = !1,
              G && G(t),
              d = l.render(l.props, l.state, l.context),
              ie = 0;
            ie < l._sb.length;
            ie++
          )
            l.__h.push(l._sb[ie]);
          l._sb = [];
        } else
          do
            (l.__d = !1),
              G && G(t),
              (d = l.render(l.props, l.state, l.context)),
              (l.state = l.__s);
          while (l.__d && ++yt < 25);
        (l.state = l.__s),
          l.getChildContext != null && (r = H(H({}, r), l.getChildContext())),
          y &&
            !f &&
            l.getSnapshotBeforeUpdate != null &&
            (b = l.getSnapshotBeforeUpdate(_, p)),
          (X = d),
          d != null &&
            d.type === M &&
            d.key == null &&
            (X = Ue(d.props.children)),
          (a = Oe(e, K(X) ? X : [X], t, n, r, s, o, i, a, c, u)),
          (l.base = t.__e),
          (t.__u &= -161),
          l.__h.length && i.push(l),
          g && (l.__E = l.__ = null);
      } catch (V) {
        if (((t.__v = null), c || o != null))
          if (V.then) {
            for (
              t.__u |= c ? 160 : 128;
              a && a.nodeType == 8 && a.nextSibling;

            )
              a = a.nextSibling;
            (o[o.indexOf(a)] = null), (t.__e = a);
          } else {
            for (xe = o.length; xe--; ) ue(o[xe]);
            he(t);
          }
        else (t.__e = n.__e), (t.__k = n.__k), V.then || he(t);
        w.__e(V, t, n);
      }
    else
      o == null && t.__v == n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (a = t.__e = St(n.__e, t, n, r, s, o, i, c, u));
    return (d = w.diffed) && d(t), 128 & t.__u ? void 0 : a;
  }
  function he(e) {
    e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(he);
  }
  function Fe(e, t, n) {
    for (var r = 0; r < n.length; r++) fe(n[r], n[++r], n[++r]);
    w.__c && w.__c(t, e),
      e.some(function (s) {
        try {
          (e = s.__h),
            (s.__h = []),
            e.some(function (o) {
              o.call(s);
            });
        } catch (o) {
          w.__e(o, s.__v);
        }
      });
  }
  function Ue(e) {
    return typeof e != "object" || e == null || (e.__b && e.__b > 0)
      ? e
      : K(e)
      ? e.map(Ue)
      : H({}, e);
  }
  function St(e, t, n, r, s, o, i, a, c) {
    var u,
      d,
      l,
      f,
      _,
      p,
      b,
      g = n.props,
      m = t.props,
      y = t.type;
    if (
      (y == "svg"
        ? (s = "http://www.w3.org/2000/svg")
        : y == "math"
        ? (s = "http://www.w3.org/1998/Math/MathML")
        : s || (s = "http://www.w3.org/1999/xhtml"),
      o != null)
    ) {
      for (u = 0; u < o.length; u++)
        if (
          (_ = o[u]) &&
          "setAttribute" in _ == !!y &&
          (y ? _.localName == y : _.nodeType == 3)
        ) {
          (e = _), (o[u] = null);
          break;
        }
    }
    if (e == null) {
      if (y == null) return document.createTextNode(m);
      (e = document.createElementNS(s, y, m.is && m)),
        a && (w.__m && w.__m(t, o), (a = !1)),
        (o = null);
    }
    if (y == null) g === m || (a && e.data == m) || (e.data = m);
    else {
      if (
        ((o = o && Y.call(e.childNodes)), (g = n.props || z), !a && o != null)
      )
        for (g = {}, u = 0; u < e.attributes.length; u++)
          g[(_ = e.attributes[u]).name] = _.value;
      for (u in g)
        if (((_ = g[u]), u != "children")) {
          if (u == "dangerouslySetInnerHTML") l = _;
          else if (!(u in m)) {
            if (
              (u == "value" && "defaultValue" in m) ||
              (u == "checked" && "defaultChecked" in m)
            )
              continue;
            ee(e, u, null, _, s);
          }
        }
      for (u in m)
        (_ = m[u]),
          u == "children"
            ? (f = _)
            : u == "dangerouslySetInnerHTML"
            ? (d = _)
            : u == "value"
            ? (p = _)
            : u == "checked"
            ? (b = _)
            : (a && typeof _ != "function") ||
              g[u] === _ ||
              ee(e, u, _, g[u], s);
      if (d)
        a ||
          (l && (d.__html == l.__html || d.__html == e.innerHTML)) ||
          (e.innerHTML = d.__html),
          (t.__k = []);
      else if (
        (l && (e.innerHTML = ""),
        Oe(
          t.type == "template" ? e.content : e,
          K(f) ? f : [f],
          t,
          n,
          r,
          y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s,
          o,
          i,
          o ? o[0] : n.__k && N(n, 0),
          a,
          c
        ),
        o != null)
      )
        for (u = o.length; u--; ) ue(o[u]);
      a ||
        ((u = "value"),
        y == "progress" && p == null
          ? e.removeAttribute("value")
          : p != null &&
            (p !== e[u] ||
              (y == "progress" && !p) ||
              (y == "option" && p != g[u])) &&
            ee(e, u, p, g[u], s),
        (u = "checked"),
        b != null && b != e[u] && ee(e, u, b, g[u], s));
    }
    return e;
  }
  function fe(e, t, n) {
    try {
      if (typeof e == "function") {
        var r = typeof e.__u == "function";
        r && e.__u(), (r && t == null) || (e.__u = e(t));
      } else e.current = t;
    } catch (s) {
      w.__e(s, n);
    }
  }
  function Be(e, t, n) {
    var r, s;
    if (
      (w.unmount && w.unmount(e),
      (r = e.ref) && ((r.current && r.current != e.__e) || fe(r, null, t)),
      (r = e.__c) != null)
    ) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (o) {
          w.__e(o, t);
        }
      r.base = r.__P = null;
    }
    if ((r = e.__k))
      for (s = 0; s < r.length; s++)
        r[s] && Be(r[s], t, n || typeof e.type != "function");
    n || ue(e.__e), (e.__c = e.__ = e.__e = void 0);
  }
  function Ct(e, t, n) {
    return this.constructor(e, n);
  }
  function kt(e, t, n) {
    var r, s, o, i;
    t == document && (t = document.documentElement),
      w.__ && w.__(e, t),
      (s = (r = !1) ? null : t.__k),
      (o = []),
      (i = []),
      _e(
        t,
        (e = t.__k = wt(M, null, [e])),
        s || z,
        z,
        t.namespaceURI,
        s ? null : t.firstChild ? Y.call(t.childNodes) : null,
        o,
        s ? s.__e : t.firstChild,
        r,
        i
      ),
      Fe(o, e, i);
  }
  (Y = He.slice),
    (w = {
      __e: function (e, t, n, r) {
        for (var s, o, i; (t = t.__); )
          if ((s = t.__c) && !s.__)
            try {
              if (
                ((o = s.constructor) &&
                  o.getDerivedStateFromError != null &&
                  (s.setState(o.getDerivedStateFromError(e)), (i = s.__d)),
                s.componentDidCatch != null &&
                  (s.componentDidCatch(e, r || {}), (i = s.__d)),
                i)
              )
                return (s.__E = s);
            } catch (a) {
              e = a;
            }
        throw e;
      },
    }),
    (Te = 0),
    (Q.prototype.setState = function (e, t) {
      var n;
      (n =
        this.__s != null && this.__s != this.state
          ? this.__s
          : (this.__s = H({}, this.state))),
        typeof e == "function" && (e = e(H({}, n), this.props)),
        e && H(n, e),
        e != null && this.__v && (t && this._sb.push(t), Ie(this));
    }),
    (Q.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), Ie(this));
    }),
    (Q.prototype.render = M),
    (O = []),
    (Re =
      typeof Promise == "function"
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (Le = function (e, t) {
      return e.__v.__b - t.__v.__b;
    }),
    (Z.__r = 0),
    (Pe = /(PointerCapture)$|Capture$/i),
    (le = 0),
    (ae = De(!1)),
    (ce = De(!0));
  var xt = 0;
  function h(e, t, n, r, s, o) {
    t || (t = {});
    var i,
      a,
      c = t;
    if ("ref" in c)
      for (a in ((c = {}), t)) a == "ref" ? (i = t[a]) : (c[a] = t[a]);
    var u = {
      type: e,
      props: c,
      key: n,
      ref: i,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: --xt,
      __i: -1,
      __u: 0,
      __source: s,
      __self: o,
    };
    if (typeof e == "function" && (i = e.defaultProps))
      for (a in i) c[a] === void 0 && (c[a] = i[a]);
    return w.vnode && w.vnode(u), u;
  }
  var W,
    v,
    de,
    Ve,
    j = 0,
    ze = [],
    E = w,
    We = E.__b,
    je = E.__r,
    qe = E.diffed,
    Ge = E.__c,
    Xe = E.unmount,
    Ye = E.__;
  function me(e, t) {
    E.__h && E.__h(v, e, j || t), (j = 0);
    var n = v.__H || (v.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function T(e) {
    return (j = 1), Tt(et, e);
  }
  function Tt(e, t, n) {
    var r = me(W++, 2);
    if (
      ((r.t = e),
      !r.__c &&
        ((r.__ = [
          et(void 0, t),
          function (a) {
            var c = r.__N ? r.__N[0] : r.__[0],
              u = r.t(c, a);
            c !== u && ((r.__N = [u, r.__[1]]), r.__c.setState({}));
          },
        ]),
        (r.__c = v),
        !v.__f))
    ) {
      var s = function (a, c, u) {
        if (!r.__c.__H) return !0;
        var d = r.__c.__H.__.filter(function (f) {
          return !!f.__c;
        });
        if (
          d.every(function (f) {
            return !f.__N;
          })
        )
          return !o || o.call(this, a, c, u);
        var l = r.__c.props !== a;
        return (
          d.forEach(function (f) {
            if (f.__N) {
              var _ = f.__[0];
              (f.__ = f.__N), (f.__N = void 0), _ !== f.__[0] && (l = !0);
            }
          }),
          (o && o.call(this, a, c, u)) || l
        );
      };
      v.__f = !0;
      var o = v.shouldComponentUpdate,
        i = v.componentWillUpdate;
      (v.componentWillUpdate = function (a, c, u) {
        if (this.__e) {
          var d = o;
          (o = void 0), s(a, c, u), (o = d);
        }
        i && i.call(this, a, c, u);
      }),
        (v.shouldComponentUpdate = s);
    }
    return r.__N || r.__;
  }
  function L(e, t) {
    var n = me(W++, 3);
    !E.__s && Ze(n.__H, t) && ((n.__ = e), (n.u = t), v.__H.__h.push(n));
  }
  function Ke(e) {
    return (
      (j = 5),
      Je(function () {
        return { current: e };
      }, [])
    );
  }
  function Je(e, t) {
    var n = me(W++, 7);
    return Ze(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
  }
  function pe(e, t) {
    return (
      (j = 8),
      Je(function () {
        return e;
      }, t)
    );
  }
  function $t() {
    for (var e; (e = ze.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(te), e.__H.__h.forEach(ge), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), E.__e(t, e.__v);
        }
  }
  (E.__b = function (e) {
    (v = null), We && We(e);
  }),
    (E.__ = function (e, t) {
      e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ye && Ye(e, t);
    }),
    (E.__r = function (e) {
      je && je(e), (W = 0);
      var t = (v = e.__c).__H;
      t &&
        (de === v
          ? ((t.__h = []),
            (v.__h = []),
            t.__.forEach(function (n) {
              n.__N && (n.__ = n.__N), (n.u = n.__N = void 0);
            }))
          : (t.__h.forEach(te), t.__h.forEach(ge), (t.__h = []), (W = 0))),
        (de = v);
    }),
    (E.diffed = function (e) {
      qe && qe(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((ze.push(t) !== 1 && Ve === E.requestAnimationFrame) ||
            ((Ve = E.requestAnimationFrame) || Rt)($t)),
        t.__H.__.forEach(function (n) {
          n.u && (n.__H = n.u), (n.u = void 0);
        })),
        (de = v = null);
    }),
    (E.__c = function (e, t) {
      t.some(function (n) {
        try {
          n.__h.forEach(te),
            (n.__h = n.__h.filter(function (r) {
              return !r.__ || ge(r);
            }));
        } catch (r) {
          t.some(function (s) {
            s.__h && (s.__h = []);
          }),
            (t = []),
            E.__e(r, n.__v);
        }
      }),
        Ge && Ge(e, t);
    }),
    (E.unmount = function (e) {
      Xe && Xe(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (r) {
          try {
            te(r);
          } catch (s) {
            t = s;
          }
        }),
        (n.__H = void 0),
        t && E.__e(t, n.__v));
    });
  var Qe = typeof requestAnimationFrame == "function";
  function Rt(e) {
    var t,
      n = function () {
        clearTimeout(r), Qe && cancelAnimationFrame(t), setTimeout(e);
      },
      r = setTimeout(n, 35);
    Qe && (t = requestAnimationFrame(n));
  }
  function te(e) {
    var t = v,
      n = e.__c;
    typeof n == "function" && ((e.__c = void 0), n()), (v = t);
  }
  function ge(e) {
    var t = v;
    (e.__c = e.__()), (v = t);
  }
  function Ze(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (n, r) {
        return n !== e[r];
      })
    );
  }
  function et(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  const ne = {
    overlay: "_overlay_15zzt_1",
    instructions: "_instructions_15zzt_14",
    hint: "_hint_15zzt_33",
    selection: "_selection_15zzt_39",
  };
  function Lt({ onSelectionComplete: e, onCancel: t }) {
    const [n, r] = T(!1),
      [s, o] = T(null),
      [i, a] = T(null),
      c = Ke(null),
      [u, d] = T(0),
      l = (_, p) => {
        const b = Math.min(_.x, p.x),
          g = Math.min(_.y, p.y),
          m = Math.abs(p.x - _.x),
          y = Math.abs(p.y - _.y);
        return { x: b, y: g, width: m, height: y };
      };
    L(() => {
      const _ = () => {
        const p = document.body,
          b = document.documentElement,
          g = Math.max(
            p.scrollHeight,
            p.offsetHeight,
            b.clientHeight,
            b.scrollHeight,
            b.offsetHeight
          );
        d(g);
      };
      return (
        _(),
        window.addEventListener("resize", _),
        () => window.removeEventListener("resize", _)
      );
    }, []),
      L(() => {
        const _ = (m) => {
            m.target === c.current &&
              (r(!0),
              o({
                x: m.clientX + window.scrollX,
                y: m.clientY + window.scrollY,
              }),
              a({
                x: m.clientX + window.scrollX,
                y: m.clientY + window.scrollY,
              }));
          },
          p = (m) => {
            n &&
              s &&
              a({
                x: m.clientX + window.scrollX,
                y: m.clientY + window.scrollY,
              });
          },
          b = () => {
            if (n && s && i) {
              const m = l(s, i);
              m.width > 10 && m.height > 10 && e(m), r(!1), o(null), a(null);
            }
          },
          g = (m) => {
            m.key === "Escape" && t();
          };
        return (
          document.addEventListener("mousedown", _),
          document.addEventListener("mousemove", p),
          document.addEventListener("mouseup", b),
          document.addEventListener("keydown", g),
          () => {
            document.removeEventListener("mousedown", _),
              document.removeEventListener("mousemove", p),
              document.removeEventListener("mouseup", b),
              document.removeEventListener("keydown", g);
          }
        );
      }, [n, s, i, e, t]);
    const f = () => {
      if (!s || !i) return {};
      const _ = l(s, i);
      return {
        left: `${_.x}px`,
        top: `${_.y}px`,
        width: `${_.width}px`,
        height: `${_.height}px`,
      };
    };
    return h("div", {
      className: `${ne.overlay} rocket-shot-overlay screenshot-overlay`,
      ref: c,
      style: { height: u > 0 ? `${u}px` : "100vh" },
      children: [
        h("div", {
          className: ne.instructions,
          style: { position: "fixed" },
          children: [
            h("p", {
              children: "Click and drag to select an area for screenshot",
            }),
            h("p", { className: ne.hint, children: "Press ESC to cancel" }),
          ],
        }),
        n && s && i && h("div", { className: ne.selection, style: f() }),
      ],
    });
  }
  const R = {
    editor: "_editor_1jyhj_1",
    animating: "_animating_1jyhj_14",
    editorContent: "_editorContent_1jyhj_18",
    toolbar: "_toolbar_1jyhj_26",
    toolGroup: "_toolGroup_1jyhj_37",
    actionGroup: "_actionGroup_1jyhj_95",
    actionButton: "_actionButton_1jyhj_101",
    canvasContainer: "_canvasContainer_1jyhj_142",
    canvas: "_canvas_1jyhj_142",
  };
  function Pt({ isVisible: e, screenshot: t, onClose: n }) {
    const [r] = T("highlight"),
      [s, o] = T(!1),
      [i, a] = T([]),
      c = Ke(null),
      [u, d] = T(!1);
    L(() => {
      if (e) {
        const g = setTimeout(() => d(!0), 10);
        return () => clearTimeout(g);
      } else d(!1);
    }, [e]),
      L(() => {
        if (t && c.current) {
          const g = c.current,
            m = g.getContext("2d");
          if (m) {
            const y = new Image();
            (y.onload = () => {
              (g.width = y.width), (g.height = y.height), m.drawImage(y, 0, 0);
            }),
              (y.src = t.dataUrl);
          }
        }
      }, [t]);
    const l = (g) => {
        if (r === "draw") {
          o(!0);
          const m = c.current?.getBoundingClientRect();
          if (m) {
            const y = g.clientX - m.left,
              x = g.clientY - m.top;
            a([{ x: y, y: x }]);
          }
        }
      },
      f = (g) => {
        if (s && r === "draw") {
          const m = c.current?.getBoundingClientRect();
          if (m) {
            const y = g.clientX - m.left,
              x = g.clientY - m.top;
            a((B) => [...B, { x: y, y: x }]);
            const C = c.current?.getContext("2d");
            C &&
              ((C.strokeStyle = "#ff0000"),
              (C.lineWidth = 3),
              (C.lineCap = "round"),
              C.beginPath(),
              C.moveTo(i[i.length - 1]?.x || y, i[i.length - 1]?.y || x),
              C.lineTo(y, x),
              C.stroke());
          }
        }
      },
      _ = () => {
        o(!1), a([]);
      },
      p = () => {
        if (c.current) {
          const g = document.createElement("a");
          (g.download = `screenshot-${Date.now()}.png`),
            (g.href = c.current.toDataURL("image/png")),
            document.body.appendChild(g),
            g.click(),
            document.body.removeChild(g);
        }
      },
      b = () => {
        if (c.current && t)
          try {
            window.parent.postMessage(
              {
                type: "screenshot-upload",
                data: {
                  dataUrl: c.current.toDataURL("image/png"),
                  width: c.current.width,
                  height: c.current.height,
                  timestamp: Date.now(),
                },
              },
              "*"
            ),
              n();
          } catch (g) {
            console.log("Upload failed:", g);
          }
      };
    return !e || !t
      ? null
      : h("div", {
          className: `${R.editor} ${u ? R.animating : ""} rocket-shot-overlay`,
          children: h("div", {
            className: R.editorContent,
            children: [
              h("div", {
                className: R.toolbar,
                children: [
                  h("div", { className: R.toolGroup }),
                  h("div", {
                    className: R.actionGroup,
                    children: [
                      h("button", {
                        className: R.actionButton,
                        onClick: b,
                        title: "Upload",
                        children: h("svg", {
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          children: [
                            h("path", {
                              d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
                            }),
                            h("polyline", { points: "17,8 12,3 7,8" }),
                            h("line", {
                              x1: "12",
                              y1: "3",
                              x2: "12",
                              y2: "15",
                            }),
                          ],
                        }),
                      }),
                      h("button", {
                        className: R.actionButton,
                        onClick: p,
                        title: "Download",
                        children: h("svg", {
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          children: [
                            h("path", {
                              d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
                            }),
                            h("polyline", { points: "7,10 12,15 17,10" }),
                            h("line", {
                              x1: "12",
                              y1: "15",
                              x2: "12",
                              y2: "3",
                            }),
                          ],
                        }),
                      }),
                      h("button", {
                        className: R.actionButton,
                        onClick: n,
                        title: "Close",
                        children: h("svg", {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          children: [
                            h("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                            h("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              h("div", {
                className: R.canvasContainer,
                children: h("canvas", {
                  ref: c,
                  className: R.canvas,
                  onMouseDown: l,
                  onMouseMove: f,
                  onMouseUp: _,
                  onMouseLeave: _,
                }),
              }),
            ],
          }),
        });
  }
  const D = {
    thumbnail: "_thumbnail_z5v54_1",
    animating: "_animating_z5v54_14",
    thumbnailContent: "_thumbnailContent_z5v54_20",
    previewImage: "_previewImage_z5v54_39",
    actions: "_actions_z5v54_55",
    actionButton: "_actionButton_z5v54_71",
  };
  function Ht({
    isVisible: e,
    screenshot: t,
    onOpenEditor: n,
    onDismiss: r,
    autoHideDelay: s = 5e3,
  }) {
    const [o, i] = T(!1),
      [a, c] = T(null);
    L(() => {
      if (e && t) {
        const l = setTimeout(() => i(!0), 10),
          f = setTimeout(() => {
            r();
          }, s);
        return (
          c(f),
          () => {
            clearTimeout(l), clearTimeout(f), c(null);
          }
        );
      } else i(!1);
    }, [e, t, s, r]);
    const u = () => {
        a && (clearTimeout(a), c(null)), n();
      },
      d = () => {
        a && (clearTimeout(a), c(null)), r();
      };
    return !e || !t
      ? null
      : h("div", {
          className: `${D.thumbnail} ${
            o ? D.animating : ""
          } rocket-shot-overlay`,
          children: h("div", {
            className: D.thumbnailContent,
            children: [
              h("img", {
                src: t.dataUrl,
                alt: "Screenshot preview",
                className: D.previewImage,
                onClick: u,
              }),
              h("div", {
                className: D.actions,
                children: h("button", {
                  className: D.actionButton,
                  onClick: d,
                  title: "Dismiss",
                  children: "Ã—",
                }),
              }),
            ],
          }),
        });
  }
  const S = {
    toolbar: "_toolbar_2c7bz_1",
    animating: "_animating_2c7bz_14",
    toolbarContent: "_toolbarContent_2c7bz_20",
    toolbarButton: "_toolbarButton_2c7bz_34",
    icon: "_icon_2c7bz_78",
    label: "_label_2c7bz_87",
    separator: "_separator_2c7bz_103",
    processing: "_processing_2c7bz_144",
    progressContent: "_progressContent_2c7bz_148",
    progressSpinner: "_progressSpinner_2c7bz_156",
    spinnerIcon: "_spinnerIcon_2c7bz_165",
    progressInfo: "_progressInfo_2c7bz_178",
    progressMessage: "_progressMessage_2c7bz_185",
    progressBar: "_progressBar_2c7bz_192",
    progressFill: "_progressFill_2c7bz_200",
    cancelButton: "_cancelButton_2c7bz_228",
  };
  function At({
    isVisible: e,
    onCaptureMode: t,
    onClose: n,
    isProcessing: r = !1,
    progressMessage: s = "Processing...",
    onCancel: o,
  }) {
    const [i, a] = T(!1),
      [c, u] = T(0);
    L(() => {
      if (e) {
        const f = setTimeout(() => a(!0), 10);
        return () => clearTimeout(f);
      } else a(!1);
    }, [e]),
      L(() => {
        if (r) {
          u(0);
          const f = setInterval(() => {
            u((_) => (_ >= 90 ? _ : _ + Math.random() * 15));
          }, 200);
          return () => {
            clearInterval(f), u(0);
          };
        } else u(0);
      }, [r]);
    const d = (f) => {
        t(f);
      },
      l = pe(
        (f) => {
          f.key === "Escape" && (r && o ? o() : n());
        },
        [n, o, r]
      );
    return (
      L(() => {
        if (e)
          return (
            document.addEventListener("keydown", l),
            () => document.removeEventListener("keydown", l)
          );
      }, [e, l]),
      e
        ? h("div", {
            className: `${S.toolbar} ${i ? S.animating : ""} ${
              r ? S.processing : ""
            } rocket-shot-overlay`,
            children: h("div", {
              className: S.toolbarContent,
              children: r
                ? h("div", {
                    className: S.progressContent,
                    children: [
                      h("div", {
                        className: S.progressSpinner,
                        children: h("svg", {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          className: S.spinnerIcon,
                          children: [
                            h("circle", { cx: "12", cy: "12", r: "10" }),
                            h("path", { d: "M8 12l2 2 4-4" }),
                          ],
                        }),
                      }),
                      h("div", {
                        className: S.progressInfo,
                        children: [
                          h("span", {
                            className: S.progressMessage,
                            children: s,
                          }),
                          h("div", {
                            className: S.progressBar,
                            children: h("div", {
                              className: S.progressFill,
                              style: { width: `${Math.min(c, 100)}%` },
                            }),
                          }),
                        ],
                      }),
                      o &&
                        h("button", {
                          className: S.cancelButton,
                          onClick: o,
                          title: "Cancel (ESC)",
                          children: h("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                              h("line", {
                                x1: "18",
                                y1: "6",
                                x2: "6",
                                y2: "18",
                              }),
                              h("line", {
                                x1: "6",
                                y1: "6",
                                x2: "18",
                                y2: "18",
                              }),
                            ],
                          }),
                        }),
                    ],
                  })
                : h(M, {
                    children: [
                      h("button", {
                        className: S.toolbarButton,
                        onClick: () => d("fullscreen"),
                        title: "Capture Full Screen (âŒ˜â‡§3)",
                        children: [
                          h("div", {
                            className: S.icon,
                            children: h("svg", {
                              width: "18",
                              height: "18",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              children: [
                                h("rect", {
                                  x: "2",
                                  y: "3",
                                  width: "20",
                                  height: "14",
                                  rx: "2",
                                  ry: "2",
                                }),
                                h("line", {
                                  x1: "8",
                                  y1: "21",
                                  x2: "16",
                                  y2: "21",
                                }),
                                h("line", {
                                  x1: "12",
                                  y1: "17",
                                  x2: "12",
                                  y2: "21",
                                }),
                              ],
                            }),
                          }),
                          h("span", {
                            className: S.label,
                            children: "Full Screen",
                          }),
                        ],
                      }),
                      h("div", { className: S.separator }),
                      h("button", {
                        className: S.toolbarButton,
                        onClick: () => d("area"),
                        title: "Capture Selected Area (âŒ˜â‡§4)",
                        children: [
                          h("div", {
                            className: S.icon,
                            children: h("svg", {
                              width: "18",
                              height: "18",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              children: [
                                h("rect", {
                                  x: "9",
                                  y: "9",
                                  width: "13",
                                  height: "13",
                                  rx: "2",
                                  ry: "2",
                                }),
                                h("path", { d: "m5 15-3 3m0 0v-8m0 8h8" }),
                              ],
                            }),
                          }),
                          h("span", {
                            className: S.label,
                            children: "Selected Area",
                          }),
                        ],
                      }),
                    ],
                  }),
            }),
          })
        : null
    );
  }
  const A = {
    TOOLBAR_CLOSE: "toolbar-close",
    SCREENSHOT_UPLOAD: "screenshot-upload",
    BACKGROUND_SCREENSHOT: "background-screenshot",
    FULLSCREEN_CAPTURE: "fullscreen-capture",
    SCREENSHOT: "screenshot",
    SCREENSHOT_SILENT: "screenshot-silent",
    SCREENSHOT_FAILED: "screenshot-failed",
  };
  function It(e, t) {
    if (e.match(/^[a-z]+:\/\//i)) return e;
    if (e.match(/^\/\//)) return window.location.protocol + e;
    if (e.match(/^[a-z]+:/i)) return e;
    const n = document.implementation.createHTMLDocument(),
      r = n.createElement("base"),
      s = n.createElement("a");
    return (
      n.head.appendChild(r),
      n.body.appendChild(s),
      t && (r.href = t),
      (s.href = e),
      s.href
    );
  }
  const Ot = (() => {
    let e = 0;
    const t = () =>
      `0000${((Math.random() * 36 ** 4) << 0).toString(36)}`.slice(-4);
    return () => ((e += 1), `u${t()}${e}`);
  })();
  function I(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) t.push(e[n]);
    return t;
  }
  let F = null;
  function tt(e = {}) {
    return (
      F ||
      (e.includeStyleProperties
        ? ((F = e.includeStyleProperties), F)
        : ((F = I(window.getComputedStyle(document.documentElement))), F))
    );
  }
  function re(e, t) {
    const r = (e.ownerDocument.defaultView || window)
      .getComputedStyle(e)
      .getPropertyValue(t);
    return r ? parseFloat(r.replace("px", "")) : 0;
  }
  function Mt(e) {
    const t = re(e, "border-left-width"),
      n = re(e, "border-right-width");
    return e.clientWidth + t + n;
  }
  function Nt(e) {
    const t = re(e, "border-top-width"),
      n = re(e, "border-bottom-width");
    return e.clientHeight + t + n;
  }
  function nt(e, t = {}) {
    const n = t.width || Mt(e),
      r = t.height || Nt(e);
    return { width: n, height: r };
  }
  function Dt() {
    let e, t;
    try {
      t = process;
    } catch {}
    const n = t && t.env ? t.env.devicePixelRatio : null;
    return (
      n && ((e = parseInt(n, 10)), Number.isNaN(e) && (e = 1)),
      e || window.devicePixelRatio || 1
    );
  }
  const $ = 16384;
  function Ft(e) {
    (e.width > $ || e.height > $) &&
      (e.width > $ && e.height > $
        ? e.width > e.height
          ? ((e.height *= $ / e.width), (e.width = $))
          : ((e.width *= $ / e.height), (e.height = $))
        : e.width > $
        ? ((e.height *= $ / e.width), (e.width = $))
        : ((e.width *= $ / e.height), (e.height = $)));
  }
  function oe(e) {
    return new Promise((t, n) => {
      const r = new Image();
      (r.onload = () => {
        r.decode().then(() => {
          requestAnimationFrame(() => t(r));
        });
      }),
        (r.onerror = n),
        (r.crossOrigin = "anonymous"),
        (r.decoding = "async"),
        (r.src = e);
    });
  }
  async function Ut(e) {
    return Promise.resolve()
      .then(() => new XMLSerializer().serializeToString(e))
      .then(encodeURIComponent)
      .then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
  }
  async function Bt(e, t, n) {
    const r = "http://www.w3.org/2000/svg",
      s = document.createElementNS(r, "svg"),
      o = document.createElementNS(r, "foreignObject");
    return (
      s.setAttribute("width", `${t}`),
      s.setAttribute("height", `${n}`),
      s.setAttribute("viewBox", `0 0 ${t} ${n}`),
      o.setAttribute("width", "100%"),
      o.setAttribute("height", "100%"),
      o.setAttribute("x", "0"),
      o.setAttribute("y", "0"),
      o.setAttribute("externalResourcesRequired", "true"),
      s.appendChild(o),
      o.appendChild(e),
      Ut(s)
    );
  }
  const k = (e, t) => {
    if (e instanceof t) return !0;
    const n = Object.getPrototypeOf(e);
    return n === null ? !1 : n.constructor.name === t.name || k(n, t);
  };
  function Vt(e) {
    const t = e.getPropertyValue("content");
    return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
  }
  function zt(e, t) {
    return tt(t)
      .map((n) => {
        const r = e.getPropertyValue(n),
          s = e.getPropertyPriority(n);
        return `${n}: ${r}${s ? " !important" : ""};`;
      })
      .join(" ");
  }
  function Wt(e, t, n, r) {
    const s = `.${e}:${t}`,
      o = n.cssText ? Vt(n) : zt(n, r);
    return document.createTextNode(`${s}{${o}}`);
  }
  function rt(e, t, n, r) {
    const s = window.getComputedStyle(e, n),
      o = s.getPropertyValue("content");
    if (o === "" || o === "none") return;
    const i = Ot();
    try {
      t.className = `${t.className} ${i}`;
    } catch {
      return;
    }
    const a = document.createElement("style");
    a.appendChild(Wt(i, n, s, r)), t.appendChild(a);
  }
  function jt(e, t, n) {
    rt(e, t, ":before", n), rt(e, t, ":after", n);
  }
  const ot = "application/font-woff",
    st = "image/jpeg",
    qt = {
      woff: ot,
      woff2: ot,
      ttf: "application/font-truetype",
      eot: "application/vnd.ms-fontobject",
      png: "image/png",
      jpg: st,
      jpeg: st,
      gif: "image/gif",
      tiff: "image/tiff",
      svg: "image/svg+xml",
      webp: "image/webp",
    };
  function Gt(e) {
    const t = /\.([^./]*?)$/g.exec(e);
    return t ? t[1] : "";
  }
  function ye(e) {
    const t = Gt(e).toLowerCase();
    return qt[t] || "";
  }
  function Xt(e) {
    return e.split(/,/)[1];
  }
  function be(e) {
    return e.search(/^(data:)/) !== -1;
  }
  function Yt(e, t) {
    return `data:${t};base64,${e}`;
  }
  async function it(e, t, n) {
    const r = await fetch(e, t);
    if (r.status === 404) throw new Error(`Resource "${r.url}" not found`);
    const s = await r.blob();
    return new Promise((o, i) => {
      const a = new FileReader();
      (a.onerror = i),
        (a.onloadend = () => {
          try {
            o(n({ res: r, result: a.result }));
          } catch (c) {
            i(c);
          }
        }),
        a.readAsDataURL(s);
    });
  }
  const we = {};
  function Kt(e, t, n) {
    let r = e.replace(/\?.*/, "");
    return (
      n && (r = e),
      /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")),
      t ? `[${t}]${r}` : r
    );
  }
  async function ve(e, t, n) {
    const r = Kt(e, t, n.includeQueryParams);
    if (we[r] != null) return we[r];
    n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
    let s;
    try {
      const o = await it(
        e,
        n.fetchRequestInit,
        ({ res: i, result: a }) => (
          t || (t = i.headers.get("Content-Type") || ""), Xt(a)
        )
      );
      s = Yt(o, t);
    } catch (o) {
      s = n.imagePlaceholder || "";
      let i = `Failed to fetch resource: ${e}`;
      o && (i = typeof o == "string" ? o : o.message), i && console.warn(i);
    }
    return (we[r] = s), s;
  }
  async function Jt(e) {
    const t = e.toDataURL();
    return t === "data:," ? e.cloneNode(!1) : oe(t);
  }
  async function Qt(e, t) {
    if (e.currentSrc) {
      const o = document.createElement("canvas"),
        i = o.getContext("2d");
      (o.width = e.clientWidth),
        (o.height = e.clientHeight),
        i?.drawImage(e, 0, 0, o.width, o.height);
      const a = o.toDataURL();
      return oe(a);
    }
    const n = e.poster,
      r = ye(n),
      s = await ve(n, r, t);
    return oe(s);
  }
  async function Zt(e, t) {
    var n;
    try {
      if (!((n = e?.contentDocument) === null || n === void 0) && n.body)
        return await se(e.contentDocument.body, t, !0);
    } catch {}
    return e.cloneNode(!1);
  }
  async function en(e, t) {
    return k(e, HTMLCanvasElement)
      ? Jt(e)
      : k(e, HTMLVideoElement)
      ? Qt(e, t)
      : k(e, HTMLIFrameElement)
      ? Zt(e, t)
      : e.cloneNode(lt(e));
  }
  const tn = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT",
    lt = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
  async function nn(e, t, n) {
    var r, s;
    if (lt(t)) return t;
    let o = [];
    return (
      tn(e) && e.assignedNodes
        ? (o = I(e.assignedNodes()))
        : k(e, HTMLIFrameElement) &&
          !((r = e.contentDocument) === null || r === void 0) &&
          r.body
        ? (o = I(e.contentDocument.body.childNodes))
        : (o = I(
            ((s = e.shadowRoot) !== null && s !== void 0 ? s : e).childNodes
          )),
      o.length === 0 ||
        k(e, HTMLVideoElement) ||
        (await o.reduce(
          (i, a) =>
            i
              .then(() => se(a, n))
              .then((c) => {
                c && t.appendChild(c);
              }),
          Promise.resolve()
        )),
      t
    );
  }
  function rn(e, t, n) {
    const r = t.style;
    if (!r) return;
    const s = window.getComputedStyle(e);
    s.cssText
      ? ((r.cssText = s.cssText), (r.transformOrigin = s.transformOrigin))
      : tt(n).forEach((o) => {
          let i = s.getPropertyValue(o);
          o === "font-size" &&
            i.endsWith("px") &&
            (i = `${
              Math.floor(parseFloat(i.substring(0, i.length - 2))) - 0.1
            }px`),
            k(e, HTMLIFrameElement) &&
              o === "display" &&
              i === "inline" &&
              (i = "block"),
            o === "d" &&
              t.getAttribute("d") &&
              (i = `path(${t.getAttribute("d")})`),
            r.setProperty(o, i, s.getPropertyPriority(o));
        });
  }
  function on(e, t) {
    k(e, HTMLTextAreaElement) && (t.innerHTML = e.value),
      k(e, HTMLInputElement) && t.setAttribute("value", e.value);
  }
  function sn(e, t) {
    if (k(e, HTMLSelectElement)) {
      const n = t,
        r = Array.from(n.children).find(
          (s) => e.value === s.getAttribute("value")
        );
      r && r.setAttribute("selected", "");
    }
  }
  function ln(e, t, n) {
    return k(t, Element) && (rn(e, t, n), jt(e, t, n), on(e, t), sn(e, t)), t;
  }
  async function an(e, t) {
    const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
    if (n.length === 0) return e;
    const r = {};
    for (let o = 0; o < n.length; o++) {
      const a = n[o].getAttribute("xlink:href");
      if (a) {
        const c = e.querySelector(a),
          u = document.querySelector(a);
        !c && u && !r[a] && (r[a] = await se(u, t, !0));
      }
    }
    const s = Object.values(r);
    if (s.length) {
      const o = "http://www.w3.org/1999/xhtml",
        i = document.createElementNS(o, "svg");
      i.setAttribute("xmlns", o),
        (i.style.position = "absolute"),
        (i.style.width = "0"),
        (i.style.height = "0"),
        (i.style.overflow = "hidden"),
        (i.style.display = "none");
      const a = document.createElementNS(o, "defs");
      i.appendChild(a);
      for (let c = 0; c < s.length; c++) a.appendChild(s[c]);
      e.appendChild(i);
    }
    return e;
  }
  async function se(e, t, n) {
    return !n && t.filter && !t.filter(e)
      ? null
      : Promise.resolve(e)
          .then((r) => en(r, t))
          .then((r) => nn(e, r, t))
          .then((r) => ln(e, r, t))
          .then((r) => an(r, t));
  }
  const at = /url\((['"]?)([^'"]+?)\1\)/g,
    cn = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
    un = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
  function _n(e) {
    const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
  }
  function hn(e) {
    const t = [];
    return e.replace(at, (n, r, s) => (t.push(s), n)), t.filter((n) => !be(n));
  }
  async function fn(e, t, n, r, s) {
    try {
      const o = n ? It(t, n) : t,
        i = ye(t);
      let a;
      return s || (a = await ve(o, i, r)), e.replace(_n(t), `$1${a}$3`);
    } catch {}
    return e;
  }
  function dn(e, { preferredFontFormat: t }) {
    return t
      ? e.replace(un, (n) => {
          for (;;) {
            const [r, , s] = cn.exec(n) || [];
            if (!s) return "";
            if (s === t) return `src: ${r};`;
          }
        })
      : e;
  }
  function ct(e) {
    return e.search(at) !== -1;
  }
  async function ut(e, t, n) {
    if (!ct(e)) return e;
    const r = dn(e, n);
    return hn(r).reduce(
      (o, i) => o.then((a) => fn(a, i, t, n)),
      Promise.resolve(r)
    );
  }
  async function U(e, t, n) {
    var r;
    const s =
      (r = t.style) === null || r === void 0 ? void 0 : r.getPropertyValue(e);
    if (s) {
      const o = await ut(s, null, n);
      return t.style.setProperty(e, o, t.style.getPropertyPriority(e)), !0;
    }
    return !1;
  }
  async function mn(e, t) {
    (await U("background", e, t)) || (await U("background-image", e, t)),
      (await U("mask", e, t)) ||
        (await U("-webkit-mask", e, t)) ||
        (await U("mask-image", e, t)) ||
        (await U("-webkit-mask-image", e, t));
  }
  async function pn(e, t) {
    const n = k(e, HTMLImageElement);
    if (!(n && !be(e.src)) && !(k(e, SVGImageElement) && !be(e.href.baseVal)))
      return;
    const r = n ? e.src : e.href.baseVal,
      s = await ve(r, ye(r), t);
    await new Promise((o, i) => {
      (e.onload = o),
        (e.onerror = t.onImageErrorHandler
          ? (...c) => {
              try {
                o(t.onImageErrorHandler(...c));
              } catch (u) {
                i(u);
              }
            }
          : i);
      const a = e;
      a.decode && (a.decode = o),
        a.loading === "lazy" && (a.loading = "eager"),
        n ? ((e.srcset = ""), (e.src = s)) : (e.href.baseVal = s);
    });
  }
  async function gn(e, t) {
    const r = I(e.childNodes).map((s) => _t(s, t));
    await Promise.all(r).then(() => e);
  }
  async function _t(e, t) {
    k(e, Element) && (await mn(e, t), await pn(e, t), await gn(e, t));
  }
  function yn(e, t) {
    const { style: n } = e;
    t.backgroundColor && (n.backgroundColor = t.backgroundColor),
      t.width && (n.width = `${t.width}px`),
      t.height && (n.height = `${t.height}px`);
    const r = t.style;
    return (
      r != null &&
        Object.keys(r).forEach((s) => {
          n[s] = r[s];
        }),
      e
    );
  }
  const ht = {};
  async function ft(e) {
    let t = ht[e];
    if (t != null) return t;
    const r = await (await fetch(e)).text();
    return (t = { url: e, cssText: r }), (ht[e] = t), t;
  }
  async function dt(e, t) {
    let n = e.cssText;
    const r = /url\(["']?([^"')]+)["']?\)/g,
      o = (n.match(/url\([^)]+\)/g) || []).map(async (i) => {
        let a = i.replace(r, "$1");
        return (
          a.startsWith("https://") || (a = new URL(a, e.url).href),
          it(
            a,
            t.fetchRequestInit,
            ({ result: c }) => ((n = n.replace(i, `url(${c})`)), [i, c])
          )
        );
      });
    return Promise.all(o).then(() => n);
  }
  function mt(e) {
    if (e == null) return [];
    const t = [],
      n = /(\/\*[\s\S]*?\*\/)/gi;
    let r = e.replace(n, "");
    const s = new RegExp(
      "((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})",
      "gi"
    );
    for (;;) {
      const c = s.exec(r);
      if (c === null) break;
      t.push(c[0]);
    }
    r = r.replace(s, "");
    const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
      i =
        "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",
      a = new RegExp(i, "gi");
    for (;;) {
      let c = o.exec(r);
      if (c === null) {
        if (((c = a.exec(r)), c === null)) break;
        o.lastIndex = a.lastIndex;
      } else a.lastIndex = o.lastIndex;
      t.push(c[0]);
    }
    return t;
  }
  async function bn(e, t) {
    const n = [],
      r = [];
    return (
      e.forEach((s) => {
        if ("cssRules" in s)
          try {
            I(s.cssRules || []).forEach((o, i) => {
              if (o.type === CSSRule.IMPORT_RULE) {
                let a = i + 1;
                const c = o.href,
                  u = ft(c)
                    .then((d) => dt(d, t))
                    .then((d) =>
                      mt(d).forEach((l) => {
                        try {
                          s.insertRule(
                            l,
                            l.startsWith("@import")
                              ? (a += 1)
                              : s.cssRules.length
                          );
                        } catch (f) {
                          console.error(
                            "Error inserting rule from remote css",
                            { rule: l, error: f }
                          );
                        }
                      })
                    )
                    .catch((d) => {
                      console.error("Error loading remote css", d.toString());
                    });
                r.push(u);
              }
            });
          } catch (o) {
            const i = e.find((a) => a.href == null) || document.styleSheets[0];
            s.href != null &&
              r.push(
                ft(s.href)
                  .then((a) => dt(a, t))
                  .then((a) =>
                    mt(a).forEach((c) => {
                      i.insertRule(c, i.cssRules.length);
                    })
                  )
                  .catch((a) => {
                    console.error("Error loading remote stylesheet", a);
                  })
              ),
              console.error("Error inlining remote css file", o);
          }
      }),
      Promise.all(r).then(
        () => (
          e.forEach((s) => {
            if ("cssRules" in s)
              try {
                I(s.cssRules || []).forEach((o) => {
                  n.push(o);
                });
              } catch (o) {
                console.error(
                  `Error while reading CSS rules from ${s.href}`,
                  o
                );
              }
          }),
          n
        )
      )
    );
  }
  function wn(e) {
    return e
      .filter((t) => t.type === CSSRule.FONT_FACE_RULE)
      .filter((t) => ct(t.style.getPropertyValue("src")));
  }
  async function vn(e, t) {
    if (e.ownerDocument == null)
      throw new Error("Provided element is not within a Document");
    const n = I(e.ownerDocument.styleSheets),
      r = await bn(n, t);
    return wn(r);
  }
  function pt(e) {
    return e.trim().replace(/["']/g, "");
  }
  function En(e) {
    const t = new Set();
    function n(r) {
      (r.style.fontFamily || getComputedStyle(r).fontFamily)
        .split(",")
        .forEach((o) => {
          t.add(pt(o));
        }),
        Array.from(r.children).forEach((o) => {
          o instanceof HTMLElement && n(o);
        });
    }
    return n(e), t;
  }
  async function Sn(e, t) {
    const n = await vn(e, t),
      r = En(e);
    return (
      await Promise.all(
        n
          .filter((o) => r.has(pt(o.style.fontFamily)))
          .map((o) => {
            const i = o.parentStyleSheet ? o.parentStyleSheet.href : null;
            return ut(o.cssText, i, t);
          })
      )
    ).join(`
`);
  }
  async function Cn(e, t) {
    const n =
      t.fontEmbedCSS != null
        ? t.fontEmbedCSS
        : t.skipFonts
        ? null
        : await Sn(e, t);
    if (n) {
      const r = document.createElement("style"),
        s = document.createTextNode(n);
      r.appendChild(s),
        e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r);
    }
  }
  async function kn(e, t = {}) {
    const { width: n, height: r } = nt(e, t),
      s = await se(e, t, !0);
    return await Cn(s, t), await _t(s, t), yn(s, t), await Bt(s, n, r);
  }
  async function xn(e, t = {}) {
    const { width: n, height: r } = nt(e, t),
      s = await kn(e, t),
      o = await oe(s),
      i = document.createElement("canvas"),
      a = i.getContext("2d"),
      c = t.pixelRatio || Dt(),
      u = t.canvasWidth || n,
      d = t.canvasHeight || r;
    return (
      (i.width = u * c),
      (i.height = d * c),
      t.skipAutoScale || Ft(i),
      (i.style.width = `${u}`),
      (i.style.height = `${d}`),
      t.backgroundColor &&
        ((a.fillStyle = t.backgroundColor),
        a.fillRect(0, 0, i.width, i.height)),
      a.drawImage(o, 0, 0, i.width, i.height),
      i
    );
  }
  async function Ee(e, t = {}) {
    return (await xn(e, t)).toDataURL();
  }
  class Tn {
    defaultOptions = {
      quality: 0.92,
      backgroundColor: "#ffffff",
      scale: 1,
      useCORS: !0,
      allowTaint: !1,
      pixelRatio: 1,
    };
    async captureFullScreen(t = {}, n) {
      const r = { ...this.defaultOptions, ...t };
      try {
        if (n?.aborted) throw new Error("Operation cancelled");
        this.hideOverlayElements(), this.removeNoscriptTags(document.body);
        const s = document.body,
          o = document.documentElement,
          i = Math.max(
            s.scrollHeight,
            s.offsetHeight,
            o.clientHeight,
            o.scrollHeight,
            o.offsetHeight
          ),
          a = Math.max(
            s.scrollWidth,
            s.offsetWidth,
            o.clientWidth,
            o.scrollWidth,
            o.offsetWidth
          ),
          c = await Ee(document.body, {
            backgroundColor: r.backgroundColor,
            quality: r.quality,
            width: a,
            height: i,
            pixelRatio: r.pixelRatio,
            style: { transform: "scale(1)", transformOrigin: "top left" },
            filter: (l) =>
              l instanceof HTMLElement
                ? l.tagName.toLowerCase() === "noscript"
                  ? !1
                  : !(
                      l.classList.contains("rocket-shot-overlay") ||
                      (typeof l.id == "string" &&
                        l.id.includes("rocket-shot")) ||
                      l.classList.contains("screenshot-overlay")
                    )
                : !(
                    l.nodeType === Node.ELEMENT_NODE &&
                    l.tagName.toLowerCase() === "noscript"
                  ),
          });
        if (n?.aborted) throw new Error("Operation cancelled");
        const d = await (await fetch(c)).blob();
        return (
          this.showOverlayElements(),
          { dataUrl: c, blob: d, width: a, height: i }
        );
      } catch (s) {
        throw (
          (console.log("Failed to capture full screen:", s),
          this.showOverlayElements(),
          s instanceof Error && s.message === "Operation cancelled"
            ? s
            : new Error("Screenshot capture failed"))
        );
      }
    }
    async captureArea(t, n = {}, r) {
      const s = { ...this.defaultOptions, ...n };
      try {
        if (r?.aborted) throw new Error("Operation cancelled");
        this.hideOverlayElements(), this.removeNoscriptTags(document.body);
        const o = await Ee(document.body, {
          backgroundColor: s.backgroundColor,
          quality: s.quality,
          width: t.width,
          height: t.height,
          style: {
            transform: `translate(-${t.x}px, -${t.y}px)`,
            transformOrigin: "top left",
          },
          filter: (c) =>
            c instanceof HTMLElement
              ? c.tagName.toLowerCase() === "noscript"
                ? !1
                : !(
                    c.classList.contains("rocket-shot-overlay") ||
                    (typeof c.id == "string" && c.id.includes("rocket-shot")) ||
                    c.classList.contains("screenshot-overlay")
                  )
              : !(
                  c.nodeType === Node.ELEMENT_NODE &&
                  c.tagName.toLowerCase() === "noscript"
                ),
        });
        if (r?.aborted) throw new Error("Operation cancelled");
        const a = await (await fetch(o)).blob();
        return (
          this.showOverlayElements(),
          { dataUrl: o, blob: a, width: t.width, height: t.height }
        );
      } catch (o) {
        throw (
          (console.log("Failed to capture area:", o),
          this.showOverlayElements(),
          o instanceof Error && o.message === "Operation cancelled"
            ? o
            : new Error("Area screenshot capture failed"))
        );
      }
    }
    async captureElement(t, n = {}, r) {
      const s = { ...this.defaultOptions, ...n };
      try {
        if (r?.aborted) throw new Error("Operation cancelled");
        this.removeNoscriptTags(t);
        const o = await Ee(t, {
          backgroundColor: s.backgroundColor,
          quality: s.quality,
          filter: (u) =>
            u instanceof HTMLElement
              ? u.tagName.toLowerCase() === "noscript"
                ? !1
                : !(
                    u.classList.contains("rocket-shot-overlay") ||
                    (typeof u.id == "string" && u.id.includes("rocket-shot")) ||
                    u.classList.contains("screenshot-overlay")
                  )
              : !(
                  u.nodeType === Node.ELEMENT_NODE &&
                  u.tagName.toLowerCase() === "noscript"
                ),
        });
        if (r?.aborted) throw new Error("Operation cancelled");
        const a = await (await fetch(o)).blob(),
          c = t.getBoundingClientRect();
        return { dataUrl: o, blob: a, width: c.width, height: c.height };
      } catch (o) {
        throw (
          (console.log("Failed to capture element:", o),
          o instanceof Error && o.message === "Operation cancelled"
            ? o
            : new Error("Element screenshot capture failed"))
        );
      }
    }
    downloadScreenshot(t, n = "screenshot.png") {
      const r = document.createElement("a");
      (r.download = n),
        (r.href = t.dataUrl),
        document.body.appendChild(r),
        r.click(),
        document.body.removeChild(r);
    }
    async copyToClipboard(t) {
      try {
        return (
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": t.blob }),
          ]),
          !0
        );
      } catch (n) {
        return console.log("Failed to copy to clipboard:", n), !1;
      }
    }
    hideOverlayElements() {
      document
        .querySelectorAll('[id*="rocket-shot"], [class*="rocket-shot"]')
        .forEach((s) => {
          const o = s;
          o.style.display = "none";
        }),
        document
          .querySelectorAll(
            '[class*="overlay"], [class*="screenshot"], [class*="floating"], [class*="toolbar"], [class*="progress"]'
          )
          .forEach((s) => {
            const o = s;
            !(typeof o.id == "string" && o.id.includes("rocket-shot")) &&
              !(
                typeof o.className == "string" &&
                o.className.includes("rocket-shot")
              ) &&
              (o.style.visibility = "hidden");
          }),
        document.querySelectorAll("*").forEach((s) => {
          const o = s,
            i = window.getComputedStyle(o);
          parseInt(i.zIndex, 10) > 1e3 &&
            ((o.style.visibility = "hidden"),
            o.setAttribute("data-screenshot-hidden", "true"));
        });
    }
    showOverlayElements() {
      document
        .querySelectorAll('[id*="rocket-shot"], [class*="rocket-shot"]')
        .forEach((s) => {
          const o = s;
          o.style.display = "";
        }),
        document
          .querySelectorAll(
            '[class*="overlay"], [class*="screenshot"], [class*="floating"], [class*="toolbar"], [class*="progress"]'
          )
          .forEach((s) => {
            const o = s;
            !(typeof o.id == "string" && o.id.includes("rocket-shot")) &&
              !(
                typeof o.className == "string" &&
                o.className.includes("rocket-shot")
              ) &&
              (o.style.visibility = "");
          }),
        document
          .querySelectorAll('[data-screenshot-hidden="true"]')
          .forEach((s) => {
            const o = s;
            (o.style.visibility = ""),
              o.removeAttribute("data-screenshot-hidden");
          });
    }
    removeNoscriptTags(t) {
      (t instanceof Document ? t.body : t)
        .querySelectorAll("noscript")
        .forEach((r) => r.parentNode?.removeChild(r));
    }
    sendScreenshotToParent(t, n = A.SCREENSHOT_UPLOAD) {
      try {
        window.parent.postMessage(
          {
            type: n,
            data: {
              dataUrl: t.dataUrl,
              width: t.width,
              height: t.height,
              timestamp: Date.now(),
            },
          },
          "*"
        );
      } catch (r) {
        console.log("Failed to send screenshot to parent:", r);
      }
    }
  }
  const q = new Tn();
  function $n({ data: e }) {
    const [t, n] = T({
        toolbar: { isVisible: !0, mode: null },
        thumbnail: { isVisible: !1, screenshot: null, autoHideTimer: null },
        editor: { isVisible: !1, screenshot: null, editedImage: null },
        progress: { isVisible: !1, message: "", abortController: null },
      }),
      r = pe((l) => {
        n((f) => ({
          ...f,
          thumbnail: { isVisible: !0, screenshot: l, autoHideTimer: null },
        }));
      }, []);
    L(() => {
      t.toolbar.isVisible ||
        window.parent.postMessage({ type: A.TOOLBAR_CLOSE, props: {} }, "*");
    }, [t.toolbar.isVisible]);
    const s = pe(
      async (l, f = !1) => {
        try {
          if (l === "fullscreen") {
            const _ = new AbortController();
            n(
              f
                ? (b) => ({
                    ...b,
                    toolbar: { isVisible: !1, mode: null },
                    progress: {
                      isVisible: !1,
                      message: "",
                      abortController: null,
                    },
                  })
                : (b) => ({
                    ...b,
                    toolbar: { isVisible: !1, mode: null },
                    progress: {
                      isVisible: !0,
                      message: "Capturing full screen...",
                      abortController: _,
                    },
                  })
            ),
              await new Promise((b) => setTimeout(b, f ? 100 : 200));
            const p = await q.captureFullScreen({}, _.signal);
            (e.type === A.SCREENSHOT || e.type === A.SCREENSHOT_SILENT) &&
              q.sendScreenshotToParent(p, A.BACKGROUND_SCREENSHOT),
              f ||
                (n((b) => ({
                  ...b,
                  progress: {
                    isVisible: !1,
                    message: "",
                    abortController: null,
                  },
                })),
                r(p));
          } else
            l === "area" &&
              n((_) => ({ ..._, toolbar: { isVisible: !1, mode: l } }));
        } catch (_) {
          console.log("Screenshot capture failed:", _),
            q.sendScreenshotToParent(
              {
                dataUrl: "data:image/png;base64,",
                blob: new Blob(),
                width: 0,
                height: 0,
              },
              A.SCREENSHOT_FAILED
            ),
            n(
              f
                ? (p) => ({
                    ...p,
                    toolbar: { isVisible: !1, mode: null },
                    progress: {
                      isVisible: !1,
                      message: "",
                      abortController: null,
                    },
                  })
                : (p) => ({
                    ...p,
                    toolbar: { isVisible: !0, mode: null },
                    progress: {
                      isVisible: !1,
                      message: "",
                      abortController: null,
                    },
                  })
            );
        }
      },
      [r, e.type]
    );
    L(() => {
      e.type === A.SCREENSHOT
        ? s("fullscreen")
        : (e.type === A.SCREENSHOT_SILENT || e.silent) && s("fullscreen", !0);
    }, [e, s]);
    const o = () => {
        n((l) => ({
          ...l,
          thumbnail: { isVisible: !1, screenshot: null, autoHideTimer: null },
        }));
      },
      i = () => {
        n((l) => ({
          ...l,
          thumbnail: { isVisible: !1, screenshot: null, autoHideTimer: null },
          editor: {
            isVisible: !0,
            screenshot: l.thumbnail.screenshot,
            editedImage: null,
          },
        }));
      },
      a = () => {
        n((l) => ({
          ...l,
          editor: { isVisible: !1, screenshot: null, editedImage: null },
        }));
      },
      c = (l) => {
        n((f) => ({
          ...f,
          editor: { isVisible: !1, screenshot: null, editedImage: l },
        }));
      },
      u = () => {
        n((l) => ({ ...l, toolbar: { isVisible: !1, mode: null } }));
      },
      d = () => {
        t.progress.abortController && t.progress.abortController.abort(),
          n((l) => ({
            ...l,
            progress: { isVisible: !1, message: "", abortController: null },
            toolbar: { isVisible: !0, mode: null },
          }));
      };
    return h(M, {
      children: [
        h(At, {
          isVisible: t.toolbar.isVisible || t.progress.isVisible,
          onCaptureMode: s,
          onClose: u,
          isProcessing: t.progress.isVisible,
          progressMessage: t.progress.message,
          onCancel: d,
        }),
        h(Ht, {
          isVisible: t.thumbnail.isVisible,
          screenshot: t.thumbnail.screenshot,
          onOpenEditor: i,
          onDismiss: o,
        }),
        h(Pt, {
          isVisible: t.editor.isVisible,
          screenshot: t.editor.screenshot,
          onSave: c,
          onClose: a,
        }),
        t.toolbar.mode === "area" &&
          h(Lt, {
            onSelectionComplete: async (l) => {
              const f = new AbortController();
              try {
                n((p) => ({
                  ...p,
                  toolbar: { isVisible: !1, mode: null },
                  progress: {
                    isVisible: !0,
                    message: "Capturing selected area...",
                    abortController: f,
                  },
                })),
                  await new Promise((p) => setTimeout(p, 100));
                const _ = await q.captureArea(l, {}, f.signal);
                q.sendScreenshotToParent(_, A.BACKGROUND_SCREENSHOT),
                  n((p) => ({
                    ...p,
                    progress: {
                      isVisible: !1,
                      message: "",
                      abortController: null,
                    },
                  })),
                  r(_);
              } catch (_) {
                console.log("Area screenshot capture failed:", _),
                  n((p) => ({
                    ...p,
                    toolbar: { isVisible: !0, mode: null },
                    progress: {
                      isVisible: !1,
                      message: "",
                      abortController: null,
                    },
                  }));
              }
            },
            onCancel: () => {
              n((l) => ({ ...l, toolbar: { isVisible: !0, mode: null } }));
            },
          }),
      ],
    });
  }
  const gt = "rocket-shot",
    Se = `${gt}-mount-point`,
    Ce = `${gt}-style`,
    Rn = "https://static.rocket.new";
  function Ln() {
    document.getElementById(Ce)?.remove(),
      document.getElementById(Se)?.remove();
  }
  function ke(e) {
    const t = document.getElementById(Se),
      n = document.getElementById(Ce),
      r = t || document.createElement("div");
    if ((t || ((r.id = Se), document.body.appendChild(r)), !n)) {
      const s = document.createElement("link");
      (s.href = `${Rn}/rocket-shot.css`),
        (s.rel = "stylesheet"),
        (s.id = Ce),
        (s.crossOrigin = "anonymous"),
        r.appendChild(s);
    }
    t || kt(h($n, { data: e || {} }), r);
  }
  window.addEventListener("message", (e) => {
    try {
      const t = e.data;
      switch (t.type) {
        case "mount":
          window.parent.postMessage({ type: "screenshot-ack" }, "*"), ke();
          break;
        case "unmount":
          Ln();
          break;
        case "screenshot":
          window.parent.postMessage({ type: "screenshot-ack" }, "*"),
            ke({ ...t });
          break;
        case "screenshot-silent":
          window.parent.postMessage({ type: "screenshot-ack" }, "*"),
            ke({ ...t, silent: !0 });
          break;
        default:
          console.warn(`Unknown message type: ${t.type}`, t);
          break;
      }
    } catch (t) {
      console.log(t);
    }
  });
})();
