(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[28],{285:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var a=n(79),r=n(16),c=n(286),i=n(0),o=n.n(i),u=(n(273),n(245)),l=n(242);function d(){var t=Object(u.a)(["\n  display: grid;\n  grid-gap: ",";\n"]);return d=function(){return t},t}function s(){var t=Object(u.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: ",";\n"]);return s=function(){return t},t}var f=l.a.div(s(),(function(t){return t.gap||"1em"})),p=l.a.div(d(),(function(t){return t.gap||"1em"}));function m(t){var e=t.children,n=t.gap,u=t.minWidth,l=void 0===u?500:u,d=Object(c.a)(t,["children","gap","minWidth"]),s=Object(i.useRef)(),m=Object(i.useState)(3),b=Object(r.a)(m,2),g=b[0],h=b[1],v=Object(a.a)(Array(g)).map((function(){return[]}));!function(t,e){t.forEach((function(t,n){return e[n%e.length].push(t)}))}(e,v);return Object(i.useEffect)((function(){return h(Math.ceil(s.current.offsetWidth/l))}),[]),o.a.createElement(f,Object.assign({ref:s,gap:n},d),Object(a.a)(Array(g)).map((function(t,e){return o.a.createElement(p,{key:e,gap:n},v[e])})))}},426:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(245),r=n(0),c=n.n(r);function i(){var t=Object(a.a)(["\nborder-radius: 8px;\nplace-content: left;\ndisplay: grid;\ncolor: white;\ncursor: pointer;\n//max-width: 50vw;\nbox-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);\nbackground-color: #551a8b;\npadding: 20px;\n"]);return i=function(){return t},t}var o=n(242).a.div(i());function u(t){var e=t.backgroundColor,n=void 0===e?"#551a8b":e,a=t.placeContent,r=void 0===a?"center":a,i=t.color,u=void 0===i?"white":i,l=t.children;return c.a.createElement(o,{style:{backgroundColor:n,placeContent:r,color:u}},l)}},6650:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var a=n(220),r=n.n(a),c=n(222),i=n(16),o=n(0),u=n.n(o),l=n(29),d=n(53),s=n(326),f=n(208),p=n(54),m=n(285),b=n(426),g=null,h=[];function v(){var t=Object(o.useState)(!1),e=Object(i.a)(t,2),n=e[0],a=e[1];function v(){return(v=Object(c.a)(r.a.mark((function t(){var e,c,o,u,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g=window.location.href.split("/"),g=atob(g[g.length-1]),console.log(g),t.next=5,Promise.all([Object(p.c)().getEntityByID(g),Object(p.c)().getEntityValueSetsByEntityID(g),Object(p.c)().getEntityFormsByEntityID(g)]);case 5:e=t.sent,c=Object(i.a)(e,3),o=c[0],u=c[1],l=c[2],o.data[0],h=l.data,u.data,a(!n);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(o.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),u.a.createElement("div",null,u.a.createElement(d.a,{variant:"h5"},"Detalhes da Entidade"),u.a.createElement(s.a,null),u.a.createElement(f.a,{component:l.b,to:"/entityForm/".concat(btoa(g)),variant:"contained"},"Registrar"),u.a.createElement(d.a,{variant:"h5"},"Formularios"),u.a.createElement(d.a,{variant:"h5"},"Entidades Registadas"),h.length>0&&u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{minWidth:300},h.map((function(t,e){return u.a.createElement(b.a,{key:e,placeContent:"left"},u.a.createElement(l.b,{style:{textDecoration:"none",color:"#fff",position:"relative",top:"0px"},to:"/entityForm/".concat(btoa(t.id))},u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{variant:"button"},t.displayName),u.a.createElement(d.a,null,t.description))))})))))}}}]);
//# sourceMappingURL=28.fe102e8e.chunk.js.map