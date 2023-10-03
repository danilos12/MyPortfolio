import React from 'react'
import { Link } from 'react-router-dom';
const NavLink = ({openContact}) => {
  return (
    <>
   <div className="w-full h-full space-x-16 md:space-y-12 md:space-x-0 justify-center items-center flex  md:flex-col md:items-center md:justify-center md:p-14">
                <div className="">
                <Link className='hover:border-b border-yellow-500 md:w-full' to="/"><h5>INTRO</h5></Link>
                </div>
                <div className="">
                <Link className='hover:border-b border-yellow-500 md:w-full' to="/about"><h5>WHO</h5></Link>
                </div>
                <div className="">
                <Link className='hover:border-b border-yellow-500 md:w-full' to="/tools"><h5>TOOLS</h5></Link>
                </div>
          <div className="">
            <button onClick={openContact} className='text-[0.8rem] p-2 rounded-lg bg-[#EEB722] text-black '>Contact Me</button>
          </div>
        </div>


    </>
  )
}

export default NavLink
