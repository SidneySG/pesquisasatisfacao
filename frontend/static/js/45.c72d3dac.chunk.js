(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[45],{247:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),l=(a(6),a(4)),c=a(5),o=i.forwardRef((function(e,t){var a=e.classes,c=e.className,o=Object(r.a)(e,["classes","className"]);return i.createElement("div",Object(n.a)({className:Object(l.a)(a.root,c),ref:t},o))}));o.muiName="ListItemSecondaryAction",t.a=Object(c.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(o)},6667:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return W}));var n=a(79),r=a(220),i=a.n(r),l=a(221),c=a(16),o=a(0),u=a.n(o),s=a(104),m=a(188),d=a(146),f=a(190),p=a(247),b=a(193),h=a(202),E=a(53),g=a(209),v=a(212),O=a(208),y=a(6678),j=a(107),N=a(239),S=a(238),x=a(54),A=[],w=[],C={};function W(){var e=Object(o.useState)({}),t=Object(c.a)(e,2),a=t[0],r=t[1],W=Object(o.useState)(!0),U=Object(c.a)(W,2),k=U[0],B=U[1],I=Object(o.useState)([]),T=Object(c.a)(I,2),L=T[0],q=T[1],z=Object(o.useState)([]),R=Object(c.a)(z,2),D=R[0],F=R[1],J=Object(o.useState)(!1),P=Object(c.a)(J,2);P[0],P[1];Object(o.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href.split("/"),t=atob(t[t.length-1]),e.next=4,Promise.all([Object(x.c)().getOrganisationUnits(),Object(x.c)().getAttributes(),Object(x.c)().getAttributeSetById(t)]);case 4:return a=e.sent,C=a[2].data,A=a[0].data,e.next=9,a[1].data;case 9:w=e.sent,q(C.attributes.map((function(e){return e.id}))),r({name:C.name,displayName:C.displayName,shortName:C.shortName}),B(!1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var V={addAttribute:function(e){q([].concat(Object(n.a)(L),[e]))},removeAttribute:function(e){var t=L.filter((function(t){return t!==e}));q(t)},addOrgUnit:function(e){F([].concat(Object(n.a)(D),[e]))},removeOrgUnit:function(e){var t=D.filter((function(t){return t!==e}));F(t)}},M=function(e,t){return u.a.createElement(s.a,{elevation:0,style:{border:"1px solid #c4c4c4",borderRadius:"5px",width:"100%",height:280,overflow:"auto"},square:!0},u.a.createElement(m.a,{dense:!0,component:"div",role:"list"},e.map((function(e,a){return u.a.createElement(d.a,{onDoubleClick:function(){return V["remove".concat(t)](e.id)},key:a,role:"listitem",button:!0},u.a.createElement(f.a,{primary:"".concat(a+1," - ").concat(e.name)}),u.a.createElement(p.a,null,u.a.createElement(b.a,{color:"secondary",size:"small",onClick:function(){V["remove".concat(t)](e.id)}},u.a.createElement(j.f,null))))})),u.a.createElement(d.a,null)))};return u.a.createElement(u.a.Fragment,null,!k&&u.a.createElement(h.a,null,u.a.createElement(E.a,{variant:"h6"},"Edit Attribute set"),u.a.createElement("br",null),u.a.createElement(N.b,{initialValues:a,onSubmit:function(e,t){var a=t.setSubmitting;function n(){return(n=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.attributes=L.map((function(e){return{id:e}})),t.orgUnits=D.map((function(e){return{id:e}})),e.next=4,Promise.resolve(Object(x.c)().putAttributeSet(C.id,t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e),setTimeout((function(){a(!1)}),500)},validationSchema:S.a().shape({name:S.c().required("Campo obrigat\xf3rio"),shortName:S.c().required("Campo obrigat\xf3rio")})},(function(e){var t=e.values,a=e.touched,n=e.errors,r=(e.dirty,e.isSubmitting,e.handleChange),i=e.handleBlur;e.handleSubmit,e.handleReset,e.setFieldValue;return u.a.createElement(N.a,null,u.a.createElement(g.a,{container:!0,spacing:2},u.a.createElement(g.a,{item:!0,sm:12},u.a.createElement(v.a,{type:"text",variant:"outlined",error:n.name&&a.name,helperText:n.name,onChange:r,onBlur:i,value:t.name,margin:"dense",id:"name",fullWidth:!0,label:"Name (*)"})),u.a.createElement(g.a,{item:!0,sm:12},u.a.createElement(v.a,{type:"text",variant:"outlined",error:n.displayName&&a.displayName,helperText:n.displayName,onChange:r,onBlur:i,value:t.displayName,margin:"dense",id:"displayName",fullWidth:!0,label:"Display Name"})),u.a.createElement(g.a,{item:!0,sm:12},u.a.createElement(v.a,{type:"text",error:n.shortName&&a.shortName,helperText:n.shortName,onChange:r,onBlur:i,variant:"outlined",value:t.shortName,margin:"dense",id:"shortName",fullWidth:!0,label:"Shortname (*)"})),u.a.createElement(g.a,{item:!0,sm:12},u.a.createElement(y.a,{onChange:function(e,t){Boolean(t)&&V.addAttribute(t.id)},getOptionLabel:function(e){return e.displayName},fullWidth:!0,id:"attributes",size:"small",options:w.filter((function(e){return!L.includes(e.id)})),style:{minWidth:200},renderInput:function(e){return u.a.createElement(v.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Add attributes"}))}})),u.a.createElement(g.a,{item:!0,sm:12},M(L.map((function(e){return w.filter((function(t){return t.id==e}))[0]})),"Attribute")),u.a.createElement(g.a,{item:!0,sm:12},u.a.createElement(y.a,{onChange:function(e,t){Boolean(t)&&V.addOrgUnit(t.id)},getOptionLabel:function(e){return e.displayName},fullWidth:!0,id:"orgUnits",size:"small",options:A.filter((function(e){return!D.includes(e.id)})),style:{minWidth:200},renderInput:function(e){return u.a.createElement(v.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Add orgUnits"}))}})),u.a.createElement(g.a,{item:!0,sm:12},M(D.map((function(e){return A.filter((function(t){return t.id==e}))[0]})),"OrgUnit")),u.a.createElement(g.a,{item:!0,sm:12,style:{paddingTop:"10px"}},u.a.createElement(O.a,null,"Cancel")," \xa0\xa0\xa0",u.a.createElement(O.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))}))),u.a.createElement("br",null))}}}]);
//# sourceMappingURL=45.c72d3dac.chunk.js.map