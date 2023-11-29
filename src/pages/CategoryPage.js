import React from 'react';
import data from '../Data';
import Cards from '../components/Cards';

const CategoryPage = () => {
  return (
    <div>
      {data.map((phobia, index) => (
        <Cards key={index} phobia={phobia} />
      ))}
    </div>
  );
};

export default CategoryPage;
