import React from 'react';
import Card from './Card';


const CardDeck = (props) => {
  const renderAnimals = () => {
    if (props.animals) {
      return (
        props.animals.map((animal) => {
          return (
            <Card animal={animal} />
          )
        })
      )
    }
  }

  return (
    <div>
      {renderAnimals()}
    </div>
  )
}

export default CardDeck
