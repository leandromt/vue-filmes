webpackJsonp([0],[,,,function(t,a,e){"use strict";var n=e(15);a.a={components:{"meu-header":n.a}}},function(t,a,e){"use strict";a.a={}},function(t,a,e){"use strict";var n=e(6);a.a={mixins:[n.a],data:function(){return{filmes:[]}},created:function(){var t=this,a=this.$http.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"fad7717ca1edbacdd34d3e85119f9df3",language:"pt-BR",page:1}});console.log(a),a.then(function(a){t.filmes=a.body.results,console.log(t.filmes)},function(t){console.log(t)})},methods:{}}},function(t,a,e){"use strict";a.a={created:function(){},methods:{getFoto:function(t){return"https://image.tmdb.org/t/p/w500"+t},backTopPage:function(){window.scrollTo(0,0)}}}},function(t,a,e){"use strict";var n=e(6);a.a={name:"Filme",props:["id"],mixins:[n.a],data:function(){return{}},created:function(){},mounted:function(){}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(2),r=e(12),s=e(19),i=e(21);n.a.config.productionTip=!1,n.a.use(s.a),new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},,,,function(t,a,e){"use strict";function n(t){e(13)}var r=e(3),s=e(18),i=e(0),o=n,c=i(r.a,s.a,!1,o,"data-v-2c5e61e2",null);a.a=c.exports},function(t,a){},,function(t,a,e){"use strict";function n(t){e(16)}var r=e(4),s=e(17),i=e(0),o=n,c=i(r.a,s.a,!1,o,"data-v-e572f4a2",null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",[e("div",{staticClass:"container-fluid"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Vue filmes")]),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[e("ul",{staticClass:"navbar-nav mr-auto"}),t._v(" "),e("form",{staticClass:"form-inline"},[e("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Nome do filme","aria-label":"Nome do filme"}}),t._v(" "),e("button",{staticClass:"btn btn-outline-danger my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Pesquisar")])])])}],s={render:n,staticRenderFns:r};a.a=s},function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("meu-header"),t._v(" "),e("main",[e("router-view")],1)],1)},r=[],s={render:n,staticRenderFns:r};a.a=s},,function(t,a){},function(t,a,e){"use strict";var n=e(2),r=e(22),s=e(23),i=e(26);n.a.use(r.a),a.a=new r.a({mode:"history",routes:[{path:"/",name:"Home",component:s.a},{path:"/filme/:id",name:"Filme",component:i.a,props:!0}]})},,function(t,a,e){"use strict";function n(t){e(24)}var r=e(5),s=e(25),i=e(0),o=n,c=i(r.a,s.a,!1,o,"data-v-04dc3437",null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"container-fluid"},[e("ul",{staticClass:"row"},t._l(t.filmes,function(a){return e("li",{key:a.id,staticClass:"col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2"},[e("router-link",{attrs:{to:"/interna/"+a.id}},[e("figure",{staticClass:"figure"},[e("img",{staticClass:"figure-img img-fluid rounded",attrs:{src:"https://image.tmdb.org/t/p/w500"+a.poster_path}}),t._v(" "),e("figcaption",{staticClass:"figure-caption"},[t._v(t._s(a.title)+" "),e("span",{staticClass:"badge badge-pill badge-danger"},[t._v("novo")])])])])],1)}))])])},r=[],s={render:n,staticRenderFns:r};a.a=s},function(t,a,e){"use strict";function n(t){e(27)}var r=e(7),s=e(28),i=e(0),o=n,c=i(r.a,s.a,!1,o,"data-v-1a8272ce",null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:"/"}},[t._v("Página inicial")])],1),t._v(" "),t._m(0)])])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"#"}},[t._v("Nome do filme")])])}],s={render:n,staticRenderFns:r};a.a=s}],[8]);
//# sourceMappingURL=app.07e376ba26baa7dc2f30.js.map