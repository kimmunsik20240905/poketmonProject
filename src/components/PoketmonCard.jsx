import { Button, StCard, StCardWrap, StName } from '../styledComponents';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { addPokemon } from '../redux/slices/pokemonSlice';


const PoketmonCard = ({ name, image, type, id }) => {
    const dispatch = useDispatch();
  
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
            <Button onClick={() => dispatch(addPokemon(id))}>
                추가
            </Button>
        </StCardWrap>
    )
}

export default PoketmonCard