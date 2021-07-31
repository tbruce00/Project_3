import React from 'react';
import Contact from '../Contact/contact';
import { MdPlace } from 'react-icons/md';
import '../MyProfile/myprofile.css';
import ProfPic from './images/profpic.JPG';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

function MyProfile() {

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
        Denver, CO
        </div>
      </div>
      <Contact />
      {/* <Comments /> */}
    </div>
  )
}

export default MyProfile;