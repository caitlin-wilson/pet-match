import React, { useState, useEffect } from 'react';
import Card from './Card';
import { GameHeader, GameDeck } from './CardsAndDeck.styled';


const CardDeck = ({ animals }) => {
  const [deck, setDeck] = useState(null)
  useEffect(() => {
    if (animals.length < 0) { }
    let newDeck = []
    animals.map((animal) => {
      animal.flipped = false
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
  }, [animals])

  const [matchCount, setMatchCount] = useState(0)
  const [cardsFlipped, setCardsFlipped] = useState(0)

  const CardClick = (e) => {
    if (matchCount <= 6) {
      if (cardsFlipped <= 2) {
        const matchOne = e.target.children[0]
        const matchTwo = e.target.children[0]
        setCardsFlipped(2)
        if (matchOne === matchTwo) {
          setMatchCount(matchCount + 1)
        } else {
          setCardsFlipped(0)
          alert('reset the cards to continue')
        }
      }
    }
  }

  const renderCards = () => {
    if (deck) {
      return (
        deck.map((item, index) => {
          return (
            <div onClick={CardClick} >
              <Card animal={item} />
            </div >
          )
        })
      )
    }
  }

  return (
    <div>
      <GameHeader>Match Header Placeholder</GameHeader>
      <GameDeck>
        {renderCards()}
      </GameDeck>
    </div>
  )
}

export default CardDeck
