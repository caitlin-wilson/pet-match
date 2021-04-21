import styled from 'styled-components';

const GameDeck = styled.div`
  width: 95vw;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 
`

const GameCard = styled.div`
  height: 200px;
  width: 180px;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};

  img {
    height: 100%;
    object-fit: contain;
  }
`

export {
  GameDeck,
  GameCard,
}