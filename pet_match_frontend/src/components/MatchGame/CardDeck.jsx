import React, { useState, useEffect } from 'react';
import Card from './Card';
import { GameDeck } from './CardsAndDeck.styled';


const CardDeck = ({ animals }) => {
  const [deck, setDeck] = useState(null)
  useEffect(() => {
    if (animals.length < 0) { }
    let newDeck = []
    animals.map((animal) => {
      newDeck.push(animal)
      newDeck.push(animal)
    })
    let j, x, i;
    for (i = newDeck.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = newDeck[i];
      newDeck[i] = newDeck[j];
      newDeck[j] = x;
    }
    setDeck(newDeck)
  }, [])

  const renderCards = () => {
    if (deck) {
      return (
        deck.map((item, index) => {
          return (
            <Card animal={item} matchID={item.id} />
          )
        })
      )
    }
  }
  console.log(deck)

  return (
    <GameDeck>
      {renderCards()}
    </GameDeck>
  )
}

export default CardDeck
