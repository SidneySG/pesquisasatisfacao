(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[30],{250:function(e,a,t){"use strict";var n=t(1),l=t(30),i=t(2),r=t(0),o=(t(6),t(3)),c=t(80),d=t(26),s=t(5),m=t(197),u=r.forwardRef((function(e,a){var t=e.autoFocus,s=e.checked,u=e.checkedIcon,p=e.classes,h=e.className,b=e.defaultChecked,f=e.disabled,g=e.icon,y=e.id,v=e.inputProps,E=e.inputRef,O=e.name,k=e.onBlur,j=e.onChange,C=e.onFocus,x=e.readOnly,N=e.required,F=e.tabIndex,w=e.type,S=e.value,I=Object(i.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),B=Object(c.a)({controlled:s,default:Boolean(b),name:"SwitchBase",state:"checked"}),z=Object(l.a)(B,2),P=z[0],M=z[1],T=Object(d.a)(),R=f;T&&"undefined"===typeof R&&(R=T.disabled);var W="checkbox"===w||"radio"===w;return r.createElement(m.a,Object(n.a)({component:"span",className:Object(o.a)(p.root,h,P&&p.checked,R&&p.disabled),disabled:R,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),T&&T.onFocus&&T.onFocus(e)},onBlur:function(e){k&&k(e),T&&T.onBlur&&T.onBlur(e)},ref:a},I),r.createElement("input",Object(n.a)({autoFocus:t,checked:s,defaultChecked:b,className:p.input,disabled:R,id:W&&y,name:O,onChange:function(e){var a=e.target.checked;M(a),j&&j(e,a)},readOnly:x,ref:E,required:N,tabIndex:F,type:w,value:S},v)),P?u:g)}));a.a=Object(s.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(u)},337:function(e,a,t){"use strict";var n=t(1),l=t(2),i=t(0),r=(t(6),t(3)),o=t(26),c=t(5),d=t(55),s=t(7),m=i.forwardRef((function(e,a){e.checked;var t=e.classes,c=e.className,m=e.control,u=e.disabled,p=(e.inputRef,e.label),h=e.labelPlacement,b=void 0===h?"end":h,f=(e.name,e.onChange,e.value,Object(l.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),g=Object(o.a)(),y=u;"undefined"===typeof y&&"undefined"!==typeof m.props.disabled&&(y=m.props.disabled),"undefined"===typeof y&&g&&(y=g.disabled);var v={disabled:y};return["checked","name","onChange","value","inputRef"].forEach((function(a){"undefined"===typeof m.props[a]&&"undefined"!==typeof e[a]&&(v[a]=e[a])})),i.createElement("label",Object(n.a)({className:Object(r.a)(t.root,c,"end"!==b&&t["labelPlacement".concat(Object(s.a)(b))],y&&t.disabled),ref:a},f),i.cloneElement(m,v),i.createElement(d.a,{component:"span",className:Object(r.a)(t.label,y&&t.disabled)},p))}));a.a=Object(c.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(m)},373:function(e,a,t){"use strict";var n=t(1),l=t(2),i=t(0),r=(t(6),t(3)),o=t(250),c=t(72),d=Object(c.a)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),s=Object(c.a)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=t(16),u=Object(c.a)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(7),h=t(5),b=i.createElement(s,null),f=i.createElement(d,null),g=i.createElement(u,null),y=i.forwardRef((function(e,a){var t=e.checkedIcon,c=void 0===t?b:t,d=e.classes,s=e.color,m=void 0===s?"secondary":s,u=e.icon,h=void 0===u?f:u,y=e.indeterminate,v=void 0!==y&&y,E=e.indeterminateIcon,O=void 0===E?g:E,k=e.inputProps,j=e.size,C=void 0===j?"medium":j,x=Object(l.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),N=v?O:h,F=v?O:c;return i.createElement(o.a,Object(n.a)({type:"checkbox",classes:{root:Object(r.a)(d.root,d["color".concat(Object(p.a)(m))],v&&d.indeterminate),checked:d.checked,disabled:d.disabled},color:m,inputProps:Object(n.a)({"data-indeterminate":v},k),icon:i.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===C?C:N.props.fontSize}),checkedIcon:i.cloneElement(F,{fontSize:void 0===F.props.fontSize&&"small"===C?C:F.props.fontSize}),ref:a},x))}));a.a=Object(h.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(y)},6663:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return R}));var n=t(228),l=t.n(n),i=t(229),r=t(15),o=t(0),c=t.n(o),d=t(211),s=t(213),m=t(55),u=t(216),p=t(209),h=t(337),b=t(373),f=t(212),g=t(107),y=t(217),v=t(202),E=t(6686),O=t(832),k=t(256),j=(t(255),t(56)),C={height:"450px",width:"100%"},x={fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeOpacity:1,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,geodesic:!1,zIndex:1},N={lat:-25.953724,lng:32.588711},F=null,w=[],S={},I={coordinates:[]},B=[],z=[],P=[],M={};function T(e,a){var t=e.target.files,n=new FileReader;n.readAsDataURL(t[0]),n.onloadend=function(){M[a]=n.result}}function R(){var e=Object(o.useState)(!0),a=Object(r.a)(e,2),t=a[0],n=a[1],R=Object(o.useState)([]),W=Object(r.a)(R,2),L=W[0],U=W[1],A=Object(o.useState)(!1),V=Object(r.a)(A,2),H=(V[0],V[1]),D=c.a.useState({drawingMode:"polygon"}),$=Object(r.a)(D,2),J=($[0],$[1]);function q(e){n(!1),F=e.target.files[0];var a=new FileReader;F=a.readAsText(F),a.onload=function(){var e=JSON.parse(a.result),t=[],l=[];w=e.features[0].geometry.coordinates[0][0].map((function(e){return t.push(e[1]),l.push(e[0]),{lng:e[0],lat:e[1]}}));var i=(Math.min.apply(Math,t)+Math.max.apply(Math,t))/2,r=(Math.min.apply(Math,l)+Math.max.apply(Math,l))/2;N={lat:i,lng:r},S.coordenadas=w,U(w),n(!0)}}Object(o.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var a,t,n,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(!0),e.next=3,Promise.all([Object(j.c)().getOrganisationUnits(),Object(j.c)().getOrganisationUnitTypes(),Object(j.c)().getOrgUnitVisibilities()]);case 3:a=e.sent,t=Object(r.a)(a,3),n=t[0],i=t[1],o=t[2],B=n.data,z=i.data,P=o.data,H(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var G=function(e){};return c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement(d.a,null,c.a.createElement(k.b,{initialValues:I,onSubmit:function(e,a){var t=a.setSubmitting;function n(){return(n=Object(i.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(M).forEach((function(e){a[e]=M[e]})),a.coordinates.length<=0&&L.length>0?a.coordinates=L:a.coordinates.length<=0&&delete a.coordinates,e.next=4,Promise.resolve(Object(j.c)().postOrganisationUnits(JSON.stringify(a)));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(e),setTimeout((function(){t(!1)}),500)}},(function(e){var a=e.values,n=e.touched,l=e.errors,i=(e.dirty,e.isSubmitting,e.handleChange),r=e.handleBlur,o=(e.handleSubmit,e.handleReset,e.setFieldValue);return c.a.createElement(k.a,null,c.a.createElement(s.a,{container:!0,spacing:2},c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(m.a,{variant:"h6"},"Facility Registration Form")),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(u.a,{value:a.name,error:l.name&&n.name,helperText:l.name,name:"name",id:"name",margin:"dense",onChange:i,onBlur:r,variant:"outlined",label:"Name (*)",fullWidth:!0})),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(u.a,{value:a.shortName,error:l.shortName&&n.shortName,helperText:l.shortName,name:"shortName",id:"shortName",margin:"dense",onChange:i,onBlur:r,variant:"outlined",label:"ShortName (*)",fullWidth:!0})),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(u.a,{value:a.displayName,error:l.displayName&&n.displayName,helperText:l.displayName,name:"displayName",id:"displayName",margin:"dense",onChange:i,onBlur:r,variant:"outlined",label:"DisplayName (*)",fullWidth:!0})),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(u.a,{label:"Type",fullWidth:!0,select:!0,helperText:l.orgUnitType&&n.orgUnitType,name:"orgUnitType",id:"orgUnitType",variant:"outlined",margin:"dense",onChange:i,onBlur:r},z.map((function(e){return c.a.createElement(p.a,{key:e,value:e},e)})))),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(E.a,{onChange:function(e,a){o("parent",a)},fullWidth:!0,id:"parent",size:"small",getOptionLabel:function(e){return e.displayName},options:B,style:{minWidth:200},renderInput:function(e){return c.a.createElement(u.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Parent (*)"}))}})),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(u.a,{id:"visibility",label:"Visibility",variant:"outlined",margin:"dense",helperText:l.visibility&&n.visibility,name:"visibility",select:!0,fullWidth:!0,onChange:i},P.map((function(e){return c.a.createElement(p.a,{key:e,value:e},e)})))),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(h.a,{label:"Incluir fichas gerais",control:c.a.createElement(b.a,{checked:a.includeGeneralForms,onChange:function(e){o("includeGeneralForms",e.target.checked)},name:"includeGeneralForms"})})),c.a.createElement(s.a,{item:!0},c.a.createElement("input",{onChange:function(e){return T(e,"logo")},accept:"image/*",style:{display:"none"},id:"logo-file",multiple:!0,type:"file"}),c.a.createElement("label",{htmlFor:"logo-file"},c.a.createElement(f.a,{variant:"contained",color:"primary",disableElevation:!0,component:"span"},"Upload Logo"))),c.a.createElement(s.a,{item:!0},c.a.createElement("input",{onChange:function(e){return T(e,"bgImage")},accept:"image/*",style:{display:"none"},id:"bg-file",multiple:!0,type:"file"}),c.a.createElement("label",{htmlFor:"bg-file"},c.a.createElement(f.a,{variant:"contained",color:"primary",disableElevation:!0,component:"span"},"Upload Background Image"))),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(u.a,{label:"Description",variant:"outlined",margin:"dense",multiline:!0,fullWidth:!0})),c.a.createElement(s.a,{item:!0,sm:6},c.a.createElement(m.a,{variant:"button",color:"initial"},"Area geogr\xe1fica")),c.a.createElement(s.a,{item:!0,sm:6,style:{textAlign:"right"}},c.a.createElement("label",{htmlFor:"upload-photo"},c.a.createElement("input",{onChange:q,style:{display:"none"},id:"upload-photo",name:"upload-photo",type:"file"}),c.a.createElement(f.a,{color:"primary",variant:"contained",disableElevation:!0,component:"span"},"Carregar"))),c.a.createElement(s.a,{item:!0,sm:12},c.a.createElement(g.a,{variant:"outlined",style:{minHeight:"450px"}},t?c.a.createElement(O.c,{libraries:["drawing","places"],id:"script-loader"},c.a.createElement(O.b,{id:"example-map",mapContainerStyle:C,draggable:!0,zoom:13,center:N},c.a.createElement(O.e,{onLoad:G,paths:L,options:x}),c.a.createElement(O.a,{drawingMode:"polygon",options:{drawingControl:!0,drawingControlOptions:{drawingModes:["polygon"]},polygonOptions:{fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeWeight:2,clickable:!0,editable:!0,draggable:!0,zIndex:1}},onPolygonComplete:function(e){var a=e.getPath().getArray().map((function(e){return{lat:e.lat(),lng:e.lng()}}));o("coordinates",a),J((function(e){return Object.assign({},e,{drawingMode:"maker"})}))}}))):c.a.createElement(y.a,{style:{textAlign:"center",marginTop:"220px"}},c.a.createElement(v.a,null)))),c.a.createElement(s.a,{item:!0,sm:12,style:{textAlign:"right"}},c.a.createElement(f.a,{color:"primary",disableElevation:!0,type:"submit",variant:"contained"},"Save"))))}))))}}}]);
//# sourceMappingURL=30.52945c3a.chunk.js.map