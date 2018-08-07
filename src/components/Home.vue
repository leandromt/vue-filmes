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
          <div class="favoritar" :data-id="filme.id" v-on:click="addFavoritos(filme.id)">Adicionar aos favoritos</div>
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
      favoritos: []
    }
  },

  created () {
    
  },

  methods: {

    addFavoritos (id_filme) {
      
      if(!localStorage.getItem('localFavoritos')){
        this.favoritos.push(id_filme);
        localStorage.setItem('localFavoritos', JSON.stringify(this.favoritos));
      }else{
        let localFavoritos = localStorage.getItem('localFavoritos');
        localFavoritos = JSON.parse(localFavoritos);
        localFavoritos.push(id_filme);
        localStorage.setItem('localFavoritos', JSON.stringify(localFavoritos));
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

        if (bottomOfWindow) {
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
</style>
