import React from "react";
import bvideo from "../assets/bVideo.mp4";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    
      <div className="main">
        <div className="overlay"></div>
        <video src={bvideo} autoPlay muted loop></video>
        <div className="content">
          <h1>Welcome to my AntiPhobia</h1>
          <Link to="/explore">Explore More</Link>
        </div>
      </div>
    
  );
};

export default Home;
