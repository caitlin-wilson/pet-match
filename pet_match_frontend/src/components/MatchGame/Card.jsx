import React, { useState } from 'react';
import { GameCard } from './CardsAndDeck.styled';

const Card = ({ animal }) => {
  const [flipped, setFlipped] = useState(false)

  const handleClick = () => {
    setFlipped(!flipped)
  }

  return (
    <GameCard onClick={handleClick}>
      {flipped ?
        <img alt={`${animal.id}`} src={`${animal.photos[0].medium}`} /> :
        <img alt={''} src={''} />
      }

    </GameCard>
  )
}

export default Card
