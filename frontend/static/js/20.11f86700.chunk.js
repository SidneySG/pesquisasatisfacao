(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[20],{259:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(49);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},277:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},487:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(11),i=a(0),l=(a(6),a(3)),c=a(5),s=a(7),d=a(157),u=a(201),m=a(151),p=a(19),b=a(107),f={enter:p.b.enteringScreen,exit:p.b.leavingScreen},g=i.forwardRef((function(e,t){var a=e.BackdropProps,o=e.children,c=e.classes,p=e.className,g=e.disableBackdropClick,h=void 0!==g&&g,v=e.disableEscapeKeyDown,E=void 0!==v&&v,y=e.fullScreen,x=void 0!==y&&y,O=e.fullWidth,j=void 0!==O&&O,k=e.maxWidth,w=void 0===k?"sm":k,S=e.onBackdropClick,C=e.onClose,B=e.onEnter,N=e.onEntered,W=e.onEntering,T=e.onEscapeKeyDown,D=e.onExit,P=e.onExited,R=e.onExiting,M=e.open,A=e.PaperComponent,F=void 0===A?b.a:A,$=e.PaperProps,I=void 0===$?{}:$,L=e.scroll,H=void 0===L?"paper":L,z=e.TransitionComponent,V=void 0===z?m.a:z,K=e.transitionDuration,q=void 0===K?f:K,Y=e.TransitionProps,G=e["aria-describedby"],X=e["aria-labelledby"],J=Object(r.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),U=i.useRef();return i.createElement(d.a,Object(n.a)({className:Object(l.a)(c.root,p),BackdropComponent:u.a,BackdropProps:Object(n.a)({transitionDuration:q},a),closeAfterTransition:!0,disableBackdropClick:h,disableEscapeKeyDown:E,onEscapeKeyDown:T,onClose:C,open:M,ref:t},J),i.createElement(V,Object(n.a)({appear:!0,in:M,timeout:q,onEnter:B,onEntering:W,onEntered:N,onExit:D,onExiting:R,onExited:P,role:"none presentation"},Y),i.createElement("div",{className:Object(l.a)(c.container,c["scroll".concat(Object(s.a)(H))]),onMouseUp:function(e){e.target===e.currentTarget&&e.target===U.current&&(U.current=null,S&&S(e),!h&&C&&C(e,"backdropClick"))},onMouseDown:function(e){U.current=e.target}},i.createElement(F,Object(n.a)({elevation:24,role:"dialog","aria-describedby":G,"aria-labelledby":X},I,{className:Object(l.a)(c.paper,c["paperScroll".concat(Object(s.a)(H))],c["paperWidth".concat(Object(s.a)(String(w)))],I.className,x&&c.paperFullScreen,j&&c.paperFullWidth)}),o))))}));t.a=Object(c.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(g)},488:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),i=(a(6),a(3)),l=a(5),c=o.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.dividers,s=void 0!==c&&c,d=Object(r.a)(e,["classes","className","dividers"]);return o.createElement("div",Object(n.a)({className:Object(i.a)(a.root,l,s&&a.dividers),ref:t},d))}));t.a=Object(l.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(c)},491:function(e,t,a){"use strict";var n=a(1),r=a(30),o=a(2),i=a(0),l=(a(6),a(492)),c=a(9),s=a(82),d=a(277),u=a(336),m=i.forwardRef((function(e,t){var a=e.actions,m=e.children,p=e.name,b=e.value,f=e.onChange,g=Object(o.a)(e,["actions","children","name","value","onChange"]),h=i.useRef(null),v=Object(s.a)({controlled:b,default:e.defaultValue,name:"RadioGroup"}),E=Object(r.a)(v,2),y=E[0],x=E[1];i.useImperativeHandle(a,(function(){return{focus:function(){var e=h.current.querySelector("input:not(:disabled):checked");e||(e=h.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var O=Object(c.a)(t,h),j=Object(u.a)(p);return i.createElement(d.a.Provider,{value:{name:j,onChange:function(e){x(e.target.value),f&&f(e,e.target.value)},value:y}},i.createElement(l.a,Object(n.a)({role:"radiogroup",ref:O},g),m))}));t.a=m},492:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),i=(a(6),a(3)),l=a(5),c=o.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.row,s=void 0!==c&&c,d=Object(r.a)(e,["classes","className","row"]);return o.createElement("div",Object(n.a)({className:Object(i.a)(a.root,l,s&&a.row),ref:t},d))}));t.a=Object(l.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(c)},497:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),i=(a(6),a(3)),l=a(377),c=a(72),s=Object(c.a)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(c.a)(o.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=a(5);var m=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return o.createElement("div",{className:Object(i.a)(a.root,t&&a.checked)},o.createElement(s,{fontSize:n}),o.createElement(d,{fontSize:n,className:a.layer}))})),p=a(16),b=a(7),f=a(31),g=a(277);var h=o.createElement(m,{checked:!0}),v=o.createElement(m,null),E=o.forwardRef((function(e,t){var a=e.checked,c=e.classes,s=e.color,d=void 0===s?"secondary":s,u=e.name,m=e.onChange,p=e.size,E=void 0===p?"medium":p,y=Object(r.a)(e,["checked","classes","color","name","onChange","size"]),x=o.useContext(g.a),O=a,j=Object(f.a)(m,x&&x.onChange),k=u;return x&&("undefined"===typeof O&&(O=x.value===e.value),"undefined"===typeof k&&(k=x.name)),o.createElement(l.a,Object(n.a)({color:d,type:"radio",icon:o.cloneElement(v,{fontSize:"small"===E?"small":"default"}),checkedIcon:o.cloneElement(h,{fontSize:"small"===E?"small":"default"}),classes:{root:Object(i.a)(c.root,c["color".concat(Object(b.a)(d))]),checked:c.checked,disabled:c.disabled},name:k,checked:O,onChange:j,ref:t},y))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(E)},6638:function(e,t,a){"use strict";var n=a(1),r=a(30),o=a(2),i=a(0),l=a(3),c=(a(6),a(109)),s=a(5),d=a(19),u=a(24),m=a(22),p=a(9),b=i.forwardRef((function(e,t){var a=e.children,s=e.classes,b=e.className,f=e.collapsedHeight,g=void 0===f?"0px":f,h=e.component,v=void 0===h?"div":h,E=e.disableStrictModeCompat,y=void 0!==E&&E,x=e.in,O=e.onEnter,j=e.onEntered,k=e.onEntering,w=e.onExit,S=e.onExited,C=e.onExiting,B=e.style,N=e.timeout,W=void 0===N?d.b.standard:N,T=e.TransitionComponent,D=void 0===T?c.a:T,P=Object(o.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),R=Object(m.a)(),M=i.useRef(),A=i.useRef(null),F=i.useRef(),$="number"===typeof g?"".concat(g,"px"):g;i.useEffect((function(){return function(){clearTimeout(M.current)}}),[]);var I=R.unstable_strictMode&&!y,L=i.useRef(null),H=Object(p.a)(t,I?L:void 0),z=function(e){return function(t,a){if(e){var n=I?[L.current,t]:[t,a],o=Object(r.a)(n,2),i=o[0],l=o[1];void 0===l?e(i):e(i,l)}}},V=z((function(e,t){e.style.height=$,O&&O(e,t)})),K=z((function(e,t){var a=A.current?A.current.clientHeight:0,n=Object(u.a)({style:B,timeout:W},{mode:"enter"}).duration;if("auto"===W){var r=R.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(r,"ms"),F.current=r}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),k&&k(e,t)})),q=z((function(e,t){e.style.height="auto",j&&j(e,t)})),Y=z((function(e){var t=A.current?A.current.clientHeight:0;e.style.height="".concat(t,"px"),w&&w(e)})),G=z(S),X=z((function(e){var t=A.current?A.current.clientHeight:0,a=Object(u.a)({style:B,timeout:W},{mode:"exit"}).duration;if("auto"===W){var n=R.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),F.current=n}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height=$,C&&C(e)}));return i.createElement(D,Object(n.a)({in:x,onEnter:V,onEntered:q,onEntering:K,onExit:Y,onExited:G,onExiting:X,addEndListener:function(e,t){var a=I?e:t;"auto"===W&&(M.current=setTimeout(a,F.current||0))},nodeRef:I?L:void 0,timeout:"auto"===W?null:W},P),(function(e,t){return i.createElement(v,Object(n.a)({className:Object(l.a)(s.container,b,{entered:s.entered,exited:!x&&"0px"===$&&s.hidden}[e]),style:Object(n.a)({minHeight:$},B),ref:H},t),i.createElement("div",{className:s.wrapper,ref:A},i.createElement("div",{className:s.wrapperInner},a)))}))}));b.muiSupportAuto=!0,t.a=Object(s.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(b)},6689:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return H}));var n=a(259),r=a(227),o=a.n(r),i=a(228),l=a(15),c=a(0),s=a.n(c),d=a(190),u=a(22),m=a(12),p=a(26),b=a(211),f=a(55),g=a(107),h=a(217),v=a(213),E=a(154),y=a(491),x=a(6649),O=a(497),j=a(216),k=a(155),w=a(492),S=a(6698),C=a(209),B=a(212),N=a(487),W=a(855),T=a(488),D=a(856),P=a(6638),R=a(6642),M=a(56),A=a(257),F=a(256),$=Object(d.a)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{margin:"auto",height:320,display:"block",maxWidth:400,overflow:"hidden",width:"auto"},dots:{paddingTop:15,margin:"-10px auto"},dotsMobile:{paddingTop:0},dotsMobileLandscape:{paddingTop:20},inputExcel:{"&:hover":{borderRadius:"0px"}}}})),I=null,L=null;function H(){var e=$(),t=(Object(u.a)(),Object(c.useState)(0)),a=Object(l.a)(t,2),r=(a[0],a[1],Object(c.useState)(0)),d=Object(l.a)(r,2),H=(d[0],d[1],Object(c.useState)(!1)),z=Object(l.a)(H,2),V=z[0],K=z[1],q=Object(c.useState)({}),Y=Object(l.a)(q,2),G=Y[0],X=Y[1],J=Object(c.useState)({}),U=Object(l.a)(J,2),Z=U[0],_=U[1],Q=Object(c.useState)(!1),ee=Object(l.a)(Q,2),te=ee[0],ae=ee[1],ne=Object(c.useState)(!1),re=Object(l.a)(ne,2),oe=re[0],ie=re[1];function le(){return(le=Object(i.a)(o.a.mark((function e(){var t,a,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href.split("/"),t=atob(t[t.length-1]),L=t,null,e.next=6,Promise.resolve(Object(M.c)().getValueSetByID(t));case 6:return a=e.sent,r={},a.data[0].attributeValues.forEach((function(e){r[e.attribute]=e.value})),_(Object(n.a)({},r)),e.next=12,Promise.resolve(Object(M.c)().getAttributeSetById(a.data[0].attributeSet.id));case 12:i=e.sent,I=i.data,X(i.data);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){le.apply(this,arguments)}()}),[]);var ce=function(){ae(!1),K(!0)};return V?s.a.createElement(m.a,{to:"/?success=true"}):s.a.createElement(b.a,null,Boolean(G.attributes)&&s.a.createElement(s.a.Fragment,null,s.a.createElement(A.b,{initialValues:Z,onSubmit:function(e,t){var a=t.setSubmitting;function n(){return(n=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object(M.c)().deleteValueSet(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(L),setTimeout((function(){a(!1)}),500)}},(function(t){var a=t.values,n=t.touched,r=t.errors,o=(t.dirty,t.isSubmitting,t.handleChange),i=t.handleBlur,l=(t.handleSubmit,t.handleReset,t.setFieldValue);return s.a.createElement(A.a,null,Boolean(I)&&s.a.createElement("div",null,s.a.createElement("div",{style:{padding:"6px"}},s.a.createElement(f.a,{variant:"h5",gutterBottom:!0},I.displayName),s.a.createElement(f.a,{variant:"body2"},I.description)),s.a.createElement("br",null)),s.a.createElement(g.a,{variant:"outlined",style:{margin:"-20px 10px 10px 10px",border:"0px solid #fff",padding:"20px 0px",borderRadius:"8px",boxShadow:"0 1px 6px rgba(32, 33, 36, 0.28)"}},s.a.createElement(b.a,null,s.a.createElement(h.a,null,s.a.createElement(h.a,null,s.a.createElement(v.a,{container:!0,spacing:2},I.attributes.map((function(e){return e.optionSet.options.length>0?"radio"==e.control.toLowerCase()?s.a.createElement(v.a,{item:!0,sm:12,xs:12},s.a.createElement(g.a,{variant:"outlined",elevation:0,style:{padding:"7px",margin:"auto"}},s.a.createElement(f.a,{variant:"body1",gutterBottom:!0},e.displayName),s.a.createElement(f.a,{variant:"body2",gutterBottom:!0},e.displayName),s.a.createElement(E.a,{component:"fieldset"},s.a.createElement(y.a,{"aria-label":"gender",name:"gender1",value:a[e.id],onChange:function(t){l(e.id,t.target.value)}},e.optionSet.options.map((function(e,t){return s.a.createElement(x.a,{key:t,value:e.id+"",control:s.a.createElement(O.a,null),label:e.displayName})})))))):"autocomplete"==e.control.toLowerCase()?s.a.createElement(v.a,{item:!0,sm:12,xs:12},s.a.createElement(g.a,{variant:"outlined",elevation:0,style:{padding:"7px",margin:"auto"}},s.a.createElement(f.a,{variant:"body1",gutterBottom:!0},e.displayName),s.a.createElement(f.a,{variant:"body2",gutterBottom:!0},e.description),s.a.createElement(R.a,{defaultValue:a[e.id],onChange:function(t,a){l(e.id,a.id)},fullWidth:!0,id:"".concat(e.id),size:"small",getOptionLabel:function(e){return e.displayName},options:e.optionSet.options,style:{minWidth:200},renderInput:function(t){return s.a.createElement(j.a,Object.assign({variant:"outlined",margin:"dense",error:r[e.id]&&n[e.id],helperText:r[e.id],fullWidth:!0},t,{placeholder:"Seleccione uma op\xe7\xe3o"}))}}))):"range"==e.control.toLowerCase()?s.a.createElement(v.a,{item:!0,sm:12,xs:12},s.a.createElement(g.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},s.a.createElement(f.a,{variant:"body1",gutterBottom:!0},e.displayName),s.a.createElement(f.a,{variant:"body2",gutterBottom:!0},e.description),s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement(E.a,{component:"fieldset",error:r[e.id]&&n[e.id]},s.a.createElement(y.a,{row:!0,"aria-label":e.id,name:e.id,onChange:function(t){l(e.id,t.target.value)},value:a[e.id]},s.a.createElement(f.a,{variant:"body1",style:{paddingTop:"33px"},gutterBottom:!0},e.optionSet.options[0].displayName),e.optionSet.options.map((function(e,t){return s.a.createElement(x.a,{style:{margin:"0px"},labelPlacement:"top",key:t,value:e.id+"",control:s.a.createElement(O.a,null),label:e.name})})),s.a.createElement(f.a,{variant:"body1",style:{paddingTop:"33px"},gutterBottom:!0},e.optionSet.options[e.optionSet.options.length-1].displayName)),s.a.createElement(k.a,null,r[e.id]))))):"checkbox"==e.control.toLowerCase()?s.a.createElement(v.a,{item:!0,sm:12,xs:12},s.a.createElement(g.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},s.a.createElement(f.a,{variant:"body1",gutterBottom:!0},e.displayName),s.a.createElement(f.a,{variant:"body2",gutterBottom:!0},e.description),s.a.createElement(E.a,{component:"fieldset"},s.a.createElement(w.a,null,e.optionSet.options.map((function(t){return s.a.createElement(x.a,{key:t.id,value:t,control:s.a.createElement(S.a,{checked:a[e.id].split(",").includes(t.id+""),value:t.id,name:e.id}),label:t.displayName})})))))):"richtextbox"==e.control.toLowerCase()?s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement(g.a,{elevation:0,variant:"outlined",style:{padding:"10px",backgroundColor:"#000",color:"#fff"}},s.a.createElement(f.a,{variant:"h6"},"We should have a RichTextBox here")),s.a.createElement("br",null)):s.a.createElement(v.a,{item:!0,sm:12,xs:12},s.a.createElement(g.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},s.a.createElement(f.a,{variant:"body1",gutterBottom:!0},e.displayName),s.a.createElement(f.a,{variant:"body2",gutterBottom:!0},e.description),s.a.createElement(j.a,{value:a[e.id],select:!0,variant:"outlined",margin:"dense",error:r[e.id]&&n[e.id],helperText:r[e.id],onChange:o,onBlur:i,name:e.id,fullWidth:!0,type:"text"},e.optionSet.options.map((function(e){return s.a.createElement(C.a,{key:e.id,value:e.id+""},e.displayName)}))))):"upload"==e.control.toLowerCase()?s.a.createElement(v.a,{item:!0,sm:12},s.a.createElement(v.a,{container:!0},s.a.createElement(v.a,{item:!0,sm:12,xs:12},s.a.createElement(f.a,{variant:"button"},e.displayName)),s.a.createElement(v.a,{item:!0,sm:12,xs:12},s.a.createElement(h.a,{style:{border:"2px dashed #eee"}},s.a.createElement("p",null,"Arraste e solte a imagen aqui ou clique para selecion\xe1-la"))))):"textarea"==e.control.toLowerCase()?s.a.createElement(v.a,{item:!0,sm:12,xs:12},s.a.createElement(g.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},s.a.createElement(f.a,{variant:"body1",gutterBottom:!0},e.displayName),s.a.createElement(f.a,{variant:"body2",gutterBottom:!0},e.description),s.a.createElement(j.a,{value:a[e.id],variant:"outlined",multiline:!0,rows:4,disabled:!0,error:r[e.id]&&n[e.id],helperText:r[e.id],onChange:o,margin:"dense",onBlur:i,name:e.id,fullWidth:!0,placeholder:"Sua resposta",type:"text"}))):s.a.createElement(v.a,{item:!0,sm:12,xs:12},s.a.createElement(g.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},s.a.createElement(f.a,{variant:"body1",gutterBottom:!0},e.displayName),s.a.createElement(f.a,{variant:"body2",gutterBottom:!0},e.description),s.a.createElement(j.a,{value:a[e.id],variant:"outlined",disabled:!0,error:r[e.id]&&n[e.id],helperText:r[e.id],onChange:o,margin:"dense",onBlur:i,name:e.id,fullWidth:!0,placeholder:"Sua resposta",type:"text"})))}))),s.a.createElement(v.a,{container:!0,spacing:2},s.a.createElement(v.a,{item:!0,xs:12,sm:12,style:{paddingTop:"10px",textAlign:"right"}},s.a.createElement(h.a,{display:"flex"},s.a.createElement(h.a,null,s.a.createElement(B.a,{className:e.button,color:"secondary",component:p.b,to:"/attributeSetData/".concat(btoa(G.id))},"Cancelar")),s.a.createElement(h.a,{flexGrow:1},"\xa0"),s.a.createElement(h.a,null,s.a.createElement(B.a,{className:e.button,disableElevation:!0,type:"submit",color:"secondary",variant:"contained"},"Eliminar"))))))))))}))),s.a.createElement(N.a,{open:te,onClose:ce,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},s.a.createElement(W.a,{id:"alert-dialog-title"},"Informa\xe7\xe3o"),s.a.createElement(T.a,null,s.a.createElement(D.a,{id:"alert-dialog-description"},"A sua contribui\xe7\xe3o foi encaminhada \xe0 pessoa respons\xe1vel. Agradecemos desde j\xe1 pela sua disposi\xe7\xe3o."),s.a.createElement(x.a,{control:s.a.createElement(S.a,{name:"checkedB",onChange:function(e){ie(e.target.checked)},color:"primary"}),label:"Desejo receber feedback"}),s.a.createElement(P.a,{in:oe},s.a.createElement(s.a.Fragment,null,s.a.createElement(A.b,{initialValues:Z,onSubmit:function(e,t){t.setSubmitting},validationSchema:F.a().shape({email:F.c().matches(/\S+@\S+\.\S+/,"Email inv\xe1lido"),celular:F.c().matches(/^[8]{1}[2-7]{1}[0-9]{7}$/,"Celular inv\xe1lido")})},(function(e){e.values;var t=e.touched,a=e.errors,n=(e.dirty,e.isSubmitting,e.handleChange),r=e.handleBlur;e.handleSubmit,e.handleReset,e.setFieldValue;return s.a.createElement(A.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,{margin:"dense",onChange:n,onBlur:r,error:a.celular&&t.celular,helperText:a.celular,variant:"filled",label:"Celular",fullWidth:!0}),s.a.createElement("br",null),s.a.createElement(j.a,{margin:"dense",type:"email",onChange:n,onBlur:r,error:a.email&&t.email,helperText:a.email,variant:"filled",label:"Email",fullWidth:!0})))})))),s.a.createElement("div",{style:{textAlign:"center",paddingTop:"15px"}},s.a.createElement(B.a,{disableElevation:!0,variant:"contained",onClick:ce,autoFocus:!0},"Terminar")))))}},855:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),i=(a(6),a(3)),l=a(5),c=a(55),s=o.forwardRef((function(e,t){var a=e.children,l=e.classes,s=e.className,d=e.disableTypography,u=void 0!==d&&d,m=Object(r.a)(e,["children","classes","className","disableTypography"]);return o.createElement("div",Object(n.a)({className:Object(i.a)(l.root,s),ref:t},m),u?a:o.createElement(c.a,{component:"h2",variant:"h6"},a))}));t.a=Object(l.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},856:function(e,t,a){"use strict";var n=a(1),r=a(0),o=(a(6),a(5)),i=a(55),l=r.forwardRef((function(e,t){return r.createElement(i.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(o.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(l)}}]);
//# sourceMappingURL=20.11f86700.chunk.js.map