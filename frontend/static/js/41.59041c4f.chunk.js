(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[41],{227:function(e,t,n){e.exports=n(235)},228:function(e,t,n){"use strict";function r(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function l(e){r(i,a,o,l,c,"next",e)}function c(e){r(i,a,o,l,c,"throw",e)}l(void 0)}))}}n.d(t,"a",(function(){return a}))},235:function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,n,r){var a=t&&t.prototype instanceof s?t:s,o=Object.create(a.prototype),i=new O(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=b(i,n);if(l){if(l===u)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=c(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}e.wrap=l;var u={};function s(){}function h(){}function p(){}var m={};m[a]=function(){return this};var f=Object.getPrototypeOf,d=f&&f(f(x([])));d&&d!==t&&n.call(d,a)&&(m=d);var g=p.prototype=s.prototype=Object.create(m);function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function v(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,l){var u=c(e[a],e,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(h).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,l)}))}l(u.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=c(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=g.constructor=p,p.constructor=h,p[i]=h.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(v.prototype),v.prototype[o]=function(){return this},e.AsyncIterator=v,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new v(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),g[i]="Generator",g[a]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;w(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},6650:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r=n(227),a=n.n(r),o=n(228),i=n(15),l=n(0),c=n.n(l),u=n(211),s=n(213),h=n(55),p=n(216),m=n(209),f=n(212),d=n(107),g=n(217),y=n(202),v=n(6642),b=n(497),E=n(257),w=(n(256),n(56)),O={height:"450px",width:"100%"},x={fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeOpacity:1,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,geodesic:!1,zIndex:1},j={strokeColor:"#2196F3",fillOpacity:.5,strokeOpacity:1,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,geodesic:!1,zIndex:1},L={lat:-25.953724,lng:32.588711},k=null,N=[],S={},C={},F=[],T=[],_={};function M(e,t){var n=e.target.files,r=new FileReader;r.readAsDataURL(n[0]),r.onloadend=function(){_[t]=r.result}}function P(){var e=Object(l.useState)(null),t=Object(i.a)(e,2),n=(t[0],t[1],Object(l.useState)(!0)),r=Object(i.a)(n,2),P=r[0],U=r[1],W=Object(l.useState)([]),A=Object(i.a)(W,2),I=(A[0],A[1],Object(l.useState)([])),G=Object(i.a)(I,2),R=G[0],B=G[1],z=Object(l.useState)([]),J=Object(i.a)(z,2),D=J[0],V=(J[1],Object(l.useState)([])),Y=Object(i.a)(V,2),H=(Y[0],Y[1],Object(l.useState)(!1)),q=Object(i.a)(H,2),K=(q[0],q[1]),Q=c.a.useState({drawingMode:"polygon"}),X=Object(i.a)(Q,2),Z=(X[0],X[1]);function $(e){U(!1),k=e.target.files[0];var t=new FileReader;k=t.readAsText(k),t.onload=function(){var e=JSON.parse(t.result),n=[],r=[];N=e.features[0].geometry.coordinates[0][0].map((function(e){return n.push(e[1]),r.push(e[0]),{lng:e[0],lat:e[1]}}));var a=(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2,o=(Math.min.apply(Math,r)+Math.max.apply(Math,r))/2;L={lat:a,lng:o},S.coordenadas=N,B(N),U(!0)}}Object(l.useEffect)((function(){function e(){return(e=Object(o.a)(a.a.mark((function e(){var t,n,r,o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.next=3,Promise.all([Object(w.c)().getOrganisationUnits(),Object(w.c)().getOrganisationUnitLevels(),Object(w.c)().getOrganisationUnitTypes()]);case 3:t=e.sent,n=Object(i.a)(t,3),r=n[0],o=n[1],l=n[2],F=r.data,o.data,T=l.data,K(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var ee=function(e){};return c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement(u.a,null,c.a.createElement(E.b,{initialValues:C,onSubmit:function(e,t){var n=t.setSubmitting;function r(){return(r=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(_).forEach((function(e){t[e]=_[e]})),e.next=3,Promise.resolve(Object(w.c)().postOrganisationUnits(JSON.stringify(t)));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){r.apply(this,arguments)}(e),setTimeout((function(){n(!1)}),500)}},(function(e){var t=e.values,n=e.touched,r=e.errors,a=(e.dirty,e.isSubmitting,e.handleChange),o=e.handleBlur,i=(e.handleSubmit,e.handleReset,e.setFieldValue);return c.a.createElement(E.a,null,c.a.createElement(s.a,{container:!0,spacing:2},c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(h.a,{variant:"h6"},"Facility Registration Form")),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(p.a,{value:t.name,error:r.name&&n.name,helperText:r.name,name:"name",id:"name",margin:"dense",onChange:a,onBlur:o,variant:"outlined",label:"Name (*)",fullWidth:!0})),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(p.a,{value:t.shortName,error:r.shortName&&n.shortName,helperText:r.shortName,name:"shortName",id:"shortName",margin:"dense",onChange:a,onBlur:o,variant:"outlined",label:"ShortName (*)",fullWidth:!0})),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(p.a,{value:t.displayName,error:r.displayName&&n.displayName,helperText:r.displayName,name:"displayName",id:"displayName",margin:"dense",onChange:a,onBlur:o,variant:"outlined",label:"DisplayName (*)",fullWidth:!0})),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(p.a,{label:"Type",fullWidth:!0,select:!0,helperText:r.orgUnitType&&n.orgUnitType,name:"orgUnitType",id:"orgUnitType",variant:"outlined",margin:"dense",onChange:a,onBlur:o},T.map((function(e){return c.a.createElement(m.a,{key:e,value:e},e)})))),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(v.a,{onChange:function(e,t){i("parent",t)},fullWidth:!0,id:"parent",size:"small",getOptionLabel:function(e){return e.displayName},options:F,style:{minWidth:200},renderInput:function(e){return c.a.createElement(p.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Parent (*)"}))}})),c.a.createElement(s.a,{item:!0},c.a.createElement("input",{onChange:function(e){return M(e,"logo")},accept:"image/*",style:{display:"none"},id:"logo-file",multiple:!0,type:"file"}),c.a.createElement("label",{htmlFor:"logo-file"},c.a.createElement(f.a,{variant:"contained",color:"primary",disableElevation:!0,component:"span"},"Upload Logo"))),c.a.createElement(s.a,{item:!0},c.a.createElement("input",{onChange:function(e){return M(e,"bgImage")},accept:"image/*",style:{display:"none"},id:"bg-file",multiple:!0,type:"file"}),c.a.createElement("label",{htmlFor:"bg-file"},c.a.createElement(f.a,{variant:"contained",color:"primary",disableElevation:!0,component:"span"},"Upload Background Image"))),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(p.a,{label:"Description",variant:"outlined",margin:"dense",multiline:!0,fullWidth:!0})),c.a.createElement(s.a,{item:!0,sm:6},c.a.createElement(h.a,{variant:"button",color:"initial"},"Area geogr\xe1fica")),c.a.createElement(s.a,{item:!0,sm:6,style:{textAlign:"right"}},c.a.createElement("label",{htmlFor:"upload-photo"},c.a.createElement("input",{onChange:$,style:{display:"none"},id:"upload-photo",name:"upload-photo",type:"file"}),c.a.createElement(f.a,{disabled:!0,color:"primary",variant:"contained",disableElevation:!0,component:"span"},"Carregar"))),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(d.a,{variant:"outlined",style:{minHeight:"450px"}},P?c.a.createElement(b.c,{libraries:["drawing","places"],id:"script-loader"},c.a.createElement(b.b,{id:"example-map",mapContainerStyle:O,draggable:!0,zoom:13,center:L},c.a.createElement(b.e,{onLoad:ee,paths:R,options:x}),c.a.createElement(b.e,{onLoad:ee,paths:D,options:j}),c.a.createElement(b.a,{drawingMode:"polygon",options:{drawingControl:!0,drawingControlOptions:{drawingModes:["polygon"]},polygonOptions:{fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeWeight:2,clickable:!0,editable:!0,draggable:!0,zIndex:1}},onPolygonComplete:function(e){var t=e.getPath().getArray().map((function(e){return{lat:e.lat(),lng:e.lng()}}));i("coordinates",t),Z((function(e){return Object.assign({},e,{drawingMode:"maker"})}))}}))):c.a.createElement(g.a,{style:{textAlign:"center",marginTop:"220px"}},c.a.createElement(y.a,null)))),c.a.createElement(s.a,{item:!0,sm:12,style:{textAlign:"right"}},c.a.createElement(f.a,{color:"primary",disableElevation:!0,type:"submit",variant:"contained"},"Save"))))}))))}}}]);
//# sourceMappingURL=41.59041c4f.chunk.js.map