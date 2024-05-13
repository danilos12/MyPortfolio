import {React,useEffect,useState} from 'react'
import { Navbar,Info,Minis,Sample,ParticleContainer } from '@/Components'
import { hand,astronaut } from '@/assets'
import { motion,useMotionValue,useTransform  } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Datas } from '@/Constants/SocialLinks';

const Intro = () => {
  const [scrollPosition,setScrollPosition] = useState(0);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const rotateX = useTransform(cursorY, [0, window.innerHeight], [-30, 30]);
  const rotateY = useTransform(cursorX, [0, window.innerWidth], [-80, 80]);


  const handleScroll = () =>{
    setScrollPosition(window.scrollY);
  }

  useEffect(()=>{
      window.addEventListener('scroll',handleScroll);
      return () => window.removeEventListener('scroll',handleScroll);
  },[])


  return (
    <div className='flex flex-col  w-full relative  h-screen overflow-y-scroll overflow-x-hidden m-0 p-0 '>

        <section className='w-full h-[10vh] z-30'>
                    <Navbar/>
        </section>
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <ParticleContainer count={100} />
        </div>
        <section  className="   w-full flex p-6">

          {/* <motion.div
             initial={{opacity:0,x:-30}}
             whileInView={{opacity:1,x:0}}
             transition={{
               duration:2,
               delay:0.3,
               ease: [0, 0.71, 0.2, 1.01]

             }}
          className='fixed flex flex-col items-center space-y-6 top-[50%] left-14 z-[50] md:hidden'>

            <a href={Datas.Linkses.Facebook}>
              <FontAwesomeIcon className='w-6 h-6' icon={faFacebook} />
            </a>
            <a href={Datas.Linkses.Github}>
            <FontAwesomeIcon className='w-6 h-6' icon={faGithub} />
              </a>
              <a href={Datas.Linkses.Instagram}>
              <FontAwesomeIcon className='w-6 h-6' icon={faInstagram} />
              </a>
          </motion.div> */}

          <div className="h-[90vh] flex flex-col justify-center items-center w-1/2 z-10  overflow-x-auto">
                <div className="w-[80%]">
                <motion.div
                    initial={{opacity:0,x:-30}}
                    whileInView={{opacity:1,x:0}}
                    transition={{
                      duration:2,
                      delay:0.3,
                      ease: [0, 0.71, 0.2, 1.01]

                    }}>
                    <span className='font-bold text-left text-8xl textgradient '>STOP! CHOOSE THE RIGHT DEVELOPER!</span>
                    </motion.div>
                </div>
                <div className="w-[80%] mt-8">
                <motion.div
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                      duration:2,
                      delay:0.3,
                      ease: [0, 0.71, 0.2, 1.01]

                    }}>
                <span className='font-thin text-left'>You’ll end up losing much revenue and starting over from scratch. Let's stop making it happen! (Not an AGENCY but a passionate Developer!!)</span>
                </motion.div>
                </div>






        </div>


          <div className="h-[90vh] flex rotate-[-40.32deg] mix-blend-overlay flex-col justify-center w-1/2 z-10">
          <motion.div
           animate={{ y: [-40, 40, -40, 40,-40], transition: { duration: 20, repeat: Infinity } }}
            style={{ display: 'inline-block' }} // Ensure motion works properly
            >
            <img className="w-full h-full mix-blend-overlay object-cover object-center" src={astronaut} alt="Astronaut" loading="lazy" />
            </motion.div>
        </div>

        </section>
        <section className="w-full h-[100vh] flex  flex-col md:space-y-8">

        <div className="w-full flex justify-center items-end  h-[20vh]">
           <Minis/>


        </div>

          <div className="h-[80%]  flex flex-row md:flex-col  items-center justify-start md:space-y-0 z-10">

                  <div className="w-1/2 md:w-full h-3/4 flex flex-col space-y-6 justify-center items-center border-r border-gray-200 font-thin">
                  <Info
                  titles={"CodeCrafted:"}
                  subtitle={"Your Developer Extraordinaire"}
                  infos={"Revolutionize your online presence with my expertise in creating dynamic digital experiences. Whether you're a global powerhouse or a burgeoning startup, I excel at shaping web solutions that embody your distinct vision. Elevate your brand with my unparalleled web development services"}
                  />
                </div>
                <div className="w-1/2 md:w-full h-3/4 flex justify-center items-center">
                    <div className="">
                  <Sample/>
                  </div>

                </div>

          </div>


        </section>

    </div>
  )
}

export default Intro
