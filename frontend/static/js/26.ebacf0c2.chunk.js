(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[26],{321:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(242),r=a(225),i=a.n(r),o=a(79),l=a(226),u=a(15),c=a(0),s=a.n(c),d=a(56),p=a(388),m=a(6655),b=a(253),h=a.n(b),f=a(40),y=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],v=!0,g=[],E=[];function x(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,r=e.isDesktop,b=void 0!==r&&r,x=Object(c.useState)(!0),w=Object(u.a)(x,2),S=w[0],k=w[1],A=Object(c.useState)({data:[]}),N=Object(u.a)(A,2),D=N[0],C=N[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var a,r,l,u,c,s,d,p,m,b,h,x;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v&&k(!0),e.next=3,Promise.resolve(Object(f.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n));case 3:a=e.sent,r={},a.data.headers.forEach((function(e){r[e.uid]={displayName:e.displayName,attribute:e.attribute}})),l=a.data.headers.map((function(e,n){return{label:e.displayName,name:"true"==t.useDisplayNameAsLabel?e.displayName:y[n],value:a.data.values[e.uid]}})),"true"==t.groupByAttributes?(u=a.data.headers.map((function(e){return e.uid.split("-")[1]})),u=new Set(u),u=(u=Array.from(u)).map((function(e){return{label:a.data.headers.filter((function(t){return t.uid.split("-")[1]==e}))[0].displayName,value:e}})),c=a.data.headers.map((function(e){return e.attributeUID})),c=new Set(c),c=Array.from(c),E=u,c=c.map((function(e){return{label:a.data.headers.filter((function(t){return t.attributeUID==e}))[0].attribute,value:e}})),"true"==t.frequency?(s=a.data.info.valueSets,console.log(s),console.log([["product"].concat(Object(o.a)(u.map((function(e){return e.label}))))].concat(Object(o.a)(c.map((function(e){return[e.label].concat(Object(o.a)(u.map((function(t){return Boolean(a.data.values[e.value+"-"+t.value])?a.data.values[e.value+"-"+t.value]:0}))))}))))),g=[["product"].concat(Object(o.a)(u.map((function(e){return e.label}))))].concat(Object(o.a)(c.map((function(e){return[e.label].concat(Object(o.a)(u.map((function(t){return Boolean(a.data.values[e.value+"-"+t.value])?a.data.values[e.value+"-"+t.value]/s:0}))))}))))):g=[["product"].concat(Object(o.a)(u.map((function(e){return e.label}))))].concat(Object(o.a)(c.map((function(e){return[e.label].concat(Object(o.a)(u.map((function(t){return Boolean(a.data.values[e.value+"-"+t.value])?a.data.values[e.value+"-"+t.value]:0}))))})))),C({title:t.displayName,attribute:" ",type:t.component,data:g})):"true"==t.groupByOptions?(d=a.data.headers.map((function(e){return e.uid.split("-")[1]})),d=new Set(d),d=Array.from(d),p=[],d=d.map((function(e){var t=a.data.headers.filter((function(t){return t.uid.split("-")[1]==e}))[0];return p[e]=0,{label:t.displayName,value:e}})),"true"==t.frequency&&(m=a.data.info.valueSets,b=[],h=a.data.headers.map((function(e){return e.uid.split("-")[1]})),h=new Set(h),h=(h=Array.from(h)).map((function(e){var t=a.data.headers.filter((function(t){return t.uid.split("-")[1]==e}))[0];return b[e]=0,{label:t.displayName,value:e}})),Object.keys(a.data.values).forEach((function(e){console.log(e.split("-")[1]),b[e.split("-")[1]]=Number(b[e.split("-")[1]])+Number(a.data.values[e])})),console.log(b),x=h.map((function(e){return{label:e.label,name:e.label,value:b[e.value]/m}})),console.log(x),C({title:t.displayName,attribute:" ",type:t.component,data:x}),console.log(D))):("ASC"==t.sort&&l.sort((function(e,t){return e.value>t.value?1:-1})),"DESC"==t.sort&&l.sort((function(e,t){return e.value<t.value?1:-1})),C({title:t.displayName,attribute:" ",type:t.component,data:l})),v&&(v=!1),k(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),S?s.a.createElement("div",{style:{paddingBottom:"10px"}},s.a.createElement(m.a,{animation:"wave",variant:"rect",width:"100%",height:118})):s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{style:t.height.includes("px")?{height:t.height,width:"100%"}:{width:"100%"},option:"true"==t.groupByAttributes?j(D,D.type):O(D,D.type)}),s.a.createElement("ul",{style:{listStyle:"none",display:"true"==t.showLegend?"block":"none"}},D.data.map((function(e,t){return s.a.createElement("li",{key:t},s.a.createElement(d.a,{key:t,variant:"button",style:{textTransform:"none"}},y[t],": ",e.label))}))),!b&&s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement(p.a,null),s.a.createElement("br",null)))}function O(e,t){return Object(n.a)({title:{text:e.title,subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"pie"==t?"{b} : {c} ({d}%)":"{b} : {c}"}},function(e,t){return"bar"==t?{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:e.data.map((function(e){return e.name}))}}:"pie"!==t?{xAxis:{data:e.data.map((function(e){return e.name}))},yAxis:{}}:void 0}(e,t),{series:[{name:e.attribute,type:"colls"==t?"bar":t,center:["50%","60%"],label:{show:!0,position:"bar"==t?"right":"top",formatter:"pie"==t?"{b}({@2012})":"{c}"},data:e.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}function j(e,t){return{title:{text:e.title,subtext:"",x:"center"},tooltip:{},dataset:{source:e.data},xAxis:{type:"category"},yAxis:{},series:E.map((function(e){return{type:"bar"}}))}}},337:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(242),r=a(225),i=a.n(r),o=a(226),l=a(15),u=a(0),c=a.n(u),s=a(56),d=a(388),p=a(6655),m=a(253),b=a.n(m),h=a(40),f=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],y=!0;function v(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,r=e.isDesktop,m=void 0!==r&&r,v=Object(u.useState)(!0),E=Object(l.a)(v,2),x=E[0],O=E[1],j=Object(u.useState)([]),w=Object(l.a)(j,2),S=w[0],k=w[1];return Object(u.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var a,r,o,l,u,c,s,d,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y&&O(!0),e.next=3,Promise.resolve(Object(h.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n));case 3:a=e.sent,"true"==t.frequency?(r=a.data.headers.map((function(e){return e.uid.split("-")[1]})),r=new Set(r),r=Array.from(r),o=[],r=r.map((function(e){var t=a.data.headers.filter((function(t){return t.uid.split("-")[1]==e}))[0];return o[e]=0,{label:t.displayName,value:e}})),"true"==t.frequency&&(l=a.data.info.valueSets,u=[],c=a.data.headers.map((function(e){return e.uid.split("-")[1]})),c=new Set(c),c=(c=Array.from(c)).map((function(e){var t=a.data.headers.filter((function(t){return t.uid.split("-")[1]==e}))[0];return u[e]=0,{label:t.displayName,value:e}})),Object.keys(a.data.values).forEach((function(e){u[e.split("-")[1]]=Number(u[e.split("-")[1]])+Number(a.data.values[e])})),s=c.map((function(e){return{label:e.label,name:e.label,value:(u[e.value]/l).toFixed(2)}})),k({title:t.displayName,attribute:" ",type:t.component,data:s}))):(d={},a.data.headers.forEach((function(e){d[e.uid]={displayName:e.displayName,attribute:e.attribute}})),p=a.data.headers.map((function(e,t){return{label:e.displayName,name:f[t],value:a.data.values[e.uid]}})),k({title:t.displayName,attribute:" ",type:t.component,data:p})),y&&(y=!1),O(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),x?c.a.createElement("div",{style:{paddingBottom:"10px"}},c.a.createElement(p.a,{animation:"wave",variant:"circle",style:{margin:"auto"},width:210,height:210})):c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{option:g(S,S.type)}),c.a.createElement("ul",{style:{listStyle:"none"}},S.data.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement(s.a,{key:t,variant:"button",style:{textTransform:"none"}},f[t],": ",e.label))}))),!m&&c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement(d.a,null),c.a.createElement("br",null)))}function g(e,t){return Object(n.a)({title:{text:e.title,subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"pie"==t?"{b} : {c} ({d}%)":"{b} : {c}"}},function(e,t){return"bar"==t?{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:e.data.map((function(e){return e.name}))}}:"pie"!==t?{xAxis:{data:e.data.map((function(e){return e.name}))},yAxis:{}}:void 0}(e,t),{series:[{name:e.attribute,type:"colls"==t?"bar":t,center:["50%","60%"],label:{show:!0,position:"bar"==t?"right":"top",formatter:"pie"==t?"{b}({@2012})":"{c}"},data:e.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}},338:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(225),r=a.n(n),i=a(226),o=a(15),l=a(0),u=a.n(l),c=a(388),s=a(6655),d=a(253),p=a.n(d),m=a(40),b={dias:["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"],horas:["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"]},h=!0;function f(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,d=e.isDesktop,b=void 0!==d&&d,f=Object(l.useState)(!0),v=Object(o.a)(f,2),g=v[0],E=v[1],x=Object(l.useState)([]),O=Object(o.a)(x,2),j=O[0],w=O[1];return Object(l.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h&&E(!0),e.next=3,Promise.resolve(Object(m.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n,t.agregationType,"true"));case 3:a=e.sent,i=[],Object.keys(a.data.values).forEach((function(e){i.push([Number(e.split("-")[0]),Number(e.split("-")[1]),a.data.values[e]])})),w({title:t.displayName,attribute:" ",type:t.component,data:i}),h=!1,E(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),g?u.a.createElement("div",{style:{paddingBottom:"10px"}},u.a.createElement(s.a,{animation:"wave",variant:"rect",width:"100%",style:{margin:"auto"},height:118})):u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{style:t.height.includes("px")?{height:t.height,width:"100%"}:{width:"100%"},option:y(j)}),!b&&u.a.createElement(u.a.Fragment,null,u.a.createElement("br",null),u.a.createElement(c.a,null),u.a.createElement("br",null)))}function y(e){return{title:{text:e.title,x:"center"},tooltip:{position:"top",formatter:function(e){return b.horas[e.value[1]]+": "+e.value[2]}},grid:{left:2,bottom:10,right:10,containLabel:!0},xAxis:{type:"category",data:b.dias,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:b.horas,axisLine:{show:!1}},series:[{type:"scatter",symbolSize:function(e){return 4*e[2]},data:e.data,animationDelay:function(e){return 5*e}}]}}},339:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(49),r=a(225),i=a.n(r),o=a(226),l=a(15),u=a(0),c=a.n(u),s=a(388),d=a(6655),p=a(253),m=a.n(p),b=a(40),h=[],f={dias:["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"],horas:["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"]},y=!0;function v(e){var t,a=e.dashboard,r=e.period,p=void 0===r?null:r,v=e.isDesktop,E=void 0!==v&&v,x=Object(u.useState)(!0),O=Object(l.a)(x,2),j=O[0],w=O[1],S=Object(u.useState)([]),k=Object(l.a)(S,2),A=k[0],N=k[1];return Object(u.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y&&w(!0),e.next=3,Promise.resolve(Object(b.c)().getAgregatedData(a.attributeSet,a.attributes,a.orgUnits,"yearly",a.dataCleaners,p,a.agregationType,"false"));case 3:t=e.sent,n=[],h=[],t.data.headers.forEach((function(e){h[e.uid]={displayName:e.displayName,attribute:e.attribute},n[e.uid]=[]})),Object.keys(t.data.values).forEach((function(e){n[e.split("-")[0]+"-"+e.split("-")[1]].push([Number(e.split("-")[3]),Number(e.split("-")[2]),t.data.values[e]])})),N({ks:t.data.headers.map((function(e){return e.uid})),title:a.displayName,horas:f.horas,dias:f.dias,attribute:" ",type:"scatter",data:n}),y&&(y=!1),w(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[p,a]),j?c.a.createElement("div",{style:{paddingBottom:"10px"}},c.a.createElement(d.a,(t={variant:"rect",width:"100%",style:{margin:"auto"}},Object(n.a)(t,"width",210),Object(n.a)(t,"height",210),t))):c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{style:a.height.includes("px")?{height:a.height,width:"100%"}:{width:"100%"},option:g(A)}),!E&&c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement(s.a,null),c.a.createElement("br",null)))}function g(e){return{title:{text:e.title,x:"center"},legend:{data:e.ks.map((function(e){return h[e].displayName})),bottom:0},tooltip:{position:"bottom",formatter:function(t){return e.horas[t.value[1]]+": "+t.value[2]}},grid:{left:2,bottom:45,right:10,containLabel:!0},xAxis:{type:"category",data:e.horas,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:e.dias,axisLine:{show:!1}},series:e.ks.map((function(t,a){return{name:h[t].displayName,type:"scatter",symbolSize:function(e){return 4*e[2]},data:e.data[t],animationDelay:function(e){return 5*e}}}))}}},340:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(225),r=a.n(n),i=a(226),o=a(15),l=a(0),u=a.n(l),c=a(404),s=a(213),d=a(107),p=a(56),m=a(217),b=a(388),h=a(6655),f=a(40),y=a(6696),v=a(6699),g=!0,E=[];function x(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,x=e.isDesktop,O=void 0!==x&&x,j=Object(l.useState)(!0),w=Object(o.a)(j,2),S=w[0],k=w[1],A=Object(l.useState)(!1),N=Object(o.a)(A,2),D=N[0],C=N[1];return Object(l.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g?k(!0):C(!0),e.next=3,Promise.resolve(Object(f.c)().getFieldsValues(t.attributeSet,t.attributes,t.orgUnits,t.dataCleaners,n));case 3:a=e.sent,E=a.data.valores,g=!1,C(!1),k(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),S?u.a.createElement("div",{style:{paddingBottom:"10px"}},u.a.createElement(h.a,{animation:"wave",style:{margin:"auto"},variant:"rect",width:210,height:118})):u.a.createElement(u.a.Fragment,null,D&&u.a.createElement(c.a,null),u.a.createElement(s.a,{container:!0,spacing:2},E.map((function(e,t){return u.a.createElement(s.a,{key:t,item:!0,xs:O?3:12},u.a.createElement(d.a,{elevation:0,style:{padding:"7px",backgroundColor:"#eee"}},u.a.createElement(p.a,{component:"div"},u.a.createElement(m.a,{color:"textSecondary"},Object(y.a)(new Date(e[0].created_at),new Date,{locale:v.a})),e.map((function(t,a){return u.a.createElement(u.a.Fragment,{key:a},u.a.createElement(m.a,{fontWeight:"fontWeightMedium"},t.displayName),u.a.createElement(m.a,{fontWeight:"fontWeightRegular"},t.value),a!==e.length-1&&u.a.createElement(b.a,null))})))))}))))}},6654:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return U}));var n=a(225),r=a.n(n),i=a(49),o=a(226),l=a(15),u=a(0),c=a.n(u),s=a(211),d=a(213),p=a(107),m=a(56),b=a(6322),h=a(212),f=a(197),y=a(202),v=a(217),g=a(343),E=a(344),x=a(192),O=a(149),j=a(194),w=a(465),S=a(313),k=a.n(S),A=a(110),N=a(6694),D=a(6705),C=a(40),B=a(321),L=a(337),T=a(338),F=a(339),H=a(340),M=[];function U(){var e=Object(u.useState)(!0),t=Object(l.a)(e,2),a=t[0],n=t[1],S=Object(u.useState)(3),U=Object(l.a)(S,2),R=U[0],W=U[1],P=Object(u.useState)([]),G=Object(l.a)(P,2),I=G[0],q=G[1],Q=Object(u.useState)(!1),z=Object(l.a)(Q,2),J=z[0],X=z[1],V=Object(u.useState)(null),K=Object(l.a)(V,2),Y=K[0],Z=K[1],_=Object(u.useState)(null),$=Object(l.a)(_,2),ee=($[0],$[1]),te=Object(u.useState)(0),ae=Object(l.a)(te,2),ne=ae[0],re=ae[1],ie=Object(u.useState)(!1),oe=Object(l.a)(ie,2),le=oe[0],ue=oe[1];function ce(){return(ce=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.resolve(Object(C.c)().getDashboardColecction());case 3:t=e.sent,M=t.data,t.data.length>0&&(ee(t.data[0].displayName),se(t.data[0])),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),ue(!0);case 11:n(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function se(e){var t=e.dashboardElements.map((function(e){var t;return t={component:e.dashboard.component,displayName:e.dashboard.displayName,attributeSet:e.dashboard.attributeSet.uid,dataCleaners:e.dashboard.dataCleaners,countEntries:e.dashboard.countEntries,agregationType:e.dashboard.agregationType,attributes:e.dashboard.attributes.map((function(e){return e.uid})),orgUnits:e.dashboard.orgUnits.map((function(e){return e.uid})),useDisplayNameAsLabel:e.dashboard.useDisplayNameAsLabel,groupByAttributes:e.dashboard.groupByAttributes,showLegend:e.dashboard.showLegend,frequency:e.dashboard.frequency},Object(i.a)(t,"groupByAttributes",e.dashboard.groupByAttributes),Object(i.a)(t,"groupByOptions",e.dashboard.groupByOptions),Object(i.a)(t,"height",e.dashboard.height),Object(i.a)(t,"sort",e.dashboard.sort),t}));q(t)}function de(e,t){switch(e.component){case"pie":return c.a.createElement(L.a,{key:t,period:Y,dashboard:e});case"scatter":return e.countEntries.includes("true")?c.a.createElement(T.a,{key:t,period:Y,dashboard:e}):c.a.createElement(F.a,{key:t,period:Y,dashboard:e});case"table":return c.a.createElement(H.a,{period:Y,dashboard:e});default:return c.a.createElement(B.a,{key:t,period:Y,dashboard:e})}}function pe(){var e=new Date;return e.setHours(0),e.setMinutes(0),e}function me(e){var t=new Date;return t.setHours(0),t.setMinutes(0),Object(N.a)(Object(D.a)(t,e),"yyyy-MM-dd HH:mm")}Object(u.useEffect)((function(){!function(){ce.apply(this,arguments)}()}),[]);return le?c.a.createElement(s.a,null,c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(d.a,{container:!0},c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(p.a,{elevation:0,style:{backgroundColor:"#551a8b",padding:"10px",textAlign:"center",color:"#fff"}},c.a.createElement(m.a,{variant:"button"},"Acesso negado"),c.a.createElement(m.a,null,"Para aceder ao conte\xfado dessa p\xe1gina fa\xe7a o login."))))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{position:"fixed",width:"100%",marginTop:"55px",zIndex:"50"}},c.a.createElement(p.a,{style:{padding:"7px 7px 7px 7px",width:"calc(100% - 14px)",borderRadius:"0px",textAlign:"center"}},c.a.createElement(m.a,{variant:"button",style:{textTransform:"none"}},"\xdaltim@s"),c.a.createElement("br",null),c.a.createElement(b.a,{disableElevation:!0,variant:"contained",color:"secondary"},c.a.createElement(h.a,{onClick:function(){W(3),Z(null)},variant:3==R?"contained":"outlined",style:{borderTopLeftRadius:"1.3em",borderBottomLeftRadius:"1.3em",minWidth:"75px",textTransform:"none"}},"Geral"),c.a.createElement(h.a,{onClick:function(){W(0),Z({startDate:"".concat(Object(N.a)(pe(),"yyyy-MM-dd HH:m")),endDate:"".concat(Object(N.a)(new Date,"yyyy-MM-dd HH:mm"))})},variant:0==R?"contained":"outlined",style:{minWidth:"75px",borderLeft:"none",textTransform:"none"}},"Hoje"),c.a.createElement(h.a,{onClick:function(){W(1),Z({endDate:"".concat(me(1)),startDate:"".concat(me(8))})},variant:1==R?"contained":"outlined",style:{minWidth:"75px",borderLeft:"none",textTransform:"none"}},"7 dias"),c.a.createElement(h.a,{onClick:function(){W(2),Z({endDate:"".concat(me(1)),startDate:"".concat(me(31))})},variant:2==R?"contained":"outlined",style:{borderTopRightRadius:"1.3em",borderBottomRightRadius:"1.3em",minWidth:"75px",textTransform:"none",borderLeft:"none"}},"30 dias")))),c.a.createElement("br",null),c.a.createElement(f.a,{color:"secondary",onClick:function(){X(!0)},style:{position:"fixed",boxShadow:"none",zIndex:49,top:"127px",right:"0px",margin:"auto"}},c.a.createElement(A.i,null)),c.a.createElement(k.a,{index:ne,onChangeIndex:function(e){re(e)}},c.a.createElement("div",{value:0,style:{padding:"10px",marginTop:"107px"}},a?c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(y.a,null)):c.a.createElement(v.a,{style:{width:"100%"}},I.filter((function(e){return"table"!==e.component})).map((function(e,t){return de(e,t)})))),c.a.createElement("div",{value:1,style:{padding:"10px",marginTop:"107px"}},a?c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(y.a,null)):c.a.createElement(v.a,{style:{width:"100%"}},I.filter((function(e){return"table"==e.component})).map((function(e,t){return de(e,t)}))))),c.a.createElement(g.a,{open:J,title:"Dashboard collection"},c.a.createElement(E.a,{style:{padding:"0px"}},c.a.createElement(x.a,{component:"div",role:"list"},M.map((function(e,t){return c.a.createElement(O.a,{role:"listitem",button:!0,onClick:function(){se(e),X(!1)},key:t},c.a.createElement(j.a,{primary:e.displayName}))})))),c.a.createElement(w.a,{style:{textAlign:"right"}},c.a.createElement(h.a,{onClick:function(){X(!1)},color:"secondary"},"Fechar"))))}}}]);
//# sourceMappingURL=26.ebacf0c2.chunk.js.map