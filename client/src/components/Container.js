import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router';
import React, { useState, useEffect } from 'react';
import SelectUser from './SelectUser';
import CompareUsers from './CompareUsers';
import EditUser from './EditUser';

// import './Container.css';

function Container() {
  const [userArray, setUserArray] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [allCountryArray, setAllCountryArray] = useState([]);
  // const [allStateArray, setAllStateArray] = useState([]);

  let navigate = useNavigate();

  function handleNewUser(userObj) {
    console.log(userObj);
    fetch('http://localhost:9292/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setSelectedUser(json);
        setUserArray([...userArray, json]);
        navigate('../compare_users');
      });

    // setSelectedUser(userObj);
    // setUserArray([...userArray, userObj]);
    // // Add to backend
    // navigate('../compare_users');
  }

  function handleEditUser(userObj) {
    console.log(userObj);
    fetch(`http://localhost:9292/users/${userObj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
      .then((res) => res.json())
      .then((data) => {
        let newUserArray = userArray.filter(
          (userObj) => userObj.id !== data.id
        );
        newUserArray = [...newUserArray, data];
        setUserArray(newUserArray);
        setSelectedUser(data);

        navigate('../compare_users');
      });
  }

  //FETCH FOR USERS
  useEffect(() => {
    fetch('http://localhost:9292/users')
      .then((res) => res.json())
      .then((data) => setUserArray(data));
  }, []);

  // FETCH FOR ACCESS TOKEN
  // useEffect(() => {
  //   fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
  //     method: 'GET',
  //     headers: {
  //       "Accept": "application/json",
  //       "api-token": "NxEfO8PRtQaUxCygV4USuG_p9BbkHvGEgkLQv_rz68deg5a5V6WwY4qJke5_jplxPtA",
  //       "user-email": "b.losh34@yahoo.com"
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then(console.log)
  // }, [])

  // FETCH FOR COUNTRIES
  useEffect(() => {
    fetch('https://www.universal-tutorial.com/api/countries', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJiLmxvc2gzNEB5YWhvby5jb20iLCJhcGlfdG9rZW4iOiJOeEVmTzhQUnRRYVV4Q3lnVjRVU3VHX3A5QmJrSHZHRWdrTFF2X3J6NjhkZWc1YTVWNld3WTRxSmtlNV9qcGx4UHRBIn0sImV4cCI6MTY1NDI3NjU3NX0.WqbvxJr6Xas4OuFir9YDeLW7YzmrjWp6n5IAciZMhh0',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then(setAllCountryArray);
  }, []);

  // FETCH FOR STATES
  // useEffect(() => {
  //   fetch('https://www.universal-tutorial.com/api/states/United States', {
  //     method: 'GET',
  //     headers: {
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdXJwaHltYXgxQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IlpQZ19nTVFaNms0M3JSWldqMU9aQkdaUDBIU2I5cUJ3cUJJMC02WWFvcnVmWGZMY1JzdHNKNFZPM1R0VFk0TmZWTk0ifSwiZXhwIjoxNjU0MTg1NzgyfQ.eZfArIRKzhcVMwaIOVkItOFj59AnOH4P6GgwozEuroc',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then(setAllStateArray);
  // }, []);

  function handleSelectedUserChange(newSelectedUser) {
    setSelectedUser(newSelectedUser);
  }

  function handleDeleteClick(id) {
    fetch(`http://localhost:9292/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        let updatedArray = userArray.filter((user) => user.id !== id);
        setUserArray(updatedArray);
        setSelectedUser({});
        navigate('../');
      });
  }

  return (
    <div className="Container">
      <Routes>
        <Route
          path="/"
          element={
            <SelectUser
              userArray={userArray}
              allCountryArray={allCountryArray}
              // allStateArray={allStateArray}
              handleNewUser={handleNewUser}
              handleSelectedUserChange={handleSelectedUserChange}
            />
          }
        />
        <Route
          path="/compare_users"
          element={
            <CompareUsers
              userArray={userArray}
              selectedUser={selectedUser}
              handleDeleteClick={handleDeleteClick}
            />
          }
        />
        {/* Possible Dynamic Path Needed: */}
        <Route
          path="/edit_user"
          element={
            <EditUser
              selectedUser={selectedUser}
              allCountryArray={allCountryArray}
              handleEditUser={handleEditUser}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Container;
