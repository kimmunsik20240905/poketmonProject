import PoketmonCard from './PoketmonCard';
import MOCK_DATA from '../mockData';
import Dashboard from './Dashboard';
import { SectionWrap } from '../styledComponents';

const PoketmonList = () => {
    return (
        <>
            <Dashboard />
            <SectionWrap>
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
            </SectionWrap>
        </>
    )
}

export default PoketmonList