(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[26],{322:function(t,e){function n(t,e){return function n(){if(!n.hookCalled)return n.hookCalled=!0,t.apply(e,arguments)}}t.exports={hook:function(t,e,r){if(1!==arguments.length||"object"!==typeof t){var a=this.prototype||this,o=a._pres=a._pres||{},i=a._posts=a._posts||{};return o[t]=o[t]||[],i[t]=i[t]||[],a[t]=function(){var o,i=this,c=arguments[arguments.length-1],u=this._pres[t],l=this._posts[t],s=u.length,f=-1,p=a[t].numAsyncPres,h=function e(){if(arguments[0]instanceof Error)return g(arguments[0]);var r,l,p=Array.prototype.slice.call(arguments);if(!p.length||null==arguments[0]&&"function"===typeof c||(o=p),++f<s){if((r=u[f]).isAsync&&r.length<2)throw new Error("Your pre must have next and done arguments -- e.g., function (next, done, ...)");if(r.length<1)throw new Error("Your pre must have a next argument -- e.g., function (next, ...)");return l=(r.isAsync?[n(e),n(_asyncsDone)]:[n(e)]).concat(o),r.apply(i,l)}return a[t].numAsyncPres?void 0:d.apply(i,o)},d=function(){var t,r,a,u,p=Array.prototype.slice.call(arguments);if(f===s)return u=function(){if(arguments[0]instanceof Error)return g(arguments[0]);var t,e,s=Array.prototype.slice.call(arguments,1);if(s.length&&(o=s),++a<r){if((t=l[a]).length<1)throw new Error("Your post must have a next argument -- e.g., function (next, ...)");return e=[n(u)].concat(o),t.apply(i,e)}return"function"===typeof c?c.apply(i,arguments):void 0},"function"===typeof c&&(p[p.length-1]=n(u)),r=l.length,a=-1,t=e.apply(i,p),r&&"function"!==typeof c?u():t};if(p);function g(t){if("function"==typeof c)return c(t);if(r)return r.call(i,t);throw t}return h.apply(this,arguments)},a[t].numAsyncPres=0,this}for(var c in t)this.hook(c,t[c])},pre:function(t,e,n,r){"boolean"!==typeof arguments[1]&&(r=n,n=e,e=!1);var a=this.prototype||this,o=a._pres=a._pres||{};return this._lazySetupHooks(a,t,r),(n.isAsync=e)&&a[t].numAsyncPres++,(o[t]=o[t]||[]).push(n),this},post:function(t,e,n){2===arguments.length&&(n=e,e=!1);var r=this.prototype||this,a=r._posts=r._posts||{};return this._lazySetupHooks(r,t),(a[t]=a[t]||[]).push(n),this},removePre:function(t,e){var n=this.prototype||this,r=n._pres||n._pres||{};return r[t]?(1===arguments.length?r[t].length=0:r[t]=r[t].filter((function(t){return t!==e})),this):this},_lazySetupHooks:function(t,e,n){"undefined"===typeof t[e].numAsyncPres&&this.hook(e,t[e],n)}}},343:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}n.d(e,"a",(function(){return r}))},384:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(84),a=n(12),o=n(343),i=n(0),c=n.n(i),u=(n(322),n(285)),l=n(275);function s(){var t=Object(u.a)(["\n  display: grid;\n  grid-gap: ",";\n"]);return s=function(){return t},t}function f(){var t=Object(u.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: ",";\n"]);return f=function(){return t},t}var p=l.a.div(f(),(function(t){return t.gap||"1em"})),h=l.a.div(s(),(function(t){return t.gap||"1em"}));function d(t){var e=t.children,n=t.gap,u=t.minWidth,l=void 0===u?500:u,s=Object(o.a)(t,["children","gap","minWidth"]),f=Object(i.useRef)(),d=Object(i.useState)(3),g=Object(a.a)(d,2),m=g[0],y=g[1],v=Object(r.a)(Array(m)).map((function(){return[]}));!function(t,e){t.forEach((function(t,n){return e[n%e.length].push(t)}))}(e,v);return Object(i.useEffect)((function(){return y(Math.ceil(f.current.offsetWidth/l))}),[]),c.a.createElement(p,Object.assign({ref:f,gap:n},s),Object(r.a)(Array(m)).map((function(t,e){return c.a.createElement(h,{key:e,gap:n},v[e])})))}},393:function(t,e,n){"use strict";var r=n(1),a=n(2),o=n(0),i=(n(6),n(4)),c=n(5),u=n(16),l=o.forwardRef((function(t,e){var n=t.absolute,c=void 0!==n&&n,u=t.classes,l=t.className,s=t.component,f=void 0===s?"hr":s,p=t.flexItem,h=void 0!==p&&p,d=t.light,g=void 0!==d&&d,m=t.orientation,y=void 0===m?"horizontal":m,v=t.role,b=void 0===v?"hr"!==f?"separator":void 0:v,E=t.variant,O=void 0===E?"fullWidth":E,j=Object(a.a)(t,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(f,Object(r.a)({className:Object(i.a)(u.root,l,"fullWidth"!==O&&u[O],c&&u.absolute,h&&u.flexItem,g&&u.light,"vertical"===y&&u.vertical),role:b,ref:e},j))}));e.a=Object(c.a)((function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(u.c)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(l)},6683:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var r=n(76),a=n.n(r),o=n(83),i=n(12),c=n(0),u=n.n(c),l=n(17),s=n(59),f=n(393),p=n(212),h=n(31),d=n(384),g=n(852),m=null,y=[];function v(){var t=Object(c.useState)(!1),e=Object(i.a)(t,2),n=e[0],r=e[1];function v(){return(v=Object(o.a)(a.a.mark((function t(){var e,o,c,u,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m=window.location.href.split("/"),m=atob(m[m.length-1]),console.log(m),t.next=5,Promise.all([Object(h.e)().getEntityByID(m),Object(h.e)().getEntityValueSetsByEntityID(m),Object(h.e)().getEntityFormsByEntityID(m)]);case 5:e=t.sent,o=Object(i.a)(e,3),c=o[0],u=o[1],l=o[2],c.data[0],y=l.data,u.data,r(!n);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),u.a.createElement("div",null,u.a.createElement(s.a,{variant:"h5"},"Detalhes da Entidade"),u.a.createElement(f.a,null),u.a.createElement(p.a,{component:l.b,to:"/entityForm/".concat(btoa(m)),variant:"contained"},"Registrar"),u.a.createElement(s.a,{variant:"h5"},"Formularios"),u.a.createElement(s.a,{variant:"h5"},"Entidades Registadas"),y.length>0&&u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{minWidth:300},y.map((function(t,e){return u.a.createElement(g.a,{key:e,placeContent:"left"},u.a.createElement(l.b,{style:{textDecoration:"none",color:"#fff",position:"relative",top:"0px"},to:"/entityForm/".concat(btoa(t.id))},u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{variant:"button"},t.displayName),u.a.createElement(s.a,null,t.description))))})))))}},852:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(285),a=n(0),o=n.n(a);function i(){var t=Object(r.a)(["\nborder-radius: 8px;\nplace-content: left;\ndisplay: grid;\ncolor: white;\ncursor: pointer;\n//max-width: 50vw;\nbox-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);\nbackground-color: #551a8b;\npadding: 20px;\n"]);return i=function(){return t},t}var c=n(275).a.div(i());function u(t){var e=t.backgroundColor,n=void 0===e?"#551a8b":e,r=t.placeContent,a=void 0===r?"center":r,i=t.color,u=void 0===i?"white":i,l=t.children;return o.a.createElement(c,{style:{backgroundColor:n,placeContent:a,color:u}},l)}}}]);
//# sourceMappingURL=26.1d400310.chunk.js.map