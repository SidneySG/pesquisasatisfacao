(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[47],{287:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),l=(a(6),a(4)),c=a(5),o=i.forwardRef((function(e,t){var a=e.classes,c=e.className,o=Object(r.a)(e,["classes","className"]);return i.createElement("div",Object(n.a)({className:Object(l.a)(a.root,c),ref:t},o))}));o.muiName="ListItemSecondaryAction",t.a=Object(c.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(o)},6678:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(12),r=a(0),i=a.n(r),l=a(114),c=a(199),o=a(157),u=a(201),s=a(287),m=a(204),d=a(228),f=a(224),b=a(227),p=a(222),E=a(6711),g=a(116),h=(a(31),[]),v=[],y=[],O=[],j=[];function w(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),w=a[0],x=a[1],S=Object(r.useState)({changeRoute:!1,to:""}),W=Object(n.a)(S,2),A=(W[0],W[1],Object(r.useState)({label:"Barras",value:"bar"})),N=Object(n.a)(A,2),k=(N[0],N[1],Object(r.useState)(!0)),C=Object(n.a)(k,2),I=(C[0],C[1],Object(r.useState)(!1)),L=Object(n.a)(I,2),z=(L[0],L[1],Object(r.useState)(!1)),U=Object(n.a)(z,2);U[0],U[1];Object(r.useEffect)((function(){}),[]);var D={addAttribute:function(e){y.push(e),x(!w)},removeAttribute:function(e){y=y.filter((function(t){return t!==e})),x(!w)},addOrgUnit:function(e){O.push(e),x(!w)},removeOrgUnit:function(e){O=O.filter((function(t){return t!==e})),x(!w)}},H=function(e,t){return i.a.createElement(l.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},i.a.createElement(c.a,{dense:!0,component:"div",role:"list"},e.map((function(e,a){return i.a.createElement(o.a,{onDoubleClick:function(){return D[t](e.id)},key:a,role:"listitem",button:!0},i.a.createElement(u.a,{primary:e.displayName}),i.a.createElement(s.a,null,i.a.createElement(m.a,{color:"secondary",size:"small",onClick:function(){D[t](e.id)}},i.a.createElement(g.g,null))))})),i.a.createElement(o.a,null)))};return i.a.createElement(d.a,{display:"flex",style:{overflow:"hidden",color:"#000",maxHeight:"calc(100vh - 87px)"}},i.a.createElement(d.a,{flexGrow:1},"sdfsdfs sdfsdfsd",i.a.createElement("br",null),"fsdfsdfsd"),i.a.createElement(d.a,{style:{width:"300px",display:"block",overflowY:"auto",maxHeight:"calc(100vh - 87px)",borderLeft:"1px solid #eee"}},i.a.createElement(f.a,{container:!0},i.a.createElement(f.a,{item:!0,sm:12},i.a.createElement(E.a,{onChange:function(e,t){h=t.attributes,t,x(!w)},getOptionLabel:function(e){return e.displayName},fullWidth:!0,id:"attributeSet",size:"small",options:j,style:{minWidth:200},renderInput:function(e){return i.a.createElement(b.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Attribute Set"}))}})),i.a.createElement(f.a,{item:!0,sm:12},i.a.createElement(E.a,{onChange:function(e,t){D.addAttribute(t.id)},getOptionLabel:function(e){return e.displayName},fullWidth:!0,id:"attributes",size:"small",options:h.filter((function(e){return!y.includes(e.id)})),style:{minWidth:200},renderInput:function(e){return i.a.createElement(b.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Attribute"}))}})),i.a.createElement(f.a,{item:!0,sm:12},H(y.map((function(e){return h.filter((function(t){return t.id==e}))[0]})),"removeAttribute")),i.a.createElement(f.a,{item:!0,sm:12},i.a.createElement(b.a,{select:!0,onChange:function(e){e.target.value},type:"text",variant:"outlined",name:"periodo",margin:"dense",id:"periodo",fullWidth:!0,label:"Periodo"},i.a.createElement(p.a,{value:"general"},"Geral"),i.a.createElement(p.a,{value:"daily"},"Diario"),i.a.createElement(p.a,{value:"weekly"},"Semanal"),i.a.createElement(p.a,{value:"monthly"},"Mensal"),i.a.createElement(p.a,{value:"yearly"},"Anual"))),i.a.createElement(f.a,{item:!0,sm:12},i.a.createElement(b.a,{select:!0,onChange:function(e){e.target.value},type:"text",variant:"outlined",name:"agregationType",margin:"dense",id:"agregationType",fullWidth:!0,label:"Tipo de agrega\xe7\xe3o"},i.a.createElement(p.a,{value:""},"Normal"),i.a.createElement(p.a,{value:"weekdaysHours"},"Dia da semana por hora"))),i.a.createElement(f.a,{item:!0,sm:12},i.a.createElement(E.a,{onChange:function(e,t){D.addOrgUnit(t.id)},getOptionLabel:function(e){return e.displayName},fullWidth:!0,id:"instituicao",size:"small",options:v,style:{minWidth:200},renderInput:function(e){return i.a.createElement(b.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Institui\xe7\xe3o"}))}})),i.a.createElement(f.a,{item:!0,sm:12},H(O.map((function(e){return v.filter((function(t){return t.id==e}))[0]})),"removeOrgUnit"),i.a.createElement("br",null)))))}}}]);
//# sourceMappingURL=47.3508f7ff.chunk.js.map