import styled from 'styled-components';

const Page = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: row;
  padding: 20px;
`

const Left = styled.div`
  width: 50vw;
  display: flex;
  flex-flow: column; 
  align-items: center;
`

const Photo = styled.img`
  height: 350px;
  width: 350px;
  border-radius: 10px;
  object-fit: contain;
`

const Right = styled.div`

  width: 50vw;
  display: flex;
  flex-flow: column;
  
  h1 {
    color: ${({ theme }) => theme.primary};
    margin-left: 14vw;
  }

  div {
    display: flex;
    flex-flow: row;
  }

  .buttons{
    width: 35vw;
    display: flex;
    justify-content: center;

  }

  button {
    margin: 10px;
    padding: 10px;
    font-size: 16px;
  }
`

const Field = styled.div`
  width: 18vw;
  font-size: 2vw;
  font-family: 'Rubik', sans-serif;
  display: flex;
  flex-flow: row; 
  text-align: right;
  padding: 20px;
`

const Info = styled.div`
  width: 30vw;
  font-size: 2vw;
  font-family: 'Cormorant', serif;
  display: flex;
  flex-flow: column; 
  padding: 20px;
`

export {
  Page,
  Left,
  Photo,
  Right,
  Field,
  Info,
}