(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[41],{262:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(52);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},287:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),l=(a(6),a(4)),c=a(5),o=i.forwardRef((function(e,t){var a=e.classes,c=e.className,o=Object(r.a)(e,["classes","className"]);return i.createElement("div",Object(n.a)({className:Object(l.a)(a.root,c),ref:t},o))}));o.muiName="ListItemSecondaryAction",t.a=Object(c.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(o)},6666:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return W}));var n=a(84),r=a(76),i=a.n(r),l=a(262),c=a(83),o=a(12),s=a(0),u=a.n(s),m=a(223),d=a(224),p=a(59),f=a(227),b=a(222),y=a(212),h=a(114),E=a(199),v=a(157),g=a(201),O=a(287),j=a(204),S=a(6711),x=a(116),N=a(265),w=(a(264),a(31));function C(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}var D=[],k=null,P=[],T={};function W(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=(t[0],t[1]),n=Object(s.useState)(!1),r=Object(o.a)(n,2),h=r[0],E=r[1];function v(){return(v=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,Promise.resolve(Object(w.e)().getAttributeSet());case 3:t=e.sent,D=t.data,a(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),u.a.createElement(m.a,null,u.a.createElement(d.a,{container:!0},u.a.createElement(d.a,{item:!0,sm:12},u.a.createElement(p.a,{variant:"h6",color:"initial"},"Organize your form"))),u.a.createElement(N.b,{initialValues:T,onSubmit:function(e,t){var a=t.setSubmitting;function n(){return(n=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.attributeSet=t.attributeSet.id,t.sections=P.map((function(e,t){return delete e.section,delete e.attributes,Object(l.a)({},e,{order:t+1})})),e.next=4,Promise.resolve(Object(w.e)().postForm(JSON.stringify(t)));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e),setTimeout((function(){a(!1)}),500)}},(function(e){var t=e.values,a=e.touched,n=e.errors,r=(e.dirty,e.isSubmitting,e.handleChange),i=e.handleBlur,l=(e.handleSubmit,e.handleReset,e.setFieldValue);return u.a.createElement(N.a,null,u.a.createElement(d.a,{container:!0},u.a.createElement(d.a,{item:!0,sm:12},u.a.createElement(f.a,{value:t.name,variant:"outlined",error:n.name&&a.name,helperText:n.name,onChange:r,margin:"dense",onBlur:i,name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),u.a.createElement(d.a,{item:!0,sm:12},u.a.createElement(f.a,{value:t.displayName,variant:"outlined",error:n.displayName&&a.displayName,helperText:n.displayName,onChange:r,margin:"dense",onBlur:i,name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),u.a.createElement(d.a,{item:!0,sm:12},u.a.createElement(S.a,{onChange:function(e,t){k=t,l("attributeSet",t)},value:t.attributeSet,fullWidth:!0,id:"attributeSet",getOptionLabel:function(e){return e.displayName},options:D,style:{minWidth:200},renderInput:function(e){return u.a.createElement(f.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"AttributeSet"}))}})),u.a.createElement(d.a,{item:!0,sm:12},u.a.createElement(f.a,{value:t.name,variant:"outlined",select:!0,error:n.name&&a.name,helperText:n.name,onChange:r,margin:"dense",onBlur:i,name:"type",fullWidth:!0,placeholder:"Type",label:"Type",type:"text"},u.a.createElement(b.a,{value:"default"},"Default"),u.a.createElement(b.a,{value:"staged"},"Staged"))),u.a.createElement(d.a,{item:!0,sm:12},u.a.createElement(f.a,{value:t.description,variant:"outlined",multiline:!0,rows:4,error:n.description&&a.description,helperText:n.description,onChange:r,margin:"dense",onBlur:i,name:t.description,fullWidth:!0,placeholder:"Sua resposta",type:"text"})),u.a.createElement(d.a,{item:!0,sm:6},u.a.createElement(p.a,{variant:"button",color:"initial"},"Sections")),u.a.createElement(d.a,{item:!0,sm:6,style:{textAlign:"right",paddingBottom:"7px"}},u.a.createElement(y.a,{variant:"contained",size:"small",disableElevation:!0,disabled:!k,onClick:function(){P.push({attributes:k.entity.attributes,entity:k.entity,section:P.length+1}),E(!h)},color:"primary"},"Add entity section")," \xa0",u.a.createElement(y.a,{variant:"contained",size:"small",disableElevation:!0,disabled:!k,onClick:function(){P.push({attributes:k.attributes,section:P.length+1}),E(!h)},color:"primary"},"Add default section")),P.map((function(e,t){return u.a.createElement(d.a,{key:t,item:!0,sm:12},u.a.createElement(A,{attributes:e.attributes,id:e.section}))})),u.a.createElement(d.a,{item:!0,sm:12,style:{paddingTop:"15px",textAlign:"right"}},u.a.createElement(y.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))})))}function A(e){var t=e.id,a=e.attributes,r=u.a.useState([]),i=Object(o.a)(r,2),l=i[0],c=i[1],m=u.a.useState([]),p=Object(o.a)(m,2),b=p[0],y=p[1],S=Object(s.useState)(""),N=Object(o.a)(S,2),w=N[0],D=(N[1],{entity:!0}),k={},T={};var W={elementsUp:function(e){y([].concat(Object(n.a)(b),[e])),c(C(l,e)),P.forEach((function(a,r){a.section==t&&(P[r].fields=[].concat(Object(n.a)(b),[e]).map((function(e,t){return{order:t+1,attribute:e}})))}))},elementsDown:function(e){c(l.concat(e)),y(C(b,e)),P.forEach((function(a,n){a.section==t&&(P[n].fields=C(b,e).map((function(e,t){return{order:t+1,attribute:e}})))}))}},A=function(e,t){return u.a.createElement(h.a,{elevation:0,style:{border:"1px solid #eee",width:"100%",height:280,overflow:"auto"},square:!0},u.a.createElement(E.a,{dense:!0,component:"div",role:"list"},e.map((function(e,a){return u.a.createElement(v.a,{onDoubleClick:function(){return W[t](e.id)},key:a,role:"listitem",button:!0},u.a.createElement(g.a,{primary:t.includes("Down")?"".concat(a+1," - ").concat(e.name):e.name}),u.a.createElement(O.a,null,t.includes("Up")?u.a.createElement(j.a,{color:"primary",size:"small",onClick:function(){return W[t](e.id)}},u.a.createElement(x.h,null)):u.a.createElement(j.a,{color:"secondary",size:"small",onClick:function(){return W[t](e.id)}},u.a.createElement(x.g,null))))})),u.a.createElement(v.a,null)))};function B(e){P.forEach((function(a,n){a.section==t&&(P[n][e.target.name]=e.target.value)}))}return u.a.createElement(h.a,{variant:"outlined",style:{padding:"12px",marginBottom:"25px"}},u.a.createElement(d.a,{container:!0,spacing:2},u.a.createElement(d.a,{item:!0,sm:12},u.a.createElement(f.a,{value:D.name,variant:"outlined",error:k.name&&T.name,helperText:k.name,onChange:B,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),u.a.createElement(d.a,{item:!0,sm:12},u.a.createElement(f.a,{value:D.displayName,variant:"outlined",error:k.displayName&&T.displayName,helperText:k.displayName,onChange:B,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),u.a.createElement(d.a,{item:!0,sm:6},A(a.filter((function(e){return!b.includes(e.id)})).filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())})),"elementsUp")),u.a.createElement(d.a,{item:!0,sm:6},A(b.map((function(e){return a.filter((function(t){return t.id==e}))[0]})),"elementsDown"))))}}}]);
//# sourceMappingURL=41.ab8f9119.chunk.js.map