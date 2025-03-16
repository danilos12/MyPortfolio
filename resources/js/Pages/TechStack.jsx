import React from 'react'
import { Navbar, ParticleContainer } from '@/Components'
import {  reacts,HTML,CSS,JS,NODE,Tailwind,Figma,Mysql, laravel,php,postman,wordpress, Philip, Astronaut2, Comma} from '@/assets'
import { motion,useMotionValue,useTransform  } from "framer-motion"


const TechStack = () => {
  return (
    <div className='md:flex md:flex-col  w-full md:relative  md:h-screen overflow-y-scroll overflow-x-hidden  '>
   


        <section className='w-full relative '>
        <div className="font-bold text-center md:text-4xl text-6xl flex flex-col">
                    <span >TECH STACK</span>
            
                    </div>
            <div className="w-full md:justify-center items-center md:flex-col flex h-[55vh] ">
         
                <div className=" flex flex-col justify-center items-center w-1/2 space-y-6 ">
                <motion.div
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                      duration:2,
                      delay:0.3,
                      ease: [0, 0.71, 0.2, 1.01]

                    }}>

                 
                    <div className="grid grid-cols-4 gap-7 gap-x-16 mb-12" loading="lazy">
                    <img className='image-item' src={HTML} alt="" />
                    <img className='image-item' src={CSS} alt="" />
                    <img className='image-item' src={JS} alt="" />
                    <img className='image-item' src={reacts} alt="" />
                    <img className='image-item' src={NODE} alt="" />
                    <img className='image-item' src={Tailwind} alt="" />
                    <img className='image-item' src={Figma} alt="" />
                    <img className='image-item' src={Mysql} alt="" />
                    <img className='image-item' src={laravel} alt="" />
                    <img className='image-item' src={php} alt="" />
                    <img className='image-item' src={postman} alt="" />
                    <img className='image-item' src={wordpress} alt="" />
                </div>
                    </motion.div>
                </div>

                <div    className='fixed md:left-[30%] md:top-[30%] right-[100px] '>
                <motion.div
                    animate={{ y: [-40, 40, -40, 40, -40], transition: { duration: 20, repeat: Infinity } }}

                >

                    <img className="w-3/4 h-3/4 object-contain object-center" src={Astronaut2} alt="Astronaut" loading='lazy'/>

                </motion.div>
                </div>
                <div className="flex items-center w-1/2">


                <motion.div
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                      duration:2,
                      delay:0.3,
                      ease: [0, 0.71, 0.2, 1.01]

                    }}>
                            <div className=" w-full h-[70%] p-6 grid space-y-6  border-gradient2 font-light ">
                                    <div className="flex flex-col w-full items-center space-y-6">
                                        <img className='w-[132px] md:w-[110px] md:h-[90px] h-[123px] rounded' src={Philip} alt="" loading='lazy'/>
                                        <span>Philip Roth</span>
                                    </div>
                                    <div className="flex flex-col items-center space-y-6">
                                        <div className="flex flex-col items-center md:hidden">
                                
                                        <p>“Business has only two functions - marketing and innovation”</p>
                                        </div>
                                        <p className='text-[#8E8E8E] text-sm text-center w-[60%] md:w-full'>These are the tools that I use for building business websites.  I've personally curated my portfolio with the latest technology and ensure that your business stands out among others with seamless design and functionality </p>
                                    </div>
                            </div>


                    </motion.div>

                </div>

            </div>
        </section>
    </div>
  )
}

export default TechStack
