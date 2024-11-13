import React, { useEffect, useState } from 'react'
import MOCK_DATA from '../mockData'
import { BallWrap, Button, CardWrap, ImgBall, StBallWrap, StCard, StName } from '../styledComponents';
import monsterBallImg from '../assets/monsterBall.png';

const Dashboard = ({ selectId }) => {
    const [catchMon, setCatchMon] = useState([]);
    const [monsterBall, setMonsterBall] = useState(() => {
        return new Array(6).fill(null).map((_, i) => ({
            id: null,
            img: monsterBallImg,
            name: 'Monster Ball',
            types: [],
            key: new Date().getTime() + i
        }));
    });

    useEffect(() => {
        if (selectId === null || selectId === undefined) return;
        const selectedCard = MOCK_DATA.find(data => data.id === selectId);
        
        if (selectedCard) {
            setCatchMon(prev => {
                const sameArr = prev.filter(item => item.id === selectId);
                if (sameArr.length > 0) {
                    alert("이미 선택된 포켓몬입니다.");
                    return prev; 
                }

                if (prev.length < 6) {
                    return [...prev,
                        {
                            id: selectedCard.id,
                            img: selectedCard.img_url,
                            name: selectedCard.name,
                            types: selectedCard.types,
                            key: new Date().getTime(),
                        },
                    ];
                } else {
                    alert("더 이상 선택할 수 없습니다.");
                    return prev;
                }
            });
        }
    }, [selectId]);
    

    return (
        <>
            <h1>나만의 포켓몬</h1>
            <BallWrap>
                {monsterBall.map((ball) => (
                    <StBallWrap key={ball.key}>
                        {ball.id === null && <ImgBall src={ball.img} alt={ball.name} />}
                    </StBallWrap>
                ))}
                {catchMon.map((ball) => (
                    <StBallWrap key={ball.key}>
                        {ball.id !== null && <StCard>
                            <img src={ball.img} alt={ball.name} />
                            <StName>{ball.name}</StName>
                            <br />
                            <p>{ball.types.join(", ")}</p>
                            <br />
                            <Button>삭제</Button>
                        </StCard>}
                    </StBallWrap>
                ))}
            </BallWrap>
        </>
    )
}

export default Dashboard