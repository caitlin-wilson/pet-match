import styled from 'styled-components';

const Page = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`

const GameHeader = styled.div` 
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .placeholder {
    width: 33vw;
  }
  `


const Title = styled.div`
  font-size: 3vw;
`

const Incorrect = styled.div`
  margin-left: 300px;
  color: ${({ theme }) => theme.primary};
  font-size: 2vw;
`

// **STRETCH GOAL - Make size more responsive**
const GameDeck = styled.div` 
  margin-top: 30px;
  display: inline-grid;
  grid-template: repeat(6, 1fr) / repeat(6, 1fr);
  gap: 15px
`

// **STRETCH GOAL - Add animation to card flip**
const GameCard = styled.div` 
  height: 200px;
  width: 200px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  cursor: pointer;

  ${props => props.flipped && ` {
    img {
      opacity: 0;
    }
    `}
  }
}
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 10px;
`

export {
  Page,
  GameHeader,
  Title,
  Incorrect,
  GameDeck,
  GameCard,
  Image,
}