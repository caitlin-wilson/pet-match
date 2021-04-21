import React from 'react';
import { Link } from 'react-router-dom';
import { TopBar, Banner, ProfPhoto, Main } from './ProfilePage.styled';

const ProfilePage = ({ user }) => {
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
      </Main>
    </div>
  )
}

export default ProfilePage
