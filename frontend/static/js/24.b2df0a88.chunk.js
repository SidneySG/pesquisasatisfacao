(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[24],{227:function(t,e,a){t.exports=a(235)},228:function(t,e,a){"use strict";function r(t,e,a,r,n,i,o){try{var u=t[i](o),c=u.value}catch(l){return void a(l)}u.done?e(c):Promise.resolve(c).then(r,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,i){var o=t.apply(e,a);function u(t){r(o,n,i,u,c,"next",t)}function c(t){r(o,n,i,u,c,"throw",t)}u(void 0)}))}}a.d(e,"a",(function(){return n}))},235:function(t,e,a){var r=function(t){"use strict";var e=Object.prototype,a=e.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function u(t,e,a,r){var n=e&&e.prototype instanceof s?e:s,i=Object.create(n.prototype),o=new w(r||[]);return i._invoke=function(t,e,a){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return j()}for(a.method=n,a.arg=i;;){var o=a.delegate;if(o){var u=g(o,a);if(u){if(u===l)continue;return u}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var s=c(t,e,a);if("normal"===s.type){if(r=a.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r="completed",a.method="throw",a.arg=s.arg)}}}(t,a,o),i}function c(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var l={};function s(){}function d(){}function h(){}var p={};p[n]=function(){return this};var f=Object.getPrototypeOf,m=f&&f(f(O([])));m&&m!==e&&a.call(m,n)&&(p=m);var b=h.prototype=s.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function v(t,e){var r;this._invoke=function(n,i){function o(){return new e((function(r,o){!function r(n,i,o,u){var l=c(t[n],t,i);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"===typeof d&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,o,u)}),(function(t){r("throw",t,o,u)})):e.resolve(d).then((function(t){s.value=t,o(s)}),(function(t){return r("throw",t,o,u)}))}u(l.arg)}(n,i,r,o)}))}return r=r?r.then(o,o):o()}}function g(t,e){var a=t.iterator[e.method];if(void 0===a){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=c(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var n=r.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[n];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=b.constructor=h,h.constructor=d,h[o]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,o in t||(t[o]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},y(v.prototype),v.prototype[i]=function(){return this},t.AsyncIterator=v,t.async=function(e,a,r,n,i){void 0===i&&(i=Promise);var o=new v(u(e,a,r,n),i);return t.isGeneratorFunction(a)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},y(b),b[o]="Generator",b[n]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){for(;e.length;){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},t.values=O,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(a,r){return o.type="throw",o.arg=t,e.next=a,r&&(e.method="next",e.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),x(a),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var n=r.arg;x(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:O(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(n){Function("r","regeneratorRuntime = r")(r)}},389:function(t,e,a){"use strict";a.d(e,"a",(function(){return x}));var r=a(259),n=a(227),i=a.n(n),o=a(79),u=a(228),c=a(15),l=a(0),s=a.n(l),d=a(202),h=a(55),p=a(387),f=a(279),m=a.n(f),b=a(56),y=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],v=!0,g=[],E=[];function x(t){var e=t.dashboard,a=t.period,r=void 0===a?null:a,n=t.isDesktop,f=void 0!==n&&n,x=Object(l.useState)(!0),j=Object(c.a)(x,2),S=j[0],L=j[1],A=Object(l.useState)({data:[]}),N=Object(c.a)(A,2),k=N[0],D=N[1];return Object(l.useEffect)((function(){function t(){return(t=Object(u.a)(i.a.mark((function t(){var a,n,u,c,l,s,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v&&L(!0),t.next=3,Promise.resolve(Object(b.c)().getAgregatedData(e.attributeSet,e.attributes,e.orgUnits,"yearly",e.dataCleaners,r));case 3:a=t.sent,n={},a.data.headers.forEach((function(t){n[t.uid]={displayName:t.displayName,attribute:t.attribute}})),u=a.data.headers.map((function(t,r){return{label:t.displayName,name:"true"==e.useDisplayNameAsLabel?t.displayName:y[r],value:a.data.values[t.uid]}})),"true"==e.groupByAttributes&&(c=a.data.headers.map((function(t){return t.uid.split("-")[1]})),c=new Set(c),c=(c=Array.from(c)).map((function(t){return{label:a.data.headers.filter((function(e){return e.uid.split("-")[1]==t}))[0].displayName,value:t}})),l=a.data.headers.map((function(t){return t.attributeUID})),l=new Set(l),l=Array.from(l),E=c,l=l.map((function(t){return{label:a.data.headers.filter((function(e){return e.attributeUID==t}))[0].attribute,value:t}})),g=[["product"].concat(Object(o.a)(c.map((function(t){return t.label}))))].concat(Object(o.a)(l.map((function(t){return[t.label].concat(Object(o.a)(c.map((function(e){return Boolean(a.data.values[t.value+"-"+e.value])?a.data.values[t.value+"-"+e.value]:0}))))})))),D({title:e.displayName,attribute:" ",type:e.component,data:g})),"true"==e.groupByOptions?(s=a.data.headers.map((function(t){return t.uid.split("-")[1]})),s=new Set(s),s=(s=Array.from(s)).map((function(t){return{label:a.data.headers.filter((function(e){return e.uid.split("-")[1]==t}))[0].displayName,value:t}})),d=a.data.headers.map((function(t){return t.attributeUID})),d=new Set(d),d=Array.from(d),E=d,d=d.map((function(t){return{label:a.data.headers.filter((function(e){return e.attributeUID==t}))[0].attribute,value:t}})),g=[["product"].concat(Object(o.a)(d.map((function(t){return t.label}))))].concat(Object(o.a)(s.map((function(t){return[t.label].concat(Object(o.a)(d.map((function(e){return Boolean(a.data.values[e.value+"-"+t.value])?a.data.values[e.value+"-"+t.value]:0}))))})))),console.log(g),D({title:e.displayName,attribute:" ",type:e.component,data:g})):("ASC"==e.sort&&u.sort((function(t,e){return t.value>e.value?1:-1})),"DESC"==e.sort&&u.sort((function(t,e){return t.value<e.value?1:-1})),D({title:e.displayName,attribute:" ",type:e.component,data:u})),L(!1),v=!1;case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[r,e]),S?s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement(d.a,null),s.a.createElement("br",null)):s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{style:e.height.includes("px")?{height:e.height,width:"100%"}:{width:"100%"},option:"true"==e.groupByAttributes||"true"==e.groupByOptions?O(k,k.type):w(k,k.type)}),s.a.createElement("ul",{style:{listStyle:"none",display:"true"==e.showLegend?"block":"none"}},k.data.map((function(t,e){return s.a.createElement("li",{key:e},s.a.createElement(h.a,{key:e,variant:"button",style:{textTransform:"none"}},y[e],": ",t.label))}))),!f&&s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement(p.a,null),s.a.createElement("br",null)))}function w(t,e){return Object(r.a)({title:{text:t.title,subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"pie"==e?"{b} : {c} ({d}%)":"{b} : {c}"}},function(t,e){return"bar"==e?{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t.data.map((function(t){return t.name}))}}:"pie"!==e?{xAxis:{data:t.data.map((function(t){return t.name}))},yAxis:{}}:void 0}(t,e),{series:[{name:t.attribute,type:"colls"==e?"bar":e,center:["50%","60%"],label:{show:!0,position:"bar"==e?"right":"top",formatter:"pie"==e?"{b}({@2012})":"{c}"},data:t.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}function O(t,e){return{title:{text:t.title,subtext:"",x:"center"},tooltip:{},dataset:{source:t.data},xAxis:{type:"category"},yAxis:{},series:E.map((function(t){return{type:"bar"}}))}}},477:function(t,e,a){"use strict";a.d(e,"a",(function(){return v}));var r=a(259),n=a(227),i=a.n(n),o=a(228),u=a(15),c=a(0),l=a.n(c),s=a(202),d=a(55),h=a(387),p=a(279),f=a.n(p),m=a(56),b=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],y=!0;function v(t){var e=t.dashboard,a=t.period,r=void 0===a?null:a,n=t.isDesktop,p=void 0!==n&&n,v=Object(c.useState)(!0),E=Object(u.a)(v,2),x=E[0],w=E[1],O=Object(c.useState)([]),j=Object(u.a)(O,2),S=j[0],L=j[1];return Object(c.useEffect)((function(){function t(){return(t=Object(o.a)(i.a.mark((function t(){var a,n,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y&&w(!0),t.next=3,Promise.resolve(Object(m.c)().getAgregatedData(e.attributeSet,e.attributes,e.orgUnits,"yearly",e.dataCleaners,r));case 3:a=t.sent,n={},a.data.headers.forEach((function(t){n[t.uid]={displayName:t.displayName,attribute:t.attribute}})),o=a.data.headers.map((function(t,e){return{label:t.displayName,name:b[e],value:a.data.values[t.uid]}})),L({title:e.displayName,attribute:" ",type:e.component,data:o}),w(!1),y=!1;case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[r,e]),x?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(s.a,null),l.a.createElement("br",null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{option:g(S,S.type)}),l.a.createElement("ul",{style:{listStyle:"none"}},S.data.map((function(t,e){return l.a.createElement("li",{key:e},l.a.createElement(d.a,{key:e,variant:"button",style:{textTransform:"none"}},b[e],": ",t.label))}))),!p&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement(h.a,null),l.a.createElement("br",null)))}function g(t,e){return Object(r.a)({title:{text:t.title,subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"pie"==e?"{b} : {c} ({d}%)":"{b} : {c}"}},function(t,e){return"bar"==e?{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t.data.map((function(t){return t.name}))}}:"pie"!==e?{xAxis:{data:t.data.map((function(t){return t.name}))},yAxis:{}}:void 0}(t,e),{series:[{name:t.attribute,type:"colls"==e?"bar":e,center:["50%","60%"],label:{show:!0,position:"bar"==e?"right":"top",formatter:"pie"==e?"{b}({@2012})":"{c}"},data:t.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}},478:function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var r=a(227),n=a.n(r),i=a(228),o=a(15),u=a(0),c=a.n(u),l=a(202),s=a(387),d=a(279),h=a.n(d),p=a(56),f={dias:["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"],horas:["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"]},m=!0;function b(t){var e=t.dashboard,a=t.period,r=void 0===a?null:a,d=t.isDesktop,f=void 0!==d&&d,b=Object(u.useState)(!0),v=Object(o.a)(b,2),g=v[0],E=v[1],x=Object(u.useState)([]),w=Object(o.a)(x,2),O=w[0],j=w[1];return Object(u.useEffect)((function(){function t(){return(t=Object(i.a)(n.a.mark((function t(){var a,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m&&E(!0),t.next=3,Promise.resolve(Object(p.c)().getAgregatedData(e.attributeSet,e.attributes,e.orgUnits,"yearly",e.dataCleaners,r,e.agregationType,"true"));case 3:a=t.sent,i=[],Object.keys(a.data).forEach((function(t){i.push([Number(t.split("-")[0]),Number(t.split("-")[1]),a.data[t]])})),j({title:e.displayName,attribute:" ",type:e.component,data:i}),E(!1),m=!1;case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[r,e]),g?c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(l.a,null),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{style:e.height.includes("px")?{height:e.height,width:"100%"}:{width:"100%"},option:y(O)}),!f&&c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement(s.a,null),c.a.createElement("br",null)))}function y(t){return{title:{text:t.title,x:"center"},tooltip:{position:"top",formatter:function(t){return f.horas[t.value[1]]+": "+t.value[2]}},grid:{left:2,bottom:10,right:10,containLabel:!0},xAxis:{type:"category",data:f.dias,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:f.horas,axisLine:{show:!1}},series:[{type:"scatter",symbolSize:function(t){return 4*t[2]},data:t.data,animationDelay:function(t){return 5*t}}]}}},479:function(t,e,a){"use strict";a.d(e,"a",(function(){return y}));var r=a(227),n=a.n(r),i=a(228),o=a(15),u=a(0),c=a.n(u),l=a(202),s=a(387),d=a(279),h=a.n(d),p=a(56),f=[],m={dias:["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"],horas:["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"]},b=!0;function y(t){var e=t.dashboard,a=t.period,r=void 0===a?null:a,d=t.isDesktop,y=void 0!==d&&d,g=Object(u.useState)(!0),E=Object(o.a)(g,2),x=E[0],w=E[1],O=Object(u.useState)([]),j=Object(o.a)(O,2),S=j[0],L=j[1];return Object(u.useEffect)((function(){function t(){return(t=Object(i.a)(n.a.mark((function t(){var a,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b&&w(!0),t.next=3,Promise.resolve(Object(p.c)().getAgregatedData(e.attributeSet,e.attributes,e.orgUnits,"yearly",e.dataCleaners,r,e.agregationType,"false"));case 3:a=t.sent,i=[],f=[],a.data.headers.forEach((function(t){f[t.uid]={displayName:t.displayName,attribute:t.attribute},i[t.uid]=[]})),Object.keys(a.data.values).forEach((function(t){i[t.split("-")[0]+"-"+t.split("-")[1]].push([Number(t.split("-")[3]),Number(t.split("-")[2]),a.data.values[t]])})),L({ks:a.data.headers.map((function(t){return t.uid})),title:e.displayName,horas:m.horas,dias:m.dias,attribute:" ",type:"scatter",data:i}),w(!1),b=!1;case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[r,e]),x?c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(l.a,null),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{style:e.height.includes("px")?{height:e.height,width:"100%"}:{width:"100%"},option:v(S)}),!y&&c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement(s.a,null),c.a.createElement("br",null)))}function v(t){return{title:{text:t.title,x:"center"},legend:{data:t.ks.map((function(t){return f[t].displayName})),bottom:0},tooltip:{position:"bottom",formatter:function(e){return t.horas[e.value[1]]+": "+e.value[2]}},grid:{left:2,bottom:45,right:10,containLabel:!0},xAxis:{type:"category",data:t.horas,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:t.dias,axisLine:{show:!1}},series:t.ks.map((function(e,a){return{name:f[e].displayName,type:"scatter",symbolSize:function(t){return 4*t[2]},data:t.data[e],animationDelay:function(t){return 5*t}}}))}}},6702:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return F}));var r=a(260),n=a(227),i=a.n(n),o=a(49),u=a(79),c=a(228),l=a(15),s=a(0),d=a.n(s),h=a(12),p=a(213),f=a(216),m=a(202),b=a(6642),y=a(56),v=a(389),g=a(477),E=a(478),x=a(479),w=a(381),O=a(258);a(376);function j(){var t=Object(r.a)(["\n  display: grid;\n  grid-gap: ",";\n"]);return j=function(){return t},t}function S(){var t=Object(r.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: ",";\n"]);return S=function(){return t},t}function L(t){var e=t.children,a=t.gap,r=(t.minWidth,Object(w.a)(t,["children","gap","minWidth"])),n=Object(s.useRef)(),i=Object(s.useState)(2),o=Object(l.a)(i,2),c=o[0],h=o[1],p=Object(u.a)(Array(c)).map((function(){return[]}));!function(t,e){t.forEach((function(t,a){return e[a%e.length].push(t)}))}(e,p);return Object(s.useEffect)((function(){return h(2)}),[]),d.a.createElement(A,Object.assign({ref:n,gap:a},r),Object(u.a)(Array(c)).map((function(t,e){return d.a.createElement(N,{key:e,gap:a},p[e])})))}var A=O.a.div(S(),(function(t){return t.gap||"1em"})),N=O.a.div(j(),(function(t){return t.gap||"1em"}));function k(){var t=Object(r.a)(["\n  border-radius: 8px;\n  //place-content: center;\n  background-color: white;\n  padding: 10px;\n  display: grid;\n  //min-width: calc(50vw - 40px);\n  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);\n"]);return k=function(){return t},t}var D=[];function F(t){var e,a=Object(s.useState)(!0),r=Object(l.a)(a,2),n=r[0],w=r[1],O=Object(s.useState)(""),j=Object(l.a)(O,2),S=j[0],A=(j[1],Object(s.useState)(!1)),N=Object(l.a)(A,2),k=N[0],F=(N[1],Object(s.useState)(!1)),_=Object(l.a)(F,2),C=_[0],G=_[1],P=Object(s.useState)([]),B=Object(l.a)(P,2),U=B[0],I=B[1];function W(){return(W=Object(c.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve(Object(y.c)().getDashboardColecction());case 2:e=t.sent,D=e.data,I(e.data[0]),w(!1),G(!C);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){W.apply(this,arguments)}()}),[]),k?d.a.createElement(h.a,{to:S}):d.a.createElement(d.a.Fragment,null,d.a.createElement(p.a,{container:!0},d.a.createElement(p.a,{item:!0,sm:12},d.a.createElement(b.a,{multiple:!0,onChange:function(t,e){if(e.length<=0)I({dashboardElements:[]});else{var a=[];e.forEach((function(t){a=[].concat(Object(u.a)(a),Object(u.a)(t.dashboardElements))}));var r=e[0];r.dashboardElements=a,I(r),G(!C)}},getOptionLabel:function(t){return t.displayName},fullWidth:!0,id:"dashboard",size:"small",options:D,style:{minWidth:200},renderInput:function(t){return d.a.createElement(f.a,Object.assign(Object(o.a)({fullWidth:!0,variant:"outlined",margin:"dense"},"fullWidth",!0),t,{label:"Dashboard"}))}}))),d.a.createElement("br",null),n?d.a.createElement("div",{style:{textAlign:"center"}},d.a.createElement(m.a,null)):d.a.createElement(L,null,(e=U,e.dashboardElements.map((function(t){return{component:t.dashboard.component,displayName:t.dashboard.displayName,attributeSet:t.dashboard.attributeSet.uid,dataCleaners:t.dashboard.dataCleaners,countEntries:t.dashboard.countEntries,agregationType:t.dashboard.agregationType,attributes:t.dashboard.attributes.map((function(t){return t.uid})),orgUnits:t.dashboard.orgUnits.map((function(t){return t.uid})),useDisplayNameAsLabel:t.dashboard.useDisplayNameAsLabel,groupByAttributes:t.dashboard.groupByAttributes,sort:t.dashboard.sort,showLegend:t.dashboard.showLegend,height:t.dashboard.height}}))).map((function(e,a){return d.a.createElement(T,{style:{minWidth:"calc(50vw - ".concat(t.isSideBarVisible?"260":"40","px)")},key:a},function(t){switch(t.component){case"pie":return d.a.createElement(g.a,{isDesktop:!0,period:null,dashboard:t});case"scatter":return t.countEntries.includes("true")?d.a.createElement(E.a,{isDesktop:!0,period:null,dashboard:t}):d.a.createElement(x.a,{isDesktop:!0,period:null,dashboard:t});default:return d.a.createElement(v.a,{isDesktop:!0,period:null,dashboard:t})}}(e))}))))}var T=O.a.div(k())}}]);
//# sourceMappingURL=24.b2df0a88.chunk.js.map