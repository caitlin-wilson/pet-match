import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Page, FormButtons } from './FormPages.styled';
import { Form } from 'react-bootstrap';
import UserAPI from '../../APIs/UserAPI';


const PreferencesPage = ({ user }) => {
  // Set default redirect to false once form is submitted it will change to true and redirect to profile page.
  const [redirect, setRedirect] = useState(false)
  console.log(user)
  // Submit for to api call and save changes to user's preferences.
  const savePreferences = async (event) => {
    try {
      event.preventDefault()
      const preferencesObj = {
        type: event.target[0].value,
        gender: event.target[1].value,
        age: event.target[2].value,
        location: event.target.elements[3].value,
      }
      const request = await UserAPI.postPreferences(user.preferences.id, preferencesObj)
      // Change redirect to true.  When form is submitted user is redirected to profile page
      setRedirect(true)
      return request

    } catch (error) {
      console.log('ERROR PATCHING PREFERENCE CHANGES', error)
    }
  }

  // Conditionally render page depending on wether redirect is true(=redirect), or false.
  // **STRETCH GOAL: Add more animal types.**
  const renderPrefForm = () => {
    if (redirect) {
      return <Redirect to='/profile' />
    }
    return (
      <Page>
        <h1>
          Your Preferences
        </h1>
        <Form onSubmit={savePreferences}>
          <Form.Label>What type of animal are you looking for?</Form.Label>
          <Form.Control as="select">
            <option value='Dog'>Dogs</option>
            <option value='Cat'>Cats</option>
            {/* <option value='Rabbit'>Rabbits</option>
            <option value='Bird'>Birds</option> */}
          </Form.Control>
          <Form.Label>Gender?</Form.Label>
          <Form.Control as="select">
            <option value='no preference'>No preference</option>
            <option value='Female'>Female</option>
            <option value='Male'>Male</option>
          </Form.Control>
          <Form.Label>Age?</Form.Label>
          <Form.Control as="select">
            <option value='no preference'>No preference</option>
            <option value='Baby'>Baby</option>
            <option value='Young'>Young</option>
            <option value='Adult'>Adult</option>
            <option value='Senior'>Senior</option>
          </Form.Control>
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="text" />
          <FormButtons>
            <button className='.submit' type="submit">
              Save
            </button>
            <Link to='/profile'>
              <button className='button-inverse' type="submit">
                Cancel
              </button>
            </Link>
          </FormButtons>
        </Form>
      </Page>
    )
  }

  // Call conditional rendering function
  return (
    <div>
      {renderPrefForm()}
    </div>
  )
}

export default PreferencesPage
