(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[56],{6678:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return J}));var n=t(257),l=t(228),r=t.n(l),i=t(229),o=t(15),c=t(0),d=t.n(c),m=t(190),u=t(22),s=t(12),p=t(29),g=t(211),E=t(55),b=t(107),v=t(217),h=t(213),y=t(154),f=t(482),x=t(337),S=t(485),B=t(216),C=t(155),j=t(483),O=t(373),w=t(209),k=t(212),N=t(507),T=t(845),L=t(508),W=t(846),V=t(6625),A=t(6686),F=t(56),R=t(256),I=t(255),P=Object(m.a)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{margin:"auto",height:320,display:"block",maxWidth:400,overflow:"hidden",width:"auto"},dots:{paddingTop:15,margin:"-10px auto"},dotsMobile:{paddingTop:0},dotsMobileLandscape:{paddingTop:20},inputExcel:{"&:hover":{borderRadius:"0px"}}}})),D=null,q=null;function J(){var e=P(),a=(Object(u.a)(),Object(c.useState)(0)),t=Object(o.a)(a,2),l=(t[0],t[1],Object(c.useState)(0)),m=Object(o.a)(l,2),J=(m[0],m[1],Object(c.useState)(!1)),M=Object(o.a)(J,2),z=M[0],G=M[1],$=Object(c.useState)({}),H=Object(o.a)($,2),K=H[0],Q=H[1],U=Object(c.useState)({}),X=Object(o.a)(U,2),Y=X[0],Z=X[1],_=Object(c.useState)(!1),ee=Object(o.a)(_,2),ae=ee[0],te=ee[1],ne=Object(c.useState)(!1),le=Object(o.a)(ne,2),re=le[0],ie=le[1];function oe(){return(oe=Object(i.a)(r.a.mark((function e(){var a,t,l,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=window.location.href.split("/"),a=atob(a[a.length-1]),q=a,null,e.next=6,Promise.resolve(Object(F.c)().getValueSetByID(a));case 6:return t=e.sent,l={},t.data[0].attributeValues.forEach((function(e){l[e.attribute]=e.value})),Z(Object(n.a)({},l)),e.next=12,Promise.resolve(Object(F.c)().getAttributeSetById(t.data[0].attributeSet.id));case 12:i=e.sent,D=i.data,Q(i.data);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){oe.apply(this,arguments)}()}),[]);var ce=function(){te(!1),G(!0)};return z?d.a.createElement(s.a,{to:"/?success=true"}):d.a.createElement(g.a,null,Boolean(K.attributes)&&d.a.createElement(d.a.Fragment,null,d.a.createElement(R.b,{initialValues:Y,onSubmit:function(e,a){var t=a.setSubmitting;function n(){return(n=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(F.c)().deleteValueSet(a));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(q),setTimeout((function(){t(!1)}),500)}},(function(a){var t=a.values,n=a.touched,l=a.errors,r=(a.dirty,a.isSubmitting,a.handleChange),i=a.handleBlur,o=(a.handleSubmit,a.handleReset,a.setFieldValue);return d.a.createElement(R.a,null,Boolean(D)&&d.a.createElement("div",null,d.a.createElement("div",{style:{padding:"6px"}},d.a.createElement(E.a,{variant:"h5",gutterBottom:!0},D.displayName),d.a.createElement(E.a,{variant:"body2"},D.description)),d.a.createElement("br",null)),d.a.createElement(b.a,{variant:"outlined",style:{margin:"-20px 10px 10px 10px",border:"0px solid #fff",padding:"20px 0px",borderRadius:"8px",boxShadow:"0 1px 6px rgba(32, 33, 36, 0.28)"}},d.a.createElement(g.a,null,d.a.createElement(v.a,null,d.a.createElement(v.a,null,d.a.createElement(h.a,{container:!0,spacing:2},D.attributes.map((function(e){return e.optionSet.options.length>0?"radio"==e.control.toLowerCase()?d.a.createElement(h.a,{item:!0,sm:12,xs:12},d.a.createElement(b.a,{variant:"outlined",elevation:0,style:{padding:"7px",margin:"auto"}},d.a.createElement(E.a,{variant:"body1",gutterBottom:!0},e.displayName),d.a.createElement(E.a,{variant:"body2",gutterBottom:!0},e.displayName),d.a.createElement(y.a,{component:"fieldset"},d.a.createElement(f.a,{"aria-label":"gender",name:"gender1",value:t[e.id],onChange:function(a){o(e.id,a.target.value)}},e.optionSet.options.map((function(e,a){return d.a.createElement(x.a,{key:a,value:e.id+"",control:d.a.createElement(S.a,null),label:e.displayName})})))))):"autocomplete"==e.control.toLowerCase()?d.a.createElement(h.a,{item:!0,sm:12,xs:12},d.a.createElement(b.a,{variant:"outlined",elevation:0,style:{padding:"7px",margin:"auto"}},d.a.createElement(E.a,{variant:"body1",gutterBottom:!0},e.displayName),d.a.createElement(E.a,{variant:"body2",gutterBottom:!0},e.description),d.a.createElement(A.a,{defaultValue:t[e.id],onChange:function(a,t){o(e.id,t.id)},fullWidth:!0,id:"".concat(e.id),size:"small",getOptionLabel:function(e){return e.displayName},options:e.optionSet.options,style:{minWidth:200},renderInput:function(a){return d.a.createElement(B.a,Object.assign({variant:"outlined",margin:"dense",error:l[e.id]&&n[e.id],helperText:l[e.id],fullWidth:!0},a,{placeholder:"Seleccione uma op\xe7\xe3o"}))}}))):"range"==e.control.toLowerCase()?d.a.createElement(h.a,{item:!0,sm:12,xs:12},d.a.createElement(b.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},d.a.createElement(E.a,{variant:"body1",gutterBottom:!0},e.displayName),d.a.createElement(E.a,{variant:"body2",gutterBottom:!0},e.description),d.a.createElement("div",{style:{textAlign:"center"}},d.a.createElement(y.a,{component:"fieldset",error:l[e.id]&&n[e.id]},d.a.createElement(f.a,{row:!0,"aria-label":e.id,name:e.id,onChange:function(a){o(e.id,a.target.value)},value:t[e.id]},d.a.createElement(E.a,{variant:"body1",style:{paddingTop:"33px"},gutterBottom:!0},e.optionSet.options[0].displayName),e.optionSet.options.map((function(e,a){return d.a.createElement(x.a,{style:{margin:"0px"},labelPlacement:"top",key:a,value:e.id+"",control:d.a.createElement(S.a,null),label:e.name})})),d.a.createElement(E.a,{variant:"body1",style:{paddingTop:"33px"},gutterBottom:!0},e.optionSet.options[e.optionSet.options.length-1].displayName)),d.a.createElement(C.a,null,l[e.id]))))):"checkbox"==e.control.toLowerCase()?d.a.createElement(h.a,{item:!0,sm:12,xs:12},d.a.createElement(b.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},d.a.createElement(E.a,{variant:"body1",gutterBottom:!0},e.displayName),d.a.createElement(E.a,{variant:"body2",gutterBottom:!0},e.description),d.a.createElement(y.a,{component:"fieldset"},d.a.createElement(j.a,null,e.optionSet.options.map((function(a){return d.a.createElement(x.a,{key:a.id,value:a,control:d.a.createElement(O.a,{checked:t[e.id].split(",").includes(a.id+""),value:a.id,name:e.id}),label:a.displayName})})))))):"richtextbox"==e.control.toLowerCase()?d.a.createElement(d.a.Fragment,null,d.a.createElement("br",null),d.a.createElement(b.a,{elevation:0,variant:"outlined",style:{padding:"10px",backgroundColor:"#000",color:"#fff"}},d.a.createElement(E.a,{variant:"h6"},"We should have a RichTextBox here")),d.a.createElement("br",null)):d.a.createElement(h.a,{item:!0,sm:12,xs:12},d.a.createElement(b.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},d.a.createElement(E.a,{variant:"body1",gutterBottom:!0},e.displayName),d.a.createElement(E.a,{variant:"body2",gutterBottom:!0},e.description),d.a.createElement(B.a,{value:t[e.id],select:!0,variant:"outlined",margin:"dense",error:l[e.id]&&n[e.id],helperText:l[e.id],onChange:r,onBlur:i,name:e.id,fullWidth:!0,type:"text"},e.optionSet.options.map((function(e){return d.a.createElement(w.a,{key:e.id,value:e.id+""},e.displayName)}))))):"upload"==e.control.toLowerCase()?d.a.createElement(h.a,{item:!0,sm:12},d.a.createElement(h.a,{container:!0},d.a.createElement(h.a,{item:!0,sm:12,xs:12},d.a.createElement(E.a,{variant:"button"},e.displayName)),d.a.createElement(h.a,{item:!0,sm:12,xs:12},d.a.createElement(v.a,{style:{border:"2px dashed #eee"}},d.a.createElement("p",null,"Arraste e solte a imagen aqui ou clique para selecion\xe1-la"))))):"textarea"==e.control.toLowerCase()?d.a.createElement(h.a,{item:!0,sm:12,xs:12},d.a.createElement(b.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},d.a.createElement(E.a,{variant:"body1",gutterBottom:!0},e.displayName),d.a.createElement(E.a,{variant:"body2",gutterBottom:!0},e.description),d.a.createElement(B.a,{value:t[e.id],variant:"outlined",multiline:!0,rows:4,disabled:!0,error:l[e.id]&&n[e.id],helperText:l[e.id],onChange:r,margin:"dense",onBlur:i,name:e.id,fullWidth:!0,placeholder:"Sua resposta",type:"text"}))):d.a.createElement(h.a,{item:!0,sm:12,xs:12},d.a.createElement(b.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},d.a.createElement(E.a,{variant:"body1",gutterBottom:!0},e.displayName),d.a.createElement(E.a,{variant:"body2",gutterBottom:!0},e.description),d.a.createElement(B.a,{value:t[e.id],variant:"outlined",disabled:!0,error:l[e.id]&&n[e.id],helperText:l[e.id],onChange:r,margin:"dense",onBlur:i,name:e.id,fullWidth:!0,placeholder:"Sua resposta",type:"text"})))}))),d.a.createElement(h.a,{container:!0,spacing:2},d.a.createElement(h.a,{item:!0,xs:12,sm:12,style:{paddingTop:"10px",textAlign:"right"}},d.a.createElement(v.a,{display:"flex"},d.a.createElement(v.a,null,d.a.createElement(k.a,{className:e.button,color:"secondary",component:p.b,to:"/attributeSetData/".concat(btoa(K.id))},"Cancelar")),d.a.createElement(v.a,{flexGrow:1},"\xa0"),d.a.createElement(v.a,null,d.a.createElement(k.a,{className:e.button,disableElevation:!0,type:"submit",color:"secondary",variant:"contained"},"Eliminar"))))))))))}))),d.a.createElement(N.a,{open:ae,onClose:ce,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},d.a.createElement(T.a,{id:"alert-dialog-title"},"Informa\xe7\xe3o"),d.a.createElement(L.a,null,d.a.createElement(W.a,{id:"alert-dialog-description"},"A sua contribui\xe7\xe3o foi encaminhada \xe0 pessoa respons\xe1vel. Agradecemos desde j\xe1 pela sua disposi\xe7\xe3o."),d.a.createElement(x.a,{control:d.a.createElement(O.a,{name:"checkedB",onChange:function(e){ie(e.target.checked)},color:"primary"}),label:"Desejo receber feedback"}),d.a.createElement(V.a,{in:re},d.a.createElement(d.a.Fragment,null,d.a.createElement(R.b,{initialValues:Y,onSubmit:function(e,a){a.setSubmitting},validationSchema:I.a().shape({email:I.c().matches(/\S+@\S+\.\S+/,"Email inv\xe1lido"),celular:I.c().matches(/^[8]{1}[2-7]{1}[0-9]{7}$/,"Celular inv\xe1lido")})},(function(e){e.values;var a=e.touched,t=e.errors,n=(e.dirty,e.isSubmitting,e.handleChange),l=e.handleBlur;e.handleSubmit,e.handleReset,e.setFieldValue;return d.a.createElement(R.a,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(B.a,{margin:"dense",onChange:n,onBlur:l,error:t.celular&&a.celular,helperText:t.celular,variant:"filled",label:"Celular",fullWidth:!0}),d.a.createElement("br",null),d.a.createElement(B.a,{margin:"dense",type:"email",onChange:n,onBlur:l,error:t.email&&a.email,helperText:t.email,variant:"filled",label:"Email",fullWidth:!0})))})))),d.a.createElement("div",{style:{textAlign:"center",paddingTop:"15px"}},d.a.createElement(k.a,{disableElevation:!0,variant:"contained",onClick:ce,autoFocus:!0},"Terminar")))))}}}]);
//# sourceMappingURL=56.d399e86f.chunk.js.map