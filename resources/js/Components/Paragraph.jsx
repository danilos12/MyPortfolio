import React from 'react'
import { motion } from 'framer-motion'
const Paragraph = ({infos,titles,subtitle}) => {
  return (
    <>
          

    <motion.div
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                      duration:2,
                      delay:0.3,
                      ease: [0, 0.71, 0.2, 1.01]
    
                    }}
                  className="w-3/4 flex flex-col  md:p-8 md:w-[100%] md:text-xs text-left md:text-center font-thin ">
                    <motion.div
                       initial={{opacity:0,y:30}}
                       whileInView={{opacity:1,y:0}}
                       transition={{
                        duration:1.5,
                        delay:0.3,
                        ease: [0, 0.71, 0.2, 1.01]
    
                      }}
                  className="text-left md:text-center w-full md:pl-0  "><h2 className='font-bold  leading-[1.1]'>{titles}</h2><br/>
                    <div className="flex items-center">

                        <motion.div
                                      initial={{width:0}}
                                      whileInView={{width:'10%',height:'5px'}}
                                      viewport={{once:false}}
                                      transition={{duration:1}}
                                      className="rectangle mr-2"></motion.div> {subtitle}
                  <h5>
                    </h5>
                    </div>
                    <br/>
                  </motion.div>
                    <span>{infos}</span>
                  </motion.div>
    </>
  )
}

export default Paragraph