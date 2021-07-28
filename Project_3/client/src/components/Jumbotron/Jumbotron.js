import React from "react";
import './Jumbotron.css';
import codeSnippet from './images/codesnippetscreenshot.png'
const Jumbotron = () => {
  
  
  return (
    <div className="jumbotron">
    <div className="container">
      <h1>Sample Name </h1>
<<<<<<< HEAD
      <p className="jumbotronText" >
      This is a platform for viewing or creating WebDev profiles. 
       
      <button type='submit' class="button"><span>Create Profile </span></button>
      </p>
=======
      <img src={codeSnippet} />
      <button class="button"> makeProfile<span className="parenthesisColor" >()</span> </button>
>>>>>>> 0580eb1725870e373882081a85e511395c4a0a98
      <p className="jumbotronText">
      Browse Web Devs for your next job, or add your name to the list for future employers to see!
      </p>
    </div>
  </div>
   
  )
}

export default Jumbotron;
 
