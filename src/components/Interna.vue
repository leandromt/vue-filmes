<template>
	<div class="container-fluid">
		<nav aria-label="breadcrumb">
		<ol class="breadcrumb">
			<li class="breadcrumb-item"><router-link v-bind:to="'/'">Home</router-link></li>
			<li class="breadcrumb-item"><a href="#">Nomde do filme</a></li>
		</ol>
		</nav>
	</div>
</template>


<script>
import mixin from '../mixins/mixin.js';

export default {

	name: 'Interna',
	
  props: ['id'],

  mixins: [mixin],

  data() {

    return {

      titulo_editoria: '',
      cartola: '',
      titulo: '',
      data: '',
      hora: '',
      credito_imagem: '',
      imagem: '',
      conteudo: '',
      autors: []

  	}

  },


  created() {

  	// Componente Back Top Scroll
  	this.backTopPage();

  	// Carrega os JSON da ultima requisicao
    if(localStorage.getItem('localNoticias')){
    	let localNoticias = localStorage.getItem('localNoticias');
		let noticias = JSON.parse(localNoticias);

		for(var i = 0; i < noticias.length; i++) {
			
			if(noticias[i].id_content == this.id) {
				
				this.titulo_editoria = 'Vida & Arte';
				this.cartola = noticias[i].serialized.dados.titulo_categoria;
				this.titulo = noticias[i].titulo;
				this.data = noticias[i].data;
				this.hora = noticias[i].hora;
				this.credito_imagem = noticias[i].serialized.dados.foto[0].legenda;
				this.conteudo = noticias[i].serialized.dados.corpo;
				this.imagem = this.getFoto(noticias[i].serialized.dados.foto[0].arquivo);

			}

		}

    }

  },


  mounted() {

	

  }



}
</script>

<style scoped>

	.banner-top-banner {
		background-color: #cecece;
	}

</style>