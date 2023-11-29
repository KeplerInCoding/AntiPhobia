import React from 'react'
import './phobias.css';

const Phobias = () => {
  return (
    <div className="">
      <body>
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

        <div className='relative top-[-450px] left-[30%] text-4xl'>Fears related to animals</div>
        <div className='relative top-[-475px] left-[58%]'>Fears related to the natural environment</div>
        <div className='relative top-[-315px] left-[10%]'>Fears related to blood, injury, or medical issues</div>
        <div className='relative top-[-340px] left-[65%]'>Fears related to specific situations</div>
        <div className='relative top-[-200px] left-[33%]'>Other Phobias</div>
        <div className='relative top-[-220px] left-[60%]'>All Phobias</div>


</body>
      
    </div>
  )
}

export default Phobias