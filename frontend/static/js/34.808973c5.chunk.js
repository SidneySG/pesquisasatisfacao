(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[34],{252:function(e,t,a){"use strict";var n=a(12),r=a(0),o=a.n(r),i=a(16),l=a(74),c=a(6674),d=a(496),u=a(114),s=a(203),m=a(227),b=a(59),p=a(158),h=a(161),f=a(167),g=a(159),v=a(859),E=a(204),y=a(6672),k=a(846),O=a(847),C=a(848),x=a(849),w=a(6675),j=a(6713),S=a(111),P=a(222),D=a(850),R=a(6717),B=a(205),N=a(199),T=a(156),z=a(345),F=a(381),q=a(392),I=a(212),W=a(116),A=a(6673),L=a(298),M=a(299),V=a.n(M);function X(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),i=a[0],l=a[1];function c(){var t=new V.a.Workbook,a=t.addWorksheet("Gest\xe3o de Servicos");return a.columns=e.colls.filter((function(e){return"k"!==e.id})).map((function(e){return e.editable?{header:e.label,key:e.id,width:25}:{header:e.label,key:e.id,width:15}})),e.tableData.map((function(t){var n={};e.colls.filter((function(e){return"k"!==e.id})).map((function(e){n[e.id]=e.id.split(".").length>1?t[e.id.split(".")[0]][e.id.split(".")[1]]:t[e.id]})),a.addRow(n)})),a.eachRow((function(e,t){e.eachCell((function(e,t){"true"===e.value&&(e.font={color:{argb:"FF008000"}}),"false"===e.value&&(e.font={color:{argb:"FFFF0000"}}),e.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}}))})),a.getRow(1).font={bold:!0},t}return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{title:"Transferir"},o.a.createElement(E.a,{"aria-controls":"simple-menu","aria-haspopup":"true",variant:"contained",onClick:function(e){l(e.currentTarget)}},o.a.createElement(W.c,null))),o.a.createElement(S.a,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},onClose:function(){return l(null)}},o.a.createElement(P.a,{onClick:function(){c().xlsx.writeBuffer().then((function(e){Object(L.saveAs)(new Blob([e],{type:"application/octet-stream"}),"atendimento_export_"+(new Date).getTime()+".xlsx")})),l(null)}},o.a.createElement(A.a,null,o.a.createElement(W.e,null)),o.a.createElement(b.a,{variant:"inherit"},"Excel")),o.a.createElement(P.a,{onClick:function(){c().csv.writeBuffer().then((function(e){Object(L.saveAs)(new Blob([e],{type:"application/text"}),"atendimento_export_"+(new Date).getTime()+".csv")})),l(null)}},o.a.createElement(A.a,null,o.a.createElement(W.d,null)),o.a.createElement(b.a,{variant:"inherit"},"CSV"))))}var H={root:{width:"100%"},tableWrapper:{minWidth:"700px",overflowX:"auto"},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},success:{backgroundColor:l.a[600]},error:{backgroundColor:"#d32f2f"},info:{backgroundColor:"#3f51b5"},warning:{backgroundColor:c.a[700]},icon:{fontSize:20},message:{display:"flex",alignItems:"center"},highlight:{color:"#f50057",backgroundColor:Object(i.e)("#ff4081",.85)},spacer:{flex:"1 1 100%"},actions:{color:"rgba(0, 0, 0, 0.54)"},title:{flex:"0 0 auto"}},Y={mouseX:null,mouseY:null},$=null;function G(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var _=[];function J(e){var t=e.order,a=e.orderBy,n=e.onRequestSort;e.t;return o.a.createElement(D.a,null,o.a.createElement(C.a,null,_.filter((function(e){return!1===e.hide})).map((function(e){return o.a.createElement(x.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:a===e.id&&t},o.a.createElement(R.a,{active:a===e.id,direction:t,onClick:(r=e.id,function(e){n(e,r)})},o.a.createElement(y.a,{title:"order by ".concat(Boolean(e.hintText)?e.hintText:e.label)},o.a.createElement(b.a,{variant:"body2"},e.label))));var r}))))}function U(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),i=a[0],l=a[1],c=e.onRequestToogleColumn,d=Object(r.useState)(!1),s=Object(n.a)(d,2),p=s[0],h=s[1];var f=Boolean(i),g=f?"simple-popover":void 0;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{title:"ocultar/mostrar colunas"},o.a.createElement(E.a,{"aria-describedby":g,onClick:function(e){l(e.currentTarget)}},o.a.createElement(W.k,null))),o.a.createElement(B.a,{id:g,open:f,anchorEl:i,onClose:function(){l(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},o.a.createElement(u.a,{square:!0},o.a.createElement(m.a,{style:{textAlign:"center",paddingTop:"10px"}},o.a.createElement(b.a,null,"Colunas")),o.a.createElement(N.a,{dense:!0},_.filter((function(e){return"k"!==e.id})).map((function(e,t){return o.a.createElement(T.a,{key:e.id},o.a.createElement(z.a,{control:o.a.createElement(F.a,{style:{padding:"5px"},checked:!e.hide,onChange:function(){return function(e){_=_.map((function(t){return t.id===e&&(t.hide=!t.hide),t})),h(!p)}(e.id)},value:t,color:"primary"}),label:e.label}))}))),o.a.createElement(q.a,null),o.a.createElement(I.a,{onClick:function(e){h(!p),c(e),l(null)},color:"primary",style:{width:"100%"},small:!0},"Apply"))))}t.a=function(e,t){var a=Object(r.useState)(!1),i=Object(n.a)(a,2),l=i[0],c=i[1],D=Object(r.useState)("asc"),R=Object(n.a)(D,2),B=R[0],N=R[1],T=Object(r.useState)("k"),z=Object(n.a)(T,2),F=z[0],q=z[1],I=Object(r.useState)([]),A=Object(n.a)(I,2),L=A[0],M=A[1],V=Object(r.useState)(0),K=Object(n.a)(V,2),Q=K[0],Z=K[1],ee=Object(r.useState)(!0),te=Object(n.a)(ee,2),ae=te[0],ne=(te[1],Object(r.useState)(10)),re=Object(n.a)(ne,2),oe=re[0],ie=re[1],le=Object(r.useState)(!1),ce=Object(n.a)(le,2),de=ce[0],ue=ce[1],se=Object(r.useState)(""),me=Object(n.a)(se,2),be=me[0],pe=me[1],he=Object(r.useState)(!1),fe=Object(n.a)(he,2),ge=fe[0],ve=fe[1],Ee=Object(r.useState)(Y),ye=Object(n.a)(Ee,2),ke=ye[0],Oe=ye[1];Object(r.useEffect)((function(){e.headCells.map((function(e,t){return{i:t,hide:e.hide}})),_=e.headCells,ve(!ge)}),[]);var Ce=oe-Math.min(oe,e.tableData.length-Q*oe);return o.a.createElement("div",{className:H.root},o.a.createElement(d.a,{color:"secondary",variant:"query",style:{display:l?"block":"none"}}),o.a.createElement(u.a,{elevation:0,style:{minWidth:"700px",overflowX:"auto",backgroundColor:"transparent"}},o.a.createElement(s.a,{style:{padding:"0px"}},o.a.createElement(m.a,{display:"flex",width:"100%"},o.a.createElement(m.a,null,!de&&o.a.createElement(b.a,{variant:"h6",id:"tableTitle"},e.tableName),de&&o.a.createElement(p.a,{in:de},o.a.createElement(h.a,{style:{paddingLeft:"15px"}},o.a.createElement(f.a,{htmlFor:"query-param",style:{paddingLeft:"17px"}},"Procurar"),o.a.createElement(g.a,{id:"query-param",value:be,onChange:function(e){return pe(e.target.value)},endAdornment:o.a.createElement(v.a,{position:"end"},o.a.createElement(E.a,{onClick:function(){return ue(!1)},"aria-label":"query-param"},o.a.createElement(W.b,null)))})))),o.a.createElement(m.a,{flexGrow:1},"\xa0"),o.a.createElement(m.a,null,o.a.createElement(y.a,{title:"Procurar"},o.a.createElement(E.a,{onClick:function(){return ue(!de)},"aria-label":"filter list"},o.a.createElement(W.f,null))),o.a.createElement(U,{onRequestToogleColumn:function(e){ve(!ge)}}),o.a.createElement(X,{colls:e.headCells,tableData:e.tableData})))),o.a.createElement("div",{className:H.tableWrapper},o.a.createElement(k.a,{"aria-labelledby":"tableTitle",size:ae?"small":"medium"},o.a.createElement(J,{onRequestTriggerUpdate:function(e){c(!0),c(!1)},classes:H,numSelected:L.length,order:B,orderBy:F,onRequestSort:function(e,t){N(F===t&&"desc"===B?"asc":"desc"),q(t)},rowCount:e.tableData.length}),o.a.createElement(O.a,null,function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(e.tableData.filter((function(t){var a=!1;return e.headCells.filter((function(e){return!1===e.hide})).map((function(e){e.id.split(".").length>1?null==t[e.id.split(".")[0]]?""==be.toLowerCase()&&(a=!0):t[e.id.split(".")[0]][e.id.split(".")[1]].toString().toLowerCase().includes(be.toLowerCase())&&(a=!0):Boolean(t[e.id])&&t[e.id].toString().toLowerCase().includes(be.toLowerCase())&&(a=!0)})),a})),function(e,t){return"desc"===e?function(e,a){return G(e,a,t)}:function(e,a){return-G(e,a,t)}}(B,F)).slice(Q*oe,Q*oe+oe).map((function(t,a){var n,r=(n=a,-1!==L.indexOf(n)),i="enhanced-table-checkbox-".concat(a);return o.a.createElement(C.a,{hover:!0,onContextMenu:function(a){var n;Boolean(e.actions)&&($=t,(n=a).preventDefault(),Oe({mouseX:n.clientX-2,mouseY:n.clientY-4}))},onClick:function(e){return function(e,t){var a=L.indexOf(t),n=[];-1===a?n=n.concat(L,t):0===a?n=n.concat(L.slice(1)):a===L.length-1?n=n.concat(L.slice(0,-1)):a>0&&(n=n.concat(L.slice(0,a),L.slice(a+1))),M(n)}(0,a)},role:"checkbox","aria-checked":r,tabIndex:-1,key:a,selected:r},_.filter((function(e){return!1===e.hide})).map((function(e){return o.a.createElement(x.a,{component:"th",key:e.id,id:i,scope:"row"},e.id.split(".").length>1?t[e.id.split(".")[0]][e.id.split(".")[1]]:t[e.id])})))})),Ce>0&&o.a.createElement(C.a,{style:{height:49*Ce}},o.a.createElement(x.a,{colSpan:6}))),o.a.createElement(w.a,null,o.a.createElement(C.a,null,o.a.createElement(j.a,{rowsPerPageOptions:[5,7,10,13,20,25,100],count:e.tableData.length,rowsPerPage:oe,page:Q,backIconButtonProps:{"aria-label":e.tablePaginationPrevious},nextIconButtonProps:{"aria-label":e.tablePaginationNext},onChangePage:function(e,t){Z(t)},onChangeRowsPerPage:function(e){ie(+e.target.value),Z(0)}})))))),Boolean(e.actionHandlers)&&o.a.createElement(S.a,{keepMounted:!0,open:null!==ke.mouseY,onClose:function(){Oe(Y)},anchorReference:"anchorPosition",anchorPosition:null!==ke.mouseY&&null!==ke.mouseX?{top:ke.mouseY,left:ke.mouseX}:void 0},e.actions.map((function(t,a){return o.a.createElement(P.a,{key:a,onClick:function(){Oe(Y),e.actionHandlers[t.handler]($)}},t.label)}))))}},341:function(e,t,a){"use strict";var n=a(2),r=a(1),o=a(0),i=(a(6),a(4)),l=a(5),c=a(80),d=a(7),u=o.forwardRef((function(e,t){var a=e.children,l=e.classes,u=e.className,s=e.color,m=void 0===s?"default":s,b=e.component,p=void 0===b?"button":b,h=e.disabled,f=void 0!==h&&h,g=e.disableFocusRipple,v=void 0!==g&&g,E=e.focusVisibleClassName,y=e.size,k=void 0===y?"large":y,O=e.variant,C=void 0===O?"round":O,x=Object(n.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return o.createElement(c.a,Object(r.a)({className:Object(i.a)(l.root,u,"round"!==C&&l.extended,"large"!==k&&l["size".concat(Object(d.a)(k))],f&&l.disabled,{primary:l.primary,secondary:l.secondary,inherit:l.colorInherit}[m]),component:p,disabled:f,focusRipple:!v,focusVisibleClassName:Object(i.a)(l.focusVisible,E),ref:t},x),o.createElement("span",{className:l.label},a))}));t.a=Object(l.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(u)},6688:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(75),r=a.n(n),o=a(82),i=a(12),l=a(0),c=a.n(l),d=a(13),u=a(17),s=a(341),m=a(252),b=a(27),p=[];function h(e){var t=Object(l.useState)(!0),a=Object(i.a)(t,2),n=a[0],h=a[1],v=Object(l.useState)(""),E=Object(i.a)(v,2),y=E[0],k=E[1],O=Object(l.useState)(!1),C=Object(i.a)(O,2),x=C[0],w=C[1],j=Object(l.useState)(!1),S=Object(i.a)(j,2),P=S[0],D=S[1];function R(){return B.apply(this,arguments)}function B(){return(B=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(b.e)().getDashboards("?fields=id,uid,name,displayName,shortName,component"));case 2:t=e.sent,p=t.data,h(!1),D(!P);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(l.useEffect)((function(){R()}),[]);var N={eliminar:function(e){function t(e){return a.apply(this,arguments)}function a(){return(a=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.resolve(Object(b.e)().deleteDashboardByID(t));case 3:R(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}t(e.id)},editar:function(e){k("/editAttribute/"+btoa(e.id)),w(!0)},detalhes:function(e){}};return x?c.a.createElement(d.a,{to:y}):c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement(s.a,{component:u.b,to:"/dashboards/adicionar",variant:"extended",size:"medium",style:{position:"fixed",boxShadow:"none",bottom:"20px",right:"20px"},color:"primary"},"Criar Gr\xe1fico"),!n&&c.a.createElement(m.a,{tableName:"Gr\xe1ficos",actionHandlers:N,actions:g,headCells:f,tableData:p}))}var f=[{label:"ID",numeric:!1,disablePadding:!1,id:"id",editable:!1,hide:!1},{label:"UID",numeric:!1,disablePadding:!1,id:"uid",editable:!1,hide:!1},{label:"Name",id:"name",numeric:!1,disablePadding:!1,editable:!1,hide:!1},{label:"Display Name",numeric:!1,disablePadding:!1,id:"displayName",editable:!1,hide:!1},{label:"Component",id:"component",numeric:!1,disablePadding:!1,editable:!1,hide:!1}],g=[{label:"Eliminar",handler:"eliminar"},{label:"Editar",handler:"editar"},{label:"Detalhes",handler:"detalhes"}]}}]);
//# sourceMappingURL=34.808973c5.chunk.js.map