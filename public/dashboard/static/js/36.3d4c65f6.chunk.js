(this["webpackJsonpfrontend.atendimento.co.mz"]=this["webpackJsonpfrontend.atendimento.co.mz"]||[]).push([[36],{1826:function(e,t,i){"use strict";i.r(t);var n=i(29),r=i.n(n),s=i(28),a=i(51),c=i(16),l=i(0),o=i(18),d=i(433),u=i(181),j=i(405),m=i(400),b=i(403),f=i(404),h=i(88),O=i(402),x=i(227),p=i(448),g=i(429),v=i(449),y=i(648),C=i.n(y),_=i(414),P=i.n(_),S=i(71),k=i(62),w=i(34),U=i(460),W=i(2),z=[],A=[],F=[],G=[],V=[],q=[],T={};function H(e){var t=e.permissions,i=Object(l.useState)(!1),n=Object(c.a)(i,2),r=n[0],s=n[1],a={addPermission:function(e){z.push(e),s(!r)},removePermission:function(e){z=z.filter((function(t){return t!==e})),s(!r)}},o=function(e,t){return Object(W.jsx)(u.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0,children:Object(W.jsxs)(O.a,{dense:!0,component:"div",role:"list",children:[e.map((function(e,i){return Object(W.jsxs)(x.a,{onDoubleClick:function(){return a[t](e.id)},role:"listitem",button:!0,children:[Object(W.jsx)(p.a,{primary:e.name}),Object(W.jsx)(v.a,{children:t.includes("add")?Object(W.jsx)(b.a,{color:"primary",size:"small",onClick:function(){a[t](e.id)},children:Object(W.jsx)(C.a,{})}):Object(W.jsx)(b.a,{color:"secondary",size:"small",onClick:function(){a[t](e.id)},children:Object(W.jsx)(P.a,{})})})]},i)})),Object(W.jsx)(x.a,{})]})})};return Object(W.jsxs)(m.a,{container:!0,spacing:2,children:[Object(W.jsx)(m.a,{item:!0,sm:6,children:Object(W.jsx)(j.a,{disabled:!0,type:"text",variant:"outlined",name:"filterAllPermissions",margin:"dense",id:"filterAllPermissions",fullWidth:!0,label:"Filter permissions"})}),Object(W.jsx)(m.a,{item:!0,sm:6,children:Object(W.jsx)(j.a,{disabled:!0,type:"text",variant:"outlined",name:"filterSelectedPermissions",margin:"dense",id:"filterSelectedPermissions",fullWidth:!0,label:"Filter permissions"})}),Object(W.jsx)(m.a,{item:!0,sm:6,children:o(t.filter((function(e){return!z.includes(e.id)})),"addPermission")}),Object(W.jsx)(m.a,{item:!0,sm:6,children:o(z.map((function(e){return t.filter((function(t){return t.id==e}))[0]})),"removePermission")})]})}function B(e){var t=e.groups,i=Object(l.useState)(!1),n=Object(c.a)(i,2),r=n[0],s=n[1],a={addGroup:function(e){A.push(e),s(!r)},removeGroup:function(e){A=A.filter((function(t){return t!==e})),s(!r)}},o=function(e,t){return Object(W.jsx)(u.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0,children:Object(W.jsxs)(O.a,{dense:!0,component:"div",role:"list",children:[e.map((function(e,i){return Object(W.jsxs)(x.a,{onDoubleClick:function(){return a[t](e.id)},role:"listitem",button:!0,children:[Object(W.jsx)(p.a,{primary:e.name}),Object(W.jsx)(v.a,{children:t.includes("add")?Object(W.jsx)(b.a,{color:"primary",size:"small",onClick:function(){a[t](e.id)},children:Object(W.jsx)(C.a,{})}):Object(W.jsx)(b.a,{color:"secondary",size:"small",onClick:function(){a[t](e.id)},children:Object(W.jsx)(P.a,{})})})]},i)})),Object(W.jsx)(x.a,{})]})})};return Object(W.jsxs)(m.a,{container:!0,spacing:2,children:[Object(W.jsx)(m.a,{item:!0,sm:6,children:Object(W.jsx)(j.a,{disabled:!0,type:"text",variant:"outlined",name:"filterAllGroups",margin:"dense",id:"filterAllGroups",fullWidth:!0,label:"Filter groups"})}),Object(W.jsx)(m.a,{item:!0,sm:6,children:Object(W.jsx)(j.a,{disabled:!0,type:"text",variant:"outlined",name:"filterSelectedPermissions",margin:"dense",id:"filterSelectedGroups",fullWidth:!0,label:"Filter groups"})}),Object(W.jsx)(m.a,{item:!0,sm:6,children:o(t.filter((function(e){return!A.includes(e.id)})),"addGroup")}),Object(W.jsx)(m.a,{item:!0,sm:6,children:o(A.map((function(e){return t.filter((function(t){return t.id==e}))[0]})),"removeGroup")})]})}function E(e){var t=e.orgUnits,i=Object(l.useState)(!1),n=Object(c.a)(i,2),r=n[0],s=n[1],a={addOrgUnit:function(e){F.push(e),s(!r)},removeOrgUnit:function(e){F=F.filter((function(t){return t!==e})),s(!r)}},o=function(e,t){return Object(W.jsx)(u.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0,children:Object(W.jsxs)(O.a,{dense:!0,component:"div",role:"list",children:[e.map((function(e,i){return Object(W.jsxs)(x.a,{onDoubleClick:function(){return a[t](e.id)},role:"listitem",button:!0,children:[Object(W.jsx)(p.a,{primary:e.name}),Object(W.jsx)(v.a,{children:t.includes("add")?Object(W.jsx)(b.a,{color:"primary",size:"small",onClick:function(){a[t](e.id)},children:Object(W.jsx)(C.a,{})}):Object(W.jsx)(b.a,{color:"secondary",size:"small",onClick:function(){a[t](e.id)},children:Object(W.jsx)(P.a,{})})})]},i)})),Object(W.jsx)(x.a,{})]})})};return Object(W.jsxs)(m.a,{container:!0,spacing:2,children:[Object(W.jsx)(m.a,{item:!0,sm:6,children:Object(W.jsx)(j.a,{disabled:!0,type:"text",variant:"outlined",name:"filterAllPermissions",margin:"dense",id:"filterAllPermissions",fullWidth:!0,label:"Filter orgunit"})}),Object(W.jsx)(m.a,{item:!0,sm:6,children:Object(W.jsx)(j.a,{disabled:!0,type:"text",variant:"outlined",name:"filterSelectedPermissions",margin:"dense",id:"filterSelectedPermissions",fullWidth:!0,label:"Filter orgunit"})}),Object(W.jsx)(m.a,{item:!0,sm:6,children:o(t.filter((function(e){return!F.includes(e.id)})),"addOrgUnit")}),Object(W.jsx)(m.a,{item:!0,sm:6,children:o(F.map((function(e){return t.filter((function(t){return t.id==e}))[0]})),"removeOrgUnit")})]})}t.default=function(e){var t=Object(o.g)().id,i=(Object(U.a)().t,Object(l.useState)(!0)),n=Object(c.a)(i,2),u=n[0],b=n[1];function O(){return(O=Object(a.a)(r.a.mark((function e(){var i,n,s,a,l,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,Promise.all([Object(w.c)().getUsers("?id="+atob(t)),Object(w.c)().getPermissions(),Object(w.c)().getOrganisationUnits(),Object(w.c)().getGroups()]);case 3:i=e.sent,n=Object(c.a)(i,4),s=n[0],a=n[1],l=n[2],o=n[3],G=a.data,V=o.data,q=l.data,T=s.data[0],z=T.user_permissions,b(!1);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){return O.apply(this,arguments)}),[t]),u?Object(W.jsx)("div",{style:{width:"100%",height:"80vh",textAlign:"center",marginTop:"50vh"},children:Object(W.jsx)(g.a,{})}):Object(W.jsxs)(d.a,{children:[Object(W.jsx)(h.a,{variant:"h6",children:"Edit User"}),Object(W.jsx)("br",{}),Object(W.jsx)(S.b,{initialValues:Object(s.a)({},T),onSubmit:function(e,t){var i=t.setSubmitting;function n(){return(n=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.groups=A.map((function(e){return{id:e}})),t.orgUnits=F.map((function(e){return{id:e}})),t.user_permissions=z.map((function(e){return{id:e}})),e.next=5,Promise.resolve(Object(w.c)().putUser(T.id,t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e),setTimeout((function(){i(!1)}),500)},validationSchema:k.d().shape({email:k.f().required("Campo obrigat\xf3rio"),username:k.f().required("Campo obrigat\xf3rio"),first_name:k.f().required("Campo obrigat\xf3rio"),last_name:k.f().required("Campo obrigat\xf3rio")}),children:function(e){var t=e.values,i=e.touched,n=e.errors,r=(e.dirty,e.isSubmitting,e.handleChange),s=e.handleBlur;e.handleSubmit,e.handleReset,e.setFieldValue;return Object(W.jsx)(S.a,{children:Object(W.jsxs)(m.a,{container:!0,spacing:2,children:[Object(W.jsx)(m.a,{item:!0,sm:12,xs:12,children:!1}),Object(W.jsx)(m.a,{item:!0,sm:12,children:Object(W.jsx)(j.a,{type:"text",variant:"outlined",error:n.first_name&&i.first_name,helperText:n.first_name,onChange:r,onBlur:s,value:t.first_name,margin:"dense",id:"first_name",fullWidth:!0,label:"First name (*)"})}),Object(W.jsx)(m.a,{item:!0,sm:12,children:Object(W.jsx)(j.a,{type:"text",variant:"outlined",error:n.last_name&&i.last_name,helperText:n.last_name,onChange:r,onBlur:s,value:t.last_name,margin:"dense",id:"last_name",fullWidth:!0,label:"Last name (*)"})}),Object(W.jsx)(m.a,{item:!0,sm:12,children:Object(W.jsx)(j.a,{type:"text",variant:"outlined",error:n.email&&i.email,helperText:n.email,onChange:r,onBlur:s,value:t.email,margin:"dense",id:"email",fullWidth:!0,label:"Email"})}),Object(W.jsx)(m.a,{item:!0,sm:12,children:Object(W.jsx)(j.a,{type:"text",error:n.username&&i.username,helperText:n.username,onChange:r,onBlur:s,variant:"outlined",value:t.username,margin:"dense",id:"username",fullWidth:!0,label:"Username (*)"})}),Object(W.jsx)(m.a,{item:!0,sm:12,children:Object(W.jsx)(B,{groups:V})}),Object(W.jsx)(m.a,{item:!0,sm:12,children:Object(W.jsx)(H,{permissions:G})}),Object(W.jsx)(m.a,{item:!0,sm:12,children:Object(W.jsx)(E,{orgUnits:q})}),Object(W.jsxs)(m.a,{item:!0,sm:12,style:{paddingTop:"10px",textAlign:"right"},children:[Object(W.jsx)(f.a,{children:"Cancel"})," \xa0\xa0\xa0",Object(W.jsx)(f.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained",children:"Save"})]})]})})}})]})}},648:function(e,t,i){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,((n=i(69))&&n.__esModule?n:{default:n}).default)("M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");t.default=r}}]);