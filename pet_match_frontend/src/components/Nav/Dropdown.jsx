import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UL } from './Nav.styled';
import UserAPI from '../../APIs/UserAPI';



const RightNav = ({ open, isLoggedIn }) => {
  const [redirect, setRedirect] = useState(false)

  const handleLogOut = async () => {
    try {
      let response = await UserAPI.logOutUser(localStorage.getItem('auth-user'))
      setRedirect(true)
      return response
    } catch (error) {
      console.error('ERROR WITH LOGOUT LINK', error)
    }
  }

  if (redirect) {
    return <Redirect to='/' />
  }
  if (isLoggedIn) {
    return (
      <UL open={open}>
        <Link style={{ textDecoration: 'none' }} to='/profile'>
          <li>Profile</li>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/preferences'>
          <li>Preferences</li>
        </Link>
        <Link style={{ textDecoration: 'none' }} onClick={() => handleLogOut()}>
          <li>Sign Out</li>
        </Link>
      </UL >
    )
  } else {
    return (
      <UL open={open}>
        <Link style={{ textDecoration: 'none' }} to='/sign-up'>
          <li>Sign Up</li>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/sign-in'>
          <li>Sign In</li>
        </Link>
      </UL >
    )
  }
}

export default RightNav
