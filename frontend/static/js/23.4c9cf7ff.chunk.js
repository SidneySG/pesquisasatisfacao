(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[23],{263:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},318:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},6692:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return H}));var n=a(75),r=a.n(n),o=a(82),l=a(12),i=a(0),c=a.n(i),s=a(13),d=a(223),m=a(228),u=a(59),p=a(224),h=a(227),g=a(212),f=a(881),b=a(113),v=a(847),y=a(851),E=a(849),O=a(850),j=a(848),x=a(204),N=a(6709),w=a(115),C=a(265),T=a(264),k=a(31),S=[],R={},z=[],W=null;function H(e){var t=Object(i.useState)(!0),a=Object(l.a)(t,2),n=a[0],H=a[1],A=Object(i.useState)({type:"TEXT"}),M=Object(l.a)(A,2),B=M[0],D=M[1],L=Object(i.useState)(""),P=Object(l.a)(L,2),_=P[0],$=P[1],J=Object(i.useState)(!1),V=Object(l.a)(J,2),F=V[0],I=V[1],X=Object(i.useState)({changeRoute:!1,to:""}),q=Object(l.a)(X,2),G=q[0],K=q[1],Q=0;function U(e){var t=e.target.value;Q&&clearTimeout(Q),Q=setTimeout((function(){$(t)}),700)}return Object(i.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){var t,a,n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W=window.location.href.split("/"),W=atob(W[W.length-1]),e.next=4,Promise.all([Object(k.e)().getValueTypes(),Object(k.e)().getOptionSets("/".concat(W))]);case 4:return t=e.sent,a=Object(l.a)(t,2),n=a[0],o=a[1],e.next=10,n.data;case 10:return S=e.sent,e.next=13,o.data;case 13:R=e.sent,D(R),z=R.options,H(!1);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),G.changeRoute?c.a.createElement(s.a,{to:G.to}):!n&&c.a.createElement(d.a,null,c.a.createElement(m.a,{style:{paddingTop:"7px"}},c.a.createElement(u.a,{variant:"h5"},"Edit Option Set")),c.a.createElement(C.b,{initialValues:B,onSubmit:function(t,a){var n=a.setSubmitting;function l(){return(l=Object(o.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.options=z,t.next=3,Promise.resolve(Object(k.e)().putOptionSets(a,W));case 3:e.messageBox("OptionSet actualizada com exito!"),K({to:"optionSets",changeRoute:!0});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(e){l.apply(this,arguments)}(t),setTimeout((function(){n(!1)}),500)},validationSchema:T.a().shape({name:T.c().required("Campo obrigat\xf3rio")})},(function(e){var t=e.values,a=e.touched,n=e.errors,r=(e.dirty,e.isSubmitting,e.handleChange),o=e.handleBlur,l=(e.handleSubmit,e.handleReset,e.setFieldValue);return c.a.createElement(C.a,null," ",c.a.createElement(p.a,{container:!0,style:{paddingRight:"7px"}},c.a.createElement(p.a,{item:!0,sm:12},c.a.createElement(h.a,{type:"text",error:n.name&&a.name,helperText:n.name,onChange:r,onBlur:o,value:t.name,margin:"dense",id:"name",fullWidth:!0,label:"Name (*)"})),c.a.createElement(p.a,{item:!0,sm:12},c.a.createElement(h.a,{type:"text",error:n.displayName&&a.displayName,helperText:n.displayName,onChange:r,onBlur:o,value:t.displayName,margin:"dense",id:"displayName",fullWidth:!0,label:"DisplayName (*)"})),c.a.createElement(p.a,{item:!0,sm:12},c.a.createElement(h.a,{type:"text",error:n.shortName&&a.shortName,helperText:n.shortName,onChange:r,onBlur:o,value:t.shortName,margin:"dense",id:"shortName",fullWidth:!0,label:"ShortName (*)"})),c.a.createElement(p.a,{item:!0,sm:12},c.a.createElement(N.a,{onChange:function(e,t){l("type",t)},value:t.type,fullWidth:!0,id:"type",options:S,style:{minWidth:200},renderInput:function(e){return c.a.createElement(h.a,Object.assign({fullWidth:!0},e,{label:"Type"}))}})),c.a.createElement(p.a,{item:!0,sm:12},c.a.createElement(m.a,{display:"flex"},c.a.createElement(m.a,{flexGrow:1},c.a.createElement(h.a,{margin:"dense",onKeyDown:U,value:_,fullWidth:!0,label:"Filtrar op\xe7\xf5es"})),c.a.createElement(m.a,{style:{paddingTop:"24px",paddingLeft:"7px"}},c.a.createElement(g.a,{size:"small",variant:"contained",color:"secondary",onClick:function(){z.push({name:"",shortName:"",displayName:""}),I(!F)},disableElevation:!0},"Adicionar Op\xe7\xe3o")))),c.a.createElement(p.a,{item:!0,sm:12,style:{paddingTop:"5px"}},c.a.createElement(f.a,{component:b.a},c.a.createElement(v.a,{size:"small"},c.a.createElement(y.a,null,c.a.createElement(E.a,null,c.a.createElement(O.a,null,"DisplayName"),c.a.createElement(O.a,null,"Name"),c.a.createElement(O.a,null,"ShortName"),c.a.createElement(O.a,null))),c.a.createElement(j.a,null,z.filter((function(e){return e.name.toLowerCase().includes(_.toLowerCase())})).map((function(e,t){return c.a.createElement(E.a,{key:t},c.a.createElement(O.a,{component:"th",scope:"row"},c.a.createElement(h.a,{margin:"dense",value:e.displayName,name:"display_name_".concat(t),onChange:function(e){z[t].displayName=e.target.value,I(!F)},fullWidth:!0})),c.a.createElement(O.a,null,c.a.createElement(h.a,{margin:"dense",value:e.name,name:"name_".concat(t),onChange:function(e){z[t].name=e.target.value,I(!F)},fullWidth:!0})),c.a.createElement(O.a,null,c.a.createElement(h.a,{margin:"dense",value:e.shortName,name:"short_name_".concat(t),onChange:function(e){z[t].shortName=e.target.value,I(!F)},fullWidth:!0})),c.a.createElement(O.a,{align:"right"},c.a.createElement(x.a,{onClick:function(){z=z.filter((function(e,a){return a!==t})),I(!F)},size:"small"},c.a.createElement(w.i,null))))})))))),c.a.createElement(p.a,{item:!0,sm:12,style:{paddingTop:"12px",textAlign:"right"}},c.a.createElement(g.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))})))}},847:function(e,t,a){"use strict";var n=a(2),r=a(1),o=a(0),l=(a(6),a(4)),i=a(5),c=a(318),s=o.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,d=void 0===s?"table":s,m=e.padding,u=void 0===m?"default":m,p=e.size,h=void 0===p?"medium":p,g=e.stickyHeader,f=void 0!==g&&g,b=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=o.useMemo((function(){return{padding:u,size:h,stickyHeader:f}}),[u,h,f]);return o.createElement(c.a.Provider,{value:v},o.createElement(d,Object(r.a)({role:"table"===d?null:"table",ref:t,className:Object(l.a)(a.root,i,f&&a.stickyHeader)},b)))}));t.a=Object(i.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},848:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),l=(a(6),a(4)),i=a(5),c=a(263),s={variant:"body"},d=o.forwardRef((function(e,t){var a=e.classes,i=e.className,d=e.component,m=void 0===d?"tbody":d,u=Object(r.a)(e,["classes","className","component"]);return o.createElement(c.a.Provider,{value:s},o.createElement(m,Object(n.a)({className:Object(l.a)(a.root,i),ref:t,role:"tbody"===m?null:"rowgroup"},u)))}));t.a=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},849:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),l=(a(6),a(4)),i=a(5),c=a(263),s=a(16),d=o.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,d=void 0===s?"tr":s,m=e.hover,u=void 0!==m&&m,p=e.selected,h=void 0!==p&&p,g=Object(r.a)(e,["classes","className","component","hover","selected"]),f=o.useContext(c.a);return o.createElement(d,Object(n.a)({ref:t,className:Object(l.a)(a.root,i,f&&{head:a.head,footer:a.footer}[f.variant],u&&a.hover,h&&a.selected),role:"tr"===d?null:"row"},g))}));t.a=Object(i.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},850:function(e,t,a){"use strict";var n=a(2),r=a(1),o=a(0),l=(a(6),a(4)),i=a(5),c=a(7),s=a(16),d=a(318),m=a(263),u=o.forwardRef((function(e,t){var a,i,s=e.align,u=void 0===s?"inherit":s,p=e.classes,h=e.className,g=e.component,f=e.padding,b=e.scope,v=e.size,y=e.sortDirection,E=e.variant,O=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),j=o.useContext(d.a),x=o.useContext(m.a),N=x&&"head"===x.variant;g?(i=g,a=N?"columnheader":"cell"):i=N?"th":"td";var w=b;!w&&N&&(w="col");var C=f||(j&&j.padding?j.padding:"default"),T=v||(j&&j.size?j.size:"medium"),k=E||x&&x.variant,S=null;return y&&(S="asc"===y?"ascending":"descending"),o.createElement(i,Object(r.a)({ref:t,className:Object(l.a)(p.root,p[k],h,"inherit"!==u&&p["align".concat(Object(c.a)(u))],"default"!==C&&p["padding".concat(Object(c.a)(C))],"medium"!==T&&p["size".concat(Object(c.a)(T))],"head"===k&&j&&j.stickyHeader&&p.stickyHeader),"aria-sort":S,role:a,scope:w},O))}));t.a=Object(i.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.e)(Object(s.c)(e.palette.divider,1),.88):Object(s.a)(Object(s.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},851:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),l=(a(6),a(4)),i=a(5),c=a(263),s={variant:"head"},d=o.forwardRef((function(e,t){var a=e.classes,i=e.className,d=e.component,m=void 0===d?"thead":d,u=Object(r.a)(e,["classes","className","component"]);return o.createElement(c.a.Provider,{value:s},o.createElement(m,Object(n.a)({className:Object(l.a)(a.root,i),ref:t,role:"thead"===m?null:"rowgroup"},u)))}));t.a=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},881:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),l=(a(6),a(4)),i=a(5),c=o.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.component,s=void 0===c?"div":c,d=Object(r.a)(e,["classes","className","component"]);return o.createElement(s,Object(n.a)({ref:t,className:Object(l.a)(a.root,i)},d))}));t.a=Object(i.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(c)}}]);
//# sourceMappingURL=23.4c9cf7ff.chunk.js.map