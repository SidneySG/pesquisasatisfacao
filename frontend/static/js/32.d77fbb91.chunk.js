(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[32],{227:function(t,e,r){t.exports=r(235)},228:function(t,e,r){"use strict";function n(t,e,r,n,a,i,o){try{var c=t[i](o),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var o=t.apply(e,r);function c(t){n(o,a,i,c,u,"next",t)}function u(t){n(o,a,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return a}))},235:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var a=e&&e.prototype instanceof s?e:s,i=Object.create(a.prototype),o=new x(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return j()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=b(o,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,o),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l={};function s(){}function f(){}function h(){}var m={};m[a]=function(){return this};var d=Object.getPrototypeOf,p=d&&d(d(O([])));p&&p!==e&&r.call(p,a)&&(m=p);var v=h.prototype=s.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(a,i){function o(){return new e((function(n,o){!function n(a,i,o,c){var l=u(t[a],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,o,c)}),(function(t){n("throw",t,o,c)})):e.resolve(f).then((function(t){s.value=t,o(s)}),(function(t){return n("throw",t,o,c)}))}c(l.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=v.constructor=h,h.constructor=f,h[o]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,o in t||(t[o]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new g(c(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},y(v),v[o]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;w(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},278:function(t,e,r){"use strict";var n=r(1),a=r(2),i=r(0),o=(r(6),r(3)),c=r(5),u=i.forwardRef((function(t,e){var r=t.classes,c=t.className,u=Object(a.a)(t,["classes","className"]);return i.createElement("div",Object(n.a)({className:Object(o.a)(r.root,c),ref:e},u))}));u.muiName="ListItemSecondaryAction",e.a=Object(c.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(u)},6685:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return _}));var n=r(79),a=r(227),i=r.n(a),o=r(228),c=r(15),u=r(0),l=r.n(u),s=r(107),f=r(192),h=r(149),m=r(194),d=r(278),p=r(197),v=r(211),y=r(55),g=r(213),b=r(216),E=r(212),w=r(6642),x=r(110),O=r(257),j=r(256),L=r(56),N=[],S=[],k={};function _(){var t=Object(u.useState)({}),e=Object(c.a)(t,2),r=e[0],a=e[1],_=Object(u.useState)(!0),A=Object(c.a)(_,2),C=A[0],T=A[1],P=Object(u.useState)([]),W=Object(c.a)(P,2),F=W[0],G=W[1],I=Object(u.useState)([]),U=Object(c.a)(I,2),B=U[0],R=U[1],q=Object(u.useState)(!1),z=Object(c.a)(q,2);z[0],z[1];Object(u.useEffect)((function(){function t(){return(t=Object(o.a)(i.a.mark((function t(){var e,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.location.href.split("/"),e=atob(e[e.length-1]),t.next=4,Promise.all([Object(L.c)().getOrganisationUnits(),Object(L.c)().getAttributes(),Object(L.c)().getAttributeSetById(e)]);case 4:return r=t.sent,k=r[2].data,N=r[0].data,t.next=9,r[1].data;case 9:S=t.sent,G(k.attributes.map((function(t){return t.id}))),a({name:k.name,displayName:k.displayName,shortName:k.shortName}),T(!1);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var Y={addAttribute:function(t){G([].concat(Object(n.a)(F),[t]))},removeAttribute:function(t){var e=F.filter((function(e){return e!==t}));G(e)},addOrgUnit:function(t){R([].concat(Object(n.a)(B),[t]))},removeOrgUnit:function(t){var e=B.filter((function(e){return e!==t}));R(e)}},D=function(t,e){return l.a.createElement(s.a,{elevation:0,style:{border:"1px solid #c4c4c4",borderRadius:"5px",width:"100%",height:280,overflow:"auto"},square:!0},l.a.createElement(f.a,{dense:!0,component:"div",role:"list"},t.map((function(t,r){return l.a.createElement(h.a,{onDoubleClick:function(){return Y["remove".concat(e)](t.id)},key:r,role:"listitem",button:!0},l.a.createElement(m.a,{primary:"".concat(r+1," - ").concat(t.name)}),l.a.createElement(d.a,null,l.a.createElement(p.a,{color:"secondary",size:"small",onClick:function(){Y["remove".concat(e)](t.id)}},l.a.createElement(x.f,null))))})),l.a.createElement(h.a,null)))};return l.a.createElement(l.a.Fragment,null,!C&&l.a.createElement(v.a,null,l.a.createElement(y.a,{variant:"h6"},"Edit Attribute set"),l.a.createElement("br",null),l.a.createElement(O.b,{initialValues:r,onSubmit:function(t,e){var r=e.setSubmitting;function n(){return(n=Object(o.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.attributes=F.map((function(t){return{id:t}})),e.orgUnits=B.map((function(t){return{id:t}})),t.next=4,Promise.resolve(Object(L.c)().putAttributeSet(k.id,e));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(t){n.apply(this,arguments)}(t),setTimeout((function(){r(!1)}),500)},validationSchema:j.a().shape({name:j.c().required("Campo obrigat\xf3rio"),shortName:j.c().required("Campo obrigat\xf3rio")})},(function(t){var e=t.values,r=t.touched,n=t.errors,a=(t.dirty,t.isSubmitting,t.handleChange),i=t.handleBlur;t.handleSubmit,t.handleReset,t.setFieldValue;return l.a.createElement(O.a,null,l.a.createElement(g.a,{container:!0,spacing:2},l.a.createElement(g.a,{item:!0,sm:12},l.a.createElement(b.a,{type:"text",variant:"outlined",error:n.name&&r.name,helperText:n.name,onChange:a,onBlur:i,value:e.name,margin:"dense",id:"name",fullWidth:!0,label:"Name (*)"})),l.a.createElement(g.a,{item:!0,sm:12},l.a.createElement(b.a,{type:"text",variant:"outlined",error:n.displayName&&r.displayName,helperText:n.displayName,onChange:a,onBlur:i,value:e.displayName,margin:"dense",id:"displayName",fullWidth:!0,label:"Display Name"})),l.a.createElement(g.a,{item:!0,sm:12},l.a.createElement(b.a,{type:"text",error:n.shortName&&r.shortName,helperText:n.shortName,onChange:a,onBlur:i,variant:"outlined",value:e.shortName,margin:"dense",id:"shortName",fullWidth:!0,label:"Shortname (*)"})),l.a.createElement(g.a,{item:!0,sm:12},l.a.createElement(w.a,{onChange:function(t,e){Boolean(e)&&Y.addAttribute(e.id)},getOptionLabel:function(t){return t.displayName},fullWidth:!0,id:"attributes",size:"small",options:S.filter((function(t){return!F.includes(t.id)})),style:{minWidth:200},renderInput:function(t){return l.a.createElement(b.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},t,{label:"Add attributes"}))}})),l.a.createElement(g.a,{item:!0,sm:12},D(F.map((function(t){return S.filter((function(e){return e.id==t}))[0]})),"Attribute")),l.a.createElement(g.a,{item:!0,sm:12},l.a.createElement(w.a,{onChange:function(t,e){Boolean(e)&&Y.addOrgUnit(e.id)},getOptionLabel:function(t){return t.displayName},fullWidth:!0,id:"orgUnits",size:"small",options:N.filter((function(t){return!B.includes(t.id)})),style:{minWidth:200},renderInput:function(t){return l.a.createElement(b.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},t,{label:"Add orgUnits"}))}})),l.a.createElement(g.a,{item:!0,sm:12},D(B.map((function(t){return N.filter((function(e){return e.id==t}))[0]})),"OrgUnit")),l.a.createElement(g.a,{item:!0,sm:12,style:{paddingTop:"10px"}},l.a.createElement(E.a,null,"Cancel")," \xa0\xa0\xa0",l.a.createElement(E.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))}))),l.a.createElement("br",null))}}}]);
//# sourceMappingURL=32.d77fbb91.chunk.js.map