import styled from "styled-components";

export const BallWrap = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content : center; 
    gap:20px;
    padding:20px 90px;
`;

export const ImgBall = styled.img`
    width:40px;
`;

export const StBallWrap = styled.div`
    box-sizing : border-box;
    background-color : #fff;
    border:1px dashed #ccc;
    border-radius : 10px;
    padding:20px 20px;
    height:83px;
`;
export const SectionWrap = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content : center;
    padding:20px;
    gap:20px;
    max-width:1280px;
    align-items: center;
    background-color : #eee;
    border-radius:10px;
    margin-bottom:20px;
`;

export const CardWrap = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content : center;
    gap:20px;
    max-width:1280px;
    align-items: center;
`;

export const Sth1 = styled.h1`
    display : block;
    color : #ff0000;
    font-weight : bold;
    width:100%;
`;

export const StCard = styled.div`
    box-shadow : 2px 2px 5px rgba(0, 0, 0, 0.3);
    background-color : #fff;
    border-radius : 5px;
    border : 1px solid #ccc;
    padding: 40px 20px;
    box-sizing : border-box;
    width:186px;
    transition: transform 0.3s ease; 
    &:hover {
        transform: translate(-3px, -3px);
    }
`;

export const StClickWrap = styled.div`
    cursor:pointer;
`;

export const StName = styled.p`
    font-weight : bold;
`;

export const Button = styled.button`
    background-color : #fd0103;
    border-radius : 5px;
    padding:5px 10px;
    border-style:none;
    color:#fff;
    cursor : pointer;    
`;

export const DetailWrap = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content : center;
    align-items: center;
    width:100%;
    height:100vh;
    background-color:transparent;
    border:0px;
`;

export const Detail = styled.div`
    min-width:360px;
`;

export const BackButton = styled.button`
    background-color : #444;
    border-radius : 5px;
    padding:5px 10px;
    border-style:none;
    color:#fff;
    cursor : pointer;
`;
export const DetailButton = styled.button`
    margin-left:10px;
    background-color : #fd0103;
    border-radius : 5px;
    padding:5px 10px;
    border-style:none;
    color:#fff;
    cursor : pointer;
`;
export const MainWrap = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content : center;
    align-items: center;
    width:100%;
    height:100vh;
    background-color:transparent;
    border:0px;
`;

export const Main = styled.div`
    min-width:500px;
`;

export const MainButton = styled.button`
    background-color : #fd0103;
    border-radius : 5px;
    padding:5px 10px;
    border-style:none;
    color:#fff;
    cursor : pointer;
`;