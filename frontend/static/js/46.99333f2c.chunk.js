(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[46],{239:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},6667:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a(221),r=a.n(n),o=a(239),i=a(222),l=a(16),c=a(0),s=a.n(c),u=a(202),d=a(209),g=a(212),p=a(208),m=a(104),f=a(213),b=a(198),O=a(429),v=a(54),h=[],E={lat:-25.966871222103318,lng:32.58566014617944},y=[],j={lat:-25.953724,lng:32.588711},k={height:"450px",width:"100%"},w={fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeOpacity:1,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,geodesic:!1,zIndex:1},C={fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeOpacity:1,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,geodesic:!1,zIndex:1};function x(){var e,t,a=Object(c.useState)(0),n=Object(l.a)(a,2),x=n[0],P=n[1],S=Object(c.useState)(0),z=Object(l.a)(S,2),F=z[0],L=z[1],W=Object(c.useState)(!0),I=Object(l.a)(W,2),M=I[0],J=(I[1],Object(c.useState)(!1)),A=Object(l.a)(J,2),B=A[0],H=A[1],N=s.a.useState({drawingMode:"polygon"}),R=Object(l.a)(N,2),T=(R[0],R[1]);Object(c.useEffect)((function(){!function(){K.apply(this,arguments)}()}),[]);var U=function(e){};function q(){return D.apply(this,arguments)}function D(){return(D=Object(i.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(v.c)().getOrganisationUnits()]);case 2:t=e.sent,a=Object(l.a)(t,1),n=a[0],h=n.data.filter((function(e){return Boolean(e.coordinates)})),H(!B);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(v.c)().getCircleByPoint(t.lat,t.lng));case 2:a=e.sent,y=a.data,H(!B);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.geolocation?navigator.geolocation.getCurrentPosition(Q):alert("Este dispositivo nao suporta a geolocalizacao");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){return E={lng:e.coords.longitude,lat:e.coords.latitude},P(e.coords.latitude),L(e.coords.longitude),function(e){G.apply(this,arguments)}(E),q(),{lng:e.coords.longitude,lat:e.coords.latitude}}return s.a.createElement(u.a,null,s.a.createElement("br",null),s.a.createElement(d.a,{container:!0,spacing:2},s.a.createElement(d.a,{item:!0,sm:6},s.a.createElement(g.a,(e={variant:"outlined",margin:"dense",value:x,id:"lat",label:"Latitude"},Object(o.a)(e,"value",x),Object(o.a)(e,"fullWidth",!0),Object(o.a)(e,"onChange",(function(e){P(e.target.value)})),e))),s.a.createElement(d.a,{item:!0,sm:6},s.a.createElement(g.a,(t={variant:"outlined",margin:"dense",value:F,id:"lng",label:"Longitude"},Object(o.a)(t,"value",F),Object(o.a)(t,"fullWidth",!0),Object(o.a)(t,"onChange",(function(e){L(e.target.value)})),t))),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(p.a,{disableElevation:!0,variant:"contained"},"Redesenhar circulo"),"\xa0 \xa0",s.a.createElement(p.a,{onClick:q,disableElevation:!0,variant:"contained"},"Carregar Instituicoes"),"\xa0\xa0",s.a.createElement(p.a,{disableElevation:!0,variant:"contained"},"Localiza\xe7\xe3o corrente")),h.map((function(e){return s.a.createElement(d.a,{key:e.id,item:!0,sm:12},JSON.stringify(e))})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(m.a,{variant:"outlined",style:{minHeight:"450px"}},M?s.a.createElement(O.c,{libraries:["drawing","places"],id:"script-loader"},s.a.createElement(O.b,{id:"example-map",mapContainerStyle:k,draggable:!0,zoom:13,center:j},h.map((function(e){return s.a.createElement(O.e,{key:e.id,onLoad:U,paths:e.coordinates,options:w})})),s.a.createElement(O.e,{onLoad:U,paths:y,options:C}),s.a.createElement(O.d,{position:{lat:x,lng:F}}),s.a.createElement(O.a,{drawingMode:"polygon",options:{drawingControl:!0,drawingControlOptions:{drawingModes:["polygon"]},polygonOptions:{fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeWeight:2,clickable:!0,editable:!0,draggable:!0,zIndex:1}},onPolygonComplete:function(e){e.getPath().getArray().map((function(e){return{lat:e.lat(),lng:e.lng()}}));T((function(e){return Object.assign({},e,{drawingMode:"maker"})}))}}))):s.a.createElement(f.a,{style:{textAlign:"center",marginTop:"220px"}},s.a.createElement(b.a,null))))))}}}]);
//# sourceMappingURL=46.99333f2c.chunk.js.map