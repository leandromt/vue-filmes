<template>
  <section class="container-fluid">
    <ul class="grid">
      <li v-for="filme of filmes" :key="filme.id" class="grid-item">
        <router-link v-bind:to="'/interna/' + filme.id">
          <figure class="miniatura">
            <img :src="'https://image.tmdb.org/t/p/w500' + filme.poster_path" style="width: 100%; height: 100%;">
          </figure>
          <span class="">{{ filme.title }}</span>
          <h2 class="">{{ filme.overview }}</h2>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import mixin from '../mixins/mixin.js';

export default {

  mixins: [mixin],

  data () {

    return {

      filmes: []

    }
  },

  created () {


    // Realiza a requisicao com o Vue Resource
    let promise = this.$http.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: 'fad7717ca1edbacdd34d3e85119f9df3',
        page: 1
      }
    });

    console.log(promise);

    // Retorna uma promessa da Requisicao acima
    promise.then( res => {
      this.filmes = res.body.results;
      console.log(this.filmes);
    }, err => {
      console.log(err);
    });


  }
}
</script>

<style scoped>
  .grid-item { 
    width: 25%;
    min-height: 400px;
  }
  img {
    width: 100%;
    height: 25px;
  }
</style>
