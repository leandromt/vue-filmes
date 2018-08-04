<template>
  <section>
    <div class="container-fluid">
      <ul class="row">
        <li v-for="filme of filmes" :key="filme.id" class="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2">
          <router-link v-bind:to="'/interna/' + filme.id">
            <figure class="figure">
              <img class="figure-img img-fluid rounded" :src="'https://image.tmdb.org/t/p/w500' + filme.poster_path">
              <figcaption class="figure-caption">{{ filme.title }} <span class="badge badge-pill badge-danger">novo</span></figcaption>
            </figure>
          </router-link>
        </li>
      </ul>
    </div>
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
        language: 'pt-BR',
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
  },

  methods: {

    

  }



}
</script>

<style scoped>
  section {
    padding: 40px;
  }
</style>
