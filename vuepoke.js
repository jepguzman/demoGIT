var app = new Vue({
  el: '#app',
    data: { // aqui pondremos nuestras variables
        apiPoke: "https://pokeapi.co/api/v2/pokemon",
        pokes: [],
        pokeImg:[],
        
    }, //fin de data   
    mounted() {
        this.Pokemones();                  
        },
    methods: {
        Pokemones: async function(){
            const response = await fetch(this.apiPoke);
            this.pokes= await response.json();
            this.pokes=this.pokes.results;
            console.log(this.pokes);
            this.pokesImg('https://pokeapi.co/api/v2/pokemon/1')
        },
        pokesImg: async function(url){
            const response = await fetch(url);
            this.pokeImg = await response.json();
            this.pokeImg = this.pokeImg.sprites.other;
            console.log(this.pokeImg.dream_world.front_default);            
        }        
    } //fin de metodos    
}) //fin del Objeto vue
