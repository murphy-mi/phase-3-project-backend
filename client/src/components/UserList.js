import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

// import './UserList.css';

function UserList({ userArray, handleSelectedUserChange }) {
  let navigate = useNavigate();

  function onClickUser(event, user) {
    event.preventDefault();
    handleSelectedUserChange(user);
    navigate("../compare_users");
  }


  return <div className="UserList">
    <ul>
      {userArray.map((user) => {
        return <li>
          <span>
            <h3>{user.name}</h3>
            <Button key={user.id} onClick={(e) => onClickUser(e, user)}>Select User</Button>
          </span>
        </li>;
      })}
    </ul>
  </div>;
}

export default UserList;
