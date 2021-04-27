import React, { useState, useEffect } from 'react';
import PetFinderAPI from '../../APIs/PetFinderAPI';
import CardDeck from '../../components/MatchGame/CardDeck';

const MatchGamePage = ({ token, user }) => {
  // use user's preferences to set create a string to attach to the api call
  const [searchString, setSearchString] = useState(null)
  useEffect(() => {
    // establish empty string for preference results
    let searchPrefs = ''

    // if the props have loaded proceed
    if (token) {
      // loop through user's preferences 
      for (const [key, value] of Object.entries(user.preferences)) {
        // remove id and user, only add preferences that are not 'no preference'
        if (key !== 'id' && key !== 'user' && value !== 'no preference') {
          // format string for API request
          searchPrefs += `${key}=${value}&`
        }
      }
      //remove the last '&' from string
      searchPrefs = searchPrefs.substring(0, searchPrefs.length - 1)
      setSearchString(searchPrefs)
    }
  }, [token, user.preferences])


  // fetch search results from Pet Finder.  Brings back 1st 20 results
  // **STRETCH GOAL: Make it more random by switching up pages?**
  const [animals, setAnimals] = useState(null)
  useEffect(() => {
    const fetchAnimals = async () => {
      if (searchString) {
        const allAnimals = await PetFinderAPI.fetchAnimals(searchString, token)
        setAnimals(allAnimals)
      }
    }
    fetchAnimals()
  }, [token, searchString])

  // render animals from search results to be used for memory game
  const [matchAnimals, setMatchAnimals] = useState([])
  useEffect(() => {
    // once animals have loaded
    if (animals) {
      console.log(animals)
      // randomize the index numbers of the animal array
      let indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      let j, x, i;
      for (i = indexes.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = indexes[i];
        indexes[i] = indexes[j];
        indexes[j] = x;
      }
      // add the first 6 random (by index) animals to the match animals array
      let matchAnimalsArr = []
      for (let i = 0; i < 6; i++) {
        matchAnimalsArr.push(animals.animals[indexes[i]])
      }
      // set match animals to the random array of animals
      setMatchAnimals(matchAnimalsArr)
    }
  }, [animals])

  return (
    <div>
      <CardDeck animals={matchAnimals} user={user} />
    </div>
  )
}

export default MatchGamePage
