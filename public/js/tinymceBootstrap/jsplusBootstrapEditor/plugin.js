!function () {
	var t = {}, e = {}, n = {}, i = {}, o = {}, r = {}, s = {}, u = {}, l = {}, h = {}, p = {}, a = {}, c = {}, f = {},
		d = {}, v = {}, y = {}, _ = {}, g = {}, m = {}, w = {}, b = {}, E = {}, T = {}, j = {}, x = {}, A = {}, O = {},
		C = {}, J = {}, N = {}, L = {}, M = {}, F = {}, V = {}, k = {}, K = {}, H = {}, I = {}, R = {}, Z = {}, B = {},
		D = {}, S = {}, z = {}, U = {}, Y = {}, P = {}, q = {}, G = {}, Q = {}, X = {}, W = {}, $ = {}, tt = {},
		et = {}, nt = {}, it = {}, ot = {}, rt = {}, st = {}, ut = {}, lt = {}, ht = {}, pt = {}, at = {}, ct = {};
	i = function (t, e, n) {
		var i;
		Object.defineProperty(t, "__esModule", {value: !0}), (i = t.KNk || (t.KNk = {}))[i.gwg = 0] = "gwg", i[i.mRb = 1] = "mRb", i[i.OrW = 2] = "OrW";
		var o = function () {
			function t(t, e, n, i) {
				void 0 === i && (i = e), this.JRB = {}, this.FUU = null, this.nIA = null, this.aoI = t, this.FUU = e, this.nIA = i, window.jsplus_default_parameters || (window.jsplus_default_parameters = {}), window.jsplus_default_parameters[i] = n
			}

			return t.dzX = function (e) {
				for (var n = 0, i = t.vsm; n < i.length; n++) {
					var o = i[n];
					if (o.dzX() === e) return o
				}
				return null
			}, t.prototype.dzX = function () {
				return this.aoI
			}, t.prototype.bnP = function (t, e) {
				var i = this.pgn(t);
				null != i && ("IMG" === i.tagName ? n.aMO(i, "src", e) : i.style.backgroundImage = "url('" + e + "')")
			}, t.prototype.EXg = function (t) {
				if (void 0 === t && (t = "b3"), window.jsplus_framework) return window.jsplus_framework;
				var e = this.huQ("framework");
				if (null != e) return e;
				if (null != (e = this.yUB("jsplusInclude", "framework"))) return e;
				var n = this.yUB("jsplusBootstrapInclude", "version");
				return null != n ? "b" + n : null != (n = this.yUB("jsplusFoundationInclude", "version")) ? "f" + n : null != (n = this.yUB("jsplus_bootstrap_include", "version")) ? "b" + n : null != (n = this.yUB("jsplus_foundation_include", "version")) ? "f" + n : null != (n = this.JoA("jsplus_bootstrap_include_version", null)) ? "b" + n : null != (n = this.JoA("jsplus_foundation_include_version", null)) ? "f" + n : t
			}, t.prototype.yCf = function () {
				return this.MOH(this.nIA)
			}, t.prototype.MOH = function (t) {
				var n = this.uFY(t, {});
				n instanceof Object || (n = {});
				var i = new e.GzR(n), o = window.jsplus_default_parameters[t], r = new e.GzR(o);
				return i.UqI(r)
			}, t.prototype.huQ = function (t, e) {
				return void 0 === e && (e = null), this.yCf().FKy(t, e)
			}, t.vsm = [], t
		}();
		return t.Ila = o, t
	}(i, e = function (t, e) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var n = function () {
			function t(e) {
				for (var n in e) {
					var i = e[n];
					i instanceof Object && !Array.isArray(i) && (i = new t(i)), this[n] = i
				}
			}

			return t.prototype.xOk = function () {
				for (var n = {}, i = 0, o = this.TZH(); i < o.length; i++) {
					var r = o[i], s = this[r];
					s instanceof t && (s = s.xOk()), n[r] = s
				}
				return e.bwA(n)
			}, t.prototype.TZH = function () {
				var t = [];
				for (var e in this) {
					"function" != typeof this[e] && t.push(e)
				}
				return t
			}, t.prototype.FKy = function (e, n) {
				return void 0 === n && (n = null), this.TZH().indexOf(e) > -1 ? this[e] instanceof t ? this[e].xOk() : this[e] : n
			}, t.prototype.mAK = function (t, e) {
				return void 0 === e && (e = null), this.FKy(t, e)
			}, t.prototype.zQD = function (t, e) {
				return void 0 === e && (e = null), this.FKy(t, e)
			}, t.prototype.iDZ = function (t, e) {
				return void 0 === e && (e = null), this.FKy(t, e)
			}, t.prototype.HIS = function () {
				return new t(this.xOk())
			}, t.prototype.LYb = function (e) {
				for (var n = this.HIS(), i = e, o = n.TZH(), r = 0, s = i.TZH(); r < s.length; r++) {
					var u = s[r], l = i[u];
					l instanceof t && o.indexOf(u) > -1 ? n[u] = n[u].LYb(l) : n[u] = l
				}
				return n
			}, t.prototype.UqI = function (t) {
				return t.LYb(this)
			}, t
		}();
		return t.GzR = n, t
	}(e, t = function (t) {
		function e(t) {
			return null == t ? null : "object" == typeof t ? n(t) : t
		}

		function n(t, i) {
			if (void 0 === i && (i = !1), Array.isArray(t)) {
				for (var o = [], r = 0; r < t.length; r++) o.push(t[r]);
				return o
			}
			var s = {};
			for (var u in t) "function" == typeof t[u] && i || (null != t[u] && "object" == typeof t[u] ? s[u] = n(t[u], i) : s[u] = e(t[u]));
			return s
		}

		function i(t) {
			var e = 0;
			for (var n in t) t.hasOwnProperty(n) && e++;
			return e
		}

		function o(t, e, n) {
			return void 0 === n && (n = !1), (null != t || null == e) && ((null == t || null != e) && (null == t || ("object" != typeof t || "object" == typeof e) && (("object" != typeof e || "object" == typeof t) && ("object" == typeof t ? r(t, e, n) : t === e))))
		}

		function r(e, s, u) {
			void 0 === u && (u = !1);
			var l = n(e, u), h = n(s, u);
			if (i(l) !== i(h)) return !1;
			for (var p in l) {
				if (!(p in h)) return !1;
				var a = l[p], c = h[p];
				if (a !== t.RgC && c !== t.RgC) {
					if (typeof a == typeof c && "object" == typeof a && !r(a, c, u)) return !1;
					if (!o(a, c, u)) return !1
				}
			}
			return !0
		}

		function s(t, e) {
			return void 0 === e && (e = 0), null == t ? "null" : "object" == typeof t ? u(t, e) : "string" == typeof t ? '"' + t + '"' : t.toString()
		}

		function u(t, e) {
			void 0 === e && (e = 0);
			for (var n = "{", i = e + 3, o = "", r = 0; r < e; r++) o += " ";
			var u = "";
			for (r = 0; r < i; r++) u += " ";
			var l = !0;
			for (var h in t) {
				l && (n += "\n", l = !1);
				var p = t[h];
				n.length > 2 && (n += ",\n"), n += u + h + ": " + s(p, i)
			}
			return l || (n += "\n" + o), n += "}"
		}

		return Object.defineProperty(t, "__esModule", {value: !0}), t.RgC = "__ANY", t.yUF = e, t.RIG = function t(e, n) {
			void 0 === n && (n = !1);
			var i = [];
			for (var o in e) n && "object" == typeof e[o] ? i.push(t(e[o], !0)) : i.push(e[o]);
			return i
		}, t.bwA = n, t.jeP = i, t.ZxE = o, t.jta = r, t.JeB = s, t.iMH = u, t.WRW = function (t, e) {
			if (null == t || null == e) return !1;
			if (t.length !== e.length) return !1;
			for (var n in t) {
				var i = t[n], r = e[n];
				if (null == i || null == r) return !1;
				for (var s in i) if (!o(i[s], r[s])) return !1
			}
			return !0
		}, t
	}(t)), n = function (t) {
		function e(t, e) {
			return void 0 === t && (t = "div"), void 0 === e && (e = window.document), e.createElement(t)
		}

		function n(t, e) {
			u(t, e) || (t.className = 0 === t.className.length ? e : t.className + " " + e)
		}

		function i(t, e) {
			for (var n = o(t); n.indexOf(e) > -1;) n.splice(n.indexOf(e), 1);
			s(t, n)
		}

		function o(t) {
			return void 0 === t.className || null == t.className ? [] : r(t.className)
		}

		function r(t) {
			var e = t.split(/\s+/);
			return 1 === e.length && "" === e[0] && (e = []), e
		}

		function s(t, e) {
			if (0 === e.length) t.removeAttribute("class"); else {
				for (var n = "", i = 0; i < e.length; i++) {
					var o = e[i].trim();
					o.length > 0 && (n.length > 0 && (n += " "), n += o)
				}
				t.className = n
			}
		}

		function u(t, e) {
			for (var n = o(t), i = 0; i < n.length; i++) if (n[i].toLowerCase() === e.toLowerCase()) return !0;
			return !1
		}

		function l(t) {
			if (void 0 === t.getAttribute("style") || null == t.getAttribute("style") || 0 === t.getAttribute("style").trim().length) return {};
			for (var e = {}, n = t.getAttribute("style").split(/;/), i = 0; i < n.length; i++) {
				var o = n[i].trim();
				if (o.length > 0) {
					var r = o.indexOf(":");
					r > -1 ? e[o.substr(0, r).trim()] = o.substr(r + 1) : e[o] = ""
				}
			}
			return e
		}

		function h(t, e) {
			var n = l(t);
			for (var i in n) {
				var o = n[i].trim();
				if (i === e) return o
			}
			return null
		}

		function p(t, e, n) {
			if (null == n) a(t, e); else {
				var i = l(t);
				i[e] = n, c(t, i)
			}
		}

		function a(t, e) {
			var n = l(t);
			delete n[e], c(t, n)
		}

		function c(t, e) {
			var n = [];
			for (var i in e) i.trim().length > 0 && n.push(i + ":" + e[i.trim()]);
			n.length > 0 ? t.setAttribute("style", n.join(";")) : t.hasAttribute("style") && t.removeAttribute("style")
		}

		function f(t) {
			return void 0 === t && (t = document), t.getElementsByTagName("head")[0]
		}

		function d(t) {
			return void 0 === t && (t = document), t.getElementsByTagName("body")[0]
		}

		function v(t, e, n) {
			var i = e.trim();
			if ("" !== i) try {
				null == n ? t.removeAttribute(i) : t.setAttribute(i, n)
			} catch (t) {
			}
		}

		function y(t, e, n) {
			if (!t.hasAttribute(e)) return n;
			var i = t.getAttribute(e), o = parseInt(i);
			return isNaN(o) ? n : o
		}

		function _(t, e) {
			t.parentElement.insertBefore(e, t)
		}

		Object.defineProperty(t, "__esModule", {value: !0}), t.BEe = function (t) {
			var n = e(t.tagName);
			n.innerHTML = t.innerHTML;
			for (var i = 0; i < t.attributes.length; i++) n.setAttribute(t.attributes[i].name, t.attributes[i].value);
			return n
		}, t.QrW = e, t.zcR = function (t, i, o, r) {
			void 0 === o && (o = "div"), void 0 === r && (r = null), null == o && (o = "div");
			var s = e(o);
			return null != t && n(s, t), null != r && (s.textContent = r), i.appendChild(s), s
		}, t.AFu = n, t.LfB = i, t.GTY = function (t, e, o) {
			o ? n(t, e) : i(t, e)
		}, t.MGG = o, t.Qyt = r, t.jjU = s, t.cVp = u, t.yqi = function (t, e) {
			for (var n = o(t), i = 0; i < n.length; i++) if (0 === n[i].indexOf(e)) return !0;
			return !1
		}, t.zDN = l, t.rms = function (t, e, n) {
			void 0 === n && (n = null);
			var i = h(t, e);
			return null == i ? n : (i = i.substring(0, i.length - 2), parseInt(i))
		}, t.aeE = h, t.OWo = function (t, e, n) {
			var i = l(t);
			for (var o in i) {
				var r = i[o];
				if (o === e && r === n) return !0
			}
			return !1
		}, t.PSO = function (t, e, n, o) {
			o ? p(t, e, n) : i(t, e)
		}, t.DEw = p, t.asd = a, t.oCF = c, t.dcD = function (t) {
			return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
		}, t.jOb = function (t) {
			var n = e();
			return n.innerHTML = t, n.childNodes[0]
		}, t.AlI = function (t) {
			var n = e();
			return n.appendChild(t), n.innerHTML
		}, t.RTy = function (t) {
			return void 0 === t && (t = document), t.getElementsByTagName("html")[0]
		}, t.GVv = f, t.aBl = d, t.ZoU = function (t, e) {
			void 0 === e && (e = document);
			for (var n = e.getElementsByTagName("link"), i = 0; i < n.length; i++) if (-1 !== n[i].getAttribute("href").indexOf(t)) return n[i];
			var o = e.createElement("link");
			return o.href = t, o.type = "text/css", o.rel = "stylesheet", f(e).appendChild(o), o
		}, t.Tix = function (t, e, n) {
			void 0 === e && (e = document), void 0 === n && (n = null);
			for (var i = e.getElementsByTagName("script"), o = !1, r = 0; r < i.length; r++) {
				var s = i[r].getAttribute("src");
				null != s && -1 !== s.indexOf(t) && (o = !0)
			}
			if (o) null != n && n(); else {
				var u = e.createElement("script");
				u.type = "text/javascript", null != n && (u.readyState ? u.onreadystatechange = function () {
					"loaded" !== u.readyState && "complete" !== u.readyState || (u.onreadystatechange = null, n())
				} : u.onload = function () {
					n()
				}), u.src = t, f(e).appendChild(u)
			}
		}, t.CpB = function (t, e) {
			void 0 === e && (e = document);
			var n = e.createElement("style");
			f(e).appendChild(n), n.innerHTML = t
		}, t.Bmy = function (t, e) {
			void 0 === e && (e = []);
			for (var n = t.attributes, i = {}, o = 0; o < n.length; o++) {
				for (var r = !1, s = n[o].nodeName, u = 0; u < e.length && !r; u++) e[u] === s && (r = !0);
				r || (i[s] = n[o].nodeValue)
			}
			return i
		}, t.Nla = function (t, e, n) {
			void 0 === n && (n = []);
			for (var i = [], o = 0; o < t.attributes.length; o++) i.push(t.attributes[o].name);
			for (var r = 0, s = i; r < s.length; r++) {
				var u = s[r];
				if (-1 === n.indexOf(u)) {
					var l = !0;
					for (o = 0; o < e.length; o++) e[o][0] === u && (l = !1);
					l && t.removeAttribute(u)
				}
			}
			for (o = 0; o < e.length; o++) {
				for (var h = !1, p = e[o][0], a = e[o][1], c = 0; c < n.length && !h; c++) n[c] === p && (h = !0);
				h || v(t, p, a)
			}
		}, t.Fhg = function (t, e) {
			v(t, e, null)
		}, t.aMO = v, t.efV = y, t.gwi = function (t, e, n) {
			var i = y(t, e, n);
			return i < 0 ? n : i
		}, t.HZr = function () {
			var t = 0;
			return "number" == typeof window.innerWidth ? t = window.innerWidth : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? t = document.documentElement.clientWidth : document.body && (document.body.clientWidth || document.body.clientHeight) && (t = document.body.clientWidth), t
		}, t.hzr = function () {
			var t = 0;
			return "number" == typeof window.innerWidth ? t = window.innerHeight : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? t = document.documentElement.clientHeight : document.body && (document.body.clientWidth || document.body.clientHeight) && (t = document.body.clientHeight), t
		}, t.eHV = function (t, e) {
			for (var n = 0, i = ["propertychange", "change", "click", "keyup", "input", "paste"]; n < i.length; n++) {
				var o = i[n];
				t.addEventListener(o, function () {
					var n = t, i = e;
					return function (t) {
						i(n.value)
					}
				}())
			}
		}, t.kAt = function (t, e) {
			for (var n = document.createElement(e), i = 0; i < t.attributes.length; i++) {
				var o = t.attributes.item(i);
				n.setAttribute(o.name, o.value)
			}
			return n.innerHTML = t.innerHTML, n
		}, t.dbt = _, t.FfG = function (t, e) {
			t.parentElement.insertBefore(e, t.nextSibling)
		}, t.zlu = function (t, e) {
			t.children.length > 0 ? _(t.children.item(0), e) : t.appendChild(e)
		}, t.glk = function (t) {
			for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			for (var i = t.children, o = [], r = 0; r < i.length; r++) for (var s = 0, u = e; s < u.length; s++) {
				var l = u[s];
				i.item(r).tagName.toLowerCase() === l.toLowerCase() && o.push(i.item(r))
			}
			return o
		};
		var g = 0, m = !1;
		return t.sNb = function (t, n, i) {
			if (!m) {
				m = !0;
				var o = "jsplus_upload_form_" + ++g, r = document.getElementById(o);
				null != r && r.parentNode.removeChild(r), v(r = e("form"), "id", o), v(r, "enctype", "multipart/form-data"), p(r, "display", "none"), d(document).appendChild(r);
				var s = e("input");
				v(s, "type", "file"), v(s, "name", "file"), r.appendChild(s), t && v(s, "multiple", "multiple"), null != n && n.length > 0 && v(s, "accept", n);
				var u, l, h = (u = s, l = i, m = !1, function () {
					for (var t = [], e = 0; e < u.files.length; e++) t.push(u.files[e]);
					l(t)
				});
				s.addEventListener("change", h), s.click()
			}
		}, t
	}(n)), o = function (t) {
		return Object.defineProperty(t, "__esModule", {value: !0}), t.tOs = function () {
			return !1
		}, t.rcI = function (t) {
		}, t
	}(o), s = function (t, e) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var n = "", i = r(), o = i.lastIndexOf("/");

		function r() {
			if (document.currentScript) return document.currentScript.getAttribute("src");
			for (var t = document.getElementsByTagName("script"), e = t.length - 1; e >= 0; e--) if (t[e].src && t[e].src.length > 0) return t[e].src;
			return console.log("Warning: current URL of script not found"), ""
		}

		return n = o > -1 ? i.substr(0, o + 1) : i, t.vMn = r, t.bqf = function () {
			return e.IOP(n)
		}, t.NpM = function (t) {
			n = t
		}, t
	}(s, r = function (t) {
		function e(t, e, n) {
			void 0 === e && (e = !0), void 0 === n && (n = " ");
			if (t < 1e3) return t + n + (e ? "b" : "");
			var i = -1;
			do {
				t /= 1e3, ++i
			} while (t >= 1e3);
			return t.toFixed(1) + n + ["K", "M", "G", "T", "P", "E", "Z", "Y"][i] + (e ? "b" : "")
		}

		function n(t, n) {
			for (var i = 0; i < n.length; i++) {
				var o = n[i];
				t = t.replace("%%" + (i + 1), e(o))
			}
			for (i = 0; i < n.length; i++) {
				"string" != typeof(o = n[i]) && (o = o.toString()), t = t.replace("%" + (i + 1), o)
			}
			return t
		}

		function i(t) {
			var e = t.lastIndexOf(".");
			return -1 === e ? null : t.substr(e + 1)
		}

		return Object.defineProperty(t, "__esModule", {value: !0}), t.KRT = function (t) {
			var e = t.lastIndexOf(".");
			if (e > -1 && e < t.length - 1) {
				var n = t.substr(e + 1).toLowerCase();
				return "jpeg" === n || "jpg" === n || "png" === n || "gif" === n
			}
			return !1
		}, t.JXi = e, t.sJM = function (e, n) {
			void 0 === n && (n = " ");
			var i = Math.round(e / 1e3), o = Math.floor(i / 60);
			i -= 60 * o;
			var r = Math.floor(o / 60);
			o -= 60 * r;
			var s = i + " " + t.vAL.sec;
			return o > 0 && (s = o + " " + t.vAL.min + n + s), r > 0 && (s = r + " " + t.vAL.hour + n + s), s
		}, t.eGD = function (t) {
			return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
		}, t.Eco = n, t.hVT = function (t) {
			for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
			return n(t, e)
		}, t.Knn = i, t.xff = function (t) {
			var e = i(t);
			return null != e && (t = t.substr(0, t.length - e.length - 1)), t
		}, t.xvq = function (t) {
			return t.charAt(0).toUpperCase() + t.slice(1)
		}, t.baH = function (t, e) {
			return -1 !== t.indexOf(e, t.length - e.length)
		}, t.twH = function (t) {
			return 0 !== t.length && "/" === t.substr(0, 1) || (t = "/" + t), t
		}, t.bxA = function (t) {
			return t.length > 0 && "/" === t.substr(0, 1) && (t = t.substr(1)), t
		}, t.IOP = function (t) {
			return 0 !== t.length && "/" === t.substr(t.length - 1) || (t += "/"), t
		}, t.vlz = function (t) {
			return t.length > 0 && "/" === t.substr(t.length - 1) && (t = t.substr(0, t.length - 1)), t
		}, t.vAL = {sec: "sec", min: "min", hours: "hours"}, t
	}(r)), u = function (t) {
		function e() {
			return window.jsplus_globals || (window.jsplus_globals = []), window.jsplus_globals
		}

		return Object.defineProperty(t, "__esModule", {value: !0}), t.Jsb = {
			set: function (t, n) {
				e()[t] = n
			}, exists: function (t) {
				return t in e()
			}, get: function (t, n) {
				return void 0 === n && (n = null), e().exists(t) ? e()[t] : n
			}
		}, t
	}(u);
	var ft,
		dt = this && this.__extends || (ft = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
			t.__proto__ = e
		} || function (t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		}, function (t, e) {
			function n() {
				this.constructor = t
			}

			ft(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
		});
	l = function (t, e, n, i, o, r, s) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var u = function (t) {
			function u() {
				return null !== t && t.apply(this, arguments) || this
			}

			return dt(u, t), u.SPZ = function (t) {
				if (!i.tOs()) {
					if (t.Rrg) for (var e = 0, n = t.Rrg; e < n.length; e++) {
						var l = n[e];
						window.tinymce.PluginManager.load(l, o.bqf()), u.DBP[l] = o.bqf()
					}
					window.tinymce.PluginManager.add(t.eaF, (h = t, function (t, e) {
						if (h.Rrg) for (var n = 0, i = h.Rrg; n < i.length; n++) {
							var l = i[n];
							window.tinymce.PluginManager.get(l)(t, o.bqf())
						}
						var p = u.Nze(t, h.eaF, h.LCQ, h.nIA);
						!0 !== p.JoA("useEditorUI", !0) || r.Jsb.exists("uiMode") || r.Jsb.set("uiMode", u.VcO()), null != p.JoA("jsplus_plugins_dir_url", null) && o.NpM(s.IOP(p.JoA("jsplus_plugins_dir_url", null)) + h.eaF), h.cKz(p)
					}))
				}
				var h
			}, u.Nze = function (t, n, i, o) {
				var r = new u(t, n, i, o);
				return e.Ila.vsm.push(r), r
			}, u.VcO = function () {
				return "tinymce"
			}, u.prototype.MsG = function () {
				return "4" === window.tinymce.majorVersion ? 4 : 3
			}, u.prototype.VIJ = function () {
				return window.tinymce.minorVersion
			}, u.prototype.scc = function () {
				return !0
			}, u.prototype.tHi = function () {
				return this.MsG() > 3 && this.aoI.inline
			}, u.prototype.guZ = function () {
				return this.aoI.id.replace(/\[/, "_").replace(/\]/, "_")
			}, u.prototype.uRJ = function () {
				return 3 !== this.MsG() && this.tHi() ? this.aoI.bodyElement : this.aoI.getContainer()
			}, u.prototype.UmU = function () {
				return this.aoI.getDoc()
			}, u.prototype.eVF = function () {
				return this.aoI.getContent()
			}, u.prototype.oQo = function (t) {
				this.aoI.setContent(t)
			}, u.prototype.aJg = function () {
				var t = this.xFJ();
				return null != t && "IMG" === t.tagName ? t : null
			}, u.prototype.xFJ = function () {
				return null == window.tinymce.activeEditor || null == window.tinymce.activeEditor.selection ? null : window.tinymce.activeEditor.selection.getNode()
			}, u.prototype.bqf = function () {
				return window.tinymce.baseURL
			}, u.prototype.xcM = function () {
				return this.BYi(this.FUU)
			}, u.prototype.BYi = function (t) {
				if (t in u.DBP) return u.DBP[t];
				for (var e = 0; e < window.tinymce.editors.length; e++) {
					window.tinymce.editors[e];
					var n = this.JoA("external_plugins");
					if (n && t in n) {
						var i = n[t].replace("\\", "/"), o = i.lastIndexOf("/");
						return i = -1 === o ? "" : i.substr(0, o) + "/"
					}
				}
				return this.bqf() + "/plugins/" + t + "/"
			}, u.prototype.yUB = function (t, e) {
				var n = this.MOH(t);
				return e in n ? n[e] : window.jsplus_default_parameters && t in window.jsplus_default_parameters && e in window.jsplus_default_parameters[t] ? window.jsplus_default_parameters[t][e] : null
			}, u.prototype.JoA = function (t, e) {
				return void 0 === e && (e = null), this.aoI.getParam(t, e)
			}, u.prototype.TEv = function (t, e) {
			}, u.prototype.Uyw = function (t) {
				3 === this.MsG() ? this.aoI.execCommand("mceInsertContent", !1, t) : this.aoI.insertContent(t)
			}, u.prototype.zoS = function (t, n) {
				if (n === e.KNk.gwg || n === e.KNk.mRb || n === e.KNk.OrW) if (3 === this.MsG()) this.aoI.controlManager.setDisabled(t, n === e.KNk.gwg), this.aoI.controlManager.setActive(t, n === e.KNk.OrW); else if (this.guZ() in u.KEc && t in u.KEc[this.guZ()]) {
					var i = u.KEc[this.guZ()][t];
					i.disabled(n === e.KNk.gwg), i.active(n === e.KNk.OrW)
				}
			}, u.prototype.pgn = function (t) {
				var e = null;
				if (null == (e = 4 === this.MsG() && this.tHi() ? window.document.getElementById(this.dzX().theme.panel._id) : this.uRJ())) return null;
				var n = this.uRJ().ownerDocument.getElementById("btn-" + t + "-" + this.guZ() + "-button");
				if (null == n && (n = this.uRJ().ownerDocument.getElementById("btn-" + t + "-" + this.guZ())), null == n) {
					var i = e.getElementsByClassName((4 === this.MsG() ? "mce-mce_button_" : "mce_") + t);
					i.length > 0 && (n = i[0])
				}
				if (null != n) {
					var o = n.getElementsByTagName(4 === this.MsG() ? "I" : "IMG");
					return o.length > 0 ? o[0] : null
				}
				return null
			}, u.prototype.Nqm = function (t, e) {
				var n = this;
				"mode" !== t && ("beforeGetOutputHTML" !== t ? "contentDom" !== t ? "elementsPathUpdate" !== t ? ("selectionChange" === t && (3 === this.MsG() ? this.aoI.onNodeChange.add(function (t, o, r) {
					i.rcI(n.FUU), e(n)
				}) : this.aoI.on("NodeChange", function (t) {
					i.rcI(n.FUU), e(n)
				})), "dropFiles" === t && 4 === this.MsG() && this.aoI.on("drop", function (t) {
					t.preventDefault(), t.dataTransfer.files.length > 0 && e(n, t.dataTransfer.files)
				}), "keyDown" === t && this.aoI.on("keydown", function () {
					var t = e;
					return function (e) {
						i.rcI(this.pluginName), t(this, e.keyCode, e)
					}
				})) : i.rcI(this.FUU) : 4 === this.MsG() ? this.aoI.on("init", function (t) {
					i.rcI(n.FUU), e(n)
				}) : this.aoI.onInit.add(function (t) {
					i.rcI(n.FUU), e(n)
				}) : this.aoI.on("SaveContent", function (t) {
					i.rcI(n.FUU), t.content = e(n, t.content)
				}))
			}, u.prototype.UxZ = function (t) {
				t.preventDefault()
			}, u.prototype.jwv = function (t) {
				var e = this, n = t.DDW, i = this.xcM() + "icons/" + t.YgM + ".png";
				this.ZDq(this.aoI, t.eaF, i, n, !1, function () {
					t.LdN(e)
				}), t.hoD && this.MsG() > 3 && this.aoI.addMenuItem(t.eaF, {
					text: n,
					context: t.hoD,
					icon: !0,
					image: i
				})
			}, u.prototype.ZDq = function (t, e, i, o, r, s, l) {
				var h, p, a = this, c = (h = t, function (t) {
					s(h)
				}), f = t, d = {
					text: "",
					type: "button",
					icon: !0,
					classes: "widget btn " + u.VcO() + " btn-" + u.VcO() + "-" + this.guZ(),
					image: i,
					label: o,
					tooltip: o,
					title: o,
					id: "btn-" + e + "-" + this.guZ(),
					onPostRender: function () {
						var t, n;
						t = f, n = this, a.guZ() in u.KEc || (u.KEc[a.guZ()] = {}), u.KEc[a.guZ()][e] = n, r && window.tinymce.DOM.remove(n.getEl("preview")), null != s && n.on("click", c), l && l(t)
					}
				};
				r && (d.type = 3 === this.MsG() ? "ColorSplitButton" : "colorbutton", d.color = "#FFFFFF", d.panel = {}), 3 === this.MsG() && r && (p = !1, t.onNodeChange.add(function (t, i, o) {
					if (!p) {
						p = !0;
						var r = this.getElement().getElementsByClassName("mce_" + e);
						if (r.length > 0) {
							var s = r[0], u = s.parentNode,
								l = (u.nextSibling, n.jOb('<div id="content_forecolor" role="button" tabindex="-1" aria-labelledby="content_forecolor_voice" aria-haspopup="true"><table role="presentation" class="mceSplitButton mceSplitButtonEnabled mce_forecolor" cellpadding="0" cellspacing="0" title="Select Text Color"><tbody><tr><td class="mceFirst"></td><td class="mceLast"><a role="button" style="width:10px" tabindex="-1" href="javascript:;" class="mceOpen mce_forecolor" onclick="return false;" onmousedown="return false;" title="Select Text Color"><span class="mceOpen mce_forecolor"><span style="display:none;" class="mceIconOnly" aria-hidden="true">▼</span></span></a></td></tr></tbody></table></div>')),
								h = l.getElementsByClassName("mceFirst")[0];
							u.appendChild(l), h.appendChild(s), s.style.marginRight = "-1px", s.className = s.className + " mceAction mce_forecolor", l.getElementsByClassName("mceOpen")[0].addEventListener("click", c)
						}
					}
				})), t.addButton(e, d)
			}, u.prototype.uFY = function (t, e) {
				return this.aoI.getParam(t, e)
			}, u.KEc = {}, u.ctL = {}, u.DBP = {}, u
		}(e.Ila);
		return t.OKW = u, t
	}(l, i, n, o, s, u, r), h = function (t, e) {
		Object.defineProperty(t, "__esModule", {value: !0}), t.uPA = "", t.FqQ = "b4", t.uau = "b3", t.ZJy = "f5", t.EoP = "f6";
		var n = function () {
			function t(t, e) {
				this.jev = null, this.TJV = t, this.kNA = e
			}

			return t.prototype.Zen = function () {
				if (null == this.jev) {
					this.jev = [];
					for (var t = 0, e = f(this.TJV, this.kNA); t < e.length; t++) {
						var n = e[t];
						this.jev.push(new i(n, this.kNA))
					}
				}
				return this.jev
			}, t.prototype.zVq = function (t) {
				for (var e = 0, n = 0, i = this.Zen(); n < i.length; n++) {
					var o = i[n];
					o.QAt(t) && (e += o.kvx(t) + o.KQx(t))
				}
				return e
			}, t
		}();
		t.uws = n;
		var i = function () {
			function i(t, e) {
				this.QQx = null, this.TJV = t, this.kNA = e, this.xZl = b(this.kNA), this.ZLu = [[], []];
				for (var n = 0, i = this.xZl; n < i.length; n++) {
					var o = i[n];
					this.ZLu[0].push(x(t, o, e))
				}
				for (var r = 0, s = this.xZl; r < s.length; r++) {
					o = s[r];
					this.ZLu[1].push(J(t, o, e))
				}
				this.ZLu.push(M(t, this.kNA)), this.VVT()
			}

			return i.prototype.EXg = function () {
				return this.kNA
			}, i.prototype.SaG = function () {
				if (null == this.QQx) {
					var t = d(this.TJV, this.kNA);
					null != t && (this.QQx = new n(t, this.kNA))
				}
				return this.QQx
			}, i.prototype.VVT = function () {
				this.uZv = [];
				for (var t = 0; t < this.ZLu.length; t++) {
					for (var e = [], n = 0; n < this.ZLu[0].length; n++) e.push(this.ZLu[t][n]);
					this.uZv.push(e)
				}
			}, i.prototype.Hpo = function () {
				for (var n = e.MGG(this.TJV), i = o(this.kNA), r = n.length - 1; r >= 0; r--) i.indexOf(n[r]) > -1 && n.splice(r, 1);
				for (var s = 0, u = b(this.kNA); s < u.length; s++) {
					var l = u[s], h = this.BjS(l);
					h > -1 && (this.kNA === t.FqQ && "" === l ? n.push("col-" + h) : n.push("col-" + l + "-" + h));
					var p = this.Tec(l);
					p > -1 && (this.kNA === t.FqQ ? "" === l ? n.push("offset-" + h) : n.push("offset-" + l + "-" + p) : this.kNA === t.uau ? n.push("col-" + l + "-offset-" + p) : this.kNA !== t.ZJy && this.kNA !== t.EoP || n.push(l + "-offset-" + p)), this.kNA === t.FqQ || this.QAt(l) || n.push("hidden-" + l)
				}
				e.jjU(this.TJV, n), this.VVT()
			}, i.prototype.evv = function (e, n) {
				if (this.kNA !== t.FqQ) {
					var i = b(this.kNA).indexOf(e);
					if (i < 0) throw new Error("Incorrect framework format: " + e);
					this.ZLu[2][i] = n
				}
			}, i.prototype.SpU = function () {
				for (var t = 0; t < this.ZLu.length; t++) for (var e = 0; e < this.ZLu[t].length; e++) if (this.ZLu[t][e] !== this.uZv[t][e]) return !0;
				return !1
			}, i.prototype.rDf = function () {
				for (var t = void 0; t <= this.ZLu[2].length; t++) if (this.ZLu[2][t] !== this.uZv[2][t]) return !0;
				return !1
			}, i.prototype.FMv = function (t, e) {
				var n = b(this.kNA).indexOf(t);
				if (n < 0) throw new Error("Incorrect framework format: " + t);
				this.ZLu[0][n] = e
			}, i.prototype.BjS = function (t) {
				var e = b(this.kNA).indexOf(t);
				if (e < 0) throw new Error("Incorrect framework format: " + t);
				return this.ZLu[0][e]
			}, i.prototype.cnY = function () {
				return this.ZLu[0]
			}, i.prototype.taX = function (t, e) {
				var n = b(this.kNA).indexOf(t);
				if (n < 0) throw new Error("Incorrect framework format: " + t);
				this.ZLu[1][n] = e
			}, i.prototype.Tec = function (t) {
				var e = b(this.kNA).indexOf(t);
				if (e < 0) throw new Error("Incorrect framework format: " + t);
				return this.ZLu[1][e]
			}, i.prototype.kvx = function (t) {
				var e = b(this.kNA).indexOf(t);
				if (e < 0) throw new Error("Incorrect framework format: " + t);
				var n = this.ZLu[1][e];
				if (n > -1) return n;
				for (var i = e - 1; i >= 0; i--) if (-1 !== this.ZLu[1][i]) return this.ZLu[1][i];
				return 0
			}, i.prototype.KQx = function (t) {
				var e = b(this.kNA).indexOf(t);
				if (e < 0) throw new Error("Incorrect framework format: " + t);
				var n = this.ZLu[0][e];
				if (n > -1) return n;
				for (var i = e - 1; i >= 0; i--) if (-1 !== this.ZLu[0][i]) return this.ZLu[0][i];
				return 12
			}, i.prototype.QAt = function (t) {
				var e = b(this.kNA).indexOf(t);
				if (e < 0) throw new Error("Incorrect framework format: " + t);
				return this.ZLu[2][e]
			}, i
		}();

		function o(e) {
			for (var n = [], i = 0, o = b(e); i < o.length; i++) {
				for (var r = o[i], s = 0; s <= 12; s++) if (e === t.uau || e === t.FqQ) {
					var u = "" === r ? "" : "-" + r;
					e === t.uau ? n.push("col" + u + "-offset-" + s) : n.push("offset" + u + "-" + s), s > 0 && n.push("col" + u + "-" + s)
				} else e !== t.ZJy && e !== t.EoP || n.push(r + "-offset-" + s);
				e === t.FqQ || (e === t.uau ? (n.push("visible-" + r), n.push("hidden-" + r)) : e !== t.ZJy && e !== t.EoP || (n.push("show-for-" + r + "-only"), n.push("show-for-" + r + "-up"), n.push("hide-for-" + r + "-only"), n.push("hide-for-" + r + "-up")))
			}
			return n
		}

		function r(e) {
			return e === t.uau || e === t.FqQ
		}

		function s(n, i) {
			if (i === t.uau || i === t.FqQ) return null != n && 1 === n.nodeType && "DIV" === n.nodeName && (e.cVp(n, "container") || e.cVp(n, "container-fluid"));
			if (i === t.ZJy || t.EoP) return !1;
			throw new Error("Framework is not supported: " + i)
		}

		function u(t) {
			return null != t && 1 === t.nodeType && "DIV" === t.nodeName && e.cVp(t, "row")
		}

		function l() {
			return "row"
		}

		function h(t, e) {
			for (var n = t; 0 !== e;) if (e < 0) {
				if (null == (n = n.previousSibling)) return null;
				u(n) && e++
			} else {
				if (null == (n = n.nextSibling)) return null;
				u(n) && e--
			}
			return n
		}

		function p(t, e) {
			if (void 0 === e && (e = 1), e < 0) throw new Error("Incorrect `numberBack` parameter value:" + e);
			return h(t, -e)
		}

		function a(t, e) {
			if (void 0 === e && (e = 1), e < 0) throw new Error("Incorrect `numberNext` parameter value: " + e);
			return h(t, e)
		}

		function c(t, e) {
			if (null != e && 0 !== e) {
				var n = h(t, e);
				null != n && (e < 0 ? t.parentNode.insertBefore(t, n) : t.parentNode.insertBefore(t, n.nextSibling))
			}
		}

		function f(t, e) {
			for (var n = t.children, i = [], o = 0; o < n.length; o++) if (v(n[o], e)) i.push(n[o]); else if (!s(n[o], e) && !u(n[o])) for (var r = 0, l = f(n[o], e); r < l.length; r++) {
				var h = l[r];
				i.push(h)
			}
			return i
		}

		function d(t, e) {
			for (var n = t; null != n;) {
				if (u(n = n.parentNode)) return n;
				if (v(n, e) || s(n, e)) return null
			}
			return null
		}

		function v(n, i) {
			if (null == n || 1 !== n.nodeType || "DIV" !== n.nodeName) return !1;
			if (i === t.FqQ) {
				for (var o = 0, r = e.MGG(n); o < r.length; o++) {
					if (null != (h = (l = r[o]).match(/^col-(\d{1,2})$/i)) && (1 === h[1].length || "1" === h[1].substr(0, 1))) return !0;
					if (null != (h = l.match(/^col-(sm|md|lg|xl)-(\d{1,2})$/i)) && (1 === h[2].length || "1" === h[2].substr(0, 1))) return !0
				}
				return !1
			}
			if (i === t.uau) {
				for (var s = 0, u = e.MGG(n); s < u.length; s++) {
					var l, h;
					if (null != (h = (l = u[s]).match(/^col-(xs|sm|md|lg|xl)-(\d{1,2})$/i)) && (1 === h[2].length || "1" === h[2].substr(0, 1))) return !0
				}
				return !1
			}
			if (i === t.ZJy || i === t.EoP) return e.cVp(n, "columns");
			throw new Error("Framework is not supported: " + i)
		}

		function y(t, e, n) {
			for (var i = t; 0 !== e;) if (e < 0) {
				if (null == (i = i.previousSibling)) return null;
				v(i, n) && e++
			} else {
				if (null == (i = i.nextSibling)) return null;
				v(i, n) && e--
			}
			return i
		}

		function _(t, e, n) {
			if (void 0 === n && (n = 1), n < 0) throw new Error("Incorrect `numberBack` parameter value: " + n);
			return y(t, -n, e)
		}

		function g(t, e, n) {
			if (void 0 === n && (n = 1), n < 0) throw new Error("Incorrect `numberNext` parameter value: " + n);
			return y(t, n, e)
		}

		function m(t, e, n) {
			if (null != e && 0 !== e) {
				var i = y(t, e, n);
				null != i && (e < 0 ? t.parentNode.insertBefore(t, i) : t.parentNode.insertBefore(t, i.nextSibling))
			}
		}

		function w(t, n, i, o) {
			for (var r = 0, s = e.MGG(t); r < s.length; r++) {
				var u = s[r];
				if (u.indexOf(n) > -1) {
					var l = u.substr(u.indexOf(n) + n.length), h = parseInt(l);
					if (NaN !== h && h >= i && h <= o) return h
				}
			}
			return -1
		}

		function b(e) {
			if (e === t.FqQ) return ["", "sm", "md", "lg", "xl"];
			if (e === t.uau) return ["xs", "sm", "md", "lg"];
			if (e === t.ZJy || e === t.EoP) return ["small", "medium", "large", "xlarge", "xxlarge"];
			throw new Error("Framework is not supported: " + e)
		}

		function E(e) {
			if (e === t.FqQ || e === t.uau) return "col-FORMAT-XX";
			if (e === t.ZJy || e === t.EoP) return "FORMAT-XX";
			throw new Error("Framework is not supported: " + e)
		}

		function T(e, n, i) {
			var o = null == n ? "" : n.toString();
			return i === t.FqQ && "" === e ? "col-" + o : E(i).replace("FORMAT", e).replace("XX", o)
		}

		function j(t, e) {
			return T(t, null, e)
		}

		function x(t, e, n) {
			if (b(n).indexOf(e) < 0) throw new Error("Incorrect framework format: " + e);
			return w(t, j(e, n), 1, 12)
		}

		function A(e) {
			if (e === t.FqQ) return "offset-FORMAT-XX";
			if (e === t.uau) return "col-FORMAT-offset-XX";
			if (e === t.ZJy || e === t.EoP) return "FORMAT-offset-XX";
			throw new Error("Framework is not supported: " + e)
		}

		function O(e, n, i) {
			return i === t.FqQ && "" === e ? "offset-" + n : A(i).replace("FORMAT", e).replace("XX", null == n ? "" : n.toString())
		}

		function C(t, e) {
			return O(t, null, e)
		}

		function J(t, e, n) {
			if (b(n).indexOf(e) < 0) throw new Error("Incorrect framework format: " + e);
			return w(t, C(e, n), 0, 12)
		}

		function N(e) {
			if (e === t.FqQ) return "col-";
			if (e === t.uau) return "col-xs-";
			if (e === t.ZJy || e === t.EoP) return "small-";
			throw new Error("Framework is not supported: " + e)
		}

		function L(e) {
			if (e === t.FqQ || e === t.uau) return "";
			if (e === t.ZJy || e === t.EoP) return "columns";
			throw new Error("Framework is not supported: " + e)
		}

		function M(n, i) {
			if (i === t.FqQ) return [!0, !0, !0, !0, !0];
			if (i === t.uau) {
				for (var o = [!0, !0, !0, !0], r = 0, s = l = e.MGG(n); r < s.length; r++) {
					var u = s[r];
					u.indexOf("hidden-xs") >= 0 && (o[0] = !1), u.indexOf("hidden-sm") >= 0 && (o[1] = !1), u.indexOf("hidden-md") >= 0 && (o[2] = !1), u.indexOf("hidden-lg") >= 0 && (o[3] = !1), u.indexOf("visible-xs") >= 0 && (o[1] = !1, o[2] = !1, o[3] = !1), u.indexOf("visible-sm") >= 0 && (o[0] = !1, o[2] = !1, o[3] = !1), u.indexOf("visible-md") >= 0 && (o[0] = !1, o[1] = !1, o[3] = !1), u.indexOf("visible-lg") >= 0 && (o[0] = !1, o[1] = !1, o[2] = !1)
				}
				return o
			}
			if (i === t.ZJy || i === t.EoP) {
				var l;
				o = [!0, !0, !0, !0, !0];
				return (l = e.MGG(n)).indexOf("show-for-small-only") >= 0 && (o[1] = !1, o[2] = !1, o[3] = !1, o[4] = !1), l.indexOf("show-for-medium-only") >= 0 && (o[0] = !1, o[2] = !1, o[3] = !1, o[4] = !1), l.indexOf("show-for-large-only") >= 0 && (o[0] = !1, o[1] = !1, o[3] = !1, o[4] = !1), l.indexOf("show-for-xlarge-only") >= 0 && (o[0] = !1, o[1] = !1, o[2] = !1, o[4] = !1), l.indexOf("show-for-xxlarge-only") >= 0 && (o[0] = !1, o[1] = !1, o[2] = !1, o[3] = !1), l.indexOf("show-for-medium-up") >= 0 && (o[0] = !1), l.indexOf("show-for-large-up") >= 0 && (o[0] = !1, o[1] = !1), l.indexOf("show-for-xlarge-up") >= 0 && (o[0] = !1, o[1] = !1, o[2] = !1), l.indexOf("show-for-xxlarge-up") >= 0 && (o[0] = !1, o[1] = !1, o[2] = !1, o[3] = !1), l.indexOf("hide-for-small-only") >= 0 && (o[0] = !1), l.indexOf("hide-for-medium-only") >= 0 && (o[1] = !1), l.indexOf("hide-for-large-only") >= 0 && (o[2] = !1), l.indexOf("hide-for-xlarge-only") >= 0 && (o[3] = !1), l.indexOf("hide-for-xxlarge-only") >= 0 && (o[4] = !1), l.indexOf("hide-for-medium-up") >= 0 && (o[1] = !1, o[2] = !1, o[3] = !1, o[4] = !1), l.indexOf("hide-for-large-up") >= 0 && (o[2] = !1, o[3] = !1, o[4] = !1), l.indexOf("hide-for-xlarge-up") >= 0 && (o[3] = !1, o[4] = !1), l.indexOf("hide-for-xxlarge-up") >= 0 && (o[4] = !1), o
			}
			throw new Error("Framework is not supported: " + i)
		}

		function F(t, e) {
			for (var n = t; null != n;) {
				if (v(n, e)) return n;
				if (null == n.parentNode) return null;
				n = n.parentNode
			}
			return null
		}

		return t.ddu = i, t.gQf = "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7", t.xiS = "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2", t.rLq = "//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3", t.Ynw = "//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1", t.eXn = function (n, i, o) {
			if (void 0 === i && (i = {}), void 0 === o && (o = window.document), i.url || (n === t.uau && (i.url = "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/"), n === t.FqQ && (i.url = "//cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/"), n === t.ZJy && (i.url = "//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.0/"), n === t.EoP && (i.url = "//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.0/")), i.url.match(/\/$/) || (i.url += "/"), void 0 !== i.includeJQuery && null !== i.includeJQuery || (i.includeJQuery = !0), void 0 !== i.includeCss && null !== i.includeCss || (i.includeCss = !0), void 0 !== i.includeJs && null !== i.includeJs || (i.includeJs = !1), void 0 !== i.useWet && null !== i.useWet || (i.useWet = !1), void 0 !== i.includeIeFix && null !== i.includeIeFix || (i.includeIeFix = !0), void 0 !== i.includeTheme && null !== i.includeTheme || (i.includeTheme = !0), void 0 !== i.includeIcons && null !== i.includeIcons || (i.includeIcons = !0), void 0 !== i.urlIcons && null !== i.urlIcons || (i.urlIcons = "//cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css"), window.jsplus_framework = n, n === t.uau || n === t.FqQ) n === t.uau && i.useWet ? (i.includeCss && e.ZoU(i.url + "css/theme.css", o), i.includeJs && e.Tix(i.url + "js/wet-boew.js", o), i.includeIeFix && i.includeCss && e.ZoU(i.url + "css/ie8-theme.css", o), i.includeIeFix && i.includeJs && e.Tix(i.url + "js/ie8-wet-boew2.js", o)) : (i.includeCss && e.ZoU(i.url + "css/bootstrap.min.css", o), i.includeJs && e.Tix(i.url + "js/bootstrap.min.js", o), n === t.uau && (i.includeTheme && e.ZoU(i.url + "css/bootstrap-theme.min.css", o), i.includeIeFix && i.includeJs && (e.Tix("//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js", o), e.Tix("//oss.maxcdn.com/respond/1.4.2/respond.min.js", o)))); else if (n === t.ZJy) i.includeJs && i.includeJQuery && e.Tix("//code.jquery.com/jquery-1.10.1.min.js", o), i.includeCss && e.ZoU(i.url + "css/foundation.min.css", o), i.includeJs && (e.Tix(i.url + "js/foundation.min.js", o), e.Tix(i.url + "js/vendor/modernizr.js", o)), i.includeCss && i.includeIcons && e.ZoU(i.urlIcons, o); else {
				if (n !== t.EoP) throw new Error("Framework is not supported: " + n);
				i.includeJs && i.includeJQuery && e.Tix("//cdn.jsdelivr.net/jquery/2.2.2/jquery.min.js", o), i.includeCss && e.ZoU(i.url + "css/foundation.min.css", o), i.includeJs && e.Tix(i.url + "js/foundation.min.js", o), i.includeCss && i.includeIcons && e.ZoU(i.urlIcons, o)
			}
		}, t.NZI = o, t.aGM = function () {
			return [t.uau, t.FqQ, t.ZJy, t.EoP]
		}, t.PZT = function (e) {
			return e === t.ZJy || e === t.EoP
		}, t.uei = r, t.vUR = s, t.oeN = u, t.CkW = l, t.AFF = h, t.smc = function (t) {
			return null == p(t)
		}, t.fMj = function (t) {
			return null == a(t)
		}, t.YNf = p, t.gla = a, t.lbe = c, t.JfZ = function (t, e) {
			if (void 0 === e && (e = 1), e < 0) throw new Error("Incorrect `upCount` parameter value: " + e);
			c(t, e)
		}, t.tFh = function (t, e) {
			if (void 0 === e && (e = 1), e < 0) throw new Error("Incorrect `downCount` parameter value: " + e);
			c(t, e)
		}, t.Arq = f, t.abJ = d, t.Lyt = v, t.RVW = y, t.jtV = function (t, e) {
			return null == _(t, e)
		}, t.nen = function (t, e) {
			return null == g(t, e)
		}, t.chW = _, t.ERU = g, t.VDJ = m, t.erJ = function (t, e, n) {
			if (void 0 === n && (n = 1), n < 0) throw new Error("Incorrect `leftCount` parameter value:" + n);
			m(t, -n, e)
		}, t.orq = function (t, e, n) {
			if (void 0 === n && (n = 1), n < 0) throw new Error("Incorrect `rightCount` parameter value:" + n);
			m(t, n, e)
		}, t.bat = b, t.csv = E, t.wBq = T, t.MOI = j, t.NWV = x, t.jSk = A, t.wJV = O, t.pAJ = C, t.FhL = J, t.UZg = function (t) {
			return r(t) ? "container" : ""
		}, t.Glk = function (t) {
			return "row"
		}, t.IBM = N, t.pBk = function (e) {
			if (e === t.FqQ) return "col-12";
			if (e === t.uau) return "col-xs-12";
			if (e === t.ZJy || e === t.EoP) return "small-12 columns";
			throw new Error("Framework is not supported: " + e)
		}, t.mku = L, t.NcS = M, t.hPm = function (e) {
			return t.vAL["format_" + e]
		}, t.MrZ = function (t, e) {
			var n = F(t, e);
			if (null == n) for (var i = t; null != i;) {
				if ("DIV" === i.tagName) return i;
				if (null == i.parentNode) return null;
				i = i.parentNode
			}
			return n
		}, t.ncX = F, t.yNm = function (t, e) {
			for (var n = t; null != n;) {
				if (u(n)) return n;
				if (null == n.parentNode) return null;
				n = n.parentNode
			}
			return null
		}, t.zqQ = function (t, e) {
			for (var n = t; null != n;) {
				if (s(n, e)) return n;
				if (null == n.parentNode) return null;
				n = n.parentNode
			}
			return null
		}, t.pdG = function (t, n, i) {
			t.className = "row";
			for (var o = 0, r = i; o < r.length; o++) {
				var s = r[o], u = document.createElement("div");
				u.className = L(n);
				var l = N(n);
				e.AFu(u, l + s), t.appendChild(u)
			}
		}, t.vAL = {
			column: "Column",
			format_: "Default",
			format_xs: "X-Small",
			format_sm: "Small",
			format_md: "Medium",
			format_lg: "Large",
			format_xl: "X-Large",
			format_small: "Small",
			format_medium: "Medium",
			format_large: "Large",
			format_xlarge: "X-Large",
			format_xxlarge: "XX-Large"
		}, t
	}(h, n), a = function (t, e, n) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var i = function () {
			function t() {
				this.TJV = null, this.fMQ = [], this.hfa = null
			}

			return t.prototype.CIp = function (t) {
				-1 === this.fMQ.indexOf(t) && this.fMQ.push(t), null != this.TJV && this.yzT(this.TJV)
			}, t.prototype.LGH = function (t) {
				this.fMQ.indexOf(t) > -1 && (this.fMQ.splice(this.fMQ.indexOf(t), 1), null != this.TJV && this.yzT(this.TJV))
			}, t.prototype.yzT = function (t) {
				for (var n = e.MGG(t), i = n.length - 1; i >= 0; i--) 0 === n[i].indexOf("flag_") && n.splice(i, 1);
				for (var o = 0, r = this.fMQ; o < r.length; o++) {
					var s = r[o];
					n.push("flag_" + s)
				}
				e.jjU(t, n)
			}, t.prototype.kjD = function () {
				var t = this.uRJ();
				"none" !== t.style.display.toLowerCase() && (this.hfa = t.style.display, t.style.display = "none")
			}, t.prototype.Zbq = function () {
				this.uRJ().style.display = this.hfa
			}, t.prototype.Fvq = function () {
				return "jsplus_ui_" + this.BFA()
			}, t.prototype.iOY = function () {
				return this.Fvq() + "_"
			}, t.prototype.uRJ = function () {
				return null === this.TJV && (this.TJV = this.QrW(), e.AFu(this.TJV, "jsplus_theme"), e.AFu(this.TJV, this.Fvq()), this.eMG()), n.ZoU(), this.TJV
			}, t.prototype.aFA = function () {
				this.kjD(), this.TJV = null
			}, t.prototype.QrW = function () {
				var t = document.createElement(this.NBM());
				return this.yzT(t), t
			}, t.prototype.NBM = function () {
				return "div"
			}, t
		}();
		return t.cAE = i, t
	}(a, n, p = function (t, e, n) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var i = !1;
		return t.isa = "flat-blue", t.ZoU = function () {
			var o = t.isa;
			i || (e.ZoU(n.bqf() + o + ".css"), i = !0)
		}, t.hNz = function () {
			return t.isa
		}, t
	}(p, n, s));
	var vt;
	dt = this && this.__extends || (vt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		vt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	c = function (t, e, n, i) {
		var o, r;
		Object.defineProperty(t, "__esModule", {value: !0}), (r = o = t.xJB || (t.xJB = {}))[r.RyU = 0] = "RyU", r[r.Uje = 1] = "Uje", r[r.WVb = 2] = "WVb";
		var s = function (t) {
			function n(e) {
				var n = t.call(this) || this;
				return n.SME = e, n.uKc = null, n.NJr = !0, n
			}

			return dt(n, t), n.prototype.BFA = function () {
				return "button_flex"
			}, n.prototype.cvK = function (t) {
				this.SME = t
			}, n.prototype.ONU = function (t) {
				this.uKc = t, e.aMO(this.uRJ(), "title", t)
			}, n.prototype.fZt = function (t) {
				this.NJr = t, e.GTY(this.uRJ(), "jsplus_disabled", !t)
			}, n.prototype.Fpn = function (t) {
				e.GTY(this.uRJ(), "jsplus_hidden", !t)
			}, n.prototype.XSF = function () {
				!1 !== this.NJr && null != this.SME && this.SME()
			}, n.prototype.eMG = function () {
				var t = this;
				e.AFu(this.uRJ(), this.iOY() + "default"), this.uRJ().addEventListener("click", function () {
					t.XSF()
				})
			}, n
		}(n.cAE);
		t.ncT = s;
		var u = function (t) {
			function n(e, n, i) {
				var o = t.call(this, i) || this;
				return o.rTI = e, o.NJr = n, o
			}

			return dt(n, t), n.prototype.eMG = function () {
				var t = this;
				this.uRJ().appendChild(this.rTI), e.AFu(this.uRJ(), this.iOY() + "default"), this.uRJ().addEventListener("click", function () {
					t.XSF()
				})
			}, n
		}(s);
		t.LgB = u;
		var l = function (t) {
			function n(e) {
				var n = t.call(this, e.LdN) || this;
				return n.vGm = null, n.ESZ = null, n.cLt = e, n.cLt.rUy || (n.cLt.rUy = 4), n.cLt.dhO || (n.cLt.dhO = [4, 4, 4, 4]), n.NJr = e.NJr, n.uKc = e.uKc, n
			}

			return dt(n, t), n.prototype.Fpm = function () {
				this.ESZ = e.QrW(), this.uRJ().appendChild(this.ESZ)
			}, n.prototype.eMG = function () {
				e.GTY(this.uRJ(), this.iOY() + "vertical", !0 === this.cLt.ILd), e.GTY(this.uRJ(), this.iOY() + "icon_color_black", !1 !== this.cLt.gzA), e.GTY(this.uRJ(), "jsplus_disabled", !1 === this.cLt.NJr);
				for (var n = [], i = 0, r = this.cLt.dhO; i < r.length; i++) {
					var s = r[i];
					n.push(0 === s ? "0" : s + "px")
				}
				if (e.DEw(this.uRJ(), "padding", n.join(" ") + " !important"), this.cLt.ZYr && this.cLt.ZYr > 0 && e.DEw(this.uRJ(), "min-width", this.cLt.ZYr + "px"), this.cLt.Ovv && this.cLt.Ovv > 0 && e.DEw(this.uRJ(), "min-height", this.cLt.Ovv + "px"), this.cLt.CJD && this.cLt.CJD > 0 && e.DEw(this.uRJ(), "width", this.cLt.CJD + "px"), this.cLt.UMk && this.cLt.UMk > 0 && e.DEw(this.uRJ(), "height", this.cLt.UMk + "px"), !1 === this.cLt.ihp && e.AFu(this.uRJ(), "jsplus_no_border"), !0 === this.cLt.TfK && e.AFu(this.uRJ(), "jsplus_transparent"), this.cLt.kqS && this.cLt.kqS.length > 0 && (this.vGm = e.QrW("img"), this.vGm.src = this.cLt.kqS, this.uRJ().appendChild(this.vGm)), this.cLt.AEx && this.cLt.AEx.length > 0) {
					if (this.Fpm(), this.ESZ.textContent = this.cLt.AEx, this.cLt.OgM) {
						var u = "left";
						this.cLt.OgM === o.Uje && (u = "center"), this.cLt.OgM === o.WVb && (u = "right"), e.DEw(this.ESZ, "text-align", u)
					}
					null != this.vGm && e.DEw(this.vGm, "margin-" + (!0 === this.cLt.ILd ? "bottom" : "right"), this.cLt.rUy + "px")
				}
				if (this.cLt.uKc && this.cLt.uKc.length > 0 && (this.uRJ().title = this.cLt.uKc), this.cLt.coo) for (var l = 0, h = this.cLt.coo; l < h.length; l++) {
					var p = h[l];
					e.AFu(this.uRJ(), p)
				}
				t.prototype.eMG.call(this)
			}, n.prototype.jWb = function () {
				return this.uRJ(), this.vGm
			}, n.prototype.VpP = function () {
				return this.uRJ(), this.ESZ
			}, n.prototype.HeQ = function (t) {
				this.cLt.AEx = t, null == t || 0 === t.length ? (null != this.VpP() && this.uRJ().removeChild(this.VpP()), this.ESZ = null, null != this.jWb() && e.asd(this.vGm, "margin-" + (!0 === this.cLt.ILd ? "bottom" : "right"))) : (null == this.VpP() && (this.ESZ = e.QrW(), this.uRJ().appendChild(this.ESZ)), this.ESZ.textContent = t)
			}, n.prototype.LhE = function (t) {
				this.cLt.kqS = t, null == t || 0 === t.length ? (null != this.jWb() && this.uRJ().removeChild(this.jWb()), this.vGm = null) : (null == this.jWb() && (this.vGm = e.QrW("img"), this.uRJ().insertBefore(this.vGm, this.uRJ().firstChild), null != this.VpP() && e.DEw(this.vGm, "margin-" + (!0 === this.cLt.ILd ? "bottom" : "right"), this.cLt.rUy + "px")), this.vGm.src = t)
			}, n.VKn = o, n
		}(s);
		t.knY = l;
		var h = function (t) {
			function e(e, n, i) {
				return t.call(this, {AEx: e, NJr: n, dhO: [5, 8, 5, 8], ZYr: 70, OgM: o.Uje, LdN: i}) || this
			}

			return dt(e, t), e
		}(l);
		t.QzM = h;
		var p = function (t) {
			function e(e, n, o, r) {
				return void 0 === r && (r = !0), t.call(this, {
					AEx: e,
					dhO: [8, 15, 8, 12],
					UMk: 18,
					rUy: 8,
					kqS: r ? i.bqf() + "flat-blue/img/demo.png" : null,
					coo: ["jsplus_ui_button_flex-demo"],
					NJr: n,
					LdN: o
				}) || this
			}

			return dt(e, t), e.prototype.yTy = function (t) {
				var e = i.bqf() + "flat-blue/img/demo.png";
				t && (e = i.bqf() + "flat-blue/img/progress.gif"), this.LhE(e)
			}, e
		}(l);
		return t.zUX = p, t
	}(c, n, a, s), f = function (t) {
		function e() {
			return window.jsplus_plugins || (window.jsplus_plugins = {}), window.jsplus_plugins
		}

		return Object.defineProperty(t, "__esModule", {value: !0}), t.XQI = {
			add: function (t, n) {
				t in e() || (e()[t] = n)
			}, exists: function (t) {
				return t in e()
			}, get: function (t) {
				return e()[t]
			}
		}, t
	}(f);
	var yt;
	dt = this && this.__extends || (yt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		yt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	d = function (t, e, n, i) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var o = function (t) {
			function i(e, n, i) {
				void 0 === i && (i = null);
				var o = t.call(this) || this;
				return o.Awp = e, o.wAJ = n, o.MHL = i, o.QEF = !1, o
			}

			return dt(i, t), i.prototype.eMG = function () {
				this.wAJ && e.AFu(this.uRJ(), this.iOY() + "scrollable")
			}, i.prototype.BFA = function () {
				return "full_screen"
			}, i.prototype.Zbq = function () {
				if (n.XQI.get("fullScreenAdd")(this.uRJ(), this.Awp, this.MHL), e.AFu(this.uRJ(), "jsplus_show"), this.wAJ) {
					this.piu = window.scrollX, this.PDI = window.scrollY;
					var t = e.aBl();
					this.Zuy = e.aeE(t, "overflow"), this.Bcy = e.aeE(t, "overflow-x"), this.Rvp = e.aeE(t, "overflow-y"), e.DEw(t, "overflow", "inherit !important"), e.DEw(t, "overflow-x", "hidden !important"), e.DEw(t, "overflow-y", "auto !important"), window.scrollTo(0, 0)
				}
				this.QEF = !0
			}, i.prototype.kjD = function () {
				if (this.QEF) {
					if (n.XQI.get("fullScreenRemove")(this.uRJ()), e.LfB(this.uRJ(), "jsplus_show"), this.wAJ) {
						var t = e.aBl();
						e.DEw(t, "overflow", this.Zuy), e.DEw(t, "overflow-x", this.Bcy), e.DEw(t, "overflow-y", this.Rvp), window.scrollTo(this.piu, this.PDI)
					}
					this.QEF = !1
				}
			}, i
		}(i.cAE);
		t.Anh = o;
		var r = 12e3, s = [], u = [];

		function l() {
			var t = 0, n = r - 1;
			s.length > 0 && (n = s[s.length - 1]), t = n + 1;
			var i = function () {
				for (var t = 0, n = document.body.getElementsByTagName("*"), i = 0; i < n.length; i++) if (n[i].style) {
					var o = n[i].style.zIndex;
					null != o && +o > t && (e.cVp(n[i], "mce-tooltip") || e.cVp(n[i], "mce-floatpanel") || (t = +o))
				}
				return t
			}();
			return i >= t && (t = i + 1), t
		}

		function h(t) {
			return void 0 === t && (t = null), null == t && (t = l()), s.push(t), t
		}

		return n.XQI.add("fullScreenSetMinZIndex", function (t) {
			r = t
		}), n.XQI.add("fullScreenGetMinZIndex", function () {
			return r
		}), n.XQI.add("fullScreenGetNextZIndex", l), n.XQI.add("fullScreenReserveZIndex", h), n.XQI.add("fullScreenUnReserveZIndex", h), n.XQI.add("fullScreenAdd", function (t, n, i) {
			if (void 0 === n && (n = !1), void 0 === i && (i = null), i = h(i), e.DEw(t, "z-index", i.toString()), n) for (var o = e.aBl().children, r = 0; r < o.length; r++) {
				for (var s = o[r], l = !1, p = 0, a = u; p < a.length; p++) a[p][0] === s && (l = !0);
				l || (u.push([s, i, e.aeE(s, "display")]), e.DEw(s, "display", "none !important"))
			}
			e.aBl().appendChild(t)
		}), n.XQI.add("fullScreenRemove", function (t) {
			var n = e.aeE(t, "z-index");
			e.asd(t, "z-index");
			for (var i, o, r = parseInt(n), l = u.length - 1; l >= 0; l--) {
				var h = u[l];
				h[1] === r && (e.DEw(h[0], "display", h[2]), u.splice(l, 1))
			}
			i = r, (o = s.indexOf(i)) > -1 && s.splice(o, 1), t.parentElement.removeChild(t)
		}), t
	}(d, n, f, a);
	var _t;
	dt = this && this.__extends || (_t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		_t(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	v = function (t, e, n) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var i = function (t) {
			function n(e) {
				return void 0 === e && (e = null), t.call(this, !1, !1, e) || this
			}

			return dt(n, t), n.prototype.eMG = function () {
				t.prototype.eMG.call(this), e.AFu(this.uRJ(), "jsplus_ui_dialog_flex_bg")
			}, n
		}(n.Anh);
		return t.XTr = i, t
	}(v, n, d);
	var gt;
	dt = this && this.__extends || (gt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		gt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	y = function (t, e, n, i, o, r) {
		function s() {
			return !0
		}

		Object.defineProperty(t, "__esModule", {value: !0});
		var u = function (r) {
			function u(t) {
				void 0 === t && (t = null);
				var e = r.call(this) || this;
				return e.MHL = t, e.QEF = !1, e.nZI = null, e.obQ = null, e.CAA = null, e.FtN = !0, e.dQd = new o.XTr(e.MHL), e.tXv = new i.Anh(!1, !1), e
			}

			return dt(u, r), u.prototype.ImB = function (t, e, n) {
				return void 0 === n && (n = s), [this.vce(d.SBO, !0, n), this.EZw(c.Mhj, t, e)]
			}, u.prototype.FHc = function (t, e, i) {
				var o = this;
				void 0 === e && (e = !0), void 0 === i && (i = null);
				var r, s = (r = i, function () {
					null != r ? !1 !== r() && o.sXp(!0) : o.sXp(!1)
				});
				return new n.QzM(t, e, s)
			}, u.prototype.ZiP = function () {
				return this.obQ
			}, u.prototype.EZw = function (e, n, i) {
				var o;
				return void 0 === n && (n = !0), void 0 === i && (i = null), this.obQ = this.FHc("string" == typeof(o = e) ? o : t.vAL["ok" + o.toString()], n, i), this.obQ
			}, u.prototype.OjR = function () {
				return this.CAA
			}, u.prototype.vce = function (e, n, i) {
				var o;
				return void 0 === n && (n = !0), void 0 === i && (i = null), this.nZI = i, this.CAA = this.FHc("string" == typeof(o = e) ? o : t.vAL["cancel" + o.toString()], n, this.nZI), this.CAA
			}, u.prototype.Zez = function () {
				return []
			}, u.prototype.vgC = function () {
				return 0
			}, u.prototype.NTu = function () {
				return 0
			}, u.prototype.Xiu = function () {
				return 0
			}, u.prototype.mEf = function () {
				return 0
			}, u.prototype.MAq = function () {
				return 0
			}, u.prototype.EUJ = function () {
				return 0
			}, u.prototype.eMG = function () {
				this.mCz(), this.bfU.appendChild(document.createTextNode(this.adP())), this.qSX = this.Zez();
				for (var t = 0, n = this.qSX; t < n.length; t++) {
					var i = n[t];
					this.PQL.appendChild(i.uRJ())
				}
				this.IBn = this.rKU();
				for (var o = 0, r = this.IBn; o < r.length; o++) {
					i = r[o];
					this.GfG.appendChild(i.uRJ())
				}
				if (this.vgC() > 0 && this.FMv(this.vgC()), this.NTu() > 0 && this.bBR(this.NTu()), this.MAq() > 0 && e.DEw(this.JGC, "min-width", this.MAq() + "px"), this.EUJ() > 0 && e.DEw(this.JGC, "min-height", this.EUJ() + "px"), this.Xiu() > 0 && e.DEw(this.JGC, "max-width", this.Xiu() + "px"), this.mEf() > 0 && e.DEw(this.JGC, "max-height", this.mEf() + "px"), this.tXv.uRJ().appendChild(this.uRJ()), this.AtU()) {
					var s = e.zcR(this.iOY() + "content_padding", this.JGC);
					this.JGC = s
				}
			}, u.prototype.FMv = function (t) {
				e.DEw(this.JGC, "width", t + "px")
			}, u.prototype.bBR = function (t) {
				e.DEw(this.JGC, "height", t + "px")
			}, u.prototype.mCz = function () {
				var t = this;
				this.ppM(), this.WfN.addEventListener("click", function () {
					t.sXp(!1)
				})
			}, u.prototype.ppM = function () {
				var t = this.uRJ();
				this.MAH = e.zcR(this.iOY() + "title", t), this.Vrp = e.zcR(this.iOY() + "title_progress_bar_wrap", this.MAH), this.lpL = e.zcR(this.iOY() + "title_progress_bar", this.Vrp);
				var n = e.zcR(this.iOY() + "title_wrap", this.MAH);
				this.bfU = e.zcR(this.iOY() + "title_text", n), this.WfN = e.zcR(this.iOY() + "title_close", n), this.WfN.innerHTML = "&#215;", this.JGC = e.zcR(this.iOY() + "content", t), this.YhK = e.zcR(this.iOY() + "footer", t), this.PQL = e.zcR(this.iOY() + "footer_left", this.YhK), this.GfG = e.zcR(this.iOY() + "footer_right", this.YhK)
			}, u.prototype.nAE = function () {
				var t = window;
				void 0 === t.CKEDITOR.skinName && (t.CKEDITOR.skinName = t.CKEDITOR.skin.name), t.CKEDITOR.skin.loadPart("dialog");
				var n = this.uRJ();
				e.AFu(n, "cke_reset_all"), e.AFu(n, "cke_editor_editor_dialog"), e.LfB(n, this.iOY() + this.BFA()), n.innerHTML = '<div class="cke_dialog cke_ltr"><div class="cke_dialog_body"><div class="cke_dialog_title"><a class="cke_dialog_close_button" href="javascript:void(0)" style="-webkit-user-select: none;"><span class="cke_label">X</span></a></div><div class="jsplus_ui_dialog_flex_ckeditor_contents"></div></div><div class="cke_dialog_footer"><div class="cke_dialog_footer_buttons"><div class="jsplus_ui_dialog_flex_ckeditor_left_buttons"></div></div></div></div></div>', this.MAH = n.getElementsByClassName("cke_dialog_title")[0], this.Vrp = null, this.lpL = null, this.bfU = this.MAH, this.WfN = this.MAH.getElementsByClassName("cke_dialog_close_button")[0], this.JGC = n.getElementsByClassName("jsplus_ui_dialog_flex_ckeditor_contents")[0], this.YhK = n.getElementsByClassName("cke_dialog_footer")[0], this.PQL = n.getElementsByClassName("jsplus_ui_dialog_flex_ckeditor_left_buttons")[0], this.GfG = n.getElementsByClassName("cke_dialog_footer_buttons")[0]
			}, u.prototype.jPl = function (t) {
				null != this.lpL && (t && t < 1 && (t = 0), t > 100 && (t = 100), e.DEw(this.lpL, "width", t + "%"), e.GTY(this.lpL, "jsplus_hidden", 0 === t), e.GTY(this.MAH, this.iOY() + "title_with_progress", t > 0))
			}, u.prototype.OfA = function (t) {
				return this.IBn[t]
			}, u.prototype.XnQ = function () {
				return this.IBn.length
			}, u.prototype.MwX = function (t) {
				return this.qSX[t]
			}, u.prototype.MgM = function () {
				return this.qSX.length
			}, u.prototype.BFA = function () {
				return "dialog_flex"
			}, u.prototype.OLm = function () {
			}, u.prototype.Tze = function () {
			}, u.prototype.woz = function () {
			}, u.prototype.Zbq = function () {
				this.uRJ(), this.QEF = !0, this.dQd.Zbq(), this.tXv.Zbq(), this.FtN && (this.woz(), this.FtN = !1), this.Tze()
			}, u.prototype.sXp = function (t) {
				return !(!t && this.nZI && !1 === this.nZI()) && (this.kjD(), !0)
			}, u.prototype.kjD = function () {
				this.QEF = !1, this.tXv.kjD(), this.dQd.kjD(), this.OLm(), this.SAD() && this.aFA()
			}, u.prototype.aFA = function () {
				this.QEF && this.kjD(), this.dQd.aFA(), this.tXv.aFA(), this.TJV = null
			}, u
		}(r.cAE);
		t.NXE = u;
		var l = function (t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}

			return dt(e, t), e.prototype.vPM = function () {
				return null == this.tVK && (this.tVK = this.WIq()), this.tVK
			}, e.prototype.eMG = function () {
				t.prototype.eMG.call(this), this.tVK = this.WIq(), this.JGC.appendChild(this.tVK.uRJ())
			}, e
		}(u);
		t.NSX = l;
		var h = function (t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}

			return dt(e, t), e.prototype.PZi = function () {
				return c.Mhj
			}, e.prototype.IIW = function () {
				return !0
			}, e.prototype.mwi = function () {
				return d.SBO
			}, e.prototype.KtB = function () {
				return !0
			}, e.prototype.rKU = function () {
				var t = this;
				return [this.vce(this.mwi(), this.KtB(), function () {
					return t.RiI()
				}), this.EZw(this.PZi(), this.IIW(), function () {
					return t.vCs()
				})]
			}, e
		}(l);
		t.sRi = h;
		var p = function (n) {
			function i(t) {
				var e = n.call(this) || this;
				return t.type || (t.type = y.IYM), t.buttonOkTitle || (t.buttonOkTitle = c.Mhj), void 0 === t.isContentHtml && (t.isContentHtml = !1), e.qem = t, e
			}

			return dt(i, n), i.prototype.SAD = function () {
				return !0
			}, i.prototype.eMG = function () {
				n.prototype.eMG.call(this), this.CXe = e.zcR(this.iOY() + "message_icon", this.JGC), this.qem.type === y.IYM && e.AFu(this.CXe, this.iOY() + "message_icon_info"), this.qem.type === y.zkB && e.AFu(this.CXe, this.iOY() + "message_icon_warning"), this.qem.type === y.tUf && e.AFu(this.CXe, this.iOY() + "message_icon_error"), this.qem.type === y.bdO && e.AFu(this.CXe, this.iOY() + "message_icon_confirm"), this.ESZ = e.zcR(this.iOY() + "message_text", this.JGC);
				var t = this.qem.content;
				this.qem.isContentHtml || (t = e.dcD(t).replace(new RegExp("\n", "g"), "<br>")), this.ESZ.innerHTML = t
			}, i.prototype.adP = function () {
				return e = this.qem.type, t.vAL["title" + e.toString()];
				var e
			}, i.prototype.rKU = function () {
				var t = this;
				return [this.EZw(this.qem.buttonOkTitle, !0, function () {
					return !t.qem.onOk || t.qem.onOk()
				})]
			}, i.prototype.vgC = function () {
				return 0
			}, i.prototype.NTu = function () {
				return 0
			}, i.prototype.AtU = function () {
				return !0
			}, i
		}(u);
		t.EHw = p;
		var a = function (t) {
			function e(e) {
				var n = t.call(this, e) || this;
				return n.qem.buttonCancelTitle || (n.qem.buttonCancelTitle = d.SBO), n
			}

			return dt(e, t), e.prototype.rKU = function () {
				var e = this, n = t.prototype.rKU.call(this);
				return n.push(this.vce(this.qem.buttonCancelTitle, !0, function () {
					return !e.qem.onCancel || e.qem.onCancel()
				})), n
			}, e
		}(p);
		t.mXI = a;
		var c, f, d, v, y, _, g = function (t) {
			function e(e) {
				var n = this;
				return e.buttonOkTitle || (e.buttonOkTitle = c.GsQ), (n = t.call(this, e) || this).qem.buttonNoTitle || (n.qem.buttonNoTitle = d.zCw), n
			}

			return dt(e, t), e.prototype.rKU = function () {
				var e = this, n = t.prototype.rKU.call(this);
				return n.splice(1, 0, this.vce(this.qem.buttonNoTitle, !0, function () {
					return !e.qem.onNo || e.qem.onNo()
				})), n
			}, e
		}(p);
		return t.HGC = g, (f = c = t.uFf || (t.uFf = {}))[f.Mhj = 0] = "Mhj", f[f.GsQ = 1] = "GsQ", f[f.aQu = 2] = "aQu", f[f.Tql = 3] = "Tql", (v = d = t.yga || (t.yga = {}))[v.SBO = 0] = "SBO", v[v.zCw = 1] = "zCw", v[v.crd = 2] = "crd", v[v.crC = 3] = "crC", (_ = y = t.kuN || (t.kuN = {}))[_.IYM = 0] = "IYM", _[_.zkB = 1] = "zkB", _[_.tUf = 2] = "tUf", _[_.bdO = 3] = "bdO", t.vAL = {
			ok0: "OK",
			ok1: "Yes",
			ok2: "Confirm",
			ok3: "Accept",
			cancel0: "Cancel",
			cancel1: "No",
			cancel2: "Decline",
			cancel3: "Abort",
			title0: "Information",
			title1: "Warning",
			title2: "Error",
			title3: "Confirmation"
		}, t
	}(y, n, c, d, v, a);
	var mt;
	dt = this && this.__extends || (mt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		mt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	_ = function (t, e, n) {
		var i, o;
		Object.defineProperty(t, "__esModule", {value: !0}), (o = i = t.rSZ || (t.rSZ = {}))[o.ULu = 0] = "ULu", o[o.iSN = 1] = "iSN", o[o.Idp = 2] = "Idp";
		var r = function (t) {
			function n(e, n) {
				var i = t.call(this) || this;
				return i.zCl = e, i.TGm = n, i
			}

			return dt(n, t), n.prototype.RPd = function (t) {
				return t === i.ULu ? "none" : t === i.iSN ? "auto" : "always"
			}, n.prototype.eMG = function () {
				this.cnC(this.zCl, this.TGm)
			}, n.prototype.cnC = function (t, n) {
				this.zCl = t, this.TGm = n, e.GTY(this.uRJ(), this.iOY() + "vert_" + this.RPd(i.ULu), t === i.ULu), e.GTY(this.uRJ(), this.iOY() + "vert_" + this.RPd(i.iSN), t === i.iSN), e.GTY(this.uRJ(), this.iOY() + "vert_" + this.RPd(i.Idp), t === i.Idp), e.GTY(this.uRJ(), this.iOY() + "hor_" + this.RPd(i.ULu), n === i.ULu), e.GTY(this.uRJ(), this.iOY() + "hor_" + this.RPd(i.iSN), n === i.iSN), e.GTY(this.uRJ(), this.iOY() + "hor_" + this.RPd(i.Idp), n === i.Idp)
			}, n.prototype.BFA = function () {
				return "scroll_pane"
			}, n
		}(n.cAE);
		return t.KAf = r, t
	}(_, n, a);
	var wt;
	dt = this && this.__extends || (wt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		wt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	g = function (t, e, n, i, o) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var r = function (t) {
			function i(e, n) {
				var i = t.call(this) || this;
				return i.kNA = e, i.XHV = n, i.XsG = null, i.Hxq = {}, i
			}

			return dt(i, t), i.prototype.IMt = function () {
				if (null == this.XsG) return null;
				for (var t = [], e = 0, n = this.XsG.split("-"); e < n.length; e++) {
					var i = n[e];
					t.push(+i)
				}
				return 0 === t[0] && (t = []), t
			}, i.prototype.hbx = function (t) {
				for (var i = e.QrW(), r = this, s = function (t) {
					var s, l;
					u.Hxq[t] = new o.knY({
						kqS: n.bqf() + "img/col-" + t + ".png",
						gzA: !1,
						ihp: !1,
						LdN: (s = r, l = t, function () {
							s.XsG = l;
							for (var t in s.Hxq) e.GTY(s.Hxq[t].uRJ(), "jsplus_selected", t === l);
							s.XHV()
						})
					}), i.appendChild(u.Hxq[t].uRJ())
				}, u = this, l = 0, h = t; l < h.length; l++) {
					s(h[l])
				}
				return i
			}, i.prototype.eMG = function () {
				var t = this.uRJ();
				t.appendChild(this.hbx(["12", "6-6", "4-4-4", "3-3-3-3", "0"])), t.appendChild(this.hbx(["9-3", "6-3-3", "3-6-3", "3-3-6", "3-9"])), t.appendChild(this.hbx(["8-4", "7-5", "5-7", "4-8"]))
			}, i.prototype.BFA = function () {
				return "panel_new_bootstrap_row"
			}, i
		}(i.cAE);
		return t.Swk = r, t
	}(g, n, s, a, c);
	var bt;
	dt = this && this.__extends || (bt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		bt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	m = function (t, e, n, i) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var o = function (o) {
			function r(t, e) {
				var n = o.call(this) || this;
				return n.kNA = t, n.Vrz = e, n
			}

			return dt(r, o), r.prototype.WIq = function () {
				var t = this, e = new n.KAf(n.rSZ.ULu, n.rSZ.ULu);
				return this.dhi = new i.Swk(this.kNA, function () {
					var e = t.dhi.IMt();
					t.ZiP().fZt(null != e)
				}), e.uRJ().appendChild(this.dhi.uRJ()), e
			}, r.prototype.AtU = function () {
				return !0
			}, r.prototype.adP = function () {
				return t.vAL.title
			}, r.prototype.rKU = function () {
				var t = this;
				return [this.vce(e.yga.SBO, !0, function () {
					return !0
				}), this.EZw(e.uFf.Mhj, !1, function () {
					return t.Vrz(t.dhi.IMt()), !0
				})]
			}, r.prototype.SAD = function () {
			}, r
		}(e.NSX);
		return t.xaa = o, t.vAL = {title: "Add new row"}, t
	}(m, y, _, g);
	var Et;
	dt = this && this.__extends || (Et = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Et(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	w = function (t, e, n) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var i = function () {
			function t(t) {
				this.JeX = !1, this.HeO = t
			}

			return t.prototype.evU = function (t, e) {
				var n = this;
				this.vPb = t, this.TJV = e, e.className = "jsplus_ui_items_item", this.MBq(), this.TJV.addEventListener("click", function (t) {
					n.vPb.brF(n)
				})
			}, t.prototype.brF = function (t) {
				this.JeX = t, t ? e.AFu(this.TJV, "jsplus_ui_items_item_selected") : e.LfB(this.TJV, "jsplus_ui_items_item_selected")
			}, t.prototype.uRJ = function () {
				return this.TJV
			}, t.prototype.tqy = function () {
				return this.JeX
			}, t.prototype.FKy = function () {
				return this.HeO
			}, t
		}();
		t.CIc = i;
		var o = function (t) {
			function n(e, n, i, o, r) {
				void 0 === r && (r = [0, 0, 0, 0]);
				var s = t.call(this, e) || this;
				return s.CJD = n, s.UMk = i, s.apa = o, s.Ais = r, s
			}

			return dt(n, t), n.prototype.MBq = function () {
				e.AFu(this.TJV, "jsplus_ui_items_item_with_width_and_height"), e.AFu(this.TJV, "jsplus_theme_noselect"), e.DEw(this.TJV, "width", this.CJD + "px"), e.DEw(this.TJV, "height", this.UMk + "px"), e.DEw(this.TJV, "padding-top", this.apa + "px");
				for (var t = [], n = 0, i = this.Ais; n < i.length; n++) {
					var o = i[n];
					t.push(o + "px")
				}
				e.DEw(this.TJV, "margin", t.join(" "))
			}, n
		}(i);
		t.Ekx = o;
		var r = function (t) {
			function n(e, n, i, o, r, s, u) {
				void 0 === s && (s = null), void 0 === u && (u = [0, 0, 0, 0]);
				var l = t.call(this, e, n, i, o, u) || this;
				return l.kqS = r, l.yBE = s, l
			}

			return dt(n, t), n.prototype.MBq = function () {
				t.prototype.MBq.call(this), e.AFu(this.TJV, "jsplus_ui_items_item_image_with_title");
				var n = document.createElement("img");
				if (n.src = this.kqS, null != this.yBE && (n.alt = this.yBE), this.TJV.appendChild(n), null != this.yBE) {
					var i = document.createElement("div");
					i.textContent = this.yBE, this.TJV.appendChild(i)
				}
			}, n
		}(o);
		t.nXK = r;
		var s = function (t) {
			function e() {
				return t.call(this, null) || this
			}

			return dt(e, t), e.prototype.brF = function (t) {
			}, e.prototype.tqy = function () {
				return !1
			}, e
		}(i);
		t.ZIr = s;
		var u = function (t) {
			function n() {
				return null !== t && t.apply(this, arguments) || this
			}

			return dt(n, t), n.prototype.MBq = function () {
				e.AFu(this.TJV, "jsplus_ui_items_item_br")
			}, n
		}(s);
		t.wDu = u;
		var l = function (t) {
			function n(e, n) {
				void 0 === n && (n = "");
				var i = t.call(this) || this;
				return i.yBE = e, i.TKR = n, i
			}

			return dt(n, t), n.prototype.MBq = function () {
				e.AFu(this.TJV, "jsplus_ui_items_item_header"), this.TJV.setAttribute("style", this.TKR), this.TJV.textContent = this.yBE
			}, n
		}(s);
		t.her = l;
		var h = function () {
			function t(t, e) {
				void 0 === t && (t = []), void 0 === e && (e = null), this.rYJ = null, n.ZoU(), this.TJV = document.createElement("div"), this.TJV.className = "jsplus_ui_items", this.Cow(t), this.xvn(e)
			}

			return t.prototype.uRJ = function () {
				return this.TJV
			}, t.prototype.xvn = function (t) {
				this.WbR = t
			}, t.prototype.Cow = function (t) {
				void 0 === t && (t = []), this.rYJ = null, this.vPb = [], this.TJV.innerHTML = "";
				for (var e = 0, n = t; e < n.length; e++) {
					var i = n[e];
					this.apV(i)
				}
			}, t.prototype.apV = function (t, e) {
				void 0 === e && (e = null);
				var n = document.createElement("div");
				if (null == e) this.TJV.appendChild(n), this.vPb.push(t); else {
					if (!(e >= 0 && e < this.vPb.length)) throw"Incorrect item index";
					var i = this.vPb[e].uRJ();
					i.parentNode.insertBefore(n, i), this.vPb.splice(e, 0, t)
				}
				t.evU(this, n)
			}, t.prototype.brF = function (t) {
				for (var e = 0, n = this.vPb; e < n.length; e++) {
					var i = n[e];
					i.brF(i === t)
				}
				null != this.WbR && this.WbR()
			}, t.prototype.tPD = function (t) {
				for (var e = 0, n = this.vPb; e < n.length; e++) {
					var i = n[e];
					i.brF(i.FKy() === t)
				}
				null != this.WbR && this.WbR()
			}, t.prototype.Jxk = function () {
				return this.vPb.length
			}, t.prototype.ghE = function (t) {
				return this.vPb[t]
			}, t.prototype.JvR = function () {
				for (var t = 0, e = this.vPb; t < e.length; t++) {
					var n = e[t];
					if (n.tqy()) return n
				}
				return null
			}, t.prototype.Epm = function () {
				var t = this.JvR();
				return null == t ? null : t.FKy()
			}, t.prototype.FMv = function (t) {
				null == t ? e.asd(this.TJV, "width") : e.DEw(this.TJV, "width", t + "px")
			}, t
		}();
		return t.MYC = h, t.wwr = !0, t
	}(w, n, p);
	var Tt;
	dt = this && this.__extends || (Tt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Tt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	b = function (t, e, n, i, o, r) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var s = function (t) {
			function e(e) {
				return t.call(this, e.VcO(), 115, 115, 5, e.SWM(), e.SAY(), [5, 5, 5, 5]) || this
			}

			return dt(e, t), e
		}(i.nXK);
		t.RwL = s;
		var u = function (o) {
			function u(t, e) {
				var n = o.call(this) || this;
				return n.Vrz = t, n.ucB = e, n
			}

			return dt(u, o), u.prototype.WIq = function () {
				var t = this;
				this.FMv(500), this.bBR(150), this.XjW = new i.MYC;
				for (var o = [], u = 0, l = n.ghZ.Hew; u < l.length; u++) {
					var h = l[u];
					o.push(new s(h))
				}
				this.XjW.Cow(o), this.XjW.tPD(this.ucB), e.AFu(this.XjW.uRJ(), "jsplus_ui_bootstrap_editor_dlg_col_type_items");
				var p = new r.KAf(r.rSZ.ULu, r.rSZ.ULu);
				return e.DEw(p.uRJ(), "width", "100%"), p.uRJ().appendChild(this.XjW.uRJ()), this.XjW.xvn(function () {
					t.ZiP().fZt(t.XjW.Epm() !== t.ucB)
				}), p
			}, u.prototype.AtU = function () {
				return !0
			}, u.prototype.adP = function () {
				return t.vAL.title
			}, u.prototype.rKU = function () {
				var t = this;
				return this.ImB(!1, function () {
					return t.dQq(), !0
				})
			}, u.prototype.SAD = function () {
				return !0
			}, u.prototype.dQq = function () {
				return this.Vrz(this.XjW.Epm()), !0
			}, u
		}(o.NSX);
		return t.ZwN = u, t.vAL = {title: "Change type of the column"}, t
	}(b, n, X, w, y, _), E = function (t, e, n) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var i = function () {
			function t(t) {
				void 0 === t && (t = !1), this.IBn = [], this.ILd = !1, this.CJD = null, this.UMk = null, n.ZoU(), this.ILd = t
			}

			return t.prototype.Qeb = function () {
				null == this.TJV && (this.TJV = document.createElement("div")), this.TJV.className = "jsplus_ui_toolbar", this.TJV.innerHTML = "";
				var t = this.FHc(null, null, null, this.ILd);
				this.ILd ? (e.LfB(this.TJV, "jsplus_ui_toolbar_horizontal"), e.AFu(this.TJV, "jsplus_ui_toolbar_vertical"), this.CJD = t.ipa()[1] + t.FnL() + t.ipa()[3], this.UMk = null, this.TJV.style.width = this.CJD + "px", this.TJV.style.height = null) : (e.LfB(this.TJV, "jsplus_ui_toolbar_vertical"), e.AFu(this.TJV, "jsplus_ui_toolbar_horizontal"), this.CJD = null, this.UMk = t.ipa()[0] + t.FcM() + t.ipa()[2], this.TJV.style.width = null, this.TJV.style.height = this.UMk + "px"), this.MBq()
			}, t.prototype.jwv = function (t, e, n, i, o) {
				void 0 === n && (n = null), void 0 === i && (i = null), void 0 === o && (o = !1);
				var r = this.FHc(e, n, i, this.ILd);
				return r.qnJ(t), this.xNy(r, o), r
			}, t.prototype.xNy = function (t, e) {
				return void 0 === e && (e = !1), e ? (this.IBn.splice(0, 0, t), this.TJV.insertBefore(t.uRJ(), this.TJV.firstChild)) : (this.IBn.push(t), this.TJV.appendChild(t.uRJ())), t
			}, t.prototype.DKL = function () {
				for (; this.TJV.children.length > 0 && e.cVp(this.TJV.children[0], "jsplus_ui_toolbar_delimiter");) this.TJV.removeChild(this.TJV.children[0]);
				for (; this.TJV.children.length > 0 && e.cVp(this.TJV.children[this.TJV.children.length - 1], "jsplus_ui_toolbar_delimiter");) this.TJV.removeChild(this.TJV.children[this.TJV.children.length - 1])
			}, t.prototype.Oxs = function (t) {
				void 0 === t && (t = !1);
				var e = document.createElement("div");
				e.className = "jsplus_ui_toolbar_delimiter", this.ILd ? e.style.width = this.CJD + "px" : e.style.height = this.UMk + "px", t ? this.TJV.insertBefore(e, this.TJV.firstChild) : this.TJV.appendChild(e)
			}, t.prototype.zPC = function (t) {
				var e = this.OfA(t);
				if (null != e) {
					this.IBn.splice(this.IBn.indexOf(e), 1);
					var n = e.uRJ();
					null != n && n.parentNode === this.TJV && this.TJV.removeChild(n)
				}
			}, t.prototype.OfA = function (t) {
				for (var e = null, n = 0, i = this.IBn; n < i.length; n++) {
					var o = i[n];
					o.VcO() === t && (e = o)
				}
				return e
			}, t.prototype.uRJ = function () {
				return null == this.TJV && this.Qeb(), this.TJV
			}, t.prototype.dwP = function (t) {
				this.ILd !== t && (this.ILd = t, this.Qeb())
			}, t.prototype.QbJ = function () {
				return this.IBn
			}, t
		}();
		return t.wsh = i, t.wwr = !0, t
	}(E, n, p);
	var jt;
	dt = this && this.__extends || (jt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		jt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	T = function (t, e, n) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var i = function () {
			function t(t, e) {
				void 0 === e && (e = null), this.uKc = "", this.NYr = !0, this.YUr = !0, this.LdN = null, this.eaF = null, this.wlQ = null, n.ZoU(), null == e && (e = function (t) {
				}), this.LdN = e, this.AEx = t
			}

			return t.prototype.uRJ = function () {
				return this.kIU(), this.TJV
			}, t.prototype.kIU = function () {
				null == this.TJV && (this.TJV = document.createElement("div"), this.TJV.className = "jsplus_ui_button", this.MBq(), this.dwT(this.LdN))
			}, t.prototype.QEF = function () {
				return this.YUr
			}, t.prototype.Fpn = function (t) {
				this.YUr = t, null == this.TJV && this.kIU(), e.GTY(this.TJV, "jsplus_hidden", !t)
			}, t.prototype.NJr = function () {
				return this.NYr
			}, t.prototype.fZt = function (t) {
				this.NYr = t, null == this.TJV && this.kIU(), e.GTY(this.TJV, "jsplus_disabled", !t)
			}, t.prototype.qnJ = function (t) {
				this.eaF = t
			}, t.prototype.VcO = function () {
				return this.eaF
			}, t.prototype.eiP = function () {
				return this.uKc
			}, t.prototype.ONU = function (t) {
				this.uKc = t, null == this.TJV ? this.kIU() : e.aMO(this.TJV, "title", this.uKc)
			}, t.prototype.ymi = function () {
				return this.AEx
			}, t.prototype.HeQ = function (t) {
				this.AEx = t, null == this.TJV ? this.kIU() : this.TJV.textContent = t
			}, t.prototype.dwT = function (t) {
				var e = this;
				this.LdN = t || function () {
					return !0
				}, null != this.wlQ && this.TJV.removeEventListener("click", this.wlQ), this.wlQ = function () {
					e.NJr() && e.LdN(e)
				}, this.TJV.addEventListener("click", this.wlQ)
			}, t.prototype.MBq = function () {
				e.AFu(this.TJV, "jsplus_ui_button_text"), this.TJV.textContent = this.AEx
			}, t.prototype.XSF = function () {
				this.wlQ()
			}, t
		}();
		t.EOx = i;
		var o = function (t) {
			function i(e, i, o, r, s) {
				void 0 === e && (e = ""), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === r && (r = !0), void 0 === s && (s = !1);
				var u = t.call(this, e, o) || this;
				return u.ESZ = null, n.ZoU(), u.kqS = i, u.NYr = r, u.ILd = s, u
			}

			return dt(i, t), i.prototype.MBq = function () {
				e.AFu(this.TJV, "jsplus_ui_button_icon_color_" + this.yMi()), this.ILd ? this.usa() : this.yIN()
			}, i.prototype.usa = function () {
				var t = null != this.kqS && "" !== this.kqS, n = this.UkN() && null != this.AEx && "" !== this.AEx;
				if (t || n) {
					var i = this.ipa(), o = null, r = this.FnL();
					t && !n ? o = this.FcM() : !t && n ? o = this.Dnb() : t && n && (o = this.FcM() + this.acu() + this.Dnb()), this.TJV.innerHTML = "", this.TJV.removeAttribute("style"), null != r && (this.TJV.style.width = r + "px"), null != o && (this.TJV.style.height = o + "px"), e.aMO(this.TJV, "title", this.uKc), this.TJV.style.display = "block";
					for (var s = [], u = 0, l = i; u < l.length; u++) {
						var h = l[u];
						s.push(h + "px")
					}
					if (this.TJV.style.padding = s.join(" "), t && (this.SbX = document.createElement("div"), this.SbX.className = "jsplus_ui_button_image", this.SbX.style.backgroundImage = "url('" + encodeURI(this.kqS) + "')", this.SbX.style.width = this.FnL() + "px", this.SbX.style.height = this.FcM() + "px", this.SbX.style.display = "block", this.TJV.appendChild(this.SbX)), n) {
						var p = document.createElement("div");
						p.style.display = "block", e.DEw(p, "height", this.Dnb() + "px"), t && (p.style.marginTop = this.acu() + "px");
						var a = document.createElement("div");
						a.style.display = "table", a.style.width = "100%", a.style.height = this.Dnb() + "px", this.ESZ = document.createElement("div"), this.ESZ.style.display = "table-cell", this.ESZ.className = "jsplus_ui_button_text", this.ESZ.textContent = this.AEx, this.ESZ.style.textAlign = this.PLw(), this.ESZ.style.verticalAlign = this.AZa(), this.TJV.appendChild(p), p.appendChild(a), a.appendChild(this.ESZ)
					}
				}
			}, i.prototype.HeQ = function (t) {
				this.AEx = t, null == this.ESZ ? this.kIU() : this.ESZ.textContent = t
			}, i.prototype.yIN = function () {
				var t = null != this.kqS && "" !== this.kqS, n = this.UkN() && null != this.AEx && "" !== this.AEx;
				if (t || n) {
					var i = this.ipa(), o = this.FcM(), r = null;
					t && !n ? r = this.FnL() : !t && n ? null != this.Dnb() && (r = this.Dnb()) : t && n && null != this.Dnb() && (r = this.FnL() + this.acu() + this.Dnb()), this.TJV.innerHTML = "", this.TJV.removeAttribute("style"), null != r && (this.TJV.style.width = r + "px"), null != o && (this.TJV.style.height = o + "px"), e.aMO(this.TJV, "title", this.uKc);
					for (var s = [], u = 0, l = i; u < l.length; u++) {
						var h = l[u];
						s.push(h + "px")
					}
					if (this.TJV.style.padding = s.join(" "), t && (this.SbX = document.createElement("div"), this.SbX.className = "jsplus_ui_button_image", this.SbX.style.backgroundImage = "url('" + encodeURI(this.kqS) + "')", this.SbX.style.width = this.FnL() + "px", this.SbX.style.height = this.FcM() + "px", this.TJV.appendChild(this.SbX)), n) {
						var p = document.createElement("div");
						e.DEw(p, "width", null == this.Dnb() ? null : this.Dnb() + "px"), e.DEw(p, "height", this.FcM() + "px"), t && (p.style.marginLeft = this.acu() + "px");
						var a = document.createElement("div");
						a.style.display = "table", e.DEw(a, "width", null == this.Dnb() ? null : this.Dnb() + "px"), e.DEw(a, "height", this.FcM() + "px"), this.ESZ = document.createElement("div"), this.ESZ.style.display = "table-cell", this.ESZ.className = "jsplus_ui_button_text", this.ESZ.textContent = this.AEx, this.ESZ.style.textAlign = this.PLw(), this.ESZ.style.verticalAlign = this.AZa(), this.TJV.appendChild(p), p.appendChild(a), a.appendChild(this.ESZ)
					}
				}
			}, i.prototype.jWb = function () {
				return this.kIU(), this.SbX
			}, i.prototype.VpP = function () {
				return this.kIU(), this.ESZ
			}, i.prototype.viO = function () {
				return this.kqS
			}, i.prototype.LhE = function (t) {
				this.kqS = t, null == this.SbX ? this.kIU() : this.SbX.style.backgroundImage = "url('" + encodeURI(this.kqS) + "')"
			}, i
		}(i);
		t.NHA = o;
		var r = function (t) {
			function e(e, n, i, o, r) {
				void 0 === r && (r = null);
				var s = t.call(this, e, n, r, !0, !1) || this;
				return s.Qxk = i, s.RjN = o, s
			}

			return dt(e, t), e.prototype.ipa = function () {
				return [5, 5, 5, 5]
			}, e.prototype.FnL = function () {
				return this.Qxk
			}, e.prototype.FcM = function () {
				return this.RjN
			}, e.prototype.Dnb = function () {
				return null
			}, e.prototype.acu = function () {
				return 7
			}, e.prototype.PLw = function () {
				return "left"
			}, e.prototype.AZa = function () {
				return "middle"
			}, e.prototype.yMi = function () {
				return "black"
			}, e.prototype.UkN = function () {
				return !0
			}, e
		}(o);
		return t.yct = r, t
	}(T, n, p), j = function (t, e, n) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var i = function () {
			function t(n, i) {
				void 0 === n && (n = t.MYq), void 0 === i && (i = t.wBj), this.RIJ = null, e.ZoU(), this.TJV = document.createElement("div"), this.TJV.className = "jsplus_theme jsplus_ui_float_panel", this.JGC = document.createElement("div"), this.JGC.className = "jsplus_ui_float_panel_content", this.TJV.appendChild(this.JGC), this.jzC(n, i, !0)
			}

			return t.prototype.jzC = function (e, n, i) {
				void 0 === i && (i = !1), this.won === e && this.cQQ === n || (null != e && (this.won = e), null != n && (this.cQQ = n), -1 === [t.sbk, t.MYq, t.jGR].indexOf(this.won) && (this.won = t.MYq), -1 === [t.wBj, t.klX, t.sCf, t.EgZ].indexOf(this.cQQ) && (this.cQQ = t.wBj), (i || null != e || null != n) && this.hoc(!0))
			}, t.prototype.mAN = function (t) {
				this.jzC(t, null)
			}, t.prototype.thY = function (t) {
				this.jzC(null, t)
			}, t.prototype.rKY = function () {
				this.RIJ = null, this.TJV.style.visibility = "hidden"
			}, t.prototype.aFA = function () {
				null != this.TJV && null != this.TJV.parentNode && this.TJV.parentNode.removeChild(this.TJV)
			}, t.prototype.ICj = function () {
				for (var t = -1, e = this.RIJ; null != e;) {
					var i = n.aeE(e, "z-index");
					if (null != i) {
						t = +i;
						break
					}
					e = e.parentElement
				}
				return t
			}, t.prototype.evU = function (t, e, i) {
				var o = this;
				void 0 === e && (e = null), void 0 === i && (i = null), this.RIJ = t, null == this.RIJ && null != this.TJV.parentNode && this.TJV.parentNode.removeChild(this.TJV), null != this.RIJ && n.aBl().appendChild(this.TJV);
				var r = this.ICj();
				n.DEw(this.TJV, "z-index", r > -1 ? r.toString() : null), this.jzC(e, i, !0), this.hoc(!1), window.setTimeout(function () {
					o.hoc(!1)
				}, 1), window.setTimeout(function () {
					o.hoc(!1)
				}, 50), window.setTimeout(function () {
					o.hoc(!1)
				}, 100), window.setTimeout(function () {
					o.hoc(!1)
				}, 200), window.setTimeout(function () {
					o.hoc(!1)
				}, 500), window.setTimeout(function () {
					o.hoc(!1)
				}, 1e3), window.setTimeout(function () {
					o.hoc(!1)
				}, 2e3), window.setTimeout(function () {
					o.hoc(!1)
				}, 5e3), window.setTimeout(function () {
					o.hoc(!1)
				}, 1e4)
			}, t.prototype.hoc = function (e) {
				if (void 0 === e && (e = !1), null != this.RIJ) {
					e && (this.TJV.style.visibility = "hidden");
					var i, o = [], r = this.Ugy(this.RIJ), s = r.Kdu, u = r.jjt, l = s + this.RIJ.clientWidth,
						h = u + this.RIJ.clientHeight, p = this.TJV.clientWidth, a = this.TJV.clientHeight;
					this.won === t.MYq ? this.cQQ === t.wBj ? (o = ["bottom"], i = [u - a, s]) : this.cQQ === t.klX ? (i = [u - a, l - p], o = ["bottom"]) : this.cQQ === t.sCf ? (i = [h, s], o = ["top"]) : this.cQQ === t.EgZ && (i = [h, l - p], o = ["top"]) : this.won === t.jGR ? this.cQQ === t.wBj ? (i = [u, s - p], o = ["right"]) : this.cQQ === t.klX ? (i = [u, l], o = ["left"]) : this.cQQ === t.sCf ? (i = [h - a, s - p], o = ["right"]) : this.cQQ === t.EgZ && (i = [h - a, l], o = ["left"]) : this.won === t.sbk && (this.cQQ === t.wBj ? (i = [u, s], o = ["top", "left"]) : this.cQQ === t.klX ? (i = [u, l - p], o = ["top", "right"]) : this.cQQ === t.sCf ? (i = [h - a, s], o = ["bottom", "left"]) : this.cQQ === t.EgZ && (i = [h - a, l - p], o = ["bottom", "right"]));
					for (var c = 0, f = o; c < f.length; c++) {
						var d = f[c];
						n.AFu(this.TJV, "jsplus_ui_float_panel_sticks_by_side_" + d)
					}
					if (!e) {
						var v = n.rms(this.TJV, "top");
						i[0] - v == 1 && (i[0] = v)
					}
					n.DEw(this.TJV, "position", "absolute"), n.DEw(this.TJV, "display", "inline-block"), n.DEw(this.TJV, "top", i[0] + "px"), n.DEw(this.TJV, "left", i[1] + "px"), this.TJV.style.visibility = null
				}
			}, t.prototype.Ugy = function (t) {
				var e = t.getBoundingClientRect(), n = document.body, i = document.documentElement,
					o = window.pageYOffset || i.scrollTop || n.scrollTop,
					r = window.pageXOffset || i.scrollLeft || n.scrollLeft, s = i.clientTop || n.clientTop || 0,
					u = i.clientLeft || n.clientLeft || 0, l = e.top + o - s, h = e.left + r - u;
				return {jjt: Math.round(l), Kdu: Math.round(h)}
			}, t.prototype.uRJ = function () {
				return this.TJV
			}, t.prototype.lUi = function () {
				return this.JGC
			}, t.prototype.oXx = function () {
				return this.RIJ
			}, t.prototype.Lww = function () {
				return this.won
			}, t.prototype.StG = function () {
				return this.cQQ
			}, t.MYq = 0, t.jGR = 1, t.sbk = 2, t.wBj = 0, t.klX = 1, t.sCf = 2, t.EgZ = 3, t
		}();
		return t.saF = i, t.wwr = !0, t
	}(j, p, n);
	var xt;
	dt = this && this.__extends || (xt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		xt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	x = function (t, e, n, i, o, r, s) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var u = function (t) {
			function e(e, n, i, o, r) {
				void 0 === n && (n = ""), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === r && (r = !0);
				var s = t.call(this, n, i, o, r) || this;
				return s.BvR = !1, s.aoI = e, s
			}

			return dt(e, t), e.prototype.dzX = function () {
				return this.aoI
			}, e.prototype.FeV = function (t) {
				this.BvR = t
			}, e.prototype.DKj = function () {
				return this.BvR
			}, e.prototype.FnL = function () {
				return 16
			}, e.prototype.FcM = function () {
				return 18
			}, e.prototype.ipa = function () {
				return [4, 6, 4, 6]
			}, e.prototype.ErD = function () {
				return 0
			}, e.prototype.PLw = function () {
				return "left"
			}, e.prototype.AZa = function () {
				return "middle"
			}, e.prototype.yMi = function () {
				return "color"
			}, e.prototype.acu = function () {
				return 7
			}, e.prototype.Dnb = function () {
				return 100
			}, e.prototype.UkN = function () {
				return !1
			}, e
		}(o.NHA);
		t.GAr = u;
		var l = function (t) {
			function e(e, n) {
				var i = t.call(this, n) || this;
				return i.aoI = e, i
			}

			return dt(e, t), e.prototype.FHc = function (t, e, n) {
				var i = new u(this.aoI, null, e, n);
				return i.ONU(t), i
			}, e.prototype.dzX = function () {
				return this.aoI
			}, e
		}(i.wsh);
		t.ddU = l;
		var h = function (n) {
			function i() {
				return null !== n && n.apply(this, arguments) || this
			}

			return dt(i, n), i.prototype.Pmg = function (t) {
				this.gzG = t
			}, i.prototype.KTD = function () {
				return this.gzG
			}, i.prototype.MBq = function () {
				var n = this, i = this.jwv("col_conf", null, s.Tze + "icons/conf.png", function (t) {
					n.dzX().oBx(n.KTD())
				});
				i.ONU(t.vAL.colConfHint), (i = this.jwv("col_plugin", null, s.Tze + "icons/pallete.png", function (t) {
					n.dzX().HAG(n.KTD())
				})).ONU(t.vAL.colChangeTypeHint), this.Oxs(), (i = this.jwv("col_move_left", null, s.Tze + "icons/left.png", function (t) {
					n.dzX().UGW(n.KTD())
				})).ONU(t.vAL.colMoveLeftHint), (i = this.jwv("col_move_right", null, s.Tze + "icons/right.png", function (t) {
					n.dzX().VlS(n.KTD())
				})).ONU(t.vAL.colMoveRightHint), this.Oxs(), (i = this.jwv("col_add", null, s.Tze + "icons/add.png", function (t) {
					n.dzX().Coe(n.KTD())
				})).ONU(t.vAL.colAddHint), this.Oxs(), (i = this.jwv("col_delete", null, s.Tze + "icons/delete.png", function (t) {
					n.dzX().SIb(n.KTD())
				})).ONU(t.vAL.colDeleteHint), e.AFu(i.uRJ(), "jsplus_bootstrap_button_red")
			}, i
		}(l);
		t.rST = h;
		var p = function (t) {
			function i(n) {
				var i = t.call(this, r.saF.MYq, r.saF.wBj) || this;
				return i.aoI = n, i.ekF = new h(n, !1), i.lUi().appendChild(i.ekF.uRJ()), e.AFu(i.uRJ(), s.CDB + "panel"), e.AFu(i.uRJ(), "jsplus_ui_float_panel_sticks_by_side_left"), e.AFu(i.uRJ(), "jsplus_ui_float_panel_sticks_by_side_right"), e.AFu(i.uRJ(), "jsplus_ui_float_panel_sticks_by_side_top"), e.AFu(i.uRJ(), "jsplus_ui_float_panel_sticks_by_side_bottom"), i
			}

			return dt(i, t), i.prototype.ICj = function () {
				return this.aoI.YnG().puU()
			}, i.prototype.Ugy = function (e) {
				var n = t.prototype.Ugy.call(this, e);
				return n.Kdu -= 1, n.jjt -= 2, n
			}, i.prototype.rKY = function () {
				this.ekF.Pmg(null), t.prototype.rKY.call(this)
			}, i.prototype.evU = function (e, i, o) {
				void 0 === i && (i = null), void 0 === o && (o = null);
				for (var r = this.ekF.QbJ(), s = r.length - 1; s >= 0; s--) r[s].DKj() && this.ekF.zPC(r[s].VcO());
				this.ekF.DKL();
				var u = this.ekF.dzX().Xii(e);
				(r = u.QbJ()).length > 0 && this.ekF.Oxs(!0);
				for (s = r.length - 1; s >= 0; s--) null != r[s] ? (r[s].fZt(!0), this.ekF.xNy(r[s], !0)) : this.ekF.Oxs(!0);
				u.aKh(), this.ekF.OfA("col_move_left").fZt(!n.jtV(e, this.ekF.dzX().EXg())), this.ekF.OfA("col_move_right").fZt(!n.nen(e, this.ekF.dzX().EXg())), this.ekF.Pmg(e), t.prototype.evU.call(this, e, i, o)
			}, i
		}(r.saF);
		t.tlI = p;
		var a = function (n) {
			function i() {
				return null !== n && n.apply(this, arguments) || this
			}

			return dt(i, n), i.prototype.ajt = function (t) {
				this.Pxm = t
			}, i.prototype.YRd = function () {
				return this.Pxm
			}, i.prototype.MBq = function () {
				var n = this, i = this.jwv("row_delete", null, s.Tze + "icons/delete.png", function (t) {
					n.dzX().PLD(n.YRd())
				});
				i.ONU(t.vAL.rowDeleteHint), e.AFu(i.uRJ(), "jsplus_bootstrap_button_last"), e.AFu(i.uRJ(), "jsplus_bootstrap_button_red"), this.Oxs(), (i = this.sVG = this.jwv("row_move_up", null, s.Tze + "icons/up.png", function (t) {
					n.dzX().hic(n.YRd())
				})).ONU(t.vAL.rowMoveUpHint), this.xvq = this.jwv("row_move_down", null, s.Tze + "icons/down.png", function (t) {
					n.dzX().Nia(n.YRd())
				}), this.xvq.ONU(t.vAL.rowMoveDownHint), e.AFu(this.xvq.uRJ(), "jsplus_bootstrap_button_last"), this.Oxs(), i = this.jwv("row_conf", null, s.Tze + "icons/conf.png", function (t) {
					n.dzX().PcS(n.YRd())
				}), e.AFu(i.uRJ(), "jsplus_bootstrap_button_last"), i.ONU(t.vAL.rowConfHint)
			}, i.prototype.fZt = function (t, e) {
				this.sVG.fZt(t), this.xvq.fZt(e)
			}, i
		}(l);
		t.akk = a;
		var c = function (t) {
			function i(n) {
				var i = t.call(this, r.saF.jGR, r.saF.klX) || this;
				return i.ekF = new a(n, !0), i.lUi().appendChild(i.ekF.uRJ()), e.AFu(i.uRJ(), s.CDB + "panel"), e.AFu(i.uRJ(), "jsplus_ui_float_panel_sticks_by_side_left"), e.AFu(i.uRJ(), "jsplus_ui_float_panel_sticks_by_side_right"), e.AFu(i.uRJ(), "jsplus_ui_float_panel_sticks_by_side_top"), e.AFu(i.uRJ(), "jsplus_ui_float_panel_sticks_by_side_bottom"), i
			}

			return dt(i, t), i.prototype.Ugy = function (e) {
				var n = t.prototype.Ugy.call(this, e);
				return n.jjt -= 1, n
			}, i.prototype.rKY = function () {
				this.ekF.ajt(null), t.prototype.rKY.call(this)
			}, i.prototype.evU = function (e, i, o) {
				if (void 0 === i && (i = null), void 0 === o && (o = null), this.RIJ !== e) {
					this.ekF.ajt(e);
					var r = n.YNf(e, 2), s = n.gla(e, 2);
					this.ekF.fZt(null != r, null != s), t.prototype.evU.call(this, e, i, o)
				}
			}, i
		}(r.saF);
		return t.SWa = c, t.vAL = {
			colConfHint: "Column properties",
			colChangeTypeHint: "Change type of the column",
			colMoveLeftHint: "Move the column left",
			colMoveRightHint: "Move the column right",
			colAddHint: "Add the column",
			colDeleteHint: "Delete the column",
			rowMoveUpHint: "Move the row up",
			rowMoveDownHint: "Move the row down",
			rowConfHint: "Row properties",
			rowDeleteHint: "Delete the row"
		}, t
	}(x, n, h, E, T, j, X);
	var At;
	dt = this && this.__extends || (At = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		At(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	A = function (t, e, n, i, o) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var r = function (r) {
			function s(t, e, n) {
				void 0 === n && (n = null);
				var i = r.call(this) || this;
				return i.RzS = t, i.kNA = e, i.Rtl = n, i.Bpt = !1, i.Kne = i.SzE(i.RzS, i.kNA), i
			}

			return dt(s, r), s.prototype.WIq = function () {
				this.Kne.uRJ().style.margin = "0 auto 0 auto";
				var t = new i.KAf(i.rSZ.ULu, i.rSZ.ULu);
				return o.DEw(t.uRJ(), "width", "100%"), t.uRJ().appendChild(this.Kne.uRJ()), this.FMv(this.Kne.EqK() + this.Kne.ymI() + 30), this.bBR(this.ipW()), this.fNh(), t
			}, s.prototype.AtU = function () {
				return !0
			}, s.prototype.adP = function () {
				return this.SAY()
			}, s.prototype.Zez = function () {
				var e = this;
				return this.Bze() ? [new n.QzM(t.vAL.advanced, !0, function () {
					e.Bpt = !e.Bpt, e.fNh()
				})] : []
			}, s.prototype.rKU = function () {
				var t = this;
				return [this.vce(e.yga.SBO, !0, function () {
					return !0
				}), this.EZw(e.uFf.Mhj, this.UxY(), function () {
					return t.dQq()
				})]
			}, s.prototype.SAD = function () {
				return !0
			}, s.prototype.Bze = function () {
				for (var t = 0, e = this.Kne.Auj(); t < e.length; t++) {
					if (e[t].Vjm()) return !0
				}
				return !1
			}, s.prototype.fNh = function () {
				if (this.Bze()) {
					this.MwX(0).HeQ(t.vAL[this.Bpt ? "basic" : "advanced"]);
					for (var e = 0, n = this.Kne.Auj(); e < n.length; e++) {
						var i = n[e];
						this.Kne.bNL(i.eaF).Fpn(this.Bpt && i.Vjm() || !this.Bpt && !i.Vjm())
					}
					this.bBR(this.Bpt ? this.xuH() : this.ipW())
				}
			}, s.prototype.AHX = function () {
				this.ZiP().fZt(this.UxY())
			}, s.prototype.dQq = function () {
				return !!this.ZFR() && (null != this.Rtl && this.Rtl(), !0)
			}, s.prototype.ZFR = function () {
				return this.Kne.ZFR(), !0
			}, s
		}(e.NSX);
		return t.CgA = r, t.vAL = {advanced: "Advanced", basic: "Basic"}, t
	}(A, y, c, _, n);
	var Ot;
	dt = this && this.__extends || (Ot = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Ot(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	O = function (t, e, n, i, o) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var r = function (t) {
			function i(e, n, i, o, r, s) {
				void 0 === e && (e = null), void 0 === n && (n = !1), void 0 === i && (i = ""), void 0 === o && (o = null), void 0 === r && (r = null), void 0 === s && (s = null);
				var u = t.call(this) || this;
				return u.gvC = null, u.Ewh = null, u.yzA = null, u.CyO = [], u.dCt = {}, u.kJN = [], u.jcJ = {}, u.jVG = e, u.XMI = n, u.ZPI = i, u.Qka = o, u.geZ = r, u.lZK = s, u
			}

			return dt(i, t), i.prototype.fZt = function (t) {
				t ? e.Fhg(this.pbD(), "disabled") : e.aMO(this.pbD(), "disabled", "disabled")
			}, i.prototype.eMG = function () {
				var t = this;
				this.gvC = document.createElement("input"), this.gvC.type = "checkbox", null === this.jVG && (this.jVG = i.sHn()), this.Ewh = document.createElement("label"), this.Ewh.htmlFor = this.jVG, this.yzA = document.createElement("style"), this.yzA.setAttribute("type", "text/css"), this.gvC.id = this.jVG, this.gvC.checked = this.XMI, this.sGi(this.CyO), this.Kje(this.dCt), this.Ewh.textContent = this.ZPI, this.ZPI.length > 0 ? e.LfB(this.Ewh, "jsplus_theme_no_text") : e.AFu(this.Ewh, "jsplus_theme_no_text"), this.Ewh.htmlFor = this.jVG, this.swO(this.kJN), this.DHB(this.jcJ), this.uRJ().appendChild(this.gvC), this.uRJ().appendChild(this.Ewh), this.Xws(), this.gvC.addEventListener("change", function () {
					t.XMI = t.gvC.checked, null != t.lZK && t.lZK(t.XMI)
				})
			}, i.prototype.ONU = function (t) {
				var e = this.sra();
				null == t || "" === t ? e.removeAttribute("title") : e.setAttribute("title", t)
			}, i.prototype.BFA = function () {
				return "checkbox"
			}, i.prototype.LRl = function (t) {
				this.Qka = o.bqf() + "theme/" + n.hNz() + "/img/" + t + "-off.png", this.geZ = o.bqf() + "theme/" + n.hNz() + "/img/" + t + "-on.png"
			}, i.prototype.pbD = function () {
				return this.uRJ(), this.gvC
			}, i.prototype.sra = function () {
				return this.uRJ(), this.Ewh
			}, i.prototype.pKG = function (t) {
				this.uRJ(), this.XMI = t, this.gvC.checked !== t && (this.gvC.checked = t)
			}, i.prototype.STL = function () {
				return this.XMI
			}, i.prototype.HeQ = function (t) {
				this.ZPI = t, this.uRJ(), this.Ewh.textContent = this.ZPI, 0 === this.ZPI.length ? e.AFu(this.Ewh, "jsplus_theme_no_text") : e.LfB(this.Ewh, "jsplus_theme_no_text")
			}, i.prototype.sGi = function (t) {
				this.CyO = t, this.uRJ(), e.jjU(this.gvC, this.CyO)
			}, i.prototype.Kje = function (t) {
				this.dCt = t, this.uRJ(), e.oCF(this.gvC, this.dCt)
			}, i.prototype.swO = function (t) {
				this.kJN = t, this.uRJ(), e.jjU(this.Ewh, this.kJN), 0 === this.ZPI.length && e.AFu(this.Ewh, "jsplus_theme_no_text"), e.AFu(this.Ewh, "jsplus_theme_no_select")
			}, i.prototype.DHB = function (t) {
				this.jcJ = t, this.uRJ(), e.oCF(this.gvC, this.jcJ)
			}, i.prototype.AfP = function (t) {
				this.Qka = t, this.uRJ(), this.Xws()
			}, i.prototype.ISq = function (t) {
				this.geZ = t, this.uRJ(), this.Xws()
			}, i.prototype.Xws = function () {
				var t = "";
				null != this.Qka && (t += ".jsplus_theme input[type=checkbox]#" + this.jVG + " + label { background-image: url(" + this.Qka + " )}"), null != this.Qka && (t += ".jsplus_theme input[type=checkbox]#" + this.jVG + ":checked + label { background-image: url(" + this.geZ + " )}"), this.yzA.textContent = t, t.length > 0 ? this.uRJ().appendChild(this.yzA) : this.yzA.parentNode === this.uRJ() && this.uRJ().removeChild(this.yzA)
			}, i.sHn = function () {
				do {
					i.ARY++
				} while (null != document.getElementById("checkbox-" + i.ARY));
				return "checkbox-" + i.ARY
			}, i.ARY = 0, i
		}(i.cAE);
		return t.pZX = r, t
	}(O, n, p, a, s);
	var Ct;
	dt = this && this.__extends || (Ct = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Ct(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	C = function (t, e, n, i, o) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var r = function (t) {
			function n(e, n) {
				var i = t.call(this, n.toString(), function () {
					i.XSF()
				}) || this;
				return i.HeO = n, i.BKZ = e, i
			}

			return dt(n, t), n.prototype.FKy = function () {
				return this.HeO
			}, n.prototype.XSF = function () {
				this.BKZ.INK(this.HeO)
			}, n.prototype.MBq = function () {
				var n = this;
				t.prototype.MBq.call(this), e.AFu(this.TJV, "jsplus_ui_button_manual_hover"), this.TJV.addEventListener("mouseenter", function () {
					n.BKZ.eLg(n.HeO)
				}), this.TJV.addEventListener("mouseleave", function () {
					n.BKZ.YRX(n.HeO)
				})
			}, n.prototype.oVK = function (t) {
				null == this.TJV && this.kIU(), e.GTY(this.TJV, "jsplus_a_la_disabled", !t)
			}, n
		}(i.EOx);
		t.PoA = r;
		var s = function () {
			function t(t, e, i) {
				void 0 === t && (t = -1), void 0 === e && (e = 1), void 0 === i && (i = 12), this.TJV = null, this.IBn = [], this.lZK = null, n.ZoU(), this.CDo = e, this.fsT = i, this.HeO = t, this.UGZ = -1 !== t
			}

			return t.prototype.eSF = function (t) {
				this.lnJ.fZt(t)
			}, t.prototype.Uou = function () {
				this.lZK && null != this.TJV && this.lZK.call(this)
			}, t.prototype.Uus = function (t) {
				this.lZK = t
			}, t.prototype.uRJ = function () {
				return null == this.TJV && this.MBq(), this.TJV
			}, t.prototype.FKy = function () {
				return this.UGZ ? this.HeO : -1
			}, t.prototype.pKG = function (t) {
				this.UGZ = t, this.lnJ.pKG(t);
				for (var e = 0, n = this.IBn; e < n.length; e++) {
					n[e].oVK(t)
				}
			}, t.prototype.STL = function () {
				return this.UGZ
			}, t.prototype.MBq = function () {
				var t = this;
				this.TJV = document.createElement("div"), this.TJV.className = "jsplus_theme jsplus_ui_bootstrap_input_col_width", this.lnJ = new o.pZX(null, !1, "", null, null, function (e) {
					e && -1 === t.FKy() ? t.INK(6) : (t.pKG(e), t.Uou())
				}), this.lnJ.pKG(this.UGZ), this.TJV.appendChild(this.lnJ.uRJ());
				for (var e = this.CDo; e <= this.fsT; e++) {
					var n = new r(this, e);
					this.IBn.push(n), this.TJV.appendChild(n.uRJ())
				}
				this.INK(this.HeO)
			}, t.prototype.KSN = function (t) {
				this.HeO = t, this.pKG(!1), this.VaF(this.HeO, -1, !1)
			}, t.prototype.INK = function (t) {
				this.HeO = t, this.pKG(-1 !== t), this.VaF(this.HeO, -1, !1), this.Uou()
			}, t.prototype.eLg = function (t) {
				this.VaF(t, this.HeO, !0)
			}, t.prototype.YRX = function (t) {
				this.VaF(this.HeO, -1, !1)
			}, t.prototype.VaF = function (t, n, i) {
				for (var o = 0, r = this.IBn; o < r.length; o++) {
					var s = r[o], u = s.uRJ();
					s.FKy() <= t ? e.AFu(u, "jsplus_ui_bootstrap_input_col_width_filled") : e.LfB(u, "jsplus_ui_bootstrap_input_col_width_filled"), s.FKy() <= t && i ? e.AFu(u, "jsplus_ui_bootstrap_input_col_width_filled_now") : e.LfB(u, "jsplus_ui_bootstrap_input_col_width_filled_now"), n > t && s.FKy() <= n && s.FKy() > t ? e.AFu(u, "jsplus_ui_bootstrap_input_col_width_half_filled") : e.LfB(u, "jsplus_ui_bootstrap_input_col_width_half_filled"), s.FKy() === t ? e.AFu(u, "jsplus_selected") : e.LfB(u, "jsplus_selected")
				}
			}, t
		}();
		return t.jgn = s, t
	}(C, n, p, T, O);
	var Jt;
	dt = this && this.__extends || (Jt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Jt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	J = function (t, e, n) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var i = function () {
			function i(t, e) {
				void 0 === t && (t = 150), void 0 === e && (e = 350), this.TJV = null, this.SsC = null, this.iNq = [], n.ZoU(), t && (this.MPT = t), e && (this.TVv = e)
			}

			return i.prototype.BSZ = function () {
				return null == this.SsC && (this.SsC = this.Auj()), this.SsC
			}, i.prototype.MBq = function () {
				this.TJV = document.createElement("div"), this.TJV.className = "jsplus_ui_config_editor jsplus_theme";
				for (var t = 0, e = this.BSZ(); t < e.length; t++) {
					var n = e[t];
					this.iuM(n)
				}
				this.iKn(), this.qqM(this.EqK()), this.UKi(this.ymI())
			}, i.prototype.uRJ = function () {
				return null == this.TJV && this.MBq(), this.TJV
			}, i.prototype.qqM = function (t) {
				this.MPT = t;
				for (var e = 0, n = this.iNq; e < n.length; e++) {
					n[e].qqM(t)
				}
				this.FbW()
			}, i.prototype.EqK = function () {
				return this.MPT
			}, i.prototype.UKi = function (t) {
				this.TVv = t;
				for (var e = 0, n = this.iNq; e < n.length; e++) {
					n[e].UKi(t)
				}
				this.FbW()
			}, i.prototype.FbW = function () {
				this.TJV.style.width = this.EqK() + this.ymI() + "px"
			}, i.prototype.ymI = function () {
				return this.TVv
			}, i.prototype.aFA = function () {
				null != this.TJV && this.TJV.parentNode.removeChild(this.TJV)
			}, i.prototype.tTd = function (t) {
				for (var e = 0, n = this.BSZ(); e < n.length; e++) {
					var i = n[e];
					if (i.eaF === t) return i
				}
				return null
			}, i.prototype.bNL = function (t) {
				for (var e = 0, n = this.iNq; e < n.length; e++) {
					var i = n[e];
					if (i.tJh.eaF === t) return i
				}
				return null
			}, i.prototype.iuM = function (e) {
				var n = document.createElement("div");
				n.className = "jsplus_ui_config_editor_field", this.TJV.appendChild(n);
				var i = null;
				if (null != e.zek.FaY) i = e.zek.FaY; else {
					var o = t.Efd[e.zek.type];
					if (null == o) throw"Config editor: widget type '" + e.zek.type + "' not found for name '" + e.eaF + "'";
					i = o()
				}
				i.tJh = e, i.Dyc = n;
				var r = Object.keys(e.zek);
				for (var s in r) i[r[s]] = e.zek[r[s]];
				n.className = "jsplus_ui_config_editor_field", i.xXE = this, i.uzg(), this.iNq.push(i)
			}, i.prototype.iKn = function () {
				for (var t = 0; t < this.iNq.length; t++) this.iNq[t].inc()
			}, i.prototype.zYG = function (t) {
				this.FRu(t), this.WDF(), this.iKn()
			}, i.prototype.FRu = function (t) {
			}, i.prototype.WDF = function () {
				for (var t = 0, e = this.BSZ(); t < e.length; t++) {
					var n = e[t];
					n.MbD = n.WDF(this.BSZ())
				}
			}, i.prototype.OiC = function (t, n, i) {
				for (var o = [this.bNL(t), this.bNL(n)], r = Math.floor(46 * (this.EqK() + this.ymI()) / 100), s = 0, u = o; s < u.length; s++) {
					var l = u[s];
					e.AFu(l.Dyc, "jsplus_ui_config_editor_inline_2"), i ? (e.AFu(l.Dyc, "jsplus_ui_config_editor_inline_vertical"), l.qqM(r), l.UKi(r)) : (l.qqM(this.EqK()), l.UKi(r - this.EqK()))
				}
				e.AFu(o[1].Dyc, "jsplus_ui_config_editor_inline_2_last")
			}, i.prototype.NFa = function (t, n, i, o) {
				var r = [this.bNL(t), this.bNL(n), this.bNL(i)];
				if (null != r[0] && null != r[1] && null != r[2]) {
					for (var s = Math.floor(30 * (this.EqK() + this.ymI()) / 100), u = 0, l = r; u < l.length; u++) {
						var h = l[u];
						e.AFu(h.Dyc, "jsplus_ui_config_editor_inline_3"), o ? (e.AFu(h.Dyc, "jsplus_ui_config_editor_inline_vertical"), h.qqM(s), h.UKi(s)) : (h.qqM(this.EqK()), h.UKi(s - this.EqK()))
					}
					e.AFu(r[2].Dyc, "jsplus_ui_config_editor_inline_3_last")
				}
			}, i
		}();
		t.HeK = i;
		var o = function (t) {
			function e(e, n, i) {
				void 0 === n && (n = 150), void 0 === i && (i = 350);
				var o = t.call(this, n, i) || this;
				return o.SjT = e, o
			}

			return dt(e, t), e.prototype.Auj = function () {
				return this.SjT
			}, e
		}(i);
		return t.nvB = o, t.Efd = {}, t
	}(J, n, p), N = function (t) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var e = function () {
			function t(t, e, n, i) {
				void 0 === i && (i = null), this.HeO = null, this.eaF = "", this.MbD = null, this.Trw = [], this.eaF = t, this.INK(e), this.zek = n, i && (this.WDF = i)
			}

			return t.prototype.FKy = function () {
				return this.HeO
			}, t.prototype.INK = function (t, e) {
				if (void 0 === e && (e = !0), this.FKy() !== t && (this.HeO = t, e)) for (var n = 0, i = this.Trw; n < i.length; n++) {
					(0, i[n])(this.HeO)
				}
			}, t.prototype.WDF = function (t) {
				return null
			}, t.prototype.kOi = function (t) {
				this.Trw.push(t)
			}, t.prototype.Bov = function (t) {
				this.Trw.indexOf(t) > -1 && this.Trw.splice(this.Trw.indexOf(t), 1)
			}, t
		}();
		return t.yUA = e, t
	}(N), L = function (t, e) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var n = function () {
			function t() {
				this.type = "", this.xXE = null, this.tJh = null, this.Dyc = null, this.Yov = null, this.oOw = null, this.cnL = null, this.MAH = null, this.gOl = null, this.wal = null, this.WtA = !0
			}

			return t.prototype.VUK = function () {
				return this.tJh.zek
			}, t.prototype.fRP = function () {
				this.ZFR(), this.xXE.zYG(this.tJh)
			}, t.prototype.qqM = function (t) {
				this.MAH && e.DEw(this.MAH, "width", t + "px"), this.gOl && e.DEw(this.gOl, "width", t + "px")
			}, t.prototype.UKi = function (t) {
				this.wal && (this.WtA ? e.DEw(this.wal, "width", t + "px") : e.asd(this.wal, "width"))
			}, t.prototype.uzg = function () {
				var t = this;
				this.type && this.type.length > 0 && e.AFu(this.Dyc, "jsplus_ui_config_editor_type_" + this.type), e.AFu(this.Dyc, "jsplus_ui_config_editor_name_" + this.tJh.eaF), this.MAH = document.createElement("div"), this.MAH.className = "jsplus_ui_config_editor_field_title", this.MAH.textContent = "", this.tJh.zek.yBE && (this.MAH.textContent = this.tJh.zek.yBE);
				var n = document.createElement("div");
				if (this.Dyc.appendChild(n), n.appendChild(this.MAH), this.wal = document.createElement("div"), this.wal.className = "jsplus_ui_config_editor_field_value", n.appendChild(this.wal), this.yVD(), this.WtA) {
					var i = document.createElement("div");
					i.style.display = "table-cell", n.appendChild(i)
				}
				this.oOw = document.createElement("div"), this.Dyc.appendChild(this.oOw), this.gOl = document.createElement("div"), this.gOl.className = "jsplus_ui_config_editor_field_title", this.gOl.textContent = "", this.oOw.appendChild(this.gOl), this.cnL = document.createElement("div"), this.cnL.className = "jsplus_ui_config_editor_validation_message", this.oOw.appendChild(this.cnL), !1 === this.tJh.zek.WtA && (this.WtA = !1), this.qqM(this.xXE.EqK()), this.UKi(this.xXE.ymI()), !1 === this.tJh.zek.QEF && this.Fpn(!1), !1 === this.tJh.zek.aUx && this.awL(!1), this.tJh.kOi(function (e) {
					t.INK(e)
				})
			}, t.prototype.INK = function (t) {
			}, t.prototype.Fpn = function (t) {
				t ? e.LfB(this.Dyc, "jsplus_hidden") : e.AFu(this.Dyc, "jsplus_hidden")
			}, t.prototype.awL = function (t) {
				t ? (e.LfB(this.MAH, "jsplus_hidden"), e.AFu(this.wal, "jsplus_ui_config_editor_full_width")) : (e.AFu(this.MAH, "jsplus_hidden"), e.LfB(this.wal, "jsplus_ui_config_editor_full_width"))
			}, t.prototype.inc = function () {
				throw"Abstract method is undefined"
			}, t.prototype.HsC = function () {
				throw"Abstract method is undefined"
			}, t.prototype.ZFR = function () {
				this.tJh.INK(this.HsC(), !1), this.Rtl()
			}, t.prototype.Rtl = function () {
			}, t.prototype.SAY = function () {
				return this.MAH.textContent
			}, t.prototype.YAV = function (t) {
				this.MAH.textContent = t
			}, t.prototype.yVD = function () {
				throw new Error("Abstract function call")
			}, t
		}();
		return t.lKT = n, t
	}(L, n);
	var Nt;
	dt = this && this.__extends || (Nt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Nt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	M = function (t, e, n, i) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var o = function () {
			function t(t, e, i) {
				if (this.xXE = null, this.TJV = null, this.rpx = null, this.MAH = null, this.wpz = null, this.qck = !1, this.kAM = null, this.RNI = -1, this.KOr = !1, this.CJD = null, n.ZoU(), this.TJV = t, this.rpx = e, i) {
					var o = Object.keys(i);
					for (var r in o) this[o[r]] = i[o[r]]
				}
				this.lut(e)
			}

			return t.prototype.ECg = function (t, e) {
				throw"fillRow is abstract method"
			}, t.prototype.eId = function () {
				throw"fillRow is abstract method"
			}, t.prototype.lut = function (t) {
				var n = this;
				this.rpx = t, this.TJV.innerHTML = "";
				var o, r = "jsplus_theme jsplus_ui_array_data_editor";
				("" === this.TJV.className.trim() ? this.TJV.className = r : this.TJV.className += " " + r, null != this.qck) && (o = new i.EOx("+ Add", function (t) {
					n.nei()
				}).uRJ(), e.AFu(o, "jsplus_ui_array_data_editor_add"));
				!0 === this.qck && this.TJV.appendChild(o), this.MAH = document.createElement("div"), this.MAH.style.display = "none", this.MAH.className = "jsplus_ui_array_data_editor_title", !1 !== this.Jab(this.MAH) && this.TJV.appendChild(this.MAH), this.wpz = document.createElement("div"), this.wpz.className = "jsplus_ui_array_data_editor_data", this.TJV.appendChild(this.wpz);
				for (var s = 0; s < this.rpx.length; s++) this.ztZ(s);
				!1 === this.qck && this.TJV.appendChild(o)
			}, t.prototype.mbQ = function () {
				return !0
			}, t.prototype.FMv = function (t) {
				this.CJD = t;
				for (var e = this.wWL(), n = 0; n < e.length; n++) this.Snt(e[n], t);
				null != this.MAH && this.XkC(this.MAH, t)
			}, t.prototype.Snt = function (t, e) {
			}, t.prototype.XkC = function (t, e) {
			}, t.prototype.wkv = function () {
				return this.rpx
			}, t.prototype.ztZ = function (t) {
				var e = document.createElement("div");
				e.className = "jsplus_ui_array_data_editor_row_wrap" + (this.mbQ() ? " jsplus_ui_array_data_editor_row_wrap_draggable" : ""), this.mbQ() && (e.draggable = !0);
				var n = document.createElement("div");
				n.className = "jsplus_ui_array_data_editor_row_block", e.appendChild(n);
				var i = document.createElement("div");
				i.className = "jsplus_ui_array_data_editor_row";
				var o = document.createElement("div");
				o.className = "jsplus_ui_array_data_editor_row_delete", o.innerHTML = "<div class='jsplus_ui_array_data_editor_btn_delete'>&#215;</div>", n.appendChild(i), n.appendChild(o), this.wpz.appendChild(e), this.ECg(i, t);
				for (var r = 0; r < this.bxF(); r++) {
					var s = this.YqR(i, r);
					this.INK(s, r, this.Sha(t, r))
				}
				return this.ECD(e, t), this.MAH && (this.MAH.style.display = "block"), e
			}, t.prototype.YqR = function (t, e) {
				return t.querySelector("[data-col='" + e + "']")
			}, t.prototype.vDN = function (t, n, i) {
				var o = this.wWL()[t], r = this.YqR(o, n);
				null == i ? (e.LfB(r, "jsplus_theme_error"), r.removeAttribute("title")) : (e.AFu(r, "jsplus_theme_error"), r.title = i)
			}, t.prototype.nei = function () {
				var t = this.eId();
				this.rpx.push(t);
				var e = this.ztZ(this.rpx.length - 1);
				this.Snt(e, this.CJD), null != this.MAH && this.XkC(this.MAH, this.CJD), this.zYG()
			}, t.prototype.NyN = function (t) {
				var e = this.wWL()[t];
				e.parentElement.removeChild(e), this.rpx.splice(t, 1), this.MAH && 0 === this.rpx.length && (this.MAH.style.display = "none"), this.zYG()
			}, t.prototype.zYG = function () {
				this.vOF()
			}, t.prototype.vOF = function () {
			}, t.prototype.tGL = function (t, e, n) {
				this.kAM = e, this.RNI = this.fAU(e), e.className += " jsplus_ui_array_data_editor_drag_row", t.dataTransfer.effectAllowed = "move"
			}, t.prototype.DzP = function (t, e, n) {
				var i = this.MZE(t.target);
				if (null == i || i === this.kAM) return !1;
				var o = !1;
				if (this.kAM.parentNode === i.parentNode) for (var r = this.kAM; r; r = r.previousSibling) if (r === i) {
					o = !0;
					break
				}
				return o ? i.parentNode.insertBefore(this.kAM, i) : i.parentNode.insertBefore(this.kAM, i.nextSibling), !0
			}, t.prototype.HsP = function (t, e, n) {
				e.className = e.className.substring(0, e.className.length - " jsplus_ui_array_data_editor_drag_row".length);
				var i = this.fAU(e), o = this.rpx.splice(this.RNI, 1);
				this.rpx.splice(i, 0, o[0]), this.kAM = null, this.RNI = -1
			}, t.prototype.fAU = function (t) {
				for (var e = this.wWL(), n = 0; n < e.length; n++) if (e[n] === t) return n;
				return -1
			}, t.prototype.MZE = function (t) {
				for (var e = t; null != e && -1 === e.className.split(" ").indexOf("jsplus_ui_array_data_editor_row_wrap");) e = e.parentElement;
				return e
			}, t.prototype.ECD = function (t, e) {
				var n, i, o, r, s, u, l, h, p, a, c, f = this;
				t.getElementsByClassName("jsplus_ui_array_data_editor_btn_delete")[0].onclick = (n = f, i = t, function () {
					var t = n.fAU(i);
					n.NyN(t)
				}), this.mbQ() && (t.ondragstart = (p = f, a = t, c = e, function (t) {
					p.tGL(t, a, c)
				}), t.ondragenter = (u = f, l = t, h = e, function (t) {
					u.DzP(t, l, h)
				}), t.ondragend = (o = f, r = t, s = e, function (t) {
					o.HsP(t, r, s)
				}));
				for (var d = function (e) {
					var n, i, o, r = t.querySelector("[data-col='" + e + "']");
					if ("function" == typeof v["attachListeners" + e]) {
						v["attachListeners" + e].call(v, r)
					} else {
						var s = (n = v, i = e, o = r, function () {
							var t = n.MZE(o), e = n.fAU(t);
							n.hEs(o, e, i)
						});
						"SELECT" === r.tagName || "checkbox" === r.getAttribute("type") ? r.addEventListener("change", s) : (r.addEventListener("input", s), r.addEventListener("keyup", s))
					}
				}, v = this, y = 0; y < this.bxF(); y++) d(y)
			}, t.prototype.hEs = function (t, e, n) {
				this.KOr = !0;
				var i = this.FKy(t, n);
				this.dxL(e, n, i), this.zYG(), this.KOr = !1
			}, t.prototype.wWL = function () {
				return this.wpz.getElementsByClassName("jsplus_ui_array_data_editor_row_wrap")
			}, t.prototype.jbd = function () {
				for (var t = this.wWL(), e = [], n = 0; n < t.length; n++) e.push(this.Fkf(t[n]));
				return e
			}, t.prototype.Fkf = function (t) {
				return t.getElementsByClassName("jsplus_ui_array_data_editor_row")[0]
			}, t.prototype.uov = function (t) {
				throw"getValueX is abstract method"
			}, t.prototype.FKy = function (t, e) {
				return "function" == typeof this["getValue" + e] ? this["getValue" + e].call(this, t) : "TEXTAREA" === t.tagName ? t.textContent : "INPUT" !== t.tagName || "checkbox" !== t.getAttribute("type") && "radio" !== t.getAttribute("type") ? t.value : t.checked
			}, t.prototype.XYI = function (t, e) {
			}, t.prototype.INK = function (t, e, n) {
				null != t && ("function" == typeof this["setValue" + e] ? this["setValue" + e].call(this, t, n) : "TEXTAREA" === t.tagName || "DIV" === t.tagName ? t.textContent = n : "INPUT" !== t.tagName || "checkbox" !== t.getAttribute("type") && "radio" !== t.getAttribute("type") ? t.value = n : t.checked = n)
			}, t.prototype.bxF = function () {
				return this.eId().length
			}, t.prototype.Jab = function (t) {
				return !1
			}, t.prototype.Sha = function (t, e) {
				return void 0 === e && (e = 0), this.rpx[t][e]
			}, t.prototype.dxL = function (t, e, n) {
				this.rpx[t][e] = n
			}, t
		}();
		t.paW = o;
		var r = function (t) {
			function e(e, n, i) {
				return void 0 === i && (i = {}), t.call(this, e, n, i) || this
			}

			return dt(e, t), e.prototype.Sha = function (t, e) {
				return void 0 === e && (e = 0), this.rpx[t]
			}, e.prototype.dxL = function (t, e, n) {
				this.rpx[t] = n
			}, e.prototype.eId = function () {
				return ""
			}, e.prototype.bxF = function () {
				return 1
			}, e
		}(o);
		return t.seZ = r, t
	}(M, n, p, T);
	var Lt;
	dt = this && this.__extends || (Lt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Lt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	F = function (t, e, n, i, o, r, s) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var u = function (t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}

			return dt(e, t), e.prototype.inc = function () {
			}, e.prototype.HsC = function () {
			}, e.prototype.uzg = function () {
				this.Dyc.style.display = "none"
			}, e
		}(e.lKT);
		t.QOs = u, n.Efd.hidden = function () {
			return new u
		};
		var l = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.type = "title", e
			}

			return dt(e, t), e.prototype.yVD = function () {
				this.wal.textContent = this.tJh.zek.yBE, !1 === this.tJh.zek.QEF && this.Fpn(!1), this.awL(!1)
			}, e.prototype.inc = function () {
			}, e.prototype.HsC = function () {
			}, e
		}(e.lKT);
		t.HRS = l, n.Efd.title = function () {
			return new l
		};
		var h = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.type = "textbox", e
			}

			return dt(e, t), e.prototype.VUK = function () {
				return this.tJh.zek
			}, e.prototype.yVD = function () {
				var t = this;
				this.Yov = document.createElement("input"), this.Yov.type = void 0 === this.VUK().Vcu ? "text" : this.VUK().Vcu, this.Yov.className = "jsplus_ui_config_editor_field_value_element", this.Yov.style.width = "100%", this.wal.appendChild(this.Yov), this.Yov.oninput = function () {
					t.fRP()
				}, this.Yov.onkeyup = function () {
					t.fRP()
				}
			}, e.prototype.INK = function (t) {
				this.Yov.value = t
			}, e.prototype.inc = function () {
				this.Yov.value !== this.tJh.FKy() && (this.Yov.value = this.tJh.FKy()), this.cnL.textContent = this.tJh.MbD
			}, e.prototype.HsC = function () {
				var t = this.Yov.value;
				return this.VUK().fCr ? parseInt(t) : t
			}, e
		}(e.lKT);
		t.jYi = h, n.Efd.textbox = function () {
			return new h
		};
		var p = function (t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.type = "textbox_with_button", e
			}

			return dt(e, t), e.prototype.VUK = function () {
				return this.tJh.zek
			}, e.prototype.yVD = function () {
				var e = this;
				t.prototype.yVD.call(this);
				var n = s.QrW();
				n.style.display = "table", n.style.width = "100%", this.Yov.parentNode.insertBefore(n, this.Yov), this.Yov.style.display = "table-cell", this.Yov.style.width = "calc(100% - 2px)", n.appendChild(this.Yov);
				var i = "...";
				this.VUK().ZXc && (i = this.VUK().ZXc);
				this.TBN = new r.EOx(i, function () {
					e.VUK().yst(e)
				}), s.DEw(this.TBN.uRJ(), "width", this.BtI() + "px"), s.DEw(this.TBN.uRJ(), "display", "table-cell"), s.DEw(this.TBN.uRJ(), "padding", "4px 0 2px 0"), n.appendChild(this.TBN.uRJ())
			}, e.prototype.BtI = function () {
				return this.VUK().OTj ? this.VUK().OTj : 80
			}, e.prototype.UKi = function (t) {
				this.WtA ? s.DEw(this.wal, "width", t + "px") : (s.asd(this.wal, "width"), s.DEw(this.Yov, "width", "100%"))
			}, e
		}(h);
		t.gvq = p, n.Efd.textbox_with_button = function () {
			return new p
		};
		var a = function (t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.type = "textbox_with_checkbox", e
			}

			return dt(e, t), e.prototype.inc = function () {
				var t = this.tJh.FKy();
				this.Yov.value !== t[0] && (this.Yov.value = t[0]), this.lnJ.pbD().checked !== t[1] && (this.lnJ.pbD().checked = t[1]), this.cnL.textContent = this.tJh.MbD
			}, e.prototype.UKi = function (t) {
				s.DEw(this.wal, "width", t + "px"), s.DEw(this.Yov, "width", t - 22 + "px")
			}, e.prototype.yVD = function () {
				var e = this;
				t.prototype.yVD.call(this), this.lnJ = this.rdU(), this.wal.appendChild(this.lnJ.uRJ()), this.lnJ.pbD().onchange = function () {
					e.fRP()
				}, s.DEw(this.wal, "white-space", "nowrap")
			}, e.prototype.HsC = function () {
				return [this.Yov.value, this.lnJ.pbD().checked]
			}, e.prototype.rdU = function () {
				var t = new o.pZX(null, !1, "");
				return t.Kje({"margin-right": "3px"}), t.DHB({"margin-left": "-7px", "padding-bottom": "2px"}), t
			}, e
		}(h);
		t.oEw = a, n.Efd.textbox_with_checkbox = function () {
			return new a
		};
		var c = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.type = "textarea", e
			}

			return dt(e, t), e.prototype.yVD = function () {
				var t = this;
				this.Yov = document.createElement("textarea"), this.Yov.className = "jsplus_ui_config_editor_field_value_element", this.wal.appendChild(this.Yov), this.Yov.oninput = function () {
					t.fRP()
				}, this.Yov.onkeyup = function () {
					t.fRP()
				}, this.Yov.onpaste = function () {
					t.fRP()
				}
			}, e.prototype.inc = function () {
				this.Yov.textContent !== this.tJh.FKy() && (this.Yov.textContent = this.tJh.FKy()), this.cnL.textContent = this.tJh.MbD
			}, e.prototype.HsC = function () {
				return this.Yov.value
			}, e
		}(e.lKT);
		t.orq = c, n.Efd.textarea = function () {
			return new c
		};
		var f = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.type = "checkbox", e
			}

			return dt(e, t), e.prototype.VUK = function () {
				return this.tJh.zek
			}, e.prototype.yVD = function () {
				var t = this, e = this.VUK().jVG, n = new o.pZX(e, !1, this.VUK().yBE);
				this.VUK().puR && n.LRl(this.VUK().puR), n.sGi(["jsplus_ui_config_editor_field_value_element"]), this.wal.appendChild(n.uRJ()), this.Yov = this.wal.getElementsByTagName("input")[0], this.cnL = this.wal.getElementsByClassName("jsplus_ui_config_editor_validation_message")[0], this.Yov.onchange = function () {
					t.fRP()
				}, this.YAV(""), this.awL(!0)
			}, e.prototype.inc = function () {
				this.Yov.checked !== this.tJh.FKy() && (this.Yov.checked = this.tJh.FKy()), this.cnL.textContent = this.tJh.MbD
			}, e.prototype.HsC = function () {
				return this.Yov.checked
			}, e
		}(e.lKT);
		t.VYA = f, n.Efd.checkbox = function () {
			return new f
		};
		var d = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.type = "select", e
			}

			return dt(e, t), e.prototype.VUK = function () {
				return this.tJh.zek
			}, e.prototype.yVD = function () {
				var t = this;
				this.Yov = document.createElement("select"), this.Yov.className = "jsplus_ui_config_editor_field_value_element";
				var e = "100%";
				this.VUK().aKy && (e = this.VUK().aKy + "px"), this.Yov.style.width = e, this.DXS(this.VUK().qem), this.wal.appendChild(this.Yov), this.Yov.onchange = function () {
					t.fRP()
				}
			}, e.prototype.DXS = function (t) {
				if (this.Yov.innerHTML = "", t) for (var e = 0; e < t.length; e++) {
					var n = document.createElement("option");
					n.value = t[e][0], n.textContent = t[e][1], this.Yov.appendChild(n)
				}
			}, e.prototype.inc = function () {
				this.Yov.value !== this.tJh.FKy() && (this.Yov.value = this.tJh.FKy()), this.cnL.textContent = this.tJh.MbD
			}, e.prototype.HsC = function () {
				var t = this.Yov.value;
				return !0 === this.VUK().fCr ? parseInt(t) : t
			}, e
		}(e.lKT);
		t.TeT = d, n.Efd.select = function () {
			return new d
		};
		var v = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.type = "array", e.rpM = null, e
			}

			return dt(e, t), e.prototype.VUK = function () {
				return this.tJh.zek
			}, e.prototype.yVD = function () {
				var t = this;
				s.AFu(this.Dyc, "jsplus_ui_config_editor_type_array"), this.MAH.style.paddingTop = "5px", this.Yov = document.createElement("div"), this.wal.appendChild(this.Yov), this.cnL = this.wal.getElementsByClassName("jsplus_ui_config_editor_validation_message")[0], this.rpM = this.tWH(this.Yov), this.rpM.xXE = this.xXE, this.rpM.vOF = function () {
					t.fRP()
				}, this.rpM.zYG()
			}, e.prototype.UKi = function (e) {
				this.VUK().Erb && e > this.VUK().Erb && (e = this.VUK().Erb), t.prototype.UKi.call(this, e), this.rpM.FMv(e)
			}, e.prototype.tWH = function (t) {
				return new i.paW(t, this.tJh.FKy(), this.VUK().YtY)
			}, e.prototype.inc = function () {
				this.cnL.textContent = this.tJh.MbD
			}, e.prototype.HsC = function () {
				return this.tJh.FKy()
			}, e
		}(e.lKT);
		t.hnV = v, n.Efd.array = function () {
			return new v
		};
		var y = function (t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.type = "message", e
			}

			return dt(e, t), e.prototype.VUK = function () {
				return this.tJh.zek
			}, e.prototype.yVD = function () {
				this.VUK().nBO && this.pME(this.VUK().nBO), this.VUK().Oas ? this.Ypr(this.VUK().Oas) : this.Ypr(e.NUP), s.AFu(this.wal, "jsplus_ui_config_editor_validation_message"), this.WtA = !1
			}, e.prototype.pME = function (t) {
				this.wal.textContent = t.replace(/\n/, "<br/>")
			}, e.prototype.Ypr = function (t) {
				s.LfB(this.wal, "jsplus_ui_config_editor_validation_message_warning"), s.LfB(this.wal, "jsplus_ui_config_editor_validation_message_info"), s.LfB(this.wal, "jsplus_ui_config_editor_validation_message_text"), t === e.HeP ? s.AFu(this.wal, "jsplus_ui_config_editor_validation_message_warning") : t === e.kZk ? s.AFu(this.wal, "jsplus_ui_config_editor_validation_message_info") : t === e.NcV && s.AFu(this.wal, "jsplus_ui_config_editor_validation_message_text")
			}, e.prototype.inc = function () {
				this.pME(this.tJh.FKy())
			}, e.prototype.HsC = function () {
			}, e.NUP = 0, e.HeP = 1, e.kZk = 2, e.NcV = 3, e
		}(e.lKT);
		t.CSm = y, n.Efd.message = function () {
			return new y
		};
		var _ = function (t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.type = "html", e
			}

			return dt(e, t), e.prototype.VUK = function () {
				return this.tJh.zek
			}, e.prototype.yVD = function () {
				this.VUK().yRH && this.Wua(this.VUK().yRH), this.WtA = !1
			}, e.prototype.uzg = function () {
				t.prototype.uzg.call(this), !1 === this.VUK().oEt && (this.Dyc.style.marginBottom = "0"), this.oOw.style.display = "none"
			}, e.prototype.Wua = function (t) {
				this.wal.innerHTML = t
			}, e.prototype.inc = function () {
				this.Wua(this.tJh.FKy())
			}, e.prototype.HsC = function () {
			}, e
		}(e.lKT);
		return t.Xqv = _, n.Efd.html = function () {
			return new _
		}, t
	}(F, L, J, M, O, T, n);
	var Mt;
	dt = this && this.__extends || (Mt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Mt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	V = function (t, e, n) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var i = function (n) {
			function i(t, e, i, o) {
				void 0 === o && (o = {});
				var r = n.call(this, t, e, o) || this;
				return r.uQz = [], r.uQz = i, r
			}

			return dt(i, n), i.prototype.mbQ = function () {
				return !1
			}, i.prototype.ECg = function (t, e) {
				t.innerHTML = "<input data-col='0'/>"
			}, i.prototype.Snt = function (t, n) {
				var i = t.getElementsByTagName("input");
				null != n ? e.DEw(i[0], "width", n - 24 + "px") : e.asd(i[0], "width")
			}, i.prototype.zYG = function () {
				n.prototype.zYG.call(this);
				for (var e = 0; e < this.rpx.length; e++) {
					var i = this.Sha(e).trim(), o = !1;
					if (i.length > 0 && !/^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/.test(i)) this.vDN(e, 0, t.vAL.errorSyntax), o = !0; else if (i.length > 0) {
						for (var r = !0, s = 0; s < e && r; s++) i === this.Sha(s).trim() && (r = !1);
						r || (this.vDN(e, 0, t.vAL.errorUnique), o = !0), o || this.uQz.indexOf(i) > -1 && (this.vDN(e, 0, t.vAL.errorNameExcluded), o = !0)
					}
					o || this.vDN(e, 0, null)
				}
			}, i
		}(n.seZ);
		return t.BhP = i, t.vAL = {
			title: "Classes",
			errorSyntax: "Incorrect class syntax",
			errorUnique: "All classes must be unique",
			errorNameExcluded: "This class is managed outside of this list and will be ignored"
		}, t
	}(V, n, M);
	var Ft;
	dt = this && this.__extends || (Ft = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Ft(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	k = function (t, e, n, i) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var o = function (i) {
			function o(t, e, o) {
				void 0 === o && (o = {});
				return n.ZoU(), i.call(this, t, e, o) || this
			}

			return dt(o, i), o.prototype.ECg = function (t, e) {
				t.innerHTML = "<input data-col='0' style='margin-right:3px'/><input data-col='1'/>"
			}, o.prototype.eId = function () {
				return ["", ""]
			}, o.prototype.Jab = function (t) {
				var e = this.pmt();
				return !!e && (t.innerHTML = "<div style='display:inline-block'>" + e[0] + "</div><div style='display:inline-block'>" + e[1] + "</div>", !0)
			}, o.prototype.pmt = function () {
				return [t.vAL.name, t.vAL.value]
			}, o.prototype.AAQ = function (t) {
				if (null != t) {
					var e = t - 24, n = Math.ceil(.4 * e);
					return n > 200 && (n = 200), [n + "px", e - n - 3 + "px"]
				}
				return ["40%", "60%"]
			}, o.prototype.XkC = function (t, n) {
				var i = t.getElementsByTagName("div");
				if (!(i.length < 2)) {
					var o = this.AAQ(n);
					e.DEw(i[0], "width", o[0]), e.DEw(i[1], "width", o[1])
				}
			}, o.prototype.Snt = function (t, n) {
				var i = t.getElementsByTagName("input"), o = this.AAQ(n);
				e.DEw(i[0], "width", o[0]), e.DEw(i[1], "width", o[1])
			}, o
		}(i.paW);
		return t.xZl = o, t.vAL = {name: "Name", value: "Value"}, t
	}(k, n, p, M);
	var Vt;
	dt = this && this.__extends || (Vt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Vt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	K = function (t, e) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var n = function (e) {
			function n(t, n, i, o) {
				void 0 === i && (i = []), void 0 === o && (o = {});
				var r = e.call(this, t, n, o) || this;
				return r.uQz = [], r.uQz = i, r
			}

			return dt(n, e), n.prototype.mbQ = function () {
				return !1
			}, n.prototype.pmt = function () {
				return null
			}, n.prototype.zYG = function () {
				e.prototype.zYG.call(this);
				for (var n = 0; n < this.rpx.length; n++) {
					var i = this.Sha(n, 0).trim(), o = this.Sha(n, 1).trim(), r = !1;
					if ("" === i && "" === o || /^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/.test(i) || (this.vDN(n, 0, t.vAL.errorNameSyntax), r = !0), !r && "" !== i) {
						for (var s = !0, u = 0; u < n && s; u++) this.Sha(u, 0).trim() === i && (s = !1);
						s || (this.vDN(n, 0, t.vAL.errorNameUnique), r = !0)
					}
					r || this.uQz.indexOf(i) > -1 && (this.vDN(n, 0, t.vAL.errorNameExcluded), r = !0), r || this.vDN(n, 0, null)
				}
			}, n
		}(e.xZl);
		return t.jLL = n, t.vAL = {
			errorNameExcluded: "Such style is set outside of this list and will be ignored",
			errorNameSyntax: "Incorrect style name syntax",
			errorNameUnique: "Style names must be unique"
		}, t
	}(K, k);
	var kt;
	dt = this && this.__extends || (kt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		kt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	H = function (t, e) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var n = function (e) {
			function n(t, n, i, o) {
				void 0 === o && (o = {});
				var r = e.call(this, t, n, o) || this;
				return r.uQz = [], r.uQz = i, r
			}

			return dt(n, e), n.prototype.mbQ = function () {
				return !1
			}, n.prototype.pmt = function () {
				return null
			}, n.prototype.zYG = function () {
				e.prototype.zYG.call(this);
				for (var n = 0; n < this.rpx.length; n++) {
					var i = this.Sha(n, 0).trim(), o = this.Sha(n, 1).trim(), r = !1;
					if ("" === i && "" === o || /^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/.test(i) || (this.vDN(n, 0, t.vAL.errorNameSyntax), r = !0), !r && "" !== i) {
						for (var s = !0, u = 0; u < n && s; u++) this.Sha(u, 0).trim() === i && (s = !1);
						s || (this.vDN(n, 0, t.vAL.errorNameUnique), r = !0)
					}
					if (!r) for (u = 0; u < this.uQz.length && !r; u++) this.uQz[u] === i && (this.vDN(n, 0, t.vAL.errorNameExcluded), r = !0);
					r || this.vDN(n, 0, null)
				}
			}, n
		}(e.xZl);
		return t.iKR = n, t.vAL = {
			errorNameExcluded: "This attribute is managed outside of this list and will be ignored",
			errorNameSyntax: "Incorrect attribute name syntax",
			errorNameUnique: "Attributes names must be unique"
		}, t
	}(H, k);
	var Kt;
	dt = this && this.__extends || (Kt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Kt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	I = function (t, e, n, i) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var o = function (i) {
			function o(t, o, r, s) {
				void 0 === s && (s = {});
				var u = i.call(this, t, o, s) || this;
				return u.zUZ = !0, n.ZoU(), e.AFu(u.TJV, "jsplus_ui_options_editor"), u.yLG(r), u
			}

			return dt(o, i), o.prototype.yLG = function (t) {
				this.zUZ = t, this.LTd(null)
			}, o.prototype.LTd = function (t) {
				if (!this.zUZ) for (var e = this.jbd(), n = 0; n < this.rpx.length; n++) {
					var i = this.YqR(e[n], 4), o = !1;
					if (null != t) {
						var r = n === t;
						this.dxL(n, 4, r), this.INK(i, 4, r)
					} else !0 === this.Sha(n, 4) && (o ? (this.dxL(n, 4, !1), this.INK(i, 4, !1)) : o = !0)
				}
			}, o.prototype.yer = function (t) {
				var e = this.fAU(t);
				!1 === this.Sha(e, 4) && this.LTd(e)
			}, o.prototype.ECg = function (e, n) {
				o.jTq++;
				var i = "_id" + o.jTq;
				o.jTq++;
				var r = "_id" + o.jTq;
				e.innerHTML = "<div style='display:none' data-col='0'></div><input data-col='1' class='jsplus_ui_options_value'/><input data-col='2' class='jsplus_ui_options_title'/><div class='jsplus_ui_options_editor_checkbox_wrap'><input id='" + i + "' type='checkbox' data-col='3' class='jsplus_ui_options_editor_disabled'/><label for='" + i + "' title='" + t.vAL.enabled + "' class='jsplus_theme_no_text'></label></div><div class='jsplus_ui_options_editor_checkbox_wrap jsplus_ui_options_editor_checkbox_wrap_selected'><input id='" + r + "' type='checkbox' data-col='4' class='jsplus_ui_options_editor_selected'/><label for='" + r + "' title='" + t.vAL.selected + "' class='jsplus_theme_no_text'></label></div>"
			}, o.prototype.Jab = function (n) {
				return e.AFu(n, "jsplus_ui_options_title"), n.innerHTML = "<div class='jsplus_ui_options_title_value'>" + t.vAL.value + "</div><div class='jsplus_ui_options_title_title'>" + t.vAL.title + "</div>", !0
			}, o.prototype.eId = function () {
				return [-1, "", "", !1, !1]
			}, o.prototype.XkC = function (t, n) {
				var i = t.children[0], o = t.children[1];
				if (null != n) {
					var r = n - 72 - 8, s = Math.ceil(r / 2);
					s > 200 && (s = 200);
					var u = r - s;
					e.DEw(i, "width", s + "px"), e.DEw(o, "width", u + "px")
				} else e.DEw(i, "width", "120px"), e.asd(o, "width")
			}, o.prototype.Snt = function (t, n) {
				var i = this.Fkf(t);
				if (null != n) {
					var o = n - 72 - 8, r = Math.ceil(o / 2);
					r > 200 && (r = 200);
					var s = o - r;
					e.DEw(this.YqR(i, 1), "width", r + "px"), e.DEw(this.YqR(i, 2), "width", s + "px")
				} else e.DEw(this.YqR(i, 1), "width", "120px"), e.asd(this.YqR(i, 2), "width")
			}, o.prototype.MFx = function (t) {
				var e, n, i = this;
				t.addEventListener("change", (n = (e = i).MZE(t), function (t) {
					e.yer(n)
				}))
			}, o.jTq = 0, o
		}(i.paW);
		return t.TRJ = o, t.vAL = {enabled: "Enabled?", selected: "Selected?", title: "Title", value: "Value"}, t
	}(I, n, p, M);
	var Ht;
	dt = this && this.__extends || (Ht = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Ht(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	R = function (t, e, n, i, o, r, s, u, l) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var h = function (n) {
			function i(t) {
				var e = n.call(this) || this;
				return e.TSY = null, e.TSY = t, e
			}

			return dt(i, n), i.prototype.Auj = function () {
				return [new a(this.TSY), new c(this.TSY, 0), new c(this.TSY, 1), new p(this.TSY)]
			}, i.prototype.MBq = function () {
				n.prototype.MBq.call(this), e.AFu(this.TJV, "jsplus_widget_label_editor"), this.hoc()
			}, i.prototype.FRu = function (t) {
				this.hoc()
			}, i.prototype.hoc = function () {
				var e = this.bNL("label_text_0"), n = this.bNL("label_text_1"), i = this.bNL("label_type");
				2 === this.TSY.cXk() ? (e.YAV(t.vAL.left_text), n.YAV(t.vAL.right_text), n.Fpn(!0)) : (e.YAV(t.vAL.text), n.Fpn(!1)), this.tTd("label_text_0").INK([this.TSY.jNT[0], this.TSY.Kwx[0]]), this.tTd("label_text_1").INK([this.TSY.jNT[1], this.TSY.Kwx[1]]), i.DXS(this.VYV()), this.tTd("label_type").INK(this.TSY.jLH), this.tTd("label_warnings").INK(this.TSY.wmM()), e.inc(), n.inc(), i.inc(), this.bNL("label_warnings").inc()
			}, i.prototype.VYV = function () {
				for (var e = this.TSY.vww(!0), n = [], i = 0; i < e.length; i++) n.push([String(e[i]), t.vAL["label_type_" + e[i]]]);
				return n
			}, i
		}(i.HeK);
		t.kDb = h;
		var p = function (t) {
			function e(e) {
				var n = t.call(this, "label_warnings", null, {type: "message", Oas: u.CSm.HeP}) || this;
				return n.TSY = e, n
			}

			return dt(e, t), e.prototype.FKy = function () {
				return this.TSY.wmM().join("\n")
			}, e.prototype.INK = function (t) {
			}, e
		}(r.yUA), a = function (e) {
			function n(n) {
				var i = e.call(this, "label_type", null, {type: "select", yBE: t.vAL.type, fCr: !0, qem: []}) || this;
				return i.TSY = n, i
			}

			return dt(n, e), n.prototype.FKy = function () {
				return this.TSY.jLH
			}, n.prototype.INK = function (t) {
				null != this.TSY && this.TSY.FZk(t)
			}, n
		}(r.yUA), c = function (t) {
			function e(e, n) {
				var i = t.call(this, "label_text_" + n, null, {type: "label_text", yBE: ""}) || this;
				return i.TSY = e, i.DlD = n, i
			}

			return dt(e, t), e.prototype.FKy = function () {
				return [this.TSY.jNT[this.DlD], this.TSY.Kwx[this.DlD]]
			}, e.prototype.INK = function (t) {
				null != this.TSY && (this.TSY.oQo(this.DlD, t[0]), 0 === this.DlD || 2 === this.TSY.cXk() ? this.TSY.MSy(this.DlD, t[1]) : this.TSY.MSy(this.DlD, null))
			}, e
		}(r.yUA), f = function (t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.type = "label_text", e
			}

			return dt(e, t), e.prototype.rdU = function () {
				var e = t.prototype.rdU.call(this);
				return e.AfP(l.bqf() + "theme/" + n.hNz() + "/img/html.png"), e.ISq(l.bqf() + "theme/" + n.hNz() + "/img/text.png"), e
			}, e
		}(s.oEw);
		return o.Efd.label_text = function () {
			return new f
		}, t.vAL = {
			label_type_0: "Outside label",
			label_type_1: "Label at the left",
			label_type_2: "Label at the right",
			label_type_3: "Label wraps input",
			label_type_4: "Text label",
			left_text: "Left text",
			right_text: "Right text",
			text: "Text",
			type: "Label type"
		}, t
	}(R, n, p, J, J, N, F, F, s);
	var It;
	dt = this && this.__extends || (It = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		It(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	Z = function (t, e, n, i, o, r, s, u, l, h, p, a) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var c = function (t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.type = "label", e
			}

			return dt(e, t), e.prototype.yVD = function () {
				this.Yov = document.createElement("div"), this.wal.appendChild(this.Yov), this.HtC = new a.kDb(this.tJh.FKy()), this.Yov.appendChild(this.HtC.uRJ()), this.awL(!1)
			}, e.prototype.qqM = function (t) {
				this.HtC.qqM(t)
			}, e.prototype.UKi = function (t) {
				this.HtC.UKi(t)
			}, e.prototype.inc = function () {
				this.cnL.textContent = this.tJh.MbD
			}, e.prototype.HsC = function () {
				return this.tJh.FKy()
			}, e
		}(n.lKT);
		t.rej = c, e.Efd.label = function () {
			return new c
		};
		var f = function (t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.type = "classes", e
			}

			return dt(e, t), e.prototype.uzg = function () {
				t.prototype.uzg.call(this), this.VUK().yBE || this.YAV(r.vAL.title)
			}, e.prototype.tWH = function (t) {
				return new o.BhP(this.Yov, this.tJh.FKy(), this.tJh.Gxx(), {
					Jab: function (t) {
						return !1
					}
				})
			}, e
		}(i.hnV);
		t.qRh = f, e.Efd.classes = function () {
			return new f
		};
		var d = function (t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.type = "styles", e
			}

			return dt(e, t), e.prototype.uzg = function () {
				t.prototype.uzg.call(this), this.VUK().yBE || this.YAV(u.vAL.title)
			}, e.prototype.tWH = function (t) {
				return new s.jLL(this.Yov, this.tJh.FKy(), this.tJh.Gxx())
			}, e
		}(i.hnV);
		t.ePo = d, e.Efd.styles = function () {
			return new d
		};
		var v = function (t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.type = "attributes", e
			}

			return dt(e, t), e.prototype.uzg = function () {
				t.prototype.uzg.call(this), this.VUK().yBE || this.YAV(h.vAL.title)
			}, e.prototype.tWH = function (t) {
				return new l.iKR(this.Yov, this.tJh.FKy(), this.tJh.Gxx())
			}, e
		}(i.hnV);
		t.egk = v, e.Efd.attributes = function () {
			return new v
		};
		var y = function (e) {
			function n() {
				return null !== e && e.apply(this, arguments) || this
			}

			return dt(n, e), n.prototype.VUK = function () {
				return this.tJh.zek
			}, n.prototype.uzg = function () {
				e.prototype.uzg.call(this), this.VUK().yBE || this.YAV(t.vAL.options)
			}, n.prototype.tWH = function (t) {
				var e = !0;
				return !1 === this.VUK().zUZ && (e = !1), new p.TRJ(this.Yov, this.tJh.FKy(), e)
			}, n
		}(i.hnV);
		return t.FwT = y, e.Efd.options = function () {
			return new y
		}, t.vAL = {options: "Options"}, t
	}(Z, J, L, F, V, V, K, K, H, H, I, R);
	var Rt;
	dt = this && this.__extends || (Rt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Rt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	B = function (t, e, n) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var i = function (t) {
			function n(e, n, i) {
				void 0 === n && (n = 150), void 0 === i && (i = 350);
				var o = t.call(this, n, i) || this;
				return o.WzH = null, o.WzH = e, o
			}

			return dt(n, t), n.prototype.MBq = function () {
				t.prototype.MBq.call(this), e.AFu(this.TJV, "jsplus_widget_tag_editor");
				this.Pge();
				this.NFa("a_class", "a_style", "attributes", !0)
			}, n.prototype.Auj = function () {
				var t = this.WzH.tPU();
				return 0 === t.length && (this.WzH.BPv(this.Pge()), t = this.WzH.tPU()), t
			}, n.prototype.ZFR = function () {
				this.WzH.ZFR()
			}, n
		}(n.HeK);
		return t.kpn = i, t
	}(B, n, J);
	var Zt;
	dt = this && this.__extends || (Zt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Zt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	D = function (t, e, n, i, o, r, s, u, l, h) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var p = function (t) {
			function n(e) {
				var n = t.call(this) || this;
				return n.HBZ = e, n
			}

			return dt(n, t), n.prototype.txL = function () {
				return this.aKy
			}, n.prototype.UgU = function () {
				return this.DHA
			}, n.prototype.eSF = function (t) {
				this.aKy.eSF(t)
			}, n.prototype.yVD = function () {
				var t = this;
				e.AFu(this.Dyc, "jsplus_ui_bootstrap_panel_col_width_format"), this.Yov = document.createElement("div");
				var n = this.tJh.FKy();
				this.aKy = new r.jgn(n.Tec(this.HBZ)), this.aKy.Uus(function (e) {
					t.ZFR()
				}), this.Yov.appendChild(this.aKy.uRJ()), this.DHA = new r.jgn(n.Tec(this.HBZ), 0, 12), this.DHA.Uus(function (e) {
					t.ZFR()
				}), this.Yov.appendChild(this.DHA.uRJ()), this.yoR = new o.pZX(null, n.QAt(this.HBZ), "", null, null, function (e) {
					t.ZFR()
				}), this.yoR.LRl("visible"), e.DEw(this.yoR.sra(), "padding-top", "3px"), n.EXg() === i.FqQ && this.yoR.kjD(), this.Yov.appendChild(this.yoR.uRJ()), this.wal.appendChild(this.Yov)
			}, n.prototype.inc = function () {
				var t = this.tJh.FKy();
				this.aKy.INK(t.BjS(this.HBZ)), this.DHA.INK(t.Tec(this.HBZ)), this.yoR.pKG(t.QAt(this.HBZ))
			}, n.prototype.ZFR = function () {
				if (this.aKy && this.DHA && this.yoR) {
					var t = this.tJh.FKy();
					t.FMv(this.HBZ, this.aKy.FKy()), t.taX(this.HBZ, this.DHA.FKy()), t.evv(this.HBZ, this.yoR.STL()), this.xXE.FUx()
				}
			}, n
		}(l.lKT);
		t.pQa = p;
		var a = function (e) {
			function o(t) {
				var i = e.call(this, 100, 1e3) || this;
				return i.TJV = null, i.iNq = [], i.OTu = !1, n.ZoU(), i.rwy = t, i
			}

			return dt(o, e), o.prototype.MBq = function () {
				e.prototype.MBq.call(this), this.TJV.className = "jsplus_theme jsplus_ui_bootstrap_panel_col_width_format"
			}, o.prototype.Auj = function () {
				for (var e = [new u.yUA("title", "<div class='jsplus_ui_bootstrap_panel_col_width_title'>" + t.vAL.width + "</div><div class='jsplus_ui_bootstrap_panel_col_width_title'>" + t.vAL.offset + "</div>", {
					type: "html",
					oEt: !1
				})], n = 0, o = i.bat(this.rwy.EXg()); n < o.length; n++) {
					var r = o[n];
					e.push(new u.yUA("format_" + r, this.rwy, {yBE: i.vAL["format_" + r], FaY: new p(r)}))
				}
				return e
			}, o.prototype.FUx = function () {
				if (!this.OTu) {
					this.OTu = !0;
					var t = i.bat(this.rwy.EXg()), e = 0;
					if (this.iNq.length === t.length + 1) for (var n = 0; n < t.length; n++) -1 === this.rwy.BjS(t[n]) && this.iNq[n + 1].txL().KSN(this.rwy.KQx(t[n])), -1 === this.rwy.Tec(t[n]) && this.iNq[n + 1].UgU().KSN(this.rwy.kvx(t[n])), this.rwy.BjS(t[n]) > 0 && e++;
					for (n = 0; n < t.length; n++) {
						var o = this.iNq[n + 1];
						e < 2 ? o.eSF(o.txL().FKy() < 1) : o.eSF(!0)
					}
					this.OTu = !1
				}
			}, o
		}(s.HeK);
		t.Zam = a;
		var c = function (t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}

			return dt(e, t), e.prototype.yVD = function () {
				this.Yov = document.createElement("div"), this.wal.appendChild(this.Yov), this.aMp = new a(this.tJh.FKy()), this.Yov.appendChild(this.aMp.uRJ()), this.awL(!1)
			}, e.prototype.qqM = function (t) {
				this.aMp.qqM(t)
			}, e.prototype.UKi = function (t) {
				this.aMp.UKi(t)
			}, e.prototype.inc = function () {
				this.cnL.textContent = this.tJh.MbD
			}, e.prototype.HsC = function () {
				return this.tJh.FKy()
			}, e
		}(l.lKT);
		t.RYZ = c, s.Efd.bootstrap_col_width = function () {
			return new c
		};
		var f = function (t) {
			function e(e, n, o) {
				return void 0 === n && (n = 100), void 0 === o && (o = 1e3), t.call(this, e, n, o - (e.EXg() === i.FqQ ? 45 : 0)) || this
			}

			return dt(e, t), e.prototype.Pge = function () {
				return ["bootstrap_col_width", "c_hidden-print", "!a_class", "!a_style", "!attributes", "ha_bootstrap_editor_col", "hc_bootstrap_editor_col"]
			}, e
		}(h.kpn);
		return t.Xdq = f, t.vAL = {width: "Width", offset: "Offset"}, t
	}(D, n, p, h, O, C, J, N, L, B), S = function (t) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var e = function () {
			function t() {
			}

			return t.prototype.qKQ = function (t, e) {
				return !(t !== s.ozE && t !== s.YBF && t !== s.Lsc || e !== s.YBF && e !== s.Lsc)
			}, t.prototype.wmM = function (t, e, n) {
				return []
			}, t.prototype.kbG = function (t, e, n) {
			}, t.prototype.Hpo = function (t, e, n) {
				n.Ewh = n.Ewh.parentNode.removeChild(n.Ewh), e === s.YBF ? n.gvC.parentNode.insertBefore(n.Ewh, n.gvC) : n.gvC.parentNode.insertBefore(n.Ewh, n.gvC.nextSibling)
			}, t
		}(), n = function () {
			function t() {
			}

			return t.prototype.qKQ = function (t, e) {
				return (t === s.ozE || t === s.YBF || t === s.Lsc) && e === s.YAU
			}, t.prototype.wmM = function (t, e, n) {
				return []
			}, t.prototype.kbG = function (t, e, n) {
				t === s.Lsc ? (n.jNT[1] = n.jNT[0], n.Kwx[1] = n.Kwx[0], n.jNT[0] = "", n.Kwx[0] = !0) : (n.jNT[1] = "", n.Kwx[1] = !0)
			}, t.prototype.Hpo = function (t, e, n) {
				n.Ewh.parentNode.removeChild(n.Ewh), n.Ewh = document.createElement("label"), n.gvC.parentNode.insertBefore(n.Ewh, n.gvC), n.gvC = n.gvC.parentNode.removeChild(n.gvC), n.Kwx[0] ? n.Ewh.textContent = n.jNT[0] : n.Ewh.innerHTML = n.jNT[0], n.Ewh.appendChild(n.gvC), n.HEZ = n.gvC
			}, t
		}(), i = function () {
			function t() {
			}

			return t.prototype.qKQ = function (t, e) {
				return (t === s.ozE || t === s.YBF || t === s.Lsc || t === s.YAU) && e === s.UeK
			}, t.prototype.wmM = function (t, e, n) {
				return ["This is not recommended type of label, prefer wrapping label instead this type wherever it is possible. All HTML content will be converted to text."]
			}, t.prototype.kbG = function (t, e, n) {
				t === s.YBF || t === s.ozE ? (n.Kwx[0] || (n.jNT[0] = u(n.jNT[0])), n.jNT[1] = "") : t === s.Lsc ? (n.jNT[0] = "", n.Kwx[1] || (n.jNT[1] = u(n.jNT[1]))) : t === s.YAU && (n.Kwx[0] || (n.jNT[0] = u(n.jNT[0])), n.Kwx[1] || (n.jNT[1] = u(n.jNT[1]))), n.Kwx[0] = !0, n.Kwx[1] = !0, n.HEZ = n.gvC
			}, t.prototype.Hpo = function (t, e, n) {
				t !== s.YAU || (n.gvC = n.gvC.parentNode.removeChild(n.gvC), n.Ewh.parentNode.insertBefore(n.gvC, n.Ewh), n.HEZ = n.gvC), n.Ewh.parentNode.removeChild(n.Ewh), n.Ewh = null;
				var i = n.gvC.previousSibling;
				null == i || 3 !== i.nodeType ? (i = document.createTextNode(n.jNT[0]), n.gvC.parentNode.insertBefore(i, n.gvC)) : (n.jNT[0] = i.textContent + n.jNT[0], i.textContent = n.jNT[0]), null == (i = n.gvC.nextSibling) || 3 !== i.nodeType ? (i = document.createTextNode(n.jNT[1]), n.gvC.parentNode.insertBefore(i, n.gvC.nextSibling)) : (n.jNT[1] = n.jNT[1] + i.textContent, i.textContent = n.jNT[1])
			}, t
		}(), o = function () {
			function t() {
			}

			return t.prototype.qKQ = function (t, e) {
				return t === s.YAU && (e === s.YBF || e === s.Lsc)
			}, t.prototype.wmM = function (t, e, n) {
				var i = [];
				return n.jNT[0].trim().length > 0 && null != n.jNT[1] && n.jNT[1].trim().length > 0 && (e === s.YBF ? i.push("Right label content will be dropped, only the left one will be used.") : i.push("Left label content will be dropped, only the right one will be used.")), n.HEZ !== n.gvC && i.push("Input inside the label has complicated nested structure: all wrapping tags will be dropped."), null == n.gvC.id && i.push("There is no ID in input but it is required to link with label (will be created automatically)."), i
			}, t.prototype.kbG = function (t, e, n) {
				e === s.YBF ? 0 === n.jNT[0].trim().length && (n.jNT[0] = n.jNT[1], n.Kwx[0] = n.Kwx[1]) : null != n.jNT[1] && n.jNT[1].trim().length > 0 && (n.jNT[0] = n.jNT[1], n.Kwx[0] = n.Kwx[1]), n.jNT[1] = null, n.Kwx[1] = !0
			}, t.prototype.Hpo = function (t, e, n) {
				n.gvC = n.gvC.parentNode.removeChild(n.gvC), e === s.YBF ? n.Ewh.parentNode.insertBefore(n.gvC, n.Ewh.nextSibling) : n.Ewh.parentNode.insertBefore(n.gvC, n.Ewh), n.Kwx[0] ? n.Ewh.textContent = n.jNT[0] : n.Ewh.innerHTML = n.jNT[0], n.Ewh.setAttribute("for", s.lbI(n.gvC)), n.HEZ = n.gvC
			}, t
		}(), r = function () {
			function t() {
			}

			return t.prototype.qKQ = function (t, e) {
				return t === s.UeK && (e === s.YBF || e === s.Lsc || e === s.YAU)
			}, t.prototype.wmM = function (t, e, n) {
				var i = [];
				return n.jNT[0].trim().length > 0 && null != n.jNT[1] && n.jNT[1].trim().length > 0 && (e === s.YBF ? i.push("Right label content will be dropped, only the left one will be used.") : e === s.Lsc && i.push("Left label content will be dropped, only the right one will be used.")), null == n.gvC.id && i.push("There is no ID in input but it is required to link with label (will be created automatically)."), i
			}, t.prototype.kbG = function (t, e, n) {
				e === s.YBF ? (0 === n.jNT[0].trim().length && (n.jNT[0] = n.jNT[1], n.Kwx[0] = n.Kwx[1]), n.jNT[1] = null, n.Kwx[1] = !0) : e === s.Lsc && (n.jNT[1].trim().length > 0 && (n.jNT[0] = n.jNT[1], n.Kwx[0] = n.Kwx[1]), n.jNT[1] = null, n.Kwx[1] = !0)
			}, t.prototype.Hpo = function (t, e, n) {
				var i = n.gvC.previousSibling;
				3 === i.nodeType && i.parentNode.removeChild(i), 3 === (i = n.gvC.nextSibling).nodeType && i.parentNode.removeChild(i), n.Ewh = document.createElement("label"), e === s.YAU ? (n.Ewh.textContent = n.jNT[0], n.gvC = n.gvC.parentNode.removeChild(n.gvC), n.Ewh.appendChild(n.gvC), n.Ewh.appendChild(document.createTextNode(n.jNT[1]))) : (n.Ewh.textContent = n.jNT[0], e === s.YBF ? n.gvC.parentNode.insertBefore(n.Ewh, n.gvC) : n.gvC.parentNode.insertBefore(n.Ewh, n.gvC.nextSibling)), n.Ewh.setAttribute("for", s.lbI(n.gvC))
			}, t
		}(), s = function () {
			function t(e, n) {
				if (void 0 === n && (n = null), this.gvC = null, this.Ewh = null, this.HEZ = null, this.jLH = null, this.VcW = null, this.Kwx = null, this.jNT = null, this.gvC = e, null == n && (n = t.Qtk(e)), this.Ewh = n, this.HEZ = e, this.Kwx = [!0, !0], this.jNT = [null, null], null != n) {
					for (var i = e.previousSibling; null != i && 3 === i.nodeType && 0 === i.textContent.trim().length;) i = i.previousSibling;
					for (var o = e.nextSibling; null != o && 3 === o.nodeType && 0 === o.textContent.trim().length;) o = o.nextSibling;
					if (i === n) this.jLH = t.YBF, this.jNT[0] = ""; else if (o === n) this.jLH = t.Lsc, this.jNT[0] = ""; else {
						for (var r = !1, s = e; null != s && !r;) s.parentNode === n ? (r = !0, this.HEZ = s) : s = s.parentNode;
						if (this.jLH = r ? t.YAU : t.ozE, this.jNT[0] = "", this.jLH === t.YAU) for (this.jNT[1] = ""; this.HEZ.parentNode !== this.Ewh;) this.HEZ = this.HEZ.parentNode
					}
					for (var u = [[], []], l = n.childNodes, h = 0, p = 0; p < l.length; p++) l[p] === this.HEZ ? h = 1 : (u[h].push(l[p]), 3 !== l[p].nodeType && (this.Kwx[h] = !1));
					for (var a = 0; a <= 1; a++) if (u[a].length > 0) {
						var c = document.createElement("div");
						for (p = 0; p < u[a].length; p++) {
							var f = u[a][p];
							c.appendChild(f.cloneNode(!0))
						}
						this.jNT[a] = this.Kwx[a] ? c.textContent : c.innerHTML
					}
				} else {
					this.jLH = t.UeK;
					for (u = [e.previousSibling, e.nextSibling], h = 0; h <= 1; h++) this.jNT[h] = "", null != u[h] && 3 === u[h].nodeType && (this.jNT[h] = u[h].textContent)
				}
				this.VcW = this.jLH
			}

			return t.prototype.HIS = function () {
				var e = new t(this.gvC, this.Ewh);
				return e.HEZ = this.HEZ, e.jLH = this.jLH, e.VcW = this.VcW, e.Kwx = this.Kwx, e.jNT = [this.jNT[0], this.jNT[1]], e
			}, t.prototype.DuP = function (t) {
				return this.gvC === t.gvC && this.Ewh === t.Ewh && this.HEZ === t.HEZ && this.jLH === t.jLH && this.VcW === t.VcW && this.Kwx === t.Kwx && this.jNT[0] === t.jNT[0] && this.jNT[1] === t.jNT[1]
			}, t.prototype.cXk = function () {
				return null == this.jNT[1] ? 1 : 2
			}, t.Qtk = function (t) {
				var e = t.getAttribute("id");
				if (e && e.length > 0) for (var n = document.getElementsByTagName("label"), i = 0; i < n.length; i++) if (n[i].getAttribute("for") === e) return n[i];
				for (var o = t; null != o;) if ((o = o.parentNode) && "LABEL" === o.tagName) return o;
				return null
			}, t.xLp = function (e, n) {
				for (var i = 0, o = t.KrE; i < o.length; i++) {
					var r = o[i];
					if (r.qKQ(e, n)) return r
				}
				return null
			}, t.prototype.wmM = function () {
				return this.VcW === this.jLH ? [] : t.xLp(this.VcW, this.jLH).wmM(this.VcW, this.jLH, this)
			}, t.prototype.FZk = function (e) {
				var n = t.xLp(this.jLH, e);
				if (null != n) n.kbG(this.jLH, e, this), this.jLH = e; else if (this.jLH !== e) throw"Unable to find suitable label converter."
			}, t.prototype.MSy = function (e, n) {
				this.jLH !== t.UeK && (this.Kwx[e] = n, n && (this.jNT[e] = u(this.jNT[e])))
			}, t.prototype.oQo = function (t, e) {
				this.jNT[t] = e
			}, t.prototype.Hpo = function () {
				if (this.VcW !== this.jLH) {
					var e = t.xLp(this.VcW, this.jLH);
					null != e && (e.Hpo(this.VcW, this.jLH, this), this.VcW = this.jLH)
				}
				if (this.jLH === t.ozE || this.jLH === t.YBF || this.jLH === t.Lsc) this.Kwx[0] ? this.Ewh.textContent = this.jNT[0] : this.Ewh.innerHTML = this.jNT[0]; else if (this.jLH === t.YAU) if (this.HEZ = this.Ewh.removeChild(this.HEZ), this.Kwx[0] ? this.Ewh.textContent = this.jNT[0] : this.Ewh.innerHTML = this.jNT[0], this.Ewh.appendChild(this.HEZ), this.Kwx[1]) this.Ewh.appendChild(document.createTextNode(this.jNT[1])); else {
					var n = document.createElement("div");
					for (n.innerHTML = this.jNT[1]; n.childNodes.length > 0;) this.Ewh.appendChild(n.removeChild(n.childNodes[0]))
				} else if (this.jLH === t.UeK) {
					var i = this.gvC.previousSibling;
					3 !== i.nodeType ? (i = document.createTextNode(this.jNT[0]), this.gvC.parentNode.insertBefore(i, this.gvC)) : i.textContent = this.jNT[0], 3 !== (i = this.gvC.nextSibling).nodeType ? (i = document.createTextNode(this.jNT[1]), this.gvC.parentNode.insertBefore(i, this.gvC.nextSibling)) : i.textContent = this.jNT[1]
				}
			}, t.prototype.vww = function (e) {
				for (var n = this.VcW, i = [], o = 0, r = [t.ozE, t.YBF, t.Lsc, t.YAU, t.UeK]; o < r.length; o++) {
					var s = r[o];
					(e && s === n || null != t.xLp(n, s)) && i.push(s)
				}
				return i
			}, t.lbI = function (t) {
				var e = t.id;
				if (null == e || 0 === e.trim().length) {
					for (var n = 0, i = !0; i;) n++, null == document.getElementById("input-" + n) && (i = !1);
					e = "input-" + n, t.id = e
				}
				return e
			}, t.ozE = 0, t.YBF = 1, t.Lsc = 2, t.YAU = 3, t.UeK = 4, t.KrE = [new e, new n, new i, new o, new r], t
		}();

		function u(t) {
			var e = document.createElement("div");
			return e.innerHTML = t, e.textContent
		}

		return t.PIy = s, t
	}(S);
	var Bt;
	dt = this && this.__extends || (Bt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Bt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	z = function (t, e, n, i, o, r, s, u) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var l = function (t) {
			function e(e, n, i) {
				void 0 === i && (i = null);
				var o = t.call(this, n, null, {}) || this;
				return o.kpB = !1, o.TJV = null, o.Ehs = null, o.rOo = i, null == o.rOo && (o.rOo = [null, r.uau, r.FqQ, r.ZJy, r.EoP]), o.TJV = e, o
			}

			return dt(e, t), e.prototype.Vjm = function () {
				return this.kpB
			}, e.prototype.rtf = function (t) {
				this.kpB = t
			}, e.prototype.mdE = function () {
				this.qLm(), this.JAt()
			}, e.prototype.JAt = function () {
				if (null != this.HeO) if ("[object Array]" === Object.prototype.toString.call(this.HeO)) {
					this.Ehs = [];
					for (var t = 0; t < this.HeO.length; t++) {
						var e = this.HeO[t].slice(0);
						if ("[object Array]" === Object.prototype.toString.call(e)) {
							for (var n = [], i = 0; i < this.HeO.length; i++) n.push(this.HeO[t][i].slice(0));
							this.Ehs.push(n)
						} else this.Ehs.push(e)
					}
				} else this.Ehs = this.HeO; else this.Ehs = null
			}, e.prototype.SpU = function () {
				if ("[object Array]" === Object.prototype.toString.call(this.HeO)) {
					if (this.Ehs.length !== this.HeO.length) return !0;
					for (var t = 0; t < this.HeO.length; t++) if ("[object Array]" === Object.prototype.toString.call(this.HeO[t])) {
						for (var e = 0; e < this.HeO[t].length; e++) if (this.HeO[t][e] !== this.Ehs[t][e]) return !0
					} else if (this.HeO[t] !== this.Ehs[t]) return !0;
					return !1
				}
				return this.HeO !== this.Ehs
			}, e.prototype.Jfm = function () {
				return this.rOo
			}, e
		}(i.yUA);
		t.DGm = l;
		var h = function (t) {
			function n(e, n, i, o, r, s) {
				void 0 === r && (r = null), void 0 === s && (s = null);
				var u = t.call(this, e, n, s) || this;
				u.kOV = [];
				for (var l = 0; l < i.length; l++) null == i[l][0] && (i[l][0] = "-"), u.kOV.push(i[l][0]);
				return u.zek = {type: "select", yBE: o, qem: i}, null != r && (u.zek.aKy = r), u
			}

			return dt(n, t), n.prototype.tyV = function () {
				return []
			}, n.prototype.ZaZ = function () {
				return this.kOV
			}, n.prototype.nnK = function () {
				return []
			}, n.prototype.qLm = function () {
				for (var t = 0, n = this.kOV; t < n.length; t++) {
					var i = n[t];
					if (e.cVp(this.TJV, i)) return void(this.HeO = i)
				}
				this.HeO = "-"
			}, n.prototype.ZFR = function () {
				for (var t = 0, n = this.kOV; t < n.length; t++) {
					var i = n[t];
					e.GTY(this.TJV, i, this.HeO === i && "-" !== i)
				}
			}, n
		}(l);
		t.AVj = h;
		var p = function (t) {
			function n(e, n, i, o, r, s) {
				void 0 === r && (r = null), void 0 === s && (s = null);
				var u = t.call(this, e, "c_" + n, s) || this;
				return u.sEa = o, u.zek = {type: "checkbox", yBE: i}, null != r && (u.zek.puR = r), u
			}

			return dt(n, t), n.prototype.kPq = function () {
				return this.eaF.substr(2)
			}, n.prototype.tyV = function () {
				return []
			}, n.prototype.ZaZ = function () {
				return [this.kPq()]
			}, n.prototype.nnK = function () {
				return []
			}, n.prototype.qLm = function () {
				this.sEa ? this.HeO = e.cVp(this.TJV, this.kPq()) : this.HeO = !e.cVp(this.TJV, this.kPq())
			}, n.prototype.ZFR = function () {
				this.sEa ? !0 === this.HeO ? e.AFu(this.TJV, this.kPq()) : e.LfB(this.TJV, this.kPq()) : !0 === this.HeO ? e.LfB(this.TJV, this.kPq()) : e.AFu(this.TJV, this.kPq())
			}, n
		}(l);
		t.WMS = p;
		var a = function (t) {
			function n(e, n) {
				var i = t.call(this, e, "hc_" + n) || this;
				return i.zek = {type: "hidden"}, i
			}

			return dt(n, t), n.prototype.qLm = function () {
				var t = e.MGG(this.TJV);
				this.HeO = [];
				for (var n = 0, i = t; n < i.length; n++) {
					var o = i[n];
					this.ZaZ().indexOf(o) > -1 && this.HeO.push(o)
				}
			}, n.prototype.ZFR = function () {
				for (var t = e.MGG(this.TJV), n = 0, i = this.HeO; n < i.length; n++) {
					var o = i[n];
					t.push(o)
				}
				e.jjU(this.TJV, t)
			}, n.prototype.tyV = function () {
				return []
			}, n.prototype.nnK = function () {
				return []
			}, n
		}(l);
		t.xKD = a;
		var c = function (t) {
			function n(e, n) {
				var i = t.call(this, e, "ha_" + n) || this;
				return i.HeO = {}, i.zek = {type: "hidden"}, i
			}

			return dt(n, t), n.prototype.qLm = function () {
				var t = e.Bmy(this.TJV);
				this.HeO = {};
				for (var n in t) this.tyV().indexOf(n) > -1 && (this.HeO[n] = t[n])
			}, n.prototype.ZFR = function () {
				var t = e.Bmy(this.TJV), n = [];
				for (var i in t) (-1 === this.tyV().indexOf(i) || i in this.HeO) && n.push([i, t[i]]);
				e.Nla(this.TJV, n)
			}, n.prototype.nnK = function () {
				return []
			}, n.prototype.ZaZ = function () {
				return []
			}, n
		}(l);
		t.VZZ = c;
		var f = function (t) {
			function e(e) {
				return t.call(this, e, "bootstrap_editor_col") || this
			}

			return dt(e, t), e.prototype.tyV = function () {
				return ["data-be-plugin", "contenteditable", "tabindex", "spellcheck", "role", "aria-label", "aria-describedby"]
			}, e
		}(c);
		t.TsA = f;
		var d = function (t) {
			function e(e) {
				return t.call(this, e, "bootstrap_editor_col") || this
			}

			return dt(e, t), e.prototype.ZaZ = function () {
				return ["cke_editable", "cke_editable_inline", "cke_contents_ltr", "cke_contents_rtl", "cke_show_borders", "cke_focus", "mce-edit-focus", "mce-content-body"]
			}, e
		}(a);
		t.IvZ = d;
		var v = function (t) {
			function e(e) {
				return t.call(this, e, "bootstrap_editor_row") || this
			}

			return dt(e, t), e.prototype.ZaZ = function () {
				return ["row", "jsplus_bootstrap_editor_flexbox", "jsplus_bootstrap_editor_flexbox_", "jsplus_bootstrap_editor_flexbox_xs", "jsplus_bootstrap_editor_flexbox_sm", "jsplus_bootstrap_editor_flexbox_md", "jsplus_bootstrap_editor_flexbox_lg", "jsplus_bootstrap_editor_flexbox_xl"]
			}, e.prototype.tyV = function () {
				return ["data-mce-style"]
			}, e
		}(a);
		t.oRP = v;
		var y = function (t) {
			function e(e, n) {
				return t.call(this, e, "a_" + n) || this
			}

			return dt(e, t), e.prototype.Hop = function () {
				return this.eaF.substr(2)
			}, e.prototype.tyV = function () {
				return [this.Hop()]
			}, e.prototype.ZaZ = function () {
				return []
			}, e.prototype.nnK = function () {
				return []
			}, e
		}(l);
		t.wTX = y;
		var _ = function (t) {
			function e(e, n) {
				var i = t.call(this, null, e) || this;
				return i.zek = {type: "title", yBE: n}, i
			}

			return dt(e, t), e.prototype.qLm = function () {
			}, e.prototype.ZFR = function () {
			}, e.prototype.tyV = function () {
				return []
			}, e.prototype.ZaZ = function () {
				return []
			}, e.prototype.nnK = function () {
				return []
			}, e
		}(l);
		t.rgY = _;
		var g = function (t) {
			function e(e, n, i) {
				var o = t.call(this, e, n) || this;
				return o.zek = {type: "textbox", yBE: i}, o
			}

			return dt(e, t), e.prototype.qLm = function () {
				this.HeO = this.TJV.getAttribute(this.Hop()) ? this.TJV.getAttribute(this.Hop()) : ""
			}, e.prototype.ZFR = function () {
				this.HeO.length > 0 ? this.TJV.setAttribute(this.Hop(), this.HeO) : this.TJV.removeAttribute(this.Hop())
			}, e
		}(y);
		t.fKa = g;
		var m = function (e) {
			function n(n, i, o, r) {
				var l = e.call(this, n, i) || this;
				return l.zek = {
					type: "textbox_with_button", yBE: o, ZXc: t.vAL.browse, OTj: 80, yst: function () {
						if (s.XQI.exists("openFileManager")) {
							var e = s.XQI.get("openFileManager"), n = [];
							n.onOk = function (t) {
								l.INK(t[0].path)
							}, n.multiSelect = !1, n.selectedFile = l.FKy(), e(r, n)
						} else new u.EHw({content: t.vAL.installFileManager}).Zbq()
					}
				}, l
			}

			return dt(n, e), n.prototype.qLm = function () {
				this.HeO = this.TJV.getAttribute(this.Hop()) ? this.TJV.getAttribute(this.Hop()) : ""
			}, n.prototype.ZFR = function () {
				this.HeO.length > 0 ? this.TJV.setAttribute(this.Hop(), this.HeO) : this.TJV.removeAttribute(this.Hop())
			}, n.prototype.tyV = function () {
				return [this.Hop(), "data-cke-saved-src"]
			}, n
		}(y);
		t.vsn = m;
		var w = function (t) {
			function e(e, n, i) {
				var o = t.call(this, e, n) || this;
				return o.zek = {type: "checkbox", yBE: i}, o
			}

			return dt(e, t), e.prototype.qLm = function () {
				this.HeO = this.TJV.getAttribute(this.Hop())
			}, e.prototype.ZFR = function () {
				this.HeO ? this.TJV.setAttribute(this.Hop(), this.HeO) : this.TJV.removeAttribute(this.Hop())
			}, e
		}(y);
		t.DcH = w;
		var b = function (t) {
			function e(e, n, i) {
				var o = t.call(this, e, n) || this;
				return o.zek = {type: "textbox", Vcu: "number", yBE: i, fCr: !0}, o
			}

			return dt(e, t), e.prototype.qLm = function () {
				this.HeO = parseInt(this.TJV.getAttribute(this.Hop()))
			}, e.prototype.ZFR = function () {
				this.HeO.length > 0 ? this.TJV.setAttribute(this.Hop(), this.HeO) : this.TJV.removeAttribute(this.Hop())
			}, e
		}(y);
		t.tde = b;
		var E = function (t) {
			function e(e, n, i) {
				var o = t.call(this, e, n) || this;
				return o.zek = {type: "textbox", Vcu: "number", yBE: i, fCr: !0}, o
			}

			return dt(e, t), e.prototype.qLm = function () {
				var t = parseInt(this.TJV.getAttribute(this.Hop()));
				isNaN(t) || t < 0 ? this.HeO = 0 : this.HeO = t
			}, e.prototype.ZFR = function () {
				this.HeO.length > 0 ? this.TJV.setAttribute(this.Hop(), this.HeO) : this.TJV.removeAttribute(this.Hop())
			}, e
		}(y);
		t.ETM = E;
		var T = function (n) {
			function i(e) {
				var i = n.call(this, e, "attributes") || this;
				return i.uQz = [], i.zek = {type: "attributes", yBE: t.vAL.attributes}, i
			}

			return dt(i, n), i.prototype.CHS = function (t) {
				this.uQz = t, this.qLm()
			}, i.prototype.Gxx = function () {
				return this.uQz
			}, i.prototype.qLm = function () {
				var t = e.Bmy(this.TJV, this.uQz);
				this.HeO = [];
				for (var n in t) this.HeO.push([n, t[n]])
			}, i.prototype.ZFR = function () {
				e.Nla(this.TJV, this.HeO, this.uQz)
			}, i.prototype.tyV = function () {
				return []
			}, i.prototype.ZaZ = function () {
				return []
			}, i.prototype.nnK = function () {
				return []
			}, i
		}(l);
		t.jCf = T;
		var j = function (n) {
			function i(e) {
				var i = n.call(this, e, "class") || this;
				return i.uQz = [], i.zek = {type: "classes", yBE: t.vAL.classes}, i
			}

			return dt(i, n), i.prototype.CHS = function (t) {
				this.uQz = t, this.qLm()
			}, i.prototype.Gxx = function () {
				return this.uQz
			}, i.prototype.qLm = function () {
				var t = e.MGG(this.TJV);
				this.HeO = [];
				for (var n = 0, i = t; n < i.length; n++) {
					var o = i[n];
					-1 === this.uQz.indexOf(o) && this.HeO.push(o)
				}
			}, i.prototype.ZFR = function () {
				for (var t = [], n = 0, i = this.HeO; n < i.length; n++) {
					var o = i[n];
					-1 === this.uQz.lastIndexOf(o) && t.push(o)
				}
				e.jjU(this.TJV, t)
			}, i
		}(y);
		t.qoH = j;
		var x = function (n) {
			function i(e) {
				var i = n.call(this, e, "style") || this;
				return i.uQz = [], i.zek = {type: "styles", yBE: t.vAL.styles}, i
			}

			return dt(i, n), i.prototype.CHS = function (t) {
				this.uQz = t
			}, i.prototype.Gxx = function () {
				return this.uQz
			}, i.prototype.qLm = function () {
				var t = e.zDN(this.TJV);
				this.HeO = [];
				for (var n in t) this.HeO.push([n, t[n]])
			}, i.prototype.ZFR = function () {
				for (var t = {}, n = 0, i = this.HeO; n < i.length; n++) {
					var o = i[n];
					-1 === this.uQz.indexOf(o[0]) && (t[o[0]] = o[1])
				}
				e.oCF(this.TJV, t)
			}, i
		}(y);
		t.vgJ = x;
		var A = function (t) {
			function e(e) {
				var n = t.call(this, e, "label") || this;
				return n.HeO = null, n.zek = {type: "label"}, n
			}

			return dt(e, t), e.prototype.qLm = function () {
				this.HeO = new n.PIy(this.TJV)
			}, e.prototype.ZFR = function () {
				this.HeO.Hpo()
			}, e.prototype.JAt = function () {
				this.Ehs = this.HeO.HIS()
			}, e.prototype.SpU = function () {
				return this.HeO.DuP(this.Ehs)
			}, e.prototype.tyV = function () {
				return []
			}, e.prototype.ZaZ = function () {
				return []
			}, e.prototype.nnK = function () {
				return []
			}, e
		}(l);
		t.JWc = A;
		var O = function (e) {
			function n(n) {
				var i = e.call(this, n, "text") || this;
				return i.zek = {type: "textarea", yBE: t.vAL.text}, i
			}

			return dt(n, e), n.prototype.qLm = function () {
				this.HeO = this.TJV.textContent
			}, n.prototype.ZFR = function () {
				this.TJV.textContent = this.HeO
			}, n.prototype.tyV = function () {
				return []
			}, n.prototype.ZaZ = function () {
				return []
			}, n.prototype.nnK = function () {
				return []
			}, n
		}(l);
		t.xZG = O;
		var C = function (t) {
			function e(e, n) {
				var i = t.call(this, e, "bootstrap_col_width") || this;
				return i.HeO = null, i.zek = {type: "bootstrap_col_width"}, i.kNA = n, i
			}

			return dt(e, t), e.prototype.qLm = function () {
				this.HeO = new o.ddu(this.TJV, this.kNA)
			}, e.prototype.ZFR = function () {
				this.HeO.Hpo()
			}, e.prototype.JAt = function () {
			}, e.prototype.SpU = function () {
				return this.HeO.SpU()
			}, e.prototype.tyV = function () {
				return []
			}, e.prototype.ZaZ = function () {
				return r.NZI(this.kNA)
			}, e.prototype.nnK = function () {
				return []
			}, e
		}(l);
		return t.lmf = C, t.vAL = {
			attributes: "Attributes",
			classes: "Classes",
			styles: "Styles",
			text: "Text",
			no: "No",
			hide_for_up: "Hide for ↑",
			hide_for_down: "Hide for ↓",
			and_smaller: "and smaller",
			and_larger: "and larger",
			browse: "Browse...",
			installFileManager: "Install JS+ File Manager to use this feature"
		}, t
	}(z, n, S, N, h, h, f, y);
	var Dt;
	dt = this && this.__extends || (Dt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Dt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	U = function (t, e, n) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var i = function () {
			function t(t, e) {
				this.kNA = null, this.TJV = null, this.lwO = -1, this.SsC = null, this.rHK = [], this.TJV = t, this.lwO = t.nodeType, this.kNA = e
			}

			return t.prototype.Mqu = function () {
				return []
			}, t.prototype.BPv = function (t) {
				null == this.SsC && (this.SsC = this.Mqu()), this.rHK = [];
				for (var n = 0, i = 0, o = t; i < o.length; i++) {
					var r = !1, s = o[i];
					if ("!" === s.substr(0, 1) && (r = !0, s = s.substr(1)), s.length > 0 && "#" === s.charAt(0)) {
						n++;
						var u = new e.rgY("title_" + n, s.substr(1));
						u.rtf(r), this.rHK.push(u)
					} else for (var l = 0, h = this.SsC; l < h.length; l++) {
						(c = h[l]).eaF === s && c.Jfm().indexOf(this.kNA) > -1 && (c.rtf(r), this.rHK.push(c))
					}
				}
				this.qLm();
				for (var p = 0, a = this.rHK; p < a.length; p++) {
					var c;
					"attributes" === (c = a[p]).eaF && c.CHS(this.xGG()), "a_class" === c.eaF && c.CHS(this.JcX()), "a_style" === c.eaF && c.CHS(this.KvJ())
				}
				return this.rHK
			}, t.prototype.tPU = function () {
				return this.rHK
			}, t.prototype.Kga = function (t) {
				for (var e = 0, n = this.tPU(); e < n.length; e++) {
					var i = n[e];
					if (i.eaF === t) return i
				}
				return null
			}, t.prototype.qLm = function () {
				for (var t = 0, e = this.SsC; t < e.length; t++) {
					e[t].qLm()
				}
			}, t.prototype.ZFR = function () {
				var t = this.Kga("attributes");
				null != t && t.ZFR(), null != (t = this.Kga("a_class")) && t.ZFR(), null != (t = this.Kga("a_style")) && t.ZFR();
				for (var e = 0, n = this.rHK; e < n.length; e++) {
					var i = n[e];
					"attributes" !== i.eaF && "a_class" !== i.eaF && "a_style" !== i.eaF && i.ZFR()
				}
			}, t.prototype.eLp = function () {
				for (var t = {attributes: [], classes: [], styles: []}, e = 0, n = this.rHK; e < n.length; e++) {
					for (var i = n[e], o = i.tyV(), r = 0, s = o; r < s.length; r++) {
						var u = s[r];
						-1 === t.attributes.indexOf(u) && t.attributes.push(u)
					}
					for (var l = 0, h = o = i.ZaZ(); l < h.length; l++) {
						u = h[l];
						-1 === t.classes.indexOf(u) && t.classes.push(u)
					}
					for (var p = 0, a = o = i.nnK(); p < a.length; p++) {
						u = a[p];
						-1 === t.styles.indexOf(u) && t.styles.push(u)
					}
				}
				return t
			}, t.prototype.xGG = function () {
				return this.eLp().attributes
			}, t.prototype.JcX = function () {
				return this.eLp().classes
			}, t.prototype.KvJ = function () {
				return this.eLp().styles
			}, t
		}();
		t.nxY = i;
		var o = function (n) {
			function i() {
				return null !== n && n.apply(this, arguments) || this
			}

			return dt(i, n), i.prototype.Mqu = function () {
				var i = n.prototype.Mqu.call(this);
				return i.push(new e.fKa(this.TJV, "id", t.vAL.id)), i.push(new e.fKa(this.TJV, "title", t.vAL.title)), i.push(new e.jCf(this.TJV)), i
			}, i.prototype.EXg = function () {
				return this.kNA
			}, i
		}(i);
		t.xPy = o;
		var r = function (t) {
			function n(n, i, o) {
				var r = t.call(this, n, o) || this;
				return i && r.SsC.push(new e.JWc(r.TJV)), r
			}

			return dt(n, t), n.prototype.Mqu = function () {
				var n = t.prototype.Mqu.call(this);
				return n.push(new e.qoH(this.TJV)), n.push(new e.vgJ(this.TJV)), n
			}, n
		}(o);
		t.gKa = r;
		var s = function (n) {
			function i(t, e) {
				return n.call(this, t, !1, e) || this
			}

			return dt(i, n), i.prototype.Mqu = function () {
				var i = n.prototype.Mqu.call(this);
				return i.push(new e.vsn(this.TJV, "src", t.vAL.src, !0)), i.push(new e.fKa(this.TJV, "alt", t.vAL.alt)), i
			}, i
		}(r);
		t.tYv = s;
		var u = function (n) {
			function i(t, e) {
				return n.call(this, t, !1, e) || this
			}

			return dt(i, n), i.prototype.Mqu = function () {
				var i = n.prototype.Mqu.call(this);
				return i.push(new e.fKa(this.TJV, "href", t.vAL.href)), i.push(new e.fKa(this.TJV, "target", t.vAL.target)), i.push(new e.fKa(this.TJV, "rel", t.vAL.rel)), i
			}, i
		}(r);
		t.ZYf = u;
		var l = function (i) {
			function o(t, e) {
				return i.call(this, t, !1, e) || this
			}

			return dt(o, i), o.prototype.Mqu = function () {
				var o = i.prototype.Mqu.call(this);
				return o.push(new e.lmf(this.TJV, this.kNA)), o.push(new e.TsA(this.TJV)), o.push(new e.IvZ(this.TJV)), o.push(new e.WMS(this.TJV, "hidden-print", t.vAL.visibleInPrintMode, !1, null, [n.uau, n.FqQ])), o
			}, o
		}(r);
		t.krW = l;
		var h = function (t) {
			function n(e, n) {
				return t.call(this, e, !1, n) || this
			}

			return dt(n, t), n.prototype.Mqu = function () {
				var n = t.prototype.Mqu.call(this);
				return n.push(new e.oRP(this.TJV)), n
			}, n
		}(r);
		t.CHr = h;
		var p = function (t) {
			function e(e, n) {
				return t.call(this, e, !1, n) || this
			}

			return dt(e, t), e.prototype.Mqu = function () {
				return t.prototype.Mqu.call(this)
			}, e
		}(r);
		return t.Yvg = p, t.vAL = {
			id: "Id",
			src: "URL",
			alt: "Alternate text",
			title: "Tooltip",
			href: "URL",
			target: "Target",
			rel: "Relationship",
			visibleInPrintMode: "Visible in print mode"
		}, t
	}(U, z, h);
	var St;
	dt = this && this.__extends || (St = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		St(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	Y = function (t, e, n, i, o) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var r = function (e) {
			function r() {
				return null !== e && e.apply(this, arguments) || this
			}

			return dt(r, e), r.prototype.SzE = function (t, e) {
				return void 0 === e && (e = null), this.Kne = new n.Xdq(new i.krW(t, e)), this.Kne
			}, r.prototype.SAY = function () {
				return t.vAL.title
			}, r.prototype.ipW = function () {
				return this.Kne.WzH.EXg() === o.uau ? 305 : this.Kne.WzH.EXg() === o.FqQ ? 340 : 310
			}, r.prototype.xuH = function () {
				return this.ipW()
			}, r.prototype.UxY = function () {
				return !0
			}, r
		}(e.CgA);
		return t.zlj = r, t.vAL = {title: "Edit the column"}, t
	}(Y, A, D, U, h);
	var zt;
	dt = this && this.__extends || (zt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		zt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	P = function (t, e) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var n = function (t) {
			function e(e, n, i) {
				return void 0 === n && (n = 100), void 0 === i && (i = 1e3), t.call(this, e, n, i) || this
			}

			return dt(e, t), e.prototype.Pge = function () {
				return ["a_class", "a_style", "attributes", "hc_bootstrap_editor_row"]
			}, e
		}(e.kpn);
		return t.Vtu = n, t
	}(P, B);
	var Ut;
	dt = this && this.__extends || (Ut = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Ut(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	q = function (t, e, n, i) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var o = function (e) {
			function o() {
				return null !== e && e.apply(this, arguments) || this
			}

			return dt(o, e), o.prototype.SzE = function (t, e) {
				return void 0 === e && (e = null), new n.Vtu(new i.CHr(t, e))
			}, o.prototype.SAY = function () {
				return t.vAL.title
			}, o.prototype.ipW = function () {
				return 280
			}, o.prototype.xuH = function () {
				return this.ipW()
			}, o.prototype.UxY = function () {
				return !0
			}, o
		}(e.CgA);
		return t.AzG = o, t.vAL = {title: "Edit the row"}, t
	}(q, A, P, U);
	var Yt;
	dt = this && this.__extends || (Yt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Yt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	G = function (t, e, n, i, o) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var r = function (t) {
			function n(e) {
				var n = t.call(this) || this;
				return n.aoI = e, n
			}

			return dt(n, t), n.prototype.eMG = function () {
				var t = this;
				e.AFu(this.uRJ(), i.CDB + "tmp"), this.EgJ = e.zcR(this.iOY() + "panel", this.uRJ()), this.aoI.YnG().kJl() && (this.CAA = new o.EOx(this.aoI.YnG().mwi(), function () {
					t.aoI.urH()
				}), e.AFu(this.CAA.uRJ(), i.CDB + "cancel"), this.uRJ().appendChild(this.CAA.uRJ())), this.aoI.YnG().cUR() && (this.fEb = new o.EOx(this.aoI.YnG().XpK(), function () {
					t.aoI.BVc()
				}), e.AFu(this.fEb.uRJ(), i.CDB + "save"), this.uRJ().appendChild(this.fEb.uRJ()))
			}, n.prototype.BFA = function () {
				return "bootstrap_editor_main_toolbar"
			}, n
		}(n.cAE);
		return t.UKU = r, t
	}(G, n, a, X, T), Q = function (t, e, n) {
		function i(t) {
			for (var e = 0, i = n.ghZ.vsm; e < i.length; e++) {
				var o = i[e];
				if (o.Dyc === t.parentNode.parentNode) return o
			}
			return null
		}

		return Object.defineProperty(t, "__esModule", {value: !0}), t.Uvm = function () {
			e.XQI.add("bootstrapEditorColConf", function (t) {
				var e = t.uRJ();
				i(e).oBx(e)
			}), e.XQI.add("bootstrapEditorColChangeType", function (t) {
				var e = t.uRJ();
				i(e).HAG(e)
			}), e.XQI.add("bootstrapEditorColMoveLeft", function (t) {
				var e = t.uRJ();
				i(e).UGW(e)
			}), e.XQI.add("bootstrapEditorColMoveRight", function (t) {
				var e = t.uRJ();
				i(e).VlS(e)
			}), e.XQI.add("bootstrapEditorColAdd", function (t) {
				var e = t.uRJ();
				i(e).Coe(e)
			}), e.XQI.add("bootstrapEditorColDelete", function (t) {
				var e = t.uRJ();
				i(e).SIb(e)
			})
		}, t
	}(Q, f, X);
	var Pt;
	dt = this && this.__extends || (Pt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Pt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	W = function (t, e, n, i, o, r) {
		return Object.defineProperty(t, "__esModule", {value: !0}), t.tDz = function (t, s) {
			r.Wrm(s);
			var u = n.XQI.get("fullScreenReserveZIndex")(), l = n.XQI.get("fullScreenReserveZIndex")(),
				h = n.XQI.get("fullScreenReserveZIndex")(), p = new o.Anh(!0, !0, u);
			s.buttonCancelShow = !0, s.buttonSaveShow = !0;
			var a, c, f, d, v, y = null;
			"onClose" in s && (y = s.onClose), s.onClose = (a = p, c = y, f = u, d = l, v = h, function (t) {
				null != c && y(), t.aFA(), a.aFA(), n.XQI.get("fullScreenUnReserveZIndex")(f), n.XQI.get("fullScreenUnReserveZIndex")(d), n.XQI.get("fullScreenUnReserveZIndex")(v)
			}), s.zIndexToolbars = l, s.zIndexHTMLEditor = h;
			var _ = new i.ghZ(t, s);
			e.AFu(p.uRJ(), "jsplus_ui_bootstrap_editor_full_screen"), p.uRJ().appendChild(_.uRJ()), p.Zbq();
			for (var g = document.getElementsByClassName("cke"), m = 0; m < g.length; m++) {
				var w = g[m];
				"application" === w.getAttribute("role") && e.DEw(w, "z-index", h)
			}
			return _
		}, t
	}(W, n, f, X = function (t, e, n, i, o, r, s, u, l, h, p, a, c) {
		Object.defineProperty(t, "__esModule", {value: !0}), t.Tze = h.bqf();
		var f = function () {
			function e(t) {
				this.rTz = t
			}

			return e.prototype.get = function (t, e) {
				return t in this.rTz ? this.rTz[t] : e
			}, e.prototype.YnG = function (t) {
				return new e(this.get(t, {}))
			}, e.prototype.GMP = function (t) {
				return t in this.rTz
			}, e.prototype.kJl = function () {
				return this.get("buttonCancelShow", !1)
			}, e.prototype.mwi = function () {
				return this.get("buttonCancelTitle", t.vAL.cancel)
			}, e.prototype.cUR = function () {
				return this.get("buttonSaveShow", !1)
			}, e.prototype.XpK = function () {
				return this.get("buttonSaveTitle", t.vAL.save)
			}, e.prototype.kDf = function () {
				return this.get("zIndexHTMLEditor", 1)
			}, e.prototype.puU = function () {
				return this.get("zIndexToolbars", 1)
			}, e.prototype.GdF = function () {
				return this.get("HTMLEditorConfig", null)
			}, e.prototype.gso = function () {
				return this.get("onClose", function () {
				})
			}, e.prototype.OJL = function () {
				return this.get("onSave", function () {
				})
			}, e.prototype.TrY = function () {
				return this.get("dataContainsContainer", !1)
			}, e.prototype.EXg = function () {
				return this.get("framework", "b3")
			}, e.prototype.vTi = function () {
				var t = "b3" === this.EXg() || "f5" === this.EXg();
				return t && !this.get("useUIFlexbox", !0) && (t = !1), t
			}, e
		}();
		t.Uuu = f;
		var d = function (h) {
			function p(t, e) {
				void 0 === e && (e = {});
				var n = h.call(this) || this;
				if (n.Szz = [], n.Dyc = null, n.rqg = null, n.rTz = null, n.NTJ = new r.tlI(n), n.SJi = new r.SWa(n), p.vsm.push(n), n.rTz = new f(e), "string" == typeof t) {
					if (n.Dyc = document.getElementById(t), !n.Dyc) return console.log("BootstrapEditor: Unable to find element with id `" + t + "`"), n
				} else n.Dyc = t;
				return n
			}

			return dt(p, h), p.prototype.EXg = function () {
				return this.rTz.get("framework", "b3")
			}, p.prototype.YnG = function () {
				return this.rTz
			}, p.prototype.BFA = function () {
				return "bootstrap_editor"
			}, p.prototype.eMG = function () {
				if ("TEXTAREA" === this.Dyc.tagName) {
					this.Dyc.style.display = "none";
					var i = document.createElement("div");
					i.innerHTML = this.Dyc.value, this.Dyc.parentElement.insertBefore(i, this.Dyc), this.rqg = this.Dyc, this.Dyc = i
				}
				if (this.Dyc.style.width = this.rTz.get("width", "100%"), e.AFu(this.Dyc, t.CDB + "framework_" + this.EXg()), e.AFu(this.Dyc, t.CDB + "root"), this.rTz.get("opaqueRows", !0) && e.AFu(this.Dyc, t.CDB + "opaque_rows"), this.rTz.get("opaqueCols", !0) && e.AFu(this.Dyc, t.CDB + "opaque_cols"), this.dPT(), this.CAK = new l.UKU(this), this.uRJ().appendChild(this.CAK.uRJ()), this.JGC = e.zcR(t.CDB + "contents", this.uRJ()), this.JGC.appendChild(this.Dyc), !0 === this.rTz.get("createDefaultRow", !0)) {
					for (var o = this.Dyc.childNodes, r = !1, s = 0; s < o.length && !r; s++) n.oeN(o[s]) && (r = !0);
					r || this.szW([])
				}
			}, p.prototype.dPT = function () {
				for (var t = this.Dyc.children, i = t.length - 1; i >= 0; i--) t[i].hasAttribute("data-mce-bogus") && t[i].parentElement.removeChild(t[i]);
				var o = this.Dyc.childNodes, r = [];
				for (i = 0; i < o.length; i++) r.push(o[i]);
				for (var s = [], u = 0, l = r; u < l.length; u++) {
					var h = l[u], p = n.oeN(h);
					p && s.length > 0 ? (this.szW(s), s = [], this.RWP(h)) : "DIV" !== h.tagName || p ? p ? this.RWP(h) : 3 === h.nodeType || 8 === h.nodeType ? s.length > 0 && s.push(h) : s.push(h) : (e.AFu(h, n.CkW()), this.RWP(h))
				}
				s.length > 0 && this.szW(s);
				var a = document.createElement("div");
				this.Dyc.appendChild(a), this.dOe(a)
			}, p.prototype.szW = function (t) {
				var e = document.createElement("div");
				e.className = n.CkW(), t[0].parentElement.insertBefore(e, t[0]);
				var i = document.createElement("div");
				i.className = n.pBk(this.EXg()), e.appendChild(i);
				for (var o = 0, r = t; o < r.length; o++) {
					var s = r[o];
					i.appendChild(s)
				}
				this.RWP(e)
			}, p.prototype.dOe = function (i) {
				var o = this;
				e.jjU(i, [n.CkW(), t.CDB + "tmp", t.CDB + "row_btn_add"]);
				var r = document.createElement("div");
				r.className = n.pBk(this.EXg()), i.appendChild(r);
				var s = document.createElement("div");
				s.className = "jsplus_bootstrap_editor_btn_add", s.addEventListener("click", function (t) {
					o.PVB(t.target.parentNode.parentNode)
				}), r.appendChild(s)
			}, p.prototype.RWP = function (t) {
				var i = document.createElement("div");
				t.parentNode.insertBefore(i, t), this.dOe(i), this.Qly(t);
				for (var o = t.childNodes, r = [], s = 0; s < o.length; s++) r.push(o[s]);
				for (var u = [], l = 0, h = r; l < h.length; l++) {
					var p = h[l], a = n.Lyt(p, this.EXg());
					a && u.length > 0 ? (this.LAJ(u), u = [], this.Cnf(p)) : "DIV" !== p.tagName || a ? a ? this.Cnf(p) : 3 === p.nodeType || 8 === p.nodeType ? u.length > 0 && u.push(p) : u.push(p) : (e.AFu(p, n.pBk(this.EXg())), this.Cnf(p))
				}
				u.length > 0 && this.LAJ(u);
				var c, f, d = this;
				t.addEventListener("mouseenter", (c = t, f = d, function () {
					f.KzF(c)
				}))
			}, p.prototype.LAJ = function (t) {
				var e = document.createElement("div");
				e.className = n.pBk(this.EXg()), t[0].parentElement.insertBefore(e, t[0]);
				for (var i = 0, o = t; i < o.length; i++) {
					var r = o[i];
					e.appendChild(r)
				}
				this.Cnf(e)
			}, p.prototype.Cnf = function (t) {
				var n, i, o = this.VOY(t), r = (e.MGG(t), this);
				t.addEventListener("mouseenter", (n = t, i = r, function () {
					i.URE(n)
				}));
				var s = o.zAQ(this, t);
				this.Szz.push(s)
			}, p.prototype.KLD = function (t) {
				for (var e = 0, n = p.Hew; e < n.length; e++) {
					var i = n[e];
					if (i.VcO() === t) return i
				}
				return null
			}, p.prototype.Xii = function (t) {
				for (var e = 0; e < this.Szz.length; e++) if (this.Szz[e].CpI() === t) return this.Szz[e];
				return null
			}, p.prototype.VOY = function (t) {
				var e = t.getAttribute("data-be-plugin"), n = this.KLD(e);
				if (null != n) return n;
				for (var i = [], o = 0; o < t.childNodes.length; o++) {
					var r = t.childNodes[o], s = r.nodeType;
					(s === Node.ELEMENT_NODE || s === Node.TEXT_NODE && r.textContent.trim().replace(/\u200B/g, "").length > 0) && i.push(r)
				}
				if (1 === i.length && i[0].nodeType === Node.ELEMENT_NODE) {
					var u = i[0];
					if ("IMG" === u.tagName) return this.KLD("image");
					if ("A" === u.tagName && 1 === u.childNodes.length && "IMG" === u.childNodes[0].tagName) return this.KLD("image")
				}
				return this.KLD("editor")
			}, p.prototype.URE = function (t) {
				this.NTJ.evU(t)
			}, p.prototype.KzF = function (t) {
				this.SJi.evU(t)
			}, p.prototype.NAh = function (t) {
				for (var e = 0, n = this.Szz; e < n.length; e++) {
					var i = n[e];
					if (i.CpI() === t) return i
				}
				return null
			}, p.prototype.UGW = function (t) {
				n.erJ(t, this.EXg()), this.NTJ.rKY(), this.Qly(n.abJ(t, this.EXg())), this.NTJ.evU(t)
			}, p.prototype.VlS = function (t) {
				n.orq(t, this.EXg()), this.NTJ.rKY(), this.Qly(n.abJ(t, this.EXg())), this.NTJ.evU(t)
			}, p.prototype.oBx = function (t) {
				var e = this;
				new s.zlj(t, this.EXg(), function () {
					e.Qly(n.abJ(t, e.EXg()))
				}).Zbq()
			}, p.prototype.Qly = function (i) {
				if (this.rTz.vTi()) for (var o = new n.uws(i, this.EXg()), r = 0, s = n.bat(this.EXg()); r < s.length; r++) {
					var u = s[r], l = !0;
					o.zVq(u) > 12 && (l = !1), e.GTY(i, t.CDB + "flexbox_" + u, l)
				}
			}, p.prototype.Coe = function (t) {
				var e = this, i = document.createElement("div");
				i.className = n.pBk(this.EXg()), new s.zlj(i, this.EXg(), function () {
					t.parentNode.insertBefore(i, t.nextSibling), e.Qly(n.abJ(i, e.EXg())), e.Cnf(i)
				}).Zbq()
			}, p.prototype.SIb = function (e) {
				var i = this;
				new c.mXI({
					type: c.kuN.bdO,
					content: t.vAL.confirmDeleteCol,
					buttonOkTitle: c.uFf.GsQ,
					buttonCancelTitle: c.yga.zCw,
					onOk: function () {
						var t = i.NAh(e);
						null != t && t.Rsi();
						var o = n.abJ(e, i.EXg());
						return e.parentNode.removeChild(e), i.Qly(o), i.NTJ.rKY(), !0
					}
				}).Zbq()
			}, p.prototype.HAG = function (t) {
				var e, n, i = (e = this, n = t, function (t) {
					var i = e.Xii(n);
					i.OvJ().VcO() !== t && (e.NTJ.rKY(), i.Rsi(), e.Szz.splice(e.Szz.indexOf(i), 1), n.setAttribute("data-be-plugin", t), e.Cnf(n))
				}), r = this.Xii(t);
				new o.ZwN(i, r.OvJ().VcO()).Zbq()
			}, p.prototype.PcS = function (t) {
				new u.AzG(t, this.EXg()).Zbq()
			}, p.prototype.hic = function (t) {
				this.SJi.rKY();
				var e = n.YNf(t, 1), i = (n.YNf(t, 2), n.YNf(t, 3));
				i.parentNode.insertBefore(e, i), i.parentNode.insertBefore(t, i), this.SJi.evU(t), this.NTJ.hoc()
			}, p.prototype.Nia = function (t) {
				this.SJi.rKY();
				n.YNf(t, 1);
				var e = n.gla(t, 1), i = n.gla(t, 2);
				i.parentNode.insertBefore(t, i.nextSibling), i.parentNode.insertBefore(e, i.nextSibling), this.SJi.evU(t), this.NTJ.hoc()
			}, p.prototype.PLD = function (e) {
				var n = this;
				new c.mXI({
					type: c.kuN.bdO,
					content: t.vAL.confirmDeleteRow,
					buttonOkTitle: c.uFf.GsQ,
					buttonCancelTitle: c.yga.zCw,
					onOk: function () {
						return e.parentNode.removeChild(e.previousSibling), e.parentNode.removeChild(e), n.NTJ.rKY(), n.SJi.rKY(), !0
					}
				}).Zbq()
			}, p.prototype.PVB = function (t) {
				var e, o, r = (e = this, o = t, function (t) {
					var i = document.createElement("div");
					n.pdG(i, e.EXg(), t), o.parentNode.insertBefore(i, o), e.RWP(i)
				});
				new i.xaa(this.EXg(), r).Zbq()
			}, p.prototype.urH = function () {
				for (var t = 0, e = this.Szz; t < e.length; t++) {
					e[t].Rsi()
				}
				this.CAK.aFA(), this.NTJ.aFA(), this.SJi.aFA(), this.rTz.gso()(this)
			}, p.prototype.BVc = function () {
				var t = this.xcZ();
				this.rTz.OJL()(t, this), this.urH()
			}, p.prototype.Izr = function (n) {
				for (var i = n.cloneNode(!1), o = n.childNodes, r = 0; r < o.length; r++) {
					var s = o[r];
					if (1 !== s.nodeType) i.appendChild(s.cloneNode(!0)); else if (!e.cVp(s, t.CDB + "tmp")) {
						var u = this.Xii(s);
						null == u ? i.appendChild(this.Izr(s)) : i.appendChild(u.xcZ())
					}
				}
				return i
			}, p.prototype.xcZ = function () {
				var n = this.Izr(this.Dyc);
				return e.Fhg(n, "title"), this.uqU(n), e.LfB(n, t.CDB + "root"), n
			}, p.prototype.uqU = function (n) {
				for (var i = e.MGG(n), o = i.length - 1; o >= 0; o--) 0 === i[o].indexOf(t.CDB) && i.splice(o, 1);
				e.jjU(n, i);
				var r = n.children;
				for (o = 0; o < r.length; o++) this.uqU(r[o])
			}, p.vsm = [], p.Hew = [], p
		}(p.cAE);
		t.ghZ = d;
		var v = function () {
			function e() {
			}

			return e.prototype.CZP = function (t) {
			}, e.prototype.Wrm = function (t) {
				this.CZP(new f(t))
			}, e.prototype.SWM = function () {
				return t.Tze + "plugins/" + this.VcO() + "/icon.png"
			}, e.prototype.VtG = function () {
				return t.Tze + "plugins/" + this.VcO()
			}, e
		}();
		t.DOa = v;
		var y = function () {
			function n(t, n, i) {
				this.MRW = !1, this.IBn = [], this.aoI = n, this.gzG = i, this.JGK = t, this.sVy = this.aoI.YnG().YnG(this.JGK.VcO()), this.MRW || (this.cKz(), this.MRW = !0), e.aMO(this.gzG, "data-be-plugin", this.JGK.VcO()), this.uzg()
			}

			return n.prototype.Rsi = function () {
				this.rKY(), this.aoI = null, this.gzG = null, this.sVy = null
			}, n.prototype.CpI = function () {
				return this.gzG
			}, n.prototype.hEn = function () {
				return t.Tze
			}, n.prototype.VtG = function () {
				return this.JGK.VtG()
			}, n.prototype.OvJ = function () {
				return this.JGK
			}, n.prototype.QbJ = function () {
				return this.IBn
			}, n.prototype.OfA = function (t) {
				for (var e = 0, n = this.QbJ(); e < n.length; e++) {
					var i = n[e];
					if (null != i && i.VcO() === t) return i
				}
				return null
			}, n.prototype.aZq = function (t, e, n, i, o) {
				var s = new r.GAr(this.aoI, e, i, o);
				s.qnJ(t), s.ONU(n), s.FeV(!0), this.IBn.push(s)
			}, n.prototype.aVe = function () {
				this.IBn.push(null)
			}, n.prototype.JoZ = function (t, e) {
				for (var n = 0, i = this.IBn; n < i.length; n++) {
					var o = i[n];
					if (null != o && o.VcO() === t) return void o.fZt(e)
				}
			}, n.prototype.xcZ = function () {
				var t = this.gzG.cloneNode(!1);
				return this.CWC(t), t
			}, n
		}();
		return t.BRn = y, a.Uvm(), t.CDB = "jsplus_bootstrap_editor_", t.vAL = {
			col_delete: "Delete column",
			col_conf: "Configure column",
			col_change_type: "Change column type",
			column: "Column",
			confirmDeleteCol: "Are you sure that want to delete this column?",
			confirmDeleteRow: "Are you sure that want to delete this row?",
			save: "Save",
			cancel: "Cancel"
		}, t
	}(X, n, h, m, b, x, Y, q, G, s, a, Q, y), d, at);
	var qt;
	dt = this && this.__extends || (qt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		qt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	$ = function (t, e, n, i) {
		Object.defineProperty(t, "__esModule", {value: !0}), t.vAL = {title: "HTML Content"};
		var o = function (t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}

			return dt(e, t), e.prototype.cKz = function () {
				this.dzL = this.JGK.aWf();
				var t = this.aoI.YnG().GdF();
				if (null != t && Object.keys(t).length > 0) for (var e in t) this.dzL[e] = t[e];
				this.dzL.title = !1, this.dzL.skin = "be", this.dzL.allowedContent = !0
			}, e.prototype.CWC = function (t) {
				t.innerHTML = this.gzG.innerHTML;
				for (var e = i.MGG(t), n = e.length - 1; n >= 0; n--) 0 === e[n].indexOf("cke_") && e.splice(n, 1);
				i.jjU(t, e);
				for (var o = 0, r = ["data-be-plugin", "contenteditable", "tabindex", "spellcheck", "role", "aria-label", "aria-describedby"]; o < r.length; o++) {
					var s = r[o];
					t.removeAttribute(s)
				}
				var u = t.getElementsByTagName("*");
				for (n = 0; n < u.length; n++) {
					var l = u.item(n), h = i.Bmy(l);
					for (var p in h) 0 === p.indexOf("data-cke-") && i.Fhg(l, p)
				}
			}, e.prototype.uzg = function () {
				window.CKEDITOR && (window.CKEDITOR.disableAutoInline = !0, this.dzL.baseFloatZIndex = this.aoI.YnG().kDf() + 1, this.gzG.setAttribute("contenteditable", "true"), window.CKEDITOR.inline(this.gzG, this.dzL))
			}, e.prototype.rKY = function () {
				if (window.CKEDITOR) for (var t in window.CKEDITOR.instances) void 0 !== window.CKEDITOR.instances[t]._.editable && window.CKEDITOR.instances[t]._.editable.$ === this.gzG && window.CKEDITOR.instances[t].destroy();
				if (null != this.gzG) {
					this.gzG.removeAttribute("contenteditable"), this.gzG.removeAttribute("role"), this.gzG.removeAttribute("tabindex"), this.gzG.removeAttribute("spellcheck"), this.gzG.removeAttribute("aria-label"), this.gzG.removeAttribute("title");
					for (var e = i.MGG(this.gzG), n = [], o = 0; o < e.length; o++) 0 !== e[o].indexOf("cke_") && n.push(e[o]);
					i.jjU(this.gzG, n)
				}
			}, e.prototype.aKh = function () {
			}, e
		}(n.BRn);
		t.CCC = o;
		var r = function (n) {
			function i() {
				var t = null !== n && n.apply(this, arguments) || this;
				return t.FmS = null, t
			}

			return dt(i, n), i.prototype.aWf = function () {
				return e.bwA(this.FmS)
			}, i.prototype.VcO = function () {
				return "editor"
			}, i.prototype.SAY = function () {
				return t.vAL.title
			}, i.prototype.zAQ = function (t, e) {
				return new o(this, t, e)
			}, i.prototype.CZP = function (t) {
				var e = [];
				if (window.CKEDITOR) for (var n in window.CKEDITOR.plugins.loaded) e.push(n);
				null == this.FmS && (this.FmS = {
					language: "en",
					extraPlugins: e.join(","),
					toolbar: [["Cut", "Copy", "-", "Undo", "Redo"], ["Bold", "Italic", "Underline"], ["NumberedList", "BulletedList"], ["JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"], ["Font", "FontSize"], ["Link", "Unlink"], ["Image", "Table"], ["jsplusBootstrapEditorColConf", "jsplusBootstrapEditorColChangeType"], ["jsplusBootstrapEditorColMoveLeft", "jsplusBootstrapEditorColMoveRight"], ["jsplusBootstrapEditorColAdd"], ["jsplusBootstrapEditorColDelete"]]
				})
			}, i
		}(n.DOa);
		return t.KXH = r, t
	}($, t, X, n);
	var Gt, Qt, Xt, Wt, $t;
	dt = this && this.__extends || (Gt = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		Gt(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	tt = function (t, e, n) {
		function i() {
			return window.tinyMCE ? window.tinyMCE : window.tinymce ? window.tinymce : window.TINYMCE ? window.TINYMCE : null
		}

		Object.defineProperty(t, "__esModule", {value: !0}), t.vAL = {title: "HTML Content"};
		var o = function (t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}

			return dt(e, t), e.prototype.cKz = function () {
				this.pvx = this.JGK.DeW();
				var t = this.aoI.YnG().GdF();
				if (null != t && Object.keys(t).length > 0) for (var e in t) this.pvx[e] = t[e];
				this.pvx.extended_valid_elements = "div[*],span[*],i[*]"
			}, e.prototype.CWC = function (t) {
				t.innerHTML = this.gzG.innerHTML;
				for (var e = n.MGG(t), i = e.length - 1; i >= 0; i--) 0 === e[i].indexOf("cke_") && e.splice(i, 1);
				n.jjU(t, e);
				for (var o = 0, r = ["data-be-plugin", "contenteditable", "tabindex", "spellcheck", "role", "aria-label", "aria-describedby"]; o < r.length; o++) {
					var s = r[o];
					t.removeAttribute(s)
				}
				var u = t.getElementsByTagName("*");
				for (i = 0; i < u.length; i++) {
					var l = u.item(i), h = n.Bmy(l);
					for (var p in h) 0 === p.indexOf("data-mce-") && n.Fhg(l, p)
				}
			}, e.prototype.uzg = function () {
				var t = this;
				i();
				this.pvx.inline = !0, this.pvx.target = this.gzG, this.pvx.branding = !1, i().init(this.pvx).then(function (e) {
					t.qsD = e[0], t.qsD.on("focus", function (e) {
						t.pNL = t.qsD.theme.panel.$el[0], n.DEw(t.pNL, "z-index", "" + t.aoI.YnG().kDf())
					})
				})
			}, e.prototype.rKY = function () {
				if (null != this.gzG) {
					var t = this.gzG.id;
					i().execCommand("mceRemoveEditor", !1, t), delete i().editors[t], this.gzG.removeAttribute("role"), this.gzG.removeAttribute("tabindex"), this.gzG.removeAttribute("spellcheck"), this.gzG.removeAttribute("aria-label"), this.gzG.removeAttribute("title"), this.gzG.id && this.gzG.id.indexOf("mce_") > -1 && this.gzG.removeAttribute("id");
					for (var e = n.MGG(this.gzG), o = [], r = 0; r < e.length; r++) 0 !== e[r].indexOf("mce_") && o.push(e[r]);
					n.jjU(this.gzG, o)
				}
			}, e.prototype.aKh = function () {
			}, e
		}(e.BRn);
		t.job = o;
		var r = function (e) {
			function n() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.PHS = null, t
			}

			return dt(n, e), n.prototype.DeW = function () {
				return this.PHS
			}, n.prototype.VcO = function () {
				return "editor"
			}, n.prototype.SAY = function () {
				return t.vAL.title
			}, n.prototype.zAQ = function (t, e) {
				return new o(this, t, e)
			}, n.prototype.CZP = function (t) {
				var e = ["link", "lists", "image"];
				for (var n in i().PluginManager.urls) -1 === e.indexOf(n) && e.push(n);
				null == this.PHS && (this.PHS = {
					language: "en",
					plugins: e.join(" "),
					toolbar: "cut copy | undo redo | bold italic underline | numlist bullist | alignleft aligncenter alignright alignjustify |  fontselect fontsizeselect | link unlink | image table | jsplusBootstrapEditorColConf jsplusBootstrapEditorColChangeType | jsplusBootstrapEditorColMoveLeft jsplusBootstrapEditorColMoveRight | jsplusBootstrapEditorColAdd | jsplusBootstrapEditorColDelete"
				})
			}, n
		}(e.DOa);
		return t.iwE = r, t
	}(tt, X, n), Qt = et, Xt = X, Wt = $, $t = tt, Object.defineProperty(Qt, "__esModule", {value: !0}), window.CKEDITOR || !window.tinyMCE && !window.tinymce ? Xt.ghZ.Hew.push(new Wt.KXH) : Xt.ghZ.Hew.push(new $t.iwE), et = Qt;
	var te;
	dt = this && this.__extends || (te = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		te(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	nt = function (t, e, n) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var i = function (t) {
			function e(e, n) {
				void 0 === n && (n = null);
				var i = t.call(this) || this;
				return i.HeO = e, i.JcK = n, i
			}

			return dt(e, t), e.prototype.NBM = function () {
				return "textarea"
			}, e.prototype.eMG = function () {
				var t = this;
				this.uRJ().value = this.HeO, n.eHV(this.uRJ(), function (e) {
					t.TTc(e)
				})
			}, e.prototype.TTc = function (t) {
				this.HeO = t, this.JcK && this.JcK()
			}, e.prototype.FKy = function () {
				return this.HeO
			}, e.prototype.CTe = function () {
				return this.HeO.replace(/\r\n/g, "\n").split("\n")
			}, e.prototype.BFA = function () {
				return "textarea"
			}, e
		}(e.cAE);
		return t.gHw = i, t
	}(nt, a, n);
	var ee;
	dt = this && this.__extends || (ee = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		ee(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	it = function (t, e, n, i) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var o = function (t) {
			function e() {
				return null !== t && t.apply(this, arguments) || this
			}

			return dt(e, t), e.prototype.cKz = function () {
			}, e.prototype.CWC = function (t) {
				t.textContent = this.bku.FKy(), n.DEw(t, "white-space", "pre")
			}, e.prototype.uzg = function () {
				this.bku = new i.gHw(this.gzG.textContent), n.DEw(this.bku.uRJ(), "width", "100%"), n.DEw(this.bku.uRJ(), "height", "100%"), n.DEw(this.bku.uRJ(), "position", "absolute"), n.DEw(this.bku.uRJ(), "left", "0"), n.DEw(this.bku.uRJ(), "top", "0"), n.DEw(this.bku.uRJ(), "padding", "0"), n.DEw(this.bku.uRJ(), "border-width", "0"), this.gzG.innerHTML = "", this.gzG.appendChild(this.bku.uRJ())
			}, e.prototype.rKY = function () {
				this.gzG.removeChild(this.bku.uRJ()), this.gzG.textContent = this.bku.FKy()
			}, e.prototype.aKh = function () {
			}, e
		}(e.BRn);
		t.aRP = o;
		var r = function (e) {
			function n() {
				return null !== e && e.apply(this, arguments) || this
			}

			return dt(n, e), n.prototype.VcO = function () {
				return "text"
			}, n.prototype.SAY = function () {
				return t.vAL.title
			}, n.prototype.zAQ = function (t, e) {
				return new o(this, t, e)
			}, n
		}(e.DOa);
		return t.Zjm = r, e.ghZ.Hew.push(new r), t.vAL = {title: "Plain Text"}, t
	}(it, X, n, nt), ot = function (t, e, n) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var i = function () {
			function t(t) {
				void 0 === t && (t = !0), this.RIJ = null, this.mMI = null, this.tmQ = !1, this.ATG = null, e.ZoU(), this.TJV = document.createElement("div"), this.TJV.className = "jsplus_theme jsplus_ui_hover_panel", this.rTI = document.createElement("div"), this.rTI.className = "jsplus_ui_hover_panel_inner", this.TJV.appendChild(this.rTI), this.JGC = document.createElement("div"), this.JGC.className = "jsplus_ui_hover_panel_content", this.rTI.appendChild(this.JGC), this.lOr(t)
			}

			return t.prototype.lOr = function (t) {
				this.tmQ !== t && (this.tmQ = t, t ? (this.mMI = document.createElement("div"), this.mMI.className = "jsplus_ui_hover_panel_bg", this.rTI.insertBefore(this.mMI, this.JGC)) : (this.mMI.parentNode.removeChild(this.mMI), this.mMI = null))
			}, t.prototype.rKY = function () {
				null != this.RIJ && (n.DEw(this.RIJ, "position", this.ATG), this.RIJ = null, this.ATG = null, null != this.TJV && null != this.TJV.parentNode && this.TJV.parentNode.removeChild(this.TJV))
			}, t.prototype.evU = function (t) {
				this.RIJ !== t && (this.rKY(), this.RIJ = t, this.ATG = n.aeE(this.RIJ, "position"), null == t && null != this.TJV.parentNode && this.TJV.parentNode.removeChild(this.TJV), this.RIJ.appendChild(this.TJV))
			}, t.prototype.uRJ = function () {
				return this.TJV
			}, t.prototype.lUi = function () {
				return this.JGC
			}, t.prototype.xVF = function () {
				return this.mMI
			}, t.prototype.oXx = function () {
				return this.RIJ
			}, t
		}();
		return t.Xcc = i, t
	}(ot, p, n);
	var ne;
	dt = this && this.__extends || (ne = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		ne(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	rt = function (t, e, n, i) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var o = function (e) {
			function o() {
				return null !== e && e.apply(this, arguments) || this
			}

			return dt(o, e), o.prototype.cKz = function () {
				this.wuY = new i.Xcc;
				var e = this.wuY.lUi();
				e.innerHTML = t.vAL.title + "<br/>" + t.vAL.changeType, n.AFu(e, "jsplus_theme_noselect"), e.style.fontSize = "12px", e.style.opacity = "0.7", e.style.textAlign = "right", e.style.cursor = "default"
			}, o.prototype.CWC = function (t) {
			}, o.prototype.uzg = function () {
				this.WsC = this.gzG.innerHTML, this.gzG.innerHTML = "", this.wuY.evU(this.gzG)
			}, o.prototype.rKY = function () {
				this.gzG.innerHTML = this.WsC, this.WsC = null, this.wuY.rKY()
			}, o.prototype.aKh = function () {
			}, o
		}(e.BRn);
		t.Jdr = o;
		var r = function (e) {
			function n() {
				return null !== e && e.apply(this, arguments) || this
			}

			return dt(n, e), n.prototype.VcO = function () {
				return "none"
			}, n.prototype.SAY = function () {
				return t.vAL.title
			}, n.prototype.zAQ = function (t, e) {
				return new o(this, t, e)
			}, n
		}(e.DOa);
		return t.gPK = r, e.ghZ.Hew.push(new r), t.vAL = {
			title: "No content",
			changeType: "Change type of the column to make it editable"
		}, t
	}(rt, X, n, ot);
	var ie;
	dt = this && this.__extends || (ie = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		ie(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	st = function (t, e) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var n = function (t) {
			function e(e, n, i) {
				return void 0 === n && (n = 150), void 0 === i && (i = 650), t.call(this, e, n, i) || this
			}

			return dt(e, t), e.prototype.Pge = function () {
				return ["a_href", "a_target", "a_rel", "!a_class", "!a_style", "!attributes"]
			}, e.prototype.MBq = function () {
				t.prototype.MBq.call(this)
			}, e
		}(e.kpn);
		return t.oQX = n, t
	}(st, B);
	var oe;
	dt = this && this.__extends || (oe = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		oe(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	ut = function (t, e, n, i) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var o = function (e) {
			function o() {
				return null !== e && e.apply(this, arguments) || this
			}

			return dt(o, e), o.prototype.SzE = function (t, e) {
				return void 0 === e && (e = null), this.MZY = t, this.rTI = null, "A" !== t.tagName && (this.rTI = t, this.MZY = document.createElement("a")), new n.oQX(new i.ZYf(this.MZY, e))
			}, o.prototype.SAY = function () {
				return t.vAL.title
			}, o.prototype.ipW = function () {
				return 115
			}, o.prototype.xuH = function () {
				return 315
			}, o.prototype.UxY = function () {
				return !0
			}, o.prototype.ZFR = function () {
				return null != this.rTI && (this.rTI.parentNode.insertBefore(this.MZY, this.rTI), this.MZY.appendChild(this.rTI)), e.prototype.ZFR.call(this)
			}, o
		}(e.CgA);
		return t.OUt = o, t.vAL = {title: "Edit the link"}, t
	}(ut, A, st, U);
	var re;
	dt = this && this.__extends || (re = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		re(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	lt = function (t, e) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var n = function (t) {
			function e(e) {
				return t.call(this, e, 150, 650) || this
			}

			return dt(e, t), e.prototype.Pge = function () {
				return ["a_src", "a_alt", "a_title", "!a_class", "!a_style", "!attributes"]
			}, e
		}(e.kpn);
		return t.bJO = n, t
	}(lt, B);
	var se;
	dt = this && this.__extends || (se = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		se(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	ht = function (t, e, n, i) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var o = function (e) {
			function o() {
				return null !== e && e.apply(this, arguments) || this
			}

			return dt(o, e), o.prototype.SzE = function (t, e) {
				return void 0 === e && (e = null), new n.bJO(new i.tYv(t, e))
			}, o.prototype.SAY = function () {
				return t.vAL.title
			}, o.prototype.ipW = function () {
				return 115
			}, o.prototype.xuH = function () {
				return 315
			}, o.prototype.UxY = function () {
				return !0
			}, o
		}(e.CgA);
		return t.igS = o, t.vAL = {title: "Edit the image"}, t
	}(ht, A, lt, U);
	var ue;
	dt = this && this.__extends || (ue = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
		t.__proto__ = e
	} || function (t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
	}, function (t, e) {
		function n() {
			this.constructor = t
		}

		ue(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	pt = function (t, e, n, i, o, r, s, u, l, h) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var p = function (e) {
			function p() {
				return null !== e && e.apply(this, arguments) || this
			}

			return dt(p, e), p.prototype.cKz = function () {
				var e = this;
				this.mki = this.VtG() + "/icons/progress.gif", this.jdJ = this.VtG() + "/icons/jsplus_fast_upload_image.png", this.LPB = this.VtG() + "/icons/jsplus_fast_upload_preview.png", this.hEb = this.VtG() + "/icons/jsplus_upload_image.png", this.Ggb = this.VtG() + "/icons/jsplus_upload_preview.png", this.wuY = new r.Xcc;
				this.wuY.lUi();
				this.wuY.xVF().style.opacity = "0.01", l.XQI.exists("beUploadOneImage") && (this.aZq("upload_image", null, t.vAL.btnImageUploadHint, this.hEb, function (t) {
					e.aqD(!0)
				}), this.aZq("upload_preview", null, t.vAL.btnPreviewUploadHint, this.Ggb, function (t) {
					e.aqD(!1)
				}), this.aVe()), l.XQI.exists("beUploadOneImageFast") && (this.aZq("upload_image_fast", null, t.vAL.btnFastImageUploadHint, this.jdJ, function (t) {
					e.mMu(!0)
				}), this.aZq("upload_preview_fast", null, t.vAL.btnFastPreviewUploadHint, this.LPB, function (t) {
					e.mMu(!1)
				}), this.aVe()), this.aZq("image_edit", null, t.vAL.btnImagePropertiesHint, this.hEn() + "/icons/image_edit.png", function (t) {
					e.NLQ()
				}), this.aVe(), this.aZq("link_set", null, t.vAL.btnLinkSetHint, this.hEn() + "/icons/link.png", function (t) {
					e.ctf()
				}), this.aZq("link_remove", null, t.vAL.btnLinkRemoveHint, this.hEn() + "/icons/link_remove.png", function (t) {
					e.VTH()
				})
			}, p.prototype.CWC = function (t) {
				null == this.bmh() ? t.appendChild(this.HEP().cloneNode(!0)) : t.appendChild(this.bmh().cloneNode(!0))
			}, p.prototype.MSi = function () {
				var t = null, e = this.gzG.children[0];
				null != e && "A" === e.tagName ? "IMG" !== (e = (t = e).children[0]).tagName && (e = null) : null != e && "IMG" !== e.tagName && (e = null), null == e && ((e = document.createElement("img")).src = this.VtG() + "/default_image.png", e.style.margin = "30px auto 30px auto", e.style.display = "block", this.aoI.EXg() !== o.uau && this.aoI.EXg() !== o.FqQ || n.AFu(e, "img-responsive"), this.gzG.insertBefore(e, this.gzG.firstChild));
				for (var i = this.gzG.childNodes, r = [], s = 0; s < i.length; s++) r.push(i[s]);
				for (s = r.length - 1; s >= 0; s--) r[s] !== e && r[s] !== t && r[s] !== this.wuY.uRJ() && this.gzG.removeChild(r[s]);
				return [t, e]
			}, p.prototype.WOm = function () {
				var t = this.bmh();
				if (null != t) return t;
				var e = this.HEP();
				return t = n.QrW("a"), this.gzG.removeChild(e), this.gzG.appendChild(t), t.appendChild(e), t
			}, p.prototype.bmh = function (t) {
				void 0 === t && (t = !1);
				var e = this.MSi()[0];
				return null == e && t && (e = this.WOm()), e
			}, p.prototype.HEP = function () {
				return this.MSi()[1]
			}, p.prototype.aKh = function () {
				this.BfD()
			}, p.prototype.BfD = function () {
				var t = this.HEP(), e = this.bmh();
				this.JoZ("image_edit", null != t), this.JoZ("link_remove", null != e)
			}, p.prototype.uzg = function () {
				this.MSi()
			}, p.prototype.rKY = function () {
			}, p.prototype.ctf = function () {
				var t = this, e = this.bmh();
				null == e && (e = this.HEP()), new s.OUt(e, null, function () {
					t.BfD()
				}).Zbq()
			}, p.prototype.VTH = function () {
				var t = this.HEP(), e = this.bmh();
				this.gzG.removeChild(e), this.gzG.appendChild(t), this.BfD()
			}, p.prototype.mMu = function (t) {
				var e = this, n = l.XQI.get(t ? "beUploadOneImageFast" : "beUploadOnePreviewFast"),
					i = t ? "image" : "preview";
				n(this.aoI.YnG().YnG("fileUploader").rTz, function () {
					e.OfA("upload_" + i + "_fast").LhE(e.mki)
				}, function (n, o, r) {
					e.SgB(i, n, r), e.OfA("upload_" + i + "_fast").LhE(t ? e.jdJ : e.LPB)
				}, function (n) {
					e.OfA("upload_" + i + "_fast").LhE(t ? e.jdJ : e.LPB), new h.EHw({
						type: h.kuN.tUf,
						content: n
					}).Zbq()
				})
			}, p.prototype.SgB = function (t, e, n) {
				"image" === t ? this.OsZ(i.vlz(e) + n.bqf()) : "preview" === t && (this.OsZ(i.vlz(e) + n.filePreview.bqf()), this.tpn(i.vlz(e) + n.bqf()))
			}, p.prototype.aqD = function (t) {
				var e = this;
				l.XQI.get(t ? "beUploadOneImage" : "beUploadOnePreview")(this.aoI.YnG().YnG("fileUploader").rTz, function (t, n, i) {
					e.SgB(n.name, t, i)
				}, function (t) {
					null != t && new h.EHw({type: h.kuN.tUf, content: t}).Zbq()
				})
			}, p.prototype.OsZ = function (t) {
				var e = this.HEP();
				n.aMO(e, "src", t), this.BfD()
			}, p.prototype.tpn = function (t) {
				var e = this.bmh(!0);
				n.aMO(e, "href", t), this.BfD()
			}, p.prototype.NLQ = function () {
				var t = this;
				new u.igS(this.HEP(), null, function () {
					t.BfD()
				}).Zbq()
			}, p.prototype.ZpJ = function () {
				this.gzG.removeChild(this.HEP()), this.BfD()
			}, p
		}(e.BRn);
		t.qvO = p;
		var a = function (e) {
			function n() {
				return null !== e && e.apply(this, arguments) || this
			}

			return dt(n, e), n.prototype.VcO = function () {
				return "image"
			}, n.prototype.SAY = function () {
				return t.vAL.title
			}, n.prototype.zAQ = function (t, e) {
				return new p(this, t, e)
			}, n
		}(e.DOa);
		return t.Thz = a, e.ghZ.Hew.push(new a), t.vAL = {
			title: "Image",
			btnImageUploadHint: "Upload an image",
			btnPreviewUploadHint: "Upload a preview",
			btnFastImageUploadHint: "Fast upload an image",
			btnFastPreviewUploadHint: "Fast upload a preview",
			btnImageRemoveHint: "Remove the image",
			btnImagePropertiesHint: "Image properties",
			btnListSetHint: "Link",
			btnListRemoveHint: "Remove the link"
		}, t
	}(pt, X, n, r, h, ot, ut, ht, f, y), ct = function (t, e, n, i, o, r, s) {
		Object.defineProperty(t, "__esModule", {value: !0});
		var u = {
			tooltip: "Edit all contents with Bootstrap Layout Editor",
			tooltipSelected: "Edit selected block with Bootstrap Layout Editor ",
			tooltipColConf: "Configure the column",
			tooltipColChangeType: "Change type of the column",
			tooltipColMoveLeft: "Move the column left",
			tooltipColMoveRight: "Move the column right",
			tooltipColAdd: "Add a column",
			tooltipColDelete: "Delete the column"
		};

		function l(t) {
			return t.EXg(o.uau)
		}

		function h(t) {
			window.jsplus_framework || !0 !== t.huQ("highlightBlocks") || i.ZoU(m(t), t.UmU())
		}

		e.OKW.SPZ({
			eaF: "jsplusBootstrapEditor", Rrg: [], cKz: function (t) {
				"ckeditor" === e.OKW.VcO() && (window.CKEDITOR.resourceManager.prototype.load = function (t, e, n) {
					window.CKEDITOR.tools.isArray(t) || (t = t ? [t] : []);
					for (var i = this.loaded, o = this.registered, r = [], s = {}, u = {}, l = 0; l < t.length; l++) {
						var h = t[l];
						if (h) if (i[h] || o[h]) u[h] = this.get(h); else {
							var p = this.getFilePath(h);
							r.push(p), p in s || (s[p] = []), s[p].push(h)
						}
					}
					window.CKEDITOR.scriptLoader.load(r, function (t, o) {
						o.length && console.log('[CKEDITOR.resourceManager.load] Resource name "' + s[o[0]].join(",") + '" was not found at "' + o[0] + '".');
						for (var r = 0; r < t.length; r++) for (var l = s[t[r]], h = 0; h < l.length; h++) {
							var p = l[h];
							u[p] = this.get(p), i[p] = 1
						}
						e.call(n, u)
					}, this)
				});
				t.jwv({
					eaF: "jsplusBootstrapEditor",
					YgM: "jsplusBootstrapEditor",
					DDW: u.tooltip,
					LdN: v,
					hnT: !0
				}), t.jwv({
					eaF: "jsplusBootstrapEditorSelected",
					YgM: "jsplusBootstrapEditorSelected",
					DDW: u.tooltipSelected,
					LdN: y,
					hnT: !0
				}), t.jwv({
					eaF: "jsplusBootstrapEditorColConf",
					YgM: "jsplusBootstrapEditorColConf",
					DDW: u.tooltipColConf,
					LdN: (p = t, function () {
						s.XQI.get("bootstrapEditorColConf")(p)
					}),
					hnT: !0
				}), t.jwv({
					eaF: "jsplusBootstrapEditorColChangeType",
					YgM: "jsplusBootstrapEditorColChangeType",
					DDW: u.tooltipColChangeType,
					LdN: (l = t, function () {
						s.XQI.get("bootstrapEditorColChangeType")(l)
					}),
					hnT: !0
				}), t.jwv({
					eaF: "jsplusBootstrapEditorColMoveLeft",
					YgM: "jsplusBootstrapEditorColMoveLeft",
					DDW: u.tooltipColMoveLeft,
					LdN: (r = t, function () {
						s.XQI.get("bootstrapEditorColMoveLeft")(r), w(r)
					}),
					hnT: !0
				}), t.jwv({
					eaF: "jsplusBootstrapEditorColMoveRight",
					YgM: "jsplusBootstrapEditorColMoveRight",
					DDW: u.tooltipColMoveRight,
					LdN: (o = t, function () {
						s.XQI.get("bootstrapEditorColMoveRight")(o), w(o)
					}),
					hnT: !0
				}), t.jwv({
					eaF: "jsplusBootstrapEditorColAdd",
					YgM: "jsplusBootstrapEditorColAdd",
					DDW: u.tooltipColAdd,
					LdN: (i = t, function () {
						s.XQI.get("bootstrapEditorColAdd")(i), w(i)
					}),
					hnT: !0
				}), t.jwv({
					eaF: "jsplusBootstrapEditorColDelete",
					YgM: "jsplusBootstrapEditorColDelete",
					DDW: u.tooltipColDelete,
					LdN: (n = t, function () {
						s.XQI.get("bootstrapEditorColDelete")(n), w(n)
					}),
					hnT: !0
				}), t.Nqm("mode", w), t.Nqm("contentDom", h), t.Nqm("beforeGetOutputHTML", g), t.Nqm("selectionChange", c), t.Nqm("elementsPathUpdate", f);
				var n;
				var i;
				var o;
				var r;
				var l;
				var p
			}, LCQ: {highlightBlocks: !0, highlightBreadcrumbs: !0, includeCKEditor: "ckeditor" !== e.OKW.VcO()}
		});
		var p = {}, a = {};

		function c(t) {
			var e = t.xFJ(), n = null, i = [];
			if (e) {
				for (var o = !1; !o;) {
					var r = d(e);
					i.push([e, r]), null == n && r && (n = e), null == e.parentNode || "BODY" === e.tagName ? o = !0 : e = e.parentNode
				}
				a[t.guZ()] = i
			}
			t.guZ() in p && p[t.guZ()] !== n && (p[t.guZ()].removeAttribute("data-jsplus-bootstrap-editor-selected"), delete p[t.guZ()]), n && (n.setAttribute("data-jsplus-bootstrap-editor-selected", "1"), p[t.guZ()] = n), w(t)
		}

		function f(t) {
			var n = a[t.guZ()];
			if (null != n && !0 === t.huQ("highlightBreadcrumbs")) if ("ckeditor" === e.OKW.VcO()) {
				var o = t.uRJ().getElementsByClassName("cke_path_item");
				if (o.length > 0 && o.length === n.length) for (var r = o.length - 1; r >= 0; r--) {
					var s = o[r], u = n[n.length - 1 - r][1];
					i.PSO(s, "background-color", "#ead6ff", u), i.PSO(s, "text-shadow", "none", u)
				}
			} else e.OKW.VcO()
		}

		function d(t) {
			for (var e = t.children, n = 0; n < e.length; n++) {
				var i = e[n];
				if (o.oeN(i)) return !0
			}
			return !1
		}

		function v(t) {
			var e = t.UmU();
			_(t, i.aBl(e))
		}

		function y(t) {
			t.guZ() in p && _(t, p[t.guZ()])
		}

		function _(t, e) {
			for (var n = e.children, s = [], u = 0; u < n.length; u++) o.vUR(n.item(u), l(t)) && s.push(n.item(u));
			1 === s.length && (e = s[0]);
			var h = {}, p = t.yCf().xOk();
			for (var a in p) h[a] = p[a];
			h.fileUploader = t.MOH("jsplusFileUploader").xOk(), null != t.JoA("drupal") && ("HTMLEditorConfig" in h || (h.HTMLEditorConfig = {}), h.HTMLEditorConfig.drupal = t.JoA("drupal")), h.framework = t.EXg(o.uau);
			var c = t;
			h.onSave = function (t, e, n) {
				return t === i.aBl(c.UmU()) ? c.oQo(i.AlI(e)) : (t.parentNode.insertBefore(e, t), t.parentNode.removeChild(t)), !1
			}, r.flX(e, h)
		}

		function g(t, e) {
			return e.replace(RegExp('data-jsplus-bootstrap-editor-selected="\\d"', "g"), "").replace(RegExp('<style type="text/css">' + m(t).replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + "</style>", "g"), "")
		}

		function m(t) {
			return t.xcM() + "plugin-bootstrap-editor-style.css"
		}

		function w(t) {
			var e = t.scc();
			t.zoS("jsplusBootstrapEditor", e ? n.KNk.mRb : n.KNk.gwg);
			var i = t.scc() && t.guZ() in p;
			t.zoS("jsplusBootstrapEditorSelected", i ? n.KNk.mRb : n.KNk.gwg);
			var r = null != o.RVW(t.uRJ(), -1, l(t));
			t.zoS("jsplusBootstrapEditorColMoveLeft", r ? n.KNk.mRb : n.KNk.gwg);
			var s = null != o.RVW(t.uRJ(), 1, l(t));
			t.zoS("jsplusBootstrapEditorColMoveRight", s ? n.KNk.mRb : n.KNk.gwg)
		}

		return t
	}(ct, l, i, n, h, at = function (t, e, n, i, o) {
		function r(t, r) {
			var s, u = new i.Uuu(r);
			if (!0 === u.get("dataContainsContainer", !1)) s = e.jOb(t); else {
				(s = document.createElement("div")).innerHTML = t;
				var l = u.get("framework", "b4");
				if (l === n.uau || l === n.FqQ) {
					var h = u.get("useFluidContainer", !1);
					s.className = h ? "container-fluid" : "container"
				}
			}
			return o.tDz(s, r)
		}

		return Object.defineProperty(t, "__esModule", {value: !0}), t.Wrm = function (t) {
			for (var e = 0, n = i.ghZ.Hew; e < n.length; e++) n[e].Wrm(t)
		}, t.flX = function (t, n) {
			var i = t.cloneNode(!0), r = "div";
			"div" !== i.tagName && (r = i.tagName, i = e.kAt(i, "div"));
			var s = !1;
			"true" === i.contentEditable && (s = !0, i.contentEditable = "false");
			var u, l, h, p, a = null;
			return "onSave" in n && (a = n.onSave), n.onSave = (u = t, l = a, h = r, p = s, function (t, n) {
				h !== t.tagName && (t = e.kAt(t, r)), p && (t.contentEditable = "true"), null != l && !1 === l(u, t, n) || (u.parentElement.insertBefore(t, u), u.parentElement.removeChild(u))
			}), o.tDz(i, n)
		}, t.Zin = function (t, e) {
			var n, i, o = t.value, s = null;
			return "onSave" in e && (s = e.onSave), e.onSave = (n = t, i = s, function (t, e) {
				if (null == i || !1 !== i(n, t, e)) if (!0 === e.YnG().TrY()) {
					var o = document.createElement("div");
					o.appendChild(t), n.value = o.innerHTML
				} else n.value = t.innerHTML
			}), r(o, e)
		}, t.YcK = r, t
	}(at, n, h, X, W), f)
}();
