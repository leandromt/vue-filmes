<template>

  <header class="topo">
    <div class="container-fluid">
      <nav class="navbar navbar-light bg-dark">
        <router-link class="navbar-brand" v-bind:to="'/'"><img id="logo" src="../assets/vue-filmes.svg" alt="Vue Filmes"></router-link>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Nome do filme" aria-label="Nome do filme">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
        </form>
      </nav>
    </div>
  </header>
</template>

<script>
export default {

}	
</script>

<style scoped>
  #logo {
    width: 50%;
  }
</style>