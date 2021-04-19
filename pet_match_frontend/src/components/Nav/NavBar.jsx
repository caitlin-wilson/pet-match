import React from 'react';
import { Nav } from './Nav.styled';
import Burger from './Burger';


const NavBar = () => {
  return (
    <Nav>
      <div className='logo'>
        PetMatch
      </div>
      <Burger />
    </Nav>
  )
}

export default NavBar
