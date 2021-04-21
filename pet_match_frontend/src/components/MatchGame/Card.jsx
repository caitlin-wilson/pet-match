import React, { useState } from 'react';
import { GameCard } from './CardsAndDeck.styled';

const Card = ({ animal, matchID }) => {
  const [flipped, setFlipped] = useState(false)

  const handleClick = () => {
    setFlipped(!flipped)
  }

  return (
    <GameCard onClick={handleClick}>
      {flipped ?
        <img src={`${animal.photos[0].medium}`} /> :
        <img src={``} />
      }

    </GameCard>
  )
}

export default Card
