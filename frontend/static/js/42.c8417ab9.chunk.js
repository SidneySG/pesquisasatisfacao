(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[42],{227:function(t,e,r){t.exports=r(235)},228:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,l,"next",t)}function l(t){n(i,o,a,c,l,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},235:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var u={};function s(){}function f(){}function h(){}var d={};d[o]=function(){return this};var p=Object.getPrototypeOf,g=p&&p(p(x([])));g&&g!==e&&r.call(g,o)&&(d=g);var v=h.prototype=s.prototype=Object.create(d);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function m(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=v.constructor=h,h.constructor=f,h[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(m.prototype),m.prototype[a]=function(){return this},t.AsyncIterator=m,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new m(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(v),v[i]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},6692:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return k}));var n=r(227),o=r.n(n),a=r(49),i=r(228),c=r(15),l=r(0),u=r.n(l),s=r(211),f=r(213),h=r(216),d=r(212),p=r(107),g=r(217),v=r(202),y=r(496),m=r(56),w=[],b={lat:-25.966871222103318,lng:32.58566014617944},E=[],O={lat:-25.953724,lng:32.588711},x={height:"450px",width:"100%"},j={fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeOpacity:1,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,geodesic:!1,zIndex:1},L={fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeOpacity:1,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,geodesic:!1,zIndex:1};function k(){var t,e,r=Object(l.useState)(0),n=Object(c.a)(r,2),k=n[0],C=n[1],_=Object(l.useState)(0),S=Object(c.a)(_,2),P=S[0],F=S[1],N=Object(l.useState)(!0),G=Object(c.a)(N,2),I=G[0],z=(G[1],Object(l.useState)(!1)),T=Object(c.a)(z,2),W=T[0],A=T[1],M=u.a.useState({drawingMode:"polygon"}),J=Object(c.a)(M,2),R=(J[0],J[1]);Object(l.useEffect)((function(){!function(){q.apply(this,arguments)}()}),[]);var B=function(t){};function Y(){return H.apply(this,arguments)}function H(){return(H=Object(i.a)(o.a.mark((function t(){var e,r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([Object(m.c)().getOrganisationUnits()]);case 2:e=t.sent,r=Object(c.a)(e,1),n=r[0],w=n.data.filter((function(t){return Boolean(t.coordinates)})),A(!W);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(){return(U=Object(i.a)(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve(Object(m.c)().getCircleByPoint(e.lat,e.lng));case 2:r=t.sent,E=r.data,A(!W);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function q(){return(q=Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:navigator.geolocation?navigator.geolocation.getCurrentPosition(D):alert("Este dispositivo nao suporta a geolocalizacao");case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(t){return b={lng:t.coords.longitude,lat:t.coords.latitude},C(t.coords.latitude),F(t.coords.longitude),function(t){U.apply(this,arguments)}(b),Y(),{lng:t.coords.longitude,lat:t.coords.latitude}}return u.a.createElement(s.a,null,u.a.createElement("br",null),u.a.createElement(f.a,{container:!0,spacing:2},u.a.createElement(f.a,{item:!0,sm:6},u.a.createElement(h.a,(t={variant:"outlined",margin:"dense",value:k,id:"lat",label:"Latitude"},Object(a.a)(t,"value",k),Object(a.a)(t,"fullWidth",!0),Object(a.a)(t,"onChange",(function(t){C(t.target.value)})),t))),u.a.createElement(f.a,{item:!0,sm:6},u.a.createElement(h.a,(e={variant:"outlined",margin:"dense",value:P,id:"lng",label:"Longitude"},Object(a.a)(e,"value",P),Object(a.a)(e,"fullWidth",!0),Object(a.a)(e,"onChange",(function(t){F(t.target.value)})),e))),u.a.createElement(f.a,{item:!0,sm:12},u.a.createElement(d.a,{disableElevation:!0,variant:"contained"},"Redesenhar circulo"),"\xa0 \xa0",u.a.createElement(d.a,{onClick:Y,disableElevation:!0,variant:"contained"},"Carregar Instituicoes"),"\xa0\xa0",u.a.createElement(d.a,{disableElevation:!0,variant:"contained"},"Localiza\xe7\xe3o corrente")),w.map((function(t){return u.a.createElement(f.a,{key:t.id,item:!0,sm:12},JSON.stringify(t))})),u.a.createElement(f.a,{item:!0,sm:12},u.a.createElement(p.a,{variant:"outlined",style:{minHeight:"450px"}},I?u.a.createElement(y.c,{libraries:["drawing","places"],id:"script-loader"},u.a.createElement(y.b,{id:"example-map",mapContainerStyle:x,draggable:!0,zoom:13,center:O},w.map((function(t){return u.a.createElement(y.e,{key:t.id,onLoad:B,paths:t.coordinates,options:j})})),u.a.createElement(y.e,{onLoad:B,paths:E,options:L}),u.a.createElement(y.d,{position:{lat:k,lng:P}}),u.a.createElement(y.a,{drawingMode:"polygon",options:{drawingControl:!0,drawingControlOptions:{drawingModes:["polygon"]},polygonOptions:{fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeWeight:2,clickable:!0,editable:!0,draggable:!0,zIndex:1}},onPolygonComplete:function(t){t.getPath().getArray().map((function(t){return{lat:t.lat(),lng:t.lng()}}));R((function(t){return Object.assign({},t,{drawingMode:"maker"})}))}}))):u.a.createElement(g.a,{style:{textAlign:"center",marginTop:"220px"}},u.a.createElement(v.a,null))))))}}}]);
//# sourceMappingURL=42.c8417ab9.chunk.js.map