import React, { useContext } from 'react'
import { Button, StCard, StClickWrap, StName } from '../styledComponents'
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

const PoketmonCard = ({ name, image, type, id }) => {
    const { addPokemon } = useContext(PokemonContext);
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate(`/pokemon/${id}`); 
    };
    return (
        <StCard>
            <StClickWrap onClick={handleDetailClick}>
                <img src={image} alt={name} />
                <StName>{name}</StName>
                <br />
                <p>{type}</p>
                <br />
            </StClickWrap> 
            <Button onClick={() => addPokemon(id)}>
                추가
            </Button>
        </StCard>
    )
}

export default PoketmonCard