(this["webpackJsonpfood-project"]=this["webpackJsonpfood-project"]||[]).push([[0],{27:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(20),i=c.n(a),j=(c(27),c(4)),o=c(2),l=c(14);function b(){return Object(n.jsx)("nav",{className:"teal accent-4",children:Object(n.jsxs)("div",{className:"nav-wrapper",children:[Object(n.jsx)(l.Link,{to:"/",className:"brand-logo center",children:"React Food SPA"}),Object(n.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(n.jsx)("li",{children:Object(n.jsx)(l.Link,{to:"/about",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.Link,{to:"/contact",children:"Contacts"})})]})]})})}function u(){return Object(n.jsx)("footer",{className:"page-footer center teal",children:Object(n.jsx)("div",{className:"footer-copyright",children:Object(n.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(n.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}function d(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Contacts"}),Object(n.jsx)(j.b,{to:"/",className:"btn",children:"Home"})]})}function h(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"About page"}),Object(n.jsx)(j.b,{to:"/",className:"btn",children:"Home"})]})}var O=c(8),x=c(10),m=c.n(x),p=c(15),f="https://www.themealdb.com/api/json/v1/1/",g=function(){var e=Object(p.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f+"lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function y(){return Object(n.jsx)("div",{className:"progress",children:Object(n.jsx)("div",{className:"indeterminate"})})}var w=c(13);function C(e){var t=e.strCategory,c=e.strCategoryThumb,r=e.strCategoryDescription;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-image",children:Object(n.jsx)("img",{src:c,alt:t})}),Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("span",{className:"card-title",children:t}),Object(n.jsxs)("p",{children:[r.slice(0,60),"..."]})]}),Object(n.jsx)("div",{className:"card-action",children:Object(n.jsx)(j.b,{to:"/category/".concat(t),className:"btn",children:"Watch category"})})]})}function k(e){var t=e.catalog,c=void 0===t?[]:t;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"list",children:c.map((function(e){return Object(n.jsx)(C,Object(w.a)({},e),e.idCategory)}))})})}function F(e){var t=e.cb,c=void 0===t?Function.prototype:t,s=Object(r.useState)(""),a=Object(O.a)(s,2),i=a[0],j=a[1],o=function(){c(i)};return Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"input-field col s12",children:[Object(n.jsx)("input",{type:"search",id:"search-field",placeholder:"search",onKeyDown:function(e){"Enter"===e.key&&o()},onChange:function(e){return j(e.target.value)},value:i}),Object(n.jsx)("button",{className:"btn",style:{position:"absolute",top:0,right:0},onClick:o,children:"Search"})]})})}function M(){var e=Object(r.useState)([]),t=Object(O.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)([]),i=Object(O.a)(a,2),j=i[0],l=i[1],b=Object(o.useLocation)(),u=b.pathname,d=b.search,h=Object(o.useHistory)().push;return Object(r.useEffect)((function(){v().then((function(e){s(e.categories),l(d?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(d.split("=")[1].toLowerCase())})):e.categories)}))}),[d]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(F,{cb:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),h({pathname:u,search:"?search=".concat(e)})}}),c.length?Object(n.jsx)(k,{catalog:j}):Object(n.jsx)(y,{})]})}function S(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Page not found"}),Object(n.jsx)(j.b,{to:"/",className:"btn",children:"Home"})]})}function R(e){var t=e.strMeal,c=e.strMealThumb,r=e.idMeal;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-image",children:Object(n.jsx)("img",{src:c,alt:t})}),Object(n.jsx)("div",{className:"card-content",children:Object(n.jsx)("span",{className:"card-title",children:t})}),Object(n.jsx)("div",{className:"card-action",children:Object(n.jsx)(j.b,{to:"/meal/".concat(r),className:"btn",children:"Watch recipe"})})]})}function L(e){var t=e.meals;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"list",children:t.map((function(e){return Object(n.jsx)(R,Object(w.a)({},e),e.idMeal)}))})})}function H(){var e=Object(o.useParams)().name,t=Object(r.useState)([]),c=Object(O.a)(t,2),s=c[0],a=c[1],i=Object(o.useHistory)().goBack;return Object(r.useEffect)((function(){N(e).then((function(e){return a(e.meals)}))}),[e]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{className:"btn",onClick:i,children:"Go back"}),s.length?Object(n.jsx)(L,{meals:s}):Object(n.jsx)(y,{})]})}function A(){var e=Object(r.useState)({}),t=Object(O.a)(e,2),c=t[0],s=t[1],a=Object(o.useParams)().id,i=Object(o.useHistory)().goBack;return Object(r.useEffect)((function(){g(a).then((function(e){return s(e.meals[0])}))}),[a]),Object(n.jsxs)(n.Fragment,{children:[c.idMeal?Object(n.jsxs)("div",{className:"recipe",children:[Object(n.jsx)("img",{src:c.strMealThumb,alt:c.strMeal}),Object(n.jsx)("h1",{children:c.strMeal}),Object(n.jsxs)("h6",{children:["Category: ",c.strCategory]}),c.strArea?Object(n.jsxs)("h6",{children:["Origin: ",c.strArea]}):null,Object(n.jsx)("p",{children:c.strInstructions}),Object(n.jsxs)("table",{className:"centered",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Ingredient"}),Object(n.jsx)("th",{children:"Measure"})]})}),Object(n.jsx)("tbody",{children:Object.keys(c).map((function(e){return e.includes("Ingredient")&&c[e]?Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:c[e]}),Object(n.jsx)("td",{children:c["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),c.strYoutube?Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:"Video Recipe"}),Object(n.jsx)("iframe",{title:a,src:"https://www.youtube.com/embed/".concat(c.strYoutube.slice(-11)),allowFullScreen:!0})]}):null]}):Object(n.jsx)(y,{}),Object(n.jsx)("button",{className:"btn",onClick:i,children:"Go back"})]})}var E=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(j.a,{basename:"/spa-food-project",children:[Object(n.jsx)(b,{}),Object(n.jsx)("main",{className:"container content",children:Object(n.jsxs)(o.Switch,{children:[Object(n.jsx)(o.Route,{exact:!0,path:"/",children:Object(n.jsx)(M,{})}),Object(n.jsx)(o.Route,{path:"/about",component:h}),Object(n.jsx)(o.Route,{path:"/contacts",component:d}),Object(n.jsx)(o.Route,{path:"/category/:name",component:H}),Object(n.jsx)(o.Route,{path:"/meal/:id",component:A}),Object(n.jsx)(o.Route,{component:S})]})}),Object(n.jsx)(u,{})]})})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f963b5d4.chunk.js.map