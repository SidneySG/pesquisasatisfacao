(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[16],{238:function(e,t,a){"use strict";var n=a(1),r=a(30),i=a(2),l=a(0),o=(a(6),a(3)),c=a(81),s=a(27),u=a(5),d=a(197),m=l.forwardRef((function(e,t){var a=e.autoFocus,u=e.checked,m=e.checkedIcon,p=e.classes,b=e.className,f=e.defaultChecked,h=e.disabled,g=e.icon,y=e.id,v=e.inputProps,E=e.inputRef,x=e.name,O=e.onBlur,j=e.onChange,k=e.onFocus,w=e.readOnly,S=e.required,C=e.tabIndex,N=e.type,A=e.value,D=Object(i.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),B=Object(c.a)({controlled:u,default:Boolean(f),name:"SwitchBase",state:"checked"}),W=Object(r.a)(B,2),L=W[0],P=W[1],I=Object(s.a)(),z=h;I&&"undefined"===typeof z&&(z=I.disabled);var F="checkbox"===N||"radio"===N;return l.createElement(d.a,Object(n.a)({component:"span",className:Object(o.a)(p.root,b,L&&p.checked,z&&p.disabled),disabled:z,tabIndex:null,role:void 0,onFocus:function(e){k&&k(e),I&&I.onFocus&&I.onFocus(e)},onBlur:function(e){O&&O(e),I&&I.onBlur&&I.onBlur(e)},ref:t},D),l.createElement("input",Object(n.a)({autoFocus:a,checked:u,defaultChecked:f,className:p.input,disabled:z,id:F&&y,name:x,onChange:function(e){var t=e.target.checked;P(t),j&&j(e,t)},readOnly:w,ref:E,required:S,tabIndex:C,type:N,value:A},v)),L?m:g)}));t.a=Object(u.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},252:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),l=(a(6),a(3)),o=a(5),c=i.forwardRef((function(e,t){var a=e.classes,o=e.className,c=Object(r.a)(e,["classes","className"]);return i.createElement("div",Object(n.a)({className:Object(l.a)(a.root,o),ref:t},c))}));c.muiName="ListItemSecondaryAction",t.a=Object(o.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(c)},285:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),l=(a(6),a(3)),o=a(27),c=a(5),s=a(55),u=a(7),d=i.forwardRef((function(e,t){e.checked;var a=e.classes,c=e.className,d=e.control,m=e.disabled,p=(e.inputRef,e.label),b=e.labelPlacement,f=void 0===b?"end":b,h=(e.name,e.onChange,e.value,Object(r.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),g=Object(o.a)(),y=m;"undefined"===typeof y&&"undefined"!==typeof d.props.disabled&&(y=d.props.disabled),"undefined"===typeof y&&g&&(y=g.disabled);var v={disabled:y};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof d.props[t]&&"undefined"!==typeof e[t]&&(v[t]=e[t])})),i.createElement("label",Object(n.a)({className:Object(l.a)(a.root,c,"end"!==f&&a["labelPlacement".concat(Object(u.a)(f))],y&&a.disabled),ref:t},h),i.cloneElement(d,v),i.createElement(s.a,{component:"span",className:Object(l.a)(a.label,y&&a.disabled)},p))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(d)},296:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),l=(a(6),a(3)),o=a(238),c=a(72),s=Object(c.a)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(c.a)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=a(16),m=Object(c.a)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(7),b=a(5),f=i.createElement(u,null),h=i.createElement(s,null),g=i.createElement(m,null),y=i.forwardRef((function(e,t){var a=e.checkedIcon,c=void 0===a?f:a,s=e.classes,u=e.color,d=void 0===u?"secondary":u,m=e.icon,b=void 0===m?h:m,y=e.indeterminate,v=void 0!==y&&y,E=e.indeterminateIcon,x=void 0===E?g:E,O=e.inputProps,j=e.size,k=void 0===j?"medium":j,w=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=v?x:b,C=v?x:c;return i.createElement(o.a,Object(n.a)({type:"checkbox",classes:{root:Object(l.a)(s.root,s["color".concat(Object(p.a)(d))],v&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:d,inputProps:Object(n.a)({"data-indeterminate":v},O),icon:i.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===k?k:S.props.fontSize}),checkedIcon:i.cloneElement(C,{fontSize:void 0===C.props.fontSize&&"small"===k?k:C.props.fontSize}),ref:t},w))}));t.a=Object(b.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(y)},317:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(244),r=a(225),i=a.n(r),l=a(79),o=a(226),c=a(15),s=a(0),u=a.n(s),d=a(202),m=a(55),p=a(339),b=a(253),f=a.n(b),h=a(56),g=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],y=!0,v=[],E=[];function x(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,r=e.isDesktop,b=void 0!==r&&r,x=Object(s.useState)(!0),k=Object(c.a)(x,2),w=k[0],S=k[1],C=Object(s.useState)({data:[]}),N=Object(c.a)(C,2),A=N[0],D=N[1];return Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var a,r,o,c,s,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y&&S(!0),e.next=3,Promise.resolve(Object(h.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n));case 3:a=e.sent,r={},a.data.headers.forEach((function(e){r[e.uid]={displayName:e.displayName,attribute:e.attribute}})),o=a.data.headers.map((function(e,n){return{label:e.displayName,name:"true"==t.useDisplayNameAsLabel?e.displayName:g[n],value:a.data.values[e.uid]}})),"true"==t.groupByAttributes&&(c=a.data.headers.map((function(e){return e.uid.split("-")[1]})),c=new Set(c),c=(c=Array.from(c)).map((function(e){return{label:a.data.headers.filter((function(t){return t.uid.split("-")[1]==e}))[0].displayName,value:e}})),s=a.data.headers.map((function(e){return e.attributeUID})),s=new Set(s),s=Array.from(s),E=c,s=s.map((function(e){return{label:a.data.headers.filter((function(t){return t.attributeUID==e}))[0].attribute,value:e}})),v=[["product"].concat(Object(l.a)(c.map((function(e){return e.label}))))].concat(Object(l.a)(s.map((function(e){return[e.label].concat(Object(l.a)(c.map((function(t){return Boolean(a.data.values[e.value+"-"+t.value])?a.data.values[e.value+"-"+t.value]:0}))))})))),D({title:t.displayName,attribute:" ",type:t.component,data:v})),"true"==t.groupByOptions?(u=a.data.headers.map((function(e){return e.uid.split("-")[1]})),u=new Set(u),u=(u=Array.from(u)).map((function(e){return{label:a.data.headers.filter((function(t){return t.uid.split("-")[1]==e}))[0].displayName,value:e}})),d=a.data.headers.map((function(e){return e.attributeUID})),d=new Set(d),d=Array.from(d),E=d,d=d.map((function(e){return{label:a.data.headers.filter((function(t){return t.attributeUID==e}))[0].attribute,value:e}})),v=[["product"].concat(Object(l.a)(d.map((function(e){return e.label}))))].concat(Object(l.a)(u.map((function(e){return[e.label].concat(Object(l.a)(d.map((function(t){return Boolean(a.data.values[t.value+"-"+e.value])?a.data.values[t.value+"-"+e.value]:0}))))})))),console.log(v),D({title:t.displayName,attribute:" ",type:t.component,data:v})):("ASC"==t.sort&&o.sort((function(e,t){return e.value>t.value?1:-1})),"DESC"==t.sort&&o.sort((function(e,t){return e.value<t.value?1:-1})),D({title:t.displayName,attribute:" ",type:t.component,data:o})),S(!1),y=!1;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),w?u.a.createElement("div",{style:{textAlign:"center"}},u.a.createElement(d.a,null),u.a.createElement("br",null)):u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{style:t.height.includes("px")?{height:t.height,width:"100%"}:{width:"100%"},option:"true"==t.groupByAttributes||"true"==t.groupByOptions?j(A,A.type):O(A,A.type)}),u.a.createElement("ul",{style:{listStyle:"none",display:"true"==t.showLegend?"block":"none"}},A.data.map((function(e,t){return u.a.createElement("li",{key:t},u.a.createElement(m.a,{key:t,variant:"button",style:{textTransform:"none"}},g[t],": ",e.label))}))),!b&&u.a.createElement(u.a.Fragment,null,u.a.createElement("br",null),u.a.createElement(p.a,null),u.a.createElement("br",null)))}function O(e,t){return Object(n.a)({title:{text:e.title,subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"pie"==t?"{b} : {c} ({d}%)":"{b} : {c}"}},function(e,t){return"bar"==t?{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:e.data.map((function(e){return e.name}))}}:"pie"!==t?{xAxis:{data:e.data.map((function(e){return e.name}))},yAxis:{}}:void 0}(e,t),{series:[{name:e.attribute,type:"colls"==t?"bar":t,center:["50%","60%"],label:{show:!0,position:"bar"==t?"right":"top",formatter:"pie"==t?"{b}({@2012})":"{c}"},data:e.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}function j(e,t){return{title:{text:e.title,subtext:"",x:"center"},tooltip:{},dataset:{source:e.data},xAxis:{type:"category"},yAxis:{},series:E.map((function(e){return{type:"bar"}}))}}},333:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a(244),r=a(225),i=a.n(r),l=a(226),o=a(15),c=a(0),s=a.n(c),u=a(202),d=a(55),m=a(339),p=a(253),b=a.n(p),f=a(56),h=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],g=!0;function y(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,r=e.isDesktop,p=void 0!==r&&r,y=Object(c.useState)(!0),E=Object(o.a)(y,2),x=E[0],O=E[1],j=Object(c.useState)([]),k=Object(o.a)(j,2),w=k[0],S=k[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var a,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g&&O(!0),e.next=3,Promise.resolve(Object(f.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n));case 3:a=e.sent,r={},a.data.headers.forEach((function(e){r[e.uid]={displayName:e.displayName,attribute:e.attribute}})),l=a.data.headers.map((function(e,t){return{label:e.displayName,name:h[t],value:a.data.values[e.uid]}})),S({title:t.displayName,attribute:" ",type:t.component,data:l}),O(!1),g=!1;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),x?s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement(u.a,null),s.a.createElement("br",null)):s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{option:v(w,w.type)}),s.a.createElement("ul",{style:{listStyle:"none"}},w.data.map((function(e,t){return s.a.createElement("li",{key:t},s.a.createElement(d.a,{key:t,variant:"button",style:{textTransform:"none"}},h[t],": ",e.label))}))),!p&&s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement(m.a,null),s.a.createElement("br",null)))}function v(e,t){return Object(n.a)({title:{text:e.title,subtext:"",x:"center"},tooltip:{trigger:"item",formatter:"pie"==t?"{b} : {c} ({d}%)":"{b} : {c}"}},function(e,t){return"bar"==t?{xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:e.data.map((function(e){return e.name}))}}:"pie"!==t?{xAxis:{data:e.data.map((function(e){return e.name}))},yAxis:{}}:void 0}(e,t),{series:[{name:e.attribute,type:"colls"==t?"bar":t,center:["50%","60%"],label:{show:!0,position:"bar"==t?"right":"top",formatter:"pie"==t?"{b}({@2012})":"{c}"},data:e.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}},334:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(225),r=a.n(n),i=a(226),l=a(15),o=a(0),c=a.n(o),s=a(202),u=a(339),d=a(253),m=a.n(d),p=a(56),b={dias:["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"],horas:["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"]},f=!0;function h(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,d=e.isDesktop,b=void 0!==d&&d,h=Object(o.useState)(!0),y=Object(l.a)(h,2),v=y[0],E=y[1],x=Object(o.useState)([]),O=Object(l.a)(x,2),j=O[0],k=O[1];return Object(o.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f&&E(!0),e.next=3,Promise.resolve(Object(p.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n,t.agregationType,"true"));case 3:a=e.sent,i=[],Object.keys(a.data).forEach((function(e){i.push([Number(e.split("-")[0]),Number(e.split("-")[1]),a.data[e]])})),k({title:t.displayName,attribute:" ",type:t.component,data:i}),E(!1),f=!1;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),v?c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(s.a,null),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{style:t.height.includes("px")?{height:t.height,width:"100%"}:{width:"100%"},option:g(j)}),!b&&c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement(u.a,null),c.a.createElement("br",null)))}function g(e){return{title:{text:e.title,x:"center"},tooltip:{position:"top",formatter:function(e){return b.horas[e.value[1]]+": "+e.value[2]}},grid:{left:2,bottom:10,right:10,containLabel:!0},xAxis:{type:"category",data:b.dias,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:b.horas,axisLine:{show:!1}},series:[{type:"scatter",symbolSize:function(e){return 4*e[2]},data:e.data,animationDelay:function(e){return 5*e}}]}}},335:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(225),r=a.n(n),i=a(226),l=a(15),o=a(0),c=a.n(o),s=a(202),u=a(339),d=a(253),m=a.n(d),p=a(56),b=[],f={dias:["Segunda","Ter\xe7a","Quarta","Quinta","Sexta","S\xe1bado","Domingo"],horas:["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"]},h=!0;function g(e){var t=e.dashboard,a=e.period,n=void 0===a?null:a,d=e.isDesktop,g=void 0!==d&&d,v=Object(o.useState)(!0),E=Object(l.a)(v,2),x=E[0],O=E[1],j=Object(o.useState)([]),k=Object(l.a)(j,2),w=k[0],S=k[1];return Object(o.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h&&O(!0),e.next=3,Promise.resolve(Object(p.c)().getAgregatedData(t.attributeSet,t.attributes,t.orgUnits,"yearly",t.dataCleaners,n,t.agregationType,"false"));case 3:a=e.sent,i=[],b=[],a.data.headers.forEach((function(e){b[e.uid]={displayName:e.displayName,attribute:e.attribute},i[e.uid]=[]})),Object.keys(a.data.values).forEach((function(e){i[e.split("-")[0]+"-"+e.split("-")[1]].push([Number(e.split("-")[3]),Number(e.split("-")[2]),a.data.values[e]])})),S({ks:a.data.headers.map((function(e){return e.uid})),title:t.displayName,horas:f.horas,dias:f.dias,attribute:" ",type:"scatter",data:i}),O(!1),h=!1;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]),x?c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(s.a,null),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{style:t.height.includes("px")?{height:t.height,width:"100%"}:{width:"100%"},option:y(w)}),!g&&c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement(u.a,null),c.a.createElement("br",null)))}function y(e){return{title:{text:e.title,x:"center"},legend:{data:e.ks.map((function(e){return b[e].displayName})),bottom:0},tooltip:{position:"bottom",formatter:function(t){return e.horas[t.value[1]]+": "+t.value[2]}},grid:{left:2,bottom:45,right:10,containLabel:!0},xAxis:{type:"category",data:e.horas,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:e.dias,axisLine:{show:!1}},series:e.ks.map((function(t,a){return{name:b[t].displayName,type:"scatter",symbolSize:function(e){return 4*e[2]},data:e.data[t],animationDelay:function(e){return 5*e}}}))}}},340:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(11),l=a(0),o=(a(6),a(3)),c=a(5),s=a(7),u=a(157),d=a(201),m=a(151),p=a(19),b=a(107),f={enter:p.b.enteringScreen,exit:p.b.leavingScreen},h=l.forwardRef((function(e,t){var a=e.BackdropProps,i=e.children,c=e.classes,p=e.className,h=e.disableBackdropClick,g=void 0!==h&&h,y=e.disableEscapeKeyDown,v=void 0!==y&&y,E=e.fullScreen,x=void 0!==E&&E,O=e.fullWidth,j=void 0!==O&&O,k=e.maxWidth,w=void 0===k?"sm":k,S=e.onBackdropClick,C=e.onClose,N=e.onEnter,A=e.onEntered,D=e.onEntering,B=e.onEscapeKeyDown,W=e.onExit,L=e.onExited,P=e.onExiting,I=e.open,z=e.PaperComponent,F=void 0===z?b.a:z,T=e.PaperProps,R=void 0===T?{}:T,U=e.scroll,M=void 0===U?"paper":U,H=e.TransitionComponent,$=void 0===H?m.a:H,G=e.transitionDuration,K=void 0===G?f:G,X=e.TransitionProps,Y=e["aria-describedby"],Q=e["aria-labelledby"],V=Object(r.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),q=l.useRef();return l.createElement(u.a,Object(n.a)({className:Object(o.a)(c.root,p),BackdropComponent:d.a,BackdropProps:Object(n.a)({transitionDuration:K},a),closeAfterTransition:!0,disableBackdropClick:g,disableEscapeKeyDown:v,onEscapeKeyDown:B,onClose:C,open:I,ref:t},V),l.createElement($,Object(n.a)({appear:!0,in:I,timeout:K,onEnter:N,onEntering:D,onEntered:A,onExit:W,onExiting:P,onExited:L,role:"none presentation"},X),l.createElement("div",{className:Object(o.a)(c.container,c["scroll".concat(Object(s.a)(M))]),onMouseUp:function(e){e.target===e.currentTarget&&e.target===q.current&&(q.current=null,S&&S(e),!g&&C&&C(e,"backdropClick"))},onMouseDown:function(e){q.current=e.target}},l.createElement(F,Object(n.a)({elevation:24,role:"dialog","aria-describedby":Y,"aria-labelledby":Q},R,{className:Object(o.a)(c.paper,c["paperScroll".concat(Object(s.a)(M))],c["paperWidth".concat(Object(s.a)(String(w)))],R.className,x&&c.paperFullScreen,j&&c.paperFullWidth)}),i))))}));t.a=Object(c.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(h)},341:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),l=(a(6),a(3)),o=a(5),c=i.forwardRef((function(e,t){var a=e.classes,o=e.className,c=e.dividers,s=void 0!==c&&c,u=Object(r.a)(e,["classes","className","dividers"]);return i.createElement("div",Object(n.a)({className:Object(l.a)(a.root,o,s&&a.dividers),ref:t},u))}));t.a=Object(o.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(c)},456:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),l=(a(6),a(3)),o=a(5),c=i.forwardRef((function(e,t){var a=e.disableSpacing,o=void 0!==a&&a,c=e.classes,s=e.className,u=Object(r.a)(e,["disableSpacing","classes","className"]);return i.createElement("div",Object(n.a)({className:Object(l.a)(c.root,s,!o&&c.spacing),ref:t},u))}));t.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(c)},6667:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Y}));var n=a(244),r=a(225),i=a.n(r),l=a(226),o=a(15),c=a(0),s=a.n(c),u=a(12),d=a(107),m=a(192),p=a(149),b=a(194),f=a(252),h=a(197),g=a(217),y=a(55),v=a(212),E=a(104),x=a(209),O=a(213),j=a(216),k=a(340),w=a(341),S=a(456),C=a(285),N=a(296),A=a(6687),D=a(110),B=a(56),W=a(317),L=a(333),P=a(334),I=a(335),z=[],F=[],T=[],R=[],U=[],M=[],H={},$="",G=[{label:"Colunas",value:"colls"},{label:"Barras",value:"bar"},{label:"Linhas",value:"line"},{label:"Pizza",value:"pie"},{label:"Scatter",value:"scatter"}],K={name:"",title:"",displayName:"",description:"",countEntries:"false",sort:"",useDisplayNameAsLabel:"false",showLegend:"true",height:"",groupByAttributes:"false",groupByOptions:"false"},X=[];function Y(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),r=a[0],Y=a[1],Q=Object(c.useState)({changeRoute:!1,to:""}),V=Object(o.a)(Q,2),q=V[0],J=V[1],Z=Object(c.useState)({label:"Barras",value:"bar"}),_=Object(o.a)(Z,2),ee=_[0],te=_[1],ae=Object(c.useState)(!0),ne=Object(o.a)(ae,2),re=ne[0],ie=ne[1],le=Object(c.useState)(!1),oe=Object(o.a)(le,2),ce=oe[0],se=oe[1],ue=Object(c.useState)(!1),de=Object(o.a)(ue,2),me=de[0],pe=de[1],be=s.a.useState(null),fe=Object(o.a)(be,2),he=fe[0],ge=fe[1],ye=function(e){te(e),ge(null)};function ve(){return(ve=Object(l.a)(i.a.mark((function e(){var t,a,n,l,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(B.c)().getAttributeSet(),Object(B.c)().getOrganisationUnits(),Object(B.c)().getDataCleaners()]);case 2:t=e.sent,a=Object(o.a)(t,3),n=a[0],l=a[1],c=a[2],M=n.data,X=c.data,F=l.data,Y(!r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){z=[],F=[],M=[],X=[],H={},T=[],function(){ve.apply(this,arguments)}()}),[]);var Ee={addAttribute:function(e){T.push(e),Y(!r)},removeAttribute:function(e){T=T.filter((function(t){return t!==e})),Y(!r)},addOrgUnit:function(e){U.push(e),Y(!r)},removeOrgUnit:function(e){U=U.filter((function(t){return t!==e})),Y(!r)}},xe=function(e,t){return s.a.createElement(d.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},s.a.createElement(m.a,{dense:!0,component:"div",role:"list"},e.map((function(e,a){return s.a.createElement(p.a,{onDoubleClick:function(){return Ee[t](e.id)},key:a,role:"listitem",button:!0},s.a.createElement(b.a,{primary:e.displayName}),s.a.createElement(f.a,null,s.a.createElement(h.a,{color:"secondary",size:"small",onClick:function(){Ee[t](e.id)}},s.a.createElement(D.f,null))))})),s.a.createElement(p.a,null)))};function Oe(){return(Oe=Object(l.a)(i.a.mark((function e(){var t,a,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ie(!0),t=[],a=[],H.attributes.forEach((function(e){T.includes(e.id)&&t.push(e)})),F.forEach((function(e){U.includes(e.id)&&a.push(e)})),l=Object.keys(R).map((function(e){return e+"("+R[e]+")"})).join(","),K=Object(n.a)({},K,{component:ee.value,attributeSet:H,attributes:t,orgUnits:a,dataCleaners:l}),"weekdaysHours"==$&&(K.agregationType=$),ie(!1),Y(!r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(){return(je=Object(l.a)(i.a.mark((function t(){var a,r,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],r=[],H.attributes.forEach((function(e){T.includes(e.id)&&a.push(e)})),F.forEach((function(e){U.includes(e.id)&&r.push(e)})),l=Object.keys(R).map((function(e){return e+"("+R[e]+")"})).join(","),K=Object(n.a)({},K,{component:ee.value,attributeSet:H,attributes:a,orgUnits:r,dataCleaners:l}),"weekdaysHours"==$&&(K.agregationType=$),t.next=9,Promise.resolve(Object(B.c)().postDashboards(K));case 9:e.messageBox("Dashboard criado com exito!"),J({to:"dashboards",changeRoute:!0});case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return q.changeRoute?s.a.createElement(u.a,{to:q.to}):s.a.createElement(g.a,{display:"flex",style:{paddingTop:"10px"}},s.a.createElement(g.a,{flexGrow:1},s.a.createElement(g.a,{display:"flex"},s.a.createElement(g.a,{flexGrow:1},s.a.createElement(y.a,{variant:"h6",color:"initial"},"Create dashboard element"),s.a.createElement("br",null),s.a.createElement("br",null)),s.a.createElement(g.a,null,s.a.createElement(v.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){ge(e.currentTarget)}},ee.label)," \xa0",s.a.createElement(E.a,{id:"simple-menu",anchorEl:he,keepMounted:!0,open:Boolean(he),onClose:ye},G.map((function(e){return s.a.createElement(x.a,{onClick:function(){return ye(e)}},e.label)}))),s.a.createElement(v.a,{onClick:function(){return Oe.apply(this,arguments)},variant:"contained",size:"small",color:"primary"},"Actualizar")," \xa0",s.a.createElement(v.a,{onClick:function(){pe(!0)},variant:"contained",size:"small",color:"primary"},"Definic\xf5es")," \xa0",s.a.createElement(v.a,{onClick:function(){se(!0)},variant:"contained",size:"small",color:"primary"},"Salvar")," \xa0")),!re&&s.a.createElement(s.a.Fragment,null,function(e){var t=[],a=[];switch(H.attributes.forEach((function(e){T.includes(e.id)&&t.push(e.uid)})),F.forEach((function(e){U.includes(e.id)&&a.push(e.uid)})),e.attributeSet=H.uid,e.attributes=t,e.orgUnits=a,e.component){case"pie":return s.a.createElement(L.a,{period:null,dashboard:e});case"scatter":return e.countEntries.includes("true")?s.a.createElement(P.a,{period:null,dashboard:e}):s.a.createElement(I.a,{period:null,dashboard:e});default:return s.a.createElement(W.a,{period:null,dashboard:e})}}(K))),s.a.createElement(g.a,{style:{width:"300px",borderLeft:"1px solid #eee",padding:"7px",maxHeight:"calc(100vh - 150px)"}},s.a.createElement(O.a,{container:!0},s.a.createElement(O.a,{item:!0,sm:12},s.a.createElement(A.a,{onChange:function(e,t){z=t.attributes,H=t,Y(!r)},getOptionLabel:function(e){return e.displayName},fullWidth:!0,id:"attributeSet",size:"small",options:M,style:{minWidth:200},renderInput:function(e){return s.a.createElement(j.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Attribute Set"}))}})),s.a.createElement(O.a,{item:!0,sm:12},s.a.createElement(A.a,{onChange:function(e,t){Ee.addAttribute(t.id)},getOptionLabel:function(e){return e.displayName},fullWidth:!0,id:"attributes",size:"small",options:z.filter((function(e){return!T.includes(e.id)})),style:{minWidth:200},renderInput:function(e){return s.a.createElement(j.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Attribute"}))}})),s.a.createElement(O.a,{item:!0,sm:12},xe(T.map((function(e){return z.filter((function(t){return t.id==e}))[0]})),"removeAttribute")),s.a.createElement(O.a,{item:!0,sm:12},s.a.createElement(j.a,{select:!0,onChange:function(e){e.target.value},type:"text",variant:"outlined",name:"periodo",margin:"dense",id:"periodo",fullWidth:!0,label:"Periodo"},s.a.createElement(x.a,{value:"general"},"Geral"),s.a.createElement(x.a,{value:"daily"},"Diario"),s.a.createElement(x.a,{value:"weekly"},"Semanal"),s.a.createElement(x.a,{value:"monthly"},"Mensal"),s.a.createElement(x.a,{value:"yearly"},"Anual"))),s.a.createElement(O.a,{item:!0,sm:12},s.a.createElement(j.a,{select:!0,onChange:function(e){$=e.target.value},type:"text",variant:"outlined",name:"agregationType",margin:"dense",id:"agregationType",fullWidth:!0,label:"Tipo de agrega\xe7\xe3o"},s.a.createElement(x.a,{value:""},"Normal"),s.a.createElement(x.a,{value:"weekdaysHours"},"Dia da semana por hora"))),s.a.createElement(O.a,{item:!0,sm:12},s.a.createElement(A.a,{onChange:function(e,t){Ee.addOrgUnit(t.id)},getOptionLabel:function(e){return e.displayName},fullWidth:!0,id:"instituicao",size:"small",options:F,style:{minWidth:200},renderInput:function(e){return s.a.createElement(j.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Institui\xe7\xe3o"}))}})),s.a.createElement(O.a,{item:!0,sm:12},xe(U.map((function(e){return F.filter((function(t){return t.id==e}))[0]})),"removeOrgUnit"),s.a.createElement("br",null)))),s.a.createElement(k.a,{open:ce,title:"Detalhes do gr\xe1fico"},s.a.createElement(w.a,null,s.a.createElement(O.a,{container:!0},s.a.createElement(O.a,{item:!0,sm:12},s.a.createElement(j.a,{onChange:function(e){K.name=e.target.value},type:"text",variant:"outlined",name:"name",margin:"dense",id:"periodo",fullWidth:!0,label:"Name"})),s.a.createElement(O.a,{item:!0,sm:12},s.a.createElement(j.a,{onChange:function(e){K.displayName=e.target.value},type:"text",variant:"outlined",name:"displayName",margin:"dense",id:"displayName",fullWidth:!0,label:"Display Name"})),s.a.createElement(O.a,{item:!0,sm:12},s.a.createElement(j.a,{multiline:!0,rows:4,onChange:function(e){K.description=e.target.value},type:"text",variant:"outlined",name:"description",margin:"dense",id:"description",fullWidth:!0,label:"Description"})))),s.a.createElement(S.a,{style:{textAlign:"right"}},s.a.createElement(v.a,{disableElevation:!0,onClick:function(){se(!1)},color:"secondary"},"Fechar"),"\xa0",s.a.createElement(v.a,{disableElevation:!0,onClick:function(){return je.apply(this,arguments)},color:"primary",variant:"contained"},"Salvar"))),s.a.createElement(k.a,{open:me,title:"Defini\xe7\xf5es",fullWidth:!0,maxWidth:"sm"},s.a.createElement(w.a,null,s.a.createElement(O.a,{container:!0,spacing:2},s.a.createElement(O.a,{item:!0,sm:6},s.a.createElement(C.a,{label:"Total de submi\xe7\xf5es",control:s.a.createElement(N.a,{color:"primary",checked:"true"==K.countEntries,onChange:function(e){K.countEntries=e.target.checked?"true":"false",Y(!r)},name:"countEntries"})})),s.a.createElement(O.a,{item:!0,sm:6},s.a.createElement(C.a,{label:"Utilizar o displayName como label",control:s.a.createElement(N.a,{color:"primary",checked:"true"==K.useDisplayNameAsLabel,onChange:function(e){K.useDisplayNameAsLabel=e.target.checked?"true":"false",Y(!r)},name:"useDisplayNameAsLabel"})})),s.a.createElement(O.a,{item:!0,sm:6},s.a.createElement(C.a,{label:"Mostrar legenda",control:s.a.createElement(N.a,{color:"primary",checked:"true"==K.showLegend,onChange:function(e){K.showLegend=e.target.checked?"true":"false",Y(!r)},name:"showLegend"})})),s.a.createElement(O.a,{item:!0,sm:6},s.a.createElement(C.a,{label:"Agrupar por Attributos",control:s.a.createElement(N.a,{color:"primary",checked:"true"==K.groupByAttributes,onChange:function(e){K.groupByAttributes=e.target.checked?"true":"false",Y(!r)},name:"showLegend"})})),s.a.createElement(O.a,{item:!0,sm:12},s.a.createElement(C.a,{label:"Agrupar por Op\xe7\xf5es",control:s.a.createElement(N.a,{color:"primary",checked:"true"==K.groupByOptions,onChange:function(e){K.groupByOptions=e.target.checked?"true":"false",Y(!r)},name:"showLegend"})})),s.a.createElement(O.a,{item:!0,sm:6},s.a.createElement(j.a,{select:!0,onChange:function(e){K.sort=e.target.value},type:"text",variant:"outlined",name:"sort",margin:"dense",id:"sort",fullWidth:!0,label:"Ordenar"},s.a.createElement(x.a,{value:""},"N\xe3o ordenar"),s.a.createElement(x.a,{value:"ASC"},"Ascendente"),s.a.createElement(x.a,{value:"DESC"},"Descendente"))),s.a.createElement(O.a,{item:!0,sm:6},s.a.createElement(j.a,{onChange:function(e){K.height=e.target.value},type:"text",variant:"outlined",name:"altura",margin:"dense",id:"altura",fullWidth:!0,label:"Altura"})),T.map((function(e){return z.filter((function(t){return t.id==e}))[0]})).map((function(e){return s.a.createElement(O.a,{item:!0,sm:12},s.a.createElement(j.a,{select:!0,onChange:function(t){R[e.uid]=t.target.value},type:"text",variant:"outlined",name:"dataCleaner"+e.uid,margin:"dense",id:"dataCleaner"+e.uid,fullWidth:!0,label:e.displayName},X.map((function(e){return s.a.createElement(x.a,{value:e.function},e.label)}))))})))),s.a.createElement(S.a,{style:{textAlign:"right"}},s.a.createElement(v.a,{variant:"contained",onClick:function(){pe(!1)},color:"secondary"},"Fechar"))))}}}]);
//# sourceMappingURL=16.7b9c3cfb.chunk.js.map