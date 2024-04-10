import React from 'react'
import { motion } from 'framer-motion'
const Informations = ({titles,subtitle,infos}) => {
  return (
    <>


              <motion.div
                   initial={{opacity:0,y:30}}
                   whileInView={{opacity:1,y:0}}
                   transition={{
                    duration:1.5,
                    delay:0.3,
                    ease: [0, 0.71, 0.2, 1.01]

                  }}
              className="text-left md:text-center w-3/4 md:pl-0  "><h2 className='font-bold  leading-[1.1]'>{titles}<br/>{subtitle}</h2>
              </motion.div>

              <motion.div
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{
                  duration:2,
                  delay:0.3,
                  ease: [0, 0.71, 0.2, 1.01]

                }}
              className="w-3/4  md:p-12 md:w-[100%] md:text-xs text-left md:text-center font-thin "><span>{infos}</span>
              </motion.div>
    </>
  )
}

export default Informations
