(this["webpackJsonpfrontend.atendimento.co.mz"]=this["webpackJsonpfrontend.atendimento.co.mz"]||[]).push([[24],{1548:function(e,a,t){e.exports={sidenav:"dashboard_sidenav__3jBkL",main:"dashboard_main__3Noun",container:"dashboard_container__3631C",section:"dashboard_section__1x6Vy",listItem:"dashboard_listItem__3ilf8",field:"dashboard_field__STFG5",fieldDragIndicator:"dashboard_fieldDragIndicator__R-Mma",listItemDragIndicator:"dashboard_listItemDragIndicator__1A8cf",listItemIcon:"dashboard_listItemIcon__3bGAQ",searchTextBox:"dashboard_searchTextBox__338aS",h6:"dashboard_h6__1d5Qp",h6Secondary:"dashboard_h6Secondary__3ZXx3",sticky:"dashboard_sticky__19mAm",stickyInner:"dashboard_stickyInner__wZG00",fab:"dashboard_fab__3T1Cm",containerMargins:"dashboard_containerMargins__2Dtwz"}},1806:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return K}));var n=t(29),i=t.n(n),c=t(28),r=t(51),s=t(16),o=t(0),d=t.n(o),l=t(18),j=t(438),u=t(439),b=t(440),h=t(441),m=t(442),O=t(443),f=t(400),x=t(429),_=t(181),p=t(433),v=t(403),g=t(404),y=t(402),C=t(227),k=t(449),I=t(448),w=t(405),N=t(88),z=t(458),D=t(456),S=t(139),H=t.n(S),V=t(89),A=t.n(V),M=t(447),W=t(1548),T=t.n(W),B=t(34),P=t(414),R=t.n(P),E=t(648),G=t.n(E),Z=t(413),q=t.n(Z),F=t(2),J=[],L=[],Q={},U=[],X=[];function K(e){var a=Object(o.useState)(!1),t=Object(s.a)(a,2),n=t[0],S=t[1],V=Object(o.useState)({changeRoute:!1,to:""}),W=Object(s.a)(V,2),P=W[0],E=W[1],Z=Object(o.useState)(!1),K=Object(s.a)(Z,2),Y=K[0],$=K[1],ee=Object(o.useState)(!0),ae=Object(s.a)(ee,2),te=ae[0],ne=ae[1];function ie(){return(ie=Object(r.a)(i.a.mark((function e(){var a,t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ne(!0),e.next=3,Promise.all([Object(B.c)().getDashboards(),Object(B.c)().getUsers()]);case 3:a=e.sent,t=Object(s.a)(a,2),n=t[0],c=t[1],J=n.data,U=c.data,ne(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(o.useEffect)((function(){J=[],L=[],Q={},S(!n),function(){ie.apply(this,arguments)}()}),[]);var ce={addChart:function(e){L.push(e),S(!n)},removeChart:function(e){L=L.filter((function(a){return a!==e})),S(!n)}};function re(){return(re=Object(r.a)(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return Q.dashboardElements=L.map((function(e,a){return{dashboard:{id:e},order:a}})),Q.users=X,a.next=4,Promise.resolve(Object(B.c)().postDashboardColecction(Q));case 4:e.messageBox("Dashboard criado com exito!"),E({to:"/dashboards",changeRoute:!0});case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}var se=function(e,a){return Object(F.jsx)(_.a,{elevation:0,style:{border:"1px solid #c4c4c4",width:"100%",height:280,overflow:"auto"},square:!0,children:te?Object(F.jsx)("div",{style:{width:"100%",height:280,textAlign:"center",marginTop:110},children:Object(F.jsx)(x.a,{})}):Object(F.jsxs)(y.a,{dense:!0,component:"div",role:"list",children:[e.map((function(e,t){return Object(F.jsxs)(C.a,{onDoubleClick:function(){return ce[a](e.id)},role:"listitem",button:!0,children:[Object(F.jsx)(I.a,{primary:e.displayName}),Object(F.jsx)(k.a,{children:Object(F.jsx)(v.a,{color:a.includes("add")?"primary":"secondary",size:"small",onClick:function(){ce[a](e.id)},children:a.includes("remove")?Object(F.jsx)(R.a,{}):Object(F.jsx)(G.a,{})})})]},t)})),Object(F.jsx)(C.a,{})]})})};return P.changeRoute?Object(F.jsx)(l.a,{to:P.to}):Object(F.jsx)("div",{className:T.a.main,children:Object(F.jsxs)(p.a,{children:[Object(F.jsx)(_.a,{elevation:0,square:!0,className:T.a.sticky,children:Object(F.jsxs)("div",{className:T.a.stickyInner,children:[Object(F.jsx)(N.a,{variant:"h6",className:T.a.h6,children:"Criar dashboard"}),Object(F.jsx)(M.a,{color:"primary",className:T.a.fab,onClick:function(){$(!0)},children:Object(F.jsx)(H.a,{})})]})}),Object(F.jsxs)(f.a,{container:!0,spacing:2,children:[Object(F.jsx)(f.a,{item:!0,sm:12,children:Object(F.jsx)(w.a,{variant:"outlined",id:"name",label:"Nome",value:Q.name,margin:"dense",fullWidth:!0,onChange:function(e){Q.name=e.target.value}})}),Object(F.jsx)(f.a,{item:!0,sm:12,children:Object(F.jsx)(w.a,{id:"displayName",label:"Diaplay name",fullWidth:!0,margin:"dense",value:Q.displayName,variant:"outlined",onChange:function(e){Q.displayName=e.target.value}})}),Object(F.jsx)(f.a,{item:!0,sm:12,children:Object(F.jsx)(w.a,{id:"description",rows:4,multiline:!0,label:"Description",margin:"dense",value:Q.description,variant:"outlined",fullWidth:!0,onChange:function(e){Q.description=e.target.value}})}),Object(F.jsx)(f.a,{item:!0,sm:6,children:se(J.filter((function(e){return!L.includes(e.id)})),"addChart")}),Object(F.jsx)(f.a,{item:!0,sm:6,children:se(L.map((function(e){return J.filter((function(a){return a.id==e}))[0]})),"removeChart")}),Object(F.jsx)(f.a,{item:!0,sm:12,children:Object(F.jsx)(D.a,{onChange:function(e,a){X.push(a);var t=new Set(X);X=Array.from(t),S(!n)},getOptionLabel:function(e){return e.username},fullWidth:!0,id:"utilizadores",size:"small",options:U,style:{minWidth:200},renderInput:function(e){return Object(F.jsx)(w.a,Object(c.a)(Object(c.a)({variant:"outlined",margin:"dense",fullWidth:!0},e),{},{label:"Adicione utilizadores"}))}})}),Object(F.jsx)(f.a,{item:!0,sm:12,children:Object(F.jsx)(j.a,{component:_.a,children:Object(F.jsxs)(u.a,{size:"small",children:[Object(F.jsx)(b.a,{children:Object(F.jsxs)(h.a,{children:[Object(F.jsx)(m.a,{children:"Username"}),Object(F.jsx)(m.a,{children:"Name"}),Object(F.jsx)(m.a,{children:"Email"}),Object(F.jsx)(m.a,{})]})}),Object(F.jsx)(O.a,{children:X.map((function(e,a){return Object(F.jsxs)(h.a,{children:[Object(F.jsx)(m.a,{component:"th",scope:"row",children:e.username}),Object(F.jsx)(m.a,{children:e.first_name+" "+e.last_name}),Object(F.jsx)(m.a,{children:e.email}),Object(F.jsx)(m.a,{align:"right",children:Object(F.jsx)(v.a,{onClick:function(){X=X.filter((function(e,t){return t!==a})),S(!n)},size:"small",children:Object(F.jsx)(q.a,{})})})]},a)}))})]})})})]}),Object(F.jsx)("br",{}),Object(F.jsx)(z.a,{open:Y,autoHideDuration:5e3,onClose:function(){$(!1)},message:"Pretende salvar este dashboard?",action:Object(F.jsxs)(d.a.Fragment,{children:[Object(F.jsx)(g.a,{color:"secondary",size:"small",onClick:function(){return re.apply(this,arguments)},children:"Salvar"}),Object(F.jsx)(v.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(){$(!1)},children:Object(F.jsx)(A.a,{fontSize:"small"})})]}),className:T.a.snackbar})]})})}},648:function(e,a,t){"use strict";var n;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=(0,((n=t(69))&&n.__esModule?n:{default:n}).default)("M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");a.default=i}}]);