import PoketmonCard from './PoketmonCard';
import MOCK_DATA from '../mockData';
import Dashboard from './Dashboard';
import { CardWrap } from '../styledComponents';

const PoketmonList = () => {
    return (
        <>
            <Dashboard />
            <CardWrap>
                {MOCK_DATA.map(data => {
                    return (
                        <PoketmonCard
                            key={data.id}
                            name={data.korean_name}
                            image={data.img_url}
                            type={data.types.join(', ')}
                            id={data.id}
                        />
                    )
                })}
            </CardWrap>
        </>
    )
}

export default PoketmonList