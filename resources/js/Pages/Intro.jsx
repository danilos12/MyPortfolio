import {React,useEffect,useState} from 'react'
import { Navbar,Info } from '@/Components'
import { hand,down } from '@/assets'
import { motion,useMotionValue,useTransform  } from "framer-motion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Intro = () => {
  const [scrollPosition,setScrollPosition] = useState(0);
  const [isHovered, setHovered] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const rotateX = useTransform(cursorY, [0, window.innerHeight], [-30, 30]);
  const rotateY = useTransform(cursorX, [0, window.innerWidth], [-80, 80]);

  const handleMouseMove = (e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  }

  const HoverStart = () =>{
    setHovered(true);
  }

  const HoverEnd = () => {
    setHovered(false);
  }
  const handleScroll = () =>{
    setScrollPosition(window.scrollY);
  }

  useEffect(()=>{
      window.addEventListener('scroll',handleScroll);
      return () => window.removeEventListener('scroll',handleScroll);
  },[])


  return (
    <div className='flex flex-col  w-full relative  h-screen overflow-y-scroll m-0 p-0'>

<section className='w-full h-[10vh] z-30'>
            <Navbar/>
      </section>
        <section  className="h-[100vh]   w-full flex-col flex   ">
          <motion.div
             initial={{opacity:0,x:-30}}
             whileInView={{opacity:1,x:0}}
             transition={{
               duration:2,
               delay:0.3,
               ease: [0, 0.71, 0.2, 1.01]

             }}
          className='absolute flex flex-col items-center space-y-6 top-[50%] left-14 z-30'>

            <a href="https://www.facebook.com/profile.php?id=100063950439131">
              <FontAwesomeIcon className='w-6 h-6' icon={faFacebook} />
            </a>
            <a href="https://github.com/danilos12?tab=projects">
            <FontAwesomeIcon className='w-6 h-6' icon={faGithub} />
              </a>
              <a href="https://www.instagram.com/daniloskxzs/">
              <FontAwesomeIcon className='w-6 h-6' icon={faInstagram} />
              </a>
          </motion.div>

          <div className="relative h-full  flex">

              <div  className=" top-[5%] md:top-[20%]  flex   absolute w-full items-start justify-center  md:justify-center ">
                    <motion.div
                    initial={{opacity:0,y:0}}
                    whileInView={{opacity:1,y:-100}}
                    viewport={{once:false, amount:1}}
                    transition={{
                      duration:1,
                      delay:0.5,
                      ease: [0, 0.71, 0.2, 1.01]

                    }}

                    className=" relative bg-white overflow-hidden w-full  flex justify-center  items-center">

                  <motion.div
                  initial={{y:700}}
                  whileInView={{y:350}}
                  viewport={{once:false}}
                  transition={{
                    duration:1.5,
                    delay:1,
                    ease: [0, 0.71, 0.2, 1.01]

                  }}
                  className=" absolute mix-blend-screen circle  z-0"></motion.div>
                    <div className="">
                    <span className='fontweight  tlsize  z-20 '>INTRO</span>

                  </div>

                    </motion.div>


                  </div>




            <div style={{perspective:2000}}   className="w-full  h-[90vh]  z-10    flex  justify-center md:justify-center items-end  shadow-custom2 ">


            <motion.img
              onMouseMove={handleMouseMove}
              initial={{opacity:0, scale:0}}
                style={{ cursorX,cursorY,rotateX,rotateY, zIndex: 100}}
                onHoverStart={HoverStart}
                onHoverEnd={HoverEnd}
                whileInView={{rotateX: isHovered ? rotateX:0, rotateY: isHovered ? rotateY:0,opacity:1,scale:1 }}
                viewport={{once:false, amount:1}}
                transition={{
                  duration:1,
                  delay:0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
            className='w-[450px] h-[720px]  md:w-[350px] md:h-[520px] '  src={hand} alt="asd" />


          </div>


        </div>
        </section>
        <section className="w-full h-[100vh] flex relative flex-col bg-yellow-400 ">

        <div className="absolute  right-0 triangle-bottomleft2"></div>

          <div className="h-[90vh] flex flex-col items-center justify-center space-y-8 z-10">
                  <Info
                  titles={"CodeCrafted:"}
                  subtitle={"Your Developer Extraordinaire"}
                  infos={"From global enterprises to emerging ventures, I specialize in crafting impactful digital experiences tailored to your unique vision."}
                  />


          </div>


        </section>

    </div>
  )
}

export default Intro
