import React from 'react';
import data from '../Data';
import { useParams } from 'react-router-dom';


const CategoryPage = () => {
  //For getting the Phobia
  const { category } = useParams();
  console.log(category);
  

  return (
    <div>
        <div>
            
        </div>
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

export default CategoryPage;
