<template>
  <div> 
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link v-bind:to="'/'">Página inicial</router-link></li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-12 col-sm-6 col-md-6 col-xl-6">
          <div class="input-group mb-3 search-group">
            <input id="search" type="text" class="form-control" placeholder="Pesquisar por nome do filme" aria-label="Pesquisar por nome do filme" aria-describedby="Pesquisar por nome do filme">
            <div class="input-group-append">
              <button class="btn btn-outline-danger" type="submit" v-on:click="searchMovie()">Pesquisar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="title-page">Filmes Populares</h1>
        </div>
      </div>
      <ul class="row">
        <li v-for="filme of filmes" :key="filme.id" class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
          <div class="favoritar" :class="checkTeste(filme.id)" :data-id="filme.id" v-on:click="addFavoritos(filme.id)">Adicionar aos favoritos</div>
          <router-link class="item-filme" v-bind:to="'/filme/' + filme.id">
            <figure class="figure">
              <img class="figure-img img-fluid rounded" :src="'https://image.tmdb.org/t/p/w500' + filme.poster_path">
              <figcaption class="figure-caption">{{ filme.title }} <!--<span class="badge badge-pill badge-danger">novo</span>--></figcaption>
            </figure>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
  </div>
</template>

<script>
import mixin from '../mixins/mixin.js';

export default {

  mixins: [mixin],

  data () {

    return {

      filmes: [],
      page: 1,
      favoritos: [],
      busca: false
    }
  },

  created () {
    
  },

  methods: {

    checkTeste(id){
      if(localStorage.getItem('localFavoritos')){
        let localFavoritos = localStorage.getItem('localFavoritos');
        localFavoritos = JSON.parse(localFavoritos);
        for (var i = localFavoritos.length - 1; i >= 0; i--) {
          if(localFavoritos[i] == id){
            return 'favorito';
          }
        }
      }
    },

    searchMovie(){
      //https://api.themoviedb.org/3/search/movie?api_key=fad7717ca1edbacdd34d3e85119f9df3&language=pt-BR&query=mission
      let query = document.getElementById("search").value;
        if(query){
          let promise2 = this.$http.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: 'fad7717ca1edbacdd34d3e85119f9df3',
            language: 'pt-BR',
            query: query
          }
        });
        promise2.then( res => {
          this.filmes = [];
          this.filmes = res.body.results;
          this.busca = true;
        }, err => {
          console.log(err);
        });
      }
    },

    addFavoritos (id_filme) {


      if(event.target.classList.contains('favorito')){
        // Remove favorito
        event.target.classList.remove("favorito");
        let localFavoritos = localStorage.getItem('localFavoritos');
        localFavoritos = JSON.parse(localFavoritos);
        for (var i = localFavoritos.length - 1; i >= 0; i--) {
          if(localFavoritos[i] == event.target.getAttribute("data-id")){
            localFavoritos.splice(i, 1);
            localStorage.setItem('localFavoritos', JSON.stringify(localFavoritos));
            return;
          }
        }
      }else{
        console.log('add');
        // Add favorito
        event.target.classList.add("favorito");
        if(!localStorage.getItem('localFavoritos')){
          this.favoritos.push(event.target.getAttribute("data-id"));
          localStorage.setItem('localFavoritos', JSON.stringify(this.favoritos));
        }else{
          console.log('exite storage');
          let localFavoritos = localStorage.getItem('localFavoritos');
          localFavoritos = JSON.parse(localFavoritos);
          if(localFavoritos.length == 0){
            localFavoritos.push(event.target.getAttribute("data-id"));
            localStorage.setItem('localFavoritos', JSON.stringify(localFavoritos));
          }else{
            for (var i = localFavoritos.length - 1; i >= 0; i--) {
              if(localFavoritos[i] == event.target.getAttribute("data-id")){
                console.log('4');
              }else{
                console.log('1');
                localFavoritos.push(event.target.getAttribute("data-id"));
                localStorage.setItem('localFavoritos', JSON.stringify(localFavoritos));
                return;
              }
            }
          }
        }
      }
      
    },  

    getMovies (page) {
      // Realiza a requisicao com o Vue Resource
      let promise = this.$http.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: 'fad7717ca1edbacdd34d3e85119f9df3',
          language: 'pt-BR',
          page: page
        }
      });
      
      // Retorna uma promessa da Requisicao acima
      promise.then( res => {
        if(this.page == 1){
          this.filmes = res.body.results;
        }else{
          for(var i = 0; i < res.body.results.length; i++) {
            this.filmes.push(res.body.results[i]);
          }
        }
        // Registra uma variavel no localStorage armazenando o JSON
        res.json().then(i => {
          localStorage.setItem('localFilmes', JSON.stringify(this.filmes));
        });
      }, err => {
        console.log(err);
        // Carrega os JSON da ultima requisicao
        if(localStorage.getItem('localFilmes')){
          let localFilmes = localStorage.getItem('localFilmes');
          this.filmes = JSON.parse(localFilmes);
        }
      });
    },

    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow && (this.busca == false) ) {
          this.page++;
          this.getMovies(this.page);
        }
      };
    },
  },
  
  mounted() {
    this.getMovies (this.page);
    this.scroll();
  }
}
</script>

<style scoped>
  .favoritar {
    display: block;
    position: relative;
    padding: 5px 0;
    font-size: 85%;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .favoritar::after, .favoritar.favorito::after {
    display: block;
    content: " ";
    width: 25px;
    height: 25px;
    background-image: url('/static/img/icons/star.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    top: 3px;
    right: 0;
  }
  .favoritar:hover::after, .favoritar.favorito::after {
    background-image: url('/static/img/icons/star-select.svg');
  }
  .figure-caption {
    font-size: 100%;
    color: #373d42;
  }
  .item-filme {
    position: relative;
    padding-bottom: 30px;
    display: block;
  }
  .search-group {
    padding: 20px;
  }
</style>
