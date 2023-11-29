import React from 'react';
import data from '../Data';
import { useParams } from 'react-router-dom';


const CategoryPage = () => {
  //For getting the Phobia
  const { category } = useParams();
  console.log(category);
  

  return (
    <div className='w-screen h-fit flex flex-col items-center mt-24'>
        {data.map((phobias, index) =>
        phobias && phobias.hasOwnProperty(`${category}`)
          ? phobias[`${category}`].map((phobia) => 
        <div class="m-4 flex items-center border-2 border-white rounded-md w-[800px] p-5 py-3 bg-gradient-to-br from-slate-100 to-gray-300 shadow-lg shadow-blue-900">
          <div>
          <h1 className=' text-3xl font-extrabold text-black mb-5'>{phobia.name}</h1>
          <h2 className='text-black/70 font-mono mb-2'>"{phobia.meaning}"</h2>
          <h3 className=' text-black text-lg'>{phobia.description}</h3>
          </div>
          <img className='m-4 border-white h-48 rounded-sm border' src={phobia.image} alt={phobia.name}></img>
        </div>)
          : null
      )}
     
    </div>
  );
};  

export default CategoryPage;
