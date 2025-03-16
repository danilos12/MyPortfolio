import React from 'react'
import { Link } from 'react-router-dom';

const NavLink = ({openContact}) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <>

            <div  className=" w-full h-full space-x-16 md:space-y-12 md:space-x-0 justify-center items-center flex  md:flex-col md:items-center md:justify-center md:p-14">
                <div className="hover:border-b border-yellow-500">
              
                    <a className='md:w-full cursor-pointer' onClick={() => scrollToSection('home')}>
                      <h5>HOME</h5>
                  </a>
                </div>
                <div  className="hover:border-b border-yellow-500">
                  <a className='md:w-full cursor-pointer' onClick={() => scrollToSection('about')}>
                      <h5>ABOUT</h5>
                  </a>
                </div>
                <div  className="hover:border-b border-yellow-500">
                  <a className='md:w-full cursor-pointer' onClick={() => scrollToSection('projects')}>
                      <h5>PROJECTS</h5>
                  </a>
                </div>
                <div  className="hover:border-b border-yellow-500">
                  <a className='md:w-full cursor-pointer' onClick={() => scrollToSection('services')}>
                      <h5>SERVICES</h5>
                  </a>
                </div>
                {/* <div  className="hover:border-b border-yellow-500">
                  <a className='md:w-full cursor-pointer' onClick={() => scrollToSection('techstack')}>
                      <h5>TECH STACK</h5>
                  </a>
                </div> */}
                {/* <div className="hover:border-b border-yellow-500">
                    <Link className=' md:w-full' to="/about"><h5>PROJECTS</h5></Link>
                </div>
                <div className="hover:border-b border-yellow-500">
                     <Link className='md:w-full' to="/techstack"><h5>TECH STACK</h5></Link>
                </div>
                <div className="hover:border-b border-yellow-500">
                     <Link className='md:w-full' to="/services"><h5>SERVICES</h5></Link>
                </div> */}

            </div>




    </>
  )
}

export default NavLink
