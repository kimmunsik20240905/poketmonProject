import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MOCK_DATA from '../mockData';
import { BackButton, Detail, DetailWrap, StName } from '../styledComponents';

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === parseInt(id));
  
  const handleGoBack = () => {
    navigate(-1);
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
        </Detail>
    </DetailWrap>
  );
};

export default PokemonDetail;
