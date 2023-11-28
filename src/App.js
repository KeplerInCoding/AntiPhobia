import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import ChatBot from "./pages/ChatBot.js";
import Phobias from "./pages/Phobias.js"
import ExploreVR from "./pages/Explore_VR.js";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (

    <div className="h-screen w-screen bg-gradient-to-t from-slate-700 to-black text-white">

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/phobias" element={<Phobias/>}></Route>
        <Route path="/chatbot" element={<ChatBot/>}></Route>
        <Route path="/explore" element={<ExploreVR/>}></Route>
      </Routes>
    </div>

   
  );
}

export default App;
