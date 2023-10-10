/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function (e, t) {
    "use strict";
    var n = [],
        i = Object.getPrototypeOf,
        o = n.slice,
        r = n.flat ? function (e) {
            return n.flat.call(e)
        } : function (e) {
            return n.concat.apply([], e)
        },
        s = n.push,
        a = n.indexOf,
        l = {},
        c = l.toString,
        u = l.hasOwnProperty,
        p = u.toString,
        h = p.call(Object),
        f = {},
        d = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        g = function (e) {
            return null != e && e === e.window
        },
        m = e.document,
        y = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function v(e, t, n) {
        var i, o, r = (n = n || m).createElement("script");
        if (r.text = e, t)
            for (i in y)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var x = "3.6.0",
        w = function (e, t) {
            return new w.fn.init(e, t)
        };

    function _(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !d(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: x,
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this)
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return w.each(this, e)
        },
        map: function (e) {
            return this.pushStack(w.map(this, (function (t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(w.grep(this, (function (e, t) {
                return (t + 1) % 2
            })))
        },
        odd: function () {
            return this.pushStack(w.grep(this, (function (e, t) {
                return t % 2
            })))
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || d(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (w.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], r = o && !Array.isArray(n) ? [] : o || w.isPlainObject(n) ? n : {}, o = !1, s[t] = w.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, w.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e) || (t = i(e)) && ("function" != typeof (n = u.call(t, "constructor") && t.constructor) || p.call(n) !== h))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e, t, n) {
            v(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function (e, t) {
            var n, i = 0;
            if (_(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (_(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : a.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var i, o, s = 0,
                a = [];
            if (_(e))
                for (i = e.length; s < i; s++) null != (o = t(e[s], s, n)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return r(a)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }));
    var k = function (e) {
        var t, n, i, o, r, s, a, l, c, u, p, h, f, d, g, m, y, v, b, x = "sizzle" + 1 * new Date,
            w = e.document,
            _ = 0,
            k = 0,
            E = le(),
            T = le(),
            S = le(),
            C = le(),
            A = function (e, t) {
                return e === t && (p = !0), 0
            },
            O = {}.hasOwnProperty,
            L = [],
            M = L.pop,
            j = L.push,
            N = L.push,
            D = L.slice,
            P = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            q = "\\[" + H + "*(" + R + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + H + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            z = new RegExp(H + "+", "g"),
            F = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            B = new RegExp("^" + H + "*," + H + "*"),
            U = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            X = new RegExp(H + "|>"),
            Y = new RegExp(W),
            V = new RegExp("^" + R + "$"),
            $ = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
            },
            K = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function () {
                h()
            },
            se = xe((function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            N.apply(L = D.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType
        } catch (t) {
            N = {
                apply: L.length ? function (e, t) {
                    j.apply(e, D.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, i, o) {
            var r, a, c, u, p, d, y, v = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;
            if (!o && (h(t), t = t || f, g)) {
                if (11 !== w && (p = Z.exec(e)))
                    if (r = p[1]) {
                        if (9 === w) {
                            if (!(c = t.getElementById(r))) return i;
                            if (c.id === r) return i.push(c), i
                        } else if (v && (c = v.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i
                    } else {
                        if (p[2]) return N.apply(i, t.getElementsByTagName(e)), i;
                        if ((r = p[3]) && n.getElementsByClassName && t.getElementsByClassName) return N.apply(i, t.getElementsByClassName(r)), i
                    } if (n.qsa && !C[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (y = e, v = t, 1 === w && (X.test(e) || U.test(e))) {
                        for ((v = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(ie, oe) : t.setAttribute("id", u = x)), a = (d = s(e)).length; a--;) d[a] = (u ? "#" + u : ":scope") + " " + be(d[a]);
                        y = d.join(",")
                    }
                    try {
                        return N.apply(i, v.querySelectorAll(y)), i
                    } catch (t) {
                        C(e, !0)
                    } finally {
                        u === x && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(F, "$1"), t, i, o)
        }

        function le() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
            }
        }

        function ce(e) {
            return e[x] = !0, e
        }

        function ue(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function pe(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
        }

        function he(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function de(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function me(e) {
            return ce((function (t) {
                return t = +t, ce((function (n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                }))
            }))
        }

        function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ae.support = {}, r = ae.isXML = function (e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !K.test(t || n && n.nodeName || "HTML")
            }, h = ae.setDocument = function (e) {
                var t, o, s = e ? e.ownerDocument || e : w;
                return s != f && 9 === s.nodeType && s.documentElement && (d = (f = s).documentElement, g = !r(f), w != f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.scope = ue((function (e) {
                    return d.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), n.attributes = ue((function (e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = ue((function (e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = ue((function (e) {
                    return d.appendChild(e).id = x, !f.getElementsByName || !f.getElementsByName(x).length
                })), n.getById ? (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, y = [], m = [], (n.qsa = J.test(f.querySelectorAll)) && (ue((function (e) {
                    var t;
                    d.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                })), ue((function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), d.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                }))), (n.matchesSelector = J.test(v = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ue((function (e) {
                    n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), y.push("!=", W)
                })), m = m.length && new RegExp(m.join("|")), y = y.length && new RegExp(y.join("|")), t = J.test(d.compareDocumentPosition), b = t || J.test(d.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function (e, t) {
                    if (e === t) return p = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == w && b(w, e) ? -1 : t == f || t.ownerDocument == w && b(w, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & i ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return p = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e == f ? -1 : t == f ? 1 : o ? -1 : r ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (o === r) return he(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? he(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0
                }), f
            }, ae.matches = function (e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function (e, t) {
                if (h(e), n.matchesSelector && g && !C[t + " "] && (!y || !y.test(t)) && (!m || !m.test(t))) try {
                    var i = v.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    C(t, !0)
                }
                return 0 < ae(t, f, null, [e]).length
            }, ae.contains = function (e, t) {
                return (e.ownerDocument || e) != f && h(e), b(e, t)
            }, ae.attr = function (e, t) {
                (e.ownerDocument || e) != f && h(e);
                var o = i.attrHandle[t.toLowerCase()],
                    r = o && O.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, ae.escape = function (e) {
                return (e + "").replace(ie, oe)
            }, ae.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function (e) {
                var t, i = [],
                    o = 0,
                    r = 0;
                if (p = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(A), p) {
                    for (; t = e[r++];) t === e[r] && (o = i.push(r));
                    for (; o--;) e.splice(i[o], 1)
                }
                return u = null, e
            }, o = ae.getText = function (e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += o(t);
                return n
            }, (i = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: $,
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
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = E[e + " "];
                        return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && E(e, (function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function (e, t, n) {
                        return function (i) {
                            var o = ae.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(z, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === o ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var c, u, p, h, f, d, g = r !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = a && t.nodeName.toLowerCase(),
                                v = !l && !a,
                                b = !1;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (h = t; h = h[g];)
                                            if (a ? h.nodeName.toLowerCase() === y : 1 === h.nodeType) return !1;
                                        d = g = "only" === e && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [s ? m.firstChild : m.lastChild], s && v) {
                                    for (b = (f = (c = (u = (p = (h = m)[x] || (h[x] = {}))[h.uniqueID] || (p[h.uniqueID] = {}))[e] || [])[0] === _ && c[1]) && c[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || d.pop();)
                                        if (1 === h.nodeType && ++b && h === t) {
                                            u[e] = [_, f, b];
                                            break
                                        }
                                } else if (v && (b = f = (c = (u = (p = (h = t)[x] || (h[x] = {}))[h.uniqueID] || (p[h.uniqueID] = {}))[e] || [])[0] === _ && c[1]), !1 === b)
                                    for (;
                                        (h = ++f && h && h[g] || (b = f = 0) || d.pop()) && ((a ? h.nodeName.toLowerCase() !== y : 1 !== h.nodeType) || !++b || (v && ((u = (p = h[x] || (h[x] = {}))[h.uniqueID] || (p[h.uniqueID] = {}))[e] = [_, b]), h !== t)););
                                return (b -= o) === i || b % i == 0 && 0 <= b / i
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return o[x] ? o(t) : 1 < o.length ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                            for (var i, r = o(e, t), s = r.length; s--;) e[i = P(e, r[s])] = !(n[i] = r[s])
                        })) : function (e) {
                            return o(e, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: ce((function (e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(F, "$1"));
                        return i[x] ? ce((function (e, t, n, o) {
                            for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                        })) : function (e, o, r) {
                            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                        }
                    })),
                    has: ce((function (e) {
                        return function (t) {
                            return 0 < ae(e, t).length
                        }
                    })),
                    contains: ce((function (e) {
                        return e = e.replace(te, ne),
                            function (t) {
                                return -1 < (t.textContent || o(t)).indexOf(e)
                            }
                    })),
                    lang: ce((function (e) {
                        return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function (t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === d
                    },
                    focus: function (e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function (e) {
                        return G.test(e.nodeName)
                    },
                    input: function (e) {
                        return Q.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me((function () {
                        return [0]
                    })),
                    last: me((function (e, t) {
                        return [t - 1]
                    })),
                    eq: me((function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    })),
                    even: me((function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })),
                    odd: me((function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })),
                    lt: me((function (e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    })),
                    gt: me((function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    }))
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = de(t);

        function ve() {}

        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function xe(e, t, n) {
            var i = t.dir,
                o = t.next,
                r = o || i,
                s = n && "parentNode" === r,
                a = k++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, o);
                return !1
            } : function (t, n, l) {
                var c, u, p, h = [_, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (u = (p = t[x] || (t[x] = {}))[t.uniqueID] || (p[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[r]) && c[0] === _ && c[1] === a) return h[2] = c[2];
                                if ((u[r] = h)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function we(e) {
            return 1 < e.length ? function (t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function _e(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function ke(e, t, n, i, o, r) {
            return i && !i[x] && (i = ke(i)), o && !o[x] && (o = ke(o, r)), ce((function (r, s, a, l) {
                var c, u, p, h = [],
                    f = [],
                    d = s.length,
                    g = r || function (e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !r && t ? g : _e(g, h, e, a, l),
                    y = n ? o || (r ? e : d || i) ? [] : s : m;
                if (n && n(m, y, a, l), i)
                    for (c = _e(y, f), i(c, [], a, l), u = c.length; u--;)(p = c[u]) && (y[f[u]] = !(m[f[u]] = p));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = y.length; u--;)(p = y[u]) && c.push(m[u] = p);
                            o(null, y = [], c, l)
                        }
                        for (u = y.length; u--;)(p = y[u]) && -1 < (c = o ? P(r, p) : h[u]) && (r[c] = !(s[c] = p))
                    }
                } else y = _e(y === s ? y.splice(d, y.length) : y), o ? o(null, s, y, l) : N.apply(s, y)
            }))
        }

        function Ee(e) {
            for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = xe((function (e) {
                    return e === t
                }), a, !0), p = xe((function (e) {
                    return -1 < P(t, e)
                }), a, !0), h = [function (e, n, i) {
                    var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : p(e, n, i));
                    return t = null, o
                }]; l < r; l++)
                if (n = i.relative[e[l].type]) h = [xe(we(h), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
                        for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                        return ke(1 < l && we(h), 1 < l && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(F, "$1"), n, l < o && Ee(e.slice(l, o)), o < r && Ee(e = e.slice(o)), o < r && be(e))
                    }
                    h.push(n)
                } return we(h)
        }
        return ve.prototype = i.filters = i.pseudos, i.setFilters = new ve, s = ae.tokenize = function (e, t) {
            var n, o, r, s, a, l, c, u = T[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = i.preFilter; a;) {
                for (s in n && !(o = B.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = U.exec(a)) && (n = o.shift(), r.push({
                        value: n,
                        type: o[0].replace(F, " ")
                    }), a = a.slice(n.length)), i.filter) !(o = $[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ae.error(e) : T(e, l).slice(0)
        }, a = ae.compile = function (e, t) {
            var n, o, r, a, l, u, p = [],
                d = [],
                m = S[e + " "];
            if (!m) {
                for (t || (t = s(e)), n = t.length; n--;)(m = Ee(t[n]))[x] ? p.push(m) : d.push(m);
                (m = S(e, (o = d, a = 0 < (r = p).length, l = 0 < o.length, u = function (e, t, n, s, u) {
                    var p, d, m, y = 0,
                        v = "0",
                        b = e && [],
                        x = [],
                        w = c,
                        k = e || l && i.find.TAG("*", u),
                        E = _ += null == w ? 1 : Math.random() || .1,
                        T = k.length;
                    for (u && (c = t == f || t || u); v !== T && null != (p = k[v]); v++) {
                        if (l && p) {
                            for (d = 0, t || p.ownerDocument == f || (h(p), n = !g); m = o[d++];)
                                if (m(p, t || f, n)) {
                                    s.push(p);
                                    break
                                } u && (_ = E)
                        }
                        a && ((p = !m && p) && y--, e && b.push(p))
                    }
                    if (y += v, a && v !== y) {
                        for (d = 0; m = r[d++];) m(b, x, t, n);
                        if (e) {
                            if (0 < y)
                                for (; v--;) b[v] || x[v] || (x[v] = M.call(s));
                            x = _e(x)
                        }
                        N.apply(s, x), u && !e && 0 < x.length && 1 < y + r.length && ae.uniqueSort(s)
                    }
                    return u && (_ = E, c = w), b
                }, a ? ce(u) : u))).selector = e
            }
            return m
        }, l = ae.select = function (e, t, n, o) {
            var r, l, c, u, p, h = "function" == typeof e && e,
                f = !o && s(e = h.selector || e);
            if (n = n || [], 1 === f.length) {
                if (2 < (l = f[0] = f[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (r = $.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);)
                    if ((p = i.find[u]) && (o = p(c.matches[0].replace(te, ne), ee.test(l[0].type) && ye(t.parentNode) || t))) {
                        if (l.splice(r, 1), !(e = o.length && be(l))) return N.apply(n, o), n;
                        break
                    }
            }
            return (h || a(e, f))(o, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, n.sortStable = x.split("").sort(A).join("") === x, n.detectDuplicates = !!p, h(), n.sortDetached = ue((function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        })), ue((function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || pe("type|href|height|width", (function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), n.attributes && ue((function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || pe("value", (function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), ue((function (e) {
            return null == e.getAttribute("disabled")
        })) || pe(I, (function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        })), ae
    }(e);
    w.find = k, w.expr = k.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = k.uniqueSort, w.text = k.getText, w.isXMLDoc = k.isXML, w.contains = k.contains, w.escapeSelector = k.escape;
    var E = function (e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && w(e).is(n)) break;
                    i.push(e)
                } return i
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        S = w.expr.match.needsContext;

    function C(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function O(e, t, n) {
        return d(t) ? w.grep(e, (function (e, i) {
            return !!t.call(e, i, e) !== n
        })) : t.nodeType ? w.grep(e, (function (e) {
            return e === t !== n
        })) : "string" != typeof t ? w.grep(e, (function (e) {
            return -1 < a.call(t, e) !== n
        })) : w.filter(t, e, n)
    }
    w.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, (function (e) {
            return 1 === e.nodeType
        })))
    }, w.fn.extend({
        find: function (e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter((function () {
                for (t = 0; t < i; t++)
                    if (w.contains(o[t], this)) return !0
            })));
            for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, o[t], n);
            return 1 < i ? w.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(O(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(O(this, e || [], !0))
        },
        is: function (e) {
            return !!O(this, "string" == typeof e && S.test(e) ? w(e) : e || [], !1).length
        }
    });
    var L, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || L, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : M.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), A.test(i[1]) && w.isPlainObject(t))
                    for (i in t) d(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = m.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : d(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, L = w(m);
    var j = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function D(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter((function () {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            }))
        },
        closest: function (e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && w(e);
            if (!S.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        } return this.pushStack(1 < r.length ? w.uniqueSort(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? a.call(w(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return E(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return E(e, "parentNode", n)
        },
        next: function (e) {
            return D(e, "nextSibling")
        },
        prev: function (e) {
            return D(e, "previousSibling")
        },
        nextAll: function (e) {
            return E(e, "nextSibling")
        },
        prevAll: function (e) {
            return E(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return E(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return E(e, "previousSibling", n)
        },
        siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return T(e.firstChild)
        },
        contents: function (e) {
            return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (C(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, (function (e, t) {
        w.fn[e] = function (n, i) {
            var o = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = w.filter(i, o)), 1 < this.length && (N[e] || w.uniqueSort(o), j.test(e) && o.reverse()), this.pushStack(o)
        }
    }));
    var P = /[^\x20\t\r\n\f]+/g;

    function I(e) {
        return e
    }

    function H(e) {
        throw e
    }

    function R(e, t, n, i) {
        var o;
        try {
            e && d(o = e.promise) ? o.call(e).done(t).fail(n) : e && d(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function (e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, w.each(t.match(P) || [], (function (e, t) {
            n[t] = !0
        })), n) : w.extend({}, e);
        var i, o, r, s, a = [],
            l = [],
            c = -1,
            u = function () {
                for (s = s || e.once, r = i = !0; l.length; c = -1)
                    for (o = l.shift(); ++c < a.length;) !1 === a[c].apply(o[0], o[1]) && e.stopOnFalse && (c = a.length, o = !1);
                e.memory || (o = !1), i = !1, s && (a = o ? [] : "")
            },
            p = {
                add: function () {
                    return a && (o && !i && (c = a.length - 1, l.push(o)), function t(n) {
                        w.each(n, (function (n, i) {
                            d(i) ? e.unique && p.has(i) || a.push(i) : i && i.length && "string" !== b(i) && t(i)
                        }))
                    }(arguments), o && !i && u()), this
                },
                remove: function () {
                    return w.each(arguments, (function (e, t) {
                        for (var n; - 1 < (n = w.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
                    })), this
                },
                has: function (e) {
                    return e ? -1 < w.inArray(e, a) : 0 < a.length
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return s = l = [], a = o = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return s = l = [], o || i || (a = o = ""), this
                },
                locked: function () {
                    return !!s
                },
                fireWith: function (e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || u()), this
                },
                fire: function () {
                    return p.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return p
    }, w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                o = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return o.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return w.Deferred((function (t) {
                            w.each(n, (function (n, i) {
                                var o = d(e[i[4]]) && e[i[4]];
                                r[i[1]]((function () {
                                    var e = o && o.apply(this, arguments);
                                    e && d(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function (t, i, o) {
                        var r = 0;

                        function s(t, n, i, o) {
                            return function () {
                                var a = this,
                                    l = arguments,
                                    c = function () {
                                        var e, c;
                                        if (!(t < r)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, d(c) ? o ? c.call(e, s(r, n, I, o), s(r, n, H, o)) : (r++, c.call(e, s(r, n, I, o), s(r, n, H, o), s(r, n, I, n.notifyWith))) : (i !== I && (a = void 0, l = [e]), (o || n.resolveWith)(a, l))
                                        }
                                    },
                                    u = o ? c : function () {
                                        try {
                                            c()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), r <= t + 1 && (i !== H && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return w.Deferred((function (e) {
                            n[0][3].add(s(0, e, d(o) ? o : I, e.notifyWith)), n[1][3].add(s(0, e, d(t) ? t : I)), n[2][3].add(s(0, e, d(i) ? i : H))
                        })).promise()
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, o) : o
                    }
                },
                r = {};
            return w.each(n, (function (e, t) {
                var s = t[2],
                    a = t[5];
                o[t[1]] = s.add, a && s.add((function () {
                    i = a
                }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), r[t[0]] = function () {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = s.fireWith
            })), o.promise(r), t && t.call(r, r), r
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = o.call(arguments),
                s = w.Deferred(),
                a = function (e) {
                    return function (n) {
                        i[e] = this, r[e] = 1 < arguments.length ? o.call(arguments) : n, --t || s.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (R(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || d(r[n] && r[n].then))) return s.then();
            for (; n--;) R(r[n], a(n), s.reject);
            return s.promise()
        }
    });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && q.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout((function () {
            throw t
        }))
    };
    var W = w.Deferred();

    function z() {
        m.removeEventListener("DOMContentLoaded", z), e.removeEventListener("load", z), w.ready()
    }
    w.fn.ready = function (e) {
        return W.then(e).catch((function (e) {
            w.readyException(e)
        })), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || W.resolveWith(m, [w])
        }
    }), w.ready.then = W.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", z), e.addEventListener("load", z));
    var F = function (e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === b(n))
                for (a in o = !0, n) F(e, t, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, d(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(w(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        B = /^-ms-/,
        U = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function Y(e) {
        return e.replace(B, "ms-").replace(U, X)
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function $() {
        this.expando = w.expando + $.uid++
    }
    $.uid = 1, $.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[Y(t)] = n;
            else
                for (i in t) o[Y(i)] = t[i];
            return o
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(P) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var K = new $,
        Q = new $,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : G.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function (e) {
            return Q.hasData(e) || K.hasData(e)
        },
        data: function (e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function (e, t) {
            Q.remove(e, t)
        },
        _data: function (e, t, n) {
            return K.access(e, t, n)
        },
        _removeData: function (e, t) {
            K.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = Q.get(r), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Y(i.slice(5)), Z(r, i, o[i]));
                    K.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each((function () {
                Q.set(this, e)
            })) : F(this, (function (t) {
                var n;
                if (r && void 0 === t) return void 0 !== (n = Q.get(r, e)) || void 0 !== (n = Z(r, e)) ? n : void 0;
                this.each((function () {
                    Q.set(this, e, t)
                }))
            }), null, t, 1 < arguments.length, null, !0)
        },
        removeData: function (e) {
            return this.each((function () {
                Q.remove(this, e)
            }))
        }
    }), w.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, w.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = w._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, (function () {
                w.dequeue(e, t)
            }), r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return K.get(e, n) || K.access(e, n, {
                empty: w.Callbacks("once memory").add((function () {
                    K.remove(e, [t + "queue", n])
                }))
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            }))
        },
        dequeue: function (e) {
            return this.each((function () {
                w.dequeue(this, e)
            }))
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                o = w.Deferred(),
                r = this,
                s = this.length,
                a = function () {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = K.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = m.documentElement,
        oe = function (e) {
            return w.contains(e.ownerDocument, e)
        },
        re = {
            composed: !0
        };
    ie.getRootNode && (oe = function (e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
    });
    var se = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === w.css(e, "display")
    };

    function ae(e, t, n, i) {
        var o, r, s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return w.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (w.cssNumber[t] || "px" !== c && +l) && te.exec(w.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) w.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
            u *= 2, w.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }
    var le = {};

    function ce(e, t) {
        for (var n, i, o, r, s, a, l, c = [], u = 0, p = e.length; u < p; u++)(i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = K.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && se(i) && (c[u] = (l = s = r = void 0, s = (o = i).ownerDocument, a = o.nodeName, (l = le[a]) || (r = s.body.appendChild(s.createElement(a)), l = w.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), le[a] = l)))) : "none" !== n && (c[u] = "none", K.set(i, "display", n)));
        for (u = 0; u < p; u++) null != c[u] && (e[u].style.display = c[u]);
        return e
    }
    w.fn.extend({
        show: function () {
            return ce(this, !0)
        },
        hide: function () {
            return ce(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                se(this) ? w(this).show() : w(this).hide()
            }))
        }
    });
    var ue, pe, he = /^(?:checkbox|radio)$/i,
        fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        de = /^$|^module$|\/(?:java|ecma)script/i;
    ue = m.createDocumentFragment().appendChild(m.createElement("div")), (pe = m.createElement("input")).setAttribute("type", "radio"), pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), ue.appendChild(pe), f.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue, ue.innerHTML = "<option></option>", f.option = !!ue.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && C(e, t) ? w.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, f.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ve = /<|&#?\w+;/;

    function be(e, t, n, i, o) {
        for (var r, s, a, l, c, u, p = t.createDocumentFragment(), h = [], f = 0, d = e.length; f < d; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === b(r)) w.merge(h, r.nodeType ? [r] : r);
                else if (ve.test(r)) {
            for (s = s || p.appendChild(t.createElement("div")), a = (fe.exec(r) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + w.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
            w.merge(h, s.childNodes), (s = p.firstChild).textContent = ""
        } else h.push(t.createTextNode(r));
        for (p.textContent = "", f = 0; r = h[f++];)
            if (i && -1 < w.inArray(r, i)) o && o.push(r);
            else if (c = oe(r), s = me(p.appendChild(r), "script"), c && ye(s), n)
            for (u = 0; r = s[u++];) de.test(r.type || "") && n.push(r);
        return p
    }
    var xe = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function _e() {
        return !1
    }

    function ke(e, t) {
        return e === function () {
            try {
                return m.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ee(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Ee(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = _e;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function (e) {
            return w().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = w.guid++)), e.each((function () {
            w.event.add(this, t, o, i, n)
        }))
    }

    function Te(e, t, n) {
        n ? (K.set(e, t, !1), w.event.add(e, t, {
            namespace: !1,
            handler: function (e) {
                var i, r, s = K.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (s.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (s = o.call(arguments), K.set(this, t, s), i = n(this, t), this[t](), s !== (r = K.get(this, t)) || i ? K.set(this, t, !1) : r = {}, s !== r) return e.stopImmediatePropagation(), e.preventDefault(), r && r.value
                } else s.length && (K.set(this, t, {
                    value: w.event.trigger(w.extend(s[0], w.Event.prototype), s.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === K.get(e, t) && w.event.add(e, t, we)
    }
    w.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var r, s, a, l, c, u, p, h, f, d, g, m = K.get(e);
            if (V(e))
                for (n.handler && (n = (r = n).handler, o = r.selector), o && w.find.matchesSelector(ie, o), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function (t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(P) || [""]).length; c--;) f = g = (a = xe.exec(t[c]) || [])[1], d = (a[2] || "").split(".").sort(), f && (p = w.event.special[f] || {}, f = (o ? p.delegateType : p.bindType) || f, p = w.event.special[f] || {}, u = w.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: d.join(".")
                }, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(e, i, d, s) || e.addEventListener && e.addEventListener(f, s)), p.add && (p.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), w.event.global[f] = !0)
        },
        remove: function (e, t, n, i, o) {
            var r, s, a, l, c, u, p, h, f, d, g, m = K.hasData(e) && K.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(P) || [""]).length; c--;)
                    if (f = g = (a = xe.exec(t[c]) || [])[1], d = (a[2] || "").split(".").sort(), f) {
                        for (p = w.event.special[f] || {}, h = l[f = (i ? p.delegateType : p.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, p.remove && p.remove.call(e, u));
                        s && !h.length && (p.teardown && !1 !== p.teardown.call(e, d, m.handle) || w.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) w.event.remove(e, f + t[c], n, i, !0);
                w.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, i, o, r, s, a = new Array(arguments.length),
                l = w.event.fix(e),
                c = (K.get(this, "events") || Object.create(null))[l.type] || [],
                u = w.event.special[l.type] || {};
            for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                for (s = w.event.handlers.call(this, l, c), t = 0;
                    (o = s[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((w.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result
            }
        },
        handlers: function (e, t) {
            var n, i, o, r, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < w(o, this).index(c) : w.find(o, this, null, [c]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    } return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: d(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && C(t, "input") && Te(t, "click", we), !1
                },
                trigger: function (e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && C(t, "input") && Te(t, "click"), !0
                },
                _default: function (e) {
                    var t = e.target;
                    return he.test(t.type) && t.click && C(t, "input") && K.get(t, "click") || C(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : _e, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: _e,
        isPropagationStopped: _e,
        isImmediatePropagationStopped: _e,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function (e, t) {
        w.event.special[e] = {
            setup: function () {
                return Te(this, e, ke), !1
            },
            trigger: function () {
                return Te(this, e), !0
            },
            _default: function () {
                return !0
            },
            delegateType: t
        }
    })), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function (e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === this || w.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), w.fn.extend({
        on: function (e, t, n, i) {
            return Ee(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return Ee(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = _e), this.each((function () {
                w.event.remove(this, e, n, t)
            }))
        }
    });
    var Se = /<script|<style|<link/i,
        Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return C(e, "table") && C(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Me(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function je(e, t) {
        var n, i, o, r, s, a;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (a = K.get(e).events))
                for (o in K.remove(t, "handle events"), a)
                    for (n = 0, i = a[o].length; n < i; n++) w.event.add(t, o, a[o][n]);
            Q.hasData(e) && (r = Q.access(e), s = w.extend({}, r), Q.set(t, s))
        }
    }

    function Ne(e, t, n, i) {
        t = r(t);
        var o, s, a, l, c, u, p = 0,
            h = e.length,
            g = h - 1,
            m = t[0],
            y = d(m);
        if (y || 1 < h && "string" == typeof m && !f.checkClone && Ce.test(m)) return e.each((function (o) {
            var r = e.eq(o);
            y && (t[0] = m.call(this, o, r.html())), Ne(r, t, n, i)
        }));
        if (h && (s = (o = be(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = s), s || i)) {
            for (l = (a = w.map(me(o, "script"), Le)).length; p < h; p++) c = o, p !== g && (c = w.clone(c, !0, !0), l && w.merge(a, me(c, "script"))), n.call(e[p], c, p);
            if (l)
                for (u = a[a.length - 1].ownerDocument, w.map(a, Me), p = 0; p < l; p++) c = a[p], de.test(c.type || "") && !K.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }, u) : v(c.textContent.replace(Ae, ""), c, u))
        }
        return e
    }

    function De(e, t, n) {
        for (var i, o = t ? w.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || w.cleanData(me(i)), i.parentNode && (n && oe(i) && ye(me(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e
        },
        clone: function (e, t, n) {
            var i, o, r, s, a, l, c, u = e.cloneNode(!0),
                p = oe(e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (s = me(u), i = 0, o = (r = me(e)).length; i < o; i++) a = r[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && he.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (r = r || me(e), s = s || me(u), i = 0, o = r.length; i < o; i++) je(r[i], s[i]);
                else je(e, u);
            return 0 < (s = me(u, "script")).length && ye(s, !p && me(e, "script")), u
        },
        cleanData: function (e) {
            for (var t, n, i, o = w.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (V(n)) {
                    if (t = n[K.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                        n[K.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function (e) {
            return De(this, e, !0)
        },
        remove: function (e) {
            return De(this, e)
        },
        text: function (e) {
            return F(this, (function (e) {
                return void 0 === e ? w.text(this) : this.empty().each((function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function () {
            return Ne(this, arguments, (function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            }))
        },
        prepend: function () {
            return Ne(this, arguments, (function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function () {
            return Ne(this, arguments, (function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function () {
            return Ne(this, arguments, (function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function () {
                return w.clone(this, e, t)
            }))
        },
        html: function (e) {
            return F(this, (function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !ge[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return Ne(this, arguments, (function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(me(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function (e, t) {
        w.fn[e] = function (e) {
            for (var n, i = [], o = w(e), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), w(o[a])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    }));
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        He = function (e, t, n) {
            var i, o, r = {};
            for (o in t) r[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.call(e), t) e.style[o] = r[o];
            return i
        },
        Re = new RegExp(ne.join("|"), "i");

    function qe(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || Ie(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || oe(e) || (s = w.style(e, t)), !f.pixelBoxStyles() && Pe.test(s) && Re.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function We(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                i = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), u.style.position = "absolute", r = 12 === n(u.offsetWidth / 3), ie.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, r, s, a, l, c = m.createElement("div"),
            u = m.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(f, {
            boxSizingReliable: function () {
                return t(), o
            },
            pixelBoxStyles: function () {
                return t(), s
            },
            pixelPosition: function () {
                return t(), i
            },
            reliableMarginLeft: function () {
                return t(), l
            },
            scrollboxSize: function () {
                return t(), r
            },
            reliableTrDimensions: function () {
                var t, n, i, o;
                return null == a && (t = m.createElement("table"), n = m.createElement("tr"), i = m.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", ie.appendChild(t).appendChild(n).appendChild(i), o = e.getComputedStyle(n), a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === n.offsetHeight, ie.removeChild(t)), a
            }
        }))
    }();
    var ze = ["Webkit", "Moz", "ms"],
        Fe = m.createElement("div").style,
        Be = {};

    function Ue(e) {
        return w.cssProps[e] || Be[e] || (e in Fe ? e : Be[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--;)
                if ((e = ze[n] + t) in Fe) return e
        }(e) || e)
    }
    var Xe = /^(none|table(?!-c[ea]).+)/,
        Ye = /^--/,
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $e = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ke(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Qe(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += w.css(e, n + ne[s], !0, o)), i ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, o)), "margin" !== n && (l -= w.css(e, "border" + ne[s] + "Width", !0, o))) : (l += w.css(e, "padding" + ne[s], !0, o), "padding" !== n ? l += w.css(e, "border" + ne[s] + "Width", !0, o) : a += w.css(e, "border" + ne[s] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
    }

    function Ge(e, t, n) {
        var i = Ie(e),
            o = (!f.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i),
            r = o,
            s = qe(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!f.boxSizingReliable() && o || !f.reliableTrDimensions() && C(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === w.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === w.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + Qe(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
    }

    function Je(e, t, n, i, o) {
        return new Je.prototype.init(e, t, n, i, o)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = qe(e, "opacity");
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
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = Y(t),
                    l = Ye.test(t),
                    c = e.style;
                if (l || (t = Ue(a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                "string" == (r = typeof n) && (o = te.exec(n)) && o[1] && (n = ae(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (w.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var o, r, s, a = Y(t);
            return Ye.test(t) || (t = Ue(a)), (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = qe(e, t, i)), "normal" === o && t in $e && (o = $e[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), w.each(["height", "width"], (function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !Xe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, t, i) : He(e, Ve, (function () {
                    return Ge(e, t, i)
                }))
            },
            set: function (e, n, i) {
                var o, r = Ie(e),
                    s = !f.scrollboxSize() && "absolute" === r.position,
                    a = (s || i) && "border-box" === w.css(e, "boxSizing", !1, r),
                    l = i ? Qe(e, t, i, a, r) : 0;
                return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Qe(e, t, "border", !1, r) - .5)), l && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(0, n, l)
            }
        }
    })), w.cssHooks.marginLeft = We(f.reliableMarginLeft, (function (e, t) {
        if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, {
            marginLeft: 0
        }, (function () {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    })), w.fn.extend({
        css: function (e, t) {
            return F(this, (function (e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = Ie(e), o = t.length; s < o; s++) r[t[s]] = w.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }), e, t, 1 < arguments.length)
        }
    }), ((w.Tween = Je).prototype = {
        constructor: Je,
        init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (w.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Je.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this
        }
    }).init.prototype = Je.prototype, (Je.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Je.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = Je.prototype.init, w.fx.step = {};
    var Ze, et, tt, nt, it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function rt() {
        et && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(rt) : e.setTimeout(rt, w.fx.interval), w.fx.tick())
    }

    function st() {
        return e.setTimeout((function () {
            Ze = void 0
        })), Ze = Date.now()
    }

    function at(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ne[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function lt(e, t, n) {
        for (var i, o = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function ct(e, t, n) {
        var i, o, r = 0,
            s = ct.prefilters.length,
            a = w.Deferred().always((function () {
                delete l.elem
            })),
            l = function () {
                if (o) return !1;
                for (var t = Ze || st(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
                return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ze || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function (e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (o = t[i = Y(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = w.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
            }(u, c.opts.specialEasing); r < s; r++)
            if (i = ct.prefilters[r].call(c, e, u, c.opts)) return d(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return w.map(u, lt, c), d(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    w.Animation = w.extend(ct, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            d(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var i, o, r, s, a, l, c, u, p = "width" in t || "height" in t,
                h = this,
                f = {},
                d = e.style,
                g = e.nodeType && se(e),
                m = K.get(e, "fxshow");
            for (i in n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || a()
                }), s.unqueued++, h.always((function () {
                    h.always((function () {
                        s.unqueued--, w.queue(e, "fx").length || s.empty.fire()
                    }))
                }))), t)
                if (o = t[i], it.test(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    f[i] = m && m[i] || w.style(e, i)
                } if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f))
                for (i in p && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], null == (c = m && m.display) && (c = K.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (ce([e], !0), c = e.style.display || c, u = w.css(e, "display"), ce([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (h.done((function () {
                        d.display = c
                    })), null == c && (u = d.display, c = "none" === u ? "" : u)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", h.always((function () {
                        d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                    }))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(e, "fxshow", {
                    display: c
                }), r && (m.hidden = !g), g && ce([e], !0), h.done((function () {
                    for (i in g || ce([e]), K.remove(e, "fxshow"), f) w.style(e, i, f[i])
                }))), l = lt(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (e, t) {
            t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
        }
    }), w.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || d(e) && e,
            duration: e,
            easing: n && t || t && !d(t) && t
        };
        return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            d(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
        }, i
    }, w.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var o = w.isEmptyObject(e),
                r = w.speed(t, n, i),
                s = function () {
                    var t = ct(this, w.extend({}, e), r);
                    (o || K.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    r = w.timers,
                    s = K.get(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s) s[o] && s[o].stop && ot.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                !t && n || w.dequeue(this, e)
            }))
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each((function () {
                var t, n = K.get(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    r = w.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, w.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            }))
        }
    }), w.each(["toggle", "show", "hide"], (function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(at(t, !0), e, i, o)
        }
    })), w.each({
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function (e, t) {
        w.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    })), w.timers = [], w.fx.tick = function () {
        var e, t = 0,
            n = w.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), Ze = void 0
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        et || (et = !0, rt())
    }, w.fx.stop = function () {
        et = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function (t, n) {
        return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function (n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(o)
            }
        }))
    }, tt = m.createElement("input"), nt = m.createElement("select").appendChild(m.createElement("option")), tt.type = "checkbox", f.checkOn = "" !== tt.value, f.optSelected = nt.selected, (tt = m.createElement("input")).value = "t", tt.type = "radio", f.radioValue = "t" === tt.value;
    var ut, pt = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return F(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each((function () {
                w.removeAttr(this, e)
            }))
        }
    }), w.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === r && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!f.radioValue && "radio" === t && C(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i = 0,
                o = t && t.match(P);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), ut = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), (function (e, t) {
        var n = pt[t] || w.find.attr;
        pt[t] = function (e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = pt[s], pt[s] = o, o = null != n(e, t, i) ? s : null, pt[s] = r), o
        }
    }));
    var ht = /^(?:input|select|textarea|button)$/i,
        ft = /^(?:a|area)$/i;

    function dt(e) {
        return (e.match(P) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    w.fn.extend({
        prop: function (e, t) {
            return F(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each((function () {
                delete this[w.propFix[e] || e]
            }))
        }
    }), w.extend({
        prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && w.isXMLDoc(e) || (t = w.propFix[t] || t, o = w.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
        w.propFix[this.toLowerCase()] = this
    })), w.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (d(e)) return this.each((function (t) {
                w(this).addClass(e.call(this, t, gt(this)))
            }));
            if ((t = mt(e)).length)
                for (; n = this[l++];)
                    if (o = gt(n), i = 1 === n.nodeType && " " + dt(o) + " ") {
                        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = dt(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (d(e)) return this.each((function (t) {
                w(this).removeClass(e.call(this, t, gt(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((t = mt(e)).length)
                for (; n = this[l++];)
                    if (o = gt(n), i = 1 === n.nodeType && " " + dt(o) + " ") {
                        for (s = 0; r = t[s++];)
                            for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        o !== (a = dt(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : d(e) ? this.each((function (n) {
                w(this).toggleClass(e.call(this, n, gt(this), t), t)
            })) : this.each((function () {
                var t, o, r, s;
                if (i)
                    for (o = 0, r = w(this), s = mt(e); t = s[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = gt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
            }))
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + dt(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var yt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = d(e), this.each((function (n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, (function (e) {
                    return null == e ? "" : e + ""
                }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            }))) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : dt(w.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, i, o = e.options,
                        r = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), s) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var n, i, o = e.options, r = w.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < w.inArray(w.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), w.each(["radio", "checkbox"], (function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < w.inArray(w(e).val(), t)
            }
        }, f.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), f.focusin = "onfocusin" in e;
    var vt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function (e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var r, s, a, l, c, p, h, f, y = [i || m],
                v = u.call(t, "type") ? t.type : t,
                b = u.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = f = a = i = i || m, 3 !== i.nodeType && 8 !== i.nodeType && !vt.test(v + w.event.triggered) && (-1 < v.indexOf(".") && (v = (b = v.split(".")).shift(), b.sort()), c = v.indexOf(":") < 0 && "on" + v, (t = t[w.expando] ? t : new w.Event(v, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), h = w.event.special[v] || {}, o || !h.trigger || !1 !== h.trigger.apply(i, n))) {
                if (!o && !h.noBubble && !g(i)) {
                    for (l = h.delegateType || v, vt.test(l + v) || (s = s.parentNode); s; s = s.parentNode) y.push(s), a = s;
                    a === (i.ownerDocument || m) && y.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0;
                    (s = y[r++]) && !t.isPropagationStopped();) f = s, t.type = 1 < r ? l : h.bindType || v, (p = (K.get(s, "events") || Object.create(null))[t.type] && K.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && V(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = v, o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(y.pop(), n) || !V(i) || c && d(i[v]) && !g(i) && ((a = i[c]) && (i[c] = null), w.event.triggered = v, t.isPropagationStopped() && f.addEventListener(v, bt), i[v](), t.isPropagationStopped() && f.removeEventListener(v, bt), w.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        },
        simulate: function (e, t, n) {
            var i = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(i, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each((function () {
                w.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), f.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, (function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this.document || this,
                    o = K.access(i, t);
                o || i.addEventListener(e, n, !0), K.access(i, t, (o || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this.document || this,
                    o = K.access(i, t) - 1;
                o ? K.access(i, t, o) : (i.removeEventListener(e, n, !0), K.remove(i, t))
            }
        }
    }));
    var xt = e.location,
        wt = {
            guid: Date.now()
        },
        _t = /\?/;
    w.parseXML = function (t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return i = n && n.getElementsByTagName("parsererror")[0], n && !i || w.error("Invalid XML: " + (i ? w.map(i.childNodes, (function (e) {
            return e.textContent
        })).join("\n") : t)), n
    };
    var kt = /\[\]$/,
        Et = /\r?\n/g,
        Tt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function Ct(e, t, n, i) {
        var o;
        if (Array.isArray(t)) w.each(t, (function (t, o) {
            n || kt.test(e) ? i(e, o) : Ct(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        }));
        else if (n || "object" !== b(t)) i(e, t);
        else
            for (o in t) Ct(e + "[" + o + "]", t[o], n, i)
    }
    w.param = function (e, t) {
        var n, i = [],
            o = function (e, t) {
                var n = d(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function () {
            o(this.name, this.value)
        }));
        else
            for (n in e) Ct(n, e[n], t, o);
        return i.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map((function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            })).filter((function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && St.test(this.nodeName) && !Tt.test(e) && (this.checked || !he.test(e))
            })).map((function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, (function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            })).get()
        }
    });
    var At = /%20/g,
        Ot = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jt = /^(?:GET|HEAD)$/,
        Nt = /^\/\//,
        Dt = {},
        Pt = {},
        It = "*/".concat("*"),
        Ht = m.createElement("a");

    function Rt(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(P) || [];
            if (d(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function qt(e, t, n, i) {
        var o = {},
            r = e === Pt;

        function s(a) {
            var l;
            return o[a] = !0, w.each(e[a] || [], (function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            })), l
        }
        return s(t.dataTypes[0]) || !o["*"] && s("*")
    }

    function Wt(e, t) {
        var n, i, o = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i), e
    }
    Ht.href = xt.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
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
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Wt(Wt(e, w.ajaxSettings), t) : Wt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Rt(Dt),
        ajaxTransport: Rt(Pt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, r, s, a, l, c, u, p, h, f = w.ajaxSetup({}, n),
                d = f.context || f,
                g = f.context && (d.nodeType || d.jquery) ? w(d) : w.event,
                y = w.Deferred(),
                v = w.Callbacks("once memory"),
                b = f.statusCode || {},
                x = {},
                _ = {},
                k = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Mt.exec(r);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return c ? r : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = _[e.toLowerCase()] = _[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == c && (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || k;
                        return i && i.abort(t), T(0, t), this
                    }
                };
            if (y.promise(E), f.url = ((t || f.url || xt.href) + "").replace(Nt, xt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(P) || [""], null == f.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = f.url, l.href = l.href, f.crossDomain = Ht.protocol + "//" + Ht.host != l.protocol + "//" + l.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)), qt(Dt, f, n, E), c) return E;
            for (p in (u = w.event && f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !jt.test(f.type), o = f.url.replace(Ot, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(At, "+")) : (h = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (_t.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Lt, "$1"), h = (_t.test(o) ? "&" : "?") + "_=" + wt.guid++ + h), f.url = o + h), f.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && E.setRequestHeader("Content-Type", f.contentType), E.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + It + "; q=0.01" : "") : f.accepts["*"]), f.headers) E.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (!1 === f.beforeSend.call(d, E, f) || c)) return E.abort();
            if (k = "abort", v.add(f.complete), E.done(f.success), E.fail(f.error), i = qt(Pt, f, n, E)) {
                if (E.readyState = 1, u && g.trigger("ajaxSend", [E, f]), c) return E;
                f.async && 0 < f.timeout && (a = e.setTimeout((function () {
                    E.abort("timeout")
                }), f.timeout));
                try {
                    c = !1, i.send(x, T)
                } catch (t) {
                    if (c) throw t;
                    T(-1, t)
                }
            } else T(-1, "No Transport");

            function T(t, n, s, l) {
                var p, h, m, x, _, k = n;
                c || (c = !0, a && e.clearTimeout(a), i = void 0, r = l || "", E.readyState = 0 < t ? 4 : 0, p = 200 <= t && t < 300 || 304 === t, s && (x = function (e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            } if (l[0] in n) r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(f, E, s)), !p && -1 < w.inArray("script", f.dataTypes) && w.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {}), x = function (e, t, n, i) {
                    var o, r, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (r = u.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, x, E, p), p ? (f.ifModified && ((_ = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = _), (_ = E.getResponseHeader("etag")) && (w.etag[o] = _)), 204 === t || "HEAD" === f.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = x.state, h = x.data, p = !(m = x.error))) : (m = k, !t && k || (k = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || k) + "", p ? y.resolveWith(d, [h, k, E]) : y.rejectWith(d, [E, k, m]), E.statusCode(b), b = void 0, u && g.trigger(p ? "ajaxSuccess" : "ajaxError", [E, f, p ? h : m]), v.fireWith(d, [E, k]), u && (g.trigger("ajaxComplete", [E, f]), --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], (function (e, t) {
        w[t] = function (e, n, i, o) {
            return d(n) && (o = o || i, i = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, w.isPlainObject(e) && e))
        }
    })), w.ajaxPrefilter((function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    })), w._evalUrl = function (e, t, n) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (e) {
                w.globalEval(e, t, n)
            }
        })
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (d(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function (e) {
            return d(e) ? this.each((function (t) {
                w(this).wrapInner(e.call(this, t))
            })) : this.each((function () {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function (e) {
            var t = d(e);
            return this.each((function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each((function () {
                w(this).replaceWith(this.childNodes)
            })), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var zt = {
            0: 200,
            1223: 204
        },
        Ft = w.ajaxSettings.xhr();
    f.cors = !!Ft && "withCredentials" in Ft, f.ajax = Ft = !!Ft, w.ajaxTransport((function (t) {
        var n, i;
        if (f.cors || Ft && !t.crossDomain) return {
            send: function (o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(zt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout((function () {
                        n && i()
                    }))
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (o) {
                    if (n) throw o
                }
            },
            abort: function () {
                n && n()
            }
        }
    })), w.ajaxPrefilter((function (e) {
        e.crossDomain && (e.contents.script = !1)
    })), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", (function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), w.ajaxTransport("script", (function (e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function (i, o) {
                t = w("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function (e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), m.head.appendChild(t[0])
            },
            abort: function () {
                n && n()
            }
        }
    }));
    var Bt, Ut = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Ut.pop() || w.expando + "_" + wt.guid++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", (function (t, n, i) {
        var o, r, s, a = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = d(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Xt, "$1" + o) : !1 !== t.jsonp && (t.url += (_t.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return s || w.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
            s = arguments
        }, i.always((function () {
            void 0 === r ? w(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Ut.push(o)), s && d(r) && r(s[0]), s = r = void 0
        })), "script"
    })), f.createHTMLDocument = ((Bt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Bt.childNodes.length), w.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (f.createHTMLDocument ? ((i = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, t.head.appendChild(i)) : t = m), r = !n && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = be([e], t, r), r && r.length && w(r).remove(), w.merge([], o.childNodes)));
        var i, o, r
    }, w.fn.load = function (e, t, n) {
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = dt(e.slice(a)), e = e.slice(0, a)), d(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && w.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done((function (e) {
            r = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        })).always(n && function (e, t) {
            s.each((function () {
                n.apply(this, r || [e.responseText, t, e])
            }))
        }), this
    }, w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, (function (t) {
            return e === t.elem
        })).length
    }, w.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, s, a, l, c = w.css(e, "position"),
                u = w(e),
                p = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), r = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), d(t) && (t = t.call(e, n, w.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : u.css(p)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                w.offset.setOffset(this, e, t)
            }));
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0), o.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - w.css(i, "marginTop", !0),
                    left: t.left - o.left - w.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map((function () {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || ie
            }))
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (i) {
            return F(this, (function (e, i, o) {
                var r;
                if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
            }), e, i, arguments.length)
        }
    })), w.each(["top", "left"], (function (e, t) {
        w.cssHooks[t] = We(f.pixelPosition, (function (e, n) {
            if (n) return n = qe(e, t), Pe.test(n) ? w(e).position()[t] + "px" : n
        }))
    })), w.each({
        Height: "height",
        Width: "width"
    }, (function (e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function (n, i) {
            w.fn[i] = function (o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (!0 === o || !0 === r ? "margin" : "border");
                return F(this, (function (t, n, o) {
                    var r;
                    return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? w.css(t, n, a) : w.style(t, n, o, a)
                }), t, s ? o : void 0, s)
            }
        }))
    })), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    })), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
        w.fn[t] = function (e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }));
    var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.proxy = function (e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), d(e)) return i = o.call(arguments, 2), (r = function () {
            return e.apply(t || this, i.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, r
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = C, w.isFunction = d, w.isWindow = g, w.camelCase = Y, w.type = b, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, w.trim = function (e) {
        return null == e ? "" : (e + "").replace(Yt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], (function () {
        return w
    }));
    var Vt = e.jQuery,
        $t = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = $t), t && e.jQuery === w && (e.jQuery = Vt), w
    }, void 0 === t && (e.jQuery = e.$ = w), w
})),
function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {})
}(this, (function (e) {
    function t(e) {
        return {
            width: (e = e.getBoundingClientRect()).width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }

    function n(e) {
        return null == e ? window : "[object Window]" !== e.toString() ? (e = e.ownerDocument) && e.defaultView || window : e
    }

    function i(e) {
        return {
            scrollLeft: (e = n(e)).pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function o(e) {
        return e instanceof n(e).Element || e instanceof Element
    }

    function r(e) {
        return e instanceof n(e).HTMLElement || e instanceof HTMLElement
    }

    function s(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof n(e).ShadowRoot || e instanceof ShadowRoot)
    }

    function a(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }

    function l(e) {
        return ((o(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }

    function c(e) {
        return t(l(e)).left + i(e).scrollLeft
    }

    function u(e) {
        return n(e).getComputedStyle(e)
    }

    function p(e) {
        return e = u(e), /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX)
    }

    function h(e, o, s) {
        void 0 === s && (s = !1);
        var u = l(o);
        e = t(e);
        var h = r(o),
            f = {
                scrollLeft: 0,
                scrollTop: 0
            },
            d = {
                x: 0,
                y: 0
            };
        return (h || !h && !s) && (("body" !== a(o) || p(u)) && (f = o !== n(o) && r(o) ? {
            scrollLeft: o.scrollLeft,
            scrollTop: o.scrollTop
        } : i(o)), r(o) ? ((d = t(o)).x += o.clientLeft, d.y += o.clientTop) : u && (d.x = c(u))), {
            x: e.left + f.scrollLeft - d.x,
            y: e.top + f.scrollTop - d.y,
            width: e.width,
            height: e.height
        }
    }

    function f(e) {
        var n = t(e),
            i = e.offsetWidth,
            o = e.offsetHeight;
        return 1 >= Math.abs(n.width - i) && (i = n.width), 1 >= Math.abs(n.height - o) && (o = n.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: i,
            height: o
        }
    }

    function d(e) {
        return "html" === a(e) ? e : e.assignedSlot || e.parentNode || (s(e) ? e.host : null) || l(e)
    }

    function g(e) {
        return 0 <= ["html", "body", "#document"].indexOf(a(e)) ? e.ownerDocument.body : r(e) && p(e) ? e : g(d(e))
    }

    function m(e, t) {
        var i;
        void 0 === t && (t = []);
        var o = g(e);
        return e = o === (null == (i = e.ownerDocument) ? void 0 : i.body), i = n(o), o = e ? [i].concat(i.visualViewport || [], p(o) ? o : []) : o, t = t.concat(o), e ? t : t.concat(m(d(o)))
    }

    function y(e) {
        return r(e) && "fixed" !== u(e).position ? e.offsetParent : null
    }

    function v(e) {
        for (var t = n(e), i = y(e); i && 0 <= ["table", "td", "th"].indexOf(a(i)) && "static" === u(i).position;) i = y(i);
        if (i && ("html" === a(i) || "body" === a(i) && "static" === u(i).position)) return t;
        if (!i) e: {
            if (i = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), -1 === navigator.userAgent.indexOf("Trident") || !r(e) || "fixed" !== u(e).position)
                for (e = d(e); r(e) && 0 > ["html", "body"].indexOf(a(e));) {
                    var o = u(e);
                    if ("none" !== o.transform || "none" !== o.perspective || "paint" === o.contain || -1 !== ["transform", "perspective"].indexOf(o.willChange) || i && "filter" === o.willChange || i && o.filter && "none" !== o.filter) {
                        i = e;
                        break e
                    }
                    e = e.parentNode
                }
            i = null
        }
        return i || t
    }

    function b(e) {
        function t(e) {
            i.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function (e) {
                i.has(e) || (e = n.get(e)) && t(e)
            })), o.push(e)
        }
        var n = new Map,
            i = new Set,
            o = [];
        return e.forEach((function (e) {
            n.set(e.name, e)
        })), e.forEach((function (e) {
            i.has(e.name) || t(e)
        })), o
    }

    function x(e) {
        var t;
        return function () {
            return t || (t = new Promise((function (n) {
                Promise.resolve().then((function () {
                    t = void 0, n(e())
                }))
            }))), t
        }
    }

    function w(e) {
        return e.split("-")[0]
    }

    function _(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && s(n))
            do {
                if (t && e.isSameNode(t)) return !0;
                t = t.parentNode || t.host
            } while (t);
        return !1
    }

    function k(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }

    function E(e, o) {
        if ("viewport" === o) {
            o = n(e);
            var s = l(e);
            o = o.visualViewport;
            var a = s.clientWidth;
            s = s.clientHeight;
            var p = 0,
                h = 0;
            o && (a = o.width, s = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (p = o.offsetLeft, h = o.offsetTop)), e = k(e = {
                width: a,
                height: s,
                x: p + c(e),
                y: h
            })
        } else r(o) ? ((e = t(o)).top += o.clientTop, e.left += o.clientLeft, e.bottom = e.top + o.clientHeight, e.right = e.left + o.clientWidth, e.width = o.clientWidth, e.height = o.clientHeight, e.x = e.left, e.y = e.top) : (h = l(e), e = l(h), a = i(h), o = null == (s = h.ownerDocument) ? void 0 : s.body, s = F(e.scrollWidth, e.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), p = F(e.scrollHeight, e.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), h = -a.scrollLeft + c(h), a = -a.scrollTop, "rtl" === u(o || e).direction && (h += F(e.clientWidth, o ? o.clientWidth : 0) - s), e = k({
            width: s,
            height: p,
            x: h,
            y: a
        }));
        return e
    }

    function T(e, t, n) {
        return t = "clippingParents" === t ? function (e) {
            var t = m(d(e)),
                n = 0 <= ["absolute", "fixed"].indexOf(u(e).position) && r(e) ? v(e) : e;
            return o(n) ? t.filter((function (e) {
                return o(e) && _(e, n) && "body" !== a(e)
            })) : []
        }(e) : [].concat(t), (n = (n = [].concat(t, [n])).reduce((function (t, n) {
            return n = E(e, n), t.top = F(n.top, t.top), t.right = B(n.right, t.right), t.bottom = B(n.bottom, t.bottom), t.left = F(n.left, t.left), t
        }), E(e, n[0]))).width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n
    }

    function S(e) {
        return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y"
    }

    function C(e) {
        var t = e.reference,
            n = e.element,
            i = (e = e.placement) ? w(e) : null;
        e = e ? e.split("-")[1] : null;
        var o = t.x + t.width / 2 - n.width / 2,
            r = t.y + t.height / 2 - n.height / 2;
        switch (i) {
            case "top":
                o = {
                    x: o,
                    y: t.y - n.height
                };
                break;
            case "bottom":
                o = {
                    x: o,
                    y: t.y + t.height
                };
                break;
            case "right":
                o = {
                    x: t.x + t.width,
                    y: r
                };
                break;
            case "left":
                o = {
                    x: t.x - n.width,
                    y: r
                };
                break;
            default:
                o = {
                    x: t.x,
                    y: t.y
                }
        }
        if (null != (i = i ? S(i) : null)) switch (r = "y" === i ? "height" : "width", e) {
            case "start":
                o[i] -= t[r] / 2 - n[r] / 2;
                break;
            case "end":
                o[i] += t[r] / 2 - n[r] / 2
        }
        return o
    }

    function A(e) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e)
    }

    function O(e, t) {
        return t.reduce((function (t, n) {
            return t[n] = e, t
        }), {})
    }

    function L(e, n) {
        void 0 === n && (n = {});
        var i = n;
        n = void 0 === (n = i.placement) ? e.placement : n;
        var r = i.boundary,
            s = void 0 === r ? "clippingParents" : r,
            a = void 0 === (r = i.rootBoundary) ? "viewport" : r;
        r = void 0 === (r = i.elementContext) ? "popper" : r;
        var c = i.altBoundary,
            u = void 0 !== c && c;
        i = A("number" != typeof (i = void 0 === (i = i.padding) ? 0 : i) ? i : O(i, R));
        var p = e.elements.reference;
        c = e.rects.popper, s = T(o(u = e.elements[u ? "popper" === r ? "reference" : "popper" : r]) ? u : u.contextElement || l(e.elements.popper), s, a), u = C({
            reference: a = t(p),
            element: c,
            strategy: "absolute",
            placement: n
        }), c = k(Object.assign({}, c, u)), a = "popper" === r ? c : a;
        var h = {
            top: s.top - a.top + i.top,
            bottom: a.bottom - s.bottom + i.bottom,
            left: s.left - a.left + i.left,
            right: a.right - s.right + i.right
        };
        if (e = e.modifiersData.offset, "popper" === r && e) {
            var f = e[n];
            Object.keys(h).forEach((function (e) {
                var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
                    n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
                h[e] += f[n] * t
            }))
        }
        return h
    }

    function M() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some((function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        }))
    }

    function j(e) {
        void 0 === e && (e = {});
        var t = e.defaultModifiers,
            n = void 0 === t ? [] : t,
            i = void 0 === (e = e.defaultOptions) ? X : e;
        return function (e, t, r) {
            function s() {
                l.forEach((function (e) {
                    return e()
                })), l = []
            }
            void 0 === r && (r = i);
            var a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, X, i),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                c = !1,
                u = {
                    state: a,
                    setOptions: function (r) {
                        return s(), a.options = Object.assign({}, i, a.options, r), a.scrollParents = {
                            reference: o(e) ? m(e) : e.contextElement ? m(e.contextElement) : [],
                            popper: m(t)
                        }, r = function (e) {
                            var t = b(e);
                            return z.reduce((function (e, n) {
                                return e.concat(t.filter((function (e) {
                                    return e.phase === n
                                })))
                            }), [])
                        }(function (e) {
                            var t = e.reduce((function (e, t) {
                                var n = e[t.name];
                                return e[t.name] = n ? Object.assign({}, n, t, {
                                    options: Object.assign({}, n.options, t.options),
                                    data: Object.assign({}, n.data, t.data)
                                }) : t, e
                            }), {});
                            return Object.keys(t).map((function (e) {
                                return t[e]
                            }))
                        }([].concat(n, a.options.modifiers))), a.orderedModifiers = r.filter((function (e) {
                            return e.enabled
                        })), a.orderedModifiers.forEach((function (e) {
                            var t = e.name,
                                n = e.options;
                            n = void 0 === n ? {} : n, "function" == typeof (e = e.effect) && (t = e({
                                state: a,
                                name: t,
                                instance: u,
                                options: n
                            }), l.push(t || function () {}))
                        })), u.update()
                    },
                    forceUpdate: function () {
                        if (!c) {
                            var e = a.elements,
                                t = e.reference;
                            if (M(t, e = e.popper))
                                for (a.rects = {
                                        reference: h(t, v(e), "fixed" === a.options.strategy),
                                        popper: f(e)
                                    }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (e) {
                                        return a.modifiersData[e.name] = Object.assign({}, e.data)
                                    })), t = 0; t < a.orderedModifiers.length; t++)
                                    if (!0 === a.reset) a.reset = !1, t = -1;
                                    else {
                                        var n = a.orderedModifiers[t];
                                        e = n.fn;
                                        var i = n.options;
                                        i = void 0 === i ? {} : i, n = n.name, "function" == typeof e && (a = e({
                                            state: a,
                                            options: i,
                                            name: n,
                                            instance: u
                                        }) || a)
                                    }
                        }
                    },
                    update: x((function () {
                        return new Promise((function (e) {
                            u.forceUpdate(), e(a)
                        }))
                    })),
                    destroy: function () {
                        s(), c = !0
                    }
                };
            return M(e, t) ? (u.setOptions(r).then((function (e) {
                !c && r.onFirstUpdate && r.onFirstUpdate(e)
            })), u) : u
        }
    }

    function N(e) {
        var t, i = e.popper,
            o = e.popperRect,
            r = e.placement,
            s = e.offsets,
            a = e.position,
            c = e.gpuAcceleration,
            p = e.adaptive;
        if (!0 === (e = e.roundOffsets)) {
            e = s.y;
            var h = window.devicePixelRatio || 1;
            e = {
                x: U(U(s.x * h) / h) || 0,
                y: U(U(e * h) / h) || 0
            }
        } else e = "function" == typeof e ? e(s) : s;
        e = void 0 === (e = (h = e).x) ? 0 : e, h = void 0 === (h = h.y) ? 0 : h;
        var f = s.hasOwnProperty("x");
        s = s.hasOwnProperty("y");
        var d, g = "left",
            m = "top",
            y = window;
        if (p) {
            var b = v(i),
                x = "clientHeight",
                w = "clientWidth";
            b === n(i) && "static" !== u(b = l(i)).position && (x = "scrollHeight", w = "scrollWidth"), "top" === r && (m = "bottom", h -= b[x] - o.height, h *= c ? 1 : -1), "left" === r && (g = "right", e -= b[w] - o.width, e *= c ? 1 : -1)
        }
        return i = Object.assign({
            position: a
        }, p && K), c ? Object.assign({}, i, ((d = {})[m] = s ? "0" : "", d[g] = f ? "0" : "", d.transform = 2 > (y.devicePixelRatio || 1) ? "translate(" + e + "px, " + h + "px)" : "translate3d(" + e + "px, " + h + "px, 0)", d)) : Object.assign({}, i, ((t = {})[m] = s ? h + "px" : "", t[g] = f ? e + "px" : "", t.transform = "", t))
    }

    function D(e) {
        return e.replace(/left|right|bottom|top/g, (function (e) {
            return Z[e]
        }))
    }

    function P(e) {
        return e.replace(/start|end/g, (function (e) {
            return ee[e]
        }))
    }

    function I(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }

    function H(e) {
        return ["top", "right", "bottom", "left"].some((function (t) {
            return 0 <= e[t]
        }))
    }
    var R = ["top", "bottom", "right", "left"],
        q = R.reduce((function (e, t) {
            return e.concat([t + "-start", t + "-end"])
        }), []),
        W = [].concat(R, ["auto"]).reduce((function (e, t) {
            return e.concat([t, t + "-start", t + "-end"])
        }), []),
        z = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
        F = Math.max,
        B = Math.min,
        U = Math.round,
        X = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        },
        Y = {
            passive: !0
        },
        V = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (e) {
                var t = e.state,
                    i = e.instance,
                    o = (e = e.options).scroll,
                    r = void 0 === o || o,
                    s = void 0 === (e = e.resize) || e,
                    a = n(t.elements.popper),
                    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return r && l.forEach((function (e) {
                        e.addEventListener("scroll", i.update, Y)
                    })), s && a.addEventListener("resize", i.update, Y),
                    function () {
                        r && l.forEach((function (e) {
                            e.removeEventListener("scroll", i.update, Y)
                        })), s && a.removeEventListener("resize", i.update, Y)
                    }
            },
            data: {}
        },
        $ = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
                var t = e.state;
                t.modifiersData[e.name] = C({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement
                })
            },
            data: {}
        },
        K = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        },
        Q = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
                var t = e.state,
                    n = e.options;
                e = void 0 === (e = n.gpuAcceleration) || e;
                var i = n.adaptive;
                i = void 0 === i || i, n = void 0 === (n = n.roundOffsets) || n, e = {
                    placement: w(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: e
                }, null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, N(Object.assign({}, e, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: i,
                    roundOffsets: n
                })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, N(Object.assign({}, e, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: n
                })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-placement": t.placement
                })
            },
            data: {}
        },
        G = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (e) {
                var t = e.state;
                Object.keys(t.elements).forEach((function (e) {
                    var n = t.styles[e] || {},
                        i = t.attributes[e] || {},
                        o = t.elements[e];
                    r(o) && a(o) && (Object.assign(o.style, n), Object.keys(i).forEach((function (e) {
                        var t = i[e];
                        !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                    })))
                }))
            },
            effect: function (e) {
                var t = e.state,
                    n = {
                        popper: {
                            position: t.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                    function () {
                        Object.keys(t.elements).forEach((function (e) {
                            var i = t.elements[e],
                                o = t.attributes[e] || {};
                            e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) {
                                return e[t] = "", e
                            }), {}), r(i) && a(i) && (Object.assign(i.style, e), Object.keys(o).forEach((function (e) {
                                i.removeAttribute(e)
                            })))
                        }))
                    }
            },
            requires: ["computeStyles"]
        },
        J = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
                var t = e.state,
                    n = e.name,
                    i = void 0 === (e = e.options.offset) ? [0, 0] : e,
                    o = (e = W.reduce((function (e, n) {
                        var o = t.rects,
                            r = w(n),
                            s = 0 <= ["left", "top"].indexOf(r) ? -1 : 1,
                            a = "function" == typeof i ? i(Object.assign({}, o, {
                                placement: n
                            })) : i;
                        return o = (o = a[0]) || 0, a = ((a = a[1]) || 0) * s, r = 0 <= ["left", "right"].indexOf(r) ? {
                            x: a,
                            y: o
                        } : {
                            x: o,
                            y: a
                        }, e[n] = r, e
                    }), {}))[t.placement],
                    r = o.x;
                o = o.y, null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += r, t.modifiersData.popperOffsets.y += o), t.modifiersData[n] = e
            }
        },
        Z = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        },
        ee = {
            start: "end",
            end: "start"
        },
        te = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t = e.state,
                    n = e.options;
                if (e = e.name, !t.modifiersData[e]._skip) {
                    var i = n.mainAxis;
                    i = void 0 === i || i;
                    var o = n.altAxis;
                    o = void 0 === o || o;
                    var r = n.fallbackPlacements,
                        s = n.padding,
                        a = n.boundary,
                        l = n.rootBoundary,
                        c = n.altBoundary,
                        u = n.flipVariations,
                        p = void 0 === u || u,
                        h = n.allowedAutoPlacements;
                    u = w(n = t.options.placement), r = r || (u !== n && p ? function (e) {
                        if ("auto" === w(e)) return [];
                        var t = D(e);
                        return [P(e), t, P(t)]
                    }(n) : [D(n)]);
                    var f = [n].concat(r).reduce((function (e, n) {
                        return e.concat("auto" === w(n) ? function (e, t) {
                            void 0 === t && (t = {});
                            var n = t.boundary,
                                i = t.rootBoundary,
                                o = t.padding,
                                r = t.flipVariations,
                                s = t.allowedAutoPlacements,
                                a = void 0 === s ? W : s,
                                l = t.placement.split("-")[1];
                            0 === (r = (t = l ? r ? q : q.filter((function (e) {
                                return e.split("-")[1] === l
                            })) : R).filter((function (e) {
                                return 0 <= a.indexOf(e)
                            }))).length && (r = t);
                            var c = r.reduce((function (t, r) {
                                return t[r] = L(e, {
                                    placement: r,
                                    boundary: n,
                                    rootBoundary: i,
                                    padding: o
                                })[w(r)], t
                            }), {});
                            return Object.keys(c).sort((function (e, t) {
                                return c[e] - c[t]
                            }))
                        }(t, {
                            placement: n,
                            boundary: a,
                            rootBoundary: l,
                            padding: s,
                            flipVariations: p,
                            allowedAutoPlacements: h
                        }) : n)
                    }), []);
                    n = t.rects.reference, r = t.rects.popper;
                    var d = new Map;
                    u = !0;
                    for (var g = f[0], m = 0; m < f.length; m++) {
                        var y = f[m],
                            v = w(y),
                            b = "start" === y.split("-")[1],
                            x = 0 <= ["top", "bottom"].indexOf(v),
                            _ = x ? "width" : "height",
                            k = L(t, {
                                placement: y,
                                boundary: a,
                                rootBoundary: l,
                                altBoundary: c,
                                padding: s
                            });
                        if (b = x ? b ? "right" : "left" : b ? "bottom" : "top", n[_] > r[_] && (b = D(b)), _ = D(b), x = [], i && x.push(0 >= k[v]), o && x.push(0 >= k[b], 0 >= k[_]), x.every((function (e) {
                                return e
                            }))) {
                            g = y, u = !1;
                            break
                        }
                        d.set(y, x)
                    }
                    if (u)
                        for (i = function (e) {
                                var t = f.find((function (t) {
                                    if (t = d.get(t)) return t.slice(0, e).every((function (e) {
                                        return e
                                    }))
                                }));
                                if (t) return g = t, "break"
                            }, o = p ? 3 : 1; 0 < o && "break" !== i(o); o--);
                    t.placement !== g && (t.modifiersData[e]._skip = !0, t.placement = g, t.reset = !0)
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        },
        ne = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t = e.state,
                    n = e.options;
                e = e.name;
                var i = n.mainAxis,
                    o = void 0 === i || i,
                    r = void 0 !== (i = n.altAxis) && i;
                i = void 0 === (i = n.tether) || i;
                var s = n.tetherOffset,
                    a = void 0 === s ? 0 : s,
                    l = L(t, {
                        boundary: n.boundary,
                        rootBoundary: n.rootBoundary,
                        padding: n.padding,
                        altBoundary: n.altBoundary
                    });
                n = w(t.placement);
                var c = t.placement.split("-")[1],
                    u = !c,
                    p = S(n);
                n = "x" === p ? "y" : "x", s = t.modifiersData.popperOffsets;
                var h = t.rects.reference,
                    d = t.rects.popper,
                    g = "function" == typeof a ? a(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : a;
                if (a = {
                        x: 0,
                        y: 0
                    }, s) {
                    if (o || r) {
                        var m = "y" === p ? "top" : "left",
                            y = "y" === p ? "bottom" : "right",
                            b = "y" === p ? "height" : "width",
                            x = s[p],
                            _ = s[p] + l[m],
                            k = s[p] - l[y],
                            E = i ? -d[b] / 2 : 0,
                            T = "start" === c ? h[b] : d[b];
                        c = "start" === c ? -d[b] : -h[b], d = t.elements.arrow, d = i && d ? f(d) : {
                            width: 0,
                            height: 0
                        };
                        var C = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        };
                        m = C[m], y = C[y], d = F(0, B(h[b], d[b])), T = u ? h[b] / 2 - E - d - m - g : T - d - m - g, h = u ? -h[b] / 2 + E + d + y + g : c + d + y + g, u = t.elements.arrow && v(t.elements.arrow), g = t.modifiersData.offset ? t.modifiersData.offset[t.placement][p] : 0, u = s[p] + T - g - (u ? "y" === p ? u.clientTop || 0 : u.clientLeft || 0 : 0), h = s[p] + h - g, o && (o = i ? B(_, u) : _, k = i ? F(k, h) : k, o = F(o, B(x, k)), s[p] = o, a[p] = o - x), r && (o = (r = s[n]) + l["x" === p ? "top" : "left"], l = r - l["x" === p ? "bottom" : "right"], o = i ? B(o, u) : o, i = i ? F(l, h) : l, i = F(o, B(r, i)), s[n] = i, a[n] = i - r)
                    }
                    t.modifiersData[e] = a
                }
            },
            requiresIfExists: ["offset"]
        },
        ie = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t, n = e.state,
                    i = e.name,
                    o = e.options,
                    r = n.elements.arrow,
                    s = n.modifiersData.popperOffsets,
                    a = w(n.placement);
                if (e = S(a), a = 0 <= ["left", "right"].indexOf(a) ? "height" : "width", r && s) {
                    o = A("number" != typeof (o = "function" == typeof (o = o.padding) ? o(Object.assign({}, n.rects, {
                        placement: n.placement
                    })) : o) ? o : O(o, R));
                    var l = f(r),
                        c = "y" === e ? "top" : "left",
                        u = "y" === e ? "bottom" : "right",
                        p = n.rects.reference[a] + n.rects.reference[e] - s[e] - n.rects.popper[a];
                    s = s[e] - n.rects.reference[e], s = (r = (r = v(r)) ? "y" === e ? r.clientHeight || 0 : r.clientWidth || 0 : 0) / 2 - l[a] / 2 + (p / 2 - s / 2), a = F(o[c], B(s, r - l[a] - o[u])), n.modifiersData[i] = ((t = {})[e] = a, t.centerOffset = a - s, t)
                }
            },
            effect: function (e) {
                var t = e.state;
                if (null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)) {
                    if ("string" == typeof e && !(e = t.elements.popper.querySelector(e))) return;
                    _(t.elements.popper, e) && (t.elements.arrow = e)
                }
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        },
        oe = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
                var t = e.state;
                e = e.name;
                var n = t.rects.reference,
                    i = t.rects.popper,
                    o = t.modifiersData.preventOverflow,
                    r = L(t, {
                        elementContext: "reference"
                    }),
                    s = L(t, {
                        altBoundary: !0
                    });
                n = I(r, n), i = I(s, i, o), o = H(n), s = H(i), t.modifiersData[e] = {
                    referenceClippingOffsets: n,
                    popperEscapeOffsets: i,
                    isReferenceHidden: o,
                    hasPopperEscaped: s
                }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-reference-hidden": o,
                    "data-popper-escaped": s
                })
            }
        },
        re = j({
            defaultModifiers: [V, $, Q, G]
        }),
        se = [V, $, Q, G, J, te, ne, ie, oe],
        ae = j({
            defaultModifiers: se
        });
    e.applyStyles = G, e.arrow = ie, e.computeStyles = Q, e.createPopper = ae, e.createPopperLite = re, e.defaultModifiers = se, e.detectOverflow = L, e.eventListeners = V, e.flip = te, e.hide = oe, e.offset = J, e.popperGenerator = j, e.popperOffsets = $, e.preventOverflow = ne, Object.defineProperty(e, "__esModule", {
        value: !0
    })
})),
function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t()
}(this, (function () {
    "use strict";
    const e = e => {
            let t = e.getAttribute("data-bs-target");
            if (!t || "#" === t) {
                let n = e.getAttribute("href");
                if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]), t = n && "#" !== n ? n.trim() : null
            }
            return t
        },
        t = t => {
            const n = e(t);
            return n && document.querySelector(n) ? n : null
        },
        n = t => {
            const n = e(t);
            return n ? document.querySelector(n) : null
        },
        i = e => {
            e.dispatchEvent(new Event("transitionend"))
        },
        o = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
        r = e => o(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null,
        s = (e, t, n) => {
            Object.keys(n).forEach((i => {
                const r = n[i],
                    s = t[i],
                    a = s && o(s) ? "element" : null == (l = s) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                var l;
                if (!new RegExp(r).test(a)) throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${r}".`)
            }))
        },
        a = e => !(!o(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility"),
        l = e => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
        c = e => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                const t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? c(e.parentNode) : null
        },
        u = () => {},
        p = e => {
            e.offsetHeight
        },
        h = () => {
            const {
                jQuery: e
            } = window;
            return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null
        },
        f = [],
        d = () => "rtl" === document.documentElement.dir,
        g = e => {
            var t;
            t = () => {
                const t = h();
                if (t) {
                    const n = e.NAME,
                        i = t.fn[n];
                    t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = i, e.jQueryInterface)
                }
            }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", (() => {
                f.forEach((e => e()))
            })), f.push(t)) : t()
        },
        m = e => {
            "function" == typeof e && e()
        },
        y = (e, t, n = !0) => {
            if (!n) return void m(e);
            const o = (e => {
                if (!e) return 0;
                let {
                    transitionDuration: t,
                    transitionDelay: n
                } = window.getComputedStyle(e);
                const i = Number.parseFloat(t),
                    o = Number.parseFloat(n);
                return i || o ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0
            })(t) + 5;
            let r = !1;
            const s = ({
                target: n
            }) => {
                n === t && (r = !0, t.removeEventListener("transitionend", s), m(e))
            };
            t.addEventListener("transitionend", s), setTimeout((() => {
                r || i(t)
            }), o)
        },
        v = (e, t, n, i) => {
            let o = e.indexOf(t);
            if (-1 === o) return e[!n && i ? e.length - 1 : 0];
            const r = e.length;
            return o += n ? 1 : -1, i && (o = (o + r) % r), e[Math.max(0, Math.min(o, r - 1))]
        },
        b = /[^.]*(?=\..*)\.|.*/,
        x = /\..*/,
        w = /::\d+$/,
        _ = {};
    let k = 1;
    const E = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        T = /^(mouseenter|mouseleave)/i,
        S = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function C(e, t) {
        return t && `${t}::${k++}` || e.uidEvent || k++
    }

    function A(e) {
        const t = C(e);
        return e.uidEvent = t, _[t] = _[t] || {}, _[t]
    }

    function O(e, t, n = null) {
        const i = Object.keys(e);
        for (let o = 0, r = i.length; o < r; o++) {
            const r = e[i[o]];
            if (r.originalHandler === t && r.delegationSelector === n) return r
        }
        return null
    }

    function L(e, t, n) {
        const i = "string" == typeof t,
            o = i ? n : t;
        let r = N(e);
        return S.has(r) || (r = e), [i, o, r]
    }

    function M(e, t, n, i, o) {
        if ("string" != typeof t || !e) return;
        if (n || (n = i, i = null), T.test(t)) {
            const e = e => function (t) {
                if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t)
            };
            i ? i = e(i) : n = e(n)
        }
        const [r, s, a] = L(t, n, i), l = A(e), c = l[a] || (l[a] = {}), u = O(c, s, r ? n : null);
        if (u) return void(u.oneOff = u.oneOff && o);
        const p = C(s, t.replace(b, "")),
            h = r ? function (e, t, n) {
                return function i(o) {
                    const r = e.querySelectorAll(t);
                    for (let {
                            target: s
                        } = o; s && s !== this; s = s.parentNode)
                        for (let a = r.length; a--;)
                            if (r[a] === s) return o.delegateTarget = s, i.oneOff && D.off(e, o.type, t, n), n.apply(s, [o]);
                    return null
                }
            }(e, n, i) : function (e, t) {
                return function n(i) {
                    return i.delegateTarget = e, n.oneOff && D.off(e, i.type, t), t.apply(e, [i])
                }
            }(e, n);
        h.delegationSelector = r ? n : null, h.originalHandler = s, h.oneOff = o, h.uidEvent = p, c[p] = h, e.addEventListener(a, h, r)
    }

    function j(e, t, n, i, o) {
        const r = O(t[n], i, o);
        r && (e.removeEventListener(n, r, Boolean(o)), delete t[n][r.uidEvent])
    }

    function N(e) {
        return e = e.replace(x, ""), E[e] || e
    }
    const D = {
            on(e, t, n, i) {
                M(e, t, n, i, !1)
            },
            one(e, t, n, i) {
                M(e, t, n, i, !0)
            },
            off(e, t, n, i) {
                if ("string" != typeof t || !e) return;
                const [o, r, s] = L(t, n, i), a = s !== t, l = A(e), c = t.startsWith(".");
                if (void 0 !== r) {
                    if (!l || !l[s]) return;
                    return void j(e, l, s, r, o ? n : null)
                }
                c && Object.keys(l).forEach((n => {
                    ! function (e, t, n, i) {
                        const o = t[n] || {};
                        Object.keys(o).forEach((r => {
                            if (r.includes(i)) {
                                const i = o[r];
                                j(e, t, n, i.originalHandler, i.delegationSelector)
                            }
                        }))
                    }(e, l, n, t.slice(1))
                }));
                const u = l[s] || {};
                Object.keys(u).forEach((n => {
                    const i = n.replace(w, "");
                    if (!a || t.includes(i)) {
                        const t = u[n];
                        j(e, l, s, t.originalHandler, t.delegationSelector)
                    }
                }))
            },
            trigger(e, t, n) {
                if ("string" != typeof t || !e) return null;
                const i = h(),
                    o = N(t),
                    r = t !== o,
                    s = S.has(o);
                let a, l = !0,
                    c = !0,
                    u = !1,
                    p = null;
                return r && i && (a = i.Event(t, n), i(e).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), u = a.isDefaultPrevented()), s ? (p = document.createEvent("HTMLEvents"), p.initEvent(o, l, !0)) : p = new CustomEvent(t, {
                    bubbles: l,
                    cancelable: !0
                }), void 0 !== n && Object.keys(n).forEach((e => {
                    Object.defineProperty(p, e, {
                        get: () => n[e]
                    })
                })), u && p.preventDefault(), c && e.dispatchEvent(p), p.defaultPrevented && void 0 !== a && a.preventDefault(), p
            }
        },
        P = new Map;
    var I = {
        set(e, t, n) {
            P.has(e) || P.set(e, new Map);
            const i = P.get(e);
            i.has(t) || 0 === i.size ? i.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
        },
        get: (e, t) => P.has(e) && P.get(e).get(t) || null,
        remove(e, t) {
            if (!P.has(e)) return;
            const n = P.get(e);
            n.delete(t), 0 === n.size && P.delete(e)
        }
    };
    class H {
        constructor(e) {
            (e = r(e)) && (this._element = e, I.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            I.remove(this._element, this.constructor.DATA_KEY), D.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((e => {
                this[e] = null
            }))
        }
        _queueCallback(e, t, n = !0) {
            y(e, t, n)
        }
        static getInstance(e) {
            return I.get(r(e), this.DATA_KEY)
        }
        static getOrCreateInstance(e, t = {}) {
            return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
        }
        static get VERSION() {
            return "5.1.0"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return "bs." + this.NAME
        }
        static get EVENT_KEY() {
            return "." + this.DATA_KEY
        }
    }
    const R = (e, t = "hide") => {
        const i = "click.dismiss" + e.EVENT_KEY,
            o = e.NAME;
        D.on(document, i, `[data-bs-dismiss="${o}"]`, (function (i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
            const r = n(this) || this.closest("." + o);
            e.getOrCreateInstance(r)[t]()
        }))
    };
    class q extends H {
        static get NAME() {
            return "alert"
        }
        close() {
            if (D.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const e = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, e)
        }
        _destroyElement() {
            this._element.remove(), D.trigger(this._element, "closed.bs.alert"), this.dispose()
        }
        static jQueryInterface(e) {
            return this.each((function () {
                const t = q.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }))
        }
    }
    R(q, "close"), g(q);
    class W extends H {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(e) {
            return this.each((function () {
                const t = W.getOrCreateInstance(this);
                "toggle" === e && t[e]()
            }))
        }
    }

    function z(e) {
        return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e)
    }

    function F(e) {
        return e.replace(/[A-Z]/g, (e => "-" + e.toLowerCase()))
    }
    D.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (e => {
        e.preventDefault();
        const t = e.target.closest('[data-bs-toggle="button"]');
        W.getOrCreateInstance(t).toggle()
    })), g(W);
    const B = {
            setDataAttribute(e, t, n) {
                e.setAttribute("data-bs-" + F(t), n)
            },
            removeDataAttribute(e, t) {
                e.removeAttribute("data-bs-" + F(t))
            },
            getDataAttributes(e) {
                if (!e) return {};
                const t = {};
                return Object.keys(e.dataset).filter((e => e.startsWith("bs"))).forEach((n => {
                    let i = n.replace(/^bs/, "");
                    i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = z(e.dataset[n])
                })), t
            },
            getDataAttribute: (e, t) => z(e.getAttribute("data-bs-" + F(t))),
            offset(e) {
                const t = e.getBoundingClientRect();
                return {
                    top: t.top + window.pageYOffset,
                    left: t.left + window.pageXOffset
                }
            },
            position: e => ({
                top: e.offsetTop,
                left: e.offsetLeft
            })
        },
        U = {
            find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
            findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
            children: (e, t) => [].concat(...e.children).filter((e => e.matches(t))),
            parents(e, t) {
                const n = [];
                let i = e.parentNode;
                for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(t) && n.push(i), i = i.parentNode;
                return n
            },
            prev(e, t) {
                let n = e.previousElementSibling;
                for (; n;) {
                    if (n.matches(t)) return [n];
                    n = n.previousElementSibling
                }
                return []
            },
            next(e, t) {
                let n = e.nextElementSibling;
                for (; n;) {
                    if (n.matches(t)) return [n];
                    n = n.nextElementSibling
                }
                return []
            },
            focusableChildren(e) {
                const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e => e + ':not([tabindex^="-"])')).join(", ");
                return this.find(t, e).filter((e => !l(e) && a(e)))
            }
        },
        X = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        Y = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        V = "next",
        $ = "prev",
        K = "left",
        Q = "right",
        G = {
            ArrowLeft: Q,
            ArrowRight: K
        };
    class J extends H {
        constructor(e, t) {
            super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._indicatorsElement = U.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
        }
        static get Default() {
            return X
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(V)
        }
        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next()
        }
        prev() {
            this._slide($)
        }
        pause(e) {
            e || (this._isPaused = !0), U.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (i(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }
        cycle(e) {
            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(e) {
            this._activeElement = U.findOne(".active.carousel-item", this._element);
            const t = this._getItemIndex(this._activeElement);
            if (e > this._items.length - 1 || e < 0) return;
            if (this._isSliding) return void D.one(this._element, "slid.bs.carousel", (() => this.to(e)));
            if (t === e) return this.pause(), void this.cycle();
            const n = e > t ? V : $;
            this._slide(n, this._items[e])
        }
        _getConfig(e) {
            return e = {
                ...X,
                ...B.getDataAttributes(this._element),
                ..."object" == typeof e ? e : {}
            }, s("carousel", e, Y), e
        }
        _handleSwipe() {
            const e = Math.abs(this.touchDeltaX);
            if (e <= 40) return;
            const t = e / this.touchDeltaX;
            this.touchDeltaX = 0, t && this._slide(t > 0 ? Q : K)
        }
        _addEventListeners() {
            this._config.keyboard && D.on(this._element, "keydown.bs.carousel", (e => this._keydown(e))), "hover" === this._config.pause && (D.on(this._element, "mouseenter.bs.carousel", (e => this.pause(e))), D.on(this._element, "mouseleave.bs.carousel", (e => this.cycle(e)))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const e = e => {
                    !this._pointerEvent || "pen" !== e.pointerType && "touch" !== e.pointerType ? this._pointerEvent || (this.touchStartX = e.touches[0].clientX) : this.touchStartX = e.clientX
                },
                t = e => {
                    this.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this.touchStartX
                },
                n = e => {
                    !this._pointerEvent || "pen" !== e.pointerType && "touch" !== e.pointerType || (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((e => this.cycle(e)), 500 + this._config.interval))
                };
            U.find(".carousel-item img", this._element).forEach((e => {
                D.on(e, "dragstart.bs.carousel", (e => e.preventDefault()))
            })), this._pointerEvent ? (D.on(this._element, "pointerdown.bs.carousel", (t => e(t))), D.on(this._element, "pointerup.bs.carousel", (e => n(e))), this._element.classList.add("pointer-event")) : (D.on(this._element, "touchstart.bs.carousel", (t => e(t))), D.on(this._element, "touchmove.bs.carousel", (e => t(e))), D.on(this._element, "touchend.bs.carousel", (e => n(e))))
        }
        _keydown(e) {
            if (/input|textarea/i.test(e.target.tagName)) return;
            const t = G[e.key];
            t && (e.preventDefault(), this._slide(t))
        }
        _getItemIndex(e) {
            return this._items = e && e.parentNode ? U.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e)
        }
        _getItemByOrder(e, t) {
            const n = e === V;
            return v(this._items, t, n, this._config.wrap)
        }
        _triggerSlideEvent(e, t) {
            const n = this._getItemIndex(e),
                i = this._getItemIndex(U.findOne(".active.carousel-item", this._element));
            return D.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: e,
                direction: t,
                from: i,
                to: n
            })
        }
        _setActiveIndicatorElement(e) {
            if (this._indicatorsElement) {
                const t = U.findOne(".active", this._indicatorsElement);
                t.classList.remove("active"), t.removeAttribute("aria-current");
                const n = U.find("[data-bs-target]", this._indicatorsElement);
                for (let t = 0; t < n.length; t++)
                    if (Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                        n[t].classList.add("active"), n[t].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const e = this._activeElement || U.findOne(".active.carousel-item", this._element);
            if (!e) return;
            const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(e, t) {
            const n = this._directionToOrder(e),
                i = U.findOne(".active.carousel-item", this._element),
                o = this._getItemIndex(i),
                r = t || this._getItemByOrder(n, i),
                s = this._getItemIndex(r),
                a = Boolean(this._interval),
                l = n === V,
                c = l ? "carousel-item-start" : "carousel-item-end",
                u = l ? "carousel-item-next" : "carousel-item-prev",
                h = this._orderToDirection(n);
            if (r && r.classList.contains("active")) return void(this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(r, h).defaultPrevented) return;
            if (!i || !r) return;
            this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
            const f = () => {
                D.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: r,
                    direction: h,
                    from: o,
                    to: s
                })
            };
            if (this._element.classList.contains("slide")) {
                r.classList.add(u), p(r), i.classList.add(c), r.classList.add(c);
                const e = () => {
                    r.classList.remove(c, u), r.classList.add("active"), i.classList.remove("active", u, c), this._isSliding = !1, setTimeout(f, 0)
                };
                this._queueCallback(e, i, !0)
            } else i.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, f();
            a && this.cycle()
        }
        _directionToOrder(e) {
            return [Q, K].includes(e) ? d() ? e === K ? $ : V : e === K ? V : $ : e
        }
        _orderToDirection(e) {
            return [V, $].includes(e) ? d() ? e === $ ? K : Q : e === $ ? Q : K : e
        }
        static carouselInterface(e, t) {
            const n = J.getOrCreateInstance(e, t);
            let {
                _config: i
            } = n;
            "object" == typeof t && (i = {
                ...i,
                ...t
            });
            const o = "string" == typeof t ? t : i.slide;
            if ("number" == typeof t) n.to(t);
            else if ("string" == typeof o) {
                if (void 0 === n[o]) throw new TypeError(`No method named "${o}"`);
                n[o]()
            } else i.interval && i.ride && (n.pause(), n.cycle())
        }
        static jQueryInterface(e) {
            return this.each((function () {
                J.carouselInterface(this, e)
            }))
        }
        static dataApiClickHandler(e) {
            const t = n(this);
            if (!t || !t.classList.contains("carousel")) return;
            const i = {
                    ...B.getDataAttributes(t),
                    ...B.getDataAttributes(this)
                },
                o = this.getAttribute("data-bs-slide-to");
            o && (i.interval = !1), J.carouselInterface(t, i), o && J.getInstance(t).to(o), e.preventDefault()
        }
    }
    D.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", J.dataApiClickHandler), D.on(window, "load.bs.carousel.data-api", (() => {
        const e = U.find('[data-bs-ride="carousel"]');
        for (let t = 0, n = e.length; t < n; t++) J.carouselInterface(e[t], J.getInstance(e[t]))
    })), g(J);
    const Z = {
            toggle: !0,
            parent: null
        },
        ee = {
            toggle: "boolean",
            parent: "(null|element)"
        };
    class te extends H {
        constructor(e, n) {
            super(e), this._isTransitioning = !1, this._config = this._getConfig(n), this._triggerArray = [];
            const i = U.find('[data-bs-toggle="collapse"]');
            for (let e = 0, n = i.length; e < n; e++) {
                const n = i[e],
                    o = t(n),
                    r = U.find(o).filter((e => e === this._element));
                null !== o && r.length && (this._selector = o, this._triggerArray.push(n))
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }
        static get Default() {
            return Z
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let e, t = [];
            if (this._config.parent) {
                const e = U.find(".collapse .collapse", this._config.parent);
                t = U.find(".show, .collapsing", this._config.parent).filter((t => !e.includes(t)))
            }
            const n = U.findOne(this._selector);
            if (t.length) {
                const i = t.find((e => n !== e));
                if (e = i ? te.getInstance(i) : null, e && e._isTransitioning) return
            }
            if (D.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            t.forEach((t => {
                n !== t && te.getOrCreateInstance(t, {
                    toggle: !1
                }).hide(), e || I.set(t, "bs.collapse", null)
            }));
            const i = this._getDimension();
            this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const o = "scroll" + (i[0].toUpperCase() + i.slice(1));
            this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[i] = "", D.trigger(this._element, "shown.bs.collapse")
            }), this._element, !0), this._element.style[i] = this._element[o] + "px"
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (D.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const e = this._getDimension();
            this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", p(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
            const t = this._triggerArray.length;
            for (let e = 0; e < t; e++) {
                const t = this._triggerArray[e],
                    i = n(t);
                i && !this._isShown(i) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), D.trigger(this._element, "hidden.bs.collapse")
            }), this._element, !0)
        }
        _isShown(e = this._element) {
            return e.classList.contains("show")
        }
        _getConfig(e) {
            return (e = {
                ...Z,
                ...B.getDataAttributes(this._element),
                ...e
            }).toggle = Boolean(e.toggle), e.parent = r(e.parent), s("collapse", e, ee), e
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const e = U.find(".collapse .collapse", this._config.parent);
            U.find('[data-bs-toggle="collapse"]', this._config.parent).filter((t => !e.includes(t))).forEach((e => {
                const t = n(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
            }))
        }
        _addAriaAndCollapsedClass(e, t) {
            e.length && e.forEach((e => {
                t ? e.classList.remove("collapsed") : e.classList.add("collapsed"), e.setAttribute("aria-expanded", t)
            }))
        }
        static jQueryInterface(e) {
            return this.each((function () {
                const t = {};
                "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
                const n = te.getOrCreateInstance(this, t);
                if ("string" == typeof e) {
                    if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                    n[e]()
                }
            }))
        }
    }
    D.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function (e) {
        ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
        const n = t(this);
        U.find(n).forEach((e => {
            te.getOrCreateInstance(e, {
                toggle: !1
            }).toggle()
        }))
    })), g(te);
    var ne = "top",
        ie = "bottom",
        oe = "right",
        re = "left",
        se = [ne, ie, oe, re],
        ae = se.reduce((function (e, t) {
            return e.concat([t + "-start", t + "-end"])
        }), []),
        le = [].concat(se, ["auto"]).reduce((function (e, t) {
            return e.concat([t, t + "-start", t + "-end"])
        }), []),
        ce = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

    function ue(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }

    function pe(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window
        }
        return e
    }

    function he(e) {
        return e instanceof pe(e).Element || e instanceof Element
    }

    function fe(e) {
        return e instanceof pe(e).HTMLElement || e instanceof HTMLElement
    }

    function de(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof pe(e).ShadowRoot || e instanceof ShadowRoot)
    }
    var ge = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
            var t = e.state;
            Object.keys(t.elements).forEach((function (e) {
                var n = t.styles[e] || {},
                    i = t.attributes[e] || {},
                    o = t.elements[e];
                fe(o) && ue(o) && (Object.assign(o.style, n), Object.keys(i).forEach((function (e) {
                    var t = i[e];
                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                })))
            }))
        },
        effect: function (e) {
            var t = e.state,
                n = {
                    popper: {
                        position: t.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                function () {
                    Object.keys(t.elements).forEach((function (e) {
                        var i = t.elements[e],
                            o = t.attributes[e] || {},
                            r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) {
                                return e[t] = "", e
                            }), {});
                        fe(i) && ue(i) && (Object.assign(i.style, r), Object.keys(o).forEach((function (e) {
                            i.removeAttribute(e)
                        })))
                    }))
                }
        },
        requires: ["computeStyles"]
    };

    function me(e) {
        return e.split("-")[0]
    }
    var ye = Math.round;

    function ve(e, t) {
        void 0 === t && (t = !1);
        var n = e.getBoundingClientRect(),
            i = 1,
            o = 1;
        return fe(e) && t && (i = n.width / e.offsetWidth || 1, o = n.height / e.offsetHeight || 1), {
            width: ye(n.width / i),
            height: ye(n.height / o),
            top: ye(n.top / o),
            right: ye(n.right / i),
            bottom: ye(n.bottom / o),
            left: ye(n.left / i),
            x: ye(n.left / i),
            y: ye(n.top / o)
        }
    }

    function be(e) {
        var t = ve(e),
            n = e.offsetWidth,
            i = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: i
        }
    }

    function xe(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && de(n)) {
            var i = t;
            do {
                if (i && e.isSameNode(i)) return !0;
                i = i.parentNode || i.host
            } while (i)
        }
        return !1
    }

    function we(e) {
        return pe(e).getComputedStyle(e)
    }

    function _e(e) {
        return ["table", "td", "th"].indexOf(ue(e)) >= 0
    }

    function ke(e) {
        return ((he(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }

    function Ee(e) {
        return "html" === ue(e) ? e : e.assignedSlot || e.parentNode || (de(e) ? e.host : null) || ke(e)
    }

    function Te(e) {
        return fe(e) && "fixed" !== we(e).position ? e.offsetParent : null
    }

    function Se(e) {
        for (var t = pe(e), n = Te(e); n && _e(n) && "static" === we(n).position;) n = Te(n);
        return n && ("html" === ue(n) || "body" === ue(n) && "static" === we(n).position) ? t : n || function (e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && fe(e) && "fixed" === we(e).position) return null;
            for (var n = Ee(e); fe(n) && ["html", "body"].indexOf(ue(n)) < 0;) {
                var i = we(n);
                if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter) return n;
                n = n.parentNode
            }
            return null
        }(e) || t
    }

    function Ce(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
    }
    var Ae = Math.max,
        Oe = Math.min,
        Le = Math.round;

    function Me(e, t, n) {
        return Ae(e, Oe(t, n))
    }

    function je(e) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e)
    }

    function Ne(e, t) {
        return t.reduce((function (t, n) {
            return t[n] = e, t
        }), {})
    }
    var De = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t, n = e.state,
                    i = e.name,
                    o = e.options,
                    r = n.elements.arrow,
                    s = n.modifiersData.popperOffsets,
                    a = me(n.placement),
                    l = Ce(a),
                    c = [re, oe].indexOf(a) >= 0 ? "height" : "width";
                if (r && s) {
                    var u = function (e, t) {
                            return je("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                                placement: t.placement
                            })) : e) ? e : Ne(e, se))
                        }(o.padding, n),
                        p = be(r),
                        h = "y" === l ? ne : re,
                        f = "y" === l ? ie : oe,
                        d = n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c],
                        g = s[l] - n.rects.reference[l],
                        m = Se(r),
                        y = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
                        v = d / 2 - g / 2,
                        b = u[h],
                        x = y - p[c] - u[f],
                        w = y / 2 - p[c] / 2 + v,
                        _ = Me(b, w, x),
                        k = l;
                    n.modifiersData[i] = ((t = {})[k] = _, t.centerOffset = _ - w, t)
                }
            },
            effect: function (e) {
                var t = e.state,
                    n = e.options.element,
                    i = void 0 === n ? "[data-popper-arrow]" : n;
                null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && xe(t.elements.popper, i) && (t.elements.arrow = i)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        },
        Pe = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };

    function Ie(e) {
        var t, n = e.popper,
            i = e.popperRect,
            o = e.placement,
            r = e.offsets,
            s = e.position,
            a = e.gpuAcceleration,
            l = e.adaptive,
            c = e.roundOffsets,
            u = !0 === c ? function (e) {
                var t = e.x,
                    n = e.y,
                    i = window.devicePixelRatio || 1;
                return {
                    x: Le(Le(t * i) / i) || 0,
                    y: Le(Le(n * i) / i) || 0
                }
            }(r) : "function" == typeof c ? c(r) : r,
            p = u.x,
            h = void 0 === p ? 0 : p,
            f = u.y,
            d = void 0 === f ? 0 : f,
            g = r.hasOwnProperty("x"),
            m = r.hasOwnProperty("y"),
            y = re,
            v = ne,
            b = window;
        if (l) {
            var x = Se(n),
                w = "clientHeight",
                _ = "clientWidth";
            x === pe(n) && "static" !== we(x = ke(n)).position && (w = "scrollHeight", _ = "scrollWidth"), x = x, o === ne && (v = ie, d -= x[w] - i.height, d *= a ? 1 : -1), o === re && (y = oe, h -= x[_] - i.width, h *= a ? 1 : -1)
        }
        var k, E = Object.assign({
            position: s
        }, l && Pe);
        return a ? Object.assign({}, E, ((k = {})[v] = m ? "0" : "", k[y] = g ? "0" : "", k.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + h + "px, " + d + "px)" : "translate3d(" + h + "px, " + d + "px, 0)", k)) : Object.assign({}, E, ((t = {})[v] = m ? d + "px" : "", t[y] = g ? h + "px" : "", t.transform = "", t))
    }
    var He = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
                var t = e.state,
                    n = e.options,
                    i = n.gpuAcceleration,
                    o = void 0 === i || i,
                    r = n.adaptive,
                    s = void 0 === r || r,
                    a = n.roundOffsets,
                    l = void 0 === a || a,
                    c = {
                        placement: me(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: o
                    };
                null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Ie(Object.assign({}, c, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: s,
                    roundOffsets: l
                })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ie(Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l
                })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-placement": t.placement
                })
            },
            data: {}
        },
        Re = {
            passive: !0
        },
        qe = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (e) {
                var t = e.state,
                    n = e.instance,
                    i = e.options,
                    o = i.scroll,
                    r = void 0 === o || o,
                    s = i.resize,
                    a = void 0 === s || s,
                    l = pe(t.elements.popper),
                    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return r && c.forEach((function (e) {
                        e.addEventListener("scroll", n.update, Re)
                    })), a && l.addEventListener("resize", n.update, Re),
                    function () {
                        r && c.forEach((function (e) {
                            e.removeEventListener("scroll", n.update, Re)
                        })), a && l.removeEventListener("resize", n.update, Re)
                    }
            },
            data: {}
        },
        We = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

    function ze(e) {
        return e.replace(/left|right|bottom|top/g, (function (e) {
            return We[e]
        }))
    }
    var Fe = {
        start: "end",
        end: "start"
    };

    function Be(e) {
        return e.replace(/start|end/g, (function (e) {
            return Fe[e]
        }))
    }

    function Ue(e) {
        var t = pe(e);
        return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
        }
    }

    function Xe(e) {
        return ve(ke(e)).left + Ue(e).scrollLeft
    }

    function Ye(e) {
        var t = we(e),
            n = t.overflow,
            i = t.overflowX,
            o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + i)
    }

    function Ve(e, t) {
        var n;
        void 0 === t && (t = []);
        var i = function e(t) {
                return ["html", "body", "#document"].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : fe(t) && Ye(t) ? t : e(Ee(t))
            }(e),
            o = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
            r = pe(i),
            s = o ? [r].concat(r.visualViewport || [], Ye(i) ? i : []) : i,
            a = t.concat(s);
        return o ? a : a.concat(Ve(Ee(s)))
    }

    function $e(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }

    function Ke(e, t) {
        return "viewport" === t ? $e(function (e) {
            var t = pe(e),
                n = ke(e),
                i = t.visualViewport,
                o = n.clientWidth,
                r = n.clientHeight,
                s = 0,
                a = 0;
            return i && (o = i.width, r = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = i.offsetLeft, a = i.offsetTop)), {
                width: o,
                height: r,
                x: s + Xe(e),
                y: a
            }
        }(e)) : fe(t) ? function (e) {
            var t = ve(e);
            return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
        }(t) : $e(function (e) {
            var t, n = ke(e),
                i = Ue(e),
                o = null == (t = e.ownerDocument) ? void 0 : t.body,
                r = Ae(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                s = Ae(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                a = -i.scrollLeft + Xe(e),
                l = -i.scrollTop;
            return "rtl" === we(o || n).direction && (a += Ae(n.clientWidth, o ? o.clientWidth : 0) - r), {
                width: r,
                height: s,
                x: a,
                y: l
            }
        }(ke(e)))
    }

    function Qe(e) {
        return e.split("-")[1]
    }

    function Ge(e) {
        var t, n = e.reference,
            i = e.element,
            o = e.placement,
            r = o ? me(o) : null,
            s = o ? Qe(o) : null,
            a = n.x + n.width / 2 - i.width / 2,
            l = n.y + n.height / 2 - i.height / 2;
        switch (r) {
            case ne:
                t = {
                    x: a,
                    y: n.y - i.height
                };
                break;
            case ie:
                t = {
                    x: a,
                    y: n.y + n.height
                };
                break;
            case oe:
                t = {
                    x: n.x + n.width,
                    y: l
                };
                break;
            case re:
                t = {
                    x: n.x - i.width,
                    y: l
                };
                break;
            default:
                t = {
                    x: n.x,
                    y: n.y
                }
        }
        var c = r ? Ce(r) : null;
        if (null != c) {
            var u = "y" === c ? "height" : "width";
            switch (s) {
                case "start":
                    t[c] = t[c] - (n[u] / 2 - i[u] / 2);
                    break;
                case "end":
                    t[c] = t[c] + (n[u] / 2 - i[u] / 2)
            }
        }
        return t
    }

    function Je(e, t) {
        void 0 === t && (t = {});
        var n = t,
            i = n.placement,
            o = void 0 === i ? e.placement : i,
            r = n.boundary,
            s = void 0 === r ? "clippingParents" : r,
            a = n.rootBoundary,
            l = void 0 === a ? "viewport" : a,
            c = n.elementContext,
            u = void 0 === c ? "popper" : c,
            p = n.altBoundary,
            h = void 0 !== p && p,
            f = n.padding,
            d = void 0 === f ? 0 : f,
            g = je("number" != typeof d ? d : Ne(d, se)),
            m = "popper" === u ? "reference" : "popper",
            y = e.elements.reference,
            v = e.rects.popper,
            b = e.elements[h ? m : u],
            x = function (e, t, n) {
                var i = "clippingParents" === t ? function (e) {
                        var t = Ve(Ee(e)),
                            n = ["absolute", "fixed"].indexOf(we(e).position) >= 0 && fe(e) ? Se(e) : e;
                        return he(n) ? t.filter((function (e) {
                            return he(e) && xe(e, n) && "body" !== ue(e)
                        })) : []
                    }(e) : [].concat(t),
                    o = [].concat(i, [n]),
                    r = o[0],
                    s = o.reduce((function (t, n) {
                        var i = Ke(e, n);
                        return t.top = Ae(i.top, t.top), t.right = Oe(i.right, t.right), t.bottom = Oe(i.bottom, t.bottom), t.left = Ae(i.left, t.left), t
                    }), Ke(e, r));
                return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
            }(he(b) ? b : b.contextElement || ke(e.elements.popper), s, l),
            w = ve(y),
            _ = Ge({
                reference: w,
                element: v,
                strategy: "absolute",
                placement: o
            }),
            k = $e(Object.assign({}, v, _)),
            E = "popper" === u ? k : w,
            T = {
                top: x.top - E.top + g.top,
                bottom: E.bottom - x.bottom + g.bottom,
                left: x.left - E.left + g.left,
                right: E.right - x.right + g.right
            },
            S = e.modifiersData.offset;
        if ("popper" === u && S) {
            var C = S[o];
            Object.keys(T).forEach((function (e) {
                var t = [oe, ie].indexOf(e) >= 0 ? 1 : -1,
                    n = [ne, ie].indexOf(e) >= 0 ? "y" : "x";
                T[e] += C[n] * t
            }))
        }
        return T
    }
    var Ze = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
            var t = e.state,
                n = e.options,
                i = e.name;
            if (!t.modifiersData[i]._skip) {
                for (var o = n.mainAxis, r = void 0 === o || o, s = n.altAxis, a = void 0 === s || s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, p = n.rootBoundary, h = n.altBoundary, f = n.flipVariations, d = void 0 === f || f, g = n.allowedAutoPlacements, m = t.options.placement, y = me(m), v = l || (y !== m && d ? function (e) {
                        if ("auto" === me(e)) return [];
                        var t = ze(e);
                        return [Be(e), t, Be(t)]
                    }(m) : [ze(m)]), b = [m].concat(v).reduce((function (e, n) {
                        return e.concat("auto" === me(n) ? function (e, t) {
                            void 0 === t && (t = {});
                            var n = t,
                                i = n.placement,
                                o = n.boundary,
                                r = n.rootBoundary,
                                s = n.padding,
                                a = n.flipVariations,
                                l = n.allowedAutoPlacements,
                                c = void 0 === l ? le : l,
                                u = Qe(i),
                                p = u ? a ? ae : ae.filter((function (e) {
                                    return Qe(e) === u
                                })) : se,
                                h = p.filter((function (e) {
                                    return c.indexOf(e) >= 0
                                }));
                            0 === h.length && (h = p);
                            var f = h.reduce((function (t, n) {
                                return t[n] = Je(e, {
                                    placement: n,
                                    boundary: o,
                                    rootBoundary: r,
                                    padding: s
                                })[me(n)], t
                            }), {});
                            return Object.keys(f).sort((function (e, t) {
                                return f[e] - f[t]
                            }))
                        }(t, {
                            placement: n,
                            boundary: u,
                            rootBoundary: p,
                            padding: c,
                            flipVariations: d,
                            allowedAutoPlacements: g
                        }) : n)
                    }), []), x = t.rects.reference, w = t.rects.popper, _ = new Map, k = !0, E = b[0], T = 0; T < b.length; T++) {
                    var S = b[T],
                        C = me(S),
                        A = "start" === Qe(S),
                        O = [ne, ie].indexOf(C) >= 0,
                        L = O ? "width" : "height",
                        M = Je(t, {
                            placement: S,
                            boundary: u,
                            rootBoundary: p,
                            altBoundary: h,
                            padding: c
                        }),
                        j = O ? A ? oe : re : A ? ie : ne;
                    x[L] > w[L] && (j = ze(j));
                    var N = ze(j),
                        D = [];
                    if (r && D.push(M[C] <= 0), a && D.push(M[j] <= 0, M[N] <= 0), D.every((function (e) {
                            return e
                        }))) {
                        E = S, k = !1;
                        break
                    }
                    _.set(S, D)
                }
                if (k)
                    for (var P = function (e) {
                            var t = b.find((function (t) {
                                var n = _.get(t);
                                if (n) return n.slice(0, e).every((function (e) {
                                    return e
                                }))
                            }));
                            if (t) return E = t, "break"
                        }, I = d ? 3 : 1; I > 0 && "break" !== P(I); I--);
                t.placement !== E && (t.modifiersData[i]._skip = !0, t.placement = E, t.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function et(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }

    function tt(e) {
        return [ne, oe, ie, re].some((function (t) {
            return e[t] >= 0
        }))
    }
    var nt = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
                var t = e.state,
                    n = e.name,
                    i = t.rects.reference,
                    o = t.rects.popper,
                    r = t.modifiersData.preventOverflow,
                    s = Je(t, {
                        elementContext: "reference"
                    }),
                    a = Je(t, {
                        altBoundary: !0
                    }),
                    l = et(s, i),
                    c = et(a, o, r),
                    u = tt(l),
                    p = tt(c);
                t.modifiersData[n] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: u,
                    hasPopperEscaped: p
                }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-reference-hidden": u,
                    "data-popper-escaped": p
                })
            }
        },
        it = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
                var t = e.state,
                    n = e.options,
                    i = e.name,
                    o = n.offset,
                    r = void 0 === o ? [0, 0] : o,
                    s = le.reduce((function (e, n) {
                        return e[n] = function (e, t, n) {
                            var i = me(e),
                                o = [re, ne].indexOf(i) >= 0 ? -1 : 1,
                                r = "function" == typeof n ? n(Object.assign({}, t, {
                                    placement: e
                                })) : n,
                                s = r[0],
                                a = r[1];
                            return s = s || 0, a = (a || 0) * o, [re, oe].indexOf(i) >= 0 ? {
                                x: a,
                                y: s
                            } : {
                                x: s,
                                y: a
                            }
                        }(n, t.rects, r), e
                    }), {}),
                    a = s[t.placement],
                    l = a.x,
                    c = a.y;
                null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[i] = s
            }
        },
        ot = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
                var t = e.state,
                    n = e.name;
                t.modifiersData[n] = Ge({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement
                })
            },
            data: {}
        },
        rt = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t = e.state,
                    n = e.options,
                    i = e.name,
                    o = n.mainAxis,
                    r = void 0 === o || o,
                    s = n.altAxis,
                    a = void 0 !== s && s,
                    l = n.boundary,
                    c = n.rootBoundary,
                    u = n.altBoundary,
                    p = n.padding,
                    h = n.tether,
                    f = void 0 === h || h,
                    d = n.tetherOffset,
                    g = void 0 === d ? 0 : d,
                    m = Je(t, {
                        boundary: l,
                        rootBoundary: c,
                        padding: p,
                        altBoundary: u
                    }),
                    y = me(t.placement),
                    v = Qe(t.placement),
                    b = !v,
                    x = Ce(y),
                    w = "x" === x ? "y" : "x",
                    _ = t.modifiersData.popperOffsets,
                    k = t.rects.reference,
                    E = t.rects.popper,
                    T = "function" == typeof g ? g(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : g,
                    S = {
                        x: 0,
                        y: 0
                    };
                if (_) {
                    if (r || a) {
                        var C = "y" === x ? ne : re,
                            A = "y" === x ? ie : oe,
                            O = "y" === x ? "height" : "width",
                            L = _[x],
                            M = _[x] + m[C],
                            j = _[x] - m[A],
                            N = f ? -E[O] / 2 : 0,
                            D = "start" === v ? k[O] : E[O],
                            P = "start" === v ? -E[O] : -k[O],
                            I = t.elements.arrow,
                            H = f && I ? be(I) : {
                                width: 0,
                                height: 0
                            },
                            R = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            },
                            q = R[C],
                            W = R[A],
                            z = Me(0, k[O], H[O]),
                            F = b ? k[O] / 2 - N - z - q - T : D - z - q - T,
                            B = b ? -k[O] / 2 + N + z + W + T : P + z + W + T,
                            U = t.elements.arrow && Se(t.elements.arrow),
                            X = U ? "y" === x ? U.clientTop || 0 : U.clientLeft || 0 : 0,
                            Y = t.modifiersData.offset ? t.modifiersData.offset[t.placement][x] : 0,
                            V = _[x] + F - Y - X,
                            $ = _[x] + B - Y;
                        if (r) {
                            var K = Me(f ? Oe(M, V) : M, L, f ? Ae(j, $) : j);
                            _[x] = K, S[x] = K - L
                        }
                        if (a) {
                            var Q = "x" === x ? ne : re,
                                G = "x" === x ? ie : oe,
                                J = _[w],
                                Z = J + m[Q],
                                ee = J - m[G],
                                te = Me(f ? Oe(Z, V) : Z, J, f ? Ae(ee, $) : ee);
                            _[w] = te, S[w] = te - J
                        }
                    }
                    t.modifiersData[i] = S
                }
            },
            requiresIfExists: ["offset"]
        };

    function st(e, t, n) {
        void 0 === n && (n = !1);
        var i, o, r = fe(t),
            s = fe(t) && function (e) {
                var t = e.getBoundingClientRect(),
                    n = t.width / e.offsetWidth || 1,
                    i = t.height / e.offsetHeight || 1;
                return 1 !== n || 1 !== i
            }(t),
            a = ke(t),
            l = ve(e, s),
            c = {
                scrollLeft: 0,
                scrollTop: 0
            },
            u = {
                x: 0,
                y: 0
            };
        return (r || !r && !n) && (("body" !== ue(t) || Ye(a)) && (c = (i = t) !== pe(i) && fe(i) ? {
            scrollLeft: (o = i).scrollLeft,
            scrollTop: o.scrollTop
        } : Ue(i)), fe(t) ? ((u = ve(t, !0)).x += t.clientLeft, u.y += t.clientTop) : a && (u.x = Xe(a))), {
            x: l.left + c.scrollLeft - u.x,
            y: l.top + c.scrollTop - u.y,
            width: l.width,
            height: l.height
        }
    }
    var at = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function lt() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some((function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        }))
    }

    function ct(e) {
        void 0 === e && (e = {});
        var t = e,
            n = t.defaultModifiers,
            i = void 0 === n ? [] : n,
            o = t.defaultOptions,
            r = void 0 === o ? at : o;
        return function (e, t, n) {
            void 0 === n && (n = r);
            var o, s, a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, at, r),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                c = !1,
                u = {
                    state: a,
                    setOptions: function (n) {
                        p(), a.options = Object.assign({}, r, a.options, n), a.scrollParents = {
                            reference: he(e) ? Ve(e) : e.contextElement ? Ve(e.contextElement) : [],
                            popper: Ve(t)
                        };
                        var o, s, c = function (e) {
                            var t = function (e) {
                                var t = new Map,
                                    n = new Set,
                                    i = [];
                                return e.forEach((function (e) {
                                    t.set(e.name, e)
                                })), e.forEach((function (e) {
                                    n.has(e.name) || function e(o) {
                                        n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function (i) {
                                            if (!n.has(i)) {
                                                var o = t.get(i);
                                                o && e(o)
                                            }
                                        })), i.push(o)
                                    }(e)
                                })), i
                            }(e);
                            return ce.reduce((function (e, n) {
                                return e.concat(t.filter((function (e) {
                                    return e.phase === n
                                })))
                            }), [])
                        }((o = [].concat(i, a.options.modifiers), s = o.reduce((function (e, t) {
                            var n = e[t.name];
                            return e[t.name] = n ? Object.assign({}, n, t, {
                                options: Object.assign({}, n.options, t.options),
                                data: Object.assign({}, n.data, t.data)
                            }) : t, e
                        }), {}), Object.keys(s).map((function (e) {
                            return s[e]
                        }))));
                        return a.orderedModifiers = c.filter((function (e) {
                            return e.enabled
                        })), a.orderedModifiers.forEach((function (e) {
                            var t = e.name,
                                n = e.options,
                                i = void 0 === n ? {} : n,
                                o = e.effect;
                            if ("function" == typeof o) {
                                var r = o({
                                    state: a,
                                    name: t,
                                    instance: u,
                                    options: i
                                });
                                l.push(r || function () {})
                            }
                        })), u.update()
                    },
                    forceUpdate: function () {
                        if (!c) {
                            var e = a.elements,
                                t = e.reference,
                                n = e.popper;
                            if (lt(t, n)) {
                                a.rects = {
                                    reference: st(t, Se(n), "fixed" === a.options.strategy),
                                    popper: be(n)
                                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (e) {
                                    return a.modifiersData[e.name] = Object.assign({}, e.data)
                                }));
                                for (var i = 0; i < a.orderedModifiers.length; i++)
                                    if (!0 !== a.reset) {
                                        var o = a.orderedModifiers[i],
                                            r = o.fn,
                                            s = o.options,
                                            l = void 0 === s ? {} : s,
                                            p = o.name;
                                        "function" == typeof r && (a = r({
                                            state: a,
                                            options: l,
                                            name: p,
                                            instance: u
                                        }) || a)
                                    } else a.reset = !1, i = -1
                            }
                        }
                    },
                    update: (o = function () {
                        return new Promise((function (e) {
                            u.forceUpdate(), e(a)
                        }))
                    }, function () {
                        return s || (s = new Promise((function (e) {
                            Promise.resolve().then((function () {
                                s = void 0, e(o())
                            }))
                        }))), s
                    }),
                    destroy: function () {
                        p(), c = !0
                    }
                };
            if (!lt(e, t)) return u;

            function p() {
                l.forEach((function (e) {
                    return e()
                })), l = []
            }
            return u.setOptions(n).then((function (e) {
                !c && n.onFirstUpdate && n.onFirstUpdate(e)
            })), u
        }
    }
    var ut = ct(),
        pt = ct({
            defaultModifiers: [qe, ot, He, ge]
        }),
        ht = ct({
            defaultModifiers: [qe, ot, He, ge, it, Ze, rt, De, nt]
        }),
        ft = Object.freeze({
            __proto__: null,
            popperGenerator: ct,
            detectOverflow: Je,
            createPopperBase: ut,
            createPopper: ht,
            createPopperLite: pt,
            top: ne,
            bottom: ie,
            right: oe,
            left: re,
            auto: "auto",
            basePlacements: se,
            start: "start",
            end: "end",
            clippingParents: "clippingParents",
            viewport: "viewport",
            popper: "popper",
            reference: "reference",
            variationPlacements: ae,
            placements: le,
            beforeRead: "beforeRead",
            read: "read",
            afterRead: "afterRead",
            beforeMain: "beforeMain",
            main: "main",
            afterMain: "afterMain",
            beforeWrite: "beforeWrite",
            write: "write",
            afterWrite: "afterWrite",
            modifierPhases: ce,
            applyStyles: ge,
            arrow: De,
            computeStyles: He,
            eventListeners: qe,
            flip: Ze,
            hide: nt,
            offset: it,
            popperOffsets: ot,
            preventOverflow: rt
        });
    const dt = new RegExp("ArrowUp|ArrowDown|Escape"),
        gt = d() ? "top-end" : "top-start",
        mt = d() ? "top-start" : "top-end",
        yt = d() ? "bottom-end" : "bottom-start",
        vt = d() ? "bottom-start" : "bottom-end",
        bt = d() ? "left-start" : "right-start",
        xt = d() ? "right-start" : "left-start",
        wt = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        },
        _t = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        };
    class kt extends H {
        constructor(e, t) {
            super(e), this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return wt
        }
        static get DefaultType() {
            return _t
        }
        static get NAME() {
            return "dropdown"
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (l(this._element) || this._isShown(this._menu)) return;
            const e = {
                relatedTarget: this._element
            };
            if (D.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) return;
            const t = kt.getParentFromElement(this._element);
            this._inNavbar ? B.setDataAttribute(this._menu, "popper", "none") : this._createPopper(t), "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach((e => D.on(e, "mouseover", u))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add("show"), this._element.classList.add("show"), D.trigger(this._element, "shown.bs.dropdown", e)
        }
        hide() {
            if (l(this._element) || !this._isShown(this._menu)) return;
            const e = {
                relatedTarget: this._element
            };
            this._completeHide(e)
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _completeHide(e) {
            D.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => D.off(e, "mouseover", u))), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), D.trigger(this._element, "hidden.bs.dropdown", e))
        }
        _getConfig(e) {
            if (e = {
                    ...this.constructor.Default,
                    ...B.getDataAttributes(this._element),
                    ...e
                }, s("dropdown", e, this.constructor.DefaultType), "object" == typeof e.reference && !o(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
            return e
        }
        _createPopper(e) {
            if (void 0 === ft) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = e : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const n = this._getPopperConfig(),
                i = n.modifiers.find((e => "applyStyles" === e.name && !1 === e.enabled));
            this._popper = ht(t, this._menu, n), i && B.setDataAttribute(this._menu, "popper", "static")
        }
        _isShown(e = this._element) {
            return e.classList.contains("show")
        }
        _getMenuElement() {
            return U.next(this._element, ".dropdown-menu")[0]
        }
        _getPlacement() {
            const e = this._element.parentNode;
            if (e.classList.contains("dropend")) return bt;
            if (e.classList.contains("dropstart")) return xt;
            const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return e.classList.contains("dropup") ? t ? mt : gt : t ? vt : yt
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {
                offset: e
            } = this._config;
            return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
        }
        _getPopperConfig() {
            const e = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (e.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _selectMenuItem({
            key: e,
            target: t
        }) {
            const n = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(a);
            n.length && v(n, t, "ArrowDown" === e, !n.includes(t)).focus()
        }
        static jQueryInterface(e) {
            return this.each((function () {
                const t = kt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
        static clearMenus(e) {
            if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
            const t = U.find('[data-bs-toggle="dropdown"]');
            for (let n = 0, i = t.length; n < i; n++) {
                const i = kt.getInstance(t[n]);
                if (!i || !1 === i._config.autoClose) continue;
                if (!i._isShown()) continue;
                const o = {
                    relatedTarget: i._element
                };
                if (e) {
                    const t = e.composedPath(),
                        n = t.includes(i._menu);
                    if (t.includes(i._element) || "inside" === i._config.autoClose && !n || "outside" === i._config.autoClose && n) continue;
                    if (i._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                    "click" === e.type && (o.clickEvent = e)
                }
                i._completeHide(o)
            }
        }
        static getParentFromElement(e) {
            return n(e) || e.parentNode
        }
        static dataApiKeydownHandler(e) {
            if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(".dropdown-menu")) : !dt.test(e.key)) return;
            const t = this.classList.contains("show");
            if (!t && "Escape" === e.key) return;
            if (e.preventDefault(), e.stopPropagation(), l(this)) return;
            const n = this.matches('[data-bs-toggle="dropdown"]') ? this : U.prev(this, '[data-bs-toggle="dropdown"]')[0],
                i = kt.getOrCreateInstance(n);
            if ("Escape" !== e.key) return "ArrowUp" === e.key || "ArrowDown" === e.key ? (t || i.show(), void i._selectMenuItem(e)) : void(t && "Space" !== e.key || kt.clearMenus());
            i.hide()
        }
    }
    D.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', kt.dataApiKeydownHandler), D.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", kt.dataApiKeydownHandler), D.on(document, "click.bs.dropdown.data-api", kt.clearMenus), D.on(document, "keyup.bs.dropdown.data-api", kt.clearMenus), D.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function (e) {
        e.preventDefault(), kt.getOrCreateInstance(this).toggle()
    })), g(kt);
    class Et {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e)
        }
        hide() {
            const e = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (t => t + e)), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", (t => t + e)), this._setElementAttributes(".sticky-top", "marginRight", (t => t - e))
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(e, t, n) {
            const i = this.getWidth();
            this._applyManipulationCallback(e, (e => {
                if (e !== this._element && window.innerWidth > e.clientWidth + i) return;
                this._saveInitialAttribute(e, t);
                const o = window.getComputedStyle(e)[t];
                e.style[t] = n(Number.parseFloat(o)) + "px"
            }))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight")
        }
        _saveInitialAttribute(e, t) {
            const n = e.style[t];
            n && B.setDataAttribute(e, t, n)
        }
        _resetElementAttributes(e, t) {
            this._applyManipulationCallback(e, (e => {
                const n = B.getDataAttribute(e, t);
                void 0 === n ? e.style.removeProperty(t) : (B.removeDataAttribute(e, t), e.style[t] = n)
            }))
        }
        _applyManipulationCallback(e, t) {
            o(e) ? t(e) : U.find(e, this._element).forEach(t)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
    }
    const Tt = {
            className: "modal-backdrop",
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null
        },
        St = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)"
        };
    class Ct {
        constructor(e) {
            this._config = this._getConfig(e), this._isAppended = !1, this._element = null
        }
        show(e) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && p(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation((() => {
                m(e)
            }))) : m(e)
        }
        hide(e) {
            this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation((() => {
                this.dispose(), m(e)
            }))) : m(e)
        }
        _getElement() {
            if (!this._element) {
                const e = document.createElement("div");
                e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
            }
            return this._element
        }
        _getConfig(e) {
            return (e = {
                ...Tt,
                ..."object" == typeof e ? e : {}
            }).rootElement = r(e.rootElement), s("backdrop", e, St), e
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), D.on(this._getElement(), "mousedown.bs.backdrop", (() => {
                m(this._config.clickCallback)
            })), this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (D.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1)
        }
        _emulateAnimation(e) {
            y(e, this._getElement(), this._config.isAnimated)
        }
    }
    const At = {
            trapElement: null,
            autofocus: !0
        },
        Ot = {
            trapElement: "element",
            autofocus: "boolean"
        };
    class Lt {
        constructor(e) {
            this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
        }
        activate() {
            const {
                trapElement: e,
                autofocus: t
            } = this._config;
            this._isActive || (t && e.focus(), D.off(document, ".bs.focustrap"), D.on(document, "focusin.bs.focustrap", (e => this._handleFocusin(e))), D.on(document, "keydown.tab.bs.focustrap", (e => this._handleKeydown(e))), this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1, D.off(document, ".bs.focustrap"))
        }
        _handleFocusin(e) {
            const {
                target: t
            } = e, {
                trapElement: n
            } = this._config;
            if (t === document || t === n || n.contains(t)) return;
            const i = U.focusableChildren(n);
            0 === i.length ? n.focus() : "backward" === this._lastTabNavDirection ? i[i.length - 1].focus() : i[0].focus()
        }
        _handleKeydown(e) {
            "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? "backward" : "forward")
        }
        _getConfig(e) {
            return e = {
                ...At,
                ..."object" == typeof e ? e : {}
            }, s("focustrap", e, Ot), e
        }
    }
    const Mt = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        },
        jt = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean"
        };
    class Nt extends H {
        constructor(e, t) {
            super(e), this._config = this._getConfig(t), this._dialog = U.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new Et
        }
        static get Default() {
            return Mt
        }
        static get NAME() {
            return "modal"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            this._isShown || this._isTransitioning || D.trigger(this._element, "show.bs.modal", {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), D.on(this._dialog, "mousedown.dismiss.bs.modal", (() => {
                D.one(this._element, "mouseup.dismiss.bs.modal", (e => {
                    e.target === this._element && (this._ignoreBackdropClick = !0)
                }))
            })), this._showBackdrop((() => this._showElement(e))))
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            if (D.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const e = this._isAnimated();
            e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), D.off(this._element, "click.dismiss.bs.modal"), D.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback((() => this._hideModal()), this._element, e)
        }
        dispose() {
            [window, this._dialog].forEach((e => D.off(e, ".bs.modal"))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Ct({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Lt({
                trapElement: this._element
            })
        }
        _getConfig(e) {
            return e = {
                ...Mt,
                ...B.getDataAttributes(this._element),
                ..."object" == typeof e ? e : {}
            }, s("modal", e, jt), e
        }
        _showElement(e) {
            const t = this._isAnimated(),
                n = U.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), t && p(this._element), this._element.classList.add("show"), this._queueCallback((() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, D.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: e
                })
            }), this._dialog, t)
        }
        _setEscapeEvent() {
            this._isShown ? D.on(this._element, "keydown.dismiss.bs.modal", (e => {
                this._config.keyboard && "Escape" === e.key ? (e.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== e.key || this._triggerBackdropTransition()
            })) : D.off(this._element, "keydown.dismiss.bs.modal")
        }
        _setResizeEvent() {
            this._isShown ? D.on(window, "resize.bs.modal", (() => this._adjustDialog())) : D.off(window, "resize.bs.modal")
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), D.trigger(this._element, "hidden.bs.modal")
            }))
        }
        _showBackdrop(e) {
            D.on(this._element, "click.dismiss.bs.modal", (e => {
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            })), this._backdrop.show(e)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (D.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const {
                classList: e,
                scrollHeight: t,
                style: n
            } = this._element, i = t > document.documentElement.clientHeight;
            !i && "hidden" === n.overflowY || e.contains("modal-static") || (i || (n.overflowY = "hidden"), e.add("modal-static"), this._queueCallback((() => {
                e.remove("modal-static"), i || this._queueCallback((() => {
                    n.overflowY = ""
                }), this._dialog)
            }), this._dialog), this._element.focus())
        }
        _adjustDialog() {
            const e = this._element.scrollHeight > document.documentElement.clientHeight,
                t = this._scrollBar.getWidth(),
                n = t > 0;
            (!n && e && !d() || n && !e && d()) && (this._element.style.paddingLeft = t + "px"), (n && !e && !d() || !n && e && d()) && (this._element.style.paddingRight = t + "px")
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(e, t) {
            return this.each((function () {
                const n = Nt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                    n[e](t)
                }
            }))
        }
    }
    D.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (e) {
        const t = n(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), D.one(t, "show.bs.modal", (e => {
            e.defaultPrevented || D.one(t, "hidden.bs.modal", (() => {
                a(this) && this.focus()
            }))
        })), Nt.getOrCreateInstance(t).toggle(this)
    })), R(Nt), g(Nt);
    const Dt = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        Pt = {
            backdrop: "boolean",
            keyboard: "boolean",
            scroll: "boolean"
        };
    class It extends H {
        constructor(e, t) {
            super(e), this._config = this._getConfig(t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }
        static get NAME() {
            return "offcanvas"
        }
        static get Default() {
            return Dt
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            this._isShown || D.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new Et).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback((() => {
                this._config.scroll || this._focustrap.activate(), D.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: e
                })
            }), this._element, !0))
        }
        hide() {
            this._isShown && (D.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback((() => {
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new Et).reset(), D.trigger(this._element, "hidden.bs.offcanvas")
            }), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        _getConfig(e) {
            return e = {
                ...Dt,
                ...B.getDataAttributes(this._element),
                ..."object" == typeof e ? e : {}
            }, s("offcanvas", e, Pt), e
        }
        _initializeBackDrop() {
            return new Ct({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide()
            })
        }
        _initializeFocusTrap() {
            return new Lt({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            D.on(this._element, "keydown.dismiss.bs.offcanvas", (e => {
                this._config.keyboard && "Escape" === e.key && this.hide()
            }))
        }
        static jQueryInterface(e) {
            return this.each((function () {
                const t = It.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }))
        }
    }
    D.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function (e) {
        const t = n(this);
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), l(this)) return;
        D.one(t, "hidden.bs.offcanvas", (() => {
            a(this) && this.focus()
        }));
        const i = U.findOne(".offcanvas.show");
        i && i !== t && It.getInstance(i).hide(), It.getOrCreateInstance(t).toggle(this)
    })), D.on(window, "load.bs.offcanvas.data-api", (() => U.find(".offcanvas.show").forEach((e => It.getOrCreateInstance(e).show())))), R(It), g(It);
    const Ht = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Rt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
        qt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Wt = (e, t) => {
            const n = e.nodeName.toLowerCase();
            if (t.includes(n)) return !Ht.has(n) || Boolean(Rt.test(e.nodeValue) || qt.test(e.nodeValue));
            const i = t.filter((e => e instanceof RegExp));
            for (let e = 0, t = i.length; e < t; e++)
                if (i[e].test(n)) return !0;
            return !1
        };

    function zt(e, t, n) {
        if (!e.length) return e;
        if (n && "function" == typeof n) return n(e);
        const i = (new window.DOMParser).parseFromString(e, "text/html"),
            o = Object.keys(t),
            r = [].concat(...i.body.querySelectorAll("*"));
        for (let e = 0, n = r.length; e < n; e++) {
            const n = r[e],
                i = n.nodeName.toLowerCase();
            if (!o.includes(i)) {
                n.remove();
                continue
            }
            const s = [].concat(...n.attributes),
                a = [].concat(t["*"] || [], t[i] || []);
            s.forEach((e => {
                Wt(e, a) || n.removeAttribute(e.nodeName)
            }))
        }
        return i.body.innerHTML
    }
    const Ft = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Bt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        },
        Ut = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: d() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: d() ? "right" : "left"
        },
        Xt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        Yt = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        };
    class Vt extends H {
        constructor(e, t) {
            if (void 0 === ft) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(e), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(t), this.tip = null, this._setListeners()
        }
        static get Default() {
            return Xt
        }
        static get NAME() {
            return "tooltip"
        }
        static get Event() {
            return Yt
        }
        static get DefaultType() {
            return Bt
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(e) {
            if (this._isEnabled)
                if (e) {
                    const t = this._initializeOnDelegatedTarget(e);
                    t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
                } else {
                    if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout), D.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const e = D.trigger(this._element, this.constructor.Event.SHOW),
                t = c(this._element),
                n = null === t ? this._element.ownerDocument.documentElement.contains(this._element) : t.contains(this._element);
            if (e.defaultPrevented || !n) return;
            const i = this.getTipElement(),
                o = (e => {
                    do {
                        e += Math.floor(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                })(this.constructor.NAME);
            i.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && i.classList.add("fade");
            const r = "function" == typeof this._config.placement ? this._config.placement.call(this, i, this._element) : this._config.placement,
                s = this._getAttachment(r);
            this._addAttachmentClass(s);
            const {
                container: a
            } = this._config;
            I.set(i, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(i), D.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = ht(this._element, i, this._getPopperConfig(s)), i.classList.add("show");
            const l = this._resolvePossibleFunction(this._config.customClass);
            l && i.classList.add(...l.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => {
                D.on(e, "mouseover", u)
            }));
            const p = this.tip.classList.contains("fade");
            this._queueCallback((() => {
                const e = this._hoverState;
                this._hoverState = null, D.trigger(this._element, this.constructor.Event.SHOWN), "out" === e && this._leave(null, this)
            }), this.tip, p)
        }
        hide() {
            if (!this._popper) return;
            const e = this.getTipElement();
            if (D.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            e.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => D.off(e, "mouseover", u))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
            const t = this.tip.classList.contains("fade");
            this._queueCallback((() => {
                this._isWithActiveTrigger() || ("show" !== this._hoverState && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), D.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
            }), this.tip, t), this._hoverState = ""
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const e = document.createElement("div");
            e.innerHTML = this._config.template;
            const t = e.children[0];
            return this.setContent(t), t.classList.remove("fade", "show"), this.tip = t, this.tip
        }
        setContent(e) {
            this._sanitizeAndSetContent(e, this.getTitle(), ".tooltip-inner")
        }
        _sanitizeAndSetContent(e, t, n) {
            const i = U.findOne(n, e);
            t || !i ? this.setElementContent(i, t) : i.remove()
        }
        setElementContent(e, t) {
            if (null !== e) return o(t) ? (t = r(t), void(this._config.html ? t.parentNode !== e && (e.innerHTML = "", e.append(t)) : e.textContent = t.textContent)) : void(this._config.html ? (this._config.sanitize && (t = zt(t, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = t) : e.textContent = t)
        }
        getTitle() {
            const e = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(e)
        }
        updateAttachment(e) {
            return "right" === e ? "end" : "left" === e ? "start" : e
        }
        _initializeOnDelegatedTarget(e, t) {
            return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
        }
        _getOffset() {
            const {
                offset: e
            } = this._config;
            return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
        }
        _resolvePossibleFunction(e) {
            return "function" == typeof e ? e.call(this._element) : e
        }
        _getPopperConfig(e) {
            const t = {
                placement: e,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: e => this._handlePopperPlacementChange(e)
                }],
                onFirstUpdate: e => {
                    e.options.placement !== e.placement && this._handlePopperPlacementChange(e)
                }
            };
            return {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _addAttachmentClass(e) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)
        }
        _getAttachment(e) {
            return Ut[e.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((e => {
                if ("click" === e) D.on(this._element, this.constructor.Event.CLICK, this._config.selector, (e => this.toggle(e)));
                else if ("manual" !== e) {
                    const t = "hover" === e ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                        n = "hover" === e ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    D.on(this._element, t, this._config.selector, (e => this._enter(e))), D.on(this._element, n, this._config.selector, (e => this._leave(e)))
                }
            })), this._hideModalHandler = () => {
                this._element && this.hide()
            }, D.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const e = this._element.getAttribute("title"),
                t = typeof this._element.getAttribute("data-bs-original-title");
            (e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""))
        }
        _enter(e, t) {
            t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t.getTipElement().classList.contains("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t._config.delay && t._config.delay.show ? t._timeout = setTimeout((() => {
                "show" === t._hoverState && t.show()
            }), t._config.delay.show) : t.show())
        }
        _leave(e, t) {
            t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t._config.delay && t._config.delay.hide ? t._timeout = setTimeout((() => {
                "out" === t._hoverState && t.hide()
            }), t._config.delay.hide) : t.hide())
        }
        _isWithActiveTrigger() {
            for (const e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0;
            return !1
        }
        _getConfig(e) {
            const t = B.getDataAttributes(this._element);
            return Object.keys(t).forEach((e => {
                Ft.has(e) && delete t[e]
            })), (e = {
                ...this.constructor.Default,
                ...t,
                ..."object" == typeof e && e ? e : {}
            }).container = !1 === e.container ? document.body : r(e.container), "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), s("tooltip", e, this.constructor.DefaultType), e.sanitize && (e.template = zt(e.template, e.allowList, e.sanitizeFn)), e
        }
        _getDelegateConfig() {
            const e = {};
            for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
            return e
        }
        _cleanTipClass() {
            const e = this.getTipElement(),
                t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                n = e.getAttribute("class").match(t);
            null !== n && n.length > 0 && n.map((e => e.trim())).forEach((t => e.classList.remove(t)))
        }
        _getBasicClassPrefix() {
            return "bs-tooltip"
        }
        _handlePopperPlacementChange(e) {
            const {
                state: t
            } = e;
            t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)))
        }
        static jQueryInterface(e) {
            return this.each((function () {
                const t = Vt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    g(Vt);
    const $t = {
            ...Vt.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        },
        Kt = {
            ...Vt.DefaultType,
            content: "(string|element|function)"
        },
        Qt = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        };
    class Gt extends Vt {
        static get Default() {
            return $t
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return Qt
        }
        static get DefaultType() {
            return Kt
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent(e) {
            this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(e, this._getContent(), ".popover-body")
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        _getBasicClassPrefix() {
            return "bs-popover"
        }
        static jQueryInterface(e) {
            return this.each((function () {
                const t = Gt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    g(Gt);
    const Jt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        Zt = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        en = ".nav-link, .list-group-item, .dropdown-item";
    class tn extends H {
        constructor(e, t) {
            super(e), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(t), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, D.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())), this.refresh(), this._process()
        }
        static get Default() {
            return Jt
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            const e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                n = "auto" === this._config.method ? e : this._config.method,
                i = "position" === n ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), U.find(en, this._config.target).map((e => {
                const o = t(e),
                    r = o ? U.findOne(o) : null;
                if (r) {
                    const e = r.getBoundingClientRect();
                    if (e.width || e.height) return [B[n](r).top + i, o]
                }
                return null
            })).filter((e => e)).sort(((e, t) => e[0] - t[0])).forEach((e => {
                this._offsets.push(e[0]), this._targets.push(e[1])
            }))
        }
        dispose() {
            D.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
        }
        _getConfig(e) {
            return (e = {
                ...Jt,
                ...B.getDataAttributes(this._element),
                ..."object" == typeof e && e ? e : {}
            }).target = r(e.target) || document.documentElement, s("scrollspy", e, Zt), e
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(), e >= n) {
                const e = this._targets[this._targets.length - 1];
                this._activeTarget !== e && this._activate(e)
            } else {
                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for (let t = this._offsets.length; t--;) this._activeTarget !== this._targets[t] && e >= this._offsets[t] && (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t])
            }
        }
        _activate(e) {
            this._activeTarget = e, this._clear();
            const t = en.split(",").map((t => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`)),
                n = U.findOne(t.join(","), this._config.target);
            n.classList.add("active"), n.classList.contains("dropdown-item") ? U.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active") : U.parents(n, ".nav, .list-group").forEach((e => {
                U.prev(e, ".nav-link, .list-group-item").forEach((e => e.classList.add("active"))), U.prev(e, ".nav-item").forEach((e => {
                    U.children(e, ".nav-link").forEach((e => e.classList.add("active")))
                }))
            })), D.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: e
            })
        }
        _clear() {
            U.find(en, this._config.target).filter((e => e.classList.contains("active"))).forEach((e => e.classList.remove("active")))
        }
        static jQueryInterface(e) {
            return this.each((function () {
                const t = tn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    D.on(window, "load.bs.scrollspy.data-api", (() => {
        U.find('[data-bs-spy="scroll"]').forEach((e => new tn(e)))
    })), g(tn);
    class nn extends H {
        static get NAME() {
            return "tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
            let e;
            const t = n(this._element),
                i = this._element.closest(".nav, .list-group");
            if (i) {
                const t = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
                e = U.find(t, i), e = e[e.length - 1]
            }
            const o = e ? D.trigger(e, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (D.trigger(this._element, "show.bs.tab", {
                    relatedTarget: e
                }).defaultPrevented || null !== o && o.defaultPrevented) return;
            this._activate(this._element, i);
            const r = () => {
                D.trigger(e, "hidden.bs.tab", {
                    relatedTarget: this._element
                }), D.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: e
                })
            };
            t ? this._activate(t, t.parentNode, r) : r()
        }
        _activate(e, t, n) {
            const i = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? U.children(t, ".active") : U.find(":scope > li > .active", t))[0],
                o = n && i && i.classList.contains("fade"),
                r = () => this._transitionComplete(e, i, n);
            i && o ? (i.classList.remove("show"), this._queueCallback(r, e, !0)) : r()
        }
        _transitionComplete(e, t, n) {
            if (t) {
                t.classList.remove("active");
                const e = U.findOne(":scope > .dropdown-menu .active", t.parentNode);
                e && e.classList.remove("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), p(e), e.classList.contains("fade") && e.classList.add("show");
            let i = e.parentNode;
            if (i && "LI" === i.nodeName && (i = i.parentNode), i && i.classList.contains("dropdown-menu")) {
                const t = e.closest(".dropdown");
                t && U.find(".dropdown-toggle", t).forEach((e => e.classList.add("active"))), e.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        static jQueryInterface(e) {
            return this.each((function () {
                const t = nn.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }))
        }
    }
    D.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), l(this) || nn.getOrCreateInstance(this).show()
    })), g(nn);
    const on = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        rn = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class sn extends H {
        constructor(e, t) {
            super(e), this._config = this._getConfig(t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get DefaultType() {
            return on
        }
        static get Default() {
            return rn
        }
        static get NAME() {
            return "toast"
        }
        show() {
            D.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), p(this._element), this._element.classList.add("show"), this._element.classList.add("showing"), this._queueCallback((() => {
                this._element.classList.remove("showing"), D.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }), this._element, this._config.animation))
        }
        hide() {
            this._element.classList.contains("show") && (D.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add("showing"), this._queueCallback((() => {
                this._element.classList.add("hide"), this._element.classList.remove("showing"), this._element.classList.remove("show"), D.trigger(this._element, "hidden.bs.toast")
            }), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose()
        }
        _getConfig(e) {
            return e = {
                ...rn,
                ...B.getDataAttributes(this._element),
                ..."object" == typeof e && e ? e : {}
            }, s("toast", e, this.constructor.DefaultType), e
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                this.hide()
            }), this._config.delay)))
        }
        _onInteraction(e, t) {
            switch (e.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = t;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = t
            }
            if (t) return void this._clearTimeout();
            const n = e.relatedTarget;
            this._element === n || this._element.contains(n) || this._maybeScheduleHide()
        }
        _setListeners() {
            D.on(this._element, "mouseover.bs.toast", (e => this._onInteraction(e, !0))), D.on(this._element, "mouseout.bs.toast", (e => this._onInteraction(e, !1))), D.on(this._element, "focusin.bs.toast", (e => this._onInteraction(e, !0))), D.on(this._element, "focusout.bs.toast", (e => this._onInteraction(e, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(e) {
            return this.each((function () {
                const t = sn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }))
        }
    }
    return R(sn), g(sn), {
        Alert: q,
        Button: W,
        Carousel: J,
        Collapse: te,
        Dropdown: kt,
        Modal: Nt,
        Offcanvas: It,
        Popover: Gt,
        ScrollSpy: tn,
        Tab: nn,
        Toast: sn,
        Tooltip: Vt
    }
})),
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).PerfectScrollbar = t()
}(this, (function () {
    "use strict";
    var e = Math.abs,
        t = Math.floor;

    function n(e) {
        return getComputedStyle(e)
    }

    function i(e, t) {
        for (var n in t) {
            var i = t[n];
            "number" == typeof i && (i += "px"), e.style[n] = i
        }
        return e
    }

    function o(e) {
        var t = document.createElement("div");
        return t.className = e, t
    }

    function r(e, t) {
        if (!b) throw new Error("No element matching method supported");
        return b.call(e, t)
    }

    function s(e) {
        e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
    }

    function a(e, t) {
        return Array.prototype.filter.call(e.children, (function (e) {
            return r(e, t)
        }))
    }

    function l(e, t) {
        var n = e.element.classList,
            i = x.state.scrolling(t);
        n.contains(i) ? clearTimeout(w[t]) : n.add(i)
    }

    function c(e, t) {
        w[t] = setTimeout((function () {
            return e.isAlive && e.element.classList.remove(x.state.scrolling(t))
        }), e.settings.scrollingThreshold)
    }

    function u(e, t) {
        l(e, t), c(e, t)
    }

    function p(e) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(e, !1, !1, void 0), t
    }

    function h(e, t, n, i, o) {
        var r;
        if (void 0 === i && (i = !0), void 0 === o && (o = !1), "top" === t) r = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
        else {
            if ("left" !== t) throw new Error("A proper axis should be provided");
            r = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
        }! function (e, t, n, i, o) {
            var r = n[0],
                s = n[1],
                a = n[2],
                l = n[3],
                c = n[4],
                h = n[5];
            void 0 === i && (i = !0), void 0 === o && (o = !1);
            var f = e.element;
            e.reach[l] = null, 1 > f[a] && (e.reach[l] = "start"), f[a] > e[r] - e[s] - 1 && (e.reach[l] = "end"), t && (f.dispatchEvent(p("ps-scroll-" + l)), 0 > t ? f.dispatchEvent(p("ps-scroll-" + c)) : 0 < t && f.dispatchEvent(p("ps-scroll-" + h)), i && u(e, l)), e.reach[l] && (t || o) && f.dispatchEvent(p("ps-" + l + "-reach-" + e.reach[l]))
        }(e, n, r, i, o)
    }

    function f(e) {
        return parseInt(e, 10) || 0
    }

    function d(e) {
        return r(e, "input,[contenteditable]") || r(e, "select,[contenteditable]") || r(e, "textarea,[contenteditable]") || r(e, "button,[contenteditable]")
    }

    function g(e) {
        var n = Math.ceil,
            i = e.element,
            o = t(i.scrollTop),
            r = i.getBoundingClientRect();
        e.containerWidth = n(r.width), e.containerHeight = n(r.height), e.contentWidth = i.scrollWidth, e.contentHeight = i.scrollHeight, i.contains(e.scrollbarXRail) || (a(i, x.element.rail("x")).forEach((function (e) {
            return s(e)
        })), i.appendChild(e.scrollbarXRail)), i.contains(e.scrollbarYRail) || (a(i, x.element.rail("y")).forEach((function (e) {
            return s(e)
        })), i.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = m(e, f(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = f((e.negativeScrollAdjustment + i.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = m(e, f(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = f(o * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), y(i, e), e.scrollbarXActive ? i.classList.add(x.state.active("x")) : (i.classList.remove(x.state.active("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, i.scrollLeft = !0 === e.isRtl ? e.contentWidth : 0), e.scrollbarYActive ? i.classList.add(x.state.active("y")) : (i.classList.remove(x.state.active("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, i.scrollTop = 0)
    }

    function m(e, t) {
        var n = Math.min,
            i = Math.max;
        return e.settings.minScrollbarLength && (t = i(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = n(t, e.settings.maxScrollbarLength)), t
    }

    function y(e, n) {
        var o = {
                width: n.railXWidth
            },
            r = t(e.scrollTop);
        o.left = n.isRtl ? n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth : e.scrollLeft, n.isScrollbarXUsingBottom ? o.bottom = n.scrollbarXBottom - r : o.top = n.scrollbarXTop + r, i(n.scrollbarXRail, o);
        var s = {
            top: r,
            height: n.railYHeight
        };
        n.isScrollbarYUsingRight ? n.isRtl ? s.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth - 9 : s.right = n.scrollbarYRight - e.scrollLeft : n.isRtl ? s.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : s.left = n.scrollbarYLeft + e.scrollLeft, i(n.scrollbarYRail, s), i(n.scrollbarX, {
            left: n.scrollbarXLeft,
            width: n.scrollbarXWidth - n.railBorderXWidth
        }), i(n.scrollbarY, {
            top: n.scrollbarYTop,
            height: n.scrollbarYHeight - n.railBorderYWidth
        })
    }

    function v(e, t) {
        function n(t) {
            t.touches && t.touches[0] && (t[a] = t.touches[0].pageY), y[f] = v + w * (t[a] - b), l(e, d), g(e), t.stopPropagation(), t.preventDefault()
        }

        function i() {
            c(e, d), e[m].classList.remove(x.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", n)
        }

        function o(t, o) {
            v = y[f], o && t.touches && (t[a] = t.touches[0].pageY), b = t[a], w = (e[s] - e[r]) / (e[u] - e[h]), o ? e.event.bind(e.ownerDocument, "touchmove", n) : (e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", i), t.preventDefault()), e[m].classList.add(x.state.clicking), t.stopPropagation()
        }
        var r = t[0],
            s = t[1],
            a = t[2],
            u = t[3],
            p = t[4],
            h = t[5],
            f = t[6],
            d = t[7],
            m = t[8],
            y = e.element,
            v = null,
            b = null,
            w = null;
        e.event.bind(e[p], "mousedown", (function (e) {
            o(e)
        })), e.event.bind(e[p], "touchstart", (function (e) {
            o(e, !0)
        }))
    }
    var b = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
        x = {
            main: "ps",
            rtl: "ps__rtl",
            element: {
                thumb: function (e) {
                    return "ps__thumb-" + e
                },
                rail: function (e) {
                    return "ps__rail-" + e
                },
                consuming: "ps__child--consume"
            },
            state: {
                focus: "ps--focus",
                clicking: "ps--clicking",
                active: function (e) {
                    return "ps--active-" + e
                },
                scrolling: function (e) {
                    return "ps--scrolling-" + e
                }
            }
        },
        w = {
            x: null,
            y: null
        },
        _ = function (e) {
            this.element = e, this.handlers = {}
        },
        k = {
            isEmpty: {
                configurable: !0
            }
        };
    _.prototype.bind = function (e, t) {
        void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1)
    }, _.prototype.unbind = function (e, t) {
        var n = this;
        this.handlers[e] = this.handlers[e].filter((function (i) {
            return !(!t || i === t) || (n.element.removeEventListener(e, i, !1), !1)
        }))
    }, _.prototype.unbindAll = function () {
        for (var e in this.handlers) this.unbind(e)
    }, k.isEmpty.get = function () {
        var e = this;
        return Object.keys(this.handlers).every((function (t) {
            return 0 === e.handlers[t].length
        }))
    }, Object.defineProperties(_.prototype, k);
    var E = function () {
        this.eventElements = []
    };
    E.prototype.eventElement = function (e) {
        var t = this.eventElements.filter((function (t) {
            return t.element === e
        }))[0];
        return t || (t = new _(e), this.eventElements.push(t)), t
    }, E.prototype.bind = function (e, t, n) {
        this.eventElement(e).bind(t, n)
    }, E.prototype.unbind = function (e, t, n) {
        var i = this.eventElement(e);
        i.unbind(t, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1)
    }, E.prototype.unbindAll = function () {
        this.eventElements.forEach((function (e) {
            return e.unbindAll()
        })), this.eventElements = []
    }, E.prototype.once = function (e, t, n) {
        var i = this.eventElement(e),
            o = function (e) {
                i.unbind(t, o), n(e)
            };
        i.bind(t, o)
    };
    var T = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && 0 < window.navigator.maxTouchPoints || window.DocumentTouch && document instanceof window.DocumentTouch),
            supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
            isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
        },
        S = {
            "click-rail": function (e) {
                e.element, e.event.bind(e.scrollbarY, "mousedown", (function (e) {
                    return e.stopPropagation()
                })), e.event.bind(e.scrollbarYRail, "mousedown", (function (t) {
                    var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                    e.element.scrollTop += n * e.containerHeight, g(e), t.stopPropagation()
                })), e.event.bind(e.scrollbarX, "mousedown", (function (e) {
                    return e.stopPropagation()
                })), e.event.bind(e.scrollbarXRail, "mousedown", (function (t) {
                    var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                    e.element.scrollLeft += n * e.containerWidth, g(e), t.stopPropagation()
                }))
            },
            "drag-thumb": function (e) {
                v(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), v(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
            },
            keyboard: function (e) {
                var n = e.element,
                    i = function () {
                        return r(n, ":hover")
                    },
                    o = function () {
                        return r(e.scrollbarX, ":focus") || r(e.scrollbarY, ":focus")
                    };
                e.event.bind(e.ownerDocument, "keydown", (function (r) {
                    if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented) && (i() || o())) {
                        var s = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                        if (s) {
                            if ("IFRAME" === s.tagName) s = s.contentDocument.activeElement;
                            else
                                for (; s.shadowRoot;) s = s.shadowRoot.activeElement;
                            if (d(s)) return
                        }
                        var a = 0,
                            l = 0;
                        switch (r.which) {
                            case 37:
                                a = r.metaKey ? -e.contentWidth : r.altKey ? -e.containerWidth : -30;
                                break;
                            case 38:
                                l = r.metaKey ? e.contentHeight : r.altKey ? e.containerHeight : 30;
                                break;
                            case 39:
                                a = r.metaKey ? e.contentWidth : r.altKey ? e.containerWidth : 30;
                                break;
                            case 40:
                                l = r.metaKey ? -e.contentHeight : r.altKey ? -e.containerHeight : -30;
                                break;
                            case 32:
                                l = r.shiftKey ? e.containerHeight : -e.containerHeight;
                                break;
                            case 33:
                                l = e.containerHeight;
                                break;
                            case 34:
                                l = -e.containerHeight;
                                break;
                            case 36:
                                l = e.contentHeight;
                                break;
                            case 35:
                                l = -e.contentHeight;
                                break;
                            default:
                                return
                        }
                        e.settings.suppressScrollX && 0 !== a || e.settings.suppressScrollY && 0 !== l || (n.scrollTop -= l, n.scrollLeft += a, g(e), function (i, o) {
                            var r = t(n.scrollTop);
                            if (0 === i) {
                                if (!e.scrollbarYActive) return !1;
                                if (0 === r && 0 < o || r >= e.contentHeight - e.containerHeight && 0 > o) return !e.settings.wheelPropagation
                            }
                            var s = n.scrollLeft;
                            if (0 === o) {
                                if (!e.scrollbarXActive) return !1;
                                if (0 === s && 0 > i || s >= e.contentWidth - e.containerWidth && 0 < i) return !e.settings.wheelPropagation
                            }
                            return !0
                        }(a, l) && r.preventDefault())
                    }
                }))
            },
            wheel: function (i) {
                function o(e, t, i) {
                    if (!T.isWebKit && s.querySelector("select:focus")) return !0;
                    if (!s.contains(e)) return !1;
                    for (var o = e; o && o !== s;) {
                        if (o.classList.contains(x.element.consuming)) return !0;
                        var r = n(o);
                        if (i && r.overflowY.match(/(scroll|auto)/)) {
                            var a = o.scrollHeight - o.clientHeight;
                            if (0 < a && (0 < o.scrollTop && 0 > i || o.scrollTop < a && 0 < i)) return !0
                        }
                        if (t && r.overflowX.match(/(scroll|auto)/)) {
                            var l = o.scrollWidth - o.clientWidth;
                            if (0 < l && (0 < o.scrollLeft && 0 > t || o.scrollLeft < l && 0 < t)) return !0
                        }
                        o = o.parentNode
                    }
                    return !1
                }

                function r(n) {
                    var r = function (e) {
                            var t = e.deltaX,
                                n = -1 * e.deltaY;
                            return (void 0 === t || void 0 === n) && (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
                        }(n),
                        a = r[0],
                        l = r[1];
                    if (!o(n.target, a, l)) {
                        var c = !1;
                        i.settings.useBothWheelAxes ? i.scrollbarYActive && !i.scrollbarXActive ? (l ? s.scrollTop -= l * i.settings.wheelSpeed : s.scrollTop += a * i.settings.wheelSpeed, c = !0) : i.scrollbarXActive && !i.scrollbarYActive && (a ? s.scrollLeft += a * i.settings.wheelSpeed : s.scrollLeft -= l * i.settings.wheelSpeed, c = !0) : (s.scrollTop -= l * i.settings.wheelSpeed, s.scrollLeft += a * i.settings.wheelSpeed), g(i), (c = c || function (n, o) {
                            var r = t(s.scrollTop),
                                a = 0 === s.scrollTop,
                                l = r + s.offsetHeight === s.scrollHeight,
                                c = 0 === s.scrollLeft,
                                u = s.scrollLeft + s.offsetWidth === s.scrollWidth;
                            return !(e(o) > e(n) ? a || l : c || u) || !i.settings.wheelPropagation
                        }(a, l)) && !n.ctrlKey && (n.stopPropagation(), n.preventDefault())
                    }
                }
                var s = i.element;
                void 0 === window.onwheel ? void 0 !== window.onmousewheel && i.event.bind(s, "mousewheel", r) : i.event.bind(s, "wheel", r)
            },
            touch: function (i) {
                function o(n, o) {
                    var r = t(h.scrollTop),
                        s = h.scrollLeft,
                        a = e(n),
                        l = e(o);
                    if (l > a) {
                        if (0 > o && r === i.contentHeight - i.containerHeight || 0 < o && 0 === r) return 0 === window.scrollY && 0 < o && T.isChrome
                    } else if (a > l && (0 > n && s === i.contentWidth - i.containerWidth || 0 < n && 0 === s)) return !0;
                    return !0
                }

                function r(e, t) {
                    h.scrollTop -= t, h.scrollLeft -= e, g(i)
                }

                function s(e) {
                    return e.targetTouches ? e.targetTouches[0] : e
                }

                function a(e) {
                    return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                }

                function l(e) {
                    if (a(e)) {
                        var t = s(e);
                        f.pageX = t.pageX, f.pageY = t.pageY, d = (new Date).getTime(), null !== y && clearInterval(y)
                    }
                }

                function c(e, t, i) {
                    if (!h.contains(e)) return !1;
                    for (var o = e; o && o !== h;) {
                        if (o.classList.contains(x.element.consuming)) return !0;
                        var r = n(o);
                        if (i && r.overflowY.match(/(scroll|auto)/)) {
                            var s = o.scrollHeight - o.clientHeight;
                            if (0 < s && (0 < o.scrollTop && 0 > i || o.scrollTop < s && 0 < i)) return !0
                        }
                        if (t && r.overflowX.match(/(scroll|auto)/)) {
                            var a = o.scrollWidth - o.clientWidth;
                            if (0 < a && (0 < o.scrollLeft && 0 > t || o.scrollLeft < a && 0 < t)) return !0
                        }
                        o = o.parentNode
                    }
                    return !1
                }

                function u(e) {
                    if (a(e)) {
                        var t = s(e),
                            n = {
                                pageX: t.pageX,
                                pageY: t.pageY
                            },
                            i = n.pageX - f.pageX,
                            l = n.pageY - f.pageY;
                        if (c(e.target, i, l)) return;
                        r(i, l), f = n;
                        var u = (new Date).getTime(),
                            p = u - d;
                        0 < p && (m.x = i / p, m.y = l / p, d = u), o(i, l) && e.preventDefault()
                    }
                }

                function p() {
                    i.settings.swipeEasing && (clearInterval(y), y = setInterval((function () {
                        return i.isInitialized ? void clearInterval(y) : m.x || m.y ? .01 > e(m.x) && .01 > e(m.y) ? void clearInterval(y) : (r(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8)) : void clearInterval(y)
                    }), 10))
                }
                if (T.supportsTouch || T.supportsIePointer) {
                    var h = i.element,
                        f = {},
                        d = 0,
                        m = {},
                        y = null;
                    T.supportsTouch ? (i.event.bind(h, "touchstart", l), i.event.bind(h, "touchmove", u), i.event.bind(h, "touchend", p)) : T.supportsIePointer && (window.PointerEvent ? (i.event.bind(h, "pointerdown", l), i.event.bind(h, "pointermove", u), i.event.bind(h, "pointerup", p)) : window.MSPointerEvent && (i.event.bind(h, "MSPointerDown", l), i.event.bind(h, "MSPointerMove", u), i.event.bind(h, "MSPointerUp", p)))
                }
            }
        },
        C = function (e, r) {
            var s = this;
            if (void 0 === r && (r = {}), "string" == typeof e && (e = document.querySelector(e)), !e || !e.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
            for (var a in this.element = e, e.classList.add(x.main), this.settings = {
                    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                    maxScrollbarLength: null,
                    minScrollbarLength: null,
                    scrollingThreshold: 1e3,
                    scrollXMarginOffset: 0,
                    scrollYMarginOffset: 0,
                    suppressScrollX: !1,
                    suppressScrollY: !1,
                    swipeEasing: !0,
                    useBothWheelAxes: !1,
                    wheelPropagation: !0,
                    wheelSpeed: 1
                }, r) this.settings[a] = r[a];
            this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
            var l = function () {
                    return e.classList.add(x.state.focus)
                },
                c = function () {
                    return e.classList.remove(x.state.focus)
                };
            this.isRtl = "rtl" === n(e).direction, !0 === this.isRtl && e.classList.add(x.rtl), this.isNegativeScroll = function () {
                var t, n = e.scrollLeft;
                return e.scrollLeft = -1, t = 0 > e.scrollLeft, e.scrollLeft = n, t
            }(), this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, this.event = new E, this.ownerDocument = e.ownerDocument || document, this.scrollbarXRail = o(x.element.rail("x")), e.appendChild(this.scrollbarXRail), this.scrollbarX = o(x.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", l), this.event.bind(this.scrollbarX, "blur", c), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
            var u = n(this.scrollbarXRail);
            this.scrollbarXBottom = parseInt(u.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = f(u.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = f(u.borderLeftWidth) + f(u.borderRightWidth), i(this.scrollbarXRail, {
                display: "block"
            }), this.railXMarginWidth = f(u.marginLeft) + f(u.marginRight), i(this.scrollbarXRail, {
                display: ""
            }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = o(x.element.rail("y")), e.appendChild(this.scrollbarYRail), this.scrollbarY = o(x.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", l), this.event.bind(this.scrollbarY, "blur", c), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
            var p = n(this.scrollbarYRail);
            this.scrollbarYRight = parseInt(p.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = f(p.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function (e) {
                var t = n(e);
                return f(t.width) + f(t.paddingLeft) + f(t.paddingRight) + f(t.borderLeftWidth) + f(t.borderRightWidth)
            }(this.scrollbarY) : null, this.railBorderYWidth = f(p.borderTopWidth) + f(p.borderBottomWidth), i(this.scrollbarYRail, {
                display: "block"
            }), this.railYMarginHeight = f(p.marginTop) + f(p.marginBottom), i(this.scrollbarYRail, {
                display: ""
            }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                x: 0 >= e.scrollLeft ? "start" : e.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                y: 0 >= e.scrollTop ? "start" : e.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
            }, this.isAlive = !0, this.settings.handlers.forEach((function (e) {
                return S[e](s)
            })), this.lastScrollTop = t(e.scrollTop), this.lastScrollLeft = e.scrollLeft, this.event.bind(this.element, "scroll", (function (e) {
                return s.onScroll(e)
            })), g(this)
        };
    return C.prototype.update = function () {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, i(this.scrollbarXRail, {
            display: "block"
        }), i(this.scrollbarYRail, {
            display: "block"
        }), this.railXMarginWidth = f(n(this.scrollbarXRail).marginLeft) + f(n(this.scrollbarXRail).marginRight), this.railYMarginHeight = f(n(this.scrollbarYRail).marginTop) + f(n(this.scrollbarYRail).marginBottom), i(this.scrollbarXRail, {
            display: "none"
        }), i(this.scrollbarYRail, {
            display: "none"
        }), g(this), h(this, "top", 0, !1, !0), h(this, "left", 0, !1, !0), i(this.scrollbarXRail, {
            display: ""
        }), i(this.scrollbarYRail, {
            display: ""
        }))
    }, C.prototype.onScroll = function () {
        this.isAlive && (g(this), h(this, "top", this.element.scrollTop - this.lastScrollTop), h(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = t(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
    }, C.prototype.destroy = function () {
        this.isAlive && (this.event.unbindAll(), s(this.scrollbarX), s(this.scrollbarY), s(this.scrollbarXRail), s(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
    }, C.prototype.removePsClasses = function () {
        this.element.className = this.element.className.split(" ").filter((function (e) {
            return !e.match(/^ps([-_].+|)$/)
        })).join(" ")
    }, C
})),
function (e, t, n, i) {
    "use strict";

    function o(e, t, n) {
        return setTimeout(c(e, n), t)
    }

    function r(e, t, n) {
        return !!Array.isArray(e) && (s(e, n[t], n), !0)
    }

    function s(e, t, n) {
        var o;
        if (e)
            if (e.forEach) e.forEach(t, n);
            else if (e.length !== i)
            for (o = 0; o < e.length;) t.call(n, e[o], o, e), o++;
        else
            for (o in e) e.hasOwnProperty(o) && t.call(n, e[o], o, e)
    }

    function a(t, n, i) {
        var o = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
        return function () {
            var n = new Error("get-stack-trace"),
                i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                r = e.console && (e.console.warn || e.console.log);
            return r && r.call(e.console, o, i), t.apply(this, arguments)
        }
    }

    function l(e, t, n) {
        var i, o = t.prototype;
        (i = e.prototype = Object.create(o)).constructor = e, i._super = o, n && ie(i, n)
    }

    function c(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function u(e, t) {
        return typeof e == se ? e.apply(t && t[0] || i, t) : e
    }

    function p(e, t) {
        return e === i ? t : e
    }

    function h(e, t, n) {
        s(m(t), (function (t) {
            e.addEventListener(t, n, !1)
        }))
    }

    function f(e, t, n) {
        s(m(t), (function (t) {
            e.removeEventListener(t, n, !1)
        }))
    }

    function d(e, t) {
        for (; e;) {
            if (e == t) return !0;
            e = e.parentNode
        }
        return !1
    }

    function g(e, t) {
        return e.indexOf(t) > -1
    }

    function m(e) {
        return e.trim().split(/\s+/g)
    }

    function y(e, t, n) {
        if (e.indexOf && !n) return e.indexOf(t);
        for (var i = 0; i < e.length;) {
            if (n && e[i][n] == t || !n && e[i] === t) return i;
            i++
        }
        return -1
    }

    function v(e) {
        return Array.prototype.slice.call(e, 0)
    }

    function b(e, t, n) {
        for (var i = [], o = [], r = 0; r < e.length;) {
            var s = t ? e[r][t] : e[r];
            y(o, s) < 0 && i.push(e[r]), o[r] = s, r++
        }
        return n && (i = t ? i.sort((function (e, n) {
            return e[t] > n[t]
        })) : i.sort()), i
    }

    function x(e, t) {
        for (var n, o, r = t[0].toUpperCase() + t.slice(1), s = 0; s < oe.length;) {
            if ((o = (n = oe[s]) ? n + r : t) in e) return o;
            s++
        }
        return i
    }

    function w(t) {
        var n = t.ownerDocument || t;
        return n.defaultView || n.parentWindow || e
    }

    function _(e, t) {
        var n = this;
        this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
            u(e.options.enable, [e]) && n.handler(t)
        }, this.init()
    }

    function k(e, t, n) {
        var i = n.pointers.length,
            o = n.changedPointers.length,
            r = t & be && i - o == 0,
            s = t & (we | _e) && i - o == 0;
        n.isFirst = !!r, n.isFinal = !!s, r && (e.session = {}), n.eventType = t,
            function (e, t) {
                var n = e.session,
                    i = t.pointers,
                    o = i.length;
                n.firstInput || (n.firstInput = T(t)), o > 1 && !n.firstMultiple ? n.firstMultiple = T(t) : 1 === o && (n.firstMultiple = !1);
                var r = n.firstInput,
                    s = n.firstMultiple,
                    a = s ? s.center : r.center,
                    l = t.center = S(i);
                t.timeStamp = ce(), t.deltaTime = t.timeStamp - r.timeStamp, t.angle = L(a, l), t.distance = O(a, l),
                    function (e, t) {
                        var n = t.center,
                            i = e.offsetDelta || {},
                            o = e.prevDelta || {},
                            r = e.prevInput || {};
                        t.eventType !== be && r.eventType !== we || (o = e.prevDelta = {
                            x: r.deltaX || 0,
                            y: r.deltaY || 0
                        }, i = e.offsetDelta = {
                            x: n.x,
                            y: n.y
                        }), t.deltaX = o.x + (n.x - i.x), t.deltaY = o.y + (n.y - i.y)
                    }(n, t), t.offsetDirection = A(t.deltaX, t.deltaY);
                var c = C(t.deltaTime, t.deltaX, t.deltaY);
                t.overallVelocityX = c.x, t.overallVelocityY = c.y, t.overallVelocity = le(c.x) > le(c.y) ? c.x : c.y, t.scale = s ? function (e, t) {
                    return O(t[0], t[1], je) / O(e[0], e[1], je)
                }(s.pointers, i) : 1, t.rotation = s ? function (e, t) {
                    return L(t[1], t[0], je) + L(e[1], e[0], je)
                }(s.pointers, i) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length, E(n, t);
                var u = e.element;
                d(t.srcEvent.target, u) && (u = t.srcEvent.target), t.target = u
            }(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
    }

    function E(e, t) {
        var n, o, r, s, a = e.lastInterval || t,
            l = t.timeStamp - a.timeStamp;
        if (t.eventType != _e && (l > ve || a.velocity === i)) {
            var c = t.deltaX - a.deltaX,
                u = t.deltaY - a.deltaY,
                p = C(l, c, u);
            o = p.x, r = p.y, n = le(p.x) > le(p.y) ? p.x : p.y, s = A(c, u), e.lastInterval = t
        } else n = a.velocity, o = a.velocityX, r = a.velocityY, s = a.direction;
        t.velocity = n, t.velocityX = o, t.velocityY = r, t.direction = s
    }

    function T(e) {
        for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
            clientX: ae(e.pointers[n].clientX),
            clientY: ae(e.pointers[n].clientY)
        }, n++;
        return {
            timeStamp: ce(),
            pointers: t,
            center: S(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }

    function S(e) {
        var t = e.length;
        if (1 === t) return {
            x: ae(e[0].clientX),
            y: ae(e[0].clientY)
        };
        for (var n = 0, i = 0, o = 0; t > o;) n += e[o].clientX, i += e[o].clientY, o++;
        return {
            x: ae(n / t),
            y: ae(i / t)
        }
    }

    function C(e, t, n) {
        return {
            x: t / e || 0,
            y: n / e || 0
        }
    }

    function A(e, t) {
        return e === t ? ke : le(e) >= le(t) ? 0 > e ? Ee : Te : 0 > t ? Se : Ce
    }

    function O(e, t, n) {
        n || (n = Me);
        var i = t[n[0]] - e[n[0]],
            o = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + o * o)
    }

    function L(e, t, n) {
        n || (n = Me);
        var i = t[n[0]] - e[n[0]],
            o = t[n[1]] - e[n[1]];
        return 180 * Math.atan2(o, i) / Math.PI
    }

    function M() {
        this.evEl = De, this.evWin = Pe, this.pressed = !1, _.apply(this, arguments)
    }

    function j() {
        this.evEl = Re, this.evWin = qe, _.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function N() {
        this.evTarget = ze, this.evWin = Fe, this.started = !1, _.apply(this, arguments)
    }

    function D(e, t) {
        var n = v(e.touches),
            i = v(e.changedTouches);
        return t & (we | _e) && (n = b(n.concat(i), "identifier", !0)), [n, i]
    }

    function P() {
        this.evTarget = Ue, this.targetIds = {}, _.apply(this, arguments)
    }

    function I(e, t) {
        var n = v(e.touches),
            i = this.targetIds;
        if (t & (be | xe) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
        var o, r, s = v(e.changedTouches),
            a = [],
            l = this.target;
        if (r = n.filter((function (e) {
                return d(e.target, l)
            })), t === be)
            for (o = 0; o < r.length;) i[r[o].identifier] = !0, o++;
        for (o = 0; o < s.length;) i[s[o].identifier] && a.push(s[o]), t & (we | _e) && delete i[s[o].identifier], o++;
        return a.length ? [b(r.concat(a), "identifier", !0), a] : void 0
    }

    function H() {
        _.apply(this, arguments);
        var e = c(this.handler, this);
        this.touch = new P(this.manager, e), this.mouse = new M(this.manager, e), this.primaryTouch = null, this.lastTouches = []
    }

    function R(e, t) {
        e & be ? (this.primaryTouch = t.changedPointers[0].identifier, q.call(this, t)) : e & (we | _e) && q.call(this, t)
    }

    function q(e) {
        var t = e.changedPointers[0];
        if (t.identifier === this.primaryTouch) {
            var n = {
                x: t.clientX,
                y: t.clientY
            };
            this.lastTouches.push(n);
            var i = this.lastTouches;
            setTimeout((function () {
                var e = i.indexOf(n);
                e > -1 && i.splice(e, 1)
            }), Xe)
        }
    }

    function W(e) {
        for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
            var o = this.lastTouches[i],
                r = Math.abs(t - o.x),
                s = Math.abs(n - o.y);
            if (Ye >= r && Ye >= s) return !0
        }
        return !1
    }

    function z(e, t) {
        this.manager = e, this.set(t)
    }

    function F(e) {
        this.options = ie({}, this.defaults, e || {}), this.id = he++, this.manager = null, this.options.enable = p(this.options.enable, !0), this.state = nt, this.simultaneous = {}, this.requireFail = []
    }

    function B(e) {
        return e & at ? "cancel" : e & rt ? "end" : e & ot ? "move" : e & it ? "start" : ""
    }

    function U(e) {
        return e == Ce ? "down" : e == Se ? "up" : e == Ee ? "left" : e == Te ? "right" : ""
    }

    function X(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e
    }

    function Y() {
        F.apply(this, arguments)
    }

    function V() {
        Y.apply(this, arguments), this.pX = null, this.pY = null
    }

    function $() {
        Y.apply(this, arguments)
    }

    function K() {
        F.apply(this, arguments), this._timer = null, this._input = null
    }

    function Q() {
        Y.apply(this, arguments)
    }

    function G() {
        Y.apply(this, arguments)
    }

    function J() {
        F.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function Z(e, t) {
        return (t = t || {}).recognizers = p(t.recognizers, Z.defaults.preset), new ee(e, t)
    }

    function ee(e, t) {
        this.options = ie({}, Z.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = function (e) {
            return new(e.options.inputClass || (de ? j : ge ? P : fe ? H : M))(e, k)
        }(this), this.touchAction = new z(this, this.options.touchAction), te(this, !0), s(this.options.recognizers, (function (e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
        }), this)
    }

    function te(e, t) {
        var n, i = e.element;
        i.style && (s(e.options.cssProps, (function (o, r) {
            n = x(i.style, r), t ? (e.oldCssProps[n] = i.style[n], i.style[n] = o) : i.style[n] = e.oldCssProps[n] || ""
        })), t || (e.oldCssProps = {}))
    }

    function ne(e, n) {
        var i = t.createEvent("Event");
        i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
    }
    var ie, oe = ["", "webkit", "Moz", "MS", "ms", "o"],
        re = t.createElement("div"),
        se = "function",
        ae = Math.round,
        le = Math.abs,
        ce = Date.now;
    ie = "function" != typeof Object.assign ? function (e) {
        if (e === i || null === e) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var o = arguments[n];
            if (o !== i && null !== o)
                for (var r in o) o.hasOwnProperty(r) && (t[r] = o[r])
        }
        return t
    } : Object.assign;
    var ue = a((function (e, t, n) {
            for (var o = Object.keys(t), r = 0; r < o.length;)(!n || n && e[o[r]] === i) && (e[o[r]] = t[o[r]]), r++;
            return e
        }), "extend", "Use `assign`."),
        pe = a((function (e, t) {
            return ue(e, t, !0)
        }), "merge", "Use `assign`."),
        he = 1,
        fe = "ontouchstart" in e,
        de = x(e, "PointerEvent") !== i,
        ge = fe && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        me = "touch",
        ye = "mouse",
        ve = 25,
        be = 1,
        xe = 2,
        we = 4,
        _e = 8,
        ke = 1,
        Ee = 2,
        Te = 4,
        Se = 8,
        Ce = 16,
        Ae = Ee | Te,
        Oe = Se | Ce,
        Le = Ae | Oe,
        Me = ["x", "y"],
        je = ["clientX", "clientY"];
    _.prototype = {
        handler: function () {},
        init: function () {
            this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(w(this.element), this.evWin, this.domHandler)
        },
        destroy: function () {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(w(this.element), this.evWin, this.domHandler)
        }
    };
    var Ne = {
            mousedown: be,
            mousemove: xe,
            mouseup: we
        },
        De = "mousedown",
        Pe = "mousemove mouseup";
    l(M, _, {
        handler: function (e) {
            var t = Ne[e.type];
            t & be && 0 === e.button && (this.pressed = !0), t & xe && 1 !== e.which && (t = we), this.pressed && (t & we && (this.pressed = !1), this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: ye,
                srcEvent: e
            }))
        }
    });
    var Ie = {
            pointerdown: be,
            pointermove: xe,
            pointerup: we,
            pointercancel: _e,
            pointerout: _e
        },
        He = {
            2: me,
            3: "pen",
            4: ye,
            5: "kinect"
        },
        Re = "pointerdown",
        qe = "pointermove pointerup pointercancel";
    e.MSPointerEvent && !e.PointerEvent && (Re = "MSPointerDown", qe = "MSPointerMove MSPointerUp MSPointerCancel"), l(j, _, {
        handler: function (e) {
            var t = this.store,
                n = !1,
                i = e.type.toLowerCase().replace("ms", ""),
                o = Ie[i],
                r = He[e.pointerType] || e.pointerType,
                s = r == me,
                a = y(t, e.pointerId, "pointerId");
            o & be && (0 === e.button || s) ? 0 > a && (t.push(e), a = t.length - 1) : o & (we | _e) && (n = !0), 0 > a || (t[a] = e, this.callback(this.manager, o, {
                pointers: t,
                changedPointers: [e],
                pointerType: r,
                srcEvent: e
            }), n && t.splice(a, 1))
        }
    });
    var We = {
            touchstart: be,
            touchmove: xe,
            touchend: we,
            touchcancel: _e
        },
        ze = "touchstart",
        Fe = "touchstart touchmove touchend touchcancel";
    l(N, _, {
        handler: function (e) {
            var t = We[e.type];
            if (t === be && (this.started = !0), this.started) {
                var n = D.call(this, e, t);
                t & (we | _e) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: me,
                    srcEvent: e
                })
            }
        }
    });
    var Be = {
            touchstart: be,
            touchmove: xe,
            touchend: we,
            touchcancel: _e
        },
        Ue = "touchstart touchmove touchend touchcancel";
    l(P, _, {
        handler: function (e) {
            var t = Be[e.type],
                n = I.call(this, e, t);
            n && this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: me,
                srcEvent: e
            })
        }
    });
    var Xe = 2500,
        Ye = 25;
    l(H, _, {
        handler: function (e, t, n) {
            var i = n.pointerType == me,
                o = n.pointerType == ye;
            if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                if (i) R.call(this, t, n);
                else if (o && W.call(this, n)) return;
                this.callback(e, t, n)
            }
        },
        destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Ve = x(re.style, "touchAction"),
        $e = Ve !== i,
        Ke = "compute",
        Qe = "auto",
        Ge = "manipulation",
        Je = "none",
        Ze = "pan-x",
        et = "pan-y",
        tt = function () {
            if (!$e) return !1;
            var t = {},
                n = e.CSS && e.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function (i) {
                t[i] = !n || e.CSS.supports("touch-action", i)
            })), t
        }();
    z.prototype = {
        set: function (e) {
            e == Ke && (e = this.compute()), $e && this.manager.element.style && tt[e] && (this.manager.element.style[Ve] = e), this.actions = e.toLowerCase().trim()
        },
        update: function () {
            this.set(this.manager.options.touchAction)
        },
        compute: function () {
            var e = [];
            return s(this.manager.recognizers, (function (t) {
                    u(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                })),
                function (e) {
                    if (g(e, Je)) return Je;
                    var t = g(e, Ze),
                        n = g(e, et);
                    return t && n ? Je : t || n ? t ? Ze : et : g(e, Ge) ? Ge : Qe
                }(e.join(" "))
        },
        preventDefaults: function (e) {
            var t = e.srcEvent,
                n = e.offsetDirection;
            if (!this.manager.session.prevented) {
                var i = this.actions,
                    o = g(i, Je) && !tt[Je],
                    r = g(i, et) && !tt[et],
                    s = g(i, Ze) && !tt[Ze];
                if (o) {
                    var a = 1 === e.pointers.length,
                        l = e.distance < 2,
                        c = e.deltaTime < 250;
                    if (a && l && c) return
                }
                return s && r ? void 0 : o || r && n & Ae || s && n & Oe ? this.preventSrc(t) : void 0
            }
            t.preventDefault()
        },
        preventSrc: function (e) {
            this.manager.session.prevented = !0, e.preventDefault()
        }
    };
    var nt = 1,
        it = 2,
        ot = 4,
        rt = 8,
        st = rt,
        at = 16,
        lt = 32;
    F.prototype = {
        defaults: {},
        set: function (e) {
            return ie(this.options, e), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function (e) {
            if (r(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return t[(e = X(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
        },
        dropRecognizeWith: function (e) {
            return r(e, "dropRecognizeWith", this) || (e = X(e, this), delete this.simultaneous[e.id]), this
        },
        requireFailure: function (e) {
            if (r(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return -1 === y(t, e = X(e, this)) && (t.push(e), e.requireFailure(this)), this
        },
        dropRequireFailure: function (e) {
            if (r(e, "dropRequireFailure", this)) return this;
            e = X(e, this);
            var t = y(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1), this
        },
        hasRequireFailures: function () {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function (e) {
            return !!this.simultaneous[e.id]
        },
        emit: function (e) {
            function t(t) {
                n.manager.emit(t, e)
            }
            var n = this,
                i = this.state;
            rt > i && t(n.options.event + B(i)), t(n.options.event), e.additionalEvent && t(e.additionalEvent), i >= rt && t(n.options.event + B(i))
        },
        tryEmit: function (e) {
            return this.canEmit() ? this.emit(e) : void(this.state = lt)
        },
        canEmit: function () {
            for (var e = 0; e < this.requireFail.length;) {
                if (!(this.requireFail[e].state & (lt | nt))) return !1;
                e++
            }
            return !0
        },
        recognize: function (e) {
            var t = ie({}, e);
            return u(this.options.enable, [this, t]) ? (this.state & (st | at | lt) && (this.state = nt), this.state = this.process(t), void(this.state & (it | ot | rt | at) && this.tryEmit(t))) : (this.reset(), void(this.state = lt))
        },
        process: function (e) {},
        getTouchAction: function () {},
        reset: function () {}
    }, l(Y, F, {
        defaults: {
            pointers: 1
        },
        attrTest: function (e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function (e) {
            var t = this.state,
                n = e.eventType,
                i = t & (it | ot),
                o = this.attrTest(e);
            return i && (n & _e || !o) ? t | at : i || o ? n & we ? t | rt : t & it ? t | ot : it : lt
        }
    }), l(V, Y, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Le
        },
        getTouchAction: function () {
            var e = this.options.direction,
                t = [];
            return e & Ae && t.push(et), e & Oe && t.push(Ze), t
        },
        directionTest: function (e) {
            var t = this.options,
                n = !0,
                i = e.distance,
                o = e.direction,
                r = e.deltaX,
                s = e.deltaY;
            return o & t.direction || (t.direction & Ae ? (o = 0 === r ? ke : 0 > r ? Ee : Te, n = r != this.pX, i = Math.abs(e.deltaX)) : (o = 0 === s ? ke : 0 > s ? Se : Ce, n = s != this.pY, i = Math.abs(e.deltaY))), e.direction = o, n && i > t.threshold && o & t.direction
        },
        attrTest: function (e) {
            return Y.prototype.attrTest.call(this, e) && (this.state & it || !(this.state & it) && this.directionTest(e))
        },
        emit: function (e) {
            this.pX = e.deltaX, this.pY = e.deltaY;
            var t = U(e.direction);
            t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
        }
    }), l($, Y, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function () {
            return [Je]
        },
        attrTest: function (e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & it)
        },
        emit: function (e) {
            if (1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                e.additionalEvent = this.options.event + t
            }
            this._super.emit.call(this, e)
        }
    }), l(K, F, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function () {
            return [Qe]
        },
        process: function (e) {
            var t = this.options,
                n = e.pointers.length === t.pointers,
                i = e.distance < t.threshold,
                r = e.deltaTime > t.time;
            if (this._input = e, !i || !n || e.eventType & (we | _e) && !r) this.reset();
            else if (e.eventType & be) this.reset(), this._timer = o((function () {
                this.state = st, this.tryEmit()
            }), t.time, this);
            else if (e.eventType & we) return st;
            return lt
        },
        reset: function () {
            clearTimeout(this._timer)
        },
        emit: function (e) {
            this.state === st && (e && e.eventType & we ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ce(), this.manager.emit(this.options.event, this._input)))
        }
    }), l(Q, Y, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function () {
            return [Je]
        },
        attrTest: function (e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & it)
        }
    }), l(G, Y, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Ae | Oe,
            pointers: 1
        },
        getTouchAction: function () {
            return V.prototype.getTouchAction.call(this)
        },
        attrTest: function (e) {
            var t, n = this.options.direction;
            return n & (Ae | Oe) ? t = e.overallVelocity : n & Ae ? t = e.overallVelocityX : n & Oe && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && le(t) > this.options.velocity && e.eventType & we
        },
        emit: function (e) {
            var t = U(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
        }
    }), l(J, F, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function () {
            return [Ge]
        },
        process: function (e) {
            var t = this.options,
                n = e.pointers.length === t.pointers,
                i = e.distance < t.threshold,
                r = e.deltaTime < t.time;
            if (this.reset(), e.eventType & be && 0 === this.count) return this.failTimeout();
            if (i && r && n) {
                if (e.eventType != we) return this.failTimeout();
                var s = !this.pTime || e.timeStamp - this.pTime < t.interval,
                    a = !this.pCenter || O(this.pCenter, e.center) < t.posThreshold;
                if (this.pTime = e.timeStamp, this.pCenter = e.center, a && s ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = o((function () {
                    this.state = st, this.tryEmit()
                }), t.interval, this), it) : st
            }
            return lt
        },
        failTimeout: function () {
            return this._timer = o((function () {
                this.state = lt
            }), this.options.interval, this), lt
        },
        reset: function () {
            clearTimeout(this._timer)
        },
        emit: function () {
            this.state == st && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), Z.VERSION = "2.0.8", Z.defaults = {
        domEvents: !1,
        touchAction: Ke,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [Q, {
                enable: !1
            }],
            [$, {
                    enable: !1
                },
                ["rotate"]
            ],
            [G, {
                direction: Ae
            }],
            [V, {
                    direction: Ae
                },
                ["swipe"]
            ],
            [J],
            [J, {
                    event: "doubletap",
                    taps: 2
                },
                ["tap"]
            ],
            [K]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    ee.prototype = {
        set: function (e) {
            return ie(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
        },
        stop: function (e) {
            this.session.stopped = e ? 2 : 1
        },
        recognize: function (e) {
            var t = this.session;
            if (!t.stopped) {
                this.touchAction.preventDefaults(e);
                var n, i = this.recognizers,
                    o = t.curRecognizer;
                (!o || o && o.state & st) && (o = t.curRecognizer = null);
                for (var r = 0; r < i.length;) n = i[r], 2 === t.stopped || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(e), !o && n.state & (it | ot | rt) && (o = t.curRecognizer = n), r++
            }
        },
        get: function (e) {
            if (e instanceof F) return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++)
                if (t[n].options.event == e) return t[n];
            return null
        },
        add: function (e) {
            if (r(e, "add", this)) return this;
            var t = this.get(e.options.event);
            return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
        },
        remove: function (e) {
            if (r(e, "remove", this)) return this;
            if (e = this.get(e)) {
                var t = this.recognizers,
                    n = y(t, e); - 1 !== n && (t.splice(n, 1), this.touchAction.update())
            }
            return this
        },
        on: function (e, t) {
            if (e !== i && t !== i) {
                var n = this.handlers;
                return s(m(e), (function (e) {
                    n[e] = n[e] || [], n[e].push(t)
                })), this
            }
        },
        off: function (e, t) {
            if (e !== i) {
                var n = this.handlers;
                return s(m(e), (function (e) {
                    t ? n[e] && n[e].splice(y(n[e], t), 1) : delete n[e]
                })), this
            }
        },
        emit: function (e, t) {
            this.options.domEvents && ne(e, t);
            var n = this.handlers[e] && this.handlers[e].slice();
            if (n && n.length) {
                t.type = e, t.preventDefault = function () {
                    t.srcEvent.preventDefault()
                };
                for (var i = 0; i < n.length;) n[i](t), i++
            }
        },
        destroy: function () {
            this.element && te(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, ie(Z, {
        INPUT_START: be,
        INPUT_MOVE: xe,
        INPUT_END: we,
        INPUT_CANCEL: _e,
        STATE_POSSIBLE: nt,
        STATE_BEGAN: it,
        STATE_CHANGED: ot,
        STATE_ENDED: rt,
        STATE_RECOGNIZED: st,
        STATE_CANCELLED: at,
        STATE_FAILED: lt,
        DIRECTION_NONE: ke,
        DIRECTION_LEFT: Ee,
        DIRECTION_RIGHT: Te,
        DIRECTION_UP: Se,
        DIRECTION_DOWN: Ce,
        DIRECTION_HORIZONTAL: Ae,
        DIRECTION_VERTICAL: Oe,
        DIRECTION_ALL: Le,
        Manager: ee,
        Input: _,
        TouchAction: z,
        TouchInput: P,
        MouseInput: M,
        PointerEventInput: j,
        TouchMouseInput: H,
        SingleTouchInput: N,
        Recognizer: F,
        AttrRecognizer: Y,
        Tap: J,
        Pan: V,
        Swipe: G,
        Pinch: $,
        Rotate: Q,
        Press: K,
        on: h,
        off: f,
        each: s,
        merge: pe,
        extend: ue,
        assign: ie,
        inherit: l,
        bindFn: c,
        prefixed: x
    }), (void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer = Z, "function" == typeof define && define.amd ? define((function () {
        return Z
    })) : "undefined" != typeof module && module.exports ? module.exports = Z : e.Hammer = Z
}(window, document), Unison = function () {
        "use strict";
        var e, t = window,
            n = document,
            i = n.head,
            o = {},
            r = !1,
            s = {
                parseMQ: function (e) {
                    return t.getComputedStyle(e, null).getPropertyValue("font-family").replace(/"/g, "").replace(/'/g, "")
                },
                debounce: function (e, t, n) {
                    var i;
                    return function () {
                        var o = this,
                            r = arguments;
                        clearTimeout(i), i = setTimeout((function () {
                            i = null, n || e.apply(o, r)
                        }), t), n && !i && e.apply(o, r)
                    }
                },
                isObject: function (e) {
                    return "object" == typeof e
                },
                isUndefined: function (e) {
                    return void 0 === e
                }
            },
            a = {
                on: function (e, t) {
                    s.isObject(o[e]) || (o[e] = []), o[e].push(t)
                },
                emit: function (e, t) {
                    if (s.isObject(o[e]))
                        for (var n = o[e].slice(), i = 0; i < n.length; i++) n[i].call(this, t)
                }
            },
            l = {
                all: function () {
                    for (var e = {}, t = s.parseMQ(n.querySelector("title")).split(","), i = 0; i < t.length; i++) {
                        var o = t[i].trim().split(" ");
                        e[o[0]] = o[1]
                    }
                    return r ? e : null
                },
                now: function (e) {
                    var t = s.parseMQ(i).split(" "),
                        n = {
                            name: t[0],
                            width: t[1]
                        };
                    return r ? s.isUndefined(e) ? n : e(n) : null
                },
                update: function () {
                    l.now((function (t) {
                        t.name !== e && (a.emit(t.name), a.emit("change", t), e = t.name)
                    }))
                }
            };
        return t.onresize = s.debounce(l.update, 100), n.addEventListener("DOMContentLoaded", (function () {
            r = "none" !== t.getComputedStyle(i, null).getPropertyValue("clear"), l.update()
        })), {
            fetch: {
                all: l.all,
                now: l.now
            },
            on: a.on,
            emit: a.emit,
            util: {
                debounce: s.debounce,
                isObject: s.isObject
            }
        }
    }(),
    function () {
        "use strict";

        function e(e) {
            function t(t, i) {
                var r, d, g = t == window,
                    m = i && void 0 !== i.message ? i.message : void 0;
                if (!(i = e.extend({}, e.blockUI.defaults, i || {})).ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                    if (i.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, i.overlayCSS || {}), r = e.extend({}, e.blockUI.defaults.css, i.css || {}), i.onOverlayClick && (i.overlayCSS.cursor = "pointer"), d = e.extend({}, e.blockUI.defaults.themedCSS, i.themedCSS || {}), m = void 0 === m ? i.message : m, g && h && n(window, {
                            fadeOut: 0
                        }), m && "string" != typeof m && (m.parentNode || m.jquery)) {
                        var y = m.jquery ? m[0] : m,
                            v = {};
                        e(t).data("blockUI.history", v), v.el = y, v.parent = y.parentNode, v.display = y.style.display, v.position = y.style.position, v.parent && v.parent.removeChild(y)
                    }
                    e(t).data("blockUI.onUnblock", i.onUnblock);
                    var b, x, w, _, k = i.baseZ;
                    b = e(c || i.forceIframe ? '<iframe class="blockUI" style="z-index:' + k++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + i.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), x = e(i.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + k++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + k++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), i.theme && g ? (_ = '<div class="blockUI ' + i.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (k + 10) + ';display:none;position:fixed">', i.title && (_ += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), _ += '<div class="ui-widget-content ui-dialog-content"></div>', _ += "</div>") : i.theme ? (_ = '<div class="blockUI ' + i.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (k + 10) + ';display:none;position:absolute">', i.title && (_ += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), _ += '<div class="ui-widget-content ui-dialog-content"></div>', _ += "</div>") : _ = g ? '<div class="blockUI ' + i.blockMsgClass + ' blockPage" style="z-index:' + (k + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + i.blockMsgClass + ' blockElement" style="z-index:' + (k + 10) + ';display:none;position:absolute"></div>', w = e(_), m && (i.theme ? (w.css(d), w.addClass("ui-widget-content")) : w.css(r)), i.theme || x.css(i.overlayCSS), x.css("position", g ? "fixed" : "absolute"), (c || i.forceIframe) && b.css("opacity", 0);
                    var E = [b, x, w],
                        T = e(g ? "body" : t);
                    e.each(E, (function () {
                        this.appendTo(T)
                    })), i.theme && i.draggable && e.fn.draggable && w.draggable({
                        handle: ".ui-dialog-titlebar",
                        cancel: "li"
                    });
                    var S = p && (!e.support.boxModel || e("object,embed", g ? null : t).length > 0);
                    if (u || S) {
                        if (g && i.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !g) var C = a(t, "borderTopWidth"),
                            A = a(t, "borderLeftWidth"),
                            O = C ? "(0 - " + C + ")" : 0,
                            L = A ? "(0 - " + A + ")" : 0;
                        e.each(E, (function (e, t) {
                            var n = t[0].style;
                            if (n.position = "absolute", 2 > e) g ? n.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + i.quirksmodeOffsetHack + ') + "px"') : n.setExpression("height", 'this.parentNode.offsetHeight + "px"'), g ? n.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : n.setExpression("width", 'this.parentNode.offsetWidth + "px"'), L && n.setExpression("left", L), O && n.setExpression("top", O);
                            else if (i.centerY) g && n.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), n.marginTop = 0;
                            else if (!i.centerY && g) {
                                var o = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (i.css && i.css.top ? parseInt(i.css.top, 10) : 0) + ') + "px"';
                                n.setExpression("top", o)
                            }
                        }))
                    }
                    if (m && (i.theme ? w.find(".ui-widget-content").append(m) : w.append(m), (m.jquery || m.nodeType) && e(m).show()), (c || i.forceIframe) && i.showOverlay && b.show(), i.fadeIn) {
                        var M = i.onBlock ? i.onBlock : l,
                            j = i.showOverlay && !m ? M : l,
                            N = m ? M : l;
                        i.showOverlay && x._fadeIn(i.fadeIn, j), m && w._fadeIn(i.fadeIn, N)
                    } else i.showOverlay && x.show(), m && w.show(), i.onBlock && i.onBlock.bind(w)();
                    if (o(1, t, i), g ? (h = w[0], f = e(i.focusableElements, h), i.focusInput && setTimeout(s, 20)) : function (e, t, n) {
                            var i = e.parentNode,
                                o = e.style,
                                r = (i.offsetWidth - e.offsetWidth) / 2 - a(i, "borderLeftWidth"),
                                s = (i.offsetHeight - e.offsetHeight) / 2 - a(i, "borderTopWidth");
                            t && (o.left = r > 0 ? r + "px" : "0"), n && (o.top = s > 0 ? s + "px" : "0")
                        }(w[0], i.centerX, i.centerY), i.timeout) {
                        var D = setTimeout((function () {
                            g ? e.unblockUI(i) : e(t).unblock(i)
                        }), i.timeout);
                        e(t).data("blockUI.timeout", D)
                    }
                }
            }

            function n(t, n) {
                var r, s, a = t == window,
                    l = e(t),
                    c = l.data("blockUI.history"),
                    u = l.data("blockUI.timeout");
                u && (clearTimeout(u), l.removeData("blockUI.timeout")), n = e.extend({}, e.blockUI.defaults, n || {}), o(0, t, n), null === n.onUnblock && (n.onUnblock = l.data("blockUI.onUnblock"), l.removeData("blockUI.onUnblock")), s = a ? e("body").children().filter(".blockUI").add("body > .blockUI") : l.find(">.blockUI"), n.cursorReset && (s.length > 1 && (s[1].style.cursor = n.cursorReset), s.length > 2 && (s[2].style.cursor = n.cursorReset)), a && (h = f = null), n.fadeOut ? (r = s.length, s.stop().fadeOut(n.fadeOut, (function () {
                    0 == --r && i(s, c, n, t)
                }))) : i(s, c, n, t)
            }

            function i(t, n, i, o) {
                var r = e(o);
                if (!r.data("blockUI.isBlocked")) {
                    t.each((function (e, t) {
                        this.parentNode && this.parentNode.removeChild(this)
                    })), n && n.el && (n.el.style.display = n.display, n.el.style.position = n.position, n.el.style.cursor = "default", n.parent && n.parent.appendChild(n.el), r.removeData("blockUI.history")), r.data("blockUI.static") && r.css("position", "static"), "function" == typeof i.onUnblock && i.onUnblock(o, i);
                    var s = e(document.body),
                        a = s.width(),
                        l = s[0].style.width;
                    s.width(a - 1).width(a), s[0].style.width = l
                }
            }

            function o(t, n, i) {
                var o = n == window,
                    s = e(n);
                if ((t || (!o || h) && (o || s.data("blockUI.isBlocked"))) && (s.data("blockUI.isBlocked", t), o && i.bindEvents && (!t || i.showOverlay))) {
                    var a = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                    t ? e(document).bind(a, i, r) : e(document).unbind(a, r)
                }
            }

            function r(t) {
                if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && h && t.data.constrainTabKey) {
                    var n = f,
                        i = !t.shiftKey && t.target === n[n.length - 1],
                        o = t.shiftKey && t.target === n[0];
                    if (i || o) return setTimeout((function () {
                        s(o)
                    }), 10), !1
                }
                var r = t.data,
                    a = e(t.target);
                return a.hasClass("blockOverlay") && r.onOverlayClick && r.onOverlayClick(t), a.parents("div." + r.blockMsgClass).length > 0 || 0 === a.parents().children().filter("div.blockUI").length
            }

            function s(e) {
                if (f) {
                    var t = f[!0 === e ? f.length - 1 : 0];
                    t && t.focus()
                }
            }

            function a(t, n) {
                return parseInt(e.css(t, n), 10) || 0
            }
            e.fn._fadeIn = e.fn.fadeIn;
            var l = e.noop || function () {},
                c = /MSIE/.test(navigator.userAgent),
                u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
                p = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
            e.blockUI = function (e) {
                t(window, e)
            }, e.unblockUI = function (e) {
                n(window, e)
            }, e.growlUI = function (t, n, i, o) {
                var r = e('<div class="growlUI"></div>');
                t && r.append("<h1>" + t + "</h1>"), n && r.append("<h2>" + n + "</h2>"), void 0 === i && (i = 3e3);
                var s = function (t) {
                    t = t || {}, e.blockUI({
                        message: r,
                        fadeIn: void 0 !== t.fadeIn ? t.fadeIn : 700,
                        fadeOut: void 0 !== t.fadeOut ? t.fadeOut : 1e3,
                        timeout: void 0 !== t.timeout ? t.timeout : i,
                        centerY: !1,
                        showOverlay: !1,
                        onUnblock: o,
                        css: e.blockUI.defaults.growlCSS
                    })
                };
                s(), r.css("opacity"), r.mouseover((function () {
                    s({
                        fadeIn: 0,
                        timeout: 3e4
                    });
                    var t = e(".blockMsg");
                    t.stop(), t.fadeTo(300, 1)
                })).mouseout((function () {
                    e(".blockMsg").fadeOut(1e3)
                }))
            }, e.fn.block = function (n) {
                if (this[0] === window) return e.blockUI(n), this;
                var i = e.extend({}, e.blockUI.defaults, n || {});
                return this.each((function () {
                    var t = e(this);
                    i.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                        fadeOut: 0
                    })
                })), this.each((function () {
                    "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, n)
                }))
            }, e.fn.unblock = function (t) {
                return this[0] === window ? (e.unblockUI(t), this) : this.each((function () {
                    n(this, t)
                }))
            }, e.blockUI.version = 2.7, e.blockUI.defaults = {
                message: "<h1>Please wait...</h1>",
                title: null,
                draggable: !0,
                theme: !1,
                css: {
                    padding: 0,
                    margin: 0,
                    width: "30%",
                    top: "40%",
                    left: "35%",
                    textAlign: "center",
                    color: "#000",
                    border: "3px solid #aaa",
                    backgroundColor: "#fff",
                    cursor: "wait"
                },
                themedCSS: {
                    width: "30%",
                    top: "40%",
                    left: "35%"
                },
                overlayCSS: {
                    backgroundColor: "#000",
                    opacity: .6,
                    cursor: "wait"
                },
                cursorReset: "default",
                growlCSS: {
                    width: "350px",
                    top: "10px",
                    left: "",
                    right: "10px",
                    border: "none",
                    padding: "5px",
                    opacity: .6,
                    cursor: "default",
                    color: "#fff",
                    backgroundColor: "#000",
                    "-webkit-border-radius": "10px",
                    "-moz-border-radius": "10px",
                    "border-radius": "10px"
                },
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
                forceIframe: !1,
                baseZ: 1e3,
                centerX: !0,
                centerY: !0,
                allowBodyStretch: !0,
                bindEvents: !0,
                constrainTabKey: !0,
                fadeIn: 200,
                fadeOut: 400,
                timeout: 0,
                showOverlay: !0,
                focusInput: !0,
                focusableElements: ":input:enabled:visible",
                onBlock: null,
                onUnblock: null,
                onOverlayClick: null,
                quirksmodeOffsetHack: 4,
                blockMsgClass: "blockMsg",
                ignoreIfBlocked: !1
            };
            var h = null,
                f = []
        }
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
    }(),
    function () {
        function e(e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }
        var t, n, i, o, r, s, a, l, c, u, p, h, f, d, g, m, y, v, b, x, w, _, k, E, T, S, C, A, O, L, M, j, N, D, P, I, H, R, q, W, z, F, B, U, X, Y, V = [].slice,
            $ = {}.hasOwnProperty,
            K = function (e, t) {
                for (var n in t) $.call(t, n) && (e[n] = t[n]);

                function i() {
                    this.constructor = e
                }
                return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
            },
            Q = [].indexOf || function (e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };

        function G() {}
        for (v = {
                className: "",
                catchupTime: 100,
                initialRate: .03,
                minTime: 250,
                ghostTime: 100,
                maxProgressPerFrame: 20,
                easeFactor: 1.25,
                startOnPageLoad: !0,
                restartOnPushState: !0,
                restartOnRequestAfter: 500,
                target: "body",
                elements: {
                    checkInterval: 100,
                    selectors: ["body"]
                },
                eventLag: {
                    minSamples: 10,
                    sampleCount: 3,
                    lagThreshold: 3
                },
                ajax: {
                    trackMethods: ["GET"],
                    trackWebSockets: !0,
                    ignoreURLs: []
                }
            }, S = function () {
                var e;
                return null != (e = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? e : +new Date
            }, A = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, y = window.cancelAnimationFrame || window.mozCancelAnimationFrame, h = function (e, t, n) {
                if ("function" == typeof e.addEventListener) return e.addEventListener(t, n, !1);
                var i;
                "function" != typeof e["on" + t] || "object" != typeof e["on" + t].eventListeners ? (i = new o, "function" == typeof e["on" + t] && i.on(t, e["on" + t]), e["on" + t] = function (e) {
                    return i.trigger(t, e)
                }, e["on" + t].eventListeners = i) : i = e["on" + t].eventListeners, i.on(t, n)
            }, null == A && (A = function (e) {
                return setTimeout(e, 50)
            }, y = function (e) {
                return clearTimeout(e)
            }), L = function (e) {
                var t = S(),
                    n = function () {
                        var i = S() - t;
                        return 33 <= i ? (t = S(), e(i, (function () {
                            return A(n)
                        }))) : setTimeout(n, 33 - i)
                    };
                return n()
            }, O = function () {
                var e = arguments[0],
                    t = arguments[1],
                    n = 3 <= arguments.length ? V.call(arguments, 2) : [];
                return "function" == typeof e[t] ? e[t].apply(e, n) : e[t]
            }, b = function () {
                for (var e, t, n, i = arguments[0], o = 2 <= arguments.length ? V.call(arguments, 1) : [], r = 0, s = o.length; r < s; r++)
                    if (t = o[r])
                        for (e in t) $.call(t, e) && (n = t[e], null != i[e] && "object" == typeof i[e] && null != n && "object" == typeof n ? b(i[e], n) : i[e] = n);
                return i
            }, d = function (e) {
                for (var t, n, i = t = 0, o = 0, r = e.length; o < r; o++) n = e[o], i += Math.abs(n), t++;
                return i / t
            }, w = function (e, t) {
                var n, i;
                if (null == e && (e = "options"), null == t && (t = !0), i = document.querySelector("[data-pace-" + e + "]")) {
                    if (n = i.getAttribute("data-pace-" + e), !t) return n;
                    try {
                        return JSON.parse(n)
                    } catch (e) {
                        return "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", e) : void 0
                    }
                }
            }, G.prototype.on = function (e, t, n, i) {
                var o;
                return null == i && (i = !1), null == this.bindings && (this.bindings = {}), null == (o = this.bindings)[e] && (o[e] = []), this.bindings[e].push({
                    handler: t,
                    ctx: n,
                    once: i
                })
            }, G.prototype.once = function (e, t, n) {
                return this.on(e, t, n, !0)
            }, G.prototype.off = function (e, t) {
                var n, i, o;
                if (null != (null != (i = this.bindings) ? i[e] : void 0)) {
                    if (null == t) return delete this.bindings[e];
                    for (n = 0, o = []; n < this.bindings[e].length;) this.bindings[e][n].handler === t ? o.push(this.bindings[e].splice(n, 1)) : o.push(n++);
                    return o
                }
            }, G.prototype.trigger = function () {
                var e, t, n, i, o, r, s = arguments[0],
                    a = 2 <= arguments.length ? V.call(arguments, 1) : [];
                if (null != (i = this.bindings) && i[s]) {
                    for (n = 0, r = []; n < this.bindings[s].length;) t = (o = this.bindings[s][n]).handler, e = o.ctx, o = o.once, t.apply(null != e ? e : this, a), o ? r.push(this.bindings[s].splice(n, 1)) : r.push(n++);
                    return r
                }
            }, Y = G, s = window.Pace || {}, window.Pace = s, b(s, Y.prototype), C = s.options = b({}, v, window.paceOptions, w()), W = 0, F = (U = ["ajax", "document", "eventLag", "elements"]).length; W < F; W++) !0 === C[D = U[W]] && (C[D] = v[D]);

        function J() {
            return J.__super__.constructor.apply(this, arguments)
        }

        function Z() {
            this.progress = 0
        }

        function ee() {
            this.bindings = {}
        }

        function te() {
            var e, t = this;
            te.__super__.constructor.apply(this, arguments), e = function (e) {
                var n = e.open;
                return e.open = function (i, o, r) {
                    return N(i) && t.trigger("request", {
                        type: i,
                        url: o,
                        request: e
                    }), n.apply(e, arguments)
                }
            }, window.XMLHttpRequest = function (t) {
                return t = new q(t), e(t), t
            };
            try {
                x(window.XMLHttpRequest, q)
            } catch (e) {}
            if (null != R) {
                window.XDomainRequest = function () {
                    var t = new R;
                    return e(t), t
                };
                try {
                    x(window.XDomainRequest, R)
                } catch (e) {}
            }
            if (null != H && C.ajax.trackWebSockets) {
                window.WebSocket = function (e, n) {
                    var i = null != n ? new H(e, n) : new H(e);
                    return N("socket") && t.trigger("request", {
                        type: "socket",
                        url: e,
                        protocols: n,
                        request: i
                    }), i
                };
                try {
                    x(window.WebSocket, H)
                } catch (e) {}
            }
        }

        function ne() {
            this.complete = e(this.complete, this);
            var t = this;
            this.elements = [], _().on("request", (function () {
                return t.watch.apply(t, arguments)
            }))
        }

        function ie(t) {
            var n, o, r, s;
            for (null == t && (t = {}), this.complete = e(this.complete, this), this.elements = [], null == t.selectors && (t.selectors = []), o = 0, r = (s = t.selectors).length; o < r; o++) n = s[o], this.elements.push(new i(n, this.complete))
        }

        function oe(e, t) {
            this.selector = e, this.completeCallback = t, this.progress = 0, this.check()
        }

        function re() {
            var e, t, n = this;
            this.progress = null != (t = this.states[document.readyState]) ? t : 100, e = document.onreadystatechange, document.onreadystatechange = function () {
                return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof e ? e.apply(null, arguments) : void 0
            }
        }

        function se(e) {
            this.source = e, this.last = this.sinceLastUpdate = 0, this.rate = C.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = O(this.source, "progress"))
        }
        K(J, Y = Error), r = J, Z.prototype.getElement = function () {
            var e;
            if (null == this.el) {
                if (!(e = document.querySelector(C.target))) throw new r;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/(pace-done )|/, "pace-running ");
                var t = "" !== C.className ? " " + C.className : "";
                this.el.innerHTML = '<div class="pace-progress' + t + '">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != e.firstChild ? e.insertBefore(this.el, e.firstChild) : e.appendChild(this.el)
            }
            return this.el
        }, Z.prototype.finish = function () {
            var e = this.getElement();
            return e.className = e.className.replace("pace-active", "pace-inactive"), document.body.className = document.body.className.replace("pace-running ", "pace-done ")
        }, Z.prototype.update = function (e) {
            return this.progress = e, s.trigger("progress", e), this.render()
        }, Z.prototype.destroy = function () {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (e) {
                r = e
            }
            return this.el = void 0
        }, Z.prototype.render = function () {
            var e, t, n, i, o, r, a;
            if (null == document.querySelector(C.target)) return !1;
            for (e = this.getElement(), i = "translate3d(" + this.progress + "%, 0, 0)", o = 0, r = (a = ["webkitTransform", "msTransform", "transform"]).length; o < r; o++) t = a[o], e.children[0].style[t] = i;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (e.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), 100 <= this.progress ? n = "99" : (n = this.progress < 10 ? "0" : "", n += 0 | this.progress), e.children[0].setAttribute("data-progress", "" + n)), s.trigger("change", this.progress), this.lastRenderedProgress = this.progress
        }, Z.prototype.done = function () {
            return 100 <= this.progress
        }, n = Z, ee.prototype.trigger = function (e, t) {
            var n, i, o, r, s;
            if (null != this.bindings[e]) {
                for (s = [], i = 0, o = (r = this.bindings[e]).length; i < o; i++) n = r[i], s.push(n.call(this, t));
                return s
            }
        }, ee.prototype.on = function (e, t) {
            var n;
            return null == (n = this.bindings)[e] && (n[e] = []), this.bindings[e].push(t)
        }, o = ee, q = window.XMLHttpRequest, R = window.XDomainRequest, H = window.WebSocket, x = function (e, t) {
            var n, i = [];
            for (n in t.prototype) try {
                null == e[n] && "function" != typeof t[n] ? "function" == typeof Object.defineProperty ? i.push(Object.defineProperty(e, n, {
                    get: function (e) {
                        return function () {
                            return t.prototype[e]
                        }
                    }(n),
                    configurable: !0,
                    enumerable: !0
                })) : i.push(e[n] = t.prototype[n]) : i.push(void 0)
            } catch (e) {}
            return i
        }, E = [], s.ignore = function () {
            var e = arguments[0],
                t = 2 <= arguments.length ? V.call(arguments, 1) : [];
            return E.unshift("ignore"), t = e.apply(null, t), E.shift(), t
        }, s.track = function () {
            var e = arguments[0],
                t = 2 <= arguments.length ? V.call(arguments, 1) : [];
            return E.unshift("track"), t = e.apply(null, t), E.shift(), t
        }, N = function (e) {
            if (null == e && (e = "GET"), "track" === E[0]) return "force";
            if (!E.length && C.ajax) {
                if ("socket" === e && C.ajax.trackWebSockets) return !0;
                if (e = e.toUpperCase(), 0 <= Q.call(C.ajax.trackMethods, e)) return !0
            }
            return !1
        }, K(te, o), a = te, z = null, j = function (e) {
            for (var t, n = C.ajax.ignoreURLs, i = 0, o = n.length; i < o; i++)
                if ("string" == typeof (t = n[i])) {
                    if (-1 !== e.indexOf(t)) return !0
                } else if (t.test(e)) return !0;
            return !1
        }, (_ = function () {
            return z = null == z ? new a : z
        })().on("request", (function (e) {
            var n, i = e.type,
                o = e.request,
                r = e.url;
            if (!j(r)) return s.running || !1 === C.restartOnRequestAfter && "force" !== N(i) ? void 0 : (n = arguments, "boolean" == typeof (r = C.restartOnRequestAfter || 0) && (r = 0), setTimeout((function () {
                var e, r, a, l, c = "socket" === i ? o.readyState < 1 : 0 < (c = o.readyState) && c < 4;
                if (c) {
                    for (s.restart(), l = [], e = 0, r = (a = s.sources).length; e < r; e++) {
                        if ((D = a[e]) instanceof t) {
                            D.watch.apply(D, n);
                            break
                        }
                        l.push(void 0)
                    }
                    return l
                }
            }), r))
        })), ne.prototype.watch = function (e) {
            var t = e.type,
                n = e.request;
            e = e.url;
            if (!j(e)) return n = new("socket" === t ? u : p)(n, this.complete), this.elements.push(n)
        }, ne.prototype.complete = function (e) {
            return this.elements = this.elements.filter((function (t) {
                return t !== e
            }))
        }, t = ne, p = function (e, t) {
            var n, i, o, r, s = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (h(e, "progress", (function (e) {
                        return e.lengthComputable ? s.progress = 100 * e.loaded / e.total : s.progress = s.progress + (100 - s.progress) / 2
                    })), n = 0, i = (r = ["load", "abort", "timeout", "error"]).length; n < i; n++) h(e, r[n], (function () {
                    return t(s), s.progress = 100
                }));
            else o = e.onreadystatechange, e.onreadystatechange = function () {
                var n;
                return 0 === (n = e.readyState) || 4 === n ? (t(s), s.progress = 100) : 3 === e.readyState && (s.progress = 50), "function" == typeof o ? o.apply(null, arguments) : void 0
            }
        }, u = function (e, t) {
            for (var n, i = this, o = this.progress = 0, r = (n = ["error", "open"]).length; o < r; o++) h(e, n[o], (function () {
                return t(i), i.progress = 100
            }))
        }, ie.prototype.complete = function (e) {
            return this.elements = this.elements.filter((function (t) {
                return t !== e
            }))
        }, w = ie, oe.prototype.check = function () {
            var e = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout((function () {
                return e.check()
            }), C.elements.checkInterval)
        }, oe.prototype.done = function () {
            return this.completeCallback(this), this.completeCallback = null, this.progress = 100
        }, i = oe, re.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, Y = re, K = function () {
            var e, t, n, i, o, r = this;
            this.progress = 0, o = [], i = 0, n = S(), t = setInterval((function () {
                var s = S() - n - 50;
                return n = S(), o.push(s), o.length > C.eventLag.sampleCount && o.shift(), e = d(o), ++i >= C.eventLag.minSamples && e < C.eventLag.lagThreshold ? (r.progress = 100, clearInterval(t)) : r.progress = 3 / (e + 3) * 100
            }), 50)
        }, se.prototype.tick = function (e, t) {
            return 100 <= (t = null == t ? O(this.source, "progress") : t) && (this.done = !0), t === this.last ? this.sinceLastUpdate += e : (this.sinceLastUpdate && (this.rate = (t - this.last) / this.sinceLastUpdate), this.catchup = (t - this.progress) / C.catchupTime, this.sinceLastUpdate = 0, this.last = t), t > this.progress && (this.progress += this.catchup * e), t = 1 - Math.pow(this.progress / 100, C.easeFactor), this.progress += t * this.rate * e, this.progress = Math.min(this.lastProgress + C.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, c = se, m = f = I = g = M = P = null, s.running = !1, k = function () {
            if (C.restartOnPushState) return s.restart()
        }, null != window.history.pushState && (B = window.history.pushState, window.history.pushState = function () {
            return k(), B.apply(window.history, arguments)
        }), null != window.history.replaceState && (X = window.history.replaceState, window.history.replaceState = function () {
            return k(), X.apply(window.history, arguments)
        }), l = {
            ajax: t,
            elements: w,
            document: Y,
            eventLag: K
        }, (T = function () {
            var e, t, i, o, r, a, u, p;
            for (s.sources = P = [], t = 0, o = (a = ["ajax", "elements", "document", "eventLag"]).length; t < o; t++) !1 !== C[e = a[t]] && P.push(new l[e](C[e]));
            for (i = 0, r = (p = null != (u = C.extraSources) ? u : []).length; i < r; i++) D = p[i], P.push(new D(C));
            return s.bar = g = new n, M = [], I = new c
        })(), s.stop = function () {
            return s.trigger("stop"), s.running = !1, g.destroy(), m = !0, null != f && ("function" == typeof y && y(f), f = null), T()
        }, s.restart = function () {
            return s.trigger("restart"), s.stop(), s.start()
        }, s.go = function () {
            var e;
            return s.running = !0, g.render(), e = S(), m = !1, f = L((function (t, n) {
                g.progress;
                for (var i, o, r, a, l, u, p, h, f, d, y = u = 0, v = !0, b = p = 0, x = P.length; p < x; b = ++p)
                    for (D = P[b], l = null != M[b] ? M[b] : M[b] = [], r = h = 0, f = (o = null != (d = D.elements) ? d : [D]).length; h < f; r = ++h) a = o[r], v &= (a = null != l[r] ? l[r] : l[r] = new c(a)).done, a.done || (y++, u += a.tick(t));
                return i = u / y, g.update(I.tick(t, i)), g.done() || v || m ? (g.update(100), s.trigger("done"), setTimeout((function () {
                    return g.finish(), s.running = !1, s.trigger("hide")
                }), Math.max(C.ghostTime, Math.max(C.minTime - (S() - e), 0)))) : n()
            }))
        }, s.start = function (e) {
            b(C, e), s.running = !0;
            try {
                g.render()
            } catch (e) {
                r = e
            }
            return document.querySelector(".pace") ? (s.trigger("start"), s.go()) : setTimeout(s.start, 50)
        }, "function" == typeof define && define.amd ? define((function () {
            return s
        })) : "object" == typeof exports ? module.exports = s : C.startOnPageLoad && s.start()
    }.call(this),
    function (e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], (function () {
            return e.Waves = t.call(e), e.Waves
        })) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
    }("object" == typeof global ? global : this, (function () {
        "use strict";
        var e = e || {},
            t = document.querySelectorAll.bind(document),
            n = Object.prototype.toString,
            i = "ontouchstart" in window;

        function o(e) {
            var t = typeof e;
            return "function" == t || "object" == t && !!e
        }

        function r(e) {
            var i, r = n.call(e);
            return "[object String]" === r ? t(e) : o(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(r) && e.hasOwnProperty("length") ? e : o(i = e) && 0 < i.nodeType ? [e] : []
        }

        function s(e) {
            var t, n, i, o = {
                    top: 0,
                    left: 0
                },
                r = e && e.ownerDocument,
                s = r.documentElement;
            return void 0 !== e.getBoundingClientRect && (o = e.getBoundingClientRect()), t = null !== (i = n = r) && i === i.window ? n : 9 === n.nodeType && n.defaultView, {
                top: o.top + t.pageYOffset - s.clientTop,
                left: o.left + t.pageXOffset - s.clientLeft
            }
        }

        function a(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
            return t
        }
        var l = {
                duration: 750,
                delay: 200,
                show: function (e, t, n) {
                    if (2 === e.button) return !1;
                    t = t || this;
                    var i = document.createElement("div");
                    i.className = "waves-ripple waves-rippling", t.appendChild(i);
                    var o = s(t),
                        r = 0,
                        c = 0;
                    c = 0 <= (c = "touches" in e && e.touches.length ? (r = e.touches[0].pageY - o.top, e.touches[0].pageX - o.left) : (r = e.pageY - o.top, e.pageX - o.left)) ? c : 0, r = 0 <= r ? r : 0;
                    var u = "scale(" + t.clientWidth / 100 * 3 + ")",
                        p = "translate(0,0)";
                    n && (p = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", c), i.setAttribute("data-y", r), i.setAttribute("data-scale", u), i.setAttribute("data-translate", p);
                    var h = {
                        top: r + "px",
                        left: c + "px"
                    };
                    i.classList.add("waves-notransition"), i.setAttribute("style", a(h)), i.classList.remove("waves-notransition"), h["-webkit-transform"] = u + " " + p, h["-moz-transform"] = u + " " + p, h["-ms-transform"] = u + " " + p, h["-o-transform"] = u + " " + p, h.transform = u + " " + p, h.opacity = "1";
                    var f = "mousemove" === e.type ? 2500 : l.duration;
                    h["-webkit-transition-duration"] = f + "ms", h["-moz-transition-duration"] = f + "ms", h["-o-transition-duration"] = f + "ms", h["transition-duration"] = f + "ms", i.setAttribute("style", a(h))
                },
                hide: function (e, t) {
                    for (var n = (t = t || this).getElementsByClassName("waves-rippling"), o = 0, r = n.length; o < r; o++) u(e, t, n[o]);
                    i && (t.removeEventListener("touchend", l.hide), t.removeEventListener("touchcancel", l.hide)), t.removeEventListener("mouseup", l.hide), t.removeEventListener("mouseleave", l.hide)
                }
            },
            c = {
                input: function (e) {
                    var t, n, i, o, r = e.parentNode;
                    "i" === r.tagName.toLowerCase() && r.classList.contains("waves-effect") || ((t = document.createElement("i")).className = e.className + " waves-input-wrapper", e.className = "waves-button-input", r.replaceChild(t, e), t.appendChild(e), i = (n = window.getComputedStyle(e, null)).color, o = n.backgroundColor, t.setAttribute("style", "color:" + i + ";background:" + o), e.setAttribute("style", "background-color:rgba(0,0,0,0);"))
                },
                img: function (e) {
                    var t, n = e.parentNode;
                    "i" === n.tagName.toLowerCase() && n.classList.contains("waves-effect") || (t = document.createElement("i"), n.replaceChild(t, e), t.appendChild(e))
                }
            };

        function u(e, t, n) {
            var i, o, r, s, c, u;
            n && (n.classList.remove("waves-rippling"), i = n.getAttribute("data-x"), o = n.getAttribute("data-y"), r = n.getAttribute("data-scale"), s = n.getAttribute("data-translate"), (c = 350 - (Date.now() - Number(n.getAttribute("data-hold")))) < 0 && (c = 0), "mousemove" === e.type && (c = 150), u = "mousemove" === e.type ? 2500 : l.duration, setTimeout((function () {
                var e = {
                    top: o + "px",
                    left: i + "px",
                    opacity: "0",
                    "-webkit-transition-duration": u + "ms",
                    "-moz-transition-duration": u + "ms",
                    "-o-transition-duration": u + "ms",
                    "transition-duration": u + "ms",
                    "-webkit-transform": r + " " + s,
                    "-moz-transform": r + " " + s,
                    "-ms-transform": r + " " + s,
                    "-o-transform": r + " " + s,
                    transform: r + " " + s
                };
                n.setAttribute("style", a(e)), setTimeout((function () {
                    try {
                        t.removeChild(n)
                    } catch (e) {
                        return !1
                    }
                }), u)
            }), c))
        }
        var p = {
            touches: 0,
            allowEvent: function (e) {
                var t = !0;
                return /^(mousedown|mousemove)$/.test(e.type) && p.touches && (t = !1), t
            },
            registerEvent: function (e) {
                var t = e.type;
                "touchstart" === t ? p.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout((function () {
                    p.touches && --p.touches
                }), 500)
            }
        };

        function h(e) {
            var t, n, o, r, s, a = function (e) {
                if (!1 === p.allowEvent(e)) return null;
                for (var t = null, n = e.target || e.srcElement; n.parentElement;) {
                    if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
                        t = n;
                        break
                    }
                    n = n.parentElement
                }
                return t
            }(e);
            if (null !== a) {
                if (a.disabled || a.getAttribute("disabled") || a.classList.contains("disabled")) return;
                p.registerEvent(e), "touchstart" === e.type && l.delay ? (t = !1, n = setTimeout((function () {
                    n = null, l.show(e, a)
                }), l.delay), o = function (i) {
                    n && (clearTimeout(n), n = null, l.show(e, a)), t || (t = !0, l.hide(i, a)), s()
                }, r = function (e) {
                    n && (clearTimeout(n), n = null), o(e), s()
                }, a.addEventListener("touchmove", r, !1), a.addEventListener("touchend", o, !1), a.addEventListener("touchcancel", o, !1), s = function () {
                    a.removeEventListener("touchmove", r), a.removeEventListener("touchend", o), a.removeEventListener("touchcancel", o)
                }) : (l.show(e, a), i && (a.addEventListener("touchend", l.hide, !1), a.addEventListener("touchcancel", l.hide, !1)), a.addEventListener("mouseup", l.hide, !1), a.addEventListener("mouseleave", l.hide, !1))
            }
        }
        return e.init = function (e) {
            var t = document.body;
            "duration" in (e = e || {}) && (l.duration = e.duration), "delay" in e && (l.delay = e.delay), i && (t.addEventListener("touchstart", h, !1), t.addEventListener("touchcancel", p.registerEvent, !1), t.addEventListener("touchend", p.registerEvent, !1)), t.addEventListener("mousedown", h, !1)
        }, e.attach = function (e, t) {
            var i, o;
            e = r(e), "[object Array]" === n.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
            for (var s = 0, a = e.length; s < a; s++) o = (i = e[s]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (c[o](i), i = i.parentElement), -1 === i.className.indexOf("waves-effect") && (i.className += " waves-effect" + t)
        }, e.ripple = function (e, t) {
            var n = (e = r(e)).length;
            if ((t = t || {}).wait = t.wait || 0, t.position = t.position || null, n)
                for (var i = {}, o = 0, a = {
                        type: "mousedown",
                        button: 1
                    }, c = function (e, t) {
                        return function () {
                            l.hide(e, t)
                        }
                    }; o < n; o++) {
                    var u = e[o],
                        p = t.position || {
                            x: u.clientWidth / 2,
                            y: u.clientHeight / 2
                        },
                        h = s(u);
                    i.x = h.left + p.x, i.y = h.top + p.y, a.pageX = i.x, a.pageY = i.y, l.show(a, u), 0 <= t.wait && null !== t.wait && setTimeout(c({
                        type: "mouseup",
                        button: 1
                    }, u), t.wait)
                }
        }, e.calm = function (e) {
            for (var t = {
                    type: "mouseup",
                    button: 1
                }, n = 0, i = (e = r(e)).length; n < i; n++) l.hide(t, e[n])
        }, e.displayEffect = function (t) {
            e.init(t)
        }, e
    })),
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).i18next = t()
    }(this, (function () {
        "use strict";

        function e(t) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(t)
        }

        function t(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function n(e) {
            for (var n = 1; n < arguments.length; n++) {
                var i = null != arguments[n] ? Object(arguments[n]) : {},
                    o = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(i).filter((function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                })))), o.forEach((function (n) {
                    t(e, n, i[n])
                }))
            }
            return e
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function r(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function a(t, n) {
            return !n || "object" !== e(n) && "function" != typeof n ? s(t) : n
        }

        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function c(e, t) {
            return (c = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }
        var p = {
                type: "logger",
                log: function (e) {
                    this.output("log", e)
                },
                warn: function (e) {
                    this.output("warn", e)
                },
                error: function (e) {
                    this.output("error", e)
                },
                output: function (e, t) {
                    console && console[e] && console[e].apply(console, t)
                }
            },
            h = new(function () {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    i(this, e), this.init(t, n)
                }
                return r(e, [{
                    key: "init",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.prefix = t.prefix || "i18next:", this.logger = e || p, this.options = t, this.debug = t.debug
                    }
                }, {
                    key: "setDebug",
                    value: function (e) {
                        this.debug = e
                    }
                }, {
                    key: "log",
                    value: function () {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "log", "", !0)
                    }
                }, {
                    key: "warn",
                    value: function () {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "warn", "", !0)
                    }
                }, {
                    key: "error",
                    value: function () {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "error", "")
                    }
                }, {
                    key: "deprecate",
                    value: function () {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                    }
                }, {
                    key: "forward",
                    value: function (e, t, n, i) {
                        return i && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e))
                    }
                }, {
                    key: "create",
                    value: function (t) {
                        return new e(this.logger, n({}, {
                            prefix: "".concat(this.prefix, ":").concat(t, ":")
                        }, this.options))
                    }
                }]), e
            }()),
            f = function () {
                function e() {
                    i(this, e), this.observers = {}
                }
                return r(e, [{
                    key: "on",
                    value: function (e, t) {
                        var n = this;
                        return e.split(" ").forEach((function (e) {
                            n.observers[e] = n.observers[e] || [], n.observers[e].push(t)
                        })), this
                    }
                }, {
                    key: "off",
                    value: function (e, t) {
                        this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function (e) {
                            return e !== t
                        })) : delete this.observers[e])
                    }
                }, {
                    key: "emit",
                    value: function (e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        this.observers[e] && [].concat(this.observers[e]).forEach((function (e) {
                            e.apply(void 0, n)
                        })), this.observers["*"] && [].concat(this.observers["*"]).forEach((function (t) {
                            t.apply(t, [e].concat(n))
                        }))
                    }
                }]), e
            }();

        function d() {
            var e, t, n = new Promise((function (n, i) {
                e = n, t = i
            }));
            return n.resolve = e, n.reject = t, n
        }

        function g(e) {
            return null == e ? "" : "" + e
        }

        function m(e, t, n) {
            function i(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
            }

            function o() {
                return !e || "string" == typeof e
            }
            for (var r = "string" != typeof t ? [].concat(t) : t.split("."); r.length > 1;) {
                if (o()) return {};
                var s = i(r.shift());
                !e[s] && n && (e[s] = new n), e = e[s]
            }
            return o() ? {} : {
                obj: e,
                k: i(r.shift())
            }
        }

        function y(e, t, n) {
            var i = m(e, t, Object);
            i.obj[i.k] = n
        }

        function v(e, t) {
            var n = m(e, t),
                i = n.obj,
                o = n.k;
            if (i) return i[o]
        }

        function b(e, t, n) {
            var i = v(e, n);
            return void 0 !== i ? i : v(t, n)
        }

        function x(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }
        var w = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };

        function _(e) {
            return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (function (e) {
                return w[e]
            })) : e
        }
        var k = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
            E = function (e) {
                function t(e) {
                    var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        ns: ["translation"],
                        defaultNS: "translation"
                    };
                    return i(this, t), n = a(this, l(t).call(this)), k && f.call(s(n)), n.data = e || {}, n.options = o, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n
                }
                return u(t, f), r(t, [{
                    key: "addNamespaces",
                    value: function (e) {
                        this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                    }
                }, {
                    key: "removeNamespaces",
                    value: function (e) {
                        var t = this.options.ns.indexOf(e);
                        t > -1 && this.options.ns.splice(t, 1)
                    }
                }, {
                    key: "getResource",
                    value: function (e, t, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            o = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
                            r = [e, t];
                        return n && "string" != typeof n && (r = r.concat(n)), n && "string" == typeof n && (r = r.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (r = e.split(".")), v(this.data, r)
                    }
                }, {
                    key: "addResource",
                    value: function (e, t, n, i) {
                        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                silent: !1
                            },
                            r = this.options.keySeparator;
                        void 0 === r && (r = ".");
                        var s = [e, t];
                        n && (s = s.concat(r ? n.split(r) : n)), e.indexOf(".") > -1 && (i = t, t = (s = e.split("."))[1]), this.addNamespaces(t), y(this.data, s, i), o.silent || this.emit("added", e, t, n, i)
                    }
                }, {
                    key: "addResources",
                    value: function (e, t, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                            silent: !1
                        };
                        for (var o in n) "string" != typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(e, t, o, n[o], {
                            silent: !0
                        });
                        i.silent || this.emit("added", e, t, n)
                    }
                }, {
                    key: "addResourceBundle",
                    value: function (e, t, i, o, r) {
                        var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                silent: !1
                            },
                            a = [e, t];
                        e.indexOf(".") > -1 && (o = i, i = t, t = (a = e.split("."))[1]), this.addNamespaces(t);
                        var l = v(this.data, a) || {};
                        o ? function e(t, n, i) {
                            for (var o in n) "__proto__" !== o && (o in t ? "string" == typeof t[o] || t[o] instanceof String || "string" == typeof n[o] || n[o] instanceof String ? i && (t[o] = n[o]) : e(t[o], n[o], i) : t[o] = n[o]);
                            return t
                        }(l, i, r) : l = n({}, l, i), y(this.data, a, l), s.silent || this.emit("added", e, t, i)
                    }
                }, {
                    key: "removeResourceBundle",
                    value: function (e, t) {
                        this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                    }
                }, {
                    key: "hasResourceBundle",
                    value: function (e, t) {
                        return void 0 !== this.getResource(e, t)
                    }
                }, {
                    key: "getResourceBundle",
                    value: function (e, t) {
                        return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? n({}, {}, this.getResource(e, t)) : this.getResource(e, t)
                    }
                }, {
                    key: "getDataByLanguage",
                    value: function (e) {
                        return this.data[e]
                    }
                }, {
                    key: "toJSON",
                    value: function () {
                        return this.data
                    }
                }]), t
            }(),
            T = {
                processors: {},
                addPostProcessor: function (e) {
                    this.processors[e.name] = e
                },
                handle: function (e, t, n, i, o) {
                    var r = this;
                    return e.forEach((function (e) {
                        r.processors[e] && (t = r.processors[e].process(t, n, i, o))
                    })), t
                }
            },
            S = {},
            C = function (t) {
                function o(e) {
                    var t, n, r, c, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return i(this, o), t = a(this, l(o).call(this)), k && f.call(s(t)), n = ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r = e, c = s(t), n.forEach((function (e) {
                        r[e] && (c[e] = r[e])
                    })), t.options = u, void 0 === t.options.keySeparator && (t.options.keySeparator = "."), t.logger = h.create("translator"), t
                }
                return u(o, f), r(o, [{
                    key: "changeLanguage",
                    value: function (e) {
                        e && (this.language = e)
                    }
                }, {
                    key: "exists",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                interpolation: {}
                            },
                            n = this.resolve(e, t);
                        return n && void 0 !== n.res
                    }
                }, {
                    key: "extractFromKey",
                    value: function (e, t) {
                        var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                        void 0 === n && (n = ":");
                        var i = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                            o = t.ns || this.options.defaultNS;
                        if (n && e.indexOf(n) > -1) {
                            var r = e.match(this.interpolator.nestingRegexp);
                            if (r && r.length > 0) return {
                                key: e,
                                namespaces: o
                            };
                            var s = e.split(n);
                            (n !== i || n === i && this.options.ns.indexOf(s[0]) > -1) && (o = s.shift()), e = s.join(i)
                        }
                        return "string" == typeof o && (o = [o]), {
                            key: e,
                            namespaces: o
                        }
                    }
                }, {
                    key: "translate",
                    value: function (t, i, o) {
                        var r = this;
                        if ("object" !== e(i) && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), i || (i = {}), null == t) return "";
                        Array.isArray(t) || (t = [String(t)]);
                        var s = void 0 !== i.keySeparator ? i.keySeparator : this.options.keySeparator,
                            a = this.extractFromKey(t[t.length - 1], i),
                            l = a.key,
                            c = a.namespaces,
                            u = c[c.length - 1],
                            p = i.lng || this.language,
                            h = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                        if (p && "cimode" === p.toLowerCase()) {
                            if (h) {
                                var f = i.nsSeparator || this.options.nsSeparator;
                                return u + f + l
                            }
                            return l
                        }
                        var d = this.resolve(t, i),
                            g = d && d.res,
                            m = d && d.usedKey || l,
                            y = d && d.exactUsedKey || l,
                            v = Object.prototype.toString.apply(g),
                            b = void 0 !== i.joinArrays ? i.joinArrays : this.options.joinArrays,
                            x = !this.i18nFormat || this.i18nFormat.handleAsObject;
                        if (x && g && "string" != typeof g && "boolean" != typeof g && "number" != typeof g && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(v) < 0 && ("string" != typeof b || "[object Array]" !== v)) {
                            if (!i.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, g, i) : "key '".concat(l, " (").concat(this.language, ")' returned an object instead of string.");
                            if (s) {
                                var w = "[object Array]" === v,
                                    _ = w ? [] : {},
                                    k = w ? y : m;
                                for (var E in g)
                                    if (Object.prototype.hasOwnProperty.call(g, E)) {
                                        var T = "".concat(k).concat(s).concat(E);
                                        _[E] = this.translate(T, n({}, i, {
                                            joinArrays: !1,
                                            ns: c
                                        })), _[E] === T && (_[E] = g[E])
                                    } g = _
                            }
                        } else if (x && "string" == typeof b && "[object Array]" === v)(g = g.join(b)) && (g = this.extendTranslation(g, t, i, o));
                        else {
                            var S = !1,
                                C = !1;
                            if (!this.isValidLookup(g) && void 0 !== i.defaultValue) {
                                if (S = !0, void 0 !== i.count) {
                                    var A = this.pluralResolver.getSuffix(p, i.count);
                                    g = i["defaultValue".concat(A)]
                                }
                                g || (g = i.defaultValue)
                            }
                            this.isValidLookup(g) || (C = !0, g = l);
                            var O = i.defaultValue && i.defaultValue !== g && this.options.updateMissing;
                            if (C || S || O) {
                                if (this.logger.log(O ? "updateKey" : "missingKey", p, u, l, O ? i.defaultValue : g), s) {
                                    var L = this.resolve(l, n({}, i, {
                                        keySeparator: !1
                                    }));
                                    L && L.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                }
                                var M = [],
                                    j = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
                                if ("fallback" === this.options.saveMissingTo && j && j[0])
                                    for (var N = 0; N < j.length; N++) M.push(j[N]);
                                else "all" === this.options.saveMissingTo ? M = this.languageUtils.toResolveHierarchy(i.lng || this.language) : M.push(i.lng || this.language);
                                var D = function (e, t) {
                                    r.options.missingKeyHandler ? r.options.missingKeyHandler(e, u, t, O ? i.defaultValue : g, O, i) : r.backendConnector && r.backendConnector.saveMissing && r.backendConnector.saveMissing(e, u, t, O ? i.defaultValue : g, O, i), r.emit("missingKey", e, u, t, g)
                                };
                                if (this.options.saveMissing) {
                                    var P = void 0 !== i.count && "string" != typeof i.count;
                                    this.options.saveMissingPlurals && P ? M.forEach((function (e) {
                                        r.pluralResolver.getPluralFormsOfKey(e, l).forEach((function (t) {
                                            return D([e], t)
                                        }))
                                    })) : D(M, l)
                                }
                            }
                            g = this.extendTranslation(g, t, i, d, o), C && g === l && this.options.appendNamespaceToMissingKey && (g = "".concat(u, ":").concat(l)), C && this.options.parseMissingKeyHandler && (g = this.options.parseMissingKeyHandler(g))
                        }
                        return g
                    }
                }, {
                    key: "extendTranslation",
                    value: function (e, t, i, o, r) {
                        var s = this;
                        if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, i, o.usedLng, o.usedNS, o.usedKey, {
                            resolved: o
                        });
                        else if (!i.skipInterpolation) {
                            i.interpolation && this.interpolator.init(n({}, i, {
                                interpolation: n({}, this.options.interpolation, i.interpolation)
                            }));
                            var a, l = i.interpolation && i.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                            if (l) {
                                var c = e.match(this.interpolator.nestingRegexp);
                                a = c && c.length
                            }
                            var u = i.replace && "string" != typeof i.replace ? i.replace : i;
                            if (this.options.interpolation.defaultVariables && (u = n({}, this.options.interpolation.defaultVariables, u)), e = this.interpolator.interpolate(e, u, i.lng || this.language, i), l) {
                                var p = e.match(this.interpolator.nestingRegexp);
                                a < (p && p.length) && (i.nest = !1)
                            }!1 !== i.nest && (e = this.interpolator.nest(e, (function () {
                                for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                return r && r[0] === n[0] ? (s.logger.warn("It seems you are nesting recursively key: ".concat(n[0], " in key: ").concat(t[0])), null) : s.translate.apply(s, n.concat([t]))
                            }), i)), i.interpolation && this.interpolator.reset()
                        }
                        var h = i.postProcess || this.options.postProcess,
                            f = "string" == typeof h ? [h] : h;
                        return null != e && f && f.length && !1 !== i.applyPostProcessor && (e = T.handle(f, e, t, this.options && this.options.postProcessPassResolved ? n({
                            i18nResolved: o
                        }, i) : i, this)), e
                    }
                }, {
                    key: "resolve",
                    value: function (e) {
                        var t, n, i, o, r, s = this,
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return "string" == typeof e && (e = [e]), e.forEach((function (e) {
                            if (!s.isValidLookup(t)) {
                                var l = s.extractFromKey(e, a),
                                    c = l.key;
                                n = c;
                                var u = l.namespaces;
                                s.options.fallbackNS && (u = u.concat(s.options.fallbackNS));
                                var p = void 0 !== a.count && "string" != typeof a.count,
                                    h = void 0 !== a.context && "string" == typeof a.context && "" !== a.context,
                                    f = a.lngs ? a.lngs : s.languageUtils.toResolveHierarchy(a.lng || s.language, a.fallbackLng);
                                u.forEach((function (e) {
                                    s.isValidLookup(t) || (r = e, !S["".concat(f[0], "-").concat(e)] && s.utils && s.utils.hasLoadedNamespace && !s.utils.hasLoadedNamespace(r) && (S["".concat(f[0], "-").concat(e)] = !0, s.logger.warn('key "'.concat(n, '" for languages "').concat(f.join(", "), '" won\'t get resolved as namespace "').concat(r, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), f.forEach((function (n) {
                                        if (!s.isValidLookup(t)) {
                                            o = n;
                                            var r, l, u = c,
                                                f = [u];
                                            for (s.i18nFormat && s.i18nFormat.addLookupKeys ? s.i18nFormat.addLookupKeys(f, c, n, e, a) : (p && (r = s.pluralResolver.getSuffix(n, a.count)), p && h && f.push(u + r), h && f.push(u += "".concat(s.options.contextSeparator).concat(a.context)), p && f.push(u += r)); l = f.pop();) s.isValidLookup(t) || (i = l, t = s.getResource(n, e, l, a))
                                        }
                                    })))
                                }))
                            }
                        })), {
                            res: t,
                            usedKey: n,
                            exactUsedKey: i,
                            usedLng: o,
                            usedNS: r
                        }
                    }
                }, {
                    key: "isValidLookup",
                    value: function (e) {
                        return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
                    }
                }, {
                    key: "getResource",
                    value: function (e, t, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, i) : this.resourceStore.getResource(e, t, n, i)
                    }
                }]), o
            }();

        function A(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        var O = function () {
                function e(t) {
                    i(this, e), this.options = t, this.whitelist = this.options.supportedLngs || !1, this.supportedLngs = this.options.supportedLngs || !1, this.logger = h.create("languageUtils")
                }
                return r(e, [{
                    key: "getScriptPartFromCode",
                    value: function (e) {
                        if (!e || e.indexOf("-") < 0) return null;
                        var t = e.split("-");
                        return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                    }
                }, {
                    key: "getLanguagePartFromCode",
                    value: function (e) {
                        if (!e || e.indexOf("-") < 0) return e;
                        var t = e.split("-");
                        return this.formatLanguageCode(t[0])
                    }
                }, {
                    key: "formatLanguageCode",
                    value: function (e) {
                        if ("string" == typeof e && e.indexOf("-") > -1) {
                            var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                n = e.split("-");
                            return this.options.lowerCaseLng ? n = n.map((function (e) {
                                return e.toLowerCase()
                            })) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = A(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = A(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = A(n[2].toLowerCase()))), n.join("-")
                        }
                        return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                    }
                }, {
                    key: "isWhitelisted",
                    value: function (e) {
                        return this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'), this.isSupportedCode(e)
                    }
                }, {
                    key: "isSupportedCode",
                    value: function (e) {
                        return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                    }
                }, {
                    key: "getBestMatchFromCodes",
                    value: function (e) {
                        var t, n = this;
                        return e ? (e.forEach((function (e) {
                            if (!t) {
                                var i = n.formatLanguageCode(e);
                                n.options.supportedLngs && !n.isSupportedCode(i) || (t = i)
                            }
                        })), !t && this.options.supportedLngs && e.forEach((function (e) {
                            if (!t) {
                                var i = n.getLanguagePartFromCode(e);
                                if (n.isSupportedCode(i)) return t = i;
                                t = n.options.supportedLngs.find((function (e) {
                                    if (0 === e.indexOf(i)) return e
                                }))
                            }
                        })), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
                    }
                }, {
                    key: "getFallbackCodes",
                    value: function (e, t) {
                        if (!e) return [];
                        if ("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
                        if (!t) return e.default || [];
                        var n = e[t];
                        return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
                    }
                }, {
                    key: "toResolveHierarchy",
                    value: function (e, t) {
                        var n = this,
                            i = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                            o = [],
                            r = function (e) {
                                e && (n.isSupportedCode(e) ? o.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                            };
                        return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && r(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e))) : "string" == typeof e && r(this.formatLanguageCode(e)), i.forEach((function (e) {
                            o.indexOf(e) < 0 && r(n.formatLanguageCode(e))
                        })), o
                    }
                }]), e
            }(),
            L = [{
                lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
                nr: [1, 2],
                fc: 1
            }, {
                lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                nr: [1, 2],
                fc: 2
            }, {
                lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                nr: [1],
                fc: 3
            }, {
                lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                nr: [1, 2, 5],
                fc: 4
            }, {
                lngs: ["ar"],
                nr: [0, 1, 2, 3, 11, 100],
                fc: 5
            }, {
                lngs: ["cs", "sk"],
                nr: [1, 2, 5],
                fc: 6
            }, {
                lngs: ["csb", "pl"],
                nr: [1, 2, 5],
                fc: 7
            }, {
                lngs: ["cy"],
                nr: [1, 2, 3, 8],
                fc: 8
            }, {
                lngs: ["fr"],
                nr: [1, 2],
                fc: 9
            }, {
                lngs: ["ga"],
                nr: [1, 2, 3, 7, 11],
                fc: 10
            }, {
                lngs: ["gd"],
                nr: [1, 2, 3, 20],
                fc: 11
            }, {
                lngs: ["is"],
                nr: [1, 2],
                fc: 12
            }, {
                lngs: ["jv"],
                nr: [0, 1],
                fc: 13
            }, {
                lngs: ["kw"],
                nr: [1, 2, 3, 4],
                fc: 14
            }, {
                lngs: ["lt"],
                nr: [1, 2, 10],
                fc: 15
            }, {
                lngs: ["lv"],
                nr: [1, 2, 0],
                fc: 16
            }, {
                lngs: ["mk"],
                nr: [1, 2],
                fc: 17
            }, {
                lngs: ["mnk"],
                nr: [0, 1, 2],
                fc: 18
            }, {
                lngs: ["mt"],
                nr: [1, 2, 11, 20],
                fc: 19
            }, {
                lngs: ["or"],
                nr: [2, 1],
                fc: 2
            }, {
                lngs: ["ro"],
                nr: [1, 2, 20],
                fc: 20
            }, {
                lngs: ["sl"],
                nr: [5, 1, 2, 3],
                fc: 21
            }, {
                lngs: ["he", "iw"],
                nr: [1, 2, 20, 21],
                fc: 22
            }],
            M = {
                1: function (e) {
                    return Number(e > 1)
                },
                2: function (e) {
                    return Number(1 != e)
                },
                3: function (e) {
                    return 0
                },
                4: function (e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                },
                5: function (e) {
                    return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
                },
                6: function (e) {
                    return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                },
                7: function (e) {
                    return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                },
                8: function (e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                },
                9: function (e) {
                    return Number(e >= 2)
                },
                10: function (e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
                },
                11: function (e) {
                    return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
                },
                12: function (e) {
                    return Number(e % 10 != 1 || e % 100 == 11)
                },
                13: function (e) {
                    return Number(0 !== e)
                },
                14: function (e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                },
                15: function (e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                },
                16: function (e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
                },
                17: function (e) {
                    return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
                },
                18: function (e) {
                    return Number(0 == e ? 0 : 1 == e ? 1 : 2)
                },
                19: function (e) {
                    return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
                },
                20: function (e) {
                    return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
                },
                21: function (e) {
                    return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                },
                22: function (e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                }
            },
            j = function () {
                function e(t) {
                    var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    i(this, e), this.languageUtils = t, this.options = o, this.logger = h.create("pluralResolver"), this.rules = (n = {}, L.forEach((function (e) {
                        e.lngs.forEach((function (t) {
                            n[t] = {
                                numbers: e.nr,
                                plurals: M[e.fc]
                            }
                        }))
                    })), n)
                }
                return r(e, [{
                    key: "addRule",
                    value: function (e, t) {
                        this.rules[e] = t
                    }
                }, {
                    key: "getRule",
                    value: function (e) {
                        return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                    }
                }, {
                    key: "needsPlural",
                    value: function (e) {
                        var t = this.getRule(e);
                        return t && t.numbers.length > 1
                    }
                }, {
                    key: "getPluralFormsOfKey",
                    value: function (e, t) {
                        var n = this,
                            i = [],
                            o = this.getRule(e);
                        return o ? (o.numbers.forEach((function (o) {
                            var r = n.getSuffix(e, o);
                            i.push("".concat(t).concat(r))
                        })), i) : i
                    }
                }, {
                    key: "getSuffix",
                    value: function (e, t) {
                        var n = this,
                            i = this.getRule(e);
                        if (i) {
                            var o = i.noAbs ? i.plurals(t) : i.plurals(Math.abs(t)),
                                r = i.numbers[o];
                            this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = ""));
                            var s = function () {
                                return n.options.prepend && r.toString() ? n.options.prepend + r.toString() : r.toString()
                            };
                            return "v1" === this.options.compatibilityJSON ? 1 === r ? "" : "number" == typeof r ? "_plural_".concat(r.toString()) : s() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] ? s() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
                        }
                        return this.logger.warn("no plural rule found for: ".concat(e)), ""
                    }
                }]), e
            }(),
            N = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, e), this.logger = h.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function (e) {
                        return e
                    }, this.init(t)
                }
                return r(e, [{
                    key: "init",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.interpolation || (e.interpolation = {
                            escapeValue: !0
                        });
                        var t = e.interpolation;
                        this.escape = void 0 !== t.escape ? t.escape : _, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? x(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? x(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? x(t.nestingPrefix) : t.nestingPrefixEscaped || x("$t("), this.nestingSuffix = t.nestingSuffix ? x(t.nestingSuffix) : t.nestingSuffixEscaped || x(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
                    }
                }, {
                    key: "reset",
                    value: function () {
                        this.options && this.init(this.options)
                    }
                }, {
                    key: "resetRegExp",
                    value: function () {
                        var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                        this.regexp = new RegExp(e, "g");
                        var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                        this.regexpUnescape = new RegExp(t, "g");
                        var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                        this.nestingRegexp = new RegExp(n, "g")
                    }
                }, {
                    key: "interpolate",
                    value: function (e, t, n, i) {
                        var o, r, s, a = this,
                            l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                        function c(e) {
                            return e.replace(/\$/g, "$$$$")
                        }
                        var u = function (e) {
                            if (e.indexOf(a.formatSeparator) < 0) {
                                var o = b(t, l, e);
                                return a.alwaysFormat ? a.format(o, void 0, n) : o
                            }
                            var r = e.split(a.formatSeparator),
                                s = r.shift().trim(),
                                c = r.join(a.formatSeparator).trim();
                            return a.format(b(t, l, s), c, n, i)
                        };
                        this.resetRegExp();
                        var p = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler,
                            h = i && i.interpolation && i.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                        return [{
                            regex: this.regexpUnescape,
                            safeValue: function (e) {
                                return c(e)
                            }
                        }, {
                            regex: this.regexp,
                            safeValue: function (e) {
                                return a.escapeValue ? c(a.escape(e)) : c(e)
                            }
                        }].forEach((function (t) {
                            for (s = 0; o = t.regex.exec(e);) {
                                if (void 0 === (r = u(o[1].trim())))
                                    if ("function" == typeof p) {
                                        var n = p(e, o, i);
                                        r = "string" == typeof n ? n : ""
                                    } else {
                                        if (h) {
                                            r = o[0];
                                            continue
                                        }
                                        a.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), r = ""
                                    }
                                else "string" == typeof r || a.useRawValueToEscape || (r = g(r));
                                if (e = e.replace(o[0], t.safeValue(r)), t.regex.lastIndex = 0, ++s >= a.maxReplaces) break
                            }
                        })), e
                    }
                }, {
                    key: "nest",
                    value: function (e, t) {
                        var i, o, r = this,
                            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            a = n({}, s);

                        function l(e, t) {
                            var i = this.nestingOptionsSeparator;
                            if (e.indexOf(i) < 0) return e;
                            var o = e.split(new RegExp("".concat(i, "[ ]*{"))),
                                r = "{".concat(o[1]);
                            e = o[0], r = (r = this.interpolate(r, a)).replace(/'/g, '"');
                            try {
                                a = JSON.parse(r), t && (a = n({}, t, a))
                            } catch (t) {
                                return this.logger.warn("failed parsing options string in nesting for key ".concat(e), t), "".concat(e).concat(i).concat(r)
                            }
                            return delete a.defaultValue, e
                        }
                        for (a.applyPostProcessor = !1, delete a.defaultValue; i = this.nestingRegexp.exec(e);) {
                            var c = [],
                                u = !1;
                            if (i[0].includes(this.formatSeparator) && !/{.*}/.test(i[1])) {
                                var p = i[1].split(this.formatSeparator).map((function (e) {
                                    return e.trim()
                                }));
                                i[1] = p.shift(), c = p, u = !0
                            }
                            if ((o = t(l.call(this, i[1].trim(), a), a)) && i[0] === e && "string" != typeof o) return o;
                            "string" != typeof o && (o = g(o)), o || (this.logger.warn("missed to resolve ".concat(i[1], " for nesting ").concat(e)), o = ""), u && (o = c.reduce((function (e, t) {
                                return r.format(e, t, s.lng, s)
                            }), o.trim())), e = e.replace(i[0], o), this.regexp.lastIndex = 0
                        }
                        return e
                    }
                }]), e
            }(),
            D = function (e) {
                function t(e, n, o) {
                    var r, c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return i(this, t), r = a(this, l(t).call(this)), k && f.call(s(r)), r.backend = e, r.store = n, r.services = o, r.languageUtils = o.languageUtils, r.options = c, r.logger = h.create("backendConnector"), r.state = {}, r.queue = [], r.backend && r.backend.init && r.backend.init(o, c.backend, c), r
                }
                return u(t, f), r(t, [{
                    key: "queueLoad",
                    value: function (e, t, n, i) {
                        var o = this,
                            r = [],
                            s = [],
                            a = [],
                            l = [];
                        return e.forEach((function (e) {
                            var i = !0;
                            t.forEach((function (t) {
                                var a = "".concat(e, "|").concat(t);
                                !n.reload && o.store.hasResourceBundle(e, t) ? o.state[a] = 2 : o.state[a] < 0 || (1 === o.state[a] ? s.indexOf(a) < 0 && s.push(a) : (o.state[a] = 1, i = !1, s.indexOf(a) < 0 && s.push(a), r.indexOf(a) < 0 && r.push(a), l.indexOf(t) < 0 && l.push(t)))
                            })), i || a.push(e)
                        })), (r.length || s.length) && this.queue.push({
                            pending: s,
                            loaded: {},
                            errors: [],
                            callback: i
                        }), {
                            toLoad: r,
                            pending: s,
                            toLoadLanguages: a,
                            toLoadNamespaces: l
                        }
                    }
                }, {
                    key: "loaded",
                    value: function (e, t, n) {
                        var i = e.split("|"),
                            o = i[0],
                            r = i[1];
                        t && this.emit("failedLoading", o, r, t), n && this.store.addResourceBundle(o, r, n), this.state[e] = t ? -1 : 2;
                        var s = {};
                        this.queue.forEach((function (n) {
                            var i, a, l, c, u;
                            i = n.loaded, a = r, (c = (l = m(i, [o], Object)).obj)[u = l.k] = c[u] || [], c[u].push(a),
                                function (e, t) {
                                    for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), n = e.indexOf(t)
                                }(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function (e) {
                                    s[e] || (s[e] = []), n.loaded[e].length && n.loaded[e].forEach((function (t) {
                                        s[e].indexOf(t) < 0 && s[e].push(t)
                                    }))
                                })), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                        })), this.emit("loaded", s), this.queue = this.queue.filter((function (e) {
                            return !e.done
                        }))
                    }
                }, {
                    key: "read",
                    value: function (e, t, n) {
                        var i = this,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                            s = arguments.length > 5 ? arguments[5] : void 0;
                        return e.length ? this.backend[n](e, t, (function (a, l) {
                            a && l && o < 5 ? setTimeout((function () {
                                i.read.call(i, e, t, n, o + 1, 2 * r, s)
                            }), r) : s(a, l)
                        })) : s(null, {})
                    }
                }, {
                    key: "prepareLoading",
                    value: function (e, t) {
                        var n = this,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = arguments.length > 3 ? arguments[3] : void 0;
                        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
                        "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                        var r = this.queueLoad(e, t, i, o);
                        if (!r.toLoad.length) return r.pending.length || o(), null;
                        r.toLoad.forEach((function (e) {
                            n.loadOne(e)
                        }))
                    }
                }, {
                    key: "load",
                    value: function (e, t, n) {
                        this.prepareLoading(e, t, {}, n)
                    }
                }, {
                    key: "reload",
                    value: function (e, t, n) {
                        this.prepareLoading(e, t, {
                            reload: !0
                        }, n)
                    }
                }, {
                    key: "loadOne",
                    value: function (e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            i = e.split("|"),
                            o = i[0],
                            r = i[1];
                        this.read(o, r, "read", void 0, void 0, (function (i, s) {
                            i && t.logger.warn("".concat(n, "loading namespace ").concat(r, " for language ").concat(o, " failed"), i), !i && s && t.logger.log("".concat(n, "loaded namespace ").concat(r, " for language ").concat(o), s), t.loaded(e, i, s)
                        }))
                    }
                }, {
                    key: "saveMissing",
                    value: function (e, t, i, o, r) {
                        var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                        this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(i, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != i && "" !== i && (this.backend && this.backend.create && this.backend.create(e, t, i, o, null, n({}, s, {
                            isUpdate: r
                        })), e && e[0] && this.store.addResource(e[0], t, i, o))
                    }
                }]), t
            }();

        function P(e) {
            return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e.supportedLngs = e.whitelist), e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
        }

        function I() {}
        return new(function (t) {
            function o() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 ? arguments[1] : void 0;
                if (i(this, o), e = a(this, l(o).call(this)), k && f.call(s(e)), e.options = P(t), e.services = {}, e.logger = h, e.modules = {
                        external: []
                    }, n && !e.isInitialized && !t.isClone) {
                    if (!e.options.initImmediate) return e.init(t, n), a(e, s(e));
                    setTimeout((function () {
                        e.init(t, n)
                    }), 0)
                }
                return e
            }
            return u(o, f), r(o, [{
                key: "init",
                value: function () {
                    var t = this,
                        i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = arguments.length > 1 ? arguments[1] : void 0;

                    function r(e) {
                        return e ? "function" == typeof e ? new e : e : null
                    }
                    if ("function" == typeof i && (o = i, i = {}), i.whitelist && !i.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), i.nonExplicitWhitelist && !i.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = n({}, {
                            debug: !1,
                            initImmediate: !0,
                            ns: ["translation"],
                            defaultNS: ["translation"],
                            fallbackLng: ["dev"],
                            fallbackNS: !1,
                            whitelist: !1,
                            nonExplicitWhitelist: !1,
                            supportedLngs: !1,
                            nonExplicitSupportedLngs: !1,
                            load: "all",
                            preload: !1,
                            simplifyPluralSuffix: !0,
                            keySeparator: ".",
                            nsSeparator: ":",
                            pluralSeparator: "_",
                            contextSeparator: "_",
                            partialBundledLanguages: !1,
                            saveMissing: !1,
                            updateMissing: !1,
                            saveMissingTo: "fallback",
                            saveMissingPlurals: !0,
                            missingKeyHandler: !1,
                            missingInterpolationHandler: !1,
                            postProcess: !1,
                            postProcessPassResolved: !1,
                            returnNull: !0,
                            returnEmptyString: !0,
                            returnObjects: !1,
                            joinArrays: !1,
                            returnedObjectHandler: !1,
                            parseMissingKeyHandler: !1,
                            appendNamespaceToMissingKey: !1,
                            appendNamespaceToCIMode: !1,
                            overloadTranslationOptionHandler: function (t) {
                                var n = {};
                                if ("object" === e(t[1]) && (n = t[1]), "string" == typeof t[1] && (n.defaultValue = t[1]), "string" == typeof t[2] && (n.tDescription = t[2]), "object" === e(t[2]) || "object" === e(t[3])) {
                                    var i = t[3] || t[2];
                                    Object.keys(i).forEach((function (e) {
                                        n[e] = i[e]
                                    }))
                                }
                                return n
                            },
                            interpolation: {
                                escapeValue: !0,
                                format: function (e, t, n, i) {
                                    return e
                                },
                                prefix: "{{",
                                suffix: "}}",
                                formatSeparator: ",",
                                unescapePrefix: "-",
                                nestingPrefix: "$t(",
                                nestingSuffix: ")",
                                nestingOptionsSeparator: ",",
                                maxReplaces: 1e3,
                                skipOnVariables: !1
                            }
                        }, this.options, P(i)), this.format = this.options.interpolation.format, o || (o = I), !this.options.isClone) {
                        this.modules.logger ? h.init(r(this.modules.logger), this.options) : h.init(null, this.options);
                        var s = new O(this.options);
                        this.store = new E(this.options.resources, this.options);
                        var a = this.services;
                        a.logger = h, a.resourceStore = this.store, a.languageUtils = s, a.pluralResolver = new j(s, {
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }), a.interpolator = new N(this.options), a.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        }, a.backendConnector = new D(r(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on("*", (function (e) {
                            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                            t.emit.apply(t, [e].concat(i))
                        })), this.modules.languageDetector && (a.languageDetector = r(this.modules.languageDetector), a.languageDetector.init(a, this.options.detection, this.options)), this.modules.i18nFormat && (a.i18nFormat = r(this.modules.i18nFormat), a.i18nFormat.init && a.i18nFormat.init(this)), this.translator = new C(this.services, this.options), this.translator.on("*", (function (e) {
                            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                            t.emit.apply(t, [e].concat(i))
                        })), this.modules.external.forEach((function (e) {
                            e.init && e.init(t)
                        }))
                    }
                    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((function (e) {
                        t[e] = function () {
                            var n;
                            return (n = t.store)[e].apply(n, arguments)
                        }
                    })), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((function (e) {
                        t[e] = function () {
                            var n;
                            return (n = t.store)[e].apply(n, arguments), t
                        }
                    }));
                    var l = d(),
                        c = function () {
                            t.changeLanguage(t.options.lng, (function (e, n) {
                                t.isInitialized = !0, t.options.isClone || t.logger.log("initialized", t.options), t.emit("initialized", t.options), l.resolve(n), o(e, n)
                            }))
                        };
                    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), l
                }
            }, {
                key: "loadResources",
                value: function (e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I,
                        i = "string" == typeof e ? e : this.language;
                    if ("function" == typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
                        if (i && "cimode" === i.toLowerCase()) return n();
                        var o = [],
                            r = function (e) {
                                e && t.services.languageUtils.toResolveHierarchy(e).forEach((function (e) {
                                    o.indexOf(e) < 0 && o.push(e)
                                }))
                            };
                        i ? r(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((function (e) {
                            return r(e)
                        })), this.options.preload && this.options.preload.forEach((function (e) {
                            return r(e)
                        })), this.services.backendConnector.load(o, this.options.ns, n)
                    } else n(null)
                }
            }, {
                key: "reloadResources",
                value: function (e, t, n) {
                    var i = d();
                    return e || (e = this.languages), t || (t = this.options.ns), n || (n = I), this.services.backendConnector.reload(e, t, (function (e) {
                        i.resolve(), n(e)
                    })), i
                }
            }, {
                key: "use",
                value: function (e) {
                    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                    return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && T.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this
                }
            }, {
                key: "changeLanguage",
                value: function (e, t) {
                    var n = this;
                    this.isLanguageChangingTo = e;
                    var i = d();
                    this.emit("languageChanging", e);
                    var o = function (e) {
                        var o = "string" == typeof e ? e : n.services.languageUtils.getBestMatchFromCodes(e);
                        o && (n.language || (n.language = o, n.languages = n.services.languageUtils.toResolveHierarchy(o)), n.translator.language || n.translator.changeLanguage(o), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(o)), n.loadResources(o, (function (e) {
                            ! function (e, o) {
                                o ? (n.language = o, n.languages = n.services.languageUtils.toResolveHierarchy(o), n.translator.changeLanguage(o), n.isLanguageChangingTo = void 0, n.emit("languageChanged", o), n.logger.log("languageChanged", o)) : n.isLanguageChangingTo = void 0, i.resolve((function () {
                                    return n.t.apply(n, arguments)
                                })), t && t(e, (function () {
                                    return n.t.apply(n, arguments)
                                }))
                            }(e, o)
                        }))
                    };
                    return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()), i
                }
            }, {
                key: "getFixedT",
                value: function (t, i) {
                    var o = this,
                        r = function t(i, r) {
                            var s;
                            if ("object" !== e(r)) {
                                for (var a = arguments.length, l = new Array(a > 2 ? a - 2 : 0), c = 2; c < a; c++) l[c - 2] = arguments[c];
                                s = o.options.overloadTranslationOptionHandler([i, r].concat(l))
                            } else s = n({}, r);
                            return s.lng = s.lng || t.lng, s.lngs = s.lngs || t.lngs, s.ns = s.ns || t.ns, o.t(i, s)
                        };
                    return "string" == typeof t ? r.lng = t : r.lngs = t, r.ns = i, r
                }
            }, {
                key: "t",
                value: function () {
                    var e;
                    return this.translator && (e = this.translator).translate.apply(e, arguments)
                }
            }, {
                key: "exists",
                value: function () {
                    var e;
                    return this.translator && (e = this.translator).exists.apply(e, arguments)
                }
            }, {
                key: "setDefaultNamespace",
                value: function (e) {
                    this.options.defaultNS = e
                }
            }, {
                key: "hasLoadedNamespace",
                value: function (e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                    if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                    var i = this.languages[0],
                        o = !!this.options && this.options.fallbackLng,
                        r = this.languages[this.languages.length - 1];
                    if ("cimode" === i.toLowerCase()) return !0;
                    var s = function (e, n) {
                        var i = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                        return -1 === i || 2 === i
                    };
                    if (n.precheck) {
                        var a = n.precheck(this, s);
                        if (void 0 !== a) return a
                    }
                    return !!this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || !(!s(i, e) || o && !s(r, e))
                }
            }, {
                key: "loadNamespaces",
                value: function (e, t) {
                    var n = this,
                        i = d();
                    return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach((function (e) {
                        n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                    })), this.loadResources((function (e) {
                        i.resolve(), t && t(e)
                    })), i) : (t && t(), Promise.resolve())
                }
            }, {
                key: "loadLanguages",
                value: function (e, t) {
                    var n = d();
                    "string" == typeof e && (e = [e]);
                    var i = this.options.preload || [],
                        o = e.filter((function (e) {
                            return i.indexOf(e) < 0
                        }));
                    return o.length ? (this.options.preload = i.concat(o), this.loadResources((function (e) {
                        n.resolve(), t && t(e)
                    })), n) : (t && t(), Promise.resolve())
                }
            }, {
                key: "dir",
                value: function (e) {
                    return e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), e ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr" : "rtl"
                }
            }, {
                key: "createInstance",
                value: function () {
                    return new o(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0)
                }
            }, {
                key: "cloneInstance",
                value: function () {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I,
                        r = n({}, this.options, t, {
                            isClone: !0
                        }),
                        s = new o(r);
                    return ["store", "services", "language"].forEach((function (t) {
                        s[t] = e[t]
                    })), s.services = n({}, this.services), s.services.utils = {
                        hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
                    }, s.translator = new C(s.services, s.options), s.translator.on("*", (function (e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        s.emit.apply(s, [e].concat(n))
                    })), s.init(r, i), s.translator.options = s.options, s.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
                    }, s
                }
            }]), o
        }())
    })),
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).i18nextXHRBackend = t()
    }(this, (function () {
        "use strict";

        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var t = [],
            n = t.forEach,
            i = t.slice;

        function o(e) {
            return n.call(i.call(arguments, 1), (function (t) {
                if (t)
                    for (var n in t) void 0 === e[n] && (e[n] = t[n])
            })), e
        }

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function (e) {
                return r(e)
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e)
            })(e)
        }

        function a(e, t) {
            if (t && "object" === s(t)) {
                var n = "",
                    i = encodeURIComponent;
                for (var o in t) n += "&" + i(o) + "=" + i(t[o]);
                if (!n) return e;
                e = e + (-1 !== e.indexOf("?") ? "&" : "?") + n.slice(1)
            }
            return e
        }

        function l(e, t, n, i, o) {
            i && "object" === s(i) && (o || (i._t = new Date), i = a("", i).slice(1)), t.queryStringParams && (e = a(e, t.queryStringParams));
            try {
                var r;
                (r = XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP.3.0")).open(i ? "POST" : "GET", e, 1), t.crossDomain || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.withCredentials = !!t.withCredentials, i && r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.overrideMimeType && r.overrideMimeType("application/json");
                var l = t.customHeaders;
                if (l = "function" == typeof l ? l() : l)
                    for (var c in l) r.setRequestHeader(c, l[c]);
                r.onreadystatechange = function () {
                    r.readyState > 3 && n && n(r.responseText, r)
                }, r.send(i)
            } catch (e) {
                console && console.log(e)
            }
        }

        function c() {
            return {
                loadPath: "/locales/{{lng}}/{{ns}}.json",
                addPath: "/locales/add/{{lng}}/{{ns}}",
                allowMultiLoading: !1,
                parse: JSON.parse,
                parsePayload: function (e, t, n) {
                    return function (e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }({}, t, n || "")
                },
                crossDomain: !1,
                ajax: l
            }
        }
        var u = function () {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.init(e, n), this.type = "backend"
            }
            var n, i;
            return n = t, (i = [{
                key: "init",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.services = e, this.options = o(t, this.options || {}, c())
                }
            }, {
                key: "readMulti",
                value: function (e, t, n) {
                    var i = this.options.loadPath;
                    "function" == typeof this.options.loadPath && (i = this.options.loadPath(e, t));
                    var o = this.services.interpolator.interpolate(i, {
                        lng: e.join("+"),
                        ns: t.join("+")
                    });
                    this.loadUrl(o, n)
                }
            }, {
                key: "read",
                value: function (e, t, n) {
                    var i = this.options.loadPath;
                    "function" == typeof this.options.loadPath && (i = this.options.loadPath([e], [t]));
                    var o = this.services.interpolator.interpolate(i, {
                        lng: e,
                        ns: t
                    });
                    this.loadUrl(o, n)
                }
            }, {
                key: "loadUrl",
                value: function (e, t) {
                    var n = this;
                    this.options.ajax(e, this.options, (function (i, o) {
                        if (o.status >= 500 && o.status < 600) return t("failed loading " + e, !0);
                        if (o.status >= 400 && o.status < 500) return t("failed loading " + e, !1);
                        var r, s;
                        try {
                            r = n.options.parse(i, e)
                        } catch (t) {
                            s = "failed parsing " + e + " to json"
                        }
                        if (s) return t(s, !1);
                        t(null, r)
                    }))
                }
            }, {
                key: "create",
                value: function (e, t, n, i) {
                    var o = this;
                    "string" == typeof e && (e = [e]);
                    var r = this.options.parsePayload(t, n, i);
                    e.forEach((function (e) {
                        var n = o.services.interpolator.interpolate(o.options.addPath, {
                            lng: e,
                            ns: t
                        });
                        o.options.ajax(n, o.options, (function (e, t) {}), r)
                    }))
                }
            }]) && e(n.prototype, i), t
        }();
        return u.type = "backend", u
    })),
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).i18nextBrowserLanguageDetector = t()
    }(this, (function () {
        "use strict";

        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var t = [],
            n = t.forEach,
            i = t.slice;

        function o(e) {
            return n.call(i.call(arguments, 1), (function (t) {
                if (t)
                    for (var n in t) void 0 === e[n] && (e[n] = t[n])
            })), e
        }
        var r = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
            s = function (e, t, n) {
                var i = n || {};
                i.path = i.path || "/";
                var o = e + "=" + encodeURIComponent(t);
                if (i.maxAge > 0) {
                    var s = i.maxAge - 0;
                    if (isNaN(s)) throw new Error("maxAge should be a Number");
                    o += "; Max-Age=" + Math.floor(s)
                }
                if (i.domain) {
                    if (!r.test(i.domain)) throw new TypeError("option domain is invalid");
                    o += "; Domain=" + i.domain
                }
                if (i.path) {
                    if (!r.test(i.path)) throw new TypeError("option path is invalid");
                    o += "; Path=" + i.path
                }
                if (i.expires) {
                    if ("function" != typeof i.expires.toUTCString) throw new TypeError("option expires is invalid");
                    o += "; Expires=" + i.expires.toUTCString()
                }
                if (i.httpOnly && (o += "; HttpOnly"), i.secure && (o += "; Secure"), i.sameSite) switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                    case !0:
                        o += "; SameSite=Strict";
                        break;
                    case "lax":
                        o += "; SameSite=Lax";
                        break;
                    case "strict":
                        o += "; SameSite=Strict";
                        break;
                    case "none":
                        o += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid")
                }
                return o
            },
            a = {
                name: "cookie",
                lookup: function (e) {
                    var t;
                    if (e.lookupCookie && "undefined" != typeof document) {
                        var n = function (e) {
                            for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                                for (var o = n[i];
                                    " " === o.charAt(0);) o = o.substring(1, o.length);
                                if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
                            }
                            return null
                        }(e.lookupCookie);
                        n && (t = n)
                    }
                    return t
                },
                cacheUserLanguage: function (e, t) {
                    t.lookupCookie && "undefined" != typeof document && function (e, t, n, i) {
                        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                            path: "/",
                            sameSite: "strict"
                        };
                        n && (o.expires = new Date, o.expires.setTime(o.expires.getTime() + 60 * n * 1e3)), i && (o.domain = i), document.cookie = s(e, encodeURIComponent(t), o)
                    }(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions)
                }
            },
            l = {
                name: "querystring",
                lookup: function (e) {
                    var t;
                    if ("undefined" != typeof window)
                        for (var n = window.location.search.substring(1).split("&"), i = 0; i < n.length; i++) {
                            var o = n[i].indexOf("=");
                            o > 0 && n[i].substring(0, o) === e.lookupQuerystring && (t = n[i].substring(o + 1))
                        }
                    return t
                }
            },
            c = null,
            u = function () {
                if (null !== c) return c;
                try {
                    c = "undefined" !== window && null !== window.localStorage, window.localStorage.setItem("i18next.translate.boo", "foo"), window.localStorage.removeItem("i18next.translate.boo")
                } catch (e) {
                    c = !1
                }
                return c
            },
            p = {
                name: "localStorage",
                lookup: function (e) {
                    var t;
                    if (e.lookupLocalStorage && u()) {
                        var n = window.localStorage.getItem(e.lookupLocalStorage);
                        n && (t = n)
                    }
                    return t
                },
                cacheUserLanguage: function (e, t) {
                    t.lookupLocalStorage && u() && window.localStorage.setItem(t.lookupLocalStorage, e)
                }
            },
            h = null,
            f = function () {
                if (null !== h) return h;
                try {
                    h = "undefined" !== window && null !== window.sessionStorage, window.sessionStorage.setItem("i18next.translate.boo", "foo"), window.sessionStorage.removeItem("i18next.translate.boo")
                } catch (e) {
                    h = !1
                }
                return h
            },
            d = {
                name: "sessionStorage",
                lookup: function (e) {
                    var t;
                    if (e.lookupSessionStorage && f()) {
                        var n = window.sessionStorage.getItem(e.lookupSessionStorage);
                        n && (t = n)
                    }
                    return t
                },
                cacheUserLanguage: function (e, t) {
                    t.lookupSessionStorage && f() && window.sessionStorage.setItem(t.lookupSessionStorage, e)
                }
            },
            g = {
                name: "navigator",
                lookup: function (e) {
                    var t = [];
                    if ("undefined" != typeof navigator) {
                        if (navigator.languages)
                            for (var n = 0; n < navigator.languages.length; n++) t.push(navigator.languages[n]);
                        navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language)
                    }
                    return t.length > 0 ? t : void 0
                }
            },
            m = {
                name: "htmlTag",
                lookup: function (e) {
                    var t, n = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
                    return n && "function" == typeof n.getAttribute && (t = n.getAttribute("lang")), t
                }
            },
            y = {
                name: "path",
                lookup: function (e) {
                    var t;
                    if ("undefined" != typeof window) {
                        var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                        if (n instanceof Array)
                            if ("number" == typeof e.lookupFromPathIndex) {
                                if ("string" != typeof n[e.lookupFromPathIndex]) return;
                                t = n[e.lookupFromPathIndex].replace("/", "")
                            } else t = n[0].replace("/", "")
                    }
                    return t
                }
            },
            v = {
                name: "subdomain",
                lookup: function (e) {
                    var t;
                    if ("undefined" != typeof window) {
                        var n = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
                        n instanceof Array && (t = "number" == typeof e.lookupFromSubdomainIndex ? n[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : n[0].replace("http://", "").replace("https://", "").replace(".", ""))
                    }
                    return t
                }
            },
            b = function () {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.type = "languageDetector", this.detectors = {}, this.init(e, n)
                }
                var n, i;
                return n = t, (i = [{
                    key: "init",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        this.services = e, this.options = o(t, this.options || {}, {
                            order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
                            lookupQuerystring: "lng",
                            lookupCookie: "i18next",
                            lookupLocalStorage: "i18nextLng",
                            lookupSessionStorage: "i18nextLng",
                            caches: ["localStorage"],
                            excludeCacheFor: ["cimode"]
                        }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(a), this.addDetector(l), this.addDetector(p), this.addDetector(d), this.addDetector(g), this.addDetector(m), this.addDetector(y), this.addDetector(v)
                    }
                }, {
                    key: "addDetector",
                    value: function (e) {
                        this.detectors[e.name] = e
                    }
                }, {
                    key: "detect",
                    value: function (e) {
                        var t = this;
                        e || (e = this.options.order);
                        var n = [];
                        return e.forEach((function (e) {
                            if (t.detectors[e]) {
                                var i = t.detectors[e].lookup(t.options);
                                i && "string" == typeof i && (i = [i]), i && (n = n.concat(i))
                            }
                        })), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
                    }
                }, {
                    key: "cacheUserLanguage",
                    value: function (e, t) {
                        var n = this;
                        t || (t = this.options.caches), t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((function (t) {
                            n.detectors[t] && n.detectors[t].cacheUserLanguage(e, n.options)
                        })))
                    }
                }]) && e(n.prototype, i), t
            }();
        return b.type = "languageDetector", b
    })),
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.jqueryI18next = t()
    }(this, (function () {
        "use strict";
        var e = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            t = {
                tName: "t",
                i18nName: "i18n",
                handleName: "localize",
                selectorAttr: "data-i18n",
                targetAttr: "i18n-target",
                optionsAttr: "i18n-options",
                useOptionsAttr: !1,
                parseDefaultValueFromContent: !0
            };
        return {
            init: function (n, i) {
                function o(t, i, o) {
                    function r(t, n) {
                        return a.parseDefaultValueFromContent ? e({}, t, {
                            defaultValue: n
                        }) : t
                    }
                    if (0 !== i.length) {
                        var s = "text";
                        if (0 === i.indexOf("[")) {
                            var l = i.split("]");
                            i = l[1], s = l[0].substr(1, l[0].length - 1)
                        }
                        if (i.indexOf(";") === i.length - 1 && (i = i.substr(0, i.length - 2)), "html" === s) t.html(n.t(i, r(o, t.html())));
                        else if ("text" === s) t.text(n.t(i, r(o, t.text())));
                        else if ("prepend" === s) t.prepend(n.t(i, r(o, t.html())));
                        else if ("append" === s) t.append(n.t(i, r(o, t.html())));
                        else if (0 === s.indexOf("data-")) {
                            var c = s.substr("data-".length),
                                u = n.t(i, r(o, t.data(c)));
                            t.data(c, u), t.attr(s, u)
                        } else t.attr(s, n.t(i, r(o, t.attr(s))))
                    }
                }

                function r(t, n) {
                    var r = t.attr(a.selectorAttr);
                    if (r || void 0 === r || !1 === r || (r = t.text() || t.val()), r) {
                        var s = t,
                            l = t.data(a.targetAttr);
                        if (l && (s = t.find(l) || t), n || !0 !== a.useOptionsAttr || (n = t.data(a.optionsAttr)), n = n || {}, r.indexOf(";") >= 0) {
                            var c = r.split(";");
                            i.each(c, (function (e, t) {
                                "" !== t && o(s, t.trim(), n)
                            }))
                        } else o(s, r, n);
                        if (!0 === a.useOptionsAttr) {
                            var u = {};
                            delete(u = e({
                                clone: u
                            }, n)).lng, t.data(a.optionsAttr, u)
                        }
                    }
                }

                function s(e) {
                    return this.each((function () {
                        r(i(this), e), i(this).find("[" + a.selectorAttr + "]").each((function () {
                            r(i(this), e)
                        }))
                    }))
                }
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                a = e({}, t, a), i[a.tName] = n.t.bind(n), i[a.i18nName] = n, i.fn[a.handleName] = s
            }
        }
    })),
    function (e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.feather = t() : e.feather = t()
    }("undefined" != typeof self ? self : this, (function () {
        return function (e) {
            var t = {};

            function n(i) {
                if (t[i]) return t[i].exports;
                var o = t[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
            }
            return n.m = e, n.c = t, n.d = function (e, t, i) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }, n.r = function (e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, n.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 80)
        }([function (e, t, n) {
            (function (t) {
                var n = "object",
                    i = function (e) {
                        return e && e.Math == Math && e
                    };
                e.exports = i(typeof globalThis == n && globalThis) || i(typeof window == n && window) || i(typeof self == n && self) || i(typeof t == n && t) || Function("return this")()
            }).call(this, n(75))
        }, function (e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function (e, t) {
                return n.call(e, t)
            }
        }, function (e, t, n) {
            var i = n(0),
                o = n(11),
                r = n(33),
                s = n(62),
                a = i.Symbol,
                l = o("wks");
            e.exports = function (e) {
                return l[e] || (l[e] = s && a[e] || (s ? a : r)("Symbol." + e))
            }
        }, function (e, t, n) {
            var i = n(6);
            e.exports = function (e) {
                if (!i(e)) throw TypeError(String(e) + " is not an object");
                return e
            }
        }, function (e, t) {
            e.exports = function (e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        }, function (e, t, n) {
            var i = n(8),
                o = n(7),
                r = n(10);
            e.exports = i ? function (e, t, n) {
                return o.f(e, t, r(1, n))
            } : function (e, t, n) {
                return e[t] = n, e
            }
        }, function (e, t) {
            e.exports = function (e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        }, function (e, t, n) {
            var i = n(8),
                o = n(35),
                r = n(3),
                s = n(18),
                a = Object.defineProperty;
            t.f = i ? a : function (e, t, n) {
                if (r(e), t = s(t, !0), r(n), o) try {
                    return a(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        }, function (e, t, n) {
            var i = n(4);
            e.exports = !i((function () {
                return 7 != Object.defineProperty({}, "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }))
        }, function (e, t) {
            e.exports = {}
        }, function (e, t) {
            e.exports = function (e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        }, function (e, t, n) {
            var i = n(0),
                o = n(19),
                r = n(17),
                s = i["__core-js_shared__"] || o("__core-js_shared__", {});
            (e.exports = function (e, t) {
                return s[e] || (s[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.1.3",
                mode: r ? "pure" : "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            })
        }, function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = s(n(43)),
                o = s(n(41)),
                r = s(n(40));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = Object.keys(o.default).map((function (e) {
                return new i.default(e, o.default[e], r.default[e])
            })).reduce((function (e, t) {
                return e[t.name] = t, e
            }), {})
        }, function (e, t) {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }, function (e, t, n) {
            var i = n(72),
                o = n(20);
            e.exports = function (e) {
                return i(o(e))
            }
        }, function (e, t) {
            e.exports = {}
        }, function (e, t, n) {
            var i = n(11),
                o = n(33),
                r = i("keys");
            e.exports = function (e) {
                return r[e] || (r[e] = o(e))
            }
        }, function (e, t) {
            e.exports = !1
        }, function (e, t, n) {
            var i = n(6);
            e.exports = function (e, t) {
                if (!i(e)) return e;
                var n, o;
                if (t && "function" == typeof (n = e.toString) && !i(o = n.call(e))) return o;
                if ("function" == typeof (n = e.valueOf) && !i(o = n.call(e))) return o;
                if (!t && "function" == typeof (n = e.toString) && !i(o = n.call(e))) return o;
                throw TypeError("Can't convert object to primitive value")
            }
        }, function (e, t, n) {
            var i = n(0),
                o = n(5);
            e.exports = function (e, t) {
                try {
                    o(i, e, t)
                } catch (n) {
                    i[e] = t
                }
                return t
            }
        }, function (e, t) {
            e.exports = function (e) {
                if (null == e) throw TypeError("Can't call method on " + e);
                return e
            }
        }, function (e, t) {
            var n = Math.ceil,
                i = Math.floor;
            e.exports = function (e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
            }
        }, function (e, t, n) {
            var i;
            /*!
                Copyright (c) 2016 Jed Watson.
                Licensed under the MIT License (MIT), see
                http://jedwatson.github.io/classnames
              */
            /*!
                Copyright (c) 2016 Jed Watson.
                Licensed under the MIT License (MIT), see
                http://jedwatson.github.io/classnames
              */
            ! function () {
                "use strict";
                var n = function () {
                    function e() {}

                    function t(e, t) {
                        for (var n = t.length, i = 0; i < n; ++i) o(e, t[i])
                    }
                    e.prototype = Object.create(null);
                    var n = {}.hasOwnProperty,
                        i = /\s+/;

                    function o(e, o) {
                        if (o) {
                            var r = typeof o;
                            "string" === r ? function (e, t) {
                                for (var n = t.split(i), o = n.length, r = 0; r < o; ++r) e[n[r]] = !0
                            }(e, o) : Array.isArray(o) ? t(e, o) : "object" === r ? function (e, t) {
                                for (var i in t) n.call(t, i) && (e[i] = !!t[i])
                            }(e, o) : "number" === r && function (e, t) {
                                e[t] = !0
                            }(e, o)
                        }
                    }
                    return function () {
                        for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                        var r = new e;
                        t(r, i);
                        var s = [];
                        for (var a in r) r[a] && s.push(a);
                        return s.join(" ")
                    }
                }();
                void 0 !== e && e.exports ? e.exports = n : void 0 === (i = function () {
                    return n
                }.apply(t, [])) || (e.exports = i)
            }()
        }, function (e, t, n) {
            var i = n(7).f,
                o = n(1),
                r = n(2)("toStringTag");
            e.exports = function (e, t, n) {
                e && !o(e = n ? e : e.prototype, r) && i(e, r, {
                    configurable: !0,
                    value: t
                })
            }
        }, function (e, t, n) {
            var i = n(20);
            e.exports = function (e) {
                return Object(i(e))
            }
        }, function (e, t, n) {
            var i = n(1),
                o = n(24),
                r = n(16),
                s = n(63),
                a = r("IE_PROTO"),
                l = Object.prototype;
            e.exports = s ? Object.getPrototypeOf : function (e) {
                return e = o(e), i(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? l : null
            }
        }, function (e, t, n) {
            "use strict";
            var i, o, r, s = n(25),
                a = n(5),
                l = n(1),
                c = n(2),
                u = n(17),
                p = c("iterator"),
                h = !1;
            [].keys && ("next" in (r = [].keys()) ? (o = s(s(r))) !== Object.prototype && (i = o) : h = !0), null == i && (i = {}), u || l(i, p) || a(i, p, (function () {
                return this
            })), e.exports = {
                IteratorPrototype: i,
                BUGGY_SAFARI_ITERATORS: h
            }
        }, function (e, t, n) {
            var i = n(21),
                o = Math.min;
            e.exports = function (e) {
                return e > 0 ? o(i(e), 9007199254740991) : 0
            }
        }, function (e, t, n) {
            var i = n(1),
                o = n(14),
                r = n(68),
                s = n(15),
                a = r(!1);
            e.exports = function (e, t) {
                var n, r = o(e),
                    l = 0,
                    c = [];
                for (n in r) !i(s, n) && i(r, n) && c.push(n);
                for (; t.length > l;) i(r, n = t[l++]) && (~a(c, n) || c.push(n));
                return c
            }
        }, function (e, t, n) {
            var i = n(0),
                o = n(11),
                r = n(5),
                s = n(1),
                a = n(19),
                l = n(36),
                c = n(37),
                u = c.get,
                p = c.enforce,
                h = String(l).split("toString");
            o("inspectSource", (function (e) {
                return l.call(e)
            })), (e.exports = function (e, t, n, o) {
                var l = !!o && !!o.unsafe,
                    c = !!o && !!o.enumerable,
                    u = !!o && !!o.noTargetGet;
                "function" == typeof n && ("string" != typeof t || s(n, "name") || r(n, "name", t), p(n).source = h.join("string" == typeof t ? t : "")), e !== i ? (l ? !u && e[t] && (c = !0) : delete e[t], c ? e[t] = n : r(e, t, n)) : c ? e[t] = n : a(t, n)
            })(Function.prototype, "toString", (function () {
                return "function" == typeof this && u(this).source || l.call(this)
            }))
        }, function (e, t) {
            var n = {}.toString;
            e.exports = function (e) {
                return n.call(e).slice(8, -1)
            }
        }, function (e, t, n) {
            var i = n(8),
                o = n(73),
                r = n(10),
                s = n(14),
                a = n(18),
                l = n(1),
                c = n(35),
                u = Object.getOwnPropertyDescriptor;
            t.f = i ? u : function (e, t) {
                if (e = s(e), t = a(t, !0), c) try {
                    return u(e, t)
                } catch (e) {}
                if (l(e, t)) return r(!o.f.call(e, t), e[t])
            }
        }, function (e, t, n) {
            var i = n(0),
                o = n(31).f,
                r = n(5),
                s = n(29),
                a = n(19),
                l = n(71),
                c = n(65);
            e.exports = function (e, t) {
                var n, u, p, h, f, d = e.target,
                    g = e.global,
                    m = e.stat;
                if (n = g ? i : m ? i[d] || a(d, {}) : (i[d] || {}).prototype)
                    for (u in t) {
                        if (h = t[u], p = e.noTargetGet ? (f = o(n, u)) && f.value : n[u], !c(g ? u : d + (m ? "." : "#") + u, e.forced) && void 0 !== p) {
                            if (typeof h == typeof p) continue;
                            l(h, p)
                        }(e.sham || p && p.sham) && r(h, "sham", !0), s(n, u, h, e)
                    }
            }
        }, function (e, t) {
            var n = 0,
                i = Math.random();
            e.exports = function (e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
            }
        }, function (e, t, n) {
            var i = n(0),
                o = n(6),
                r = i.document,
                s = o(r) && o(r.createElement);
            e.exports = function (e) {
                return s ? r.createElement(e) : {}
            }
        }, function (e, t, n) {
            var i = n(8),
                o = n(4),
                r = n(34);
            e.exports = !i && !o((function () {
                return 7 != Object.defineProperty(r("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }))
        }, function (e, t, n) {
            var i = n(11);
            e.exports = i("native-function-to-string", Function.toString)
        }, function (e, t, n) {
            var i, o, r, s = n(76),
                a = n(0),
                l = n(6),
                c = n(5),
                u = n(1),
                p = n(16),
                h = n(15),
                f = a.WeakMap;
            if (s) {
                var d = new f,
                    g = d.get,
                    m = d.has,
                    y = d.set;
                i = function (e, t) {
                    return y.call(d, e, t), t
                }, o = function (e) {
                    return g.call(d, e) || {}
                }, r = function (e) {
                    return m.call(d, e)
                }
            } else {
                var v = p("state");
                h[v] = !0, i = function (e, t) {
                    return c(e, v, t), t
                }, o = function (e) {
                    return u(e, v) ? e[v] : {}
                }, r = function (e) {
                    return u(e, v)
                }
            }
            e.exports = {
                set: i,
                get: o,
                has: r,
                enforce: function (e) {
                    return r(e) ? o(e) : i(e, {})
                },
                getterFor: function (e) {
                    return function (t) {
                        var n;
                        if (!l(t) || (n = o(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                        return n
                    }
                }
            }
        }, function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                o = s(n(22)),
                r = s(n(12));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ("undefined" == typeof document) throw new Error("`feather.replace()` only works in a browser environment.");
                var t = document.querySelectorAll("[data-feather]");
                Array.from(t).forEach((function (t) {
                    return function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = function (e) {
                                return Array.from(e.attributes).reduce((function (e, t) {
                                    return e[t.name] = t.value, e
                                }), {})
                            }(e),
                            s = n["data-feather"];
                        delete n["data-feather"];
                        var a = r.default[s].toSvg(i({}, t, n, {
                                class: (0, o.default)(t.class, n.class)
                            })),
                            l = (new DOMParser).parseFromString(a, "image/svg+xml").querySelector("svg");
                        e.parentNode.replaceChild(l, e)
                    }(t, e)
                }))
            }
        }, function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i, o = (i = n(12)) && i.__esModule ? i : {
                default: i
            };
            t.default = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !e) throw new Error("The required `key` (icon name) parameter is missing.");
                if (!o.default[e]) throw new Error("No icon matching '" + e + "'. See the complete list of icons at https://feathericons.com");
                return o.default[e].toSvg(t)
            }
        }, function (e) {
            e.exports = {
                activity: ["pulse", "health", "action", "motion"],
                airplay: ["stream", "cast", "mirroring"],
                "alert-circle": ["warning", "alert", "danger"],
                "alert-octagon": ["warning", "alert", "danger"],
                "alert-triangle": ["warning", "alert", "danger"],
                "align-center": ["text alignment", "center"],
                "align-justify": ["text alignment", "justified"],
                "align-left": ["text alignment", "left"],
                "align-right": ["text alignment", "right"],
                anchor: [],
                archive: ["index", "box"],
                "at-sign": ["mention", "at", "email", "message"],
                award: ["achievement", "badge"],
                aperture: ["camera", "photo"],
                "bar-chart": ["statistics", "diagram", "graph"],
                "bar-chart-2": ["statistics", "diagram", "graph"],
                battery: ["power", "electricity"],
                "battery-charging": ["power", "electricity"],
                bell: ["alarm", "notification", "sound"],
                "bell-off": ["alarm", "notification", "silent"],
                bluetooth: ["wireless"],
                "book-open": ["read", "library"],
                book: ["read", "dictionary", "booklet", "magazine", "library"],
                bookmark: ["read", "clip", "marker", "tag"],
                box: ["cube"],
                briefcase: ["work", "bag", "baggage", "folder"],
                calendar: ["date"],
                camera: ["photo"],
                cast: ["chromecast", "airplay"],
                circle: ["off", "zero", "record"],
                clipboard: ["copy"],
                clock: ["time", "watch", "alarm"],
                "cloud-drizzle": ["weather", "shower"],
                "cloud-lightning": ["weather", "bolt"],
                "cloud-rain": ["weather"],
                "cloud-snow": ["weather", "blizzard"],
                cloud: ["weather"],
                codepen: ["logo"],
                codesandbox: ["logo"],
                code: ["source", "programming"],
                coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
                columns: ["layout"],
                command: ["keyboard", "cmd", "terminal", "prompt"],
                compass: ["navigation", "safari", "travel", "direction"],
                copy: ["clone", "duplicate"],
                "corner-down-left": ["arrow", "return"],
                "corner-down-right": ["arrow"],
                "corner-left-down": ["arrow"],
                "corner-left-up": ["arrow"],
                "corner-right-down": ["arrow"],
                "corner-right-up": ["arrow"],
                "corner-up-left": ["arrow"],
                "corner-up-right": ["arrow"],
                cpu: ["processor", "technology"],
                "credit-card": ["purchase", "payment", "cc"],
                crop: ["photo", "image"],
                crosshair: ["aim", "target"],
                database: ["storage", "memory"],
                delete: ["remove"],
                disc: ["album", "cd", "dvd", "music"],
                "dollar-sign": ["currency", "money", "payment"],
                droplet: ["water"],
                edit: ["pencil", "change"],
                "edit-2": ["pencil", "change"],
                "edit-3": ["pencil", "change"],
                eye: ["view", "watch"],
                "eye-off": ["view", "watch", "hide", "hidden"],
                "external-link": ["outbound"],
                facebook: ["logo", "social"],
                "fast-forward": ["music"],
                figma: ["logo", "design", "tool"],
                "file-minus": ["delete", "remove", "erase"],
                "file-plus": ["add", "create", "new"],
                "file-text": ["data", "txt", "pdf"],
                film: ["movie", "video"],
                filter: ["funnel", "hopper"],
                flag: ["report"],
                "folder-minus": ["directory"],
                "folder-plus": ["directory"],
                folder: ["directory"],
                framer: ["logo", "design", "tool"],
                frown: ["emoji", "face", "bad", "sad", "emotion"],
                gift: ["present", "box", "birthday", "party"],
                "git-branch": ["code", "version control"],
                "git-commit": ["code", "version control"],
                "git-merge": ["code", "version control"],
                "git-pull-request": ["code", "version control"],
                github: ["logo", "version control"],
                gitlab: ["logo", "version control"],
                globe: ["world", "browser", "language", "translate"],
                "hard-drive": ["computer", "server", "memory", "data"],
                hash: ["hashtag", "number", "pound"],
                headphones: ["music", "audio", "sound"],
                heart: ["like", "love", "emotion"],
                "help-circle": ["question mark"],
                hexagon: ["shape", "node.js", "logo"],
                home: ["house", "living"],
                image: ["picture"],
                inbox: ["email"],
                instagram: ["logo", "camera"],
                key: ["password", "login", "authentication", "secure"],
                layers: ["stack"],
                layout: ["window", "webpage"],
                "life-bouy": ["help", "life ring", "support"],
                link: ["chain", "url"],
                "link-2": ["chain", "url"],
                linkedin: ["logo", "social media"],
                list: ["options"],
                lock: ["security", "password", "secure"],
                "log-in": ["sign in", "arrow", "enter"],
                "log-out": ["sign out", "arrow", "exit"],
                mail: ["email", "message"],
                "map-pin": ["location", "navigation", "travel", "marker"],
                map: ["location", "navigation", "travel"],
                maximize: ["fullscreen"],
                "maximize-2": ["fullscreen", "arrows", "expand"],
                meh: ["emoji", "face", "neutral", "emotion"],
                menu: ["bars", "navigation", "hamburger"],
                "message-circle": ["comment", "chat"],
                "message-square": ["comment", "chat"],
                "mic-off": ["record", "sound", "mute"],
                mic: ["record", "sound", "listen"],
                minimize: ["exit fullscreen", "close"],
                "minimize-2": ["exit fullscreen", "arrows", "close"],
                minus: ["subtract"],
                monitor: ["tv", "screen", "display"],
                moon: ["dark", "night"],
                "more-horizontal": ["ellipsis"],
                "more-vertical": ["ellipsis"],
                "mouse-pointer": ["arrow", "cursor"],
                move: ["arrows"],
                music: ["note"],
                navigation: ["location", "travel"],
                "navigation-2": ["location", "travel"],
                octagon: ["stop"],
                package: ["box", "container"],
                paperclip: ["attachment"],
                pause: ["music", "stop"],
                "pause-circle": ["music", "audio", "stop"],
                "pen-tool": ["vector", "drawing"],
                percent: ["discount"],
                "phone-call": ["ring"],
                "phone-forwarded": ["call"],
                "phone-incoming": ["call"],
                "phone-missed": ["call"],
                "phone-off": ["call", "mute"],
                "phone-outgoing": ["call"],
                phone: ["call"],
                play: ["music", "start"],
                "pie-chart": ["statistics", "diagram"],
                "play-circle": ["music", "start"],
                plus: ["add", "new"],
                "plus-circle": ["add", "new"],
                "plus-square": ["add", "new"],
                pocket: ["logo", "save"],
                power: ["on", "off"],
                printer: ["fax", "office", "device"],
                radio: ["signal"],
                "refresh-cw": ["synchronise", "arrows"],
                "refresh-ccw": ["arrows"],
                repeat: ["loop", "arrows"],
                rewind: ["music"],
                "rotate-ccw": ["arrow"],
                "rotate-cw": ["arrow"],
                rss: ["feed", "subscribe"],
                save: ["floppy disk"],
                scissors: ["cut"],
                search: ["find", "magnifier", "magnifying glass"],
                send: ["message", "mail", "email", "paper airplane", "paper aeroplane"],
                settings: ["cog", "edit", "gear", "preferences"],
                "share-2": ["network", "connections"],
                shield: ["security", "secure"],
                "shield-off": ["security", "insecure"],
                "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
                "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
                shuffle: ["music"],
                "skip-back": ["music"],
                "skip-forward": ["music"],
                slack: ["logo"],
                slash: ["ban", "no"],
                sliders: ["settings", "controls"],
                smartphone: ["cellphone", "device"],
                smile: ["emoji", "face", "happy", "good", "emotion"],
                speaker: ["audio", "music"],
                star: ["bookmark", "favorite", "like"],
                "stop-circle": ["media", "music"],
                sun: ["brightness", "weather", "light"],
                sunrise: ["weather", "time", "morning", "day"],
                sunset: ["weather", "time", "evening", "night"],
                tablet: ["device"],
                tag: ["label"],
                target: ["logo", "bullseye"],
                terminal: ["code", "command line", "prompt"],
                thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
                "thumbs-down": ["dislike", "bad", "emotion"],
                "thumbs-up": ["like", "good", "emotion"],
                "toggle-left": ["on", "off", "switch"],
                "toggle-right": ["on", "off", "switch"],
                tool: ["settings", "spanner"],
                trash: ["garbage", "delete", "remove", "bin"],
                "trash-2": ["garbage", "delete", "remove", "bin"],
                triangle: ["delta"],
                truck: ["delivery", "van", "shipping", "transport", "lorry"],
                tv: ["television", "stream"],
                twitch: ["logo"],
                twitter: ["logo", "social"],
                type: ["text"],
                umbrella: ["rain", "weather"],
                unlock: ["security"],
                "user-check": ["followed", "subscribed"],
                "user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
                "user-plus": ["new", "add", "create", "follow", "subscribe"],
                "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"],
                user: ["person", "account"],
                users: ["group"],
                "video-off": ["camera", "movie", "film"],
                video: ["camera", "movie", "film"],
                voicemail: ["phone"],
                volume: ["music", "sound", "mute"],
                "volume-1": ["music", "sound"],
                "volume-2": ["music", "sound"],
                "volume-x": ["music", "sound", "mute"],
                watch: ["clock", "time"],
                "wifi-off": ["disabled"],
                wifi: ["connection", "signal", "wireless"],
                wind: ["weather", "air"],
                "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
                "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
                "x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
                x: ["cancel", "close", "delete", "remove", "times", "clear"],
                youtube: ["logo", "video", "play"],
                "zap-off": ["flash", "camera", "lightning"],
                zap: ["flash", "camera", "lightning"],
                "zoom-in": ["magnifying glass"],
                "zoom-out": ["magnifying glass"]
            }
        }, function (e) {
            e.exports = {
                activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
                airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
                "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
                "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
                "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
                "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
                anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
                aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
                archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
                "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
                "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
                "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
                "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
                "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
                "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
                "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
                "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
                "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
                "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
                "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
                "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
                "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
                award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
                "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
                "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
                "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
                battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
                "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
                bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
                bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
                "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
                book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
                box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
                calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
                camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
                cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
                "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
                "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
                check: '<polyline points="20 6 9 17 4 12"></polyline>',
                "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
                "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
                "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
                "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
                "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
                "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
                "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
                "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
                chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
                circle: '<circle cx="12" cy="12" r="10"></circle>',
                clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
                clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
                "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
                "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
                cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
                code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
                codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
                codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
                columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
                command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
                compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
                copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
                "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
                "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
                "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
                "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
                "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
                "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
                "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
                "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
                cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
                "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
                crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
                crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
                database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
                delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
                disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
                "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
                "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
                divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
                "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
                "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
                download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
                dribbble: '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
                droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
                "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
                "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
                edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
                "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
                "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
                facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
                "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
                feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
                figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
                "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
                file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
                film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
                filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
                flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
                "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
                "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
                folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
                framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
                frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
                "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
                "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
                "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
                "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
                github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
                gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
                globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
                grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
                "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
                hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
                headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
                heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
                home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
                image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
                inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
                info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
                instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
                italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
                key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
                layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
                "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
                "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
                link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
                linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
                list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
                loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
                lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
                "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
                "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
                mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
                "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
                map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
                "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
                meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
                "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
                "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
                "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
                "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
                "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
                minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
                monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
                moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
                "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
                "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
                "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
                move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
                music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
                "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
                navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
                octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
                package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
                "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
                pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
                "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
                percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
                "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
                "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
                "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
                play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
                "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
                pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
                power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
                printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
                radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
                "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
                "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
                repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
                rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
                "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
                "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
                rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
                save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
                scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
                search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
                send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
                server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
                settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
                "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
                share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
                "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
                "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
                "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
                shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
                sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
                "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
                "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
                slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
                slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
                sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
                smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
                square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
                star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
                sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
                sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
                sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
                tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
                target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
                terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
                thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
                "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
                "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
                "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
                "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
                tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
                "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
                trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
                trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
                "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
                "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
                triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
                truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
                tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
                twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
                twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
                type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
                umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
                underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
                unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
                "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
                upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
                "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
                "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
                user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
                users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
                "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
                voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
                "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
                volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
                watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
                "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
                "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
                x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
                youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
                "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
                zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
                "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
            }
        }, function (e) {
            e.exports = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }
        }, function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                r = a(n(22)),
                s = a(n(42));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = function () {
                function e(t, n) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.name = t, this.contents = n, this.tags = o, this.attrs = i({}, s.default, {
                        class: "feather feather-" + t
                    })
                }
                return o(e, [{
                    key: "toSvg",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return "<svg " + function (e) {
                            return Object.keys(e).map((function (t) {
                                return t + '="' + e[t] + '"'
                            })).join(" ")
                        }(i({}, this.attrs, e, {
                            class: (0, r.default)(this.attrs.class, e.class)
                        })) + ">" + this.contents + "</svg>"
                    }
                }, {
                    key: "toString",
                    value: function () {
                        return this.contents
                    }
                }]), e
            }();
            t.default = l
        }, function (e, t, n) {
            "use strict";
            var i = s(n(12)),
                o = s(n(39)),
                r = s(n(38));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                icons: i.default,
                toSvg: o.default,
                replace: r.default
            }
        }, function (e, t, n) {
            e.exports = n(0)
        }, function (e, t, n) {
            var i = n(2)("iterator"),
                o = !1;
            try {
                var r = 0,
                    s = {
                        next: function () {
                            return {
                                done: !!r++
                            }
                        },
                        return: function () {
                            o = !0
                        }
                    };
                s[i] = function () {
                    return this
                }, Array.from(s, (function () {
                    throw 2
                }))
            } catch (e) {}
            e.exports = function (e, t) {
                if (!t && !o) return !1;
                var n = !1;
                try {
                    var r = {};
                    r[i] = function () {
                        return {
                            next: function () {
                                return {
                                    done: n = !0
                                }
                            }
                        }
                    }, e(r)
                } catch (e) {}
                return n
            }
        }, function (e, t, n) {
            var i = n(30),
                o = n(2)("toStringTag"),
                r = "Arguments" == i(function () {
                    return arguments
                }());
            e.exports = function (e) {
                var t, n, s;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                    try {
                        return e[t]
                    } catch (e) {}
                }(t = Object(e), o)) ? n : r ? i(t) : "Object" == (s = i(t)) && "function" == typeof t.callee ? "Arguments" : s
            }
        }, function (e, t, n) {
            var i = n(47),
                o = n(9),
                r = n(2)("iterator");
            e.exports = function (e) {
                if (null != e) return e[r] || e["@@iterator"] || o[i(e)]
            }
        }, function (e, t, n) {
            "use strict";
            var i = n(18),
                o = n(7),
                r = n(10);
            e.exports = function (e, t, n) {
                var s = i(t);
                s in e ? o.f(e, s, r(0, n)) : e[s] = n
            }
        }, function (e, t, n) {
            var i = n(2),
                o = n(9),
                r = i("iterator"),
                s = Array.prototype;
            e.exports = function (e) {
                return void 0 !== e && (o.Array === e || s[r] === e)
            }
        }, function (e, t, n) {
            var i = n(3);
            e.exports = function (e, t, n, o) {
                try {
                    return o ? t(i(n)[0], n[1]) : t(n)
                } catch (t) {
                    var r = e.return;
                    throw void 0 !== r && i(r.call(e)), t
                }
            }
        }, function (e, t) {
            e.exports = function (e) {
                if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                return e
            }
        }, function (e, t, n) {
            var i = n(52);
            e.exports = function (e, t, n) {
                if (i(e), void 0 === t) return e;
                switch (n) {
                    case 0:
                        return function () {
                            return e.call(t)
                        };
                    case 1:
                        return function (n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function (n, i) {
                            return e.call(t, n, i)
                        };
                    case 3:
                        return function (n, i, o) {
                            return e.call(t, n, i, o)
                        }
                }
                return function () {
                    return e.apply(t, arguments)
                }
            }
        }, function (e, t, n) {
            "use strict";
            var i = n(53),
                o = n(24),
                r = n(51),
                s = n(50),
                a = n(27),
                l = n(49),
                c = n(48);
            e.exports = function (e) {
                var t, n, u, p, h = o(e),
                    f = "function" == typeof this ? this : Array,
                    d = arguments.length,
                    g = d > 1 ? arguments[1] : void 0,
                    m = void 0 !== g,
                    y = 0,
                    v = c(h);
                if (m && (g = i(g, d > 2 ? arguments[2] : void 0, 2)), null == v || f == Array && s(v))
                    for (n = new f(t = a(h.length)); t > y; y++) l(n, y, m ? g(h[y], y) : h[y]);
                else
                    for (p = v.call(h), n = new f; !(u = p.next()).done; y++) l(n, y, m ? r(p, g, [u.value, y], !0) : u.value);
                return n.length = y, n
            }
        }, function (e, t, n) {
            var i = n(32),
                o = n(54);
            i({
                target: "Array",
                stat: !0,
                forced: !n(46)((function (e) {
                    Array.from(e)
                }))
            }, {
                from: o
            })
        }, function (e, t, n) {
            var i = n(6),
                o = n(3);
            e.exports = function (e, t) {
                if (o(e), !i(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
            }
        }, function (e, t, n) {
            var i = n(56);
            e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                var e, t = !1,
                    n = {};
                try {
                    (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
                } catch (e) {}
                return function (n, o) {
                    return i(n, o), t ? e.call(n, o) : n.__proto__ = o, n
                }
            }() : void 0)
        }, function (e, t, n) {
            var i = n(0).document;
            e.exports = i && i.documentElement
        }, function (e, t, n) {
            var i = n(28),
                o = n(13);
            e.exports = Object.keys || function (e) {
                return i(e, o)
            }
        }, function (e, t, n) {
            var i = n(8),
                o = n(7),
                r = n(3),
                s = n(59);
            e.exports = i ? Object.defineProperties : function (e, t) {
                r(e);
                for (var n, i = s(t), a = i.length, l = 0; a > l;) o.f(e, n = i[l++], t[n]);
                return e
            }
        }, function (e, t, n) {
            var i = n(3),
                o = n(60),
                r = n(13),
                s = n(15),
                a = n(58),
                l = n(34),
                c = n(16)("IE_PROTO"),
                u = function () {},
                p = function () {
                    var e, t = l("iframe"),
                        n = r.length;
                    for (t.style.display = "none", a.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), p = e.F; n--;) delete p.prototype[r[n]];
                    return p()
                };
            e.exports = Object.create || function (e, t) {
                var n;
                return null !== e ? (u.prototype = i(e), n = new u, u.prototype = null, n[c] = e) : n = p(), void 0 === t ? n : o(n, t)
            }, s[c] = !0
        }, function (e, t, n) {
            var i = n(4);
            e.exports = !!Object.getOwnPropertySymbols && !i((function () {
                return !String(Symbol())
            }))
        }, function (e, t, n) {
            var i = n(4);
            e.exports = !i((function () {
                function e() {}
                return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
            }))
        }, function (e, t, n) {
            "use strict";
            var i = n(26).IteratorPrototype,
                o = n(61),
                r = n(10),
                s = n(23),
                a = n(9),
                l = function () {
                    return this
                };
            e.exports = function (e, t, n) {
                var c = t + " Iterator";
                return e.prototype = o(i, {
                    next: r(1, n)
                }), s(e, c, !1, !0), a[c] = l, e
            }
        }, function (e, t, n) {
            var i = n(4),
                o = /#|\.prototype\./,
                r = function (e, t) {
                    var n = a[s(e)];
                    return n == c || n != l && ("function" == typeof t ? i(t) : !!t)
                },
                s = r.normalize = function (e) {
                    return String(e).replace(o, ".").toLowerCase()
                },
                a = r.data = {},
                l = r.NATIVE = "N",
                c = r.POLYFILL = "P";
            e.exports = r
        }, function (e, t) {
            t.f = Object.getOwnPropertySymbols
        }, function (e, t, n) {
            var i = n(21),
                o = Math.max,
                r = Math.min;
            e.exports = function (e, t) {
                var n = i(e);
                return n < 0 ? o(n + t, 0) : r(n, t)
            }
        }, function (e, t, n) {
            var i = n(14),
                o = n(27),
                r = n(67);
            e.exports = function (e) {
                return function (t, n, s) {
                    var a, l = i(t),
                        c = o(l.length),
                        u = r(s, c);
                    if (e && n != n) {
                        for (; c > u;)
                            if ((a = l[u++]) != a) return !0
                    } else
                        for (; c > u; u++)
                            if ((e || u in l) && l[u] === n) return e || u || 0;
                    return !e && -1
                }
            }
        }, function (e, t, n) {
            var i = n(28),
                o = n(13).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function (e) {
                return i(e, o)
            }
        }, function (e, t, n) {
            var i = n(0),
                o = n(69),
                r = n(66),
                s = n(3),
                a = i.Reflect;
            e.exports = a && a.ownKeys || function (e) {
                var t = o.f(s(e)),
                    n = r.f;
                return n ? t.concat(n(e)) : t
            }
        }, function (e, t, n) {
            var i = n(1),
                o = n(70),
                r = n(31),
                s = n(7);
            e.exports = function (e, t) {
                for (var n = o(t), a = s.f, l = r.f, c = 0; c < n.length; c++) {
                    var u = n[c];
                    i(e, u) || a(e, u, l(t, u))
                }
            }
        }, function (e, t, n) {
            var i = n(4),
                o = n(30),
                r = "".split;
            e.exports = i((function () {
                return !Object("z").propertyIsEnumerable(0)
            })) ? function (e) {
                return "String" == o(e) ? r.call(e, "") : Object(e)
            } : Object
        }, function (e, t, n) {
            "use strict";
            var i = {}.propertyIsEnumerable,
                o = Object.getOwnPropertyDescriptor,
                r = o && !i.call({
                    1: 2
                }, 1);
            t.f = r ? function (e) {
                var t = o(this, e);
                return !!t && t.enumerable
            } : i
        }, function (e, t, n) {
            "use strict";
            var i = n(32),
                o = n(64),
                r = n(25),
                s = n(57),
                a = n(23),
                l = n(5),
                c = n(29),
                u = n(2),
                p = n(17),
                h = n(9),
                f = n(26),
                d = f.IteratorPrototype,
                g = f.BUGGY_SAFARI_ITERATORS,
                m = u("iterator"),
                y = function () {
                    return this
                };
            e.exports = function (e, t, n, u, f, v, b) {
                o(n, t, u);
                var x, w, _, k = function (e) {
                        if (e === f && A) return A;
                        if (!g && e in S) return S[e];
                        switch (e) {
                            case "keys":
                            case "values":
                            case "entries":
                                return function () {
                                    return new n(this, e)
                                }
                        }
                        return function () {
                            return new n(this)
                        }
                    },
                    E = t + " Iterator",
                    T = !1,
                    S = e.prototype,
                    C = S[m] || S["@@iterator"] || f && S[f],
                    A = !g && C || k(f),
                    O = "Array" == t && S.entries || C;
                if (O && (x = r(O.call(new e)), d !== Object.prototype && x.next && (p || r(x) === d || (s ? s(x, d) : "function" != typeof x[m] && l(x, m, y)), a(x, E, !0, !0), p && (h[E] = y))), "values" == f && C && "values" !== C.name && (T = !0, A = function () {
                        return C.call(this)
                    }), p && !b || S[m] === A || l(S, m, A), h[t] = A, f)
                    if (w = {
                            values: k("values"),
                            keys: v ? A : k("keys"),
                            entries: k("entries")
                        }, b)
                        for (_ in w) !g && !T && _ in S || c(S, _, w[_]);
                    else i({
                        target: t,
                        proto: !0,
                        forced: g || T
                    }, w);
                return w
            }
        }, function (e, t) {
            var n;
            n = function () {
                return this
            }();
            try {
                n = n || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        }, function (e, t, n) {
            var i = n(0),
                o = n(36),
                r = i.WeakMap;
            e.exports = "function" == typeof r && /native code/.test(o.call(r))
        }, function (e, t, n) {
            var i = n(21),
                o = n(20);
            e.exports = function (e, t, n) {
                var r, s, a = String(o(e)),
                    l = i(t),
                    c = a.length;
                return l < 0 || l >= c ? n ? "" : void 0 : (r = a.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (s = a.charCodeAt(l + 1)) < 56320 || s > 57343 ? n ? a.charAt(l) : r : n ? a.slice(l, l + 2) : s - 56320 + (r - 55296 << 10) + 65536
            }
        }, function (e, t, n) {
            "use strict";
            var i = n(77),
                o = n(37),
                r = n(74),
                s = o.set,
                a = o.getterFor("String Iterator");
            r(String, "String", (function (e) {
                s(this, {
                    type: "String Iterator",
                    string: String(e),
                    index: 0
                })
            }), (function () {
                var e, t = a(this),
                    n = t.string,
                    o = t.index;
                return o >= n.length ? {
                    value: void 0,
                    done: !0
                } : (e = i(n, o, !0), t.index += e.length, {
                    value: e,
                    done: !1
                })
            }))
        }, function (e, t, n) {
            n(78), n(55);
            var i = n(45);
            e.exports = i.Array.from
        }, function (e, t, n) {
            n(79), e.exports = n(44)
        }])
    })),
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function (t, n) {
            return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n), n
        } : e(jQuery)
    }((function (e) {
        "use strict";
        var t = 0;
        e.fn.TouchSpin = function (n) {
            var i = {
                    min: 0,
                    max: 100,
                    initval: "",
                    replacementval: "",
                    firstclickvalueifempty: null,
                    step: 1,
                    decimals: 0,
                    stepinterval: 100,
                    forcestepdivisibility: "round",
                    stepintervaldelay: 500,
                    verticalbuttons: !1,
                    verticalup: "+",
                    verticaldown: "-",
                    verticalupclass: "",
                    verticaldownclass: "",
                    prefix: "",
                    postfix: "",
                    prefix_extraclass: "",
                    postfix_extraclass: "",
                    booster: !0,
                    boostat: 10,
                    maxboostedstep: !1,
                    mousewheel: !0,
                    buttondown_class: "btn btn-primary",
                    buttonup_class: "btn btn-primary",
                    buttondown_txt: "-",
                    buttonup_txt: "+",
                    callback_before_calculation: function (e) {
                        return e
                    },
                    callback_after_calculation: function (e) {
                        return e
                    }
                },
                o = {
                    min: "min",
                    max: "max",
                    initval: "init-val",
                    replacementval: "replacement-val",
                    firstclickvalueifempty: "first-click-value-if-empty",
                    step: "step",
                    decimals: "decimals",
                    stepinterval: "step-interval",
                    verticalbuttons: "vertical-buttons",
                    verticalupclass: "vertical-up-class",
                    verticaldownclass: "vertical-down-class",
                    forcestepdivisibility: "force-step-divisibility",
                    stepintervaldelay: "step-interval-delay",
                    prefix: "prefix",
                    postfix: "postfix",
                    prefix_extraclass: "prefix-extra-class",
                    postfix_extraclass: "postfix-extra-class",
                    booster: "booster",
                    boostat: "boostat",
                    maxboostedstep: "max-boosted-step",
                    mousewheel: "mouse-wheel",
                    buttondown_class: "button-down-class",
                    buttonup_class: "button-up-class",
                    buttondown_txt: "button-down-txt",
                    buttonup_txt: "button-up-txt"
                };
            return this.each((function () {
                var r, s, a, l, c, u, p, h, f, d, g = e(this),
                    m = g.data(),
                    y = 0,
                    v = !1;

                function b() {
                    "" === r.prefix && (s = c.prefix.detach()), "" === r.postfix && (a = c.postfix.detach())
                }

                function x() {
                    var e, t, n;
                    "" !== (e = r.callback_before_calculation(g.val())) ? 0 < r.decimals && "." === e || (t = parseFloat(e), isNaN(t) && (t = "" !== r.replacementval ? r.replacementval : 0), (n = t).toString() !== e && (n = t), null !== r.min && t < r.min && (n = r.min), null !== r.max && t > r.max && (n = r.max), n = function (e) {
                        switch (r.forcestepdivisibility) {
                            case "round":
                                return (Math.round(e / r.step) * r.step).toFixed(r.decimals);
                            case "floor":
                                return (Math.floor(e / r.step) * r.step).toFixed(r.decimals);
                            case "ceil":
                                return (Math.ceil(e / r.step) * r.step).toFixed(r.decimals);
                            default:
                                return e.toFixed(r.decimals)
                        }
                    }(n), Number(e).toString() !== n.toString() && (g.val(n), g.trigger("change"))): "" !== r.replacementval && (g.val(r.replacementval), g.trigger("change"))
                }

                function w() {
                    if (r.booster) {
                        var e = Math.pow(2, Math.floor(y / r.boostat)) * r.step;
                        return r.maxboostedstep && e > r.maxboostedstep && (e = r.maxboostedstep, u = Math.round(u / e) * e), Math.max(r.step, e)
                    }
                    return r.step
                }

                function _() {
                    return "number" == typeof r.firstclickvalueifempty ? r.firstclickvalueifempty : (r.min + r.max) / 2
                }

                function k() {
                    x();
                    var e, t = u = parseFloat(r.callback_before_calculation(c.input.val()));
                    isNaN(u) ? u = _() : (e = w(), u += e), null !== r.max && u > r.max && (u = r.max, g.trigger("touchspin.on.max"), C()), c.input.val(r.callback_after_calculation(Number(u).toFixed(r.decimals))), t !== u && g.trigger("change")
                }

                function E() {
                    x();
                    var e, t = u = parseFloat(r.callback_before_calculation(c.input.val()));
                    isNaN(u) ? u = _() : (e = w(), u -= e), null !== r.min && u < r.min && (u = r.min, g.trigger("touchspin.on.min"), C()), c.input.val(r.callback_after_calculation(Number(u).toFixed(r.decimals))), t !== u && g.trigger("change")
                }

                function T() {
                    C(), y = 0, v = "down", g.trigger("touchspin.on.startspin"), g.trigger("touchspin.on.startdownspin"), f = setTimeout((function () {
                        p = setInterval((function () {
                            y++, E()
                        }), r.stepinterval)
                    }), r.stepintervaldelay)
                }

                function S() {
                    C(), y = 0, v = "up", g.trigger("touchspin.on.startspin"), g.trigger("touchspin.on.startupspin"), d = setTimeout((function () {
                        h = setInterval((function () {
                            y++, k()
                        }), r.stepinterval)
                    }), r.stepintervaldelay)
                }

                function C() {
                    switch (clearTimeout(f), clearTimeout(d), clearInterval(p), clearInterval(h), v) {
                        case "up":
                            g.trigger("touchspin.on.stopupspin"), g.trigger("touchspin.on.stopspin");
                            break;
                        case "down":
                            g.trigger("touchspin.on.stopdownspin"), g.trigger("touchspin.on.stopspin")
                    }
                    y = 0, v = !1
                }! function () {
                    if (!g.data("alreadyinitialized")) g.data("alreadyinitialized", !0), t += 1, g.data("spinnerid", t), g.is("input") ? ("" !== (r = e.extend({}, i, m, function () {
                        var t = {};
                        return e.each(o, (function (e, n) {
                            var i = "bts-" + n;
                            g.is("[data-" + i + "]") && (t[e] = g.data(i))
                        })), t
                    }(), n)).initval && "" === g.val() && g.val(r.initval), x(), function () {
                        var t = g.val(),
                            n = g.parent();
                        "" !== t && (t = r.callback_after_calculation(Number(t).toFixed(r.decimals))), g.data("initvalue", t).val(t), g.addClass("form-control"), n.hasClass("input-group") ? function (t) {
                            t.addClass("bootstrap-touchspin");
                            var n, i, o = g.prev(),
                                s = g.next(),
                                a = '<span class="input-group-addon bootstrap-touchspin-prefix bootstrap-touchspin-injected"><span class="input-group-text">' + r.prefix + "</span></span>",
                                c = '<span class="input-group-addon bootstrap-touchspin-postfix bootstrap-touchspin-injected"><span class="input-group-text">' + r.postfix + "</span></span>";
                            o.hasClass("input-group-btn") || o.hasClass("input-group-text") ? (n = '<button class="' + r.buttondown_class + ' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">' + r.buttondown_txt + "</button>", o.append(n)) : (n = '<span class="input-group-btn bootstrap-touchspin-injected"><button class="' + r.buttondown_class + ' bootstrap-touchspin-down" type="button">' + r.buttondown_txt + "</button></span>", e(n).insertBefore(g)), s.hasClass("input-group-btn") || s.hasClass("input-group-text") ? (i = '<button class="' + r.buttonup_class + ' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">' + r.buttonup_txt + "</button>", s.text(i)) : (i = '<span class="input-group-btn bootstrap-touchspin-injected"><button class="' + r.buttonup_class + ' bootstrap-touchspin-up" type="button">' + r.buttonup_txt + "</button></span>", e(i).insertAfter(g)), e(a).insertBefore(g), e(c).insertAfter(g), l = t
                        }(n) : function () {
                            var t, n = "";
                            g.hasClass("input-sm") && (n = "input-group-sm"), g.hasClass("input-lg") && (n = "input-group-lg"), t = r.verticalbuttons ? '<div class="input-group ' + n + ' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-addon bootstrap-touchspin-prefix"><span class="input-group-text">' + r.prefix + '</span></span><span class="input-group-addon bootstrap-touchspin-postfix"><span class="input-group-text">' + r.postfix + '</span></span><span class="input-group-btn-vertical"><button class="' + r.buttondown_class + " bootstrap-touchspin-up " + r.verticalupclass + '" type="button">' + r.verticalup + '</button><button class="' + r.buttonup_class + " bootstrap-touchspin-down " + r.verticaldownclass + '" type="button">' + r.verticaldown + "</button></span></div>" : '<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn"><button class="' + r.buttondown_class + ' bootstrap-touchspin-down" type="button">' + r.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix"><span class="input-group-text">' + r.prefix + '</span></span><span class="input-group-addon bootstrap-touchspin-postfix"><span class="input-group-text">' + r.postfix + '</span></span><span class="input-group-btn"><button class="' + r.buttonup_class + ' bootstrap-touchspin-up" type="button">' + r.buttonup_txt + "</button></span></div>", l = e(t).insertBefore(g), e(".bootstrap-touchspin-prefix", l).after(g), g.hasClass("input-sm") ? l.addClass("input-group-sm") : g.hasClass("input-lg") && l.addClass("input-group-lg")
                        }()
                    }(), c = {
                        down: e(".bootstrap-touchspin-down", l),
                        up: e(".bootstrap-touchspin-up", l),
                        input: e("input", l),
                        prefix: e(".bootstrap-touchspin-prefix", l).addClass(r.prefix_extraclass),
                        postfix: e(".bootstrap-touchspin-postfix", l).addClass(r.postfix_extraclass)
                    }, b(), g.on("keydown.touchspin", (function (e) {
                        var t = e.keyCode || e.which;
                        38 === t ? ("up" !== v && (k(), S()), e.preventDefault()) : 40 === t && ("down" !== v && (E(), T()), e.preventDefault())
                    })), g.on("keyup.touchspin", (function (e) {
                        var t = e.keyCode || e.which;
                        38 !== t && 40 !== t || C()
                    })), g.on("blur.touchspin", (function () {
                        x(), g.val(r.callback_after_calculation(g.val()))
                    })), c.down.on("keydown", (function (e) {
                        var t = e.keyCode || e.which;
                        32 !== t && 13 !== t || ("down" !== v && (E(), T()), e.preventDefault())
                    })), c.down.on("keyup.touchspin", (function (e) {
                        var t = e.keyCode || e.which;
                        32 !== t && 13 !== t || C()
                    })), c.up.on("keydown.touchspin", (function (e) {
                        var t = e.keyCode || e.which;
                        32 !== t && 13 !== t || ("up" !== v && (k(), S()), e.preventDefault())
                    })), c.up.on("keyup.touchspin", (function (e) {
                        var t = e.keyCode || e.which;
                        32 !== t && 13 !== t || C()
                    })), c.down.on("mousedown.touchspin", (function (e) {
                        c.down.off("touchstart.touchspin"), g.is(":disabled") || (E(), T(), e.preventDefault(), e.stopPropagation())
                    })), c.down.on("touchstart.touchspin", (function (e) {
                        c.down.off("mousedown.touchspin"), g.is(":disabled") || (E(), T(), e.preventDefault(), e.stopPropagation())
                    })), c.up.on("mousedown.touchspin", (function (e) {
                        c.up.off("touchstart.touchspin"), g.is(":disabled") || (k(), S(), e.preventDefault(), e.stopPropagation())
                    })), c.up.on("touchstart.touchspin", (function (e) {
                        c.up.off("mousedown.touchspin"), g.is(":disabled") || (k(), S(), e.preventDefault(), e.stopPropagation())
                    })), c.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin", (function (e) {
                        v && (e.stopPropagation(), C())
                    })), c.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin", (function (e) {
                        v && (e.stopPropagation(), C())
                    })), c.down.on("mousemove.touchspin touchmove.touchspin", (function (e) {
                        v && (e.stopPropagation(), e.preventDefault())
                    })), c.up.on("mousemove.touchspin touchmove.touchspin", (function (e) {
                        v && (e.stopPropagation(), e.preventDefault())
                    })), g.on("mousewheel.touchspin DOMMouseScroll.touchspin", (function (e) {
                        if (r.mousewheel && g.is(":focus")) {
                            var t = e.originalEvent.wheelDelta || -e.originalEvent.deltaY || -e.originalEvent.detail;
                            e.stopPropagation(), e.preventDefault(), (t < 0 ? E : k)()
                        }
                    })), g.on("touchspin.destroy", (function () {
                        ! function () {
                            var t = g.parent();
                            C(), g.off(".touchspin"), t.hasClass("bootstrap-touchspin-injected") ? (g.siblings().remove(), g.unwrap()) : (e(".bootstrap-touchspin-injected", t).remove(), t.removeClass("bootstrap-touchspin")), g.data("alreadyinitialized", !1)
                        }()
                    })), g.on("touchspin.uponce", (function () {
                        C(), k()
                    })), g.on("touchspin.downonce", (function () {
                        C(), E()
                    })), g.on("touchspin.startupspin", (function () {
                        S()
                    })), g.on("touchspin.startdownspin", (function () {
                        T()
                    })), g.on("touchspin.stopspin", (function () {
                        C()
                    })), g.on("touchspin.updatesettings", (function (t, n) {
                        ! function (t) {
                            (function (t) {
                                r = e.extend({}, r, t), t.postfix && (0 === g.parent().find(".bootstrap-touchspin-postfix").length && a.insertAfter(g), g.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(t.postfix)), t.prefix && (0 === g.parent().find(".bootstrap-touchspin-prefix").length && s.insertBefore(g), g.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(t.prefix)), b()
                            })(t), x();
                            var n = c.input.val();
                            "" !== n && (n = Number(r.callback_before_calculation(c.input.val())), c.input.val(r.callback_after_calculation(Number(n).toFixed(r.decimals))))
                        }(n)
                    }))) : console.log("Must be an input.")
                }()
            }))
        }
    }));