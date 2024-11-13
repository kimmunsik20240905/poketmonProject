import React from 'react'
import { Button, StCard, StCardWrap, StName } from '../styledComponents'
import { useNavigate } from 'react-router-dom';

const PoketmonCard = ({ name, image, type, id, cardClick }) => {
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate(`/pokemon/${id}`); 
    };
    return (
        <StCardWrap>
            <StCard onClick={handleDetailClick}>
                <img src={image} alt={name} />
                <StName>{name}</StName>
                <br />
                <p>{type}</p>
                <br />
            </StCard>
            <Button onClick={() => cardClick(id)}>
                추가
            </Button>
        </StCardWrap>
    )
}

export default PoketmonCard