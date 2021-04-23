import React, { useState, useEffect } from 'react';
import { Page, GameHeader, Title, Incorrect, GameDeck, GameCard, Image } from './CardDeck.styled';


const CardDeck = ({ animals }) => {
  const [deck, setDeck] = useState(null)
  const [openCard, setOpenCard] = useState([])
  const [matched, setMatched] = useState([])
  const [incorrect, setIncorrect] = useState(0)

  // set deck from animals prop passed from MatchGamePage
  useEffect(() => {
    // wait for animals to load
    if (animals !== undefined) { }
    let newDeck = []

    // push two copies of the same animal to the deck
    animals.map((animal) => {
      if (animal !== undefined) {
        newDeck.push(animal)
        newDeck.push(animal)
      }
    })

    // randomize the animal cards
    let j, x, i;
    for (i = newDeck.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = newDeck[i];
      newDeck[i] = newDeck[j];
      newDeck[j] = x;
    }
    setDeck(newDeck)
  }, [animals])

  // if a card is flipped add it to openCard
  const handleFlip = animalID => {
    setOpenCard((opened) => [...opened, animalID])
  }

  // check open cards against one another
  useEffect(() => {
    let firstMatch = openCard[0]
    let secondMatch = openCard[1]

    // if the second card has been chosen proceed
    if (secondMatch) {

      // split the animal id from the card index number
      let firstCleaned = firstMatch.split('~')
      let secondCleaned = secondMatch.split('~')

      // compare animal ids from each card
      // if the ids match add the pair to matched
      if (firstCleaned[1] === secondCleaned[1]) {
        setMatched([...matched, firstCleaned[1], secondCleaned[1]])
      } else {
        // if the cards don't match add 1 to the incorrect guesses counter
        setIncorrect(incorrect + 1)
      }

    }

    // if there are two cards in openCard (and not matched) set a time to flip them back unless
    if (openCard.length === 2) {
      setTimeout(() => setOpenCard([]), 300)
    }
  }, [openCard])

  // wait for all animals to load to start game
  if (!deck) {
    // **STRETCH GOAL - Implement a loading page**
    return (
      <div></div>
    )
  }
  return (
    <Page>
      <GameHeader>
        <div className='placeholder'></div>
        <Title>Match 2 Meet!</Title>
        <Incorrect>Incorrect Guess: {incorrect}</Incorrect>
      </GameHeader>
      <GameDeck>
        {
          // create cards from deck
          deck.map((animal, index) => {

            // set initial flip value
            let flipCard = true;

            // if the card is in openCard switch flip value
            if (openCard.includes(`${index}~${animal.id}`)) {
              flipCard = false
            }

            // if the card is in matched keep it flipped to photo side
            if (matched.includes(`${animal.id}`)) {
              flipCard = false;
            }

            // once all animals are loaded render cards
            if (animal && animal !== undefined) {
              return (
                <GameCard
                  key={index}

                  // toggle class based on flipCard value
                  flipped={`${flipCard ? 'flipped' : ''}`}
                  onClick={() => handleFlip(`${index}~${animal.id}`)}
                >
                  <Image
                    src={animal.photos[0].medium}
                    alt={animal.name}
                  />
                </GameCard>
              )
            }
          })
        }
      </GameDeck>
    </Page>
  )
}

export default CardDeck
