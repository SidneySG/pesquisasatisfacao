(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[19],{225:function(t,e,r){t.exports=r(239)},226:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var u=t[o](i),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function u(t){n(i,a,o,u,c,"next",t)}function c(t){n(i,a,o,u,c,"throw",t)}u(void 0)}))}}r.d(e,"a",(function(){return a}))},239:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function u(t,e,r,n){var a=e&&e.prototype instanceof l?e:l,o=Object.create(a.prototype),i=new w(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var u=v(i,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var s={};function l(){}function h(){}function p(){}var d={};d[a]=function(){return this};var f=Object.getPrototypeOf,y=f&&f(f(O([])));y&&y!==e&&r.call(y,a)&&(d=y);var m=p.prototype=l.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,u){var s=c(t[a],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,u)}))}u(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function v(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,v(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=m.constructor=p,p.constructor=h,p[i]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b(g.prototype),g.prototype[o]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new g(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(m),m[i]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},269:function(t,e){function r(t,e){return function r(){if(!r.hookCalled)return r.hookCalled=!0,t.apply(e,arguments)}}t.exports={hook:function(t,e,n){if(1!==arguments.length||"object"!==typeof t){var a=this.prototype||this,o=a._pres=a._pres||{},i=a._posts=a._posts||{};return o[t]=o[t]||[],i[t]=i[t]||[],a[t]=function(){var o,i=this,u=arguments[arguments.length-1],c=this._pres[t],s=this._posts[t],l=c.length,h=-1,p=a[t].numAsyncPres,d=function e(){if(arguments[0]instanceof Error)return y(arguments[0]);var n,s,p=Array.prototype.slice.call(arguments);if(!p.length||null==arguments[0]&&"function"===typeof u||(o=p),++h<l){if((n=c[h]).isAsync&&n.length<2)throw new Error("Your pre must have next and done arguments -- e.g., function (next, done, ...)");if(n.length<1)throw new Error("Your pre must have a next argument -- e.g., function (next, ...)");return s=(n.isAsync?[r(e),r(_asyncsDone)]:[r(e)]).concat(o),n.apply(i,s)}return a[t].numAsyncPres?void 0:f.apply(i,o)},f=function(){var t,n,a,c,p=Array.prototype.slice.call(arguments);if(h===l)return c=function(){if(arguments[0]instanceof Error)return y(arguments[0]);var t,e,l=Array.prototype.slice.call(arguments,1);if(l.length&&(o=l),++a<n){if((t=s[a]).length<1)throw new Error("Your post must have a next argument -- e.g., function (next, ...)");return e=[r(c)].concat(o),t.apply(i,e)}return"function"===typeof u?u.apply(i,arguments):void 0},"function"===typeof u&&(p[p.length-1]=r(c)),n=s.length,a=-1,t=e.apply(i,p),n&&"function"!==typeof u?c():t};if(p);function y(t){if("function"==typeof u)return u(t);if(n)return n.call(i,t);throw t}return d.apply(this,arguments)},a[t].numAsyncPres=0,this}for(var u in t)this.hook(u,t[u])},pre:function(t,e,r,n){"boolean"!==typeof arguments[1]&&(n=r,r=e,e=!1);var a=this.prototype||this,o=a._pres=a._pres||{};return this._lazySetupHooks(a,t,n),(r.isAsync=e)&&a[t].numAsyncPres++,(o[t]=o[t]||[]).push(r),this},post:function(t,e,r){2===arguments.length&&(r=e,e=!1);var n=this.prototype||this,a=n._posts=n._posts||{};return this._lazySetupHooks(n,t),(a[t]=a[t]||[]).push(r),this},removePre:function(t,e){var r=this.prototype||this,n=r._pres||r._pres||{};return n[t]?(1===arguments.length?n[t].length=0:n[t]=n[t].filter((function(t){return t!==e})),this):this},_lazySetupHooks:function(t,e,r){"undefined"===typeof t[e].numAsyncPres&&this.hook(e,t[e],r)}}},275:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}r.d(e,"a",(function(){return n}))},317:function(t,e,r){"use strict";r.d(e,"a",(function(){return x}));var n=r(244),a=r(225),o=r.n(a),i=r(79),u=r(226),c=r(15),s=r(0),l=r.n(s),h=r(202),p=r(55),d=r(339),f=r(253),y=r.n(f),m=r(56),b=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],g=!0,v=[],E=[];function x(t){var e=t.dashboard,r=t.period,n=void 0===r?null:r,a=t.isDesktop,f=void 0!==a&&a,x=Object(s.useState)(!0),j=Object(c.a)(x,2),S=j[0],A=j[1],k=Object(s.useState)({data:[]}),L=Object(c.a)(k,2),N=L[0],_=L[1];return Object(s.useEffect)((function(){function t(){return(t=Object(u.a)(o.a.mark((function t(){var r,a,u,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g&&A(!0),t.next=3,Promise.resolve(Object(m.c)().getAgregatedData(e.attributeSet,e.attributes,e.orgUnits,"yearly",e.dataCleaners,n));case 3:r=t.sent,a={},r.data.headers.forEach((function(t){a[t.uid]={displayName:t.displayName,attribute:t.attribute}})),u=r.data.headers.map((function(t,n){return{label:t.displayName,name:"true"==e.useDisplayNameAsLabel?t.displayName:b[n],value:r.data.values[t.uid]}})),"true"==e.groupByAttributes?(c=r.data.headers.map((function(t){return t.uid.split("-")[1]})),c=new Set(c),c=(c=Array.from(c)).map((function(t){return{label:r.data.headers.filter((function(e){return e.uid.split("-")[1]==t}))[0].displayName,value:t}})),s=r.data.headers.map((function(t){return t.attributeUID})),s=new Set(s),s=Array.from(s),E=c,s=s.map((function(t){return{label:r.data.headers.filter((function(e){return e.attributeUID==t}))[0].attribute,value:t}})),v=[["product"].concat(Object(i.a)(c.map((function(t){return t.label}))))].concat(Object(i.a)(s.map((function(t){return[t.label].concat(Object(i.a)(c.map((function(e){return Boolean(r.data.values[t.value+"-"+e.value])?r.data.values[t.value+"-"+e.value]:0}))))})))),_({title:e.displayName,attribute:" ",type:e.component,data:v})):("ASC"==e.sort&&u.sort((function(t,e){return t.value>e.value?1:-1})),"DESC"==e.sort&&u.sort((function(t,e){return t.value<e.value?1:-1})),_({title:e.displayName,attribute:" ",type:e.component,data:u})),A(!1),g=!1;case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,e]),S?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(h.a,null),l.a.createElement("br",null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{style:e.height.includes("px")?{height:e.height,width:"100%"}:{width:"100%"},option:"true"==e.groupByAttributes?O(N,N.type):w(N,N.type)}),l.a.createElement("ul",{style:{listStyle:"none",display:"true"==e.showLegend?"block":"none"}},N.data.map((function(t,e){return l.a.createElement("li",{key:e},l.a.createElement(p.a,{key:e,variant:"button",style:{textTransform:"none"}},b[e],": ",t.label))}))),!f&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement(d.a,null),l.a.createElement("br",null)))}function w(t,e){return Object(n.a)({title:{text:t.title,subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"pie"==e?"{b} : {c} ({d}%)":"{b} : {c}"}},function(t,e){return"bar"==e?{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t.data.map((function(t){return t.name}))}}:"pie"!==e?{xAxis:{data:t.data.map((function(t){return t.name}))},yAxis:{}}:void 0}(t,e),{series:[{name:t.attribute,type:"colls"==e?"bar":e,center:["50%","60%"],label:{show:!0,position:"bar"==e?"right":"top",formatter:"pie"==e?"{b}({@2012})":"{c}"},data:t.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}function O(t,e){return{title:{text:t.title,subtext:"",x:"center"},tooltip:{},dataset:{source:t.data},xAxis:{type:"category"},yAxis:{},series:E.map((function(t){return{type:"bar"}}))}}},333:function(t,e,r){"use strict";r.d(e,"a",(function(){return g}));var n=r(244),a=r(225),o=r.n(a),i=r(226),u=r(15),c=r(0),s=r.n(c),l=r(202),h=r(55),p=r(339),d=r(253),f=r.n(d),y=r(56),m=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],b=!0;function g(t){var e=t.dashboard,r=t.period,n=void 0===r?null:r,a=t.isDesktop,d=void 0!==a&&a,g=Object(c.useState)(!0),E=Object(u.a)(g,2),x=E[0],w=E[1],O=Object(c.useState)([]),j=Object(u.a)(O,2),S=j[0],A=j[1];return Object(c.useEffect)((function(){function t(){return(t=Object(i.a)(o.a.mark((function t(){var r,a,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b&&w(!0),t.next=3,Promise.resolve(Object(y.c)().getAgregatedData(e.attributeSet,e.attributes,e.orgUnits,"yearly",e.dataCleaners,n));case 3:r=t.sent,a={},r.data.headers.forEach((function(t){a[t.uid]={displayName:t.displayName,attribute:t.attribute}})),i=r.data.headers.map((function(t,e){return{label:t.displayName,name:m[e],value:r.data.values[t.uid]}})),A({title:e.displayName,attribute:" ",type:e.component,data:i}),w(!1),b=!1;case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,e]),x?s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement(l.a,null),s.a.createElement("br",null)):s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{option:v(S,S.type)}),s.a.createElement("ul",{style:{listStyle:"none"}},S.data.map((function(t,e){return s.a.createElement("li",{key:e},s.a.createElement(h.a,{key:e,variant:"button",style:{textTransform:"none"}},m[e],": ",t.label))}))),!d&&s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement(p.a,null),s.a.createElement("br",null)))}function v(t,e){return Object(n.a)({title:{text:t.title,subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"pie"==e?"{b} : {c} ({d}%)":"{b} : {c}"}},function(t,e){return"bar"==e?{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t.data.map((function(t){return t.name}))}}:"pie"!==e?{xAxis:{data:t.data.map((function(t){return t.name}))},yAxis:{}}:void 0}(t,e),{series:[{name:t.attribute,type:"colls"==e?"bar":e,center:["50%","60%"],label:{show:!0,position:"bar"==e?"right":"top",formatter:"pie"==e?"{b}({@2012})":"{c}"},data:t.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}},334:function(t,e,r){"use strict";r.d(e,"a",(function(){return m}));var n=r(225),a=r.n(n),o=r(226),i=r(15),u=r(0),c=r.n(u),s=r(202),l=r(339),h=r(253),p=r.n(h),d=r(56),f={dias:["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"],horas:["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"]},y=!0;function m(t){var e=t.dashboard,r=t.period,n=void 0===r?null:r,h=t.isDesktop,f=void 0!==h&&h,m=Object(u.useState)(!0),g=Object(i.a)(m,2),v=g[0],E=g[1],x=Object(u.useState)([]),w=Object(i.a)(x,2),O=w[0],j=w[1];return Object(u.useEffect)((function(){function t(){return(t=Object(o.a)(a.a.mark((function t(){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y&&E(!0),t.next=3,Promise.resolve(Object(d.c)().getAgregatedData(e.attributeSet,e.attributes,e.orgUnits,"yearly",e.dataCleaners,n,e.agregationType,"true"));case 3:r=t.sent,o=[],Object.keys(r.data).forEach((function(t){o.push([Number(t.split("-")[0]),Number(t.split("-")[1]),r.data[t]])})),j({title:e.displayName,attribute:" ",type:e.component,data:o}),E(!1),y=!1;case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,e]),v?c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(s.a,null),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{style:e.height.includes("px")?{height:e.height,width:"100%"}:{width:"100%"},option:b(O)}),!f&&c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement(l.a,null),c.a.createElement("br",null)))}function b(t){return{title:{text:t.title,x:"center"},tooltip:{position:"top",formatter:function(t){return f.horas[t.value[1]]+": "+t.value[2]}},grid:{left:2,bottom:10,right:10,containLabel:!0},xAxis:{type:"category",data:f.dias,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:f.horas,axisLine:{show:!1}},series:[{type:"scatter",symbolSize:function(t){return 4*t[2]},data:t.data,animationDelay:function(t){return 5*t}}]}}},335:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var n=r(225),a=r.n(n),o=r(226),i=r(15),u=r(0),c=r.n(u),s=r(202),l=r(339),h=r(253),p=r.n(h),d=r(56),f=[],y={dias:["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"],horas:["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"]},m=!0;function b(t){var e=t.dashboard,r=t.period,n=void 0===r?null:r,h=t.isDesktop,b=void 0!==h&&h,v=Object(u.useState)(!0),E=Object(i.a)(v,2),x=E[0],w=E[1],O=Object(u.useState)([]),j=Object(i.a)(O,2),S=j[0],A=j[1];return Object(u.useEffect)((function(){function t(){return(t=Object(o.a)(a.a.mark((function t(){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m&&w(!0),t.next=3,Promise.resolve(Object(d.c)().getAgregatedData(e.attributeSet,e.attributes,e.orgUnits,"yearly",e.dataCleaners,n,e.agregationType,"false"));case 3:r=t.sent,o=[],f=[],r.data.headers.forEach((function(t){f[t.uid]={displayName:t.displayName,attribute:t.attribute},o[t.uid]=[]})),Object.keys(r.data.values).forEach((function(t){o[t.split("-")[0]+"-"+t.split("-")[1]].push([Number(t.split("-")[3]),Number(t.split("-")[2]),r.data.values[t]])})),A({ks:r.data.headers.map((function(t){return t.uid})),title:e.displayName,horas:y.horas,dias:y.dias,attribute:" ",type:"scatter",data:o}),w(!1),m=!1;case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,e]),x?c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(s.a,null),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{style:e.height.includes("px")?{height:e.height,width:"100%"}:{width:"100%"},option:g(S)}),!b&&c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement(l.a,null),c.a.createElement("br",null)))}function g(t){return{title:{text:t.title,x:"center"},legend:{data:t.ks.map((function(t){return f[t].displayName})),bottom:0},tooltip:{position:"bottom",formatter:function(e){return t.horas[e.value[1]]+": "+e.value[2]}},grid:{left:2,bottom:45,right:10,containLabel:!0},xAxis:{type:"category",data:t.horas,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:t.dias,axisLine:{show:!1}},series:t.ks.map((function(e,r){return{name:f[e].displayName,type:"scatter",symbolSize:function(t){return 4*t[2]},data:t.data[e],animationDelay:function(t){return 5*t}}}))}}},6691:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return D}));var n=r(249),a=r(225),o=r.n(a),i=r(48),u=r(226),c=r(15),s=r(0),l=r.n(s),h=r(12),p=r(213),d=r(216),f=r(202),y=r(6687),m=r(56),b=r(317),g=r(333),v=r(334),E=r(335),x=r(79),w=r(275),O=r(246);r(269);function j(){var t=Object(n.a)(["\n  display: grid;\n  grid-gap: ",";\n"]);return j=function(){return t},t}function S(){var t=Object(n.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: ",";\n"]);return S=function(){return t},t}function A(t){var e=t.children,r=t.gap,n=(t.minWidth,Object(w.a)(t,["children","gap","minWidth"])),a=Object(s.useRef)(),o=Object(s.useState)(2),i=Object(c.a)(o,2),u=i[0],h=i[1],p=Object(x.a)(Array(u)).map((function(){return[]}));!function(t,e){t.forEach((function(t,r){return e[r%e.length].push(t)}))}(e,p);return Object(s.useEffect)((function(){return h(2)}),[]),l.a.createElement(k,Object.assign({ref:a,gap:r},n),Object(x.a)(Array(u)).map((function(t,e){return l.a.createElement(L,{key:e,gap:r},p[e])})))}var k=O.a.div(S(),(function(t){return t.gap||"1em"})),L=O.a.div(j(),(function(t){return t.gap||"1em"}));function N(){var t=Object(n.a)(["\n  border-radius: 8px;\n  //place-content: center;\n  background-color: white;\n  padding: 10px;\n  display: grid;\n  //min-width: calc(50vw - 40px);\n  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);\n"]);return N=function(){return t},t}var _=[];function D(t){var e,r=Object(s.useState)(!0),n=Object(c.a)(r,2),a=n[0],x=n[1],w=Object(s.useState)(""),O=Object(c.a)(w,2),j=O[0],S=(O[1],Object(s.useState)(!1)),k=Object(c.a)(S,2),L=k[0],N=(k[1],Object(s.useState)(!1)),D=Object(c.a)(N,2),F=D[0],C=D[1],T=Object(s.useState)([]),G=Object(c.a)(T,2),B=G[0],U=G[1];function I(){return(I=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve(Object(m.c)().getDashboardColecction());case 2:e=t.sent,_=e.data,U(e.data[0]),x(!1),C(!F);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){I.apply(this,arguments)}()}),[]),L?l.a.createElement(h.a,{to:j}):l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{container:!0},l.a.createElement(p.a,{item:!0,sm:12},l.a.createElement(y.a,{multiple:!0,onChange:function(t,e){U(e)},getOptionLabel:function(t){return t.displayName},fullWidth:!0,id:"dashboard",size:"small",options:_,style:{minWidth:200},renderInput:function(t){return l.a.createElement(d.a,Object.assign(Object(i.a)({fullWidth:!0,variant:"outlined",margin:"dense"},"fullWidth",!0),t,{label:"Dashboard"}))}}))),l.a.createElement("br",null),a?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(f.a,null)):l.a.createElement(A,null,(e=B,e.dashboardElements.map((function(t){return{component:t.dashboard.component,displayName:t.dashboard.displayName,attributeSet:t.dashboard.attributeSet.uid,dataCleaners:t.dashboard.dataCleaners,countEntries:t.dashboard.countEntries,agregationType:t.dashboard.agregationType,attributes:t.dashboard.attributes.map((function(t){return t.uid})),orgUnits:t.dashboard.orgUnits.map((function(t){return t.uid})),useDisplayNameAsLabel:t.dashboard.useDisplayNameAsLabel,groupByAttributes:t.dashboard.groupByAttributes,sort:t.dashboard.sort,showLegend:t.dashboard.showLegend,height:t.dashboard.height}}))).map((function(e,r){return l.a.createElement(P,{style:{minWidth:"calc(50vw - ".concat(t.isSideBarVisible?"260":"40","px)")},key:r},function(t){switch(t.component){case"pie":return l.a.createElement(g.a,{isDesktop:!0,period:null,dashboard:t});case"scatter":return t.countEntries.includes("true")?l.a.createElement(v.a,{isDesktop:!0,period:null,dashboard:t}):l.a.createElement(E.a,{isDesktop:!0,period:null,dashboard:t});default:return l.a.createElement(b.a,{isDesktop:!0,period:null,dashboard:t})}}(e))}))))}var P=O.a.div(N())}}]);
//# sourceMappingURL=19.35db7923.chunk.js.map