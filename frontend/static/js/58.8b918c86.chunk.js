(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[58],{6667:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return U}));var n=t(227),r=t.n(n),l=t(228),i=t(15),c=t(0),o=t.n(c),u=t(12),m=t(107),s=t(192),d=t(149),f=t(194),E=t(285),p=t(197),h=t(211),b=t(55),g=t(213),v=t(216),y=t(882),C=t(862),O=t(866),j=t(864),w=t(865),k=t(863),x=t(212),z=t(6697),D=t(56),N=t(110),W=[],S=[],A=[],R={},J=[],P=null;function U(e){var a=Object(c.useState)(!1),t=Object(i.a)(a,2),n=t[0],U=t[1],_=Object(c.useState)({changeRoute:!1,to:""}),q=Object(i.a)(_,2),B=q[0],I=q[1],L=Object(c.useState)(!0),F=Object(i.a)(L,2),G=(F[0],F[1]);function H(){return(H=Object(l.a)(r.a.mark((function e(){var a,t,n,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P=window.location.href.split("/"),P=atob(P[P.length-1]),e.next=4,Promise.all([Object(D.c)().getDashboards(),Object(D.c)().getDashboardColecction("/".concat(P)),Object(D.c)().getUsers()]);case 4:a=e.sent,t=Object(i.a)(a,3),n=t[0],l=t[1],c=t[2],R=l.data,S=R.dashboardElements.map((function(e){return e.dashboard.id})),J=l.data.users,W=n.data,A=c.data,G(!1);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){W=[],S=[],function(){H.apply(this,arguments)}()}),[]);var K={addChart:function(e){S.push(e),U(!n)},removeChart:function(e){S=S.filter((function(a){return a!==e})),U(!n)}};function M(){return(M=Object(l.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return R.dashboardElements=S.map((function(e,a){return{dashboard:{id:e},order:a}})),R.users=J,a.next=4,Promise.resolve(Object(D.c)().putDashboardColecction(R,P));case 4:e.messageBox("Colec\xe7\xe3o actualizada com exito!"),I({to:"dashboardCollection",changeRoute:!0});case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}var Q=function(e,a){return o.a.createElement(m.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0},o.a.createElement(s.a,{dense:!0,component:"div",role:"list"},e.map((function(e,t){return o.a.createElement(d.a,{onDoubleClick:function(){return K[a](e.id)},key:t,role:"listitem",button:!0},o.a.createElement(f.a,{primary:e.displayName}),o.a.createElement(E.a,null,o.a.createElement(p.a,{color:a.includes("add")?"primary":"secondary",size:"small",onClick:function(){K[a](e.id)}},a.includes("remove")?o.a.createElement(N.f,null):o.a.createElement(N.g,null))))})),o.a.createElement(d.a,null)))};return B.changeRoute?o.a.createElement(u.a,{to:B.to}):o.a.createElement(h.a,null,o.a.createElement(b.a,{variant:"h6"},"Edi\xe7\xe3o de cole\xe7\xe3o de gr\xe1ficos"),o.a.createElement(g.a,{container:!0,spacing:2},o.a.createElement(g.a,{item:!0,sm:12},o.a.createElement(v.a,{variant:"outlined",id:"name",label:"Nome",value:R.name,margin:"dense",fullWidth:!0,onChange:function(e){R.name=e.target.value}})),o.a.createElement(g.a,{item:!0,sm:12},o.a.createElement(v.a,{id:"displayName",label:"Diaplay name",fullWidth:!0,margin:"dense",value:R.displayName,variant:"outlined",onChange:function(e){R.displayName=e.target.value}})),o.a.createElement(g.a,{item:!0,sm:12},o.a.createElement(v.a,{id:"description",rows:4,multiline:!0,label:"Description",margin:"dense",value:R.description,variant:"outlined",fullWidth:!0,onChange:function(e){R.description=e.target.value}})),o.a.createElement(g.a,{item:!0,sm:6},Q(W.filter((function(e){return!S.includes(e.id)})),"addChart")),o.a.createElement(g.a,{item:!0,sm:6},Q(S.map((function(e){return W.filter((function(a){return a.id==e}))[0]})),"removeChart")),o.a.createElement(g.a,{item:!0,sm:12},o.a.createElement(z.a,{onChange:function(e,a){J.push(a);var t=new Set(J);J=Array.from(t),U(!n)},getOptionLabel:function(e){return e.username},fullWidth:!0,id:"utilizadores",size:"small",options:A,style:{minWidth:200},renderInput:function(e){return o.a.createElement(v.a,Object.assign({variant:"outlined",margin:"dense",fullWidth:!0},e,{label:"Adicione utilizadores"}))}})),o.a.createElement(g.a,{item:!0,sm:12},o.a.createElement(y.a,{component:m.a},o.a.createElement(C.a,{size:"small"},o.a.createElement(O.a,null,o.a.createElement(j.a,null,o.a.createElement(w.a,null,"Username"),o.a.createElement(w.a,null,"Name"),o.a.createElement(w.a,null,"Email"),o.a.createElement(w.a,null))),o.a.createElement(k.a,null,J.map((function(e,a){return o.a.createElement(j.a,{key:a},o.a.createElement(w.a,{component:"th",scope:"row"},e.username),o.a.createElement(w.a,null,e.first_name+" "+e.last_name),o.a.createElement(w.a,null,e.email),o.a.createElement(w.a,{align:"right"},o.a.createElement(p.a,{onClick:function(){J=J.filter((function(e,t){return t!==a})),U(!n)},size:"small"},o.a.createElement(N.h,null))))})))))),o.a.createElement(g.a,{item:!0,style:{textAlign:"right"},sm:12},o.a.createElement(x.a,{color:"secondary"},"Cancelar"),"\xa0\xa0",o.a.createElement(x.a,{onClick:function(){return M.apply(this,arguments)},color:"primary",variant:"contained",disableElevation:!0},"Salvar"))))}}}]);
//# sourceMappingURL=58.8b918c86.chunk.js.map