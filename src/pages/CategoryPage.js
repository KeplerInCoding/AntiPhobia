import React from 'react';
import data from '../Data';
import { useParams } from 'react-router-dom';


const CategoryPage = () => {
  //For getting the Phobia
  const { category } = useParams();
  console.log(category);
  

  return (
    <div className='w-screen flex flex-col items-center bg-black'>
        {data.map((phobias, index) =>
        phobias && phobias.hasOwnProperty(`${category}`)
          ? phobias[`${category}`].map((phobia) => 
        <div class="m-4 flex items-center border-2 border-white rounded-md w-[800px] p-10 bg-gradient-to-br from-slate-900 to-red-900 shadow-lg shadow-red-900">
          <div>
          <h1 className=' text-3xl font-extrabold text-red-200 mb-5'>{phobia.name}</h1>
          <h2 className='text-red-500 font-mono mb-2'>"{phobia.meaning}"</h2>
          <h3 className=' text-red-300 text-lg'>{phobia.description}</h3>
          </div>
          <img className='m-4 border-white h-56 rounded-sm border-2' src={phobia.image} alt={phobia.name}></img>
        </div>)
          : null
      )}
     
    </div>
  );
};  

export default CategoryPage;
