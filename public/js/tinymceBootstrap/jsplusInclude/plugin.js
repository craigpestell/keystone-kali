!function(){var n={},e={},t={},r={},o={},i={},u={},l={},s={},a={},c={},f={},d={};r=function(n,e,t){var r;Object.defineProperty(n,"__esModule",{value:!0}),(r=n.KNk||(n.KNk={}))[r.gwg=0]="gwg",r[r.mRb=1]="mRb",r[r.OrW=2]="OrW";var o=function(){function n(n,e,t,r){void 0===r&&(r=e),this.JRB={},this.FUU=null,this.nIA=null,this.aoI=n,this.FUU=e,this.nIA=r,window.jsplus_default_parameters||(window.jsplus_default_parameters={}),window.jsplus_default_parameters[r]=t}return n.dzX=function(e){for(var t=0,r=n.vsm;t<r.length;t++){var o=r[t];if(o.dzX()===e)return o}return null},n.prototype.dzX=function(){return this.aoI},n.prototype.bnP=function(n,e){var r=this.pgn(n);null!=r&&("IMG"===r.tagName?t.aMO(r,"src",e):r.style.backgroundImage="url('"+e+"')")},n.prototype.EXg=function(n){if(void 0===n&&(n="b3"),window.jsplus_framework)return window.jsplus_framework;var e=this.huQ("framework");if(null!=e)return e;if(null!=(e=this.yUB("jsplusInclude","framework")))return e;var t=this.yUB("jsplusBootstrapInclude","version");return null!=t?"b"+t:null!=(t=this.yUB("jsplusFoundationInclude","version"))?"f"+t:null!=(t=this.yUB("jsplus_bootstrap_include","version"))?"b"+t:null!=(t=this.yUB("jsplus_foundation_include","version"))?"f"+t:null!=(t=this.JoA("jsplus_bootstrap_include_version",null))?"b"+t:null!=(t=this.JoA("jsplus_foundation_include_version",null))?"f"+t:n},n.prototype.yCf=function(){return this.MOH(this.nIA)},n.prototype.MOH=function(n){var t=this.uFY(n,{});t instanceof Object||(t={});var r=new e.GzR(t),o=window.jsplus_default_parameters[n],i=new e.GzR(o);return r.UqI(i)},n.prototype.huQ=function(n,e){return void 0===e&&(e=null),this.yCf().FKy(n,e)},n.vsm=[],n}();return n.Ila=o,n}(r,e=function(n,e){Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function n(e){for(var t in e){var r=e[t];r instanceof Object&&!Array.isArray(r)&&(r=new n(r)),this[t]=r}}return n.prototype.xOk=function(){for(var t={},r=0,o=this.TZH();r<o.length;r++){var i=o[r],u=this[i];u instanceof n&&(u=u.xOk()),t[i]=u}return e.bwA(t)},n.prototype.TZH=function(){var n=[];for(var e in this){"function"!=typeof this[e]&&n.push(e)}return n},n.prototype.FKy=function(e,t){return void 0===t&&(t=null),this.TZH().indexOf(e)>-1?this[e]instanceof n?this[e].xOk():this[e]:t},n.prototype.mAK=function(n,e){return void 0===e&&(e=null),this.FKy(n,e)},n.prototype.zQD=function(n,e){return void 0===e&&(e=null),this.FKy(n,e)},n.prototype.iDZ=function(n,e){return void 0===e&&(e=null),this.FKy(n,e)},n.prototype.HIS=function(){return new n(this.xOk())},n.prototype.LYb=function(e){for(var t=this.HIS(),r=e,o=t.TZH(),i=0,u=r.TZH();i<u.length;i++){var l=u[i],s=r[l];s instanceof n&&o.indexOf(l)>-1?t[l]=t[l].LYb(s):t[l]=s}return t},n.prototype.UqI=function(n){return n.LYb(this)},n}();return n.GzR=t,n}(e,n=function(n){function e(n){return null==n?null:"object"==typeof n?t(n):n}function t(n,r){if(void 0===r&&(r=!1),Array.isArray(n)){for(var o=[],i=0;i<n.length;i++)o.push(n[i]);return o}var u={};for(var l in n)"function"==typeof n[l]&&r||(null!=n[l]&&"object"==typeof n[l]?u[l]=t(n[l],r):u[l]=e(n[l]));return u}function r(n){var e=0;for(var t in n)n.hasOwnProperty(t)&&e++;return e}function o(n,e,t){return void 0===t&&(t=!1),(null!=n||null==e)&&((null==n||null!=e)&&(null==n||("object"!=typeof n||"object"==typeof e)&&(("object"!=typeof e||"object"==typeof n)&&("object"==typeof n?i(n,e,t):n===e))))}function i(e,u,l){void 0===l&&(l=!1);var s=t(e,l),a=t(u,l);if(r(s)!==r(a))return!1;for(var c in s){if(!(c in a))return!1;var f=s[c],d=a[c];if(f!==n.RgC&&d!==n.RgC){if(typeof f==typeof d&&"object"==typeof f&&!i(f,d,l))return!1;if(!o(f,d,l))return!1}}return!0}function u(n,e){return void 0===e&&(e=0),null==n?"null":"object"==typeof n?l(n,e):"string"==typeof n?'"'+n+'"':n.toString()}function l(n,e){void 0===e&&(e=0);for(var t="{",r=e+3,o="",i=0;i<e;i++)o+=" ";var l="";for(i=0;i<r;i++)l+=" ";var s=!0;for(var a in n){s&&(t+="\n",s=!1);var c=n[a];t.length>2&&(t+=",\n"),t+=l+a+": "+u(c,r)}return s||(t+="\n"+o),t+="}"}return Object.defineProperty(n,"__esModule",{value:!0}),n.RgC="__ANY",n.yUF=e,n.RIG=function n(e,t){void 0===t&&(t=!1);var r=[];for(var o in e)t&&"object"==typeof e[o]?r.push(n(e[o],!0)):r.push(e[o]);return r},n.bwA=t,n.jeP=r,n.ZxE=o,n.jta=i,n.JeB=u,n.iMH=l,n.WRW=function(n,e){if(null==n||null==e)return!1;if(n.length!==e.length)return!1;for(var t in n){var r=n[t],i=e[t];if(null==r||null==i)return!1;for(var u in r)if(!o(r[u],i[u]))return!1}return!0},n}(n)),t=function(n){function e(n,e){return void 0===n&&(n="div"),void 0===e&&(e=window.document),e.createElement(n)}function t(n,e){l(n,e)||(n.className=0===n.className.length?e:n.className+" "+e)}function r(n,e){for(var t=o(n);t.indexOf(e)>-1;)t.splice(t.indexOf(e),1);u(n,t)}function o(n){return void 0===n.className||null==n.className?[]:i(n.className)}function i(n){var e=n.split(/\s+/);return 1===e.length&&""===e[0]&&(e=[]),e}function u(n,e){if(0===e.length)n.removeAttribute("class");else{for(var t="",r=0;r<e.length;r++){var o=e[r].trim();o.length>0&&(t.length>0&&(t+=" "),t+=o)}n.className=t}}function l(n,e){for(var t=o(n),r=0;r<t.length;r++)if(t[r].toLowerCase()===e.toLowerCase())return!0;return!1}function s(n){if(void 0===n.getAttribute("style")||null==n.getAttribute("style")||0===n.getAttribute("style").trim().length)return{};for(var e={},t=n.getAttribute("style").split(/;/),r=0;r<t.length;r++){var o=t[r].trim();if(o.length>0){var i=o.indexOf(":");i>-1?e[o.substr(0,i).trim()]=o.substr(i+1):e[o]=""}}return e}function a(n,e){var t=s(n);for(var r in t){var o=t[r].trim();if(r===e)return o}return null}function c(n,e,t){if(null==t)f(n,e);else{var r=s(n);r[e]=t,d(n,r)}}function f(n,e){var t=s(n);delete t[e],d(n,t)}function d(n,e){var t=[];for(var r in e)r.trim().length>0&&t.push(r+":"+e[r.trim()]);t.length>0?n.setAttribute("style",t.join(";")):n.hasAttribute("style")&&n.removeAttribute("style")}function h(n){return void 0===n&&(n=document),n.getElementsByTagName("head")[0]}function p(n){return void 0===n&&(n=document),n.getElementsByTagName("body")[0]}function m(n,e,t){var r=e.trim();if(""!==r)try{null==t?n.removeAttribute(r):n.setAttribute(r,t)}catch(n){}}function v(n,e,t){if(!n.hasAttribute(e))return t;var r=n.getAttribute(e),o=parseInt(r);return isNaN(o)?t:o}function g(n,e){n.parentElement.insertBefore(e,n)}Object.defineProperty(n,"__esModule",{value:!0}),n.BEe=function(n){var t=e(n.tagName);t.innerHTML=n.innerHTML;for(var r=0;r<n.attributes.length;r++)t.setAttribute(n.attributes[r].name,n.attributes[r].value);return t},n.QrW=e,n.zcR=function(n,r,o,i){void 0===o&&(o="div"),void 0===i&&(i=null),null==o&&(o="div");var u=e(o);return null!=n&&t(u,n),null!=i&&(u.textContent=i),r.appendChild(u),u},n.AFu=t,n.LfB=r,n.GTY=function(n,e,o){o?t(n,e):r(n,e)},n.MGG=o,n.Qyt=i,n.jjU=u,n.cVp=l,n.yqi=function(n,e){for(var t=o(n),r=0;r<t.length;r++)if(0===t[r].indexOf(e))return!0;return!1},n.zDN=s,n.rms=function(n,e,t){void 0===t&&(t=null);var r=a(n,e);return null==r?t:(r=r.substring(0,r.length-2),parseInt(r))},n.aeE=a,n.OWo=function(n,e,t){var r=s(n);for(var o in r){var i=r[o];if(o===e&&i===t)return!0}return!1},n.PSO=function(n,e,t,o){o?c(n,e,t):r(n,e)},n.DEw=c,n.asd=f,n.oCF=d,n.dcD=function(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")},n.jOb=function(n){var t=e();return t.innerHTML=n,t.childNodes[0]},n.AlI=function(n){var t=e();return t.appendChild(n),t.innerHTML},n.RTy=function(n){return void 0===n&&(n=document),n.getElementsByTagName("html")[0]},n.GVv=h,n.aBl=p,n.ZoU=function(n,e){void 0===e&&(e=document);for(var t=e.getElementsByTagName("link"),r=0;r<t.length;r++)if(-1!==t[r].getAttribute("href").indexOf(n))return t[r];var o=e.createElement("link");return o.href=n,o.type="text/css",o.rel="stylesheet",h(e).appendChild(o),o},n.Tix=function(n,e,t){void 0===e&&(e=document),void 0===t&&(t=null);for(var r=e.getElementsByTagName("script"),o=!1,i=0;i<r.length;i++){var u=r[i].getAttribute("src");null!=u&&-1!==u.indexOf(n)&&(o=!0)}if(o)null!=t&&t();else{var l=e.createElement("script");l.type="text/javascript",null!=t&&(l.readyState?l.onreadystatechange=function(){"loaded"!==l.readyState&&"complete"!==l.readyState||(l.onreadystatechange=null,t())}:l.onload=function(){t()}),l.src=n,h(e).appendChild(l)}},n.CpB=function(n,e){void 0===e&&(e=document);var t=e.createElement("style");h(e).appendChild(t),t.innerHTML=n},n.Bmy=function(n,e){void 0===e&&(e=[]);for(var t=n.attributes,r={},o=0;o<t.length;o++){for(var i=!1,u=t[o].nodeName,l=0;l<e.length&&!i;l++)e[l]===u&&(i=!0);i||(r[u]=t[o].nodeValue)}return r},n.Nla=function(n,e,t){void 0===t&&(t=[]);for(var r=[],o=0;o<n.attributes.length;o++)r.push(n.attributes[o].name);for(var i=0,u=r;i<u.length;i++){var l=u[i];if(-1===t.indexOf(l)){var s=!0;for(o=0;o<e.length;o++)e[o][0]===l&&(s=!1);s&&n.removeAttribute(l)}}for(o=0;o<e.length;o++){for(var a=!1,c=e[o][0],f=e[o][1],d=0;d<t.length&&!a;d++)t[d]===c&&(a=!0);a||m(n,c,f)}},n.Fhg=function(n,e){m(n,e,null)},n.aMO=m,n.efV=v,n.gwi=function(n,e,t){var r=v(n,e,t);return r<0?t:r},n.HZr=function(){var n=0;return"number"==typeof window.innerWidth?n=window.innerWidth:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?n=document.documentElement.clientWidth:document.body&&(document.body.clientWidth||document.body.clientHeight)&&(n=document.body.clientWidth),n},n.hzr=function(){var n=0;return"number"==typeof window.innerWidth?n=window.innerHeight:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?n=document.documentElement.clientHeight:document.body&&(document.body.clientWidth||document.body.clientHeight)&&(n=document.body.clientHeight),n},n.eHV=function(n,e){for(var t=0,r=["propertychange","change","click","keyup","input","paste"];t<r.length;t++){var o=r[t];n.addEventListener(o,function(){var t=n,r=e;return function(n){r(t.value)}}())}},n.kAt=function(n,e){for(var t=document.createElement(e),r=0;r<n.attributes.length;r++){var o=n.attributes.item(r);t.setAttribute(o.name,o.value)}return t.innerHTML=n.innerHTML,t},n.dbt=g,n.FfG=function(n,e){n.parentElement.insertBefore(e,n.nextSibling)},n.zlu=function(n,e){n.children.length>0?g(n.children.item(0),e):n.appendChild(e)},n.glk=function(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];for(var r=n.children,o=[],i=0;i<r.length;i++)for(var u=0,l=e;u<l.length;u++){var s=l[u];r.item(i).tagName.toLowerCase()===s.toLowerCase()&&o.push(r.item(i))}return o};var y=0,w=!1;return n.sNb=function(n,t,r){if(!w){w=!0;var o="jsplus_upload_form_"+ ++y,i=document.getElementById(o);null!=i&&i.parentNode.removeChild(i),m(i=e("form"),"id",o),m(i,"enctype","multipart/form-data"),c(i,"display","none"),p(document).appendChild(i);var u=e("input");m(u,"type","file"),m(u,"name","file"),i.appendChild(u),n&&m(u,"multiple","multiple"),null!=t&&t.length>0&&m(u,"accept",t);var l,s,a=(l=u,s=r,w=!1,function(){for(var n=[],e=0;e<l.files.length;e++)n.push(l.files[e]);s(n)});u.addEventListener("change",a),u.click()}},n}(t)),o=function(n){return Object.defineProperty(n,"__esModule",{value:!0}),n.tOs=function(){return!1},n.rcI=function(n){},n}(o),u=function(n,e){Object.defineProperty(n,"__esModule",{value:!0});var t="",r=i(),o=r.lastIndexOf("/");function i(){if(document.currentScript)return document.currentScript.getAttribute("src");for(var n=document.getElementsByTagName("script"),e=n.length-1;e>=0;e--)if(n[e].src&&n[e].src.length>0)return n[e].src;return console.log("Warning: current URL of script not found"),""}return t=o>-1?r.substr(0,o+1):r,n.vMn=i,n.bqf=function(){return e.IOP(t)},n.NpM=function(n){t=n},n}(u,i=function(n){function e(n,e,t){void 0===e&&(e=!0),void 0===t&&(t=" ");if(n<1e3)return n+t+(e?"b":"");var r=-1;do{n/=1e3,++r}while(n>=1e3);return n.toFixed(1)+t+["K","M","G","T","P","E","Z","Y"][r]+(e?"b":"")}function t(n,t){for(var r=0;r<t.length;r++){var o=t[r];n=n.replace("%%"+(r+1),e(o))}for(r=0;r<t.length;r++){"string"!=typeof(o=t[r])&&(o=o.toString()),n=n.replace("%"+(r+1),o)}return n}function r(n){var e=n.lastIndexOf(".");return-1===e?null:n.substr(e+1)}return Object.defineProperty(n,"__esModule",{value:!0}),n.KRT=function(n){var e=n.lastIndexOf(".");if(e>-1&&e<n.length-1){var t=n.substr(e+1).toLowerCase();return"jpeg"===t||"jpg"===t||"png"===t||"gif"===t}return!1},n.JXi=e,n.sJM=function(e,t){void 0===t&&(t=" ");var r=Math.round(e/1e3),o=Math.floor(r/60);r-=60*o;var i=Math.floor(o/60);o-=60*i;var u=r+" "+n.vAL.sec;return o>0&&(u=o+" "+n.vAL.min+t+u),i>0&&(u=i+" "+n.vAL.hour+t+u),u},n.eGD=function(n){return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},n.Eco=t,n.hVT=function(n){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return t(n,e)},n.Knn=r,n.xff=function(n){var e=r(n);return null!=e&&(n=n.substr(0,n.length-e.length-1)),n},n.xvq=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},n.baH=function(n,e){return-1!==n.indexOf(e,n.length-e.length)},n.twH=function(n){return 0!==n.length&&"/"===n.substr(0,1)||(n="/"+n),n},n.bxA=function(n){return n.length>0&&"/"===n.substr(0,1)&&(n=n.substr(1)),n},n.IOP=function(n){return 0!==n.length&&"/"===n.substr(n.length-1)||(n+="/"),n},n.vlz=function(n){return n.length>0&&"/"===n.substr(n.length-1)&&(n=n.substr(0,n.length-1)),n},n.vAL={sec:"sec",min:"min",hours:"hours"},n}(i)),l=function(n){function e(){return window.jsplus_globals||(window.jsplus_globals=[]),window.jsplus_globals}return Object.defineProperty(n,"__esModule",{value:!0}),n.Jsb={set:function(n,t){e()[n]=t},exists:function(n){return n in e()},get:function(n,t){return void 0===t&&(t=null),e().exists(n)?e()[n]:t}},n}(l);var h,p=this&&this.__extends||(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])},function(n,e){function t(){this.constructor=n}h(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)});d=function(n,e,t,r,o){Object.defineProperty(n,"__esModule",{value:!0});function i(n,e){t.ZoU(e,n.UmU()),!0===n.huQ("includeCssToGlobalDoc")&&n.UmU()!==document&&t.ZoU(e,document)}function u(n){var e=n.huQ("framework","html");if("html"!==e&&"b3"!==e&&"b4"!==e&&"f5"!==e&&"f6"!==e)throw"Supported frameworks are: None ('html'), Bootstrap 3 and 4 ('b3' and 'b4'), Foundation 5 and 6 ('f5' and 'f6')";if("b3"===e||"b4"===e?r.UeF(n):"f5"!==e&&"f6"!==e||o.UeF(n),null!=n.huQ("css")){var t=n.huQ("css");for(var u in t)i(n,t[u])}if(null!=n.huQ("js")){var l=n.huQ("js");for(var u in l)i(n,l[u])}}return n.toG=i,n.UOq=function(n,e){t.Tix(e,n.UmU()),!0===n.huQ("includeJsToGlobalDoc")&&n.UmU()!==document&&t.Tix(e,document)},e.OKW.SPZ({eaF:"jsplusInclude",Rrg:[],cKz:function(n){n.Nqm("contentDom",u)},LCQ:{framework:"html",css:[],js:[],preventRemovingDivs:!0,url:null,previewStyles:!0,inContainer:!0,includeIeFix:!0,includeTheme:!0,includeJQuery:!0,useWet:!1}}),n}(d,s=function(n,e,t,r,o,i,u){Object.defineProperty(n,"__esModule",{value:!0});var l=function(n){function l(){return null!==n&&n.apply(this,arguments)||this}return p(l,n),l.SPZ=function(n){if(!r.tOs()){if(n.Rrg)for(var e=0,t=n.Rrg;e<t.length;e++){var s=t[e];window.tinymce.PluginManager.load(s,o.bqf()),l.DBP[s]=o.bqf()}window.tinymce.PluginManager.add(n.eaF,(a=n,function(n,e){if(a.Rrg)for(var t=0,r=a.Rrg;t<r.length;t++){var s=r[t];window.tinymce.PluginManager.get(s)(n,o.bqf())}var c=l.Nze(n,a.eaF,a.LCQ,a.nIA);!0!==c.JoA("useEditorUI",!0)||i.Jsb.exists("uiMode")||i.Jsb.set("uiMode",l.VcO()),null!=c.JoA("jsplus_plugins_dir_url",null)&&o.NpM(u.IOP(c.JoA("jsplus_plugins_dir_url",null))+a.eaF),a.cKz(c)}))}var a},l.Nze=function(n,t,r,o){var i=new l(n,t,r,o);return e.Ila.vsm.push(i),i},l.VcO=function(){return"tinymce"},l.prototype.MsG=function(){return"4"===window.tinymce.majorVersion?4:3},l.prototype.VIJ=function(){return window.tinymce.minorVersion},l.prototype.scc=function(){return!0},l.prototype.tHi=function(){return this.MsG()>3&&this.aoI.inline},l.prototype.guZ=function(){return this.aoI.id.replace(/\[/,"_").replace(/\]/,"_")},l.prototype.uRJ=function(){return 3!==this.MsG()&&this.tHi()?this.aoI.bodyElement:this.aoI.getContainer()},l.prototype.UmU=function(){return this.aoI.getDoc()},l.prototype.eVF=function(){return this.aoI.getContent()},l.prototype.oQo=function(n){this.aoI.setContent(n)},l.prototype.aJg=function(){var n=this.xFJ();return null!=n&&"IMG"===n.tagName?n:null},l.prototype.xFJ=function(){return null==window.tinymce.activeEditor||null==window.tinymce.activeEditor.selection?null:window.tinymce.activeEditor.selection.getNode()},l.prototype.bqf=function(){return window.tinymce.baseURL},l.prototype.xcM=function(){return this.BYi(this.FUU)},l.prototype.BYi=function(n){if(n in l.DBP)return l.DBP[n];for(var e=0;e<window.tinymce.editors.length;e++){window.tinymce.editors[e];var t=this.JoA("external_plugins");if(t&&n in t){var r=t[n].replace("\\","/"),o=r.lastIndexOf("/");return r=-1===o?"":r.substr(0,o)+"/"}}return this.bqf()+"/plugins/"+n+"/"},l.prototype.yUB=function(n,e){var t=this.MOH(n);return e in t?t[e]:window.jsplus_default_parameters&&n in window.jsplus_default_parameters&&e in window.jsplus_default_parameters[n]?window.jsplus_default_parameters[n][e]:null},l.prototype.JoA=function(n,e){return void 0===e&&(e=null),this.aoI.getParam(n,e)},l.prototype.TEv=function(n,e){},l.prototype.Uyw=function(n){3===this.MsG()?this.aoI.execCommand("mceInsertContent",!1,n):this.aoI.insertContent(n)},l.prototype.zoS=function(n,t){if(t===e.KNk.gwg||t===e.KNk.mRb||t===e.KNk.OrW)if(3===this.MsG())this.aoI.controlManager.setDisabled(n,t===e.KNk.gwg),this.aoI.controlManager.setActive(n,t===e.KNk.OrW);else if(this.guZ()in l.KEc&&n in l.KEc[this.guZ()]){var r=l.KEc[this.guZ()][n];r.disabled(t===e.KNk.gwg),r.active(t===e.KNk.OrW)}},l.prototype.pgn=function(n){var e=null;if(null==(e=4===this.MsG()&&this.tHi()?window.document.getElementById(this.dzX().theme.panel._id):this.uRJ()))return null;var t=this.uRJ().ownerDocument.getElementById("btn-"+n+"-"+this.guZ()+"-button");if(null==t&&(t=this.uRJ().ownerDocument.getElementById("btn-"+n+"-"+this.guZ())),null==t){var r=e.getElementsByClassName((4===this.MsG()?"mce-mce_button_":"mce_")+n);r.length>0&&(t=r[0])}if(null!=t){var o=t.getElementsByTagName(4===this.MsG()?"I":"IMG");return o.length>0?o[0]:null}return null},l.prototype.Nqm=function(n,e){var t=this;"mode"!==n&&("beforeGetOutputHTML"!==n?"contentDom"!==n?"elementsPathUpdate"!==n?("selectionChange"===n&&(3===this.MsG()?this.aoI.onNodeChange.add(function(n,o,i){r.rcI(t.FUU),e(t)}):this.aoI.on("NodeChange",function(n){r.rcI(t.FUU),e(t)})),"dropFiles"===n&&4===this.MsG()&&this.aoI.on("drop",function(n){n.preventDefault(),n.dataTransfer.files.length>0&&e(t,n.dataTransfer.files)}),"keyDown"===n&&this.aoI.on("keydown",function(){var n=e;return function(e){r.rcI(this.pluginName),n(this,e.keyCode,e)}})):r.rcI(this.FUU):4===this.MsG()?this.aoI.on("init",function(n){r.rcI(t.FUU),e(t)}):this.aoI.onInit.add(function(n){r.rcI(t.FUU),e(t)}):this.aoI.on("SaveContent",function(n){r.rcI(t.FUU),n.content=e(t,n.content)}))},l.prototype.UxZ=function(n){n.preventDefault()},l.prototype.jwv=function(n){var e=this,t=n.DDW,r=this.xcM()+"icons/"+n.YgM+".png";this.ZDq(this.aoI,n.eaF,r,t,!1,function(){n.LdN(e)}),n.hoD&&this.MsG()>3&&this.aoI.addMenuItem(n.eaF,{text:t,context:n.hoD,icon:!0,image:r})},l.prototype.ZDq=function(n,e,r,o,i,u,s){var a,c,f=this,d=(a=n,function(n){u(a)}),h=n,p={text:"",type:"button",icon:!0,classes:"widget btn "+l.VcO()+" btn-"+l.VcO()+"-"+this.guZ(),image:r,label:o,tooltip:o,title:o,id:"btn-"+e+"-"+this.guZ(),onPostRender:function(){var n,t;n=h,t=this,f.guZ()in l.KEc||(l.KEc[f.guZ()]={}),l.KEc[f.guZ()][e]=t,i&&window.tinymce.DOM.remove(t.getEl("preview")),null!=u&&t.on("click",d),s&&s(n)}};i&&(p.type=3===this.MsG()?"ColorSplitButton":"colorbutton",p.color="#FFFFFF",p.panel={}),3===this.MsG()&&i&&(c=!1,n.onNodeChange.add(function(n,r,o){if(!c){c=!0;var i=this.getElement().getElementsByClassName("mce_"+e);if(i.length>0){var u=i[0],l=u.parentNode,s=(l.nextSibling,t.jOb('<div id="content_forecolor" role="button" tabindex="-1" aria-labelledby="content_forecolor_voice" aria-haspopup="true"><table role="presentation" class="mceSplitButton mceSplitButtonEnabled mce_forecolor" cellpadding="0" cellspacing="0" title="Select Text Color"><tbody><tr><td class="mceFirst"></td><td class="mceLast"><a role="button" style="width:10px" tabindex="-1" href="javascript:;" class="mceOpen mce_forecolor" onclick="return false;" onmousedown="return false;" title="Select Text Color"><span class="mceOpen mce_forecolor"><span style="display:none;" class="mceIconOnly" aria-hidden="true">▼</span></span></a></td></tr></tbody></table></div>')),a=s.getElementsByClassName("mceFirst")[0];l.appendChild(s),a.appendChild(u),u.style.marginRight="-1px",u.className=u.className+" mceAction mce_forecolor",s.getElementsByClassName("mceOpen")[0].addEventListener("click",d)}}})),n.addButton(e,p)},l.prototype.uFY=function(n,e){return this.aoI.getParam(n,e)},l.KEc={},l.ctL={},l.DBP={},l}(e.Ila);return n.OKW=l,n}(s,r,t,o,u,l,i),t,c=function(n,e,t){return Object.defineProperty(n,"__esModule",{value:!0}),n.UeF=function(n){if(!(window.location.pathname.indexOf("admin/config/content/formats/manage")>-1)){var r=n.EXg(),o=n.UmU(),i=n.huQ("url");if(null==i&&(i="b3"===r?t.gQf:t.xiS),t.eXn(r,{url:i,includeCss:!0,includeJs:!0,includeJQuery:n.huQ("includeJQuery"),useWet:n.huQ("useWet"),includeIeFix:n.huQ("includeFix"),includeTheme:n.huQ("includeTheme")},o),t.eXn(r,{url:i,includeCss:n.huQ("includeCssToGlobalDoc"),includeJs:n.huQ("includeJsToGlobalDoc"),includeJQuery:n.huQ("includeJQuery"),useWet:n.huQ("useWet"),includeIeFix:n.huQ("includeFix"),includeTheme:n.huQ("includeTheme")},window.document),!0===n.huQ("inContainer")){var u=e.aBl(o);u!==e.aBl(window.document)&&e.AFu(u,"container")}!0===n.huQ("previewStyles")&&e.ZoU(n.xcM()+"plugin-bootstrap-include-style.css",document);var l=function(e){return t.Lyt(e,n.EXg("b3"))||t.oeN(e)};!0===n.huQ("preventRemovingDivs")&&n.Nqm("keyDown",function(n,e,t){var r=n.xFJ();if(null!=r){var o=l(r);if(o||null==r.parentElement||(o=l(r.parentElement)),o){var i=r.innerText;(8===e||46===e)&&1===i.length&&(r.innerHTML="&nbsp;",n.UxZ(t))}}})}},n}(c,t,a=function(n,e){Object.defineProperty(n,"__esModule",{value:!0}),n.uPA="",n.FqQ="b4",n.uau="b3",n.ZJy="f5",n.EoP="f6";var t=function(){function n(n,e){this.jev=null,this.TJV=n,this.kNA=e}return n.prototype.Zen=function(){if(null==this.jev){this.jev=[];for(var n=0,e=h(this.TJV,this.kNA);n<e.length;n++){var t=e[n];this.jev.push(new r(t,this.kNA))}}return this.jev},n.prototype.zVq=function(n){for(var e=0,t=0,r=this.Zen();t<r.length;t++){var o=r[t];o.QAt(n)&&(e+=o.kvx(n)+o.KQx(n))}return e},n}();n.uws=t;var r=function(){function r(n,e){this.QQx=null,this.TJV=n,this.kNA=e,this.xZl=x(this.kNA),this.ZLu=[[],[]];for(var t=0,r=this.xZl;t<r.length;t++){var o=r[t];this.ZLu[0].push(N(n,o,e))}for(var i=0,u=this.xZl;i<u.length;i++){o=u[i];this.ZLu[1].push(Z(n,o,e))}this.ZLu.push(Q(n,this.kNA)),this.VVT()}return r.prototype.EXg=function(){return this.kNA},r.prototype.SaG=function(){if(null==this.QQx){var n=p(this.TJV,this.kNA);null!=n&&(this.QQx=new t(n,this.kNA))}return this.QQx},r.prototype.VVT=function(){this.uZv=[];for(var n=0;n<this.ZLu.length;n++){for(var e=[],t=0;t<this.ZLu[0].length;t++)e.push(this.ZLu[n][t]);this.uZv.push(e)}},r.prototype.Hpo=function(){for(var t=e.MGG(this.TJV),r=o(this.kNA),i=t.length-1;i>=0;i--)r.indexOf(t[i])>-1&&t.splice(i,1);for(var u=0,l=x(this.kNA);u<l.length;u++){var s=l[u],a=this.BjS(s);a>-1&&(this.kNA===n.FqQ&&""===s?t.push("col-"+a):t.push("col-"+s+"-"+a));var c=this.Tec(s);c>-1&&(this.kNA===n.FqQ?""===s?t.push("offset-"+a):t.push("offset-"+s+"-"+c):this.kNA===n.uau?t.push("col-"+s+"-offset-"+c):this.kNA!==n.ZJy&&this.kNA!==n.EoP||t.push(s+"-offset-"+c)),this.kNA===n.FqQ||this.QAt(s)||t.push("hidden-"+s)}e.jjU(this.TJV,t),this.VVT()},r.prototype.evv=function(e,t){if(this.kNA!==n.FqQ){var r=x(this.kNA).indexOf(e);if(r<0)throw new Error("Incorrect framework format: "+e);this.ZLu[2][r]=t}},r.prototype.SpU=function(){for(var n=0;n<this.ZLu.length;n++)for(var e=0;e<this.ZLu[n].length;e++)if(this.ZLu[n][e]!==this.uZv[n][e])return!0;return!1},r.prototype.rDf=function(){for(var n=void 0;n<=this.ZLu[2].length;n++)if(this.ZLu[2][n]!==this.uZv[2][n])return!0;return!1},r.prototype.FMv=function(n,e){var t=x(this.kNA).indexOf(n);if(t<0)throw new Error("Incorrect framework format: "+n);this.ZLu[0][t]=e},r.prototype.BjS=function(n){var e=x(this.kNA).indexOf(n);if(e<0)throw new Error("Incorrect framework format: "+n);return this.ZLu[0][e]},r.prototype.cnY=function(){return this.ZLu[0]},r.prototype.taX=function(n,e){var t=x(this.kNA).indexOf(n);if(t<0)throw new Error("Incorrect framework format: "+n);this.ZLu[1][t]=e},r.prototype.Tec=function(n){var e=x(this.kNA).indexOf(n);if(e<0)throw new Error("Incorrect framework format: "+n);return this.ZLu[1][e]},r.prototype.kvx=function(n){var e=x(this.kNA).indexOf(n);if(e<0)throw new Error("Incorrect framework format: "+n);var t=this.ZLu[1][e];if(t>-1)return t;for(var r=e-1;r>=0;r--)if(-1!==this.ZLu[1][r])return this.ZLu[1][r];return 0},r.prototype.KQx=function(n){var e=x(this.kNA).indexOf(n);if(e<0)throw new Error("Incorrect framework format: "+n);var t=this.ZLu[0][e];if(t>-1)return t;for(var r=e-1;r>=0;r--)if(-1!==this.ZLu[0][r])return this.ZLu[0][r];return 12},r.prototype.QAt=function(n){var e=x(this.kNA).indexOf(n);if(e<0)throw new Error("Incorrect framework format: "+n);return this.ZLu[2][e]},r}();function o(e){for(var t=[],r=0,o=x(e);r<o.length;r++){for(var i=o[r],u=0;u<=12;u++)if(e===n.uau||e===n.FqQ){var l=""===i?"":"-"+i;e===n.uau?t.push("col"+l+"-offset-"+u):t.push("offset"+l+"-"+u),u>0&&t.push("col"+l+"-"+u)}else e!==n.ZJy&&e!==n.EoP||t.push(i+"-offset-"+u);e===n.FqQ||(e===n.uau?(t.push("visible-"+i),t.push("hidden-"+i)):e!==n.ZJy&&e!==n.EoP||(t.push("show-for-"+i+"-only"),t.push("show-for-"+i+"-up"),t.push("hide-for-"+i+"-only"),t.push("hide-for-"+i+"-up")))}return t}function i(e){return e===n.uau||e===n.FqQ}function u(t,r){if(r===n.uau||r===n.FqQ)return null!=t&&1===t.nodeType&&"DIV"===t.nodeName&&(e.cVp(t,"container")||e.cVp(t,"container-fluid"));if(r===n.ZJy||n.EoP)return!1;throw new Error("Framework is not supported: "+r)}function l(n){return null!=n&&1===n.nodeType&&"DIV"===n.nodeName&&e.cVp(n,"row")}function s(){return"row"}function a(n,e){for(var t=n;0!==e;)if(e<0){if(null==(t=t.previousSibling))return null;l(t)&&e++}else{if(null==(t=t.nextSibling))return null;l(t)&&e--}return t}function c(n,e){if(void 0===e&&(e=1),e<0)throw new Error("Incorrect `numberBack` parameter value:"+e);return a(n,-e)}function f(n,e){if(void 0===e&&(e=1),e<0)throw new Error("Incorrect `numberNext` parameter value: "+e);return a(n,e)}function d(n,e){if(null!=e&&0!==e){var t=a(n,e);null!=t&&(e<0?n.parentNode.insertBefore(n,t):n.parentNode.insertBefore(n,t.nextSibling))}}function h(n,e){for(var t=n.children,r=[],o=0;o<t.length;o++)if(m(t[o],e))r.push(t[o]);else if(!u(t[o],e)&&!l(t[o]))for(var i=0,s=h(t[o],e);i<s.length;i++){var a=s[i];r.push(a)}return r}function p(n,e){for(var t=n;null!=t;){if(l(t=t.parentNode))return t;if(m(t,e)||u(t,e))return null}return null}function m(t,r){if(null==t||1!==t.nodeType||"DIV"!==t.nodeName)return!1;if(r===n.FqQ){for(var o=0,i=e.MGG(t);o<i.length;o++){if(null!=(a=(s=i[o]).match(/^col-(\d{1,2})$/i))&&(1===a[1].length||"1"===a[1].substr(0,1)))return!0;if(null!=(a=s.match(/^col-(sm|md|lg|xl)-(\d{1,2})$/i))&&(1===a[2].length||"1"===a[2].substr(0,1)))return!0}return!1}if(r===n.uau){for(var u=0,l=e.MGG(t);u<l.length;u++){var s,a;if(null!=(a=(s=l[u]).match(/^col-(xs|sm|md|lg|xl)-(\d{1,2})$/i))&&(1===a[2].length||"1"===a[2].substr(0,1)))return!0}return!1}if(r===n.ZJy||r===n.EoP)return e.cVp(t,"columns");throw new Error("Framework is not supported: "+r)}function v(n,e,t){for(var r=n;0!==e;)if(e<0){if(null==(r=r.previousSibling))return null;m(r,t)&&e++}else{if(null==(r=r.nextSibling))return null;m(r,t)&&e--}return r}function g(n,e,t){if(void 0===t&&(t=1),t<0)throw new Error("Incorrect `numberBack` parameter value: "+t);return v(n,-t,e)}function y(n,e,t){if(void 0===t&&(t=1),t<0)throw new Error("Incorrect `numberNext` parameter value: "+t);return v(n,t,e)}function w(n,e,t){if(null!=e&&0!==e){var r=v(n,e,t);null!=r&&(e<0?n.parentNode.insertBefore(n,r):n.parentNode.insertBefore(n,r.nextSibling))}}function b(n,t,r,o){for(var i=0,u=e.MGG(n);i<u.length;i++){var l=u[i];if(l.indexOf(t)>-1){var s=l.substr(l.indexOf(t)+t.length),a=parseInt(s);if(NaN!==a&&a>=r&&a<=o)return a}}return-1}function x(e){if(e===n.FqQ)return["","sm","md","lg","xl"];if(e===n.uau)return["xs","sm","md","lg"];if(e===n.ZJy||e===n.EoP)return["small","medium","large","xlarge","xxlarge"];throw new Error("Framework is not supported: "+e)}function I(e){if(e===n.FqQ||e===n.uau)return"col-FORMAT-XX";if(e===n.ZJy||e===n.EoP)return"FORMAT-XX";throw new Error("Framework is not supported: "+e)}function O(e,t,r){var o=null==t?"":t.toString();return r===n.FqQ&&""===e?"col-"+o:I(r).replace("FORMAT",e).replace("XX",o)}function j(n,e){return O(n,null,e)}function N(n,e,t){if(x(t).indexOf(e)<0)throw new Error("Incorrect framework format: "+e);return b(n,j(e,t),1,12)}function E(e){if(e===n.FqQ)return"offset-FORMAT-XX";if(e===n.uau)return"col-FORMAT-offset-XX";if(e===n.ZJy||e===n.EoP)return"FORMAT-offset-XX";throw new Error("Framework is not supported: "+e)}function _(e,t,r){return r===n.FqQ&&""===e?"offset-"+t:E(r).replace("FORMAT",e).replace("XX",null==t?"":t.toString())}function F(n,e){return _(n,null,e)}function Z(n,e,t){if(x(t).indexOf(e)<0)throw new Error("Incorrect framework format: "+e);return b(n,F(e,t),0,12)}function k(e){if(e===n.FqQ)return"col-";if(e===n.uau)return"col-xs-";if(e===n.ZJy||e===n.EoP)return"small-";throw new Error("Framework is not supported: "+e)}function A(e){if(e===n.FqQ||e===n.uau)return"";if(e===n.ZJy||e===n.EoP)return"columns";throw new Error("Framework is not supported: "+e)}function Q(t,r){if(r===n.FqQ)return[!0,!0,!0,!0,!0];if(r===n.uau){for(var o=[!0,!0,!0,!0],i=0,u=s=e.MGG(t);i<u.length;i++){var l=u[i];l.indexOf("hidden-xs")>=0&&(o[0]=!1),l.indexOf("hidden-sm")>=0&&(o[1]=!1),l.indexOf("hidden-md")>=0&&(o[2]=!1),l.indexOf("hidden-lg")>=0&&(o[3]=!1),l.indexOf("visible-xs")>=0&&(o[1]=!1,o[2]=!1,o[3]=!1),l.indexOf("visible-sm")>=0&&(o[0]=!1,o[2]=!1,o[3]=!1),l.indexOf("visible-md")>=0&&(o[0]=!1,o[1]=!1,o[3]=!1),l.indexOf("visible-lg")>=0&&(o[0]=!1,o[1]=!1,o[2]=!1)}return o}if(r===n.ZJy||r===n.EoP){var s;o=[!0,!0,!0,!0,!0];return(s=e.MGG(t)).indexOf("show-for-small-only")>=0&&(o[1]=!1,o[2]=!1,o[3]=!1,o[4]=!1),s.indexOf("show-for-medium-only")>=0&&(o[0]=!1,o[2]=!1,o[3]=!1,o[4]=!1),s.indexOf("show-for-large-only")>=0&&(o[0]=!1,o[1]=!1,o[3]=!1,o[4]=!1),s.indexOf("show-for-xlarge-only")>=0&&(o[0]=!1,o[1]=!1,o[2]=!1,o[4]=!1),s.indexOf("show-for-xxlarge-only")>=0&&(o[0]=!1,o[1]=!1,o[2]=!1,o[3]=!1),s.indexOf("show-for-medium-up")>=0&&(o[0]=!1),s.indexOf("show-for-large-up")>=0&&(o[0]=!1,o[1]=!1),s.indexOf("show-for-xlarge-up")>=0&&(o[0]=!1,o[1]=!1,o[2]=!1),s.indexOf("show-for-xxlarge-up")>=0&&(o[0]=!1,o[1]=!1,o[2]=!1,o[3]=!1),s.indexOf("hide-for-small-only")>=0&&(o[0]=!1),s.indexOf("hide-for-medium-only")>=0&&(o[1]=!1),s.indexOf("hide-for-large-only")>=0&&(o[2]=!1),s.indexOf("hide-for-xlarge-only")>=0&&(o[3]=!1),s.indexOf("hide-for-xxlarge-only")>=0&&(o[4]=!1),s.indexOf("hide-for-medium-up")>=0&&(o[1]=!1,o[2]=!1,o[3]=!1,o[4]=!1),s.indexOf("hide-for-large-up")>=0&&(o[2]=!1,o[3]=!1,o[4]=!1),s.indexOf("hide-for-xlarge-up")>=0&&(o[3]=!1,o[4]=!1),s.indexOf("hide-for-xxlarge-up")>=0&&(o[4]=!1),o}throw new Error("Framework is not supported: "+r)}function M(n,e){for(var t=n;null!=t;){if(m(t,e))return t;if(null==t.parentNode)return null;t=t.parentNode}return null}return n.ddu=r,n.gQf="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7",n.xiS="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2",n.rLq="//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3",n.Ynw="//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1",n.eXn=function(t,r,o){if(void 0===r&&(r={}),void 0===o&&(o=window.document),r.url||(t===n.uau&&(r.url="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/"),t===n.FqQ&&(r.url="//cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/"),t===n.ZJy&&(r.url="//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.0/"),t===n.EoP&&(r.url="//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.0/")),r.url.match(/\/$/)||(r.url+="/"),void 0!==r.includeJQuery&&null!==r.includeJQuery||(r.includeJQuery=!0),void 0!==r.includeCss&&null!==r.includeCss||(r.includeCss=!0),void 0!==r.includeJs&&null!==r.includeJs||(r.includeJs=!1),void 0!==r.useWet&&null!==r.useWet||(r.useWet=!1),void 0!==r.includeIeFix&&null!==r.includeIeFix||(r.includeIeFix=!0),void 0!==r.includeTheme&&null!==r.includeTheme||(r.includeTheme=!0),void 0!==r.includeIcons&&null!==r.includeIcons||(r.includeIcons=!0),void 0!==r.urlIcons&&null!==r.urlIcons||(r.urlIcons="//cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css"),window.jsplus_framework=t,t===n.uau||t===n.FqQ)t===n.uau&&r.useWet?(r.includeCss&&e.ZoU(r.url+"css/theme.css",o),r.includeJs&&e.Tix(r.url+"js/wet-boew.js",o),r.includeIeFix&&r.includeCss&&e.ZoU(r.url+"css/ie8-theme.css",o),r.includeIeFix&&r.includeJs&&e.Tix(r.url+"js/ie8-wet-boew2.js",o)):(r.includeCss&&e.ZoU(r.url+"css/bootstrap.min.css",o),r.includeJs&&e.Tix(r.url+"js/bootstrap.min.js",o),t===n.uau&&(r.includeTheme&&e.ZoU(r.url+"css/bootstrap-theme.min.css",o),r.includeIeFix&&r.includeJs&&(e.Tix("//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js",o),e.Tix("//oss.maxcdn.com/respond/1.4.2/respond.min.js",o))));else if(t===n.ZJy)r.includeJs&&r.includeJQuery&&e.Tix("//code.jquery.com/jquery-1.10.1.min.js",o),r.includeCss&&e.ZoU(r.url+"css/foundation.min.css",o),r.includeJs&&(e.Tix(r.url+"js/foundation.min.js",o),e.Tix(r.url+"js/vendor/modernizr.js",o)),r.includeCss&&r.includeIcons&&e.ZoU(r.urlIcons,o);else{if(t!==n.EoP)throw new Error("Framework is not supported: "+t);r.includeJs&&r.includeJQuery&&e.Tix("//cdn.jsdelivr.net/jquery/2.2.2/jquery.min.js",o),r.includeCss&&e.ZoU(r.url+"css/foundation.min.css",o),r.includeJs&&e.Tix(r.url+"js/foundation.min.js",o),r.includeCss&&r.includeIcons&&e.ZoU(r.urlIcons,o)}},n.NZI=o,n.aGM=function(){return[n.uau,n.FqQ,n.ZJy,n.EoP]},n.PZT=function(e){return e===n.ZJy||e===n.EoP},n.uei=i,n.vUR=u,n.oeN=l,n.CkW=s,n.AFF=a,n.smc=function(n){return null==c(n)},n.fMj=function(n){return null==f(n)},n.YNf=c,n.gla=f,n.lbe=d,n.JfZ=function(n,e){if(void 0===e&&(e=1),e<0)throw new Error("Incorrect `upCount` parameter value: "+e);d(n,e)},n.tFh=function(n,e){if(void 0===e&&(e=1),e<0)throw new Error("Incorrect `downCount` parameter value: "+e);d(n,e)},n.Arq=h,n.abJ=p,n.Lyt=m,n.RVW=v,n.jtV=function(n,e){return null==g(n,e)},n.nen=function(n,e){return null==y(n,e)},n.chW=g,n.ERU=y,n.VDJ=w,n.erJ=function(n,e,t){if(void 0===t&&(t=1),t<0)throw new Error("Incorrect `leftCount` parameter value:"+t);w(n,-t,e)},n.orq=function(n,e,t){if(void 0===t&&(t=1),t<0)throw new Error("Incorrect `rightCount` parameter value:"+t);w(n,t,e)},n.bat=x,n.csv=I,n.wBq=O,n.MOI=j,n.NWV=N,n.jSk=E,n.wJV=_,n.pAJ=F,n.FhL=Z,n.UZg=function(n){return i(n)?"container":""},n.Glk=function(n){return"row"},n.IBM=k,n.pBk=function(e){if(e===n.FqQ)return"col-12";if(e===n.uau)return"col-xs-12";if(e===n.ZJy||e===n.EoP)return"small-12 columns";throw new Error("Framework is not supported: "+e)},n.mku=A,n.NcS=Q,n.hPm=function(e){return n.vAL["format_"+e]},n.MrZ=function(n,e){var t=M(n,e);if(null==t)for(var r=n;null!=r;){if("DIV"===r.tagName)return r;if(null==r.parentNode)return null;r=r.parentNode}return t},n.ncX=M,n.yNm=function(n,e){for(var t=n;null!=t;){if(l(t))return t;if(null==t.parentNode)return null;t=t.parentNode}return null},n.zqQ=function(n,e){for(var t=n;null!=t;){if(u(t,e))return t;if(null==t.parentNode)return null;t=t.parentNode}return null},n.pdG=function(n,t,r){n.className="row";for(var o=0,i=r;o<i.length;o++){var u=i[o],l=document.createElement("div");l.className=A(t);var s=k(t);e.AFu(l,s+u),n.appendChild(l)}},n.vAL={column:"Column",format_:"Default",format_xs:"X-Small",format_sm:"Small",format_md:"Medium",format_lg:"Large",format_xl:"X-Large",format_small:"Small",format_medium:"Medium",format_large:"Large",format_xlarge:"X-Large",format_xxlarge:"XX-Large"},n}(a,t)),f=function(n,e,t,r){return Object.defineProperty(n,"__esModule",{value:!0}),n.UeF=function(n){if(!(window.location.pathname.indexOf("admin/config/content/formats/manage")>-1)){var o=n.EXg(),i=n.UmU(),u=n.huQ("url");null==u&&(u="f5"===o?r.rLq:r.Ynw),r.eXn(o,{url:u,includeCss:!0,includeJs:!0,includeJQuery:n.huQ("includeJQuery"),includeIcons:n.huQ("includeIcons"),urlIcons:n.huQ("urlIcons")},i),r.eXn(o,{url:u,includeCss:n.huQ("includeCssToGlobalDoc"),includeJs:n.huQ("includeJsToGlobalDoc"),includeJQuery:n.huQ("includeJQuery"),includeIcons:n.huQ("includeIcons"),urlIcons:n.huQ("urlIcons")},window.document),"tinymce"===e.OKW.VcO()&&t.CpB(".mce-panel button, .mce-panel button:hover { background-color: transparent !important; }.mce-close { padding-left: 0 !important; padding-top: 0 !important; padding-right: 0 !important; }"),n.huQ("previewStyles")&&t.ZoU(n.xcM()+"plugin-foundation-include-style.css");var l=function(e){return r.Lyt(e,n.EXg("f6"))||r.oeN(e)};!0===n.huQ("preventRemovingDivs")&&n.Nqm("keyDown",function(n,e,t){var r=n.xFJ();if(null!=r){var o=l(r);if(o||null==r.parentElement||(o=l(r.parentElement)),o){var i=r.innerText;(8===e||46===e)&&1===i.length&&(r.innerHTML="&nbsp;",n.UxZ(t))}}})}},n}(f,s,t,a))}();
