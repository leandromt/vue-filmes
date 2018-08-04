<template>
	<div class="conteudo">

		<!-- BANNER -->
		<div id="banner-top" class="container-banner-top-banner">
			<span class="titulo-publicidade">PUBLICIDADE</span>
			<div class="banner-top-banner"></div>
		</div>
		<!-- /BANNER -->


		
		<!-- TITULO EDITORIA -->
		<div class="container-fluid">
		  <div class="row bloco-titulo-editoriais">
		    <div class="col-xs-12 col-sm-12 col-md-12">
		    	<a href="#" class="editoriais vidaearte">{{ titulo_editoria }}</a>
		    </div>
		    <hr class="separador-editoriais">
		    <div class="col-xs-12 col-sm-12 col-md-12">
		    	<span class="icon-editoriais bg-vidaearte"></span>
		    </div>
		  </div>
		</div>
		<!-- /TITULO EDITORIA -->


		<!-- MANCHETE -->
		<div class="container-fluid">
		  <div class="row">

		    <div class="col-xs-12 col-sm-12 col-md-12">
		      <div class="destaque">
		        <span class="cartola vidaearte">{{ cartola }}</span>
		        <h1>{{ titulo }}</h1>
		        <span class="data">{{ data }} | {{ hora }}</span>
		      </div>
		    </div>

		    <div class="fullwidth">
		      <div class="col-xs-12 col-sm-12 col-md-12">
		        <span>{{ credito_imagem }}</span>
		      </div>
		      <figure>
		          <img :src="imagem" alt="Descricao" />
		        </figure>
		      </div>
		      <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="sociais-interna">
		          <span class="btn-social icon-flame icon-flame-interna" title="Visualização" style="display:none;"></span>
		      </div>
		    </div>

		    <div class="texto texto-vidaearte col-xs-12 col-sm-12 col-md-12">
		      <p><span class="autor">{{ autors }}</span></p>
		      <div v-html="conteudo"></div>
		    </div>

		    <div class="col-xs-12 col-sm-12 col-md-12">
		      <div class="sociais-interna"></div>
		    </div>

		  </div>
		</div>
		<!-- /MANCHETE -->

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