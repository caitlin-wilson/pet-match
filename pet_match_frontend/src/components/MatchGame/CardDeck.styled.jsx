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
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .placeholder {
    width: 48vw
  }
  `


const Title = styled.div`
  width: 33vw;
  font-size: 3vw;
`

const Incorrect = styled.div`
  color: ${({ theme }) => theme.primary};
  width: 33vw;
  padding: 10px;
  font-size: 1.5vw;
  text-align: center;
`

// **STRETCH GOAL - Make size more responsive**
const GameDeck = styled.div` 
  margin-top: 30px;
  display: inline-grid;
  grid-template: repeat(6, 1fr) / repeat(6, 1fr);
  gap: 15px;

  @media (max-width: 1280px) {
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  }
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
`

const WinnerDeck = styled.div`
  margin-top: 30px;
  width: 95vw;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
`

const AddAnimalCard = styled.div`
  height: 450px;
  width: 210px;
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
`

const AnimalInfo = styled.div`
  height: 10px;
  display: flex;
  flex-flow: column;
  padding: 0 10px;
  font-family: 'Rubik', sans-serif;

  .field {
    font-size: 14px;
  }

  .name {
    margin: 10px 0px;
    font-size: 24px;
    text-decoration: underline;
    align-self: center;
    color: ${({ theme }) => theme.primary};
  }

  .detail {
    font-family: 'Cormorant', serif;
    font-size: 18px;
  }
`

const ButDiv = styled.div`
  margin: 150px 33px;
  display: flex;
  justify-content: center;
  
  button {
    margin-top: 20px;
    padding: 5px 10px;
  } 
`

export {
  Page,
  GameHeader,
  Title,
  Incorrect,
  GameDeck,
  GameCard,
  Image,
  WinnerDeck,
  AddAnimalCard,
  AnimalInfo,
  ButDiv,
}