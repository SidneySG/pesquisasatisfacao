(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[37],{221:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},241:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),l=(a(6),a(3)),c=a(5),s=i.forwardRef((function(e,t){var a=e.classes,c=e.className,s=Object(r.a)(e,["classes","className"]);return i.createElement("div",Object(n.a)({className:Object(l.a)(a.root,c),ref:t},s))}));s.muiName="ListItemSecondaryAction",t.a=Object(c.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(s)},6186:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(217),r=a.n(n),i=a(221),l=a(218),c=a(16),s=a(0),o=a.n(s),u=a(104),m=a(188),d=a(146),f=a(190),b=a(241),p=a(193),E=a(202),O=a(53),j=a(209),v=a(212),h=a(208),y=a(107),A=a(54),S={},g=[],w=[];function k(){var e,t,a=Object(s.useState)(!0),n=Object(c.a)(a,2),k=n[0],x=n[1],P=Object(s.useState)(!1),N=Object(c.a)(P,2),C=N[0],F=N[1];function I(){return(I=Object(l.a)(r.a.mark((function e(){var t,a,n,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href.split("/"),t=atob(t[t.length-1]),e.next=4,Promise.all([Object(A.c)().getOrganisationUnitByID(t),Object(A.c)().getAttributeSet()]);case 4:a=e.sent,n=Object(c.a)(a,2),i=n[0],l=n[1],S=i.data[0],g=l.data,w=g.filter((function(e){return e.orgUnits.includes(S.id)})).map((function(e){return e.id})),x(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(s.useEffect)((function(){!function(){I.apply(this,arguments)}()}),[]);var U={addAttributeSet:function(e){w.push(e),F(!C)},removeAttributeSet:function(e){w=w.filter((function(t){return t!==e})),F(!C)}},z=function(e,t){return o.a.createElement(u.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},o.a.createElement(m.a,{dense:!0,component:"div",role:"list"},e.map((function(e,a){return o.a.createElement(d.a,{onDoubleClick:function(){return U[t.includes("All")?"addAttributeSet":"removeAttributeSet"](e.id)},key:a,role:"listitem",button:!0},o.a.createElement(f.a,{primary:e.displayName}),o.a.createElement(b.a,null,t.includes("All")?o.a.createElement(p.a,{color:"primary",size:"small",onClick:function(){U.addAttributeSet(e.id)}},o.a.createElement(y.g,null)):o.a.createElement(p.a,{color:"secondary",size:"small",onClick:function(){U.removeAttributeSet(e.id)}},o.a.createElement(y.f,null))))})),o.a.createElement(d.a,null)))};function D(){return(D=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(A.c)().setAttributeSetsToOrgUnits({id:S.id,attributeSets:w.map((function(e){return{id:e}}))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o.a.createElement(E.a,null,!k&&o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(O.a,{variant:"h6",color:"initial"},S.displayName),o.a.createElement(j.a,{container:!0,spacing:2},o.a.createElement(j.a,{item:!0,sm:6},o.a.createElement(v.a,(e={disabled:!0,type:"text",variant:"outlined",name:"filterAllPermissions",margin:"dense"},Object(i.a)(e,"disabled",!0),Object(i.a)(e,"id","filterAllPermissions"),Object(i.a)(e,"fullWidth",!0),Object(i.a)(e,"label","Filter"),e))),o.a.createElement(j.a,{item:!0,sm:6},o.a.createElement(v.a,(t={disabled:!0,type:"text",variant:"outlined",name:"filterSelectedPermissions",margin:"dense"},Object(i.a)(t,"disabled",!0),Object(i.a)(t,"id","filterSelectedPermissions"),Object(i.a)(t,"fullWidth",!0),Object(i.a)(t,"label","Filter"),t))),o.a.createElement(j.a,{item:!0,sm:6},z(g.filter((function(e){return!w.includes(e.id)})),"AllAttributeSets")),o.a.createElement(j.a,{item:!0,sm:6},z(w.map((function(e){return g.filter((function(t){return t.id==e}))[0]})),"AttributeSets")),o.a.createElement(j.a,{item:!0,style:{textAlign:"right"},sm:12},o.a.createElement(h.a,{onClick:function(){return D.apply(this,arguments)},disableElevation:!0,color:"primary"},"Salvar")))))}}}]);
//# sourceMappingURL=37.d71960f6.chunk.js.map