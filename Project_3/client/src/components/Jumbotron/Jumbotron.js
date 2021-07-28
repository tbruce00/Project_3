import React from "react";
import './Jumbotron.css';
import codeSnippet from './images/codesnippetscreenshot.png'
import SignUp from '../SignUp/signup';
const Jumbotron = () => {
  
  
  return (
    <div className="jumbotron">
    <div className="container">
      <h1>Sample Name </h1>
      <img src={codeSnippet} />
      <SignUp />
      <p className="jumbotronText">
      Browse Web Devs for your next job, or add your name to the list for future employers to see!
      </p>
    </div>
  </div>
   
  )
}

export default Jumbotron;
 
