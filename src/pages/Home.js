import React from "react";
import v from "../assets/background_video.mp4";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    
      <div className="main h-screen">
        <video src={v} autoPlay muted loop></video>
        <div className="content ">
          <div className=" backdrop-blur-sm bg-black/10 border-2 border-white h-[450px] w-[930px] rounded-sm flex flex-col items-center justify-center gap-20 shadow-2xl shadow-red-900">
          <h1 className=" font-sans font-extrabold text-5xl text-red-100">Embark on a Journey Beyond Phobias</h1>
          <div className=" flex flex-col gap-4">
          <h2 className="text-center font-serif font-extrabold text-2xl text-zinc-400">Dive into the Abyss of Your Fears with Us:</h2>
          <h2 className="text-center font-serif font-extrabold text-2xl text-zinc-400">Discover, Conquer, and Transform</h2>
          <h2 className="text-center font-serif font-extrabold text-2xl text-zinc-400">– We're Your Fearless Companions on the Journey to Empowerment!</h2>
          </div>
          <NavLink to="/phobias">Explore More</NavLink>
          </div>
        </div>
      </div>
    
  );
};

export default Home;
