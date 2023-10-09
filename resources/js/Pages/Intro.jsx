import {React,useEffect,useState} from 'react'
import { Navbar,Info,Minis,Sample } from '@/Components'
import { hand } from '@/assets'
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
    <div className='flex flex-col  w-full relative  h-screen overflow-y-scroll overflow-x-hidden m-0 p-0'>

<section className='w-full h-[10vh] z-30'>
            <Navbar/>
      </section>
        <section  className="h-[90vh]   w-full flex-col flex   border-b border-gray-200">
          <motion.div
             initial={{opacity:0,x:-30}}
             whileInView={{opacity:1,x:0}}
             transition={{
               duration:2,
               delay:0.3,
               ease: [0, 0.71, 0.2, 1.01]

             }}
          className='absolute flex flex-col items-center space-y-6 top-[50%] left-14 z-[50] md:hidden'>

            <a href={Datas.Linkses.Facebook}>
              <FontAwesomeIcon className='w-6 h-6' icon={faFacebook} />
            </a>
            <a href={Datas.Linkses.Github}>
            <FontAwesomeIcon className='w-6 h-6' icon={faGithub} />
              </a>
              <a href={Datas.Linkses.Instagram}>
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




            <div    className="w-full  h-[90vh]  z-10    flex  justify-center md:justify-center items-end  shadow-custom2 ">


            <motion.img

              initial={{opacity:0, scale:0}}
                style={{ cursorX,cursorY, zIndex: 100}}

                whileInView={{opacity:1,scale:1 }}
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
        <section className="w-full h-[100vh] flex  flex-col md:space-y-8">

        <div className="w-full flex justify-center items-end  h-[20vh]">
           <Minis/>


        </div>

          <div className="h-[80%]  flex flex-row md:flex-col  items-center justify-start md:space-y-0 z-10">

                  <div className="w-1/2 md:w-full h-3/4 flex flex-col space-y-6 justify-center items-center border-r border-gray-200">
                  <Info
                  titles={"CodeCrafted:"}
                  subtitle={"Your Developer Extraordinaire"}
                  infos={"Revolutionize your online presence with my expertise in creating dynamic digital experiences. Whether you're a global powerhouse or a burgeoning startup, I excel at shaping web solutions that embody your distinct vision. Elevate your brand with my unparalleled web development services"}
                  />
                </div>
                <div className="w-1/2 md:w-full h-3/4 flex justify-center items-center  ">
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
