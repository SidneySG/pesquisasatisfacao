(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[25],{216:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},226:function(e,t,a){"use strict";var n=a(2),l=a(14),i=a(1),r=a(0),o=(a(6),a(3)),c=a(5),m=a(179),s=r.forwardRef((function(e,t){var a,l=e.classes,c=e.className,s=e.component,u=void 0===s?"li":s,d=e.disableGutters,p=void 0!==d&&d,f=e.ListItemClasses,y=e.role,h=void 0===y?"menuitem":y,E=e.selected,b=e.tabIndex,g=Object(n.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==b?b:-1),r.createElement(m.a,Object(i.a)({button:!0,role:h,tabIndex:a,component:u,selected:E,disableGutters:p,classes:Object(i.a)({dense:l.dense},f),className:Object(o.a)(l.root,c,E&&l.selected,!p&&l.gutters),ref:t},g))}));t.a=Object(c.a)((function(e){return{root:Object(i.a)({},e.typography.body1,Object(l.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(i.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(s)},227:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(216);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},230:function(e,t,a){"use strict";var n=a(1),l=a(2),i=a(0),r=(a(6),a(3)),o=a(5),c=i.forwardRef((function(e,t){var a=e.classes,o=e.className,c=Object(l.a)(e,["classes","className"]);return i.createElement("div",Object(n.a)({className:Object(r.a)(a.root,o),ref:t},c))}));c.muiName="ListItemSecondaryAction",t.a=Object(o.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(c)},6126:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var n=a(76),l=a(227),i=a(209),r=a.n(i),o=a(210),c=a(24),m=a(0),s=a.n(m),u=a(193),d=a(195),p=a(52),f=a(205),y=a(226),h=a(194),E=a(103),b=a(148),g=a(177),v=a(179),O=a(180),x=a(230),N=a(183),j=a(6148),C=a(106),w=(a(213),a(212),a(73)),W=[],T=[],D=[],S=[],k=[],z={entity:{}};function I(){var e=Object(m.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(m.useState)([]),E=Object(c.a)(i,2),b=E[0],g=E[1];function v(){return(v=Object(o.a)(r.a.mark((function e(){var t,a,n,l,i,o,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(w.c)().getOptionSets(),Object(w.c)().getTypes(),Object(w.c)().getControls(),Object(w.c)().getEntities(),Object(w.c)().getValidationRules()]);case 2:t=e.sent,a=Object(c.a)(t,5),n=a[0],l=a[1],i=a[2],o=a[3],m=a[4],T=i.data,k=l.data,W=n.data,g(o.data),S=m.data;case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){z[e.target.name]=e.target.value}function x(){return(x=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z.sections=[],D.forEach((function(e,t){delete e.section,z.sections.push(Object(l.a)({},e,{order:t+1}))})),e.next=4,Promise.resolve(Object(w.c)().postQuickForm(z));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),s.a.createElement(u.a,null,s.a.createElement(d.a,{container:!0},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(p.a,{variant:"h6",color:"initial"},"Create your organized your form")),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:z.name,variant:"outlined",id:"name",onChange:O,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:z.displayName,variant:"outlined",id:"displayName",onChange:O,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(j.a,{onChange:function(e,t){t,z.entity=t},value:z.entity,fullWidth:!0,id:"entity",getOptionLabel:function(e){return e.displayName},options:b,style:{minWidth:200},renderInput:function(e){return s.a.createElement(f.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Entity"}))}})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:z.type,variant:"outlined",select:!0,id:"shortName",onChange:O,margin:"dense",name:"type",fullWidth:!0,placeholder:"Type",label:"Type",type:"text"},s.a.createElement(y.a,{value:"default"},"Default"),s.a.createElement(y.a,{value:"staged"},"Staged"))),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:z.description,variant:"outlined",multiline:!0,rows:4,id:"description",onChange:O,margin:"dense",name:"description",fullWidth:!0,placeholder:"Description",type:"text"})),s.a.createElement(d.a,{item:!0,sm:6},s.a.createElement(p.a,{variant:"button",color:"initial"},"Sections")),s.a.createElement(d.a,{item:!0,sm:6,style:{textAlign:"right",paddingBottom:"7px"}},s.a.createElement(h.a,{variant:"contained",size:"small",disableElevation:!0,onClick:function(){D.push({entity:z.entity,section:D.length+1,fields:[]}),n(!a)},color:"primary"},"Add entity section")," \xa0",s.a.createElement(h.a,{variant:"contained",size:"small",disableElevation:!0,onClick:function(){D.push({section:D.length+1,fields:[]}),n(!a)},color:"primary"},"Add default section")),D.map((function(e,t){return s.a.createElement(d.a,{key:t,item:!0,sm:12},e.entity?s.a.createElement(L,{attributes:e.entity.attributes,fields:e.fields,id:e.section}):s.a.createElement(P,{fields:e.fields,id:e.section}))})),s.a.createElement(d.a,{item:!0,sm:12,style:{paddingTop:"15px",textAlign:"right"}},s.a.createElement(h.a,{disableElevation:!0,onClick:function(){return x.apply(this,arguments)},color:"primary",variant:"contained"},"Save"))))}function P(e){var t=e.id,a=e.fields,n=Object(m.useState)(!1),l=Object(c.a)(n,2),i=l[0],r=l[1],o=Object(m.useState)(!1),u=Object(c.a)(o,2),y=u[0],g=u[1],v={entity:!0},O={},x={};function N(e){D.forEach((function(a,n){a.section==t&&(D[n][e.target.name]=e.target.value)}))}return s.a.createElement(E.a,{variant:"outlined",style:{padding:"12px",marginBottom:"25px"}},s.a.createElement(d.a,{container:!0,spacing:2},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:v.name,variant:"outlined",error:O.name&&x.name,helperText:O.name,onChange:N,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:v.displayName,variant:"outlined",error:O.displayName&&x.displayName,helperText:O.displayName,onChange:N,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(d.a,{item:!0,sm:6},s.a.createElement(p.a,{variant:"button",color:"initial"},"Fields")),s.a.createElement(d.a,{item:!0,sm:6,style:{textAlign:"right"}},s.a.createElement(h.a,{variant:"contained",size:"small",disableElevation:!0,onClick:function(){D.forEach((function(e,a){e.section==t&&(D[a].fields.push({field:D[a].fields.length+1,validationRules:[]}),r(!i))}))},color:"primary"},"Add Field"),"\xa0",s.a.createElement(h.a,{variant:"contained",size:"small",disableElevation:!0,onClick:function(){g(!0)},color:"primary"},"Add Validation Rule")),a.map((function(e,t){return s.a.createElement(d.a,{key:t,item:!0,sm:4},s.a.createElement(A,{field:e,id:e.field}))}))),s.a.createElement(b.a,{style:{top:"100px"},open:y,onClose:function(){g(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},s.a.createElement(R,null)))}function A(e){e.id;var t=e.field,a={},n={},l={},i=Object(m.useState)(!1),r=Object(c.a)(i,2),o=r[0],u=r[1];function p(e){t[e.target.name]=e.target.value}return s.a.createElement(E.a,{variant:"outlined",style:{padding:"10px"}},s.a.createElement(d.a,{container:!0,spacing:2},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:a.name,variant:"outlined",error:n.name&&l.name,helperText:n.name,onChange:p,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:a.displayName,variant:"outlined",error:n.displayName&&l.displayName,helperText:n.displayName,onChange:p,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:a.displayName,variant:"outlined",select:!0,error:n.displayName&&l.control,helperText:n.displayName,onChange:p,margin:"dense",name:"control",fullWidth:!0,placeholder:"Select a control",label:"Control",type:"text"},T.map((function(e,t){return s.a.createElement(y.a,{key:1,value:e},e)})))),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(j.a,{onChange:function(e,a){t.type=a},fullWidth:!0,id:"type",size:"small",options:k,style:{minWidth:200},renderInput:function(e){return s.a.createElement(f.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Type (*)"}))}})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(j.a,{onChange:function(e,a){t.optionSet=a},fullWidth:!0,id:"optionSet",size:"small",getOptionLabel:function(e){return e.displayName},options:W,style:{minWidth:200},renderInput:function(e){return s.a.createElement(f.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"OptionSet (*)"}))}})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(j.a,{onChange:function(e,a){t.validationRules.push(a),u(!o)},fullWidth:!0,id:"validationRule",size:"small",getOptionLabel:function(e){return e.displayName},options:S,style:{minWidth:200},renderInput:function(e){return s.a.createElement(f.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Validation Rules"}))}})),s.a.createElement(d.a,{item:!0,sm:12,style:{height:280,overflow:"auto"}},s.a.createElement(g.a,{dense:!0,component:"div",role:"list"},t.validationRules.map((function(e,t){return s.a.createElement(v.a,{onDoubleClick:function(e){},key:t,role:"listitem",button:!0},s.a.createElement(O.a,{primary:e.displayName}),s.a.createElement(x.a,null,s.a.createElement(N.a,{color:"secondary",size:"small",onClick:function(e){}},s.a.createElement(C.f,null))))})),s.a.createElement(v.a,null)))))}function R(){var e={},t={},a={};function n(e){}return s.a.createElement(u.a,null,s.a.createElement(E.a,{variant:"outlined",style:{padding:"10px"}},s.a.createElement(d.a,{container:!0},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(p.a,{variant:"h6",color:"initial"},"Create a validation rule")),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:e.name,variant:"outlined",error:t.name&&a.name,helperText:t.name,onChange:n,margin:"dense",name:"name",fullWidth:!0,placeholder:"Type a regular expression",label:"Regular Expression",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:e.helperMessage,variant:"outlined",error:t.helperMessage&&a.helperMessage,helperText:t.helperMessage,onChange:n,margin:"dense",name:"helperMessage",fullWidth:!0,placeholder:"Type the error message",label:"Error message",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:e.test,variant:"outlined",error:t.name&&a.name,helperText:t.name,onChange:n,margin:"dense",name:"name",fullWidth:!0,placeholder:"Test your regular expression",label:"Test",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:e.name,variant:"outlined",error:t.name&&a.name,helperText:t.name,onChange:n,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:e.displayName,variant:"outlined",error:t.displayName&&a.displayName,helperText:t.displayName,onChange:n,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{multiline:!0,row:4,value:e.description,variant:"outlined",error:t.description&&a.description,helperText:t.description,onChange:n,margin:"dense",name:"description",fullWidth:!0,placeholder:"Description",label:"Description",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12,style:{textAlign:"right",paddingTop:"20px"}},s.a.createElement(h.a,{color:"primary",disableElevation:!0,variant:"contained"},"Save")))))}function L(e){var t=e.id,a=e.attributes,l=s.a.useState([]),i=Object(c.a)(l,2),r=i[0],o=i[1],u=s.a.useState([]),p=Object(c.a)(u,2),y=p[0],h=p[1],b=Object(m.useState)(""),j=Object(c.a)(b,2),w=j[0],W=(j[1],{entity:!0}),T={},S={};var k={elementsUp:function(e){h([].concat(Object(n.a)(y),[e])),o(M(r,e)),D.forEach((function(a,l){a.section==t&&(D[l].fields=[].concat(Object(n.a)(y),[e]).map((function(e,t){return{order:t+1,attribute:e}})))}))},elementsDown:function(e){o(r.concat(e)),h(M(y,e)),D.forEach((function(a,n){a.section==t&&(D[n].fields=M(y,e).map((function(e,t){return{order:t+1,attribute:e}})))}))}},z=function(e,t){return s.a.createElement(E.a,{elevation:0,style:{border:"1px solid #eee",width:"100%",height:280,overflow:"auto"},square:!0},s.a.createElement(g.a,{dense:!0,component:"div",role:"list"},e.map((function(e,a){return s.a.createElement(v.a,{onDoubleClick:function(){return k[t](e.id)},key:a,role:"listitem",button:!0},s.a.createElement(O.a,{primary:t.includes("Down")?"".concat(a+1," - ").concat(e.name):e.name}),s.a.createElement(x.a,null,t.includes("Up")?s.a.createElement(N.a,{color:"primary",size:"small",onClick:function(){return k[t](e.id)}},s.a.createElement(C.g,null)):s.a.createElement(N.a,{color:"secondary",size:"small",onClick:function(){return k[t](e.id)}},s.a.createElement(C.f,null))))})),s.a.createElement(v.a,null)))};function I(e){D.forEach((function(a,n){a.section==t&&(D[n][e.target.name]=e.target.value)}))}return s.a.createElement(E.a,{variant:"outlined",style:{padding:"12px",marginBottom:"25px"}},s.a.createElement(d.a,{container:!0,spacing:2},s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:W.name,variant:"outlined",error:T.name&&S.name,helperText:T.name,onChange:I,margin:"dense",name:"name",fullWidth:!0,placeholder:"Name",label:"Name",type:"text"})),s.a.createElement(d.a,{item:!0,sm:12},s.a.createElement(f.a,{value:W.displayName,variant:"outlined",error:T.displayName&&S.displayName,helperText:T.displayName,onChange:I,margin:"dense",name:"displayName",fullWidth:!0,placeholder:"DisplayName",label:"DisplayName",type:"text"})),s.a.createElement(d.a,{item:!0,sm:6},z(a.filter((function(e){return!y.includes(e.id)})).filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())})),"elementsUp")),s.a.createElement(d.a,{item:!0,sm:6},z(y.map((function(e){return a.filter((function(t){return t.id==e}))[0]})),"elementsDown"))))}function M(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}}}]);
//# sourceMappingURL=25.de3c5f6c.chunk.js.map