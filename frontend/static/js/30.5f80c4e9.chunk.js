(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[30],{228:function(t,e,r){t.exports=r(256)},229:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},256:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l={};function s(){}function f(){}function h(){}var d={};d[o]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(L([])));m&&m!==e&&r.call(m,o)&&(d=m);var v=h.prototype=s.prototype=Object.create(d);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=v.constructor=h,h.constructor=f,h[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new g(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(v),v[i]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},278:function(t,e,r){"use strict";var n=r(1),o=r(2),a=r(0),i=(r(6),r(4)),c=r(5),u=a.forwardRef((function(t,e){var r=t.classes,c=t.className,u=Object(o.a)(t,["classes","className"]);return a.createElement("div",Object(n.a)({className:Object(i.a)(r.root,c),ref:e},u))}));u.muiName="ListItemSecondaryAction",e.a=Object(c.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(u)},6666:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return N}));var n=r(228),o=r.n(n),a=r(229),i=r(15),c=r(0),u=r.n(c),l=r(12),s=r(107),f=r(192),h=r(149),d=r(194),p=r(278),m=r(197),v=r(211),y=r(56),g=r(213),w=r(216),E=r(212),b=r(40),x=r(110),L=[],O=[],j={};function N(t){var e=Object(c.useState)(!1),r=Object(i.a)(e,2),n=r[0],N=r[1],k=Object(c.useState)({changeRoute:!1,to:""}),C=Object(i.a)(k,2),_=C[0],S=C[1],P=Object(c.useState)(!0),G=Object(i.a)(P,2),F=(G[0],G[1]);function R(){return(R=Object(a.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve(Object(b.c)().getDashboards());case 2:e=t.sent,L=e.data,F(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(c.useEffect)((function(){L=[],O=[],function(){R.apply(this,arguments)}()}),[]);var A={addChart:function(t){O.push(t),N(!n)},removeChart:function(t){O=O.filter((function(e){return e!==t})),N(!n)}};function D(){return(D=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j.dashboardElements=O.map((function(t,e){return{dashboard:{id:t},order:e}})),e.next=3,Promise.resolve(Object(b.c)().postDashboardColecction(j));case 3:t.messageBox("Colec\xe7\xe3o criada com exito!"),S({to:"dashboardCollection",changeRoute:!0});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(t,e){return u.a.createElement(s.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},u.a.createElement(f.a,{dense:!0,component:"div",role:"list"},t.map((function(t,r){return u.a.createElement(h.a,{onDoubleClick:function(){return A[e](t.id)},key:r,role:"listitem",button:!0},u.a.createElement(d.a,{primary:t.displayName}),u.a.createElement(p.a,null,u.a.createElement(m.a,{color:e.includes("add")?"primary":"secondary",size:"small",onClick:function(){A[e](t.id)}},e.includes("remove")?u.a.createElement(x.g,null):u.a.createElement(x.h,null))))})),u.a.createElement(h.a,null)))};return _.changeRoute?u.a.createElement(l.a,{to:_.to}):u.a.createElement(v.a,null,u.a.createElement(y.a,{variant:"h6"},"Criar colleco de graficos"),u.a.createElement(g.a,{container:!0,spacing:2},u.a.createElement(g.a,{item:!0,sm:12},u.a.createElement(w.a,{variant:"outlined",id:"name",label:"Nome",value:j.name,margin:"dense",fullWidth:!0,onChange:function(t){j.name=t.target.value}})),u.a.createElement(g.a,{item:!0,sm:12},u.a.createElement(w.a,{id:"displayName",label:"Diaplay name",fullWidth:!0,margin:"dense",value:j.displayName,variant:"outlined",onChange:function(t){j.displayName=t.target.value}})),u.a.createElement(g.a,{item:!0,sm:12},u.a.createElement(w.a,{id:"description",rows:4,multiline:!0,label:"Description",margin:"dense",value:j.description,variant:"outlined",fullWidth:!0,onChange:function(t){j.description=t.target.value}})),u.a.createElement(g.a,{item:!0,sm:6},I(L.filter((function(t){return!O.includes(t.id)})),"addChart")),u.a.createElement(g.a,{item:!0,sm:6},I(O.map((function(t){return L.filter((function(e){return e.id==t}))[0]})),"removeChart")),u.a.createElement(g.a,{item:!0,style:{textAlign:"right"},sm:12},u.a.createElement(E.a,{color:"secondary"},"Cancelar"),"\xa0\xa0",u.a.createElement(E.a,{onClick:function(){return D.apply(this,arguments)},color:"primary",variant:"contained",disableElevation:!0},"Salvar"))))}}}]);
//# sourceMappingURL=30.5f80c4e9.chunk.js.map