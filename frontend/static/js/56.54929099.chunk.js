(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[56],{6678:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return V}));var n=a(220),r=a.n(n),i=a(221),o=a(16),c=a(0),l=a.n(c),s=a(104),u=a(53),d=a(6299),p=a(208),m=a(193),b=a(198),y=a(213),h=a(331),f=a(332),E=a(188),x=a(146),g=a(190),v=a(447),O=a(107),j=a(6674),S=a(6684),w=a(54),k=a(244),A=a(330),D=a(310),N=a.n(D),T=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],C=!0;function L(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,s=Object(c.useState)(!0),d=Object(o.a)(s,2),p=d[0],m=d[1],y=Object(c.useState)([]),h=Object(o.a)(y,2),f=h[0],E=h[1];return Object(c.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){var a,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C&&m(!0),e.next=3,Promise.resolve(Object(w.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n));case 3:a=e.sent,i={},a.data.headers.forEach((function(e){i[e.uid]={displayName:e.displayName,attribute:e.attribute}})),o=a.data.headers.map((function(e,t){return{label:e.displayName,name:T[t],value:a.data.values[e.uid]}})),E({title:t.displayName,attribute:" ",type:t.component,data:o}),m(!1),C=!1;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),p?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(b.a,null),l.a.createElement("br",null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{option:M(f,f.type)}),l.a.createElement("ul",{style:{listStyle:"none"}},f.data.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(u.a,{key:t,variant:"button",style:{textTransform:"none"}},T[t],": ",e.label))}))),l.a.createElement("br",null),l.a.createElement(A.a,null),l.a.createElement("br",null))}function M(e,t){return Object(k.a)({title:{text:e.title,subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"pie"==t?"{b} : {c} ({d}%)":"{b} : {c}"}},function(e,t){return"bar"==t?{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:e.data.map((function(e){return e.name}))}}:"pie"!==t?{xAxis:{data:e.data.map((function(e){return e.name}))},yAxis:{}}:void 0}(e,t),{series:[{name:e.attribute,type:"colls"==t?"bar":t,center:["50%","60%"],label:{show:!0,position:"bar"==t?"right":"top",formatter:"pie"==t?"{b}({@2012})":"{c}"},data:e.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}var R=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],F=!0;function U(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,s=Object(c.useState)(!0),d=Object(o.a)(s,2),p=d[0],m=d[1],y=Object(c.useState)([]),h=Object(o.a)(y,2),f=h[0],E=h[1];return Object(c.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){var a,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F&&m(!0),e.next=3,Promise.resolve(Object(w.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n));case 3:a=e.sent,i={},a.data.headers.forEach((function(e){i[e.uid]={displayName:e.displayName,attribute:e.attribute}})),o=a.data.headers.map((function(e,t){return{label:e.displayName,name:R[t],value:a.data.values[e.uid]}})),E({title:t.displayName,attribute:" ",type:t.component,data:o}),m(!1),F=!1;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),p?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(b.a,null),l.a.createElement("br",null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{option:G(f,f.type)}),l.a.createElement("ul",{style:{listStyle:"none"}},f.data.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(u.a,{key:t,variant:"button",style:{textTransform:"none"}},R[t],": ",e.label))}))),l.a.createElement("br",null),l.a.createElement(A.a,null),l.a.createElement("br",null))}function G(e,t){return Object(k.a)({title:{text:e.title,subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"pie"==t?"{b} : {c} ({d}%)":"{b} : {c}"}},function(e,t){return"bar"==t?{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:e.data.map((function(e){return e.name}))}}:"pie"!==t?{xAxis:{data:e.data.map((function(e){return e.name}))},yAxis:{}}:void 0}(e,t),{series:[{name:e.attribute,type:"colls"==t?"bar":t,center:["50%","60%"],label:{show:!0,position:"bar"==t?"right":"top",formatter:"pie"==t?"{b}({@2012})":"{c}"},data:e.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}var P={dias:["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","Sabado","Domingo"],horas:["0h","1h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"]},B=!0;function Q(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,s=Object(c.useState)(!0),u=Object(o.a)(s,2),d=u[0],p=u[1],m=Object(c.useState)([]),y=Object(o.a)(m,2),h=y[0],f=y[1];return Object(c.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B&&p(!0),e.next=3,Promise.resolve(Object(w.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n,t.agregationType,"true"));case 3:a=e.sent,i=[],Object.keys(a.data).forEach((function(e){i.push([Number(e.split("-")[0]),Number(e.split("-")[1]),a.data[e]])})),f({title:t.displayName,horas:P.horas,dias:P.dias,attribute:" ",type:t.component,data:i}),p(!1),B=!1;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),d?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(b.a,null),l.a.createElement("br",null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{option:W(h)}),l.a.createElement(A.a,null),l.a.createElement("br",null))}function W(e){return{title:{text:e.title,x:"center"},tooltip:{position:"top",formatter:function(t){return e.horas[t.value[1]]+": "+t.value[2]}},grid:{left:2,bottom:10,right:10,containLabel:!0},xAxis:{type:"category",data:e.dias,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:e.horas,axisLine:{show:!1}},series:[{type:"scatter",symbolSize:function(e){return 4*e[2]},data:e.data,animationDelay:function(e){return 5*e}}]}}var z=[],I={dias:["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","Sabado","Domingo"],horas:["0h","1h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"]},J=!0;function X(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,s=Object(c.useState)(!0),u=Object(o.a)(s,2),d=u[0],p=u[1],m=Object(c.useState)([]),y=Object(o.a)(m,2),h=y[0],f=y[1];return Object(c.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J&&p(!0),e.next=3,Promise.resolve(Object(w.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n,t.agregationType,"false"));case 3:a=e.sent,i=[],z=[],a.data.headers.forEach((function(e){z[e.uid]={displayName:e.displayName,attribute:e.attribute},i[e.uid]=[]})),Object.keys(a.data.values).forEach((function(e){i[e.split("-")[0]+"-"+e.split("-")[1]].push([Number(e.split("-")[3]),Number(e.split("-")[2]),a.data.values[e]])})),f({ks:a.data.headers.map((function(e){return e.uid})),title:t.displayName,horas:I.horas,dias:I.dias,attribute:" ",type:"scatter",data:i}),p(!1),J=!1;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),d?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(b.a,null),l.a.createElement("br",null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{option:H(h)}),l.a.createElement(A.a,null),l.a.createElement("br",null))}function H(e){return{title:{text:e.title,x:"center"},legend:{data:e.ks.map((function(e){return z[e].displayName})),bottom:0},tooltip:{position:"bottom",formatter:function(t){return e.horas[t.value[1]]+": "+t.value[2]}},grid:{left:2,bottom:45,right:10,containLabel:!0},xAxis:{type:"category",data:e.horas,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:e.dias,axisLine:{show:!1}},series:e.ks.map((function(t,a){return{name:z[t].displayName,type:"scatter",symbolSize:function(e){return 4*e[2]},data:e.data[t],animationDelay:function(e){return 5*e}}}))}}var K=[];function V(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),a=t[0],n=t[1],k=Object(c.useState)(3),A=Object(o.a)(k,2),D=A[0],N=A[1],T=Object(c.useState)([]),C=Object(o.a)(T,2),M=C[0],R=C[1],F=Object(c.useState)(!1),G=Object(o.a)(F,2),P=G[0],B=G[1],W=Object(c.useState)(null),z=Object(o.a)(W,2),I=z[0],J=z[1],H=Object(c.useState)(null),V=Object(o.a)(H,2),Y=(V[0],V[1]);function Z(){return(Z=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(w.c)().getDashboardColecction());case 2:t=e.sent,K=t.data,t.data.length>0&&(Y(t.data[0].displayName),q(t.data[0])),n(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){var t=e.dashboardElements.map((function(e){return{component:e.dashboard.component,displayName:e.dashboard.displayName,attributeSet:e.dashboard.attributeSet.uid,dataCleaners:e.dashboard.dataCleaners,countEntries:e.dashboard.countEntries,agregationType:e.dashboard.agregationType,attributes:e.dashboard.attributes.map((function(e){return e.uid})),orgUnits:e.dashboard.orgUnits.map((function(e){return e.uid}))}}));R(t)}return Object(c.useEffect)((function(){!function(){Z.apply(this,arguments)}()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{style:{padding:"7px 7px 7px 7px",width:"calc(100% - 14px)",borderRadius:"0px",zIndex:"50",textAlign:"center",position:"fixed",marginTop:"55px"}},l.a.createElement(u.a,{variant:"button",style:{textTransform:"none"}},"\xdaltim@s"),l.a.createElement("br",null),l.a.createElement(d.a,{disableElevation:!0,variant:"contained",color:"secondary"},l.a.createElement(p.a,{onClick:function(){N(3),J(null)},variant:3==D?"contained":"outlined",style:{borderTopLeftRadius:"1.3em",borderBottomLeftRadius:"1.3em",minWidth:"75px",textTransform:"none"}},"Geral"),l.a.createElement(p.a,{onClick:function(){N(0),J({endDate:"".concat(Object(j.a)(new Date,"yyyy-MM-dd")),startDate:"".concat(Object(j.a)(Object(S.a)(new Date,1),"yyyy-MM-dd"))})},variant:0==D?"contained":"outlined",style:{minWidth:"75px",borderLeft:"none",textTransform:"none"}},"24h"),l.a.createElement(p.a,{onClick:function(){N(1),J({endDate:"".concat(Object(j.a)(new Date,"yyyy-MM-dd")),startDate:"".concat(Object(j.a)(Object(S.a)(new Date,7),"yyyy-MM-dd"))})},variant:1==D?"contained":"outlined",style:{minWidth:"75px",borderLeft:"none",textTransform:"none"}},"7 dias"),l.a.createElement(p.a,{onClick:function(){N(2),J({endDate:"".concat(Object(j.a)(new Date,"yyyy-MM-dd")),startDate:"".concat(Object(j.a)(Object(S.a)(new Date,30),"yyyy-MM-dd"))})},variant:2==D?"contained":"outlined",style:{borderTopRightRadius:"1.3em",borderBottomRightRadius:"1.3em",minWidth:"75px",textTransform:"none",borderLeft:"none"}},"30 dias"))),l.a.createElement("br",null),l.a.createElement(m.a,{color:"secondary",onClick:function(){B(!0)},style:{position:"fixed",boxShadow:"none",zIndex:49,top:"127px",right:"0px",margin:"auto"}},l.a.createElement(O.i,null)),l.a.createElement("div",{style:{padding:"10px",marginTop:"107px"}},a?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(b.a,null)):l.a.createElement(y.a,{style:{width:"100%"}},M.map((function(e,t){return function(e,t){switch(e.component){case"pie":return l.a.createElement(U,{key:t,period:I,dashboard:e});case"scatter":return e.countEntries.includes("true")?l.a.createElement(Q,{key:t,period:I,dashboard:e}):l.a.createElement(X,{key:t,period:I,dashboard:e});default:return l.a.createElement(L,{key:t,period:I,dashboard:e})}}(e)})))),l.a.createElement(h.a,{open:P,title:"Dashboard collection"},l.a.createElement(f.a,{style:{padding:"0px"}},l.a.createElement(E.a,{component:"div",role:"list"},K.map((function(e,t){return l.a.createElement(x.a,{role:"listitem",button:!0,onClick:function(){q(e),B(!1)},key:t},l.a.createElement(g.a,{primary:e.displayName}))})))),l.a.createElement(v.a,{style:{textAlign:"right"}},l.a.createElement(p.a,{onClick:function(){B(!1)},color:"secondary"},"Fechar"))))}}}]);
//# sourceMappingURL=56.54929099.chunk.js.map