import React from "react";
import './Jumbotron.css';

import SignUp from '../SignUp/signup';
import Loop from '../Jumbotron/video/backgroundvideo.mp4';


const Jumbotron = () => {  
  return (
    <div className="jumbotron">
      <video autoPlay loop muted
      style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "fill",
        transform: "translate(-50%, -113%)",
        zIndex: "-1",
      }}
      >
        <source src={Loop} type="video/mp4" />
      </video>
    <div className="container">
      <h2>A Place For Freelance Web Developers.</h2>
      {/* <img src={codeSnippet} /> */}
      <p className="jumbotronText">
      Browse Web Dev Portfolios Below or Create Your Own.
      </p>
      <SignUp />
    </div>
    </div>
  )
}

export default Jumbotron;
 
