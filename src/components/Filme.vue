<template>
  <div id="bg-filme">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link v-bind:to="'/'">Página inicial</router-link></li>
              <li class="breadcrumb-item">Nome do filme</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h1 class="title-page">{{this.title}}</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12 col-sm-4">
            <img class="poster_path" :src="this.poster_path" alt=" ">
        </div>
        <div class="col-12 col-sm-4">
          <h3>Título Original:</h3>
          <p>{{this.original_title}}</p>
          <h3>Sinopse:</h3>
          <p>{{this.overview}}</p>
          <h3>Data de lançamento:</h3>
          <p>{{this.release_date}}</p>
          <h3>Média de votos:</h3>
          <p>{{this.vote_average}}</p>
          <h3>Total de votos:</h3>
          <p>{{this.vote_count}}</p>
          <h3>Genêros:</h3>
          <p>{{this.genre_ids}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import mixin from '../mixins/mixin.js';

export default {

  name: 'Filme',
  props: ['id'],
  mixins: [mixin],

  data() {
    return {
      title: '',
      original_title: '',
      overview: '',
      release_date: '',
      vote_average: '',
      vote_count: '',
      poster_path: '',
      genre_ids: [],
      generos_list: []
    }
  },

  created () {

    // Componente Back Top Scroll
    this.backTopPage();

    //https://api.themoviedb.org/3/genre/movie/list

    
    // Carrega os JSON da ultima requisicao
    if(localStorage.getItem('localFilmes')){
    	let localFilmes = localStorage.getItem('localFilmes');
		  let filmes = JSON.parse(localFilmes);

      for(var i = 0; i < filmes.length; i++) {
        
        if(filmes[i].id == this.id) {
          
          this.title = filmes[i].title;
          this.original_title = filmes[i].original_title;
          this.overview = filmes[i].overview;
          this.release_date = filmes[i].release_date;
          this.vote_average = filmes[i].vote_average;
          this.vote_count = filmes[i].vote_count;
          this.poster_path = this.getFoto(filmes[i].poster_path);
          this.genre_ids = filmes[i].genre_ids;
        }
      }
    }
  },
  
  mounted () {

  }
}
</script>

<style scoped>
  .poster_path {
    width: 100%;
  }
</style>