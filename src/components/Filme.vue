<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link v-bind:to="'/'">Página inicial</router-link></li>
        <li class="breadcrumb-item"><a href="#">Nome do filme</a></li>
      </ol>
    </nav>
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