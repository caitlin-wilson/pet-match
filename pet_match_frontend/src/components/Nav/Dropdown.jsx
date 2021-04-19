import React from 'react';
import { UL } from './Nav.styled';



const RightNav = ({ open }) => {
  return (
    <UL open={open}>
      <li>Sign Up</li>
      <li>Sign In</li>
      <li>Profile</li>
      <li>Sign Out</li>
    </UL>
  )
}

export default RightNav
