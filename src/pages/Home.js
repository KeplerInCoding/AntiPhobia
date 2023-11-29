import React from "react";
import bvideo from "../assets/background_video.mp4";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    
      <div className="main h-screen">
        <div className="overlay"></div>
        <video className="" src={bvideo} autoPlay muted loop></video>
        <div className="content ">
          <div className="mt-20 backdrop-blur-sm bg-white/40 border-2 border-white h-[450px] w-[930px] rounded-lg flex flex-col items-center justify-center gap-16 shadow-2xl shadow-black">
          <h1 className=" font-sans font-extrabold text-5xl text-black/80">Embark on a Journey Beyond Phobias</h1>
          <div className=" flex flex-col gap-4 text-slate-800 text-center font-serif font-extrabold text-3xl">
            <h2>
              Dive into the Abyss of Your Fears with Us:
            </h2>
            <h2>
              Discover, Conquer, and Transform
            </h2>
            <h2>
              – We're Your Fearless Companions on the Journey to Empowerment!
            </h2>
          </div>
          <NavLink to="/phobias">
            <div className="flex border border-white px-3 py-1 rounded-full justify-center items-center gap-2 text-xl font-bold bg-black/20">
            <div>Explore more</div>
            <div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
