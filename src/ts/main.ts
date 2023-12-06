import "./../scss/style.scss";
import axios from "axios";

interface IPokemon {
  name: string;
  sprites: string;
  order: number;
  gender: string;
}
interface IPokemonResponse {
  results: IPokemon[];
  url:string;
}
// interface IImage {
//   sprites:string;
// }

//Lägg till egenskap
async function searchPokemon() {
  const pokemonData = await axios.get<IPokemonResponse>(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
  );
  console.log(pokemonData.data.results);
//   const pokemonArray = pokemonData.data.results;
//     for (let i = 0; i < pokemonArray.length; i++) {
//        console.log(pokemonArray.url);
           
for(let i = 0; i < pokemonData.data.results.length; i++){
  console.log(pokemonData.data.results)
}
           
}

// async function pokemonImage() {
//   // const pokemonSprite = await axios.get<IPokemon>()
// }
document.getElementById("searchBtn")?.addEventListener("click", searchPokemon);

//sprites_front_default för att få[0]()=>{)bild$//


