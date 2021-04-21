import styled from 'styled-components';

const GameHeader = styled.div`
  height: 80px;
  margin-top: 30px;
  font-size: 36px;
  display: flex;
  justify-content: center;
`

const GameDeck = styled.div`
  width: 100vw;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 
`

const GameCard = styled.div`
  height: 200px;
  width: 180px;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};

  img {
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    max-width: 180px;
  }
`

export {
  GameHeader,
  GameDeck,
  GameCard,
}