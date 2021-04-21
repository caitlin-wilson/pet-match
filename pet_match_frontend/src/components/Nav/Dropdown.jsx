import React from 'react';
import { Link } from 'react-router-dom';
import { UL } from './Nav.styled';



const RightNav = ({ open }) => {
  return (
    <UL open={open}>
      <Link style={{ textDecoration: 'none' }} to='/sign-up'>
        <li>Sign Up</li>
      </Link>
      <Link style={{ textDecoration: 'none' }} to='/sign-in'>
        <li>Sign In</li>
      </Link>
      <Link style={{ textDecoration: 'none' }} to='/profile'>
        <li>Profile</li>
      </Link>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <li>Sign Out</li>
      </Link>

    </UL >
  )
}

export default RightNav
