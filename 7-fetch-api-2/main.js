
//https://pokeapi.com/docs/v2#pokemon


const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/';

const searcgInput = document.querySelector('#pokemon-search');
const pokemonContainer = document.querySelector('.pokemon-container');
let currentPokemonId = 1;
let currentPokemon;

const getPokemonTemplate = () => {
  return `
   <div class="pokemon">
     <h3>${currentPokemon.name}</h3>
     <span>ID: ${currentPokemon.id} </h3>
     <img src="${currentPokemon.image}" alt="${currentPokemon.name}
   </div>
   `

}

const renderPokemon = () => {
  const template = getPokemonTemplate();
  pokemonContainer += template;
};


const fetchPokemon = () => {
  if (pokemonRequests.includes(currentPokemonId)) {
    return;
  } else {
    pokemonRequests.push(currentPokemonId);
  }

  fetch(`${POKEMON_URL}${currentPokemonId}`)
    .then((res) => res.json())
    .then((response) => {
      currentPokemon = {
        id: response.id,
        name: response.name,
        image: response.sprites.front_default,
      };

      renderPokemon();

    });
};

const handleSearch = (event) => {
  const inputValue = event.target.valueAsNumber;
  currentPokemonId = inputValue;
  fetchPokemon();
};

searchInput.value = currentPokemonId;
searcgInput.addEventListener('input', handleSearch)