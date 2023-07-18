// DOM SELECTORS & VARIABLES
const poke_container = document.querySelector('#poke-container');

const pokemon_count =  150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors);

// EVENT LISTENERS

// FUNCTIONS
const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
    const pokemonCard = document.createElement('DIV');
    pokemonCard.classList.add('pokemon');

    const pokemon_name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const pokemon_id = pokemon.id.toString().padStart(3, '0');
    const pokemon_types = pokemon.types.map( type => type.type.name);
    const type = main_types.find(type => pokemon_types.indexOf(type) > -1);
    const color = colors[type];
    pokemonCard.style.backgroundColor = color;


    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="bulbasaur">
    </div>
    <div class="info">
        <span class="number">#${pokemon_id}</span>
        <h3 class="name">${pokemon_name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `;

    pokemonCard.innerHTML = pokemonInnerHTML;
    poke_container.appendChild(pokemonCard);
}

fetchPokemons();