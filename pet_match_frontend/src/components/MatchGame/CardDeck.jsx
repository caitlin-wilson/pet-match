import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Deck } from './CardsAndDeck.styled'

const CardDeck = ({ animals }) => {
  const [game, setGame] = useState([])
  const [flippedCount, setFlippedCount] = useState(0)
  const [flippedIndexes, setFlippedIndexes] = useState([])

  useEffect(() => {
    const newGame = []
    for (let i = 0; i < animals.length; i++) {
      const firstOption = {
        id: 2 * i,
        cardId: i,
        animalPic: animals[i].photos[0].medium,
        animalId: animals[i].id,
        flipped: false,
      }
      const secondOption = {
        id: 2 * i + 1,
        cardId: i,
        animalPic: animals[i].photos[0].medium,
        animalId: animals[i].id,
        flipped: false,
      }
      newGame.push(firstOption)
      newGame.push(secondOption)
    }
    const shuffledGame = newGame.sort(() => Math.random() - 0.5)
    setGame(shuffledGame)

  }, [animals])

  useEffect(() => {
    const finished = !game.some(card => !card.flipped)
    if (finished && game.length > 0) {
      alert('game')
    }
  }, [game])

  if (flippedIndexes.length === 2) {
    const match = game[flippedIndexes[0]].cardId === game[flippedIndexes[1]].cardId

    if (match) {
      const newGame = [...game]
      newGame[flippedIndexes[0]].flipped = true
      newGame[flippedIndexes[1]].flipped = true
      setGame(newGame)

      const newIndexes = [...flippedIndexes]
      newIndexes.push(false)
      setFlippedIndexes(newIndexes)
    } else {
      const newIndexes = [...flippedIndexes]
      newIndexes.push(true)
      setFlippedIndexes(newIndexes)
    }
  }

  if (game.length === 0) return <h3>loading</h3>
  else {
    return (
      <Deck>
        {game.map((card, index) => {
          return (
            <Card
              key={`${index}:${card.animalId}`}
              id={index}
              picture={card.animalPic}
              game={game}
              flippedCount={flippedCount}
              setFlippedCount={setFlippedCount}
              flippedIndexes={flippedIndexes}
              setFlippedIndexes={setFlippedIndexes}
            />
          )
        })}
      </Deck>
    )
  }
}

export default CardDeck
