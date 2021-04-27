/* eslint-disable import/no-anonymous-default-export */
const BASE_URL = 'http://localhost:8000/'


const createUser = async (userObj) => {
  // make fetch call to api
  try {
    // add header with PATCH method to update user preferences
    const request = fetch(`${BASE_URL}user/auth/register`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      // convert object to JSON
      body: JSON.stringify(userObj)
    })
    return request
    // catch errors
  } catch (error) {
    console.error('ERROR MAKING NEW USER REQUEST TO USER API', error)
  }
}

const signInUser = async (userObj) => {
  //fetch call to api
  try {
    const request = fetch(`${BASE_URL}user/auth/login`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      // convert user obj to JSON
      body: JSON.stringify(userObj)
    })
    // return request with token
    return request
    // catch errors
  } catch (error) {
    console.error('ERROR MAKING SIGN IN REQUEST TO USER API', error)
  }
}


const fetchUser = async (userToken) => {
  try {
    // make call to user api
    const response = await fetch(`${BASE_URL}user/auth/user`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${userToken}`
      }
    })
    // convert response to json
    const data = await response.json()

    // check response - reject promise if there's an error
    if (!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    // return data if response ok
    return data

    // if fetch call fails throw an error
  } catch (error) {
    console.error('ERROR FETCHING USER INFO', error)
  }
}

const postPreferences = (userPrefID, preferencesObj) => {
  // make fetch call to api
  try {
    // add header with PATCH method to update user preferences
    const request = fetch(`${BASE_URL}user-preferences/${userPrefID}/`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      // convert object to JSON
      body: JSON.stringify(preferencesObj)
    })
    return request
  } catch (error) {
    console.error('ERROR POSTING USER PREFERENCES', error)
  }
}

const addMatch = (matchObj, userToken) => {
  try {
    const request = fetch(`${BASE_URL}user-matches/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${userToken}`
      },
      method: 'POST',
      body: JSON.stringify(matchObj)
    })
    return request
  } catch (error) {
    console.error('ERROR ADDING ANIMAL TO MATCHES', error)
  }
}

const removeMatch = async (matchID, userToken) => {
  try {
    const response = await fetch(`${BASE_URL}user-matches/${matchID}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${userToken}`
      },
      method: 'DELETE'
    })
    return response;
  } catch (error) {
    console.error('ERROR DELETING MATCH', error)
  }
}


export default {
  createUser,
  signInUser,
  fetchUser,
  postPreferences,
  addMatch,
  removeMatch,
}