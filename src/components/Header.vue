<template>

  <header>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <router-link class="navbar-brand" v-bind:to="'/'">Vue filmes</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto"></ul>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Nome do filme" aria-label="Nome do filme">
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Pesquisar</button>
          </form>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {

}	
</script>

<style scoped>
  header {
    background: #2a2a2a;
  }
</style>