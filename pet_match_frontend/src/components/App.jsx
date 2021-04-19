import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from '../global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

import LandingPage from '../pages/LandingPage/LandingPage';

import NavBar from './Nav/NavBar'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
