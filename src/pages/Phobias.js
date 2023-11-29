import React from 'react'
import './phobias.css';
import data from '../Data'
import { NavLink } from 'react-router-dom';

console.log(data);

const Phobias = () => {
  return (
    <div>
      <div>
        <div class="box-canvas">
          <div class="inner">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="spider">
            <div class="body">
              <div class="leg left"></div>
              <div class="leg right"></div>
            </div>
          </div>
        </div>

    </div>

        <div className='w-screen h-screen absolute flex place-content-between top-32 '>
          
          <div className='flex gap-28 flex-col ml-10'>

                  <NavLink to={`/phobias/phobias1`}>
                  <div className=' 
                  bg-gradient-to-tr from-slate-800 text-center font-mono text-xl rounded-full shadow-lg shadow-orange-900 hover:scale-125 hover:shadow-xl hover:shadow-orange-800 font-extrabold to-red-900 p-3 w-96 duration-200'>Fears related to animals</div>
                  </NavLink>

                  <NavLink to={`/phobias/phobias2`}>
                  <div className=' 
                  bg-gradient-to-tr from-slate-800 text-center font-mono text-xl rounded-full shadow-lg shadow-orange-900 hover:scale-125 hover:shadow-xl hover:shadow-orange-800 font-extrabold to-red-900 p-3 w-96 duration-200'>Fears related to blood, injury, or medical issues</div>
                  </NavLink>

                  <NavLink to={`/phobias/phobias3`}>
                  <div className=' 
                  bg-gradient-to-tr from-slate-800 text-center font-mono text-xl rounded-full shadow-lg shadow-orange-900 hover:scale-125 hover:shadow-xl hover:shadow-orange-800 font-extrabold to-red-900 p-3 w-96 duration-200'>Other Phobias</div>
                  </NavLink>

          
          </div>

          <div className='flex gap-28 flex-col mr-10'>

                <NavLink  to={`/phobias/phobias4`}>
                <div className=' 
                bg-gradient-to-tr from-slate-800 text-center font-mono text-xl rounded-full shadow-lg shadow-orange-900 hover:scale-125 hover:shadow-xl hover:shadow-orange-800 font-extrabold to-red-900 p-3 w-96 duration-200'>Fears related to the natural environment</div>
                </NavLink>

                <NavLink to={`/phobias/phobias5`}>
                <div className=' 
                bg-gradient-to-tr from-slate-800 text-center font-mono text-xl rounded-full shadow-lg shadow-orange-900 hover:scale-125 hover:shadow-xl hover:shadow-orange-800 font-extrabold to-red-900 p-3 w-96 duration-200'>Fears related to specific situations</div>
                </NavLink>

                <NavLink to={`/phobias/phobias6`}>
                <div className=' 
                bg-gradient-to-tr from-slate-800 text-center font-mono text-xl rounded-full shadow-lg shadow-orange-900 hover:scale-125 hover:shadow-xl hover:shadow-orange-800 font-extrabold to-red-900 p-3 w-96 duration-200'>All Phobias</div>
                </NavLink>
          </div>
        </div>
      
    </div>
  )
}

export default Phobias