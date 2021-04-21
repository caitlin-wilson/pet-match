import React, { useState, useEffect } from 'react';
import PetFinderAPI from '../../APIs/PetFinderAPI';

const MatchGamePage = (props) => {
  // use user's preferences to set create a string to attach to the api call
  const [searchString, setSearchString] = useState({})
  useEffect(() => {
    // establish empty string for preference results
    let searchPrefs = ''

    // if the props have loaded proceed
    if (props.token) {
      // loop through user's preferences 
      for (const [key, value] of Object.entries(props.user.preferences)) {
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
  }, [props.token, props.user.preferences])

  console.log(PetFinderAPI.fetchMatchAnimals(searchString, props.token))

  return (
    <div>
      Match Game Page
    </div>
  )
}

export default MatchGamePage
