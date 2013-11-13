/*! MODX-Revolution-Responsive-Manager-Theme - v0.1.0 - 2013-11-13
* Copyright (c) 2013 ; Licensed  */
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/*!
 * selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms of the MIT license.
 * selectivizr.com
 */
(function(j){function A(a){return a.replace(B,h).replace(C,function(a,d,b){for(var a=b.split(","),b=0,e=a.length;b<e;b++){var s=D(a[b].replace(E,h).replace(F,h))+o,l=[];a[b]=s.replace(G,function(a,b,c,d,e){if(b){if(l.length>0){var a=l,f,e=s.substring(0,e).replace(H,i);if(e==i||e.charAt(e.length-1)==o)e+="*";try{f=t(e)}catch(k){}if(f){e=0;for(c=f.length;e<c;e++){for(var d=f[e],h=d.className,j=0,m=a.length;j<m;j++){var g=a[j];if(!RegExp("(^|\\s)"+g.className+"(\\s|$)").test(d.className)&&g.b&&(g.b===!0||g.b(d)===!0))h=u(h,g.className,!0)}d.className=h}}l=[]}return b}else{if(b=c?I(c):!v||v.test(d)?{className:w(d),b:!0}:null)return l.push(b),"."+b.className;return a}})}return d+a.join(",")})}function I(a){var c=!0,d=w(a.slice(1)),b=a.substring(0,5)==":not(",e,f;b&&(a=a.slice(5,-1));var l=a.indexOf("(");l>-1&&(a=a.substring(0,l));if(a.charAt(0)==":")switch(a.slice(1)){case "root":c=function(a){return b?a!=p:a==p};break;case "target":if(m==8){c=function(a){function c(){var d=location.hash,e=d.slice(1);return b?d==i||a.id!=e:d!=i&&a.id==e}k(j,"hashchange",function(){g(a,d,c())});return c()};break}return!1;case "checked":c=function(a){J.test(a.type)&&k(a,"propertychange",function(){event.propertyName=="checked"&&g(a,d,a.checked!==b)});return a.checked!==b};break;case "disabled":b=!b;case "enabled":c=function(c){if(K.test(c.tagName))return k(c,"propertychange",function(){event.propertyName=="$disabled"&&g(c,d,c.a===b)}),q.push(c),c.a=c.disabled,c.disabled===b;return a==":enabled"?b:!b};break;case "focus":e="focus",f="blur";case "hover":e||(e="mouseenter",f="mouseleave");c=function(a){k(a,b?f:e,function(){g(a,d,!0)});k(a,b?e:f,function(){g(a,d,!1)});return b};break;default:if(!L.test(a))return!1}return{className:d,b:c}}function w(a){return M+"-"+(m==6&&N?O++:a.replace(P,function(a){return a.charCodeAt(0)}))}function D(a){return a.replace(x,h).replace(Q,o)}function g(a,c,d){var b=a.className,c=u(b,c,d);if(c!=b)a.className=c,a.parentNode.className+=i}function u(a,c,d){var b=RegExp("(^|\\s)"+c+"(\\s|$)"),e=b.test(a);return d?e?a:a+o+c:e?a.replace(b,h).replace(x,h):a}function k(a,c,d){a.attachEvent("on"+c,d)}function r(a,c){if(/^https?:\/\//i.test(a))return c.substring(0,c.indexOf("/",8))==a.substring(0,a.indexOf("/",8))?a:null;if(a.charAt(0)=="/")return c.substring(0,c.indexOf("/",8))+a;var d=c.split(/[?#]/)[0];a.charAt(0)!="?"&&d.charAt(d.length-1)!="/"&&(d=d.substring(0,d.lastIndexOf("/")+1));return d+a}function y(a){if(a)return n.open("GET",a,!1),n.send(),(n.status==200?n.responseText:i).replace(R,i).replace(S,function(c,d,b,e,f){return y(r(b||f,a))}).replace(T,function(c,d,b){d=d||i;return" url("+d+r(b,a)+d+") "});return i}function U(){var a,c;a=f.getElementsByTagName("BASE");for(var d=a.length>0?a[0].href:f.location.href,b=0;b<f.styleSheets.length;b++)if(c=f.styleSheets[b],c.href!=i&&(a=r(c.href,d)))c.cssText=A(y(a));q.length>0&&setInterval(function(){for(var a=0,c=q.length;a<c;a++){var b=q[a];if(b.disabled!==b.a)b.disabled?(b.disabled=!1,b.a=!0,b.disabled=!0):b.a=b.disabled}},250)}if(!/*@cc_on!@*/true){var f=document,p=f.documentElement,n=function(){if(j.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){return null}}(),m=/MSIE (\d+)/.exec(navigator.userAgent)[1];if(!(f.compatMode!="CSS1Compat"||m<6||m>8||!n)){var z={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"},t,q=[],O=0,N=!0,M="slvzr",R=/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g,S=/@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g,T=/\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g,L=/^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/,B=/:(:first-(?:line|letter))/g,C=/(^|})\s*([^\{]*?[\[:][^{]+)/g,G=/([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g,H=/(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g,P=/[^\w-]/g,K=/^(INPUT|SELECT|TEXTAREA|BUTTON)$/,J=/^(checkbox|radio)$/,v=m>6?/[\$\^*]=(['"])\1/:null,E=/([(\[+~])\s+/g,F=/\s+([)\]+~])/g,Q=/\s+/g,x=/^\s*((?:[\S\s]*\S)?)\s*$/,i="",o=" ",h="$1";(function(a,c){function d(){try{p.doScroll("left")}catch(a){setTimeout(d,50);return}b("poll")}function b(d){if(!(d.type=="readystatechange"&&f.readyState!="complete")&&((d.type=="load"?a:f).detachEvent("on"+d.type,b,!1),!e&&(e=!0)))c.call(a,d.type||d)}var e=!1,g=!0;if(f.readyState=="complete")c.call(a,i);else{if(f.createEventObject&&p.doScroll){try{g=!a.frameElement}catch(h){}g&&d()}k(f,"readystatechange",b);k(a,"load",b)}})(j,function(){for(var a in z){var c,d,b=j;if(j[a]){for(c=z[a].replace("*",a).split(".");(d=c.shift())&&(b=b[d]););if(typeof b=="function"){t=b;U();break}}}})}}})(this);
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

 /**
 * DarthPhader plugin
 * I find your lack of configuration options disturbing
 * @author Phil Steer
 * https://github.com/pdincubus/jquery.DarthPhader
 */

 (function($) {
     $.fn.darthPhader = function(options) {
         /*----------------------------------------------------
          *      default settings
          *----------------------------------------------------*/

         var settings = $.extend({
             'animationDuration' : 2000,     //milliseconds
             'slideEasing' : 'swing',        //default options are swing or linear
             'includeNav' : true,            //do you want to output next/prev buttons?
             'navId' : 'phaderNav',          //create a blank div with an id
             'navIncludeNumSlides' : true,   //left and right nav plus number of slides shown
             'navNextId' : 'phadeNext',      //pick an ID
             'navPrevId' : 'phadePrev',      //see above
             'navNumClass' : 'phadeNum',     //pick a class
             'autoPhader' : false,           //wait for user interaction?
             'waitTime' : 5000,              //how long between auto phading?
             'opacity' : 0,                  //fadeOut or just opacity hide? Default - fadeOut
             'loopButtons' : false           //do buttons ever get disabled?
         }, options);

         return this.each(function() {

             /*----------------------------------------------------
              *      init
              *----------------------------------------------------*/
             //figure out slides, and number of slides, set where we're at and figure out the width of a slide
             var slides = '#' + $(this).attr('id');
             var slide = slides + ' > li';
             var numSlides = $(slide).size();
             var currentSlide = 1;

             //initial setup of slides
             if(settings.opacity == 1) {
                 $(slide).animate({
                     opacity: 0
                 }, 10);

                 $(slide).eq(0).animate({
                     opacity: 1
                 }, 10);
             } else {
                 $(slide).hide();
                 $(slide).eq(0).show();
             }

             /*----------------------------------------------------
              *      Auto fading
              *----------------------------------------------------*/
             function autoSliding() {
                 if (currentSlide === numSlides) {
                     //we're at the beginning, rewind and reset
                     currentSlide = 1;

                     if(settings.loopButtons === false) {
                         $('#' + settings.navPrevId).addClass('disabled');
                     }

                     //do the phading
                     if(settings.opacity == 1) {
                         $(slide).eq(0).animate({
                             opacity: 1
                         }, 10);

                         $(slide).not(':first').animate({
                             opacity: 0
                         }, parseInt(settings.animationDuration,10), settings.slideEasing);
                     } else {
                         $(slide).eq(0).show();
                         $(slide).not(':first').fadeOut(parseInt(settings.animationDuration,10));
                     }

                     if (settings.navIncludeNumSlides === true && settings.includeNav === true) {
                         $('#' + settings.navId + ' .' + settings.navNumClass).text('1 of ' + numSlides);
                     }
                 } else {
                     if (settings.includeNav === true && settings.loopButtons === false) {
                         //ensure we don't have any disabled buttons
                         $('#' + settings.navNextId + ', #' + settings.navPrevId).removeClass('disabled');
                     }

                     //do the phading
                     if(settings.opacity == 1) {
                         $(slide).eq(currentSlide-1).animate({
                             opacity: 0
                         }, parseInt(settings.animationDuration,10), settings.slideEasing);

                         $(slide).eq(currentSlide).animate({
                             opacity: 1
                         }, parseInt(settings.animationDuration,10), settings.slideEasing);
                     } else {
                         $(slide).eq(currentSlide-1).fadeOut(parseInt(settings.animationDuration,10));
                         $(slide).eq(currentSlide).fadeIn(parseInt(settings.animationDuration,10));
                     }

                     //increment the counter
                     currentSlide++;

                     //update nav counter
                     if (settings.navIncludeNumSlides === true && settings.includeNav === true) {
                         $('#' + settings.navId + ' .' + settings.navNumClass).text(currentSlide + ' of ' + numSlides);
                     }

                     //disable button if we've just reached the last slide
                     if (currentSlide === numSlides && settings.loopButtons === false) {
                         $('#' + settings.navNextId).addClass('disabled');
                     }
                 }
             }//end autoSliding function

             if (settings.autoPhader === true) {
                 //set auto slide timer
                 var autoSlideTimer = setInterval(autoSliding, parseInt(settings.waitTime,10));
             }

             /*----------------------------------------------------
              *      phader nav
              *----------------------------------------------------*/

             if (settings.includeNav === true) {
                 //we only need to add it if it doesn't exist
                 if(!$('#' + settings.navPrevId).length) {
                     //create left and right nav
                     var navHtml = '<span id="' + settings.navPrevId + '">&lt;</span>';

                     if (settings.navIncludeNumSlides === true) {
                         //do we want to know what slide we're on?
                         navHtml = navHtml + '<span class="' + settings.navNumClass + '">1 of ' + numSlides + '</span>';
                     }

                     navHtml = navHtml + '<span id="' + settings.navNextId + '">&gt;</span>';

                     //add the nav to the nav element
                     $('#' + settings.navId).append(navHtml);

                     //diable previous to start with, I mean we're already at the beginning.
                     if(settings.loopButtons === false) {
                         $('#' + settings.navPrevId).addClass('disabled');
                     }

                     /*----------------------------------------------------
                      *      prev button
                      *----------------------------------------------------*/

                     $('#' + settings.navPrevId).on('click', function() {
                         //interrupt the timer for auto if it's going
                         if (settings.autoPhader === true) {
                             clearInterval(autoSlideTimer);
                         }

                         //prevent animation queueing
                         if ($(slide).is(':animated') === true) {
                             return;
                         }

                         if (currentSlide === 1) {
                             if(settings.loopButtons === true) {
                                 currentSlide = numSlides;

                                 //do the phading
                                 if(settings.opacity == 1) {
                                     $(slide).animate({
                                         opacity: 0
                                     }, parseInt(settings.animationDuration,10), settings.slideEasing);

                                     $(slide).eq(currentSlide).animate({
                                         opacity: 1
                                     }, 10);
                                 } else {
                                     $(slide).eq(currentSlide-1).fadeIn(parseInt(settings.animationDuration,10));
                                     $(slide).eq(currentSlide-1).siblings().fadeOut(parseInt(settings.animationDuration,10));
                                 }

                                 $('#' + settings.navId + ' .' + settings.navNumClass).text('1 of ' + numSlides);
                             } else {
                                 //we're at the beginning, just disable the button
                                 $('#' + settings.navPrevId).addClass('disabled');
                                 return;
                             }
                         } else {
                             //ensure we don't have any disabled buttons
                             if(settings.loopButtons === false) {
                                 $('#' + settings.navNextId + ', #' + settings.navPrevId).removeClass('disabled');
                             }

                             //do the phading
                             if(settings.opacity == 1) {
                                 $(slide).eq(currentSlide-2).animate({
                                     opacity: 1
                                 }, parseInt(settings.animationDuration,10), settings.slideEasing);

                                 $(slide).eq(currentSlide-1).animate({
                                     opacity: 0
                                 }, parseInt(settings.animationDuration,10), settings.slideEasing);
                             } else {
                                 $(slide).eq(currentSlide-2).fadeIn(parseInt(settings.animationDuration,10));
                                 $(slide).eq(currentSlide-1).fadeOut(parseInt(settings.animationDuration,10));
                             }

                             //decrement counter
                             currentSlide--;

                             //update nav counter
                             if (settings.navIncludeNumSlides === true) {
                                 $('#' + settings.navId + ' .' + settings.navNumClass).text(currentSlide + ' of ' + numSlides);
                             }

                             //disable button if we've just reached the first slide again
                             if (currentSlide === 1 && settings.loopButtons === false) {
                                 $('#' + settings.navPrevId).addClass('disabled');
                             }
                         }

                         if (settings.autoPhader === true) {
                             autoSlideTimer = setInterval(autoSliding, parseInt(settings.waitTime,10));
                         }
                     });
                 }

                 /*----------------------------------------------------
                  *      next button
                  *----------------------------------------------------*/

                 $('#' + settings.navNextId).on('click', function() {

                     //interrupt the timer for auto if it's going
                     if (settings.autoPhader === true) {
                         clearInterval(autoSlideTimer);
                     }

                     //prevent animation queueing
                     if ($(slide).is(':animated') === true) {
                         return;
                     }

                     if (currentSlide === numSlides) {
                         if(settings.loopButtons === true) {
                             //we're at the beginning, rewind and reset
                             currentSlide = 1;

                             //do the phading
                             if(settings.opacity == 1) {
                                 $(slide).eq(0).animate({
                                     opacity: 1
                                 }, 10);

                                 $(slide).not(':first').animate({
                                     opacity: 0
                                 }, parseInt(settings.animationDuration,10), settings.slideEasing);
                             } else {
                                 $(slide).eq(0).show();
                                 $(slide).not(':first').fadeOut(parseInt(settings.animationDuration,10));
                             }
                         } else {
                             //we're at the end, just disable the button
                             $('#' + settings.navNextId).addClass('disabled');
                             return;
                         }

                         if (settings.navIncludeNumSlides === true) {
                             $('#' + settings.navId + ' .' + settings.navNumClass).text('1 of ' + numSlides);
                         }
                     } else {
                         //ensure we don't have any disabled buttons
                         if(settings.loopButtons === true) {
                             $('#' + settings.navNextId + ', #' + settings.navPrevId).removeClass('disabled');
                         }

                         //do the phading
                         if(settings.opacity == 1) {
                             $(slide).eq(currentSlide-1).animate({
                                 opacity: 0
                             }, parseInt(settings.animationDuration,10), settings.slideEasing);

                             $(slide).eq(currentSlide).animate({
                                 opacity: 1
                             }, parseInt(settings.animationDuration,10), settings.slideEasing);
                         } else {
                             $(slide).eq(currentSlide-1).fadeOut(parseInt(settings.animationDuration,10));
                             $(slide).eq(currentSlide).fadeIn(parseInt(settings.animationDuration,10));
                         }

                         //increment the counter
                         currentSlide++;

                         //update nav counter
                         if (settings.navIncludeNumSlides === true) {
                             $('#' + settings.navId + ' .' + settings.navNumClass).text(currentSlide + ' of ' + numSlides);
                         }

                         //disable button if we've just reached the last slide
                         if (currentSlide === numSlides && settings.loopButtons === false) {
                             $('#' + settings.navNextId).addClass('disabled');
                         }
                     }

                     if (settings.autoPhader === true) {
                         autoSlideTimer = setInterval(autoSliding, parseInt(settings.waitTime,10));
                     }
                 });

             }//end includeNav stuff
         });
     };
 })(jQuery);


 /**
 * shlider plugin
 * shlide right. shlide right. shlide left. shlide right. shlide left again. nishe. very nishe.
 * @author Phil Steer
 * https://github.com/pdincubus/jquery.Shlider
 */

 (function($) {
     $.fn.shlider = function(options) {

         // settings
         var settings = $.extend({
             'animationDuration' : 500,      //milliseconds
             'slideEasing' : 'swing',        //default options are swing or linear
             'includeNav' : true,            //do you want to output next/prev buttons?
             'navId' : 'shliderNav',         //create a blank div with an id
             'navIncludeNumSlides' : false,  //left and right nav plus number of slides shown
             'navNextId' : 'shlideNext',     //pick an ID
             'navPrevId' : 'shlidePrev',     //see above
             'navNumClass' : 'shlideNum',    //pick a class
             'slidesAtOnce' : 1,             //do you want more than one slide to move at once?
             'autoSlide' : false,            //wait for use interaction?
             'waitTime' : 3000,              //duration of pause between shlides
         }, options);

         return this.each(function() {
             //figure out slides, and number of slides, set where we're at and figure out the width of a slide
             var slides = '#' + $(this).attr('id');
             var slide = slides + ' > li';
             var numSlides = $(slide).size();
             var slidings = Math.ceil(numSlides / settings.slidesAtOnce);
             var currentSlide = 1;
             var slideWidth = $(slide).width();

             //what to do when the timer function is called
             function autoSliding() {
                 if (currentSlide === slidings) {
                     //we're at the beginning, rewind and reset
                     currentSlide = 1;

                     $('#' + settings.navNextId).removeClass('disabled');
                     $('#' + settings.navPrevId).addClass('disabled');

                     $(slides).animate({
                         left: 0
                     }, settings.animationDuration, settings.slideEasing);

                     $('#' + settings.navId + ' .' + settings.navNumClass).text('1 of ' + slidings);
                 }else {
                     if (settings.includeNav === true) {
                         //ensure we don't have any disabled buttons
                         $('#' + settings.navNextId + ', #' + settings.navPrevId).removeClass('disabled');
                     }

                     //do the shhhhlide
                     $(slides).animate({
                         left: '-=' + slideWidth * settings.slidesAtOnce
                     }, settings.animationDuration, settings.slideEasing);

                     //increment the counter
                     currentSlide++;

                     //update nav counter
                     if (settings.navIncludeNumSlides === true && settings.includeNav === true) {
                         $('#' + settings.navId + ' .' + settings.navNumClass).text(currentSlide + ' of ' + slidings);
                     }

                     //disable button if we've just reached the last slide
                     if (currentSlide === slidings && settings.includeNav === true) {
                         $('#' + settings.navNextId).addClass('disabled');
                     }
                 }
             }

             if (settings.autoSlide === true) {
                 //set auto slide timer
                 var autoSlideTimer = setInterval(autoSliding, settings.waitTime);
             }//end autoSlide

             if (settings.includeNav === true) {
                 //we only need to add it if it doesn't exist
                 if(!$('#' + settings.navPrevId).length) {
                     //create left and right nav
                     var navHtml = '<span id="' + settings.navPrevId + '">&lt;</span>';
                     if (settings.navIncludeNumSlides === true) {
                         //do we want to know what slide we're on?
                         navHtml = navHtml + '<span class="' + settings.navNumClass + '">1 of ' + slidings + '</span>';
                     }
                     navHtml = navHtml + '<span id="' + settings.navNextId + '">&gt;</span>';

                     //add the nav to the nav element
                     $('#' + settings.navId).append(navHtml);
                     //diable previous to start with, I mean we're already at the beginning.
                     $('#' + settings.navPrevId).addClass('disabled');

                     //what happens when we click previous?
                     $('#' + settings.navPrevId).on('click', function() {

                         //interrupt the timer for auto if it's going
                         if (settings.autoSlide === true) {
                             clearInterval(autoSlideTimer);
                         }

                         //prevent animation queueing
                         if ($(slides).is(':animated') === true) {
                             return;
                         }

                         if (currentSlide === 1) {
                             //we're at the beginning, just disable the button
                             if (settings.autoSlide === true) {
                                 autoSlideTimer = setInterval(autoSliding, settings.waitTime);
                             }

                             return;
                         }else {
                             //ensure we don't have any disabled buttons
                             $('#' + settings.navNextId + ', #' + settings.navPrevId).removeClass('disabled');

                             //do the shhhhlide
                             $(slides).animate({
                                 left: '+=' + slideWidth * settings.slidesAtOnce
                             }, settings.animationDuration, settings.slideEasing);

                             //decrement counter
                             currentSlide--;

                             //update nav counter
                             if (settings.navIncludeNumSlides === true) {
                                 $('#' + settings.navId + ' .' + settings.navNumClass).text(currentSlide + ' of ' + slidings);
                             }

                             //disable button if we've just reached the first slide again
                             if (currentSlide === 1) {
                                 $('#' + settings.navPrevId).addClass('disabled');
                             }
                         }

                         if (settings.autoSlide === true) {
                             autoSlideTimer = setInterval(autoSliding, settings.waitTime);
                         }
                     });
                 }

                 //what happens when we click next?
                 $('#' + settings.navNextId).on('click', function() {

                     //interrupt the timer for auto if it's going
                     if (settings.autoSlide === true) {
                         clearTimeout(autoSlideTimer);
                     }

                     //prevent animation queueing
                     if ($(slides).is(':animated') === true) {
                         return;
                     }

                     if (currentSlide === slidings) {
                         //we're at the beginning, just disable the button
                         if (settings.autoSlide === true) {
                             autoSlideTimer = setInterval(autoSliding, settings.waitTime);
                         }

                         return;
                     }else {
                         //ensure we don't have any disabled buttons
                         $('#' + settings.navNextId + ', #' + settings.navPrevId).removeClass('disabled');

                         //do the shhhhlide
                         $(slides).animate({
                             left: '-=' + slideWidth * settings.slidesAtOnce
                         }, settings.animationDuration, settings.slideEasing);

                         //increment the counter
                         currentSlide++;

                         //update nav counter
                         if (settings.navIncludeNumSlides === true) {
                             $('#' + settings.navId + ' .' + settings.navNumClass).text(currentSlide + ' of ' + slidings);
                         }

                         //disable button if we've just reached the last slide
                         if (currentSlide === slidings) {
                             $('#' + settings.navNextId).addClass('disabled');
                         }
                     }

                     if (settings.autoSlide === true) {
                         autoSlideTimer = setInterval(autoSliding, settings.waitTime);
                     }
                 });

             }//end includeNav stuff
         });
     };
 })(jQuery);


 /**
 * ShliderWay plugin
 * ShliderWay, give it all you got. Mine today, fell in from the top. Only from the side
 * @author Phil Steer
 * https://github.com/pdincubus/jquery.ShliderWay
 */

 (function($) {
     $.fn.shliderWay = function(options) {

         // settings
         var settings = $.extend({
             'animationDuration' : 750,      //milliseconds
             'slideEasing' : 'swing',        //default options are swing or linear
             'waitTime' : 4000,              //duration of pause between shlides
         }, options);

         return this.each(function() {
             //figure out slides, and number of slides, set where we're at and figure out the width of a slide
             var slides = '#' + $(this).attr('id');
             var slide = slides + ' > li';
             var slidings = $(slide).size();
             var currentSlide = 1;
             var slideWidth = $(slide).width();

             $(slide).eq(0).css({
                 left: 0
             });

             //what to do when the timer function is called
             function autoSliding() {
                 if (currentSlide === slidings) {
                     currentSlide = 1;

                     $(slide).eq(currentSlide-1).animate({
                         left: 0
                     }, parseInt(settings.animationDuration,10), settings.slideEasing);

                     $(slide).last().animate({
                         left: '-' + slideWidth
                     }, parseInt(settings.animationDuration,10), settings.slideEasing).delay(settings.waitTime/2).animate({
                         left: slideWidth
                     }, 10);
                 }else {
                     $(slide).eq(currentSlide).animate({
                         left: 0
                     }, parseInt(settings.animationDuration,10), settings.slideEasing);

                     $(slide).eq(currentSlide-1).animate({
                         left: '-' + slideWidth
                     }, parseInt(settings.animationDuration,10), settings.slideEasing).delay(settings.waitTime/2).animate({
                         left: slideWidth
                     }, 10);

                     //increment the counter
                     currentSlide++;

                     $(slide).eq(currentSlide-1).css({
                         left: slideWidth
                     });
                 }
             }

             var autoSlideTimer = setInterval(autoSliding, settings.waitTime);
         });
     };
 })(jQuery);


 /**
  * Dropdownatron will convert a select box to something fancier
  *
  * @version 1.0
  * @author John Noel <john.noel@rckt.co.uk>
  * @package Doncaster Deaf Trust
  * @todo Keyboard shortcuts, focus styles (accessibility) etc.
  */

 !function($) {
     var Dropdownatron = function(elem, opts) {
         this.init('dropdownatron', elem, opts);
     };

     Dropdownatron.prototype = {
         constructor: Dropdownatron,
         init: function(type, elem, opts) {
             this.type = type;
             this.$element = $(elem);
             this.options = this.getOptions(opts);

             if (this.$element[0].tagName != 'SELECT') {
                 throw 'Cannot bind to anything other than SELECT elements';
             }

             this._build();

             var that = this;
             this.$element.on('change', function(e) {
                 that.select($(this).val());
             });
         },

         getOptions: function(opts) {
             return $.extend({}, $.fn[this.type].defaults, this.$element.data(), opts);
         },

         _build: function() {
             var that = this;
             this.$element.trigger('dropdownatron.pre_build');
             this.$element.hide().wrap($('<div/>').addClass('dropdownatron-container'));

             // because apparently wrap() obliterates any loosey references
             this.$container = this.$element.parent();

             // options
             this.$options = $('<ul/>').addClass('dropdownatron-options').appendTo(this.$container);
             this.$element.find('option').each(function() {
                 $('<li/>').text($(this).text()).data('val', $(this).attr('value'))
                     .attr('data-val', $(this).attr('value')).appendTo(that.$options).on({
                         'click': function(e) { that.onSelect(e); }
                     });
             });

             // selector
             $('<span/>').addClass('dropdownatron-select').appendTo(this.$container).on({
                 'click': function(e) { that.onToggle(e); }
             });

             // set the initially selected one
             var $toDisplay = this.$options.children().first(),
                 sel = this.$element.val();
             if (sel) {
                 var $selected = this.$options.children().filter(function() {
                     return $(this).data('val') == sel;
                 });

                 $toDisplay = ($selected.length > 0) ? $selected : $toDisplay;
             }

             // selected display
             $('<div/>').addClass('dropdownatron-selected')
                 .text($toDisplay.text()).data('val', $toDisplay.data('val'))
                 .attr('data-val', $toDisplay.data('val'))
                 .appendTo(this.$container).on({
                     'click': function(e) { that.onToggle(e); }
                 });

             this.$options.hide();
             this.select($toDisplay.data('val'));
             this.$element.trigger('dropdownatron.built');
         },

         /**
          * Return what is currently selected
          * @return string The currently selected value
          */
         selected: function() {
             return this.$container.find('.dropdownatron-selected').data('val');
         },

         onToggle: function(e) {
             e.preventDefault();
             e.stopPropagation();
             this.toggle();
         },

         /**
          * Toggle the opened/closed state of the dropdown
          * @return void
          */
         toggle: function() {
             this._event('toggled');
             if (this.$options.is(':visible')) {
                 this.close();
             } else {
                 this.open();
             }
         },

         /**
          * If the dropdown is closed, show it
          * @return void
          */
         open: function() {
             if (!this.$options.is(':visible') && !this.$options.is(':animated')) {
                 this._event('pre_open');
                 var height = this.$options.show().outerHeight(),
                     that = this;

                 this.$options.css('height', 0).animate({
                     'height': height
                 }, this.options.speed, this.options.easing, function() {
                     that._event('opened');
                 });

                 this.$container.addClass('shown');

                 $('body').on('click.dropdownatron', function(e) {
                     that.close();
                     $('body').off('click.dropdownatron');
                 });
             }
         },

         /**
          * If the dropdown is shown, close it
          * @return void
          */
         close: function() {
             if (this.$options.is(':visible') && !this.$options.is(':animated')) {
                 this._event('pre_close');
                 var height = this.$options.outerHeight(),
                     that = this;

                 this.$options.animate({
                     'height': 0
                 }, this.options.speed, this.options.easing, function() {
                     $(this).hide().css('height', height);
                     that._event('closed');
                 });

                 this.$container.removeClass('shown');
             }
         },

         onSelect: function(e) {
             e.preventDefault();
             e.stopPropagation();
             this.select($(e.target).data('val'));
         },

         /**
          * Select an option
          * @param string val The value to choose
          * @return void
          */
         select: function(val) {
             this.close();

             if (this.selected() == val) {
                 return;
             }

             var $selected = this.$options.children().filter(function() {
                 return $(this).data('val') == val;
             });

             if ($selected.length == 0) {
                 return;
             }

             $selected.addClass('on').siblings().removeClass('on');
             this.$container.find('.dropdownatron-selected').data('val', val).
                 text($selected.text());

             this.$element.val(val); // good ol' jQuery
             this._event('change');
         },

         _event: function(name) {
             this.$element.trigger('dropdownatron.'+name);
         }
     };

     $.fn.dropdownatron = function(option) {
         return this.each(function() {
             var $this = $(this),
                data = $this.data('dropdownatron'),
                options = typeof option == 'object' && option;

             if (!data) {
                 $this.data('dropdownatron', data = new Dropdownatron(this, options));
             }

             if (typeof option == 'string') {
                 data[option]();
             }
         });
     };

     $.fn.dropdownatron.defaults = {
         speed: 'fast',
         easing: 'linear'
     };
 }(window.jQuery);


 /*!
  * classie - class helper functions
  * from bonzo https://github.com/ded/bonzo
  *
  * classie.has( elem, 'my-class' ) -> true/false
  * classie.add( elem, 'my-new-class' )
  * classie.remove( elem, 'my-unwanted-class' )
  * classie.toggle( elem, 'my-class' )
  */

 /*jshint browser: true, strict: true, undef: true */
 /*global define: false */

 ( function( window ) {

 'use strict';

 // class helper functions from bonzo https://github.com/ded/bonzo

 function classReg( className ) {
   return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
 }

 // classList support for class management
 // altho to be fair, the api sucks because it won't accept multiple classes at once
 var hasClass, addClass, removeClass;

 if ( 'classList' in document.documentElement ) {
   hasClass = function( elem, c ) {
     return elem.classList.contains( c );
   };
   addClass = function( elem, c ) {
     elem.classList.add( c );
   };
   removeClass = function( elem, c ) {
     elem.classList.remove( c );
   };
 }
 else {
   hasClass = function( elem, c ) {
     return classReg( c ).test( elem.className );
   };
   addClass = function( elem, c ) {
     if ( !hasClass( elem, c ) ) {
       elem.className = elem.className + ' ' + c;
     }
   };
   removeClass = function( elem, c ) {
     elem.className = elem.className.replace( classReg( c ), ' ' );
   };
 }

 function toggleClass( elem, c ) {
   var fn = hasClass( elem, c ) ? removeClass : addClass;
   fn( elem, c );
 }

 var classie = {
   // full names
   hasClass: hasClass,
   addClass: addClass,
   removeClass: removeClass,
   toggleClass: toggleClass,
   // short names
   has: hasClass,
   add: addClass,
   remove: removeClass,
   toggle: toggleClass
 };

 // transport
 if ( typeof define === 'function' && define.amd ) {
   // AMD
   define( classie );
 } else {
   // browser global
   window.classie = classie;
 }

 })( window );




 /**
  * modalEffects.js v1.0.0
  * http://www.codrops.com
  *
  * Licensed under the MIT license.
  * http://www.opensource.org/licenses/mit-license.php
  *
  * Copyright 2013, Codrops
  * http://www.codrops.com
  */
 var ModalEffects = (function() {

    function init() {

        var overlay = document.querySelector( '.md-overlay' );

        [].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

            var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
                close = modal.querySelector( '.md-close' );

            function removeModal( hasPerspective ) {
                classie.remove( modal, 'md-show' );

                if( hasPerspective ) {
                    classie.remove( document.documentElement, 'md-perspective' );
                }
            }

            function removeModalHandler() {
                removeModal( classie.has( el, 'md-setperspective' ) );
            }

            el.addEventListener( 'click', function( ev ) {
                classie.add( modal, 'md-show' );
                overlay.removeEventListener( 'click', removeModalHandler );
                overlay.addEventListener( 'click', removeModalHandler );

                if( classie.has( el, 'md-setperspective' ) ) {
                    setTimeout( function() {
                        classie.add( document.documentElement, 'md-perspective' );
                    }, 25 );
                }
            });

            close.addEventListener( 'click', function( ev ) {
                ev.stopPropagation();
                removeModalHandler();
            });

        } );

    }

    init();

 })();








 /* ***** BEGIN LICENSE BLOCK *****
  * Version: MPL 1.1/GPL 2.0/LGPL 2.1
  *
  * The contents of this file are subject to the Mozilla Public License Version
  * 1.1 (the "License"); you may not use this file except in compliance with
  * the License. You may obtain a copy of the License at
  * http://www.mozilla.org/MPL/
  *
  * Software distributed under the License is distributed on an "AS IS" basis,
  * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
  * for the specific language governing rights and limitations under the
  * License.
  *
  * The Original Code is mozilla.org code.
  *
  * The Initial Developer of the Original Code is
  * Netscape Communications Corporation.
  * Portions created by the Initial Developer are Copyright (C) 1998
  * the Initial Developer. All Rights Reserved.
  *
  * Contributor(s):
  *   emk <VYV03354@nifty.ne.jp>
  *   Daniel Glazman <glazman@netscape.com>
  *   L. David Baron <dbaron@dbaron.org>
  *   Boris Zbarsky <bzbarsky@mit.edu>
  *   Mats Palmgren <mats.palmgren@bredband.net>
  *   Christian Biesinger <cbiesinger@web.de>
  *   Jeff Walden <jwalden+code@mit.edu>
  *   Jonathon Jongsma <jonathon.jongsma@collabora.co.uk>, Collabora Ltd.
  *   Siraj Razick <siraj.razick@collabora.co.uk>, Collabora Ltd.
  *   Daniel Glazman <daniel.glazman@disruptive-innovations.com>
  *
  * Alternatively, the contents of this file may be used under the terms of
  * either of the GNU General Public License Version 2 or later (the "GPL"),
  * or the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
  * in which case the provisions of the GPL or the LGPL are applicable instead
  * of those above. If you wish to allow use of your version of this file only
  * under the terms of either the GPL or the LGPL, and not to allow others to
  * use your version of this file under the terms of the MPL, indicate your
  * decision by deleting the provisions above and replace them with the notice
  * and other provisions required by the GPL or the LGPL. If you do not delete
  * the provisions above, a recipient may use your version of this file under
  * the terms of any one of the MPL, the GPL or the LGPL.
  *
  * ***** END LICENSE BLOCK ***** */

 ;
 var kCHARSET_RULE_MISSING_SEMICOLON = "Missing semicolon at the end of @charset rule";
 var kCHARSET_RULE_CHARSET_IS_STRING = "The charset in the @charset rule should be a string";
 var kCHARSET_RULE_MISSING_WS = "Missing mandatory whitespace after @charset";
 var kIMPORT_RULE_MISSING_URL = "Missing URL in @import rule";
 var kURL_EOF = "Unexpected end of stylesheet";
 var kURL_WS_INSIDE = "Multiple tokens inside a url() notation";
 var kVARIABLES_RULE_POSITION = "@variables rule invalid at this position in the stylesheet";
 var kIMPORT_RULE_POSITION = "@import rule invalid at this position in the stylesheet";
 var kNAMESPACE_RULE_POSITION = "@namespace rule invalid at this position in the stylesheet";
 var kCHARSET_RULE_CHARSET_SOF = "@charset rule invalid at this position in the stylesheet";
 var kUNKNOWN_AT_RULE = "Unknow @-rule";

 /* FROM http://peter.sh/data/vendor-prefixed-css.php?js=1 */

 var kENGINES = [
   "webkit",
   "presto",
   "trident",
   "generic"
 ];

 var kCSS_VENDOR_VALUES = {
   "-moz-box":             {"webkit": "-webkit-box",        "presto": "", "trident": "", "generic": "box" },
   "-moz-inline-box":      {"webkit": "-webkit-inline-box", "presto": "", "trident": "", "generic": "inline-box" },
   "-moz-initial":         {"webkit": "",                   "presto": "", "trident": "", "generic": "initial" },
   "-moz-linear-gradient": {"webkit20110101": FilterLinearGradientForOutput,
                            "webkit": FilterLinearGradientForOutput,
                            "presto": "",
                            "trident": "",
                            "generic": FilterLinearGradientForOutput },
   "-moz-radial-gradient": {"webkit20110101": FilterRadialGradientForOutput,
                            "webkit": FilterRadialGradientForOutput,
                            "presto": "",
                            "trident": "",
                            "generic": FilterRadialGradientForOutput },
   "-moz-repeating-linear-gradient": {"webkit20110101": "",
                            "webkit": FilterRepeatingGradientForOutput,
                            "presto": "",
                            "trident": "",
                            "generic": FilterRepeatingGradientForOutput },
   "-moz-repeating-radial-gradient": {"webkit20110101": "",
                            "webkit": FilterRepeatingGradientForOutput,
                            "presto": "",
                            "trident": "",
                            "generic": FilterRepeatingGradientForOutput }
 };

 var kCSS_VENDOR_PREFIXES = {"lastUpdate":1304175007,"properties":[{"gecko":"","webkit":"","presto":"","trident":"-ms-accelerator","status":"P"},
 {"gecko":"","webkit":"","presto":"-wap-accesskey","trident":"","status":""},
 {"gecko":"-moz-animation","webkit":"-webkit-animation","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-animation-delay","webkit":"-webkit-animation-delay","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-animation-direction","webkit":"-webkit-animation-direction","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-animation-duration","webkit":"-webkit-animation-duration","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-animation-fill-mode","webkit":"-webkit-animation-fill-mode","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-animation-iteration-count","webkit":"-webkit-animation-iteration-count","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-animation-name","webkit":"-webkit-animation-name","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-animation-play-state","webkit":"-webkit-animation-play-state","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-animation-timing-function","webkit":"-webkit-animation-timing-function","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-appearance","webkit":"-webkit-appearance","presto":"","trident":"","status":"CR"},
 {"gecko":"","webkit":"-webkit-backface-visibility","presto":"","trident":"","status":"WD"},
 {"gecko":"background-clip","webkit":"-webkit-background-clip","presto":"background-clip","trident":"background-clip","status":"WD"},
 {"gecko":"","webkit":"-webkit-background-composite","presto":"","trident":"","status":""},
 {"gecko":"-moz-background-inline-policy","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"background-origin","webkit":"-webkit-background-origin","presto":"background-origin","trident":"background-origin","status":"WD"},
 {"gecko":"","webkit":"background-position-x","presto":"","trident":"-ms-background-position-x","status":""},
 {"gecko":"","webkit":"background-position-y","presto":"","trident":"-ms-background-position-y","status":""},
 {"gecko":"background-size","webkit":"-webkit-background-size","presto":"background-size","trident":"background-size","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-behavior","status":""},
 {"gecko":"-moz-binding","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-block-progression","status":""},
 {"gecko":"","webkit":"-webkit-border-after","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-after-color","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-after-style","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-after-width","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-before","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-before-color","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-before-style","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-before-width","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-bottom-colors","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"border-bottom-left-radius","webkit":"-webkit-border-bottom-left-radius","presto":"border-bottom-left-radius","trident":"border-bottom-left-radius","status":"WD"},
 {"gecko":"","webkit":"-webkit-border-bottom-left-radius = border-bottom-left-radius","presto":"","trident":"","status":""},
 {"gecko":"border-bottom-right-radius","webkit":"-webkit-border-bottom-right-radius","presto":"border-bottom-right-radius","trident":"border-bottom-right-radius","status":"WD"},
 {"gecko":"","webkit":"-webkit-border-bottom-right-radius = border-bottom-right-radius","presto":"","trident":"","status":""},
 {"gecko":"-moz-border-end","webkit":"-webkit-border-end","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-end-color","webkit":"-webkit-border-end-color","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-end-style","webkit":"-webkit-border-end-style","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-end-width","webkit":"-webkit-border-end-width","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-fit","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-border-horizontal-spacing","presto":"","trident":"","status":""},
 {"gecko":"-moz-border-image","webkit":"-webkit-border-image","presto":"-o-border-image","trident":"","status":"WD"},
 {"gecko":"-moz-border-left-colors","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"border-radius","webkit":"-webkit-border-radius","presto":"border-radius","trident":"border-radius","status":"WD"},
 {"gecko":"-moz-border-right-colors","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-border-start","webkit":"-webkit-border-start","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-start-color","webkit":"-webkit-border-start-color","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-start-style","webkit":"-webkit-border-start-style","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-start-width","webkit":"-webkit-border-start-width","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-top-colors","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"border-top-left-radius","webkit":"-webkit-border-top-left-radius","presto":"border-top-left-radius","trident":"border-top-left-radius","status":"WD"},
 {"gecko":"","webkit":"-webkit-border-top-left-radius = border-top-left-radius","presto":"","trident":"","status":""},
 {"gecko":"border-top-right-radius","webkit":"-webkit-border-top-right-radius","presto":"border-top-right-radius","trident":"border-top-right-radius","status":"WD"},
 {"gecko":"","webkit":"-webkit-border-top-right-radius = border-top-right-radius","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-border-vertical-spacing","presto":"","trident":"","status":""},
 {"gecko":"-moz-box-align","webkit":"-webkit-box-align","presto":"","trident":"-ms-box-align","status":"WD"},
 {"gecko":"-moz-box-direction","webkit":"-webkit-box-direction","presto":"","trident":"-ms-box-direction","status":"WD"},
 {"gecko":"-moz-box-flex","webkit":"-webkit-box-flex","presto":"","trident":"-ms-box-flex","status":"WD"},
 {"gecko":"","webkit":"-webkit-box-flex-group","presto":"","trident":"","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-box-line-progression","status":""},
 {"gecko":"","webkit":"-webkit-box-lines","presto":"","trident":"-ms-box-lines","status":"WD"},
 {"gecko":"-moz-box-ordinal-group","webkit":"-webkit-box-ordinal-group","presto":"","trident":"-ms-box-ordinal-group","status":"WD"},
 {"gecko":"-moz-box-orient","webkit":"-webkit-box-orient","presto":"","trident":"-ms-box-orient","status":"WD"},
 {"gecko":"-moz-box-pack","webkit":"-webkit-box-pack","presto":"","trident":"-ms-box-pack","status":"WD"},
 {"gecko":"","webkit":"-webkit-box-reflect","presto":"","trident":"","status":""},
 {"gecko":"box-shadow","webkit":"-webkit-box-shadow","presto":"box-shadow","trident":"box-shadow","status":"WD"},
 {"gecko":"-moz-box-sizing","webkit":"box-sizing","presto":"box-sizing","trident":"","status":"CR"},
 {"gecko":"","webkit":"-webkit-box-sizing = box-sizing","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-epub-caption-side = caption-side","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-color-correction","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-column-break-after","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-column-break-before","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-column-break-inside","presto":"","trident":"","status":""},
 {"gecko":"-moz-column-count","webkit":"-webkit-column-count","presto":"column-count","trident":"column-count","status":"CR"},
 {"gecko":"-moz-column-gap","webkit":"-webkit-column-gap","presto":"column-gap","trident":"column-gap","status":"CR"},
 {"gecko":"-moz-column-rule","webkit":"-webkit-column-rule","presto":"column-rule","trident":"column-rule","status":"CR"},
 {"gecko":"-moz-column-rule-color","webkit":"-webkit-column-rule-color","presto":"column-rule-color","trident":"column-rule-color","status":"CR"},
 {"gecko":"-moz-column-rule-style","webkit":"-webkit-column-rule-style","presto":"column-rule-style","trident":"column-rule-style","status":"CR"},
 {"gecko":"-moz-column-rule-width","webkit":"-webkit-column-rule-width","presto":"column-rule-width","trident":"column-rule-width","status":"CR"},
 {"gecko":"","webkit":"-webkit-column-span","presto":"column-span","trident":"column-span","status":"CR"},
 {"gecko":"-moz-column-width","webkit":"-webkit-column-width","presto":"column-width","trident":"column-width","status":"CR"},
 {"gecko":"","webkit":"-webkit-columns","presto":"columns","trident":"columns","status":"CR"},
 {"gecko":"","webkit":"-webkit-dashboard-region","presto":"-apple-dashboard-region","trident":"","status":""},
 {"gecko":"filter","webkit":"","presto":"filter","trident":"-ms-filter","status":""},
 {"gecko":"-moz-float-edge","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"","presto":"-o-focus-opacity","trident":"","status":""},
 {"gecko":"-moz-font-feature-settings","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"-moz-font-language-override","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-font-size-delta","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-font-smoothing","presto":"","trident":"","status":""},
 {"gecko":"-moz-force-broken-image-icon","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-column","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-column-align","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-column-span","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-columns","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-layer","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-row","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-row-align","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-row-span","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-rows","status":"WD"},
 {"gecko":"","webkit":"-webkit-highlight","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-hyphenate-character","presto":"","trident":"","status":"WD"},
 {"gecko":"","webkit":"-webkit-hyphenate-limit-after","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-hyphenate-limit-before","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-hyphens","presto":"","trident":"","status":"WD"},
 {"gecko":"","webkit":"-epub-hyphens = -webkit-hyphens","presto":"","trident":"","status":""},
 {"gecko":"-moz-image-region","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"ime-mode","webkit":"","presto":"","trident":"-ms-ime-mode","status":""},
 {"gecko":"","webkit":"","presto":"-wap-input-format","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-wap-input-required","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-interpolation-mode","status":""},
 {"gecko":"","webkit":"","presto":"-xv-interpret-as","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-layout-flow","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-char","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-line","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-mode","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-type","status":""},
 {"gecko":"","webkit":"-webkit-line-box-contain","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-line-break","presto":"","trident":"-ms-line-break","status":""},
 {"gecko":"","webkit":"-webkit-line-clamp","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-line-grid-mode","status":""},
 {"gecko":"","webkit":"","presto":"-o-link","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-o-link-source","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-locale","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-logical-height","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-logical-width","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-margin-after","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-margin-after-collapse","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-margin-before","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-margin-before-collapse","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-margin-bottom-collapse","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-margin-collapse","presto":"","trident":"","status":""},
 {"gecko":"-moz-margin-end","webkit":"-webkit-margin-end","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-margin-start","webkit":"-webkit-margin-start","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-margin-top-collapse","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-marquee","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-wap-marquee-dir","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-marquee-direction","presto":"","trident":"","status":"WD"},
 {"gecko":"","webkit":"-webkit-marquee-increment","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-wap-marquee-loop","trident":"","status":"WD"},
 {"gecko":"","webkit":"-webkit-marquee-repetition","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-marquee-speed","presto":"-wap-marquee-speed","trident":"","status":"WD"},
 {"gecko":"","webkit":"-webkit-marquee-style","presto":"-wap-marquee-style","trident":"","status":"WD"},
 {"gecko":"mask","webkit":"-webkit-mask","presto":"mask","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-attachment","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-box-image","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-clip","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-composite","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-image","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-origin","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-position","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-position-x","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-position-y","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-repeat","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-repeat-x","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-repeat-y","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-size","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-match-nearest-mail-blockquote-color","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-max-logical-height","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-max-logical-width","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-min-logical-height","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-min-logical-width","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"","presto":"-o-mini-fold","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-nbsp-mode","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"","presto":"-o-object-fit","trident":"","status":"ED"},
 {"gecko":"","webkit":"","presto":"-o-object-position","trident":"","status":"ED"},
 {"gecko":"opacity","webkit":"-webkit-opacity","presto":"opacity","trident":"opacity","status":"WD"},
 {"gecko":"","webkit":"-webkit-opacity = opacity","presto":"","trident":"","status":""},
 {"gecko":"-moz-outline-radius","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-outline-radius-bottomleft","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-outline-radius-bottomright","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-outline-radius-topleft","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-outline-radius-topright","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"overflow-x","webkit":"overflow-x","presto":"overflow-x","trident":"-ms-overflow-x","status":"WD"},
 {"gecko":"overflow-y","webkit":"overflow-y","presto":"overflow-y","trident":"-ms-overflow-y","status":"WD"},
 {"gecko":"","webkit":"-webkit-padding-after","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-padding-before","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-padding-end","webkit":"-webkit-padding-end","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-padding-start","webkit":"-webkit-padding-start","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-perspective","presto":"","trident":"","status":"WD"},
 {"gecko":"","webkit":"-webkit-perspective-origin","presto":"","trident":"","status":"WD"},
 {"gecko":"","webkit":"-webkit-perspective-origin-x","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-perspective-origin-y","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-xv-phonemes","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-rtl-ordering","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-script-level","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"-moz-script-min-size","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"-moz-script-size-multiplier","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"scrollbar-3dlight-color","trident":"-ms-scrollbar-3dlight-color","status":"P"},
 {"gecko":"","webkit":"","presto":"scrollbar-arrow-color","trident":"-ms-scrollbar-arrow-color","status":"P"},
 {"gecko":"","webkit":"","presto":"scrollbar-base-color","trident":"-ms-scrollbar-base-color","status":"P"},
 {"gecko":"","webkit":"","presto":"scrollbar-darkshadow-color","trident":"-ms-scrollbar-darkshadow-color","status":"P"},
 {"gecko":"","webkit":"","presto":"scrollbar-face-color","trident":"-ms-scrollbar-face-color","status":"P"},
 {"gecko":"","webkit":"","presto":"scrollbar-highlight-color","trident":"-ms-scrollbar-highlight-color","status":"P"},
 {"gecko":"","webkit":"","presto":"scrollbar-shadow-color","trident":"-ms-scrollbar-shadow-color","status":"P"},
 {"gecko":"","webkit":"","presto":"scrollbar-track-color","trident":"-ms-scrollbar-track-color","status":"P"},
 {"gecko":"-moz-stack-sizing","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-webkit-svg-shadow","presto":"","trident":"","status":""},
 {"gecko":"-moz-tab-size","webkit":"","presto":"-o-tab-size","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-o-table-baseline","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-tap-highlight-color","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-text-align-last","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-text-autospace","status":"WD"},
 {"gecko":"-moz-text-blink","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-text-combine","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-epub-text-combine = -webkit-text-combine","presto":"","trident":"","status":""},
 {"gecko":"-moz-text-decoration-color","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"-moz-text-decoration-line","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"-moz-text-decoration-style","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-text-decorations-in-effect","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-text-emphasis","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-epub-text-emphasis = -webkit-text-emphasis","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-text-emphasis-color","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-epub-text-emphasis-color = -webkit-text-emphasis-color","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-text-emphasis-position","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-text-emphasis-style","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-epub-text-emphasis-style = -webkit-text-emphasis-style","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-text-fill-color","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-text-justify","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-text-kashida-space","status":"P"},
 {"gecko":"","webkit":"-webkit-text-orientation","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-epub-text-orientation = -webkit-text-orientation","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"text-overflow","presto":"text-overflow","trident":"-ms-text-overflow","status":"WD"},
 {"gecko":"","webkit":"-webkit-text-security","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-webkit-text-size-adjust","presto":"","trident":"-ms-text-size-adjust","status":""},
 {"gecko":"","webkit":"-webkit-text-stroke","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-webkit-text-stroke-color","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-webkit-text-stroke-width","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-epub-text-transform = text-transform","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-text-underline-position","status":"P"},
 {"gecko":"","webkit":"-webkit-touch-callout","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-transform","webkit":"-webkit-transform","presto":"-o-transform","trident":"-ms-transform","status":"WD"},
 {"gecko":"-moz-transform-origin","webkit":"-webkit-transform-origin","presto":"-o-transform-origin","trident":"-ms-transform-origin","status":"WD"},
 {"gecko":"","webkit":"-webkit-transform-origin-x","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-webkit-transform-origin-y","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-webkit-transform-origin-z","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-webkit-transform-style","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-transition","webkit":"-webkit-transition","presto":"-o-transition","trident":"","status":"WD"},
 {"gecko":"-moz-transition-delay","webkit":"-webkit-transition-delay","presto":"-o-transition-delay","trident":"","status":"WD"},
 {"gecko":"-moz-transition-duration","webkit":"-webkit-transition-duration","presto":"-o-transition-duration","trident":"","status":"WD"},
 {"gecko":"-moz-transition-property","webkit":"-webkit-transition-property","presto":"-o-transition-property","trident":"","status":"WD"},
 {"gecko":"-moz-transition-timing-function","webkit":"-webkit-transition-timing-function","presto":"-o-transition-timing-function","trident":"","status":"WD"},
 {"gecko":"","webkit":"-webkit-user-drag","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-user-focus","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-user-input","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-user-modify","webkit":"-webkit-user-modify","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-user-select","webkit":"-webkit-user-select","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"","presto":"-xv-voice-balance","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-xv-voice-duration","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-xv-voice-pitch","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-xv-voice-pitch-range","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-xv-voice-rate","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-xv-voice-stress","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-xv-voice-volume","trident":"","status":""},
 {"gecko":"-moz-window-shadow","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"word-break","presto":"","trident":"-ms-word-break","status":"WD"},
 {"gecko":"","webkit":"-epub-word-break = word-break","presto":"","trident":"","status":""},
 {"gecko":"word-wrap","webkit":"word-wrap","presto":"word-wrap","trident":"-ms-word-wrap","status":"WD"},
 {"gecko":"","webkit":"-webkit-writing-mode","presto":"writing-mode","trident":"-ms-writing-mode","status":"ED"},
 {"gecko":"","webkit":"-epub-writing-mode = -webkit-writing-mode","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"zoom","presto":"","trident":"-ms-zoom","status":""}]};

 var kCSS_PREFIXED_VALUE = [
   {"gecko": "-moz-box", "webkit": "-moz-box", "presto": "", "trident": "", "generic": "box"}
 ];

 var CssInspector = {

   mVENDOR_PREFIXES: null,

   kEXPORTS_FOR_GECKO:   true,
   kEXPORTS_FOR_WEBKIT:  true,
   kEXPORTS_FOR_PRESTO:  true,
   kEXPORTS_FOR_TRIDENT: true,

   cleanPrefixes: function()
   {
     this.mVENDOR_PREFIXES = null;
   },

   prefixesForProperty: function(aProperty)
   {
     if (!this.mVENDOR_PREFIXES) {

       this.mVENDOR_PREFIXES = {};
       for (var i = 0; i < kCSS_VENDOR_PREFIXES.properties.length; i++) {
         var p = kCSS_VENDOR_PREFIXES.properties[i];
         if (p.gecko && (p.webkit || p.presto || p.trident)) {
           var o = {};
           if (this.kEXPORTS_FOR_GECKO) o[p.gecko] = true;
           if (this.kEXPORTS_FOR_WEBKIT && p.webkit)  o[p.webkit] = true;
           if (this.kEXPORTS_FOR_PRESTO && p.presto)  o[p.presto] = true;
           if (this.kEXPORTS_FOR_TRIDENT && p.trident) o[p.trident] = true;
           this.mVENDOR_PREFIXES[p.gecko] = [];
           for (var j in o)
             this.mVENDOR_PREFIXES[p.gecko].push(j)
         }
       }
     }
     if (aProperty in this.mVENDOR_PREFIXES)
       return this.mVENDOR_PREFIXES[aProperty].sort();
     return null;
   },

   parseColorStop: function(parser, token)
   {
     var color = parser.parseColor(token);
     var position = "";
     if (!color)
       return null;
     token = parser.getToken(true, true);
     if (token.isPercentage() ||
         token.isDimensionOfUnit("cm") ||
         token.isDimensionOfUnit("mm") ||
         token.isDimensionOfUnit("in") ||
         token.isDimensionOfUnit("pc") ||
         token.isDimensionOfUnit("px") ||
         token.isDimensionOfUnit("em") ||
         token.isDimensionOfUnit("ex") ||
         token.isDimensionOfUnit("pt")) {
       position = token.value;
       token = parser.getToken(true, true);
     }
     return { color: color, position: position }
   },

   parseGradient: function (parser, token)
   {
     var isRadial = false;
     var gradient = { isRepeating: false };
     if (token.isNotNull()) {
       if (token.isFunction("-moz-linear-gradient(") ||
           token.isFunction("-moz-radial-gradient(") ||
           token.isFunction("-moz-repeating-linear-gradient(") ||
           token.isFunction("-moz-repeating-radial-gradient(")) {
         if (token.isFunction("-moz-radial-gradient(") ||
             token.isFunction("-moz-repeating-radial-gradient(")) {
           gradient.isRadial = true;
         }
         if (token.isFunction("-moz-repeating-linear-gradient(") ||
             token.isFunction("-moz-repeating-radial-gradient(")) {
           gradient.isRepeating = true;
         }


         token = parser.getToken(true, true);
         var haveGradientLine = false;
         var foundHorizPosition = false;
         var haveAngle = false;

         if (token.isAngle()) {
           gradient.angle = token.value;
           haveGradientLine = true;
           haveAngle = true;
           token = parser.getToken(true, true);
         }

         if (token.isLength()
             || token.isIdent("top")
             || token.isIdent("center")
             || token.isIdent("bottom")
             || token.isIdent("left")
             || token.isIdent("right")) {
           haveGradientLine = true;
           if (token.isLength()
             || token.isIdent("left")
             || token.isIdent("right")) {
             foundHorizPosition = true;
           }
           gradient.position = token.value;
           token = parser.getToken(true, true);
         }

         if (haveGradientLine) {
           if (!haveAngle && token.isAngle()) { // we have an angle here
             gradient.angle = token.value;
             haveAngle = true;
             token = parser.getToken(true, true);
           }

           else if (token.isLength()
                   || (foundHorizPosition && (token.isIdent("top")
                                              || token.isIdent("center")
                                              || token.isIdent("bottom")))
                   || (!foundHorizPosition && (token.isLength()
                                               || token.isIdent("top")
                                               || token.isIdent("center")
                                               || token.isIdent("bottom")
                                               || token.isIdent("left")
                                               || token.isIdent("right")))) {
             gradient.position = ("position" in gradient) ? gradient.position + " ": "";
             gradient.position += token.value;
             token = parser.getToken(true, true);
           }

           if (!haveAngle && token.isAngle()) { // we have an angle here
             gradient.angle = token.value;
             haveAngle = true;
             token = parser.getToken(true, true);
           }

           // we must find a comma here
           if (!token.isSymbol(","))
             return null;
           token = parser.getToken(true, true);
         }

         // ok... Let's deal with the rest now
         if (gradient.isRadial) {
           if (token.isIdent("circle") ||
               token.isIdent("ellipse")) {
             gradient.shape = token.value;
             token = parser.getToken(true, true);
           }
           if (token.isIdent("closest-side") ||
                    token.isIdent("closest-corner") ||
                    token.isIdent("farthest-side") ||
                    token.isIdent("farthest-corner") ||
                    token.isIdent("contain") ||
                    token.isIdent("cover")) {
             gradient.size = token.value;
             token = parser.getToken(true, true);
           }
           if (!("shape" in gradient) &&
               (token.isIdent("circle") ||
                token.isIdent("ellipse"))) {
             // we can still have the second value...
             gradient.shape = token.value;
             token = parser.getToken(true, true);
           }
           if ((("shape" in gradient) || ("size" in gradient)) && !token.isSymbol(","))
             return null;
           else if (("shape" in gradient) || ("size" in gradient))
             token = parser.getToken(true, true);
         }

         // now color stops...
         var stop1 = this.parseColorStop(parser, token);
         if (!stop1)
           return null;
         token = parser.currentToken();
         if (!token.isSymbol(","))
           return null;
         token = parser.getToken(true, true);
         var stop2 = this.parseColorStop(parser, token);
         if (!stop2)
           return null;
         token = parser.currentToken();
         if (token.isSymbol(",")) {
           token = parser.getToken(true, true);
         }
         // ok we have at least two color stops
         gradient.stops = [stop1, stop2];
         while (!token.isSymbol(")")) {
           var colorstop = this.parseColorStop(parser, token);
           if (!colorstop)
             return null;
           token = parser.currentToken();
           if (!token.isSymbol(")") && !token.isSymbol(","))
             return null;
           if (token.isSymbol(","))
             token = parser.getToken(true, true);
           gradient.stops.push(colorstop);
         }
         return gradient;
       }
     }
     return null;
   },

   parseBoxShadows: function(aString)
   {
     var parser = new CSSParser();
     parser._init();
     parser.mPreserveWS       = false;
     parser.mPreserveComments = false;
     parser.mPreservedTokens = [];
     parser.mScanner.init(aString);

     var shadows = [];
     var token = parser.getToken(true, true);
     var color = "", blurRadius = "0px", offsetX = "0px", offsetY = "0px", spreadRadius = "0px";
     var inset = false;
     while (token.isNotNull()) {
       if (token.isIdent("none")) {
         shadows.push( { none: true } );
         token = parser.getToken(true, true);
       }
       else {
         if (token.isIdent('inset')) {
           inset = true;
           token = parser.getToken(true, true);
         }

         if (token.isPercentage() ||
             token.isDimensionOfUnit("cm") ||
             token.isDimensionOfUnit("mm") ||
             token.isDimensionOfUnit("in") ||
             token.isDimensionOfUnit("pc") ||
             token.isDimensionOfUnit("px") ||
             token.isDimensionOfUnit("em") ||
             token.isDimensionOfUnit("ex") ||
             token.isDimensionOfUnit("pt")) {
           var offsetX = token.value;
           token = parser.getToken(true, true);
         }
         else
           return [];

         if (!inset && token.isIdent('inset')) {
           inset = true;
           token = parser.getToken(true, true);
         }

         if (token.isPercentage() ||
             token.isDimensionOfUnit("cm") ||
             token.isDimensionOfUnit("mm") ||
             token.isDimensionOfUnit("in") ||
             token.isDimensionOfUnit("pc") ||
             token.isDimensionOfUnit("px") ||
             token.isDimensionOfUnit("em") ||
             token.isDimensionOfUnit("ex") ||
             token.isDimensionOfUnit("pt")) {
           var offsetX = token.value;
           token = parser.getToken(true, true);
         }
         else
           return [];

         if (!inset && token.isIdent('inset')) {
           inset = true;
           token = parser.getToken(true, true);
         }

         if (token.isPercentage() ||
             token.isDimensionOfUnit("cm") ||
             token.isDimensionOfUnit("mm") ||
             token.isDimensionOfUnit("in") ||
             token.isDimensionOfUnit("pc") ||
             token.isDimensionOfUnit("px") ||
             token.isDimensionOfUnit("em") ||
             token.isDimensionOfUnit("ex") ||
             token.isDimensionOfUnit("pt")) {
           var blurRadius = token.value;
           token = parser.getToken(true, true);
         }

         if (!inset && token.isIdent('inset')) {
           inset = true;
           token = parser.getToken(true, true);
         }

         if (token.isPercentage() ||
             token.isDimensionOfUnit("cm") ||
             token.isDimensionOfUnit("mm") ||
             token.isDimensionOfUnit("in") ||
             token.isDimensionOfUnit("pc") ||
             token.isDimensionOfUnit("px") ||
             token.isDimensionOfUnit("em") ||
             token.isDimensionOfUnit("ex") ||
             token.isDimensionOfUnit("pt")) {
           var spreadRadius = token.value;
           token = parser.getToken(true, true);
         }

         if (!inset && token.isIdent('inset')) {
           inset = true;
           token = parser.getToken(true, true);
         }

         if (token.isFunction("rgb(") ||
             token.isFunction("rgba(") ||
             token.isFunction("hsl(") ||
             token.isFunction("hsla(") ||
             token.isSymbol("#") ||
             token.isIdent()) {
           var color = parser.parseColor(token);
           token = parser.getToken(true, true);
         }

         if (!inset && token.isIdent('inset')) {
           inset = true;
           token = parser.getToken(true, true);
         }

         shadows.push( { none: false,
                         color: color,
                         offsetX: offsetX, offsetY: offsetY,
                         blurRadius: blurRadius,
                         spreadRadius: spreadRadius } );

         if (token.isSymbol(",")) {
           inset = false;
           color = "";
           blurRadius = "0px";
           spreadRadius = "0px"
           offsetX = "0px";
           offsetY = "0px";
           token = parser.getToken(true, true);
         }
         else if (!token.isNotNull())
           return shadows;
         else
           return [];
       }
     }
     return shadows;
   },

   parseTextShadows: function(aString)
   {
     var parser = new CSSParser();
     parser._init();
     parser.mPreserveWS       = false;
     parser.mPreserveComments = false;
     parser.mPreservedTokens = [];
     parser.mScanner.init(aString);

     var shadows = [];
     var token = parser.getToken(true, true);
     var color = "", blurRadius = "0px", offsetX = "0px", offsetY = "0px";
     while (token.isNotNull()) {
       if (token.isIdent("none")) {
         shadows.push( { none: true } );
         token = parser.getToken(true, true);
       }
       else {
         if (token.isFunction("rgb(") ||
             token.isFunction("rgba(") ||
             token.isFunction("hsl(") ||
             token.isFunction("hsla(") ||
             token.isSymbol("#") ||
             token.isIdent()) {
           var color = parser.parseColor(token);
           token = parser.getToken(true, true);
         }
         if (token.isPercentage() ||
             token.isDimensionOfUnit("cm") ||
             token.isDimensionOfUnit("mm") ||
             token.isDimensionOfUnit("in") ||
             token.isDimensionOfUnit("pc") ||
             token.isDimensionOfUnit("px") ||
             token.isDimensionOfUnit("em") ||
             token.isDimensionOfUnit("ex") ||
             token.isDimensionOfUnit("pt")) {
           var offsetX = token.value;
           token = parser.getToken(true, true);
         }
         else
           return [];
         if (token.isPercentage() ||
             token.isDimensionOfUnit("cm") ||
             token.isDimensionOfUnit("mm") ||
             token.isDimensionOfUnit("in") ||
             token.isDimensionOfUnit("pc") ||
             token.isDimensionOfUnit("px") ||
             token.isDimensionOfUnit("em") ||
             token.isDimensionOfUnit("ex") ||
             token.isDimensionOfUnit("pt")) {
           var offsetY = token.value;
           token = parser.getToken(true, true);
         }
         else
           return [];
         if (token.isPercentage() ||
             token.isDimensionOfUnit("cm") ||
             token.isDimensionOfUnit("mm") ||
             token.isDimensionOfUnit("in") ||
             token.isDimensionOfUnit("pc") ||
             token.isDimensionOfUnit("px") ||
             token.isDimensionOfUnit("em") ||
             token.isDimensionOfUnit("ex") ||
             token.isDimensionOfUnit("pt")) {
           var blurRadius = token.value;
           token = parser.getToken(true, true);
         }
         if (!color &&
             (token.isFunction("rgb(") ||
              token.isFunction("rgba(") ||
              token.isFunction("hsl(") ||
              token.isFunction("hsla(") ||
              token.isSymbol("#") ||
              token.isIdent())) {
           var color = parser.parseColor(token);
           token = parser.getToken(true, true);
         }

         shadows.push( { none: false,
                         color: color,
                         offsetX: offsetX, offsetY: offsetY,
                         blurRadius: blurRadius } );

         if (token.isSymbol(",")) {
           color = "";
           blurRadius = "0px";
           offsetX = "0px";
           offsetY = "0px";
           token = parser.getToken(true, true);
         }
         else if (!token.isNotNull())
           return shadows;
         else
           return [];
       }
     }
     return shadows;
   },

   parseBackgroundImages: function(aString)
   {
     var parser = new CSSParser();
     parser._init();
     parser.mPreserveWS       = false;
     parser.mPreserveComments = false;
     parser.mPreservedTokens = [];
     parser.mScanner.init(aString);

     var backgrounds = [];
     var token = parser.getToken(true, true);
     while (token.isNotNull()) {
       /*if (token.isFunction("rgb(") ||
           token.isFunction("rgba(") ||
           token.isFunction("hsl(") ||
           token.isFunction("hsla(") ||
           token.isSymbol("#") ||
           token.isIdent()) {
         var color = parser.parseColor(token);
         backgrounds.push( { type: "color", value: color });
         token = parser.getToken(true, true);
       }
       else */
       if (token.isFunction("url(")) {
         token = parser.getToken(true, true);
         var urlContent = parser.parseURL(token);
         backgrounds.push( { type: "image", value: "url(" + urlContent });
         token = parser.getToken(true, true);
       }
       else if (token.isFunction("-moz-linear-gradient(") ||
                token.isFunction("-moz-radial-gradient(") ||
                token.isFunction("-moz-repeating-linear-gradient(") ||
                token.isFunction("-moz-repeating-radial-gradient(")) {
         var gradient = this.parseGradient(parser, token);
         backgrounds.push( { type: gradient.isRadial ? "radial-gradient" : "linear-gradient", value: gradient });
         token = parser.getToken(true, true);
       }
       else
         return null;
       if (token.isSymbol(",")) {
         token = parser.getToken(true, true);
         if (!token.isNotNull())
           return null;
       }
     }
     return backgrounds;
   },

   serializeGradient: function(gradient)
   {
     var s = gradient.isRadial
               ? (gradient.isRepeating ? "-moz-repeating-radial-gradient(" : "-moz-radial-gradient(" )
               : (gradient.isRepeating ? "-moz-repeating-linear-gradient(" : "-moz-linear-gradient(" );
     if (gradient.angle || gradient.position)
       s += (gradient.angle ? gradient.angle + " ": "") +
            (gradient.position ? gradient.position : "") +
            ", ";
     if (gradient.isRadial && (gradient.shape || gradient.size))
       s += (gradient.shape ? gradient.shape : "") +
            " " +
            (gradient.size ? gradient.size : "") +
            ", ";
     for (var i = 0; i < gradient.stops.length; i++) {
       var colorstop = gradient.stops[i];
       s += colorstop.color + (colorstop.position ? " " + colorstop.position : "");
       if (i != gradient.stops.length -1)
         s += ", ";
     }
     s += ")";
     return s;
   },

   parseBorderImage: function(aString)
   {
     var parser = new CSSParser();
     parser._init();
     parser.mPreserveWS       = false;
     parser.mPreserveComments = false;
     parser.mPreservedTokens = [];
     parser.mScanner.init(aString);

     var borderImage = {url: "", offsets: [], widths: [], sizes: []};
     var token = parser.getToken(true, true);
     if (token.isFunction("url(")) {
       token = parser.getToken(true, true);
       var urlContent = parser.parseURL(token);
       if (urlContent) {
         borderImage.url = urlContent.substr(0, urlContent.length - 1).trim();
         if ((borderImage.url[0] == '"' && borderImage.url[borderImage.url.length - 1] == '"') ||
              (borderImage.url[0] == "'" && borderImage.url[borderImage.url.length - 1] == "'"))
         borderImage.url = borderImage.url.substr(1, borderImage.url.length - 2);
       }
       else
         return null;
     }
     else
       return null;

     token = parser.getToken(true, true);
     if (token.isNumber() || token.isPercentage())
       borderImage.offsets.push(token.value);
     else
       return null;
     var i;
     for (i= 0; i < 3; i++) {
       token = parser.getToken(true, true);
       if (token.isNumber() || token.isPercentage())
         borderImage.offsets.push(token.value);
       else
         break;
     }
     if (i == 3)
       token = parser.getToken(true, true);

     if (token.isSymbol("/")) {
       token = parser.getToken(true, true);
       if (token.isDimension()
           || token.isNumber("0")
           || (token.isIdent() && token.value in parser.kBORDER_WIDTH_NAMES))
         borderImage.widths.push(token.value);
       else
         return null;

       for (var i = 0; i < 3; i++) {
         token = parser.getToken(true, true);
         if (token.isDimension()
             || token.isNumber("0")
             || (token.isIdent() && token.value in parser.kBORDER_WIDTH_NAMES))
           borderImage.widths.push(token.value);
         else
           break;
       }
       if (i == 3)
         token = parser.getToken(true, true);
     }

     for (var i = 0; i < 2; i++) {
       if (token.isIdent("stretch")
           || token.isIdent("repeat")
           || token.isIdent("round"))
         borderImage.sizes.push(token.value);
       else if (!token.isNotNull())
         return borderImage;
       else
         return null;
       token = parser.getToken(true, true);
     }
     if (!token.isNotNull())
       return borderImage;

     return null;
   },

   parseMediaQuery: function(aString)
   {
     var kCONSTRAINTS = {
       "width": true,
       "min-width": true,
       "max-width": true,
       "height": true,
       "min-height": true,
       "max-height": true,
       "device-width": true,
       "min-device-width": true,
       "max-device-width": true,
       "device-height": true,
       "min-device-height": true,
       "max-device-height": true,
       "orientation": true,
       "aspect-ratio": true,
       "min-aspect-ratio": true,
       "max-aspect-ratio": true,
       "device-aspect-ratio": true,
       "min-device-aspect-ratio": true,
       "max-device-aspect-ratio": true,
       "color": true,
       "min-color": true,
       "max-color": true,
       "color-index": true,
       "min-color-index": true,
       "max-color-index": true,
       "monochrome": true,
       "min-monochrome": true,
       "max-monochrome": true,
       "resolution": true,
       "min-resolution": true,
       "max-resolution": true,
       "scan": true,
       "grid": true
     };
     var parser = new CSSParser();
     parser._init();
     parser.mPreserveWS       = false;
     parser.mPreserveComments = false;
     parser.mPreservedTokens = [];
     parser.mScanner.init(aString);

     var m = {amplifier: "", medium: "", constraints: []};
     var token = parser.getToken(true, true);

     if (token.isIdent("all") ||
         token.isIdent("aural") ||
         token.isIdent("braille") ||
         token.isIdent("handheld") ||
         token.isIdent("print") ||
         token.isIdent("projection") ||
         token.isIdent("screen") ||
         token.isIdent("tty") ||
         token.isIdent("tv")) {
        m.medium = token.value;
        token = parser.getToken(true, true);
     }
     else if (token.isIdent("not") || token.isIdent("only")) {
       m.amplifier = token.value;
       token = parser.getToken(true, true);
       if (token.isIdent("all") ||
           token.isIdent("aural") ||
           token.isIdent("braille") ||
           token.isIdent("handheld") ||
           token.isIdent("print") ||
           token.isIdent("projection") ||
           token.isIdent("screen") ||
           token.isIdent("tty") ||
           token.isIdent("tv")) {
          m.medium = token.value;
          token = parser.getToken(true, true);
       }
       else
         return null;
     }

     if (m.medium) {
       if (!token.isNotNull())
         return m;
       if (token.isIdent("and")) {
         token = parser.getToken(true, true);
       }
       else
         return null;
     }

     while (token.isSymbol("(")) {
       token = parser.getToken(true, true);
       if (token.isIdent() && (token.value in kCONSTRAINTS)) {
         var constraint = token.value;
         token = parser.getToken(true, true);
         if (token.isSymbol(":")) {
           token = parser.getToken(true, true);
           var values = [];
           while (!token.isSymbol(")")) {
             values.push(token.value);
             token = parser.getToken(true, true);
           }
           if (token.isSymbol(")")) {
             m.constraints.push({constraint: constraint, value: values});
             token = parser.getToken(true, true);
             if (token.isNotNull()) {
               if (token.isIdent("and")) {
                 token = parser.getToken(true, true);
               }
               else
                 return null;
             }
             else
               return m;
           }
           else
             return null;
         }
         else if (token.isSymbol(")")) {
           m.constraints.push({constraint: constraint, value: null});
           token = parser.getToken(true, true);
           if (token.isNotNull()) {
             if (token.isIdent("and")) {
               token = parser.getToken(true, true);
             }
             else
               return null;
           }
           else
             return m;
         }
         else
           return null;
       }
       else
         return null;
     }
     return m;
   }

 };


 /************************************************************/
 /************************** JSCSSP **************************/
 /************************************************************/

 var CSS_ESCAPE  = '\\';

 var IS_HEX_DIGIT  = 1;
 var START_IDENT   = 2;
 var IS_IDENT      = 4;
 var IS_WHITESPACE = 8;

 var W   = IS_WHITESPACE;
 var I   = IS_IDENT;
 var S   =          START_IDENT;
 var SI  = IS_IDENT|START_IDENT;
 var XI  = IS_IDENT            |IS_HEX_DIGIT;
 var XSI = IS_IDENT|START_IDENT|IS_HEX_DIGIT;

 function CSSScanner(aString)
 {
   this.init(aString);
 }

 CSSScanner.prototype = {

   kLexTable: [
   //                                     TAB LF      FF  CR
      0,  0,  0,  0,  0,  0,  0,  0,  0,  W,  W,  0,  W,  W,  0,  0,
   //
      0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
   // SPC !   "   #   $   %   &   '   (   )   *   +   ,   -   .   /
      W,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  I,  0,  0,
   // 0   1   2   3   4   5   6   7   8   9   :   ;   <   =   >   ?
      XI, XI, XI, XI, XI, XI, XI, XI, XI, XI, 0,  0,  0,  0,  0,  0,
   // @   A   B   C   D   E   F   G   H   I   J   K   L   M   N   O
      0,  XSI,XSI,XSI,XSI,XSI,XSI,SI, SI, SI, SI, SI, SI, SI, SI, SI,
   // P   Q   R   S   T   U   V   W   X   Y   Z   [   \   ]   ^   _
      SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, 0,  S,  0,  0,  SI,
   // `   a   b   c   d   e   f   g   h   i   j   k   l   m   n   o
      0,  XSI,XSI,XSI,XSI,XSI,XSI,SI, SI, SI, SI, SI, SI, SI, SI, SI,
   // p   q   r   s   t   u   v   w   x   y   z   {   |   }   ~
      SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, 0,  0,  0,  0,  0,
   //
      0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
   //
      0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
   //     ¡   ¢   £   ¤   ¥   ¦   §   ¨   ©   ª   «   ¬   ­   ®   ¯
      0,  SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
   // °   ±   ²   ³   ´   µ   ¶   ·   ¸   ¹   º   »   ¼   ½   ¾   ¿
      SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
   // À   Á   Â   Ã   Ä   Å   Æ   Ç   È   É   Ê   Ë   Ì   Í   Î   Ï
      SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
   // Ð   Ñ   Ò   Ó   Ô   Õ   Ö   ×   Ø   Ù   Ú   Û   Ü   Ý   Þ   ß
      SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
   // à   á   â   ã   ä   å   æ   ç   è   é   ê   ë   ì   í   î   ï
      SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
   // ð   ñ   ò   ó   ô   õ   ö   ÷   ø   ù   ú   û   ü   ý   þ   ÿ
      SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI
   ],

   kHexValues: {
     "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
     "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15
   },

   mString : "",
   mPos : 0,
   mPreservedPos : [],

   init: function(aString) {
     this.mString = aString;
     this.mPos = 0;
     this.mPreservedPos = [];
   },

   getCurrentPos: function() {
     return this.mPos;
   },

   getAlreadyScanned: function()
   {
     return this.mString.substr(0, this.mPos);
   },

   preserveState: function() {
     this.mPreservedPos.push(this.mPos);
   },

   restoreState: function() {
     if (this.mPreservedPos.length) {
       this.mPos = this.mPreservedPos.pop();
     }
   },

   forgetState: function() {
     if (this.mPreservedPos.length) {
       this.mPreservedPos.pop();
     }
   },

   read: function() {
     if (this.mPos < this.mString.length)
       return this.mString.charAt(this.mPos++);
     return -1;
   },

   peek: function() {
     if (this.mPos < this.mString.length)
       return this.mString.charAt(this.mPos);
     return -1;
   },

   isHexDigit: function(c) {
     var code = c.charCodeAt(0);
     return (code < 256 && (this.kLexTable[code] & IS_HEX_DIGIT) != 0);
   },

   isIdentStart: function(c) {
     var code = c.charCodeAt(0);
     return (code >= 256 || (this.kLexTable[code] & START_IDENT) != 0);
   },

   startsWithIdent: function(aFirstChar, aSecondChar) {
     var code = aFirstChar.charCodeAt(0);
     return this.isIdentStart(aFirstChar) ||
            (aFirstChar == "-" && this.isIdentStart(aSecondChar));
   },

   isIdent: function(c) {
     var code = c.charCodeAt(0);
     return (code >= 256 || (this.kLexTable[code] & IS_IDENT) != 0);
   },

   isSymbol: function(c) {
     var code = c.charCodeAt(0);
     return (this.kLexTable[code] & IS_IDENT) != 1;
   },

   pushback: function() {
     this.mPos--;
   },

   nextHexValue: function() {
     var c = this.read();
     if (c == -1 || !this.isHexDigit(c))
       return new jscsspToken(jscsspToken.NULL_TYPE, null);
     var s = c;
     c = this.read();
     while (c != -1 && this.isHexDigit(c)) {
       s += c;
       c = this.read();
     }
     if (c != -1)
       this.pushback();
     return new jscsspToken(jscsspToken.HEX_TYPE, s);
   },

   gatherEscape: function() {
     var c = this.peek();
     if (c == -1)
       return "";
     if (this.isHexDigit(c)) {
       var code = 0;
       for (var i = 0; i < 6; i++) {
         c = this.read();
         if (this.isHexDigit(c))
           code = code * 16 + this.kHexValues[c.toLowerCase()];
         else if (!this.isHexDigit(c) && !this.isWhiteSpace(c)) {
           this.pushback();
           break;
         }
         else
           break;
       }
       if (i == 6) {
         c = this.peek();
         if (this.isWhiteSpace(c))
           this.read();
       }
       return String.fromCharCode(code);
     }
     c = this.read();
     if (c != "\n")
       return c;
     return "";
   },

   gatherIdent: function(c) {
     var s = "";
     if (c == CSS_ESCAPE)
       s += this.gatherEscape();
     else
       s += c;
     c = this.read();
    if(!this.mMediaQueryMode){
        while (c != -1
               && (this.isIdent(c) || c == CSS_ESCAPE)) {
          if (c == CSS_ESCAPE)
            s += this.gatherEscape();
          else
            s += c;
          c = this.read();
        }
    }
    else {
        while (c != -1
               && c != '{'
               && c != ',') {
            s += c;
          c = this.read();
        }
    }
     if (c != -1)
       this.pushback();
      this.mMediaQueryMode = false;
     return s;
   },

   parseIdent: function(c) {
    var value = this.gatherIdent(c);
     var nextChar = this.peek();
     if (nextChar == "(") {
       value += this.read();
       return new jscsspToken(jscsspToken.FUNCTION_TYPE, value);
     }
     return new jscsspToken(jscsspToken.IDENT_TYPE, value);
   },

   isDigit: function(c) {
     return (c >= '0') && (c <= '9');
   },

   parseComment: function(c) {
     var s = c;
     while ((c = this.read()) != -1) {
       s += c;
       if (c == "*") {
         c = this.read();
         if (c == -1)
           break;
         if (c == "/") {
           s += c;
           break;
         }
         this.pushback();
       }
     }
     return new jscsspToken(jscsspToken.COMMENT_TYPE, s);
   },

   parseNumber: function(c) {
     var s = c;
     var foundDot = false;
     while ((c = this.read()) != -1) {
       if (c == ".") {
         if (foundDot)
           break;
         else {
           s += c;
           foundDot = true;
         }
       } else if (this.isDigit(c))
         s += c;
       else
         break;
     }

     if (c != -1 && this.startsWithIdent(c, this.peek())) { // DIMENSION
       var unit = this.gatherIdent(c);
       s += unit;
       return new jscsspToken(jscsspToken.DIMENSION_TYPE, s, unit);
     }
     else if (c == "%") {
       s += "%";
       return new jscsspToken(jscsspToken.PERCENTAGE_TYPE, s);
     }
     else if (c != -1)
       this.pushback();
     return new jscsspToken(jscsspToken.NUMBER_TYPE, s);
   },

   parseString: function(aStop) {
     var s = aStop;
     var previousChar = aStop;
     var c;
     while ((c = this.read()) != -1) {
       if (c == aStop && previousChar != CSS_ESCAPE) {
         s += c;
         break;
       }
       else if (c == CSS_ESCAPE) {
         c = this.peek();
         if (c == -1)
           break;
         else if (c == "\n" || c == "\r" || c == "\f") {
           d = c;
           c = this.read();
           // special for Opera that preserves \r\n...
           if (d == "\r") {
             c = this.peek();
             if (c == "\n")
               c = this.read();
           }
         }
         else {
           s += this.gatherEscape();
           c = this.peek();
         }
       }
       else if (c == "\n" || c == "\r" || c == "\f") {
         break;
       }
       else
         s += c;

       previousChar = c;
     }
     return new jscsspToken(jscsspToken.STRING_TYPE, s);
   },

   isWhiteSpace: function(c) {
     var code = c.charCodeAt(0);
     return code < 256 && (this.kLexTable[code] & IS_WHITESPACE) != 0;
   },

   eatWhiteSpace: function(c) {
     var s = c;
     while ((c = this.read()) != -1) {
       if (!this.isWhiteSpace(c))
         break;
       s += c;
     }
     if (c != -1)
       this.pushback();
     return s;
   },

   parseAtKeyword: function(c) {
     return new jscsspToken(jscsspToken.ATRULE_TYPE, this.gatherIdent(c));
   },

   nextToken: function() {
     var c = this.read();
     if (c == -1)
       return new jscsspToken(jscsspToken.NULL_TYPE, null);

     if (this.startsWithIdent(c, this.peek()))
       return this.parseIdent(c);

     if (c == '@') {
       var nextChar = this.read();
       if (nextChar != -1) {
         var followingChar = this.peek();
         this.pushback();
         if (this.startsWithIdent(nextChar, followingChar))
           return this.parseAtKeyword(c);
       }
     }

     if (c == "." || c == "+" || c == "-") {
       var nextChar = this.peek();
       if (this.isDigit(nextChar))
         return this.parseNumber(c);
       else if (nextChar == "." && c != ".") {
         firstChar = this.read();
         var secondChar = this.peek();
         this.pushback();
         if (this.isDigit(secondChar))
           return this.parseNumber(c);
       }
     }
     if (this.isDigit(c)) {
       return this.parseNumber(c);
     }

     if (c == "'" || c == '"')
       return this.parseString(c);

     if (this.isWhiteSpace(c)) {
       var s = this.eatWhiteSpace(c);

       return new jscsspToken(jscsspToken.WHITESPACE_TYPE, s);
     }

     if (c == "|" || c == "~" || c == "^" || c == "$" || c == "*") {
       var nextChar = this.read();
       if (nextChar == "=") {
         switch (c) {
           case "~" :
             return new jscsspToken(jscsspToken.INCLUDES_TYPE, "~=");
           case "|" :
             return new jscsspToken(jscsspToken.DASHMATCH_TYPE, "|=");
           case "^" :
             return new jscsspToken(jscsspToken.BEGINSMATCH_TYPE, "^=");
           case "$" :
             return new jscsspToken(jscsspToken.ENDSMATCH_TYPE, "$=");
           case "*" :
             return new jscsspToken(jscsspToken.CONTAINSMATCH_TYPE, "*=");
           default :
             break;
         }
       } else if (nextChar != -1)
         this.pushback();
     }

     if (c == "/" && this.peek() == "*")
       return this.parseComment(c);

     return new jscsspToken(jscsspToken.SYMBOL_TYPE, c);
   }
 };

 function CSSParser(aString)
 {
   this.mToken = null;
   this.mLookAhead = null;
   this.mScanner = new CSSScanner(aString);

   this.mPreserveWS = true;
   this.mPreserveComments = true;

   this.mPreservedTokens = [];

   this.mError = null;
 }

 CSSParser.prototype = {

   _init:function() {
     this.mToken = null;
     this.mLookAhead = null;
     this.mMediaQueryMode = false;
   },

   kINHERIT: "inherit",

   kBORDER_WIDTH_NAMES: {
       "thin": true,
       "medium": true,
       "thick": true
   },

   kBORDER_STYLE_NAMES: {
     "none": true,
     "hidden": true,
     "dotted": true,
     "dashed": true,
     "solid": true,
     "double": true,
     "groove": true,
     "ridge": true,
     "inset": true,
     "outset": true
   },

   kCOLOR_NAMES: {
     "transparent": true,

     "black": true,
     "silver": true,
     "gray": true,
     "white": true,
     "maroon": true,
     "red": true,
     "purple": true,
     "fuchsia": true,
     "green": true,
     "lime": true,
     "olive": true,
     "yellow": true,
     "navy": true,
     "blue": true,
     "teal": true,
     "aqua": true,

     "aliceblue": true,
     "antiquewhite": true,
     "aqua": true,
     "aquamarine": true,
     "azure": true,
     "beige": true,
     "bisque": true,
     "black": true,
     "blanchedalmond": true,
     "blue": true,
     "blueviolet": true,
     "brown": true,
     "burlywood": true,
     "cadetblue": true,
     "chartreuse": true,
     "chocolate": true,
     "coral": true,
     "cornflowerblue": true,
     "cornsilk": true,
     "crimson": true,
     "cyan": true,
     "darkblue": true,
     "darkcyan": true,
     "darkgoldenrod": true,
     "darkgray": true,
     "darkgreen": true,
     "darkgrey": true,
     "darkkhaki": true,
     "darkmagenta": true,
     "darkolivegreen": true,
     "darkorange": true,
     "darkorchid": true,
     "darkred": true,
     "darksalmon": true,
     "darkseagreen": true,
     "darkslateblue": true,
     "darkslategray": true,
     "darkslategrey": true,
     "darkturquoise": true,
     "darkviolet": true,
     "deeppink": true,
     "deepskyblue": true,
     "dimgray": true,
     "dimgrey": true,
     "dodgerblue": true,
     "firebrick": true,
     "floralwhite": true,
     "forestgreen": true,
     "fuchsia": true,
     "gainsboro": true,
     "ghostwhite": true,
     "gold": true,
     "goldenrod": true,
     "gray": true,
     "green": true,
     "greenyellow": true,
     "grey": true,
     "honeydew": true,
     "hotpink": true,
     "indianred": true,
     "indigo": true,
     "ivory": true,
     "khaki": true,
     "lavender": true,
     "lavenderblush": true,
     "lawngreen": true,
     "lemonchiffon": true,
     "lightblue": true,
     "lightcoral": true,
     "lightcyan": true,
     "lightgoldenrodyellow": true,
     "lightgray": true,
     "lightgreen": true,
     "lightgrey": true,
     "lightpink": true,
     "lightsalmon": true,
     "lightseagreen": true,
     "lightskyblue": true,
     "lightslategray": true,
     "lightslategrey": true,
     "lightsteelblue": true,
     "lightyellow": true,
     "lime": true,
     "limegreen": true,
     "linen": true,
     "magenta": true,
     "maroon": true,
     "mediumaquamarine": true,
     "mediumblue": true,
     "mediumorchid": true,
     "mediumpurple": true,
     "mediumseagreen": true,
     "mediumslateblue": true,
     "mediumspringgreen": true,
     "mediumturquoise": true,
     "mediumvioletred": true,
     "midnightblue": true,
     "mintcream": true,
     "mistyrose": true,
     "moccasin": true,
     "navajowhite": true,
     "navy": true,
     "oldlace": true,
     "olive": true,
     "olivedrab": true,
     "orange": true,
     "orangered": true,
     "orchid": true,
     "palegoldenrod": true,
     "palegreen": true,
     "paleturquoise": true,
     "palevioletred": true,
     "papayawhip": true,
     "peachpuff": true,
     "peru": true,
     "pink": true,
     "plum": true,
     "powderblue": true,
     "purple": true,
     "red": true,
     "rosybrown": true,
     "royalblue": true,
     "saddlebrown": true,
     "salmon": true,
     "sandybrown": true,
     "seagreen": true,
     "seashell": true,
     "sienna": true,
     "silver": true,
     "skyblue": true,
     "slateblue": true,
     "slategray": true,
     "slategrey": true,
     "snow": true,
     "springgreen": true,
     "steelblue": true,
     "tan": true,
     "teal": true,
     "thistle": true,
     "tomato": true,
     "turquoise": true,
     "violet": true,
     "wheat": true,
     "white": true,
     "whitesmoke": true,
     "yellow": true,
     "yellowgreen": true,

     "activeborder": true,
     "activecaption": true,
     "appworkspace": true,
     "background": true,
     "buttonface": true,
     "buttonhighlight": true,
     "buttonshadow": true,
     "buttontext": true,
     "captiontext": true,
     "graytext": true,
     "highlight": true,
     "highlighttext": true,
     "inactiveborder": true,
     "inactivecaption": true,
     "inactivecaptiontext": true,
     "infobackground": true,
     "infotext": true,
     "menu": true,
     "menutext": true,
     "scrollbar": true,
     "threeddarkshadow": true,
     "threedface": true,
     "threedhighlight": true,
     "threedlightshadow": true,
     "threedshadow": true,
     "window": true,
     "windowframe": true,
     "windowtext": true
   },

   kLIST_STYLE_TYPE_NAMES: {
     "decimal": true,
     "decimal-leading-zero": true,
     "lower-roman": true,
     "upper-roman": true,
     "georgian": true,
     "armenian": true,
     "lower-latin": true,
     "lower-alpha": true,
     "upper-latin": true,
     "upper-alpha": true,
     "lower-greek": true,

     "disc": true,
     "circle": true,
     "square": true,
     "none": true,

     /* CSS 3 */
     "box": true,
     "check": true,
     "diamond": true,
     "hyphen": true,

     "lower-armenian": true,
     "cjk-ideographic": true,
     "ethiopic-numeric": true,
     "hebrew": true,
     "japanese-formal": true,
     "japanese-informal": true,
     "simp-chinese-formal": true,
     "simp-chinese-informal": true,
     "syriac": true,
     "tamil": true,
     "trad-chinese-formal": true,
     "trad-chinese-informal": true,
     "upper-armenian": true,
     "arabic-indic": true,
     "binary": true,
     "bengali": true,
     "cambodian": true,
     "khmer": true,
     "devanagari": true,
     "gujarati": true,
     "gurmukhi": true,
     "kannada": true,
     "lower-hexadecimal": true,
     "lao": true,
     "malayalam": true,
     "mongolian": true,
     "myanmar": true,
     "octal": true,
     "oriya": true,
     "persian": true,
     "urdu": true,
     "telugu": true,
     "tibetan": true,
     "upper-hexadecimal": true,
     "afar": true,
     "ethiopic-halehame-aa-et": true,
     "ethiopic-halehame-am-et": true,
     "amharic-abegede": true,
     "ehiopic-abegede-am-et": true,
     "cjk-earthly-branch": true,
     "cjk-heavenly-stem": true,
     "ethiopic": true,
     "ethiopic-abegede": true,
     "ethiopic-abegede-gez": true,
     "hangul-consonant": true,
     "hangul": true,
     "hiragana-iroha": true,
     "hiragana": true,
     "katakana-iroha": true,
     "katakana": true,
     "lower-norwegian": true,
     "oromo": true,
     "ethiopic-halehame-om-et": true,
     "sidama": true,
     "ethiopic-halehame-sid-et": true,
     "somali": true,
     "ethiopic-halehame-so-et": true,
     "tigre": true,
     "ethiopic-halehame-tig": true,
     "tigrinya-er-abegede": true,
     "ethiopic-abegede-ti-er": true,
     "tigrinya-et": true,
     "ethiopic-halehame-ti-et": true,
     "upper-greek": true,
     "asterisks": true,
     "footnotes": true,
     "circled-decimal": true,
     "circled-lower-latin": true,
     "circled-upper-latin": true,
     "dotted-decimal": true,
     "double-circled-decimal": true,
     "filled-circled-decimal": true,
     "parenthesised-decimal": true,
     "parenthesised-lower-latin": true
   },

   reportError: function(aMsg) {
     this.mError = aMsg;
   },

   consumeError: function() {
     var e = this.mError;
     this.mError = null;
     return e;
   },

   currentToken: function() {
     return this.mToken;
   },

   getHexValue: function() {
     this.mToken = this.mScanner.nextHexValue();
     return this.mToken;
   },

   getToken: function(aSkipWS, aSkipComment) {
     if (this.mLookAhead) {
       this.mToken = this.mLookAhead;
       this.mLookAhead = null;
       return this.mToken;
     }

     this.mToken = this.mScanner.nextToken();
     while (this.mToken &&
            ((aSkipWS && this.mToken.isWhiteSpace()) ||
             (aSkipComment && this.mToken.isComment())))
       this.mToken = this.mScanner.nextToken();
    return this.mToken;
   },

   lookAhead: function(aSkipWS, aSkipComment) {
     var preservedToken = this.mToken;
     this.mScanner.preserveState();
     var token = this.getToken(aSkipWS, aSkipComment);
     this.mScanner.restoreState();
     this.mToken = preservedToken;

     return token;
   },

   ungetToken: function() {
     this.mLookAhead = this.mToken;
   },

   addUnknownAtRule: function(aSheet, aString) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var blocks = [];
     var token = this.getToken(false, false);
     while (token.isNotNull()) {
       aString += token.value;
       if (token.isSymbol(";") && !blocks.length)
         break;
       else if (token.isSymbol("{")
                || token.isSymbol("(")
                || token.isSymbol("[")
                || token.type == "function") {
         blocks.push(token.isFunction() ? "(" : token.value);
       } else if (token.isSymbol("}")
                  || token.isSymbol(")")
                  || token.isSymbol("]")) {
         if (blocks.length) {
           var ontop = blocks[blocks.length - 1];
           if ((token.isSymbol("}") && ontop == "{")
               || (token.isSymbol(")") && ontop == "(")
               || (token.isSymbol("]") && ontop == "[")) {
             blocks.pop();
             if (!blocks.length && token.isSymbol("}"))
               break;
           }
         }
       }
       token = this.getToken(false, false);
     }

     this.addUnknownRule(aSheet, aString, currentLine);
   },

   addUnknownRule: function(aSheet, aString, aCurrentLine) {
     var errorMsg = this.consumeError();
     var rule = new jscsspErrorRule(errorMsg);
     rule.currentLine = aCurrentLine;
     rule.parsedCssText = aString;
     rule.parentStyleSheet = aSheet;
     aSheet.cssRules.push(rule);
   },

   addWhitespace: function(aSheet, aString) {
     var rule = new jscsspWhitespace();
     rule.parsedCssText = aString;
     rule.parentStyleSheet = aSheet;
     aSheet.cssRules.push(rule);
   },

   addComment: function(aSheet, aString) {
     var rule = new jscsspComment();
     rule.parsedCssText = aString;
     rule.parentStyleSheet = aSheet;
     aSheet.cssRules.push(rule);
   },

   parseCharsetRule: function(aToken, aSheet) {
     var s = aToken.value;
     var token = this.getToken(false, false);
     s += token.value;
     if (token.isWhiteSpace(" ")) {
       token = this.getToken(false, false);
       s += token.value;
       if (token.isString()) {
         var encoding = token.value;
         token = this.getToken(false, false);
         s += token.value;
         if (token.isSymbol(";")) {
           var rule = new jscsspCharsetRule();
           rule.encoding = encoding;
           rule.parsedCssText = s;
           rule.parentStyleSheet = aSheet;
           aSheet.cssRules.push(rule);
           return true;
         }
         else
           this.reportError(kCHARSET_RULE_MISSING_SEMICOLON);
       }
       else
         this.reportError(kCHARSET_RULE_CHARSET_IS_STRING);
     }
     else
       this.reportError(kCHARSET_RULE_MISSING_WS);

     this.addUnknownAtRule(aSheet, s);
     return false;
   },

   parseImportRule: function(aToken, aSheet) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var s = aToken.value;
     this.preserveState();
     var token = this.getToken(true, true);
     var media = [];
     var href = "";
     if (token.isString()) {
       href = token.value;
       s += " " + href;
     }
     else if (token.isFunction("url(")) {
       token = this.getToken(true, true);
       var urlContent = this.parseURL(token);
       if (urlContent) {
         href = "url(" + urlContent;
         s += " " + href;
       }
     }
     else
       this.reportError(kIMPORT_RULE_MISSING_URL);

     if (href) {
       token = this.getToken(true, true);
       while (token.isIdent()) {
         s += " " + token.value;
         media.push(token.value);
         token = this.getToken(true, true);
         if (!token)
           break;
         if (token.isSymbol(",")) {
           s += ",";
         } else if (token.isSymbol(";")) {
           break;
         } else
           break;
         token = this.getToken(true, true);
       }

       if (!media.length) {
         media.push("all");
       }

       if (token.isSymbol(";")) {
         s += ";"
         this.forgetState();
         var rule = new jscsspImportRule();
         rule.currentLine = currentLine;
         rule.parsedCssText = s;
         rule.href = href;
         rule.media = media;
         rule.parentStyleSheet = aSheet;
         aSheet.cssRules.push(rule);
         return true;
       }
     }

     this.restoreState();
     this.addUnknownAtRule(aSheet, "@import");
     return false;
   },

   parseVariablesRule: function(token, aSheet) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var s = token.value;
     var declarations = [];
     var valid = false;
     this.preserveState();
     token = this.getToken(true, true);
     var media = [];
     var foundMedia = false;
     while (token.isNotNull()) {
       if (token.isIdent()) {
         foundMedia = true;
         s += " " + token.value;
         media.push(token.value);
         token = this.getToken(true, true);
         if (token.isSymbol(",")) {
           s += ",";
         } else {
           if (token.isSymbol("{"))
             this.ungetToken();
           else {
             // error...
             token.type = jscsspToken.NULL_TYPE;
             break;
           }
         }
       } else if (token.isSymbol("{"))
         break;
       else if (foundMedia) {
         token.type = jscsspToken.NULL_TYPE;
         // not a media list
         break;
       }
       token = this.getToken(true, true);
     }

     if (token.isSymbol("{")) {
       s += " {";
       token = this.getToken(true, true);
       while (true) {
         if (!token.isNotNull()) {
           valid = true;
           break;
         }
         if (token.isSymbol("}")) {
           s += "}";
           valid = true;
           break;
         } else {
           var d = this.parseDeclaration(token, declarations, true, false, aSheet);
           s += ((d && declarations.length) ? " " : "") + d;
         }
         token = this.getToken(true, false);
       }
     }
     if (valid) {
       this.forgetState();
       var rule = new jscsspVariablesRule();
       rule.currentLine = currentLine;
       rule.parsedCssText = s;
       rule.declarations = declarations;
       rule.media = media;
       rule.parentStyleSheet = aSheet;
       aSheet.cssRules.push(rule)
       return true;
     }
     this.restoreState();
     return false;
   },

   parseNamespaceRule: function(aToken, aSheet) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var s = aToken.value;
     var valid = false;
     this.preserveState();
     var token = this.getToken(true, true);
     if (token.isNotNull()) {
       var prefix = "";
       var url = "";
       if (token.isIdent()) {
         prefix = token.value;
         s += " " + prefix;
         token = this.getToken(true, true);
       }
       if (token) {
         var foundURL = false;
         if (token.isString()) {
           foundURL = true;
           url = token.value;
           s += " " + url;
         } else if (token.isFunction("url(")) {
           // get a url here...
           token = this.getToken(true, true);
           var urlContent = this.parseURL(token);
           if (urlContent) {
             url += "url(" + urlContent;
             foundURL = true;
             s += " " + urlContent;
           }
         }
       }
       if (foundURL) {
         token = this.getToken(true, true);
         if (token.isSymbol(";")) {
           s += ";";
           this.forgetState();
           var rule = new jscsspNamespaceRule();
           rule.currentLine = currentLine;
           rule.parsedCssText = s;
           rule.prefix = prefix;
           rule.url = url;
           rule.parentStyleSheet = aSheet;
           aSheet.cssRules.push(rule);
           return true;
         }
       }

     }
     this.restoreState();
     this.addUnknownAtRule(aSheet, "@namespace");
     return false;
   },

   parseFontFaceRule: function(aToken, aSheet) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var s = aToken.value;
     var valid = false;
     var descriptors = [];
     this.preserveState();
     var token = this.getToken(true, true);
     if (token.isNotNull()) {
       // expecting block start
       if (token.isSymbol("{")) {
         s += " " + token.value;
         var token = this.getToken(true, false);
         while (true) {
           if (token.isSymbol("}")) {
             s += "}";
             valid = true;
             break;
           } else {
             var d = this.parseDeclaration(token, descriptors, false, false, aSheet);
             s += ((d && descriptors.length) ? " " : "") + d;
           }
           token = this.getToken(true, false);
         }
       }
     }
     if (valid) {
       this.forgetState();
       var rule = new jscsspFontFaceRule();
       rule.currentLine = currentLine;
       rule.parsedCssText = s;
       rule.descriptors = descriptors;
       rule.parentStyleSheet = aSheet;
       aSheet.cssRules.push(rule)
       return true;
     }
     this.restoreState();
     return false;
   },

   parsePageRule: function(aToken, aSheet) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var s = aToken.value;
     var valid = false;
     var declarations = [];
     this.preserveState();
     var token = this.getToken(true, true);
     var pageSelector = "";
     if (token.isSymbol(":") || token.isIdent()) {
       if (token.isSymbol(":")) {
         pageSelector = ":";
         token = this.getToken(false, false);
       }
       if (token.isIdent()) {
         pageSelector += token.value;
         s += " " + pageSelector;
         token = this.getToken(true, true);
       }
     }
     if (token.isNotNull()) {
       // expecting block start
       if (token.isSymbol("{")) {
         s += " " + token.value;
         var token = this.getToken(true, false);
         while (true) {
           if (token.isSymbol("}")) {
             s += "}";
             valid = true;
             break;
           } else {
             var d = this.parseDeclaration(token, declarations, true, true, aSheet);
             s += ((d && declarations.length) ? " " : "") + d;
           }
           token = this.getToken(true, false);
         }
       }
     }
     if (valid) {
       this.forgetState();
       var rule = new jscsspPageRule();
       rule.currentLine = currentLine;
       rule.parsedCssText = s;
       rule.pageSelector = pageSelector;
       rule.declarations = declarations;
       rule.parentStyleSheet = aSheet;
       aSheet.cssRules.push(rule)
       return true;
     }
     this.restoreState();
     return false;
   },

   parseDefaultPropertyValue: function(token, aDecl, aAcceptPriority, descriptor, aSheet) {
     var valueText = "";
     var blocks = [];
     var foundPriority = false;
     var values = [];
     while (token.isNotNull()) {

       if ((token.isSymbol(";")
            || token.isSymbol("}")
            || token.isSymbol("!"))
           && !blocks.length) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       if (token.isIdent(this.kINHERIT)) {
         if (values.length) {
           return "";
         }
         else {
           valueText = this.kINHERIT;
           var value = new jscsspVariable(kJscsspINHERIT_VALUE, aSheet);
           values.push(value);
           token = this.getToken(true, true);
           break;
         }
       }
       else if (token.isSymbol("{")
                  || token.isSymbol("(")
                  || token.isSymbol("[")) {
         blocks.push(token.value);
       }
       else if (token.isSymbol("}")
                  || token.isSymbol("]")) {
         if (blocks.length) {
           var ontop = blocks[blocks.length - 1];
           if ((token.isSymbol("}") && ontop == "{")
               || (token.isSymbol(")") && ontop == "(")
               || (token.isSymbol("]") && ontop == "[")) {
             blocks.pop();
           }
         }
       }
       // XXX must find a better way to store individual values
       // probably a |values: []| field holding dimensions, percentages
       // functions, idents, numbers and symbols, in that order.
       if (token.isFunction()) {
         if (token.isFunction("var(")) {
           token = this.getToken(true, true);
           if (token.isIdent()) {
             var name = token.value;
             token = this.getToken(true, true);
             if (token.isSymbol(")")) {
               var value = new jscsspVariable(kJscsspVARIABLE_VALUE, aSheet);
               valueText += "var(" + name + ")";
               value.name = name;
               values.push(value);
             }
             else
               return "";
           }
           else
             return "";
         }
         else {
           var fn = token.value;
           token = this.getToken(false, true);
           var arg = this.parseFunctionArgument(token);
           if (arg) {
             valueText += fn + arg;
             var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, aSheet);
             value.value = fn + arg;
             values.push(value);
           }
           else
             return "";
         }
       }
       else if (token.isSymbol("#")) {
         var color = this.parseColor(token);
         if (color) {
           valueText += color;
           var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, aSheet);
           value.value = color;
           values.push(value);
         }
         else
           return "";
       }
       else if (!token.isWhiteSpace() && !token.isSymbol(",")) {
         var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, aSheet);
         value.value = token.value;
         values.push(value);
         valueText += token.value;
       }
       else
         valueText += token.value;
       token = this.getToken(false, true);
     }
     if (values.length && valueText) {
       this.forgetState();
       aDecl.push(this._createJscsspDeclarationFromValuesArray(descriptor, values, valueText));
       return valueText;
     }
     return "";
   },

   parseMarginOrPaddingShorthand: function(token, aDecl, aAcceptPriority, aProperty)
   {
     var top = null;
     var bottom = null;
     var left = null;
     var right = null;

     var values = [];
     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!values.length && token.isIdent(this.kINHERIT)) {
         values.push(token.value);
         token = this.getToken(true, true);
         break;
       }

       else if (token.isDimension()
               || token.isNumber("0")
               || token.isPercentage()
               || token.isIdent("auto")) {
         values.push(token.value);
       }
       else
         return "";

       token = this.getToken(true, true);
     }

     var count = values.length;
     switch (count) {
       case 1:
         top = values[0];
         bottom = top;
         left = top;
         right = top;
         break;
       case 2:
         top = values[0];
         bottom = top;
         left = values[1];
         right = left;
         break;
       case 3:
         top = values[0];
         left = values[1];
         right = left;
         bottom = values[2];
         break;
       case 4:
         top = values[0];
         right = values[1];
         bottom = values[2];
         left = values[3];
         break;
       default:
         return "";
     }
     this.forgetState();
     aDecl.push(this._createJscsspDeclarationFromValue(aProperty + "-top", top));
     aDecl.push(this._createJscsspDeclarationFromValue(aProperty + "-right", right));
     aDecl.push(this._createJscsspDeclarationFromValue(aProperty + "-bottom", bottom));
     aDecl.push(this._createJscsspDeclarationFromValue(aProperty + "-left", left));
    return top + " " + right + " " + bottom + " " + left;
   },

   parseBorderColorShorthand: function(token, aDecl, aAcceptPriority)
   {
     var top = null;
     var bottom = null;
     var left = null;
     var right = null;

     var values = [];
     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!values.length && token.isIdent(this.kINHERIT)) {
         values.push(token.value);
         token = this.getToken(true, true);
         break;
       }

       else {
         var color = this.parseColor(token);
         if (color)
           values.push(color);
         else
           return "";
       }

       token = this.getToken(true, true);
     }

     var count = values.length;
     switch (count) {
       case 1:
         top = values[0];
         bottom = top;
         left = top;
         right = top;
         break;
       case 2:
         top = values[0];
         bottom = top;
         left = values[1];
         right = left;
         break;
       case 3:
         top = values[0];
         left = values[1];
         right = left;
         bottom = values[2];
         break;
       case 4:
         top = values[0];
         right = values[1];
         bottom = values[2];
         left = values[3];
         break;
       default:
         return "";
     }
     this.forgetState();
     aDecl.push(this._createJscsspDeclarationFromValue("border-top-color", top));
     aDecl.push(this._createJscsspDeclarationFromValue("border-right-color", right));
     aDecl.push(this._createJscsspDeclarationFromValue("border-bottom-color", bottom));
     aDecl.push(this._createJscsspDeclarationFromValue("border-left-color", left));
     return top + " " + right + " " + bottom + " " + left;
   },

   parseCueShorthand: function(token, declarations, aAcceptPriority)
   {
     var before = "";
     var after = "";

     var values = [];
     var values = [];
     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!values.length && token.isIdent(this.kINHERIT)) {
         values.push(token.value);
       }

       else if (token.isIdent("none"))
         values.push(token.value);

         else if (token.isFunction("url(")) {
         var token = this.getToken(true, true);
         var urlContent = this.parseURL(token);
         if (urlContent)
           values.push("url(" + urlContent);
         else
           return "";
       }
       else
         return "";

       token = this.getToken(true, true);
     }

     var count = values.length;
     switch (count) {
       case 1:
         before = values[0];
         after = before;
         break;
       case 2:
         before = values[0];
         after = values[1];
         break;
       default:
         return "";
     }
     this.forgetState();
     aDecl.push(this._createJscsspDeclarationFromValue("cue-before", before));
     aDecl.push(this._createJscsspDeclarationFromValue("cue-after", after));
     return before + " " + after;
   },

   parsePauseShorthand: function(token, declarations, aAcceptPriority)
   {
     var before = "";
     var after = "";

     var values = [];
     var values = [];
     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!values.length && token.isIdent(this.kINHERIT)) {
         values.push(token.value);
       }

       else if (token.isDimensionOfUnit("ms")
                || token.isDimensionOfUnit("s")
                || token.isPercentage()
                || token.isNumber("0"))
         values.push(token.value);
       else
         return "";

       token = this.getToken(true, true);
     }

     var count = values.length;
     switch (count) {
       case 1:
         before = values[0];
         after = before;
         break;
       case 2:
         before = values[0];
         after = values[1];
         break;
       default:
         return "";
     }
     this.forgetState();
     aDecl.push(this._createJscsspDeclarationFromValue("pause-before", before));
     aDecl.push(this._createJscsspDeclarationFromValue("pause-after", after));
     return before + " " + after;
   },

   parseBorderWidthShorthand: function(token, aDecl, aAcceptPriority)
   {
     var top = null;
     var bottom = null;
     var left = null;
     var right = null;

     var values = [];
     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!values.length && token.isIdent(this.kINHERIT)) {
         values.push(token.value);
       }

       else if (token.isDimension()
                || token.isNumber("0")
                || (token.isIdent() && token.value in this.kBORDER_WIDTH_NAMES)) {
         values.push(token.value);
       }
       else
         return "";

       token = this.getToken(true, true);
     }

     var count = values.length;
     switch (count) {
       case 1:
         top = values[0];
         bottom = top;
         left = top;
         right = top;
         break;
       case 2:
         top = values[0];
         bottom = top;
         left = values[1];
         right = left;
         break;
       case 3:
         top = values[0];
         left = values[1];
         right = left;
         bottom = values[2];
         break;
       case 4:
         top = values[0];
         right = values[1];
         bottom = values[2];
         left = values[3];
         break;
       default:
         return "";
     }
     this.forgetState();
     aDecl.push(this._createJscsspDeclarationFromValue("border-top-width", top));
     aDecl.push(this._createJscsspDeclarationFromValue("border-right-width", right));
     aDecl.push(this._createJscsspDeclarationFromValue("border-bottom-width", bottom));
     aDecl.push(this._createJscsspDeclarationFromValue("border-left-width", left));
     return top + " " + right + " " + bottom + " " + left;
   },

   parseBorderStyleShorthand: function(token, aDecl, aAcceptPriority)
   {
     var top = null;
     var bottom = null;
     var left = null;
     var right = null;

     var values = [];
     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!values.length && token.isIdent(this.kINHERIT)) {
         values.push(token.value);
       }

       else if (token.isIdent() && token.value in this.kBORDER_STYLE_NAMES) {
         values.push(token.value);
       }
       else
         return "";

       token = this.getToken(true, true);
     }

     var count = values.length;
     switch (count) {
       case 1:
         top = values[0];
         bottom = top;
         left = top;
         right = top;
         break;
       case 2:
         top = values[0];
         bottom = top;
         left = values[1];
         right = left;
         break;
       case 3:
         top = values[0];
         left = values[1];
         right = left;
         bottom = values[2];
         break;
       case 4:
         top = values[0];
         right = values[1];
         bottom = values[2];
         left = values[3];
         break;
       default:
         return "";
     }
     this.forgetState();
     aDecl.push(this._createJscsspDeclarationFromValue("border-top-style", top));
     aDecl.push(this._createJscsspDeclarationFromValue("border-right-style", right));
     aDecl.push(this._createJscsspDeclarationFromValue("border-bottom-style", bottom));
     aDecl.push(this._createJscsspDeclarationFromValue("border-left-style", left));
     return top + " " + right + " " + bottom + " " + left;
   },

   parseBorderEdgeOrOutlineShorthand: function(token, aDecl, aAcceptPriority, aProperty)
   {
     var bWidth = null;
     var bStyle = null;
     var bColor = null;

     while (true) {
       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!bWidth && !bStyle && !bColor
                && token.isIdent(this.kINHERIT)) {
         bWidth = this.kINHERIT;
         bStyle = this.kINHERIT;
         bColor = this.kINHERIT;
       }

       else if (!bWidth &&
                (token.isDimension()
                 || (token.isIdent() && token.value in this.kBORDER_WIDTH_NAMES)
                 || token.isNumber("0"))) {
         bWidth = token.value;
       }

       else if (!bStyle &&
                (token.isIdent() && token.value in this.kBORDER_STYLE_NAMES)) {
         bStyle = token.value;
       }

       else {
         var color = (aProperty == "outline" && token.isIdent("invert"))
                     ? "invert" : this.parseColor(token);
         if (!bColor && color)
           bColor = color;
         else
           return "";
       }
       token = this.getToken(true, true);
     }

     // create the declarations
     this.forgetState();
     bWidth = bWidth ? bWidth : "medium";
     bStyle = bStyle ? bStyle : "none";
     bColor = bColor ? bColor : "-moz-initial";

     function addPropertyToDecl(aSelf, aDecl, property, w, s, c) {
       aDecl.push(aSelf._createJscsspDeclarationFromValue(property + "-width", w));
       aDecl.push(aSelf._createJscsspDeclarationFromValue(property + "-style", s));
       aDecl.push(aSelf._createJscsspDeclarationFromValue(property + "-color", c));
     }

     if (aProperty == "border") {
       addPropertyToDecl(this, aDecl, "border-top", bWidth, bStyle, bColor);
       addPropertyToDecl(this, aDecl, "border-right", bWidth, bStyle, bColor);
       addPropertyToDecl(this, aDecl, "border-bottom", bWidth, bStyle, bColor);
       addPropertyToDecl(this, aDecl, "border-left", bWidth, bStyle, bColor);
     }
     else
       addPropertyToDecl(this, aDecl, aProperty, bWidth, bStyle, bColor);
     return bWidth + " " + bStyle + " " + bColor;
   },

   parseBackgroundShorthand: function(token, aDecl, aAcceptPriority)
   {
     var kHPos = {"left": true, "right": true };

     var kVPos = {"top": true, "bottom": true };
     var kPos = {"left": true, "right": true, "top": true, "bottom": true, "center": true};

     var bgColor = null;
     var bgRepeat = null;
     var bgAttachment = null;
     var bgImage = null;
     var bgPosition = null;

     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!bgColor && !bgRepeat && !bgAttachment && !bgImage && !bgPosition
                && token.isIdent(this.kINHERIT)) {
         bgColor = this.kINHERIT;
         bgRepeat = this.kINHERIT;
         bgAttachment = this.kINHERIT;
         bgImage = this.kINHERIT;
         bgPosition = this.kINHERIT;
       }

       else {
         if (!bgAttachment &&
             (token.isIdent("scroll")
              || token.isIdent("fixed"))) {
           bgAttachment = token.value;
         }

         else if (!bgPosition &&
                  ((token.isIdent() && token.value in kPos)
                   || token.isDimension()
                   || token.isNumber("0")
                   || token.isPercentage())) {
           bgPosition = token.value;
           token = this.getToken(true, true);
           if (token.isDimension() || token.isNumber("0") || token.isPercentage()) {
             bgPosition += " " + token.value;
           }
           else if (token.isIdent() && token.value in kPos) {
             if ((bgPosition in kHPos && token.value in kHPos) ||
                 (bgPosition in kVPos && token.value in kVPos))
               return "";
             bgPosition += " " + token.value;
           }
           else {
             this.ungetToken();
             bgPosition += " center";
           }
         }

         else if (!bgRepeat &&
                  (token.isIdent("repeat")
                   || token.isIdent("repeat-x")
                   || token.isIdent("repeat-y")
                   || token.isIdent("no-repeat"))) {
           bgRepeat = token.value;
         }

         else if (!bgImage &&
                  (token.isFunction("url(")
                   || token.isIdent("none"))) {
           bgImage = token.value;
           if (token.isFunction("url(")) {
             token = this.getToken(true, true);
             var url = this.parseURL(token); // TODO
             if (url)
               bgImage += url;
             else
               return "";
           }
         }

         else if (!bgImage &&
                  (token.isFunction("-moz-linear-gradient(")
                   || token.isFunction("-moz-radial-gradient(")
                   || token.isFunction("-moz-repeating-linear-gradient(")
                   || token.isFunction("-moz-repeating-radial-gradient("))) {
           var gradient = CssInspector.parseGradient(this, token);
           if (gradient)
             bgImage = CssInspector.serializeGradient(gradient);
           else
             return "";
         }

         else {
           var color = this.parseColor(token);
           if (!bgColor && color)
             bgColor = color;
           else
             return "";
         }

       }

       token = this.getToken(true, true);
     }

     // create the declarations
     this.forgetState();
     bgColor = bgColor ? bgColor : "transparent";
     bgImage = bgImage ? bgImage : "none";
     bgRepeat = bgRepeat ? bgRepeat : "repeat";
     bgAttachment = bgAttachment ? bgAttachment : "scroll";
     bgPosition = bgPosition ? bgPosition : "top left";

     aDecl.push(this._createJscsspDeclarationFromValue("background-color", bgColor));
     aDecl.push(this._createJscsspDeclarationFromValue("background-image", bgImage));
     aDecl.push(this._createJscsspDeclarationFromValue("background-repeat", bgRepeat));
     aDecl.push(this._createJscsspDeclarationFromValue("background-attachment", bgAttachment));
     aDecl.push(this._createJscsspDeclarationFromValue("background-position", bgPosition));
     return bgColor + " " + bgImage + " " + bgRepeat + " " + bgAttachment + " " + bgPosition;
   },

   parseListStyleShorthand: function(token, aDecl, aAcceptPriority)
   {
     var kPosition = { "inside": true, "outside": true };

     var lType = null;
     var lPosition = null;
     var lImage = null;

     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!lType && !lPosition && ! lImage
                && token.isIdent(this.kINHERIT)) {
         lType = this.kINHERIT;
         lPosition = this.kINHERIT;
         lImage = this.kINHERIT;
       }

       else if (!lType &&
                (token.isIdent() && token.value in this.kLIST_STYLE_TYPE_NAMES)) {
         lType = token.value;
       }

       else if (!lPosition &&
                (token.isIdent() && token.value in kPosition)) {
         lPosition = token.value;
       }

       else if (!lImage && token.isFunction("url")) {
         token = this.getToken(true, true);
         var urlContent = this.parseURL(token);
         if (urlContent) {
           lImage = "url(" + urlContent;
         }
         else
           return "";
       }
       else if (!token.isIdent("none"))
         return "";

       token = this.getToken(true, true);
     }

     // create the declarations
     this.forgetState();
     lType = lType ? lType : "none";
     lImage = lImage ? lImage : "none";
     lPosition = lPosition ? lPosition : "outside";

     aDecl.push(this._createJscsspDeclarationFromValue("list-style-type", lType));
     aDecl.push(this._createJscsspDeclarationFromValue("list-style-position", lPosition));
     aDecl.push(this._createJscsspDeclarationFromValue("list-style-image", lImage));
     return lType + " " + lPosition + " " + lImage;
   },

   parseFontShorthand: function(token, aDecl, aAcceptPriority)
   {
     var kStyle = {"italic": true, "oblique": true };
     var kVariant = {"small-caps": true };
     var kWeight = { "bold": true, "bolder": true, "lighter": true,
                       "100": true, "200": true, "300": true, "400": true,
                       "500": true, "600": true, "700": true, "800": true,
                       "900": true };
     var kSize = { "xx-small": true, "x-small": true, "small": true, "medium": true,
                     "large": true, "x-large": true, "xx-large": true,
                     "larger": true, "smaller": true };
     var kValues = { "caption": true, "icon": true, "menu": true, "message-box": true, "small-caption": true, "status-bar": true };
     var kFamily = { "serif": true, "sans-serif": true, "cursive": true, "fantasy": true, "monospace": true };

     var fStyle = null;
     var fVariant = null;
     var fWeight = null;
     var fSize = null;
     var fLineHeight = null;
     var fFamily = "";
     var fSystem = null;
     var fFamilyValues = [];

     var normalCount = 0;
     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!fStyle && !fVariant && !fWeight
                && !fSize && !fLineHeight && !fFamily
                && !fSystem
                && token.isIdent(this.kINHERIT)) {
         fStyle = this.kINHERIT;
         fVariant = this.kINHERIT;
         fWeight = this.kINHERIT;
         fSize = this.kINHERIT;
         fLineHeight = this.kINHERIT;
         fFamily = this.kINHERIT;
         fSystem = this.kINHERIT;
       }

       else {
         if (!fSystem && (token.isIdent() && token.value in kValues)) {
           fSystem = token.value;
           break;
         }

         else {
           if (!fStyle
                    && token.isIdent()
                    && (token.value in kStyle)) {
             fStyle = token.value;
           }

           else if (!fVariant
                    && token.isIdent()
                    && (token.value in kVariant)) {
             fVariant = token.value;
           }

           else if (!fWeight
                    && (token.isIdent() || token.isNumber())
                    && (token.value in kWeight)) {
             fWeight = token.value;
           }

           else if (!fSize
                    && ((token.isIdent() && (token.value in kSize))
                        || token.isDimension()
                        || token.isPercentage())) {
             fSize = token.value;
             var token = this.getToken(false, false);
             if (token.isSymbol("/")) {
               token = this.getToken(false, false);
               if (!fLineHeight &&
                   (token.isDimension() || token.isNumber() || token.isPercentage())) {
                 fLineHeight = token.value;
               }
               else
                 return "";
             }
             else
               this.ungetToken();
           }

           else if (token.isIdent("normal")) {
             normalCount++;
             if (normalCount > 3)
               return "";
           }

           else if (!fFamily && // *MUST* be last to be tested here
                    (token.isString()
                     || token.isIdent())) {
             var lastWasComma = false;
             while (true) {
               if (!token.isNotNull())
                 break;
               else if (token.isSymbol(";")
                   || (aAcceptPriority && token.isSymbol("!"))
                   || token.isSymbol("}")) {
                 this.ungetToken();
                 break;
               }
               else if (token.isIdent() && token.value in kFamily) {
                 var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, null);
                 value.value = token.value;
                 fFamilyValues.push(value);
                 fFamily += token.value;
                 break;
               }
               else if (token.isString() || token.isIdent()) {
                 var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, null);
                 value.value = token.value;
                 fFamilyValues.push(value);
                 fFamily += token.value;
                 lastWasComma = false;
               }
               else if (!lastWasComma && token.isSymbol(",")) {
                 fFamily += ", ";
                 lastWasComma = true;
               }
               else
                 return "";
               token = this.getToken(true, true);
             }
           }

           else {
             return "";
           }
         }

       }

       token = this.getToken(true, true);
     }

     // create the declarations
     this.forgetState();
     if (fSystem) {
       aDecl.push(this._createJscsspDeclarationFromValue("font", fSystem));
       return fSystem;
     }
     fStyle = fStyle ? fStyle : "normal";
     fVariant = fVariant ? fVariant : "normal";
     fWeight = fWeight ? fWeight : "normal";
     fSize = fSize ? fSize : "medium";
     fLineHeight = fLineHeight ? fLineHeight : "normal";
     fFamily = fFamily ? fFamily : "-moz-initial";

     aDecl.push(this._createJscsspDeclarationFromValue("font-style", fStyle));
     aDecl.push(this._createJscsspDeclarationFromValue("font-variant", fVariant));
     aDecl.push(this._createJscsspDeclarationFromValue("font-weight", fWeight));
     aDecl.push(this._createJscsspDeclarationFromValue("font-size", fSize));
     aDecl.push(this._createJscsspDeclarationFromValue("line-height", fLineHeight));
     aDecl.push(this._createJscsspDeclarationFromValuesArray("font-family", fFamilyValues, fFamily));
     return fStyle + " " + fVariant + " " + fWeight + " " + fSize + "/" + fLineHeight + " " + fFamily;
   },

   _createJscsspDeclaration: function(property, value)
   {
     var decl = new jscsspDeclaration();
     decl.property = property;
     decl.value = this.trim11(value);
     decl.parsedCssText = property + ": " + value + ";";
     return decl;
   },

   _createJscsspDeclarationFromValue: function(property, valueText)
   {
     var decl = new jscsspDeclaration();
     decl.property = property;
     var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, null);
     value.value = valueText;
     decl.values = [value];
     decl.valueText = valueText;
     decl.parsedCssText = property + ": " + valueText + ";";
     return decl;
   },

   _createJscsspDeclarationFromValuesArray: function(property, values, valueText)
   {
     var decl = new jscsspDeclaration();
     decl.property = property;
     decl.values = values;
     decl.valueText = valueText;
     decl.parsedCssText = property + ": " + valueText + ";";
     return decl;
   },

   parseURL: function(token)
   {
     var value = "";
     if (token.isString())
     {
       value += token.value;
       token = this.getToken(true, true);
     }
     else
       while (true)
       {
         if (!token.isNotNull()) {
           this.reportError(kURL_EOF);
           return "";
         }
         if (token.isWhiteSpace()) {
           nextToken = this.lookAhead(true, true);
           // if next token is not a closing parenthesis, that's an error
           if (!nextToken.isSymbol(")")) {
             this.reportError(kURL_WS_INSIDE);
             token = this.currentToken();
             break;
           }
         }
         if (token.isSymbol(")")) {
           break;
         }
         value += token.value;
         token = this.getToken(false, false);
       }

     if (token.isSymbol(")")) {
       return value + ")";
     }
     return "";
   },

   parseFunctionArgument: function(token)
   {
     var value = "";
     if (token.isString())
     {
       value += token.value;
       token = this.getToken(true, true);
     }
     else {
       var parenthesis = 1;
       while (true)
       {
         if (!token.isNotNull())
           return "";
         if (token.isFunction() || token.isSymbol("("))
           parenthesis++;
         if (token.isSymbol(")")) {
           parenthesis--;
           if (!parenthesis)
             break;
         }
         value += token.value;
         token = this.getToken(false, false);
       }
     }

     if (token.isSymbol(")"))
       return value + ")";
     return "";
   },

   parseColor: function(token)
   {
     var color = "";
     if (token.isFunction("rgb(")
         || token.isFunction("rgba(")) {
       color = token.value;
       var isRgba = token.isFunction("rgba(")
       token = this.getToken(true, true);
       if (!token.isNumber() && !token.isPercentage())
         return "";
       color += token.value;
       token = this.getToken(true, true);
       if (!token.isSymbol(","))
         return "";
       color += ", ";

       token = this.getToken(true, true);
       if (!token.isNumber() && !token.isPercentage())
         return "";
       color += token.value;
       token = this.getToken(true, true);
       if (!token.isSymbol(","))
         return "";
       color += ", ";

       token = this.getToken(true, true);
       if (!token.isNumber() && !token.isPercentage())
         return "";
       color += token.value;

       if (isRgba) {
         token = this.getToken(true, true);
         if (!token.isSymbol(","))
           return "";
         color += ", ";

         token = this.getToken(true, true);
         if (!token.isNumber())
           return "";
         color += token.value;
       }

       token = this.getToken(true, true);
       if (!token.isSymbol(")"))
         return "";
       color += token.value;
     }

     else if (token.isFunction("hsl(")
              || token.isFunction("hsla(")) {
       color = token.value;
       var isHsla = token.isFunction("hsla(")
       token = this.getToken(true, true);
       if (!token.isNumber())
         return "";
       color += token.value;
       token = this.getToken(true, true);
       if (!token.isSymbol(","))
         return "";
       color += ", ";

       token = this.getToken(true, true);
       if (!token.isPercentage())
         return "";
       color += token.value;
       token = this.getToken(true, true);
       if (!token.isSymbol(","))
         return "";
       color += ", ";

       token = this.getToken(true, true);
       if (!token.isPercentage())
         return "";
       color += token.value;

       if (isHsla) {
         token = this.getToken(true, true);
         if (!token.isSymbol(","))
           return "";
         color += ", ";

         token = this.getToken(true, true);
         if (!token.isNumber())
           return "";
         color += token.value;
       }

       token = this.getToken(true, true);
       if (!token.isSymbol(")"))
         return "";
       color += token.value;
     }

     else if (token.isIdent()
              && (token.value in this.kCOLOR_NAMES))
       color = token.value;

     else if (token.isSymbol("#")) {
       token = this.getHexValue();
       if (!token.isHex())
         return "";
       var length = token.value.length;
       if (length != 3 && length != 6)
         return "";
       if (token.value.match( /[a-fA-F0-9]/g ).length != length)
         return "";
       color = "#" + token.value;
     }
     return color;
   },

   parseDeclaration: function(aToken, aDecl, aAcceptPriority, aExpandShorthands, aSheet) {
     this.preserveState();
     var blocks = [];
     if (aToken.isIdent()) {
       var descriptor = aToken.value.toLowerCase();
       var token = this.getToken(true, true);
       if (token.isSymbol(":")) {
         var token = this.getToken(true, true);

         var value = "";
         var declarations = [];
         if (aExpandShorthands)
           switch (descriptor) {
             case "background":
               value = this.parseBackgroundShorthand(token, declarations, aAcceptPriority);
               break;
             case "margin":
             case "padding":
               value = this.parseMarginOrPaddingShorthand(token, declarations, aAcceptPriority, descriptor);
               break;
             case "border-color":
               value = this.parseBorderColorShorthand(token, declarations, aAcceptPriority);
               break;
             case "border-style":
               value = this.parseBorderStyleShorthand(token, declarations, aAcceptPriority);
               break;
             case "border-width":
               value = this.parseBorderWidthShorthand(token, declarations, aAcceptPriority);
               break;
             case "border-top":
             case "border-right":
             case "border-bottom":
             case "border-left":
             case "border":
             case "outline":
               value = this.parseBorderEdgeOrOutlineShorthand(token, declarations, aAcceptPriority, descriptor);
               break;
             case "cue":
               value = this.parseCueShorthand(token, declarations, aAcceptPriority);
               break;
             case "pause":
               value = this.parsePauseShorthand(token, declarations, aAcceptPriority);
               break;
             case "font":
               value = this.parseFontShorthand(token, declarations, aAcceptPriority);
               break;
             case "list-style":
               value = this.parseListStyleShorthand(token, declarations, aAcceptPriority);
               break;
             default:
               value = this.parseDefaultPropertyValue(token, declarations, aAcceptPriority, descriptor, aSheet);
               break;
           }
         else
           value = this.parseDefaultPropertyValue(token, declarations, aAcceptPriority, descriptor, aSheet);
         token = this.currentToken();
         if (value) // no error above
         {
           var priority = false;
           if (token.isSymbol("!")) {
             token = this.getToken(true, true);
             if (token.isIdent("important")) {
               priority = true;
               token = this.getToken(true, true);
               if (token.isSymbol(";") || token.isSymbol("}")) {
                 if (token.isSymbol("}"))
                   this.ungetToken();
               }
               else return "";
             }
             else return "";
           }
           else if  (token.isNotNull() && !token.isSymbol(";") && !token.isSymbol("}"))
             return "";
           for (var i = 0; i < declarations.length; i++) {
             declarations[i].priority = priority;
             aDecl.push(declarations[i]);
           }
           return descriptor + ": " + value + ";";
         }
       }
     }
     else if (aToken.isComment()) {
       if (this.mPreserveComments) {
         this.forgetState();
         var comment = new jscsspComment();
         comment.parsedCssText = aToken.value;
         aDecl.push(comment);
       }
       return aToken.value;
     }

     // we have an error here, let's skip it
     this.restoreState();
     var s = aToken.value;
     blocks = [];
     var token = this.getToken(false, false);
     while (token.isNotNull()) {
       s += token.value;
       if ((token.isSymbol(";") || token.isSymbol("}")) && !blocks.length) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       } else if (token.isSymbol("{")
                  || token.isSymbol("(")
                  || token.isSymbol("[")
                  || token.isFunction()) {
         blocks.push(token.isFunction() ? "(" : token.value);
       } else if (token.isSymbol("}")
                  || token.isSymbol(")")
                  || token.isSymbol("]")) {
         if (blocks.length) {
           var ontop = blocks[blocks.length - 1];
           if ((token.isSymbol("}") && ontop == "{")
               || (token.isSymbol(")") && ontop == "(")
               || (token.isSymbol("]") && ontop == "[")) {
             blocks.pop();
           }
         }
       }
       token = this.getToken(false, false);
     }
     return "";
   },

   parseKeyframesRule: function(aToken, aSheet) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var s = aToken.value;
     var valid = false;
     var keyframesRule = new jscsspKeyframesRule();
     keyframesRule.currentLine = currentLine;
     this.preserveState();
     var token = this.getToken(true, true);
     var foundName = false;
     while (token.isNotNull()) {
       if (token.isIdent()) {
         // should be the keyframes' name
         foundName = true;
         s += " " + token.value;
         keyframesRule.name = token.value;
         token = this.getToken(true, true);
         if (token.isSymbol("{"))
           this.ungetToken();
         else {
           // error...
           token.type = jscsspToken.NULL_TYPE;
           break;
         }
       }
       else if (token.isSymbol("{")) {
         if (!foundName) {
           token.type = jscsspToken.NULL_TYPE;
           // not a valid keyframes at-rule
         }
         break;
       }
       else {
         token.type = jscsspToken.NULL_TYPE;
         // not a valid keyframes at-rule
         break;
       }
       token = this.getToken(true, true);
     }

     if (token.isSymbol("{") && keyframesRule.name) {
       // ok let's parse keyframe rules now...
       s += " { ";
       token = this.getToken(true, false);
       while (token.isNotNull()) {
         if (token.isComment() && this.mPreserveComments) {
           s += " " + token.value;
           var comment = new jscsspComment();
           comment.parsedCssText = token.value;
           keyframesRule.cssRules.push(comment);
         } else if (token.isSymbol("}")) {
           valid = true;
           break;
         } else {
           var r = this.parseKeyframeRule(token, keyframesRule, true);
           if (r)
             s += r;
         }
         token = this.getToken(true, false);
       }
     }
     if (valid) {
       this.forgetState();
       keyframesRule.currentLine = currentLine;
       keyframesRule.parsedCssText = s;
       aSheet.cssRules.push(keyframesRule);
       return true;
     }
     this.restoreState();
     return false;
   },

   parseKeyframeRule: function(aToken, aOwner) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     this.preserveState();
     var token = aToken;

     // find the keyframe keys
     var key = "";
     while (token.isNotNull()) {
       if (token.isIdent() || token.isPercentage()) {
         if (token.isIdent()
             && !token.isIdent("from")
             && !token.isIdent("to")) {
           key = "";
           break;
         }
         key += token.value;
         token = this.getToken(true, true);
         if (token.isSymbol("{")) {
           this.ungetToken();
           break;
         }
         else
           if (token.isSymbol(",")) {
             key += ", ";
           }
           else {
             key = "";
             break;
           }
       }
       else {
         key = "";
         break;
       }
       token = this.getToken(true, true);
     }

     var valid = false;
     var declarations = [];
     if (key) {
       var s = key;
       token = this.getToken(true, true);
       if (token.isSymbol("{")) {
         s += " { ";
         token = this.getToken(true, false);
         while (true) {
           if (!token.isNotNull()) {
             valid = true;
             break;
           }
           if (token.isSymbol("}")) {
             s += "}";
             valid = true;
             break;
           } else {
             var d = this.parseDeclaration(token, declarations, true, true, aOwner);
             s += ((d && declarations.length) ? " " : "") + d;
           }
           token = this.getToken(true, false);
         }
       }
     }
     else {
       // key is invalid so the whole rule is invalid with it
     }

     if (valid) {
       var rule = new jscsspKeyframeRule();
       rule.currentLine = currentLine;
       rule.parsedCssText = s;
       rule.declarations = declarations;
       rule.keyText = key;
       rule.parentRule = aOwner;
       aOwner.cssRules.push(rule);
       return s;
     }
     this.restoreState();
     s = this.currentToken().value;
     this.addUnknownAtRule(aOwner, s);
     return "";
   },

   parseMediaRule: function(aToken, aSheet) {
    this.mScanner.mMediaQueryMode = true;
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var s = aToken.value;
     var valid = false;
     var mediaRule = new jscsspMediaRule();
     mediaRule.currentLine = currentLine;
     this.preserveState();
     var token = this.getToken(true, true);
     var foundMedia = false;
     while (token.isNotNull()) {
       if (token.isIdent()) {
         foundMedia = true;
         s += " " + token.value;
        mediaRule.media.push(token.value);
         token = this.getToken(true, true);
         if (token.isSymbol(",")) {
           s += ",";
         } else {
           if (token.isSymbol("{"))
             this.ungetToken();
           else {
             // error...
             token.type = jscsspToken.NULL_TYPE;
             break;
           }
         }
       }
       else if (token.isSymbol("{"))
         break;
       else if (foundMedia) {
         token.type = jscsspToken.NULL_TYPE;
         // not a media list
         break;
       }
       token = this.getToken(true, true);
     }
     if (token.isSymbol("{") && mediaRule.media.length) {
       // ok let's parse style rules now...
       s += " { ";
       token = this.getToken(true, false);
       while (token.isNotNull()) {
         if (token.isComment() && this.mPreserveComments) {
           s += " " + token.value;
           var comment = new jscsspComment();
           comment.parsedCssText = token.value;
           mediaRule.cssRules.push(comment);
         } else if (token.isSymbol("}")) {
           valid = true;
           break;
         } else {
           var r = this.parseStyleRule(token, mediaRule, true);
           if (r)
             s += r;
         }
         token = this.getToken(true, false);
       }
     }
    if (valid) {
       this.forgetState();
       mediaRule.parsedCssText = s;
       aSheet.cssRules.push(mediaRule);
       return true;
     }
     this.restoreState();
     return false;
   },


   trim11: function(str) {
     str = str.replace(/^\s+/, '');
     for (var i = str.length - 1; i >= 0; i--) {
       if (/\S/.test( str.charAt(i) )) { // XXX charat
         str = str.substring(0, i + 1);
         break;
       }
     }
     return str;
   },

   parseStyleRule: function(aToken, aOwner, aIsInsideMediaRule)
   {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     this.preserveState();
     // first let's see if we have a selector here...
     var selector = this.parseSelector(aToken, false);
     var valid = false;
     var declarations = [];
     if (selector) {
       selector = this.trim11(selector.selector);
       var s = selector;
       var token = this.getToken(true, true);
       if (token.isSymbol("{")) {
         s += " { ";
         var token = this.getToken(true, false);
         while (true) {
           if (!token.isNotNull()) {
             valid = true;
             break;
           }
           if (token.isSymbol("}")) {
             s += "}";
             valid = true;
             break;
           } else {
             var d = this.parseDeclaration(token, declarations, true, true, aOwner);
             s += ((d && declarations.length) ? " " : "") + d;
           }
           token = this.getToken(true, false);
         }
       }
     }
     else {
       // selector is invalid so the whole rule is invalid with it
     }

     if (valid) {
       var rule = new jscsspStyleRule();
       rule.currentLine = currentLine;
       rule.parsedCssText = s;
       rule.declarations = declarations;
       rule.mSelectorText = selector;
       if (aIsInsideMediaRule)
         rule.parentRule = aOwner;
       else
         rule.parentStyleSheet = aOwner;
       aOwner.cssRules.push(rule);
       return s;
     }
     this.restoreState();
     s = this.currentToken().value;
     this.addUnknownAtRule(aOwner, s);
     return "";
   },

   parseSelector: function(aToken, aParseSelectorOnly) {
     var s = "";
     var specificity = {a: 0, b: 0, c: 0, d: 0}; // CSS 2.1 section 6.4.3
     var isFirstInChain = true;
     var token = aToken;
     var valid = false;
     var combinatorFound = false;
     while (true) {
       if (!token.isNotNull()) {
         if (aParseSelectorOnly)
           return {selector: s, specificity: specificity };
         return "";
       }

       if (!aParseSelectorOnly && token.isSymbol("{")) {
         // end of selector
         valid = !combinatorFound;
    if (valid) this.ungetToken();
         break;
       }

       if (token.isSymbol(",")) { // group of selectors
         s += token.value;
         isFirstInChain = true;
         combinatorFound = false;
         token = this.getToken(false, true);
         continue;
       }
       // now combinators and grouping...
       else if (!combinatorFound
           && (token.isWhiteSpace()
            || token.isSymbol(">")
                     || token.isSymbol("+")
                     || token.isSymbol("~"))) {
    if (token.isWhiteSpace()) {
           s += " ";
      var nextToken = this.lookAhead(true, true);
      if (!nextToken.isNotNull()) {
             if (aParseSelectorOnly)
               return {selector: s, specificity: specificity };
        return "";
      }
      if (nextToken.isSymbol(">")
          || nextToken.isSymbol("+")
          || nextToken.isSymbol("~")) {
             token = this.getToken(true, true);
        s += token.value + " ";
        combinatorFound = true;
      }
    }
         else {
           s += token.value;
      combinatorFound = true;
    }
    isFirstInChain = true;
         token = this.getToken(true, true);
         continue;
       }
       else {
         var simpleSelector = this.parseSimpleSelector(token, isFirstInChain, true);
         if (!simpleSelector)
           break; // error
         s += simpleSelector.selector;
         specificity.b += simpleSelector.specificity.b;
         specificity.c += simpleSelector.specificity.c;
         specificity.d += simpleSelector.specificity.d;
    isFirstInChain = false;
    combinatorFound = false;
       }

       token = this.getToken(false, true);
     }

     if (valid) {
       return {selector: s, specificity: specificity };
     }
     return "";
   },

   isPseudoElement: function(aIdent)
   {
     switch (aIdent) {
       case "first-letter":
       case "first-line":
       case "before":
       case "after":
       case "marker":
         return true;
         break;
       default: return false;
         break;
     }
   },

   parseSimpleSelector: function(token, isFirstInChain, canNegate)
   {
     var s = "";
     var specificity = {a: 0, b: 0, c: 0, d: 0}; // CSS 2.1 section 6.4.3

     if (isFirstInChain
         && (token.isSymbol("*") || token.isSymbol("|") || token.isIdent())) {
       // type or universal selector
       if (token.isSymbol("*") || token.isIdent()) {
         // we don't know yet if it's a prefix or a universal
         // selector
         s += token.value;
         var isIdent = token.isIdent();
         token = this.getToken(false, true);
         if (token.isSymbol("|")) {
           // it's a prefix
           s += token.value;
           token = this.getToken(false, true);
           if (token.isIdent() || token.isSymbol("*")) {
             // ok we now have a type element or universal
             // selector
             s += token.value;
             if (token.isIdent())
               specificity.d++;
           } else
             // oops that's an error...
             return null;
         } else {
           this.ungetToken();
           if (isIdent)
             specificity.d++;
         }
       } else if (token.isSymbol("|")) {
         s += token.value;
         token = this.getToken(false, true);
         if (token.isIdent() || token.isSymbol("*")) {
           s += token.value;
           if (token.isIdent())
             specificity.d++;
         } else
           // oops that's an error
           return null;
       }
     }

     else if (token.isSymbol(".") || token.isSymbol("#")) {
       var isClass = token.isSymbol(".");
       s += token.value;
       token = this.getToken(false, true);
       if (token.isIdent()) {
         s += token.value;
         if (isClass)
           specificity.c++;
         else
           specificity.b++;
       }
       else
         return null;
     }

     else if (token.isSymbol(":")) {
       s += token.value;
       token = this.getToken(false, true);
       if (token.isSymbol(":")) {
         s += token.value;
         token = this.getToken(false, true);
       }
       if (token.isIdent()) {
         s += token.value;
         if (this.isPseudoElement(token.value))
           specificity.d++;
         else
           specificity.c++;
       }
       else if (token.isFunction()) {
         s += token.value;
         if (token.isFunction(":not(")) {
           if (!canNegate)
             return null;
           token = this.getToken(true, true);
           var simpleSelector = this.parseSimpleSelector(token, isFirstInChain, false);
           if (!simpleSelector)
             return null;
           else {
             s += simpleSelector.selector;
             token = this.getToken(true, true);
             if (token.isSymbol(")"))
               s += ")";
             else
               return null;
           }
           specificity.c++;
         }
         else {
           while (true) {
             token = this.getToken(false, true);
             if (token.isSymbol(")")) {
               s += ")";
               break;
             } else
               s += token.value;
           }
           specificity.c++;
         }
       } else
         return null;

     } else if (token.isSymbol("[")) {
       s += "[";
       token = this.getToken(true, true);
       if (token.isIdent() || token.isSymbol("*")) {
         s += token.value;
         var nextToken = this.getToken(true, true);
         if (token.isSymbol("|")) {
           s += "|";
           token = this.getToken(true, true);
           if (token.isIdent())
             s += token.value;
           else
             return null;
         } else
           this.ungetToken();
       } else if (token.isSymbol("|")) {
         s += "|";
         token = this.getToken(true, true);
         if (token.isIdent())
           s += token.value;
         else
           return null;
       }
       else
         return null;

       // nothing, =, *=, $=, ^=, |=
       token = this.getToken(true, true);
       if (token.isIncludes()
           || token.isDashmatch()
           || token.isBeginsmatch()
           || token.isEndsmatch()
           || token.isContainsmatch()
           || token.isSymbol("=")) {
         s += token.value;
         token = this.getToken(true, true);
         if (token.isString() || token.isIdent()) {
           s += token.value;
           token = this.getToken(true, true);
         }
         else
           return null;

         if (token.isSymbol("]")) {
           s += token.value;
           specificity.c++;
         }
         else
           return null;
       }
       else if (token.isSymbol("]")) {
         s += token.value;
         specificity.c++;
       }
       else
         return null;

     }
     else if (token.isWhiteSpace()) {
       var t = this.lookAhead(true, true);
       if (t.isSymbol('{'))
         return ""
     }
     if (s)
       return {selector: s, specificity: specificity };
     return null;
   },

   preserveState: function() {
     this.mPreservedTokens.push(this.currentToken());
     this.mScanner.preserveState();
   },

   restoreState: function() {
     if (this.mPreservedTokens.length) {
       this.mScanner.restoreState();
       this.mToken = this.mPreservedTokens.pop();
     }
   },

   forgetState: function() {
     if (this.mPreservedTokens.length) {
       this.mScanner.forgetState();
       this.mPreservedTokens.pop();
     }
   },

   parse: function(aString, aTryToPreserveWhitespaces, aTryToPreserveComments) {
     if (!aString)
       return null; // early way out if we can

     this.mPreserveWS       = aTryToPreserveWhitespaces;
     this.mPreserveComments = aTryToPreserveComments;
     this.mPreservedTokens = [];
     this.mScanner.init(aString);
     var sheet = new jscsspStylesheet();

     // @charset can only appear at first char of the stylesheet
     var token = this.getToken(false, false);
     if (!token.isNotNull())
       return;
     if (token.isAtRule("@charset")) {
       this.parseCharsetRule(token, sheet);
       token = this.getToken(false, false);
     }

     var foundStyleRules = false;
     var foundImportRules = false;
     var foundNameSpaceRules = false;
     while (true) {
       if (!token.isNotNull())
         break;
       if (token.isWhiteSpace())
       {
         if (aTryToPreserveWhitespaces)
           this.addWhitespace(sheet, token.value);
       }

       else if (token.isComment())
       {
         if (this.mPreserveComments)
           this.addComment(sheet, token.value);
       }

       else if (token.isAtRule()) {
         if (token.isAtRule("@variables")) {
           if (!foundImportRules && !foundStyleRules)
             this.parseVariablesRule(token, sheet);
           else {
             this.reportError(kVARIABLES_RULE_POSITION);
             this.addUnknownAtRule(sheet, token.value);
           }
         }
         else if (token.isAtRule("@import")) {
           // @import rules MUST occur before all style and namespace
           // rules
           if (!foundStyleRules && !foundNameSpaceRules)
             foundImportRules = this.parseImportRule(token, sheet);
           else {
             this.reportError(kIMPORT_RULE_POSITION);
             this.addUnknownAtRule(sheet, token.value);
           }
         }
         else if (token.isAtRule("@namespace")) {
           // @namespace rules MUST occur before all style rule and
           // after all @import rules
           if (!foundStyleRules)
             foundNameSpaceRules = this.parseNamespaceRule(token, sheet);
           else {
             this.reportError(kNAMESPACE_RULE_POSITION);
             this.addUnknownAtRule(sheet, token.value);
           }
         }
         else if (token.isAtRule("@font-face")) {
           if (this.parseFontFaceRule(token, sheet))
             foundStyleRules = true;
           else
             this.addUnknownAtRule(sheet, token.value);
         }
         else if (token.isAtRule("@page")) {
           if (this.parsePageRule(token, sheet))
             foundStyleRules = true;
           else
             this.addUnknownAtRule(sheet, token.value);
         }
         else if (token.isAtRule("@media")) {
           if (this.parseMediaRule(token, sheet))
             foundStyleRules = true;
           else
             this.addUnknownAtRule(sheet, token.value);
         }
         else if (token.isAtRule("@keyframes")) {
           if (!this.parseKeyframesRule(token, sheet))
             this.addUnknownAtRule(sheet, token.value);
         }
         else if (token.isAtRule("@charset")) {
           this.reportError(kCHARSET_RULE_CHARSET_SOF);
           this.addUnknownAtRule(sheet, token.value);
         }
         else {
           this.reportError(kUNKNOWN_AT_RULE);
           this.addUnknownAtRule(sheet, token.value);
         }
       }

       else // plain style rules
       {
         var ruleText = this.parseStyleRule(token, sheet, false);
         if (ruleText)
           foundStyleRules = true;
       }
       token = this.getToken(false);
     }

     return sheet;
   }

 };


 function jscsspToken(aType, aValue, aUnit)
 {
   this.type = aType;
   this.value = aValue;
   this.unit = aUnit;
 }

 jscsspToken.NULL_TYPE = 0;

 jscsspToken.WHITESPACE_TYPE = 1;
 jscsspToken.STRING_TYPE = 2;
 jscsspToken.COMMENT_TYPE = 3;
 jscsspToken.NUMBER_TYPE = 4;
 jscsspToken.IDENT_TYPE = 5;
 jscsspToken.FUNCTION_TYPE = 6;
 jscsspToken.ATRULE_TYPE = 7;
 jscsspToken.INCLUDES_TYPE = 8;
 jscsspToken.DASHMATCH_TYPE = 9;
 jscsspToken.BEGINSMATCH_TYPE = 10;
 jscsspToken.ENDSMATCH_TYPE = 11;
 jscsspToken.CONTAINSMATCH_TYPE = 12;
 jscsspToken.SYMBOL_TYPE = 13;
 jscsspToken.DIMENSION_TYPE = 14;
 jscsspToken.PERCENTAGE_TYPE = 15;
 jscsspToken.HEX_TYPE = 16;

 jscsspToken.prototype = {

   isNotNull: function ()
   {
     return this.type;
   },

   _isOfType: function (aType, aValue)
   {
     return (this.type == aType && (!aValue || this.value.toLowerCase() == aValue));
   },

   isWhiteSpace: function(w)
   {
     return this._isOfType(jscsspToken.WHITESPACE_TYPE, w);
   },

   isString: function()
   {
     return this._isOfType(jscsspToken.STRING_TYPE);
   },

   isComment: function()
   {
     return this._isOfType(jscsspToken.COMMENT_TYPE);
   },

   isNumber: function(n)
   {
     return this._isOfType(jscsspToken.NUMBER_TYPE, n);
   },

   isSymbol: function(c)
   {
     return this._isOfType(jscsspToken.SYMBOL_TYPE, c);
   },

   isIdent: function(i)
   {
     return this._isOfType(jscsspToken.IDENT_TYPE, i);
   },

   isFunction: function(f)
   {
     return this._isOfType(jscsspToken.FUNCTION_TYPE, f);
   },

   isAtRule: function(a)
   {
     return this._isOfType(jscsspToken.ATRULE_TYPE, a);
   },

   isIncludes: function()
   {
     return this._isOfType(jscsspToken.INCLUDES_TYPE);
   },

   isDashmatch: function()
   {
     return this._isOfType(jscsspToken.DASHMATCH_TYPE);
   },

   isBeginsmatch: function()
   {
     return this._isOfType(jscsspToken.BEGINSMATCH_TYPE);
   },

   isEndsmatch: function()
   {
     return this._isOfType(jscsspToken.ENDSMATCH_TYPE);
   },

   isContainsmatch: function()
   {
     return this._isOfType(jscsspToken.CONTAINSMATCH_TYPE);
   },

   isSymbol: function(c)
   {
     return this._isOfType(jscsspToken.SYMBOL_TYPE, c);
   },

   isDimension: function()
   {
     return this._isOfType(jscsspToken.DIMENSION_TYPE);
   },

   isPercentage: function()
   {
     return this._isOfType(jscsspToken.PERCENTAGE_TYPE);
   },

   isHex: function()
   {
     return this._isOfType(jscsspToken.HEX_TYPE);
   },

   isDimensionOfUnit: function(aUnit)
   {
     return (this.isDimension() && this.unit == aUnit);
   },

   isLength: function()
   {
     return (this.isPercentage() ||
             this.isDimensionOfUnit("cm") ||
             this.isDimensionOfUnit("mm") ||
             this.isDimensionOfUnit("in") ||
             this.isDimensionOfUnit("pc") ||
             this.isDimensionOfUnit("px") ||
             this.isDimensionOfUnit("em") ||
             this.isDimensionOfUnit("ex") ||
             this.isDimensionOfUnit("pt"));
   },

   isAngle: function()
   {
     return (this.isDimensionOfUnit("deg") ||
             this.isDimensionOfUnit("rad") ||
             this.isDimensionOfUnit("grad"));
   }
 }

 var kJscsspUNKNOWN_RULE   = 0;
 var kJscsspSTYLE_RULE     = 1
 var kJscsspCHARSET_RULE   = 2;
 var kJscsspIMPORT_RULE    = 3;
 var kJscsspMEDIA_RULE     = 4;
 var kJscsspFONT_FACE_RULE = 5;
 var kJscsspPAGE_RULE      = 6;

 var kJscsspKEYFRAMES_RULE = 7;
 var kJscsspKEYFRAME_RULE  = 8;

 var kJscsspNAMESPACE_RULE = 100;
 var kJscsspCOMMENT        = 101;
 var kJscsspWHITE_SPACE    = 102;

 var kJscsspVARIABLES_RULE = 200;

 var kJscsspSTYLE_DECLARATION = 1000;

 var gTABS = "";

 function jscsspStylesheet()
 {
   this.cssRules = [];
   this.variables = {};
 }

 jscsspStylesheet.prototype = {
   insertRule: function(aRule, aIndex) {
     try {
      this.cssRules.splice(aIndex, 1, aRule);
     }
     catch(e) {
     }
   },

   deleteRule: function(aIndex) {
     try {
       this.cssRules.splice(aIndex);
     }
     catch(e) {
     }
   },

   cssText: function() {
     var rv = "";
     for (var i = 0; i < this.cssRules.length; i++)
       rv += this.cssRules[i].cssText() + "\n";
     return rv;
   },

   resolveVariables: function(aMedium) {

     function ItemFoundInArray(aArray, aItem) {
       for (var i = 0; i < aArray.length; i++)
         if (aItem == aArray[i])
           return true;
       return false;
     }

     for (var i = 0; i < this.cssRules.length; i++)
     {
       var rule = this.cssRules[i];
       if (rule.type == kJscsspSTYLE_RULE || rule.type == kJscsspIMPORT_RULE)
         break;
       else if (rule.type == kJscsspVARIABLES_RULE &&
                (!rule.media.length || ItemFoundInArray(rule.media, aMedium))) {

         for (var j = 0; j < rule.declarations.length; j++) {
           var valueText = "";
           for (var k = 0; k < rule.declarations[j].values.length; k++)
             valueText += (k ? " " : "") + rule.declarations[j].values[k].value;
           this.variables[rule.declarations[j].property] = valueText;
         }
       }
     }
   }
 };

 /* kJscsspCHARSET_RULE */

 function jscsspCharsetRule()
 {
   this.type = kJscsspCHARSET_RULE;
   this.encoding = null;
   this.parsedCssText = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspCharsetRule.prototype = {

   cssText: function() {
     return "@charset " + this.encoding + ";";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(false, false);
     if (token.isAtRule("@charset")) {
       if (parser.parseCharsetRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.encoding = newRule.encoding;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspUNKNOWN_RULE */

 function jscsspErrorRule(aErrorMsg)
 {
   this.error = aErrorMsg ? aErrorMsg : "INVALID";
   this.type = kJscsspUNKNOWN_RULE;
   this.parsedCssText = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspErrorRule.prototype = {
   cssText: function() {
     return this.parsedCssText;
   }
 };

 /* kJscsspCOMMENT */

 function jscsspComment()
 {
   this.type = kJscsspCOMMENT;
   this.parsedCssText = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspComment.prototype = {
   cssText: function() {
     return this.parsedCssText;
   },

   setCssText: function(val) {
     var parser = new CSSParser(val);
     var token = parser.getToken(true, false);
     if (token.isComment())
       this.parsedCssText = token.value;
     else
       throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspWHITE_SPACE */

 function jscsspWhitespace()
 {
   this.type = kJscsspWHITE_SPACE;
   this.parsedCssText = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspWhitespace.prototype = {
   cssText: function() {
     return this.parsedCssText;
   }
 };

 /* kJscsspIMPORT_RULE */

 function jscsspImportRule()
 {
   this.type = kJscsspIMPORT_RULE;
   this.parsedCssText = null;
   this.href = null;
   this.media = [];
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspImportRule.prototype = {
   cssText: function() {
     var mediaString = this.media.join(", ");
     return "@import " + this.href
                       + ((mediaString && mediaString != "all") ? mediaString + " " : "")
                       + ";";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (token.isAtRule("@import")) {
       if (parser.parseImportRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.href = newRule.href;
         this.media = newRule.media;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspNAMESPACE_RULE */

 function jscsspNamespaceRule()
 {
   this.type = kJscsspNAMESPACE_RULE;
   this.parsedCssText = null;
   this.prefix = null;
   this.url = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspNamespaceRule.prototype = {
   cssText: function() {
     return "@namespace " + (this.prefix ? this.prefix + " ": "")
                         + this.url
                         + ";";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (token.isAtRule("@namespace")) {
       if (parser.parseNamespaceRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.url = newRule.url;
         this.prefix = newRule.prefix;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspSTYLE_DECLARATION */

 function jscsspDeclaration()
 {
   this.type = kJscsspSTYLE_DECLARATION;
   this.property = null;
   this.values = [];
   this.valueText = null;
   this.priority = null;
   this.parsedCssText = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspDeclaration.prototype = {
   kCOMMA_SEPARATED: {
     "cursor": true,
     "font-family": true,
     "voice-family": true,
     "background-image": true
   },

   kUNMODIFIED_COMMA_SEPARATED_PROPERTIES: {
     "text-shadow": true,
     "box-shadow": true,
     "-moz-transition": true,
     "-moz-transition-property": true,
     "-moz-transition-duration": true,
     "-moz-transition-timing-function": true,
     "-moz-transition-delay": true
   },

   cssText: function() {
     var prefixes = CssInspector.prefixesForProperty(this.property);

     if (this.property in this.kUNMODIFIED_COMMA_SEPARATED_PROPERTIES) {
       if (prefixes) {
         var rv = "";
         for (var propertyIndex = 0; propertyIndex < prefixes.length; propertyIndex++) {
           var property = prefixes[propertyIndex];
           rv += (propertyIndex ? gTABS : "") + property + ": ";
           rv += this.valueText + (this.priority ? " !important" : "") + ";";
           rv += ((prefixes.length > 1 && propertyIndex != prefixes.length -1) ? "\n" : "");
         }
         return rv;
       }
       return this.property + ": " + this.valueText +
              (this.priority ? " !important" : "") + ";"
     }

     if (prefixes) {
       var rv = "";
       for (var propertyIndex = 0; propertyIndex < prefixes.length; propertyIndex++) {
         var property = prefixes[propertyIndex];
         rv += (propertyIndex ? gTABS : "") + property + ": ";
         var separator = (property in this.kCOMMA_SEPARATED) ? ", " : " ";
         for (var i = 0; i < this.values.length; i++)
           if (this.values[i].cssText() != null)
             rv += (i ? separator : "") + this.values[i].cssText();
           else
             return null;
         rv += (this.priority ? " !important" : "") + ";" +
               ((prefixes.length > 1 && propertyIndex != prefixes.length -1) ? "\n" : "");
       }
       return rv;
     }

     var rv = this.property + ": ";
     var separator = (this.property in this.kCOMMA_SEPARATED) ? ", " : " ";
     var extras = {"webkit": false, "presto": false, "trident": false, "generic": false }
     for (var i = 0; i < this.values.length; i++) {
       var v = this.values[i].cssText();
       if (v != null) {
         var paren = v.indexOf("(");
         var kwd = v;
         if (paren != -1)
           kwd = v.substr(0, paren);
         if (kwd in kCSS_VENDOR_VALUES) {
           for (var j in kCSS_VENDOR_VALUES[kwd]) {
             extras[j] = extras[j] || (kCSS_VENDOR_VALUES[kwd][j] != "");
           }
         }
         rv += (i ? separator : "") + v;
       }
       else
         return null;
     }
     rv += (this.priority ? " !important" : "") + ";";

     for (var j in extras) {
       if (extras[j]) {
         var str = "\n" + gTABS +  this.property + ": ";
         for (var i = 0; i < this.values.length; i++) {
           var v = this.values[i].cssText();
           if (v != null) {
             var paren = v.indexOf("(");
             var kwd = v;
             if (paren != -1)
               kwd = v.substr(0, paren);
             if (kwd in kCSS_VENDOR_VALUES) {
               functor = kCSS_VENDOR_VALUES[kwd][j];
               if (functor) {
                 v = (typeof functor == "string") ? functor : functor(v, j);
                 if (!v) {
                   str = null;
                   break;
                 }
               }
             }
             str += (i ? separator : "") + v;
           }
           else
             return null;
         }
         if (str)
           rv += str + ";"
         else
           rv += "\n" + gTABS + "/* Impossible to translate property " + this.property + " for " + j + " */";
       }
     }
     return rv;
   },

   setCssText: function(val) {
     var declarations = [];
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (parser.parseDeclaration(token, declarations, true, true, null)
         && declarations.length
         && declarations[0].type == kJscsspSTYLE_DECLARATION) {
       var newDecl = declarations.cssRules[0];
       this.property = newDecl.property;
       this.value = newDecl.value;
       this.priority = newDecl.priority;
       this.parsedCssText = newRule.parsedCssText;
       return;
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspFONT_FACE_RULE */

 function jscsspFontFaceRule()
 {
   this.type = kJscsspFONT_FACE_RULE;
   this.parsedCssText = null;
   this.descriptors = [];
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspFontFaceRule.prototype = {
   cssText: function() {
     var rv = gTABS + "@font-face {\n";
     var preservedGTABS = gTABS;
     gTABS += "  ";
     for (var i = 0; i < this.descriptors.length; i++)
       rv += gTABS + this.descriptors[i].cssText() + "\n";
     gTABS = preservedGTABS;
     return rv + gTABS + "}";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (token.isAtRule("@font-face")) {
       if (parser.parseFontFaceRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.descriptors = newRule.descriptors;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspKEYFRAMES_RULE */
 function jscsspKeyframesRule()
 {
   this.type = kJscsspKEYFRAMES_RULE;
   this.parsedCssText = null;
   this.cssRules = [];
   this.name = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspKeyframesRule.prototype = {
   cssText: function() {
     var rv = gTABS
                + "@keyframes "
                + this.name + " {\n";
     var preservedGTABS = gTABS;
     gTABS += "  ";
     for (var i = 0; i < this.cssRules.length; i++)
       rv += gTABS + this.cssRules[i].cssText() + "\n";
     gTABS = preservedGTABS;
     rv += gTABS + "}\n";
     return rv;
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (token.isAtRule("@keyframes")) {
       if (parser.parseKeyframesRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.cssRules = newRule.cssRules;
         this.name = newRule.name;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspKEYFRAME_RULE */
 function jscsspKeyframeRule()
 {
   this.type = kJscsspKEYFRAME_RULE;
   this.parsedCssText = null;
   this.declarations = []
   this.keyText = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspKeyframeRule.prototype = {
   cssText: function() {
     var rv = this.keyText + " {\n";
     var preservedGTABS = gTABS;
     gTABS += "  ";
     for (var i = 0; i < this.declarations.length; i++) {
       var declText = this.declarations[i].cssText();
       if (declText)
         rv += gTABS + this.declarations[i].cssText() + "\n";
     }
     gTABS = preservedGTABS;
     return rv + gTABS + "}";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (!token.isNotNull()) {
       if (parser.parseKeyframeRule(token, sheet, false)) {
         var newRule = sheet.cssRules[0];
         this.keyText = newRule.keyText;
         this.declarations = newRule.declarations;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspMEDIA_RULE */

 function jscsspMediaRule()
 {
   this.type = kJscsspMEDIA_RULE;
   this.parsedCssText = null;
   this.cssRules = [];
   this.media = [];
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspMediaRule.prototype = {
   cssText: function() {
     var rv = gTABS + "@media " + this.media.join(", ") + " {\n";
     var preservedGTABS = gTABS;
     gTABS += "  ";
     for (var i = 0; i < this.cssRules.length; i++)
       rv += gTABS + this.cssRules[i].cssText() + "\n";
     gTABS = preservedGTABS;
     return rv + gTABS + "}";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (token.isAtRule("@media")) {
       if (parser.parseMediaRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.cssRules = newRule.cssRules;
         this.media = newRule.media;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspSTYLE_RULE */

 function jscsspStyleRule()
 {
   this.type = kJscsspSTYLE_RULE;
   this.parsedCssText = null;
   this.declarations = []
   this.mSelectorText = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspStyleRule.prototype = {
   cssText: function() {
     var rv = this.mSelectorText + " {\n";
     var preservedGTABS = gTABS;
     gTABS += "  ";
     for (var i = 0; i < this.declarations.length; i++) {
       var declText = this.declarations[i].cssText();
       if (declText)
         rv += gTABS + this.declarations[i].cssText() + "\n";
     }
     gTABS = preservedGTABS;
     return rv + gTABS + "}";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (!token.isNotNull()) {
       if (parser.parseStyleRule(token, sheet, false)) {
         var newRule = sheet.cssRules[0];
         this.mSelectorText = newRule.mSelectorText;
         this.declarations = newRule.declarations;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   },

   selectorText: function() {
     return this.mSelectorText;
   },

   setSelectorText: function(val) {
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (!token.isNotNull()) {
       var s = parser.parseSelector(token, true);
       if (s) {
         this.mSelectorText = s.selector;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspPAGE_RULE */

 function jscsspPageRule()
 {
   this.type = kJscsspPAGE_RULE;
   this.parsedCssText = null;
   this.pageSelector = null;
   this.declarations = [];
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspPageRule.prototype = {
   cssText: function() {
     var rv = gTABS + "@page "
                    + (this.pageSelector ? this.pageSelector + " ": "")
                    + "{\n";
     var preservedGTABS = gTABS;
     gTABS += "  ";
     for (var i = 0; i < this.declarations.length; i++)
       rv += gTABS + this.declarations[i].cssText() + "\n";
     gTABS = preservedGTABS;
     return rv + gTABS + "}";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (token.isAtRule("@page")) {
       if (parser.parsePageRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.pageSelector = newRule.pageSelector;
         this.declarations = newRule.declarations;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspVARIABLES_RULE */

 function jscsspVariablesRule()
 {
   this.type = kJscsspVARIABLES_RULE;
   this.parsedCssText = null;
   this.declarations = [];
   this.parentStyleSheet = null;
   this.parentRule = null;
   this.media = null;
 }

 jscsspVariablesRule.prototype = {
   cssText: function() {
     var rv = gTABS + "@variables " +
                      (this.media.length ? this.media.join(", ") + " " : "") +
                      "{\n";
     var preservedGTABS = gTABS;
     gTABS += "  ";
     for (var i = 0; i < this.declarations.length; i++)
       rv += gTABS + this.declarations[i].cssText() + "\n";
     gTABS = preservedGTABS;
     return rv + gTABS + "}";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (token.isAtRule("@variables")) {
       if (parser.parseVariablesRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.declarations = newRule.declarations;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 var kJscsspINHERIT_VALUE = 0;
 var kJscsspPRIMITIVE_VALUE = 1;
 var kJscsspVARIABLE_VALUE = 4;

 function jscsspVariable(aType, aSheet)
 {
   this.value = "";
   this.type = aType;
   this.name  = null;
   this.parentRule = null;
   this.parentStyleSheet = aSheet;
 }

 jscsspVariable.prototype = {
   cssText: function() {
     if (this.type == kJscsspVARIABLE_VALUE)
       return this.resolveVariable(this.name, this.parentRule, this.parentStyleSheet);
     else
       return this.value;
   },

   setCssText: function(val) {
     if (this.type == kJscsspVARIABLE_VALUE)
       throw DOMException.SYNTAX_ERR;
     else
       this.value = val;
   },

   resolveVariable: function(aName, aRule, aSheet)
   {
     if (aName.toLowerCase() in aSheet.variables)
       return aSheet.variables[aName.toLowerCase()];
     return null;
   }
 };

 function ParseURL(buffer) {
   var result = { };
   result.protocol = "";
   result.user = "";
   result.password = "";
   result.host = "";
   result.port = "";
   result.path = "";
   result.query = "";

   var section = "PROTOCOL";
   var start = 0;
   var wasSlash = false;

   while(start < buffer.length) {
     if(section == "PROTOCOL") {
       if(buffer.charAt(start) == ':') {
         section = "AFTER_PROTOCOL";
         start++;
       } else if(buffer.charAt(start) == '/' && result.protocol.length() == 0) {
         section = PATH;
       } else {
         result.protocol += buffer.charAt(start++);
       }
     } else if(section == "AFTER_PROTOCOL") {
       if(buffer.charAt(start) == '/') {
     if(!wasSlash) {
           wasSlash = true;
     } else {
           wasSlash = false;
           section = "USER";
     }
         start ++;
       } else {
         throw new ParseException("Protocol shell be separated with 2 slashes");
       }
     } else if(section == "USER") {
       if(buffer.charAt(start) == '/') {
         result.host = result.user;
         result.user = "";
         section = "PATH";
       } else if(buffer.charAt(start) == '?') {
         result.host = result.user;
         result.user = "";
         section = "QUERY";
         start++;
       } else if(buffer.charAt(start) == ':') {
         section = "PASSWORD";
         start++;
       } else if(buffer.charAt(start) == '@') {
         section = "HOST";
         start++;
       } else {
         result.user += buffer.charAt(start++);
       }
     } else if(section == "PASSWORD") {
       if(buffer.charAt(start) == '/') {
         result.host = result.user;
         result.port = result.password;
         result.user = "";
         result.password = "";
         section = "PATH";
       } else if(buffer.charAt(start) == '?') {
         result.host = result.user;
         result.port = result.password;
         result.user = "";
         result.password = "";
         section = "QUERY";
         start ++;
       } else if(buffer.charAt(start) == '@') {
         section = "HOST";
         start++;
       } else {
         result.password += buffer.charAt(start++);
       }
     } else if(section == "HOST") {
       if(buffer.charAt(start) == '/') {
         section = "PATH";
       } else if(buffer.charAt(start) == ':') {
         section = "PORT";
         start++;
       } else if(buffer.charAt(start) == '?') {
         section = "QUERY";
         start++;
       } else {
         result.host += buffer.charAt(start++);
       }
     } else if(section == "PORT") {
       if(buffer.charAt(start) == '/') {
         section = "PATH";
       } else if(buffer.charAt(start) == '?') {
         section = "QUERY";
         start++;
       } else {
         result.port += buffer.charAt(start++);
       }
     } else if(section == "PATH") {
       if(buffer.charAt(start) == '?') {
     section = "QUERY";
     start ++;
       } else {
     result.path += buffer.charAt(start++);
       }
     } else if(section == "QUERY") {
       result.query += buffer.charAt(start++);
     }
   }

   if(section == "PROTOCOL") {
     result.host = result.protocol;
     result.protocol = "http";
   } else if(section == "AFTER_PROTOCOL") {
     throw new ParseException("Invalid url");
   } else if(section == "USER") {
     result.host = result.user;
     result.user = "";
   } else if(section == "PASSWORD") {
     result.host = result.user;
     result.port = result.password;
     result.user = "";
     result.password = "";
   }

   return result;
 }

 function ParseException(description) {
     this.description = description;
 }

 function CountLF(s)
 {
   var nCR = s.match( /\n/g );
   return nCR ? nCR.length + 1 : 1;
 }


 function FilterLinearGradientForOutput(aValue, aEngine)
 {
   if (aEngine == "generic")
     return aValue.substr(5);

   if (aEngine == "webkit")
     return aValue.replace( /\-moz\-/g , "-webkit-")

   if (aEngine != "webkit20110101")
     return "";

   var g = CssInspector.parseBackgroundImages(aValue)[0];

   var cancelled = false;
   var str = "-webkit-gradient(linear, ";
   var position = ("position" in g.value) ? g.value.position.toLowerCase() : "";
   var angle    = ("angle" in g.value) ? g.value.angle.toLowerCase() : "";
   // normalize angle
   if (angle) {
     var match = angle.match(/^([0-9\-\.\\+]+)([a-z]*)/);
     var angle = parseFloat(match[1]);
     var unit  = match[2];
     switch (unit) {
       case "grad": angle = angle * 90 / 100; break;
       case "rad":  angle = angle * 180 / Math.PI; break;
       default: break;
     }
     while (angle < 0)
       angle += 360;
     while (angle >= 360)
       angle -= 360;
   }
   // get startpoint w/o keywords
   var startpoint = [];
   var endpoint = [];
   if (position != "") {
     if (position == "center")
       position = "center center";
     startpoint = position.split(" ");
     if (angle == "" && angle != 0) {
       // no angle, then we just turn the point 180 degrees around center
       switch (startpoint[0]) {
         case "left":   endpoint.push("right"); break;
         case "center": endpoint.push("center"); break;
         case "right":  endpoint.push("left"); break;
         default: {
             var match = startpoint[0].match(/^([0-9\-\.\\+]+)([a-z]*)/);
             var v     = parseFloat(match[0]);
             var unit  = match[1];
             if (unit == "%") {
               endpoint.push((100-v) + "%");
             }
             else
               cancelled = true;
           }
           break;
       }
       if (!cancelled)
         switch (startpoint[1]) {
           case "top":    endpoint.push("bottom"); break;
           case "center": endpoint.push("center"); break;
           case "bottom": endpoint.push("top"); break;
           default: {
               var match = startpoint[1].match(/^([0-9\-\.\\+]+)([a-z]*)/);
               var v     = parseFloat(match[0]);
               var unit  = match[1];
               if (unit == "%") {
                 endpoint.push((100-v) + "%");
               }
               else
                 cancelled = true;
             }
             break;
         }
     }
     else {
       switch (angle) {
         case 0:    endpoint.push("right"); endpoint.push(startpoint[1]); break;
         case 90:   endpoint.push(startpoint[0]); endpoint.push("top"); break;
         case 180:  endpoint.push("left"); endpoint.push(startpoint[1]); break;
         case 270:  endpoint.push(startpoint[0]); endpoint.push("bottom"); break;
         default:     cancelled = true; break;
       }
     }
   }
   else {
     // no position defined, we accept only vertical and horizontal
     if (angle == "")
       angle = 270;
     switch (angle) {
       case 0:    startpoint= ["left", "center"];   endpoint = ["right", "center"]; break;
       case 90:   startpoint= ["center", "bottom"]; endpoint = ["center", "top"]; break;
       case 180:  startpoint= ["right", "center"];  endpoint = ["left", "center"]; break;
       case 270:  startpoint= ["center", "top"];    endpoint = ["center", "bottom"]; break;
       default:     cancelled = true; break;
     }
   }

   if (cancelled)
     return "";

   str += startpoint.join(" ") + ", " + endpoint.join(" ");
   if (!g.value.stops[0].position)
     g.value.stops[0].position = "0%";
   if (!g.value.stops[g.value.stops.length-1].position)
     g.value.stops[g.value.stops.length-1].position = "100%";
   var current = 0;
   for (var i = 0; i < g.value.stops.length && !cancelled; i++) {
     var s = g.value.stops[i];
     if (s.position) {
       if (s.position.indexOf("%") == -1) {
         cancelled = true;
         break;
       }
     }
     else {
       var j = i + 1;
       while (j < g.value.stops.length && !g.value.stops[j].position)
         j++;
       var inc = parseFloat(g.value.stops[j].position) - current;
       for (var k = i; k < j; k++) {
         g.value.stops[k].position = (current + inc * (k - i + 1) / (j - i + 1)) + "%";
       }
     }
     current = parseFloat(s.position);
     str += ", color-stop(" + (parseFloat(current) / 100) + ", " + s.color + ")";
   }

   if (cancelled)
     return "";
   return str + ")";
 }

 function FilterRadialGradientForOutput(aValue, aEngine)
 {
   if (aEngine == "generic")
     return aValue.substr(5);

   else if (aEngine == "webkit")
     return aValue.replace( /\-moz\-/g , "-webkit-")

   else if (aEngine != "webkit20110101")
     return "";

   var g = CssInspector.parseBackgroundImages(aValue)[0];

   var shape = ("shape" in g.value) ? g.value.shape : "";
   var size  = ("size"  in g.value) ? g.value.size : "";
   if (shape != "circle"
       || (size != "farthest-corner" && size != "cover"))
     return "";

   if (g.value.stops.length < 2
       || !("position" in g.value.stops[0])
       || !g.value.stops[g.value.stops.length - 1].position
       || !("position" in g.value.stops[0])
       || !g.value.stops[g.value.stops.length - 1].position)
     return "";

   for (var i = 0; i < g.value.stops.length; i++) {
     var s = g.value.stops[i];
     if (("position" in s) && s.position && s.position.indexOf("px") == -1)
       return "";
   }

   var str = "-webkit-gradient(radial, ";
   var position  = ("position"  in g.value) ? g.value.position : "center center";
   str += position + ", " +  parseFloat(g.value.stops[0].position) + ", ";
   str += position + ", " +  parseFloat(g.value.stops[g.value.stops.length - 1].position);

   // at this point we're sure to deal with pixels
   var current = parseFloat(g.value.stops[0].position);
   for (var i = 0; i < g.value.stops.length; i++) {
     var s = g.value.stops[i];
     if (!("position" in s) || !s.position) {
       var j = i + 1;
       while (j < g.value.stops.length && !g.value.stops[j].position)
         j++;
       var inc = parseFloat(g.value.stops[j].position) - current;
       for (var k = i; k < j; k++) {
         g.value.stops[k].position = (current + inc * (k - i + 1) / (j - i + 1)) + "px";
       }
     }
     current = parseFloat(s.position);
     var c = (current - parseFloat(g.value.stops[0].position)) /
             (parseFloat(g.value.stops[g.value.stops.length - 1].position) - parseFloat(g.value.stops[0].position));
     str += ", color-stop(" + c + ", " + s.color + ")";
   }
   str += ")"
   return str;
 }

 function FilterRepeatingGradientForOutput(aValue, aEngine)
 {
   if (aEngine == "generic")
     return aValue.substr(5);

   else if (aEngine == "webkit")
     return aValue.replace( /\-moz\-/g , "-webkit-")

   return "";
 }


 /*!
  * css-filters-polyfill.js
  *
  * Author: Christian Schepp Schaefer
  * Summary: A polyfill for CSS filter effects
  * License: MIT
  * Version: 0.22
  *
  * URL:
  * https://github.com/Schepp/
  *
  */
 ;(function(window){
    var polyfilter = {
        // Detect if we are dealing with IE <= 9
        // http://james.padolsey.com/javascript/detect-_ie-in-js-using-conditional-comments/
        _ie:            (function(){
            var undef,
            v = 3,
            div = document.createElement('div'),
            all = div.getElementsByTagName('i');

            while(
                div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
                all[0]
            );

            return v > 4 ? v : undef;
        }()),

        _svg_cache:         {},

        _create_svg_element: function(tagname,attributes){
            var xmlns = 'http://www.w3.org/2000/svg';
            var elem = document.createElementNS(xmlns,tagname);
            for(key in attributes){
                elem.setAttributeNS(null,key,attributes[key]);
            }

            return elem;
        },

        _create_svg:    function(id,filterelements){
            var xmlns = 'http://www.w3.org/2000/svg';
            var svg = document.createElementNS(xmlns,'svg');
            svg.setAttributeNS(null,'width','0');
            svg.setAttributeNS(null,'height','0');
            svg.setAttributeNS(null,'style','position:absolute');

            var svg_filter = document.createElementNS(xmlns,'filter');
            svg_filter.setAttributeNS(null,'id',id);
            svg.appendChild(svg_filter);

            for(var i = 0; i < filterelements.length; i++){
                svg_filter.appendChild(filterelements[i]);
            }

            return svg;
        },

        _pending_stylesheets: 0,

        _stylesheets:       [],

        _development_mode: (function(){
            if(location.hostname === 'localhost' || location.hostname.search(/.local$/) !== -1 || location.hostname.search(/\d+\.\d+\.\d+\.\d+/) !== -1){
                if(window.console) console.log('Detected localhost or IP address. Assuming you are a developer. Caching of stylesheets is disabled.');
                return true;
            }
            if(window.console) console.log('Caching of stylesheets is enabled. You need to refresh twice to see any changes.');
            return false;
        })(),

        process_stylesheets: function(){
            var xmlHttp = [];

            // Check if path to library is correct, do that 2 secs. after this to not disturb initial processing
            window.setTimeout(function(){
                if (window.XMLHttpRequest) {
                    var xmlHttpCheck = new XMLHttpRequest();
                } else if (window.ActiveXObject) {
                    var xmlHttpCheck = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlHttpCheck.open('GET', window.polyfilter_scriptpath + 'htc/sepia.htc', true);
                xmlHttpCheck.onreadystatechange = function(){
                    if(xmlHttp.readyState == 4 && xmlHttp.status != 200){
                        alert('The configured path \r\rvar polyfilter_scriptpath = "' + window.polyfilter_scriptpath + '"\r\rseems wrong!\r\rConfigure the polyfill\'s correct absolute(!) script path before referencing the css-filters-polyfill.js, like so:\r\rvar polyfilter_scriptpath = "/js/css-filters-polyfill/";\r\rLeaving IE dead in the water is no option. You damn Mac user... ;)');
                    }
                };
                try{
                    xmlHttpCheck.send(null);
                } catch(e){}
            },2000);


            var stylesheets = document.querySelectorAll ? document.querySelectorAll('style,link[rel="stylesheet"]') : document.getElementsByTagName('*');

            for(var i = 0; i < stylesheets.length; i++){
                (function(i){
                    switch(stylesheets[i].nodeName){
                        default:
                        break;

                        case 'STYLE':
                            polyfilter._stylesheets.push({
                                media:      stylesheets[i].media || 'all',
                                content:    stylesheets[i].innerHTML
                            });
                        break;

                        case 'LINK':
                            if(stylesheets[i].rel === 'stylesheet'){
                                var index = polyfilter._stylesheets.length;

                                polyfilter._stylesheets.push({
                                    media:      stylesheets[i].media || 'all'
                                });

                                polyfilter._pending_stylesheets++;

                                // Fetch external stylesheet
                                var href = stylesheets[i].href;

                                // Use localStorage as cache for stylesheets, if available
                                if(!polyfilter._development_mode && window.localStorage && window.localStorage.getItem('polyfilter_' + href)){
                                    polyfilter._pending_stylesheets--;
                                    polyfilter._stylesheets[index].content = localStorage.getItem('polyfilter_' + href);
                                    if(polyfilter._pending_stylesheets === 0){
                                        polyfilter.process();
                                    }
                                }

                                // Always fetch stylesheets to reflect possible changes
                                try{
                                    if(window.XMLHttpRequest) {
                                        var xmlHttp = new XMLHttpRequest();
                                    } else if(window.ActiveXObject) {
                                        var xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                                    }
                                    xmlHttp.open('GET', href, true);
                                    xmlHttp.onreadystatechange = function(){
                                        if(xmlHttp.readyState === 4){
                                            if(xmlHttp.status === 0){
                                                if(window.console) console.log('Could not fetch external CSS via HTTP-Request ' + href + '. Probably because of cross origin.');
                                                if(!polyfilter._stylesheets[index].content){
                                                    polyfilter._pending_stylesheets--;
                                                    polyfilter._stylesheets[index].content = xmlHttp.responseText;
                                                    if(polyfilter._pending_stylesheets === 0){
                                                        polyfilter.process();
                                                    }
                                                }
                                            } else {
                                                if(!polyfilter._stylesheets[index].content){
                                                    polyfilter._pending_stylesheets--;
                                                    polyfilter._stylesheets[index].content = xmlHttp.responseText;
                                                    if(polyfilter._pending_stylesheets === 0){
                                                        polyfilter.process();
                                                    }
                                                }
                                                // Cache stylesheet in localStorage, if available
                                                if(!polyfilter._development_mode && window.localStorage){
                                                    try{
                                                        window.localStorage.setItem('polyfilter_' + href,polyfilter._stylesheets[index].content)
                                                    }
                                                    catch(e){
                                                        if(window.console) console.log('Local storage quota have been exceeded. Caching of stylesheet ' + href + ' is not possible');
                                                    }
                                                }
                                            }
                                        }
                                    };
                                    try{
                                        xmlHttp.send(null);
                                    } catch(e){
                                        if(window.console) console.log('Could not fetch external CSS via HTTP-Request ' + href + '. Are you maybe testing using the file://-protocol?');
                                        if(!polyfilter._stylesheets[index].content){
                                            polyfilter._pending_stylesheets--;
                                            if(polyfilter._pending_stylesheets === 0){
                                                polyfilter.process();
                                            }
                                        }
                                    }
                                } catch(e){}
                            }
                        break;
                    }
                })(i);
            }
            if(this._pending_stylesheets === 0){
                this.process();
            }
        },

        _processDeclarations:   function(rule){
            var newstyles = '';
            for(var k in rule.declarations){
                var declaration = rule.declarations[k];

                if(declaration.property === 'filter'){

                    if(document.querySelectorAll){
                        var elems = document.querySelectorAll(rule.mSelectorText);
                        for(var k = 0; k < elems.length; k++){
                            elems[k].style.polyfilterStore = declaration.valueText;
                        }
                    }

                    var gluedvalues = declaration.valueText;
                    var values = gluedvalues.split(/\)\s+/),
                        properties = {
                            filtersW3C:     [],
                            filtersWebKit:  [],
                            filtersSVG:     [],
                            filtersIE:      [],
                            behaviorsIE:    []
                        };

                    for(idx in values){
                        var value = values[idx] + ')';

                        currentproperties = polyfilter.convert(value);

                        for(key in currentproperties){
                            if(typeof properties[key] !== 'undefined'){
                                properties[key] = properties[key].concat(currentproperties[key]);
                            }
                        }
                    }

                    newstyles += rule.mSelectorText + '{';
                    if(properties['filtersW3C'].length > 0){
                        var filter =
                        webkitFilter =
                        mozFilter =
                        oFilter =
                        msFilter =
                        properties['filtersW3C'].join(' ');

                        if(properties['filtersWebKit'] && properties['filtersWebKit'].length > 0){
                            webkitFilter = properties['filtersWebKit'].join(' ');
                        }

                        if(typeof this._ie === 'undefined'){
                            newstyles += '-ms-filter:' + msFilter + ';';
                        }

                        newstyles += '-webkit-filter:' + webkitFilter + ';';
                        newstyles += '-moz-filter:' + mozFilter + ';';
                        newstyles += '-o-filter:' + oFilter + ';';
                    }
                    if(properties['filtersSVG'].length > 0){
                        if(properties['filtersSVG'][0] != 'none'){
                            var id = gluedvalues.replace(/[^a-z0-9]/g,'');

                            if(typeof this._svg_cache[id] === 'undefined'){
                                this._svg_cache[id] = this._create_svg(id,properties['filtersSVG']);

                                if(typeof XMLSerializer === 'undefined'){
                                    document.body.appendChild(this._svg_cache[id]);
                                }
                                else {
                                    var s = new XMLSerializer();
                                    var svgString = s.serializeToString(this._svg_cache[id]);
                                    if(svgString.search('SourceGraphic') != -1){
                                        document.body.appendChild(this._svg_cache[id]);
                                    }
                                }
                            }

                            if(typeof XMLSerializer === 'undefined'){
                                newstyles += 'filter: url(#' + id + ')';
                            }
                            else {
                                var s = new XMLSerializer();
                                var svgString = s.serializeToString(this._svg_cache[id]);

                                if(svgString.search('SourceGraphic') != -1){
                                    newstyles += 'filter: url(#' + id + ')';
                                }
                                else {
                                    newstyles += 'filter: url(\'data:image/svg+xml;utf8,' + svgString + '#' + id + '\')';
                                }
                            }
                        }
                        else {
                            newstyles += 'filter: none;';
                        }
                    }
                    if(typeof this._ie !== 'undefined'){
                        if(properties['filtersIE'].length > 0){
                            var filtersIE = properties['filtersIE'].join(' ');

                            newstyles += 'filter:' + filtersIE + ';';
                        }
                        if(properties['behaviorsIE'].length > 0){
                            var behaviorsIE = properties['behaviorsIE'].join(' ');

                            newstyles += 'behavior:' + behaviorsIE + ';';
                        }
                    }
                    newstyles += '}\r\n';
                }
            }
            return newstyles;
        },

        // Absolute path to the .htc-files
        scriptpath:
            window.polyfilter_scriptpath ? window.polyfilter_scriptpath : (function(){
                alert('Please configure the polyfill\'s absolute(!) script path before referencing the css-filters-polyfill.js, like so:\r\nvar polyfilter_scriptpath = "/js/css-filters-polyfill/";');
                return './'
            })(),

        // process stylesheets
        process:        function(){
            var parser = new CSSParser();

            for(var i = 0; i < this._stylesheets.length; i++){
                var newstyles = '';
                var sheet = parser.parse(this._stylesheets[i].content, false, true);
                if(sheet !== null) for(var j in sheet.cssRules){
                    var rule = sheet.cssRules[j];

                    switch(rule.type){
                        default:
                        break;

                        case 1:
                            newstyles += this._processDeclarations(rule);
                        break;

                        case 4:
                            newstyles += '@media ' + rule.media.join(',') + '{';
                            for(var k in rule.cssRules){
                                var mediarule = rule.cssRules[k];

                                newstyles += this._processDeclarations(mediarule);
                            }
                            newstyles += '}';
                        break;
                    }
                }
                var newstylesheet = document.createElement('style');
                newstylesheet.setAttribute('media',this._stylesheets[i].media);

                if(typeof polyfilter._ie === 'undefined'){
                    newstylesheet.innerHTML = newstyles;
                    document.getElementsByTagName('head')[0].appendChild(newstylesheet);
                }
                else {
                    document.getElementsByTagName('head')[0].appendChild(newstylesheet);
                    newstylesheet.styleSheet.cssText = newstyles;
                }
            }
        },

        init:               function(){
            if(Object.defineProperty){
                Object.defineProperty(CSSStyleDeclaration.prototype, 'polyfilter', {
                    get:    function(){
                        return this.polyfilterStore;
                    },
                    set:    function(gluedvalues){
                        values = gluedvalues.split(/\)\s+/);
                        var properties = {
                            filtersW3C:     [],
                            filtersWebKit:  [],
                            filtersSVG:     [],
                            filtersIE:      [],
                            behaviorsIE:    []
                        }

                        for(idx in values){
                            var value = values[idx] + ')';

                            currentproperties = polyfilter.convert(value);

                            for(key in currentproperties){
                                if(typeof properties[key] !== 'undefined'){
                                    properties[key] = properties[key].concat(currentproperties[key]);
                                }
                            }
                        }

                        if(properties['filtersW3C'].length > 0){
                            if(typeof polyfilter._ie === 'undefined'){
                                this.msFilter =
                                    properties['filtersW3C'].join(' ');
                            }

                            this.webkitFilter =
                            this.mozFilter =
                            this.oFilter =
                                properties['filtersW3C'].join(' ');
                        }
                        if(properties['filtersWebKit'].length > 0){
                            this.webkitFilter = properties['filtersWebKit'].join(' ');
                        }
                        if(properties['filtersSVG'].length > 0){
                            if(properties['filtersSVG'][0] != 'none'){
                                var id = gluedvalues.replace(/[^a-z0-9]/g,'');

                                if(typeof polyfilter._svg_cache[id] === 'undefined'){
                                    polyfilter._svg_cache[id] = polyfilter._create_svg(id,properties['filtersSVG']);

                                    if(typeof XMLSerializer === 'undefined'){
                                        document.body.appendChild(polyfilter._svg_cache[id]);
                                    }
                                    else {
                                        var s = new XMLSerializer();
                                        var svgString = s.serializeToString(polyfilter._svg_cache[id]);
                                        if(svgString.search('SourceGraphic') != -1){
                                            document.body.appendChild(polyfilter._svg_cache[id]);
                                        }
                                    }
                                }

                                if(typeof XMLSerializer === 'undefined'){
                                    this.filter = 'url(#' + id + ')';
                                }
                                else {
                                    var s = new XMLSerializer();
                                    var svgString = s.serializeToString(polyfilter._svg_cache[id]);
                                    if(svgString.search('SourceGraphic') != -1){
                                        this.filter = 'url(#' + id + ')';
                                    }
                                    else {
                                        this.filter = 'url(\'data:image/svg+xml;utf8,' + svgString + '#' + id + '\')';
                                    }
                                }
                            }
                            else {
                                this.filter = 'none';
                            }
                        }
                        if(typeof polyfilter._ie !== 'undefined'){
                            if(properties['filtersIE'].length > 0){
                                this.filter =
                                    properties['filtersIE'].join(' ');
                            }
                            else {
                                this.filter = '';
                            }
                            if(properties['behaviorsIE'].length > 0){
                                this.behavior =
                                    properties['behaviorsIE'].join(' ');
                            }
                            else {
                                this.behavior = '';
                            }
                        }
                        this.polyfilterStore = gluedvalues;
                    }
                });
            }
        },

        convert:            function(value){
            // None
            var fmatch = value.match(/none/i);
            if(fmatch !== null){
                var properties = this.filters.none();
            }
            // Grayscale
            var fmatch = value.match(/(grayscale)\(([0-9\.]+)\)/i);
            if(fmatch !== null){
                var amount = parseFloat(fmatch[2],10),
                    properties = this.filters.grayscale(amount);
            }
            // Sepia
            var fmatch = value.match(/(sepia)\(([0-9\.]+)\)/i);
            if(fmatch !== null){
                var amount = parseFloat(fmatch[2],10),
                    properties = this.filters.sepia(amount);
            }
            // Blur
            var fmatch = value.match(/(blur)\(([0-9]+)[px]*\)/i);
            if(fmatch !== null){
                var amount = parseInt(fmatch[2],10),
                    properties = this.filters.blur(amount);
            }
            // Invert
            var fmatch = value.match(/(invert)\(([0-9\.]+)\)/i);
            if(fmatch !== null){
                var amount = parseFloat(fmatch[2],10),
                    properties = this.filters.invert(amount);
            }
            // Brightness
            var fmatch = value.match(/(brightness)\(([0-9\.]+)%\)/i);
            if(fmatch !== null){
                var amount = parseFloat(fmatch[2],10),
                    properties = this.filters.brightness(amount);
            }
            // Drop Shadow
            var fmatch = value.match(/(drop\-shadow)\(([0-9]+)[px]*\s+([0-9]+)[px]*\s+([0-9]+)[px]*\s+([#0-9]+)\)/i);
            if(fmatch !== null){
                var offsetX = parseInt(fmatch[2],10),
                    offsetY = parseInt(fmatch[3],10),
                    radius = parseInt(fmatch[4],10),
                    color = fmatch[5],
                    properties = this.filters.dropShadow(offsetX,offsetY,radius,color);
            }

            return properties;
        },

        // EFFECTS SECTION -------------------------------------------------------------------------------------------------------------

        filters:        {
            // None
            none:           function(){
                var properties = {};

                if(typeof polyfilter._ie === 'undefined'){
                    // Proposed spec
                    properties['filtersW3C'] = ['none'];

                    // Firefox
                    properties['filtersSVG'] = ['none'];
                }
                else {
                    // IE
                    properties['filtersIE'] = ['none'];
                }

                return properties;
            },

            // Grayscale
            grayscale:          function(amount){
                amount = amount || 0;

                var properties = {};

                if(typeof polyfilter._ie === 'undefined'){
                    // Proposed spec
                    properties['filtersW3C'] = ['grayscale(' + amount + ')'];

                    // Firefox
                    // https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
                    var svg_fe1 = polyfilter._create_svg_element('feColorMatrix',{
                        type:   'matrix',
                        values: (0.2126 + 0.7874 * (1 - amount)) + ' '
                            + (0.7152 - 0.7152 * (1 - amount)) + ' '
                            + (0.0722 - 0.0722 * (1 - amount)) + ' 0 0 '
                            + (0.2126 - 0.2126 * (1 - amount)) + ' '
                            + (0.7152 + 0.2848 * (1 - amount)) + ' '
                            + (0.0722 - 0.0722 * (1 - amount)) + ' 0 0 '
                            + (0.2126 - 0.2126 * (1 - amount)) + ' '
                            + (0.7152 - 0.7152 * (1 - amount)) + ' '
                            + (0.0722 + 0.9278 * (1 - amount)) + ' 0 0 0 0 0 1 0'
                    });
                    properties['filtersSVG'] = [svg_fe1];
                }
                else {
                    // IE
                    properties['filtersIE'] = amount >= 0.5 ? ['gray'] : [];
                }

                return properties;
            },

            // Sepia
            sepia:          function(amount){
                amount = amount || 0;

                var properties = {};

                if(typeof polyfilter._ie === 'undefined'){

                    // Proposed spec
                    properties['filtersW3C'] = ['sepia(' + amount + ')'];

                    // Firefox
                    // https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
                    var svg_fe1 = polyfilter._create_svg_element('feColorMatrix',{
                        type:   'matrix',
                        values: (0.393 + 0.607 * (1 - amount)) + ' '
                            + (0.769 - 0.769 * (1 - amount)) + ' '
                            + (0.189 - 0.189 * (1 - amount)) + ' 0 0 '
                            + (0.349 - 0.349 * (1 - amount)) + ' '
                            + (0.686 + 0.314 * (1 - amount)) + ' '
                            + (0.168 - 0.168 * (1 - amount)) + ' 0 0 '
                            + (0.272 - 0.272 * (1 - amount)) + ' '
                            + (0.534 - 0.534 * (1 - amount)) + ' '
                            + (0.131 + 0.869 * (1 - amount)) + ' 0 0 0 0 0 1 0'
                    });
                    properties['filtersSVG'] = [svg_fe1];
                }
                else {
                    // IE
                    properties['filtersIE'] = amount >= 0.5 ? ['gray','progid:DXImageTransform.Microsoft.Light()'] : [];
                    properties['behaviorsIE'] = amount >= 0.5 ? ['url("' + polyfilter.scriptpath + 'htc/sepia.htc")'] : [];
                }

                return properties;
            },

            // Blur
            blur:           function(amount){
                amount = Math.round(amount) || 0;

                var properties = {};

                if(typeof polyfilter._ie === 'undefined'){
                    // Proposed spec
                    properties['filtersW3C'] = ['blur(' + amount + 'px)'];

                    // Firefox
                    // https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
                    var svg_fe1 = polyfilter._create_svg_element('feGaussianBlur',{
                        'in':           'SourceGraphic',
                        stdDeviation: amount
                    });
                    properties['filtersSVG'] = [svg_fe1];
                }
                else {
                    // IE
                    properties['filtersIE'] = ['progid:DXImageTransform.Microsoft.Blur(pixelradius=' + amount + ')'];
                }

                return properties;
            },

            // Invert
            invert:         function(amount){
                amount = amount || 0;

                var properties = {};

                if(typeof polyfilter._ie === 'undefined'){
                    // Proposed spec
                    properties['filtersW3C'] = ['invert(' + amount + ')'];

                    // Firefox
                    // https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
                    var svg_fe1 = polyfilter._create_svg_element('feComponentTransfer',{});
                    var svg_fe1sub = polyfilter._create_svg_element('feFuncR',{
                        type:   'table',
                        tableValues: amount + ' ' + (1 - amount)
                    });
                    svg_fe1.appendChild(svg_fe1sub);
                    var svg_fe1sub = polyfilter._create_svg_element('feFuncG',{
                        type:   'table',
                        tableValues: amount + ' ' + (1 - amount)
                    });
                    svg_fe1.appendChild(svg_fe1sub);
                    var svg_fe1sub = polyfilter._create_svg_element('feFuncB',{
                        type:   'table',
                        tableValues: amount + ' ' + (1 - amount)
                    });
                    svg_fe1.appendChild(svg_fe1sub);
                    properties['filtersSVG'] = [svg_fe1];
                }
                else {
                    // IE
                    properties['filtersIE'] = amount >= 0.5 ? ['invert'] : [];
                }

                return properties;
            },

            // Brightness
            brightness:         function(amount){
                amount = amount || 0;

                var properties = {};

                if(typeof polyfilter._ie === 'undefined'){
                    // Proposed spec
                    properties['filtersW3C'] = ['brightness(' + amount + '%)'];

                    // WebKit "specialty"
                    properties['filtersWebKit'] = ['brightness(' + (amount - 100) + '%)'];

                    // Firefox
                    // https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
                    var svg_fe1 = polyfilter._create_svg_element('feComponentTransfer',{});
                    var svg_fe1sub = polyfilter._create_svg_element('feFuncR',{
                        type:   'linear',
                        slope:  amount / 100
                    });
                    svg_fe1.appendChild(svg_fe1sub);
                    var svg_fe1sub = polyfilter._create_svg_element('feFuncG',{
                        type:   'linear',
                        slope:  amount / 100
                    });
                    svg_fe1.appendChild(svg_fe1sub);
                    var svg_fe1sub = polyfilter._create_svg_element('feFuncB',{
                        type:   'linear',
                        slope:  amount / 100
                    });
                    svg_fe1.appendChild(svg_fe1sub);
                    properties['filtersSVG'] = [svg_fe1];
                }
                else {
                    // IE
                    properties['filtersIE'] = ['progid:DXImageTransform.Microsoft.Light()'];
                    properties['behaviorsIE'] = ['url("' + polyfilter.scriptpath + 'htc/brightness.htc")'];
                }

                return properties;
            },

            // Drop Shadow
            dropShadow:         function(offsetX,offsetY,radius,color){
                offsetX = Math.round(offsetX) || 0;
                offsetY = Math.round(offsetY) || 0;
                radius = Math.round(radius) || 0;
                color = color || '#000000';

                var properties = {};

                if(typeof polyfilter._ie === 'undefined'){
                    // Proposed spec
                    properties['filtersW3C'] = ['drop-shadow(' + offsetX + 'px ' + offsetY + 'px ' + radius + 'px ' + color + ')'];

                    // Firefox
                    // https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
                    var svg_fe1 = polyfilter._create_svg_element('feGaussianBlur',{
                        'in':       'SourceAlpha',
                        stdDeviation: radius
                    });
                    var svg_fe2 = polyfilter._create_svg_element('feOffset',{
                        dx:     offsetX + 1,
                        dy:     offsetY + 1,
                        result: 'offsetblur'
                    });
                    var svg_fe3 = polyfilter._create_svg_element('feFlood',{
                        'flood-color': color
                    });
                    var svg_fe4 = polyfilter._create_svg_element('feComposite',{
                        in2:    'offsetblur',
                        operator: 'in'
                    });
                    var svg_fe5 = polyfilter._create_svg_element('feMerge',{});
                    var svg_fe5sub = polyfilter._create_svg_element('feMergeNode',{});
                    svg_fe5.appendChild(svg_fe5sub);
                    var svg_fe5sub = polyfilter._create_svg_element('feMergeNode',{
                        'in':       'SourceGraphic'
                    });
                    svg_fe5.appendChild(svg_fe5sub);
                    properties['filtersSVG'] = [svg_fe1,svg_fe2,svg_fe3,svg_fe4,svg_fe5];
                }
                else {
                    // IE
                    properties['filtersIE'] = ['progid:DXImageTransform.Microsoft.Glow(color=' + color + ',strength=0)','progid:DXImageTransform.Microsoft.Shadow(color=' + color + ',strength=0)'];
                    properties['behaviorsIE'] = ['url("' + polyfilter.scriptpath + 'htc/drop-shadow.htc")'];
                }

                return properties;
            }
        }
    }

    // Inialize, either via jQuery...
    if(window.jQuery){
        window.jQuery(document).ready(function(e) {
            polyfilter.process_stylesheets();
        });
    }
    // or via contentLoaded...
    else if(window.contentLoaded){
        contentLoaded(window,function(){
            polyfilter.process_stylesheets();
        });
    }
    // or on DOM ready / load
    else {
        if(window.addEventListener) // W3C standard
        {
            document.addEventListener('DOMContentLoaded', function(){
                polyfilter.process_stylesheets();
            }, false);
        }
        else if(window.attachEvent) // Microsoft
        {
            window.attachEvent('onload', function(){
                polyfilter.process_stylesheets();
            });
        }
    }

    // Install style setters and getters
    polyfilter.init();
 })(window);


 /*
  * Izilla touchMenuHover jQuery plugin v1.6
  * Allows ULs (or any element of your choice) that open on li:hover to open on tap/click on mobile platforms such as iOS, Android, WP7, WP8, BlackBerry, Bada, WebOS, 3DS & WiiU
  *
  * Copyright (c) 2013 Izilla Partners Pty Ltd
  *
  * http://izilla.com.au
  *
  * Licensed under the MIT license
  */
 ;(function(a){a.fn.touchMenuHover=function(j){var f=a.extend({childTag:"ul",closeElement:"",forceiOS:false,openClass:"tmh-open"},j);var d=a(this).find("a"),i="3ds|android|bada|bb10|hpwos|iemobile|kindle fire|opera mini|opera mobi|opera tablet|rim|silk|wiiu",c="|ipad|ipod|iphone",b,g="aria-haspopup",e="html",h;if(f.childTag.toString().toLowerCase()!=="ul"||f.forceiOS){i+=c}b=new RegExp(i,"gi");if(d.length>0&&b.test(navigator.userAgent)){d.each(function(){var m=a(this),l=m.parent("li"),k=l.siblings().find("a");if(m.next(f.childTag).length>0){l.attr(g,true)}m.click(function(o){var n=a(this);o.stopPropagation();k.removeClass(f.openClass);if(!n.hasClass(f.openClass)&&n.next(f.childTag).length>0){o.preventDefault();n.addClass(f.openClass)}})});if(f.closeElement.length>1){e+=","+f.closeElement}h=a(e);if("ontouchstart" in window){h.css("cursor","pointer")}h.click(function(){d.removeClass(f.openClass)})}return this}})(jQuery);

function charLimit(maxLen, thisField) {
    var max = maxLen,
        len = thisField.val().length,
        char = max - len;

    if (len >= max) {
        $(thisField).parent().find('.charsRemain').addClass('limit');
    } else {
        $(thisField).parent().find('.charsRemain').removeClass('limit');
    }

    $(thisField).parent().find('.charsRemain').text(char);
}

/*----------------------------------------------------
*      dynamic window resize function
*----------------------------------------------------*/

function dynamicResizer() {
    if($(window).width() <= 730) {
        $('header > div > nav > ul > li').on('click', function() {
            $(this).children('ul').toggle();
        });

        $('#mobNav').on('click', function() {
            $(this).toggleClass('active');
            $('header > div > nav').slideToggle(200);
        });

        if(Modernizr.touch || $('html.touch').length) {
            $('header > div > nav').touchMenuHover({
                forceiOS: true
            });

            $('.launchContextMenu').on('touchstart', function() {
                $('#rightClickMenu').fadeIn(200);
            });
        }
    }
}

$(window).load(function() {
    dynamicResizer();

    var resizeEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Don't call this twice without a uniqueId";
            }
            if (timers[uniqueId]) {
                clearTimeout (timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();

    $(window).resize(function() {
        resizeEvent(function() {
            dynamicResizer();
        }, 250, 'dynamicResize');
    });
});

/*----------------------------------------------------
*      general
*----------------------------------------------------*/

$(document).ready(function() {
    //hide things we don't need to start with
    $('ul.tree > li.closed').children('ul').hide();
    $('aside').find('ul.tree').hide().first().show();
    $('aside').find('nav.controlsNav ul').hide().first().show();
    $('article').find('section').hide().first().show();

    //are we needing to hide subnav items because we're on small screen?
    if($(window).width() <= 720) {
        $('header > div > nav > ul > li > ul').hide();
        //hide menus if we're loaded on a small screen
        $('header > div > nav').hide();
    }

    //bind right click on "home page" to a contextmenu so we can launch a modal window
    $('.launchContextMenu').bind('contextmenu', function(e){
        e.preventDefault();
        $('#rightClickMenu').fadeIn(200);
        return false;
    });

    $('body').on('click', function() {
        $('#rightClickMenu').fadeOut(200);
    });

    //accordion for contexts/templates/files
    $(document).on('click', 'ul.tree > li > nav > h1', function() {
        if($(this).parents('li').last().hasClass('closed')) {
            $(this).parents('li').last().removeClass('closed').addClass('active');
            $(this).parents('nav').siblings('ul').slideDown(200, 'easeOutQuad');
        } else {
            $(this).parents('li').last().addClass('closed').removeClass('active');
            $(this).parents('nav').siblings('ul').slideUp(200, 'easeOutQuad');
        }
    });

    //set char limit on fields
    $('#pageTitle, #quickPageTitle').on('keyup', function() {
        charLimit(70, $(this));
    });

    $('#pageDescription, #quickPageDescription').on('keyup', function() {
        charLimit(160, $(this));
    });

    //tab nav for sidebar
    $('aside > nav.tabNav li a').on('click', function(e) {
        e.preventDefault();
        var tab = $(this).attr('href');
        var nav = tab.replace('#', '.');

        $('aside').find('ul'+tab).show().siblings('ul.tree').hide();
        $('aside').find('ul'+nav).show().siblings('ul').hide();
        $('aside nav.tabNav li a').removeClass('active');
        $(this).addClass('active');
    });

    //tab nav for main article area
    $('#resourceEdit nav.tabNav li a').on('click', function(e) {
        e.preventDefault();
        var tab = $(this).attr('href');

        $('article').find('section'+tab).show().siblings('section').hide();
        $('#resourceEdit nav.tabNav li a').removeClass('active');
        $(this).addClass('active');
    });

    //johns super dropdownatron for the template select
    $('select').dropdownatron();

    //on search bar focus show example of type ahead results
    $('.awesomeBar').on({
        focus: function() {
            $(this).siblings('ul').slideDown(200);
        },
        blur:  function() {
            $(this).siblings('ul').slideUp(200);
        }
    });

});
