(this["webpackJsonpmobile.atendimento.co.mz"]=this["webpackJsonpmobile.atendimento.co.mz"]||[]).push([[17],{1564:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return N}));var a,i=n(41),c=n.n(i),r=n(64),s=n(23),o=n(0),d=n(14),b=n(401),l=n(58),j=n(392),u=n(1007),h=n(74),p=n(570),x=n(524),g=n(42),O=n(495),f=n(4);function m(t){var e=t.ficha,n=t.orgUnitID,a=btoa(n+"'"+e.id).toString("base64");return Object(f.jsx)(v,{children:Object(f.jsxs)(g.b,{style:{textDecoration:"none",color:"#fff",textAlign:"center",position:"relative",top:"0px"},to:Boolean(e.type)?"/c/".concat(a):"/f/".concat(a),children:[Object(f.jsx)(l.a,{variant:"button",children:e.displayName}),Object(f.jsx)(l.a,{children:e.description})]})})}var v=O.a.div(a||(a=Object(x.a)(["\n  border-radius: 8px;\n  place-content: center;\n  display: grid;\n  color: white;\n  cursor: pointer;\n  width: calc(50vw - 40px);\n  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);\n  background-color: #551a8b;\n  padding: 20px 10px;\n"]))),y=n(404),w=[],k={};function N(){var t=Object(y.a)().t,e=Object(d.g)().id,n=Object(o.useState)(!1),a=Object(s.a)(n,2),i=a[0],x=a[1],g=Object(o.useState)(!1),O=Object(s.a)(g,2),v=O[0],N=O[1];function S(){return(S=Object(r.a)(c.a.mark((function t(){var n,a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(x(!0),w=[],k={},t.prev=3,!(atob(e).length>10)){t.next=11;break}return t.next=7,Promise.resolve(Object(h.d)().getPlaceDetails(atob(e)));case 7:n=t.sent,k=n.data,t.next=15;break;case 11:return t.next=13,Promise.resolve(Object(h.d)().getOrganisationUnits("?fields=id,name,displayName,shortName,uid,code,orgUnitType,logo,bgImage,attributeSets&id=".concat(atob(e))));case 13:a=t.sent,k=a.data[0];case 15:if(!(k.attributeSets.length>0)){t.next=20;break}return t.next=18,Promise.resolve(Object(h.d)().getForms("?fields=id,uid,type,name,displayName,description,shortName&attributeSet__in=".concat(k.attributeSets.map((function(t){return t})).join(","))));case 18:i=t.sent,w=i.data;case 20:N(!v),t.next=27;break;case 23:throw t.prev=23,t.t0=t.catch(3),t.t0;case 27:x(!1);case 28:case"end":return t.stop()}}),t,null,[[3,23]])})))).apply(this,arguments)}return Object(o.useEffect)((function(){return S.apply(this,arguments)}),[]),i?Object(f.jsx)("div",{style:{width:"100%",height:"80vh",textAlign:"center",marginTop:"50vh"},children:Object(f.jsx)(j.a,{})}):Object(f.jsxs)("div",{style:{padding:"60px 10px"},children:[Boolean(k.logo)&&Object(f.jsx)("div",{style:{textAlign:"center"},children:Object(f.jsx)("img",{style:{width:250},src:"".concat(Object(h.b)(),"/static/orgunits/thumbnails/").concat(k.logo)})}),Boolean(k.photos)&&Object(f.jsx)("div",{style:{textAlign:"center"},children:Object(f.jsx)("img",{style:{maxWidth:"250px",maxHeight:"50vh"},src:k.photos[0]})}),Object(f.jsxs)(b.a,{style:{padding:"15px",textAlign:"center"},children:[Object(f.jsx)(l.a,{variant:"h6",children:k.displayName}),Object(f.jsx)(l.a,{variant:"button",children:k.shortName})]}),Object(f.jsx)(u.a,{}),0==w.length?Object(f.jsx)(l.a,{variant:"h6",children:"N\xe3o existem fichas para esta institui\xe7\xe3o"}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{variant:"h6",style:{paddingBottom:"7px"},children:t("fichas")}),Object(f.jsx)(p.a,{minWidth:300,children:w.map((function(t,n){return Object(f.jsx)(m,{orgUnitID:atob(e),ficha:t},n)}))})]})]})}},570:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var a,i,c=n(98),r=n(32),s=n(23),o=n(697),d=n(0),b=n(524),l=n(495),j=l.a.div(a||(a=Object(b.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: ",";\n"])),(function(t){return t.gap||"1em"})),u=l.a.div(i||(i=Object(b.a)(["\n  display: grid;\n  grid-gap: ",";\n"])),(function(t){return t.gap||"1em"})),h=n(4);function p(t){var e=t.children,n=t.gap,a=t.minWidth,i=void 0===a?500:a,b=Object(o.a)(t,["children","gap","minWidth"]),l=Object(d.useRef)(),p=Object(d.useState)(3),x=Object(s.a)(p,2),g=x[0],O=x[1],f=Object(r.a)(Array(g)).map((function(){return[]}));!function(t,e){t.forEach((function(t,n){return e[n%e.length].push(t)}))}(e,f);return Object(d.useEffect)((function(){return O(Math.ceil(l.current.offsetWidth/i))}),[]),Object(h.jsx)(j,Object(c.a)(Object(c.a)({ref:l,gap:n},b),{},{children:Object(r.a)(Array(g)).map((function(t,e){return Object(h.jsx)(u,{gap:n,children:f[e]},e)}))}))}}}]);