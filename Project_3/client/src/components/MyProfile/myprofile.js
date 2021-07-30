import React from 'react';
import Contact from '../Contact/contact';
import { MdPlace } from "react-icons/md";
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE } from '../../utils/queries';



function MyProfile() {
  const { data } = useQuery(QUERY_PROFILE);
  let profile;

  if (data) {
    profile = data.profile;
  }

  return (
    <div className="container">
      <div className="myProfile">
        <h1 className="profileHeader">{profile.name}</h1>
        <div>
          <p className="profileBio">{profile.bio}</p>
        </div>
        <span>{MdPlace}</span>
        {profile.location}
      </div>
      <Contact />
    </div>
  )
}

export default MyProfile;