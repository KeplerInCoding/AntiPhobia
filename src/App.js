import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import ChatBot from "./pages/ChatBot.js";
import Phobias from "./pages/Phobias.js"
import ExploreVR from "./pages/Explore_VR.js";
import CategoryPage from "./pages/CategoryPage.js";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (

    <div className="h-screen w-screen bg-gradient-to-r from-slate-100 to-blue-200">

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/phobias" element={<Phobias/>}></Route>
        <Route path="/chatbot" element={<ChatBot/>}></Route>
        <Route path="/explore" element={<ExploreVR/>}></Route>
        <Route path="/phobias/:category" element={<CategoryPage />} />
      </Routes>
    </div>

   
  );
}

export default App;
