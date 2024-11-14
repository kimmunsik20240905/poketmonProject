import { useSelector, useDispatch } from 'react-redux';
import MOCK_DATA from '../mockData';
import { Button, CardWrap, ImgBall, SectionWrap, StBallWrap, StCard, Sth1, StName } from '../styledComponents';
import monsterBallImg from '../assets/monsterBall.png';
import { removePokemon } from '../redux/slices/pokemonSlice';

const Dashboard = () => {
    const selectedPokemonIds = useSelector((state) => state.pokemon.selectedPokemonIds);
    const dispatch = useDispatch(); 

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
        <SectionWrap>
            <Sth1>나만의 포켓몬</Sth1>
            {selectedPokemons.length > 0 ? (
                <>
                    {selectedPokemons.map(pokemon => (
                        <CardWrap>
                            <StCard key={pokemon.id}>
                                <img src={pokemon.img_url} alt={pokemon.korean_name} />
                                <StName>{pokemon.korean_name}</StName>
                                <br />
                                <p>{pokemon.types.join(', ')}</p>
                                <br />
                                <Button onClick={() => dispatch(removePokemon(pokemon.id))}>
                                    삭제
                                </Button>
                            </StCard>                            
                        </CardWrap>
                    ))}
                    {remainBalls}
                </>
            ) : (
                <>
                    {monsterBalls}
                </>
            )}
        </SectionWrap>
    )
}

export default Dashboard;
