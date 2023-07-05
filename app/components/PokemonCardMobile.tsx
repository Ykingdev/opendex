import React from 'react';
import { GiFemale, GiMale } from 'react-icons/gi';
import Description from './Description';

interface PokemonCardProps {
    pokemon: any; // Modify the type as per the actual Pokémon data structure
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    let { name, types } = pokemon;
    name = name.replace(/-/g, '_');
    const pokemonId = pokemon.id.toString().padStart(3, '0');
    let gifUrl = `https://projectpokemon.org/images/normal-sprite/${name}.gif`;

    const typeColors: { [key: string]: string } = {
        normal: 'bg-gray-400',
        fire: 'bg-red-500',
        water: 'bg-blue-500',
        grass: 'bg-green-500',
        electric: 'bg-yellow-400',
        ice: 'bg-blue-200',
        fighting: 'bg-red-600',
        poison: 'bg-purple-500',
        ground: 'bg-yellow-600',
        flying: 'bg-blue-300',
        psychic: 'bg-pink-500',
        bug: 'bg-green-600',
        rock: 'bg-gray-600',
        ghost: 'bg-purple-600',
        dark: 'bg-gray-800',
        dragon: 'bg-purple-700',
        steel: 'bg-gray-400',
        fairy: 'bg-pink-300',
        // Add more types and colors as needed
    };

    const getTypeColor = (type: string) => {
        return typeColors[type.toLowerCase()] || 'bg-gray-400';
    };

    let displayName = name;
    if (name === 'nidoran_f') {
        displayName = 'Nidoran ♀';
    } else if (name === 'nidoran_m') {
        displayName = 'Nidoran ♂';
    } else if (name.endsWith('_f') || name.endsWith('_m')) {
        displayName = name.slice(0, -2);
    } else if (name === 'mr_mime') {
        displayName = 'Mr. Mime';
        gifUrl = 'https://projectpokemon.org/images/normal-sprite/mr.mime.gif';
    }

    return (
        <div className="pokemon-card mr-4 shadow-lg flex flex-col bg-white text-black w-[90%] sm:w-[23vw] md:w-[20vw] lg:w-[15vw] rounded-lg p-2">
            <div className="flex items-center justify-center">
                <div className="bg-slate-300 flex rounded-full h-32 w-32 shadow-lg">
                    <img
                        className="object-scale-down drop h-[] w-auto rounded-lg"
                        src={gifUrl}
                        alt={name}
                    />
                </div>
                <h3>{displayName}</h3>
            </div>

            <div className="flex flex-col justify-between mt-4">
                <div className="types flex flex-row gap-1">
                    {types.map((type: any) => (
                        <span
                            key={type.slot}
                            className={`rounded-md h-fit px-2 py-1 text-xs text-white ${getTypeColor(
                                type.type.name
                            )}`}
                        >
                            {type.type.name}
                        </span>
                    ))}
                </div>
                <Description description={pokemon.description} />
            </div>
        </div>
    );
};

export default PokemonCard;
