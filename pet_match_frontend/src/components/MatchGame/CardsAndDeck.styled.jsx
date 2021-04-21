import styled from 'styled-components';

const Deck = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: center;
`

const GameCard = styled.div`
  border: 1px solid blue;
  max-width: 160px;
  max-height: 160px;
  width: 50ch;
  height: 50ch;
  cursor: pointer;
  will-change: transform, opacity;

  .front, .back {
    background-size: cover;
  }

  .back {
    background-color: red;
  }
  .front {
      background-image: url(https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop);
    }
`

export {
  Deck,
  GameCard,
}