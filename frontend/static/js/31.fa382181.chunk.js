(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[31],{227:function(e,t,a){e.exports=a(235)},228:function(e,t,a){"use strict";function n(e,t,a,n,r,i,o){try{var l=e[i](o),c=l.value}catch(s){return void a(s)}l.done?t(c):Promise.resolve(c).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,i){var o=e.apply(t,a);function l(e){n(o,r,i,l,c,"next",e)}function c(e){n(o,r,i,l,c,"throw",e)}l(void 0)}))}}a.d(t,"a",(function(){return r}))},235:function(e,t,a){var n=function(e){"use strict";var t=Object.prototype,a=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function l(e,t,a,n){var r=t&&t.prototype instanceof u?t:u,i=Object.create(r.prototype),o=new O(n||[]);return i._invoke=function(e,t,a){var n="suspendedStart";return function(r,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw i;return j()}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var l=E(o,a);if(l){if(l===s)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var u=c(e,t,a);if("normal"===u.type){if(n=a.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(n="completed",a.method="throw",a.arg=u.arg)}}}(e,a,o),i}function c(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(n){return{type:"throw",arg:n}}}e.wrap=l;var s={};function u(){}function m(){}function d(){}var p={};p[r]=function(){return this};var h=Object.getPrototypeOf,f=h&&h(h(w([])));f&&f!==t&&a.call(f,r)&&(p=f);var y=d.prototype=u.prototype=Object.create(p);function v(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function g(e,t){var n;this._invoke=function(r,i){function o(){return new t((function(n,o){!function n(r,i,o,l){var s=c(e[r],e,i);if("throw"!==s.type){var u=s.arg,m=u.value;return m&&"object"===typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,o,l)}),(function(e){n("throw",e,o,l)})):t.resolve(m).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,l)}))}l(s.arg)}(r,i,n,o)}))}return n=n?n.then(o,o):o()}}function E(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function w(e){if(e){var t=e[r];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=y.constructor=d,d.constructor=m,d[o]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(g.prototype),g.prototype[i]=function(){return this},e.AsyncIterator=g,e.async=function(t,a,n,r,i){void 0===i&&(i=Promise);var o=new g(l(t,a,n,r),i);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},v(y),y[o]="Generator",y[r]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=w,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return o.type="throw",o.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;x(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:w(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(r){Function("r","regeneratorRuntime = r")(n)}},263:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(49);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},285:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),o=(a(6),a(3)),l=a(5),c=i.forwardRef((function(e,t){var a=e.classes,l=e.className,c=Object(r.a)(e,["classes","className"]);return i.createElement("div",Object(n.a)({className:Object(o.a)(a.root,l),ref:t},c))}));c.muiName="ListItemSecondaryAction",t.a=Object(l.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(c)},6672:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z}));var n=a(263),r=a(227),i=a.n(r),o=a(228),l=a(15),c=a(0),s=a.n(c),u=a(12),m=a(211),d=a(213),p=a(56),h=a(216),f=a(209),y=a(212),v=a(220),g=a(197),E=a(107),b=a(157),x=a(192),O=a(149),w=a(194),j=a(285),N=a(218),L=a(6697),C=a(110),S=(a(257),a(256),a(40)),T=[],k=[],W=[],D=[],P=[],_={};function z(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],E=Object(c.useState)(!1),b=Object(l.a)(E,2),x=b[0],O=b[1],w=Object(c.useState)(""),j=Object(l.a)(w,2),L=j[0],z=j[1],R=Object(c.useState)(""),F=Object(l.a)(R,2),G=F[0],I=F[1];function M(){return(M=Object(o.a)(i.a.mark((function e(){var t,a,n,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(S.c)().getOptionSets(),Object(S.c)().getTypes(),Object(S.c)().getControls(),Object(S.c)().getValidationRules()]);case 2:t=e.sent,a=Object(l.a)(t,4),n=a[0],r=a[1],o=a[2],c=a[3],k=o.data,P=r.data,T=n.data,D=c.data;case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){_[e.target.name]=e.target.value}function Y(){return(Y=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _.sections=[],W.forEach((function(e,t){delete e.section,_.sections.push(Object(n.a)({},e,{order:t+1}))})),e.prev=2,e.next=5,Promise.resolve(Object(S.c)().postEntityForm(_));case 5:z("Entidade criada com exito!"),I("success"),O(!0),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),z("Ocorreu um erro na tentativa de criar a entidade!"),I("error"),O(!0);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function B(){if("success"==G)return s.a.createElement(u.a,{to:"/entidades"})}return Object(c.useEffect)((function(){!function(){M.apply(this,arguments)}()}),[]),s.a.createElement(m.a,null,s.a.createElement(d.a,{container:!0},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(p.a,{variant:"h6",color:"initial"},"Create your organized entity form")),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{value:_.name,variant:"outlined",id:"name",onChange:V,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{value:_.displayName,variant:"outlined",id:"displayName",onChange:V,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{value:_.type,variant:"outlined",select:!0,id:"shortName",onChange:V,margin:"dense",name:"type",fullWidth:!0,placeholder:"Type",label:"Type",type:"text"},s.a.createElement(f.a,{value:"default"},"Default"),s.a.createElement(f.a,{value:"staged"},"Staged"))),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{value:_.description,variant:"outlined",multiline:!0,rows:4,id:"description",onChange:V,margin:"dense",name:"description",fullWidth:!0,placeholder:"Description",type:"text"})),s.a.createElement(d.a,{item:!0,sm:6},s.a.createElement(p.a,{variant:"button",color:"initial"},"Sections")),s.a.createElement(d.a,{item:!0,sm:6,style:{textAlign:"right",paddingBottom:"7px"}},s.a.createElement(y.a,{variant:"contained",size:"small",disableElevation:!0,onClick:function(){W.push({section:W.length+1,fields:[]}),r(!a)},color:"primary"},"Add section")),W.map((function(e,t){return s.a.createElement(d.a,{key:t,item:!0,sm:12},s.a.createElement(A,{fields:e.fields,id:e.section}))})),s.a.createElement(d.a,{item:!0,sm:12,style:{paddingTop:"15px",textAlign:"right"}},s.a.createElement(y.a,{disableElevation:!0,onClick:function(){return Y.apply(this,arguments)},color:"primary",variant:"contained"},"Save"))),s.a.createElement(v.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},action:s.a.createElement(g.a,{size:"small","aria-label":"close",color:"inherit",onClick:B},s.a.createElement(C.a,{fontSize:"small"})),open:x,autoHideDuration:3e3,onClose:B},s.a.createElement(N.a,{severity:G},L)))}function A(e){var t=e.id,a=e.fields,n=Object(c.useState)(!1),r=Object(l.a)(n,2),i=r[0],o=r[1],u=Object(c.useState)(!1),m=Object(l.a)(u,2),f=m[0],v=m[1],g={entity:!0},x={},O={};function w(e){W.forEach((function(a,n){a.section==t&&(W[n][e.target.name]=e.target.value)}))}return s.a.createElement(E.a,{variant:"outlined",style:{padding:"12px",marginBottom:"25px"}},s.a.createElement(d.a,{container:!0,spacing:2},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{value:g.name,variant:"outlined",error:x.name&&O.name,helperText:x.name,onChange:w,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{value:g.displayName,variant:"outlined",error:x.displayName&&O.displayName,helperText:x.displayName,onChange:w,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(d.a,{item:!0,sm:6},s.a.createElement(p.a,{variant:"button",color:"initial"},"Fields")),s.a.createElement(d.a,{item:!0,sm:6,style:{textAlign:"right"}},s.a.createElement(y.a,{variant:"contained",size:"small",disableElevation:!0,onClick:function(){W.forEach((function(e,a){e.section==t&&(W[a].fields.push({order:W[a].fields.length+1,validationRules:[]}),o(!i))}))},color:"primary"},"Add Field"),"\xa0",s.a.createElement(y.a,{variant:"contained",size:"small",disableElevation:!0,onClick:function(){v(!0)},color:"primary"},"Add Validation Rule")),a.map((function(e,t){return s.a.createElement(d.a,{key:t,item:!0,sm:4},s.a.createElement(R,{field:e,id:e.field}))}))),s.a.createElement(b.a,{style:{top:"100px"},open:f,onClose:function(){v(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},s.a.createElement(F,null)))}function R(e){e.id;var t=e.field,a={},n={},r={},i=Object(c.useState)(!1),o=Object(l.a)(i,2),u=o[0],m=o[1];function p(e){t[e.target.name]=e.target.value}return s.a.createElement(E.a,{variant:"outlined",style:{padding:"10px"}},s.a.createElement(d.a,{container:!0,spacing:2},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{value:a.name,variant:"outlined",error:n.name&&r.name,helperText:n.name,onChange:p,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{value:a.displayName,variant:"outlined",error:n.displayName&&r.displayName,helperText:n.displayName,onChange:p,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{value:a.displayName,variant:"outlined",select:!0,error:n.displayName&&r.control,helperText:n.displayName,onChange:p,margin:"dense",name:"control",fullWidth:!0,placeholder:"Select a control",label:"Control",type:"text"},k.map((function(e,t){return s.a.createElement(f.a,{key:1,value:e},e)})))),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(L.a,{onChange:function(e,a){t.type=a},fullWidth:!0,id:"type",size:"small",options:P,style:{minWidth:200},renderInput:function(e){return s.a.createElement(h.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Type (*)"}))}})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(L.a,{onChange:function(e,a){t.optionSet=a},fullWidth:!0,id:"type",size:"small",getOptionLabel:function(e){return e.displayName},options:T,style:{minWidth:200},renderInput:function(e){return s.a.createElement(h.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"OptionSet (*)"}))}})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(L.a,{onChange:function(e,a){t.validationRules.push(a),m(!u)},fullWidth:!0,id:"validationRule",size:"small",getOptionLabel:function(e){return e.displayName},options:D,style:{minWidth:200},renderInput:function(e){return s.a.createElement(h.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Validation Rules"}))}})),s.a.createElement(d.a,{item:!0,sm:12,style:{height:280,overflow:"auto"}},s.a.createElement(x.a,{dense:!0,component:"div",role:"list"},t.validationRules.map((function(e,t){return s.a.createElement(O.a,{onDoubleClick:function(e){},key:t,role:"listitem",button:!0},s.a.createElement(w.a,{primary:e.displayName}),s.a.createElement(j.a,null,s.a.createElement(g.a,{color:"secondary",size:"small",onClick:function(e){}},s.a.createElement(C.f,null))))})),s.a.createElement(O.a,null)))))}function F(){var e={},t={},a={};function n(e){}return s.a.createElement(m.a,null,s.a.createElement(E.a,{variant:"outlined",style:{padding:"10px"}},s.a.createElement(d.a,{container:!0},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(p.a,{variant:"h6",color:"initial"},"Create a validation rule")),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{value:e.name,variant:"outlined",error:t.name&&a.name,helperText:t.name,onChange:n,margin:"dense",name:"name",fullWidth:!0,placeholder:"Type a regular expression",label:"Regular Expression",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{value:e.helperMessage,variant:"outlined",error:t.helperMessage&&a.helperMessage,helperText:t.helperMessage,onChange:n,margin:"dense",name:"helperMessage",fullWidth:!0,placeholder:"Type the error message",label:"Error message",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{value:e.test,variant:"outlined",error:t.name&&a.name,helperText:t.name,onChange:n,margin:"dense",name:"name",fullWidth:!0,placeholder:"Test your regular expression",label:"Test",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{value:e.name,variant:"outlined",error:t.name&&a.name,helperText:t.name,onChange:n,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{value:e.displayName,variant:"outlined",error:t.displayName&&a.displayName,helperText:t.displayName,onChange:n,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(h.a,{multiline:!0,row:4,value:e.description,variant:"outlined",error:t.description&&a.description,helperText:t.description,onChange:n,margin:"dense",name:"description",fullWidth:!0,placeholder:"Description",label:"Description",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12,style:{textAlign:"right",paddingTop:"20px"}},s.a.createElement(y.a,{color:"primary",disableElevation:!0,variant:"contained"},"Save")))))}}}]);
//# sourceMappingURL=31.fa382181.chunk.js.map