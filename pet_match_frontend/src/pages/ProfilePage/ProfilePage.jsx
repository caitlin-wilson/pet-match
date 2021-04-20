import React from 'react';
import { Link } from 'react-router-dom';
import { TopBar, Banner, ProfPhoto, Main } from './ProfilePage.styled';

const ProfilePage = (props) => {
  return (
    <div>
      <TopBar>
        <ProfPhoto></ProfPhoto>
        <Banner>
          <h1>{props.user.first_name} {props.user.last_name}</h1>
          <div>
            <button>Match!</button>
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
