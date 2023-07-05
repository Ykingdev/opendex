'use client'
import React, { useState, useEffect } from 'react';
import { fetchPokemonData } from '../../lib/pokeAPI';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/Searchbar';

const PokemonGrid = () => {
    const [pokemonData, setPokemonData] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                for (let i = 1; i <= 151; i++) {
                    const data = await fetchPokemonData(i);
                    setPokemonData((prevData) => [...prevData, data]);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredPokemonData = pokemonData.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="flex flex-col items-center justify-center w-screen">
            <SearchBar value={searchTerm} onChange={handleSearchChange} />
            <div className="grid grid-cols-1 mx-3 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 max-w-full">
                {filteredPokemonData.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default PokemonGrid;
