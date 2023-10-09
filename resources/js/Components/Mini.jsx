import React from 'react'
import { motion  } from "framer-motion"
const Mini = () => {
  return (
  <>
   <div className="flex flex-col  justify-center items-center space-y-4 ">
                  <motion.div
                    initial={{opacity:0,x:-30}}
                    whileInView={{opacity:1,x:0}}
                    transition={{
                      duration:2,
                      delay:0.3,
                      ease: [0, 0.71, 0.2, 1.01]

                    }}

                  className=""><span className='font-bold' >CRAFTED DESIGN</span></motion.div>
                  <motion.div
                  initial={{width:0}}
                  whileInView={{width:'40%',rotate:170}}
                  viewport={{once:false}}
                  transition={{duration:1}}
                  className="rectangle"></motion.div>
              </div>
  </>
  )
}

export default Mini
