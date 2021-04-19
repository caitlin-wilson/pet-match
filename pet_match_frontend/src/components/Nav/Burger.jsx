import React, { useState, useEffect } from 'react';
import { Burg } from './Nav.styled';
import RightNav from './RightNav';

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Burg open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burg>
      <RightNav open={open} />
    </div>
  )
}

export default Burger
