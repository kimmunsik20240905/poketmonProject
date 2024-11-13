import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MOCK_DATA from '../mockData';
import { BackButton, Detail, DetailButton, DetailWrap, StName } from '../styledComponents';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, removePokemon } from '../redux/slices/pokemonSlice';

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === parseInt(id));
  const selectedPokemonIds = useSelector((state) => state.pokemon.selectedPokemonIds);
  const dispatch = useDispatch();

  const handleGoBack = () => {
    navigate(-1);
  };

  const isSelected = selectedPokemonIds.includes(pokemon.id);
  const handleAddRemove = () => {
    if (isSelected) {
      dispatch(removePokemon(pokemon.id));
    } else {
      dispatch(addPokemon(pokemon.id));
    }
  };

  return (
    <DetailWrap>
      <Detail>
        <StName>{pokemon.korean_name}</StName>
        <br />
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <p>타입: {pokemon.types.join(', ')}</p>
        <br />
        <br />
        <p>설명: {pokemon.description}</p>
        <br />
        <br />
        <BackButton onClick={handleGoBack}>뒤로 가기</BackButton>
        <DetailButton onClick={handleAddRemove}>
          {isSelected ? '삭제' : '추가'}
        </DetailButton>
      </Detail>
    </DetailWrap>
  );
};

export default PokemonDetail;
