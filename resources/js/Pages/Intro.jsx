import {React,useEffect,useState} from 'react'
import { Navbar,Paragraph,Info,AboutMe,Minis,Sample,ParticleContainer } from '@/Components'
import { astronaut } from '@/assets'
import { motion,useMotionValue,useTransform  } from "framer-motion"
import { Services,TechStack,Projects } from '.'

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
    <div className='flex flex-col  w-full relative  h-screen overflow-y-scroll overflow-x-hidden  '>

        <section className='w-full fixed h-[10vh] z-30'>
              <Navbar/>
        </section>
        <div style={{ position: 'relative', width: '100vw', height: '100%' }}>
            <ParticleContainer count={100} />
        </div>
        <section id='home' className="w-full flex p-6">



          <div className=" flex flex-col justify-center items-center md:w-full w-1/2 z-10  ">
                <div className="w-[80%] font-bold md:text-center text-left md:text-5xl text-8xl ">
                <motion.div
                    initial={{opacity:0,x:-30}}
                    whileInView={{opacity:1,x:0}}
                    transition={{
                      duration:2,
                      delay:0.3,
                      ease: [0, 0.71, 0.2, 1.01]

                    }}>
                    <span className=' textgradient'>STOP! CHOOSE THE RIGHT DEVELOPER!</span>
                    </motion.div>
                </div>
                <div className="w-[80%] md:text-center text-left font-thin mt-8">
                <motion.div
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                      duration:2,
                      delay:0.3,
                      ease: [0, 0.71, 0.2, 1.01]

                    }}>
                <span>You’ll end up losing much revenue and starting over from scratch. Let's stop making it happen! (Not an AGENCY but a passionate Developer!!)</span>
                </motion.div>
                </div>






        </div>


          <div className="md:absolute md:left-[10vw]  md:block flex  rotate-[-40.32deg] mix-blend-overlay flex-col justify-center md:w-full w-1/2 z-10">
          <motion.div
           animate={{ y: [-40, 40, -40, 40,-40], transition: { duration: 20, repeat: Infinity } }}
            style={{ display: 'inline-block' }} // Ensure motion works properly
            >
            <img className="w-full h-full md:w-[100vw] md:[100vh] mix-blend-overlay object-cover object-center" src={astronaut} alt="Astronaut" loading="lazy" />
            </motion.div>
        </div>

        </section>
        <section className="w-full flex  flex-col md:space-y-8">

        <div className="w-full flex justify-center items-end  h-[20vh]">
           <Minis/>


        </div>

          <div className="  flex flex-row md:flex-col  items-center justify-start md:space-y-0 z-10">

                  <div className="w-1/2 md:w-full h-3/4 flex flex-col space-y-6 justify-center items-center md:border-0 border-r border-gray-200 font-thin">
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
        
        <div id="about" className="w-full flex flex-col justify-center items-center mb-12 h-[20vh]">
        <motion.div
                               initial={{opacity:0,y:30}}
                               whileInView={{opacity:1,y:0}}
                               transition={{
                                duration:1.5,
                                delay:0.3,
                                ease: [0, 0.71, 0.2, 1.01]
            
                              }}
                          className="text-left md:text-center text-center w-full md:pl-0   mb-12"><h2 className='font-bold  leading-[1.1]'>ABOUT ME</h2>
                          </motion.div>
           <Minis/>


        </div>
        <section  className="w-full h-auto flex mb-[250px] pt-12 flex-col justify-center md:space-y-8">  
        <div className="  flex flex-row md:flex-col  items-center justify-start md:space-y-0 z-10">
            <div className="w-[40%] md:w-full h-3/4 flex flex-col space-y-6 justify-center items-center border-gray-200 font-thin">
              <AboutMe/>
            </div>
            <div className="w-1/2 md:w-full h-3/4 flex justify-center items-center">
              <Paragraph 
              titles={"I'm a Web Developer"}
              subtitle={"I'm Andre"}
              infos={"Experienced Web Developer with a strong track record in the IT and services industry. Passionate about creating user-friendly, responsive web experiences that drive real business results. I specialize in building mobile-optimized solutions that help brands stand out and succeed in the digital landscape. My goal is to turn complex challenges into seamless, high-performing applications that deliver measurable impact."}
              />
            </div>
  
          </div>
            
          </section>
        <section id="projects" className="w-full h-auto flex flex-col justify-center md:space-y-8">  
        <div className="  flex flex-row md:flex-col  items-center justify-start md:space-y-0 z-10">
              <Projects/> 
          </div>
            
          </section>
        <section id="services" className="w-full h-auto flex flex-col justify-center md:space-y-8">  
        <div className="  flex flex-row md:flex-col  items-center justify-start md:space-y-0 z-10">
              <Services/> 
          </div>
            
          </section>
      

    </div>
  )
}

export default Intro
