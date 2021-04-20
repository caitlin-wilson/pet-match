import React, { useState } from 'react';
import { Burg } from './Nav.styled';
import Dropdown from './Dropdown';

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Burg open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burg>
      <Dropdown open={open} />
    </div>
  )
}

export default Burger
