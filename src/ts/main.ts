import './../scss/style.scss';
import axios from 'axios';

//Lägg till egenskap
async function searchPokemon (){
const pokemonData= await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=151");
console.log(pokemonData.data.pokemon);



}


       
          


document.getElementById("searchBtn")?.addEventListener("click", searchPokemon)













//sprites_front_default för att få bild $//



