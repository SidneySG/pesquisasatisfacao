(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[38],{227:function(e,t,r){e.exports=r(235)},228:function(e,t,r){"use strict";function n(e,t,r,n,a,i,o){try{var l=e[i](o),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var o=e.apply(t,r);function l(e){n(o,a,i,l,c,"next",e)}function c(e){n(o,a,i,l,c,"throw",e)}l(void 0)}))}}r.d(t,"a",(function(){return a}))},235:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function l(e,t,r,n){var a=t&&t.prototype instanceof u?t:u,i=Object.create(a.prototype),o=new x(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return L()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var l=E(o,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=c(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,o),i}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=l;var s={};function u(){}function m(){}function d(){}var f={};f[a]=function(){return this};var p=Object.getPrototypeOf,h=p&&p(p(O([])));h&&h!==t&&r.call(h,a)&&(f=h);var v=d.prototype=u.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function g(e,t){var n;this._invoke=function(a,i){function o(){return new t((function(n,o){!function n(a,i,o,l){var s=c(e[a],e,i);if("throw"!==s.type){var u=s.arg,m=u.value;return m&&"object"===typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,o,l)}),(function(e){n("throw",e,o,l)})):t.resolve(m).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,l)}))}l(s.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=v.constructor=d,d.constructor=m,d[o]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(g.prototype),g.prototype[i]=function(){return this},e.AsyncIterator=g,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new g(l(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(v),v[o]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;w(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},278:function(e,t,r){"use strict";var n=r(1),a=r(2),i=r(0),o=(r(6),r(3)),l=r(5),c=i.forwardRef((function(e,t){var r=e.classes,l=e.className,c=Object(a.a)(e,["classes","className"]);return i.createElement("div",Object(n.a)({className:Object(o.a)(r.root,l),ref:t},c))}));c.muiName="ListItemSecondaryAction",t.a=Object(l.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(c)},6691:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return P}));var n=r(227),a=r.n(n),i=r(228),o=r(15),l=r(0),c=r.n(l),s=r(211),u=r(55),m=r(213),d=r(216),f=r(212),p=r(107),h=r(192),v=r(149),y=r(194),g=r(278),E=r(197),b=r(110),w=r(257),x=r(256),O=r(56),L=[],j=[],_=[],C=[],S=[],k=[];function P(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),r=t[0],n=t[1];function p(){return(p=Object(i.a)(a.a.mark((function e(){var t,i,l,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(O.c)().getPermissions(),Object(O.c)().getOrganisationUnits(),Object(O.c)().getGroups()]);case 2:t=e.sent,i=Object(o.a)(t,3),l=i[0],c=i[1],s=i[2],L=l.data,_=s.data,j=c.data,n(!r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),c.a.createElement(s.a,null,c.a.createElement("br",null),c.a.createElement(u.a,{variant:"h6"},"Create User"),c.a.createElement("br",null),c.a.createElement(w.b,{initialValues:{},onSubmit:function(e,t){var r=t.setSubmitting;function n(){return(n=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.groups=S.map((function(e){return{id:e}})),t.orgUnits=k.map((function(e){return{id:e}})),t.user_permissions=C.map((function(e){return{id:e}})),delete t.confirmpassowd,e.next=6,Promise.resolve(Object(O.c)().postUser(t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e),setTimeout((function(){r(!1)}),500)},validationSchema:x.a().shape({email:x.c().required("Campo obrigat\xf3rio"),username:x.c().required("Campo obrigat\xf3rio"),first_name:x.c().required("Campo obrigat\xf3rio"),last_name:x.c().required("Campo obrigat\xf3rio"),password:x.c().required("Campo obrigat\xf3rio").min(6),confirmpassowd:x.c().required("Campo obrigat\xf3rio").oneOf([x.b("password"),null],"As senhas deve ser identica")})},(function(e){var t=e.values,r=e.touched,n=e.errors,a=(e.dirty,e.isSubmitting,e.handleChange),i=e.handleBlur;e.handleSubmit,e.handleReset,e.setFieldValue;return c.a.createElement(w.a,null,c.a.createElement(m.a,{container:!0,spacing:2},c.a.createElement(m.a,{item:!0,sm:12},c.a.createElement(d.a,{type:"text",variant:"outlined",error:n.first_name&&r.first_name,helperText:n.first_name,onChange:a,onBlur:i,value:t.first_name,margin:"dense",id:"first_name",fullWidth:!0,label:"First name (*)"})),c.a.createElement(m.a,{item:!0,sm:12},c.a.createElement(d.a,{type:"text",variant:"outlined",error:n.last_name&&r.last_name,helperText:n.last_name,onChange:a,onBlur:i,value:t.last_name,margin:"dense",id:"last_name",fullWidth:!0,label:"Last name (*)"})),c.a.createElement(m.a,{item:!0,sm:12},c.a.createElement(d.a,{type:"text",variant:"outlined",error:n.email&&r.email,helperText:n.email,onChange:a,onBlur:i,value:t.email,margin:"dense",id:"email",fullWidth:!0,label:"Email"})),c.a.createElement(m.a,{item:!0,sm:12},c.a.createElement(d.a,{type:"text",error:n.username&&r.username,helperText:n.username,onChange:a,onBlur:i,variant:"outlined",value:t.username,margin:"dense",id:"username",fullWidth:!0,label:"Username (*)"})),c.a.createElement(m.a,{item:!0,sm:12},c.a.createElement(d.a,{type:"password",error:n.password&&r.password,helperText:n.password,onChange:a,onBlur:i,variant:"outlined",value:t.password,margin:"dense",id:"password",fullWidth:!0,label:"Password"})),c.a.createElement(m.a,{item:!0,sm:12},c.a.createElement(d.a,{type:"text",error:n.confirmpassowd&&r.confirmpassowd,helperText:n.confirmpassowd,onChange:a,onBlur:i,variant:"outlined",value:t.confirmpassowd,margin:"dense",id:"confirmpassowd",fullWidth:!0,label:"Confirm password (*)"})),c.a.createElement(m.a,{item:!0,sm:12},c.a.createElement(F,null)),c.a.createElement(m.a,{item:!0,sm:12},c.a.createElement(G,null)),c.a.createElement(m.a,{item:!0,sm:12},c.a.createElement(T,null)),c.a.createElement(m.a,{item:!0,sm:12,style:{paddingTop:"10px"}},c.a.createElement(f.a,null,"Cancel")," \xa0\xa0\xa0",c.a.createElement(f.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))})))}function G(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),r=t[0],n=t[1],a={addPermission:function(e){C.push(e),n(!r)},removePermission:function(e){C=C.filter((function(t){return t!==e})),n(!r)}},i=function(e,t){return c.a.createElement(p.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},c.a.createElement(h.a,{dense:!0,component:"div",role:"list"},e.map((function(e,r){return c.a.createElement(v.a,{onDoubleClick:function(){return a[t](e.id)},key:r,role:"listitem",button:!0},c.a.createElement(y.a,{primary:e.name}),c.a.createElement(g.a,null,t.includes("add")?c.a.createElement(E.a,{color:"primary",size:"small",onClick:function(){a[t](e.id)}},c.a.createElement(b.g,null)):c.a.createElement(E.a,{color:"secondary",size:"small",onClick:function(){a[t](e.id)}},c.a.createElement(b.f,null))))})),c.a.createElement(v.a,null)))};return c.a.createElement(m.a,{container:!0,spacing:2},c.a.createElement(m.a,{item:!0,sm:6},c.a.createElement(d.a,{disabled:!0,type:"text",variant:"outlined",name:"filterAllPermissions",margin:"dense",id:"filterAllPermissions",fullWidth:!0,label:"Filter permissions"})),c.a.createElement(m.a,{item:!0,sm:6},c.a.createElement(d.a,{disabled:!0,type:"text",variant:"outlined",name:"filterSelectedPermissions",margin:"dense",id:"filterSelectedPermissions",fullWidth:!0,label:"Filter permissions"})),c.a.createElement(m.a,{item:!0,sm:6},i(L.filter((function(e){return!C.includes(e.id)})),"addPermission")),c.a.createElement(m.a,{item:!0,sm:6},i(C.map((function(e){return L.filter((function(t){return t.id==e}))[0]})),"removePermission")))}function F(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),r=t[0],n=t[1],a={addGroup:function(e){S.push(e),n(!r)},removeGroup:function(e){S=S.filter((function(t){return t!==e})),n(!r)}},i=function(e,t){return c.a.createElement(p.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},c.a.createElement(h.a,{dense:!0,component:"div",role:"list"},e.map((function(e,r){return c.a.createElement(v.a,{onDoubleClick:function(){return a[t](e.id)},key:r,role:"listitem",button:!0},c.a.createElement(y.a,{primary:e.name}),c.a.createElement(g.a,null,t.includes("add")?c.a.createElement(E.a,{color:"primary",size:"small",onClick:function(){a[t](e.id)}},c.a.createElement(b.g,null)):c.a.createElement(E.a,{color:"secondary",size:"small",onClick:function(){a[t](e.id)}},c.a.createElement(b.f,null))))})),c.a.createElement(v.a,null)))};return c.a.createElement(m.a,{container:!0,spacing:2},c.a.createElement(m.a,{item:!0,sm:6},c.a.createElement(d.a,{disabled:!0,type:"text",variant:"outlined",name:"filterAllGroups",margin:"dense",id:"filterAllGroups",fullWidth:!0,label:"Filter groups"})),c.a.createElement(m.a,{item:!0,sm:6},c.a.createElement(d.a,{disabled:!0,type:"text",variant:"outlined",name:"filterSelectedPermissions",margin:"dense",id:"filterSelectedGroups",fullWidth:!0,label:"Filter groups"})),c.a.createElement(m.a,{item:!0,sm:6},i(_.filter((function(e){return!S.includes(e.id)})),"addGroup")),c.a.createElement(m.a,{item:!0,sm:6},i(S.map((function(e){return _.filter((function(t){return t.id==e}))[0]})),"removeGroup")))}function T(){var e=Object(l.useState)(!1),t=Object(o.a)(e,2),r=t[0],n=t[1],a={addOrgUnit:function(e){k.push(e),n(!r)},removeOrgUnit:function(e){k=k.filter((function(t){return t!==e})),n(!r)}},i=function(e,t){return c.a.createElement(p.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},c.a.createElement(h.a,{dense:!0,component:"div",role:"list"},e.map((function(e,r){return c.a.createElement(v.a,{onDoubleClick:function(){return a[t](e.id)},key:r,role:"listitem",button:!0},c.a.createElement(y.a,{primary:e.name}),c.a.createElement(g.a,null,t.includes("add")?c.a.createElement(E.a,{color:"primary",size:"small",onClick:function(){a[t](e.id)}},c.a.createElement(b.g,null)):c.a.createElement(E.a,{color:"secondary",size:"small",onClick:function(){a[t](e.id)}},c.a.createElement(b.f,null))))})),c.a.createElement(v.a,null)))};return c.a.createElement(m.a,{container:!0,spacing:2},c.a.createElement(m.a,{item:!0,sm:6},c.a.createElement(d.a,{disabled:!0,type:"text",variant:"outlined",name:"filterAllPermissions",margin:"dense",id:"filterAllPermissions",fullWidth:!0,label:"Filter orgunit"})),c.a.createElement(m.a,{item:!0,sm:6},c.a.createElement(d.a,{disabled:!0,type:"text",variant:"outlined",name:"filterSelectedPermissions",margin:"dense",id:"filterSelectedPermissions",fullWidth:!0,label:"Filter orgunit"})),c.a.createElement(m.a,{item:!0,sm:6},i(j.filter((function(e){return!k.includes(e.id)})),"addOrgUnit")),c.a.createElement(m.a,{item:!0,sm:6},i(k.map((function(e){return j.filter((function(t){return t.id==e}))[0]})),"removeOrgUnit")))}}}]);
//# sourceMappingURL=38.c7fc0bcb.chunk.js.map