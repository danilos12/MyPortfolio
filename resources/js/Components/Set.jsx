import React from 'react'
import { vector3 } from '@/assets'
import { motion } from 'framer-motion'
const set = ({label,images,className}) => {
  return (
  <>
    <motion.div
     initial={{opacity:0,y:30}}
     whileInView={{opacity:1,y:0}}
     whileHover={{scale:1.1,y:-30}}
     transition={{
       duration:2,
       delay:0.3,
       ease: [0, 0.71, 0.2, 1.01]

     }}
    className="   flex flex-col   justify-center items-center ">
        <div className=" rounded-xl bg-white p-2 text-yellow-500 text-center font-extrabold ">
                <span >{label}</span>
        </div>
        <div className="w-[2px] h-[50px] bg-white  text-yellow-500 text-center font-extrabold"></div>
        <div className="relative ">
            <img className='h-[50px] w-[55px] shadow-custom ' src={vector3} alt="Image 1" />
            <img className={`${className} absolute  top-[25%] left-[25%] `} src={images} alt="Image 2" />
        </div>


  </motion.div>
  </>
  )
}

export default set
