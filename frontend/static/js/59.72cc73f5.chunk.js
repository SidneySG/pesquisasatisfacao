(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[59],{6665:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return x}));var n=t(76),r=t.n(n),o=t(83),l=t(12),i=t(0),m=t.n(i),c=t(13),s=t(223),u=t(114),d=t(224),p=t(59),g=t(227),h=t(212),E=t(265),b=t(264),v=t(31);function x(e){var a=Object(i.useState)({changeRoute:!1,to:""}),t=Object(l.a)(a,2),n=t[0],x=t[1];return n.changeRoute?m.a.createElement(c.a,{to:n.to}):m.a.createElement("div",{style:{backgroundColor:"#e8e1ef",minHeight:"100vh",paddingTop:"60px"}},m.a.createElement(s.a,null,m.a.createElement(E.b,{initialValues:{},onSubmit:function(a,t){t.setSubmitting;function n(){return(n=Object(o.a)(r.a.mark((function a(t){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve(Object(v.e)().postMessagem(t));case 2:e.messageBox("Mensage enviada com exito!"),x({to:"",changeRoute:!0});case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(a)},validationSchema:b.a().shape({email:b.c().matches(/\S+@\S+\.\S+/,"Email inv\xe1lido"),nomeCompleto:b.c().required("Campo obrigat\xf3rio"),mensagen:b.c().required("Campo obrigat\xf3rio")})},(function(e){e.values;var a=e.touched,t=e.errors,n=(e.dirty,e.isSubmitting,e.handleChange),r=e.handleBlur;e.handleSubmit,e.handleReset,e.setFieldValue;return m.a.createElement(E.a,null,m.a.createElement(u.a,{elevation:0,style:{padding:"7px",margin:"auto",backgroundColor:"transparent"}},m.a.createElement(d.a,{container:!0,spacing:2},m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(p.a,{variant:"h6"},"Fale connosco")))),m.a.createElement(u.a,{elevation:1,style:{padding:"7px",margin:"auto"}},m.a.createElement(d.a,{container:!0,spacing:2},m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(g.a,{margin:"dense",name:"nomeCompleto",onChange:n,onBlur:r,error:t.nomeCompleto&&a.nomeCompleto,helperText:t.nomeCompleto,variant:"outlined",label:"Nome Completo",fullWidth:!0})),m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(g.a,{margin:"dense",name:"email",onChange:n,onBlur:r,error:t.email&&a.email,helperText:t.email,variant:"outlined",label:"Email",fullWidth:!0})),m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(g.a,{margin:"dense",name:"contacto",onChange:n,onBlur:r,error:t.contacto&&a.contacto,helperText:t.contacto,variant:"outlined",label:"Contacto",fullWidth:!0})),m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(g.a,{margin:"dense",name:"mensagen",onChange:n,multiline:!0,onBlur:r,rows:3,error:t.mensagen&&a.mensagen,helperText:t.mensagen,variant:"outlined",label:"Mensagem",fullWidth:!0})))),m.a.createElement(u.a,{elevation:0,style:{padding:"7px",margin:"auto",backgroundColor:"transparent"}},m.a.createElement(d.a,{container:!0},m.a.createElement(d.a,{item:!0,xs:12,style:{textAlign:"right",paddingTop:"10px"}},m.a.createElement(h.a,{type:"submit",variant:"contained",color:"primary"},"Submeter")))))}))))}}}]);
//# sourceMappingURL=59.72cc73f5.chunk.js.map