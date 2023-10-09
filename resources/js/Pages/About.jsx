import {React,useState,useEffect} from 'react'
import { Navbar,Info,Minis, Objectos } from '@/Components'

import { point } from '@/assets'

import { motion } from 'framer-motion'
const About = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='flex h-screen w-full  flex-col general-font   overflow-x-hidden'>
        <section className="h-[10vh]">
            <Navbar/>
        </section>
        <section className='w-full h-[90vh] flex flex-col  -z-[4]'>
          <div className=" overflow-hidden  relative">
            <div className="absolute flex justify-center w-full">

                  </div>
        <div className="w-full flex flex-col items-center justify-center  h-1/2 -">

                <motion.div
                initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:false}}
                transition={{
                  duration:1.5,
                  delay:1,
                  ease: [0, 0.71, 0.2, 1.01]

                }}
                className=" relative flex justify-center  mt-[25vh] ">
                <motion.div

                  whileInView={{y:scrollY > 300 ? 400 : 900, opacity: scrollY < 300 ? 0 : 1}}
                  viewport={{once:false,amount:0}}
                  transition={{
                    duration:1.5,
                    delay:1.3,
                    ease: [0, 0.71, 0.2, 1.01]

                  }}
                  className=" absolute  mix-blend-multiply circle2  "></motion.div>
                  <div className="">
                   <span className='tlsize font-bold'>WHO?</span>
                   </div>
                </motion.div>

        </div>
        <motion.div
             initial={{opacity:0,y:100}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:false}}
             transition={{
               duration:1.5,
               delay:1.5,
               ease: [0, 0.71, 0.2, 1.01]

             }}

        className=" w-full h-[50vh] md:h-[70vh]  flex justify-center   md:items-end ">

                    <img className='scale-[2.5] md:scale-[1] mb-[18vh] sepia z-20' src={point} alt="" />


                </motion.div>
          </div>
        </section>

        <section className='h-[100%] w-full  flex flex-col  border-t border-gray-200'>
          <div className="w-full flex justify-center items-center  h-[20vh]">
             <Minis/>

          </div>

        <div className="h-[80%]  flex flex-row md:flex-col  items-center justify-start md:space-y-0 z-10">
          <div className="w-1/2 md:w-full h-full flex flex-col items-center justify-center  space-y-8 border-r border-gray-200">
                <Info
                  titles={"WHOAMI?"}
                  infos={"I'm a web developer proficient in React & Laravel, specializing in crafting visually impressive and responsive websites. Together, we can breathe life into your online vision, offering an engaging and user-friendly experience that distinguishes you. Let's work together to make your website shine in the digital landscape."}
                  />
          </div>

          <div className=" w-1/2 md:w-full h-full  flex  items-center justify-center space-y-8 z-10 ">
                <Objectos/>

          </div>
        </div>



        </section>

    </div>
  )
}

export default About
