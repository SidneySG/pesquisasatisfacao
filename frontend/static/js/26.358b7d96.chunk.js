(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[26],{215:function(e,a,t){"use strict";var n=t(1),l=t(29),i=t(2),r=t(0),o=(t(6),t(3)),c=t(75),s=t(26),d=t(5),m=t(183),u=r.forwardRef((function(e,a){var t=e.autoFocus,d=e.checked,u=e.checkedIcon,p=e.classes,b=e.className,h=e.defaultChecked,f=e.disabled,g=e.icon,y=e.id,v=e.inputProps,E=e.inputRef,O=e.name,k=e.onBlur,j=e.onChange,x=e.onFocus,C=e.readOnly,N=e.required,w=e.tabIndex,I=e.type,S=e.value,F=Object(i.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),B=Object(c.a)({controlled:d,default:Boolean(h),name:"SwitchBase",state:"checked"}),z=Object(l.a)(B,2),M=z[0],P=z[1],T=Object(s.a)(),R=f;T&&"undefined"===typeof R&&(R=T.disabled);var L="checkbox"===I||"radio"===I;return r.createElement(m.a,Object(n.a)({component:"span",className:Object(o.a)(p.root,b,M&&p.checked,R&&p.disabled),disabled:R,tabIndex:null,role:void 0,onFocus:function(e){x&&x(e),T&&T.onFocus&&T.onFocus(e)},onBlur:function(e){k&&k(e),T&&T.onBlur&&T.onBlur(e)},ref:a},F),r.createElement("input",Object(n.a)({autoFocus:t,checked:d,defaultChecked:h,className:p.input,disabled:R,id:L&&y,name:O,onChange:function(e){var a=e.target.checked;P(a),j&&j(e,a)},readOnly:C,ref:E,required:N,tabIndex:w,type:I,value:S},v)),M?u:g)}));a.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(u)},226:function(e,a,t){"use strict";var n=t(2),l=t(14),i=t(1),r=t(0),o=(t(6),t(3)),c=t(5),s=t(179),d=r.forwardRef((function(e,a){var t,l=e.classes,c=e.className,d=e.component,m=void 0===d?"li":d,u=e.disableGutters,p=void 0!==u&&u,b=e.ListItemClasses,h=e.role,f=void 0===h?"menuitem":h,g=e.selected,y=e.tabIndex,v=Object(n.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(t=void 0!==y?y:-1),r.createElement(s.a,Object(i.a)({button:!0,role:f,tabIndex:t,component:m,selected:g,disableGutters:p,classes:Object(i.a)({dense:l.dense},b),className:Object(o.a)(l.root,c,g&&l.selected,!p&&l.gutters),ref:a},v))}));a.a=Object(c.a)((function(e){return{root:Object(i.a)({},e.typography.body1,Object(l.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(i.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(d)},245:function(e,a,t){"use strict";var n=t(1),l=t(2),i=t(0),r=(t(6),t(3)),o=t(26),c=t(5),s=t(52),d=t(7),m=i.forwardRef((function(e,a){e.checked;var t=e.classes,c=e.className,m=e.control,u=e.disabled,p=(e.inputRef,e.label),b=e.labelPlacement,h=void 0===b?"end":b,f=(e.name,e.onChange,e.value,Object(l.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),g=Object(o.a)(),y=u;"undefined"===typeof y&&"undefined"!==typeof m.props.disabled&&(y=m.props.disabled),"undefined"===typeof y&&g&&(y=g.disabled);var v={disabled:y};return["checked","name","onChange","value","inputRef"].forEach((function(a){"undefined"===typeof m.props[a]&&"undefined"!==typeof e[a]&&(v[a]=e[a])})),i.createElement("label",Object(n.a)({className:Object(r.a)(t.root,c,"end"!==h&&t["labelPlacement".concat(Object(d.a)(h))],y&&t.disabled),ref:a},f),i.cloneElement(m,v),i.createElement(s.a,{component:"span",className:Object(r.a)(t.label,y&&t.disabled)},p))}));a.a=Object(c.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(m)},249:function(e,a,t){"use strict";var n=t(1),l=t(2),i=t(0),r=(t(6),t(3)),o=t(215),c=t(67),s=Object(c.a)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(c.a)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=t(15),u=Object(c.a)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(7),b=t(5),h=i.createElement(d,null),f=i.createElement(s,null),g=i.createElement(u,null),y=i.forwardRef((function(e,a){var t=e.checkedIcon,c=void 0===t?h:t,s=e.classes,d=e.color,m=void 0===d?"secondary":d,u=e.icon,b=void 0===u?f:u,y=e.indeterminate,v=void 0!==y&&y,E=e.indeterminateIcon,O=void 0===E?g:E,k=e.inputProps,j=e.size,x=void 0===j?"medium":j,C=Object(l.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),N=v?O:b,w=v?O:c;return i.createElement(o.a,Object(n.a)({type:"checkbox",classes:{root:Object(r.a)(s.root,s["color".concat(Object(p.a)(m))],v&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:m,inputProps:Object(n.a)({"data-indeterminate":v},k),icon:i.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===x?x:N.props.fontSize}),checkedIcon:i.cloneElement(w,{fontSize:void 0===w.props.fontSize&&"small"===x?x:w.props.fontSize}),ref:a},C))}));a.a=Object(b.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(y)},6131:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return R}));var n=t(209),l=t.n(n),i=t(210),r=t(24),o=t(0),c=t.n(o),s=t(193),d=t(195),m=t(52),u=t(205),p=t(226),b=t(245),h=t(249),f=t(194),g=t(103),y=t(201),v=t(188),E=t(6148),O=t(284),k=t(213),j=(t(212),t(73)),x={height:"450px",width:"100%"},C={fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeOpacity:1,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,geodesic:!1,zIndex:1},N={lat:-25.953724,lng:32.588711},w=null,I=[],S={},F={},B=[],z=[],M=[],P={};function T(e,a){var t=e.target.files,n=new FileReader;n.readAsDataURL(t[0]),n.onloadend=function(){P[a]=n.result}}function R(){var e=Object(o.useState)(!0),a=Object(r.a)(e,2),t=a[0],n=a[1],R=Object(o.useState)([]),L=Object(r.a)(R,2),W=L[0],U=L[1],H=Object(o.useState)(!1),A=Object(r.a)(H,2),V=(A[0],A[1]),D=c.a.useState({drawingMode:"polygon"}),G=Object(r.a)(D,2),$=(G[0],G[1]);function J(e){n(!1),w=e.target.files[0];var a=new FileReader;w=a.readAsText(w),a.onload=function(){var e=JSON.parse(a.result),t=[],l=[];I=e.features[0].geometry.coordinates[0][0].map((function(e){return t.push(e[1]),l.push(e[0]),{lng:e[0],lat:e[1]}}));var i=(Math.min.apply(Math,t)+Math.max.apply(Math,t))/2,r=(Math.min.apply(Math,l)+Math.max.apply(Math,l))/2;N={lat:i,lng:r},S.coordenadas=I,U(I),n(!0)}}Object(o.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var a,t,n,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.next=3,Promise.all([Object(j.c)().getOrganisationUnits(),Object(j.c)().getOrganisationUnitTypes(),Object(j.c)().getOrgUnitVisibilities()]);case 3:a=e.sent,t=Object(r.a)(a,3),n=t[0],i=t[1],o=t[2],B=n.data,z=i.data,M=o.data,V(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var q=function(e){};return c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement(s.a,null,c.a.createElement(k.b,{initialValues:F,onSubmit:function(e,a){var t=a.setSubmitting;function n(){return(n=Object(i.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(P).forEach((function(e){a[e]=P[e]})),e.next=3,Promise.resolve(Object(j.c)().postOrganisationUnits(JSON.stringify(a)));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e),setTimeout((function(){t(!1)}),500)}},(function(e){var a=e.values,n=e.touched,l=e.errors,i=(e.dirty,e.isSubmitting,e.handleChange),r=e.handleBlur,o=(e.handleSubmit,e.handleReset,e.setFieldValue);return c.a.createElement(k.a,null,c.a.createElement(d.a,{container:!0,spacing:2},c.a.createElement(d.a,{item:!0,sm:12},c.a.createElement(m.a,{variant:"h6"},"Facility Registration Form")),c.a.createElement(d.a,{item:!0,sm:12},c.a.createElement(u.a,{value:a.name,error:l.name&&n.name,helperText:l.name,name:"name",id:"name",margin:"dense",onChange:i,onBlur:r,variant:"outlined",label:"Name (*)",fullWidth:!0})),c.a.createElement(d.a,{item:!0,sm:12},c.a.createElement(u.a,{value:a.shortName,error:l.shortName&&n.shortName,helperText:l.shortName,name:"shortName",id:"shortName",margin:"dense",onChange:i,onBlur:r,variant:"outlined",label:"ShortName (*)",fullWidth:!0})),c.a.createElement(d.a,{item:!0,sm:12},c.a.createElement(u.a,{value:a.displayName,error:l.displayName&&n.displayName,helperText:l.displayName,name:"displayName",id:"displayName",margin:"dense",onChange:i,onBlur:r,variant:"outlined",label:"DisplayName (*)",fullWidth:!0})),c.a.createElement(d.a,{item:!0,sm:12},c.a.createElement(u.a,{label:"Type",fullWidth:!0,select:!0,helperText:l.orgUnitType&&n.orgUnitType,name:"orgUnitType",id:"orgUnitType",variant:"outlined",margin:"dense",onChange:i,onBlur:r},z.map((function(e){return c.a.createElement(p.a,{key:e,value:e},e)})))),c.a.createElement(d.a,{item:!0,sm:12},c.a.createElement(E.a,{onChange:function(e,a){o("parent",a)},fullWidth:!0,id:"parent",size:"small",getOptionLabel:function(e){return e.displayName},options:B,style:{minWidth:200},renderInput:function(e){return c.a.createElement(u.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Parent (*)"}))}})),c.a.createElement(d.a,{item:!0,sm:12},c.a.createElement(u.a,{id:"visibility",label:"Visibility",variant:"outlined",margin:"dense",helperText:l.visibility&&n.visibility,name:"visibility",select:!0,fullWidth:!0,onChange:i},M.map((function(e){return c.a.createElement(p.a,{key:e,value:e},e)})))),c.a.createElement(d.a,{item:!0,sm:12},c.a.createElement(b.a,{label:"Incluir fichas gerais",control:c.a.createElement(h.a,{checked:a.includeGeneralForms,onChange:function(e){o("includeGeneralForms",e.target.checked)},name:"includeGeneralForms"})})),c.a.createElement(d.a,{item:!0},c.a.createElement("input",{onChange:function(e){return T(e,"logo")},accept:"image/*",style:{display:"none"},id:"logo-file",multiple:!0,type:"file"}),c.a.createElement("label",{htmlFor:"logo-file"},c.a.createElement(f.a,{variant:"contained",color:"primary",disableElevation:!0,component:"span"},"Upload Logo"))),c.a.createElement(d.a,{item:!0},c.a.createElement("input",{onChange:function(e){return T(e,"bgImage")},accept:"image/*",style:{display:"none"},id:"bg-file",multiple:!0,type:"file"}),c.a.createElement("label",{htmlFor:"bg-file"},c.a.createElement(f.a,{variant:"contained",color:"primary",disableElevation:!0,component:"span"},"Upload Background Image"))),c.a.createElement(d.a,{item:!0,sm:12},c.a.createElement(u.a,{label:"Description",variant:"outlined",margin:"dense",multiline:!0,fullWidth:!0})),c.a.createElement(d.a,{item:!0,sm:6},c.a.createElement(m.a,{variant:"button",color:"initial"},"Area geogr\xe1fica")),c.a.createElement(d.a,{item:!0,sm:6,style:{textAlign:"right"}},c.a.createElement("label",{htmlFor:"upload-photo"},c.a.createElement("input",{onChange:J,style:{display:"none"},id:"upload-photo",name:"upload-photo",type:"file"}),c.a.createElement(f.a,{disabled:!0,color:"primary",variant:"contained",disableElevation:!0,component:"span"},"Carregar"))),c.a.createElement(d.a,{item:!0,sm:12},c.a.createElement(g.a,{variant:"outlined",style:{minHeight:"450px"}},t?c.a.createElement(O.c,{libraries:["drawing","places"],id:"script-loader"},c.a.createElement(O.b,{id:"example-map",mapContainerStyle:x,draggable:!0,zoom:13,center:N},c.a.createElement(O.e,{onLoad:q,paths:W,options:C}),c.a.createElement(O.a,{drawingMode:"polygon",options:{drawingControl:!0,drawingControlOptions:{drawingModes:["polygon"]},polygonOptions:{fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeWeight:2,clickable:!0,editable:!0,draggable:!0,zIndex:1}},onPolygonComplete:function(e){var a=e.getPath().getArray().map((function(e){return{lat:e.lat(),lng:e.lng()}}));o("coordinates",a),$((function(e){return Object.assign({},e,{drawingMode:"maker"})}))}}))):c.a.createElement(y.a,{style:{textAlign:"center",marginTop:"220px"}},c.a.createElement(v.a,null)))),c.a.createElement(d.a,{item:!0,sm:12,style:{textAlign:"right"}},c.a.createElement(f.a,{color:"primary",disableElevation:!0,type:"submit",variant:"contained"},"Save"))))}))))}}}]);
//# sourceMappingURL=26.358b7d96.chunk.js.map