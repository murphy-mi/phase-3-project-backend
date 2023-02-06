import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import UserCard from './UserCard';
import Commonalities from './Commonalities';
import UserCarousel from './UserCarousel';

// import './CompareUsers.css';

function CompareUsers({ userArray, selectedUser, handleDeleteClick }) {
  const [comparedUser, setComparedUser] = useState({});

  function updateComparedUser(obj) {
    setComparedUser(obj);
  }

  let navigate = useNavigate();

  function handleEditClick() {
    navigate('../edit_user');
  }

  return (
    <div className="CompareUsers">
      {/* <button onClick={handleButtonClick}>Edit</button> */}
      <UserCard
        className="LeftCard"
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        isSelectedUser={true}
        user={selectedUser}
      />
      ---
      {Object.keys(comparedUser).length > 0 ? (
        <>
          <UserCard className="RightCard" user={comparedUser} />
          <Commonalities
            selectedUser={selectedUser}
            comparedUser={comparedUser}
          />
        </>
      ) : (
        <></>
      )}
      <UserCarousel
        style={{ width: '50%' }}
        userArray={userArray}
        updateComparedUser={updateComparedUser}
      />
    </div>
  );
}

export default CompareUsers;
