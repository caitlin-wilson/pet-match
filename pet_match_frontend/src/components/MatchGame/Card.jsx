import React from 'react'

const card = (props) => {
  const renderCards = () => {
    if (props.animal) {
      return (
        <div>
          <img alt={props.animal.id} src={props.animal.photos[0].medium}></img>
          <h4>{props.animal.name}</h4>
        </div>
      )
    }
  }
  return (
    <div>
      {renderCards()}
    </div>
  )
}

export default card
