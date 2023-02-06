import React from 'react';
import { Card, Button } from 'react-bootstrap';

// import './UserCard.css';

function UserCard({
  user,
  isSelectedUser,
  handleEditClick,
  handleDeleteClick,
}) {
  const wantsArray = user?.visits.filter((visit) => visit.want_to_visit);
  const visitedArray = user?.visits.filter((visit) => visit.visited);

  function passID() {
    handleDeleteClick(user.id);
  }

  return (
    <Card className="UserCard" style={{ width: '25rem' }}>
      <Card.Img src={user?.image_URL}></Card.Img>
      <Card.Title>{user?.name}</Card.Title>
      <Card.Subtitle>{user?.location}</Card.Subtitle>
      <Card.Text>
        Has visited: <br />
        {visitedArray?.map((visit) => {
          return <span key={visit.id}>•{visit.location.country} </span>;
        })}{' '}
        <br />
        Wants to visit: <br />
        {wantsArray?.map((visit) => {
          return <span key={visit.id}>•{visit.location.country} </span>;
        })}
        {isSelectedUser && <Button onClick={handleEditClick}>Edit User</Button>}
        {isSelectedUser && <Button onClick={passID}>Delete User</Button>}
      </Card.Text>
    </Card>
  );
}

export default UserCard;
