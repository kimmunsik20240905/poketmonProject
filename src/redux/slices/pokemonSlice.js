import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  selectedPokemonIds: [],
};

const toastOptions = {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
  };

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const id = action.payload;

      if (state.selectedPokemonIds.length >= 6) {
        toast.error("더 이상 선택할 수 없습니다.", toastOptions);
        return;
      }

      if (state.selectedPokemonIds.includes(id)) {
        toast.info("이미 선택된 포켓몬입니다.", toastOptions);
        return;
      }

      state.selectedPokemonIds.push(id);
      toast.success('포켓몬이 추가되었습니다!', toastOptions);
    },
    removePokemon: (state, action) => {
      const id = action.payload;
      state.selectedPokemonIds = state.selectedPokemonIds.filter((pokemonId) => pokemonId !== id); 
      toast.success('포켓몬이 삭제되었습니다!', toastOptions);
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
