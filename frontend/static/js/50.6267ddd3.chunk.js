(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[50],{289:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),i=(a(6),a(3)),o=a(5),l=c.forwardRef((function(e,t){var a=e.classes,o=e.className,l=Object(r.a)(e,["classes","className"]);return c.createElement("div",Object(n.a)({className:Object(i.a)(a.root,o),ref:t},l))}));l.muiName="ListItemSecondaryAction",t.a=Object(o.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(l)},6656:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a(228),r=a.n(n),c=a(229),i=a(15),o=a(0),l=a.n(o),s=a(12),u=a(107),m=a(192),d=a(149),f=a(194),p=a(289),h=a(197),b=a(211),v=a(55),E=a(213),g=a(216),y=a(212),j=a(56),O=a(110),C=[],w=[],N={},k=null;function x(e){var t=Object(o.useState)(!1),a=Object(i.a)(t,2),n=a[0],x=a[1],D=Object(o.useState)({changeRoute:!1,to:""}),S=Object(i.a)(D,2),R=S[0],A=S[1],W=Object(o.useState)(!0),z=Object(i.a)(W,2),I=(z[0],z[1]);function J(){return(J=Object(c.a)(r.a.mark((function e(){var t,a,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k=window.location.href.split("/"),k=atob(k[k.length-1]),e.next=4,Promise.all([Object(j.c)().getDashboards(),Object(j.c)().getDashboardColecction("/".concat(k))]);case 4:t=e.sent,a=Object(i.a)(t,2),n=a[0],c=a[1],N=c.data,w=N.dashboardElements.map((function(e){return e.dashboard.id})),C=n.data,I(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(o.useEffect)((function(){C=[],w=[],function(){J.apply(this,arguments)}()}),[]);var L={addChart:function(e){w.push(e),x(!n)},removeChart:function(e){w=w.filter((function(t){return t!==e})),x(!n)}};function P(){return(P=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N.dashboardElements=w.map((function(e,t){return{dashboard:{id:e},order:t}})),t.next=3,Promise.resolve(Object(j.c)().putDashboardColecction(N,k));case 3:e.messageBox("Colec\xe7\xe3o actualizada com exito!"),A({to:"dashboardCollection",changeRoute:!0});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var q=function(e,t){return l.a.createElement(u.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},l.a.createElement(m.a,{dense:!0,component:"div",role:"list"},e.map((function(e,a){return l.a.createElement(d.a,{onDoubleClick:function(){return L[t](e.id)},key:a,role:"listitem",button:!0},l.a.createElement(f.a,{primary:e.displayName}),l.a.createElement(p.a,null,l.a.createElement(h.a,{color:t.includes("add")?"primary":"secondary",size:"small",onClick:function(){L[t](e.id)}},t.includes("remove")?l.a.createElement(O.f,null):l.a.createElement(O.g,null))))})),l.a.createElement(d.a,null)))};return R.changeRoute?l.a.createElement(s.a,{to:R.to}):l.a.createElement(b.a,null,l.a.createElement(v.a,{variant:"h6"},"Edi\xe7\xe3o de cole\xe7\xe3o de gr\xe1ficos"),l.a.createElement(E.a,{container:!0,spacing:2},l.a.createElement(E.a,{item:!0,sm:12},l.a.createElement(g.a,{variant:"outlined",id:"name",label:"Nome",value:N.name,margin:"dense",fullWidth:!0,onChange:function(e){N.name=e.target.value}})),l.a.createElement(E.a,{item:!0,sm:12},l.a.createElement(g.a,{id:"displayName",label:"Diaplay name",fullWidth:!0,margin:"dense",value:N.displayName,variant:"outlined",onChange:function(e){N.displayName=e.target.value}})),l.a.createElement(E.a,{item:!0,sm:12},l.a.createElement(g.a,{id:"description",rows:4,multiline:!0,label:"Description",margin:"dense",value:N.description,variant:"outlined",fullWidth:!0,onChange:function(e){N.description=e.target.value}})),l.a.createElement(E.a,{item:!0,sm:6},q(C.filter((function(e){return!w.includes(e.id)})),"addChart")),l.a.createElement(E.a,{item:!0,sm:6},q(w.map((function(e){return C.filter((function(t){return t.id==e}))[0]})),"removeChart")),l.a.createElement(E.a,{item:!0,style:{textAlign:"right"},sm:12},l.a.createElement(y.a,{color:"secondary"},"Cancelar"),"\xa0\xa0",l.a.createElement(y.a,{onClick:function(){return P.apply(this,arguments)},color:"primary",variant:"contained",disableElevation:!0},"Salvar"))))}}}]);
//# sourceMappingURL=50.6267ddd3.chunk.js.map