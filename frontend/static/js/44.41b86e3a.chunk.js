(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[44],{241:function(e,t,a){"use strict";var n=a(1),i=a(2),l=a(0),r=(a(6),a(3)),o=a(5),c=l.forwardRef((function(e,t){var a=e.classes,o=e.className,c=Object(i.a)(e,["classes","className"]);return l.createElement("div",Object(n.a)({className:Object(r.a)(a.root,o),ref:t},c))}));c.muiName="ListItemSecondaryAction",t.a=Object(o.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(c)},6191:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(78),i=a(217),l=a.n(i),r=a(218),o=a(16),c=a(0),s=a.n(c),u=a(202),m=a(53),d=a(209),p=a(212),f=a(188),h=a(146),b=a(190),E=a(241),v=a(193),g=a(208),y=a(6203),O=a(107),j=a(223),N=a(222),C=a(54),W=[],S=[],x=[],R=[];function w(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1];function w(){return(w=Object(r.a)(l.a.mark((function e(){var t,n,r,c,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(C.c)().getOptionSets(),Object(C.c)().getTypes(),Object(C.c)().getControls(),Object(C.c)().getValidationRules()]);case 2:t=e.sent,n=Object(o.a)(t,4),r=n[0],c=n[1],s=n[2],u=n[3],W=r.data,S=c.data,x=s.data,R=u.data,i(!a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){w.apply(this,arguments)}()}),[]),s.a.createElement(u.a,null,s.a.createElement("br",null),s.a.createElement(m.a,{variant:"h6"},"Attribute"),s.a.createElement("br",null),s.a.createElement(j.b,{initialValues:{validationRules:[]},onSubmit:function(e,t){var a=t.setSubmitting;function n(){return(n=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(C.c)().postAttributes([t]));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e),setTimeout((function(){a(!1)}),500)},validationSchema:N.a().shape({name:N.c().required("Campo obrigat\xf3rio"),shortName:N.c().required("Campo obrigat\xf3rio")})},(function(e){var t=e.values,l=e.touched,r=e.errors,o=(e.dirty,e.isSubmitting,e.handleChange),c=e.handleBlur,u=(e.handleSubmit,e.handleReset,e.setFieldValue);return s.a.createElement(j.a,null,s.a.createElement(d.a,{container:!0,spacing:2},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(p.a,{type:"text",variant:"outlined",error:r.code&&l.code,helperText:r.code,onChange:o,onBlur:c,value:t.code,margin:"dense",id:"code",fullWidth:!0,label:"Code"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(p.a,{type:"text",variant:"outlined",error:r.name&&l.name,helperText:r.name,onChange:o,onBlur:c,value:t.name,margin:"dense",id:"name",fullWidth:!0,label:"Name (*)"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(p.a,{type:"text",variant:"outlined",error:r.displayName&&l.displayName,helperText:r.displayName,onChange:o,onBlur:c,value:t.displayName,margin:"dense",id:"displayName",fullWidth:!0,label:"Display Name"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(p.a,{type:"text",error:r.shortName&&l.shortName,helperText:r.shortName,onChange:o,onBlur:c,variant:"outlined",value:t.shortName,margin:"dense",id:"shortName",fullWidth:!0,label:"Shortname (*)"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(y.a,{onChange:function(e,t){u("optionSet",t)},getOptionLabel:function(e){return e.displayName},fullWidth:!0,id:"optionSet",size:"small",options:W,style:{minWidth:200},renderInput:function(e){return s.a.createElement(p.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"OptionSet (*)"}))}})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(y.a,{onChange:function(e,t){u("type",t)},fullWidth:!0,id:"type",size:"small",options:S,style:{minWidth:200},renderInput:function(e){return s.a.createElement(p.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Type (*)"}))}})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(y.a,{onChange:function(e,t){u("control",t)},fullWidth:!0,id:"control",size:"small",options:x,style:{minWidth:200},renderInput:function(e){return s.a.createElement(p.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Control"}))}})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(y.a,{onChange:function(e,l){u("validationRules",[].concat(Object(n.a)(t.validationRules),[l])),i(!a)},fullWidth:!0,id:"validationRule",size:"small",getOptionLabel:function(e){return e.displayName},options:R,style:{minWidth:200},renderInput:function(e){return s.a.createElement(p.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Validation Rules"}))}})),s.a.createElement(d.a,{item:!0,sm:12,style:{height:280,overflow:"auto"}},s.a.createElement(f.a,{dense:!0,component:"div",role:"list"},t.validationRules.map((function(e,a){return s.a.createElement(h.a,{onDoubleClick:function(e){u("validationRules",Object(n.a)(t.validationRules.filter((function(t){return t.id!==e.id}))))},key:a,role:"listitem",button:!0},s.a.createElement(b.a,{primary:e.displayName}),s.a.createElement(E.a,null,s.a.createElement(v.a,{color:"secondary",size:"small",onClick:function(e){u("validationRules",Object(n.a)(t.validationRules.filter((function(t){return t.id!==e.id}))))}},s.a.createElement(O.f,null))))})),s.a.createElement(h.a,null))),s.a.createElement(d.a,{item:!0,sm:12,style:{paddingTop:"10px"}},s.a.createElement(g.a,null,"Cancel")," \xa0\xa0\xa0",s.a.createElement(g.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))})))}}}]);
//# sourceMappingURL=44.41b86e3a.chunk.js.map