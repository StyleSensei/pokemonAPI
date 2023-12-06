import "./../scss/style.scss";
import axios from "axios";

interface IPokemon {
  name: string;
  sprites: string;
  order: number;
  gender: string;
  url:string
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
  // console.log(pokemonData.data.results[i].name)
  const pokemonInfo = await axios.get(pokemonData.data.results[i].url)
  // console.log(pokemonInfo.data.sprites.front_default);
  const pokemonCard= document.createElement("div") as HTMLDivElement;
  pokemonCard.className="pokemon-card";
  pokemonCard.id="pokemon-card";
  const container= document.getElementById("pokemons-container");
  container?.appendChild(pokemonCard);
  const PokemonTitel= document.createElement("h3") as HTMLHeadingElement;
  PokemonTitel.className="pokemon-title"
  pokemonCard.appendChild(PokemonTitel);
  PokemonTitel.innerHTML=pokemonData.data.results[i].name;
  const pokemonImg= document.createElement("img") as HTMLImageElement;
  pokemonImg.className="pokemon-img"
  pokemonCard.appendChild(pokemonImg)
  pokemonImg.setAttribute("src", pokemonInfo.data.sprites.front_default)
  console.log(pokemonInfo.data);
  
  document.getElementById("pokemon-card")?.addEventListener("click",()=>{
    const thePokemon = document.createElement("div") as HTMLDivElement;
    
    
  })

}
           
}

// async function pokemonImage() {
//   // const pokemonSprite = await axios.get<IPokemon>()
// }
document.getElementById("searchBtn")?.addEventListener("click", searchPokemon);



