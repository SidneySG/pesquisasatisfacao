(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[24],{227:function(t,e,a){t.exports=a(235)},228:function(t,e,a){"use strict";function n(t,e,a,n,r,i,o){try{var u=t[i](o),c=u.value}catch(l){return void a(l)}u.done?e(c):Promise.resolve(c).then(n,r)}function r(t){return function(){var e=this,a=arguments;return new Promise((function(r,i){var o=t.apply(e,a);function u(t){n(o,r,i,u,c,"next",t)}function c(t){n(o,r,i,u,c,"throw",t)}u(void 0)}))}}a.d(e,"a",(function(){return r}))},235:function(t,e,a){var n=function(t){"use strict";var e=Object.prototype,a=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function u(t,e,a,n){var r=e&&e.prototype instanceof s?e:s,i=Object.create(r.prototype),o=new x(n||[]);return i._invoke=function(t,e,a){var n="suspendedStart";return function(r,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw i;return j()}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var u=g(o,a);if(u){if(u===l)continue;return u}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var s=c(t,e,a);if("normal"===s.type){if(n=a.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(n="completed",a.method="throw",a.arg=s.arg)}}}(t,a,o),i}function c(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var l={};function s(){}function d(){}function p(){}var h={};h[r]=function(){return this};var f=Object.getPrototypeOf,m=f&&f(f(O([])));m&&m!==e&&a.call(m,r)&&(h=m);var b=p.prototype=s.prototype=Object.create(h);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function v(t,e){var n;this._invoke=function(r,i){function o(){return new e((function(n,o){!function n(r,i,o,u){var l=c(t[r],t,i);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"===typeof d&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,o,u)}),(function(t){n("throw",t,o,u)})):e.resolve(d).then((function(t){s.value=t,o(s)}),(function(t){return n("throw",t,o,u)}))}u(l.arg)}(r,i,n,o)}))}return n=n?n.then(o,o):o()}}function g(t,e){var a=t.iterator[e.method];if(void 0===a){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=c(a,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var r=n.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[r];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=b.constructor=p,p.constructor=d,p[o]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,o in t||(t[o]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},y(v.prototype),v.prototype[i]=function(){return this},t.AsyncIterator=v,t.async=function(e,a,n,r,i){void 0===i&&(i=Promise);var o=new v(u(e,a,n,r),i);return t.isGeneratorFunction(a)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},y(b),b[o]="Generator",b[r]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){for(;e.length;){var n=e.pop();if(n in t)return a.value=n,a.done=!1,a}return a.done=!0,a}},t.values=O,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(a,n){return o.type="throw",o.arg=t,e.next=a,n&&(e.method="next",e.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),w(a),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var n=a.completion;if("throw"===n.type){var r=n.arg;w(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:O(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(r){Function("r","regeneratorRuntime = r")(n)}},421:function(t,e,a){"use strict";a.d(e,"a",(function(){return w}));var n=a(263),r=a(227),i=a.n(r),o=a(79),u=a(228),c=a(15),l=a(0),s=a.n(l),d=a(55),p=a(410),h=a(6637),f=a(286),m=a.n(f),b=a(56),y=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],v=!0,g=[],E=[];function w(t){var e=t.dashboard,a=t.period,n=void 0===a?null:a,r=t.isDesktop,f=void 0!==r&&r,w=Object(l.useState)(!0),j=Object(c.a)(w,2),S=j[0],N=j[1],L=Object(l.useState)({data:[]}),k=Object(c.a)(L,2),A=k[0],D=k[1];return Object(l.useEffect)((function(){function t(){return(t=Object(u.a)(i.a.mark((function t(){var a,r,u,c,l,s,d,p,h,f,m,w;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v&&N(!0),t.next=3,Promise.resolve(Object(b.c)().getAgregatedData(e.attributeSet,e.attributes,e.orgUnits,"yearly",e.dataCleaners,n));case 3:a=t.sent,r={},a.data.headers.forEach((function(t){r[t.uid]={displayName:t.displayName,attribute:t.attribute}})),u=a.data.headers.map((function(t,n){return{label:t.displayName,name:"true"==e.useDisplayNameAsLabel?t.displayName:y[n],value:a.data.values[t.uid]}})),"true"==e.groupByAttributes?(c=a.data.headers.map((function(t){return t.uid.split("-")[1]})),c=new Set(c),c=(c=Array.from(c)).map((function(t){return{label:a.data.headers.filter((function(e){return e.uid.split("-")[1]==t}))[0].displayName,value:t}})),l=a.data.headers.map((function(t){return t.attributeUID})),l=new Set(l),l=Array.from(l),E=c,l=l.map((function(t){return{label:a.data.headers.filter((function(e){return e.attributeUID==t}))[0].attribute,value:t}})),"true"==e.frequency?(s=a.data.info.valueSets,console.log(s),console.log([["product"].concat(Object(o.a)(c.map((function(t){return t.label}))))].concat(Object(o.a)(l.map((function(t){return[t.label].concat(Object(o.a)(c.map((function(e){return Boolean(a.data.values[t.value+"-"+e.value])?a.data.values[t.value+"-"+e.value]:0}))))}))))),g=[["product"].concat(Object(o.a)(c.map((function(t){return t.label}))))].concat(Object(o.a)(l.map((function(t){return[t.label].concat(Object(o.a)(c.map((function(e){return Boolean(a.data.values[t.value+"-"+e.value])?a.data.values[t.value+"-"+e.value]/s:0}))))}))))):g=[["product"].concat(Object(o.a)(c.map((function(t){return t.label}))))].concat(Object(o.a)(l.map((function(t){return[t.label].concat(Object(o.a)(c.map((function(e){return Boolean(a.data.values[t.value+"-"+e.value])?a.data.values[t.value+"-"+e.value]:0}))))})))),D({title:e.displayName,attribute:" ",type:e.component,data:g})):"true"==e.groupByOptions?(d=a.data.headers.map((function(t){return t.uid.split("-")[1]})),d=new Set(d),d=Array.from(d),p=[],d=d.map((function(t){var e=a.data.headers.filter((function(e){return e.uid.split("-")[1]==t}))[0];return p[t]=0,{label:e.displayName,value:t}})),"true"==e.frequency&&(h=a.data.info.valueSets,f=[],m=a.data.headers.map((function(t){return t.uid.split("-")[1]})),m=new Set(m),m=(m=Array.from(m)).map((function(t){var e=a.data.headers.filter((function(e){return e.uid.split("-")[1]==t}))[0];return f[t]=0,{label:e.displayName,value:t}})),Object.keys(a.data.values).forEach((function(t){console.log(t.split("-")[1]),f[t.split("-")[1]]=Number(f[t.split("-")[1]])+Number(a.data.values[t])})),console.log(f),w=m.map((function(t){return{label:t.label,name:t.label,value:f[t.value]/h}})),console.log(w),D({title:e.displayName,attribute:" ",type:e.component,data:w}),console.log(A))):("ASC"==e.sort&&u.sort((function(t,e){return t.value>e.value?1:-1})),"DESC"==e.sort&&u.sort((function(t,e){return t.value<e.value?1:-1})),D({title:e.displayName,attribute:" ",type:e.component,data:u})),v&&(v=!1),N(!1);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,e]),S?s.a.createElement("div",{style:{paddingBottom:"10px"}},s.a.createElement(h.a,{animation:"wave",variant:"rect",width:"100%",height:118})):s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{style:e.height.includes("px")?{height:e.height,width:"100%"}:{width:"100%"},option:"true"==e.groupByAttributes?O(A,A.type):x(A,A.type)}),s.a.createElement("ul",{style:{listStyle:"none",display:"true"==e.showLegend?"block":"none"}},A.data.map((function(t,e){return s.a.createElement("li",{key:e},s.a.createElement(d.a,{key:e,variant:"button",style:{textTransform:"none"}},y[e],": ",t.label))}))),!f&&s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement(p.a,null),s.a.createElement("br",null)))}function x(t,e){return Object(n.a)({title:{text:t.title,subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"pie"==e?"{b} : {c} ({d}%)":"{b} : {c}"}},function(t,e){return"bar"==e?{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t.data.map((function(t){return t.name}))}}:"pie"!==e?{xAxis:{data:t.data.map((function(t){return t.name}))},yAxis:{}}:void 0}(t,e),{series:[{name:t.attribute,type:"colls"==e?"bar":e,center:["50%","60%"],label:{show:!0,position:"bar"==e?"right":"top",formatter:"pie"==e?"{b}({@2012})":"{c}"},data:t.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}function O(t,e){return{title:{text:t.title,subtext:"",x:"center"},tooltip:{},dataset:{source:t.data},xAxis:{type:"category"},yAxis:{},series:E.map((function(t){return{type:"bar"}}))}}},509:function(t,e,a){"use strict";a.d(e,"a",(function(){return v}));var n=a(263),r=a(227),i=a.n(r),o=a(228),u=a(15),c=a(0),l=a.n(c),s=a(55),d=a(410),p=a(6637),h=a(286),f=a.n(h),m=a(56),b=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],y=!0;function v(t){var e=t.dashboard,a=t.period,n=void 0===a?null:a,r=t.isDesktop,h=void 0!==r&&r,v=Object(c.useState)(!0),E=Object(u.a)(v,2),w=E[0],x=E[1],O=Object(c.useState)([]),j=Object(u.a)(O,2),S=j[0],N=j[1];return Object(c.useEffect)((function(){function t(){return(t=Object(o.a)(i.a.mark((function t(){var a,r,o,u,c,l,s,d,p;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y&&x(!0),t.next=3,Promise.resolve(Object(m.c)().getAgregatedData(e.attributeSet,e.attributes,e.orgUnits,"yearly",e.dataCleaners,n));case 3:a=t.sent,"true"==e.frequency?(r=a.data.headers.map((function(t){return t.uid.split("-")[1]})),r=new Set(r),r=Array.from(r),o=[],r=r.map((function(t){var e=a.data.headers.filter((function(e){return e.uid.split("-")[1]==t}))[0];return o[t]=0,{label:e.displayName,value:t}})),"true"==e.frequency&&(u=a.data.info.valueSets,c=[],l=a.data.headers.map((function(t){return t.uid.split("-")[1]})),l=new Set(l),l=(l=Array.from(l)).map((function(t){var e=a.data.headers.filter((function(e){return e.uid.split("-")[1]==t}))[0];return c[t]=0,{label:e.displayName,value:t}})),Object.keys(a.data.values).forEach((function(t){c[t.split("-")[1]]=Number(c[t.split("-")[1]])+Number(a.data.values[t])})),s=l.map((function(t){return{label:t.label,name:t.label,value:(c[t.value]/u).toFixed(2)}})),N({title:e.displayName,attribute:" ",type:e.component,data:s}))):(d={},a.data.headers.forEach((function(t){d[t.uid]={displayName:t.displayName,attribute:t.attribute}})),p=a.data.headers.map((function(t,e){return{label:t.displayName,name:b[e],value:a.data.values[t.uid]}})),N({title:e.displayName,attribute:" ",type:e.component,data:p})),y&&(y=!1),x(!1);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,e]),w?l.a.createElement("div",{style:{paddingBottom:"10px"}},l.a.createElement(p.a,{animation:"wave",variant:"circle",style:{margin:"auto"},width:210,height:210})):l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{option:g(S,S.type)}),l.a.createElement("ul",{style:{listStyle:"none"}},S.data.map((function(t,e){return l.a.createElement("li",{key:e},l.a.createElement(s.a,{key:e,variant:"button",style:{textTransform:"none"}},b[e],": ",t.label))}))),!h&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement(d.a,null),l.a.createElement("br",null)))}function g(t,e){return Object(n.a)({title:{text:t.title,subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"pie"==e?"{b} : {c} ({d}%)":"{b} : {c}"}},function(t,e){return"bar"==e?{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:t.data.map((function(t){return t.name}))}}:"pie"!==e?{xAxis:{data:t.data.map((function(t){return t.name}))},yAxis:{}}:void 0}(t,e),{series:[{name:t.attribute,type:"colls"==e?"bar":e,center:["50%","60%"],label:{show:!0,position:"bar"==e?"right":"top",formatter:"pie"==e?"{b}({@2012})":"{c}"},data:t.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}},510:function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var n=a(227),r=a.n(n),i=a(228),o=a(15),u=a(0),c=a.n(u),l=a(410),s=a(6637),d=a(286),p=a.n(d),h=a(56),f={dias:["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"],horas:["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"]},m=!0;function b(t){var e=t.dashboard,a=t.period,n=void 0===a?null:a,d=t.isDesktop,f=void 0!==d&&d,b=Object(u.useState)(!0),v=Object(o.a)(b,2),g=v[0],E=v[1],w=Object(u.useState)([]),x=Object(o.a)(w,2),O=x[0],j=x[1];return Object(u.useEffect)((function(){function t(){return(t=Object(i.a)(r.a.mark((function t(){var a,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m&&E(!0),t.next=3,Promise.resolve(Object(h.c)().getAgregatedData(e.attributeSet,e.attributes,e.orgUnits,"yearly",e.dataCleaners,n,e.agregationType,"true"));case 3:a=t.sent,i=[],Object.keys(a.data.values).forEach((function(t){i.push([Number(t.split("-")[0]),Number(t.split("-")[1]),a.data.values[t]])})),j({title:e.displayName,attribute:" ",type:e.component,data:i}),m=!1,E(!1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,e]),g?c.a.createElement("div",{style:{paddingBottom:"10px"}},c.a.createElement(s.a,{animation:"wave",variant:"rect",width:"100%",style:{margin:"auto"},height:118})):c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{style:e.height.includes("px")?{height:e.height,width:"100%"}:{width:"100%"},option:y(O)}),!f&&c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement(l.a,null),c.a.createElement("br",null)))}function y(t){return{title:{text:t.title,x:"center"},tooltip:{position:"top",formatter:function(t){return f.horas[t.value[1]]+": "+t.value[2]}},grid:{left:2,bottom:10,right:10,containLabel:!0},xAxis:{type:"category",data:f.dias,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:f.horas,axisLine:{show:!1}},series:[{type:"scatter",symbolSize:function(t){return 4*t[2]},data:t.data,animationDelay:function(t){return 5*t}}]}}},511:function(t,e,a){"use strict";a.d(e,"a",(function(){return v}));var n=a(48),r=a(227),i=a.n(r),o=a(228),u=a(15),c=a(0),l=a.n(c),s=a(410),d=a(6637),p=a(286),h=a.n(p),f=a(56),m=[],b={dias:["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"],horas:["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"]},y=!0;function v(t){var e,a=t.dashboard,r=t.period,p=void 0===r?null:r,v=t.isDesktop,E=void 0!==v&&v,w=Object(c.useState)(!0),x=Object(u.a)(w,2),O=x[0],j=x[1],S=Object(c.useState)([]),N=Object(u.a)(S,2),L=N[0],k=N[1];return Object(c.useEffect)((function(){function t(){return(t=Object(o.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y&&j(!0),t.next=3,Promise.resolve(Object(f.c)().getAgregatedData(a.attributeSet,a.attributes,a.orgUnits,"yearly",a.dataCleaners,p,a.agregationType,"false"));case 3:e=t.sent,n=[],m=[],e.data.headers.forEach((function(t){m[t.uid]={displayName:t.displayName,attribute:t.attribute},n[t.uid]=[]})),Object.keys(e.data.values).forEach((function(t){n[t.split("-")[0]+"-"+t.split("-")[1]].push([Number(t.split("-")[3]),Number(t.split("-")[2]),e.data.values[t]])})),k({ks:e.data.headers.map((function(t){return t.uid})),title:a.displayName,horas:b.horas,dias:b.dias,attribute:" ",type:"scatter",data:n}),y&&(y=!1),j(!1);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[p,a]),O?l.a.createElement("div",{style:{paddingBottom:"10px"}},l.a.createElement(d.a,(e={variant:"rect",width:"100%",style:{margin:"auto"}},Object(n.a)(e,"width",210),Object(n.a)(e,"height",210),e))):l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{style:a.height.includes("px")?{height:a.height,width:"100%"}:{width:"100%"},option:g(L)}),!E&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement(s.a,null),l.a.createElement("br",null)))}function g(t){return{title:{text:t.title,x:"center"},legend:{data:t.ks.map((function(t){return m[t].displayName})),bottom:0},tooltip:{position:"bottom",formatter:function(e){return t.horas[e.value[1]]+": "+e.value[2]}},grid:{left:2,bottom:45,right:10,containLabel:!0},xAxis:{type:"category",data:t.horas,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:t.dias,axisLine:{show:!1}},series:t.ks.map((function(e,a){return{name:m[e].displayName,type:"scatter",symbolSize:function(t){return 4*t[2]},data:t.data[e],animationDelay:function(t){return 5*t}}}))}}},512:function(t,e,a){"use strict";a.d(e,"a",(function(){return w}));var n=a(227),r=a.n(n),i=a(228),o=a(15),u=a(0),c=a.n(u),l=a(526),s=a(213),d=a(107),p=a(55),h=a(217),f=a(410),m=a(6637),b=a(56),y=a(6638),v=a(6639),g=!0,E=[];function w(t){var e=t.dashboard,a=t.period,n=void 0===a?null:a,w=t.isDesktop,x=void 0!==w&&w,O=Object(u.useState)(!0),j=Object(o.a)(O,2),S=j[0],N=j[1],L=Object(u.useState)(!1),k=Object(o.a)(L,2),A=k[0],D=k[1];return Object(u.useEffect)((function(){function t(){return(t=Object(i.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g?N(!0):D(!0),t.next=3,Promise.resolve(Object(b.c)().getFieldsValues(e.attributeSet,e.attributes,e.orgUnits,e.dataCleaners,n));case 3:a=t.sent,E=a.data.valores,g=!1,D(!1),N(!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,e]),S?c.a.createElement("div",{style:{paddingBottom:"10px"}},c.a.createElement(m.a,{animation:"wave",style:{margin:"auto"},variant:"rect",width:210,height:118})):c.a.createElement(c.a.Fragment,null,A&&c.a.createElement(l.a,null),c.a.createElement(s.a,{container:!0,spacing:2},E.map((function(t,e){return c.a.createElement(s.a,{key:e,item:!0,xs:x?3:12},c.a.createElement(d.a,{elevation:0,style:{padding:"7px",backgroundColor:"#eee"}},c.a.createElement(p.a,{component:"div"},c.a.createElement(h.a,{color:"textSecondary"},Object(y.a)(new Date(t[0].created_at),new Date,{locale:v.a})),t.map((function(e,a){return c.a.createElement(c.a.Fragment,{key:a},c.a.createElement(h.a,{fontWeight:"fontWeightMedium"},e.displayName),c.a.createElement(h.a,{fontWeight:"fontWeightRegular"},e.value),a!==t.length-1&&c.a.createElement(f.a,null))})))))}))))}},6703:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return F}));var n=a(264),r=a(227),i=a.n(r),o=a(79),u=a(228),c=a(15),l=a(0),s=a.n(l),d=a(12),p=a(211),h=a(216),f=a(202),m=a(6697),b=a(56),y=a(421),v=a(509),g=a(510),E=a(511),w=a(512),x=a(405),O=a(262);a(403);function j(){var t=Object(n.a)(["\n  display: grid;\n  grid-gap: ",";\n"]);return j=function(){return t},t}function S(){var t=Object(n.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: ",";\n"]);return S=function(){return t},t}function N(t){var e=t.children,a=t.gap,n=(t.minWidth,Object(x.a)(t,["children","gap","minWidth"])),r=Object(l.useRef)(),i=Object(l.useState)(2),u=Object(c.a)(i,2),d=u[0],p=u[1],h=Object(o.a)(Array(d)).map((function(){return[]}));!function(t,e){t.forEach((function(t,a){return e[a%e.length].push(t)}))}(e,h);return Object(l.useEffect)((function(){return p(2)}),[]),s.a.createElement(L,Object.assign({ref:r,gap:a},n),Object(o.a)(Array(d)).map((function(t,e){return s.a.createElement(k,{key:e,gap:a},h[e])})))}var L=O.a.div(S(),(function(t){return t.gap||"1em"})),k=O.a.div(j(),(function(t){return t.gap||"1em"}));function A(){var t=Object(n.a)(["\n  border-radius: 8px;\n  //place-content: center;\n  background-color: white;\n  padding: 10px;\n  display: grid;\n  //min-width: calc(50vw - 40px);\n  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);\n"]);return A=function(){return t},t}var D=[];function F(t){var e,a=Object(l.useState)(!0),n=Object(c.a)(a,2),r=n[0],x=n[1],O=Object(l.useState)(""),j=Object(c.a)(O,2),S=j[0],L=(j[1],Object(l.useState)(!1)),k=Object(c.a)(L,2),A=k[0],F=(k[1],Object(l.useState)(!1)),C=Object(c.a)(F,2),_=C[0],P=C[1],T=Object(l.useState)([]),G=Object(c.a)(T,2),W=G[0],U=G[1];function I(){return(I=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve(Object(b.c)().getDashboardColecction());case 2:e=t.sent,D=e.data,U(e.data[0]),x(!1),P(!_);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.useEffect)((function(){!function(){I.apply(this,arguments)}()}),[]),A?s.a.createElement(d.a,{to:S}):s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,null,s.a.createElement(m.a,{multiple:!0,onChange:function(t,e){if(e.length<=0)U({dashboardElements:[]});else{var a=[];e.forEach((function(t){a=[].concat(Object(o.a)(a),Object(o.a)(t.dashboardElements))}));var n=e[0];n.dashboardElements=a,U(n),P(!_)}},getOptionLabel:function(t){return t.displayName},fullWidth:!0,id:"dashboard",options:D,style:{minWidth:200},renderInput:function(t){return s.a.createElement(h.a,Object.assign({fullWidth:!0},t,{label:"Dashboard"}))}})),s.a.createElement("br",null),r?s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement(f.a,null)):s.a.createElement("div",{style:{padding:"0px 10px 10px 10px"}},s.a.createElement(N,null,(e=W,e.dashboardElements.map((function(t){return{component:t.dashboard.component,displayName:t.dashboard.displayName,attributeSet:t.dashboard.attributeSet.uid,dataCleaners:t.dashboard.dataCleaners,countEntries:t.dashboard.countEntries,agregationType:t.dashboard.agregationType,attributes:t.dashboard.attributes.map((function(t){return t.uid})),orgUnits:t.dashboard.orgUnits.map((function(t){return t.uid})),useDisplayNameAsLabel:t.dashboard.useDisplayNameAsLabel,groupByAttributes:t.dashboard.groupByAttributes,sort:t.dashboard.sort,showLegend:t.dashboard.showLegend,height:t.dashboard.height}}))).filter((function(t){return"table"!==t.component})).map((function(e,a){return s.a.createElement(B,{style:{minWidth:"calc(50vw - ".concat(t.isSideBarVisible?"260":"40","px)")},key:a},function(t){switch(t.component){case"pie":return s.a.createElement(v.a,{isDesktop:!0,period:null,dashboard:t});case"scatter":return t.countEntries.includes("true")?s.a.createElement(g.a,{isDesktop:!0,period:null,dashboard:t}):s.a.createElement(E.a,{isDesktop:!0,period:null,dashboard:t});case"table":return s.a.createElement(w.a,{period:null,dashboard:t});default:return s.a.createElement(y.a,{isDesktop:!0,period:null,dashboard:t})}}(e))})))))}var B=O.a.div(A())}}]);
//# sourceMappingURL=24.d50d5a12.chunk.js.map