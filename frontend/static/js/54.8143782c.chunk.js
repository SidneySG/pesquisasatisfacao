(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[54],{247:function(e,t,a){"use strict";var n=a(15),r=a(0),l=a.n(r),o=a(16),i=a(71),c=a(6662),u=a(866),s=a(107),d=a(196),m=a(217),f=a(55),b=a(151),p=a(154),h=a(160),E=a(152),g=a(6629),v=a(197),O=a(6660),y=a(867),j=a(868),k=a(869),x=a(870),w=a(6663),C=a(6699),S=a(104),P=a(209),D=a(871),B=a(6704),T=a(198),F=a(192),q=a(149),N=a(6649),R=a(6698),A=a(387),X=a(212),z=a(110),I=a(6661),W=a(290),Y=a(291),L=a.n(Y);function H(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),o=a[0],i=a[1];function c(){var t=new L.a.Workbook,a=t.addWorksheet("Gest\xe3o de Servicos");return a.columns=e.colls.filter((function(e){return"k"!==e.id})).map((function(e){return e.editable?{header:e.label,key:e.id,width:25}:{header:e.label,key:e.id,width:15}})),e.tableData.map((function(t){var n={};e.colls.filter((function(e){return"k"!==e.id})).map((function(e){n[e.id]=e.id.split(".").length>1?t[e.id.split(".")[0]][e.id.split(".")[1]]:t[e.id]})),a.addRow(n)})),a.eachRow((function(e,t){e.eachCell((function(e,t){"true"===e.value&&(e.font={color:{argb:"FF008000"}}),"false"===e.value&&(e.font={color:{argb:"FFFF0000"}}),e.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}}))})),a.getRow(1).font={bold:!0},t}return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{title:"Transferir"},l.a.createElement(v.a,{"aria-controls":"simple-menu","aria-haspopup":"true",variant:"contained",onClick:function(e){i(e.currentTarget)}},l.a.createElement(z.b,null))),l.a.createElement(S.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},onClose:function(){return i(null)}},l.a.createElement(P.a,{onClick:function(){c().xlsx.writeBuffer().then((function(e){Object(W.saveAs)(new Blob([e],{type:"application/octet-stream"}),"atendimento_export_"+(new Date).getTime()+".xlsx")})),i(null)}},l.a.createElement(I.a,null,l.a.createElement(z.d,null)),l.a.createElement(f.a,{variant:"inherit"},"Excel")),l.a.createElement(P.a,{onClick:function(){c().csv.writeBuffer().then((function(e){Object(W.saveAs)(new Blob([e],{type:"application/text"}),"atendimento_export_"+(new Date).getTime()+".csv")})),i(null)}},l.a.createElement(I.a,null,l.a.createElement(z.c,null)),l.a.createElement(f.a,{variant:"inherit"},"CSV"))))}var M={root:{width:"100%"},tableWrapper:{minWidth:"700px",overflowX:"auto"},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},success:{backgroundColor:i.a[600]},error:{backgroundColor:"#d32f2f"},info:{backgroundColor:"#3f51b5"},warning:{backgroundColor:c.a[700]},icon:{fontSize:20},message:{display:"flex",alignItems:"center"},highlight:{color:"#f50057",backgroundColor:Object(o.e)("#ff4081",.85)},spacer:{flex:"1 1 100%"},actions:{color:"rgba(0, 0, 0, 0.54)"},title:{flex:"0 0 auto"}},_={mouseX:null,mouseY:null},G=null;function J(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var U=[];function V(e){var t=e.order,a=e.orderBy,n=e.onRequestSort;e.t;return l.a.createElement(D.a,null,l.a.createElement(k.a,null,U.filter((function(e){return!1===e.hide})).map((function(e){return l.a.createElement(x.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:a===e.id&&t},l.a.createElement(B.a,{active:a===e.id,direction:t,onClick:(r=e.id,function(e){n(e,r)})},l.a.createElement(O.a,{title:"order by ".concat(Boolean(e.hintText)?e.hintText:e.label)},l.a.createElement(f.a,{variant:"body2"},e.label))));var r}))))}function K(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),o=a[0],i=a[1],c=e.onRequestToogleColumn,u=Object(r.useState)(!1),d=Object(n.a)(u,2),b=d[0],p=d[1];var h=Boolean(o),E=h?"simple-popover":void 0;return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{title:"ocultar/mostrar colunas"},l.a.createElement(v.a,{"aria-describedby":E,onClick:function(e){i(e.currentTarget)}},l.a.createElement(z.j,null))),l.a.createElement(T.a,{id:E,open:h,anchorEl:o,onClose:function(){i(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},l.a.createElement(s.a,{square:!0},l.a.createElement(m.a,{style:{textAlign:"center",paddingTop:"10px"}},l.a.createElement(f.a,null,"Colunas")),l.a.createElement(F.a,{dense:!0},U.filter((function(e){return"k"!==e.id})).map((function(e,t){return l.a.createElement(q.a,{key:e.id},l.a.createElement(N.a,{control:l.a.createElement(R.a,{style:{padding:"5px"},checked:!e.hide,onChange:function(){return function(e){U=U.map((function(t){return t.id===e&&(t.hide=!t.hide),t})),p(!b)}(e.id)},value:t,color:"primary"}),label:e.label}))}))),l.a.createElement(A.a,null),l.a.createElement(X.a,{onClick:function(e){p(!b),c(e),i(null)},color:"primary",style:{width:"100%"},small:!0},"Apply"))))}t.a=function(e,t){var a=Object(r.useState)(!1),o=Object(n.a)(a,2),i=o[0],c=o[1],D=Object(r.useState)("asc"),B=Object(n.a)(D,2),T=B[0],F=B[1],q=Object(r.useState)("k"),N=Object(n.a)(q,2),R=N[0],A=N[1],X=Object(r.useState)([]),I=Object(n.a)(X,2),W=I[0],Y=I[1],L=Object(r.useState)(0),Q=Object(n.a)(L,2),Z=Q[0],$=Q[1],ee=Object(r.useState)(!0),te=Object(n.a)(ee,2),ae=te[0],ne=(te[1],Object(r.useState)(7)),re=Object(n.a)(ne,2),le=re[0],oe=re[1],ie=Object(r.useState)(!1),ce=Object(n.a)(ie,2),ue=ce[0],se=ce[1],de=Object(r.useState)(""),me=Object(n.a)(de,2),fe=me[0],be=me[1],pe=Object(r.useState)(!1),he=Object(n.a)(pe,2),Ee=he[0],ge=he[1],ve=Object(r.useState)(_),Oe=Object(n.a)(ve,2),ye=Oe[0],je=Oe[1];Object(r.useEffect)((function(){e.headCells.map((function(e,t){return{i:t,hide:e.hide}})),U=e.headCells,ge(!Ee)}),[]);var ke=le-Math.min(le,e.tableData.length-Z*le);return l.a.createElement("div",{className:M.root},l.a.createElement(u.a,{color:"secondary",variant:"query",style:{display:i?"block":"none"}}),l.a.createElement(s.a,{elevation:0,style:{minWidth:"700px",overflowX:"auto",backgroundColor:"transparent"}},l.a.createElement(d.a,{style:{padding:"0px"}},l.a.createElement(m.a,{display:"flex",width:"100%"},l.a.createElement(m.a,null,!ue&&l.a.createElement(f.a,{variant:"h6",id:"tableTitle"},e.tableName),ue&&l.a.createElement(b.a,{in:ue},l.a.createElement(p.a,{style:{paddingLeft:"15px"}},l.a.createElement(h.a,{htmlFor:"query-param",style:{paddingLeft:"17px"}},"Procurar"),l.a.createElement(E.a,{id:"query-param",value:fe,onChange:function(e){return be(e.target.value)},endAdornment:l.a.createElement(g.a,{position:"end"},l.a.createElement(v.a,{onClick:function(){return se(!1)},"aria-label":"query-param"},l.a.createElement(z.a,null)))})))),l.a.createElement(m.a,{flexGrow:1},"\xa0"),l.a.createElement(m.a,null,l.a.createElement(O.a,{title:"Procurar"},l.a.createElement(v.a,{onClick:function(){return se(!ue)},"aria-label":"filter list"},l.a.createElement(z.e,null))),l.a.createElement(K,{onRequestToogleColumn:function(e){ge(!Ee)}}),l.a.createElement(H,{colls:e.headCells,tableData:e.tableData})))),l.a.createElement("div",{className:M.tableWrapper},l.a.createElement(y.a,{"aria-labelledby":"tableTitle",size:ae?"small":"medium"},l.a.createElement(V,{onRequestTriggerUpdate:function(e){c(!0),c(!1)},classes:M,numSelected:W.length,order:T,orderBy:R,onRequestSort:function(e,t){F(R===t&&"desc"===T?"asc":"desc"),A(t)},rowCount:e.tableData.length}),l.a.createElement(j.a,null,function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(e.tableData.filter((function(t){var a=!1;return e.headCells.filter((function(e){return!1===e.hide})).map((function(e){Boolean(t[e.id])&&t[e.id].toString().toLowerCase().includes(fe.toLowerCase())&&(a=!0)})),a})),function(e,t){return"desc"===e?function(e,a){return J(e,a,t)}:function(e,a){return-J(e,a,t)}}(T,R)).slice(Z*le,Z*le+le).map((function(t,a){var n,r=(n=a,-1!==W.indexOf(n)),o="enhanced-table-checkbox-".concat(a);return l.a.createElement(k.a,{hover:!0,onContextMenu:function(a){var n;Boolean(e.actions)&&(G=t,(n=a).preventDefault(),je({mouseX:n.clientX-2,mouseY:n.clientY-4}))},onClick:function(e){return function(e,t){var a=W.indexOf(t),n=[];-1===a?n=n.concat(W,t):0===a?n=n.concat(W.slice(1)):a===W.length-1?n=n.concat(W.slice(0,-1)):a>0&&(n=n.concat(W.slice(0,a),W.slice(a+1))),Y(n)}(0,a)},role:"checkbox","aria-checked":r,tabIndex:-1,key:a,selected:r},U.filter((function(e){return!1===e.hide})).map((function(e){return l.a.createElement(x.a,{component:"th",key:e.id,id:o,scope:"row"},e.id.split(".").length>1?t[e.id.split(".")[0]][e.id.split(".")[1]]:t[e.id])})))})),ke>0&&l.a.createElement(k.a,{style:{height:49*ke}},l.a.createElement(x.a,{colSpan:6}))),l.a.createElement(w.a,null,l.a.createElement(k.a,null,l.a.createElement(C.a,{rowsPerPageOptions:[5,7,10,20,25,100],count:e.tableData.length,rowsPerPage:le,page:Z,backIconButtonProps:{"aria-label":e.tablePaginationPrevious},nextIconButtonProps:{"aria-label":e.tablePaginationNext},onChangePage:function(e,t){$(t)},onChangeRowsPerPage:function(e){oe(+e.target.value),$(0)}})))))),Boolean(e.actionHandlers)&&l.a.createElement(S.a,{keepMounted:!0,open:null!==ye.mouseY,onClose:function(){je(_)},anchorReference:"anchorPosition",anchorPosition:null!==ye.mouseY&&null!==ye.mouseX?{top:ye.mouseY,left:ye.mouseX}:void 0},e.actions.map((function(t,a){return l.a.createElement(P.a,{key:a,onClick:function(){je(_),e.actionHandlers[t.handler](G)}},t.label)}))))}},6681:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a(227),r=a.n(n),l=a(228),o=a(15),i=a(0),c=a.n(i),u=a(12),s=a(217),d=a(55),m=a(190),f=a(247),b=a(56),p=Object(m.a)((function(e){return{containerBox:{transition:"width .3s"}}})),h=[];function E(){var e=p(),t=Object(i.useState)(!0),a=Object(o.a)(t,2),n=a[0],m=a[1],E=Object(i.useState)(!1),O=Object(o.a)(E,2),y=O[0],j=O[1],k=Object(i.useState)(""),x=Object(o.a)(k,2),w=x[0],C=x[1],S=Object(i.useState)(!1),P=Object(o.a)(S,2),D=P[0],B=P[1];Object(i.useEffect)((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(b.c)().getAttributeSet());case 2:h=(h=e.sent).data,m(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var T={listarDados:function(e){C("/attributeSetData/"+btoa(e.id)),B(!0)},listarFormularios:function(e){console.log("listar formularios: ".concat(e))},eliminar:function(e){function t(e){return a.apply(this,arguments)}function a(){return(a=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.resolve(Object(b.c)().deleteAttributeSetByID(t));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}t(e.id)},editar:function(e){C("/editAttributeSet/"+btoa(e.id)),B(!0)},detalhes:function(e){j(!0)}};return D?c.a.createElement(u.a,{to:w}):c.a.createElement(s.a,{display:"flex"},c.a.createElement(s.a,{flexGrow:1,className:e.containerBox},!n&&c.a.createElement(f.a,{tableName:"Attribute Sets",actionHandlers:T,actions:v,headCells:g,tableData:h})),c.a.createElement(s.a,{className:e.containerBox,style:{width:y?"250px":"0px"}},c.a.createElement("div",{style:{display:y?"block":"none"}},c.a.createElement(d.a,{variant:"h6",color:"initial"},"Detalhes"))))}var g=[{label:"UID",numeric:!1,disablePadding:!1,id:"id",editable:!1,hide:!1},{label:"Name",id:"name",numeric:!1,disablePadding:!1,editable:!1,hide:!1},{label:"Display Name",numeric:!1,disablePadding:!1,id:"displayName",editable:!1,hide:!1}],v=[{label:"Listar Dados",handler:"listarDados"},{label:"Formularios",handler:"listarFormularios"},{label:"Eliminar",handler:"eliminar"},{label:"Editar",handler:"editar"},{label:"Detalhes",handler:"detalhes"}]}}]);
//# sourceMappingURL=54.8143782c.chunk.js.map