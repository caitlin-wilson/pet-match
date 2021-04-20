import React from 'react';
import { Nav, Welcome } from './Nav.styled';
import Burger from './Burger';


const NavBar = (props) => {
  return (
    <Nav>
      <div className='logo'>
        PetMatch
      </div>
      <Welcome>Welcome back, {props.user.first_name}!</Welcome>
      <Burger />
    </Nav>
  )
}

export default NavBar
