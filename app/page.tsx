import React from 'react';
import PokemonGrid from './components/Pokemongrid'

const HomePage = () => {
  return (
    <div className="flex flex-col bg-red-500 items-center justify-center w-screen">
      <PokemonGrid />
    </div >
  );
};

export default HomePage;
