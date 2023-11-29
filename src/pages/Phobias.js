import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Phobias = () => {
  return (
    <div className='w-screen h-fit'>

        <div className='w-[600px] flex flex-col p-10 pt-32 gap-12 text-2xl font-serif font-extrabold'>

                <NavLink to={`/phobias/phobias1`}>
                  <div className="flex border border-white text-white py-1 rounded-full place-content-between px-6 gap-2 text-xl font-bold bg-black/50 hover:bg-black/60">
                  <div>Fears related to animals</div>
                  <div>
                  <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  </div>
                </NavLink>

                <NavLink to={`/phobias/phobias2`}>
                  <div className="flex border border-white text-white py-1 rounded-full place-content-between px-6 gap-2 text-xl font-bold bg-black/50 hover:bg-black/60">
                  <div>Fears related to natural environment</div>
                  <div>
                  <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  </div>
                </NavLink>

                <NavLink to={`/phobias/phobias3`}>
                  <div className="flex border border-white text-white py-1 rounded-full place-content-between px-6 gap-2 text-xl font-bold bg-black/50 hover:bg-black/60">
                  <div>Fears rlated to blood, injury, or medical issues</div>
                  <div>
                  <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  </div>
                </NavLink>

                <NavLink to={`/phobias/phobias4`}>
                  <div className="flex border border-white text-white py-1 rounded-full place-content-between px-6 gap-2 text-xl font-bold bg-black/50 hover:bg-black/60">
                  <div>Fears related to specific situations</div>
                  <div>
                  <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  </div>
                </NavLink>

                <NavLink to={`/phobias/phobias5`}>
                  <div className="flex border border-white text-white py-1 rounded-full place-content-between px-6 gap-2 text-xl font-bold bg-black/50 hover:bg-black/60">
                  <div>Other Phobias</div>
                  <div>
                  <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  </div>
                </NavLink>

                <NavLink to={`/phobias/phobias6`}>
                  <div className="flex border border-white text-white py-1 rounded-full place-content-between px-6 gap-2 text-xl font-bold bg-black/50 hover:bg-black/60">
                  <div>All Phobias</div>
                  <div>
                  <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  </div>
                </NavLink>
        </div>
      
    </div>
  )
}

export default Phobias