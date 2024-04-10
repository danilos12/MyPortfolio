import {React,useState,useEffect} from 'react'
import { Navbar,Info,Minis, Objectos,ParticleContainer } from '@/Components'

import { point,QuestionMark } from '@/assets'

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
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <ParticleContainer count={100} />
        </div>
        <section className='w-full  relative flex flex-col'>


            <div className="h-[90vh] flex justify-center">
            <motion.div
            initial={{opacity:0,y:-30}}
            whileInView={{opacity:1,y:0}}
            transition={{
            duration:3,
            delay:0.3,
            ease: [0, 0.71, 0.2, 1.01]

            }}>
            <span className='font-bold text-left text-9xl textgradient3 mt-12'>WHOAMI?</span>
            </motion.div>
            <img src={QuestionMark} alt="point" className='w-[500px] h-auto absolute bottom-0'/>
            <img src={point} alt="point" className='w-[500px] h-auto mix-blend-multiply absolute bottom-10 border'/>
            <img src={point} alt="point" className='w-[500px] h-auto mix-blend-multiply absolute bottom-10 border'style={{ position: 'absolute', bottom: 0, width: '100%', height: '100px', background: 'linear-gradient(to bottom, transparent, white)' }} />




            </div>





                </section>
        <section className='h-[100vh] w-full  flex flex-col  '>

          <div className="w-full flex justify-center items-center  mb-8">
             <Minis/>

          </div>

        <div className="h-[80%]  flex flex-row md:flex-col  items-center justify-start md:space-y-0 z-10">
          <div className="w-1/2 md:w-full h-full flex flex-col items-center justify-center  space-y-8 border-r border-gray-200">
                <Info
                  titles={"WHOAMI?"}
                  infos={"I'm a passionate and creative individual with a love for technology and a knack for problem-solving. As a lifelong learner, I thrive on challenges that push the boundaries of my skills. My journey in the world of web development has been an exciting one, and I'm constantly inspired by the endless possibilities it offers."}
                  />
                  <div className="w-3/4 ">
                    <button  className='text-[0.8rem] p-1 bg-transparent h-[30px] w-[150px] border-gradient'>
                        Download MyResume
                    </button>
                </div>

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
