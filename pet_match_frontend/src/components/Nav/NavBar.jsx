import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Welcome } from './Nav.styled';
import Burger from './Burger';


const NavBar = ({ user, isLoggedIn }) => {

  if (isLoggedIn) {
    return (
      <Nav>
        <div className='logo'>
          <Link style={{ textDecoration: 'none', color: '#000000' }} to='/profile'>
            PetMatch
          </Link>
        </div>
        <Welcome>Welcome back, {user.username}!</Welcome>
        <Burger isLoggedIn={isLoggedIn} user={user} />
      </Nav>
    )
  } else {
    return (
      <Nav>
        <div className='logo'>
          <Link style={{ textDecoration: 'none', color: '#000000' }} to='/'>
            PetMatch
          </Link>
        </div>
        <Burger />
      </Nav>
    )
  }
}

export default NavBar
