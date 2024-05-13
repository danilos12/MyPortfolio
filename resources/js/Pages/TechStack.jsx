import React from 'react'
import { Navbar, ParticleContainer } from '@/Components'
import {  reacts,HTML,CSS,JS,NODE,Tailwind,Figma,Mysql, laravel,php,postman,wordpress, Philip, Astronaut2, Comma} from '@/assets'
import { motion,useMotionValue,useTransform  } from "framer-motion"


const TechStack = () => {
  return (
    <div>
        <section className='h-[10vh]'>
            <Navbar/>
        </section>

        <section className='w-full '>
        <div style={{ position: 'fixed', width: '100vw', height: '100vh' }}>
            <ParticleContainer count={100} />
        </div>
            <div className="w-full flex h-[90vh]">
                <div className=" flex flex-col justify-center items-center  w-1/2 space-y-6 z-10">
                <motion.div
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                      duration:2,
                      delay:0.3,
                      ease: [0, 0.71, 0.2, 1.01]

                    }}>

                    <div className="">
                    <h1 className='font-bold textgradient3'>TECH STACK</h1>
                    <h1 className='font-bold text-center textgradient3'>{`</>`}</h1>
                    </div>
                    <div className="grid grid-cols-4 gap-4 gap-x-12 " loading="lazy">
                        <img className='w-[49px] h-[44px]  object-contain transform transition-transform hover:scale-110' src={HTML} alt="" />
                        <img className='w-[70px] h-[57px] object-cover pb-4 object-center transform transition-transform hover:scale-110' src={CSS} alt="" />
                        <img className='w-[48px] h-[44px] object-contain object-center transform transition-transform hover:scale-110' src={JS} alt="" />
                        <img className='w-[48px] h-[44px] object-contain object-center transform transition-transform hover:scale-110' src={reacts} alt="" />
                        <img className='w-[49px] h-[30px] object-contain object-center transform transition-transform hover:scale-110' src={NODE} alt="" />
                        <img className='w-[48px] h-[44px] object-contain object-center transform transition-transform hover:scale-110' src={Tailwind} alt="" />
                        <img className='w-[48px] h-[44px] object-contain object-center transform transition-transform hover:scale-110' src={Figma} alt="" />
                        <img className='w-[48px] h-[44px] object-contain object-center transform transition-transform hover:scale-110' src={Mysql} alt="" />
                        <img className='w-[48px] h-[44px] object-contain object-center transform transition-transform hover:scale-110' src={laravel} alt="" />
                        <img className='w-[48px] h-[44px] object-contain object-center transform transition-transform hover:scale-110' src={php} alt="" />
                        <img className='w-[48px] h-[44px] object-contain object-center transform transition-transform hover:scale-110' src={postman} alt="" />
                        <img className='w-[48px] h-[44px] object-contain object-center transform transition-transform hover:scale-110' src={wordpress} alt="" />

                    </div>
                    </motion.div>
                </div>


                <div className=" flex items-center w-1/2">
                <motion.div
                    animate={{ y: [-40, 40, -40, 40, -40], transition: { duration: 20, repeat: Infinity } }}
                    className='fixed  right-[100px] '
                >
                    <img className="w-3/4 h-3/4 object-contain object-center" src={Astronaut2} alt="Astronaut" loading='lazy'/>
                </motion.div>


                <motion.div
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                      duration:2,
                      delay:0.3,
                      ease: [0, 0.71, 0.2, 1.01]

                    }}>
                            <div className=" w-full h-[70%] grid border-l-2 border-gradient2 font-light z-10">
                                    <div className="flex flex-col w-full items-center">
                                        <img className='w-[132px] h-[123px] rounded' src={Philip} alt="" loading='lazy'/>
                                        <span>Philip Roth</span>
                                    </div>
                                    <div className="flex flex-col items-center space-y-12">
                                        <p className='text-center w-[60%]'>These are the tools that I use for building business websites.  I've personally curated my portfolio with the latest technology and ensure that your business stands out among others with seamless design and functionality </p>
                                        <div className="flex flex-col items-center">
                                        <img src={Comma} alt="" loading='lazy'/>
                                        <p>“Business has only two functions - marketing and innovation”</p>
                                        </div>
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
