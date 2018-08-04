<template>
    <div class="conteudo">
      <section class="container-fluid manchete-modelo1">
        <ul class="lista row">
          <li v-for="filme of filmes" :key="filme.id" class="col-xs-12 col-sm-4 col-md-6">
              <div class="item-lista">
                  <router-link v-bind:to="'/interna/' + filme.id">
                    <figure class="miniatura">
                        <img :src="'https://image.tmdb.org/t/p/w500' + filme.poster_path" style="width: 100%; height: 100%;">
                    </figure>
                    <span class="cartola vidaearte">{{ filme.title }}</span>
                    <h2 class="subdestaque">{{ filme.overview }}</h2>
                  </router-link>
              </div>
          </li>
        </ul>
      </section>
    </div>
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
  .conteudo {
    min-height: 600px;
  }
</style>
