(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[25],{317:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(244),r=a(225),i=a.n(r),o=a(79),u=a(226),l=a(15),c=a(0),s=a.n(c),d=a(202),p=a(55),m=a(339),b=a(253),h=a.n(b),f=a(56),y=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],g=!0,x=[],E=[];function v(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,r=e.isDesktop,b=void 0!==r&&r,v=Object(c.useState)(!0),w=Object(l.a)(v,2),S=w[0],A=w[1],k=Object(c.useState)({data:[]}),D=Object(l.a)(k,2),N=D[0],L=D[1];return Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var a,r,u,l,c,s,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g&&A(!0),e.next=3,Promise.resolve(Object(f.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n));case 3:a=e.sent,r={},a.data.headers.forEach((function(e){r[e.uid]={displayName:e.displayName,attribute:e.attribute}})),u=a.data.headers.map((function(e,n){return{label:e.displayName,name:"true"==t.useDisplayNameAsLabel?e.displayName:y[n],value:a.data.values[e.uid]}})),"true"==t.groupByAttributes&&(l=a.data.headers.map((function(e){return e.uid.split("-")[1]})),l=new Set(l),l=(l=Array.from(l)).map((function(e){return{label:a.data.headers.filter((function(t){return t.uid.split("-")[1]==e}))[0].displayName,value:e}})),c=a.data.headers.map((function(e){return e.attributeUID})),c=new Set(c),c=Array.from(c),E=l,c=c.map((function(e){return{label:a.data.headers.filter((function(t){return t.attributeUID==e}))[0].attribute,value:e}})),x=[["product"].concat(Object(o.a)(l.map((function(e){return e.label}))))].concat(Object(o.a)(c.map((function(e){return[e.label].concat(Object(o.a)(l.map((function(t){return Boolean(a.data.values[e.value+"-"+t.value])?a.data.values[e.value+"-"+t.value]:0}))))})))),L({title:t.displayName,attribute:" ",type:t.component,data:x})),"true"==t.groupByOptions?(s=a.data.headers.map((function(e){return e.uid.split("-")[1]})),s=new Set(s),s=(s=Array.from(s)).map((function(e){return{label:a.data.headers.filter((function(t){return t.uid.split("-")[1]==e}))[0].displayName,value:e}})),d=a.data.headers.map((function(e){return e.attributeUID})),d=new Set(d),d=Array.from(d),E=d,d=d.map((function(e){return{label:a.data.headers.filter((function(t){return t.attributeUID==e}))[0].attribute,value:e}})),x=[["product"].concat(Object(o.a)(d.map((function(e){return e.label}))))].concat(Object(o.a)(s.map((function(e){return[e.label].concat(Object(o.a)(d.map((function(t){return Boolean(a.data.values[t.value+"-"+e.value])?a.data.values[t.value+"-"+e.value]:0}))))})))),console.log(x),L({title:t.displayName,attribute:" ",type:t.component,data:x})):("ASC"==t.sort&&u.sort((function(e,t){return e.value>t.value?1:-1})),"DESC"==t.sort&&u.sort((function(e,t){return e.value<t.value?1:-1})),L({title:t.displayName,attribute:" ",type:t.component,data:u})),A(!1),g=!1;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),S?s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement(d.a,null),s.a.createElement("br",null)):s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{style:t.height.includes("px")?{height:t.height,width:"100%"}:{width:"100%"},option:"true"==t.groupByAttributes||"true"==t.groupByOptions?j(N,N.type):O(N,N.type)}),s.a.createElement("ul",{style:{listStyle:"none",display:"true"==t.showLegend?"block":"none"}},N.data.map((function(e,t){return s.a.createElement("li",{key:t},s.a.createElement(p.a,{key:t,variant:"button",style:{textTransform:"none"}},y[t],": ",e.label))}))),!b&&s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement(m.a,null),s.a.createElement("br",null)))}function O(e,t){return Object(n.a)({title:{text:e.title,subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"pie"==t?"{b} : {c} ({d}%)":"{b} : {c}"}},function(e,t){return"bar"==t?{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:e.data.map((function(e){return e.name}))}}:"pie"!==t?{xAxis:{data:e.data.map((function(e){return e.name}))},yAxis:{}}:void 0}(e,t),{series:[{name:e.attribute,type:"colls"==t?"bar":t,center:["50%","60%"],label:{show:!0,position:"bar"==t?"right":"top",formatter:"pie"==t?"{b}({@2012})":"{c}"},data:e.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}function j(e,t){return{title:{text:e.title,subtext:"",x:"center"},tooltip:{},dataset:{source:e.data},xAxis:{type:"category"},yAxis:{},series:E.map((function(e){return{type:"bar"}}))}}},333:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(244),r=a(225),i=a.n(r),o=a(226),u=a(15),l=a(0),c=a.n(l),s=a(202),d=a(55),p=a(339),m=a(253),b=a.n(m),h=a(56),f=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],y=!0;function g(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,r=e.isDesktop,m=void 0!==r&&r,g=Object(l.useState)(!0),E=Object(u.a)(g,2),v=E[0],O=E[1],j=Object(l.useState)([]),w=Object(u.a)(j,2),S=w[0],A=w[1];return Object(l.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y&&O(!0),e.next=3,Promise.resolve(Object(h.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n));case 3:a=e.sent,r={},a.data.headers.forEach((function(e){r[e.uid]={displayName:e.displayName,attribute:e.attribute}})),o=a.data.headers.map((function(e,t){return{label:e.displayName,name:f[t],value:a.data.values[e.uid]}})),A({title:t.displayName,attribute:" ",type:t.component,data:o}),O(!1),y=!1;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),v?c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(s.a,null),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{option:x(S,S.type)}),c.a.createElement("ul",{style:{listStyle:"none"}},S.data.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement(d.a,{key:t,variant:"button",style:{textTransform:"none"}},f[t],": ",e.label))}))),!m&&c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement(p.a,null),c.a.createElement("br",null)))}function x(e,t){return Object(n.a)({title:{text:e.title,subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"pie"==t?"{b} : {c} ({d}%)":"{b} : {c}"}},function(e,t){return"bar"==t?{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:e.data.map((function(e){return e.name}))}}:"pie"!==t?{xAxis:{data:e.data.map((function(e){return e.name}))},yAxis:{}}:void 0}(e,t),{series:[{name:e.attribute,type:"colls"==t?"bar":t,center:["50%","60%"],label:{show:!0,position:"bar"==t?"right":"top",formatter:"pie"==t?"{b}({@2012})":"{c}"},data:e.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}},334:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(225),r=a.n(n),i=a(226),o=a(15),u=a(0),l=a.n(u),c=a(202),s=a(339),d=a(253),p=a.n(d),m=a(56),b={dias:["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"],horas:["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"]},h=!0;function f(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,d=e.isDesktop,b=void 0!==d&&d,f=Object(u.useState)(!0),g=Object(o.a)(f,2),x=g[0],E=g[1],v=Object(u.useState)([]),O=Object(o.a)(v,2),j=O[0],w=O[1];return Object(u.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h&&E(!0),e.next=3,Promise.resolve(Object(m.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n,t.agregationType,"true"));case 3:a=e.sent,i=[],Object.keys(a.data).forEach((function(e){i.push([Number(e.split("-")[0]),Number(e.split("-")[1]),a.data[e]])})),w({title:t.displayName,attribute:" ",type:t.component,data:i}),E(!1),h=!1;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),x?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(c.a,null),l.a.createElement("br",null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{style:t.height.includes("px")?{height:t.height,width:"100%"}:{width:"100%"},option:y(j)}),!b&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement(s.a,null),l.a.createElement("br",null)))}function y(e){return{title:{text:e.title,x:"center"},tooltip:{position:"top",formatter:function(e){return b.horas[e.value[1]]+": "+e.value[2]}},grid:{left:2,bottom:10,right:10,containLabel:!0},xAxis:{type:"category",data:b.dias,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:b.horas,axisLine:{show:!1}},series:[{type:"scatter",symbolSize:function(e){return 4*e[2]},data:e.data,animationDelay:function(e){return 5*e}}]}}},335:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a(225),r=a.n(n),i=a(226),o=a(15),u=a(0),l=a.n(u),c=a(202),s=a(339),d=a(253),p=a.n(d),m=a(56),b=[],h={dias:["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"],horas:["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"]},f=!0;function y(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,d=e.isDesktop,y=void 0!==d&&d,x=Object(u.useState)(!0),E=Object(o.a)(x,2),v=E[0],O=E[1],j=Object(u.useState)([]),w=Object(o.a)(j,2),S=w[0],A=w[1];return Object(u.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f&&O(!0),e.next=3,Promise.resolve(Object(m.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n,t.agregationType,"false"));case 3:a=e.sent,i=[],b=[],a.data.headers.forEach((function(e){b[e.uid]={displayName:e.displayName,attribute:e.attribute},i[e.uid]=[]})),Object.keys(a.data.values).forEach((function(e){i[e.split("-")[0]+"-"+e.split("-")[1]].push([Number(e.split("-")[3]),Number(e.split("-")[2]),a.data.values[e]])})),A({ks:a.data.headers.map((function(e){return e.uid})),title:t.displayName,horas:h.horas,dias:h.dias,attribute:" ",type:"scatter",data:i}),O(!1),f=!1;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),v?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(c.a,null),l.a.createElement("br",null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{style:t.height.includes("px")?{height:t.height,width:"100%"}:{width:"100%"},option:g(S)}),!y&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement(s.a,null),l.a.createElement("br",null)))}function g(e){return{title:{text:e.title,x:"center"},legend:{data:e.ks.map((function(e){return b[e].displayName})),bottom:0},tooltip:{position:"bottom",formatter:function(t){return e.horas[t.value[1]]+": "+t.value[2]}},grid:{left:2,bottom:45,right:10,containLabel:!0},xAxis:{type:"category",data:e.horas,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:e.dias,axisLine:{show:!1}},series:e.ks.map((function(t,a){return{name:b[t].displayName,type:"scatter",symbolSize:function(e){return 4*e[2]},data:e.data[t],animationDelay:function(e){return 5*e}}}))}}},6649:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a(225),r=a.n(n),i=a(226),o=a(15),u=a(0),l=a.n(u),c=a(107),s=a(55),d=a(6312),p=a(212),m=a(197),b=a(202),h=a(217),f=a(340),y=a(341),g=a(192),x=a(149),E=a(194),v=a(456),O=a(110),j=a(6684),w=a(6693),S=a(56),A=a(317),k=a(333),D=a(334),N=a(335),L=[];function C(){var e=Object(u.useState)(!0),t=Object(o.a)(e,2),a=t[0],n=t[1],C=Object(u.useState)(3),T=Object(o.a)(C,2),B=T[0],F=T[1],U=Object(u.useState)([]),H=Object(o.a)(U,2),M=H[0],R=H[1],I=Object(u.useState)(!1),G=Object(o.a)(I,2),P=G[0],Q=G[1],W=Object(u.useState)(null),z=Object(o.a)(W,2),J=z[0],X=z[1],K=Object(u.useState)(null),V=Object(o.a)(K,2),Y=(V[0],V[1]);function Z(){return(Z=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(S.c)().getDashboardColecction());case 2:t=e.sent,L=t.data,t.data.length>0&&(Y(t.data[0].displayName),q(t.data[0])),n(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){var t=e.dashboardElements.map((function(e){return{component:e.dashboard.component,displayName:e.dashboard.displayName,attributeSet:e.dashboard.attributeSet.uid,dataCleaners:e.dashboard.dataCleaners,countEntries:e.dashboard.countEntries,agregationType:e.dashboard.agregationType,attributes:e.dashboard.attributes.map((function(e){return e.uid})),orgUnits:e.dashboard.orgUnits.map((function(e){return e.uid})),useDisplayNameAsLabel:e.dashboard.useDisplayNameAsLabel,groupByAttributes:e.dashboard.groupByAttributes,showLegend:e.dashboard.showLegend,height:e.dashboard.height,sort:e.dashboard.sort}}));R(t)}function $(){var e=new Date;return e.setHours(0),e.setMinutes(0),e}function _(e){var t=new Date;return t.setHours(0),t.setMinutes(0),Object(j.a)(Object(w.a)(t,e),"yyyy-MM-dd HH:mm")}return Object(u.useEffect)((function(){!function(){Z.apply(this,arguments)}()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{style:{padding:"7px 7px 7px 7px",width:"calc(100% - 14px)",borderRadius:"0px",zIndex:"50",textAlign:"center",position:"fixed",marginTop:"55px"}},l.a.createElement(s.a,{variant:"button",style:{textTransform:"none"}},"\xdaltim@s"),l.a.createElement("br",null),l.a.createElement(d.a,{disableElevation:!0,variant:"contained",color:"secondary"},l.a.createElement(p.a,{onClick:function(){F(3),X(null)},variant:3==B?"contained":"outlined",style:{borderTopLeftRadius:"1.3em",borderBottomLeftRadius:"1.3em",minWidth:"75px",textTransform:"none"}},"Geral"),l.a.createElement(p.a,{onClick:function(){F(0),X({startDate:"".concat(Object(j.a)($(),"yyyy-MM-dd HH:m")),endDate:"".concat(Object(j.a)(new Date,"yyyy-MM-dd HH:mm"))})},variant:0==B?"contained":"outlined",style:{minWidth:"75px",borderLeft:"none",textTransform:"none"}},"Hoje"),l.a.createElement(p.a,{onClick:function(){F(1),X({endDate:"".concat(_(1)),startDate:"".concat(_(8))})},variant:1==B?"contained":"outlined",style:{minWidth:"75px",borderLeft:"none",textTransform:"none"}},"7 dias"),l.a.createElement(p.a,{onClick:function(){F(2),X({endDate:"".concat(_(1)),startDate:"".concat(_(31))})},variant:2==B?"contained":"outlined",style:{borderTopRightRadius:"1.3em",borderBottomRightRadius:"1.3em",minWidth:"75px",textTransform:"none",borderLeft:"none"}},"30 dias"))),l.a.createElement("br",null),l.a.createElement(m.a,{color:"secondary",onClick:function(){Q(!0)},style:{position:"fixed",boxShadow:"none",zIndex:49,top:"127px",right:"0px",margin:"auto"}},l.a.createElement(O.i,null)),l.a.createElement("div",{style:{padding:"10px",marginTop:"107px"}},a?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(b.a,null)):l.a.createElement(h.a,{style:{width:"100%"}},M.map((function(e,t){return function(e,t){switch(e.component){case"pie":return l.a.createElement(k.a,{key:t,period:J,dashboard:e});case"scatter":return e.countEntries.includes("true")?l.a.createElement(D.a,{key:t,period:J,dashboard:e}):l.a.createElement(N.a,{key:t,period:J,dashboard:e});default:return l.a.createElement(A.a,{key:t,period:J,dashboard:e})}}(e,t)})))),l.a.createElement(f.a,{open:P,title:"Dashboard collection"},l.a.createElement(y.a,{style:{padding:"0px"}},l.a.createElement(g.a,{component:"div",role:"list"},L.map((function(e,t){return l.a.createElement(x.a,{role:"listitem",button:!0,onClick:function(){q(e),Q(!1)},key:t},l.a.createElement(E.a,{primary:e.displayName}))})))),l.a.createElement(v.a,{style:{textAlign:"right"}},l.a.createElement(p.a,{onClick:function(){Q(!1)},color:"secondary"},"Fechar"))))}}}]);
//# sourceMappingURL=25.f1651894.chunk.js.map