import React from 'react';
import { Nav, Welcome } from './Nav.styled';
import Burger from './Burger';


const NavBar = () => {
  return (
    <Nav>
      <div className='logo'>
        PetMatch
      </div>
      {/* <Welcome>Welcome back, user!</Welcome> */}
      <Burger />
    </Nav>
  )
}

export default NavBar
