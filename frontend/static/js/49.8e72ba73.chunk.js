(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[49],{247:function(e,t,a){"use strict";var n=a(15),r=a(0),o=a.n(r),i=a(16),l=a(71),c=a(6663),s=a(493),u=a(107),d=a(196),m=a(217),b=a(55),p=a(151),h=a(154),f=a(160),g=a(152),E=a(6629),v=a(197),y=a(6661),O=a(868),x=a(869),k=a(870),j=a(871),w=a(6664),C=a(6700),S=a(104),P=a(209),B=a(872),N=a(6705),D=a(198),R=a(192),T=a(149),z=a(6650),F=a(6699),q=a(387),I=a(212),W=a(110),V=a(6662),A=a(290),M=a(291),X=a.n(M);function H(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),i=a[0],l=a[1];function c(){var t=new X.a.Workbook,a=t.addWorksheet("Gest\xe3o de Servicos");return a.columns=e.colls.filter((function(e){return"k"!==e.id})).map((function(e){return e.editable?{header:e.label,key:e.id,width:25}:{header:e.label,key:e.id,width:15}})),e.tableData.map((function(t){var n={};e.colls.filter((function(e){return"k"!==e.id})).map((function(e){n[e.id]=e.id.split(".").length>1?t[e.id.split(".")[0]][e.id.split(".")[1]]:t[e.id]})),a.addRow(n)})),a.eachRow((function(e,t){e.eachCell((function(e,t){"true"===e.value&&(e.font={color:{argb:"FF008000"}}),"false"===e.value&&(e.font={color:{argb:"FFFF0000"}}),e.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}}))})),a.getRow(1).font={bold:!0},t}return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{title:"Transferir"},o.a.createElement(v.a,{"aria-controls":"simple-menu","aria-haspopup":"true",variant:"contained",onClick:function(e){l(e.currentTarget)}},o.a.createElement(W.b,null))),o.a.createElement(S.a,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},onClose:function(){return l(null)}},o.a.createElement(P.a,{onClick:function(){c().xlsx.writeBuffer().then((function(e){Object(A.saveAs)(new Blob([e],{type:"application/octet-stream"}),"atendimento_export_"+(new Date).getTime()+".xlsx")})),l(null)}},o.a.createElement(V.a,null,o.a.createElement(W.d,null)),o.a.createElement(b.a,{variant:"inherit"},"Excel")),o.a.createElement(P.a,{onClick:function(){c().csv.writeBuffer().then((function(e){Object(A.saveAs)(new Blob([e],{type:"application/text"}),"atendimento_export_"+(new Date).getTime()+".csv")})),l(null)}},o.a.createElement(V.a,null,o.a.createElement(W.c,null)),o.a.createElement(b.a,{variant:"inherit"},"CSV"))))}var Y={root:{width:"100%"},tableWrapper:{minWidth:"700px",overflowX:"auto"},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},success:{backgroundColor:l.a[600]},error:{backgroundColor:"#d32f2f"},info:{backgroundColor:"#3f51b5"},warning:{backgroundColor:c.a[700]},icon:{fontSize:20},message:{display:"flex",alignItems:"center"},highlight:{color:"#f50057",backgroundColor:Object(i.e)("#ff4081",.85)},spacer:{flex:"1 1 100%"},actions:{color:"rgba(0, 0, 0, 0.54)"},title:{flex:"0 0 auto"}},$={mouseX:null,mouseY:null},L=null;function U(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var _=[];function G(e){var t=e.order,a=e.orderBy,n=e.onRequestSort;e.t;return o.a.createElement(B.a,null,o.a.createElement(k.a,null,_.filter((function(e){return!1===e.hide})).map((function(e){return o.a.createElement(j.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:a===e.id&&t},o.a.createElement(N.a,{active:a===e.id,direction:t,onClick:(r=e.id,function(e){n(e,r)})},o.a.createElement(y.a,{title:"order by ".concat(Boolean(e.hintText)?e.hintText:e.label)},o.a.createElement(b.a,{variant:"body2"},e.label))));var r}))))}function J(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),i=a[0],l=a[1],c=e.onRequestToogleColumn,s=Object(r.useState)(!1),d=Object(n.a)(s,2),p=d[0],h=d[1];var f=Boolean(i),g=f?"simple-popover":void 0;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{title:"ocultar/mostrar colunas"},o.a.createElement(v.a,{"aria-describedby":g,onClick:function(e){l(e.currentTarget)}},o.a.createElement(W.j,null))),o.a.createElement(D.a,{id:g,open:f,anchorEl:i,onClose:function(){l(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},o.a.createElement(u.a,{square:!0},o.a.createElement(m.a,{style:{textAlign:"center",paddingTop:"10px"}},o.a.createElement(b.a,null,"Colunas")),o.a.createElement(R.a,{dense:!0},_.filter((function(e){return"k"!==e.id})).map((function(e,t){return o.a.createElement(T.a,{key:e.id},o.a.createElement(z.a,{control:o.a.createElement(F.a,{style:{padding:"5px"},checked:!e.hide,onChange:function(){return function(e){_=_.map((function(t){return t.id===e&&(t.hide=!t.hide),t})),h(!p)}(e.id)},value:t,color:"primary"}),label:e.label}))}))),o.a.createElement(q.a,null),o.a.createElement(I.a,{onClick:function(e){h(!p),c(e),l(null)},color:"primary",style:{width:"100%"},small:!0},"Apply"))))}t.a=function(e,t){var a=Object(r.useState)(!1),i=Object(n.a)(a,2),l=i[0],c=i[1],B=Object(r.useState)("asc"),N=Object(n.a)(B,2),D=N[0],R=N[1],T=Object(r.useState)("k"),z=Object(n.a)(T,2),F=z[0],q=z[1],I=Object(r.useState)([]),V=Object(n.a)(I,2),A=V[0],M=V[1],X=Object(r.useState)(0),K=Object(n.a)(X,2),Q=K[0],Z=K[1],ee=Object(r.useState)(!0),te=Object(n.a)(ee,2),ae=te[0],ne=(te[1],Object(r.useState)(7)),re=Object(n.a)(ne,2),oe=re[0],ie=re[1],le=Object(r.useState)(!1),ce=Object(n.a)(le,2),se=ce[0],ue=ce[1],de=Object(r.useState)(""),me=Object(n.a)(de,2),be=me[0],pe=me[1],he=Object(r.useState)(!1),fe=Object(n.a)(he,2),ge=fe[0],Ee=fe[1],ve=Object(r.useState)($),ye=Object(n.a)(ve,2),Oe=ye[0],xe=ye[1];Object(r.useEffect)((function(){e.headCells.map((function(e,t){return{i:t,hide:e.hide}})),_=e.headCells,Ee(!ge)}),[]);var ke=oe-Math.min(oe,e.tableData.length-Q*oe);return o.a.createElement("div",{className:Y.root},o.a.createElement(s.a,{color:"secondary",variant:"query",style:{display:l?"block":"none"}}),o.a.createElement(u.a,{elevation:0,style:{minWidth:"700px",overflowX:"auto",backgroundColor:"transparent"}},o.a.createElement(d.a,{style:{padding:"0px"}},o.a.createElement(m.a,{display:"flex",width:"100%"},o.a.createElement(m.a,null,!se&&o.a.createElement(b.a,{variant:"h6",id:"tableTitle"},e.tableName),se&&o.a.createElement(p.a,{in:se},o.a.createElement(h.a,{style:{paddingLeft:"15px"}},o.a.createElement(f.a,{htmlFor:"query-param",style:{paddingLeft:"17px"}},"Procurar"),o.a.createElement(g.a,{id:"query-param",value:be,onChange:function(e){return pe(e.target.value)},endAdornment:o.a.createElement(E.a,{position:"end"},o.a.createElement(v.a,{onClick:function(){return ue(!1)},"aria-label":"query-param"},o.a.createElement(W.a,null)))})))),o.a.createElement(m.a,{flexGrow:1},"\xa0"),o.a.createElement(m.a,null,o.a.createElement(y.a,{title:"Procurar"},o.a.createElement(v.a,{onClick:function(){return ue(!se)},"aria-label":"filter list"},o.a.createElement(W.e,null))),o.a.createElement(J,{onRequestToogleColumn:function(e){Ee(!ge)}}),o.a.createElement(H,{colls:e.headCells,tableData:e.tableData})))),o.a.createElement("div",{className:Y.tableWrapper},o.a.createElement(O.a,{"aria-labelledby":"tableTitle",size:ae?"small":"medium"},o.a.createElement(G,{onRequestTriggerUpdate:function(e){c(!0),c(!1)},classes:Y,numSelected:A.length,order:D,orderBy:F,onRequestSort:function(e,t){R(F===t&&"desc"===D?"asc":"desc"),q(t)},rowCount:e.tableData.length}),o.a.createElement(x.a,null,function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(e.tableData.filter((function(t){var a=!1;return e.headCells.filter((function(e){return!1===e.hide})).map((function(e){Boolean(t[e.id])&&t[e.id].toString().toLowerCase().includes(be.toLowerCase())&&(a=!0)})),a})),function(e,t){return"desc"===e?function(e,a){return U(e,a,t)}:function(e,a){return-U(e,a,t)}}(D,F)).slice(Q*oe,Q*oe+oe).map((function(t,a){var n,r=(n=a,-1!==A.indexOf(n)),i="enhanced-table-checkbox-".concat(a);return o.a.createElement(k.a,{hover:!0,onContextMenu:function(a){var n;Boolean(e.actions)&&(L=t,(n=a).preventDefault(),xe({mouseX:n.clientX-2,mouseY:n.clientY-4}))},onClick:function(e){return function(e,t){var a=A.indexOf(t),n=[];-1===a?n=n.concat(A,t):0===a?n=n.concat(A.slice(1)):a===A.length-1?n=n.concat(A.slice(0,-1)):a>0&&(n=n.concat(A.slice(0,a),A.slice(a+1))),M(n)}(0,a)},role:"checkbox","aria-checked":r,tabIndex:-1,key:a,selected:r},_.filter((function(e){return!1===e.hide})).map((function(e){return o.a.createElement(j.a,{component:"th",key:e.id,id:i,scope:"row"},e.id.split(".").length>1?t[e.id.split(".")[0]][e.id.split(".")[1]]:t[e.id])})))})),ke>0&&o.a.createElement(k.a,{style:{height:49*ke}},o.a.createElement(j.a,{colSpan:6}))),o.a.createElement(w.a,null,o.a.createElement(k.a,null,o.a.createElement(C.a,{rowsPerPageOptions:[5,7,10,20,25,100],count:e.tableData.length,rowsPerPage:oe,page:Q,backIconButtonProps:{"aria-label":e.tablePaginationPrevious},nextIconButtonProps:{"aria-label":e.tablePaginationNext},onChangePage:function(e,t){Z(t)},onChangeRowsPerPage:function(e){ie(+e.target.value),Z(0)}})))))),Boolean(e.actionHandlers)&&o.a.createElement(S.a,{keepMounted:!0,open:null!==Oe.mouseY,onClose:function(){xe($)},anchorReference:"anchorPosition",anchorPosition:null!==Oe.mouseY&&null!==Oe.mouseX?{top:Oe.mouseY,left:Oe.mouseX}:void 0},e.actions.map((function(t,a){return o.a.createElement(P.a,{key:a,onClick:function(){xe($),e.actionHandlers[t.handler](L)}},t.label)}))))}},308:function(e,t,a){"use strict";var n=a(2),r=a(1),o=a(0),i=(a(6),a(3)),l=a(5),c=a(78),s=a(7),u=o.forwardRef((function(e,t){var a=e.children,l=e.classes,u=e.className,d=e.color,m=void 0===d?"default":d,b=e.component,p=void 0===b?"button":b,h=e.disabled,f=void 0!==h&&h,g=e.disableFocusRipple,E=void 0!==g&&g,v=e.focusVisibleClassName,y=e.size,O=void 0===y?"large":y,x=e.variant,k=void 0===x?"round":x,j=Object(n.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return o.createElement(c.a,Object(r.a)({className:Object(i.a)(l.root,u,"round"!==k&&l.extended,"large"!==O&&l["size".concat(Object(s.a)(O))],f&&l.disabled,{primary:l.primary,secondary:l.secondary,inherit:l.colorInherit}[m]),component:p,disabled:f,focusRipple:!E,focusVisibleClassName:Object(i.a)(l.focusVisible,v),ref:t},j),o.createElement("span",{className:l.label},a))}));t.a=Object(l.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(u)},6674:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a(227),r=a.n(n),o=a(228),i=a(15),l=a(0),c=a.n(l),s=a(12),u=a(26),d=a(308),m=a(217),b=a(55),p=a(190),h=a(56),f=a(247),g=[],E=Object(p.a)((function(e){return{containerBox:{transition:"width .3s"}}}));function v(){var e=E(),t=Object(l.useState)(!0),a=Object(i.a)(t,2),n=a[0],p=a[1],v=Object(l.useState)(!1),x=Object(i.a)(v,2),k=x[0],j=x[1],w=Object(l.useState)(!1),C=Object(i.a)(w,2),S=C[0],P=(C[1],Object(l.useState)("")),B=Object(i.a)(P,2),N=B[0],D=B[1],R=Object(l.useState)(!1),T=Object(i.a)(R,2),z=T[0],F=T[1];function q(){return I.apply(this,arguments)}function I(){return(I=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(h.c)().getOrganisationUnits());case 2:g=(g=e.sent).data,j(!k),p(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(l.useEffect)((function(){q()}),[]);var W={eliminar:function(e){function t(){return(t=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(h.c)().deleteOrgUnitByID(t));case 2:q();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(e.id)},editar:function(e){console.log("editar: ".concat(e))},detalhes:function(e){D("instituicoes/detalhes/".concat(btoa(e.id))),F(!0)}};return z?c.a.createElement(s.a,{to:N}):c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{component:u.b,to:"/instituicoes/adicionar",variant:"extended",size:"medium",style:{position:"absolute",boxShadow:"none",bottom:"20px",right:"20px"},color:"primary"},"Adicionar"),c.a.createElement(m.a,{display:"flex"},c.a.createElement(m.a,{flexGrow:1,className:e.containerBox},!n&&c.a.createElement(f.a,{tableName:"Institui\xe7\xf5es",actionHandlers:W,actions:O,headCells:y,tableData:g})),c.a.createElement(m.a,{className:e.containerBox,style:{width:S?"250px":"0px"}},c.a.createElement("div",{style:{display:S?"block":"none"}},c.a.createElement(b.a,{variant:"h6",color:"initial"},"Detalhes"),c.a.createElement("br",null)))))}var y=[{label:"UID",numeric:!1,disablePadding:!1,id:"id",editable:!1,hide:!1},{label:"Name",id:"name",numeric:!1,disablePadding:!1,editable:!1,hide:!1},{label:"Display Name",numeric:!1,disablePadding:!1,id:"displayName",editable:!1,hide:!1},{label:"ShortName",id:"shortName",numeric:!1,disablePadding:!1,editable:!1,hide:!1},{label:"Visibility",id:"visibility",numeric:!1,disablePadding:!1,editable:!1,hide:!1}],O=[{label:"Editar",handler:"editar"},{label:"Eliminar",handler:"eliminar"},{label:"Detalhes",handler:"detalhes"}]}}]);
//# sourceMappingURL=49.8e72ba73.chunk.js.map