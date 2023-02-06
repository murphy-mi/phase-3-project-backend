import React, { useState, useEffect } from 'react';

// import './Commonalities.css';



function Commonalities({selectedUser, comparedUser}) {
  console.log(selectedUser);
  console.log(comparedUser);

  const selectedUserVisited = selectedUser.visits.filter((visit) => visit.visited)
  const comparedUserVisited = comparedUser.visits.filter((visit) => visit.visited)

  const selectedUserWantsToVisit = selectedUser.visits.filter((visit) => visit.want_to_visit)
  const comparedUserWantsToVisit = comparedUser.visits.filter((visit) => visit.want_to_visit)

  //const commonVisited = selectedUserVisited.filter((visit) => visit.location)

  function compareArrays(array1, array2) {

  }

  let returnString = [];
  let matchedVisits = [];
  let matchedWants = [];
  let matchedAsks = [];

  selectedUser.visits.forEach((selectedUserVisit) => {
    const matchedVisit = comparedUser.visits.find((comparedUserVisit) => comparedUserVisit.location.country === selectedUserVisit.location.country);
    console.log(matchedVisit);

    //return (<p>{matchedVisit ? `${selectedUserVisit.location.country} Has visited: ${selectedUserVisit.visited} - ${matchedVisit.visited} Wants to visit: ${selectedUserVisit.want_to_visit} - ${matchedVisit.want_to_visit}` : "nothing"}</p>);

    if (matchedVisit) {
      if (selectedUserVisit.visited && matchedVisit.visited) {
        returnString.push(<p>You both have visited {selectedUserVisit.location.country}.</p>);
        matchedVisits.push(selectedUserVisit.location.country);
      }
      if (selectedUserVisit.want_to_visit && matchedVisit.want_to_visit) {
        returnString.push(<p>You both want to visit {selectedUserVisit.location.country}.</p>);
        matchedWants.push(selectedUserVisit.location.country);
      }
      if (selectedUserVisit.want_to_visit && matchedVisit.visited) {
        returnString.push(<p>You want to go to {selectedUserVisit.location.country}; Why not ask {comparedUser.name} what {selectedUserVisit.location.country} is like?</p>);
        matchedAsks.push(selectedUserVisit.location.country);
      }

    }
  })



  return <div className="Commonalities">
    {returnString}
    {matchedVisits[0] &&
      <p>
        You have both been to {matchedVisits.join(", ")}.
      </p>    
    }
    {matchedWants[0] &&
      <p>
        You both want to visit {matchedWants.join(", ")}.
      </p>    
    }
    {matchedAsks[0] &&
      <p>
        {comparedUser.name} has been to {matchedAsks.join(", ")}, all places you want to go.
      </p>    
    }

  </div>;
}

export default Commonalities;
