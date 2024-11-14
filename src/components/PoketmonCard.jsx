import { Button, StCard, StClickWrap, StName } from '../styledComponents';
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
        <StCard> 
            <StClickWrap onClick={handleDetailClick}>
                <img src={image} alt={name} />
                <StName>{name}</StName>
                <br />
                <p>{type}</p>
                <br />
            </StClickWrap>
            <Button onClick={() => dispatch(addPokemon(id))}>
                추가
            </Button>
        </StCard>  
    )
}

export default PoketmonCard