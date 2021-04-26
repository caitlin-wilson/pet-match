import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PetFinderAPI from '../../APIs/PetFinderAPI';
import { Page, Left, Photo, Right, Field, Info } from './AnimalnfoPage.styled';
import Map from '../../components/Map/Map'


const AnimalInfoPage = (props) => {
  const [animalInfo, setAnimalInfo] = useState(null)

  const animalID = props.location.state.animal
  const token = props.location.state.token

  // use PetFinderAPI to fetch shelter details
  useEffect(() => {
    const fetchAnimal = async () => {
      const animal = await PetFinderAPI.fetchAnimal(animalID, token)
      setAnimalInfo(animal)
    }
    fetchAnimal()
  }, [animalID, token])

  //after animal details have loaded return page
  if (animalInfo) {
    return (
      <Page>
        <Left>
          <Photo
            src={animalInfo.animal.photos[0].large}
            alt={animalInfo.animal.name}
          />
          <h4>{animalInfo.animal.name} may be closer than you think.</h4>
          <Map org={animalInfo.animal.organization_id} token={token} />
        </Left>
        <Right>
          <h1>{animalInfo.animal.name}</h1>
          <div className='info sheet'>
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
