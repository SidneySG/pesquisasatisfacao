(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[55],{6656:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return W}));var n=a(221),r=a.n(n),l=a(222),i=a(16),o=a(0),m=a.n(o),c=a(202),s=a(213),u=a(53),d=a(209),p=a(212),h=a(208),b=a(104),f=a(188),y=a(146),E=a(190),g=a(327),v=a(375),N=a(328),x=a(444),O=a(6673),S=a(239),C=a(238),T=a(54),j=[],w=[];function W(){var e=Object(o.useState)(!0),t=Object(i.a)(e,2),a=t[0],n=t[1],W=Object(o.useState)({type:"TEXT"}),k=Object(i.a)(W,2),B=k[0],A=(k[1],Object(o.useState)("")),D=Object(i.a)(A,2),V=D[0],q=D[1],F=Object(o.useState)(!1),R=Object(i.a)(F,2),J=R[0],L=R[1],P=Object(o.useState)(!1),I=Object(i.a)(P,2),K=I[0],X=I[1],z=0;Object(o.useEffect)((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(T.c)().getValueTypes(),Object(T.c)().getOptionSets()]);case 2:return t=e.sent,e.next=5,t[0].data;case 5:return j=e.sent,e.next=8,t[1].data;case 8:e.sent,n(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);function G(e){var t=e.target.value;z&&clearTimeout(z),z=setTimeout((function(){q(t)}),700)}return!a&&m.a.createElement(c.a,null,m.a.createElement(s.a,{style:{paddingTop:"7px"}},m.a.createElement(u.a,{variant:"h5"},"Option Sets")),m.a.createElement(S.b,{initialValues:B,onSubmit:function(e,t){var a=t.setSubmitting;function n(){return(n=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.options=w,e.next=3,Promise.resolve(Object(T.c)().postOptionSets([t]));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e),setTimeout((function(){a(!1)}),500)},validationSchema:C.a().shape({name:C.c().required("Campo obrigat\xf3rio")})},(function(e){var t=e.values,a=e.touched,n=e.errors,r=(e.dirty,e.isSubmitting,e.handleChange),l=e.handleBlur,i=(e.handleSubmit,e.handleReset,e.setFieldValue);return m.a.createElement(S.a,null," ",m.a.createElement(d.a,{container:!0,style:{paddingRight:"7px"}},m.a.createElement(d.a,{item:!0,sm:12},m.a.createElement(p.a,{type:"text",error:n.name&&a.name,helperText:n.name,onChange:r,onBlur:l,value:t.name,margin:"dense",id:"name",fullWidth:!0,label:"Name (*)"})),m.a.createElement(d.a,{item:!0,sm:12},m.a.createElement(p.a,{type:"text",error:n.displayName&&a.displayName,helperText:n.displayName,onChange:r,onBlur:l,value:t.displayName,margin:"dense",id:"displayName",fullWidth:!0,label:"DisplayName (*)"})),m.a.createElement(d.a,{item:!0,sm:12},m.a.createElement(p.a,{type:"text",error:n.shortName&&a.shortName,helperText:n.shortName,onChange:r,onBlur:l,value:t.shortName,margin:"dense",id:"shortName",fullWidth:!0,label:"ShortName (*)"})),m.a.createElement(d.a,{item:!0,sm:12},m.a.createElement(O.a,{onChange:function(e,t){i("type",t)},value:t.type,fullWidth:!0,id:"type",options:j,style:{minWidth:200},renderInput:function(e){return m.a.createElement(p.a,Object.assign({fullWidth:!0},e,{label:"Type"}))}})),m.a.createElement(d.a,{item:!0,sm:12,style:{textAlign:"right",paddingTop:"7px"}},m.a.createElement(h.a,{color:"secondary",onClick:function(){X(!0)}},"Adicionar Op\xe7\xe3o")),m.a.createElement(d.a,{item:!0,sm:12},m.a.createElement(p.a,{onKeyDown:G,value:V,fullWidth:!0,label:"Filtrar op\xe7\xf5es"})),m.a.createElement(d.a,{item:!0,sm:12,style:{paddingTop:"5px"}},m.a.createElement(b.a,{elevation:0,style:{border:"1px solid #eee",width:"100%"},square:!0},m.a.createElement(f.a,{dense:!0,component:"div",role:"list"},w.filter((function(e){return e.name.toLowerCase().includes(V.toLowerCase())})).map((function(e,t){return m.a.createElement(y.a,{onDoubleClick:function(){return function(e){var t;t=e,w=w.filter((function(e,a){return a!==t}))}(t)},key:t,role:"listitem",button:!0},m.a.createElement(E.a,{primary:"".concat(t+1," - ").concat(e.name)}))}))))),m.a.createElement(d.a,{item:!0,sm:12,style:{paddingTop:"7px",textAlign:"right"}},m.a.createElement(h.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))})),m.a.createElement(g.a,{open:K,onClose:function(){X(!1)},"aria-labelledby":"modal"},m.a.createElement(v.a,{id:"modal"},"Adicionar Op\xe7\xe3o"),m.a.createElement(S.b,{initialValues:{},onSubmit:function(e,t){var a=t.setSubmitting,n=t.resetForm;w.push(e),console.log(w),L(!J),n({values:{name:"",displayName:"",code:"",description:""}}),X(!1),setTimeout((function(){a(!1)}),500)},validationSchema:C.a().shape({name:C.c().required("Campo obrigat\xf3rio")})},(function(e){var t=e.values,a=e.touched,n=e.errors,r=(e.dirty,e.isSubmitting,e.handleChange),l=e.handleBlur;e.handleSubmit,e.handleReset;return m.a.createElement(S.a,null,m.a.createElement(N.a,null,m.a.createElement(d.a,{container:!0},m.a.createElement(d.a,{item:!0,sm:12},m.a.createElement(p.a,{type:"text",error:n.name&&a.name,helperText:n.name,onChange:r,onBlur:l,value:t.name,margin:"dense",id:"name",fullWidth:!0,label:"Name (*)"})),m.a.createElement(d.a,{item:!0,sm:12},m.a.createElement(p.a,{type:"text",error:n.displayName&&a.displayName,helperText:n.displayName,onChange:r,onBlur:l,value:t.displayName,margin:"dense",id:"displayName",fullWidth:!0,label:"Display Name"})),m.a.createElement(d.a,{item:!0,sm:12},m.a.createElement(p.a,{type:"text",error:n.shortName&&a.shortName,helperText:n.shortName,onChange:r,onBlur:l,value:t.shortName,margin:"dense",id:"shortName",fullWidth:!0,label:"ShortName (*)"})))),m.a.createElement(x.a,null,m.a.createElement(h.a,{disableElevation:!0,variant:"contained",type:"submit",color:"primary"},"Add")," \xa0\xa0",m.a.createElement(h.a,{onClick:function(){X(!1)},color:"secondary"},"Cancel")))}))))}}}]);
//# sourceMappingURL=55.153cffea.chunk.js.map