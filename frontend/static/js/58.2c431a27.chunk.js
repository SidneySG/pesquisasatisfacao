(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[58],{6662:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return q}));var n,r=a(75),i=a.n(r),o=a(82),l=a(12),c=a(52),u=a(0),d=a.n(u),s=a(13),m=a(18),p=a(228),b=a(223),E=a(224),g=a(113),v=a(59),f=a(161),x=a(495),h=a(346),y=a(501),w=a(496),j=a(382),O=a(6645),B=a(212),k=a(227),C=a(221),S=a(197),N=a(22),W=a(31),_=a(265),T=(a(264),a(389)),L=a.n(T),A=a(541),I=a.n(A),D=a(542),M=a.n(D),V=a(225),z=[],F=(n={border:"0px",backgroundColor:"white",padding:"0px 4px 0px 2px"},Object(c.a)(n,"border","1px solid #D0D7E5"),Object(c.a)(n,"borderWidth","0px 1px 1px 0px"),Object(S.a)((function(e){return{root:{maxWidth:400,flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{margin:"auto",height:320,display:"block",maxWidth:400,overflow:"hidden",width:"auto"},dots:{paddingTop:15,margin:"-10px auto"},dotsMobile:{paddingTop:0},dotsMobileLandscape:{paddingTop:20}}}))),J=null;function q(){var e=F(),t=Object(N.a)(),a=Object(u.useState)(!1),n=Object(l.a)(a,2),r=(n[0],n[1]),c=Object(u.useState)({}),S=Object(l.a)(c,2),T=S[0],A=S[1],D=Object(u.useState)({}),q=Object(l.a)(D,2),G=q[0],P=(q[1],Object(u.useState)([])),R=Object(l.a)(P,2),H=(R[0],R[1],d.a.useState(0)),K=Object(l.a)(H,2),Q=K[0],U=K[1],X=Object(u.useState)(!1),Y=Object(l.a)(X,2),Z=Y[0],$=(Y[1],Object(V.a)(["clientID"])),ee=Object(l.a)($,2),te=(ee[0],ee[1],function(){U((function(e){return e+1}))}),ae=function(){U((function(e){return e-1}))};function ne(){return(ne=Object(o.a)(i.a.mark((function e(){var t,a,n,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),t=window.location.href.split("/"),t=atob(t[t.length-1].split("-").join("/")),J=t.split("-")[0],t=t.split("-")[1],e.next=7,Promise.all([Object(W.e)().getAttributeSetById(t),Object(W.e)().getOptionSets()]);case 7:a=e.sent,n=Object(l.a)(a,2),o=n[0],c=n[1],z=c.data,A(o.data),r(!1),console.log("getCookieValue('clientID')"),console.log(Object(W.c)("clientID"));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){!function(){ne.apply(this,arguments)}()}),[]),Z?d.a.createElement(s.a,{to:"/success"}):d.a.createElement(p.a,{style:{backgroundColor:"#551a8b"}},d.a.createElement(b.a,null,d.a.createElement("br",null),Boolean(T.attributes)&&d.a.createElement(d.a.Fragment,null,d.a.createElement(E.a,{container:!0},d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(g.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto",borderTop:"7px solid #f00"}},d.a.createElement(v.a,{variant:"h5",gutterBottom:!0},T.displayName),d.a.createElement(v.a,{variant:"body2",gutterBottom:!0},T.displayName)))),d.a.createElement("br",null),d.a.createElement(_.b,{initialValues:G,onSubmit:function(e,t){var a=t.setSubmitting;function n(){return(n=Object(o.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.keys(t).map((function(e){return{attribute:Number.parseInt(e),value:Array.isArray(t[e])?t[e].join(","):t[e]}})),n={attribute_set:{id:T.id},attribute_values:a,org_unit:{id:J}},e.next=4,Promise.resolve(Object(W.e)().postAttributeValueSet(JSON.stringify(n)));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e),setTimeout((function(){a(!1)}),500)}},(function(a){var n=a.values,r=a.touched,i=a.errors,o=(a.dirty,a.isSubmitting,a.handleChange),l=a.handleBlur,c=(a.handleSubmit,a.handleReset,a.setFieldValue);return d.a.createElement(_.a,null,d.a.createElement(E.a,{container:!0,spacing:2},T.attributes.map((function(a){return Boolean(a.optionSet.options.length>0)?"radio"==a.control.toLowerCase()?d.a.createElement(E.a,{item:!0,sm:12},d.a.createElement(g.a,{variant:"outlined",elevation:0,style:{width:"calc(95vw - 15px)",maxWidth:"calc(95vw - 30px)",padding:"7px",margin:"auto"}},d.a.createElement(v.a,{variant:"body1",gutterBottom:!0},a.displayName),d.a.createElement(v.a,{variant:"body2",gutterBottom:!0},a.description),d.a.createElement(f.a,{component:"fieldset"},d.a.createElement(x.a,{"aria-label":"gender",name:"gender1",value:n[a.id],onChange:function(e){c(a.id,e.target.value)}},a.optionSet.options.map((function(e,t){return d.a.createElement(h.a,{key:t,value:e.id+"",control:d.a.createElement(y.a,null),label:e.displayName})})))))):"checkbox"==a.control.toLowerCase()?d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(g.a,{elevation:0,variant:"outlined",style:{width:"calc(95vw - 15px)",maxWidth:"calc(95vw - 30px)",padding:"7px",margin:"auto"}},d.a.createElement(v.a,{variant:"body1",gutterBottom:!0},a.displayName),d.a.createElement(v.a,{variant:"body2",gutterBottom:!0},a.description),d.a.createElement(f.a,{component:"fieldset"},d.a.createElement(w.a,null,z.filter((function(e){return e.id==a.option_set}))[0].options.map((function(e){return d.a.createElement(h.a,{key:e.id,value:e,control:d.a.createElement(j.a,{value:e.id,name:a.id,onChange:o}),label:e.displayName})})))))):"richtextbox"==a.control.toLowerCase()?d.a.createElement(d.a.Fragment,null,d.a.createElement("br",null),d.a.createElement(g.a,{elevation:0,variant:"outlined",style:{padding:"10px",backgroundColor:"#000",color:"#fff"}},d.a.createElement(v.a,{variant:"h6"},"We should have a RichTextBox here")),d.a.createElement("br",null)):Boolean(z.filter((function(e){return e.id==a.option_set}))[0].options[0].foto)?null!==z.filter((function(e){return e.id==a.option_set}))[0].options[0].foto?d.a.createElement(E.a,{item:!0,sm:12,xs:12,style:{textAlign:"center"}},d.a.createElement(v.a,{variant:"button"},z.filter((function(e){return e.id==a.option_set}))[0].options[Q].displayName),d.a.createElement(L.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:Q,onChangeIndex:function(e){var t=z.filter((function(e){return e.id==a.option_set}))[0].options[e].id;c(a.id,t),U(e)},enableMouseEvents:!0},z.filter((function(e){return e.id==a.option_set}))[0].options.map((function(t,a){return d.a.createElement("div",{key:a,style:{backgroundColor:"#eee"}},Math.abs(Q-a)<=2?d.a.createElement("img",{className:e.img,src:"".concat(W.a+t.foto.url)}):null)}))),d.a.createElement(O.a,{style:{backgroundColor:"transparent"},steps:z.filter((function(e){return e.id==a.option_set}))[0].options.length,position:"static",variant:"text",activeStep:Q,nextButton:d.a.createElement(B.a,{size:"small",onClick:te,disabled:Q===z.filter((function(e){return e.id==a.option_set}))[0].options.length-1},"rtl"===t.direction?d.a.createElement(I.a,null):d.a.createElement(M.a,null)),backButton:d.a.createElement(B.a,{size:"small",onClick:ae,disabled:0===Q},"rtl"===t.direction?d.a.createElement(M.a,null):d.a.createElement(I.a,null))})):void 0:d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(g.a,{elevation:0,variant:"outlined",style:{width:"calc(95vw - 15px)",maxWidth:"calc(95vw - 30px)",padding:"7px",margin:"auto"}},d.a.createElement(v.a,{variant:"body1",gutterBottom:!0},a.displayName),d.a.createElement(v.a,{variant:"body2",gutterBottom:!0},a.description),d.a.createElement(k.a,{value:n[a.id],select:!0,variant:"outlined",margin:"dense",error:i[a.id]&&r[a.id],helperText:i[a.id],onChange:o,onBlur:l,name:a.id,fullWidth:!0,type:"text"},z.filter((function(e){return e.id==a.option_set}))[0].options.map((function(e){return d.a.createElement(C.a,{key:e.id,value:e.id+""},e.displayName)}))))):"upload"==a.control.toLowerCase()?d.a.createElement(E.a,{item:!0,sm:12},d.a.createElement(E.a,{container:!0},d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(v.a,{variant:"button"},a.displayName)),d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement("p",null,"Arraste e solte a imagen aqui ou clique para selecion\xe1-la")))):"textarea"==a.control.toLowerCase()?d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(g.a,{elevation:0,variant:"outlined",style:{width:"calc(95vw - 15px)",maxWidth:"calc(95vw - 30px)",padding:"7px",margin:"auto"}},d.a.createElement(v.a,{variant:"body1",gutterBottom:!0},a.displayName),d.a.createElement(v.a,{variant:"body2",gutterBottom:!0},a.description),d.a.createElement(k.a,{value:n[a.id],variant:"outlined",multiline:!0,rows:4,error:i[a.id]&&r[a.id],helperText:i[a.id],onChange:o,margin:"dense",onBlur:l,name:a.id,fullWidth:!0,placeholder:"Sua resposta",type:"text"}))):d.a.createElement(E.a,{item:!0,sm:12,xs:12},d.a.createElement(g.a,{elevation:0,variant:"outlined",style:{width:"calc(95vw - 15px)",maxWidth:"calc(95vw - 30px)",padding:"7px",margin:"auto"}},d.a.createElement(v.a,{variant:"body1",gutterBottom:!0},a.displayName),d.a.createElement(v.a,{variant:"body2",gutterBottom:!0},a.description),d.a.createElement(k.a,{value:n[a.id],variant:"outlined",error:i[a.id]&&r[a.id],helperText:i[a.id],onChange:o,margin:"dense",onBlur:l,name:a.id,fullWidth:!0,placeholder:"Sua resposta",type:"text"}),d.a.createElement("br",null),d.a.createElement(B.a,{color:"primary",size:"small",variant:"outlined"},"Limpar")))})),d.a.createElement(E.a,{item:!0,sm:12,style:{paddingTop:"10px",textAlign:"right"}},d.a.createElement(p.a,{display:"flex"},d.a.createElement(p.a,null,d.a.createElement(B.a,{color:"secondary",component:m.b,to:"/"},"Cancel")),d.a.createElement(p.a,{flexGrow:0},"\xa0"),d.a.createElement(p.a,null,d.a.createElement(B.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))))})))))}}}]);
//# sourceMappingURL=58.2c431a27.chunk.js.map