(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[44],{230:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),l=(a(6),a(3)),s=a(5),o=i.forwardRef((function(e,t){var a=e.classes,s=e.className,o=Object(r.a)(e,["classes","className"]);return i.createElement("div",Object(n.a)({className:Object(l.a)(a.root,s),ref:t},o))}));o.muiName="ListItemSecondaryAction",t.a=Object(s.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(o)},6144:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return W}));var n=a(209),r=a.n(n),i=a(210),l=a(24),s=a(0),o=a.n(s),m=a(193),c=a(52),u=a(195),d=a(205),f=a(194),p=a(103),E=a(177),b=a(179),h=a(180),v=a(230),g=a(183),y=a(106),w=a(213),O=a(212),x=a(73),C=[],j=[],S=[],P=[],k=[],_=[];function W(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1];function p(){return(p=Object(i.a)(r.a.mark((function e(){var t,i,s,o,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(x.c)().getPermissions(),Object(x.c)().getOrganisationUnits(),Object(x.c)().getGroups()]);case 2:t=e.sent,i=Object(l.a)(t,3),s=i[0],o=i[1],m=i[2],C=s.data,S=m.data,j=o.data,n(!a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),o.a.createElement(m.a,null,o.a.createElement("br",null),o.a.createElement(c.a,{variant:"h6"},"Create User"),o.a.createElement("br",null),o.a.createElement(w.b,{initialValues:{},onSubmit:function(e,t){var a=t.setSubmitting;function n(){return(n=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.groups=k.map((function(e){return{id:e}})),t.orgUnits=_.map((function(e){return{id:e}})),t.user_permissions=P.map((function(e){return{id:e}})),delete t.confirmpassowd,e.next=6,Promise.resolve(Object(x.c)().postUser(t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e),setTimeout((function(){a(!1)}),500)},validationSchema:O.a().shape({email:O.c().required("Campo obrigat\xf3rio"),username:O.c().required("Campo obrigat\xf3rio"),first_name:O.c().required("Campo obrigat\xf3rio"),last_name:O.c().required("Campo obrigat\xf3rio"),password:O.c().required("Campo obrigat\xf3rio").min(6),confirmpassowd:O.c().required("Campo obrigat\xf3rio").oneOf([O.b("password"),null],"As senhas deve ser identica")})},(function(e){var t=e.values,a=e.touched,n=e.errors,r=(e.dirty,e.isSubmitting,e.handleChange),i=e.handleBlur;e.handleSubmit,e.handleReset,e.setFieldValue;return o.a.createElement(w.a,null,o.a.createElement(u.a,{container:!0,spacing:2},o.a.createElement(u.a,{item:!0,sm:12},o.a.createElement(d.a,{type:"text",variant:"outlined",error:n.first_name&&a.first_name,helperText:n.first_name,onChange:r,onBlur:i,value:t.first_name,margin:"dense",id:"first_name",fullWidth:!0,label:"First name (*)"})),o.a.createElement(u.a,{item:!0,sm:12},o.a.createElement(d.a,{type:"text",variant:"outlined",error:n.last_name&&a.last_name,helperText:n.last_name,onChange:r,onBlur:i,value:t.last_name,margin:"dense",id:"last_name",fullWidth:!0,label:"Last name (*)"})),o.a.createElement(u.a,{item:!0,sm:12},o.a.createElement(d.a,{type:"text",variant:"outlined",error:n.email&&a.email,helperText:n.email,onChange:r,onBlur:i,value:t.email,margin:"dense",id:"email",fullWidth:!0,label:"Email"})),o.a.createElement(u.a,{item:!0,sm:12},o.a.createElement(d.a,{type:"text",error:n.username&&a.username,helperText:n.username,onChange:r,onBlur:i,variant:"outlined",value:t.username,margin:"dense",id:"username",fullWidth:!0,label:"Username (*)"})),o.a.createElement(u.a,{item:!0,sm:12},o.a.createElement(d.a,{type:"password",error:n.password&&a.password,helperText:n.password,onChange:r,onBlur:i,variant:"outlined",value:t.password,margin:"dense",id:"password",fullWidth:!0,label:"Password"})),o.a.createElement(u.a,{item:!0,sm:12},o.a.createElement(d.a,{type:"text",error:n.confirmpassowd&&a.confirmpassowd,helperText:n.confirmpassowd,onChange:r,onBlur:i,variant:"outlined",value:t.confirmpassowd,margin:"dense",id:"confirmpassowd",fullWidth:!0,label:"Confirm password (*)"})),o.a.createElement(u.a,{item:!0,sm:12},o.a.createElement(A,null)),o.a.createElement(u.a,{item:!0,sm:12},o.a.createElement(q,null)),o.a.createElement(u.a,{item:!0,sm:12},o.a.createElement(U,null)),o.a.createElement(u.a,{item:!0,sm:12,style:{paddingTop:"10px"}},o.a.createElement(f.a,null,"Cancel")," \xa0\xa0\xa0",o.a.createElement(f.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))})))}function q(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],r={addPermission:function(e){P.push(e),n(!a)},removePermission:function(e){P=P.filter((function(t){return t!==e})),n(!a)}},i=function(e,t){return o.a.createElement(p.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},o.a.createElement(E.a,{dense:!0,component:"div",role:"list"},e.map((function(e,a){return o.a.createElement(b.a,{onDoubleClick:function(){return r[t](e.id)},key:a,role:"listitem",button:!0},o.a.createElement(h.a,{primary:e.name}),o.a.createElement(v.a,null,t.includes("add")?o.a.createElement(g.a,{color:"primary",size:"small",onClick:function(){r[t](e.id)}},o.a.createElement(y.g,null)):o.a.createElement(g.a,{color:"secondary",size:"small",onClick:function(){r[t](e.id)}},o.a.createElement(y.f,null))))})),o.a.createElement(b.a,null)))};return o.a.createElement(u.a,{container:!0,spacing:2},o.a.createElement(u.a,{item:!0,sm:6},o.a.createElement(d.a,{disabled:!0,type:"text",variant:"outlined",name:"filterAllPermissions",margin:"dense",id:"filterAllPermissions",fullWidth:!0,label:"Filter permissions"})),o.a.createElement(u.a,{item:!0,sm:6},o.a.createElement(d.a,{disabled:!0,type:"text",variant:"outlined",name:"filterSelectedPermissions",margin:"dense",id:"filterSelectedPermissions",fullWidth:!0,label:"Filter permissions"})),o.a.createElement(u.a,{item:!0,sm:6},i(C.filter((function(e){return!P.includes(e.id)})),"addPermission")),o.a.createElement(u.a,{item:!0,sm:6},i(P.map((function(e){return C.filter((function(t){return t.id==e}))[0]})),"removePermission")))}function A(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],r={addGroup:function(e){k.push(e),n(!a)},removeGroup:function(e){k=k.filter((function(t){return t!==e})),n(!a)}},i=function(e,t){return o.a.createElement(p.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},o.a.createElement(E.a,{dense:!0,component:"div",role:"list"},e.map((function(e,a){return o.a.createElement(b.a,{onDoubleClick:function(){return r[t](e.id)},key:a,role:"listitem",button:!0},o.a.createElement(h.a,{primary:e.name}),o.a.createElement(v.a,null,t.includes("add")?o.a.createElement(g.a,{color:"primary",size:"small",onClick:function(){r[t](e.id)}},o.a.createElement(y.g,null)):o.a.createElement(g.a,{color:"secondary",size:"small",onClick:function(){r[t](e.id)}},o.a.createElement(y.f,null))))})),o.a.createElement(b.a,null)))};return o.a.createElement(u.a,{container:!0,spacing:2},o.a.createElement(u.a,{item:!0,sm:6},o.a.createElement(d.a,{disabled:!0,type:"text",variant:"outlined",name:"filterAllGroups",margin:"dense",id:"filterAllGroups",fullWidth:!0,label:"Filter groups"})),o.a.createElement(u.a,{item:!0,sm:6},o.a.createElement(d.a,{disabled:!0,type:"text",variant:"outlined",name:"filterSelectedPermissions",margin:"dense",id:"filterSelectedGroups",fullWidth:!0,label:"Filter groups"})),o.a.createElement(u.a,{item:!0,sm:6},i(S.filter((function(e){return!k.includes(e.id)})),"addGroup")),o.a.createElement(u.a,{item:!0,sm:6},i(k.map((function(e){return S.filter((function(t){return t.id==e}))[0]})),"removeGroup")))}function U(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],r={addOrgUnit:function(e){_.push(e),n(!a)},removeOrgUnit:function(e){_=_.filter((function(t){return t!==e})),n(!a)}},i=function(e,t){return o.a.createElement(p.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},o.a.createElement(E.a,{dense:!0,component:"div",role:"list"},e.map((function(e,a){return o.a.createElement(b.a,{onDoubleClick:function(){return r[t](e.id)},key:a,role:"listitem",button:!0},o.a.createElement(h.a,{primary:e.name}),o.a.createElement(v.a,null,t.includes("add")?o.a.createElement(g.a,{color:"primary",size:"small",onClick:function(){r[t](e.id)}},o.a.createElement(y.g,null)):o.a.createElement(g.a,{color:"secondary",size:"small",onClick:function(){r[t](e.id)}},o.a.createElement(y.f,null))))})),o.a.createElement(b.a,null)))};return o.a.createElement(u.a,{container:!0,spacing:2},o.a.createElement(u.a,{item:!0,sm:6},o.a.createElement(d.a,{disabled:!0,type:"text",variant:"outlined",name:"filterAllPermissions",margin:"dense",id:"filterAllPermissions",fullWidth:!0,label:"Filter orgunit"})),o.a.createElement(u.a,{item:!0,sm:6},o.a.createElement(d.a,{disabled:!0,type:"text",variant:"outlined",name:"filterSelectedPermissions",margin:"dense",id:"filterSelectedPermissions",fullWidth:!0,label:"Filter orgunit"})),o.a.createElement(u.a,{item:!0,sm:6},i(j.filter((function(e){return!_.includes(e.id)})),"addOrgUnit")),o.a.createElement(u.a,{item:!0,sm:6},i(_.map((function(e){return j.filter((function(t){return t.id==e}))[0]})),"removeOrgUnit")))}}}]);
//# sourceMappingURL=44.3e1e2c64.chunk.js.map