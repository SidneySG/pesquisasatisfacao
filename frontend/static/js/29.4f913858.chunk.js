(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[29],{145:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return s}));var o=n(180),a=n.n(o);function r(){return window.location.origin.includes("localhost")?"http://localhost:8000":window.location.origin}var i=r()+"/api",c={headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}};function s(){return{getOrganisationUnits:function(){return a.a.get("".concat(i,"/orgUnits"),c)},getOrgUnitVisibilities:function(){return a.a.get("".concat(i,"/orgUnitVisibilities"),c)},deleteOrgUnitByID:function(t){return a.a.delete("".concat(i,"/orgUnits/").concat(t),c)},getFieldsBySeccionId:function(t){return a.a.get("".concat(i,"/fieldsBysectionID?section_id=").concat(t),c)},getFormByID:function(t){return a.a.get("".concat(i,"/forms?id=").concat(t),c)},getForms:function(){return a.a.get("".concat(i,"/forms"),c)},postQuickForm:function(t){return a.a.post("".concat(i,"/quickForm"),t,c)},postForm:function(t){return a.a.post("".concat(i,"/forms"),t,c)},getFormByOrgUnit:function(t){return a.a.get("".concat(i,"/forms?attribute_set.org_units.id=").concat(t),c)},getFormSectionsByFormID:function(t){return a.a.get("".concat(i,"/sectionsByFormID?form_id=").concat(t),c)},getEntityByID:function(t){return a.a.get("".concat(i,"/entities?id=").concat(t),c)},getEntities:function(t){return a.a.get("".concat(i,"/entities"),c)},getEntityFormsByID:function(t){return a.a.get("".concat(i,"/entityForms?id=").concat(t),c)},getEntityFormsByEntityID:function(t){return a.a.get("".concat(i,"/entityForms?entity__id=").concat(t),c)},getEntityForms:function(){return a.a.get("".concat(i,"/entityForms"),c)},postEntityForm:function(t){return a.a.post("".concat(i,"/entityForms"),t,c)},getEntityDependencies:function(t){return a.a.get("".concat(i,"/entities-depemdencies/").concat(t),c)},getSectionsByIDs:function(t){return a.a.get("".concat(i,"/sections?").concat(t.map((function(t){return"id_in=".concat(t)})).join("&")),c)},getCircleByPoint:function(t,e){return a.a.get("".concat(i,"/getCircleByPoint?lat=").concat(t,"&lng=").concat(e),c)},getOrgUnitsWithinRadius:function(t,e){return a.a.get("".concat(i,"/orgUnitsWithinRadius?lat=").concat(t,"&lng=").concat(e,"&radius=100"),c)},postOrganisationUnitsProximity:function(t){return a.a.post("".concat(i,"/orgUnitsProximity"),t,c)},getOrganisationUnitsByIDs:function(t){return a.a.get("".concat(i,"/orgUnits?orgUnitType=Institui\xe7\xe3o&").concat(t.map((function(t){return"id__in=".concat(t)})).join("&")),c)},getOrganisationUnitByID:function(t){return a.a.get("".concat(i,"/orgUnits?id=").concat(t),c)},postOrganisationUnits:function(t){return a.a.post("".concat(i,"/orgUnits"),t,c)},getOrganisationUnitTypes:function(){return a.a.get("".concat(i,"/orgUnitTypes"),c)},getOrganisationUnitLevels:function(){return a.a.get("".concat(i,"/orgUnitLevels"),c)},getValueTypes:function(){return a.a.get("".concat(i,"/types"),c)},getCategoryCombos:function(){return a.a.get("".concat(i,"/categoryCombos"),c)},getCategoryCombosByFilter:function(t){return a.a.get("".concat(i,"/categoryCombos?").concat(t),c)},getCategoryComboCategories:function(){return a.a.get("".concat(i,"/categoryComboCategories"),c)},getOptionSets:function(){return a.a.get("".concat(i,"/optionSets"),c)},getOptions:function(){return a.a.get("".concat(i,"/options"),c)},postOptions:function(t){return a.a.post("".concat(i,"/options"),t,c)},getSections:function(){return a.a.get("".concat(i,"/sections"),c)},postSection:function(t){return a.a.post("".concat(i,"/sections"),t,c)},postStage:function(t){return a.a.post("".concat(i,"/stages"),t,c)},postAttributeValueSet:function(t){return a.a.post("".concat(i,"/valueSets"),t,c)},deleteAttributeSetByID:function(t){return a.a.delete("".concat(i,"/attributeSets/").concat(t),c)},deleteFormByID:function(t){return a.a.delete("".concat(i,"/forms/").concat(t),c)},getValueSets:function(){return a.a.get("".concat(i,"/valueSets"),c)},getSimpleValueSets:function(t){return a.a.get("".concat(i,"/simple_value_sets?attributeSet__id=").concat(t),c)},getValueSetByID:function(t){return a.a.get("".concat(i,"/valueSets?id=").concat(t),c)},getValueSetByAttributeSetID:function(t){return a.a.get("".concat(i,"/valueSets?attributeSet__id=").concat(t),c)},getEntityValueSetsByEntityID:function(t){return a.a.get("".concat(i,"/entityValueSets?entity__id=").concat(t),c)},postEntityValueSet:function(t){return a.a.post("".concat(i,"/entityValueSets"),t,c)},getAttributeValueSets:function(t){return a.a.get("".concat(i,"/attributeValueSets?attributeSet__id=").concat(t),c)},getAttributeValueSet:function(t){return a.a.get("".concat(i,"/attributeValueSets/").concat(t),c)},getStages:function(){return a.a.get("".concat(i,"/stages"),c)},getStage:function(t){return a.a.get("".concat(i,"/stages/").concat(t),c)},getCategories:function(){return a.a.get("".concat(i,"/categories"),c)},getCategoryOptions:function(){return a.a.get("".concat(i,"/categoryOptions"),c)},postAttributeSets:function(t){return a.a.post("".concat(i,"/attributeSets"),t,c)},getAttributeSet:function(){return a.a.get("".concat(i,"/attributeSets"),c)},getAttributeSetById:function(t){return a.a.get("".concat(i,"/attributeSets/").concat(t),c)},getAttributeSetByOrgUnit:function(t){return a.a.get("".concat(i,"/attributeSets?orgUnits__id=").concat(t),c)},getAttributeSetDependencies:function(t){return a.a.get("".concat(i,"/attributeSetDepemdencies/").concat(t),c)},postAttributes:function(t){return a.a.post("".concat(i,"/attributes"),t,c)},getAttributes:function(){return a.a.get("".concat(i,"/attributes"),c)},getDataDimensionTypes:function(){return a.a.get("".concat(i,"/dataDimensionTypes"),c)},getTypes:function(){return a.a.get("".concat(i,"/types"),c)},getControls:function(){return a.a.get("".concat(i,"/controls"),c)},getPeriodTypes:function(){return a.a.get("".concat(i,"/periodTypes"),c)},getValidationRules:function(){return a.a.get("".concat(i,"/validationRules"),c)},postValidationRules:function(t){return a.a.post("".concat(i,"/validationRules"),t,c)},postCategoryCombos:function(t){return a.a.post("".concat(i,"/categoryCombos"),t,c)},postCategory:function(t){return a.a.post("".concat(i,"/categories"),t,c)},postCategoryOptions:function(t){return a.a.post("".concat(i,"/categoryOptions"),t,c)},postOptionSets:function(t){return a.a.post("".concat(i,"/optionSets"),t,c)},getCategoryCombosIN:function(t){return a.a.get("".concat(i,"/categoryCombos?").concat(t),c)},getOptionSetsIN:function(t){return a.a.get("".concat(i,"/optionSets?").concat(t),c)},getCategoriesIN:function(t){return a.a.get("".concat(i,"/categories?").concat(t),c)},getCategoryComboCategoriesIN:function(t){return a.a.get("".concat(i,"/category-combo-categories?").concat(t),c)}}}},243:function(t,e,n){"use strict";var o=n(1),a=n(2),r=n(0),i=(n(4),n(3)),c=n(5),s=n(22),u=r.forwardRef((function(t,e){var n=t.absolute,c=void 0!==n&&n,s=t.classes,u=t.className,l=t.component,d=void 0===l?"hr":l,g=t.flexItem,p=void 0!==g&&g,b=t.light,f=void 0!==b&&b,m=t.orientation,y=void 0===m?"horizontal":m,h=t.role,v=void 0===h?"hr"!==d?"separator":void 0:h,S=t.variant,x=void 0===S?"fullWidth":S,O=Object(a.a)(t,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return r.createElement(d,Object(o.a)({className:Object(i.a)(s.root,u,"fullWidth"!==x&&s[x],c&&s.absolute,p&&s.flexItem,f&&s.light,"vertical"===y&&s.vertical),role:v,ref:e},O))}));e.a=Object(c.a)((function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.c)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(u)},247:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var o=n(59),a=n(23),r=n(250),i=n(0),c=n.n(i),s=(n(248),n(202)),u=n(184);function l(){var t=Object(s.a)(["\n  display: grid;\n  grid-gap: ",";\n"]);return l=function(){return t},t}function d(){var t=Object(s.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: ",";\n"]);return d=function(){return t},t}var g=u.a.div(d(),(function(t){return t.gap||"1em"})),p=u.a.div(l(),(function(t){return t.gap||"1em"}));function b(t){var e=t.children,n=t.gap,s=t.minWidth,u=void 0===s?500:s,l=Object(r.a)(t,["children","gap","minWidth"]),d=Object(i.useRef)(),b=Object(i.useState)(3),f=Object(a.a)(b,2),m=f[0],y=f[1],h=Object(o.a)(Array(m)).map((function(){return[]}));!function(t,e){t.forEach((function(t,n){return e[n%e.length].push(t)}))}(e,h);return Object(i.useEffect)((function(){return y(Math.ceil(d.current.offsetWidth/u))}),[]),c.a.createElement(g,Object.assign({ref:d,gap:n},l),Object(o.a)(Array(m)).map((function(t,e){return c.a.createElement(p,{key:e,gap:n},h[e])})))}},272:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(202),a=n(0),r=n.n(a);function i(){var t=Object(o.a)(["\nborder-radius: 8px;\nplace-content: left;\ndisplay: grid;\ncolor: white;\ncursor: pointer;\n//max-width: 50vw;\nbox-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);\nbackground-color: #551a8b;\npadding: 20px;\n"]);return i=function(){return t},t}var c=n(184).a.div(i());function s(t){var e=t.backgroundColor,n=void 0===e?"#551a8b":e,o=t.placeContent,a=void 0===o?"center":o,i=t.color,s=void 0===i?"white":i,u=t.children;return r.a.createElement(c,{style:{backgroundColor:n,placeContent:a,color:s}},u)}},6075:function(t,e,n){"use strict";var o=n(2),a=n(1),r=n(0),i=(n(4),n(3)),c=n(5),s=n(22),u=n(76),l=n(11),d=r.forwardRef((function(t,e){var n=t.children,c=t.classes,s=t.className,d=t.color,g=void 0===d?"default":d,p=t.component,b=void 0===p?"button":p,f=t.disabled,m=void 0!==f&&f,y=t.disableElevation,h=void 0!==y&&y,v=t.disableFocusRipple,S=void 0!==v&&v,x=t.endIcon,O=t.focusVisibleClassName,C=t.fullWidth,j=void 0!==C&&C,E=t.size,k=void 0===E?"medium":E,w=t.startIcon,I=t.type,z=void 0===I?"button":I,B=t.variant,D=void 0===B?"text":B,F=Object(o.a)(t,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),R=w&&r.createElement("span",{className:Object(i.a)(c.startIcon,c["iconSize".concat(Object(l.a)(k))])},w),V=x&&r.createElement("span",{className:Object(i.a)(c.endIcon,c["iconSize".concat(Object(l.a)(k))])},x);return r.createElement(u.a,Object(a.a)({className:Object(i.a)(c.root,c[D],s,"inherit"===g?c.colorInherit:"default"!==g&&c["".concat(D).concat(Object(l.a)(g))],"medium"!==k&&[c["".concat(D,"Size").concat(Object(l.a)(k))],c["size".concat(Object(l.a)(k))]],h&&c.disableElevation,m&&c.disabled,j&&c.fullWidth),component:b,disabled:m,focusRipple:!S,focusVisibleClassName:Object(i.a)(c.focusVisible,O),ref:e,type:z},F),r.createElement("span",{className:c.label},R,n,V))}));e.a=Object(c.a)((function(t){return{root:Object(a.a)({},t.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:t.shape.borderRadius,color:t.palette.text.primary,transition:t.transitions.create(["background-color","box-shadow","border"],{duration:t.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(s.c)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:t.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:t.palette.primary.main,"&:hover":{backgroundColor:Object(s.c)(t.palette.primary.main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:t.palette.secondary.main,"&:hover":{backgroundColor:Object(s.c)(t.palette.secondary.main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===t.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(t.palette.action.disabledBackground)}},outlinedPrimary:{color:t.palette.primary.main,border:"1px solid ".concat(Object(s.c)(t.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(t.palette.primary.main),backgroundColor:Object(s.c)(t.palette.primary.main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:t.palette.secondary.main,border:"1px solid ".concat(Object(s.c)(t.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(t.palette.secondary.main),backgroundColor:Object(s.c)(t.palette.secondary.main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(t.palette.action.disabled)}},contained:{color:t.palette.getContrastText(t.palette.grey[300]),backgroundColor:t.palette.grey[300],boxShadow:t.shadows[2],"&:hover":{backgroundColor:t.palette.grey.A100,boxShadow:t.shadows[4],"@media (hover: none)":{boxShadow:t.shadows[2],backgroundColor:t.palette.grey[300]},"&$disabled":{backgroundColor:t.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:t.shadows[6]},"&:active":{boxShadow:t.shadows[8]},"&$disabled":{color:t.palette.action.disabled,boxShadow:t.shadows[0],backgroundColor:t.palette.action.disabledBackground}},containedPrimary:{color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.main,"&:hover":{backgroundColor:t.palette.primary.dark,"@media (hover: none)":{backgroundColor:t.palette.primary.main}}},containedSecondary:{color:t.palette.secondary.contrastText,backgroundColor:t.palette.secondary.main,"&:hover":{backgroundColor:t.palette.secondary.dark,"@media (hover: none)":{backgroundColor:t.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(d)},6110:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var o=n(153),a=n.n(o),r=n(160),i=n(23),c=n(0),s=n.n(c),u=n(29),l=n(52),d=n(243),g=n(6075),p=n(145),b=n(247),f=n(272),m=null,y=[];function h(){var t=Object(c.useState)(!1),e=Object(i.a)(t,2),n=e[0],o=e[1];function h(){return(h=Object(r.a)(a.a.mark((function t(){var e,r,c,s,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m=window.location.href.split("/"),m=atob(m[m.length-1]),console.log(m),t.next=5,Promise.all([Object(p.c)().getEntityByID(m),Object(p.c)().getEntityValueSetsByEntityID(m),Object(p.c)().getEntityFormsByEntityID(m)]);case 5:e=t.sent,r=Object(i.a)(e,3),c=r[0],s=r[1],u=r[2],c.data[0],y=u.data,s.data,o(!n);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),s.a.createElement("div",null,s.a.createElement(l.a,{variant:"h5"},"Detalhes da Entidade"),s.a.createElement(d.a,null),s.a.createElement(g.a,{component:u.b,to:"/entityForm/".concat(btoa(m)),variant:"contained"},"Registrar"),s.a.createElement(l.a,{variant:"h5"},"Formularios"),s.a.createElement(l.a,{variant:"h5"},"Entidades Registadas"),y.length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{minWidth:300},y.map((function(t,e){return s.a.createElement(f.a,{key:e,placeContent:"left"},s.a.createElement(u.b,{style:{textDecoration:"none",color:"#fff",position:"relative",top:"0px"},to:"/entityForm/".concat(btoa(t.id))},s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{variant:"button"},t.displayName),s.a.createElement(l.a,null,t.description))))})))))}}}]);
//# sourceMappingURL=29.4f913858.chunk.js.map