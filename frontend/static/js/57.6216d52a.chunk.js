(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[57],{278:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),l=(a(6),a(4)),s=a(5),c=i.forwardRef((function(e,t){var a=e.classes,s=e.className,c=Object(r.a)(e,["classes","className"]);return i.createElement("div",Object(n.a)({className:Object(l.a)(a.root,s),ref:t},c))}));c.muiName="ListItemSecondaryAction",t.a=Object(s.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(c)},6692:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a(228),r=a.n(n),i=a(79),l=a(229),s=a(15),c=a(0),o=a.n(c),m=a(107),u=a(192),d=a(149),f=a(194),p=a(278),b=a(197),v=a(211),E=a(56),h=a(213),g=a(216),j=a(212),y=a(110),O=a(255),P=a(254),S=a(40),x=[];function C(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],C=Object(c.useState)([]),w=Object(s.a)(C,2),k=w[0],A=w[1],N=Object(c.useState)(""),F=Object(s.a)(N,2),T=(F[0],F[1]),W=Object(c.useState)(""),q=Object(s.a)(W,2),z=(q[0],q[1]);function B(){return(B=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(S.e)().getPermissions());case 2:t=e.sent,x=t.data,n(!a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){B.apply(this,arguments)}()}),[]);var G={addPermission:function(e){A([].concat(Object(i.a)(k),[e]))},removePermission:function(e){var t=k.filter((function(t){return t!==e}));A(t)}},I=function(e,t){return o.a.createElement(m.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},o.a.createElement(u.a,{dense:!0,component:"div",role:"list"},e.map((function(e,a){return o.a.createElement(d.a,{onDoubleClick:function(){return G[t.includes("All")?"addPermission":"removePermission"](e.id)},key:a,role:"listitem",button:!0},o.a.createElement(f.a,{primary:e.name}),o.a.createElement(p.a,null,t.includes("All")?o.a.createElement(b.a,{color:"primary",size:"small",onClick:function(){G.addPermission(e.id)}},o.a.createElement(y.h,null)):o.a.createElement(b.a,{color:"secondary",size:"small",onClick:function(){G.removePermission(e.id)}},o.a.createElement(y.g,null))))})),o.a.createElement(d.a,null)))};return o.a.createElement(v.a,null,o.a.createElement("br",null),o.a.createElement(E.a,{variant:"h6"},"Create User Groups"),o.a.createElement("br",null),o.a.createElement(O.b,{initialValues:{},onSubmit:function(e,t){var a=t.setSubmitting;function n(){return(n=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.permissions=k.map((function(e){return{id:e}})),e.next=3,Promise.resolve(Object(S.e)().postGroups(t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e),setTimeout((function(){a(!1)}),500)},validationSchema:P.a().shape({name:P.c().required("Campo obrigat\xf3rio")})},(function(e){var t=e.values,a=e.touched,n=e.errors,r=(e.dirty,e.isSubmitting,e.handleChange),i=e.handleBlur;e.handleSubmit,e.handleReset,e.setFieldValue;return o.a.createElement(O.a,null,o.a.createElement(h.a,{container:!0,spacing:2},o.a.createElement(h.a,{item:!0,sm:12},o.a.createElement(g.a,{type:"text",variant:"outlined",error:n.name&&a.name,helperText:n.name,onChange:r,onBlur:i,name:"name",value:t.name,margin:"dense",id:"name",fullWidth:!0,label:"Name (*)"})),o.a.createElement(h.a,{item:!0,sm:6},o.a.createElement(g.a,{disabled:!0,type:"text",variant:"outlined",name:"filterAllPermissions",margin:"dense",onChange:function(e){T(e.target.value)},id:"filterAllPermissions",fullWidth:!0,label:"Filter"})),o.a.createElement(h.a,{item:!0,sm:6},o.a.createElement(g.a,{disabled:!0,type:"text",variant:"outlined",name:"filterSelectedPermissions",margin:"dense",onChange:function(e){z(e.target.value)},id:"filterSelectedPermissions",fullWidth:!0,label:"Filter"})),o.a.createElement(h.a,{item:!0,sm:6},I(x.filter((function(e){return!k.includes(e.id)})),"AllPermission")),o.a.createElement(h.a,{item:!0,sm:6},I(k.map((function(e){return x.filter((function(t){return t.id==e}))[0]})),"Permission")),o.a.createElement(h.a,{item:!0,sm:12,style:{paddingTop:"10px"}},o.a.createElement(j.a,null,"Cancel")," \xa0\xa0\xa0",o.a.createElement(j.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))})))}}}]);
//# sourceMappingURL=57.6216d52a.chunk.js.map