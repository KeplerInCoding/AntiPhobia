import React from 'react'
import './phobias.css';
import data from '../Data'

console.log(data);

const Phobias = () => {
  return (
    <div className="">
      <div>
        <div classNamee="box-canvas">
          <div className="inner">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="spider">
            <div className="body">
              <div className="leg left"></div>
              <div className="leg right"></div>
            </div>
          </div>
        </div>

      </div>

        <div className='w-screen h-screen absolute flex place-content-between top-32 '>
          <div className='flex gap-28 flex-col ml-10'>
            <div className=' bg-gradient-to-tr from-slate-800 text-center font-mono text-xl rounded-full shadow-lg shadow-orange-900 hover:scale-125 hover:shadow-xl hover:shadow-orange-800 font-extrabold to-red-900 p-3 w-96 duration-200'>Fears related to animals</div>
            <div className=' bg-gradient-to-tr from-slate-800 text-center font-mono text-xl rounded-full shadow-lg shadow-orange-900 hover:scale-125 hover:shadow-xl hover:shadow-orange-800 font-extrabold to-red-900 p-3 w-96 duration-200'>Fears related to blood, injury, or medical issues</div>
            <div className=' bg-gradient-to-tr from-slate-800 text-center font-mono text-xl rounded-full shadow-lg shadow-orange-900 hover:scale-125 hover:shadow-xl hover:shadow-orange-800 font-extrabold to-red-900 p-3 w-96 duration-200'>Other Phobias</div>
          </div>

          <div className='flex gap-28 flex-col mr-10'>
            <div className=' bg-gradient-to-tr from-slate-800 text-center font-mono text-xl rounded-full shadow-lg shadow-orange-900 hover:scale-125 hover:shadow-xl hover:shadow-orange-800 font-extrabold to-red-900 p-3 w-96 duration-200'>Fears related to the natural environment</div>
            <div className=' bg-gradient-to-tr from-slate-800 text-center font-mono text-xl rounded-full shadow-lg shadow-orange-900 hover:scale-125 hover:shadow-xl hover:shadow-orange-800 font-extrabold to-red-900 p-3 w-96 duration-200'>Fears related to specific situations</div>
            <div className=' bg-gradient-to-tr from-slate-800 text-center font-mono text-xl rounded-full shadow-lg shadow-orange-900 hover:scale-125 hover:shadow-xl hover:shadow-orange-800 font-extrabold to-red-900 p-3 w-96 duration-200'>All Phobias</div>
          </div>
        </div>
      
    </div>
  )
}

export default Phobias