(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[29],{227:function(e,t,n){e.exports=n(235)},228:function(e,t,n){"use strict";function r(e,t,n,r,a,i,o){try{var c=e[i](o),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function c(e){r(o,a,i,c,l,"next",e)}function l(e){r(o,a,i,c,l,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return a}))},235:function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function c(e,t,n,r){var a=t&&t.prototype instanceof s?t:s,i=Object.create(a.prototype),o=new O(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return j()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=b(o,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,o),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}e.wrap=c;var u={};function s(){}function m(){}function f(){}var p={};p[a]=function(){return this};var h=Object.getPrototypeOf,d=h&&h(h(x([])));d&&d!==t&&n.call(d,a)&&(p=d);var y=f.prototype=s.prototype=Object.create(p);function v(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function g(e,t){var r;this._invoke=function(a,i){function o(){return new t((function(r,o){!function r(a,i,o,c){var u=l(e[a],e,i);if("throw"!==u.type){var s=u.arg,m=s.value;return m&&"object"===typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,o,c)}),(function(e){r("throw",e,o,c)})):t.resolve(m).then((function(e){s.value=e,o(s)}),(function(e){return r("throw",e,o,c)}))}c(u.arg)}(a,i,r,o)}))}return r=r?r.then(o,o):o()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=y.constructor=f,f.constructor=m,f[o]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(g.prototype),g.prototype[i]=function(){return this},e.AsyncIterator=g,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new g(c(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},v(y),y[o]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;w(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(49);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},278:function(e,t,n){"use strict";var r=n(1),a=n(2),i=n(0),o=(n(6),n(3)),c=n(5),l=i.forwardRef((function(e,t){var n=e.classes,c=e.className,l=Object(a.a)(e,["classes","className"]);return i.createElement("div",Object(r.a)({className:Object(o.a)(n.root,c),ref:t},l))}));l.muiName="ListItemSecondaryAction",t.a=Object(c.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(l)},6655:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n(79),a=n(227),i=n.n(a),o=n(259),c=n(228),l=n(15),u=n(0),s=n.n(u),m=n(211),f=n(213),p=n(55),h=n(216),d=n(209),y=n(212),v=n(107),g=n(192),b=n(149),E=n(194),w=n(278),O=n(197),x=n(6642),j=n(110),L=n(257),N=(n(256),n(56));function S(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}var k=[],P=null,C=[],T={};function _(){var e=Object(u.useState)(!1),t=Object(l.a)(e,2),n=(t[0],t[1]),r=Object(u.useState)(!1),a=Object(l.a)(r,2),v=a[0],g=a[1];function b(){return(b=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,Promise.resolve(Object(N.c)().getAttributeSet());case 3:t=e.sent,k=t.data,n(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[]),s.a.createElement(m.a,null,s.a.createElement(f.a,{container:!0},s.a.createElement(f.a,{item:!0,sm:12},s.a.createElement(p.a,{variant:"h6",color:"initial"},"Organize your form"))),s.a.createElement(L.b,{initialValues:T,onSubmit:function(e,t){var n=t.setSubmitting;function r(){return(r=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.attributeSet=t.attributeSet.id,t.sections=C.map((function(e,t){return delete e.section,delete e.attributes,Object(o.a)({},e,{order:t+1})})),e.next=4,Promise.resolve(Object(N.c)().postForm(JSON.stringify(t)));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){r.apply(this,arguments)}(e),setTimeout((function(){n(!1)}),500)}},(function(e){var t=e.values,n=e.touched,r=e.errors,a=(e.dirty,e.isSubmitting,e.handleChange),i=e.handleBlur,o=(e.handleSubmit,e.handleReset,e.setFieldValue);return s.a.createElement(L.a,null,s.a.createElement(f.a,{container:!0},s.a.createElement(f.a,{item:!0,sm:12},s.a.createElement(h.a,{value:t.name,variant:"outlined",error:r.name&&n.name,helperText:r.name,onChange:a,margin:"dense",onBlur:i,name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(f.a,{item:!0,sm:12},s.a.createElement(h.a,{value:t.displayName,variant:"outlined",error:r.displayName&&n.displayName,helperText:r.displayName,onChange:a,margin:"dense",onBlur:i,name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(f.a,{item:!0,sm:12},s.a.createElement(x.a,{onChange:function(e,t){P=t,o("attributeSet",t)},value:t.attributeSet,fullWidth:!0,id:"attributeSet",getOptionLabel:function(e){return e.displayName},options:k,style:{minWidth:200},renderInput:function(e){return s.a.createElement(h.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"AttributeSet"}))}})),s.a.createElement(f.a,{item:!0,sm:12},s.a.createElement(h.a,{value:t.name,variant:"outlined",select:!0,error:r.name&&n.name,helperText:r.name,onChange:a,margin:"dense",onBlur:i,name:"type",fullWidth:!0,placeholder:"Type",label:"Type",type:"text"},s.a.createElement(d.a,{value:"default"},"Default"),s.a.createElement(d.a,{value:"staged"},"Staged"))),s.a.createElement(f.a,{item:!0,sm:12},s.a.createElement(h.a,{value:t.description,variant:"outlined",multiline:!0,rows:4,error:r.description&&n.description,helperText:r.description,onChange:a,margin:"dense",onBlur:i,name:t.description,fullWidth:!0,placeholder:"Sua resposta",type:"text"})),s.a.createElement(f.a,{item:!0,sm:6},s.a.createElement(p.a,{variant:"button",color:"initial"},"Sections")),s.a.createElement(f.a,{item:!0,sm:6,style:{textAlign:"right",paddingBottom:"7px"}},s.a.createElement(y.a,{variant:"contained",size:"small",disableElevation:!0,disabled:!P,onClick:function(){C.push({attributes:P.entity.attributes,entity:P.entity,section:C.length+1}),g(!v)},color:"primary"},"Add entity section")," \xa0",s.a.createElement(y.a,{variant:"contained",size:"small",disableElevation:!0,disabled:!P,onClick:function(){C.push({attributes:P.attributes,section:C.length+1}),g(!v)},color:"primary"},"Add default section")),C.map((function(e,t){return s.a.createElement(f.a,{key:t,item:!0,sm:12},s.a.createElement(D,{attributes:e.attributes,id:e.section}))})),s.a.createElement(f.a,{item:!0,sm:12,style:{paddingTop:"15px",textAlign:"right"}},s.a.createElement(y.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))})))}function D(e){var t=e.id,n=e.attributes,a=s.a.useState([]),i=Object(l.a)(a,2),o=i[0],c=i[1],m=s.a.useState([]),p=Object(l.a)(m,2),d=p[0],y=p[1],x=Object(u.useState)(""),L=Object(l.a)(x,2),N=L[0],k=(L[1],{entity:!0}),P={},T={};var _={elementsUp:function(e){y([].concat(Object(r.a)(d),[e])),c(S(o,e)),C.forEach((function(n,a){n.section==t&&(C[a].fields=[].concat(Object(r.a)(d),[e]).map((function(e,t){return{order:t+1,attribute:e}})))}))},elementsDown:function(e){c(o.concat(e)),y(S(d,e)),C.forEach((function(n,r){n.section==t&&(C[r].fields=S(d,e).map((function(e,t){return{order:t+1,attribute:e}})))}))}},D=function(e,t){return s.a.createElement(v.a,{elevation:0,style:{border:"1px solid #eee",width:"100%",height:280,overflow:"auto"},square:!0},s.a.createElement(g.a,{dense:!0,component:"div",role:"list"},e.map((function(e,n){return s.a.createElement(b.a,{onDoubleClick:function(){return _[t](e.id)},key:n,role:"listitem",button:!0},s.a.createElement(E.a,{primary:t.includes("Down")?"".concat(n+1," - ").concat(e.name):e.name}),s.a.createElement(w.a,null,t.includes("Up")?s.a.createElement(O.a,{color:"primary",size:"small",onClick:function(){return _[t](e.id)}},s.a.createElement(j.g,null)):s.a.createElement(O.a,{color:"secondary",size:"small",onClick:function(){return _[t](e.id)}},s.a.createElement(j.f,null))))})),s.a.createElement(b.a,null)))};function A(e){C.forEach((function(n,r){n.section==t&&(C[r][e.target.name]=e.target.value)}))}return s.a.createElement(v.a,{variant:"outlined",style:{padding:"12px",marginBottom:"25px"}},s.a.createElement(f.a,{container:!0,spacing:2},s.a.createElement(f.a,{item:!0,sm:12},s.a.createElement(h.a,{value:k.name,variant:"outlined",error:P.name&&T.name,helperText:P.name,onChange:A,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(f.a,{item:!0,sm:12},s.a.createElement(h.a,{value:k.displayName,variant:"outlined",error:P.displayName&&T.displayName,helperText:P.displayName,onChange:A,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(f.a,{item:!0,sm:6},D(n.filter((function(e){return!d.includes(e.id)})).filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())})),"elementsUp")),s.a.createElement(f.a,{item:!0,sm:6},D(d.map((function(e){return n.filter((function(t){return t.id==e}))[0]})),"elementsDown"))))}}}]);
//# sourceMappingURL=29.d1290189.chunk.js.map