(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[38],{244:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(48);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},252:function(e,t,a){"use strict";var n=a(1),l=a(2),i=a(0),r=(a(6),a(3)),o=a(5),c=i.forwardRef((function(e,t){var a=e.classes,o=e.className,c=Object(l.a)(e,["classes","className"]);return i.createElement("div",Object(n.a)({className:Object(r.a)(a.root,o),ref:t},c))}));c.muiName="ListItemSecondaryAction",t.a=Object(o.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(c)},6650:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var n=a(79),l=a(244),i=a(225),r=a.n(i),o=a(226),c=a(15),m=a(0),s=a.n(m),u=a(211),d=a(213),p=a(55),f=a(216),y=a(209),E=a(212),h=a(107),g=a(157),b=a(192),v=a(149),O=a(194),N=a(252),x=a(197),j=a(6687),C=a(110),W=(a(243),a(242),a(56)),w=[],D=[],T=[],k=[],S=[],z={entity:{}};function A(){var e=Object(m.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(m.useState)([]),h=Object(c.a)(i,2),g=h[0],b=h[1];function v(){return(v=Object(o.a)(r.a.mark((function e(){var t,a,n,l,i,o,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(W.c)().getOptionSets(),Object(W.c)().getTypes(),Object(W.c)().getControls(),Object(W.c)().getEntities(),Object(W.c)().getValidationRules()]);case 2:t=e.sent,a=Object(c.a)(t,5),n=a[0],l=a[1],i=a[2],o=a[3],m=a[4],D=i.data,S=l.data,w=n.data,b(o.data),k=m.data;case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){z[e.target.name]=e.target.value}function N(){return(N=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z.sections=[],T.forEach((function(e,t){delete e.section,z.sections.push(Object(l.a)({},e,{order:t+1}))})),e.next=4,Promise.resolve(Object(W.c)().postQuickForm(z));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),s.a.createElement(u.a,null,s.a.createElement(d.a,{container:!0},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(p.a,{variant:"h6",color:"initial"},"Create your organized your form")),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:z.name,variant:"outlined",id:"name",onChange:O,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:z.displayName,variant:"outlined",id:"displayName",onChange:O,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(j.a,{onChange:function(e,t){t,z.entity=t},value:z.entity,fullWidth:!0,id:"entity",getOptionLabel:function(e){return e.displayName},options:g,style:{minWidth:200},renderInput:function(e){return s.a.createElement(f.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Entity"}))}})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:z.type,variant:"outlined",select:!0,id:"shortName",onChange:O,margin:"dense",name:"type",fullWidth:!0,placeholder:"Type",label:"Type",type:"text"},s.a.createElement(y.a,{value:"default"},"Default"),s.a.createElement(y.a,{value:"staged"},"Staged"))),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:z.description,variant:"outlined",multiline:!0,rows:4,id:"description",onChange:O,margin:"dense",name:"description",fullWidth:!0,placeholder:"Description",type:"text"})),s.a.createElement(d.a,{item:!0,sm:6},s.a.createElement(p.a,{variant:"button",color:"initial"},"Sections")),s.a.createElement(d.a,{item:!0,sm:6,style:{textAlign:"right",paddingBottom:"7px"}},s.a.createElement(E.a,{variant:"contained",size:"small",disableElevation:!0,onClick:function(){T.push({entity:z.entity,section:T.length+1,fields:[]}),n(!a)},color:"primary"},"Add entity section")," \xa0",s.a.createElement(E.a,{variant:"contained",size:"small",disableElevation:!0,onClick:function(){T.push({section:T.length+1,fields:[]}),n(!a)},color:"primary"},"Add default section")),T.map((function(e,t){return s.a.createElement(d.a,{key:t,item:!0,sm:12},e.entity?s.a.createElement(I,{attributes:e.entity.attributes,fields:e.fields,id:e.section}):s.a.createElement(P,{fields:e.fields,id:e.section}))})),s.a.createElement(d.a,{item:!0,sm:12,style:{paddingTop:"15px",textAlign:"right"}},s.a.createElement(E.a,{disableElevation:!0,onClick:function(){return N.apply(this,arguments)},color:"primary",variant:"contained"},"Save"))))}function P(e){var t=e.id,a=e.fields,n=Object(m.useState)(!1),l=Object(c.a)(n,2),i=l[0],r=l[1],o=Object(m.useState)(!1),u=Object(c.a)(o,2),y=u[0],b=u[1],v={entity:!0},O={},N={};function x(e){T.forEach((function(a,n){a.section==t&&(T[n][e.target.name]=e.target.value)}))}return s.a.createElement(h.a,{variant:"outlined",style:{padding:"12px",marginBottom:"25px"}},s.a.createElement(d.a,{container:!0,spacing:2},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:v.name,variant:"outlined",error:O.name&&N.name,helperText:O.name,onChange:x,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:v.displayName,variant:"outlined",error:O.displayName&&N.displayName,helperText:O.displayName,onChange:x,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(d.a,{item:!0,sm:6},s.a.createElement(p.a,{variant:"button",color:"initial"},"Fields")),s.a.createElement(d.a,{item:!0,sm:6,style:{textAlign:"right"}},s.a.createElement(E.a,{variant:"contained",size:"small",disableElevation:!0,onClick:function(){T.forEach((function(e,a){e.section==t&&(T[a].fields.push({field:T[a].fields.length+1,validationRules:[]}),r(!i))}))},color:"primary"},"Add Field"),"\xa0",s.a.createElement(E.a,{variant:"contained",size:"small",disableElevation:!0,onClick:function(){b(!0)},color:"primary"},"Add Validation Rule")),a.map((function(e,t){return s.a.createElement(d.a,{key:t,item:!0,sm:4},s.a.createElement(R,{field:e,id:e.field}))}))),s.a.createElement(g.a,{style:{top:"100px"},open:y,onClose:function(){b(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},s.a.createElement(L,null)))}function R(e){e.id;var t=e.field,a={},n={},l={},i=Object(m.useState)(!1),r=Object(c.a)(i,2),o=r[0],u=r[1];function p(e){t[e.target.name]=e.target.value}return s.a.createElement(h.a,{variant:"outlined",style:{padding:"10px"}},s.a.createElement(d.a,{container:!0,spacing:2},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:a.name,variant:"outlined",error:n.name&&l.name,helperText:n.name,onChange:p,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:a.displayName,variant:"outlined",error:n.displayName&&l.displayName,helperText:n.displayName,onChange:p,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:a.displayName,variant:"outlined",select:!0,error:n.displayName&&l.control,helperText:n.displayName,onChange:p,margin:"dense",name:"control",fullWidth:!0,placeholder:"Select a control",label:"Control",type:"text"},D.map((function(e,t){return s.a.createElement(y.a,{key:1,value:e},e)})))),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(j.a,{fullWidth:!0,id:"type",size:"small",options:S,style:{minWidth:200},renderInput:function(e){return s.a.createElement(f.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Type (*)"}))}})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(j.a,{fullWidth:!0,id:"type",size:"small",getOptionLabel:function(e){return e.displayName},options:w,style:{minWidth:200},renderInput:function(e){return s.a.createElement(f.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"OptionSet (*)"}))}})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(j.a,{onChange:function(e,a){t.validationRules.push(a),console.log(T),u(!o)},fullWidth:!0,id:"validationRule",size:"small",getOptionLabel:function(e){return e.displayName},options:k,style:{minWidth:200},renderInput:function(e){return s.a.createElement(f.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Validation Rules"}))}})),s.a.createElement(d.a,{item:!0,sm:12,style:{height:280,overflow:"auto"}},s.a.createElement(b.a,{dense:!0,component:"div",role:"list"},t.validationRules.map((function(e,t){return s.a.createElement(v.a,{onDoubleClick:function(e){},key:t,role:"listitem",button:!0},s.a.createElement(O.a,{primary:e.displayName}),s.a.createElement(N.a,null,s.a.createElement(x.a,{color:"secondary",size:"small",onClick:function(e){}},s.a.createElement(C.f,null))))})),s.a.createElement(v.a,null)))))}function L(){var e={},t={},a={};function n(e){}return s.a.createElement(u.a,null,s.a.createElement(h.a,{variant:"outlined",style:{padding:"10px"}},s.a.createElement(d.a,{container:!0},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(p.a,{variant:"h6",color:"initial"},"Create a validation rule")),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:e.name,variant:"outlined",error:t.name&&a.name,helperText:t.name,onChange:n,margin:"dense",name:"name",fullWidth:!0,placeholder:"Type a regular expression",label:"Regular Expression",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:e.helperMessage,variant:"outlined",error:t.helperMessage&&a.helperMessage,helperText:t.helperMessage,onChange:n,margin:"dense",name:"helperMessage",fullWidth:!0,placeholder:"Type the error message",label:"Error message",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:e.test,variant:"outlined",error:t.name&&a.name,helperText:t.name,onChange:n,margin:"dense",name:"name",fullWidth:!0,placeholder:"Test your regular expression",label:"Test",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:e.name,variant:"outlined",error:t.name&&a.name,helperText:t.name,onChange:n,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:e.displayName,variant:"outlined",error:t.displayName&&a.displayName,helperText:t.displayName,onChange:n,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{multiline:!0,row:4,value:e.description,variant:"outlined",error:t.description&&a.description,helperText:t.description,onChange:n,margin:"dense",name:"description",fullWidth:!0,placeholder:"Description",label:"Description",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12,style:{textAlign:"right",paddingTop:"20px"}},s.a.createElement(E.a,{color:"primary",disableElevation:!0,variant:"contained"},"Save")))))}function I(e){var t=e.id,a=e.attributes,l=s.a.useState([]),i=Object(c.a)(l,2),r=i[0],o=i[1],u=s.a.useState([]),p=Object(c.a)(u,2),y=p[0],E=p[1],g=Object(m.useState)(""),j=Object(c.a)(g,2),W=j[0],w=(j[1],{entity:!0}),D={},k={};var S={elementsUp:function(e){E([].concat(Object(n.a)(y),[e])),o(M(r,e)),T.forEach((function(a,l){a.section==t&&(T[l].fields=[].concat(Object(n.a)(y),[e]).map((function(e,t){return{order:t+1,attribute:e}})))}))},elementsDown:function(e){o(r.concat(e)),E(M(y,e)),T.forEach((function(a,n){a.section==t&&(T[n].fields=M(y,e).map((function(e,t){return{order:t+1,attribute:e}})))}))}},z=function(e,t){return s.a.createElement(h.a,{elevation:0,style:{border:"1px solid #eee",width:"100%",height:280,overflow:"auto"},square:!0},s.a.createElement(b.a,{dense:!0,component:"div",role:"list"},e.map((function(e,a){return s.a.createElement(v.a,{onDoubleClick:function(){return S[t](e.id)},key:a,role:"listitem",button:!0},s.a.createElement(O.a,{primary:t.includes("Down")?"".concat(a+1," - ").concat(e.name):e.name}),s.a.createElement(N.a,null,t.includes("Up")?s.a.createElement(x.a,{color:"primary",size:"small",onClick:function(){return S[t](e.id)}},s.a.createElement(C.g,null)):s.a.createElement(x.a,{color:"secondary",size:"small",onClick:function(){return S[t](e.id)}},s.a.createElement(C.f,null))))})),s.a.createElement(v.a,null)))};function A(e){T.forEach((function(a,n){a.section==t&&(T[n][e.target.name]=e.target.value)}))}return s.a.createElement(h.a,{variant:"outlined",style:{padding:"12px",marginBottom:"25px"}},s.a.createElement(d.a,{container:!0,spacing:2},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:w.name,variant:"outlined",error:D.name&&k.name,helperText:D.name,onChange:A,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:w.displayName,variant:"outlined",error:D.displayName&&k.displayName,helperText:D.displayName,onChange:A,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(d.a,{item:!0,sm:6},z(a.filter((function(e){return!y.includes(e.id)})).filter((function(e){return e.name.toLowerCase().includes(W.toLowerCase())})),"elementsUp")),s.a.createElement(d.a,{item:!0,sm:6},z(y.map((function(e){return a.filter((function(t){return t.id==e}))[0]})),"elementsDown"))))}function M(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}}}]);
//# sourceMappingURL=38.30ce4398.chunk.js.map