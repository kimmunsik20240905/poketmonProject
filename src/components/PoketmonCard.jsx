import React from 'react'
import { Button, StCard, StClickWrap, StName } from '../styledComponents'
import { useNavigate } from 'react-router-dom';

const PoketmonCard = ({ name, image, type, id, cardClick }) => {
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate(`/pokemon/${id}`); 
    };
    return (
        <StCard >
            <StClickWrap onClick={handleDetailClick}>
                <img src={image} alt={name} />
                <StName>{name}</StName>
                <br />
                <p>{type}</p>
                <br />
            </StClickWrap>
            <Button onClick={() => cardClick(id)}>
                추가
            </Button>
        </StCard>
    )
}

export default PoketmonCard