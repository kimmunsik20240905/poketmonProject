# Pokemon Dex 만들기 프로젝트

## 프로젝트 개요
내가 원하는 포켓몬의 정보를 확인하고 대시보드에 추가/삭제 할 수 있는 기능을 React로 구현한 프로젝트로, 라우팅은 `React-router-dom`을 이용하였고, `props drilling`, `Context API`, `RTK` 세 가지 방식을 각각 사용하여 다른 브랜치에서 구현하였고, 이 프로젝트는 GitHub에 저장하고, Vercel로 배포하였음 (props drilling 브랜치 제외).

- **제작 기간:** 2024.12.9 ~ 2024.12.14

## 기술 스택
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=yarn&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) ![RTK](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat&logo=redux&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) ![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat&logo=styled-components&logoColor=white)

## 페이지 구성 및 기능
- **공통사항**
  * `Router.jsx`에서 `react-router-dom`을 이용하여 `home`(메인), `dex`(리스트 및 대시보드), `pokemon`(상세페이지) 라우팅 처리 수행
  * 컴포넌트는 리스트(`PoketmonList.jsx`), 카드생성(`PoketmonCard.jsx`), 대시보드(`Dashboard.jsx`), 상세화면(`PokemonDetail.jsx`)로 구성

- **props-drilling** ([링크](https://github.com/kimmunsik20240905/poketmonProject/tree/props-drilling))
  * 라우팅 처리한 `Router`를 `App.jsx`에서 호출
  * 리스트(`PoketmonList.jsx`)는 `state`, `props`를 만들어서 내려주는 역할과 대시보드와 카드의 레이아웃 기능 수행
  * 카드생성(`PoketmonCard.jsx`)은 `props`로 받은 기능을 카드에 탑재하는 기능 수행
  * 대시보드(`Dashboard.jsx`)는 `props`로 받은 기능을 선택한 카드들에 구현하는 기능 수행
  * 상세화면(`PokemonDetail.jsx`)은 뒤로 가기 기능과 `useParams`으로 받아온 `id`를 통해 포켓몬 정보를 뿌려주는 기능 수행 

- **Context API** ([링크](https://poketmon-project-delta.vercel.app/))
  * 라우팅 처리한 `Router`를 `App.jsx`에서 호출하고, Context API가 동작하도록 `Provider` 또한 호출
  * 컨텍스트(`PokemonContext.jsx`)는 Context API를 이용하여 `state`, `props`를 정의하는 기능 수행
  * 리스트(`PoketmonList.jsx`)는 대시보드와 카드의 레이아웃 기능 수행
  * 카드생성(`PoketmonCard.jsx`)은 컨텍스트를 가져온 `prop`을 카드에 탑재하는 기능 수행
  * 대시보드(`Dashboard.jsx`)는 컨텍스트를 가져온 `state`, `props`를 선택한 카드들에 구현하는 기능 수행
  * 상세화면(`PokemonDetail.jsx`)은 뒤로 가기 기능과 `useParams`으로 받아온 `id`를 통해 포켓몬 정보를 뿌려주는 기능 수행 

- **RTK** ([링크](https://poketmon-project-redux.vercel.app/))
  * 라우팅 처리한 `Router`를 `App.jsx`에서 호출하고, `store`를 이용할 수 있도록 `Provider` 또한 호출
  * 리듀서(`pokemonSlice.jsx`)는 `store`에 연결할 `state`, `props`를 정의하는 기능 수행
  * 리스트(`PoketmonList.jsx`)는 대시보드와 카드의 레이아웃 기능 수행
  * 카드생성(`PoketmonCard.jsx`)은 `store`에서 가져온 `prop`을 카드에 탑재하는 기능 수행
  * 대시보드(`Dashboard.jsx`)는 `store`에서 가져온 `state`, `props`를 선택한 카드들에 구현하는 기능 수행
  * 상세화면(`PokemonDetail.jsx`)은 뒤로 가기 기능과 `useParams`으로 받아온 `id`를 통해 포켓몬 정보를 뿌려주는 기능, 추가적으로 `store`에서 가져온 `state`를 이용하여 대시보드에 추가/삭제 기능 수행 
