(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[39],{237:function(e,t,a){"use strict";var n=a(15),r=a(0),o=a.n(r),l=a(16),i=a(69),c=a(6645),s=a(462),u=a(106),d=a(195),m=a(216),b=a(53),p=a(150),h=a(153),f=a(159),g=a(151),E=a(6304),v=a(196),y=a(6643),x=a(6646),k=a(6647),O=a(6648),j=a(6649),w=a(6650),C=a(6683),S=a(103),P=a(209),B=a(6651),D=a(6688),R=a(197),F=a(191),N=a(148),T=a(281),z=a(292),q=a(334),W=a(211),A=a(109),I=a(6644),M=a(258),V=a(259),X=a.n(V);function H(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),l=a[0],i=a[1];function c(){var t=new X.a.Workbook,a=t.addWorksheet("Gest\xe3o de Servicos");return a.columns=e.colls.filter((function(e){return"k"!==e.id})).map((function(e){return e.editable?{header:e.label,key:e.id,width:25}:{header:e.label,key:e.id,width:15}})),e.tableData.map((function(t){var n={};e.colls.filter((function(e){return"k"!==e.id})).map((function(e){n[e.id]=e.id.split(".").length>1?t[e.id.split(".")[0]][e.id.split(".")[1]]:t[e.id]})),a.addRow(n)})),a.eachRow((function(e,t){e.eachCell((function(e,t){"true"===e.value&&(e.font={color:{argb:"FF008000"}}),"false"===e.value&&(e.font={color:{argb:"FFFF0000"}}),e.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}}))})),a.getRow(1).font={bold:!0},t}return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{title:"Transferir"},o.a.createElement(v.a,{"aria-controls":"simple-menu","aria-haspopup":"true",variant:"contained",onClick:function(e){i(e.currentTarget)}},o.a.createElement(A.b,null))),o.a.createElement(S.a,{id:"simple-menu",anchorEl:l,keepMounted:!0,open:Boolean(l),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},onClose:function(){return i(null)}},o.a.createElement(P.a,{onClick:function(){c().xlsx.writeBuffer().then((function(e){Object(M.saveAs)(new Blob([e],{type:"application/octet-stream"}),"atendimento_export_"+(new Date).getTime()+".xlsx")})),i(null)}},o.a.createElement(I.a,null,o.a.createElement(A.d,null)),o.a.createElement(b.a,{variant:"inherit"},"Excel")),o.a.createElement(P.a,{onClick:function(){c().csv.writeBuffer().then((function(e){Object(M.saveAs)(new Blob([e],{type:"application/text"}),"atendimento_export_"+(new Date).getTime()+".csv")})),i(null)}},o.a.createElement(I.a,null,o.a.createElement(A.c,null)),o.a.createElement(b.a,{variant:"inherit"},"CSV"))))}var L={root:{width:"100%"},tableWrapper:{minWidth:"700px",overflowX:"auto"},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},success:{backgroundColor:i.a[600]},error:{backgroundColor:"#d32f2f"},info:{backgroundColor:"#3f51b5"},warning:{backgroundColor:c.a[700]},icon:{fontSize:20},message:{display:"flex",alignItems:"center"},highlight:{color:"#f50057",backgroundColor:Object(l.e)("#ff4081",.85)},spacer:{flex:"1 1 100%"},actions:{color:"rgba(0, 0, 0, 0.54)"},title:{flex:"0 0 auto"}},Y={mouseX:null,mouseY:null},_=null;function $(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var G=[];function U(e){var t=e.order,a=e.orderBy,n=e.onRequestSort;e.t;return o.a.createElement(B.a,null,o.a.createElement(O.a,null,G.filter((function(e){return!1===e.hide})).map((function(e){return o.a.createElement(j.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:a===e.id&&t},o.a.createElement(D.a,{active:a===e.id,direction:t,onClick:(r=e.id,function(e){n(e,r)})},o.a.createElement(y.a,{title:"order by ".concat(Boolean(e.hintText)?e.hintText:e.label)},o.a.createElement(b.a,{variant:"body2"},e.label))));var r}))))}function J(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),l=a[0],i=a[1],c=e.onRequestToogleColumn,s=Object(r.useState)(!1),d=Object(n.a)(s,2),p=d[0],h=d[1];var f=Boolean(l),g=f?"simple-popover":void 0;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{title:"ocultar/mostrar colunas"},o.a.createElement(v.a,{"aria-describedby":g,onClick:function(e){i(e.currentTarget)}},o.a.createElement(A.j,null))),o.a.createElement(R.a,{id:g,open:f,anchorEl:l,onClose:function(){i(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},o.a.createElement(u.a,{square:!0},o.a.createElement(m.a,{style:{textAlign:"center",paddingTop:"10px"}},o.a.createElement(b.a,null,"Colunas")),o.a.createElement(F.a,{dense:!0},G.filter((function(e){return"k"!==e.id})).map((function(e,t){return o.a.createElement(N.a,{key:e.id},o.a.createElement(T.a,{control:o.a.createElement(z.a,{style:{padding:"5px"},checked:!e.hide,onChange:function(){return function(e){G=G.map((function(t){return t.id===e&&(t.hide=!t.hide),t})),h(!p)}(e.id)},value:t,color:"primary"}),label:e.label}))}))),o.a.createElement(q.a,null),o.a.createElement(W.a,{onClick:function(e){h(!p),c(e),i(null)},color:"primary",style:{width:"100%"},small:!0},"Apply"))))}t.a=function(e,t){var a=Object(r.useState)(!1),l=Object(n.a)(a,2),i=l[0],c=l[1],B=Object(r.useState)("asc"),D=Object(n.a)(B,2),R=D[0],F=D[1],N=Object(r.useState)("k"),T=Object(n.a)(N,2),z=T[0],q=T[1],W=Object(r.useState)([]),I=Object(n.a)(W,2),M=I[0],V=I[1],X=Object(r.useState)(0),K=Object(n.a)(X,2),Q=K[0],Z=K[1],ee=Object(r.useState)(!0),te=Object(n.a)(ee,2),ae=te[0],ne=(te[1],Object(r.useState)(7)),re=Object(n.a)(ne,2),oe=re[0],le=re[1],ie=Object(r.useState)(!1),ce=Object(n.a)(ie,2),se=ce[0],ue=ce[1],de=Object(r.useState)(""),me=Object(n.a)(de,2),be=me[0],pe=me[1],he=Object(r.useState)(!1),fe=Object(n.a)(he,2),ge=fe[0],Ee=fe[1],ve=Object(r.useState)(Y),ye=Object(n.a)(ve,2),xe=ye[0],ke=ye[1];Object(r.useEffect)((function(){e.headCells.map((function(e,t){return{i:t,hide:e.hide}})),G=e.headCells,Ee(!ge)}),[]);var Oe=oe-Math.min(oe,e.tableData.length-Q*oe);return o.a.createElement("div",{className:L.root},o.a.createElement(s.a,{color:"secondary",variant:"query",style:{display:i?"block":"none"}}),o.a.createElement(u.a,{elevation:0,style:{minWidth:"700px",overflowX:"auto",backgroundColor:"transparent"}},o.a.createElement(d.a,{style:{padding:"0px"}},o.a.createElement(m.a,{display:"flex",width:"100%"},o.a.createElement(m.a,null,!se&&o.a.createElement(b.a,{variant:"h6",id:"tableTitle"},e.tableName),se&&o.a.createElement(p.a,{in:se},o.a.createElement(h.a,{style:{paddingLeft:"15px"}},o.a.createElement(f.a,{htmlFor:"query-param",style:{paddingLeft:"17px"}},"Procurar"),o.a.createElement(g.a,{id:"query-param",value:be,onChange:function(e){return pe(e.target.value)},endAdornment:o.a.createElement(E.a,{position:"end"},o.a.createElement(v.a,{onClick:function(){return ue(!1)},"aria-label":"query-param"},o.a.createElement(A.a,null)))})))),o.a.createElement(m.a,{flexGrow:1},"\xa0"),o.a.createElement(m.a,null,o.a.createElement(y.a,{title:"Procurar"},o.a.createElement(v.a,{onClick:function(){return ue(!se)},"aria-label":"filter list"},o.a.createElement(A.e,null))),o.a.createElement(J,{onRequestToogleColumn:function(e){Ee(!ge)}}),o.a.createElement(H,{colls:e.headCells,tableData:e.tableData})))),o.a.createElement("div",{className:L.tableWrapper},o.a.createElement(x.a,{"aria-labelledby":"tableTitle",size:ae?"small":"medium"},o.a.createElement(U,{onRequestTriggerUpdate:function(e){c(!0),c(!1)},classes:L,numSelected:M.length,order:R,orderBy:z,onRequestSort:function(e,t){F(z===t&&"desc"===R?"asc":"desc"),q(t)},rowCount:e.tableData.length}),o.a.createElement(k.a,null,function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(e.tableData.filter((function(t){var a=!1;return e.headCells.filter((function(e){return!1===e.hide})).map((function(e){Boolean(t[e.id])&&t[e.id].toString().toLowerCase().includes(be.toLowerCase())&&(a=!0)})),a})),function(e,t){return"desc"===e?function(e,a){return $(e,a,t)}:function(e,a){return-$(e,a,t)}}(R,z)).slice(Q*oe,Q*oe+oe).map((function(t,a){var n,r=(n=a,-1!==M.indexOf(n)),l="enhanced-table-checkbox-".concat(a);return o.a.createElement(O.a,{hover:!0,onContextMenu:function(a){var n;Boolean(e.actions)&&(_=t,(n=a).preventDefault(),ke({mouseX:n.clientX-2,mouseY:n.clientY-4}))},onClick:function(e){return function(e,t){var a=M.indexOf(t),n=[];-1===a?n=n.concat(M,t):0===a?n=n.concat(M.slice(1)):a===M.length-1?n=n.concat(M.slice(0,-1)):a>0&&(n=n.concat(M.slice(0,a),M.slice(a+1))),V(n)}(0,a)},role:"checkbox","aria-checked":r,tabIndex:-1,key:a,selected:r},G.filter((function(e){return!1===e.hide})).map((function(e){return o.a.createElement(j.a,{component:"th",key:e.id,id:l,scope:"row"},e.id.split(".").length>1?t[e.id.split(".")[0]][e.id.split(".")[1]]:t[e.id])})))})),Oe>0&&o.a.createElement(O.a,{style:{height:49*Oe}},o.a.createElement(j.a,{colSpan:6}))),o.a.createElement(w.a,null,o.a.createElement(O.a,null,o.a.createElement(C.a,{rowsPerPageOptions:[5,7,10,20,25,100],count:e.tableData.length,rowsPerPage:oe,page:Q,backIconButtonProps:{"aria-label":e.tablePaginationPrevious},nextIconButtonProps:{"aria-label":e.tablePaginationNext},onChangePage:function(e,t){Z(t)},onChangeRowsPerPage:function(e){le(+e.target.value),Z(0)}})))))),Boolean(e.actionHandlers)&&o.a.createElement(S.a,{keepMounted:!0,open:null!==xe.mouseY,onClose:function(){ke(Y)},anchorReference:"anchorPosition",anchorPosition:null!==xe.mouseY&&null!==xe.mouseX?{top:xe.mouseY,left:xe.mouseX}:void 0},e.actions.map((function(t,a){return o.a.createElement(P.a,{key:a,onClick:function(){ke(Y),e.actionHandlers[t.handler](_)}},t.label)}))))}},267:function(e,t,a){"use strict";var n=a(2),r=a(1),o=a(0),l=(a(6),a(3)),i=a(5),c=a(76),s=a(7),u=o.forwardRef((function(e,t){var a=e.children,i=e.classes,u=e.className,d=e.color,m=void 0===d?"default":d,b=e.component,p=void 0===b?"button":b,h=e.disabled,f=void 0!==h&&h,g=e.disableFocusRipple,E=void 0!==g&&g,v=e.focusVisibleClassName,y=e.size,x=void 0===y?"large":y,k=e.variant,O=void 0===k?"round":k,j=Object(n.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return o.createElement(c.a,Object(r.a)({className:Object(l.a)(i.root,u,"round"!==O&&i.extended,"large"!==x&&i["size".concat(Object(s.a)(x))],f&&i.disabled,{primary:i.primary,secondary:i.secondary,inherit:i.colorInherit}[m]),component:p,disabled:f,focusRipple:!E,focusVisibleClassName:Object(l.a)(i.focusVisible,v),ref:t},j),o.createElement("span",{className:i.label},a))}));t.a=Object(i.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(u)},6675:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a(224),r=a.n(n),o=a(225),l=a(15),i=a(0),c=a.n(i),s=a(12),u=a(29),d=a(216),m=a(267),b=a(53),p=a(189),h=a(237),f=a(54),g=Object(p.a)((function(e){return{containerBox:{transition:"width .3s"}}})),E=[];function v(){var e=g(),t=Object(i.useState)(!0),a=Object(l.a)(t,2),n=a[0],p=a[1],v=Object(i.useState)(!1),k=Object(l.a)(v,2),O=k[0],j=k[1],w=Object(i.useState)(""),C=Object(l.a)(w,2),S=C[0],P=C[1],B=Object(i.useState)(!1),D=Object(l.a)(B,2),R=D[0],F=D[1];Object(i.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(f.c)().getUsers());case 2:E=(E=e.sent).data,p(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var N={listarDados:function(e){P("/attributeSetData/"+btoa(e.id)),F(!0)},listarFormularios:function(e){console.log("listar formularios: ".concat(e))},eliminar:function(e){function t(e){return a.apply(this,arguments)}function a(){return(a=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.resolve(Object(f.c)().deleteAttributeSetByID(t));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}t(e.id)},editar:function(e){console.log("editar: ".concat(e))},detalhes:function(e){j(!0)}};return R?c.a.createElement(s.a,{to:S}):c.a.createElement(d.a,{display:"flex"},c.a.createElement(m.a,{component:u.b,to:"/users/adicionar",variant:"extended",size:"medium",style:{position:"fixed",boxShadow:"none",bottom:"20px",right:"20px"},color:"primary"},"Adicionar"),c.a.createElement(d.a,{flexGrow:1,className:e.containerBox},!n&&c.a.createElement(h.a,{tableName:"Users",actionHandlers:N,actions:x,headCells:y,tableData:E})),c.a.createElement(d.a,{className:e.containerBox,style:{width:O?"250px":"0px"}},c.a.createElement("div",{style:{display:O?"block":"none"}},c.a.createElement(b.a,{variant:"h6",color:"initial"},"Detalhes"))))}var y=[{label:"First Name",id:"first_name",numeric:!1,disablePadding:!1,editable:!1,hide:!1},{label:"Last Name",id:"last_name",numeric:!1,disablePadding:!1,editable:!1,hide:!1},{label:"Email",numeric:!1,disablePadding:!1,id:"email",editable:!1,hide:!1}],x=[{label:"Listar Dados",handler:"listarDados"},{label:"Formularios",handler:"listarFormularios"},{label:"Eliminar",handler:"eliminar"},{label:"Editar",handler:"editar"},{label:"Detalhes",handler:"detalhes"}]}}]);
//# sourceMappingURL=39.ba661294.chunk.js.map