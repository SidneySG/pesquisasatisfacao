(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[20],{145:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l}));var a=n(180),o=n.n(a);function r(){return window.location.origin.includes("localhost")?"http://localhost:8000":window.location.origin}var i=r()+"/api",c={headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}};function l(){return{getOrganisationUnits:function(){return o.a.get("".concat(i,"/orgUnits"),c)},getOrgUnitVisibilities:function(){return o.a.get("".concat(i,"/orgUnitVisibilities"),c)},deleteOrgUnitByID:function(e){return o.a.delete("".concat(i,"/orgUnits/").concat(e),c)},getFieldsBySeccionId:function(e){return o.a.get("".concat(i,"/fieldsBysectionID?section_id=").concat(e),c)},getFormByID:function(e){return o.a.get("".concat(i,"/forms?id=").concat(e),c)},getForms:function(){return o.a.get("".concat(i,"/forms"),c)},postQuickForm:function(e){return o.a.post("".concat(i,"/quickForm"),e,c)},postForm:function(e){return o.a.post("".concat(i,"/forms"),e,c)},getFormByOrgUnit:function(e){return o.a.get("".concat(i,"/forms?attribute_set.org_units.id=").concat(e),c)},getFormSectionsByFormID:function(e){return o.a.get("".concat(i,"/sectionsByFormID?form_id=").concat(e),c)},getEntityByID:function(e){return o.a.get("".concat(i,"/entities?id=").concat(e),c)},getEntities:function(e){return o.a.get("".concat(i,"/entities"),c)},getEntityFormsByID:function(e){return o.a.get("".concat(i,"/entityForms?id=").concat(e),c)},getEntityFormsByEntityID:function(e){return o.a.get("".concat(i,"/entityForms?entity__id=").concat(e),c)},getEntityForms:function(){return o.a.get("".concat(i,"/entityForms"),c)},postEntityForm:function(e){return o.a.post("".concat(i,"/entityForms"),e,c)},getEntityDependencies:function(e){return o.a.get("".concat(i,"/entities-depemdencies/").concat(e),c)},getSectionsByIDs:function(e){return o.a.get("".concat(i,"/sections?").concat(e.map((function(e){return"id_in=".concat(e)})).join("&")),c)},getCircleByPoint:function(e,t){return o.a.get("".concat(i,"/getCircleByPoint?lat=").concat(e,"&lng=").concat(t),c)},getOrgUnitsWithinRadius:function(e,t){return o.a.get("".concat(i,"/orgUnitsWithinRadius?lat=").concat(e,"&lng=").concat(t,"&radius=100"),c)},postOrganisationUnitsProximity:function(e){return o.a.post("".concat(i,"/orgUnitsProximity"),e,c)},getOrganisationUnitsByIDs:function(e){return o.a.get("".concat(i,"/orgUnits?orgUnitType=Institui\xe7\xe3o&").concat(e.map((function(e){return"id__in=".concat(e)})).join("&")),c)},getOrganisationUnitByID:function(e){return o.a.get("".concat(i,"/orgUnits?id=").concat(e),c)},postOrganisationUnits:function(e){return o.a.post("".concat(i,"/orgUnits"),e,c)},getOrganisationUnitTypes:function(){return o.a.get("".concat(i,"/orgUnitTypes"),c)},getOrganisationUnitLevels:function(){return o.a.get("".concat(i,"/orgUnitLevels"),c)},getValueTypes:function(){return o.a.get("".concat(i,"/types"),c)},getCategoryCombos:function(){return o.a.get("".concat(i,"/categoryCombos"),c)},getCategoryCombosByFilter:function(e){return o.a.get("".concat(i,"/categoryCombos?").concat(e),c)},getCategoryComboCategories:function(){return o.a.get("".concat(i,"/categoryComboCategories"),c)},getOptionSets:function(){return o.a.get("".concat(i,"/optionSets"),c)},getOptions:function(){return o.a.get("".concat(i,"/options"),c)},postOptions:function(e){return o.a.post("".concat(i,"/options"),e,c)},getSections:function(){return o.a.get("".concat(i,"/sections"),c)},postSection:function(e){return o.a.post("".concat(i,"/sections"),e,c)},postStage:function(e){return o.a.post("".concat(i,"/stages"),e,c)},postAttributeValueSet:function(e){return o.a.post("".concat(i,"/valueSets"),e,c)},deleteAttributeSetByID:function(e){return o.a.delete("".concat(i,"/attributeSets/").concat(e),c)},deleteFormByID:function(e){return o.a.delete("".concat(i,"/forms/").concat(e),c)},getValueSets:function(){return o.a.get("".concat(i,"/valueSets"),c)},getSimpleValueSets:function(e){return o.a.get("".concat(i,"/simple_value_sets?attributeSet__id=").concat(e),c)},getValueSetByID:function(e){return o.a.get("".concat(i,"/valueSets?id=").concat(e),c)},getValueSetByAttributeSetID:function(e){return o.a.get("".concat(i,"/valueSets?attributeSet__id=").concat(e),c)},getEntityValueSetsByEntityID:function(e){return o.a.get("".concat(i,"/entityValueSets?entity__id=").concat(e),c)},postEntityValueSet:function(e){return o.a.post("".concat(i,"/entityValueSets"),e,c)},getAttributeValueSets:function(e){return o.a.get("".concat(i,"/attributeValueSets?attributeSet__id=").concat(e),c)},getAttributeValueSet:function(e){return o.a.get("".concat(i,"/attributeValueSets/").concat(e),c)},getStages:function(){return o.a.get("".concat(i,"/stages"),c)},getStage:function(e){return o.a.get("".concat(i,"/stages/").concat(e),c)},getCategories:function(){return o.a.get("".concat(i,"/categories"),c)},getCategoryOptions:function(){return o.a.get("".concat(i,"/categoryOptions"),c)},postAttributeSets:function(e){return o.a.post("".concat(i,"/attributeSets"),e,c)},getAttributeSet:function(){return o.a.get("".concat(i,"/attributeSets"),c)},getAttributeSetById:function(e){return o.a.get("".concat(i,"/attributeSets/").concat(e),c)},getAttributeSetByOrgUnit:function(e){return o.a.get("".concat(i,"/attributeSets?orgUnits__id=").concat(e),c)},getAttributeSetDependencies:function(e){return o.a.get("".concat(i,"/attributeSetDepemdencies/").concat(e),c)},postAttributes:function(e){return o.a.post("".concat(i,"/attributes"),e,c)},getAttributes:function(){return o.a.get("".concat(i,"/attributes"),c)},getDataDimensionTypes:function(){return o.a.get("".concat(i,"/dataDimensionTypes"),c)},getTypes:function(){return o.a.get("".concat(i,"/types"),c)},getControls:function(){return o.a.get("".concat(i,"/controls"),c)},getPeriodTypes:function(){return o.a.get("".concat(i,"/periodTypes"),c)},getValidationRules:function(){return o.a.get("".concat(i,"/validationRules"),c)},postValidationRules:function(e){return o.a.post("".concat(i,"/validationRules"),e,c)},postCategoryCombos:function(e){return o.a.post("".concat(i,"/categoryCombos"),e,c)},postCategory:function(e){return o.a.post("".concat(i,"/categories"),e,c)},postCategoryOptions:function(e){return o.a.post("".concat(i,"/categoryOptions"),e,c)},postOptionSets:function(e){return o.a.post("".concat(i,"/optionSets"),e,c)},getCategoryCombosIN:function(e){return o.a.get("".concat(i,"/categoryCombos?").concat(e),c)},getOptionSetsIN:function(e){return o.a.get("".concat(i,"/optionSets?").concat(e),c)},getCategoriesIN:function(e){return o.a.get("".concat(i,"/categories?").concat(e),c)},getCategoryComboCategoriesIN:function(e){return o.a.get("".concat(i,"/category-combo-categories?").concat(e),c)}}}},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0);function o(e){var t=a.useState(e),n=t[0],o=t[1],r=e||n;return a.useEffect((function(){null==n&&o("mui-".concat(Math.round(1e5*Math.random())))}),[n]),r}},203:function(e,t,n){"use strict";var a=n(2),o=n(20),r=n(1),i=n(0),c=(n(4),n(3)),l=n(5),s=n(124),u=i.forwardRef((function(e,t){var n,o=e.classes,l=e.className,u=e.component,d=void 0===u?"li":u,p=e.disableGutters,m=void 0!==p&&p,g=e.ListItemClasses,b=e.role,f=void 0===b?"menuitem":b,y=e.selected,h=e.tabIndex,v=Object(a.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==h?h:-1),i.createElement(s.a,Object(r.a)({button:!0,role:f,tabIndex:n,component:d,selected:y,disableGutters:m,classes:Object(r.a)({dense:o.dense},g),className:Object(c.a)(o.root,l,y&&o.selected,!m&&o.gutters),ref:t},v))}));t.a=Object(l.a)((function(e){return{root:Object(r.a)({},e.typography.body1,Object(o.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(r.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(u)},205:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},208:function(e,t,n){"use strict";var a=n(0),o=a.createContext();t.a=o},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(205);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},262:function(e,t,n){"use strict";var a=n(1),o=n(28),r=n(2),i=n(0),c=(n(4),n(263)),l=n(8),s=n(162),u=n(208),d=n(182),p=i.forwardRef((function(e,t){var n=e.actions,p=e.children,m=e.name,g=e.value,b=e.onChange,f=Object(r.a)(e,["actions","children","name","value","onChange"]),y=i.useRef(null),h=Object(s.a)({controlled:g,default:e.defaultValue,name:"RadioGroup"}),v=Object(o.a)(h,2),E=v[0],x=v[1];i.useImperativeHandle(n,(function(){return{focus:function(){var e=y.current.querySelector("input:not(:disabled):checked");e||(e=y.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var O=Object(l.a)(t,y),S=Object(d.a)(m);return i.createElement(u.a.Provider,{value:{name:S,onChange:function(e){x(e.target.value),b&&b(e,e.target.value)},value:E}},i.createElement(c.a,Object(a.a)({role:"radiogroup",ref:O},f),p))}));t.a=p},263:function(e,t,n){"use strict";var a=n(1),o=n(2),r=n(0),i=(n(4),n(3)),c=n(5),l=r.forwardRef((function(e,t){var n=e.classes,c=e.className,l=e.row,s=void 0!==l&&l,u=Object(o.a)(e,["classes","className","row"]);return r.createElement("div",Object(a.a)({className:Object(i.a)(n.root,c,s&&n.row),ref:t},u))}));t.a=Object(c.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(l)},266:function(e,t,n){"use strict";var a=n(1),o=n(2),r=n(0),i=(n(4),n(3)),c=n(159),l=n(139),s=Object(l.a)(r.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),u=Object(l.a)(r.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),d=n(5);var p=Object(d.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,n=e.classes,a=e.fontSize;return r.createElement("div",{className:Object(i.a)(n.root,t&&n.checked)},r.createElement(s,{fontSize:a}),r.createElement(u,{fontSize:a,className:n.layer}))})),m=n(22),g=n(11),b=n(36),f=n(208);var y=r.createElement(p,{checked:!0}),h=r.createElement(p,null),v=r.forwardRef((function(e,t){var n=e.checked,l=e.classes,s=e.color,u=void 0===s?"secondary":s,d=e.name,p=e.onChange,m=e.size,v=void 0===m?"medium":m,E=Object(o.a)(e,["checked","classes","color","name","onChange","size"]),x=r.useContext(f.a),O=n,S=Object(b.a)(p,x&&x.onChange),j=d;return x&&("undefined"===typeof O&&(O=x.value===e.value),"undefined"===typeof j&&(j=x.name)),r.createElement(c.a,Object(a.a)({color:u,type:"radio",icon:r.cloneElement(h,{fontSize:"small"===v?"small":"default"}),checkedIcon:r.cloneElement(y,{fontSize:"small"===v?"small":"default"}),classes:{root:Object(i.a)(l.root,l["color".concat(Object(g.a)(u))]),checked:l.checked,disabled:l.disabled},name:j,checked:O,onChange:S,ref:t},E))}));t.a=Object(d.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(v)},268:function(e,t,n){"use strict";var a=n(1),o=n(2),r=n(20),i=n(0),c=(n(4),n(3)),l=n(5),s=n(11),u=n(104),d=n(132),p=n(102),m=n(18),g=n(75),b={enter:m.b.enteringScreen,exit:m.b.leavingScreen},f=i.forwardRef((function(e,t){var n=e.BackdropProps,r=e.children,l=e.classes,m=e.className,f=e.disableBackdropClick,y=void 0!==f&&f,h=e.disableEscapeKeyDown,v=void 0!==h&&h,E=e.fullScreen,x=void 0!==E&&E,O=e.fullWidth,S=void 0!==O&&O,j=e.maxWidth,C=void 0===j?"sm":j,w=e.onBackdropClick,k=e.onClose,B=e.onEnter,D=e.onEntered,N=e.onEntering,I=e.onEscapeKeyDown,T=e.onExit,W=e.onExited,F=e.onExiting,R=e.open,P=e.PaperComponent,A=void 0===P?g.a:P,U=e.PaperProps,V=void 0===U?{}:U,M=e.scroll,_=void 0===M?"paper":M,H=e.TransitionComponent,L=void 0===H?p.a:H,$=e.transitionDuration,z=void 0===$?b:$,K=e.TransitionProps,Y=e["aria-describedby"],q=e["aria-labelledby"],G=Object(o.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),J=i.useRef();return i.createElement(u.a,Object(a.a)({className:Object(c.a)(l.root,m),BackdropComponent:d.a,BackdropProps:Object(a.a)({transitionDuration:z},n),closeAfterTransition:!0,disableBackdropClick:y,disableEscapeKeyDown:v,onEscapeKeyDown:I,onClose:k,open:R,ref:t},G),i.createElement(L,Object(a.a)({appear:!0,in:R,timeout:z,onEnter:B,onEntering:N,onEntered:D,onExit:T,onExiting:F,onExited:W,role:"none presentation"},K),i.createElement("div",{className:Object(c.a)(l.container,l["scroll".concat(Object(s.a)(_))]),onMouseUp:function(e){e.target===e.currentTarget&&e.target===J.current&&(J.current=null,w&&w(e),!y&&k&&k(e,"backdropClick"))},onMouseDown:function(e){J.current=e.target}},i.createElement(A,Object(a.a)({elevation:24,role:"dialog","aria-describedby":Y,"aria-labelledby":q},V,{className:Object(c.a)(l.paper,l["paperScroll".concat(Object(s.a)(_))],l["paperWidth".concat(Object(s.a)(String(C)))],V.className,x&&l.paperFullScreen,S&&l.paperFullWidth)}),r))))}));t.a=Object(l.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(f)},269:function(e,t,n){"use strict";var a=n(1),o=n(2),r=n(0),i=(n(4),n(3)),c=n(5),l=n(52),s=r.forwardRef((function(e,t){var n=e.children,c=e.classes,s=e.className,u=e.disableTypography,d=void 0!==u&&u,p=Object(o.a)(e,["children","classes","className","disableTypography"]);return r.createElement("div",Object(a.a)({className:Object(i.a)(c.root,s),ref:t},p),d?n:r.createElement(l.a,{component:"h2",variant:"h6"},n))}));t.a=Object(c.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},270:function(e,t,n){"use strict";var a=n(1),o=n(2),r=n(0),i=(n(4),n(3)),c=n(5),l=r.forwardRef((function(e,t){var n=e.classes,c=e.className,l=e.dividers,s=void 0!==l&&l,u=Object(o.a)(e,["classes","className","dividers"]);return r.createElement("div",Object(a.a)({className:Object(i.a)(n.root,c,s&&n.dividers),ref:t},u))}));t.a=Object(c.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(l)},293:function(e,t,n){"use strict";var a=n(1),o=n(0),r=(n(4),n(5)),i=n(52),c=o.forwardRef((function(e,t){return o.createElement(i.a,Object(a.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(r.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(c)},6079:function(e,t,n){"use strict";var a=n(1),o=n(28),r=n(2),i=n(0),c=n(3),l=(n(4),n(77)),s=n(5),u=n(18),d=n(16),p=n(24),m=n(8),g=i.forwardRef((function(e,t){var n=e.children,s=e.classes,g=e.className,b=e.collapsedHeight,f=void 0===b?"0px":b,y=e.component,h=void 0===y?"div":y,v=e.disableStrictModeCompat,E=void 0!==v&&v,x=e.in,O=e.onEnter,S=e.onEntered,j=e.onEntering,C=e.onExit,w=e.onExited,k=e.onExiting,B=e.style,D=e.timeout,N=void 0===D?u.b.standard:D,I=e.TransitionComponent,T=void 0===I?l.a:I,W=Object(r.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),F=Object(p.a)(),R=i.useRef(),P=i.useRef(null),A=i.useRef(),U="number"===typeof f?"".concat(f,"px"):f;i.useEffect((function(){return function(){clearTimeout(R.current)}}),[]);var V=F.unstable_strictMode&&!E,M=i.useRef(null),_=Object(m.a)(t,V?M:void 0),H=function(e){return function(t,n){if(e){var a=V?[M.current,t]:[t,n],r=Object(o.a)(a,2),i=r[0],c=r[1];void 0===c?e(i):e(i,c)}}},L=H((function(e,t){e.style.height=U,O&&O(e,t)})),$=H((function(e,t){var n=P.current?P.current.clientHeight:0,a=Object(d.a)({style:B,timeout:N},{mode:"enter"}).duration;if("auto"===N){var o=F.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(o,"ms"),A.current=o}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),j&&j(e,t)})),z=H((function(e,t){e.style.height="auto",S&&S(e,t)})),K=H((function(e){var t=P.current?P.current.clientHeight:0;e.style.height="".concat(t,"px"),C&&C(e)})),Y=H(w),q=H((function(e){var t=P.current?P.current.clientHeight:0,n=Object(d.a)({style:B,timeout:N},{mode:"exit"}).duration;if("auto"===N){var a=F.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),A.current=a}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=U,k&&k(e)}));return i.createElement(T,Object(a.a)({in:x,onEnter:L,onEntered:z,onEntering:$,onExit:K,onExited:Y,onExiting:q,addEndListener:function(e,t){var n=V?e:t;"auto"===N&&(R.current=setTimeout(n,A.current||0))},nodeRef:V?M:void 0,timeout:"auto"===N?null:N},W),(function(e,t){return i.createElement(h,Object(a.a)({className:Object(c.a)(s.container,g,{entered:s.entered,exited:!x&&"0px"===U&&s.hidden}[e]),style:Object(a.a)({minHeight:U},B),ref:_},t),i.createElement("div",{className:s.wrapper,ref:P},i.createElement("div",{className:s.wrapperInner},n)))}))}));g.muiSupportAuto=!0,t.a=Object(s.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(g)},6118:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var a=n(237),o=n(153),r=n.n(o),i=n(160),c=n(23),l=n(0),s=n.n(l),u=n(120),d=n(24),p=n(9),m=n(52),g=n(75),b=n(227),f=n(136),y=n(228),h=n(6097),v=n(262),E=n(236),x=n(266),O=n(263),S=n(239),j=n(244),C=n(203),w=n(268),k=n(269),B=n(270),D=n(293),N=n(6079),I=n(6075),T=n(145),W=(n(259),n(196)),F=n(195),R=Object(u.a)((function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{margin:"auto",height:320,display:"block",maxWidth:400,overflow:"hidden",width:"auto"},dots:{paddingTop:15,margin:"-10px auto"},dotsMobile:{paddingTop:0},dotsMobileLandscape:{paddingTop:20},inputExcel:{"&:hover":{borderRadius:"0px"}}}})),P=null,A=null;function U(){R(),Object(d.a)();var e=Object(l.useState)(0),t=Object(c.a)(e,2),n=t[0],o=(t[1],Object(l.useState)(0)),u=Object(c.a)(o,2),U=(u[0],u[1],Object(l.useState)(!1)),V=Object(c.a)(U,2),M=V[0],_=V[1],H=Object(l.useState)({}),L=Object(c.a)(H,2),$=L[0],z=L[1],K=Object(l.useState)({}),Y=Object(c.a)(K,2),q=Y[0],G=Y[1],J=Object(l.useState)(!1),X=Object(c.a)(J,2),Q=X[0],Z=X[1],ee=Object(l.useState)(!1),te=Object(c.a)(ee,2),ne=te[0],ae=te[1];function oe(){return(oe=Object(i.a)(r.a.mark((function e(){var t,n,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href.split("/"),t=atob(t[t.length-1]),P=null,e.next=5,Promise.resolve(Object(T.c)().getValueSetByID(t));case 5:return n=e.sent,o={},n.data[0].attributeValues.forEach((function(e){o[e.attribute]=e.value})),console.log(o),G(Object(a.a)({},o)),e.next=12,Promise.resolve(Object(T.c)().getAttributeSetById(n.data[0].attributeSet.id));case 12:i=e.sent,console.log(i.data),A=i.data,z(i.data);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(l.useEffect)((function(){!function(){oe.apply(this,arguments)}()}),[]);var re=function(){Z(!1),_(!0)};return M?s.a.createElement(p.a,{to:"/?success=true"}):s.a.createElement("div",null,Boolean($.attributes)&&s.a.createElement(s.a.Fragment,null,s.a.createElement(W.b,{initialValues:q,onSubmit:function(e,t){var a=t.setSubmitting;function o(){return(o=Object(i.a)(r.a.mark((function e(t){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.keys(t).map((function(e){return{attribute:{id:Number.parseInt(e)},orgUnit:{id:P},period:"".concat((new Date).getFullYear(),"-").concat((new Date).getMonth(),"-").concat((new Date).getDate()),value:Array.isArray(t[e])?t[e].join(","):t[e]}})),o={attributeSet:{id:$.id},attributeValues:a,orgUnit:{id:P},domainType:"sdf",period:"".concat((new Date).getFullYear(),"-").concat((new Date).getMonth(),"-").concat((new Date).getDate())},Boolean(n)&&(o.entityValueSet={id:n}),e.next=5,Promise.resolve(Object(T.c)().postAttributeValueSet(JSON.stringify(o)));case 5:Z(!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){o.apply(this,arguments)}(e),setTimeout((function(){a(!1)}),500)}},(function(e){var t=e.values,n=e.touched,a=e.errors,o=(e.dirty,e.isSubmitting,e.handleChange),r=e.handleBlur,i=(e.handleSubmit,e.handleReset,e.setFieldValue);return s.a.createElement(W.a,null,Boolean(A)&&s.a.createElement("div",null,s.a.createElement("div",{style:{padding:"6px"}},s.a.createElement(m.a,{variant:"h5",gutterBottom:!0},A.displayName),s.a.createElement(m.a,{variant:"body2"},A.description)),s.a.createElement("br",null)),s.a.createElement(g.a,{variant:"outlined",style:{margin:"-20px 10px 10px 10px",border:"0px solid #fff",padding:"20px 0px",borderRadius:"8px",boxShadow:"0 1px 6px rgba(32, 33, 36, 0.28)"}},s.a.createElement(b.a,null,s.a.createElement(f.a,null,s.a.createElement(f.a,null,s.a.createElement(y.a,{container:!0,spacing:2},A.attributes.map((function(e){return e.optionSet.options.length>0?"radio"==e.control.toLowerCase()?s.a.createElement(y.a,{item:!0,sm:12,xs:12},s.a.createElement(g.a,{variant:"outlined",elevation:0,style:{padding:"7px",margin:"auto"}},s.a.createElement(m.a,{variant:"body1",gutterBottom:!0},e.displayName),s.a.createElement(m.a,{variant:"body2",gutterBottom:!0},e.displayName),s.a.createElement(h.a,{component:"fieldset"},s.a.createElement(v.a,{"aria-label":"gender",name:"gender1",value:t[e.id],onChange:function(t){i(e.id,t.target.value)}},e.optionSet.options.map((function(e,t){return s.a.createElement(E.a,{key:t,value:e.id+"",control:s.a.createElement(x.a,null),label:e.displayName})})))))):"checkbox"==e.control.toLowerCase()?s.a.createElement(y.a,{item:!0,sm:12,xs:12},s.a.createElement(g.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},s.a.createElement(m.a,{variant:"body1",gutterBottom:!0},e.displayName),s.a.createElement(m.a,{variant:"body2",gutterBottom:!0},e.description),s.a.createElement(h.a,{component:"fieldset"},s.a.createElement(O.a,null,e.optionSet.options.map((function(t){return s.a.createElement(E.a,{key:t.id,value:t,control:s.a.createElement(S.a,{value:t.id,name:e.id,onChange:o}),label:t.displayName})})))))):"richtextbox"==e.control.toLowerCase()?s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement(g.a,{elevation:0,variant:"outlined",style:{padding:"10px",backgroundColor:"#000",color:"#fff"}},s.a.createElement(m.a,{variant:"h6"},"We should have a RichTextBox here")),s.a.createElement("br",null)):s.a.createElement(y.a,{item:!0,sm:12,xs:12},s.a.createElement(g.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},s.a.createElement(m.a,{variant:"body1",gutterBottom:!0},e.displayName),s.a.createElement(m.a,{variant:"body2",gutterBottom:!0},e.description),s.a.createElement(j.a,{value:t[e.id],select:!0,variant:"outlined",margin:"dense",error:a[e.id]&&n[e.id],helperText:a[e.id],onChange:o,onBlur:r,name:e.id,fullWidth:!0,type:"text"},e.optionSet.options.map((function(e){return s.a.createElement(C.a,{key:e.id,value:e.id+""},e.displayName)}))))):"upload"==e.control.toLowerCase()?s.a.createElement(y.a,{item:!0,sm:12},s.a.createElement(y.a,{container:!0},s.a.createElement(y.a,{item:!0,sm:12,xs:12},s.a.createElement(m.a,{variant:"button"},e.displayName)),s.a.createElement(y.a,{item:!0,sm:12,xs:12},s.a.createElement(f.a,{style:{border:"2px dashed #eee"}},s.a.createElement("p",null,"Arraste e solte a imagen aqui ou clique para selecion\xe1-la"))))):"textarea"==e.control.toLowerCase()?s.a.createElement(y.a,{item:!0,sm:12,xs:12},s.a.createElement(g.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},s.a.createElement(m.a,{variant:"body1",gutterBottom:!0},e.displayName),s.a.createElement(m.a,{variant:"body2",gutterBottom:!0},e.description),s.a.createElement(j.a,{value:t[e.id],variant:"outlined",multiline:!0,rows:4,disabled:!0,error:a[e.id]&&n[e.id],helperText:a[e.id],onChange:o,margin:"dense",onBlur:r,name:e.id,fullWidth:!0,placeholder:"Sua resposta",type:"text"}))):s.a.createElement(y.a,{item:!0,sm:12,xs:12},s.a.createElement(g.a,{elevation:0,variant:"outlined",style:{padding:"7px",margin:"auto"}},s.a.createElement(m.a,{variant:"body1",gutterBottom:!0},e.displayName),s.a.createElement(m.a,{variant:"body2",gutterBottom:!0},e.description),s.a.createElement(j.a,{value:t[e.id],variant:"outlined",disabled:!0,error:a[e.id]&&n[e.id],helperText:a[e.id],onChange:o,margin:"dense",onBlur:r,name:e.id,fullWidth:!0,placeholder:"Sua resposta",type:"text"})))}))))))))}))),s.a.createElement(w.a,{open:Q,onClose:re,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},s.a.createElement(k.a,{id:"alert-dialog-title"},"Informa\xe7\xe3o"),s.a.createElement(B.a,null,s.a.createElement(D.a,{id:"alert-dialog-description"},"A sua contribui\xe7\xe3o foi encaminhada \xe0 pessoa respons\xe1vel. Agradecemos desde j\xe1 pela sua disposi\xe7\xe3o."),s.a.createElement(E.a,{control:s.a.createElement(S.a,{name:"checkedB",onChange:function(e){ae(e.target.checked)},color:"primary"}),label:"Desejo receber feedback"}),s.a.createElement(N.a,{in:ne},s.a.createElement(s.a.Fragment,null,s.a.createElement(W.b,{initialValues:q,onSubmit:function(e,t){t.setSubmitting},validationSchema:F.a().shape({email:F.b().matches(/\S+@\S+\.\S+/,"Email inv\xe1lido"),celular:F.b().matches(/^[8]{1}[2-7]{1}[0-9]{7}$/,"Celular inv\xe1lido")})},(function(e){e.values;var t=e.touched,n=e.errors,a=(e.dirty,e.isSubmitting,e.handleChange),o=e.handleBlur;e.handleSubmit,e.handleReset,e.setFieldValue;return s.a.createElement(W.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,{margin:"dense",onChange:a,onBlur:o,error:n.celular&&t.celular,helperText:n.celular,variant:"filled",label:"Celular",fullWidth:!0}),s.a.createElement("br",null),s.a.createElement(j.a,{margin:"dense",type:"email",onChange:a,onBlur:o,error:n.email&&t.email,helperText:n.email,variant:"filled",label:"Email",fullWidth:!0})))})))),s.a.createElement("div",{style:{textAlign:"center",paddingTop:"15px"}},s.a.createElement(I.a,{disableElevation:!0,variant:"contained",onClick:re,autoFocus:!0},"Terminar")))))}}}]);
//# sourceMappingURL=20.c195dddb.chunk.js.map