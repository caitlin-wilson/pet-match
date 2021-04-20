const APIKey = process.env.REACT_APP_PET_FINDER_API_KEY
const secret = process.env.REACT_APP_PET_FINDER_SECRET


const fetchToken = async () => {
  try {
    const request = await fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'grant_type': 'client_credentials',
        'client_id': APIKey,
        'client_secret': secret,
      })
    })
    const data = await request.json()
    // const response = await JSON.stringify(data.access_token)
    return data.access_token
  } catch (error) {
    console.error('ERROR FETCHING PET FINDER AUTH TOKEN', error)
  }
}

const fetchAnimals = async (token) => {
  const request = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const data = await request.json()
  return data
}




// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchToken,
  fetchAnimals,
}