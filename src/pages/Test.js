import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const Test = () => {
  //For getting the Phobia
  const { category } = useParams();
//   const location = useLocation();
//   const category = location.pathname.split('/').at(-1);
  console.log(category);
  

  return (
    <>
        <Footer></Footer>
    </>
  );
};  

export default Test;
