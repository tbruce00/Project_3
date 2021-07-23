import React from 'react';
import './Profile.css';
// Our Alert function accepts on argument of `props`.
// This will be an object containing all of the props or properties that were passed to this component from the parent.
// We can expect to see "message" and "type" properties inside our "props" object.
function Profile(props) {
  console.log(props);

  return (
    <div className="profile-container">
        <div className="profileName">

        </div>
        <div className="profileCity">

        </div>
        <div className="profileGitHub">

        </div>
    </div>
  );
}

export default Profile;