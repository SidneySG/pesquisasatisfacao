(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{117:function(e,t,n){e.exports=n(143)},143:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),c=n.n(r),i=n(201),l=n(99),u=n(190),s=n(38),m=n(11),d=n(189),p=n(24),g=n(177),f=n(179),b=n(180),E=n(181),y=n(182),h=n(183),x=n(52),S=n(184),v=n(186),C=n(204),O=n(188),w=n(175),z=n(97),A=n.n(z),P=Object(w.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),D=o.a.lazy((function(){return n.e(46).then(n.bind(null,6115))}));function I(){var e=P(),t=Object(a.useState)(null),n=Object(p.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(null),l=Object(p.a)(i,2),u=l[0],s=l[1],m=Object(a.useState)("PT"),d=Object(p.a)(m,2),w=d[0],z=d[1],I=Object(a.useState)(!1),k=Object(p.a)(I,2),B=k[0],U=k[1];function j(){s(null)}function F(){c(null)}return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{position:"fixed"},o.a.createElement(y.a,null,o.a.createElement(h.a,{onClick:function(e){s(e.currentTarget)},edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(A.a,null)),o.a.createElement(x.a,{variant:"h6",className:e.title},"\xa0"),o.a.createElement(h.a,{onClick:function(e){c(e.currentTarget)},color:"inherit"},o.a.createElement(x.a,{variant:"button"},w)))),o.a.createElement(S.a,{open:Boolean(u),anchorEl:u,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},o.a.createElement(v.a,{onClickAway:j},o.a.createElement("div",{role:"presentation",onClick:j,onKeyDown:j},o.a.createElement(g.a,null,[{label:"Sobre n\xf3s",handler:function(){}},{label:"Fale connosco",handler:function(){}},{label:"Login",handler:function(){U(!0),s(null)}}].map((function(e,t){return o.a.createElement(f.a,{button:!0,key:e.label,onClick:e.handler},o.a.createElement(b.a,{primary:e.label}))})))))),o.a.createElement(S.a,{open:Boolean(r),anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"center"}},o.a.createElement(v.a,{onClickAway:F},o.a.createElement("div",{role:"presentation",onClick:F,onKeyDown:F},[{label:"Portugu\xeas",value:"PT"},{label:"English",value:"EN"}].map((function(e,t){return o.a.createElement(f.a,{onClick:function(){c(null),z(e.value)},button:!0,key:t},o.a.createElement(b.a,{primary:e.label}))}))))),o.a.createElement(C.a,{PaperProps:{style:{borderRadius:"10px 10px 0px 0px"}},anchor:"bottom",open:B,onClose:function(){U(!1)},style:{borderRadius:"20px"}},o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",{style:{width:"100%",height:"80vh",textAlign:"center",marginTop:"50vh"}},o.a.createElement(O.a,null))},o.a.createElement(D,null))))}var k=o.a.lazy((function(){return Promise.all([n.e(1),n.e(6),n.e(7),n.e(15),n.e(37)]).then(n.bind(null,6105))})),B=o.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(8),n.e(42)]).then(n.bind(null,6108))})),U=o.a.lazy((function(){return Promise.all([n.e(6),n.e(20),n.e(38)]).then(n.bind(null,6110))})),j=o.a.lazy((function(){return Promise.all([n.e(2),n.e(4),n.e(7),n.e(17),n.e(49)]).then(n.bind(null,6111))})),F=o.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(12)]).then(n.bind(null,6146))})),T=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(23)]).then(n.bind(null,6113))})),_=o.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(6),n.e(16)]).then(n.bind(null,6147))})),R=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(22)]).then(n.bind(null,6114))})),V=o.a.lazy((function(){return n.e(51).then(n.bind(null,6152))})),N=Object(l.a)({palette:{secondary:{main:"#472ECD"},primary:{main:"#472ECD"}},typography:{fontFamily:["Nunito","sans-serif","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),color:"#5f6368"}});function W(){return o.a.createElement(d.a,null,o.a.createElement(u.a,{theme:N},o.a.createElement(s.a,null,o.a.createElement(I,null),o.a.createElement(i.a,{style:{minHeight:"calc(100vh - 200px)"}},o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",null,"Carregando...")},o.a.createElement(m.d,null,o.a.createElement(m.b,{component:k,path:"/",exact:!0}),o.a.createElement(m.b,{component:B,path:"/orgUnit/add",exact:!0}),o.a.createElement(m.b,{component:U,path:"/servicos/:id",exact:!0}),o.a.createElement(m.b,{component:F,path:"/cform/:id",exact:!0}),o.a.createElement(m.b,{component:j,path:"/formulario/:id",exact:!0}),o.a.createElement(m.b,{component:T,path:"/create-form",exact:!0}),o.a.createElement(m.b,{component:_,path:"/entity-form",exact:!0}),o.a.createElement(m.b,{component:R,path:"/costum-form",exact:!0}),o.a.createElement(m.b,{component:V,path:"/success",exact:!0})))))))}n(76);var G=n(65);function M(e){var t=e.navs,n=(e.t,Object(a.useState)([])),r=Object(p.a)(n,2),c=(r[0],r[1],Object(a.useState)("home")),i=Object(p.a)(c,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){var e=window.location.href.split("/");u("/".concat(e[e.length-1]))}),[]),o.a.createElement(g.a,null,t.map((function(e,t){return o.a.createElement(f.a,{selected:"/".concat(l)==e.path,onClick:function(){return u(e.path)},key:t,to:e.path,component:s.b,button:!0,style:{borderRadius:"5px",color:"#000"}},o.a.createElement(b.a,{style:{margin:"0px",color:l==e.path?G.a[600]:"#000"},primary:e.label}))})))}var L=o.a.lazy((function(){return n.e(48).then(n.bind(null,6116))})),H=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(29)]).then(n.bind(null,6149))})),q=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(25)]).then(n.bind(null,6126))})),J=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(18)]).then(n.bind(null,6127))})),K=o.a.lazy((function(){return Promise.all([n.e(6),n.e(21),n.e(27)]).then(n.bind(null,6128))})),Q=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(14)]).then(n.bind(null,6129))})),X=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(24)]).then(n.bind(null,6151))})),Z=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(31)]).then(n.bind(null,6130))})),$=o.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(8),n.e(26)]).then(n.bind(null,6131))})),Y=o.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(19),n.e(50)]).then(n.bind(null,6132))})),ee=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(30)]).then(n.bind(null,6133))})),te=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(36)]).then(n.bind(null,6134))})),ne=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(28)]).then(n.bind(null,6135))})),ae=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(40)]).then(n.bind(null,6136))})),oe=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(35)]).then(n.bind(null,6137))})),re=(o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(39)]).then(n.bind(null,6138))})),o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(41)]).then(n.bind(null,6139))}))),ce=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(32)]).then(n.bind(null,6140))})),ie=o.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(45)]).then(n.bind(null,6141))})),le=o.a.lazy((function(){return Promise.all([n.e(2),n.e(7),n.e(13),n.e(47)]).then(n.bind(null,6142))})),ue=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(33)]).then(n.bind(null,6143))})),se=o.a.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(44)]).then(n.bind(null,6144))})),me=o.a.lazy((function(){return Promise.all([n.e(8),n.e(43)]).then(n.bind(null,6145))}));function de(){return o.a.createElement(s.a,null,o.a.createElement(i.a,{display:"flex"},o.a.createElement(i.a,{style:{minWidth:"250px",paddingRight:"10px"}},o.a.createElement(M,{navs:pe})),o.a.createElement(i.a,{flexGrow:1},o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",{style:{width:"100%",height:"80vh",textAlign:"center",marginTop:"50vh"}},o.a.createElement(O.a,null))},o.a.createElement(m.d,null,o.a.createElement(m.b,{component:L,path:"/",exact:!0}),o.a.createElement(m.b,{component:H,path:"/fichas",exact:!0}),o.a.createElement(m.b,{component:q,path:"/fichas/adicionar",exact:!0}),o.a.createElement(m.b,{component:Z,path:"/instituicoes",exact:!0}),o.a.createElement(m.b,{component:$,path:"/instituicoes/adicionar",exact:!0}),o.a.createElement(m.b,{component:J,path:"/entidades",exact:!0}),o.a.createElement(m.b,{component:K,path:"/entidade/:id",exact:!0}),o.a.createElement(m.b,{component:Q,path:"/entityForm/:id",exact:!0}),o.a.createElement(m.b,{component:X,path:"/entidades/adicionar",exact:!0}),o.a.createElement(m.b,{component:ee,path:"/optionSets",exact:!0}),o.a.createElement(m.b,{component:Y,path:"/optionSets/adicionar",exact:!0}),o.a.createElement(m.b,{component:ue,path:"/users",exact:!0}),o.a.createElement(m.b,{component:se,path:"/users/adicionar",exact:!0}),o.a.createElement(m.b,{component:ce,path:"/groups",exact:!0}),o.a.createElement(m.b,{component:ie,path:"/groups/adicionar",exact:!0}),o.a.createElement(m.b,{component:ae,path:"/attribute/adicionar",exact:!0}),o.a.createElement(m.b,{component:ne,path:"/attributes",exact:!0}),o.a.createElement(m.b,{component:te,path:"/attributeSets",exact:!0}),o.a.createElement(m.b,{component:oe,path:"/attributeSetData/:id",exact:!0}),o.a.createElement(m.b,{component:re,path:"/editAttribute/:id",exact:!0}),o.a.createElement(m.b,{component:le,path:"/attributeSetFormData/:id",exact:!0}),o.a.createElement(m.b,{component:me,path:"/testar-func-raio",exact:!0}))))))}var pe=[{path:"/",label:"Dashboard",description:"Descri\xe7\xe3o da funcionalidade"},{path:"/fichas",label:"Fichas",description:"Descri\xe7\xe3o da funcionalidade"},{path:"/entidades",label:"Entidades",description:"Descri\xe7\xe3o da funcionalidade"},{path:"/instituicoes",label:"Institui\xe7\xf5es",description:"Descri\xe7\xe3o da funcionalidade"},{path:"/optionSets",label:"Option sets",description:"Descri\xe7\xe3o da funcionalidade"},{path:"/attributeSets",label:"Attribute sets",description:"Descri\xe7\xe3o da funcionalidade"},{path:"/attributes",label:"Attributes",description:"Descri\xe7\xe3o da funcionalidade"},{path:"/users",label:"Users",description:"Descri\xe7\xe3o da funcionalidade"},{path:"/groups",label:"Groups",description:"Descri\xe7\xe3o da funcionalidade"}],ge=n(191),fe=n(192),be=n(193),Ee=n(194),ye=n(195),he=n(98),xe=n.n(he);function Se(e){var t=e.children,n=e.window,a=Object(ge.a)({disableHysteresis:!0,threshold:0,target:n?n():void 0});return o.a.cloneElement(t,{elevation:a?4:0,style:{transition:"all .4s",color:a?"#231d5a":"#fff",backgroundColor:a?"#fafafa":"#231d5a",backgroundImage:a?"none":"linear-gradient(-139deg, rgb(23, 14, 83) 0%, rgb(61, 60, 106) 100%)"}})}function ve(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(fe.a,null),o.a.createElement(Se,e,o.a.createElement(E.a,null,o.a.createElement(y.a,null,o.a.createElement(be.a,null,o.a.createElement(i.a,{display:"flex"},o.a.createElement(i.a,null,o.a.createElement(x.a,{variant:"h6"},"Atendimento")),o.a.createElement(i.a,{flexGrow:1}),o.a.createElement(i.a,null,o.a.createElement(Ee.a,{onClick:function(){window.location.assign("/login")},style:{backgroundColor:"#edcd37",color:"#000"}},"Login"))))))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{style:{backgroundImage:"linear-gradient(-139deg, rgb(23, 14, 83) 0%, rgb(61, 60, 106) 100%)"}},o.a.createElement("div",{style:{width:"720px",margin:"auto",textAlign:"center"}},o.a.createElement("h2",{style:{fontSize:"40px",textAlign:"center",fontWeight:"700",color:"#fff",letterSpacing:"-0.025em"}},"A plataforma definitiva para melhorar a qualidade de servi\xe7os."),o.a.createElement("br",null),o.a.createElement("p",{style:{fontSize:"15px",color:"#fff"}},"A nossa solu\xe7\xe3o permite o monitoramento em tempo real da qualidade de servi\xe7o. Proporcionamos o anbiente propicio onde utentes expressam a realidade local!"),o.a.createElement("br",null),o.a.createElement(Ee.a,{variant:"contained",disableElevation:!0,color:"primary"},"Avalia\xe7\xe3o Gratuita"),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("div",{style:{textAlign:"center",position:"relative"}},o.a.createElement("div",{style:{maxWidth:"750px",backgroundImage:"url(".concat(xe.a,")"),borderRadius:"1em",backgroundSize:"contain",backgroundRepeat:"no-repeat",minHeight:"400px",margin:"auto"}}),o.a.createElement("div",{style:{opacity:".3",height:"400px",marginTop:"-400px",width:"752px",marginLeft:"auto",marginRight:"auto",backgroundImage:"linear-gradient(-139deg, rgb(23, 14, 83) 0%, rgb(61, 60, 106) 100%)"}}))),o.a.createElement("div",{style:{marginTop:"-9.5%",minHeight:"100px",zIndex:"1000",position:"relative"}},o.a.createElement("svg",{"data-name":"Layer 1",viewBox:"0 0 1920 184.16",fill:"#fafafa",style:{zIndex:"1000"}},o.a.createElement("path",{d:"M0,2.16s260.5-32,880,150c.16.05,54,14.62,80,15.08,31.06.55,80.88-15,81.06-15.08,603.5-176.84,879-150,879-150v182H0Z"}))),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("span",{style:{display:"block",fontSize:"14px",letterSpacing:"0.15em",fontWeight:"700",color:"#231d5a"}},"ATENDIMENTO AO UTENTE"),o.a.createElement("h2",{style:{fontSize:"36px",fontWeight:"700",color:"#0f2137",letterSpacing:"-0.025em",width:"600px",margin:"auto"}},"A nossa promessa \xe9 melhorar a qualidade de servi\xe7os de uma maneira org\xe2nica e cooperativa"),o.a.createElement("br",null),o.a.createElement("p",{style:{fontSize:"16px",color:"#5d646d",width:"470px",margin:"auto"}},"A ascens\xe3o do uso dos dispositivos m\xf3veis transforma totalmente a maneira como consumimos, transmitimos e processamos  informa\xe7\xf5es. Esta \xe9 a \xe9ra da informa\xe7\xe3o, transmitimos dados relevantes para melhoria dos servi\xe7os")),o.a.createElement(be.a,null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{style:{background:"linear-gradient(-139deg, rgb(23, 14, 83) 0%, rgb(61, 60, 106) 100%)",borderRadius:"1em",padding:"20px"}},o.a.createElement(i.a,{display:"flex"},o.a.createElement(i.a,{style:{color:"#fff",width:"450px"}},o.a.createElement("h3",{style:{fontWeight:"bold",fontSize:"24px"}},"Caso tenha alguma d\xfavida n\xe3o exite em contactar")),o.a.createElement(i.a,{flexGrow:1,style:{textAlign:"right",placeContent:"center"}},o.a.createElement(Ee.a,{style:{marginTop:"17px",backgroundColor:"#edcd37",color:"#000"}},"Entre em contacto"))))),o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(be.a,null,o.a.createElement(ye.a,{container:!0},o.a.createElement(ye.a,{item:!0,sm:3},o.a.createElement("b",null,"Sobre n\xf3s"),o.a.createElement("br",null),o.a.createElement("ul",{style:{listStyle:"none"}},o.a.createElement("li",null,"Supporte"),o.a.createElement("li",null,"Supporte ao cliente"),o.a.createElement("li",null,"Sobre n\xf3s"),o.a.createElement("li",null,"Copyright"))),o.a.createElement(ye.a,{item:!0,sm:3},o.a.createElement("b",null,"Nossa informa\xe7\xe3o"),o.a.createElement("br",null),o.a.createElement("ul",{style:{listStyle:"none"}},o.a.createElement("li",null,"Politica de privacidade"),o.a.createElement("li",null,"Termos e Condi\xe7\xf5es"))),o.a.createElement(ye.a,{item:!0,sm:3},o.a.createElement("b",null,"Minha Conta")),o.a.createElement(ye.a,{item:!0,sm:3},o.a.createElement("b",null,"Nossa Politica")))),o.a.createElement("br",null)))}var Ce=n(103),Oe=n(205),we=n(202),ze=n(197),Ae=n(196),Pe=n(73);function De(){var e=Object(Ae.a)(["hideWelcomeMessage"]),t=Object(p.a)(e,1)[0],n=Object(a.useState)("csrftoken"),r=Object(p.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){i(t.csrftoken)}),[]),o.a.createElement("div",{style:{height:"calc(100vh - 100px)",paddingTop:"100px",backgroundColor:"#eee"}},o.a.createElement("form",{method:"post",action:"".concat(Object(Pe.b)(),"/login")},o.a.createElement(Ce.a,{style:{margin:"auto",maxWidth:"450px",padding:"20px"}},o.a.createElement(ye.a,{container:!0,spacing:2},o.a.createElement(ye.a,{item:!0,xs:12,style:{paddingTop:"20px",textAlign:"center"}},o.a.createElement(x.a,{variant:"h6",color:"initial"},"Login")),o.a.createElement(ye.a,{item:!0,sm:12,xs:12},o.a.createElement(we.a,{severity:"info",style:{width:"calc(100% - 32px)"}},o.a.createElement(ze.a,null,"Informa\xe7\xe3o"),"Apenas ",o.a.createElement("strong",null,"institui\xe7\xf5es")," registadas podem fazer login")),o.a.createElement("input",{type:"hidden",name:"csrfmiddlewaretoken",value:c}),o.a.createElement(ye.a,{item:!0,sm:12,xs:12},o.a.createElement(Oe.a,{name:"username",margin:"dense",type:"text",label:"Username/Email",fullWidth:!0,variant:"outlined"})),o.a.createElement(ye.a,{item:!0,sm:12,xs:12},o.a.createElement(Oe.a,{name:"password",margin:"dense",type:"password",label:"Senha",fullWidth:!0,variant:"outlined"})),o.a.createElement(ye.a,{item:!0,sm:12,xs:12,style:{textAlign:"center"}},o.a.createElement(Ee.a,{disableElevation:!0,variant:"contained"},"Recuperar senha")," \xa0",o.a.createElement(Ee.a,{type:"submit",disableElevation:!0,color:"primary",variant:"contained"},"Login"))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.location.href.slice("/").includes("mobile")?c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(W,null)),document.getElementById("root")):window.location.href.slice("/").includes("landing-page")?c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ve,null)),document.getElementById("root")):window.location.href.slice("/").includes("login")?c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(De,null)),document.getElementById("root")):c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return l}));var a=n(4),o=n.n(a);function r(){return window.location.origin.includes("localhost")?"http://localhost:8000":window.location.origin}var c=r()+"/api";var i={headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","X-CSRFToken":function(e){var t=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)");return t?t.pop():""}("csrftoken")}};function l(){return{getOrganisationUnits:function(){return o.a.get("".concat(c,"/orgUnits"),i)},getOrgUnitVisibilities:function(){return o.a.get("".concat(c,"/orgUnitVisibilities"),i)},deleteOrgUnitByID:function(e){return o.a.delete("".concat(c,"/orgUnits/").concat(e),i)},getFieldsBySeccionId:function(e){return o.a.get("".concat(c,"/fieldsBysectionID?section_id=").concat(e),i)},getFormByID:function(e){return o.a.get("".concat(c,"/forms?id=").concat(e),i)},getForms:function(){return o.a.get("".concat(c,"/forms"),i)},postQuickForm:function(e){return o.a.post("".concat(c,"/quickForm"),e,i)},postForm:function(e){return o.a.post("".concat(c,"/forms"),e,i)},getFormByOrgUnit:function(e){return o.a.get("".concat(c,"/forms?attribute_set.org_units.id=").concat(e),i)},getFormSectionsByFormID:function(e){return o.a.get("".concat(c,"/sectionsByFormID?form_id=").concat(e),i)},getEntityByID:function(e){return o.a.get("".concat(c,"/entities?id=").concat(e),i)},getEntities:function(e){return o.a.get("".concat(c,"/entities"),i)},getEntityFormsByID:function(e){return o.a.get("".concat(c,"/entityForms?id=").concat(e),i)},getEntityFormsByEntityID:function(e){return o.a.get("".concat(c,"/entityForms?entity__id=").concat(e),i)},getEntityForms:function(){return o.a.get("".concat(c,"/entityForms"),i)},postEntityForm:function(e){return o.a.post("".concat(c,"/entityForms"),e,i)},getEntityDependencies:function(e){return o.a.get("".concat(c,"/entities-depemdencies/").concat(e),i)},getSectionsByIDs:function(e){return o.a.get("".concat(c,"/sections?").concat(e.map((function(e){return"id_in=".concat(e)})).join("&")),i)},getCircleByPoint:function(e,t){return o.a.get("".concat(c,"/getCircleByPoint?lat=").concat(e,"&lng=").concat(t),i)},getOrgUnitsWithinRadius:function(e,t){return o.a.get("".concat(c,"/orgUnitsWithinRadius?lat=").concat(e,"&lng=").concat(t,"&radius=100&_").concat((new Date).getTime()),i)},postOrganisationUnitsProximity:function(e){return o.a.post("".concat(c,"/orgUnitsProximity"),e,i)},getOrganisationUnitsByIDs:function(e){return o.a.get("".concat(c,"/orgUnits?orgUnitType=Institui\xe7\xe3o&").concat(e.map((function(e){return"id__in=".concat(e)})).join("&")),i)},getOrganisationUnitByID:function(e){return o.a.get("".concat(c,"/orgUnits?id=").concat(e),i)},postOrganisationUnits:function(e){return o.a.post("".concat(c,"/orgUnits"),e,i)},getOrganisationUnitTypes:function(){return o.a.get("".concat(c,"/orgUnitTypes"),i)},getOrganisationUnitLevels:function(){return o.a.get("".concat(c,"/orgUnitLevels"),i)},getValueTypes:function(){return o.a.get("".concat(c,"/types"),i)},getCategoryCombos:function(){return o.a.get("".concat(c,"/categoryCombos"),i)},getCategoryCombosByFilter:function(e){return o.a.get("".concat(c,"/categoryCombos?").concat(e),i)},getCategoryComboCategories:function(){return o.a.get("".concat(c,"/categoryComboCategories"),i)},getOptionSets:function(){return o.a.get("".concat(c,"/optionSets"),i)},deleteOptionSetByID:function(e){return o.a.delete("".concat(c,"/optionSets/").concat(e),i)},getOptions:function(){return o.a.get("".concat(c,"/options"),i)},postOptions:function(e){return o.a.post("".concat(c,"/options"),e,i)},getSections:function(){return o.a.get("".concat(c,"/sections"),i)},postSection:function(e){return o.a.post("".concat(c,"/sections"),e,i)},postStage:function(e){return o.a.post("".concat(c,"/stages"),e,i)},postAttributeValueSet:function(e){return o.a.post("".concat(c,"/valueSets"),e,i)},deleteAttributeSetByID:function(e){return o.a.delete("".concat(c,"/attributeSets/").concat(e),i)},deleteFormByID:function(e){return o.a.delete("".concat(c,"/forms/").concat(e),i)},getValueSets:function(){return o.a.get("".concat(c,"/valueSets"),i)},getSimpleValueSets:function(e){return o.a.get("".concat(c,"/simple_value_sets?attributeSet__id=").concat(e),i)},getValueSetByID:function(e){return o.a.get("".concat(c,"/valueSets?id=").concat(e),i)},getValueSetByAttributeSetID:function(e){return o.a.get("".concat(c,"/valueSets?attributeSet__id=").concat(e),i)},getEntityValueSetsByEntityID:function(e){return o.a.get("".concat(c,"/entityValueSets?entity__id=").concat(e),i)},postEntityValueSet:function(e){return o.a.post("".concat(c,"/entityValueSets"),e,i)},getAttributeValueSets:function(e){return o.a.get("".concat(c,"/attributeValueSets?attributeSet__id=").concat(e),i)},getAttributeValueSet:function(e){return o.a.get("".concat(c,"/attributeValueSets/").concat(e),i)},getStages:function(){return o.a.get("".concat(c,"/stages"),i)},getUsers:function(){return o.a.get("".concat(c,"/users"),i)},postUser:function(e){return o.a.post("".concat(c,"/users"),e,i)},postGroups:function(e){return o.a.post("".concat(c,"/groups"),e,i)},getPermissions:function(){return o.a.get("".concat(c,"/permissions"),i)},getGroups:function(){return o.a.get("".concat(c,"/groups"),i)},getStage:function(e){return o.a.get("".concat(c,"/stages/").concat(e),i)},getCategories:function(){return o.a.get("".concat(c,"/categories"),i)},getCategoryOptions:function(){return o.a.get("".concat(c,"/categoryOptions"),i)},postAttributeSets:function(e){return o.a.post("".concat(c,"/attributeSets"),e,i)},putAttributeSet:function(e,t){return o.a.put("".concat(c,"/attributeSets/").concat(e),t,i)},putAttribute:function(e,t){return o.a.put("".concat(c,"/attributes/").concat(e),t,i)},getAttributeById:function(e){return o.a.get("".concat(c,"/attributes/").concat(e),i)},getAttributeSet:function(){return o.a.get("".concat(c,"/attributeSets"),i)},getAttributeSetById:function(e){return o.a.get("".concat(c,"/attributeSets/").concat(e),i)},getAttributeSetByOrgUnit:function(e){return o.a.get("".concat(c,"/attributeSets?orgUnits__id=").concat(e),i)},getAttributeSetDependencies:function(e){return o.a.get("".concat(c,"/attributeSetDepemdencies/").concat(e),i)},postAttributes:function(e){return o.a.post("".concat(c,"/attributes"),e,i)},getAttributes:function(){return o.a.get("".concat(c,"/attributes"),i)},deleteAttributeByID:function(e){return o.a.delete("".concat(c,"/attributes/").concat(e),i)},getDataDimensionTypes:function(){return o.a.get("".concat(c,"/dataDimensionTypes"),i)},getTypes:function(){return o.a.get("".concat(c,"/types"),i)},getControls:function(){return o.a.get("".concat(c,"/controls"),i)},getPeriodTypes:function(){return o.a.get("".concat(c,"/periodTypes"),i)},getValidationRules:function(){return o.a.get("".concat(c,"/validationRules"),i)},postValidationRules:function(e){return o.a.post("".concat(c,"/validationRules"),e,i)},postCategoryCombos:function(e){return o.a.post("".concat(c,"/categoryCombos"),e,i)},postCategory:function(e){return o.a.post("".concat(c,"/categories"),e,i)},postCategoryOptions:function(e){return o.a.post("".concat(c,"/categoryOptions"),e,i)},postOptionSets:function(e){return o.a.post("".concat(c,"/optionSets"),e,i)},getCategoryCombosIN:function(e){return o.a.get("".concat(c,"/categoryCombos?").concat(e),i)},getOptionSetsIN:function(e){return o.a.get("".concat(c,"/optionSets?").concat(e),i)},getCategoriesIN:function(e){return o.a.get("".concat(c,"/categories?").concat(e),i)},getCategoryComboCategoriesIN:function(e){return o.a.get("".concat(c,"/category-combo-categories?").concat(e),i)}}}},98:function(e,t,n){e.exports=n.p+"static/media/appscreenshoot.8e238b62.jpg"}},[[117,10,11]]]);
//# sourceMappingURL=main.27e0da40.chunk.js.map