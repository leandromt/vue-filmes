<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>Nome do Filme</h1>
      </div>
    </div>
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

    }
  },

  created () {

  },
  
  mounted () {

  }
}
</script>

<style scoped>

</style>