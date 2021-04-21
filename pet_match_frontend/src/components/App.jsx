import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from '../GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Theme';

import UserAPI from '../APIs/UserAPI';
import PetFinderAPI from '../APIs/PetFinderAPI';

import LandingPage from '../pages/LandingPages/LandingPage';
import SignUpPage from '../pages/FormPages/SignUpPage';
import SignInPage from '../pages/FormPages/SignInPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import PreferencesPage from '../pages/FormPages/PreferencesPage';
import MatchGamePage from '../pages/MatchGamePage/MatchGamePage';

import NavBar from './Nav/NavBar';


const App = () => {
  // hard coded set user.  Will have to be replaced  authentication
  const [user, setUser] = useState({})
  useEffect(() => {
    (async () => {
      const data = await UserAPI.fetchUser(1)
      setUser(data)
    })()
  }, [])

  // keep track of Pet Finder token.  Expires every hour
  const [tokenExpiration, SetTokenExpiration] = useState(0)
  const [token, setToken] = useState(null)
  useEffect(() => {
    const now = Date.now()
    // if the token has expired set a new token
    const fetchToken = async () => {
      if (now > (tokenExpiration + 3600000)) {
        const newToken = await PetFinderAPI.fetchToken()
        setToken(newToken)
        SetTokenExpiration(Date.now())
      }
    }
    fetchToken()
  }, [tokenExpiration])

  // console.log(PetFinderAPI.fetchMatchAnimals(token))

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <BrowserRouter>
          <NavBar user={user} />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/sign-up' component={SignUpPage} />
            <Route exact path='/sign-in' component={SignInPage} />
            <Route exact path='/profile' component={() => <ProfilePage user={user} />} />
            <Route exact path='/preferences' component={() => <PreferencesPage user={user} />} />
            <Route exact path='/match' component={() => <MatchGamePage user={user} token={token} />} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
