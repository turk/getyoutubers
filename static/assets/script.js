const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function simple_date_format(e, t) {
    var n = e.getDate(),
        i = e.getMonth() + 1,
        r = e.getFullYear(),
        o = t;
    return o = o.replace(/D+/, n), o = o.replace(/M+/, i), o = o.replace(/Y+/, r)
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t, n) {
        if (pe.isFunction(t)) return pe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return pe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Te.test(t)) return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function(e) {
            return pe.inArray(e, t) > -1 !== n
        })
    }

    function r(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = {};
        return pe.each(e.match(Le) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (a(), pe.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Ie, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : He.test(n) ? pe.parseJSON(n) : n)
                } catch (e) {}
                pe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, i) {
        if (Me(e)) {
            var r, o, a = pe.expando,
                s = e.nodeType,
                l = s ? pe.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = ne.pop() || pe.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: pe.noop
            }), "object" != typeof t && "function" != typeof t || (i ? l[u] = pe.extend(l[u], t) : l[u].data = pe.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[pe.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[pe.camelCase(t)])) : r = o, r
        }
    }

    function d(e, t, n) {
        if (Me(e)) {
            var i, r, o = e.nodeType,
                a = o ? pe.cache : e,
                s = o ? e[pe.expando] : pe.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in i ? t = [t] : (t = pe.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !u(i) : !pe.isEmptyObject(i)) return
                }(n || (delete a[s].data, u(a[s]))) && (o ? pe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }

    function f(e, t, n, i) {
        var r, o = 1,
            a = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return pe.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
            c = (pe.cssNumber[t] || "px" !== u && +l) && qe.exec(pe.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do o = o || ".5", c /= o, pe.style(e, t, c + u); while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function p(e) {
        var t = We.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        var n, i, r = 0,
            o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || pe.nodeName(i, t) ? o.push(i) : pe.merge(o, h(i, t));
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], o) : o
    }

    function m(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) pe._data(n, "globalEval", !t || pe._data(t[i], "globalEval"))
    }

    function g(e) {
        ze.test(e.type) && (e.defaultChecked = e.checked)
    }

    function v(e, t, n, i, r) {
        for (var o, a, s, l, u, c, d, f = e.length, v = p(t), y = [], b = 0; b < f; b++)
            if (a = e[b], a || 0 === a)
                if ("object" === pe.type(a)) pe.merge(y, a.nodeType ? [a] : a);
                else if (Ue.test(a)) {
            for (l = l || v.appendChild(t.createElement("div")), u = (Re.exec(a) || ["", ""])[1].toLowerCase(), d = Xe[u] || Xe._default, l.innerHTML = d[1] + pe.htmlPrefilter(a) + d[2], o = d[0]; o--;) l = l.lastChild;
            if (!de.leadingWhitespace && Pe.test(a) && y.push(t.createTextNode(Pe.exec(a)[0])), !de.tbody)
                for (a = "table" !== u || Ve.test(a) ? "<table>" !== d[1] || Ve.test(a) ? 0 : l : l.firstChild, o = a && a.childNodes.length; o--;) pe.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (pe.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = v.lastChild
        } else y.push(t.createTextNode(a));
        for (l && v.removeChild(l), de.appendChecked || pe.grep(h(y, "input"), g), b = 0; a = y[b++];)
            if (i && pe.inArray(a, i) > -1) r && r.push(a);
            else if (s = pe.contains(a.ownerDocument, a), l = h(v.appendChild(a), "script"), s && m(l), n)
            for (o = 0; a = l[o++];) Be.test(a.type || "") && n.push(a);
        return l = null, v
    }

    function y() {
        return !0
    }

    function b() {
        return !1
    }

    function x() {
        try {
            return ie.activeElement
        } catch (e) {}
    }

    function w(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t) w(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = b;
        else if (!r) return e;
        return 1 === o && (a = r, r = function(e) {
            return pe().off(e), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = pe.guid++)), e.each(function() {
            pe.event.add(this, t, r, i, n)
        })
    }

    function C(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function T(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
    }

    function A(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function k(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n, i, r, o = pe._data(e),
                a = pe._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, r = s[n].length; i < r; i++) pe.event.add(t, n, s[n][i])
            }
            a.data && (a.data = pe.extend({}, a.data))
        }
    }

    function S(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[pe.expando]) {
                r = pe._data(t);
                for (i in r.events) pe.removeEvent(t, i, r.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === n && t.text !== e.text ? (T(t).text = e.text, A(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && ze.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function E(e, t, n, i) {
        t = oe.apply([], t);
        var r, o, a, s, l, u, c = 0,
            d = e.length,
            f = d - 1,
            p = t[0],
            m = pe.isFunction(p);
        if (m || d > 1 && "string" == typeof p && !de.checkClone && it.test(p)) return e.each(function(r) {
            var o = e.eq(r);
            m && (t[0] = p.call(this, r, o.html())), E(o, t, n, i)
        });
        if (d && (u = v(t, e[0].ownerDocument, !1, e, i), r = u.firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
            for (s = pe.map(h(u, "script"), T), a = s.length; c < d; c++) o = u, c !== f && (o = pe.clone(o, !0, !0), a && pe.merge(s, h(o, "script"))), n.call(e[c], o, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, pe.map(s, A), c = 0; c < a; c++) o = s[c], Be.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(l, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
            u = r = null
        }
        return e
    }

    function N(e, t, n) {
        for (var i, r = t ? pe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || pe.cleanData(h(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && m(h(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function L(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body),
            i = pe.css(n[0], "display");
        return n.detach(), i
    }

    function D(e) {
        var t = ie,
            n = ut[e];
        return n || (n = L(e, t), "none" !== n && n || (lt = (lt || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (lt[0].contentWindow || lt[0].contentDocument).document, t.write(), t.close(), n = L(e, t), lt.detach()), ut[e] = n), n
    }

    function j(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function M(e) {
        if (e in At) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Tt.length; n--;)
            if (e = Tt[n] + t, e in At) return e
    }

    function H(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++) i = e[a], i.style && (o[a] = pe._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && $e(i) && (o[a] = pe._data(i, "olddisplay", D(i.nodeName)))) : (r = $e(i), (n && "none" !== n || !r) && pe._data(i, "olddisplay", r ? n : pe.css(i, "display"))));
        for (a = 0; a < s; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function I(e, t, n) {
        var i = xt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function O(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += pe.css(e, n + Fe[o], !0, r)), i ? ("content" === n && (a -= pe.css(e, "padding" + Fe[o], !0, r)), "margin" !== n && (a -= pe.css(e, "border" + Fe[o] + "Width", !0, r))) : (a += pe.css(e, "padding" + Fe[o], !0, r), "padding" !== n && (a += pe.css(e, "border" + Fe[o] + "Width", !0, r)));
        return a
    }

    function q(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = ht(e),
            a = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (r = mt(e, t, o), (r < 0 || null == r) && (r = e.style[t]), dt.test(r)) return r;
            i = a && (de.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + O(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function F(e, t, n, i, r) {
        return new F.prototype.init(e, t, n, i, r)
    }

    function $() {
        return e.setTimeout(function() {
            kt = void 0
        }), kt = pe.now()
    }

    function _(e, t) {
        var n, i = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Fe[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function z(e, t, n) {
        for (var i, r = (P.tweeners[t] || []).concat(P.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function R(e, t, n) {
        var i, r, o, a, s, l, u, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && $e(e),
            m = pe._data(e, "fxshow");
        n.queue || (s = pe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, pe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = pe.css(e, "display"), c = "none" === u ? pe._data(e, "olddisplay") || D(e.nodeName) : u, "inline" === c && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== D(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", de.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], Et.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    h = !0
                }
                f[i] = m && m[i] || pe.style(e, i)
            } else u = void 0;
        if (pe.isEmptyObject(f)) "inline" === ("none" === u ? D(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = pe._data(e, "fxshow", {}), o && (m.hidden = !h), h ? pe(e).show() : d.done(function() {
                pe(e).hide()
            }), d.done(function() {
                var t;
                pe._removeData(e, "fxshow");
                for (t in f) pe.style(e, t, f[t])
            });
            for (i in f) a = z(h ? m[i] : 0, i, d), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function B(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = pe.camelCase(n), r = t[i], o = e[n], pe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = pe.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function P(e, t, n) {
        var i, r, o = 0,
            a = P.prefilters.length,
            s = pe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = kt || $(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; a < l; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), o < 1 && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: pe.extend({}, t),
                opts: pe.extend(!0, {
                    specialEasing: {},
                    easing: pe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: kt || $(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = pe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (B(c, u.opts.specialEasing); o < a; o++)
            if (i = P.prefilters[o].call(u, e, c, u.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(u.elem, u.opts.queue).stop = pe.proxy(i.stop, i)), i;
        return pe.map(c, z, u), pe.isFunction(u.opts.start) && u.opts.start.call(e, u), pe.fx.timer(pe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function W(e) {
        return pe.attr(e, "class") || ""
    }

    function X(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(Le) || [];
            if (pe.isFunction(n))
                for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function U(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, pe.each(e[s] || [], function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            a = e === Kt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function V(e, t) {
        var n, i, r = pe.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && pe.extend(!0, e, n), e
    }

    function G(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function Y(e, t, n, i) {
        var r, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (r in u)
                    if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Q(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }

    function J(e) {
        if (!pe.contains(e.ownerDocument || ie, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === Q(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function K(e, t, n, i) {
        var r;
        if (pe.isArray(t)) pe.each(t, function(t, r) {
            n || rn.test(e) ? i(e, r) : K(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== pe.type(t)) i(e, t);
        else
            for (r in t) K(e + "[" + r + "]", t[r], n, i)
    }

    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = [],
        ie = e.document,
        re = ne.slice,
        oe = ne.concat,
        ae = ne.push,
        se = ne.indexOf,
        le = {},
        ue = le.toString,
        ce = le.hasOwnProperty,
        de = {},
        fe = "1.12.4",
        pe = function(e, t) {
            return new pe.fn.init(e, t)
        },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ge = /-([\da-z])/gi,
        ve = function(e, t) {
            return t.toUpperCase()
        };
    pe.fn = pe.prototype = {
        jquery: fe,
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : re.call(this)
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice
    }, pe.extend = pe.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (r = arguments[s]))
                for (i in r) e = a[i], n = r[i], a !== n && (u && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {}, a[i] = pe.extend(u, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }, pe.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === pe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (!de.ownFirst)
                for (t in e) return ce.call(e, t);
            for (t in e);
            return void 0 === t || ce.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && pe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ge, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, r = 0;
            if (n(e))
                for (i = e.length; r < i && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? pe.merge(i, "string" == typeof e ? [e] : e) : ae.call(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (se) return se.call(t, e, n);
                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[r++] = t[i++];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; o < a; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o, a = 0,
                s = [];
            if (n(e))
                for (r = e.length; a < r; a++) o = t(e[a], a, i), null != o && s.push(o);
            else
                for (a in e) o = t(e[a], a, i), null != o && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (r = e[t], t = e, e = r), pe.isFunction(e)) return n = re.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(re.call(arguments)))
            }, i.guid = e.guid = e.guid || pe.guid++, i
        },
        now: function() {
            return +new Date
        },
        support: de
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, u, d, p, h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((t ? t.ownerDocument || t : z) !== M && j(t), t = t || M, I)) {
                if (11 !== m && (u = ve.exec(e)))
                    if (r = u[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(r))) return n;
                            if (a.id === r) return n.push(a), n
                        } else if (h && (a = h.getElementById(r)) && $(t, a) && a.id === r) return n.push(a), n
                    } else {
                        if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = u[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                    }
                if (w.qsa && !X[e + " "] && (!O || !O.test(e))) {
                    if (1 !== m) h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = _), d = k(e), o = d.length, l = fe.test(s) ? "#" + s : "[id='" + s + "']"; o--;) d[o] = l + " " + f(d[o]);
                        p = d.join(","), h = ye.test(e) && c(t.parentNode) || t
                    }
                    if (p) try {
                        return K.apply(n, h.querySelectorAll(p)), n
                    } catch (e) {} finally {
                        s === _ && t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(se, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[_] = !0, e
        }

        function r(e) {
            var t = M.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = B++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function(t, n, a) {
                var s, l, u, c = [R, o];
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (u = t[_] || (t[_] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[i]) && s[0] === R && s[1] === o) return c[2] = s[2];
                            if (l[i] = c, c[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i
        }

        function g(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s)));
            return a
        }

        function v(e, t, n, r, o, a) {
            return r && !r[_] && (r = v(r)), o && !o[_] && (o = v(o, a)), i(function(i, a, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    v = i || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? v : g(v, f, e, s, l),
                    b = n ? o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, b, s, l), r)
                    for (u = g(b, p), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = o ? ee(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d))
                    }
                } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : K.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                    return e === t
                }, a, !0), u = p(function(e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function(e, n, i) {
                    var r = !o && (i || n !== N) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; s < r; s++)
                if (n = C.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[_]) {
                        for (i = ++s; i < r && !C.relative[e[i].type]; i++);
                        return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, s < i && y(e.slice(s, i)), i < r && y(e = e.slice(i)), i < r && f(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, l, u) {
                    var c, d, f, p = 0,
                        h = "0",
                        m = i && [],
                        v = [],
                        y = N,
                        b = i || o && C.find.TAG("*", u),
                        x = R += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (N = a === M || a || u); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (d = 0, a || c.ownerDocument === M || (j(c), s = !I); f = e[d++];)
                                if (f(c, a || M, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (R = x)
                        }
                        r && ((c = !f && c) && p--, i && m.push(c))
                    }
                    if (p += h, r && h !== p) {
                        for (d = 0; f = n[d++];) f(m, v, a, s);
                        if (i) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
                            v = g(v)
                        }
                        K.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (R = x, N = y), m
                };
            return r ? i(a) : a
        }
        var x, w, C, T, A, k, S, E, N, L, D, j, M, H, I, O, q, F, $, _ = "sizzle" + 1 * new Date,
            z = e.document,
            R = 0,
            B = 0,
            P = n(),
            W = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (D = !0), 0
            },
            V = 1 << 31,
            G = {}.hasOwnProperty,
            Y = [],
            Q = Y.pop,
            J = Y.push,
            K = Y.push,
            Z = Y.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(oe),
            fe = new RegExp("^" + ie + "$"),
            pe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Ce = function() {
                j()
            };
        try {
            K.apply(Y = Z.call(z.childNodes), z.childNodes), Y[z.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: Y.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, A = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, j = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : z;
            return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, H = M.documentElement, I = !A(M), (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), w.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = r(function(e) {
                return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ge.test(M.getElementsByClassName), w.getById = r(function(e) {
                return H.appendChild(e).id = _, !M.getElementsByName || !M.getElementsByName(_).length
            }), w.getById ? (C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, C.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, C.find.CLASS = w.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && I) return t.getElementsByClassName(e)
            }, q = [], O = [], (w.qsa = ge.test(M.querySelectorAll)) && (r(function(e) {
                H.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || O.push(".#.+[+~]")
            }), r(function(e) {
                var t = M.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (w.matchesSelector = ge.test(F = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && r(function(e) {
                w.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), q.push("!=", oe)
            }), O = O.length && new RegExp(O.join("|")), q = q.length && new RegExp(q.join("|")), t = ge.test(H.compareDocumentPosition), $ = t || ge.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === M || e.ownerDocument === z && $(z, e) ? -1 : t === M || t.ownerDocument === z && $(z, t) ? 1 : L ? ee(L, e) - ee(L, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return D = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                if (!r || !o) return e === M ? -1 : t === M ? 1 : r ? -1 : o ? 1 : L ? ee(L, e) - ee(L, t) : 0;
                if (r === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? a(s[i], l[i]) : s[i] === z ? -1 : l[i] === z ? 1 : 0
            }, M) : M
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== M && j(e), n = n.replace(ce, "='$1']"), w.matchesSelector && I && !X[n + " "] && (!q || !q.test(n)) && (!O || !O.test(n))) try {
                var i = F.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, M, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== M && j(e), $(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== M && j(e);
            var n = C.attrHandle[t.toLowerCase()],
                i = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== i ? i : w.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (D = !w.detectDuplicates, L = !w.sortStable && e.slice(0), e.sort(U), D) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return L = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += T(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = P[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && P(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (f = g, d = f[_] || (f[_] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === R && u[1], b = p && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++b && f === t) {
                                        c[e] = [R, p, b];
                                        break
                                    }
                            } else if (y && (f = t, d = f[_] || (f[_] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === R && u[1], b = p), b === !1)
                                for (;
                                    (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[_] || (f[_] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [R, b]), f !== t)););
                            return b -= r, b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[_] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = S(e.replace(se, "$1"));
                    return r[_] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(xe, we),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) C.pseudos[x] = l(x);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, k = t.tokenize = function(e, n) {
            var i, r, o, a, s, l, u, c = W[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = C.preFilter; s;) {
                i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(se, " ")
                }), s = s.slice(i.length));
                for (a in C.filter) !(r = pe[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
        }, S = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[_] ? i.push(o) : r.push(o);
                o = X(e, b(r, i)), o.selector = e
            }
            return o
        }, E = t.select = function(e, t, n, i) {
            var r, o, a, s, l, u = "function" == typeof e && e,
                d = !i && k(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && I && C.relative[o[1].type]) {
                    if (t = (C.find.ID(a.matches[0].replace(xe, we), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)
                    if ((l = C.find[s]) && (i = l(a.matches[0].replace(xe, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && f(o), !e) return K.apply(n, i), n;
                        break
                    }
            }
            return (u || S(e, d))(i, t, !I, n, !t || ye.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = _.split("").sort(U).join("") === _, w.detectDuplicates = !!D, j(), w.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(M.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var i;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    pe.find = ye, pe.expr = ye.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ye.uniqueSort, pe.text = ye.getText, pe.isXMLDoc = ye.isXML, pe.contains = ye.contains;
    var be = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && pe(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        xe = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        we = pe.expr.match.needsContext,
        Ce = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Te = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, pe.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (pe.contains(i[t], this)) return !0
            }));
            for (t = 0; t < r; t++) pe.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var Ae, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Se = pe.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || Ae, "string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ke.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), Ce.test(i[1]) && pe.isPlainObject(t))
                        for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if (r = ie.getElementById(i[2]), r && r.parentNode) {
                    if (r.id !== i[2]) return Ae.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = ie, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
        };
    Se.prototype = pe.fn, Ae = pe(ie);
    var Ee = /^(?:parents|prev(?:Until|All))/,
        Ne = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pe.fn.extend({
        has: function(e) {
            var t, n = pe(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++)
                    if (pe.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return xe(e.firstChild)
        },
        contents: function(e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function(e, t) {
        pe.fn[e] = function(n, i) {
            var r = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = pe.filter(i, r)), this.length > 1 && (Ne[e] || (r = pe.uniqueSort(r)), Ee.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var Le = /\S+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : pe.extend({}, e);
        var t, n, i, r, a = [],
            s = [],
            l = -1,
            u = function() {
                for (r = e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
            },
            c = {
                add: function() {
                    return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
                        pe.each(n, function(n, i) {
                            pe.isFunction(i) ? e.unique && c.has(i) || a.push(i) : i && i.length && "string" !== pe.type(i) && t(i)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return pe.each(arguments, function(e, t) {
                        for (var n;
                            (n = pe.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? pe.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = !0, n || c.disable(), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, pe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", pe.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return pe.Deferred(function(n) {
                            pe.each(t, function(t, o) {
                                var a = pe.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? pe.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, pe.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                o = re.call(arguments),
                a = o.length,
                s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : pe.Deferred(),
                u = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) o[r] && pe.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(l.reject) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var De;
    pe.fn.ready = function(e) {
        return pe.ready.promise().done(e), this
    }, pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++ : pe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, e !== !0 && --pe.readyWait > 0 || (De.resolveWith(ie, [pe]), pe.fn.triggerHandler && (pe(ie).triggerHandler("ready"), pe(ie).off("ready"))))
        }
    }), pe.ready.promise = function(t) {
        if (!De)
            if (De = pe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(pe.ready);
            else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
        else {
            ie.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && ie.documentElement
            } catch (e) {}
            n && n.doScroll && ! function t() {
                if (!pe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (n) {
                        return e.setTimeout(t, 50)
                    }
                    a(), pe.ready()
                }
            }()
        }
        return De.promise(t)
    }, pe.ready.promise();
    var je;
    for (je in pe(de)) break;
    de.ownFirst = "0" === je, de.inlineBlockNeedsLayout = !1, pe(function() {
            var e, t, n, i;
            n = ie.getElementsByTagName("body")[0], n && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = ie.createElement("div");
            de.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                de.deleteExpando = !1
            }
            e = null
        }();
    var Me = function(e) {
            var t = pe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
        },
        He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ie = /([A-Z])/g;
    pe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando], !!e && !u(e)
            },
            data: function(e, t, n) {
                return c(e, t, n)
            },
            removeData: function(e, t) {
                return d(e, t)
            },
            _data: function(e, t, n) {
                return c(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return d(e, t, !0)
            }
        }), pe.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = pe.camelCase(i.slice(5)), l(o, i, r[i])));
                        pe._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    pe.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    pe.data(this, e, t)
                }) : o ? l(o, e, pe.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    pe.removeData(this, e)
                })
            }
        }), pe.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = pe._data(e, t), n && (!i || pe.isArray(n) ? i = pe._data(e, t, pe.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = pe.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = pe._queueHooks(e, t),
                    a = function() {
                        pe.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return pe._data(e, n) || pe._data(e, n, {
                    empty: pe.Callbacks("once memory").add(function() {
                        pe._removeData(e, t + "queue"), pe._removeData(e, n)
                    })
                })
            }
        }), pe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = pe.queue(this, e, t);
                    pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    pe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = pe.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = pe._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        }),
        function() {
            var e;
            de.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = ie.getElementsByTagName("body")[0], n && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
    var Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        qe = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$", "i"),
        Fe = ["Top", "Right", "Bottom", "Left"],
        $e = function(e, t) {
            return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
        },
        _e = function(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === pe.type(n)) {
                r = !0;
                for (s in n) _e(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, pe.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(pe(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        ze = /^(?:checkbox|radio)$/i,
        Re = /<([\w:-]+)/,
        Be = /^$|\/(?:java|ecma)script/i,
        Pe = /^\s+/,
        We = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var e = ie.createElement("div"),
            t = ie.createDocumentFragment(),
            n = ie.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, de.attributes = !e.getAttribute(pe.expando)
    }();
    var Xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
    var Ue = /<|&#?\w+;/,
        Ve = /<tbody/i;
    ! function() {
        var t, n, i = ie.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (de[t] = n in e) || (i.setAttribute(n, "t"), de[t] = i.attributes[n].expando === !1);
        i = null
    }();
    var Ge = /^(?:input|select|textarea)$/i,
        Ye = /^key/,
        Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Je = /^(?:focusinfocus|focusoutblur)$/,
        Ke = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, p, h, m, g = pe._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = pe.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return "undefined" == typeof pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(Le) || [""], s = t.length; s--;) o = Ke.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (u = pe.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = pe.event.special[p] || {}, d = pe.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && pe.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), pe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, p, h, m, g = pe.hasData(e) && pe._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(Le) || [""], u = t.length; u--;)
                    if (s = Ke.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = pe.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || pe.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) pe.event.remove(e, p + t[u], n, i, !0);
                pe.isEmptyObject(c) && (delete g.handle, pe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var o, a, s, l, u, c, d, f = [i || ie],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Je.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), u = pe.event.special[p] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !pe.isWindow(i)) {
                    for (l = u.delegateType || p, Je.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (i.ownerDocument || ie) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && Me(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && Me(i) && a && i[p] && !pe.isWindow(i)) {
                    c = i[a], c && (i[a] = null), pe.event.triggered = p;
                    try {
                        i[p]()
                    } catch (e) {}
                    pe.event.triggered = void 0, c && (i[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = pe.event.fix(e);
            var t, n, i, r, o, a = [],
                s = re.call(arguments),
                l = (pe._data(this, "events") || {})[e.type] || [],
                u = pe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = pe.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], n = 0; n < s; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? pe(r, this).index(l) > -1 : pe.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[pe.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Qe.test(r) ? this.mouseHooks : Ye.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === x() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var i = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }, pe.removeEvent = ie.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
    }, pe.Event = function(e, t) {
        return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : b) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void(this[pe.expando] = !0)) : new pe.Event(e, t)
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || pe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), de.submit || (pe.event.special.submit = {
        setup: function() {
            return !pe.nodeName(this, "form") && void pe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), pe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return !pe.nodeName(this, "form") && void pe.event.remove(this, "._submit")
        }
    }), de.change || (pe.event.special.change = {
        setup: function() {
            return Ge.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), pe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
            })), !1) : void pe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ge.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }), pe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return pe.event.remove(this, "._change"), !Ge.test(this.nodeName)
        }
    }), de.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = pe._data(i, t);
                r || i.addEventListener(e, n, !0), pe._data(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = pe._data(i, t) - 1;
                r ? pe._data(i, t, r) : (i.removeEventListener(e, n, !0), pe._removeData(i, t))
            }
        }
    }), pe.fn.extend({
        on: function(e, t, n, i) {
            return w(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return w(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = b), this.each(function() {
                pe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return pe.event.trigger(e, t, n, !0)
        }
    });
    var Ze = / jQuery\d+="(?:null|\d+)"/g,
        et = new RegExp("<(?:" + We + ")[\\s/>]", "i"),
        tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        at = p(ie),
        st = at.appendChild(ie.createElement("div"));
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, a, s, l = pe.contains(e.ownerDocument, e);
            if (de.html5Clone || pe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(o = st.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (i = h(o), s = h(e), a = 0; null != (r = s[a]); ++a) i[a] && S(r, i[a]);
            if (t)
                if (n)
                    for (s = s || h(e), i = i || h(o), a = 0; null != (r = s[a]); a++) k(r, i[a]);
                else k(e, o);
            return i = h(o, "script"), i.length > 0 && m(i, !l && h(e, "script")), i = s = r = null, o
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, a = 0, s = pe.expando, l = pe.cache, u = de.attributes, c = pe.event.special; null != (n = e[a]); a++)
                if ((t || Me(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(r))
                }
        }
    }), pe.fn.extend({
        domManip: E,
        detach: function(e) {
            return N(this, e, !0)
        },
        remove: function(e) {
            return N(this, e)
        },
        text: function(e) {
            return _e(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return E(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return E(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return E(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return E(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return _e(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                if ("string" == typeof e && !nt.test(e) && (de.htmlSerialize || !et.test(e)) && (de.leadingWhitespace || !Pe.test(e)) && !Xe[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(h(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return E(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(h(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, i = 0, r = [], o = pe(e), a = o.length - 1; i <= a; i++) n = i === a ? this : this.clone(!0), pe(o[i])[t](n), ae.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var lt, ut = {
            HTML: "block",
            BODY: "block"
        },
        ct = /^margin/,
        dt = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$", "i"),
        ft = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        },
        pt = ie.documentElement;
    ! function() {
        function t() {
            var t, c, d = ie.documentElement;
            d.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = s = !1, i = a = !0, e.getComputedStyle && (c = e.getComputedStyle(u), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                width: "4px"
            }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, t = u.appendChild(ie.createElement("div")), t.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", u.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), u.removeChild(t)), u.style.display = "none", o = 0 === u.getClientRects().length, o && (u.style.display = "",
                u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", t = u.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === t[0].offsetHeight, o && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), d.removeChild(l)
        }
        var n, i, r, o, a, s, l = ie.createElement("div"),
            u = ie.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === u.style.opacity, de.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === u.style.backgroundClip, l = ie.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), de.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, pe.extend(de, {
            reliableHiddenOffsets: function() {
                return null == n && t(), o
            },
            boxSizingReliable: function() {
                return null == n && t(), r
            },
            pixelMarginRight: function() {
                return null == n && t(), i
            },
            pixelPosition: function() {
                return null == n && t(), n
            },
            reliableMarginRight: function() {
                return null == n && t(), a
            },
            reliableMarginLeft: function() {
                return null == n && t(), s
            }
        }))
    }();
    var ht, mt, gt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ht = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, mt = function(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || ht(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), n && !de.pixelMarginRight() && dt.test(a) && ct.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 === a ? a : a + ""
    }) : pt.currentStyle && (ht = function(e) {
        return e.currentStyle
    }, mt = function(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || ht(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), dt.test(a) && !gt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
    });
    var vt = /alpha\([^)]*\)/i,
        yt = /opacity\s*=\s*([^)]*)/i,
        bt = /^(none|table(?!-c[ea]).+)/,
        xt = new RegExp("^(" + Oe + ")(.*)$", "i"),
        wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ct = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Tt = ["Webkit", "O", "Moz", "ms"],
        At = ie.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = mt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = pe.camelCase(t),
                    l = e.style;
                if (t = pe.cssProps[s] || (pe.cssProps[s] = M(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                if (o = typeof n, "string" === o && (r = qe.exec(n)) && r[1] && (n = f(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (pe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                    l[t] = n
                } catch (e) {}
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = M(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = mt(e, t, i)), "normal" === o && t in Ct && (o = Ct[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), pe.each(["height", "width"], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return bt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? ft(e, wt, function() {
                    return q(e, t, i)
                }) : q(e, t, i)
            },
            set: function(e, n, i) {
                var r = i && ht(e);
                return I(e, n, i ? O(e, t, i, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), de.opacity || (pe.cssHooks.opacity = {
        get: function(e, t) {
            return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(vt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = vt.test(o) ? o.replace(vt, r) : o + " " + r)
        }
    }), pe.cssHooks.marginRight = j(de.reliableMarginRight, function(e, t) {
        if (t) return ft(e, {
            display: "inline-block"
        }, mt, [e, "marginRight"])
    }), pe.cssHooks.marginLeft = j(de.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(mt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ft(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Fe[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, ct.test(e) || (pe.cssHooks[e + t].set = I)
    }), pe.fn.extend({
        css: function(e, t) {
            return _e(this, function(e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (pe.isArray(t)) {
                    for (i = ht(e), r = t.length; a < r; a++) o[t[a]] = pe.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return H(this, !0)
        },
        hide: function() {
            return H(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                $e(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }), pe.Tween = F, F.prototype = {
        constructor: F,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, pe.fx = F.prototype.init, pe.fx.step = {};
    var kt, St, Et = /^(?:toggle|show|hide)$/,
        Nt = /queueHooks$/;
    pe.Animation = pe.extend(P, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return f(n.elem, e, qe.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Le);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], P.tweeners[n] = P.tweeners[n] || [], P.tweeners[n].unshift(t)
            },
            prefilters: [R],
            prefilter: function(e, t) {
                t ? P.prefilters.unshift(e) : P.prefilters.push(e)
            }
        }), pe.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? pe.extend({}, e) : {
                complete: n || !n && t || pe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !pe.isFunction(t) && t
            };
            return i.duration = pe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pe.fx.speeds ? pe.fx.speeds[i.duration] : pe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue)
            }, i
        }, pe.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter($e).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = pe.isEmptyObject(e),
                    o = pe.speed(t, n, i),
                    a = function() {
                        var t = P(this, pe.extend({}, e), o);
                        (r || pe._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = pe.timers,
                        a = pe._data(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && Nt.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || pe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = pe._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = pe.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, pe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), pe.each(["toggle", "show", "hide"], function(e, t) {
            var n = pe.fn[t];
            pe.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, i, r)
            }
        }), pe.each({
            slideDown: _("show"),
            slideUp: _("hide"),
            slideToggle: _("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            pe.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), pe.timers = [], pe.fx.tick = function() {
            var e, t = pe.timers,
                n = 0;
            for (kt = pe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || pe.fx.stop(), kt = void 0
        }, pe.fx.timer = function(e) {
            pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
        }, pe.fx.interval = 13, pe.fx.start = function() {
            St || (St = e.setInterval(pe.fx.tick, pe.fx.interval))
        }, pe.fx.stop = function() {
            e.clearInterval(St), St = null
        }, pe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, pe.fn.delay = function(t, n) {
            return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e, t = ie.createElement("input"),
                n = ie.createElement("div"),
                i = ie.createElement("select"),
                r = i.appendChild(ie.createElement("option"));
            n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = r.selected, de.enctype = !!ie.createElement("form").enctype, i.disabled = !0, de.optDisabled = !r.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
        }();
    var Lt = /\r/g,
        Dt = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0]; {
                if (arguments.length) return i = pe.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, pe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : pe.isArray(r) && (r = pe.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Lt, "") : null == n ? "" : n)
            }
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e)).replace(Dt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                        if (n = i[l], (n.selected || l === r) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = pe.makeArray(t), a = r.length; a--;)
                        if (i = r[a], pe.inArray(pe.valHooks.option.get(i), o) > -1) try {
                            i.selected = n = !0
                        } catch (e) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1
            }
        }, de.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var jt, Mt, Ht = pe.expr.attrHandle,
        It = /^(?:checked|selected)$/i,
        Ot = de.getSetAttribute,
        qt = de.input;
    pe.fn.extend({
        attr: function(e, t) {
            return _e(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }), pe.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), r = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Mt : jt)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = pe.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(Le);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? qt && Ot || !It.test(n) ? e[i] = !1 : e[pe.camelCase("default-" + n)] = e[i] = !1 : pe.attr(e, n, ""), e.removeAttribute(Ot ? n : i)
        }
    }), Mt = {
        set: function(e, t, n) {
            return t === !1 ? pe.removeAttr(e, n) : qt && Ot || !It.test(n) ? e.setAttribute(!Ot && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ht[t] || pe.find.attr;
        qt && Ot || !It.test(t) ? Ht[t] = function(e, t, i) {
            var r, o;
            return i || (o = Ht[t], Ht[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Ht[t] = o), r
        } : Ht[t] = function(e, t, n) {
            if (!n) return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), qt && Ot || (pe.attrHooks.value = {
        set: function(e, t, n) {
            return pe.nodeName(e, "input") ? void(e.defaultValue = t) : jt && jt.set(e, t, n)
        }
    }), Ot || (jt = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, Ht.id = Ht.name = Ht.coords = function(e, t, n) {
        var i;
        if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, pe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: jt.set
    }, pe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            jt.set(e, "" !== t && t, n)
        }
    }, pe.each(["width", "height"], function(e, t) {
        pe.attrHooks[t] = {
            set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n
            }
        }
    })), de.style || (pe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Ft = /^(?:input|select|textarea|button|object)$/i,
        $t = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return _e(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = pe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), pe.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, r = pe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ft.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), de.hrefNormalized || pe.each(["href", "src"], function(e, t) {
        pe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), de.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    }), de.enctype || (pe.propFix.enctype = "encoding");
    var _t = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).addClass(e.call(this, t, W(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Le) || []; n = this[l++];)
                    if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(_t, " ")) {
                        for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = pe.trim(i), r !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).removeClass(e.call(this, t, W(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Le) || []; n = this[l++];)
                    if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(_t, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        s = pe.trim(i), r !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, W(this), t), t)
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = pe(this), o = e.match(Le) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = W(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || e === !1 ? "" : pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + W(n) + " ").replace(_t, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var zt = e.location,
        Rt = pe.now(),
        Bt = /\?/,
        Pt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            r = pe.trim(t + "");
        return r && !pe.trim(r.replace(Pt, function(e, t, r, o) {
            return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
        })) ? Function("return " + r)() : pe.error("Invalid JSON: " + t)
    }, pe.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
    };
    var Wt = /#.*$/,
        Xt = /([?&])_=[^&]*/,
        Ut = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Gt = /^(?:GET|HEAD)$/,
        Yt = /^\/\//,
        Qt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Jt = {},
        Kt = {},
        Zt = "*/".concat("*"),
        en = zt.href,
        tn = Qt.exec(en.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: en,
            type: "GET",
            isLocal: Vt.test(tn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pe.parseJSON,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e)
        },
        ajaxPrefilter: X(Jt),
        ajaxTransport: X(Kt),
        ajax: function(t, n) {
            function i(t, n, i, r) {
                var o, d, y, b, w, T = n;
                2 !== x && (x = 2, l && e.clearTimeout(l), c = void 0, s = r || "", C.readyState = t > 0 ? 4 : 0, o = t >= 200 && t < 300 || 304 === t, i && (b = G(f, C, i)), b = Y(f, b, C, o), o ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (pe.lastModified[a] = w), w = C.getResponseHeader("etag"), w && (pe.etag[a] = w)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, y = b.error, o = !y)) : (y = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", o ? m.resolveWith(p, [d, T, C]) : m.rejectWith(p, [C, T, y]), C.statusCode(v), v = void 0, u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [C, f, o ? d : y]), g.fireWith(p, [C, T]), u && (h.trigger("ajaxComplete", [C, f]), --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, a, s, l, u, c, d, f = pe.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
                m = pe.Deferred(),
                g = pe.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!d)
                                for (d = {}; t = Ut.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (x < 2)
                                for (t in e) v[t] = [v[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t), i(0, t), this
                    }
                };
            if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, f.url = ((t || f.url || en) + "").replace(Wt, "").replace(Yt, tn[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = pe.trim(f.dataType || "*").toLowerCase().match(Le) || [""], null == f.crossDomain && (r = Qt.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === tn[1] && r[2] === tn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = pe.param(f.data, f.traditional)), U(Jt, f, n, C), 2 === x) return C;
            u = pe.event && f.global, u && 0 === pe.active++ && pe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Gt.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Bt.test(a) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Xt.test(a) ? a.replace(Xt, "$1_=" + Rt++) : a + (Bt.test(a) ? "&" : "?") + "_=" + Rt++)), f.ifModified && (pe.lastModified[a] && C.setRequestHeader("If-Modified-Since", pe.lastModified[a]), pe.etag[a] && C.setRequestHeader("If-None-Match", pe.etag[a])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers) C.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (f.beforeSend.call(p, C, f) === !1 || 2 === x)) return C.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[o](f[o]);
            if (c = U(Kt, f, n, C)) {
                if (C.readyState = 1, u && h.trigger("ajaxSend", [C, f]), 2 === x) return C;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, c.send(y, i)
                } catch (e) {
                    if (!(x < 2)) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }), pe.each(["get", "post"], function(e, t) {
        pe[t] = function(e, n, i, r) {
            return pe.isFunction(n) && (r = r || i, i = n, n = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, pe.isPlainObject(e) && e))
        }
    }), pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, pe.fn.extend({
        wrapAll: function(e) {
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), pe.expr.filters.hidden = function(e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : J(e)
    }, pe.expr.filters.visible = function(e) {
        return !pe.expr.filters.hidden(e)
    };
    var nn = /%20/g,
        rn = /\[\]$/,
        on = /\r?\n/g,
        an = /^(?:submit|button|image|reset|file)$/i,
        sn = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = pe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) K(n, e[n], t, r);
        return i.join("&").replace(nn, "+")
    }, pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && sn.test(this.nodeName) && !an.test(e) && (this.checked || !ze.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : ie.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var ln = 0,
        un = {},
        cn = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in un) un[e](void 0, !0)
    }), de.cors = !!cn && "withCredentials" in cn, cn = de.ajax = !!cn, cn && pe.ajaxTransport(function(t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return {
                send: function(i, r) {
                    var o, a = t.xhr(),
                        s = ++ln;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i) void 0 !== i[o] && a.setRequestHeader(o, i[o] + "");
                    a.send(t.hasContent && t.data || null), n = function(e, i) {
                        var o, l, u;
                        if (n && (i || 4 === a.readyState))
                            if (delete un[s], n = void 0, a.onreadystatechange = pe.noop, i) 4 !== a.readyState && a.abort();
                            else {
                                u = {}, o = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (e) {
                                    l = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                            }
                        u && r(o, l, u, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = un[s] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }), pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e), e
            }
        }
    }), pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ie.head || pe("head")[0] || ie.documentElement;
            return {
                send: function(i, r) {
                    t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var dn = [],
        fn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = dn.pop() || pe.expando + "_" + Rt++;
            return this[e] = !0, e
        }
    }), pe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = t.jsonp !== !1 && (fn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && fn.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(fn, "$1" + r) : t.jsonp !== !1 && (t.url += (Bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || pe.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, i.always(function() {
            void 0 === o ? pe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, dn.push(r)), a && pe.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), pe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ie;
        var i = Ce.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = v([e], t, r), r && r.length && pe(r).remove(), pe.merge([], i.childNodes))
    };
    var pn = pe.fn.load;
    pe.fn.load = function(e, t, n) {
        if ("string" != typeof e && pn) return pn.apply(this, arguments);
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (i = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && pe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), pe.expr.filters.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem
        }).length
    }, pe.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, u, c = pe.css(e, "position"),
                d = pe(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = pe.css(e, "top"), l = pe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && pe.inArray("auto", [o, l]) > -1, u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, pe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                pe.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            if (o) return t = o.documentElement, pe.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = te(o), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === pe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - pe.css(i, "marginTop", !0),
                    left: t.left - n.left - pe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
                return e || pt
            })
        }
    }), pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function(i) {
            return _e(this, function(e, i, r) {
                var o = te(e);
                return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? pe(o).scrollLeft() : r, n ? r : pe(o).scrollTop()) : e[i] = r)
            }, e, i, arguments.length, null)
        }
    }), pe.each(["top", "left"], function(e, t) {
        pe.cssHooks[t] = j(de.pixelPosition, function(e, n) {
            if (n) return n = mt(e, t), dt.test(n) ? pe(e).position()[t] + "px" : n
        })
    }), pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            pe.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || r === !0 ? "margin" : "border");
                return _e(this, function(t, n, i) {
                    var r;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? pe.css(t, n, a) : pe.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), pe.fn.size = function() {
        return this.length
    }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var hn = e.jQuery,
        mn = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = mn), t && e.jQuery === pe && (e.jQuery = hn), pe
    }, t || (e.jQuery = e.$ = pe), pe
}), ! function(e, t) {
    "use strict";

    function n(n, i, o, s, l) {
        function u() {
            A = e.devicePixelRatio > 1, o = c(o), i.delay >= 0 && setTimeout(function() {
                d(!0)
            }, i.delay), (i.delay < 0 || i.combined) && (s.e = y(i.throttle, function(e) {
                "resize" === e.type && (C = T = -1), d(e.all)
            }), s.a = function(e) {
                e = c(e), o.push.apply(o, e)
            }, s.g = function() {
                return o = r(o).filter(function() {
                    return !r(this).data(i.loadedName)
                })
            }, s.f = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = o.filter(function() {
                        return this === e[t]
                    });
                    n.length && d(!1, n);
                }
            }, d(), r(i.appendScroll).on("scroll." + l + " resize." + l, s.e))
        }

        function c(e) {
            var o = i.defaultImage,
                a = i.placeholder,
                s = i.imageBase,
                l = i.srcsetAttribute,
                u = i.loaderAttribute,
                c = i._f || {};
            e = r(e).filter(function() {
                var e = r(this),
                    n = g(this);
                return !e.data(i.handledName) && (e.attr(i.attribute) || e.attr(l) || e.attr(u) || c[n] !== t)
            }).data("plugin_" + i.name, n);
            for (var d = 0, f = e.length; d < f; d++) {
                var p = r(e[d]),
                    h = g(e[d]),
                    m = p.attr(i.imageBaseAttribute) || s;
                h === N && m && p.attr(l) && p.attr(l, v(p.attr(l), m)), c[h] === t || p.attr(u) || p.attr(u, c[h]), h === N && o && !p.attr(L) ? p.attr(L, o) : h === N || !a || p.css(M) && "none" !== p.css(M) || p.css(M, "url('" + a + "')")
            }
            return e
        }

        function d(e, t) {
            if (!o.length) return void(i.autoDestroy && n.destroy());
            for (var a = t || o, s = !1, l = i.imageBase || "", u = i.srcsetAttribute, c = i.handledName, d = 0; d < a.length; d++)
                if (e || t || p(a[d])) {
                    var h = r(a[d]),
                        m = g(a[d]),
                        v = h.attr(i.attribute),
                        y = h.attr(i.imageBaseAttribute) || l,
                        b = h.attr(i.loaderAttribute);
                    h.data(c) || i.visibleOnly && !h.is(":visible") || !((v || h.attr(u)) && (m === N && (y + v !== h.attr(L) || h.attr(u) !== h.attr(D)) || m !== N && y + v !== h.css(M)) || b) || (s = !0, h.data(c, !0), f(h, m, y, b))
                }
            s && (o = r(o).filter(function() {
                return !r(this).data(c)
            }))
        }

        function f(e, t, n, o) {
            ++w;
            var a = function() {
                x("onError", e), b(), a = r.noop
            };
            x("beforeLoad", e);
            var s = i.attribute,
                l = i.srcsetAttribute,
                u = i.sizesAttribute,
                c = i.retinaAttribute,
                d = i.removeAttribute,
                f = i.loadedName,
                p = e.attr(c);
            if (o) {
                var h = function() {
                    d && e.removeAttr(i.loaderAttribute), e.data(f, !0), x(k, e), setTimeout(b, 1), h = r.noop
                };
                e.off(E).one(E, a).one(S, h), x(o, e, function(t) {
                    t ? (e.off(S), h()) : (e.off(E), a())
                }) || e.trigger(E)
            } else {
                var m = r(new Image);
                m.one(E, a).one(S, function() {
                    e.hide(), t === N ? e.attr(j, m.attr(j)).attr(D, m.attr(D)).attr(L, m.attr(L)) : e.css(M, "url('" + m.attr(L) + "')"), e[i.effect](i.effectTime), d && (e.removeAttr(s + " " + l + " " + c + " " + i.imageBaseAttribute), u !== j && e.removeAttr(u)), e.data(f, !0), x(k, e), m.remove(), b()
                });
                var g = (A && p ? p : e.attr(s)) || "";
                m.attr(j, e.attr(u)).attr(D, e.attr(l)).attr(L, g ? n + g : null), m.complete && m.trigger(S)
            }
        }

        function p(e) {
            var t = e.getBoundingClientRect(),
                n = i.scrollDirection,
                r = i.threshold,
                o = m() + r > t.top && -r < t.bottom,
                a = h() + r > t.left && -r < t.right;
            return "vertical" === n ? o : "horizontal" === n ? a : o && a
        }

        function h() {
            return C >= 0 ? C : C = r(e).width()
        }

        function m() {
            return T >= 0 ? T : T = r(e).height()
        }

        function g(e) {
            return e.tagName.toLowerCase()
        }

        function v(e, t) {
            if (t) {
                var n = e.split(",");
                e = "";
                for (var i = 0, r = n.length; i < r; i++) e += t + n[i].trim() + (i !== r - 1 ? "," : "")
            }
            return e
        }

        function y(e, t) {
            var r, o = 0;
            return function(a, s) {
                function l() {
                    o = +new Date, t.call(n, a)
                }
                var u = +new Date - o;
                r && clearTimeout(r), u > e || !i.enableThrottle || s ? l() : r = setTimeout(l, e - u)
            }
        }

        function b() {
            --w, o.length || w || x("onFinishedAll")
        }

        function x(e) {
            return !!(e = i[e]) && (e.apply(n, [].slice.call(arguments, 1)), !0)
        }
        var w = 0,
            C = -1,
            T = -1,
            A = !1,
            k = "afterLoad",
            S = "load",
            E = "error",
            N = "img",
            L = "src",
            D = "srcset",
            j = "sizes",
            M = "background-image";
        "event" === i.bind || a ? u() : r(e).on(S + "." + l, u)
    }

    function i(i, a) {
        var s = this,
            l = r.extend({}, s.config, a),
            u = {},
            c = l.name + "-" + ++o;
        return s.config = function(e, n) {
            return n === t ? l[e] : (l[e] = n, s)
        }, s.addItems = function(e) {
            return u.a && u.a("string" === r.type(e) ? r(e) : e), s
        }, s.getItems = function() {
            return u.g ? u.g() : {}
        }, s.update = function(e) {
            return u.e && u.e({}, !e), s
        }, s.force = function(e) {
            return u.f && u.f("string" === r.type(e) ? r(e) : e), s
        }, s.loadAll = function() {
            return u.e && u.e({
                all: !0
            }, !0), s
        }, s.destroy = function() {
            return r(l.appendScroll).off("." + c, u.e), r(e).off("." + c), u = {}, t
        }, n(s, l, i, u, c), l.chainable ? i : s
    }
    var r = e.jQuery || e.Zepto,
        o = 0,
        a = !1;
    r.fn.Lazy = r.fn.lazy = function(e) {
        return new i(this, e)
    }, r.Lazy = r.lazy = function(e, n, o) {
        if (r.isFunction(n) && (o = n, n = []), r.isFunction(o)) {
            e = r.isArray(e) ? e : [e], n = r.isArray(n) ? n : [n];
            for (var a = i.prototype.config, s = a._f || (a._f = {}), l = 0, u = e.length; l < u; l++)(a[e[l]] === t || r.isFunction(a[e[l]])) && (a[e[l]] = o);
            for (var c = 0, d = n.length; c < d; c++) s[n[c]] = e[0]
        }
    }, i.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: e,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: t,
        afterLoad: t,
        onError: t,
        onFinishedAll: t
    }, r(e).on("load", function() {
        a = !0
    })
}(window);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
};
! function(e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = t(): "function" == typeof define && define.amd ? define([], function() {
        return e.Humanize = t()
    }) : e.Humanize = t()
}(this, function() {
    var e = [{
            name: "second",
            value: 1e3
        }, {
            name: "minute",
            value: 6e4
        }, {
            name: "hour",
            value: 36e5
        }, {
            name: "day",
            value: 864e5
        }, {
            name: "week",
            value: 6048e5
        }],
        t = {
            P: Math.pow(2, 50),
            T: Math.pow(2, 40),
            G: Math.pow(2, 30),
            M: Math.pow(2, 20)
        },
        n = function(e) {
            return "undefined" != typeof e && null !== e
        },
        i = function(e) {
            return e !== e
        },
        r = function(e) {
            return isFinite(e) && !i(parseFloat(e))
        },
        o = function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object Array]" === t
        },
        a = {
            intword: function(e) {
                var t = arguments.length <= 2 || void 0 === arguments[2] ? 2 : arguments[2];
                return a.compactInteger(e, t)
            },
            compactInteger: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1];
                t = Math.max(t, 0);
                var n = parseInt(e, 10),
                    i = n < 0 ? "-" : "",
                    r = Math.abs(n),
                    o = String(r),
                    a = o.length,
                    s = [13, 10, 7, 4],
                    l = ["T", "B", "M", "k"];
                if (r < 1e3) return "" + i + o;
                if (a > s[0] + 3) return n.toExponential(t).replace("e+", "x10^");
                for (var u = void 0, c = 0; c < s.length; c++) {
                    var d = s[c];
                    if (a >= d) {
                        u = d;
                        break
                    }
                }
                var f = a - u + 1,
                    p = o.split(""),
                    h = p.slice(0, f),
                    m = p.slice(f, f + t + 1),
                    g = h.join(""),
                    v = m.join("");
                v.length < t && (v += "" + Array(t - v.length + 1).join("0"));
                var y = void 0;
                if (0 === t) y = "" + i + g + l[s.indexOf(u)];
                else {
                    var b = Number(g + "." + v).toFixed(t);
                    y = "" + i + b + l[s.indexOf(u)]
                }
                return y
            },
            intComma: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1];
                return a.formatNumber(e, t)
            },
            intcomma: function() {
                return a.intComma.apply(a, arguments)
            },
            fileSize: function(e) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? 2 : arguments[1];
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        var r = t[i];
                        if (e >= r) return a.formatNumber(e / r, n, "") + " " + i + "B"
                    }
                return e >= 1024 ? a.formatNumber(e / 1024, 0) + " KB" : a.formatNumber(e, 0) + a.pluralize(e, " byte")
            },
            filesize: function() {
                return a.fileSize.apply(a, arguments)
            },
            formatNumber: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                    n = arguments.length <= 2 || void 0 === arguments[2] ? "," : arguments[2],
                    i = arguments.length <= 3 || void 0 === arguments[3] ? "." : arguments[3],
                    r = function(e, t, n) {
                        return n ? e.substr(0, n) + t : ""
                    },
                    o = function(e, t, n) {
                        return e.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + t)
                    },
                    s = function(e, t, n) {
                        return n ? t + a.toFixed(Math.abs(e), n).split(".")[1] : ""
                    },
                    l = a.normalizePrecision(t),
                    u = e < 0 && "-" || "",
                    c = String(parseInt(a.toFixed(Math.abs(e || 0), l), 10)),
                    d = c.length > 3 ? c.length % 3 : 0;
                return u + r(c, n, d) + o(c, n, d) + s(e, i, l)
            },
            toFixed: function(e, t) {
                t = n(t) ? t : a.normalizePrecision(t, 0);
                var i = Math.pow(10, t);
                return (Math.round(e * i) / i).toFixed(t)
            },
            normalizePrecision: function(e, t) {
                return e = Math.round(Math.abs(e)), i(e) ? t : e
            },
            ordinal: function(e) {
                var t = parseInt(e, 10);
                if (0 === t) return e;
                var n = t % 100;
                if ([11, 12, 13].indexOf(n) >= 0) return t + "th";
                var i = t % 10,
                    r = void 0;
                switch (i) {
                    case 1:
                        r = "st";
                        break;
                    case 2:
                        r = "nd";
                        break;
                    case 3:
                        r = "rd";
                        break;
                    default:
                        r = "th"
                }
                return "" + t + r
            },
            times: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if (r(e) && e >= 0) {
                    var i = parseFloat(e),
                        o = ["never", "once", "twice"];
                    if (n(t[i])) return String(t[i]);
                    var a = n(o[i]) && o[i].toString();
                    return a || i.toString() + " times"
                }
                return null
            },
            pluralize: function(e, t, i) {
                return n(e) && n(t) ? (i = n(i) ? i : t + "s", 1 === parseInt(e, 10) ? t : i) : null
            },
            truncate: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? 100 : arguments[1],
                    n = arguments.length <= 2 || void 0 === arguments[2] ? "..." : arguments[2];
                return e.length > t ? e.substring(0, t - n.length) + n : e
            },
            truncateWords: function(e, t) {
                for (var i = e.split(" "), r = "", o = 0; o < t;) n(i[o]) && (r += i[o] + " "), o++;
                return i.length > t ? r + "..." : null
            },
            truncatewords: function() {
                return a.truncateWords.apply(a, arguments)
            },
            boundedNumber: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? 100 : arguments[1],
                    n = arguments.length <= 2 || void 0 === arguments[2] ? "+" : arguments[2],
                    i = void 0;
                return r(e) && r(t) && e > t && (i = t + n), (i || e).toString()
            },
            truncatenumber: function() {
                return a.boundedNumber.apply(a, arguments)
            },
            oxford: function(e, t, i) {
                var r = e.length,
                    o = void 0;
                if (r < 2) return String(e);
                if (2 === r) return e.join(" and ");
                if (n(t) && r > t) {
                    var s = r - t;
                    o = t, i = n(i) ? i : ", and " + s + " " + a.pluralize(s, "other")
                } else o = -1, i = ", and " + e[r - 1];
                return e.slice(0, o).join(", ") + i
            },
            dictionary: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? " is " : arguments[1],
                    i = arguments.length <= 2 || void 0 === arguments[2] ? ", " : arguments[2],
                    r = "";
                if (n(e) && "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) && !o(e)) {
                    var a = [];
                    for (var s in e)
                        if (e.hasOwnProperty(s)) {
                            var l = e[s];
                            a.push("" + s + t + l)
                        }
                    return a.join(i)
                }
                return r
            },
            frequency: function(e, t) {
                if (!o(e)) return null;
                var n = e.length,
                    i = a.times(n);
                return 0 === n ? i + " " + t : t + " " + i
            },
            pace: function(t, n) {
                var i = arguments.length <= 2 || void 0 === arguments[2] ? "time" : arguments[2];
                if (0 === t || 0 === n) return "No " + a.pluralize(0, i);
                for (var r = "Approximately", o = void 0, s = void 0, l = t / n, u = 0; u < e.length; ++u) {
                    var c = e[u];
                    if (s = l * c.value, s > 1) {
                        o = c.name;
                        break
                    }
                }
                o || (r = "Less than", s = 1, o = e[e.length - 1].name);
                var d = Math.round(s);
                return i = a.pluralize(d, i), r + " " + d + " " + i + " per " + o
            },
            nl2br: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? "<br/>" : arguments[1];
                return e.replace(/\n/g, t)
            },
            br2nl: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? "\r\n" : arguments[1];
                return e.replace(/\<br\s*\/?\>/g, t)
            },
            capitalize: function(e) {
                var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                return "" + e.charAt(0).toUpperCase() + (t ? e.slice(1).toLowerCase() : e.slice(1))
            },
            capitalizeAll: function(e) {
                return e.replace(/(?:^|\s)\S/g, function(e) {
                    return e.toUpperCase()
                })
            },
            titleCase: function(e) {
                var t = /\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,
                    n = /\S+[A-Z]+\S*/,
                    i = /\s+/,
                    r = /-/,
                    o = void 0;
                return (o = function(e) {
                    for (var s = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1], l = arguments.length <= 2 || void 0 === arguments[2] || arguments[2], u = [], c = e.split(s ? r : i), d = 0; d < c.length; ++d) {
                        var f = c[d];
                        f.indexOf("-") === -1 ? !l || 0 !== d && d !== c.length - 1 ? n.test(f) ? u.push(f) : t.test(f) ? u.push(f.toLowerCase()) : u.push(a.capitalize(f)) : u.push(n.test(f) ? f : a.capitalize(f)) : u.push(o(f, !0, 0 === d || d === c.length - 1))
                    }
                    return u.join(s ? "-" : " ")
                })(e)
            },
            titlecase: function() {
                return a.titleCase.apply(a, arguments)
            }
        };
    return a
}), $(document).ready(function() {
        function e(e) {
            if (e) return document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), c_start != -1) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), c_end == -1 && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : void 0
        }

        function t(e, t, n) {
            var i = new Date,
                r = document.location.hostname.replace("www.", "");
            i.setHours(i.getHours() + n), document.cookie = e + "=" + t + "; path=/; Domain=" + r + "; expires=" + i.toGMTString()
        }

        function n() {
            $("#sharer-side").find(".fb").addClass("hover"), window.setTimeout(function() {
                $("#sharer-side").find(".tw").addClass("hover"), $("#sharer-side").find(".fb").removeClass("hover"), window.setTimeout(function() {
                    $("#sharer-side").find(".tw").removeClass("hover")
                }, 300)
            }, 300)
        }

        function i(e) {
            var t = e.data("src"),
                n = e.data("title"),
                i = e.data("channelName"),
                r = e.data("channelLink");
            $("#video_player").attr("src", "https://www.youtube.com/embed/" + t + "?autoplay=1&modestbranding=1"), $(".modal-content .modal-video-name").html(n), $(".modal-content .modal-channel-name").html(i), $(".modal-content .modal-video-name").attr("href", r), $(".modal-content .modal-channel-name").attr("href", r), dataLayer.push({
                event: "modalOpen"
            }), $("#video-player").modal("show")
        }
        var r = $(window).width(),
            o = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) && !window.MSStream;
        if (!o) {
            var a = "::-webkit-scrollbar{width:10px;height:14px;cursor:pointer}::-webkit-scrollbar-button{width:0;height:0}::-webkit-scrollbar-thumb{background:#e2e0e0;border:1px solid #f2f0f0;border-radius:50px}::-webkit-scrollbar-thumb:hover{background:#c2c0c0}::-webkit-scrollbar-track{background:#fff;border:1px solid #e2e0e0;border-radius:60px}::-webkit-scrollbar-track:active{background:#f5f5f5}::-webkit-scrollbar-corner{background:transparent}",
                s = document.createElement("style");
            s.setAttribute("type", "text/css"), s.appendChild(document.createTextNode(a)), document.body.appendChild(s)
        }
        $(".navbar-toggle").on("click", function() {
            $(".icons-bar").toggleClass("open")
        });
        var l = !0;
        $("nav").find("input").on("keyup", function() {
            l && ($("nav").find(".navbar-form").find("button").fadeTo("fast", 1), $("nav").find(".navbar-form").find("button").css("display", "block"), l = !1), window.setTimeout(function() {
                l = !0
            }, 1e3)
        }), $("nav").find("input").on("focus", function() {
            $(this).val().length > 0 && ($("nav").find(".navbar-form").find("button").fadeTo("fast", 1), $("nav").find(".navbar-form").find("button").css("display", "block")), r < 1020 && r > 799 && ($(this).fadeTo("fast", 1), $(this).animate({
                width: "280px"
            }, 300), $("nav").find("input").attr("placeholder", "Youtube channel name"))
        }), $("nav").find("input").on("blur", function() {
            window.setTimeout(function() {
                $("nav").find(".navbar-form").find("button").fadeTo("fast", 0), r < 1020 && r > 799 && ($("nav").find(".navbar-form").find("button").css({
                    display: "none"
                }), $("nav").find("input").animate({
                    width: "40px"
                }, 300), $("nav").find("input").fadeTo("fast", 0), $("nav").find("input").css({
                    padding: "0 0 0 40px"
                }), $("nav").find("input").attr("placeholder", "Search"))
            }, 1e3)
        }), r > 799 && window.setTimeout(function() {
            n(), window.setTimeout(function() {
                n()
            }, 900)
        }, 3e4);
        var u = !1;
        $("#homepage").length > 0 && !e("hpSlide") && r < 1550 && r > 419 ? ($(window).scroll(function() {
            if (!u) {
                var e = $(".countries").eq(0);
                window.setTimeout(function() {
                    e.animate({
                        scrollLeft: 550
                    }, 1e3), e.animate({
                        scrollLeft: 0
                    }, 500)
                }, 1e3), t("hpSlide", "true", 48), u = !0
            }
        }), $("#sharer-side").hide()) : "true" == e("hpSlide") && t("hpSlide", "true", 48), $(".fullscreen").on("click", function() {
            $("#live").hasClass("fs") ? ($("html, body").animate({
                scrollTop: "0px"
            }, 800), $("#live").css("padding-top", 1), $("#live").height("auto"), $(".live-info form").fadeIn(1e3), window.setTimeout(function() {
                $(".fullscreen").html('<span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>fullscreen')
            }, 250)) : ($("html, body").animate({
                scrollTop: "100px"
            }, 800), $(".live-info form").fadeOut(1e3), $("#live").css("padding-top", $("#live").height() - ($("#live .live-inner").height() + $("#live .live-info").height() + 60)), $("#live").height($(window).height()), window.setTimeout(function() {
                $(".fullscreen").html('<span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>exit fullscreen')
            }, 1100)), $("#live").toggleClass("fs")
        }), $("#video-player").on("hidden.bs.modal", function() {
            var e = document.getElementById("video_player");
            null != e && (e.src = "")
        }), $("#modal-close").on("click", function() {
            $("#video-player").modal("hide")
        }), $(".video-link").click(function(e) {
            e.preventDefault(), i($(this))
        }), $(".window-link").click(function(e) {
            e.preventDefault();
            var t = $(this);
            window.open(t.attr("href"), t.data("shareOn"), "width=500,height=500,toolbar=1,resizable=1")
        }), $("#language_selector").change(function() {
            window.location.href = $(this).val()
        }), document.location.hash.indexOf("open_nav") > -1 && $("nav button").eq(0).trigger("click"), $("#autocomplete").tinyAutocomplete({
            url: "/ac.json",
            itemTemplate: '<li class="autocomplete-item"><img src="{{image}}"> {{title}}</li>',
            maxItems: 7,
            maxItemsOnMobile: 7,
            showNoResults: !1,
            onSelect: function(e, t) {
                null != t && (dataLayer.push({
                    event: "gaEvent",
                    gaEventData: {
                        eCat: "Autocomplete",
                        eAct: "Click",
                        eLab: t.title.trim().toLowerCase(),
                        eVal: 1
                    },
                    eInt: !1,
                    eventCallback: function() {
                        dataLayer.push({
                            gaEventData: void 0,
                            eInt: !1
                        })
                    }
                }), window.location = "/" + t.id + "#search=" + t.title)
            }
        })
    }),
    function() {
        var e, t, n, i, r, o, a, s, l, u, c, d, f, p, h, m, g, v, y, b, x, w, C, T, A, k, S, E, N, L, D, j, M = [].slice;
        g = '<span class="odometer-value"></span>', p = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + g + "</span></span>", i = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + p + "</span></span>", a = '<span class="odometer-formatting-mark"></span>', n = "(,ddd).dd", s = /^\(?([^)]*)\)?(?:(.)(d+))?$/, l = 30, o = 2e3, e = 20, u = 2, r = .5, c = 1e3 / l, t = 1e3 / e, h = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", A = document.createElement("div").style, m = null != A.transition || null != A.webkitTransition || null != A.mozTransition || null != A.oTransition, C = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, y = function(e) {
            var t;
            return t = document.createElement("div"), t.innerHTML = e, t.children[0]
        }, w = function(e, t) {
            return e.className = e.className.replace(new RegExp("(^| )" + t.split(" ").join("|") + "( |$)", "gi"), " ")
        }, v = function(e, t) {
            return w(e, t), e.className += " " + t
        }, k = function(e, t) {
            var n;
            return null != document.createEvent ? (n = document.createEvent("HTMLEvents"), n.initEvent(t, !0, !0), e.dispatchEvent(n)) : void 0
        }, x = function() {
            var e, t;
            return null != (e = null != (t = window.performance) && "function" == typeof t.now ? t.now() : void 0) ? e : +new Date
        }, T = function(e, t) {
            return null == t && (t = 0), t ? (e *= Math.pow(10, t), e += .5, e = Math.floor(e), e /= Math.pow(10, t)) : Math.round(e)
        }, S = function(e) {
            return 0 > e ? Math.ceil(e) : Math.floor(e)
        }, b = function(e) {
            return e - T(e)
        }, N = !1, (E = function() {
            var e, t, n, i, r;
            if (!N && null != window.jQuery) {
                for (N = !0, i = ["html", "text"], r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(function(e) {
                    var t;
                    return t = window.jQuery.fn[e], window.jQuery.fn[e] = function(e) {
                        var n;
                        return null == e || null == (null != (n = this[0]) ? n.odometer : void 0) ? t.apply(this, arguments) : this[0].odometer.update(e)
                    }
                }(e));
                return r
            }
        })(), setTimeout(E, 0), f = function() {
            function e(t) {
                var n, i, r, a, s, l, d, f, p, h, m = this;
                if (this.options = t, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
                this.el.odometer = this, f = e.options;
                for (i in f) a = f[i], null == this.options[i] && (this.options[i] = a);
                null == (s = this.options).duration && (s.duration = o), this.MAX_VALUES = this.options.duration / c / u | 0, this.resetFormat(), this.value = this.cleanValue(null != (p = this.options.value) ? p : ""), this.renderInside(), this.render();
                try {
                    for (h = ["innerHTML", "innerText", "textContent"], l = 0, d = h.length; d > l; l++) r = h[l], null != this.el[r] && ! function(e) {
                        return Object.defineProperty(m.el, e, {
                            get: function() {
                                var t;
                                return "innerHTML" === e ? m.inside.outerHTML : null != (t = m.inside.innerText) ? t : m.inside.textContent
                            },
                            set: function(e) {
                                return m.update(e)
                            }
                        })
                    }(r)
                } catch (e) {
                    n = e, this.watchForMutations()
                }
            }
            return e.prototype.renderInside = function() {
                return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
            }, e.prototype.watchForMutations = function() {
                var e, t = this;
                if (null != d) try {
                    return null == this.observer && (this.observer = new d(function() {
                        var e;
                        return e = t.el.innerText, t.renderInside(), t.render(t.value), t.update(e)
                    })), this.watchMutations = !0, this.startWatchingMutations()
                } catch (t) {
                    e = t
                }
            }, e.prototype.startWatchingMutations = function() {
                return this.watchMutations ? this.observer.observe(this.el, {
                    childList: !0
                }) : void 0
            }, e.prototype.stopWatchingMutations = function() {
                var e;
                return null != (e = this.observer) ? e.disconnect() : void 0
            }, e.prototype.cleanValue = function(e) {
                var t;
                return "string" == typeof e && (e = e.replace(null != (t = this.format.radix) ? t : ".", "<radix>"), e = e.replace(/[.,]/g, ""), e = e.replace("<radix>", "."), e = parseFloat(e, 10) || 0), T(e, this.format.precision)
            }, e.prototype.bindTransitionEnd = function() {
                var e, t, n, i, r, o, a = this;
                if (!this.transitionEndBound) {
                    for (this.transitionEndBound = !0, t = !1, r = h.split(" "), o = [], n = 0, i = r.length; i > n; n++) e = r[n], o.push(this.el.addEventListener(e, function() {
                        return !!t || (t = !0, setTimeout(function() {
                            return a.render(), t = !1, k(a.el, "odometerdone")
                        }, 0), !0)
                    }, !1));
                    return o
                }
            }, e.prototype.resetFormat = function() {
                var e, t, i, r, o, a, l, u;
                if (e = null != (l = this.options.format) ? l : n, e || (e = "d"), i = s.exec(e), !i) throw new Error("Odometer: Unparsable digit format");
                return u = i.slice(1, 4), a = u[0], o = u[1], t = u[2], r = (null != t ? t.length : void 0) || 0, this.format = {
                    repeating: a,
                    radix: o,
                    precision: r
                }
            }, e.prototype.render = function(e) {
                var t, n, i, r, o, a, s;
                for (null == e && (e = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", o = this.options.theme, t = this.el.className.split(" "), r = [], a = 0, s = t.length; s > a; a++) n = t[a], n.length && ((i = /^odometer-theme-(.+)$/.exec(n)) ? o = i[1] : /^odometer(-|$)/.test(n) || r.push(n));
                return r.push("odometer"), m || r.push("odometer-no-transitions"), r.push(o ? "odometer-theme-" + o : "odometer-auto-theme"), this.el.className = r.join(" "), this.ribbons = {}, this.formatDigits(e), this.startWatchingMutations()
            }, e.prototype.formatDigits = function(e) {
                var t, n, i, r, o, a, s, l, u, c;
                if (this.digits = [], this.options.formatFunction)
                    for (i = this.options.formatFunction(e), u = i.split("").reverse(), o = 0, s = u.length; s > o; o++) n = u[o], n.match(/0-9/) ? (t = this.renderDigit(), t.querySelector(".odometer-value").innerHTML = n, this.digits.push(t), this.insertDigit(t)) : this.addSpacer(n);
                else
                    for (r = !this.format.precision || !b(e) || !1, c = e.toString().split("").reverse(), a = 0, l = c.length; l > a; a++) t = c[a], "." === t && (r = !0), this.addDigit(t, r)
            }, e.prototype.update = function(e) {
                var t, n = this;
                return e = this.cleanValue(e), (t = e - this.value) ? (w(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), t > 0 ? v(this.el, "odometer-animating-up") : v(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(e), this.startWatchingMutations(), setTimeout(function() {
                    return n.el.offsetHeight, v(n.el, "odometer-animating")
                }, 0), this.value = e) : void 0
            }, e.prototype.renderDigit = function() {
                return y(i)
            }, e.prototype.insertDigit = function(e, t) {
                return null != t ? this.inside.insertBefore(e, t) : this.inside.children.length ? this.inside.insertBefore(e, this.inside.children[0]) : this.inside.appendChild(e)
            }, e.prototype.addSpacer = function(e, t, n) {
                var i;
                return i = y(a), i.innerHTML = e, n && v(i, n), this.insertDigit(i, t)
            }, e.prototype.addDigit = function(e, t) {
                var n, i, r, o;
                if (null == t && (t = !0), "-" === e) return this.addSpacer(e, null, "odometer-negation-mark");
                if ("." === e) return this.addSpacer(null != (o = this.format.radix) ? o : ".", null, "odometer-radix-mark");
                if (t)
                    for (r = !1;;) {
                        if (!this.format.repeating.length) {
                            if (r) throw new Error("Bad odometer format without digits");
                            this.resetFormat(), r = !0
                        }
                        if (n = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === n) break;
                        this.addSpacer(n)
                    }
                return i = this.renderDigit(), i.querySelector(".odometer-value").innerHTML = e, this.digits.push(i), this.insertDigit(i)
            }, e.prototype.animate = function(e) {
                return m && "count" !== this.options.animation ? this.animateSlide(e) : this.animateCount(e)
            }, e.prototype.animateCount = function(e) {
                var n, i, r, o, a, s = this;
                if (i = +e - this.value) return o = r = x(), n = this.value, (a = function() {
                    var l, u, c;
                    return x() - o > s.options.duration ? (s.value = e, s.render(), void k(s.el, "odometerdone")) : (l = x() - r, l > t && (r = x(), c = l / s.options.duration, u = i * c, n += u, s.render(Math.round(n))), null != C ? C(a) : setTimeout(a, t))
                })()
            }, e.prototype.getDigitCount = function() {
                var e, t, n, i, r, o;
                for (i = 1 <= arguments.length ? M.call(arguments, 0) : [], e = r = 0, o = i.length; o > r; e = ++r) n = i[e], i[e] = Math.abs(n);
                return t = Math.max.apply(Math, i), Math.ceil(Math.log(t + 1) / Math.log(10))
            }, e.prototype.getFractionalDigitCount = function() {
                var e, t, n, i, r, o, a;
                for (r = 1 <= arguments.length ? M.call(arguments, 0) : [], t = /^\-?\d*\.(\d*?)0*$/, e = o = 0, a = r.length; a > o; e = ++o) i = r[e], r[e] = i.toString(), n = t.exec(r[e]), r[e] = null == n ? 0 : n[1].length;
                return Math.max.apply(Math, r)
            }, e.prototype.resetDigits = function() {
                return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
            }, e.prototype.animateSlide = function(e) {
                var t, n, i, o, a, s, l, u, c, d, f, p, h, m, g, y, b, x, w, C, T, A, k, E, N, L, D;
                if (y = this.value, u = this.getFractionalDigitCount(y, e), u && (e *= Math.pow(10, u), y *= Math.pow(10, u)), i = e - y) {
                    for (this.bindTransitionEnd(), o = this.getDigitCount(y, e), a = [], t = 0, f = w = 0; o >= 0 ? o > w : w > o; f = o >= 0 ? ++w : --w) {
                        if (b = S(y / Math.pow(10, o - f - 1)), l = S(e / Math.pow(10, o - f - 1)), s = l - b, Math.abs(s) > this.MAX_VALUES) {
                            for (d = [], p = s / (this.MAX_VALUES + this.MAX_VALUES * t * r), n = b; s > 0 && l > n || 0 > s && n > l;) d.push(Math.round(n)), n += p;
                            d[d.length - 1] !== l && d.push(l), t++
                        } else d = function() {
                            D = [];
                            for (var e = b; l >= b ? l >= e : e >= l; l >= b ? e++ : e--) D.push(e);
                            return D
                        }.apply(this);
                        for (f = C = 0, A = d.length; A > C; f = ++C) c = d[f], d[f] = Math.abs(c % 10);
                        a.push(d)
                    }
                    for (this.resetDigits(), L = a.reverse(), f = T = 0, k = L.length; k > T; f = ++T)
                        for (d = L[f], this.digits[f] || this.addDigit(" ", f >= u), null == (x = this.ribbons)[f] && (x[f] = this.digits[f].querySelector(".odometer-ribbon-inner")), this.ribbons[f].innerHTML = "", 0 > i && (d = d.reverse()), h = N = 0, E = d.length; E > N; h = ++N) c = d[h], g = document.createElement("div"), g.className = "odometer-value", g.innerHTML = c, this.ribbons[f].appendChild(g), h === d.length - 1 && v(g, "odometer-last-value"), 0 === h && v(g, "odometer-first-value");
                    return 0 > b && this.addDigit("-"), m = this.inside.querySelector(".odometer-radix-mark"), null != m && m.parent.removeChild(m), u ? this.addSpacer(this.format.radix, this.digits[u - 1], "odometer-radix-mark") : void 0
                }
            }, e
        }(), f.options = null != (D = window.odometerOptions) ? D : {}, setTimeout(function() {
            var e, t, n, i, r;
            if (window.odometerOptions) {
                i = window.odometerOptions, r = [];
                for (e in i) t = i[e], r.push(null != (n = f.options)[e] ? (n = f.options)[e] : n[e] = t);
                return r
            }
        }, 0), f.init = function() {
            var e, t, n, i, r, o;
            if (null != document.querySelectorAll) {
                for (t = document.querySelectorAll(f.options.selector || ".odometer"), o = [], n = 0, i = t.length; i > n; n++) e = t[n], o.push(e.odometer = new f({
                    el: e,
                    value: null != (r = e.innerText) ? r : e.textContent
                }));
                return o
            }
        }, null != (null != (j = document.documentElement) ? j.doScroll : void 0) && null != document.createEventObject ? (L = document.onreadystatechange, document.onreadystatechange = function() {
            return "complete" === document.readyState && f.options.auto !== !1 && f.init(), null != L ? L.apply(this, arguments) : void 0
        }) : document.addEventListener("DOMContentLoaded", function() {
            return f.options.auto !== !1 ? f.init() : void 0
        }, !1), "function" == typeof define && define.amd ? define(["jquery"], function() {
            return f
        }) : "undefined" != typeof exports && null !== exports ? module.exports = f : window.Odometer = f
    }.call(this),
    function(e) {
        "use strict";

        function t(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function n(e) {
            return e instanceof Function
        }

        function i(e) {
            return !n(e) && e instanceof Object
        }

        function r(e, n) {
            var o;
            for (o in n) i(n[o]) || t(n[o]) ? (i(n[o]) && !i(e[o]) && (e[o] = {}), t(n[o]) && !t(e[o]) && (e[o] = []), r(e[o], n[o])) : void 0 !== n[o] && (e[o] = n[o])
        }

        function o(e, t) {
            var n = {};
            return r(n, e), r(n, t), n
        }

        function a(e) {
            var t, n, i, r, o, a, s, l, u, c, d;
            return c = Object.prototype.toString.call(e), "[object Date]" === c ? e : "[object String]" === c ? (i = e.match(X), i ? (d = parseInt(i[1], 10), a = parseInt(i[3], 10) - 1, t = parseInt(i[5], 10), n = parseInt(i[7], 10), o = i[9] ? parseInt(i[9], 10) : 0, u = i[11] ? parseInt(i[11], 10) : 0, r = i[12] ? 1e3 * parseFloat(U + i[12].slice(1)) : 0, l = Date.UTC(d, a, t, n, o, u, r), i[13] && i[14] && (s = 60 * i[15], i[17] && (s += parseInt(i[17], 10)), s *= "-" === i[14] ? -1 : 1, l -= 60 * s * 1e3), new Date(l)) : void 0) : void 0
        }

        function s(e) {
            var t, n, i;
            for (t = 0; t < e.length; t++)
                for (i = e[t].data, n = 0; n < i.length; n++)
                    if (i[n][1] < 0) return !0;
            return !1
        }

        function l(e, t, n, i, r, a, l) {
            return function(u, c, d) {
                var f = o({}, e);
                return f = o(f, d || {}), c.hideLegend && t(f), "min" in c ? n(f, c.min) : s(u) || n(f, 0), c.max && i(f, c.max), "stacked" in c && r(f, c.stacked), c.colors && (f.colors = c.colors), c.xtitle && a(f, c.xtitle), c.ytitle && l(f, c.ytitle), f = o(f, c.library || {})
            }
        }

        function u(e, t) {
            document.body.innerText ? e.innerText = t : e.textContent = t
        }

        function c(e, t) {
            u(e, "Error Loading Chart: " + t), e.style.color = "#ff0000"
        }

        function d(e, t, n) {
            f(t, n, function(t, n, i) {
                var r = "string" == typeof i ? i : i.message;
                c(e, r)
            })
        }

        function f(t, n, i) {
            var r = e.jQuery || e.Zepto || e.$;
            if (r) r.ajax({
                dataType: "json",
                url: t,
                success: n,
                error: i
            });
            else {
                var o = new XMLHttpRequest;
                o.open("GET", t, !0), o.setRequestHeader("Content-Type", "application/json"), o.onload = function() {
                    200 === o.status ? n(JSON.parse(o.responseText), o.statusText, o) : i(o, "error", o.statusText)
                }, o.send()
            }
        }

        function p(e, t) {
            try {
                t(e)
            } catch (t) {
                throw c(e.element, t.message), t
            }
        }

        function h(e, t) {
            "string" == typeof e.dataSource ? d(e.element, e.dataSource, function(n) {
                e.data = n, p(e, t)
            }) : (e.data = e.dataSource, p(e, t))
        }

        function m(e) {
            return "" + e
        }

        function g(e) {
            return parseFloat(e)
        }

        function v(e) {
            var t, n, i, r;
            if ("object" != typeof e)
                if ("number" == typeof e) e = new Date(1e3 * e);
                else {
                    if (t = e.match(K)) return n = parseInt(t[1], 10), i = parseInt(t[3], 10) - 1, r = parseInt(t[5], 10), new Date(n, i, r);
                    var o = e.replace(/ /, "T").replace(" ", "").replace("UTC", "Z");
                    e = a(o) || new Date(e)
                }
            return e
        }

        function y(e) {
            if (!t(e)) {
                var n, i = [];
                for (n in e) e.hasOwnProperty(n) && i.push([n, e[n]]);
                e = i
            }
            return e
        }

        function b(e, t) {
            return e[0].getTime() - t[0].getTime()
        }

        function x(e, t) {
            return e - t
        }

        function w() {
            !G && "Highcharts" in e && (G = new function() {
                var t = e.Highcharts;
                this.name = "highcharts";
                var n = {
                        chart: {},
                        xAxis: {
                            title: {
                                text: null
                            },
                            labels: {
                                style: {
                                    fontSize: "12px"
                                }
                            }
                        },
                        yAxis: {
                            title: {
                                text: null
                            },
                            labels: {
                                style: {
                                    fontSize: "12px"
                                }
                            }
                        },
                        title: {
                            text: null
                        },
                        credits: {
                            enabled: !1
                        },
                        legend: {
                            borderWidth: 0
                        },
                        tooltip: {
                            style: {
                                fontSize: "12px"
                            }
                        },
                        plotOptions: {
                            areaspline: {},
                            series: {
                                marker: {}
                            }
                        }
                    },
                    i = function(e) {
                        e.legend.enabled = !1
                    },
                    r = function(e, t) {
                        e.yAxis.min = t
                    },
                    a = function(e, t) {
                        e.yAxis.max = t
                    },
                    s = function(e, t) {
                        e.plotOptions.series.stacking = t ? "normal" : null
                    },
                    u = function(e, t) {
                        e.xAxis.title.text = t
                    },
                    c = function(e, t) {
                        e.yAxis.title.text = t
                    },
                    d = l(n, i, r, a, s, u, c);
                this.renderLineChart = function(e, n) {
                    n = n || "spline";
                    var i = {};
                    "areaspline" === n && (i = {
                        plotOptions: {
                            areaspline: {
                                stacking: "normal"
                            },
                            series: {
                                marker: {
                                    enabled: !1
                                }
                            }
                        }
                    });
                    var r, o, a, s = d(e.data, e.options, i);
                    s.xAxis.type = e.options.discrete ? "category" : "datetime", s.chart.type || (s.chart.type = n), s.chart.renderTo = e.element.id;
                    var l = e.data;
                    for (o = 0; o < l.length; o++) {
                        if (r = l[o].data, !e.options.discrete)
                            for (a = 0; a < r.length; a++) r[a][0] = r[a][0].getTime();
                        l[o].marker = {
                            symbol: "circle"
                        }
                    }
                    s.series = l, new t.Chart(s)
                }, this.renderScatterChart = function(e) {
                    var n = {},
                        i = d(e.data, e.options, n);
                    i.chart.type = "scatter", i.chart.renderTo = e.element.id, i.series = e.data, new t.Chart(i)
                }, this.renderPieChart = function(e) {
                    var i = {};
                    e.options.colors && (i.colors = e.options.colors);
                    var r = o(o(n, i), e.options.library || {});
                    r.chart.renderTo = e.element.id, r.series = [{
                        type: "pie",
                        name: e.options.label || "Value",
                        data: e.data
                    }], new t.Chart(r)
                }, this.renderColumnChart = function(e, n) {
                    n = n || "column";
                    var i, r, o, a, s = e.data,
                        l = d(s, e.options),
                        u = [];
                    for (l.chart.type = n, l.chart.renderTo = e.element.id, i = 0; i < s.length; i++)
                        for (o = s[i], r = 0; r < o.data.length; r++) a = o.data[r], u[a[0]] || (u[a[0]] = new Array(s.length)), u[a[0]][i] = a[1];
                    var c = [];
                    for (i in u) u.hasOwnProperty(i) && c.push(i);
                    l.xAxis.categories = c;
                    var f = [];
                    for (i = 0; i < s.length; i++) {
                        for (a = [], r = 0; r < c.length; r++) a.push(u[c[r]][i] || 0);
                        f.push({
                            name: s[i].name,
                            data: a
                        })
                    }
                    l.series = f, new t.Chart(l)
                };
                var f = this;
                this.renderBarChart = function(e) {
                    f.renderColumnChart(e, "bar")
                }, this.renderAreaChart = function(e) {
                    f.renderLineChart(e, "areaspline")
                }
            }, J.push(G)), !V && e.google && (e.google.setOnLoadCallback || e.google.charts) && (V = new function() {
                var t = e.google;
                this.name = "google";
                var n = {},
                    i = [],
                    r = function() {
                        for (var e, n, r = 0; r < i.length; r++) e = i[r], n = t.visualization && ("corechart" === e.pack && t.visualization.LineChart || "timeline" === e.pack && t.visualization.Timeline), n && (e.callback(), i.splice(r, 1), r--)
                    },
                    a = function(o, a) {
                        if (a || (a = o, o = "corechart"), i.push({
                                pack: o,
                                callback: a
                            }), n[o]) r();
                        else {
                            n[o] = !0;
                            var s = {
                                packages: [o],
                                callback: r
                            };
                            Q.language && (s.language = Q.language), e.google.setOnLoadCallback ? t.load("visualization", "1", s) : t.charts.load("current", s)
                        }
                    },
                    s = {
                        chartArea: {},
                        fontName: "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif",
                        pointSize: 6,
                        legend: {
                            textStyle: {
                                fontSize: 12,
                                color: "#444"
                            },
                            alignment: "center",
                            position: "right"
                        },
                        curveType: "function",
                        hAxis: {
                            textStyle: {
                                color: "#666",
                                fontSize: 12
                            },
                            titleTextStyle: {},
                            gridlines: {
                                color: "transparent"
                            },
                            baselineColor: "#ccc",
                            viewWindow: {}
                        },
                        vAxis: {
                            textStyle: {
                                color: "#666",
                                fontSize: 12
                            },
                            titleTextStyle: {},
                            baselineColor: "#ccc",
                            viewWindow: {}
                        },
                        tooltip: {
                            textStyle: {
                                color: "#666",
                                fontSize: 12
                            }
                        }
                    },
                    u = function(e) {
                        e.legend.position = "none"
                    },
                    c = function(e, t) {
                        e.vAxis.viewWindow.min = t
                    },
                    d = function(e, t) {
                        e.vAxis.viewWindow.max = t
                    },
                    f = function(e, t) {
                        e.hAxis.viewWindow.min = t
                    },
                    p = function(e, t) {
                        e.hAxis.viewWindow.max = t
                    },
                    h = function(e, t) {
                        e.isStacked = !!t
                    },
                    m = function(e, t) {
                        e.hAxis.title = t, e.hAxis.titleTextStyle.italic = !1
                    },
                    v = function(e, t) {
                        e.vAxis.title = t, e.vAxis.titleTextStyle.italic = !1
                    },
                    y = l(s, u, c, d, h, m, v),
                    x = function(e, n) {
                        var i, r, o, a, s, l = [];
                        for (i = 0; i < e.length; i++)
                            for (o = e[i], r = 0; r < o.data.length; r++) a = o.data[r], s = "datetime" === n ? a[0].getTime() : a[0], l[s] || (l[s] = new Array(e.length)), l[s][i] = g(a[1]);
                        var u, c = [],
                            d = !0;
                        for (i in l) l.hasOwnProperty(i) && ("datetime" === n ? (u = new Date(g(i)), d = d && k(u)) : u = "number" === n ? g(i) : i, c.push([u].concat(l[i])));
                        "datetime" === n && c.sort(b);
                        var f = new t.visualization.DataTable;
                        for (n = "datetime" === n && d ? "date" : n, f.addColumn(n, ""), i = 0; i < e.length; i++) f.addColumn("number", e[i].name);
                        return f.addRows(c),
                            f
                    },
                    w = function(t) {
                        e.attachEvent ? e.attachEvent("onresize", t) : e.addEventListener && e.addEventListener("resize", t, !0), t()
                    };
                this.renderLineChart = function(e) {
                    a(function() {
                        var n = y(e.data, e.options),
                            i = x(e.data, e.options.discrete ? "string" : "datetime");
                        e.chart = new t.visualization.LineChart(e.element), w(function() {
                            e.chart.draw(i, n)
                        })
                    })
                }, this.renderPieChart = function(e) {
                    a(function() {
                        var n = {
                            chartArea: {
                                top: "10%",
                                height: "80%"
                            }
                        };
                        e.options.colors && (n.colors = e.options.colors);
                        var i = o(o(s, n), e.options.library || {}),
                            r = new t.visualization.DataTable;
                        r.addColumn("string", ""), r.addColumn("number", "Value"), r.addRows(e.data), e.chart = new t.visualization.PieChart(e.element), w(function() {
                            e.chart.draw(r, i)
                        })
                    })
                }, this.renderColumnChart = function(e) {
                    a(function() {
                        var n = y(e.data, e.options),
                            i = x(e.data, "string");
                        e.chart = new t.visualization.ColumnChart(e.element), w(function() {
                            e.chart.draw(i, n)
                        })
                    })
                }, this.renderBarChart = function(e) {
                    a(function() {
                        var n = {
                                hAxis: {
                                    gridlines: {
                                        color: "#ccc"
                                    }
                                }
                            },
                            i = l(s, u, f, p, h, m, v)(e.data, e.options, n),
                            r = x(e.data, "string");
                        e.chart = new t.visualization.BarChart(e.element), w(function() {
                            e.chart.draw(r, i)
                        })
                    })
                }, this.renderAreaChart = function(e) {
                    a(function() {
                        var n = {
                                isStacked: !0,
                                pointSize: 0,
                                areaOpacity: .5
                            },
                            i = y(e.data, e.options, n),
                            r = x(e.data, e.options.discrete ? "string" : "datetime");
                        e.chart = new t.visualization.AreaChart(e.element), w(function() {
                            e.chart.draw(r, i)
                        })
                    })
                }, this.renderGeoChart = function(e) {
                    a(function() {
                        var n = {
                                legend: "none",
                                colorAxis: {
                                    colors: e.options.colors || ["#f6c7b6", "#ce502d"]
                                }
                            },
                            i = o(o(s, n), e.options.library || {}),
                            r = new t.visualization.DataTable;
                        r.addColumn("string", ""), r.addColumn("number", e.options.label || "Value"), r.addRows(e.data), e.chart = new t.visualization.GeoChart(e.element), w(function() {
                            e.chart.draw(r, i)
                        })
                    })
                }, this.renderScatterChart = function(e) {
                    a(function() {
                        var n = {},
                            i = y(e.data, e.options, n),
                            r = x(e.data, "number");
                        e.chart = new t.visualization.ScatterChart(e.element), w(function() {
                            e.chart.draw(r, i)
                        })
                    })
                }, this.renderTimeline = function(e) {
                    a("timeline", function() {
                        var n = {
                            legend: "none"
                        };
                        e.options.colors && (n.colors = e.options.colors);
                        var i = o(o(s, n), e.options.library || {}),
                            r = new t.visualization.DataTable;
                        r.addColumn({
                            type: "string",
                            id: "Name"
                        }), r.addColumn({
                            type: "date",
                            id: "Start"
                        }), r.addColumn({
                            type: "date",
                            id: "End"
                        }), r.addRows(e.data), e.element.style.lineHeight = "normal", e.chart = new t.visualization.Timeline(e.element), w(function() {
                            e.chart.draw(r, i)
                        })
                    })
                }
            }, J.push(V)), !Y && "Chart" in e && (Y = new function() {
                var t = e.Chart;
                this.name = "chartjs";
                var n = {
                        maintainAspectRatio: !1
                    },
                    i = {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    callback: function(e) {
                                        return Humanize.formatNumber(e, 0, ",")
                                    },
                                    maxTicksLimit: 4
                                },
                                scaleLabel: {
                                    fontSize: 16,
                                    fontColor: "#333"
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: !1
                                },
                                scaleLabel: {
                                    fontSize: 16,
                                    fontColor: "#333"
                                },
                                time: {},
                                ticks: {}
                            }]
                        },
                        legend: {}
                    },
                    r = ["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#3B3EAC", "#0099C6", "#DD4477", "#66AA00", "#B82E2E", "#316395", "#994499", "#22AA99", "#AAAA11", "#6633CC", "#E67300", "#8B0707", "#329262", "#5574A6", "#3B3EAC"],
                    a = function(e) {
                        e.legend.display = !1
                    },
                    s = function(e, t) {
                        null !== t && (e.scales.yAxes[0].ticks.min = t)
                    },
                    u = function(e, t) {
                        e.scales.yAxes[0].ticks.max = t
                    },
                    c = function(e, t) {
                        null !== t && (e.scales.xAxes[0].ticks.min = t)
                    },
                    d = function(e, t) {
                        e.scales.xAxes[0].ticks.max = t
                    },
                    f = function(e, t) {
                        e.scales.xAxes[0].stacked = !!t, e.scales.yAxes[0].stacked = !!t
                    },
                    p = function(e, t) {
                        e.scales.xAxes[0].scaleLabel.display = !0, e.scales.xAxes[0].scaleLabel.labelString = t
                    },
                    h = function(e, t) {
                        e.scales.yAxes[0].scaleLabel.display = !0, e.scales.yAxes[0].scaleLabel.labelString = t
                    },
                    v = function(e, n, i, r) {
                        e.element.innerHTML = "<canvas></canvas>";
                        var o = e.element.getElementsByTagName("CANVAS")[0];
                        e.chart = new t(o, {
                            type: n,
                            data: i,
                            options: r
                        })
                    },
                    y = function(e, t) {
                        var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                        return n ? "rgba(" + parseInt(n[1], 16) + ", " + parseInt(n[2], 16) + ", " + parseInt(n[3], 16) + ", " + t + ")" : e
                    },
                    b = function(e, t, n) {
                        var i = Math.ceil(e.element.offsetWidth / 4 / t.labels.length);
                        i > 25 && (i = 25), n.scales.xAxes[0].ticks.callback = function(e) {
                            return e = m(e), e.length > i ? e.substring(0, i - 2) + "..." : e
                        }
                    },
                    w = l(o(n, i), a, s, u, f, p, h),
                    C = function(e, t, n) {
                        var i, a, s, l, u, c, d = [],
                            f = [],
                            p = e.options.colors || r,
                            h = !0,
                            m = !0,
                            v = !0,
                            b = !0,
                            w = !0,
                            C = !0,
                            L = ("line" === n || "area" === n) && !e.options.discrete,
                            D = e.data,
                            j = [],
                            M = [];
                        for (a = 0; a < D.length; a++)
                            for (l = D[a], s = 0; s < l.data.length; s++) u = l.data[s], c = L ? u[0].getTime() : u[0], M[c] || (M[c] = new Array(D.length)), M[c][a] = g(u[1]), j.indexOf(c) === -1 && j.push(c);
                        L && j.sort(x);
                        var H = [];
                        for (s = 0; s < D.length; s++) H.push([]);
                        var I, O;
                        for (O = 0; O < j.length; O++)
                            for (a = j[O], L ? (I = new Date(g(a)), h = h && k(I), i || (i = I.getDay()), m = m && S(I, i), v = v && E(I), b = b && N(I), w = w && A(I), C = C && T(I)) : I = a, f.push(I), s = 0; s < D.length; s++) H[s].push(M[a][s]);
                        for (a = 0; a < D.length; a++) {
                            l = D[a];
                            var q = "line" !== n ? y(p[a], .5) : p[a],
                                F = {
                                    label: l.name,
                                    data: H[a],
                                    fill: "area" === n,
                                    borderColor: p[a],
                                    backgroundColor: q,
                                    pointBackgroundColor: p[a],
                                    borderWidth: 2,
                                    lineTension: 0
                                };
                            d.push(o(F, l.library || {}))
                        }
                        if (L && f.length > 0) {
                            var $ = f[0].getTime(),
                                _ = f[0].getTime();
                            for (a = 1; a < f.length; a++) I = f[a].getTime(), I < $ && ($ = I), I > _ && (_ = I);
                            var z = (_ - $) / 864e5;
                            if (!t.scales.xAxes[0].time.unit) {
                                var R;
                                if (b || z > 3650 ? (t.scales.xAxes[0].time.unit = "year", R = 365) : v || z > 300 ? (t.scales.xAxes[0].time.unit = "month", R = 30) : h || z > 10 ? (t.scales.xAxes[0].time.unit = "day", R = 1) : w ? (t.scales.xAxes[0].time.unit = "hour", R = 1 / 24) : C && (t.scales.xAxes[0].time.displayFormats = {
                                        minute: "h:mm a"
                                    }, t.scales.xAxes[0].time.unit = "minute", R = 1 / 24 / 60), R && z > 0) {
                                    var B = Math.ceil(z / R / (e.element.offsetWidth / 100));
                                    m && 1 === R && (B = 7 * Math.ceil(B / 7)), t.scales.xAxes[0].time.unitStepSize = B
                                }
                            }
                            t.scales.xAxes[0].time.tooltipFormat || (h ? t.scales.xAxes[0].time.tooltipFormat = "ll" : w ? t.scales.xAxes[0].time.tooltipFormat = "MMM D, h a" : C && (t.scales.xAxes[0].time.tooltipFormat = "h:mm a"))
                        }
                        var P = {
                            labels: f,
                            datasets: d
                        };
                        return P
                    };
                this.renderLineChart = function(e, t) {
                    var n = {};
                    !e.options.max && D(e.data) && (e.options.max = 1);
                    var i = w(e.data, o(n, e.options)),
                        r = C(e, i, t || "line");
                    i.scales.xAxes[0].type = e.options.discrete ? "category" : "time", v(e, "line", r, i)
                }, this.renderPieChart = function(e) {
                    for (var t = o(n, e.options.library || {}), i = [], a = [], s = 0; s < e.data.length; s++) {
                        var l = e.data[s];
                        i.push(l[0]), a.push(l[1])
                    }
                    var u = {
                        labels: i,
                        datasets: [{
                            data: a,
                            backgroundColor: e.options.colors || r
                        }]
                    };
                    v(e, "pie", u, t)
                }, this.renderColumnChart = function(e, t) {
                    var r;
                    r = "bar" === t ? l(o(n, i), a, c, d, f, p, h)(e.data, e.options) : w(e.data, e.options);
                    var s = C(e, r, "column");
                    b(e, s, r), v(e, "bar" === t ? "horizontalBar" : "bar", s, r)
                };
                var L = this;
                this.renderAreaChart = function(e) {
                    L.renderLineChart(e, "area")
                }, this.renderBarChart = function(e) {
                    L.renderColumnChart(e, "bar")
                }, this.renderScatterChart = function(e) {
                    for (var t = w(e.data, e.options), n = e.options.colors || r, i = [], o = e.data, a = 0; a < o.length; a++) {
                        for (var s = o[a], l = [], u = 0; u < s.data.length; u++) l.push({
                            x: g(s.data[u][0]),
                            y: g(s.data[u][1])
                        });
                        i.push({
                            label: s.name,
                            showLine: !1,
                            data: l,
                            borderColor: n[a],
                            backgroundColor: n[a],
                            pointBackgroundColor: n[a]
                        })
                    }
                    var c = {
                        datasets: i
                    };
                    t.scales.xAxes[0].type = "linear", t.scales.xAxes[0].position = "bottom", v(e, "line", c, t)
                }
            }, J.unshift(Y))
        }

        function C(e, t) {
            var i, r, o, a;
            for (o = "render" + e, a = t.options.adapter, w(), i = 0; i < J.length; i++)
                if (r = J[i], (!a || a === r.name) && n(r[o])) return r[o](t);
            throw new Error("No adapter found")
        }

        function T(e) {
            return 0 === e.getMilliseconds() && 0 === e.getSeconds()
        }

        function A(e) {
            return T(e) && 0 === e.getMinutes()
        }

        function k(e) {
            return A(e) && 0 === e.getHours()
        }

        function S(e, t) {
            return k(e) && e.getDay() === t
        }

        function E(e) {
            return k(e) && 1 === e.getDate()
        }

        function N(e) {
            return E(e) && 0 === e.getMonth()
        }

        function L(e) {
            return !isNaN(v(e)) && m(e).length >= 6
        }

        function D(e) {
            var t, n, i;
            for (t = 0; t < e.length; t++)
                for (i = e[t].data, n = 0; n < i.length; n++)
                    if (0 != i[n][1]) return !1;
            return !0
        }

        function j(e) {
            var t, n, i;
            for (t = 0; t < e.length; t++)
                for (i = y(e[t].data), n = 0; n < i.length; n++)
                    if (!L(i[n][0])) return !0;
            return !1
        }

        function M(e, n, i) {
            var r;
            for (!t(e) || "object" != typeof e[0] || t(e[0]) ? (e = [{
                    name: n.label || "Value",
                    data: e
                }], n.hideLegend = !0) : n.hideLegend = !1, null !== n.discrete && void 0 !== n.discrete || (n.discrete = j(e)), n.discrete && (i = "string"), r = 0; r < e.length; r++) e[r].data = ee(y(e[r].data), i);
            return e
        }

        function H(e) {
            var t, n = y(e);
            for (t = 0; t < n.length; t++) n[t] = [m(n[t][0]), g(n[t][1])];
            return n
        }

        function I(e) {
            var t;
            for (t = 0; t < e.length; t++) e[t][1] = v(e[t][1]), e[t][2] = v(e[t][2]);
            return e
        }

        function O(e) {
            e.data = M(e.data, e.options, "datetime"), C("LineChart", e)
        }

        function q(e) {
            e.data = M(e.data, e.options, "string"), C("ColumnChart", e)
        }

        function F(e) {
            e.data = H(e.data), C("PieChart", e)
        }

        function $(e) {
            e.data = M(e.data, e.options, "string"), C("BarChart", e)
        }

        function _(e) {
            e.data = M(e.data, e.options, "datetime"), C("AreaChart", e)
        }

        function z(e) {
            e.data = H(e.data), C("GeoChart", e)
        }

        function R(e) {
            e.data = M(e.data, e.options, "number"), C("ScatterChart", e)
        }

        function B(e) {
            e.data = I(e.data), C("Timeline", e)
        }

        function P(e, t, n, i, r) {
            var o;
            if ("string" == typeof t && (o = t, t = document.getElementById(t), !t)) throw new Error("No element with id " + o);
            e.element = t, e.options = i || {}, e.dataSource = n, e.getElement = function() {
                return t
            }, e.getData = function() {
                return e.data
            }, e.getOptions = function() {
                return i || {}
            }, e.getChartObject = function() {
                return e.chart
            }, W.charts[t.id] = e, h(e, r)
        }
        var W, X, U, V, G, Y, Q = e.Chartkick || {},
            J = [],
            K = /^(\d\d\d\d)(\-)?(\d\d)(\-)?(\d\d)$/i;
        X = /(\d\d\d\d)(\-)?(\d\d)(\-)?(\d\d)(T)?(\d\d)(:)?(\d\d)?(:)?(\d\d)?([\.,]\d+)?($|Z|([\+\-])(\d\d)(:)?(\d\d)?)/i, U = String(1.5).charAt(1);
        var Z = function(e, t) {
                return e = "number" === t ? g(e) : "datetime" === t ? v(e) : m(e)
            },
            ee = function(e, t) {
                var n, i, r = [];
                for (i = 0; i < e.length; i++) n = Z(e[i][0], t), r.push([n, g(e[i][1])]);
                return "datetime" === t && r.sort(b), r
            };
        W = {
            LineChart: function(e, t, n) {
                P(this, e, t, n, O)
            },
            PieChart: function(e, t, n) {
                P(this, e, t, n, F)
            },
            ColumnChart: function(e, t, n) {
                P(this, e, t, n, q)
            },
            BarChart: function(e, t, n) {
                P(this, e, t, n, $)
            },
            AreaChart: function(e, t, n) {
                P(this, e, t, n, _)
            },
            GeoChart: function(e, t, n) {
                P(this, e, t, n, z)
            },
            ScatterChart: function(e, t, n) {
                P(this, e, t, n, R)
            },
            Timeline: function(e, t, n) {
                P(this, e, t, n, B)
            },
            charts: {},
            configure: function(e) {
                for (var t in e) e.hasOwnProperty(t) && (Q[t] = e[t])
            }
        }, "object" == typeof module && "object" == typeof module.exports ? module.exports = W : e.Chartkick = W
    }(window);
var factory = function(e, t) {
    var n = function(t, n) {
        var i = this;
        i.field = e(t), i.el = null, i.json = null, i.items = [], i.selectedItem = null, i.list = e('<ul class="autocomplete-list" />'), i.lastSearch = null, i.options = n
    };
    n.prototype = {
        defaults: {
            minChars: 2,
            markAsBold: !0,
            grouped: !1,
            queryProperty: "q",
            queryParameters: {},
            method: "get",
            scrollOnFocus: "auto",
            maxItems: 100,
            maxItemsOnMobile: 3,
            mobileWidth: 700,
            keyboardDelay: 300,
            lastItemTemplate: null,
            closeOnSelect: !0,
            groupContentName: ".autocomplete-items",
            groupTemplate: '<li class="autocomplete-group"><span class="autocomplete-group-header">{{title}}</span><ul class="autocomplete-items" /></li>',
            itemTemplate: '<li class="autocomplete-item">{{title}}</li>',
            showNoResults: !1,
            noResultsTemplate: '<li class="autocomplete-item">No results for {{title}}</li>',
            wrapClasses: "autocomplete"
        },
        init: function() {
            return this.defaults.templateMethod = this.template, this.settings = e.extend({}, this.defaults, this.options), this.setupSettings(), this.setupMarkup(), this.setupEvents(), this
        },
        template: function(e, t) {
            return e.replace(/{{\s*[\w]+\s*}}/g, function(e) {
                return t[e.substr(2, e.length - 4)]
            })
        },
        debounce: function(e, t, n) {
            var i;
            return function() {
                var r = this,
                    o = arguments,
                    a = function() {
                        i = null, n || e.apply(r, o)
                    },
                    s = n && !i;
                clearTimeout(i), i = setTimeout(a, t), s && e.apply(r, o)
            }
        },
        setupSettings: function() {
            "auto" == this.settings.scrollOnFocus && (this.settings.scrollOnFocus = this.isTouchDevice()), this.settings.maxItemsOnLarge = this.settings.maxItems, t.innerWidth < this.settings.mobileWidth && null !== this.settings.maxItemsOnMobile && (this.settings.maxItems = Math.min(this.settings.maxItems, this.settings.maxItemsOnMobile)), this.settings.data ? this.request = this.localRequest : this.request = this.remoteRequest, null != this.settings.keyboardDelay && (this.request = this.debounce(this.request, this.settings.keyboardDelay))
        },
        setupEvents: function() {
            this.el.on("keyup", ".autocomplete-field", e.proxy(this.onKeyUp, this)), this.el.on("keydown", ".autocomplete-field", e.proxy(this.onKeyDown, this)), this.el.on("mousedown", ".autocomplete-item", e.proxy(this.onClickItem, this)), this.el.on("blur", ".autocomplete-field", e.proxy(this.closeList, this)), e(t).resize(this.debounce(function() {
                t.innerWidth < this.settings.mobileWidth && null !== this.settings.maxItemsOnMobile ? this.settings.maxItems = Math.min(this.settings.maxItems, this.settings.maxItemsOnMobile) : this.settings.maxItems = this.settings.maxItemsOnLarge
            }.bind(this), 250)), this.settings.scrollOnFocus && this.field.on("focus", function() {
                var n = e(this).offset().top;
                setTimeout(function() {
                    t.scrollTo(0, n)
                }, 0)
            })
        },
        setupMarkup: function() {
            this.field.addClass("autocomplete-field"), this.field.attr("autocomplete", "off"), this.field.wrap('<div class="' + this.settings.wrapClasses + '" />'), this.el = this.field.parent()
        },
        remoteRequest: function(t) {
            this.field.trigger("beforerequest", [this, t]);
            var n = {};
            e.extend(n, this.settings.queryParameters), n[this.settings.queryProperty] = t, e.ajax({
                method: this.settings.method,
                url: this.settings.url,
                dataType: "json",
                data: n,
                success: e.proxy(this.beforeReceiveData, this)
            })
        },
        localRequest: function(e) {
            this.settings.grouped ? this.beforeReceiveData(this.matchLocalPatternGrouped(e)) : this.beforeReceiveData(this.matchLocalPatternFlat(e))
        },
        matchLocalPatternFlat: function(e) {
            return this.matchArray(e, this.settings.data)
        },
        matchLocalPatternGrouped: function(t) {
            for (var n = e.extend(!0, [], this.settings.data), i = 0; i < n.length; i++) {
                var r = this.matchArray(t, n[i].data);
                0 == r.length ? (n.splice(i, 1), i--) : n[i].data = r
            }
            return n
        },
        matchArray: function(e, t) {
            for (var n = [], i = 0; i < t.length; i++)
                for (var r in t[i])
                    if (t[i][r].toLowerCase && t[i][r].toLowerCase().indexOf(e.toLowerCase()) > -1 || t[i][r] == e) {
                        n.push(t[i]);
                        break
                    }
            return n
        },
        itemAt: function(t) {
            return null == t ? e() : this.el.find(".autocomplete-item").eq(t)
        },
        clickedItemAt: function(e) {
            for (var t = 0; t < this.items.length; t++)
                if (e == this.el.find(".autocomplete-item").eq(t).get(0)) return t;
            return null
        },
        prevItem: function() {
            this.selectedItem--, this.selectedItem < 0 && (this.selectedItem = null), this.markSelected(this.selectedItem)
        },
        nextItem: function() {
            null == this.selectedItem && (this.selectedItem = -1), this.selectedItem++;
            var e = this.settings.lastItemTemplate ? this.items.length : this.items.length - 1;
            this.selectedItem >= e && (this.selectedItem = e), this.markSelected(this.selectedItem)
        },
        markSelected: function(e) {
            this.el.find(".active").removeClass("active"), this.itemAt(e).addClass("active")
        },
        markHitText: function(e, t) {
            var n = t.split(" ");
            for (var i in e)
                if ("string" == typeof e[i] && "template" != i && "image" != i) {
                    for (var r = [t], o = 0; o < n.length; o++) {
                        var a = n[o].trim().replace(/[^a-\xf60-9]/gi, "");
                        a.length > 0 && r.push(a)
                    }
                    e[i] = e[i].replace(new RegExp("(" + r.join("|") + ")", "gi"), "<strong>$1</strong>")
                }
            return e
        },
        renderGroups: function() {
            this.list.remove(), this.list = e('<ul class="autocomplete-list" />');
            for (var t in this.json) this.list.append(this.settings.templateMethod(this.settings.groupTemplate, this.json[t]));
            this.el.append(this.list)
        },
        renderItemsInGroups: function() {
            for (var t = this.field.val(), n = 0; n < this.json.length; n++)
                for (var i = this.el.find(this.settings.groupContentName).eq(n), r = 0; r < this.json[n].data.length && r < this.settings.maxItems; r++) {
                    var o = e.extend({}, this.json[n].data[r]);
                    this.settings.markAsBold && (o = this.markHitText(o, t)), i.append(this.settings.templateMethod(this.json[n].template || this.settings.itemTemplate, o))
                }
        },
        renderItemsFlat: function() {
            this.list.remove(), this.list = e('<ul class="autocomplete-list" />');
            for (var t = this.field.val(), n = 0; n < this.json.length && n < this.settings.maxItems; n++) {
                var i = e.extend({}, this.json[n]);
                this.settings.markAsBold && (i = this.markHitText(i, t)), this.list.append(this.settings.templateMethod(this.json[n].template || this.settings.itemTemplate, i))
            }
            this.el.append(this.list)
        },
        renderLastItem: function() {
            this.list.append(this.settings.templateMethod(this.settings.lastItemTemplate, {
                title: this.field.val()
            }))
        },
        renderNoResults: function() {
            this.list.append(this.settings.templateMethod(this.settings.noResultsTemplate, {
                title: this.field.val()
            }))
        },
        closeList: function() {
            e("html").off("click"), this.list.remove(), this.selectedItem = null
        },
        getItemsFromGroups: function() {
            var e = [];
            for (var t in this.json)
                for (var n = 0; n < this.json[t].data.length; n++) n < this.settings.maxItems && e.push(this.json[t].data[n]);
            return e
        },
        valueHasChanged: function() {
            return this.field.val() != this.lastSearch && (this.lastSearch = this.field.val(), !0)
        },
        isTouchDevice: function() {
            return !!("ontouchstart" in t)
        },
        beforeReceiveData: function(e, t) {
            this.json = e, this.field.trigger("receivedata", [this, e, t]), this.onReceiveData(this.json)
        },
        onReceiveData: function() {
            this.selectedItem = null, this.settings.grouped ? (this.renderGroups(), this.items = this.getItemsFromGroups(), this.renderItemsInGroups()) : (this.items = this.json, this.renderItemsFlat()), this.items.length || this.settings.showNoResults && this.renderNoResults(), this.settings.lastItemTemplate && this.renderLastItem(), e("html").one("click", e.proxy(this.closeList, this))
        },
        onKeyUp: function() {
            this.field.val().length >= this.settings.minChars && this.valueHasChanged() && this.request(this.field.val()), "" == this.field.val() && (this.lastSearch = "", this.closeList())
        },
        onKeyDown: function(e) {
            38 == e.keyCode && (e.preventDefault(), this.prevItem()), 40 == e.keyCode && (e.preventDefault(), this.nextItem()), 13 == e.keyCode && this.onPressEnter(e), 27 == e.keyCode && (e.preventDefault(), this.closeList())
        },
        onClickItem: function(e) {
            var t = this.clickedItemAt(e.currentTarget);
            this.onSelect(e.currentTarget, this.items[t])
        },
        onPressEnter: function(e) {
            return null === this.selectedItem || (e.preventDefault(), void this.onSelect(this.itemAt(this.selectedItem), this.items[this.selectedItem]))
        },
        onSelect: function(e, t) {
            this.settings.onSelect && this.settings.onSelect.apply(this.field, [e, t]), this.lastSearch = this.field.val(), this.settings.closeOnSelect && this.closeList()
        }
    }, n.defaults = n.prototype.defaults, e.fn.tinyAutocomplete = function(t) {
        return this.each(function() {
            if (this.tinyAutocomplete) return e.extend(this.tinyAutocomplete.settings, t), this;
            var i = new n(this, t).init();
            this.tinyAutocomplete = {
                settings: i.settings
            }
        })
    }
};
"undefined" != typeof exports ? module.exports = factory : factory($, window);