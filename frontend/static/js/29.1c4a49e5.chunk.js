(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[29],{150:function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return r})),e.d(n,"c",(function(){return u}));var o=e(185),a=e.n(o);function c(){return window.location.origin.includes("localhost")?"http://localhost:8000":window.location.origin}var r=c()+"/api",i={headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}};function u(){return{getOrganisationUnits:function(){return a.a.get("".concat(r,"/orgUnits"),i)},getOrgUnitVisibilities:function(){return a.a.get("".concat(r,"/orgUnitVisibilities"),i)},deleteOrgUnitByID:function(t){return a.a.delete("".concat(r,"/orgUnits/").concat(t),i)},getFieldsBySeccionId:function(t){return a.a.get("".concat(r,"/fieldsBysectionID?section_id=").concat(t),i)},getFormByID:function(t){return a.a.get("".concat(r,"/forms?id=").concat(t),i)},getForms:function(){return a.a.get("".concat(r,"/forms"),i)},postQuickForm:function(t){return a.a.post("".concat(r,"/quickForm"),t,i)},postForm:function(t){return a.a.post("".concat(r,"/forms"),t,i)},getFormByOrgUnit:function(t){return a.a.get("".concat(r,"/forms?attribute_set.org_units.id=").concat(t),i)},getFormSectionsByFormID:function(t){return a.a.get("".concat(r,"/sectionsByFormID?form_id=").concat(t),i)},getEntityByID:function(t){return a.a.get("".concat(r,"/entities?id=").concat(t),i)},getEntities:function(t){return a.a.get("".concat(r,"/entities"),i)},getEntityFormsByID:function(t){return a.a.get("".concat(r,"/entityForms?id=").concat(t),i)},getEntityFormsByEntityID:function(t){return a.a.get("".concat(r,"/entityForms?entity__id=").concat(t),i)},getEntityForms:function(){return a.a.get("".concat(r,"/entityForms"),i)},postEntityForm:function(t){return a.a.post("".concat(r,"/entityForms"),t,i)},getEntityDependencies:function(t){return a.a.get("".concat(r,"/entities-depemdencies/").concat(t),i)},getSectionsByIDs:function(t){return a.a.get("".concat(r,"/sections?").concat(t.map((function(t){return"id_in=".concat(t)})).join("&")),i)},getCircleByPoint:function(t,n){return a.a.get("".concat(r,"/getCircleByPoint?lat=").concat(t,"&lng=").concat(n),i)},getOrgUnitsWithinRadius:function(t,n){return a.a.get("".concat(r,"/orgUnitsWithinRadius?lat=").concat(t,"&lng=").concat(n,"&radius=100"),i)},postOrganisationUnitsProximity:function(t){return a.a.post("".concat(r,"/orgUnitsProximity"),t,i)},getOrganisationUnitsByIDs:function(t){return a.a.get("".concat(r,"/orgUnits?orgUnitType=Institui\xe7\xe3o&").concat(t.map((function(t){return"id__in=".concat(t)})).join("&")),i)},getOrganisationUnitByID:function(t){return a.a.get("".concat(r,"/orgUnits?id=").concat(t),i)},postOrganisationUnits:function(t){return a.a.post("".concat(r,"/orgUnits"),t,i)},getOrganisationUnitTypes:function(){return a.a.get("".concat(r,"/orgUnitTypes"),i)},getOrganisationUnitLevels:function(){return a.a.get("".concat(r,"/orgUnitLevels"),i)},getValueTypes:function(){return a.a.get("".concat(r,"/types"),i)},getCategoryCombos:function(){return a.a.get("".concat(r,"/categoryCombos"),i)},getCategoryCombosByFilter:function(t){return a.a.get("".concat(r,"/categoryCombos?").concat(t),i)},getCategoryComboCategories:function(){return a.a.get("".concat(r,"/categoryComboCategories"),i)},getOptionSets:function(){return a.a.get("".concat(r,"/optionSets"),i)},getOptions:function(){return a.a.get("".concat(r,"/options"),i)},postOptions:function(t){return a.a.post("".concat(r,"/options"),t,i)},getSections:function(){return a.a.get("".concat(r,"/sections"),i)},postSection:function(t){return a.a.post("".concat(r,"/sections"),t,i)},postStage:function(t){return a.a.post("".concat(r,"/stages"),t,i)},postAttributeValueSet:function(t){return a.a.post("".concat(r,"/valueSets"),t,i)},deleteAttributeSetByID:function(t){return a.a.delete("".concat(r,"/attributeSets/").concat(t),i)},deleteFormByID:function(t){return a.a.delete("".concat(r,"/forms/").concat(t),i)},getValueSets:function(){return a.a.get("".concat(r,"/valueSets"),i)},getSimpleValueSets:function(t){return a.a.get("".concat(r,"/simple_value_sets?attributeSet__id=").concat(t),i)},getValueSetByID:function(t){return a.a.get("".concat(r,"/valueSets?id=").concat(t),i)},getValueSetByAttributeSetID:function(t){return a.a.get("".concat(r,"/valueSets?attributeSet__id=").concat(t),i)},getEntityValueSetsByEntityID:function(t){return a.a.get("".concat(r,"/entityValueSets?entity__id=").concat(t),i)},postEntityValueSet:function(t){return a.a.post("".concat(r,"/entityValueSets"),t,i)},getAttributeValueSets:function(t){return a.a.get("".concat(r,"/attributeValueSets?attributeSet__id=").concat(t),i)},getAttributeValueSet:function(t){return a.a.get("".concat(r,"/attributeValueSets/").concat(t),i)},getStages:function(){return a.a.get("".concat(r,"/stages"),i)},getStage:function(t){return a.a.get("".concat(r,"/stages/").concat(t),i)},getCategories:function(){return a.a.get("".concat(r,"/categories"),i)},getCategoryOptions:function(){return a.a.get("".concat(r,"/categoryOptions"),i)},postAttributeSets:function(t){return a.a.post("".concat(r,"/attributeSets"),t,i)},getAttributeSet:function(){return a.a.get("".concat(r,"/attributeSets"),i)},getAttributeSetById:function(t){return a.a.get("".concat(r,"/attributeSets/").concat(t),i)},getAttributeSetByOrgUnit:function(t){return a.a.get("".concat(r,"/attributeSets?orgUnits__id=").concat(t),i)},getAttributeSetDependencies:function(t){return a.a.get("".concat(r,"/attributeSetDepemdencies/").concat(t),i)},postAttributes:function(t){return a.a.post("".concat(r,"/attributes"),t,i)},getAttributes:function(){return a.a.get("".concat(r,"/attributes"),i)},getDataDimensionTypes:function(){return a.a.get("".concat(r,"/dataDimensionTypes"),i)},getTypes:function(){return a.a.get("".concat(r,"/types"),i)},getControls:function(){return a.a.get("".concat(r,"/controls"),i)},getPeriodTypes:function(){return a.a.get("".concat(r,"/periodTypes"),i)},getValidationRules:function(){return a.a.get("".concat(r,"/validationRules"),i)},postValidationRules:function(t){return a.a.post("".concat(r,"/validationRules"),t,i)},postCategoryCombos:function(t){return a.a.post("".concat(r,"/categoryCombos"),t,i)},postCategory:function(t){return a.a.post("".concat(r,"/categories"),t,i)},postCategoryOptions:function(t){return a.a.post("".concat(r,"/categoryOptions"),t,i)},postOptionSets:function(t){return a.a.post("".concat(r,"/optionSets"),t,i)},getCategoryCombosIN:function(t){return a.a.get("".concat(r,"/categoryCombos?").concat(t),i)},getOptionSetsIN:function(t){return a.a.get("".concat(r,"/optionSets?").concat(t),i)},getCategoriesIN:function(t){return a.a.get("".concat(r,"/categories?").concat(t),i)},getCategoryComboCategoriesIN:function(t){return a.a.get("".concat(r,"/category-combo-categories?").concat(t),i)}}}},247:function(t,n,e){"use strict";var o=e(1),a=e(2),c=e(0),r=(e(4),e(3)),i=e(5),u=e(12),s=c.forwardRef((function(t,n){var e=t.absolute,i=void 0!==e&&e,u=t.classes,s=t.className,g=t.component,l=void 0===g?"hr":g,f=t.flexItem,p=void 0!==f&&f,d=t.light,m=void 0!==d&&d,y=t.orientation,b=void 0===y?"horizontal":y,v=t.role,h=void 0===v?"hr"!==l?"separator":void 0:v,S=t.variant,O=void 0===S?"fullWidth":S,E=Object(a.a)(t,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return c.createElement(l,Object(o.a)({className:Object(r.a)(u.root,s,"fullWidth"!==O&&u[O],i&&u.absolute,p&&u.flexItem,m&&u.light,"vertical"===b&&u.vertical),role:h,ref:n},E))}));n.a=Object(i.a)((function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(u.c)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},251:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var o=e(63),a=e(23),c=e(254),r=e(0),i=e.n(r),u=(e(252),e(207)),s=e(189);function g(){var t=Object(u.a)(["\n  display: grid;\n  grid-gap: ",";\n"]);return g=function(){return t},t}function l(){var t=Object(u.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: ",";\n"]);return l=function(){return t},t}var f=s.a.div(l(),(function(t){return t.gap||"1em"})),p=s.a.div(g(),(function(t){return t.gap||"1em"}));function d(t){var n=t.children,e=t.gap,u=t.minWidth,s=void 0===u?500:u,g=Object(c.a)(t,["children","gap","minWidth"]),l=Object(r.useRef)(),d=Object(r.useState)(3),m=Object(a.a)(d,2),y=m[0],b=m[1],v=Object(o.a)(Array(y)).map((function(){return[]}));!function(t,n){t.forEach((function(t,e){return n[e%n.length].push(t)}))}(n,v);return Object(r.useEffect)((function(){return b(Math.ceil(l.current.offsetWidth/s))}),[]),i.a.createElement(f,Object.assign({ref:l,gap:e},g),Object(o.a)(Array(y)).map((function(t,n){return i.a.createElement(p,{key:n,gap:e},v[n])})))}},276:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var o=e(207),a=e(0),c=e.n(a);function r(){var t=Object(o.a)(["\nborder-radius: 8px;\nplace-content: left;\ndisplay: grid;\ncolor: white;\ncursor: pointer;\n//max-width: 50vw;\nbox-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);\nbackground-color: #551a8b;\npadding: 20px;\n"]);return r=function(){return t},t}var i=e(189).a.div(r());function u(t){var n=t.backgroundColor,e=void 0===n?"#551a8b":n,o=t.placeContent,a=void 0===o?"center":o,r=t.color,u=void 0===r?"white":r,s=t.children;return c.a.createElement(i,{style:{backgroundColor:e,placeContent:a,color:u}},s)}},6113:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return v}));var o=e(158),a=e.n(o),c=e(165),r=e(23),i=e(0),u=e.n(i),s=e(29),g=e(53),l=e(247),f=e(140),p=e(150),d=e(251),m=e(276),y=null,b=[];function v(){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),e=n[0],o=n[1];function v(){return(v=Object(c.a)(a.a.mark((function t(){var n,c,i,u,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y=window.location.href.split("/"),y=atob(y[y.length-1]),console.log(y),t.next=5,Promise.all([Object(p.c)().getEntityByID(y),Object(p.c)().getEntityValueSetsByEntityID(y),Object(p.c)().getEntityFormsByEntityID(y)]);case 5:n=t.sent,c=Object(r.a)(n,3),i=c[0],u=c[1],s=c[2],i.data[0],b=s.data,u.data,o(!e);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(i.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),u.a.createElement("div",null,u.a.createElement(g.a,{variant:"h5"},"Detalhes da Entidade"),u.a.createElement(l.a,null),u.a.createElement(f.a,{component:s.b,to:"/entityForm/".concat(btoa(y)),variant:"contained"},"Registrar"),u.a.createElement(g.a,{variant:"h5"},"Formularios"),u.a.createElement(g.a,{variant:"h5"},"Entidades Registadas"),b.length>0&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{minWidth:300},b.map((function(t,n){return u.a.createElement(m.a,{key:n,placeContent:"left"},u.a.createElement(s.b,{style:{textDecoration:"none",color:"#fff",position:"relative",top:"0px"},to:"/entityForm/".concat(btoa(t.id))},u.a.createElement(u.a.Fragment,null,u.a.createElement(g.a,{variant:"button"},t.displayName),u.a.createElement(g.a,null,t.description))))})))))}}}]);
//# sourceMappingURL=29.1c4a49e5.chunk.js.map