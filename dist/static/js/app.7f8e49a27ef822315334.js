webpackJsonp([0],[,,function(t,a,e){"use strict";a.a={created:function(){},methods:{getFoto:function(t){return"https://image.tmdb.org/t/p/w500"+t},backTopPage:function(){window.scrollTo(0,0)}}}},,function(t,a,e){"use strict";var s=e(16);a.a={components:{"meu-header":s.a}}},function(t,a,e){"use strict";a.a={}},function(t,a,e){"use strict";var s=e(26),i=e.n(s),n=e(2);a.a={mixins:[n.a],data:function(){return{filmes:[],page:1}},created:function(){},methods:{getMovies:function(t){var a=this;this.$http.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"fad7717ca1edbacdd34d3e85119f9df3",language:"pt-BR",page:t}}).then(function(t){if(1==a.page)a.filmes=t.body.results;else for(var e=0;e<t.body.results.length;e++)a.filmes.push(t.body.results[e]);t.json().then(function(t){localStorage.setItem("localFilmes",i()(a.filmes))})},function(t){if(console.log(t),localStorage.getItem("localFilmes")){var e=localStorage.getItem("localFilmes");a.filmes=JSON.parse(e)}})},scroll:function(){var t=this;window.onscroll=function(){document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight&&(t.page++,t.getMovies(t.page))}}},mounted:function(){this.getMovies(this.page),this.scroll()}}},function(t,a,e){"use strict";var s=e(2);a.a={name:"Filme",props:["id"],mixins:[s.a],data:function(){return{title:"",original_title:"",overview:"",release_date:"",vote_average:"",vote_count:"",poster_path:"",genre_ids:[],generos_list:[]}},created:function(){if(this.backTopPage(),localStorage.getItem("localFilmes"))for(var t=localStorage.getItem("localFilmes"),a=JSON.parse(t),e=0;e<a.length;e++)a[e].id==this.id&&(this.title=a[e].title,this.original_title=a[e].original_title,this.overview=a[e].overview,this.release_date=a[e].release_date,this.vote_average=a[e].vote_average,this.vote_count=a[e].vote_count,this.poster_path=this.getFoto(a[e].poster_path),this.genre_ids=a[e].genre_ids)},mounted:function(){}}},function(t,a,e){"use strict";var s=e(2);a.a={mixins:[s.a],data:function(){return{filmes:[]}},created:function(){var t=this,a=this.$http.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"fad7717ca1edbacdd34d3e85119f9df3",language:"pt-BR",page:1}});console.log(a),a.then(function(a){t.filmes=a.body.results,console.log(t.filmes)},function(t){console.log(t)})},methods:{}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(3),i=e(13),n=e(20),o=e(22);s.a.config.productionTip=!1,s.a.use(n.a),new s.a({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})},,,,function(t,a,e){"use strict";function s(t){e(14)}var i=e(4),n=e(19),o=e(0),r=s,l=o(i.a,n.a,!1,r,"data-v-2c5e61e2",null);a.a=l.exports},function(t,a){},,function(t,a,e){"use strict";function s(t){e(17)}var i=e(5),n=e(18),o=e(0),r=s,l=o(i.a,n.a,!1,r,"data-v-402f2cd1",null);a.a=l.exports},function(t,a){},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",[e("div",{staticClass:"container-fluid"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark"},[e("span",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Vue filmes")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Página inicial "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/favoritos/"}},[t._v("Meus favoritos")])],1)]),t._v(" "),t._m(1)])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{staticClass:"form-inline"},[e("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Nome do filme","aria-label":"Nome do filme"}}),t._v(" "),e("button",{staticClass:"btn btn-outline-danger my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Pesquisar")])])}],n={render:s,staticRenderFns:i};a.a=n},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("meu-header"),t._v(" "),e("main",[e("router-view")],1)],1)},i=[],n={render:s,staticRenderFns:i};a.a=n},,function(t,a){},function(t,a,e){"use strict";var s=e(3),i=e(23),n=e(24),o=e(30),r=e(33);s.a.use(i.a),a.a=new i.a({mode:"history",routes:[{path:"/",name:"Home",component:n.a},{path:"/filme/:id",name:"Filme",component:o.a,props:!0},{path:"/favoritos/",name:"Favoritos",component:r.a}]})},,function(t,a,e){"use strict";function s(t){e(25)}var i=e(6),n=e(29),o=e(0),r=s,l=o(i.a,n.a,!1,r,"data-v-6281a360",null);a.a=l.exports},function(t,a){},,,,function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),e("ul",{staticClass:"row"},t._l(t.filmes,function(a){return e("li",{key:a.id,staticClass:"col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2"},[e("div",{staticClass:"favoritar"},[t._v("Adicionar aos favoritos")]),t._v(" "),e("router-link",{staticClass:"item-filme",attrs:{to:"/filme/"+a.id}},[e("figure",{staticClass:"figure"},[e("img",{staticClass:"figure-img img-fluid rounded",attrs:{src:"https://image.tmdb.org/t/p/w500"+a.poster_path}}),t._v(" "),e("figcaption",{staticClass:"figure-caption"},[t._v(t._s(a.title)+" ")])])])],1)}))])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"title-page"},[t._v("Filmes Populares")])])])}],n={render:s,staticRenderFns:i};a.a=n},function(t,a,e){"use strict";function s(t){e(31)}var i=e(7),n=e(32),o=e(0),r=s,l=o(i.a,n.a,!1,r,"data-v-71429982",null);a.a=l.exports},function(t,a){},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"bg-filme"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:"/"}},[t._v("Página inicial")])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item"},[t._v("Nome do filme")])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"title-page"},[t._v(t._s(this.title))])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-md-center"},[e("div",{staticClass:"col-12 col-sm-4"},[e("img",{staticClass:"poster_path",attrs:{src:this.poster_path,alt:" "}})]),t._v(" "),e("div",{staticClass:"col-12 col-sm-4"},[e("h3",[t._v("Título Original:")]),t._v(" "),e("p",[t._v(t._s(this.original_title))]),t._v(" "),e("h3",[t._v("Sinopse:")]),t._v(" "),e("p",[t._v(t._s(this.overview))]),t._v(" "),e("h3",[t._v("Data de lançamento:")]),t._v(" "),e("p",[t._v(t._s(this.release_date))]),t._v(" "),e("h3",[t._v("Média de votos:")]),t._v(" "),e("p",[t._v(t._s(this.vote_average))]),t._v(" "),e("h3",[t._v("Total de votos:")]),t._v(" "),e("p",[t._v(t._s(this.vote_count))]),t._v(" "),e("h3",[t._v("Genêros:")]),t._v(" "),e("p",[t._v(t._s(this.genre_ids))])])])])])},i=[],n={render:s,staticRenderFns:i};a.a=n},function(t,a,e){"use strict";function s(t){e(34)}var i=e(8),n=e(35),o=e(0),r=s,l=o(i.a,n.a,!1,r,"data-v-305cb812",null);a.a=l.exports},function(t,a){},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),e("ul",{staticClass:"row"},t._l(t.filmes,function(a){return e("li",{key:a.id,staticClass:"col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2"},[e("router-link",{staticClass:"item-filme",attrs:{to:"/filme/"+a.id}},[e("figure",{staticClass:"figure"},[e("img",{staticClass:"figure-img img-fluid rounded",attrs:{src:"https://image.tmdb.org/t/p/w500"+a.poster_path}}),t._v(" "),e("figcaption",{staticClass:"figure-caption"},[t._v(t._s(a.title)+" "),e("span",{staticClass:"badge badge-pill badge-danger"},[t._v("novo")])])])])],1)}))])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"title-page"},[t._v("Meus Favoritos")])])])}],n={render:s,staticRenderFns:i};a.a=n}],[9]);
//# sourceMappingURL=app.7f8e49a27ef822315334.js.map