(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[39],{224:function(e,t,a){"use strict";var n=a(16),l=a(0),r=a.n(l),i=a(15),o=a(68),c=a(6171),u=a(376),s=a(104),d=a(192),m=a(213),b=a(53),f=a(148),p=a(151),h=a(157),g=a(149),E=a(6131),v=a(193),O=a(6169),y=a(6172),j=a(6173),k=a(6174),C=a(6175),w=a(6176),x=a(6204),S=a(101),P=a(206),B=a(6177),D=a(6209),T=a(194),F=a(188),q=a(146),R=a(257),N=a(260),A=a(306),X=a(208),z=a(107),W=a(6170),Y=a(233),I=a(234),L=a.n(I);function _(e){var t=Object(l.useState)(null),a=Object(n.a)(t,2),i=a[0],o=a[1];function c(){var t=new L.a.Workbook,a=t.addWorksheet("Gest\xe3o de Servicos");return a.columns=e.colls.filter((function(e){return"k"!==e.id})).map((function(e){return e.editable?{header:e.label,key:e.id,width:25}:{header:e.label,key:e.id,width:15}})),e.tableData.map((function(t){var n={};e.colls.filter((function(e){return"k"!==e.id})).map((function(e){n[e.id]=e.id.split(".").length>1?t[e.id.split(".")[0]][e.id.split(".")[1]]:t[e.id]})),a.addRow(n)})),a.eachRow((function(e,t){e.eachCell((function(e,t){"true"===e.value&&(e.font={color:{argb:"FF008000"}}),"false"===e.value&&(e.font={color:{argb:"FFFF0000"}}),e.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}}}))})),a.getRow(1).font={bold:!0},t}return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{title:"Transferir"},r.a.createElement(v.a,{"aria-controls":"simple-menu","aria-haspopup":"true",variant:"contained",onClick:function(e){o(e.currentTarget)}},r.a.createElement(z.b,null))),r.a.createElement(S.a,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},onClose:function(){return o(null)}},r.a.createElement(P.a,{onClick:function(){c().xlsx.writeBuffer().then((function(e){Object(Y.saveAs)(new Blob([e],{type:"application/octet-stream"}),"atendimento_export_"+(new Date).getTime()+".xlsx")})),o(null)}},r.a.createElement(W.a,null,r.a.createElement(z.d,null)),r.a.createElement(b.a,{variant:"inherit"},"Excel")),r.a.createElement(P.a,{onClick:function(){c().csv.writeBuffer().then((function(e){Object(Y.saveAs)(new Blob([e],{type:"application/text"}),"atendimento_export_"+(new Date).getTime()+".csv")})),o(null)}},r.a.createElement(W.a,null,r.a.createElement(z.c,null)),r.a.createElement(b.a,{variant:"inherit"},"CSV"))))}var H={root:{width:"100%"},tableWrapper:{minWidth:"700px",overflowX:"auto"},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},success:{backgroundColor:o.a[600]},error:{backgroundColor:"#d32f2f"},info:{backgroundColor:"#3f51b5"},warning:{backgroundColor:c.a[700]},icon:{fontSize:20},message:{display:"flex",alignItems:"center"},highlight:{color:"#f50057",backgroundColor:Object(i.e)("#ff4081",.85)},spacer:{flex:"1 1 100%"},actions:{color:"rgba(0, 0, 0, 0.54)"},title:{flex:"0 0 auto"}},M={mouseX:null,mouseY:null},G=null;function J(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var U=[];function V(e){var t=e.order,a=e.orderBy,n=e.onRequestSort;e.t;return r.a.createElement(B.a,null,r.a.createElement(k.a,null,U.filter((function(e){return!1===e.hide})).map((function(e){return r.a.createElement(C.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:a===e.id&&t},r.a.createElement(D.a,{active:a===e.id,direction:t,onClick:(l=e.id,function(e){n(e,l)})},r.a.createElement(O.a,{title:"order by ".concat(Boolean(e.hintText)?e.hintText:e.label)},r.a.createElement(b.a,{variant:"body2"},e.label))));var l}))))}function K(e){var t=Object(l.useState)(null),a=Object(n.a)(t,2),i=a[0],o=a[1],c=e.onRequestToogleColumn,u=Object(l.useState)(!1),d=Object(n.a)(u,2),f=d[0],p=d[1];var h=Boolean(i),g=h?"simple-popover":void 0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{title:"ocultar/mostrar colunas"},r.a.createElement(v.a,{"aria-describedby":g,onClick:function(e){o(e.currentTarget)}},r.a.createElement(z.i,null))),r.a.createElement(T.a,{id:g,open:h,anchorEl:i,onClose:function(){o(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(s.a,{square:!0},r.a.createElement(m.a,{style:{textAlign:"center",paddingTop:"10px"}},r.a.createElement(b.a,null,"Colunas")),r.a.createElement(F.a,{dense:!0},U.filter((function(e){return"k"!==e.id})).map((function(e,t){return r.a.createElement(q.a,{key:e.id},r.a.createElement(R.a,{control:r.a.createElement(N.a,{style:{padding:"5px"},checked:!e.hide,onChange:function(){return function(e){U=U.map((function(t){return t.id===e&&(t.hide=!t.hide),t})),p(!f)}(e.id)},value:t,color:"primary"}),label:e.label}))}))),r.a.createElement(A.a,null),r.a.createElement(X.a,{onClick:function(e){p(!f),c(e),o(null)},color:"primary",style:{width:"100%"},small:!0},"Apply"))))}t.a=function(e,t){var a=Object(l.useState)(!1),i=Object(n.a)(a,2),o=i[0],c=i[1],B=Object(l.useState)("asc"),D=Object(n.a)(B,2),T=D[0],F=D[1],q=Object(l.useState)("k"),R=Object(n.a)(q,2),N=R[0],A=R[1],X=Object(l.useState)([]),W=Object(n.a)(X,2),Y=W[0],I=W[1],L=Object(l.useState)(0),Q=Object(n.a)(L,2),Z=Q[0],$=Q[1],ee=Object(l.useState)(!0),te=Object(n.a)(ee,2),ae=te[0],ne=(te[1],Object(l.useState)(7)),le=Object(n.a)(ne,2),re=le[0],ie=le[1],oe=Object(l.useState)(!1),ce=Object(n.a)(oe,2),ue=ce[0],se=ce[1],de=Object(l.useState)(""),me=Object(n.a)(de,2),be=me[0],fe=me[1],pe=Object(l.useState)(!1),he=Object(n.a)(pe,2),ge=he[0],Ee=he[1],ve=Object(l.useState)(M),Oe=Object(n.a)(ve,2),ye=Oe[0],je=Oe[1];Object(l.useEffect)((function(){e.headCells.map((function(e,t){return{i:t,hide:e.hide}})),U=e.headCells,Ee(!ge)}),[]);var ke=re-Math.min(re,e.tableData.length-Z*re);return r.a.createElement("div",{className:H.root},r.a.createElement(u.a,{color:"secondary",variant:"query",style:{display:o?"block":"none"}}),r.a.createElement(s.a,{elevation:0,style:{minWidth:"700px",overflowX:"auto",backgroundColor:"transparent"}},r.a.createElement(d.a,{style:{padding:"0px"}},r.a.createElement(m.a,{display:"flex",width:"100%"},r.a.createElement(m.a,null,!ue&&r.a.createElement(b.a,{variant:"h6",id:"tableTitle"},e.tableName),ue&&r.a.createElement(f.a,{in:ue},r.a.createElement(p.a,{style:{paddingLeft:"15px"}},r.a.createElement(h.a,{htmlFor:"query-param",style:{paddingLeft:"17px"}},"Procurar"),r.a.createElement(g.a,{id:"query-param",value:be,onChange:function(e){return fe(e.target.value)},endAdornment:r.a.createElement(E.a,{position:"end"},r.a.createElement(v.a,{onClick:function(){return se(!1)},"aria-label":"query-param"},r.a.createElement(z.a,null)))})))),r.a.createElement(m.a,{flexGrow:1},"\xa0"),r.a.createElement(m.a,null,r.a.createElement(O.a,{title:"Procurar"},r.a.createElement(v.a,{onClick:function(){return se(!ue)},"aria-label":"filter list"},r.a.createElement(z.e,null))),r.a.createElement(K,{onRequestToogleColumn:function(e){Ee(!ge)}}),r.a.createElement(_,{colls:e.headCells,tableData:e.tableData})))),r.a.createElement("div",{className:H.tableWrapper},r.a.createElement(y.a,{"aria-labelledby":"tableTitle",size:ae?"small":"medium"},r.a.createElement(V,{onRequestTriggerUpdate:function(e){c(!0),c(!1)},classes:H,numSelected:Y.length,order:T,orderBy:N,onRequestSort:function(e,t){F(N===t&&"desc"===T?"asc":"desc"),A(t)},rowCount:e.tableData.length}),r.a.createElement(j.a,null,function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(e.tableData.filter((function(t){var a=!1;return e.headCells.filter((function(e){return!1===e.hide})).map((function(e){Boolean(t[e.id])&&t[e.id].toString().toLowerCase().includes(be.toLowerCase())&&(a=!0)})),a})),function(e,t){return"desc"===e?function(e,a){return J(e,a,t)}:function(e,a){return-J(e,a,t)}}(T,N)).slice(Z*re,Z*re+re).map((function(t,a){var n,l=(n=a,-1!==Y.indexOf(n)),i="enhanced-table-checkbox-".concat(a);return r.a.createElement(k.a,{hover:!0,onContextMenu:function(a){var n;Boolean(e.actions)&&(G=t,(n=a).preventDefault(),je({mouseX:n.clientX-2,mouseY:n.clientY-4}))},onClick:function(e){return function(e,t){var a=Y.indexOf(t),n=[];-1===a?n=n.concat(Y,t):0===a?n=n.concat(Y.slice(1)):a===Y.length-1?n=n.concat(Y.slice(0,-1)):a>0&&(n=n.concat(Y.slice(0,a),Y.slice(a+1))),I(n)}(0,a)},role:"checkbox","aria-checked":l,tabIndex:-1,key:a,selected:l},U.filter((function(e){return!1===e.hide})).map((function(e){return r.a.createElement(C.a,{component:"th",key:e.id,id:i,scope:"row"},e.id.split(".").length>1?t[e.id.split(".")[0]][e.id.split(".")[1]]:t[e.id])})))})),ke>0&&r.a.createElement(k.a,{style:{height:49*ke}},r.a.createElement(C.a,{colSpan:6}))),r.a.createElement(w.a,null,r.a.createElement(k.a,null,r.a.createElement(x.a,{rowsPerPageOptions:[5,7,10,20,25,100],count:e.tableData.length,rowsPerPage:re,page:Z,backIconButtonProps:{"aria-label":e.tablePaginationPrevious},nextIconButtonProps:{"aria-label":e.tablePaginationNext},onChangePage:function(e,t){$(t)},onChangeRowsPerPage:function(e){ie(+e.target.value),$(0)}})))))),Boolean(e.actionHandlers)&&r.a.createElement(S.a,{keepMounted:!0,open:null!==ye.mouseY,onClose:function(){je(M)},anchorReference:"anchorPosition",anchorPosition:null!==ye.mouseY&&null!==ye.mouseX?{top:ye.mouseY,left:ye.mouseX}:void 0},e.actions.map((function(t,a){return r.a.createElement(P.a,{key:a,onClick:function(){je(M),e.actionHandlers[t.handler](G)}},t.label)}))))}},6192:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(217),l=a.n(n),r=a(218),i=a(16),o=a(0),c=a.n(o),u=a(11),s=a(202),d=a(209),m=a(224),b=a(54),f=[],p={};function h(){var e=Object(o.useState)(!0),t=Object(i.a)(e,2),a=t[0],n=t[1],h=Object(o.useState)(!1),v=Object(i.a)(h,2),O=v[0],y=v[1],j=Object(o.useState)(""),k=Object(i.a)(j,2),C=k[0],w=k[1];Object(o.useEffect)((function(){function e(){return(e=Object(r.a)(l.a.mark((function e(){var t,a,r,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href.split("/"),t=atob(t[t.length-1]),e.next=4,Promise.all([Object(b.c)().getAttributeSetById(t),Object(b.c)().getSimpleValueSets(t)]);case 4:a=e.sent,r=Object(i.a)(a,2),o=r[0],c=r[1],(p=o.data).attributes.forEach((function(e,t){0==t||1==t?g.push({label:e.displayName,id:"".concat(e.uid,".value"),numeric:!1,disablePadding:!1,editable:!1,hide:!1}):g.push({label:e.displayName,id:"".concat(e.uid,".value"),numeric:!1,disablePadding:!1,editable:!1,hide:!0})})),f=c.data,n(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var x={abrir:function(e){w("/attributeSetFormData/"+btoa(e.id)),y(!0)},listarFormularios:function(e){console.log("listar formularios: ".concat(e))},eliminar:function(e){console.log(e.id)},editar:function(e){console.log("editar: ".concat(e))},detalhes:function(e){console.log("sfsdf")}};return O?c.a.createElement(u.a,{to:C}):c.a.createElement(s.a,null,c.a.createElement(d.a,{container:!0,spacing:2,style:{paddingTop:"20px"}},c.a.createElement(d.a,{item:!0,sm:12},!a&&c.a.createElement(m.a,{tableName:p.displayName,actionHandlers:x,actions:E,headCells:g,tableData:f}))))}var g=[{label:"id",numeric:!1,disablePadding:!1,id:"id",editable:!1,hide:!1},{label:"Date",id:"created_at",numeric:!1,disablePadding:!1,editable:!1,hide:!1},{label:"Location",numeric:!1,disablePadding:!1,id:"orgUnit.name",editable:!1,hide:!1}],E=[{label:"Abrir",handler:"abrir"},{label:"Formularios",handler:"listarFormularios"},{label:"Eliminar",handler:"eliminar"},{label:"Editar",handler:"editar"},{label:"Detalhes",handler:"detalhes"}]}}]);
//# sourceMappingURL=39.bf19a3e4.chunk.js.map