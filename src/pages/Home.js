import React from "react";
import bvideo from "../assets/background_video.mp4";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    
      <div className="main h-screen">
        <div className="overlay"></div>
        <video src={bvideo} autoPlay muted loop></video>
        <div className="content ">
          <div className=" backdrop-blur-sm bg-black/10 border-2 border-white h-[450px] w-[930px] rounded-sm flex flex-col items-center justify-center gap-20 shadow-2xl shadow-red-900">
          <h1 className=" font-sans font-extrabold text-5xl text-red-100">Embark on a Journey Beyond Phobias</h1>
          <div className=" flex flex-col gap-4">
            <h2 className="text-center font-serif font-extrabold text-2xl text-zinc-400">
              Dive into the Abyss of Your Fears with Us:
            </h2>
            <h2 className="text-center font-serif font-extrabold text-2xl text-zinc-400">
              Discover, Conquer, and Transform
            </h2>
            <h2 className="text-center font-serif font-extrabold text-2xl text-zinc-400">
              – We're Your Fearless Companions on the Journey to Empowerment!
            </h2>
          </div>
          <NavLink to="/phobias">
            <div className="flex border border-white px-3 py-1 rounded-full justify-center items-center gap-2 text-lg font-bold bg-white/10">
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
