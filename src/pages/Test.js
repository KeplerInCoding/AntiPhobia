import React from 'react';
import data from '../Data';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Test = () => {
  //For getting the Phobia
  const { category } = useParams();
//   const location = useLocation();
//   const category = location.pathname.split('/').at(-1);
  console.log(category);
  

  return (
    <div>
      <Navbar></Navbar>
        <div>hello</div>
        {data.map((phobias, index) =>
        phobias && phobias.hasOwnProperty(`${category}`)
          ? phobias[`${category}`].map((phobia) => 
        <div>
          <h1>{phobia.name}</h1>
          <h2>{phobia.meaning}</h2>
          <h3>{phobia.description}</h3>
          <img src={phobia.image} alt={phobia.name}></img>
        </div>)
          : null
      )}
     
    </div>
  );
};  

export default Test;
