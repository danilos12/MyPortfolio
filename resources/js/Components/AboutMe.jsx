import React,{useEffect,useState} from 'react'
import { ProfilePic } from '@/assets'
import { motion } from 'framer-motion'
const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])


  return (
    <>

        <div className="w-[100%] h-auto justify-center items-center flex flex-col">
         
            <motion.div
             initial={{opacity:0,x:0,y:30,rotate:0}}
             whileInView={{
              opacity:1,
              y:0,
              x:isMobile ? 0 : 100,
              rotate: isMobile ? 0:-10}}
             transition={{
               duration:2,
               delay:0.3,
               ease: [0, 0.71, 0.2, 1.01]
 
             }}
            
            className="bg-white w-50% md:p-2 p-4   flex justify-center md:items-center items-end">
            <img className='object-cover md:w-40 w-96 ' src={ProfilePic} alt="dp" />
            </motion.div>
            
            
      
           
        </div>
    
    </>
  )
}

export default AboutMe