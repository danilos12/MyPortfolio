import React from 'react'
import { motion } from 'framer-motion'
import { Cards } from '@/Components'
import { CodebilityCover, LMHAccess, ThatAccountant } from '@/assets' 
const Projects = () => {
  return (
    <>
    <div className="flex flex-col justify-start md:justify-center h-[auto] items-center w-full">
     
            <motion.div
        initial={{opacity:0,y:-30}}
        whileInView={{opacity:1,y:0}}
        transition={{
            duration:3,
            delay:0.3,
            ease: [0, 0.71, 0.2, 1.01]
            
        }} className="flex flex-col items-center text-left md:text-center space-y-6 z-20">

          
                <h2 className='text-9xl md:text-5xl md:text-left border-text'>MY
                        <br/>                    
                    PROJECTS</h2>       
            </motion.div>
            <div className="w-full flex flex-col justify-center items-center mt-12">
                <motion.div
                  initial={{opacity:0,x:30}}
                  whileInView={{opacity:1,x:0}}
                  transition={{
                      duration:3,
                      delay:0.3,
                      ease: [0, 0.71, 0.2, 1.01]
                       }}
                className="w-full flex justify-center items-center pb-12 pt-12">
                    <Cards
                    role={"01 UI/UX DESIGNER & DEVELOPER"}
                    coverphoto={LMHAccess} 
                    information={"House Scaffolding Services"}
                    company={"LMH ACCESS"}
                    links={"https://www.lmhaccess.co.uk"}
                    />
                </motion.div>
                <motion.div 
                 initial={{opacity:0,x:-30}}
                 whileInView={{opacity:1,x:0}}
                 transition={{
                     duration:3,
                     delay:0.3,
                     ease: [0, 0.71, 0.2, 1.01]
                    }}
                className="w-full flex justify-center items-center pb-12 pt-12">
                    <Cards
                    role={"01 UI/UX DESIGNER & DEVELOPER"}
                    coverphoto={CodebilityCover} 
                    information={"Web Developer Online Platorm"}
                    links={"https://codebility.tech"}
                    company={"CODEBILITY"}
                    />
                </motion.div>
                <motion.div
                  initial={{opacity:0,x:30}}
                  whileInView={{opacity:1,x:0}}
                  transition={{
                      duration:3,
                      delay:0.3,
                      ease: [0, 0.71, 0.2, 1.01]
                        }}
                className="w-full flex justify-center items-center pb-12 pt-12">
                    <Cards
                    role={"01 UI/UX DESIGNER & DEVELOPER"}
                    coverphoto={ThatAccountant} 
                    information={"Accounting Consultancy Firm"}
                    links={"https://that-accountant-temp-co-uk.stackstaging.com/"}
                    company={"ThatAccountant"}
                    />
                </motion.div>
            </div>
   
        
    </div>
    </>
  )
}

export default Projects