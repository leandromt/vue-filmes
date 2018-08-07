<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-6 col-xl-6">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <router-link class="navbar-brand" v-bind:to="'/'">Vue filmes</router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
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
  }
}	
</script>

<style scoped>
  header {
    background: #2a2a2a;
  }
  .form-inline {
    float: right;
    padding-top: 8px;
  }
  .btn-outline-danger {
    margin-left: 5px;
  }
</style>