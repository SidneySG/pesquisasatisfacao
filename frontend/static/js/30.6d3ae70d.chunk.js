(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[30],{211:function(e,t,a){"use strict";var n=a(24),r=a(0),l=a.n(r),o=a(15),i=a(66),c=a(6119),u=a(6112),s=a(103),d=a(182),m=a(201),b=a(52),h=a(146),p=a(200),f=a(207),g=a(198),E=a(6079),v=a(183),y=a(6117),x=a(6120),O=a(6121),k=a(6122),w=a(6123),j=a(6124),C=a(6152),S=a(100),z=a(228),P=a(6125),N=a(6156),B=a(184),R=a(177),D=a(179),T=a(251),F=a(255),M=a(283),H=a(194),q=a(106),W=a(6118),I=a(222),V=a(223),A=a.n(V);function X(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),o=a[0],i=a[1];function c(){var t=new A.a.Workbook,a=t.addWorksheet("Gest\xe3o de Servicos");return a.columns=e.colls.filter((function(e){return"k"!==e.id})).map((function(e){return e.editable?{header:e.label,key:e.id,width:25}:{header:e.label,key:e.id,width:15}})),e.tableData.map((function(t){var n={};e.colls.filter((function(e){return"k"!==e.id})).map((function(e){n[e.id]=e.id.split(".").length>1?t[e.id.split(".")[0]][e.id.split(".")[1]]:t[e.id]})),a.addRow(n)})),a.eachRow((function(e,t){e.eachCell((function(e,t){"true"===e.value&&(e.font={color:{argb:"FF008000"}}),"false"===e.value&&(e.font={color:{argb:"FFFF0000"}}),e.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}}))})),a.getRow(1).font={bold:!0},t}return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{title:"Transferir"},l.a.createElement(v.a,{"aria-controls":"simple-menu","aria-haspopup":"true",variant:"contained",onClick:function(e){i(e.currentTarget)}},l.a.createElement(q.b,null))),l.a.createElement(S.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},onClose:function(){return i(null)}},l.a.createElement(z.a,{onClick:function(){c().xlsx.writeBuffer().then((function(e){Object(I.saveAs)(new Blob([e],{type:"application/octet-stream"}),"atendimento_export_"+(new Date).getTime()+".xlsx")})),i(null)}},l.a.createElement(W.a,null,l.a.createElement(q.d,null)),l.a.createElement(b.a,{variant:"inherit"},"Excel")),l.a.createElement(z.a,{onClick:function(){c().csv.writeBuffer().then((function(e){Object(I.saveAs)(new Blob([e],{type:"application/text"}),"atendimento_export_"+(new Date).getTime()+".csv")})),i(null)}},l.a.createElement(W.a,null,l.a.createElement(q.c,null)),l.a.createElement(b.a,{variant:"inherit"},"CSV"))))}var Y={root:{width:"100%"},tableWrapper:{minWidth:"700px",overflowX:"auto"},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},success:{backgroundColor:i.a[600]},error:{backgroundColor:"#d32f2f"},info:{backgroundColor:"#3f51b5"},warning:{backgroundColor:c.a[700]},icon:{fontSize:20},message:{display:"flex",alignItems:"center"},highlight:{color:"#f50057",backgroundColor:Object(o.e)("#ff4081",.85)},spacer:{flex:"1 1 100%"},actions:{color:"rgba(0, 0, 0, 0.54)"},title:{flex:"0 0 auto"}},$={mouseX:null,mouseY:null},G=null;function L(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var _=[];function J(e){var t=e.order,a=e.orderBy,n=e.onRequestSort;e.t;return l.a.createElement(P.a,null,l.a.createElement(k.a,null,_.filter((function(e){return!1===e.hide})).map((function(e){return l.a.createElement(w.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:a===e.id&&t},l.a.createElement(N.a,{active:a===e.id,direction:t,onClick:(r=e.id,function(e){n(e,r)})},l.a.createElement(y.a,{title:"order by ".concat(Boolean(e.hintText)?e.hintText:e.label)},l.a.createElement(b.a,{variant:"body2"},e.label))));var r}))))}function U(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),o=a[0],i=a[1],c=e.onRequestToogleColumn,u=Object(r.useState)(!1),d=Object(n.a)(u,2),h=d[0],p=d[1];var f=Boolean(o),g=f?"simple-popover":void 0;return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{title:"ocultar/mostrar colunas"},l.a.createElement(v.a,{"aria-describedby":g,onClick:function(e){i(e.currentTarget)}},l.a.createElement(q.i,null))),l.a.createElement(B.a,{id:g,open:f,anchorEl:o,onClose:function(){i(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},l.a.createElement(s.a,{square:!0},l.a.createElement(m.a,{style:{textAlign:"center",paddingTop:"10px"}},l.a.createElement(b.a,null,"Colunas")),l.a.createElement(R.a,{dense:!0},_.filter((function(e){return"k"!==e.id})).map((function(e,t){return l.a.createElement(D.a,{key:e.id},l.a.createElement(T.a,{control:l.a.createElement(F.a,{style:{padding:"5px"},checked:!e.hide,onChange:function(){return function(e){_=_.map((function(t){return t.id===e&&(t.hide=!t.hide),t})),p(!h)}(e.id)},value:t,color:"primary"}),label:e.label}))}))),l.a.createElement(M.a,null),l.a.createElement(H.a,{onClick:function(e){p(!h),c(e),i(null)},color:"primary",style:{width:"100%"},small:!0},"Apply"))))}t.a=function(e,t){var a=Object(r.useState)(!1),o=Object(n.a)(a,2),i=o[0],c=o[1],P=Object(r.useState)("asc"),N=Object(n.a)(P,2),B=N[0],R=N[1],D=Object(r.useState)("k"),T=Object(n.a)(D,2),F=T[0],M=T[1],H=Object(r.useState)([]),W=Object(n.a)(H,2),I=W[0],V=W[1],A=Object(r.useState)(0),K=Object(n.a)(A,2),Q=K[0],Z=K[1],ee=Object(r.useState)(!0),te=Object(n.a)(ee,2),ae=te[0],ne=(te[1],Object(r.useState)(7)),re=Object(n.a)(ne,2),le=re[0],oe=re[1],ie=Object(r.useState)(!1),ce=Object(n.a)(ie,2),ue=ce[0],se=ce[1],de=Object(r.useState)(""),me=Object(n.a)(de,2),be=me[0],he=me[1],pe=Object(r.useState)(!1),fe=Object(n.a)(pe,2),ge=fe[0],Ee=fe[1],ve=Object(r.useState)($),ye=Object(n.a)(ve,2),xe=ye[0],Oe=ye[1];Object(r.useEffect)((function(){e.headCells.map((function(e,t){return{i:t,hide:e.hide}})),_=e.headCells,Ee(!ge)}),[]);var ke=le-Math.min(le,e.tableData.length-Q*le);return l.a.createElement("div",{className:Y.root},l.a.createElement(u.a,{color:"secondary",variant:"query",style:{display:i?"block":"none"}}),l.a.createElement(s.a,{elevation:0,style:{minWidth:"700px",overflowX:"auto"}},l.a.createElement(d.a,{style:{padding:"0px"}},l.a.createElement(m.a,{display:"flex",width:"100%"},l.a.createElement(m.a,null,!ue&&l.a.createElement(b.a,{variant:"h6",id:"tableTitle"},e.tableName),ue&&l.a.createElement(h.a,{in:ue},l.a.createElement(p.a,{style:{paddingLeft:"15px"}},l.a.createElement(f.a,{htmlFor:"query-param",style:{paddingLeft:"17px"}},"Procurar"),l.a.createElement(g.a,{id:"query-param",value:be,onChange:function(e){return he(e.target.value)},endAdornment:l.a.createElement(E.a,{position:"end"},l.a.createElement(v.a,{onClick:function(){return se(!1)},"aria-label":"query-param"},l.a.createElement(q.a,null)))})))),l.a.createElement(m.a,{flexGrow:1},"\xa0"),l.a.createElement(m.a,null,l.a.createElement(y.a,{title:"Procurar"},l.a.createElement(v.a,{onClick:function(){return se(!ue)},"aria-label":"filter list"},l.a.createElement(q.e,null))),l.a.createElement(U,{onRequestToogleColumn:function(e){Ee(!ge)}}),l.a.createElement(X,{colls:e.headCells,tableData:e.tableData})))),l.a.createElement("div",{className:Y.tableWrapper},l.a.createElement(x.a,{"aria-labelledby":"tableTitle",size:ae?"small":"medium"},l.a.createElement(J,{onRequestTriggerUpdate:function(e){c(!0),c(!1)},classes:Y,numSelected:I.length,order:B,orderBy:F,onRequestSort:function(e,t){R(F===t&&"desc"===B?"asc":"desc"),M(t)},rowCount:e.tableData.length}),l.a.createElement(O.a,null,function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(e.tableData.filter((function(t){var a=!1;return e.headCells.filter((function(e){return!1===e.hide})).map((function(e){Boolean(t[e.id])&&t[e.id].toString().toLowerCase().includes(be.toLowerCase())&&(a=!0)})),a})),function(e,t){return"desc"===e?function(e,a){return L(e,a,t)}:function(e,a){return-L(e,a,t)}}(B,F)).slice(Q*le,Q*le+le).map((function(t,a){var n,r=(n=a,-1!==I.indexOf(n)),o="enhanced-table-checkbox-".concat(a);return l.a.createElement(k.a,{hover:!0,onContextMenu:function(a){var n;Boolean(e.actions)&&(G=t,(n=a).preventDefault(),Oe({mouseX:n.clientX-2,mouseY:n.clientY-4}))},onClick:function(e){return function(e,t){var a=I.indexOf(t),n=[];-1===a?n=n.concat(I,t):0===a?n=n.concat(I.slice(1)):a===I.length-1?n=n.concat(I.slice(0,-1)):a>0&&(n=n.concat(I.slice(0,a),I.slice(a+1))),V(n)}(0,a)},role:"checkbox","aria-checked":r,tabIndex:-1,key:a,selected:r},_.filter((function(e){return!1===e.hide})).map((function(e){return l.a.createElement(w.a,{component:"th",key:e.id,id:o,scope:"row"},e.id.split(".").length>1?t[e.id.split(".")[0]][e.id.split(".")[1]]:t[e.id])})))})),ke>0&&l.a.createElement(k.a,{style:{height:49*ke}},l.a.createElement(w.a,{colSpan:6}))),l.a.createElement(j.a,null,l.a.createElement(k.a,null,l.a.createElement(C.a,{rowsPerPageOptions:[5,7,10,20,25,100],count:e.tableData.length,rowsPerPage:le,page:Q,backIconButtonProps:{"aria-label":e.tablePaginationPrevious},nextIconButtonProps:{"aria-label":e.tablePaginationNext},onChangePage:function(e,t){Z(t)},onChangeRowsPerPage:function(e){oe(+e.target.value),Z(0)}})))))),Boolean(e.actionHandlers)&&l.a.createElement(S.a,{keepMounted:!0,open:null!==xe.mouseY,onClose:function(){Oe($)},anchorReference:"anchorPosition",anchorPosition:null!==xe.mouseY&&null!==xe.mouseX?{top:xe.mouseY,left:xe.mouseX}:void 0},e.actions.map((function(t,a){return l.a.createElement(z.a,{key:a,onClick:function(){Oe($),e.actionHandlers[t.handler](G)}},t.label)}))))}},232:function(e,t,a){"use strict";var n=a(2),r=a(1),l=a(0),o=(a(6),a(3)),i=a(5),c=a(72),u=a(7),s=l.forwardRef((function(e,t){var a=e.children,i=e.classes,s=e.className,d=e.color,m=void 0===d?"default":d,b=e.component,h=void 0===b?"button":b,p=e.disabled,f=void 0!==p&&p,g=e.disableFocusRipple,E=void 0!==g&&g,v=e.focusVisibleClassName,y=e.size,x=void 0===y?"large":y,O=e.variant,k=void 0===O?"round":O,w=Object(n.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return l.createElement(c.a,Object(r.a)({className:Object(o.a)(i.root,s,"round"!==k&&i.extended,"large"!==x&&i["size".concat(Object(u.a)(x))],f&&i.disabled,{primary:i.primary,secondary:i.secondary,inherit:i.colorInherit}[m]),component:h,disabled:f,focusRipple:!E,focusVisibleClassName:Object(o.a)(i.focusVisible,v),ref:t},w),l.createElement("span",{className:i.label},a))}));t.a=Object(i.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(s)},6151:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return P}));var n=a(209),r=a.n(n),l=a(210),o=a(24),i=a(0),c=a.n(i),u=a(11),s=a(38),d=a(232),m=a(201),b=a(52),h=a(183),p=a(177),f=a(179),g=a(180),E=a(175),v=a(73),y=a(211),x=a(1),O=a(60);function k(e,t){var a=c.a.memo(c.a.forwardRef((function(t,a){return c.a.createElement(O.a,Object(x.a)({ref:a},t),e)})));return a.muiName=O.a.muiName,a}var w=k(c.a.createElement("path",{d:"M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z"})),j=k(c.a.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})),C=[],S={attributeSet:{attributes:[]}},z=Object(E.a)((function(e){return{containerBox:{transition:"width .3s"}}}));function P(){var e=z(),t=Object(i.useState)(!0),a=Object(o.a)(t,2),n=a[0],E=a[1],x=Object(i.useState)(!1),O=Object(o.a)(x,2),k=O[0],P=O[1],R=Object(i.useState)(!1),D=Object(o.a)(R,2),T=D[0],F=D[1],M=Object(i.useState)(""),H=Object(o.a)(M,2),q=H[0],W=(H[1],Object(i.useState)(!1)),I=Object(o.a)(W,2),V=I[0];I[1];function A(){return X.apply(this,arguments)}function X(){return(X=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(v.c)().getForms());case 2:t=e.sent,C=t.data,P(!k),E(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(i.useEffect)((function(){A()}),[]);var Y={eliminar:function(e){function t(){return(t=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(v.c)().deleteFormByID(t));case 2:A();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(e.id)},editar:function(e){console.log("editar: ".concat(e))},detalhes:function(e){S=e,F(!0)}};return V?c.a.createElement(u.a,{to:q}):c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{component:s.b,to:"/fichas/adicionar",variant:"extended",size:"medium",style:{position:"absolute",boxShadow:"none",bottom:"20px",right:"20px"},color:"primary"},"Adicionar"),c.a.createElement(m.a,{display:"flex",width:"100%"},c.a.createElement(m.a,{style:{paddingTop:"7px"}},c.a.createElement(b.a,{variant:"h5"},"Fichas")),c.a.createElement(m.a,{flexGrow:1},"\xa0"),c.a.createElement(m.a,null,c.a.createElement(h.a,null,c.a.createElement(w,null)),c.a.createElement(h.a,null,c.a.createElement(j,null)))),c.a.createElement(m.a,{display:"flex"},c.a.createElement(m.a,{flexGrow:1,className:e.containerBox},!n&&c.a.createElement(y.a,{actionHandlers:Y,actions:B,headCells:N,tableData:C})),c.a.createElement(m.a,{className:e.containerBox,style:{width:T?"250px":"0px"}},c.a.createElement("div",{style:{display:T?"block":"none"}},c.a.createElement(b.a,{variant:"h6",color:"initial"},"Detalhes"),c.a.createElement("br",null),c.a.createElement(b.a,{variant:"button",color:"initial"},S.displayName),c.a.createElement(p.a,null,S.attributeSet.attributes.map((function(e){return c.a.createElement(f.a,{key:e.id},c.a.createElement(g.a,{primary:e.displayName}))})))))))}var N=[{label:"UID",numeric:!1,disablePadding:!1,id:"id",editable:!1,hide:!1},{label:"Name",id:"name",numeric:!1,disablePadding:!1,editable:!1,hide:!1},{label:"Display Name",numeric:!1,disablePadding:!1,id:"displayName",editable:!1,hide:!1},{label:"ShortName",id:"shortName",numeric:!1,disablePadding:!1,editable:!1,hide:!1}],B=[{label:"Editar",handler:"editar"},{label:"Eliminar",handler:"eliminar"},{label:"Detalhes",handler:"detalhes"}]}}]);
//# sourceMappingURL=30.6d3ae70d.chunk.js.map