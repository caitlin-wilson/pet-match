import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from '../GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../ColorTheme';

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
