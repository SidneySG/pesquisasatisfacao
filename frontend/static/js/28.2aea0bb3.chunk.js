(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[28],{227:function(t,e,r){t.exports=r(235)},228:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},235:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l={};function s(){}function f(){}function h(){}var p={};p[o]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(j([])));v&&v!==e&&r.call(v,o)&&(p=v);var m=h.prototype=s.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=m.constructor=h,h.constructor=f,h[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(y.prototype),y.prototype[a]=function(){return this},t.AsyncIterator=y,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new y(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(m),m[i]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},401:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(79),o=r(15),a=r(405),i=r(0),c=r.n(i),u=(r(403),r(264)),l=r(262);function s(){var t=Object(u.a)(["\n  display: grid;\n  grid-gap: ",";\n"]);return s=function(){return t},t}function f(){var t=Object(u.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: ",";\n"]);return f=function(){return t},t}var h=l.a.div(f(),(function(t){return t.gap||"1em"})),p=l.a.div(s(),(function(t){return t.gap||"1em"}));function d(t){var e=t.children,r=t.gap,u=t.minWidth,l=void 0===u?500:u,s=Object(a.a)(t,["children","gap","minWidth"]),f=Object(i.useRef)(),d=Object(i.useState)(3),v=Object(o.a)(d,2),m=v[0],g=v[1],y=Object(n.a)(Array(m)).map((function(){return[]}));!function(t,e){t.forEach((function(t,r){return e[r%e.length].push(t)}))}(e,y);return Object(i.useEffect)((function(){return g(Math.ceil(f.current.offsetWidth/l))}),[]),c.a.createElement(h,Object.assign({ref:f,gap:r},s),Object(n.a)(Array(m)).map((function(t,e){return c.a.createElement(p,{key:e,gap:r},y[e])})))}},410:function(t,e,r){"use strict";var n=r(1),o=r(2),a=r(0),i=(r(6),r(3)),c=r(5),u=r(16),l=a.forwardRef((function(t,e){var r=t.absolute,c=void 0!==r&&r,u=t.classes,l=t.className,s=t.component,f=void 0===s?"hr":s,h=t.flexItem,p=void 0!==h&&h,d=t.light,v=void 0!==d&&d,m=t.orientation,g=void 0===m?"horizontal":m,y=t.role,b=void 0===y?"hr"!==f?"separator":void 0:y,w=t.variant,x=void 0===w?"fullWidth":w,E=Object(o.a)(t,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return a.createElement(f,Object(n.a)({className:Object(i.a)(u.root,l,"fullWidth"!==x&&u[x],c&&u.absolute,p&&u.flexItem,v&&u.light,"vertical"===g&&u.vertical),role:b,ref:e},E))}));e.a=Object(c.a)((function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(u.c)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(l)},6652:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return j}));var n=r(264),o=r(227),a=r.n(o),i=r(228),c=r(15),u=r(0),l=r.n(u),s=r(217),f=r(55),h=r(410),p=r(202),d=r(26),v=r(190),m=r(56),g=r(401),y=r(262);function b(){var t=Object(n.a)(["\n  border-radius: 8px;\n  place-content: center;\n  display: grid;\n  color: white;\n  cursor: pointer;\n  max-width: 50vw;\n  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);\n  background-color: #551a8b;\n  padding: 20px;\n"]);return b=function(){return t},t}Object(v.a)((function(t){return{root:{width:"100%",maxWidth:360,backgroundColor:t.palette.background.paper}}}));var w=[],x=null,E={};function j(){var t=Object(u.useState)(!1),e=Object(c.a)(t,2),r=e[0],n=e[1],o=Object(u.useState)(!1),v=Object(c.a)(o,2),y=v[0],b=v[1];function j(){return(j=Object(i.a)(a.a.mark((function t(){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!1),n(!0),x=window.location.href.split("/"),x=atob(x[x.length-1].split("-").join("/")),t.next=6,Promise.resolve(Object(m.c)().getOrganisationUnitByID(x));case 6:if(e=t.sent,!((E=e.data[0]).attributeSets.length>0)){t.next=13;break}return t.next=11,Promise.resolve(Object(m.c)().getFormsByAttributeSetID(E.attributeSets));case 11:r=t.sent,w=r.data;case 13:b(!0),n(!1);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(u.useEffect)((function(){w=[],E={},function(){j.apply(this,arguments)}()}),[]),l.a.createElement("div",{style:{padding:"60px 10px"}},y&&Boolean(E.logo)&&l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",{style:{maxWidth:"250px",maxHeight:"50vh"},src:"".concat(Object(m.b)(),"/static/orgunits/thumbnails/").concat(E.logo)})),l.a.createElement(s.a,{style:{padding:"15px",textAlign:"center"}},l.a.createElement(f.a,{variant:"h6"},E.displayName),l.a.createElement(f.a,{variant:"button"},E.shortName)),l.a.createElement(h.a,null),y&&0==w.length&&l.a.createElement(O,{style:{minWidth:"calc(100% - 40px)"}},l.a.createElement(f.a,{variant:"h6"},"N\xe3o existem fichas para esta institui\xe7\xe3o")),r&&l.a.createElement(s.a,{style:{width:"100%",textAlign:"center"}},l.a.createElement(p.a,null)),w.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{variant:"h6",style:{paddingBottom:"7px"}},"Fichas"),l.a.createElement(g.a,{minWidth:300},w.map((function(t,e){var r=btoa(x+"-"+t.id).split("/").join("-");return l.a.createElement(O,{key:e},l.a.createElement(d.b,{style:{textDecoration:"none",color:"#fff",textAlign:"center",position:"relative",top:"0px"},to:Boolean(t.type)?"/cform/".concat(r):"/formulario/".concat(r)},l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{variant:"button"},t.displayName),l.a.createElement(f.a,null,t.description))))})))))}var O=y.a.div(b())}}]);
//# sourceMappingURL=28.2aea0bb3.chunk.js.map