(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[41],{288:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(78),r=a(16),o=a(289),c=a(0),i=a.n(c),l=(a(276),a(245)),s=a(243);function u(){var e=Object(l.a)(["\n  display: grid;\n  grid-gap: ",";\n"]);return u=function(){return e},e}function d(){var e=Object(l.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: ",";\n"]);return d=function(){return e},e}var m=s.a.div(d(),(function(e){return e.gap||"1em"})),p=s.a.div(u(),(function(e){return e.gap||"1em"}));function b(e){var t=e.children,a=e.gap,l=e.minWidth,s=void 0===l?500:l,u=Object(o.a)(e,["children","gap","minWidth"]),d=Object(c.useRef)(),b=Object(c.useState)(3),g=Object(r.a)(b,2),f=g[0],h=g[1],v=Object(n.a)(Array(f)).map((function(){return[]}));!function(e,t){e.forEach((function(e,a){return t[a%t.length].push(e)}))}(t,v);return Object(c.useEffect)((function(){return h(Math.ceil(d.current.offsetWidth/s))}),[]),i.a.createElement(m,Object.assign({ref:d,gap:a},u),Object(n.a)(Array(f)).map((function(e,t){return i.a.createElement(p,{key:t,gap:a},v[t])})))}},6629:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return U}));var n=a(245),r=a(221),o=a.n(r),c=a(222),i=a(16),l=a(0),s=a.n(l),u=a(29),d=a(54),m=a(328),p=a.n(m),b=a(147),g=a(267),f=a(53),h=a(6297),v=a(208),E=a(212),x=a(6298),y=a(188),O=a(146),j=a(6630),w=a(6680),k=a(190),C=a(329),R=a(376),W=a(377),N=a(378),P=a(444),S=a(290),A=a(303),L=a(6299),M=a(215),T=a(198),z=a(288),B=a(243),F=a(210),I=a(107);function D(){var e=Object(n.a)(["\n  border-radius: 8px;\n  //place-content: center;\n  display: grid;\n  color: white;\n  cursor: pointer;\n  max-width: 50vw;\n  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);\n  //background-color: red;\n"]);return D=function(){return e},e}var q=[],J=s.a.lazy((function(){return Promise.all([a.e(0),a.e(3),a.e(38)]).then(a.bind(null,6616))}));function U(){var e=Object(l.useState)(!1),t=Object(i.a)(e,2),a=(t[0],t[1]),n=Object(l.useState)(!1),r=Object(i.a)(n,2),m=r[0],B=r[1],D=Object(l.useState)(!1),U=Object(i.a)(D,2),H=U[0],K=U[1],Q=Object(l.useState)(!1),V=Object(i.a)(Q,2),X=V[0],Y=V[1],Z=Object(l.useState)(0),$=Object(i.a)(Z,2),_=$[0],ee=$[1],te=Object(F.a)(["hideWelcomeMessage"]),ae=Object(i.a)(te,2),ne=ae[0],re=ae[1],oe=Object(l.useState)(0),ce=Object(i.a)(oe,2),ie=ce[0],le=ce[1],se=Object(l.useState)(""),ue=Object(i.a)(se,2),de=ue[0],me=ue[1],pe=Object(l.useState)(!1),be=Object(i.a)(pe,2),ge=be[0],fe=be[1],he=function(){Y(!1);var e=new Date;e.setMonth(e.getMonth()+2),re("hideWelcomeMessage",_,{path:"/",expires:e})};Object(l.useEffect)((function(){window.location.href.includes("success=true")?Y(!1):Y(!ne.hideWelcomeMessage),function(){Ee.apply(this,arguments)}()}),[]);var ve=function(e){return new Promise((function(t,a){navigator.geolocation.getCurrentPosition(t,a,e)}))};function Ee(){return(Ee=Object(c.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,Promise.resolve(ve());case 4:return t=e.sent,e.next=7,Promise.resolve(Object(d.c)().getOrgUnitsWithinRadius(t.coords.latitude,t.coords.longitude));case 7:if(!((n=e.sent).data.length>=1)){e.next=15;break}return e.next=11,Promise.resolve(Object(d.c)().getOrganisationUnitsByIDs(n.data.map((function(e){return e.id}))));case 11:r=e.sent,q=r.data,B(!0),K(!H);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),alert(e.t0.message);case 20:a(!1);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})))).apply(this,arguments)}return s.a.createElement("div",null,s.a.createElement(b.a,{in:1==ie&&!ge},s.a.createElement(g.a,{variant:"extended",size:"medium",onClick:function(){fe(!0)},style:{position:"fixed",boxShadow:"none",zIndex:1e4,bottom:"20px",right:"calc(50% - 55.4px)",margin:"auto",display:1==ie?"block":"none"},color:"secondary"},"Adicionar")),s.a.createElement("div",{style:{padding:"60px 7px 7px 7px",textAlign:"center"}},s.a.createElement(f.a,{variant:"button"},"Empresas"),s.a.createElement("br",null),s.a.createElement(h.a,{disableElevation:!0,variant:"contained",color:"secondary"},s.a.createElement(v.a,{onClick:function(){le(0)},variant:0==ie?"contained":"outlined",style:{borderTopLeftRadius:"1.3em",borderBottomLeftRadius:"1.3em",minWidth:"106px"}},"Pr\xf3ximas"),s.a.createElement(v.a,{onClick:function(){le(1)},variant:1==ie?"contained":"outlined",style:{borderTopRightRadius:"1.3em",borderBottomRightRadius:"1.3em",minWidth:"106px"}},"Outras"))),s.a.createElement("br",null),s.a.createElement(p.a,{index:ie,onChangeIndex:function(e){le(e)}},s.a.createElement("div",{value:0,style:{padding:"12px"}},q.length<=0&&m&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{width:"calc(100% - 40px)",borderRadius:"1em",backgroundColor:"#551a8b",color:"#fff",padding:"20px"}},s.a.createElement(f.a,{variant:"button"},"N\xe3o existem institui\xe7\xf5es pr\xf3ximas, por favor explore as outras"))),q.length>0&&s.a.createElement(z.a,{minWidth:300},q.map((function(e,t){return s.a.createElement(G,{key:t},s.a.createElement(u.b,{style:{textDecoration:"none",color:"#000",textAlign:"center",position:"relative",top:"0px"},to:"/servicos/".concat(btoa(e.id))},s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{src:"".concat(Object(d.b)(),"/static/orgunits/thumbnails/").concat(e.logo),style:{borderTopLeftRadius:"8px",borderTopRightRadius:"8px",width:"100%",height:"auto"}}),s.a.createElement("br",null),s.a.createElement("div",{style:{padding:"7px"}},s.a.createElement(f.a,null,e.displayName),s.a.createElement(f.a,null,"(",e.shortName,")")))))})))),s.a.createElement("div",{value:1},s.a.createElement("div",{style:{padding:"12px"}},s.a.createElement(E.a,{id:"pesquisar",variant:"outlined",placeholder:"Procurar",color:"secondary",fullWidth:!0,size:"small",value:de,onChange:function(e){me(e.target.value)},InputProps:{startAdornment:s.a.createElement(x.a,{position:"start"},s.a.createElement(I.e,null))}})),q.length>0&&s.a.createElement(y.a,null,q.filter((function(e){return e.displayName.toLowerCase().includes(de.toLowerCase())||e.shortName.toLowerCase().includes(de.toLowerCase())})).map((function(e,t){return s.a.createElement(s.a.Fragment,{key:t},s.a.createElement(O.a,{component:u.b,to:"/servicos/".concat(btoa(e.id)),button:!0,style:{padding:"3px 10px"}},s.a.createElement(j.a,null,s.a.createElement(w.a,{alt:"".concat(e.displayName," thumbnail"),src:"".concat(Object(d.b)(),"/static/orgunits/thumbnails/").concat(e.logo)})),s.a.createElement(k.a,{primary:e.displayName.length>30?"".concat(e.displayName.substr(0,30),"..."):e.displayName,secondary:e.shortName})),s.a.createElement(C.a,{variant:"inset",component:"li"}))}))))),s.a.createElement(R.a,{open:X,onClose:he,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},s.a.createElement(W.a,{id:"alert-dialog-title"},"Bem-vindo"),s.a.createElement(N.a,null,s.a.createElement(P.a,{id:"alert-dialog-description"},"A sua contribui\xe7\xe3o \xe9 a base para o desenvolvimento dos nossos servi\xe7os, pelo que desde j\xe1 agradecemos."),s.a.createElement(S.a,{control:s.a.createElement(A.a,{checked:_,onChange:function(e){ee(e.target.checked?1:0)},name:"hideWelcomeMessage",color:"primary"}),label:"N\xe3o mostrar novamente"})),s.a.createElement(L.a,{style:{textAlign:"center"}},s.a.createElement(v.a,{disableElevation:!0,variant:"contained",onClick:he,color:"secondary",autoFocus:!0},"Continuar"))),s.a.createElement(M.a,{PaperProps:{style:{borderRadius:"10px 10px 0px 0px"}},anchor:"bottom",open:ge,onClose:function(){fe(!1)},style:{borderRadius:"20px"}},s.a.createElement(l.Suspense,{fallback:s.a.createElement("div",{style:{width:"100%",height:"80vh",textAlign:"center",marginTop:"50vh"}},s.a.createElement(T.a,null))},s.a.createElement(J,null))))}var G=B.a.div(D())}}]);
//# sourceMappingURL=41.edba2550.chunk.js.map