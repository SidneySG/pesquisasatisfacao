(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[43],{288:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var a=n(79),r=n(16),c=n(289),i=n(0),o=n.n(i),l=(n(276),n(245)),u=n(243);function s(){var t=Object(l.a)(["\n  display: grid;\n  grid-gap: ",";\n"]);return s=function(){return t},t}function p(){var t=Object(l.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: ",";\n"]);return p=function(){return t},t}var d=u.a.div(p(),(function(t){return t.gap||"1em"})),m=u.a.div(s(),(function(t){return t.gap||"1em"}));function f(t){var e=t.children,n=t.gap,l=t.minWidth,u=void 0===l?500:l,s=Object(c.a)(t,["children","gap","minWidth"]),p=Object(i.useRef)(),f=Object(i.useState)(3),g=Object(r.a)(f,2),b=g[0],h=g[1],v=Object(a.a)(Array(b)).map((function(){return[]}));!function(t,e){t.forEach((function(t,n){return e[n%e.length].push(t)}))}(e,v);return Object(i.useEffect)((function(){return h(Math.ceil(p.current.offsetWidth/u))}),[]),o.a.createElement(d,Object.assign({ref:p,gap:n},s),Object(a.a)(Array(b)).map((function(t,e){return o.a.createElement(m,{key:e,gap:n},v[e])})))}},6633:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var a=n(245),r=n(221),c=n.n(r),i=n(222),o=n(16),l=n(0),u=n.n(l),s=n(213),p=n(53),d=n(329),m=n(198),f=n(29),g=n(186),b=n(54),h=n(288),v=n(243);function x(){var t=Object(a.a)(["\n  border-radius: 8px;\n  place-content: center;\n  display: grid;\n  color: white;\n  cursor: pointer;\n  max-width: 50vw;\n  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);\n  background-color: #551a8b;\n  padding: 20px;\n"]);return x=function(){return t},t}Object(g.a)((function(t){return{root:{width:"100%",maxWidth:360,backgroundColor:t.palette.background.paper}}}));var E=[],j=null,y={};function O(){var t=Object(l.useState)(!1),e=Object(o.a)(t,2),n=e[0],a=e[1],r=Object(l.useState)(!1),g=Object(o.a)(r,2),v=g[0],x=g[1];function O(){return(O=Object(i.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!1),a(!0),j=window.location.href.split("/"),j=atob(j[j.length-1].split("-").join("/")),t.next=6,Promise.resolve(Object(b.c)().getOrganisationUnitByID(j));case 6:if(e=t.sent,!((y=e.data[0]).attributeSets.length>0)){t.next=13;break}return t.next=11,Promise.resolve(Object(b.c)().getFormsByAttributeSetID(y.attributeSets));case 11:n=t.sent,E=n.data;case 13:x(!0),a(!1);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.useEffect)((function(){E=[],y={},function(){O.apply(this,arguments)}()}),[]),u.a.createElement("div",{style:{padding:"60px 10px"}},v&&Boolean(y.logo)&&u.a.createElement("div",{style:{textAlign:"center"}},u.a.createElement("img",{style:{maxWidth:"250px",maxHeight:"50vh"},src:"".concat(Object(b.b)(),"/static/orgunits/thumbnails/").concat(y.logo)})),u.a.createElement(s.a,{style:{padding:"15px",textAlign:"center"}},u.a.createElement(p.a,{variant:"h6"},y.displayName),u.a.createElement(p.a,{variant:"button"},y.shortName)),u.a.createElement(d.a,null),v&&0==E.length&&u.a.createElement(w,{style:{minWidth:"calc(100% - 40px)"}},u.a.createElement(p.a,{variant:"h6"},"N\xe3o existem fichas para esta institui\xe7\xe3o")),n&&u.a.createElement(s.a,{style:{width:"100%",textAlign:"center"}},u.a.createElement(m.a,null)),E.length>0&&u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{variant:"h6",style:{paddingBottom:"7px"}},"Fichas"),u.a.createElement(h.a,{minWidth:300},E.map((function(t,e){var n=btoa(j+"-"+t.id).split("/").join("-");return u.a.createElement(w,{key:e},u.a.createElement(f.b,{style:{textDecoration:"none",color:"#fff",textAlign:"center",position:"relative",top:"0px"},to:Boolean(t.type)?"/cform/".concat(n):"/formulario/".concat(n)},u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{variant:"button"},t.displayName),u.a.createElement(p.a,null,t.description))))})))))}var w=v.a.div(x())}}]);
//# sourceMappingURL=43.6ac0fe26.chunk.js.map