import React, { createContext, useState } from 'react';

export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [selectedPokemonIds, setSelectedPokemonIds] = useState([]);

  const addPokemon = (id) => {
    if (selectedPokemonIds.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }

    if (selectedPokemonIds.includes(id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }

    setSelectedPokemonIds((prev) => [...prev, id]);
  };

  const removePokemon = (id) => {
    setSelectedPokemonIds((prev) => prev.filter(pokemonId => pokemonId !== id));
  };

  return (
    <PokemonContext.Provider value={{ selectedPokemonIds, addPokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
