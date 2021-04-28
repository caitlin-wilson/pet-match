// **STRETCH GOAL-Move this up to MatchPage and just use Cards as components?**
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Page, GameHeader, Title, Incorrect, GameDeck, GameCard, Image, WinnerDeck, AddAnimalCard, AnimalInfo, ButDiv } from './CardDeck.styled';
import UserAPI from '../../APIs/UserAPI';

const CardDeck = ({ animals, user }) => {
  const [deck, setDeck] = useState(null)
  const [openCard, setOpenCard] = useState([])
  const [matched, setMatched] = useState([])
  const [incorrect, setIncorrect] = useState(0)
  const [gameOver, setGameOver] = useState(false)

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

  useEffect(() => {
    if (matched.length === 12) {
      alert('You win!  Ready to meet the pets?')
      setTimeout(() => setGameOver(true), 1000)
    }
  }, [matched])


  // wait for all animals to load to start game
  if (!deck) {
    return (
      <GameHeader>
        <div className='placeholder'></div>
        <Title>Loading Game...</Title>
        <Incorrect>Incorrect Guess: {incorrect}</Incorrect>
      </GameHeader>
    )
  }

  // once the game is over load the animal cards to add to matches
  if (gameOver) {
    return (
      <Page>
        <GameHeader>
          <div className='placeholder'></div>
          <Title>Meet Your Matches</Title>
          <Incorrect>Add pets to you matches to see more details!</Incorrect>
        </GameHeader>
        <WinnerDeck>
          {
            // show a card for each animal that was used for the match game
            animals.map((animal, index) => {
              return (
                <AddAnimalCard key={index}>
                  <Image
                    src={animal.photos[0].medium}
                    alt={animal.name}
                  />
                  <AnimalInfo>
                    <div className='name'><span className='name'>{animal.name}</span></div>
                    <div className='field'>Age:&nbsp;&nbsp;&nbsp;<span className='detail'>{animal.age}</span></div>
                    <div className='field'>Gender:&nbsp;&nbsp;&nbsp;<span className='detail'>{animal.gender}</span></div>
                    <div className='field'>Size:&nbsp;&nbsp;&nbsp;<span className='detail'>{animal.size}</span></div>
                    <div className='field'>Distance:&nbsp;&nbsp;&nbsp;<span className='detail'>{animal.distance}-ish mi</span></div>
                  </AnimalInfo>
                  <ButDiv>
                    <button

                      // if a user clicks add the animal will be added to their matches on their profile page
                      onClick={() => {
                        const animalObj = {
                          user: user.id,
                          name: animal.name,
                          age: animal.age,
                          gender: animal.gender,
                          size: animal.size,
                          distance: animal.distance,
                          api_id: animal.id,
                          photo: animal.photos[0].medium
                        }
                        UserAPI.addMatch(animalObj, localStorage.getItem('auth-user'))
                      }}
                    >
                      ADD
                    </button>
                  </ButDiv>
                </AddAnimalCard>
              )
            })
          }
          <Link to='/profile' >
            <button className='button-inverse'>Go to your profile</button>
          </Link>
        </WinnerDeck>
      </Page>
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
            if (animal === undefined) {
              window.location.reload()
            }
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
            if (animal && animal !== undefined && animal.photos[0].medium !== undefined) {
              console.log(animal)
              return (
                <GameCard
                  key={index}

                  //**STRETCH GOAL - Fix the picture still being there on the toggle!!**
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
