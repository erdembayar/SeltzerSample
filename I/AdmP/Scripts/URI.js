﻿/*! URI.js v1.15.1 http://medialize.github.io/URI.js/ */
/* build contains: URI.js, URITemplate.js */
(function (q, w) { "object" === typeof exports ? module.exports = w(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains")) : "function" === typeof define && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], w) : q.URI = w(q.punycode, q.IPv6, q.SecondLevelDomains, q) })(this, function (q, w, p, r) {
    function d(a, b) {
        var c = 1 <= arguments.length, h = 2 <= arguments.length; if (!(this instanceof d)) return c ? h ? new d(a, b) : new d(a) : new d; if (void 0 === a) {
            if (c) throw new TypeError("undefined is not a valid argument for URI");
            a = "undefined" !== typeof location ? location.href + "" : ""
        } this.href(a); return void 0 !== b ? this.absoluteTo(b) : this
    } function x(a) { return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") } function z(a) { return void 0 === a ? "Undefined" : String(Object.prototype.toString.call(a)).slice(8, -1) } function l(a) { return "Array" === z(a) } function k(a, b) {
        var c = {}, d, y; if ("RegExp" === z(b)) c = null; else if (l(b)) for (d = 0, y = b.length; d < y; d++) c[b[d]] = !0; else c[b] = !0; d = 0; for (y = a.length; d < y; d++) if (c && void 0 !== c[a[d]] || !c && b.test(a[d])) a.splice(d,
        1), y--, d--; return a
    } function f(a, b) { var c, d; if (l(b)) { c = 0; for (d = b.length; c < d; c++) if (!f(a, b[c])) return !1; return !0 } var y = z(b); c = 0; for (d = a.length; c < d; c++) if ("RegExp" === y) { if ("string" === typeof a[c] && a[c].match(b)) return !0 } else if (a[c] === b) return !0; return !1 } function n(a, b) { if (!l(a) || !l(b) || a.length !== b.length) return !1; a.sort(); b.sort(); for (var c = 0, d = a.length; c < d; c++) if (a[c] !== b[c]) return !1; return !0 } function D(a) { return escape(a) } function A(a) {
        return encodeURIComponent(a).replace(/[!'()*]/g, D).replace(/\*/g,
        "%2A")
    } function u(a) { return function (b, c) { if (void 0 === b) return this._parts[a] || ""; this._parts[a] = b || null; this.build(!c); return this } } function m(a, b) { return function (c, d) { if (void 0 === c) return this._parts[a] || ""; null !== c && (c += "", c.charAt(0) === b && (c = c.substring(1))); this._parts[a] = c; this.build(!d); return this } } var g = r && r.URI; d.version = "1.15.1"; var e = d.prototype, v = Object.prototype.hasOwnProperty; d._parts = function () {
        return {
            protocol: null, username: null, password: null, hostname: null, urn: null, port: null, path: null,
            query: null, fragment: null, duplicateQueryParameters: d.duplicateQueryParameters, escapeQuerySpace: d.escapeQuerySpace
        }
    }; d.duplicateQueryParameters = !1; d.escapeQuerySpace = !0; d.protocol_expression = /^[a-z][a-z0-9.+-]*$/i; d.idn_expression = /[^a-z0-9\.-]/i; d.punycode_expression = /(xn--)/i; d.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/; d.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
    d.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig; d.findUri = { start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi, end: /[\s\r\n]|$/, trim: /[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/ }; d.defaultPorts = { http: "80", https: "443", ftp: "21", gopher: "70", ws: "80", wss: "443" }; d.invalid_hostname_characters =
    /[^a-zA-Z0-9\.-]/; d.domAttributes = { a: "href", blockquote: "cite", link: "href", base: "href", script: "src", form: "action", img: "src", area: "href", iframe: "src", embed: "src", source: "src", track: "src", input: "src", audio: "src", video: "src" }; d.getDomAttribute = function (a) { if (a && a.nodeName) { var b = a.nodeName.toLowerCase(); return "input" === b && "image" !== a.type ? void 0 : d.domAttributes[b] } }; d.encode = A; d.decode = decodeURIComponent; d.iso8859 = function () { d.encode = escape; d.decode = unescape }; d.unicode = function () {
        d.encode = A; d.decode =
        decodeURIComponent
    }; d.characters = {
        pathname: { encode: { expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig, map: { "%24": "$", "%26": "&", "%2B": "+", "%2C": ",", "%3B": ";", "%3D": "=", "%3A": ":", "%40": "@" } }, decode: { expression: /[\/\?#]/g, map: { "/": "%2F", "?": "%3F", "#": "%23" } } }, reserved: {
            encode: {
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig, map: {
                    "%3A": ":", "%2F": "/", "%3F": "?", "%23": "#", "%5B": "[", "%5D": "]", "%40": "@", "%21": "!", "%24": "$", "%26": "&", "%27": "'", "%28": "(", "%29": ")", "%2A": "*", "%2B": "+", "%2C": ",",
                    "%3B": ";", "%3D": "="
                }
            }
        }, urnpath: { encode: { expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig, map: { "%21": "!", "%24": "$", "%27": "'", "%28": "(", "%29": ")", "%2A": "*", "%2B": "+", "%2C": ",", "%3B": ";", "%3D": "=", "%40": "@" } }, decode: { expression: /[\/\?#:]/g, map: { "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" } } }
    }; d.encodeQuery = function (a, b) { var c = d.encode(a + ""); void 0 === b && (b = d.escapeQuerySpace); return b ? c.replace(/%20/g, "+") : c }; d.decodeQuery = function (a, b) {
        a += ""; void 0 === b && (b = d.escapeQuerySpace); try {
            return d.decode(b ? a.replace(/\+/g,
            "%20") : a)
        } catch (c) { return a }
    }; var t = { encode: "encode", decode: "decode" }, B, C = function (a, b) { return function (c) { try { return d[b](c + "").replace(d.characters[a][b].expression, function (c) { return d.characters[a][b].map[c] }) } catch (h) { return c } } }; for (B in t) d[B + "PathSegment"] = C("pathname", t[B]), d[B + "UrnPathSegment"] = C("urnpath", t[B]); t = function (a, b, c) { return function (h) { var y; y = c ? function (a) { return d[b](d[c](a)) } : d[b]; h = (h + "").split(a); for (var e = 0, k = h.length; e < k; e++) h[e] = y(h[e]); return h.join(a) } }; d.decodePath =
    t("/", "decodePathSegment"); d.decodeUrnPath = t(":", "decodeUrnPathSegment"); d.recodePath = t("/", "encodePathSegment", "decode"); d.recodeUrnPath = t(":", "encodeUrnPathSegment", "decode"); d.encodeReserved = C("reserved", "encode"); d.parse = function (a, b) {
        var c; b || (b = {}); c = a.indexOf("#"); -1 < c && (b.fragment = a.substring(c + 1) || null, a = a.substring(0, c)); c = a.indexOf("?"); -1 < c && (b.query = a.substring(c + 1) || null, a = a.substring(0, c)); "//" === a.substring(0, 2) ? (b.protocol = null, a = a.substring(2), a = d.parseAuthority(a, b)) : (c = a.indexOf(":"),
        -1 < c && (b.protocol = a.substring(0, c) || null, b.protocol && !b.protocol.match(d.protocol_expression) ? b.protocol = void 0 : "//" === a.substring(c + 1, c + 3) ? (a = a.substring(c + 3), a = d.parseAuthority(a, b)) : (a = a.substring(c + 1), b.urn = !0))); b.path = a; return b
    }; d.parseHost = function (a, b) {
        var c = a.indexOf("/"), d; -1 === c && (c = a.length); if ("[" === a.charAt(0)) d = a.indexOf("]"), b.hostname = a.substring(1, d) || null, b.port = a.substring(d + 2, c) || null, "/" === b.port && (b.port = null); else {
            var e = a.indexOf(":"); d = a.indexOf("/"); e = a.indexOf(":", e + 1);
            -1 !== e && (-1 === d || e < d) ? (b.hostname = a.substring(0, c) || null, b.port = null) : (d = a.substring(0, c).split(":"), b.hostname = d[0] || null, b.port = d[1] || null)
        } b.hostname && "/" !== a.substring(c).charAt(0) && (c++, a = "/" + a); return a.substring(c) || "/"
    }; d.parseAuthority = function (a, b) { a = d.parseUserinfo(a, b); return d.parseHost(a, b) }; d.parseUserinfo = function (a, b) {
        var c = a.indexOf("/"), h = a.lastIndexOf("@", -1 < c ? c : a.length - 1); -1 < h && (-1 === c || h < c) ? (c = a.substring(0, h).split(":"), b.username = c[0] ? d.decode(c[0]) : null, c.shift(), b.password =
        c[0] ? d.decode(c.join(":")) : null, a = a.substring(h + 1)) : (b.username = null, b.password = null); return a
    }; d.parseQuery = function (a, b) { if (!a) return {}; a = a.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, ""); if (!a) return {}; for (var c = {}, h = a.split("&"), e = h.length, k, f, g = 0; g < e; g++) k = h[g].split("="), f = d.decodeQuery(k.shift(), b), k = k.length ? d.decodeQuery(k.join("="), b) : null, v.call(c, f) ? ("string" === typeof c[f] && (c[f] = [c[f]]), c[f].push(k)) : c[f] = k; return c }; d.build = function (a) {
        var b = ""; a.protocol && (b += a.protocol + ":"); a.urn || !b &&
        !a.hostname || (b += "//"); b += d.buildAuthority(a) || ""; "string" === typeof a.path && ("/" !== a.path.charAt(0) && "string" === typeof a.hostname && (b += "/"), b += a.path); "string" === typeof a.query && a.query && (b += "?" + a.query); "string" === typeof a.fragment && a.fragment && (b += "#" + a.fragment); return b
    }; d.buildHost = function (a) { var b = ""; if (a.hostname) b = d.ip6_expression.test(a.hostname) ? b + ("[" + a.hostname + "]") : b + a.hostname; else return ""; a.port && (b += ":" + a.port); return b }; d.buildAuthority = function (a) { return d.buildUserinfo(a) + d.buildHost(a) };
    d.buildUserinfo = function (a) { var b = ""; a.username && (b += d.encode(a.username), a.password && (b += ":" + d.encode(a.password)), b += "@"); return b }; d.buildQuery = function (a, b, c) { var h = "", e, k, f, g; for (k in a) if (v.call(a, k) && k) if (l(a[k])) for (e = {}, f = 0, g = a[k].length; f < g; f++) void 0 !== a[k][f] && void 0 === e[a[k][f] + ""] && (h += "&" + d.buildQueryParameter(k, a[k][f], c), !0 !== b && (e[a[k][f] + ""] = !0)); else void 0 !== a[k] && (h += "&" + d.buildQueryParameter(k, a[k], c)); return h.substring(1) }; d.buildQueryParameter = function (a, b, c) {
        return d.encodeQuery(a,
        c) + (null !== b ? "=" + d.encodeQuery(b, c) : "")
    }; d.addQuery = function (a, b, c) { if ("object" === typeof b) for (var h in b) v.call(b, h) && d.addQuery(a, h, b[h]); else if ("string" === typeof b) void 0 === a[b] ? a[b] = c : ("string" === typeof a[b] && (a[b] = [a[b]]), l(c) || (c = [c]), a[b] = (a[b] || []).concat(c)); else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter"); }; d.removeQuery = function (a, b, c) {
        var h; if (l(b)) for (c = 0, h = b.length; c < h; c++) a[b[c]] = void 0; else if ("RegExp" === z(b)) for (h in a) b.test(h) && (a[h] = void 0);
        else if ("object" === typeof b) for (h in b) v.call(b, h) && d.removeQuery(a, h, b[h]); else if ("string" === typeof b) void 0 !== c ? "RegExp" === z(c) ? !l(a[b]) && c.test(a[b]) ? a[b] = void 0 : a[b] = k(a[b], c) : a[b] === c ? a[b] = void 0 : l(a[b]) && (a[b] = k(a[b], c)) : a[b] = void 0; else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");
    }; d.hasQuery = function (a, b, c, h) {
        if ("object" === typeof b) { for (var e in b) if (v.call(b, e) && !d.hasQuery(a, e, b[e])) return !1; return !0 } if ("string" !== typeof b) throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");
        switch (z(c)) { case "Undefined": return b in a; case "Boolean": return a = Boolean(l(a[b]) ? a[b].length : a[b]), c === a; case "Function": return !!c(a[b], b, a); case "Array": return l(a[b]) ? (h ? f : n)(a[b], c) : !1; case "RegExp": return l(a[b]) ? h ? f(a[b], c) : !1 : Boolean(a[b] && a[b].match(c)); case "Number": c = String(c); case "String": return l(a[b]) ? h ? f(a[b], c) : !1 : a[b] === c; default: throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter"); }
    }; d.commonPath = function (a, b) {
        var c =
        Math.min(a.length, b.length), d; for (d = 0; d < c; d++) if (a.charAt(d) !== b.charAt(d)) { d--; break } if (1 > d) return a.charAt(0) === b.charAt(0) && "/" === a.charAt(0) ? "/" : ""; if ("/" !== a.charAt(d) || "/" !== b.charAt(d)) d = a.substring(0, d).lastIndexOf("/"); return a.substring(0, d + 1)
    }; d.withinString = function (a, b, c) {
        c || (c = {}); var h = c.start || d.findUri.start, e = c.end || d.findUri.end, k = c.trim || d.findUri.trim, f = /[a-z0-9-]=["']?$/i; for (h.lastIndex = 0; ;) {
            var g = h.exec(a); if (!g) break; g = g.index; if (c.ignoreHtml) {
                var m = a.slice(Math.max(g - 3, 0),
                g); if (m && f.test(m)) continue
            } var m = g + a.slice(g).search(e), n = a.slice(g, m).replace(k, ""); c.ignore && c.ignore.test(n) || (m = g + n.length, n = b(n, g, m, a), a = a.slice(0, g) + n + a.slice(m), h.lastIndex = g + n.length)
        } h.lastIndex = 0; return a
    }; d.ensureValidHostname = function (a) {
        if (a.match(d.invalid_hostname_characters)) {
            if (!q) throw new TypeError('Hostname "' + a + '" contains characters other than [A-Z0-9.-] and Punycode.js is not available'); if (q.toASCII(a).match(d.invalid_hostname_characters)) throw new TypeError('Hostname "' +
            a + '" contains characters other than [A-Z0-9.-]');
        }
    }; d.noConflict = function (a) { if (a) return a = { URI: this.noConflict() }, r.URITemplate && "function" === typeof r.URITemplate.noConflict && (a.URITemplate = r.URITemplate.noConflict()), r.IPv6 && "function" === typeof r.IPv6.noConflict && (a.IPv6 = r.IPv6.noConflict()), r.SecondLevelDomains && "function" === typeof r.SecondLevelDomains.noConflict && (a.SecondLevelDomains = r.SecondLevelDomains.noConflict()), a; r.URI === this && (r.URI = g); return this }; e.build = function (a) {
        if (!0 === a) this._deferred_build =
        !0; else if (void 0 === a || this._deferred_build) this._string = d.build(this._parts), this._deferred_build = !1; return this
    }; e.clone = function () { return new d(this) }; e.valueOf = e.toString = function () { return this.build(!1)._string }; e.protocol = u("protocol"); e.username = u("username"); e.password = u("password"); e.hostname = u("hostname"); e.port = u("port"); e.query = m("query", "?"); e.fragment = m("fragment", "#"); e.search = function (a, b) { var c = this.query(a, b); return "string" === typeof c && c.length ? "?" + c : c }; e.hash = function (a, b) {
        var c =
        this.fragment(a, b); return "string" === typeof c && c.length ? "#" + c : c
    }; e.pathname = function (a, b) { if (void 0 === a || !0 === a) { var c = this._parts.path || (this._parts.hostname ? "/" : ""); return a ? (this._parts.urn ? d.decodeUrnPath : d.decodePath)(c) : c } this._parts.path = this._parts.urn ? a ? d.recodeUrnPath(a) : "" : a ? d.recodePath(a) : "/"; this.build(!b); return this }; e.path = e.pathname; e.href = function (a, b) {
        var c; if (void 0 === a) return this.toString(); this._string = ""; this._parts = d._parts(); var h = a instanceof d, e = "object" === typeof a && (a.hostname ||
        a.path || a.pathname); a.nodeName && (e = d.getDomAttribute(a), a = a[e] || "", e = !1); !h && e && void 0 !== a.pathname && (a = a.toString()); if ("string" === typeof a || a instanceof String) this._parts = d.parse(String(a), this._parts); else if (h || e) for (c in h = h ? a._parts : a, h) v.call(this._parts, c) && (this._parts[c] = h[c]); else throw new TypeError("invalid input"); this.build(!b); return this
    }; e.is = function (a) {
        var b = !1, c = !1, h = !1, e = !1, k = !1, f = !1, g = !1, m = !this._parts.urn; this._parts.hostname && (m = !1, c = d.ip4_expression.test(this._parts.hostname),
        h = d.ip6_expression.test(this._parts.hostname), b = c || h, k = (e = !b) && p && p.has(this._parts.hostname), f = e && d.idn_expression.test(this._parts.hostname), g = e && d.punycode_expression.test(this._parts.hostname)); switch (a.toLowerCase()) {
            case "relative": return m; case "absolute": return !m; case "domain": case "name": return e; case "sld": return k; case "ip": return b; case "ip4": case "ipv4": case "inet4": return c; case "ip6": case "ipv6": case "inet6": return h; case "idn": return f; case "url": return !this._parts.urn; case "urn": return !!this._parts.urn;
            case "punycode": return g
        } return null
    }; var E = e.protocol, F = e.port, G = e.hostname; e.protocol = function (a, b) { if (void 0 !== a && a && (a = a.replace(/:(\/\/)?$/, ""), !a.match(d.protocol_expression))) throw new TypeError('Protocol "' + a + "\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]"); return E.call(this, a, b) }; e.scheme = e.protocol; e.port = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 !== a && (0 === a && (a = null), a && (a += "", ":" === a.charAt(0) && (a = a.substring(1)), a.match(/[^0-9]/)))) throw new TypeError('Port "' +
        a + '" contains characters other than [0-9]'); return F.call(this, a, b)
    }; e.hostname = function (a, b) { if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 !== a) { var c = {}; d.parseHost(a, c); a = c.hostname } return G.call(this, a, b) }; e.host = function (a, b) { if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 === a) return this._parts.hostname ? d.buildHost(this._parts) : ""; d.parseHost(a, this._parts); this.build(!b); return this }; e.authority = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 === a) return this._parts.hostname ?
        d.buildAuthority(this._parts) : ""; d.parseAuthority(a, this._parts); this.build(!b); return this
    }; e.userinfo = function (a, b) { if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 === a) { if (!this._parts.username) return ""; var c = d.buildUserinfo(this._parts); return c.substring(0, c.length - 1) } "@" !== a[a.length - 1] && (a += "@"); d.parseUserinfo(a, this._parts); this.build(!b); return this }; e.resource = function (a, b) {
        var c; if (void 0 === a) return this.path() + this.search() + this.hash(); c = d.parse(a); this._parts.path = c.path; this._parts.query =
        c.query; this._parts.fragment = c.fragment; this.build(!b); return this
    }; e.subdomain = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 === a) { if (!this._parts.hostname || this.is("IP")) return ""; var c = this._parts.hostname.length - this.domain().length - 1; return this._parts.hostname.substring(0, c) || "" } c = this._parts.hostname.length - this.domain().length; c = this._parts.hostname.substring(0, c); c = new RegExp("^" + x(c)); a && "." !== a.charAt(a.length - 1) && (a += "."); a && d.ensureValidHostname(a); this._parts.hostname =
        this._parts.hostname.replace(c, a); this.build(!b); return this
    }; e.domain = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; "boolean" === typeof a && (b = a, a = void 0); if (void 0 === a) { if (!this._parts.hostname || this.is("IP")) return ""; var c = this._parts.hostname.match(/\./g); if (c && 2 > c.length) return this._parts.hostname; c = this._parts.hostname.length - this.tld(b).length - 1; c = this._parts.hostname.lastIndexOf(".", c - 1) + 1; return this._parts.hostname.substring(c) || "" } if (!a) throw new TypeError("cannot set domain empty");
        d.ensureValidHostname(a); !this._parts.hostname || this.is("IP") ? this._parts.hostname = a : (c = new RegExp(x(this.domain()) + "$"), this._parts.hostname = this._parts.hostname.replace(c, a)); this.build(!b); return this
    }; e.tld = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; "boolean" === typeof a && (b = a, a = void 0); if (void 0 === a) {
            if (!this._parts.hostname || this.is("IP")) return ""; var c = this._parts.hostname.lastIndexOf("."), c = this._parts.hostname.substring(c + 1); return !0 !== b && p && p.list[c.toLowerCase()] ? p.get(this._parts.hostname) ||
                c : c
        } if (a) if (a.match(/[^a-zA-Z0-9-]/)) if (p && p.is(a)) c = new RegExp(x(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(c, a); else throw new TypeError('TLD "' + a + '" contains characters other than [A-Z0-9]'); else { if (!this._parts.hostname || this.is("IP")) throw new ReferenceError("cannot set TLD on non-domain host"); c = new RegExp(x(this.tld()) + "$"); this._parts.hostname = this._parts.hostname.replace(c, a) } else throw new TypeError("cannot set TLD empty"); this.build(!b); return this
    }; e.directory =
    function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 === a || !0 === a) { if (!this._parts.path && !this._parts.hostname) return ""; if ("/" === this._parts.path) return "/"; var c = this._parts.path.length - this.filename().length - 1, c = this._parts.path.substring(0, c) || (this._parts.hostname ? "/" : ""); return a ? d.decodePath(c) : c } c = this._parts.path.length - this.filename().length; c = this._parts.path.substring(0, c); c = new RegExp("^" + x(c)); this.is("relative") || (a || (a = "/"), "/" !== a.charAt(0) && (a = "/" + a)); a && "/" !== a.charAt(a.length -
        1) && (a += "/"); a = d.recodePath(a); this._parts.path = this._parts.path.replace(c, a); this.build(!b); return this
    }; e.filename = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 === a || !0 === a) { if (!this._parts.path || "/" === this._parts.path) return ""; var c = this._parts.path.lastIndexOf("/"), c = this._parts.path.substring(c + 1); return a ? d.decodePathSegment(c) : c } c = !1; "/" === a.charAt(0) && (a = a.substring(1)); a.match(/\.?\//) && (c = !0); var h = new RegExp(x(this.filename()) + "$"); a = d.recodePath(a); this._parts.path =
        this._parts.path.replace(h, a); c ? this.normalizePath(b) : this.build(!b); return this
    }; e.suffix = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 === a || !0 === a) { if (!this._parts.path || "/" === this._parts.path) return ""; var c = this.filename(), h = c.lastIndexOf("."); if (-1 === h) return ""; c = c.substring(h + 1); c = /^[a-z0-9%]+$/i.test(c) ? c : ""; return a ? d.decodePathSegment(c) : c } "." === a.charAt(0) && (a = a.substring(1)); if (c = this.suffix()) h = a ? new RegExp(x(c) + "$") : new RegExp(x("." + c) + "$"); else {
            if (!a) return this;
            this._parts.path += "." + d.recodePath(a)
        } h && (a = d.recodePath(a), this._parts.path = this._parts.path.replace(h, a)); this.build(!b); return this
    }; e.segment = function (a, b, c) {
        var d = this._parts.urn ? ":" : "/", e = this.path(), k = "/" === e.substring(0, 1), e = e.split(d); void 0 !== a && "number" !== typeof a && (c = b, b = a, a = void 0); if (void 0 !== a && "number" !== typeof a) throw Error('Bad segment "' + a + '", must be 0-based integer'); k && e.shift(); 0 > a && (a = Math.max(e.length + a, 0)); if (void 0 === b) return void 0 === a ? e : e[a]; if (null === a || void 0 === e[a]) if (l(b)) {
            e =
            []; a = 0; for (var f = b.length; a < f; a++) if (b[a].length || e.length && e[e.length - 1].length) e.length && !e[e.length - 1].length && e.pop(), e.push(b[a])
        } else { if (b || "string" === typeof b) "" === e[e.length - 1] ? e[e.length - 1] = b : e.push(b) } else b ? e[a] = b : e.splice(a, 1); k && e.unshift(""); return this.path(e.join(d), c)
    }; e.segmentCoded = function (a, b, c) {
        var e, k; "number" !== typeof a && (c = b, b = a, a = void 0); if (void 0 === b) { a = this.segment(a, b, c); if (l(a)) for (e = 0, k = a.length; e < k; e++) a[e] = d.decode(a[e]); else a = void 0 !== a ? d.decode(a) : void 0; return a } if (l(b)) for (e =
        0, k = b.length; e < k; e++) b[e] = d.decode(b[e]); else b = "string" === typeof b || b instanceof String ? d.encode(b) : b; return this.segment(a, b, c)
    }; var H = e.query; e.query = function (a, b) {
        if (!0 === a) return d.parseQuery(this._parts.query, this._parts.escapeQuerySpace); if ("function" === typeof a) { var c = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace), e = a.call(this, c); this._parts.query = d.buildQuery(e || c, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace); this.build(!b); return this } return void 0 !==
        a && "string" !== typeof a ? (this._parts.query = d.buildQuery(a, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!b), this) : H.call(this, a, b)
    }; e.setQuery = function (a, b, c) {
        var e = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace); if ("string" === typeof a || a instanceof String) e[a] = void 0 !== b ? b : null; else if ("object" === typeof a) for (var k in a) v.call(a, k) && (e[k] = a[k]); else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter"); this._parts.query =
        d.buildQuery(e, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace); "string" !== typeof a && (c = b); this.build(!c); return this
    }; e.addQuery = function (a, b, c) { var e = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace); d.addQuery(e, a, void 0 === b ? null : b); this._parts.query = d.buildQuery(e, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace); "string" !== typeof a && (c = b); this.build(!c); return this }; e.removeQuery = function (a, b, c) {
        var e = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        d.removeQuery(e, a, b); this._parts.query = d.buildQuery(e, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace); "string" !== typeof a && (c = b); this.build(!c); return this
    }; e.hasQuery = function (a, b, c) { var e = d.parseQuery(this._parts.query, this._parts.escapeQuerySpace); return d.hasQuery(e, a, b, c) }; e.setSearch = e.setQuery; e.addSearch = e.addQuery; e.removeSearch = e.removeQuery; e.hasSearch = e.hasQuery; e.normalize = function () {
        return this._parts.urn ? this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build() :
        this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
    }; e.normalizeProtocol = function (a) { "string" === typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!a)); return this }; e.normalizeHostname = function (a) {
        this._parts.hostname && (this.is("IDN") && q ? this._parts.hostname = q.toASCII(this._parts.hostname) : this.is("IPv6") && w && (this._parts.hostname = w.best(this._parts.hostname)), this._parts.hostname =
        this._parts.hostname.toLowerCase(), this.build(!a)); return this
    }; e.normalizePort = function (a) { "string" === typeof this._parts.protocol && this._parts.port === d.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!a)); return this }; e.normalizePath = function (a) {
        var b = this._parts.path; if (!b) return this; if (this._parts.urn) return this._parts.path = d.recodeUrnPath(this._parts.path), this.build(!a), this; if ("/" === this._parts.path) return this; var c, e = "", k, f; "/" !== b.charAt(0) && (c = !0, b = "/" + b); b = b.replace(/(\/(\.\/)+)|(\/\.$)/g,
        "/").replace(/\/{2,}/g, "/"); c && (e = b.substring(1).match(/^(\.\.\/)+/) || "") && (e = e[0]); for (; ;) { k = b.indexOf("/.."); if (-1 === k) break; else if (0 === k) { b = b.substring(3); continue } f = b.substring(0, k).lastIndexOf("/"); -1 === f && (f = k); b = b.substring(0, f) + b.substring(k + 3) } c && this.is("relative") && (b = e + b.substring(1)); b = d.recodePath(b); this._parts.path = b; this.build(!a); return this
    }; e.normalizePathname = e.normalizePath; e.normalizeQuery = function (a) {
        "string" === typeof this._parts.query && (this._parts.query.length ? this.query(d.parseQuery(this._parts.query,
        this._parts.escapeQuerySpace)) : this._parts.query = null, this.build(!a)); return this
    }; e.normalizeFragment = function (a) { this._parts.fragment || (this._parts.fragment = null, this.build(!a)); return this }; e.normalizeSearch = e.normalizeQuery; e.normalizeHash = e.normalizeFragment; e.iso8859 = function () { var a = d.encode, b = d.decode; d.encode = escape; d.decode = decodeURIComponent; try { this.normalize() } finally { d.encode = a, d.decode = b } return this }; e.unicode = function () {
        var a = d.encode, b = d.decode; d.encode = A; d.decode = unescape; try { this.normalize() } finally {
            d.encode =
            a, d.decode = b
        } return this
    }; e.readable = function () {
        var a = this.clone(); a.username("").password("").normalize(); var b = ""; a._parts.protocol && (b += a._parts.protocol + "://"); a._parts.hostname && (a.is("punycode") && q ? (b += q.toUnicode(a._parts.hostname), a._parts.port && (b += ":" + a._parts.port)) : b += a.host()); a._parts.hostname && a._parts.path && "/" !== a._parts.path.charAt(0) && (b += "/"); b += a.path(!0); if (a._parts.query) {
            for (var c = "", e = 0, k = a._parts.query.split("&"), f = k.length; e < f; e++) {
                var g = (k[e] || "").split("="), c = c + ("&" + d.decodeQuery(g[0],
                this._parts.escapeQuerySpace).replace(/&/g, "%26")); void 0 !== g[1] && (c += "=" + d.decodeQuery(g[1], this._parts.escapeQuerySpace).replace(/&/g, "%26"))
            } b += "?" + c.substring(1)
        } return b += d.decodeQuery(a.hash(), !0)
    }; e.absoluteTo = function (a) {
        var b = this.clone(), c = ["protocol", "username", "password", "hostname", "port"], e, k; if (this._parts.urn) throw Error("URNs do not have any generally defined hierarchical components"); a instanceof d || (a = new d(a)); b._parts.protocol || (b._parts.protocol = a._parts.protocol); if (this._parts.hostname) return b;
        for (e = 0; k = c[e]; e++) b._parts[k] = a._parts[k]; b._parts.path ? ".." === b._parts.path.substring(-2) && (b._parts.path += "/") : (b._parts.path = a._parts.path, b._parts.query || (b._parts.query = a._parts.query)); "/" !== b.path().charAt(0) && (c = (c = a.directory()) ? c : 0 === a.path().indexOf("/") ? "/" : "", b._parts.path = (c ? c + "/" : "") + b._parts.path, b.normalizePath()); b.build(); return b
    }; e.relativeTo = function (a) {
        var b = this.clone().normalize(), c, e, k, f; if (b._parts.urn) throw Error("URNs do not have any generally defined hierarchical components");
        a = (new d(a)).normalize(); c = b._parts; e = a._parts; k = b.path(); f = a.path(); if ("/" !== k.charAt(0)) throw Error("URI is already relative"); if ("/" !== f.charAt(0)) throw Error("Cannot calculate a URI relative to another relative URI"); c.protocol === e.protocol && (c.protocol = null); if (c.username === e.username && c.password === e.password && null === c.protocol && null === c.username && null === c.password && c.hostname === e.hostname && c.port === e.port) c.hostname = null, c.port = null; else return b.build(); if (k === f) return c.path = "", b.build();
        a = d.commonPath(b.path(), a.path()); if (!a) return b.build(); e = e.path.substring(a.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "../"); c.path = e + c.path.substring(a.length); return b.build()
    }; e.equals = function (a) {
        var b = this.clone(); a = new d(a); var c = {}, e = {}, k = {}, f; b.normalize(); a.normalize(); if (b.toString() === a.toString()) return !0; c = b.query(); e = a.query(); b.query(""); a.query(""); if (b.toString() !== a.toString() || c.length !== e.length) return !1; c = d.parseQuery(c, this._parts.escapeQuerySpace); e = d.parseQuery(e, this._parts.escapeQuerySpace);
        for (f in c) if (v.call(c, f)) { if (!l(c[f])) { if (c[f] !== e[f]) return !1 } else if (!n(c[f], e[f])) return !1; k[f] = !0 } for (f in e) if (v.call(e, f) && !k[f]) return !1; return !0
    }; e.duplicateQueryParameters = function (a) { this._parts.duplicateQueryParameters = !!a; return this }; e.escapeQuerySpace = function (a) { this._parts.escapeQuerySpace = !!a; return this }; return d
});
(function (q, w) { "object" === typeof exports ? module.exports = w(require("./URI")) : "function" === typeof define && define.amd ? define(["./URI"], w) : q.URITemplate = w(q.URI, q) })(this, function (q, w) {
    function p(d) { if (p._cache[d]) return p._cache[d]; if (!(this instanceof p)) return new p(d); this.expression = d; p._cache[d] = this; return this } function r(d) { this.data = d; this.cache = {} } var d = w && w.URITemplate, x = Object.prototype.hasOwnProperty, z = p.prototype, l = {
        "": { prefix: "", separator: ",", named: !1, empty_name_separator: !1, encode: "encode" },
        "+": { prefix: "", separator: ",", named: !1, empty_name_separator: !1, encode: "encodeReserved" }, "#": { prefix: "#", separator: ",", named: !1, empty_name_separator: !1, encode: "encodeReserved" }, ".": { prefix: ".", separator: ".", named: !1, empty_name_separator: !1, encode: "encode" }, "/": { prefix: "/", separator: "/", named: !1, empty_name_separator: !1, encode: "encode" }, ";": { prefix: ";", separator: ";", named: !0, empty_name_separator: !1, encode: "encode" }, "?": { prefix: "?", separator: "&", named: !0, empty_name_separator: !0, encode: "encode" }, "&": {
            prefix: "&",
            separator: "&", named: !0, empty_name_separator: !0, encode: "encode"
        }
    }; p._cache = {}; p.EXPRESSION_PATTERN = /\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g; p.VARIABLE_PATTERN = /^([^*:]+)((\*)|:(\d+))?$/; p.VARIABLE_NAME_PATTERN = /[^a-zA-Z0-9%_]/; p.expand = function (d, f) {
        var n = l[d.operator], q = n.named ? "Named" : "Unnamed", A = d.variables, u = [], m, g, e; for (e = 0; g = A[e]; e++) m = f.get(g.name), m.val.length ? u.push(p["expand" + q](m, n, g.explode, g.explode && n.separator || ",", g.maxlength, g.name)) : m.type && u.push(""); return u.length ? n.prefix + u.join(n.separator) :
        ""
    }; p.expandNamed = function (d, f, n, p, A, u) { var m = "", g = f.encode; f = f.empty_name_separator; var e = !d[g].length, v = 2 === d.type ? "" : q[g](u), t, l, r; l = 0; for (r = d.val.length; l < r; l++) A ? (t = q[g](d.val[l][1].substring(0, A)), 2 === d.type && (v = q[g](d.val[l][0].substring(0, A)))) : e ? (t = q[g](d.val[l][1]), 2 === d.type ? (v = q[g](d.val[l][0]), d[g].push([v, t])) : d[g].push([void 0, t])) : (t = d[g][l][1], 2 === d.type && (v = d[g][l][0])), m && (m += p), n ? m += v + (f || t ? "=" : "") + t : (l || (m += q[g](u) + (f || t ? "=" : "")), 2 === d.type && (m += v + ","), m += t); return m }; p.expandUnnamed =
    function (d, f, n, p, l) { var u = "", m = f.encode; f = f.empty_name_separator; var g = !d[m].length, e, v, t, r; t = 0; for (r = d.val.length; t < r; t++) l ? v = q[m](d.val[t][1].substring(0, l)) : g ? (v = q[m](d.val[t][1]), d[m].push([2 === d.type ? q[m](d.val[t][0]) : void 0, v])) : v = d[m][t][1], u && (u += p), 2 === d.type && (e = l ? q[m](d.val[t][0].substring(0, l)) : d[m][t][0], u += e, u = n ? u + (f || v ? "=" : "") : u + ","), u += v; return u }; p.noConflict = function () { w.URITemplate === p && (w.URITemplate = d); return p }; z.expand = function (d) {
        var f = ""; this.parts && this.parts.length || this.parse();
        d instanceof r || (d = new r(d)); for (var n = 0, l = this.parts.length; n < l; n++) f += "string" === typeof this.parts[n] ? this.parts[n] : p.expand(this.parts[n], d); return f
    }; z.parse = function () {
        var d = this.expression, f = p.EXPRESSION_PATTERN, n = p.VARIABLE_PATTERN, q = p.VARIABLE_NAME_PATTERN, r = [], u = 0, m, g, e; for (f.lastIndex = 0; ;) {
            g = f.exec(d); if (null === g) { r.push(d.substring(u)); break } else r.push(d.substring(u, g.index)), u = g.index + g[0].length; if (!l[g[1]]) throw Error('Unknown Operator "' + g[1] + '" in "' + g[0] + '"'); if (!g[3]) throw Error('Unclosed Expression "' +
            g[0] + '"'); m = g[2].split(","); for (var v = 0, t = m.length; v < t; v++) { e = m[v].match(n); if (null === e) throw Error('Invalid Variable "' + m[v] + '" in "' + g[0] + '"'); if (e[1].match(q)) throw Error('Invalid Variable Name "' + e[1] + '" in "' + g[0] + '"'); m[v] = { name: e[1], explode: !!e[3], maxlength: e[4] && parseInt(e[4], 10) } } if (!m.length) throw Error('Expression Missing Variable(s) "' + g[0] + '"'); r.push({ expression: g[0], operator: g[1], variables: m })
        } r.length || r.push(d); this.parts = r; return this
    }; r.prototype.get = function (d) {
        var f = this.data,
        n = { type: 0, val: [], encode: [], encodeReserved: [] }, l; if (void 0 !== this.cache[d]) return this.cache[d]; this.cache[d] = n; f = "[object Function]" === String(Object.prototype.toString.call(f)) ? f(d) : "[object Function]" === String(Object.prototype.toString.call(f[d])) ? f[d](d) : f[d]; if (void 0 !== f && null !== f) if ("[object Array]" === String(Object.prototype.toString.call(f))) { l = 0; for (d = f.length; l < d; l++) void 0 !== f[l] && null !== f[l] && n.val.push([void 0, String(f[l])]); n.val.length && (n.type = 3) } else if ("[object Object]" === String(Object.prototype.toString.call(f))) {
            for (l in f) x.call(f,
            l) && void 0 !== f[l] && null !== f[l] && n.val.push([l, String(f[l])]); n.val.length && (n.type = 2)
        } else n.type = 1, n.val.push([void 0, String(f)]); return n
    }; q.expand = function (d, f) { var l = (new p(d)).expand(f); return new q(l) }; return p
});
