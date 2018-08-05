<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="title-page">Meus Favoritos</h1>
        </div>
      </div>
      <ul class="row">
        <li v-for="filme of filmes" :key="filme.id" class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
          <router-link class="item-filme" v-bind:to="'/filme/' + filme.id">
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
