import React from 'react';
import Cards from '../components/Cards';
import { useLocation } from 'react-router-dom';
import data from '../Data';

const CategoryPage = () => {
  const location = useLocation();
  const category = location.pathname.split('/').at(-1);

  return (
    <div>
        <div>hello</div>
      {data.map((phobias, index) => (
        phobias && phobias.hasOwnProperty(`phobias${category}`) ? (
          phobias[`phobias${category}`].map((phobia) => (
            <Cards key={phobia.id} phobia={phobia} />
          ))
        ) : null
      ))}
    </div>
  );
};

export default CategoryPage;
