import React, { useState, useEffect } from 'react';
import PetFinderAPI from '../../APIs/PetFinderAPI';


const Map = ({ org, token }) => {
  const googleAPI = process.env.REACT_APP_GOOGLE_API_KEY
  const [organization, setOrganization] = useState(null)

  useEffect(() => {
    const fetchOrg = async () => {
      const animalOrg = await PetFinderAPI.fetchOrg(org, token)
      setOrganization(animalOrg)
    }
    fetchOrg()
  }, [org, token])

  if (organization) {
    return (
      <iframe
        title="map"
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?key=${googleAPI}&q=${organization.organization.name},${organization.organization.address.city}+${organization.organization.address.state}`}>
      </iframe>
    )
  }
  return <div></div>
}

export default Map
