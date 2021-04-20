/* eslint-disable import/no-anonymous-default-export */
const BASE_URL = 'http://localhost:8000/'


const fetchUser = async (userID) => {
  try {
    // make call to user api
    const response = await fetch(`${BASE_URL}users/${userID}/`)
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
    console.error('ERROR FETCHING USER PREFERENCES', error)
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


export default {
  fetchUser,
  postPreferences,
}