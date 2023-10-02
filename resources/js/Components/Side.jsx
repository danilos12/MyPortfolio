import React from 'react'
import { vector3 } from '@/assets'
import { motion } from 'framer-motion'
const Side = ({label,images,className}) => {
  return (
    <div>
          <motion.div
            initial={{opacity:0,x:30}}
            whileInView={{opacity:1,x:0}}
            whileHover={{scale:1.1,x:-30}}
            transition={{
              duration:2,
              delay:0.3,
              ease: [0, 0.71, 0.2, 1.01]

            }}

          className="   flex    justify-center items-center ">
        <div className=" rounded-xl bg-black p-2 text-yellow-500 text-center font-extrabold ">
                <span >{label}</span>
        </div>
        <div className="w-[50px] h-[2px] bg-black  text-yellow-500 text-center font-extrabold"></div>
        <div className="relative ">
            <img className='h-[50px] w-[55px] shadow-custom' src={vector3} alt="Image 1" />
            <img className={`${className} absolute `} src={images} alt="Image 2" />
        </div>


        </motion.div>
    </div>
  )
}

export default Side
