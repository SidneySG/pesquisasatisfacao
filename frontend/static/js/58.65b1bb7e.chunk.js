(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[58],{6631:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return A}));var n=t(220),l=t.n(n),r=t(221),i=t(16),o=t(0),c=t.n(o),m=t(202),s=t(209),u=t(53),p=t(212),d=t(206),g=t(208),h=t(104),b=t(213),f=t(198),y=t(6677),E=t(433),O=t(239),v=(t(238),t(54)),j={height:"450px",width:"100%"},x={fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeOpacity:1,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,geodesic:!1,zIndex:1},k={strokeColor:"#2196F3",fillOpacity:.5,strokeOpacity:1,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,geodesic:!1,zIndex:1},C={lat:-25.953724,lng:32.588711},N=null,S=[],w={},F={},T=[],M=[],U={};function W(e,a){var t=e.target.files,n=new FileReader;n.readAsDataURL(t[0]),n.onloadend=function(){U[a]=n.result}}function A(){var e=Object(o.useState)(null),a=Object(i.a)(e,2),t=(a[0],a[1],Object(o.useState)(!0)),n=Object(i.a)(t,2),A=n[0],B=n[1],I=Object(o.useState)([]),L=Object(i.a)(I,2),z=(L[0],L[1],Object(o.useState)([])),P=Object(i.a)(z,2),R=P[0],J=P[1],D=Object(o.useState)([]),V=Object(i.a)(D,2),H=V[0],q=(V[1],Object(o.useState)([])),G=Object(i.a)(q,2),K=(G[0],G[1],Object(o.useState)(!1)),Q=Object(i.a)(K,2),X=(Q[0],Q[1]),Y=c.a.useState({drawingMode:"polygon"}),Z=Object(i.a)(Y,2),$=(Z[0],Z[1]);function _(e){B(!1),N=e.target.files[0];var a=new FileReader;N=a.readAsText(N),a.onload=function(){var e=JSON.parse(a.result),t=[],n=[];S=e.features[0].geometry.coordinates[0][0].map((function(e){return t.push(e[1]),n.push(e[0]),{lng:e[0],lat:e[1]}}));var l=(Math.min.apply(Math,t)+Math.max.apply(Math,t))/2,r=(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2;C={lat:l,lng:r},w.coordenadas=S,J(S),B(!0)}}Object(o.useEffect)((function(){function e(){return(e=Object(r.a)(l.a.mark((function e(){var a,t,n,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!0),e.next=3,Promise.all([Object(v.c)().getOrganisationUnits(),Object(v.c)().getOrganisationUnitLevels(),Object(v.c)().getOrganisationUnitTypes()]);case 3:a=e.sent,t=Object(i.a)(a,3),n=t[0],r=t[1],o=t[2],T=n.data,r.data,M=o.data,X(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var ee=function(e){};return c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement(m.a,null,c.a.createElement(O.b,{initialValues:F,onSubmit:function(e,a){var t=a.setSubmitting;function n(){return(n=Object(r.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(U).forEach((function(e){a[e]=U[e]})),e.next=3,Promise.resolve(Object(v.c)().postOrganisationUnits(JSON.stringify(a)));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e),setTimeout((function(){t(!1)}),500)}},(function(e){var a=e.values,t=e.touched,n=e.errors,l=(e.dirty,e.isSubmitting,e.handleChange),r=e.handleBlur,i=(e.handleSubmit,e.handleReset,e.setFieldValue);return c.a.createElement(O.a,null,c.a.createElement(s.a,{container:!0,spacing:2},c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(u.a,{variant:"h6"},"Facility Registration Form")),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(p.a,{value:a.name,error:n.name&&t.name,helperText:n.name,name:"name",id:"name",margin:"dense",onChange:l,onBlur:r,variant:"outlined",label:"Name (*)",fullWidth:!0})),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(p.a,{value:a.shortName,error:n.shortName&&t.shortName,helperText:n.shortName,name:"shortName",id:"shortName",margin:"dense",onChange:l,onBlur:r,variant:"outlined",label:"ShortName (*)",fullWidth:!0})),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(p.a,{value:a.displayName,error:n.displayName&&t.displayName,helperText:n.displayName,name:"displayName",id:"displayName",margin:"dense",onChange:l,onBlur:r,variant:"outlined",label:"DisplayName (*)",fullWidth:!0})),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(p.a,{label:"Type",fullWidth:!0,select:!0,helperText:n.orgUnitType&&t.orgUnitType,name:"orgUnitType",id:"orgUnitType",variant:"outlined",margin:"dense",onChange:l,onBlur:r},M.map((function(e){return c.a.createElement(d.a,{key:e,value:e},e)})))),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(y.a,{onChange:function(e,a){i("parent",a)},fullWidth:!0,id:"parent",size:"small",getOptionLabel:function(e){return e.displayName},options:T,style:{minWidth:200},renderInput:function(e){return c.a.createElement(p.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Parent (*)"}))}})),c.a.createElement(s.a,{item:!0},c.a.createElement("input",{onChange:function(e){return W(e,"logo")},accept:"image/*",style:{display:"none"},id:"logo-file",multiple:!0,type:"file"}),c.a.createElement("label",{htmlFor:"logo-file"},c.a.createElement(g.a,{variant:"contained",color:"primary",disableElevation:!0,component:"span"},"Upload Logo"))),c.a.createElement(s.a,{item:!0},c.a.createElement("input",{onChange:function(e){return W(e,"bgImage")},accept:"image/*",style:{display:"none"},id:"bg-file",multiple:!0,type:"file"}),c.a.createElement("label",{htmlFor:"bg-file"},c.a.createElement(g.a,{variant:"contained",color:"primary",disableElevation:!0,component:"span"},"Upload Background Image"))),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(p.a,{label:"Description",variant:"outlined",margin:"dense",multiline:!0,fullWidth:!0})),c.a.createElement(s.a,{item:!0,sm:6},c.a.createElement(u.a,{variant:"button",color:"initial"},"Area geogr\xe1fica")),c.a.createElement(s.a,{item:!0,sm:6,style:{textAlign:"right"}},c.a.createElement("label",{htmlFor:"upload-photo"},c.a.createElement("input",{onChange:_,style:{display:"none"},id:"upload-photo",name:"upload-photo",type:"file"}),c.a.createElement(g.a,{disabled:!0,color:"primary",variant:"contained",disableElevation:!0,component:"span"},"Carregar"))),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(h.a,{variant:"outlined",style:{minHeight:"450px"}},A?c.a.createElement(E.c,{libraries:["drawing","places"],id:"script-loader"},c.a.createElement(E.b,{id:"example-map",mapContainerStyle:j,draggable:!0,zoom:13,center:C},c.a.createElement(E.e,{onLoad:ee,paths:R,options:x}),c.a.createElement(E.e,{onLoad:ee,paths:H,options:k}),c.a.createElement(E.a,{drawingMode:"polygon",options:{drawingControl:!0,drawingControlOptions:{drawingModes:["polygon"]},polygonOptions:{fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeWeight:2,clickable:!0,editable:!0,draggable:!0,zIndex:1}},onPolygonComplete:function(e){var a=e.getPath().getArray().map((function(e){return{lat:e.lat(),lng:e.lng()}}));i("coordinates",a),$((function(e){return Object.assign({},e,{drawingMode:"maker"})}))}}))):c.a.createElement(b.a,{style:{textAlign:"center",marginTop:"220px"}},c.a.createElement(f.a,null)))),c.a.createElement(s.a,{item:!0,sm:12,style:{textAlign:"right"}},c.a.createElement(g.a,{color:"primary",disableElevation:!0,type:"submit",variant:"contained"},"Save"))))}))))}}}]);
//# sourceMappingURL=58.65b1bb7e.chunk.js.map