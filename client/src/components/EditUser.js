import React, { useState, useEffect } from 'react';
import EditUserForm from './EditUserForm';

// import './EditUser.css';

function EditUser({ selectedUser, allCountryArray, handleEditUser }) {
  return (
    <div className="EditUser">
      <h2>Edit User:</h2>
      <EditUserForm selectedUser={selectedUser} allCountryArray={allCountryArray} handleEditUser={handleEditUser}/>
      
    </div>
  );
}

export default EditUser;
