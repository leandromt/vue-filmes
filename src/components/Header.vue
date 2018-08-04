<template>
    <div>

        <div class="topo-fixo"></div>

        <header class="topo">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6">
                        <h1 class="logo">
                            <router-link v-bind:to="'/'">
                                <img src="../assets/vue-filmes-256.png" alt="Vue Filmes">
                            </router-link>
                        </h1>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6">
                        <button type="button" aria-label="Toggle Navigation" class="btn-menu lines-button x">
                            <span class="lines"></span>
                        </button>
                    </div>
                </div>
                <nav class="row">
                    <div class="col-xs-12 col-sm-12">
                        <div class="menu">
                           
                        </div>
                    </div>
                </nav>
            </div>
        </header>

    </div>
</template>

<script>
export default {

}	
</script>

<style scoped>

</style>