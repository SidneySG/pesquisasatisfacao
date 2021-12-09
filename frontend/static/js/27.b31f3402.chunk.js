(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[27],{262:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(52);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},286:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},495:function(e,t,a){"use strict";var n=a(1),r=a(27),o=a(2),l=a(0),i=(a(6),a(496)),c=a(9),d=a(87),s=a(286),u=a(344),m=l.forwardRef((function(e,t){var a=e.actions,m=e.children,p=e.name,b=e.value,g=e.onChange,f=Object(o.a)(e,["actions","children","name","value","onChange"]),v=l.useRef(null),E=Object(d.a)({controlled:b,default:e.defaultValue,name:"RadioGroup"}),h=Object(r.a)(E,2),y=h[0],x=h[1];l.useImperativeHandle(a,(function(){return{focus:function(){var e=v.current.querySelector("input:not(:disabled):checked");e||(e=v.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var O=Object(c.a)(t,v),j=Object(u.a)(p);return l.createElement(s.a.Provider,{value:{name:j,onChange:function(e){x(e.target.value),g&&g(e,e.target.value)},value:y}},l.createElement(i.a,Object(n.a)({role:"radiogroup",ref:O},f),m))}));t.a=m},496:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),l=(a(6),a(4)),i=a(5),c=o.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.row,d=void 0!==c&&c,s=Object(r.a)(e,["classes","className","row"]);return o.createElement("div",Object(n.a)({className:Object(l.a)(a.root,i,d&&a.row),ref:t},s))}));t.a=Object(i.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(c)},501:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),l=(a(6),a(4)),i=a(261),c=a(77),d=Object(c.a)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),s=Object(c.a)(o.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=a(5);var m=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return o.createElement("div",{className:Object(l.a)(a.root,t&&a.checked)},o.createElement(d,{fontSize:n}),o.createElement(s,{fontSize:n,className:a.layer}))})),p=a(16),b=a(7),g=a(33),f=a(286);var v=o.createElement(m,{checked:!0}),E=o.createElement(m,null),h=o.forwardRef((function(e,t){var a=e.checked,c=e.classes,d=e.color,s=void 0===d?"secondary":d,u=e.name,m=e.onChange,p=e.size,h=void 0===p?"medium":p,y=Object(r.a)(e,["checked","classes","color","name","onChange","size"]),x=o.useContext(f.a),O=a,j=Object(g.a)(m,x&&x.onChange),C=u;return x&&("undefined"===typeof O&&(O=x.value===e.value),"undefined"===typeof C&&(C=x.name)),o.createElement(i.a,Object(n.a)({color:s,type:"radio",icon:o.cloneElement(E,{fontSize:"small"===h?"small":"default"}),checkedIcon:o.cloneElement(v,{fontSize:"small"===h?"small":"default"}),classes:{root:Object(l.a)(c.root,c["color".concat(Object(b.a)(s))]),checked:c.checked,disabled:c.disabled},name:C,checked:O,onChange:j,ref:t},y))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(h)},6703:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return $}));var n=a(262),r=a(76),o=a.n(r),l=a(83),i=a(12),c=a(0),d=a.n(c),s=a(197),u=a(22),m=a(13),p=a(18),b=a(223),g=a(59),f=a(114),v=a(228),E=a(224),h=a(162),y=a(495),x=a(346),O=a(501),j=a(227),C=a(163),S=a(496),k=a(382),w=a(222),B=a(212),N=a(526),T=a(6635),P=a(527),R=a(6636),W=a(208),z=a(6711),L=a(31),D=a(265),I=a(264),V=Object(s.a)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{margin:"auto",height:320,display:"block",maxWidth:400,overflow:"hidden",width:"auto"},dots:{paddingTop:15,margin:"-10px auto"},dotsMobile:{paddingTop:0},dotsMobileLandscape:{paddingTop:20},inputExcel:{"&:hover":{borderRadius:"0px"}}}})),F=null,A=null;function $(){var e=V(),t=(Object(u.a)(),Object(c.useState)(0)),a=Object(i.a)(t,2),r=(a[0],a[1],Object(c.useState)(0)),s=Object(i.a)(r,2),$=(s[0],s[1],Object(c.useState)(!1)),M=Object(i.a)($,2),q=M[0],G=M[1],J=Object(c.useState)({}),H=Object(i.a)(J,2),U=H[0],Z=H[1],K=Object(c.useState)({}),Q=Object(i.a)(K,2),X=Q[0],Y=Q[1],_=Object(c.useState)(!1),ee=Object(i.a)(_,2),te=ee[0],ae=ee[1],ne=Object(c.useState)(!1),re=Object(i.a)(ne,2),oe=re[0],le=re[1];function ie(){return(ie=Object(l.a)(o.a.mark((function e(){var t,a,r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href.split("/"),t=atob(t[t.length-1]),A=t,null,e.next=6,Promise.resolve(Object(L.e)().getValueSetByID(t));case 6:return a=e.sent,r={},a.data[0].attributeValues.forEach((function(e){r[e.attribute]=e.value})),Y(Object(n.a)({},r)),e.next=12,Promise.resolve(Object(L.e)().getAttributeSetById(a.data[0].attributeSet.id));case 12:l=e.sent,F=l.data,Z(l.data);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){ie.apply(this,arguments)}()}),[]);var ce=function(){ae(!1),G(!0)};return q?d.a.createElement(m.a,{to:"/?success=true"}):d.a.createElement(b.a,null,Boolean(U.attributes)&&d.a.createElement(d.a.Fragment,null,d.a.createElement(D.b,{initialValues:X,onSubmit:function(e,t){var a=t.setSubmitting;function n(){return(n=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(L.e)().deleteValueSet(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(A),setTimeout((function(){a(!1)}),500)}},(function(t){var a=t.values,n=t.touched,r=t.errors,o=(t.dirty,t.isSubmitting,t.handleChange),l=t.handleBlur,i=(t.handleSubmit,t.handleReset,t.setFieldValue);return d.a.createElement(D.a,null,Boolean(F)&&d.a.createElement("div",null,d.a.createElement("div",{style:{padding:"6px"}},d.a.createElement(g.a,{variant:"h5",gutterBottom:!0},F.displayName),d.a.createElement(g.a,{variant:"body2"},F.description)),d.a.createElement("br",null)),d.a.createElement(f.a,{variant:"outlined",style:{margin:"-20px 10px 10px 10px",border:"0px solid #fff",padding:"20px 0px",borderRadius:"8px",boxShadow:"0 1px 6px rgba(32, 33, 36, 0.28)"}},d.a.createElement(b.a,null,d.a.createElement(v.a,null,d.a.createElement(v.a,null,d.a.createElement(E.a,{container:!0,spacing:2},F.attributes.map((function(e){return e.optionSet.options.length>0?"radio"==e.control.toLowerCase()?d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(f.a,{variant:"outlined",elevation:0,style:{padding:"7px",margin:"auto"}},d.a.createElement(g.a,{variant:"body1",gutterBottom:!0},e.displayName),d.a.createElement(g.a,{variant:"body2",gutterBottom:!0},e.displayName),d.a.createElement(h.a,{component:"fieldset"},d.a.createElement(y.a,{"aria-label":"gender",name:"gender1",value:a[e.id],onChange:function(t){i(e.id,t.target.value)}},e.optionSet.options.map((function(e,t){return d.a.createElement(x.a,{key:t,value:e.id+"",control:d.a.createElement(O.a,null),label:e.displayName})})))))):"autocomplete"==e.control.toLowerCase()?d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(f.a,{variant:"outlined",elevation:0,style:{padding:"7px",margin:"auto"}},d.a.createElement(g.a,{variant:"body1",gutterBottom:!0},e.displayName),d.a.createElement(g.a,{variant:"body2",gutterBottom:!0},e.description),d.a.createElement(z.a,{defaultValue:a[e.id],onChange:function(t,a){i(e.id,a.id)},fullWidth:!0,id:"".concat(e.id),size:"small",getOptionLabel:function(e){return e.displayName},options:e.optionSet.options,style:{minWidth:200},renderInput:function(t){return d.a.createElement(j.a,Object.assign({variant:"outlined",margin:"dense",error:r[e.id]&&n[e.id],helperText:r[e.id],fullWidth:!0},t,{placeholder:"Seleccione uma op\xe7\xe3o"}))}}))):"range"==e.control.toLowerCase()?d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(f.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},d.a.createElement(g.a,{variant:"body1",gutterBottom:!0},e.displayName),d.a.createElement(g.a,{variant:"body2",gutterBottom:!0},e.description),d.a.createElement("div",{style:{textAlign:"center"}},d.a.createElement(h.a,{component:"fieldset",error:r[e.id]&&n[e.id]},d.a.createElement(y.a,{row:!0,"aria-label":e.id,name:e.id,onChange:function(t){i(e.id,t.target.value)},value:a[e.id]},d.a.createElement(g.a,{variant:"body1",style:{paddingTop:"33px"},gutterBottom:!0},e.optionSet.options[0].displayName),e.optionSet.options.map((function(e,t){return d.a.createElement(x.a,{style:{margin:"0px"},labelPlacement:"top",key:t,value:e.id+"",control:d.a.createElement(O.a,null),label:e.name})})),d.a.createElement(g.a,{variant:"body1",style:{paddingTop:"33px"},gutterBottom:!0},e.optionSet.options[e.optionSet.options.length-1].displayName)),d.a.createElement(C.a,null,r[e.id]))))):"checkbox"==e.control.toLowerCase()?d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(f.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},d.a.createElement(g.a,{variant:"body1",gutterBottom:!0},e.displayName),d.a.createElement(g.a,{variant:"body2",gutterBottom:!0},e.description),d.a.createElement(h.a,{component:"fieldset"},d.a.createElement(S.a,null,e.optionSet.options.map((function(t){return d.a.createElement(x.a,{key:t.id,value:t,control:d.a.createElement(k.a,{checked:a[e.id].split(",").includes(t.id+""),value:t.id,name:e.id}),label:t.displayName})})))))):"richtextbox"==e.control.toLowerCase()?d.a.createElement(d.a.Fragment,null,d.a.createElement("br",null),d.a.createElement(f.a,{elevation:0,variant:"outlined",style:{padding:"10px",backgroundColor:"#000",color:"#fff"}},d.a.createElement(g.a,{variant:"h6"},"We should have a RichTextBox here")),d.a.createElement("br",null)):d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(f.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},d.a.createElement(g.a,{variant:"body1",gutterBottom:!0},e.displayName),d.a.createElement(g.a,{variant:"body2",gutterBottom:!0},e.description),d.a.createElement(j.a,{value:a[e.id],select:!0,variant:"outlined",margin:"dense",error:r[e.id]&&n[e.id],helperText:r[e.id],onChange:o,onBlur:l,name:e.id,fullWidth:!0,type:"text"},e.optionSet.options.map((function(e){return d.a.createElement(w.a,{key:e.id,value:e.id+""},e.displayName)}))))):"upload"==e.control.toLowerCase()?d.a.createElement(E.a,{item:!0,sm:12},d.a.createElement(E.a,{container:!0},d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(g.a,{variant:"button"},e.displayName)),d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(v.a,{style:{border:"2px dashed #eee"}},d.a.createElement("p",null,"Arraste e solte a imagen aqui ou clique para selecion\xe1-la"))))):"textarea"==e.control.toLowerCase()?d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(f.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},d.a.createElement(g.a,{variant:"body1",gutterBottom:!0},e.displayName),d.a.createElement(g.a,{variant:"body2",gutterBottom:!0},e.description),d.a.createElement(j.a,{value:a[e.id],variant:"outlined",multiline:!0,rows:4,disabled:!0,error:r[e.id]&&n[e.id],helperText:r[e.id],onChange:o,margin:"dense",onBlur:l,name:e.id,fullWidth:!0,placeholder:"Sua resposta",type:"text"}))):d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(f.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},d.a.createElement(g.a,{variant:"body1",gutterBottom:!0},e.displayName),d.a.createElement(g.a,{variant:"body2",gutterBottom:!0},e.description),d.a.createElement(j.a,{value:a[e.id],variant:"outlined",disabled:!0,error:r[e.id]&&n[e.id],helperText:r[e.id],onChange:o,margin:"dense",onBlur:l,name:e.id,fullWidth:!0,placeholder:"Sua resposta",type:"text"})))}))),d.a.createElement(E.a,{container:!0,spacing:2},d.a.createElement(E.a,{item:!0,xs:12,sm:12,style:{paddingTop:"10px",textAlign:"right"}},d.a.createElement(v.a,{display:"flex"},d.a.createElement(v.a,null,d.a.createElement(B.a,{className:e.button,color:"secondary",component:p.b,to:"/attributeSetData/".concat(btoa(U.id))},"Cancelar")),d.a.createElement(v.a,{flexGrow:1},"\xa0"),d.a.createElement(v.a,null,d.a.createElement(B.a,{className:e.button,disableElevation:!0,type:"submit",color:"secondary",variant:"contained"},"Eliminar"))))))))))}))),d.a.createElement(N.a,{open:te,onClose:ce,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},d.a.createElement(T.a,{id:"alert-dialog-title"},"Informa\xe7\xe3o"),d.a.createElement(P.a,null,d.a.createElement(R.a,{id:"alert-dialog-description"},"A sua contribui\xe7\xe3o foi encaminhada \xe0 pessoa respons\xe1vel. Agradecemos desde j\xe1 pela sua disposi\xe7\xe3o."),d.a.createElement(x.a,{control:d.a.createElement(k.a,{name:"checkedB",onChange:function(e){le(e.target.checked)},color:"primary"}),label:"Desejo receber feedback"}),d.a.createElement(W.a,{in:oe},d.a.createElement(d.a.Fragment,null,d.a.createElement(D.b,{initialValues:X,onSubmit:function(e,t){t.setSubmitting},validationSchema:I.a().shape({email:I.c().matches(/\S+@\S+\.\S+/,"Email inv\xe1lido"),celular:I.c().matches(/^[8]{1}[2-7]{1}[0-9]{7}$/,"Celular inv\xe1lido")})},(function(e){e.values;var t=e.touched,a=e.errors,n=(e.dirty,e.isSubmitting,e.handleChange),r=e.handleBlur;e.handleSubmit,e.handleReset,e.setFieldValue;return d.a.createElement(D.a,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(j.a,{margin:"dense",onChange:n,onBlur:r,error:a.celular&&t.celular,helperText:a.celular,variant:"filled",label:"Celular",fullWidth:!0}),d.a.createElement("br",null),d.a.createElement(j.a,{margin:"dense",type:"email",onChange:n,onBlur:r,error:a.email&&t.email,helperText:a.email,variant:"filled",label:"Email",fullWidth:!0})))})))),d.a.createElement("div",{style:{textAlign:"center",paddingTop:"15px"}},d.a.createElement(B.a,{disableElevation:!0,variant:"contained",onClick:ce,autoFocus:!0},"Terminar")))))}}}]);
//# sourceMappingURL=27.b31f3402.chunk.js.map