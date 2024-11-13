import React, { useState } from 'react'
import PoketmonCard from './PoketmonCard'
import MOCK_DATA from '../mockData'
import Dashboard from './Dashboard';
import { CardWrap } from '../styledComponents';

const PoketmonList = () => {
    const [selectedPokemonIds, setSelectedPokemonIds] = useState([]);
    
    const handleCardClick = (id) => {
        if (selectedPokemonIds.length >= 6) {
            alert("더 이상 선택할 수 없습니다.");
            return; 
        }

        if (selectedPokemonIds.includes(id)) {
            alert("이미 선택된 포켓몬입니다.");
            return;
        }
        
        setSelectedPokemonIds(prev => [...prev, id]);
    }
    
    const handleDelete = (id) => {
        setSelectedPokemonIds(prev => prev.filter(pokemonId => pokemonId !== id));
    }
    
    return (
        <>
            <Dashboard selectedPokemonIds={selectedPokemonIds} handleDelete={handleDelete} />
            <CardWrap>
                {MOCK_DATA.map(data => {
                    return (
                        <PoketmonCard
                            key={data.id}
                            name={data.korean_name}
                            image={data.img_url}
                            type={data.types.join(', ')}
                            id={data.id}
                            cardClick={handleCardClick}
                        />
                    )
                })}
            </CardWrap>
        </>
    )
}

export default PoketmonList