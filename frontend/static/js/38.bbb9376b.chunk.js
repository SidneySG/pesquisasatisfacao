(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[38],{235:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var a=n(76),r=n(24),c=n(236),i=n(0),o=n.n(i),l=(n(231),n(219)),u=n(217);function s(){var t=Object(l.a)(["\n  display: grid;\n  grid-gap: ",";\n"]);return s=function(){return t},t}function p(){var t=Object(l.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: ",";\n"]);return p=function(){return t},t}var d=u.a.div(p(),(function(t){return t.gap||"1em"})),f=u.a.div(s(),(function(t){return t.gap||"1em"}));function m(t){var e=t.children,n=t.gap,l=t.minWidth,u=void 0===l?500:l,s=Object(c.a)(t,["children","gap","minWidth"]),p=Object(i.useRef)(),m=Object(i.useState)(3),g=Object(r.a)(m,2),b=g[0],h=g[1],v=Object(a.a)(Array(b)).map((function(){return[]}));!function(t,e){t.forEach((function(t,n){return e[n%e.length].push(t)}))}(e,v);return Object(i.useEffect)((function(){return h(Math.ceil(p.current.offsetWidth/u))}),[]),o.a.createElement(d,Object.assign({ref:p,gap:n},s),Object(a.a)(Array(b)).map((function(t,e){return o.a.createElement(f,{key:e,gap:n},v[e])})))}},6110:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));var a=n(219),r=n(209),c=n.n(r),i=n(210),o=n(24),l=n(0),u=n.n(l),s=n(201),p=n(52),d=n(263),f=n(188),m=n(38),g=n(175),b=n(73),h=n(235),v=n(217);function j(){var t=Object(a.a)(["\n  border-radius: 8px;\n  place-content: center;\n  display: grid;\n  color: white;\n  cursor: pointer;\n  max-width: 50vw;\n  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);\n  background-color: #551a8b;\n  padding: 20px;\n"]);return j=function(){return t},t}var E=Object(g.a)((function(t){return{root:{width:"100%",maxWidth:360,backgroundColor:t.palette.background.paper}}})),O=[],x=null,y={};function w(){E();var t=Object(l.useState)(!1),e=Object(o.a)(t,2),n=e[0],a=e[1],r=Object(l.useState)(!1),g=Object(o.a)(r,2),v=g[0],j=g[1];function w(){return(w=Object(i.a)(c.a.mark((function t(){var e,n,r,i,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!1),a(!0),x=window.location.href.split("/"),x=atob(x[x.length-1].split("-").join("/")),t.next=6,Promise.all([Object(b.c)().getAttributeSetByOrgUnit(x),Object(b.c)().getOrganisationUnitByID(x),Object(b.c)().getForms()]);case 6:e=t.sent,n=Object(o.a)(e,3),r=n[0],i=n[1],l=n[2],O=r.data,l.data.forEach((function(t){O.push(t)})),y=i.data[0],j(!0),a(!1);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.useEffect)((function(){!function(){w.apply(this,arguments)}()}),[]),u.a.createElement("div",{style:{padding:"60px 10px"}},v&&Boolean(y.logo)&&u.a.createElement("div",{style:{textAlign:"center"}},u.a.createElement("img",{style:{maxWidth:"250px",maxHeight:"50vh"},src:"".concat(Object(b.b)(),"/static/orgunits/thumbnails/").concat(y.logo)})),u.a.createElement(s.a,{style:{padding:"15px",textAlign:"center"}},u.a.createElement(p.a,{variant:"h6"},y.displayName),u.a.createElement(p.a,{variant:"button"},y.shortName)),u.a.createElement(d.a,null),v&&0==O.length&&u.a.createElement(k,{style:{minWidth:"calc(100% - 40px)"}},u.a.createElement(p.a,{variant:"h6"},"N\xe3o existem fichas para esta institui\xe7\xe3o")),n&&u.a.createElement(s.a,{style:{width:"100%",textAlign:"center"}},u.a.createElement(f.a,null)),O.length>0&&u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{variant:"h6",style:{paddingBottom:"7px"}},"Fichas"),u.a.createElement(h.a,{minWidth:300},O.map((function(t,e){var n=btoa(x+"-"+t.id).split("/").join("-");return u.a.createElement(k,{key:e},u.a.createElement(m.b,{style:{textDecoration:"none",color:"#fff",textAlign:"center",position:"relative",top:"0px"},to:Boolean(t.type)?"/cform/".concat(n):"/formulario/".concat(n)},u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{variant:"button"},t.displayName),u.a.createElement(p.a,null,t.description))))})))))}var k=v.a.div(j())}}]);
//# sourceMappingURL=38.bbb9376b.chunk.js.map