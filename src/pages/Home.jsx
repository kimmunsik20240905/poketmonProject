import React from 'react'
import { useNavigate } from 'react-router-dom';
import poketmonLogo from '../assets/poketmonLogo.png'
import { Main, MainButton, MainWrap } from '../styledComponents';

const Home = () => {
  const navigate = useNavigate();
  return (
    <MainWrap>
      <Main>
        <img src={poketmonLogo} alt="포켓몬 로고이미지" />
        <br />
        <MainButton onClick={() => { navigate("/Dex") }}>포켓몬 도감 시작하기</MainButton>
      </Main>
    </MainWrap>
  )
}

export default Home