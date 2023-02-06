import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import LocationCard from './LocationCard';

// import './EditUserForm.css';

function EditUserForm({ selectedUser, allCountryArray, handleEditUser }) {
  const [name, setName] = useState(selectedUser.name);
  const [hometown, setHometown] = useState(selectedUser.location);
  const [image, setImage] = useState(selectedUser.image_URL);

  const newVisitArray = selectedUser.visits.map((visit) => {
    return {
      country: visit.location.country,
      haveVisited: visit.visited,
      wantToVisit: visit.want_to_visit,
    };
  });

  const [visitArray, setVisitArray] = useState(newVisitArray);
  // console.log(visitArray)

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      id: parseInt(selectedUser.id),
      name: name,
      location: hometown,
      image_URL: image,
      visits: visitArray,
    };
    setVisitArray([]);
    setName('');
    setImage('');

    handleEditUser(newUser);
  }

  // handles "have visited" or "want to visit" button click
  // replaces/ creates object in array
  function updateVisitObject(country, haveVisited, wantToVisit) {
    const newObj = {
      country: country,
      haveVisited: haveVisited,
      wantToVisit: wantToVisit,
    };
    // console.log(newObj)

    let newVisitArray = visitArray.filter(
      (visitObj) => visitObj.country !== country
    );
    newVisitArray = [...newVisitArray, newObj];
    setVisitArray(newVisitArray);
  }

  //console.log(visitArray);

  const countryCardsArray = allCountryArray.map((country) => {
    let visit = visitArray.filter(
      (visit) => visit.country === country.country_name
    );
    visit = visit ? visit[0] : visit;
    //console.log(visit)
    return (
      <LocationCard
        key={country.country_name}
        country={country}
        updateVisitObject={updateVisitObject}
        userHasVisited={visit?.haveVisited}
        userWantToVisit={visit?.wantToVisit}
      />
    );
  });

  return (
    <div className="edit-user-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Hometown"
          value={hometown}
          onChange={(e) => setHometown(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <div className="cards">{countryCardsArray}</div>
        <Button id="submit-button" className="submit-form">
          Update User
        </Button>
      </form>
    </div>
  );
}

export default EditUserForm;
