import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserCarousel({ userArray, updateComparedUser }) {
  function handleButtonClick(user) {
    let obj = {
      name: user.name,
      image_URL: user.image_URL,
      location: user.location,
      visits: user.visits,
    };
    updateComparedUser(obj);
  }

  let renderUsers = userArray.map((user) => {
    return (
      <Carousel.Item>
        <img className="d-block w-100 image" src={user.image_URL} alt={user.name} />
        <Carousel.Caption>
          <h3>{user.name}</h3>
          <p>{user.location}</p>
          <Button
            onClick={() => handleButtonClick(user)}
          >
            Select User
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12"></div>
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel interval={null}>{renderUsers}</Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCarousel;
