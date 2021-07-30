import React from 'react';
import Contact from '../Contact/contact';
import Comments from '../Comments/Comments';
import { MdPlace } from "react-icons/md";
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE } from '../../utils/queries';
import '../MyProfile/myprofile.css';



function MyProfile() {
  const { data } = useQuery(QUERY_PROFILE);
  let profile;

  if (data) {
    profile = data.profile;
  }

  return (
    <div className="container">
      <div className="myProfile">
        <h1 className="profileHeader">Trevor Bruce</h1>
        <div>
          <p className="profileBio">Freelance Web Developer</p>
        </div>
        <div className="profileLocation">
        <span>{MdPlace}</span>
        Denver
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default MyProfile;