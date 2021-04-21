import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Welcome } from './Nav.styled';
import Burger from './Burger';


const NavBar = ({ user }) => {
  return (
    <Nav>
      <div className='logo'>
        <Link style={{ textDecoration: 'none', color: '#000000' }} to='/'>
          PetMatch
        </Link>
      </div>
      <Welcome>Welcome back, {user.first_name}!</Welcome>
      <Burger />
    </Nav>
  )
}

export default NavBar
