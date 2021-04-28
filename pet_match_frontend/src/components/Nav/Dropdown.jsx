import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UL } from './Nav.styled';
import UserAPI from '../../APIs/UserAPI';



const RightNav = ({ open, isLoggedIn, user }) => {
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

  const handleDelete = async () => {
    try {
      if (window.confirm('Are you sure you want to delete your account? (We hope you found the perfect pet!)')) {
        let response = await UserAPI.deleteUser(user.id)
        handleLogOut()
        return response
      } else {
        return
      }
    } catch (error) {
      console.error('ERROR WITH MENU DELETE ACCOUNT CALL', error)
    }
  }

  if (redirect) {
    return <Redirect to='/' />
  }
  if (isLoggedIn) {
    return (
      <UL open={open}>
        <Link style={{ textDecoration: 'none' }} onClick={handleDelete} to=''>
          <li>Delete Account</li>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/profile'>
          <li>Profile</li>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/preferences'>
          <li>Preferences</li>
        </Link>
        <Link style={{ textDecoration: 'none' }} onClick={handleLogOut} to=''>
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
