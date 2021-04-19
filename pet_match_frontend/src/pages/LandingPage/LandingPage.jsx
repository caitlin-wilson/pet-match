import React from 'react';
import { Link } from 'react-router-dom';
import { Page, Welcome, SI } from './LandingPage.styled';


const LandingPage = () => {
  return (
    <Page>
      <Welcome>Start matching with pets in your area today!</Welcome>
      <button className='button-dark'>SIGN UP</button>
      <SI>Already have an account?  <Link className='link'>Sign in.</Link></SI>
    </Page>
  )
}

export default LandingPage
