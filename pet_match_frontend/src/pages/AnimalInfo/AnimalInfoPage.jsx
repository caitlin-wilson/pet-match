import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PetFinderAPI from '../../APIs/PetFinderAPI';
import { Page, Left, Photo, Right, Field, Info, Description } from './AnimalnfoPage.styled';


const AnimalInfoPage = (props) => {
  const animalID = props.location.state.animal
  const token = props.location.state.token

  const [animalInfo, setAnimalInfo] = useState(null)
  useEffect(() => {
    const fetchAnimal = async () => {
      const animal = await PetFinderAPI.fetchAnimal(animalID, token)
      setAnimalInfo(animal)
    }
    fetchAnimal()
  }, [animalID, token])

  console.log(animalInfo)
  if (animalInfo) {
    return (
      <Page>
        <Left>
          <Photo
            src={animalInfo.animal.photos[0].large}
            alt={animalInfo.animal.name}
          />
        </Left>
        <Right>
          <h1>{animalInfo.animal.name}</h1>
          <div>
            <Field>
              Species:<br />
              Primary Breed:<br />
              Age:<br />
              Gender:<br />
              Size:<br />
              Description:<br />
            </Field>
            <Info>
              {animalInfo.animal.species}<br />
              {animalInfo.animal.breeds.primary}<br />
              {animalInfo.animal.age}<br />
              {animalInfo.animal.gender}<br />
              {animalInfo.animal.size}<br />
              {animalInfo.animal.description}
            </Info>
          </div>
          <div className='buttons'>
            <Link to='/profile'>
              <button className='button-inverse'>BACK TO PROFILE</button>
            </Link>
            <a href={animalInfo.animal.url} target="_blank" rel="noreferrer">
              <button>EVEN MORE INFO</button>
            </a>
          </div>
        </Right>
      </Page>
    )
  }
  return (
    <div></div>
  )
}

export default AnimalInfoPage
