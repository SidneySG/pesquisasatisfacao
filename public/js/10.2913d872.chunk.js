(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[10],{6670:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n(12),r=n(0),i=n.n(r),c=n(223),l=n(224),o=n(59),s=n(226),u=n(212),m=n(228),f=n(225),d=n(858),b=n(27);function E(){var e=Object(d.a)(["hideWelcomeMessage"]),t=Object(a.a)(e,1)[0],n=Object(r.useState)("csrftoken"),E=Object(a.a)(n,2),p=E[0],v=E[1];return Object(r.useEffect)((function(){v(t.csrftoken)}),[]),i.a.createElement(c.a,null,i.a.createElement("form",{method:"post",action:"".concat(Object(b.b)(),"/login")},i.a.createElement("input",{type:"hidden",name:"csrfmiddlewaretoken",value:p}),i.a.createElement(l.a,{container:!0,spacing:2},i.a.createElement(l.a,{item:!0,xs:12,style:{paddingTop:"20px",textAlign:"center"}},i.a.createElement(o.a,{variant:"h6",color:"initial"},"Login")),i.a.createElement(l.a,{item:!0,sm:12,xs:12},i.a.createElement(m.a,{severity:"info",style:{width:"calc(100% - 32px)"}},i.a.createElement(f.a,null,"Informa\xe7\xe3o"),"Apenas ",i.a.createElement("strong",null,"institui\xe7\xf5es")," registadas podem fazer login")),i.a.createElement(l.a,{item:!0,sm:12,xs:12},i.a.createElement(s.a,{name:"username",margin:"dense",type:"text",label:"Email",fullWidth:!0,variant:"outlined"})),i.a.createElement(l.a,{item:!0,sm:12,xs:12},i.a.createElement(s.a,{name:"password",margin:"dense",type:"password",label:"Senha",fullWidth:!0,variant:"outlined"})),i.a.createElement(l.a,{item:!0,sm:12,xs:12,style:{textAlign:"center"}},i.a.createElement(u.a,{disableElevation:!0,variant:"contained"},"Recuperar senha")," \xa0",i.a.createElement(u.a,{type:"submit",disableElevation:!0,color:"primary",variant:"contained"},"Login")))),i.a.createElement("br",null),i.a.createElement("br",null))}},858:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n(87);function i(e){var t=Object(a.useContext)(r.b);if(!t)throw new Error("Missing <CookiesProvider>");var n=t.getAll(),i=Object(a.useState)(n),c=i[0],l=i[1],o=Object(a.useRef)(c);return Object(a.useEffect)((function(){function n(){var n=t.getAll();(function(e,t,n){if(!e)return!0;for(var a=0,r=e;a<r.length;a++){var i=r[a];if(t[i]!==n[i])return!0}return!1})(e||null,n,o.current)&&l(n),o.current=n}return t.addChangeListener(n),function(){t.removeChangeListener(n)}}),[t]),[c,Object(a.useMemo)((function(){return t.set.bind(t)}),[t]),Object(a.useMemo)((function(){return t.remove.bind(t)}),[t])]}}}]);
//# sourceMappingURL=10.2913d872.chunk.js.map