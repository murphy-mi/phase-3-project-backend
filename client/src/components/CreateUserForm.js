import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import LocationCard from './LocationCard';
import '../App.css';


function CreateUserForm({ allStateArray, allCountryArray, handleNewUser }) {
  const [name, setName] = useState('');
  const [hometown, setHometown] = useState('');
  const [image, setImage] = useState('');
  const [visitArray, setVisitArray] = useState([]);
  // console.log(visitArray)

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: name,
      location: hometown,
      image_URL: image,
      visits: visitArray,
    };
    setVisitArray([]);
    setName('');
    setImage('');


    handleNewUser(newUser);
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

  const countryCardsArray = allCountryArray.map((country) => {
    return (
      <LocationCard
        key={country.country_name}
        country={country}
        updateVisitObject={updateVisitObject}
      />
    );
  });

  return (
    <div className="create-user-form">
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
        <div className="cards">
          {countryCardsArray}
        </div>
        <Button id="submit-button" className="submit-form" type="submit">
          Create New User
        </Button>
      </form>
    </div>
  );
}

export default CreateUserForm;

// {
//   country: "Mexico",
//     has_visited: false,
//       wants_to_visit: false
// }

// check - does the object with country name exist?
//         -if not, create this object
//       - did we click has_visited or wants_to_visit
//         -!value
