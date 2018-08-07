// Funcoes Mixins podem ser usadas em qualquer componete
export default {

	created() {

	},
	
	methods: {

		searchMovie(){
			//https://api.themoviedb.org/3/search/movie?api_key=fad7717ca1edbacdd34d3e85119f9df3&language=pt-BR&query=mission
			let itens = [];
		  	let query = document.getElementById("search").value;
		  	if(query){
		  		let promise2 = this.$http.get('https://api.themoviedb.org/3/search/movie', {
					params: {
						api_key: 'fad7717ca1edbacdd34d3e85119f9df3',
						language: 'pt-BR',
						query: query
					}
				});
				promise2.then( res => {
					itens.push(res.body.results);
				}, err => {
					console.log(err);
				});
				return itens;
		  	}
		},
		
	    getFoto(foto){
			let urlBase = 'https://image.tmdb.org/t/p/w500';
			let urlFoto = urlBase + foto;
			return urlFoto;
	    },

	    backTopPage() {
			window.scrollTo(0, 0);
	    },

	    getGenres() {
	    	//https://api.themoviedb.org/3/genre/movie/list?api_key=fad7717ca1edbacdd34d3e85119f9df3&language=pt-BR
	    	let genres = [
	    		{
	            	"id": 28,
	            	"name": "Ação"
	          	},
				{
					"id": 12,
					"name": "Aventura"
				},
				{
					"id": 16,
					"name": "Animação"
				},
				{
					"id": 35,
					"name": "Comédia"
				},
				{
					"id": 80,
					"name": "Crime"
				},
				{
					"id": 99,
					"name": "Documentário"
				},
				{
					"id": 18,
					"name": "Drama"
				},
				{
					"id": 10751,
					"name": "Família"
				},
				{
					"id": 14,
					"name": "Fantasia"
				},
				{
					"id": 36,
					"name": "História"
				},
				{
					"id": 27,
					"name": "Terror"
				},
				{
					"id": 10402,
					"name": "Música"
				},
				{
					"id": 9648,
					"name": "Mistério"
				},
				{
					"id": 10749,
					"name": "Romance"
				},
				{
					"id": 878,
					"name": "Ficção científica"
				},
				{
					"id": 10770,
					"name": "Cinema TV"
				},
				{
					"id": 53,
					"name": "Thriller"
				},
				{
					"id": 10752,
					"name": "Guerra"
				},
				{
					"id": 37,
					"name": "Faroeste"
				}
	    	]
	    	return genres;
	    }
	}
}
