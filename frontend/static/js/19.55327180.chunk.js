(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[19],{263:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},287:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),i=(a(6),a(4)),c=a(5),l=o.forwardRef((function(e,t){var a=e.classes,c=e.className,l=Object(r.a)(e,["classes","className"]);return o.createElement("div",Object(n.a)({className:Object(i.a)(a.root,c),ref:t},l))}));l.muiName="ListItemSecondaryAction",t.a=Object(c.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(l)},318:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},6679:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return T}));var n=a(76),r=a.n(n),o=a(83),i=a(12),c=a(0),l=a.n(c),s=a(13),d=a(114),u=a(199),m=a(157),p=a(201),f=a(287),b=a(204),h=a(223),g=a(59),v=a(224),y=a(227),E=a(882),O=a(847),j=a(851),x=a(849),w=a(850),C=a(848),N=a(212),k=a(6711),z=a(31),R=a(116),A=[],H=[],S=[],D={},L=[],M=null;function T(e){var t=Object(c.useState)(!1),a=Object(i.a)(t,2),n=a[0],T=a[1],P=Object(c.useState)({changeRoute:!1,to:""}),W=Object(i.a)(P,2),I=W[0],$=W[1],B=Object(c.useState)(!0),J=Object(i.a)(B,2),U=(J[0],J[1]);function _(){return(_=Object(o.a)(r.a.mark((function e(){var t,a,n,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M=window.location.href.split("/"),M=atob(M[M.length-1]),e.next=4,Promise.all([Object(z.e)().getDashboards(),Object(z.e)().getDashboardColecction("?id=".concat(M)),Object(z.e)().getUsers()]);case 4:t=e.sent,a=Object(i.a)(t,3),n=a[0],o=a[1],c=a[2],D=o.data[0],H=D.dashboardElements.map((function(e){return e.dashboard.id})),L=o.data[0].users,A=n.data,S=c.data,U(!1);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){A=[],H=[],function(){_.apply(this,arguments)}()}),[]);var q={addChart:function(e){H.push(e),T(!n)},removeChart:function(e){H=H.filter((function(t){return t!==e})),T(!n)}};function X(){return(X=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return D.dashboardElements=H.map((function(e,t){return{dashboard:{id:e},order:t}})),D.users=L,t.next=4,Promise.resolve(Object(z.e)().putDashboardColecction(D,M));case 4:e.messageBox("Colec\xe7\xe3o actualizada com exito!"),$({to:"dashboardCollection",changeRoute:!0});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Y=function(e,t){return l.a.createElement(d.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},l.a.createElement(u.a,{dense:!0,component:"div",role:"list"},e.map((function(e,a){return l.a.createElement(m.a,{onDoubleClick:function(){return q[t](e.id)},key:a,role:"listitem",button:!0},l.a.createElement(p.a,{primary:e.displayName}),l.a.createElement(f.a,null,l.a.createElement(b.a,{color:t.includes("add")?"primary":"secondary",size:"small",onClick:function(){q[t](e.id)}},t.includes("remove")?l.a.createElement(R.g,null):l.a.createElement(R.h,null))))})),l.a.createElement(m.a,null)))};return I.changeRoute?l.a.createElement(s.a,{to:I.to}):l.a.createElement(h.a,null,l.a.createElement(g.a,{variant:"h6"},"Edi\xe7\xe3o de cole\xe7\xe3o de gr\xe1ficos"),l.a.createElement(v.a,{container:!0,spacing:2},l.a.createElement(v.a,{item:!0,sm:12},l.a.createElement(y.a,{InputLabelProps:{shrink:!0},variant:"outlined",id:"name",label:"Nome",value:D.name,margin:"dense",fullWidth:!0,onChange:function(e){D.name=e.target.value}})),l.a.createElement(v.a,{item:!0,sm:12},l.a.createElement(y.a,{id:"displayName",InputLabelProps:{shrink:!0},label:"Diaplay name",fullWidth:!0,margin:"dense",value:D.displayName,variant:"outlined",onChange:function(e){D.displayName=e.target.value}})),l.a.createElement(v.a,{item:!0,sm:12},l.a.createElement(y.a,{id:"description",InputLabelProps:{shrink:!0},rows:4,multiline:!0,label:"Description",margin:"dense",value:D.description,variant:"outlined",fullWidth:!0,onChange:function(e){D.description=e.target.value}})),l.a.createElement(v.a,{item:!0,sm:6},Y(A.filter((function(e){return!H.includes(e.id)})),"addChart")),l.a.createElement(v.a,{item:!0,sm:6},Y(H.map((function(e){return A.filter((function(t){return t.id==e}))[0]})),"removeChart")),l.a.createElement(v.a,{item:!0,sm:12},l.a.createElement(k.a,{onChange:function(e,t){L.push(t);var a=new Set(L);L=Array.from(a),T(!n)},getOptionLabel:function(e){return e.username},fullWidth:!0,id:"utilizadores",size:"small",options:S,style:{minWidth:200},renderInput:function(e){return l.a.createElement(y.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Adicione utilizadores"}))}})),l.a.createElement(v.a,{item:!0,sm:12},l.a.createElement(E.a,{component:d.a},l.a.createElement(O.a,{size:"small"},l.a.createElement(j.a,null,l.a.createElement(x.a,null,l.a.createElement(w.a,null,"Username"),l.a.createElement(w.a,null,"Name"),l.a.createElement(w.a,null,"Email"),l.a.createElement(w.a,null))),l.a.createElement(C.a,null,L.map((function(e,t){return l.a.createElement(x.a,{key:t},l.a.createElement(w.a,{component:"th",scope:"row"},e.username),l.a.createElement(w.a,null,e.first_name+" "+e.last_name),l.a.createElement(w.a,null,e.email),l.a.createElement(w.a,{align:"right"},l.a.createElement(b.a,{onClick:function(){L=L.filter((function(e,a){return a!==t})),T(!n)},size:"small"},l.a.createElement(R.i,null))))})))))),l.a.createElement(v.a,{item:!0,style:{textAlign:"right"},sm:12},l.a.createElement(N.a,{color:"secondary"},"Cancelar"),"\xa0\xa0",l.a.createElement(N.a,{onClick:function(){return X.apply(this,arguments)},color:"primary",variant:"contained",disableElevation:!0},"Salvar"))))}},847:function(e,t,a){"use strict";var n=a(2),r=a(1),o=a(0),i=(a(6),a(4)),c=a(5),l=a(318),s=o.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"table":s,u=e.padding,m=void 0===u?"default":u,p=e.size,f=void 0===p?"medium":p,b=e.stickyHeader,h=void 0!==b&&b,g=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=o.useMemo((function(){return{padding:m,size:f,stickyHeader:h}}),[m,f,h]);return o.createElement(l.a.Provider,{value:v},o.createElement(d,Object(r.a)({role:"table"===d?null:"table",ref:t,className:Object(i.a)(a.root,c,h&&a.stickyHeader)},g)))}));t.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},848:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),i=(a(6),a(4)),c=a(5),l=a(263),s={variant:"body"},d=o.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,u=void 0===d?"tbody":d,m=Object(r.a)(e,["classes","className","component"]);return o.createElement(l.a.Provider,{value:s},o.createElement(u,Object(n.a)({className:Object(i.a)(a.root,c),ref:t,role:"tbody"===u?null:"rowgroup"},m)))}));t.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},849:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),i=(a(6),a(4)),c=a(5),l=a(263),s=a(16),d=o.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"tr":s,u=e.hover,m=void 0!==u&&u,p=e.selected,f=void 0!==p&&p,b=Object(r.a)(e,["classes","className","component","hover","selected"]),h=o.useContext(l.a);return o.createElement(d,Object(n.a)({ref:t,className:Object(i.a)(a.root,c,h&&{head:a.head,footer:a.footer}[h.variant],m&&a.hover,f&&a.selected),role:"tr"===d?null:"row"},b))}));t.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},850:function(e,t,a){"use strict";var n=a(2),r=a(1),o=a(0),i=(a(6),a(4)),c=a(5),l=a(7),s=a(16),d=a(318),u=a(263),m=o.forwardRef((function(e,t){var a,c,s=e.align,m=void 0===s?"inherit":s,p=e.classes,f=e.className,b=e.component,h=e.padding,g=e.scope,v=e.size,y=e.sortDirection,E=e.variant,O=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),j=o.useContext(d.a),x=o.useContext(u.a),w=x&&"head"===x.variant;b?(c=b,a=w?"columnheader":"cell"):c=w?"th":"td";var C=g;!C&&w&&(C="col");var N=h||(j&&j.padding?j.padding:"default"),k=v||(j&&j.size?j.size:"medium"),z=E||x&&x.variant,R=null;return y&&(R="asc"===y?"ascending":"descending"),o.createElement(c,Object(r.a)({ref:t,className:Object(i.a)(p.root,p[z],f,"inherit"!==m&&p["align".concat(Object(l.a)(m))],"default"!==N&&p["padding".concat(Object(l.a)(N))],"medium"!==k&&p["size".concat(Object(l.a)(k))],"head"===z&&j&&j.stickyHeader&&p.stickyHeader),"aria-sort":R,role:a,scope:C},O))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.e)(Object(s.c)(e.palette.divider,1),.88):Object(s.a)(Object(s.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},851:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),i=(a(6),a(4)),c=a(5),l=a(263),s={variant:"head"},d=o.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,u=void 0===d?"thead":d,m=Object(r.a)(e,["classes","className","component"]);return o.createElement(l.a.Provider,{value:s},o.createElement(u,Object(n.a)({className:Object(i.a)(a.root,c),ref:t,role:"thead"===u?null:"rowgroup"},m)))}));t.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},882:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),i=(a(6),a(4)),c=a(5),l=o.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,d=Object(r.a)(e,["classes","className","component"]);return o.createElement(s,Object(n.a)({ref:t,className:Object(i.a)(a.root,c)},d))}));t.a=Object(c.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(l)}}]);
//# sourceMappingURL=19.55327180.chunk.js.map