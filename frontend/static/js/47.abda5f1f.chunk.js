(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[47],{231:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),l=(a(6),a(3)),c=a(5),s=i.forwardRef((function(e,t){var a=e.classes,c=e.className,s=Object(r.a)(e,["classes","className"]);return i.createElement("div",Object(n.a)({className:Object(l.a)(a.root,c),ref:t},s))}));s.muiName="ListItemSecondaryAction",t.a=Object(c.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(s)},6143:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a(209),r=a.n(n),i=a(76),l=a(210),c=a(24),s=a(0),o=a.n(s),m=a(103),u=a(177),d=a(179),f=a(180),p=a(231),b=a(183),v=a(193),E=a(52),h=a(195),g=a(205),j=a(194),y=a(106),O=a(215),P=a(214),S=a(73),x=[];function C(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],C=Object(s.useState)([]),w=Object(c.a)(C,2),k=w[0],A=w[1],N=Object(s.useState)(""),F=Object(c.a)(N,2),T=(F[0],F[1]),W=Object(s.useState)(""),q=Object(c.a)(W,2),z=(q[0],q[1]);function B(){return(B=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(S.c)().getPermissions());case 2:t=e.sent,x=t.data,n(!a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(s.useEffect)((function(){!function(){B.apply(this,arguments)}()}),[]);var G={addPermission:function(e){A([].concat(Object(i.a)(k),[e]))},removePermission:function(e){var t=k.filter((function(t){return t!==e}));A(t)}},I=function(e,t){return o.a.createElement(m.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},o.a.createElement(u.a,{dense:!0,component:"div",role:"list"},e.map((function(e,a){return o.a.createElement(d.a,{onDoubleClick:function(){return G[t.includes("All")?"addPermission":"removePermission"](e.id)},key:a,role:"listitem",button:!0},o.a.createElement(f.a,{primary:e.name}),o.a.createElement(p.a,null,t.includes("All")?o.a.createElement(b.a,{color:"primary",size:"small",onClick:function(){G.addPermission(e.id)}},o.a.createElement(y.g,null)):o.a.createElement(b.a,{color:"secondary",size:"small",onClick:function(){G.removePermission(e.id)}},o.a.createElement(y.f,null))))})),o.a.createElement(d.a,null)))};return o.a.createElement(v.a,null,o.a.createElement("br",null),o.a.createElement(E.a,{variant:"h6"},"Create User Groups"),o.a.createElement("br",null),o.a.createElement(O.b,{initialValues:{},onSubmit:function(e,t){var a=t.setSubmitting;function n(){return(n=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.permissions=k.map((function(e){return{id:e}})),e.next=3,Promise.resolve(Object(S.c)().postGroups(t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e),setTimeout((function(){a(!1)}),500)},validationSchema:P.a().shape({name:P.c().required("Campo obrigat\xf3rio")})},(function(e){var t=e.values,a=e.touched,n=e.errors,r=(e.dirty,e.isSubmitting,e.handleChange),i=e.handleBlur;e.handleSubmit,e.handleReset,e.setFieldValue;return o.a.createElement(O.a,null,o.a.createElement(h.a,{container:!0,spacing:2},o.a.createElement(h.a,{item:!0,sm:12},o.a.createElement(g.a,{type:"text",variant:"outlined",error:n.name&&a.name,helperText:n.name,onChange:r,onBlur:i,name:"name",value:t.name,margin:"dense",id:"name",fullWidth:!0,label:"Name (*)"})),o.a.createElement(h.a,{item:!0,sm:6},o.a.createElement(g.a,{disabled:!0,type:"text",variant:"outlined",name:"filterAllPermissions",margin:"dense",onChange:function(e){T(e.target.value)},id:"filterAllPermissions",fullWidth:!0,label:"Filter"})),o.a.createElement(h.a,{item:!0,sm:6},o.a.createElement(g.a,{disabled:!0,type:"text",variant:"outlined",name:"filterSelectedPermissions",margin:"dense",onChange:function(e){z(e.target.value)},id:"filterSelectedPermissions",fullWidth:!0,label:"Filter"})),o.a.createElement(h.a,{item:!0,sm:6},I(x.filter((function(e){return!k.includes(e.id)})),"AllPermission")),o.a.createElement(h.a,{item:!0,sm:6},I(k.map((function(e){return x.filter((function(t){return t.id==e}))[0]})),"Permission")),o.a.createElement(h.a,{item:!0,sm:12,style:{paddingTop:"10px"}},o.a.createElement(j.a,null,"Cancel")," \xa0\xa0\xa0",o.a.createElement(j.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))})))}}}]);
//# sourceMappingURL=47.abda5f1f.chunk.js.map