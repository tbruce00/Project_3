import React from "react";
import './Jumbotron.css';

const Jumbotron = () => {
  return (
    <div className="jumbotron">
    <div className="container">
      <h1>Sample Name </h1>
      <p className="jumbotronText" >
      This is a platform for viewing or creating WebDev profiles. 
       
      <button class="button"><span>Create Profile </span></button>
      </p>
      <p className="jumbotronText">
      Browse Web Devs for your next job, or add your name to the list for future employers to see!
      </p>
      
    </div>
  </div>
   
  )
}

export default Jumbotron;