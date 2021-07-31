import React from 'react';
import Contact from '../Contact/contact';
import { MdPlace } from 'react-icons/md';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE } from '../../utils/queries';
import '../MyProfile/myprofile.css';
import ProfPic from './images/profpic.JPG';

function MyProfile() {
  const { data } = useQuery(QUERY_PROFILE);
  let profile;
  if (data) {
    profile = data.profile;
  }
  return (
    <div className='container'>
      <div className='myProfile'>
      <img className="profilePic" src={ProfPic} alt="Profile Picture" />
        <h1 className='profileHeader'>Trevor Bruce</h1>
        <div>
          <p className='profileBio'>Freelance Web Developer</p>
        </div>
        <div className='profileLocation'>
        <MdPlace className="icon"/>
        Denver
        </div>
      </div>
      <Contact />
      {/* <Comments /> */}
    </div>
  )
}
export default MyProfile;