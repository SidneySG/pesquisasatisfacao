(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[33],{152:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return u}));var a=n(168),o=n.n(a);function r(){return window.location.origin.includes("localhost")?"http://localhost:8000":window.location.origin}var c=r()+"/api",i={headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}};function u(){return{getOrganisationUnits:function(){return o.a.get("".concat(c,"/orgUnits"),i)},getOrgUnitVisibilities:function(){return o.a.get("".concat(c,"/orgUnitVisibilities"),i)},deleteOrgUnitByID:function(t){return o.a.delete("".concat(c,"/orgUnits/").concat(t),i)},getFieldsBySeccionId:function(t){return o.a.get("".concat(c,"/fieldsBysectionID?section_id=").concat(t),i)},getFormByID:function(t){return o.a.get("".concat(c,"/forms?id=").concat(t),i)},getForms:function(){return o.a.get("".concat(c,"/forms"),i)},postQuickForm:function(t){return o.a.post("".concat(c,"/quickForm"),t,i)},postForm:function(t){return o.a.post("".concat(c,"/forms"),t,i)},getFormByOrgUnit:function(t){return o.a.get("".concat(c,"/forms?attribute_set.org_units.id=").concat(t),i)},getFormSectionsByFormID:function(t){return o.a.get("".concat(c,"/sectionsByFormID?form_id=").concat(t),i)},getEntityByID:function(t){return o.a.get("".concat(c,"/entities?id=").concat(t),i)},getEntities:function(t){return o.a.get("".concat(c,"/entities"),i)},getEntityFormsByID:function(t){return o.a.get("".concat(c,"/entityForms?id=").concat(t),i)},getEntityFormsByEntityID:function(t){return o.a.get("".concat(c,"/entityForms?entity__id=").concat(t),i)},getEntityForms:function(){return o.a.get("".concat(c,"/entityForms"),i)},postEntityForm:function(t){return o.a.post("".concat(c,"/entityForms"),t,i)},getEntityDependencies:function(t){return o.a.get("".concat(c,"/entities-depemdencies/").concat(t),i)},getSectionsByIDs:function(t){return o.a.get("".concat(c,"/sections?").concat(t.map((function(t){return"id_in=".concat(t)})).join("&")),i)},getCircleByPoint:function(t,e){return o.a.get("".concat(c,"/getCircleByPoint?lat=").concat(t,"&lng=").concat(e),i)},getOrgUnitsWithinRadius:function(t,e){return o.a.get("".concat(c,"/orgUnitsWithinRadius?lat=").concat(t,"&lng=").concat(e,"&radius=100"),i)},postOrganisationUnitsProximity:function(t){return o.a.post("".concat(c,"/orgUnitsProximity"),t,i)},getOrganisationUnitsByIDs:function(t){return o.a.get("".concat(c,"/orgUnits?orgUnitType=Institui\xe7\xe3o&").concat(t.map((function(t){return"id__in=".concat(t)})).join("&")),i)},getOrganisationUnitByID:function(t){return o.a.get("".concat(c,"/orgUnits?id=").concat(t),i)},postOrganisationUnits:function(t){return o.a.post("".concat(c,"/orgUnits"),t,i)},getOrganisationUnitTypes:function(){return o.a.get("".concat(c,"/orgUnitTypes"),i)},getOrganisationUnitLevels:function(){return o.a.get("".concat(c,"/orgUnitLevels"),i)},getValueTypes:function(){return o.a.get("".concat(c,"/types"),i)},getCategoryCombos:function(){return o.a.get("".concat(c,"/categoryCombos"),i)},getCategoryCombosByFilter:function(t){return o.a.get("".concat(c,"/categoryCombos?").concat(t),i)},getCategoryComboCategories:function(){return o.a.get("".concat(c,"/categoryComboCategories"),i)},getOptionSets:function(){return o.a.get("".concat(c,"/optionSets"),i)},getOptions:function(){return o.a.get("".concat(c,"/options"),i)},postOptions:function(t){return o.a.post("".concat(c,"/options"),t,i)},getSections:function(){return o.a.get("".concat(c,"/sections"),i)},postSection:function(t){return o.a.post("".concat(c,"/sections"),t,i)},postStage:function(t){return o.a.post("".concat(c,"/stages"),t,i)},postAttributeValueSet:function(t){return o.a.post("".concat(c,"/valueSets"),t,i)},deleteAttributeSetByID:function(t){return o.a.delete("".concat(c,"/attributeSets/").concat(t),i)},deleteFormByID:function(t){return o.a.delete("".concat(c,"/forms/").concat(t),i)},getValueSets:function(){return o.a.get("".concat(c,"/valueSets"),i)},getSimpleValueSets:function(t){return o.a.get("".concat(c,"/simple_value_sets?attributeSet__id=").concat(t),i)},getValueSetByID:function(t){return o.a.get("".concat(c,"/valueSets?id=").concat(t),i)},getValueSetByAttributeSetID:function(t){return o.a.get("".concat(c,"/valueSets?attributeSet__id=").concat(t),i)},getEntityValueSetsByEntityID:function(t){return o.a.get("".concat(c,"/entityValueSets?entity__id=").concat(t),i)},postEntityValueSet:function(t){return o.a.post("".concat(c,"/entityValueSets"),t,i)},getAttributeValueSets:function(t){return o.a.get("".concat(c,"/attributeValueSets?attributeSet__id=").concat(t),i)},getAttributeValueSet:function(t){return o.a.get("".concat(c,"/attributeValueSets/").concat(t),i)},getStages:function(){return o.a.get("".concat(c,"/stages"),i)},getStage:function(t){return o.a.get("".concat(c,"/stages/").concat(t),i)},getCategories:function(){return o.a.get("".concat(c,"/categories"),i)},getCategoryOptions:function(){return o.a.get("".concat(c,"/categoryOptions"),i)},postAttributeSets:function(t){return o.a.post("".concat(c,"/attributeSets"),t,i)},getAttributeSet:function(){return o.a.get("".concat(c,"/attributeSets"),i)},getAttributeSetById:function(t){return o.a.get("".concat(c,"/attributeSets/").concat(t),i)},getAttributeSetByOrgUnit:function(t){return o.a.get("".concat(c,"/attributeSets?orgUnits__id=").concat(t),i)},getAttributeSetDependencies:function(t){return o.a.get("".concat(c,"/attributeSetDepemdencies/").concat(t),i)},postAttributes:function(t){return o.a.post("".concat(c,"/attributes"),t,i)},getAttributes:function(){return o.a.get("".concat(c,"/attributes"),i)},getDataDimensionTypes:function(){return o.a.get("".concat(c,"/dataDimensionTypes"),i)},getTypes:function(){return o.a.get("".concat(c,"/types"),i)},getControls:function(){return o.a.get("".concat(c,"/controls"),i)},getPeriodTypes:function(){return o.a.get("".concat(c,"/periodTypes"),i)},getValidationRules:function(){return o.a.get("".concat(c,"/validationRules"),i)},postValidationRules:function(t){return o.a.post("".concat(c,"/validationRules"),t,i)},postCategoryCombos:function(t){return o.a.post("".concat(c,"/categoryCombos"),t,i)},postCategory:function(t){return o.a.post("".concat(c,"/categories"),t,i)},postCategoryOptions:function(t){return o.a.post("".concat(c,"/categoryOptions"),t,i)},postOptionSets:function(t){return o.a.post("".concat(c,"/optionSets"),t,i)},getCategoryCombosIN:function(t){return o.a.get("".concat(c,"/categoryCombos?").concat(t),i)},getOptionSetsIN:function(t){return o.a.get("".concat(c,"/optionSets?").concat(t),i)},getCategoriesIN:function(t){return o.a.get("".concat(c,"/categories?").concat(t),i)},getCategoryComboCategoriesIN:function(t){return o.a.get("".concat(c,"/category-combo-categories?").concat(t),i)}}}},270:function(t,e,n){"use strict";var a=n(1),o=n(2),r=n(0),c=(n(4),n(3)),i=n(5),u=r.forwardRef((function(t,e){var n=t.classes,i=t.className,u=Object(o.a)(t,["classes","className"]);return r.createElement("div",Object(a.a)({className:Object(c.a)(n.root,i),ref:e},u))}));u.muiName="ListItemSecondaryAction",e.a=Object(i.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(u)},6121:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));var a=n(63),o=n(160),r=n.n(o),c=n(166),i=n(23),u=n(0),s=n.n(u),l=n(80),g=n(124),m=n(126),f=n(127),d=n(270),p=n(130),y=n(140),b=n(53),S=n(142),E=n(248),h=n(141),O=n(82),C=n(192),v=n(191),U=n(152),D=[],j=[],B={};function F(t,e){return t.filter((function(t,n){return n!==e}))}function w(){var t=Object(u.useState)({}),e=Object(i.a)(t,2),n=e[0],o=e[1],w=Object(u.useState)(!0),I=Object(i.a)(w,2),N=I[0],_=I[1],A=Object(u.useState)([]),V=Object(i.a)(A,2),T=V[0],x=V[1],k=Object(u.useState)([]),L=Object(i.a)(k,2),R=L[0],P=L[1],W=Object(u.useState)(""),q=Object(i.a)(W,2),z=q[0],J=q[1],K=Object(u.useState)([]),M=Object(i.a)(K,2),Q=M[0],Y=M[1],G=Object(u.useState)([]),H=Object(i.a)(G,2),X=H[0],Z=H[1],$=0;Object(u.useEffect)((function(){function t(){return(t=Object(c.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.location.href.split("/"),e=atob(e[e.length-1]),t.next=4,Promise.all([Object(U.c)().getOrganisationUnits(),Object(U.c)().getAttributes(),Object(U.c)().getAttributeSetById(e)]);case 4:return n=t.sent,B=n[2].data,D=n[0].data,t.next=9,n[1].data;case 9:j=t.sent,P(B.attributes.map((function(t){return t.id}))),o({name:B.name,displayName:B.displayName,shortName:B.shortName}),_(!1);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var tt={dataElementsUp:function(t){P([].concat(Object(a.a)(R),[t])),x(F(T,t))},dataElementsDown:function(t){x(T.concat(t)),P(F(R,t))},orgUnitsUp:function(t){Z([].concat(Object(a.a)(R),[t])),Y(F(T,t))},orgUnitsDown:function(t){Y(Q.concat(t)),Z(F(X,t))}};function et(t){var e=t.target.value;$&&clearTimeout($),$=setTimeout((function(){J(e)}),700)}var nt=function(t,e){return s.a.createElement(l.a,{elevation:0,style:{border:"1px solid #eee",width:"100%",height:280,overflow:"auto"},square:!0},s.a.createElement(g.a,{dense:!0,component:"div",role:"list"},t.map((function(t,n){return s.a.createElement(m.a,{onDoubleClick:function(){return tt[e](t.id)},key:n,role:"listitem",button:!0},s.a.createElement(f.a,{primary:e.includes("Down")?"".concat(n+1," - ").concat(t.name):t.name}),s.a.createElement(d.a,null,e.includes("Up")?s.a.createElement(p.a,{color:"primary",size:"small",onClick:function(){return tt[e](t.id)}},s.a.createElement(O.g,null)):s.a.createElement(p.a,{color:"secondary",size:"small",onClick:function(){return tt[e](t.id)}},s.a.createElement(O.f,null))))})),s.a.createElement(m.a,null)))};return s.a.createElement(s.a.Fragment,null,!N&&s.a.createElement(y.a,null,s.a.createElement(b.a,{variant:"h6"},"Edit Attribute set"),s.a.createElement("br",null),s.a.createElement(C.b,{initialValues:n,onSubmit:function(t,e){var n=e.setSubmitting;function a(){return(a=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.dataElements=R.map((function(t){return{id:t}})),t.next=3,Promise.resolve(Object(U.c)().postDataSet(e));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(t){a.apply(this,arguments)}(t),setTimeout((function(){n(!1)}),500)},validationSchema:v.a().shape({name:v.b().required("Campo obrigat\xf3rio"),shortName:v.b().required("Campo obrigat\xf3rio")})},(function(t){var e=t.values,n=t.touched,a=t.errors,o=(t.dirty,t.isSubmitting,t.handleChange),r=t.handleBlur;t.handleSubmit,t.handleReset;return s.a.createElement(C.a,null,s.a.createElement(S.a,{container:!0,spacing:2},s.a.createElement(S.a,{item:!0,sm:12},s.a.createElement(E.a,{type:"text",variant:"outlined",error:a.name&&n.name,helperText:a.name,onChange:o,onBlur:r,value:e.name,margin:"dense",id:"name",fullWidth:!0,label:"Name (*)"})),s.a.createElement(S.a,{item:!0,sm:12},s.a.createElement(E.a,{type:"text",variant:"outlined",error:a.displayName&&n.displayName,helperText:a.displayName,onChange:o,onBlur:r,value:e.displayName,margin:"dense",id:"displayName",fullWidth:!0,label:"Display Name"})),s.a.createElement(S.a,{item:!0,sm:12},s.a.createElement(E.a,{type:"text",error:a.shortName&&n.shortName,helperText:a.shortName,onChange:o,onBlur:r,variant:"outlined",value:e.shortName,margin:"dense",id:"shortName",fullWidth:!0,label:"Shortname (*)"})),s.a.createElement(S.a,{item:!0,sm:12},s.a.createElement(E.a,{onChange:o,onKeyDown:et,onBlur:r,variant:"outlined",name:"dataElemetFilter",margin:"dense",value:e.dataElemetFilter,fullWidth:!0,id:"dataElemetFilter",label:"Filtrar elementos de dados"})),s.a.createElement(S.a,{item:!0,sm:6},nt(j.filter((function(t){return!R.includes(t.id)})).filter((function(t){return t.name.toLowerCase().includes(z.toLowerCase())})),"dataElementsUp")),s.a.createElement(S.a,{item:!0,sm:6},nt(R.map((function(t){return j.filter((function(e){return e.id==t}))[0]})),"dataElementsDown")),s.a.createElement(S.a,{item:!0,sm:12},s.a.createElement(E.a,{onChange:o,onKeyDown:et,onBlur:r,variant:"outlined",name:"dataElemetFilter",margin:"dense",value:e.dataElemetFilter,fullWidth:!0,id:"dataElemetFilter",label:"Filtrar institui\xe7\xf5es"})),s.a.createElement(S.a,{item:!0,sm:6},nt(D.filter((function(t){return!X.includes(t.id)})).filter((function(t){return t.name.toLowerCase().includes(z.toLowerCase())})),"orgUnitsUp")),s.a.createElement(S.a,{item:!0,sm:6},nt(X.map((function(t){return D.filter((function(e){return e.id==t}))[0]})),"orgUnitsDown")),s.a.createElement(S.a,{item:!0,sm:12,style:{paddingTop:"10px"}},s.a.createElement(h.a,null,"Cancel")," \xa0\xa0\xa0",s.a.createElement(h.a,{disableElevation:!0,type:"submit",color:"primary",variant:"contained"},"Save"))))}))),s.a.createElement("br",null))}}}]);
//# sourceMappingURL=33.bbbf9e50.chunk.js.map