import React from 'react'
import MOCK_DATA from '../mockData'
import { Button, CardWrap, ImgBall, StBallWrap, StCard, StCardWrap, Sth1, StName } from '../styledComponents';
import monsterBallImg from '../assets/monsterBall.png';

const Dashboard = ({ selectedPokemonIds, handleDelete }) => {
    const selectedPokemons = selectedPokemonIds.map(id =>
        MOCK_DATA.find(pokemon => pokemon.id === id)
    );

    const monsterBalls = Array(6).fill().map((_, index) => (
        <StBallWrap>
            <ImgBall key={index} src={monsterBallImg} alt="몬스터볼이미지" />
        </StBallWrap>
    ));

    const remainBalls = monsterBalls.slice(0, 6 - selectedPokemons.length);

    return (
        <CardWrap>
            <Sth1>나만의 포켓몬</Sth1>
            <br/>
            {selectedPokemons.length > 0 ? (
                <>
                    {selectedPokemons.map(pokemon => (
                        <StCardWrap>
                            <StCard key={pokemon.id}>
                                <img src={pokemon.img_url} alt={pokemon.korean_name} />
                                <StName>{pokemon.korean_name}</StName>
                                <br />
                                <p>{pokemon.types.join(', ')}</p>
                                <br />
                            </StCard>
                            <Button onClick={() => handleDelete(pokemon.id)}>
                                삭제
                            </Button>
                        </StCardWrap>
                    ))}
                    {remainBalls}
                </>
            ) : (
                <>
                    {monsterBalls}
                </>
            )}
        </CardWrap>
    )
}

export default Dashboard;
