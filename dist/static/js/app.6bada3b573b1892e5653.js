webpackJsonp([0],[,,function(t,a,s){"use strict";a.a={created:function(){},methods:{getFoto:function(t){return"https://image.tmdb.org/t/p/w500"+t},backTopPage:function(){window.scrollTo(0,0)}}}},,function(t,a,s){"use strict";var e=s(16);a.a={components:{"meu-header":e.a}}},function(t,a,s){"use strict";a.a={}},function(t,a,s){"use strict";var e=s(2);a.a={mixins:[e.a],data:function(){return{filmes:[]}},created:function(){var t=this,a=this.$http.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"fad7717ca1edbacdd34d3e85119f9df3",language:"pt-BR",page:1}});console.log(a),a.then(function(a){t.filmes=a.body.results,console.log(t.filmes)},function(t){console.log(t)})},methods:{}}},function(t,a,s){"use strict";var e=s(2);a.a={name:"Filme",props:["id"],mixins:[e.a],data:function(){return{}},created:function(){},mounted:function(){}}},function(t,a,s){"use strict";var e=s(2);a.a={mixins:[e.a],data:function(){return{filmes:[]}},created:function(){var t=this,a=this.$http.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"fad7717ca1edbacdd34d3e85119f9df3",language:"pt-BR",page:1}});console.log(a),a.then(function(a){t.filmes=a.body.results,console.log(t.filmes)},function(t){console.log(t)})},methods:{}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(3),i=s(13),n=s(20),r=s(22);e.a.config.productionTip=!1,e.a.use(n.a),new e.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},,,,function(t,a,s){"use strict";function e(t){s(14)}var i=s(4),n=s(19),r=s(0),o=e,c=r(i.a,n.a,!1,o,"data-v-2c5e61e2",null);a.a=c.exports},function(t,a){},,function(t,a,s){"use strict";function e(t){s(17)}var i=s(5),n=s(18),r=s(0),o=e,c=r(i.a,n.a,!1,o,"data-v-402f2cd1",null);a.a=c.exports},function(t,a){},function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",[s("div",{staticClass:"container-fluid"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark"},[s("span",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Vue filmes")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Página inicial "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/favoritos/"}},[t._v("Meus favoritos")])],1)]),t._v(" "),t._m(1)])])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("form",{staticClass:"form-inline"},[s("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Nome do filme","aria-label":"Nome do filme"}}),t._v(" "),s("button",{staticClass:"btn btn-outline-danger my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Pesquisar")])])}],n={render:e,staticRenderFns:i};a.a=n},function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("meu-header"),t._v(" "),s("main",[s("router-view")],1)],1)},i=[],n={render:e,staticRenderFns:i};a.a=n},,function(t,a){},function(t,a,s){"use strict";var e=s(3),i=s(23),n=s(24),r=s(27),o=s(30);e.a.use(i.a),a.a=new i.a({mode:"history",routes:[{path:"/",name:"Home",component:n.a},{path:"/filme/:id",name:"Filme",component:r.a,props:!0},{path:"/favoritos/",name:"Favoritos",component:o.a}]})},,function(t,a,s){"use strict";function e(t){s(25)}var i=s(6),n=s(26),r=s(0),o=e,c=r(i.a,n.a,!1,o,"data-v-7bd85f82",null);a.a=c.exports},function(t,a){},function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",[s("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),s("ul",{staticClass:"row"},t._l(t.filmes,function(a){return s("li",{key:a.id,staticClass:"col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2"},[s("router-link",{staticClass:"item-filme",attrs:{to:"/filme/"+a.id}},[s("figure",{staticClass:"figure"},[s("img",{staticClass:"figure-img img-fluid rounded",attrs:{src:"https://image.tmdb.org/t/p/w500"+a.poster_path}}),t._v(" "),s("figcaption",{staticClass:"figure-caption"},[t._v(t._s(a.title)+" "),s("span",{staticClass:"badge badge-pill badge-danger"},[t._v("novo")])])])])],1)}))])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",{staticClass:"title-page"},[t._v("Filmes Populares")])])])}],n={render:e,staticRenderFns:i};a.a=n},function(t,a,s){"use strict";function e(t){s(28)}var i=s(7),n=s(29),r=s(0),o=e,c=r(i.a,n.a,!1,o,"data-v-79f089ac",null);a.a=c.exports},function(t,a){},function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/"}},[t._v("Página inicial")])],1),t._v(" "),s("li",{staticClass:"breadcrumb-item"},[t._v("Nome do filme")])])])])]),t._v(" "),t._m(0)])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",{staticClass:"title-page"},[t._v("Nome do Filme")])])])}],n={render:e,staticRenderFns:i};a.a=n},function(t,a,s){"use strict";function e(t){s(31)}var i=s(8),n=s(32),r=s(0),o=e,c=r(i.a,n.a,!1,o,"data-v-305cb812",null);a.a=c.exports},function(t,a){},function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",[s("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),s("ul",{staticClass:"row"},t._l(t.filmes,function(a){return s("li",{key:a.id,staticClass:"col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2"},[s("router-link",{staticClass:"item-filme",attrs:{to:"/filme/"+a.id}},[s("figure",{staticClass:"figure"},[s("img",{staticClass:"figure-img img-fluid rounded",attrs:{src:"https://image.tmdb.org/t/p/w500"+a.poster_path}}),t._v(" "),s("figcaption",{staticClass:"figure-caption"},[t._v(t._s(a.title)+" "),s("span",{staticClass:"badge badge-pill badge-danger"},[t._v("novo")])])])])],1)}))])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",{staticClass:"title-page"},[t._v("Meus Favoritos")])])])}],n={render:e,staticRenderFns:i};a.a=n}],[9]);
//# sourceMappingURL=app.6bada3b573b1892e5653.js.map