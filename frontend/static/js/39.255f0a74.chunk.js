(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[39],{227:function(t,e,r){t.exports=r(235)},228:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,u,"next",t)}function u(t){n(i,a,o,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return a}))},235:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var a=e&&e.prototype instanceof s?e:s,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l={};function s(){}function f(){}function h(){}var m={};m[a]=function(){return this};var d=Object.getPrototypeOf,p=d&&d(d(L([])));p&&p!==e&&r.call(p,a)&&(m=p);var v=h.prototype=s.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=u(t[a],t,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=v.constructor=h,h.constructor=f,h[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[o]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new g(c(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(v),v[i]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},285:function(t,e,r){"use strict";var n=r(1),a=r(2),o=r(0),i=(r(6),r(3)),c=r(5),u=o.forwardRef((function(t,e){var r=t.classes,c=t.className,u=Object(a.a)(t,["classes","className"]);return o.createElement("div",Object(n.a)({className:Object(i.a)(r.root,c),ref:e},u))}));u.muiName="ListItemSecondaryAction",e.a=Object(c.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(u)},6688:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return P}));var n=r(227),a=r.n(n),o=r(79),i=r(228),c=r(15),u=r(0),l=r.n(u),s=r(107),f=r(192),h=r(149),m=r(194),d=r(285),p=r(197),v=r(211),y=r(56),g=r(213),b=r(216),w=r(212),E=r(110),x=r(257),L=r(256),O=r(40),j=[];function P(){var t=Object(u.useState)(!1),e=Object(c.a)(t,2),r=e[0],n=e[1],P=Object(u.useState)([]),S=Object(c.a)(P,2),k=S[0],_=S[1],N=Object(u.useState)(""),C=Object(c.a)(N,2),G=(C[0],C[1]),A=Object(u.useState)(""),F=Object(c.a)(A,2),T=(F[0],F[1]);function I(){return(I=Object(i.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve(Object(O.c)().getPermissions());case 2:e=t.sent,j=e.data,n(!r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(u.useEffect)((function(){!function(){I.apply(this,arguments)}()}),[]);var R={addPermission:function(t){_([].concat(Object(o.a)(k),[t]))},removePermission:function(t){var e=k.filter((function(e){return e!==t}));_(e)}},W=function(t,e){return l.a.createElement(s.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},l.a.createElement(f.a,{dense:!0,component:"div",role:"list"},t.map((function(t,r){return l.a.createElement(h.a,{onDoubleClick:function(){return R[e.includes("All")?"addPermission":"removePermission"](t.id)},key:r,role:"listitem",button:!0},l.a.createElement(m.a,{primary:t.name}),l.a.createElement(d.a,null,e.includes("All")?l.a.createElement(p.a,{color:"primary",size:"small",onClick:function(){R.addPermission(t.id)}},l.a.createElement(E.g,null)):l.a.createElement(p.a,{color:"secondary",size:"small",onClick:function(){R.removePermission(t.id)}},l.a.createElement(E.f,null))))})),l.a.createElement(h.a,null)))};return l.a.createElement(v.a,null,l.a.createElement("br",null),l.a.createElement(y.a,{variant:"h6"},"Create User Groups"),l.a.createElement("br",null),l.a.createElement(x.b,{initialValues:{},onSubmit:function(t,e){var r=e.setSubmitting;function n(){return(n=Object(i.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.permissions=k.map((function(t){return{id:t}})),t.next=3,Promise.resolve(Object(O.c)().postGroups(e));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(t){n.apply(this,arguments)}(t),setTimeout((function(){r(!1)}),500)},validationSchema:L.a().shape({name:L.c().required("Campo obrigat\xf3rio")})},(function(t){var e=t.values,r=t.touched,n=t.errors,a=(t.dirty,t.isSubmitting,t.handleChange),o=t.handleBlur;t.handleSubmit,t.handleReset,t.setFieldValue;return l.a.createElement(x.a,null,l.a.createElement(g.a,{container:!0,spacing:2},l.a.createElement(g.a,{item:!0,sm:12},l.a.createElement(b.a,{type:"text",variant:"outlined",error:n.name&&r.name,helperText:n.name,onChange:a,onBlur:o,name:"name",value:e.name,margin:"dense",id:"name",fullWidth:!0,label:"Name (*)"})),l.a.createElement(g.a,{item:!0,sm:6},l.a.createElement(b.a,{disabled:!0,type:"text",variant:"outlined",name:"filterAllPermissions",margin:"dense",onChange:function(t){G(t.target.value)},id:"filterAllPermissions",fullWidth:!0,label:"Filter"})),l.a.createElement(g.a,{item:!0,sm:6},l.a.createElement(b.a,{disabled:!0,type:"text",variant:"outlined",name:"filterSelectedPermissions",margin:"dense",onChange:function(t){T(t.target.value)},id:"filterSelectedPermissions",fullWidth:!0,label:"Filter"})),l.a.createElement(g.a,{item:!0,sm:6},W(j.filter((function(t){return!k.includes(t.id)})),"AllPermission")),l.a.createElement(g.a,{item:!0,sm:6},W(k.map((function(t){return j.filter((function(e){return e.id==t}))[0]})),"Permission")),l.a.createElement(g.a,{item:!0,sm:12,style:{paddingTop:"10px"}},l.a.createElement(w.a,null,"Cancel")," \xa0\xa0\xa0",l.a.createElement(w.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))})))}}}]);
//# sourceMappingURL=39.255f0a74.chunk.js.map