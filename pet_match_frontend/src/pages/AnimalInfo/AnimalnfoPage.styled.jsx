import styled from 'styled-components';

const Page = styled.div`
  width: 100vw;
  height: 90vh;
  padding: 20px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`

const Left = styled.div`
  width: 45vw;
  display: flex;
  flex-flow: column; 
  align-items: center;
  margin-left: 5vw;
  
  h4 {
    margin: 20px;
    color: ${({ theme }) => theme.primary};
    font-size: 1.6vw;
  }

  iframe {
    border: 0;
    height: 15vw;
    width: 22vw;
  }
`

const Photo = styled.img`
  height: 22vw;
  width: 22vw;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 10px;
  object-fit: cover;
`

const Right = styled.div`
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  margin-right: 10vw;
  max-width: 40vw;


  
  h1 {
    font-size: 2.5vw;
    color: ${({ theme }) => theme.primary};
    align-self: center;
    padding-top: 10px;
  }

  div {
    display: flex;
    flex-flow: row;
  }

  .buttons{
    max-width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
  }

  button {
    margin: 10px;
    padding: .75vw;
    font-size: 1vw;
  }
`

const Field = styled.div`
  font-size: 1.5vw;
  font-family: 'Rubik', sans-serif;
  display: flex;
  flex-flow: row; 
  text-align: right;
  padding: 20px;
`

const Info = styled.div`
  font-size: 1.5vw;
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