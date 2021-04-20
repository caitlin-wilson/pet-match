import styled from 'styled-components';


const TopBar = styled.div`
  width: 100%;
`
const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  background-color: ${({ theme }) => theme.white};
  margin: 27px 50px 0px 100px;
  border-radius: 10px;
  z-index: -1;

  h1 {
    color: ${({ theme }) => theme.primaryhover};
    margin-left: 35vw;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 3vw;
  }

  button {
    width: 10vw;
    font-size: 1vw;
    padding: 10px;
    margin-right: 25px;
  }
`

const ProfPhoto = styled.div`
  height: 150px;
  width: 150px;
  background-color: ${({ theme }) => theme.white};
  background-image: url("https://i1.wp.com/petmassage.com/wp-content/uploads/profile-pic-placeholder.png?fit=512%2C512&ssl=1");
  background-size: 140px;
  border: 5px solid ${({ theme }) => theme.bg};
  border-radius: 300px;
  top: 85px;
  left: 50px;
  position: absolute;
  z-index: 1;
`

const Main = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin: 40px;

  h1 {
    font-size: 25px;
    margin-right: 10px;
  }
`




export {
  TopBar,
  Banner,
  ProfPhoto,
  Main,
}