import React, { useState } from 'react';
import { Burg } from './Nav.styled';
import Dropdown from './Dropdown';

const Burger = ({ isLoggedIn, user }) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Burg open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burg>
      <Dropdown isLoggedIn={isLoggedIn} user={user} open={open} />
    </div>
  )
}

export default Burger
