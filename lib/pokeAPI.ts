import axios from 'axios';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonData = async (id: number | string) => {
    try {
        const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${id}`);
        const pokemon = response.data;

        // Fetch description from the species API
        const speciesResponse = await axios.get(pokemon.species.url);
        const species = speciesResponse.data;
        const description = species.flavor_text_entries.find(
            (entry: any) => entry.language.name === 'en'
        ).flavor_text;

        return { ...pokemon, description };
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch Pokémon data');
    }
};
