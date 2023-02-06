import React, { useState, useEffect } from 'react';
import CreateUserForm from './CreateUserForm';
import UserList from './UserList';
import '../App.css';

// import './SelectUser.css';


function SelectUser({ userArray, allStateArray, allCountryArray, handleNewUser, handleSelectedUserChange }) {
  return (
    <div className="select-user-page">
      <div className="create-user">
        <h3>Create a User:</h3>
        <CreateUserForm
          allStateArray={allStateArray}
          allCountryArray={allCountryArray}
          handleNewUser={handleNewUser}
        />
      </div>
      <div className="choose-user">
        <h3>Choose existing User:</h3>
        <UserList userArray={userArray} handleSelectedUserChange={handleSelectedUserChange} />
      </div>
    </div>
  );
}

export default SelectUser;
