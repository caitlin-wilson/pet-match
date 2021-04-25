import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TopBar, Banner, ProfPhoto, Main, MatchDeck, AnimalCard, Image } from './ProfilePage.styled';
import UserAPI from '../../APIs/UserAPI';

const ProfilePage = ({ user, token }) => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    if (user.matches && user.matches !== undefined) {
      setMatches(user.matches)
    }
  }, [user.matches])

  return (
    <div>
      <TopBar>
        <ProfPhoto></ProfPhoto>
        <Banner>
          <h1>{user.first_name} {user.last_name}</h1>
          <div>
            <Link to='/match'>
              <button>Match!</button>
            </Link>
            <Link to='/preferences'>
              <button className='button-inverse'>
                Set Preferences
              </button>
            </Link>
          </div>
        </Banner>
      </TopBar>
      <Main>
        <h1>Your Current Matches</h1>
        <MatchDeck>
          {
            matches.map((animal) => {
              return (
                <AnimalCard>
                  <Image
                    src={animal.photo}
                    alt={animal.name}
                  />
                  <Link to={{
                    pathname: `/animal-info/${animal.api_id}`,
                    state: {
                      animal: animal.api_id,
                      token: token
                    }
                  }}>
                    <button className='button-inverse'>MORE INFO</button>
                  </Link>
                  <button
                    onClick={() => {
                      UserAPI.removeMatch(animal.id)
                      window.location.reload()
                    }}
                  >
                    REMOVE
                  </button>
                </AnimalCard>
              )
            })
          }
        </MatchDeck>
      </Main>
    </div>
  )
}

export default ProfilePage
