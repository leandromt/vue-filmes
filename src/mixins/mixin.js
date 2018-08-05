// Funcoes Mixins podem ser usadas em qualquer componete
export default {

	created() {

	},
	
	methods: {
		
	    getFoto(foto){
			let urlBase = 'https://image.tmdb.org/t/p/w500';
			let urlFoto = urlBase + foto;
			return urlFoto;
	    },

	    backTopPage() {
			window.scrollTo(0, 0);
	    }
	}
}
