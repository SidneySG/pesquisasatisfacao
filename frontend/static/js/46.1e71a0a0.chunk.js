(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[46],{250:function(e,t,a){"use strict";var n=a(1),i=a(2),l=a(0),r=(a(6),a(4)),o=a(5),c=l.forwardRef((function(e,t){var a=e.classes,o=e.className,c=Object(i.a)(e,["classes","className"]);return l.createElement("div",Object(n.a)({className:Object(r.a)(a.root,o),ref:t},c))}));c.muiName="ListItemSecondaryAction",t.a=Object(o.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(c)},6667:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return T}));var n=a(79),i=a(221),l=a.n(i),r=a(222),o=a(16),c=a(0),u=a.n(c),s=a(104),m=a(188),d=a(146),p=a(190),f=a(250),h=a(193),b=a(202),E=a(53),v=a(209),y=a(212),g=a(208),O=a(6677),j=a(107),N=a(239),S=a(238),C=a(54),W={},x=[],R=[],w=[],V=[];function T(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),a=t[0],i=t[1],T=Object(c.useState)(!0),k=Object(o.a)(T,2),B=k[0],I=k[1],z=Object(c.useState)([]),A=Object(o.a)(z,2),L=A[0],q=A[1],D=Object(c.useState)(!1),F=Object(o.a)(D,2),J=F[0],P=F[1];Object(c.useEffect)((function(){function e(){return(e=Object(r.a)(l.a.mark((function e(){var t,a,n,r,c,u,s,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href.split("/"),t=atob(t[t.length-1]),e.next=4,Promise.all([Object(C.c)().getAttributeById(t),Object(C.c)().getOptionSets(),Object(C.c)().getTypes(),Object(C.c)().getControls(),Object(C.c)().getValidationRules()]);case 4:a=e.sent,n=Object(o.a)(a,5),r=n[0],c=n[1],u=n[2],s=n[3],m=n[4],W=r.data,V=c.data,R=u.data,w=s.data,x=m.data,q(W.validationRules.map((function(e){return e.id}))),i({code:W.code,name:W.name,optionSet:W.optionSet,type:W.type,control:W.control,displayName:W.displayName,shortName:W.shortName,validationRules:W.validationRules}),I(!1),P(!J);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var M={addValidationRule:function(e){q([].concat(Object(n.a)(L),[e]))},removeValidationRule:function(e){var t=L.filter((function(t){return t!==e}));q(t)}};return u.a.createElement(u.a.Fragment,null,!B&&u.a.createElement(b.a,null,u.a.createElement(E.a,{variant:"h6"},"Edit Attribute"),u.a.createElement("br",null),u.a.createElement(N.b,{initialValues:a,onSubmit:function(e,t){var a=t.setSubmitting;function n(){return(n=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.validationRules=L.map((function(e){return{id:e}})),e.next=3,Promise.resolve(Object(C.c)().putAttribute(W.id,t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e),setTimeout((function(){a(!1)}),500)},validationSchema:S.a().shape({name:S.c().required("Campo obrigat\xf3rio"),shortName:S.c().required("Campo obrigat\xf3rio")})},(function(e){var t,a,n=e.values,i=e.touched,l=e.errors,r=(e.dirty,e.isSubmitting,e.handleChange),o=e.handleBlur,c=(e.handleSubmit,e.handleReset,e.setFieldValue);return u.a.createElement(N.a,null,u.a.createElement(v.a,{container:!0,spacing:2},u.a.createElement(v.a,{item:!0,sm:12},u.a.createElement(y.a,{type:"text",variant:"outlined",error:l.code&&i.code,helperText:l.code,onChange:r,onBlur:o,value:n.code,margin:"dense",id:"code",fullWidth:!0,label:"Code"})),u.a.createElement(v.a,{item:!0,sm:12},u.a.createElement(y.a,{type:"text",variant:"outlined",error:l.name&&i.name,helperText:l.name,onChange:r,onBlur:o,value:n.name,margin:"dense",id:"name",fullWidth:!0,label:"Name (*)"})),u.a.createElement(v.a,{item:!0,sm:12},u.a.createElement(y.a,{type:"text",variant:"outlined",error:l.displayName&&i.displayName,helperText:l.displayName,onChange:r,onBlur:o,value:n.displayName,margin:"dense",id:"displayName",fullWidth:!0,label:"Display Name"})),u.a.createElement(v.a,{item:!0,sm:12},u.a.createElement(y.a,{type:"text",error:l.shortName&&i.shortName,helperText:l.shortName,onChange:r,onBlur:o,variant:"outlined",value:n.shortName,margin:"dense",id:"shortName",fullWidth:!0,label:"Shortname (*)"})),u.a.createElement(v.a,{item:!0,sm:12},u.a.createElement(O.a,{defaultValue:n.optionSet,onChange:function(e,t){c("optionSet",t)},getOptionLabel:function(e){return e.displayName},fullWidth:!0,id:"optionSet",size:"small",options:V,style:{minWidth:200},renderInput:function(e){return u.a.createElement(y.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"OptionSet (*)"}))}})),u.a.createElement(v.a,{item:!0,sm:12},u.a.createElement(O.a,{defaultValue:n.type,onChange:function(e,t){c("type",t)},fullWidth:!0,id:"type",size:"small",options:R,style:{minWidth:200},renderInput:function(e){return u.a.createElement(y.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Type (*)"}))}})),u.a.createElement(v.a,{item:!0,sm:12},u.a.createElement(O.a,{defaultValue:n.control,onChange:function(e,t){c("control",t)},fullWidth:!0,id:"control",size:"small",options:w,style:{minWidth:200},renderInput:function(e){return u.a.createElement(y.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Control"}))}})),u.a.createElement(v.a,{item:!0,sm:12},u.a.createElement(O.a,{onChange:function(e,t){Boolean(t)&&M.addValidationRule(t.id)},fullWidth:!0,id:"validationRule",size:"small",getOptionLabel:function(e){return e.displayName},options:x,style:{minWidth:200},renderInput:function(e){return u.a.createElement(y.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Validation Rules"}))}})),u.a.createElement(v.a,{item:!0,sm:12},(t=L.map((function(e){return x.filter((function(t){return t.id==e}))[0]})),a="ValidationRule",u.a.createElement(s.a,{elevation:0,style:{border:"1px solid #c4c4c4",borderRadius:"5px",width:"100%",height:280,overflow:"auto"},square:!0},u.a.createElement(m.a,{dense:!0,component:"div",role:"list"},t.map((function(e,t){return u.a.createElement(d.a,{onDoubleClick:function(){return M["remove".concat(a)](e.id)},key:t,role:"listitem",button:!0},u.a.createElement(p.a,{primary:"".concat(t+1," - ").concat(e.displayName)}),u.a.createElement(f.a,null,u.a.createElement(h.a,{color:"secondary",size:"small",onClick:function(){M["remove".concat(a)](e.id)}},u.a.createElement(j.f,null))))})),u.a.createElement(d.a,null))))),u.a.createElement(v.a,{item:!0,sm:12,style:{paddingTop:"10px"}},u.a.createElement(g.a,null,"Cancel")," \xa0\xa0\xa0",u.a.createElement(g.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))}))),u.a.createElement("br",null))}}}]);
//# sourceMappingURL=46.1e71a0a0.chunk.js.map