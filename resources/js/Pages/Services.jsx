import React from 'react'
import { Navbar,Servicebox,ParticleContainer } from '@/Components'
import { box,codicon,VR,CMSicon } from '@/assets'
import { motion,useMotionValue,useTransform  } from "framer-motion"
const Services = () => {
  return (
   

  
      


        <section className='w-full  h-[90vh] flex flex-col items-center space-y-16'>



        {/* <img src={VR} alt="Virtual Reality" className='mix-blend-multiply relative bottom-0 left-0 z-10' loading='lazy'/> */}
        <motion.div
        initial={{opacity:0,y:-30}}
        whileInView={{opacity:1,y:0}}
        transition={{
        duration:3,
        delay:0.3,
        ease: [0, 0.71, 0.2, 1.01]

        }}>

            <div className="flex flex-col items-center text-left md:text-center space-y-6 z-20">
                <h2 className='font-bold  leading-[1.1] '>SERVICES</h2>
                <span className='font-medium md:text-lg text-2xl'>Transforming Your Online Influence</span>
                <span className='font-medium  text-sm text-[#8E8E8E]'>Maximize your marketability and revenue with our game-changing solutions</span>
            </div>
            </motion.div>

            <div className="w-full flex md:flex-col md:space-x-0  space-x-12 md:space-y-6 justify-center items-center  z-20">


                    <motion.div
                           className='h-full'
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                      duration:2,
                      delay:0.3,
                      ease: [0, 0.71, 0.2, 1.01]

                    }}>

                    <Servicebox
                    icons={box}
                    titles={'Web Design'}
                    message={'I specialize in creating stunning, user-friendly websites that resonate with your audience. I blend aesthetics with functionality, ensuring your website is not only visually appealing but also easy to navigate, responsive, and aligned with your brand identity.'}
                    />
                    </motion.div>

                         <motion.div
                         className='h-full'
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                      duration:2,
                      delay:0.8,
                      ease: [0, 0.71, 0.2, 1.01]

                    }}>


                    <Servicebox
                    icons={codicon}
                    titles={'Web Development'}
                    message={`Elevate your online presence with
                    my expandable web development
                    services. Writing clean coding and
                    adherence to coding standards, ensure
                    your website not only scales seamlessly
                    but also performs optimally.`}
                    />
                    </motion.div>


                    <div className="">
                    <motion.div
                           className='h-full'
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                      duration:2,
                      delay:1.3,
                      ease: [0, 0.71, 0.2, 1.01]

                    }}>

                    <Servicebox
                    icons={CMSicon}
                    titles={'CMS'}
                    message={`In the age of content, I understand the
                    importance of efficient management.
                    My CMS solutions offer you the ease
                    and flexibility to update and manage
                    your digital content hassle-free. Whether
                    it's a blog or an ecommerce platform,
                    I empower you with control and simplicity
                    through my CMS services.`}
                    />
                    </motion.div>
                    </div>
            </div>

        </section>


   

  )
}

export default Services
