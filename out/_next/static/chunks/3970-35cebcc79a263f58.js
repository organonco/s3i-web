"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3970],{99538:function(e,t,n){n.d(t,{F4:function(){return f},iv:function(){return s},xB:function(){return i}});var r=n(86375),o=n(2265),u=n(94645),c=n(7599),a=n(94055);n(83340),n(55487);var i=(0,r.w)(function(e,t){var n=e.styles,i=(0,a.O)([n],void 0,o.useContext(r.T));if(!r.i){for(var s,f=i.name,l=i.styles,y=i.next;void 0!==y;)f+=" "+y.name,l+=y.styles,y=y.next;var m=!0===t.compat,p=t.insert("",{name:f,styles:l},t.sheet,m);return m?null:o.createElement("style",((s={})["data-emotion"]=t.key+"-global "+f,s.dangerouslySetInnerHTML={__html:p},s.nonce=t.sheet.nonce,s))}var d=o.useRef();return(0,c.j)(function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,o=document.querySelector('style[data-emotion="'+e+" "+i.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==o&&(r=!0,o.setAttribute("data-emotion",e),n.hydrate([o])),d.current=[n,r],function(){n.flush()}},[t]),(0,c.j)(function(){var e=d.current,n=e[0];if(e[1]){e[1]=!1;return}if(void 0!==i.next&&(0,u.My)(t,i.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",i,n,!1)},[t,i.name]),null});function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.O)(t)}var f=function(){var e=s.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},13840:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}},1091:function(e,t,n){var r=n(2265);let o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.Z=o},78136:function(e,t,n){var r=n(2265),o=n(1091);t.Z=function(e){let t=r.useRef(e);return(0,o.Z)(()=>{t.current=e}),r.useRef((...e)=>(0,t.current)(...e)).current}},95137:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(2265),o=n(13840);function u(...e){return r.useMemo(()=>e.every(e=>null==e)?null:t=>{e.forEach(e=>{(0,o.Z)(e,t)})},e)}},98495:function(e,t,n){let r;n.d(t,{Z:function(){return l}});var o=n(2265);let u=!0,c=!1,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){e.metaKey||e.altKey||e.ctrlKey||(u=!0)}function s(){u=!1}function f(){"hidden"===this.visibilityState&&c&&(u=!0)}function l(){let e=o.useCallback(e=>{if(null!=e){var t;(t=e.ownerDocument).addEventListener("keydown",i,!0),t.addEventListener("mousedown",s,!0),t.addEventListener("pointerdown",s,!0),t.addEventListener("touchstart",s,!0),t.addEventListener("visibilitychange",f,!0)}},[]),t=o.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){let{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return u||function(e){let{type:t,tagName:n}=e;return"INPUT"===n&&!!a[t]&&!e.readOnly||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(c=!0,window.clearTimeout(r),r=window.setTimeout(()=>{c=!1},100),t.current=!1,!0)},ref:e}}},55487:function(e,t,n){var r=n(15241),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function i(e){return r.isMemo(e)?c:a[e.$$typeof]||o}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=c;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(p){var o=m(n);o&&o!==p&&e(t,o,r)}var c=f(n);l&&(c=c.concat(l(n)));for(var a=i(t),d=i(n),b=0;b<c.length;++b){var v=c[b];if(!u[v]&&!(r&&r[v])&&!(d&&d[v])&&!(a&&a[v])){var h=y(n,v);try{s(t,v,h)}catch(e){}}}}return t}},54150:function(e,t){/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,d=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,h=n?Symbol.for("react.fundamental"):60117,S=n?Symbol.for("react.responder"):60118,g=n?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case l:case u:case a:case c:case m:return e;default:switch(e=e&&e.$$typeof){case s:case y:case b:case d:case i:return e;default:return t}}case o:return t}}}function w(e){return $(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=s,t.ContextProvider=i,t.Element=r,t.ForwardRef=y,t.Fragment=u,t.Lazy=b,t.Memo=d,t.Portal=o,t.Profiler=a,t.StrictMode=c,t.Suspense=m,t.isAsyncMode=function(e){return w(e)||$(e)===f},t.isConcurrentMode=w,t.isContextConsumer=function(e){return $(e)===s},t.isContextProvider=function(e){return $(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return $(e)===y},t.isFragment=function(e){return $(e)===u},t.isLazy=function(e){return $(e)===b},t.isMemo=function(e){return $(e)===d},t.isPortal=function(e){return $(e)===o},t.isProfiler=function(e){return $(e)===a},t.isStrictMode=function(e){return $(e)===c},t.isSuspense=function(e){return $(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===u||e===l||e===a||e===c||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===d||e.$$typeof===i||e.$$typeof===s||e.$$typeof===y||e.$$typeof===h||e.$$typeof===S||e.$$typeof===g||e.$$typeof===v)},t.typeOf=$},15241:function(e,t,n){e.exports=n(54150)}}]);